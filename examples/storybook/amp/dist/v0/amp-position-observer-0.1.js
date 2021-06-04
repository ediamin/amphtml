(self.AMP=self.AMP||[]).push({n:"amp-position-observer",ev:"0.1",l:true,v:"2106040012000",m:0,f:function(AMP,_){"use strict";var k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function l(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],d=0;d<b.length;++d){var c=b[d];if(c&&c.Math==Math)return}(function(){throw Error("Cannot find global object")})()}l(this);"function"===typeof Symbol&&Symbol("x");var m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var p={a:!0},r={};try{r.__proto__=p;n=r.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=m;function u(a){return a||{}}function v(a,b){function d(){c=0;var g=500-(a.Date.now()-f);if(0<g)c=a.setTimeout(d,g);else{var h=e;e=null;b.apply(null,h)}}var c=0,f=0,e=null;return function(g){for(var h=[],q=0;q<arguments.length;++q)h[q-0]=arguments[q];f=a.Date.now();e=h;c||(c=a.setTimeout(d,500))}}var w=self.AMP_CONFIG||{},x=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function y(a){if(self.document&&self.document.head&&(!self.location||!x.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}w.cdnUrl||y("runtime-host");w.geoApiUrl||y("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function A(){if(!z.user)throw Error("failed to call initLogConstructor");return z.user}function B(a,b,d){return A().assert(a,b,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function aa(a){var b=C,d=D(a),c=E(d),f=F(c),e=f["position-observer"];e||(e=f["position-observer"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});e.ctor||(e.ctor=b,e.context=d,e.sharedInstance=!1,e.resolve&&G(c,"position-observer"))}function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function I(a,b){var d=D(a);d=E(d);return G(d,b)}function ba(a){a=D(a);a=E(a);return J(a,"action")?G(a,"action"):null}function D(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function E(a){a=D(a);return a.isSingleDoc()?a.win:a}function G(a,b){J(a,b);a=F(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function F(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function J(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function K(a,b,d,c){return{left:a,top:b,width:d,height:c,bottom:b+c,right:a+d,x:a,y:b}}function L(a,b){return a.top<b.top?"top":a.bottom>b.bottom?"bottom":"inside"}function M(a,b){return a&&b?a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height:!1}function N(a,b,d,c){this.element=b;this.T=c;this.fidelity=d;this.turn=0==d?Math.floor(4*Math.random()):0;this.F=null;this.j=I(a,"viewport")}N.prototype.update=function(a){var b=this;if(!a){if(0!=this.turn){this.turn--;return}0==this.fidelity&&(this.turn=4)}var d=this.j.getSize(),c=K(0,0,d.width,d.height);this.j.getClientRectAsync(this.element).then((function(f){var e={positionRect:f,viewportRect:c,relativePos:null},g=b.F;if(!(g&&M(g.positionRect,e.positionRect)&&M(g.viewportRect,e.viewportRect))){g=e.positionRect;e.relativePos=L(g,e.viewportRect);var h=e.viewportRect;g.top<=h.bottom&&h.top<=g.bottom&&g.left<=h.right&&h.left<=g.right?(b.F=e,b.T(e)):b.F&&(b.F=null,e.positionRect=null,b.T(e))}}))};function O(a){B(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a),"Invalid length value: %s",a);return a}function P(a,b,d){var c={detail:d};Object.assign(c,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,c);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!c.bubbles,!!c.cancelable,d);return a}function C(a){var b=this;this.Y=a;this.X=a.win;this.h=[];this.ba=H(this.X,"vsync");this.j=I(a,"viewport");this.K=[];this.N=this.P=this.O=!1;this.Z=v(this.X,(function(){b.O=!1}))}C.prototype.observe=function(a,b,d){var c=this,f=new N(this.Y,a,b,d);this.h.push(f);this.N||ca(this);f.update();return function(){for(var e=0;e<c.h.length;e++)if(c.h[e]==f){c.h.splice(e,1);0==c.h.length&&Q(c);break}}};C.prototype.unobserve=function(a){for(var b=0;b<this.h.length;b++)if(this.h[b].element==a){this.h.splice(b,1);0==this.h.length&&Q(this);return}if(z.dev)a=z.dev;else throw Error("failed to call initLogConstructor");a.error("POSITION_OBSERVER","cannot unobserve unobserved element")};function ca(a){a.N=!0;a.K.push(a.j.onScroll((function(){a.Z();a.O=!0;a.P||R(a)})));a.K.push(a.j.onResize((function(){a.updateAllEntries(!0)})))}function Q(a){for(a.N=!1;a.K.length;)a.K.pop()()}C.prototype.updateAllEntries=function(a){for(var b=0;b<this.h.length;b++)this.h[b].update(a)};function R(a){a.updateAllEntries();a.P=!0;a.O?a.ba.measure((function(){R(a)})):a.P=!1}function S(a){a=AMP.BaseElement.call(this,a)||this;a.C=null;a.A=null;a.j=null;a.o=!1;a.J=0;a.B=0;a.R="0";a.M="0";a.G=0;a.V=0;a.L=null;a.I=null;a.D=null;a.H=0;a.U=0;a.W=!1;a.S=!1;return a}var T=AMP.BaseElement;S.prototype=k(T.prototype);S.prototype.constructor=S;if(t)t(S,T);else for(var U in T)if("prototype"!=U)if(Object.defineProperties){var V=Object.getOwnPropertyDescriptor(T,U);V&&Object.defineProperty(S,U,V)}else S[U]=T[U];S.da=T.prototype;S.prototype.buildCallback=function(){this.getAmpDoc().whenFirstVisible().then(this.$.bind(this));this.W=this.element.hasAttribute("once")};S.prototype.$=function(){var a=this;da(this);this.C=ba(this.element);this.j=I(this.element,"viewport");this.A||(aa(this.getAmpDoc()),this.A=I(this.element,"position-observer"));this.getAmpDoc().whenReady().then((function(){var b=W(a);a.A.observe(b,1,a.aa.bind(a))}))};function X(a){var b=a.j.getScrollTop(),d=u({"start-scroll-offset":b,"end-scroll-offset":b+a.U,"initial-inview-percent":a.H}),c=P(a.win,"amp-position-observer.scroll",u({percent:a.H,positionObserverData:d}));a.C.trigger(a.element,"scroll",c,1)}S.prototype.aa=function(a){if(!this.W||!this.S){var b=this.o,d=this.L&&this.L.height;this.D||(this.D=a.viewportRect.height);var c=this.D-a.viewportRect.height,f=0;150>Math.abs(c)?f=c:this.D=null;a.viewportRect=K(a.viewportRect.left,a.viewportRect.top,a.viewportRect.width,a.viewportRect.height+f);this.L=a.viewportRect;d!=a.viewportRect.height&&(this.G=Y(this,this.R),this.V=Y(this,this.M));c=a.viewportRect;c=K(c.left,c.top+this.G,c.width,c.height-this.V-this.G);f=a.positionRect;var e;if(f){var g=e=L(f,c);if("inside"==g)this.o=!0;else{var h=f.height*("top"==g?this.J:this.B);this.o="bottom"==g?f.top<=c.bottom-h:f.bottom>=c.top+h}}else this.o=!1,e=a.relativePos;b&&!this.o&&(this.H="bottom"==e?0:1,X(this),g=P(this.win,"amp-position-observer.exit",u({})),this.C.trigger(this.element,"exit",g,1),this.S=!0);!b&&this.o&&(g=P(this.win,"amp-position-observer.enter",u({})),this.C.trigger(this.element,"enter",g,1));this.o&&(f&&(g=c.height+f.height-(f.height*this.B+f.height*this.J),c=Math.abs(f.top-this.G-(c.height-f.height*this.B)),this.H=c/g,this.U=g-c),X(this))}};function da(a){var b=a.element.getAttribute("intersection-ratios");if(b){var d=b.trim().split(" ");a.J=Z(d[0]);a.B=a.J;d[1]&&(a.B=Z(d[1]))}var c=a.element.getAttribute("viewport-margins");c&&(c=c.trim().split(" "),a.R=c[0],a.M=a.R,c[1]&&(a.M=c[1]));a.I=a.element.getAttribute("target")}function W(a){var b=a.I?A().assertElement(a.win.document.getElementById(a.I),"No element found with id:"+a.I):a.element.parentNode;a.win.document.body===b&&(b=a.win.document.documentElement);return b}function Y(a,b){b="number"==typeof b?b+"px":b&&/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(b)?/^\d+(\.\d+)?$/.test(b)?b+"px":b:void 0;b=O(b);var d=b;O(d);d=B(/[a-z]+/i.exec(d),"Failed to read units from %s",d)[0];var c=parseFloat(b);c="number"===typeof c&&isFinite(c)?c:void 0;if(!c)return 0;B("px"==d||"vh"==d,"Only pixel or vh are valid as units for exclusion margins: "+b);"vh"==d&&(c=c/100*a.L.height);return c}function Z(a){var b=parseFloat(a);B(0<=b&&1>=b,"Ratios must be a decimal between 0 and 1: "+a);return b}S.prototype.ca=function(){if(this.A){var a=W(this);this.A.unobserve(a);this.A=null}};(function(a){a.registerElement("amp-position-observer",S)})(self.AMP)}});//# sourceMappingURL=amp-position-observer-0.1.js.map