(self.AMP=self.AMP||[]).push({n:"amp-powr-player",ev:"0.1",l:true,v:"2106040012000",m:0,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function da(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}da(this);"function"===typeof Symbol&&Symbol("x");var n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var q;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;q=fa.a;break a}catch(a){}q=!1}n=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r,ha=n;function ia(){return r?r:r=Promise.resolve(void 0)}function t(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}var u=Array.isArray;function ja(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}var la=Object.prototype.toString;function v(a){return"[object Object]"===la.call(a)}function w(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function x(a){return a||{}}function y(a){return"number"===typeof a&&isFinite(a)}function ma(a){for(var b=null,c="",d=ba(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=f;b=h}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function na(a){var b=ma.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function oa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){na(e)}}function z(a){var b=!1,c=null,d=a;return function(e){for(var f=[],h=0;h<arguments.length;++h)f[h-0]=arguments[h];b||(c=d.apply(self,f),b=!0,d=null);return c}}var A=self.AMP_CONFIG||{},pa=("string"==typeof A.cdnProxyRegex?new RegExp(A.cdnProxyRegex):A.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function qa(a){if(self.document&&self.document.head&&(!self.location||!pa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}A.cdnUrl||qa("runtime-host");A.geoApiUrl||qa("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var B=self.__AMP_LOG;function C(){if(!B.user)throw Error("failed to call initLogConstructor");return B.user}function D(a,b,c){return C().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}var E,ra="Webkit webkit Moz moz ms O o".split(" "),sa={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function ta(a){var c,b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"};for(c in b){var d=a,e=b[c];var f=d.style;var h=c;if(h.startsWith("--"))f=h;else{E||(E=w());var k=E[h];if(!k){k=h;if(void 0===f[h]){var m=h;m=m.charAt(0).toUpperCase()+m.slice(1);b:{for(var l=0;l<ra.length;l++){var p=ra[l]+m;if(void 0!==f[p]){m=p;break b}}m=""}void 0!==f[m]&&(k=m)}E[h]=k}f=k}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}var ua=/vertical/,va=new WeakMap,F=new WeakMap,G=new WeakMap;function wa(a,b){var c=a.ownerDocument.defaultView;if(c){var d=F.get(a);d||(d=[],F.set(a,d),xa(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=G.get(a);e&&setTimeout((function(){return ya(1,b,e)}))}}}function za(a,b){var c=F.get(a);c&&(ja(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(F.delete(a),G.delete(a),(c=a.ownerDocument.defaultView)&&xa(c).unobserve(a)))}function xa(a){var b=va.get(a);b||(b=new a.ResizeObserver(Aa),va.set(a,b));return b}function Aa(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=F.get(e);if(f)for(G.set(e,d),e=0;e<f.length;e++){var h=f[e];ya(h.type,h.callback,d)}}}}function ya(a,b,c){if(0==a)a=c.contentRect,oa(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=ua.test((a.ownerDocument.defaultView.getComputedStyle(a)||sa)["writing-mode"]),h=a.offsetHeight,k=a.offsetWidth;if(f){var m=k;var l=h}else l=k,m=h;e={inlineSize:l,blockSize:m}}oa(b,e)}}function Ba(a){this.W=a;this.Z=this.C=!1;this.R=this.R.bind(this)}Ba.prototype.updatePlaying=function(a){a!==this.C&&((this.C=a)?(this.Z=!1,wa(this.W,this.R)):za(this.W,this.R))};Ba.prototype.R=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.Z&&((this.Z=c)||this.W.pause())};function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function Ca(a,b){var c=J(a);c=Da(c);return I(c,b)}function K(a,b){a=J(a);a=Da(a);return Ea(a,b)?I(a,b):null}function J(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Da(a){a=J(a);return a.isSingleDoc()?a.win:a}function I(a,b){Ea(a,b);a=Fa(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Fa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Ea(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var Ga={bubbles:!0,cancelable:!0};function Ha(a){a.parentElement&&a.parentElement.removeChild(a)}function Ia(a){function b(k){return k}var c=a.dataset;a={};var e,d=/^param(.+)/;for(e in c){var f=e.match(d);if(f){var h=f[1][0].toLowerCase()+f[1].substr(1);a[b(h)]=c[e]}}return a}function L(a,b,c){c=c||{};var d=a.ownerDocument.createEvent("Event");d.data=c;d.initEvent(b,Ga.bubbles,Ga.cancelable);a.dispatchEvent(d)}function Ja(a){a.signals().signal("user-interacted")}x({c:!0,v:!0,a:!0,ad:!0});function Ka(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),e=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return e+=c[1]?"#"+c[1]:""}function La(a){var c,b=[];for(c in a){var d=a[c];if(null!=d)if(u(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return b.join("&")}var M;function Ma(a){a=a.ownerDocument||a;M&&M.ownerDocument===a||(M=a.createElement("div"));return Na}function Na(a){var b=M;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}function Oa(a){try{return JSON.parse(a)}catch(b){return null}}var Pa=["<iframe frameborder=0 allowfullscreen></iframe>"];function Qa(a,b){var c=Ra;if(null==c[b])return!1;var d=c[b];(u(d)?d:[d]).forEach((function(e){L(a,e)}));return!0}function Sa(a,b){var c=a.element,d=Ma(c)(Pa);a.propagateAttributes(["referrerpolicy"],d);d.src=K(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d}var N;function O(a,b,c){function d(k){try{return f(k)}catch(p){var m,l;null==(l=(m=self).__AMP_REPORT_ERROR)||l.call(m,p);throw p}}var e=a,f=c,h=Ta();e.addEventListener(b,d,h?void 0:!1);return function(){var k;null==(k=e)||k.removeEventListener(b,d,h?void 0:!1);d=e=f=null}}function Ta(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N}function Ua(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return O(a,b,c)}function Va(a,b){var c=b,d=O(a,"loadedmetadata",(function(e){try{c(e)}finally{c=null,d()}}));return d}var Wa={title:"",artist:"",album:"",artwork:[{src:""}]};function Xa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=Oa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function Ya(a,b){var c=K(a,"url");if(b&&b.artwork){var d=b.artwork;u(d);d.forEach((function(e){e&&(e=v(e)?e.src:e,D(c.isProtocolValid(e)))}))}}function Za(){this.B=null}g=Za.prototype;g.add=function(a){var b=this;this.B||(this.B=[]);this.B.push(a);return function(){b.remove(a)}};g.remove=function(a){if(this.B){var b=this.B;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};g.removeAll=function(){this.B&&(this.B.length=0)};g.fire=function(a){if(this.B)for(var b=ba(this.B),c=b.next();!c.done;c=b.next())c=c.value,c(a)};g.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.B)?void 0:a.length)?b:0};function Q(){this.P=!1;this.ia=new Za}Q.prototype.onSessionEnd=function(a){this.ia.add(a)};Q.prototype.beginSession=function(){this.P=!0};Q.prototype.endSession=function(){this.P&&this.ia.fire();this.P=!1};Q.prototype.isSessionActive=function(){return this.P};function $a(a,b,c){var d=c=void 0===c?{}:c,e=d.needsRootBounds;return new b.IntersectionObserver(a,{threshold:d.threshold,root:b.parent&&b.parent!=b&&e?b.document:void 0})}new WeakMap;new WeakMap;function ab(a){var b=a.document.createElement("video");b.setAttribute("muted","");b.setAttribute("playsinline","");b.setAttribute("webkit-playsinline","");b.setAttribute("height","0");b.setAttribute("width","0");b.muted=!0;b.playsInline=!0;b.playsinline=!0;b.webkitPlaysinline=!0;ta(b);new Promise((function(c){return c(b.play())})).catch((function(){}));return Promise.resolve(!b.paused)}function bb(a){null==a.__AMP_AUTOPLAY&&(a.__AMP_AUTOPLAY=ab(a));return a.__AMP_AUTOPLAY}function cb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}var R,db;function eb(a){R||(R=new WeakMap,db=new WeakMap);var b=db.get(a);b||(b=$a((function(c){for(var d=new Set,e=c.length-1;0<=e;e--){var f=c[e].target;d.has(f)||(d.add(f),b.unobserve(f),R.get(f).resolve(c[e]),R.delete(f))}}),a,{needsRootBounds:!0}),db.set(a,b));return b}function fb(a){if(R&&R.has(a))return R.get(a).promise;eb(a.ownerDocument.defaultView).observe(a);var b=new t;R.set(a,b);return b.promise}var gb=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],hb=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function ib(a,b){var c=Ma(a)(gb);b&&b.title&&c.setAttribute("aria-label",b.title);return c}function jb(a){var b=Ma(a)(hb),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,f=0;f<e.length;f++)e[f].classList.add("amp-video-eq-"+(a+1)+"-"+(f+1));b.appendChild(d)}Ha(c);return b}function kb(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=z((function(){var c=b.ampdoc.getHeadNode(),d=c.__AMP_CSS_TR;var e=d?d(".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"):".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";(d=c.__AMP_CSS_SM)||(d=c.__AMP_CSS_SM=w());var f=cb(c,d,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(c.ownerDocument||c).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=cb(c,d,"amp-runtime"),(e=void 0===e?null:e)?c.insertBefore(f,e.nextSibling):c.insertBefore(f,c.firstChild),d["amp-extension=amp-video-autoplay"]=f)}));this.aa=this.M=this.o=null;this.T=I(a.win,"timer");this.ra=K(a.getHeadNode(),"action");this.ha=function(){for(var c=0;c<b.o.length;c++){var d=b.o[c];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();y(e)&&y(f)&&0<f&&(e=Ua(b.ampdoc.win,"video-manager.timeUpdate",x({time:e,percent:e/f})),b.ra.trigger(d.video.element,"timeUpdate",e,1))}}b.T.delay(b.ha,1e3)};this.Y=z((function(){return new T(b.ampdoc,b)}));this.T.delay(this.ha,1e3)}g=kb.prototype;g.dispose=function(){this.Y().dispose();this.M.disconnect();this.M=null;if(this.o)for(var a=0;a<this.o.length;a++)this.o[a].dispose()};g.register=function(a){var b=this;lb(a);if(a.supportsPlatform()&&!U(this,a)){this.M||(this.M=$a((function(e){return e.forEach((function(f){var h=f.isIntersecting;U(b,f.target).updateVisibility(h)}))}),this.ampdoc.win,{threshold:.5}));this.M.observe(a.element);P(a.element,"reloaded",(function(){return c.videoLoaded()}));this.o=this.o||[];var c=new mb(this,a);this.o.push(c);var d=c.video.element;L(d,"registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};function lb(a){function b(){return a.fullscreenEnter()}function c(d,e){a.registerAction(d,(function(){Ja(a);e()}),1)}c("play",(function(){return a.play(!1)}));c("pause",(function(){return a.pause()}));c("mute",(function(){return a.mute()}));c("unmute",(function(){return a.unmute()}));c("fullscreenenter",b);c("fullscreen",b)}function U(a,b){if(nb(a.aa,b))return a.aa;for(var c=0;a.o&&c<a.o.length;c++){var d=a.o[c];if(nb(d,b))return a.aa=d}return null}g.registerForAutoFullscreen=function(a){this.Y().register(a)};g.xa=function(){return this.Y()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=C().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():ia()).then((function(e){return e?e[b]:""}))};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.o.forEach((function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()}))};function nb(a,b){return!!a&&(a.video===b||a.video.element===b)}function mb(a,b){var c=this;this.I=a;this.j=a.ampdoc;this.video=b;this.ba=!0;this.H=this.L=this.C=this.na=!1;this.V=new Q;this.V.onSessionEnd((function(){return S(c,"video-session")}));this.J=new Q;this.J.onSessionEnd((function(){return S(c,"video-session-visible")}));this.ka=z((function(){return new V(c.j.win,c)}));this.ca=this.pa=!1;this.$=null;this.la=this.F=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.I.installAutoplayStyles();this.D=Wa;this.va=function(){c.video.play(!1)};this.ua=function(){c.video.pause()};P(b.element,"load",(function(){return c.videoLoaded()}));P(b.element,"pause",(function(){S(c,"video-pause");c.C=!1;c.ca?c.ca=!1:c.V.endSession()}));P(b.element,"play",(function(){c.la=!0;S(c,"video-play")}));P(b.element,"playing",(function(){c.C=!0;"playing_manual"==c.getPlayingState()&&(c.ja(),c.I.pauseOtherVideos(c));var d=c.video,e=d.element;if(!d.preimplementsMediaSessionAPI()&&!e.classList.contains("i-amphtml-disable-mediasession")){Ya(e,c.D);d=c.j.win;e=c.D;var f=c.va,h=c.ua,k=d.navigator;"mediaSession"in k&&d.MediaMetadata&&(k.mediaSession.metadata=new d.MediaMetadata(Wa),k.mediaSession.metadata=new d.MediaMetadata(e),k.mediaSession.setActionHandler("play",f),k.mediaSession.setActionHandler("pause",h))}c.V.beginSession();c.H&&c.J.beginSession();c.la||S(c,"video-play")}));P(b.element,"muted",(function(){return c.F=!0}));P(b.element,"unmuted",(function(){c.F=!1;c.I.pauseOtherVideos(c)}));P(b.element,"amp:video:tick",(function(d){d=d.data;var e=d.eventType;e&&ob(c,e,d.vars)}));P(b.element,"ended",(function(){c.L=!1;S(c,"video-ended")}));P(b.element,"ad_start",(function(){c.L=!0;S(c,"video-ad-start")}));P(b.element,"ad_end",(function(){c.L=!1;S(c,"video-ad-end")}));b.signals().whenSignal("registered").then((function(){var d=c.video.element;(c.video.preimplementsAutoFullscreen()||!d.hasAttribute("rotate-to-fullscreen")?0:D(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",d))&&c.I.registerForAutoFullscreen(c);c.hasAutoplay&&pb(c)}));this.ja=z((function(){var d=Ua(c.j.win,"firstPlay",x({})),e=c.video.element;K(e,"action").trigger(e,"firstPlay",d,1)}));qb(this)}g=mb.prototype;g.dispose=function(){this.ka().stop()};function ob(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach((function(f){e["custom_"+f]=c[f]}));S(a,"video-hosted-custom",e)}function qb(a){a.video.signals().whenSignal("playback-delegated").then((function(){a.ba=!1;a.C&&a.video.pause()}))}g.isMuted=function(){return this.F};g.isPlaybackManaged=function(){return this.ba};g.videoLoaded=function(){this.na=!0;this.$=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.D=w(this.video.getMetadata()));var a=this.j.win.document;if(!this.D.artwork||0==this.D.artwork.length){var b;(b=Xa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&(this.D.artwork=[{src:b}])}!this.D.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.$.getAttribute("title")||this.$.getAttribute("aria-label")||a.title)&&(this.D.title=a)}this.ka().start();this.H&&rb(this)};function rb(a){a.j.isVisible()&&bb(a.j.win).then((function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.ba&&(a.H?(a.J.beginSession(),a.video.play(!0),a.pa=!0):(a.C&&a.J.endSession(),a.video.pause(),a.ca=!0)):a.H?a.J.beginSession():a.C&&a.J.endSession()}))}function pb(a){a.video.isInteractive()&&a.video.hideControls();bb(a.j.win).then((function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),sb(a))}))}function sb(a){function b(l){d.mutateElementSkipRemeasure((function(){h.forEach((function(p){var ka=l;void 0===ka&&(ka=p.hasAttribute("hidden"));ka?p.removeAttribute("hidden"):p.setAttribute("hidden","")}))}))}function c(l){d.mutateElementSkipRemeasure((function(){return f.classList.toggle("amp-video-eq-play",l)}))}var d=a.video,e=a.video.element;if(!e.hasAttribute("noaudio")&&!e.signals().get("user-interacted")){var f=jb(e),h=[f],k=[P(e,"pause",(function(){return c(!1)})),P(e,"playing",(function(){return c(!0)})),P(e,"ad_start",(function(){b(!1);d.showControls()})),P(e,"ad_end",(function(){b(!0);d.hideControls()})),P(e,"unmuted",(function(){return Ja(d)}))];if(d.isInteractive()){d.hideControls();var m=ib(e,a.D);h.push(m);k.push(P(m,"click",(function(){return Ja(d)})))}d.mutateElementSkipRemeasure((function(){h.forEach((function(l){e.appendChild(l)}))}));a.L&&b(!1);d.signals().whenSignal("user-interacted").then((function(){a.ja();d.isInteractive()&&d.showControls();d.unmute();k.forEach((function(l){l()}));d.mutateElementSkipRemeasure((function(){h.forEach((function(l){Ha(l)}))}))}))}}g.updateVisibility=function(a){var b=this.H;this.H=a;a!=b&&this.na&&rb(this)};g.getPlayingState=function(){return this.C?this.C&&this.pa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.L};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};g.getAnalyticsDetails=function(){var a=this,b=this.video;return Promise.all([bb(this.j.win),fb(b.element)]).then((function(c){var d=c[0],e=c[1].boundingClientRect,f=e.height;e=e.width;var h=a.hasAutoplay&&d,k=b.getPlayedRanges(),m=k.reduce((function(l,p){return l+p[1]-p[0]}),0);return{autoplay:h,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:f,id:b.element.id,muted:a.F,playedTotal:m,playedRangesJson:JSON.stringify(k),state:a.getPlayingState(),width:e}}))};function T(a,b){var c=this;this.I=b;this.j=a;this.G=this.K=null;this.o=[];this.A=[];this.N=function(){return tb(c)};this.ta=function(d){return"playing_manual"==c.I.getPlayingState(d)};this.sa=function(d,e){var f=d.boundingClientRect;var h=e.boundingClientRect;d=d.intersectionRatio-e.intersectionRatio;.1<Math.abs(d)?f=d:(e=Ca(c.j,"viewport"),d=ub(e,f),e=ub(e,h),f=d<e||d>e?d-e:f.top-h.top);return f};vb(this);wb(this)}T.prototype.dispose=function(){this.A.forEach((function(a){return a()}));this.A.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=H(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.o.push(a),O(b,"pause",this.N),O(b,"playing",this.N),O(b,"ended",this.N),a.signals().whenSignal("user-interacted").then(this.N),tb(this))};function wb(a){function b(){a.K=null}var c=a.j.getRootNode();a.A.push(O(c,"webkitfullscreenchange",b),O(c,"mozfullscreenchange",b),O(c,"fullscreenchange",b),O(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};function vb(a){var b=a.j.win,c=b.screen;c&&"orientation"in c&&a.A.push(P(c.orientation,"change",(function(){return xb(a)})));a.A.push(P(b,"orientationchange",(function(){return xb(a)})))}function xb(a){a.isInLandscape()?null!=a.G&&yb(a,a.G):a.K&&zb(a,a.K)}function yb(a,b){var c=H(a.j.win,"platform");a.K=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():Ab(a,b).then((function(){return b.fullscreenEnter()}))}function zb(a,b){a.K=null;Ab(a,b,"center").then((function(){return b.fullscreenExit()}))}function Ab(a,b,c){var d=c=void 0===c?null:c,e=b.element,f=Ca(a.j,"viewport");return I(a.j.win,"timer").promise(330).then((function(){return fb(e)})).then((function(h){var k=h.boundingClientRect;h=k.bottom;k=k.top;var m=f.getSize().height;return 0<=k&&h<=m?ia():f.animateScrollIntoView(e,d?d:h>m?"bottom":"top")}))}function tb(a){if(a.isInLandscape())return Promise.resolve(a.G);a.G=null;var b=a.o.filter(a.ta).map((function(c){return fb(c.element)}));return Promise.all(b).then((function(c){var d=c.sort(a.sa)[0];return d&&.5<d.intersectionRatio?d.target.getImpl().then((function(e){return a.G=e})):a.G}))}function ub(a,b){b=b.top+b.height/2;var c=a.getSize().height/2;return Math.abs(b-c)}function V(a,b){this.T=I(a,"timer");this.O=b;this.A=null;this.U=this.ma=0}V.prototype.start=function(){var a=this,b=this.O.video.element;this.stop();this.A=this.A||[];Bb(this)?Cb(this,this.U):this.A.push(Va(b,(function(){Bb(a)&&Cb(a,a.U)})));this.A.push(P(b,"ended",(function(){Bb(a)&&Db(a,100)})))};V.prototype.stop=function(){if(this.A){for(;0<this.A.length;)this.A.pop()();this.U++}};function Bb(a){var b=a.O.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.wa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.wa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];C().warn.apply(C(),["video-manager"].concat(b))};function Cb(a,b){if(b==a.U){var c=a.O,d=a.T,e=c.video,f=function(){return Cb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4e3),k=e.getCurrentTime()/c*100,m=5*Math.floor(k/5);y(m);Db(a,m);d.delay(f,h)}else d.delay(f,500)}}function Db(a,b){0>=b||a.ma==b||(a.ma=b,S(a.O,"video-percentage-played",{normalizedPercentage:b.toString()}))}function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then((function(e){c&&Object.assign(e,c);L(d.element,b,e)}))}var Ra={ready:"load",playing:"playing",pause:"pause",ended:"ended","ads-ad-started":"ad_start","ads-ad-ended":"ad_end"};function W(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.fa=!1;a.F=!1;a.X=!1;a.S=null;a.ea=null;a.ga=null;a.da=null;a.qa=null;a.oa=new Ba(a.element);return a}var X=AMP.BaseElement;W.prototype=ca(X.prototype);W.prototype.constructor=W;if(ha)ha(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Eb=Object.getOwnPropertyDescriptor(X,Y);Eb&&Object.defineProperty(W,Y,Eb)}else W[Y]=X[Y];W.ya=X.prototype;g=W.prototype;g.preconnectCallback=function(){H(this.win,"preconnect").url(this.getAmpDoc(),"https://player.powr.com")};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.buildCallback=function(){this.qa=K(this.element,"url-replace");var a=new t;this.S=a.promise;this.ea=a.resolve};g.layoutCallback=function(){var a=this,b=Sa(this,Fb(this));this.h=b;this.ga=P(this.win,"message",(function(c){var d=a.element;if(c.source==a.h.contentWindow&&(c=c.data)&&(v(c)||c.startsWith("{"))&&(c=v(c)?c:Oa(c),null!=c)){var e=c.event;if(e){if("ready"===e){a.X=!0;var f=a.element,h=J(f),k=Da(h),m=Fa(k),l=m["video-manager"];l||(l=m["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});l.ctor||(l.ctor=kb,l.context=h,l.sharedInstance=!1,l.resolve&&I(k,"video-manager"));Ca(f,"video-manager").register(a);a.ea(a.h);if(B.dev)f=B.dev;else throw Error("failed to call initLogConstructor");f.info("amp-powr-player","Player %s ready. Powr Player version: %s IFrame Support version: %s",a.da,c.powrVersion,c.iframeVersion)}"playing"===e&&(a.fa=!0);"pause"===e&&(a.fa=!1);Qa(d,e)||"volumechange"!==e||(c=c.muted,null!=c&&a.F!=c&&(a.F=c,L(d,a.F?"muted":"unmuted")))}}}));this.oa.updatePlaying(!0);return this.loadPromise(b).then((function(){return a.S}))};function Z(a,b,c){a.S.then((function(){a.h&&a.h.contentWindow&&a.h.contentWindow.postMessage(JSON.stringify(x({command:b,args:c})),"https://player.powr.com")}))}function Fb(a){var b=a.element,c=D(b.getAttribute("data-account"),"The data-account attribute is required for <amp-powr-player> %s",b);a.da=D(b.getAttribute("data-player"),"The data-player attribute is required for <amp-powr-player> %s",b);var d=b.getAttribute("data-video"),e=b.getAttribute("data-terms");D(d||e,"The data-video or data-terms attribute is required for <amp-powr-player> %s",b);var f=x({account:c,player:a.da});d&&(f.video=d);e&&(f.terms=e);d=Ka("https://player.powr.com/iframe.html",La(f));var h=b.getAttribute("data-referrer");h&&b.setAttribute("data-param-referrer",a.qa.expandUrlSync(h));b.setAttribute("data-param-playsinline","true");a=Ia(b);return Ka(d,La(a))}g.mutatedAttributesCallback=function(a){var b=a["data-player"]||a["data-player-id"],c=a["data-video"];void 0===a["data-account"]&&void 0===b&&void 0===c||!this.h||(this.h.src=Fb(this))};g.pauseCallback=function(){this.h&&this.h.contentWindow&&this.X&&this.fa&&this.pause()};g.unlayoutOnPause=function(){return this.X?!1:!0};g.unlayoutCallback=function(){this.h&&(Ha(this.h),this.h=null);this.ga&&this.ga();var a=new t;this.S=a.promise;this.ea=a.resolve;this.oa.updatePlaying(!1);return!0};g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.play=function(){Z(this,"play")};g.pause=function(){Z(this,"pause")};g.mute=function(){Z(this,"muted",!0)};g.unmute=function(){Z(this,"muted",!1)};g.showControls=function(){Z(this,"controls",!0)};g.hideControls=function(){Z(this,"controls",!1)};g.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};g.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};g.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.preimplementsAutoFullscreen=function(){return!1};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!0};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 1};g.getPlayedRanges=function(){return[]};g.seekTo=function(){this.user().error("amp-powr-player","`seekTo` not supported.")};(function(a){a.registerElement("amp-powr-player",W)})(self.AMP)}});//# sourceMappingURL=amp-powr-player-0.1.js.map