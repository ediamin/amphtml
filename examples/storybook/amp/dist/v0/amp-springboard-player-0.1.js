(self.AMP=self.AMP||[]).push({n:"amp-springboard-player",ev:"0.1",l:true,v:"2106040012000",m:0,f:function(AMP,_){"use strict";var h;function k(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var l="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function m(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}m(this);"function"===typeof Symbol&&Symbol("x");var n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n;function u(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}function v(a){var b=null,c="";var d=arguments;var e="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];d=e?e.call(d):{next:k(d)};for(e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var g=Error(e.message);for(b in e)g[b]=e[b];g.stack=f;b=g}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function w(a){var b=v.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function x(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){w(e)}}var y=self.AMP_CONFIG||{},z=("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function A(a){if(self.document&&self.document.head&&(!self.location||!z.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}y.cdnUrl||A("runtime-host");y.geoApiUrl||A("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var B=self.__AMP_LOG;function C(a,b,c){if(!B.user)throw Error("failed to call initLogConstructor");return B.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}var D={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};var H=/vertical/,I=new WeakMap,J=new WeakMap,K=new WeakMap;function L(a,b){var c=a.ownerDocument.defaultView;if(c){var d=J.get(a);d||(d=[],J.set(a,d),M(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=K.get(a);e&&setTimeout((function(){return N(1,b,e)}))}}}function O(a,b){var c=J.get(a);c&&(u(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(J.delete(a),K.delete(a),(c=a.ownerDocument.defaultView)&&M(c).unobserve(a)))}function M(a){var b=I.get(a);b||(b=new a.ResizeObserver(P),I.set(a,b));return b}function P(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=J.get(e);if(f)for(K.set(e,d),e=0;e<f.length;e++){var g=f[e];N(g.type,g.callback,d)}}}}function N(a,b,c){if(0==a)a=c.contentRect,x(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=H.test((a.ownerDocument.defaultView.getComputedStyle(a)||D)["writing-mode"]),g=a.offsetHeight,E=a.offsetWidth;if(f){var F=E;var G=g}else G=E,F=g;e={inlineSize:G,blockSize:F}}x(b,e)}}function Q(a){this.B=a;this.C=this.G=!1;this.o=this.o.bind(this)}Q.prototype.updatePlaying=function(a){a!==this.G&&((this.G=a)?(this.C=!1,L(this.B,this.o)):O(this.B,this.o))};Q.prototype.o=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.C&&((this.C=c)||this.B.pause())};function R(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function S(a){a=AMP.BaseElement.call(this,a)||this;a.D="";a.j="";a.A="";a.I="";a.F="";a.h=null;a.H=new Q(a.element);return a}var T=AMP.BaseElement;S.prototype=l(T.prototype);S.prototype.constructor=S;if(t)t(S,T);else for(var U in T)if("prototype"!=U)if(Object.defineProperties){var V=Object.getOwnPropertyDescriptor(T,U);V&&Object.defineProperty(S,U,V)}else S[U]=T[U];S.J=T.prototype;h=S.prototype;h.preconnectCallback=function(a){R(this.win).url(this.getAmpDoc(),"https://cms.springboardplatform.com",a);R(this.win).url(this.getAmpDoc(),"https://www.springboardplatform.com",a)};h.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};h.buildCallback=function(){this.element.classList.add("i-amphtml-media-component");this.D=C(this.element.getAttribute("data-mode"),"The data-mode attribute is required for <amp-springboard-player> %s",this.element);this.j=C(this.element.getAttribute("data-content-id"),"The data-content-id attribute is required for<amp-springboard-player> %s",this.element);this.A=C(this.element.getAttribute("data-domain"),"The data-domain attribute is required for <amp-springboard-player> %s",this.element);this.I=C(this.element.getAttribute("data-site-id"),"The data-site-id attribute is required for<amp-springboard-player> %s",this.element);this.F=C(this.element.getAttribute("data-player-id"),"The data-player-id attribute is required for<amp-springboard-player> %s",this.element)};h.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe"),b=this.element.getAttribute("data-items")||"10";a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.id=this.F+"_"+this.j;a.src="https://cms.springboardplatform.com/embed_iframe/"+encodeURIComponent(this.I)+"/"+encodeURIComponent(this.D)+"/"+encodeURIComponent(this.j)+"/"+encodeURIComponent(this.F)+"/"+encodeURIComponent(this.A)+"/"+encodeURIComponent(b);this.applyFillContent(a);this.h=a;this.element.appendChild(a);this.H.updatePlaying(!0);return this.loadPromise(a)};h.unlayoutCallback=function(){var a=this.h;a&&(this.element.removeChild(a),this.h=null);this.H.updatePlaying(!1);return!0};h.pauseCallback=function(){this.h&&this.h.contentWindow&&this.h.contentWindow.postMessage("ampPause","*")};h.createPlaceholderCallback=function(){var a=this.win.document.createElement("img");this.propagateAttributes(["aria-label"],a);this.applyFillContent(a);a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");a.hasAttribute("aria-label")?a.setAttribute("alt","Loading video - "+a.getAttribute("aria-label")):a.setAttribute("alt","Loading video");a.setAttribute("src","https://www.springboardplatform.com/storage/"+("playlist"==this.D?"default/snapshots/default_snapshot.png":encodeURIComponent(this.A)+"/snapshots/"+encodeURIComponent(this.j)+".jpg"));return a};(function(a){a.registerElement("amp-springboard-player",S)})(self.AMP)}});//# sourceMappingURL=amp-springboard-player-0.1.js.map