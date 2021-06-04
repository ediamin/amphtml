(self.AMP=self.AMP||[]).push({n:"amp-recaptcha-input",ev:"0.1",l:true,v:"2106040012000",m:0,f:(function(AMP,_){

(() => {
  // third_party/amp-toolbox-cache-url/dist/amp-toolbox-cache-url.esm.js
  "use strict";
  var n = "ase art bmp blp cd5 cit cpt cr2 cut dds dib djvu egt exif gif gpl grf icns ico iff jng jpeg jpg jfif jp2 jps lbm max miff mng msp nitf ota pbm pc1 pc2 pc3 pcf pcx pdn pgm PI1 PI2 PI3 pict pct pnm pns ppm psb psd pdd psp px pxm pxr qfx raw rle sct sgi rgb int bw tga tiff tif vtf xbm xcf xpm 3dv amf ai awg cgm cdr cmx dxf e2d egt eps fs gbr odg svg stl vrml x3d sxd v2d vnd wmf emf art xar png webp jxr hdp wdp cur ecw iff lbm liff nrrd pam pcx pgf sgi rgb rgba bw int inta sid ras sun tga".split(" ");
  var p = {
    isPathNameAnImage: function isPathNameAnImage(b) {
      return n.some(function(a2) {
        return b.endsWith(a2) ? true : false;
      });
    }
  };
  var q = "### #gf $on $tf 0b 8m 8u 12u 15u 64c 075 75 085 85 91 091 096 96 abf acfm acs afm afn afs all amfm apf asf aspf atm auf b30 bco bdf bepf bez bfn bmap bmf bx bzr cbtf cct cef cff cfn cga ch4 cha chm chr chx claf collection compositefont dfont dus dzk eft eot etx euf f00 f06 f08 f09 f3f f10 f11 f12 f13 f16 fd fdb ff ffil flf fli fn3 fnb fnn fnt fnta fo1 fo2 fog fon font fonts fot frf frs ftm fxr fyi gdr gf gft glf glif glyphs gsf gxf hbf ice intellifont lepf lft lwfn mcf mcf mfd mfm mft mgf mmm mrf mtf mvec nlq ntf odttf ofm okf otf pcf pcf pfa pfb pfm pft phf pk pkt prs pss qbf qfn r8? scr sfd sff sfi sfl sfn sfo sfp sfs sif snf spd spritefont sui suit svg sxs t1c t2 tb1 tb2 tdf tfm tmf tpf ttc tte ttf type ufm ufo usl usp us? vf vf1 vf3 vfb vfm vfont vlw vmf vnf w30 wfn wnf woff woff2 xfc xfn xfr xft zfi zsu _v".split(" ");
  var u = {
    isPathNameAFont: function isPathNameAFont(b) {
      return q.some(function(a2) {
        return b.endsWith(a2) ? true : false;
      });
    }
  };
  var v = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function w(b, a2) {
    a2 = a2.split(":")[0];
    b = +b;
    if (!b)
      return false;
    switch (a2) {
      case "http":
      case "ws":
        return b !== 80;
      case "https":
      case "wss":
        return b !== 443;
      case "ftp":
        return b !== 21;
      case "gopher":
        return b !== 70;
      case "file":
        return false;
    }
    return b !== 0;
  }
  var x = Object.prototype.hasOwnProperty;
  var y = {
    stringify: function stringify(b, a2) {
      a2 = a2 || "";
      var c = [];
      typeof a2 !== "string" && (a2 = "?");
      for (var e in b) {
        x.call(b, e) && c.push(encodeURIComponent(e) + "=" + encodeURIComponent(b[e]));
      }
      return c.length ? a2 + c.join("&") : "";
    },
    parse: function parse(b) {
      for (var a2 = /([^=?&]+)=?([^&]*)/g, c = {}, e; e = a2.exec(b); ) {
        var d = decodeURIComponent(e[1].replace(/\+/g, " "));
        e = decodeURIComponent(e[2].replace(/\+/g, " "));
        d in c || (c[d] = e);
      }
      return c;
    }
  };
  var z = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
  var A = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
  var B = [["#", "hash"], ["?", "query"], function(b) {
    return b.replace("\\", "/");
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]];
  var C = {
    hash: 1,
    query: 1
  };
  function D(b, a2, c) {
    if (!(this instanceof D))
      return new D(b, a2, c);
    var e = B.slice();
    var d = typeof a2;
    var k = 0;
    d !== "object" && d !== "string" && (c = a2, a2 = null);
    c && typeof c !== "function" && (c = y.parse);
    d = v && v.location || {};
    a2 = a2 || d;
    d = {};
    var f = typeof a2;
    if (a2.protocol === "blob:")
      d = new D(unescape(a2.pathname), {});
    else if (f === "string")
      for (g in d = new D(a2, {}), C) {
        delete d[g];
      }
    else if (f === "object") {
      for (g in a2) {
        g in C || (d[g] = a2[g]);
      }
      d.slashes === void 0 && (d.slashes = A.test(a2.href));
    }
    a2 = d;
    var g = z.exec(b || "");
    b = g[1] ? g[1].toLowerCase() : "";
    d = !!g[2];
    f = g[3];
    g = !b && !d;
    this.slashes = d || g && a2.slashes;
    this.protocol = b || a2.protocol || "";
    b = f;
    for (d || (e[3] = [/(.*)/, "pathname"]); k < e.length; k++) {
      if (d = e[k], typeof d === "function")
        b = d(b);
      else {
        var h = d[0];
        f = d[1];
        if (h !== h)
          this[f] = b;
        else if (typeof h === "string")
          ~(h = b.indexOf(h)) && (typeof d[2] === "number" ? (this[f] = b.slice(0, h), b = b.slice(h + d[2])) : (this[f] = b.slice(h), b = b.slice(0, h)));
        else if (h = h.exec(b))
          this[f] = h[1], b = b.slice(0, h.index);
        this[f] = this[f] || (g && d[3] ? a2[f] || "" : "");
        d[4] && (this[f] = this[f].toLowerCase());
      }
    }
    c && (this.query = c(this.query));
    if (g && a2.slashes && this.pathname.charAt(0) !== "/" && (this.pathname !== "" || a2.pathname !== "")) {
      c = this.pathname;
      c = (a2.pathname || "/").split("/").slice(0, -1).concat(c.split("/"));
      e = c.length;
      k = c[e - 1];
      a2 = false;
      for (b = 0; e--; ) {
        c[e] === "." ? c.splice(e, 1) : c[e] === ".." ? (c.splice(e, 1), b++) : b && (e === 0 && (a2 = true), c.splice(e, 1), b--);
      }
      a2 && c.unshift("");
      k !== "." && k !== ".." || c.push("");
      this.pathname = c.join("/");
    }
    w(this.port, this.protocol) || (this.host = this.hostname, this.port = "");
    this.username = this.password = "";
    this.auth && (d = this.auth.split(":"), this.username = d[0] || "", this.password = d[1] || "");
    this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
    this.href = this.toString();
  }
  D.prototype = {
    set: function set(b, a2, c) {
      switch (b) {
        case "query":
          typeof a2 === "string" && a2.length && (a2 = (c || y.parse)(a2));
          this[b] = a2;
          break;
        case "port":
          this[b] = a2;
          w(a2, this.protocol) ? a2 && (this.host = this.hostname + ":" + a2) : (this.host = this.hostname, this[b] = "");
          break;
        case "hostname":
          this[b] = a2;
          this.port && (a2 += ":" + this.port);
          this.host = a2;
          break;
        case "host":
          this[b] = a2;
          /:\d+$/.test(a2) ? (a2 = a2.split(":"), this.port = a2.pop(), this.hostname = a2.join(":")) : (this.hostname = a2, this.port = "");
          break;
        case "protocol":
          this.protocol = a2.toLowerCase();
          this.slashes = !c;
          break;
        case "pathname":
        case "hash":
          a2 ? (c = b === "pathname" ? "/" : "#", this[b] = a2.charAt(0) !== c ? c + a2 : a2) : this[b] = a2;
          break;
        default:
          this[b] = a2;
      }
      for (b = 0; b < B.length; b++) {
        a2 = B[b], a2[4] && (this[a2[1]] = this[a2[1]].toLowerCase());
      }
      this.origin = this.protocol && this.host && this.protocol !== "file:" ? this.protocol + "//" + this.host : "null";
      this.href = this.toString();
      return this;
    },
    toString: function toString(b) {
      b && typeof b === "function" || (b = y.stringify);
      var a2 = this.protocol;
      a2 && a2.charAt(a2.length - 1) !== ":" && (a2 += ":");
      a2 += this.slashes ? "//" : "";
      this.username && (a2 += this.username, this.password && (a2 += ":" + this.password), a2 += "@");
      a2 += this.host + this.pathname;
      (b = typeof this.query === "object" ? b(this.query) : this.query) && (a2 += b.charAt(0) !== "?" ? "?" + b : b);
      this.hash && (a2 += this.hash);
      return a2;
    }
  };
  D.extractProtocol = null;
  D.location = null;
  D.qs = null;
  var E = /^xn--/;
  var F = /[^\x20-\x7E]/;
  var G = /[\x2E\u3002\uFF0E\uFF61]/g;
  var H = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  var I = Math.floor;
  var J = String.fromCharCode;
  function L(b) {
    throw new RangeError(H[b]);
  }
  function M(b, a2) {
    for (var c = b.length, e = []; c--; ) {
      e[c] = a2(b[c]);
    }
    return e;
  }
  function N(b, a2) {
    var c = b.split("@"), e = "";
    1 < c.length && (e = c[0] + "@", b = c[1]);
    b = b.replace(G, ".");
    b = b.split(".");
    a2 = M(b, a2).join(".");
    return e + a2;
  }
  function O(b) {
    for (var a2 = [], c = 0, e = b.length, d, k; c < e; ) {
      d = b.charCodeAt(c++), 55296 <= d && 56319 >= d && c < e ? (k = b.charCodeAt(c++), (k & 64512) == 56320 ? a2.push(((d & 1023) << 10) + (k & 1023) + 65536) : (a2.push(d), c--)) : a2.push(d);
    }
    return a2;
  }
  function P(b) {
    return M(b, function(a2) {
      var b2 = "";
      65535 < a2 && (a2 -= 65536, b2 += J(a2 >>> 10 & 1023 | 55296), a2 = 56320 | a2 & 1023);
      return b2 += J(a2);
    }).join("");
  }
  function Q(b, a2) {
    return b + 22 + 75 * (26 > b) - ((a2 != 0) << 5);
  }
  function R(b, a2, c) {
    var e = 0;
    b = c ? I(b / 700) : b >> 1;
    for (b += I(b / a2); 455 < b; e += 36) {
      b = I(b / 35);
    }
    return I(e + 36 * b / (b + 38));
  }
  function S(b) {
    var a2 = [], c = b.length, e = 0, d = 128, k = 72, f, g;
    var h = b.lastIndexOf("-");
    0 > h && (h = 0);
    for (f = 0; f < h; ++f) {
      128 <= b.charCodeAt(f) && L("not-basic"), a2.push(b.charCodeAt(f));
    }
    for (h = 0 < h ? h + 1 : 0; h < c; ) {
      f = e;
      var m = 1;
      for (g = 36; ; g += 36) {
        h >= c && L("invalid-input");
        var l = b.charCodeAt(h++);
        l = 10 > l - 48 ? l - 22 : 26 > l - 65 ? l - 65 : 26 > l - 97 ? l - 97 : 36;
        (36 <= l || l > I((2147483647 - e) / m)) && L("overflow");
        e += l * m;
        var t = g <= k ? 1 : g >= k + 26 ? 26 : g - k;
        if (l < t)
          break;
        l = 36 - t;
        m > I(2147483647 / l) && L("overflow");
        m *= l;
      }
      m = a2.length + 1;
      k = R(e - f, m, f == 0);
      I(e / m) > 2147483647 - d && L("overflow");
      d += I(e / m);
      e %= m;
      a2.splice(e++, 0, d);
    }
    return P(a2);
  }
  function T(b) {
    var a2, c, e, d = [];
    b = O(b);
    var k = b.length;
    var f = 128;
    var g = 0;
    var h = 72;
    for (e = 0; e < k; ++e) {
      var m = b[e];
      128 > m && d.push(J(m));
    }
    for ((a2 = c = d.length) && d.push("-"); a2 < k; ) {
      var l = 2147483647;
      for (e = 0; e < k; ++e) {
        m = b[e], m >= f && m < l && (l = m);
      }
      var t = a2 + 1;
      l - f > I((2147483647 - g) / t) && L("overflow");
      g += (l - f) * t;
      f = l;
      for (e = 0; e < k; ++e) {
        if (m = b[e], m < f && 2147483647 < ++g && L("overflow"), m == f) {
          var r = g;
          for (l = 36; ; l += 36) {
            m = l <= h ? 1 : l >= h + 26 ? 26 : l - h;
            if (r < m)
              break;
            var K = r - m;
            r = 36 - m;
            d.push(J(Q(m + K % r, 0)));
            r = I(K / r);
          }
          d.push(J(Q(r, 0)));
          h = R(g, t, a2 == c);
          g = 0;
          ++a2;
        }
      }
      ++g;
      ++f;
    }
    return d.join("");
  }
  var U = {
    version: "1.4.1",
    ucs2: {
      decode: O,
      encode: P
    },
    toASCII: function toASCII(b) {
      return N(b, function(a2) {
        return F.test(a2) ? "xn--" + T(a2) : a2;
      });
    },
    toUnicode: function toUnicode(b) {
      return N(b, function(a2) {
        return E.test(a2) ? S(a2.slice(4).toLowerCase()) : a2;
      });
    },
    encode: T,
    decode: S
  };
  var V = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/;
  var W = /[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/;
  function X(b) {
    b = new D(b).hostname;
    var a2 = U.toUnicode(b);
    return (a2 = 63 >= b.length && !(V.test(a2) && W.test(a2)) && b.indexOf(".") != -1) ? (a2 = U.toUnicode(b), a2 = a2.split("-").join("--"), a2 = a2.split(".").join("-"), a2 = U.toASCII(a2).toLowerCase(), 63 < a2.length ? Y(b) : Promise.resolve(a2)) : Y(b);
  }
  function Y(b) {
    return aa(b).then(function(a2) {
      return ba("ffffffffff" + a2 + "000000").substr(8, Math.ceil(4 * a2.length / 5));
    });
  }
  function aa(b) {
    if (typeof window !== "undefined")
      return b = new TextEncoder("utf-8").encode(b), crypto.subtle.digest("SHA-256", b).then(function(a3) {
        var b2 = [];
        a3 = new DataView(a3);
        for (var c2 = 0; c2 < a3.byteLength; c2 += 4) {
          var d = ("00000000" + a3.getUint32(c2).toString(16)).slice(-8);
          b2.push(d);
        }
        return b2 = b2.join("");
      });
    {
      var a2 = Buffer.from(b, "utf-8"), c = {};
      return new Promise(function(b2) {
        var d = c.createHash("sha256").update(a2).digest("hex");
        b2(d);
      });
    }
  }
  function ba(b) {
    var a2 = [];
    b.match(/.{1,2}/g).forEach(function(b2, c2) {
      a2[c2] = parseInt(b2, 16);
    });
    var c = a2.length % 5, e = Math.floor(a2.length / 5);
    b = [];
    if (c != 0) {
      for (var d = 0; d < 5 - c; d++) {
        a2 += "\0";
      }
      e += 1;
    }
    for (d = 0; d < e; d++) {
      b.push("abcdefghijklmnopqrstuvwxyz234567".charAt(a2[5 * d] >> 3)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a2[5 * d] & 7) << 2 | a2[5 * d + 1] >> 6)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a2[5 * d + 1] & 63) >> 1)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a2[5 * d + 1] & 1) << 4 | a2[5 * d + 2] >> 4)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a2[5 * d + 2] & 15) << 1 | a2[5 * d + 3] >> 7)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a2[5 * d + 3] & 127) >> 2)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt((a2[5 * d + 3] & 3) << 3 | a2[5 * d + 4] >> 5)), b.push("abcdefghijklmnopqrstuvwxyz234567".charAt(a2[5 * d + 4] & 31));
    }
    e = 0;
    c == 1 ? e = 6 : c == 2 ? e = 4 : c == 3 ? e = 3 : c == 4 && (e = 1);
    for (c = 0; c < e; c++) {
      b.pop();
    }
    for (c = 0; c < e; c++) {
      b.push("=");
    }
    return b.join("");
  }
  function Z(b, a2) {
    var c = new D(a2);
    var e = ca(c.pathname);
    e += c.protocol === "https:" ? "/s/" : "/";
    return X(c.toString()).then(function(d) {
      var k = new D(a2);
      k.protocol = "https";
      d = d + "." + b;
      k.host = d;
      k.hostname = d;
      k.pathname = e + c.hostname + c.pathname;
      return k.toString();
    });
  }
  function ca(b) {
    return p.isPathNameAnImage(b) ? "/i" : u.isPathNameAFont(b) ? "/r" : "/c";
  }
  var amp_toolbox_cache_url_esm_default = {
    createCacheUrl: Z,
    createCurlsSubdomain: X
  };

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
  function tryResolve(fn) {
    return new Promise(function(resolve) {
      resolve(fn());
    });
  }

  // src/core/types/array.js
  var isArray = Array.isArray;

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

  // src/core/dom/query.js
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
  function removeElement(element) {
    if (element.parentElement) {
      element.parentElement.removeChild(element);
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

  // src/core/data-structures/lru-cache.js
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
  var LruCache = /* @__PURE__ */ function() {
    function LruCache2(capacity) {
      _classCallCheck3(this, LruCache2);
      this.capacity_ = capacity;
      this.size_ = 0;
      this.access_ = 0;
      this.cache_ = map();
    }
    _createClass2(LruCache2, [{
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
  function getSourceOrigin(url) {
    return parseUrlDeprecated(getSourceUrl(url)).origin;
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

  // src/event-helper.js
  var LOAD_FAILURE_PREFIX = "Failed to load:";
  var MEDIA_LOAD_FAILURE_SRC_PROPERTY = "__AMP_MEDIA_LOAD_FAILURE_SRC";
  function getData(event) {
    return event.data;
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

  // src/iframe-helper.js
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
  function postMessage(iframe, type, object, targetOrigin, opt_is3P) {
    postMessageToWindows(iframe, [{
      win: iframe.contentWindow,
      origin: targetOrigin
    }], type, object, opt_is3P);
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

  // extensions/amp-recaptcha-input/0.1/amp-recaptcha-service.js
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
  var AmpRecaptchaService = /* @__PURE__ */ function() {
    function AmpRecaptchaService2(ampdoc) {
      _classCallCheck4(this, AmpRecaptchaService2);
      this.ampdoc_ = ampdoc;
      this.win_ = this.ampdoc_.win;
      this.sitekey_ = null;
      this.iframe_ = null;
      this.iframeLoadPromise_ = null;
      this.registeredElementCount_ = 0;
      this.recaptchaFrameOrigin_ = null;
      this.recaptchaApiReady_ = new Deferred();
      this.unlisteners_ = [];
      this.executeMap_ = {};
      this.global_;
    }
    _createClass3(AmpRecaptchaService2, [{
      key: "register",
      value: function register(sitekey, global2) {
        if (global2 === void 0) {
          global2 = false;
        }
        if (!this.sitekey_) {
          this.sitekey_ = sitekey;
        } else if (this.sitekey_ !== sitekey) {
          return Promise.reject(new Error("You must supply the same sitekey to all amp-recaptcha-input elements."));
        }
        if (this.global_ === void 0) {
          this.global_ = global2;
        } else if (this.global_ !== global2) {
          return Promise.reject(new Error("You must supply the data-global attribute to all or none of the amp-recaptcha-input elements."));
        }
        this.registeredElementCount_++;
        if (!this.iframeLoadPromise_) {
          this.iframeLoadPromise_ = this.initialize_();
        }
        return this.iframeLoadPromise_;
      }
    }, {
      key: "unregister",
      value: function unregister() {
        this.registeredElementCount_--;
        if (this.registeredElementCount_ <= 0) {
          this.dispose_();
        }
      }
    }, {
      key: "execute",
      value: function execute(resourceId, action) {
        var _this = this;
        if (!this.iframe_) {
          return Promise.reject(new Error("An iframe is not created. You must register before executing"));
        }
        var executePromise = new Deferred();
        var messageId = resourceId;
        this.executeMap_[messageId] = {
          resolve: executePromise.resolve,
          reject: executePromise.reject
        };
        this.recaptchaApiReady_.promise.then(function() {
          var message = dict({
            "id": messageId,
            "action": "amp_" + action
          });
          _this.postMessageToIframe_(devAssert(_this.recaptchaFrameOrigin_), message);
        });
        return executePromise.promise;
      }
    }, {
      key: "initialize_",
      value: function initialize_() {
        var _this2 = this;
        return this.createRecaptchaFrame_().then(function(iframe) {
          _this2.iframe_ = iframe;
          _this2.unlisteners_ = [_this2.listenIframe_("amp-recaptcha-ready", function() {
            return _this2.recaptchaApiReady_.resolve();
          }), _this2.listenIframe_("amp-recaptcha-token", _this2.tokenMessageHandler_.bind(_this2)), _this2.listenIframe_("amp-recaptcha-error", _this2.errorMessageHandler_.bind(_this2))];
          _this2.executeMap_ = {};
          _this2.win_.document.body.appendChild(_this2.iframe_);
          return loadPromise(_this2.iframe_);
        });
      }
    }, {
      key: "dispose_",
      value: function dispose_() {
        if (this.iframe_) {
          removeElement(this.iframe_);
          this.unlisteners_.forEach(function(unlistener) {
            return unlistener();
          });
          this.iframe_ = null;
          this.iframeLoadPromise_ = null;
          this.recaptchaApiReady_ = new Deferred();
          this.unlisteners_ = [];
          this.executeMap_ = {};
        }
      }
    }, {
      key: "createRecaptchaFrame_",
      value: function createRecaptchaFrame_() {
        var _this3 = this;
        var iframe = this.win_.document.createElement("iframe");
        return this.getRecaptchaFrameSrc_().then(function(recaptchaFrameSrc) {
          _this3.recaptchaFrameOrigin_ = getSourceOrigin(recaptchaFrameSrc);
          iframe.src = recaptchaFrameSrc;
          iframe.setAttribute("scrolling", "no");
          iframe.setAttribute("data-amp-3p-sentinel", "amp-recaptcha");
          iframe.setAttribute("name", JSON.stringify(dict({
            "sitekey": _this3.sitekey_,
            "sentinel": "amp-recaptcha",
            "global": _this3.global_
          })));
          iframe.classList.add("i-amphtml-recaptcha-iframe");
          setStyle(iframe, "border", "none");
          iframe.onload = function() {
            this.readyState = "complete";
          };
          return iframe;
        });
      }
    }, {
      key: "getRecaptchaFrameSrc_",
      value: function getRecaptchaFrameSrc_() {
        var _this4 = this;
        if (getMode().localDev || getMode().test) {
          var winLocation = this.win_.location;
          if (this.win_.testLocation) {
            winLocation = this.win_.testLocation;
          }
          return amp_toolbox_cache_url_esm_default.createCurlsSubdomain(winLocation.href).then(function(curlsSubdomain) {
            return "//" + curlsSubdomain + ".recaptcha." + winLocation.host + "/dist.3p/" + (getMode().minified ? internalRuntimeVersion() + "/recaptcha" : "current/recaptcha.max") + ".html";
          });
        }
        var curlsSubdomainPromise = void 0;
        var isProxyOrigin2 = Services.urlForDoc(this.ampdoc_.getHeadNode()).isProxyOrigin(this.win_.location.href);
        if (isProxyOrigin2) {
          curlsSubdomainPromise = tryResolve(function() {
            return _this4.win_.location.hostname.split(".")[0];
          });
        } else {
          curlsSubdomainPromise = amp_toolbox_cache_url_esm_default.createCurlsSubdomain(this.win_.location.href);
        }
        return curlsSubdomainPromise.then(function(curlsSubdomain) {
          var recaptchaFrameSrc = "https://" + curlsSubdomain + (".recaptcha." + urls.thirdPartyFrameHost + "/" + internalRuntimeVersion() + "/") + "recaptcha.html";
          return recaptchaFrameSrc;
        });
      }
    }, {
      key: "listenIframe_",
      value: function listenIframe_(evName, cb) {
        var _this5 = this;
        var checkOriginWrappedCallback = function checkOriginWrappedCallback2(data, source, origin) {
          if (_this5.recaptchaFrameOrigin_ === origin) {
            cb(data, source, origin);
          }
        };
        return listenFor(dev().assertElement(this.iframe_), evName, checkOriginWrappedCallback, true);
      }
    }, {
      key: "postMessageToIframe_",
      value: function postMessageToIframe_(origin, message) {
        postMessage(dev().assertElement(this.iframe_), "amp-recaptcha-action", message, origin, true);
      }
    }, {
      key: "tokenMessageHandler_",
      value: function tokenMessageHandler_(data) {
        var id = data["id"];
        var token = data["token"];
        this.executeMap_[id].resolve(token);
        delete this.executeMap_[id];
      }
    }, {
      key: "errorMessageHandler_",
      value: function errorMessageHandler_(data) {
        var id = data["id"];
        var error = data["error"];
        this.executeMap_[id].reject(new Error(error));
        delete this.executeMap_[id];
      }
    }]);
    return AmpRecaptchaService2;
  }();
  function recaptchaServiceForDoc(element) {
    return getServicePromiseForDoc(element, "amp-recaptcha");
  }

  // src/async-input.js
  var AsyncInputAttributes = {
    NAME: "name"
  };
  var AsyncInputClasses = {
    "ASYNC_INPUT": "i-amphtml-async-input",
    "ASYNC_REQUIRED_ACTION": "i-async-require-action"
  };

  // build/amp-recaptcha-input-0.1.css.js
  var CSS2 = ".i-amphtml-recaptcha-iframe{position:fixed!important;top:0px!important;left:0px!important;height:1px!important;width:1px!important;overflow:hidden!important;visibility:hidden!important}\n/*# sourceURL=/extensions/amp-recaptcha-input/0.1/amp-recaptcha-input.css*/";

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

  // extensions/amp-recaptcha-input/0.1/amp-recaptcha-input.js
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
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
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
  var TAG = "amp-recaptcha-input";
  var AmpRecaptchaInput = /* @__PURE__ */ function(_AMP$BaseElement) {
    _inherits(AmpRecaptchaInput2, _AMP$BaseElement);
    var _super = _createSuper(AmpRecaptchaInput2);
    function AmpRecaptchaInput2(element) {
      var _this;
      _classCallCheck5(this, AmpRecaptchaInput2);
      _this = _super.call(this, element);
      _this.sitekey_ = null;
      _this.action_ = null;
      _this.recaptchaService_ = null;
      _this.registerPromise_ = null;
      _this.global_ = false;
      return _this;
    }
    _createClass4(AmpRecaptchaInput2, [{
      key: "buildCallback",
      value: function buildCallback() {
        var _this2 = this;
        this.sitekey_ = userAssert(this.element.getAttribute("data-sitekey"), "The data-sitekey attribute is required for <amp-recaptcha-input> %s", this.element);
        this.action_ = userAssert(this.element.getAttribute("data-action"), "The data-action attribute is required for <amp-recaptcha-input> %s", this.element);
        userAssert(this.element.getAttribute(AsyncInputAttributes.NAME), "The %s attribute is required for <amp-recaptcha-input> %s", AsyncInputAttributes.NAME, this.element);
        this.global_ = this.element.hasAttribute("data-global");
        return recaptchaServiceForDoc(this.element).then(function(service) {
          _this2.recaptchaService_ = service;
          return _this2.mutateElement(function() {
            toggle(_this2.element);
            _this2.element.classList.add(AsyncInputClasses.ASYNC_INPUT);
            setStyles(_this2.element, {
              "position": "absolute",
              "width": "1px",
              "height": "1px",
              "overflow": "hidden",
              "visibility": "hidden"
            });
          });
        });
      }
    }, {
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        return layout == Layout.NODISPLAY;
      }
    }, {
      key: "layoutCallback",
      value: function layoutCallback() {
        if (!this.registerPromise_ && this.sitekey_) {
          this.registerPromise_ = this.recaptchaService_.register(this.sitekey_, this.global_);
        }
        return this.registerPromise_;
      }
    }, {
      key: "unlayoutCallback",
      value: function unlayoutCallback() {
        if (this.registerPromise_) {
          this.recaptchaService_.unregister();
          this.registerPromise_ = null;
        }
        return true;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        if (this.sitekey_ && this.action_) {
          return this.recaptchaService_.execute(this.element.getResourceId(), this.action_);
        }
        return Promise.reject(new Error("amp-recaptcha-input requires both the data-sitekey, and data-action attribute"));
      }
    }]);
    return AmpRecaptchaInput2;
  }(AMP.BaseElement);
  AMP.extension(TAG, "0.1", function(AMP2) {
    AMP2.registerServiceForDoc("amp-recaptcha", AmpRecaptchaService);
    AMP2.registerElement(TAG, AmpRecaptchaInput, CSS2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

})});
//# sourceMappingURL=amp-recaptcha-input-0.1.max.js.map
