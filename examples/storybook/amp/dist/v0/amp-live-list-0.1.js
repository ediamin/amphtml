(self.AMP=self.AMP||[]).push({n:"amp-live-list",ev:"0.1",l:true,v:"2106040012000",m:0,f:function(AMP,_){"use strict";var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var da={a:!0},t={};try{t.__proto__=da;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v,u=p;function w(){return v?v:v=Promise.resolve(void 0)}function ea(){var a=this;this.promise=new Promise((function(b,c){a.resolve=b;a.reject=c}))}var x=Array.isArray;function fa(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d);return c}function ha(a,b){var c;"number"!==typeof c&&(c=0);return c+b.length>a.length?!1:-1!==a.indexOf(b,c)}var ia=Object.prototype.toString;function y(a){return a||{}}function ja(a){return 1==(null==a?void 0:a.nodeType)?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}function ka(a,b,c,d){var e=void 0===c?"Assertion failed":c;if(!b){a&&!ha(e,a)&&(e+=a);for(var f=3,g=e.split("%s"),h=g.shift(),n=[h];g.length;){var l=arguments[f++],r=g.shift();h+=ja(l)+r;n.push(l,r.trim())}f=Error(h);f.messageArray=fa(n,(function(za){return""!==za}));var B,Y;null==(Y=(B=self).__AMP_REPORT_ERROR)||Y.call(B,f);throw f}}var la=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function z(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function ma(a){var b=Object.create(null);if(!a)return b;for(var c;c=la.exec(a);){var d=z(c[1],c[1]);c=c[2]?z(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}var A=self.AMP_CONFIG||{},na=("string"==typeof A.cdnProxyRegex?new RegExp(A.cdnProxyRegex):A.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function oa(a){if(!self.document||!self.document.head||self.location&&na.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var pa={thirdParty:A.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:A.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof A.thirdPartyFrameRegex?new RegExp(A.thirdPartyFrameRegex):A.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:A.cdnUrl||oa("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:na,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:A.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:A.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:A.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:A.geoApiUrl||oa("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var C=self.__AMP_LOG;function D(){if(!C.user)throw Error("failed to call initLogConstructor");return C.user}function E(a,b,c,d){return D().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function F(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function qa(a){var b=H(a);b=I(b);return G(b,"viewer")}function H(a){return a.nodeType?F((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function I(a){a=H(a);return a.isSingleDoc()?a.win:a}function G(a,b){ra(a,b);a=J(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function sa(a){var b;(b=J(a).liveListManager)?b.promise?b=b.promise:(G(a,"liveListManager"),b=b.promise=Promise.resolve(b.obj)):b=null;var c=b;if(c)return c;a=J(a);a.liveListManager=ta();return a.liveListManager.promise}function J(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function ra(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)}function ta(){var a=new ea,b=a.promise,c=a.reject;a=a.resolve;b.catch((function(){}));return{obj:null,promise:b,resolve:a,reject:c,context:null,ctor:null}}function ua(a,b){ka("​​​",a,"Object expected: %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var K;function L(a,b){/^[\w-]+$/.test(b);var c="> ["+b+"]";if(void 0!==K)var d=K;else{try{var e=a.ownerDocument,f=e.createElement("div"),g=e.createElement("div");f.appendChild(g);d=f.querySelector(":scope div")===g}catch(h){d=!1}d=K=d}d?a=a.querySelector(c.replace(/^|,/g,"$&:scope ")):(a.classList.add("i-amphtml-scoped"),c=c.replace(/^|,/g,"$&.i-amphtml-scoped "),c=a.querySelectorAll(c),a.classList.remove("i-amphtml-scoped"),a=void 0===c[0]?null:c[0]);return a}function va(a){if(!a)return[];for(var b=a.querySelectorAll("script[custom-element],script[custom-template]"),c=[],d=0;d<b.length;d++){var g,e=b[d],f=e.getAttribute("custom-element")||e.getAttribute("custom-template");if(g=e.src){var h=g.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);g=h?h[2]:void 0;h=h?h[3]:void 0;g=g&&h?{extensionId:g,extensionVersion:h}:null}else g=null;f&&g&&c.push({extensionId:f,extensionVersion:g.extensionVersion})}return c}function wa(){var a=0;return function(){var b=Math.pow(2,a++);b+=xa(b);return 1e3*b}}function xa(a,b){b=b||.3;var c=a*b*Math.random();.5<Math.random()&&(c*=-1);return c}function M(a,b,c){this.win=a;this.ca=b;this.Y=c;this.N=null;this.K=!1;this.ia=this.I=null}function ya(a){return a.I?a.I():a.ca+xa(a.ca,.2)}M.prototype.isRunning=function(){return this.K};M.prototype.start=function(a){this.K||(this.K=!0,N(this,a))};M.prototype.stop=function(){this.K&&(this.K=!1,this.N&&(G(this.win,"timer").cancel(this.N),this.N=null))};function N(a,b){if(a.K){var c=function(){a.ia=a.Y().then((function(){a.I&&(a.I=null);N(a)})).catch((function(d){if(d.retriable)a.I||(a.I=wa()),N(a);else throw d}))};b?c():a.N=G(a.win,"timer").delay(c,ya(a))}}function O(){this.da=100;this.S=this.V=0;this.M=Object.create(null)}O.prototype.has=function(a){return!!this.M[a]};O.prototype.get=function(a){var b=this.M[a];if(b)return b.access=++this.S,b.payload};O.prototype.put=function(a,b){this.has(a)||this.V++;this.M[a]={payload:b,access:this.S};if(!(this.V<=this.da)){a=this.M;var d,c=this.S+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.V--)}};var P,Ba,Aa=y({c:!0,v:!0,a:!0,ad:!0}),Ca=/[?&]amp_js[^&]*/,Da=/[?&]amp_gsa[^&]*/,Ea=/[?&]amp_r[^&]*/,Fa=/[?&]amp_kit[^&]*/,Ga=/[?&]usqp[^&]*/;function Q(a){P||(P=self.document.createElement("a"),Ba=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new O));var b=Ba,c=P;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function Ha(a,b,c){b=encodeURIComponent(b)+"="+encodeURIComponent(c);b&&(a=a.split("#",2),c=a[0].split("?",2),b=c[0]+(c[1]?"?"+c[1]+"&"+b:"?"+b),a=b+=a[1]?"#"+a[1]:"");return a}function Ia(a){"string"==typeof a&&(a=Q(a));return pa.cdnProxyRegex.test(a.origin)}function Ja(a){if(a.__AMP__EXPERIMENT_TOGGLES)var b=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}var e;c=null==(e=a.AMP_CONFIG)?void 0:e["allow-doc-opt-in"];if(x(c)&&c.length&&(e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(e=e.getAttribute("content").split(","),d=m(e),e=d.next();!e.done;e=d.next())e=e.value,c.includes(e)&&(b[e]=!0);c=Object;e=c.assign;d="";try{"localStorage"in a&&(d=a.localStorage.getItem("amp-experiment-toggles"))}catch(n){if(C.dev)var f=C.dev;else throw Error("failed to call initLogConstructor");f.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var g;d=(null==(g=d)?void 0:g.split(/\s*,\s*/g))||[];g=Object.create(null);d=m(d);for(f=d.next();!f.done;f=d.next())(f=f.value)&&("-"==f[0]?g[f.substr(1)]=!1:g[f]=!0);e.call(c,b,g);var h;g=null==(h=a.AMP_CONFIG)?void 0:h["allow-url-opt-in"];if(x(g)&&g.length)for(a=ma(a.location.originalHash||a.location.hash),h=m(g),e=h.next();!e.done;e=h.next())g=e.value,c=a["e-"+g],"1"==c&&(b[g]=!0),"0"==c&&(b[g]=!1)}return!!b["untrusted-xhr-interception"]}var Ka=["GET","POST"];function La(a,b){var c=Object.assign({},b),d=b.body;if(d&&"function"==typeof d.getFormData){var e=b.body;c.headers["Content-Type"]="multipart/form-data;charset=utf-8";b=e.entries();d=[];for(var f=b.next();!f.done;f=b.next())d.push(f.value);c.body=d}return{input:a,init:c}}function Ma(a,b){ua("[object Object]"===ia.call(a),a);if("document"!=b)return new Response(a.body,a.init);var c=Object.create(null),d={status:200,statusText:"OK",getResponseHeader:function(f){return c[String(f).toLowerCase()]||null}};if(a.init){var e=a.init;x(e.headers)&&e.headers.forEach((function(f){var g=f[1];c[String(f[0]).toLowerCase()]=String(g)}));e.status&&(d.status=parseInt(e.status,10));e.statusText&&(d.statusText=String(e.statusText))}return new Response(a.body?String(a.body):"",d)}function Na(a,b,c,d){if(!b)return w();var e=d.prerenderSafe?w():b.whenFirstVisible(),f=qa(b),g=Ia(c),h=f.hasCapability("xhrInterceptor"),n=d.bypassInterceptorForDev&&!1;return g||!h||n||!b.getRootNode().documentElement.hasAttribute("allow-xhr-interception")?e:e.then((function(){return f.isTrustedViewer()})).then((function(l){if(l||Ja(a)){var r=y({originalRequest:La(c,d)});return f.sendMessageAwaitResponse("xhr",r).then((function(B){return Ma(B,d.responseType)}))}}))}function Oa(a,b,c){if(!1!==c.ampCors){c=Q(b);c=ma(c.search);E(!("__amp_source_origin"in c),"Source origin is not allowed in %s",b);a=a.location.href;"string"==typeof a&&(a=Q(a));if(Ia(a)){c=a.pathname.split("/");E(Aa[c[1]],"Unknown path prefix in url %s",a.href);var d=c[2],e="s"==d?"https://"+decodeURIComponent(c[3]):"http://"+decodeURIComponent(d);E(0<e.indexOf("."),"Expected a . in origin %s",e);c.splice(1,"s"==d?3:2);c=e+c.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(Ca,"").replace(Da,"").replace(Ea,"").replace(Fa,"").replace(Ga,"").replace(/^[?&]/,""))?"?"+d:"":"";a=c+d+(a.hash||"")}else a=a.href;a=Q(a).origin;b=Ha(b,"__amp_source_origin",a)}return b}function Pa(){var a={};var b=a.method;void 0===b?b="GET":(b=b.toUpperCase(),Ka.includes(b));a.method=b;a.headers=a.headers||y({});a.headers.Accept="text/html";return a}function Qa(a,b,c){c=c||{};var d=a.origin||Q(a.location.href).origin;a=Q(b).origin;d==a&&(c.headers=c.headers||{},c.headers["AMP-Same-Origin"]="true");return c}function Ra(a){return new Promise((function(b){if(a.ok)return b(a);b=a.status;var c=D().createError("HTTP error "+b);c.retriable=415==b||500<=b&&600>b;c.response=a;throw c}))}function Sa(a,b){var c=Pa();c=Qa(a,b,c);b=Oa(a,b,c);var d=F(a,"ampdoc");d=d.isSingleDoc()?d.getSingleDoc():null;c.responseType="document";return Na(a,d,b,c).then((function(e){return e?e.text().then((function(f){return(new DOMParser).parseFromString(f,"text/html")})):Ta(b,c).then((function(f){return f.xhr.responseXML}))}))}function Ta(a,b){return new Promise((function(c,d){var e=new XMLHttpRequest;e.open(b.method||"GET",a,!0);e.withCredentials="include"==b.credentials;e.responseType="document";for(var f in b.headers)e.setRequestHeader(f,b.headers[f]);e.onreadystatechange=function(){if(!(2>e.readyState))if(100>e.status||599<e.status)e.onreadystatechange=null,d(D().createExpectedError("Unknown HTTP status "+e.status));else if(4==e.readyState){var g={status:e.status,statusText:e.statusText,headers:Ua(e.getAllResponseHeaders())};g=new Response("",g);g=Ra(g).then((function(h){return{response:h,xhr:e}}));c(g)}};e.onerror=function(){d(D().createExpectedError("Request failure"))};e.onabort=function(){d(D().createExpectedError("Request aborted"))};"POST"==b.method?e.send(b.body):e.send()}))}function Ua(a){var b=y({});a.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(c){var d=c.split(":"),e=d.shift().trim();e&&(d=d.join(":").trim(),b[e]=d)}));return b}function Va(a){var b=this;this.ampdoc=a;this.j=Object.create(null);this.fa=F(this.ampdoc.win,"extensions");this.T=15e3;this.Z=[this.T];this.C=null;this.ma=this.ampdoc.getUrl();this.O=0;this.Y=this.ga.bind(this);this.ha=Wa(a.getRootNode());this.ampdoc.whenReady().then((function(){b.T=Math.min.apply(Math,b.Z);var c=Object.keys(b.j).map((function(d){return b.j[d].getUpdateTime()}));b.O=Math.max.apply(Math,c);b.C=new M(b.ampdoc.win,b.T,b.Y);b.ampdoc.isVisible()&&R(b)&&b.C.start();Xa(b)}))}k=Va.prototype;k.dispose=function(){this.C.stop()};function R(a){return Object.keys(a.j).some((function(b){return a.j[b].isEnabled()}))}k.ga=function(){var a=this.ma;0<this.O&&(a=Ha(a,"amp_latest_update_time",String(this.O)));if(this.ha){var b=this.ampdoc.getBody();b=H(b);b=I(b);a=(ra(b,"url")?G(b,"url"):null).getCdnUrlOnOrigin(a)}return Sa(this.ampdoc.win,a).then(this.la.bind(this))};k.la=function(a){Ya(this,a);var b=Array.prototype.slice.call(a.getElementsByTagName("amp-live-list")).concat(Za(this,a)).map(this.ka.bind(this)),c=Math.max.apply(Math,[0].concat(b));0<c&&(this.O=c);R(this)||this.C.stop()};function Za(a,b){return Object.keys(a.j).filter((function(c){return a.j[c].hasCustomSlot()})).map((function(c){return b.getElementById(a.j[c].element.AMP_LIVE_LIST_CUSTOM_SLOT_ID)}))}k.ka=function(a){var b="i-amphtml-"+a.id+"-dynamic-list",c=b in this.j?b:a.getAttribute("id");E(c,"amp-live-list must have an id.");E(c in this.j,"amp-live-list#%s found but did not exist on original page load.",c);var d=this.j[c];d.toggle(!a.hasAttribute("disabled")&&!a.hasAttribute("live-story-disabled"));return d.isEnabled()?d.update(a):0};k.register=function(a,b){a in this.j||(this.j[a]=b,this.Z.push(b.getInterval()),b.isEnabled()&&this.C&&this.ampdoc.isVisible()&&this.C.start())};function Xa(a){a.ampdoc.onVisibilityChanged((function(){a.ampdoc.isVisible()&&R(a)?a.C.start(!0):a.C.stop()}))}function Ya(a,b){va(b).forEach((function(c){a.fa.installExtensionForDoc(a.ampdoc,c.extensionId,c.extensionVersion)}))}function Wa(a){if(!a.ownerDocument)return!1;var b=a.ownerDocument.documentElement.getAttribute("transformed");return!!b&&b.startsWith("google;v=")}function $a(a,b){return Math.max(parseInt(a,10)||0,b)}function S(a){a=AMP.BaseElement.call(this,a)||this;a.D=null;a.$=null;a.X=null;a.h=null;a.P=null;a.U="";a.ba=0;a.aa=0;a.H=0;a.J=!1;a.A=Object.create(null);a.L=[];a.B=[];a.G=[];a.R=null;a.o="";a.F=0;a.ea=a.ja.bind(a);return a}var T=AMP.BaseElement;S.prototype=ba(T.prototype);S.prototype.constructor=S;if(u)u(S,T);else for(var U in T)if("prototype"!=U)if(Object.defineProperties){var ab=Object.getOwnPropertyDescriptor(T,U);ab&&Object.defineProperty(S,U,ab)}else S[U]=T[U];S.na=T.prototype;k=S.prototype;k.isLayoutSupported=function(a){return"container"==a||"fixed-height"==a};k.buildCallback=function(){var a=this;this.D=this.getViewport();sa(I(this.element)).then((function(d){a.$=d;a.$.register(a.U,a)}));this.o=this.element.AMP_LIVE_LIST_CUSTOM_SLOT_ID;this.X=E(bb(this,this.element),'amp-live-list must have an "update" slot.');this.h=E(cb(this,this.element),'amp-live-list must have an "items" slot.');this.P=L(this.element,"pagination");this.U=E(this.element.getAttribute("id"),"amp-live-list must have an id.");this.ba=$a(this.element.getAttribute("data-poll-interval"),15e3);var b=this.element.getAttribute("data-max-items-per-page");E(0<Number(b)||this.element.hasAttribute("disable-pagination"),"amp-live-list # %s must have data-max-items-per-page attribute with numeric value. Found %s.",this.U,b);var c=[].slice.call(this.h.children).filter((function(d){return!d.hasAttribute("data-tombstone")})).length;this.aa=Math.max($a(b,1),c);this.J="ascending"===this.element.getAttribute("sort");V(this,!1);W(this.h,(function(d){d.classList.add("amp-live-list-item")}));this.F=db(this,this.h,!0);this.registerDefaultAction(this.W.bind(this),"update");this.element.hasAttribute("aria-live")||this.element.setAttribute("aria-live","polite")};k.hasCustomSlot=function(){return!!this.o};k.isEnabled=function(){return!this.element.hasAttribute("disabled")};k.toggle=function(a){a?this.element.removeAttribute("disabled"):this.element.setAttribute("disabled","")};k.update=function(a){var b=this,c=cb(this,a);if(!c)return this.H;db(this,c);var d=eb(this,c);fb(this,d.insert);gb(this,d.replace);this.G.push.apply(this.G,d.tombstone);this.R=L(a,"pagination");0<this.L.length?(this.element.hasAttribute("auto-insert")&&this.W(),this.mutateElement((function(){V(b,!0);b.D.updateFixedLayer()}))):(0<this.B.length||0<this.G.length)&&this.W();return this.H};k.W=function(){var a=this,b=0<this.L.length,c=0<this.G.length,d=0<this.B.length,e=b||d,f=this.mutateElement((function(){var g=D().assertElement(a.h);b&&(W(g,(function(h){h.classList.remove("amp-live-list-item-new")})),a.F+=hb(a,a.L),a.L.length=0);0<a.B.length&&(ib(g,a.B),a.B.length=0);0<a.G.length&&(a.F-=jb(g,a.G),a.G.length=0);(b||c)&&a.P&&a.R&&(a.element.replaceChild(a.R,a.P),a.P=L(a.element,"pagination"));V(a,!1);a.R=null;return kb(a,g)}));e&&(f=f.then((function(){var g=a.win.document.createEvent("Event");g.initEvent("amp:dom-update",!0,!0);a.h.dispatchEvent(g)})));b&&!this.element.hasAttribute("disable-scrolling")&&(f=f.then((function(){return a.D.animateScrollIntoView(a.J&&a.h.lastElementChild?a.h.lastElementChild:a.element,a.J?"bottom":"top")})));return f};function V(a,b){a.X.classList.toggle("amp-hidden",!b);a.X.classList.toggle("amp-active",b)}function hb(a,b){var c=0;b.forEach((function(d){if(0===a.h.childElementCount)a.h.appendChild(d);else{var e=X(d);if(0<e)if(a.J)for(var f=a.h.lastElementChild;f;f=f.previousElementSibling){var g=X(f);if(0<g)if(e>=g){a.h.insertBefore(d,f.nextElementSibling);c++;break}else if(!f.previousElementSibling){a.h.insertBefore(d,f);c++;break}}else for(f=a.h.firstElementChild;f;f=f.nextElementSibling){var h=X(f);if(0<h)if(e>=h){a.h.insertBefore(d,f);c++;break}else if(!f.nextElementSibling){a.h.appendChild(d);c++;break}}}}));return c}function ib(a,b){var c=0;b.forEach((function(d){var e=d.getAttribute("id"),f=a.querySelector("#"+e);f&&(a.replaceChild(d,f),c++)}))}function jb(a,b){var c=0;b.forEach((function(d){d=d.getAttribute("id");if(d=a.querySelector("#"+d))d.setAttribute("data-tombstone",""),d.textContent="",c++}));return c}function kb(a,b){var c=a.F-a.aa;if(1>c)return w();var d=[],e=[];if(a.J)for(var f=b.firstElementChild;f&&!(d.length>=c);f=f.nextElementSibling)f.hasAttribute("data-tombstone")||d.push(f);else for(f=b.lastElementChild;f&&!(d.length>=c);f=f.previousElementSibling)f.hasAttribute("data-tombstone")||d.push(f);return a.getVsync().runPromise({measure:function(){for(var g=0;g<d.length;g++){var h=d[g];if(a.J){if(!(a.D.getLayoutRect(h).bottom<a.D.getScrollTop()))break}else if(!(a.D.getLayoutRect(h).top>a.D.getScrollTop()+a.D.getSize().height))break;e.push(h)}},mutate:function(){e.forEach((function(g){b.removeChild(g);a.F--}))}})}function fb(a,b){b.sort(a.ea).forEach((function(c){c.classList.add("amp-live-list-item");c.classList.add("amp-live-list-item-new")}));a.L.push.apply(a.L,b)}function gb(a,b){b.forEach((function(c){a:{var d=a.B;for(var e=0;e<d.length;e++)if(d[e].getAttribute("id")==c.getAttribute("id")){d=e;break a}d=-1}var f=d;c.classList.add("amp-live-list-item");-1==f?a.B.push(c):a.B[f]=c}))}k.getInterval=function(){return this.ba};function eb(a,b){var c=[],d=[],e=[];for(b=b.firstElementChild;b;b=b.nextElementSibling){var f=b.getAttribute("id"),g=X(b);if(f&&0<g){var h=a,n=b,l=n.getAttribute("id");if(n.hasAttribute("data-tombstone")||l in h.A)if(h=a,l=b,!l.hasAttribute("data-update-time")||l.hasAttribute("data-tombstone")?h=!1:(n=l.getAttribute("id"),l=Z(l),h=n in h.A&&-1!=h.A[n]&&l>h.A[n]),h){var r=Z(b);a.A[f]=r;f=a.win.document.importNode(b,!0);r>a.H&&(a.H=r);d.push(f)}else b.hasAttribute("data-tombstone")&&-1!=a.A[f]&&(a.A[f]=-1,e.push(b));else f=a.win.document.importNode(b,!0),c.push(f),lb(a,b)}}return{insert:c,replace:d,tombstone:e}}function lb(a,b){var c=b.getAttribute("id");b=Z(b);b>a.H&&(a.H=b);a.A[c]=b}function db(a,b,c){var d=0;W(b,(function(e){e.hasAttribute("id")&&0<X(e)&&(d++,c&&lb(a,e))}));return d}function W(a,b){for(a=a.firstElementChild;a;a=a.nextElementSibling)b(a)}function bb(a,b){return a.o?b.id===a.o?b:a.win.document.getElementById(a.o):L(b,"update")}function cb(a,b){return a.o?b.id===a.o?b:a.win.document.getElementById(a.o):L(b,"items")}k.ja=function(a,b){return X(a)-X(b)};function X(a){return Number(a.getAttribute("data-sort-time"))}function Z(a){return a.hasAttribute("data-update-time")?Number(a.getAttribute("data-update-time")):X(a)}k.getUpdateTime=function(){return this.H};(function(a){a.registerElement("amp-live-list",S,"amp-live-list>[update]{position:relative;z-index:1000}amp-live-list>.amp-active[update]{display:block}amp-live-list>[items]>[data-tombstone]{display:none}@keyframes amp-live-list-item-highlight{0%{box-shadow:0 0 5px 2px #51cbee}to{box-shadow:0}}\n/*# sourceURL=/extensions/amp-live-list/0.1/amp-live-list.css*/");a.registerServiceForDoc("liveListManager",Va)})(self.AMP)}});//# sourceMappingURL=amp-live-list-0.1.js.map