(() => {
  // src/examiner/examiner.js
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
  function detectLongTasks(win) {
    var observer = new win.PerformanceObserver(function(entryList) {
      var entries = entryList.getEntries();
      for (var _iterator = _createForOfIteratorHelperLoose(entries), _step; !(_step = _iterator()).done; ) {
        var entry = _step.value;
        var attribution = entry.attribution, duration = entry.duration, entryType = entry.entryType, name = entry.name;
        if (entryType != "longtask" || name != "cross-origin-descendant") {
          continue;
        }
        var attr = attribution[0];
        if (!(attr != null && attr.containerSrc)) {
          continue;
        }
        var culprit = attr.containerSrc;
        if (attr.containerName) {
          var match = attr.containerName.match(/"type":"([^\"]*)"/);
          if (match.length > 1) {
            culprit = '<amp-ad type="' + match[1] + '">';
          }
        }
        console.log("%c LONG TASK %c " + duration + "ms from " + culprit, "background: red; color: white", "background: #fff; color: #000");
      }
    });
    observer.observe({
      entryTypes: ["longtask"]
    });
  }
  function isLongTaskApiSupported(win) {
    return !!win.PerformanceObserver && !!win.TaskAttributionTiming && "containerName" in win.TaskAttributionTiming.prototype;
  }
  if (isLongTaskApiSupported(self)) {
    detectLongTasks(self);
  }
})();
//# sourceMappingURL=examiner.max.js.map
