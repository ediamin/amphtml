(self.AMP=self.AMP||[]).push({n:"amp-timeago",ev:"1.0",l:false,v:"2106040012000",m:0,f:(function(AMP,_){

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

  // node_modules/timeago.js/dist/timeago.full.min.js
  var require_timeago_full_min = __commonJS({
    "node_modules/timeago.js/dist/timeago.full.min.js"(exports, module) {
      !function(s3, n2) {
        typeof exports == "object" && typeof module != "undefined" ? n2(exports) : typeof define == "function" && define.amd ? define(["exports"], n2) : n2((s3 = s3 || self).timeago = {});
      }(exports, function(s3) {
        "use strict";
        var a3 = ["second", "minute", "hour", "day", "week", "month", "year"];
        function n2(s4, n3) {
          if (n3 === 0)
            return ["just now", "right now"];
          var e4 = a3[Math.floor(n3 / 2)];
          return 1 < s4 && (e4 += "s"), [s4 + " " + e4 + " ago", "in " + s4 + " " + e4];
        }
        var t3 = ["\u79D2", "\u5206\u949F", "\u5C0F\u65F6", "\u5929", "\u5468", "\u4E2A\u6708", "\u5E74"];
        function e3(s4, n3) {
          if (n3 === 0)
            return ["\u521A\u521A", "\u7247\u523B\u540E"];
          var e4 = t3[~~(n3 / 2)];
          return [s4 + " " + e4 + "\u524D", s4 + " " + e4 + "\u540E"];
        }
        function u3(s4, n3) {
          i3[s4] = n3;
        }
        function r3(s4) {
          return i3[s4] || i3.en_US;
        }
        var i3 = {}, m3 = [60, 60, 24, 7, 365 / 7 / 12, 12];
        function o3(s4) {
          return s4 instanceof Date ? s4 : !isNaN(s4) || /^\d+$/.test(s4) ? new Date(parseInt(s4)) : (s4 = (s4 || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(s4));
        }
        function d3(s4, n3) {
          for (var e4 = s4 < 0 ? 1 : 0, a4 = s4 = Math.abs(s4), t4 = 0; s4 >= m3[t4] && t4 < m3.length; t4++) {
            s4 /= m3[t4];
          }
          return ((t4 *= 2) === 0 ? 9 : 1) < (s4 = Math.floor(s4)) && (t4 += 1), n3(s4, t4, a4)[e4].replace("%s", s4.toString());
        }
        function c3(s4, n3) {
          return ((n3 ? o3(n3) : new Date()) - o3(s4)) / 1e3;
        }
        var l4 = "timeago-id";
        function h3(s4) {
          return parseInt(s4.getAttribute(l4));
        }
        var g3 = {}, f3 = function f4(s4) {
          clearTimeout(s4), delete g3[s4];
        };
        function p3(s4, n3, e4, a4) {
          f3(h3(s4));
          var t4 = a4.relativeDate, u4 = a4.minInterval, r4 = c3(n3, t4);
          s4.innerText = d3(r4, e4);
          var i4, o4 = setTimeout(function() {
            p3(s4, n3, e4, a4);
          }, Math.min(1e3 * Math.max(function(s5) {
            for (var n4 = 1, e5 = 0, a5 = Math.abs(s5); s5 >= m3[e5] && e5 < m3.length; e5++) {
              s5 /= m3[e5], n4 *= m3[e5];
            }
            return a5 = (a5 %= n4) ? n4 - a5 : n4, Math.ceil(a5);
          }(r4), u4 || 1), 2147483647));
          g3[o4] = 0, i4 = o4, s4.setAttribute(l4, i4);
        }
        u3("en_US", n2), u3("zh_CN", e3);
        var b3 = [["\u062B\u0627\u0646\u064A\u0629", "\u062B\u0627\u0646\u064A\u062A\u064A\u0646", "%s \u062B\u0648\u0627\u0646", "%s \u062B\u0627\u0646\u064A\u0629"], ["\u062F\u0642\u064A\u0642\u0629", "\u062F\u0642\u064A\u0642\u062A\u064A\u0646", "%s \u062F\u0642\u0627\u0626\u0642", "%s \u062F\u0642\u064A\u0642\u0629"], ["\u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u062A\u064A\u0646", "%s \u0633\u0627\u0639\u0627\u062A", "%s \u0633\u0627\u0639\u0629"], ["\u064A\u0648\u0645", "\u064A\u0648\u0645\u064A\u0646", "%s \u0623\u064A\u0627\u0645", "%s \u064A\u0648\u0645\u0627\u064B"], ["\u0623\u0633\u0628\u0648\u0639", "\u0623\u0633\u0628\u0648\u0639\u064A\u0646", "%s \u0623\u0633\u0627\u0628\u064A\u0639", "%s \u0623\u0633\u0628\u0648\u0639\u0627\u064B"], ["\u0634\u0647\u0631", "\u0634\u0647\u0631\u064A\u0646", "%s \u0623\u0634\u0647\u0631", "%s \u0634\u0647\u0631\u0627\u064B"], ["\u0639\u0627\u0645", "\u0639\u0627\u0645\u064A\u0646", "%s \u0623\u0639\u0648\u0627\u0645", "%s \u0639\u0627\u0645\u0627\u064B"]];
        function v3(s4, n3, e4, a4, t4) {
          var u4 = t4 % 10, r4 = a4;
          return t4 === 1 ? r4 = s4 : u4 == 1 && 20 < t4 ? r4 = n3 : 1 < u4 && u4 < 5 && (20 < t4 || t4 < 10) && (r4 = e4), r4;
        }
        var y3 = v3.bind(null, "\u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "%s \u0441\u0435\u043A\u0443\u043D\u0434"), k4 = v3.bind(null, "\u0445\u0432\u0456\u043B\u0456\u043D\u0443", "%s \u0445\u0432\u0456\u043B\u0456\u043D\u0443", "%s \u0445\u0432\u0456\u043B\u0456\u043D\u044B", "%s \u0445\u0432\u0456\u043B\u0456\u043D"), j3 = v3.bind(null, "\u0433\u0430\u0434\u0437\u0456\u043D\u0443", "%s \u0433\u0430\u0434\u0437\u0456\u043D\u0443", "%s \u0433\u0430\u0434\u0437\u0456\u043D\u044B", "%s \u0433\u0430\u0434\u0437\u0456\u043D"), z2 = v3.bind(null, "\u0434\u0437\u0435\u043D\u044C", "%s \u0434\u0437\u0435\u043D\u044C", "%s \u0434\u043D\u0456", "%s \u0434\u0437\u0451\u043D"), w4 = v3.bind(null, "\u0442\u044B\u0434\u0437\u0435\u043D\u044C", "%s \u0442\u044B\u0434\u0437\u0435\u043D\u044C", "%s \u0442\u044B\u0434\u043D\u0456", "%s \u0442\u044B\u0434\u043D\u044F\u045E"), _3 = v3.bind(null, "\u043C\u0435\u0441\u044F\u0446", "%s \u043C\u0435\u0441\u044F\u0446", "%s \u043C\u0435\u0441\u044F\u0446\u044B", "%s \u043C\u0435\u0441\u044F\u0446\u0430\u045E"), M4 = v3.bind(null, "\u0433\u043E\u0434", "%s \u0433\u043E\u0434", "%s \u0433\u0430\u0434\u044B", "%s \u0433\u0430\u0434\u043E\u045E");
        function q3(s4) {
          var n3 = ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"];
          return s4.toString().replace(/\d/g, function(s5) {
            return n3[s5];
          });
        }
        var S3 = [["w tej chwili", "za chwil\u0119"], ["%s sekund temu", "za %s sekund"], ["1 minut\u0119 temu", "za 1 minut\u0119"], ["%s minut temu", "za %s minut"], ["1 godzin\u0119 temu", "za 1 godzin\u0119"], ["%s godzin temu", "za %s godzin"], ["1 dzie\u0144 temu", "za 1 dzie\u0144"], ["%s dni temu", "za %s dni"], ["1 tydzie\u0144 temu", "za 1 tydzie\u0144"], ["%s tygodni temu", "za %s tygodni"], ["1 miesi\u0105c temu", "za 1 miesi\u0105c"], ["%s miesi\u0119cy temu", "za %s miesi\u0119cy"], ["1 rok temu", "za 1 rok"], ["%s lat temu", "za %s lat"], ["%s sekundy temu", "za %s sekundy"], ["%s minuty temu", "za %s minuty"], ["%s godziny temu", "za %s godziny"], ["%s dni temu", "za %s dni"], ["%s tygodnie temu", "za %s tygodnie"], ["%s miesi\u0105ce temu", "za %s miesi\u0105ce"], ["%s lata temu", "za %s lata"]];
        function T3(s4, n3, e4, a4, t4) {
          var u4 = t4 % 10, r4 = a4;
          return t4 === 1 ? r4 = s4 : u4 == 1 && 20 < t4 ? r4 = n3 : 1 < u4 && u4 < 5 && (20 < t4 || t4 < 10) && (r4 = e4), r4;
        }
        var N2 = T3.bind(null, "\u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u044B", "%s \u0441\u0435\u043A\u0443\u043D\u0434"), x4 = T3.bind(null, "\u043C\u0438\u043D\u0443\u0442\u0443", "%s \u043C\u0438\u043D\u0443\u0442\u0443", "%s \u043C\u0438\u043D\u0443\u0442\u044B", "%s \u043C\u0438\u043D\u0443\u0442"), D = T3.bind(null, "\u0447\u0430\u0441", "%s \u0447\u0430\u0441", "%s \u0447\u0430\u0441\u0430", "%s \u0447\u0430\u0441\u043E\u0432"), I3 = T3.bind(null, "\u0434\u0435\u043D\u044C", "%s \u0434\u0435\u043D\u044C", "%s \u0434\u043D\u044F", "%s \u0434\u043D\u0435\u0439"), O3 = T3.bind(null, "\u043D\u0435\u0434\u0435\u043B\u044E", "%s \u043D\u0435\u0434\u0435\u043B\u044E", "%s \u043D\u0435\u0434\u0435\u043B\u0438", "%s \u043D\u0435\u0434\u0435\u043B\u044C"), W2 = T3.bind(null, "\u043C\u0435\u0441\u044F\u0446", "%s \u043C\u0435\u0441\u044F\u0446", "%s \u043C\u0435\u0441\u044F\u0446\u0430", "%s \u043C\u0435\u0441\u044F\u0446\u0435\u0432"), $3 = T3.bind(null, "\u0433\u043E\u0434", "%s \u0433\u043E\u0434", "%s \u0433\u043E\u0434\u0430", "%s \u043B\u0435\u0442");
        function J2(s4, n3, e4, a4, t4) {
          var u4 = t4 % 10, r4 = t4 % 100;
          return t4 == 1 ? s4 : u4 == 1 && r4 != 11 ? n3 : 2 <= u4 && u4 <= 4 && !(12 <= r4 && r4 <= 14) ? e4 : a4;
        }
        var U2 = J2.bind(null, "1 \u0441\u0435\u043A\u0443\u043D\u0434", "%s \u0441\u0435\u043A\u0443\u043D\u0434", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0435", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0438"), A4 = J2.bind(null, "1 \u043C\u0438\u043D\u0443\u0442", "%s \u043C\u0438\u043D\u0443\u0442", "%s \u043C\u0438\u043D\u0443\u0442\u0435", "%s \u043C\u0438\u043D\u0443\u0442\u0430"), C3 = J2.bind(null, "\u0441\u0430\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0430", "%s \u0441\u0430\u0442", "%s \u0441\u0430\u0442\u0430", "%s \u0441\u0430\u0442\u0438"), E2 = J2.bind(null, "1 \u0434\u0430\u043D", "%s \u0434\u0430\u043D", "%s \u0434\u0430\u043D\u0430", "%s \u0434\u0430\u043D\u0430"), B = J2.bind(null, "\u043D\u0435\u0434\u0435\u0459\u0443 \u0434\u0430\u043D\u0430", "%s \u043D\u0435\u0434\u0435\u0459\u0443", "%s \u043D\u0435\u0434\u0435\u0459\u0435", "%s \u043D\u0435\u0434\u0435\u0459\u0430"), P3 = J2.bind(null, "\u043C\u0435\u0441\u0435\u0446 \u0434\u0430\u043D\u0430", "%s \u043C\u0435\u0441\u0435\u0446", "%s \u043C\u0435\u0441\u0435\u0446\u0430", "%s \u043C\u0435\u0441\u0435\u0446\u0438"), R2 = J2.bind(null, "\u0433\u043E\u0434\u0438\u043D\u0443 \u0434\u0430\u043D\u0430", "%s \u0433\u043E\u0434\u0438\u043D\u0443", "%s \u0433\u043E\u0434\u0438\u043D\u0435", "%s \u0433\u043E\u0434\u0438\u043D\u0430");
        function Z2(s4, n3, e4, a4, t4) {
          var u4 = t4 % 10, r4 = a4;
          return t4 === 1 ? r4 = s4 : u4 == 1 && 20 < t4 ? r4 = n3 : 1 < u4 && u4 < 5 && (20 < t4 || t4 < 10) && (r4 = e4), r4;
        }
        var F3 = Z2.bind(null, "\u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0443", "%s \u0441\u0435\u043A\u0443\u043D\u0434\u0438", "%s \u0441\u0435\u043A\u0443\u043D\u0434"), G2 = Z2.bind(null, "\u0445\u0432\u0438\u043B\u0438\u043D\u0443", "%s \u0445\u0432\u0438\u043B\u0438\u043D\u0443", "%s \u0445\u0432\u0438\u043B\u0438\u043D\u0438", "%s \u0445\u0432\u0438\u043B\u0438\u043D"), H3 = Z2.bind(null, "\u0433\u043E\u0434\u0438\u043D\u0443", "%s \u0433\u043E\u0434\u0438\u043D\u0443", "%s \u0433\u043E\u0434\u0438\u043D\u0438", "%s \u0433\u043E\u0434\u0438\u043D"), K2 = Z2.bind(null, "\u0434\u0435\u043D\u044C", "%s \u0434\u0435\u043D\u044C", "%s \u0434\u043D\u0456", "%s \u0434\u043D\u0456\u0432"), L3 = Z2.bind(null, "\u0442\u0438\u0436\u0434\u0435\u043D\u044C", "%s \u0442\u0438\u0436\u0434\u0435\u043D\u044C", "%s \u0442\u0438\u0436\u0434\u043D\u0456", "%s \u0442\u0438\u0436\u0434\u043D\u0456\u0432"), Q = Z2.bind(null, "\u043C\u0456\u0441\u044F\u0446\u044C", "%s \u043C\u0456\u0441\u044F\u0446\u044C", "%s \u043C\u0456\u0441\u044F\u0446\u0456", "%s \u043C\u0456\u0441\u044F\u0446\u0456\u0432"), V3 = Z2.bind(null, "\u0440\u0456\u043A", "%s \u0440\u0456\u043A", "%s \u0440\u043E\u043A\u0438", "%s \u0440\u043E\u043A\u0456\u0432");
        var X = Object.freeze({
          __proto__: null,
          ar: function ar(s4, n3) {
            if (n3 === 0)
              return ["\u0645\u0646\u0630 \u0644\u062D\u0638\u0627\u062A", "\u0628\u0639\u062F \u0644\u062D\u0638\u0627\u062A"];
            var e4, a4, t4 = (e4 = Math.floor(n3 / 2), (a4 = s4) < 3 ? b3[e4][a4 - 1] : 3 <= a4 && a4 <= 10 ? b3[e4][2] : b3[e4][3]);
            return ["\u0645\u0646\u0630 " + t4, "\u0628\u0639\u062F " + t4];
          },
          be: function be(s4, n3) {
            switch (n3) {
              case 0:
                return ["\u0442\u043E\u043B\u044C\u043A\u0456 \u0448\u0442\u043E", "\u043F\u0440\u0430\u0437 \u043D\u0435\u043A\u0430\u043B\u044C\u043A\u0456 \u0441\u0435\u043A\u0443\u043D\u0434"];
              case 1:
                return [y3(s4) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + y3(s4)];
              case 2:
              case 3:
                return [k4(s4) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + k4(s4)];
              case 4:
              case 5:
                return [j3(s4) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + j3(s4)];
              case 6:
              case 7:
                return [z2(s4) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + z2(s4)];
              case 8:
              case 9:
                return [w4(s4) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + w4(s4)];
              case 10:
              case 11:
                return [_3(s4) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + _3(s4)];
              case 12:
              case 13:
                return [M4(s4) + " \u0442\u0430\u043C\u0443", "\u043F\u0440\u0430\u0437 " + M4(s4)];
              default:
                return ["", ""];
            }
          },
          bg: function bg(s4, n3) {
            return [["\u0442\u043E\u043A\u0443 \u0449\u043E", "\u0441\u044A\u0432\u0441\u0435\u043C \u0441\u043A\u043E\u0440\u043E"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0441\u0435\u043A\u0443\u043D\u0434\u0438", "\u0441\u043B\u0435\u0434 %s \u0441\u0435\u043A\u0443\u043D\u0434\u0438"], ["\u043F\u0440\u0435\u0434\u0438 1 \u043C\u0438\u043D\u0443\u0442\u0430", "\u0441\u043B\u0435\u0434 1 \u043C\u0438\u043D\u0443\u0442\u0430"], ["\u043F\u0440\u0435\u0434\u0438 %s \u043C\u0438\u043D\u0443\u0442\u0438", "\u0441\u043B\u0435\u0434 %s \u043C\u0438\u043D\u0443\u0442\u0438"], ["\u043F\u0440\u0435\u0434\u0438 1 \u0447\u0430\u0441", "\u0441\u043B\u0435\u0434 1 \u0447\u0430\u0441"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0447\u0430\u0441\u0430", "\u0441\u043B\u0435\u0434 %s \u0447\u0430\u0441\u0430"], ["\u043F\u0440\u0435\u0434\u0438 1 \u0434\u0435\u043D", "\u0441\u043B\u0435\u0434 1 \u0434\u0435\u043D"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0434\u043D\u0438", "\u0441\u043B\u0435\u0434 %s \u0434\u043D\u0438"], ["\u043F\u0440\u0435\u0434\u0438 1 \u0441\u0435\u0434\u043C\u0438\u0446\u0430", "\u0441\u043B\u0435\u0434 1 \u0441\u0435\u0434\u043C\u0438\u0446\u0430"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0441\u0435\u0434\u043C\u0438\u0446\u0438", "\u0441\u043B\u0435\u0434 %s \u0441\u0435\u0434\u043C\u0438\u0446\u0438"], ["\u043F\u0440\u0435\u0434\u0438 1 \u043C\u0435\u0441\u0435\u0446", "\u0441\u043B\u0435\u0434 1 \u043C\u0435\u0441\u0435\u0446"], ["\u043F\u0440\u0435\u0434\u0438 %s \u043C\u0435\u0441\u0435\u0446\u0430", "\u0441\u043B\u0435\u0434 %s \u043C\u0435\u0441\u0435\u0446\u0430"], ["\u043F\u0440\u0435\u0434\u0438 1 \u0433\u043E\u0434\u0438\u043D\u0430", "\u0441\u043B\u0435\u0434 1 \u0433\u043E\u0434\u0438\u043D\u0430"], ["\u043F\u0440\u0435\u0434\u0438 %s \u0433\u043E\u0434\u0438\u043D\u0438", "\u0441\u043B\u0435\u0434 %s \u0433\u043E\u0434\u0438\u043D\u0438"]][n3];
          },
          bn_IN: function bn_IN(s4, n3) {
            return [["\u098F\u0987\u09AE\u09BE\u09A4\u09CD\u09B0", "\u098F\u0995\u099F\u09BE \u09B8\u09AE\u09AF\u09BC"], ["%s \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1 \u0986\u0997\u09C7", "%s \u098F\u09B0 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["1 \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7", "1 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7"], ["%s \u098F\u09B0 \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7", "%s \u098F\u09B0 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["1 \u0998\u09A8\u09CD\u099F\u09BE \u0986\u0997\u09C7", "1 \u0998\u09A8\u09CD\u099F\u09BE"], ["%s \u0998\u09A3\u09CD\u099F\u09BE \u0986\u0997\u09C7", "%s \u098F\u09B0 \u0998\u09A8\u09CD\u099F\u09BE\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["1 \u09A6\u09BF\u09A8 \u0986\u0997\u09C7", "1 \u09A6\u09BF\u09A8\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["%s \u098F\u09B0 \u09A6\u09BF\u09A8 \u0986\u0997\u09C7", "%s \u098F\u09B0 \u09A6\u09BF\u09A8"], ["1 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9 \u0986\u0997\u09C7", "1 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["%s \u098F\u09B0 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9 \u0986\u0997\u09C7", "%s \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["1 \u09AE\u09BE\u09B8 \u0986\u0997\u09C7", "1 \u09AE\u09BE\u09B8\u09C7"], ["%s \u09AE\u09BE\u09B8 \u0986\u0997\u09C7", "%s \u09AE\u09BE\u09B8\u09C7"], ["1 \u09AC\u099B\u09B0 \u0986\u0997\u09C7", "1 \u09AC\u099B\u09B0\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7"], ["%s \u09AC\u099B\u09B0 \u0986\u0997\u09C7", "%s \u09AC\u099B\u09B0\u09C7"]][n3];
          },
          ca: function ca(s4, n3) {
            return [["fa un moment", "d'aqu\xED un moment"], ["fa %s segons", "d'aqu\xED %s segons"], ["fa 1 minut", "d'aqu\xED 1 minut"], ["fa %s minuts", "d'aqu\xED %s minuts"], ["fa 1 hora", "d'aqu\xED 1 hora"], ["fa %s hores", "d'aqu\xED %s hores"], ["fa 1 dia", "d'aqu\xED 1 dia"], ["fa %s dies", "d'aqu\xED %s dies"], ["fa 1 setmana", "d'aqu\xED 1 setmana"], ["fa %s setmanes", "d'aqu\xED %s setmanes"], ["fa 1 mes", "d'aqu\xED 1 mes"], ["fa %s mesos", "d'aqu\xED %s mesos"], ["fa 1 any", "d'aqu\xED 1 any"], ["fa %s anys", "d'aqu\xED %s anys"]][n3];
          },
          de: function de(s4, n3) {
            return [["gerade eben", "vor einer Weile"], ["vor %s Sekunden", "in %s Sekunden"], ["vor 1 Minute", "in 1 Minute"], ["vor %s Minuten", "in %s Minuten"], ["vor 1 Stunde", "in 1 Stunde"], ["vor %s Stunden", "in %s Stunden"], ["vor 1 Tag", "in 1 Tag"], ["vor %s Tagen", "in %s Tagen"], ["vor 1 Woche", "in 1 Woche"], ["vor %s Wochen", "in %s Wochen"], ["vor 1 Monat", "in 1 Monat"], ["vor %s Monaten", "in %s Monaten"], ["vor 1 Jahr", "in 1 Jahr"], ["vor %s Jahren", "in %s Jahren"]][n3];
          },
          el: function el(s4, n3) {
            return [["\u03BC\u03CC\u03BB\u03B9\u03C2 \u03C4\u03CE\u03C1\u03B1", "\u03C3\u03B5 \u03BB\u03AF\u03B3\u03BF"], ["%s \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1"], ["1 \u03BB\u03B5\u03C0\u03C4\u03CC \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03BB\u03B5\u03C0\u03C4\u03CC"], ["%s \u03BB\u03B5\u03C0\u03C4\u03AC \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03BB\u03B5\u03C0\u03C4\u03AC"], ["1 \u03CE\u03C1\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03CE\u03C1\u03B1"], ["%s \u03CE\u03C1\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03CE\u03C1\u03B5\u03C2"], ["1 \u03BC\u03AD\u03C1\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03BC\u03AD\u03C1\u03B1"], ["%s \u03BC\u03AD\u03C1\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03BC\u03AD\u03C1\u03B5\u03C2"], ["1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1"], ["%s \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2"], ["1 \u03BC\u03AE\u03BD\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03BC\u03AE\u03BD\u03B1"], ["%s \u03BC\u03AE\u03BD\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03BC\u03AE\u03BD\u03B5\u03C2"], ["1 \u03C7\u03C1\u03CC\u03BD\u03BF \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 1 \u03C7\u03C1\u03CC\u03BD\u03BF"], ["%s \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1 \u03C0\u03C1\u03B9\u03BD", "\u03C3\u03B5 %s \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"]][n3];
          },
          en_short: function en_short(s4, n3) {
            return [["just now", "right now"], ["%ss ago", "in %ss"], ["1m ago", "in 1m"], ["%sm ago", "in %sm"], ["1h ago", "in 1h"], ["%sh ago", "in %sh"], ["1d ago", "in 1d"], ["%sd ago", "in %sd"], ["1w ago", "in 1w"], ["%sw ago", "in %sw"], ["1mo ago", "in 1mo"], ["%smo ago", "in %smo"], ["1yr ago", "in 1yr"], ["%syr ago", "in %syr"]][n3];
          },
          en_US: n2,
          es: function es(s4, n3) {
            return [["justo ahora", "en un rato"], ["hace %s segundos", "en %s segundos"], ["hace 1 minuto", "en 1 minuto"], ["hace %s minutos", "en %s minutos"], ["hace 1 hora", "en 1 hora"], ["hace %s horas", "en %s horas"], ["hace 1 d\xEDa", "en 1 d\xEDa"], ["hace %s d\xEDas", "en %s d\xEDas"], ["hace 1 semana", "en 1 semana"], ["hace %s semanas", "en %s semanas"], ["hace 1 mes", "en 1 mes"], ["hace %s meses", "en %s meses"], ["hace 1 a\xF1o", "en 1 a\xF1o"], ["hace %s a\xF1os", "en %s a\xF1os"]][n3];
          },
          eu: function eu(s4, n3) {
            return [["orain", "denbora bat barru"], ["duela %s segundu", "%s segundu barru"], ["duela minutu 1", "minutu 1 barru"], ["duela %s minutu", "%s minutu barru"], ["duela ordu 1", "ordu 1 barru"], ["duela %s ordu", "%s ordu barru"], ["duela egun 1", "egun 1 barru"], ["duela %s egun", "%s egun barru"], ["duela aste 1", "aste 1 barru"], ["duela %s aste", "%s aste barru"], ["duela hillabete 1", "hillabete 1 barru"], ["duela %s hillabete", "%s hillabete barru"], ["duela urte 1", "urte 1 barru"], ["duela %s urte", "%s urte barru"]][n3];
          },
          fa: function fa(s4, n3) {
            var e4 = [["\u0644\u062D\u0638\u0627\u062A\u06CC \u067E\u06CC\u0634", "\u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627"], ["%s \u062B\u0627\u0646\u06CC\u0647 \u067E\u06CC\u0634", "%s \u062B\u0627\u0646\u06CC\u0647 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634", "\u06F1 \u062F\u0642\u06CC\u0642\u0647 \u062F\u06CC\u06AF\u0631"], ["%s \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634", "%s \u062F\u0642\u06CC\u0642\u0647 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634", "\u06F1 \u0633\u0627\u0639\u062A \u062F\u06CC\u06AF\u0631"], ["%s \u0633\u0627\u0639\u062A \u067E\u06CC\u0634", "%s \u0633\u0627\u0639\u062A \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0631\u0648\u0632 \u067E\u06CC\u0634", "\u06F1 \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631"], ["%s \u0631\u0648\u0632 \u067E\u06CC\u0634", "%s \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634", "\u06F1 \u0647\u0641\u062A\u0647 \u062F\u06CC\u06AF\u0631"], ["%s \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634", "%s \u0647\u0641\u062A\u0647 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0645\u0627\u0647 \u067E\u06CC\u0634", "\u06F1 \u0645\u0627\u0647 \u062F\u06CC\u06AF\u0631"], ["%s \u0645\u0627\u0647 \u067E\u06CC\u0634", "%s \u0645\u0627\u0647 \u062F\u06CC\u06AF\u0631"], ["\u06F1 \u0633\u0627\u0644 \u067E\u06CC\u0634", "\u06F1 \u0633\u0627\u0644 \u062F\u06CC\u06AF\u0631"], ["%s \u0633\u0627\u0644 \u067E\u06CC\u0634", "%s \u0633\u0627\u0644 \u062F\u06CC\u06AF\u0631"]][n3];
            return [e4[0].replace("%s", q3(s4)), e4[1].replace("%s", q3(s4))];
          },
          fi: function fi(s4, n3) {
            return [["juuri \xE4sken", "juuri nyt"], ["%s sekuntia sitten", "%s sekunnin p\xE4\xE4st\xE4"], ["minuutti sitten", "minuutin p\xE4\xE4st\xE4"], ["%s minuuttia sitten", "%s minuutin p\xE4\xE4st\xE4"], ["tunti sitten", "tunnin p\xE4\xE4st\xE4"], ["%s tuntia sitten", "%s tunnin p\xE4\xE4st\xE4"], ["p\xE4iv\xE4 sitten", "p\xE4iv\xE4n p\xE4\xE4st\xE4"], ["%s p\xE4iv\xE4\xE4 sitten", "%s p\xE4iv\xE4n p\xE4\xE4st\xE4"], ["viikko sitten", "viikon p\xE4\xE4st\xE4"], ["%s viikkoa sitten", "%s viikon p\xE4\xE4st\xE4"], ["kuukausi sitten", "kuukauden p\xE4\xE4st\xE4"], ["%s kuukautta sitten", "%s kuukauden p\xE4\xE4st\xE4"], ["vuosi sitten", "vuoden p\xE4\xE4st\xE4"], ["%s vuotta sitten", "%s vuoden p\xE4\xE4st\xE4"]][n3];
          },
          fr: function fr(s4, n3) {
            return [["\xE0 l'instant", "dans un instant"], ["il y a %s secondes", "dans %s secondes"], ["il y a 1 minute", "dans 1 minute"], ["il y a %s minutes", "dans %s minutes"], ["il y a 1 heure", "dans 1 heure"], ["il y a %s heures", "dans %s heures"], ["il y a 1 jour", "dans 1 jour"], ["il y a %s jours", "dans %s jours"], ["il y a 1 semaine", "dans 1 semaine"], ["il y a %s semaines", "dans %s semaines"], ["il y a 1 mois", "dans 1 mois"], ["il y a %s mois", "dans %s mois"], ["il y a 1 an", "dans 1 an"], ["il y a %s ans", "dans %s ans"]][n3];
          },
          gl: function gl(s4, n3) {
            return [["xusto agora", "daqu\xED a un pouco"], ["hai %s segundos", "en %s segundos"], ["hai 1 minuto", "nun minuto"], ["hai %s minutos", "en %s minutos"], ["hai 1 hora", "nunha hora"], ["hai %s horas", "en %s horas"], ["hai 1 d\xEDa", "nun d\xEDa"], ["hai %s d\xEDas", "en %s d\xEDas"], ["hai 1 semana", "nunha semana"], ["hai %s semanas", "en %s semanas"], ["hai 1 mes", "nun mes"], ["hai %s meses", "en %s meses"], ["hai 1 ano", "nun ano"], ["hai %s anos", "en %s anos"]][n3];
          },
          he: function he(s4, n3) {
            return [["\u05D6\u05D4 \u05E2\u05EA\u05D4", "\u05E2\u05DB\u05E9\u05D9\u05D5"], ["\u05DC\u05E4\u05E0\u05D9 %s \u05E9\u05E0\u05D9\u05D5\u05EA", "\u05D1\u05E2\u05D5\u05D3 %s \u05E9\u05E0\u05D9\u05D5\u05EA"], ["\u05DC\u05E4\u05E0\u05D9 \u05D3\u05E7\u05D4", "\u05D1\u05E2\u05D5\u05D3 \u05D3\u05E7\u05D4"], ["\u05DC\u05E4\u05E0\u05D9 %s \u05D3\u05E7\u05D5\u05EA", "\u05D1\u05E2\u05D5\u05D3 %s \u05D3\u05E7\u05D5\u05EA"], ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E2\u05D4", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05E2\u05D4"], s4 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E2\u05EA\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05E2\u05EA\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05E9\u05E2\u05D5\u05EA", "\u05D1\u05E2\u05D5\u05D3 %s \u05E9\u05E2\u05D5\u05EA"], ["\u05D0\u05EA\u05DE\u05D5\u05DC", "\u05DE\u05D7\u05E8"], s4 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05D9\u05D5\u05DE\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05D9\u05D5\u05DE\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05D9\u05DE\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 %s \u05D9\u05DE\u05D9\u05DD"], ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05D1\u05D5\u05E2", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05D1\u05D5\u05E2"], s4 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA", "\u05D1\u05E2\u05D5\u05D3 %s \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA"], ["\u05DC\u05E4\u05E0\u05D9 \u05D7\u05D5\u05D3\u05E9", "\u05D1\u05E2\u05D5\u05D3 \u05D7\u05D5\u05D3\u05E9"], s4 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 %s \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD"], ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E0\u05D4", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05E0\u05D4"], s4 === 2 ? ["\u05DC\u05E4\u05E0\u05D9 \u05E9\u05E0\u05EA\u05D9\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 \u05E9\u05E0\u05EA\u05D9\u05D9\u05DD"] : ["\u05DC\u05E4\u05E0\u05D9 %s \u05E9\u05E0\u05D9\u05DD", "\u05D1\u05E2\u05D5\u05D3 %s \u05E9\u05E0\u05D9\u05DD"]][n3];
          },
          hi_IN: function hi_IN(s4, n3) {
            return [["\u0905\u092D\u0940", "\u0915\u0941\u091B \u0938\u092E\u092F"], ["%s \u0938\u0947\u0915\u0902\u0921 \u092A\u0939\u0932\u0947", "%s \u0938\u0947\u0915\u0902\u0921 \u092E\u0947\u0902"], ["1 \u092E\u093F\u0928\u091F \u092A\u0939\u0932\u0947", "1 \u092E\u093F\u0928\u091F \u092E\u0947\u0902"], ["%s \u092E\u093F\u0928\u091F \u092A\u0939\u0932\u0947", "%s \u092E\u093F\u0928\u091F \u092E\u0947\u0902"], ["1 \u0918\u0902\u091F\u0947 \u092A\u0939\u0932\u0947", "1 \u0918\u0902\u091F\u0947 \u092E\u0947\u0902"], ["%s \u0918\u0902\u091F\u0947 \u092A\u0939\u0932\u0947", "%s \u0918\u0902\u091F\u0947 \u092E\u0947\u0902"], ["1 \u0926\u093F\u0928 \u092A\u0939\u0932\u0947", "1 \u0926\u093F\u0928 \u092E\u0947\u0902"], ["%s \u0926\u093F\u0928 \u092A\u0939\u0932\u0947", "%s \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902"], ["1 \u0938\u092A\u094D\u0924\u093E\u0939 \u092A\u0939\u0932\u0947", "1 \u0938\u092A\u094D\u0924\u093E\u0939 \u092E\u0947\u0902"], ["%s \u0939\u092B\u094D\u0924\u0947 \u092A\u0939\u0932\u0947", "%s \u0939\u092B\u094D\u0924\u094B\u0902 \u092E\u0947\u0902"], ["1 \u092E\u0939\u0940\u0928\u0947 \u092A\u0939\u0932\u0947", "1 \u092E\u0939\u0940\u0928\u0947 \u092E\u0947\u0902"], ["%s \u092E\u0939\u0940\u0928\u0947 \u092A\u0939\u0932\u0947", "%s \u092E\u0939\u0940\u0928\u094B\u0902 \u092E\u0947\u0902"], ["1 \u0938\u093E\u0932 \u092A\u0939\u0932\u0947", "1 \u0938\u093E\u0932 \u092E\u0947\u0902"], ["%s \u0938\u093E\u0932 \u092A\u0939\u0932\u0947", "%s \u0938\u093E\u0932 \u092E\u0947\u0902"]][n3];
          },
          hu: function hu(s4, n3) {
            return [["\xE9ppen most", "\xE9ppen most"], ["%s m\xE1sodperce", "%s m\xE1sodpercen bel\xFCl"], ["1 perce", "1 percen bel\xFCl"], ["%s perce", "%s percen bel\xFCl"], ["1 \xF3r\xE1ja", "1 \xF3r\xE1n bel\xFCl"], ["%s \xF3r\xE1ja", "%s \xF3r\xE1n bel\xFCl"], ["1 napja", "1 napon bel\xFCl"], ["%s napja", "%s napon bel\xFCl"], ["1 hete", "1 h\xE9ten bel\xFCl"], ["%s hete", "%s h\xE9ten bel\xFCl"], ["1 h\xF3napja", "1 h\xF3napon bel\xFCl"], ["%s h\xF3napja", "%s h\xF3napon bel\xFCl"], ["1 \xE9ve", "1 \xE9ven bel\xFCl"], ["%s \xE9ve", "%s \xE9ven bel\xFCl"]][n3];
          },
          id_ID: function id_ID(s4, n3) {
            return [["baru saja", "sebentar"], ["%s detik yang lalu", "dalam %s detik"], ["1 menit yang lalu", "dalam 1 menit"], ["%s menit yang lalu", "dalam %s menit"], ["1 jam yang lalu", "dalam 1 jam"], ["%s jam yang lalu", "dalam %s jam"], ["1 hari yang lalu", "dalam 1 hari"], ["%s hari yang lalu", "dalam %s hari"], ["1 minggu yang lalu", "dalam 1 minggu"], ["%s minggu yang lalu", "dalam %s minggu"], ["1 bulan yang lalu", "dalam 1 bulan"], ["%s bulan yang lalu", "dalam %s bulan"], ["1 tahun yang lalu", "dalam 1 tahun"], ["%s tahun yang lalu", "dalam %s tahun"]][n3];
          },
          it: function it(s4, n3) {
            return [["poco fa", "fra poco"], ["%s secondi fa", "fra %s secondi"], ["un minuto fa", "fra un minuto"], ["%s minuti fa", "fra %s minuti"], ["un'ora fa", "fra un'ora"], ["%s ore fa", "fra %s ore"], ["un giorno fa", "fra un giorno"], ["%s giorni fa", "fra %s giorni"], ["una settimana fa", "fra una settimana"], ["%s settimane fa", "fra %s settimane"], ["un mese fa", "fra un mese"], ["%s mesi fa", "fra %s mesi"], ["un anno fa", "fra un anno"], ["%s anni fa", "fra %s anni"]][n3];
          },
          ja: function ja(s4, n3) {
            return [["\u3059\u3053\u3057\u524D", "\u3059\u3050\u306B"], ["%s\u79D2\u524D", "%s\u79D2\u4EE5\u5185"], ["1\u5206\u524D", "1\u5206\u4EE5\u5185"], ["%s\u5206\u524D", "%s\u5206\u4EE5\u5185"], ["1\u6642\u9593\u524D", "1\u6642\u9593\u4EE5\u5185"], ["%s\u6642\u9593\u524D", "%s\u6642\u9593\u4EE5\u5185"], ["1\u65E5\u524D", "1\u65E5\u4EE5\u5185"], ["%s\u65E5\u524D", "%s\u65E5\u4EE5\u5185"], ["1\u9031\u9593\u524D", "1\u9031\u9593\u4EE5\u5185"], ["%s\u9031\u9593\u524D", "%s\u9031\u9593\u4EE5\u5185"], ["1\u30F6\u6708\u524D", "1\u30F6\u6708\u4EE5\u5185"], ["%s\u30F6\u6708\u524D", "%s\u30F6\u6708\u4EE5\u5185"], ["1\u5E74\u524D", "1\u5E74\u4EE5\u5185"], ["%s\u5E74\u524D", "%s\u5E74\u4EE5\u5185"]][n3];
          },
          ko: function ko(s4, n3) {
            return [["\uBC29\uAE08", "\uACE7"], ["%s\uCD08 \uC804", "%s\uCD08 \uD6C4"], ["1\uBD84 \uC804", "1\uBD84 \uD6C4"], ["%s\uBD84 \uC804", "%s\uBD84 \uD6C4"], ["1\uC2DC\uAC04 \uC804", "1\uC2DC\uAC04 \uD6C4"], ["%s\uC2DC\uAC04 \uC804", "%s\uC2DC\uAC04 \uD6C4"], ["1\uC77C \uC804", "1\uC77C \uD6C4"], ["%s\uC77C \uC804", "%s\uC77C \uD6C4"], ["1\uC8FC\uC77C \uC804", "1\uC8FC\uC77C \uD6C4"], ["%s\uC8FC\uC77C \uC804", "%s\uC8FC\uC77C \uD6C4"], ["1\uAC1C\uC6D4 \uC804", "1\uAC1C\uC6D4 \uD6C4"], ["%s\uAC1C\uC6D4 \uC804", "%s\uAC1C\uC6D4 \uD6C4"], ["1\uB144 \uC804", "1\uB144 \uD6C4"], ["%s\uB144 \uC804", "%s\uB144 \uD6C4"]][n3];
          },
          ml: function ml(s4, n3) {
            return [["\u0D07\u0D2A\u0D4D\u0D2A\u0D4B\u0D33\u0D4D\u200D", "\u0D15\u0D41\u0D31\u0D1A\u0D4D\u0D1A\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D"], ["%s \u0D38\u0D46\u0D15\u0D4D\u0D15\u0D28\u0D4D\u0D31\u0D4D\u200C\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D38\u0D46\u0D15\u0D4D\u0D15\u0D28\u0D4D\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D3F\u0D28\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D41\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A", "%s \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D31\u0D3F\u0D28\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D31\u0D41\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D31\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D12\u0D30\u0D41 \u0D26\u0D3F\u0D35\u0D38\u0D02 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D26\u0D3F\u0D35\u0D38\u0D24\u0D4D\u0D24\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D26\u0D3F\u0D35\u0D38\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D26\u0D3F\u0D35\u0D38\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D06\u0D34\u0D4D\u0D1A \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D06\u0D34\u0D4D\u0D1A\u0D2F\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D06\u0D34\u0D4D\u0D1A\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D06\u0D34\u0D4D\u0D1A\u0D15\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D2E\u0D3E\u0D38\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D2E\u0D3E\u0D38\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D2E\u0D3E\u0D38\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D2E\u0D3E\u0D38\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["1 \u0D35\u0D30\u0D4D\u200D\u0D37\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D41  \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "1 \u0D35\u0D30\u0D4D\u200D\u0D37\u0D24\u0D4D\u0D24\u0D3F\u0D28\u0D41\u0D33\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"], ["%s \u0D35\u0D30\u0D4D\u200D\u0D37\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41 \u0D2E\u0D41\u0D28\u0D4D\u200D\u0D2A\u0D4D", "%s \u0D35\u0D30\u0D4D\u200D\u0D37\u0D19\u0D4D\u0D19\u0D33\u0D4D\u200D\u0D15\u0D4D\u0D15\u0D41\u0D32\u0D4D\u0D32\u0D4D\u0D33\u0D3F\u0D32\u0D4D\u200D"]][n3];
          },
          my: function my(s4, n3) {
            return [["\u101A\u1001\u102F\u1021\u1010\u103D\u1004\u103A\u1038", "\u101A\u1001\u102F"], ["%s \u1005\u1000\u1039\u1000\u1014\u1037\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u1005\u1000\u1039\u1000\u1014\u1037\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u1019\u102D\u1014\u1005\u103A \u1021\u1000\u103C\u102C\u1000", "1 \u1019\u102D\u1014\u1005\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u1019\u102D\u1014\u1005\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u1019\u102D\u1014\u1005\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u1014\u102C\u101B\u102E \u1021\u1000\u103C\u102C\u1000", "1 \u1014\u102C\u101B\u102E\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u1014\u102C\u101B\u102E \u1021\u1000\u103C\u102C\u1000", "%s \u1014\u102C\u101B\u102E\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u101B\u1000\u103A \u1021\u1000\u103C\u102C\u1000", "1 \u101B\u1000\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u101B\u1000\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u101B\u1000\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u1015\u1010\u103A \u1021\u1000\u103C\u102C\u1000", "1 \u1015\u1010\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u1015\u1010\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u1015\u1010\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u101C \u1021\u1000\u103C\u102C\u1000", "1 \u101C\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u101C \u1021\u1000\u103C\u102C\u1000", "%s \u101C\u1021\u1010\u103D\u1004\u103A\u1038"], ["1 \u1014\u103E\u1005\u103A \u1021\u1000\u103C\u102C\u1000", "1 \u1014\u103E\u1005\u103A\u1021\u1010\u103D\u1004\u103A\u1038"], ["%s \u1014\u103E\u1005\u103A \u1021\u1000\u103C\u102C\u1000", "%s \u1014\u103E\u1005\u103A\u1021\u1010\u103D\u1004\u103A\u1038"]][n3];
          },
          nb_NO: function nb_NO(s4, n3) {
            return [["akkurat n\xE5", "om litt"], ["%s sekunder siden", "om %s sekunder"], ["1 minutt siden", "om 1 minutt"], ["%s minutter siden", "om %s minutter"], ["1 time siden", "om 1 time"], ["%s timer siden", "om %s timer"], ["1 dag siden", "om 1 dag"], ["%s dager siden", "om %s dager"], ["1 uke siden", "om 1 uke"], ["%s uker siden", "om %s uker"], ["1 m\xE5ned siden", "om 1 m\xE5ned"], ["%s m\xE5neder siden", "om %s m\xE5neder"], ["1 \xE5r siden", "om 1 \xE5r"], ["%s \xE5r siden", "om %s \xE5r"]][n3];
          },
          nl: function nl(s4, n3) {
            return [["recent", "binnenkort"], ["%s seconden geleden", "binnen %s seconden"], ["1 minuut geleden", "binnen 1 minuut"], ["%s minuten geleden", "binnen %s minuten"], ["1 uur geleden", "binnen 1 uur"], ["%s uur geleden", "binnen %s uur"], ["1 dag geleden", "binnen 1 dag"], ["%s dagen geleden", "binnen %s dagen"], ["1 week geleden", "binnen 1 week"], ["%s weken geleden", "binnen %s weken"], ["1 maand geleden", "binnen 1 maand"], ["%s maanden geleden", "binnen %s maanden"], ["1 jaar geleden", "binnen 1 jaar"], ["%s jaar geleden", "binnen %s jaar"]][n3];
          },
          nn_NO: function nn_NO(s4, n3) {
            return [["nett no", "om litt"], ["%s sekund sidan", "om %s sekund"], ["1 minutt sidan", "om 1 minutt"], ["%s minutt sidan", "om %s minutt"], ["1 time sidan", "om 1 time"], ["%s timar sidan", "om %s timar"], ["1 dag sidan", "om 1 dag"], ["%s dagar sidan", "om %s dagar"], ["1 veke sidan", "om 1 veke"], ["%s veker sidan", "om %s veker"], ["1 m\xE5nad sidan", "om 1 m\xE5nad"], ["%s m\xE5nadar sidan", "om %s m\xE5nadar"], ["1 \xE5r sidan", "om 1 \xE5r"], ["%s \xE5r sidan", "om %s \xE5r"]][n3];
          },
          pl: function pl(s4, n3) {
            return S3[1 & n3 ? 4 < s4 % 10 || s4 % 10 < 2 || ~~(s4 / 10) % 10 == 1 ? n3 : ++n3 / 2 + 13 : n3];
          },
          pt_BR: function pt_BR(s4, n3) {
            return [["agora mesmo", "agora"], ["h\xE1 %s segundos", "em %s segundos"], ["h\xE1 um minuto", "em um minuto"], ["h\xE1 %s minutos", "em %s minutos"], ["h\xE1 uma hora", "em uma hora"], ["h\xE1 %s horas", "em %s horas"], ["h\xE1 um dia", "em um dia"], ["h\xE1 %s dias", "em %s dias"], ["h\xE1 uma semana", "em uma semana"], ["h\xE1 %s semanas", "em %s semanas"], ["h\xE1 um m\xEAs", "em um m\xEAs"], ["h\xE1 %s meses", "em %s meses"], ["h\xE1 um ano", "em um ano"], ["h\xE1 %s anos", "em %s anos"]][n3];
          },
          ro: function ro(s4, n3) {
            var e4 = [["chiar acum", "chiar acum"], ["acum %s secunde", "peste %s secunde"], ["acum un minut", "peste un minut"], ["acum %s minute", "peste %s minute"], ["acum o or\u0103", "peste o or\u0103"], ["acum %s ore", "peste %s ore"], ["acum o zi", "peste o zi"], ["acum %s zile", "peste %s zile"], ["acum o s\u0103pt\u0103m\xE2n\u0103", "peste o s\u0103pt\u0103m\xE2n\u0103"], ["acum %s s\u0103pt\u0103m\xE2ni", "peste %s s\u0103pt\u0103m\xE2ni"], ["acum o lun\u0103", "peste o lun\u0103"], ["acum %s luni", "peste %s luni"], ["acum un an", "peste un an"], ["acum %s ani", "peste %s ani"]];
            return s4 < 20 ? e4[n3] : [e4[n3][0].replace("%s", "%s de"), e4[n3][1].replace("%s", "%s de")];
          },
          ru: function ru(s4, n3) {
            switch (n3) {
              case 0:
                return ["\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E", "\u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434"];
              case 1:
                return [N2(s4) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + N2(s4)];
              case 2:
              case 3:
                return [x4(s4) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + x4(s4)];
              case 4:
              case 5:
                return [D(s4) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + D(s4)];
              case 6:
                return ["\u0432\u0447\u0435\u0440\u0430", "\u0437\u0430\u0432\u0442\u0440\u0430"];
              case 7:
                return [I3(s4) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + I3(s4)];
              case 8:
              case 9:
                return [O3(s4) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + O3(s4)];
              case 10:
              case 11:
                return [W2(s4) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + W2(s4)];
              case 12:
              case 13:
                return [$3(s4) + " \u043D\u0430\u0437\u0430\u0434", "\u0447\u0435\u0440\u0435\u0437 " + $3(s4)];
              default:
                return ["", ""];
            }
          },
          sq: function sq(s4, n3) {
            return [["pak m\xEB par\xEB", "pas pak"], ["para %s sekondash", "pas %s sekondash"], ["para nj\xEB minute", "pas nj\xEB minute"], ["para %s minutash", "pas %s minutash"], ["para nj\xEB ore", "pas nj\xEB ore"], ["para %s or\xEBsh", "pas %s or\xEBsh"], ["dje", "nes\xEBr"], ["para %s dit\xEBsh", "pas %s dit\xEBsh"], ["para nj\xEB jave", "pas nj\xEB jave"], ["para %s jav\xEBsh", "pas %s jav\xEBsh"], ["para nj\xEB muaji", "pas nj\xEB muaji"], ["para %s muajsh", "pas %s muajsh"], ["para nj\xEB viti", "pas nj\xEB viti"], ["para %s vjet\xEBsh", "pas %s vjet\xEBsh"]][n3];
          },
          sr: function sr(s4, n3) {
            switch (n3) {
              case 0:
                return ["\u043C\u0430\u043B\u043E\u043F\u0440\u0435", "\u0443\u043F\u0440\u0430\u0432\u043E \u0441\u0430\u0434"];
              case 1:
                return ["\u043F\u0440\u0435 " + U2(s4), "\u0437\u0430 " + U2(s4)];
              case 2:
              case 3:
                return ["\u043F\u0440\u0435 " + A4(s4), "\u0437\u0430 " + A4(s4)];
              case 4:
              case 5:
                return ["\u043F\u0440\u0435 " + C3(s4), "\u0437\u0430 " + C3(s4)];
              case 6:
              case 7:
                return ["\u043F\u0440\u0435 " + E2(s4), "\u0437\u0430 " + E2(s4)];
              case 8:
              case 9:
                return ["\u043F\u0440\u0435 " + B(s4), "\u0437\u0430 " + B(s4)];
              case 10:
              case 11:
                return ["\u043F\u0440\u0435 " + P3(s4), "\u0437\u0430 " + P3(s4)];
              case 12:
              case 13:
                return ["\u043F\u0440\u0435 " + R2(s4), "\u0437\u0430 " + R2(s4)];
              default:
                return ["", ""];
            }
          },
          sv: function sv(s4, n3) {
            return [["just nu", "om en stund"], ["%s sekunder sedan", "om %s sekunder"], ["1 minut sedan", "om 1 minut"], ["%s minuter sedan", "om %s minuter"], ["1 timme sedan", "om 1 timme"], ["%s timmar sedan", "om %s timmar"], ["1 dag sedan", "om 1 dag"], ["%s dagar sedan", "om %s dagar"], ["1 vecka sedan", "om 1 vecka"], ["%s veckor sedan", "om %s veckor"], ["1 m\xE5nad sedan", "om 1 m\xE5nad"], ["%s m\xE5nader sedan", "om %s m\xE5nader"], ["1 \xE5r sedan", "om 1 \xE5r"], ["%s \xE5r sedan", "om %s \xE5r"]][n3];
          },
          ta: function ta(s4, n3) {
            return [["\u0B87\u0BAA\u0BCD\u0BAA\u0BC7\u0BBE\u0BA4\u0BC1", "\u0B9A\u0BB1\u0BCD\u0BB1\u0BC1 \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"], ["%s \u0BA8\u0BCA\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BA8\u0BCA\u0B9F\u0BBF\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"], ["%s \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BB3\u0BCD"], ["%s \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BB3\u0BCD"], ["1 \u0BA8\u0BBE\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BA8\u0BBE\u0BB3\u0BBF\u0BB2\u0BCD"], ["%s \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BB5\u0BBE\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BB5\u0BBE\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"], ["%s \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"], ["%s \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"], ["1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"], ["%s \u0BB5\u0BB0\u0BC1\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "%s \u0BB5\u0BB0\u0BC1\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD"]][n3];
          },
          th: function th(s4, n3) {
            return [["\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48\u0E19\u0E35\u0E49", "\u0E2D\u0E35\u0E01\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48"], ["%s \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"], ["1 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E19\u0E32\u0E17\u0E35"], ["%s \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E19\u0E32\u0E17\u0E35"], ["1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"], ["%s \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"], ["1 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E27\u0E31\u0E19"], ["%s \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E27\u0E31\u0E19"], ["1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"], ["%s \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"], ["1 \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E40\u0E14\u0E37\u0E2D\u0E19"], ["%s \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E40\u0E14\u0E37\u0E2D\u0E19"], ["1 \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 1 \u0E1B\u0E35"], ["%s \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", "\u0E43\u0E19 %s \u0E1B\u0E35"]][n3];
          },
          tr: function tr(s4, n3) {
            return [["az \xF6nce", "\u015Fimdi"], ["%s saniye \xF6nce", "%s saniye i\xE7inde"], ["1 dakika \xF6nce", "1 dakika i\xE7inde"], ["%s dakika \xF6nce", "%s dakika i\xE7inde"], ["1 saat \xF6nce", "1 saat i\xE7inde"], ["%s saat \xF6nce", "%s saat i\xE7inde"], ["1 g\xFCn \xF6nce", "1 g\xFCn i\xE7inde"], ["%s g\xFCn \xF6nce", "%s g\xFCn i\xE7inde"], ["1 hafta \xF6nce", "1 hafta i\xE7inde"], ["%s hafta \xF6nce", "%s hafta i\xE7inde"], ["1 ay \xF6nce", "1 ay i\xE7inde"], ["%s ay \xF6nce", "%s ay i\xE7inde"], ["1 y\u0131l \xF6nce", "1 y\u0131l i\xE7inde"], ["%s y\u0131l \xF6nce", "%s y\u0131l i\xE7inde"]][n3];
          },
          uk: function uk(s4, n3) {
            switch (n3) {
              case 0:
                return ["\u0449\u043E\u0439\u043D\u043E", "\u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434"];
              case 1:
                return [F3(s4) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + F3(s4)];
              case 2:
              case 3:
                return [G2(s4) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + G2(s4)];
              case 4:
              case 5:
                return [H3(s4) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + H3(s4)];
              case 6:
              case 7:
                return [K2(s4) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + K2(s4)];
              case 8:
              case 9:
                return [L3(s4) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + L3(s4)];
              case 10:
              case 11:
                return [Q(s4) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + Q(s4)];
              case 12:
              case 13:
                return [V3(s4) + " \u0442\u043E\u043C\u0443", "\u0447\u0435\u0440\u0435\u0437 " + V3(s4)];
              default:
                return ["", ""];
            }
          },
          vi: function vi(s4, n3) {
            return [["v\u1EEBa xong", "m\u1ED9t l\xFAc"], ["%s gi\xE2y tr\u01B0\u1EDBc", "trong %s gi\xE2y"], ["1 ph\xFAt tr\u01B0\u1EDBc", "trong 1 ph\xFAt"], ["%s ph\xFAt tr\u01B0\u1EDBc", "trong %s ph\xFAt"], ["1 gi\u1EDD tr\u01B0\u1EDBc", "trong 1 gi\u1EDD"], ["%s gi\u1EDD tr\u01B0\u1EDBc", "trong %s gi\u1EDD"], ["1 ng\xE0y tr\u01B0\u1EDBc", "trong 1 ng\xE0y"], ["%s ng\xE0y tr\u01B0\u1EDBc", "trong %s ng\xE0y"], ["1 tu\u1EA7n tr\u01B0\u1EDBc", "trong 1 tu\u1EA7n"], ["%s tu\u1EA7n tr\u01B0\u1EDBc", "trong %s tu\u1EA7n"], ["1 th\xE1ng tr\u01B0\u1EDBc", "trong 1 th\xE1ng"], ["%s th\xE1ng tr\u01B0\u1EDBc", "trong %s th\xE1ng"], ["1 n\u0103m tr\u01B0\u1EDBc", "trong 1 n\u0103m"], ["%s n\u0103m tr\u01B0\u1EDBc", "trong %s n\u0103m"]][n3];
          },
          zh_CN: e3,
          zh_TW: function zh_TW(s4, n3) {
            return [["\u525B\u525B", "\u7247\u523B\u5F8C"], ["%s \u79D2\u524D", "%s \u79D2\u5F8C"], ["1 \u5206\u9418\u524D", "1 \u5206\u9418\u5F8C"], ["%s \u5206\u9418\u524D", "%s \u5206\u9418\u5F8C"], ["1 \u5C0F\u6642\u524D", "1 \u5C0F\u6642\u5F8C"], ["%s \u5C0F\u6642\u524D", "%s \u5C0F\u6642\u5F8C"], ["1 \u5929\u524D", "1 \u5929\u5F8C"], ["%s \u5929\u524D", "%s \u5929\u5F8C"], ["1 \u9031\u524D", "1 \u9031\u5F8C"], ["%s \u9031\u524D", "%s \u9031\u5F8C"], ["1 \u500B\u6708\u524D", "1 \u500B\u6708\u5F8C"], ["%s \u500B\u6708\u524D", "%s \u500B\u6708\u5F8C"], ["1 \u5E74\u524D", "1 \u5E74\u5F8C"], ["%s \u5E74\u524D", "%s \u5E74\u5F8C"]][n3];
          }
        });
        Object.keys(X).forEach(function(s4) {
          u3(s4, X[s4]);
        }), s3.cancel = function(s4) {
          s4 ? f3(h3(s4)) : Object.keys(g3).forEach(f3);
        }, s3.format = function(s4, n3, e4) {
          return d3(c3(s4, e4 && e4.relativeDate), r3(n3));
        }, s3.register = u3, s3.render = function(s4, n3, e4) {
          var a4 = s4.length ? s4 : [s4];
          return a4.forEach(function(s5) {
            p3(s5, s5.getAttribute("datetime"), r3(n3), e4 || {});
          }), a4;
        }, Object.defineProperty(s3, "__esModule", {
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
  function d2(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
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

  // src/core/assert/user.js
  function userAssert(shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return assert(USER_ERROR_SENTINEL, shouldBeTruthy, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/constants/action-constants.js
  var ActionTrust = {
    LOW: 1,
    DEFAULT: 2,
    HIGH: 3
  };

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
  function userAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
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
  var EMPTY_CSS_DECLARATION = {
    "getPropertyPriority": function getPropertyPriority() {
      return "";
    },
    "getPropertyValue": function getPropertyValue() {
      return "";
    }
  };
  function computedStyle(win, el) {
    var style = win.getComputedStyle(el);
    return style || EMPTY_CSS_DECLARATION;
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
      value: function pauseWhenNoSize_(_ref2) {
        var blockSize = _ref2.blockSize, inlineSize = _ref2.inlineSize;
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
        groups.forEach(function(_ref2) {
          var cn = _ref2.cn, match = _ref2.match, weight = _ref2.weight;
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
  function WithAmpContext(_ref2) {
    var children = _ref2.children, _ref$loading = _ref2.loading, loadingProp = _ref$loading === void 0 ? "auto" : _ref$loading, notifyProp = _ref2.notify, _ref$playable = _ref2.playable, playableProp = _ref$playable === void 0 ? true : _ref$playable, _ref$renderable = _ref2.renderable, renderableProp = _ref$renderable === void 0 ? true : _ref$renderable;
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
    var _ref2 = opt_props || EMPTY, loading = _ref2["loading"];
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
  function parseBooleanAttribute(s3) {
    return s3 == null ? void 0 : s3 !== "false";
  }
  function dispatchCustomEvent(node, name, opt_data, opt_options) {
    var data = opt_data || {};
    var event = node.ownerDocument.createEvent("Event");
    event.data = data;
    var _ref2 = opt_options || DEFAULT_CUSTOM_EVENT_OPTIONS, bubbles = _ref2.bubbles, cancelable = _ref2.cancelable;
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
      _classCallCheck7(this, PreactBaseElement2);
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
    _createClass6(PreactBaseElement2, [{
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

  // src/preact/component/contain.js
  var _excluded = ["as", "children", "className", "contentAs", "contentClassName", "contentProps", "contentRef", "contentStyle", "layout", "paint", "size", "style", "wrapperClassName", "wrapperStyle"];
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
  function ContainWrapperWithRef(_ref2, ref) {
    var _ref$as = _ref2.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref2.children, className = _ref2["className"], _ref$contentAs = _ref2.contentAs, ContentComp = _ref$contentAs === void 0 ? "div" : _ref$contentAs, contentClassName = _ref2.contentClassName, contentProps = _ref2.contentProps, contentRef = _ref2.contentRef, contentStyle = _ref2.contentStyle, _ref$layout = _ref2.layout, layout = _ref$layout === void 0 ? false : _ref$layout, _ref$paint = _ref2.paint, paint = _ref$paint === void 0 ? false : _ref$paint, _ref$size = _ref2.size, size = _ref$size === void 0 ? false : _ref$size, style = _ref2["style"], wrapperClassName = _ref2.wrapperClassName, wrapperStyle = _ref2.wrapperStyle, rest = _objectWithoutPropertiesLoose(_ref2, _excluded);
    var containIndex = (size ? 4 : 0) + (layout ? 2 : 0) + (paint ? 1 : 0);
    return createElement(Comp, _extends4({}, rest, {
      ref,
      className: ((className || "") + " " + (wrapperClassName || "")).trim() || null,
      style: _extends4({}, style, wrapperStyle, {
        contain: CONTAIN[containIndex]
      })
    }), createElement(ContentComp, _extends4({}, contentProps, {
      ref: contentRef,
      className: contentClassName,
      style: _extends4({}, size && SIZE_CONTENT_STYLE, {
        "overflow": paint ? "hidden" : "visible"
      }, contentStyle)
    }), children));
  }
  var ContainWrapper = forwardRef(ContainWrapperWithRef);

  // src/preact/component/wrapper.js
  var _excluded2 = ["as", "children", "className", "style", "wrapperClassName", "wrapperStyle"];
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
  function WrapperWithRef(_ref2, ref) {
    var _ref$as = _ref2.as, Comp = _ref$as === void 0 ? "div" : _ref$as, children = _ref2.children, className = _ref2["className"], style = _ref2["style"], wrapperClassName = _ref2.wrapperClassName, wrapperStyle = _ref2.wrapperStyle, rest = _objectWithoutPropertiesLoose2(_ref2, _excluded2);
    return createElement(Comp, _extends5({}, rest, {
      ref,
      className: ((className || "") + " " + (wrapperClassName || "")).trim() || null,
      style: _extends5({}, style, wrapperStyle)
    }), children);
  }
  var Wrapper = forwardRef(WrapperWithRef);

  // extensions/amp-timeago/1.0/locales.js
  var timeago = __toModule(require_timeago_full_min());

  // node_modules/timeago.js/esm/lang/cs.js
  function cs_default(number, index) {
    var inflectionIndex = 0;
    var isInflectionNeeded = index == 1 || index == 3 || index == 5 || index == 7 || index == 9 || index == 11 || index == 13;
    if (isInflectionNeeded && number >= 5) {
      inflectionIndex = 1;
    }
    return [[["pr\xE1v\u011B te\u010F", "pr\xE1v\u011B te\u010F"]], [["p\u0159ed %s vte\u0159inami", "za %s vte\u0159iny"], ["p\u0159ed %s vte\u0159inami", "za %s vte\u0159in"]], [["p\u0159ed minutou", "za minutu"]], [["p\u0159ed %s minutami", "za %s minuty"], ["p\u0159ed %s minutami", "za %s minut"]], [["p\u0159ed hodinou", "za hodinu"]], [["p\u0159ed %s hodinami", "za %s hodiny"], ["p\u0159ed %s hodinami", "za %s hodin"]], [["v\u010Dera", "z\xEDtra"]], [["p\u0159ed %s dny", "za %s dny"], ["p\u0159ed %s dny", "za %s dn\u016F"]], [["minul\xFD t\xFDden", "p\u0159\xED\u0161t\xED t\xFDden"]], [["p\u0159ed %s t\xFDdny", "za %s t\xFDdny"], ["p\u0159ed %s t\xFDdny", "za %s t\xFDdn\u016F"]], [["minul\xFD m\u011Bs\xEDc", "p\u0159\xEDst\xED m\u011Bs\xEDc"]], [["p\u0159ed %s m\u011Bs\xEDci", "za %s m\u011Bs\xEDce"], ["p\u0159ed %s m\u011Bs\xEDci", "za %s m\u011Bs\xEDc\u016F"]], [["p\u0159ed rokem", "p\u0159\xEDst\xED rok"]], [["p\u0159ed %s lety", "za %s roky"], ["p\u0159ed %s lety", "za %s let"]]][index][inflectionIndex];
  }

  // node_modules/timeago.js/esm/lang/da.js
  function da_default(number, index) {
    return [["for et \xF8jeblik siden", "om et \xF8jeblik"], ["for %s sekunder siden", "om %s sekunder"], ["for 1 minut siden", "om 1 minut"], ["for %s minutter siden", "om %s minutter"], ["for 1 time siden", "om 1 time"], ["for %s timer siden", "om %s timer"], ["for 1 dag siden", "om 1 dag"], ["for %s dage siden", "om %s dage"], ["for 1 uge siden", "om 1 uge"], ["for %s uger siden", "om %s uger"], ["for 1 m\xE5ned siden", "om 1 m\xE5ned"], ["for %s m\xE5neder siden", "om %s m\xE5neder"], ["for 1 \xE5r siden", "om 1 \xE5r"], ["for %s \xE5r siden", "om %s \xE5r"]][index];
  }

  // node_modules/timeago.js/esm/lang/ka.js
  function ka_default(number, index) {
    return [["\u10D0\u10DB \u10EC\u10D0\u10DB\u10E1", "\u10D0\u10EE\u10DA\u10D0"], ["%s \u10EC\u10D0\u10DB\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10EC\u10D0\u10DB\u10E8\u10D8"], ["1 \u10EC\u10E3\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10EC\u10E3\u10D7\u10E8\u10D8"], ["%s \u10EC\u10E3\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10EC\u10E3\u10D7\u10E8\u10D8"], ["1 \u10E1\u10D0\u10D0\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10E1\u10D0\u10D0\u10D7\u10E8\u10D8"], ["%s \u10E1\u10D0\u10D0\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10E1\u10D0\u10D0\u10D7\u10E8\u10D8"], ["1 \u10D3\u10E6\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10D3\u10E6\u10D4\u10E8\u10D8"], ["%s \u10D3\u10E6\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10D3\u10E6\u10D4\u10E8\u10D8"], ["1 \u10D9\u10D5\u10D8\u10E0\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10D9\u10D5\u10D8\u10E0\u10D0\u10E8\u10D8"], ["%s \u10D9\u10D5\u10D8\u10E0\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10D9\u10D5\u10D8\u10E0\u10D0\u10E8\u10D8"], ["1 \u10D7\u10D5\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10D7\u10D5\u10D4\u10E8\u10D8"], ["%s \u10D7\u10D5\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10D7\u10D5\u10D4\u10E8\u10D8"], ["1 \u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC", "1 \u10EC\u10D4\u10DA\u10D8\u10EC\u10D0\u10D3\u10E8\u10D8"], ["%s \u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC", "%s \u10EC\u10D4\u10DA\u10D8\u10EC\u10D0\u10D3\u10E8\u10D8"]][index];
  }

  // node_modules/timeago.js/esm/lang/oc.js
  function oc_default(number, index) {
    return [["fa un moment", "d'aqu\xED un moment"], ["fa %s segondas", "d'aqu\xED %s segondas"], ["fa 1 minuta", "d'aqu\xED 1 minuta"], ["fa %s minutas", "d'aqu\xED %s minutas"], ["fa 1 ora", "d'aqu\xED 1 ora"], ["fa %s oras", "d'aqu\xED %s oras"], ["fa 1 jorn", "d'aqu\xED 1 jorn"], ["fa %s jorns", "d'aqu\xED %s jorns"], ["fa 1 setmana", "d'aqu\xED 1 setmana"], ["fa %s setmanas", "d'aqu\xED %s setmanas"], ["fa 1 mes", "d'aqu\xED 1 mes"], ["fa %s meses", "d'aqu\xED %s meses"], ["fa 1 an", "d'aqu\xED 1 an"], ["fa %s ans", "d'aqu\xED %s ans"]][index];
  }

  // extensions/amp-timeago/1.0/locales.js
  var _ref = timeago.default || timeago;
  var format = _ref.format;
  var register = _ref.register;
  register("cs", cs_default);
  register("da", da_default);
  register("ka", ka_default);
  register("oc", oc_default);
  function getLocale(locale) {
    locale = locale.toLowerCase();
    if (nonStandardReplacements[locale]) {
      return nonStandardReplacements[locale];
    }
    if (locale.length === 4 || locale.length === 5) {
      return locale.slice(0, 2) + "_" + locale.slice(-2).toUpperCase();
    }
    return locale;
  }
  var nonStandardReplacements = {
    "en": "en_US",
    "enshort": "en_short",
    "en-short": "en_short",
    "inbg": "bn_IN",
    "inid": "id_ID",
    "inhi": "hi_IN"
  };

  // src/preact/utils.js
  function useResourcesNotify() {
    var _useAmpContext = useAmpContext(), notify = _useAmpContext.notify;
    useLayoutEffect(function() {
      if (notify) {
        notify();
      }
    });
  }

  // extensions/amp-timeago/1.0/component.js
  var _excluded3 = ["cutoff", "datetime", "locale", "placeholder"];
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
  var DEFAULT_LOCALE = "en_US";
  var DEFAULT_DATETIME_OPTIONS = {
    "year": "numeric",
    "month": "short",
    "day": "numeric",
    "hour": "numeric",
    "minute": "numeric"
  };
  var DEFAULT_TIME_OPTIONS = {
    "hour": "numeric",
    "minute": "numeric"
  };
  function Timeago(_ref2) {
    var cutoff = _ref2.cutoff, datetime2 = _ref2.datetime, localeProp = _ref2.locale, placeholder = _ref2.placeholder, rest = _objectWithoutPropertiesLoose3(_ref2, _excluded3);
    var _useState = useState(placeholder || ""), timestamp = _useState[0], setTimestamp = _useState[1];
    var ref = useRef(null);
    var date = getDate(datetime2);
    useEffect(function() {
      var node = ref.current;
      var win = node && toWin(node.ownerDocument.defaultView);
      if (!win) {
        return void 0;
      }
      var observer = new win.IntersectionObserver(function(entries) {
        var lang = node.ownerDocument.documentElement.lang;
        if (lang === "unknown") {
          var _win$navigator;
          lang = ((_win$navigator = win.navigator) == null ? void 0 : _win$navigator.language) || DEFAULT_LOCALE;
        }
        var locale = getLocale(localeProp || lang);
        var last = entries[entries.length - 1];
        if (last.isIntersecting) {
          setTimestamp(getFuzzyTimestampValue(new Date(date), locale, cutoff, placeholder));
        }
      });
      observer.observe(node);
      return function() {
        return observer.disconnect();
      };
    }, [date, localeProp, cutoff, placeholder]);
    useResourcesNotify();
    return createElement(Wrapper, _extends6({}, rest, {
      as: "time",
      ref,
      datetime: new Date(date).toISOString()
    }), timestamp);
  }
  function getFuzzyTimestampValue(date, locale, cutoff, placeholder) {
    if (!cutoff) {
      return format(date, locale);
    }
    var secondsAgo = Math.floor((Date.now() - date.getTime()) / 1e3);
    if (secondsAgo > cutoff) {
      return placeholder ? placeholder : getDefaultPlaceholder(date, locale);
    }
    return format(date, locale);
  }
  function getDefaultPlaceholder(date, locale) {
    if (date.toLocaleDateString() == new Date().toLocaleDateString()) {
      return date.toLocaleTimeString(locale, DEFAULT_TIME_OPTIONS);
    }
    return date.toLocaleString(locale, DEFAULT_DATETIME_OPTIONS);
  }

  // src/core/dom/parse-date-attributes.js
  var dateAttrParsers = {
    "datetime": function datetime(_datetime) {
      return userAssert(parseDate(_datetime), "Invalid date: %s", _datetime);
    },
    "end-date": function endDate(datetime2) {
      return userAssert(parseDate(datetime2), "Invalid date: %s", datetime2);
    },
    "timeleft-ms": function timeleftMs(_timeleftMs) {
      return Date.now() + Number(_timeleftMs);
    },
    "timestamp-ms": function timestampMs(ms) {
      return Number(ms);
    },
    "timestamp-seconds": function timestampSeconds(_timestampSeconds) {
      return 1e3 * Number(_timestampSeconds);
    }
  };
  function parseDateAttrs(element, dateAttrs) {
    var epoch = userAssert(parseEpoch(element, dateAttrs), "One of attributes [%s] is required", dateAttrs.join(", "));
    var offsetSeconds = (Number(element.getAttribute("offset-seconds")) || 0) * 1e3;
    return epoch + offsetSeconds;
  }
  function parseEpoch(element, dateAttrs) {
    var parsers = dateAttrs.map(function(attrName) {
      return devAssert(dateAttrParsers[attrName], 'Invalid date attribute "%s"', attrName);
    });
    for (var i3 = 0; i3 < dateAttrs.length; ++i3) {
      var attrVal = element.getAttribute(dateAttrs[i3]);
      if (attrVal) {
        return parsers[i3](attrVal);
      }
    }
    return null;
  }

  // extensions/amp-timeago/1.0/base-element.js
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
      _classCallCheck8(this, BaseElement2);
      return _super.apply(this, arguments);
    }
    _createClass7(BaseElement2, [{
      key: "updatePropsForRendering",
      value: function updatePropsForRendering(props) {
        props["placeholder"] = props["children"];
      }
    }]);
    return BaseElement2;
  }(PreactBaseElement);
  BaseElement["Component"] = Timeago;
  BaseElement["layoutSizeDefined"] = true;
  BaseElement["props"] = {
    "children": {
      passthroughNonEmpty: true
    },
    "cutoff": {
      attr: "cutoff",
      type: "number"
    },
    "datetime": {
      attrs: ["datetime", "timestamp-ms", "timestamp-seconds", "offset-seconds"],
      parseAttrs: parseDateAttrs2
    },
    "locale": {
      attr: "locale"
    }
  };
  BaseElement["usesShadowDom"] = true;
  function parseDateAttrs2(element) {
    return parseDateAttrs(element, ["datetime", "timestamp-ms", "timestamp-seconds"]);
  }

  // extensions/amp-timeago/1.0/amp-timeago.js
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
  var TAG2 = "amp-timeago";
  var AmpTimeago = /* @__PURE__ */ function(_BaseElement) {
    _inherits3(AmpTimeago2, _BaseElement);
    var _super = _createSuper3(AmpTimeago2);
    function AmpTimeago2() {
      _classCallCheck9(this, AmpTimeago2);
      return _super.apply(this, arguments);
    }
    _createClass8(AmpTimeago2, [{
      key: "isLayoutSupported",
      value: function isLayoutSupported(layout) {
        userAssert2(isExperimentOn(this.win, "bento") || isExperimentOn(this.win, "bento-timeago"), 'expected global "bento" or specific "bento-timeago" experiment to be enabled');
        return _get2(_getPrototypeOf3(AmpTimeago2.prototype), "isLayoutSupported", this).call(this, layout);
      }
    }]);
    return AmpTimeago2;
  }(BaseElement);
  AMP.extension(TAG2, "1.0", function(AMP2) {
    AMP2.registerElement(TAG2, AmpTimeago);
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
//# sourceMappingURL=amp-timeago-1.0.max.js.map
