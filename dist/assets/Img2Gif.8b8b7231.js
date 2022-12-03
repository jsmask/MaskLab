import{c as ce,r as x,g as fe,i as de,a as ee,b as te,d as he,t as ve,h as C,w as pe,T as me,e as $,v as ge,f as ne,n as se,j as re,k as ie,l as we,m as _e,_ as ye,o as be,p as N,q as _,s as S,u as z,x as xe,F as Le,y as ke,z as R,A as Ce,B as Ee,C as Ie}from"./index.b4543cda.js";import{H as Ae}from"./Head.e126d588.js";var H;const U=typeof window<"u";U&&((H=window==null?void 0:window.navigator)==null?void 0:H.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const oe=(s="")=>s.split(" ").filter(t=>!!t.trim()),Z=(s,t)=>{!s||!t.trim()||s.classList.add(...oe(t))},O=(s,t)=>{!s||!t.trim()||s.classList.remove(...oe(t))},E=(s,t)=>{var f;if(!U||!s||!t)return"";let r=ce(t);r==="float"&&(r="cssFloat");try{const l=s.style[r];if(l)return l;const h=(f=document.defaultView)==null?void 0:f.getComputedStyle(s,"");return h?h[r]:""}catch{return s.style[r]}},Fe=Symbol(),K=x();function ae(s,t=void 0){const f=fe()?de(Fe,K):K;return s?ee(()=>{var r,l;return(l=(r=f.value)==null?void 0:r[s])!=null?l:t}):f}const Ne="el",Re="is-",b=(s,t,f,r,l)=>{let h=`${s}-${t}`;return f&&(h+=`-${f}`),r&&(h+=`__${r}`),l&&(h+=`--${l}`),h},le=s=>{const t=ae("namespace",Ne);return{namespace:t,b:(e="")=>b(t.value,s,e,"",""),e:e=>e?b(t.value,s,"",e,""):"",m:e=>e?b(t.value,s,"","",e):"",be:(e,n)=>e&&n?b(t.value,s,e,n,""):"",em:(e,n)=>e&&n?b(t.value,s,"",e,n):"",bm:(e,n)=>e&&n?b(t.value,s,e,"",n):"",bem:(e,n,a)=>e&&n&&a?b(t.value,s,e,n,a):"",is:(e,...n)=>{const a=n.length>=1?n[0]:!0;return e&&a?`${Re}${e}`:""},cssVar:e=>{const n={};for(const a in e)e[a]&&(n[`--${t.value}-${a}`]=e[a]);return n},cssVarName:e=>`--${t.value}-${e}`,cssVarBlock:e=>{const n={};for(const a in e)e[a]&&(n[`--${t.value}-${s}-${a}`]=e[a]);return n},cssVarBlockName:e=>`--${t.value}-${s}-${e}`}},X=x(0),Te=()=>{const s=ae("zIndex",2e3),t=ee(()=>s.value+X.value);return{initialZIndex:s,currentZIndex:t,nextZIndex:()=>(X.value++,t.value)}};var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $e(s){let t;const f=le("loading"),r=x(!1),l=te({...s,originalPosition:"",originalOverflow:"",visible:!1});function h(u){l.text=u}function m(){const u=l.parent;if(!u.vLoadingAddClassList){let e=u.getAttribute("loading-number");e=Number.parseInt(e)-1,e?u.setAttribute("loading-number",e.toString()):(O(u,f.bm("parent","relative")),u.removeAttribute("loading-number")),O(u,f.bm("parent","hidden"))}g(),v.unmount()}function g(){var u,e;(e=(u=d.$el)==null?void 0:u.parentNode)==null||e.removeChild(d.$el)}function c(){var u;s.beforeClose&&!s.beforeClose()||(r.value=!0,clearTimeout(t),t=window.setTimeout(i,400),l.visible=!1,(u=s.closed)==null||u.call(s))}function i(){if(!r.value)return;const u=l.parent;r.value=!1,u.vLoadingAddClassList=void 0,m()}const v=he({name:"ElLoading",setup(){return()=>{const u=l.spinner||l.svg,e=C("svg",{class:"circular",viewBox:l.svgViewBox?l.svgViewBox:"0 0 50 50",...u?{innerHTML:u}:{}},[C("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),n=l.text?C("p",{class:f.b("text")},[l.text]):void 0;return C(me,{name:f.b("fade"),onAfterLeave:i},{default:pe(()=>[$(ne("div",{style:{backgroundColor:l.background||""},class:[f.b("mask"),l.customClass,l.fullscreen?"is-fullscreen":""]},[C("div",{class:f.b("spinner")},[e,n])]),[[ge,l.visible]])])})}}}),d=v.mount(document.createElement("div"));return{...ve(l),setText:h,removeElLoadingChild:g,close:c,handleAfterLeave:i,vm:d,get $el(){return d.$el}}}let T;const V=function(s={}){if(!U)return;const t=Oe(s);if(t.fullscreen&&T)return T;const f=$e({...t,closed:()=>{var l;(l=t.closed)==null||l.call(t),t.fullscreen&&(T=void 0)}});De(t,t.parent,f),Q(t,t.parent,f),t.parent.vLoadingAddClassList=()=>Q(t,t.parent,f);let r=t.parent.getAttribute("loading-number");return r?r=`${Number.parseInt(r)+1}`:r="1",t.parent.setAttribute("loading-number",r),t.parent.appendChild(f.$el),se(()=>f.visible.value=t.visible),t.fullscreen&&(T=f),f},Oe=s=>{var t,f,r,l;let h;return re(s.target)?h=(t=document.querySelector(s.target))!=null?t:document.body:h=s.target||document.body,{parent:h===document.body||s.body?document.body:h,background:s.background||"",svg:s.svg||"",svgViewBox:s.svgViewBox||"",spinner:s.spinner||!1,text:s.text||"",fullscreen:h===document.body&&((f=s.fullscreen)!=null?f:!0),lock:(r=s.lock)!=null?r:!1,customClass:s.customClass||"",visible:(l=s.visible)!=null?l:!0,target:h}},De=async(s,t,f)=>{const{nextZIndex:r}=Te(),l={};if(s.fullscreen)f.originalPosition.value=E(document.body,"position"),f.originalOverflow.value=E(document.body,"overflow"),l.zIndex=r();else if(s.parent===document.body){f.originalPosition.value=E(document.body,"position"),await se();for(const h of["top","left"]){const m=h==="top"?"scrollTop":"scrollLeft";l[h]=`${s.target.getBoundingClientRect()[h]+document.body[m]+document.documentElement[m]-Number.parseInt(E(document.body,`margin-${h}`),10)}px`}for(const h of["height","width"])l[h]=`${s.target.getBoundingClientRect()[h]}px`}else f.originalPosition.value=E(t,"position");for(const[h,m]of Object.entries(l))f.$el.style[h]=m},Q=(s,t,f)=>{const r=le("loading");["absolute","fixed","sticky"].includes(f.originalPosition.value)?O(t,r.bm("parent","relative")):Z(t,r.bm("parent","relative")),s.fullscreen&&s.lock?Z(t,r.bm("parent","hidden")):O(t,r.bm("parent","hidden"))},W=Symbol("ElLoading"),Y=(s,t)=>{var f,r,l,h;const m=t.instance,g=d=>ie(t.value)?t.value[d]:void 0,c=d=>{const u=re(d)&&(m==null?void 0:m[d])||d;return u&&x(u)},i=d=>c(g(d)||s.getAttribute(`element-loading-${_e(d)}`)),o=(f=g("fullscreen"))!=null?f:t.modifiers.fullscreen,v={text:i("text"),svg:i("svg"),svgViewBox:i("svgViewBox"),spinner:i("spinner"),background:i("background"),customClass:i("customClass"),fullscreen:o,target:(r=g("target"))!=null?r:o?void 0:s,body:(l=g("body"))!=null?l:t.modifiers.body,lock:(h=g("lock"))!=null?h:t.modifiers.lock};s[W]={options:v,instance:V(v)}},Be=(s,t)=>{for(const f of Object.keys(t))we(t[f])&&(t[f].value=s[f])},J={mounted(s,t){t.value&&Y(s,t)},updated(s,t){const f=s[W];t.oldValue!==t.value&&(t.value&&!t.oldValue?Y(s,t):t.value&&t.oldValue?ie(t.value)&&Be(t.value,f.options):f==null||f.instance.close())},unmounted(s){var t;(t=s[W])==null||t.instance.close()}},Pe={install(s){s.directive("loading",J),s.config.globalProperties.$loading=V},directive:J,service:V};(function(s){if(typeof exports=="object"&&typeof module<"u")module.exports=s();else if(typeof define=="function"&&define.amd)define([],s);else{var t;typeof window<"u"?t=window:typeof global<"u"?t=global:typeof self<"u"?t=self:t=this,t.GIF=s()}})(function(){return function s(t,f,r){function l(g,c){if(!f[g]){if(!t[g]){var i=typeof require=="function"&&require;if(!c&&i)return i(g,!0);if(h)return h(g,!0);var o=new Error("Cannot find module '"+g+"'");throw o.code="MODULE_NOT_FOUND",o}var v=f[g]={exports:{}};t[g][0].call(v.exports,function(d){var u=t[g][1][d];return l(u||d)},v,v.exports,s,t,f,r)}return f[g].exports}for(var h=typeof require=="function"&&require,m=0;m<r.length;m++)l(r[m]);return l}({1:[function(s,t,f){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(c){if(!h(c)||c<0||isNaN(c))throw TypeError("n must be a positive number");return this._maxListeners=c,this},r.prototype.emit=function(c){var i,o,v,d,u,e;if(this._events||(this._events={}),c==="error"&&(!this._events.error||m(this._events.error)&&!this._events.error.length)){if(i=arguments[1],i instanceof Error)throw i;var n=new Error('Uncaught, unspecified "error" event. ('+i+")");throw n.context=i,n}if(o=this._events[c],g(o))return!1;if(l(o))switch(arguments.length){case 1:o.call(this);break;case 2:o.call(this,arguments[1]);break;case 3:o.call(this,arguments[1],arguments[2]);break;default:d=Array.prototype.slice.call(arguments,1),o.apply(this,d)}else if(m(o))for(d=Array.prototype.slice.call(arguments,1),e=o.slice(),v=e.length,u=0;u<v;u++)e[u].apply(this,d);return!0},r.prototype.addListener=function(c,i){var o;if(!l(i))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",c,l(i.listener)?i.listener:i),this._events[c]?m(this._events[c])?this._events[c].push(i):this._events[c]=[this._events[c],i]:this._events[c]=i,m(this._events[c])&&!this._events[c].warned&&(g(this._maxListeners)?o=r.defaultMaxListeners:o=this._maxListeners,o&&o>0&&this._events[c].length>o&&(this._events[c].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[c].length),typeof console.trace=="function"&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(c,i){if(!l(i))throw TypeError("listener must be a function");var o=!1;function v(){this.removeListener(c,v),o||(o=!0,i.apply(this,arguments))}return v.listener=i,this.on(c,v),this},r.prototype.removeListener=function(c,i){var o,v,d,u;if(!l(i))throw TypeError("listener must be a function");if(!this._events||!this._events[c])return this;if(o=this._events[c],d=o.length,v=-1,o===i||l(o.listener)&&o.listener===i)delete this._events[c],this._events.removeListener&&this.emit("removeListener",c,i);else if(m(o)){for(u=d;u-- >0;)if(o[u]===i||o[u].listener&&o[u].listener===i){v=u;break}if(v<0)return this;o.length===1?(o.length=0,delete this._events[c]):o.splice(v,1),this._events.removeListener&&this.emit("removeListener",c,i)}return this},r.prototype.removeAllListeners=function(c){var i,o;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[c]&&delete this._events[c],this;if(arguments.length===0){for(i in this._events)i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events={},this}if(o=this._events[c],l(o))this.removeListener(c,o);else if(o)for(;o.length;)this.removeListener(c,o[o.length-1]);return delete this._events[c],this},r.prototype.listeners=function(c){var i;return!this._events||!this._events[c]?i=[]:l(this._events[c])?i=[this._events[c]]:i=this._events[c].slice(),i},r.prototype.listenerCount=function(c){if(this._events){var i=this._events[c];if(l(i))return 1;if(i)return i.length}return 0},r.listenerCount=function(c,i){return c.listenerCount(i)};function l(c){return typeof c=="function"}function h(c){return typeof c=="number"}function m(c){return typeof c=="object"&&c!==null}function g(c){return c===void 0}},{}],2:[function(s,t,f){var r,l,h,m,g;g=navigator.userAgent.toLowerCase(),m=navigator.platform.toLowerCase(),r=g.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],h=r[1]==="ie"&&document.documentMode,l={name:r[1]==="version"?r[3]:r[1],version:h||parseFloat(r[1]==="opera"&&r[4]?r[4]:r[2]),platform:{name:g.match(/ip(?:ad|od|hone)/)?"ios":(g.match(/(?:webos|android)/)||m.match(/mac|win|linux/)||["other"])[0]}},l[l.name]=!0,l[l.name+parseInt(l.version,10)]=!0,l.platform[l.platform.name]=!0,t.exports=l},{}],3:[function(s,t,f){var r,l,h,m=function(o,v){for(var d in v)g.call(v,d)&&(o[d]=v[d]);function u(){this.constructor=o}return u.prototype=v.prototype,o.prototype=new u,o.__super__=v.prototype,o},g={}.hasOwnProperty,c=[].indexOf||function(o){for(var v=0,d=this.length;v<d;v++)if(v in this&&this[v]===o)return v;return-1},i=[].slice;r=s("events").EventEmitter,h=s("./browser.coffee"),l=function(o){var v,d;m(u,o),v={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},d={delay:500,copy:!1};function u(e){var n,a,p;this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(e);for(a in v)p=v[a],(n=this.options)[a]==null&&(n[a]=p)}return u.prototype.setOption=function(e,n){if(this.options[e]=n,this._canvas!=null&&(e==="width"||e==="height"))return this._canvas[e]=n},u.prototype.setOptions=function(e){var n,a,p;a=[];for(n in e)!g.call(e,n)||(p=e[n],a.push(this.setOption(n,p)));return a},u.prototype.addFrame=function(e,n){var a,p;n==null&&(n={}),a={},a.transparent=this.options.transparent;for(p in d)a[p]=n[p]||d[p];if(this.options.width==null&&this.setOption("width",e.width),this.options.height==null&&this.setOption("height",e.height),typeof ImageData<"u"&&ImageData!==null&&e instanceof ImageData)a.data=e.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&e instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&e instanceof WebGLRenderingContext)n.copy?a.data=this.getContextData(e):a.context=e;else if(e.childNodes!=null)n.copy?a.data=this.getImageData(e):a.image=e;else throw new Error("Invalid image");return this.frames.push(a)},u.prototype.render=function(){var e,n,a;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var p,w,y;for(y=[],p=0,w=this.frames.length;0<=w?p<w:p>w;0<=w?++p:--p)y.push(null);return y}.call(this),n=this.spawnWorkers(),this.options.globalPalette===!0)this.renderNextFrame();else for(e=0,a=n;0<=a?e<a:e>a;0<=a?++e:--e)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},u.prototype.abort=function(){for(var e;e=this.activeWorkers.shift(),e!=null;)this.log("killing active worker"),e.terminate();return this.running=!1,this.emit("abort")},u.prototype.spawnWorkers=function(){var e,n,a;return e=Math.min(this.options.workers,this.frames.length),function(){a=[];for(var p=n=this.freeWorkers.length;n<=e?p<e:p>e;n<=e?p++:p--)a.push(p);return a}.apply(this).forEach(function(p){return function(w){var y;return p.log("spawning worker "+w),y=new Worker(p.options.workerScript),y.onmessage=function(L){return p.activeWorkers.splice(p.activeWorkers.indexOf(y),1),p.freeWorkers.push(y),p.frameFinished(L.data)},p.freeWorkers.push(y)}}(this)),e},u.prototype.frameFinished=function(e){var n,a;if(this.log("frame "+e.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[e.index]=e,this.options.globalPalette===!0&&(this.options.globalPalette=e.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(n=1,a=this.freeWorkers.length;1<=a?n<a:n>a;1<=a?++n:--n)this.renderNextFrame();return c.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},u.prototype.finishRendering=function(){var e,n,a,p,w,y,L,k,j,M,q,F,G,D,B,P;for(k=0,D=this.imageParts,w=0,j=D.length;w<j;w++)n=D[w],k+=(n.data.length-1)*n.pageSize+n.cursor;for(k+=n.pageSize-n.cursor,this.log("rendering finished - filesize "+Math.round(k/1e3)+"kb"),e=new Uint8Array(k),F=0,B=this.imageParts,y=0,M=B.length;y<M;y++)for(n=B[y],P=n.data,a=L=0,q=P.length;L<q;a=++L)G=P[a],e.set(G,F),a===n.data.length-1?F+=n.cursor:F+=n.pageSize;return p=new Blob([e],{type:"image/gif"}),this.emit("finished",p,e)},u.prototype.renderNextFrame=function(){var e,n,a;if(this.freeWorkers.length===0)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return e=this.frames[this.nextFrame++],a=this.freeWorkers.shift(),n=this.getTask(e),this.log("starting frame "+(n.index+1)+" of "+this.frames.length),this.activeWorkers.push(a),a.postMessage(n)},u.prototype.getContextData=function(e){return e.getImageData(0,0,this.options.width,this.options.height).data},u.prototype.getImageData=function(e){var n;return this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),n=this._canvas.getContext("2d"),n.setFill=this.options.background,n.fillRect(0,0,this.options.width,this.options.height),n.drawImage(e,0,0),this.getContextData(n)},u.prototype.getTask=function(e){var n,a;if(n=this.frames.indexOf(e),a={index:n,last:n===this.frames.length-1,delay:e.delay,transparent:e.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:h.name==="chrome"},e.data!=null)a.data=e.data;else if(e.context!=null)a.data=this.getContextData(e.context);else if(e.image!=null)a.data=this.getImageData(e.image);else throw new Error("Invalid frame");return a},u.prototype.log=function(){var e;if(e=1<=arguments.length?i.call(arguments,0):[],!!this.options.debug)return console.log.apply(console,e)},u}(r),t.exports=l},{"./browser.coffee":2,events:1}]},{},[3])(3)});var ue={exports:{}};(function(s,t){(function(f,r){r()})(I,function(){function f(i,o){return typeof o>"u"?o={autoBom:!1}:typeof o!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\uFEFF",i],{type:i.type}):i}function r(i,o,v){var d=new XMLHttpRequest;d.open("GET",i),d.responseType="blob",d.onload=function(){c(d.response,o,v)},d.onerror=function(){console.error("could not download file")},d.send()}function l(i){var o=new XMLHttpRequest;o.open("HEAD",i,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function h(i){try{i.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(o)}}var m=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof I=="object"&&I.global===I?I:void 0,g=m.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=m.saveAs||(typeof window!="object"||window!==m?function(){}:"download"in HTMLAnchorElement.prototype&&!g?function(i,o,v){var d=m.URL||m.webkitURL,u=document.createElement("a");o=o||i.name||"download",u.download=o,u.rel="noopener",typeof i=="string"?(u.href=i,u.origin===location.origin?h(u):l(u.href)?r(i,o,v):h(u,u.target="_blank")):(u.href=d.createObjectURL(i),setTimeout(function(){d.revokeObjectURL(u.href)},4e4),setTimeout(function(){h(u)},0))}:"msSaveOrOpenBlob"in navigator?function(i,o,v){if(o=o||i.name||"download",typeof i!="string")navigator.msSaveOrOpenBlob(f(i,v),o);else if(l(i))r(i,o,v);else{var d=document.createElement("a");d.href=i,d.target="_blank",setTimeout(function(){h(d)})}}:function(i,o,v,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof i=="string")return r(i,o,v);var u=i.type==="application/octet-stream",e=/constructor/i.test(m.HTMLElement)||m.safari,n=/CriOS\/[\d]+/.test(navigator.userAgent);if((n||u&&e||g)&&typeof FileReader<"u"){var a=new FileReader;a.onloadend=function(){var y=a.result;y=n?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=y:location=y,d=null},a.readAsDataURL(i)}else{var p=m.URL||m.webkitURL,w=p.createObjectURL(i);d?d.location=w:location.href=w,d=null,setTimeout(function(){p.revokeObjectURL(w)},4e4)}});m.saveAs=c.saveAs=c,s.exports=c})})(ue);const A=s=>(Ee("data-v-f482ad09"),s=s(),Ie(),s),Se={class:"page"},Ve={class:"content"},We={class:"form-flex"},Ue={class:"form-item"},je=A(()=>_("label",null,"Delay:",-1)),Me={class:"form-item"},qe=A(()=>_("label",null,"Quality:",-1)),Ge={class:"btns"},ze=["disabled"],He={key:0,class:"result"},Ze=A(()=>_("h3",null,"Result:",-1)),Ke=["src"],Xe={class:"form-item"},Qe=A(()=>_("label",null,"FileName:",-1)),Ye=A(()=>_("span",null,".gif",-1)),Je={class:"upload-list"},et=["src"],tt=["onClick"],nt={class:"m-upload"},st={__name:"Img2Gif",setup(s){const t=x(null),f=x([]),r=te({repeat:0,quality:10,background:"#fff",delay:16,fileName:""});let l=x(""),h,m;be(()=>{});function g(){const n=window.GIF;h=new n({...r})}function c(n){f.value.splice(n,1)}async function i(n){if(!r.fileName){let a=n.target.files[0].name.split(".");r.fileName=a[0]}d();for(let a=0;a<n.target.files.length;a++)await o(n.target.files[a]);m.close(),t.value.value=""}function o(n){return new Promise((a,p)=>{let w=new FileReader;w.readAsDataURL(n),w.onload=()=>{f.value.push(w.result),a()}})}async function v(){g();for(let n=0;n<f.value.length;n++){let a=new Image;a.src=f.value[n],await h.addFrame(a,{delay:r.delay})}h.render(),d(),h.on("finished",n=>{l.value=URL.createObjectURL(n),m.close()})}function d(){m=Pe.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"})}function u(){f.value.length=0,l.value="",r.fileName="",t.value.value=""}function e(){ue.exports.saveAs(l.value,`${r.fileName}.gif`)}return(n,a)=>(R(),N("div",Se,[ne(Ae),_("div",Ve,[_("div",We,[_("div",Ue,[je,$(_("input",{type:"number",class:"m-input","onUpdate:modelValue":a[0]||(a[0]=p=>r.delay=p)},null,512),[[S,r.delay]])]),_("div",Me,[qe,$(_("input",{type:"number",class:"m-input","onUpdate:modelValue":a[1]||(a[1]=p=>r.quality=p)},null,512),[[S,r.quality,void 0,{num:!0}]])])]),_("div",Ge,[_("button",{onClick:v,class:"m-btn",disabled:f.value.length<2},"Create",8,ze),_("button",{onClick:u,class:"m-btn"},"Clear")]),z(l)?(R(),N("div",He,[Ze,_("img",{src:z(l),alt:"",srcset:""},null,8,Ke),_("div",Xe,[Qe,$(_("input",{class:"m-input","onUpdate:modelValue":a[2]||(a[2]=p=>r.fileName=p)},null,512),[[S,r.fileName]]),Ye,_("button",{onClick:e,class:"m-btn"},"DownLoad")])])):xe("",!0),_("ul",Je,[(R(!0),N(Le,null,ke(f.value,(p,w)=>(R(),N("li",{class:"img-item",key:w+p},[_("img",{src:p,alt:"",srcset:""},null,8,et),_("span",{onClick:y=>c(w),class:"item-del"},null,8,tt),_("p",null,Ce(w),1)]))),128)),_("li",nt,[_("input",{type:"file",ref_key:"fileRef",ref:t,accept:"image/*,.jpeg",multiple:"",onChange:i},null,544)])])])]))}},ot=ye(st,[["__scopeId","data-v-f482ad09"]]);export{ot as default};
