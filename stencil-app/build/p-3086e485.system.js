var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function l(e){try{o(n.next(e))}catch(e){i(e)}}function s(e){try{o(n["throw"](e))}catch(e){i(e)}}function o(e){e.done?t(e.value):a(e.value).then(l,s)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(r){return o([e,r])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:t.label++;return{value:l[1],done:false};case 5:t.label++;a=l[1];l=[0];continue;case 7:l=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1];i=l;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(l);break}if(i[2])t.ops.pop();t.trys.pop();continue}l=r.call(e,t)}catch(e){l=[6,e];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],l=0,s=i.length;l<s;l++,a++)n[a]=i[l];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="stencil-app";var a;var i;var l;var s=false;var o=false;var f=false;var $=false;var u=false;var c=typeof window!=="undefined"?window:{};var v=c.document||{head:{}};var d={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)},ce:function(e,r){return new CustomEvent(e,r)}};var h=e("p",(function(e){return Promise.resolve(e)}));var p=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var m={};var g="{visibility:hidden}.hydrated{visibility:inherit}";var y="http://www.w3.org/1999/xlink";var b=function(e,r){if(r===void 0){r=""}{return function(){return}}};var w=function(e,r){{return function(){return}}};var N=new WeakMap;var R=function(e,r,t){var n=Pe.get(e);if(p&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Pe.set(e,n)};var k=function(e,r,t,n){var a=S(r);var i=Pe.get(a);e=e.nodeType===11?e:v;if(i){if(typeof i==="string"){e=e.head||e;var l=N.get(e);var s=void 0;if(!l){N.set(e,l=new Set)}if(!l.has(a)){{{s=v.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var _=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=b("attachStyles",r.$tagName$);var i=k(t.shadowRoot?t.shadowRoot:t.getRootNode(),r);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var S=function(e,r){return"sc-"+e.$tagName$};var x={};var T=function(e){return e!=null};var C=function(e){e=typeof e;return e==="object"||e==="function"};var E=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var l=null;var s=false;var o=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!C(a)){a=String(a)}if(s&&o){f[f.length-1].$text$+=a}else{f.push(s?A(null,a):a)}o=s}}};$(t);if(r){if(r.key){i=r.key}if(r.name){l=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,f,P)}var c=A(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=l}return c}));var A=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var j=e("H",{});var M=function(e){return e&&e.$tag$===j};var P={forEach:function(e,r){return e.map(L).forEach(r)},map:function(e,r){return e.map(L).map(r).map(O)}};var L=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var O=function(e){if(typeof e.vtag==="function"){var r=Object.assign({},e.vattrs);if(e.vkey){r.key=e.vkey}if(e.vname){r.name=e.vname}return E.apply(void 0,__spreadArrays([e.vtag,r],e.vchildren||[]))}var t=A(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var B=function(e,r,t,n,a,i){if(t!==n){var l=Ee(e,r);var s=r.toLowerCase();if(r==="class"){var o=e.classList;var f=I(t);var $=I(n);o.remove.apply(o,f.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Ee(c,s)){r=s.slice(2)}else{r=s[2]+r.slice(3)}if(t){d.rel(e,r,t,false)}if(n){d.ael(e,r,n,false)}}else{var v=C(n);if((l||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var h=n==null?"":n;if(r==="list"){l=false}else if(t==null||e[r]!=h){e[r]=h}}else{e[r]=n}}catch(e){}}var p=false;{if(s!==(s=s.replace(/^xlink\:?/,""))){r=s;p=true}}if(n==null||n===false){if(n!==false||e.getAttribute(r)===""){if(p){e.removeAttributeNS(y,r)}else{e.removeAttribute(r)}}}else if((!l||i&4||a)&&!v){n=n===true?"":n;if(p){e.setAttributeNS(y,r,n)}else{e.setAttribute(r,n)}}}}};var U=/\s/;var I=function(e){return!e?[]:e.split(U)};var z=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||x;var l=r.$attrs$||x;{for(n in i){if(!(n in l)){B(a,n,i[n],undefined,t,r.$flags$)}}}for(n in l){B(a,n,i[n],l[n],t,r.$flags$)}};var q=function(e,r,t,n){var o=r.$children$[t];var u=0;var c;var d;var h;if(!s){f=true;if(o.$tag$==="slot"){if(a){n.classList.add(a+"-s")}o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){c=o.$elm$=v.createTextNode(o.$text$)}else if(o.$flags$&1){c=o.$elm$=v.createTextNode("")}else{c=o.$elm$=v.createElement(o.$flags$&2?"slot-fb":o.$tag$);{z(null,o,$)}if(T(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(o.$children$){for(u=0;u<o.$children$.length;++u){d=q(e,o,u,c);if(d){c.appendChild(d)}}}}{c["s-hn"]=l;if(o.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=o.$name$||"";h=e&&e.$children$&&e.$children$[t];if(h&&h.$tag$===o.$tag$&&e.$elm$){H(e.$elm$,false)}}}return c};var H=function(e,r){d.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==l&&a["s-ol"]){J(a).insertBefore(a,G(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){H(a,r)}}d.$flags$&=~1};var V=function(e,r,t,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=q(null,t,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,G(r))}}}};var D=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;ee(n);{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{H(a,true)}}a.remove()}}};var W=function(e,r,t,n){var a=0;var i=0;var l=0;var s=0;var o=r.length-1;var f=r[0];var $=r[o];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=o&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(F(f,c)){K(f,c);f=r[++a];c=n[++i]}else if(F($,v)){K($,v);$=r[--o];v=n[--u]}else if(F(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){H(f.$elm$.parentNode,false)}K(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(F($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){H($.$elm$.parentNode,false)}K($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--o];c=n[++i]}else{l=-1;{for(s=a;s<=o;++s){if(r[s]&&r[s].$key$!==null&&r[s].$key$===c.$key$){l=s;break}}}if(l>=0){h=r[l];if(h.$tag$!==c.$tag$){d=q(r&&r[i],t,l,e)}else{K(h,c);r[l]=undefined;d=h.$elm$}c=n[++i]}else{d=q(r&&r[i],t,i,e);c=n[++i]}if(d){{J(f.$elm$).insertBefore(d,G(f.$elm$))}}}}if(a>o){V(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){D(r,a,o)}};var F=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var G=function(e){return e&&e["s-ol"]||e};var J=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var K=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var l=r.$text$;var s;if(l===null){{if(i==="slot");else{z(e,r,$)}}if(n!==null&&a!==null){W(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}V(t,null,r,a,0,a.length-1)}else if(n!==null){D(n,0,n.length-1)}}else if(s=t["s-cr"]){s.parentNode.textContent=l}else if(e.$text$!==l){t.data=l}};var Q=function(e){var r=e.childNodes;var t;var n;var a;var i;var l;var s;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){l=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){s=r[i].nodeType;if(r[i]["s-hn"]!==t["s-hn"]||l!==""){if(s===1&&l===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}Q(t)}}};var X=[];var Y=function(e){var r;var t;var n;var a;var i;var l;var s=0;var f=e.childNodes;var $=f.length;for(;s<$;s++){r=f[s];if(r["s-sr"]&&(t=r["s-cr"])&&t.parentNode){n=t.parentNode.childNodes;a=r["s-sn"];for(l=n.length-1;l>=0;l--){t=n[l];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(Z(t,a)){i=X.find((function(e){return e.$nodeToRelocate$===t}));o=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{X.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){X.map((function(e){if(Z(e.$nodeToRelocate$,t["s-sn"])){i=X.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!X.some((function(e){return e.$nodeToRelocate$===t}))){X.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){Y(r)}}};var Z=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var ee=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(ee)}};var re=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||A(null,null);var u=M(r)?r:E(null,null,r);l=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];s=(n.$flags$&1)!==0;o=false}K($,u);{d.$flags$|=1;if(f){Y(u.$elm$);var c=void 0;var h=void 0;var p=void 0;var m=void 0;var g=void 0;var y=void 0;var b=0;for(;b<X.length;b++){c=X[b];h=c.$nodeToRelocate$;if(!h["s-ol"]){p=v.createTextNode("");p["s-nr"]=h;h.parentNode.insertBefore(h["s-ol"]=p,h)}}for(b=0;b<X.length;b++){c=X[b];h=c.$nodeToRelocate$;if(c.$slotRefNode$){m=c.$slotRefNode$.parentNode;g=c.$slotRefNode$.nextSibling;p=h["s-ol"];while(p=p.previousSibling){y=p["s-nr"];if(y&&y["s-sn"]===h["s-sn"]&&m===y.parentNode){y=y.nextSibling;if(!y||!y["s-nr"]){g=y;break}}}if(!g&&m!==h.parentNode||h.nextSibling!==g){if(h!==g){if(!h["s-hn"]&&h["s-ol"]){h["s-hn"]=h["s-ol"].parentNode.nodeName}m.insertBefore(h,g)}}}else{if(h.nodeType===1){h.hidden=true}}}}if(o){Q(u.$elm$)}d.$flags$&=~1;X.length=0}};var te=e("g",(function(e){return xe(e).$hostElement$}));var ne=function(e,r,t){var n=d.ce(r,t);e.dispatchEvent(n);return n};var ae=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ie=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ae(e,e.$ancestorComponent$);var t=function(){return le(e,r)};return He(t)};var le=function(e,r){var t=b("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(r){{a=ue(n,"componentWillLoad")}}t();return ce(a,(function(){return se(e,n,r)}))};var se=function(e,r,n){return __awaiter(t,void 0,void 0,(function(){var t,a,i,l,s,o;return __generator(this,(function(f){t=e.$hostElement$;a=b("update",e.$cmpMeta$.$tagName$);i=t["s-rc"];if(n){_(e)}l=b("render",e.$cmpMeta$.$tagName$);{oe(e,r)}if(i){i.map((function(e){return e()}));t["s-rc"]=undefined}l();a();{s=t["s-p"];o=function(){return fe(e)};if(s.length===0){o()}else{Promise.all(s).then(o);e.$flags$|=4;s.length=0}}return[2]}))}))};var oe=function(e,r,t){try{r=r.render&&r.render();{e.$flags$&=~16}{e.$flags$|=2}{{{re(e,r)}}}}catch(r){Ae(r,e.$hostElement$)}return null};var fe=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=b("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ve(t)}{ue(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){$e()}}}else{{ue(a,"componentDidUpdate")}n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){ze((function(){return ie(e,false)}))}e.$flags$&=~(4|512)}};var $e=function(e){{ve(v.documentElement)}ze((function(){return ne(c,"appload",{detail:{namespace:n}})}))};var ue=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(e){Ae(e)}}return undefined};var ce=function(e,r){return e&&e.then?e.then(r):r()};var ve=function(e){return e.classList.add("hydrated")};var de=function(e,r){if(e!=null&&!C(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var he=function(e,r){return xe(e).$instanceValues$.get(r)};var pe=function(e,r,t,n){var a=xe(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=de(t,n.$members$[r][0]);if((!(s&8)||l===undefined)&&t!==l){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var f=n.$watchers$[r];if(f){f.map((function(e){try{o[e](t,l,r)}catch(e){Ae(e,i)}}))}}if((s&(2|16))===2){ie(a,false)}}}};var me=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return he(this,n)},set:function(e){pe(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;d.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var ge=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,l,s,o,f;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=Me(n);if(!i.then)return[3,2];e=w();return[4,i];case 1:i=$.sent();e();$.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}me(i,n,2);i.isProxied=true}t=b("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch(e){Ae(e)}{r.$flags$&=~8}{r.$flags$|=128}t();ye(r.$lazyInstance$);if(i.style){a=i.style;l=S(n);if(!Pe.has(l)){s=b("registerStyles",n.$tagName$);R(l,a,!!(n.$flags$&1));s()}}$.label=3;case 3:o=r.$ancestorComponent$;f=function(){return ie(r,true)};if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var ye=function(e){{ue(e,"connectedCallback")}};var be=function(e){if((d.$flags$&1)===0){var r=xe(e);var t=r.$cmpMeta$;var n=b("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){we(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ae(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{ge(e,r,t)}}else{ye(r.$lazyInstance$)}n()}};var we=function(e){var r=e["s-cr"]=v.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Ne=function(e){if((d.$flags$&1)===0){var r=xe(e);var t=r.$lazyInstance$;{ue(t,"disconnectedCallback")}{ue(t,"componentDidUnload")}}};var Re=e("b",(function(e,r){if(r===void 0){r={}}var t=b();var n=[];var a=r.exclude||[];var i=c.customElements;var l=v.head;var s=l.querySelector("meta[charset]");var o=v.createElement("style");var f=[];var $;var u=true;Object.assign(d,r);d.$resourcesUrl$=new URL(r.resourcesUrl||"./",v.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$attrsToReflect$=[]}{t.$watchers$={}}var l=t.$tagName$;var s=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Ce(r,t);if(t.$flags$&1){{{r.attachShadow({mode:"open"})}}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{d.jmp((function(){return be(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;d.jmp((function(){return Ne(e)}))};r.prototype.componentOnReady=function(){return xe(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,me(s,t,1))}}))}));{o.innerHTML=n+g;o.setAttribute("data-styles","");l.insertBefore(o,s?s.nextSibling:l.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{d.jmp((function(){return $=setTimeout($e,30)}))}}t()}));var ke=function(e){var r=new URL(e,d.$resourcesUrl$);return r.origin!==c.location.origin?r.href:r.pathname};var _e=e("a",(function(e,r){if(r in m){return m[r]}else if(r==="window"){return c}else if(r==="document"){return v}else if(r==="isServer"||r==="isPrerender"){return false}else if(r==="isClient"){return true}else if(r==="resourcesUrl"||r==="publicPath"){return ke(".")}else if(r==="queue"){return{write:He,read:qe,tick:{then:function(e){return ze(e)}}}}return undefined}));var Se=new WeakMap;var xe=function(e){return Se.get(e)};var Te=e("r",(function(e,r){return Se.set(r.$lazyInstance$=e,r)}));var Ce=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Se.set(e,t)};var Ee=function(e,r){return r in e};var Ae=function(e,r){return(0,console.error)(e,r)};var je=new Map;var Me=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=je.get(i);if(l){return l[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{je.set(i,e)}return e[a]}),Ae)};var Pe=new Map;var Le=[];var Oe=[];var Be=function(e,r){return function(t){e.push(t);if(!u){u=true;if(r&&d.$flags$&4){ze(Ie)}else{d.raf(Ie)}}}};var Ue=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(e){Ae(e)}}e.length=0};var Ie=function(){Ue(Le);{Ue(Oe);if(u=Le.length>0){d.raf(Ie)}}};var ze=function(e){return h().then(e)};var qe=Be(Le,false);var He=Be(Oe,true)}}}));