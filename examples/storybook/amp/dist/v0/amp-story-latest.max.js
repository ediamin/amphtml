(self.AMP=self.AMP||[]).push({n:"amp-story",ev:"1.0",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

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
      function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it)
          return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
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
      function _unsupportedIterableToArray3(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray3(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray3(o, minLen);
      }
      function _arrayLikeToArray3(arr, len) {
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
          for (var _iterator = _createForOfIteratorHelperLoose3(a2), _step; !(_step = _iterator()).done; ) {
            var f = _step.value;
            128 > f && b.push(y(f));
          }
          var h = f = b.length;
          for (f && b.push("-"); h < d; ) {
            var g = 2147483647;
            for (var _iterator2 = _createForOfIteratorHelperLoose3(a2), _step2; !(_step2 = _iterator2()).done; ) {
              var _b2 = _step2.value;
              _b2 >= c && _b2 < g && (g = _b2);
            }
            var _d = h + 1;
            g - c > n((2147483647 - e) / _d) && p("overflow");
            e += (g - c) * _d;
            c = g;
            for (var _iterator3 = _createForOfIteratorHelperLoose3(a2), _step3; !(_step3 = _iterator3()).done; ) {
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
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
    });
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
  function findIndex(array, predicate7) {
    for (var i = 0; i < array.length; i++) {
      if (predicate7(array[i], i, array)) {
        return i;
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
  function lastItem(array) {
    return array[array.length - 1];
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
  function hasOwn(obj, key) {
    return hasOwn_.call(obj, key);
  }
  function omit(o, props) {
    return Object.keys(o).reduce(function(acc, key) {
      if (!props.includes(key)) {
        acc[key] = o[key];
      }
      return acc;
    }, {});
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
  function htmlRefs(root) {
    var elements = root.querySelectorAll("[ref]");
    var refs = map();
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var ref = devAssert(element.getAttribute("ref"), "Empty ref attr");
      element.removeAttribute("ref");
      devAssert(refs[ref] === void 0, "Duplicate ref");
      refs[ref] = element;
    }
    return refs;
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
  function registerServiceBuilderForDoc(nodeOrDoc, id, constructor, opt_instantiate) {
    var ampdoc = getAmpdoc(nodeOrDoc);
    var holder = getAmpdocServiceHolder(ampdoc);
    registerServiceInternal(holder, ampdoc, id, constructor);
    if (opt_instantiate) {
      getServiceInternal(holder, id);
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
  function assertDoesNotContainDisplay(styles) {
    if ("display" in styles) {
      dev().error("STYLE", "`display` style detected in styles. You must use toggle instead.");
    }
    return styles;
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
  function deg(value) {
    return value + "deg";
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
  function scale(value) {
    return "scale(" + value + ")";
  }
  function rotate(value) {
    if (typeof value == "number") {
      value = deg(value);
    }
    return "rotate(" + value + ")";
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

  // extensions/amp-story/1.0/amp-story-base-layer.js
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var AmpStoryBaseLayer = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpStoryBaseLayer2, _AMP$BaseElement);
    var _super = _createSuper(AmpStoryBaseLayer2);
    function AmpStoryBaseLayer2(element) {
      _classCallCheck2(this, AmpStoryBaseLayer2);
      return _super.call(this, element);
    }
    _createClass(AmpStoryBaseLayer2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.CONTAINER;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.element.classList.add("i-amphtml-story-layer");
      }
    }]);
    return AmpStoryBaseLayer2;
  }(AMP.BaseElement);

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
  function escapeCssSelectorNth(ident) {
    var escaped = String(ident);
    devAssert2(escaped.indexOf(")") === -1);
    return escaped;
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
  function lastChildElement(parent, callback) {
    for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
      if (callback(child)) {
        return child;
      }
    }
    return null;
  }
  function childElements(parent, callback) {
    var children = [];
    for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
      if (callback(child)) {
        children.push(child);
      }
    }
    return children;
  }
  function childNodes(parent, callback) {
    var nodes = [];
    for (var child = parent.firstChild; child; child = child.nextSibling) {
      if (callback(child)) {
        nodes.push(child);
      }
    }
    return nodes;
  }
  function childElementByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelector(parent, "> " + tagName);
  }
  function childElementsByTag(parent, tagName) {
    assertIsName(tagName);
    return scopedQuerySelectorAll(parent, "> " + tagName);
  }

  // src/dom.js
  var UPGRADE_TO_CUSTOMELEMENT_PROMISE = "__AMP_UPG_PRM";
  var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = "__AMP_UPG_RES";
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
  function copyChildren(from, to) {
    var frag = to.ownerDocument.createDocumentFragment();
    for (var n = from.firstChild; n; n = n.nextSibling) {
      frag.appendChild(n.cloneNode(true));
    }
    to.appendChild(frag);
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
  function isConnectedNode(node) {
    var connected = node.isConnected;
    if (connected !== void 0) {
      return connected;
    }
    var n = node;
    do {
      n = rootNodeFor(n);
      if (n.host) {
        n = n.host;
      } else {
        break;
      }
    } while (true);
    return n.nodeType === Node.DOCUMENT_NODE;
  }
  function rootNodeFor(node) {
    if (Node.prototype.getRootNode) {
      return node.getRootNode() || node;
    }
    var n;
    for (n = node; !!n.parentNode && !isShadowRoot(n); n = n.parentNode) {
    }
    return n;
  }
  function isShadowRoot(value) {
    if (!value) {
      return false;
    }
    if (value.tagName == "I-AMPHTML-SHADOW-ROOT") {
      return true;
    }
    return value.nodeType == 11 && Object.prototype.toString.call(value) === "[object ShadowRoot]";
  }
  function getDataParamsFromAttributes(element, opt_computeParamNameFunc, opt_paramPattern) {
    var computeParamNameFunc = opt_computeParamNameFunc || function(key2) {
      return key2;
    };
    var dataset = element.dataset;
    var params = dict();
    var paramPattern = opt_paramPattern ? opt_paramPattern : /^param(.+)/;
    for (var key in dataset) {
      var _matches = key.match(paramPattern);
      if (_matches) {
        var param = _matches[1][0].toLowerCase() + _matches[1].substr(1);
        params[computeParamNameFunc(param)] = dataset[key];
      }
    }
    return params;
  }
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }
  function isJsonScriptTag(element) {
    return element.tagName == "SCRIPT" && element.hasAttribute("type") && element.getAttribute("type").toUpperCase() == "APPLICATION/JSON";
  }
  function isRTL(doc) {
    var dir = doc.body.getAttribute("dir") || doc.documentElement.getAttribute("dir") || "ltr";
    return dir == "rtl";
  }
  function tryFocus(element) {
    try {
      element.focus();
    } catch (e) {
    }
  }
  function isAmpElement(element) {
    var tag = element.tagName;
    return tag.startsWith("AMP-") && !(tag == "AMP-STICKY-AD-TOP-PADDING" || tag == "AMP-BODY");
  }
  function whenUpgradedToCustomElement(element) {
    devAssert(isAmpElement(element), "element is not AmpElement");
    if (element.createdCallback) {
      return Promise.resolve(element);
    }
    if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
      var deferred = new Deferred();
      element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = deferred.promise;
      element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = deferred.resolve;
    }
    return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
  }

  // extensions/amp-story/1.0/amp-story-cta-layer.js
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
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get5(target2, property2, receiver2) {
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
      object = _getPrototypeOf2(object);
      if (object === null)
        break;
    }
    return object;
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
    _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
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
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var TAG2 = "amp-story-cta-layer";
  var AmpStoryCtaLayer = /* @__PURE__ */ function(_AmpStoryBaseLayer) {
    _inherits2(AmpStoryCtaLayer2, _AmpStoryBaseLayer);
    var _super = _createSuper2(AmpStoryCtaLayer2);
    function AmpStoryCtaLayer2() {
      _classCallCheck3(this, AmpStoryCtaLayer2);
      return _super.apply(this, arguments);
    }
    _createClass2(AmpStoryCtaLayer2, [{
      key: "buildCallback",
      value: function buildCallback() {
        _get(_getPrototypeOf2(AmpStoryCtaLayer2.prototype), "buildCallback", this).call(this);
        this.setOrOverwriteAttributes_();
        this.checkAndRemoveLayerIfOnFirstPage_();
      }
    }, {
      key: "setOrOverwriteAttributes_",
      value: function setOrOverwriteAttributes_() {
        var ctaLinks = this.element.querySelectorAll("a");
        for (var i = 0; i < ctaLinks.length; i++) {
          addAttributesToElement(ctaLinks[i], dict({
            "target": "_blank"
          }));
          if (!ctaLinks[i].getAttribute("role")) {
            addAttributesToElement(ctaLinks[i], dict({
              "role": "link"
            }));
          }
        }
        var ctaButtons = this.element.querySelectorAll("button");
        for (var _i = 0; _i < ctaButtons.length; _i++) {
          if (!ctaButtons[_i].getAttribute("role")) {
            addAttributesToElement(ctaButtons[_i], dict({
              "role": "button"
            }));
          }
        }
      }
    }, {
      key: "checkAndRemoveLayerIfOnFirstPage_",
      value: function checkAndRemoveLayerIfOnFirstPage_() {
        if (matches(this.element, "amp-story-page:first-of-type > amp-story-cta-layer")) {
          removeElement(this.element);
          user().error(TAG2, "amp-story-cta-layer is not allowed on the first page of an amp-story.");
        }
      }
    }]);
    return AmpStoryCtaLayer2;
  }(AmpStoryBaseLayer);

  // extensions/amp-story/1.0/embed-mode.js
  var EmbedMode = {
    NOT_EMBEDDED: 0,
    NAME_TBD: 1,
    NO_SHARING: 2,
    PREVIEW: 3,
    NO_SHARING_NOR_AUDIO_UI: 4
  };
  var EmbedModeParam = "embedMode";
  function parseEmbedMode(str) {
    var params = parseQueryString(str);
    var unsanitizedEmbedMode = params[EmbedModeParam];
    var embedModeIndex = parseInt(unsanitizedEmbedMode, 10);
    return isEnumValue(EmbedMode, embedModeIndex) ? embedModeIndex : EmbedMode.NOT_EMBEDDED;
  }

  // src/core/data-structures/observable.js
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
        for (var _iterator = _createForOfIteratorHelperLoose2(this.handlers_), _step; !(_step = _iterator()).done; ) {
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
  var Services = /* @__PURE__ */ function() {
    function Services2() {
      _classCallCheck5(this, Services2);
    }
    _createClass4(Services2, null, [{
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

  // src/core/types/object/json.js
  function parseJson(json) {
    return JSON.parse(json);
  }
  function deepEquals(a2, b, depth) {
    if (depth === void 0) {
      depth = 5;
    }
    if (!isFinite(depth) || depth < 0) {
      throw new Error("Invalid depth: " + depth);
    }
    if (a2 === b) {
      return true;
    }
    var queue = [{
      a: a2,
      b,
      depth
    }];
    while (queue.length > 0) {
      var _queue$shift = queue.shift(), _a = _queue$shift.a, _b = _queue$shift.b, _depth = _queue$shift.depth;
      if (_depth > 0) {
        if (typeof _a !== typeof _b) {
          return false;
        } else if (isArray(_a) && isArray(_b)) {
          if (_a.length !== _b.length) {
            return false;
          }
          for (var i = 0; i < _a.length; i++) {
            queue.push({
              a: _a[i],
              b: _b[i],
              depth: _depth - 1
            });
          }
          continue;
        } else if (_a && _b && typeof _a === "object" && typeof _b === "object") {
          var keysA = Object.keys(_a);
          var keysB = Object.keys(_b);
          if (keysA.length !== keysB.length) {
            return false;
          }
          for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
            var k = _keysA[_i];
            queue.push({
              a: _a[k],
              b: _b[k],
              depth: _depth - 1
            });
          }
          continue;
        }
      }
      if (_a !== _b) {
        return false;
      }
    }
    return true;
  }

  // extensions/amp-story/1.0/amp-story-store-service.js
  var _stateComparisonFunct;
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
  var TAG3 = "amp-story";
  var getStoreService = function getStoreService2(win) {
    var service = Services.storyStoreService(win);
    if (!service) {
      service = new AmpStoryStoreService(win);
      registerServiceBuilder(win, "story-store", function() {
        return service;
      });
    }
    return service;
  };
  var UIType = {
    MOBILE: 0,
    DESKTOP_PANELS: 1,
    DESKTOP_FULLBLEED: 2,
    VERTICAL: 3
  };
  var EmbeddedComponentState = {
    HIDDEN: 0,
    FOCUSED: 1,
    EXPANDED: 2
  };
  var StateProperty = {
    CAN_INSERT_AUTOMATIC_AD: "canInsertAutomaticAd",
    CAN_SHOW_AUDIO_UI: "canShowAudioUi",
    CAN_SHOW_NAVIGATION_OVERLAY_HINT: "canShowNavigationOverlayHint",
    CAN_SHOW_PAGINATION_BUTTONS: "canShowPaginationButtons",
    CAN_SHOW_PREVIOUS_PAGE_HELP: "canShowPreviousPageHelp",
    CAN_SHOW_SHARING_UIS: "canShowSharingUis",
    CAN_SHOW_SYSTEM_LAYER_BUTTONS: "canShowSystemLayerButtons",
    VIEWER_CUSTOM_CONTROLS: "viewerCustomControls",
    ACCESS_STATE: "accessState",
    AD_STATE: "adState",
    PAGE_ATTACHMENT_STATE: "pageAttachmentState",
    AFFILIATE_LINK_STATE: "affiliateLinkState",
    DESKTOP_STATE: "desktopState",
    EDUCATION_STATE: "educationState",
    GYROSCOPE_PERMISSION_STATE: "gyroscopePermissionState",
    HAS_SIDEBAR_STATE: "hasSidebarState",
    INFO_DIALOG_STATE: "infoDialogState",
    INTERACTIVE_COMPONENT_STATE: "interactiveEmbeddedComponentState",
    INTERACTIVE_REACT_STATE: "interactiveReactState",
    KEYBOARD_ACTIVE_STATE: "keyboardActiveState",
    MUTED_STATE: "mutedState",
    PAGE_HAS_AUDIO_STATE: "pageAudioState",
    PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE: "pageHasElementsWithPlaybackState",
    PANNING_MEDIA_STATE: "panningMediaState",
    PAUSED_STATE: "pausedState",
    PREVIEW_STATE: "previewState",
    RTL_STATE: "rtlState",
    SHARE_MENU_STATE: "shareMenuState",
    SIDEBAR_STATE: "sidebarState",
    SUPPORTED_BROWSER_STATE: "supportedBrowserState",
    STORY_HAS_AUDIO_STATE: "storyHasAudioState",
    STORY_HAS_BACKGROUND_AUDIO_STATE: "storyHasBackgroundAudioState",
    STORY_HAS_PLAYBACK_UI_STATE: "storyHasPlaybackUiState",
    SYSTEM_UI_IS_VISIBLE_STATE: "systemUiIsVisibleState",
    UI_STATE: "uiState",
    VIEWPORT_WARNING_STATE: "viewportWarningState",
    ACTIONS_ALLOWLIST: "actionsAllowlist",
    CONSENT_ID: "consentId",
    CURRENT_PAGE_ID: "currentPageId",
    CURRENT_PAGE_INDEX: "currentPageIndex",
    ADVANCEMENT_MODE: "advancementMode",
    NAVIGATION_PATH: "navigationPath",
    NEW_PAGE_AVAILABLE_ID: "newPageAvailableId",
    PAGE_IDS: "pageIds",
    PAGE_SIZE: "pageSize"
  };
  var Action = {
    ADD_INTERACTIVE_REACT: "addInteractiveReact",
    ADD_TO_ACTIONS_ALLOWLIST: "addToActionsAllowlist",
    CHANGE_PAGE: "setCurrentPageId",
    SET_CONSENT_ID: "setConsentId",
    SET_ADVANCEMENT_MODE: "setAdvancementMode",
    SET_NAVIGATION_PATH: "setNavigationPath",
    SET_PAGE_IDS: "setPageIds",
    TOGGLE_ACCESS: "toggleAccess",
    TOGGLE_AD: "toggleAd",
    TOGGLE_AFFILIATE_LINK: "toggleAffiliateLink",
    TOGGLE_EDUCATION: "toggleEducation",
    TOGGLE_HAS_SIDEBAR: "toggleHasSidebar",
    TOGGLE_INFO_DIALOG: "toggleInfoDialog",
    TOGGLE_INTERACTIVE_COMPONENT: "toggleInteractiveComponent",
    TOGGLE_KEYBOARD_ACTIVE_STATE: "toggleKeyboardActiveState",
    TOGGLE_MUTED: "toggleMuted",
    TOGGLE_PAGE_ATTACHMENT_STATE: "togglePageAttachmentState",
    TOGGLE_PAGE_HAS_AUDIO: "togglePageHasAudio",
    TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK: "togglePageHasElementWithPlayblack",
    TOGGLE_PAUSED: "togglePaused",
    TOGGLE_RTL: "toggleRtl",
    TOGGLE_SHARE_MENU: "toggleShareMenu",
    TOGGLE_SIDEBAR: "toggleSidebar",
    TOGGLE_SUPPORTED_BROWSER: "toggleSupportedBrowser",
    TOGGLE_STORY_HAS_AUDIO: "toggleStoryHasAudio",
    TOGGLE_STORY_HAS_BACKGROUND_AUDIO: "toggleStoryHasBackgroundAudio",
    TOGGLE_STORY_HAS_PLAYBACK_UI: "toggleStoryHasPlaybackUi",
    TOGGLE_SYSTEM_UI_IS_VISIBLE: "toggleSystemUiIsVisible",
    TOGGLE_UI: "toggleUi",
    SET_GYROSCOPE_PERMISSION: "setGyroscopePermission",
    TOGGLE_VIEWPORT_WARNING: "toggleViewportWarning",
    ADD_NEW_PAGE_ID: "addNewPageId",
    SET_PAGE_SIZE: "updatePageSize",
    ADD_PANNING_MEDIA_STATE: "addPanningMediaState",
    SET_VIEWER_CUSTOM_CONTROLS: "setCustomControls"
  };
  var stateComparisonFunctions = (_stateComparisonFunct = {}, _stateComparisonFunct[StateProperty.ACTIONS_ALLOWLIST] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_COMPONENT_STATE] = function(old, curr) {
    return old.element !== curr.element || old.state !== curr.state;
  }, _stateComparisonFunct[StateProperty.NAVIGATION_PATH] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_IDS] = function(old, curr) {
    return old.length !== curr.length;
  }, _stateComparisonFunct[StateProperty.PAGE_SIZE] = function(old, curr) {
    return old === null || curr === null || old.width !== curr.width || old.height !== curr.height;
  }, _stateComparisonFunct[StateProperty.PANNING_MEDIA_STATE] = function(old, curr) {
    return old === null || curr === null || !deepEquals(old, curr, 2);
  }, _stateComparisonFunct[StateProperty.INTERACTIVE_REACT_STATE] = function(old, curr) {
    return !deepEquals(old, curr, 3);
  }, _stateComparisonFunct);
  var actions = function actions2(state, action, data) {
    var _extends22, _extends32, _extends42, _extends52, _extends62, _extends72, _extends8, _extends9, _extends10, _extends11, _extends12, _extends13, _extends14, _extends15, _extends16, _extends17, _extends18, _extends19, _extends20, _extends21, _extends222, _extends23, _extends24, _extends25, _extends26, _extends27, _extends28, _extends29, _extends30, _extends31, _extends322, _extends33, _extends34, _extends35, _extends36, _extends37;
    switch (action) {
      case Action.ADD_INTERACTIVE_REACT:
        return _extends({}, state, (_extends32 = {}, _extends32[StateProperty.INTERACTIVE_REACT_STATE] = _extends({}, state[StateProperty.INTERACTIVE_REACT_STATE], (_extends22 = {}, _extends22[data["interactiveId"]] = data, _extends22)), _extends32));
      case Action.ADD_NEW_PAGE_ID:
        return _extends({}, state, (_extends42 = {}, _extends42[StateProperty.NEW_PAGE_AVAILABLE_ID] = data, _extends42));
      case Action.ADD_PANNING_MEDIA_STATE:
        var updatedState = _extends({}, state[StateProperty.PANNING_MEDIA_STATE], data);
        return _extends({}, state, (_extends52 = {}, _extends52[StateProperty.PANNING_MEDIA_STATE] = updatedState, _extends52));
      case Action.ADD_TO_ACTIONS_ALLOWLIST:
        var newActionsAllowlist = [].concat(state[StateProperty.ACTIONS_ALLOWLIST], data);
        return _extends({}, state, (_extends62 = {}, _extends62[StateProperty.ACTIONS_ALLOWLIST] = newActionsAllowlist, _extends62));
      case Action.TOGGLE_ACCESS:
        if (state[StateProperty.ACCESS_STATE] === data) {
          return state;
        }
        return _extends({}, state, (_extends72 = {}, _extends72[StateProperty.ACCESS_STATE] = !!data, _extends72[StateProperty.PAUSED_STATE] = !!data, _extends72));
      case Action.TOGGLE_PAGE_ATTACHMENT_STATE:
        return _extends({}, state, (_extends8 = {}, _extends8[StateProperty.PAGE_ATTACHMENT_STATE] = !!data, _extends8));
      case Action.TOGGLE_AD:
        return _extends({}, state, (_extends9 = {}, _extends9[StateProperty.AD_STATE] = !!data, _extends9));
      case Action.TOGGLE_AFFILIATE_LINK:
        return _extends({}, state, (_extends10 = {}, _extends10[StateProperty.AFFILIATE_LINK_STATE] = data, _extends10));
      case Action.TOGGLE_EDUCATION:
        return _extends({}, state, (_extends11 = {}, _extends11[StateProperty.EDUCATION_STATE] = !!data, _extends11));
      case Action.TOGGLE_INTERACTIVE_COMPONENT:
        data = data;
        return _extends({}, state, (_extends12 = {}, _extends12[StateProperty.PAUSED_STATE] = data.state === EmbeddedComponentState.EXPANDED || data.state === EmbeddedComponentState.FOCUSED, _extends12[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = data.state !== EmbeddedComponentState.EXPANDED || state.uiState === UIType.DESKTOP_PANELS, _extends12[StateProperty.INTERACTIVE_COMPONENT_STATE] = data, _extends12));
      case Action.TOGGLE_INFO_DIALOG:
        return _extends({}, state, (_extends13 = {}, _extends13[StateProperty.INFO_DIALOG_STATE] = !!data, _extends13[StateProperty.PAUSED_STATE] = !!data, _extends13));
      case Action.TOGGLE_STORY_HAS_AUDIO:
        return _extends({}, state, (_extends14 = {}, _extends14[StateProperty.STORY_HAS_AUDIO_STATE] = !!data, _extends14));
      case Action.TOGGLE_STORY_HAS_BACKGROUND_AUDIO:
        return _extends({}, state, (_extends15 = {}, _extends15[StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE] = !!data, _extends15));
      case Action.TOGGLE_STORY_HAS_PLAYBACK_UI:
        return _extends({}, state, (_extends16 = {}, _extends16[StateProperty.STORY_HAS_PLAYBACK_UI_STATE] = !!data, _extends16));
      case Action.TOGGLE_MUTED:
        return _extends({}, state, (_extends17 = {}, _extends17[StateProperty.MUTED_STATE] = !!data, _extends17));
      case Action.TOGGLE_PAGE_HAS_AUDIO:
        return _extends({}, state, (_extends18 = {}, _extends18[StateProperty.PAGE_HAS_AUDIO_STATE] = !!data, _extends18));
      case Action.TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK:
        return _extends({}, state, (_extends19 = {}, _extends19[StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE] = !!data, _extends19));
      case Action.TOGGLE_PAUSED:
        return _extends({}, state, (_extends20 = {}, _extends20[StateProperty.PAUSED_STATE] = !!data, _extends20));
      case Action.TOGGLE_RTL:
        return _extends({}, state, (_extends21 = {}, _extends21[StateProperty.RTL_STATE] = !!data, _extends21));
      case Action.TOGGLE_KEYBOARD_ACTIVE_STATE:
        return _extends({}, state, (_extends222 = {}, _extends222[StateProperty.KEYBOARD_ACTIVE_STATE] = !!data, _extends222));
      case Action.TOGGLE_SIDEBAR:
        if (state[StateProperty.SIDEBAR_STATE] === data) {
          return state;
        }
        return _extends({}, state, (_extends23 = {}, _extends23[StateProperty.PAUSED_STATE] = !!data, _extends23[StateProperty.SIDEBAR_STATE] = !!data, _extends23));
      case Action.TOGGLE_HAS_SIDEBAR:
        return _extends({}, state, (_extends24 = {}, _extends24[StateProperty.HAS_SIDEBAR_STATE] = !!data, _extends24));
      case Action.TOGGLE_SUPPORTED_BROWSER:
        return _extends({}, state, (_extends25 = {}, _extends25[StateProperty.SUPPORTED_BROWSER_STATE] = !!data, _extends25));
      case Action.TOGGLE_SHARE_MENU:
        return _extends({}, state, (_extends26 = {}, _extends26[StateProperty.PAUSED_STATE] = !!data, _extends26[StateProperty.SHARE_MENU_STATE] = !!data, _extends26));
      case Action.TOGGLE_SYSTEM_UI_IS_VISIBLE:
        return _extends({}, state, (_extends27 = {}, _extends27[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = !!data, _extends27));
      case Action.TOGGLE_UI:
        if (state[StateProperty.UI_STATE] === UIType.VERTICAL && data !== UIType.VERTICAL) {
          dev().error(TAG3, "Cannot switch away from UIType.VERTICAL");
          return state;
        }
        return _extends({}, state, (_extends28 = {}, _extends28[StateProperty.DESKTOP_STATE] = data === UIType.DESKTOP_PANELS, _extends28[StateProperty.UI_STATE] = data, _extends28));
      case Action.SET_GYROSCOPE_PERMISSION:
        return _extends({}, state, (_extends29 = {}, _extends29[StateProperty.GYROSCOPE_PERMISSION_STATE] = data, _extends29));
      case Action.TOGGLE_VIEWPORT_WARNING:
        return _extends({}, state, (_extends30 = {}, _extends30[StateProperty.VIEWPORT_WARNING_STATE] = !!data, _extends30));
      case Action.SET_CONSENT_ID:
        return _extends({}, state, (_extends31 = {}, _extends31[StateProperty.CONSENT_ID] = data, _extends31));
      case Action.CHANGE_PAGE:
        return _extends({}, state, (_extends322 = {}, _extends322[StateProperty.CURRENT_PAGE_ID] = data.id, _extends322[StateProperty.CURRENT_PAGE_INDEX] = data.index, _extends322));
      case Action.SET_ADVANCEMENT_MODE:
        return _extends({}, state, (_extends33 = {}, _extends33[StateProperty.ADVANCEMENT_MODE] = data, _extends33));
      case Action.SET_NAVIGATION_PATH:
        return _extends({}, state, (_extends34 = {}, _extends34[StateProperty.NAVIGATION_PATH] = data, _extends34));
      case Action.SET_PAGE_IDS:
        return _extends({}, state, (_extends35 = {}, _extends35[StateProperty.PAGE_IDS] = data, _extends35));
      case Action.SET_PAGE_SIZE:
        return _extends({}, state, (_extends36 = {}, _extends36[StateProperty.PAGE_SIZE] = data, _extends36));
      case Action.SET_VIEWER_CUSTOM_CONTROLS:
        return _extends({}, state, (_extends37 = {}, _extends37[StateProperty.VIEWER_CUSTOM_CONTROLS] = data, _extends37));
      default:
        dev().error(TAG3, "Unknown action %s.", action);
        return state;
    }
  };
  var AmpStoryStoreService = /* @__PURE__ */ function() {
    function AmpStoryStoreService2(win) {
      _classCallCheck6(this, AmpStoryStoreService2);
      this.win_ = win;
      this.listeners_ = {};
      this.state_ = _extends({}, this.getDefaultState_(), this.getEmbedOverrides_());
    }
    _createClass5(AmpStoryStoreService2, [{
      key: "get",
      value: function get(key) {
        if (!hasOwn(this.state_, key)) {
          dev().error(TAG3, "Unknown state %s.", key);
          return;
        }
        return this.state_[key];
      }
    }, {
      key: "subscribe",
      value: function subscribe(key, listener, callToInitialize) {
        if (callToInitialize === void 0) {
          callToInitialize = false;
        }
        if (!hasOwn(this.state_, key)) {
          dev().error(TAG3, "Can't subscribe to unknown state %s.", key);
          return;
        }
        if (!this.listeners_[key]) {
          this.listeners_[key] = new Observable();
        }
        this.listeners_[key].add(listener);
        if (callToInitialize) {
          listener(this.get(key));
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch2(action, data) {
        var _this = this;
        var oldState = _extends({}, this.state_);
        this.state_ = actions(this.state_, action, data);
        var comparisonFn;
        Object.keys(this.listeners_).forEach(function(key) {
          comparisonFn = stateComparisonFunctions[key];
          if (comparisonFn ? comparisonFn(oldState[key], _this.state_[key]) : oldState[key] !== _this.state_[key]) {
            _this.listeners_[key].fire(_this.state_[key]);
          }
        });
      }
    }, {
      key: "getDefaultState_",
      value: function getDefaultState_() {
        var _ref;
        return _ref = {}, _ref[StateProperty.CAN_INSERT_AUTOMATIC_AD] = true, _ref[StateProperty.CAN_SHOW_AUDIO_UI] = true, _ref[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = true, _ref[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = true, _ref[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = true, _ref[StateProperty.CAN_SHOW_SHARING_UIS] = true, _ref[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = true, _ref[StateProperty.VIEWER_CUSTOM_CONTROLS] = [], _ref[StateProperty.ACCESS_STATE] = false, _ref[StateProperty.AD_STATE] = false, _ref[StateProperty.AFFILIATE_LINK_STATE] = null, _ref[StateProperty.DESKTOP_STATE] = false, _ref[StateProperty.EDUCATION_STATE] = false, _ref[StateProperty.GYROSCOPE_PERMISSION_STATE] = "", _ref[StateProperty.HAS_SIDEBAR_STATE] = false, _ref[StateProperty.INFO_DIALOG_STATE] = false, _ref[StateProperty.INTERACTIVE_COMPONENT_STATE] = {
          state: EmbeddedComponentState.HIDDEN
        }, _ref[StateProperty.INTERACTIVE_REACT_STATE] = {}, _ref[StateProperty.KEYBOARD_ACTIVE_STATE] = false, _ref[StateProperty.MUTED_STATE] = true, _ref[StateProperty.PAGE_ATTACHMENT_STATE] = false, _ref[StateProperty.PAGE_HAS_AUDIO_STATE] = false, _ref[StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE] = false, _ref[StateProperty.PANNING_MEDIA_STATE] = {}, _ref[StateProperty.PAUSED_STATE] = false, _ref[StateProperty.RTL_STATE] = false, _ref[StateProperty.SHARE_MENU_STATE] = false, _ref[StateProperty.SIDEBAR_STATE] = false, _ref[StateProperty.SUPPORTED_BROWSER_STATE] = true, _ref[StateProperty.STORY_HAS_AUDIO_STATE] = false, _ref[StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE] = false, _ref[StateProperty.STORY_HAS_PLAYBACK_UI_STATE] = false, _ref[StateProperty.SYSTEM_UI_IS_VISIBLE_STATE] = true, _ref[StateProperty.UI_STATE] = UIType.MOBILE, _ref[StateProperty.VIEWPORT_WARNING_STATE] = false, _ref[StateProperty.ACTIONS_ALLOWLIST] = [], _ref[StateProperty.CONSENT_ID] = null, _ref[StateProperty.CURRENT_PAGE_ID] = "", _ref[StateProperty.CURRENT_PAGE_INDEX] = 0, _ref[StateProperty.ADVANCEMENT_MODE] = "", _ref[StateProperty.NEW_PAGE_AVAILABLE_ID] = "", _ref[StateProperty.NAVIGATION_PATH] = [], _ref[StateProperty.PAGE_IDS] = [], _ref[StateProperty.PAGE_SIZE] = null, _ref[StateProperty.PREVIEW_STATE] = false, _ref;
      }
    }, {
      key: "getEmbedOverrides_",
      value: function getEmbedOverrides_() {
        var _ref2, _ref3, _ref4, _ref5;
        var embedMode = parseEmbedMode(this.win_.location.hash);
        switch (embedMode) {
          case EmbedMode.NAME_TBD:
            return _ref2 = {}, _ref2[StateProperty.CAN_INSERT_AUTOMATIC_AD] = false, _ref2[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = false, _ref2[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = false, _ref2[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = true, _ref2[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = false, _ref2[StateProperty.MUTED_STATE] = false, _ref2;
          case EmbedMode.NO_SHARING:
            return _ref3 = {}, _ref3[StateProperty.CAN_SHOW_SHARING_UIS] = false, _ref3;
          case EmbedMode.PREVIEW:
            return _ref4 = {}, _ref4[StateProperty.PREVIEW_STATE] = true, _ref4[StateProperty.CAN_INSERT_AUTOMATIC_AD] = false, _ref4[StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT] = false, _ref4[StateProperty.CAN_SHOW_PAGINATION_BUTTONS] = false, _ref4[StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP] = false, _ref4[StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS] = false, _ref4;
          case EmbedMode.NO_SHARING_NOR_AUDIO_UI:
            return _ref5 = {}, _ref5[StateProperty.CAN_SHOW_AUDIO_UI] = false, _ref5[StateProperty.CAN_SHOW_SHARING_UIS] = false, _ref5;
          default:
            return {};
        }
      }
    }]);
    return AmpStoryStoreService2;
  }();

  // extensions/amp-story/1.0/prerender-active-page.js
  function isPrerenderActivePage(pageElement) {
    var win = toWin(pageElement.ownerDocument.defaultView);
    var hashId = parseQueryString(win.location.href)["page"];
    var selector = "amp-story-page:first-of-type";
    if (hashId) {
      selector += ", amp-story-page#" + escapeCssSelectorIdent(hashId);
    }
    var selectorNodes = win.document.querySelectorAll(selector);
    return selectorNodes[selectorNodes.length - 1] === pageElement;
  }

  // extensions/amp-story/1.0/amp-story-grid-layer.js
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
  function _get2(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get2 = Reflect.get;
    } else {
      _get2 = function _get5(target2, property2, receiver2) {
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
  function _setPrototypeOf3(o, p) {
    _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
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
    _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf3(o);
  }
  var SUPPORTED_CSS_GRID_ATTRIBUTES = {
    "align-content": "alignContent",
    "align-items": "alignItems",
    "align-self": "alignSelf",
    "grid-area": "gridArea",
    "justify-content": "justifyContent",
    "justify-items": "justifyItems",
    "justify-self": "justifySelf"
  };
  var SUPPORTED_CSS_GRID_ATTRIBUTES_SELECTOR = Object.keys(SUPPORTED_CSS_GRID_ATTRIBUTES).map(function(key) {
    return "[" + key + "]";
  }).join(",");
  var TEMPLATE_ATTRIBUTE_NAME = "template";
  var GRID_LAYER_TEMPLATE_CLASS_NAMES = {
    "fill": "i-amphtml-story-grid-template-fill",
    "vertical": "i-amphtml-story-grid-template-vertical",
    "horizontal": "i-amphtml-story-grid-template-horizontal",
    "thirds": "i-amphtml-story-grid-template-thirds"
  };
  var PRESET_ATTRIBUTE_NAME = "preset";
  var GRID_LAYER_PRESET_DETAILS = {
    "2021-background": {
      "aspect-ratio": "69:116",
      "scaling-factor": 1.142
    },
    "2021-foreground": {
      "aspect-ratio": "69:116"
    }
  };
  var AmpStoryGridLayer = /* @__PURE__ */ function(_AmpStoryBaseLayer) {
    _inherits3(AmpStoryGridLayer2, _AmpStoryBaseLayer);
    var _super = _createSuper3(AmpStoryGridLayer2);
    function AmpStoryGridLayer2(element) {
      var _this;
      _classCallCheck7(this, AmpStoryGridLayer2);
      _this = _super.call(this, element);
      _this.aspectRatio_ = null;
      _this.scalingFactor_ = 1;
      return _this;
    }
    _createClass6(AmpStoryGridLayer2, [{
      key: "buildCallback",
      value: function buildCallback() {
        _get2(_getPrototypeOf3(AmpStoryGridLayer2.prototype), "buildCallback", this).call(this);
        this.applyResponsivenessPresets_();
        this.applyTemplateClassName_();
        this.setOwnCssGridStyles_();
        this.setDescendentCssGridStyles_();
        this.initializeListeners_();
      }
    }, {
      key: "applyResponsivenessPresets_",
      value: function applyResponsivenessPresets_() {
        var _this2 = this;
        if (!this.element.hasAttribute(PRESET_ATTRIBUTE_NAME)) {
          return;
        }
        var preset = this.element.getAttribute(PRESET_ATTRIBUTE_NAME);
        var presetDetails = GRID_LAYER_PRESET_DETAILS[preset];
        if (!presetDetails) {
          return;
        }
        Object.entries(presetDetails).forEach(function(keyValue) {
          return _this2.element.setAttribute(keyValue[0], keyValue[1]);
        });
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var aspectRatio = this.element.getAttribute("aspect-ratio");
        var scalingFactorFloat = parseFloat(this.element.getAttribute("scaling-factor"));
        if (scalingFactorFloat && scalingFactorFloat > 0) {
          this.scalingFactor_ = scalingFactorFloat;
        }
        if (aspectRatio) {
          var aspectRatioSplits = aspectRatio.split(":");
          var horiz = parseInt(aspectRatioSplits[0], 10);
          var vert = parseInt(aspectRatioSplits[1], 10);
          if (horiz > 0 && vert > 0) {
            this.aspectRatio_ = {
              horiz,
              vert
            };
            var storeService = getStoreService(this.win);
            storeService.subscribe(StateProperty.PAGE_SIZE, this.updatePageSize_.bind(this), true);
          }
        }
      }
    }, {
      key: "updatePageSize_",
      value: function updatePageSize_(pageSize) {
        var _this3 = this;
        if (!pageSize) {
          return;
        }
        var vh = pageSize.height, vw = pageSize.width;
        var _this$aspectRatio_ = this.aspectRatio_, horiz = _this$aspectRatio_.horiz, vert = _this$aspectRatio_.vert;
        var width = Math.min(vw, vh * horiz / vert);
        var height = Math.min(vh, vw * vert / horiz);
        if (width > 0 && height > 0) {
          this.getVsync().mutate(function() {
            _this3.element.classList.add("i-amphtml-story-grid-template-aspect");
            setStyles(_this3.element, {
              "--i-amphtml-story-layer-width": px(width * _this3.scalingFactor_),
              "--i-amphtml-story-layer-height": px(height * _this3.scalingFactor_)
            });
          });
        }
      }
    }, {
      key: "applyTemplateClassName_",
      value: function applyTemplateClassName_() {
        if (this.element.hasAttribute(TEMPLATE_ATTRIBUTE_NAME)) {
          var templateName = this.element.getAttribute(TEMPLATE_ATTRIBUTE_NAME);
          var templateClassName = GRID_LAYER_TEMPLATE_CLASS_NAMES[templateName];
          this.element.classList.add(templateClassName);
        }
      }
    }, {
      key: "setDescendentCssGridStyles_",
      value: function setDescendentCssGridStyles_() {
        var _this4 = this;
        var elementsToUpgradeStyles = scopedQuerySelectorAll(this.element, SUPPORTED_CSS_GRID_ATTRIBUTES_SELECTOR);
        Array.prototype.forEach.call(elementsToUpgradeStyles, function(element) {
          _this4.setCssGridStyles_(element);
        });
      }
    }, {
      key: "setOwnCssGridStyles_",
      value: function setOwnCssGridStyles_() {
        this.setCssGridStyles_(this.element);
      }
    }, {
      key: "setCssGridStyles_",
      value: function setCssGridStyles_(element) {
        var styles = {};
        for (var i = element.attributes.length - 1; i >= 0; i--) {
          var attribute = element.attributes[i];
          var attributeName = attribute.name.toLowerCase();
          var propertyName = SUPPORTED_CSS_GRID_ATTRIBUTES[attributeName];
          if (propertyName) {
            styles[propertyName] = attribute.value;
            element.removeAttribute(attributeName);
          }
        }
        setStyles(element, assertDoesNotContainDisplay(styles));
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed(element) {
        return isPrerenderActivePage(element.parentElement);
      }
    }]);
    return AmpStoryGridLayer2;
  }(AmpStoryBaseLayer);

  // extensions/amp-story/1.0/variable-service.js
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
  var AnalyticsVariable = {
    STORY_INTERACTIVE_ID: "storyInteractiveId",
    STORY_INTERACTIVE_RESPONSE: "storyInteractiveResponse",
    STORY_INTERACTIVE_TYPE: "storyInteractiveType",
    STORY_PAGE_ID: "storyPageId",
    STORY_PAGE_INDEX: "storyPageIndex",
    STORY_PAGE_COUNT: "storyPageCount",
    STORY_IS_MUTED: "storyIsMuted",
    STORY_PROGRESS: "storyProgress",
    STORY_PREVIOUS_PAGE_ID: "storyPreviousPageId",
    STORY_ADVANCEMENT_MODE: "storyAdvancementMode"
  };
  var getVariableService = function getVariableService2(win) {
    var service = Services.storyVariableService(win);
    if (!service) {
      service = new AmpStoryVariableService(win);
      registerServiceBuilder(win, "story-variable", function() {
        return service;
      });
    }
    return service;
  };
  var AmpStoryVariableService = /* @__PURE__ */ function() {
    function AmpStoryVariableService2(win) {
      var _dict;
      _classCallCheck8(this, AmpStoryVariableService2);
      this.variables_ = dict((_dict = {}, _dict[AnalyticsVariable.STORY_INTERACTIVE_ID] = null, _dict[AnalyticsVariable.STORY_INTERACTIVE_RESPONSE] = null, _dict[AnalyticsVariable.STORY_INTERACTIVE_TYPE] = null, _dict[AnalyticsVariable.STORY_PAGE_INDEX] = null, _dict[AnalyticsVariable.STORY_PAGE_ID] = null, _dict[AnalyticsVariable.STORY_PAGE_COUNT] = null, _dict[AnalyticsVariable.STORY_PROGRESS] = null, _dict[AnalyticsVariable.STORY_IS_MUTED] = null, _dict[AnalyticsVariable.STORY_PREVIOUS_PAGE_ID] = null, _dict[AnalyticsVariable.STORY_ADVANCEMENT_MODE] = null, _dict));
      this.storeService_ = getStoreService(win);
      this.initializeListeners_();
    }
    _createClass7(AmpStoryVariableService2, [{
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this = this;
        this.storeService_.subscribe(StateProperty.PAGE_IDS, function(pageIds) {
          _this.variables_[AnalyticsVariable.STORY_PAGE_COUNT] = pageIds.length;
        });
        this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(pageId) {
          if (!pageId) {
            return;
          }
          _this.variables_[AnalyticsVariable.STORY_PREVIOUS_PAGE_ID] = _this.variables_[AnalyticsVariable.STORY_PAGE_ID];
          _this.variables_[AnalyticsVariable.STORY_PAGE_ID] = pageId;
          var pageIndex = _this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
          _this.variables_[AnalyticsVariable.STORY_PAGE_INDEX] = pageIndex;
          var numberOfPages = _this.storeService_.get(StateProperty.PAGE_IDS).length;
          if (numberOfPages > 0) {
            if (numberOfPages === 1) {
              _this.variables_[AnalyticsVariable.STORY_PROGRESS] = 0;
            } else {
              _this.variables_[AnalyticsVariable.STORY_PROGRESS] = pageIndex / (numberOfPages - 1);
            }
          }
        }, true);
      }
    }, {
      key: "onVariableUpdate",
      value: function onVariableUpdate(name, update) {
        this.variables_[name] = update;
      }
    }, {
      key: "get",
      value: function get() {
        return this.variables_;
      }
    }]);
    return AmpStoryVariableService2;
  }();

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

  // extensions/amp-story/1.0/story-analytics.js
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
  var ANALYTICS_TAG_NAME = "__AMP_ANALYTICS_TAG_NAME__";
  var StoryAnalyticsEvent = {
    CLICK_THROUGH: "story-click-through",
    FOCUS: "story-focus",
    LAST_PAGE_VISIBLE: "story-last-page-visible",
    OPEN: "story-open",
    CLOSE: "story-close",
    PAGE_ATTACHMENT_ENTER: "story-page-attachment-enter",
    PAGE_ATTACHMENT_EXIT: "story-page-attachment-exit",
    PAGE_VISIBLE: "story-page-visible",
    INTERACTIVE: "story-interactive",
    STORY_CONTENT_LOADED: "story-content-loaded",
    STORY_MUTED: "story-audio-muted",
    STORY_UNMUTED: "story-audio-unmuted"
  };
  var AdvancementMode = {
    GO_TO_PAGE: "goToPageAction",
    AUTO_ADVANCE_TIME: "autoAdvanceTime",
    AUTO_ADVANCE_MEDIA: "autoAdvanceMedia",
    MANUAL_ADVANCE: "manualAdvance",
    ADVANCE_TO_ADS: "manualAdvanceFromAd",
    VIEWER_SELECT_PAGE: "viewerSelectPage"
  };
  var getAnalyticsService = function getAnalyticsService2(win, el) {
    var service = Services.storyAnalyticsService(win);
    if (!service) {
      service = new StoryAnalyticsService(win, el);
      registerServiceBuilder(win, "story-analytics", function() {
        return service;
      });
    }
    return service;
  };
  var StoryAnalyticsService = /* @__PURE__ */ function() {
    function StoryAnalyticsService2(win, element) {
      _classCallCheck9(this, StoryAnalyticsService2);
      this.win_ = win;
      this.element_ = element;
      this.variableService_ = getVariableService(win);
      this.pageEventsMap_ = map();
      this.storeService_ = getStoreService(win);
      this.initializeListeners_();
    }
    _createClass8(StoryAnalyticsService2, [{
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this = this;
        this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function(pageId) {
          var isAd = _this.storeService_.get(StateProperty.AD_STATE);
          if (!pageId || isAd) {
            return;
          }
          _this.triggerEvent(StoryAnalyticsEvent.PAGE_VISIBLE);
          var pageIds = _this.storeService_.get(StateProperty.PAGE_IDS);
          var pageIndex = _this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
          if (pageIndex === pageIds.length - 1) {
            _this.triggerEvent(StoryAnalyticsEvent.LAST_PAGE_VISIBLE);
          }
        }, true);
      }
    }, {
      key: "triggerEvent",
      value: function triggerEvent(eventType, element) {
        if (element === void 0) {
          element = null;
        }
        this.incrementPageEventCount_(eventType);
        triggerAnalyticsEvent(this.element_, eventType, this.updateDetails(eventType, element));
      }
    }, {
      key: "updateDetails",
      value: function updateDetails(eventType, element) {
        if (element === void 0) {
          element = null;
        }
        var details = {};
        var vars = this.variableService_.get();
        var pageId = vars["storyPageId"];
        if (this.pageEventsMap_[pageId][eventType] > 1) {
          details.repeated = true;
        }
        if (element) {
          details.tagName = element[ANALYTICS_TAG_NAME] || element.tagName.toLowerCase();
          Object.assign(vars, getDataParamsFromAttributes(element, void 0, /^vars(.+)/));
        }
        return _extends2({
          eventDetails: details
        }, vars);
      }
    }, {
      key: "incrementPageEventCount_",
      value: function incrementPageEventCount_(eventType) {
        var vars = this.variableService_.get();
        var pageId = vars["storyPageId"];
        this.pageEventsMap_[pageId] = this.pageEventsMap_[pageId] || {};
        this.pageEventsMap_[pageId][eventType] = this.pageEventsMap_[pageId][eventType] || 0;
        this.pageEventsMap_[pageId][eventType]++;
      }
    }]);
    return StoryAnalyticsService2;
  }();

  // extensions/amp-story/1.0/amp-story-affiliate-link.js
  var _templateObject;
  var _templateObject2;
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
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
  var AFFILIATE_LINK_SELECTOR = "a[affiliate-link-icon]";
  var AFFILIATE_LINK_BUILT = "__AMP_AFFILIATE_LINK_BUILT";
  var AmpStoryAffiliateLink = /* @__PURE__ */ function() {
    function AmpStoryAffiliateLink2(win, element) {
      _classCallCheck10(this, AmpStoryAffiliateLink2);
      this.win_ = win;
      this.element_ = element;
      this.textEl_ = null;
      this.launchEl_ = null;
      this.storeService_ = getStoreService(this.win_);
      this.text_ = this.element_.textContent;
      this.mutator_ = Services.mutatorForDoc(getAmpdoc(this.win_.document));
      this.analyticsService_ = getAnalyticsService(this.win_, element);
    }
    _createClass9(AmpStoryAffiliateLink2, [{
      key: "build",
      value: function build() {
        var _this = this;
        if (this.element_[AFFILIATE_LINK_BUILT]) {
          return;
        }
        this.mutator_.mutateElement(this.element_, function() {
          _this.element_.textContent = "";
          _this.element_.setAttribute("pristine", "");
          _this.addPulseElement_();
          _this.addIconElement_();
          _this.addText_();
          _this.addLaunchElement_();
        });
        this.initializeListeners_();
        this.element_[AFFILIATE_LINK_BUILT] = true;
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.storeService_.subscribe(StateProperty.AFFILIATE_LINK_STATE, function(elementToToggleExpand) {
          var expand = _this2.element_ === elementToToggleExpand;
          if (expand) {
            _this2.element_.setAttribute("expanded", "");
            _this2.textEl_.removeAttribute("hidden");
            _this2.launchEl_.removeAttribute("hidden");
          } else {
            _this2.element_.removeAttribute("expanded");
            _this2.textEl_.setAttribute("hidden", "");
            _this2.launchEl_.setAttribute("hidden", "");
          }
          if (expand) {
            _this2.element_.removeAttribute("pristine");
            _this2.analyticsService_.triggerEvent(StoryAnalyticsEvent.FOCUS, _this2.element_);
          }
        });
        this.element_.addEventListener("click", function(event) {
          if (_this2.element_.hasAttribute("expanded")) {
            event.stopPropagation();
            _this2.analyticsService_.triggerEvent(StoryAnalyticsEvent.CLICK_THROUGH, _this2.element_);
          }
        });
      }
    }, {
      key: "addIconElement_",
      value: function addIconElement_() {
        var iconEl = htmlFor(this.element_)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-story-affiliate-link-circle">\n        <i class="i-amphtml-story-affiliate-link-icon"></i>\n        <div class="i-amphtml-story-reset i-amphtml-hidden">\n          <span class="i-amphtml-story-affiliate-link-text" hidden></span>\n          <i class="i-amphtml-story-affiliate-link-launch" hidden></i>\n        </div>\n      </div>'])));
        this.element_.appendChild(iconEl);
      }
    }, {
      key: "addText_",
      value: function addText_() {
        this.textEl_ = this.element_.querySelector(".i-amphtml-story-affiliate-link-text");
        this.textEl_.textContent = this.text_;
        this.textEl_.setAttribute("hidden", "");
      }
    }, {
      key: "addLaunchElement_",
      value: function addLaunchElement_() {
        this.launchEl_ = this.element_.querySelector(".i-amphtml-story-affiliate-link-launch");
        this.launchEl_.setAttribute("hidden", "");
      }
    }, {
      key: "addPulseElement_",
      value: function addPulseElement_() {
        var pulseEl = htmlFor(this.element_)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(['\n      <div class="i-amphtml-story-affiliate-link-pulse"></div>'])));
        this.element_.appendChild(pulseEl);
      }
    }]);
    return AmpStoryAffiliateLink2;
  }();

  // src/core/constants/action-constants.js
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

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

  // src/core/dom/event-helper-listen.js
  var optsSupported;
  var passiveSupported;
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
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }
  function getDetail(event) {
    return event.detail;
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

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck11(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass10(LruCache2, [{
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
  var INVALID_PROTOCOLS = [
    "javascript:",
    "data:",
    "vbscript:"
  ];
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
  function assertAbsoluteHttpOrHttpsUrl(urlString) {
    userAssert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
    return parseUrlDeprecated(urlString).href;
  }
  function isProxyOrigin(url) {
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return urls.cdnProxyRegex.test(url.origin);
  }
  function isProtocolValid(url) {
    if (!url) {
      return true;
    }
    if (typeof url == "string") {
      url = parseUrlDeprecated(url);
    }
    return !INVALID_PROTOCOLS.includes(url.protocol);
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
  function getSourceOrigin(url) {
    return parseUrlDeprecated(getSourceUrl(url)).origin;
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

  // src/core/constants/enums.js
  var TickLabel = {
    ACCESS_AUTHORIZATION: "aaa",
    ACCESS_AUTHORIZATION_VISIBLE: "aaav",
    ADS_LAYOUT_DELAY: "adld",
    BAD_FRAMES: "bf",
    BATTERY_DROP: "bd",
    CONTENT_LAYOUT_DELAY: "cld",
    CUMULATIVE_LAYOUT_SHIFT: "cls",
    CUMULATIVE_LAYOUT_SHIFT_2: "cls-2",
    CUMULATIVE_LAYOUT_SHIFT_BEFORE_FCP: "cls-fcp",
    CUMULATIVE_LAYOUT_SHIFT_BEFORE_VISIBLE: "cls-ofv",
    DOCUMENT_READY: "dr",
    END_INSTALL_STYLES: "e_is",
    FIRST_CONTENTFUL_PAINT: "fcp",
    FIRST_CONTENTFUL_PAINT_VISIBLE: "fcpv",
    FIRST_PAINT: "fp",
    FIRST_INPUT_DELAY: "fid",
    FIRST_INPUT_DELAY_POLYFILL: "fid-polyfill",
    FIRST_VIEWPORT_READY: "pc",
    GOOD_FRAME_PROBABILITY: "gfp",
    INSTALL_STYLES: "is",
    LARGEST_CONTENTFUL_PAINT_VISIBLE: "lcpv",
    LARGEST_CONTENTFUL_PAINT_LOAD: "lcpl",
    LARGEST_CONTENTFUL_PAINT_RENDER: "lcpr",
    LONG_TASKS_CHILD: "ltc",
    LONG_TASKS_SELF: "lts",
    MAKE_BODY_VISIBLE: "mbv",
    MESSAGING_READY: "msr",
    ON_FIRST_VISIBLE: "ofv",
    ON_LOAD: "ol",
    TIME_ORIGIN: "timeOrigin",
    VIDEO_CACHE_STATE: "vcs",
    VIDEO_ERROR: "verr",
    VIDEO_ON_FIRST_PAGE: "vofp",
    VIDEO_JOINT_LATENCY: "vjl",
    VIDEO_MEAN_TIME_BETWEEN_REBUFFER: "vmtbrb",
    VIDEO_REBUFFERS: "vrb",
    VIDEO_REBUFFER_RATE: "vrbr",
    VIDEO_WATCH_TIME: "vwt"
  };

  // src/style-installer.js
  var TRANSFORMER_PROP = "__AMP_CSS_TR";
  function installCssTransformer(cssRoot, transformer) {
    cssRoot[TRANSFORMER_PROP] = transformer;
  }

  // src/error-reporting.js
  var accumulatedErrorMessages = self.__AMP_ERRORS || [];
  self.__AMP_ERRORS = accumulatedErrorMessages;

  // src/service/action-impl.js
  var ACTION_MAP_ = "__AMP_ACTION_MAP__" + Math.random();
  var TAPPABLE_ARIA_ROLES = {
    "button": true,
    "checkbox": true,
    "link": true,
    "listbox": true,
    "menuitem": true,
    "menuitemcheckbox": true,
    "menuitemradio": true,
    "option": true,
    "radio": true,
    "scrollbar": true,
    "slider": true,
    "spinbutton": true,
    "switch": true,
    "tab": true,
    "treeitem": true
  };
  var WHITESPACE_SET = " 	\n\r\f\v\xA0\u2028\u2029";
  var SEPARATOR_SET = ";:.()=,|!";
  var STRING_SET = `"'`;
  var OBJECT_SET = "{}";
  var SPECIAL_SET = WHITESPACE_SET + SEPARATOR_SET + STRING_SET + OBJECT_SET;

  // src/video-interface.js
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
  var VideoInterface = /* @__PURE__ */ function() {
    function VideoInterface2() {
      _classCallCheck12(this, VideoInterface2);
    }
    _createClass11(VideoInterface2, [{
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
  var VideoServiceSignals = {
    USER_INTERACTED: "user-interacted",
    PLAYBACK_DELEGATED: "playback-delegated"
  };
  function delegateAutoplay(video) {
    whenUpgradedToCustomElement(dev().assertElement(video)).then(function(el) {
      el.signals().signal(VideoServiceSignals.PLAYBACK_DELEGATED);
    });
  }
  function userInteractedWith(video) {
    video.signals().signal(VideoServiceSignals.USER_INTERACTED);
  }

  // third_party/webcomponentsjs/ShadowCSS.js
  var ShadowCSS = {
    strictStyling: false,
    scopeRules: function scopeRules(cssRules, scopeSelector2, opt_transformer) {
      var cssText2 = "";
      if (cssRules) {
        Array.prototype.forEach.call(cssRules, function(rule) {
          if (rule.selectorText && rule.style && rule.style.cssText !== void 0) {
            cssText2 += this.scopeSelector(rule.selectorText, scopeSelector2, this.strictStyling, opt_transformer) + " {\n	";
            cssText2 += this.propertiesFromRule(rule) + "\n}\n\n";
          } else if (rule.type === CSSRule.MEDIA_RULE) {
            cssText2 += "@media " + rule.media.mediaText + " {\n";
            cssText2 += this.scopeRules(rule.cssRules, scopeSelector2);
            cssText2 += "\n}\n\n";
          } else {
            try {
              if (rule.cssText) {
                cssText2 += rule.cssText + "\n\n";
              }
            } catch (x) {
              if (rule.type === CSSRule.KEYFRAMES_RULE && rule.cssRules) {
                cssText2 += this.ieSafeCssTextFromKeyFrameRule(rule);
              }
            }
          }
        }, this);
      }
      return cssText2;
    },
    ieSafeCssTextFromKeyFrameRule: function ieSafeCssTextFromKeyFrameRule(rule) {
      var cssText2 = "@keyframes " + rule.name + " {";
      Array.prototype.forEach.call(rule.cssRules, function(rule2) {
        cssText2 += " " + rule2.keyText + " {" + rule2.style.cssText + "}";
      });
      cssText2 += " }";
      return cssText2;
    },
    scopeSelector: function scopeSelector(selector, _scopeSelector, strict, opt_transformer) {
      var r = [], parts = selector.split(",");
      parts.forEach(function(p) {
        p = p.trim();
        if (opt_transformer) {
          p = opt_transformer(p);
        }
        if (this.selectorNeedsScoping(p, _scopeSelector)) {
          p = strict && !p.match(polyfillHostNoCombinator) ? this.applyStrictSelectorScope(p, _scopeSelector) : this.applySelectorScope(p, _scopeSelector);
        }
        r.push(p);
      }, this);
      return r.join(", ");
    },
    selectorNeedsScoping: function selectorNeedsScoping(selector, scopeSelector2) {
      if (Array.isArray(scopeSelector2)) {
        return true;
      }
      var re = this.makeScopeMatcher(scopeSelector2);
      return !selector.match(re);
    },
    makeScopeMatcher: function makeScopeMatcher(scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
      return new RegExp("^(" + scopeSelector2 + ")" + selectorReSuffix, "m");
    },
    applySelectorScope: function applySelectorScope(selector, selectorScope) {
      return Array.isArray(selectorScope) ? this.applySelectorScopeList(selector, selectorScope) : this.applySimpleSelectorScope(selector, selectorScope);
    },
    applySelectorScopeList: function applySelectorScopeList(selector, scopeSelectorList) {
      var r = [];
      for (var i = 0, s; s = scopeSelectorList[i]; i++) {
        r.push(this.applySimpleSelectorScope(selector, s));
      }
      return r.join(", ");
    },
    applySimpleSelectorScope: function applySimpleSelectorScope(selector, scopeSelector2) {
      if (selector.match(polyfillHostRe)) {
        selector = selector.replace(polyfillHostNoCombinator, scopeSelector2);
        return selector.replace(polyfillHostRe, scopeSelector2 + " ");
      } else {
        return scopeSelector2 + " " + selector;
      }
    },
    applyStrictSelectorScope: function applyStrictSelectorScope(selector, scopeSelector2) {
      scopeSelector2 = scopeSelector2.replace(/\[is=([^\]]*)\]/g, "$1");
      var splits = [" ", ">", "+", "~"], scoped = selector, attrName = "[" + scopeSelector2 + "]";
      splits.forEach(function(sep) {
        var parts = scoped.split(sep);
        scoped = parts.map(function(p) {
          var t = p.trim().replace(polyfillHostRe, "");
          if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
            p = t.replace(/([^:]*)(:*)(.*)/, "$1" + attrName + "$2$3");
          }
          return p;
        }).join(sep);
      });
      return scoped;
    },
    propertiesFromRule: function propertiesFromRule(rule) {
      var cssText2 = rule.style.cssText;
      if (rule.style.content && !rule.style.content.match(/['"]+|attr/)) {
        cssText2 = cssText2.replace(/content:[^;]*;/g, "content: '" + rule.style.content + "';");
      }
      var style = rule.style;
      for (var i in style) {
        if (style[i] === "initial") {
          cssText2 += i + ": initial; ";
        }
      }
      return cssText2;
    }
  };
  var polyfillHost = "-shadowcsshost";
  var polyfillHostContext = "-shadowcsscontext";
  var parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
  var cssColonHostRe = new RegExp("(" + polyfillHost + parenSuffix, "gim");
  var cssColonHostContextRe = new RegExp("(" + polyfillHostContext + parenSuffix, "gim");
  var selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
  var polyfillHostNoCombinator = polyfillHost + "-no-combinator";
  var polyfillHostRe = new RegExp(polyfillHost, "gim");
  var polyfillHostContextRe = new RegExp(polyfillHostContext, "gim");

  // src/core/dom/web-components.js
  var ShadowDomVersion = {
    NONE: "none",
    V0: "v0",
    V1: "v1"
  };
  var shadowDomSupportedVersion;
  var shadowCssSupported;
  function isShadowDomSupported() {
    return getShadowDomSupportedVersion() != ShadowDomVersion.NONE;
  }
  function isShadowCssSupported() {
    if (shadowCssSupported === void 0) {
      shadowCssSupported = isShadowDomSupported() && (isNative(Element.prototype.attachShadow) || isNative(Element.prototype.createShadowRoot));
    }
    return shadowCssSupported;
  }
  function isNative(func) {
    return !!func && func.toString().indexOf("[native code]") != -1;
  }
  function getShadowDomSupportedVersion(opt_elementClass) {
    if (shadowDomSupportedVersion === void 0) {
      shadowDomSupportedVersion = getShadowDomVersion(opt_elementClass || Element);
    }
    return shadowDomSupportedVersion;
  }
  function getShadowDomVersion(element) {
    if (!!element.prototype.attachShadow) {
      return ShadowDomVersion.V1;
    } else if (!!element.prototype.createShadowRoot) {
      return ShadowDomVersion.V0;
    }
    return ShadowDomVersion.NONE;
  }

  // src/shadow-embed.js
  var CSS_SELECTOR_BEG_REGEX = /[^\.\-\_0-9a-zA-Z]/;
  var CSS_SELECTOR_END_REGEX = /[^\-\_0-9a-zA-Z]/;
  function createShadowRoot(hostElement) {
    var win = toWin(hostElement.ownerDocument.defaultView);
    var existingRoot = hostElement.shadowRoot || hostElement.__AMP_SHADOW_ROOT;
    if (existingRoot) {
      existingRoot.innerHTML = "";
      return existingRoot;
    }
    var shadowRoot;
    var shadowDomSupported = getShadowDomSupportedVersion();
    if (shadowDomSupported == ShadowDomVersion.V1) {
      shadowRoot = hostElement.attachShadow({
        mode: "open"
      });
      if (!shadowRoot.styleSheets) {
        Object.defineProperty(shadowRoot, "styleSheets", {
          get: function get() {
            var items = [];
            iterateCursor(shadowRoot.childNodes, function(child) {
              if (child.tagName === "STYLE") {
                items.push(child.sheet);
              }
            });
            return items;
          }
        });
      }
    } else if (shadowDomSupported == ShadowDomVersion.V0) {
      shadowRoot = hostElement.createShadowRoot();
    } else {
      shadowRoot = createShadowRootPolyfill(hostElement);
    }
    if (!isShadowCssSupported()) {
      var rootId = "i-amphtml-sd-" + win.Math.floor(win.Math.random() * 1e4);
      shadowRoot["id"] = rootId;
      shadowRoot.host.classList.add(rootId);
      installCssTransformer(shadowRoot, function(css) {
        return transformShadowCss(shadowRoot, css);
      });
    }
    return shadowRoot;
  }
  function createShadowRootPolyfill(hostElement) {
    var doc = hostElement.ownerDocument;
    hostElement.classList.add("i-amphtml-shadow-host-polyfill");
    var hostStyle = doc.createElement("style");
    hostStyle.textContent = ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}";
    hostElement.appendChild(hostStyle);
    var shadowRoot = doc.createElement("i-amphtml-shadow-root");
    hostElement.appendChild(shadowRoot);
    hostElement.__AMP_SHADOW_ROOT = shadowRoot;
    Object.defineProperty(hostElement, "shadowRoot", {
      enumerable: true,
      configurable: true,
      value: shadowRoot
    });
    shadowRoot.host = hostElement;
    shadowRoot.getElementById = function(id) {
      var escapedId = escapeCssSelectorIdent(id);
      return shadowRoot.querySelector("#" + escapedId);
    };
    Object.defineProperty(shadowRoot, "styleSheets", {
      get: function get() {
        if (!doc.styleSheets) {
          return [];
        }
        return toArray(doc.styleSheets).filter(function(styleSheet) {
          return shadowRoot.contains(styleSheet.ownerNode);
        });
      }
    });
    return shadowRoot;
  }
  function transformShadowCss(shadowRoot, css) {
    return scopeShadowCss(shadowRoot, css);
  }
  function scopeShadowCss(shadowRoot, css) {
    var id = devAssert(shadowRoot["id"]);
    var doc = shadowRoot.ownerDocument;
    var rules = null;
    try {
      rules = getStylesheetRules(doc.implementation.createHTMLDocument(""), css);
    } catch (e) {
    }
    if (!rules) {
      try {
        rules = getStylesheetRules(doc, css);
      } catch (e) {
      }
    }
    if (!rules) {
      return css;
    }
    var scopeRules2 = ShadowCSS.scopeRules;
    return scopeRules2.call(ShadowCSS, rules, "." + id, transformRootSelectors);
  }
  function transformRootSelectors(selector) {
    return selector.replace(/(html|body)/g, rootSelectorPrefixer);
  }
  function rootSelectorPrefixer(match, name, pos, selector) {
    var prev = selector.charAt(pos - 1);
    var next = selector.charAt(pos + match.length);
    if ((!prev || CSS_SELECTOR_BEG_REGEX.test(prev)) && (!next || CSS_SELECTOR_END_REGEX.test(next))) {
      return "amp-" + match;
    }
    return match;
  }
  function getStylesheetRules(doc, css) {
    var style = doc.createElement("style");
    style.textContent = css;
    try {
      (doc.head || doc.documentElement).appendChild(style);
      if (style.sheet) {
        return style.sheet.cssRules;
      }
      return null;
    } finally {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }
  }

  // extensions/amp-story/1.0/utils.js
  function timeStrToMillis(time, fallbackMs) {
    if (fallbackMs === void 0) {
      fallbackMs = NaN;
    }
    var match = time.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/);
    var num = match ? match[1] : void 0;
    var units = match ? match[2] : void 0;
    if (!match || match.length !== 3 || units !== "s" && units !== "ms") {
      return fallbackMs;
    }
    return Math.round((units == "s" ? 1e3 : 1) * parseFloat(num));
  }
  function hasTapAction(el) {
    return el.hasAttribute("on") && !!el.getAttribute("on").match(/(^|;)\s*tap\s*:/);
  }
  function unscaledClientRect(el) {
    var _el$getBoundingClient = el.getBoundingClientRect(), height = _el$getBoundingClient.height, left = _el$getBoundingClient.left, top = _el$getBoundingClient.top, width = _el$getBoundingClient.width;
    var scaleFactorX = width == 0 ? 1 : width / el.offsetWidth;
    var scaleFactorY = height == 0 ? 1 : height / el.offsetHeight;
    return {
      left: left / scaleFactorX,
      top: top / scaleFactorY,
      width: width / scaleFactorX,
      height: height / scaleFactorY
    };
  }
  function ampMediaElementFor(el) {
    return closestAncestorElementBySelector(el, "amp-video, amp-audio");
  }
  function createShadowRootWithStyle(container, element, css) {
    var style = self.document.createElement("style");
    style.textContent = css;
    var containerToUse = getMode().test ? container : createShadowRoot(container);
    containerToUse.appendChild(style);
    containerToUse.appendChild(element);
  }
  function getRGBFromCssColorValue(cssValue) {
    var regexPattern = /rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})/;
    if (!cssValue.match(regexPattern)) {
      user().error("UTILS", "getRGBFromCssColorValue expects a parameter in " + ("the form of 'rgba(0, 0, 0, 1)' or 'rgb(0, 0, 0)' but got " + cssValue));
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
    var matches2 = regexPattern.exec(cssValue);
    return {
      r: Number(matches2[1]),
      g: Number(matches2[2]),
      b: Number(matches2[3])
    };
  }
  function getTextColorForRGB(rgb) {
    var b = rgb.b, g = rgb.g, r = rgb.r;
    var getLinearRGBValue = function getLinearRGBValue2(x) {
      x /= 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    };
    var linearR = getLinearRGBValue(r);
    var linearG = getLinearRGBValue(g);
    var linearB = getLinearRGBValue(b);
    var L = 0.2126 * linearR + 0.7152 * linearG + 0.0722 * linearB;
    return L > 0.179 ? "#000" : "#FFF";
  }
  function setAttributeInMutate(elementImpl, name, opt_value) {
    var value = opt_value || "";
    elementImpl.mutateElement(function() {
      elementImpl.element.setAttribute(name, value);
    });
  }
  function removeAttributeInMutate(elementImpl, name) {
    elementImpl.mutateElement(function() {
      elementImpl.element.removeAttribute(name);
    });
  }
  function getSourceOriginForElement(element, url) {
    var domainName;
    try {
      domainName = getSourceOrigin(Services.urlForDoc(element).parse(url));
      domainName = Services.urlForDoc(element).parse(domainName).hostname;
    } catch (e) {
      domainName = Services.urlForDoc(element).parse(url).hostname;
    }
    return domainName;
  }
  function shouldShowStoryUrlInfo(viewer) {
    var showStoryUrlInfo = viewer.getParam("showStoryUrlInfo");
    return showStoryUrlInfo ? showStoryUrlInfo !== "0" : viewer.isEmbedded();
  }
  function getStoryAttributeSrc(element, attribute, warn) {
    if (warn === void 0) {
      warn = false;
    }
    var storyEl = dev().assertElement(closestAncestorElementBySelector(element, "AMP-STORY"));
    var attrSrc = storyEl && storyEl.getAttribute(attribute);
    if (attrSrc) {
      assertHttpsUrl(attrSrc, storyEl, attribute);
    } else if (warn) {
      user().warn("AMP-STORY", "Expected " + attribute + " attribute on <amp-story>");
    }
    return attrSrc;
  }
  var TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME = "data-text-background-color";
  var TEXT_BACKGROUND_COLOR_SELECTOR = "[" + TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME + "]";
  function setTextBackgroundColor(element) {
    var elementsToUpgradeStyles = scopedQuerySelectorAll(element, TEXT_BACKGROUND_COLOR_SELECTOR);
    Array.prototype.forEach.call(elementsToUpgradeStyles, function(el) {
      var color = el.getAttribute(TEXT_BACKGROUND_COLOR_ATTRIBUTE_NAME);
      setStyle(el, "background-color", color);
    });
  }
  function triggerClickFromLightDom(anchorElement, domElement) {
    var outerAnchor = anchorElement.cloneNode();
    toggle(outerAnchor, false);
    domElement.appendChild(outerAnchor);
    outerAnchor.click();
    outerAnchor.remove();
  }

  // build/amp-story-tooltip-1.0.css.js
  var CSS2 = `.i-amphtml-story-focused-state-layer{top:0!important;left:0!important;width:100%!important;height:100%!important;z-index:100001!important;position:absolute!important}.i-amphtml-story-focused-state-layer.i-amphtml-hidden{opacity:0!important;pointer-events:none!important;transition:opacity 0.1s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-focused-state-layer-nav-button-container{height:100%!important;width:160px!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-focused-state-layer-nav-button-container.i-amphtml-story-tooltip-nav-button-left{background-image:linear-gradient(90deg,rgba(33,33,33,0.15) 2%,rgba(33,33,33,0))!important;left:0!important}.i-amphtml-story-focused-state-layer-nav-button-container.i-amphtml-story-tooltip-nav-button-right{background-image:linear-gradient(90deg,rgba(33,33,33,0) 2%,rgba(33,33,33,0.15))!important;right:0!important}.i-amphtml-story-focused-state-layer-nav-button{position:absolute!important;top:0!important;bottom:0!important;margin:auto!important;width:48px!important;height:48px!important;padding:0!important;border:0!important;background-color:transparent!important;filter:drop-shadow(0px 0px 16px rgba(0,0,0,0.5))!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-left{left:-8px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='M30.83 14.83 28 12 16 24l12 12 2.83-2.83L21.66 24z'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-hidden .i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-left{transform:translate3d(8px,0,0);transition:transform 0s linear .1s!important}.i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-right{right:-8px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='m20 12-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z'/%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-hidden .i-amphtml-story-focused-state-layer-nav-button.i-amphtml-story-tooltip-nav-button-right{transform:translate3d(-8px,0,0);transition:transform 0s linear .1s!important}[desktop] .i-amphtml-story-focused-state-layer-nav-button-container{display:none!important}.i-amphtml-hidden>.i-amphtml-story-tooltip,.i-amphtml-hidden>.i-amphtml-story-tooltip.i-amphtml-tooltip-arrow-on-top{transform:translateZ(0)!important;transition:transform 0s linear 0.1s!important}.i-amphtml-story-tooltip{max-width:248px!important;height:40px!important;border-radius:6px!important;padding:8px!important;position:absolute!important;box-sizing:border-box!important;text-decoration:none!important;text-shadow:none!important;font-weight:500!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;background:#fff!important;box-shadow:0px 6px 16px rgba(0,0,0,0.16)!important;transform:translate3d(0,-16px,0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-tooltip-theme-dark{background:#202125!important}.i-amphtml-story-tooltip.i-amphtml-tooltip-arrow-on-top{transform:translate3d(0,16px,0)!important}.i-amphtml-tooltip-text{text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important;margin:0px 5px!important;font-family:Roboto,sans-serif!important;font-size:14px!important;color:#3c4043!important;letter-spacing:0!important;line-height:20px!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-text{color:#9aa0a6!important}.i-amphtml-story-tooltip-custom-icon{width:24px!important;height:24px!important;margin:0px 5px!important;background-size:cover!important;background-position:50%!important;background-repeat:no-repeat!important;filter:drop-shadow(0px 0px 8px rgba(0,0,0,0.08))!important;-ms-flex-negative:0;flex-shrink:0;border-radius:50%!important}.i-amphtml-story-tooltip-custom-icon.i-amphtml-hidden{display:none!important}.i-amphtml-tooltip-action-icon{width:16px!important;height:16px!important;margin:0px 5px!important;padding-bottom:2px!important;-ms-flex-negative:0;flex-shrink:0}.i-amphtml-tooltip-action-icon-launch{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 48 48' fill='%23757575'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z'/%3E%3C/svg%3E")!important}.i-amphtml-tooltip-action-icon-expand{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 48 48' fill='%23757575'%3E%3Cpath d='m17.17 32.92 9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z'/%3E%3Cpath d='M0-.25h48v48H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-action-icon-launch{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 48 48' fill='rgba(255, 255, 255, 0.54)'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z'/%3E%3C/svg%3E")!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-action-icon-expand{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 48 48' fill='rgba(255, 255, 255, 0.54)'%3E%3Cpath d='m17.17 32.92 9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z'/%3E%3Cpath d='M0-.25h48v48H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-tooltip-arrow{border-right:8px solid transparent!important;border-left:8px solid transparent!important;border-top:10px solid #fff!important;position:absolute!important;bottom:-8px!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-story-tooltip-arrow{border-top:10px solid #202125!important}.i-amphtml-tooltip-arrow-on-top .i-amphtml-story-tooltip-arrow{bottom:auto!important;top:-8px!important;border-top:0px!important;border-bottom:10px solid #fff!important}.i-amphtml-story-tooltip-theme-dark .i-amphtml-tooltip-arrow-on-top .i-amphtml-story-tooltip-arrow{border-bottom:10px solid #202125!important}.amp-social-share-twitter-no-background{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%231da1f2' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E")}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-tooltip.css*/`;

  // extensions/amp-story/1.0/events.js
  var EventType = {
    MUTE: "ampstory:mute",
    UNMUTE: "ampstory:unmute",
    SWITCH_PAGE: "ampstory:switchpage",
    PREVIOUS_PAGE: "ampstory:previouspage",
    NEXT_PAGE: "ampstory:nextpage",
    PAGE_PROGRESS: "ampstory:pageprogress",
    REPLAY: "ampstory:replay",
    DEV_LOG_ENTRIES_AVAILABLE: "ampstory:devlogentriesavailable",
    NO_NEXT_PAGE: "ampstory:nonextpage",
    NO_PREVIOUS_PAGE: "ampstory:nopreviouspage",
    STORY_LOADED: "ampstory:load",
    PAGE_LOADED: "ampstory:pageload",
    DISPATCH_ACTION: "ampstory:dispatchaction"
  };
  function dispatch(win, source, eventName, payload, eventInit) {
    if (payload === void 0) {
      payload = void 0;
    }
    if (eventInit === void 0) {
      eventInit = void 0;
    }
    var event = createCustomEvent(win, eventName, payload, eventInit);
    source.dispatchEvent(event);
  }

  // src/localized-strings.js
  var LocalizedStringId = {
    AMP_STORY_ACTIVATE_BUTTON_TEXT: "83",
    AMP_STORY_AUDIO_MUTE_BUTTON_LABEL: "66",
    AMP_STORY_AUDIO_MUTE_BUTTON_TEXT: "31",
    AMP_STORY_AUDIO_UNMUTE_BUTTON_LABEL: "67",
    AMP_STORY_AUDIO_UNMUTE_NO_SOUND_TEXT: "33",
    AMP_STORY_AUDIO_UNMUTE_SOUND_TEXT: "32",
    AMP_STORY_CLOSE_BUTTON_LABEL: "87",
    AMP_STORY_CONSENT_ACCEPT_BUTTON_LABEL: "22",
    AMP_STORY_CONSENT_DECLINE_BUTTON_LABEL: "23",
    AMP_STORY_CONTINUE_ANYWAY_BUTTON_LABEL: "27",
    AMP_STORY_DISCOVERY_DIALOG_TEXT: "96",
    AMP_STORY_DOMAIN_DIALOG_HEADING_LABEL: "25",
    AMP_STORY_DOMAIN_DIALOG_HEADING_LINK: "26",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_PROGRESS: "78",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_INSTRUCTIONS: "79",
    AMP_STORY_EDUCATION_NAVIGATION_SWIPE_DISMISS: "80",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_PROGRESS: "75",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_PROGRESS_SINGLE: "81",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_INSTRUCTIONS: "76",
    AMP_STORY_EDUCATION_NAVIGATION_TAP_DISMISS: "77",
    AMP_STORY_HAS_NEW_PAGE_TEXT: "64",
    AMP_STORY_HINT_UI_NEXT_LABEL: "2",
    AMP_STORY_HINT_UI_PREVIOUS_LABEL: "3",
    AMP_STORY_INFO_BUTTON_LABEL: "68",
    AMP_STORY_NEXT_PAGE: "91",
    AMP_STORY_NEXT_STORY: "90",
    AMP_STORY_OPEN_OUTLINK_TEXT: "97",
    AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL: "35",
    AMP_STORY_PAGINATION_BUTTON_PREVIOUS_PAGE_LABEL: "82",
    AMP_STORY_PAGE_ERROR_VIDEO: "65",
    AMP_STORY_PAGE_PLAY_VIDEO: "34",
    AMP_STORY_PAUSE_BUTTON_LABEL: "85",
    AMP_STORY_PLAY_BUTTON_LABEL: "86",
    AMP_STORY_PREVIOUS_PAGE: "93",
    AMP_STORY_REPLAY: "92",
    AMP_STORY_SHARE_BUTTON_LABEL: "69",
    AMP_STORY_SHARING_CLIPBOARD_FAILURE_TEXT: "4",
    AMP_STORY_SHARING_CLIPBOARD_SUCCESS_TEXT: "5",
    AMP_STORY_SHARING_PAGE_LABEL: "62",
    AMP_STORY_SHARING_PROVIDER_NAME_EMAIL: "6",
    AMP_STORY_SHARING_PROVIDER_NAME_FACEBOOK: "7",
    AMP_STORY_SHARING_PROVIDER_NAME_GOOGLE_PLUS: "8",
    AMP_STORY_SHARING_PROVIDER_NAME_LINE: "63",
    AMP_STORY_SHARING_PROVIDER_NAME_LINK: "9",
    AMP_STORY_SHARING_PROVIDER_NAME_LINKEDIN: "10",
    AMP_STORY_SHARING_PROVIDER_NAME_PINTEREST: "11",
    AMP_STORY_SHARING_PROVIDER_NAME_SMS: "12",
    AMP_STORY_SHARING_PROVIDER_NAME_SYSTEM: "13",
    AMP_STORY_SHARING_PROVIDER_NAME_TUMBLR: "14",
    AMP_STORY_SHARING_PROVIDER_NAME_TWITTER: "15",
    AMP_STORY_SHARING_PROVIDER_NAME_WHATSAPP: "16",
    AMP_STORY_SIDEBAR_BUTTON_LABEL: "70",
    AMP_STORY_SKIP_TO_NEXT_BUTTON_LABEL: "88",
    AMP_STORY_TOOLTIP_EXPAND_TWEET: "36",
    AMP_STORY_WARNING_DESKTOP_HEIGHT_SIZE_TEXT: "37",
    AMP_STORY_WARNING_DESKTOP_SIZE_TEXT: "18",
    AMP_STORY_WARNING_DESKTOP_WIDTH_SIZE_TEXT: "38",
    AMP_STORY_WARNING_EXPERIMENT_DISABLED_TEXT: "19",
    AMP_STORY_WARNING_LANDSCAPE_ORIENTATION_TEXT: "20",
    AMP_STORY_WARNING_UNSUPPORTED_BROWSER_TEXT: "21",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_APPLY_NOW: "39",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_BOOK_NOW: "40",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_BUY_TICKETS: "41",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_DOWNLOAD: "42",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_EXPLORE: "43",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_GET_NOW: "44",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_INSTALL: "45",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_LEARN_MORE: "46",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_LISTEN: "47",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_MORE: "48",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_OPEN_APP: "49",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_ORDER_NOW: "50",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_PLAY: "51",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_READ: "52",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOP: "53",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOW: "54",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOWTIMES: "55",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SIGN_UP: "56",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_SUBSCRIBE: "57",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_USE_APP: "58",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_VIEW: "59",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH: "60",
    AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH_EPISODE: "61",
    AMP_STORY_INTERACTIVE_DISCLAIMER_NOTE: "89",
    AMP_STORY_INTERACTIVE_RESULTS_SCORE: "84",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_A: "71",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_B: "72",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_C: "73",
    AMP_STORY_INTERACTIVE_QUIZ_ANSWER_CHOICE_D: "74"
  };
  function cloneLocalizedStringBundle(localizedStringBundle) {
    return parseJson(JSON.stringify(localizedStringBundle));
  }
  function createPseudoLocale(localizedStringBundle, localizationFn) {
    var pseudoLocaleStringBundle = cloneLocalizedStringBundle(localizedStringBundle);
    Object.keys(pseudoLocaleStringBundle).forEach(function(localizedStringIdAsStr) {
      var localizedStringId = localizedStringIdAsStr;
      pseudoLocaleStringBundle[localizedStringId].string = localizationFn(localizedStringBundle[localizedStringId].string);
      pseudoLocaleStringBundle[localizedStringId].fallback = localizationFn(localizedStringBundle[localizedStringId].fallback);
    });
    return pseudoLocaleStringBundle;
  }

  // src/service/localization.js
  function _classCallCheck13(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties12(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
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
  var FALLBACK_LANGUAGE_CODE = "default";
  var LANGUAGE_CODE_CHUNK_REGEX = /\w+/gi;
  function findLocalizedString(localizedStringBundles, languageCodes, localizedStringId) {
    var localizedString = null;
    languageCodes.some(function(languageCode) {
      var localizedStringBundle = localizedStringBundles[languageCode];
      if (localizedStringBundle && localizedStringBundle[localizedStringId]) {
        localizedString = localizedStringBundle[localizedStringId].string || localizedStringBundle[localizedStringId].fallback;
        return !!localizedString;
      }
      return false;
    });
    return localizedString;
  }
  function getLanguageCodesFromString(languageCode) {
    if (!languageCode) {
      return ["en", FALLBACK_LANGUAGE_CODE];
    }
    var matches2 = languageCode.match(LANGUAGE_CODE_CHUNK_REGEX) || [];
    return matches2.reduce(function(fallbackLanguageCodeList, chunk, index) {
      var fallbackLanguageCode = matches2.slice(0, index + 1).join("-").toLowerCase();
      fallbackLanguageCodeList.unshift(fallbackLanguageCode);
      return fallbackLanguageCodeList;
    }, [FALLBACK_LANGUAGE_CODE]);
  }
  var LocalizationService = /* @__PURE__ */ function() {
    function LocalizationService2(element) {
      _classCallCheck13(this, LocalizationService2);
      this.element_ = element;
      this.viewerLanguageCode_ = Services.viewerForDoc(element).getParam("lang");
      this.localizedStringBundles_ = {};
    }
    _createClass12(LocalizationService2, [{
      key: "getLanguageCodesForElement_",
      value: function getLanguageCodesForElement_(element) {
        var languageEl = closest(element, function(el) {
          return el.hasAttribute("lang");
        });
        var languageCode = languageEl ? languageEl.getAttribute("lang") : null;
        var languageCodesToUse = getLanguageCodesFromString(languageCode || "");
        if (this.viewerLanguageCode_) {
          languageCodesToUse.unshift(this.viewerLanguageCode_);
        }
        return languageCodesToUse;
      }
    }, {
      key: "registerLocalizedStringBundle",
      value: function registerLocalizedStringBundle(languageCode, localizedStringBundle) {
        var normalizedLangCode = languageCode.toLowerCase();
        if (!this.localizedStringBundles_[normalizedLangCode]) {
          this.localizedStringBundles_[normalizedLangCode] = {};
        }
        Object.assign(this.localizedStringBundles_[normalizedLangCode], localizedStringBundle);
        return this;
      }
    }, {
      key: "getLocalizedString",
      value: function getLocalizedString(localizedStringId, elementToUse) {
        if (elementToUse === void 0) {
          elementToUse = this.element_;
        }
        var languageCodes = this.getLanguageCodesForElement_(elementToUse);
        return findLocalizedString(this.localizedStringBundles_, languageCodes, localizedStringId);
      }
    }]);
    return LocalizationService2;
  }();

  // extensions/amp-story/1.0/amp-story-localization-service.js
  var getLocalizationService = function getLocalizationService2(element) {
    var localizationService = Services.localizationForDoc(element);
    if (!localizationService) {
      localizationService = new LocalizationService(element);
      registerServiceBuilderForDoc(element, "localization", function() {
        return localizationService;
      });
    }
    return localizationService;
  };

  // extensions/amp-story/1.0/amp-story-embedded-component.js
  var _templateObject3;
  var _templateObject22;
  var _templateObject32;
  function _classCallCheck14(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties13(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass13(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties13(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties13(Constructor, staticProps);
    return Constructor;
  }
  function _taggedTemplateLiteralLoose2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _extends3() {
    _extends3 = Object.assign || function(target) {
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
    return _extends3.apply(this, arguments);
  }
  var ActionIcon = {
    LAUNCH: "i-amphtml-tooltip-action-icon-launch",
    EXPAND: "i-amphtml-tooltip-action-icon-expand"
  };
  var TOOLTIP_CLOSE_ANIMATION_MS = 100;
  var DARK_THEME_CLASS = "i-amphtml-story-tooltip-theme-dark";
  var TooltipTheme = {
    LIGHT: "light",
    DARK: "dark"
  };
  var MAX_TWEET_WIDTH_PX = 500;
  var EXPANDABLE_COMPONENTS = {
    "amp-twitter": {
      customIconClassName: "amp-social-share-twitter-no-background",
      actionIcon: ActionIcon.EXPAND,
      localizedStringId: LocalizedStringId.AMP_STORY_TOOLTIP_EXPAND_TWEET,
      selector: "amp-twitter"
    }
  };
  var LAUNCHABLE_COMPONENTS = {
    "a": {
      actionIcon: ActionIcon.LAUNCH,
      selector: "a[href]:not([affiliate-link-icon])"
    }
  };
  var INTERACTIVE_COMPONENTS = _extends3({}, EXPANDABLE_COMPONENTS, LAUNCHABLE_COMPONENTS);
  function getComponentSelectors(components, opt_predicate) {
    var componentSelectors = {};
    Object.keys(components).forEach(function(componentName) {
      componentSelectors[componentName] = opt_predicate ? components[componentName].selector + opt_predicate : components[componentName].selector;
    });
    return componentSelectors;
  }
  var INTERACTIVE_EMBED_SELECTOR = "[interactive]";
  function expandableElementsSelectors() {
    return getComponentSelectors(EXPANDABLE_COMPONENTS, INTERACTIVE_EMBED_SELECTOR);
  }
  var interactiveSelectors = _extends3({}, getComponentSelectors(LAUNCHABLE_COMPONENTS), getComponentSelectors(EXPANDABLE_COMPONENTS, INTERACTIVE_EMBED_SELECTOR), {
    EXPANDED_VIEW_OVERLAY: ".i-amphtml-story-expanded-view-overflow, .i-amphtml-expanded-view-close-button"
  });
  function interactiveElementsSelectors() {
    return interactiveSelectors;
  }
  var embedStyleEls = dict();
  var embedIds = 0;
  var AMP_EMBED_DATA = "__AMP_EMBED_DATA__";
  var EMBED_ID_ATTRIBUTE_NAME = "i-amphtml-embed-id";
  var buildExpandedViewOverlay = function buildExpandedViewOverlay2(element) {
    return htmlFor(element)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose2(['\n    <div class="i-amphtml-story-expanded-view-overflow i-amphtml-story-system-reset">\n      <button class="i-amphtml-expanded-view-close-button" aria-label="close" role="button"></button>\n    </div>'])));
  };
  function updateEmbedStyleEl(target, embedStyleEl, embedData) {
    var embedId = embedData.id;
    embedStyleEl.textContent = "[" + EMBED_ID_ATTRIBUTE_NAME + '="' + embedId + '"]\n  ' + buildStringStyleFromEl(target, embedData);
  }
  function buildStringStyleFromEl(target, embedData) {
    switch (target.tagName.toLowerCase()) {
      case EXPANDABLE_COMPONENTS["amp-twitter"].selector:
        return buildStringStyleForTweet(embedData);
      default:
        return buildDefaultStringStyle(embedData);
    }
  }
  function buildStringStyleForTweet(embedData) {
    return "{\n    width: " + px(embedData.width) + " !important;\n    transform: " + embedData.transform + " !important;\n    margin: " + embedData.verticalMargin + "px " + embedData.horizontalMargin + "px !important;\n    }";
  }
  function buildDefaultStringStyle(embedData) {
    return "{\n    width: " + px(embedData.width) + " !important;\n    height: " + px(embedData.height) + " !important;\n    transform: " + embedData.transform + " !important;\n    margin: " + embedData.verticalMargin + "px " + embedData.horizontalMargin + "px !important;\n    }";
  }
  function measureStyleForEl(element, state, pageRect, elRect) {
    switch (element.tagName.toLowerCase()) {
      case EXPANDABLE_COMPONENTS["amp-twitter"].selector:
        return measureStylesForTwitter(state, pageRect, elRect);
      default:
        return measureDefaultStyles(state, pageRect, elRect);
    }
  }
  function measureStylesForTwitter(state, pageRect, elRect) {
    state.newWidth = Math.min(pageRect.width, MAX_TWEET_WIDTH_PX);
    state.scaleFactor = Math.min(elRect.width, MAX_TWEET_WIDTH_PX) / state.newWidth;
    var shrinkedSize = elRect.height * state.scaleFactor;
    state.verticalMargin = -1 * ((elRect.height - shrinkedSize) / 2);
    state.horizontalMargin = -1 * ((state.newWidth - elRect.width) / 2);
    return state;
  }
  function measureDefaultStyles(state, pageRect, elRect) {
    if (elRect.width >= elRect.height) {
      state.newWidth = pageRect.width;
      state.scaleFactor = elRect.width / state.newWidth;
      state.newHeight = elRect.height / elRect.width * state.newWidth;
    } else {
      var maxHeight = pageRect.height - VERTICAL_PADDING;
      state.newWidth = Math.min(elRect.width / elRect.height * maxHeight, pageRect.width);
      state.newHeight = elRect.height / elRect.width * state.newWidth;
      state.scaleFactor = elRect.height / state.newHeight;
    }
    state.verticalMargin = -1 * ((state.newHeight - elRect.height) / 2);
    state.horizontalMargin = -1 * ((state.newWidth - elRect.width) / 2);
    return state;
  }
  function updateStyleForEl(element, elId, state) {
    switch (element.tagName.toLowerCase()) {
      case EXPANDABLE_COMPONENTS["amp-twitter"].selector:
        return updateStylesForTwitter(elId, state);
      default:
        return updateDefaultStyles(elId, state);
    }
  }
  function updateDefaultStyles(elId, state) {
    return {
      id: elId,
      width: state.newWidth,
      height: state.newHeight,
      scaleFactor: state.scaleFactor,
      transform: "scale(" + state.scaleFactor + ")",
      verticalMargin: state.verticalMargin,
      horizontalMargin: state.horizontalMargin
    };
  }
  function updateStylesForTwitter(elId, state) {
    return {
      id: elId,
      width: state.newWidth,
      scaleFactor: state.scaleFactor,
      transform: "scale(" + state.scaleFactor + ")",
      horizontalMargin: state.horizontalMargin,
      verticalMargin: state.verticalMargin
    };
  }
  var MIN_VERTICAL_SPACE = 48;
  var VERTICAL_PADDING = 96;
  var VERTICAL_EDGE_PADDING = 24;
  var HORIZONTAL_EDGE_PADDING = 32;
  var TOOLTIP_ARROW_RIGHT_PADDING = 24;
  var TAG4 = "amp-story-embedded-component";
  var AmpStoryEmbeddedComponent = /* @__PURE__ */ function() {
    function AmpStoryEmbeddedComponent2(win, storyEl) {
      var _this = this;
      _classCallCheck14(this, AmpStoryEmbeddedComponent2);
      this.win_ = win;
      this.storyEl_ = storyEl;
      this.shadowRoot_ = null;
      this.focusedStateOverlay_ = null;
      this.tooltip_ = null;
      this.tooltipArrow_ = null;
      this.storeService_ = getStoreService(this.win_);
      this.mutator_ = Services.mutatorForDoc(getAmpdoc(this.win_.document));
      this.analyticsService_ = getAnalyticsService(this.win_, storyEl);
      this.owners_ = Services.ownersForDoc(getAmpdoc(this.win_.document));
      this.timer_ = Services.timerFor(this.win_);
      this.expandedViewOverlay_ = null;
      this.triggeringTarget_ = null;
      this.componentPage_ = null;
      this.expandComponentHandler_ = this.onExpandComponent_.bind(this);
      this.embedsToBePaused_ = [];
      this.storeService_.subscribe(StateProperty.INTERACTIVE_COMPONENT_STATE, function(component) {
        _this.onComponentStateUpdate_(component);
      });
      this.historyService_ = Services.historyForDoc(getAmpdoc(this.win_.document));
      this.state_ = EmbeddedComponentState.HIDDEN;
      this.buttonLeft_ = null;
      this.buttonRight_ = null;
      this.historyId_ = -1;
    }
    _createClass13(AmpStoryEmbeddedComponent2, [{
      key: "onComponentStateUpdate_",
      value: function onComponentStateUpdate_(component) {
        switch (component.state) {
          case EmbeddedComponentState.HIDDEN:
            this.setState_(EmbeddedComponentState.HIDDEN, null);
            break;
          case EmbeddedComponentState.FOCUSED:
            if (this.state_ !== EmbeddedComponentState.HIDDEN) {
              dev().warn(TAG4, "Invalid component update. Not possible to go from " + this.state_ + "\n              to " + component.state);
            }
            this.setState_(EmbeddedComponentState.FOCUSED, component);
            break;
          case EmbeddedComponentState.EXPANDED:
            if (this.state_ === EmbeddedComponentState.FOCUSED) {
              this.setState_(EmbeddedComponentState.EXPANDED, component);
            } else if (this.state_ === EmbeddedComponentState.EXPANDED) {
              this.maybeCloseExpandedView_(component.element);
            } else {
              dev().warn(TAG4, "Invalid component update. Not possible to go from " + this.state_ + "\n               to " + component.state);
            }
            break;
        }
      }
    }, {
      key: "setState_",
      value: function setState_(state, component) {
        var _this2 = this;
        switch (state) {
          case EmbeddedComponentState.FOCUSED:
            this.state_ = state;
            this.onFocusedStateUpdate_(component);
            this.analyticsService_.triggerEvent(StoryAnalyticsEvent.FOCUS, this.triggeringTarget_);
            break;
          case EmbeddedComponentState.HIDDEN:
            this.state_ = state;
            this.onFocusedStateUpdate_(null);
            break;
          case EmbeddedComponentState.EXPANDED:
            this.state_ = state;
            this.onFocusedStateUpdate_(null);
            this.scheduleEmbedToPause_(component.element);
            this.toggleExpandedView_(component.element);
            this.historyService_.push(function() {
              return _this2.close_();
            }).then(function(historyId) {
              _this2.historyId_ = historyId;
            });
            break;
          default:
            dev().warn(TAG4, "EmbeddedComponentState " + this.state_ + " does not exist");
            break;
        }
      }
    }, {
      key: "scheduleEmbedToPause_",
      value: function scheduleEmbedToPause_(embedEl) {
        this.owners_.scheduleResume(this.storyEl_, embedEl);
        if (!this.embedsToBePaused_.includes(embedEl)) {
          this.embedsToBePaused_.push(embedEl);
        }
      }
    }, {
      key: "toggleExpandedView_",
      value: function toggleExpandedView_(targetToExpand) {
        var _this3 = this;
        if (!targetToExpand) {
          this.expandedViewOverlay_ && this.mutator_.mutateElement(this.expandedViewOverlay_, function() {
            _this3.componentPage_.classList.toggle("i-amphtml-expanded-mode", false);
            toggle(dev().assertElement(_this3.expandedViewOverlay_), false);
            _this3.closeExpandedEl_();
          });
          return;
        }
        this.animateExpanded_(devAssert(targetToExpand));
        this.expandedViewOverlay_ = this.componentPage_.querySelector(".i-amphtml-story-expanded-view-overflow");
        if (!this.expandedViewOverlay_) {
          this.buildAndAppendExpandedViewOverlay_();
        }
        this.mutator_.mutateElement(dev().assertElement(this.expandedViewOverlay_), function() {
          toggle(dev().assertElement(_this3.expandedViewOverlay_), true);
          _this3.componentPage_.classList.toggle("i-amphtml-expanded-mode", true);
        });
      }
    }, {
      key: "buildAndAppendExpandedViewOverlay_",
      value: function buildAndAppendExpandedViewOverlay_() {
        var _this4 = this;
        this.expandedViewOverlay_ = buildExpandedViewOverlay(this.storyEl_);
        var closeButton = dev().assertElement(this.expandedViewOverlay_.querySelector(".i-amphtml-expanded-view-close-button"));
        var localizationService = getLocalizationService(devAssert(this.storyEl_));
        if (localizationService) {
          var localizedCloseString = localizationService.getLocalizedString(LocalizedStringId.AMP_STORY_CLOSE_BUTTON_LABEL);
          closeButton.setAttribute("aria-label", localizedCloseString);
        }
        this.mutator_.mutateElement(dev().assertElement(this.componentPage_), function() {
          return _this4.componentPage_.appendChild(_this4.expandedViewOverlay_);
        });
      }
    }, {
      key: "maybeCloseExpandedView_",
      value: function maybeCloseExpandedView_(target, forceClose) {
        if (forceClose === void 0) {
          forceClose = false;
        }
        if (target && matches(target, ".i-amphtml-expanded-view-close-button") || forceClose) {
          if (this.historyId_ !== -1) {
            this.historyService_.goBack();
          } else {
            this.close_();
          }
        }
      }
    }, {
      key: "buildFocusedState_",
      value: function buildFocusedState_() {
        var _this5 = this;
        this.shadowRoot_ = this.win_.document.createElement("div");
        this.focusedStateOverlay_ = devAssert(this.buildFocusedStateTemplate_(this.win_.document));
        createShadowRootWithStyle(this.shadowRoot_, this.focusedStateOverlay_, CSS2);
        this.focusedStateOverlay_.addEventListener("click", function(event) {
          return _this5.onOutsideTooltipClick_(event);
        });
        this.tooltip_.addEventListener("click", function(event) {
          event.stopPropagation();
          _this5.analyticsService_.triggerEvent(StoryAnalyticsEvent.CLICK_THROUGH, _this5.triggeringTarget_);
          _this5.tooltip_.href && _this5.onAnchorClick_(event);
        }, true);
        return this.shadowRoot_;
      }
    }, {
      key: "close_",
      value: function close_() {
        var _this6 = this;
        this.timer_.delay(function() {
          _this6.clearTooltip_();
        }, TOOLTIP_CLOSE_ANIMATION_MS);
        if (this.state_ === EmbeddedComponentState.EXPANDED) {
          this.toggleExpandedView_(null);
        }
        this.storeService_.dispatch(Action.TOGGLE_INTERACTIVE_COMPONENT, {
          state: EmbeddedComponentState.HIDDEN
        });
        this.tooltip_.removeEventListener("click", this.expandComponentHandler_, true);
      }
    }, {
      key: "onFocusedStateUpdate_",
      value: function onFocusedStateUpdate_(component) {
        var _this7 = this;
        if (!component) {
          this.mutator_.mutateElement(dev().assertElement(this.focusedStateOverlay_), function() {
            _this7.focusedStateOverlay_.classList.toggle("i-amphtml-hidden", true);
          });
          return;
        }
        this.triggeringTarget_ = component.element;
        if (!this.focusedStateOverlay_) {
          this.storyEl_.appendChild(this.buildFocusedState_());
          this.initializeListeners_();
        }
        this.timer_.delay(function() {
          _this7.buildTooltip_(component);
        }, TOOLTIP_CLOSE_ANIMATION_MS);
      }
    }, {
      key: "buildTooltip_",
      value: function buildTooltip_(component) {
        var _this8 = this;
        this.updateTooltipBehavior_(component.element);
        this.updateTooltipEl_(component);
        this.componentPage_ = devAssert(this.storyEl_.querySelector("amp-story-page[active]"));
        this.mutator_.mutateElement(dev().assertElement(this.focusedStateOverlay_), function() {
          _this8.focusedStateOverlay_.classList.toggle("i-amphtml-hidden", false);
          tryFocus(dev().assertElement(_this8.focusedStateOverlay_.querySelector("a.i-amphtml-story-tooltip")));
        });
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this9 = this;
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this9.onUIStateUpdate_(uiState);
        }, true);
        this.storeService_.subscribe(StateProperty.CURRENT_PAGE_ID, function() {
          if (_this9.state_ === EmbeddedComponentState.FOCUSED) {
            _this9.close_();
          }
          if (_this9.state_ === EmbeddedComponentState.EXPANDED) {
            _this9.maybeCloseExpandedView_(null, true);
          }
          while (_this9.embedsToBePaused_.length > 0) {
            var embedEl = _this9.embedsToBePaused_.pop();
            _this9.owners_.schedulePause(_this9.storyEl_, embedEl);
          }
        });
        this.win_.addEventListener("keyup", function(event) {
          if (event.key === Keys.ESCAPE && _this9.state_ === EmbeddedComponentState.EXPANDED) {
            event.preventDefault();
            _this9.maybeCloseExpandedView_(null, true);
          }
        });
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        var _this10 = this;
        this.mutator_.mutateElement(dev().assertElement(this.focusedStateOverlay_), function() {
          [UIType.DESKTOP_FULLBLEED, UIType.DESKTOP_PANELS].includes(uiState) ? _this10.focusedStateOverlay_.setAttribute("desktop", "") : _this10.focusedStateOverlay_.removeAttribute("desktop");
        });
      }
    }, {
      key: "updateTooltipEl_",
      value: function updateTooltipEl_(component) {
        var embedConfig = userAssert(this.getEmbedConfigFor_(component.element), "Invalid embed config for target", component.element);
        var theme = this.triggeringTarget_.getAttribute("theme");
        if (theme && TooltipTheme.DARK === theme.toLowerCase()) {
          this.tooltip_.classList.add(DARK_THEME_CLASS);
        }
        this.updateTooltipText_(component.element, embedConfig);
        this.updateTooltipComponentIcon_(component.element, embedConfig);
        this.updateTooltipActionIcon_(embedConfig);
        this.updateNavButtons_();
        this.positionTooltip_(component);
      }
    }, {
      key: "updateTooltipBehavior_",
      value: function updateTooltipBehavior_(target) {
        if (matches(target, LAUNCHABLE_COMPONENTS["a"].selector)) {
          addAttributesToElement(dev().assertElement(this.tooltip_), dict({
            "href": this.getElementHref_(target)
          }));
          return;
        }
        if (EXPANDABLE_COMPONENTS[target.tagName.toLowerCase()]) {
          this.tooltip_.addEventListener("click", this.expandComponentHandler_, true);
        }
      }
    }, {
      key: "onExpandComponent_",
      value: function onExpandComponent_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.storeService_.dispatch(Action.TOGGLE_INTERACTIVE_COMPONENT, {
          state: EmbeddedComponentState.EXPANDED,
          element: this.triggeringTarget_
        });
      }
    }, {
      key: "getElementHref_",
      value: function getElementHref_(target) {
        var elUrl = target.getAttribute("href");
        if (!isProtocolValid(elUrl)) {
          user().error(TAG4, "The tooltip url is invalid");
          return "";
        }
        return parseUrlDeprecated(elUrl).href;
      }
    }, {
      key: "getEmbedConfigFor_",
      value: function getEmbedConfigFor_(target) {
        var config = INTERACTIVE_COMPONENTS[target.tagName.toLowerCase()];
        if (config && matches(target, config.selector)) {
          return config;
        }
        user().error(TAG4, "No config matching provided target.");
        return null;
      }
    }, {
      key: "closeExpandedEl_",
      value: function closeExpandedEl_() {
        this.triggeringTarget_.classList.toggle("i-amphtml-expanded-component", false);
        var embedId = this.triggeringTarget_.getAttribute(EMBED_ID_ATTRIBUTE_NAME);
        var embedStyleEl = dev().assertElement(embedStyleEls[embedId], "Failed to look up embed style element with ID " + embedId);
        embedStyleEl[AMP_EMBED_DATA].transform = "scale(" + embedStyleEl[AMP_EMBED_DATA].scaleFactor + ")";
        updateEmbedStyleEl(this.triggeringTarget_, embedStyleEl, embedStyleEl[AMP_EMBED_DATA]);
      }
    }, {
      key: "animateExpanded_",
      value: function animateExpanded_(target) {
        var _this11 = this;
        var embedId = target.getAttribute(EMBED_ID_ATTRIBUTE_NAME);
        var state = {};
        var embedStyleEl = dev().assertElement(embedStyleEls[embedId], "Failed to look up embed style element with ID " + embedId);
        var embedData = embedStyleEl[AMP_EMBED_DATA];
        this.mutator_.measureMutateElement(target, function() {
          var targetRect = target.getBoundingClientRect();
          var pageRect = _this11.componentPage_.getBoundingClientRect();
          var realHeight = target.offsetHeight;
          var maxHeight = pageRect.height - VERTICAL_PADDING;
          state.scaleFactor = 1;
          if (realHeight > maxHeight) {
            state.scaleFactor = maxHeight / realHeight;
          }
          var leftGap = (embedData.width - targetRect.width) / 2;
          var fullScreenLeft = targetRect.left - leftGap - pageRect.left;
          var centeredLeft = pageRect.width / 2 - embedData.width / 2;
          state.translateX = centeredLeft - fullScreenLeft;
          var topGap = (realHeight * state.scaleFactor - targetRect.height) / 2;
          var fullScreenTop = targetRect.top - topGap - pageRect.top;
          var centeredTop = pageRect.height / 2 - realHeight * state.scaleFactor / 2;
          state.translateY = centeredTop - fullScreenTop;
        }, function() {
          target.classList.toggle("i-amphtml-expanded-component", true);
          embedData.transform = "translate3d(" + state.translateX + "px,\n            " + state.translateY + "px, 0) scale(" + state.scaleFactor + ")";
          updateEmbedStyleEl(target, embedStyleEl, embedData);
        });
      }
    }, {
      key: "updateTooltipText_",
      value: function updateTooltipText_(target, embedConfig) {
        var tooltipText = target.getAttribute("data-tooltip-text") || getLocalizationService(this.storyEl_).getLocalizedString(embedConfig.localizedStringId) || getSourceOriginForElement(target, this.getElementHref_(target));
        var existingTooltipText = this.tooltip_.querySelector(".i-amphtml-tooltip-text");
        existingTooltipText.textContent = tooltipText;
      }
    }, {
      key: "updateTooltipActionIcon_",
      value: function updateTooltipActionIcon_(embedConfig) {
        var actionIcon = this.tooltip_.querySelector(".i-amphtml-tooltip-action-icon");
        this.mutator_.mutateElement(dev().assertElement(actionIcon), function() {
          actionIcon.classList.toggle(embedConfig.actionIcon, true);
        });
      }
    }, {
      key: "updateTooltipComponentIcon_",
      value: function updateTooltipComponentIcon_(target, embedConfig) {
        var iconUrl = target.getAttribute("data-tooltip-icon");
        if (!isProtocolValid(iconUrl)) {
          user().error(TAG4, "The tooltip icon url is invalid");
          return;
        }
        var tooltipCustomIcon = this.tooltip_.querySelector(".i-amphtml-story-tooltip-custom-icon");
        if (!iconUrl && !embedConfig.customIconClassName) {
          tooltipCustomIcon.classList.toggle("i-amphtml-hidden", true);
          return;
        }
        if (iconUrl) {
          this.mutator_.mutateElement(dev().assertElement(tooltipCustomIcon), function() {
            setImportantStyles(dev().assertElement(tooltipCustomIcon), {
              "background-image": "url(" + parseUrlDeprecated(iconUrl).href + ")"
            });
          });
          return;
        }
        this.mutator_.mutateElement(dev().assertElement(tooltipCustomIcon), function() {
          tooltipCustomIcon.classList.add(embedConfig.customIconClassName);
        });
      }
    }, {
      key: "updateNavButtons_",
      value: function updateNavButtons_() {
        if (!this.isLastPage_()) {
          this.buttonLeft_.removeAttribute("hidden");
          this.buttonRight_.removeAttribute("hidden");
        } else {
          this.storeService_.get(StateProperty.RTL_STATE) ? this.buttonLeft_.setAttribute("hidden", true) : this.buttonRight_.setAttribute("hidden", true);
        }
      }
    }, {
      key: "isLastPage_",
      value: function isLastPage_() {
        var pageIndex = this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
        var pageCount = this.storeService_.get(StateProperty.PAGE_IDS).length;
        return pageIndex + 1 === pageCount;
      }
    }, {
      key: "positionTooltip_",
      value: function positionTooltip_(component) {
        var _this12 = this;
        var state = {
          arrowOnTop: false
        };
        this.mutator_.measureMutateElement(this.storyEl_, function() {
          var pageRect = _this12.componentPage_.getBoundingClientRect();
          _this12.horizontalPositioning_(component, pageRect, state);
          _this12.verticalPositioning_(component, pageRect, state);
        }, function() {
          _this12.tooltip_.classList.toggle("i-amphtml-tooltip-arrow-on-top", state.arrowOnTop);
          setImportantStyles(dev().assertElement(_this12.tooltipArrow_), {
            left: state.arrowLeftOffset + "px"
          });
          setImportantStyles(devAssert(_this12.tooltip_), {
            top: state.tooltipTop + "px",
            left: state.tooltipLeft + "px"
          });
        });
      }
    }, {
      key: "verticalPositioning_",
      value: function verticalPositioning_(component, pageRect, state) {
        var tooltipHeight = this.tooltip_.offsetHeight;
        var verticalOffset = VERTICAL_EDGE_PADDING;
        state.tooltipTop = component.clientY - tooltipHeight - verticalOffset;
        if (state.tooltipTop < pageRect.top + MIN_VERTICAL_SPACE) {
          state.arrowOnTop = true;
          state.tooltipTop = component.clientY + verticalOffset;
        }
      }
    }, {
      key: "horizontalPositioning_",
      value: function horizontalPositioning_(component, pageRect, state) {
        var tooltipWidth = this.tooltip_.offsetWidth;
        state.tooltipLeft = component.clientX - tooltipWidth / 2;
        var maxLeft = pageRect.left + pageRect.width - HORIZONTAL_EDGE_PADDING - tooltipWidth;
        var minLeft = pageRect.left + HORIZONTAL_EDGE_PADDING;
        state.tooltipLeft = Math.min(state.tooltipLeft, maxLeft);
        state.tooltipLeft = Math.max(state.tooltipLeft, minLeft);
        state.arrowLeftOffset = Math.abs(component.clientX - state.tooltipLeft - this.tooltipArrow_.offsetWidth / 2);
        state.arrowLeftOffset = Math.min(state.arrowLeftOffset, tooltipWidth - TOOLTIP_ARROW_RIGHT_PADDING);
        state.arrowLeftOffset = Math.max(state.arrowLeftOffset, 0);
      }
    }, {
      key: "onOutsideTooltipClick_",
      value: function onOutsideTooltipClick_(event) {
        var _this13 = this;
        if (!closest(dev().assertElement(event.target), function(el) {
          return el == _this13.tooltip_;
        })) {
          event.stopPropagation();
          this.close_();
        }
      }
    }, {
      key: "clearTooltip_",
      value: function clearTooltip_() {
        var _this14 = this;
        this.mutator_.mutateElement(dev().assertElement(this.tooltip_), function() {
          var actionIcon = _this14.tooltip_.querySelector(".i-amphtml-tooltip-action-icon");
          actionIcon.className = "i-amphtml-tooltip-action-icon";
          var customIcon = _this14.tooltip_.querySelector(".i-amphtml-story-tooltip-custom-icon");
          customIcon.className = "i-amphtml-story-tooltip-custom-icon";
          resetStyles(customIcon, ["background-image"]);
          _this14.tooltip_.removeEventListener("click", _this14.expandComponentHandler_, true);
          _this14.tooltip_.classList.remove(DARK_THEME_CLASS);
          _this14.tooltip_.removeAttribute("href");
        });
      }
    }, {
      key: "buildFocusedStateTemplate_",
      value: function buildFocusedStateTemplate_(doc) {
        var _this15 = this;
        var html2 = htmlFor(doc);
        var tooltipOverlay = html2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose2(['\n      <section\n        class="i-amphtml-story-focused-state-layer\n            i-amphtml-story-system-reset i-amphtml-hidden"\n      >\n        <div\n          class="i-amphtml-story-focused-state-layer-nav-button-container\n              i-amphtml-story-tooltip-nav-button-left"\n        >\n          <button\n            ref="buttonLeft"\n            class="i-amphtml-story-focused-state-layer-nav-button\n                i-amphtml-story-tooltip-nav-button-left"\n          ></button>\n        </div>\n        <div\n          class="i-amphtml-story-focused-state-layer-nav-button-container\n              i-amphtml-story-tooltip-nav-button-right"\n        >\n          <button\n            ref="buttonRight"\n            class="i-amphtml-story-focused-state-layer-nav-button\n                    i-amphtml-story-tooltip-nav-button-right"\n          ></button>\n        </div>\n        <a\n          class="i-amphtml-story-tooltip"\n          target="_blank"\n          ref="tooltip"\n          role="tooltip"\n        >\n          <div class="i-amphtml-story-tooltip-custom-icon"></div>\n          <p class="i-amphtml-tooltip-text" ref="text"></p>\n          <div class="i-amphtml-tooltip-action-icon"></div>\n          <div class="i-amphtml-story-tooltip-arrow" ref="arrow"></div>\n        </a>\n      </section>\n    '])));
        var overlayEls = htmlRefs(tooltipOverlay);
        var arrow = overlayEls.arrow, buttonLeft = overlayEls.buttonLeft, buttonRight = overlayEls.buttonRight, tooltip = overlayEls.tooltip;
        this.tooltip_ = tooltip;
        this.tooltipArrow_ = arrow;
        this.buttonLeft_ = buttonLeft;
        this.buttonRight_ = buttonRight;
        var rtlState = this.storeService_.get(StateProperty.RTL_STATE);
        this.buttonLeft_.addEventListener("click", function(e) {
          return _this15.onNavigationalClick_(e, rtlState ? EventType.NEXT_PAGE : EventType.PREVIOUS_PAGE);
        });
        this.buttonRight_.addEventListener("click", function(e) {
          return _this15.onNavigationalClick_(e, rtlState ? EventType.PREVIOUS_PAGE : EventType.NEXT_PAGE);
        });
        return tooltipOverlay;
      }
    }, {
      key: "onNavigationalClick_",
      value: function onNavigationalClick_(event, direction) {
        event.preventDefault();
        this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
        dispatch(this.win_, dev().assertElement(this.shadowRoot_), direction, void 0, {
          bubbles: true
        });
      }
    }, {
      key: "onAnchorClick_",
      value: function onAnchorClick_(event) {
        event.preventDefault();
        triggerClickFromLightDom(this.tooltip_, this.storyEl_);
      }
    }, {
      key: "getShadowRootForTesting",
      value: function getShadowRootForTesting() {
        return this.shadowRoot_;
      }
    }], [{
      key: "prepareForAnimation",
      value: function prepareForAnimation(pageEl, element, mutator) {
        var elId = null;
        if (element.hasAttribute(EMBED_ID_ATTRIBUTE_NAME)) {
          elId = parseInt(element.getAttribute(EMBED_ID_ATTRIBUTE_NAME), 10);
          var embedStyleEl = dev().assertElement(embedStyleEls[elId], "Failed to look up embed style element with ID " + elId);
          embedStyleEl.textContent = "";
          embedStyleEl[AMP_EMBED_DATA] = {};
        }
        var state = {};
        mutator.measureMutateElement(element, function() {
          var pageRect = pageEl.getBoundingClientRect();
          var elRect = element.getBoundingClientRect();
          state = measureStyleForEl(element, state, pageRect, elRect);
        }, function() {
          elId = elId ? elId : ++embedIds;
          if (!element.hasAttribute(EMBED_ID_ATTRIBUTE_NAME)) {
            var html2 = htmlFor(pageEl);
            var _embedStyleEl = html2(_templateObject32 || (_templateObject32 = _taggedTemplateLiteralLoose2([" <style></style> "])));
            element.setAttribute(EMBED_ID_ATTRIBUTE_NAME, elId);
            pageEl.insertBefore(_embedStyleEl, pageEl.firstChild);
            embedStyleEls[elId] = _embedStyleEl;
          }
          embedStyleEls[elId][AMP_EMBED_DATA] = _extends3({}, updateStyleForEl(element, elId, state));
          var embedStyleEl2 = dev().assertElement(embedStyleEls[elId], "Failed to look up embed style element with ID " + elId);
          updateEmbedStyleEl(element, embedStyleEl2, embedStyleEl2[AMP_EMBED_DATA]);
        });
      }
    }]);
    return AmpStoryEmbeddedComponent2;
  }();

  // extensions/amp-story/1.0/page-advancement.js
  function _get3(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get3 = Reflect.get;
    } else {
      _get3 = function _get5(target2, property2, receiver2) {
        var base = _superPropBase3(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get3(target, property, receiver || target);
  }
  function _superPropBase3(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf4(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf4(subClass, superClass);
  }
  function _setPrototypeOf4(o, p) {
    _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
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
    _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf4(o);
  }
  function _classCallCheck15(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties14(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass14(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties14(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties14(Constructor, staticProps);
    return Constructor;
  }
  var HOLD_TOUCH_THRESHOLD_MS = 500;
  var NEXT_SCREEN_AREA_RATIO = 0.75;
  var PREVIOUS_SCREEN_AREA_RATIO = 0.25;
  var TOP_REGION = 0.8;
  var PROTECTED_SCREEN_EDGE_PERCENT = 12;
  var MINIMUM_PROTECTED_SCREEN_EDGE_PX = 48;
  var MINIMUM_TIME_BASED_AUTO_ADVANCE_MS = 500;
  var MAX_LINK_SCREEN_PERCENT = 0.8;
  var INTERACTIVE_EMBEDDED_COMPONENTS_SELECTORS = Object.values(interactiveElementsSelectors()).join(",");
  var POLL_INTERVAL_MS = 300;
  var TapNavigationDirection = {
    "NEXT": 1,
    "PREVIOUS": 2
  };
  var AdvancementConfig = /* @__PURE__ */ function() {
    function AdvancementConfig2() {
      _classCallCheck15(this, AdvancementConfig2);
      this.progressListeners_ = [];
      this.advanceListeners_ = [];
      this.previousListeners_ = [];
      this.tapNavigationListeners_ = [];
      this.isRunning_ = false;
    }
    _createClass14(AdvancementConfig2, [{
      key: "addProgressListener",
      value: function addProgressListener(progressListener) {
        this.progressListeners_.push(progressListener);
      }
    }, {
      key: "addAdvanceListener",
      value: function addAdvanceListener(advanceListener) {
        this.advanceListeners_.push(advanceListener);
      }
    }, {
      key: "addPreviousListener",
      value: function addPreviousListener(previousListener) {
        this.previousListeners_.push(previousListener);
      }
    }, {
      key: "addOnTapNavigationListener",
      value: function addOnTapNavigationListener(onTapNavigationListener) {
        this.tapNavigationListeners_.push(onTapNavigationListener);
      }
    }, {
      key: "start",
      value: function start() {
        this.isRunning_ = true;
      }
    }, {
      key: "stop",
      value: function stop(unusedCanResume) {
        this.isRunning_ = false;
      }
    }, {
      key: "isAutoAdvance",
      value: function isAutoAdvance() {
        return false;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.isRunning_;
      }
    }, {
      key: "getProgress",
      value: function getProgress() {
        return 1;
      }
    }, {
      key: "onProgressUpdate",
      value: function onProgressUpdate() {
        var progress = this.getProgress();
        this.progressListeners_.forEach(function(progressListener) {
          progressListener(progress);
        });
      }
    }, {
      key: "onAdvance",
      value: function onAdvance() {
        this.advanceListeners_.forEach(function(advanceListener) {
          advanceListener();
        });
      }
    }, {
      key: "onPrevious",
      value: function onPrevious() {
        this.previousListeners_.forEach(function(previousListener) {
          previousListener();
        });
      }
    }, {
      key: "onTapNavigation",
      value: function onTapNavigation(navigationDirection) {
        this.tapNavigationListeners_.forEach(function(navigationListener) {
          navigationListener(navigationDirection);
        });
      }
    }], [{
      key: "forElement",
      value: function forElement(win, element) {
        var manualAdvancement = ManualAdvancement.fromElement(win, element);
        if (manualAdvancement) {
          return manualAdvancement;
        }
        var autoAdvanceStr = element.getAttribute("auto-advance-after");
        if (autoAdvanceStr) {
          var timeBasedAdvancement = TimeBasedAdvancement.fromAutoAdvanceString(autoAdvanceStr, win, element);
          if (timeBasedAdvancement) {
            return timeBasedAdvancement;
          }
          var mediaBasedAdvancement = MediaBasedAdvancement.fromAutoAdvanceString(autoAdvanceStr, win, element);
          if (mediaBasedAdvancement) {
            return mediaBasedAdvancement;
          }
        }
        return new AdvancementConfig2();
      }
    }]);
    return AdvancementConfig2;
  }();
  var ManualAdvancement = /* @__PURE__ */ function(_AdvancementConfig) {
    _inherits4(ManualAdvancement2, _AdvancementConfig);
    var _super = _createSuper4(ManualAdvancement2);
    function ManualAdvancement2(win, element) {
      var _this;
      _classCallCheck15(this, ManualAdvancement2);
      _this = _super.call(this);
      _this.element_ = element;
      _this.timeoutId_ = null;
      _this.timer_ = Services.timerFor(win);
      _this.touchstartTimestamp_ = null;
      _this.pausedState_ = false;
      _this.ampdoc_ = getAmpdoc(win.document);
      _this.startListening_();
      if (element.ownerDocument.defaultView) {
        _this.storeService_ = getStoreService(element.ownerDocument.defaultView);
      }
      var rtlState = _this.storeService_.get(StateProperty.RTL_STATE);
      _this.sections_ = {
        left: {
          widthRatio: rtlState ? NEXT_SCREEN_AREA_RATIO : PREVIOUS_SCREEN_AREA_RATIO,
          direction: rtlState ? TapNavigationDirection.NEXT : TapNavigationDirection.PREVIOUS
        },
        right: {
          widthRatio: rtlState ? PREVIOUS_SCREEN_AREA_RATIO : NEXT_SCREEN_AREA_RATIO,
          direction: rtlState ? TapNavigationDirection.PREVIOUS : TapNavigationDirection.NEXT
        }
      };
      return _this;
    }
    _createClass14(ManualAdvancement2, [{
      key: "getProgress",
      value: function getProgress() {
        return 1;
      }
    }, {
      key: "startListening_",
      value: function startListening_() {
        var _this2 = this;
        this.element_.addEventListener("touchstart", this.onTouchstart_.bind(this), true);
        this.element_.addEventListener("touchend", this.onTouchend_.bind(this), true);
        this.element_.addEventListener("click", this.maybePerformNavigation_.bind(this), true);
        this.ampdoc_.onVisibilityChanged(function() {
          _this2.ampdoc_.isVisible() ? _this2.processTouchend_() : null;
        });
      }
    }, {
      key: "isAutoAdvance",
      value: function isAutoAdvance() {
        return false;
      }
    }, {
      key: "onTouchstart_",
      value: function onTouchstart_(event) {
        var _this3 = this;
        if (this.touchstartTimestamp_ || !this.shouldHandleEvent_(event)) {
          return;
        }
        this.touchstartTimestamp_ = Date.now();
        this.pausedState_ = this.storeService_.get(StateProperty.PAUSED_STATE);
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
        this.timeoutId_ = this.timer_.delay(function() {
          _this3.storeService_.dispatch(Action.TOGGLE_SYSTEM_UI_IS_VISIBLE, false);
        }, HOLD_TOUCH_THRESHOLD_MS);
      }
    }, {
      key: "onTouchend_",
      value: function onTouchend_(event) {
        var touchesCount = (event.touches || []).length;
        if (!this.touchstartTimestamp_ || touchesCount > 0) {
          return;
        }
        if (Date.now() - this.touchstartTimestamp_ > HOLD_TOUCH_THRESHOLD_MS) {
          event.preventDefault();
        }
        this.processTouchend_();
      }
    }, {
      key: "processTouchend_",
      value: function processTouchend_() {
        if (!this.touchstartTimestamp_) {
          return;
        }
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, this.pausedState_);
        this.touchstartTimestamp_ = null;
        this.timer_.cancel(this.timeoutId_);
        this.timeoutId_ = null;
        if (!this.storeService_.get(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE) && this.storeService_.get(StateProperty.INTERACTIVE_COMPONENT_STATE).state !== EmbeddedComponentState.EXPANDED) {
          this.storeService_.dispatch(Action.TOGGLE_SYSTEM_UI_IS_VISIBLE, true);
        }
      }
    }, {
      key: "isNavigationalClick_",
      value: function isNavigationalClick_(event) {
        return !closest(dev().assertElement(event.target), function(el) {
          return hasTapAction(el);
        }, this.element_);
      }
    }, {
      key: "isProtectedTarget_",
      value: function isProtectedTarget_(event) {
        return !!closest(dev().assertElement(event.target), function(el) {
          var elementRole = el.getAttribute("role");
          if (elementRole) {
            return !!TAPPABLE_ARIA_ROLES[elementRole.toLowerCase()];
          }
          return false;
        }, this.element_);
      }
    }, {
      key: "shouldHandleEvent_",
      value: function shouldHandleEvent_(event) {
        var _this4 = this;
        var shouldHandleEvent = false;
        var tagName;
        closest(dev().assertElement(event.target), function(el) {
          tagName = el.tagName.toLowerCase();
          if (tagName === "amp-story-page-attachment" || tagName === "amp-story-page-outlink") {
            shouldHandleEvent = false;
            return true;
          }
          if (tagName.startsWith("amp-story-interactive-") && !_this4.isInStoryPageSideEdge_(event, _this4.getStoryPageRect_())) {
            shouldHandleEvent = false;
            return true;
          }
          if (tagName === "amp-story-page") {
            shouldHandleEvent = true;
            return true;
          }
          return false;
        }, this.element_);
        return shouldHandleEvent;
      }
    }, {
      key: "canShowTooltip_",
      value: function canShowTooltip_(event, pageRect) {
        var valid = true;
        var tagName;
        var target = dev().assertElement(event.target);
        if (this.isInStoryPageSideEdge_(event, pageRect) || this.isTooLargeOnPage_(event, pageRect)) {
          event.preventDefault();
          return false;
        }
        if (target.getAttribute("show-tooltip") === "auto" && this.isInScreenBottom_(target, pageRect)) {
          target.setAttribute("target", "_blank");
          target.setAttribute("role", "link");
          return false;
        }
        return !!closest(target, function(el) {
          tagName = el.tagName.toLowerCase();
          if (tagName === "amp-story-cta-layer" || tagName === "amp-story-page-attachment" || tagName === "amp-story-page-outlink") {
            valid = false;
            return false;
          }
          return tagName === "amp-story-page" && valid;
        }, this.element_);
      }
    }, {
      key: "isInScreenBottom_",
      value: function isInScreenBottom_(target, pageRect) {
        var targetRect = target.getBoundingClientRect();
        return targetRect.top - pageRect.top >= pageRect.height * TOP_REGION;
      }
    }, {
      key: "isInStoryPageSideEdge_",
      value: function isInStoryPageSideEdge_(event, pageRect) {
        if (event.clientX === 0 && event.clientY === 0) {
          return false;
        }
        var sideEdgeWidthFromPercent = pageRect.width * (PROTECTED_SCREEN_EDGE_PERCENT / 100);
        var sideEdgeLimit = Math.max(sideEdgeWidthFromPercent, MINIMUM_PROTECTED_SCREEN_EDGE_PX);
        return event.clientX <= pageRect.x + sideEdgeLimit || event.clientX >= pageRect.x + pageRect.width - sideEdgeLimit;
      }
    }, {
      key: "isTooLargeOnPage_",
      value: function isTooLargeOnPage_(event, pageRect) {
        if (event.clientX === 0 && event.clientY === 0) {
          return false;
        }
        var target = dev().assertElement(event.target);
        var targetRect = target.getBoundingClientRect();
        if (targetRect.height * targetRect.width / (pageRect.width * pageRect.height) >= MAX_LINK_SCREEN_PERCENT) {
          user().error("AMP-STORY-PAGE", "Link was too large; skipped for navigation. For more information, see https://github.com/ampproject/amphtml/issues/31108");
          return true;
        }
        return false;
      }
    }, {
      key: "isHandledByEmbeddedComponent_",
      value: function isHandledByEmbeddedComponent_(event, pageRect) {
        var target = dev().assertElement(event.target);
        var stored = this.storeService_.get(StateProperty.INTERACTIVE_COMPONENT_STATE);
        var inExpandedMode = stored.state === EmbeddedComponentState.EXPANDED;
        return inExpandedMode || matches(target, INTERACTIVE_EMBEDDED_COMPONENTS_SELECTORS) && this.canShowTooltip_(event, pageRect);
      }
    }, {
      key: "isHandledByAffiliateLink_",
      value: function isHandledByAffiliateLink_(target) {
        var clickedOnLink = matches(target, AFFILIATE_LINK_SELECTOR);
        if (clickedOnLink && target.hasAttribute("expanded")) {
          return false;
        }
        var expandedElement = this.storeService_.get(StateProperty.AFFILIATE_LINK_STATE);
        return expandedElement != null || clickedOnLink;
      }
    }, {
      key: "maybePerformNavigation_",
      value: function maybePerformNavigation_(event) {
        var target = dev().assertElement(event.target);
        var pageRect = this.getStoryPageRect_();
        if (this.isHandledByEmbeddedComponent_(event, pageRect)) {
          event.stopPropagation();
          event.preventDefault();
          var embedComponent = this.storeService_.get(StateProperty.INTERACTIVE_COMPONENT_STATE);
          this.storeService_.dispatch(Action.TOGGLE_INTERACTIVE_COMPONENT, {
            element: target,
            state: embedComponent.state || EmbeddedComponentState.FOCUSED,
            clientX: event.clientX,
            clientY: event.clientY
          });
          return;
        }
        if (this.isHandledByAffiliateLink_(target)) {
          event.preventDefault();
          event.stopPropagation();
          var clickedOnLink = matches(target, AFFILIATE_LINK_SELECTOR);
          if (clickedOnLink) {
            this.storeService_.dispatch(Action.TOGGLE_AFFILIATE_LINK, target);
          } else {
            this.storeService_.dispatch(Action.TOGGLE_AFFILIATE_LINK, null);
          }
          return;
        }
        if (!this.isRunning() || !this.isNavigationalClick_(event) || this.isProtectedTarget_(event) || !this.shouldHandleEvent_(event)) {
          return;
        }
        event.stopPropagation();
        this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
        var offsetLeft = "x" in pageRect ? pageRect.x : pageRect.left;
        var page = {
          offset: offsetLeft,
          width: pageRect.width,
          clickEventX: event.pageX
        };
        this.onTapNavigation(this.getTapDirection_(page));
      }
    }, {
      key: "getStoryPageRect_",
      value: function getStoryPageRect_() {
        if (this.storeService_.get(StateProperty.UI_STATE) !== UIType.DESKTOP_PANELS) {
          return this.element_.getLayoutBox();
        } else {
          return this.element_.querySelector("amp-story-page[active]").getBoundingClientRect();
        }
      }
    }, {
      key: "getTapDirection_",
      value: function getTapDirection_(page) {
        var _this$sections_ = this.sections_, left = _this$sections_.left, right = _this$sections_.right;
        if (page.clickEventX <= page.offset + left.widthRatio * page.width) {
          return left.direction;
        }
        return right.direction;
      }
    }], [{
      key: "fromElement",
      value: function fromElement(win, element) {
        if (element.tagName.toLowerCase() !== "amp-story") {
          return null;
        }
        return new ManualAdvancement2(win, element);
      }
    }]);
    return ManualAdvancement2;
  }(AdvancementConfig);
  var TimeBasedAdvancement = /* @__PURE__ */ function(_AdvancementConfig2) {
    _inherits4(TimeBasedAdvancement2, _AdvancementConfig2);
    var _super2 = _createSuper4(TimeBasedAdvancement2);
    function TimeBasedAdvancement2(win, delayMs, element) {
      var _this5;
      _classCallCheck15(this, TimeBasedAdvancement2);
      _this5 = _super2.call(this);
      _this5.timer_ = Services.timerFor(win);
      if (delayMs < MINIMUM_TIME_BASED_AUTO_ADVANCE_MS) {
        user().warn("AMP-STORY-PAGE", element.id + " has an auto advance duration that is too short. " + (MINIMUM_TIME_BASED_AUTO_ADVANCE_MS + "ms is used instead."));
        delayMs = MINIMUM_TIME_BASED_AUTO_ADVANCE_MS;
      }
      _this5.delayMs_ = delayMs;
      _this5.remainingDelayMs_ = null;
      _this5.startTimeMs_ = null;
      _this5.timeoutId_ = null;
      if (element.ownerDocument.defaultView) {
        _this5.storeService_ = getStoreService(element.ownerDocument.defaultView);
      }
      return _this5;
    }
    _createClass14(TimeBasedAdvancement2, [{
      key: "getCurrentTimestampMs_",
      value: function getCurrentTimestampMs_() {
        return Date.now();
      }
    }, {
      key: "start",
      value: function start() {
        var _this6 = this;
        _get3(_getPrototypeOf4(TimeBasedAdvancement2.prototype), "start", this).call(this);
        if (this.remainingDelayMs_) {
          this.startTimeMs_ = this.getCurrentTimestampMs_() - (this.delayMs_ - this.remainingDelayMs_);
        } else {
          this.startTimeMs_ = this.getCurrentTimestampMs_();
        }
        this.timeoutId_ = this.timer_.delay(function() {
          return _this6.onAdvance();
        }, this.remainingDelayMs_ || this.delayMs_);
        this.onProgressUpdate();
        this.timer_.poll(POLL_INTERVAL_MS, function() {
          _this6.onProgressUpdate();
          return !_this6.isRunning();
        });
      }
    }, {
      key: "stop",
      value: function stop(canResume) {
        if (canResume === void 0) {
          canResume = false;
        }
        _get3(_getPrototypeOf4(TimeBasedAdvancement2.prototype), "stop", this).call(this);
        if (this.timeoutId_ !== null) {
          this.timer_.cancel(this.timeoutId_);
        }
        this.remainingDelayMs_ = canResume ? this.startTimeMs_ + this.delayMs_ - this.getCurrentTimestampMs_() : null;
      }
    }, {
      key: "isAutoAdvance",
      value: function isAutoAdvance() {
        return true;
      }
    }, {
      key: "getProgress",
      value: function getProgress() {
        if (this.startTimeMs_ === null) {
          return 0;
        }
        var progress = (this.getCurrentTimestampMs_() - this.startTimeMs_) / this.delayMs_;
        return Math.min(Math.max(progress, 0), 1);
      }
    }, {
      key: "onAdvance",
      value: function onAdvance() {
        this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.AUTO_ADVANCE_TIME);
        _get3(_getPrototypeOf4(TimeBasedAdvancement2.prototype), "onAdvance", this).call(this);
      }
    }, {
      key: "updateTimeDelay",
      value: function updateTimeDelay(autoAdvanceStr) {
        var newDelayMs = timeStrToMillis(autoAdvanceStr);
        if (newDelayMs === void 0 || isNaN(newDelayMs)) {
          return;
        }
        if (this.remainingDelayMs_) {
          this.remainingDelayMs_ += newDelayMs - this.delayMs_;
        }
        this.delayMs_ = newDelayMs;
      }
    }], [{
      key: "fromAutoAdvanceString",
      value: function fromAutoAdvanceString(autoAdvanceStr, win, element) {
        if (!autoAdvanceStr) {
          return null;
        }
        var delayMs = timeStrToMillis(autoAdvanceStr);
        if (delayMs === void 0 || isNaN(delayMs)) {
          return null;
        }
        return new TimeBasedAdvancement2(win, Number(delayMs), element);
      }
    }]);
    return TimeBasedAdvancement2;
  }(AdvancementConfig);
  var MediaBasedAdvancement = /* @__PURE__ */ function(_AdvancementConfig3) {
    _inherits4(MediaBasedAdvancement2, _AdvancementConfig3);
    var _super3 = _createSuper4(MediaBasedAdvancement2);
    function MediaBasedAdvancement2(win, element) {
      var _this7;
      _classCallCheck15(this, MediaBasedAdvancement2);
      _this7 = _super3.call(this);
      _this7.timer_ = Services.timerFor(win);
      _this7.element_ = element;
      _this7.mediaElement_ = null;
      _this7.unlistenFns_ = [];
      _this7.unlistenEndedFn_ = null;
      _this7.unlistenTimeupdateFn_ = null;
      _this7.video_ = null;
      _this7.storeService_ = getStoreService(win);
      return _this7;
    }
    _createClass14(MediaBasedAdvancement2, [{
      key: "isVideoInterfaceVideo_",
      value: function isVideoInterfaceVideo_() {
        return this.element_.classList.contains("i-amphtml-video-interface");
      }
    }, {
      key: "getMediaElement_",
      value: function getMediaElement_() {
        var tagName = this.element_.tagName.toLowerCase();
        if (this.element_ instanceof HTMLMediaElement) {
          return this.element_;
        } else if (this.element_.hasAttribute("background-audio") && tagName === "amp-story-page") {
          return this.element_.querySelector(".i-amphtml-story-background-audio");
        } else if (tagName === "amp-audio") {
          return this.element_.querySelector("audio");
        }
        return null;
      }
    }, {
      key: "start",
      value: function start() {
        var _this8 = this;
        _get3(_getPrototypeOf4(MediaBasedAdvancement2.prototype), "start", this).call(this);
        (this.element_.build ? this.element_.build() : resolvedPromise()).then(function() {
          return _this8.startWhenBuilt_();
        });
      }
    }, {
      key: "startWhenBuilt_",
      value: function startWhenBuilt_() {
        if (this.isVideoInterfaceVideo_()) {
          this.startVideoInterfaceElement_();
          return;
        }
        if (!this.mediaElement_) {
          this.mediaElement_ = this.getMediaElement_();
        }
        if (this.mediaElement_) {
          this.startHtmlMediaElement_();
          return;
        }
        user().error("AMP-STORY-PAGE", "Element with ID " + this.element_.id + " is not a media element supported for automatic advancement.");
      }
    }, {
      key: "startHtmlMediaElement_",
      value: function startHtmlMediaElement_() {
        var _this9 = this;
        var mediaElement = dev().assertElement(this.mediaElement_, "Media element was unspecified.");
        this.mediaElement_.removeAttribute("loop");
        this.unlistenFns_.push(listenOnce(mediaElement, "ended", function() {
          return _this9.onAdvance();
        }));
        this.onProgressUpdate();
        this.timer_.poll(POLL_INTERVAL_MS, function() {
          _this9.onProgressUpdate();
          return !_this9.isRunning();
        });
      }
    }, {
      key: "startVideoInterfaceElement_",
      value: function startVideoInterfaceElement_() {
        var _this10 = this;
        this.element_.getImpl().then(function(video) {
          _this10.video_ = video;
        });
        this.element_.querySelector("video").removeAttribute("loop");
        this.unlistenFns_.push(listenOnce(this.element_, VideoEvents.ENDED, function() {
          return _this10.onAdvance();
        }, {
          capture: true
        }));
        this.onProgressUpdate();
        this.timer_.poll(POLL_INTERVAL_MS, function() {
          _this10.onProgressUpdate();
          return !_this10.isRunning();
        });
      }
    }, {
      key: "stop",
      value: function stop() {
        _get3(_getPrototypeOf4(MediaBasedAdvancement2.prototype), "stop", this).call(this);
        this.unlistenFns_.forEach(function(fn) {
          return fn();
        });
      }
    }, {
      key: "isAutoAdvance",
      value: function isAutoAdvance() {
        return true;
      }
    }, {
      key: "getProgress",
      value: function getProgress() {
        if (this.isVideoInterfaceVideo_()) {
          if (this.video_ && this.video_.getDuration()) {
            return this.video_.getCurrentTime() / this.video_.getDuration();
          }
          return 0;
        }
        if (this.mediaElement_ && this.mediaElement_.duration) {
          return this.mediaElement_.currentTime / this.mediaElement_.duration;
        }
        return _get3(_getPrototypeOf4(MediaBasedAdvancement2.prototype), "getProgress", this).call(this);
      }
    }, {
      key: "onAdvance",
      value: function onAdvance() {
        this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.AUTO_ADVANCE_MEDIA);
        _get3(_getPrototypeOf4(MediaBasedAdvancement2.prototype), "onAdvance", this).call(this);
      }
    }], [{
      key: "fromAutoAdvanceString",
      value: function fromAutoAdvanceString(autoAdvanceStr, win, pageEl) {
        try {
          var element = pageEl.querySelector("amp-video[data-id=" + escapeCssSelectorIdent(autoAdvanceStr) + "],\n          amp-video#" + escapeCssSelectorIdent(autoAdvanceStr) + ",\n          amp-audio[data-id=" + escapeCssSelectorIdent(autoAdvanceStr) + "],\n          amp-audio#" + escapeCssSelectorIdent(autoAdvanceStr));
          if (matches(pageEl, "amp-story-page[background-audio]#" + escapeCssSelectorIdent(autoAdvanceStr))) {
            element = pageEl;
          }
          if (!element) {
            if (autoAdvanceStr) {
              user().warn("AMP-STORY-PAGE", "Element with ID " + pageEl.id + " has no media element supported for automatic advancement.");
            }
            return null;
          }
          return new MediaBasedAdvancement2(win, element);
        } catch (e) {
          return null;
        }
      }
    }]);
    return MediaBasedAdvancement2;
  }(AdvancementConfig);

  // extensions/amp-animation/0.1/web-animation-types.js
  var WebAnimationPlayState = {
    IDLE: "idle",
    PENDING: "pending",
    RUNNING: "running",
    PAUSED: "paused",
    FINISHED: "finished"
  };

  // extensions/amp-story/1.0/animation-presets-utils.js
  function translate2d(startX, startY, endX, endY) {
    return [{
      transform: translate(startX, startY)
    }, {
      transform: translate(endX, endY)
    }];
  }
  function rotateAndTranslate(startX, startY, endX, endY, direction) {
    return [{
      transform: translate(startX, startY) + " " + rotate(direction * 120)
    }, {
      transform: translate(endX, endY) + " " + rotate(0)
    }];
  }
  function whooshIn(startX, startY, endX, endY) {
    return [{
      opacity: 0,
      transform: translate(startX, startY) + " " + scale(0.15)
    }, {
      opacity: 1,
      transform: translate(endX, endY) + " " + scale(1)
    }];
  }
  function targetFitsWithinPage(dimensions) {
    return dimensions.targetWidth <= dimensions.pageWidth || dimensions.targetHeight <= dimensions.pageHeight;
  }
  function calculateTargetScalingFactor(dimensions) {
    if (targetFitsWithinPage(dimensions)) {
      var scalingFactor = 1.25;
      var widthFactor = dimensions.pageWidth > dimensions.targetWidth ? dimensions.pageWidth / dimensions.targetWidth : 1;
      var heightFactor = dimensions.pageHeight > dimensions.targetHeight ? dimensions.pageHeight / dimensions.targetHeight : 1;
      return Math.max(widthFactor, heightFactor) * scalingFactor;
    }
    return 1;
  }
  function enlargeKeyFrames(keyframes16, scalingFactor) {
    keyframes16.forEach(function(frame) {
      frame["transform"] += " " + scale(scalingFactor);
      frame["transform-origin"] = "left top";
    });
    return keyframes16;
  }
  function scaleAndTranslate(startX, startY, endX, endY, scalingFactor) {
    if (scalingFactor === 1) {
      return translate2d(startX, startY, endX, endY);
    }
    return enlargeKeyFrames(translate2d(startX, startY, endX, endY), scalingFactor);
  }

  // extensions/amp-story/1.0/animation-presets.js
  var _ANIMATION_CSS_CLASS_;
  var FULL_BLEED_CATEGORY = "full-bleed";
  var FILL_TEMPLATE_LAYOUT = "fill";
  var SCALE_HIGH_DEFAULT = 3;
  var SCALE_LOW_DEFAULT = 1;
  var SCALE_START_ATTRIBUTE_NAME = "scale-start";
  var SCALE_END_ATTRIBUTE_NAME = "scale-end";
  var TRANSLATE_X_ATTRIBUTE_NAME = "translate-x";
  var TRANSLATE_Y_ATTRIBUTE_NAME = "translate-y";
  var DEFAULT_CURVE = "0.4, 0.4, 0.0, 1";
  var PRESET_OPTION_ATTRIBUTES = [SCALE_START_ATTRIBUTE_NAME, SCALE_END_ATTRIBUTE_NAME, TRANSLATE_X_ATTRIBUTE_NAME, TRANSLATE_Y_ATTRIBUTE_NAME];
  var FULL_BLEED_ANIMATION_NAMES = ["pan-up", "pan-down", "pan-right", "pan-left", "zoom-in", "zoom-out"];
  var ANIMATION_CSS_CLASS_NAMES = (_ANIMATION_CSS_CLASS_ = {}, _ANIMATION_CSS_CLASS_[FULL_BLEED_CATEGORY] = "i-amphtml-story-grid-template-with-full-bleed-animation", _ANIMATION_CSS_CLASS_);
  function setStyleForPreset(el, presetName) {
    if (FULL_BLEED_ANIMATION_NAMES.indexOf(presetName) >= 0) {
      var parent = el.parentElement;
      if (parent.classList.contains(GRID_LAYER_TEMPLATE_CLASS_NAMES[FILL_TEMPLATE_LAYOUT])) {
        parent.classList.remove(GRID_LAYER_TEMPLATE_CLASS_NAMES[FILL_TEMPLATE_LAYOUT]);
      }
      parent.classList.add(ANIMATION_CSS_CLASS_NAMES[FULL_BLEED_CATEGORY]);
    }
  }
  var presets = {
    "pulse": {
      duration: 600,
      easing: "cubic-bezier(0.3, 0.0, 0.0, 1)",
      keyframes: [{
        offset: 0,
        transform: "scale(1)"
      }, {
        offset: 0.25,
        transform: "scale(0.95)"
      }, {
        offset: 0.75,
        transform: "scale(1.05)"
      }, {
        offset: 1,
        transform: "scale(1)"
      }]
    },
    "fly-in-left": {
      duration: 600,
      easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
      keyframes: function keyframes(dimensions) {
        var offsetX = -(dimensions.targetX + dimensions.targetWidth);
        return translate2d(offsetX, 0, 0, 0);
      }
    },
    "fly-in-right": {
      duration: 600,
      easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
      keyframes: function keyframes2(dimensions) {
        var offsetX = dimensions.pageWidth - dimensions.targetX;
        return translate2d(offsetX, 0, 0, 0);
      }
    },
    "fly-in-top": {
      duration: 600,
      easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
      keyframes: function keyframes3(dimensions) {
        var offsetY = -(dimensions.targetY + dimensions.targetHeight);
        return translate2d(0, offsetY, 0, 0);
      }
    },
    "fly-in-bottom": {
      duration: 600,
      easing: "cubic-bezier(0.2, 0.6, 0.0, 1)",
      keyframes: function keyframes4(dimensions) {
        var offsetY = dimensions.pageHeight - dimensions.targetY;
        return translate2d(0, offsetY, 0, 0);
      }
    },
    "rotate-in-left": {
      duration: 1e3,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: function keyframes5(dimensions) {
        var offsetX = -(dimensions.targetX + dimensions.targetWidth);
        return rotateAndTranslate(offsetX, 0, 0, 0, -1);
      }
    },
    "rotate-in-right": {
      duration: 1e3,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: function keyframes6(dimensions) {
        var offsetX = dimensions.pageWidth - dimensions.targetX;
        return rotateAndTranslate(offsetX, 0, 0, 0, 1);
      }
    },
    "fade-in": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: [{
        opacity: 0
      }, {
        opacity: 1
      }]
    },
    "scale-fade-up": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: [{
        opacity: 0,
        transform: "scale(0.8)"
      }, {
        opacity: 1,
        transform: "scale(1)"
      }]
    },
    "scale-fade-down": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: [{
        opacity: 0,
        transform: "scale(1.4)"
      }, {
        opacity: 1,
        transform: "scale(1)"
      }]
    },
    "drop": {
      duration: 1600,
      easing: "linear",
      keyframes: function keyframes7(dimensions) {
        var maxBounceHeight = Math.max(160, dimensions.targetY + dimensions.targetHeight);
        return [{
          offset: 0,
          transform: "translateY(" + px(Number(-maxBounceHeight)) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 0.29,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }, {
          offset: 0.45,
          transform: "translateY(" + px(-maxBounceHeight * 0.2812) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 0.61,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }, {
          offset: 0.71,
          transform: "translateY(" + px(-maxBounceHeight * 0.0956) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 0.8,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }, {
          offset: 0.85,
          transform: "translateY(" + px(-maxBounceHeight * 0.0359) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 0.92,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }, {
          offset: 0.96,
          transform: "translateY(" + px(-maxBounceHeight * 0.0156) + ")",
          easing: "cubic-bezier(.5, 0, 1, 1)"
        }, {
          offset: 1,
          transform: "translateY(0)",
          easing: "cubic-bezier(0, 0, .5, 1)"
        }];
      }
    },
    "twirl-in": {
      duration: 1e3,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: [{
        transform: "rotate(-540deg) scale(0.1)",
        opacity: 0
      }, {
        transform: "none",
        opacity: 1
      }]
    },
    "whoosh-in-left": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: function keyframes8(dimensions) {
        var offsetX = -(dimensions.targetX + dimensions.targetWidth);
        return whooshIn(offsetX, 0, 0, 0);
      }
    },
    "whoosh-in-right": {
      duration: 600,
      easing: "cubic-bezier(" + DEFAULT_CURVE + ")",
      keyframes: function keyframes9(dimensions) {
        var offsetX = dimensions.pageWidth - dimensions.targetX;
        return whooshIn(offsetX, 0, 0, 0);
      }
    },
    "pan-left": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes10(dimensions, options) {
        var translateX = options[TRANSLATE_X_ATTRIBUTE_NAME];
        var scalingFactor = calculateTargetScalingFactor(dimensions);
        dimensions.targetWidth *= scalingFactor;
        dimensions.targetHeight *= scalingFactor;
        var offsetX = dimensions.pageWidth - dimensions.targetWidth;
        var offsetY = (dimensions.pageHeight - dimensions.targetHeight) / 2;
        return scaleAndTranslate(offsetX, offsetY, translateX ? offsetX + translateX : 0, offsetY, scalingFactor);
      }
    },
    "pan-right": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes11(dimensions, options) {
        var translateX = options[TRANSLATE_X_ATTRIBUTE_NAME];
        var scalingFactor = calculateTargetScalingFactor(dimensions);
        dimensions.targetWidth *= scalingFactor;
        dimensions.targetHeight *= scalingFactor;
        var offsetX = dimensions.pageWidth - dimensions.targetWidth;
        var offsetY = (dimensions.pageHeight - dimensions.targetHeight) / 2;
        return scaleAndTranslate(0, offsetY, -translateX || offsetX, offsetY, scalingFactor);
      }
    },
    "pan-down": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes12(dimensions, options) {
        var translateY = options[TRANSLATE_Y_ATTRIBUTE_NAME];
        var scalingFactor = calculateTargetScalingFactor(dimensions);
        dimensions.targetWidth *= scalingFactor;
        dimensions.targetHeight *= scalingFactor;
        var offsetX = -dimensions.targetWidth / 2;
        var offsetY = dimensions.pageHeight - dimensions.targetHeight;
        return scaleAndTranslate(offsetX, 0, offsetX, -translateY || offsetY, scalingFactor);
      }
    },
    "pan-up": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes13(dimensions, options) {
        var translateY = options[TRANSLATE_Y_ATTRIBUTE_NAME];
        var scalingFactor = calculateTargetScalingFactor(dimensions);
        dimensions.targetWidth *= scalingFactor;
        dimensions.targetHeight *= scalingFactor;
        var offsetX = -dimensions.targetWidth / 2;
        var offsetY = dimensions.pageHeight - dimensions.targetHeight;
        return scaleAndTranslate(offsetX, offsetY, offsetX, translateY ? offsetY + translateY : 0, scalingFactor);
      }
    },
    "zoom-in": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes14(unusedDimensions, options) {
        var scaleStart = options[SCALE_START_ATTRIBUTE_NAME];
        var scaleEnd = options[SCALE_END_ATTRIBUTE_NAME];
        if (scaleStart) {
          userAssert(scaleEnd > scaleStart, '"scale-end" value must be greater than "scale-start" value when using "zoom-in" animation.');
        }
        return [{
          transform: "scale(" + (scaleStart || SCALE_LOW_DEFAULT) + ")"
        }, {
          transform: "scale(" + (scaleEnd || SCALE_HIGH_DEFAULT) + ")"
        }];
      }
    },
    "zoom-out": {
      duration: 1e3,
      easing: "linear",
      keyframes: function keyframes15(unusedDimensions, options) {
        var scaleStart = options[SCALE_START_ATTRIBUTE_NAME];
        var scaleEnd = options[SCALE_END_ATTRIBUTE_NAME];
        if (scaleStart) {
          userAssert(scaleStart > scaleEnd, '"scale-start" value must be higher than "scale-end" value when using "zoom-out" animation.');
        }
        return [{
          transform: "scale(" + (scaleStart || SCALE_HIGH_DEFAULT) + ")"
        }, {
          transform: "scale(" + (scaleEnd || SCALE_LOW_DEFAULT) + ")"
        }];
      }
    }
  };

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

  // extensions/amp-story/1.0/animation.js
  function _classCallCheck16(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties15(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass15(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties15(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties15(Constructor, staticProps);
    return Constructor;
  }
  var TAG5 = "AMP-STORY";
  var ANIMATE_IN_ATTRIBUTE_NAME = "animate-in";
  var ANIMATE_IN_DURATION_ATTRIBUTE_NAME = "animate-in-duration";
  var ANIMATE_IN_DELAY_ATTRIBUTE_NAME = "animate-in-delay";
  var ANIMATE_IN_AFTER_ATTRIBUTE_NAME = "animate-in-after";
  var ANIMATE_IN_TIMING_FUNCTION_ATTRIBUTE_NAME = "animate-in-timing-function";
  var ANIMATABLE_ELEMENTS_SELECTOR = "[" + ANIMATE_IN_ATTRIBUTE_NAME + "]";
  var DEFAULT_EASING = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  function hasAnimations(element) {
    var selector = ANIMATABLE_ELEMENTS_SELECTOR + ",>amp-story-animation";
    return !!scopedQuerySelector(element, selector);
  }
  var PlaybackActivity = {
    START: 0,
    FINISH: 1
  };
  function getSequencingStartAfterId(root, element) {
    if (!element.hasAttribute(ANIMATE_IN_AFTER_ATTRIBUTE_NAME)) {
      return null;
    }
    var dependencyId = element.getAttribute(ANIMATE_IN_AFTER_ATTRIBUTE_NAME);
    if (!root.querySelector("#" + escapeCssSelectorIdent(dependencyId))) {
      user().warn(TAG5, "The attribute '" + ANIMATE_IN_AFTER_ATTRIBUTE_NAME + "' in tag " + ("'" + element.tagName + "' is set to the invalid value ") + ("'" + dependencyId + "'. No children of parenting 'amp-story-page' ") + ("exist with id " + dependencyId + "."));
      return null;
    }
    return dependencyId;
  }
  var AnimationRunner = /* @__PURE__ */ function() {
    function AnimationRunner2(page, config, webAnimationBuilderPromise, vsync, sequence) {
      var _this = this;
      _classCallCheck16(this, AnimationRunner2);
      var preset = config.preset, source = config.source, spec = config.spec, startAfterId = config.startAfterId;
      this.page_ = page;
      this.source_ = source;
      this.vsync_ = vsync;
      this.presetTarget_ = !!preset ? dev().assertElement(spec.target) : null;
      this.sequence_ = sequence;
      this.startAfterId_ = startAfterId;
      this.resolvedSpecPromise_ = this.resolveSpec_(config);
      this.runnerPromise_ = this.resolvedSpecPromise_.then(function(webAnimDef) {
        return webAnimationBuilderPromise.then(function(builder) {
          return builder.createRunner(webAnimDef);
        });
      });
      this.firstFrameProps_ = this.resolvedSpecPromise_.then(function(spec2) {
        var keyframes16 = spec2.keyframes;
        if (!_this.presetTarget_) {
          return null;
        }
        devAssert(!keyframes16[0].offset, "First keyframe offset for animation preset should be 0 or undefined");
        return omit(keyframes16[0], ["offset"]);
      });
      this.runner_ = null;
      this.scheduledActivity_ = null;
      this.scheduledWait_ = null;
      if (this.presetTarget_) {
        var delay = spec.delay;
        userAssert(dev().assertNumber(delay) >= 0, 'Negative delays are not allowed in amp-story "animate-in" animations.');
      }
      this.runnerPromise_.then(function(runner) {
        return _this.onRunnerReady_(runner);
      });
    }
    _createClass15(AnimationRunner2, [{
      key: "getDims",
      value: function getDims() {
        var _this2 = this;
        return this.vsync_.measurePromise(function() {
          var target = dev().assertElement(_this2.presetTarget_);
          var targetRect = unscaledClientRect(target);
          var pageRect = unscaledClientRect(_this2.page_);
          return {
            pageWidth: pageRect.width,
            pageHeight: pageRect.height,
            targetWidth: targetRect.width,
            targetHeight: targetRect.height,
            targetX: targetRect.left - pageRect.left,
            targetY: targetRect.top - pageRect.top
          };
        });
      }
    }, {
      key: "resolvePresetKeyframes_",
      value: function resolvePresetKeyframes_(keyframesOrCreateFn, keyframeOptions) {
        if (typeof keyframesOrCreateFn === "function") {
          return this.getDims().then(function(dimensions) {
            var fn = keyframesOrCreateFn;
            return fn(dimensions, keyframeOptions || {});
          });
        }
        return Promise.resolve(keyframesOrCreateFn);
      }
    }, {
      key: "resolveSpec_",
      value: function resolveSpec_(config) {
        var keyframeOptions = config.keyframeOptions, preset = config.preset, spec = config.spec;
        if (!preset) {
          return Promise.resolve(spec);
        }
        var delay = spec.delay, duration = spec.duration, easing = spec.easing;
        var target = spec.target;
        return this.resolvePresetKeyframes_(preset.keyframes, keyframeOptions).then(function(keyframes16) {
          return {
            keyframes: keyframes16,
            target,
            delay,
            duration,
            easing,
            fill: "forwards"
          };
        });
      }
    }, {
      key: "applyFirstFrame",
      value: function applyFirstFrame() {
        var _this3 = this;
        if (this.hasStarted()) {
          return resolvedPromise();
        }
        if (this.runner_) {
          this.runner_.cancel();
        }
        return this.firstFrameProps_.then(function(firstFrameProps) {
          if (!firstFrameProps) {
            return;
          }
          return _this3.vsync_.mutatePromise(function() {
            setStyles(dev().assertElement(_this3.presetTarget_), assertDoesNotContainDisplay(devAssert(firstFrameProps)));
          });
        });
      }
    }, {
      key: "start",
      value: function start() {
        if (this.hasStarted()) {
          return;
        }
        this.playback_(PlaybackActivity.START, this.getStartWaitPromise_());
      }
    }, {
      key: "getStartWaitPromise_",
      value: function getStartWaitPromise_() {
        if (this.startAfterId_) {
          return this.sequence_.waitFor(this.startAfterId_);
        }
        return resolvedPromise();
      }
    }, {
      key: "startWhenReady_",
      value: function startWhenReady_(runner) {
        runner.start();
      }
    }, {
      key: "hasStarted",
      value: function hasStarted() {
        return this.isActivityScheduled_(PlaybackActivity.START) || !!this.runner_ && devAssert(this.runner_).getPlayState() == WebAnimationPlayState.RUNNING;
      }
    }, {
      key: "finish",
      value: function finish() {
        if (!this.runner_) {
          this.notifyFinish_();
        }
        this.playback_(PlaybackActivity.FINISH);
      }
    }, {
      key: "pause",
      value: function pause() {
        if (this.scheduledWait_ !== null) {
          return;
        }
        if (this.runner_) {
          try {
            this.runner_.pause();
          } catch (e) {
          }
        }
      }
    }, {
      key: "resume",
      value: function resume() {
        if (this.scheduledWait_ !== null) {
          return;
        }
        if (this.runner_) {
          devAssert(this.runner_).resume();
        }
      }
    }, {
      key: "finishWhenReady_",
      value: function finishWhenReady_(runner) {
        if (this.runner_) {
          runner.start();
          runner.finish();
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.scheduledActivity_ = null;
        this.scheduledWait_ = null;
        if (this.runner_) {
          devAssert(this.runner_).cancel();
        }
      }
    }, {
      key: "playback_",
      value: function playback_(activity, opt_wait) {
        var wait = opt_wait || null;
        this.scheduledActivity_ = activity;
        this.scheduledWait_ = wait;
        if (this.runner_) {
          this.playbackWhenReady_(activity, wait);
        }
      }
    }, {
      key: "playbackWhenReady_",
      value: function playbackWhenReady_(activity, wait) {
        var _this4 = this;
        var runner = devAssert(this.runner_, "Tried to execute playbackWhenReady_ before runner was resolved.");
        (wait || resolvedPromise()).then(function() {
          if (!_this4.isActivityScheduled_(activity)) {
            return;
          }
          _this4.scheduledActivity_ = null;
          _this4.scheduledWait_ = null;
          switch (activity) {
            case PlaybackActivity.START:
              return _this4.startWhenReady_(runner);
            case PlaybackActivity.FINISH:
              return _this4.finishWhenReady_(runner);
          }
        });
      }
    }, {
      key: "onRunnerReady_",
      value: function onRunnerReady_(runner) {
        var _this5 = this;
        this.runner_ = runner;
        runner.onPlayStateChanged(function(state) {
          if (state == WebAnimationPlayState.FINISHED) {
            _this5.notifyFinish_();
          }
        });
        if (!this.isActivityScheduled_()) {
          return;
        }
        this.playbackWhenReady_(this.scheduledActivity_, this.scheduledWait_);
      }
    }, {
      key: "isActivityScheduled_",
      value: function isActivityScheduled_(opt_activity) {
        if (!opt_activity) {
          return this.scheduledActivity_ !== null;
        }
        return this.scheduledActivity_ === opt_activity;
      }
    }, {
      key: "notifyFinish_",
      value: function notifyFinish_() {
        if (this.source_.id) {
          this.sequence_.notifyFinish(this.source_.id);
        }
      }
    }], [{
      key: "create",
      value: function create(page, config, webAnimationBuilderPromise, vsync, sequence) {
        return new AnimationRunner2(page, config, webAnimationBuilderPromise, vsync, sequence);
      }
    }]);
    return AnimationRunner2;
  }();
  var AnimationManager = /* @__PURE__ */ function() {
    function AnimationManager2(page, ampdoc) {
      _classCallCheck16(this, AnimationManager2);
      this.page_ = page;
      this.ampdoc_ = ampdoc;
      this.vsync_ = Services.vsyncFor(this.ampdoc_.win);
      this.builderPromise_ = this.createAnimationBuilderPromise_();
      this.runners_ = null;
      this.sequence_ = AnimationSequence.create();
    }
    _createClass15(AnimationManager2, [{
      key: "applyFirstFrame",
      value: function applyFirstFrame() {
        return Promise.all(this.getOrCreateRunners_().map(function(runner) {
          return runner.applyFirstFrame();
        }));
      }
    }, {
      key: "animateIn",
      value: function animateIn() {
        this.getRunners_().forEach(function(runner) {
          return runner.start();
        });
      }
    }, {
      key: "finishAll",
      value: function finishAll() {
        this.getRunners_().forEach(function(runner) {
          return runner.finish();
        });
      }
    }, {
      key: "cancelAll",
      value: function cancelAll() {
        if (!this.runners_) {
          return;
        }
        this.getRunners_().forEach(function(runner) {
          return runner.cancel();
        });
      }
    }, {
      key: "pauseAll",
      value: function pauseAll() {
        if (!this.runners_) {
          return;
        }
        this.getRunners_().forEach(function(runner) {
          return runner.pause();
        });
      }
    }, {
      key: "resumeAll",
      value: function resumeAll() {
        if (!this.runners_) {
          return;
        }
        this.getRunners_().forEach(function(runner) {
          return runner.resume();
        });
      }
    }, {
      key: "hasAnimationStarted",
      value: function hasAnimationStarted() {
        return this.getRunners_().some(function(runner) {
          return runner.hasStarted();
        });
      }
    }, {
      key: "getRunners_",
      value: function getRunners_() {
        return devAssert(this.runners_, "Executed before applyFirstFrame");
      }
    }, {
      key: "getOrCreateRunners_",
      value: function getOrCreateRunners_() {
        var _this6 = this;
        if (!this.runners_) {
          this.runners_ = Array.prototype.map.call(scopedQuerySelectorAll(this.page_, ANIMATABLE_ELEMENTS_SELECTOR), function(el) {
            var preset = _this6.getPreset_(el);
            if (!preset) {
              return null;
            }
            return _this6.createRunner_({
              preset,
              source: el,
              startAfterId: getSequencingStartAfterId(_this6.page_, el),
              keyframeOptions: _this6.getKeyframeOptions_(el),
              spec: _this6.partialAnimationSpecFromPreset_(el, preset)
            });
          }).concat(Array.prototype.map.call(this.page_.querySelectorAll("amp-story-animation[trigger=visibility]"), function(el) {
            return _this6.createRunner_({
              source: el,
              startAfterId: getSequencingStartAfterId(_this6.page_, el),
              spec: getChildJsonConfig(el)
            });
          })).filter(Boolean);
        }
        return devAssert(this.runners_);
      }
    }, {
      key: "createRunner_",
      value: function createRunner_(config) {
        return AnimationRunner.create(this.page_, config, devAssert(this.builderPromise_), this.vsync_, this.sequence_);
      }
    }, {
      key: "partialAnimationSpecFromPreset_",
      value: function partialAnimationSpecFromPreset_(el, preset) {
        var animationDef = {
          target: el,
          delay: preset.delay || 0,
          duration: preset.duration || 0,
          easing: preset.easing || DEFAULT_EASING,
          keyframes: []
        };
        if (el.hasAttribute(ANIMATE_IN_DURATION_ATTRIBUTE_NAME)) {
          animationDef.duration = timeStrToMillis(el.getAttribute(ANIMATE_IN_DURATION_ATTRIBUTE_NAME), animationDef.duration);
        }
        if (el.hasAttribute(ANIMATE_IN_DELAY_ATTRIBUTE_NAME)) {
          animationDef.delay = timeStrToMillis(el.getAttribute(ANIMATE_IN_DELAY_ATTRIBUTE_NAME), animationDef.delay);
        }
        if (el.hasAttribute(ANIMATE_IN_TIMING_FUNCTION_ATTRIBUTE_NAME)) {
          animationDef.easing = el.getAttribute(ANIMATE_IN_TIMING_FUNCTION_ATTRIBUTE_NAME);
        }
        return animationDef;
      }
    }, {
      key: "createAnimationBuilderPromise_",
      value: function createAnimationBuilderPromise_() {
        var _this7 = this;
        return Services.extensionsFor(this.ampdoc_.win).installExtensionForDoc(this.ampdoc_, "amp-animation").then(function() {
          return Services.webAnimationServiceFor(_this7.page_);
        }).then(function(webAnimationService) {
          return webAnimationService.createBuilder({
            scope: _this7.page_,
            scaleByScope: true
          });
        });
      }
    }, {
      key: "getPreset_",
      value: function getPreset_(el) {
        var name = el.getAttribute(ANIMATE_IN_ATTRIBUTE_NAME);
        if (!presets[name]) {
          user().warn(TAG5, "Invalid", ANIMATE_IN_ATTRIBUTE_NAME, "preset", name, "for element", el);
          return null;
        }
        setStyleForPreset(el, name);
        return presets[name];
      }
    }, {
      key: "getKeyframeOptions_",
      value: function getKeyframeOptions_(el) {
        var options = {};
        PRESET_OPTION_ATTRIBUTES.forEach(function(name) {
          if (!el.hasAttribute(name)) {
            return;
          }
          var value = parseFloat(el.getAttribute(name));
          if (isNaN(value) || value <= 0) {
            user().warn(TAG5, name, "attribute must be a positive number. Found negative or zero in element", el);
            return;
          }
          options[name] = value;
        });
        return options;
      }
    }], [{
      key: "create",
      value: function create(page, ampdoc, unusedBaseUrl) {
        return new AnimationManager2(page, ampdoc);
      }
    }]);
    return AnimationManager2;
  }();
  var AnimationSequence = /* @__PURE__ */ function() {
    function AnimationSequence2() {
      _classCallCheck16(this, AnimationSequence2);
      this.subscriptionPromises_ = map();
      this.subscriptionResolvers_ = map();
    }
    _createClass15(AnimationSequence2, [{
      key: "notifyFinish",
      value: function notifyFinish(id) {
        if (id in this.subscriptionPromises_) {
          devAssert(this.subscriptionResolvers_[id])();
          delete this.subscriptionPromises_[id];
        }
      }
    }, {
      key: "waitFor",
      value: function waitFor(id) {
        if (!(id in this.subscriptionPromises_)) {
          var deferred = new Deferred();
          this.subscriptionPromises_[id] = deferred.promise;
          this.subscriptionResolvers_[id] = deferred.resolve;
        }
        return this.subscriptionPromises_[id];
      }
    }], [{
      key: "create",
      value: function create() {
        return new AnimationSequence2();
      }
    }]);
    return AnimationSequence2;
  }();

  // extensions/amp-story/1.0/simple-template.js
  function renderSimpleTemplate(doc, elementsDef) {
    if (isArray(elementsDef)) {
      return renderMulti(doc, elementsDef);
    }
    return renderSingle(doc, elementsDef);
  }
  function renderAsElement(doc, elementDef) {
    return renderSingle(doc, elementDef);
  }
  function renderMulti(doc, elementsDef) {
    var fragment = doc.createDocumentFragment();
    elementsDef.forEach(function(elementDef) {
      return fragment.appendChild(renderSingle(doc, elementDef));
    });
    return fragment;
  }
  function renderSingle(doc, elementDef) {
    var el = hasOwn(elementDef, "attrs") ? createElementWithAttributes(doc, elementDef.tag, elementDef.attrs) : doc.createElement(elementDef.tag);
    var hasLocalizedTextContent = hasOwn(elementDef, "localizedStringId");
    var hasLocalizedLabel = hasOwn(elementDef, "localizedLabelId");
    if (hasLocalizedTextContent || hasLocalizedLabel) {
      var localizationService = getLocalizationService(devAssert(doc.body));
      devAssert(localizationService, "Could not retrieve LocalizationService.");
      if (hasLocalizedTextContent) {
        el.textContent = localizationService.getLocalizedString(elementDef.localizedStringId);
      }
      if (hasLocalizedLabel) {
        var labelString = localizationService.getLocalizedString(elementDef.localizedLabelId);
        if (labelString) {
          el.setAttribute("aria-label", labelString);
        }
      }
    }
    if (hasOwn(elementDef, "unlocalizedString")) {
      el.textContent = elementDef.unlocalizedString;
    }
    if (hasOwn(elementDef, "children")) {
      el.appendChild(renderMulti(doc, elementDef.children));
    }
    return el;
  }

  // extensions/amp-story/1.0/loading-spinner.js
  function _classCallCheck17(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties16(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass16(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties16(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties16(Constructor, staticProps);
    return Constructor;
  }
  var SPINNER_ACTIVE_ATTRIBUTE = "active";
  var SPINNER = {
    tag: "div",
    attrs: dict({
      "class": "i-amphtml-story-spinner",
      "aria-hidden": "true",
      "aria-label": "Loading video"
    }),
    children: [{
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-story-spinner-container"
      }),
      children: [{
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-spinner-layer"
        }),
        children: [{
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-story-spinner-circle-clipper left"
          })
        }, {
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-story-spinner-circle-clipper right"
          })
        }]
      }]
    }]
  };
  var LoadingSpinner = /* @__PURE__ */ function() {
    function LoadingSpinner2(doc) {
      _classCallCheck17(this, LoadingSpinner2);
      this.doc_ = doc;
      this.root_ = null;
      this.isActive_ = false;
    }
    _createClass16(LoadingSpinner2, [{
      key: "build",
      value: function build() {
        if (this.root_) {
          return this.root_;
        }
        this.root_ = renderAsElement(this.doc_, SPINNER);
        return this.getRoot();
      }
    }, {
      key: "getRoot",
      value: function getRoot() {
        return dev().assertElement(this.root_);
      }
    }, {
      key: "toggle",
      value: function toggle2(isActive) {
        if (isActive === this.isActive_) {
          return;
        }
        if (isActive) {
          this.root_.setAttribute(SPINNER_ACTIVE_ATTRIBUTE, "");
          this.root_.setAttribute("aria-hidden", "false");
        } else {
          this.root_.removeAttribute(SPINNER_ACTIVE_ATTRIBUTE);
          this.root_.setAttribute("aria-hidden", "true");
        }
        this.isActive_ = isActive;
      }
    }]);
    return LoadingSpinner2;
  }();

  // extensions/amp-story/1.0/sources.js
  function _classCallCheck18(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties17(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass17(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties17(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties17(Constructor, staticProps);
    return Constructor;
  }
  var Sources = /* @__PURE__ */ function() {
    function Sources2(srcAttr, srcEls, trackEls) {
      if (srcAttr === void 0) {
        srcAttr = null;
      }
      if (srcEls === void 0) {
        srcEls = [];
      }
      if (trackEls === void 0) {
        trackEls = [];
      }
      _classCallCheck18(this, Sources2);
      this.srcAttr_ = srcAttr;
      this.srcEls_ = srcEls;
      this.trackEls_ = trackEls;
    }
    _createClass17(Sources2, [{
      key: "applyTracksToElement_",
      value: function applyTracksToElement_(element) {
        Array.prototype.forEach.call(this.trackEls_, function(trackEl) {
          var track = document.createElement("track");
          track.id = trackEl.id;
          track.kind = trackEl.kind;
          track.label = trackEl.label;
          track.srclang = trackEl.srclang;
          track.default = trackEl.default;
          track.src = trackEl.src;
          track.addEventListener("load", function() {
            track.mode = "showing";
            element.textTracks[0].mode = "showing";
          });
          element.appendChild(track);
        });
      }
    }, {
      key: "applyToElement",
      value: function applyToElement(win, element) {
        var _this = this;
        Sources2.removeFrom(win, element);
        if (!this.srcAttr_) {
          element.removeAttribute("src");
        } else {
          element.setAttribute("src", this.srcAttr_);
        }
        Array.prototype.forEach.call(this.srcEls_, function(srcEl) {
          return element.appendChild(srcEl);
        });
        if (element.changedSources) {
          element.changedSources();
        }
        if (this.trackEls_.length > 0) {
          if (element.readyState >= 1) {
            this.applyTracksToElement_(element);
          } else {
            var addTracksHandler = function addTracksHandler2() {
              element.removeEventListener("loadedmetadata", addTracksHandler2);
              _this.applyTracksToElement_(element);
            };
            element.addEventListener("loadedmetadata", addTracksHandler);
          }
        }
      }
    }], [{
      key: "removeFrom",
      value: function removeFrom(win, element) {
        var elementToUse = ampMediaElementFor(element) || element;
        var srcEl = null;
        if (elementToUse.hasAttribute("src")) {
          srcEl = Sources2.createSourceElement(win, elementToUse);
          elementToUse.removeAttribute("src");
        }
        var srcEls = toArray(elementToUse.querySelectorAll("source"));
        srcEls.forEach(function(srcEl2) {
          return removeElement(srcEl2);
        });
        var trackEls = toArray(elementToUse.querySelectorAll("track"));
        trackEls.forEach(function(trackEl) {
          return removeElement(trackEl);
        });
        var sourcesToUse = srcEl ? [srcEl] : srcEls;
        return new Sources2(null, sourcesToUse, trackEls);
      }
    }, {
      key: "createSourceElement",
      value: function createSourceElement(win, element) {
        var srcEl = win.document.createElement("source");
        var srcAttr = element.getAttribute("src");
        srcEl.setAttribute("src", srcAttr);
        var origSrcAttr = element.getAttribute("amp-orig-src");
        if (origSrcAttr) {
          srcEl.setAttribute("amp-orig-src", origSrcAttr);
        }
        var typeAttr = element.getAttribute("type");
        if (typeAttr) {
          srcEl.setAttribute("type", typeAttr);
        }
        return srcEl;
      }
    }]);
    return Sources2;
  }();

  // extensions/amp-story/1.0/media-tasks.js
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf5(subClass, superClass);
  }
  function _setPrototypeOf5(o, p) {
    _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
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
    _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf5(o);
  }
  function _classCallCheck19(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties18(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass18(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties18(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties18(Constructor, staticProps);
    return Constructor;
  }
  var ELEMENT_BLESSED_PROPERTY_NAME = "__AMP_MEDIA_IS_BLESSED__";
  var PROTECTED_CSS_CLASS_NAMES = ["i-amphtml-pool-media", "i-amphtml-pool-audio", "i-amphtml-pool-video"];
  var PROTECTED_ATTRIBUTES = ["id", "src", "class", "autoplay"];
  function isProtectedCssClassName(cssClassName) {
    return PROTECTED_CSS_CLASS_NAMES.indexOf(cssClassName) >= 0;
  }
  function isProtectedAttributeName(attributeName) {
    return PROTECTED_ATTRIBUTES.indexOf(attributeName) >= 0;
  }
  function copyCssClasses(fromEl, toEl) {
    for (var i = toEl.classList.length - 1; i >= 0; i--) {
      var cssClass = toEl.classList.item(i);
      if (!isProtectedCssClassName(cssClass)) {
        toEl.classList.remove(cssClass);
      }
    }
    for (var _i = 0; _i < fromEl.classList.length; _i++) {
      var _cssClass = fromEl.classList.item(_i);
      if (!isProtectedCssClassName(_cssClass)) {
        toEl.classList.add(_cssClass);
      }
    }
  }
  function copyAttributes(fromEl, toEl) {
    var fromAttributes = fromEl.attributes;
    var toAttributes = toEl.attributes;
    for (var i = toAttributes.length - 1; i >= 0; i--) {
      var attributeName = toAttributes[i].name;
      if (!isProtectedAttributeName(attributeName)) {
        toEl.removeAttribute(attributeName);
      }
    }
    for (var _i2 = 0; _i2 < fromAttributes.length; _i2++) {
      var _fromAttributes$_i = fromAttributes[_i2], _attributeName = _fromAttributes$_i.name, attributeValue = _fromAttributes$_i.value;
      if (!isProtectedAttributeName(_attributeName)) {
        toEl.setAttribute(_attributeName, attributeValue);
      }
    }
  }
  var MediaTask = /* @__PURE__ */ function() {
    function MediaTask2(name, options) {
      if (options === void 0) {
        options = {};
      }
      _classCallCheck19(this, MediaTask2);
      this.name_ = name;
      var deferred = new Deferred();
      this.completionPromise_ = deferred.promise;
      this.options = options;
      this.resolve_ = deferred.resolve;
      this.reject_ = deferred.reject;
    }
    _createClass18(MediaTask2, [{
      key: "getName",
      value: function getName() {
        return this.name_;
      }
    }, {
      key: "whenComplete",
      value: function whenComplete() {
        return this.completionPromise_;
      }
    }, {
      key: "execute",
      value: function execute(mediaEl) {
        return this.executeInternal(mediaEl).then(this.resolve_, this.reject_);
      }
    }, {
      key: "executeInternal",
      value: function executeInternal(unusedMediaEl) {
        return resolvedPromise();
      }
    }, {
      key: "requiresSynchronousExecution",
      value: function requiresSynchronousExecution() {
        return false;
      }
    }, {
      key: "failTask",
      value: function failTask(reason) {
        this.reject_(reason);
      }
    }]);
    return MediaTask2;
  }();
  var PlayTask = /* @__PURE__ */ function(_MediaTask) {
    _inherits5(PlayTask2, _MediaTask);
    var _super = _createSuper5(PlayTask2);
    function PlayTask2() {
      _classCallCheck19(this, PlayTask2);
      return _super.call(this, "play");
    }
    _createClass18(PlayTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        if (!mediaEl.paused) {
          return resolvedPromise();
        }
        return tryResolve(function() {
          return mediaEl.play();
        });
      }
    }]);
    return PlayTask2;
  }(MediaTask);
  var PauseTask = /* @__PURE__ */ function(_MediaTask2) {
    _inherits5(PauseTask2, _MediaTask2);
    var _super2 = _createSuper5(PauseTask2);
    function PauseTask2() {
      _classCallCheck19(this, PauseTask2);
      return _super2.call(this, "pause");
    }
    _createClass18(PauseTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        mediaEl.pause();
        return resolvedPromise();
      }
    }]);
    return PauseTask2;
  }(MediaTask);
  var UnmuteTask = /* @__PURE__ */ function(_MediaTask3) {
    _inherits5(UnmuteTask2, _MediaTask3);
    var _super3 = _createSuper5(UnmuteTask2);
    function UnmuteTask2() {
      _classCallCheck19(this, UnmuteTask2);
      return _super3.call(this, "unmute");
    }
    _createClass18(UnmuteTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        mediaEl.muted = false;
        mediaEl.removeAttribute("muted");
        return resolvedPromise();
      }
    }]);
    return UnmuteTask2;
  }(MediaTask);
  var MuteTask = /* @__PURE__ */ function(_MediaTask4) {
    _inherits5(MuteTask2, _MediaTask4);
    var _super4 = _createSuper5(MuteTask2);
    function MuteTask2() {
      _classCallCheck19(this, MuteTask2);
      return _super4.call(this, "mute");
    }
    _createClass18(MuteTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        mediaEl.muted = true;
        mediaEl.setAttribute("muted", "");
        return resolvedPromise();
      }
    }]);
    return MuteTask2;
  }(MediaTask);
  var SetCurrentTimeTask = /* @__PURE__ */ function(_MediaTask5) {
    _inherits5(SetCurrentTimeTask2, _MediaTask5);
    var _super5 = _createSuper5(SetCurrentTimeTask2);
    function SetCurrentTimeTask2(options) {
      if (options === void 0) {
        options = {
          currentTime: 0
        };
      }
      _classCallCheck19(this, SetCurrentTimeTask2);
      return _super5.call(this, "setCurrentTime", options);
    }
    _createClass18(SetCurrentTimeTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        mediaEl.currentTime = this.options.currentTime;
        return resolvedPromise();
      }
    }]);
    return SetCurrentTimeTask2;
  }(MediaTask);
  var LoadTask = /* @__PURE__ */ function(_MediaTask6) {
    _inherits5(LoadTask2, _MediaTask6);
    var _super6 = _createSuper5(LoadTask2);
    function LoadTask2() {
      _classCallCheck19(this, LoadTask2);
      return _super6.call(this, "load");
    }
    _createClass18(LoadTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        mediaEl.load();
        return resolvedPromise();
      }
    }, {
      key: "requiresSynchronousExecution",
      value: function requiresSynchronousExecution() {
        return true;
      }
    }]);
    return LoadTask2;
  }(MediaTask);
  var BlessTask = /* @__PURE__ */ function(_MediaTask7) {
    _inherits5(BlessTask2, _MediaTask7);
    var _super7 = _createSuper5(BlessTask2);
    function BlessTask2() {
      _classCallCheck19(this, BlessTask2);
      return _super7.call(this, "bless");
    }
    _createClass18(BlessTask2, [{
      key: "requiresSynchronousExecution",
      value: function requiresSynchronousExecution() {
        return true;
      }
    }, {
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        var isMuted = mediaEl.muted;
        mediaEl.muted = false;
        if (isMuted) {
          mediaEl.muted = true;
        }
        return resolvedPromise();
      }
    }]);
    return BlessTask2;
  }(MediaTask);
  var UpdateSourcesTask = /* @__PURE__ */ function(_MediaTask8) {
    _inherits5(UpdateSourcesTask2, _MediaTask8);
    var _super8 = _createSuper5(UpdateSourcesTask2);
    function UpdateSourcesTask2(win, newSources) {
      var _this;
      _classCallCheck19(this, UpdateSourcesTask2);
      _this = _super8.call(this, "update-src");
      _this.win_ = win;
      _this.newSources_ = newSources;
      return _this;
    }
    _createClass18(UpdateSourcesTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        Sources.removeFrom(this.win_, mediaEl);
        this.newSources_.applyToElement(this.win_, mediaEl);
        return resolvedPromise();
      }
    }, {
      key: "requiresSynchronousExecution",
      value: function requiresSynchronousExecution() {
        return true;
      }
    }]);
    return UpdateSourcesTask2;
  }(MediaTask);
  var SwapIntoDomTask = /* @__PURE__ */ function(_MediaTask9) {
    _inherits5(SwapIntoDomTask2, _MediaTask9);
    var _super9 = _createSuper5(SwapIntoDomTask2);
    function SwapIntoDomTask2(placeholderEl) {
      var _this2;
      _classCallCheck19(this, SwapIntoDomTask2);
      _this2 = _super9.call(this, "swap-into-dom");
      _this2.placeholderEl_ = placeholderEl;
      return _this2;
    }
    _createClass18(SwapIntoDomTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        if (!isConnectedNode(this.placeholderEl_)) {
          this.failTask("Cannot swap media for element that is not in DOM.");
          return resolvedPromise();
        }
        copyCssClasses(this.placeholderEl_, mediaEl);
        copyAttributes(this.placeholderEl_, mediaEl);
        this.placeholderEl_.parentElement.replaceChild(mediaEl, this.placeholderEl_);
        return resolvedPromise();
      }
    }, {
      key: "requiresSynchronousExecution",
      value: function requiresSynchronousExecution() {
        return true;
      }
    }]);
    return SwapIntoDomTask2;
  }(MediaTask);
  var SwapOutOfDomTask = /* @__PURE__ */ function(_MediaTask10) {
    _inherits5(SwapOutOfDomTask2, _MediaTask10);
    var _super10 = _createSuper5(SwapOutOfDomTask2);
    function SwapOutOfDomTask2(placeholderEl) {
      var _this3;
      _classCallCheck19(this, SwapOutOfDomTask2);
      _this3 = _super10.call(this, "swap-out-of-dom");
      _this3.placeholderEl_ = placeholderEl;
      return _this3;
    }
    _createClass18(SwapOutOfDomTask2, [{
      key: "executeInternal",
      value: function executeInternal(mediaEl) {
        copyCssClasses(mediaEl, this.placeholderEl_);
        copyAttributes(mediaEl, this.placeholderEl_);
        mediaEl.parentElement.replaceChild(this.placeholderEl_, mediaEl);
        return resolvedPromise();
      }
    }, {
      key: "requiresSynchronousExecution",
      value: function requiresSynchronousExecution() {
        return true;
      }
    }]);
    return SwapOutOfDomTask2;
  }(MediaTask);

  // extensions/amp-story/1.0/media-pool.js
  function _classCallCheck20(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties19(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass19(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties19(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties19(Constructor, staticProps);
    return Constructor;
  }
  var MediaType = {
    UNSUPPORTED: "unsupported",
    AUDIO: "audio",
    VIDEO: "video"
  };
  var MediaElementOrigin = {
    PLACEHOLDER: "placeholder",
    POOL: "pool"
  };
  var PLACEHOLDER_ELEMENT_ID_PREFIX = "i-amphtml-placeholder-media-";
  var POOL_ELEMENT_ID_PREFIX = "i-amphtml-pool-media-";
  var POOL_MEDIA_ELEMENT_PROPERTY_NAME = "__AMP_MEDIA_POOL_ID__";
  var ELEMENT_TASK_QUEUE_PROPERTY_NAME = "__AMP_MEDIA_ELEMENT_TASKS__";
  var MEDIA_ELEMENT_ORIGIN_PROPERTY_NAME = "__AMP_MEDIA_ELEMENT_ORIGIN__";
  var REPLACED_MEDIA_PROPERTY_NAME = "replaced-media";
  var instances = {};
  var nextInstanceId = 0;
  var MediaPool = /* @__PURE__ */ function() {
    function MediaPool2(win, maxCounts, distanceFn) {
      var _this = this, _this$mediaFactory_;
      _classCallCheck20(this, MediaPool2);
      this.win_ = win;
      this.timer_ = Services.timerFor(win);
      this.distanceFn_ = distanceFn;
      this.allocated = {};
      this.unallocated = {};
      this.sources_ = {};
      this.placeholderEls_ = {};
      this.placeholderIdCounter_ = 0;
      this.blessed_ = false;
      this.ampElementsToBless_ = null;
      this.mediaFactory_ = (_this$mediaFactory_ = {}, _this$mediaFactory_[MediaType.AUDIO] = function() {
        var audioEl = _this.win_.document.createElement("audio");
        audioEl.setAttribute("muted", "");
        audioEl.muted = true;
        audioEl.classList.add("i-amphtml-pool-media");
        audioEl.classList.add("i-amphtml-pool-audio");
        return audioEl;
      }, _this$mediaFactory_[MediaType.VIDEO] = function() {
        var videoEl = _this.win_.document.createElement("video");
        videoEl.setAttribute("muted", "");
        videoEl.muted = true;
        videoEl.setAttribute("playsinline", "");
        videoEl.classList.add("i-amphtml-pool-media");
        videoEl.classList.add("i-amphtml-pool-video");
        return videoEl;
      }, _this$mediaFactory_);
      this.initializeMediaPool_(maxCounts);
    }
    _createClass19(MediaPool2, [{
      key: "initializeMediaPool_",
      value: function initializeMediaPool_(maxCounts) {
        var _this2 = this;
        var poolIdCounter = 0;
        this.forEachMediaType_(function(key) {
          var type = MediaType[key];
          var count = maxCounts[type] || 0;
          if (count <= 0) {
            return;
          }
          var ctor = devAssert(_this2.mediaFactory_[type], "Factory for media type `" + type + "` unset.");
          var mediaElSeed = ctor.call(_this2);
          _this2.allocated[type] = [];
          _this2.unallocated[type] = [];
          for (var i = count; i > 0; i--) {
            var mediaEl = i == 1 ? mediaElSeed : mediaElSeed.cloneNode(true);
            mediaEl.addEventListener("error", _this2.onMediaError_, {
              capture: true
            });
            mediaEl.id = POOL_ELEMENT_ID_PREFIX + poolIdCounter++;
            mediaEl.muted = true;
            mediaEl[MEDIA_ELEMENT_ORIGIN_PROPERTY_NAME] = MediaElementOrigin.POOL;
            _this2.unallocated[type].push(mediaEl);
          }
        });
      }
    }, {
      key: "onMediaError_",
      value: function onMediaError_(event) {
        var target = dev().assertElement(event.target);
        if (!matches(target, "source:last-of-type, video[src]")) {
          return;
        }
        var media = target.tagName === "SOURCE" ? target.parentElement : target;
        media[MEDIA_LOAD_FAILURE_SRC_PROPERTY] = media.currentSrc || true;
      }
    }, {
      key: "getDefaultSource_",
      value: function getDefaultSource_() {
        return new Sources();
      }
    }, {
      key: "compareMediaDistances_",
      value: function compareMediaDistances_(mediaA, mediaB) {
        var distanceA = this.distanceFn_(mediaA);
        var distanceB = this.distanceFn_(mediaB);
        return distanceA < distanceB ? -1 : 1;
      }
    }, {
      key: "createPlaceholderElementId_",
      value: function createPlaceholderElementId_() {
        return PLACEHOLDER_ELEMENT_ID_PREFIX + this.placeholderIdCounter_++;
      }
    }, {
      key: "isPoolMediaElement_",
      value: function isPoolMediaElement_(mediaElement) {
        return mediaElement[MEDIA_ELEMENT_ORIGIN_PROPERTY_NAME] === MediaElementOrigin.POOL;
      }
    }, {
      key: "getMediaType_",
      value: function getMediaType_(mediaElement) {
        var tagName = mediaElement.tagName.toLowerCase();
        switch (tagName) {
          case "audio":
            return MediaType.AUDIO;
          case "video":
            return MediaType.VIDEO;
          default:
            return MediaType.UNSUPPORTED;
        }
      }
    }, {
      key: "reserveUnallocatedMediaElement_",
      value: function reserveUnallocatedMediaElement_(mediaType) {
        return this.unallocated[mediaType].pop();
      }
    }, {
      key: "getMatchingMediaElementFromPool_",
      value: function getMatchingMediaElementFromPool_(mediaType, domMediaEl) {
        if (this.isAllocatedMediaElement_(mediaType, domMediaEl)) {
          return domMediaEl;
        }
        var allocatedEls = this.allocated[mediaType];
        var index = findIndex(allocatedEls, function(poolMediaEl) {
          return poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] === domMediaEl.id;
        });
        return allocatedEls[index];
      }
    }, {
      key: "allocateMediaElement_",
      value: function allocateMediaElement_(mediaType, poolMediaEl) {
        this.allocated[mediaType].push(poolMediaEl);
        var unallocatedEls = this.unallocated[mediaType];
        var indexToRemove = unallocatedEls.indexOf(poolMediaEl);
        if (indexToRemove >= 0) {
          unallocatedEls.splice(indexToRemove, 1);
        }
      }
    }, {
      key: "deallocateMediaElement_",
      value: function deallocateMediaElement_(mediaType, opt_elToAllocate) {
        var _this3 = this;
        var allocatedEls = this.allocated[mediaType];
        allocatedEls.sort(function(a2, b) {
          return _this3.compareMediaDistances_(a2, b);
        });
        if (opt_elToAllocate) {
          var furthestEl = allocatedEls[allocatedEls.length - 1];
          if (!furthestEl || this.distanceFn_(furthestEl) < this.distanceFn_(opt_elToAllocate)) {
            return null;
          }
        }
        var poolMediaEl = allocatedEls.pop();
        this.unallocated[mediaType].push(poolMediaEl);
        return poolMediaEl;
      }
    }, {
      key: "forceDeallocateMediaElement_",
      value: function forceDeallocateMediaElement_(poolMediaEl) {
        var _this4 = this;
        var mediaType = this.getMediaType_(poolMediaEl);
        var allocatedEls = this.allocated[mediaType];
        var removeFromDom = isConnectedNode(poolMediaEl) ? this.swapPoolMediaElementOutOfDom_(poolMediaEl) : resolvedPromise();
        return removeFromDom.then(function() {
          var index = allocatedEls.indexOf(poolMediaEl);
          devAssert(index >= 0, "Cannot deallocate unallocated media element.");
          allocatedEls.splice(index, 1);
          _this4.unallocated[mediaType].push(poolMediaEl);
        });
      }
    }, {
      key: "evictMediaElement_",
      value: function evictMediaElement_(mediaType, opt_elToAllocate) {
        var poolMediaEl = this.deallocateMediaElement_(mediaType, opt_elToAllocate);
        if (!poolMediaEl) {
          return null;
        }
        this.swapPoolMediaElementOutOfDom_(poolMediaEl);
        return poolMediaEl;
      }
    }, {
      key: "isAllocatedMediaElement_",
      value: function isAllocatedMediaElement_(mediaType, domMediaEl) {
        var poolMediaEl = domMediaEl;
        return this.allocated[mediaType].indexOf(poolMediaEl) >= 0;
      }
    }, {
      key: "swapPoolMediaElementIntoDom_",
      value: function swapPoolMediaElementIntoDom_(placeholderEl, poolMediaEl, sources) {
        var _this5 = this;
        var ampMediaForPoolEl = ampMediaElementFor(poolMediaEl);
        var ampMediaForDomEl = ampMediaElementFor(placeholderEl);
        poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] = placeholderEl.id;
        return this.enqueueMediaElementTask_(poolMediaEl, new SwapIntoDomTask(placeholderEl)).then(function() {
          return Promise.all([_this5.maybeResetAmpMedia_(ampMediaForPoolEl), _this5.maybeResetAmpMedia_(ampMediaForDomEl)]);
        }).then(function() {
          return _this5.enqueueMediaElementTask_(poolMediaEl, new UpdateSourcesTask(_this5.win_, sources));
        }).then(function() {
          return _this5.enqueueMediaElementTask_(poolMediaEl, new LoadTask());
        }).catch(function() {
          _this5.forceDeallocateMediaElement_(poolMediaEl);
        });
      }
    }, {
      key: "maybeResetAmpMedia_",
      value: function maybeResetAmpMedia_(componentEl) {
        if (!componentEl) {
          return resolvedPromise();
        }
        if (componentEl.tagName.toLowerCase() == "amp-audio") {
          return resolvedPromise();
        }
        return componentEl.getImpl().then(function(impl) {
          if (impl.resetOnDomChange) {
            impl.resetOnDomChange();
          }
        });
      }
    }, {
      key: "resetPoolMediaElementSource_",
      value: function resetPoolMediaElementSource_(poolMediaEl) {
        var _this6 = this;
        var defaultSources = this.getDefaultSource_();
        return this.enqueueMediaElementTask_(poolMediaEl, new UpdateSourcesTask(this.win_, defaultSources)).then(function() {
          return _this6.enqueueMediaElementTask_(poolMediaEl, new LoadTask());
        });
      }
    }, {
      key: "swapPoolMediaElementOutOfDom_",
      value: function swapPoolMediaElementOutOfDom_(poolMediaEl) {
        var placeholderElId = poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME];
        var placeholderEl = dev().assertElement(this.placeholderEls_[placeholderElId], "No media element " + placeholderElId + " to put back into DOM aftereviction.");
        poolMediaEl[REPLACED_MEDIA_PROPERTY_NAME] = null;
        var swapOutOfDom = this.enqueueMediaElementTask_(poolMediaEl, new SwapOutOfDomTask(placeholderEl));
        this.resetPoolMediaElementSource_(poolMediaEl);
        return swapOutOfDom;
      }
    }, {
      key: "forEachMediaType_",
      value: function forEachMediaType_(callbackFn) {
        Object.keys(MediaType).forEach(callbackFn.bind(this));
      }
    }, {
      key: "forEachMediaElement_",
      value: function forEachMediaElement_(callbackFn) {
        var _this7 = this;
        [this.allocated, this.unallocated].forEach(function(mediaSet) {
          _this7.forEachMediaType_(function(key) {
            var type = MediaType[key];
            var els = mediaSet[type];
            if (!els) {
              return;
            }
            els.forEach(callbackFn.bind(_this7));
          });
        });
      }
    }, {
      key: "loadInternal_",
      value: function loadInternal_(domMediaEl) {
        if (!isConnectedNode(domMediaEl)) {
          return resolvedPromise();
        }
        var mediaType = this.getMediaType_(domMediaEl);
        var existingPoolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
        if (existingPoolMediaEl) {
          return Promise.resolve(existingPoolMediaEl);
        }
        var placeholderEl = domMediaEl;
        var sources = this.sources_[placeholderEl.id];
        devAssert(sources instanceof Sources, "Cannot play unregistered element.");
        var poolMediaEl = this.reserveUnallocatedMediaElement_(mediaType) || this.evictMediaElement_(mediaType, placeholderEl);
        if (!poolMediaEl) {
          return resolvedPromise();
        }
        this.allocateMediaElement_(mediaType, poolMediaEl);
        return this.swapPoolMediaElementIntoDom_(placeholderEl, poolMediaEl, sources).then(function() {
          return poolMediaEl;
        });
      }
    }, {
      key: "bless_",
      value: function bless_(poolMediaEl) {
        if (poolMediaEl[ELEMENT_BLESSED_PROPERTY_NAME]) {
          return resolvedPromise();
        }
        return this.enqueueMediaElementTask_(poolMediaEl, new BlessTask());
      }
    }, {
      key: "register",
      value: function register(domMediaEl) {
        var parent = domMediaEl.parentNode;
        if (parent && parent.signals) {
          this.trackAmpElementToBless_(parent);
        }
        if (this.isPoolMediaElement_(domMediaEl)) {
          return resolvedPromise();
        }
        var placeholderEl = domMediaEl;
        placeholderEl[MEDIA_ELEMENT_ORIGIN_PROPERTY_NAME] = MediaElementOrigin.PLACEHOLDER;
        var id = placeholderEl.id || this.createPlaceholderElementId_();
        if (this.sources_[id] && this.placeholderEls_[id]) {
          return resolvedPromise();
        }
        placeholderEl.id = id;
        var sources = Sources.removeFrom(this.win_, placeholderEl);
        this.sources_[id] = sources;
        this.placeholderEls_[id] = placeholderEl;
        if (placeholderEl instanceof HTMLMediaElement) {
          placeholderEl.muted = true;
          placeholderEl.setAttribute("muted", "");
          placeholderEl.pause();
        }
        return resolvedPromise();
      }
    }, {
      key: "trackAmpElementToBless_",
      value: function trackAmpElementToBless_(element) {
        this.ampElementsToBless_ = this.ampElementsToBless_ || [];
        this.ampElementsToBless_.push(element);
      }
    }, {
      key: "preload",
      value: function preload(domMediaEl) {
        return this.loadInternal_(domMediaEl).then();
      }
    }, {
      key: "play",
      value: function play(domMediaEl) {
        var _this8 = this;
        return this.loadInternal_(domMediaEl).then(function(poolMediaEl) {
          if (!poolMediaEl) {
            return resolvedPromise();
          }
          return _this8.enqueueMediaElementTask_(poolMediaEl, new PlayTask());
        });
      }
    }, {
      key: "pause",
      value: function pause(domMediaEl, rewindToBeginning) {
        var _this9 = this;
        if (rewindToBeginning === void 0) {
          rewindToBeginning = false;
        }
        var mediaType = this.getMediaType_(domMediaEl);
        var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
        if (!poolMediaEl) {
          return resolvedPromise();
        }
        return this.enqueueMediaElementTask_(poolMediaEl, new PauseTask()).then(function() {
          if (rewindToBeginning) {
            _this9.enqueueMediaElementTask_(poolMediaEl, new SetCurrentTimeTask({
              currentTime: 0
            }));
          }
        });
      }
    }, {
      key: "rewindToBeginning",
      value: function rewindToBeginning(domMediaEl) {
        return this.setCurrentTime(domMediaEl, 0);
      }
    }, {
      key: "setCurrentTime",
      value: function setCurrentTime(domMediaEl, currentTime) {
        var mediaType = this.getMediaType_(domMediaEl);
        var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
        if (!poolMediaEl) {
          return resolvedPromise();
        }
        return this.enqueueMediaElementTask_(poolMediaEl, new SetCurrentTimeTask({
          currentTime
        }));
      }
    }, {
      key: "mute",
      value: function mute(domMediaEl) {
        var mediaType = this.getMediaType_(domMediaEl);
        var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
        if (!poolMediaEl) {
          return resolvedPromise();
        }
        return this.enqueueMediaElementTask_(poolMediaEl, new MuteTask());
      }
    }, {
      key: "unmute",
      value: function unmute(domMediaEl) {
        var mediaType = this.getMediaType_(domMediaEl);
        var poolMediaEl = this.getMatchingMediaElementFromPool_(mediaType, domMediaEl);
        if (!poolMediaEl) {
          return resolvedPromise();
        }
        return this.enqueueMediaElementTask_(poolMediaEl, new UnmuteTask());
      }
    }, {
      key: "blessAll",
      value: function blessAll() {
        var _this10 = this;
        if (this.blessed_) {
          return resolvedPromise();
        }
        var blessPromises = [];
        (this.ampElementsToBless_ || []).forEach(userInteractedWith);
        this.ampElementsToBless_ = null;
        this.forEachMediaElement_(function(mediaEl) {
          blessPromises.push(_this10.bless_(mediaEl));
        });
        return Promise.all(blessPromises).then(function() {
          _this10.blessed_ = true;
        }, function(reason) {
          dev().expectedError("AMP-STORY", "Blessing all media failed: ", reason);
        });
      }
    }, {
      key: "executeNextMediaElementTask_",
      value: function executeNextMediaElementTask_(mediaEl) {
        var _this11 = this;
        var queue = mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME];
        if (queue.length === 0) {
          return;
        }
        var task = queue[0];
        var executionFn = function executionFn2() {
          task.execute(mediaEl).catch(function(reason) {
            return dev().error("AMP-STORY", reason);
          }).then(function() {
            queue.shift();
            _this11.executeNextMediaElementTask_(mediaEl);
          });
        };
        if (task.requiresSynchronousExecution()) {
          executionFn.call(this);
        } else {
          this.timer_.delay(executionFn.bind(this), 0);
        }
      }
    }, {
      key: "enqueueMediaElementTask_",
      value: function enqueueMediaElementTask_(mediaEl, task) {
        if (!mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME]) {
          mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME] = [];
        }
        var queue = mediaEl[ELEMENT_TASK_QUEUE_PROPERTY_NAME];
        var isQueueRunning = queue.length !== 0;
        queue.push(task);
        if (!isQueueRunning) {
          this.executeNextMediaElementTask_(mediaEl);
        }
        return task.whenComplete();
      }
    }], [{
      key: "for",
      value: function _for(root) {
        var element = root.getElement();
        var existingId = element[POOL_MEDIA_ELEMENT_PROPERTY_NAME];
        var hasInstanceAllocated = existingId && instances[existingId];
        if (hasInstanceAllocated) {
          return instances[existingId];
        }
        var newId = String(nextInstanceId++);
        element[POOL_MEDIA_ELEMENT_PROPERTY_NAME] = newId;
        instances[newId] = new MediaPool2(toWin(root.getElement().ownerDocument.defaultView), root.getMaxMediaElementCounts(), function(element2) {
          return root.getElementDistance(element2);
        });
        return instances[newId];
      }
    }]);
    return MediaPool2;
  }();

  // src/iframe-helper.js
  var FIE_EMBED_PROP = "__AMP_EMBED__";
  function getFriendlyIframeEmbedOptional(iframe) {
    return iframe[FIE_EMBED_PROP];
  }

  // extensions/amp-story/1.0/logging.js
  var AMPPROJECT_DOCS = "https://www.ampproject.org/docs";
  function getPosterFromVideo(el) {
    return new Promise(function(resolve, reject) {
      var poster = new Image();
      poster.onload = function() {
        return resolve(poster);
      };
      poster.onerror = reject;
      poster.src = el.getAttribute("poster");
    });
  }
  var LogType = {
    VIDEOS_POSTER_SPECIFIED: {
      message: "Videos should specify a poster image.",
      moreInfo: AMPPROJECT_DOCS + "/reference/components/amp-video#poster",
      selector: "video:not([poster])",
      level: LogLevel.ERROR
    },
    IMAGES_MAX_720P_OR_SRCSET: {
      message: "Images should not be larger than 720p.  If you wish to use images that are larger than 720p, you should specify a srcset.",
      moreInfo: AMPPROJECT_DOCS + "/guides/responsive/art_direction#srcset",
      selector: "img:not([srcset])",
      predicate: function predicate(el) {
        return el.naturalWidth <= 720 && el.naturalHeight <= 1280;
      },
      level: LogLevel.WARN
    },
    IMAGES_PORTRAIT: {
      message: "Full-bleed images should be in portrait orientation.",
      selector: 'amp-story-grid-layer[template="fill"] > amp-img > img',
      predicate: function predicate2(el) {
        return el.naturalWidth < el.naturalHeight;
      },
      level: LogLevel.WARN
    },
    VIDEOS_MAX_720P: {
      message: "Videos should not be larger than 720p.",
      selector: "video",
      predicate: function predicate3(el) {
        return el.videoWidth <= 720 && el.videoHeight <= 1280;
      },
      level: LogLevel.WARN
    },
    VIDEOS_PORTRAIT: {
      message: "Full-bleed videos should be in portrait orientation.",
      selector: 'amp-story-grid-layer[template="fill"] > amp-video > video',
      predicate: function predicate4(el) {
        return el.videoWidth < el.videoHeight;
      },
      level: LogLevel.WARN
    },
    VIDEO_POSTER_MAX_720P: {
      message: "Video poster images should not be larger than 720p.",
      selector: "video[poster]",
      predicate: function predicate5(el) {
        return getPosterFromVideo(el).then(function(poster) {
          return poster.naturalWidth <= 720 && poster.naturalHeight <= 1280;
        });
      },
      level: LogLevel.WARN
    },
    VIDEO_POSTER_POTRAIT: {
      message: "Poster images for full-bleed videos should be in portrait orientation.",
      selector: 'amp-story-grid-layer[template="fill"] > amp-video > video[poster]',
      predicate: function predicate6(el) {
        return getPosterFromVideo(el).then(function(poster) {
          return poster.naturalWidth < poster.naturalHeight;
        });
      },
      level: LogLevel.WARN
    }
  };
  function getLogType(logTypeKey) {
    var logType = LogType[logTypeKey];
    devAssert(logType, 'There is no log type "' + logTypeKey + '".');
    devAssert(logType.message, 'Log type "' + logTypeKey + '" has no associated message.');
    devAssert(logType.level, 'Log type "' + logTypeKey + '" has no associated log level.');
    return logType;
  }
  function getLogEntry(rootElement, logType, element) {
    var predicate7 = logType.predicate || function(unusedEl) {
      return false;
    };
    return tryResolve(function() {
      return predicate7(element);
    }).then(function(conforms) {
      return new Promise(function(resolve) {
        resolve({
          rootElement,
          element,
          conforms,
          level: logType.level,
          message: logType.message,
          moreInfo: logType.moreInfo
        });
      });
    });
  }
  function getLogEntriesForType(rootElement, logType) {
    var precondition = logType.precondition || function(unusedEl) {
      return true;
    };
    var elements = logType.selector ? [].slice.call(scopedQuerySelectorAll(rootElement, logType.selector)) : [rootElement];
    return elements.filter(precondition).map(getLogEntry.bind(null, rootElement, logType));
  }
  function logEntryCompareFn(logEntryA, logEntryB) {
    if (logEntryA.conforms == logEntryB.conforms) {
      return logEntryA.level <= logEntryB.level ? -1 : 1;
    } else {
      return logEntryA.conforms < logEntryB.conforms ? -1 : 1;
    }
  }
  function getLogEntries(rootElement) {
    var logEntryPromises = Object.keys(LogType).reduce(function(entries, key) {
      var logType = getLogType(key);
      var newEntries = getLogEntriesForType(rootElement, logType);
      return entries.concat(newEntries);
    }, []);
    return Promise.all(logEntryPromises).then(function(logEntries) {
      return logEntries.sort(logEntryCompareFn);
    });
  }

  // extensions/amp-story/1.0/media-performance-metrics-service.js
  function _classCallCheck21(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties20(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass20(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties20(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties20(Constructor, staticProps);
    return Constructor;
  }
  var Status = {
    ERRORED: 0,
    PAUSED: 1,
    PLAYING: 2,
    WAITING: 3
  };
  var CacheState = {
    ORIGIN: 0,
    ORIGIN_CACHE_MISS: 1,
    CACHE: 2
  };
  var FirstPageState = {
    NOT_ON_FIRST_PAGE: 0,
    ON_FIRST_PAGE: 1
  };
  var MINIMUM_TIME_THRESHOLD_MS = 1e3;
  var REBUFFER_THRESHOLD_MS = 250;
  var TAG6 = "media-performance-metrics";
  var getMediaPerformanceMetricsService = function getMediaPerformanceMetricsService2(win) {
    var service = Services.mediaPerformanceMetricsService(win);
    if (!service) {
      service = new MediaPerformanceMetricsService(win);
      registerServiceBuilder(win, "media-performance-metrics", function() {
        return service;
      });
    }
    return service;
  };
  var MediaPerformanceMetricsService = /* @__PURE__ */ function() {
    function MediaPerformanceMetricsService2(win) {
      _classCallCheck21(this, MediaPerformanceMetricsService2);
      this.mediaMap_ = new WeakMap();
      this.performanceService_ = Services.performanceFor(win);
      this.urlService_ = Services.urlForDoc(win.document.body);
    }
    _createClass20(MediaPerformanceMetricsService2, [{
      key: "isPerformanceTrackingOn",
      value: function isPerformanceTrackingOn() {
        return this.performanceService_.isPerformanceTrackingOn();
      }
    }, {
      key: "startMeasuring",
      value: function startMeasuring(media) {
        if (!media.paused) {
          dev().expectedError(TAG6, "media must start paused");
          return;
        }
        var unlisteners = this.listen_(media);
        var mediaEntry = this.getNewMediaEntry_(media, unlisteners);
        this.mediaMap_.set(media, mediaEntry);
        if (media.error || media[MEDIA_LOAD_FAILURE_SRC_PROPERTY] === media.currentSrc) {
          mediaEntry.metrics.error = media.error ? media.error.code : 0;
          mediaEntry.status = Status.ERRORED;
        }
      }
    }, {
      key: "stopMeasuring",
      value: function stopMeasuring(media, sendMetrics) {
        if (sendMetrics === void 0) {
          sendMetrics = true;
        }
        var mediaEntry = this.mediaMap_.get(media);
        if (!mediaEntry) {
          return;
        }
        mediaEntry.unlisteners.forEach(function(unlisten) {
          return unlisten();
        });
        this.mediaMap_.delete(media);
        switch (mediaEntry.status) {
          case Status.PLAYING:
            this.addWatchTime_(mediaEntry);
            break;
          case Status.WAITING:
            this.addRebuffer_(mediaEntry);
            break;
        }
        if (sendMetrics) {
          this.sendMetrics_(mediaEntry);
        }
      }
    }, {
      key: "sendMetrics_",
      value: function sendMetrics_(mediaEntry) {
        var media = mediaEntry.media, metrics = mediaEntry.metrics;
        var videoCacheState;
        if (this.urlService_.isProxyOrigin(media.currentSrc)) {
          videoCacheState = CacheState.CACHE;
        } else {
          var _this$urlService_$par = this.urlService_.parse(urls.cdn), hostname = _this$urlService_$par.hostname;
          videoCacheState = media.querySelector('[src*="' + escapeCssSelectorIdent(hostname) + '"]') ? CacheState.ORIGIN_CACHE_MISS : CacheState.ORIGIN;
        }
        this.performanceService_.tickDelta(TickLabel.VIDEO_CACHE_STATE, videoCacheState);
        this.performanceService_.tickDelta(TickLabel.VIDEO_ON_FIRST_PAGE, matches(media, "amp-story-page:first-of-type " + media.tagName) ? FirstPageState.ON_FIRST_PAGE : FirstPageState.NOT_ON_FIRST_PAGE);
        if (metrics.error !== null) {
          this.performanceService_.tickDelta(TickLabel.VIDEO_ERROR, metrics.error || 0);
          this.performanceService_.flush();
          return;
        }
        if (!metrics.jointLatency && Date.now() - mediaEntry.timeStamps.start < MINIMUM_TIME_THRESHOLD_MS) {
          return;
        }
        if (!metrics.jointLatency) {
          this.performanceService_.tickDelta(TickLabel.VIDEO_ERROR, 5);
          this.performanceService_.flush();
          return;
        }
        var rebufferRate = Math.round(metrics.rebufferTime / (metrics.rebufferTime + metrics.watchTime) * 100);
        this.performanceService_.tickDelta(TickLabel.VIDEO_JOINT_LATENCY, metrics.jointLatency);
        this.performanceService_.tickDelta(TickLabel.VIDEO_WATCH_TIME, metrics.watchTime);
        this.performanceService_.tickDelta(TickLabel.VIDEO_REBUFFERS, metrics.rebuffers);
        this.performanceService_.tickDelta(TickLabel.VIDEO_REBUFFER_RATE, rebufferRate);
        if (metrics.rebuffers) {
          this.performanceService_.tickDelta(TickLabel.VIDEO_MEAN_TIME_BETWEEN_REBUFFER, Math.round(metrics.watchTime / metrics.rebuffers));
        }
        this.performanceService_.flush();
      }
    }, {
      key: "getNewMediaEntry_",
      value: function getNewMediaEntry_(media, unlisteners) {
        return {
          media,
          status: Status.PAUSED,
          unlisteners,
          timeStamps: {
            start: Date.now(),
            playing: 0,
            waiting: 0
          },
          metrics: {
            error: null,
            jointLatency: 0,
            meanTimeBetweenRebuffers: 0,
            rebuffers: 0,
            rebufferTime: 0,
            watchTime: 0
          }
        };
      }
    }, {
      key: "addWatchTime_",
      value: function addWatchTime_(mediaEntry) {
        mediaEntry.metrics.watchTime += Date.now() - mediaEntry.timeStamps.playing;
      }
    }, {
      key: "addRebuffer_",
      value: function addRebuffer_(mediaEntry) {
        var rebufferTime = Date.now() - mediaEntry.timeStamps.waiting;
        if (rebufferTime > REBUFFER_THRESHOLD_MS) {
          mediaEntry.metrics.rebuffers++;
          mediaEntry.metrics.rebufferTime += rebufferTime;
        }
      }
    }, {
      key: "listen_",
      value: function listen_(media) {
        var unlisteners = [listen(media, "ended", this.onPauseOrEnded_.bind(this)), listen(media, "pause", this.onPauseOrEnded_.bind(this)), listen(media, "playing", this.onPlaying_.bind(this)), listen(media, "waiting", this.onWaiting_.bind(this))];
        var errorTarget = media;
        if (!media.hasAttribute("src")) {
          errorTarget = lastChildElement(media, function(child) {
            return child.tagName === "SOURCE";
          });
        }
        unlisteners.push(listen(errorTarget || media, "error", this.onError_.bind(this)));
        return unlisteners;
      }
    }, {
      key: "onError_",
      value: function onError_(event) {
        var media = event.target.tagName === "SOURCE" ? event.target.parent : event.target;
        var mediaEntry = this.mediaMap_.get(media);
        mediaEntry.metrics.error = media.error ? media.error.code : 0;
        mediaEntry.status = Status.ERRORED;
      }
    }, {
      key: "onPauseOrEnded_",
      value: function onPauseOrEnded_(event) {
        var mediaEntry = this.mediaMap_.get(event.target);
        if (mediaEntry.status === Status.PLAYING) {
          this.addWatchTime_(mediaEntry);
        }
        mediaEntry.status = Status.PAUSED;
      }
    }, {
      key: "onPlaying_",
      value: function onPlaying_(event) {
        var mediaEntry = this.mediaMap_.get(event.target);
        var metrics = mediaEntry.metrics, timeStamps = mediaEntry.timeStamps;
        if (!metrics.jointLatency) {
          metrics.jointLatency = Date.now() - timeStamps.start;
        }
        if (mediaEntry.status === Status.WAITING) {
          this.addRebuffer_(mediaEntry);
        }
        timeStamps.playing = Date.now();
        mediaEntry.status = Status.PLAYING;
      }
    }, {
      key: "onWaiting_",
      value: function onWaiting_(event) {
        var mediaEntry = this.mediaMap_.get(event.target);
        var timeStamps = mediaEntry.timeStamps;
        if (mediaEntry.status === Status.PLAYING) {
          this.addWatchTime_(mediaEntry);
        }
        timeStamps.waiting = Date.now();
        mediaEntry.status = Status.WAITING;
      }
    }]);
    return MediaPerformanceMetricsService2;
  }();

  // src/utils/video.js
  function detectIsAutoplaySupported(win) {
    var detectionElement = win.document.createElement("video");
    detectionElement.setAttribute("muted", "");
    detectionElement.setAttribute("playsinline", "");
    detectionElement.setAttribute("webkit-playsinline", "");
    detectionElement.setAttribute("height", "0");
    detectionElement.setAttribute("width", "0");
    detectionElement.muted = true;
    detectionElement.playsInline = true;
    detectionElement["playsinline"] = true;
    detectionElement["webkitPlaysinline"] = true;
    setStyles(detectionElement, {
      position: "fixed",
      top: "0",
      width: "0",
      height: "0",
      opacity: "0"
    });
    new Promise(function(resolve) {
      return resolve(detectionElement.play());
    }).catch(function() {
    });
    return Promise.resolve(!detectionElement.paused);
  }
  var AUTOPLAY_SUPPORTED_WIN_PROP = "__AMP_AUTOPLAY";
  function isAutoplaySupported(win) {
    if (win[AUTOPLAY_SUPPORTED_WIN_PROP] == null) {
      win[AUTOPLAY_SUPPORTED_WIN_PROP] = detectIsAutoplaySupported(win);
    }
    return win[AUTOPLAY_SUPPORTED_WIN_PROP];
  }

  // extensions/amp-story/1.0/amp-story-page-attachment-ui-v2.js
  var isPageAttachmentUiV2ExperimentOn = function isPageAttachmentUiV2ExperimentOn2(win) {
    return isExperimentOn(win, "amp-story-page-attachment-ui-v2");
  };

  // build/amp-story-open-page-attachment-0.1.css.js
  var CSS3 = `@keyframes open-attachment-fly-in{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}@keyframes open-attachment-icon{0%{transform:translateY(14px)}to{transform:translateY(0)}}@keyframes open-attachment-icon-explode{0%{transform:scale(0)}to{transform:scale(1);box-shadow:0 1px 3px 1px rgba(0,0,0,0.12)}}@keyframes open-attachment-icon-color{0%{background:#fff}to{background:rgba(0,0,0,0.87);text-shadow:none}}@keyframes open-attachment-bar-left{0%{transform:rotate(0deg)}to{transform:rotate(-30deg)}}@keyframes open-attachment-bar-right{0%{transform:rotate(0deg)}to{transform:rotate(30deg)}}.i-amphtml-story-page-open-attachment{display:none!important}.i-amphtml-story-page-open-attachment[active]{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-direction:column!important;flex-direction:column!important;position:absolute!important;bottom:0!important;left:0!important;width:100%!important;background:linear-gradient(0,rgba(0,0,0,0.15),transparent)!important;pointer-events:none!important;z-index:3!important;animation:open-attachment-fly-in 0.3s cubic-bezier(0.4,0,0.2,1) both!important;-webkit-touch-callout:default!important;text-decoration:none!important}.i-amphtml-story-page-open-attachment>*{cursor:pointer!important;pointer-events:auto!important}.i-amphtml-story-page-open-attachment-icon{display:block!important;height:32px!important;width:32px!important;cursor:pointer!important;animation:open-attachment-icon 0.2s cubic-bezier(0.4,0,0.2,1) 2s both!important}.i-amphtml-story-page-open-attachment-icon:after{content:""!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#fff!important;border-radius:100%!important;z-index:-1!important;animation:open-attachment-icon-explode 0.25s cubic-bezier(0.4,0,0.2,1) 2s both!important}.i-amphtml-story-outlink-page-open-attachment-bar-left,.i-amphtml-story-outlink-page-open-attachment-bar-right,.i-amphtml-story-page-open-attachment-bar-left,.i-amphtml-story-page-open-attachment-bar-right{position:absolute!important;display:block!important;height:3px!important;width:12px!important;border-radius:3px!important;top:14px!important}.i-amphtml-story-page-open-attachment-bar-left{left:6px!important;animation:open-attachment-icon-color 0.25s cubic-bezier(0.4,0,0.2,1) 2s both,open-attachment-bar-left 0.3s cubic-bezier(0.4,0,0.2,1) both!important}.i-amphtml-story-page-open-attachment-bar-right{right:6px!important;animation:open-attachment-icon-color 0.25s cubic-bezier(0.4,0,0.2,1) 2s both,open-attachment-bar-right 0.3s cubic-bezier(0.4,0,0.2,1) both!important}.i-amphtml-story-page-open-attachment-label{position:relative!important;padding:12px 32px 20px!important;height:16px!important;max-width:calc(100% - 64px)!important;color:#fff!important;font-family:Roboto,sans-serif!important;font-size:16px!important;font-weight:700!important;letter-spacing:0.3px;line-height:16px!important;overflow:hidden!important;text-overflow:ellipsis!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important;white-space:nowrap!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment{--i-amphtml-chip-background-color:hsla(0,0%,100%,0.5)!important;--i-amphtml-img-background-color:#fff!important;--i-amphtml-label-text-color:#fff!important;--i-amphtml-arrow-color:#000!important;--i-amphtml-page-attachment-ui-animation-delay:1s!important;--i-amphtml-page-attachment-ui-animation-duration:.6s!important}[theme=dark].i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment{--i-amphtml-chip-background-color:rgba(0,0,0,0.5)!important;--i-amphtml-img-background-color:#000!important;--i-amphtml-label-text-color:#000!important;--i-amphtml-arrow-color:#fff!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-direction:column!important;flex-direction:column!important;position:absolute!important;bottom:0!important;left:0!important;width:100%!important;background:linear-gradient(0,rgba(0,0,0,0.15),transparent)!important;pointer-events:none!important;-webkit-touch-callout:default!important;text-decoration:none!important;animation:none!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment:not([active]){visibility:hidden!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-label{font-family:Roboto,sans-serif!important;font-size:16px!important;font-weight:700!important;letter-spacing:0.3px;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;max-width:210px!important;line-height:18px!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-open-attachment-label{color:var(--i-amphtml-label-text-color)!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-inline-page-attachment-chip{background-color:var(--i-amphtml-chip-background-color)!important;display:-ms-flexbox!important;display:flex!important;border-radius:24px!important;-ms-flex-align:center!important;align-items:center!important;overflow:hidden!important;margin-bottom:12px!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment[active] .i-amphtml-story-inline-page-attachment-chip{animation:tap-scale var(--i-amphtml-page-attachment-ui-animation-duration) var(--i-amphtml-page-attachment-ui-animation-delay) both!important}.i-amphtml-story-inline-page-attachment-chip:only-child{margin-bottom:20px!important}.i-amphtml-story-inline-page-attachment-img{background-size:contain!important;background-repeat:no-repeat!important;height:48px!important;width:48px!important;background-color:var(--i-amphtml-img-background-color)!important}.i-amphtml-story-inline-page-attachment-img:nth-child(2){margin-inline-start:1px!important}.i-amphtml-story-inline-page-attachment-arrow{position:relative!important;height:32px!important;width:32px!important;border-radius:50%!important;background-color:var(--i-amphtml-img-background-color)!important}.i-amphtml-story-inline-page-attachment-arrow:not(:only-child){margin:8px!important}.i-amphtml-story-inline-page-attachment-arrow:before{content:""!important;position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='8'%3E%3Cpath d='M18 7.7c-.2 0-.5-.1-.7-.2l-7.3-4-7.3 4c-.7.4-1.6.2-2-.6-.4-.7-.1-1.6.6-2l8-4.4c.5-.2 1-.2 1.5 0l8 4.4c.7.4 1 1.3.6 2-.4.5-.9.8-1.4.8z'/%3E%3C/svg%3E")!important;background-position:50%!important;background-size:auto!important;background-repeat:no-repeat!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment[active] .i-amphtml-story-inline-page-attachment-arrow:before{animation:move-up-arrow-in-circle var(--i-amphtml-page-attachment-ui-animation-duration) var(--i-amphtml-page-attachment-ui-animation-delay) both!important}[theme=dark] .i-amphtml-story-inline-page-attachment-arrow:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='20' height='8'%3E%3Cpath d='M18 7.7c-.2 0-.5-.1-.7-.2l-7.3-4-7.3 4c-.7.4-1.6.2-2-.6-.4-.7-.1-1.6.6-2l8-4.4c.5-.2 1-.2 1.5 0l8 4.4c.7.4 1 1.3.6 2-.4.5-.9.8-1.4.8z'/%3E%3C/svg%3E")!important}.i-amphtml-amp-story-page-attachment-ui-v2:not([href]) .i-amphtml-story-page-attachment-label{margin-bottom:20px!important;color:var(--i-amphtml-label-text-color)!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment{--i-amphtml-outlink-cta-background-color:#fff!important;--i-amphtml-outlink-cta-text-color:#000!important;background:linear-gradient(0,rgba(0,0,0,0.25),transparent)!important}[theme=dark].i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment{--i-amphtml-outlink-cta-background-color:#000!important;--i-amphtml-outlink-cta-text-color:#fff!important;background:linear-gradient(0,hsla(0,0%,100%,0.25),hsla(0,0%,100%,0))!important}[href].i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment{background:none!important}[href].i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment[active]{animation:tap-scale var(--i-amphtml-page-attachment-ui-animation-duration) var(--i-amphtml-page-attachment-ui-animation-delay) both!important}.i-amphtml-story-outlink-page-attachment-arrow{display:block!important;cursor:pointer!important;margin-bottom:10px!important;fill:var(--i-amphtml-outlink-cta-background-color)!important;filter:drop-shadow(0px 2px 6px rgba(0,0,0,0.3))!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-open-attachment[active] .i-amphtml-story-outlink-page-attachment-arrow{animation:move-up-arrow var(--i-amphtml-page-attachment-ui-animation-duration) var(--i-amphtml-page-attachment-ui-animation-delay) both!important}@keyframes move-up-arrow{0%,to{opacity:1;transform:translateY(0)}45%{opacity:0;transform:translateY(-7px)}45.01%{transform:translateY(5px)}}@keyframes move-up-arrow-in-circle{0%,to{opacity:1;transform:translateY(0)}45%{opacity:0;transform:translateY(-4px)}45.01%{transform:translateY(3px)}}@keyframes tap-scale{0%,to{transform:scale(1)}45%{transform:scale(.9)}}.i-amphtml-story-outlink-page-attachment-outlink-chip{display:-ms-flexbox!important;display:flex!important;position:relative!important;padding:10px 6px!important;margin:0 0 20px!important;height:16px!important;max-width:calc(100% - 64px)!important;border-radius:30px!important;background:var(--i-amphtml-outlink-cta-background-color)!important;place-items:center!important;box-shadow:0px 4px 10px rgba(0,0,0,.15)!important}.i-amphtml-story-outlink-page-attachment-img{height:24px!important;width:24px!important;vertical-align:middle!important;background-size:cover!important;background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important}[href] .i-amphtml-story-page-attachment-label{padding-inline-start:6px!important;padding-inline-end:8px!important;color:var(--i-amphtml-outlink-cta-text-color)!important}.i-amphtml-story-outlink-page-attachment-label:only-child{padding-inline-start:8px!important}.i-amphtml-story-page-open-attachment-link-icon{width:24px!important;height:24px!important;fill:var(--i-amphtml-outlink-cta-text-color)!important}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-open-page-attachment.css*/`;

  // src/core/dom/media-query-props.js
  function prefersReducedMotion(win) {
    var _win$matchMedia;
    return !!((_win$matchMedia = win.matchMedia("(prefers-reduced-motion: reduce)")) != null && _win$matchMedia.matches);
  }

  // build/amp-story-draggable-drawer-header-1.0.css.js
  var CSS4 = `:host{all:initial!important;color:initial!important}.i-amphtml-story-draggable-drawer-header{display:-ms-flexbox!important;display:flex!important;position:relative!important;height:40px!important;background:#fff!important;border-radius:8px 8px 0 0!important;box-shadow:0 1px 2px 1px rgba(0,0,0,0.12)!important;z-index:1!important}.i-amphtml-story-draggable-drawer-theme-dark{background:#202125!important}.i-amphtml-story-page-attachment-close-button{display:block!important;padding:8px!important;height:24px!important;width:24px!important;background-origin:content-box!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 36 36' fill='rgba(0, 0, 0, 0.54)'%3E%3Cpath d='M28.5 9.62 26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z'/%3E%3Cpath d='M0 0h36v36H0z' fill='none'/%3E%3C/svg%3E")!important;background-repeat:no-repeat!important;color:rgba(0,0,0,0.87)!important;cursor:pointer!important;box-sizing:content-box!important;border:none!important;background-color:transparent!important}.i-amphtml-story-draggable-drawer-theme-dark .i-amphtml-story-page-attachment-close-button{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 36 36' fill='rgba(255, 255, 255, 0.54)'%3E%3Cpath d='M28.5 9.62 26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z'/%3E%3Cpath d='M0 0h36v36H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-page-attachment-title{font-family:Roboto,sans-serif!important;width:calc(100% - 80px)!important;padding-right:40px!important;color:rgba(0,0,0,0.87)!important;font-size:16px!important;line-height:40px!important;overflow:hidden!important;text-align:center!important;text-overflow:ellipsis!important;white-space:nowrap!important}.i-amphtml-story-draggable-drawer-theme-dark .i-amphtml-story-page-attachment-close-button,.i-amphtml-story-draggable-drawer-theme-dark .i-amphtml-story-page-attachment-title{color:#9aa0a6!important}.i-amphtml-story-draggable-drawer-header-attachment-remote{display:none!important}:host{border-radius:inherit!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-draggable-drawer-header{--i-amphtml-draggable-drawer-background-color:#fff!important;--i-amphtml-draggable-drawer-text-color:#202125!important;--i-amphtml-draggable-drawer-handle-color:rgba(0,0,0,.2)!important;background:var(--i-amphtml-draggable-drawer-background-color)!important;-ms-flex-pack:center!important;justify-content:center!important;box-shadow:none!important;border-radius:inherit!important;height:auto!important;position:sticky!important;top:0!important}[theme=dark].i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-draggable-drawer-header{--i-amphtml-draggable-drawer-background-color:#202125!important;--i-amphtml-draggable-drawer-text-color:#fff!important;--i-amphtml-draggable-drawer-handle-color:hsla(0,0%,100%,0.2)!important}:not([desktop]).i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-draggable-drawer-header{height:20px!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-draggable-drawer-header .i-amphtml-story-draggable-drawer-header-title-and-close{opacity:1!important;height:44px!important;width:100%!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;background:var(--i-amphtml-draggable-drawer-background-color)!important;border-radius:inherit!important}:not([desktop]).i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-draggable-drawer-header .i-amphtml-story-draggable-drawer-header-title-and-close{position:absolute!important;opacity:0!important;transition:opacity .3s,visibility .3s!important;visibility:hidden!important}:not([desktop]).i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-draggable-drawer-header.i-amphtml-story-draggable-drawer-header-stuck .i-amphtml-story-draggable-drawer-header-title-and-close{opacity:1!important;visibility:visible!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-title{font-size:14px!important;position:absolute!important;padding:0!important;color:var(--i-amphtml-draggable-drawer-text-color)!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-close-button{margin-inline-start:auto!important;width:14px!important;height:14px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'%3E%3Cpath fill='rgba(0, 0, 0, .4)' d='M13.295 2.115a.997.997 0 1 0-1.41-1.41L7 5.59 2.115.705a.997.997 0 1 0-1.41 1.41L5.59 7 .705 11.885a.997.997 0 1 0 1.41 1.41L7 8.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L8.41 7l4.885-4.885z'/%3E%3C/svg%3E")!important;padding:15px!important}[theme=dark].i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-close-button{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'%3E%3Cpath fill='rgba(255, 255, 255, .4)' d='M13.295 2.115a.997.997 0 1 0-1.41-1.41L7 5.59 2.115.705a.997.997 0 1 0-1.41 1.41L5.59 7 .705 11.885a.997.997 0 1 0 1.41 1.41L7 8.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L8.41 7l4.885-4.885z'/%3E%3C/svg%3E")!important}:not([desktop]).i-amphtml-amp-story-page-attachment-ui-v2:before{content:""!important;position:absolute!important;top:8px!important;width:40px!important;height:3px!important;background-color:var(--i-amphtml-draggable-drawer-handle-color)!important;border-radius:3px!important}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-draggable-drawer-header.css*/`;

  // extensions/amp-story/1.0/amp-story-draggable-drawer.js
  var _templateObject4;
  var _templateObject23;
  function _classCallCheck22(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties21(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass21(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties21(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties21(Constructor, staticProps);
    return Constructor;
  }
  function _inherits6(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf6(subClass, superClass);
  }
  function _setPrototypeOf6(o, p) {
    _setPrototypeOf6 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf6(o, p);
  }
  function _createSuper6(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct6();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf6(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf6(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn6(this, result);
    };
  }
  function _possibleConstructorReturn6(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized6(self2);
  }
  function _assertThisInitialized6(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct6() {
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
  function _getPrototypeOf6(o) {
    _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf6(o);
  }
  function _taggedTemplateLiteralLoose3(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var TOGGLE_THRESHOLD_PX = 50;
  var DrawerState = {
    CLOSED: 0,
    DRAGGING_TO_CLOSE: 1,
    DRAGGING_TO_OPEN: 2,
    OPEN: 3
  };
  var getTemplateEl = function getTemplateEl2(element) {
    return htmlFor(element)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose3(['\n    <div class="i-amphtml-story-draggable-drawer">\n      <div class="i-amphtml-story-draggable-drawer-container">\n        <div class="i-amphtml-story-draggable-drawer-content"></div>\n      </div>\n    </div>'])));
  };
  var getHeaderEl = function getHeaderEl2(element) {
    return htmlFor(element)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose3(['\n    <div class="i-amphtml-story-draggable-drawer-header"></div>'])));
  };
  var DraggableDrawer = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits6(DraggableDrawer2, _AMP$BaseElement);
    var _super = _createSuper6(DraggableDrawer2);
    function DraggableDrawer2(element) {
      var _this;
      _classCallCheck22(this, DraggableDrawer2);
      _this = _super.call(this, element);
      _this.ampComponents_ = [];
      _this.containerEl_ = null;
      _this.contentEl_ = null;
      _this.dragCap_ = Infinity;
      _this.headerEl_ = null;
      _this.ignoreCurrentSwipeYGesture_ = false;
      _this.state_ = DrawerState.CLOSED;
      _this.storeService_ = getStoreService(_this.win);
      _this.touchEventState_ = {
        startX: 0,
        startY: 0,
        lastY: 0,
        swipingUp: null,
        isSwipeY: null
      };
      _this.touchEventUnlisteners_ = [];
      _this.openThreshold_ = Infinity;
      _this.spacerElHeight_ = null;
      return _this;
    }
    _createClass21(DraggableDrawer2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout === Layout.NODISPLAY;
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        this.element.classList.add("amp-story-draggable-drawer-root");
        var templateEl = getTemplateEl(this.element);
        var headerShadowRootEl = this.win.document.createElement("div");
        this.headerEl_ = getHeaderEl(this.element);
        createShadowRootWithStyle(headerShadowRootEl, this.headerEl_, CSS4);
        this.containerEl_ = dev().assertElement(templateEl.querySelector(".i-amphtml-story-draggable-drawer-container"));
        this.contentEl_ = dev().assertElement(this.containerEl_.querySelector(".i-amphtml-story-draggable-drawer-content"));
        if (isPageAttachmentUiV2ExperimentOn(this.win)) {
          var spacerEl = this.win.document.createElement("button");
          spacerEl.classList.add("i-amphtml-story-draggable-drawer-spacer");
          spacerEl.classList.add("i-amphtml-story-system-reset");
          spacerEl.setAttribute("role", "button");
          var localizationService = getLocalizationService(devAssert(this.element));
          if (localizationService) {
            var localizedCloseString = localizationService.getLocalizedString(LocalizedStringId.AMP_STORY_CLOSE_BUTTON_LABEL);
            spacerEl.setAttribute("aria-label", localizedCloseString);
          }
          this.containerEl_.insertBefore(spacerEl, this.contentEl_);
          this.contentEl_.appendChild(headerShadowRootEl);
          this.element.classList.add("i-amphtml-amp-story-page-attachment-ui-v2");
          this.headerEl_.classList.add("i-amphtml-amp-story-page-attachment-ui-v2");
        } else {
          templateEl.insertBefore(headerShadowRootEl, templateEl.firstChild);
        }
        this.element.appendChild(templateEl);
        this.element.setAttribute("aria-hidden", true);
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        this.initializeListeners_();
        var walker = this.win.document.createTreeWalker(this.element, NodeFilter.SHOW_ELEMENT, null, false);
        while (walker.nextNode()) {
          var el = dev().assertElement(walker.currentNode);
          if (isAmpElement(el)) {
            this.ampComponents_.push(el);
            Services.ownersForDoc(this.element).setOwner(el, this.element);
          }
        }
        return resolvedPromise();
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this2.onUIStateUpdate_(uiState);
        }, true);
        if (isPageAttachmentUiV2ExperimentOn(this.win)) {
          var spacerEl = dev().assertElement(this.element.querySelector(".i-amphtml-story-draggable-drawer-spacer"));
          spacerEl.addEventListener("click", function() {
            _this2.close_();
          });
          new this.win.IntersectionObserver(function(e) {
            _this2.headerEl_.classList.toggle("i-amphtml-story-draggable-drawer-header-stuck", !e[0].isIntersecting);
          }).observe(spacerEl);
          new this.win.ResizeObserver(function(e) {
            _this2.spacerElHeight_ = e[0].contentRect.height;
          }).observe(spacerEl);
          this.element.addEventListener("transitionend", function(e) {
            if (e.propertyName === "transform" && _this2.state_ === DrawerState.CLOSED) {
              _this2.containerEl_.scrollTop = 0;
            }
          });
        }
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        var isMobile = uiState === UIType.MOBILE;
        isMobile ? this.startListeningForTouchEvents_() : this.stopListeningForTouchEvents_();
        this.headerEl_.toggleAttribute("desktop", !isMobile);
      }
    }, {
      key: "startListeningForTouchEvents_",
      value: function startListeningForTouchEvents_() {
        var parentEl = this.element.parentElement;
        var el = dev().assertElement(parentEl.tagName === "AMP-STORY-PAGE" ? parentEl : this.element);
        this.touchEventUnlisteners_.push(listen(el, "touchstart", this.onTouchStart_.bind(this), {
          capture: true
        }));
        this.touchEventUnlisteners_.push(listen(el, "touchmove", this.onTouchMove_.bind(this), {
          capture: true
        }));
        this.touchEventUnlisteners_.push(listen(el, "touchend", this.onTouchEnd_.bind(this), {
          capture: true
        }));
      }
    }, {
      key: "stopListeningForTouchEvents_",
      value: function stopListeningForTouchEvents_() {
        this.touchEventUnlisteners_.forEach(function(fn) {
          return fn();
        });
        this.touchEventUnlisteners_ = [];
      }
    }, {
      key: "getClientTouchCoordinates_",
      value: function getClientTouchCoordinates_(event) {
        var touches = event.touches;
        if (!touches || touches.length < 1) {
          return null;
        }
        var _touches$ = touches[0], x = _touches$.clientX, y = _touches$.clientY;
        return {
          x,
          y
        };
      }
    }, {
      key: "onTouchStart_",
      value: function onTouchStart_(event) {
        var coordinates = this.getClientTouchCoordinates_(event);
        if (!coordinates) {
          return;
        }
        this.touchEventState_.startX = coordinates.x;
        this.touchEventState_.startY = coordinates.y;
      }
    }, {
      key: "onTouchMove_",
      value: function onTouchMove_(event) {
        if (this.touchEventState_.isSwipeY === false) {
          return;
        }
        var coordinates = this.getClientTouchCoordinates_(event);
        if (!coordinates) {
          return;
        }
        var x = coordinates.x, y = coordinates.y;
        this.touchEventState_.swipingUp = y < this.touchEventState_.lastY;
        this.touchEventState_.lastY = y;
        if (this.state_ === DrawerState.CLOSED && !this.touchEventState_.swipingUp) {
          return;
        }
        if (this.shouldStopPropagation_()) {
          event.stopPropagation();
        }
        if (this.touchEventState_.isSwipeY === null) {
          this.touchEventState_.isSwipeY = Math.abs(this.touchEventState_.startY - y) > Math.abs(this.touchEventState_.startX - x);
          if (!this.touchEventState_.isSwipeY) {
            return;
          }
        }
        this.onSwipeY_({
          event,
          data: {
            swipingUp: this.touchEventState_.swipingUp,
            deltaY: y - this.touchEventState_.startY,
            last: false
          }
        });
      }
    }, {
      key: "shouldStopPropagation_",
      value: function shouldStopPropagation_() {
        return this.state_ !== DrawerState.CLOSED || this.state_ === DrawerState.CLOSED && this.touchEventState_.swipingUp;
      }
    }, {
      key: "onTouchEnd_",
      value: function onTouchEnd_(event) {
        if (this.touchEventState_.isSwipeY === true) {
          this.onSwipeY_({
            event,
            data: {
              swipingUp: this.touchEventState_.swipingUp,
              deltaY: this.touchEventState_.lastY - this.touchEventState_.startY,
              last: true
            }
          });
        }
        this.touchEventState_.startX = 0;
        this.touchEventState_.startY = 0;
        this.touchEventState_.lastY = 0;
        this.touchEventState_.swipingUp = null;
        this.touchEventState_.isSwipeY = null;
      }
    }, {
      key: "onSwipeY_",
      value: function onSwipeY_(gesture) {
        var data = gesture.data;
        if (this.ignoreCurrentSwipeYGesture_) {
          this.ignoreCurrentSwipeYGesture_ = !data.last;
          return;
        }
        var deltaY = data.deltaY, swipingUp = data.swipingUp;
        if (this.state_ === DrawerState.OPEN) {
          var isContentSwipe = this.isDrawerContentDescendant_(dev().assertElement(gesture.event.target));
          if (isContentSwipe && deltaY < 0 || isContentSwipe && deltaY > 0 && this.containerEl_.scrollTop > 0) {
            this.ignoreCurrentSwipeYGesture_ = true;
            return;
          }
        }
        gesture.event.preventDefault();
        if (data.last === true) {
          if (this.state_ === DrawerState.DRAGGING_TO_CLOSE) {
            !swipingUp && deltaY > TOGGLE_THRESHOLD_PX ? this.close_() : this.open();
          }
          if (this.state_ === DrawerState.DRAGGING_TO_OPEN) {
            swipingUp && -deltaY > TOGGLE_THRESHOLD_PX ? this.open() : this.close_();
          }
          return;
        }
        if (this.state_ === DrawerState.DRAGGING_TO_OPEN && swipingUp && -deltaY > this.openThreshold_) {
          this.open();
          return;
        }
        this.drag_(deltaY);
      }
    }, {
      key: "isDrawerContentDescendant_",
      value: function isDrawerContentDescendant_(element) {
        return !!closest(element, function(el) {
          return el.classList.contains("i-amphtml-story-draggable-drawer-content");
        }, this.element);
      }
    }, {
      key: "setOpenThreshold_",
      value: function setOpenThreshold_(openThreshold) {
        this.openThreshold_ = openThreshold;
      }
    }, {
      key: "setDragCap_",
      value: function setDragCap_(dragCap) {
        this.dragCap_ = dragCap;
      }
    }, {
      key: "drag_",
      value: function drag_(deltaY) {
        var _this3 = this;
        var translate2;
        switch (this.state_) {
          case DrawerState.CLOSED:
          case DrawerState.DRAGGING_TO_OPEN:
            if (deltaY > 0) {
              return;
            }
            this.state_ = DrawerState.DRAGGING_TO_OPEN;
            var drag = Math.max(deltaY, -this.dragCap_);
            if (isPageAttachmentUiV2ExperimentOn(this.win)) {
              drag -= this.spacerElHeight_;
            }
            translate2 = "translate3d(0, calc(100% + " + drag + "px), 0)";
            break;
          case DrawerState.OPEN:
          case DrawerState.DRAGGING_TO_CLOSE:
            if (deltaY < 0) {
              return;
            }
            this.state_ = DrawerState.DRAGGING_TO_CLOSE;
            translate2 = "translate3d(0, " + deltaY + "px, 0)";
            break;
        }
        this.mutateElement(function() {
          setImportantStyles(_this3.element, {
            transform: translate2,
            transition: "none",
            visibility: "visible"
          });
        });
      }
    }, {
      key: "open",
      value: function open(shouldAnimate) {
        var _this4 = this;
        if (shouldAnimate === void 0) {
          shouldAnimate = true;
        }
        if (this.state_ === DrawerState.OPEN) {
          return;
        }
        this.state_ = DrawerState.OPEN;
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
        this.mutateElement(function() {
          _this4.element.setAttribute("aria-hidden", false);
          resetStyles(_this4.element, ["transform", "transition", "visibility"]);
          if (!shouldAnimate) {
            setImportantStyles(_this4.element, {
              transition: "initial"
            });
            _this4.mutateElement(function() {
              return resetStyles(_this4.element, ["transition"]);
            });
          }
          _this4.element.classList.add("i-amphtml-story-draggable-drawer-open");
          toggle(dev().assertElement(_this4.containerEl_), true);
        }).then(function() {
          var owners = Services.ownersForDoc(_this4.element);
          owners.scheduleLayout(_this4.element, _this4.ampComponents_);
          owners.scheduleResume(_this4.element, _this4.ampComponents_);
        });
      }
    }, {
      key: "close_",
      value: function close_() {
        this.closeInternal_();
      }
    }, {
      key: "closeInternal_",
      value: function closeInternal_(shouldAnimate) {
        var _this5 = this;
        if (shouldAnimate === void 0) {
          shouldAnimate = true;
        }
        if (this.state_ === DrawerState.CLOSED) {
          return;
        }
        this.state_ = DrawerState.CLOSED;
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, false);
        this.mutateElement(function() {
          _this5.element.setAttribute("aria-hidden", true);
          resetStyles(_this5.element, ["transform", "transition"]);
          if (!shouldAnimate) {
            setImportantStyles(_this5.element, {
              transition: "initial"
            });
            _this5.mutateElement(function() {
              return resetStyles(_this5.element, ["transition"]);
            });
          }
          _this5.element.classList.remove("i-amphtml-story-draggable-drawer-open");
        }).then(function() {
          var owners = Services.ownersForDoc(_this5.element);
          owners.schedulePause(_this5.element, _this5.ampComponents_);
        });
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return false;
      }
    }]);
    return DraggableDrawer2;
  }(AMP.BaseElement);

  // src/core/window/history.js
  function getState(history) {
    try {
      return history.state;
    } catch (e) {
      return null;
    }
  }

  // extensions/amp-story/1.0/history.js
  function _extends4() {
    _extends4 = Object.assign || function(target) {
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
    return _extends4.apply(this, arguments);
  }
  var EXPIRATION_DURATION_MILLIS = 10 * 60 * 1e3;
  var CREATION_TIME = "time";
  var STATE = "state";
  var LOCAL_STORAGE_KEY2 = "amp-story-state";
  var HistoryState = {
    ATTACHMENT_PAGE_ID: "ampStoryAttachmentPageId",
    NAVIGATION_PATH: "ampStoryNavigationPath"
  };
  function setHistoryState(win, stateName, value) {
    var _extends22;
    var history = win.history;
    var state = getState(history) || {};
    var newHistory = _extends4({}, state, (_extends22 = {}, _extends22[stateName] = value, _extends22));
    history.replaceState(newHistory, "");
    setLocalStorageState(win, newHistory);
  }
  function getHistoryState(win, stateName) {
    var history = win.history;
    var state = getState(history);
    if (!state || !state[stateName]) {
      state = getLocalStorageState(win);
    }
    if (state) {
      return state[stateName] || null;
    }
    return null;
  }
  function getLocalStorageState(win) {
    var hash = win.location.hash;
    if (hash.indexOf("page=") != -1 || hash.indexOf("ignoreLocalStorageHistory") != -1) {
      return void 0;
    }
    var container = getLocalStorageStateContainer(win);
    var holder = container && container[getDocumentKey(win)];
    return holder && holder[STATE];
  }
  function setLocalStorageState(win, state) {
    var _container$getDocumen;
    var container = getLocalStorageStateContainer(win);
    container[getDocumentKey(win)] = (_container$getDocumen = {}, _container$getDocumen[STATE] = state, _container$getDocumen[CREATION_TIME] = Date.now(), _container$getDocumen);
    writeLocalStorage(win, container);
  }
  function getLocalStorageStateContainer(win) {
    var container = readLocalStorage(win);
    if (!container) {
      return dict();
    }
    var now = Date.now();
    var expired = false;
    Object.keys(container).forEach(function(href) {
      var item = container[href];
      if (now > item[CREATION_TIME] + EXPIRATION_DURATION_MILLIS) {
        delete container[href];
        expired = true;
      }
    });
    if (expired) {
      writeLocalStorage(win, container);
    }
    return container;
  }
  function getDocumentKey(win) {
    return win.location.href.replace(/\#.*/, "");
  }
  function readLocalStorage(win) {
    try {
      return parseJson(win.localStorage.getItem(LOCAL_STORAGE_KEY2));
    } catch (e) {
      return null;
    }
  }
  function writeLocalStorage(win, container) {
    try {
      win.localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(container));
    } catch (e) {
    }
  }

  // extensions/amp-story/1.0/amp-story-page-attachment.js
  var _templateObject5;
  var _templateObject24;
  var _templateObject33;
  var _templateObject42;
  var _templateObject52;
  function _extends5() {
    _extends5 = Object.assign || function(target) {
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
    return _extends5.apply(this, arguments);
  }
  function _taggedTemplateLiteralLoose4(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _classCallCheck23(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties22(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass22(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties22(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties22(Constructor, staticProps);
    return Constructor;
  }
  function _get4(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get4 = Reflect.get;
    } else {
      _get4 = function _get5(target2, property2, receiver2) {
        var base = _superPropBase4(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get4(target, property, receiver || target);
  }
  function _superPropBase4(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf7(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _inherits7(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf7(subClass, superClass);
  }
  function _setPrototypeOf7(o, p) {
    _setPrototypeOf7 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf7(o, p);
  }
  function _createSuper7(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct7();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf7(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf7(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn7(this, result);
    };
  }
  function _possibleConstructorReturn7(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized7(self2);
  }
  function _assertThisInitialized7(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct7() {
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
  function _getPrototypeOf7(o) {
    _getPrototypeOf7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf7(o);
  }
  var DARK_THEME_CLASS2 = "i-amphtml-story-draggable-drawer-theme-dark";
  var OPEN_THRESHOLD_PX = 150;
  var DRAG_CAP_PX = 48;
  var DRAG_CAP_PX_V2 = 56;
  var POST_TAP_ANIMATION_DURATION = 500;
  var AttachmentTheme = {
    LIGHT: "light",
    DARK: "dark",
    CUSTOM: "custom"
  };
  var AttachmentType = {
    INLINE: 0,
    OUTLINK: 1
  };
  var AmpStoryPageAttachment = /* @__PURE__ */ function(_DraggableDrawer) {
    _inherits7(AmpStoryPageAttachment2, _DraggableDrawer);
    var _super = _createSuper7(AmpStoryPageAttachment2);
    function AmpStoryPageAttachment2(element) {
      var _this;
      _classCallCheck23(this, AmpStoryPageAttachment2);
      _this = _super.call(this, element);
      _this.analyticsService_ = getAnalyticsService(_this.win, _this.element);
      _this.historyService_ = Services.historyForDoc(_this.element);
      _this.type_ = null;
      return _this;
    }
    _createClass22(AmpStoryPageAttachment2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this$element$getAttr, _this2 = this;
        _get4(_getPrototypeOf7(AmpStoryPageAttachment2.prototype), "buildCallback", this).call(this);
        var theme = (_this$element$getAttr = this.element.getAttribute("theme")) == null ? void 0 : _this$element$getAttr.toLowerCase();
        if (theme && AttachmentTheme.DARK === theme) {
          if (isPageAttachmentUiV2ExperimentOn(this.win)) {
            this.headerEl_.setAttribute("theme", theme);
            this.element.setAttribute("theme", theme);
          } else {
            this.headerEl_.classList.add(DARK_THEME_CLASS2);
            this.element.classList.add(DARK_THEME_CLASS2);
          }
        }
        var isOutlink = this.element.tagName === "AMP-STORY-PAGE-OUTLINK" || this.element.hasAttribute("href");
        this.type_ = isOutlink ? AttachmentType.OUTLINK : AttachmentType.INLINE;
        if (this.type_ === AttachmentType.INLINE) {
          this.buildInline_();
        }
        if (this.type_ === AttachmentType.OUTLINK) {
          if (isPageAttachmentUiV2ExperimentOn(this.win)) {
            this.buildRemoteV2_();
          } else {
            this.buildRemote_();
          }
        }
        this.win.addEventListener("pageshow", function(event) {
          if (event.persisted) {
            _this2.closeInternal_(false);
          }
        });
        toggle(this.element, true);
        this.element.setAttribute("aria-live", "assertive");
      }
    }, {
      key: "buildInline_",
      value: function buildInline_() {
        var closeButtonEl = htmlFor(this.element)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose4(['\n          <button class="i-amphtml-story-page-attachment-close-button" aria-label="close"\n              role="button">\n          </button>'])));
        var localizationService = getLocalizationService(devAssert(this.element));
        var titleEl = htmlFor(this.element)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose4(['\n    <span class="i-amphtml-story-page-attachment-title"></span>'])));
        if (localizationService) {
          var localizedCloseString = localizationService.getLocalizedString(LocalizedStringId.AMP_STORY_CLOSE_BUTTON_LABEL);
          closeButtonEl.setAttribute("aria-label", localizedCloseString);
        }
        if (this.element.hasAttribute("data-title")) {
          titleEl.textContent = this.element.getAttribute("data-title");
        }
        if (isPageAttachmentUiV2ExperimentOn(this.win)) {
          var titleAndCloseWrapperEl = this.headerEl_.appendChild(htmlFor(this.element)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteralLoose4(['\n            <div class="i-amphtml-story-draggable-drawer-header-title-and-close"></div>']))));
          titleAndCloseWrapperEl.appendChild(closeButtonEl);
          titleAndCloseWrapperEl.appendChild(titleEl);
        } else {
          this.headerEl_.appendChild(closeButtonEl);
          this.headerEl_.appendChild(titleEl);
        }
        var templateEl = this.element.querySelector(".i-amphtml-story-draggable-drawer");
        while (this.element.firstChild && this.element.firstChild !== templateEl) {
          this.contentEl_.appendChild(this.element.firstChild);
        }
        toggle(dev().assertElement(this.containerEl_), true);
      }
    }, {
      key: "buildRemote_",
      value: function buildRemote_() {
        this.setDragCap_(DRAG_CAP_PX);
        this.setOpenThreshold_(OPEN_THRESHOLD_PX);
        this.headerEl_.classList.add("i-amphtml-story-draggable-drawer-header-attachment-remote");
        this.element.classList.add("i-amphtml-story-page-attachment-remote");
        var link = htmlFor(this.element)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteralLoose4(['\n    <a class="i-amphtml-story-page-attachment-remote-content" target="_blank">\n      <span class="i-amphtml-story-page-attachment-remote-title"></span>\n      <span class="i-amphtml-story-page-attachment-remote-icon"></span>\n    </a>'])));
        link.setAttribute("href", this.element.getAttribute("href"));
        this.contentEl_.appendChild(link);
        this.contentEl_.querySelector(".i-amphtml-story-page-attachment-remote-title").textContent = this.element.getAttribute("data-title") || Services.urlForDoc(this.element).getSourceOrigin(this.element.getAttribute("href") || this.element.querySelector("a").getAttribute("href"));
      }
    }, {
      key: "buildRemoteV2_",
      value: function buildRemoteV2_() {
        this.setDragCap_(DRAG_CAP_PX_V2);
        this.setOpenThreshold_(OPEN_THRESHOLD_PX);
        this.headerEl_.classList.add("i-amphtml-story-draggable-drawer-header-attachment-remote");
        this.element.classList.add("i-amphtml-story-page-attachment-remote");
        var link = htmlFor(this.element)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteralLoose4(['\n      <a class="i-amphtml-story-page-attachment-remote-content" target="_blank">\n        <span class="i-amphtml-story-page-attachment-remote-title"><span ref="openStringEl"></span><span ref="urlStringEl"></span></span>\n        <svg class="i-amphtml-story-page-attachment-remote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"></path></svg>\n      </a>'])));
        var hrefAttr = this.element.tagName === "AMP-STORY-PAGE-OUTLINK" ? this.element.querySelector("a").getAttribute("href") : this.element.getAttribute("href");
        link.setAttribute("href", hrefAttr);
        var _htmlRefs = htmlRefs(link), openStringEl = _htmlRefs.openStringEl, urlStringEl = _htmlRefs.urlStringEl;
        var openImgAttr = this.element.getAttribute("cta-image");
        if (openImgAttr && openImgAttr !== "none") {
          var ctaImgEl = this.win.document.createElement("div");
          ctaImgEl.classList.add("i-amphtml-story-page-attachment-remote-img");
          setImportantStyles(ctaImgEl, {
            "background-image": "url(" + openImgAttr + ")"
          });
          link.prepend(ctaImgEl);
        } else if (!openImgAttr) {
          var linkImage = buildOpenAttachmentElementLinkIcon(link);
          link.prepend(linkImage);
        }
        var localizationService = getLocalizationService(devAssert(this.element));
        if (localizationService) {
          var localizedOpenString = localizationService.getLocalizedString(LocalizedStringId.AMP_STORY_OPEN_OUTLINK_TEXT);
          openStringEl.textContent = localizedOpenString;
        }
        urlStringEl.textContent = hrefAttr;
        this.contentEl_.appendChild(link);
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this3 = this;
        _get4(_getPrototypeOf7(AmpStoryPageAttachment2.prototype), "initializeListeners_", this).call(this);
        var closeButtonEl = this.headerEl_.querySelector(".i-amphtml-story-page-attachment-close-button");
        if (closeButtonEl) {
          closeButtonEl.addEventListener("click", function() {
            return _this3.close_();
          }, true);
        }
        this.contentEl_.addEventListener("click", function(event) {
          var target = event.target;
          if (target.tagName.toLowerCase() === "a") {
            target.setAttribute("target", "_blank");
          }
        }, true);
        this.element.addEventListener("click", function(event) {
          if (event.target.tagName.toLowerCase() === "amp-story-page-attachment") {
            _this3.close_();
          }
        }, true);
        if (this.type_ === AttachmentType.OUTLINK) {
          var ampdoc = this.getAmpDoc();
          ampdoc.onVisibilityChanged(function() {
            if (ampdoc.isVisible() && _this3.state_ === DrawerState.OPEN) {
              _this3.closeInternal_(false);
            }
          });
        }
      }
    }, {
      key: "open",
      value: function open(shouldAnimate) {
        var _this4 = this;
        if (shouldAnimate === void 0) {
          shouldAnimate = true;
        }
        if (this.state_ === DrawerState.OPEN) {
          return;
        }
        _get4(_getPrototypeOf7(AmpStoryPageAttachment2.prototype), "open", this).call(this, shouldAnimate);
        this.storeService_.dispatch(Action.TOGGLE_PAGE_ATTACHMENT_STATE, true);
        this.storeService_.dispatch(Action.TOGGLE_SYSTEM_UI_IS_VISIBLE, false);
        if (this.type_ !== AttachmentType.OUTLINK) {
          var _extends22;
          var currentHistoryState = getState(this.win.history);
          var historyState = _extends5({}, currentHistoryState, (_extends22 = {}, _extends22[HistoryState.ATTACHMENT_PAGE_ID] = this.storeService_.get(StateProperty.CURRENT_PAGE_ID), _extends22));
          this.historyService_.push(function() {
            return _this4.closeInternal_();
          }, historyState);
        }
        this.analyticsService_.triggerEvent(StoryAnalyticsEvent.OPEN, this.element);
        this.analyticsService_.triggerEvent(StoryAnalyticsEvent.PAGE_ATTACHMENT_ENTER);
        if (this.type_ === AttachmentType.OUTLINK) {
          if (isPageAttachmentUiV2ExperimentOn(this.win) || this.element.parentElement.querySelector("amp-story-page-outlink")) {
            this.openRemoteV2_();
          } else {
            this.openRemote_();
          }
        }
      }
    }, {
      key: "openRemoteV2_",
      value: function openRemoteV2_() {
        var _this5 = this;
        var programaticallyClickOnTarget = function programaticallyClickOnTarget2() {
          var _this5$element$parent, _this5$element$parent2;
          var pageOutlinkChild = (_this5$element$parent = _this5.element.parentElement.querySelector("amp-story-page-outlink")) == null ? void 0 : _this5$element$parent.querySelector("a");
          var pageAttachmentChild = (_this5$element$parent2 = _this5.element.parentElement) == null ? void 0 : _this5$element$parent2.querySelector(".i-amphtml-story-page-open-attachment-host").shadowRoot.querySelector("a.i-amphtml-story-page-open-attachment");
          if (pageOutlinkChild) {
            pageOutlinkChild.click();
          } else if (pageAttachmentChild) {
            triggerClickFromLightDom(pageAttachmentChild, _this5.element);
          }
        };
        var isMobileUI = this.storeService_.get(StateProperty.UI_STATE) === UIType.MOBILE;
        if (!isMobileUI) {
          programaticallyClickOnTarget();
        } else {
          Services.timerFor(this.win).delay(function() {
            programaticallyClickOnTarget();
          }, POST_TAP_ANIMATION_DURATION);
        }
      }
    }, {
      key: "openRemote_",
      value: function openRemote_() {
        var _this6 = this;
        var animationEl = this.win.document.createElement("div");
        animationEl.classList.add("i-amphtml-story-page-attachment-expand");
        var storyEl = closest(this.element, function(el) {
          return el.tagName === "AMP-STORY";
        });
        this.mutateElement(function() {
          storyEl.appendChild(animationEl);
        }).then(function() {
          _this6.win.setTimeout(function() {
            var clickTarget = _this6.element.parentElement.querySelector(".i-amphtml-story-page-open-attachment-host").shadowRoot.querySelector("a.i-amphtml-story-page-open-attachment");
            triggerClickFromLightDom(clickTarget, _this6.element);
          });
        }, 50);
      }
    }, {
      key: "close_",
      value: function close_() {
        switch (this.state_) {
          case DrawerState.OPEN:
          case DrawerState.DRAGGING_TO_CLOSE:
            this.historyService_.goBack();
            break;
          case DrawerState.DRAGGING_TO_OPEN:
            this.closeInternal_();
            break;
        }
      }
    }, {
      key: "closeInternal_",
      value: function closeInternal_(shouldAnimate) {
        if (shouldAnimate === void 0) {
          shouldAnimate = true;
        }
        if (this.state_ === DrawerState.CLOSED) {
          return;
        }
        _get4(_getPrototypeOf7(AmpStoryPageAttachment2.prototype), "closeInternal_", this).call(this, shouldAnimate);
        this.storeService_.dispatch(Action.TOGGLE_PAGE_ATTACHMENT_STATE, false);
        this.storeService_.dispatch(Action.TOGGLE_SYSTEM_UI_IS_VISIBLE, true);
        var storyEl = closest(this.element, function(el) {
          return el.tagName === "AMP-STORY";
        });
        var animationEl = storyEl.querySelector(".i-amphtml-story-page-attachment-expand");
        if (animationEl) {
          this.mutateElement(function() {
            removeElement(dev().assertElement(animationEl));
          });
        }
        setHistoryState(this.win, HistoryState.ATTACHMENT_PAGE_ID, null);
        this.analyticsService_.triggerEvent(StoryAnalyticsEvent.CLOSE, this.element);
        this.analyticsService_.triggerEvent(StoryAnalyticsEvent.PAGE_ATTACHMENT_EXIT);
      }
    }]);
    return AmpStoryPageAttachment2;
  }(DraggableDrawer);

  // extensions/amp-story/1.0/amp-story-open-page-attachment.js
  var _templateObject6;
  var _templateObject25;
  var _templateObject34;
  var _templateObject43;
  var _templateObject53;
  var _templateObject62;
  var _templateObject7;
  function _taggedTemplateLiteralLoose5(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var CtaAccentElement = {
    TEXT: "text",
    BACKGROUND: "background"
  };
  var buildOldAttachmentElement = function buildOldAttachmentElement2(element) {
    return htmlFor(element)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose5(['\n    <a class="\n        i-amphtml-story-page-open-attachment i-amphtml-story-system-reset"\n        role="button" target="_top">\n      <span class="i-amphtml-story-page-open-attachment-icon">\n        <span class="i-amphtml-story-page-open-attachment-bar-left"></span>\n        <span class="i-amphtml-story-page-open-attachment-bar-right"></span>\n      </span>\n      <span class="i-amphtml-story-page-open-attachment-label"></span>\n    </a>'])));
  };
  var buildOpenInlineAttachmentElement = function buildOpenInlineAttachmentElement2(element) {
    return htmlFor(element)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose5(['\n    <a class="i-amphtml-story-page-open-attachment i-amphtml-story-system-reset i-amphtml-amp-story-page-attachment-ui-v2" role="button">\n      <div class="i-amphtml-story-inline-page-attachment-chip" ref="chipEl">\n        <div class="i-amphtml-story-inline-page-attachment-arrow"></div>\n      </div>\n    </a>'])));
  };
  var buildOpenOutlinkAttachmentElement = function buildOpenOutlinkAttachmentElement2(element) {
    return htmlFor(element)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteralLoose5(['\n    <a class="i-amphtml-story-page-open-attachment i-amphtml-amp-story-page-attachment-ui-v2" role="button" target="_top">\n      <svg class="i-amphtml-story-outlink-page-attachment-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 8" width="20px" height="8px"><path d="M18,7.7c-0.2,0-0.5-0.1-0.7-0.2l-7.3-4l-7.3,4C2,7.9,1.1,7.7,0.7,6.9c-0.4-0.7-0.1-1.6,0.6-2l8-4.4c0.5-0.2,1-0.2,1.5,0l8,4.4c0.7,0.4,1,1.3,0.6,2C19,7.4,18.5,7.7,18,7.7z"></path></svg>\n      <div class="i-amphtml-story-outlink-page-attachment-outlink-chip" ref="chipEl">\n        <span class="i-amphtml-story-page-attachment-label" ref="ctaLabelEl"></span>\n      </div>\n    </a>'])));
  };
  var buildOpenAttachmentElementLinkIcon = function buildOpenAttachmentElementLinkIcon2(element) {
    return htmlFor(element)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteralLoose5(['\n  <svg class="i-amphtml-story-page-open-attachment-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n    <path fill-opacity=".1" d="M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0z"></path>\n    <path d="M13.8 14.6c.1.1.2.3.2.5s-.1.3-.2.5L12.3 17c-.7.7-1.7 1.1-2.7 1.1-1 0-1.9-.4-2.7-1.1-.7-.7-1.1-1.7-1.1-2.7 0-1 .4-1.9 1.1-2.7l1.5-1.5c.2 0 .3-.1.5-.1s.3.1.5.2c.1.1.2.3.2.5s-.1.4-.2.5l-1.5 1.5c-.5.5-.7 1.1-.7 1.7 0 .6.3 1.3.7 1.7.5.5 1.1.7 1.7.7s1.3-.3 1.7-.7l1.5-1.5c.3-.3.7-.3 1 0zM17 7c-.7-.7-1.7-1.1-2.7-1.1-1 0-1.9.4-2.7 1.1l-1.5 1.5c0 .1-.1.3-.1.4 0 .2.1.3.2.5.1.1.3.2.5.2s.3-.1.5-.2l1.5-1.5c.5-.5 1.1-.7 1.7-.7.6 0 1.3.3 1.7.7.5.5.7 1.1.7 1.7 0 .6-.3 1.3-.7 1.7l-1.5 1.5c-.1.1-.2.3-.2.5s.1.3.2.5c.1.1.3.2.5.2s.3-.1.5-.2l1.5-1.5c.7-.7 1.1-1.7 1.1-2.7-.1-1-.5-1.9-1.2-2.6zm-7.9 7.2c0 .2.1.3.2.5.1.1.3.2.5.2s.4-.1.5-.2l4.5-4.5c.1-.1.2-.3.2-.5s-.1-.4-.2-.5c-.3-.2-.8-.2-1 .1l-4.5 4.5c-.1.1-.2.3-.2.4z"></path>\n  </svg>'])));
  };
  var renderPageAttachmentUI = function renderPageAttachmentUI2(pageEl, attachmentEl) {
    if (isPageAttachmentUiV2ExperimentOn(pageEl.getAmpDoc().win)) {
      var isOutlink = attachmentEl.tagName === "AMP-STORY-PAGE-OUTLINK" || attachmentEl.getAttribute("href");
      if (isOutlink) {
        return renderOutlinkPageAttachmentUI(pageEl, attachmentEl);
      } else {
        return renderInlinePageAttachmentUi(pageEl, attachmentEl);
      }
    }
    return renderOldPageAttachmentUI(pageEl, attachmentEl);
  };
  var renderOldPageAttachmentUI = function renderOldPageAttachmentUI2(pageEl, attachmentEl) {
    var openAttachmentEl = buildOldAttachmentElement(pageEl);
    var attachmentHref = attachmentEl.getAttribute("href");
    if (attachmentHref) {
      openAttachmentEl.setAttribute("href", attachmentHref);
    }
    var textEl = openAttachmentEl.querySelector(".i-amphtml-story-page-open-attachment-label");
    var openLabelAttr = attachmentEl.getAttribute("cta-text") || attachmentEl.getAttribute("data-cta-text");
    var openLabel = openLabelAttr && openLabelAttr.trim() || getLocalizationService(pageEl).getLocalizedString(LocalizedStringId.AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL);
    var attachmentTitle = attachmentEl.getAttribute("data-title");
    if (attachmentTitle) {
      openAttachmentEl.setAttribute("title", attachmentTitle);
    }
    textEl.textContent = openLabel;
    return openAttachmentEl;
  };
  var renderOutlinkPageAttachmentUI = function renderOutlinkPageAttachmentUI2(pageEl, attachmentEl) {
    var _pageEl$querySelector;
    var openAttachmentEl = buildOpenOutlinkAttachmentElement(pageEl);
    var anchorChild = (_pageEl$querySelector = pageEl.querySelector("amp-story-page-outlink")) == null ? void 0 : _pageEl$querySelector.querySelector("a");
    var attachmentHref = (anchorChild == null ? void 0 : anchorChild.getAttribute("href")) || attachmentEl.getAttribute("href");
    if (attachmentHref) {
      openAttachmentEl.setAttribute("href", attachmentHref);
    }
    var attachmentTitle = (anchorChild == null ? void 0 : anchorChild.getAttribute("title")) || attachmentEl.getAttribute("title");
    if (attachmentTitle) {
      openAttachmentEl.setAttribute("title", attachmentTitle);
    }
    var _htmlRefs = htmlRefs(openAttachmentEl), chipEl = _htmlRefs.chipEl, ctaLabelEl = _htmlRefs.ctaLabelEl;
    var themeAttribute = attachmentEl.getAttribute("theme");
    if (themeAttribute) {
      themeAttribute = themeAttribute.toLowerCase();
    }
    openAttachmentEl.setAttribute("theme", themeAttribute);
    if (themeAttribute === AttachmentTheme.CUSTOM) {
      setCustomThemeStyles(attachmentEl, openAttachmentEl);
    }
    var openLabelAttr = (anchorChild == null ? void 0 : anchorChild.textContent) || attachmentEl.getAttribute("cta-text") || attachmentEl.getAttribute("data-cta-text");
    var openLabel = openLabelAttr ? openLabelAttr.trim() : getLocalizationService(pageEl).getLocalizedString(LocalizedStringId.AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL);
    ctaLabelEl.textContent = openLabel;
    openAttachmentEl.setAttribute("aria-label", openLabel);
    var openImgAttr = attachmentEl.getAttribute("cta-image");
    if (openImgAttr && openImgAttr !== "none") {
      var ctaImgEl = htmlFor(chipEl)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteralLoose5(['\n      <div class="i-amphtml-story-outlink-page-attachment-img"></div>'])));
      setImportantStyles(ctaImgEl, {
        "background-image": "url(" + openImgAttr + ")"
      });
      chipEl.prepend(ctaImgEl);
    } else if (!openImgAttr) {
      var linkImage = buildOpenAttachmentElementLinkIcon(attachmentEl);
      chipEl.prepend(linkImage);
    }
    return openAttachmentEl;
  };
  var renderInlinePageAttachmentUi = function renderInlinePageAttachmentUi2(pageEl, attachmentEl) {
    var openAttachmentEl = buildOpenInlineAttachmentElement(pageEl);
    var theme = attachmentEl.getAttribute("theme");
    if (theme && AttachmentTheme.DARK === theme.toLowerCase()) {
      openAttachmentEl.setAttribute("theme", AttachmentTheme.DARK);
    }
    var openLabelAttr = attachmentEl.getAttribute("cta-text") || attachmentEl.getAttribute("data-cta-text");
    var openLabel = openLabelAttr && openLabelAttr.trim() || getLocalizationService(pageEl).getLocalizedString(LocalizedStringId.AMP_STORY_PAGE_ATTACHMENT_OPEN_LABEL);
    openAttachmentEl.setAttribute("aria-label", openLabel);
    if (openLabel !== "none") {
      var textEl = htmlFor(openAttachmentEl)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteralLoose5(['\n      <span class="i-amphtml-story-page-attachment-label"></span>'])));
      textEl.textContent = openLabel;
      openAttachmentEl.appendChild(textEl);
    }
    var _htmlRefs2 = htmlRefs(openAttachmentEl), chipEl = _htmlRefs2.chipEl;
    var makeImgElWithBG = function makeImgElWithBG2(openImgAttr3) {
      var ctaImgEl = htmlFor(chipEl)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose5(['\n      <div class="i-amphtml-story-inline-page-attachment-img"></div>'])));
      setImportantStyles(ctaImgEl, {
        "background-image": "url(" + openImgAttr3 + ")"
      });
      return ctaImgEl;
    };
    var openImgAttr2 = attachmentEl.getAttribute("cta-image-2");
    if (openImgAttr2) {
      chipEl.prepend(makeImgElWithBG(openImgAttr2));
    }
    var openImgAttr = attachmentEl.getAttribute("cta-image");
    if (openImgAttr) {
      chipEl.prepend(makeImgElWithBG(openImgAttr));
    }
    return openAttachmentEl;
  };
  var setCustomThemeStyles = function setCustomThemeStyles2(attachmentEl, openAttachmentEl) {
    var accentColor = attachmentEl.getAttribute("cta-accent-color");
    var contrastColor = null;
    if (accentColor) {
      setImportantStyles(attachmentEl, {
        "background-color": attachmentEl.getAttribute("cta-accent-color")
      });
      var win = toWin(attachmentEl.ownerDocument.defaultView);
      var styles = computedStyle(win, attachmentEl);
      var rgb = getRGBFromCssColorValue(styles["background-color"]);
      contrastColor = getTextColorForRGB(rgb);
      setImportantStyles(attachmentEl, {
        "background-color": ""
      });
    }
    if (attachmentEl.getAttribute("cta-accent-element") === CtaAccentElement.BACKGROUND) {
      setImportantStyles(openAttachmentEl, {
        "--i-amphtml-outlink-cta-background-color": accentColor,
        "--i-amphtml-outlink-cta-text-color": contrastColor
      });
      setImportantStyles(attachmentEl, {
        "--i-amphtml-outlink-cta-background-color": accentColor,
        "--i-amphtml-outlink-cta-text-color": contrastColor
      });
    } else {
      setImportantStyles(openAttachmentEl, {
        "--i-amphtml-outlink-cta-background-color": contrastColor,
        "--i-amphtml-outlink-cta-text-color": accentColor
      });
      setImportantStyles(attachmentEl, {
        "--i-amphtml-outlink-cta-background-color": contrastColor,
        "--i-amphtml-outlink-cta-text-color": accentColor
      });
    }
  };

  // extensions/amp-story/1.0/semantic-render.js
  function renderPageDescription(page, videos) {
    var descriptionElId = "i-amphtml-story-" + page.element.id + "-description";
    var descriptionEl = createElementWithAttributes(page.win.document, "div", dict({
      "class": "i-amphtml-story-page-description",
      "id": descriptionElId
    }));
    var append = function append2(el) {
      page.mutateElement(function() {
        descriptionEl.appendChild(el);
        if (descriptionEl.parentNode) {
          return;
        }
        page.element.parentElement.insertBefore(descriptionEl, page.element.nextElementSibling);
        if (!page.element.getAttribute("aria-labelledby")) {
          page.element.setAttribute("aria-labelledby", descriptionElId);
        }
      });
    };
    var addTagToDescriptionEl = function addTagToDescriptionEl2(tagName, text) {
      if (!text) {
        return;
      }
      var el = page.win.document.createElement(tagName);
      el.textContent = text;
      append(el);
    };
    addTagToDescriptionEl("h2", page.element.getAttribute("title"));
    videos.forEach(function(videoEl) {
      addTagToDescriptionEl("p", videoEl.getAttribute("alt"));
      addTagToDescriptionEl("p", videoEl.getAttribute("title"));
      addTagToDescriptionEl("p", videoEl.getAttribute("aria-label"));
      fetchCaptions(page, videoEl).then(function(text) {
        addTagToDescriptionEl("p", text);
      });
    });
  }
  function fetchCaptions(page, videoEl) {
    var track = videoEl.querySelector("track[default]") || videoEl.querySelector("track");
    if (!track || !track.src) {
      return resolvedPromise();
    }
    return Services.xhrFor(page.win).fetchText(track.src, {
      mode: "cors"
    }).then(function(response) {
      if (!response.ok) {
        return;
      }
      return response.text().then(extractTextContent);
    });
  }
  function extractTextContent(text) {
    text = text.trim();
    if (text.startsWith("WEBVTT")) {
      return extractTextContentWebVtt(text);
    }
    if (includes(text, "http://www.w3.org/ns/ttml")) {
      return extractTextContentTtml(text);
    }
    return "";
  }
  function extractTextContentTtml(text) {
    try {
      var doc = new DOMParser().parseFromString(text, "text/xml");
      return doc.querySelector("body").textContent.replace(/[\s\n\r]+/g, " ").trim();
    } catch (e) {
      dev().error("TTML", e.message);
    }
    return "";
  }
  function extractTextContentWebVtt(text) {
    var queue = /^\d\d\:\d\d/;
    var seenQueue = false;
    text = text.split(/[\n\r]+/).filter(function(line) {
      var isQueue = queue.test(line);
      seenQueue = seenQueue || isQueue;
      if (!seenQueue || isQueue) {
        return false;
      }
      return !/^NOTE\s+/.test(line);
    }).map(function(line) {
      return line.replace(/^- /, "");
    }).join(" ");
    var div = document.createElement("div");
    div.innerHTML = text;
    return div.textContent;
  }

  // extensions/amp-story/1.0/audio.js
  var BACKGROUND_AUDIO_ELEMENT_CLASS_NAME = "i-amphtml-story-background-audio";
  function upgradeBackgroundAudio(element, loop) {
    if (loop === void 0) {
      loop = true;
    }
    if (!element.hasAttribute("background-audio")) {
      return null;
    }
    var audioEl = element.ownerDocument.createElement("audio");
    var audioSrc = Services.urlForDoc(element).assertHttpsUrl(element.getAttribute("background-audio"), element);
    audioEl.setAttribute("src", audioSrc);
    audioEl.setAttribute("preload", "auto");
    if (loop) {
      audioEl.setAttribute("loop", "");
    }
    audioEl.setAttribute("autoplay", "");
    audioEl.setAttribute("muted", "");
    audioEl.muted = true;
    audioEl.classList.add(BACKGROUND_AUDIO_ELEMENT_CLASS_NAME);
    element.appendChild(audioEl);
    return audioEl;
  }

  // extensions/amp-story/1.0/amp-story-page.js
  var _templateObject8;
  var _templateObject26;
  function _classCallCheck24(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties23(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass23(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties23(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties23(Constructor, staticProps);
    return Constructor;
  }
  function _inherits8(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf8(subClass, superClass);
  }
  function _setPrototypeOf8(o, p) {
    _setPrototypeOf8 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf8(o, p);
  }
  function _createSuper8(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct8();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf8(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf8(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn8(this, result);
    };
  }
  function _possibleConstructorReturn8(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized8(self2);
  }
  function _assertThisInitialized8(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct8() {
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
  function _getPrototypeOf8(o) {
    _getPrototypeOf8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf8(o);
  }
  function _taggedTemplateLiteralLoose6(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var PAGE_LOADED_CLASS_NAME = "i-amphtml-story-page-loaded";
  var Selectors = {
    ALL_AMP_MEDIA: "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video, amp-story-grid-layer amp-img, amp-story-grid-layer amp-anim",
    ALL_AMP_VIDEO: "amp-story-grid-layer amp-video",
    ALL_IFRAMED_MEDIA: "audio, video",
    ALL_PLAYBACK_AMP_MEDIA: "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video",
    ALL_PLAYBACK_MEDIA: "> audio, amp-story-grid-layer audio, amp-story-grid-layer video",
    ALL_VIDEO: "amp-story-grid-layer video",
    ALL_TABBABLE: "a, amp-twitter > iframe"
  };
  var EMBEDDED_COMPONENTS_SELECTORS = Object.keys(EXPANDABLE_COMPONENTS).join(", ");
  var INTERACTIVE_EMBEDDED_COMPONENTS_SELECTORS2 = Object.values(expandableElementsSelectors()).join(",");
  var RESIZE_TIMEOUT_MS = 1e3;
  var TAG7 = "amp-story-page";
  var ADVERTISEMENT_ATTR_NAME = "ad";
  var REWIND_TIMEOUT_MS = 350;
  var DEFAULT_PREVIEW_AUTO_ADVANCE_DURATION = "2s";
  var VIDEO_PREVIEW_AUTO_ADVANCE_DURATION = "5s";
  var VIDEO_MINIMUM_AUTO_ADVANCE_DURATION_S = 2;
  var buildPlayMessageElement = function buildPlayMessageElement2(element) {
    return htmlFor(element)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose6([`
      <button role="button" class="i-amphtml-story-page-play-button i-amphtml-story-system-reset">
        <span class="i-amphtml-story-page-play-label"></span>
        <span class='i-amphtml-story-page-play-icon'></span>
      </button>`])));
  };
  var buildErrorMessageElement = function buildErrorMessageElement2(element) {
    return htmlFor(element)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose6([`
      <div class="i-amphtml-story-page-error i-amphtml-story-system-reset">
        <span class="i-amphtml-story-page-error-label"></span>
        <span class='i-amphtml-story-page-error-icon'></span>
      </div>`])));
  };
  var PageState = {
    NOT_ACTIVE: 0,
    PLAYING: 1,
    PAUSED: 2
  };
  var NavigationDirection = {
    NEXT: "next",
    PREVIOUS: "previous"
  };
  function debounceEmbedResize(win, page, mutator) {
    return debounce(win, function(el, unlisten) {
      AmpStoryEmbeddedComponent.prepareForAnimation(page, dev().assertElement(el), mutator);
      if (unlisten) {
        unlisten();
      }
    }, RESIZE_TIMEOUT_MS);
  }
  var AmpStoryPage = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits8(AmpStoryPage2, _AMP$BaseElement);
    var _super = _createSuper8(AmpStoryPage2);
    function AmpStoryPage2(element) {
      var _this;
      _classCallCheck24(this, AmpStoryPage2);
      _this = _super.call(this, element);
      _this.animationManager_ = null;
      _this.advancement_ = null;
      _this.debounceToggleLoadingSpinner_ = debounce(_this.win, function(isActive) {
        return _this.toggleLoadingSpinner_(!!isActive);
      }, 100);
      _this.loadingSpinner_ = null;
      _this.playMessageEl_ = null;
      _this.errorMessageEl_ = null;
      _this.openAttachmentEl_ = null;
      _this.mutator_ = Services.mutatorForDoc(getAmpdoc(_this.win.document));
      var deferred = new Deferred();
      _this.mediaPerformanceMetricsService_ = getMediaPerformanceMetricsService(_this.win);
      _this.performanceTrackedVideos_ = [];
      _this.registerAllMediaPromise_ = null;
      _this.mediaPoolPromise_ = deferred.promise;
      _this.mediaPoolResolveFn_ = deferred.resolve;
      _this.mediaPoolRejectFn_ = deferred.reject;
      _this.state_ = PageState.NOT_ACTIVE;
      _this.storeService_ = getStoreService(_this.win);
      _this.cssVariablesStyleEl_ = null;
      _this.layoutBox_ = null;
      _this.unlisteners_ = [];
      _this.timer_ = Services.timerFor(_this.win);
      _this.backgroundAudioDeferred_ = new Deferred();
      _this.isBotUserAgent_ = Services.platformFor(_this.win).isBot();
      _this.playAudioElementFromTimestamp_ = null;
      return _this;
    }
    _createClass23(AmpStoryPage2, [{
      key: "maybeCreateAnimationManager_",
      value: function maybeCreateAnimationManager_() {
        if (this.animationManager_) {
          return;
        }
        if (prefersReducedMotion(this.win)) {
          return;
        }
        if (!hasAnimations(this.element)) {
          return;
        }
        this.animationManager_ = AnimationManager.create(this.element, this.getAmpDoc(), this.getAmpDoc().getUrl());
      }
    }, {
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.delegateVideoAutoplay();
        this.markMediaElementsWithPreload_();
        this.initializeMediaPool_();
        this.maybeCreateAnimationManager_();
        this.maybeSetPreviewDuration_();
        this.maybeSetStoryNextUp_();
        this.advancement_ = AdvancementConfig.forElement(this.win, this.element);
        this.advancement_.addPreviousListener(function() {
          return _this2.previous();
        });
        this.advancement_.addAdvanceListener(function() {
          return _this2.next(true);
        });
        this.advancement_.addProgressListener(function(progress) {
          return _this2.emitProgress_(progress);
        });
        this.setDescendantCssTextStyles_();
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          return _this2.onUIStateUpdate_(uiState);
        }, true);
        this.setPageDescription_();
        this.element.setAttribute("role", "region");
        this.initializeImgAltTags_();
        this.initializeTabbableElements_();
      }
    }, {
      key: "maybeSetPreviewDuration_",
      value: function maybeSetPreviewDuration_() {
        if (this.storeService_.get(StateProperty.PREVIEW_STATE)) {
          var videos = this.getAllVideos_();
          var autoAdvanceAttr = videos.length > 0 ? VIDEO_PREVIEW_AUTO_ADVANCE_DURATION : DEFAULT_PREVIEW_AUTO_ADVANCE_DURATION;
          addAttributesToElement(this.element, dict({
            "auto-advance-after": autoAdvanceAttr
          }));
        }
      }
    }, {
      key: "maybeSetStoryNextUp_",
      value: function maybeSetStoryNextUp_() {
        var autoAdvanceAttr = this.element.getAttribute("auto-advance-after");
        var storyNextUpParam = Services.viewerForDoc(this.element).getParam("storyNextUp");
        if (autoAdvanceAttr !== null || storyNextUpParam === null) {
          return;
        }
        addAttributesToElement(this.element, dict({
          "auto-advance-after": storyNextUpParam
        }));
        this.listenAndUpdateAutoAdvanceDuration_();
      }
    }, {
      key: "listenAndUpdateAutoAdvanceDuration_",
      value: function listenAndUpdateAutoAdvanceDuration_() {
        var _this3 = this;
        var video = this.getFirstAmpVideo_();
        if (video === null) {
          return;
        }
        whenUpgradedToCustomElement(video).then(function() {
          return video.getImpl();
        }).then(function(videoImpl) {
          var videoDuration = videoImpl.getDuration();
          if (!isNaN(videoDuration)) {
            _this3.maybeUpdateAutoAdvanceTime_(videoDuration);
            return;
          }
          listenOnce(video, VideoEvents.LOADEDMETADATA, function() {
            _this3.maybeUpdateAutoAdvanceTime_(videoImpl.getDuration());
          });
        });
      }
    }, {
      key: "maybeUpdateAutoAdvanceTime_",
      value: function maybeUpdateAutoAdvanceTime_(duration) {
        if (duration < VIDEO_MINIMUM_AUTO_ADVANCE_DURATION_S || !this.advancement_ || !this.advancement_.updateTimeDelay) {
          return;
        }
        this.advancement_.updateTimeDelay(duration + "s");
        addAttributesToElement(this.element, dict({
          "auto-advance-after": duration + "s"
        }));
      }
    }, {
      key: "getFirstAmpVideo_",
      value: function getFirstAmpVideo_() {
        var videos = this.getAllAmpVideos_();
        return videos.length === 0 ? null : videos[0];
      }
    }, {
      key: "delegateVideoAutoplay",
      value: function delegateVideoAutoplay() {
        iterateCursor(this.element.querySelectorAll("amp-video"), delegateAutoplay);
      }
    }, {
      key: "initializeMediaPool_",
      value: function initializeMediaPool_() {
        var _this4 = this;
        var storyEl = dev().assertElement(closestAncestorElementBySelector(this.element, "amp-story"), "amp-story-page must be a descendant of amp-story.");
        whenUpgradedToCustomElement(storyEl).then(function() {
          return storyEl.getImpl();
        }).then(function(storyImpl) {
          return _this4.mediaPoolResolveFn_(MediaPool.for(storyImpl));
        }, function(reason) {
          return _this4.mediaPoolRejectFn_(reason);
        });
      }
    }, {
      key: "markMediaElementsWithPreload_",
      value: function markMediaElementsWithPreload_() {
        var mediaSet = this.element.querySelectorAll("amp-audio, amp-video");
        Array.prototype.forEach.call(mediaSet, function(mediaItem) {
          mediaItem.setAttribute("preload", "auto");
        });
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.CONTAINER;
      }
    }, {
      key: "setState",
      value: function setState(state) {
        var _this$animationManage2;
        switch (state) {
          case PageState.NOT_ACTIVE:
            this.element.removeAttribute("active");
            if (this.openAttachmentEl_) {
              this.openAttachmentEl_.removeAttribute("active");
            }
            this.pause_();
            this.state_ = state;
            break;
          case PageState.PLAYING:
            if (this.state_ === PageState.NOT_ACTIVE) {
              this.element.setAttribute("active", "");
              this.resume_();
              if (this.openAttachmentEl_) {
                this.openAttachmentEl_.setAttribute("active", "");
              }
            }
            if (this.state_ === PageState.PAUSED) {
              var _this$animationManage;
              this.advancement_.start();
              this.playAllMedia_();
              (_this$animationManage = this.animationManager_) == null ? void 0 : _this$animationManage.resumeAll();
            }
            this.state_ = state;
            break;
          case PageState.PAUSED:
            this.advancement_.stop(true);
            this.pauseAllMedia_(false);
            (_this$animationManage2 = this.animationManager_) == null ? void 0 : _this$animationManage2.pauseAll();
            this.state_ = state;
            break;
          default:
            dev().warn(TAG7, "PageState " + state + " does not exist");
            break;
        }
      }
    }, {
      key: "pause_",
      value: function pause_() {
        var _this5 = this, _this$animationManage3;
        this.advancement_.stop(false);
        this.stopMeasuringAllVideoPerformance_();
        this.stopListeningToVideoEvents_();
        this.toggleErrorMessage_(false);
        this.togglePlayMessage_(false);
        this.playAudioElementFromTimestamp_ = null;
        if (this.storeService_.get(StateProperty.UI_STATE) === UIType.DESKTOP_PANELS) {
          this.pauseAllMedia_(false);
          this.timer_.delay(function() {
            _this5.rewindAllMedia_();
          }, REWIND_TIMEOUT_MS);
        } else {
          this.pauseAllMedia_(true);
        }
        if (!this.storeService_.get(StateProperty.MUTED_STATE)) {
          this.muteAllMedia();
        }
        (_this$animationManage3 = this.animationManager_) == null ? void 0 : _this$animationManage3.cancelAll();
      }
    }, {
      key: "resume_",
      value: function resume_() {
        var _this6 = this;
        var registerAllPromise = this.registerAllMedia_();
        if (this.isActive()) {
          registerAllPromise.then(function() {
            _this6.signals().whenSignal(CommonSignals.LOAD_END).then(function() {
              if (_this6.state_ == PageState.PLAYING) {
                _this6.advancement_.start();
              }
            });
            _this6.preloadAllMedia_().then(function() {
              _this6.startMeasuringAllVideoPerformance_();
              _this6.startListeningToVideoEvents_();
              _this6.playAllMedia_().then(function() {
                if (!_this6.storeService_.get(StateProperty.MUTED_STATE)) {
                  _this6.unmuteAllMedia();
                }
              });
            });
          });
          this.maybeStartAnimations_();
          this.checkPageHasAudio_();
          this.checkPageHasElementWithPlayback_();
          this.findAndPrepareEmbeddedComponents_();
        }
        this.reportDevModeErrors_();
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        var _this7 = this;
        var loop = this.element.getAttribute("id") !== this.element.getAttribute("auto-advance-after");
        upgradeBackgroundAudio(this.element, loop);
        this.backgroundAudioDeferred_.resolve();
        this.muteAllMedia();
        this.getViewport().onResize(debounce(this.win, function() {
          return _this7.onResize_();
        }, RESIZE_TIMEOUT_MS));
        this.renderOpenAttachmentUI_();
        return Promise.all([this.beforeVisible(), this.waitForMediaLayout_(), this.mediaPoolPromise_]);
      }
    }, {
      key: "onLayoutMeasure",
      value: function onLayoutMeasure() {
        var _this8 = this;
        var layoutBox = this.getLayoutSize();
        if (!isPrerenderActivePage(this.element) || this.layoutBox_ && this.layoutBox_.width === layoutBox.width && this.layoutBox_.height === layoutBox.height) {
          return;
        }
        this.layoutBox_ = layoutBox;
        return this.getVsync().runPromise({
          measure: function measure(state) {
            var uiState = _this8.storeService_.get(StateProperty.UI_STATE);
            var _ref = uiState === UIType.DESKTOP_PANELS ? {
              height: _this8.element.clientHeight,
              width: _this8.element.clientWidth
            } : layoutBox, height = _ref.height, width = _ref.width;
            state.height = height;
            state.width = width;
            state.vh = height / 100;
            state.vw = width / 100;
            state.fiftyVw = Math.round(width / 2);
            state.vmin = Math.min(state.vh, state.vw);
            state.vmax = Math.max(state.vh, state.vw);
          },
          mutate: function mutate(state) {
            var height = state.height, width = state.width;
            if (state.vh === 0 && state.vw === 0) {
              return;
            }
            _this8.storeService_.dispatch(Action.SET_PAGE_SIZE, {
              height,
              width
            });
            if (!_this8.cssVariablesStyleEl_) {
              var doc = _this8.win.document;
              _this8.cssVariablesStyleEl_ = doc.createElement("style");
              _this8.cssVariablesStyleEl_.setAttribute("type", "text/css");
              doc.head.appendChild(_this8.cssVariablesStyleEl_);
            }
            _this8.cssVariablesStyleEl_.textContent = ":root {" + ("--story-page-vh: " + px(state.vh) + ";") + ("--story-page-vw: " + px(state.vw) + ";") + ("--story-page-vmin: " + px(state.vmin) + ";") + ("--story-page-vmax: " + px(state.vmax) + ";") + ("--i-amphtml-story-page-50vw: " + px(state.fiftyVw) + ";") + "}";
          }
        }, {});
      }
    }, {
      key: "onResize_",
      value: function onResize_() {
        this.findAndPrepareEmbeddedComponents_(true);
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        if (uiState === UIType.VERTICAL) {
          this.maybeFinishAnimations_();
        }
      }
    }, {
      key: "beforeVisible",
      value: function beforeVisible() {
        return this.maybeApplyFirstAnimationFrame();
      }
    }, {
      key: "waitForMediaLayout_",
      value: function waitForMediaLayout_() {
        var _this9 = this;
        var mediaSet = toArray(this.getMediaBySelector_(Selectors.ALL_AMP_MEDIA));
        var mediaPromises = mediaSet.map(function(mediaEl) {
          return new Promise(function(resolve) {
            switch (mediaEl.tagName.toLowerCase()) {
              case "amp-anim":
              case "amp-img":
              case "amp-story-360":
                if (mediaEl.hasAttribute("fallback")) {
                  resolve();
                  return;
                }
                whenUpgradedToCustomElement(mediaEl).then(function(el) {
                  return el.signals().whenSignal(CommonSignals.LOAD_END);
                }).then(resolve, resolve);
                break;
              case "amp-audio":
              case "amp-video":
                if (mediaEl.readyState >= 2) {
                  resolve();
                  return;
                }
                mediaEl.addEventListener("canplay", resolve, true);
                break;
              default:
                resolve();
            }
            mediaEl.addEventListener("error", resolve, true);
          });
        });
        return Promise.all(mediaPromises).then(function() {
          return _this9.markPageAsLoaded_();
        });
      }
    }, {
      key: "waitForPlaybackMediaLayout_",
      value: function waitForPlaybackMediaLayout_() {
        var mediaSet = toArray(this.getMediaBySelector_(Selectors.ALL_PLAYBACK_AMP_MEDIA));
        var mediaPromises = mediaSet.map(function(mediaEl) {
          return new Promise(function(resolve) {
            switch (mediaEl.tagName.toLowerCase()) {
              case "amp-audio":
              case "amp-video":
                var signal = mediaEl.getAttribute("layout") === Layout.NODISPLAY ? CommonSignals.BUILT : CommonSignals.LOAD_END;
                whenUpgradedToCustomElement(mediaEl).then(function(el) {
                  return el.signals().whenSignal(signal);
                }).then(resolve, resolve);
                break;
              case "audio":
              default:
                resolve();
            }
          });
        });
        if (this.element.hasAttribute("background-audio")) {
          mediaPromises.push(this.backgroundAudioDeferred_.promise);
        }
        return Promise.all(mediaPromises);
      }
    }, {
      key: "findAndPrepareEmbeddedComponents_",
      value: function findAndPrepareEmbeddedComponents_(forceResize) {
        if (forceResize === void 0) {
          forceResize = false;
        }
        this.addClickShieldToEmbeddedComponents_();
        this.resizeInteractiveEmbeddedComponents_(forceResize);
        this.buildAffiliateLinks_();
      }
    }, {
      key: "addClickShieldToEmbeddedComponents_",
      value: function addClickShieldToEmbeddedComponents_() {
        var componentEls = toArray(scopedQuerySelectorAll(this.element, EMBEDDED_COMPONENTS_SELECTORS));
        if (componentEls.length <= 0) {
          return;
        }
        this.mutateElement(function() {
          componentEls.forEach(function(el) {
            el.classList.add("i-amphtml-embedded-component");
          });
        });
      }
    }, {
      key: "resizeInteractiveEmbeddedComponents_",
      value: function resizeInteractiveEmbeddedComponents_(forceResize) {
        var _this10 = this;
        toArray(scopedQuerySelectorAll(this.element, INTERACTIVE_EMBEDDED_COMPONENTS_SELECTORS2)).forEach(function(el) {
          var debouncePrepareForAnimation = debounceEmbedResize(_this10.win, _this10.element, _this10.mutator_);
          if (forceResize) {
            debouncePrepareForAnimation(el, null);
          } else if (!el.hasAttribute(EMBED_ID_ATTRIBUTE_NAME)) {
            var unlisten = listen(el, AmpEvents.SIZE_CHANGED, function() {
              debouncePrepareForAnimation(el, unlisten);
            });
            debouncePrepareForAnimation(el, null);
          }
        });
      }
    }, {
      key: "buildAffiliateLinks_",
      value: function buildAffiliateLinks_() {
        var _this11 = this;
        toArray(scopedQuerySelectorAll(this.element, AFFILIATE_LINK_SELECTOR)).forEach(function(el) {
          var link = new AmpStoryAffiliateLink(_this11.win, el);
          link.build();
        });
      }
    }, {
      key: "markPageAsLoaded_",
      value: function markPageAsLoaded_() {
        var _this12 = this;
        dispatch(this.win, this.element, EventType.PAGE_LOADED, void 0, {
          bubbles: true
        });
        this.mutateElement(function() {
          _this12.element.classList.add(PAGE_LOADED_CLASS_NAME);
        });
      }
    }, {
      key: "getAllMedia_",
      value: function getAllMedia_() {
        return this.getMediaBySelector_(Selectors.ALL_PLAYBACK_MEDIA);
      }
    }, {
      key: "getAllVideos_",
      value: function getAllVideos_() {
        return this.getMediaBySelector_(Selectors.ALL_VIDEO);
      }
    }, {
      key: "getAllAmpVideos_",
      value: function getAllAmpVideos_() {
        return this.getMediaBySelector_(Selectors.ALL_AMP_VIDEO);
      }
    }, {
      key: "getMediaBySelector_",
      value: function getMediaBySelector_(selector) {
        var iframe = this.element.querySelector("iframe");
        var fie = iframe && getFriendlyIframeEmbedOptional(iframe);
        var mediaSet = [];
        iterateCursor(scopedQuerySelectorAll(this.element, selector), function(el) {
          return mediaSet.push(el);
        });
        if (fie) {
          iterateCursor(scopedQuerySelectorAll(fie.win.document.body, Selectors.ALL_IFRAMED_MEDIA), function(el) {
            return mediaSet.push(el);
          });
        }
        return mediaSet;
      }
    }, {
      key: "isAutoplaySupported_",
      value: function isAutoplaySupported_() {
        return isAutoplaySupported(this.win);
      }
    }, {
      key: "whenAllMediaElements_",
      value: function whenAllMediaElements_(callbackFn) {
        var mediaSet = toArray(this.getAllMedia_());
        return this.mediaPoolPromise_.then(function(mediaPool) {
          var promises = mediaSet.map(function(mediaEl) {
            return callbackFn(mediaPool, dev().assertElement(mediaEl));
          });
          return Promise.all(promises);
        });
      }
    }, {
      key: "pauseAllMedia_",
      value: function pauseAllMedia_(rewindToBeginning) {
        var _this13 = this;
        if (rewindToBeginning === void 0) {
          rewindToBeginning = false;
        }
        return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
          return _this13.pauseMedia_(mediaPool, mediaEl, rewindToBeginning);
        });
      }
    }, {
      key: "pauseMedia_",
      value: function pauseMedia_(mediaPool, mediaEl, rewindToBeginning) {
        if (this.isBotUserAgent_) {
          mediaEl.pause();
          return resolvedPromise();
        } else {
          return mediaPool.pause(mediaEl, rewindToBeginning);
        }
      }
    }, {
      key: "playAllMedia_",
      value: function playAllMedia_() {
        var _this14 = this;
        return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
          return _this14.playMedia_(mediaPool, mediaEl);
        });
      }
    }, {
      key: "playMedia_",
      value: function playMedia_(mediaPool, mediaEl) {
        var _this15 = this;
        if (this.isBotUserAgent_) {
          mediaEl.play();
          return resolvedPromise();
        } else {
          return this.loadPromise(mediaEl).then(function() {
            return mediaPool.play(mediaEl).catch(function(unusedError) {
              if (mediaEl.tagName === "VIDEO") {
                _this15.debounceToggleLoadingSpinner_(false);
                _this15.isAutoplaySupported_().then(function(isAutoplaySupported2) {
                  if (isAutoplaySupported2) {
                    _this15.toggleErrorMessage_(true);
                    return;
                  }
                  _this15.stopMeasuringAllVideoPerformance_(false);
                  _this15.togglePlayMessage_(true);
                });
              }
              if (mediaEl.tagName === "AUDIO") {
                _this15.playAudioElementFromTimestamp_ = Date.now();
              }
            });
          }, function() {
            _this15.debounceToggleLoadingSpinner_(false);
            _this15.toggleErrorMessage_(true);
          });
        }
      }
    }, {
      key: "preloadAllMedia_",
      value: function preloadAllMedia_() {
        var _this16 = this;
        return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
          return _this16.preloadMedia_(mediaPool, mediaEl);
        });
      }
    }, {
      key: "preloadMedia_",
      value: function preloadMedia_(mediaPool, mediaEl) {
        if (this.isBotUserAgent_) {
          return resolvedPromise();
        } else {
          return mediaPool.preload(mediaEl);
        }
      }
    }, {
      key: "muteAllMedia",
      value: function muteAllMedia() {
        var _this17 = this;
        return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
          _this17.muteMedia_(mediaPool, mediaEl);
        });
      }
    }, {
      key: "muteMedia_",
      value: function muteMedia_(mediaPool, mediaEl) {
        if (this.isBotUserAgent_) {
          mediaEl.muted = true;
          mediaEl.setAttribute("muted", "");
          return resolvedPromise();
        } else {
          return mediaPool.mute(mediaEl);
        }
      }
    }, {
      key: "unmuteAllMedia",
      value: function unmuteAllMedia() {
        var _this18 = this;
        return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
          _this18.unmuteMedia_(mediaPool, mediaEl);
        });
      }
    }, {
      key: "unmuteMedia_",
      value: function unmuteMedia_(mediaPool, mediaEl) {
        if (this.isBotUserAgent_) {
          mediaEl.muted = false;
          mediaEl.removeAttribute("muted");
          if (mediaEl.tagName === "AUDIO" && mediaEl.paused) {
            mediaEl.play();
          }
          return resolvedPromise();
        } else {
          mediaEl = mediaEl;
          var promises = [mediaPool.unmute(mediaEl)];
          if (mediaEl.tagName === "AUDIO" && mediaEl.paused && this.playAudioElementFromTimestamp_) {
            var currentTime = (Date.now() - this.playAudioElementFromTimestamp_) / 1e3;
            if (mediaEl.hasAttribute("loop") || currentTime < mediaEl.duration) {
              promises.push(mediaPool.setCurrentTime(mediaEl, currentTime % mediaEl.duration));
              promises.push(mediaPool.play(mediaEl));
            }
            this.playAudioElementFromTimestamp_ = null;
          }
          return Promise.all(promises);
        }
      }
    }, {
      key: "registerAllMedia_",
      value: function registerAllMedia_() {
        var _this19 = this;
        if (!this.registerAllMediaPromise_) {
          this.registerAllMediaPromise_ = this.waitForPlaybackMediaLayout_().then(function() {
            return _this19.whenAllMediaElements_(function(p, e) {
              return _this19.registerMedia_(p, e);
            });
          });
        }
        return this.registerAllMediaPromise_;
      }
    }, {
      key: "registerMedia_",
      value: function registerMedia_(mediaPool, mediaEl) {
        if (this.isBotUserAgent_) {
          return resolvedPromise();
        } else {
          return mediaPool.register(mediaEl);
        }
      }
    }, {
      key: "rewindAllMedia_",
      value: function rewindAllMedia_() {
        var _this20 = this;
        return this.whenAllMediaElements_(function(mediaPool, mediaEl) {
          if (_this20.isBotUserAgent_) {
            mediaEl.currentTime = 0;
            return resolvedPromise();
          } else {
            return mediaPool.rewindToBeginning(mediaEl);
          }
        });
      }
    }, {
      key: "maybeStartAnimations_",
      value: function maybeStartAnimations_() {
        var _this$animationManage4;
        (_this$animationManage4 = this.animationManager_) == null ? void 0 : _this$animationManage4.animateIn();
      }
    }, {
      key: "maybeFinishAnimations_",
      value: function maybeFinishAnimations_() {
        var _this21 = this;
        if (!this.animationManager_) {
          return;
        }
        this.signals().whenSignal(CommonSignals.LOAD_END).then(function() {
          return _this21.maybeApplyFirstAnimationFrame();
        }).then(function() {
          _this21.animationManager_.finishAll();
        });
      }
    }, {
      key: "maybeApplyFirstAnimationFrame",
      value: function maybeApplyFirstAnimationFrame() {
        var _this$animationManage5;
        return Promise.resolve((_this$animationManage5 = this.animationManager_) == null ? void 0 : _this$animationManage5.applyFirstFrame());
      }
    }, {
      key: "getDistance",
      value: function getDistance() {
        return parseInt(this.element.getAttribute("distance"), 10);
      }
    }, {
      key: "setDistance",
      value: function setDistance(distance) {
        var _this22 = this;
        if (this.isAd()) {
          distance = Math.min(distance, 2);
        }
        this.element.setAttribute("distance", distance);
        this.element.setAttribute("aria-hidden", distance != 0);
        var registerAllPromise = this.registerAllMedia_();
        if (distance > 0 && distance <= 2) {
          this.findAndPrepareEmbeddedComponents_();
          registerAllPromise.then(function() {
            return _this22.preloadAllMedia_();
          });
        }
        this.toggleTabbableElements_(distance == 0);
      }
    }, {
      key: "isActive",
      value: function isActive() {
        return this.element.hasAttribute("active");
      }
    }, {
      key: "emitProgress_",
      value: function emitProgress_(progress) {
        if (this.isAd() || this.state_ === PageState.NOT_ACTIVE) {
          return;
        }
        var payload = dict({
          "pageId": this.element.id,
          "progress": progress
        });
        var eventInit = {
          bubbles: true
        };
        dispatch(this.win, this.element, EventType.PAGE_PROGRESS, payload, eventInit);
      }
    }, {
      key: "getAdjacentPageIds",
      value: function getAdjacentPageIds() {
        var adjacentPageIds = isExperimentOn(this.win, "amp-story-branching") ? this.actions_() : [];
        var autoAdvanceNext = this.getNextPageId(true);
        var manualAdvanceNext = this.getNextPageId(false);
        var previous = this.getPreviousPageId();
        if (autoAdvanceNext) {
          adjacentPageIds.push(autoAdvanceNext);
        }
        if (manualAdvanceNext && manualAdvanceNext != autoAdvanceNext) {
          adjacentPageIds.push(manualAdvanceNext);
        }
        if (previous) {
          adjacentPageIds.push(previous);
        }
        return adjacentPageIds;
      }
    }, {
      key: "getPreviousPageId",
      value: function getPreviousPageId() {
        if (this.element.hasAttribute("i-amphtml-return-to")) {
          return this.element.getAttribute("i-amphtml-return-to");
        }
        var navigationPath = this.storeService_.get(StateProperty.NAVIGATION_PATH);
        var pagePathIndex = navigationPath.lastIndexOf(this.element.id);
        var previousPageId = navigationPath[pagePathIndex - 1];
        if (previousPageId) {
          return previousPageId;
        }
        var previousElement = this.element.previousElementSibling;
        if (previousElement && previousElement.tagName.toLowerCase() === TAG7) {
          return previousElement.id;
        }
        return null;
      }
    }, {
      key: "getNextPageId",
      value: function getNextPageId(isAutomaticAdvance) {
        if (isAutomaticAdvance === void 0) {
          isAutomaticAdvance = false;
        }
        if (isAutomaticAdvance && this.element.hasAttribute("auto-advance-to")) {
          return this.element.getAttribute("auto-advance-to");
        }
        var advanceAttr = isExperimentOn(this.win, "amp-story-branching") ? "advance-to" : "i-amphtml-advance-to";
        if (this.element.hasAttribute(advanceAttr)) {
          return this.element.getAttribute(advanceAttr);
        }
        var nextElement = this.element.nextElementSibling;
        if (nextElement && nextElement.tagName.toLowerCase() === TAG7) {
          return nextElement.id;
        }
        return null;
      }
    }, {
      key: "actions_",
      value: function actions_() {
        var actionElements = Array.prototype.slice.call(this.element.querySelectorAll("[on*=goToPage]"));
        var actionAttrs = actionElements.map(function(action) {
          return action.getAttribute("on");
        });
        return actionAttrs.reduce(function(res, actions3) {
          var actionList = actions3.split(/[;,]+/);
          actionList.forEach(function(action) {
            if (action.indexOf("goToPage") >= 0) {
              res.push(action.slice(action.search("=(.*)") + 1, -1));
            }
          });
          return res;
        }, []);
      }
    }, {
      key: "previous",
      value: function previous() {
        var pageId = this.getPreviousPageId();
        if (pageId === null) {
          dispatch(this.win, this.element, EventType.NO_PREVIOUS_PAGE, void 0, {
            bubbles: true
          });
          return;
        }
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, false);
        this.switchTo_(pageId, NavigationDirection.PREVIOUS);
      }
    }, {
      key: "next",
      value: function next(isAutomaticAdvance) {
        if (isAutomaticAdvance === void 0) {
          isAutomaticAdvance = false;
        }
        var pageId = this.getNextPageId(isAutomaticAdvance);
        if (!pageId) {
          dispatch(this.win, this.element, EventType.NO_NEXT_PAGE, void 0, {
            bubbles: true
          });
          return;
        }
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, false);
        this.switchTo_(pageId, NavigationDirection.NEXT);
      }
    }, {
      key: "switchTo_",
      value: function switchTo_(targetPageId, direction) {
        var payload = dict({
          "targetPageId": targetPageId,
          "direction": direction
        });
        var eventInit = {
          bubbles: true
        };
        dispatch(this.win, this.element, EventType.SWITCH_PAGE, payload, eventInit);
      }
    }, {
      key: "checkPageHasAudio_",
      value: function checkPageHasAudio_() {
        var pageHasAudio = this.element.hasAttribute("background-audio") || this.element.querySelector("amp-audio") || this.hasVideoWithAudio_();
        this.storeService_.dispatch(Action.TOGGLE_PAGE_HAS_AUDIO, pageHasAudio);
      }
    }, {
      key: "hasVideoWithAudio_",
      value: function hasVideoWithAudio_() {
        var ampVideoEls = this.element.querySelectorAll("amp-video");
        return Array.prototype.some.call(ampVideoEls, function(video) {
          return !video.hasAttribute("noaudio");
        });
      }
    }, {
      key: "checkPageHasElementWithPlayback_",
      value: function checkPageHasElementWithPlayback_() {
        var pageHasElementWithPlayback = this.isAutoAdvance() || this.element.hasAttribute("background-audio") || this.getAllMedia_().length > 0;
        this.storeService_.dispatch(Action.TOGGLE_PAGE_HAS_ELEMENT_WITH_PLAYBACK, pageHasElementWithPlayback);
      }
    }, {
      key: "reportDevModeErrors_",
      value: function reportDevModeErrors_() {
        var _this23 = this;
        if (!getMode().development) {
          return;
        }
        getLogEntries(this.element).then(function(logEntries) {
          dispatch(_this23.win, _this23.element, EventType.DEV_LOG_ENTRIES_AVAILABLE, logEntries, {
            bubbles: true
          });
        });
      }
    }, {
      key: "startMeasuringAllVideoPerformance_",
      value: function startMeasuringAllVideoPerformance_() {
        if (!this.mediaPerformanceMetricsService_.isPerformanceTrackingOn()) {
          return;
        }
        var videoEls = this.getAllVideos_();
        for (var i = 0; i < videoEls.length; i++) {
          this.startMeasuringVideoPerformance_(videoEls[i]);
        }
      }
    }, {
      key: "startMeasuringVideoPerformance_",
      value: function startMeasuringVideoPerformance_(videoEl) {
        if (!this.mediaPerformanceMetricsService_.isPerformanceTrackingOn()) {
          return;
        }
        this.performanceTrackedVideos_.push(videoEl);
        this.mediaPerformanceMetricsService_.startMeasuring(videoEl);
      }
    }, {
      key: "stopMeasuringAllVideoPerformance_",
      value: function stopMeasuringAllVideoPerformance_(sendMetrics) {
        if (sendMetrics === void 0) {
          sendMetrics = true;
        }
        if (!this.mediaPerformanceMetricsService_.isPerformanceTrackingOn()) {
          return;
        }
        for (var i = 0; i < this.performanceTrackedVideos_.length; i++) {
          this.mediaPerformanceMetricsService_.stopMeasuring(this.performanceTrackedVideos_[i], sendMetrics);
        }
      }
    }, {
      key: "startListeningToVideoEvents_",
      value: function startListeningToVideoEvents_() {
        var _this24 = this;
        var videoEls = this.getAllVideos_();
        if (videoEls.length) {
          var alreadyPlaying = videoEls.some(function(video) {
            return video.currentTime != 0;
          });
          if (!alreadyPlaying) {
            this.debounceToggleLoadingSpinner_(true);
          }
        }
        Array.prototype.forEach.call(videoEls, function(videoEl) {
          _this24.unlisteners_.push(listen(videoEl, "playing", function() {
            return _this24.debounceToggleLoadingSpinner_(false);
          }));
          _this24.unlisteners_.push(listen(videoEl, "waiting", function() {
            return _this24.debounceToggleLoadingSpinner_(true);
          }));
        });
      }
    }, {
      key: "stopListeningToVideoEvents_",
      value: function stopListeningToVideoEvents_() {
        this.debounceToggleLoadingSpinner_(false);
        this.unlisteners_.forEach(function(unlisten) {
          return unlisten();
        });
        this.unlisteners_ = [];
      }
    }, {
      key: "buildAndAppendLoadingSpinner_",
      value: function buildAndAppendLoadingSpinner_() {
        this.loadingSpinner_ = new LoadingSpinner(this.win.document);
        this.element.appendChild(this.loadingSpinner_.build());
      }
    }, {
      key: "toggleLoadingSpinner_",
      value: function toggleLoadingSpinner_(isActive) {
        var _this25 = this;
        this.mutateElement(function() {
          if (!_this25.loadingSpinner_) {
            _this25.buildAndAppendLoadingSpinner_();
          }
          _this25.loadingSpinner_.toggle(isActive);
        });
      }
    }, {
      key: "buildAndAppendPlayMessage_",
      value: function buildAndAppendPlayMessage_() {
        var _this26 = this;
        this.playMessageEl_ = buildPlayMessageElement(this.element);
        var labelEl = this.playMessageEl_.querySelector(".i-amphtml-story-page-play-label");
        labelEl.textContent = getLocalizationService(this.element).getLocalizedString(LocalizedStringId.AMP_STORY_PAGE_PLAY_VIDEO);
        this.playMessageEl_.addEventListener("click", function() {
          _this26.togglePlayMessage_(false);
          _this26.startMeasuringAllVideoPerformance_();
          _this26.mediaPoolPromise_.then(function(mediaPool) {
            return mediaPool.blessAll();
          }).then(function() {
            return _this26.playAllMedia_();
          });
        });
        this.mutateElement(function() {
          return _this26.element.appendChild(_this26.playMessageEl_);
        });
      }
    }, {
      key: "togglePlayMessage_",
      value: function togglePlayMessage_(isActive) {
        var _this27 = this;
        if (!isActive) {
          this.playMessageEl_ && this.mutateElement(function() {
            return toggle(dev().assertElement(_this27.playMessageEl_), false);
          });
          return;
        }
        if (!this.playMessageEl_) {
          this.buildAndAppendPlayMessage_();
        }
        this.mutateElement(function() {
          return toggle(dev().assertElement(_this27.playMessageEl_), true);
        });
      }
    }, {
      key: "buildAndAppendErrorMessage_",
      value: function buildAndAppendErrorMessage_() {
        var _this28 = this;
        this.errorMessageEl_ = buildErrorMessageElement(this.element);
        var labelEl = this.errorMessageEl_.querySelector(".i-amphtml-story-page-error-label");
        labelEl.textContent = getLocalizationService(this.element).getLocalizedString(LocalizedStringId.AMP_STORY_PAGE_ERROR_VIDEO);
        this.mutateElement(function() {
          return _this28.element.appendChild(_this28.errorMessageEl_);
        });
      }
    }, {
      key: "toggleErrorMessage_",
      value: function toggleErrorMessage_(isActive) {
        var _this29 = this;
        if (!isActive) {
          this.errorMessageEl_ && this.mutateElement(function() {
            return toggle(dev().assertElement(_this29.errorMessageEl_), false);
          });
          return;
        }
        if (!this.errorMessageEl_) {
          this.buildAndAppendErrorMessage_();
        }
        this.mutateElement(function() {
          return toggle(dev().assertElement(_this29.errorMessageEl_), true);
        });
      }
    }, {
      key: "renderOpenAttachmentUI_",
      value: function renderOpenAttachmentUI_() {
        var _this30 = this;
        var attachmentEl = this.element.querySelector("amp-story-page-attachment, amp-story-page-outlink");
        if (!attachmentEl) {
          return;
        }
        if (attachmentEl.hasAttribute("title")) {
          attachmentEl.setAttribute("data-title", attachmentEl.getAttribute("title"));
          attachmentEl.removeAttribute("title");
        }
        if (!this.openAttachmentEl_) {
          this.openAttachmentEl_ = renderPageAttachmentUI(this.element, attachmentEl);
          if (this.element.hasAttribute("active")) {
            this.openAttachmentEl_.setAttribute("active", "");
          }
          var container = this.win.document.createElement("div");
          container.classList.add("i-amphtml-story-page-open-attachment-host");
          container.setAttribute("role", "button");
          container.addEventListener("click", function(e) {
            if (isPageAttachmentUiV2ExperimentOn(_this30.win)) {
              e.preventDefault();
            }
            _this30.openAttachment();
          });
          this.mutateElement(function() {
            _this30.element.appendChild(container);
            createShadowRootWithStyle(container, _this30.openAttachmentEl_, CSS3);
          });
        }
      }
    }, {
      key: "openAttachment",
      value: function openAttachment(shouldAnimate) {
        if (shouldAnimate === void 0) {
          shouldAnimate = true;
        }
        var attachmentEl = this.element.querySelector("amp-story-page-attachment, amp-story-page-outlink");
        if (!attachmentEl) {
          return;
        }
        attachmentEl.getImpl().then(function(attachment) {
          return attachment.open(shouldAnimate);
        });
      }
    }, {
      key: "isAd",
      value: function isAd() {
        return this.element.hasAttribute(ADVERTISEMENT_ATTR_NAME);
      }
    }, {
      key: "setDescendantCssTextStyles_",
      value: function setDescendantCssTextStyles_() {
        setTextBackgroundColor(this.element);
      }
    }, {
      key: "setPageDescription_",
      value: function setPageDescription_() {
        if (this.isBotUserAgent_) {
          renderPageDescription(this, this.getAllAmpVideos_());
        }
        if (!this.isBotUserAgent_ && this.element.hasAttribute("title")) {
          if (!this.element.getAttribute("aria-label")) {
            this.element.setAttribute("aria-label", this.element.getAttribute("title"));
          }
          this.element.removeAttribute("title");
        }
      }
    }, {
      key: "initializeImgAltTags_",
      value: function initializeImgAltTags_() {
        toArray(this.element.querySelectorAll("amp-img")).forEach(function(ampImgNode) {
          if (!ampImgNode.getAttribute("alt")) {
            ampImgNode.setAttribute("alt", "");
            var childImgNode = ampImgNode.querySelector("img");
            childImgNode && ampImgNode.getImpl().then(function(ampImg) {
              return ampImg.propagateAttributes("alt", childImgNode);
            });
          }
        });
      }
    }, {
      key: "isAutoAdvance",
      value: function isAutoAdvance() {
        return this.advancement_.isAutoAdvance();
      }
    }, {
      key: "initializeTabbableElements_",
      value: function initializeTabbableElements_() {
        toArray(scopedQuerySelectorAll(this.element, Selectors.ALL_TABBABLE)).forEach(function(el) {
          el.setAttribute("i-amphtml-orig-tabindex", el.getAttribute("tabindex") || 0);
        });
      }
    }, {
      key: "toggleTabbableElements_",
      value: function toggleTabbableElements_(toggle2) {
        toArray(scopedQuerySelectorAll(this.element, Selectors.ALL_TABBABLE)).forEach(function(el) {
          el.setAttribute("tabindex", toggle2 ? el.getAttribute("i-amphtml-orig-tabindex") : -1);
        });
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed(element) {
        return isPrerenderActivePage(element);
      }
    }]);
    return AmpStoryPage2;
  }(AMP.BaseElement);

  // extensions/amp-story/1.0/amp-story-access.js
  var _templateObject9;
  var _templateObject27;
  function _extends6() {
    _extends6 = Object.assign || function(target) {
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
    return _extends6.apply(this, arguments);
  }
  function _classCallCheck25(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties24(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass24(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties24(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties24(Constructor, staticProps);
    return Constructor;
  }
  function _inherits9(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf9(subClass, superClass);
  }
  function _setPrototypeOf9(o, p) {
    _setPrototypeOf9 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf9(o, p);
  }
  function _createSuper9(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct9();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf9(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf9(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn9(this, result);
    };
  }
  function _possibleConstructorReturn9(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized9(self2);
  }
  function _assertThisInitialized9(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct9() {
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
  function _getPrototypeOf9(o) {
    _getPrototypeOf9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf9(o);
  }
  function _taggedTemplateLiteralLoose7(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var TAG8 = "amp-story-access";
  var Type = {
    BLOCKING: "blocking",
    NOTIFICATION: "notification"
  };
  var getBlockingTemplate = function getBlockingTemplate2(element) {
    return htmlFor(element)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose7(['\n      <div class="i-amphtml-story-access-overflow">\n        <div class="i-amphtml-story-access-container">\n          <div class="i-amphtml-story-access-header">\n            <div class="i-amphtml-story-access-logo"></div>\n          </div>\n          <div class="i-amphtml-story-access-content"></div>\n        </div>\n      </div>'])));
  };
  var getNotificationTemplate = function getNotificationTemplate2(element) {
    return htmlFor(element)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteralLoose7(['\n      <div class="i-amphtml-story-access-overflow">\n        <div class="i-amphtml-story-access-container">\n          <div class="i-amphtml-story-access-content">\n            <span class="i-amphtml-story-access-close-button" role="button">\n              &times;\n            </span>\n          </div>\n        </div>\n      </div>'])));
  };
  var AmpStoryAccess = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits9(AmpStoryAccess2, _AMP$BaseElement);
    var _super = _createSuper9(AmpStoryAccess2);
    function AmpStoryAccess2(element) {
      var _this;
      _classCallCheck25(this, AmpStoryAccess2);
      _this = _super.call(this, element);
      _this.containerEl_ = null;
      _this.storeService_ = getStoreService(_this.win);
      return _this;
    }
    _createClass24(AmpStoryAccess2, [{
      key: "buildCallback",
      value: function buildCallback() {
        if (!this.element.hasAttribute("type")) {
          this.element.setAttribute("type", Type.BLOCKING);
        }
        var drawerEl = this.renderDrawerEl_();
        this.containerEl_ = dev().assertElement(drawerEl.querySelector(".i-amphtml-story-access-container"));
        var contentEl = dev().assertElement(drawerEl.querySelector(".i-amphtml-story-access-content"));
        copyChildren(this.element, contentEl);
        removeChildren(this.element);
        this.element.appendChild(drawerEl);
        this.allowlistActions_();
        this.initializeListeners_();
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.CONTAINER;
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.storeService_.subscribe(StateProperty.ACCESS_STATE, function(isAccess) {
          _this2.onAccessStateChange_(isAccess);
        });
        this.storeService_.subscribe(StateProperty.CURRENT_PAGE_INDEX, function(currentPageIndex) {
          _this2.onCurrentPageIndexChange_(currentPageIndex);
        }, true);
        this.element.addEventListener("click", function(event) {
          return _this2.onClick_(event);
        });
      }
    }, {
      key: "onAccessStateChange_",
      value: function onAccessStateChange_(isAccess) {
        if (this.getType_() === Type.BLOCKING) {
          this.toggle_(isAccess);
        }
      }
    }, {
      key: "onCurrentPageIndexChange_",
      value: function onCurrentPageIndexChange_(currentPageIndex) {
        if (this.getType_() === Type.NOTIFICATION) {
          this.toggle_(currentPageIndex === 0);
        }
      }
    }, {
      key: "onClick_",
      value: function onClick_(event) {
        var _this3 = this;
        var el = dev().assertElement(event.target);
        if (el.classList.contains("i-amphtml-story-access-close-button")) {
          return this.toggle_(false);
        }
        if (!closest(el, function(el2) {
          return el2 === _this3.containerEl_;
        }, this.element)) {
          this.storeService_.dispatch(Action.TOGGLE_ACCESS, false);
        }
      }
    }, {
      key: "toggle_",
      value: function toggle_(show) {
        var _this4 = this;
        this.mutateElement(function() {
          _this4.element.classList.toggle("i-amphtml-story-access-visible", show);
        });
      }
    }, {
      key: "getType_",
      value: function getType_() {
        return this.element.getAttribute("type").toLowerCase();
      }
    }, {
      key: "renderDrawerEl_",
      value: function renderDrawerEl_() {
        switch (this.getType_()) {
          case Type.BLOCKING:
            var drawerEl = getBlockingTemplate(this.element);
            var logoSrc = getStoryAttributeSrc(this.element, "publisher-logo-src", true);
            if (logoSrc) {
              var logoEl = dev().assertElement(drawerEl.querySelector(".i-amphtml-story-access-logo"));
              setImportantStyles(logoEl, {
                "background-image": "url(" + logoSrc + ")"
              });
            }
            return drawerEl;
            break;
          case Type.NOTIFICATION:
            return getNotificationTemplate(this.element);
            break;
          default:
            user().error(TAG8, 'Unknown "type" attribute, expected one of: blocking, notification.');
        }
      }
    }, {
      key: "allowlistActions_",
      value: function allowlistActions_() {
        var _this5 = this;
        var accessEl = dev().assertElement(this.win.document.getElementById("amp-access"), "Cannot find the amp-access configuration");
        var accessConfig = parseJson(accessEl.textContent);
        if (!isArray(accessConfig)) {
          accessConfig = [accessConfig];
          if (accessConfig[0].namespace) {
            accessConfig.push(_extends6({}, accessConfig[0], {
              namespace: void 0
            }));
          }
        }
        var actions3 = [];
        accessConfig.forEach(function(config) {
          var login = config.login, namespace = config.namespace;
          if (isObject(login)) {
            var types = Object.keys(login);
            types.forEach(function(type) {
              return actions3.push(_this5.getActionObject_(namespace, type));
            });
          } else {
            actions3.push(_this5.getActionObject_(namespace));
          }
        });
        this.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, actions3);
      }
    }, {
      key: "getActionObject_",
      value: function getActionObject_(namespace, type) {
        if (namespace === void 0) {
          namespace = void 0;
        }
        if (type === void 0) {
          type = void 0;
        }
        var method = ["login", namespace, type].filter(Boolean).join("-");
        return {
          tagOrTarget: "SCRIPT",
          method
        };
      }
    }]);
    return AmpStoryAccess2;
  }(AMP.BaseElement);

  // build/amp-story-consent-1.0.css.js
  var CSS5 = `:host{all:initial!important;color:initial!important}.i-amphtml-story-consent{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;z-index:100005!important}.i-amphtml-story-consent,.i-amphtml-story-consent:before{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important}.i-amphtml-story-consent:before{content:""!important;background:#000!important;opacity:0.55!important}.i-amphtml-story-consent-overflow{margin-top:auto!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-story-consent-container{position:relative!important;margin:88px 0 72px!important;background:#fff!important;border-radius:8px 8px 0 0!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;text-align:start!important;overflow:hidden!important}.i-amphtml-story-consent-header{position:relative!important;height:80px!important;min-height:80px!important;background:var(--primary-color,#f0f0f0)!important;z-index:2!important}.i-amphtml-story-consent-logo{position:absolute!important;bottom:-32px!important;margin-left:-32px!important;left:50%!important;height:64px!important;width:64px!important;background:#f0f0f0!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:contain!important;border-radius:5px!important}.i-amphtml-story-consent-logo:before{content:""!important;position:absolute!important;top:-6px!important;bottom:-6px!important;left:-6px!important;right:-6px!important;background:#fff!important;border-radius:6px!important;box-shadow:0 2px 3px rgba(0,0,0,0.12)!important;z-index:-1!important}.i-amphtml-story-consent-content{padding:42px 16px 16px!important;font-size:14px!important;z-index:0!important}.i-amphtml-story-consent-vendors{margin:0!important;padding:0!important;list-style:none!important}.i-amphtml-story-consent-vendor{height:40px!important;border-bottom:1px solid #f0f0f0!important;line-height:40px!important;text-overflow:ellipsis!important;overflow:hidden!important}.i-amphtml-story-consent-external-link{position:relative!important;display:inline-block!important;margin:24px 0!important;color:rgba(0,0,0,0.87)!important;font-size:15px!important;font-weight:700!important;text-decoration:none!important}.i-amphtml-story-consent-external-link:hover{text-decoration:underline!important}.i-amphtml-story-consent-external-link:after{content:""!important;position:absolute!important;display:block!important;height:16px!important;width:16px!important;top:3px!important;right:-20px!important;background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='rgba(0, 0, 0, 0.87)'%3E%3Cpath d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E") 50% no-repeat!important}.i-amphtml-story-consent-external-link.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-actions{position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;bottom:0!important;left:0!important;right:0!important;height:72px!important;min-height:72px!important;background:#fff!important;box-shadow:0 -2px 3px rgba(0,0,0,0.12)!important;z-index:1!important}.i-amphtml-story-consent-action{position:relative!important;padding:0 24px!important;margin:0 12px!important;height:40px!important;width:40vw!important;background:#fff!important;border:none!important;border-radius:40px!important;box-sizing:border-box!important;cursor:pointer!important;font-size:13px!important;font-weight:700!important;line-height:40px!important;text-align:center!important;text-transform:uppercase!important}.i-amphtml-story-consent-action.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-action-accept{background:var(--primary-color,#000)!important;color:#fff!important}.i-amphtml-story-consent-action-reject{border:1px solid #000!important}@media (min-width:420px){.i-amphtml-story-consent{-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-consent-overflow{margin-top:0!important}.i-amphtml-story-consent-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;margin:0!important;max-height:60vh!important;min-height:40vh!important;width:calc(100vw - 80px)!important;max-width:800px!important}.i-amphtml-story-consent-content{margin:0 auto!important;max-width:424px!important;-ms-flex-positive:1!important;flex-grow:1!important;overflow-y:auto!important}.i-amphtml-story-consent-content::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-consent-actions{position:relative!important;left:0px!important;right:0px!important}.i-amphtml-story-consent-action{width:33vw!important;max-width:200px!important}}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-consent.css*/`;

  // extensions/amp-story/1.0/amp-story-consent.js
  function _extends7() {
    _extends7 = Object.assign || function(target) {
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
    return _extends7.apply(this, arguments);
  }
  function _classCallCheck26(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties25(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass25(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties25(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties25(Constructor, staticProps);
    return Constructor;
  }
  function _inherits10(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf10(subClass, superClass);
  }
  function _setPrototypeOf10(o, p) {
    _setPrototypeOf10 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf10(o, p);
  }
  function _createSuper10(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct10();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf10(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf10(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn10(this, result);
    };
  }
  function _possibleConstructorReturn10(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized10(self2);
  }
  function _assertThisInitialized10(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct10() {
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
  function _getPrototypeOf10(o) {
    _getPrototypeOf10 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf10(o);
  }
  var TAG9 = "amp-story-consent";
  var DEFAULT_OPTIONAL_PARAMETERS = {
    externalLink: {},
    onlyAccept: false
  };
  var getTemplate = function getTemplate2(config, consentId, logoSrc) {
    return {
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-story-consent i-amphtml-story-system-reset"
      }),
      children: [{
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-consent-overflow"
        }),
        children: [{
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-story-consent-container"
          }),
          children: [{
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-consent-header"
            }),
            children: [{
              tag: "div",
              attrs: dict({
                "class": "i-amphtml-story-consent-logo",
                "style": logoSrc ? "background-image: url('" + logoSrc + "') !important;" : ""
              }),
              children: []
            }]
          }, {
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-consent-content"
            }),
            children: [{
              tag: "h3",
              attrs: dict({}),
              children: [],
              unlocalizedString: config.title
            }, {
              tag: "p",
              attrs: dict({}),
              children: [],
              unlocalizedString: config.message
            }, {
              tag: "ul",
              attrs: dict({
                "class": "i-amphtml-story-consent-vendors"
              }),
              children: config.vendors && config.vendors.map(function(vendor) {
                return {
                  tag: "li",
                  attrs: dict({
                    "class": "i-amphtml-story-consent-vendor"
                  }),
                  children: [],
                  unlocalizedString: vendor
                };
              })
            }, {
              tag: "a",
              attrs: dict({
                "class": "i-amphtml-story-consent-external-link " + (!(config.externalLink.title && config.externalLink.href) ? "i-amphtml-hidden" : ""),
                "href": config.externalLink.href,
                "target": "_top",
                "title": config.externalLink.title
              }),
              children: [],
              unlocalizedString: config.externalLink.title
            }]
          }]
        }, {
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-story-consent-actions"
          }),
          children: [{
            tag: "button",
            attrs: dict({
              "class": "i-amphtml-story-consent-action i-amphtml-story-consent-action-reject" + (config.onlyAccept === true ? " i-amphtml-hidden" : ""),
              "on": "tap:" + consentId + ".reject"
            }),
            children: [],
            localizedStringId: LocalizedStringId.AMP_STORY_CONSENT_DECLINE_BUTTON_LABEL
          }, {
            tag: "button",
            attrs: dict({
              "class": "i-amphtml-story-consent-action i-amphtml-story-consent-action-accept",
              "on": "tap:" + consentId + ".accept"
            }),
            children: [],
            localizedStringId: LocalizedStringId.AMP_STORY_CONSENT_ACCEPT_BUTTON_LABEL
          }]
        }]
      }]
    };
  };
  var AmpStoryConsent = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits10(AmpStoryConsent2, _AMP$BaseElement);
    var _super = _createSuper10(AmpStoryConsent2);
    function AmpStoryConsent2(element) {
      var _this;
      _classCallCheck26(this, AmpStoryConsent2);
      _this = _super.call(this, element);
      _this.actions_ = null;
      _this.consentConfig_ = null;
      _this.storeService_ = getStoreService(_this.win);
      _this.storyConsentConfig_ = null;
      _this.storyConsentEl_ = null;
      return _this;
    }
    _createClass25(AmpStoryConsent2, [{
      key: "buildCallback",
      value: function buildCallback() {
        this.actions_ = Services.actionServiceForDoc(this.element);
        this.assertAndParseConfig_();
        var storyEl = dev().assertElement(closestAncestorElementBySelector(this.element, "AMP-STORY"));
        var consentEl = closestAncestorElementBySelector(this.element, "AMP-CONSENT");
        var consentId = consentEl.id;
        this.storeConsentId_(consentId);
        var logoSrc = storyEl && storyEl.getAttribute("publisher-logo-src");
        if (logoSrc) {
          assertHttpsUrl(logoSrc, storyEl, "publisher-logo-src");
        } else {
          user().warn(TAG9, 'Expected "publisher-logo-src" attribute on <amp-story>');
        }
        if (this.storyConsentConfig_) {
          this.storyConsentEl_ = renderAsElement(this.win.document, getTemplate(this.storyConsentConfig_, consentId, logoSrc));
          createShadowRootWithStyle(this.element, this.storyConsentEl_, CSS5);
          var actions3 = [{
            tagOrTarget: "AMP-CONSENT",
            method: "accept"
          }, {
            tagOrTarget: "AMP-CONSENT",
            method: "prompt"
          }, {
            tagOrTarget: "AMP-CONSENT",
            method: "reject"
          }];
          this.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, actions3);
          this.setAcceptButtonFontColor_();
          this.initializeListeners_();
        }
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.NODISPLAY;
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.storyConsentEl_.addEventListener("click", function(event) {
          return _this2.onClick_(event);
        }, true);
        this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
          _this2.onRtlStateUpdate_(rtlState);
        }, true);
      }
    }, {
      key: "onClick_",
      value: function onClick_(event) {
        if (!event.target) {
          return;
        }
        if (event.target.hasAttribute("on")) {
          var targetEl = dev().assertElement(event.target);
          this.actions_.trigger(targetEl, "tap", event, ActionTrust.HIGH);
        }
        var anchorClicked = closest(event.target, function(e) {
          return matches(e, "a[href]");
        });
        if (anchorClicked) {
          triggerClickFromLightDom(anchorClicked, this.element);
          event.preventDefault();
        }
      }
    }, {
      key: "onRtlStateUpdate_",
      value: function onRtlStateUpdate_(rtlState) {
        var _this3 = this;
        var mutator = function mutator2() {
          rtlState ? _this3.storyConsentEl_.setAttribute("dir", "rtl") : _this3.storyConsentEl_.removeAttribute("dir");
        };
        this.mutateElement(mutator, this.storyConsentEl_);
      }
    }, {
      key: "assertAndParseConfig_",
      value: function assertAndParseConfig_() {
        var parentEl = dev().assertElement(this.element.parentElement);
        var consentScript = childElementByTag(parentEl, "script");
        this.consentConfig_ = consentScript && parseJson(consentScript.textContent);
        this.mergeLegacyConsents_();
        if (!this.consentConfig_) {
          return;
        }
        var storyConsentScript = childElementByTag(this.element, "script");
        userAssert(storyConsentScript && isJsonScriptTag(storyConsentScript), TAG9 + ' config should be put in a <script> tag with type="application/json"');
        this.storyConsentConfig_ = _extends7({}, DEFAULT_OPTIONAL_PARAMETERS, parseJson(storyConsentScript.textContent));
        user().assertString(this.storyConsentConfig_.title, TAG9 + ": config requires a title");
        user().assertString(this.storyConsentConfig_.message, TAG9 + ": config requires a message");
        userAssert(this.storyConsentConfig_.vendors && isArray(this.storyConsentConfig_.vendors), TAG9 + ": config requires an array of vendors");
        user().assertBoolean(this.storyConsentConfig_.onlyAccept, TAG9 + ': config requires "onlyAccept" to be a boolean');
        if (this.storyConsentConfig_.externalLink.href || this.storyConsentConfig_.externalLink.title) {
          user().assertString(this.storyConsentConfig_.externalLink.title, TAG9 + ': config requires "externalLink.title" to be a string');
          user().assertString(this.storyConsentConfig_.externalLink.href, TAG9 + ': config requires "externalLink.href" to be an absolute URL');
          assertAbsoluteHttpOrHttpsUrl(this.storyConsentConfig_.externalLink.href);
        }
      }
    }, {
      key: "mergeLegacyConsents_",
      value: function mergeLegacyConsents_() {
        var legacyConsents = this.consentConfig_["consents"];
        if (legacyConsents) {
          var policyId = Object.keys(legacyConsents)[0];
          var policy = legacyConsents[policyId];
          this.consentConfig_.consentInstanceId = policyId;
          this.consentConfig_.checkConsentHref = policy.checkConsentHref;
          this.consentConfig_.promptIfUnknownForGeoGroup = policy.promptIfUnknownForGeoGroup;
          delete this.consentConfig_["consents"];
        }
      }
    }, {
      key: "storeConsentId_",
      value: function storeConsentId_(consentId) {
        var _this4 = this;
        if (this.consentConfig_.checkConsentHref) {
          this.storeService_.dispatch(Action.SET_CONSENT_ID, consentId);
          return;
        }
        var geoGroup = this.consentConfig_.promptIfUnknownForGeoGroup;
        if (geoGroup) {
          Services.geoForDocOrNull(this.element).then(function(geo) {
            var matchedGeoGroups = geo.matchedISOCountryGroups;
            if (geo && !matchedGeoGroups.includes(geoGroup)) {
              return;
            }
            _this4.storeService_.dispatch(Action.SET_CONSENT_ID, consentId);
          });
        }
      }
    }, {
      key: "setAcceptButtonFontColor_",
      value: function setAcceptButtonFontColor_() {
        var buttonEl = dev().assertElement(this.storyConsentEl_.querySelector(".i-amphtml-story-consent-action-accept"));
        var styles = computedStyle(this.win, buttonEl);
        var rgb = getRGBFromCssColorValue(styles["background-color"]);
        var color = getTextColorForRGB(rgb);
        setImportantStyles(buttonEl, {
          color
        });
      }
    }]);
    return AmpStoryConsent2;
  }(AMP.BaseElement);

  // build/amp-story-hint-1.0.css.js
  var CSS6 = `.i-amphtml-story-hint-container{transition-property:opacity!important;transition-duration:200ms!important;contain:strict!important;pointer-events:none!important;position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;z-index:2!important}.i-amphtml-story-hint-container.i-amphtml-hidden{opacity:0!important}.i-amphtml-story-hint-container .i-amphtml-story-navigation-help-overlay{position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,0.7)!important;-ms-flex-direction:row!important;flex-direction:row!important;color:#fff!important;font-size:20px!important;padding:16px 0!important}.i-amphtml-story-navigation-help-section{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.prev-page,[dir=rtl].prev-page{-ms-flex:1!important;flex:1!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{background:transparent!important}.show-first-page-overlay .prev-page{background:linear-gradient(90deg,rgba(0,0,0,0.5),transparent)!important}[dir=rtl].show-first-page-overlay .prev-page{background:linear-gradient(270deg,rgba(0,0,0,0.5),transparent)!important}.show-first-page-overlay .next-page{opacity:0!important}.show-first-page-overlay .i-amphtml-story-hint-placeholder{display:none!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{padding:0px!important}.i-amphtml-story-hint-container .next-page{-ms-flex:3!important;flex:3!important;background-image:linear-gradient(#e0d5d5 60%,rgba(255,255,255,0) 0)!important;background-position:0!important;background-size:1px 15px!important;background-repeat:repeat-y!important}[dir=rtl].i-amphtml-story-hint-container .next-page{border-left:none!important;background-position:100%!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay,.show-navigation-overlay .i-amphtml-story-navigation-help-overlay{display:-ms-flexbox!important;display:flex!important}.show-first-page-overlay .prev-page .i-amphtml-story-hint-tap-button{visibility:hidden}.show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{content:""!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important;width:30px!important;height:30px!important;display:inline-block!important}[dir=rtl].show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button{position:relative!important;width:44px!important;height:44px!important}.i-amphtml-story-hint-tap-button:after,.i-amphtml-story-hint-tap-button:before{position:absolute!important;content:""!important;width:44px!important;height:44px!important;border-radius:50%!important;background-color:hsla(0,0%,100%,0.5)!important;left:0!important;right:0!important}.i-amphtml-story-hint-tap-button:before{animation:expandingBubble 1000ms cubic-bezier(0.4,0,0.2,1) infinite!important}.i-amphtml-story-hint-tap-button:after{background-color:#fff!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-icon{position:absolute!important;z-index:1!important;height:44px!important;width:44px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-tap-button-icon:after,.i-amphtml-story-hint-tap-button-icon:before{vertical-align:middle!important;margin:0 2px!important;background-position:50%}.next-page .i-amphtml-story-hint-tap-button-icon:after{content:""!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important;width:24px!important;height:24px!important;display:inline-block!important}[dir=rtl] .next-page .i-amphtml-story-hint-tap-button-icon:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-hint-placeholder{top:50%!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-text{color:#fff!important;font-size:16px!important;font-family:Roboto-Medium,sans-serif!important;margin-top:24px!important;text-align:center!important;word-break:break-word!important;padding:0 6px!important}@keyframes expandingBubble{0%{transform:scale(1);opacity:0}50%{transform:scale(1.5);opacity:1}to{transform:scale(1);opacity:0}}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-hint.css*/`;

  // extensions/amp-story/1.0/amp-story-hint.js
  function _classCallCheck27(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties26(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass26(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties26(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties26(Constructor, staticProps);
    return Constructor;
  }
  var TEMPLATE = {
    tag: "aside",
    attrs: dict({
      "class": "i-amphtml-story-hint-container i-amphtml-story-system-reset i-amphtml-hidden"
    }),
    children: [{
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-story-navigation-help-overlay"
      }),
      children: [{
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-navigation-help-section prev-page"
        }),
        children: [{
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-story-hint-placeholder"
          }),
          children: [{
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-hint-tap-button"
            }),
            children: [{
              tag: "div",
              attrs: dict({
                "class": "i-amphtml-story-hint-tap-button-icon"
              })
            }]
          }, {
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-hint-tap-button-text"
            }),
            localizedStringId: LocalizedStringId.AMP_STORY_HINT_UI_PREVIOUS_LABEL
          }]
        }]
      }, {
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-navigation-help-section next-page"
        }),
        children: [{
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-story-hint-placeholder"
          }),
          children: [{
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-hint-tap-button"
            }),
            children: [{
              tag: "div",
              attrs: dict({
                "class": "i-amphtml-story-hint-tap-button-icon"
              })
            }]
          }, {
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-hint-tap-button-text"
            }),
            localizedStringId: LocalizedStringId.AMP_STORY_HINT_UI_NEXT_LABEL
          }]
        }]
      }]
    }]
  };
  var NAVIGATION_OVERLAY_CLASS = "show-navigation-overlay";
  var FIRST_PAGE_OVERLAY_CLASS = "show-first-page-overlay";
  var NAVIGATION_OVERLAY_TIMEOUT = 3e3;
  var FIRST_PAGE_NAVIGATION_OVERLAY_TIMEOUT = 275;
  var AmpStoryHint = /* @__PURE__ */ function() {
    function AmpStoryHint2(win, parentEl) {
      _classCallCheck27(this, AmpStoryHint2);
      this.win_ = win;
      this.isBuilt_ = false;
      this.document_ = this.win_.document;
      this.vsync_ = Services.vsyncFor(this.win_);
      this.timer_ = Services.timerFor(this.win_);
      this.hintContainer_ = null;
      this.hintTimeout_ = null;
      this.storeService_ = getStoreService(this.win_);
      this.parentEl_ = parentEl;
    }
    _createClass26(AmpStoryHint2, [{
      key: "build",
      value: function build() {
        var _this = this;
        if (this.isBuilt()) {
          return;
        }
        this.isBuilt_ = true;
        var root = this.document_.createElement("div");
        this.hintContainer_ = renderAsElement(this.document_, TEMPLATE);
        createShadowRootWithStyle(root, this.hintContainer_, CSS6);
        this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
          _this.onRtlStateUpdate_(rtlState);
        }, true);
        this.storeService_.subscribe(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE, function(isVisible) {
          _this.onSystemUiIsVisibleStateUpdate_(isVisible);
        });
        this.storeService_.subscribe(StateProperty.INTERACTIVE_COMPONENT_STATE, function(component) {
          _this.hideOnFocusedState_(component.state === EmbeddedComponentState.FOCUSED);
        });
        this.vsync_.mutate(function() {
          _this.parentEl_.appendChild(root);
        });
      }
    }, {
      key: "isBuilt",
      value: function isBuilt() {
        return this.isBuilt_;
      }
    }, {
      key: "showHint_",
      value: function showHint_(hintClass) {
        var _this2 = this;
        if (this.storeService_.get(StateProperty.UI_STATE) !== UIType.MOBILE) {
          return;
        }
        this.build();
        this.vsync_.mutate(function() {
          _this2.hintContainer_.classList.toggle(NAVIGATION_OVERLAY_CLASS, hintClass == NAVIGATION_OVERLAY_CLASS);
          _this2.hintContainer_.classList.toggle(FIRST_PAGE_OVERLAY_CLASS, hintClass == FIRST_PAGE_OVERLAY_CLASS);
          _this2.hintContainer_.classList.remove("i-amphtml-hidden");
          var hideTimeout = hintClass == NAVIGATION_OVERLAY_CLASS ? NAVIGATION_OVERLAY_TIMEOUT : FIRST_PAGE_NAVIGATION_OVERLAY_TIMEOUT;
          _this2.hideAfterTimeout(hideTimeout);
        });
      }
    }, {
      key: "showNavigationOverlay",
      value: function showNavigationOverlay() {
        if (this.storeService_.get(StateProperty.SHARE_MENU_STATE)) {
          return;
        }
        this.showHint_(NAVIGATION_OVERLAY_CLASS);
      }
    }, {
      key: "showFirstPageHintOverlay",
      value: function showFirstPageHintOverlay() {
        this.showHint_(FIRST_PAGE_OVERLAY_CLASS);
      }
    }, {
      key: "hideAfterTimeout",
      value: function hideAfterTimeout(timeout) {
        var _this3 = this;
        this.hintTimeout_ = this.timer_.delay(function() {
          return _this3.hideInternal_();
        }, timeout);
      }
    }, {
      key: "hideAllNavigationHint",
      value: function hideAllNavigationHint() {
        this.hideInternal_();
        if (this.hintTimeout_ !== null) {
          this.timer_.cancel(this.hintTimeout_);
          this.hintTimeout_ = null;
        }
      }
    }, {
      key: "hideInternal_",
      value: function hideInternal_() {
        var _this4 = this;
        if (!this.isBuilt()) {
          return;
        }
        this.vsync_.mutate(function() {
          _this4.hintContainer_.classList.add("i-amphtml-hidden");
        });
      }
    }, {
      key: "onRtlStateUpdate_",
      value: function onRtlStateUpdate_(rtlState) {
        var _this5 = this;
        this.vsync_.mutate(function() {
          rtlState ? _this5.hintContainer_.setAttribute("dir", "rtl") : _this5.hintContainer_.removeAttribute("dir");
        });
      }
    }, {
      key: "onSystemUiIsVisibleStateUpdate_",
      value: function onSystemUiIsVisibleStateUpdate_(isVisible) {
        if (!isVisible) {
          this.hideAllNavigationHint();
        }
      }
    }, {
      key: "hideOnFocusedState_",
      value: function hideOnFocusedState_(isActive) {
        if (isActive) {
          this.hideAllNavigationHint();
        }
      }
    }]);
    return AmpStoryHint2;
  }();

  // extensions/amp-story/1.0/amp-story-render-service.js
  function _classCallCheck28(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties27(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass27(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties27(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties27(Constructor, staticProps);
    return Constructor;
  }
  var LOAD_TIMEOUT = 2900;
  var AmpStoryRenderService = /* @__PURE__ */ function() {
    function AmpStoryRenderService2(ampdoc) {
      _classCallCheck28(this, AmpStoryRenderService2);
      this.ampdoc_ = ampdoc;
      this.timer_ = Services.timerFor(ampdoc.win);
    }
    _createClass27(AmpStoryRenderService2, [{
      key: "whenReady",
      value: function whenReady() {
        var whenReadyPromise = this.ampdoc_.whenReady().then(function(body) {
          var storyEl = body.querySelector("amp-story[standalone]");
          if (!storyEl) {
            return;
          }
          return whenUpgradedToCustomElement(storyEl).then(function() {
            return storyEl.signals().whenSignal(CommonSignals.LOAD_END);
          });
        });
        return Promise.race([whenReadyPromise, this.timer_.promise(LOAD_TIMEOUT)]);
      }
    }]);
    return AmpStoryRenderService2;
  }();

  // extensions/amp-story/1.0/amp-story-viewer-messaging-handler.js
  function _classCallCheck29(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties28(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass28(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties28(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties28(Constructor, staticProps);
    return Constructor;
  }
  var TAG10 = "amp-story-viewer-messaging-handler";
  var DataSources = {
    STORE_SERVICE: 0,
    VARIABLE_SERVICE: 2
  };
  var GET_STATE_CONFIGURATIONS = {
    "CURRENT_PAGE_ID": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.CURRENT_PAGE_ID
    },
    "EDUCATION_STATE": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.EDUCATION_STATE
    },
    "MUTED_STATE": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.MUTED_STATE
    },
    "PAGE_ATTACHMENT_STATE": {
      dataSource: DataSources.STORE_SERVICE,
      property: StateProperty.PAGE_ATTACHMENT_STATE
    },
    "STORY_PROGRESS": {
      dataSource: DataSources.VARIABLE_SERVICE,
      property: AnalyticsVariable.STORY_PROGRESS
    }
  };
  var SET_STATE_CONFIGURATIONS = {
    "MUTED_STATE": {
      action: Action.TOGGLE_MUTED,
      isValueValid: function isValueValid(value) {
        return typeof value === "boolean";
      }
    }
  };
  var AmpStoryViewerMessagingHandler = /* @__PURE__ */ function() {
    function AmpStoryViewerMessagingHandler2(win, viewer) {
      _classCallCheck29(this, AmpStoryViewerMessagingHandler2);
      this.storeService_ = getStoreService(win);
      this.variableService_ = getVariableService(win);
      this.viewer_ = viewer;
    }
    _createClass28(AmpStoryViewerMessagingHandler2, [{
      key: "startListening",
      value: function startListening() {
        var _this = this;
        this.viewer_.onMessageRespond("getDocumentState", function(data) {
          return _this.onGetDocumentState_(data);
        });
        this.viewer_.onMessage("onDocumentState", function(data) {
          return _this.onOnDocumentState_(data);
        });
        this.viewer_.onMessageRespond("setDocumentState", function(data) {
          return _this.onSetDocumentState_(data);
        });
        this.viewer_.onMessageRespond("customDocumentUI", function(data) {
          return _this.onCustomDocumentUI_(data);
        });
      }
    }, {
      key: "send",
      value: function send(eventType, data, cancelUnsent) {
        if (cancelUnsent === void 0) {
          cancelUnsent = false;
        }
        this.viewer_.sendMessage(eventType, data, cancelUnsent);
      }
    }, {
      key: "onGetDocumentState_",
      value: function onGetDocumentState_(data) {
        if (data === void 0) {
          data = {};
        }
        var _data = data, state = _data.state;
        var config = GET_STATE_CONFIGURATIONS[state];
        if (!config) {
          return Promise.reject("Invalid 'state' parameter");
        }
        var value;
        switch (config.dataSource) {
          case DataSources.STORE_SERVICE:
            value = this.storeService_.get(config.property);
            break;
          case DataSources.VARIABLE_SERVICE:
            value = this.variableService_.get()[config.property];
            break;
          default:
            dev().error(TAG10, "Unknown data source %s.", config.dataSource);
            break;
        }
        return Promise.resolve({
          state,
          value
        });
      }
    }, {
      key: "onOnDocumentState_",
      value: function onOnDocumentState_(data) {
        var _this2 = this;
        if (data === void 0) {
          data = {};
        }
        var _data2 = data, state = _data2.state;
        var config = GET_STATE_CONFIGURATIONS[state];
        if (!config) {
          user().error(TAG10, "Invalid 'state' parameter");
          return;
        }
        this.storeService_.subscribe(config.property, function(value) {
          _this2.viewer_.sendMessage("documentStateUpdate", dict({
            "state": state,
            "value": value
          }));
        });
      }
    }, {
      key: "onSetDocumentState_",
      value: function onSetDocumentState_(data) {
        if (data === void 0) {
          data = {};
        }
        var _data3 = data, state = _data3.state, value = _data3.value;
        var config = SET_STATE_CONFIGURATIONS[state];
        if (!config) {
          return Promise.reject("Invalid 'state' parameter");
        }
        if (!config.isValueValid(value)) {
          return Promise.reject("Invalid 'value' parameter");
        }
        this.storeService_.dispatch(config.action, value);
        return Promise.resolve({
          state,
          value
        });
      }
    }, {
      key: "onCustomDocumentUI_",
      value: function onCustomDocumentUI_(data) {
        this.storeService_.dispatch(Action.SET_VIEWER_CUSTOM_CONTROLS, data.controls);
      }
    }]);
    return AmpStoryViewerMessagingHandler2;
  }();

  // build/amp-story-1.0.css.js
  var CSS7 = `amp-story-access{position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100003!important;transform:translate3d(0,100vh,0)!important;transition-delay:0.15s!important;pointer-events:none!important}amp-story-access[amp-access-hide]{display:none!important}amp-story-access[type=blocking]{z-index:100004!important}amp-story-access.i-amphtml-story-access-visible{transform:translateZ(0)!important;transition-delay:0s!important}amp-story-access[type=blocking]:before{content:""!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;pointer-events:auto!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}amp-story-access[type=blocking].i-amphtml-story-access-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-access-overflow{margin-top:auto!important;overflow-y:auto!important;overflow-x:hidden!important;pointer-events:auto!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-story-access-container{position:relative!important;margin:88px 0 0!important;padding:0px!important;background:#fff!important;border-radius:8px 8px 0 0!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;overflow:hidden!important;text-align:start!important;transform:translate3d(0,100%,0)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-access-visible .i-amphtml-story-access-container{transform:translateZ(0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}[type=notification] .i-amphtml-story-access-container{box-shadow:0 -1px 2px 1px rgba(0,0,0,0.12)!important;max-height:calc(var(--story-page-vh, 1vh)*20)!important}.i-amphtml-story-access-header{position:relative!important;margin:0 0 48px!important;height:80px!important;min-height:80px!important;background:var(--primary-color,#f0f0f0)!important;z-index:2!important}.i-amphtml-story-access-logo{position:absolute!important;bottom:-32px!important;margin-left:-32px!important;left:50%!important;height:64px!important;width:64px!important;background:#f0f0f0!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:contain!important;border-radius:5px!important}.i-amphtml-story-access-logo:before{content:""!important;position:absolute!important;top:-6px!important;bottom:-6px!important;left:-6px!important;right:-6px!important;background:#fff!important;border-radius:6px!important;box-shadow:0 2px 3px rgba(0,0,0,0.12)!important;z-index:-1!important}.i-amphtml-story-access-close-button{position:absolute!important;top:0!important;right:0!important;height:36px!important;width:36px!important;color:#757575!important;cursor:pointer!important;font-size:24px!important;line-height:36px!important;text-align:center!important}.i-amphtml-story-access-content{padding:16px!important;font-size:14px!important;z-index:0!important}@media (min-width:420px){amp-story-access{-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-access-container{margin:0!important;width:calc(100vw - 80px)!important;max-width:800px!important}.i-amphtml-story-access-content{margin:0 auto!important;max-width:424px!important;-ms-flex-positive:1!important;flex-grow:1!important;overflow-y:auto!important}.i-amphtml-story-access-content::-webkit-scrollbar,.i-amphtml-story-access-overflow::-webkit-scrollbar{width:0px!important;background:transparent!important}[type=blocking] .i-amphtml-story-access-overflow{margin-top:0!important;border-radius:6px!important;box-shadow:0 1px 3px 1px rgba(0,0,0,0.2)!important}[type=blocking] .i-amphtml-story-access-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;max-height:60vh!important;min-height:20vh!important;border-radius:0px!important;opacity:0!important;transform:translateZ(0)!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}[type=blocking].i-amphtml-story-access-visible .i-amphtml-story-access-container{opacity:1!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}}[affiliate-link-icon]{position:relative!important;width:50px!important;height:50px!important}[affiliate-link-icon]:not([expanded]),[affiliate-link-icon]:not([expanded]) .i-amphtml-story-affiliate-link-circle{animation:i-amphtml-story-affiliate-link-collapse 0.2s cubic-bezier(0.4,0.0,0.2,1) forwards!important}[affiliate-link-icon][pristine],[affiliate-link-icon][pristine] .i-amphtml-story-affiliate-link-circle{animation:none!important}amp-story-page[active] [affiliate-link-icon][expanded],amp-story-page[active] [affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-circle{animation:i-amphtml-story-affiliate-link-expand 0.2s cubic-bezier(0.4,0.0,0.2,1) forwards!important;transform-origin:left!important}@keyframes i-amphtml-story-affiliate-link-expand{0%{width:40px;border-radius:50%}to{width:160px;border-radius:20px}}@keyframes i-amphtml-story-affiliate-link-collapse{0%{width:160px;border-radius:20px}to{width:40px;border-radius:50%}}.i-amphtml-story-affiliate-link-circle{position:absolute!important;background:#fff!important;margin:5px!important;width:40px!important;height:40px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important;border-radius:20px!important}[affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-circle{overflow:hidden!important}[affiliate-link-icon] .i-amphtml-story-reset.i-amphtml-hidden{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.i-amphtml-story-affiliate-link-text{visibility:hidden!important;text-align:center!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important;max-width:70px!important;width:70px!important;font-family:Roboto,sans-serif!important;font-size:14px!important;color:#3c4043!important;letter-spacing:0!important;line-height:40px!important}.i-amphtml-story-affiliate-link-launch{visibility:hidden!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:18px 18px!important;width:40px!important;height:40px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 48 48' fill='%23757575'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z'/%3E%3C/svg%3E")!important}amp-story-page[active] .i-amphtml-story-affiliate-link-pulse{position:absolute!important;border-radius:50%!important;background:hsla(0,0%,100%,0.4)!important;margin:5px!important;width:40px!important;height:40px!important;animation:pulse 1.5s cubic-bezier(0.4,0.0,0.2,1) infinite alternate!important}@keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.3)}}[affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-pulse{animation:none!important}[affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-launch,[affiliate-link-icon][expanded] .i-amphtml-story-affiliate-link-text{visibility:visible!important}@media any-hover{[affiliate-link-icon]:hover .i-amphtml-story-affiliate-link-circle{background:hsla(0,0%,100%,0.4)!important}[affiliate-link-icon]:hover .i-amphtml-story-affiliate-link-pulse{background:none!important;animation:none!important}}.i-amphtml-story-affiliate-link-icon{background-position:50%!important;background-repeat:no-repeat!important;background-size:24px 24px!important;color:rgba(0,0,0,0.54)!important;width:40px!important;height:40px!important}[affiliate-link-icon=shopping-cart] .i-amphtml-story-affiliate-link-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}[affiliate-link-icon=offer] .i-amphtml-story-affiliate-link-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z'/%3E%3C/svg%3E")!important}[affiliate-link-icon=flight] .i-amphtml-story-affiliate-link-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}[affiliate-link-icon=hotel] .i-amphtml-story-affiliate-link-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z'/%3E%3C/svg%3E")!important}[affiliate-link-icon=movie] .i-amphtml-story-affiliate-link-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}[affiliate-link-icon=activity] .i-amphtml-story-affiliate-link-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z'/%3E%3C/svg%3E")!important}[affiliate-link-icon=more-to-read] .i-amphtml-story-affiliate-link-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23005AF0'%3E%3Cpath fill='none' d='M-74 29h48v48h-48V29zM0 0h24v24H0V0zm0 0h24v24H0V0z'/%3E%3Cpath d='M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z'/%3E%3C/svg%3E")!important}.i-amphtml-story-background{background-color:transparent}amp-sidebar{background-color:#fff}amp-story[standalone].i-amphtml-story-desktop-panels{max-width:none!important;max-height:none!important;width:100vw!important;--i-amphtml-story-inactive-page-scale-factor:0.9}.i-amphtml-story-desktop-panels amp-story-page.i-amphtml-element{transform:perspective(1px) scale(var(--i-amphtml-story-inactive-page-scale-factor)) translateX(calc(250% + 192px)) translateY(0%)!important;opacity:0.05!important;transform-origin:left!important;border-radius:0!important;box-shadow:none!important}.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-visited],[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page.i-amphtml-element{transform:perspective(1px) scale(var(--i-amphtml-story-inactive-page-scale-factor)) translateX(calc(-350% - 192px)) translateY(0%)!important}[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page[i-amphtml-visited]{transform:perspective(1px) scale(var(--i-amphtml-story-inactive-page-scale-factor)) translateX(calc(250% + 192px)) translateY(0%)!important}.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="1"],.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="2"],.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="-1"],.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="-2"]{transition:opacity 350ms ease-out,transform 350ms cubic-bezier(0.4,0.0,0.2,1)!important}.i-amphtml-story-desktop-panels amp-story-page[active],.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="0"],[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page[active],[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="0"]{transform:perspective(1px) scale(1.0) translateX(calc(var(--i-amphtml-story-page-50vw, 50%)*-1)) translateY(0%)!important;opacity:1!important;transition:opacity 350ms cubic-bezier(0.0,0.0,0.2,1),transform 350ms cubic-bezier(0.4,0.0,0.2,1)!important}.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="-2"],[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="2"]{transform:perspective(1px) scale(var(--i-amphtml-story-inactive-page-scale-factor)) translateX(calc(var(--i-amphtml-story-page-50vw, 50%)*-5 - 128px)) translateY(0%)!important}.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="-1"],[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page[active]+amp-story-page:not([i-amphtml-desktop-position]):not([distance]),[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="1"]{transform:perspective(1px) scale(var(--i-amphtml-story-inactive-page-scale-factor)) translateX(calc(var(--i-amphtml-story-page-50vw, 50%)*-3 - 64px)) translateY(0%)!important}.i-amphtml-story-desktop-panels .prev-container,[dir=rtl] .i-amphtml-story-desktop-panels .next-container{left:calc(50% - var(--i-amphtml-story-page-50vw, 50%)*var(--i-amphtml-story-inactive-page-scale-factor)*3 - 64px*var(--i-amphtml-story-inactive-page-scale-factor))!important}.i-amphtml-story-desktop-panels .next-container,[dir=rtl] .i-amphtml-story-desktop-panels .prev-container{left:calc(var(--i-amphtml-story-page-50vw, 50%)*var(--i-amphtml-story-inactive-page-scale-factor) + 50% + 64px*var(--i-amphtml-story-inactive-page-scale-factor))!important}.i-amphtml-story-desktop-panels amp-story-page[active]+amp-story-page:not([i-amphtml-desktop-position]):not([distance]),.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="1"],[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="-1"]{transform:perspective(1px) scale(var(--i-amphtml-story-inactive-page-scale-factor)) translate(calc(var(--i-amphtml-story-page-50vw, 50%) + 64px))!important}.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="2"],[dir=rtl] .i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="-2"]{transform:perspective(1px) scale(var(--i-amphtml-story-inactive-page-scale-factor)) translate(calc(var(--i-amphtml-story-page-50vw, 50%)*3 + 128px))!important}.i-amphtml-story-next-hover>amp-story-page[i-amphtml-desktop-position="1"],.i-amphtml-story-prev-hover>amp-story-page[i-amphtml-desktop-position="-1"]{opacity:0.3!important}.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="1"][amp-access-hide]:before{content:""!important;position:absolute!important;top:50%!important;left:50%!important;margin:-48px 0 0 -48px!important;width:96px!important;height:96px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='96' height='96' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h24v24H0V0z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' d='M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z'/%3E%3C/svg%3E")!important;z-index:4!important}.i-amphtml-story-desktop-panels amp-story-page[i-amphtml-desktop-position="1"][amp-access-hide]>*{filter:blur(8px)!important}.i-amphtml-story-desktop-panels .i-amphtml-story-media-query-matcher,.i-amphtml-story-desktop-panels>amp-story-page{left:50%!important;right:auto!important;margin:auto!important;max-height:75vh!important;max-width:45vh!important;min-width:320px!important;min-height:533px!important}.i-amphtml-story-desktop-panels .i-amphtml-story-button-container{height:calc(75vh*var(--i-amphtml-story-inactive-page-scale-factor))!important;width:calc(45vh*var(--i-amphtml-story-inactive-page-scale-factor))!important;min-width:calc(320px*var(--i-amphtml-story-inactive-page-scale-factor))!important;min-height:calc(533px*var(--i-amphtml-story-inactive-page-scale-factor))!important}.amp-story-draggable-drawer-root{display:block!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;overflow:hidden!important;z-index:4!important;transform:translate3d(0,100%,0)!important;transition:transform 0.25s cubic-bezier(0.4,0.0,1,1),visibility 0s linear 0.4s!important;visibility:hidden!important}.amp-story-draggable-drawer-root[hidden]{display:none!important}.amp-story-draggable-drawer-root.i-amphtml-story-draggable-drawer-open{transform:translateZ(0)!important;transition:transform 0.4s cubic-bezier(0.0,0.0,0.2,1),visibility 0s linear 0s!important;visibility:visible!important}.i-amphtml-story-draggable-drawer{height:100%!important}.i-amphtml-story-draggable-drawer-container{height:calc(100% - 40px)!important;background:#fff!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important;transition:background 0.3s cubic-bezier(0.4,0.0,0.2,1)!important}.i-amphtml-story-draggable-drawer-theme-dark .i-amphtml-story-draggable-drawer-container{background:#202125!important}.i-amphtml-story-draggable-drawer-container[hidden]{display:block!important;background:hsla(0,0%,100%,0.92)!important}.i-amphtml-story-draggable-drawer-theme-dark .i-amphtml-story-draggable-drawer-container[hidden]{background:rgba(32,33,37,0.82)!important}.i-amphtml-story-draggable-drawer-content{opacity:1!important;transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content{opacity:0!important}.i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content>*{display:none!important}[desktop] .amp-story-draggable-drawer-root{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;background:rgba(0,0,0,0.55)!important;opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1),transform 0s linear 0.15s,visibility 0s linear 0.4s!important}[desktop] .amp-story-draggable-drawer-root.i-amphtml-story-draggable-drawer-open{opacity:1!important;transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1),visibility 0s linear 0s!important;transform:translateZ(0)!important}[desktop] .i-amphtml-story-draggable-drawer{height:60vh!important;width:800px!important;border-radius:8px!important;overflow:hidden!important}[desktop] .i-amphtml-amp-story-page-attachment-ui-v2.amp-story-draggable-drawer-root{background:none!important}.i-amphtml-amp-story-page-attachment-ui-v2.amp-story-draggable-drawer-root{--i-amphtml-draggable-drawer-background-color:#fff!important;--i-amphtml-draggable-drawer-text-color:#202125!important}[theme=dark].i-amphtml-amp-story-page-attachment-ui-v2.amp-story-draggable-drawer-root{--i-amphtml-draggable-drawer-background-color:#202125!important;--i-amphtml-draggable-drawer-text-color:#fff!important}amp-story:not([desktop]) .i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-draggable-drawer-container{border-radius:16px!important;height:100%!important;border-radius:16px 16px 0 0!important;background:none!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-draggable-drawer-spacer{display:none!important}amp-story:not([desktop]) .i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-draggable-drawer-spacer{background:none!important;display:block!important;height:calc(var(--story-page-vh)*100)!important;min-height:calc(var(--story-page-vh)*20)!important}body:not(.amp-mode-keyboard-active) amp-story:not([desktop]) .i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-draggable-drawer-spacer{outline:none!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-draggable-drawer-content{background:var(--i-amphtml-draggable-drawer-background-color)!important;color:var(--i-amphtml-draggable-drawer-text-color)!important}amp-story:not([desktop]) .i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-draggable-drawer-content{border-radius:inherit!important}:host{visibility:inherit!important}.i-amphtml-story-page-attachment-remote{height:48px!important;bottom:0!important;top:auto!important}.i-amphtml-story-page-attachment-remote .i-amphtml-story-draggable-drawer-container{height:100%!important;border-radius:8px 8px 0 0!important;box-shadow:0 1px 2px 1px rgba(0,0,0,0.12)!important}.i-amphtml-story-page-attachment-remote-content{display:-ms-flexbox!important;display:flex!important;padding:0 24px!important;-ms-flex-align:center!important;align-items:center!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;font-size:15px!important;-ms-flex-pack:justify!important;justify-content:space-between!important;line-height:48px!important;text-decoration:none!important}.i-amphtml-story-page-attachment-remote-title{max-width:calc(100% - 30px)!important;overflow:hidden!important;text-overflow:ellipsis!important}.i-amphtml-story-draggable-drawer-theme-dark .i-amphtml-story-page-attachment-remote-title{color:#9aa0a6!important}.i-amphtml-story-page-attachment-remote-icon{display:block!important;height:24px!important;width:24px!important;padding:0px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 48 48' fill='%239AA0A6'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z'/%3E%3C/svg%3E")!important}.i-amphtml-story-page-attachment-expand{position:relative!important;width:100%!important;height:100%!important;background:#fff!important;z-index:100000!important;animation:i-amphtml-open-3p-attachment 120ms cubic-bezier(0.0,0.0,0.2,1) forwards!important}@keyframes i-amphtml-open-3p-attachment{0%{transform:scaleX(0);opacity:0.3}to{transform:scaleX(1);opacity:1}}amp-story[desktop] .i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-attachment-remote{display:none!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-attachment-remote{height:56px!important;--i-amphtml-outlink-cta-background-color:#fff!important;--i-amphtml-outlink-cta-text-color:#000!important}[theme=dark].i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-attachment-remote{--i-amphtml-outlink-cta-background-color:#000!important;--i-amphtml-outlink-cta-text-color:#fff!important}[href].i-amphtml-amp-story-page-attachment-ui-v2.amp-story-draggable-drawer-root.i-amphtml-story-draggable-drawer-open{transition-duration:.3s!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-remote-content{height:56px!important;padding-inline-start:12px!important;padding-inline-end:18px!important;background:var(--i-amphtml-outlink-cta-background-color)!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-remote-content .i-amphtml-story-page-attachment-remote-img,.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-remote-content .i-amphtml-story-page-open-attachment-link-icon{width:32px!important;height:32px!important;-ms-flex-negative:0!important;flex-shrink:0!important;padding:0px!important;border-radius:50%!important;background-size:cover!important;background-repeat:no-repeat!important;overflow:hidden!important}.i-amphtml-amp-story-page-attachment-ui-v2 svg.i-amphtml-story-page-open-attachment-link-icon{fill:var(--i-amphtml-outlink-cta-text-color)!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-remote-title{font-size:14px!important;padding:0 12px!important;color:var(--i-amphtml-outlink-cta-text-color)!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-remote-title :first-child{font-weight:700!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-remote-title :first-child:after{content:"\\00a0 "!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-remote-title :nth-child(2){white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.i-amphtml-amp-story-page-attachment-ui-v2 .i-amphtml-story-page-attachment-remote-icon{margin-inline-start:auto!important;width:20px!important;height:20px!important;-ms-flex-negative:0!important;flex-shrink:0!important;fill:var(--i-amphtml-outlink-cta-text-color)!important;background:none!important}.i-amphtml-story-page-attachment-remote>a:first-child{display:none!important}.i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-attachment-remote.i-amphtml-story-draggable-drawer-open:after{content:""!important;position:absolute!important;width:100%!important;height:4px!important;color:#000!important;bottom:0!important;background-color:var(--i-amphtml-outlink-cta-text-color)!important;opacity:.6!important;transform-origin:left!important;animation:progress-bar-animation .6s cubic-bezier(0.4,0.0,1,1) both!important}[dir=rtl] .i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-attachment-remote.i-amphtml-story-draggable-drawer-open:after{transform-origin:right!important}@keyframes progress-bar-animation{0%{transform:scaleX(0)}to{transform:scaleX(1)}}amp-story:not([desktop]) .i-amphtml-amp-story-page-attachment-ui-v2.i-amphtml-story-page-attachment-remote .i-amphtml-story-draggable-drawer-spacer{display:none!important}[orientation=landscape] [position=landscape-half-left]{width:50%!important;left:0!important;right:auto!important}[orientation=landscape] [position=landscape-half-right]{width:50%!important;left:auto!important;right:0!important}amp-story{font-display:optional}amp-story-grid-layer:not([aspect-ratio]){overflow:hidden}amp-story-grid-layer *{box-sizing:border-box;margin:0}.i-amphtml-story-grid-template-fill amp-anim img,.i-amphtml-story-grid-template-fill amp-img img,.i-amphtml-story-grid-template-fill amp-video video,.i-amphtml-story-grid-template-with-full-bleed-animation amp-img img{-o-object-fit:cover;object-fit:cover}.i-amphtml-story-grid-template-vertical{-ms-flex-line-pack:start;align-content:start;grid-gap:16px;-ms-flex-pack:stretch;justify-content:stretch;justify-items:start}.i-amphtml-story-grid-template-vertical>*{width:100%}.i-amphtml-story-grid-template-horizontal{-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:start;align-items:start;grid-gap:16px;-ms-flex-pack:start;justify-content:start}amp-story-grid-layer{padding:68px 32px 32px}amp-story-grid-layer.i-amphtml-story-has-page-attachment.i-amphtml-story-has-interactive{padding-bottom:104px}amp-story-grid-layer.i-amphtml-story-has-CTA-layer.i-amphtml-story-has-interactive{padding-bottom:20%}amp-story[standalone][i-amphtml-vertical]{height:auto!important;contain:initial!important}[i-amphtml-vertical] *{transition-delay:0s!important;transition-duration:0s!important}[i-amphtml-vertical] amp-story-page{position:relative!important;height:178vw!important;contain:initial!important;overflow:visible!important}amp-story[i-amphtml-vertical].i-amphtml-element amp-story-page.i-amphtml-element{transform:none!important}[i-amphtml-vertical] .i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content{opacity:1!important}[i-amphtml-vertical] .i-amphtml-story-draggable-drawer-container[hidden] .i-amphtml-story-draggable-drawer-content>*{display:block!important}[i-amphtml-vertical] amp-story-page-attachment{display:block!important;position:relative!important;transform:none!important}[i-amphtml-vertical] .i-amphtml-story-page-attachment-remote-title{overflow:visible!important}[i-amphtml-vertical] .amp-story-draggable-drawer-root{visibility:visible!important}[i-amphtml-vertical] .i-amphtml-story-page-description{background:#fff!important;display:block!important;padding:32px!important;width:auto!important;z-index:9999999!important}[i-amphtml-vertical] .i-amphtml-story-page-description>*{background:#fff!important;color:#000!important;font-size:1rem!important}[i-amphtml-vertical] .i-amphtml-story-page-description>h2{font-size:1.5rem!important}.i-amphtml-story-button-container{cursor:pointer!important;position:absolute!important;width:30px!important;top:0!important;bottom:0!important;height:calc(100vh - 150px)!important;margin:auto 0!important;background:none!important;transition:opacity 150ms linear,visibility 150ms linear!important;outline:none!important;z-index:100002!important}amp-story:not([desktop]) .i-amphtml-story-button-container{pointer-events:none!important}.i-amphtml-story-button-container.next-container>.i-amphtml-story-button-move,.next-container{left:auto!important;right:0!important}[dir=rtl] .i-amphtml-story-button-container.next-container>.i-amphtml-story-button-move,[dir=rtl] .next-container{left:0!important;right:auto!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-button-container{pointer-events:none!important}[dir=rtl] amp-story:not([desktop]) .i-amphtml-story-button-move,amp-story:not([desktop]) .i-amphtml-story-button-move{width:100%!important;height:100%!important;border:none!important;padding:0!important;pointer-events:none!important;background-repeat:no-repeat!important;background-color:transparent!important;filter:invert(100%) drop-shadow(0 0 3px rgba(0,0,0,0.5))!important}body:not(.amp-mode-keyboard-active) amp-story:not([desktop]) .i-amphtml-story-button-move{background:none!important}[desktop] .i-amphtml-story-button-move{display:-ms-flexbox!important;display:flex!important;position:fixed!important;top:0!important;bottom:0!important;margin:auto 40px!important;width:60px!important;height:60px!important;border-radius:50%!important;border:0!important;background-color:#fff!important;background-repeat:no-repeat!important;background-size:12px 17px!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important;opacity:.5!important;transition:opacity 150ms linear,transform 350ms linear!important;cursor:pointer!important;pointer-events:all!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-button-move{height:48px!important;width:48px!important;margin:auto 12px!important;background-color:transparent!important;background-size:auto!important;filter:drop-shadow(0 0 16px rgba(0,0,0,0.5))!important;opacity:1!important}.prev-container>.i-amphtml-story-button-move,[dir=rtl] .i-amphtml-story-fwd-next>.i-amphtml-story-button-move{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m15.7 22-9.5-9.5L15.7 3l-3-3L.4 12.6 12.8 25'/%3E%3C/svg%3E")!important;background-position:45% 50%!important;left:0!important;right:auto!important}.i-amphtml-story-desktop-fullbleed .prev-container>.i-amphtml-story-button-move,.i-amphtml-story-desktop-fullbleed[dir=rtl] .i-amphtml-story-fwd-next>.i-amphtml-story-button-move{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z'/%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3C/svg%3E")!important;background-position:10px 0!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move,[dir=rtl] .prev-container>.i-amphtml-story-button-move{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.3 3 9.5 9.5L.3 22l3 3 12.4-12.5L3.2 0'/%3E%3C/svg%3E")!important;background-position:55% 50%!important;left:auto!important;right:0!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-fwd-next>.i-amphtml-story-button-move,.i-amphtml-story-desktop-fullbleed[dir=rtl] .prev-container>.i-amphtml-story-button-move{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='M11.76 8.24 27.51 24 11.76 39.76 16 44l20-20L16 4z'/%3E%3Cpath fill='none' d='M0 0h48v48H0z'/%3E%3C/svg%3E")!important}.i-amphtml-story-fwd-replay{pointer-events:none!important}.i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z'/%3E%3C/svg%3E")!important;background-size:auto!important}.i-amphtml-story-fwd-more>.i-amphtml-story-button-move{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-fwd-more>.i-amphtml-story-button-move{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' fill='%23FFF'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'/%3E%3C/svg%3E")!important;background-size:auto!important}.i-amphtml-story-button-hidden{visibility:hidden!important;opacity:0!important;pointer-events:none!important}.i-amphtml-story-desktop-panels.i-amphtml-story-next-hover>.i-amphtml-story-fwd-next>.i-amphtml-story-button-move{transform:translateX(8px)!important;opacity:1!important}.i-amphtml-story-desktop-panels.i-amphtml-story-next-hover>.i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{opacity:1!important}.i-amphtml-story-desktop-panels.i-amphtml-story-prev-hover>.i-amphtml-story-back-prev>.i-amphtml-story-button-move{transform:translateX(-8px)!important;opacity:1!important}amp-story,amp-story-cta-layer,amp-story-page{contain:strict!important;overflow:hidden!important;-webkit-touch-callout:none!important}amp-story-grid-layer{contain:size layout!important;-webkit-touch-callout:none!important}amp-story amp-consent{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:none!important;z-index:initial!important}@media (prefers-reduced-motion:reduce){*,:after,:before{animation-duration:0s!important;transition-duration:0s!important}}amp-consent.amp-hidden{display:none!important}.i-amphtml-story-system-reset,.i-amphtml-story-system-reset *{border:none!important;box-sizing:initial!important;color:initial!important;font-family:Roboto,sans-serif!important;font-size:initial!important;font-weight:initial!important;height:auto!important;margin:0!important;padding:0!important;text-align:start!important;text-shadow:none!important;width:auto!important}amp-story{height:100%!important;position:relative!important;text-rendering:geometricPrecision!important;-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important;width:100%!important;-ms-touch-action:manipulation!important;touch-action:manipulation!important}html.i-amphtml-story-standalone{font-size:calc(var(--story-page-vmax, 8px)*2.5)}html.i-amphtml-story-standalone,html.i-amphtml-story-standalone body{font-size:calc(var(--story-page-vh, 8px)*2.5);height:100%!important;margin:0!important;padding:0!important;width:100%!important;border:0!important;cursor:auto!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}h4,p{font-size:1rem}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.17rem}h5{font-size:0.83rem}h6{font-size:0.67rem}html.i-amphtml-story-standalone #i-amphtml-wrapper body{border-top:none!important;overflow:hidden!important}amp-story[standalone]{-ms-flex-item-align:center!important;align-self:center!important;box-shadow:2px 2px 20px rgba(0,0,0,0.5)!important;height:100%!important;justify-self:center!important;max-height:initial!important;max-width:initial!important;min-height:initial!important;min-width:initial!important}amp-story[standalone].amp-notbuilt{min-height:1px!important}amp-story[standalone]:-webkit-full-screen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:-ms-fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[hide]{display:none!important}amp-story .amp-video-eq{height:14px!important;width:14px!important}amp-story .amp-video-eq .amp-video-eq-col{margin-right:2px!important}amp-story .amp-video-eq .amp-video-eq-col:last-child{margin-right:0!important}.i-amphtml-story-no-audio-ui .amp-video-eq,amp-story .amp-video-eq:not(.amp-video-eq-play){display:none!important}.i-amphtml-story-media-query-matcher,amp-story-page{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;opacity:1!important;-ms-touch-action:none!important;touch-action:none!important;transition:none!important;z-index:0!important}.i-amphtml-story-media-query-matcher{height:inherit!important;width:inherit!important;border:0!important;z-index:-1!important}amp-story-page[active]{z-index:1!important}.i-amphtml-story-sidebar[open]{animation-timing-function:cubic-bezier(0.0,0.0,0.2,1)!important;animation-duration:0.3s!important;animation-name:i-amphtml-sidebar-slide-in-right}[desktop] .i-amphtml-story-sidebar{min-width:25%!important;max-width:600px!important}.i-amphtml-story-sidebar{min-width:75%!important;max-width:360px!important;animation-timing-function:cubic-bezier(0.4,0.0,1,1)!important;animation-duration:0.2s!important;animation-name:i-amphtml-sidebar-slide-out-right}amp-story-page:not(:first-of-type):not([distance]):not([active]),amp-story-page:not([active]){transform:translateY(1000vh)!important}amp-story-page[active],amp-story-page[distance="0"],amp-story-page[distance="1"]{transform:translateY(0)!important}amp-story-page[distance="2"]{transform:translateY(100%)!important}amp-story-page [data-text-background-color]{border-radius:3px!important;line-height:1.5em!important;padding:2px 4px!important;text-indent:0!important;box-decoration-break:clone!important;-webkit-box-decoration-break:clone!important}.i-amphtml-story-attachment-active amp-story-page[active]:after{content:""!important;display:block!important;left:0!important;top:0!important;bottom:0!important;right:0!important;position:absolute!important;background:#000!important;z-index:2!important;animation:i-amphtml-drawwer-overlay-opacity 0.3s cubic-bezier(0.0,0.0,0.2,1) forwards!important}@keyframes i-amphtml-drawer-overlay-opacity{0%{opacity:0}to{opacity:0.75}}.i-amphtml-story-attachment-active amp-story-page[active]:after{z-index:3!important;animation:i-amphtml-attachment-overlay-opacity 0.3s cubic-bezier(0.0,0.0,0.2,1) forwards!important}@keyframes i-amphtml-attachment-overlay-opacity{0%{opacity:0}to{opacity:0.5}}.i-amphtml-story-opacity-mask{position:absolute!important;top:0!important;bottom:0!important;width:100%!important;height:100%!important;opacity:1!important;display:block!important;background-image:none!important;background-color:rgba(0,0,0,0.75)!important;visibility:visible;z-index:100003!important;transition:visibility 0.3s,opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-opacity-mask[hidden]{opacity:0!important;pointer-events:none!important;display:block!important;visibility:hidden;transition:visibility 0.2s,opacity 0.2s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-sidebar-mask{display:none!important}amp-story-cta-layer{display:block!important;top:80%!important;margin:0!important;z-index:3!important}amp-story-cta-layer,amp-story-grid-layer{position:absolute!important;right:0!important;bottom:0!important;left:0!important}amp-story-grid-layer{box-sizing:border-box!important;display:grid!important;top:0!important;z-index:2!important;pointer-events:none!important}amp-story-grid-layer[anchor*=left]{margin-left:0!important}amp-story-grid-layer[anchor*=top]{margin-top:0!important}amp-story-grid-layer[anchor*=bottom]{margin-bottom:0!important}amp-story-grid-layer[anchor*=right]{margin-right:0!important;margin-left:auto!important}amp-story-grid-layer amp-video:after{content:""!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}.i-amphtml-story-grid-template-fill amp-img img,.i-amphtml-story-grid-template-fill amp-video video{position:absolute!important}amp-story-page[active]:not(.i-amphtml-layout) amp-video.i-amphtml-poolbound{display:none!important}amp-story-grid-layer>*{pointer-events:auto!important}amp-story-grid-layer a *{pointer-events:none!important}amp-story-grid-layer .i-amphtml-embedded-component:after{content:""!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}.i-amphtml-expanded-mode .i-amphtml-embedded-component:after{height:0px!important;width:0px!important}.i-amphtml-expanded-mode amp-story-grid-layer,.i-amphtml-expanded-mode amp-story-grid-layer *{contain:none!important;z-index:auto!important}.i-amphtml-expanded-mode .i-amphtml-embedded-component.i-amphtml-expanded-component{z-index:1!important;transition:transform 0.225s cubic-bezier(0.4,0.0,0.2,1)!important}.i-amphtml-story-grid-template-with-full-bleed-animation{position:absolute!important;display:block!important;padding:0!important}.i-amphtml-story-grid-template-fill>*{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important}.i-amphtml-story-grid-template-vertical{grid-auto-flow:row!important;grid-template-columns:100%!important}.i-amphtml-story-grid-template-horizontal{grid-auto-flow:column!important;grid-template-rows:100%!important}.i-amphtml-story-grid-template-thirds{height:100%!important;grid-template-rows:33% 33% 33%!important;grid-template-areas:"upper-third" "middle-third" "lower-third"!important}.i-amphtml-story-grid-template-aspect{margin:auto;width:var(--i-amphtml-story-layer-width,100%);height:var(--i-amphtml-story-layer-height,100%);font-size:calc(var(--i-amphtml-story-layer-height, 100vh)/10);margin-left:calc(var(--story-page-vw, 1%)*100*0.5 - var(--i-amphtml-story-layer-width, 100%)*0.5)}.i-amphtml-story-dev-logs-button[data-count="0"]{display:none!important}.i-amphtml-story-dev-logs-button{background-position:50%!important;background-repeat:no-repeat!important}.i-amphtml-story-dev-logs-button:after{background-color:#fff!important;border-radius:6px!important;box-sizing:border-box!important;color:#444;content:attr(data-count)!important;display:inline-block!important;font-family:Roboto!important;font-size:11px!important;height:12px!important;line-height:12px!important;padding:0 6px!important;position:absolute!important;right:0!important;top:6px!important}.i-amphtml-story-error-button{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23DB4437'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-warning-button{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E")!important}.i-amphtml-story-success-button{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E")!important}amp-story[standalone] .i-amphtml-story-developer-log{background:rgba(0,0,0,0.85)!important;bottom:0!important;box-sizing:border-box!important;color:#fff!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;font-family:Roboto!important;left:0!important;max-height:45%!important;padding:0!important;position:fixed!important;right:0!important;text-align:start!important;z-index:100002!important}.i-amphtml-story-developer-log-header{-ms-flex-align:center!important;align-items:center!important;background:rgb(3,169,244,0.85)!important;display:-ms-flexbox!important;display:flex!important;font-weight:700!important;-ms-flex-pack:justify!important;justify-content:space-between!important;padding:12px 20px!important;text-align:center!important}.i-amphtml-story-developer-log-close,.i-amphtml-story-developer-log-header{-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important}.i-amphtml-story-developer-log-close{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23FFF' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-developer-log-context{color:#000!important;font-family:Roboto Mono!important}.i-amphtml-story-developer-log-entries{list-style-type:none!important;margin:0!important;overflow-x:hidden!important;overflow-y:auto!important;padding:0!important}.i-amphtml-story-developer-log-entry{-ms-flex-align:center!important;align-items:center!important;border-bottom:1px solid hsla(0,0%,100%,0.5)!important;display:-ms-flexbox!important;display:flex!important;padding:20px!important}.i-amphtml-story-developer-log-entry:before{background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;content:"";display:inline-block!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;height:32px!important;margin-right:20px!important;width:32px!important}.i-amphtml-story-developer-log-entry-error:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23DB4437'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-developer-log-entry-warning:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E")!important}.i-amphtml-story-developer-log-entry-success:before{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E")!important}.i-amphtml-story-toast{position:absolute!important;bottom:0!important;left:0!important;right:0!important;display:inline-block!important;padding:1.16em 1.33em!important;line-height:1.33!important;color:#fff!important;background:#212121!important;animation:toast 2.2s!important;animation-fill-mode:both!important;font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:12px!important;max-width:640px!important;z-index:100004!important}@media (min-width:640px){.i-amphtml-story-toast{right:auto!important;font-size:14px!important;margin:0 auto 1.16em 1.16em!important;border-radius:6px}}@keyframes toast{0%{transform:translateY(100px);easing:cubic-bezier(0.0,0.0,0.2,1)}8%{transform:translateY(0)}92%{transform:translateY(0);easing:cubic-bezier(0.4,0.0,1,1)}to{transform:translateY(100px)}}.i-amphtml-story-copy-successful{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E")!important;background-repeat:no-repeat!important;background-size:16px 16px!important;padding-left:24px!important;color:#fff!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-copy-url{-ms-flex:1!important;flex:1!important;color:hsla(0,0%,100%,0.5)!important;margin-left:40px!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important}.i-amphtml-story-spinner,amp-story .amp-video-eq{right:12px!important;bottom:12px!important}[dir=rtl] .i-amphtml-story-spinner,[dir=rtl] amp-story .amp-video-eq{left:12px!important;right:auto!important}.i-amphtml-story-spinner{display:inline-block!important;position:absolute!important;width:24px!important;height:24px!important;z-index:10!important}.i-amphtml-story-spinner-container{width:100%!important;height:100%!important;direction:ltr!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-container{animation:container-rotate 1294ms linear infinite!important}@keyframes container-rotate{to{transform:rotate(360deg)}}.i-amphtml-story-spinner-layer{position:absolute!important;width:100%!important;height:100%!important;opacity:0!important;white-space:nowrap!important;color:#fff!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-layer{animation-name:fill-unfill-rotate!important;animation-duration:4400ms!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-iteration-count:infinite!important;opacity:1!important;filter:drop-shadow(0px 1px 3px rgba(0,0,0,0.25))!important}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}.i-amphtml-story-spinner-circle-clipper{display:inline-block!important;position:relative!important;width:50%!important;height:100%!important;overflow:hidden!important}.i-amphtml-story-spinner-layer:after{left:45%!important;width:10%!important;border-top-style:solid!important}.i-amphtml-story-spinner-circle-clipper:after,.i-amphtml-story-spinner-layer:after{content:""!important;box-sizing:border-box!important;position:absolute!important;top:0!important;border-width:3px!important;border-radius:50%!important}.i-amphtml-story-spinner-circle-clipper:after{bottom:0!important;width:200%!important;border-style:solid!important;border-bottom-color:transparent!important}.i-amphtml-story-spinner-circle-clipper.left:after{left:0!important;border-right-color:transparent!important;transform:rotate(129deg)!important}.i-amphtml-story-spinner-circle-clipper.right:after{left:-100%!important;border-left-color:transparent!important;transform:rotate(-129deg)!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper:after{animation-duration:1100ms!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-iteration-count:infinite!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.left:after{animation-name:left-spin!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.right:after{animation-name:right-spin!important}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}.i-amphtml-story-page-error,.i-amphtml-story-page-play-button{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;position:absolute!important;bottom:0!important;right:0!important;height:40px!important;border:0!important;margin:8px 0 0 8px!important;padding:0!important;animation:play-button-fly-in 0.4s cubic-bezier(0.4,0.0,0.2,1)!important;background-color:transparent!important;z-index:10000!important}.i-amphtml-story-expanded-view-overflow{top:0!important;left:0!important;width:100%!important;height:100%!important;background-color:#000!important;position:absolute!important}.i-amphtml-expanded-view-close-button{position:absolute!important;top:0!important;left:0!important;margin:12px!important;height:24px!important;width:24px!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 36 36' fill='rgba(255, 255, 255, 0.8)'%3E%3Cpath d='M28.5 9.62 26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z'/%3E%3Cpath d='M0 0h36v36H0z' fill='none'/%3E%3C/svg%3E")!important;cursor:pointer!important;text-align:center!important;background-color:transparent!important}@keyframes play-button-fly-in{0%{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}.i-amphtml-story-page-error[hidden],.i-amphtml-story-page-play-button[hidden]{display:none!important}.i-amphtml-story-page-error-label,.i-amphtml-story-page-play-label{color:#fff!important;font-family:Roboto,sans-serif!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important}.i-amphtml-story-page-error-icon,.i-amphtml-story-page-play-icon{display:inline-block!important;height:24px!important;width:24px!important;margin:0 8px!important;border-radius:24px!important;filter:drop-shadow(0px 0px 6px rgba(0,0,0,0.36))!important}.i-amphtml-story-page-error-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/%3E%3C/svg%3E")!important}.i-amphtml-story-page-play-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 48 48' fill='%23FFF'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z'/%3E%3C/svg%3E")!important}.i-amphtml-story-interactive-component{-ms-flex-item-align:center;align-self:center;height:auto!important;pointer-events:none!important;min-width:14em!important;max-width:25em!important;font-size:calc(var(--story-page-vmin)*3);width:100%;--interactive-accent-color:#005af0;--interactive-prompt-background:var(--interactive-accent-color);--interactive-prompt-text-color:#fff;--interactive-prompt-alignment:initial;--i-amphtml-interactive-option-accent-color:var(--interactive-accent-color)!important;--i-amphtml-interactive-option-background-color:#fff!important;--i-amphtml-interactive-options-chip-background-color:var(--i-amphtml-interactive-option-background-color)!important;--i-amphtml-interactive-option-text-color:#55595e!important;--i-amphtml-interactive-theme-border:rgba(85,89,94,0.2)!important;--i-amphtml-interactive-theme-shading:rgba(85,89,94,0.2)!important;--i-amphtml-interactive-theme-shading-base:#dedee1!important;--i-amphtml-interactive-theme-shading-flash:rgba(85,89,94,0.5)!important;--i-amphtml-interactive-chip-radius:2em!important;--i-amphtml-interactive-chip-shadow:0px 0px 0px transparent!important;--i-amphtml-interactive-chip-shadow-inset:inset 0px 0px 0px transparent!important;--i-amphtml-interactive-answer-choice-border:var(--interactive-accent-color)!important;--i-amphtml-interactive-answer-choice-background:#fff!important;--i-amphtml-interactive-prompt-text-size:1.375em!important;--i-amphtml-interactive-prompt-line-height:1.3em!important;--i-amphtml-interactive-strong-text-color:#000!important;--i-amphtml-interactive-animation-time:.3s!important;--i-amphtml-interactive-ease-out-curve:cubic-bezier(.3,0,0,1)!important;--i-amphtml-interactive-animation-delay:0s!important;--i-amphtml-interactive-component-shadow:0px 4px 12px rgba(60,64,67,0.08),0px 2px 4px rgba(60,64,67,0.12);--i-amphtml-interactive-prompt-clamp:4!important;--i-amphtml-interactive-results-prompt-margin:20px!important}.i-amphtml-story-interactive-component[theme=dark]{--i-amphtml-interactive-option-text-color:#a7adb4!important;--i-amphtml-interactive-option-background-color:#202124!important;--i-amphtml-interactive-theme-border:hsla(212,8%,68%,0.2)!important;--i-amphtml-interactive-theme-shading:hsla(212,8%,68%,0.2)!important;--i-amphtml-interactive-theme-shading-base:#3c3d3f!important;--i-amphtml-interactive-theme-shading-flash:hsla(212,8%,68%,0.5)!important;--i-amphtml-interactive-strong-text-color:#fff!important}.i-amphtml-story-interactive-component[chip-style=shadow]{--i-amphtml-interactive-chip-shadow:0px 2px 8px rgba(60,60,60,0.2)!important;--i-amphtml-interactive-chip-shadow-inset:inset 4px 4px 8px rgba(0,0,0,0.2)!important;--i-amphtml-interactive-theme-border:transparent!important}.i-amphtml-story-interactive-component:not(amp-story-interactive-results)[chip-style=transparent]{--i-amphtml-interactive-options-chip-background-color:transparent!important;--interactive-prompt-background:transparent!important;--interactive-prompt-alignment:center;--i-amphtml-interactive-chip-shadow:0px 2px 8px rgba(60,60,60,0.2)!important;--i-amphtml-interactive-chip-shadow-inset:inset 4px 4px 8px rgba(0,0,0,0.2)!important;--i-amphtml-interactive-theme-border:transparent!important;--i-amphtml-interactive-component-shadow:none!important}.i-amphtml-story-interactive-component[chip-style=shadow][theme=dark]{--i-amphtml-interactive-chip-shadow:0px 2px 8px 0px rgba(0,0,0,0.6)!important;--i-amphtml-interactive-chip-shadow-inset:inset 4px 4px 8px rgba(0,0,0,0.4)!important}.i-amphtml-story-interactive-component[prompt-size=large]{--i-amphtml-interactive-prompt-text-size:1.75em!important;--i-amphtml-interactive-prompt-clamp:3!important}.i-amphtml-story-interactive-component[prompt-size=small]{--i-amphtml-interactive-prompt-text-size:1.125em!important}amp-story-interactive-binary-poll.i-amphtml-story-interactive-component,amp-story-interactive-results.i-amphtml-story-interactive-component{max-width:18em!important}amp-story-interactive-binary-poll[theme=dark],amp-story-interactive-poll[theme=dark]{--i-amphtml-interactive-option-accent-color:#fff!important}amp-story-interactive-results:not([chip-style=transparent]){--interactive-prompt-text-color:var(--i-amphtml-interactive-strong-text-color)}amp-story-interactive-results[chip-style=transparent]{--i-amphtml-interactive-option-text-color:#000!important;--i-amphtml-interactive-options-chip-background-color:transparent!important;--interactive-prompt-background:transparent;--i-amphtml-interactive-component-shadow:none!important;--interactive-prompt-text-color:#000;--i-amphtml-interactive-results-prompt-margin:0px!important}amp-story-interactive-results[theme=dark][chip-style=transparent]{--i-amphtml-interactive-option-text-color:#fff!important;--interactive-prompt-text-color:#fff}amp-story-page.i-amphtml-story-desktop-panels .i-amphtml-story-interactive-component{--i-amphtml-interactive-animation-delay:350ms!important}
/*# sourceURL=/extensions/amp-story/1.0/amp-story.css*/`;

  // src/pass.js
  function _classCallCheck30(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties29(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass29(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties29(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties29(Constructor, staticProps);
    return Constructor;
  }
  var Pass = /* @__PURE__ */ function() {
    function Pass2(win, handler, opt_defaultDelay) {
      var _this = this;
      _classCallCheck30(this, Pass2);
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
    _createClass29(Pass2, [{
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
  function _defineProperties30(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass30(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties30(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties30(Constructor, staticProps);
    return Constructor;
  }
  function _classCallCheck31(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var PROP_ = "__AMP_Gestures";
  var Gesture = function Gesture2(type, data, time, event) {
    _classCallCheck31(this, Gesture2);
    this.type = type;
    this.data = data;
    this.time = time;
    this.event = event;
  };
  var Gestures = /* @__PURE__ */ function() {
    function Gestures2(element, shouldNotPreventDefault, shouldStopPropagation) {
      _classCallCheck31(this, Gestures2);
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
    _createClass30(Gestures2, [{
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
          var index = findIndex(this.recognizers_, function(e) {
            return e.getType() == type;
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
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.ready_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
          }
          if (this.recognizers_[i].onTouchStart(event)) {
            this.startTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchMove_",
      value: function onTouchMove_(event) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.tracking_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
            continue;
          }
          if (!this.recognizers_[i].onTouchMove(event)) {
            this.stopTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchEnd_",
      value: function onTouchEnd_(event) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.tracking_[i]) {
            continue;
          }
          if (this.pending_[i] && this.pending_[i] < now) {
            this.stopTracking_(i);
            continue;
          }
          this.recognizers_[i].onTouchEnd(event);
          var isReady = !this.pending_[i];
          var isExpired = this.pending_[i] < now;
          var isEventing = this.eventing_ == this.recognizers_[i];
          if (!isEventing && (isReady || isExpired)) {
            this.stopTracking_(i);
          }
        }
        this.afterEvent_(event);
      }
    }, {
      key: "onTouchCancel_",
      value: function onTouchCancel_(event) {
        for (var i = 0; i < this.recognizers_.length; i++) {
          this.cancelEventing_(i);
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
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.recognizers_[i] == recognizer) {
            this.ready_[i] = now + offset;
            this.pending_[i] = 0;
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
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.recognizers_[i] == recognizer) {
            this.pending_[i] = now + timeLeft;
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
          for (var i = 0; i < this.recognizers_.length; i++) {
            if (this.ready_[i] || this.pending_[i] && this.pending_[i] >= now) {
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
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (!this.ready_[i]) {
            if (this.pending_[i] && this.pending_[i] < now) {
              this.stopTracking_(i);
            }
            continue;
          }
          if (readyIndex == -1 || this.ready_[i] > this.ready_[readyIndex]) {
            readyIndex = i;
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
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (i != index) {
            this.cancelEventing_(i);
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
      _classCallCheck31(this, GestureRecognizer2);
      this.type_ = type;
      this.manager_ = manager;
    }
    _createClass30(GestureRecognizer2, [{
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

  // build/amp-story-info-dialog-1.0.css.js
  var CSS8 = `:host{all:initial!important;color:initial!important}.amp-social-share-facebook{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E")}.amp-social-share-pinterest{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E")}.amp-social-share-linkedin{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E")}.amp-social-share-gplus{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E")}.amp-social-share-email{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3 64.1 49.1-64.1 64.1V194.1zm.2 150.1 84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E")}.amp-social-share-twitter{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E")}.amp-social-share-tumblr{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E")}.amp-social-share-whatsapp{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E")}.amp-social-share-line{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' style='fill:%23fff' data-name='\u30EC\u30A4\u30E4\u30FC 1'/%3E%3C/svg%3E")}.amp-social-share-sms{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")}.amp-social-share-system{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}amp-social-share:focus{outline:2px solid #0389ff;outline-offset:2px}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#32529f}.amp-social-share-pinterest{background-color:#e60023}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:block!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;overflow:auto!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:48px!important;display:block!important;cursor:pointer!important;border-radius:4px!important;overflow:visible!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:focus{outline:2px solid #0389ff!important;outline-offset:2px!important}.i-amphtml-story-share-icon[type=email]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon[type=system]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon-link{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon .i-amphtml-story-share-label{position:absolute!important;top:48px!important;left:0!important;width:100%!important;color:rgba(0,0,0,0.87)!important;padding-top:5px!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;font-weight:400!important;line-height:13px!important;font-size:11px!important;text-align:center!important}.i-amphtml-story-info-dialog{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100001!important;transform:translate3d(0,-100%,0)!important;transition-delay:0.15s!important}.i-amphtml-story-info-dialog-visible{transform:translateZ(0)!important;transition-delay:0s!important}.i-amphtml-story-info-dialog:before{content:""!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-info-dialog.i-amphtml-story-info-dialog-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-dialog-container{position:absolute!important;top:0!important;left:0!important;right:0!important;height:auto!important;background:#fff!important;border-radius:0 0 8px 8px!important;transform:translate3d(0,-100%,0)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;padding:20px!important;font-family:Roboto,sans-serif!important}.i-amphtml-story-info-dialog-visible .i-amphtml-story-info-dialog-container{transform:translateZ(0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-heading{display:block!important;font-size:14px!important;font-weight:700!important;margin:0 0 8px!important}.i-amphtml-story-info-link{color:#000!important;display:block!important;margin:0!important;opacity:0.64!important;font-size:12px!important;text-decoration:none!important}.i-amphtml-story-info-moreinfo{color:#4285f4!important;display:none!important;font-family:Roboto-Medium,sans-serif!important;font-size:12px!important;letter-spacing:0.5px!important;margin:16px 0 0;text-decoration:none!important}.i-amphtml-story-info-moreinfo.i-amphtml-story-info-moreinfo-visible{display:block!important}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-info-dialog.css*/`;

  // extensions/amp-story/1.0/amp-story-info-dialog.js
  var _templateObject10;
  function _taggedTemplateLiteralLoose8(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _classCallCheck32(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties31(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass31(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties31(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties31(Constructor, staticProps);
    return Constructor;
  }
  var DIALOG_VISIBLE_CLASS = "i-amphtml-story-info-dialog-visible";
  var MOREINFO_VISIBLE_CLASS = "i-amphtml-story-info-moreinfo-visible";
  var InfoDialog = /* @__PURE__ */ function() {
    function InfoDialog2(win, parentEl) {
      _classCallCheck32(this, InfoDialog2);
      this.win_ = win;
      this.element_ = null;
      this.innerContainerEl_ = null;
      this.isBuilt_ = false;
      this.localizationService_ = getLocalizationService(parentEl);
      this.storeService_ = getStoreService(this.win_);
      this.analyticsService_ = getAnalyticsService(this.win_, parentEl);
      this.parentEl_ = parentEl;
      this.mutator_ = Services.mutatorForDoc(getAmpdoc(this.win_.document));
      this.moreInfoLinkEl_ = null;
      this.viewer_ = Services.viewerForDoc(this.parentEl_);
    }
    _createClass31(InfoDialog2, [{
      key: "build",
      value: function build() {
        var _this = this;
        if (this.isBuilt()) {
          return resolvedPromise();
        }
        this.isBuilt_ = true;
        var root = this.win_.document.createElement("div");
        var html2 = htmlFor(this.parentEl_);
        this.element_ = html2(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose8(['\n      <div class="i-amphtml-story-info-dialog i-amphtml-story-system-reset">\n        <div class="i-amphtml-story-info-dialog-container">\n          <h1 class="i-amphtml-story-info-heading"></h1>\n          <a class="i-amphtml-story-info-link"></a>\n          <a class="i-amphtml-story-info-moreinfo"></a>\n        </div>\n      </div>\n    '])));
        createShadowRootWithStyle(root, this.element_, CSS8);
        this.initializeListeners_();
        this.innerContainerEl_ = this.element_.querySelector(".i-amphtml-story-info-dialog-container");
        var appendPromise = this.mutator_.mutateElement(this.parentEl_, function() {
          _this.parentEl_.appendChild(root);
        });
        var pageUrl = Services.documentInfoForDoc(getAmpdoc(this.parentEl_)).canonicalUrl;
        return Promise.all([appendPromise, this.setHeading_(), this.setPageLink_(pageUrl), this.requestMoreInfoLink_().then(function(moreInfoUrl) {
          return _this.setMoreInfoLinkUrl_(moreInfoUrl);
        })]);
      }
    }, {
      key: "isBuilt",
      value: function isBuilt() {
        return this.isBuilt_;
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.storeService_.subscribe(StateProperty.INFO_DIALOG_STATE, function(isOpen) {
          _this2.onInfoDialogStateUpdated_(isOpen);
        });
        this.element_.addEventListener("click", function(event) {
          return _this2.onInfoDialogClick_(event);
        });
      }
    }, {
      key: "onInfoDialogStateUpdated_",
      value: function onInfoDialogStateUpdated_(isOpen) {
        var _this3 = this;
        this.mutator_.mutateElement(dev().assertElement(this.element_), function() {
          _this3.element_.classList.toggle(DIALOG_VISIBLE_CLASS, isOpen);
        });
        this.element_[ANALYTICS_TAG_NAME] = "amp-story-info-dialog";
        this.analyticsService_.triggerEvent(isOpen ? StoryAnalyticsEvent.OPEN : StoryAnalyticsEvent.CLOSE, this.element_);
      }
    }, {
      key: "onInfoDialogClick_",
      value: function onInfoDialogClick_(event) {
        var _this4 = this;
        var el = dev().assertElement(event.target);
        if (!closest(el, function(el2) {
          return el2 === _this4.innerContainerEl_;
        }, this.element_)) {
          this.close_();
        }
        var anchorClicked = closest(event.target, function(e) {
          return matches(e, "a[href]");
        });
        if (anchorClicked) {
          triggerClickFromLightDom(anchorClicked, this.element);
          event.preventDefault();
        }
      }
    }, {
      key: "close_",
      value: function close_() {
        this.storeService_.dispatch(Action.TOGGLE_INFO_DIALOG, false);
      }
    }, {
      key: "requestMoreInfoLink_",
      value: function requestMoreInfoLink_() {
        if (!this.viewer_.isEmbedded()) {
          return Promise.resolve(null);
        }
        return this.viewer_.sendMessageAwaitResponse("moreInfoLinkUrl", void 0).then(function(moreInfoUrl) {
          if (!moreInfoUrl) {
            return null;
          }
          return assertAbsoluteHttpOrHttpsUrl(dev().assertString(moreInfoUrl));
        });
      }
    }, {
      key: "setHeading_",
      value: function setHeading_() {
        var label = this.localizationService_.getLocalizedString(LocalizedStringId.AMP_STORY_DOMAIN_DIALOG_HEADING_LABEL);
        var headingEl = dev().assertElement(this.element_.querySelector(".i-amphtml-story-info-heading"));
        return this.mutator_.mutateElement(headingEl, function() {
          headingEl.textContent = label;
        });
      }
    }, {
      key: "setPageLink_",
      value: function setPageLink_(pageUrl) {
        var linkEl = dev().assertElement(this.element_.querySelector(".i-amphtml-story-info-link"));
        return this.mutator_.mutateElement(linkEl, function() {
          linkEl.setAttribute("href", pageUrl);
          linkEl.textContent = pageUrl.replace(/([/.]+)/gi, "$1\u200B");
        });
      }
    }, {
      key: "setMoreInfoLinkUrl_",
      value: function setMoreInfoLinkUrl_(moreInfoUrl) {
        var _this5 = this;
        if (!moreInfoUrl) {
          return resolvedPromise();
        }
        this.moreInfoLinkEl_ = dev().assertElement(this.element_.querySelector(".i-amphtml-story-info-moreinfo"));
        return this.mutator_.mutateElement(this.moreInfoLinkEl_, function() {
          var label = _this5.localizationService_.getLocalizedString(LocalizedStringId.AMP_STORY_DOMAIN_DIALOG_HEADING_LINK);
          _this5.moreInfoLinkEl_.classList.add(MOREINFO_VISIBLE_CLASS);
          _this5.moreInfoLinkEl_.setAttribute("href", dev().assertString(moreInfoUrl));
          _this5.moreInfoLinkEl_.setAttribute("target", "_blank");
          _this5.moreInfoLinkEl_.textContent = label;
        });
      }
    }]);
    return InfoDialog2;
  }();

  // extensions/amp-story/1.0/live-story-manager.js
  function _classCallCheck33(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties32(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass32(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties32(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties32(Constructor, staticProps);
    return Constructor;
  }
  var AMP_LIVE_LIST_CUSTOM_SLOT_ID = "AMP_LIVE_LIST_CUSTOM_SLOT_ID";
  var LiveStoryManager = /* @__PURE__ */ function() {
    function LiveStoryManager2(ampStory) {
      _classCallCheck33(this, LiveStoryManager2);
      this.ampStory_ = ampStory;
      this.ampdoc_ = this.ampStory_.getAmpDoc();
      this.storyEl_ = ampStory.element;
      this.storeService_ = getStoreService(this.ampStory_.win);
    }
    _createClass32(LiveStoryManager2, [{
      key: "build",
      value: function build() {
        var _this = this;
        var liveListEl = createElementWithAttributes(this.ampStory_.win.document, "amp-live-list", dict({
          "id": "i-amphtml-" + this.storyEl_.id + "-dynamic-list",
          "data-poll-interval": this.storyEl_.getAttribute("data-poll-interval") || 15e3,
          "sort": "ascending",
          "disable-scrolling": "",
          "disable-pagination": "",
          "auto-insert": ""
        }));
        liveListEl[AMP_LIVE_LIST_CUSTOM_SLOT_ID] = userAssert(this.storyEl_.id, "amp-story must contain id to use the live story functionality");
        this.ampStory_.element.signals().whenSignal(CommonSignals.LOAD_END).then(function() {
          Services.extensionsFor(_this.ampdoc_.win).installExtensionForDoc(_this.ampdoc_, "amp-live-list");
          _this.storyEl_.insertBefore(liveListEl, _this.storyEl_.firstElementChild);
        });
      }
    }, {
      key: "update",
      value: function update() {
        var lastNewPageEl = lastChildElement(this.storyEl_, function(page) {
          return page.classList.contains("amp-live-list-item-new");
        });
        var storyPages = this.storyEl_.querySelectorAll("amp-story-page");
        var pageIds = Array.prototype.map.call(storyPages, function(el) {
          return el.id;
        });
        this.storeService_.dispatch(Action.SET_PAGE_IDS, pageIds);
        this.storeService_.dispatch(Action.ADD_NEW_PAGE_ID, lastNewPageEl.id);
      }
    }]);
    return LiveStoryManager2;
  }();

  // extensions/amp-story/1.0/pagination-buttons.js
  var _templateObject11;
  function _classCallCheck34(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties33(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass33(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties33(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties33(Constructor, staticProps);
    return Constructor;
  }
  function _taggedTemplateLiteralLoose9(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var BackButtonStates = {
    HIDDEN: {
      className: "i-amphtml-story-button-hidden"
    },
    PREVIOUS_PAGE: {
      className: "i-amphtml-story-back-prev",
      triggers: EventType.PREVIOUS_PAGE,
      label: LocalizedStringId.AMP_STORY_PREVIOUS_PAGE
    }
  };
  var ForwardButtonStates = {
    HIDDEN: {
      className: "i-amphtml-story-button-hidden"
    },
    NEXT_PAGE: {
      className: "i-amphtml-story-fwd-next",
      triggers: EventType.NEXT_PAGE,
      label: LocalizedStringId.AMP_STORY_NEXT_PAGE
    },
    NEXT_STORY: {
      className: "i-amphtml-story-fwd-next",
      triggers: EventType.NEXT_PAGE,
      label: LocalizedStringId.AMP_STORY_NEXT_STORY
    },
    REPLAY: {
      className: "i-amphtml-story-fwd-replay",
      triggers: EventType.REPLAY,
      label: LocalizedStringId.AMP_STORY_REPLAY
    }
  };
  var buildPaginationButton = function buildPaginationButton2(element) {
    return htmlFor(element)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose9(['\n      <div class="i-amphtml-story-button-container">\n        <button class="i-amphtml-story-button-move"></button>\n      </div>'])));
  };
  function setClassOnHover(hoverEl, targetEl, className) {
    var enterListener = function enterListener2() {
      return targetEl.classList.add(className);
    };
    var exitListener = function exitListener2() {
      return targetEl.classList.remove(className);
    };
    hoverEl.addEventListener("mouseenter", enterListener);
    hoverEl.addEventListener("mouseleave", exitListener);
    return [enterListener, exitListener];
  }
  var PaginationButton = /* @__PURE__ */ function() {
    function PaginationButton2(doc, initialState, storeService, win) {
      var _this = this;
      _classCallCheck34(this, PaginationButton2);
      this.state_ = initialState;
      this.element = buildPaginationButton(doc);
      this.buttonElement_ = dev().assertElement(this.element.querySelector("button"));
      this.localizationService_ = getLocalizationService(doc);
      this.element.classList.add(initialState.className);
      initialState.label && this.buttonElement_.setAttribute("aria-label", this.localizationService_.getLocalizedString(initialState.label));
      this.element.addEventListener("click", function(e) {
        return _this.onClick_(e);
      });
      this.storeService_ = storeService;
      this.win_ = win;
    }
    _createClass33(PaginationButton2, [{
      key: "updateState",
      value: function updateState(state) {
        if (state === this.state_) {
          return;
        }
        this.element.classList.remove(this.state_.className);
        this.element.classList.add(state.className);
        state.label ? this.buttonElement_.setAttribute("aria-label", this.localizationService_.getLocalizedString(state.label)) : this.buttonElement_.removeAttribute("aria-label");
        this.state_ = state;
      }
    }, {
      key: "getState",
      value: function getState2() {
        return this.state_;
      }
    }, {
      key: "onClick_",
      value: function onClick_(e) {
        e.preventDefault();
        this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
        if (this.state_.triggers) {
          dispatch(this.win_, this.element, devAssert(this.state_.triggers), void 0, {
            bubbles: true
          });
          return;
        }
        if (this.state_.action) {
          this.storeService_.dispatch(this.state_.action, this.state_.data);
          return;
        }
      }
    }]);
    return PaginationButton2;
  }();
  var PaginationButtons = /* @__PURE__ */ function() {
    function PaginationButtons2(ampStory) {
      _classCallCheck34(this, PaginationButtons2);
      this.ampStory_ = ampStory;
      var win = this.ampStory_.win;
      var doc = win.document;
      this.storeService_ = getStoreService(win);
      this.forwardButton_ = new PaginationButton(doc, ForwardButtonStates.NEXT_PAGE, this.storeService_, win);
      this.backButton_ = new PaginationButton(doc, BackButtonStates.HIDDEN, this.storeService_, win);
      this.forwardButton_.element.classList.add("next-container");
      this.backButton_.element.classList.add("prev-container");
      this.backButtonStateToRestore_ = null;
      this.forwardButtonStateToRestore_ = null;
      this.hoverListeners_ = null;
      this.initializeListeners_();
      this.ampStory_.element.appendChild(this.forwardButton_.element);
      this.ampStory_.element.appendChild(this.backButton_.element);
    }
    _createClass33(PaginationButtons2, [{
      key: "addHoverListeners_",
      value: function addHoverListeners_() {
        if (this.hoverListeners_) {
          return;
        }
        var forwardButtonListeners = setClassOnHover(this.forwardButton_.element, this.ampStory_.element, "i-amphtml-story-next-hover");
        var backButtonListeners = setClassOnHover(this.backButton_.element, this.ampStory_.element, "i-amphtml-story-prev-hover");
        this.hoverListeners_ = forwardButtonListeners.concat(backButtonListeners);
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.storeService_.subscribe(StateProperty.CURRENT_PAGE_INDEX, function(pageIndex) {
          _this2.onCurrentPageIndexUpdate_(pageIndex);
        });
        this.storeService_.subscribe(StateProperty.PAGE_IDS, function() {
          var currentPageIndex = Number(_this2.storeService_.get(StateProperty.CURRENT_PAGE_INDEX));
          _this2.onCurrentPageIndexUpdate_(currentPageIndex);
        }, true);
        this.storeService_.subscribe(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE, function(isVisible) {
          _this2.onSystemUiIsVisibleStateUpdate_(isVisible);
        });
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this2.onUIStateUpdate_(uiState);
        }, true);
      }
    }, {
      key: "onCurrentPageIndexUpdate_",
      value: function onCurrentPageIndexUpdate_(pageIndex) {
        var totalPages = this.storeService_.get(StateProperty.PAGE_IDS).length;
        if (pageIndex === 0) {
          this.backButton_.updateState(BackButtonStates.HIDDEN);
        }
        if (pageIndex > 0) {
          this.backButton_.updateState(BackButtonStates.PREVIOUS_PAGE);
        }
        if (pageIndex < totalPages - 1) {
          this.forwardButton_.updateState(ForwardButtonStates.NEXT_PAGE);
        }
        if (pageIndex === totalPages - 1) {
          var viewer = Services.viewerForDoc(this.ampStory_.element);
          if (viewer.hasCapability("swipe")) {
            this.forwardButton_.updateState(ForwardButtonStates.NEXT_STORY);
          } else {
            this.forwardButton_.updateState(ForwardButtonStates.REPLAY);
          }
        }
      }
    }, {
      key: "onSystemUiIsVisibleStateUpdate_",
      value: function onSystemUiIsVisibleStateUpdate_(isVisible) {
        if (isVisible) {
          this.backButton_.updateState(devAssert(this.backButtonStateToRestore_));
          this.forwardButton_.updateState(devAssert(this.forwardButtonStateToRestore_));
        } else {
          this.backButtonStateToRestore_ = this.backButton_.getState();
          this.backButton_.updateState(BackButtonStates.HIDDEN);
          this.forwardButtonStateToRestore_ = this.forwardButton_.getState();
          this.forwardButton_.updateState(ForwardButtonStates.HIDDEN);
        }
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        if (uiState === UIType.DESKTOP_PANELS || uiState === UIType.DESKTOP_FULLBLEED) {
          this.addHoverListeners_();
        }
      }
    }]);
    return PaginationButtons2;
  }();

  // build/amp-story-share-menu-1.0.css.js
  var CSS9 = `:host{all:initial!important;color:initial!important}.amp-social-share-facebook{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E")}.amp-social-share-pinterest{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E")}.amp-social-share-linkedin{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E")}.amp-social-share-gplus{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E")}.amp-social-share-email{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3 64.1 49.1-64.1 64.1V194.1zm.2 150.1 84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E")}.amp-social-share-twitter{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E")}.amp-social-share-tumblr{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E")}.amp-social-share-whatsapp{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E")}.amp-social-share-line{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' style='fill:%23fff' data-name='\u30EC\u30A4\u30E4\u30FC 1'/%3E%3C/svg%3E")}.amp-social-share-sms{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")}.amp-social-share-system{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}amp-social-share:focus{outline:2px solid #0389ff;outline-offset:2px}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#32529f}.amp-social-share-pinterest{background-color:#e60023}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:block!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;overflow:auto!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:48px!important;display:block!important;cursor:pointer!important;border-radius:4px!important;overflow:visible!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:focus{outline:2px solid #0389ff!important;outline-offset:2px!important}.i-amphtml-story-share-icon[type=email]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon[type=system]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon-link{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon .i-amphtml-story-share-label{position:absolute!important;top:48px!important;left:0!important;width:100%!important;color:rgba(0,0,0,0.87)!important;padding-top:5px!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;font-weight:400!important;line-height:13px!important;font-size:11px!important;text-align:center!important}.i-amphtml-story-share-menu{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100003!important;transform:translate3d(0,100vh,0)!important;transition-delay:0.15s!important;pointer-events:none!important;visibility:hidden!important}.i-amphtml-story-share-menu-visible{transform:translateZ(0)!important;transition-delay:0s!important;pointer-events:auto!important;visibility:initial!important}.i-amphtml-story-share-menu:before{content:""!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-share-menu.i-amphtml-story-share-menu-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-share-menu-container{position:absolute!important;bottom:0!important;left:0!important;right:0!important;height:auto!important;background:#fff!important;border-radius:8px 8px 0 0!important;transform:translate3d(0,100%,0)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-share-menu-visible .i-amphtml-story-share-menu-container{transform:translateZ(0)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-share-menu-close-button{display:none!important}.i-amphtml-story-share-menu .i-amphtml-story-share-item{height:72px!important}[desktop].i-amphtml-story-share-menu{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important}[desktop] .i-amphtml-story-share-menu-container{position:relative!important;margin:0!important;max-width:320px!important;opacity:0!important;transform:none!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}[desktop].i-amphtml-story-share-menu-visible .i-amphtml-story-share-menu-container{border-radius:8px!important;opacity:1!important;transform:none!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}[desktop] .i-amphtml-story-share-menu-close-button{display:block!important;position:absolute!important;top:0!important;right:0!important;height:30px!important;width:30px!important;color:#9aa0a6!important;cursor:pointer!important;font-size:24px!important;line-height:30px!important;text-align:center!important;border:0!important;padding:0!important;background:none!important}[desktop].i-amphtml-story-share-menu .i-amphtml-story-share-item{padding:0!important;height:66px!important;margin:12px!important}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-share-menu.css*/`;

  // extensions/amp-story/1.0/toast.js
  function _classCallCheck35(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties34(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass34(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties34(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties34(Constructor, staticProps);
    return Constructor;
  }
  var TOAST_CLASSNAME = "i-amphtml-story-toast";
  var TOAST_ROLE = "alert";
  var TOAST_VISIBLE_TIME_MS = 2600;
  var Toast = /* @__PURE__ */ function() {
    function Toast2() {
      _classCallCheck35(this, Toast2);
    }
    _createClass34(Toast2, null, [{
      key: "show",
      value: function show(storyEl, childNodeOrText) {
        var win = toWin(storyEl.ownerDocument.defaultView);
        var toast = createElementWithAttributes(win.document, "div", {
          "class": TOAST_CLASSNAME,
          "role": TOAST_ROLE
        });
        if (typeof childNodeOrText == "string") {
          toast.textContent = childNodeOrText;
        } else {
          toast.appendChild(childNodeOrText);
        }
        storyEl.appendChild(toast);
        Services.timerFor(win).delay(function() {
          return removeElement(toast);
        }, TOAST_VISIBLE_TIME_MS);
      }
    }]);
    return Toast2;
  }();

  // src/clipboard.js
  function copyTextToClipboard(win, text) {
    var copySuccessful = false;
    var doc = win.document;
    var textarea = doc.createElement("textarea");
    setStyles(textarea, {
      "position": "fixed",
      "top": 0,
      "left": 0,
      "width": "50px",
      "height": "50px",
      "padding": 0,
      "border": "none",
      "outline": "none",
      "background": "transparent"
    });
    textarea.value = text;
    textarea.readOnly = true;
    textarea.contentEditable = true;
    doc.body.appendChild(textarea);
    win.getSelection().removeAllRanges();
    textarea.focus();
    textarea.setSelectionRange(0, text.length);
    try {
      copySuccessful = doc.execCommand("copy");
    } catch (e) {
    }
    removeElement(textarea);
    return copySuccessful;
  }
  function isCopyingToClipboardSupported(doc) {
    return doc.queryCommandSupported("copy");
  }

  // extensions/amp-story/1.0/amp-story-request-service.js
  function _classCallCheck36(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties35(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass35(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties35(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties35(Constructor, staticProps);
    return Constructor;
  }
  var CONFIG_SRC_ATTRIBUTE_NAME = "src";
  var CREDENTIALS_ATTRIBUTE_NAME = "data-credentials";
  var TAG11 = "amp-story-request-service";
  var AmpStoryRequestService = /* @__PURE__ */ function() {
    function AmpStoryRequestService2(win, storyElement) {
      var _this = this;
      _classCallCheck36(this, AmpStoryRequestService2);
      this.storyElement_ = storyElement;
      this.xhr_ = Services.xhrFor(win);
      this.loadShareConfig = once(function() {
        return _this.loadShareConfigImpl_();
      });
    }
    _createClass35(AmpStoryRequestService2, [{
      key: "executeRequest",
      value: function executeRequest(rawUrl, opts) {
        var _this2 = this;
        if (opts === void 0) {
          opts = {};
        }
        if (!isProtocolValid(rawUrl)) {
          user().error(TAG11, "Invalid config url.");
          return Promise.resolve(null);
        }
        return Services.urlReplacementsForDoc(this.storyElement_).expandUrlAsync(user().assertString(rawUrl)).then(function(url) {
          return _this2.xhr_.fetchJson(url, opts);
        }).then(function(response) {
          userAssert(response.ok, "Invalid HTTP response");
          return response.json();
        });
      }
    }, {
      key: "loadShareConfigImpl_",
      value: function loadShareConfigImpl_() {
        var shareConfigEl = this.storyElement_.querySelector("amp-story-social-share, amp-story-bookend");
        if (!shareConfigEl) {
          return resolvedPromise();
        }
        if (shareConfigEl.hasAttribute(CONFIG_SRC_ATTRIBUTE_NAME)) {
          var rawUrl = shareConfigEl.getAttribute(CONFIG_SRC_ATTRIBUTE_NAME);
          var credentials = shareConfigEl.getAttribute(CREDENTIALS_ATTRIBUTE_NAME);
          return this.executeRequest(rawUrl, credentials ? {
            credentials
          } : {});
        }
        var config = null;
        try {
          config = getChildJsonConfig(shareConfigEl);
        } catch (err) {
        }
        return Promise.resolve(config);
      }
    }]);
    return AmpStoryRequestService2;
  }();
  var getRequestService = function getRequestService2(win, storyEl) {
    var service = Services.storyRequestService(win);
    if (!service) {
      service = new AmpStoryRequestService(win, storyEl);
      registerServiceBuilder(win, "story-request", function() {
        return service;
      });
    }
    return service;
  };

  // extensions/amp-story/1.0/amp-story-share.js
  function _classCallCheck37(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties36(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass36(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties36(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties36(Constructor, staticProps);
    return Constructor;
  }
  var SHARE_PROVIDER_LOCALIZED_STRING_ID = map({
    "system": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_SYSTEM,
    "email": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_EMAIL,
    "facebook": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_FACEBOOK,
    "line": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_LINE,
    "linkedin": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_LINKEDIN,
    "pinterest": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_PINTEREST,
    "gplus": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_GOOGLE_PLUS,
    "tumblr": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_TUMBLR,
    "twitter": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_TWITTER,
    "whatsapp": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_WHATSAPP,
    "sms": LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_SMS
  });
  var SHARE_PROVIDERS_KEY = "shareProviders";
  var DEPRECATED_SHARE_PROVIDERS_KEY = "share-providers";
  var TEMPLATE2 = {
    tag: "div",
    attrs: dict({
      "class": "i-amphtml-story-share-widget"
    }),
    children: [{
      tag: "ul",
      attrs: dict({
        "class": "i-amphtml-story-share-list"
      }),
      children: [{
        tag: "li",
        attrs: dict({
          "class": "i-amphtml-story-share-system"
        })
      }]
    }]
  };
  var SHARE_ITEM_TEMPLATE = {
    tag: "li",
    attrs: dict({
      "class": "i-amphtml-story-share-item"
    })
  };
  function buildLinkShareItemTemplate(el) {
    return {
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-story-share-icon i-amphtml-story-share-icon-link",
        "tabindex": 0,
        "role": "button",
        "aria-label": getLocalizationService(el).getLocalizedString(LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_LINK)
      }),
      children: [{
        tag: "span",
        attrs: dict({
          "class": "i-amphtml-story-share-label"
        }),
        localizedStringId: LocalizedStringId.AMP_STORY_SHARING_PROVIDER_NAME_LINK
      }]
    };
  }
  function buildProviderParams(opt_params) {
    var attrs = dict();
    if (opt_params) {
      Object.keys(opt_params).forEach(function(field) {
        if (field === "provider") {
          return;
        }
        attrs["data-param-" + field] = opt_params[field];
      });
    }
    return attrs;
  }
  function buildProvider(doc, shareType, opt_params) {
    var shareProviderLocalizedStringId = devAssert(SHARE_PROVIDER_LOCALIZED_STRING_ID[shareType], "No localized string to display name for share type " + shareType + ".");
    return renderSimpleTemplate(doc, [{
      tag: "amp-social-share",
      attrs: Object.assign(dict({
        "width": 48,
        "height": 48,
        "class": "i-amphtml-story-share-icon",
        "type": shareType
      }), buildProviderParams(opt_params)),
      children: [{
        tag: "span",
        attrs: dict({
          "class": "i-amphtml-story-share-label"
        }),
        localizedStringId: shareProviderLocalizedStringId
      }]
    }]);
  }
  function buildCopySuccessfulToast(doc, url) {
    return renderAsElement(doc, {
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-story-copy-successful"
      }),
      children: [{
        tag: "div",
        localizedStringId: LocalizedStringId.AMP_STORY_SHARING_CLIPBOARD_SUCCESS_TEXT
      }, {
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-copy-url"
        }),
        unlocalizedString: url
      }]
    });
  }
  var ShareWidget = /* @__PURE__ */ function() {
    function ShareWidget2(win, storyEl) {
      _classCallCheck37(this, ShareWidget2);
      this.ampdoc_ = null;
      this.win = win;
      this.storyEl = storyEl;
      this.root = null;
      this.requestService_ = getRequestService(this.win, storyEl);
    }
    _createClass36(ShareWidget2, [{
      key: "build",
      value: function build(ampdoc) {
        devAssert(!this.root, "Already built.");
        this.ampdoc_ = ampdoc;
        this.root = renderAsElement(this.win.document, TEMPLATE2);
        this.loadProviders();
        this.maybeAddLinkShareButton_();
        this.maybeAddSystemShareButton_();
        return this.root;
      }
    }, {
      key: "getAmpDoc_",
      value: function getAmpDoc_() {
        return devAssert(this.ampdoc_);
      }
    }, {
      key: "maybeAddLinkShareButton_",
      value: function maybeAddLinkShareButton_() {
        var _this = this;
        if (!isCopyingToClipboardSupported(this.win.document)) {
          return;
        }
        var linkShareButton = renderAsElement(this.win.document, buildLinkShareItemTemplate(this.storyEl));
        this.add_(linkShareButton);
        listen(linkShareButton, "click", function(e) {
          e.preventDefault();
          _this.copyUrlToClipboard_();
        });
        listen(linkShareButton, "keyup", function(e) {
          var code = e.charCode || e.keyCode;
          if (code === 32 || code === 13) {
            e.preventDefault();
            _this.copyUrlToClipboard_();
          }
        });
      }
    }, {
      key: "copyUrlToClipboard_",
      value: function copyUrlToClipboard_() {
        var url = Services.documentInfoForDoc(this.getAmpDoc_()).canonicalUrl;
        if (!copyTextToClipboard(this.win, url)) {
          var localizationService = getLocalizationService(this.storyEl);
          devAssert(localizationService, "Could not retrieve LocalizationService.");
          var failureString = localizationService.getLocalizedString(LocalizedStringId.AMP_STORY_SHARING_CLIPBOARD_FAILURE_TEXT);
          Toast.show(this.storyEl, dev().assertString(failureString));
          return;
        }
        Toast.show(this.storyEl, buildCopySuccessfulToast(this.win.document, url));
      }
    }, {
      key: "maybeAddSystemShareButton_",
      value: function maybeAddSystemShareButton_() {
        if (!this.isSystemShareSupported()) {
          return;
        }
        var container = dev().assertElement(this.root).querySelector(".i-amphtml-story-share-system");
        this.loadRequiredExtensions();
        container.appendChild(buildProvider(this.win.document, "system"));
      }
    }, {
      key: "isSystemShareSupported",
      value: function isSystemShareSupported(ampdoc) {
        if (ampdoc === void 0) {
          ampdoc = this.getAmpDoc_();
        }
        var viewer = Services.viewerForDoc(ampdoc);
        var platform = Services.platformFor(this.win);
        var isChromeWebview = viewer.isWebviewEmbedded() && platform.isChrome();
        return "share" in navigator && !isChromeWebview;
      }
    }, {
      key: "loadProviders",
      value: function loadProviders() {
        var _this2 = this;
        this.loadRequiredExtensions();
        this.requestService_.loadShareConfig().then(function(config) {
          var providers = config && (config[SHARE_PROVIDERS_KEY] || config[DEPRECATED_SHARE_PROVIDERS_KEY]);
          if (!providers) {
            return;
          }
          _this2.setProviders_(providers);
        });
      }
    }, {
      key: "setProviders_",
      value: function setProviders_(providers) {
        var _this3 = this;
        providers.forEach(function(provider) {
          if (isObject(provider)) {
            _this3.add_(buildProvider(_this3.win.document, provider["provider"], provider));
            return;
          }
          if (provider == "system") {
            user().warn("AMP-STORY", "`system` is not a valid share provider type. Native sharing is enabled by default and cannot be turned off.", provider);
            return;
          }
          _this3.add_(buildProvider(_this3.win.document, provider));
        });
      }
    }, {
      key: "loadRequiredExtensions",
      value: function loadRequiredExtensions(ampdoc) {
        if (ampdoc === void 0) {
          ampdoc = this.getAmpDoc_();
        }
        Services.extensionsFor(this.win).installExtensionForDoc(ampdoc, "amp-social-share");
      }
    }, {
      key: "add_",
      value: function add_(node) {
        var list = devAssert(this.root).lastElementChild;
        var item = renderAsElement(this.win.document, SHARE_ITEM_TEMPLATE);
        item.appendChild(node);
        list.insertBefore(item, list.lastElementChild);
      }
    }], [{
      key: "create",
      value: function create(win, storyEl) {
        return new ShareWidget2(win, storyEl);
      }
    }]);
    return ShareWidget2;
  }();

  // extensions/amp-story/1.0/amp-story-share-menu.js
  var _templateObject12;
  var _templateObject28;
  function _classCallCheck38(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties37(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass37(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties37(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties37(Constructor, staticProps);
    return Constructor;
  }
  function _taggedTemplateLiteralLoose10(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var VISIBLE_CLASS = "i-amphtml-story-share-menu-visible";
  var getTemplate3 = function getTemplate4(element) {
    return htmlFor(element)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose10(['\n    <div class="i-amphtml-story-share-menu i-amphtml-story-system-reset" aria-hidden="true" role="alert">\n      <div class="i-amphtml-story-share-menu-container">\n        <button class="i-amphtml-story-share-menu-close-button" aria-label="close" role="button">\n          &times;\n        </button>\n      </div>\n    </div>'])));
  };
  var getAmpSocialSystemShareTemplate = function getAmpSocialSystemShareTemplate2(element) {
    return htmlFor(element)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteralLoose10(['<amp-social-share type="system"></amp-social-share>'])));
  };
  var ShareMenu = /* @__PURE__ */ function() {
    function ShareMenu2(win, storyEl) {
      _classCallCheck38(this, ShareMenu2);
      this.win_ = win;
      this.element_ = null;
      this.closeButton_ = null;
      this.innerContainerEl_ = null;
      this.isBuilt_ = false;
      this.isSystemShareSupported_ = false;
      this.shareWidget_ = ShareWidget.create(this.win_, storyEl);
      this.storeService_ = getStoreService(this.win_);
      this.analyticsService_ = getAnalyticsService(this.win_, storyEl);
      this.parentEl_ = storyEl;
      this.vsync_ = Services.vsyncFor(this.win_);
    }
    _createClass37(ShareMenu2, [{
      key: "build",
      value: function build() {
        if (this.isBuilt()) {
          return;
        }
        this.isBuilt_ = true;
        this.isSystemShareSupported_ = this.shareWidget_.isSystemShareSupported(getAmpdoc(this.parentEl_));
        this.isSystemShareSupported_ ? this.buildForSystemSharing_() : this.buildForFallbackSharing_();
      }
    }, {
      key: "isBuilt",
      value: function isBuilt() {
        return this.isBuilt_;
      }
    }, {
      key: "buildForSystemSharing_",
      value: function buildForSystemSharing_() {
        var _this = this;
        this.shareWidget_.loadRequiredExtensions(getAmpdoc(this.parentEl_));
        this.element_ = getAmpSocialSystemShareTemplate(this.parentEl_);
        this.initializeListeners_();
        this.vsync_.mutate(function() {
          setStyles(dev().assertElement(_this.element_), {
            "visibility": "hidden",
            "pointer-events": "none",
            "z-index": -1
          });
          _this.parentEl_.appendChild(_this.element_);
        });
      }
    }, {
      key: "buildForFallbackSharing_",
      value: function buildForFallbackSharing_() {
        var _this2 = this;
        var root = this.win_.document.createElement("div");
        root.classList.add("i-amphtml-story-share-menu-host");
        this.element_ = getTemplate3(this.parentEl_);
        createShadowRootWithStyle(root, this.element_, CSS9);
        this.closeButton_ = dev().assertElement(this.element_.querySelector(".i-amphtml-story-share-menu-close-button"));
        var localizationService = getLocalizationService(devAssert(this.parentEl_));
        if (localizationService) {
          var localizedCloseString = localizationService.getLocalizedString(LocalizedStringId.AMP_STORY_CLOSE_BUTTON_LABEL);
          this.closeButton_.setAttribute("aria-label", localizedCloseString);
        }
        this.initializeListeners_();
        this.vsync_.run({
          measure: function measure() {
            _this2.innerContainerEl_ = _this2.element_.querySelector(".i-amphtml-story-share-menu-container");
          },
          mutate: function mutate() {
            _this2.parentEl_.appendChild(root);
            var shareWidget = _this2.shareWidget_.build(getAmpdoc(_this2.parentEl_));
            _this2.innerContainerEl_.appendChild(shareWidget);
          }
        });
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this3 = this;
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this3.onUIStateUpdate_(uiState);
        }, true);
        this.storeService_.subscribe(StateProperty.SHARE_MENU_STATE, function(isOpen) {
          _this3.onShareMenuStateUpdate_(isOpen);
        });
        if (!this.isSystemShareSupported_) {
          this.element_.addEventListener("click", function(event) {
            return _this3.onShareMenuClick_(event);
          });
          this.win_.addEventListener("keyup", function(event) {
            if (event.key == Keys.ESCAPE) {
              event.preventDefault();
              _this3.close_();
            }
          });
        }
      }
    }, {
      key: "onShareMenuStateUpdate_",
      value: function onShareMenuStateUpdate_(isOpen) {
        var _this4 = this;
        if (this.isSystemShareSupported_ && isOpen) {
          this.element_.dispatchEvent(new Event("click"));
          this.close_();
        }
        if (!this.isSystemShareSupported_) {
          this.vsync_.mutate(function() {
            _this4.element_.classList.toggle(VISIBLE_CLASS, isOpen);
            _this4.element_.setAttribute("aria-hidden", !isOpen);
          });
        }
        this.element_[ANALYTICS_TAG_NAME] = "amp-story-share-menu";
        this.analyticsService_.triggerEvent(isOpen ? StoryAnalyticsEvent.OPEN : StoryAnalyticsEvent.CLOSE, this.element_);
      }
    }, {
      key: "onShareMenuClick_",
      value: function onShareMenuClick_(event) {
        var _this5 = this;
        var el = dev().assertElement(event.target);
        if (el === this.closeButton_) {
          this.close_();
        }
        if (!closest(el, function(el2) {
          return el2 === _this5.innerContainerEl_;
        }, this.element_)) {
          this.close_();
        }
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        var _this6 = this;
        this.vsync_.mutate(function() {
          uiState !== UIType.MOBILE ? _this6.element_.setAttribute("desktop", "") : _this6.element_.removeAttribute("desktop");
        });
      }
    }, {
      key: "close_",
      value: function close_() {
        this.storeService_.dispatch(Action.TOGGLE_SHARE_MENU, false);
      }
    }]);
    return ShareMenu2;
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
  function _classCallCheck39(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties38(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass38(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties38(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties38(Constructor, staticProps);
    return Constructor;
  }
  function _inherits11(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf11(subClass, superClass);
  }
  function _setPrototypeOf11(o, p) {
    _setPrototypeOf11 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf11(o, p);
  }
  function _createSuper11(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct11();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf11(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf11(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn11(this, result);
    };
  }
  function _possibleConstructorReturn11(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized11(self2);
  }
  function _assertThisInitialized11(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct11() {
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
  function _getPrototypeOf11(o) {
    _getPrototypeOf11 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf11(o);
  }
  var SwipeRecognizer = /* @__PURE__ */ function(_GestureRecognizer3) {
    _inherits11(SwipeRecognizer2, _GestureRecognizer3);
    var _super3 = _createSuper11(SwipeRecognizer2);
    function SwipeRecognizer2(type, manager, horiz, vert) {
      var _this3;
      _classCallCheck39(this, SwipeRecognizer2);
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
    _createClass38(SwipeRecognizer2, [{
      key: "onTouchStart",
      value: function onTouchStart(e) {
        var touches = e.touches;
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
      value: function onTouchMove(e) {
        var touches = e.touches;
        if (touches && touches.length >= 1) {
          var _touches$ = touches[0], x = _touches$.clientX, y = _touches$.clientY;
          this.lastX_ = x;
          this.lastY_ = y;
          if (this.eventing_) {
            this.emit_(false, false, e);
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
      value: function onTouchEnd(e) {
        var touches = e.touches;
        if (touches && touches.length == 0) {
          this.end_(e);
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
  var SwipeXYRecognizer = /* @__PURE__ */ function(_SwipeRecognizer) {
    _inherits11(SwipeXYRecognizer2, _SwipeRecognizer);
    var _super4 = _createSuper11(SwipeXYRecognizer2);
    function SwipeXYRecognizer2(manager) {
      _classCallCheck39(this, SwipeXYRecognizer2);
      return _super4.call(this, "swipe-xy", manager, true, true);
    }
    return SwipeXYRecognizer2;
  }(SwipeRecognizer);

  // src/amp-story-player/amp-story-player-impl.js
  var ampToolboxCacheUrl = __toModule(require_amp_toolbox_cache_url_umd());

  // src/core/constants/visibility-state.js
  var VisibilityState = {
    PRERENDER: "prerender",
    VISIBLE: "visible",
    HIDDEN: "hidden",
    PAUSED: "paused",
    INACTIVE: "inactive"
  };

  // src/amp-story-player/amp-story-player-impl.js
  var _DEPRECATED_BUTTON_CL;
  var _DEPRECATED_EVENT_NAM;
  var DEPRECATED_BUTTON_TYPES = {
    BACK: "back-button",
    CLOSE: "close-button"
  };
  var DEPRECATED_BUTTON_CLASSES = (_DEPRECATED_BUTTON_CL = {
    BASE: "amp-story-player-exit-control-button",
    HIDDEN: "amp-story-player-hide-button"
  }, _DEPRECATED_BUTTON_CL[DEPRECATED_BUTTON_TYPES.BACK] = "amp-story-player-back-button", _DEPRECATED_BUTTON_CL[DEPRECATED_BUTTON_TYPES.CLOSE] = "amp-story-player-close-button", _DEPRECATED_BUTTON_CL);
  var DEPRECATED_EVENT_NAMES = (_DEPRECATED_EVENT_NAM = {}, _DEPRECATED_EVENT_NAM[DEPRECATED_BUTTON_TYPES.BACK] = "amp-story-player-back", _DEPRECATED_EVENT_NAM[DEPRECATED_BUTTON_TYPES.CLOSE] = "amp-story-player-close", _DEPRECATED_EVENT_NAM);
  var AMP_STORY_PLAYER_EVENT = "AMP_STORY_PLAYER_EVENT";

  // build/amp-story-system-layer-1.0.css.js
  var CSS10 = `.amp-social-share-facebook{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E")}.amp-social-share-pinterest{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E")}.amp-social-share-linkedin{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E")}.amp-social-share-gplus{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E")}.amp-social-share-email{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3 64.1 49.1-64.1 64.1V194.1zm.2 150.1 84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E")}.amp-social-share-twitter{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E")}.amp-social-share-tumblr{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E")}.amp-social-share-whatsapp{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E")}.amp-social-share-line{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' style='fill:%23fff' data-name='\u30EC\u30A4\u30E4\u30FC 1'/%3E%3C/svg%3E")}.amp-social-share-sms{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")}.amp-social-share-system{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}amp-social-share:focus{outline:2px solid #0389ff;outline-offset:2px}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#32529f}.amp-social-share-pinterest{background-color:#e60023}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:block!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;overflow:auto!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:48px!important;display:block!important;cursor:pointer!important;border-radius:4px!important;overflow:visible!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:focus{outline:2px solid #0389ff!important;outline-offset:2px!important}.i-amphtml-story-share-icon[type=email]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon[type=system]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon-link{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E")!important;background-color:#9aa0a6!important}.i-amphtml-story-share-icon .i-amphtml-story-share-label{position:absolute!important;top:48px!important;left:0!important;width:100%!important;color:rgba(0,0,0,0.87)!important;padding-top:5px!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;font-weight:400!important;line-height:13px!important;font-size:11px!important;text-align:center!important}.i-amphtml-story-system-layer{background:linear-gradient(180deg,rgba(0,0,0,0.32),transparent)!important;position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:justify!important;justify-content:space-between!important;top:0!important;left:0!important;right:0!important;height:54px!important;z-index:100000!important;transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none!important;font-family:Roboto,sans-serif!important}[desktop] .i-amphtml-story-system-layer{height:96px!important}.i-amphtml-story-hidden.i-amphtml-story-system-layer{opacity:0!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-hidden.i-amphtml-story-system-layer *{pointer-events:none!important}.i-amphtml-story-attribution{top:0!important;border:none!important;pointer-events:auto!important;cursor:pointer!important;padding:6px 8px 0!important;height:48px!important;place-items:center!important;display:-ms-flexbox!important;display:flex!important;text-decoration:none!important;overflow:hidden!important;visibility:hidden!important}.i-amphtml-story-attribution-visible{visibility:visible!important}[desktop] .i-amphtml-story-attribution{padding:6px 6px 0!important;left:0!important;right:0!important}.i-amphtml-story-attribution>*{margin:0px 4px!important}.i-amphtml-story-attribution-logo-container{display:grid!important;place-items:center!important}.i-amphtml-story-attribution-logo{border-radius:100%!important;border:1px solid #d4d4d4!important;width:28px!important;height:28px!important;-o-object-fit:cover!important;object-fit:cover!important;box-shadow:0px 0px 6px rgba(0,0,0,0.12)!important}.i-amphtml-story-attribution-text{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;font-size:13px!important;font-weight:500!important;text-shadow:0px 0px 6px rgba(0,0,0,0.16)!important;color:#fff!important}.i-amphtml-story-system-layer-buttons,.i-amphtml-story-system-layer-buttons-start-position{display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:row!important;flex-direction:row!important;-ms-flex-pack:end!important;justify-content:flex-end!important;padding-top:6px!important;box-sizing:border-box!important}.i-amphtml-story-system-layer-buttons-start-position{position:absolute!important;top:0!important;-ms-flex-pack:start!important;justify-content:flex-start!important}[desktop] .i-amphtml-story-system-layer-buttons{padding:8px 4px 0!important}.i-amphtml-story-system-layer-buttons .i-amphtml-story-ui-hide-button.i-amphtml-story-button{display:none!important}.i-amphtml-story-button{background-repeat:no-repeat!important;background-position:50%!important;height:48px!important;width:48px!important;cursor:pointer!important;border:none!important;pointer-events:auto!important;background:50% no-repeat!important;background-size:24px 24px!important}[desktop] .i-amphtml-story-button{margin:0 4px!important;background-size:32px 32px!important;padding:8px!important}.i-amphtml-story-button:active{background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-progress-bar{border:0!important;display:-ms-flexbox!important;display:flex!important;height:2px!important;left:0!important;margin:4px 0 0!important;padding:0 2px!important;position:absolute!important;right:0!important;top:0!important;visibility:visible!important;z-index:100001!important}[ad-showing] .i-amphtml-story-attribution,[ad-showing] .i-amphtml-story-progress-bar{visibility:hidden!important}[ad-showing] .i-amphtml-story-share-control{display:none!important}[ad-showing]:not([i-amphtml-current-page-has-audio])
.i-amphtml-story-mute-audio-control,[ad-showing]:not([i-amphtml-current-page-has-audio])
.i-amphtml-story-unmute-audio-control{visibility:hidden!important}.i-amphtml-story-page-progress-bar{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:100%!important;list-style-type:none!important;margin:0 2px!important;overflow:hidden!important;width:100%!important}.i-amphtml-story-page-progress-value{background:#fff!important;height:100%!important;width:100%!important;transform:translateZ(0) scaleX(0)!important;transform-origin:left!important}[dir=rtl] .i-amphtml-story-page-progress-value{transform-origin:right!important}.i-amphtml-first-page-active[info] .i-amphtml-message-container{padding-right:48px!important}.i-amphtml-first-page-active[info][dir=rtl] .i-amphtml-message-container{padding-right:auto!important;padding-left:48px!important}.i-amphtml-message-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;width:-webkit-max-content!important;width:max-content!important;transition-property:opacity,transform!important;position:absolute!important;top:0!important;right:48px!important;height:100%!important;color:#fff!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important}[dir=rtl] .i-amphtml-message-container{right:auto!important;left:48px!important}[i-amphtml-story-messagedisplay=noshow] .i-amphtml-message-container{transition:opacity 0.2s cubic-bezier(0.4,0.0,1,1),visibility 0.2s,transform 0.0s 0.2s!important;opacity:0!important;visibility:hidden!important;transform:translateX(10px)!important}[i-amphtml-story-has-new-page=noshow] .i-amphtml-story-has-new-page-notification-container{transition:opacity 1.5s,visibility 1.5s!important;opacity:0!important;visibility:hidden!important}.i-amphtml-last-page-active[i-amphtml-story-has-new-page=show] .i-amphtml-story-has-new-page-notification-container{transition:opacity 1.5s,visibility 1.5s!important;opacity:1!important;visibility:visible!important}[dir=rtl][i-amphtml-story-messagedisplay=noshow] .i-amphtml-message-container{transform:translateX(-10px)!important}[i-amphtml-story-messagedisplay=show] .i-amphtml-message-container{transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1),visibility 0.2s,transform 0.2s cubic-bezier(0.4,0.0,0.2,1)!important;opacity:1!important;visibility:visible!important;transform:translateX(0px)!important}.i-amphtml-story-mute-text,.i-amphtml-story-unmute-no-sound-text,.i-amphtml-story-unmute-sound-text{width:-webkit-max-content!important;width:max-content!important;color:#fff!important}.i-amphtml-story-sound-display{display:inline-block!important;height:46px!important;position:relative!important}.i-amphtml-paused-display,.i-amphtml-story-mute-audio-control,.i-amphtml-story-mute-text,.i-amphtml-story-no-audio-ui .i-amphtml-story-sound-display,.i-amphtml-story-pause-control,.i-amphtml-story-play-control,.i-amphtml-story-sidebar-control,.i-amphtml-story-skip-to-next,.i-amphtml-story-unmute-audio-control,.i-amphtml-story-unmute-no-sound-text,.i-amphtml-story-unmute-sound-text{display:none!important}.i-amphtml-story-has-audio:not([muted]) .i-amphtml-story-mute-audio-control,.i-amphtml-story-has-audio[muted] .i-amphtml-story-unmute-audio-control,[desktop] .i-amphtml-paused-display,[i-amphtml-story-has-sidebar] .i-amphtml-story-sidebar-control{display:block!important}.i-amphtml-story-system-layer-buttons button[disabled]{opacity:0.3!important;cursor:initial!important}.amp-mode-keyboard-active:not([desktop]) .i-amphtml-paused-display,.i-amphtml-story-has-audio[muted] .i-amphtml-story-mute-text,.i-amphtml-story-has-playback-ui:not([paused]) .i-amphtml-story-pause-control,.i-amphtml-story-has-playback-ui[paused] .i-amphtml-story-play-control,:not([i-amphtml-current-page-has-audio]).i-amphtml-story-has-audio:not([muted]) .i-amphtml-story-unmute-no-sound-text,[i-amphtml-current-page-has-audio].i-amphtml-story-has-audio:not([muted]) .i-amphtml-story-unmute-sound-text{display:block!important}.i-amphtml-story-ui-no-buttons .i-amphtml-story-button,.i-amphtml-story-ui-no-buttons .i-amphtml-story-system-layer-buttons{visibility:hidden!important}.i-amphtml-story-unmute-audio-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M5.2 4 4 5.2l4.467 4.467H4v5.666h3.778l4.722 4.723v-6.357l4.014 4.014a6.54 6.54 0 0 1-2.125 1.115v1.945a8.49 8.49 0 0 0 3.485-1.71L19.8 21 21 19.8l-8.5-8.5L5.2 4zM18.6 14.993c.321-.774.51-1.605.51-2.493a6.616 6.616 0 0 0-4.722-6.337V4.217C18.176 5.077 21 8.457 21 12.5c0 1.417-.35 2.748-.973 3.92l-1.426-1.427zm-4.212-6.3A4.25 4.25 0 0 1 16.75 12.5c0 .208-.019.406-.047.595l-2.314-2.314V8.694zm-3.863-1.775L12.5 4.944v3.948l-1.974-1.974z'/%3E%3C/svg%3E")!important}[desktop] .i-amphtml-story-unmute-audio-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M7.4 6 6 7.4l5.3 5.3H6v6.7h4.4L16 25v-7.5l4.7 4.7c-.7.6-1.6 1-2.5 1.3v2.3c1.5-.3 2.9-1.1 4.1-2l2.3 2.3 1.4-1.4-10-10L7.4 6zm15.8 12.9c.4-.9.6-1.9.6-2.9 0-3.5-2.3-6.5-5.6-7.5V6.3c4.5 1 7.8 5 7.8 9.7 0 1.7-.4 3.2-1.1 4.6l-1.7-1.7zm-5-7.4c1.7.8 2.8 2.5 2.8 4.5 0 .2 0 .5-.1.7L18.2 14v-2.5zm-4.5-2.1L16 7.1v4.6l-2.3-2.3z'/%3E%3C/svg%3E")!important}.i-amphtml-story-mute-audio-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M4 9.592v5.816h3.778l4.722 4.846V4.746L7.778 9.592H4zM16.75 12.5a4.374 4.374 0 0 0-2.361-3.906v7.802a4.348 4.348 0 0 0 2.36-3.896z'/%3E%3Cpath d='M14.389 4v1.997c2.73.833 4.722 3.43 4.722 6.503 0 3.072-1.993 5.67-4.722 6.503V21c3.787-.882 6.61-4.352 6.61-8.5S18.177 4.882 14.39 4z'/%3E%3C/svg%3E")!important}[desktop] .i-amphtml-story-mute-audio-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M10.4 12.6 16 6.9v18.2l-5.6-5.7H6v-6.8h4.4zM21 16c0-2-1.1-3.8-2.8-4.6v9.2C19.9 19.8 21 18 21 16zM18.2 6v2.3c3.2 1 5.6 4 5.6 7.7 0 3.6-2.3 6.7-5.6 7.7V26c4.5-1 7.8-5.1 7.8-10s-3.3-9-7.8-10z'/%3E%3C/svg%3E")!important}.i-amphtml-story-pause-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M13.3 25.3H8V6.7h5.3v18.6zm5.4 0V6.7H24v18.7h-5.3z'/%3E%3C/svg%3E")!important}.i-amphtml-story-play-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M23.521 16.335 9 25.67V7l14.521 9.335z'/%3E%3C/svg%3E")!important}.i-amphtml-story-sidebar-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")!important}.i-amphtml-story-share-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M15.64 16.41a2.698 2.698 0 0 1 1.86-.743 2.746 2.746 0 0 1 2.75 2.75 2.746 2.746 0 0 1-2.75 2.75 2.746 2.746 0 0 1-2.75-2.75c0-.22.037-.431.082-.633L8.37 14.008a2.738 2.738 0 0 1-1.87.742A2.746 2.746 0 0 1 3.75 12 2.746 2.746 0 0 1 6.5 9.25c.724 0 1.375.284 1.87.743l6.463-3.768a2.93 2.93 0 0 1-.083-.642 2.746 2.746 0 0 1 2.75-2.75 2.746 2.746 0 0 1 2.75 2.75 2.746 2.746 0 0 1-2.75 2.75 2.72 2.72 0 0 1-1.87-.742l-6.463 3.767A3 3 0 0 1 9.25 12c0 .22-.037.43-.082.642l6.471 3.767zm2.777-10.827a.92.92 0 0 0-.917-.916.92.92 0 0 0-.917.916.92.92 0 0 0 .917.917.92.92 0 0 0 .917-.917zM6.5 12.917A.92.92 0 0 1 5.583 12a.92.92 0 0 1 .917-.917.92.92 0 0 1 .917.917.92.92 0 0 1-.917.917zm10.083 5.5a.92.92 0 0 0 .917.916.92.92 0 0 0 .917-.916.92.92 0 0 0-.917-.917.92.92 0 0 0-.917.917z' fill-rule='evenodd'/%3E%3C/svg%3E")!important}[desktop] .i-amphtml-story-share-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M20 20.8c.5-.5 1.2-.8 2-.8 1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3c0-.2 0-.5.1-.7l-7-4.1c-.5.5-1.2.8-2 .8-1.7 0-3-1.3-3-3s1.3-3 3-3c.8 0 1.5.3 2 .8l7-4.1c-.1-.2-.1-.5-.1-.7 0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3c-.8 0-1.5-.3-2-.8l-7 4.1c0 .2.1.5.1.7s0 .5-.1.7l7 4.1zM23 9c0-.5-.5-1-1-1s-1 .5-1 1 .5 1 1 1 1-.5 1-1zm-13 8c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm11 6c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1z' fill-rule='evenodd'/%3E%3C/svg%3E")!important}[ios] .i-amphtml-story-share-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath fill='%23fff' d='m15.666 4.583-1.301 1.302-1.458-1.458v10.24h-1.815V4.427L9.635 5.885 8.333 4.583 12 .917l3.666 3.666zm3.667 4.584V19.25a1.839 1.839 0 0 1-1.833 1.833h-11a1.833 1.833 0 0 1-1.833-1.833V9.167c0-1.018.815-1.834 1.833-1.834h2.75v1.834H6.5V19.25h11V9.167h-2.75V7.333h2.75c1.008 0 1.833.816 1.833 1.834z'/%3E%3C/svg%3E")!important;background-size:auto!important}.i-amphtml-story-info-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M11.1 7.3H13v1.9h-1.9V7.3zm0 3.8H13v5.7h-1.9v-5.7zm.9-8.6c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zm0 17.1c-4.2 0-7.6-3.4-7.6-7.6S7.8 4.4 12 4.4s7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6z'/%3E%3C/svg%3E")!important;display:none!important;background-size:auto!important}.i-amphtml-story-close-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/%3E%3C/svg%3E")!important}[desktop] .i-amphtml-story-close-control{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='m25.333 8.547-1.88-1.88L16 14.12 8.546 6.667l-1.88 1.88L14.12 16l-7.453 7.453 1.88 1.88L16 17.88l7.453 7.453 1.88-1.88L17.88 16l7.453-7.453z'/%3E%3C/svg%3E")!important}.i-amphtml-story-skip-to-next{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23FFF'%3E%3Cpath d='M19.333 16 8 24V8l11.333 8zM24 24h-2.667V8H24v16z'/%3E%3C/svg%3E")!important}[desktop] .i-amphtml-story-skip-to-next{display:block!important}.i-amphtml-story-has-new-page-notification-container{position:absolute!important;z-index:100002!important;top:32px!important;right:0!important;left:0!important;opacity:0!important}.i-amphtml-story-has-new-page-notification-container,.i-amphtml-story-has-new-page-text-wrapper{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-has-new-page-text-wrapper{background-color:rgba(32,33,37,0.8)!important;-ms-flex-align:center!important;align-items:center!important;padding:4px 10px 4px 0!important;border-radius:5px!important}[dir=rtl] .i-amphtml-story-has-new-page-text-wrapper{padding-right:0!important;padding-left:10px!important}.i-amphtml-story-has-new-page-text{color:#fff!important;font-size:16px!important;text-shadow:0px 0px 6px rgba(0,0,0,0.36)!important;font-weight:700!important}.i-amphtml-story-has-new-page-circle-icon{background:#03ffa0!important;border-radius:50%!important;height:6px!important;width:6px!important;position:relative!important;box-shadow:0 0 0 2px rgba(3,255,160,0.5)!important;margin:0px 10px!important}.i-amphtml-story-desktop-panels .i-amphtml-story-has-new-page-notification-container{top:0!important}.i-amphtml-embedded.i-amphtml-first-page-active .i-amphtml-story-info-control{display:block!important}.i-amphtml-story-no-sharing .i-amphtml-story-info-control,.i-amphtml-story-no-sharing .i-amphtml-story-share-control{display:none!important}.i-amphtml-story-desktop-panels.i-amphtml-story-system-layer{background:transparent!important;top:auto!important;bottom:0!important;height:96px!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.i-amphtml-animate-progress li{transition:transform 0.8s cubic-bezier(0.4,0.0,0.2,1)!important}.i-amphtml-progress-bar-overflow.i-amphtml-story-progress-bar{width:calc(100% - 4px)!important;margin:4px 2px 0!important;overflow:hidden!important;padding:0!important}.i-amphtml-story-desktop-panels .i-amphtml-story-progress-bar{position:relative!important;height:3px!important;width:33.33333vw!important;margin:0 24px!important}.i-amphtml-story-desktop-fullbleed .i-amphtml-story-progress-bar{height:3px!important}.i-amphtml-story-desktop-panels .i-amphtml-story-page-progress-bar{border-radius:100px!important}.i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{border-radius:0px!important;list-style:none!important;margin:0 2px!important;width:2px!important;position:absolute!important;transform-origin:left!important}[dir=rtl].i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{transform-origin:right!important}[desktop] .i-amphtml-progress-bar-overflow .i-amphtml-story-page-progress-bar{width:3px!important}.i-amphtml-story-desktop-panels.i-amphtml-story-system-layer .i-amphtml-story-attribution,.i-amphtml-story-desktop-panels.i-amphtml-story-system-layer .i-amphtml-story-system-layer-buttons,.i-amphtml-story-desktop-panels.i-amphtml-story-system-layer .i-amphtml-story-system-layer-buttons-start-position{position:fixed!important;top:0!important;width:100vw!important}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-system-layer.css*/`;

  // extensions/amp-story/1.0/development-ui.js
  function _classCallCheck40(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties39(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass39(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties39(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties39(Constructor, staticProps);
    return Constructor;
  }
  function toggleHiddenAttribute(vsync, el, isHidden) {
    vsync.mutate(function() {
      toggle(el, !isHidden);
    });
  }
  function createButton(win, classNameOrList, handler) {
    var button = win.document.createElement("div");
    button.setAttribute("role", "button");
    if (isArray(classNameOrList)) {
      classNameOrList.forEach(function(className) {
        return button.classList.add(className);
      });
    } else {
      button.classList.add(classNameOrList);
    }
    button.classList.add("i-amphtml-story-button");
    button.addEventListener("click", handler);
    return button;
  }
  var DevelopmentModeLogButtonSet = /* @__PURE__ */ function() {
    function DevelopmentModeLogButtonSet2(win) {
      _classCallCheck40(this, DevelopmentModeLogButtonSet2);
      this.win_ = win;
      this.root_ = null;
      this.errorButton_ = null;
      this.warningButton_ = null;
      this.successButton_ = null;
    }
    _createClass39(DevelopmentModeLogButtonSet2, [{
      key: "build",
      value: function build(logButtonActionFn) {
        this.errorButton_ = createButton(this.win_, ["i-amphtml-story-error-button", "i-amphtml-story-dev-logs-button"], function() {
          return logButtonActionFn();
        });
        this.warningButton_ = createButton(this.win_, ["i-amphtml-story-warning-button", "i-amphtml-story-dev-logs-button"], function() {
          return logButtonActionFn();
        });
        this.successButton_ = createButton(this.win_, ["i-amphtml-story-success-button", "i-amphtml-story-dev-logs-button"], function() {
          return logButtonActionFn();
        });
        this.root_ = this.win_.document.createElement("div");
        this.root_.appendChild(this.errorButton_);
        this.root_.appendChild(this.warningButton_);
        this.root_.appendChild(this.successButton_);
        return this.root_;
      }
    }, {
      key: "getButtonForLogEntry_",
      value: function getButtonForLogEntry_(logEntry) {
        if (logEntry.conforms) {
          return this.successButton_;
        }
        switch (logEntry.level) {
          case LogLevel.ERROR:
            return this.errorButton_;
          case LogLevel.WARN:
            return this.warningButton_;
          default:
            return null;
        }
      }
    }, {
      key: "log",
      value: function log(logEntry) {
        var button = this.getButtonForLogEntry_(logEntry);
        if (!button) {
          return;
        }
        var oldCount = parseInt(button.getAttribute("data-count") || 0, 10);
        button.setAttribute("data-count", oldCount + 1);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.errorButton_.setAttribute("data-count", 0);
        this.warningButton_.setAttribute("data-count", 0);
        this.successButton_.setAttribute("data-count", 0);
      }
    }], [{
      key: "create",
      value: function create(win) {
        return new DevelopmentModeLogButtonSet2(win);
      }
    }]);
    return DevelopmentModeLogButtonSet2;
  }();
  var DevelopmentModeLog = /* @__PURE__ */ function() {
    function DevelopmentModeLog2(win) {
      _classCallCheck40(this, DevelopmentModeLog2);
      this.win_ = win;
      this.root_ = null;
      this.entriesEl_ = null;
      this.contextStringEl_ = null;
    }
    _createClass39(DevelopmentModeLog2, [{
      key: "build",
      value: function build() {
        var _this = this;
        this.contextStringEl_ = this.win_.document.createElement("span");
        this.contextStringEl_.classList.add("i-amphtml-story-developer-log-context");
        var titleEl = this.win_.document.createElement("div");
        titleEl.textContent = "Developer logs for page ";
        titleEl.appendChild(this.contextStringEl_);
        var closeDeveloperLogEl = createButton(this.win_, "i-amphtml-story-developer-log-close", function() {
          return _this.hide();
        });
        var headerEl = this.win_.document.createElement("div");
        headerEl.classList.add("i-amphtml-story-developer-log-header");
        headerEl.appendChild(titleEl);
        headerEl.appendChild(closeDeveloperLogEl);
        this.entriesEl_ = this.win_.document.createElement("ul");
        this.entriesEl_.classList.add("i-amphtml-story-developer-log-entries");
        this.root_ = this.win_.document.createElement("div");
        this.root_.classList.add("i-amphtml-story-developer-log");
        toggle(this.root_, false);
        this.root_.appendChild(headerEl);
        this.root_.appendChild(this.entriesEl_);
        this.clear();
        return this.root_;
      }
    }, {
      key: "getCssLogLevelClass_",
      value: function getCssLogLevelClass_(logLevel) {
        switch (logLevel) {
          case LogLevel.WARN:
            return "i-amphtml-story-developer-log-entry-warning";
          case LogLevel.ERROR:
            return "i-amphtml-story-developer-log-entry-error";
          default:
            return null;
        }
      }
    }, {
      key: "getCssConformanceClass_",
      value: function getCssConformanceClass_(conforms) {
        if (conforms) {
          return "i-amphtml-story-developer-log-entry-success";
        }
        return null;
      }
    }, {
      key: "log",
      value: function log(logEntry) {
        var logLevelClass = this.getCssLogLevelClass_(logEntry.level);
        var conformanceClass = this.getCssConformanceClass_(logEntry.conforms);
        var logEntryUi = this.win_.document.createElement("li");
        logEntryUi.classList.add("i-amphtml-story-developer-log-entry");
        if (logLevelClass) {
          logEntryUi.classList.add(logLevelClass);
        }
        if (conformanceClass) {
          logEntryUi.classList.add(conformanceClass);
        }
        logEntryUi.textContent = logEntry.message;
        this.entriesEl_.appendChild(logEntryUi);
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this2 = this;
        Services.vsyncFor(this.win_).mutate(function() {
          removeChildren(dev().assertElement(_this2.entriesEl_));
        });
      }
    }, {
      key: "setContextString",
      value: function setContextString(contextString) {
        this.contextStringEl_.textContent = contextString;
      }
    }, {
      key: "toggle",
      value: function toggle2() {
        var newHiddenState = !this.root_.hasAttribute("hidden");
        toggleHiddenAttribute(Services.vsyncFor(this.win_), dev().assertElement(this.root_), newHiddenState);
      }
    }, {
      key: "hide",
      value: function hide() {
        toggleHiddenAttribute(Services.vsyncFor(this.win_), dev().assertElement(this.root_), true);
      }
    }], [{
      key: "create",
      value: function create(win) {
        return new DevelopmentModeLog2(win);
      }
    }]);
    return DevelopmentModeLog2;
  }();

  // extensions/amp-story/1.0/progress-bar.js
  function _classCallCheck41(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties40(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass40(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties40(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties40(Constructor, staticProps);
    return Constructor;
  }
  var TRANSITION_LINEAR = "transform " + POLL_INTERVAL_MS + "ms linear";
  var TRANSITION_EASE = "transform 200ms ease";
  var ELLIPSE_WIDTH_PX = 2;
  var SEGMENTS_MARGIN_PX = 4;
  var MAX_SEGMENTS = 20;
  var SEGMENT_INCREMENT = 5;
  var ProgressBar = /* @__PURE__ */ function() {
    function ProgressBar2(win, storyEl) {
      _classCallCheck41(this, ProgressBar2);
      this.win_ = win;
      this.isBuilt_ = false;
      this.root_ = null;
      this.segmentCount_ = 0;
      this.activeSegmentIndex_ = 0;
      this.activeSegmentProgress_ = 1;
      this.ampdoc_ = Services.ampdocServiceFor(this.win_).getSingleDoc();
      this.mutator_ = Services.mutatorForDoc(this.ampdoc_);
      this.segmentIdMap_ = map();
      this.storeService_ = getStoreService(this.win_);
      this.activeSegmentId_ = "";
      this.segments_ = [];
      this.segmentsAddedPromise_ = resolvedPromise();
      this.firstExpandedSegmentIndex_ = 0;
      this.storyEl_ = storyEl;
    }
    _createClass40(ProgressBar2, [{
      key: "build",
      value: function build(initialSegmentId) {
        var _this = this;
        if (this.isBuilt_) {
          return this.getRoot();
        }
        this.root_ = this.win_.document.createElement("ol");
        this.root_.setAttribute("aria-hidden", true);
        this.root_.classList.add("i-amphtml-story-progress-bar");
        this.storyEl_.addEventListener(EventType.REPLAY, function() {
          _this.replay_();
        });
        this.storeService_.subscribe(StateProperty.PAGE_IDS, function(pageIds) {
          if (_this.isBuilt_) {
            _this.clear_();
          }
          _this.segmentsAddedPromise_ = _this.mutator_.mutateElement(_this.getRoot(), function() {
            pageIds.forEach(function(id) {
              if (!(id in _this.segmentIdMap_)) {
                _this.addSegment_(id);
              }
            });
          });
          if (_this.isBuilt_) {
            _this.updateProgress(_this.activeSegmentId_, _this.activeSegmentProgress_, true);
          }
        }, true);
        this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
          _this.onRtlStateUpdate_(rtlState);
        }, true);
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this.onUIStateUpdate_(uiState);
        }, true);
        Services.viewportForDoc(this.ampdoc_).onResize(debounce(this.win_, function() {
          return _this.onResize_();
        }, 300));
        this.segmentsAddedPromise_.then(function() {
          if (_this.segmentCount_ > MAX_SEGMENTS) {
            _this.getInitialFirstExpandedSegmentIndex_(_this.segmentIdMap_[initialSegmentId]);
            _this.render_(false);
          }
          _this.getRoot().classList.toggle("i-amphtml-progress-bar-overflow", _this.segmentCount_ > MAX_SEGMENTS);
        });
        this.isBuilt_ = true;
        return this.getRoot();
      }
    }, {
      key: "replay_",
      value: function replay_() {
        if (this.segmentCount_ > MAX_SEGMENTS) {
          this.firstExpandedSegmentIndex_ = 0;
          this.render_(false);
        }
      }
    }, {
      key: "render_",
      value: function render_(shouldAnimate) {
        var _this2 = this;
        if (shouldAnimate === void 0) {
          shouldAnimate = true;
        }
        this.getSegmentWidth_().then(function(segmentWidth) {
          var translateX = -(_this2.firstExpandedSegmentIndex_ - _this2.getPrevEllipsisCount_()) * (ELLIPSE_WIDTH_PX + SEGMENTS_MARGIN_PX);
          _this2.mutator_.mutateElement(_this2.getRoot(), function() {
            _this2.getRoot().classList.toggle("i-amphtml-animate-progress", shouldAnimate);
            for (var index = 0; index < _this2.segmentCount_; index++) {
              var width = index >= _this2.firstExpandedSegmentIndex_ && index < _this2.firstExpandedSegmentIndex_ + MAX_SEGMENTS ? segmentWidth : ELLIPSE_WIDTH_PX;
              _this2.transform_(_this2.segments_[index], translateX, width);
              translateX += width + SEGMENTS_MARGIN_PX;
            }
          });
        });
      }
    }, {
      key: "transform_",
      value: function transform_(segment, translateX, width) {
        if (this.storeService_.get(StateProperty.RTL_STATE)) {
          translateX *= -1;
        }
        segment.setAttribute("style", "transform: translate3d(" + translateX + "px, 0px, 0.00001px) scaleX(" + width / ELLIPSE_WIDTH_PX + ");");
      }
    }, {
      key: "getSegmentWidth_",
      value: function getSegmentWidth_() {
        var _this3 = this;
        var nextEllipsisCount = this.getNextEllipsisCount_();
        var prevEllipsisCount = this.getPrevEllipsisCount_();
        var totalEllipsisWidth = (nextEllipsisCount + prevEllipsisCount) * (ELLIPSE_WIDTH_PX + SEGMENTS_MARGIN_PX);
        return this.getBarWidth_().then(function(barWidth) {
          var totalSegmentsWidth = barWidth - totalEllipsisWidth;
          return totalSegmentsWidth / Math.min(_this3.segmentCount_, MAX_SEGMENTS) - SEGMENTS_MARGIN_PX;
        });
      }
    }, {
      key: "getBarWidth_",
      value: function getBarWidth_() {
        var _this4 = this;
        return this.mutator_.measureElement(function() {
          return _this4.getRoot().getBoundingClientRect().width;
        });
      }
    }, {
      key: "getNextEllipsisCount_",
      value: function getNextEllipsisCount_() {
        var nextPagesCount = this.segmentCount_ - (this.firstExpandedSegmentIndex_ + MAX_SEGMENTS);
        return nextPagesCount > 3 ? 3 : Math.max(nextPagesCount, 0);
      }
    }, {
      key: "getPrevEllipsisCount_",
      value: function getPrevEllipsisCount_() {
        return Math.min(3, this.firstExpandedSegmentIndex_);
      }
    }, {
      key: "checkIndexForOverflow_",
      value: function checkIndexForOverflow_() {
        if (this.activeSegmentIndex_ >= this.firstExpandedSegmentIndex_ + MAX_SEGMENTS) {
          var nextLimit = this.firstExpandedSegmentIndex_ + MAX_SEGMENTS + SEGMENT_INCREMENT - 1;
          this.firstExpandedSegmentIndex_ += nextLimit < this.segmentCount_ ? SEGMENT_INCREMENT : this.segmentCount_ - (this.firstExpandedSegmentIndex_ + MAX_SEGMENTS);
          this.render_();
        } else if (this.activeSegmentIndex_ < this.firstExpandedSegmentIndex_) {
          this.firstExpandedSegmentIndex_ -= this.firstExpandedSegmentIndex_ - SEGMENT_INCREMENT < 0 ? this.firstExpandedSegmentIndex_ : SEGMENT_INCREMENT;
          this.render_();
        }
      }
    }, {
      key: "onRtlStateUpdate_",
      value: function onRtlStateUpdate_(rtlState) {
        var _this5 = this;
        this.mutator_.mutateElement(this.getRoot(), function() {
          rtlState ? _this5.getRoot().setAttribute("dir", "rtl") : _this5.getRoot().removeAttribute("dir");
        });
      }
    }, {
      key: "onResize_",
      value: function onResize_() {
        if (this.getRoot().classList.contains("i-amphtml-progress-bar-overflow") || this.segmentCount_ > MAX_SEGMENTS) {
          this.getInitialFirstExpandedSegmentIndex_(this.activeSegmentIndex_);
          this.render_(false);
        }
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        switch (uiState) {
          case UIType.DESKTOP_FULLBLEED:
            MAX_SEGMENTS = 70;
            ELLIPSE_WIDTH_PX = 3;
            break;
          case UIType.MOBILE:
            MAX_SEGMENTS = 20;
            ELLIPSE_WIDTH_PX = 2;
            break;
          case UIType.DESKTOP_PANELS:
            MAX_SEGMENTS = 20;
            ELLIPSE_WIDTH_PX = 3;
            break;
          default:
            MAX_SEGMENTS = 20;
        }
      }
    }, {
      key: "buildSegmentEl_",
      value: function buildSegmentEl_() {
        var segmentProgressBar = this.win_.document.createElement("li");
        segmentProgressBar.classList.add("i-amphtml-story-page-progress-bar");
        var segmentProgressValue = this.win_.document.createElement("div");
        segmentProgressValue.classList.add("i-amphtml-story-page-progress-value");
        segmentProgressBar.appendChild(segmentProgressValue);
        this.getRoot().appendChild(segmentProgressBar);
        this.segments_.push(segmentProgressBar);
      }
    }, {
      key: "clear_",
      value: function clear_() {
        removeChildren(devAssert(this.root_));
        this.segmentIdMap_ = map();
        this.segmentCount_ = 0;
      }
    }, {
      key: "addSegment_",
      value: function addSegment_(id) {
        this.segmentIdMap_[id] = this.segmentCount_++;
        this.buildSegmentEl_();
      }
    }, {
      key: "getRoot",
      value: function getRoot() {
        return dev().assertElement(this.root_);
      }
    }, {
      key: "assertValidSegmentId_",
      value: function assertValidSegmentId_(segmentId) {
        devAssert(hasOwn(this.segmentIdMap_, segmentId), "Invalid segment-id passed to progress-bar");
      }
    }, {
      key: "updateProgress",
      value: function updateProgress(segmentId, progress, updateAllSegments) {
        var _this6 = this;
        if (updateAllSegments === void 0) {
          updateAllSegments = false;
        }
        this.segmentsAddedPromise_.then(function() {
          _this6.assertValidSegmentId_(segmentId);
          var segmentIndex = _this6.segmentIdMap_[segmentId];
          _this6.updateProgressByIndex_(segmentIndex, progress);
          if (_this6.activeSegmentIndex_ !== segmentIndex || updateAllSegments) {
            _this6.updateSegments_(segmentIndex, progress, _this6.activeSegmentIndex_, _this6.activeSegmentProgress_);
          }
          _this6.activeSegmentProgress_ = progress;
          _this6.activeSegmentIndex_ = segmentIndex;
          _this6.activeSegmentId_ = segmentId;
          if (_this6.segmentCount_ > MAX_SEGMENTS) {
            _this6.checkIndexForOverflow_();
          }
        });
      }
    }, {
      key: "getInitialFirstExpandedSegmentIndex_",
      value: function getInitialFirstExpandedSegmentIndex_(segmentIndex) {
        if (segmentIndex > MAX_SEGMENTS && segmentIndex + MAX_SEGMENTS < this.segmentCount_) {
          this.firstExpandedSegmentIndex_ = segmentIndex - segmentIndex % MAX_SEGMENTS;
        } else if (segmentIndex > MAX_SEGMENTS) {
          this.firstExpandedSegmentIndex_ = this.segmentCount_ - MAX_SEGMENTS;
        } else {
          this.firstExpandedSegmentIndex_ = 0;
        }
      }
    }, {
      key: "updateSegments_",
      value: function updateSegments_(activeSegmentIndex, activeSegmentProgress, prevSegmentIndex, prevSegmentProgress) {
        var shouldAnimatePreviousSegment = false;
        if (prevSegmentProgress === 1 && activeSegmentProgress === 1) {
          shouldAnimatePreviousSegment = true;
        }
        if (activeSegmentIndex > prevSegmentIndex && activeSegmentProgress !== 1) {
          shouldAnimatePreviousSegment = true;
        }
        if (prevSegmentIndex > activeSegmentIndex && activeSegmentProgress === 1) {
          shouldAnimatePreviousSegment = true;
        }
        for (var i = 0; i < this.segmentCount_; i++) {
          if (i === activeSegmentIndex) {
            continue;
          }
          var progress = i < activeSegmentIndex ? 1 : 0;
          var withTransition = shouldAnimatePreviousSegment ? i === prevSegmentIndex : false;
          this.updateProgressByIndex_(i, progress, withTransition);
        }
      }
    }, {
      key: "updateProgressByIndex_",
      value: function updateProgressByIndex_(segmentIndex, progress, withTransition) {
        if (withTransition === void 0) {
          withTransition = true;
        }
        var nthChildIndex = segmentIndex + 1;
        var progressEl = scopedQuerySelector(this.getRoot(), ".i-amphtml-story-page-progress-bar:nth-child(" + escapeCssSelectorNth(nthChildIndex) + ") .i-amphtml-story-page-progress-value");
        this.mutator_.mutateElement(devAssert(progressEl), function() {
          var transition = "none";
          if (withTransition) {
            transition = progress === 1 || progress === 0 ? TRANSITION_EASE : TRANSITION_LINEAR;
          }
          setImportantStyles(devAssert(progressEl), {
            "transform": scale(progress + ",1"),
            "transition": transition
          });
        });
      }
    }], [{
      key: "create",
      value: function create(win, storyEl) {
        return new ProgressBar2(win, storyEl);
      }
    }]);
    return ProgressBar2;
  }();

  // extensions/amp-story/1.0/amp-story-system-layer.js
  var _VIEWER_CONTROL_DEFAU;
  function _classCallCheck42(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties41(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass41(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties41(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties41(Constructor, staticProps);
    return Constructor;
  }
  var AD_SHOWING_ATTRIBUTE = "ad-showing";
  var AUDIO_MUTED_ATTRIBUTE = "muted";
  var PAUSED_ATTRIBUTE = "paused";
  var HAS_INFO_BUTTON_ATTRIBUTE = "info";
  var MUTE_CLASS = "i-amphtml-story-mute-audio-control";
  var CLOSE_CLASS = "i-amphtml-story-close-control";
  var SKIP_TO_NEXT_CLASS = "i-amphtml-story-skip-to-next";
  var VIEWER_CUSTOM_CONTROL_CLASS = "i-amphtml-story-viewer-custom-control";
  var UNMUTE_CLASS = "i-amphtml-story-unmute-audio-control";
  var PAUSE_CLASS = "i-amphtml-story-pause-control";
  var PLAY_CLASS = "i-amphtml-story-play-control";
  var MESSAGE_DISPLAY_CLASS = "i-amphtml-story-messagedisplay";
  var CURRENT_PAGE_HAS_AUDIO_ATTRIBUTE = "i-amphtml-current-page-has-audio";
  var HAS_SIDEBAR_ATTRIBUTE = "i-amphtml-story-has-sidebar";
  var SHARE_CLASS = "i-amphtml-story-share-control";
  var INFO_CLASS = "i-amphtml-story-info-control";
  var SIDEBAR_CLASS = "i-amphtml-story-sidebar-control";
  var HAS_NEW_PAGE_ATTRIBUTE = "i-amphtml-story-has-new-page";
  var ATTRIBUTION_CLASS = "i-amphtml-story-attribution";
  var HIDE_MESSAGE_TIMEOUT_MS = 1500;
  var TEMPLATE3 = {
    tag: "aside",
    attrs: dict({
      "class": "i-amphtml-story-system-layer i-amphtml-story-system-reset"
    }),
    children: [{
      tag: "a",
      attrs: dict({
        "class": ATTRIBUTION_CLASS,
        "target": "_blank"
      }),
      children: [{
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-attribution-logo-container"
        }),
        children: [{
          tag: "img",
          attrs: dict({
            "alt": "",
            "class": "i-amphtml-story-attribution-logo"
          })
        }]
      }, {
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-attribution-text"
        })
      }]
    }, {
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-story-has-new-page-notification-container"
      }),
      children: [{
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-has-new-page-text-wrapper"
        }),
        children: [{
          tag: "span",
          attrs: dict({
            "class": "i-amphtml-story-has-new-page-circle-icon"
          })
        }, {
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-story-has-new-page-text"
          }),
          localizedStringId: LocalizedStringId.AMP_STORY_HAS_NEW_PAGE_TEXT
        }]
      }]
    }, {
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-story-system-layer-buttons"
      }),
      children: [{
        tag: "div",
        attrs: dict({
          "role": "button",
          "class": INFO_CLASS + " i-amphtml-story-button"
        }),
        localizedLabelId: LocalizedStringId.AMP_STORY_INFO_BUTTON_LABEL
      }, {
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-story-sound-display"
        }),
        children: [{
          tag: "div",
          attrs: dict({
            "role": "alert",
            "class": "i-amphtml-message-container"
          }),
          children: [{
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-mute-text"
            }),
            localizedStringId: LocalizedStringId.AMP_STORY_AUDIO_MUTE_BUTTON_TEXT
          }, {
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-unmute-sound-text"
            }),
            localizedStringId: LocalizedStringId.AMP_STORY_AUDIO_UNMUTE_SOUND_TEXT
          }, {
            tag: "div",
            attrs: dict({
              "class": "i-amphtml-story-unmute-no-sound-text"
            }),
            localizedStringId: LocalizedStringId.AMP_STORY_AUDIO_UNMUTE_NO_SOUND_TEXT
          }]
        }, {
          tag: "button",
          attrs: dict({
            "class": UNMUTE_CLASS + " i-amphtml-story-button"
          }),
          localizedLabelId: LocalizedStringId.AMP_STORY_AUDIO_UNMUTE_BUTTON_LABEL
        }, {
          tag: "button",
          attrs: dict({
            "class": MUTE_CLASS + " i-amphtml-story-button"
          }),
          localizedLabelId: LocalizedStringId.AMP_STORY_AUDIO_MUTE_BUTTON_LABEL
        }]
      }, {
        tag: "div",
        attrs: dict({
          "class": "i-amphtml-paused-display"
        }),
        children: [{
          tag: "button",
          attrs: dict({
            "class": PAUSE_CLASS + " i-amphtml-story-button"
          }),
          localizedLabelId: LocalizedStringId.AMP_STORY_PAUSE_BUTTON_LABEL
        }, {
          tag: "button",
          attrs: dict({
            "class": PLAY_CLASS + " i-amphtml-story-button"
          }),
          localizedLabelId: LocalizedStringId.AMP_STORY_PLAY_BUTTON_LABEL
        }]
      }, {
        tag: "button",
        attrs: dict({
          "class": SKIP_TO_NEXT_CLASS + " i-amphtml-story-ui-hide-button i-amphtml-story-button"
        }),
        localizedLabelId: LocalizedStringId.AMP_STORY_SKIP_TO_NEXT_BUTTON_LABEL
      }, {
        tag: "button",
        attrs: dict({
          "class": SHARE_CLASS + " i-amphtml-story-button"
        }),
        localizedLabelId: LocalizedStringId.AMP_STORY_SHARE_BUTTON_LABEL
      }, {
        tag: "button",
        attrs: dict({
          "class": SIDEBAR_CLASS + " i-amphtml-story-button"
        }),
        localizedLabelId: LocalizedStringId.AMP_STORY_SIDEBAR_BUTTON_LABEL
      }, {
        tag: "button",
        attrs: dict({
          "class": CLOSE_CLASS + " i-amphtml-story-ui-hide-button i-amphtml-story-button"
        }),
        localizedLabelId: LocalizedStringId.AMP_STORY_CLOSE_BUTTON_LABEL
      }]
    }, {
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-story-system-layer-buttons-start-position"
      })
    }]
  };
  var VIEWER_CONTROL_EVENT_NAME = "__AMP_VIEWER_CONTROL_EVENT_NAME__";
  var VIEWER_CONTROL_TYPES = {
    CLOSE: "close",
    SHARE: "share",
    DEPRECATED_SKIP_NEXT: "skip-next",
    SKIP_TO_NEXT: "skip-to-next"
  };
  var VIEWER_CONTROL_DEFAULTS = (_VIEWER_CONTROL_DEFAU = {}, _VIEWER_CONTROL_DEFAU[VIEWER_CONTROL_TYPES.SHARE] = {
    "selector": "." + SHARE_CLASS
  }, _VIEWER_CONTROL_DEFAU[VIEWER_CONTROL_TYPES.CLOSE] = {
    "selector": "." + CLOSE_CLASS
  }, _VIEWER_CONTROL_DEFAU[VIEWER_CONTROL_TYPES.DEPRECATED_SKIP_NEXT] = {
    "selector": "." + SKIP_TO_NEXT_CLASS
  }, _VIEWER_CONTROL_DEFAU[VIEWER_CONTROL_TYPES.SKIP_TO_NEXT] = {
    "selector": "." + SKIP_TO_NEXT_CLASS
  }, _VIEWER_CONTROL_DEFAU);
  var SystemLayer = /* @__PURE__ */ function() {
    function SystemLayer2(win, parentEl) {
      _classCallCheck42(this, SystemLayer2);
      this.win_ = win;
      this.parentEl_ = parentEl;
      this.isBuilt_ = false;
      this.root_ = null;
      this.systemLayerEl_ = null;
      this.buttonsContainer_ = null;
      this.progressBar_ = ProgressBar.create(win, this.parentEl_);
      this.developerLog_ = DevelopmentModeLog.create(win);
      this.developerButtons_ = DevelopmentModeLogButtonSet.create(win);
      this.storeService_ = getStoreService(this.win_);
      this.vsync_ = Services.vsyncFor(this.win_);
      this.timer_ = Services.timerFor(this.win_);
      this.timeoutId_ = null;
      this.viewer_ = null;
      this.viewerMessagingHandler_ = null;
    }
    _createClass41(SystemLayer2, [{
      key: "build",
      value: function build(initialPageId) {
        var _this = this;
        if (this.isBuilt_) {
          return this.getRoot();
        }
        this.isBuilt_ = true;
        this.root_ = this.win_.document.createElement("div");
        this.root_.classList.add("i-amphtml-system-layer-host");
        this.systemLayerEl_ = renderAsElement(this.win_.document, TEMPLATE3);
        this.systemLayerEl_.querySelector(".i-amphtml-story-share-control").href = Services.documentInfoForDoc(this.parentEl_).canonicalUrl;
        createShadowRootWithStyle(this.root_, this.systemLayerEl_, CSS10);
        this.systemLayerEl_.insertBefore(this.progressBar_.build(initialPageId), this.systemLayerEl_.firstChild);
        this.buttonsContainer_ = this.systemLayerEl_.querySelector(".i-amphtml-story-system-layer-buttons");
        this.buildForDevelopmentMode_();
        this.initializeListeners_();
        this.storeService_.subscribe(StateProperty.CAN_SHOW_SYSTEM_LAYER_BUTTONS, function(canShowButtons) {
          _this.systemLayerEl_.classList.toggle("i-amphtml-story-ui-no-buttons", !canShowButtons);
        }, true);
        if (Services.platformFor(this.win_).isIos()) {
          this.systemLayerEl_.setAttribute("ios", "");
        }
        this.viewer_ = Services.viewerForDoc(this.win_.document.documentElement);
        this.viewerMessagingHandler_ = this.viewer_.isEmbedded() ? new AmpStoryViewerMessagingHandler(this.win_, this.viewer_) : null;
        if (shouldShowStoryUrlInfo(this.viewer_)) {
          this.systemLayerEl_.classList.add("i-amphtml-embedded");
          this.getShadowRoot().setAttribute(HAS_INFO_BUTTON_ATTRIBUTE, "");
        } else {
          this.getShadowRoot().removeAttribute(HAS_INFO_BUTTON_ATTRIBUTE);
        }
        this.maybeBuildAttribution_();
        this.getShadowRoot().setAttribute(MESSAGE_DISPLAY_CLASS, "noshow");
        this.getShadowRoot().setAttribute(HAS_NEW_PAGE_ATTRIBUTE, "noshow");
        return this.getRoot();
      }
    }, {
      key: "maybeBuildAttribution_",
      value: function maybeBuildAttribution_() {
        if (!this.viewer_ || this.viewer_.getParam("attribution") !== "auto") {
          return;
        }
        this.systemLayerEl_.querySelector(".i-amphtml-story-attribution-logo").src = getStoryAttributeSrc(this.parentEl_, "entity-logo-src") || getStoryAttributeSrc(this.parentEl_, "publisher-logo-src");
        var anchorEl = this.systemLayerEl_.querySelector("." + escapeCssSelectorIdent(ATTRIBUTION_CLASS));
        anchorEl.href = getStoryAttributeSrc(this.parentEl_, "entity-url") || getSourceOrigin(Services.documentInfoForDoc(this.parentEl_).sourceUrl);
        this.systemLayerEl_.querySelector(".i-amphtml-story-attribution-text").textContent = this.parentEl_.getAttribute("entity") || this.parentEl_.getAttribute("publisher");
        anchorEl.classList.add("i-amphtml-story-attribution-visible");
      }
    }, {
      key: "buildForDevelopmentMode_",
      value: function buildForDevelopmentMode_() {
        if (!getMode().development) {
          return;
        }
        this.buttonsContainer_.appendChild(this.developerButtons_.build(this.developerLog_.toggle.bind(this.developerLog_)));
        this.getShadowRoot().appendChild(this.developerLog_.build());
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.getShadowRoot().addEventListener("click", function(event) {
          var target = dev().assertElement(event.target);
          if (matches(target, "." + MUTE_CLASS + ", ." + MUTE_CLASS + " *")) {
            _this2.onAudioIconClick_(true);
          } else if (matches(target, "." + UNMUTE_CLASS + ", ." + UNMUTE_CLASS + " *")) {
            _this2.onAudioIconClick_(false);
          } else if (matches(target, "." + PAUSE_CLASS + ", ." + PAUSE_CLASS + " *")) {
            _this2.onPausedClick_(true);
          } else if (matches(target, "." + PLAY_CLASS + ", ." + PLAY_CLASS + " *")) {
            _this2.onPausedClick_(false);
          } else if (matches(target, "." + SHARE_CLASS + ", ." + SHARE_CLASS + " *")) {
            _this2.onShareClick_(event);
          } else if (matches(target, "." + INFO_CLASS + ", ." + INFO_CLASS + " *")) {
            _this2.onInfoClick_();
          } else if (matches(target, "." + SIDEBAR_CLASS + ", ." + SIDEBAR_CLASS + " *")) {
            _this2.onSidebarClick_();
          } else if (matches(target, "." + VIEWER_CUSTOM_CONTROL_CLASS + ", ." + VIEWER_CUSTOM_CONTROL_CLASS + " *")) {
            _this2.onViewerControlClick_(dev().assertElement(event.target));
          } else if (matches(target, "." + ATTRIBUTION_CLASS + ", ." + ATTRIBUTION_CLASS + " *")) {
            var anchorClicked = closest(target, function(e) {
              return matches(e, "a[href]");
            });
            triggerClickFromLightDom(anchorClicked, _this2.parentEl_);
          }
        });
        this.storeService_.subscribe(StateProperty.AD_STATE, function(isAd) {
          _this2.onAdStateUpdate_(isAd);
        });
        this.storeService_.subscribe(StateProperty.CAN_SHOW_AUDIO_UI, function(show) {
          _this2.onCanShowAudioUiUpdate_(show);
        }, true);
        this.storeService_.subscribe(StateProperty.CAN_SHOW_SHARING_UIS, function(show) {
          _this2.onCanShowSharingUisUpdate_(show);
        }, true);
        this.storeService_.subscribe(StateProperty.STORY_HAS_AUDIO_STATE, function(hasAudio) {
          _this2.onStoryHasAudioStateUpdate_(hasAudio);
        }, true);
        this.storeService_.subscribe(StateProperty.STORY_HAS_PLAYBACK_UI_STATE, function(hasPlaybackUi) {
          _this2.onStoryHasPlaybackUiStateUpdate_(hasPlaybackUi);
        }, true);
        this.storeService_.subscribe(StateProperty.MUTED_STATE, function(isMuted) {
          _this2.onMutedStateUpdate_(isMuted);
        }, true);
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this2.onUIStateUpdate_(uiState);
        }, true);
        this.storeService_.subscribe(StateProperty.PAUSED_STATE, function(isPaused) {
          _this2.onPausedStateUpdate_(isPaused);
        }, true);
        this.storeService_.subscribe(StateProperty.CURRENT_PAGE_INDEX, function(index) {
          _this2.onPageIndexUpdate_(index);
        }, true);
        this.storeService_.subscribe(StateProperty.RTL_STATE, function(rtlState) {
          _this2.onRtlStateUpdate_(rtlState);
        }, true);
        this.storeService_.subscribe(StateProperty.KEYBOARD_ACTIVE_STATE, function(keyboardState) {
          _this2.onKeyboardActiveUpdate_(keyboardState);
        }, true);
        this.storeService_.subscribe(StateProperty.PAGE_HAS_AUDIO_STATE, function(audio) {
          _this2.onPageHasAudioStateUpdate_(audio);
        }, true);
        this.storeService_.subscribe(StateProperty.PAGE_HAS_ELEMENTS_WITH_PLAYBACK_STATE, function(hasPlaybackUi) {
          _this2.onPageHasElementsWithPlaybackStateUpdate_(hasPlaybackUi);
        }, true);
        this.storeService_.subscribe(StateProperty.HAS_SIDEBAR_STATE, function(hasSidebar) {
          _this2.onHasSidebarStateUpdate_(hasSidebar);
        }, true);
        this.storeService_.subscribe(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE, function(isVisible) {
          _this2.onSystemUiIsVisibleStateUpdate_(isVisible);
        });
        this.storeService_.subscribe(StateProperty.NEW_PAGE_AVAILABLE_ID, function() {
          _this2.onNewPageAvailable_();
        });
        this.storeService_.subscribe(StateProperty.VIEWER_CUSTOM_CONTROLS, function(config) {
          return _this2.onViewerCustomControls_(config);
        }, true);
      }
    }, {
      key: "getRoot",
      value: function getRoot() {
        return dev().assertElement(this.root_);
      }
    }, {
      key: "getShadowRoot",
      value: function getShadowRoot() {
        return dev().assertElement(this.systemLayerEl_);
      }
    }, {
      key: "onAdStateUpdate_",
      value: function onAdStateUpdate_(isAd) {
        isAd ? this.getShadowRoot().setAttribute(AD_SHOWING_ATTRIBUTE, "") : this.getShadowRoot().removeAttribute(AD_SHOWING_ATTRIBUTE);
      }
    }, {
      key: "onHasSidebarStateUpdate_",
      value: function onHasSidebarStateUpdate_(hasSidebar) {
        if (hasSidebar) {
          this.getShadowRoot().setAttribute(HAS_SIDEBAR_ATTRIBUTE, "");
        } else {
          this.getShadowRoot().removeAttribute(HAS_SIDEBAR_ATTRIBUTE);
        }
      }
    }, {
      key: "onCanShowAudioUiUpdate_",
      value: function onCanShowAudioUiUpdate_(canShowAudioUi) {
        var _this3 = this;
        this.vsync_.mutate(function() {
          _this3.getShadowRoot().classList.toggle("i-amphtml-story-no-audio-ui", !canShowAudioUi);
        });
      }
    }, {
      key: "onCanShowSharingUisUpdate_",
      value: function onCanShowSharingUisUpdate_(canShowSharingUis) {
        var _this4 = this;
        this.vsync_.mutate(function() {
          _this4.getShadowRoot().classList.toggle("i-amphtml-story-no-sharing", !canShowSharingUis);
        });
      }
    }, {
      key: "onStoryHasAudioStateUpdate_",
      value: function onStoryHasAudioStateUpdate_(hasAudio) {
        var _this5 = this;
        this.vsync_.mutate(function() {
          _this5.getShadowRoot().classList.toggle("i-amphtml-story-has-audio", hasAudio);
        });
      }
    }, {
      key: "onStoryHasPlaybackUiStateUpdate_",
      value: function onStoryHasPlaybackUiStateUpdate_(hasPlaybackUi) {
        var _this6 = this;
        this.vsync_.mutate(function() {
          _this6.getShadowRoot().classList.toggle("i-amphtml-story-has-playback-ui", hasPlaybackUi);
        });
      }
    }, {
      key: "onPageHasAudioStateUpdate_",
      value: function onPageHasAudioStateUpdate_(pageHasAudio) {
        var _this7 = this;
        pageHasAudio = pageHasAudio || !!this.storeService_.get(StateProperty.STORY_HAS_BACKGROUND_AUDIO_STATE);
        this.vsync_.mutate(function() {
          pageHasAudio ? _this7.getShadowRoot().setAttribute(CURRENT_PAGE_HAS_AUDIO_ATTRIBUTE, "") : _this7.getShadowRoot().removeAttribute(CURRENT_PAGE_HAS_AUDIO_ATTRIBUTE);
        });
      }
    }, {
      key: "onPageHasElementsWithPlaybackStateUpdate_",
      value: function onPageHasElementsWithPlaybackStateUpdate_(pageHasElementsWithPlayback) {
        var _this8 = this;
        this.vsync_.mutate(function() {
          toArray(_this8.getShadowRoot().querySelectorAll(".i-amphtml-paused-display button")).forEach(function(button) {
            button.disabled = !pageHasElementsWithPlayback;
          });
        });
      }
    }, {
      key: "onMutedStateUpdate_",
      value: function onMutedStateUpdate_(isMuted) {
        var _this9 = this;
        this.vsync_.mutate(function() {
          isMuted ? _this9.getShadowRoot().setAttribute(AUDIO_MUTED_ATTRIBUTE, "") : _this9.getShadowRoot().removeAttribute(AUDIO_MUTED_ATTRIBUTE);
        });
      }
    }, {
      key: "onPausedStateUpdate_",
      value: function onPausedStateUpdate_(isPaused) {
        var _this10 = this;
        this.vsync_.mutate(function() {
          isPaused ? _this10.getShadowRoot().setAttribute(PAUSED_ATTRIBUTE, "") : _this10.getShadowRoot().removeAttribute(PAUSED_ATTRIBUTE);
        });
      }
    }, {
      key: "hideMessageAfterTimeout_",
      value: function hideMessageAfterTimeout_(message) {
        var _this11 = this;
        if (this.timeoutId_) {
          this.timer_.cancel(this.timeoutId_);
        }
        this.timeoutId_ = this.timer_.delay(function() {
          return _this11.hideMessageInternal_(message);
        }, HIDE_MESSAGE_TIMEOUT_MS);
      }
    }, {
      key: "hideMessageInternal_",
      value: function hideMessageInternal_(message) {
        var _this12 = this;
        if (!this.isBuilt_) {
          return;
        }
        this.vsync_.mutate(function() {
          _this12.getShadowRoot().setAttribute(message, "noshow");
        });
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        var _this13 = this;
        this.vsync_.mutate(function() {
          var shadowRoot = _this13.getShadowRoot();
          shadowRoot.classList.remove("i-amphtml-story-desktop-fullbleed");
          shadowRoot.classList.remove("i-amphtml-story-desktop-panels");
          shadowRoot.removeAttribute("desktop");
          switch (uiState) {
            case UIType.DESKTOP_PANELS:
              shadowRoot.setAttribute("desktop", "");
              shadowRoot.classList.add("i-amphtml-story-desktop-panels");
              break;
            case UIType.DESKTOP_FULLBLEED:
              shadowRoot.setAttribute("desktop", "");
              shadowRoot.classList.add("i-amphtml-story-desktop-fullbleed");
              break;
          }
        });
      }
    }, {
      key: "onSystemUiIsVisibleStateUpdate_",
      value: function onSystemUiIsVisibleStateUpdate_(isVisible) {
        var _this14 = this;
        this.vsync_.mutate(function() {
          _this14.getShadowRoot().classList.toggle("i-amphtml-story-hidden", !isVisible);
        });
      }
    }, {
      key: "onPageIndexUpdate_",
      value: function onPageIndexUpdate_(index) {
        var _this15 = this;
        this.vsync_.mutate(function() {
          var lastIndex = _this15.storeService_.get(StateProperty.PAGE_IDS).length - 1;
          _this15.getShadowRoot().classList.toggle("i-amphtml-first-page-active", index === 0);
          _this15.getShadowRoot().classList.toggle("i-amphtml-last-page-active", index === lastIndex);
        });
      }
    }, {
      key: "onRtlStateUpdate_",
      value: function onRtlStateUpdate_(rtlState) {
        var _this16 = this;
        this.vsync_.mutate(function() {
          rtlState ? _this16.getShadowRoot().setAttribute("dir", "rtl") : _this16.getShadowRoot().removeAttribute("dir");
        });
      }
    }, {
      key: "onKeyboardActiveUpdate_",
      value: function onKeyboardActiveUpdate_(keyboardActive) {
        var _this17 = this;
        this.vsync_.mutate(function() {
          _this17.getShadowRoot().classList.toggle("amp-mode-keyboard-active", keyboardActive);
        });
      }
    }, {
      key: "onAudioIconClick_",
      value: function onAudioIconClick_(mute) {
        var _this18 = this;
        this.storeService_.dispatch(Action.TOGGLE_MUTED, mute);
        this.vsync_.mutate(function() {
          _this18.getShadowRoot().setAttribute(MESSAGE_DISPLAY_CLASS, "show");
          _this18.hideMessageAfterTimeout_(MESSAGE_DISPLAY_CLASS);
        });
      }
    }, {
      key: "onPausedClick_",
      value: function onPausedClick_(paused) {
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, paused);
      }
    }, {
      key: "onShareClick_",
      value: function onShareClick_(event) {
        event.preventDefault();
        if (event.target[VIEWER_CONTROL_EVENT_NAME]) {
          this.onViewerControlClick_(dev().assertElement(event.target));
          return;
        }
        var isOpen = this.storeService_.get(StateProperty.SHARE_MENU_STATE);
        this.storeService_.dispatch(Action.TOGGLE_SHARE_MENU, !isOpen);
      }
    }, {
      key: "onViewerControlClick_",
      value: function onViewerControlClick_(element) {
        var eventName = element[VIEWER_CONTROL_EVENT_NAME];
        this.viewerMessagingHandler_ && this.viewerMessagingHandler_.send("documentStateUpdate", dict({
          "state": AMP_STORY_PLAYER_EVENT,
          "value": eventName
        }));
      }
    }, {
      key: "onInfoClick_",
      value: function onInfoClick_() {
        var isOpen = this.storeService_.get(StateProperty.INFO_DIALOG_STATE);
        this.storeService_.dispatch(Action.TOGGLE_INFO_DIALOG, !isOpen);
      }
    }, {
      key: "onSidebarClick_",
      value: function onSidebarClick_() {
        this.storeService_.dispatch(Action.TOGGLE_SIDEBAR, true);
      }
    }, {
      key: "onNewPageAvailable_",
      value: function onNewPageAvailable_() {
        var _this19 = this;
        this.vsync_.mutate(function() {
          _this19.getShadowRoot().setAttribute(HAS_NEW_PAGE_ATTRIBUTE, "show");
          _this19.hideMessageAfterTimeout_(HAS_NEW_PAGE_ATTRIBUTE);
        });
      }
    }, {
      key: "onViewerCustomControls_",
      value: function onViewerCustomControls_(controls) {
        var _this20 = this;
        if (controls.length <= 0) {
          return;
        }
        controls.forEach(function(control) {
          if (!control.name) {
            return;
          }
          var defaultConfig = VIEWER_CONTROL_DEFAULTS[control.name];
          var element;
          if (defaultConfig && defaultConfig.selector) {
            element = scopedQuerySelector(_this20.getShadowRoot(), defaultConfig.selector);
          } else {
            element = _this20.win_.document.createElement("button");
            _this20.vsync_.mutate(function() {
              element.classList.add("i-amphtml-story-button");
              _this20.buttonsContainer_.appendChild(element);
            });
          }
          _this20.vsync_.mutate(function() {
            element.classList.add(VIEWER_CUSTOM_CONTROL_CLASS);
          });
          if (control.visibility === "hidden") {
            _this20.vsync_.mutate(function() {
              element.classList.add("i-amphtml-story-ui-hide-button");
            });
          }
          if (!control.visibility || control.visibility === "visible") {
            _this20.vsync_.mutate(function() {
              dev().assertElement(element).classList.remove("i-amphtml-story-ui-hide-button");
            });
          }
          if (control.state === "disabled") {
            _this20.vsync_.mutate(function() {
              element.disabled = true;
            });
          }
          if (control.position === "start") {
            var startButtonContainer = _this20.systemLayerEl_.querySelector(".i-amphtml-story-system-layer-buttons-start-position");
            _this20.vsync_.mutate(function() {
              _this20.buttonsContainer_.removeChild(element);
              startButtonContainer.appendChild(element);
            });
          }
          if (control.backgroundImageUrl) {
            setImportantStyles(dev().assertElement(element), {
              "background-image": "url('" + control.backgroundImageUrl + "')"
            });
          }
          element[VIEWER_CONTROL_EVENT_NAME] = "amp-story-player-" + control.name;
        });
      }
    }, {
      key: "updateProgress",
      value: function updateProgress(pageId, progress) {
        this.progressBar_.updateProgress(pageId, progress);
      }
    }, {
      key: "logInternal_",
      value: function logInternal_(logEntry) {
        this.developerButtons_.log(logEntry);
        this.developerLog_.log(logEntry);
      }
    }, {
      key: "logAll",
      value: function logAll(logEntries) {
        var _this21 = this;
        if (!getMode().development) {
          return;
        }
        this.vsync_.mutate(function() {
          logEntries.forEach(function(logEntry) {
            return _this21.logInternal_(logEntry);
          });
        });
      }
    }, {
      key: "log",
      value: function log(logEntry) {
        if (!getMode().development) {
          return;
        }
        this.logInternal_(logEntry);
      }
    }, {
      key: "resetDeveloperLogs",
      value: function resetDeveloperLogs() {
        if (!getMode().development) {
          return;
        }
        this.developerButtons_.clear();
        this.developerLog_.clear();
      }
    }, {
      key: "setDeveloperLogContextString",
      value: function setDeveloperLogContextString(contextString) {
        if (!getMode().development) {
          return;
        }
        this.developerLog_.setContextString(contextString);
      }
    }, {
      key: "hideDeveloperLog",
      value: function hideDeveloperLog() {
        if (!getMode().development) {
          return;
        }
        this.developerLog_.hide();
      }
    }]);
    return SystemLayer2;
  }();

  // build/amp-story-unsupported-browser-layer-1.0.css.js
  var CSS11 = `.i-amphtml-story-unsupported-browser-overlay{position:absolute!important;z-index:20000001!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;color:#fff!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:none!important}.i-amphtml-story-unsupported-browser-overlay .i-amphtml-story-overlay-text{color:#fff!important}.i-amphtml-story-unsupported-browser-overlay{display:-ms-flexbox!important;display:flex!important}.i-amphtml-gear-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'%3E%3Cpath fill='none' d='M0 0h20v20H0V0z'/%3E%3Cpath d='M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34a.4.4 0 0 0-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'/%3E%3C/svg%3E")!important}.i-amphtml-continue-button{border-radius:20px;font-family:Roboto,sans-serif;color:#000;font-weight:400!important;font-size:16px;background:#fff;padding:10px 20px;border:2px solid #aaa;text-decoration:none;display:block;margin-top:25px;margin-right:auto;margin-left:auto;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-unsupported-browser-layer.css*/`;

  // extensions/amp-story/1.0/amp-story-unsupported-browser-layer.js
  function _classCallCheck43(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties42(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass42(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties42(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties42(Constructor, staticProps);
    return Constructor;
  }
  var CONTINUE_ANYWAY_BUTTON_CLASS = "i-amphtml-continue-button";
  var UNSUPPORTED_BROWSER_LAYER_TEMPLATE = {
    tag: "div",
    attrs: dict({
      "class": "i-amphtml-story-unsupported-browser-overlay"
    }),
    children: [{
      tag: "div",
      attrs: dict({
        "class": "i-amphtml-overlay-container"
      }),
      children: [
        {
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-gear-icon"
          })
        },
        {
          tag: "div",
          attrs: dict({
            "class": "i-amphtml-story-overlay-text"
          }),
          localizedStringId: LocalizedStringId.AMP_STORY_WARNING_UNSUPPORTED_BROWSER_TEXT
        },
        {
          tag: "button",
          attrs: dict({
            "class": "i-amphtml-continue-button"
          }),
          localizedStringId: LocalizedStringId.AMP_STORY_CONTINUE_ANYWAY_BUTTON_LABEL
        }
      ]
    }]
  };
  var UnsupportedBrowserLayer = /* @__PURE__ */ function() {
    function UnsupportedBrowserLayer2(win) {
      _classCallCheck43(this, UnsupportedBrowserLayer2);
      this.win_ = win;
      this.root_ = null;
      this.element_ = null;
      this.continueButton_ = null;
      this.storeService_ = getStoreService(this.win_);
    }
    _createClass42(UnsupportedBrowserLayer2, [{
      key: "build",
      value: function build() {
        var _this = this;
        if (this.root_) {
          return this.root_;
        }
        this.root_ = this.win_.document.createElement("div");
        this.element_ = renderAsElement(this.win_.document, UNSUPPORTED_BROWSER_LAYER_TEMPLATE);
        createShadowRootWithStyle(this.root_, this.element_, CSS11);
        this.continueButton_ = this.element_.querySelector("." + CONTINUE_ANYWAY_BUTTON_CLASS);
        this.continueButton_.addEventListener("click", function() {
          _this.storeService_.dispatch(Action.TOGGLE_SUPPORTED_BROWSER, true);
        });
        return this.root_;
      }
    }, {
      key: "get",
      value: function get() {
        if (!this.root_) {
          this.build();
        }
        return this.root_;
      }
    }, {
      key: "removeLayer",
      value: function removeLayer() {
        if (this.root_) {
          removeElement(this.root_);
        }
      }
    }]);
    return UnsupportedBrowserLayer2;
  }();

  // build/amp-story-viewport-warning-layer-1.0.css.js
  var CSS12 = `:host{all:initial!important;color:initial!important}.i-amphtml-story-no-rotation-overlay{position:absolute!important;z-index:20000000!important;font-family:Roboto,sans-serif!important;font-size:20px!important;font-weight:700!important;line-height:1.5!important;padding:32px!important;background-color:#000!important;color:#fff!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:none!important}.i-amphtml-story-no-rotation-overlay .i-amphtml-story-overlay-text{color:#fff!important}.i-amphtml-story-landscape.i-amphtml-story-no-rotation-overlay{display:-ms-flexbox!important;display:flex!important}.i-amphtml-desktop-size-icon,.i-amphtml-rotate-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important}.i-amphtml-rotate-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29A10.487 10.487 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z'/%3E%3C/svg%3E")!important}.i-amphtml-desktop-size-icon{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12.01 5.5 10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z'/%3E%3C/svg%3E")!important}
/*# sourceURL=/extensions/amp-story/1.0/amp-story-viewport-warning-layer.css*/`;

  // extensions/amp-story/1.0/amp-story-viewport-warning-layer.js
  var _templateObject13;
  function _classCallCheck44(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties43(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass43(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties43(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties43(Constructor, staticProps);
    return Constructor;
  }
  function _taggedTemplateLiteralLoose11(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  var LANDSCAPE_OVERLAY_CLASS = "i-amphtml-story-landscape";
  var RESIZE_THROTTLE_MS = 300;
  var getTemplate5 = function getTemplate6(element) {
    return htmlFor(element)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose11(['\n    <div class="\n        i-amphtml-story-no-rotation-overlay i-amphtml-story-system-reset">\n      <div class="i-amphtml-overlay-container">\n        <div class="i-amphtml-story-overlay-icon"></div>\n        <div class="i-amphtml-story-overlay-text"></div>\n      </div>\n    </div>\n  '])));
  };
  var ViewportWarningLayer = /* @__PURE__ */ function() {
    function ViewportWarningLayer2(win, storyElement, desktopWidthThreshold, desktopHeightThreshold) {
      _classCallCheck44(this, ViewportWarningLayer2);
      this.win_ = win;
      this.desktopHeightThreshold_ = desktopHeightThreshold;
      this.desktopWidthThreshold_ = desktopWidthThreshold;
      this.isBuilt_ = false;
      this.localizationService_ = null;
      this.overlayEl_ = null;
      this.platform_ = Services.platformFor(this.win_);
      this.storeService_ = getStoreService(this.win_);
      this.storyElement_ = storyElement;
      this.unlistenResizeEvents_ = null;
      this.vsync_ = Services.vsyncFor(this.win_);
      this.initializeListeners_();
    }
    _createClass43(ViewportWarningLayer2, [{
      key: "build",
      value: function build() {
        var _this = this;
        if (this.isBuilt()) {
          return;
        }
        this.overlayEl_ = this.getViewportWarningOverlayTemplate_();
        this.localizationService_ = getLocalizationService(this.storyElement_);
        this.isBuilt_ = true;
        var root = this.win_.document.createElement("div");
        createShadowRootWithStyle(root, this.overlayEl_, CSS12);
        this.onUIStateUpdate_(this.storeService_.get(StateProperty.UI_STATE));
        this.vsync_.mutate(function() {
          _this.storyElement_.insertBefore(root, _this.storyElement_.firstChild);
        });
      }
    }, {
      key: "isBuilt",
      value: function isBuilt() {
        return this.isBuilt_;
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this2 = this;
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this2.onUIStateUpdate_(uiState);
        }, true);
        this.storeService_.subscribe(StateProperty.VIEWPORT_WARNING_STATE, function(viewportWarningState) {
          _this2.onViewportWarningStateUpdate_(viewportWarningState);
        }, true);
      }
    }, {
      key: "onViewportWarningStateUpdate_",
      value: function onViewportWarningStateUpdate_(viewportWarningState) {
        var _this3 = this;
        var isMobile = this.storeService_.get(StateProperty.UI_STATE) === UIType.MOBILE;
        var shouldShowLandscapeOverlay = isMobile && viewportWarningState;
        if (!shouldShowLandscapeOverlay && !this.isBuilt()) {
          return;
        }
        this.build();
        if (viewportWarningState) {
          var resizeThrottle = throttle(this.win_, function() {
            return _this3.onResize_();
          }, RESIZE_THROTTLE_MS);
          this.unlistenResizeEvents_ = listen(this.win_, "resize", resizeThrottle);
        } else if (this.unlistenResizeEvents_) {
          this.unlistenResizeEvents_();
          this.unlistenResizeEvents_ = null;
        }
        this.updateTextContent_();
        this.vsync_.mutate(function() {
          _this3.overlayEl_.classList.toggle(LANDSCAPE_OVERLAY_CLASS, shouldShowLandscapeOverlay);
        });
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        var _this4 = this;
        if (!this.isBuilt()) {
          return;
        }
        this.vsync_.mutate(function() {
          uiState === UIType.DESKTOP_PANELS ? _this4.overlayEl_.setAttribute("desktop", "") : _this4.overlayEl_.removeAttribute("desktop");
        });
      }
    }, {
      key: "onResize_",
      value: function onResize_() {
        this.updateTextContent_();
      }
    }, {
      key: "getViewportWarningOverlayTemplate_",
      value: function getViewportWarningOverlayTemplate_() {
        var template = getTemplate5(this.storyElement_);
        var iconEl = template.querySelector(".i-amphtml-story-overlay-icon");
        if (this.platform_.isIos() || this.platform_.isAndroid()) {
          iconEl.classList.add("i-amphtml-rotate-icon");
          return template;
        }
        iconEl.classList.add("i-amphtml-desktop-size-icon");
        return template;
      }
    }, {
      key: "updateTextContent_",
      value: function updateTextContent_() {
        var _this5 = this;
        var textEl = this.overlayEl_.querySelector(".i-amphtml-story-overlay-text");
        var textContent;
        this.vsync_.run({
          measure: function measure() {
            textContent = _this5.getTextContent_();
          },
          mutate: function mutate() {
            if (!textContent) {
              return;
            }
            textEl.textContent = textContent;
          }
        });
      }
    }, {
      key: "getTextContent_",
      value: function getTextContent_() {
        if (this.platform_.isIos() || this.platform_.isAndroid()) {
          return this.localizationService_.getLocalizedString(LocalizedStringId.AMP_STORY_WARNING_LANDSCAPE_ORIENTATION_TEXT);
        }
        var viewportHeight = this.win_.innerHeight;
        var viewportWidth = this.win_.innerWidth;
        if (viewportHeight < this.desktopHeightThreshold_ && viewportWidth < this.desktopWidthThreshold_) {
          return this.localizationService_.getLocalizedString(LocalizedStringId.AMP_STORY_WARNING_DESKTOP_SIZE_TEXT);
        }
        if (viewportWidth < this.desktopWidthThreshold_) {
          return this.localizationService_.getLocalizedString(LocalizedStringId.AMP_STORY_WARNING_DESKTOP_WIDTH_SIZE_TEXT);
        }
        if (viewportHeight < this.desktopHeightThreshold_) {
          return this.localizationService_.getLocalizedString(LocalizedStringId.AMP_STORY_WARNING_DESKTOP_HEIGHT_SIZE_TEXT);
        }
        return null;
      }
    }]);
    return ViewportWarningLayer2;
  }();

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

  // extensions/amp-story/1.0/amp-story-media-query-service.js
  function _classCallCheck45(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties44(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass44(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties44(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties44(Constructor, staticProps);
    return Constructor;
  }
  var getMediaQueryService = function getMediaQueryService2(win) {
    var service = Services.storyMediaQueryService(win);
    if (!service) {
      service = new AmpStoryMediaQueryService(win);
      registerServiceBuilder(win, "story-media-query", function() {
        return service;
      });
    }
    return service;
  };
  var AmpStoryMediaQueryService = /* @__PURE__ */ function() {
    function AmpStoryMediaQueryService2(win) {
      _classCallCheck45(this, AmpStoryMediaQueryService2);
      this.win_ = win;
      this.initializePromise_ = null;
      this.matcher_ = null;
      this.storyEl_ = dev().assertElement(this.win_.document.querySelector("amp-story"));
    }
    _createClass44(AmpStoryMediaQueryService2, [{
      key: "onMediaQueryMatch",
      value: function onMediaQueryMatch(media, callback) {
        var _this = this;
        return this.initialize_().then(function() {
          var mediaQueryList = _this.matcher_.contentWindow.matchMedia(media);
          mediaQueryList.addListener(function(event) {
            return callback(event.matches);
          });
          callback(mediaQueryList.matches);
          return mediaQueryList;
        });
      }
    }, {
      key: "initialize_",
      value: function initialize_() {
        var _this2 = this;
        if (this.initializePromise_) {
          return this.initializePromise_;
        }
        this.initializePromise_ = new Promise(function(resolve) {
          _this2.matcher_ = _this2.win_.document.createElement("iframe");
          _this2.matcher_.classList.add("i-amphtml-story-media-query-matcher");
          _this2.matcher_.onload = resolve;
          _this2.storyEl_.appendChild(_this2.matcher_);
        });
        return this.initializePromise_;
      }
    }]);
    return AmpStoryMediaQueryService2;
  }();

  // extensions/amp-story/1.0/amp-story.js
  var _MAX_MEDIA_ELEMENT_CO;
  function _classCallCheck46(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties45(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass45(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties45(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties45(Constructor, staticProps);
    return Constructor;
  }
  function _inherits12(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf12(subClass, superClass);
  }
  function _setPrototypeOf12(o, p) {
    _setPrototypeOf12 = Object.setPrototypeOf || function _setPrototypeOf13(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf12(o, p);
  }
  function _createSuper12(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct12();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf12(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf12(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn12(this, result);
    };
  }
  function _possibleConstructorReturn12(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized12(self2);
  }
  function _assertThisInitialized12(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct12() {
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
  function _getPrototypeOf12(o) {
    _getPrototypeOf12 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf13(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf12(o);
  }
  var LocalizedStringsAr = JSON.parse('{"2":{"string":"\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \\"\u0627\u0644\u062A\u0627\u0644\u064A\\""},"3":{"string":"\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \\"\u0631\u062C\u0648\u0639\\""},"4":{"string":"\u062A\u0639\u0630\u0651\u0631 \u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637 \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629 :("},"5":{"string":"\u062A\u0645\u0651 \u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637."},"6":{"string":"\u0627\u0644\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"},"7":{"string":"Facebook"},"8":{"string":"+Google"},"9":{"string":"\u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"\u064A\u0645\u0643\u0646\u0643 \u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0637\u0648\u0644\u0627\u064B \u0648\u0639\u0631\u0636\u064B\u0627 \u0644\u0627\u0633\u062A\u0639\u0631\u0627\u0636 \u0647\u0630\u0647 \u0627\u0644\u062A\u062C\u0631\u0628\u0629."},"19":{"string":"\u064A\u062C\u0628 \u062A\u0641\u0639\u064A\u0644 \u062A\u062C\u0631\u0628\u0629 \u0633\u062C\u0644\u0651 AMP \u0644\u0639\u0631\u0636 \u0647\u0630\u0627 \u0627\u0644\u0645\u062D\u062A\u0648\u0649."},"20":{"string":"\u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0623\u0641\u0636\u0644 \u0639\u0631\u0636\u060C \u064A\u0645\u0643\u0646 \u0627\u0633\u062A\u0639\u0631\u0627\u0636 \u0627\u0644\u0635\u0641\u062D\u0629 \u0641\u064A \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0631\u0623\u0633\u064A."},"21":{"string":"\u0639\u0630\u0631\u064B\u0627\u060C \u064A\u0628\u062F\u0648 \u0623\u0646 \u0645\u062A\u0635\u0641\u0651\u062D\u0643 \u0644\u0627 \u064A\u0648\u0641\u0651\u0631 \u0647\u0630\u0647 \u0627\u0644\u062A\u062C\u0631\u0628\u0629."},"22":{"string":"\u0642\u0628\u0648\u0644"},"23":{"string":"\u0631\u0641\u0636"},"25":{"string":"\u0627\u0644\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0623\u0635\u0644\u064A:"},"26":{"string":"\u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0646 \u0646\u062A\u0627\u0626\u062C AMP"},"27":{"string":"\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644"},"31":{"string":"\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0635\u0648\u062A"},"32":{"string":"\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0635\u0648\u062A"},"33":{"string":"\u0644\u0627 \u062A\u062D\u062A\u0648\u064A \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u0639\u0644\u0649 \u0623\u064A \u0645\u062D\u062A\u0648\u0649 \u0635\u0648\u062A\u064A"},"34":{"string":"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0641\u064A\u062F\u064A\u0648"},"35":{"string":"\u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0633\u0631\u064A\u0639\u064B\u0627 \u0644\u0623\u0639\u0644\u0649"},"36":{"string":"\u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u062A\u063A\u0631\u064A\u062F\u0629"},"37":{"string":"\u064A\u0645\u0643\u0646\u0643 \u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0637\u0648\u0644\u0627\u064B \u0644\u0627\u0633\u062A\u0639\u0631\u0627\u0636 \u0647\u0630\u0647 \u0627\u0644\u062A\u062C\u0631\u0628\u0629."},"38":{"string":"\u064A\u0645\u0643\u0646\u0643 \u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0639\u0631\u0636\u064B\u0627 \u0644\u0627\u0633\u062A\u0639\u0631\u0627\u0636 \u0647\u0630\u0647 \u0627\u0644\u062A\u062C\u0631\u0628\u0629."},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsDe = JSON.parse('{"2":{"string":"Auf \\"Weiter\\" tippen"},"3":{"string":"Auf \\"Zur\xFCck\\" tippen"},"4":{"string":"Der Link konnte nicht in die Zwischenablage kopiert werden"},"5":{"string":"Link kopiert."},"6":{"string":"E-Mail"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Link abrufen"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Maximiere die H\xF6he und Breite deines Fensters, um diese Funktion nutzen zu k\xF6nnen"},"19":{"string":"Wenn du diesen Inhalt aufrufen m\xF6chtest, musst du den amp-story-Test aktivieren."},"20":{"string":"Diese Seite l\xE4sst sich am besten im Hochformat ansehen"},"21":{"string":"Dein aktueller Browser unterst\xFCtzt diese Funktion leider nicht."},"22":{"string":"Annehmen"},"23":{"string":"Ablehnen"},"25":{"string":"In urspr\xFCnglicher Domain ansehen:"},"26":{"string":"Weitere Informationen zu AMP-Ergebnissen"},"27":{"string":"Trotzdem fortfahren"},"31":{"string":"Ton aus"},"32":{"string":"Ton an"},"33":{"string":"Diese Seite hat keinen Ton"},"34":{"string":"Video abspielen"},"35":{"string":"Nach oben wischen"},"36":{"string":"Tweet maximieren"},"37":{"string":"Maximiere die H\xF6he deines Fensters, um diese Funktion nutzen zu k\xF6nnen"},"38":{"string":"Maximiere die Breite deines Fensters, um diese Funktion nutzen zu k\xF6nnen"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsDefault = JSON.parse(`{"4":{"string":":("},"18":{"string":"Expand both the height and width of your window to view this experience"},"19":{"string":"You must enable the amp-story experiment to view this content."},"20":{"string":"The page is best viewed in portrait mode"},"21":{"string":"We're sorry, it looks like your browser doesn't support this experience"},"22":{"string":"Accept"},"23":{"string":"Decline"},"25":{"string":"View on original domain:"},"26":{"string":"More about AMP results"},"27":{"string":"Continue Anyway"},"31":{"string":"Sound off"},"32":{"string":"Sound on"},"33":{"string":"This page has no sound"},"37":{"string":"Expand the height of your window to view this experience"},"38":{"string":"Expand the width of your window to view this experience"},"64":{"string":"Updated"},"71":{"string":"A"},"72":{"string":"B"},"73":{"string":"C"},"74":{"string":"D"},"75":{"string":"Tip 1 of 2"},"76":{"string":"Tap to go to the next screen"},"77":{"string":"Next"},"78":{"string":"Tip 2 of 2"},"79":{"string":"Swipe to go to the next story"},"80":{"string":"Got it"},"81":{"string":"Tip"},"84":{"string":"SCORE:"},"85":{"string":"Pause"},"86":{"string":"Play"},"89":{"string":"Your response will be sent to"},"96":{"string":"Move device to explore"}}`, function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsEn = JSON.parse(`{"2":{"string":"Tap Next","description":"Label indicating that users can navigate to the next page, in the amp-story hint UI."},"3":{"string":"Tap Back","description":"Label indicating that users can navigate to the previous page, in the amp-story hint UI."},"4":{"string":"Could not copy link to clipboard :(","description":"String shown in a failure message to inform the user that a link could not be successfully copied to their clipboard."},"5":{"string":"Link copied!","description":"String shown in a confirmation message to inform the user that a link was successfully copied to their clipboard."},"6":{"string":"Email","description":"Button label for the share target that shares a link via email."},"7":{"string":"Facebook","description":"Button label for the share target that shares a link via Facebook."},"8":{"string":"Google+","description":"Button label for the share target that shares a link via Google+."},"9":{"string":"Get Link","description":"Button label for the share target that shares a link via by copying it to the user's clipboard."},"10":{"string":"LinkedIn","description":"Button label for the share target that shares a link via LinkedIn."},"11":{"string":"Pinterest","description":"Button label for the share target that shares a link via Pinterest."},"12":{"string":"SMS","description":"Button label for the share target that shares a link via SMS."},"13":{"string":"More","description":"Button label for the share target that shares a link via deferral to the operating system's native sharing handler."},"14":{"string":"Tumblr","description":"Button label for the share target that shares a link via Tumblr."},"15":{"string":"Twitter","description":"Button label for the share target that shares a link via Twitter."},"16":{"string":"WhatsApp","description":"Button label for the share target that shares a link via WhatsApp."},"18":{"string":"Expand both the height and width of your window to view this experience","description":"Text for a warning screen that informs the user that stories are only supported in larger browser windows."},"19":{"string":"You must enable the amp-story experiment to view this content.","description":"Text for a warning screen that informs the user that they must enable an experiment to use stories."},"20":{"string":"The page is best viewed in portrait mode","description":"Text for a warning screen that informs the user that stories are only supported in portrait orientation."},"21":{"string":"We're sorry, it looks like your browser doesn't support this experience","description":"Text for a warning screen that informs the user that their browser does not support stories."},"22":{"string":"Accept","description":"Label for a button that allows the user to consent to providing their cookie access."},"23":{"string":"Decline","description":"Label for a button that allows the user to disconsent to providing their cookie access."},"25":{"string":"View on original domain:","description":"Label for a heading of a dialog that shows the user the domain from which the story is served."},"26":{"string":"More about AMP results","description":"Label for a link to documentation on how AMP links are handled."},"27":{"string":"Continue Anyway","description":"Button label to allow the user to continue even if they are not using a supportive browser."},"31":{"string":"Sound off","description":"Text that informs users that the sound is off after they click the mute button"},"32":{"string":"Sound on","description":"Text that informs users that the sound is on after they click the unmute button on a page with sound"},"33":{"string":"This page has no sound","description":"Text that informs users that the sound is on after they click the unmute button on a page without sound"},"34":{"string":"Play video","description":"Label for a button to play the video visible on the page."},"35":{"string":"Swipe up","description":"Label for a button to open a drawer containing additional content via a \\"swipe up\\" user gesture."},"36":{"string":"Expand Tweet","description":"Label in the tooltip text for when a Twitter embed is expandable."},"37":{"string":"Expand the height of your window to view this experience","description":"Text for a warning screen that informs the user that stories are only supported in taller browser windows."},"38":{"string":"Expand the width of your window to view this experience","description":"Text for a warning screen that informs the user that stories are only supported in wider browser windows."},"62":{"string":"Share starting from this page","description":"Checkbox label when the branching experiment is turned on  and the story is in landscape mode; checking the checkbox lets the user share the story from the current page."},"63":{"string":"Line","description":"Button label for the share target that shares a link via Line."},"64":{"string":"Updated","description":"Label that indicates that additional content has been added to a story"},"65":{"string":"Video failed to play","description":"Label indicating that the video visible on the page failed to play."},"66":{"string":"Mute story","description":"Label for the mute button that turns off the sound in the story"},"67":{"string":"Unmute story","description":"Label for the unmute button that turns the sound in the story back on"},"68":{"string":"Story information","description":"Label for the information button that pulls up relevant information about the story content"},"69":{"string":"Share story","description":"Label for the share button that pulls up a panel of options for sharing the story"},"70":{"string":"Toggle story menu","description":"Label for the sidebar button that pulls up a menu of options for interacting with the story"},"71":{"string":"A","description":"Label for the first answer choice from a multiple choice quiz (e.g. A in A/B/C/D)"},"72":{"string":"B","description":"Label for the second answer choice from a multiple choice quiz (e.g. B in A/B/C/D)"},"73":{"string":"C","description":"Label for the third answer choice from a multiple choice quiz (e.g. C in A/B/C/D)"},"74":{"string":"D","description":"Label for the fourth answer choice from a multiple choice quiz (e.g. D in A/B/C/D)"},"75":{"string":"Tip 1 of 2","description":"Label for a hint indicating progress on a multistep onboarding user education tutorial."},"76":{"string":"Tap to go to the next screen","description":"Instruction on how to use the product, within an onboarding user education tutorial."},"77":{"string":"Next","description":"Label for a button dismissing or advancing to the next step of an onboarding user education tutorial."},"78":{"string":"Tip 2 of 2","description":"Label for a hint indicating progress on a multistep onboarding user education tutorial."},"79":{"string":"Swipe to go to the next story","description":"Instruction on how to use the product, within an onboarding user education tutorial."},"80":{"string":"Got it","description":"Label for a button dismissing or advancing to the next step of an onboarding user education tutorial."},"81":{"string":"Tip","description":"Label for a hint in the context of an onboarding user education tutorial."},"82":{"string":"Previous page","description":"Label indicating that users can navigate to the previous page."},"83":{"string":"Activate","description":"Label for the activate button to ask for device orientation permission"},"84":{"string":"SCORE:","description":"Label for the results component preceding the score in percentages"},"85":{"string":"Pause story","description":"Label for a button that pauses the media content on the story"},"86":{"string":"Play story","description":"Label for a button that plays the media content on the story"},"87":{"string":"Close","description":"Label for a button that closes the full page experience and takes the user back to where they were originally"},"88":{"string":"Skip next","description":"Label for a button that advances to the next element in the carousel"},"89":{"string":"Your response will be sent to","description":"Text displayed to users after clicking a button that reveals a disclaimer, telling them more about where their user data will be stored, after they interact with a poll or quiz."},"90":{"string":"Next story","description":"Label for a button that advances to the next element in the carousel."},"91":{"string":"Next page","description":"Label for a button that advances to the next page of the story."},"92":{"string":"Replay","description":"Label for a button that replays the story."},"93":{"string":"Previous page","description":"Label for a button that returns the user to the previous page of the story."},"96":{"string":"Move device to explore","description":"Text displayed to users on gyroscope activation of an amp-story-360 component, telling them to move their device to experience the gyroscope effect."},"97":{"string":"Opening","description":"Text displayed to users on tap of outlink button."}}`, function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsEnGb = JSON.parse(`{"2":{"string":"Tap Next"},"3":{"string":"Tap Back"},"4":{"string":"Could not copy link to clipboard :("},"5":{"string":"Link copied!"},"6":{"string":"Email"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Get Link"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Expand both the height and width of your window to view this experience"},"19":{"string":"You must enable the amp-story experiment to view this content."},"20":{"string":"The page is best viewed in portrait mode"},"21":{"string":"We're sorry, it looks like your browser doesn't support this experience"},"22":{"string":"Accept"},"23":{"string":"Decline"},"25":{"string":"View on original domain:"},"26":{"string":"More about AMP results"},"27":{"string":"Continue Anyway"},"31":{"string":"Sound off"},"32":{"string":"Sound on"},"33":{"string":"This page has no sound"},"34":{"string":"Play video"},"35":{"string":"Swipe up"},"36":{"string":"Expand Tweet"},"37":{"string":"Expand the height of your window to view this experience"},"38":{"string":"Expand the width of your window to view this experience"},"63":{"string":"Line"}}`, function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsEs = JSON.parse('{"2":{"string":"Toca Siguiente"},"3":{"string":"Toca Atr\xE1s"},"4":{"string":"No se ha podido copiar el enlace en el portapapeles\xA0:("},"5":{"string":"Se ha copiado el enlace."},"6":{"string":"Correo electr\xF3nico"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Obtener enlace"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Ampl\xEDa el alto y el ancho de la ventana para ver esta experiencia"},"19":{"string":"Para ver este contenido, debes habilitar el experimento de historia\xA0AMP."},"20":{"string":"La p\xE1gina se visualiza mejor en modo vertical"},"21":{"string":"Parece que este servicio no est\xE1 disponible para tu navegador"},"22":{"string":"Aceptar"},"23":{"string":"Rechazar"},"25":{"string":"Ver en dominio original:"},"26":{"string":"M\xE1s informaci\xF3n sobre los resultados de AMP"},"27":{"string":"Continuar de todos modos"},"31":{"string":"Sonido desactivado"},"32":{"string":"Sonido activado"},"33":{"string":"Esta p\xE1gina no tiene sonido"},"34":{"string":"Reproducir v\xEDdeo"},"35":{"string":"Deslizar el dedo hacia arriba"},"36":{"string":"Mostrar tuit"},"37":{"string":"Ampl\xEDa el alto de la ventana para ver esta experiencia"},"38":{"string":"Ampl\xEDa el ancho de la ventana para ver esta experiencia"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsEs419 = JSON.parse('{"2":{"string":"Presiona Siguiente"},"3":{"string":"Presiona Atr\xE1s"},"4":{"string":"No se pudo copiar el v\xEDnculo en el portapapeles :("},"5":{"string":"Se copi\xF3 el v\xEDnculo."},"6":{"string":"Correo electr\xF3nico"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Obtener v\xEDnculo"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Expande el ancho y la altura de la ventana para ver esta experiencia"},"19":{"string":"Debes habilitar el experimento de historia en formato AMP para ver este contenido."},"20":{"string":"La p\xE1gina est\xE1 optimizada para verse en orientaci\xF3n vertical."},"21":{"string":"Parece que el navegador no es compatible con esta experiencia"},"22":{"string":"Aceptar"},"23":{"string":"Rechazar"},"25":{"string":"Ver en el dominio original:"},"26":{"string":"M\xE1s informaci\xF3n sobre los resultados de AMP"},"27":{"string":"Continuar de todos modos"},"31":{"string":"Sonido desactivado"},"32":{"string":"Sonido activado"},"33":{"string":"Esta p\xE1gina no tiene sonido"},"34":{"string":"Reproducir video"},"35":{"string":"Deslizar el dedo hacia arriba"},"36":{"string":"Expandir tweet"},"37":{"string":"Expande la altura de la ventana para ver esta experiencia"},"38":{"string":"Expande el ancho de la ventana para ver esta experiencia"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsFr = JSON.parse(`{"2":{"string":"Appuyer sur Suivant"},"3":{"string":"Appuyer sur Retour"},"4":{"string":"Impossible de copier le lien dans le presse-papiers :("},"5":{"string":"Lien copi\xE9."},"6":{"string":"E-mail"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Obtenir le lien"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Modifiez la hauteur et la largeur de la fen\xEAtre pour voir cette exp\xE9rience"},"19":{"string":"Vous devez activer l'exp\xE9rience story\xA0AMP pour voir ce contenu."},"20":{"string":"La page s'affiche mieux en mode Portrait"},"21":{"string":"Nous sommes d\xE9sol\xE9s, mais votre navigateur n'est pas compatible avec cette exp\xE9rience"},"22":{"string":"Accepter"},"23":{"string":"Refuser"},"25":{"string":"Afficher sur le domaine d'origine\xA0:"},"26":{"string":"En savoir plus sur les r\xE9sultats AMP"},"27":{"string":"Continuer quand m\xEAme"},"31":{"string":"Son d\xE9sactiv\xE9"},"32":{"string":"Son activ\xE9"},"33":{"string":"Cette page n'a pas de son"},"34":{"string":"Regarder la vid\xE9o"},"35":{"string":"Balayer l'\xE9cran vers le haut"},"36":{"string":"D\xE9velopper le tweet"},"37":{"string":"Augmentez la hauteur de votre fen\xEAtre pour voir cette exp\xE9rience"},"38":{"string":"\xC9largissez la fen\xEAtre pour voir cette exp\xE9rience"},"63":{"string":"Line"}}`, function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsHi = JSON.parse(`{"2":{"string":"'\u0905\u0917\u0932\u093E' \u092A\u0930 \u091F\u0948\u092A \u0915\u0930\u0947\u0902"},"3":{"string":"'\u0935\u093E\u092A\u0938 \u091C\u093E\u090F\u0902' \u092A\u0930 \u091F\u0948\u092A \u0915\u0930\u0947\u0902"},"4":{"string":"\u0932\u093F\u0902\u0915 \u0915\u094D\u0932\u093F\u092A\u092C\u094B\u0930\u094D\u0921 \u092A\u0930 \u0915\u0949\u092A\u0940 \u0928\u0939\u0940\u0902 \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u093E :("},"5":{"string":"\u0932\u093F\u0902\u0915 \u0915\u0949\u092A\u0940 \u0915\u093F\u092F\u093E \u0917\u092F\u093E!"},"6":{"string":"\u0908\u092E\u0947\u0932"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"\u0932\u093F\u0902\u0915 \u092A\u093E\u090F\u0902"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"\u092E\u0948\u0938\u0947\u091C (\u090F\u0938\u090F\u092E\u090F\u0938)"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"\u092F\u0939 \u0935\u0930\u094D\u0936\u0928 \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0928\u0940 \u0935\u093F\u0902\u0921\u094B \u0915\u0940 \u0932\u0902\u092C\u093E\u0908 \u0914\u0930 \u091A\u094C\u0921\u093C\u093E\u0908, \u0926\u094B\u0928\u094B\u0902 \u0915\u094B \u092C\u0922\u093C\u093E\u090F\u0902"},"19":{"string":"\u092F\u0939 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0906\u092A\u0915\u094B \u090F\u090F\u092E\u092A\u0940-\u0915\u0939\u093E\u0928\u0940 \u0915\u0940 \u092A\u0930\u092B\u093C\u0949\u0930\u094D\u092E\u0947\u0902\u0938 \u091C\u093E\u0901\u091A \u091A\u093E\u0932\u0942 \u0915\u0930\u0928\u0940 \u0939\u094B\u0917\u0940."},"20":{"string":"\u092F\u0939 \u092A\u0947\u091C \u092A\u094B\u0930\u094D\u091F\u094D\u0930\u0947\u091F \u092E\u094B\u0921 \u092E\u0947\u0902 \u0938\u092C\u0938\u0947 \u0905\u091A\u094D\u091B\u093E \u0926\u093F\u0916\u093E\u0908 \u0926\u0947\u0924\u093E \u0939\u0948"},"21":{"string":"\u092E\u093E\u092B\u093C \u0915\u0930\u0947\u0902, \u0932\u0917\u0924\u093E \u0939\u0948 \u0915\u093F \u0906\u092A\u0915\u093E \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0907\u0938 \u0935\u0930\u094D\u0936\u0928 \u092A\u0930 \u0915\u093E\u092E \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u093E"},"22":{"string":"\u0938\u094D\u0935\u0940\u0915\u093E\u0930 \u0915\u0930\u0947\u0902"},"23":{"string":"\u0905\u0938\u094D\u0935\u0940\u0915\u093E\u0930 \u0915\u0930\u0947\u0902"},"25":{"string":"\u092E\u0942\u0932 \u0921\u094B\u092E\u0947\u0928 \u092A\u0930 \u0926\u0947\u0916\u0947\u0902:"},"26":{"string":"\u090F\u090F\u092E\u092A\u0940 \u0928\u0924\u0940\u091C\u094B\u0902 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u091C\u093C\u094D\u092F\u093E\u0926\u093E \u091C\u093E\u0928\u0947\u0902"},"27":{"string":"\u092B\u093F\u0930 \u092D\u0940 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902"},"31":{"string":"\u0906\u0935\u093E\u095B \u092C\u0902\u0926 \u0939\u0948"},"32":{"string":"\u0906\u0935\u093E\u095B \u091A\u093E\u0932\u0942 \u0939\u0948"},"33":{"string":"\u0907\u0938 \u092A\u0947\u091C \u092E\u0947\u0902 \u0915\u094B\u0908 \u0906\u0935\u093E\u091C\u093C \u0928\u0939\u0940\u0902 \u0939\u0948"},"34":{"string":"\u0935\u0940\u0921\u093F\u092F\u094B \u091A\u0932\u093E\u090F\u0902"},"35":{"string":"\u090A\u092A\u0930 \u0915\u0940 \u0913\u0930 \u0938\u094D\u0935\u093E\u0907\u092A \u0915\u0930\u0947\u0902"},"36":{"string":"\u091F\u094D\u0935\u0940\u091F \u0915\u094B \u092C\u0921\u093C\u093E \u0915\u0930\u0915\u0947 \u0926\u0947\u0916\u0947\u0902"},"37":{"string":"\u0907\u0938 \u0935\u0930\u094D\u0936\u0928 \u0915\u094B \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0928\u0940 \u0935\u093F\u0902\u0921\u094B \u0915\u0940 \u0932\u0902\u092C\u093E\u0908 \u092C\u0922\u093C\u093E\u090F\u0902"},"38":{"string":"\u092F\u0939 \u0935\u0930\u094D\u0936\u0928 \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0928\u0940 \u0935\u093F\u0902\u0921\u094B \u0915\u0940 \u091A\u094C\u0921\u093C\u093E\u0908 \u092C\u0922\u093C\u093E\u090F\u0902"},"63":{"string":"Line"}}`, function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsId = JSON.parse('{"2":{"string":"Tap Berikutnya"},"3":{"string":"Tap Kembali."},"4":{"string":"Tidak dapat menyalin link ke papan klip :("},"5":{"string":"Link disalin!"},"6":{"string":"Email"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Dapatkan Link"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Luaskan tinggi dan lebar jendela untuk menampilkan pengalaman ini"},"19":{"string":"Anda harus mengaktifkan eksperimen cerita AMP untuk melihat konten ini."},"20":{"string":"Halaman ini ditampilkan paling baik dalam mode potret"},"21":{"string":"Maaf, sepertinya browser Anda tidak mendukung pengalaman ini"},"22":{"string":"Setuju"},"23":{"string":"Tolak"},"25":{"string":"Lihat di domain asal:"},"26":{"string":"Lebih lanjut tentang hasil AMP"},"27":{"string":"Tetap Lanjutkan"},"31":{"string":"Suara nonaktif"},"32":{"string":"Suara aktif"},"33":{"string":"Suara tidak aktif di halaman ini"},"34":{"string":"Putar video"},"35":{"string":"Geser ke atas"},"36":{"string":"Luaskan Tweet"},"37":{"string":"Luaskan tinggi jendela untuk menampilkan pengalaman ini"},"38":{"string":"Luaskan lebar jendela untuk menampilkan pengalaman ini"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsIt = JSON.parse(`{"2":{"string":"Tocca Avanti"},"3":{"string":"Tocca Indietro"},"4":{"string":"Impossibile copiare il link negli appunti :("},"5":{"string":"Link copiato."},"6":{"string":"Email"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Ottieni link"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Espandi sia l'altezza che la larghezza della finestra per visualizzare questa esperienza"},"19":{"string":"Devi attivare l'esperimento di storia AMP per visualizzare questi contenuti."},"20":{"string":"La pagina viene visualizzata in modo ottimale in orientamento verticale"},"21":{"string":"Spiacenti, sembra che il tuo browser non supporti questa esperienza"},"22":{"string":"Accetta"},"23":{"string":"Rifiuta"},"25":{"string":"Visualizza sul dominio originale:"},"26":{"string":"Ulteriori informazioni sui risultati AMP"},"27":{"string":"Continua comunque"},"31":{"string":"Audio disattivato"},"32":{"string":"Audio attivo"},"33":{"string":"Questa pagina non ha audio"},"34":{"string":"Riproduci video"},"35":{"string":"Scorri verso l'alto"},"36":{"string":"Espandi tweet"},"37":{"string":"Espandi l'altezza della finestra per visualizzare questa esperienza"},"38":{"string":"Espandi la larghezza della finestra per visualizzare questa esperienza"},"63":{"string":"Line"}}`, function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsJa = JSON.parse('{"2":{"string":"[\u6B21\u3078] \u3092\u30BF\u30C3\u30D7"},"3":{"string":"\u623B\u308B\u30A2\u30A4\u30B3\u30F3\u3092\u30BF\u30C3\u30D7"},"4":{"string":"\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002"},"5":{"string":"\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"},"6":{"string":"\u30E1\u30FC\u30EB"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"\u30EA\u30F3\u30AF\u3092\u53D6\u5F97"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"\u3053\u306E\u8A18\u4E8B\u3092\u8868\u793A\u3059\u308B\u306B\u306F\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u9AD8\u3055\u3068\u5E45\u306E\u4E21\u65B9\u3092\u62E1\u5927\u3057\u3066\u304F\u3060\u3055\u3044"},"19":{"string":"\u3053\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u793A\u3059\u308B\u306B\u306F amp-story \u30C6\u30B9\u30C8\u3092\u6709\u52B9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"},"20":{"string":"\u3053\u306E\u30DA\u30FC\u30B8\u306F\u30DD\u30FC\u30C8\u30EC\u30FC\u30C8 \u30E2\u30FC\u30C9\u3067\u6700\u9069\u306B\u8868\u793A\u3055\u308C\u307E\u3059"},"21":{"string":"\u3054\u5229\u7528\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u3053\u306E\u8A18\u4E8B\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093"},"22":{"string":"\u540C\u610F\u3059\u308B"},"23":{"string":"\u540C\u610F\u3057\u306A\u3044"},"25":{"string":"\u5143\u306E\u30C9\u30E1\u30A4\u30F3\u3067\u8868\u793A:"},"26":{"string":"AMP \u306E\u7D50\u679C\u306B\u95A2\u3059\u308B\u8A73\u7D30"},"27":{"string":"\u7D9A\u884C\u3059\u308B"},"31":{"string":"\u30B5\u30A6\u30F3\u30C9\u306F\u30AA\u30D5\u3067\u3059"},"32":{"string":"\u30B5\u30A6\u30F3\u30C9\u30AA\u30F3"},"33":{"string":"\u3053\u306E\u30DA\u30FC\u30B8\u306B\u306F\u97F3\u58F0\u304C\u3042\u308A\u307E\u305B\u3093"},"34":{"string":"\u52D5\u753B\u3092\u518D\u751F"},"35":{"string":"\u4E0A\u306B\u30B9\u30EF\u30A4\u30D7"},"36":{"string":"\u30C4\u30A4\u30FC\u30C8\u3092\u5C55\u958B"},"37":{"string":"\u3053\u306E\u8A18\u4E8B\u3092\u8868\u793A\u3059\u308B\u306B\u306F\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u9AD8\u3055\u3092\u62E1\u5927\u3057\u3066\u304F\u3060\u3055\u3044"},"38":{"string":"\u3053\u306E\u8A18\u4E8B\u3092\u8868\u793A\u3059\u308B\u306B\u306F\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u5E45\u3092\u62E1\u5927\u3057\u3066\u304F\u3060\u3055\u3044"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsKo = JSON.parse('{"2":{"string":"\uB2E4\uC74C\uC744 \uD0ED\uD558\uC138\uC694."},"3":{"string":"\uB4A4\uB85C\uB97C \uD0ED\uD558\uC138\uC694."},"4":{"string":"\uB9C1\uD06C\uB97C \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."},"5":{"string":"\uB9C1\uD06C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."},"6":{"string":"\uC774\uBA54\uC77C"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"\uB9C1\uD06C \uBC1B\uAE30"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"\uC774 \uD658\uACBD\uC744 \uBCF4\uB824\uBA74 \uCC3D \uB192\uC774\uC640 \uB108\uBE44\uB97C \uB298\uB9AC\uC138\uC694."},"19":{"string":"\uC774 \uCF58\uD150\uCE20\uB97C \uBCF4\uB824\uBA74 amp-story \uC2E4\uD5D8\uC744 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."},"20":{"string":"\uC774 \uD398\uC774\uC9C0\uB294 \uC138\uB85C \uBAA8\uB4DC\uC5D0\uC11C \uAC00\uC7A5 \uC798 \uD45C\uC2DC\uB429\uB2C8\uB2E4."},"21":{"string":"\uC0AC\uC6A9 \uC911\uC778 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC774 \uD658\uACBD\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4."},"22":{"string":"\uC218\uB77D"},"23":{"string":"\uAC70\uBD80"},"25":{"string":"\uC6D0\uB798 \uB3C4\uBA54\uC778\uC5D0\uC11C \uBCF4\uAE30:"},"26":{"string":"AMP \uACB0\uACFC \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uAE30"},"27":{"string":"\uACC4\uC18D\uD558\uAE30"},"31":{"string":"\uC0AC\uC6B4\uB4DC \uAEBC\uC9D0"},"32":{"string":"\uC0AC\uC6B4\uB4DC \uCF1C\uC9D0"},"33":{"string":"\uC774 \uD398\uC774\uC9C0\uC5D0\uB294 \uC0AC\uC6B4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."},"34":{"string":"\uB3D9\uC601\uC0C1 \uC7AC\uC0DD"},"35":{"string":"\uC704\uB85C \uC2A4\uC640\uC774\uD504"},"36":{"string":"\uD2B8\uC717 \uD3BC\uCE58\uAE30"},"37":{"string":"\uC774 \uD658\uACBD\uC744 \uBCF4\uB824\uBA74 \uCC3D \uB192\uC774\uB97C \uB298\uB9AC\uC138\uC694."},"38":{"string":"\uC774 \uD658\uACBD\uC744 \uBCF4\uB824\uBA74 \uCC3D \uB108\uBE44\uB97C \uB298\uB9AC\uC138\uC694."},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsNl = JSON.parse('{"2":{"string":"Tik op Volgende"},"3":{"string":"Tik op Terug"},"4":{"string":"Kan link niet kopi\xEBren naar klembord :("},"5":{"string":"Link gekopieerd"},"6":{"string":"E-mail"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Link ophalen"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"Sms"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Maak je venster hoger en breder om deze functionaliteit te bekijken"},"19":{"string":"Je moet het amp-story-experiment inschakelen om deze content te bekijken."},"20":{"string":"De pagina kan het beste worden bekeken in de staande modus"},"21":{"string":"Je browser ondersteunt deze functionaliteit niet"},"22":{"string":"Accepteren"},"23":{"string":"Weigeren"},"25":{"string":"Bekijken op oorspronkelijk domein:"},"26":{"string":"Meer over AMP-resultaten"},"27":{"string":"Toch doorgaan"},"31":{"string":"Geluid uit"},"32":{"string":"Geluid aan"},"33":{"string":"Deze pagina heeft geen geluid"},"34":{"string":"Video afspelen"},"35":{"string":"Omhoog vegen"},"36":{"string":"Tweet uitvouwen"},"37":{"string":"Maak je venster hoger om deze functionaliteit te bekijken"},"38":{"string":"Maak je venster breder om deze functionaliteit te bekijken"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsNo = JSON.parse('{"2":{"string":"Trykk p\xE5 Neste"},"3":{"string":"Trykk p\xE5 Tilbake"},"4":{"string":"Kunne ikke kopiere linken til utklippstavlen :("},"5":{"string":"Linken er kopiert."},"6":{"string":"E-post"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Hent linken"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Gj\xF8r vinduet ditt st\xF8rre for \xE5 se denne opplevelsen"},"19":{"string":"Du m\xE5 aktivere eksperimentet med AMP-snuttsamlinger for \xE5 se dette innholdet."},"20":{"string":"Den beste visningen av siden er i st\xE5ende retning"},"21":{"string":"Beklager, men det ser ut til at nettleseren din ikke st\xF8tter denne opplevelsen"},"22":{"string":"Godta"},"23":{"string":"Avsl\xE5"},"25":{"string":"Se p\xE5 det opprinnelige domenet:"},"26":{"string":"Mer om AMP-resultater"},"27":{"string":"Fortsett likevel"},"31":{"string":"Lyd av"},"32":{"string":"Lyd p\xE5"},"33":{"string":"Denne siden har ikke noe lyd"},"34":{"string":"Spill av videoen"},"35":{"string":"Sveip opp"},"36":{"string":"Vis Twitter-meldingen"},"37":{"string":"Gj\xF8r vinduet ditt st\xF8rre for \xE5 se denne opplevelsen"},"38":{"string":"Gj\xF8r vinduet ditt bredere for \xE5 se denne opplevelsen"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsPtBr = JSON.parse('{"2":{"string":"Toque em \\"Pr\xF3xima\\""},"3":{"string":"Toque em \\"Voltar\\""},"4":{"string":"N\xE3o foi poss\xEDvel copiar o link para a \xE1rea de transfer\xEAncia :("},"5":{"string":"Link copiado"},"6":{"string":"E-mail"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Copiar link"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Aumente a altura e largura da janela para ver esta experi\xEAncia"},"19":{"string":"Voc\xEA precisa ativar o experimento amp-story para ver este conte\xFAdo."},"20":{"string":"Melhor visualiza\xE7\xE3o da p\xE1gina no modo retrato"},"21":{"string":"Parece que o navegador n\xE3o \xE9 compat\xEDvel com esta experi\xEAncia"},"22":{"string":"Aceitar"},"23":{"string":"Recusar"},"25":{"string":"Ver no dom\xEDnio original:"},"26":{"string":"Mais sobre resultados de AMP"},"27":{"string":"Continuar mesmo assim"},"31":{"string":"Som desativado"},"32":{"string":"Som ativado"},"33":{"string":"Esta p\xE1gina n\xE3o tem som"},"34":{"string":"Assistir v\xEDdeo"},"35":{"string":"Deslizar para cima"},"36":{"string":"Expandir tweet"},"37":{"string":"Aumente a altura da janela para ver esta experi\xEAncia"},"38":{"string":"Aumente a largura da janela para ver esta experi\xEAncia"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsPtPt = JSON.parse('{"2":{"string":"Toque em Seguinte."},"3":{"string":"Toque em Anterior"},"4":{"string":"N\xE3o foi poss\xEDvel copiar o link para a \xE1rea de transfer\xEAncia :("},"5":{"string":"Link copiado!"},"6":{"string":"Email"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Obter link"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Expanda a altura e a largura da sua janela para ver esta experi\xEAncia."},"19":{"string":"Tem de ativar a experi\xEAncia da hist\xF3ria AMP para ver este conte\xFAdo."},"20":{"string":"Conseguir\xE1 visualizar melhor esta p\xE1gina no modo retrato."},"21":{"string":"Lamentamos, mas parece que o seu navegador n\xE3o suporta esta experi\xEAncia."},"22":{"string":"Aceitar"},"23":{"string":"Recusar"},"25":{"string":"Veja no dom\xEDnio original:"},"26":{"string":"Mais acerca dos resultados AMP"},"27":{"string":"Continuar mesmo assim"},"31":{"string":"Som desativado"},"32":{"string":"Som ativado"},"33":{"string":"Esta p\xE1gina n\xE3o tem som."},"34":{"string":"Reproduzir v\xEDdeo"},"35":{"string":"Deslizar rapidamente para cima"},"36":{"string":"Expandir twit"},"37":{"string":"Expanda a altura da janela para ver esta experi\xEAncia."},"38":{"string":"Expanda a largura da janela para ver esta experi\xEAncia."},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsRu = JSON.parse('{"2":{"string":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \\"\u0414\u0430\u043B\u0435\u0435\\""},"3":{"string":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \\"\u041D\u0430\u0437\u0430\u0434\\""},"4":{"string":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430."},"5":{"string":"\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430"},"6":{"string":"\u041F\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"\u0422\u0432\u0438\u0442\u0442\u0435\u0440"},"16":{"string":"WhatsApp"},"18":{"string":"\u0423\u0432\u0435\u043B\u0438\u0447\u044C\u0442\u0435 \u0432\u044B\u0441\u043E\u0442\u0443 \u0438 \u0448\u0438\u0440\u0438\u043D\u0443 \u043E\u043A\u043D\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442."},"19":{"string":"\u0414\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u044D\u0442\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443 \u043D\u0443\u0436\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u0441 AMP-\u0438\u0441\u0442\u043E\u0440\u0438\u044F\u043C\u0438."},"20":{"string":"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u0438."},"21":{"string":"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u044D\u0442\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u044E."},"22":{"string":"\u041F\u0440\u0438\u043D\u044F\u0442\u044C"},"23":{"string":"\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"},"25":{"string":"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0434\u043E\u043C\u0435\u043D:"},"26":{"string":"\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E AMP-\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u0445"},"27":{"string":"\u0412\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"},"31":{"string":"\u0417\u0432\u0443\u043A \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D"},"32":{"string":"\u0417\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0435\u043D"},"33":{"string":"\u0412 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0435 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043D\u0435\u0442 \u0437\u0432\u0443\u043A\u0430."},"34":{"string":"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043E"},"35":{"string":"\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0432\u0432\u0435\u0440\u0445"},"36":{"string":"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0442\u0432\u0438\u0442"},"37":{"string":"\u0423\u0432\u0435\u043B\u0438\u0447\u044C\u0442\u0435 \u0432\u044B\u0441\u043E\u0442\u0443 \u043E\u043A\u043D\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442."},"38":{"string":"\u0423\u0432\u0435\u043B\u0438\u0447\u044C\u0442\u0435 \u0448\u0438\u0440\u0438\u043D\u0443 \u043E\u043A\u043D\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442."},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsTr = JSON.parse(`{"2":{"string":"Sonraki'ye dokunun"},"3":{"string":"Geri'ye dokunun"},"4":{"string":"Ba\u011Flant\u0131 panoya kopyalanamad\u0131 :("},"5":{"string":"Ba\u011Flant\u0131 kopyaland\u0131!"},"6":{"string":"E-posta"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"Ba\u011Flant\u0131y\u0131 Al"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"Bu deneyimi g\xF6rebilmek i\xE7in pencerenizin hem y\xFCksekli\u011Fini hem de geni\u015Fli\u011Fini art\u0131r\u0131n"},"19":{"string":"Bu i\xE7eri\u011Fi g\xF6rebilmek i\xE7in amp hikayesi deneyimini etkinle\u015Ftirmeniz gerekir."},"20":{"string":"Sayfa en iyi dikey modda g\xF6r\xFCnt\xFClenir"},"21":{"string":"Maalesef taray\u0131c\u0131n\u0131z bu deneyimi desteklemiyor gibi g\xF6r\xFCn\xFCyor"},"22":{"string":"Kabul et"},"23":{"string":"Reddet"},"25":{"string":"Orijinal alanda g\xF6r\xFCnt\xFCle:"},"26":{"string":"AMP sonu\xE7lar\u0131 hakk\u0131nda daha fazla bilgi"},"27":{"string":"Yine de Devam Et"},"31":{"string":"Ses kapal\u0131"},"32":{"string":"Ses a\xE7\u0131k"},"33":{"string":"Bu sayfada ses yok"},"34":{"string":"Videoyu oynat"},"35":{"string":"Yukar\u0131 kayd\u0131r"},"36":{"string":"Tweet'i geni\u015Flet"},"37":{"string":"Bu deneyimi g\xF6rebilmek i\xE7in pencerenizin y\xFCksekli\u011Fini art\u0131r\u0131n"},"38":{"string":"Bu deneyimi g\xF6rebilmek i\xE7in pencerenizin geni\u015Fli\u011Fini art\u0131r\u0131n"},"63":{"string":"Line"}}`, function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsVi = JSON.parse('{"2":{"string":"Nh\u1EA5n v\xE0o Ti\u1EBFp theo"},"3":{"string":"Nh\u1EA5n v\xE0o Quay l\u1EA1i"},"4":{"string":"Kh\xF4ng th\u1EC3 sao ch\xE9p li\xEAn k\u1EBFt v\xE0o khay nh\u1EDB t\u1EA1m :("},"5":{"string":"\u0110\xE3 sao ch\xE9p li\xEAn k\u1EBFt!"},"6":{"string":"Email"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"L\u1EA5y li\xEAn k\u1EBFt"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"SMS"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"M\u1EDF r\u1ED9ng c\u1EA3 chi\u1EC1u cao v\xE0 chi\u1EC1u r\u1ED9ng c\u1EEDa s\u1ED5 \u0111\u1EC3 xem tr\u1EA3i nghi\u1EC7m n\xE0y"},"19":{"string":"B\u1EA1n c\u1EA7n ph\u1EA3i b\u1EADt th\u1EED nghi\u1EC7m c\xE2u chuy\u1EC7n amp \u0111\u1EC3 xem n\u1ED9i dung n\xE0y."},"20":{"string":"Trang n\xE0y \u0111\u01B0\u1EE3c xem t\u1ED1t nh\u1EA5t \u1EDF ch\u1EBF \u0111\u1ED9 ch\xE2n dung"},"21":{"string":"R\u1EA5t ti\u1EBFc, c\xF3 v\u1EBB nh\u01B0 tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 tr\u1EA3i nghi\u1EC7m n\xE0y"},"22":{"string":"Ch\u1EA5p nh\u1EADn"},"23":{"string":"T\u1EEB ch\u1ED1i"},"25":{"string":"Xem tr\xEAn mi\u1EC1n g\u1ED1c:"},"26":{"string":"Th\xEAm th\xF4ng tin v\u1EC1 k\u1EBFt qu\u1EA3 AMP"},"27":{"string":"V\u1EABn ti\u1EBFp t\u1EE5c"},"31":{"string":"T\u1EAFt \xE2m thanh"},"32":{"string":"B\u1EADt \xE2m thanh"},"33":{"string":"Trang n\xE0y kh\xF4ng c\xF3 \xE2m thanh"},"34":{"string":"Ph\xE1t video"},"35":{"string":"Vu\u1ED1t l\xEAn"},"36":{"string":"M\u1EDF r\u1ED9ng Tweet"},"37":{"string":"M\u1EDF r\u1ED9ng chi\u1EC1u cao c\u1EEDa s\u1ED5 \u0111\u1EC3 xem tr\u1EA3i nghi\u1EC7m n\xE0y"},"38":{"string":"M\u1EDF r\u1ED9ng chi\u1EC1u r\u1ED9ng c\u1EEDa s\u1ED5 \u0111\u1EC3 xem tr\u1EA3i nghi\u1EC7m n\xE0y"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsZhCn = JSON.parse('{"2":{"string":"\u70B9\u6309\u201C\u4E0B\u4E00\u9875\u201D"},"3":{"string":"\u70B9\u6309\u201C\u8FD4\u56DE\u201D"},"4":{"string":"\u65E0\u6CD5\u5C06\u94FE\u63A5\u590D\u5236\u5230\u526A\u8D34\u677F :("},"5":{"string":"\u5DF2\u590D\u5236\u94FE\u63A5\uFF01"},"6":{"string":"\u7535\u5B50\u90AE\u4EF6"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"\u83B7\u53D6\u94FE\u63A5"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"\u77ED\u4FE1"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"\u8981\u67E5\u770B\u8FD9\u79CD\u4F53\u9A8C\uFF0C\u8BF7\u540C\u65F6\u52A0\u5927\u7A97\u53E3\u9AD8\u5EA6\u548C\u5BBD\u5EA6"},"19":{"string":"\u60A8\u5FC5\u987B\u542F\u7528 amp-story \u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u624D\u80FD\u67E5\u770B\u6B64\u5185\u5BB9\u3002"},"20":{"string":"\u6700\u597D\u4EE5\u7EB5\u5411\u6A21\u5F0F\u67E5\u770B\u6B64\u9875\u9762"},"21":{"string":"\u62B1\u6B49\uFF0C\u60A8\u7684\u6D4F\u89C8\u5668\u597D\u50CF\u4E0D\u652F\u6301\u8FD9\u79CD\u4F53\u9A8C"},"22":{"string":"\u63A5\u53D7"},"23":{"string":"\u62D2\u7EDD"},"25":{"string":"\u5728\u539F\u59CB\u7F51\u57DF\u4E2D\u67E5\u770B\uFF1A"},"26":{"string":"\u5173\u4E8E AMP \u7ED3\u679C\u7684\u66F4\u591A\u5185\u5BB9"},"27":{"string":"\u4ECD\u7136\u7EE7\u7EED"},"31":{"string":"\u58F0\u97F3\u5DF2\u5173\u95ED"},"32":{"string":"\u58F0\u97F3\u5DF2\u5F00\u542F"},"33":{"string":"\u6B64\u9875\u6CA1\u6709\u58F0\u97F3"},"34":{"string":"\u64AD\u653E\u89C6\u9891"},"35":{"string":"\u5411\u4E0A\u6ED1\u52A8"},"36":{"string":"\u5C55\u5F00 Twitter \u5FAE\u535A"},"37":{"string":"\u8981\u67E5\u770B\u8FD9\u79CD\u4F53\u9A8C\uFF0C\u8BF7\u52A0\u5927\u7A97\u53E3\u9AD8\u5EA6"},"38":{"string":"\u8981\u67E5\u770B\u8FD9\u79CD\u4F53\u9A8C\uFF0C\u8BF7\u52A0\u5927\u7A97\u53E3\u5BBD\u5EA6"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var LocalizedStringsZhTw = JSON.parse('{"2":{"string":"\u8F15\u89F8 [\u4E0B\u4E00\u9801]"},"3":{"string":"\u8F15\u89F8 [\u4E0A\u4E00\u9801]"},"4":{"string":"\u7121\u6CD5\u5C07\u9023\u7D50\u8907\u88FD\u5230\u526A\u8CBC\u7C3F :("},"5":{"string":"\u5DF2\u8907\u88FD\u9023\u7D50\uFF01"},"6":{"string":"\u96FB\u5B50\u90F5\u4EF6"},"7":{"string":"Facebook"},"8":{"string":"Google+"},"9":{"string":"\u53D6\u5F97\u9023\u7D50"},"10":{"string":"LinkedIn"},"11":{"string":"Pinterest"},"12":{"string":"\u7C21\u8A0A"},"14":{"string":"Tumblr"},"15":{"string":"Twitter"},"16":{"string":"WhatsApp"},"18":{"string":"\u5982\u8981\u67E5\u770B\u6545\u4E8B\uFF0C\u8ACB\u5C07\u8996\u7A97\u8ABF\u9AD8\u4E26\u8ABF\u5BEC"},"19":{"string":"\u4F60\u5FC5\u9808\u555F\u7528 AMP \u6545\u4E8B\u5BE6\u9A57\u624D\u80FD\u67E5\u770B\u6B64\u5167\u5BB9\u3002"},"20":{"string":"\u4F60\u53EA\u80FD\u7E31\u5411\u67E5\u770B\u9019\u500B\u9801\u9762"},"21":{"string":"\u5F88\u62B1\u6B49\uFF0C\u4F60\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u9019\u9805\u670D\u52D9"},"22":{"string":"\u63A5\u53D7"},"23":{"string":"\u62D2\u7D55"},"25":{"string":"\u5728\u539F\u59CB\u7DB2\u57DF\u4E2D\u67E5\u770B\uFF1A"},"26":{"string":"\u66F4\u591A\u8207 AMP \u7D50\u679C\u76F8\u95DC\u7684\u8CC7\u8A0A"},"27":{"string":"\u4ECD\u8981\u7E7C\u7E8C"},"31":{"string":"\u5DF2\u95DC\u9589\u97F3\u6548"},"32":{"string":"\u5DF2\u958B\u555F\u97F3\u6548"},"33":{"string":"\u9019\u500B\u9801\u9762\u6C92\u6709\u97F3\u6548"},"34":{"string":"\u64AD\u653E\u5F71\u7247"},"35":{"string":"\u5411\u4E0A\u6ED1\u52D5"},"36":{"string":"\u5C55\u958B Tweet"},"37":{"string":"\u5982\u8981\u67E5\u770B\u6545\u4E8B\uFF0C\u8ACB\u5C07\u8996\u7A97\u9AD8\u5EA6\u8ABF\u9AD8"},"38":{"string":"\u5982\u8981\u67E5\u770B\u6545\u4E8B\uFF0C\u8ACB\u5C07\u8996\u7A97\u5BEC\u5EA6\u8ABF\u5BEC"},"63":{"string":"Line"}}', function(key, val) {
    if (typeof val === "object")
      Object.freeze(val);
    return val;
  });
  var DESKTOP_WIDTH_THRESHOLD = 1024;
  var DESKTOP_HEIGHT_THRESHOLD = 550;
  var MIN_SWIPE_FOR_HINT_OVERLAY_PX = 50;
  var Attributes = {
    AD_SHOWING: "ad-showing",
    ADVANCE_TO: "i-amphtml-advance-to",
    AUTO_ADVANCE_AFTER: "auto-advance-after",
    AUTO_ADVANCE_TO: "auto-advance-to",
    DESKTOP_POSITION: "i-amphtml-desktop-position",
    MUTED: "muted",
    ORIENTATION: "orientation",
    PUBLIC_ADVANCE_TO: "advance-to",
    RETURN_TO: "i-amphtml-return-to",
    STANDALONE: "standalone",
    SUPPORTS_LANDSCAPE: "supports-landscape",
    VISITED: "i-amphtml-visited"
  };
  var INITIAL_CONTENT_LOAD_TIMEOUT_MS = 8e3;
  var MINIMUM_AD_MEDIA_ELEMENTS = 2;
  var STORY_LOADED_CLASS_NAME = "i-amphtml-story-loaded";
  var OPACITY_MASK_CLASS_NAME = "i-amphtml-story-opacity-mask";
  var SIDEBAR_CLASS_NAME = "i-amphtml-story-sidebar";
  var MAX_MEDIA_ELEMENT_COUNTS = (_MAX_MEDIA_ELEMENT_CO = {}, _MAX_MEDIA_ELEMENT_CO[MediaType.AUDIO] = 4, _MAX_MEDIA_ELEMENT_CO[MediaType.VIDEO] = 8, _MAX_MEDIA_ELEMENT_CO);
  var TAG12 = "amp-story";
  var DEFAULT_THEME_COLOR = "#202125";
  var SIDEBAR_OBSERVER_OPTIONS = {
    attributes: true,
    attributeFilter: ["open"]
  };
  var AmpStory = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits12(AmpStory2, _AMP$BaseElement);
    var _super = _createSuper12(AmpStory2);
    function AmpStory2(element) {
      var _this;
      _classCallCheck46(this, AmpStory2);
      _this = _super.call(this, element);
      _this.storeService_ = getStoreService(_this.win);
      if (isRTL(_this.win.document)) {
        _this.storeService_.dispatch(Action.TOGGLE_RTL, true);
      }
      _this.analyticsService_ = getAnalyticsService(_this.win, _this.element);
      _this.advancement_ = AdvancementConfig.forElement(_this.win, _this.element);
      _this.advancement_.start();
      _this.vsync_ = _this.getVsync();
      _this.shareMenu_ = new ShareMenu(_this.win, _this.element);
      _this.systemLayer_ = new SystemLayer(_this.win, _this.element);
      new AmpStoryEmbeddedComponent(_this.win, _this.element);
      _this.unsupportedBrowserLayer_ = new UnsupportedBrowserLayer(_this.win);
      new ViewportWarningLayer(_this.win, _this.element, DESKTOP_WIDTH_THRESHOLD, DESKTOP_HEIGHT_THRESHOLD);
      _this.pages_ = [];
      _this.adPages_ = [];
      _this.variableService_ = getVariableService(_this.win);
      _this.activePage_ = null;
      _this.desktopMedia_ = _this.win.matchMedia("(min-width: " + DESKTOP_WIDTH_THRESHOLD + "px) and " + ("(min-height: " + DESKTOP_HEIGHT_THRESHOLD + "px)"));
      _this.canRotateToDesktopMedia_ = _this.win.matchMedia("(min-width: " + DESKTOP_HEIGHT_THRESHOLD + "px) and " + ("(min-height: " + DESKTOP_WIDTH_THRESHOLD + "px)"));
      _this.landscapeOrientationMedia_ = _this.win.matchMedia("(orientation: landscape)");
      _this.backgroundAudioEl_ = null;
      _this.ampStoryHint_ = new AmpStoryHint(_this.win, _this.element);
      _this.mediaPool_ = MediaPool.for(_assertThisInitialized12(_this));
      _this.areAccessAuthorizationsCompleted_ = false;
      _this.navigateToPageAfterAccess_ = null;
      _this.timer_ = Services.timerFor(_this.win);
      _this.platform_ = Services.platformFor(_this.win);
      _this.viewer_ = null;
      _this.viewerMessagingHandler_ = null;
      _this.localizationService_ = null;
      _this.pausedStateToRestore_ = null;
      _this.sidebar_ = null;
      _this.sidebarObserver_ = null;
      _this.maskElement_ = null;
      _this.liveStoryManager_ = null;
      return _this;
    }
    _createClass45(AmpStory2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.viewer_ = Services.viewerForDoc(this.element);
        this.viewerMessagingHandler_ = this.viewer_.isEmbedded() ? new AmpStoryViewerMessagingHandler(this.win, this.viewer_) : null;
        this.localizationService_ = getLocalizationService(this.element);
        this.localizationService_.registerLocalizedStringBundle("default", LocalizedStringsDefault).registerLocalizedStringBundle("ar", LocalizedStringsAr).registerLocalizedStringBundle("de", LocalizedStringsDe).registerLocalizedStringBundle("en", LocalizedStringsEn).registerLocalizedStringBundle("en-GB", LocalizedStringsEnGb).registerLocalizedStringBundle("es", LocalizedStringsEs).registerLocalizedStringBundle("es-419", LocalizedStringsEs419).registerLocalizedStringBundle("fr", LocalizedStringsFr).registerLocalizedStringBundle("hi", LocalizedStringsHi).registerLocalizedStringBundle("id", LocalizedStringsId).registerLocalizedStringBundle("it", LocalizedStringsIt).registerLocalizedStringBundle("ja", LocalizedStringsJa).registerLocalizedStringBundle("ko", LocalizedStringsKo).registerLocalizedStringBundle("nl", LocalizedStringsNl).registerLocalizedStringBundle("no", LocalizedStringsNo).registerLocalizedStringBundle("pt-PT", LocalizedStringsPtPt).registerLocalizedStringBundle("pt-BR", LocalizedStringsPtBr).registerLocalizedStringBundle("ru", LocalizedStringsRu).registerLocalizedStringBundle("tr", LocalizedStringsTr).registerLocalizedStringBundle("vi", LocalizedStringsVi).registerLocalizedStringBundle("zh-CN", LocalizedStringsZhCn).registerLocalizedStringBundle("zh-TW", LocalizedStringsZhTw);
        var enXaPseudoLocaleBundle = createPseudoLocale(LocalizedStringsEn, function(s) {
          return "[" + s + " one two]";
        });
        this.localizationService_.registerLocalizedStringBundle("en-xa", enXaPseudoLocaleBundle);
        if (this.isStandalone_()) {
          this.initializeStandaloneStory_();
        }
        this.mutateElement(function() {
        });
        var pageId = this.getInitialPageId_();
        if (pageId) {
          var page = this.element.querySelector("amp-story-page#" + escapeCssSelectorIdent(pageId));
          page.setAttribute("active", "");
        }
        this.initializeStyles_();
        this.initializeListeners_();
        this.initializeListenersForDev_();
        this.initializePageIds_();
        this.initializeStoryPlayer_();
        this.storeService_.dispatch(Action.TOGGLE_UI, this.getUIType_());
        if (!this.platform_.isBot()) {
          this.element.removeAttribute("title");
        }
        var textNodes = childNodes(this.element, function(node) {
          return node.nodeType === Node.TEXT_NODE;
        });
        textNodes.forEach(function(node) {
          _this2.element.removeChild(node);
        });
        if (isExperimentOn(this.win, "amp-story-branching")) {
          this.registerAction("goToPage", function(invocation) {
            var args = invocation.args;
            if (!args) {
              return;
            }
            _this2.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.GO_TO_PAGE);
            var promise = _this2.storeService_.get(StateProperty.SIDEBAR_STATE) ? Services.historyForDoc(_this2.getAmpDoc()).goBack() : resolvedPromise();
            promise.then(function() {
              return _this2.switchTo_(args["id"], NavigationDirection.NEXT);
            });
          });
        }
        if (this.maybeLoadStoryDevTools_()) {
          return;
        }
      }
    }, {
      key: "pause_",
      value: function pause_() {
        if (this.pausedStateToRestore_ === null) {
          this.pausedStateToRestore_ = !!this.storeService_.get(StateProperty.PAUSED_STATE);
        }
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
        if (!this.storeService_.get(StateProperty.MUTED_STATE)) {
          this.pauseBackgroundAudio_();
        }
        if (this.getAmpDoc().getVisibilityState() === VisibilityState.INACTIVE) {
          this.activePage_.setState(PageState.NOT_ACTIVE);
          this.activePage_.element.setAttribute("active", "");
        }
      }
    }, {
      key: "resume_",
      value: function resume_() {
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, this.pausedStateToRestore_);
        this.pausedStateToRestore_ = null;
        if (!this.storeService_.get(StateProperty.MUTED_STATE)) {
          this.playBackgroundAudio_();
        }
      }
    }, {
      key: "initializeStandaloneStory_",
      value: function initializeStandaloneStory_() {
        var html2 = this.win.document.documentElement;
        html2.classList.add("i-amphtml-story-standalone");
        this.lockBody_();
        this.onResize();
      }
    }, {
      key: "initializeStyles_",
      value: function initializeStyles_() {
        var mediaQueryEls = this.element.querySelectorAll("media-query");
        if (mediaQueryEls.length) {
          this.initializeMediaQueries_(mediaQueryEls);
        }
        var styleEl = this.win.document.querySelector("style[amp-custom]");
        if (styleEl) {
          this.rewriteStyles_(styleEl);
        }
      }
    }, {
      key: "initializeMediaQueries_",
      value: function initializeMediaQueries_(mediaQueryEls) {
        var _this3 = this;
        var service = getMediaQueryService(this.win);
        var onMediaQueryMatch = function onMediaQueryMatch2(matches2, className) {
          _this3.mutateElement(function() {
            _this3.element.classList.toggle(className, matches2);
          });
        };
        toArray(mediaQueryEls).forEach(function(el) {
          var className = el.getAttribute("class-name");
          var media = el.getAttribute("media");
          if (className && media) {
            service.onMediaQueryMatch(media, function(matches2) {
              return onMediaQueryMatch(matches2, className);
            });
          }
        });
      }
    }, {
      key: "initializePageIds_",
      value: function initializePageIds_() {
        var pageEls = this.element.querySelectorAll("amp-story-page");
        var pageIds = toArray(pageEls).map(function(el) {
          return el.id || "default-page";
        });
        var idsMap = map();
        for (var i = 0; i < pageIds.length; i++) {
          if (idsMap[pageIds[i]] === void 0) {
            idsMap[pageIds[i]] = 0;
            continue;
          }
          user().error(TAG12, "Duplicate amp-story-page ID " + pageIds[i]);
          var newId = pageIds[i] + "__" + ++idsMap[pageIds[i]];
          pageEls[i].id = newId;
          pageIds[i] = newId;
        }
        this.storeService_.dispatch(Action.SET_PAGE_IDS, pageIds);
      }
    }, {
      key: "rewriteStyles_",
      value: function rewriteStyles_(styleEl) {
        this.mutateElement(function() {
          styleEl.textContent = styleEl.textContent.replace(/(-?[\d.]+)vh/gim, "calc($1 * var(--story-page-vh))").replace(/(-?[\d.]+)vw/gim, "calc($1 * var(--story-page-vw))").replace(/(-?[\d.]+)vmin/gim, "calc($1 * var(--story-page-vmin))").replace(/(-?[\d.]+)vmax/gim, "calc($1 * var(--story-page-vmax))");
        });
      }
    }, {
      key: "setThemeColor_",
      value: function setThemeColor_() {
        if (this.win.document.querySelector("meta[name=theme-color]")) {
          return;
        }
        var meta = this.win.document.createElement("meta");
        var ampStoryPageEl = this.element.querySelector("amp-story-page");
        meta.name = "theme-color";
        meta.content = computedStyle(this.win, this.element).getPropertyValue("--primary-color") || computedStyle(this.win, dev().assertElement(ampStoryPageEl)).getPropertyValue("background-color") || DEFAULT_THEME_COLOR;
        this.win.document.head.appendChild(meta);
      }
    }, {
      key: "buildSystemLayer_",
      value: function buildSystemLayer_(initialPageId) {
        this.updateAudioIcon_();
        this.updatePausedIcon_();
        this.element.appendChild(this.systemLayer_.build(initialPageId));
      }
    }, {
      key: "initializeListeners_",
      value: function initializeListeners_() {
        var _this4 = this;
        this.element.addEventListener(EventType.NEXT_PAGE, function() {
          _this4.next_();
        });
        this.element.addEventListener(EventType.PREVIOUS_PAGE, function() {
          _this4.previous_();
        });
        this.storeService_.subscribe(StateProperty.MUTED_STATE, function(isMuted) {
          _this4.onMutedStateUpdate_(isMuted);
          _this4.variableService_.onVariableUpdate(AnalyticsVariable.STORY_IS_MUTED, isMuted);
        }, true);
        this.storeService_.subscribe(StateProperty.MUTED_STATE, function(isMuted) {
          _this4.analyticsService_.triggerEvent(isMuted ? StoryAnalyticsEvent.STORY_MUTED : StoryAnalyticsEvent.STORY_UNMUTED);
        }, false);
        this.storeService_.subscribe(StateProperty.SUPPORTED_BROWSER_STATE, function(isBrowserSupported) {
          _this4.onSupportedBrowserStateUpdate_(isBrowserSupported);
        });
        this.storeService_.subscribe(StateProperty.ADVANCEMENT_MODE, function(mode) {
          _this4.variableService_.onVariableUpdate(AnalyticsVariable.STORY_ADVANCEMENT_MODE, mode);
        });
        this.storeService_.subscribe(StateProperty.CAN_SHOW_AUDIO_UI, function(show) {
          _this4.element.classList.toggle("i-amphtml-story-no-audio-ui", !show);
        }, true);
        this.element.addEventListener(EventType.SWITCH_PAGE, function(e) {
          _this4.switchTo_(getDetail(e)["targetPageId"], getDetail(e)["direction"]);
          _this4.ampStoryHint_.hideAllNavigationHint();
        });
        this.element.addEventListener(EventType.PAGE_PROGRESS, function(e) {
          var detail = getDetail(e);
          var pageId = detail["pageId"];
          var progress = detail["progress"];
          if (pageId !== _this4.activePage_.element.id) {
            return;
          }
          if (!_this4.activePage_.isAd()) {
            _this4.systemLayer_.updateProgress(pageId, progress);
          }
        });
        this.element.addEventListener(EventType.REPLAY, function() {
          _this4.replay_();
        });
        this.element.addEventListener(EventType.NO_NEXT_PAGE, function() {
          _this4.onNoNextPage_();
        });
        this.element.addEventListener(EventType.NO_PREVIOUS_PAGE, function() {
          _this4.onNoPreviousPage_();
        });
        this.advancement_.addOnTapNavigationListener(function(direction) {
          _this4.performTapNavigation_(direction);
        });
        this.element.addEventListener(EventType.DISPATCH_ACTION, function(e) {
          if (!getMode().test) {
            return;
          }
          var action = getDetail(e)["action"];
          var data = getDetail(e)["data"];
          _this4.storeService_.dispatch(action, data);
        });
        this.storeService_.subscribe(StateProperty.ACTIONS_ALLOWLIST, function(actionsAllowlist) {
          var actions3 = Services.actionServiceForDoc(_this4.element);
          actions3.setAllowlist(actionsAllowlist);
        }, true);
        this.storeService_.subscribe(StateProperty.AD_STATE, function(isAd) {
          _this4.onAdStateUpdate_(isAd);
        });
        if (isPageAttachmentUiV2ExperimentOn(this.win)) {
          this.storeService_.subscribe(StateProperty.PAGE_ATTACHMENT_STATE, function(isActive) {
            _this4.onAttachmentStateUpdate_(isActive);
          });
        }
        this.storeService_.subscribe(StateProperty.PAUSED_STATE, function(isPaused) {
          _this4.onPausedStateUpdate_(isPaused);
        });
        this.storeService_.subscribe(StateProperty.SIDEBAR_STATE, function(sidebarState) {
          _this4.onSidebarStateUpdate_(sidebarState);
        });
        this.storeService_.subscribe(StateProperty.UI_STATE, function(uiState) {
          _this4.onUIStateUpdate_(uiState);
        }, true);
        this.win.document.addEventListener("keydown", function(e) {
          _this4.onKeyDown_(e);
        }, true);
        this.win.document.addEventListener("contextmenu", function(e) {
          var uiState = _this4.storeService_.get(StateProperty.UI_STATE);
          if (uiState === UIType.MOBILE) {
            if (!_this4.allowContextMenuOnMobile_(e.target)) {
              e.preventDefault();
            }
            e.stopPropagation();
          }
        });
        this.getAmpDoc().onVisibilityChanged(function() {
          return _this4.onVisibilityChanged_();
        });
        this.win.addEventListener("hashchange", function() {
          var maybePageId = parseQueryString(_this4.win.location.hash)["page"];
          if (!maybePageId || !_this4.isActualPage_(maybePageId)) {
            return;
          }
          _this4.switchTo_(maybePageId, NavigationDirection.NEXT);
          var href = _this4.win.location.href.replace(new RegExp("page=" + maybePageId + "&?"), "");
          if (endsWith(href, "#")) {
            href = href.slice(0, -1);
          }
          _this4.win.history.replaceState(_this4.win.history && getState(_this4.win.history) || {}, _this4.win.document.title, href);
        });
        var bodyElObserver = new this.win.MutationObserver(function(mutations) {
          return _this4.onBodyElMutation_(mutations);
        });
        bodyElObserver.observe(this.win.document.body, {
          attributes: true,
          attributeFilter: ["class"]
        });
        this.getViewport().onResize(debounce(this.win, function() {
          return _this4.onResize();
        }, 300));
        this.installGestureRecognizers_();
        this.viewer_.onMessage("selectPage", function(data) {
          return _this4.onSelectPage_(data);
        });
        this.viewer_.onMessage("rewind", function() {
          return _this4.onRewind_();
        });
        if (this.viewerMessagingHandler_) {
          this.viewerMessagingHandler_.startListening();
        }
      }
    }, {
      key: "onBodyElMutation_",
      value: function onBodyElMutation_(mutations) {
        var _this5 = this;
        mutations.forEach(function(mutation) {
          var bodyEl = dev().assertElement(mutation.target);
          _this5.storeService_.dispatch(Action.TOGGLE_KEYBOARD_ACTIVE_STATE, bodyEl.classList.contains("amp-mode-keyboard-active"));
        });
      }
    }, {
      key: "installGestureRecognizers_",
      value: function installGestureRecognizers_() {
        var _this6 = this;
        if (this.viewer_.hasCapability("swipe")) {
          return;
        }
        var element = this.element;
        var gestures = Gestures.get(element, true);
        gestures.onGesture(SwipeXYRecognizer, function(gesture) {
          var _gesture$data = gesture.data, deltaX = _gesture$data.deltaX, deltaY = _gesture$data.deltaY;
          var embedComponent = _this6.storeService_.get(StateProperty.INTERACTIVE_COMPONENT_STATE);
          if (embedComponent.state !== EmbeddedComponentState.HIDDEN || _this6.storeService_.get(StateProperty.ACCESS_STATE) || _this6.storeService_.get(StateProperty.SIDEBAR_STATE) || !_this6.storeService_.get(StateProperty.SYSTEM_UI_IS_VISIBLE_STATE) || !_this6.storeService_.get(StateProperty.CAN_SHOW_NAVIGATION_OVERLAY_HINT)) {
            if (gesture.event && gesture.event.cancelable !== false) {
              gesture.event.preventDefault();
            }
            return;
          }
          if (gesture.event && gesture.event.defaultPrevented || !_this6.isSwipeLargeEnoughForHint_(deltaX, deltaY)) {
            return;
          }
          _this6.ampStoryHint_.showNavigationOverlay();
        });
      }
    }, {
      key: "isSwipeLargeEnoughForHint_",
      value: function isSwipeLargeEnoughForHint_(deltaX, deltaY) {
        var sideSwipe = Math.abs(deltaX) >= MIN_SWIPE_FOR_HINT_OVERLAY_PX;
        var upSwipe = -1 * deltaY >= MIN_SWIPE_FOR_HINT_OVERLAY_PX;
        return sideSwipe || upSwipe;
      }
    }, {
      key: "initializeListenersForDev_",
      value: function initializeListenersForDev_() {
        var _this7 = this;
        if (!getMode().development) {
          return;
        }
        this.element.addEventListener(EventType.DEV_LOG_ENTRIES_AVAILABLE, function(e) {
          _this7.systemLayer_.logAll(getDetail(e));
        });
      }
    }, {
      key: "lockBody_",
      value: function lockBody_() {
        var document2 = this.win.document;
        setImportantStyles(document2.documentElement, {
          "overflow": "hidden"
        });
        setImportantStyles(document2.body, {
          "overflow": "hidden"
        });
        this.getViewport().resetTouchZoom();
        this.getViewport().disableTouchZoom();
        this.maybeLockScreenOrientation_();
      }
    }, {
      key: "maybeLockScreenOrientation_",
      value: function maybeLockScreenOrientation_() {
        var screen = this.win.screen;
        if (!screen || !this.canRotateToDesktopMedia_.matches) {
          return;
        }
        var lockOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || function(unusedOrientation) {
        };
        try {
          lockOrientation("portrait");
        } catch (e) {
          dev().warn(TAG12, "Failed to lock screen orientation:", e.message);
        }
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        if (!AmpStory2.isBrowserSupported(this.win) && !this.platform_.isBot()) {
          this.storeService_.dispatch(Action.TOGGLE_SUPPORTED_BROWSER, false);
          return resolvedPromise();
        }
        return this.layoutStory_();
      }
    }, {
      key: "layoutStory_",
      value: function layoutStory_() {
        var _this8 = this;
        var initialPageId = this.getInitialPageId_();
        this.buildSystemLayer_(initialPageId);
        this.initializeSidebar_();
        this.setThemeColor_();
        var storyLayoutPromise = Promise.all([
          this.getAmpDoc().whenFirstVisible(),
          this.initializePages_()
        ]).then(function() {
          _this8.handleConsentExtension_();
          _this8.initializeStoryAccess_();
          _this8.pages_.forEach(function(page, index) {
            page.setState(PageState.NOT_ACTIVE);
            _this8.upgradeCtaAnchorTagsForTracking_(page, index);
          });
          _this8.initializeStoryNavigationPath_();
          if (_this8.storeService_.get(StateProperty.CAN_SHOW_PAGINATION_BUTTONS)) {
            new PaginationButtons(_this8);
          }
        }).then(function() {
          return _this8.switchTo_(_this8.getInitialPageId_(), NavigationDirection.NEXT);
        }).then(function() {
          var shouldReOpenAttachmentForPageId = getHistoryState(_this8.win, HistoryState.ATTACHMENT_PAGE_ID);
          if (shouldReOpenAttachmentForPageId === _this8.activePage_.element.id) {
            _this8.activePage_.openAttachment(false);
          }
          _this8.shareMenu_.build();
          var infoDialog = shouldShowStoryUrlInfo(devAssert(_this8.viewer_)) ? new InfoDialog(_this8.win, _this8.element) : null;
          if (infoDialog) {
            infoDialog.build();
          }
        });
        storyLayoutPromise.then(function() {
          return _this8.whenInitialContentLoaded_(INITIAL_CONTENT_LOAD_TIMEOUT_MS);
        }).then(function() {
          _this8.markStoryAsLoaded_();
          _this8.initializeLiveStory_();
        });
        this.maybeLoadStoryEducation_();
        var initialPageEl = this.element.querySelector("amp-story-page#" + escapeCssSelectorIdent(initialPageId));
        if (!this.getAmpDoc().hasBeenVisible()) {
          return whenUpgradedToCustomElement(initialPageEl).then(function() {
            return initialPageEl.build();
          });
        }
        return storyLayoutPromise;
      }
    }, {
      key: "initializeLiveStory_",
      value: function initializeLiveStory_() {
        var _this9 = this;
        if (this.element.hasAttribute("live-story")) {
          this.liveStoryManager_ = new LiveStoryManager(this);
          this.liveStoryManager_.build();
          this.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, [{
            tagOrTarget: "AMP-LIVE-LIST",
            method: "update"
          }]);
          this.element.addEventListener(AmpEvents.DOM_UPDATE, function() {
            _this9.liveStoryManager_.update();
            _this9.initializePages_().then(function() {
              _this9.preloadPagesByDistance_();
              if (_this9.storeService_.get(StateProperty.UI_STATE) === UIType.DESKTOP_PANELS) {
                _this9.setDesktopPositionAttributes_(_this9.activePage_);
              }
            });
          });
        }
      }
    }, {
      key: "getInitialPageId_",
      value: function getInitialPageId_() {
        var maybePageId = parseQueryString(this.win.location.hash)["page"];
        if (maybePageId && this.isActualPage_(maybePageId)) {
          return maybePageId;
        }
        var pages = getHistoryState(this.win, HistoryState.NAVIGATION_PATH) || [];
        var historyPage = lastItem(pages);
        if (historyPage && this.isActualPage_(historyPage)) {
          return historyPage;
        }
        var firstPageEl = this.element.querySelector("amp-story-page");
        return firstPageEl ? firstPageEl.id : null;
      }
    }, {
      key: "isActualPage_",
      value: function isActualPage_(pageId) {
        if (this.pages_.length > 0) {
          return this.pages_.some(function(page) {
            return page.element.id === pageId;
          });
        }
        return !!this.element.querySelector("#" + escapeCssSelectorIdent(pageId));
      }
    }, {
      key: "whenInitialContentLoaded_",
      value: function whenInitialContentLoaded_(timeoutMs) {
        if (timeoutMs === void 0) {
          timeoutMs = 0;
        }
        var pagesToWaitFor = this.storeService_.get(StateProperty.UI_STATE) === UIType.DESKTOP_PANELS ? [this.pages_[0], this.pages_[1]] : [this.pages_[0]];
        var storyLoadPromise = Promise.all(pagesToWaitFor.filter(Boolean).map(function(page) {
          return page.element.signals().whenSignal(CommonSignals.LOAD_END);
        }));
        return this.timer_.timeoutPromise(timeoutMs, storyLoadPromise).catch(function() {
        });
      }
    }, {
      key: "markStoryAsLoaded_",
      value: function markStoryAsLoaded_() {
        var _this10 = this;
        dispatch(this.win, this.element, EventType.STORY_LOADED, void 0, {
          bubbles: true
        });
        this.viewerMessagingHandler_ && this.viewerMessagingHandler_.send("storyContentLoaded", dict({}));
        this.analyticsService_.triggerEvent(StoryAnalyticsEvent.STORY_CONTENT_LOADED);
        this.signals().signal(CommonSignals.INI_LOAD);
        this.mutateElement(function() {
          _this10.element.classList.add(STORY_LOADED_CLASS_NAME);
        });
      }
    }, {
      key: "handleConsentExtension_",
      value: function handleConsentExtension_() {
        var consentEl = this.element.querySelector("amp-consent");
        if (!consentEl) {
          return;
        }
        this.pauseStoryUntilConsentIsResolved_();
        this.validateConsent_(consentEl);
      }
    }, {
      key: "pauseStoryUntilConsentIsResolved_",
      value: function pauseStoryUntilConsentIsResolved_() {
        var _this11 = this;
        var policyId = this.getConsentPolicy() || "default";
        var consentPromise = getConsentPolicyState(this.element, policyId);
        if (!consentPromise) {
          return;
        }
        this.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
        consentPromise.then(function() {
          _this11.storeService_.dispatch(Action.TOGGLE_PAUSED, false);
        });
      }
    }, {
      key: "validateConsent_",
      value: function validateConsent_(consentEl) {
        if (!childElementByTag(consentEl, "amp-story-consent")) {
          user().error(TAG12, "amp-consent must have an amp-story-consent child");
        }
        var allowedTags = ["SCRIPT", "AMP-STORY-CONSENT"];
        var toRemoveChildren = childElements(consentEl, function(el) {
          return allowedTags.indexOf(el.tagName) === -1;
        });
        if (toRemoveChildren.length === 0) {
          return;
        }
        user().error(TAG12, "amp-consent only allows tags: %s", allowedTags);
        toRemoveChildren.forEach(function(el) {
          return consentEl.removeChild(el);
        });
      }
    }, {
      key: "initializeStoryAccess_",
      value: function initializeStoryAccess_() {
        var _this12 = this;
        Services.accessServiceForDocOrNull(this.element).then(function(accessService) {
          if (!accessService) {
            return;
          }
          _this12.areAccessAuthorizationsCompleted_ = accessService.areFirstAuthorizationsCompleted();
          accessService.onApplyAuthorizations(function() {
            return _this12.onAccessApplyAuthorizations_();
          });
          var firstPage = _this12.pages_[0].element;
          if (firstPage.hasAttribute("amp-access") || firstPage.hasAttribute("amp-access-hide")) {
            firstPage.removeAttribute("amp-access");
            firstPage.removeAttribute("amp-access-hide");
            user().error(TAG12, "First amp-story-page cannot have amp-access or amp-access-hide attributes");
          }
        });
      }
    }, {
      key: "onAccessApplyAuthorizations_",
      value: function onAccessApplyAuthorizations_() {
        this.areAccessAuthorizationsCompleted_ = true;
        var nextPage = this.navigateToPageAfterAccess_;
        if (nextPage && nextPage.element.hasAttribute("amp-access-hide")) {
          return;
        }
        if (nextPage) {
          this.navigateToPageAfterAccess_ = null;
          this.switchTo_(nextPage.element.id, NavigationDirection.NEXT);
        }
        this.storeService_.dispatch(Action.TOGGLE_ACCESS, false);
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.CONTAINER;
      }
    }, {
      key: "initializePages_",
      value: function initializePages_() {
        var _this13 = this;
        var pageImplPromises = Array.prototype.map.call(this.element.querySelectorAll("amp-story-page"), function(pageEl) {
          return pageEl.getImpl();
        });
        return Promise.all(pageImplPromises).then(function(pages) {
          _this13.pages_ = pages;
          if (isExperimentOn(_this13.win, "amp-story-branching")) {
            _this13.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, [{
              tagOrTarget: "AMP-STORY",
              method: "goToPage"
            }]);
          }
        });
      }
    }, {
      key: "next_",
      value: function next_(opt_isAutomaticAdvance) {
        var activePage = devAssert(this.activePage_, "No active page set when navigating to next page.");
        activePage.next(opt_isAutomaticAdvance);
      }
    }, {
      key: "initializeStoryPlayer_",
      value: function initializeStoryPlayer_() {
        if (this.viewer_.getParam("storyPlayer") !== "v0") {
          return;
        }
        Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), "amp-viewer-integration");
      }
    }, {
      key: "onNoNextPage_",
      value: function onNoNextPage_() {
        if (this.viewer_.hasCapability("swipe") && this.viewerMessagingHandler_) {
          var advancementMode = this.storeService_.get(StateProperty.ADVANCEMENT_MODE);
          this.viewerMessagingHandler_.send("selectDocument", dict({
            "next": true,
            "advancementMode": advancementMode
          }));
          return;
        }
      }
    }, {
      key: "previous_",
      value: function previous_() {
        var activePage = devAssert(this.activePage_, "No active page set when navigating to previous page.");
        activePage.previous();
      }
    }, {
      key: "onNoPreviousPage_",
      value: function onNoPreviousPage_() {
        if (this.viewer_.hasCapability("swipe") && this.viewerMessagingHandler_) {
          var advancementMode = this.storeService_.get(StateProperty.ADVANCEMENT_MODE);
          this.viewerMessagingHandler_.send("selectDocument", dict({
            "previous": true,
            "advancementMode": advancementMode
          }));
          return;
        }
        if (this.storeService_.get(StateProperty.CAN_SHOW_PREVIOUS_PAGE_HELP)) {
          this.ampStoryHint_.showFirstPageHintOverlay();
        }
      }
    }, {
      key: "performTapNavigation_",
      value: function performTapNavigation_(direction) {
        this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
        if (this.storeService_.get(StateProperty.UI_STATE) === UIType.DESKTOP_PANELS) {
          this.next_();
          return;
        }
        if (direction === TapNavigationDirection.NEXT) {
          this.next_();
        } else if (direction === TapNavigationDirection.PREVIOUS) {
          this.previous_();
        }
      }
    }, {
      key: "switchTo_",
      value: function switchTo_(targetPageId, direction) {
        var _this14 = this;
        var targetPage = this.getPageById(targetPageId);
        var pageIndex = this.getPageIndex(targetPage);
        if (this.activePage_ && this.activePage_.element.id === targetPageId) {
          return resolvedPromise();
        }
        if (targetPage.element.hasAttribute("amp-access") && !this.areAccessAuthorizationsCompleted_) {
          this.navigateToPageAfterAccess_ = targetPage;
          return resolvedPromise();
        }
        if (targetPage.element.hasAttribute("amp-access-hide")) {
          this.storeService_.dispatch(Action.TOGGLE_ACCESS, true);
          this.navigateToPageAfterAccess_ = targetPage;
          return resolvedPromise();
        }
        var oldPage = this.activePage_;
        this.activePage_ = targetPage;
        if (!targetPage.isAd()) {
          this.updateNavigationPath_(targetPageId, direction);
        }
        var steps = [
          function() {
            oldPage && oldPage.element.removeAttribute("active");
            if (_this14.storeService_.get(StateProperty.UI_STATE) === UIType.DESKTOP_PANELS) {
              _this14.setDesktopPositionAttributes_(targetPage);
            }
            if (!_this14.storeService_.get(StateProperty.PAUSED_STATE)) {
              targetPage.setState(PageState.PLAYING);
            } else {
              targetPage.element.setAttribute("active", "");
            }
            _this14.forceRepaintForSafari_();
          },
          function() {
            if (oldPage) {
              oldPage.setState(PageState.NOT_ACTIVE);
              _this14.getPageIndex(oldPage) < pageIndex ? setAttributeInMutate(oldPage, Attributes.VISITED) : removeAttributeInMutate(oldPage, Attributes.VISITED);
              if (oldPage.isAd()) {
                _this14.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.ADVANCE_TO_ADS);
              }
            }
            var storePageIndex = pageIndex;
            if (targetPage.isAd()) {
              _this14.storeService_.dispatch(Action.TOGGLE_AD, true);
              setAttributeInMutate(_this14, Attributes.AD_SHOWING);
              storePageIndex = _this14.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
            } else {
              _this14.storeService_.dispatch(Action.TOGGLE_AD, false);
              removeAttributeInMutate(_this14, Attributes.AD_SHOWING);
              if (!targetPage.isAutoAdvance()) {
                _this14.systemLayer_.updateProgress(targetPageId, _this14.advancement_.getProgress());
              }
            }
            _this14.storeService_.dispatch(Action.CHANGE_PAGE, {
              id: targetPageId,
              index: storePageIndex
            });
            if (!oldPage) {
              _this14.registerAndPreloadBackgroundAudio_();
            }
          },
          function() {
            _this14.preloadPagesByDistance_();
            _this14.triggerActiveEventForPage_();
            _this14.systemLayer_.resetDeveloperLogs();
            _this14.systemLayer_.setDeveloperLogContextString(_this14.activePage_.element.id);
          }
        ];
        return new Promise(function(resolve) {
          targetPage.beforeVisible().then(function() {
            var unqueueStepInRAF = function unqueueStepInRAF2() {
              steps.shift().call(_this14);
              if (!steps.length) {
                return resolve();
              }
              _this14.win.requestAnimationFrame(function() {
                return unqueueStepInRAF2();
              });
            };
            unqueueStepInRAF();
          });
        });
      }
    }, {
      key: "updateNavigationPath_",
      value: function updateNavigationPath_(targetPageId, direction) {
        var navigationPath = this.storeService_.get(StateProperty.NAVIGATION_PATH);
        if (direction === NavigationDirection.PREVIOUS) {
          navigationPath.pop();
        }
        if (direction === NavigationDirection.NEXT && navigationPath[navigationPath.length - 1] !== targetPageId) {
          navigationPath.push(targetPageId);
        }
        this.storeService_.dispatch(Action.SET_NAVIGATION_PATH, navigationPath);
        setHistoryState(this.win, HistoryState.NAVIGATION_PATH, navigationPath);
      }
    }, {
      key: "setDesktopPositionAttributes_",
      value: function setDesktopPositionAttributes_(targetPage) {
        var _this15 = this;
        if (!targetPage) {
          return;
        }
        var list = [{
          page: targetPage,
          position: 0
        }];
        var minusOneId = targetPage.getPreviousPageId();
        if (minusOneId) {
          var minusOnePage = this.getPageById(minusOneId);
          list.push({
            page: minusOnePage,
            position: -1
          });
          var minusTwoId = minusOnePage.getPreviousPageId();
          if (minusTwoId) {
            list.push({
              page: this.getPageById(minusTwoId),
              position: -2
            });
          }
        }
        var plusOneId = targetPage.getNextPageId();
        if (plusOneId) {
          var plusOnePage = this.getPageById(plusOneId);
          list.push({
            page: plusOnePage,
            position: 1
          });
          var plusTwoId = plusOnePage.getNextPageId();
          if (plusTwoId) {
            list.push({
              page: this.getPageById(plusTwoId),
              position: 2
            });
          }
        }
        var desktopPositionsToReset;
        this.measureMutateElement(function() {
          desktopPositionsToReset = scopedQuerySelectorAll(_this15.element, "amp-story-page[\n                      " + escapeCssSelectorIdent(Attributes.DESKTOP_POSITION) + "]");
        }, function() {
          Array.prototype.forEach.call(desktopPositionsToReset, function(el) {
            el.removeAttribute(Attributes.DESKTOP_POSITION);
          });
          list.forEach(function(entry) {
            var page = entry.page, position = entry.position;
            page.element.setAttribute(Attributes.DESKTOP_POSITION, position);
          });
        });
      }
    }, {
      key: "triggerActiveEventForPage_",
      value: function triggerActiveEventForPage_() {
        Services.actionServiceForDoc(this.element).trigger(this.activePage_.element, "active", null, ActionTrust.HIGH);
      }
    }, {
      key: "forceRepaintForSafari_",
      value: function forceRepaintForSafari_() {
        var _this16 = this;
        if (!this.platform_.isSafari() && !this.platform_.isIos()) {
          return;
        }
        if (this.storeService_.get(StateProperty.UI_STATE) === UIType.DESKTOP_PANELS) {
          return;
        }
        this.mutateElement(function() {
          toggle(_this16.element, false);
          var height = _this16.element.offsetHeight;
          if (height >= 0) {
            toggle(_this16.element, true);
          }
        });
      }
    }, {
      key: "onKeyDown_",
      value: function onKeyDown_(e) {
        this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.MANUAL_ADVANCE);
        var rtlState = this.storeService_.get(StateProperty.RTL_STATE);
        switch (e.key) {
          case Keys.LEFT_ARROW:
            rtlState ? this.next_() : this.previous_();
            break;
          case Keys.RIGHT_ARROW:
            rtlState ? this.previous_() : this.next_();
            break;
        }
      }
    }, {
      key: "onResize",
      value: function onResize() {
        var uiState = this.getUIType_();
        this.storeService_.dispatch(Action.TOGGLE_UI, uiState);
        var isLandscape = this.isLandscape_();
        var isLandscapeSupported = this.isLandscapeSupported_();
        this.setOrientationAttribute_(isLandscape, isLandscapeSupported);
        if (uiState !== UIType.MOBILE || isLandscapeSupported) {
          this.storeService_.dispatch(Action.TOGGLE_VIEWPORT_WARNING, false);
          return;
        }
        this.maybeTriggerViewportWarning_(isLandscape);
      }
    }, {
      key: "setOrientationAttribute_",
      value: function setOrientationAttribute_(isLandscape, isLandscapeSupported) {
        var _this17 = this;
        this.mutateElement(function() {
          _this17.element.setAttribute(Attributes.ORIENTATION, isLandscapeSupported && isLandscape ? "landscape" : "portrait");
        });
      }
    }, {
      key: "maybeTriggerViewportWarning_",
      value: function maybeTriggerViewportWarning_(isLandscape) {
        var _this18 = this;
        if (isLandscape === this.storeService_.get(StateProperty.VIEWPORT_WARNING_STATE)) {
          return;
        }
        this.mutateElement(function() {
          if (isLandscape) {
            _this18.pausedStateToRestore_ = !!_this18.storeService_.get(StateProperty.PAUSED_STATE);
            _this18.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
            _this18.storeService_.dispatch(Action.TOGGLE_VIEWPORT_WARNING, true);
          } else {
            _this18.storeService_.dispatch(Action.TOGGLE_PAUSED, _this18.pausedStateToRestore_);
            _this18.pausedStateToRestore_ = null;
            _this18.storeService_.dispatch(Action.TOGGLE_VIEWPORT_WARNING, false);
          }
        });
      }
    }, {
      key: "onVisibilityChanged_",
      value: function onVisibilityChanged_() {
        this.getAmpDoc().isVisible() ? this.resume_() : this.pause_();
      }
    }, {
      key: "onAdStateUpdate_",
      value: function onAdStateUpdate_(isAd) {
        if (this.storeService_.get(StateProperty.MUTED_STATE)) {
          return;
        }
        isAd ? this.pauseBackgroundAudio_() : this.playBackgroundAudio_();
      }
    }, {
      key: "onUIStateUpdate_",
      value: function onUIStateUpdate_(uiState) {
        var _this19 = this;
        switch (uiState) {
          case UIType.MOBILE:
            this.vsync_.mutate(function() {
              _this19.element.removeAttribute("desktop");
              _this19.element.classList.remove("i-amphtml-story-desktop-panels");
              _this19.element.classList.remove("i-amphtml-story-desktop-fullbleed");
            });
            break;
          case UIType.DESKTOP_PANELS:
            this.setDesktopPositionAttributes_(this.activePage_);
            this.vsync_.mutate(function() {
              _this19.element.setAttribute("desktop", "");
              _this19.element.classList.add("i-amphtml-story-desktop-panels");
              _this19.element.classList.remove("i-amphtml-story-desktop-fullbleed");
            });
            break;
          case UIType.DESKTOP_FULLBLEED:
            this.vsync_.mutate(function() {
              _this19.element.setAttribute("desktop", "");
              _this19.element.classList.add("i-amphtml-story-desktop-fullbleed");
              _this19.element.classList.remove("i-amphtml-story-desktop-panels");
            });
            break;
          case UIType.VERTICAL:
            var pageAttachments = scopedQuerySelectorAll(this.element, "amp-story-page amp-story-page-attachment");
            this.vsync_.mutate(function() {
              _this19.element.setAttribute("i-amphtml-vertical", "");
              setImportantStyles(_this19.win.document.body, {
                height: "auto"
              });
              _this19.element.removeAttribute("desktop");
              _this19.element.classList.remove("i-amphtml-story-desktop-fullbleed");
              _this19.element.classList.remove("i-amphtml-story-desktop-panels");
              for (var i = 0; i < pageAttachments.length; i++) {
                _this19.element.insertBefore(pageAttachments[i], pageAttachments[i].getAttribute("href") ? pageAttachments[i].parentElement.nextElementSibling : null);
              }
            });
            this.signals().whenSignal(CommonSignals.LOAD_END).then(function() {
              _this19.vsync_.mutate(function() {
                _this19.pages_.forEach(function(page) {
                  return page.element.setAttribute("active", "");
                });
              });
            });
            break;
        }
      }
    }, {
      key: "getUIType_",
      value: function getUIType_() {
        if (this.platform_.isBot()) {
          return UIType.VERTICAL;
        }
        if (!this.isDesktop_()) {
          return UIType.MOBILE;
        }
        if (this.isLandscapeSupported_()) {
          return UIType.DESKTOP_FULLBLEED;
        }
        return UIType.DESKTOP_PANELS;
      }
    }, {
      key: "isDesktop_",
      value: function isDesktop_() {
        return this.desktopMedia_.matches && !this.platform_.isBot();
      }
    }, {
      key: "isLandscape_",
      value: function isLandscape_() {
        return this.landscapeOrientationMedia_.matches;
      }
    }, {
      key: "isStandalone_",
      value: function isStandalone_() {
        return this.element.hasAttribute(Attributes.STANDALONE);
      }
    }, {
      key: "isLandscapeSupported_",
      value: function isLandscapeSupported_() {
        return this.element.hasAttribute(Attributes.SUPPORTS_LANDSCAPE);
      }
    }, {
      key: "onPausedStateUpdate_",
      value: function onPausedStateUpdate_(isPaused) {
        if (!this.activePage_) {
          return;
        }
        var pageState = isPaused ? PageState.PAUSED : PageState.PLAYING;
        this.activePage_.setState(pageState);
      }
    }, {
      key: "onSidebarStateUpdate_",
      value: function onSidebarStateUpdate_(sidebarState) {
        var _this20 = this;
        this.analyticsService_.triggerEvent(sidebarState ? StoryAnalyticsEvent.OPEN : StoryAnalyticsEvent.CLOSE, this.sidebar_);
        var actions3 = Services.actionServiceForDoc(this.element);
        if (this.win.MutationObserver) {
          if (!this.sidebarObserver_) {
            this.sidebarObserver_ = new this.win.MutationObserver(function() {
              _this20.storeService_.dispatch(Action.TOGGLE_SIDEBAR, _this20.sidebar_.hasAttribute("open"));
            });
          }
          if (this.sidebar_ && sidebarState) {
            this.sidebarObserver_.observe(this.sidebar_, SIDEBAR_OBSERVER_OPTIONS);
            this.openOpacityMask_();
            actions3.execute(this.sidebar_, "open", null, null, null, null, ActionTrust.HIGH);
          } else {
            this.closeOpacityMask_();
            this.sidebarObserver_.disconnect();
          }
        } else if (this.sidebar_ && sidebarState) {
          this.openOpacityMask_();
          actions3.execute(this.sidebar_, "open", null, null, null, null, ActionTrust.HIGH);
          this.storeService_.dispatch(Action.TOGGLE_SIDEBAR, false);
        }
      }
    }, {
      key: "initializeOpacityMask_",
      value: function initializeOpacityMask_() {
        var _this21 = this;
        if (!this.maskElement_) {
          var maskEl = this.win.document.createElement("div");
          maskEl.classList.add(OPACITY_MASK_CLASS_NAME);
          maskEl.addEventListener("click", function() {
            var actions3 = Services.actionServiceForDoc(_this21.element);
            if (_this21.sidebar_) {
              _this21.closeOpacityMask_();
              actions3.execute(_this21.sidebar_, "close", null, null, null, null, ActionTrust.HIGH);
            }
          });
          this.maskElement_ = maskEl;
          this.mutateElement(function() {
            _this21.element.appendChild(_this21.maskElement_);
            toggle(dev().assertElement(_this21.maskElement_), false);
          });
        }
      }
    }, {
      key: "openOpacityMask_",
      value: function openOpacityMask_() {
        var _this22 = this;
        this.mutateElement(function() {
          toggle(dev().assertElement(_this22.maskElement_), true);
        });
      }
    }, {
      key: "closeOpacityMask_",
      value: function closeOpacityMask_() {
        var _this23 = this;
        if (this.maskElement_) {
          this.mutateElement(function() {
            toggle(dev().assertElement(_this23.maskElement_), false);
          });
        }
      }
    }, {
      key: "onSupportedBrowserStateUpdate_",
      value: function onSupportedBrowserStateUpdate_(isBrowserSupported) {
        var _this24 = this;
        var fallbackEl = this.getFallback();
        if (isBrowserSupported) {
          if (fallbackEl) {
            dev().error(TAG12, "No handler to exit unsupported browser state on publisher provided fallback.");
          } else {
            this.layoutStory_().then(function() {
              _this24.storeService_.dispatch(Action.TOGGLE_PAUSED, _this24.pausedStateToRestore_);
              _this24.pausedStateToRestore_ = null;
              _this24.mutateElement(function() {
                _this24.unsupportedBrowserLayer_.removeLayer();
              });
            });
          }
        } else {
          this.pausedStateToRestore_ = !!this.storeService_.get(StateProperty.PAUSED_STATE);
          this.storeService_.dispatch(Action.TOGGLE_PAUSED, true);
          if (fallbackEl) {
            this.toggleFallback(true);
          } else {
            this.unsupportedBrowserLayer_.build();
            this.mutateElement(function() {
              _this24.element.appendChild(_this24.unsupportedBrowserLayer_.get());
            });
          }
        }
      }
    }, {
      key: "onAttachmentStateUpdate_",
      value: function onAttachmentStateUpdate_(isActive) {
        this.element.classList.toggle("i-amphtml-story-attachment-active", isActive);
      }
    }, {
      key: "getPagesByDistance_",
      value: function getPagesByDistance_() {
        var _this25 = this;
        var distanceMap = this.getPageDistanceMapHelper_(0, {}, this.activePage_.element.id);
        var pagesByDistance = [];
        Object.keys(distanceMap).forEach(function(pageId) {
          var distance = distanceMap[pageId];
          if (pageId === _this25.pages_[0].element.id && _this25.activePage_ === _this25.pages_[_this25.pages_.length - 1] && _this25.pages_.length > 1 && !_this25.viewer_.hasCapability("swipe")) {
            distance = 1;
          }
          if (!pagesByDistance[distance]) {
            pagesByDistance[distance] = [];
          }
          if (isExperimentOn(_this25.win, "amp-story-branching")) {
            var navigationPath = _this25.storeService_.get(StateProperty.NAVIGATION_PATH);
            var indexInStack = navigationPath.indexOf(_this25.activePage_.element.id);
            var maybePrev = navigationPath[indexInStack - 1];
            if (indexInStack > 0 && pageId === _this25.activePage_.element.id) {
              if (!pagesByDistance[1]) {
                pagesByDistance[1] = [];
              }
              pagesByDistance[1].push(maybePrev);
            }
            if (pageId !== maybePrev) {
              pagesByDistance[distance].push(pageId);
            }
          } else {
            pagesByDistance[distance].push(pageId);
          }
        });
        return pagesByDistance;
      }
    }, {
      key: "getPageDistanceMapHelper_",
      value: function getPageDistanceMapHelper_(distance, map2, pageId) {
        var _this26 = this;
        if (map2[pageId] !== void 0 && map2[pageId] <= distance) {
          return map2;
        }
        map2[pageId] = distance;
        var page = this.getPageById(pageId);
        page.getAdjacentPageIds().forEach(function(adjacentPageId) {
          if (map2[adjacentPageId] !== void 0 && map2[adjacentPageId] <= distance) {
            return;
          }
          map2 = _this26.getPageDistanceMapHelper_(distance + 1, map2, adjacentPageId);
        });
        return map2;
      }
    }, {
      key: "preloadPagesByDistance_",
      value: function preloadPagesByDistance_() {
        var _this27 = this;
        if (this.platform_.isBot()) {
          this.pages_.forEach(function(page) {
            page.setDistance(0);
          });
          return;
        }
        var pagesByDistance = this.getPagesByDistance_();
        this.mutateElement(function() {
          pagesByDistance.forEach(function(pageIds, distance) {
            pageIds.forEach(function(pageId) {
              var page = _this27.getPageById(pageId);
              page.setDistance(distance);
            });
          });
        });
      }
    }, {
      key: "registerAndPreloadBackgroundAudio_",
      value: function registerAndPreloadBackgroundAudio_() {
        var _this28 = this;
        var backgroundAudioEl = upgradeBackgroundAudio(this.element);
        if (!backgroundAudioEl) {
          return;
        }
        this.activePage_.element.signals().whenSignal(CommonSignals.LOAD_END).then(function() {
          backgroundAudioEl = backgroundAudioEl;
          _this28.mediaPool_.register(backgroundAudioEl);
          return _this28.mediaPool_.preload(backgroundAudioEl);
        }).then(function() {
          _this28.backgroundAudioEl_ = childElement(_this28.element, function(el) {
            return el.tagName.toLowerCase() === "audio";
          });
        });
      }
    }, {
      key: "maybeLoadStoryEducation_",
      value: function maybeLoadStoryEducation_() {
        var _this29 = this;
        if (!this.viewer_.hasCapability("education")) {
          return;
        }
        this.mutateElement(function() {
          _this29.element.appendChild(_this29.win.document.createElement("amp-story-education"));
        });
        Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), "amp-story-education");
      }
    }, {
      key: "getPageIndexById",
      value: function getPageIndexById(id) {
        var pageIndex = findIndex(this.pages_, function(page) {
          return page.element.id === id;
        });
        if (pageIndex < 0) {
          user().error(TAG12, 'Story refers to page "%s", but no such page exists.', id);
        }
        return pageIndex;
      }
    }, {
      key: "getPageById",
      value: function getPageById(id) {
        var pageIndex = this.getPageIndexById(id);
        return devAssert(this.pages_[pageIndex], "Page at index %s exists, but is missing from the array.", pageIndex);
      }
    }, {
      key: "getPageCount",
      value: function getPageCount() {
        return this.pages_.length - this.adPages_.length;
      }
    }, {
      key: "getPageIndex",
      value: function getPageIndex(desiredPage) {
        return findIndex(this.pages_, function(page) {
          return page === desiredPage;
        });
      }
    }, {
      key: "getPageContainingElement_",
      value: function getPageContainingElement_(element) {
        var startingElement = element;
        if (element.ownerDocument !== this.win.document) {
          startingElement = element.ownerDocument.defaultView.frameElement;
        }
        var pageIndex = findIndex(this.pages_, function(page) {
          var pageEl = closest(startingElement, function(el) {
            return el === page.element;
          });
          return !!pageEl;
        });
        return this.pages_[pageIndex] || null;
      }
    }, {
      key: "getElementDistance",
      value: function getElementDistance(element) {
        var page = this.getPageContainingElement_(element);
        if (!page) {
          return -1;
        }
        return page.getDistance();
      }
    }, {
      key: "getMaxMediaElementCounts",
      value: function getMaxMediaElementCounts() {
        var _ref;
        var audioMediaElementsCount = this.element.querySelectorAll("amp-audio, [background-audio]").length;
        var videoMediaElementsCount = this.element.querySelectorAll("amp-video").length;
        if (this.element.hasAttribute("background-audio")) {
          audioMediaElementsCount++;
        }
        return _ref = {}, _ref[MediaType.AUDIO] = Math.min(audioMediaElementsCount + MINIMUM_AD_MEDIA_ELEMENTS, MAX_MEDIA_ELEMENT_COUNTS[MediaType.AUDIO]), _ref[MediaType.VIDEO] = Math.min(videoMediaElementsCount + MINIMUM_AD_MEDIA_ELEMENTS, MAX_MEDIA_ELEMENT_COUNTS[MediaType.VIDEO]), _ref;
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this.element;
      }
    }, {
      key: "onMutedStateUpdate_",
      value: function onMutedStateUpdate_(isMuted) {
        isMuted ? this.mute_() : this.unmute_();
        isMuted ? this.element.setAttribute(Attributes.MUTED, "") : this.element.removeAttribute(Attributes.MUTED);
      }
    }, {
      key: "mute_",
      value: function mute_() {
        this.pauseBackgroundAudio_();
        if (this.activePage_) {
          this.activePage_.muteAllMedia();
        }
      }
    }, {
      key: "pauseBackgroundAudio_",
      value: function pauseBackgroundAudio_() {
        if (!this.backgroundAudioEl_) {
          return;
        }
        this.mediaPool_.pause(this.backgroundAudioEl_);
      }
    }, {
      key: "unmute_",
      value: function unmute_() {
        var _this30 = this;
        var unmuteAllMedia = function unmuteAllMedia2() {
          _this30.playBackgroundAudio_();
          if (_this30.activePage_) {
            _this30.activePage_.unmuteAllMedia();
          }
        };
        this.mediaPool_.blessAll().then(unmuteAllMedia, unmuteAllMedia);
      }
    }, {
      key: "playBackgroundAudio_",
      value: function playBackgroundAudio_() {
        if (!this.backgroundAudioEl_) {
          return;
        }
        this.mediaPool_.unmute(this.backgroundAudioEl_);
        this.mediaPool_.play(this.backgroundAudioEl_);
      }
    }, {
      key: "updateAudioIcon_",
      value: function updateAudioIcon_() {
        var containsMediaElementWithAudio = !!this.element.querySelector("amp-audio, amp-video:not([noaudio]), [background-audio]");
        var storyHasBackgroundAudio = this.element.hasAttribute("background-audio");
        this.storeService_.dispatch(Action.TOGGLE_STORY_HAS_AUDIO, containsMediaElementWithAudio || storyHasBackgroundAudio);
        this.storeService_.dispatch(Action.TOGGLE_STORY_HAS_BACKGROUND_AUDIO, storyHasBackgroundAudio);
      }
    }, {
      key: "updatePausedIcon_",
      value: function updatePausedIcon_() {
        var containsElementsWithPlayback = !!scopedQuerySelector(this.element, "amp-story-grid-layer amp-audio, amp-story-grid-layer amp-video, amp-story-page[background-audio], amp-story-page[auto-advance-after]");
        var storyHasBackgroundAudio = this.element.hasAttribute("background-audio");
        this.storeService_.dispatch(Action.TOGGLE_STORY_HAS_PLAYBACK_UI, containsElementsWithPlayback || storyHasBackgroundAudio);
      }
    }, {
      key: "onRewind_",
      value: function onRewind_() {
        var _this31 = this;
        this.signals().whenSignal(CommonSignals.LOAD_END).then(function() {
          return _this31.replay_();
        });
      }
    }, {
      key: "onSelectPage_",
      value: function onSelectPage_(data) {
        if (!data) {
          return;
        }
        this.storeService_.dispatch(Action.SET_ADVANCEMENT_MODE, AdvancementMode.VIEWER_SELECT_PAGE);
        if (data["next"]) {
          this.next_();
        } else if (data["previous"]) {
          this.previous_();
        } else if (data["delta"]) {
          this.switchDelta_(data["delta"]);
        } else if (data["id"]) {
          this.switchTo_(data["id"], this.getPageIndexById(data["id"]) > this.getPageIndex(this.activePage_) ? NavigationDirection.NEXT : NavigationDirection.PREVIOUS);
        }
      }
    }, {
      key: "switchDelta_",
      value: function switchDelta_(delta) {
        var currentPageIdx = this.storeService_.get(StateProperty.CURRENT_PAGE_INDEX);
        var newPageIdx = delta > 0 ? Math.min(this.pages_.length - 1, currentPageIdx + delta) : Math.max(0, currentPageIdx + delta);
        var targetPage = this.pages_[newPageIdx];
        if (!this.isActualPage_(targetPage && targetPage.element.id) || newPageIdx === currentPageIdx) {
          return;
        }
        var direction = newPageIdx > currentPageIdx ? NavigationDirection.NEXT : NavigationDirection.PREVIOUS;
        this.switchTo_(targetPage.element.id, direction);
      }
    }, {
      key: "initializeSidebar_",
      value: function initializeSidebar_() {
        var _this32 = this;
        this.sidebar_ = this.element.querySelector("amp-sidebar");
        if (!this.sidebar_) {
          return;
        }
        this.mutateElement(function() {
          _this32.sidebar_.classList.add(SIDEBAR_CLASS_NAME);
        });
        this.initializeOpacityMask_();
        this.storeService_.dispatch(Action.TOGGLE_HAS_SIDEBAR, !!this.sidebar_);
        var actions3 = [{
          tagOrTarget: "AMP-SIDEBAR",
          method: "open"
        }, {
          tagOrTarget: "AMP-SIDEBAR",
          method: "close"
        }, {
          tagOrTarget: "AMP-SIDEBAR",
          method: "toggle"
        }];
        this.storeService_.dispatch(Action.ADD_TO_ACTIONS_ALLOWLIST, actions3);
      }
    }, {
      key: "initializeStoryNavigationPath_",
      value: function initializeStoryNavigationPath_() {
        var _this33 = this;
        var navigationPath = getHistoryState(this.win, HistoryState.NAVIGATION_PATH);
        if (!navigationPath || !navigationPath.every(function(pageId) {
          return _this33.isActualPage_(pageId);
        })) {
          navigationPath = [];
        }
        this.storeService_.dispatch(Action.SET_NAVIGATION_PATH, navigationPath);
      }
    }, {
      key: "replay_",
      value: function replay_() {
        var _this34 = this;
        this.storeService_.dispatch(Action.SET_NAVIGATION_PATH, []);
        var switchPromise = this.switchTo_(dev().assertElement(this.pages_[0].element).id, NavigationDirection.NEXT);
        if (this.pages_.length === 1) {
          this.pages_[0].setState(PageState.NOT_ACTIVE);
          this.pages_[0].setState(PageState.PLAYING);
        }
        switchPromise.then(function() {
          _this34.pages_.forEach(function(page) {
            return removeAttributeInMutate(page, Attributes.VISITED);
          });
        });
      }
    }, {
      key: "upgradeCtaAnchorTagsForTracking_",
      value: function upgradeCtaAnchorTagsForTracking_(page, pageIndex) {
        this.mutateElement(function() {
          var pageId = page.element.id;
          var ctaAnchorEls = scopedQuerySelectorAll(page.element, "amp-story-cta-layer a");
          Array.prototype.forEach.call(ctaAnchorEls, function(ctaAnchorEl) {
            ctaAnchorEl.setAttribute("data-vars-story-page-id", pageId);
            ctaAnchorEl.setAttribute("data-vars-story-page-index", pageIndex);
          });
        });
      }
    }, {
      key: "addPage",
      value: function addPage(page) {
        this.pages_.push(page);
        if (page.isAd()) {
          this.adPages_.push(page);
        }
      }
    }, {
      key: "insertPage",
      value: function insertPage(pageBeforeId, pageToBeInsertedId) {
        var pageToBeInserted = this.getPageById(pageToBeInsertedId);
        var pageToBeInsertedEl = pageToBeInserted.element;
        if (pageToBeInserted.isAd() && !this.storeService_.get(StateProperty.CAN_INSERT_AUTOMATIC_AD)) {
          dev().expectedError(TAG12, "Inserting ads automatically is disallowed.");
          return false;
        }
        var pageBefore = this.getPageById(pageBeforeId);
        var pageBeforeEl = pageBefore.element;
        var nextPage = this.getNextPage(pageBefore);
        if (!nextPage) {
          return false;
        }
        var advanceAttr = isExperimentOn(this.win, "amp-story-branching") ? Attributes.PUBLIC_ADVANCE_TO : Attributes.ADVANCE_TO;
        pageBeforeEl.setAttribute(advanceAttr, pageToBeInsertedId);
        pageBeforeEl.setAttribute(Attributes.AUTO_ADVANCE_TO, pageToBeInsertedId);
        pageToBeInsertedEl.setAttribute(Attributes.RETURN_TO, pageBeforeId);
        var nextPageEl = nextPage.element;
        var nextPageId = nextPageEl.id;
        if (nextPageId !== pageToBeInsertedId) {
          pageToBeInsertedEl.setAttribute(advanceAttr, nextPageId);
          pageToBeInsertedEl.setAttribute(Attributes.AUTO_ADVANCE_TO, nextPageId);
          nextPageEl.setAttribute(Attributes.RETURN_TO, pageToBeInsertedId);
        }
        return true;
      }
    }, {
      key: "getNextPage",
      value: function getNextPage(page) {
        var nextPageId = page.getNextPageId(true);
        if (!nextPageId) {
          return null;
        }
        return this.getPageById(nextPageId);
      }
    }, {
      key: "maybeLoadStoryDevTools_",
      value: function maybeLoadStoryDevTools_() {
        if (!isModeDevelopment(this.win) || this.element.getAttribute("mode") === "inspect") {
          return false;
        }
        this.element.setAttribute("mode", "inspect");
        var devToolsEl = this.win.document.createElement("amp-story-dev-tools");
        this.win.document.body.appendChild(devToolsEl);
        this.element.setAttribute("hide", "");
        Services.extensionsFor(this.win).installExtensionForDoc(this.getAmpDoc(), "amp-story-dev-tools");
        return true;
      }
    }, {
      key: "allowContextMenuOnMobile_",
      value: function allowContextMenuOnMobile_(element) {
        return !!closest(element, function(e) {
          return matches(e, "a.i-amphtml-story-page-open-attachment[href]");
        }, this.element);
      }
    }], [{
      key: "prerenderAllowed",
      value: function prerenderAllowed() {
        return true;
      }
    }, {
      key: "isBrowserSupported",
      value: function isBrowserSupported(win) {
        return Boolean(win.CSS && win.CSS.supports && win.CSS.supports("display", "grid") && win.CSS.supports("color", "var(--test)"));
      }
    }]);
    return AmpStory2;
  }(AMP.BaseElement);
  AMP.extension("amp-story", "1.0", function(AMP2) {
    AMP2.registerElement("amp-story", AmpStory, CSS7);
    AMP2.registerElement("amp-story-access", AmpStoryAccess);
    AMP2.registerElement("amp-story-consent", AmpStoryConsent);
    AMP2.registerElement("amp-story-cta-layer", AmpStoryCtaLayer);
    AMP2.registerElement("amp-story-grid-layer", AmpStoryGridLayer);
    AMP2.registerElement("amp-story-page", AmpStoryPage);
    AMP2.registerElement("amp-story-page-attachment", AmpStoryPageAttachment);
    AMP2.registerElement("amp-story-page-outlink", AmpStoryPageAttachment);
    AMP2.registerServiceForDoc("amp-story-render", AmpStoryRenderService);
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
//# sourceMappingURL=amp-story-1.0.max.js.map
