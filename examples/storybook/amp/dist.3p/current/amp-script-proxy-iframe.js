(() => {
  // 3p/amp-script-proxy-iframe.js
  var MESSAGE_TYPE = {
    iframeReady: "iframe-ready",
    workerReady: "worker-ready",
    init: "init-worker",
    onmessage: "onmessage",
    onerror: "onerror",
    onmessageerror: "onmessageerror",
    postMessage: "postMessage"
  };
  var parentOrigin = "*";
  function send(type, message) {
    if (type !== MESSAGE_TYPE.iframeReady && parentOrigin === "*") {
      throw new Error("Broadcast banned except for iframe-ready message.");
    }
    parent.postMessage({
      type,
      message
    }, parentOrigin);
  }
  function listen(type, handler) {
    window.addEventListener("message", function(event) {
      if (event.source !== parent) {
        return;
      }
      parentOrigin = event.origin;
      if (event.data.type === type) {
        handler(event.data);
      }
    });
  }
  send(MESSAGE_TYPE.iframeReady);
  var worker = null;
  listen(MESSAGE_TYPE.init, function(_ref) {
    var code = _ref.code;
    if (worker) {
      return;
    }
    worker = new Worker(URL.createObjectURL(new Blob([code])));
    worker.onmessage = function(e) {
      return send(MESSAGE_TYPE.onmessage, e.data);
    };
    worker.onmessageerror = function(e) {
      return send(MESSAGE_TYPE.onmessageerror, e.data);
    };
    worker.onerror = function(e) {
      return send(MESSAGE_TYPE.onerror, {
        lineno: e.lineno,
        colno: e.colno,
        message: e.message,
        filename: e.filename
      });
    };
    listen(MESSAGE_TYPE.postMessage, function(_ref2) {
      var message = _ref2.message;
      return worker.postMessage(message);
    });
    send(MESSAGE_TYPE.workerReady);
  });
})();
//# sourceMappingURL=amp-script-proxy-iframe.js.map
