(self.AMP=self.AMP||[]).push({n:"amp-facebook-like",ev:"0.1",l:true,v:"2106040012000",m:0,f:function(AMP,_){"use strict";function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}ca(this);"function"===typeof Symbol&&Symbol("x");var t;if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var u;a:{var da={a:!0},x={};try{x.__proto__=da;u=x.a;break a}catch(a){}u=!1}t=u?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var y=t;var ea=Array.isArray;var fa=Object.prototype.toString;function z(a){return a||{}}var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ia(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}}function A(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=ia(c[1],c[1]);c=c[2]?ia(c[2].replace(/\+/g," "),c[2]):"";b[d]=c}return b}var B="";function C(){var a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{b=A(a.location.originalHash||a.location.hash);B||(B=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012106040012000");var c=A(a.location.originalHash||a.location.hash);c=!(!["1","actions","amp","amp4ads","amp4email"].includes(c.development)&&!a.AMP_DEV_MODE);b=a.__AMP_MODE={localDev:!1,development:c,examiner:"2"==b.development,esm:!1,geoOverride:b["amp-geo"],minified:!0,test:!1,log:b.log,version:"2106040012000",rtvVersion:B}}return b}var D=self.AMP_CONFIG||{},ja=("string"==typeof D.cdnProxyRegex?new RegExp(D.cdnProxyRegex):D.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ka(a){if(!self.document||!self.document.head||self.location&&ja.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}var E={thirdParty:D.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:D.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof D.thirdPartyFrameRegex?new RegExp(D.thirdPartyFrameRegex):D.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:D.cdnUrl||ka("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:ja,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:D.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:D.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:D.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:D.geoApiUrl||ka("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var F=self.__AMP_LOG;function ma(){if(!F.user)throw Error("failed to call initLogConstructor");return F.user}function G(){if(F.dev)return F.dev;throw Error("failed to call initLogConstructor")}function H(a,b,c,d,e){ma().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)}function na(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return oa(a,b)}function pa(a,b){var c=I(a);c=I(c);c=c.isSingleDoc()?c.win:c;return oa(c,b)}function I(a){return a.nodeType?na((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function oa(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var J;function qa(a,b){function c(g){try{return e(g)}catch(h){var k,n;null==(n=(k=self).__AMP_REPORT_ERROR)||n.call(k,h);throw h}}var d=a,e=b,f=ra();d.addEventListener("message",c,f?void 0:!1);return function(){var g;null==(g=d)||g.removeEventListener("message",c,f?void 0:!1);c=d=e=null}}function ra(){if(void 0!==J)return J;J=!1;try{var a={get capture(){J=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return J}function sa(a,b){return qa(a,b)}function P(){this.C=100;this.o=this.A=0;this.j=Object.create(null)}P.prototype.has=function(a){return!!this.j[a]};P.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.o,b.payload};P.prototype.put=function(a,b){this.has(a)||this.A++;this.j[a]={payload:b,access:this.o};if(!(this.A<=this.C)){a=this.j;var d,c=this.o+1;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.A--)}};z({c:!0,v:!0,a:!0,ad:!0});var Q,ta;function R(a){Q||(Q=self.document.createElement("a"),ta=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new P));var b=ta,c=Q;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function ua(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}var e,f=null==(e=a.AMP_CONFIG)?void 0:e["allow-doc-opt-in"];if(ea(f)&&f.length){var g=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(g){var k=g.getAttribute("content").split(",");e=r(k);for(c=e.next();!c.done;c=e.next()){var n=c.value;f.includes(n)&&(b[n]=!0)}}}c=Object;e=c.assign;var h="";try{"localStorage"in a&&(h=a.localStorage.getItem("amp-experiment-toggles"))}catch(la){G().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var p;h=(null==(p=h)?void 0:p.split(/\s*,\s*/g))||[];p=Object.create(null);h=r(h);for(var l=h.next();!l.done;l=h.next())(l=l.value)&&("-"==l[0]?p[l.substr(1)]=!1:p[l]=!0);e.call(c,b,p);var q,m=null==(q=a.AMP_CONFIG)?void 0:q["allow-url-opt-in"];if(ea(m)&&m.length)for(a=A(a.location.originalHash||a.location.hash),q=r(m),c=q.next();!c.done;c=q.next())c=c.value,e=a["e-"+c],"1"==e&&(b[c]=!0),"0"==e&&(b[c]=!1);return b}var S,va="Webkit webkit Moz moz ms O o".split(" ");function wa(a){var b=a.style;if("border".startsWith("--"))b="border";else{S||(S=Object.create(null));var c=S.border;if(!c){c="border";if(void 0===b.border){var d;b:{for(d=0;d<va.length;d++){var e=va[d]+"Border";if(void 0!==b[e]){d=e;break b}}d=""}void 0!==b[d]&&(c=d)}S.border=c}b=c}b&&(b.startsWith("--")?a.style.setProperty(b,"none"):a.style[b]="none")}function xa(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0}function T(a,b){try{return JSON.parse(a)}catch(c){return null==b||b(c),null}}var U={};function ya(a,b){H("facebook","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+za(a);var g,e=d={},f=b.dataset;for(g in f)g.startsWith("vars")||(e[g]=f[g]);if(g=b.getAttribute("json")){g=T(g);if(void 0===g)throw ma().createError("Error parsing JSON in json attribute in element %s",b);for(var k in g)e[k]=g[k]}k=d;d=Date.now();e=b.getAttribute("width");g=b.getAttribute("height");k=k?k:{};k.width=xa(e);k.height=xa(g);b.getAttribute("title")&&(k.title=b.getAttribute("title"));var n=a.location.href;"about:srcdoc"==n&&(n=a.parent.location.href);var h=I(b),p=pa(b,"documentInfo").get();e=pa(b,"viewer").getUnconfirmedReferrerUrl();var l=b.ownerDocument.body;f=g=0;for(var q=b;q&&q!=l;q=q.offsetParent)g+=q.offsetLeft,f+=q.offsetTop;l=b.offsetWidth;q=b.offsetHeight;var m={left:g,top:f,width:l,height:q,bottom:f+q,right:g+l,x:g,y:f};g=k;f=E.thirdParty+"/2106040012000/ampcontext-v0.js";l=p.sourceUrl;q=p.canonicalUrl;p=p.pageViewId;n={href:n};var K,la=b.tagName,Fa={localDev:!1,development:C().development,esm:!1,minified:!0,test:!1,log:C().log,version:C().version,rtvVersion:C().rtvVersion},Ga=!(null==(K=a.AMP_CONFIG)||!K.canary);K=!h.isVisible();h=m?{left:m.left,top:m.top,width:m.width,height:m.height}:null;m=b;for(var L=[],v=0;1==(null==m?void 0:m.nodeType)&&25>v;){var M="";m.id&&(M="/"+m.id);var W=m.nodeName.toLowerCase(),w=L,Ha=w.push;M=""+W+M;W=m.nodeName;for(var X=0,N=0,O=m.previousElementSibling;O&&25>N&&100>X;)O.nodeName==W&&N++,X++,O=O.previousElementSibling;Ha.call(w,M+(25>N&&100>X?"."+N:""));v++;m=m.parentElement}m=L.join();L=m.length;v=5381;for(w=0;w<L;w++)v=33*v^m.charCodeAt(w);g._context=z({ampcontextVersion:"2106040012000",ampcontextFilepath:f,sourceUrl:l,referrer:e,canonicalUrl:q,pageViewId:p,location:n,startTime:d,tagName:la,mode:Fa,canary:Ga,hidden:K,initialLayoutRect:h,domFingerprint:String(v>>>0),experimentToggles:ua(a),sentinel:c});(a=b.getAttribute("src"))&&(k.src=a);d=k;d.type="facebook";Object.assign(d._context,void 0);return d}function Aa(a,b){var c=void 0===c?{}:c;var d=void 0===c.allowFullscreen?!1:c.allowFullscreen,e=c.initialIntersection;c=ya(a,b);e&&(c._context.initialIntersection=e);var f=a.document.createElement("iframe");U[c.type]||(U[c.type]=0);U[c.type]+=1;var g=b.getAmpDoc();g=Ba(a,g);var k=R(g).hostname;a=JSON.stringify(z({host:k,bootstrap:Ca(c.type,a),type:c.type,count:U[c.type],attributes:c}));f.src=g;f.ampLocation=R(g);f.name=a;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);d&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");wa(f);f.onload=function(){this.readyState="complete"};f.setAttribute("allow","sync-xhr 'none';");["facebook"].includes("facebook")||Da(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}function Ca(a,b){return ua(b)["3p-vendor-split"]?E.thirdParty+"/2106040012000/vendor/"+a+".js":E.thirdParty+"/2106040012000/f.js"}function Ba(a,b){if(b=b.getMetaByName("amp-3p-iframe-src")){var c=void 0===c?"source":c;H(null!=b,"%s %s must be available",'meta[name="amp-3p-iframe-src"]',c);var d=b;"string"==typeof d&&(d=R(d));var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);H(e||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s','meta[name="amp-3p-iframe-src"]',c,b);H(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,b);c=R(b);H("localhost"==c.hostname&&!0||c.origin!=R(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",b,c.origin,b);b+="?2106040012000"}else b=null;b||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+za(a),b="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+"."+E.thirdPartyFrameHost+"/2106040012000/frame.html");return b}function za(a){if(a.crypto&&a.crypto.getRandomValues){var b=new Uint32Array(2);a.crypto.getRandomValues(b);var c=String(b[0])+b[1]}else c=String(a.Math.random()).substr(2)+"0";return c}function Da(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c=0;c<b.length;c++){var d=b[c];if(!a.sandbox.supports(d)){G().info("3p-frame","Iframe doesn't support %s",d);return}}a.sandbox=b.join(" ")+" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"}}function Ea(a){if(!Ia(a))return null;var b=a.indexOf("{");return T(a.substr(b),(function(c){return G().error("MESSAGING","Failed to parse message: "+a,c)}))}function Ia(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")}function Ja(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Ka(a,b){var c=b.getAttribute("data-amp-3p-sentinel");a=Ja(a,c,!0);for(c=0;c<a.length;c++){var d=a[c];if(d.frame===b){var e=d;break}}e||(e={frame:b,events:Object.create(null)},a.push(e));return e.events}function La(a){for(var b=z({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var f,e=d.events;for(f in e)e[f].splice(0,1/0).forEach((function(g){g(b)}))}}}function Ma(a){a.listeningFors||a.addEventListener("message",(function(b){if(b.data){var c=Na(b.data);if(c&&c.sentinel){var d=b.source;var e=Ja(a,c.sentinel);if(e){for(var f,g=0;g<e.length;g++){var k=e[g],n=k.frame.contentWindow;if(n){var h;if(!(h=d==n))b:{for(h=d;h&&h!=h.parent;h=h.parent)if(h==n){h=!0;break b}h=!1}if(h){f=k;break}}else setTimeout(La,0,e)}d=f?f.events:null}else d=e;var p=d;if(p){var l=p[c.type];if(l)for(l=l.slice(),d=0;d<l.length;d++)(0,l[d])(c,b.source,b.origin,b)}}}}))}function Oa(a,b){function c(k,n,h,p){if("amp"==k.sentinel){if(n!=a.contentWindow)return;var l="null"==h&&void 0;if(e!=h&&!l)return}n==a.contentWindow&&("unlisten"==k.sentinel?g():b(k,n,h,p))}var d=a.ownerDocument.defaultView;Ma(d);d=Ka(d,a);var e=R(a.src).origin,f=d["embed-size"]||(d["embed-size"]=[]);f.push(c);var g=function(){if(c){var k=f.indexOf(c);-1<k&&f.splice(k,1);b=f=c=null}}}function Na(a){"string"==typeof a&&(a="{"==a.charAt(0)?T(a,(function(b){G().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",b)}))||null:Ia(a)?Ea(a):null);return a}function V(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;a=a.hasAttribute("data-locale")?a.getAttribute("data-locale"):window.navigator.language.replace("-","_");b.D=a;b.B=null;return b}var Y=AMP.BaseElement;V.prototype=ba(Y.prototype);V.prototype.constructor=V;if(y)y(V,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Pa=Object.getOwnPropertyDescriptor(Y,Z);Pa&&Object.defineProperty(V,Z,Pa)}else V[Z]=Y[Z];V.G=Y.prototype;V.prototype.renderOutsideViewport=function(){return.75};V.prototype.preconnectCallback=function(a){var b=na(this.win,"preconnect");b.url(this.getAmpDoc(),"https://facebook.com",a);b.preload(this.getAmpDoc(),"https://connect.facebook.net/"+this.D+"/sdk.js","script");var c=this.win,d=this.getAmpDoc(),e=Ba(c,d);b.preload(d,e,"document");b.preload(d,Ca("facebook",c),"script")};V.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};V.prototype.layoutCallback=function(){var a=this;this.element.setAttribute("data-embed-as","like");var b=Aa(this.win,this.element);b.title=this.element.title||"Facebook like button";this.applyFillContent(b);Oa(b,(function(c){a.attemptChangeHeight(c.height).catch((function(){}))}));this.B=sa(this.win,this.F.bind(this));this.toggleLoading(!0);this.element.appendChild(b);this.h=b;return this.loadPromise(b)};V.prototype.F=function(a){if(!this.h||a.source==this.h.contentWindow){var b=a.data;b&&("[object Object]"===fa.call(b)?b:T(b))&&"ready"==b.action&&this.toggleLoading(!1)}};V.prototype.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}this.B&&this.B();return!0};(function(a){a.registerElement("amp-facebook-like",V)})(self.AMP)}});//# sourceMappingURL=amp-facebook-like-0.1.js.map