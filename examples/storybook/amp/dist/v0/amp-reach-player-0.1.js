(self.AMP=self.AMP||[]).push({n:"amp-reach-player",ev:"0.1",l:true,v:"2106040012000",m:0,f:function(AMP,_){"use strict";function g(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function l(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}l(this);"function"===typeof Symbol&&Symbol("x");var m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var p={a:!0},q={};try{q.__proto__=p;n=q.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=m;function t(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}function u(a){var b=null,c="";var d=arguments;var e="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];d=e?e.call(d):{next:g(d)};for(e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function v(a){var b=u.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function w(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){v(e)}}var x=self.AMP_CONFIG||{},y=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function z(a){if(self.document&&self.document.head&&(!self.location||!y.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}x.cdnUrl||z("runtime-host");x.geoApiUrl||z("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};var E=/vertical/,F=new WeakMap,G=new WeakMap,H=new WeakMap;function I(a,b){var c=a.ownerDocument.defaultView;if(c){var d=G.get(a);d||(d=[],G.set(a,d),J(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=H.get(a);e&&setTimeout((function(){return K(1,b,e)}))}}}function L(a,b){var c=G.get(a);c&&(t(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(G.delete(a),H.delete(a),(c=a.ownerDocument.defaultView)&&J(c).unobserve(a)))}function J(a){var b=F.get(a);b||(b=new a.ResizeObserver(M),F.set(a,b));return b}function M(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=G.get(e);if(f)for(H.set(e,d),e=0;e<f.length;e++){var h=f[e];K(h.type,h.callback,d)}}}}function K(a,b,c){if(0==a)a=c.contentRect,w(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=E.test((a.ownerDocument.defaultView.getComputedStyle(a)||A)["writing-mode"]),h=a.offsetHeight,B=a.offsetWidth;if(f){var C=B;var D=h}else D=B,C=h;e={inlineSize:D,blockSize:C}}w(b,e)}}function N(a){this.o=a;this.A=this.B=!1;this.j=this.j.bind(this)}N.prototype.updatePlaying=function(a){a!==this.B&&((this.B=a)?(this.A=!1,I(this.o,this.j)):L(this.o,this.j))};N.prototype.j=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.A&&((this.A=c)||this.o.pause())};
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */function O(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.C=new N(a.element);return a}var P=AMP.BaseElement;O.prototype=k(P.prototype);O.prototype.constructor=O;if(r)r(O,P);else for(var Q in P)if("prototype"!=Q)if(Object.defineProperties){var R=Object.getOwnPropertyDescriptor(P,Q);R&&Object.defineProperty(O,Q,R)}else O[Q]=P[Q];O.D=P.prototype;O.prototype.preconnectCallback=function(a){var b=this.win;b=b.__AMP_TOP||(b.__AMP_TOP=b);var c=b.__AMP_SERVICES;c||(c=b.__AMP_SERVICES={});b=c.preconnect;b.obj||(b.obj=new b.ctor(b.context),b.context=null,b.resolve&&b.resolve(b.obj));b.obj.url(this.getAmpDoc(),"https://player-cdn.beachfrontmedia.com",a)};O.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};O.prototype.buildCallback=function(){this.element.classList.add("i-amphtml-media-component")};O.prototype.layoutCallback=function(){var a=this.element.getAttribute("data-embed-id")||"default",b=this.element.ownerDocument.createElement("iframe");b.setAttribute("frameborder","no");b.setAttribute("scrolling","no");b.setAttribute("allowfullscreen","true");b.src="https://player-cdn.beachfrontmedia.com/playerapi/v1/frame/player/?embed_id="+encodeURIComponent(a);this.applyFillContent(b);this.element.appendChild(b);this.h=b;this.C.updatePlaying(!0);return this.loadPromise(b)};O.prototype.unlayoutCallback=function(){var a=this.h;a&&(this.element.removeChild(a),this.h=null);this.C.updatePlaying(!1);return!0};O.prototype.pauseCallback=function(){this.h&&this.h.contentWindow&&this.h.contentWindow.postMessage("pause","https://player-cdn.beachfrontmedia.com")};(function(a){a.registerElement("amp-reach-player",O)})(self.AMP)}});//# sourceMappingURL=amp-reach-player-0.1.js.map