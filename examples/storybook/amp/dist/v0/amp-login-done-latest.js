(function(){"use strict";var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}return function(){throw Error("Cannot find global object")}()}var da=ca(this);"function"===typeof Symbol&&Symbol("x");var ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;function ka(){this.A=new la}ka.prototype.abort=function(){this.A.R||(this.A.R=!0,this.A.J&&this.A.J({type:"abort",bubbles:!1,cancelable:!1,target:this.A,currentTarget:this.A}))};da.Object.defineProperties(ka.prototype,{signal:{configurable:!0,enumerable:!0,get:function(){return this.A}}});function la(){this.R=!1;this.J=null}da.Object.defineProperties(la.prototype,{aborted:{configurable:!0,enumerable:!0,get:function(){return this.R}},onabort:{configurable:!0,enumerable:!0,get:function(){return this.J},set:function(a){this.J=a}}});function ma(a,b){var c=b||0,d=this.length;for(b=0<=c?c:Math.max(d+c,0);b<d;b++){var e=this[b];if(e===a||a!==a&&e!==e)return!0}return!1}var na;function oa(){return na?na:na=Promise.resolve(void 0)}function pa(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}var qa=Object.prototype,ra=qa.hasOwnProperty,sa=qa.toString;function ta(a){var b;if(null==(b=Object.getOwnPropertyDescriptor(a,"message"))?0:b.writable)return a;var c=a.stack;b=Error(a.message);for(var d in a)b[d]=a[d];b.stack=c;return b}function ua(a){for(var b=null,c="",d=r(arguments),e=d.next();!e.done;e=d.next())e=e.value,e instanceof Error&&!b?b=ta(e):(c&&(c+=" "),c+=e);b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function t(a){var b=ua.apply(null,arguments);setTimeout((function(){var c,d;null==(d=(c=self).__AMP_REPORT_ERROR)||d.call(c,b);throw b}))}var va=/^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,wa="annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "),xa={childList:!0,subtree:!0};function ya(a,b){if(!va.test(b)||wa.includes(b))throw new a('invalid custom element name "'+b+'"')}function v(a,b){this.C=a;this.L=b;this.Y=Object.create(null)}v.prototype.define=function(a,b,c){this.L.define(a,b,c);var d=this.Y,e=d[a];e&&(e.resolve(),delete d[a])};v.prototype.get=function(a){var b=this.L.getByName(a);if(b)return b.ctor};v.prototype.whenDefined=function(a){ya(this.C.SyntaxError,a);if(this.L.getByName(a))return oa();var b=this.Y,c=b[a];c||(c=new pa,b[a]=c);return c.promise};v.prototype.upgrade=function(a){this.L.upgrade(a)};function za(a){this.C=a;this.P=Object.create(null);this.o="";this.F=this.O=null;this.T=[a.document]}m=za.prototype;m.current=function(){var a=this.O;this.O=null;return a};m.getByName=function(a){var b=this.P[a];if(b)return b};m.getByConstructor=function(a){var c,b=this.P;for(c in b){var d=b[c];if(d.ctor===a)return d}};m.define=function(a,b,c){var d=this.C,e=d.Error;d=d.SyntaxError;if(c)throw new e("Extending native custom elements is not supported");ya(d,a);if(this.getByName(a)||this.getByConstructor(b))throw new e('duplicate definition "'+a+'"');this.P[a]={name:a,ctor:b};Aa(this,a);b=r(this.T);for(c=b.next();!c.done;c=b.next())this.upgrade(c.value,a)};m.upgrade=function(a,b){var c=!!b,d=Ba(a,b||this.o);a=r(d);for(var e=a.next();!e.done;e=a.next())e=e.value,c?Ca(this,e):this.upgradeSelf(e)};m.upgradeSelf=function(a){var b=this.getByName(a.localName);b&&Da(this,a,b)};function Ba(a,b){return b&&a.querySelectorAll?a.querySelectorAll(b):[]}function Da(a,b,c){c=c.ctor;if(!(b instanceof c)){a.O=b;try{if(new c!==b)throw new a.C.Error("Constructor illegally returned a different instance.")}catch(d){t(d)}}}function Ca(a,b){var c=a.getByName(b.localName);if(c&&(Da(a,b,c),b.connectedCallback))try{b.connectedCallback()}catch(d){t(d)}}function Aa(a,b){if(a.o)a.o+=","+b;else{a.o=b;var c=new a.C.MutationObserver((function(e){e&&Ea(a,e)}));a.F=c;b=r(a.T);for(var d=b.next();!d.done;d=b.next())c.observe(d.value,xa);Fa(a.C,a)}}m.observe=function(a){this.T.push(a);this.F&&this.F.observe(a,xa)};m.sync=function(){this.F&&Ea(this,this.F.takeRecords())};function Ea(a,b){b=r(b);for(var c=b.next();!c.done;c=b.next()){var d=c.value;if(d){c=d;var e=c.removedNodes;c=r(c.addedNodes);for(var f=c.next();!f.done;f=c.next()){f=f.value;var g=Ba(f,a.o);Ca(a,f);var h=r(g);for(f=h.next();!f.done;f=h.next())Ca(a,f.value)}c=r(e);for(f=c.next();!f.done;f=c.next()){f=f.value;var k=Ba(f,a.o);if(f.disconnectedCallback)try{f.disconnectedCallback()}catch(l){t(l)}h=r(k);for(f=h.next();!f.done;f=h.next())if(f=f.value,f.disconnectedCallback)try{f.disconnectedCallback()}catch(l){t(l)}}}}}function Fa(a,b){var c=a.document,d=a.Document.prototype,e=a.Element.prototype,f=a.Node.prototype,g=d.createElement,h=d.importNode,k=f.appendChild,l=f.cloneNode,q=f.insertBefore,p=f.removeChild,w=f.replaceChild;d.createElement=function(n){var J=b.getByName(n);return J?new J.ctor:g.apply(this,arguments)};d.importNode=function(){var n=h.apply(this,arguments);n&&this===c&&(b.upgradeSelf(n),b.upgrade(n));return n};f.appendChild=function(){var n=k.apply(this,arguments);b.sync();return n};f.insertBefore=function(){var n=q.apply(this,arguments);b.sync();return n};f.removeChild=function(){var n=p.apply(this,arguments);b.sync();return n};f.replaceChild=function(){var n=w.apply(this,arguments);b.sync();return n};f.cloneNode=function(){var n=l.apply(this,arguments);n.ownerDocument===c&&(b.upgradeSelf(n),b.upgrade(n));return n};var u=e,x=Object.getOwnPropertyDescriptor(u,"innerHTML");x||(u=Object.getPrototypeOf(a.HTMLElement.prototype),x=Object.getOwnPropertyDescriptor(u,"innerHTML"));var K;if(null==(K=x)?0:K.configurable){var U=x.set;x.set=function(n){U.call(this,n);b.upgrade(this)};Object.defineProperty(u,"innerHTML",x)}}function Ga(){function a(){var q=this.constructor,p=g.current();p||(p=g.getByConstructor(q),p=f.call(e,p.name));Ha(p,q.prototype);return p}var b=y,c=b.Element,d=b.HTMLElement,e=b.document,f=e.createElement,g=new za(b),h=new v(b,g);Object.defineProperty(b,"customElements",{enumerable:!0,configurable:!0,value:h});c=c.prototype;var k=c.attachShadow,l=c.createShadowRoot;k&&(c.attachShadow=function(q){var p=k.apply(this,arguments);g.observe(p);return p},c.attachShadow.toString=function(){return k.toString()});l&&(c.createShadowRoot=function(){var q=l.apply(this,arguments);g.observe(q);return q},c.createShadowRoot.toString=function(){return l.toString()});Ia(d,a);b.HTMLElementOrig=b.HTMLElement;b.HTMLElement=a;a.call||(a.apply=b.Function.apply,a.bind=b.Function.bind,a.call=b.Function.call)}function Ja(){function a(){return d.construct(c,[],this.constructor)}var b=y,c=b.HTMLElement,d=b.Reflect;Ia(c,a);b.HTMLElementOrig=b.HTMLElement;b.HTMLElement=a}function Ia(a,b){b.prototype=Object.create(a.prototype,{constructor:{configurable:!0,writable:!0,value:b}});Ha(b,a)}function Ha(a,b){if(Object.setPrototypeOf)Object.setPrototypeOf(a,b);else if({__proto__:{test:!0}}.test)a.__proto__=b;else for(;null!==b&&!Object.isPrototypeOf.call(b,a);){for(var c=r(Object.getOwnPropertyNames(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.hasOwnProperty.call(a,d)){var e=Object.getOwnPropertyDescriptor(b,d);Object.defineProperty(a,d,e)}b=Object.getPrototypeOf(b)}}function Ka(a,b){if(void 0===b?this.contains(a):!b)return this.remove(a),!1;this.add(a);return!0}function La(){var a=self;if(/Trident|MSIE|IEMobile/i.test(a.navigator.userAgent)&&a.DOMTokenList){a.Object.defineProperty(a.DOMTokenList.prototype,"toggle",{enumerable:!1,configurable:!0,writable:!0,value:Ka});var b=a.DOMTokenList.prototype.add;a.DOMTokenList.prototype.add=function(){for(var c=0;c<arguments.length;c++)b.call(this,arguments[c])}}}function Ma(a){return a==this||this.documentElement.contains(a)}var z=Array.isArray;function Na(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d);return c}function Oa(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1}function Pa(a,b){var c;"number"!==typeof c&&(c=0);return c+b.length>a.length?!1:-1!==a.indexOf(b,c)}function Qa(a){return 1==(null==a?void 0:a.nodeType)?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}function Ra(a){return 0<=a.indexOf("​​​")}function Sa(a,b,c,d){var e=void 0===c?"Assertion failed":c;if(b)return b;a&&!Pa(e,a)&&(e+=a);for(var f=3,g=e.split("%s"),h=g.shift(),k=[h];g.length;){var l=arguments[f++],q=g.shift();h+=Qa(l)+q;k.push(l,q.trim())}f=Error(h);f.messageArray=Na(k,(function(u){return""!==u}));var p,w;null==(w=(p=self).__AMP_REPORT_ERROR)||w.call(p,f);throw f}function A(a,b,c,d,e){z(e)?a(c,e.concat([b])):a(c,(e||d)+": %s",b);return b}var Ta=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function Ua(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function B(a){var b=Object.create(null);if(!a)return b;for(var c;c=Ta.exec(a);){var d=Ua(c[1],c[1]);c=c[2]?Ua(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}var Va="";function C(a){var b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var c=B(b.location.originalHash||b.location.hash);Va||(Va=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012106040012000");var d=B(b.location.originalHash||b.location.hash);d=!(!["1","actions","amp","amp4ads","amp4email"].includes(d.development)&&!b.AMP_DEV_MODE);b=b.__AMP_MODE={localDev:!1,development:d,examiner:"2"==c.development,esm:!1,geoOverride:c["amp-geo"],minified:!0,test:!1,log:c.log,version:"2106040012000",rtvVersion:Va}}return b}function Wa(a){var b=!1,c=null,d=a;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];b||(c=d.apply(self,f),b=!0,d=null);return c}}var D=self.AMP_CONFIG||{},Xa=("string"==typeof D.cdnProxyRegex?new RegExp(D.cdnProxyRegex):D.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Ya(a){if(!self.document||!self.document.head||self.location&&Xa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var E={thirdParty:D.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:D.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof D.thirdPartyFrameRegex?new RegExp(D.thirdPartyFrameRegex):D.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:D.cdnUrl||Ya("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:Xa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:D.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:D.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:D.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:D.geoApiUrl||Ya("amp-geo-api")};function Za(){}function $a(a,b){return b.reduce((function(c,d){return c+"&s[]="+encodeURIComponent(String(Qa(d)))}),"https://log.amp.dev/?v=012106040012000&id="+encodeURIComponent(a))}function ab(a,b,c){var d=this,e=c=void 0===c?"":c;this.win=a;this.ba=b;this.X=this.win.console&&this.win.console.log&&"0"!=C().log?this.ba(parseInt(C().log,10),C().development):0;this.G=e;this.I=null;this.aa=Wa((function(){a.fetch(E.cdn+"/rtv/012106040012000/log-messages.simple.json").then((function(f){return f.json()}),Za).then((function(f){f&&(d.I=f)}))}));this.D=this.assert.bind(this)}function F(a,b,c,d){if(a.X<c)return!1;var e=a.win.console.log;1==c?e=a.win.console.error||e:3==c?e=a.win.console.info||e:2==c&&(e=a.win.console.warn||e);c=z(d[0])?bb(a,d[0]):d;b="["+b+"]";"string"===typeof c[0]?c[0]=b+" "+c[0]:c.unshift(b);e.apply(a.win.console,c);return!0}m=ab.prototype;m.isEnabled=function(){return 0!=this.X};m.fine=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];F(this,a,4,c)};m.info=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];F(this,a,3,c)};m.warn=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];F(this,a,2,c)};m.W=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!F(this,a,1,c))return this.createError.apply(this,c)};m.error=function(a,b){var c=this.W.apply(this,arguments);c&&(c.name=a||c.name,self.__AMP_REPORT_ERROR(c))};m.expectedError=function(a,b){var c=this.W.apply(this,arguments);c&&(c.expected=!0,self.__AMP_REPORT_ERROR(c))};m.createError=function(a){var b=ua.apply(null,arguments);cb(this,b);return b};m.createExpectedError=function(a){var b=ua.apply(null,arguments);cb(this,b);b.expected=!0;return b};m.assert=function(a,b,c){return z(b)?this.assert.apply(this,[a].concat(bb(this,b))):Sa.apply(null,[this.G].concat(Array.prototype.slice.call(arguments)))};m.assertElement=function(a,b){return A(this.D,a,1==(null==a?void 0:a.nodeType),"Element expected",b)};m.assertString=function(a,b){return A(this.D,a,"string"==typeof a,"String expected",b)};m.assertNumber=function(a,b){return A(this.D,a,"number"==typeof a,"Number expected",b)};m.assertArray=function(a,b){return A(this.D,a,z(a),"Array expected",b)};m.assertBoolean=function(a,b){return A(this.D,a,!!a===a,"Boolean expected",b)};function cb(a,b){b=ta(b);a.G?b.message?-1==b.message.indexOf(a.G)&&(b.message+=a.G):b.message=a.G:Ra(b.message)&&(b.message=b.message.replace("​​​",""))}function bb(a,b){var c=b.shift();C(a.win).development&&a.aa();return a.I&&c in a.I?[a.I[c]].concat(b):["More info at "+$a(c,b)]}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG,H=null;function I(){G.user||(G.user=db());return G.user}function db(){if(!H)throw Error("failed to call initLogConstructor");return new H(self,(function(a,b){return b||1<=a?4:2}),"​​​")}function eb(){if(G.dev)return G.dev;if(!H)throw Error("failed to call initLogConstructor");return G.dev=new H(self,(function(a){return 3<=a?4:2<=a?3:0}))}function fb(a){return JSON.parse(a)}function gb(a){if("undefined"!==typeof TextEncoder)a=new TextEncoder("utf-8").encode(a);else{a=unescape(encodeURIComponent(a));for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);b[c]=d}a=b}return a}var hb={document:1,text:2},ib=["GET","POST"];function jb(a,b){var c=b=void 0===b?{}:b;return new Promise((function(d,e){var f=kb(c.method||"GET"),g=lb(f,a);"include"==c.credentials&&(g.withCredentials=!0);c.responseType in hb&&(g.responseType=c.responseType);c.headers&&Object.keys(c.headers).forEach((function(h){g.setRequestHeader(h,c.headers[h])}));g.onreadystatechange=function(){2>g.readyState||(100>g.status||599<g.status?(g.onreadystatechange=null,e(I().createExpectedError("Unknown HTTP status "+g.status))):4==g.readyState&&d(new L(g)))};g.onerror=function(){e(I().createExpectedError("Network failure"))};g.onabort=function(){e(I().createExpectedError("Request aborted"))};"POST"==f?g.send(c.body):g.send()}))}function lb(a,b){var c=new XMLHttpRequest;if("withCredentials"in c)c.open(a,b,!0);else throw eb().createExpectedError("CORS is not supported");return c}function L(a){this.B=a;this.status=this.B.status;this.statusText=this.B.statusText;this.ok=200<=this.status&&300>this.status;this.headers=new mb(a);this.bodyUsed=!1;this.body=null;this.url=a.responseURL}L.prototype.clone=function(){return new L(this.B)};function nb(a){a.bodyUsed=!0;return Promise.resolve(a.B.responseText)}L.prototype.text=function(){return nb(this)};L.prototype.json=function(){return nb(this).then(fb)};L.prototype.arrayBuffer=function(){return nb(this).then(gb)};function kb(a){if(void 0===a)return"GET";a=a.toUpperCase();ib.includes(a);return a}function mb(a){this.B=a}mb.prototype.get=function(a){return this.B.getResponseHeader(a)};mb.prototype.has=function(a){return null!=this.B.getResponseHeader(a)};function M(a,b){var c=b=void 0===b?{}:b,d=Object.create(null);a=Object.assign({},{status:200,statusText:"OK",responseText:a?String(a):"",getResponseHeader:function(f){var g=String(f).toLowerCase();return ra.call(d,g)?d[g]:null}},c);a.status=void 0===c.status?200:parseInt(c.status,10);if(z(c.headers))c.headers.forEach((function(f){var g=f[1];d[String(f[0]).toLowerCase()]=String(g)}));else if("[object Object]"===sa.call(c.headers))for(var e in c.headers)d[String(e).toLowerCase()]=String(c.headers[e]);c.statusText&&(a.statusText=String(c.statusText));L.call(this,a)}var N=L;M.prototype=ba(N.prototype);M.prototype.constructor=M;if(ja)ja(M,N);else for(var O in N)if("prototype"!=O)if(Object.defineProperties){var ob=Object.getOwnPropertyDescriptor(N,O);ob&&Object.defineProperty(M,O,ob)}else M[O]=N[O];M.ea=N.prototype;
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */var pb;function qb(){var a=this.isConnected;if(void 0===a){a=this;do{if(Node.prototype.getRootNode)a=a.getRootNode()||a;else for(;a.parentNode&&(!a||"I-AMPHTML-SHADOW-ROOT"!=a.tagName&&(11!=a.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(a)));a=a.parentNode);if(a.host)a=a.host;else break}while(1);a=a.nodeType===Node.DOCUMENT_NODE}return a?pb.call(this):{left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}}function rb(){var a=sb;if(!a.document)return!1;try{return 0!==a.document.createElement("div").getBoundingClientRect().top}catch(b){return!0}}function tb(){var a=P.IntersectionObserver,b=Q;return function(c,d){var e;return 9===(null==d?void 0:null==(e=d.root)?void 0:e.nodeType)?new b(c,d):new a(c,d)}}function ub(){var a=R;try{return new a.IntersectionObserver((function(){}),{root:a.document}),!0}catch(b){return!1}}function Q(a,b){this.N=a;this.K=Object.assign({},{root:null,rootMargin:"0px 0px 0px 0px"},b);this.j=[];this.h=null;Q._upgraders.push(this.V.bind(this))}m=Q.prototype;m.disconnect=function(){this.h?this.h.disconnect():this.j.length=0};m.takeRecords=function(){return this.h?this.h.takeRecords():[]};m.observe=function(a){this.h?this.h.observe(a):-1==this.j.indexOf(a)&&this.j.push(a)};m.unobserve=function(a){this.h?this.h.unobserve(a):(a=this.j.indexOf(a),-1!=a&&this.j.splice(a,1))};m.V=function(a){var b=new a(this.N,this.K);this.h=b;a=r(this.j);for(var c=a.next();!c.done;c=a.next())b.observe(c.value);this.j.length=0};da.Object.defineProperties(Q.prototype,{root:{configurable:!0,enumerable:!0,get:function(){return this.h?this.h.root:this.K.root||null}},rootMargin:{configurable:!0,enumerable:!0,get:function(){return this.h?this.h.rootMargin:this.K.rootMargin}},thresholds:{configurable:!0,enumerable:!0,get:function(){return this.h?this.h.thresholds:[].concat(this.K.threshold||0)}}});Q._upgraders=[];function vb(){var a=wb;!a.IntersectionObserverEntry||"isIntersecting"in a.IntersectionObserverEntry.prototype||Object.defineProperty(a.IntersectionObserverEntry.prototype,"isIntersecting",{enumerable:!0,configurable:!0,get:function(){return 0<this.intersectionRatio}})}function xb(a){return(a=Number(a))?0<a?1:-1:a}var yb=Object.prototype.hasOwnProperty;function zb(a,b){if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(null!=e)for(var f in e)yb.call(e,f)&&(c[f]=e[f])}return c}function Ab(a){return Object.keys(a).map((function(b){return a[b]}))}function S(a){if(!(this instanceof S))throw new TypeError("Constructor Promise requires `new`");if(!T(a))throw new TypeError("Must pass resolver function");this._state=Bb;this._value=[];this._isChainEnd=!0;Cb(this,Db(this,Eb),Db(this,Fb),{then:a})}S.prototype.then=function(a,b){a=T(a)?a:void 0;b=T(b)?b:void 0;if(a||b)this._isChainEnd=!1;return this._state(this._value,a,b)};S.prototype.catch=function(a){return this.then(void 0,a)};function Gb(a){return a===Object(a)&&a instanceof this?a:new this((function(b){b(a)}))}function Hb(a){return new this((function(b,c){c(a)}))}function Ib(a){var b=this;return new b((function(c,d){var e=a.length,f=Array(e);if(0===e)return c(f);Jb(a,(function(g,h){b.resolve(g).then((function(k){f[h]=k;0===--e&&c(f)}),d)}))}))}function Kb(a){var b=this;return new b((function(c,d){for(var e=0;e<a.length;e++)b.resolve(a[e]).then(c,d)}))}function Eb(a,b,c,d){if(!b)return d&&(b=d.promise,b._state=Eb,b._value=a),this;d||(d=new Lb(this.constructor));Mb(Nb(d,b,a));return d.promise}function Fb(a,b,c,d){if(!c)return d&&(b=d.promise,b._state=Fb,b._value=a),this;d||(d=new Lb(this.constructor));Mb(Nb(d,c,a));return d.promise}function Bb(a,b,c,d){if(!d){if(!b&&!c)return this;d=new Lb(this.constructor)}a.push({deferred:d,onFulfilled:b||d.resolve,onRejected:c||d.reject});return d.promise}function Lb(a){var b=this;this.promise=new a((function(c,d){b.resolve=c;b.reject=d}));return b}function Ob(a,b,c,d){var e=a._value;a._state=b;a._value=c;d&&b===Bb&&d._state(c,void 0,void 0,{promise:a,resolve:void 0,reject:void 0});for(var f=0;f<e.length;f++){var g=e[f];a._state(c,g.onFulfilled,g.onRejected,g.deferred)}e.length=0;d&&(d._isChainEnd=!1);b===Fb&&a._isChainEnd&&setTimeout((function(){if(a._isChainEnd)throw c}),0)}function Db(a,b){return function(c){Ob(a,b,c)}}function Pb(){}function T(a){return"function"===typeof a}function Jb(a,b){for(var c=0;c<a.length;c++)b(a[c],c)}function Nb(a,b,c){var d=a.promise,e=a.resolve,f=a.reject;return function(){try{var g=b(c);Cb(d,e,f,g,g)}catch(h){f(h)}}}var Mb=function(){function a(){for(var e=0;e<d;e++){var f=c[e];c[e]=null;f()}d=0}if("undefined"!==typeof window&&window.postMessage){window.addEventListener("message",a);var b=function(){window.postMessage("macro-task","*")}}else b=function(){setTimeout(a,0)};var c=Array(16),d=0;return function(e){0===d&&b();c[d++]=e}}();function Cb(a,b,c,d,e){var g,f=c;try{if(d===a)throw new TypeError("Cannot fulfill promise with itself");var h=d===Object(d);if(h&&d instanceof a.constructor)Ob(a,d._state,d._value,d);else if(h&&(g=d.then)&&T(g)){var k=function(l){k=f=Pb;Cb(a,b,c,l,l)};f=function(l){k=f=Pb;c(l)};g.call(e,(function(l){k(l)}),(function(l){f(l)}))}else b(d)}catch(l){f(l)}}function V(a){this.N=a;this.j=[];this.h=null;V._upgraders.push(this.V.bind(this))}V.prototype.disconnect=function(){this.h?this.h.disconnect():this.j.length=0};V.prototype.observe=function(a){this.h?this.h.observe(a):-1==this.j.indexOf(a)&&this.j.push(a)};V.prototype.unobserve=function(a){this.h?this.h.unobserve(a):(a=this.j.indexOf(a),-1!=a&&this.j.splice(a,1))};V.prototype.V=function(a){this.h=a=new a(this.N);for(var b=r(this.j),c=b.next();!c.done;c=b.next())a.observe(c.value);this.j.length=0};V._upgraders=[];function Qb(a,b){return this.substr(0<b?0|b:0,a.length)===a}(function(a){a.fetch||(Object.defineProperty(a,"fetch",{value:jb,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(a,"Response",{value:M,writable:!0,enumerable:!1,configurable:!0}))})(self);(function(a){a.Math.sign||a.Object.defineProperty(a.Math,"sign",{enumerable:!1,configurable:!0,writable:!0,value:xb})})(self);(function(a){a.Object.assign||a.Object.defineProperty(a.Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:zb})})(self);(function(a){a.Object.values||a.Object.defineProperty(a.Object,"values",{configurable:!0,writable:!0,value:Ab})})(self);(function(a){a.Promise||(a.Promise=S,S.default&&(a.Promise=S.default),a.Promise.resolve=Gb,a.Promise.reject=Hb,a.Promise.all=Ib,a.Promise.race=Kb)})(self);(function(a){a.Array.prototype.includes||a.Object.defineProperty(a.Array.prototype,"includes",{enumerable:!1,configurable:!0,writable:!0,value:ma})})(self);(function(a){var b=a.Map,c=new b;if(c.set(0,0)!==c){var d=c.set;a.Object.defineProperty(b.prototype,"set",{enumerable:!1,configurable:!0,writable:!0,value:function(){d.apply(this,arguments);return this}})}})(self);(function(a){var b=a.WeakMap,c=new b;if(c.set({},0)!==c){var d=c.set;a.Object.defineProperty(b.prototype,"set",{enumerable:!1,configurable:!0,writable:!0,value:function(){d.apply(this,arguments);return this}})}})(self);(function(a){var b=a.Set,c=new b;if(c.add(0)!==c){var d=c.add;a.Object.defineProperty(b.prototype,"add",{enumerable:!1,configurable:!0,writable:!0,value:function(){d.apply(this,arguments);return this}})}})(self);(function(a){a.String.prototype.startsWith||a.Object.defineProperty(a.String.prototype,"startsWith",{enumerable:!1,configurable:!0,writable:!0,value:Qb})})(self);if(self.document){La();var Rb=self,Sb=Rb.HTMLDocument||Rb.Document;Sb&&!Sb.prototype.contains&&Rb.Object.defineProperty(Sb.prototype,"contains",{enumerable:!1,configurable:!0,writable:!0,value:Ma});var sb=self;rb()&&(pb=Element.prototype.getBoundingClientRect,sb.Object.defineProperty(sb.Element.prototype,"getBoundingClientRect",{value:qb}));var Vb,Tb=function(){},y=self,Ub=y.document,W=y.customElements;Vb=!!(W&&W.define&&W.get&&W.whenDefined);var Wb;if(!(Wb=!Ub)){var Xb;if(Xb=Vb)Xb=-1===y.HTMLElement.toString().indexOf("[native code]");Wb=Xb}if(!Wb){var Yb=!0,Zb=!1;if(Tb&&Vb)try{var $b=y.Reflect,ac=Object.create(Tb.prototype);Function.call.call(Tb,ac);Zb=!(null==$b||!$b.construct)}catch(a){Yb=!1}Zb?Ja():Yb&&Ga()}var bc,wb=self,R=wb;(bc=!R.IntersectionObserver||!R.IntersectionObserverEntry||!!R.IntersectionObserver._stub||!ub())||(bc=/apple/i.test(R.navigator.vendor));if(bc){var P=wb;if(P.IntersectionObserver){var cc=P.IntersectionObserver;P.IntersectionObserver=tb();P.IntersectionObserver._stub=Q;P.IntersectionObserver._native=cc}else P.IntersectionObserver=Q,P.IntersectionObserver._stub=Q}vb();var X=self;X.ResizeObserver&&!X.ResizeObserver._stub||X.ResizeObserver||(X.ResizeObserver=V,X.ResizeObserver._stub=V);var dc=self;dc.AbortController||(Object.defineProperty(dc,"AbortController",{configurable:!0,enumerable:!1,writable:!0,value:ka}),Object.defineProperty(dc,"AbortSignal",{configurable:!0,enumerable:!1,writable:!0,value:la}))}function ec(){this.Z=100;this.M=this.U=0;this.H=Object.create(null)}ec.prototype.has=function(a){return!!this.H[a]};ec.prototype.get=function(a){var b=this.H[a];if(b)return b.access=++this.M,b.payload};ec.prototype.put=function(a,b){this.has(a)||this.U++;this.H[a]={payload:b,access:this.M};if(!(this.U<=this.Z)){a=this.H;var d,c=this.M+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.U--)}};var fc,gc;function hc(a){fc||(fc=self.document.createElement("a"),gc=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new ec));var b=gc,c=fc;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}var Y;function ic(a,b){function c(g){try{return e(g)}catch(l){var h,k;null==(k=(h=self).__AMP_REPORT_ERROR)||k.call(h,l);throw l}}var d=a,e=b,f=jc();d.addEventListener("message",c,f?void 0:!1);return function(){var g;null==(g=d)||g.removeEventListener("message",c,f?void 0:!1);c=d=e=null}}function jc(){if(void 0!==Y)return Y;Y=!1;try{var a={get capture(){Y=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return Y}function kc(a,b){return ic(a,b)}function lc(){this.win=window}lc.prototype.start=function(){var a=this.win.document,b=a.createElement("style");a:{var c=B(this.win.location.search),d=this.win;var e=d.document;d=d.navigator;c=[c.hl,d.language,d.userLanguage,"en-US"];for(d=0;d<c.length;d++){var f=c[d];if(f){if(f){f=f.split("-");for(var g="",h="",k=0;k<f.length;k++)0<k&&(g+=", ",h+="-"),h+=0==k?f[k].toLowerCase():f[k].toUpperCase(),h=h.replace(/[^a-zA-Z\-]/g,""),g+='[lang="'+h+'"]';f=g}else f=null;if(f&&e.querySelector(f)){e=f+" {display: block}";break a}}}e=""}b.textContent=e;a.head.appendChild(b);a=B(this.win.location.search);this.win.opener&&this.win.opener!=this.win?mc(this).then(this.da.bind(this),this.S.bind(this)):a.url?(e=a.url,/^https?%/i.test(e)&&(e=Ua(e)),a=this.win.location,b=a.replace,c=/^https?:/i.test(e),I().assert(c,'URL must start with "http://" or "https://". Invalid value: %s',e,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0),e=hc(e).href,b.call(a,e),oa()):(a=Error("No opener or return location available"),this.S(a),Promise.reject(a))};function mc(a){function b(){}var c=a.win.location.hash;return new Promise((function(d,e){var f=a.win.opener;f?(b=kc(a.win,(function(g){g.data&&"amp"==g.data.sentinel&&"result-ack"==g.data.type&&d()})),f.postMessage({sentinel:"amp",type:"result",result:c},"*"),a.win.setTimeout((function(){e(Error("Timed out"))}),5e3)):e(Error("Opener not available"))})).then((function(){b()}),(function(d){b();throw d}))}lc.prototype.da=function(){var a=this;try{this.win.close()}catch(d){}var b=Date.now()+6e4,c=this.win.setInterval((function(){if(a.win.closed||Date.now()>b)clearInterval(c);else try{a.win.close()}catch(d){}}),500);this.win.setTimeout((function(){a.S(Error("Failed to close the dialog"))}),3e3)};lc.prototype.S=function(a){var b=this;this.win.console&&this.win.console.log&&(this.win.console.error||this.win.console.log).call(this.win.console,"Postback failed: ",a);var c=this.win.document;c.documentElement.classList.toggle("amp-error",!0);c.documentElement.setAttribute("data-error","postback");c.getElementById("closeButton").onclick=function(){try{b.win.close()}catch(d){}b.win.setTimeout((function(){b.win.closed||c.documentElement.setAttribute("data-error","close")}),1e3)}};function nc(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);return oc(a,"ampdoc")}function pc(a){var b=qc(a);b=qc(b);b=b.isSingleDoc()?b.win:b;return oc(b,"viewer")}function qc(a){return a.nodeType?nc((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function oc(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}var rc,sc="Webkit webkit Moz moz ms O o".split(" ");var tc=!1;function uc(a){if(!tc){tc=!0;a=a.body;var c,b={opacity:1,visibility:"visible",animation:"none"};for(c in b){var d=a,e=b[c];var f=d.style;var g=c;if(g.startsWith("--"))f=g;else{rc||(rc=Object.create(null));var h=rc[g];if(!h){h=g;if(void 0===f[g]){var k=g;k=k.charAt(0).toUpperCase()+k.slice(1);b:{for(var l=0;l<sc.length;l++){var q=sc[l]+k;if(void 0!==f[q]){k=q;break b}}k=""}void 0!==f[k]&&(h=k)}rc[g]=h}f=h}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}}}function vc(a){return"loading"!=a.readyState&&"uninitialized"!=a.readyState}function wc(a,b){var c=vc(a);if(c)b(a);else{var d=function(){vc(a)&&(c||(c=!0,b(a)),a.removeEventListener("readystatechange",d))};a.addEventListener("readystatechange",d)}}function xc(){var a=yc();return function(b){return setTimeout(b,a())}}function yc(){var a=0;return function(){var b=Math.pow(1.5,a++);var c=b*(c||.3)*Math.random();.5<Math.random()&&(c*=-1);b+=c;return 1e3*b}}var Z=self.__AMP_ERRORS||[];self.__AMP_ERRORS=Z;function zc(a){zc=xc();return zc(a)}function Ac(a){try{return JSON.stringify(a)}catch(b){return String(a)}}function Bc(a,b,c,d,e){var f=this;!this||!this.document||e&&e.expected||uc(this.document);if(!C().development){var g=!1;try{g=Cc()}catch(k){}if(!(g&&.01<Math.random())){var h=Dc(a,b,c,d,e,g);h&&zc((function(){try{return Ec(f,h).catch((function(){}))}catch(k){}}))}}}function Ec(a,b){return b.pt&&.9>Math.random()?oa():Fc(a,b).then((function(c){if(!c){var d=new XMLHttpRequest;d.open("POST",.1>Math.random()?E.betaErrorReporting:E.errorReporting,!0);d.send(JSON.stringify(b))}}))}function Fc(a,b){a=nc(a);if(!a.isSingleDoc())return Promise.resolve(!1);var c=a.getSingleDoc();if(!c.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))return Promise.resolve(!1);var d=pc(c);return d.hasCapability("errorReporter")?d.isTrustedViewer().then((function(e){if(!e)return!1;d.sendMessage.call(d,"error",{m:b.m,a:b.a,s:b.s,el:b.el,ex:b.ex,v:b.v,pt:b.pt});return!0})):Promise.resolve(!1)}function Dc(a,b,c,d,e,f){var g=a;e&&(g=e.message?e.message:String(e));g||(g="Unknown error");a=g;var h=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var k=!(self&&self.window),l=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||k)if(h=!0,.001<l)return;var q=Ra(a);if(!(q&&.1<l)){g=Object.create(null);g.v=C().rtvVersion;g.noAmp=f?"1":"0";g.m=a.replace("​​​","");g.a=q?"1":"0";g.ex=h?"1":"0";g.dw=k?"1":"0";var p="1p";self.context&&self.context.location?(g["3p"]="1",p="3p"):C().runtime&&(p=C().runtime);g.rt=p;"inabox"===p&&(g.adid=C().a4aId);var w;f=!(null==(w=self.AMP_CONFIG)||!w.canary);g.ca=f?"1":"0";var u;w=(null==(u=self.AMP_CONFIG)?void 0:u.type)||"unknown";g.bt=w;self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(g.or=self.location.ancestorOrigins[0]);self.viewerState&&(g.vs=self.viewerState);self.parent&&self.parent!=self&&(g.iem="1");if(self.AMP&&self.AMP.viewer){var x=self.AMP.viewer.getResolvedViewerUrl(),K=self.AMP.viewer.maybeGetMessagingOrigin();x&&(g.rvu=x);K&&(g.mso=K)}var U=[];u=self.__AMP__EXPERIMENT_TOGGLES||null;for(var n in u)U.push(n+"="+(u[n]?"1":"0"));g.exps=U.join(",");if(e){var J;g.el=(null==(J=e.associatedElement)?void 0:J.tagName)||"u";e.args&&(g.args=JSON.stringify(e.args));q||e.ignoreStack||!e.stack||(g.s=e.stack);e.message&&(e.message+=" _reported_")}else g.f=b||"",g.l=c||"",g.c=d||"";g.r=self.document?self.document.referrer:"";g.ae=Z.join(",");g.fr=self.location.originalHash||self.location.hash;"production"===g.bt&&(g.pt="1");b=a;25<=Z.length&&Z.splice(0,Z.length-25+1);Z.push(b);return g}}}function Cc(){var a=self;if(!a.document)return!1;a=a.document.querySelectorAll("script[src]");for(var b=0;b<a.length;b++){var c=a[b].src.toLowerCase();"string"==typeof c&&(c=hc(c));if(!E.cdnProxyRegex.test(c.origin))return!0}return!1}(function(){tc=!0})(window);(function(){H=ab;eb();I()})();(function(a){self.__AMP_REPORT_ERROR=a})((function(a,b){try{if(a)if(void 0!==a.message)a=ta(a);else{var c=a;a=Error(Ac(c));a.origError=c}else a=Error("Unknown error");if(a.reported)return a;a.reported=!0;if(a.messageArray){var d,e=Oa(a.messageArray,(function(h){return null==(d=h)?void 0:d.tagName}));-1<e&&(a.associatedElement=a.messageArray[e])}var f=b||a.associatedElement;f&&f.classList&&(f.classList.add("i-amphtml-error"),C().development&&(f.classList.add("i-amphtml-element-error"),f.setAttribute("error-message",a.message)));if(self.console&&(Ra(a.message)||!a.expected)){var g=console.error||console.log;a.messageArray?g.apply(console,a.messageArray):f?g.call(console,a.message,f):g.call(console,a.message)}f&&f.$&&f.$("amp:error",a.message);Bc.call(self,void 0,void 0,void 0,void 0,a)}catch(h){setTimeout((function(){throw h}))}return a}));(function(a,b){wc(a,b)})(document,(function(){(new lc).start()}))})();//# sourceMappingURL=amp-login-done-0.1.js.map