(self.AMP=self.AMP||[]).push({n:"amp-nexxtv-player",ev:"0.1",l:true,v:"2106040012000",m:0,f:function(AMP,_){"use strict";var g;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function da(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}da(this);"function"===typeof Symbol&&Symbol("x");var n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var r;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;r=fa.a;break a}catch(a){}r=!1}n=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t,ha=n;function ia(){return t?t:t=Promise.resolve(void 0)}function u(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}var ja=Array.isArray;function ka(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)}var la=Object.prototype.toString;function v(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function w(a){return a||{}}function ma(a){return"number"===typeof a&&isFinite(a)}function na(a){for(var b=null,c="",d=ba(arguments),e=d.next();!e.done;e=d.next())if(e=e.value,e instanceof Error&&!b){var f=b=void 0;if(null==(f=Object.getOwnPropertyDescriptor(e,"message"))?0:f.writable)b=e;else{f=e.stack;var k=Error(e.message);for(b in e)k[b]=e[b];k.stack=f;b=k}}else c&&(c+=" "),c+=e;b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function oa(a){var b=na.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}function pa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,c)}catch(e){oa(e)}}function x(a){var b=!1,c=null,d=a;return function(e){for(var f=[],k=0;k<arguments.length;++k)f[k-0]=arguments[k];b||(c=d.apply(self,f),b=!0,d=null);return c}}var y=self.AMP_CONFIG||{},ra=("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function sa(a){if(self.document&&self.document.head&&(!self.location||!ra.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}y.cdnUrl||sa("runtime-host");y.geoApiUrl||sa("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function A(){if(!z.user)throw Error("failed to call initLogConstructor");return z.user}function B(a,b,c){return A().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}var C,ta="Webkit webkit Moz moz ms O o".split(" "),ua={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function va(a){var c,b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"};for(c in b){var d=a,e=b[c];var f=d.style;var k=c;if(k.startsWith("--"))f=k;else{C||(C=v());var l=C[k];if(!l){l=k;if(void 0===f[k]){var h=k;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var m=0;m<ta.length;m++){var q=ta[m]+h;if(void 0!==f[q]){h=q;break b}}h=""}void 0!==f[h]&&(l=h)}C[k]=l}f=l}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}var wa=/vertical/,xa=new WeakMap,D=new WeakMap,ya=new WeakMap;function za(a,b){var c=a.ownerDocument.defaultView;if(c){var d=D.get(a);d||(d=[],D.set(a,d),Aa(c).observe(a));if(!d.some((function(f){return f.callback===b&&1===f.type}))){d.push({type:1,callback:b});var e=ya.get(a);e&&setTimeout((function(){return Ba(1,b,e)}))}}}function Ca(a,b){var c=D.get(a);c&&(ka(c,(function(d){return d.callback===b&&1===d.type})),0==c.length&&(D.delete(a),ya.delete(a),(c=a.ownerDocument.defaultView)&&Aa(c).unobserve(a)))}function Aa(a){var b=xa.get(a);b||(b=new a.ResizeObserver(Da),xa.set(a,b));return b}function Da(a){for(var b=new Set,c=a.length-1;0<=c;c--){var d=a[c],e=d.target;if(!b.has(e)){b.add(e);var f=D.get(e);if(f)for(ya.set(e,d),e=0;e<f.length;e++){var k=f[e];Ba(k.type,k.callback,d)}}}}function Ba(a,b,c){if(0==a)a=c.contentRect,pa(b,{width:a.width,height:a.height});else if(1==a){var d=c.borderBoxSize;if(d)var e=0<d.length?d[0]:{inlineSize:0,blockSize:0};else{a=c.target;var f=wa.test((a.ownerDocument.defaultView.getComputedStyle(a)||ua)["writing-mode"]),k=a.offsetHeight,l=a.offsetWidth;if(f){var h=l;var m=k}else m=l,h=k;e={inlineSize:m,blockSize:h}}pa(b,e)}}function Ea(a){this.X=a;this.Z=this.C=!1;this.S=this.S.bind(this)}Ea.prototype.updatePlaying=function(a){a!==this.C&&((this.C=a)?(this.Z=!1,za(this.X,this.S)):Ca(this.X,this.S))};Ea.prototype.S=function(a){var b=a.blockSize,c=0<a.inlineSize&&0<b;c!==this.Z&&((this.Z=c)||this.X.pause())};function E(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function Fa(a,b){var c=G(a);c=H(c);return F(c,b)}function J(a,b){a=G(a);a=H(a);return Ga(a,b)?F(a,b):null}function G(a){return a.nodeType?E((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}function F(a,b){Ga(a,b);a=K(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Ha(a){var b=K(a).consentPolicyManager;if(b){if(b.promise)return b.promise;F(a,"consentPolicyManager");return b.promise=Promise.resolve(b.obj)}return null}function K(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Ga(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function Ia(){var a=new u,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var Ja={bubbles:!0,cancelable:!0};function Ka(a){a.parentElement&&a.parentElement.removeChild(a)}function La(a,b,c){c=c||{};var d=a.ownerDocument.createEvent("Event");d.data=c;d.initEvent(b,Ja.bubbles,Ja.cancelable);a.dispatchEvent(d)}function Ma(a){var b=Ha(H(a));if(b)return b;var c=G(a);return c.whenExtensionsKnown().then((function(){var d=c.getExtensionVersion("amp-consent");return d?E(c.win,"extensions").waitForExtension("amp-consent",d):null})).then((function(d){if(d){var e=H(a);var f=Ha(e);f?e=f:(e=K(e),e.consentPolicyManager=Ia(),e=e.consentPolicyManager.promise)}else e=null;return e}))}function Na(a){a.signals().signal("user-interacted")}function L(){this.wa=100;this.V=this.fa=0;this.N=v()}L.prototype.has=function(a){return!!this.N[a]};L.prototype.get=function(a){var b=this.N[a];if(b)return b.access=++this.V,b.payload};L.prototype.put=function(a,b){this.has(a)||this.fa++;this.N[a]={payload:b,access:this.V};if(!(this.fa<=this.wa)){a=this.N;var d,c=this.V+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.fa--)}};w({c:!0,v:!0,a:!0,ad:!0});var Oa,Pa;var M;function Qa(a){a=a.ownerDocument||a;M&&M.ownerDocument===a||(M=a.createElement("div"));return Ra}function Ra(a){var b=M;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}function Sa(a){try{return JSON.parse(a)}catch(b){return null}}var Ta=["<iframe frameborder=0 allowfullscreen></iframe>"];function Ua(a,b){var c={ready:"load",play:"playing",pause:"pause",mute:"muted",unmute:"unmuted"};if(null!=c[b]){var d=c[b];(ja(d)?d:[d]).forEach((function(e){La(a,e)}))}}function Va(a,b){var c=a.element,d=Qa(c)(Ta);a.propagateAttributes(["referrerpolicy"],d);d.src=J(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d}function Wa(a,b){var c=void 0===b?"default":b;return Ma(a).then((function(d){return d?d.getConsentStringInfo(c):null}))}var N;function O(a,b,c){function d(l){try{return f(l)}catch(q){var h,m;null==(m=(h=self).__AMP_REPORT_ERROR)||m.call(h,q);throw q}}var e=a,f=c,k=Xa();e.addEventListener(b,d,k?void 0:!1);return function(){var l;null==(l=e)||l.removeEventListener(b,d,k?void 0:!1);d=e=f=null}}function Xa(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N}function Ya(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return O(a,b,c)}function Za(a,b){var c=b,d=O(a,"loadedmetadata",(function(e){try{c(e)}finally{c=null,d()}}));return d}var $a={title:"",artist:"",album:"",artwork:[{src:""}]};function ab(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=Sa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function bb(a,b){var c=J(a,"url");if(b&&b.artwork){var d=b.artwork;ja(d);d.forEach((function(e){e&&(e="[object Object]"===la.call(e)?e.src:e,B(c.isProtocolValid(e)))}))}}function cb(){this.B=null}g=cb.prototype;g.add=function(a){var b=this;this.B||(this.B=[]);this.B.push(a);return function(){b.remove(a)}};g.remove=function(a){if(this.B){var b=this.B;a=b.indexOf(a);-1!=a&&b.splice(a,1)}};g.removeAll=function(){this.B&&(this.B.length=0)};g.fire=function(a){if(this.B)for(var b=ba(this.B),c=b.next();!c.done;c=b.next())c=c.value,c(a)};g.getHandlerCount=function(){var a,b;return null!=(b=null==(a=this.B)?void 0:a.length)?b:0};function Q(){this.P=!1;this.ia=new cb}Q.prototype.onSessionEnd=function(a){this.ia.add(a)};Q.prototype.beginSession=function(){this.P=!0};Q.prototype.endSession=function(){this.P&&this.ia.fire();this.P=!1};Q.prototype.isSessionActive=function(){return this.P};function db(a,b,c){var d=c=void 0===c?{}:c,e=d.needsRootBounds;return new b.IntersectionObserver(a,{threshold:d.threshold,root:b.parent&&b.parent!=b&&e?b.document:void 0})}new WeakMap;new WeakMap;function eb(a){var b=a.document.createElement("video");b.setAttribute("muted","");b.setAttribute("playsinline","");b.setAttribute("webkit-playsinline","");b.setAttribute("height","0");b.setAttribute("width","0");b.muted=!0;b.playsInline=!0;b.playsinline=!0;b.webkitPlaysinline=!0;va(b);new Promise((function(c){return c(b.play())})).catch((function(){}));return Promise.resolve(!b.paused)}function fb(a){null==a.__AMP_AUTOPLAY&&(a.__AMP_AUTOPLAY=eb(a));return a.__AMP_AUTOPLAY}function gb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}var R,hb;function ib(a){R||(R=new WeakMap,hb=new WeakMap);var b=hb.get(a);b||(b=db((function(c){for(var d=new Set,e=c.length-1;0<=e;e--){var f=c[e].target;d.has(f)||(d.add(f),b.unobserve(f),R.get(f).resolve(c[e]),R.delete(f))}}),a,{needsRootBounds:!0}),hb.set(a,b));return b}function jb(a){if(R&&R.has(a))return R.get(a).promise;ib(a.ownerDocument.defaultView).observe(a);var b=new u;R.set(a,b);return b.promise}var kb=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],lb=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function mb(a,b){var c=Qa(a)(kb);b&&b.title&&c.setAttribute("aria-label",b.title);return c}function nb(a){var b=Qa(a)(lb),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,f=0;f<e.length;f++)e[f].classList.add("amp-video-eq-"+(a+1)+"-"+(f+1));b.appendChild(d)}Ka(c);return b}function ob(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=x((function(){var c=b.ampdoc.getHeadNode(),d=c.__AMP_CSS_TR;var e=d?d(".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"):".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";(d=c.__AMP_CSS_SM)||(d=c.__AMP_CSS_SM=v());var f=gb(c,d,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(c.ownerDocument||c).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=gb(c,d,"amp-runtime"),(e=void 0===e?null:e)?c.insertBefore(f,e.nextSibling):c.insertBefore(f,c.firstChild),d["amp-extension=amp-video-autoplay"]=f)}));this.aa=this.L=this.o=null;this.T=F(a.win,"timer");this.ra=J(a.getHeadNode(),"action");this.ha=function(){for(var c=0;c<b.o.length;c++){var d=b.o[c];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();ma(e)&&ma(f)&&0<f&&(e=Ya(b.ampdoc.win,"video-manager.timeUpdate",w({time:e,percent:e/f})),b.ra.trigger(d.video.element,"timeUpdate",e,1))}}b.T.delay(b.ha,1e3)};this.Y=x((function(){return new T(b.ampdoc,b)}));this.T.delay(this.ha,1e3)}g=ob.prototype;g.dispose=function(){this.Y().dispose();this.L.disconnect();this.L=null;if(this.o)for(var a=0;a<this.o.length;a++)this.o[a].dispose()};g.register=function(a){var b=this;pb(a);if(a.supportsPlatform()&&!U(this,a)){this.L||(this.L=db((function(e){return e.forEach((function(f){var k=f.isIntersecting;U(b,f.target).updateVisibility(k)}))}),this.ampdoc.win,{threshold:.5}));this.L.observe(a.element);P(a.element,"reloaded",(function(){return c.videoLoaded()}));this.o=this.o||[];var c=new qb(this,a);this.o.push(c);var d=c.video.element;La(d,"registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};function pb(a){function b(){return a.fullscreenEnter()}function c(d,e){a.registerAction(d,(function(){Na(a);e()}),1)}c("play",(function(){return a.play(!1)}));c("pause",(function(){return a.pause()}));c("mute",(function(){return a.mute()}));c("unmute",(function(){return a.unmute()}));c("fullscreenenter",b);c("fullscreen",b)}function U(a,b){if(rb(a.aa,b))return a.aa;for(var c=0;a.o&&c<a.o.length;c++){var d=a.o[c];if(rb(d,b))return a.aa=d}return null}g.registerForAutoFullscreen=function(a){this.Y().register(a)};g.ya=function(){return this.Y()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=A().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():ia()).then((function(e){return e?e[b]:""}))};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.o.forEach((function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()}))};function rb(a,b){return!!a&&(a.video===b||a.video.element===b)}function qb(a,b){var c=this;this.H=a;this.h=a.ampdoc;this.video=b;this.ba=!0;this.G=this.K=this.C=this.na=!1;this.W=new Q;this.W.onSessionEnd((function(){return S(c,"video-session")}));this.I=new Q;this.I.onSessionEnd((function(){return S(c,"video-session-visible")}));this.ka=x((function(){return new V(c.h.win,c)}));this.ca=this.qa=!1;this.$=null;this.la=this.R=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.H.installAutoplayStyles();this.D=$a;this.va=function(){c.video.play(!1)};this.ua=function(){c.video.pause()};P(b.element,"load",(function(){return c.videoLoaded()}));P(b.element,"pause",(function(){S(c,"video-pause");c.C=!1;c.ca?c.ca=!1:c.W.endSession()}));P(b.element,"play",(function(){c.la=!0;S(c,"video-play")}));P(b.element,"playing",(function(){c.C=!0;"playing_manual"==c.getPlayingState()&&(c.ja(),c.H.pauseOtherVideos(c));var d=c.video,e=d.element;if(!d.preimplementsMediaSessionAPI()&&!e.classList.contains("i-amphtml-disable-mediasession")){bb(e,c.D);d=c.h.win;e=c.D;var f=c.va,k=c.ua,l=d.navigator;"mediaSession"in l&&d.MediaMetadata&&(l.mediaSession.metadata=new d.MediaMetadata($a),l.mediaSession.metadata=new d.MediaMetadata(e),l.mediaSession.setActionHandler("play",f),l.mediaSession.setActionHandler("pause",k))}c.W.beginSession();c.G&&c.I.beginSession();c.la||S(c,"video-play")}));P(b.element,"muted",(function(){return c.R=!0}));P(b.element,"unmuted",(function(){c.R=!1;c.H.pauseOtherVideos(c)}));P(b.element,"amp:video:tick",(function(d){d=d.data;var e=d.eventType;e&&sb(c,e,d.vars)}));P(b.element,"ended",(function(){c.K=!1;S(c,"video-ended")}));P(b.element,"ad_start",(function(){c.K=!0;S(c,"video-ad-start")}));P(b.element,"ad_end",(function(){c.K=!1;S(c,"video-ad-end")}));b.signals().whenSignal("registered").then((function(){var d=c.video.element;(c.video.preimplementsAutoFullscreen()||!d.hasAttribute("rotate-to-fullscreen")?0:B(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",d))&&c.H.registerForAutoFullscreen(c);c.hasAutoplay&&tb(c)}));this.ja=x((function(){var d=Ya(c.h.win,"firstPlay",w({})),e=c.video.element;J(e,"action").trigger(e,"firstPlay",d,1)}));ub(this)}g=qb.prototype;g.dispose=function(){this.ka().stop()};function sb(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach((function(f){e["custom_"+f]=c[f]}));S(a,"video-hosted-custom",e)}function ub(a){a.video.signals().whenSignal("playback-delegated").then((function(){a.ba=!1;a.C&&a.video.pause()}))}g.isMuted=function(){return this.R};g.isPlaybackManaged=function(){return this.ba};g.videoLoaded=function(){this.na=!0;this.$=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.D=v(this.video.getMetadata()));var a=this.h.win.document;if(!this.D.artwork||0==this.D.artwork.length){var b;(b=ab(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&(this.D.artwork=[{src:b}])}!this.D.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.$.getAttribute("title")||this.$.getAttribute("aria-label")||a.title)&&(this.D.title=a)}this.ka().start();this.G&&vb(this)};function vb(a){a.h.isVisible()&&fb(a.h.win).then((function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.ba&&(a.G?(a.I.beginSession(),a.video.play(!0),a.qa=!0):(a.C&&a.I.endSession(),a.video.pause(),a.ca=!0)):a.G?a.I.beginSession():a.C&&a.I.endSession()}))}function tb(a){a.video.isInteractive()&&a.video.hideControls();fb(a.h.win).then((function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),wb(a))}))}function wb(a){function b(m){d.mutateElementSkipRemeasure((function(){k.forEach((function(q){var I=m;void 0===I&&(I=q.hasAttribute("hidden"));I?q.removeAttribute("hidden"):q.setAttribute("hidden","")}))}))}function c(m){d.mutateElementSkipRemeasure((function(){return f.classList.toggle("amp-video-eq-play",m)}))}var d=a.video,e=a.video.element;if(!e.hasAttribute("noaudio")&&!e.signals().get("user-interacted")){var f=nb(e),k=[f],l=[P(e,"pause",(function(){return c(!1)})),P(e,"playing",(function(){return c(!0)})),P(e,"ad_start",(function(){b(!1);d.showControls()})),P(e,"ad_end",(function(){b(!0);d.hideControls()})),P(e,"unmuted",(function(){return Na(d)}))];if(d.isInteractive()){d.hideControls();var h=mb(e,a.D);k.push(h);l.push(P(h,"click",(function(){return Na(d)})))}d.mutateElementSkipRemeasure((function(){k.forEach((function(m){e.appendChild(m)}))}));a.K&&b(!1);d.signals().whenSignal("user-interacted").then((function(){a.ja();d.isInteractive()&&d.showControls();d.unmute();l.forEach((function(m){m()}));d.mutateElementSkipRemeasure((function(){k.forEach((function(m){Ka(m)}))}))}))}}g.updateVisibility=function(a){var b=this.G;this.G=a;a!=b&&this.na&&vb(this)};g.getPlayingState=function(){return this.C?this.C&&this.qa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.K};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};g.getAnalyticsDetails=function(){var a=this,b=this.video;return Promise.all([fb(this.h.win),jb(b.element)]).then((function(c){var d=c[0],e=c[1].boundingClientRect,f=e.height;e=e.width;var k=a.hasAutoplay&&d,l=b.getPlayedRanges(),h=l.reduce((function(m,q){return m+q[1]-q[0]}),0);return{autoplay:k,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:f,id:b.element.id,muted:a.R,playedTotal:h,playedRangesJson:JSON.stringify(l),state:a.getPlayingState(),width:e}}))};function T(a,b){var c=this;this.H=b;this.h=a;this.F=this.J=null;this.o=[];this.A=[];this.M=function(){return xb(c)};this.ta=function(d){return"playing_manual"==c.H.getPlayingState(d)};this.sa=function(d,e){var f=d.boundingClientRect;var k=e.boundingClientRect;d=d.intersectionRatio-e.intersectionRatio;.1<Math.abs(d)?f=d:(e=Fa(c.h,"viewport"),d=yb(e,f),e=yb(e,k),f=d<e||d>e?d-e:f.top-k.top);return f};zb(this);Ab(this)}T.prototype.dispose=function(){this.A.forEach((function(a){return a()}));this.A.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=E(this.h.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.o.push(a),O(b,"pause",this.M),O(b,"playing",this.M),O(b,"ended",this.M),a.signals().whenSignal("user-interacted").then(this.M),xb(this))};function Ab(a){function b(){a.J=null}var c=a.h.getRootNode();a.A.push(O(c,"webkitfullscreenchange",b),O(c,"mozfullscreenchange",b),O(c,"fullscreenchange",b),O(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.h.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};function zb(a){var b=a.h.win,c=b.screen;c&&"orientation"in c&&a.A.push(P(c.orientation,"change",(function(){return Bb(a)})));a.A.push(P(b,"orientationchange",(function(){return Bb(a)})))}function Bb(a){a.isInLandscape()?null!=a.F&&Cb(a,a.F):a.J&&Db(a,a.J)}function Cb(a,b){var c=E(a.h.win,"platform");a.J=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():Eb(a,b).then((function(){return b.fullscreenEnter()}))}function Db(a,b){a.J=null;Eb(a,b,"center").then((function(){return b.fullscreenExit()}))}function Eb(a,b,c){var d=c=void 0===c?null:c,e=b.element,f=Fa(a.h,"viewport");return F(a.h.win,"timer").promise(330).then((function(){return jb(e)})).then((function(k){var l=k.boundingClientRect;k=l.bottom;l=l.top;var h=f.getSize().height;return 0<=l&&k<=h?ia():f.animateScrollIntoView(e,d?d:k>h?"bottom":"top")}))}function xb(a){if(a.isInLandscape())return Promise.resolve(a.F);a.F=null;var b=a.o.filter(a.ta).map((function(c){return jb(c.element)}));return Promise.all(b).then((function(c){var d=c.sort(a.sa)[0];return d&&.5<d.intersectionRatio?d.target.getImpl().then((function(e){return a.F=e})):a.F}))}function yb(a,b){b=b.top+b.height/2;var c=a.getSize().height/2;return Math.abs(b-c)}function V(a,b){this.T=F(a,"timer");this.O=b;this.A=null;this.U=this.ma=0}V.prototype.start=function(){var a=this,b=this.O.video.element;this.stop();this.A=this.A||[];Fb(this)?Gb(this,this.U):this.A.push(Za(b,(function(){Fb(a)&&Gb(a,a.U)})));this.A.push(P(b,"ended",(function(){Fb(a)&&Hb(a,100)})))};V.prototype.stop=function(){if(this.A){for(;0<this.A.length;)this.A.pop()();this.U++}};function Fb(a){var b=a.O.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.xa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.xa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];A().warn.apply(A(),["video-manager"].concat(b))};function Gb(a,b){if(b==a.U){var c=a.O,d=a.T,e=c.video,f=function(){return Gb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var k=Math.min(Math.max(50*c,250),4e3),l=e.getCurrentTime()/c*100,h=5*Math.floor(l/5);ma(h);Hb(a,h);d.delay(f,k)}else d.delay(f,500)}}function Hb(a,b){0>=b||a.ma==b||(a.ma=b,S(a.O,"video-percentage-played",{normalizedPercentage:b.toString()}))}function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then((function(e){c&&Object.assign(e,c);La(d.element,b,e)}))}function W(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.oa="https://embed.nexx.cloud/";a.ga=null;a.da=null;a.ea=null;a.pa=new Ea(a.element);return a}var X=AMP.BaseElement;W.prototype=ca(X.prototype);W.prototype.constructor=W;if(ha)ha(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Ib=Object.getOwnPropertyDescriptor(X,Y);Ib&&Object.defineProperty(W,Y,Ib)}else W[Y]=X[Y];W.za=X.prototype;g=W.prototype;g.preconnectCallback=function(a){E(this.win,"preconnect").url(this.getAmpDoc(),this.oa,a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.buildCallback=function(){var a=new u;this.da=a.promise;this.ea=a.resolve;a=G(this.element);var b=H(a),c=K(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});d.ctor||(d.ctor=ob,d.context=a,d.sharedInstance=!1,d.resolve&&F(b,"video-manager"));Fa(this.element,"video-manager").register(this)};function Jb(a,b){var c=a.element,d=c.dataset,e=d.disableAds,f=d.domainId,k=d.exitMode,l=d.mediaid,h=d.mode,m=d.streamingFilter,q=d.streamtype,I=B(d.client||f,"One of data-client or data-domain-id attributes is required for <amp-nexxtv-player> %s",c);B(l,"The data-mediaid attribute is required for <amp-nexxtv-player> %s",c);a=a.oa+[I,q,l].map(encodeURIComponent).join("/");h=w({dataMode:h,platform:"amp",disableAds:e,streamingFilter:m,exitMode:k,consentString:b});c=[];for(p in h)if(d=h[p],null!=d)if(ja(d))for(var qa=0;qa<d.length;qa++){var Kb=d[qa];c.push(encodeURIComponent(p)+"="+encodeURIComponent(Kb))}else c.push(encodeURIComponent(p)+"="+encodeURIComponent(d));var p=c.join("&");p?(a=a.split("#",2),h=a[0].split("?",2),p=h[0]+(h[1]?"?"+h[1]+"&"+p:"?"+p),p+=a[1]?"#"+a[1]:""):p=a;B(/^https?:/i.test(p),'URL must start with "http://" or "https://". Invalid value: %s',p);Oa||(Oa=self.document.createElement("a"),Pa=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new L));a=Pa;h=Oa;if(a&&a.has(p))p=a.get(p);else{h.href=p;h.protocol||(h.href=h.href);c={href:h.href,protocol:h.protocol,host:h.host,hostname:h.hostname,port:"0"==h.port?"":h.port,pathname:h.pathname,search:h.search,hash:h.hash,origin:null};"/"!==c.pathname[0]&&(c.pathname="/"+c.pathname);if("http:"==c.protocol&&80==c.port||"https:"==c.protocol&&443==c.port)c.port="",c.host=c.hostname;c.origin=h.origin&&"null"!=h.origin?h.origin:"data:"!=c.protocol&&c.host?c.protocol+"//"+c.host:c.href;a&&a.put(p,c);p=c}return p.href}function Lb(a){var b=a.getConsentPolicy()||"default";return Wa(a.element,b)}g.layoutCallback=function(){var a=this;return Lb(this).then((function(b){a.j=Va(a,Jb(a,b));a.ga=P(a.win,"message",(function(c){var d=c.data;if(d&&c.source===a.j.contentWindow&&(c="[object Object]"===la.call(d)?d:Sa(d),null!=c&&(d=c.event))){if("playerready"===d){a.ea(a.j);if(z.dev)var e=z.dev;else throw Error("failed to call initLogConstructor");e.info("amp-nexxtv-player","nexx player ready",c)}Ua(a.element,d)}}));a.pa.updatePlaying(!0);return a.loadPromise(a.j)}))};g.pauseCallback=function(){this.pause()};g.unlayoutCallback=function(){this.j&&(Ka(this.j),this.j=null);this.ga&&this.ga();var a=new u;this.da=a.promise;this.ea=a.resolve;this.pa.updatePlaying(!1);return!0};function Z(a,b){a.da.then((function(){a.j&&a.j.contentWindow&&a.j.contentWindow.postMessage(w({cmd:b}),"*")}))}g.play=function(){Z(this,"play")};g.pause=function(){this.j&&Z(this,"pause")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unmute")};g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.showControls=function(){};g.hideControls=function(){};g.fullscreenEnter=function(){if(this.j){var a=this.j,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};g.fullscreenExit=function(){if(this.j){var a=this.j,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};g.isFullscreen=function(){if(this.j){var a=this.j;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!1};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 1};g.getPlayedRanges=function(){return[]};g.seekTo=function(){this.user().error("amp-nexxtv-player","`seekTo` not supported.")};(function(a){a.registerElement("amp-nexxtv-player",W)})(self.AMP)}});//# sourceMappingURL=amp-nexxtv-player-0.1.js.map