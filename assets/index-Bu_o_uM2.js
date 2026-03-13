const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-hgnyNX4e.js","assets/vendor-markdown-CLfPX4qs.js","assets/vendor-react-D2kupECk.js","assets/href-util-CEPWT0Zm.js","assets/SeoHelper-BTXcX8mr.js","assets/HomePage-IpwJt-gM.css","assets/PostsPage-IddhmJ9a.js","assets/PostsPage-CZtJVSy8.css","assets/PostsResolver-DfN2cJgK.js","assets/PostsResolver-DEo0hTQD.css","assets/AboutPage-BTIFOQK3.js","assets/AboutPage-Cj1xspkQ.css","assets/NotFoundPage-B540nH8O.js"])))=>i.map(i=>d[i]);
import{j as g,s as __,M as b_,r as y_,a as v_,b as S_,p as T_,c as x_}from"./vendor-markdown-CLfPX4qs.js";import{r as A_,a as C_,b as x,u as ll,L as si,O as E_,c as R_,g as M_,R as O_,d as Za,B as w_}from"./vendor-react-D2kupECk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}})();var mu={exports:{}},Xl={},hu={exports:{}},gu={};var Xp;function D_(){return Xp||(Xp=1,(function(a){function r(T,M){var w=T.length;T.push(M);n:for(;0<w;){var k=w-1>>>1,V=T[k];if(0<c(V,M))T[k]=M,T[w]=V,w=k;else break n}}function o(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var M=T[0],w=T.pop();if(w!==M){T[0]=w;n:for(var k=0,V=T.length,X=V>>>1;k<X;){var nn=2*(k+1)-1,Z=T[nn],en=nn+1,cn=T[en];if(0>c(Z,w))en<V&&0>c(cn,Z)?(T[k]=cn,T[en]=w,k=en):(T[k]=Z,T[nn]=w,k=nn);else if(en<V&&0>c(cn,w))T[k]=cn,T[en]=w,k=en;else break n}}return M}function c(T,M){var w=T.sortIndex-M.sortIndex;return w!==0?w:T.id-M.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();a.unstable_now=function(){return p.now()-m}}var _=[],y=[],S=1,b=null,D=3,C=!1,O=!1,P=!1,E=!1,B=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function v(T){for(var M=o(y);M!==null;){if(M.callback===null)u(y);else if(M.startTime<=T)u(y),M.sortIndex=M.expirationTime,r(_,M);else break;M=o(y)}}function N(T){if(P=!1,v(T),!O)if(o(_)!==null)O=!0,G||(G=!0,_n());else{var M=o(y);M!==null&&L(N,M.startTime-T)}}var G=!1,W=-1,an=5,$=-1;function Cn(){return E?!0:!(a.unstable_now()-$<an)}function pn(){if(E=!1,G){var T=a.unstable_now();$=T;var M=!0;try{n:{O=!1,P&&(P=!1,H(W),W=-1),C=!0;var w=D;try{e:{for(v(T),b=o(_);b!==null&&!(b.expirationTime>T&&Cn());){var k=b.callback;if(typeof k=="function"){b.callback=null,D=b.priorityLevel;var V=k(b.expirationTime<=T);if(T=a.unstable_now(),typeof V=="function"){b.callback=V,v(T),M=!0;break e}b===o(_)&&u(_),v(T)}else u(_);b=o(_)}if(b!==null)M=!0;else{var X=o(y);X!==null&&L(N,X.startTime-T),M=!1}}break n}finally{b=null,D=w,C=!1}M=void 0}}finally{M?_n():G=!1}}}var _n;if(typeof Q=="function")_n=function(){Q(pn)};else if(typeof MessageChannel<"u"){var Sn=new MessageChannel,Y=Sn.port2;Sn.port1.onmessage=pn,_n=function(){Y.postMessage(null)}}else _n=function(){B(pn,0)};function L(T,M){W=B(function(){T(a.unstable_now())},M)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(T){T.callback=null},a.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):an=0<T?Math.floor(1e3/T):5},a.unstable_getCurrentPriorityLevel=function(){return D},a.unstable_next=function(T){switch(D){case 1:case 2:case 3:var M=3;break;default:M=D}var w=D;D=M;try{return T()}finally{D=w}},a.unstable_requestPaint=function(){E=!0},a.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var w=D;D=T;try{return M()}finally{D=w}},a.unstable_scheduleCallback=function(T,M,w){var k=a.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?k+w:k):w=k,T){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=w+V,T={id:S++,callback:M,priorityLevel:T,startTime:w,expirationTime:V,sortIndex:-1},w>k?(T.sortIndex=w,r(y,T),o(_)===null&&T===o(y)&&(P?(H(W),W=-1):P=!0,L(N,w-k))):(T.sortIndex=V,r(_,T),O||C||(O=!0,G||(G=!0,_n()))),T},a.unstable_shouldYield=Cn,a.unstable_wrapCallback=function(T){var M=D;return function(){var w=D;D=M;try{return T.apply(this,arguments)}finally{D=w}}}})(gu)),gu}var $p;function j_(){return $p||($p=1,hu.exports=D_()),hu.exports}var nm;function k_(){if(nm)return Xl;nm=1;var a=j_(),r=A_(),o=C_();function u(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function d(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function p(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function m(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function _(n){if(d(n)!==n)throw Error(u(188))}function y(n){var e=n.alternate;if(!e){if(e=d(n),e===null)throw Error(u(188));return e!==n?null:n}for(var t=n,l=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return _(i),n;if(s===l)return _(i),e;s=s.sibling}throw Error(u(188))}if(t.return!==l.return)t=i,l=s;else{for(var f=!1,h=i.child;h;){if(h===t){f=!0,t=i,l=s;break}if(h===l){f=!0,l=i,t=s;break}h=h.sibling}if(!f){for(h=s.child;h;){if(h===t){f=!0,t=s,l=i;break}if(h===l){f=!0,l=s,t=i;break}h=h.sibling}if(!f)throw Error(u(189))}}if(t.alternate!==l)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?n:e}function S(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=S(n),e!==null)return e;n=n.sibling}return null}var b=Object.assign,D=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),Cn=Symbol.for("react.memo_cache_sentinel"),pn=Symbol.iterator;function _n(n){return n===null||typeof n!="object"?null:(n=pn&&n[pn]||n["@@iterator"],typeof n=="function"?n:null)}var Sn=Symbol.for("react.client.reference");function Y(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Sn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case B:return"Profiler";case E:return"StrictMode";case N:return"Suspense";case G:return"SuspenseList";case $:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case O:return"Portal";case Q:return n.displayName||"Context";case H:return(n._context.displayName||"Context")+".Consumer";case v:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return e=n.displayName||null,e!==null?e:Y(n.type)||"Memo";case an:e=n._payload,n=n._init;try{return Y(n(e))}catch{}}return null}var L=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},k=[],V=-1;function X(n){return{current:n}}function nn(n){0>V||(n.current=k[V],k[V]=null,V--)}function Z(n,e){V++,k[V]=n.current,n.current=e}var en=X(null),cn=X(null),mn=X(null),Zn=X(null);function Ae(n,e){switch(Z(mn,e),Z(cn,n),Z(en,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Sp(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Sp(e),n=Tp(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}nn(en),Z(en,n)}function mt(){nn(en),nn(cn),nn(mn)}function il(n){n.memoizedState!==null&&Z(Zn,n);var e=en.current,t=Tp(e,n.type);e!==t&&(Z(cn,n),Z(en,t))}function mi(n){cn.current===n&&(nn(en),nn(cn)),Zn.current===n&&(nn(Zn),Ql._currentValue=w)}var Zr,Vu;function Ft(n){if(Zr===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Zr=e&&e[1]||"",Vu=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zr+n+Vu}var Vr=!1;function Wr(n,e){if(!n||Vr)return"";Vr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(F){var I=F}Reflect.construct(n,[],K)}else{try{K.call()}catch(F){I=F}n.call(K.prototype)}}else{try{throw Error()}catch(F){I=F}(K=n())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(F){if(F&&I&&typeof F.stack=="string")return[F.stack,I.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),f=s[0],h=s[1];if(f&&h){var A=f.split(`
`),z=h.split(`
`);for(i=l=0;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(l===A.length||i===z.length)for(l=A.length-1,i=z.length-1;1<=l&&0<=i&&A[l]!==z[i];)i--;for(;1<=l&&0<=i;l--,i--)if(A[l]!==z[i]){if(l!==1||i!==1)do if(l--,i--,0>i||A[l]!==z[i]){var q=`
`+A[l].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=l&&0<=i);break}}}finally{Vr=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Ft(t):""}function Qh(n,e){switch(n.tag){case 26:case 27:case 5:return Ft(n.type);case 16:return Ft("Lazy");case 13:return n.child!==e&&e!==null?Ft("Suspense Fallback"):Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return Wr(n.type,!1);case 11:return Wr(n.type.render,!1);case 1:return Wr(n.type,!0);case 31:return Ft("Activity");default:return""}}function Wu(n){try{var e="",t=null;do e+=Qh(n,t),t=n,n=n.return;while(n);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Xr=Object.prototype.hasOwnProperty,$r=a.unstable_scheduleCallback,ns=a.unstable_cancelCallback,Zh=a.unstable_shouldYield,Vh=a.unstable_requestPaint,me=a.unstable_now,Wh=a.unstable_getCurrentPriorityLevel,Xu=a.unstable_ImmediatePriority,$u=a.unstable_UserBlockingPriority,hi=a.unstable_NormalPriority,Xh=a.unstable_LowPriority,nc=a.unstable_IdlePriority,$h=a.log,n0=a.unstable_setDisableYieldValue,rl=null,he=null;function ht(n){if(typeof $h=="function"&&n0(n),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(rl,n)}catch{}}var ge=Math.clz32?Math.clz32:a0,e0=Math.log,t0=Math.LN2;function a0(n){return n>>>=0,n===0?32:31-(e0(n)/t0|0)|0}var gi=256,_i=262144,bi=4194304;function qt(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function yi(n,e,t){var l=n.pendingLanes;if(l===0)return 0;var i=0,s=n.suspendedLanes,f=n.pingedLanes;n=n.warmLanes;var h=l&134217727;return h!==0?(l=h&~s,l!==0?i=qt(l):(f&=h,f!==0?i=qt(f):t||(t=h&~n,t!==0&&(i=qt(t))))):(h=l&~s,h!==0?i=qt(h):f!==0?i=qt(f):t||(t=l&~n,t!==0&&(i=qt(t)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,t=e&-e,s>=t||s===32&&(t&4194048)!==0)?e:i}function sl(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function l0(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(){var n=bi;return bi<<=1,(bi&62914560)===0&&(bi=4194304),n}function es(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ol(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function i0(n,e,t,l,i,s){var f=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var h=n.entanglements,A=n.expirationTimes,z=n.hiddenUpdates;for(t=f&~t;0<t;){var q=31-ge(t),K=1<<q;h[q]=0,A[q]=-1;var I=z[q];if(I!==null)for(z[q]=null,q=0;q<I.length;q++){var F=I[q];F!==null&&(F.lane&=-536870913)}t&=~K}l!==0&&tc(n,l,0),s!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=s&~(f&~e))}function tc(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var l=31-ge(e);n.entangledLanes|=e,n.entanglements[l]=n.entanglements[l]|1073741824|t&261930}function ac(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var l=31-ge(t),i=1<<l;i&e|n[l]&e&&(n[l]|=e),t&=~i}}function lc(n,e){var t=e&-e;return t=(t&42)!==0?1:ts(t),(t&(n.suspendedLanes|e))!==0?0:t}function ts(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function as(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ic(){var n=M.p;return n!==0?n:(n=window.event,n===void 0?32:Yp(n.type))}function rc(n,e){var t=M.p;try{return M.p=n,e()}finally{M.p=t}}var gt=Math.random().toString(36).slice(2),Vn="__reactFiber$"+gt,re="__reactProps$"+gt,da="__reactContainer$"+gt,ls="__reactEvents$"+gt,r0="__reactListeners$"+gt,s0="__reactHandles$"+gt,sc="__reactResources$"+gt,ul="__reactMarker$"+gt;function is(n){delete n[Vn],delete n[re],delete n[ls],delete n[r0],delete n[s0]}function fa(n){var e=n[Vn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[da]||t[Vn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Op(n);n!==null;){if(t=n[Vn])return t;n=Op(n)}return e}n=t,t=n.parentNode}return null}function pa(n){if(n=n[Vn]||n[da]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function cl(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(u(33))}function ma(n){var e=n[sc];return e||(e=n[sc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Kn(n){n[ul]=!0}var oc=new Set,uc={};function Gt(n,e){ha(n,e),ha(n+"Capture",e)}function ha(n,e){for(uc[n]=e,n=0;n<e.length;n++)oc.add(e[n])}var o0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cc={},dc={};function u0(n){return Xr.call(dc,n)?!0:Xr.call(cc,n)?!1:o0.test(n)?dc[n]=!0:(cc[n]=!0,!1)}function vi(n,e,t){if(u0(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Si(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Ke(n,e,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+l)}}function Ce(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fc(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c0(n,e,t){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,s=l.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(f){t=""+f,s.call(this,f)}}),Object.defineProperty(n,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(f){t=""+f},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function rs(n){if(!n._valueTracker){var e=fc(n)?"checked":"value";n._valueTracker=c0(n,e,""+n[e])}}function pc(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return n&&(l=fc(n)?n.checked?"true":"false":n.value),n=l,n!==t?(e.setValue(n),!0):!1}function Ti(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var d0=/[\n"\\]/g;function Ee(n){return n.replace(d0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ss(n,e,t,l,i,s,f,h){n.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?n.type=f:n.removeAttribute("type"),e!=null?f==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Ce(e)):n.value!==""+Ce(e)&&(n.value=""+Ce(e)):f!=="submit"&&f!=="reset"||n.removeAttribute("value"),e!=null?os(n,f,Ce(e)):t!=null?os(n,f,Ce(t)):l!=null&&n.removeAttribute("value"),i==null&&s!=null&&(n.defaultChecked=!!s),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?n.name=""+Ce(h):n.removeAttribute("name")}function mc(n,e,t,l,i,s,f,h){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.type=s),e!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){rs(n);return}t=t!=null?""+Ce(t):"",e=e!=null?""+Ce(e):t,h||e===n.value||(n.value=e),n.defaultValue=e}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=h?n.checked:!!l,n.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(n.name=f),rs(n)}function os(n,e,t){e==="number"&&Ti(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function ga(n,e,t,l){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&l&&(n[t].defaultSelected=!0)}else{for(t=""+Ce(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,l&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function hc(n,e,t){if(e!=null&&(e=""+Ce(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Ce(t):""}function gc(n,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(u(92));if(L(l)){if(1<l.length)throw Error(u(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=Ce(e),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l),rs(n)}function _a(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var f0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(n,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":l?n.setProperty(e,t):typeof t!="number"||t===0||f0.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function bc(n,e,t){if(e!=null&&typeof e!="object")throw Error(u(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var i in e)l=e[i],e.hasOwnProperty(i)&&t[i]!==l&&_c(n,i,l)}else for(var s in e)e.hasOwnProperty(s)&&_c(n,s,e[s])}function us(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var p0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),m0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xi(n){return m0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Qe(){}var cs=null;function ds(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ba=null,ya=null;function yc(n){var e=pa(n);if(e&&(n=e.stateNode)){var t=n[re]||null;n:switch(n=e.stateNode,e.type){case"input":if(ss(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==n&&l.form===n.form){var i=l[re]||null;if(!i)throw Error(u(90));ss(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===n.form&&pc(l)}break n;case"textarea":hc(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&ga(n,!!t.multiple,e,!1)}}}var fs=!1;function vc(n,e,t){if(fs)return n(e,t);fs=!0;try{var l=n(e);return l}finally{if(fs=!1,(ba!==null||ya!==null)&&(cr(),ba&&(e=ba,n=ya,ya=ba=null,yc(e),n)))for(e=0;e<n.length;e++)yc(n[e])}}function dl(n,e){var t=n.stateNode;if(t===null)return null;var l=t[re]||null;if(l===null)return null;t=l[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(u(231,e,typeof t));return t}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ps=!1;if(Ze)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){ps=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{ps=!1}var _t=null,ms=null,Ai=null;function Sc(){if(Ai)return Ai;var n,e=ms,t=e.length,l,i="value"in _t?_t.value:_t.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var f=t-n;for(l=1;l<=f&&e[t-l]===i[s-l];l++);return Ai=i.slice(n,1<l?1-l:void 0)}function Ci(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ei(){return!0}function Tc(){return!1}function se(n){function e(t,l,i,s,f){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=s,this.target=f,this.currentTarget=null;for(var h in n)n.hasOwnProperty(h)&&(t=n[h],this[h]=t?t(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ei:Tc,this.isPropagationStopped=Tc,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),e}var Yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ri=se(Yt),pl=b({},Yt,{view:0,detail:0}),h0=se(pl),hs,gs,ml,Mi=b({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ml&&(ml&&n.type==="mousemove"?(hs=n.screenX-ml.screenX,gs=n.screenY-ml.screenY):gs=hs=0,ml=n),hs)},movementY:function(n){return"movementY"in n?n.movementY:gs}}),xc=se(Mi),g0=b({},Mi,{dataTransfer:0}),_0=se(g0),b0=b({},pl,{relatedTarget:0}),_s=se(b0),y0=b({},Yt,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=se(y0),S0=b({},Yt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),T0=se(S0),x0=b({},Yt,{data:0}),Ac=se(x0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=E0[n])?!!e[n]:!1}function bs(){return R0}var M0=b({},pl,{key:function(n){if(n.key){var e=A0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ci(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?C0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(n){return n.type==="keypress"?Ci(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ci(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),O0=se(M0),w0=b({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=se(w0),D0=b({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),j0=se(D0),k0=b({},Yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=se(k0),L0=b({},Mi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H0=se(L0),B0=b({},Yt,{newState:0,oldState:0}),U0=se(B0),z0=[9,13,27,32],ys=Ze&&"CompositionEvent"in window,hl=null;Ze&&"documentMode"in document&&(hl=document.documentMode);var I0=Ze&&"TextEvent"in window&&!hl,Ec=Ze&&(!ys||hl&&8<hl&&11>=hl),Rc=" ",Mc=!1;function Oc(n,e){switch(n){case"keyup":return z0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var va=!1;function P0(n,e){switch(n){case"compositionend":return wc(e);case"keypress":return e.which!==32?null:(Mc=!0,Rc);case"textInput":return n=e.data,n===Rc&&Mc?null:n;default:return null}}function F0(n,e){if(va)return n==="compositionend"||!ys&&Oc(n,e)?(n=Sc(),Ai=ms=_t=null,va=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ec&&e.locale!=="ko"?null:e.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!q0[n.type]:e==="textarea"}function jc(n,e,t,l){ba?ya?ya.push(l):ya=[l]:ba=l,e=_r(e,"onChange"),0<e.length&&(t=new Ri("onChange","change",null,t,l),n.push({event:t,listeners:e}))}var gl=null,_l=null;function G0(n){hp(n,0)}function Oi(n){var e=cl(n);if(pc(e))return n}function kc(n,e){if(n==="change")return e}var Nc=!1;if(Ze){var vs;if(Ze){var Ss="oninput"in document;if(!Ss){var Lc=document.createElement("div");Lc.setAttribute("oninput","return;"),Ss=typeof Lc.oninput=="function"}vs=Ss}else vs=!1;Nc=vs&&(!document.documentMode||9<document.documentMode)}function Hc(){gl&&(gl.detachEvent("onpropertychange",Bc),_l=gl=null)}function Bc(n){if(n.propertyName==="value"&&Oi(_l)){var e=[];jc(e,_l,n,ds(n)),vc(G0,e)}}function Y0(n,e,t){n==="focusin"?(Hc(),gl=e,_l=t,gl.attachEvent("onpropertychange",Bc)):n==="focusout"&&Hc()}function J0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oi(_l)}function K0(n,e){if(n==="click")return Oi(e)}function Q0(n,e){if(n==="input"||n==="change")return Oi(e)}function Z0(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var _e=typeof Object.is=="function"?Object.is:Z0;function bl(n,e){if(_e(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!Xr.call(e,i)||!_e(n[i],e[i]))return!1}return!0}function Uc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zc(n,e){var t=Uc(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=e&&l>=e)return{node:t,offset:e-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Uc(t)}}function Ic(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ic(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Pc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Ti(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ti(n.document)}return e}function Ts(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var V0=Ze&&"documentMode"in document&&11>=document.documentMode,Sa=null,xs=null,yl=null,As=!1;function Fc(n,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;As||Sa==null||Sa!==Ti(l)||(l=Sa,"selectionStart"in l&&Ts(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yl&&bl(yl,l)||(yl=l,l=_r(xs,"onSelect"),0<l.length&&(e=new Ri("onSelect","select",null,e,t),n.push({event:e,listeners:l}),e.target=Sa)))}function Jt(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ta={animationend:Jt("Animation","AnimationEnd"),animationiteration:Jt("Animation","AnimationIteration"),animationstart:Jt("Animation","AnimationStart"),transitionrun:Jt("Transition","TransitionRun"),transitionstart:Jt("Transition","TransitionStart"),transitioncancel:Jt("Transition","TransitionCancel"),transitionend:Jt("Transition","TransitionEnd")},Cs={},qc={};Ze&&(qc=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Kt(n){if(Cs[n])return Cs[n];if(!Ta[n])return n;var e=Ta[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in qc)return Cs[n]=e[t];return n}var Gc=Kt("animationend"),Yc=Kt("animationiteration"),Jc=Kt("animationstart"),W0=Kt("transitionrun"),X0=Kt("transitionstart"),$0=Kt("transitioncancel"),Kc=Kt("transitionend"),Qc=new Map,Es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Es.push("scrollEnd");function Le(n,e){Qc.set(n,e),Gt(e,[n])}var wi=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Re=[],xa=0,Rs=0;function Di(){for(var n=xa,e=Rs=xa=0;e<n;){var t=Re[e];Re[e++]=null;var l=Re[e];Re[e++]=null;var i=Re[e];Re[e++]=null;var s=Re[e];if(Re[e++]=null,l!==null&&i!==null){var f=l.pending;f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i}s!==0&&Zc(t,i,s)}}function ji(n,e,t,l){Re[xa++]=n,Re[xa++]=e,Re[xa++]=t,Re[xa++]=l,Rs|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Ms(n,e,t,l){return ji(n,e,t,l),ki(n)}function Qt(n,e){return ji(n,null,null,e),ki(n)}function Zc(n,e,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var i=!1,s=n.return;s!==null;)s.childLanes|=t,l=s.alternate,l!==null&&(l.childLanes|=t),s.tag===22&&(n=s.stateNode,n===null||n._visibility&1||(i=!0)),n=s,s=s.return;return n.tag===3?(s=n.stateNode,i&&e!==null&&(i=31-ge(t),n=s.hiddenUpdates,l=n[i],l===null?n[i]=[e]:l.push(e),e.lane=t|536870912),s):null}function ki(n){if(50<Pl)throw Pl=0,Uo=null,Error(u(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Aa={};function ng(n,e,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(n,e,t,l){return new ng(n,e,t,l)}function Os(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ve(n,e){var t=n.alternate;return t===null?(t=be(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Vc(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Ni(n,e,t,l,i,s){var f=0;if(l=n,typeof n=="function")Os(n)&&(f=1);else if(typeof n=="string")f=i_(n,t,en.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case $:return n=be(31,t,e,i),n.elementType=$,n.lanes=s,n;case P:return Zt(t.children,i,s,e);case E:f=8,i|=24;break;case B:return n=be(12,t,e,i|2),n.elementType=B,n.lanes=s,n;case N:return n=be(13,t,e,i),n.elementType=N,n.lanes=s,n;case G:return n=be(19,t,e,i),n.elementType=G,n.lanes=s,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Q:f=10;break n;case H:f=9;break n;case v:f=11;break n;case W:f=14;break n;case an:f=16,l=null;break n}f=29,t=Error(u(130,n===null?"null":typeof n,"")),l=null}return e=be(f,t,e,i),e.elementType=n,e.type=l,e.lanes=s,e}function Zt(n,e,t,l){return n=be(7,n,l,e),n.lanes=t,n}function ws(n,e,t){return n=be(6,n,null,e),n.lanes=t,n}function Wc(n){var e=be(18,null,null,0);return e.stateNode=n,e}function Ds(n,e,t){return e=be(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Xc=new WeakMap;function Me(n,e){if(typeof n=="object"&&n!==null){var t=Xc.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Wu(e)},Xc.set(n,e),e)}return{value:n,source:e,stack:Wu(e)}}var Ca=[],Ea=0,Li=null,vl=0,Oe=[],we=0,bt=null,ze=1,Ie="";function We(n,e){Ca[Ea++]=vl,Ca[Ea++]=Li,Li=n,vl=e}function $c(n,e,t){Oe[we++]=ze,Oe[we++]=Ie,Oe[we++]=bt,bt=n;var l=ze;n=Ie;var i=32-ge(l)-1;l&=~(1<<i),t+=1;var s=32-ge(e)+i;if(30<s){var f=i-i%5;s=(l&(1<<f)-1).toString(32),l>>=f,i-=f,ze=1<<32-ge(e)+i|t<<i|l,Ie=s+n}else ze=1<<s|t<<i|l,Ie=n}function js(n){n.return!==null&&(We(n,1),$c(n,1,0))}function ks(n){for(;n===Li;)Li=Ca[--Ea],Ca[Ea]=null,vl=Ca[--Ea],Ca[Ea]=null;for(;n===bt;)bt=Oe[--we],Oe[we]=null,Ie=Oe[--we],Oe[we]=null,ze=Oe[--we],Oe[we]=null}function nd(n,e){Oe[we++]=ze,Oe[we++]=Ie,Oe[we++]=bt,ze=e.id,Ie=e.overflow,bt=n}var Wn=null,jn=null,vn=!1,yt=null,De=!1,Ns=Error(u(519));function vt(n){var e=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sl(Me(e,n)),Ns}function ed(n){var e=n.stateNode,t=n.type,l=n.memoizedProps;switch(e[Vn]=n,e[re]=l,t){case"dialog":gn("cancel",e),gn("close",e);break;case"iframe":case"object":case"embed":gn("load",e);break;case"video":case"audio":for(t=0;t<ql.length;t++)gn(ql[t],e);break;case"source":gn("error",e);break;case"img":case"image":case"link":gn("error",e),gn("load",e);break;case"details":gn("toggle",e);break;case"input":gn("invalid",e),mc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":gn("invalid",e);break;case"textarea":gn("invalid",e),gc(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||yp(e.textContent,t)?(l.popover!=null&&(gn("beforetoggle",e),gn("toggle",e)),l.onScroll!=null&&gn("scroll",e),l.onScrollEnd!=null&&gn("scrollend",e),l.onClick!=null&&(e.onclick=Qe),e=!0):e=!1,e||vt(n,!0)}function td(n){for(Wn=n.return;Wn;)switch(Wn.tag){case 5:case 31:case 13:De=!1;return;case 27:case 3:De=!0;return;default:Wn=Wn.return}}function Ra(n){if(n!==Wn)return!1;if(!vn)return td(n),vn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||$o(n.type,n.memoizedProps)),t=!t),t&&jn&&vt(n),td(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));jn=Mp(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));jn=Mp(n)}else e===27?(e=jn,Nt(n.type)?(n=lu,lu=null,jn=n):jn=e):jn=Wn?ke(n.stateNode.nextSibling):null;return!0}function Vt(){jn=Wn=null,vn=!1}function Ls(){var n=yt;return n!==null&&(de===null?de=n:de.push.apply(de,n),yt=null),n}function Sl(n){yt===null?yt=[n]:yt.push(n)}var Hs=X(null),Wt=null,Xe=null;function St(n,e,t){Z(Hs,e._currentValue),e._currentValue=t}function $e(n){n._currentValue=Hs.current,nn(Hs)}function Bs(n,e,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),n===t)break;n=n.return}}function Us(n,e,t,l){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){var f=i.child;s=s.firstContext;n:for(;s!==null;){var h=s;s=i;for(var A=0;A<e.length;A++)if(h.context===e[A]){s.lanes|=t,h=s.alternate,h!==null&&(h.lanes|=t),Bs(s.return,t,n),l||(f=null);break n}s=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=t,s=f.alternate,s!==null&&(s.lanes|=t),Bs(f,t,n),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===n){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Ma(n,e,t,l){n=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var h=i.type;_e(i.pendingProps.value,f.value)||(n!==null?n.push(h):n=[h])}}else if(i===Zn.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(Ql):n=[Ql])}i=i.return}n!==null&&Us(e,n,t,l),e.flags|=262144}function Hi(n){for(n=n.firstContext;n!==null;){if(!_e(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Xt(n){Wt=n,Xe=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Xn(n){return ad(Wt,n)}function Bi(n,e){return Wt===null&&Xt(n),ad(n,e)}function ad(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Xe===null){if(n===null)throw Error(u(308));Xe=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Xe=Xe.next=e;return t}var eg=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},tg=a.unstable_scheduleCallback,ag=a.unstable_NormalPriority,In={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zs(){return{controller:new eg,data:new Map,refCount:0}}function Tl(n){n.refCount--,n.refCount===0&&tg(ag,function(){n.controller.abort()})}var xl=null,Is=0,Oa=0,wa=null;function lg(n,e){if(xl===null){var t=xl=[];Is=0,Oa=Go(),wa={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Is++,e.then(ld,ld),e}function ld(){if(--Is===0&&xl!==null){wa!==null&&(wa.status="fulfilled");var n=xl;xl=null,Oa=0,wa=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function ig(n,e){var t=[],l={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return n.then(function(){l.status="fulfilled",l.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(l.status="rejected",l.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),l}var id=T.S;T.S=function(n,e){qf=me(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&lg(n,e),id!==null&&id(n,e)};var $t=X(null);function Ps(){var n=$t.current;return n!==null?n:Dn.pooledCache}function Ui(n,e){e===null?Z($t,$t.current):Z($t,e.pool)}function rd(){var n=Ps();return n===null?null:{parent:In._currentValue,pool:n}}var Da=Error(u(460)),Fs=Error(u(474)),zi=Error(u(542)),Ii={then:function(){}};function sd(n){return n=n.status,n==="fulfilled"||n==="rejected"}function od(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Qe,Qe),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,cd(n),n;default:if(typeof e.status=="string")e.then(Qe,Qe);else{if(n=Dn,n!==null&&100<n.shellSuspendCounter)throw Error(u(482));n=e,n.status="pending",n.then(function(l){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=l}},function(l){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,cd(n),n}throw ea=e,Da}}function na(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ea=t,Da):t}}var ea=null;function ud(){if(ea===null)throw Error(u(459));var n=ea;return ea=null,n}function cd(n){if(n===Da||n===zi)throw Error(u(483))}var ja=null,Al=0;function Pi(n){var e=Al;return Al+=1,ja===null&&(ja=[]),od(ja,n,e)}function Cl(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Fi(n,e){throw e.$$typeof===D?Error(u(525)):(n=Object.prototype.toString.call(e),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function dd(n){function e(j,R){if(n){var U=j.deletions;U===null?(j.deletions=[R],j.flags|=16):U.push(R)}}function t(j,R){if(!n)return null;for(;R!==null;)e(j,R),R=R.sibling;return null}function l(j){for(var R=new Map;j!==null;)j.key!==null?R.set(j.key,j):R.set(j.index,j),j=j.sibling;return R}function i(j,R){return j=Ve(j,R),j.index=0,j.sibling=null,j}function s(j,R,U){return j.index=U,n?(U=j.alternate,U!==null?(U=U.index,U<R?(j.flags|=67108866,R):U):(j.flags|=67108866,R)):(j.flags|=1048576,R)}function f(j){return n&&j.alternate===null&&(j.flags|=67108866),j}function h(j,R,U,J){return R===null||R.tag!==6?(R=ws(U,j.mode,J),R.return=j,R):(R=i(R,U),R.return=j,R)}function A(j,R,U,J){var on=U.type;return on===P?q(j,R,U.props.children,J,U.key):R!==null&&(R.elementType===on||typeof on=="object"&&on!==null&&on.$$typeof===an&&na(on)===R.type)?(R=i(R,U.props),Cl(R,U),R.return=j,R):(R=Ni(U.type,U.key,U.props,null,j.mode,J),Cl(R,U),R.return=j,R)}function z(j,R,U,J){return R===null||R.tag!==4||R.stateNode.containerInfo!==U.containerInfo||R.stateNode.implementation!==U.implementation?(R=Ds(U,j.mode,J),R.return=j,R):(R=i(R,U.children||[]),R.return=j,R)}function q(j,R,U,J,on){return R===null||R.tag!==7?(R=Zt(U,j.mode,J,on),R.return=j,R):(R=i(R,U),R.return=j,R)}function K(j,R,U){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=ws(""+R,j.mode,U),R.return=j,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case C:return U=Ni(R.type,R.key,R.props,null,j.mode,U),Cl(U,R),U.return=j,U;case O:return R=Ds(R,j.mode,U),R.return=j,R;case an:return R=na(R),K(j,R,U)}if(L(R)||_n(R))return R=Zt(R,j.mode,U,null),R.return=j,R;if(typeof R.then=="function")return K(j,Pi(R),U);if(R.$$typeof===Q)return K(j,Bi(j,R),U);Fi(j,R)}return null}function I(j,R,U,J){var on=R!==null?R.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return on!==null?null:h(j,R,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===on?A(j,R,U,J):null;case O:return U.key===on?z(j,R,U,J):null;case an:return U=na(U),I(j,R,U,J)}if(L(U)||_n(U))return on!==null?null:q(j,R,U,J,null);if(typeof U.then=="function")return I(j,R,Pi(U),J);if(U.$$typeof===Q)return I(j,R,Bi(j,U),J);Fi(j,U)}return null}function F(j,R,U,J,on){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return j=j.get(U)||null,h(R,j,""+J,on);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case C:return j=j.get(J.key===null?U:J.key)||null,A(R,j,J,on);case O:return j=j.get(J.key===null?U:J.key)||null,z(R,j,J,on);case an:return J=na(J),F(j,R,U,J,on)}if(L(J)||_n(J))return j=j.get(U)||null,q(R,j,J,on,null);if(typeof J.then=="function")return F(j,R,U,Pi(J),on);if(J.$$typeof===Q)return F(j,R,U,Bi(R,J),on);Fi(R,J)}return null}function ln(j,R,U,J){for(var on=null,Tn=null,rn=R,fn=R=0,yn=null;rn!==null&&fn<U.length;fn++){rn.index>fn?(yn=rn,rn=null):yn=rn.sibling;var xn=I(j,rn,U[fn],J);if(xn===null){rn===null&&(rn=yn);break}n&&rn&&xn.alternate===null&&e(j,rn),R=s(xn,R,fn),Tn===null?on=xn:Tn.sibling=xn,Tn=xn,rn=yn}if(fn===U.length)return t(j,rn),vn&&We(j,fn),on;if(rn===null){for(;fn<U.length;fn++)rn=K(j,U[fn],J),rn!==null&&(R=s(rn,R,fn),Tn===null?on=rn:Tn.sibling=rn,Tn=rn);return vn&&We(j,fn),on}for(rn=l(rn);fn<U.length;fn++)yn=F(rn,j,fn,U[fn],J),yn!==null&&(n&&yn.alternate!==null&&rn.delete(yn.key===null?fn:yn.key),R=s(yn,R,fn),Tn===null?on=yn:Tn.sibling=yn,Tn=yn);return n&&rn.forEach(function(zt){return e(j,zt)}),vn&&We(j,fn),on}function un(j,R,U,J){if(U==null)throw Error(u(151));for(var on=null,Tn=null,rn=R,fn=R=0,yn=null,xn=U.next();rn!==null&&!xn.done;fn++,xn=U.next()){rn.index>fn?(yn=rn,rn=null):yn=rn.sibling;var zt=I(j,rn,xn.value,J);if(zt===null){rn===null&&(rn=yn);break}n&&rn&&zt.alternate===null&&e(j,rn),R=s(zt,R,fn),Tn===null?on=zt:Tn.sibling=zt,Tn=zt,rn=yn}if(xn.done)return t(j,rn),vn&&We(j,fn),on;if(rn===null){for(;!xn.done;fn++,xn=U.next())xn=K(j,xn.value,J),xn!==null&&(R=s(xn,R,fn),Tn===null?on=xn:Tn.sibling=xn,Tn=xn);return vn&&We(j,fn),on}for(rn=l(rn);!xn.done;fn++,xn=U.next())xn=F(rn,j,fn,xn.value,J),xn!==null&&(n&&xn.alternate!==null&&rn.delete(xn.key===null?fn:xn.key),R=s(xn,R,fn),Tn===null?on=xn:Tn.sibling=xn,Tn=xn);return n&&rn.forEach(function(g_){return e(j,g_)}),vn&&We(j,fn),on}function wn(j,R,U,J){if(typeof U=="object"&&U!==null&&U.type===P&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:n:{for(var on=U.key;R!==null;){if(R.key===on){if(on=U.type,on===P){if(R.tag===7){t(j,R.sibling),J=i(R,U.props.children),J.return=j,j=J;break n}}else if(R.elementType===on||typeof on=="object"&&on!==null&&on.$$typeof===an&&na(on)===R.type){t(j,R.sibling),J=i(R,U.props),Cl(J,U),J.return=j,j=J;break n}t(j,R);break}else e(j,R);R=R.sibling}U.type===P?(J=Zt(U.props.children,j.mode,J,U.key),J.return=j,j=J):(J=Ni(U.type,U.key,U.props,null,j.mode,J),Cl(J,U),J.return=j,j=J)}return f(j);case O:n:{for(on=U.key;R!==null;){if(R.key===on)if(R.tag===4&&R.stateNode.containerInfo===U.containerInfo&&R.stateNode.implementation===U.implementation){t(j,R.sibling),J=i(R,U.children||[]),J.return=j,j=J;break n}else{t(j,R);break}else e(j,R);R=R.sibling}J=Ds(U,j.mode,J),J.return=j,j=J}return f(j);case an:return U=na(U),wn(j,R,U,J)}if(L(U))return ln(j,R,U,J);if(_n(U)){if(on=_n(U),typeof on!="function")throw Error(u(150));return U=on.call(U),un(j,R,U,J)}if(typeof U.then=="function")return wn(j,R,Pi(U),J);if(U.$$typeof===Q)return wn(j,R,Bi(j,U),J);Fi(j,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,R!==null&&R.tag===6?(t(j,R.sibling),J=i(R,U),J.return=j,j=J):(t(j,R),J=ws(U,j.mode,J),J.return=j,j=J),f(j)):t(j,R)}return function(j,R,U,J){try{Al=0;var on=wn(j,R,U,J);return ja=null,on}catch(rn){if(rn===Da||rn===zi)throw rn;var Tn=be(29,rn,null,j.mode);return Tn.lanes=J,Tn.return=j,Tn}}}var ta=dd(!0),fd=dd(!1),Tt=!1;function qs(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gs(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function xt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function At(n,e,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(An&2)!==0){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,e=ki(n),Zc(n,null,t),e}return ji(n,l,e,t),ki(n)}function El(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,ac(n,t)}}function Ys(n,e){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var f={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?i=s=f:s=s.next=f,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Js=!1;function Rl(){if(Js){var n=wa;if(n!==null)throw n}}function Ml(n,e,t,l){Js=!1;var i=n.updateQueue;Tt=!1;var s=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var A=h,z=A.next;A.next=null,f===null?s=z:f.next=z,f=A;var q=n.alternate;q!==null&&(q=q.updateQueue,h=q.lastBaseUpdate,h!==f&&(h===null?q.firstBaseUpdate=z:h.next=z,q.lastBaseUpdate=A))}if(s!==null){var K=i.baseState;f=0,q=z=A=null,h=s;do{var I=h.lane&-536870913,F=I!==h.lane;if(F?(bn&I)===I:(l&I)===I){I!==0&&I===Oa&&(Js=!0),q!==null&&(q=q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});n:{var ln=n,un=h;I=e;var wn=t;switch(un.tag){case 1:if(ln=un.payload,typeof ln=="function"){K=ln.call(wn,K,I);break n}K=ln;break n;case 3:ln.flags=ln.flags&-65537|128;case 0:if(ln=un.payload,I=typeof ln=="function"?ln.call(wn,K,I):ln,I==null)break n;K=b({},K,I);break n;case 2:Tt=!0}}I=h.callback,I!==null&&(n.flags|=64,F&&(n.flags|=8192),F=i.callbacks,F===null?i.callbacks=[I]:F.push(I))}else F={lane:I,tag:h.tag,payload:h.payload,callback:h.callback,next:null},q===null?(z=q=F,A=K):q=q.next=F,f|=I;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;F=h,h=F.next,F.next=null,i.lastBaseUpdate=F,i.shared.pending=null}}while(!0);q===null&&(A=K),i.baseState=A,i.firstBaseUpdate=z,i.lastBaseUpdate=q,s===null&&(i.shared.lanes=0),Ot|=f,n.lanes=f,n.memoizedState=K}}function pd(n,e){if(typeof n!="function")throw Error(u(191,n));n.call(e)}function md(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)pd(t[n],e)}var ka=X(null),qi=X(0);function hd(n,e){n=ot,Z(qi,n),Z(ka,e),ot=n|e.baseLanes}function Ks(){Z(qi,ot),Z(ka,ka.current)}function Qs(){ot=qi.current,nn(ka),nn(qi)}var ye=X(null),je=null;function Ct(n){var e=n.alternate;Z(Un,Un.current&1),Z(ye,n),je===null&&(e===null||ka.current!==null||e.memoizedState!==null)&&(je=n)}function Zs(n){Z(Un,Un.current),Z(ye,n),je===null&&(je=n)}function gd(n){n.tag===22?(Z(Un,Un.current),Z(ye,n),je===null&&(je=n)):Et()}function Et(){Z(Un,Un.current),Z(ye,ye.current)}function ve(n){nn(ye),je===n&&(je=null),nn(Un)}var Un=X(0);function Gi(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||tu(t)||au(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nt=0,dn=null,Mn=null,Pn=null,Yi=!1,Na=!1,aa=!1,Ji=0,Ol=0,La=null,rg=0;function Ln(){throw Error(u(321))}function Vs(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!_e(n[t],e[t]))return!1;return!0}function Ws(n,e,t,l,i,s){return nt=s,dn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=n===null||n.memoizedState===null?$d:po,aa=!1,s=t(l,i),aa=!1,Na&&(s=bd(e,t,l,i)),_d(n),s}function _d(n){T.H=jl;var e=Mn!==null&&Mn.next!==null;if(nt=0,Pn=Mn=dn=null,Yi=!1,Ol=0,La=null,e)throw Error(u(300));n===null||Fn||(n=n.dependencies,n!==null&&Hi(n)&&(Fn=!0))}function bd(n,e,t,l){dn=n;var i=0;do{if(Na&&(La=null),Ol=0,Na=!1,25<=i)throw Error(u(301));if(i+=1,Pn=Mn=null,n.updateQueue!=null){var s=n.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}T.H=nf,s=e(t,l)}while(Na);return s}function sg(){var n=T.H,e=n.useState()[0];return e=typeof e.then=="function"?wl(e):e,n=n.useState()[0],(Mn!==null?Mn.memoizedState:null)!==n&&(dn.flags|=1024),e}function Xs(){var n=Ji!==0;return Ji=0,n}function $s(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function no(n){if(Yi){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Yi=!1}nt=0,Pn=Mn=dn=null,Na=!1,Ol=Ji=0,La=null}function le(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pn===null?dn.memoizedState=Pn=n:Pn=Pn.next=n,Pn}function zn(){if(Mn===null){var n=dn.alternate;n=n!==null?n.memoizedState:null}else n=Mn.next;var e=Pn===null?dn.memoizedState:Pn.next;if(e!==null)Pn=e,Mn=n;else{if(n===null)throw dn.alternate===null?Error(u(467)):Error(u(310));Mn=n,n={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Pn===null?dn.memoizedState=Pn=n:Pn=Pn.next=n}return Pn}function Ki(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wl(n){var e=Ol;return Ol+=1,La===null&&(La=[]),n=od(La,n,e),e=dn,(Pn===null?e.memoizedState:Pn.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?$d:po),n}function Qi(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return wl(n);if(n.$$typeof===Q)return Xn(n)}throw Error(u(438,String(n)))}function eo(n){var e=null,t=dn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=dn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Ki(),dn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),l=0;l<n;l++)t[l]=Cn;return e.index++,t}function et(n,e){return typeof e=="function"?e(n):e}function Zi(n){var e=zn();return to(e,Mn,n)}function to(n,e,t){var l=n.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=t;var i=n.baseQueue,s=l.pending;if(s!==null){if(i!==null){var f=i.next;i.next=s.next,s.next=f}e.baseQueue=i=s,l.pending=null}if(s=n.baseState,i===null)n.memoizedState=s;else{e=i.next;var h=f=null,A=null,z=e,q=!1;do{var K=z.lane&-536870913;if(K!==z.lane?(bn&K)===K:(nt&K)===K){var I=z.revertLane;if(I===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),K===Oa&&(q=!0);else if((nt&I)===I){z=z.next,I===Oa&&(q=!0);continue}else K={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(h=A=K,f=s):A=A.next=K,dn.lanes|=I,Ot|=I;K=z.action,aa&&t(s,K),s=z.hasEagerState?z.eagerState:t(s,K)}else I={lane:K,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(h=A=I,f=s):A=A.next=I,dn.lanes|=K,Ot|=K;z=z.next}while(z!==null&&z!==e);if(A===null?f=s:A.next=h,!_e(s,n.memoizedState)&&(Fn=!0,q&&(t=wa,t!==null)))throw t;n.memoizedState=s,n.baseState=f,n.baseQueue=A,l.lastRenderedState=s}return i===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function ao(n){var e=zn(),t=e.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=n;var l=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var f=i=i.next;do s=n(s,f.action),f=f.next;while(f!==i);_e(s,e.memoizedState)||(Fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,l]}function yd(n,e,t){var l=dn,i=zn(),s=vn;if(s){if(t===void 0)throw Error(u(407));t=t()}else t=e();var f=!_e((Mn||i).memoizedState,t);if(f&&(i.memoizedState=t,Fn=!0),i=i.queue,ro(Td.bind(null,l,i,n),[n]),i.getSnapshot!==e||f||Pn!==null&&Pn.memoizedState.tag&1){if(l.flags|=2048,Ha(9,{destroy:void 0},Sd.bind(null,l,i,t,e),null),Dn===null)throw Error(u(349));s||(nt&127)!==0||vd(l,e,t)}return t}function vd(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=dn.updateQueue,e===null?(e=Ki(),dn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Sd(n,e,t,l){e.value=t,e.getSnapshot=l,xd(e)&&Ad(n)}function Td(n,e,t){return t(function(){xd(e)&&Ad(n)})}function xd(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!_e(n,t)}catch{return!0}}function Ad(n){var e=Qt(n,2);e!==null&&fe(e,n,2)}function lo(n){var e=le();if(typeof n=="function"){var t=n;if(n=t(),aa){ht(!0);try{t()}finally{ht(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:n},e}function Cd(n,e,t,l){return n.baseState=t,to(n,Mn,typeof l=="function"?l:et)}function og(n,e,t,l,i){if(Xi(n))throw Error(u(485));if(n=e.action,n!==null){var s={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){s.listeners.push(f)}};T.T!==null?t(!0):s.isTransition=!1,l(s),t=e.pending,t===null?(s.next=e.pending=s,Ed(e,s)):(s.next=t.next,e.pending=t.next=s)}}function Ed(n,e){var t=e.action,l=e.payload,i=n.state;if(e.isTransition){var s=T.T,f={};T.T=f;try{var h=t(i,l),A=T.S;A!==null&&A(f,h),Rd(n,e,h)}catch(z){io(n,e,z)}finally{s!==null&&f.types!==null&&(s.types=f.types),T.T=s}}else try{s=t(i,l),Rd(n,e,s)}catch(z){io(n,e,z)}}function Rd(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Md(n,e,l)},function(l){return io(n,e,l)}):Md(n,e,t)}function Md(n,e,t){e.status="fulfilled",e.value=t,Od(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Ed(n,t)))}function io(n,e,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,Od(e),e=e.next;while(e!==l)}n.action=null}function Od(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function wd(n,e){return e}function Dd(n,e){if(vn){var t=Dn.formState;if(t!==null){n:{var l=dn;if(vn){if(jn){e:{for(var i=jn,s=De;i.nodeType!==8;){if(!s){i=null;break e}if(i=ke(i.nextSibling),i===null){i=null;break e}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){jn=ke(i.nextSibling),l=i.data==="F!";break n}}vt(l)}l=!1}l&&(e=t[0])}}return t=le(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wd,lastRenderedState:e},t.queue=l,t=Vd.bind(null,dn,l),l.dispatch=t,l=lo(!1),s=fo.bind(null,dn,!1,l.queue),l=le(),i={state:e,dispatch:null,action:n,pending:null},l.queue=i,t=og.bind(null,dn,i,s,t),i.dispatch=t,l.memoizedState=n,[e,t,!1]}function jd(n){var e=zn();return kd(e,Mn,n)}function kd(n,e,t){if(e=to(n,e,wd)[0],n=Zi(et)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=wl(e)}catch(f){throw f===Da?zi:f}else l=e;e=zn();var i=e.queue,s=i.dispatch;return t!==e.memoizedState&&(dn.flags|=2048,Ha(9,{destroy:void 0},ug.bind(null,i,t),null)),[l,s,n]}function ug(n,e){n.action=e}function Nd(n){var e=zn(),t=Mn;if(t!==null)return kd(e,t,n);zn(),e=e.memoizedState,t=zn();var l=t.queue.dispatch;return t.memoizedState=n,[e,l,!1]}function Ha(n,e,t,l){return n={tag:n,create:t,deps:l,inst:e,next:null},e=dn.updateQueue,e===null&&(e=Ki(),dn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,e.lastEffect=n),n}function Ld(){return zn().memoizedState}function Vi(n,e,t,l){var i=le();dn.flags|=n,i.memoizedState=Ha(1|e,{destroy:void 0},t,l===void 0?null:l)}function Wi(n,e,t,l){var i=zn();l=l===void 0?null:l;var s=i.memoizedState.inst;Mn!==null&&l!==null&&Vs(l,Mn.memoizedState.deps)?i.memoizedState=Ha(e,s,t,l):(dn.flags|=n,i.memoizedState=Ha(1|e,s,t,l))}function Hd(n,e){Vi(8390656,8,n,e)}function ro(n,e){Wi(2048,8,n,e)}function cg(n){dn.flags|=4;var e=dn.updateQueue;if(e===null)e=Ki(),dn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Bd(n){var e=zn().memoizedState;return cg({ref:e,nextImpl:n}),function(){if((An&2)!==0)throw Error(u(440));return e.impl.apply(void 0,arguments)}}function Ud(n,e){return Wi(4,2,n,e)}function zd(n,e){return Wi(4,4,n,e)}function Id(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Pd(n,e,t){t=t!=null?t.concat([n]):null,Wi(4,4,Id.bind(null,e,n),t)}function so(){}function Fd(n,e){var t=zn();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&Vs(e,l[1])?l[0]:(t.memoizedState=[n,e],n)}function qd(n,e){var t=zn();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&Vs(e,l[1]))return l[0];if(l=n(),aa){ht(!0);try{n()}finally{ht(!1)}}return t.memoizedState=[l,e],l}function oo(n,e,t){return t===void 0||(nt&1073741824)!==0&&(bn&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=Yf(),dn.lanes|=n,Ot|=n,t)}function Gd(n,e,t,l){return _e(t,e)?t:ka.current!==null?(n=oo(n,t,l),_e(n,e)||(Fn=!0),n):(nt&42)===0||(nt&1073741824)!==0&&(bn&261930)===0?(Fn=!0,n.memoizedState=t):(n=Yf(),dn.lanes|=n,Ot|=n,e)}function Yd(n,e,t,l,i){var s=M.p;M.p=s!==0&&8>s?s:8;var f=T.T,h={};T.T=h,fo(n,!1,e,t);try{var A=i(),z=T.S;if(z!==null&&z(h,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var q=ig(A,l);Dl(n,e,q,xe(n))}else Dl(n,e,l,xe(n))}catch(K){Dl(n,e,{then:function(){},status:"rejected",reason:K},xe())}finally{M.p=s,f!==null&&h.types!==null&&(f.types=h.types),T.T=f}}function dg(){}function uo(n,e,t,l){if(n.tag!==5)throw Error(u(476));var i=Jd(n).queue;Yd(n,i,e,w,t===null?dg:function(){return Kd(n),t(l)})}function Jd(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:w},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:et,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Kd(n){var e=Jd(n);e.next===null&&(e=n.alternate.memoizedState),Dl(n,e.next.queue,{},xe())}function co(){return Xn(Ql)}function Qd(){return zn().memoizedState}function Zd(){return zn().memoizedState}function fg(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=xe();n=xt(t);var l=At(e,n,t);l!==null&&(fe(l,e,t),El(l,e,t)),e={cache:zs()},n.payload=e;return}e=e.return}}function pg(n,e,t){var l=xe();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Xi(n)?Wd(e,t):(t=Ms(n,e,t,l),t!==null&&(fe(t,n,l),Xd(t,e,l)))}function Vd(n,e,t){var l=xe();Dl(n,e,t,l)}function Dl(n,e,t,l){var i={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xi(n))Wd(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var f=e.lastRenderedState,h=s(f,t);if(i.hasEagerState=!0,i.eagerState=h,_e(h,f))return ji(n,e,i,0),Dn===null&&Di(),!1}catch{}if(t=Ms(n,e,i,l),t!==null)return fe(t,n,l),Xd(t,e,l),!0}return!1}function fo(n,e,t,l){if(l={lane:2,revertLane:Go(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Xi(n)){if(e)throw Error(u(479))}else e=Ms(n,t,l,2),e!==null&&fe(e,n,2)}function Xi(n){var e=n.alternate;return n===dn||e!==null&&e===dn}function Wd(n,e){Na=Yi=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Xd(n,e,t){if((t&4194048)!==0){var l=e.lanes;l&=n.pendingLanes,t|=l,e.lanes=t,ac(n,t)}}var jl={readContext:Xn,use:Qi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useLayoutEffect:Ln,useInsertionEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useSyncExternalStore:Ln,useId:Ln,useHostTransitionStatus:Ln,useFormState:Ln,useActionState:Ln,useOptimistic:Ln,useMemoCache:Ln,useCacheRefresh:Ln};jl.useEffectEvent=Ln;var $d={readContext:Xn,use:Qi,useCallback:function(n,e){return le().memoizedState=[n,e===void 0?null:e],n},useContext:Xn,useEffect:Hd,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,Vi(4194308,4,Id.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Vi(4194308,4,n,e)},useInsertionEffect:function(n,e){Vi(4,2,n,e)},useMemo:function(n,e){var t=le();e=e===void 0?null:e;var l=n();if(aa){ht(!0);try{n()}finally{ht(!1)}}return t.memoizedState=[l,e],l},useReducer:function(n,e,t){var l=le();if(t!==void 0){var i=t(e);if(aa){ht(!0);try{t(e)}finally{ht(!1)}}}else i=e;return l.memoizedState=l.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=pg.bind(null,dn,n),[l.memoizedState,n]},useRef:function(n){var e=le();return n={current:n},e.memoizedState=n},useState:function(n){n=lo(n);var e=n.queue,t=Vd.bind(null,dn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:so,useDeferredValue:function(n,e){var t=le();return oo(t,n,e)},useTransition:function(){var n=lo(!1);return n=Yd.bind(null,dn,n.queue,!0,!1),le().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var l=dn,i=le();if(vn){if(t===void 0)throw Error(u(407));t=t()}else{if(t=e(),Dn===null)throw Error(u(349));(bn&127)!==0||vd(l,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,Hd(Td.bind(null,l,s,n),[n]),l.flags|=2048,Ha(9,{destroy:void 0},Sd.bind(null,l,s,t,e),null),t},useId:function(){var n=le(),e=Dn.identifierPrefix;if(vn){var t=Ie,l=ze;t=(l&~(1<<32-ge(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=Ji++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=rg++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:co,useFormState:Dd,useActionState:Dd,useOptimistic:function(n){var e=le();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=fo.bind(null,dn,!0,t),t.dispatch=e,[n,e]},useMemoCache:eo,useCacheRefresh:function(){return le().memoizedState=fg.bind(null,dn)},useEffectEvent:function(n){var e=le(),t={impl:n};return e.memoizedState=t,function(){if((An&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},po={readContext:Xn,use:Qi,useCallback:Fd,useContext:Xn,useEffect:ro,useImperativeHandle:Pd,useInsertionEffect:Ud,useLayoutEffect:zd,useMemo:qd,useReducer:Zi,useRef:Ld,useState:function(){return Zi(et)},useDebugValue:so,useDeferredValue:function(n,e){var t=zn();return Gd(t,Mn.memoizedState,n,e)},useTransition:function(){var n=Zi(et)[0],e=zn().memoizedState;return[typeof n=="boolean"?n:wl(n),e]},useSyncExternalStore:yd,useId:Qd,useHostTransitionStatus:co,useFormState:jd,useActionState:jd,useOptimistic:function(n,e){var t=zn();return Cd(t,Mn,n,e)},useMemoCache:eo,useCacheRefresh:Zd};po.useEffectEvent=Bd;var nf={readContext:Xn,use:Qi,useCallback:Fd,useContext:Xn,useEffect:ro,useImperativeHandle:Pd,useInsertionEffect:Ud,useLayoutEffect:zd,useMemo:qd,useReducer:ao,useRef:Ld,useState:function(){return ao(et)},useDebugValue:so,useDeferredValue:function(n,e){var t=zn();return Mn===null?oo(t,n,e):Gd(t,Mn.memoizedState,n,e)},useTransition:function(){var n=ao(et)[0],e=zn().memoizedState;return[typeof n=="boolean"?n:wl(n),e]},useSyncExternalStore:yd,useId:Qd,useHostTransitionStatus:co,useFormState:Nd,useActionState:Nd,useOptimistic:function(n,e){var t=zn();return Mn!==null?Cd(t,Mn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:eo,useCacheRefresh:Zd};nf.useEffectEvent=Bd;function mo(n,e,t,l){e=n.memoizedState,t=t(l,e),t=t==null?e:b({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ho={enqueueSetState:function(n,e,t){n=n._reactInternals;var l=xe(),i=xt(l);i.payload=e,t!=null&&(i.callback=t),e=At(n,i,l),e!==null&&(fe(e,n,l),El(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var l=xe(),i=xt(l);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=At(n,i,l),e!==null&&(fe(e,n,l),El(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=xe(),l=xt(t);l.tag=2,e!=null&&(l.callback=e),e=At(n,l,t),e!==null&&(fe(e,n,t),El(e,n,t))}};function ef(n,e,t,l,i,s,f){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,s,f):e.prototype&&e.prototype.isPureReactComponent?!bl(t,l)||!bl(i,s):!0}function tf(n,e,t,l){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==n&&ho.enqueueReplaceState(e,e.state,null)}function la(n,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(n=n.defaultProps){t===e&&(t=b({},t));for(var i in n)t[i]===void 0&&(t[i]=n[i])}return t}function af(n){wi(n)}function lf(n){console.error(n)}function rf(n){wi(n)}function $i(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function sf(n,e,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function go(n,e,t){return t=xt(t),t.tag=3,t.payload={element:null},t.callback=function(){$i(n,e)},t}function of(n){return n=xt(n),n.tag=3,n}function uf(n,e,t,l){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=l.value;n.payload=function(){return i(s)},n.callback=function(){sf(e,t,l)}}var f=t.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(n.callback=function(){sf(e,t,l),typeof i!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function mg(n,e,t,l,i){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&Ma(e,t,i,!0),t=ye.current,t!==null){switch(t.tag){case 31:case 13:return je===null?dr():t.alternate===null&&Hn===0&&(Hn=3),t.flags&=-257,t.flags|=65536,t.lanes=i,l===Ii?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Po(n,l,i)),!1;case 22:return t.flags|=65536,l===Ii?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Po(n,l,i)),!1}throw Error(u(435,t.tag))}return Po(n,l,i),dr(),!1}if(vn)return e=ye.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,l!==Ns&&(n=Error(u(422),{cause:l}),Sl(Me(n,t)))):(l!==Ns&&(e=Error(u(423),{cause:l}),Sl(Me(e,t))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,l=Me(l,t),i=go(n.stateNode,l,i),Ys(n,i),Hn!==4&&(Hn=2)),!1;var s=Error(u(520),{cause:l});if(s=Me(s,t),Il===null?Il=[s]:Il.push(s),Hn!==4&&(Hn=2),e===null)return!0;l=Me(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=i&-i,t.lanes|=n,n=go(t.stateNode,l,n),Ys(t,n),!1;case 1:if(e=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(wt===null||!wt.has(s))))return t.flags|=65536,i&=-i,t.lanes|=i,i=of(i),uf(i,n,t,l),Ys(t,i),!1}t=t.return}while(t!==null);return!1}var _o=Error(u(461)),Fn=!1;function $n(n,e,t,l){e.child=n===null?fd(e,null,t,l):ta(e,n.child,t,l)}function cf(n,e,t,l,i){t=t.render;var s=e.ref;if("ref"in l){var f={};for(var h in l)h!=="ref"&&(f[h]=l[h])}else f=l;return Xt(e),l=Ws(n,e,t,f,s,i),h=Xs(),n!==null&&!Fn?($s(n,e,i),tt(n,e,i)):(vn&&h&&js(e),e.flags|=1,$n(n,e,l,i),e.child)}function df(n,e,t,l,i){if(n===null){var s=t.type;return typeof s=="function"&&!Os(s)&&s.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=s,ff(n,e,s,l,i)):(n=Ni(t.type,null,l,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!Co(n,i)){var f=s.memoizedProps;if(t=t.compare,t=t!==null?t:bl,t(f,l)&&n.ref===e.ref)return tt(n,e,i)}return e.flags|=1,n=Ve(s,l),n.ref=e.ref,n.return=e,e.child=n}function ff(n,e,t,l,i){if(n!==null){var s=n.memoizedProps;if(bl(s,l)&&n.ref===e.ref)if(Fn=!1,e.pendingProps=l=s,Co(n,i))(n.flags&131072)!==0&&(Fn=!0);else return e.lanes=n.lanes,tt(n,e,i)}return bo(n,e,t,l,i)}function pf(n,e,t,l){var i=l.children,s=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,n!==null){for(l=e.child=n.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~s}else l=0,e.child=null;return mf(n,e,s,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ui(e,s!==null?s.cachePool:null),s!==null?hd(e,s):Ks(),gd(e);else return l=e.lanes=536870912,mf(n,e,s!==null?s.baseLanes|t:t,t,l)}else s!==null?(Ui(e,s.cachePool),hd(e,s),Et(),e.memoizedState=null):(n!==null&&Ui(e,null),Ks(),Et());return $n(n,e,i,t),e.child}function kl(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function mf(n,e,t,l,i){var s=Ps();return s=s===null?null:{parent:In._currentValue,pool:s},e.memoizedState={baseLanes:t,cachePool:s},n!==null&&Ui(e,null),Ks(),gd(e),n!==null&&Ma(n,e,l,!0),e.childLanes=i,null}function nr(n,e){return e=tr({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function hf(n,e,t){return ta(e,n.child,null,t),n=nr(e,e.pendingProps),n.flags|=2,ve(e),e.memoizedState=null,n}function hg(n,e,t){var l=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(vn){if(l.mode==="hidden")return n=nr(e,l),e.lanes=536870912,kl(null,n);if(Zs(e),(n=jn)?(n=Rp(n,De),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:bt!==null?{id:ze,overflow:Ie}:null,retryLane:536870912,hydrationErrors:null},t=Wc(n),t.return=e,e.child=t,Wn=e,jn=null)):n=null,n===null)throw vt(e);return e.lanes=536870912,null}return nr(e,l)}var s=n.memoizedState;if(s!==null){var f=s.dehydrated;if(Zs(e),i)if(e.flags&256)e.flags&=-257,e=hf(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(u(558));else if(Fn||Ma(n,e,t,!1),i=(t&n.childLanes)!==0,Fn||i){if(l=Dn,l!==null&&(f=lc(l,t),f!==0&&f!==s.retryLane))throw s.retryLane=f,Qt(n,f),fe(l,n,f),_o;dr(),e=hf(n,e,t)}else n=s.treeContext,jn=ke(f.nextSibling),Wn=e,vn=!0,yt=null,De=!1,n!==null&&nd(e,n),e=nr(e,l),e.flags|=4096;return e}return n=Ve(n.child,{mode:l.mode,children:l.children}),n.ref=e.ref,e.child=n,n.return=e,n}function er(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function bo(n,e,t,l,i){return Xt(e),t=Ws(n,e,t,l,void 0,i),l=Xs(),n!==null&&!Fn?($s(n,e,i),tt(n,e,i)):(vn&&l&&js(e),e.flags|=1,$n(n,e,t,i),e.child)}function gf(n,e,t,l,i,s){return Xt(e),e.updateQueue=null,t=bd(e,l,t,i),_d(n),l=Xs(),n!==null&&!Fn?($s(n,e,s),tt(n,e,s)):(vn&&l&&js(e),e.flags|=1,$n(n,e,t,s),e.child)}function _f(n,e,t,l,i){if(Xt(e),e.stateNode===null){var s=Aa,f=t.contextType;typeof f=="object"&&f!==null&&(s=Xn(f)),s=new t(l,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ho,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=l,s.state=e.memoizedState,s.refs={},qs(e),f=t.contextType,s.context=typeof f=="object"&&f!==null?Xn(f):Aa,s.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(mo(e,t,f,l),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(f=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),f!==s.state&&ho.enqueueReplaceState(s,s.state,null),Ml(e,l,s,i),Rl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(n===null){s=e.stateNode;var h=e.memoizedProps,A=la(t,h);s.props=A;var z=s.context,q=t.contextType;f=Aa,typeof q=="object"&&q!==null&&(f=Xn(q));var K=t.getDerivedStateFromProps;q=typeof K=="function"||typeof s.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,q||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h||z!==f)&&tf(e,s,l,f),Tt=!1;var I=e.memoizedState;s.state=I,Ml(e,l,s,i),Rl(),z=e.memoizedState,h||I!==z||Tt?(typeof K=="function"&&(mo(e,t,K,l),z=e.memoizedState),(A=Tt||ef(e,t,A,l,I,z,f))?(q||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=z),s.props=l,s.state=z,s.context=f,l=A):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{s=e.stateNode,Gs(n,e),f=e.memoizedProps,q=la(t,f),s.props=q,K=e.pendingProps,I=s.context,z=t.contextType,A=Aa,typeof z=="object"&&z!==null&&(A=Xn(z)),h=t.getDerivedStateFromProps,(z=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==K||I!==A)&&tf(e,s,l,A),Tt=!1,I=e.memoizedState,s.state=I,Ml(e,l,s,i),Rl();var F=e.memoizedState;f!==K||I!==F||Tt||n!==null&&n.dependencies!==null&&Hi(n.dependencies)?(typeof h=="function"&&(mo(e,t,h,l),F=e.memoizedState),(q=Tt||ef(e,t,q,l,I,F,A)||n!==null&&n.dependencies!==null&&Hi(n.dependencies))?(z||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,F,A),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,F,A)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||f===n.memoizedProps&&I===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===n.memoizedProps&&I===n.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=F),s.props=l,s.state=F,s.context=A,l=q):(typeof s.componentDidUpdate!="function"||f===n.memoizedProps&&I===n.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===n.memoizedProps&&I===n.memoizedState||(e.flags|=1024),l=!1)}return s=l,er(n,e),l=(e.flags&128)!==0,s||l?(s=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,n!==null&&l?(e.child=ta(e,n.child,null,i),e.child=ta(e,null,t,i)):$n(n,e,t,i),e.memoizedState=s.state,n=e.child):n=tt(n,e,i),n}function bf(n,e,t,l){return Vt(),e.flags|=256,$n(n,e,t,l),e.child}var yo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vo(n){return{baseLanes:n,cachePool:rd()}}function So(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=Te),n}function yf(n,e,t){var l=e.pendingProps,i=!1,s=(e.flags&128)!==0,f;if((f=s)||(f=n!==null&&n.memoizedState===null?!1:(Un.current&2)!==0),f&&(i=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,n===null){if(vn){if(i?Ct(e):Et(),(n=jn)?(n=Rp(n,De),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:bt!==null?{id:ze,overflow:Ie}:null,retryLane:536870912,hydrationErrors:null},t=Wc(n),t.return=e,e.child=t,Wn=e,jn=null)):n=null,n===null)throw vt(e);return au(n)?e.lanes=32:e.lanes=536870912,null}var h=l.children;return l=l.fallback,i?(Et(),i=e.mode,h=tr({mode:"hidden",children:h},i),l=Zt(l,i,t,null),h.return=e,l.return=e,h.sibling=l,e.child=h,l=e.child,l.memoizedState=vo(t),l.childLanes=So(n,f,t),e.memoizedState=yo,kl(null,l)):(Ct(e),To(e,h))}var A=n.memoizedState;if(A!==null&&(h=A.dehydrated,h!==null)){if(s)e.flags&256?(Ct(e),e.flags&=-257,e=xo(n,e,t)):e.memoizedState!==null?(Et(),e.child=n.child,e.flags|=128,e=null):(Et(),h=l.fallback,i=e.mode,l=tr({mode:"visible",children:l.children},i),h=Zt(h,i,t,null),h.flags|=2,l.return=e,h.return=e,l.sibling=h,e.child=l,ta(e,n.child,null,t),l=e.child,l.memoizedState=vo(t),l.childLanes=So(n,f,t),e.memoizedState=yo,e=kl(null,l));else if(Ct(e),au(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var z=f.dgst;f=z,l=Error(u(419)),l.stack="",l.digest=f,Sl({value:l,source:null,stack:null}),e=xo(n,e,t)}else if(Fn||Ma(n,e,t,!1),f=(t&n.childLanes)!==0,Fn||f){if(f=Dn,f!==null&&(l=lc(f,t),l!==0&&l!==A.retryLane))throw A.retryLane=l,Qt(n,l),fe(f,n,l),_o;tu(h)||dr(),e=xo(n,e,t)}else tu(h)?(e.flags|=192,e.child=n.child,e=null):(n=A.treeContext,jn=ke(h.nextSibling),Wn=e,vn=!0,yt=null,De=!1,n!==null&&nd(e,n),e=To(e,l.children),e.flags|=4096);return e}return i?(Et(),h=l.fallback,i=e.mode,A=n.child,z=A.sibling,l=Ve(A,{mode:"hidden",children:l.children}),l.subtreeFlags=A.subtreeFlags&65011712,z!==null?h=Ve(z,h):(h=Zt(h,i,t,null),h.flags|=2),h.return=e,l.return=e,l.sibling=h,e.child=l,kl(null,l),l=e.child,h=n.child.memoizedState,h===null?h=vo(t):(i=h.cachePool,i!==null?(A=In._currentValue,i=i.parent!==A?{parent:A,pool:A}:i):i=rd(),h={baseLanes:h.baseLanes|t,cachePool:i}),l.memoizedState=h,l.childLanes=So(n,f,t),e.memoizedState=yo,kl(n.child,l)):(Ct(e),t=n.child,n=t.sibling,t=Ve(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,n!==null&&(f=e.deletions,f===null?(e.deletions=[n],e.flags|=16):f.push(n)),e.child=t,e.memoizedState=null,t)}function To(n,e){return e=tr({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function tr(n,e){return n=be(22,n,null,e),n.lanes=0,n}function xo(n,e,t){return ta(e,n.child,null,t),n=To(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function vf(n,e,t){n.lanes|=e;var l=n.alternate;l!==null&&(l.lanes|=e),Bs(n.return,e,t)}function Ao(n,e,t,l,i,s){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i,treeForkCount:s}:(f.isBackwards=e,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=t,f.tailMode=i,f.treeForkCount=s)}function Sf(n,e,t){var l=e.pendingProps,i=l.revealOrder,s=l.tail;l=l.children;var f=Un.current,h=(f&2)!==0;if(h?(f=f&1|2,e.flags|=128):f&=1,Z(Un,f),$n(n,e,l,t),l=vn?vl:0,!h&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vf(n,t,e);else if(n.tag===19)vf(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Gi(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Ao(e,!1,i,t,s,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Gi(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Ao(e,!0,t,null,s,l);break;case"together":Ao(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function tt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ot|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(Ma(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(u(153));if(e.child!==null){for(n=e.child,t=Ve(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ve(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Co(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Hi(n)))}function gg(n,e,t){switch(e.tag){case 3:Ae(e,e.stateNode.containerInfo),St(e,In,n.memoizedState.cache),Vt();break;case 27:case 5:il(e);break;case 4:Ae(e,e.stateNode.containerInfo);break;case 10:St(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Zs(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Ct(e),e.flags|=128,null):(t&e.child.childLanes)!==0?yf(n,e,t):(Ct(e),n=tt(n,e,t),n!==null?n.sibling:null);Ct(e);break;case 19:var i=(n.flags&128)!==0;if(l=(t&e.childLanes)!==0,l||(Ma(n,e,t,!1),l=(t&e.childLanes)!==0),i){if(l)return Sf(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(Un,Un.current),l)break;return null;case 22:return e.lanes=0,pf(n,e,t,e.pendingProps);case 24:St(e,In,n.memoizedState.cache)}return tt(n,e,t)}function Tf(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Fn=!0;else{if(!Co(n,t)&&(e.flags&128)===0)return Fn=!1,gg(n,e,t);Fn=(n.flags&131072)!==0}else Fn=!1,vn&&(e.flags&1048576)!==0&&$c(e,vl,e.index);switch(e.lanes=0,e.tag){case 16:n:{var l=e.pendingProps;if(n=na(e.elementType),e.type=n,typeof n=="function")Os(n)?(l=la(n,l),e.tag=1,e=_f(null,e,n,l,t)):(e.tag=0,e=bo(null,e,n,l,t));else{if(n!=null){var i=n.$$typeof;if(i===v){e.tag=11,e=cf(null,e,n,l,t);break n}else if(i===W){e.tag=14,e=df(null,e,n,l,t);break n}}throw e=Y(n)||n,Error(u(306,e,""))}}return e;case 0:return bo(n,e,e.type,e.pendingProps,t);case 1:return l=e.type,i=la(l,e.pendingProps),_f(n,e,l,i,t);case 3:n:{if(Ae(e,e.stateNode.containerInfo),n===null)throw Error(u(387));l=e.pendingProps;var s=e.memoizedState;i=s.element,Gs(n,e),Ml(e,l,null,t);var f=e.memoizedState;if(l=f.cache,St(e,In,l),l!==s.cache&&Us(e,[In],t,!0),Rl(),l=f.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=bf(n,e,l,t);break n}else if(l!==i){i=Me(Error(u(424)),e),Sl(i),e=bf(n,e,l,t);break n}else for(n=e.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,jn=ke(n.firstChild),Wn=e,vn=!0,yt=null,De=!0,t=fd(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vt(),l===i){e=tt(n,e,t);break n}$n(n,e,l,t)}e=e.child}return e;case 26:return er(n,e),n===null?(t=kp(e.type,null,e.pendingProps,null))?e.memoizedState=t:vn||(t=e.type,n=e.pendingProps,l=br(mn.current).createElement(t),l[Vn]=e,l[re]=n,ne(l,t,n),Kn(l),e.stateNode=l):e.memoizedState=kp(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return il(e),n===null&&vn&&(l=e.stateNode=wp(e.type,e.pendingProps,mn.current),Wn=e,De=!0,i=jn,Nt(e.type)?(lu=i,jn=ke(l.firstChild)):jn=i),$n(n,e,e.pendingProps.children,t),er(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&vn&&((i=l=jn)&&(l=Jg(l,e.type,e.pendingProps,De),l!==null?(e.stateNode=l,Wn=e,jn=ke(l.firstChild),De=!1,i=!0):i=!1),i||vt(e)),il(e),i=e.type,s=e.pendingProps,f=n!==null?n.memoizedProps:null,l=s.children,$o(i,s)?l=null:f!==null&&$o(i,f)&&(e.flags|=32),e.memoizedState!==null&&(i=Ws(n,e,sg,null,null,t),Ql._currentValue=i),er(n,e),$n(n,e,l,t),e.child;case 6:return n===null&&vn&&((n=t=jn)&&(t=Kg(t,e.pendingProps,De),t!==null?(e.stateNode=t,Wn=e,jn=null,n=!0):n=!1),n||vt(e)),null;case 13:return yf(n,e,t);case 4:return Ae(e,e.stateNode.containerInfo),l=e.pendingProps,n===null?e.child=ta(e,null,l,t):$n(n,e,l,t),e.child;case 11:return cf(n,e,e.type,e.pendingProps,t);case 7:return $n(n,e,e.pendingProps,t),e.child;case 8:return $n(n,e,e.pendingProps.children,t),e.child;case 12:return $n(n,e,e.pendingProps.children,t),e.child;case 10:return l=e.pendingProps,St(e,e.type,l.value),$n(n,e,l.children,t),e.child;case 9:return i=e.type._context,l=e.pendingProps.children,Xt(e),i=Xn(i),l=l(i),e.flags|=1,$n(n,e,l,t),e.child;case 14:return df(n,e,e.type,e.pendingProps,t);case 15:return ff(n,e,e.type,e.pendingProps,t);case 19:return Sf(n,e,t);case 31:return hg(n,e,t);case 22:return pf(n,e,t,e.pendingProps);case 24:return Xt(e),l=Xn(In),n===null?(i=Ps(),i===null&&(i=Dn,s=zs(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=t),i=s),e.memoizedState={parent:l,cache:i},qs(e),St(e,In,i)):((n.lanes&t)!==0&&(Gs(n,e),Ml(e,null,null,t),Rl()),i=n.memoizedState,s=e.memoizedState,i.parent!==l?(i={parent:l,cache:l},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),St(e,In,l)):(l=s.cache,St(e,In,l),l!==i.cache&&Us(e,[In],t,!0))),$n(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(u(156,e.tag))}function at(n){n.flags|=4}function Eo(n,e,t,l,i){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(Zf())n.flags|=8192;else throw ea=Ii,Fs}else n.flags&=-16777217}function xf(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Up(e))if(Zf())n.flags|=8192;else throw ea=Ii,Fs}function ar(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?ec():536870912,n.lanes|=e,Ia|=e)}function Nl(n,e){if(!vn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function kn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=l,n.childLanes=t,e}function _g(n,e,t){var l=e.pendingProps;switch(ks(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kn(e),null;case 1:return kn(e),null;case 3:return t=e.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),$e(In),mt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Ra(e)?at(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ls())),kn(e),null;case 26:var i=e.type,s=e.memoizedState;return n===null?(at(e),s!==null?(kn(e),xf(e,s)):(kn(e),Eo(e,i,null,l,t))):s?s!==n.memoizedState?(at(e),kn(e),xf(e,s)):(kn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==l&&at(e),kn(e),Eo(e,i,n,l,t)),null;case 27:if(mi(e),t=mn.current,i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&at(e);else{if(!l){if(e.stateNode===null)throw Error(u(166));return kn(e),null}n=en.current,Ra(e)?ed(e):(n=wp(i,l,t),e.stateNode=n,at(e))}return kn(e),null;case 5:if(mi(e),i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==l&&at(e);else{if(!l){if(e.stateNode===null)throw Error(u(166));return kn(e),null}if(s=en.current,Ra(e))ed(e);else{var f=br(mn.current);switch(s){case 1:s=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=f.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?f.createElement(i,{is:l.is}):f.createElement(i)}}s[Vn]=e,s[re]=l;n:for(f=e.child;f!==null;){if(f.tag===5||f.tag===6)s.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break n;for(;f.sibling===null;){if(f.return===null||f.return===e)break n;f=f.return}f.sibling.return=f.return,f=f.sibling}e.stateNode=s;n:switch(ne(s,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break n;case"img":l=!0;break n;default:l=!1}l&&at(e)}}return kn(e),Eo(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==l&&at(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(u(166));if(n=mn.current,Ra(e)){if(n=e.stateNode,t=e.memoizedProps,l=null,i=Wn,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}n[Vn]=e,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||yp(n.nodeValue,t)),n||vt(e,!0)}else n=br(n).createTextNode(l),n[Vn]=e,e.stateNode=n}return kn(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(l=Ra(e),t!==null){if(n===null){if(!l)throw Error(u(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(557));n[Vn]=e}else Vt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kn(e),n=!1}else t=Ls(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(ve(e),e):(ve(e),null);if((e.flags&128)!==0)throw Error(u(558))}return kn(e),null;case 13:if(l=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=Ra(e),l!==null&&l.dehydrated!==null){if(n===null){if(!i)throw Error(u(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Vn]=e}else Vt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kn(e),i=!1}else i=Ls(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(ve(e),e):(ve(e),null)}return ve(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,n=n!==null&&n.memoizedState!==null,t&&(l=e.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==i&&(l.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),ar(e,e.updateQueue),kn(e),null);case 4:return mt(),n===null&&Qo(e.stateNode.containerInfo),kn(e),null;case 10:return $e(e.type),kn(e),null;case 19:if(nn(Un),l=e.memoizedState,l===null)return kn(e),null;if(i=(e.flags&128)!==0,s=l.rendering,s===null)if(i)Nl(l,!1);else{if(Hn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(s=Gi(n),s!==null){for(e.flags|=128,Nl(l,!1),n=s.updateQueue,e.updateQueue=n,ar(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Vc(t,n),t=t.sibling;return Z(Un,Un.current&1|2),vn&&We(e,l.treeForkCount),e.child}n=n.sibling}l.tail!==null&&me()>or&&(e.flags|=128,i=!0,Nl(l,!1),e.lanes=4194304)}else{if(!i)if(n=Gi(s),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,ar(e,n),Nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!vn)return kn(e),null}else 2*me()-l.renderingStartTime>or&&t!==536870912&&(e.flags|=128,i=!0,Nl(l,!1),e.lanes=4194304);l.isBackwards?(s.sibling=e.child,e.child=s):(n=l.last,n!==null?n.sibling=s:e.child=s,l.last=s)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=me(),n.sibling=null,t=Un.current,Z(Un,i?t&1|2:t&1),vn&&We(e,l.treeForkCount),n):(kn(e),null);case 22:case 23:return ve(e),Qs(),l=e.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(kn(e),e.subtreeFlags&6&&(e.flags|=8192)):kn(e),t=e.updateQueue,t!==null&&ar(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),n!==null&&nn($t),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),$e(In),kn(e),null;case 25:return null;case 30:return null}throw Error(u(156,e.tag))}function bg(n,e){switch(ks(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $e(In),mt(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return mi(e),null;case 31:if(e.memoizedState!==null){if(ve(e),e.alternate===null)throw Error(u(340));Vt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(ve(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(u(340));Vt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return nn(Un),null;case 4:return mt(),null;case 10:return $e(e.type),null;case 22:case 23:return ve(e),Qs(),n!==null&&nn($t),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return $e(In),null;case 25:return null;default:return null}}function Af(n,e){switch(ks(e),e.tag){case 3:$e(In),mt();break;case 26:case 27:case 5:mi(e);break;case 4:mt();break;case 31:e.memoizedState!==null&&ve(e);break;case 13:ve(e);break;case 19:nn(Un);break;case 10:$e(e.type);break;case 22:case 23:ve(e),Qs(),n!==null&&nn($t);break;case 24:$e(In)}}function Ll(n,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var i=l.next;t=i;do{if((t.tag&n)===n){l=void 0;var s=t.create,f=t.inst;l=s(),f.destroy=l}t=t.next}while(t!==i)}}catch(h){Rn(e,e.return,h)}}function Rt(n,e,t){try{var l=e.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var s=i.next;l=s;do{if((l.tag&n)===n){var f=l.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=e;var A=t,z=h;try{z()}catch(q){Rn(i,A,q)}}}l=l.next}while(l!==s)}}catch(q){Rn(e,e.return,q)}}function Cf(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{md(e,t)}catch(l){Rn(n,n.return,l)}}}function Ef(n,e,t){t.props=la(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){Rn(n,e,l)}}function Hl(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(i){Rn(n,e,i)}}function Pe(n,e){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(i){Rn(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Rn(n,e,i)}else t.current=null}function Rf(n){var e=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(i){Rn(n,n.return,i)}}function Ro(n,e,t){try{var l=n.stateNode;Ig(l,n.type,t,e),l[re]=e}catch(i){Rn(n,n.return,i)}}function Mf(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Nt(n.type)||n.tag===4}function Mo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Mf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Nt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oo(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Qe));else if(l!==4&&(l===27&&Nt(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Oo(n,e,t),n=n.sibling;n!==null;)Oo(n,e,t),n=n.sibling}function lr(n,e,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(l!==4&&(l===27&&Nt(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(lr(n,e,t),n=n.sibling;n!==null;)lr(n,e,t),n=n.sibling}function Of(n){var e=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ne(e,l,t),e[Vn]=n,e[re]=t}catch(s){Rn(n,n.return,s)}}var lt=!1,qn=!1,wo=!1,wf=typeof WeakSet=="function"?WeakSet:Set,Qn=null;function yg(n,e){if(n=n.containerInfo,Wo=Cr,n=Pc(n),Ts(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break n}var f=0,h=-1,A=-1,z=0,q=0,K=n,I=null;e:for(;;){for(var F;K!==t||i!==0&&K.nodeType!==3||(h=f+i),K!==s||l!==0&&K.nodeType!==3||(A=f+l),K.nodeType===3&&(f+=K.nodeValue.length),(F=K.firstChild)!==null;)I=K,K=F;for(;;){if(K===n)break e;if(I===t&&++z===i&&(h=f),I===s&&++q===l&&(A=f),(F=K.nextSibling)!==null)break;K=I,I=K.parentNode}K=F}t=h===-1||A===-1?null:{start:h,end:A}}else t=null}t=t||{start:0,end:0}}else t=null;for(Xo={focusedElem:n,selectionRange:t},Cr=!1,Qn=e;Qn!==null;)if(e=Qn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Qn=n;else for(;Qn!==null;){switch(e=Qn,s=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)i=n[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&s!==null){n=void 0,t=e,i=s.memoizedProps,s=s.memoizedState,l=t.stateNode;try{var ln=la(t.type,i);n=l.getSnapshotBeforeUpdate(ln,s),l.__reactInternalSnapshotBeforeUpdate=n}catch(un){Rn(t,t.return,un)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)eu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":eu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(u(163))}if(n=e.sibling,n!==null){n.return=e.return,Qn=n;break}Qn=e.return}}function Df(n,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:rt(n,t),l&4&&Ll(5,t);break;case 1:if(rt(n,t),l&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(f){Rn(t,t.return,f)}else{var i=la(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(f){Rn(t,t.return,f)}}l&64&&Cf(t),l&512&&Hl(t,t.return);break;case 3:if(rt(n,t),l&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{md(n,e)}catch(f){Rn(t,t.return,f)}}break;case 27:e===null&&l&4&&Of(t);case 26:case 5:rt(n,t),e===null&&l&4&&Rf(t),l&512&&Hl(t,t.return);break;case 12:rt(n,t);break;case 31:rt(n,t),l&4&&Nf(n,t);break;case 13:rt(n,t),l&4&&Lf(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Mg.bind(null,t),Qg(n,t))));break;case 22:if(l=t.memoizedState!==null||lt,!l){e=e!==null&&e.memoizedState!==null||qn,i=lt;var s=qn;lt=l,(qn=e)&&!s?st(n,t,(t.subtreeFlags&8772)!==0):rt(n,t),lt=i,qn=s}break;case 30:break;default:rt(n,t)}}function jf(n){var e=n.alternate;e!==null&&(n.alternate=null,jf(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&is(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Nn=null,oe=!1;function it(n,e,t){for(t=t.child;t!==null;)kf(n,e,t),t=t.sibling}function kf(n,e,t){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(rl,t)}catch{}switch(t.tag){case 26:qn||Pe(t,e),it(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:qn||Pe(t,e);var l=Nn,i=oe;Nt(t.type)&&(Nn=t.stateNode,oe=!1),it(n,e,t),Yl(t.stateNode),Nn=l,oe=i;break;case 5:qn||Pe(t,e);case 6:if(l=Nn,i=oe,Nn=null,it(n,e,t),Nn=l,oe=i,Nn!==null)if(oe)try{(Nn.nodeType===9?Nn.body:Nn.nodeName==="HTML"?Nn.ownerDocument.body:Nn).removeChild(t.stateNode)}catch(s){Rn(t,e,s)}else try{Nn.removeChild(t.stateNode)}catch(s){Rn(t,e,s)}break;case 18:Nn!==null&&(oe?(n=Nn,Cp(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Qa(n)):Cp(Nn,t.stateNode));break;case 4:l=Nn,i=oe,Nn=t.stateNode.containerInfo,oe=!0,it(n,e,t),Nn=l,oe=i;break;case 0:case 11:case 14:case 15:Rt(2,t,e),qn||Rt(4,t,e),it(n,e,t);break;case 1:qn||(Pe(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Ef(t,e,l)),it(n,e,t);break;case 21:it(n,e,t);break;case 22:qn=(l=qn)||t.memoizedState!==null,it(n,e,t),qn=l;break;default:it(n,e,t)}}function Nf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Qa(n)}catch(t){Rn(e,e.return,t)}}}function Lf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Qa(n)}catch(t){Rn(e,e.return,t)}}function vg(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new wf),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new wf),e;default:throw Error(u(435,n.tag))}}function ir(n,e){var t=vg(n);e.forEach(function(l){if(!t.has(l)){t.add(l);var i=Og.bind(null,n,l);l.then(i,i)}})}function ue(n,e){var t=e.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l],s=n,f=e,h=f;n:for(;h!==null;){switch(h.tag){case 27:if(Nt(h.type)){Nn=h.stateNode,oe=!1;break n}break;case 5:Nn=h.stateNode,oe=!1;break n;case 3:case 4:Nn=h.stateNode.containerInfo,oe=!0;break n}h=h.return}if(Nn===null)throw Error(u(160));kf(s,f,i),Nn=null,oe=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Hf(e,n),e=e.sibling}var He=null;function Hf(n,e){var t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ue(e,n),ce(n),l&4&&(Rt(3,n,n.return),Ll(3,n),Rt(5,n,n.return));break;case 1:ue(e,n),ce(n),l&512&&(qn||t===null||Pe(t,t.return)),l&64&&lt&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var i=He;if(ue(e,n),ce(n),l&512&&(qn||t===null||Pe(t,t.return)),l&4){var s=t!==null?t.memoizedState:null;if(l=n.memoizedState,t===null)if(l===null)if(n.stateNode===null){n:{l=n.type,t=n.memoizedProps,i=i.ownerDocument||i;e:switch(l){case"title":s=i.getElementsByTagName("title")[0],(!s||s[ul]||s[Vn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(l),i.head.insertBefore(s,i.querySelector("head > title"))),ne(s,l,t),s[Vn]=n,Kn(s),l=s;break n;case"link":var f=Hp("link","href",i).get(l+(t.href||""));if(f){for(var h=0;h<f.length;h++)if(s=f[h],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){f.splice(h,1);break e}}s=i.createElement(l),ne(s,l,t),i.head.appendChild(s);break;case"meta":if(f=Hp("meta","content",i).get(l+(t.content||""))){for(h=0;h<f.length;h++)if(s=f[h],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){f.splice(h,1);break e}}s=i.createElement(l),ne(s,l,t),i.head.appendChild(s);break;default:throw Error(u(468,l))}s[Vn]=n,Kn(s),l=s}n.stateNode=l}else Bp(i,n.type,n.stateNode);else n.stateNode=Lp(i,l,n.memoizedProps);else s!==l?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,l===null?Bp(i,n.type,n.stateNode):Lp(i,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Ro(n,n.memoizedProps,t.memoizedProps)}break;case 27:ue(e,n),ce(n),l&512&&(qn||t===null||Pe(t,t.return)),t!==null&&l&4&&Ro(n,n.memoizedProps,t.memoizedProps);break;case 5:if(ue(e,n),ce(n),l&512&&(qn||t===null||Pe(t,t.return)),n.flags&32){i=n.stateNode;try{_a(i,"")}catch(ln){Rn(n,n.return,ln)}}l&4&&n.stateNode!=null&&(i=n.memoizedProps,Ro(n,i,t!==null?t.memoizedProps:i)),l&1024&&(wo=!0);break;case 6:if(ue(e,n),ce(n),l&4){if(n.stateNode===null)throw Error(u(162));l=n.memoizedProps,t=n.stateNode;try{t.nodeValue=l}catch(ln){Rn(n,n.return,ln)}}break;case 3:if(Sr=null,i=He,He=yr(e.containerInfo),ue(e,n),He=i,ce(n),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(ln){Rn(n,n.return,ln)}wo&&(wo=!1,Bf(n));break;case 4:l=He,He=yr(n.stateNode.containerInfo),ue(e,n),ce(n),He=l;break;case 12:ue(e,n),ce(n);break;case 31:ue(e,n),ce(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,ir(n,l)));break;case 13:ue(e,n),ce(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(sr=me()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,ir(n,l)));break;case 22:i=n.memoizedState!==null;var A=t!==null&&t.memoizedState!==null,z=lt,q=qn;if(lt=z||i,qn=q||A,ue(e,n),qn=q,lt=z,ce(n),l&8192)n:for(e=n.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(t===null||A||lt||qn||ia(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){A=t=e;try{if(s=A.stateNode,i)f=s.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=A.stateNode;var K=A.memoizedProps.style,I=K!=null&&K.hasOwnProperty("display")?K.display:null;h.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(ln){Rn(A,A.return,ln)}}}else if(e.tag===6){if(t===null){A=e;try{A.stateNode.nodeValue=i?"":A.memoizedProps}catch(ln){Rn(A,A.return,ln)}}}else if(e.tag===18){if(t===null){A=e;try{var F=A.stateNode;i?Ep(F,!0):Ep(A.stateNode,!1)}catch(ln){Rn(A,A.return,ln)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=n.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,ir(n,t))));break;case 19:ue(e,n),ce(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,ir(n,l)));break;case 30:break;case 21:break;default:ue(e,n),ce(n)}}function ce(n){var e=n.flags;if(e&2){try{for(var t,l=n.return;l!==null;){if(Mf(l)){t=l;break}l=l.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var i=t.stateNode,s=Mo(n);lr(n,s,i);break;case 5:var f=t.stateNode;t.flags&32&&(_a(f,""),t.flags&=-33);var h=Mo(n);lr(n,h,f);break;case 3:case 4:var A=t.stateNode.containerInfo,z=Mo(n);Oo(n,z,A);break;default:throw Error(u(161))}}catch(q){Rn(n,n.return,q)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Bf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Bf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function rt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Df(n,e.alternate,e),e=e.sibling}function ia(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:Rt(4,e,e.return),ia(e);break;case 1:Pe(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Ef(e,e.return,t),ia(e);break;case 27:Yl(e.stateNode);case 26:case 5:Pe(e,e.return),ia(e);break;case 22:e.memoizedState===null&&ia(e);break;case 30:ia(e);break;default:ia(e)}n=n.sibling}}function st(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,i=n,s=e,f=s.flags;switch(s.tag){case 0:case 11:case 15:st(i,s,t),Ll(4,s);break;case 1:if(st(i,s,t),l=s,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){Rn(l,l.return,z)}if(l=s,i=l.updateQueue,i!==null){var h=l.stateNode;try{var A=i.shared.hiddenCallbacks;if(A!==null)for(i.shared.hiddenCallbacks=null,i=0;i<A.length;i++)pd(A[i],h)}catch(z){Rn(l,l.return,z)}}t&&f&64&&Cf(s),Hl(s,s.return);break;case 27:Of(s);case 26:case 5:st(i,s,t),t&&l===null&&f&4&&Rf(s),Hl(s,s.return);break;case 12:st(i,s,t);break;case 31:st(i,s,t),t&&f&4&&Nf(i,s);break;case 13:st(i,s,t),t&&f&4&&Lf(i,s);break;case 22:s.memoizedState===null&&st(i,s,t),Hl(s,s.return);break;case 30:break;default:st(i,s,t)}e=e.sibling}}function Do(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Tl(t))}function jo(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Tl(n))}function Be(n,e,t,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uf(n,e,t,l),e=e.sibling}function Uf(n,e,t,l){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Be(n,e,t,l),i&2048&&Ll(9,e);break;case 1:Be(n,e,t,l);break;case 3:Be(n,e,t,l),i&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Tl(n)));break;case 12:if(i&2048){Be(n,e,t,l),n=e.stateNode;try{var s=e.memoizedProps,f=s.id,h=s.onPostCommit;typeof h=="function"&&h(f,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(A){Rn(e,e.return,A)}}else Be(n,e,t,l);break;case 31:Be(n,e,t,l);break;case 13:Be(n,e,t,l);break;case 23:break;case 22:s=e.stateNode,f=e.alternate,e.memoizedState!==null?s._visibility&2?Be(n,e,t,l):Bl(n,e):s._visibility&2?Be(n,e,t,l):(s._visibility|=2,Ba(n,e,t,l,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Do(f,e);break;case 24:Be(n,e,t,l),i&2048&&jo(e.alternate,e);break;default:Be(n,e,t,l)}}function Ba(n,e,t,l,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=n,f=e,h=t,A=l,z=f.flags;switch(f.tag){case 0:case 11:case 15:Ba(s,f,h,A,i),Ll(8,f);break;case 23:break;case 22:var q=f.stateNode;f.memoizedState!==null?q._visibility&2?Ba(s,f,h,A,i):Bl(s,f):(q._visibility|=2,Ba(s,f,h,A,i)),i&&z&2048&&Do(f.alternate,f);break;case 24:Ba(s,f,h,A,i),i&&z&2048&&jo(f.alternate,f);break;default:Ba(s,f,h,A,i)}e=e.sibling}}function Bl(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,l=e,i=l.flags;switch(l.tag){case 22:Bl(t,l),i&2048&&Do(l.alternate,l);break;case 24:Bl(t,l),i&2048&&jo(l.alternate,l);break;default:Bl(t,l)}e=e.sibling}}var Ul=8192;function Ua(n,e,t){if(n.subtreeFlags&Ul)for(n=n.child;n!==null;)zf(n,e,t),n=n.sibling}function zf(n,e,t){switch(n.tag){case 26:Ua(n,e,t),n.flags&Ul&&n.memoizedState!==null&&r_(t,He,n.memoizedState,n.memoizedProps);break;case 5:Ua(n,e,t);break;case 3:case 4:var l=He;He=yr(n.stateNode.containerInfo),Ua(n,e,t),He=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=Ul,Ul=16777216,Ua(n,e,t),Ul=l):Ua(n,e,t));break;default:Ua(n,e,t)}}function If(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function zl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Qn=l,Ff(l,n)}If(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pf(n),n=n.sibling}function Pf(n){switch(n.tag){case 0:case 11:case 15:zl(n),n.flags&2048&&Rt(9,n,n.return);break;case 3:zl(n);break;case 12:zl(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,rr(n)):zl(n);break;default:zl(n)}}function rr(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];Qn=l,Ff(l,n)}If(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Rt(8,e,e.return),rr(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,rr(e));break;default:rr(e)}n=n.sibling}}function Ff(n,e){for(;Qn!==null;){var t=Qn;switch(t.tag){case 0:case 11:case 15:Rt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Tl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Qn=l;else n:for(t=n;Qn!==null;){l=Qn;var i=l.sibling,s=l.return;if(jf(l),l===t){Qn=null;break n}if(i!==null){i.return=s,Qn=i;break n}Qn=s}}}var Sg={getCacheForType:function(n){var e=Xn(In),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Xn(In).controller.signal}},Tg=typeof WeakMap=="function"?WeakMap:Map,An=0,Dn=null,hn=null,bn=0,En=0,Se=null,Mt=!1,za=!1,ko=!1,ot=0,Hn=0,Ot=0,ra=0,No=0,Te=0,Ia=0,Il=null,de=null,Lo=!1,sr=0,qf=0,or=1/0,ur=null,wt=null,Yn=0,Dt=null,Pa=null,ut=0,Ho=0,Bo=null,Gf=null,Pl=0,Uo=null;function xe(){return(An&2)!==0&&bn!==0?bn&-bn:T.T!==null?Go():ic()}function Yf(){if(Te===0)if((bn&536870912)===0||vn){var n=_i;_i<<=1,(_i&3932160)===0&&(_i=262144),Te=n}else Te=536870912;return n=ye.current,n!==null&&(n.flags|=32),Te}function fe(n,e,t){(n===Dn&&(En===2||En===9)||n.cancelPendingCommit!==null)&&(Fa(n,0),jt(n,bn,Te,!1)),ol(n,t),((An&2)===0||n!==Dn)&&(n===Dn&&((An&2)===0&&(ra|=t),Hn===4&&jt(n,bn,Te,!1)),Fe(n))}function Jf(n,e,t){if((An&6)!==0)throw Error(u(327));var l=!t&&(e&127)===0&&(e&n.expiredLanes)===0||sl(n,e),i=l?Cg(n,e):Io(n,e,!0),s=l;do{if(i===0){za&&!l&&jt(n,e,0,!1);break}else{if(t=n.current.alternate,s&&!xg(t)){i=Io(n,e,!1),s=!1;continue}if(i===2){if(s=e,n.errorRecoveryDisabledLanes&s)var f=0;else f=n.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;n:{var h=n;i=Il;var A=h.current.memoizedState.isDehydrated;if(A&&(Fa(h,f).flags|=256),f=Io(h,f,!1),f!==2){if(ko&&!A){h.errorRecoveryDisabledLanes|=s,ra|=s,i=4;break n}s=de,de=i,s!==null&&(de===null?de=s:de.push.apply(de,s))}i=f}if(s=!1,i!==2)continue}}if(i===1){Fa(n,0),jt(n,e,0,!0);break}n:{switch(l=n,s=i,s){case 0:case 1:throw Error(u(345));case 4:if((e&4194048)!==e)break;case 6:jt(l,e,Te,!Mt);break n;case 2:de=null;break;case 3:case 5:break;default:throw Error(u(329))}if((e&62914560)===e&&(i=sr+300-me(),10<i)){if(jt(l,e,Te,!Mt),yi(l,0,!0)!==0)break n;ut=e,l.timeoutHandle=xp(Kf.bind(null,l,t,de,ur,Lo,e,Te,ra,Ia,Mt,s,"Throttled",-0,0),i);break n}Kf(l,t,de,ur,Lo,e,Te,ra,Ia,Mt,s,null,-0,0)}}break}while(!0);Fe(n)}function Kf(n,e,t,l,i,s,f,h,A,z,q,K,I,F){if(n.timeoutHandle=-1,K=e.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qe},zf(e,s,K);var ln=(s&62914560)===s?sr-me():(s&4194048)===s?qf-me():0;if(ln=s_(K,ln),ln!==null){ut=s,n.cancelPendingCommit=ln(ep.bind(null,n,e,s,t,l,i,f,h,A,q,K,null,I,F)),jt(n,s,f,!z);return}}ep(n,e,s,t,l,i,f,h,A)}function xg(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var i=t[l],s=i.getSnapshot;i=i.value;try{if(!_e(s(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jt(n,e,t,l){e&=~No,e&=~ra,n.suspendedLanes|=e,n.pingedLanes&=~e,l&&(n.warmLanes|=e),l=n.expirationTimes;for(var i=e;0<i;){var s=31-ge(i),f=1<<s;l[s]=-1,i&=~f}t!==0&&tc(n,t,e)}function cr(){return(An&6)===0?(Fl(0),!1):!0}function zo(){if(hn!==null){if(En===0)var n=hn.return;else n=hn,Xe=Wt=null,no(n),ja=null,Al=0,n=hn;for(;n!==null;)Af(n.alternate,n),n=n.return;hn=null}}function Fa(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,qg(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),ut=0,zo(),Dn=n,hn=t=Ve(n.current,null),bn=e,En=0,Se=null,Mt=!1,za=sl(n,e),ko=!1,Ia=Te=No=ra=Ot=Hn=0,de=Il=null,Lo=!1,(e&8)!==0&&(e|=e&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=e;0<l;){var i=31-ge(l),s=1<<i;e|=n[i],l&=~s}return ot=e,Di(),t}function Qf(n,e){dn=null,T.H=jl,e===Da||e===zi?(e=ud(),En=3):e===Fs?(e=ud(),En=4):En=e===_o?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Se=e,hn===null&&(Hn=1,$i(n,Me(e,n.current)))}function Zf(){var n=ye.current;return n===null?!0:(bn&4194048)===bn?je===null:(bn&62914560)===bn||(bn&536870912)!==0?n===je:!1}function Vf(){var n=T.H;return T.H=jl,n===null?jl:n}function Wf(){var n=T.A;return T.A=Sg,n}function dr(){Hn=4,Mt||(bn&4194048)!==bn&&ye.current!==null||(za=!0),(Ot&134217727)===0&&(ra&134217727)===0||Dn===null||jt(Dn,bn,Te,!1)}function Io(n,e,t){var l=An;An|=2;var i=Vf(),s=Wf();(Dn!==n||bn!==e)&&(ur=null,Fa(n,e)),e=!1;var f=Hn;n:do try{if(En!==0&&hn!==null){var h=hn,A=Se;switch(En){case 8:zo(),f=6;break n;case 3:case 2:case 9:case 6:ye.current===null&&(e=!0);var z=En;if(En=0,Se=null,qa(n,h,A,z),t&&za){f=0;break n}break;default:z=En,En=0,Se=null,qa(n,h,A,z)}}Ag(),f=Hn;break}catch(q){Qf(n,q)}while(!0);return e&&n.shellSuspendCounter++,Xe=Wt=null,An=l,T.H=i,T.A=s,hn===null&&(Dn=null,bn=0,Di()),f}function Ag(){for(;hn!==null;)Xf(hn)}function Cg(n,e){var t=An;An|=2;var l=Vf(),i=Wf();Dn!==n||bn!==e?(ur=null,or=me()+500,Fa(n,e)):za=sl(n,e);n:do try{if(En!==0&&hn!==null){e=hn;var s=Se;e:switch(En){case 1:En=0,Se=null,qa(n,e,s,1);break;case 2:case 9:if(sd(s)){En=0,Se=null,$f(e);break}e=function(){En!==2&&En!==9||Dn!==n||(En=7),Fe(n)},s.then(e,e);break n;case 3:En=7;break n;case 4:En=5;break n;case 7:sd(s)?(En=0,Se=null,$f(e)):(En=0,Se=null,qa(n,e,s,7));break;case 5:var f=null;switch(hn.tag){case 26:f=hn.memoizedState;case 5:case 27:var h=hn;if(f?Up(f):h.stateNode.complete){En=0,Se=null;var A=h.sibling;if(A!==null)hn=A;else{var z=h.return;z!==null?(hn=z,fr(z)):hn=null}break e}}En=0,Se=null,qa(n,e,s,5);break;case 6:En=0,Se=null,qa(n,e,s,6);break;case 8:zo(),Hn=6;break n;default:throw Error(u(462))}}Eg();break}catch(q){Qf(n,q)}while(!0);return Xe=Wt=null,T.H=l,T.A=i,An=t,hn!==null?0:(Dn=null,bn=0,Di(),Hn)}function Eg(){for(;hn!==null&&!Zh();)Xf(hn)}function Xf(n){var e=Tf(n.alternate,n,ot);n.memoizedProps=n.pendingProps,e===null?fr(n):hn=e}function $f(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=gf(t,e,e.pendingProps,e.type,void 0,bn);break;case 11:e=gf(t,e,e.pendingProps,e.type.render,e.ref,bn);break;case 5:no(e);default:Af(t,e),e=hn=Vc(e,ot),e=Tf(t,e,ot)}n.memoizedProps=n.pendingProps,e===null?fr(n):hn=e}function qa(n,e,t,l){Xe=Wt=null,no(e),ja=null,Al=0;var i=e.return;try{if(mg(n,i,e,t,bn)){Hn=1,$i(n,Me(t,n.current)),hn=null;return}}catch(s){if(i!==null)throw hn=i,s;Hn=1,$i(n,Me(t,n.current)),hn=null;return}e.flags&32768?(vn||l===1?n=!0:za||(bn&536870912)!==0?n=!1:(Mt=n=!0,(l===2||l===9||l===3||l===6)&&(l=ye.current,l!==null&&l.tag===13&&(l.flags|=16384))),np(e,n)):fr(e)}function fr(n){var e=n;do{if((e.flags&32768)!==0){np(e,Mt);return}n=e.return;var t=_g(e.alternate,e,ot);if(t!==null){hn=t;return}if(e=e.sibling,e!==null){hn=e;return}hn=e=n}while(e!==null);Hn===0&&(Hn=5)}function np(n,e){do{var t=bg(n.alternate,n);if(t!==null){t.flags&=32767,hn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){hn=n;return}hn=n=t}while(n!==null);Hn=6,hn=null}function ep(n,e,t,l,i,s,f,h,A){n.cancelPendingCommit=null;do pr();while(Yn!==0);if((An&6)!==0)throw Error(u(327));if(e!==null){if(e===n.current)throw Error(u(177));if(s=e.lanes|e.childLanes,s|=Rs,i0(n,t,s,f,h,A),n===Dn&&(hn=Dn=null,bn=0),Pa=e,Dt=n,ut=t,Ho=s,Bo=i,Gf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,wg(hi,function(){return rp(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=T.T,T.T=null,i=M.p,M.p=2,f=An,An|=4;try{yg(n,e,t)}finally{An=f,M.p=i,T.T=l}}Yn=1,tp(),ap(),lp()}}function tp(){if(Yn===1){Yn=0;var n=Dt,e=Pa,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=T.T,T.T=null;var l=M.p;M.p=2;var i=An;An|=4;try{Hf(e,n);var s=Xo,f=Pc(n.containerInfo),h=s.focusedElem,A=s.selectionRange;if(f!==h&&h&&h.ownerDocument&&Ic(h.ownerDocument.documentElement,h)){if(A!==null&&Ts(h)){var z=A.start,q=A.end;if(q===void 0&&(q=z),"selectionStart"in h)h.selectionStart=z,h.selectionEnd=Math.min(q,h.value.length);else{var K=h.ownerDocument||document,I=K&&K.defaultView||window;if(I.getSelection){var F=I.getSelection(),ln=h.textContent.length,un=Math.min(A.start,ln),wn=A.end===void 0?un:Math.min(A.end,ln);!F.extend&&un>wn&&(f=wn,wn=un,un=f);var j=zc(h,un),R=zc(h,wn);if(j&&R&&(F.rangeCount!==1||F.anchorNode!==j.node||F.anchorOffset!==j.offset||F.focusNode!==R.node||F.focusOffset!==R.offset)){var U=K.createRange();U.setStart(j.node,j.offset),F.removeAllRanges(),un>wn?(F.addRange(U),F.extend(R.node,R.offset)):(U.setEnd(R.node,R.offset),F.addRange(U))}}}}for(K=[],F=h;F=F.parentNode;)F.nodeType===1&&K.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<K.length;h++){var J=K[h];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Cr=!!Wo,Xo=Wo=null}finally{An=i,M.p=l,T.T=t}}n.current=e,Yn=2}}function ap(){if(Yn===2){Yn=0;var n=Dt,e=Pa,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=T.T,T.T=null;var l=M.p;M.p=2;var i=An;An|=4;try{Df(n,e.alternate,e)}finally{An=i,M.p=l,T.T=t}}Yn=3}}function lp(){if(Yn===4||Yn===3){Yn=0,Vh();var n=Dt,e=Pa,t=ut,l=Gf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Yn=5:(Yn=0,Pa=Dt=null,ip(n,n.pendingLanes));var i=n.pendingLanes;if(i===0&&(wt=null),as(t),e=e.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=T.T,i=M.p,M.p=2,T.T=null;try{for(var s=n.onRecoverableError,f=0;f<l.length;f++){var h=l[f];s(h.value,{componentStack:h.stack})}}finally{T.T=e,M.p=i}}(ut&3)!==0&&pr(),Fe(n),i=n.pendingLanes,(t&261930)!==0&&(i&42)!==0?n===Uo?Pl++:(Pl=0,Uo=n):Pl=0,Fl(0)}}function ip(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Tl(e)))}function pr(){return tp(),ap(),lp(),rp()}function rp(){if(Yn!==5)return!1;var n=Dt,e=Ho;Ho=0;var t=as(ut),l=T.T,i=M.p;try{M.p=32>t?32:t,T.T=null,t=Bo,Bo=null;var s=Dt,f=ut;if(Yn=0,Pa=Dt=null,ut=0,(An&6)!==0)throw Error(u(331));var h=An;if(An|=4,Pf(s.current),Uf(s,s.current,f,t),An=h,Fl(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(rl,s)}catch{}return!0}finally{M.p=i,T.T=l,ip(n,e)}}function sp(n,e,t){e=Me(t,e),e=go(n.stateNode,e,2),n=At(n,e,2),n!==null&&(ol(n,2),Fe(n))}function Rn(n,e,t){if(n.tag===3)sp(n,n,t);else for(;e!==null;){if(e.tag===3){sp(e,n,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wt===null||!wt.has(l))){n=Me(t,n),t=of(2),l=At(e,t,2),l!==null&&(uf(t,l,e,n),ol(l,2),Fe(l));break}}e=e.return}}function Po(n,e,t){var l=n.pingCache;if(l===null){l=n.pingCache=new Tg;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(t)||(ko=!0,i.add(t),n=Rg.bind(null,n,e,t),e.then(n,n))}function Rg(n,e,t){var l=n.pingCache;l!==null&&l.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,Dn===n&&(bn&t)===t&&(Hn===4||Hn===3&&(bn&62914560)===bn&&300>me()-sr?(An&2)===0&&Fa(n,0):No|=t,Ia===bn&&(Ia=0)),Fe(n)}function op(n,e){e===0&&(e=ec()),n=Qt(n,e),n!==null&&(ol(n,e),Fe(n))}function Mg(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),op(n,t)}function Og(n,e){var t=0;switch(n.tag){case 31:case 13:var l=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(e),op(n,t)}function wg(n,e){return $r(n,e)}var mr=null,Ga=null,Fo=!1,hr=!1,qo=!1,kt=0;function Fe(n){n!==Ga&&n.next===null&&(Ga===null?mr=Ga=n:Ga=Ga.next=n),hr=!0,Fo||(Fo=!0,jg())}function Fl(n,e){if(!qo&&hr){qo=!0;do for(var t=!1,l=mr;l!==null;){if(n!==0){var i=l.pendingLanes;if(i===0)var s=0;else{var f=l.suspendedLanes,h=l.pingedLanes;s=(1<<31-ge(42|n)+1)-1,s&=i&~(f&~h),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,fp(l,s))}else s=bn,s=yi(l,l===Dn?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||sl(l,s)||(t=!0,fp(l,s));l=l.next}while(t);qo=!1}}function Dg(){up()}function up(){hr=Fo=!1;var n=0;kt!==0&&Fg()&&(n=kt);for(var e=me(),t=null,l=mr;l!==null;){var i=l.next,s=cp(l,e);s===0?(l.next=null,t===null?mr=i:t.next=i,i===null&&(Ga=t)):(t=l,(n!==0||(s&3)!==0)&&(hr=!0)),l=i}Yn!==0&&Yn!==5||Fl(n),kt!==0&&(kt=0)}function cp(n,e){for(var t=n.suspendedLanes,l=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes&-62914561;0<s;){var f=31-ge(s),h=1<<f,A=i[f];A===-1?((h&t)===0||(h&l)!==0)&&(i[f]=l0(h,e)):A<=e&&(n.expiredLanes|=h),s&=~h}if(e=Dn,t=bn,t=yi(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===e&&(En===2||En===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&ns(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||sl(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(l!==null&&ns(l),as(t)){case 2:case 8:t=$u;break;case 32:t=hi;break;case 268435456:t=nc;break;default:t=hi}return l=dp.bind(null,n),t=$r(t,l),n.callbackPriority=e,n.callbackNode=t,e}return l!==null&&l!==null&&ns(l),n.callbackPriority=2,n.callbackNode=null,2}function dp(n,e){if(Yn!==0&&Yn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(pr()&&n.callbackNode!==t)return null;var l=bn;return l=yi(n,n===Dn?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Jf(n,l,e),cp(n,me()),n.callbackNode!=null&&n.callbackNode===t?dp.bind(null,n):null)}function fp(n,e){if(pr())return null;Jf(n,e,!0)}function jg(){Gg(function(){(An&6)!==0?$r(Xu,Dg):up()})}function Go(){if(kt===0){var n=Oa;n===0&&(n=gi,gi<<=1,(gi&261888)===0&&(gi=256)),kt=n}return kt}function pp(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:xi(""+n)}function mp(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function kg(n,e,t,l,i){if(e==="submit"&&t&&t.stateNode===i){var s=pp((i[re]||null).action),f=l.submitter;f&&(e=(e=f[re]||null)?pp(e.formAction):f.getAttribute("formAction"),e!==null&&(s=e,f=null));var h=new Ri("action","action",null,l,i);n.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(kt!==0){var A=f?mp(i,f):new FormData(i);uo(t,{pending:!0,data:A,method:i.method,action:s},null,A)}}else typeof s=="function"&&(h.preventDefault(),A=f?mp(i,f):new FormData(i),uo(t,{pending:!0,data:A,method:i.method,action:s},s,A))},currentTarget:i}]})}}for(var Yo=0;Yo<Es.length;Yo++){var Jo=Es[Yo],Ng=Jo.toLowerCase(),Lg=Jo[0].toUpperCase()+Jo.slice(1);Le(Ng,"on"+Lg)}Le(Gc,"onAnimationEnd"),Le(Yc,"onAnimationIteration"),Le(Jc,"onAnimationStart"),Le("dblclick","onDoubleClick"),Le("focusin","onFocus"),Le("focusout","onBlur"),Le(W0,"onTransitionRun"),Le(X0,"onTransitionStart"),Le($0,"onTransitionCancel"),Le(Kc,"onTransitionEnd"),ha("onMouseEnter",["mouseout","mouseover"]),ha("onMouseLeave",["mouseout","mouseover"]),ha("onPointerEnter",["pointerout","pointerover"]),ha("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function hp(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],i=l.event;l=l.listeners;n:{var s=void 0;if(e)for(var f=l.length-1;0<=f;f--){var h=l[f],A=h.instance,z=h.currentTarget;if(h=h.listener,A!==s&&i.isPropagationStopped())break n;s=h,i.currentTarget=z;try{s(i)}catch(q){wi(q)}i.currentTarget=null,s=A}else for(f=0;f<l.length;f++){if(h=l[f],A=h.instance,z=h.currentTarget,h=h.listener,A!==s&&i.isPropagationStopped())break n;s=h,i.currentTarget=z;try{s(i)}catch(q){wi(q)}i.currentTarget=null,s=A}}}}function gn(n,e){var t=e[ls];t===void 0&&(t=e[ls]=new Set);var l=n+"__bubble";t.has(l)||(gp(e,n,2,!1),t.add(l))}function Ko(n,e,t){var l=0;e&&(l|=4),gp(t,n,l,e)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[gr]){n[gr]=!0,oc.forEach(function(t){t!=="selectionchange"&&(Hg.has(t)||Ko(t,!1,n),Ko(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[gr]||(e[gr]=!0,Ko("selectionchange",!1,e))}}function gp(n,e,t,l){switch(Yp(e)){case 2:var i=c_;break;case 8:i=d_;break;default:i=uu}t=i.bind(null,e,t,n),i=void 0,!ps||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function Zo(n,e,t,l,i){var s=l;if((e&1)===0&&(e&2)===0&&l!==null)n:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var h=l.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=l.return;f!==null;){var A=f.tag;if((A===3||A===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=fa(h),f===null)return;if(A=f.tag,A===5||A===6||A===26||A===27){l=s=f;continue n}h=h.parentNode}}l=l.return}vc(function(){var z=s,q=ds(t),K=[];n:{var I=Qc.get(n);if(I!==void 0){var F=Ri,ln=n;switch(n){case"keypress":if(Ci(t)===0)break n;case"keydown":case"keyup":F=O0;break;case"focusin":ln="focus",F=_s;break;case"focusout":ln="blur",F=_s;break;case"beforeblur":case"afterblur":F=_s;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=j0;break;case Gc:case Yc:case Jc:F=v0;break;case Kc:F=N0;break;case"scroll":case"scrollend":F=h0;break;case"wheel":F=H0;break;case"copy":case"cut":case"paste":F=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Cc;break;case"toggle":case"beforetoggle":F=U0}var un=(e&4)!==0,wn=!un&&(n==="scroll"||n==="scrollend"),j=un?I!==null?I+"Capture":null:I;un=[];for(var R=z,U;R!==null;){var J=R;if(U=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||U===null||j===null||(J=dl(R,j),J!=null&&un.push(Gl(R,J,U))),wn)break;R=R.return}0<un.length&&(I=new F(I,ln,null,t,q),K.push({event:I,listeners:un}))}}if((e&7)===0){n:{if(I=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",I&&t!==cs&&(ln=t.relatedTarget||t.fromElement)&&(fa(ln)||ln[da]))break n;if((F||I)&&(I=q.window===q?q:(I=q.ownerDocument)?I.defaultView||I.parentWindow:window,F?(ln=t.relatedTarget||t.toElement,F=z,ln=ln?fa(ln):null,ln!==null&&(wn=d(ln),un=ln.tag,ln!==wn||un!==5&&un!==27&&un!==6)&&(ln=null)):(F=null,ln=z),F!==ln)){if(un=xc,J="onMouseLeave",j="onMouseEnter",R="mouse",(n==="pointerout"||n==="pointerover")&&(un=Cc,J="onPointerLeave",j="onPointerEnter",R="pointer"),wn=F==null?I:cl(F),U=ln==null?I:cl(ln),I=new un(J,R+"leave",F,t,q),I.target=wn,I.relatedTarget=U,J=null,fa(q)===z&&(un=new un(j,R+"enter",ln,t,q),un.target=U,un.relatedTarget=wn,J=un),wn=J,F&&ln)e:{for(un=Bg,j=F,R=ln,U=0,J=j;J;J=un(J))U++;J=0;for(var on=R;on;on=un(on))J++;for(;0<U-J;)j=un(j),U--;for(;0<J-U;)R=un(R),J--;for(;U--;){if(j===R||R!==null&&j===R.alternate){un=j;break e}j=un(j),R=un(R)}un=null}else un=null;F!==null&&_p(K,I,F,un,!1),ln!==null&&wn!==null&&_p(K,wn,ln,un,!0)}}n:{if(I=z?cl(z):window,F=I.nodeName&&I.nodeName.toLowerCase(),F==="select"||F==="input"&&I.type==="file")var Tn=kc;else if(Dc(I))if(Nc)Tn=Q0;else{Tn=J0;var rn=Y0}else F=I.nodeName,!F||F.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?z&&us(z.elementType)&&(Tn=kc):Tn=K0;if(Tn&&(Tn=Tn(n,z))){jc(K,Tn,t,q);break n}rn&&rn(n,I,z),n==="focusout"&&z&&I.type==="number"&&z.memoizedProps.value!=null&&os(I,"number",I.value)}switch(rn=z?cl(z):window,n){case"focusin":(Dc(rn)||rn.contentEditable==="true")&&(Sa=rn,xs=z,yl=null);break;case"focusout":yl=xs=Sa=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,Fc(K,t,q);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":Fc(K,t,q)}var fn;if(ys)n:{switch(n){case"compositionstart":var yn="onCompositionStart";break n;case"compositionend":yn="onCompositionEnd";break n;case"compositionupdate":yn="onCompositionUpdate";break n}yn=void 0}else va?Oc(n,t)&&(yn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(yn="onCompositionStart");yn&&(Ec&&t.locale!=="ko"&&(va||yn!=="onCompositionStart"?yn==="onCompositionEnd"&&va&&(fn=Sc()):(_t=q,ms="value"in _t?_t.value:_t.textContent,va=!0)),rn=_r(z,yn),0<rn.length&&(yn=new Ac(yn,n,null,t,q),K.push({event:yn,listeners:rn}),fn?yn.data=fn:(fn=wc(t),fn!==null&&(yn.data=fn)))),(fn=I0?P0(n,t):F0(n,t))&&(yn=_r(z,"onBeforeInput"),0<yn.length&&(rn=new Ac("onBeforeInput","beforeinput",null,t,q),K.push({event:rn,listeners:yn}),rn.data=fn)),kg(K,n,z,t,q)}hp(K,e)})}function Gl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function _r(n,e){for(var t=e+"Capture",l=[];n!==null;){var i=n,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=dl(n,t),i!=null&&l.unshift(Gl(n,i,s)),i=dl(n,e),i!=null&&l.push(Gl(n,i,s))),n.tag===3)return l;n=n.return}return[]}function Bg(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function _p(n,e,t,l,i){for(var s=e._reactName,f=[];t!==null&&t!==l;){var h=t,A=h.alternate,z=h.stateNode;if(h=h.tag,A!==null&&A===l)break;h!==5&&h!==26&&h!==27||z===null||(A=z,i?(z=dl(t,s),z!=null&&f.unshift(Gl(t,z,A))):i||(z=dl(t,s),z!=null&&f.push(Gl(t,z,A)))),t=t.return}f.length!==0&&n.push({event:e,listeners:f})}var Ug=/\r\n?/g,zg=/\u0000|\uFFFD/g;function bp(n){return(typeof n=="string"?n:""+n).replace(Ug,`
`).replace(zg,"")}function yp(n,e){return e=bp(e),bp(n)===e}function On(n,e,t,l,i,s){switch(t){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||_a(n,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&_a(n,""+l);break;case"className":Si(n,"class",l);break;case"tabIndex":Si(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(n,t,l);break;case"style":bc(n,l,s);break;case"data":if(e!=="object"){Si(n,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=xi(""+l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(e!=="input"&&On(n,e,"name",i.name,i,null),On(n,e,"formEncType",i.formEncType,i,null),On(n,e,"formMethod",i.formMethod,i,null),On(n,e,"formTarget",i.formTarget,i,null)):(On(n,e,"encType",i.encType,i,null),On(n,e,"method",i.method,i,null),On(n,e,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=xi(""+l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=Qe);break;case"onScroll":l!=null&&gn("scroll",n);break;case"onScrollEnd":l!=null&&gn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(u(60));n.innerHTML=t}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=xi(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""+l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":gn("beforetoggle",n),gn("toggle",n),vi(n,"popover",l);break;case"xlinkActuate":Ke(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ke(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ke(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ke(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ke(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ke(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vi(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=p0.get(t)||t,vi(n,t,l))}}function Vo(n,e,t,l,i,s){switch(t){case"style":bc(n,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(u(60));n.innerHTML=t}}break;case"children":typeof l=="string"?_a(n,l):(typeof l=="number"||typeof l=="bigint")&&_a(n,""+l);break;case"onScroll":l!=null&&gn("scroll",n);break;case"onScrollEnd":l!=null&&gn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Qe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uc.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),e=t.slice(2,i?t.length-7:void 0),s=n[re]||null,s=s!=null?s[t]:null,typeof s=="function"&&n.removeEventListener(e,s,i),typeof l=="function")){typeof s!="function"&&s!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,l,i);break n}t in n?n[t]=l:l===!0?n.setAttribute(t,""):vi(n,t,l)}}}function ne(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gn("error",n),gn("load",n);var l=!1,i=!1,s;for(s in t)if(t.hasOwnProperty(s)){var f=t[s];if(f!=null)switch(s){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:On(n,e,s,f,t,null)}}i&&On(n,e,"srcSet",t.srcSet,t,null),l&&On(n,e,"src",t.src,t,null);return;case"input":gn("invalid",n);var h=s=f=i=null,A=null,z=null;for(l in t)if(t.hasOwnProperty(l)){var q=t[l];if(q!=null)switch(l){case"name":i=q;break;case"type":f=q;break;case"checked":A=q;break;case"defaultChecked":z=q;break;case"value":s=q;break;case"defaultValue":h=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,e));break;default:On(n,e,l,q,t,null)}}mc(n,s,h,A,z,f,i,!1);return;case"select":gn("invalid",n),l=f=s=null;for(i in t)if(t.hasOwnProperty(i)&&(h=t[i],h!=null))switch(i){case"value":s=h;break;case"defaultValue":f=h;break;case"multiple":l=h;default:On(n,e,i,h,t,null)}e=s,t=f,n.multiple=!!l,e!=null?ga(n,!!l,e,!1):t!=null&&ga(n,!!l,t,!0);return;case"textarea":gn("invalid",n),s=i=l=null;for(f in t)if(t.hasOwnProperty(f)&&(h=t[f],h!=null))switch(f){case"value":l=h;break;case"defaultValue":i=h;break;case"children":s=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:On(n,e,f,h,t,null)}gc(n,l,i,s);return;case"option":for(A in t)t.hasOwnProperty(A)&&(l=t[A],l!=null)&&(A==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":On(n,e,A,l,t,null));return;case"dialog":gn("beforetoggle",n),gn("toggle",n),gn("cancel",n),gn("close",n);break;case"iframe":case"object":gn("load",n);break;case"video":case"audio":for(l=0;l<ql.length;l++)gn(ql[l],n);break;case"image":gn("error",n),gn("load",n);break;case"details":gn("toggle",n);break;case"embed":case"source":case"link":gn("error",n),gn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in t)if(t.hasOwnProperty(z)&&(l=t[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:On(n,e,z,l,t,null)}return;default:if(us(e)){for(q in t)t.hasOwnProperty(q)&&(l=t[q],l!==void 0&&Vo(n,e,q,l,t,void 0));return}}for(h in t)t.hasOwnProperty(h)&&(l=t[h],l!=null&&On(n,e,h,l,t,null))}function Ig(n,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,f=null,h=null,A=null,z=null,q=null;for(F in t){var K=t[F];if(t.hasOwnProperty(F)&&K!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":A=K;default:l.hasOwnProperty(F)||On(n,e,F,null,l,K)}}for(var I in l){var F=l[I];if(K=t[I],l.hasOwnProperty(I)&&(F!=null||K!=null))switch(I){case"type":s=F;break;case"name":i=F;break;case"checked":z=F;break;case"defaultChecked":q=F;break;case"value":f=F;break;case"defaultValue":h=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(u(137,e));break;default:F!==K&&On(n,e,I,F,l,K)}}ss(n,f,h,A,z,q,s,i);return;case"select":F=f=h=I=null;for(s in t)if(A=t[s],t.hasOwnProperty(s)&&A!=null)switch(s){case"value":break;case"multiple":F=A;default:l.hasOwnProperty(s)||On(n,e,s,null,l,A)}for(i in l)if(s=l[i],A=t[i],l.hasOwnProperty(i)&&(s!=null||A!=null))switch(i){case"value":I=s;break;case"defaultValue":h=s;break;case"multiple":f=s;default:s!==A&&On(n,e,i,s,l,A)}e=h,t=f,l=F,I!=null?ga(n,!!t,I,!1):!!l!=!!t&&(e!=null?ga(n,!!t,e,!0):ga(n,!!t,t?[]:"",!1));return;case"textarea":F=I=null;for(h in t)if(i=t[h],t.hasOwnProperty(h)&&i!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:On(n,e,h,null,l,i)}for(f in l)if(i=l[f],s=t[f],l.hasOwnProperty(f)&&(i!=null||s!=null))switch(f){case"value":I=i;break;case"defaultValue":F=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==s&&On(n,e,f,i,l,s)}hc(n,I,F);return;case"option":for(var ln in t)I=t[ln],t.hasOwnProperty(ln)&&I!=null&&!l.hasOwnProperty(ln)&&(ln==="selected"?n.selected=!1:On(n,e,ln,null,l,I));for(A in l)I=l[A],F=t[A],l.hasOwnProperty(A)&&I!==F&&(I!=null||F!=null)&&(A==="selected"?n.selected=I&&typeof I!="function"&&typeof I!="symbol":On(n,e,A,I,l,F));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var un in t)I=t[un],t.hasOwnProperty(un)&&I!=null&&!l.hasOwnProperty(un)&&On(n,e,un,null,l,I);for(z in l)if(I=l[z],F=t[z],l.hasOwnProperty(z)&&I!==F&&(I!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(u(137,e));break;default:On(n,e,z,I,l,F)}return;default:if(us(e)){for(var wn in t)I=t[wn],t.hasOwnProperty(wn)&&I!==void 0&&!l.hasOwnProperty(wn)&&Vo(n,e,wn,void 0,l,I);for(q in l)I=l[q],F=t[q],!l.hasOwnProperty(q)||I===F||I===void 0&&F===void 0||Vo(n,e,q,I,l,F);return}}for(var j in t)I=t[j],t.hasOwnProperty(j)&&I!=null&&!l.hasOwnProperty(j)&&On(n,e,j,null,l,I);for(K in l)I=l[K],F=t[K],!l.hasOwnProperty(K)||I===F||I==null&&F==null||On(n,e,K,I,l,F)}function vp(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Pg(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var i=t[l],s=i.transferSize,f=i.initiatorType,h=i.duration;if(s&&h&&vp(f)){for(f=0,h=i.responseEnd,l+=1;l<t.length;l++){var A=t[l],z=A.startTime;if(z>h)break;var q=A.transferSize,K=A.initiatorType;q&&vp(K)&&(A=A.responseEnd,f+=q*(A<h?1:(h-z)/(A-z)))}if(--l,e+=8*(s+f)/(i.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Wo=null,Xo=null;function br(n){return n.nodeType===9?n:n.ownerDocument}function Sp(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tp(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function $o(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nu=null;function Fg(){var n=window.event;return n&&n.type==="popstate"?n===nu?!1:(nu=n,!0):(nu=null,!1)}var xp=typeof setTimeout=="function"?setTimeout:void 0,qg=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,Gg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(n){return Ap.resolve(null).then(n).catch(Yg)}:xp;function Yg(n){setTimeout(function(){throw n})}function Nt(n){return n==="head"}function Cp(n,e){var t=e,l=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(l===0){n.removeChild(i),Qa(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Yl(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,Yl(t);for(var s=t.firstChild;s;){var f=s.nextSibling,h=s.nodeName;s[ul]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=f}}else t==="body"&&Yl(n.ownerDocument.body);t=i}while(t);Qa(e)}function Ep(n,e){var t=n;n=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=l}while(t)}function eu(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":eu(t),is(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Jg(n,e,t,l){for(;n.nodeType===1;){var i=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[ul])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(s=n.getAttribute("rel"),s==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(s!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(s=n.getAttribute("src"),(s!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===s)return n}else return n;if(n=ke(n.nextSibling),n===null)break}return null}function Kg(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=ke(n.nextSibling),n===null))return null;return n}function Rp(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=ke(n.nextSibling),n===null))return null;return n}function tu(n){return n.data==="$?"||n.data==="$~"}function au(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Qg(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function ke(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var lu=null;function Mp(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return ke(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Op(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function wp(n,e,t){switch(e=br(t),n){case"html":if(n=e.documentElement,!n)throw Error(u(452));return n;case"head":if(n=e.head,!n)throw Error(u(453));return n;case"body":if(n=e.body,!n)throw Error(u(454));return n;default:throw Error(u(451))}}function Yl(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);is(n)}var Ne=new Map,Dp=new Set;function yr(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ct=M.d;M.d={f:Zg,r:Vg,D:Wg,C:Xg,L:$g,m:n_,X:t_,S:e_,M:a_};function Zg(){var n=ct.f(),e=cr();return n||e}function Vg(n){var e=pa(n);e!==null&&e.tag===5&&e.type==="form"?Kd(e):ct.r(n)}var Ya=typeof document>"u"?null:document;function jp(n,e,t){var l=Ya;if(l&&typeof e=="string"&&e){var i=Ee(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Dp.has(i)||(Dp.add(i),n={rel:n,crossOrigin:t,href:e},l.querySelector(i)===null&&(e=l.createElement("link"),ne(e,"link",n),Kn(e),l.head.appendChild(e)))}}function Wg(n){ct.D(n),jp("dns-prefetch",n,null)}function Xg(n,e){ct.C(n,e),jp("preconnect",n,e)}function $g(n,e,t){ct.L(n,e,t);var l=Ya;if(l&&n&&e){var i='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Ee(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Ee(t.imageSizes)+'"]')):i+='[href="'+Ee(n)+'"]';var s=i;switch(e){case"style":s=Ja(n);break;case"script":s=Ka(n)}Ne.has(s)||(n=b({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),Ne.set(s,n),l.querySelector(i)!==null||e==="style"&&l.querySelector(Jl(s))||e==="script"&&l.querySelector(Kl(s))||(e=l.createElement("link"),ne(e,"link",n),Kn(e),l.head.appendChild(e)))}}function n_(n,e){ct.m(n,e);var t=Ya;if(t&&n){var l=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Ee(l)+'"][href="'+Ee(n)+'"]',s=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ka(n)}if(!Ne.has(s)&&(n=b({rel:"modulepreload",href:n},e),Ne.set(s,n),t.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Kl(s)))return}l=t.createElement("link"),ne(l,"link",n),Kn(l),t.head.appendChild(l)}}}function e_(n,e,t){ct.S(n,e,t);var l=Ya;if(l&&n){var i=ma(l).hoistableStyles,s=Ja(n);e=e||"default";var f=i.get(s);if(!f){var h={loading:0,preload:null};if(f=l.querySelector(Jl(s)))h.loading=5;else{n=b({rel:"stylesheet",href:n,"data-precedence":e},t),(t=Ne.get(s))&&iu(n,t);var A=f=l.createElement("link");Kn(A),ne(A,"link",n),A._p=new Promise(function(z,q){A.onload=z,A.onerror=q}),A.addEventListener("load",function(){h.loading|=1}),A.addEventListener("error",function(){h.loading|=2}),h.loading|=4,vr(f,e,l)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(s,f)}}}function t_(n,e){ct.X(n,e);var t=Ya;if(t&&n){var l=ma(t).hoistableScripts,i=Ka(n),s=l.get(i);s||(s=t.querySelector(Kl(i)),s||(n=b({src:n,async:!0},e),(e=Ne.get(i))&&ru(n,e),s=t.createElement("script"),Kn(s),ne(s,"link",n),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(i,s))}}function a_(n,e){ct.M(n,e);var t=Ya;if(t&&n){var l=ma(t).hoistableScripts,i=Ka(n),s=l.get(i);s||(s=t.querySelector(Kl(i)),s||(n=b({src:n,async:!0,type:"module"},e),(e=Ne.get(i))&&ru(n,e),s=t.createElement("script"),Kn(s),ne(s,"link",n),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(i,s))}}function kp(n,e,t,l){var i=(i=mn.current)?yr(i):null;if(!i)throw Error(u(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Ja(t.href),t=ma(i).hoistableStyles,l=t.get(e),l||(l={type:"style",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Ja(t.href);var s=ma(i).hoistableStyles,f=s.get(n);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(n,f),(s=i.querySelector(Jl(n)))&&!s._p&&(f.instance=s,f.state.loading=5),Ne.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ne.set(n,t),s||l_(i,n,t,f.state))),e&&l===null)throw Error(u(528,""));return f}if(e&&l!==null)throw Error(u(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ka(t),t=ma(i).hoistableScripts,l=t.get(e),l||(l={type:"script",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,n))}}function Ja(n){return'href="'+Ee(n)+'"'}function Jl(n){return'link[rel="stylesheet"]['+n+"]"}function Np(n){return b({},n,{"data-precedence":n.precedence,precedence:null})}function l_(n,e,t,l){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=n.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),ne(e,"link",t),Kn(e),n.head.appendChild(e))}function Ka(n){return'[src="'+Ee(n)+'"]'}function Kl(n){return"script[async]"+n}function Lp(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=n.querySelector('style[data-href~="'+Ee(t.href)+'"]');if(l)return e.instance=l,Kn(l),l;var i=b({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Kn(l),ne(l,"style",i),vr(l,t.precedence,n),e.instance=l;case"stylesheet":i=Ja(t.href);var s=n.querySelector(Jl(i));if(s)return e.state.loading|=4,e.instance=s,Kn(s),s;l=Np(t),(i=Ne.get(i))&&iu(l,i),s=(n.ownerDocument||n).createElement("link"),Kn(s);var f=s;return f._p=new Promise(function(h,A){f.onload=h,f.onerror=A}),ne(s,"link",l),e.state.loading|=4,vr(s,t.precedence,n),e.instance=s;case"script":return s=Ka(t.src),(i=n.querySelector(Kl(s)))?(e.instance=i,Kn(i),i):(l=t,(i=Ne.get(s))&&(l=b({},t),ru(l,i)),n=n.ownerDocument||n,i=n.createElement("script"),Kn(i),ne(i,"link",l),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(u(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,vr(l,t.precedence,n));return e.instance}function vr(n,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,s=i,f=0;f<l.length;f++){var h=l[f];if(h.dataset.precedence===e)s=h;else if(s!==i)break}s?s.parentNode.insertBefore(n,s.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function iu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function ru(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Sr=null;function Hp(n,e,t){if(Sr===null){var l=new Map,i=Sr=new Map;i.set(t,l)}else i=Sr,l=i.get(t),l||(l=new Map,i.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),i=0;i<t.length;i++){var s=t[i];if(!(s[ul]||s[Vn]||n==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var f=s.getAttribute(e)||"";f=n+f;var h=l.get(f);h?h.push(s):l.set(f,[s])}}return l}function Bp(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function i_(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(n=e.disabled,typeof e.precedence=="string"&&n==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Up(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function r_(n,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ja(l.href),s=e.querySelector(Jl(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Tr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=s,Kn(s);return}s=e.ownerDocument||e,l=Np(l),(i=Ne.get(i))&&iu(l,i),s=s.createElement("link"),Kn(s);var f=s;f._p=new Promise(function(h,A){f.onload=h,f.onerror=A}),ne(s,"link",l),t.instance=s}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Tr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var su=0;function s_(n,e){return n.stylesheets&&n.count===0&&Ar(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var l=setTimeout(function(){if(n.stylesheets&&Ar(n,n.stylesheets),n.unsuspend){var s=n.unsuspend;n.unsuspend=null,s()}},6e4+e);0<n.imgBytes&&su===0&&(su=62500*Pg());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Ar(n,n.stylesheets),n.unsuspend)){var s=n.unsuspend;n.unsuspend=null,s()}},(n.imgBytes>su?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ar(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var xr=null;function Ar(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,xr=new Map,e.forEach(o_,n),xr=null,Tr.call(n))}function o_(n,e){if(!(e.state.loading&4)){var t=xr.get(n);if(t)var l=t.get(null);else{t=new Map,xr.set(n,t);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var f=i[s];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(t.set(f.dataset.precedence,f),l=f)}l&&t.set(null,l)}i=e.instance,f=i.getAttribute("data-precedence"),s=t.get(f)||l,s===l&&t.set(null,i),t.set(f,i),this.count++,l=Tr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),s?s.parentNode.insertBefore(i,s.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var Ql={$$typeof:Q,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function u_(n,e,t,l,i,s,f,h,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=es(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.hiddenUpdates=es(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function zp(n,e,t,l,i,s,f,h,A,z,q,K){return n=new u_(n,e,t,f,A,z,q,K,h),e=1,s===!0&&(e|=24),s=be(3,null,null,e),n.current=s,s.stateNode=n,e=zs(),e.refCount++,n.pooledCache=e,e.refCount++,s.memoizedState={element:l,isDehydrated:t,cache:e},qs(s),n}function Ip(n){return n?(n=Aa,n):Aa}function Pp(n,e,t,l,i,s){i=Ip(i),l.context===null?l.context=i:l.pendingContext=i,l=xt(e),l.payload={element:t},s=s===void 0?null:s,s!==null&&(l.callback=s),t=At(n,l,e),t!==null&&(fe(t,n,e),El(t,n,e))}function Fp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ou(n,e){Fp(n,e),(n=n.alternate)&&Fp(n,e)}function qp(n){if(n.tag===13||n.tag===31){var e=Qt(n,67108864);e!==null&&fe(e,n,67108864),ou(n,67108864)}}function Gp(n){if(n.tag===13||n.tag===31){var e=xe();e=ts(e);var t=Qt(n,e);t!==null&&fe(t,n,e),ou(n,e)}}var Cr=!0;function c_(n,e,t,l){var i=T.T;T.T=null;var s=M.p;try{M.p=2,uu(n,e,t,l)}finally{M.p=s,T.T=i}}function d_(n,e,t,l){var i=T.T;T.T=null;var s=M.p;try{M.p=8,uu(n,e,t,l)}finally{M.p=s,T.T=i}}function uu(n,e,t,l){if(Cr){var i=cu(l);if(i===null)Zo(n,e,l,Er,t),Jp(n,l);else if(p_(i,n,e,t,l))l.stopPropagation();else if(Jp(n,l),e&4&&-1<f_.indexOf(n)){for(;i!==null;){var s=pa(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var f=qt(s.pendingLanes);if(f!==0){var h=s;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var A=1<<31-ge(f);h.entanglements[1]|=A,f&=~A}Fe(s),(An&6)===0&&(or=me()+500,Fl(0))}}break;case 31:case 13:h=Qt(s,2),h!==null&&fe(h,s,2),cr(),ou(s,2)}if(s=cu(l),s===null&&Zo(n,e,l,Er,t),s===i)break;i=s}i!==null&&l.stopPropagation()}else Zo(n,e,l,null,t)}}function cu(n){return n=ds(n),du(n)}var Er=null;function du(n){if(Er=null,n=fa(n),n!==null){var e=d(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=p(e),n!==null)return n;n=null}else if(t===31){if(n=m(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Er=n,null}function Yp(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wh()){case Xu:return 2;case $u:return 8;case hi:case Xh:return 32;case nc:return 268435456;default:return 32}default:return 32}}var fu=!1,Lt=null,Ht=null,Bt=null,Zl=new Map,Vl=new Map,Ut=[],f_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jp(n,e){switch(n){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Zl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vl.delete(e.pointerId)}}function Wl(n,e,t,l,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pa(e),e!==null&&qp(e)),n):(n.eventSystemFlags|=l,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function p_(n,e,t,l,i){switch(e){case"focusin":return Lt=Wl(Lt,n,e,t,l,i),!0;case"dragenter":return Ht=Wl(Ht,n,e,t,l,i),!0;case"mouseover":return Bt=Wl(Bt,n,e,t,l,i),!0;case"pointerover":var s=i.pointerId;return Zl.set(s,Wl(Zl.get(s)||null,n,e,t,l,i)),!0;case"gotpointercapture":return s=i.pointerId,Vl.set(s,Wl(Vl.get(s)||null,n,e,t,l,i)),!0}return!1}function Kp(n){var e=fa(n.target);if(e!==null){var t=d(e);if(t!==null){if(e=t.tag,e===13){if(e=p(t),e!==null){n.blockedOn=e,rc(n.priority,function(){Gp(t)});return}}else if(e===31){if(e=m(t),e!==null){n.blockedOn=e,rc(n.priority,function(){Gp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Rr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=cu(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);cs=l,t.target.dispatchEvent(l),cs=null}else return e=pa(t),e!==null&&qp(e),n.blockedOn=t,!1;e.shift()}return!0}function Qp(n,e,t){Rr(n)&&t.delete(e)}function m_(){fu=!1,Lt!==null&&Rr(Lt)&&(Lt=null),Ht!==null&&Rr(Ht)&&(Ht=null),Bt!==null&&Rr(Bt)&&(Bt=null),Zl.forEach(Qp),Vl.forEach(Qp)}function Mr(n,e){n.blockedOn===e&&(n.blockedOn=null,fu||(fu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,m_)))}var Or=null;function Zp(n){Or!==n&&(Or=n,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Or===n&&(Or=null);for(var e=0;e<n.length;e+=3){var t=n[e],l=n[e+1],i=n[e+2];if(typeof l!="function"){if(du(l||t)===null)continue;break}var s=pa(t);s!==null&&(n.splice(e,3),e-=3,uo(s,{pending:!0,data:i,method:t.method,action:l},l,i))}}))}function Qa(n){function e(A){return Mr(A,n)}Lt!==null&&Mr(Lt,n),Ht!==null&&Mr(Ht,n),Bt!==null&&Mr(Bt,n),Zl.forEach(e),Vl.forEach(e);for(var t=0;t<Ut.length;t++){var l=Ut[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Ut.length&&(t=Ut[0],t.blockedOn===null);)Kp(t),t.blockedOn===null&&Ut.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var i=t[l],s=t[l+1],f=i[re]||null;if(typeof s=="function")f||Zp(t);else if(f){var h=null;if(s&&s.hasAttribute("formAction")){if(i=s,f=s[re]||null)h=f.formAction;else if(du(i)!==null)continue}else h=f.action;typeof h=="function"?t[l+1]=h:(t.splice(l,3),l-=3),Zp(t)}}}function Vp(){function n(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function pu(n){this._internalRoot=n}wr.prototype.render=pu.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(u(409));var t=e.current,l=xe();Pp(t,l,n,e,null,null)},wr.prototype.unmount=pu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Pp(n.current,2,null,n,null,null),cr(),e[da]=null}};function wr(n){this._internalRoot=n}wr.prototype.unstable_scheduleHydration=function(n){if(n){var e=ic();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ut.length&&e!==0&&e<Ut[t].priority;t++);Ut.splice(t,0,n),t===0&&Kp(n)}};var Wp=r.version;if(Wp!=="19.2.4")throw Error(u(527,Wp,"19.2.4"));M.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=y(e),n=n!==null?S(n):null,n=n===null?null:n.stateNode,n};var h_={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{rl=Dr.inject(h_),he=Dr}catch{}}return Xl.createRoot=function(n,e){if(!c(n))throw Error(u(299));var t=!1,l="",i=af,s=lf,f=rf;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError)),e=zp(n,1,!1,null,null,t,l,null,i,s,f,Vp),n[da]=e.current,Qo(n),new pu(e)},Xl.hydrateRoot=function(n,e,t){if(!c(n))throw Error(u(299));var l=!1,i="",s=af,f=lf,h=rf,A=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError),t.formState!==void 0&&(A=t.formState)),e=zp(n,1,!0,e,t??null,l,i,A,s,f,h,Vp),e.context=Ip(null),t=e.current,l=xe(),l=ts(l),i=xt(l),i.callback=null,At(t,i,l),t=l,e.current.lanes=t,ol(e,t),Fe(e),n[da]=e.current,Qo(n),new wr(e)},Xl.version="19.2.4",Xl}var em;function N_(){if(em)return mu.exports;em=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),mu.exports=k_(),mu.exports}var L_=N_();const H_="modulepreload",B_=function(a){return"/"+a},tm={},fi=function(r,o,u){let c=Promise.resolve();if(o&&o.length>0){let _=function(y){return Promise.all(y.map(S=>Promise.resolve(S).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),m=p?.nonce||p?.getAttribute("nonce");c=_(o.map(y=>{if(y=B_(y),y in tm)return;tm[y]=!0;const S=y.endsWith(".css"),b=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${b}`))return;const D=document.createElement("link");if(D.rel=S?"stylesheet":H_,S||(D.as="script"),D.crossOrigin="",D.href=y,m&&D.setAttribute("nonce",m),document.head.appendChild(D),S)return new Promise((C,O)=>{D.addEventListener("load",C),D.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${y}`)))})}))}function d(p){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=p,window.dispatchEvent(m),!m.defaultPrevented)throw p}return c.then(p=>{for(const m of p||[])m.status==="rejected"&&d(m.reason);return r().catch(d)})},Uu=[{id:"dracula",label:"Dracula",scheme:"dark"},{id:"nord",label:"Nord",scheme:"dark"},{id:"tokyo-night",label:"Tokyo Night",scheme:"dark"},{id:"github-light",label:"GitHub Light",scheme:"light"},{id:"catppuccin-latte",label:"Catppuccin Latte",scheme:"light"}],Ur="dracula",Ou="github-light",nh=x.createContext({theme:Ur,setTheme:()=>{},themes:Uu});function U_(){return window.matchMedia("(prefers-color-scheme: dark)").matches?Ur:Ou}function am(a){return Uu.some(r=>r.id===a)}const z_=({children:a})=>{const[r,o]=x.useState(()=>{try{const c=localStorage.getItem("theme");if(c&&am(c))return c}catch{}return U_()});x.useEffect(()=>{document.documentElement.setAttribute("data-theme",r)},[r]),x.useEffect(()=>{const c=window.matchMedia("(prefers-color-scheme: dark)"),d=p=>{try{localStorage.getItem("theme")||o(p.matches?Ur:Ou)}catch{o(p.matches?Ur:Ou)}};return c.addEventListener("change",d),()=>c.removeEventListener("change",d)},[]);const u=x.useCallback(c=>{if(am(c)){o(c);try{localStorage.setItem("theme",c)}catch{}}},[]);return g.jsx(nh.Provider,{value:{theme:r,setTheme:u,themes:Uu},children:a})},I_=()=>x.useContext(nh),P_={dracula:["#282a36","#f8f8f2","#50fa7b","#bd93f9"],nord:["#2e3440","#eceff4","#a3be8c","#b48ead"],"tokyo-night":["#1a1b26","#c0caf5","#9ece6a","#bb9af7"],"github-light":["#ffffff","#1f2328","#1a7f37","#8250df"],"catppuccin-latte":["#eff1f5","#4c4f69","#40a02b","#8839ef"]},lm=()=>{const{theme:a,setTheme:r,themes:o}=I_(),[u,c]=x.useState(!1),d=x.useRef(null);x.useEffect(()=>{if(!u)return;const S=b=>{d.current&&!d.current.contains(b.target)&&c(!1)};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[u]);const[p,m]=x.useState(-1),_=o.find(S=>S.id===a),y=x.useCallback(S=>{if(u)switch(S.key){case"ArrowDown":S.preventDefault(),m(b=>(b+1)%o.length);break;case"ArrowUp":S.preventDefault(),m(b=>(b-1+o.length)%o.length);break;case"Enter":case" ":S.preventDefault(),p>=0&&p<o.length&&(r(o[p].id),c(!1),m(-1));break;case"Escape":S.preventDefault(),c(!1),m(-1);break}},[u,p,o,r]);return x.useEffect(()=>{if(u){const S=requestAnimationFrame(()=>m(o.findIndex(b=>b.id===a)));return()=>cancelAnimationFrame(S)}},[u,a,o]),g.jsxs("div",{className:"theme-dropdown",ref:d,onKeyDown:y,children:[g.jsx("span",{className:"theme-label",children:"Theme:"}),g.jsxs("button",{className:"theme-dropdown__trigger",onClick:()=>c(!u),"aria-label":"Change theme",children:[g.jsx("span",{children:_?.label||a}),g.jsx("span",{className:"theme-dropdown__arrow",children:"▾"})]}),u&&g.jsx("ul",{className:"theme-dropdown__menu",role:"listbox","aria-label":"Theme options",children:o.map((S,b)=>{const D=P_[S.id]||["#888","#aaa","#ccc","#eee"];return g.jsx("li",{role:"option","aria-selected":S.id===a,children:g.jsxs("button",{className:`theme-dropdown__option ${S.id===a?"active":""}${b===p?" focused":""}`,onClick:()=>{r(S.id),c(!1),m(-1)},children:[g.jsx("span",{className:"theme-preview",children:D.map((C,O)=>g.jsx("span",{style:{background:C}},O))}),g.jsx("span",{children:S.label}),g.jsx("span",{className:"theme-dropdown__check",children:"✓"})]})},S.id)})})]})},im=[{name:"home",to:"/",match:"/"},{name:"posts",to:"/posts",match:"/posts"},{name:"about",to:"/about",match:"/about"}],F_=()=>{const{pathname:a}=ll(),[r,o]=x.useState(!1);x.useEffect(()=>{requestAnimationFrame(()=>o(!1))},[a]);const u=c=>c==="/"?a==="/":a.startsWith(c);return g.jsxs(g.Fragment,{children:[g.jsx("header",{className:"header",children:g.jsxs("div",{className:"header-inner",children:[g.jsxs("div",{className:"header-left",children:[g.jsxs(si,{className:"header-logo",to:"/",children:["sim",g.jsx("span",{className:"accent",children:"."}),"junghun"]}),g.jsx("nav",{children:g.jsx("ul",{className:"header-nav",children:im.map(c=>g.jsx("li",{children:g.jsx(si,{to:c.to,"data-active":u(c.match),"aria-current":u(c.match)?"page":void 0,children:c.name})},c.to))})})]}),g.jsxs("div",{className:"header-right",children:[g.jsx(lm,{}),g.jsx("button",{className:"header-mobile-toggle",onClick:()=>o(c=>!c),"aria-label":"Toggle menu","aria-expanded":r,"aria-controls":"mobile-nav",children:r?"✕":"☰"})]})]})}),g.jsxs("nav",{id:"mobile-nav",className:`header-drawer${r?" open":""}`,children:[im.map(c=>g.jsx(si,{to:c.to,"data-active":u(c.match),"aria-current":u(c.match)?"page":void 0,onClick:()=>o(!1),children:c.name},c.to)),g.jsx("div",{className:"header-drawer__theme",children:g.jsx(lm,{})})]})]})},q_=({slot:a,format:r="auto",responsive:o=!0})=>(x.useEffect(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch{}},[]),g.jsx("div",{className:"adsense-wrap",children:g.jsx("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-8945417625760085","data-ad-slot":a,"data-ad-format":r,"data-full-width-responsive":o?"true":"false"})})),G_=()=>g.jsxs("main",{id:"main-content",className:"main",children:[g.jsx("div",{className:"container",children:g.jsx(E_,{})}),g.jsx("div",{className:"inline-promo",children:g.jsx(q_,{slot:"1102442335"})})]}),Y_=()=>g.jsxs("footer",{className:"site-footer",children:[g.jsx("div",{className:"site-footer__divider",children:"────────────────────────────────────────"}),g.jsxs("div",{children:["© ",new Date().getFullYear()," sim.junghun",g.jsx("span",{children:"·"}),g.jsx("a",{href:"https://github.com/bak-libra26",target:"_blank",rel:"noopener noreferrer",children:"github"}),g.jsx("span",{children:"·"}),g.jsx("a",{href:"mailto:bak-libra26@gmail.com",children:"email"})]})]}),Yr=x.createContext(null);let J_=0;const K_=()=>`win-${++J_}`,Q_="win-terminal",Z_={windows:[{id:Q_,type:"terminal",title:"sim.junghun — terminal",icon:">_",state:"minimized",position:{x:null,y:null},size:{w:680,h:480},zIndex:0,meta:{}}],nextZ:1,activeWindowId:null};function V_(a,r){switch(r.type){case"OPEN_WINDOW":{const{windowType:o,title:u,icon:c,meta:d,size:p,singleton:m}=r.payload;if(m){const S=a.windows.find(b=>b.type===o);if(S)return{...a,windows:a.windows.map(b=>b.id===S.id?{...b,state:b.state==="minimized"?"normal":b.state,zIndex:a.nextZ}:b),nextZ:a.nextZ+1,activeWindowId:S.id}}const _=K_(),y={id:_,type:o,title:u,icon:c||"",state:"normal",position:{x:null,y:null},size:p||{w:680,h:480},zIndex:a.nextZ,meta:d||{}};return{...a,windows:[...a.windows,y],nextZ:a.nextZ+1,activeWindowId:_}}case"CLOSE_WINDOW":{const{id:o}=r.payload,u=a.windows.filter(d=>d.id!==o),c=a.activeWindowId===o?u.length>0?u.reduce((d,p)=>d.zIndex>p.zIndex?d:p).id:null:a.activeWindowId;return{...a,windows:u,activeWindowId:c}}case"FOCUS_WINDOW":{const{id:o}=r.payload;return{...a,windows:a.windows.map(u=>u.id===o?{...u,zIndex:a.nextZ,state:u.state==="minimized"?"normal":u.state}:u),nextZ:a.nextZ+1,activeWindowId:o}}case"MINIMIZE_WINDOW":{const{id:o}=r.payload,u=a.windows.filter(d=>d.id!==o),c=a.activeWindowId===o?u.filter(d=>d.state!=="minimized").length>0?u.filter(d=>d.state!=="minimized").reduce((d,p)=>d.zIndex>p.zIndex?d:p).id:null:a.activeWindowId;return{...a,windows:a.windows.map(d=>d.id===o?{...d,state:"minimized"}:d),activeWindowId:c}}case"RESTORE_WINDOW":{const{id:o}=r.payload;return{...a,windows:a.windows.map(u=>u.id===o?{...u,state:"normal",zIndex:a.nextZ}:u),nextZ:a.nextZ+1,activeWindowId:o}}case"FULLSCREEN_WINDOW":{const{id:o}=r.payload;return{...a,windows:a.windows.map(u=>u.id===o?{...u,state:u.state==="fullscreen"?"normal":"fullscreen",zIndex:a.nextZ}:u),nextZ:a.nextZ+1,activeWindowId:o}}case"MOVE_WINDOW":{const{id:o,position:u}=r.payload;return{...a,windows:a.windows.map(c=>c.id===o?{...c,position:u}:c)}}case"RESIZE_WINDOW":{const{id:o,size:u}=r.payload;return{...a,windows:a.windows.map(c=>c.id===o?{...c,size:u}:c)}}case"UPDATE_WINDOW":{const{id:o,updates:u}=r.payload;return{...a,windows:a.windows.map(c=>c.id===o?{...c,...u}:c)}}default:return a}}const W_=({children:a})=>{const[r,o]=x.useReducer(V_,Z_),u=x.useCallback((E,{title:B,icon:H,meta:Q,size:v,singleton:N}={})=>{o({type:"OPEN_WINDOW",payload:{windowType:E,title:B,icon:H,meta:Q,size:v,singleton:N}})},[]),c=x.useCallback(E=>{o({type:"CLOSE_WINDOW",payload:{id:E}})},[]),d=x.useCallback(E=>{o({type:"FOCUS_WINDOW",payload:{id:E}})},[]),p=x.useCallback(E=>{o({type:"MINIMIZE_WINDOW",payload:{id:E}})},[]),m=x.useCallback(E=>{o({type:"RESTORE_WINDOW",payload:{id:E}})},[]),_=x.useCallback(E=>{o({type:"FULLSCREEN_WINDOW",payload:{id:E}})},[]),y=x.useCallback((E,B)=>{o({type:"MOVE_WINDOW",payload:{id:E,position:B}})},[]),S=x.useCallback((E,B)=>{o({type:"RESIZE_WINDOW",payload:{id:E,size:B}})},[]),b=x.useCallback((E,B)=>{o({type:"UPDATE_WINDOW",payload:{id:E,updates:B}})},[]),D=x.useRef(r.windows);x.useEffect(()=>{D.current=r.windows});const C=x.useCallback(E=>r.windows.find(B=>B.id===E)||null,[r.windows]),O=x.useCallback(E=>r.windows.find(B=>B.type===E)||null,[r.windows]),P=x.useMemo(()=>({...r,openWindow:u,closeWindow:c,focusWindow:d,minimizeWindow:p,restoreWindow:m,fullscreenWindow:_,moveWindow:y,resizeWindow:S,updateWindow:b,getWindow:C,findByType:O}),[r,u,c,d,p,m,_,y,S,b,C,O]);return g.jsx(Yr.Provider,{value:P,children:a})},rm=a=>r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),a())},X_={terminal:">_",post:"📄",image:"🖼"},$_=({onOpenShortcuts:a})=>{const r=x.useContext(Yr),[o,u]=x.useState(null),c=x.useRef(null),d=()=>{if(!r)return;const y=r.findByType("terminal");y&&(y.state==="minimized"?r.restoreWindow(y.id):r.focusWindow(y.id))},p=x.useCallback((y,S)=>{y.preventDefault(),u({winId:S,x:y.clientX,y:y.clientY})},[]);x.useEffect(()=>{if(!o)return;const y=b=>{c.current&&!c.current.contains(b.target)&&u(null)},S=b=>{b.key==="Escape"&&u(null)};return window.addEventListener("mousedown",y),window.addEventListener("keydown",S),()=>{window.removeEventListener("mousedown",y),window.removeEventListener("keydown",S)}},[o]),x.useEffect(()=>{if(o&&r&&!r.getWindow(o.winId)){const y=requestAnimationFrame(()=>u(null));return()=>cancelAnimationFrame(y)}},[o,r]);const m=o?r?.getWindow(o.winId):null,_=r?r.windows:[];return g.jsxs("div",{className:"shortcut-bar",children:[g.jsxs("div",{className:"sc-item",onClick:d,onKeyDown:rm(d),role:"button",tabIndex:0,"aria-label":"Open terminal (⌘J)",children:[g.jsx("kbd",{children:"⌘"}),g.jsx("kbd",{children:"J"}),g.jsx("span",{children:"terminal"})]}),g.jsx("div",{className:"divider"}),g.jsxs("div",{className:"sc-item",onClick:a,onKeyDown:rm(a),role:"button",tabIndex:0,"aria-label":"Show shortcuts (?)",children:[g.jsx("kbd",{children:"?"}),g.jsx("span",{children:"shortcuts"})]}),_.length>0&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"divider"}),_.map(y=>g.jsxs("div",{className:`sc-item sc-window ${r.activeWindowId===y.id?"sc-active":""} ${y.state==="minimized"?"sc-minimized":""}`,onClick:()=>{y.state==="minimized"?r.restoreWindow(y.id):r.focusWindow(y.id)},onContextMenu:S=>p(S,y.id),role:"button",tabIndex:0,title:y.title,children:[g.jsx("span",{className:"sc-icon",children:y.icon||X_[y.type]||"◻"}),g.jsx("span",{className:"sc-win-title",children:y.title})]},y.id))]}),o&&m&&g.jsx(nb,{menuRef:c,win:m,x:o.x,y:o.y,desktop:r,onDone:()=>u(null)})]})},nb=({win:a,x:r,y:o,desktop:u,onDone:c,menuRef:d})=>{const p=a.state==="minimized",m=a.state==="fullscreen",_=S=>()=>{S(),c()},y={left:Math.min(r,window.innerWidth-180),bottom:36};return g.jsxs("div",{ref:d,className:"dock-ctx",style:y,children:[g.jsx("div",{className:"dock-ctx-title",children:a.title}),g.jsx("div",{className:"dock-ctx-sep"}),p?g.jsx("button",{className:"dock-ctx-item",onClick:_(()=>u.restoreWindow(a.id)),children:"복원"}):g.jsx("button",{className:"dock-ctx-item",onClick:_(()=>u.minimizeWindow(a.id)),children:"최소화"}),g.jsx("button",{className:"dock-ctx-item",onClick:_(()=>u.fullscreenWindow(a.id)),children:m?"전체화면 해제":"전체화면"}),g.jsx("div",{className:"dock-ctx-sep"}),g.jsx("button",{className:"dock-ctx-item dock-ctx-danger",onClick:_(()=>u.closeWindow(a.id)),children:"닫기"})]})},eh=x.memo(({open:a,onClose:r})=>a?g.jsx("div",{className:"shortcuts-backdrop open",onClick:r,children:g.jsxs("div",{className:"shortcuts-panel",onClick:o=>o.stopPropagation(),children:[g.jsxs("div",{className:"shortcuts-header",children:[g.jsx("h3",{children:"Keyboard Shortcuts"}),g.jsx("span",{className:"close-hint",children:"esc"})]}),g.jsxs("div",{className:"shortcuts-body",children:[g.jsxs("div",{className:"shortcuts-group",children:[g.jsx("div",{className:"shortcuts-group-title",children:"general"}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Open terminal"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"⌘"}),g.jsx("kbd",{children:"J"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Show shortcuts"}),g.jsx("span",{className:"sc-keys",children:g.jsx("kbd",{children:"?"})})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Close overlay"}),g.jsx("span",{className:"sc-keys",children:g.jsx("kbd",{children:"Esc"})})]})]}),g.jsxs("div",{className:"shortcuts-group",children:[g.jsx("div",{className:"shortcuts-group-title",children:"terminal"}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Tab completion"}),g.jsx("span",{className:"sc-keys",children:g.jsx("kbd",{children:"Tab"})})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"History navigation"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"↑"}),g.jsx("kbd",{children:"↓"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Clear screen"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"Ctrl"}),g.jsx("kbd",{children:"L"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Cancel input"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"Ctrl"}),g.jsx("kbd",{children:"C"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Cursor to start"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"Ctrl"}),g.jsx("kbd",{children:"A"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Cursor to end"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"Ctrl"}),g.jsx("kbd",{children:"E"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Delete word"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"Ctrl"}),g.jsx("kbd",{children:"W"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Delete to end"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"Ctrl"}),g.jsx("kbd",{children:"K"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Delete line"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"Ctrl"}),g.jsx("kbd",{children:"U"})]})]}),g.jsxs("div",{className:"sc-row",children:[g.jsx("span",{className:"sc-label",children:"Exit (empty line)"}),g.jsxs("span",{className:"sc-keys",children:[g.jsx("kbd",{children:"Ctrl"}),g.jsx("kbd",{children:"D"})]})]})]})]})]})}):null);eh.displayName="ShortcutsModal";function tn(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;")}function th(a){return a.replace(/ /g,"\\ ")}const eb=`---
summary: 몽고 DB, Authentication Failed 예외 해결기
tags:
  - "#MongoDB"
  - Authentication_Failed
references:
  - https://www.mongodb.com/ko-kr/docs/manual/tutorial/create-users/#std-label-create-users
created_date: 2025-07-26 20:55:56
last_modified_date: 2025-07-26 20:56:12
---
# MongoDB / Authentication Failed 에러 해결기

## 문제 원인 파악 및 해결 과정

- 프로세스 로그
    \`\`\`shell
    com.mongodb.MongoCommandException: Command failed with error 18 (AuthenticationFailed): 'Authentication failed.' on server \${IP}:\${PORT}. The full response is {"ok": 0.0, "errmsg": "Authentication failed.", "code": 18, "codeName": "AuthenticationFailed"}
    \`\`\`

1. 네이버 클라우드 서버에 Spring Boot와 MongoDB를 연동하는 과정에서 인증 실패 에러가 발생했다.
2. 에러 메시지를 통해 인증(아이디, 비밀번호, 인증 DB) 관련 문제임을 파악했다.
3. 설정 파일의 계정 정보가 정확함을 확인한 뒤, MongoDB는 사용자를 특정 데이터베이스에 소속시켜 관리하고 인증 시 해당 데이터베이스를 명확히 지정해야 한다는 점을 알게 되었다.
4. Spring Boot의 설정에서 인증 데이터베이스(authSource 또는 authentication-database) 옵션을 추가하자 정상적으로 연결이 이루어졌다.

## 스프링부트 / MongoDB 인증 데이터베이스 설정 방법

1. \`uri\`를 통한 설정
    \`\`\`yaml
    spring:
      data:
        mongodb:
          uri: mongodb://username:password@host:port/dbname?authSource=admin
    \`\`\`

2. \`authentication-database\`를 통한 설정
    \`\`\`yaml
    spring:
      data:
        mongodb:
          host: host
          port: port
          database: dbname
          username: username
          password: password
          authentication-database: admin
    \`\`\`

> **참고:**  
> 인증 DB 설정이 누락되면, 계정 정보가 정확해도 인증에 실패할 수 있다.
`,tb=Object.freeze(Object.defineProperty({__proto__:null,default:eb},Symbol.toStringTag,{value:"Module"})),ab=`---
summary: 레빗엠큐, 고급 큐 기능 알아보기 
tags:
  - RabbitMQ
references:
  - https://www.rabbitmq.com/community-plugins
  - https://github.com/rabbitmq/rabbitmq-delayed-message-exchange
  - https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases/tag/v4.1.0
created_date: 2025-08-21T11:34:57.000Z
last_modified_date: 2025-08-21T11:34:57.000Z
id: fc19939b-2851-45e9-b3c2-efd961564be1
---


# RabbitMQ - 고급 큐 기능의 필요성

RabbitMQ에서 기본적으로 제공하는 큐는 메시지의 단순 전달 및 재처리 기능을 지원한다. 그러나 실제 서비스 환경에서는 다음과 같은 한계점이 존재한다.

- **재처리 메시지 반복 문제**  
    메시지 재처리가 필요한 경우, 일반적으로 Nack(Negative Acknowledgement)을 수행한다. Nack 처리된 메시지는 큐의 최상단에 다시 적재되어 같은 메시지가 반복적으로 처리된다. 만약 해당 메시지가 지속적으로 처리되지 않으면 동일한 메시지만 계속해서 재처리되는 문제가 발생한다.
- **지연 재처리의 어려움**  
    기본 큐만으로는 메시지의 재처리 주기를 설정하여 일정 시간 후에 재처리하는 기능을 구현하기 어렵다. 즉, 메시지 재처리 시점의 제어가 제한적이다.
- **메시지 우선순위 관리의 한계**  
    메시지는 발행(Publish) 순서대로 큐에 적재되며, 소비자는 인입된 순서대로 메시지를 처리한다. 메시지별로 우선순위를 부여하여 높은 우선순위의 메시지를 먼저 처리하는 기능을 기본 큐만으로 구현하기 어렵다.

이러한 문제를 해결하기 위해 RabbitMQ의 고급 큐 기능(Delay Queue, Priority Queue 등) 을 사용할 수 있다.

## DLX(Dead Letter Exchange)

> 예제: [RabbitMQ - Dead Letter Exchange Handbook](https://github.com/bak-libra26/rabbitmq-handbook/tree/main/src/main/java/kr/co/baklibra26/rabbitmq/handbook/queue/dead_letter_exchange)

DLX(Dead Letter Exchange) 란 메세지가 정상적으로 처리되지 않은 경우(Reject, TTL 만료, 큐의 최대 길이 초과 등) 해당 메세지를 "Dead Letter Exchange" 로 보내 별도의 큐에서 관리할 수 있게 해주는 기능이다. 

- DLX(Dead Letter Exchange) 의 장점 
	1. 재처리가 필요한 메세지를 일반 큐와 분리하여 별도의 큐에서 관리할 수 있다.
	2. 메세지의 성격에 따라 큐를 분리해 각각의 상황에 맞는 재처리 로직을 적용할 수 있다.


- DLX(Dead Letter Exchange) 의 단점
	1. 재처리해야하는 메세지의 종류가 많아질수록  DLX 큐와 컨슈머를 각각 따로 만들어야한다.
	2. 시스템 구조가 복잡해질 수 있으며, 메세지 분류 기준과 DLX 큐 관리 방안을 잘 고려하여 설계해야한다.



### DLX 동작 원리

메세지 만료(TTL), 메세지 거절(Reject), 큐 최대 길이 초과(max-length) 중 하나의 조건에 해당하는 경우, 해당 메세지는 일반 큐에서 "Dead Letter Exchange" 로 전달되며, 이렇게 전달된 메세지는 큐에 미리 설정되어있는 DLX 큐로 메세지를 라우팅하고 별도의 컨슈머가 해당 메세지를 처리한다.

- 흐름 간단 요약
	1. 메시지가 원래 큐에 들어온다.
	2. 만료, 리젝, 최대 길이 초과 중 하나의 조건이 발생한다.
	3. RabbitMQ가 해당 메시지를 Dead Letter Exchange(DLX)로 전달한다.
	4. DLX는 미리 지정된 큐(Dead Letter Queue)로 메시지를 라우팅한다.
	5. Dead Letter Queue에서 별도의 컨슈머가 메시지를 재처리하거나, 로그를 남기거나, 알림을 보낼 수 있다.


### DLX 설정 

\`rabbitmqctl\` 을 통해 \`DLX\` 설정을 추가하는 경우 \`1. DLX 정책명\`, \`2. DLX 를 적용할 큐 이름 정규식\`, \`3. DLX 를 적용할 익스체인지 이름\`, \`4. DLX 적용 범위\` 를 설정할 수 있다.

- • **큐****(queues)****에** **적용****:**  
    정책이 지정한 큐에만 직접 적용됩니다.  
    예를 들어, dead-letter-exchange 정책을 큐에 적용하면,  
    해당 큐에서만 DLX 동작이 활성화됩니다.
- **익스체인지****(exchanges)****에** **적용****:**  
    정책이 익스체인지 자체에 적용됩니다.  
    하지만, dead-letter-exchange와 같은 큐 속성은 익스체인지에 적용해도  
    큐의 동작에는 영향을 주지 않습니다.  
    (즉, DLX 정책은 큐에만 의미가 있습니다.)
- **all:**  
    큐와 익스체인지 모두에 정책을 적용합니다.  
    하지만, 정책의 내용에 따라 실제로 적용되는 대상이 다를 수 있습니다.

- DLX 정책 추가
\`\`\`shell
rabbitmqctl set_policy \${정책 이름} \${큐 이름 정규식} '{"dead-letter-exchange":"\${DLX 익스체인지 이름}"' --apply-to \${queues|exchanges|all}
\`\`\`







## Delay Queue

> 예제 : [RabbitMQ - Delay-Queue Handbook](https://github.com/bak-libra26/rabbitmq-handbook/tree/main/src/main/java/kr/co/baklibra26/rabbitmq/handbook/queue/delayed_queue)

Delay Queue는 메시지를 즉시 처리하지 않고, 지정한 지연 시간(delay) 이후에 처리할 수 있도록 지원하는 큐이다. 예를 들어, 회원가입 후 10분 뒤에 환영 메일을 보내거나, 일정 시간 후에 알림을 전송해야 하는 경우에 활용됩니다.

일반 큐에서는 메시지에 시간 정보를 기록하고, 소비자가 해당 시간이 될 때까지 메시지를 재적재(Nack)하는 방식이 필요하나, Delay Queue는 메시지 전송 시 지연 시간을 설정하면, 지정한 시간이 지난 후 자동으로 소비자에게 전달된다.

- Delay Queue 주요 특징
	1. 메시지별로 개별 지연 시간 설정 가능
	2. 지정한 시간이 지난 후에만 메시지가 소비자에게 전달됨
	3. 예약 알림, 만료 처리, 재시도 로직 등에 활용


RabbitMQ 에서 Delay Queue 를 사용하고 싶은 경우, \`x-delayed-message\` 플러그인을 설치해야한다.

### 플러그인 설치

- rabbitmq plugin 디렉토리 확인
\`\`\`shell
rabbitmq-plugins directories -s
\`\`\`

- 플러그인 설치
\`\`\`
wget https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases/download/v4.1.0/rabbitmq_delayed_message_exchange-4.1.0.ez
\`\`\`

- 플러그인 사용
\`\`\`shell
rabbitmq-plugins enable rabbitmq_delayed_message_exchange
\`\`\`


### Delay Queue 예시

- Delay Queue 예시 코드
\`\`\`java
public class DelayQueueMain {  
  
	private static final String DELAYED_EXCHANGE = "delay.exchange";  
	private static final String DELAYED_QUEUE = "delay.queue";  
	private static final String ROUTING_KEY = "delay.routingkey";  
  
	@Bean  
	public CustomExchange delayExchange() {  
		Map<String, Object> args = Map.of("x-delay-type", "direct");  
		return new CustomExchange(DELAYED_EXCHANGE, "x-delay-message", true, false, args);  
	}  
  
	@Bean  
	public Queue delayQueue() {  
		return new Queue(DELAYED_QUEUE, true);  
	}  
  
	@Bean  
	public Binding binding(Queue delayQueue, CustomExchange delayExchange) {  
		return BindingBuilder.bind(delayQueue).to(delayExchange).with(ROUTING_KEY).noargs();  
	}  
  
	@Bean  
	public CommandLineRunner testSend(RabbitTemplate rabbitTemplate) {  
		return args -> {  
			String message = "테스트 메시지";  
			MessageProperties props = new MessageProperties();  
			props.setHeader("x-delay", 3000); // 3초 지연  
			Message msg = new Message(message.getBytes(), props);  
			rabbitTemplate.send(DELAYED_EXCHANGE, ROUTING_KEY, msg);  
			System.out.println("지연 메시지 전송 완료");  
		};  
	}  
  
	public static void main(String[] args) {  
		SpringApplication.run(DelayQueueMain.class, args);  
	}  
}
\`\`\`

#### Delay Queue 설정 요약


|      항목       |                   설정값/설명                    |
| :-----------: | :-----------------------------------------: |
|  Exchange 타입  |              x-delayed-message              |
| Exchange args | x-delay-type=direct, fanout, topic, headers |
|      바인딩      |                원하는 라우팅키로 바인딩                |
|    메세지 헤더     |      x-delay (ms 단위, 예: 3000 = 3초 지연)       |




## Priority Queue

> 예제 : [RabbitMQ - Priority-Queue Handbook](https://github.com/bak-libra26/rabbitmq-handbook/tree/main/src/main/java/kr/co/baklibra26/rabbitmq/handbook/queue/priority_queue)
> RabbitMQ 3.5.0 이상 버전에서 기본적으로 제공한다.


우선순위 큐는 메시지에 우선순위 속성(priority)을 설정하여 높은 우선순위 메시지를 먼저 처리하는 큐이다. 예를 들어, 우선순위 큐는 VIP 고객 주문 우선 처리, 시스템 장애 알림 우선 전송, 긴급 배치 작업 우선 실행 등 일반 메시지보다 먼저 처리되어야 하는 경우에 사용할 수 있다.

우선순위 큐를 사용하지 않고 메세지를 우선순위에 따라 처리하고자 하는 경우에는 아래와 같은 방법이 사용될 수 있다.

1. 일반 큐만으로 우선순위를 구현하는 방법.
	우선순위별로 일반큐를 분리하여 생성하여 사용한다. ex) \`high.message\`, \`mid.message\`, \`low,message\`

2. 프로세스 내부에서 메세지를 정렬하여 처리하는 방법.
	일반 큐의 메세지를 프로세스 내부에서 우선순위에 따라 정렬하여 처리한다. ex) \`SortedSet\`, \`sorted(Comparater::comparing)\`

위와 같은 방법을 사용하면 메시지를 우선순위로 정렬하기 위한 별도의 비즈니스 로직이 필요하기 때문에 신경쓸 부분이 많아져 복잡성이 증가한다. 또한 큐 관리, 메시지 분배, 정렬 성능 등 추가적인 고려사항이 발생한다.


- 우선순위 큐 사용의 장점
	- 자동 정렬: RabbitMQ가 우선순위에 따라 자동으로 메시지 정렬
	- 성능 최적화: 효율적인 정렬 알고리즘 사용
	- 구현 단순: 복잡한 분배 로직이나 정렬 로직 불필요


`,lb=Object.freeze(Object.defineProperty({__proto__:null,default:ab},Symbol.toStringTag,{value:"Module"})),ib=`---
tags:
  - RabbitMQ
references: null
created_date: 2025-08-19T12:52:27.000Z
last_modified_date: 2025-08-19T12:52:53.000Z
id: 7a119f12-b9e9-4da5-abca-deaa35f3a0a6
---

# ACK(Acknowledgement)와 NACK(Negative Acknowledgement)란 무엇인가?

  

ACK와 NACK는 메시지 처리 상태를 확인하고, 그 결과를 브로커에 알리는 프로토콜로 RabbitMQ 같은 메시지 브로커에서 메시지의 신뢰성 있는 처리를 하기 위해서 중요한 역할을 한다.

  

## ACK(Acknowledgement) 란?

ACK(Acknowledgement)는 컨슈머가 메시지를 정상적으로 처리했음을 메시지 브로커(RabbitMQ)에 알릴 때 사용하는 신호이다. 예를 들어, 컨슈머가 메시지를 받아 비즈니스 로직을 성공적으로 수행했다면, ACK를 전송하여 해당 메시지가 안전하게 처리되었음을 알린다.

## NACK(Negative Acknowledgement) 란?

NACK(Negative Acknowledgement)는 메시지 처리에 실패하거나, 메시지를 거부하고 싶을 때 사용하는 신호이다. 컨슈머가 메시지를 처리하지 못했거나 오류가 발생한 경우, NACK를 전송하면 브로커가 해당 메시지를 재전송하거나 다른 처리를 할 수 있다.

---

  

## Acknowledgment Mode

RabbitMQ 에서는 컨슈머가 메시지를 받은 후, 그 처리 결과를 브로커에게 어떻게 알릴지 두 가지 방식(Auto-ack, Manual-ack)으로 정할 수 있다.

### Auto-ack

- 메시지를 수신하는 즉시 자동으로 ACK를 브로커에 전송한다.
- 별도의 확인 작업 없이 메시지가 바로 처리된 것으로 간주하기 때문에 만약 처리 중 오류가 발생해도 메시지가 손실될 수 있다.
- *예시: 로그 메시지 처리와 같이 재처리가 필요하지 않은 중요하지 않은 데이터 처리에 적합합니다.*

### Manual-ack

- 컨슈머가 비즈니스 로직을 성공적으로 처리한 후 명시적으로 ACK를 브로커에 전송한다.
- 메시지 처리가 확실히 끝난 뒤에만 삭제하여 신뢰성이 높고, 장애 발생 시 메시지 재처리하여 데이터 손실을 방지할 수 있다.
- *예시: 결제, 주문 등 꼭 재처리되어야 하는 데이터에 적합하다.*
  

---

## 코드를 통한 Ack, Nack 처리 예시


\`\`\`java
import com.rabbitmq.client.*;

public class AckNackLambdaExample {
  public static void main(String[] args) throws Exception {
	ConnectionFactory factory = new ConnectionFactory();
	  factory.setHost("localhost");
	  try (Connection connection = factory.newConnection();
	  Channel channel = connection.createChannel()) {
		// Manual-ack 모드 설정: autoAck = false
		channel.basicConsume("queueName", false, (consumerTag, delivery) -> {
		String message = new String(delivery.getBody(), "UTF-8");
		long deliveryTag = delivery.getEnvelope().getDeliveryTag();
				
		boolean isProcessed = doSomething(message);
		if (isProcessed) {
		  channel.basicAck(deliveryTag, false);
		} else {
		  channel.basicNack(deliveryTag, false, true);
		}
	  }, consumerTag -> {});
	}
  }
}
\`\`\`

  

위 코드는 RabbitMQ에서 Manual-ack 모드로 메시지를 처리할 때, 메시지 처리 결과에 따라 ACK 또는 NACK를 전송하는 예시다. 직접 컨슈머를 람다식으로 생성하여 메시지를 간단하게 처리하는 구조로 작성했다.

비즈니스 로직 처리는 doSomething 메서드에서 수행하며, 처리 성공 여부를 isProcessed 변수에 저장한다. 만약 isProcessed가 true이면 channel.basicAck(deliveryTag, false)를 호출하여 해당 메시지에 대해 정상 처리를 브로커에 알리고, false이면 channel.basicNack(deliveryTag, false, true)를 호출해 처리 실패를 알리면서 requeue 옵션을 true로 설정해 메시지를 다시 큐에 넣는다.

  

### basicAck 와 basicNack 메서드의 파라미터

\`\`\`java
channel.basicAck(long deliveryTag, boolean multiple);
channel.basicNack(long deliveryTag, boolean multiple, boolean requeue);
\`\`\`

  

1. deliveryTag: 메시지의 고유 식별자로 브로커가 어떤 메시지에 대해 ACK 또는 NACK를 처리할지 지정하는 데 사용된다.
2. multiple: 파라미터를 활용하면 여러 메시지를 한 번에 처리할 수 있다.
3. requeue: NACK 전송 시, requeue 옵션을 통해 큐에 메세지를 재적재할지 여부를 결정할 수 있다.

  

이 코드는 Manual-ack 모드에서 메시지의 신뢰성 있는 처리를 위해 메시지 처리 결과에 따라 ACK 또는 NACK를 명시적으로 전송하는 기본적인 패턴을 보여준다. 코드를 작성할 때, deliveryTag, multiple, requeue 옵션을 잘 설정하여 어떻게 메세지를 처리할 것인지 세부적으로 제어하여 안정적인 코드를 작성할 수 있도록 해야한다.`,rb=Object.freeze(Object.defineProperty({__proto__:null,default:ib},Symbol.toStringTag,{value:"Module"})),sb=`---
summary: 레빗엠큐, 메세지 지속성과 생명주기 관리 방법
tags:
  - RabbitMQ
  - TTL
  - AutoDelete
  - Durable
  - Persistent
references: 
created_date: 2025-08-21T10:14:27.000Z
last_modified_date: 2025-08-21T10:15:22.000Z
id: dd2a0cfb-14b0-4b1a-807d-81ead937256f
---
# 메시지 지속성


> 메세지 지속성이란 RabbitMQ 에서 메세지가 브로커 재시작이나 장애 상황에서도 손실되지 않고 보존되는 것을 의미함.

## 메시지 지속성의 중요성


메세지 큐 시스템에서 메세지의 지속성이 중요한 이유는 무엇일까. 결제, 예약과 같이 신뢰성이 중요한 비즈니스에서 하드웨어 또는 네트워크 장애, 혹은 브로커 재시작 등의 이슈로 인한 메세지 손실은 비즈니스에 치명적으로 작용한다.

그렇기 때문에 결제, 예약과 같이 신뢰성이 중요한 메세지는 하드웨어 또는 네트워크 장애, 혹은 브로커 재시작 등의 작업을 수행하더라도 메세지가 손실되지 않도록 보장되어야 한다.

메세지 지속성을 보장하면 장애 발생 시에도 메세지가 디스크에 안전하게 저장되어 복구가 가능하며, 서비스 중단이나 데이터 손실로 인한 피해를 최소화할 수 있다.

또한, 메세지의 중요도에 따라 적절한 지속성 정책을 적용함으로써 시스템 자원을 효율적으로 사용할 수 있고, 불필요한 데이터 저장을 방지할 수 있다.

## Durable 과 Persistent

### Durable (큐/익스체인지 지속성)

Durable 속성은 큐/익스체인지 지속성을 의미한다. Durable 속성이 참인 큐/익스체인지는 브로커 재시작이나 장애 상황에서도 사라지지 않는다. 기본적으로 큐/익스체인지의 Durable 속성은 거짓(false)로 설정되어 있는데

이러한 큐/익스체인지는 메세지 브로커를 재시작하는 경우에는 큐/익스체인지의 메세지가 사라진다. 따라서 큐/익스체인지의 메세지가 손실되지 않도록 하기 위해서는 Durable 속성을 참(true)으로 설정해야 한다.

- 익스체인지 생성 메서드
	\`\`\`java
	/**
	* 익스체인지를 선언합니다.
	*
	* @param exchange 익스체인지 이름
	* @param type 익스체인지 타입 (예: "direct", "fanout", "topic", "headers")
	* @param durable true로 설정하면 브로커 재시작 시에도 익스체인지가 유지됩니다.
	*/
	exchangeDeclare(String exchange, String type, boolean durable)
	\`\`\`

  

- 큐 생성 메서드
	\`\`\`java
	/**
	* 큐를 선언합니다.
	*
	* @param queue 큐 이름
	* @param durable true로 설정하면 브로커 재시작 시에도 큐가 유지됩니다.
	* @param exclusive true로 설정하면 해당 커넥션에서만 큐를 사용할 수 있습니다.
	* @param autoDelete true로 설정하면 사용이 끝난 큐가 자동으로 삭제됩니다.
	* @param arguments 기타 큐 옵션(예: TTL 등)
	*/
	queueDeclare(String queue, boolean durable, boolean exclusive, boolean autoDelete, Map<String, Object> arguments)
	\`\`\`

큐와 익스체인지 생성 시 durable 속성을 참으로 설정한 경우 브로커 재시작이나 장애 상황에서도 큐/익스체인지의 메세지가 사라지지 않는다.
  

### Persistent (메시지 지속성)

Persistent 속성은 메시지 지속성을 의미한다. Persistent 속성이 참인 메시지는 브로커 재시작이나 장애 상황에서도 사라지지 않는다.

기본적으로 메시지의 Persistent 속성은 거짓(false)로 설정되어 있기 때문에 메세지는 메모리 내에만 저장되고 브로커 재시작이나 장애 상황에서 사라진다. 따라서 메세지가 손실되지 않도록 하기 위해서는 Persistent 속성을 참(true)으로 설정해야 한다.

- 메시지 전송 메서드
	\`\`\`java
		/**
		* 메시지를 전송합니다.
		*
		* @param exchange 메시지를 보낼 익스체인지 이름
		* @param routingKey 라우팅 키
		* @param props 메시지 속성 (예: Persistent 여부 등)
		* @param body 전송할 메시지 본문 (byte 배열)
		*/
		basicPublish(String exchange, String routingKey, BasicProperties props, byte[] body)
	\`\`\`

  

- 메시지 발행 시 Persistent 속성 추가
	\`\`\`java
	import com.rabbitmq.client.AMQP;
	
	// 방법 1
	AMQP.BasicProperties props = new AMQP.BasicProperties.Builder()
	.deliveryMode(MessageProperties.PERSISTENT_TEXT_PLAIN.getDeliveryMode())
	.build();
	
	channel.basicPublish("my_exchange", "my_routing_key", props, "Hello, RabbitMQ!".getBytes("UTF-8"));
	
	// 방법 2
	channel.basicPublish(
		"", // 익스체인지 이름 (기본 익스체인지)
		"task_queue", // 큐 이름
		MessageProperties.PERSISTENT_TEXT_PLAIN, // Persistent 속성 적용
		message.getBytes("UTF-8") // 메시지 본문
	);
	\`\`\`


위의 예시처럼 메시지 발행 시 Persistent 속성을 적용하려면 AMQP.BasicProperties 인자에 메시지 속성을 명시적으로 추가해야 한다. 만약 AMQP.BasicProperties에 null을 전달하면 메시지는 기본적으로 비지속성(persistent=false)으로 처리되어 메모리에만 저장되고, 브로커 재시작이나 장애 발생 시 사라진다. 반면, deliveryMode를 MessageProperties.PERSISTENT_TEXT_PLAIN(2)로 설정하면 메시지가 디스크에 저장되어 장애 상황에서도 안전하게 보존된다.

### Durable과 Persistent의 관계 및 설정 가이드

Durable(내구성)과 Persistent(지속성)는 메시지의 신뢰성과 보존에 중요한 역할을 합니다. 각각의 조합에 따라 메시지의 보존 방식이 달라지므로, 아래 표를 참고하여 상황에 맞게 설정해야 합니다.

| Durable | Persistent | 동작 및 설명                                                   |
| ------- | ---------- | --------------------------------------------------------- |
| true    | true       | 큐와 메시지 모두 디스크에 저장됨. 브로커 재시작/장애 시에도 메시지가 안전하게 보존됨. (가장 안전) |
| true    | false      | 큐는 디스크에 저장되나, 메시지는 메모리에만 존재. 장애 시 메시지는 유실될 수 있음.          |
| false   | true       | 메시지는 디스크에 저장되나, 큐가 비내구성이므로 브로커 재시작 시 큐와 메시지 모두 사라짐.       |
| false   | false      | 큐와 메시지 모두 메모리에만 존재. 장애나 재시작 시 모두 유실됨.                     |

  

> **정리:**
> 메시지의 신뢰성을 보장하려면 큐와 메시지 모두 Durable과 Persistent를 true로 설정해야 합니다. 한쪽만 true여도 장애 상황에서 메시지 유실이 발생할 수 있으니, 서비스의 중요도에 따라 적절히 선택하세요.

  
  
  

## TTL (Time To Live)

RabbitMQ에서 TTL(Time To Live)은 메시지 또는 큐에 저장된 데이터의 유효 기간을 제한하는 기능이다. TTL은 크게 두 가지 방식으로 설정할 수 있다.

---
  

### 큐 TTL (Queue TTL)

큐에 TTL을 설정하면, 해당 큐에 들어오는 **모든 메시지**가 지정한 시간(밀리초) 동안만 큐에 머물 수 있습니다. TTL이 지난 메시지는 자동으로 삭제된다.


- 큐 자체 TTL 설정
	\`\`\`java
	import java.util.HashMap;
	import java.util.Map;
	
	// 큐에 TTL 30초(30000ms) 설정
	Map<String, Object> args = new HashMap<>();
	args.put("x-message-ttl", 30000); // 30초
	
	channel.queueDeclare(
		"my_queue", // 큐 이름
		true, // durable
		false, // exclusive
		false, // autoDelete
		args // arguments (TTL 포함)
	);
	\`\`\`


위와 같이 \`x-message-ttl\` 파라미터를 큐 선언 시 arguments에 추가하면, 해당 큐에 들어오는 모든 메시지는 30초가 지나면 자동으로 삭제된다. 만약 개별 메세지의 TTL 을 설정하고 싶은 경우에는 메시지 발행 시 \`expiration\` 속성에 값을 지정하면 된다.

  

---

  

### 메시지 TTL (Message TTL)

메시지 단위로 TTL을 설정하면, 각 메시지마다 개별적으로 유효 기간을 지정할 수 있다. 메시지 TTL은 메시지 발행 시 \`expiration\` 속성에 값을 지정하여 설정할 수 있다.


- 메시지 발행 시 TTL 설정
	\`\`\`java
	import com.rabbitmq.client.AMQP;
	import com.rabbitmq.client.MessageProperties;
	
	
	AMQP.BasicProperties props = new AMQP.BasicProperties.Builder()
	.deliveryMode(MessageProperties.PERSISTENT_TEXT_PLAIN.getDeliveryMode())
	.expiration("10000") // 10초 후 자동 삭제
	.build();
	
	channel.basicPublish("", "task_queue", props, "Hello, RabbitMQ!".getBytes("UTF-8"));
	\`\`\`

  

위와 같이 메시지 발행 시 \`expiration\` 속성을 지정하면, 해당 메시지는 10초가 지나면 자동으로 삭제된다.
만약 AMQP.BasicProperties에 null을 전달하면 메시지의 expiration 속성 값은 0으로 설정되어 메시지는 자동으로 삭제되지 않는다.

  

---

  

### TTL(Time To Live) 요약

- **큐 TTL**: 큐에 들어오는 모든 메시지에 동일한 TTL이 적용된다.
- **메시지 TTL**: 각 메시지마다 개별적으로 TTL을 지정할 수 있다.

#### 큐 TTL과 메시지 TTL을 모두 설정한 경우

두 TTL 중 **더 짧은 값**이 우선 적용되어, 해당 시간이 지나면 메시지가 삭제된다.

- 큐 TTL이 더 짧으면: 큐 TTL이 만료되어 메시지가 삭제되고, 메시지 TTL은 무시된다.
- 메시지 TTL이 더 짧으면: 메시지 TTL이 만료되어 메시지가 삭제되고, 큐 TTL은 무시된다.


따라서, 메시지 TTL을 활용하려면 큐 TTL을 메시지 TTL보다 길게 설정하는 것이 좋다.

  

---

  
  
  

## Auto-delete(자동 삭제)

Auto-delete(자동 삭제)는 큐(queue)나 익스체인지(exchange)가 더 이상 사용되지 않을 때 자동으로 삭제되는 기능으로 Auto-Delete 속성을 설정하면 마지막으로 연결된 소비자(consumer) 또는 프로듀서(producer)가 연결을 끊으면 해당 큐나 익스체인지가 삭제도록 설정할 수 있다.

  
- 큐 자체에 \`autoDelete=true\`로 설정하면, 큐에 연결된 모든 소비자가 연결을 해제했을 때 큐가 자동으로 삭제된다.
- 익스체인지 자체에 \`autoDelete=true\`로 설정하면, 바인딩된 모든 큐가 해제되었을 때 익스체인지가 자동으로 삭제된다.

이 기능은 임시로 사용하는 큐나 익스체인지에 적합하며, 불필요한 리소스 점유를 방지할 수 있으나 서비스 중에 큐가 예기치 않게 삭제될 수 있으므로, 중요한 데이터 처리가 필요한 경우에는 \`autoDelete=false\`로 설정하는 것이 안전하다.

  

---

`,ob=Object.freeze(Object.defineProperty({__proto__:null,default:sb},Symbol.toStringTag,{value:"Module"})),ub=`---
summary: 레빗엠큐, 메세징 큐의 개념과 기본 구조 알아보기
tags:
  - RabbitMQ
  - message-queue
references: 
created_date: 2025-08-18T20:27:42.000Z
last_modified_date: 2025-08-18T20:27:42.000Z
id: 2f63967a-40ff-4b30-80d8-b964bd4f3f59
---

# 메세징 큐란 ?

메세징 큐(Messaging Queue)란 ‘메세지’와 ‘큐’가 결합된 용어이다. 메세지는 서로 다른 시스템이나 서비스가 주고받는 데이터 조각을 의미하며, 메세징 큐는 이러한 메세지를 임시로 저장하고, 순차적으로 전달하는 역할을 한다. 즉, 메세징 큐는 시스템 또는 서비스 간에 주고받는 데이터 조각인 메세지를 담아두는 큐로서, 비동기적으로 데이터를 처리할 수 있도록 도와준다.

## 메세징 큐의 비동기 처리

여기서 갑자기 비동기적으로 데이터를 처리할 수 있도록 도와준다 라는 내용이 나와서 당활할 수 있다. 다만 RabbitMQ 는 메세지를 비동기적으로 처리한다. 그렇다면 RabbitMQ 는 큐에 적재된 메세지를 어떻게 비동기적으로 처리하는 것일까. 우선 메세지가 생산(Publish)되고 소비(Consume)되는 방식에 대해 알아보자.

RabbitMQ에서는 메세지를 생산하는 주체를 ‘생산자(Producer)’, 메세지를 소비하는 주체를 ’소비자(Consumer)’라고 한다. 생산자는 메세지를 큐에 전달하고, 소비자는 큐에 적재된 메세지를 가져와 처리한다. 생산자와 소비자 사이에 큐 자료구조가 매개체로 동작하기 때문에, 생산자가 메세지를 생성하자마자 소비자가 즉시 처리할 필요는 없다. 소비자는 큐에 가장 먼저 적재된 메세지부터 순서대로 처리하면 된다. 이러한 구조로 인해 시스템 간 처리 속도 차이에 유연하게 대응할 수 있으며, 메세지 전달의 안정성과 효율성이 높아진다.


### 만약 메세지가 동기 방식으로 처리된다면 ?

만약 RabbitMQ를 사용할 때 메시지가 동기 방식으로 처리된다면, 생산자와 소비자가 동시에 동작해야 한다. 예를 들어, A 서비스가 생산자, B 서비스가 소비자라고 할 때, A 서비스가 메시지를 생산하는 순간 B 서비스가 즉시 해당 메시지를 처리해야 한다. B 서비스의 메시지 처리 속도가 A 서비스의 메시지 생산 속도와 같거나 더 빠르면 문제없이 처리할 수 있다. 하지만 A 서비스가 더 빠르게 메시지를 생산하면, B 서비스가 처리하지 못한 메시지는 대기 상태로 쌓이게 된다.

만약 특정 시간대에 많은 트래픽이 몰린다면 이 때 문제가 발생하며 소비자 서비스는 단위 시간 동안 처리할 수 있는 메시지만 처리하고, 나머지 메시지는 큐에 쌓여 대기하게 된다. 이로 인해 시스템 전체에 처리 지연이 발생하고, 일정량 이상의 메시지가 누적되면 서비스 장애로 이어질 수 있다. 특히 소비자 서비스의 처리 능력이 일시적으로 떨어지거나 장애가 발생하면, 생산자가 계속 메시지를 보내더라도 큐에 메시지가 계속 쌓여 시스템 안정성에 문제가 생기게된다.

이러한 동기 방식의 구조는 확장성과 유연성이 떨어지며, 트래픽이 급증하는 상황에서 병목 현상이 쉽게 발생할 수 있다. 결과적으로 동기 방식은 실시간 처리에는 적합할 수 있으나, 대량 트래픽이나 비정기적 폭증 상황에서는 한계가 명확하다.


# RabbitMQ 기본 구조와 동작 원리

## RabbitMQ 의 기본 구조

RabbitMQ의 기본 구조는 Producer(생산자), Exchange(교환기), Queue(큐), Consumer(소비자) 네 가지 요소로 이루어진다. 각 요소의 역할은 다음과 같다.

1. Producer(생산자) : 메세지를 생성하여 RabbitMQ로 전송하는 주체이다.
2. Exchange(교환기) : 생산자로부터 받은 메세지를 규칙에 따라 적절한 큐로 전달하는 역할을 한다.
3. Queue(큐) : 전달받은 메세지를 임시로 저장하는 공간이다.
4. Consumer(소비자) : 큐에 저장된 메세지를 꺼내서 처리하는 주체이다.

### Exchange 란 ?

익스체인지(Exchange)는 생산자와 큐 사이에서 동작하며, 생산자가 메세지를 큐에 직접 발행하는 대신 교환기를 통해 메세지를 전달하도록 설계되어 있다. 이 구조는 생산자와 큐 간의 결합도를 낮추고 보다 유연한 메시지 라우팅을 가능하게 한다. 

만약 생산자가 큐로 직접 메세지를 발행한다면, 생산자는 발행할 큐의 정보를 반드시 알아야 하며, 이 정보는 소스코드에 하드코딩되거나 별도의 설정 파일로 관리되어야 한다. 이러한 방식은 시스템 확장성이나 유지보수 측면에서 한계가 있다. 또한 큐의 개수가 변경되거나 라우팅 규칙이 바뀔 때마다 생산자 코드를 수정해야 하므로 운영의 복잡성이 증가할 수 있다. 

RabbitMQ는 생산자와 큐 사이에 익스체인지(Exchange)를 두어, 생산자가 발행한 메세지를 어느 큐로 전달할지 교환기에서 결정하도록 설계하였다. 이를 통해 생산자는 큐의 구조나 라우팅 규칙에 대해 알 필요가 없으며, 시스템의 유연성과 확장성이 크게 향상된다.

> “In RabbitMQ, producers publish messages to exchanges, not directly to queues. The exchange routes the messages into zero or more queues based on rules called bindings. This decouples producers from queues and allows for flexible routing logic.”  

생산자가 발행한 메세지를 큐에 어떻게 전달할지 결정하는 방식에 따라 여러 종류의 익스체인지를 사용할 수 있다. RabbitMQ는 기본적으로 다음 네 가지 타입의 익스체인지를 제공한다.

1. **Direct Exchange**
	- 특정 Routing Key와 정확히 일치하는 큐로 메세지를 전달한다.

2. **Fanout Exchange**
	- Routing Key와 상관없이 연결된 모든 큐에 메세지를 브로드캐스트한다.

3. **Topic Exchange**
	- Routing Key의 패턴(와일드카드)을 이용해 여러 큐에 메세지를 분배한다.

4. **Headers Exchange**
	- 메세지의 헤더 값을 기준으로 큐에 메세지를 전달한다.

각 익스체인지 타입은 메세지 라우팅에 유연성을 제공하며, 서비스의 요구사항에 따라 적합한 타입을 선택하여 사용할 수 있다.


## 요약

\`Producer\` → \`Exchange\` → \`Queue\` → \`Consumer\` 는 RabbitMQ가 메시지를 **생산**·**라우팅**·**저장**·**소비**하는 전반적인 흐름을 보여 준다. 이처럼 RabbitMQ 의 **기본 구조**만 이해해도 RabbitMQ의 큰 흐름은 파악할 수 있지만, 실제 서비스에서는 위와 같은 세부 메커니즘을 적절히 조합해 **신뢰성**·**확장성**·**성능**을 동시에 확보해야 한다.
`,cb=Object.freeze(Object.defineProperty({__proto__:null,default:ub},Symbol.toStringTag,{value:"Module"})),db=`---
summary: 레빗엠큐, 발행 확인 메커니즘 / 트랜잭션과 게시자 확인
tags:
  - RabbitMQ
  - Transaction
  - Publisher_Confirms
references: 
created_date: 2025-08-23T14:15:48.000Z
last_modified_date: 2025-08-23T14:15:48.000Z
---

# RabbitMQ - 발행 확인 메커니즘: 트랜잭션과 게시자 확인

  

## 발행 확인 메커니즘이란?

> 메시지를 브로커에 발행할 때, 브로커가 해당 메시지를 정상적으로 수신 및 저장했는지 발행자(Producer)가 확인하는 절차

소비자는 큐에 적재되어 있는 메시지를 가져와 소비하고, ACK 또는 NACK 신호를 전달하여 정상 처리 여부를 메시지 브로커에 알려준다. 그렇다면 메시지를 발행하는 경우에 메시지가 제대로 발행되었는지를 확인하려면 어떻게 해야 할까?

정상적으로 메시지 발행이 이루어졌는지 확인하기 위해 사용할 수 있는 메커니즘으로 \`트랜잭션(Transaction)\`과 \`게시자 확인(Publish Confirm)\`이 존재하며, 이러한 메시지 발행 상태를 확인할 수 있는 메커니즘을 발행 확인 메커니즘이라고 한다.

### 발행 확인이 필요한 이유

Spring AMQP를 사용하여 메시지를 발행해본 적이 있는 사람이라면 Channel 또는 RabbitTemplate을 사용했을 것이다.

메시지를 발행할 때 RabbitMQ가 종료되어 있거나 연결할 수 없는 경우 ConnectionException과 같은 예외가 발생한다. 이를 통해 메시지 발행에 실패했는지를 알 수 있다. 그렇다면 예외 처리를 통해 메시지 발행에 실패한 것을 알 수 있지 않나?라고 생각할 수 있다.

하지만 실제로는 예외가 발생하지 않는 상황이 존재한다. 예를 들어:

1. 네트워크 지연: 연결은 유지되지만 메시지가 브로커에 도달하지 않는 경우

2. 브로커 내부 오류: 메시지를 받았지만 저장 과정에서 실패하는 경우

3. 브로커 재시작: 메시지 발행 후 브로커가 재시작되는 경우

이러한 상황에서는 basicPublish() 메서드가 정상적으로 반환되어도 메시지가 실제로 브로커에 저장되지 않을 수 있다.

따라서 예외 처리만으로는 메시지 발행의 성공 여부를 정확히 판단할 수 없으며, 이를 해결하기 위해 발행 확인 메커니즘이 필요하다.



> 예외 처리와 발행 확인은 서로 다른 레벨에서 동작하는 메커니즘이다.
> 
> 예외 처리는 네트워크/연결 레벨에서 발생하는 문제를 감지한다. 예를 들어, RabbitMQ 서버가 종료되어 연결할 수 없는 경우 ConnectionException이 발생하고, 잘못된 인증 정보로 인해 AuthenticationException이 발생하는 등의 명확한 오류 상황을 처리한다.
> 
> 발행 확인은 메시지 저장 레벨에서 메시지가 실제로 브로커에 정상적으로 저장되었는지를 확인한다. 예외가 발생하지 않았더라도 메시지가 브로커의 큐에 제대로 저장되지 않았을 수 있기 때문에, 이러한 상황을 감지하고 적절한 처리를 할 수 있도록 도와준다.
> 
> 따라서 두 메커니즘은 상호 보완적인 관계이며, 안정적인 메시지 발행을 위해서는 둘 다 적절히 활용해야한다.


---

  

## 트랜잭션 (Transaction)

  
### 트랜잭션이란?

트랜잭션은 여러 메시지 발행 작업을 하나의 트랜잭션으로 묶어, 모두 성공하거나 모두 실패하도록 보장하는 원자적 처리 방식으로 ACID 속성을 보장한다.

- 원자성 (Atomicity): 모든 작업이 성공하거나 모두 실패
- 일관성 (Consistency): 시스템의 상태가 일관되게 유지
- 격리성 (Isolation): 동시 실행되는 트랜잭션들이 서로 영향을 주지 않음
- 지속성 (Durability): 커밋된 트랜잭션은 영구적으로 저장
  

### 트랜잭션 처리

트랜잭션은 다음과 같은 단계로 동작합니다:

1. 트랜잭션 시작: \`tx.select()\` 호출
2. 메시지 발행: \`basicPublish()\` 호출 (여러 메시지 가능)
3. 트랜잭션 커밋: \`tx.commit()\` 호출 (성공 시)
4. 트랜잭션 롤백: \`tx.rollback()\` 호출 (실패 시)
  

### 트랜잭션 사용 방법과 코드 예시

\`\`\`java
try {
	ConnectionFactory factory = new ConnectionFactory();
	factory.setHost("localhost");
	
	try (Connection connection = factory.newConnection();
		Channel channel = connection.createChannel()) {
			channel.txSelect(); // 트랜잭션 시작
			
			try {
				// 메세지 발행
				channel.basicPublish("ex", "rk", null, "msg".getBytes("UTF-8")); 
				// 커밋
				channel.txCommit();
			} catch (Exception e) {
				// 예외 발생 시 롤백 처리
				channel.txRollback();
			}
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
}
\`\`\`

  

### 트랜잭션의 장단점

- 장점: 메시지 손실 방지, 원자성 보장
- 단점: 동기적 처리로 인한 성능 저하, 처리량 감소, 실무에서는 거의 사용하지 않음

  

---

  

## 게시자 확인(Publisher Confirms)


게시자 확인은 RabbitMQ에서 **메시지를 게시한 후 브로커가 해당 메시지를 정상적으로 처리했는지 게시자에게 알려주는 기능** 으로 RabbitMQ 에서 메시지의 신뢰성 있는 전달을 위해 사용하는 기능이다. 

네트워크 장애, 브로커 장애 등으로 메시지가 유실될 수 있기 때문에, 게시자는 브로커의 확인 응답을 받아야만 메시지가 안전하게 전달되었음을 보장할 수 있다.

- **트랜잭션 기능보다 가볍고 빠른 메시지 신뢰성 확보 방법**
- 게시자가 메시지를 전송한 뒤, 브로커가 처리 완료 시점에 \`ack\`(성공) 또는 \`nack\`(실패)을 비동기로 응답


### 게시자 확인 사용 예시 

#### 확인 모드 활성화

\`\`\`java
channel.confirmSelect();
\`\`\`

게시자는 채널에 \`confirm.select\` 명령을 보내 확인 모드를 활성화한다. 한 번 confirm 모드가 되면 트랜잭션 모드로 전환 불가하며, 그 반대도 마찬가지이다.

#### 메시지 발행 및 시퀀스 부여

\`\`\`java
channel.basicPublish(exchange, routingKey, props, body);
\`\`\`

채널이 confirm 모드가 되면, 이후 발행되는 모든 메시지에 시퀀스 번호가 부여됩니다.

#### 확인 응답 처리 (비동기)

\`\`\`java
channel.addConfirmListener(new ConfirmListener() {
    @Override
    public void handleAck(long deliveryTag, boolean multiple) throws IOException {
        // deliveryTag까지의 메시지 발행 성공 처리
    }

    @Override
    public void handleNack(long deliveryTag, boolean multiple) throws IOException {
        // deliveryTag까지의 메시지 발행 실패 처리 (재발행 등)
    }
});
\`\`\`

메시지가 정상적으로 큐에 저장(내구성 메시지라면 디스크에 기록)되면 브로커가 \`basic.ack\`를 발행자에게 전송한다. 만약 내부 오류 등으로 인해 처리에 실패한 경우에는 \`basic.nack\`를 발송하며, \`boolean multiple\` 플래그를 통해 여러 메시지에 대한 일괄 확인할 수 있다.

#### 확인 응답 처리 (동기)

\`\`\`java
try {
    channel.waitForConfirmsOrDie(); // 모든 메시지에 대한 ack/nack 대기, 실패 시 예외 발생
} catch (IOException e) {
    // 메시지 발행 실패 처리 (예: 재발행, 로깅 등)
}
\`\`\`

‎\`channel.waitForConfirmsOrDie()\`는 발행한 모든 메시지에 대해 브로커의 ‎\`ack\` 또는 ‎\`nack\` 응답을 **동기적으로** **기다리는** 메서드이다.

- 모든 메시지가 정상적으로 ack되면, 메서드는 문제 없이 종료된다.
- 만약 하나라도 nack(실패)이 발생하거나, 응답이 일정 시간 내에 오지 않으면 **IOException** 예외가 발생한다.
- 예외가 발생했다면, 메시지가 유실되었거나 브로커 오류, 네트워크 장애 등으로 인해 안전하게 처리되지 않았다는 것을 의미한다. 따라서 반드시 예외 처리를 통해 재시도, 로깅 등 적절한 대응이 필요하다.

이 방식은 구현이 간단하다는 장점이 있지만, 대량의 메시지를 처리할 때는 비동기 방식이 더 효율적이다.

---


## 트랜잭션 vs 게시자 확인(Publisher Confirms) 비교

RabbitMQ에서 메시지의 신뢰성과 성능을 확보하는 대표적인 방법 두 가지는 **트랜잭션(Transaction)**과 **게시자 확인(Publisher Confirms)** 이다. 성능, 신뢰성, 사용 시기, 선택 기준 을 보고 상황에 맞게 트랜잭션과 게시자 확인 중 하나를 선택하여 사용하도록 하자.

| 비교 항목        | 트랜잭션(Transaction)                        | 게시자 확인(Publisher Confirms)      |
| ------------ | ---------------------------------------- | ------------------------------- |
| **성능**       | 동기적 commit/rollback, 처리 속도 느림, 대량 처리 부적합 | 비동기적 확인 응답, 성능 저하 적음, 대량 처리 적합  |
| **신뢰성**      | 메시지 발행의 원자성 보장, 여러 메시지 일괄 성공/실패          | 개별 메시지 단위 확인, 메시지 손실 방지, 원자성 불가 |
| **사용 권장 시기** | 원자적 처리가 필요한 특수 상황 (금융, 결제 등)             | 대부분의 실무 환경, 일반적인 메시지 처리에 적합     |
| **선택 기준**    | 메시지의 원자적 처리 필요 시 선택                      | 대량 메시지 처리, 높은 성능 요구 시 선택        |

---

## 정리

> 대부분의 경우, 게시자 확인(Publisher Confirms) 사용을 고려하고, 트랜잭션은 정말 원자성이 필요한 특수한 상황에만 선택하는 것이 좋다.
  


`,fb=Object.freeze(Object.defineProperty({__proto__:null,default:db},Symbol.toStringTag,{value:"Module"})),pb=`---
tags:
  - RabbitMQ
  - exchange
references: 
created_date: 2025-08-18T21:30:40.000Z
last_modified_date: 2025-08-18T21:30:40.000Z
---

# Exchange

\`Exchange\` 는 \`RabbitMQ\` 의 생산자와 큐 사이에서 생산자가 발행한 메세지를 어떤 큐에 적재할지 라우팅해주는 요소로 \`RabbitMQ\` 를 구성하는 기본 요소 4가지 중 하나이다. 기본적으로 \`RabbitMQ\` 는 아래의 4가지 \`exchange\` 타입을 제공한다.

1. **Direct Exchange**
	- 특정 Routing Key와 정확히 일치하는 큐로 메세지를 전달한다.

2. **Fanout Exchange**
	- Routing Key와 상관없이 연결된 모든 큐에 메세지를 브로드캐스트한다.

3. **Topic Exchange**
	- Routing Key의 패턴(와일드카드)을 이용해 여러 큐에 메세지를 분배한다.

4. **Headers Exchange**
	- 메세지의 헤더 값을 기준으로 큐에 메세지를 전달한다.


## Queue Binding

RabbitMQ에서 생산자가 발행한 메세지는 바로 큐에 적재되지 않는다. 생산자는 먼저 익스체인지(Exchange)에 메세지를 발행하고, 익스체인지는 자신의 타입과 라우팅 규칙에 따라 메세지를 적절한 큐로 전달한다. 그렇다면 익스체인지는 어떻게 메세지를 어느 큐에 라우팅해야 하는지 알 수 있을까?

이때 필요한 작업이 바로 ’바인딩(Binding)’이다. 바인딩은 익스체인지와 큐를 연결해주는 작업으로, 익스체인지가 메세지를 라우팅할 큐에 대한 정보를 미리 설정해두는 과정이다. 바인딩을 통해 익스체인지로 들어온 메세지는 정해진 규칙에 따라 큐로 전달된다. 익스체인지와 큐를 연결하는 바인딩은 런타임에도 추가, 수정, 삭제가 가능하며, 이러한 유연성 덕분에 시스템 확장이나 라우팅 규칙 변경을 언제든지 쉽게 수행할 수 있다.

익스체인지 타입에 따라 메세지를 라우팅하는 방식이 다르기 때문에, 바인딩을 설정하기 전에 어떤 타입의 익스체인지를 사용할지, 그리고 어떤 방식으로 메세지를 라우팅할지 미리 결정해야 한다. 이 결정에 따라 익스체인지와 큐를 어떻게 연결할지, 라우팅 규칙을 어떻게 설정할지가 달라진다. 따라서 익스체인지 타입과 라우팅 방식을 명확히 정의한 후, 그에 맞는 바인딩 작업을 진행해야 한다.

바인딩이 어떤 작업인지 이해했다면, 이제 RabbitMQ가 기본적으로 제공하는 네 가지 익스체인지 타입에 대해 알아보자.

---

## Exchange 타입
### Direct Exchange

다이렉트 익스체인지(Direct Exchange)는 이름에서 알 수 있듯이, 라우팅할 큐에 대한 정보를 지정하고 해당 큐에 메세지를 전달하는 역할을 한다. 비유하자면, 택배 기사가 택배를 배송할 때 주소를 기준으로 집을 식별해 택배를 배송하는 것과 같다. 여기서 익스체인지(택배기사)는 택배(메세지)를 배송하기 위해 주소(라우팅 키)를 사용해 정확한 집(큐)으로 택배를 전달한다.

라우팅 키는 익스체인지와 큐를 바인딩할 때 지정할 수 있으며, 하나의 라우팅 키를 여러 큐에 적용하는 것도 가능하다. 만약 동일한 라우팅 키로 바인딩된 큐가 여러 개 존재한다면, 익스체인지는 해당 메세지를 라우팅 키를 가진 모든 큐에 복사하여 전달한다.

> **RabbitMQ 공식 문서(AMQP 0-9-1 Model Explained) 참고.**
> 
> If multiple queues are bound to a direct exchange with the same routing key K, the exchange will route the message to all queues for which K = R.  

생산자가 메세지를 발행할 때는 익스체인지와 라우팅 키 정보만을 지정하여 메세지를 전송한다. 생산자는 큐의 정보를 직접 알 필요 없이, 익스체인지와 라우팅 키를 통해 원하는 큐로 메세지를 전달할 수 있다.

- 메세지 발행 예시
	\`\`\`java
	/**
	 * 메시지를 Direct Exchange로 발행합니다.
	 * @param exchangeName 익스체인지 이름
	 * @param routingKey 라우팅 키
	 * @param message 발행할 메시지
	 */
	public void sendMessage(String exchangeName, String routingKey, String message) {
		rabbitTemplate.convertAndSend(exchangeName, routingKey, message);
	}
	\`\`\`

위의 자바 코드 예시에서도 알 수 있듯이, 생산자는 메세지를 발행할 때 큐 이름을 직접 명시하지 않는다. 대신 익스체인지 이름과 라우팅 키만 지정한다. 익스체인지는 자신과 바인딩된 큐들 중에서 라우팅 키가 일치하는 큐를 찾아 해당 큐에 메세지를 전달한다. 만약 같은 라우팅 키로 여러 큐가 바인딩되어 있다면, 익스체인지는 모든 해당 큐에 메세지를 복사해 전달한다. 이처럼 생산자는 큐의 정보를 몰라도 익스체인지와 라우팅 키만으로 원하는 큐에 메세지를 전달할 수 있다.

하지만 다이렉트 익스체인지는 라우팅 키가 정확히 일치하는 큐에만 메세지를 전달할 수 있다는 한계가 있다. 여러 큐에 동일한 라우팅 키를 바인딩하면 복사 전달이 가능하지만, 브로드캐스트 대상 큐를 미리 생성하고 바인딩해야 하며, 라우팅 키가 반드시 필요하다는 제약이 존재한다. 새로운 큐를 추가하거나 라우팅 규칙을 변경할 때마다 바인딩 설정을 수정해야 하는 번거로움도 있다.

만약 Direct Exchange에서도 동일한 라우팅 키로 여러 큐를 바인딩하면 “복사 전달” 효과를 얻을 수 있으나 이 방식에는 다음과 같은 한계가 존재한다.

1. **정적** **바인딩** **의존**  
    브로드캐스트 대상이 되는 큐를 미리 생성하고, 모두 동일한 라우팅 키로 바인딩해 두어야 한다. 새로운 큐를 추가하려면 운영 시점에 바인딩을 다시 설정해야 하고, 라우팅 키를 바꾸면 모든 바인딩을 수정해야 한다.
2. **라우팅** **키가** **필수**  
    메시지를 발행할 때마다 생산자가 반드시 라우팅 키를 지정해야 한다. 브로드캐스트 목적이라도 라우팅 키를 비워 둘 수 없으므로, 특정 키를 암묵적 신호처럼 사용해야 하는 번거로움이 생긴다.

결과적으로 “큐를 생성·바인딩한 만큼만” 메시지가 복사되며, 큐를 동적으로 늘리거나 라우팅 키 없이 단순히 ‘연결된 모든 큐’로 보내는 시나리오에는 적합하지 않다.

이러한 제약을 해소하기 위해 RabbitMQ는 Fanout Exchange를 제공한다. 이제 Fanout Exchange 에 대해 알아보도록 하자.

### Fanout Exchange

팬아웃 익스체인지는 다이렉트 익스체인지와는 동작 방식이 다르다. 다이렉트 익스체인지를 통한 메시지 전달 방식이 택배 기사가 각 집의 주소(라우팅 키)를 보고 택배(메시지)를 개별적으로 배송하는 것과 비슷하다면, 팬아웃 익스체인지는 마치 TV 방송처럼 한 번에 여러 사람에게 동시에 메시지를 전달하는 방식에 가깝다.

예를 들어, 긴급 재난 문자 발송 상황을 생각해보자. 지진이나 태풍 경보가 발생했을 때, 국가에서 모든 휴대전화로 동시에 경보 메시지를 발송하는 방식이다. 개별적으로 하나씩 메시지를 보내는 것보다, 한 번에 모든 대상에게 브로드캐스트하는 것이 훨씬 효율적이다.

팬아웃 익스체인지는 바로 이러한 브로드캐스트 방식으로 동작한다. 라우팅 키와 상관없이 자신과 바인딩된 모든 큐에 메시지를 동시에 전달하므로, 다수의 소비자에게 동일한 정보를 빠르게 전파해야 하는 상황에 적합하다.

- 팬아웃 익스체인지 메세지 발행 예제
	\`\`\`java
	/**
	 * 메시지를 Fanout Exchange로 발행합니다.
	 * @param exchangeName 익스체인지 이름
	 * @param message 발행할 메시지
	 */
	public void sendFanoutMessage(String exchangeName, String message) {
	    // Fanout Exchange는 라우팅 키를 사용하지 않으므로 빈 문자열("")을 전달합니다.
	    // convertAndSend(String exchangeName, String routingKey, Object message)
	    rabbitTemplate.convertAndSend(exchangeName, "", message);
	}
	\`\`\`

라우팅 키 자리에는 \`nul\`, \`빈문자열("")\` 혹은 어떠한 문자열이라도 들어가도 문제가 없으나 빈문자열을 넣는 것이 좀 더 의도 파악 면에서 유리하다. 그렇다면 팬아웃 익스체인지가 가지는 한계점은 무엇일까 ?

Fanout Exchange는 라우팅 키를 무시하고 바인딩된 모든 큐에 메시지를 브로드캐스트하는 방식이지만, 다음과 같은 한계점이 있다.

1. **메시지** **필터링** **불가**  
    모든 큐에 똑같은 메시지가 전달되기 때문에 큐별로 메시지를 선택적으로 받을 수 없다. 즉, 특정 큐만 메시지를 받게 하거나, 메시지 내용을 기준으로 분배하는 기능이 없다.
2. **라우팅** **키** **무시**  
    라우팅 키가 아예 사용되지 않으므로, 메시지의 분류, 패턴 매칭, 조건부 전달이 불가능하다.
3. **큐가** **많아질수록** **리소스** **소모** **증가**  
    바인딩된 큐가 많으면 메시지가 여러 큐에 복사되어 저장되므로, 메모리와 디스크 사용량이 늘어날 수 있다.
4. **확장성** **및** **유연성** **부족**  
    서비스가 커지면서 큐별로 다른 메시지를 받아야 하는 요구가 생기면, Fanout Exchange만으로는 대응이 어렵다.
5. **불필요한** **메시지** **소비**  
    모든 큐가 메시지를 받으므로, 실제로 필요하지 않은 큐에서도 메시지를 소비하게 되어 비효율적일 수 있다.

결과적으로 “큐를 생성·바인딩한 만큼만” 메시지가 복사되며, 큐를 동적으로 늘리거나 라우팅 키 없이 단순히 ‘연결된 모든 큐’로 메시지를 보내는 시나리오에는 Fanout Exchange가 적합하다. 반면, 특정 조건을 만족하는 큐에만 메시지를 전달할 목적이라면 Fanout Exchange는 적합하지 않다. 

그렇다면 특정 조건을 만족하는 큐에만 메시지를 전달하려면 어떤 익스체인지를 사용해야 할까?

### Topic Exchange

팬아웃 익스체인지가 뉴스처럼 익스체인지에 바인딩된 모든 큐에 메시지를 전달한다면, 특정 방송을 시청하는 사용자에게만 메시지를 전달하려면 어떻게 해야 할까?  

위의 상황처럼 특정 조건을 만족하는 큐에만 메시지를 전달하려면 토픽 익스체인지를 사용하면 된다. 토픽 익스체인지는 **정규식과 비슷한 패턴의 와일드카드를 사용**해서, 원하는 조건을 만족하는 큐에만 메시지를 전달할 수 있는 익스체인지이다.

토픽 익스체인지에 큐를 바인딩할 때는 해당 큐에 패턴을 등록한다. 메시지를 발행할 때 실제 라우팅 키를 지정하면, 토픽 익스체인지는 바인딩된 큐의 패턴과 라우팅 키가 일치하는 큐에만 메시지를 전달한다.

예를 들어, 토픽 익스체인지는 와일드카드를 사용하여 패턴을 지정할 수 있다.

- \`*\` (별표): 정확히 한 단어와 일치  
    예를 들어, \`order.*\`로 바인딩하면  
    \`order.created\`, \`order.cancelled\` 등  
    “order.” 뒤에 한 단어가 붙은 라우팅 키만 매칭된다.
    
- \`#\` (샵): 0개 이상의 단어와 일치  
    예를 들어, \`order.#\`로 바인딩하면  
    \`order.created\`, \`order.cancelled\`, \`order.status.updated\`, \`order.a.b.c\` 등  
    “order.”로 시작하는 모든 라우팅 키(단어 개수 상관없음)에 매칭된다.
    

정리하면,

- \`*\` : 한 단어
- \`#\` : 0개 이상의 단어(여러 단어 포함)


#### 패턴 설계 시 주의할 점

1. 패턴이 너무 좁거나 넓게 설정하지 않는다.
2. 와일드 카드(\`*\`, \`#\`) 의미를 정확히 이해해야한다.
3. 라우팅 키 구조를 일관성 있게 설계한다.



### Headers Exchange

토픽 익스체인지는 메시지를 발행할 때 전달하는 라우팅 키가 바인딩 시 입력하는 조건에 만족하는 큐에 메시지를 전달한다. 

예를 들어, ‎\`3분대 나와\`처럼 한 가지 특정 조건(예: ‎\`pattern: 1.*\`)을 만족하는 큐에 메시지를 전달하는 경우에는 토픽 익스체인지를 사용하는 것이 효율적이다. 그러나 ‎\`각 분대 막내만 나와\`처럼 여러 조건(\`분대=1, ‎역할=막내\`)이 혼합된 복잡한 조건을 만족하는 큐에 메시지를 전달하고자 할 때는 토픽 익스체인지만으로는 한계가 있다.

이러한 복잡한 조건을 처리하고자 할 때 사용하는 것이 바로 Headers Exchange이다. Headers Exchange는 라우팅 키 대신 메시지의 헤더 값을 기준으로 큐에 메시지를 전달한다. 즉, 여러 속성(헤더)을 조합하여 세밀하게 라우팅 조건을 지정할 수 있어, 복잡한 비즈니스 요구사항을 만족하는 메시지 분배가 가능하다.

#### \`X-MATCH\` 설정

헤더 익스체인지에 큐를 바인딩할 때 여러 헤더 조건을 지정할 수 있는데 "모든 조건을 만족해야하는가" 아니면 "하나만 만족해도 되는가" 를 결정하는 옵션이 바로 \`x-match\` 이다.

1. \`x-match=all\`: 메세지의 헤더가 바인딩에 지정한 모든 조건을 모두 만족해야 큐로 메세지를 전달
	- \`Binding\`: ‎\`{"x-match": "all", "type": "order", "priority": "high"}\`
	- \`Header\`: ‎\`type=order, priority=high\`

	위의 경우, 두 조건(\`type=order, priority=high\`)이 모두 맞아야 큐에 메세지가 들어간다.	
	
2. \`x-match=any\`: 메세지의 헤더가 바인딩에 지정한 모든 조건 중 하나라도 만족하면 큐로 메세지를 전달
	- \`Binding\`: \`{"x-match": "any", "type": "order", "priority": "high"}\`
	- \`Header\`: ‎\`type=order, priority=low\`

	위의 경우, \`type=order\` 만 일치해도 메세지가 큐에 들어가게 된다.

\b헤더 익스체인지는 토픽 익스체인지와는 달리 여러 속성을 조합해야 하는 상황에 사용된다. 여러 속성을 통해 복잡한 조건 조합이 가능하기 떄문에 메세지를 더욱 유연하게 분배할 수 있으나, 라우팅 성능이 \`Direct\`, \`Topic\` 에 비해 느릴 수 있으며, 설계가 다소 복잡해 질 수 있기에 사용에 주의해야한다.

우선적으로 \`Direct\`, \`Topic\` 익스체인지를 고려하고 해당 익스체인지로는 구현할 수 없는 복잡한 라우팅을 구현해야하는 경우, \`Header\` 익스체인지를 고려해보는 것이 좋을 것 같다.

## 요약

1. Direct Exchange - "라우팅 키 기반 정확한 매칭"
2. Fanout Exchange - "브로드캐스트 방식"
3. Topic Exchange - "패턴 기반 그룹 호출"
4. Headers Exchange - "속성 조합으로 세밀한 개별 호출"
`,mb=Object.freeze(Object.defineProperty({__proto__:null,default:pb},Symbol.toStringTag,{value:"Module"})),hb=`---
summary: 이 글에서는 Reactor 체인에서 “어디서, 왜 스레드가 바뀌는지”를 Schedulers, publishOn, subscribeOn 중심으로 정리했습니다.
tags:
  - 자바
  - 네티
  - 네트워크 프레임워크
created_date: 2026-01-25 10:18:21
last_modified_date: 2026-01-25 10:18:21
---

> **이 글에서는 네티(Netty)가 무엇인지, 등장하게된 배경을 중심으로 살펴봅니다.**

## \`java.net\`: 기본적인 소켓 네트워크 프로그래밍

일반적으로 자바로 TCP/IP 기반 네트워크 프로그래밍을 해야 한다면 서버는 \`java.net.ServerSocket\`, 클라이언트는 \`java.net.Socket\`을 사용하는 방식을 먼저 떠올리게 됩니다. **이 방식은 입력과 출력을 \`InputStream\` / \`OutputStream\`으로 동기식·블로킹 방식으로 처리**하기 때문에 **연결 수가 많아질수록 쓰레드와 확장성 측면에서 한계가 드러납니다.**

---

### \`java.net\`:  스트림 기반의 소켓 구조 한눈에 보기

\`java.net\`은 **소켓을 열고\`InputStream\` / \`OutputStream\`을 꺼낸 뒤, 연결마다 하나의 연속적인 바이트 스트림으로 데이터를 주고받는 구조를 사용합니다.**

> **스트림:** 순서가 있는 데이터의 흐름

서버와 클라이언트를 구현한 코드 자체는 조금 다르지만, **둘 다 “스트림에서 읽고, 스트림에 쓰는” 동일한 패턴 위에서 동작**합니다.
아래 코드는 가장 단순한 형태의 TCP/IP 서버 코드로 서버 소켓을 연 후, 클라이언트가 접속할 때마다 새로운 쓰레드를 만들어 해당 연결의 입출력을 전담하게 합니다.

- **\`java.net\` 을 사용한 TCP/IP 서버 예제**
  \`\`\`java
  public class Demo {

      public static void main(String[] args) throws IOException {
        final ServerSocket sc =  new ServerSocket(8080);

        while (true) {
            Socket socket = sc.accept();
            System.out.println("connected from " + socket.getLocalSocketAddress());

            new Thread(() -> {
                try (InputStream is = socket.getInputStream()) {
                    BufferedReader br = new BufferedReader(new InputStreamReader(is));

                    String line = "";
                    while ((line = br.readLine()) != null) {
                        System.out.println("\\"" + line + "\\" received from " + socket.getLocalSocketAddress());
                    }
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }


            }).start();
        }
      }
  }
  \`\`\`

연결을 받아들이는 \`accept()\` 호출은 새 클라이언트가 올 때까지 블로킹되고, **각 클라이언트 연결을 처리하는 쓰레드 안에서는 \`InputStream.read()\`와 \`OutputStream.write()\`가 데이터가 준비될 때까지 블로킹된 채 대기**합니다. 그래서 클라이언트가 많아질수록 이런 쓰레드가 기하급수적으로 늘어나고, 컨텍스트 스위칭과 쓰레드 스택 메모리 사용량도 함께 증가하여, 접속자가 많아질수록 서버의 확장성이 급격히 떨어집니다.

---

## \`java.nio\`: 논블로킹 네트워크 프로그래밍의 시작

\`java.net\` 소켓은 스트림 기반 블로킹 I/O라, 많은 연결을 처리할수록 이를 담당하는 쓰레드 수가 기하급수적으로 늘어나는 구조입니다. 이런 한계를 완화하기 위해 **자바 1.4에서 도입된 \`java.nio\`는 채널(Channel), 버퍼(Buffer), 셀렉터(Selector) 를 중심으로 한 논블로킹 I/O 모델을 제공**합니다.

---

### \`java.nio\`: 채널(Channel)

\`java.net\` 가 소켓마다 InputStream, OutputStream을 따로 꺼내서 읽기와 쓰기를 처리했다면, **\`java.nio\` 는 채널(Channel)이라는 추상화를 통해 양방향 입출력을 한 객체에 모아 처리**합니다.
예를 들어 TCP 클라이언트 소켓은 \`SocketChannel\`, 서버 소켓은 \`ServerSocketChannel\`로 표현되며, 이 채널들이 \`ByteBuffer\`와 같은 버퍼에서 데이터를 읽어 오거나 버퍼에 담긴 데이터를 네트워크로 써 내보내는 방식으로 동작합니다.

채널의 중요한 특징은 **논블로킹 모드를 지원**한다는 점입니다. 채널을 논블로킹으로 설정하면 \`read()\`를 호출했을 때 데이터가 아직 도착하지 않았다면 바로 0을 반환하고, 준비된 경우에만 실제로 바이트를 읽습니다. 덕분에 **하나의 쓰레드가 여러 채널을 돌면서 “지금 처리할 수 있는 것들만 조금씩 처리하는” 구조**를 만들 수 있게 됩니다. 

- **논블로킹 방식을 지원하는 \`java.nio\`의 \`Channel\`**
  \`\`\`java
  SocketChannel channel = SocketChannel.open(new InetSocketAddress("localhost", 8080));
  channel.configureBlocking(false); // 논블로킹 모드로 전환
  \`\`\`

---

### \`java.nio\`: 버퍼(ByteBuffer)

\`java.net\` 에서는 일반적으로 byte[] 배열을 직접 만든 후, \`InputStream.read(byte[])\`로 데이터를 채운 뒤, 필요한 만큼만 잘라 쓰는 식으로 작업했습니다. **\`java.nio\`** 는 여기에 한 단계 더 들어가서, **바이트 배열을 \`ByteBuffer\`라는 객체로 감싸고 \`position\`, \`limit\`, \`capacity\` 같은 메타데이터를 함께 관리**합니다.

\`ByteBuffer\`는 “얼마나 읽어왔는지”, “어디까지 썼는지”를 명시적으로 관리할 수 있어서, 부분적으로 읽힌 데이터나, 여러 번에 나눠 오는 패킷을 다룰 때 유용합니다. 예를 들어 채널에서 데이터를 읽으면 \`position\`이 늘어나고, \`flip()\`을 호출하면 읽기 모드로 전환되어 \`position\`을 0으로 돌린 뒤 limit까지를 읽을 수 있게 됩니다. 

- **\`ByteBuffer\` 사용 예시**
  \`\`\`java
  ByteBuffer buffer = ByteBuffer.allocate(1024);

  int read = channel.read(buffer); // 채널 → 버퍼로 읽기
  if (read > 0) {
      buffer.flip();               // 읽기 모드로 전환
      // buffer에서 데이터 소비...
  
---

### \`java.nio\`: 셀렉터(Selector)

채널과 버퍼만으로는 “논블로킹 I/O”의 장점을 다 살리기 어렵습니다. **Selector는 하나의 쓰레드가 여러 채널을 동시에 감시하면서, 지금 당장 읽기/쓰기가 가능한 채널만 골라서 처리할 수 있게 해주는 핵심 컴포넌트**입니다.

사용 흐름은 대략 이렇습니다. 먼저 Selector.open()으로 셀렉터를 생성하고, 각 채널을 register()를 통해 셀렉터에 등록합니다. 이후 루프 안에서 select()를 호출하면, 읽기 가능, 쓰기 가능, 연결 완료 같은 이벤트가 발생한 채널이 있을 때까지 블로킹되었다가, 준비된 채널 목록을 돌려줍니다. 애플리케이션 코드는 이 목록을 순회하면서 각 채널에서 read() 또는 write()를 수행하고, 다시 select()를 호출하는 패턴으로 동작합니다.

이 구조 덕분에 **더 이상 “연결 1개당 쓰레드 1개”를 강제하지 않고도, 하나의 이벤트 루프 쓰레드가 수많은 연결을 관리**할 수 있게 됩니다. **네티의 \`EventLoop\`가 내부적으로 바로 이 셀렉터 기반 이벤트 루프 위에서 동작**하기 때문에, Selector는 네티의 쓰레드 모델을 이해하는 데도 중요한 배경 지식이 됩니다.

- **\`Selector\` 사용 예시**
  \`\`\`java
  Selector selector = Selector.open();
  channel.configureBlocking(false);
  channel.register(selector, SelectionKey.OP_READ);

  while (true) {
      selector.select();                 // 준비된 채널이 생길 때까지 블로킹
      Set<SelectionKey> keys = selector.selectedKeys();
      for (SelectionKey key : keys) {
          if (key.isReadable()) {
              SocketChannel ch = (SocketChannel) key.channel();
              // ch.read(buffer) 등으로 처리
          }
      }
      keys.clear();                      // 다음 루프를 위해 정리
  }
  \`\`\`

---

### \`java.nio\`: 채널 · 버퍼 · 셀렉터를 합친 서버 구조 예시

채널(\`Channel\`)과 버퍼(\`ByteBuffer\`), 그리고 셀렉터(\`Selector\`) 이 세 가지를 합쳐서, 논블로킹 이벤트 루프 구조로 바꿨을 때 어떻게 코드가 달라지는지 예제를 통해 살펴보겠습니다.

- **\`java.nio\` 를 사용 예시**
  \`\`\`java
  public class Demo {
      public static void main(String[] args) throws IOException {
          ServerSocketChannel serverChannel = ServerSocketChannel.open();
          serverChannel.configureBlocking(false);
          serverChannel.bind(new InetSocketAddress(8080));

          Selector selector = Selector.open();
          serverChannel.register(selector, SelectionKey.OP_ACCEPT);

          ByteBuffer buffer = ByteBuffer.allocate(1024);

          while (true) {
              selector.select();

              Set<SelectionKey> keys = selector.selectedKeys();
              Iterator<SelectionKey> it = keys.iterator();

              while (it.hasNext()) {
                  SelectionKey key = it.next();
                  it.remove();

                  if (key.isAcceptable()) {
                      SocketChannel client = serverChannel.accept();
                      client.configureBlocking(false);
                      System.out.println("[ACCEPT] " + client.getRemoteAddress());

                      client.register(selector, SelectionKey.OP_READ);

                  } else if (key.isReadable()) {
                      SocketChannel client = (SocketChannel) key.channel();
                      buffer.clear();
                      int read = client.read(buffer);

                      if (read <= 0) {
                          System.out.println("[CLOSE] " + client.getRemoteAddress());
                          key.cancel();
                          client.close();
                          continue;
                      }

                      buffer.flip();
                      byte[] bytes = new byte[buffer.remaining()];
                      buffer.get(bytes);
                      String line = new String(bytes);

                      System.out.println("[RECV] " + line.trim()
                                        + " from " + client.getRemoteAddress());
                  }
              }
          }
      }
  }
  \`\`\`

\`java.net\`은 연결마다 전용 쓰레드를 두고 블로킹 방식으로 처리했지만, **\`java.nio\`는 하나 이상의 셀렉터 기반 이벤트 루프가 등록된 채널들 중 “지금 I/O 처리가 가능한 채널”만 골라서 순차적으로 조금씩 처리**한다는 점이 핵심입니다.

---

### \`java.nio\`: 스레드는 줄었는데, 코드는 더 복잡해졌다

\`java.nio\` 덕분에 “연결 1개당 쓰레드 1개” 모델에서 벗어나, 적은 수의 쓰레드로 더 많은 연결을 처리할 수 있는 기반은 마련되었습니다. 다만 그만큼 채널·버퍼·셀렉터를 직접 다루는 코드가 필요해지고, 아래와 같은 단점들이 개발자 쪽으로 그대로 이전되었다는 점도 함께 보게 됩니다.

- **\`java.nio\` 를 통한 네트워크 프로그래밍의 한계**

  1. 채널, 버퍼, 셀렉터를 애플리케이션 코드에서 직접 다뤄야 해서 각 채널의 부분 읽기/부분 쓰기, 버퍼에 남은 데이터, 메시지 경계 상태를 일일이 관리해야 한다.
  2. 여러 연결과 예외 상황(타임아웃, 연결 종료, 동시 이벤트 등)을 처리하기 위해 복잡한 상태 머신과 예외 처리가 \`select()\` 루프 주변에 쌓이면서, 코드 구조가 빠르게 난해해진다.
  3. 셀렉터 구현이 \`OS\`마다 달라 \`epoll\`/\`select\` 관련 버그나 성능 이슈에 직접 영향을 받고, \`direct ByteBuffer\` 사용 시 네이티브 메모리와 리소스 해제를 별도로 관리해야 하는 등 플랫폼·메모리 레벨의 디테일까지 신경 써야 한다.
  4. \`java.nio\`는 저수준 I/O API에 가까워서 TCP 프레이밍, 인코더/디코더, 다단계 핸들러 파이프라인 같은 고수준 구조를 모두 직접 설계·구현해야 하고, 이를 재사용 가능한 프레임워크로 끌어올리기까지의 진입 장벽이 높다.

결국 **\`java.nio\`** 는 **“성능과 스케일”은 해결**했지만, 그만큼 **“코드 복잡도와 구현 난이도”라는 비용을 개발자에게** 넘겨 주었습니다. 이 시점에서, \`java.nio\`의 장점을 그대로 살리면서도 저수준 디테일은 감춰 주는 프레임워크가 필요해졌고, 그 역할을 하는 대표적인 도구가 바로 네티(\`Netty\`)입니다.


---

# Netty: 비동기 이벤트 기반 네트워크 프레임워크

\`java.net\` 은 단순하지만 쓰레드와 확장성에 한계가 있었고, \`java.nio\` 는 논블로킹 I/O 로 이 문제를 풀어 주는 대신 채널·버퍼·셀렉터를 직접 다뤄야 하는 복잡함을 가져왔습니다. \`네티(Netty)\`는 이 두 세계 사이에서, \`java.nio\` 위에 비동기 이벤트 기반 네트워크 애플리케이션 프레임워크를 올려 놓고 서버·클라이언트를 더 적은 코드로, 더 일관된 모델(EventLoop–Channel–Pipeline–Handler) 위에서 구현할 수 있도록 해 줍니다.




## Netty: 핵심 구조 한 번에 보기

네티에서 서버 측 구성을 이해할 때는 보통 **\`EventLoop\`, \`Channel\`, \`ChannelPipeline\`, \`ChannelHandler\` 네 가지 요소**로 정리해 볼 수 있습니다.

---

### EventLoop: 네티의 스레드 모델

\`java.nio\`에서 직접 구현하던 **“Selector + while(select()) 루프”를 네티가 대신 캡슐화해 둔 것이 바로 \`EventLoop\`** 입니다. 내부적으로는 \`java.nio\`의 셀렉터 위에서 돌아가는 단일 쓰레드 이벤트 루프로, 하나의 이벤트 루프가 여러 채널의 I/O 이벤트를 처리합니다. 덕분에 **“연결 1개당 쓰레드 1개” 대신, “소수의 이벤트 루프 쓰레드가 많은 연결을 돌려 가며 처리하는 구조”** 를 자연스럽게 사용할 수 있습니다.


---

### Channel: 연결의 단위

**원격 피어와의 네트워크 연결 하나**를 표현하는 객체로, 기존의 \`Socket\`/\`SocketChannel\`에 해당합니다.
각 채널은 하나의 이벤트 루프에 배정되고, 그 채널과 관련된 I/O 이벤트는 **항상 같은 쓰레드(\`EventLoop\`)에서 처리되도록 보장**됩니다.

---


### ChannelPipeline: 이벤트 처리 경로

**해당 채널로 들어오고 나가는 이벤트가 지나가는 처리 파이프라인**입니다.
내부적으로 여러 채널 핸들러를 양방향 연결 리스트 형태로 연결해 두고, 읽기/쓰기 이벤트가 발생했을 때 이 핸들러 체인을 순서대로 통과시키며 처리합니다.

---


### ChannelHandler: 이벤트 처리 로직

**실제 업무 로직을 수행하는 컴포넌트**로, 디코더, 인코더, 비즈니스 로직, 로깅 등 역할별로 잘게 쪼개어 핸들러를 구성합니다.
이들을 파이프라인에 조합해 넣는 방식으로, **TCP 프레이밍부터 메시지 파싱, 응답 생성까지를 모듈화된 형태로 표현**할 수 있습니다.

이 구조 덕분에, **개발자는 더 이상 Selector, ByteBuffer, SelectionKey를 직접 만지지 않고도 “이벤트가 들어왔을 때 어떤 순서로 어떤 핸들러를 태울지” 중심으로 서버·클라이언트를 설계**할 수 있습니다. 


---

이 글에서는 네티(Netty)가 어떤 배경에서 등장했고, 네트워크 프로그래밍을 어떤 모델로 바라보게 만드는지 큰 그림만 살펴보았습니다.`,gb=Object.freeze(Object.defineProperty({__proto__:null,default:hb},Symbol.toStringTag,{value:"Module"})),_b=`---
summary: 구독 시점에 따라 스트림이 다르게 보이는 이유에 대해 가볍게 정리한 글입니다.
tags:
  - 자바
  - 웹플럭스  
  - 리액터
  - Hot Publisher
  - Cold Publisher
created_date: 2026-01-18
---


> **Hot / Cold Publisher 에 대해 가볍게 정리한 글입니다.**

## 들어가면서 

처음 리액티브 프로그래밍/리액터를 공부하게 되면 보통 아래와 같은 코드를 자주 작성하게 됩니다.

- **1 ~ 10 까지의 데이터를 처음부터 끝까지 출력하는 예제 코드**

\`\`\`java
Flux.range(1, 10)
    .doOnNext(i -> System.out.println("# emit: " + i))
    .subscribe();
\`\`\`

이러한 코드는 **언제, 몇 번을 구독하든 상관없이, 구독할 때마다 1부터 10까지 같은 값들을 처음부터 끝까지 다시 흘려보냅니다.** 그래서 리액터를 처음 접할 때는, 자연스럽게 **“구독만 하면 각 구독자가 자기 차례로 처음부터 끝까지 같은 데이터를 받는다”** 는 식의 동작만을 떠올리기 쉽습니다.

만약 항상 현재 시각을 보여줘야 하는 디지털 시계를 리액터로 구현하려면 어떻게 해야 할까요? 이러한 **디지털 시계는 위의 예제처럼 매번 같은 데이터를 처음부터 끝까지 다시 보여줄 필요는 없습니다.** 사용자가 언제 화면을 열든 그 순간의 현재 시각만 계속 갱신해서 보여주면 충분하죠. 구독할 때마다 1부터 10까지를 처음부터 다시 흘려보내 주는 \`Flux.range(1, 10)\`과 달리, 이런 경우에는 **이미 흘러가고 있는 “현재 시각 스트림”에 구독자가 중간부터 합류하는 쪽이 훨씬 자연스러운 모델입니다.** 아래는 이런 디지털 시계를 리액터로 표현한 간단한 예제입니다.


- **현재 시각을 출력하는 디지털 시계 예제**
  \`\`\`java
  DateTimeFormatter formatter =
          DateTimeFormatter.ofPattern("HH:mm:ss");

  // 1초마다 현재 시각을 흘려보내는 "공유되는" Hot 스트림
  Flux<String> clock = Flux.interval(Duration.ofSeconds(1))
          .map(tick -> LocalDateTime.now().format(formatter))
          .share(); // 여러 구독자가 같은 흐름을 공유

  // 구독자 A: 바로 구독 시작
  clock.subscribe(time -> System.out.println("A: " + time));

  // 3초 뒤에 구독자 B가 중간부터 합류
  Thread.sleep(3000);
  clock.subscribe(time -> System.out.println("B: " + time));

  // 메인 스레드를 일정 시간 동안 유지
  Thread.sleep(5000);
  \`\`\`

위 예제에서 **\`share()\`는 돌아가는 스트림 하나를 여럿이 같이 볼 수 있도록 하는 연산자**입니다.
이제 리액터의 \`Publisher\`를 **“항상 처음부터 데이터를 흘려보내는 쪽”** 과 **“이미 흘러가고 있는 흐름에 중간부터 합류하는 쪽”** 으로 나눠서 살펴보겠습니다.

## 항상 처음부터 vs 중간부터 합류

리액티브 프로그래밍/리액터는 **항상 처음부터 데이터를 흘려보내는 Publisher와, 이미 흘러가고 있는 흐름에 중간부터 합류하는 Publisher**를 아래와 같이 정의해 구분합니다.

- **항상 처음부터** 데이터를 흘려보내는 Publisher : **Cold Publisher**
- **이미 흘러가고 있는 흐름에 중간부터 합류**하는 Publisher : **Hot Publisher**

Hot Publisher 와 Cold Publisher 에 대해서 말하기 전에 **Hot / Cold 가 어떠한 경우에 사용되는 용어인지**를 먼저 정리해 보겠습니다.

---

### Hot / Cold 용어 정리하기

사실 Hot / Cold 라는 표현은 생각보다 여러 곳에서 쓰입니다. 그중 개발자가 가장 자주 마주치는 예는 바로 **캐시(cache)** 입니다.

| 용어          | 의미 설명                                                                 |
|---------------|-------------------------------------------------------------------------------|
| **Cold 캐시** | **캐시가 비어 있거나, 아직 유의미한 데이터가 거의 없는 상태.** 요청이 들어와야 DB·외부 API를 호출해 캐시를 채우기 시작하는, **아직 준비가 덜 된 상태.** |
| **Hot 캐시**  | **자주 사용하는 데이터가 이미 캐시에 충분히 올라와 있어서, 대부분의 요청이 캐시만 보고 바로 처리되는, 잘 달궈져 있는 상태.** |

정리해 보면, **Cold는 “요청이 들어와야 비로소 채워지는, 아직 준비가 덜 된 상태”**, **Hot은 “이미 충분히 달궈져 있어서, 들어오는 대로 바로바로 처리할 수 있는 상태”** 를 가리킨다고 볼 수 있습니다. 리액터에서 말하는 **Cold / Hot Publisher**도 그대로 이해하면됩니다. 
이제부터는 이걸 **“항상 처음부터 흘려보내는 스트림”과 “이미 흘러가고 있는 스트림”** 관점에서 한 번 살펴보겠습니다.

---

### Cold Publisher

\`Cold Publisher\`는 **요청이 들어와야 비로소 데이터를 흘려보내는** 스트림을 의미합니다. **즉, 구독자가 구독하기 전까지는 데이터가 흘러가지 않는 스트림**을 의미합니다.


- **\`Cold Publisher\` 예제를 통해 이해하기**
  \`\`\`java
  Flux<Integer> flux =
      Flux.range(1, 3)
          .doOnNext(i -> System.out.println("# emit: " + i));

  flux.subscribe(i -> System.out.println("# A: " + i));
  System.out.println("----");
  flux.subscribe(i -> System.out.println("# B: " + i));
  \`\`\`

위의 예제를 실행해보면 알 수 있듯이 \`A\`와 \`B\` 모두  1부터 3까지를 각자 처음부터 다시 받습니다. 그렇다면 **\`Cold Publisher\` 는 필요할 때마다 처음부터 다시 재생하는 VOD 영상에 더 가깝다**고 볼 수 있습니다.

 
---


### Hot Publisher

\`Hot Publisher\`는 **이미 흘러가고 있는 흐름에 중간부터 합류**하는 스트림을 의미합니다. **즉, 구독자가 구독하기 전에도 데이터가 흘러가고 있는 스트림**을 의미합니다.

- **\`Hot Publisher\` 예제를 통해 이해하기**
  \`\`\`java
  Flux<Long> flux =
      Flux.interval(Duration.ofSeconds(1))
          .doOnNext(i -> System.out.println("# emit: " + i))
          .share(); // 여러 구독자가 같은 흐름을 공유

  flux.subscribe(i -> System.out.println("A: " + i));

  Thread.sleep(3000);

  flux.subscribe(i -> System.out.println("B: " + i));
  \`\`\`

이 코드는 1초마다 숫자를 증가시키면서 계속 흘려보내는 스트림을 만든 뒤, **\`share()\`를 통해 여러 구독자가 같은 흐름을 공유**하게 만듭니다.

- **코드 실행 결과**
  \`\`\`shell
  emit: 0
  A: 0

  emit: 1
  A: 1

  emit: 2
  A: 2

  emit: 3
  A: 3
  B: 3

  emit: 4
  A: 4
  B: 4
  \`\`\`


위 실행 결과를 보면 알 수 있듯이, 구독자 A는 스트림이 시작될 때부터 0, 1, 2, 3 … 을 순서대로 모두 보지만, 구독자 B는 3초 뒤에 구독을 시작했기 때문에 0, 1, 2는 전혀 보지 못하고 3부터 볼 수 있습니다.
이렇게 **\`Hot Publisher\`** 는 “필요할 때마다 처음부터 다시 재생하는 VOD”라기보다는, **이미 방송 중인 라이브 스트림에 중간부터 채널을 맞추는 것**에 더 가깝다고 이해할 수 있습니다.



## 마무리하기

- **Cold Publisher**: 구독자가 구독하기 전까지는 데이터가 흘러가지 않는 스트림
- **Hot Publisher**: 구독자가 구독하기 전에도 데이터가 흘러가고 있는 스트림

---

### 언제 사용하면 좋을까 ?

| 용어             | 언제 사용할까 ?                               | 실상황 예시                                         |
|------------------|--------------------------------------------------|----------------------------------------------|
| **Cold Publisher** | 각 구독자가 **처음부터 모든 데이터를 다시 받아야 할 때** | \`Flux.range\`, \`Flux.fromIterable\`, \`Mono.fromCallable\` 같은 요청‑응답형 API 호출, DB 조회, 파일 읽기처럼 호출할 때마다 새로 수행되는 작업 |
| **Hot Publisher**  | 이미 발생 중인 이벤트를 여러 구독자가 **현재 시점부터 같이 바라보면 될 때** | \`Flux.interval().share()\`, \`Sinks.many().multicast()\`, WebSocket 브로드캐스트, UI 이벤트 스트림처럼 실시간으로 흘러가는 이벤트 스트림 |




`,bb=Object.freeze(Object.defineProperty({__proto__:null,default:_b},Symbol.toStringTag,{value:"Module"})),yb="---\nsummary: 이 글에서는 Reactor의 Sinks가 어떤 역할을 하는지, 왜 Processor 대신 등장했는지, 그리고 WebFlux 코드에서 실제로 어떻게 쓰이는지를 개념 위주로 정리합니다.\n\ntags:\n  - 리액티브 프로그래밍\n  - 웹플럭스\n  - 리액터\n  - Sinks\ncreated_date: 2026-01-20 15:39:21\nlast_modified_date: 2026-01-20 15:39:21\n---\n\n**`리액티브 스트림즈`/`리액터` 에서 데이터는 `Publisher` 에서 시작해 여러 `Operator`를 거쳐 `Subscriber` 로 흘러갑니다.** 대부분의 애플리케이션 코드는, 스트림 안에서 생성된 데이터가 오퍼레이터를 거쳐 최종 소비 지점까지 흘러가는 일반적인 형태만으로도 충분히 표현할 수 있습니다. 하지만 때로는 **외부 시스템의 이벤트나 레거시 API처럼, 이미 존재하는 소스에서 데이터를 가져오는 대신, 애플리케이션 쪽에서 스트림으로 데이터를 밀어 넣어야 할 때**가 있습니다. \n\n**리액터에서 이러한 요구를 구현하기 위해 `Processor` 나 `Flux.create`, `Flux.generate` 를 사용했지만, 스펙·동시성·가독성 측면에서 한계가 있었습니다.** 이러한 한계를 극복하기 위해 등장한 것이 바로 **`Sinks`** 입니다.\n\n---\n\n## Processor: Publisher와 Subscriber를 한 몸에 가진 중간 지점\n\n리액티브 스트림즈에서 **`Publisher` 는 “구독자가 요청한 만큼 데이터를 비동기적으로 내보내는 출발점”** 이고, **`Subscriber` 는 그 데이터를 소비하는 쪽**입니다. 일반적인 플로우에서는 `Publisher → (여러 Operator) → Subscriber`만 있어도 충분하지만, **현실에서는 한쪽에서 값을 받아 다른 쪽으로 다시 흘려보내야 하는 중간 지점이 필요해지는 경우가 있습니다.**\n\n이럴 때 사용하는 것이 `Processor` 입니다. `Processor` 는 위로는 `Subscriber`, 아래로는 `Publisher` 처럼 동작하므로, 한 객체 안에서 두 쪽의 규약을 모두 지켜야 합니다. 즉 다음과 같은 책임을 동시에 가집니다.\n\n- upstream에서 들어오는 `onNext` / `onError` / `onComplete` 를 **올바른 순서로 처리**하고,\n- downstream의 `request(n)` / `cancel()`을 고려해 **backpressure를 적절히 중계**하며,\n- **여러 구독자가 붙었을 때 각자의 요청량을 조합**해 **upstream에 얼마나 요청할지 결정**하고,\n- **스레드가 여러 개일 때 `onNext` / `onComplete` 호출을 직렬화해서 스펙 위반이 일어나지 않도록 보장**해야 합니다.\n\n여기에 애플리케이션 코드에서 `Processor` 를 “외부 이벤트 입구”처럼 쓰기 위해 `onNext` 를 직접 호출하기 시작하면, 완료된 후에 다시 `onNext` 를 보내거나, 여러 스레드에서 동시에 `onNext` 를 날려 스펙·동시성 위반이 일어나기 매우 쉬운 구조가 됩니다. 이런 이유로 `Processor` 계열을 `deprecated` 하고, **중간 변환은 오퍼레이터가, 외부에서 값을 주입하는 역할은 `Sinks` 가 맡도록 책임을 분리**하는 방향으로 바꾸었습니다.\n\n---\n\n## Sinks: 외부에서 값을 넣는 전용 입구\n\n위에서 본 것처럼 `Processor` 는 중간 변환 + 외부 이벤트 입구 역할을 한 번에 떠안으면서, `Subscriber` 와 `Publisher` 규약까지 모두 지켜야 하는 부담이 있었습니다. 리액터는 이러한 부담을 덜기 위해 이 복잡한 역할을 쪼개서, **중간 변환은 기존 오퍼레이터 체인으로만 표현**하고, **외부에서 값을 주입하는 책임은 Sinks라는 전용 컴포넌트로 분리**했습니다.\n\n\n> [리액터 공식 문서](https://projectreactor.io/docs/core/release/reference/coreFeatures/sinks.html)\n> **In Reactor, a sink is a class that allows safe manual triggering of signals in a standalone fashion, creating a Publisher-like structure capable of dealing with multiple Subscriber (with the exception of unicast() flavors).**\n\n\n리액터 공식 문서에서는 **`Sinks` 를 “신호를 안전하게 수동 트리거할 수 있게 해 주는 클래스이며, 그 결과로 Publisher와 비슷한 구조를 만들어 준다”고 설명합니다.** 또한 `tryEmitNext`, `tryEmitError`, `tryEmitComplete` 같은 메서드로 값을 넣고, `asFlux()` / `asMono()`로 꺼내 일반 Flux/Mono처럼 사용할 수 있는 구조입니다. 따라서 **바깥 코드에서 직접 값을 집어넣어도 되는 대상은 Sinks 뿐이고, 나머지 Flux/Mono 는 subscribe와 오퍼레이터로만 다룬다는 사용 규칙이 생겼다고 볼 수 있을 것 같습니다.**\n\n---\n\n## Sinks: 어떻게 만들고, 어떻게 쓸까\n\n일반적으로 `Sinks`를 사용하는 기본 패턴은 아래와 같습니다.\n\n- **`Sinks` 기본 패턴**\n  \n  1. 적절한 종류의 **`Sinks`를 하나 만든다.**\n  2. 외부 코드에서 **`tryEmit*` 메서드로 값을 넣는다.**\n\n      1. **`tryEmitNext(T value)`:** 다음 값 방출 시도\n      2. **`tryEmitError(Throwable error)`:** 에러 방출 시도\n      3. **`tryEmitComplete()`:** 완료 신호 방출 시도\n      4. **`Sinks.EmitResult`:** **`tryEmit*` 결과, 실패 여부 검칙, 로그/재시도/드롭 정책 적용**\n\n  3. 나머지 코드는 **`asFlux()` / `asMono()`로 노출된 `Flux`/`Mono` 를 바라본다.**\n\n일반적으로는 위와 같은 패턴으로 `Sinks`를 사용하고, 이후에는 **상황에 맞는 `Sinks` 타입(`one`, `empty`, `many().unicast/multicast/replay`)만 골라 쓰면 됩니다.** `Processor`에서는 여러 스레드에서 들어오는 onNext 호출을 직접 직렬화해 줘야 했다면, **`Sinks`는 내부 구현에서 이런 직렬화·스레드 안전성을 최대한 대신 보장해 주기 때문에, 바깥에서는 `tryEmit*` 메서드를 중심으로 더 단순한 규칙만 지키면 됩니다.**\n\n---\n\n### Sinks.one()\n\n`Sinks.one()`은 단 한 번의 값 또는 완료/에러만 발행하는 `Sinks`입니다. **비동기 작업 결과를 나중에 한 번만 채워야 하는 `Mono`를 만들 때 유용합니다.**\n\n```java\nSinks.One<Result> sink = Sinks.one();a\nMono<Result> mono = sink.asMono();\n\n// 어딘가에서 비동기 작업이 끝났을 때\nsink.tryEmitValue(result);   // 또는 sink.tryEmitError(error), sink.tryEmitEmpty()\n```\n\n---\n\n### Sinks.empty()\n\n`Sinks.empty()`는 값 없이 완료/에러만 발행해야 할 때 사용합니다. **“결과 값은 없고, 성공/실패 여부만 알리면 되는” 비동기 작업을 Mono로 노출할 때 쓸 수 있습니다.**\n\n```java\nSinks.Empty<Void> sink = Sinks.empty();\nMono<Void> completion = sink.asMono();\n\n// 작업이 끝났을 때\nsink.tryEmitComplete();  \n```\n\n\n\n---\n\n### Sinks.many().unicast()\n\n`Sinks.many().unicast()` 자체는 아직 `Sinks.Many` 인스턴스가 아니고, `onBackpressureBuffer(...)` 같은 팩토리 메서드를 한 번 더 호출해야 실제로 사용할 수 있는 `Unicast Sink`가 만들어집니다. 이 **`Unicast Sink`는 구독자가 딱 한 명만 붙을 수 있으며, 내부 큐를 사용해 다운스트림에 요청이 없을 때도 데이터를 버퍼링할 수 있어서, 단일 소비자용 작업 큐처럼 쓸 수 있습니다.**\n\n```java\nSinks.Many<String> sink =\n    Sinks.many().unicast().onBackpressureBuffer();\n\nFlux<String> flux = sink.asFlux();  // 한 구독자만 허용\n```\n\n---\n\n### Sinks.many().multicast()\n\n**`Sinks.many().multicast().onBackpressureBuffer()`** 는 **여러 구독자에게 동시에 브로드캐스트하는 핫 스트림**을 만듭니다. **새로 구독하는 쪽은 구독 시점 이후에 emit되는 값만 받습니다.**\n\n\n```java\nSinks.Many<Notification> sink =\n    Sinks.many().multicast().onBackpressureBuffer();\n\nFlux<Notification> notifications = sink.asFlux();  // 여러 구독자에게 브로드캐스트\n```\n\nWebFlux SSE/WebSocket 알림처럼, “여러 클라이언트가 같은 실시간 이벤트를 받아야 하는 경우”에 가장 자주 쓰입니다.\n\n---\n\n### Sinks.many().replay()\n\n`Sinks.many().replay()`는 `emit`된 값을 캐시해 두었다가, 나중에 구독하는 Subscriber에게 과거 값을 리플레이합니다. **`multicast`가 “실시간 이후만” 흘려보내는 반면, `replay`는 이전에 `emit`된 값들을 저장해 두었다가, 나중에 붙은 구독자에게도 과거 값을 다시 방출해 준다는 점이 핵심 차이입니다.**\n\n```java\nSinks.Many<State> sink =\n    Sinks.many().replay().latest();   // 항상 최신 상태 1개 유지\n\nFlux<State> states = sink.asFlux();\n```\n\n일반적으로 현재 시스템 상태, 마지막 가격처럼 “늦게 구독해도 최신 상태를 바로 제공하고 싶은 스트림”에 잘 맞습니다.\n\n\n- **replay 전략**\n  1. **`replay().limit(n)`:** 마지막 n개만 캐시\n  2. **`replay().all()`:** 모든 값 캐시\n  3. **`replay().limit(Duration)`:** 일정 시간 동안만 캐시\n  4. **`replay().latest()`:** 마지막 1개만 캐시 (ReplayProcessor 대체)\n\n\n\n---\n\n",vb=Object.freeze(Object.defineProperty({__proto__:null,default:yb},Symbol.toStringTag,{value:"Module"})),Sb=`---
summary: 이 글에서는 Reactor 체인에서 “어디서, 왜 스레드가 바뀌는지”를 Schedulers, publishOn, subscribeOn 중심으로 정리했습니다.
tags:
  - 리액티브 프로그래밍
  - 웹플럭스
  - 리액터
  - Thread
  - Scheduler
created_date: 2026-01-21 15:39:21
last_modified_date: 2026-01-21 15:39:21
---


리액터로 작성된 코드를 보면, 같은 비즈니스 로직인데도 로그에 찍히는 스레드 이름이 \`reactor-http-nio-*\`, \`boundedElastic-*\`, \`parallel-*\`처럼 제각각인 경우가 많습니다.  \`Spring Web MVC\` 기반 스프링부트 프로젝트에 익숙하시다면, 하나의 HTTP 요청이 톰캣 워커 스레드 하나에서 처리되는 패턴에 익숙할 테니 이런 스레드 전환이 더 낯설게 느껴질 수 있습니다.

**하지만 리액터라고 해서 항상 여러 스레드를 오가며 실행되는 것은 아닙니다.**  별도의 스케줄러를 사용하지 않으면 체인 전체가 하나의 스레드에서만 동작하고, \`Spring WebFlux\`처럼 프레임워크가 정해 둔 기본 스레드(이벤트 루프 등) 위에서만 실행되는 경우도 많습니다. 
만약 **스케줄러를 직접 설정하거나, 프레임워크 내부에서 다른 스레드 풀을 사용하는 구간이 있을 때에만 체인 일부가 다른 스레드로 옮겨 가고, 그 스레드 이름이 로그에 드러나는 것**입니다. 

문제는 “어디서, 왜 스레드가 바뀌는지”를 모른 채 코드를 작성하면, 디버깅이 어려워져 병목 구간이 생겨도 원인을 쉽게 짚어내지 못한다는 점입니다. **이번 글에서는 리액터에서 스레드가 바뀌는 지점과 바뀌는 이유에 대해 알아보겠습니다.**

---

# 리액터: 스레드와 스케줄러 위에 서 있는 모델

일반적인 의미에서의 스레드와 스케줄러를 먼저 짚고 가겠습니다.

> **스레드(Thread):** 실제로 작업이 실행되는 실행 단위;
> **스케줄러(Scheduler):** 여러 작업(또는 스레드)을 어떤 순서와 규칙으로 CPU에 올릴지 결정하는 스케줄링 정책;

일반적으로 리액터 코드는 발행자(\`Publisher\`), 구독자(\`Subscriber\`), 여러 개의 연산자(\`Operator\`)로 구성되고, 이것들이 하나의 파이프라인을 이룹니다. 이러한 파이프라인에 **따로 스케줄러를 추가하지 않으면 이 코드는 보통 하나의 스레드 위에서만 동작** 하며, 이러한 파이프라인에 \`외부 API 호출\` 또는 \`DB I/O\` 처럼 블로킹 구간이 존재한다면, 그 부분이 끝날 때까지 뒤에 이어진 작업들도 함께 블로킹될 수밖에 없습니다.

리액터가 진짜 힘을 발휘하는 지점도 바로 여기입니다. 적은 수의 스레드로 최대한 많은 작업을 처리하려면, **블로킹 구간은 중요한 스레드에서 분리하고, 가벼운 연산은 한 스레드에 묶어 두도록 체인을 설계해야 합니다.** 

다시 말해, **“적은 수의 스레드로 논블로킹하게 많은 작업을 처리하겠다”** 는 리액터의 목표를 제대로 살리려면, **어느 구간을 함께 묶고 어느 지점에서 스레드를 갈아탈지, 스레드와 스케줄러 관점에서 실행 경계를 의도적으로 설계해 줘야 합니다.**

이걸 이해하려면 먼저, 아무런 스케줄러를 쓰지 않았을 때 체인이 어떻게 동작하는지, 즉 **“하나의 스레드에서만 도는 기본 모델”** 부터 짚고 넘어가는 게 좋습니다.



---

## 리액터: 하나의 스레드에서 동작한다.

스케줄러를 사용하지 않는 가장 단순한 경우부터 보면 이해하기 쉽습니다. 아래 코드처럼 **아무 스케줄러도 쓰지 않고 \`main\` 스레드에서 바로 구독하면, 체인 전체가 \`main\` 스레드 하나에서만 실행**됩니다.

- **스케줄러를 추가하지 않은 예제**
  \`\`\`java
  public class NoSchedulerDemo {

      public static void main(String[] args) {
          Flux.just(1, 2, 3)
              .map(i -> {
                  System.out.printf("[%s] map: %d%n",
                          Thread.currentThread().getName(), i);
                  return i * 10;
              })
              .filter(i -> {
                  System.out.printf("[%s] filter: %d%n",
                          Thread.currentThread().getName(), i);
                  return i < 15;
              })
              .subscribe(i ->
                  System.out.printf("[%s] subscribe: %d%n",
                          Thread.currentThread().getName(), i)
              );
      }
  }
  \`\`\`

- **출력 로그**
  \`\`\`shell
  [main] map: 1
  [main] filter: 10
  [main] subscribe: 10
  [main] map: 2
  [main] filter: 20
  [main] map: 3
  [main] filter: 30
  \`\`\`

위 로그에서 \`map\`과 \`subscribe\`에서 찍히는 모든 로그의 스레드 이름이 \`main\`인 것을 확인할 수 있습니다.
따로 스케줄러를 전혀 건드리지 않았을 때 리액터 체인이 따르는 가장 기본적인 스레드 모델이 바로 이런 형태입니다.

--- 

### 하나의 스레드에 블로킹 구간이 끼어들면?

이 구조가 문제가 되는 순간은, 이 한 스레드 모델 안에 **오래 걸리는 블로킹 작업이 끼어 있을 때**입니다.

예를 들어 위 코드의 **map 구간에서 외부 API 호출이나 DB I/O처럼 수십~수백 ms 이상 걸리는 작업을 수행한다고 가정**해 보겠습니다.
그러면 **그 시간 동안 이 스레드는 그 작업만 처리하느라 바빠지고, 뒤에 이어진 filter와 subscribe 구간도 모두 그 스레드가 다시 “비는 순간”까지 그대로 멈춰 서 있게 됩니다.**

간단한 데모로, map 안에 \`Thread.sleep(...)\`을 잠깐 추가해 보면 여전히 모든 로그는 main 스레드에서 찍히지만, 각 로그 사이의 간격이 눈에 띄게 벌어지는 걸 바로 확인할 수 있습니다. **겉으로는 리액터 연산자가 이어진 비동기 체인처럼 보이지만, 실제 실행 흐름만 놓고 보면 한 스레드 위에서 순서대로 막히는, 동기/블로킹 코드와 크게 다르지 않은 동작이 되어 버리는 셈입니다.**



---

## 리액터: 스레드 분리하기

[하나의 스레드에 블로킹 구간이 끼어들면](#하나의-스레드에-블로킹-구간이-끼어들면) 에서 보았듯이, 하나의 스레드로 동작하는 구성에서 블로킹 구간이 끼어들면 그 구간이 끝날 때까지 뒤에 이어진 작업들이 모두 함께 멈추게 되어 전체 처리량이 눈에 띄게 떨어집니다. 이 문제를 해결하려면 **병목이 되는 블로킹 구간만 별도의 스레드(또는 스레드 풀)로 떼어내고, 나머지 구간은 기존 스레드 위에 그대로 두어 이벤트 루프나 중요한 스레드를 막지 않도록 설계**해야 합니다.

이를 위해 리액터는 체인 중간이나 시작 지점의 실행 스레드를 바꿀 수 있는 두 가지 연산자, **\`publishOn\`과 \`subscribeOn\`을 제공**합니다. **\`publishOn\`은 “여기부터 아래 연산자들”의 실행 컨텍스트를 다른 스케줄러로 옮기는 역할**을 하고, **\`subscribeOn\`은 “체인이 어디에서 구독·요청을 시작할지”를 지정해서 소스 구간 전체를 다른 스레드로 이동시키는 역할**을 합니다. 

이제 간단한 예제를 통해 두 연산자가 실제로 어떻게 동작하는지 차례대로 살펴보겠습니다.


---

### publishOn: 체인 중간에서 스레드 바꾸기

**\`publishOn(Scheduler scheduler)\`** 은 **“지금까지는 그대로 두고, 이 지점부터 아래쪽 연산자들만 다른 스레드에서 실행하고 싶을 때” 쓰는 연산자**입니다. 위치 기준으로 동작하기 때문에, 체인 어디에 두느냐가 **곧 “어디서 스레드를 갈아탈지”를 의미**합니다.



- **\`publishOn(Scheduler scheduler)\` 예제**
  \`\`\`java
  public class PublishOnDemo {

      public static void main(String[] args) {
          Flux.range(1, 3)
              .map(i -> {
                  System.out.printf("[%s] map 1: %d%n",
                          Thread.currentThread().getName(), i);
                  return i;
              })
              .publishOn(Schedulers.boundedElastic()) // 여기서부터 스레드 전환
              .map(i -> {
                  System.out.printf("[%s] map 2: %d%n",
                          Thread.currentThread().getName(), i);
                  return i * 10;
              })
              .subscribe(i ->
                  System.out.printf("[%s] subscribe: %d%n",
                          Thread.currentThread().getName(), i)
              );
      }
  }
  \`\`\`

- **출력 로그**
  \`\`\`shell
  [main] map 1: 1
  [main] map 1: 2
  [main] map 1: 3
  [boundedElastic-1] map 2: 1
  [boundedElastic-1] subscribe: 10
  [boundedElastic-1] map 2: 2
  [boundedElastic-1] subscribe: 20
  [boundedElastic-1] map 2: 3
  [boundedElastic-1] subscribe: 30
  \`\`\`

위 예제를 실행해 보면, 첫번쨰 \`map\` 까지는 \`main\` 스레드에서 실행되나, 두번째 \`map\`와 \`subscribe\`는 \`boundedElastic-…\` 같은 이름의 스레드에서 찍히는 걸 볼 수 있습니다. 즉, **\`publishOn\`은 “업스트림에서 내려오는 시그널(onNext, onComplete, onError)을 받아, 그 이후 구간만 지정한 스케줄러 위에서 처리하게 만드는 연산자”** 라고 이해하면 됩니다.

	

---

### subscribeOn: 체인 시작 스레드 정하기

**\`subscribeOn(Scheduler scheduler)\`** 은 **“이 리액터 체인을 어느 스레드에서 시작할지”를 정하는 연산자**입니다. 체인 어디에 두더라도, 소스 \`Publisher\`와 그 업스트림의 시그널(\`subscribe\`, \`onSubscribe\`, \`request\`, \`onNext\`)이 **지정한 스케줄러에서 실행되도록 만드는 게 핵심**입니다.

- **\`subscribeOn(Scheduler scheduler)\` 예제**
  \`\`\`java
  public class SubscribeOnDemo {

      public static void main(String[] args) throws InterruptedException {
          Flux.range(1, 3)
              .map(i -> {
                  System.out.printf("[%s] map: %d%n",
                          Thread.currentThread().getName(), i);
                  return i * 10;
              })
              .subscribeOn(Schedulers.boundedElastic()) // 체인 시작 스레드 지정
              .subscribe(i ->
                  System.out.printf("[%s] subscribe: %d%n",
                          Thread.currentThread().getName(), i)
              );
      }
  }
  \`\`\`

- **출력 로그**
  \`\`\`java
  [boundedElastic-1] map: 1
  [boundedElastic-1] subscribe: 10
  [boundedElastic-1] map: 2
  [boundedElastic-1] subscribe: 20
  [boundedElastic-1] map: 3
  [boundedElastic-1] subscribe: 30
  \`\`\`

이 코드는 \`main\` 스레드에서 \`subscribe()\`를 호출하지만, 실제로 \`map\`과 \`subscribe\` 로그는 모두 \`boundedElastic-1\` 같은 이름의 스레드에서 찍힙니다. 즉, **\`subscribeOn\`이 “소스를 구독하는 작업 자체를 \`boundedElastic\` 스레드에서 수행해라”라고 지시**했고, 그 결과 **체인 전체가 그 스레드에서 시작되어 흘러가는 형태**가 됩니다.

정리하면, **\`subscribeOn\`은 “소스가 어느 스레드에서 값을 만들고 흘려보낼지”를 정하는 용도**이고, **\`publishOn\`은 “체인 중간의 어느 지점부터 다른 스레드에서 소비·가공할지”를 정하는 용도**라고 볼 수 있습니다


---

## 리액터: 여러가지 스케줄러

\`publishOn\`, \`subscribeOn\`에 이어서, 리액터에서 자주 쓰는 스케줄러들을 용도별로 정리해보았습니다.

| 스케줄러                        | 주요 용도                        | 스레드 특성                                                   | 언제 쓰면 좋은지                                      |
|---------------------------------|----------------------------------|----------------------------------------------------------------|--------------------------------------------------------|
| \`Schedulers.immediate()\`        | 스케줄링 없이 바로 실행          | 현재 호출한 **같은** 스레드에서 즉시 실행                     | 별도 스레드 전환이 전혀 필요 없을 때, 테스트용 |
| \`Schedulers.single()\`           | 단일 작업 큐, 순차 실행          | 공용 단일 스레드(또는 newSingle로 별도 생성), FIFO 순차 처리   | 로그 처리, 순서 보장이 중요한 가벼운 작업 |
| \`Schedulers.parallel()\`         | CPU 바운드 병렬 작업             | CPU 코어 수만큼의 고정 스레드 풀, 각 워커는 단일 스레드       | 빠른 계산/변환 작업, non-blocking 연산 병렬 처리 |
| \`Schedulers.boundedElastic()\`   | 블로킹 I/O 오프로딩              | “코어 수 × N” 수준의 제한된(bounded) 스레드 풀, 큐 포함       | DB/JDBC, 외부 API 호출 등 오래 걸리는 블로킹 작업 |
| \`Schedulers.fromExecutorService(executor)\` | 커스텀 실행 환경 연동 | 기존 \`ExecutorService\`를 감싼 스케줄러                        | 직접 구성한 스레드 풀이나 라이브러리용 executor를 쓰고 싶을 때 |

여기까지가 스레드와 스케줄러, 그리고 publishOn/subscribeOn의 기본 사용법입니다. 마지막으로, 실제 코드에서 어떤 스케줄러를 선택할지 고민될 때 참고할 수 있는 작은 체크리스트를 정리해 보았습니다.

- **어떤 스케줄러를 쓸지 헷갈릴 때**
  1. **이 구간은 CPU 계산 위주인가?** → \`Schedulers.parallel()\` 고려.
  2. **이 구간은 오래 기다리는 블로킹 I/O인가?** → \`Schedulers.boundedElastic()\` 으로 분리.
  3. **순서가 꼭 보장돼야 하는 가벼운 작업인가?** → \`Schedulers.single()\`.
  4. **굳이 스레드를 바꾸지 않아도 되는가?** → 스케줄러를 쓰지 않거나 \`Schedulers.immediate()\` 유지.

`,Tb=Object.freeze(Object.defineProperty({__proto__:null,default:Sb},Symbol.toStringTag,{value:"Module"})),xb=`---
summary: 리액티브 스트림즈(Reactive Streams) 구현체, 리액터(Reactor) 의 백프레셔와 여러가지 백프레셔 전략 알아보기
tags:
  - 자바
  - 웹플럭스  
  - 리액터
  - 백프레셔
created_date: 2026-01-15
---


# 백프레셔(Backpressure)란 ?

리액티브 스트림즈에서 **백프레셔(Backpressure)** 는 발행자(Publisher)와 소비자(Subscriber) 간 처리 속도 차이로 인한 문제를 해결하기 위하여 **발행자가 일방적으로 데이터를 푸시하는 것이 아닌, 소비자가 \`Subscription\` 을 통해 요청(request)하는 만큼만 데이터를 풀(Pull) 방식으로 처리하는 메커니즘**을 의미합니다.

---

## 백프레셔가 왜 필요할까?



리액티브 스트림 환경에서는 일반적으로 **업스트림(Upstream)에서 데이터를 발행하고 이를 다운스트림(Downstream)에서 소비하는 파이프라인 구조를 사용**합니다. 일반적으로 단일 스레드에서 **\`map()\`, \`filter()\`, \`concatMap()\`** 같은 연산자만으로 이루어진 단순 파이프라인이라면, 구독자가 **\`Subscription.request(n)\`** 으로 요청한 개수에 맞춰 한 요소씩 빠르게 처리됩니다. 그러나 **스레드가 달라지거나 상대적으로 느린 연산 — 외부 API 호출, DB 조회, 복잡한 비즈니스 로직 — 이 들어오는 구간에서는 업스트림과 다운스트림의 처리 속도 차이가 커질 수 있습니다.**

이러한 속도 차이가 발생하는 구간에서, 리액터는 **업스트림과 다운스트림 사이의 속도 차이를 완충하기 위해 내부 버퍼를 사용**합니다. 하지만 다운스트림이 충분히 따라오지 못하면 이 버퍼에 데이터가 계속 쌓이면서 처리 지연과 메모리 사용량이 증가하고, 심한 경우 시스템 과부하나 \`OOM(Out Of Memory)\`까지 이어질 수 있습니다.

---

### 내부 버퍼만으로 문제 해결 가능한가 ?

> **과연 내부 버퍼만으로 업스트림과 다운스트림 간 속도 차이로 발생하는 문제를 해결할 수 있을까요?** 

업스트림이 다운스트림의 처리 속도를 고려하지 않고 계속 데이터를 발행한다면, 내부 버퍼에 데이터가 점점 쌓이면서 처리 지연과 메모리 사용량이 증가하고, 심한 경우 시스템 과부하나 OOM(Out Of Memory)까지 이어질 수 있습니다. **다시 말해, 버퍼는 단지 속도 차이를 잠시 숨겨줄 뿐 근본적인 해결책은 되지 못합니다.**
​

이런 한계를 완화하기 위해 리액티브 스트림즈/리액터는 업스트림이 일방적으로 데이터를 밀어 넣는 **푸시(Push) 방식 대신**, 다운스트림이 **\`Subscription.request(n)\`** 으로 필요한 만큼만 요청하고 업스트림은 그만큼만 보내는 **풀 기반 백프레셔 방식을 사용**합니다.
​이러한 방식은 소비자가 **자신의 처리 능력에 맞춰 요청량을 조절**하기 때문에, **버퍼가 통제 없이 커지는 상황을 줄이고 시스템을 보다 안정적으로 운용**할 수 있습니다.



---

### 내부 버퍼는 어떻게 생겼을까 ?

리액터 내부 구현을 보면, 발행자(Publisher)와 구독자(Subscriber) 사이에서 데이터를 보관하고 전달하는 역할을 하는 핵심 추상화 중 하나가 \`QueueSubscription<T>\` 인터페이스입니다. 

- **reactor.core.Fuseable.QueueSubscription<T> 인터페이스**
  \`\`\`java
  interface QueueSubscription<T> extends Queue<T>, Subscription {
      T poll();
      boolean isEmpty();
      // fusion, size() 등
  }
  \`\`\`

\`QueueSubscription\` 인터페이스는 리액티브 스트림즈의 \`Subscription\` 과 큐(\`Queue\`) 역할을 함께 수행하는 인터페이스입니다. 위쪽으로는 \`request(long n)\`, \`cancel()\` 같은 메서드를 통해 “얼마나까지 데이터를 쌓아도 되는지”를 발행자에게 알려주고, 아래쪽으로는 \`poll()\`, \`isEmpty()\` 등을 통해 **내부 버퍼에 쌓인 데이터를 하나씩 꺼내 다운스트림으로 넘기는 큐 API를 제공**합니다. 

**다만 모든 연산자가 항상 \`QueueSubscription\` 필드를 직접 갖는 것은 아닙니다.** 리액터는 **성능 최적화를 위해 **operator fusion**이라는 기법을 사용**하는데, 이는 여러 연산자를 하나로 합쳐서 **불필요한 중간 버퍼와 신호 전파를 줄이는 방식**입니다. 업스트림이 fusion을 지원하면 그 큐를 재사용하고, 지원하지 않으면 별도 내부 큐를 만드는 식으로 유연하게 동작합니다.

정리하면, 리액터는 발행자와 구독자 사이에서 \`QueueSubscription\` 같은 구현체를 사용해 **“얼마나까지 쌓아둘 수 있는지(request(n))”와 “버퍼에 쌓인 데이터를 어떻게 꺼내 전달할지”를 한 번에 다루는 구조**를 취합니다. 이 덕분에 단순 동기 파이프라인에서는 버퍼가 눈에 띄게 커지지 않지만, 스케줄러 전환이나 느린 외부 연산이 끼어 업스트림이 더 빠르게 데이터를 만들어낼 때는, 같은 메커니즘이 곧바로 **“문제가 될 수 있는 버퍼 구간”** 으로 드러나게 됩니다.


--- 

### 백프레셔 이미지로 이해하기

> **아래 이미지는 Gemini 로 생성하였습니다.**

![풀(Pull) 기반 백프레셔 방식의 이점](리액터,_백프레셔와_여러가지_전략_백프레셔.png)

**푸시 방식(왼쪽)의 문제:**
- 발행자가 소비자 상태와 무관하게 계속 데이터를 밀어 넣어, 버퍼가 무한정 커지고 결국 \`OOM(Out Of Memory)\`으로 이어질 수 있습니다.

**풀 방식(오른쪽)의 이점:**
- 소비자가 \`request(n)\`으로 필요한 만큼만 요청하기 때문에, 버퍼 크기(Capacity: 256 items)를 미리 정해두고 그 안에서만 데이터가 흐르게 할 수 있습니다.
- 생산자는 소비자가 준비될 때까지 일시 정지(Paused) 상태가 되어, 시스템이 안정적으로 동작합니다.

---

지금까지 살펴본 것처럼, 리액티브 스트림즈의 기본 백프레셔 메커니즘은 **소비자가 \`request(n)\`으로 필요한 만큼만 요청하는 풀 방식**입니다. 하지만 실제 애플리케이션에서는 다운스트림이 요청한 속도보다 업스트림이 더 빠르게 데이터를 생산하는 상황이 발생할 수 있습니다.

리액터는 이런 상황에서 **"넘치는 데이터를 어떻게 처리할지"** 를 결정하는 여러 가지 백프레셔 전략을 제공합니다. 

---

## 여러가지 백프레셔 전략

리액터는 기본 \`Subscription.request(n)\` 풀 방식 외에 버퍼가 가득 찼을 때 넘치는 데이터를 어떻게 처리할지 결정하는 여러가지 백프레셔 전략들을 제공합니다.


### 백프레셔 전략: IGNORE

**\`IGNORE\` 전략**은 별도 백프레셔 전략을 지정하지 않고 **\`subscribe()\`만 호출했을 때 기본적으로 적용되는 전략**으로, **\`Subscriber\`의 \`request(n)\` 신호를 완전히 무시하는 전략**입니다. \`Publisher\`는 요청량과 관계없이 자신이 가진 모든 데이터를 무한 발행 시도하며, **내부 \`RingBufferQueue\`(기본 256개)가 가득 차면 예외(\`IllegalStateException\`)을 발생**시키며, **이 예외는 \`onError\` 신호로 변환되어 다운스트림 전체로 전파**됩니다. **스트림을 종료**합니다.

- **\`IGNORE\` 전략 예제**
    \`\`\`java
    Flux.range(1, 1000)
        .subscribe(System.out::println);
    \`\`\`

---

### 백프레셔 전략: ERROR

**\`ERROR\` 전략**은 리액터에서 제공하는 백프레셔 전략 중 **가장 “안전하게 실패”하는 전략**입니다. \`Subscriber\`가 \`request(n)\`으로 허용한 데이터 수만큼만 \`Publisher\`가 발행하도록 엄격히 제어합니다. 만일 **내부 버퍼 한도를 초과해 데이터를 발행하려는 순간 즉시 예외(\`IllegalStateException\`)을 발생**시키며, **이 예외는 \`onError\` 신호로 변환되어 다운스트림 전체로 전파**됩니다.


- **\`ERROR\` 전략 예제**
    \`\`\`java
    Flux.range(1, 1000)
        .onBackpressureError()
        .subscribe(i -> {
            Thread.sleep(10);  // 소비 지연
            System.out.println(i);
        });
    \`\`\`

---

### 백프레셔 전략: DROP

**\`DROP\` 전략**은 내부 버퍼(256개)의 **한도를 초과하여 발행된 데이터를 즉시 버리고 넘어가는 전략**입니다. 만일 내부 버퍼 한도보다 더 많은 데이터가 발행되면 **추가 데이터는 버퍼에 쌓지 않고 바로 버려집니다.** 다만 **\`IGNORE\`, \`ERROR\` 전략과는 달리 스트림은 정상적으로 계속 진행**되며 예외나 중단은 발생하지 않습니다.


- **\`DROP\` 전략 예제**
    \`\`\`java
    Flux.range(1, 1000)
        .onBackpressureDrop()
        .subscribe(System.out::println);
    \`\`\`

---

### 백프레셔 전략: LATEST

**\`LATEST\` 전략**은 **내부 버퍼(기본 256개)가 가득 찼을 때 최신 데이터 1개만 유지하고 기존 대기 데이터는 모두 버리는 전략**입니다. 새 데이터가 들어오면 \`Subscriber\`가 버퍼를 비워주기 전까지 기존 데이터 싹 버리고 최신 1개로 교체합니다. \`DROP\`(추가 데이터 버림)과 달리 **“마지막 상태”만 보존**하여 실시간 데이터에서 \`Subscriber\`가 준비되면 가장 최근 값을 받을 수 있으며, **스트림은 정상적으로 계속 진행**됩니다.

- **\`LATEST\` 전략 예제**
    \`\`\`java
    Flux.range(1, 1000)
        .onBackpressureLatest()
        .subscribe(System.out::println);
    \`\`\`


---

### 백프레셔 전략: BUFFER

**\`BUFFER\` 전략**은 **Publisher가 빠르게 데이터를 발행해도 모든 데이터를 메모리에 버퍼링하는 기본 전략**입니다. 내부 버퍼(기본 256개)가 가득 차면 자동으로 **버퍼 크기를 늘려**서 무한정 저장합니다. 이 전략은 내부 버퍼 사이즈를 변경하기 때문에 \`OOM(Out Of Memory)\`에 주의해야합니다.

- **\`BUFFER\` 전략 예제**
    \`\`\`java
    Flux.range(1, 10000)
        .onBackpressureBuffer()  // 모든 데이터 버퍼링
        .subscribe(System.out::println);
    \`\`\`



---

#### BUFFER + DROP LASTEST

**\`BUFFER + DROP LATEST\` 전략**은 고정 버퍼 크기에서 버퍼가 가득 찼을 때 새로 들어오는 **최신 데이터만 드롭하는 전략**입니다. 버퍼가 꽉 차면 **기존에 대기 중인 데이터들은 그대로 보존**하고, 새 데이터만 버리고 넘어갑니다. \`DROP\` 전략과 비슷하지만 버퍼 크기를 직접 지정할 수 있다는 점이 다릅니다.

- **\`BUFFER + DROP LATEST\` 전략 예제**
    \`\`\`java
    Flux.range(1, 10000)
        .onBackpressureBuffer(3, OverflowStrategy.DROP_LATEST)
        .subscribe(System.out::println);
    \`\`\`



#### BUFFER + DROP OLDEST

**\`BUFFER + DROP OLDEST\` 전략**은 고정 버퍼 크기에서 버퍼가 가득 찼을 때 **가장 오래된 데이터(큐 맨 앞)를 드롭하고 새 데이터를 추가**하는 전략입니다. 버퍼가 꽉 차면 **FIFO(First In First Out) 방식**으로 **가장 먼저 들어온 오래된 데이터를 버리고**, 새 데이터를 큐 뒤에 추가합니다. **“줄 서서 기다리다 제일 오래된 사람 먼저 내보내기”** 와 같습니다.

- **\`BUFFER + DROP OLDEST\` 전략 예제**
    \`\`\`java
    Flux.range(1, 10000)
        .onBackpressureBuffer(3, OverflowStrategy.DROP_OLDEST)
        .subscribe(System.out::println);
    \`\`\`



---

## 언제, 어떤 전략을 사용해야할까 ?

백프레셔 전략은 현재 처한 상황과 데이터 처리 정책에 따라 신중히 선택해야 합니다. 마지막으로 각 전략의 특징과 적합한 사용 상황을 간단히 정리하겠습니다.

| 전략 | 특징 | 사용 상황 |
|------|------|-----------|
| **IGNORE** | Subscriber의 request 신호 무시하고 무제한 발행 | Publisher가 Subscriber 속도 무시하고 싶은 경우 |
| **ERROR** | 버퍼 초과 시 예외 발생 | 데이터 손실 절대 불가한 상황 |
| **DROP** | 초과 새 데이터 즉시 버림 | 실시간 스트림, 과거 데이터 무관심 |
| **LATEST** | 최신 1개만 유지 | 실시간 최신 상태 (주식 시세, 센서) |
| **BUFFER + DROP_LATEST** | 버퍼 꽉 차면 새 데이터 드롭 | 과거 데이터 완전성 우선 (감사 로그) |
| **BUFFER + DROP_OLDEST** | 버퍼 꽉 차면 오래된 데이터 드롭 | 최근 N개 순차 처리 (채팅 메시지) |

`,Ab=Object.freeze(Object.defineProperty({__proto__:null,default:xb},Symbol.toStringTag,{value:"Module"})),Cb=`---
summary: 리액티브 스트림즈(Reactive Streams) 구현체, 리액터(Reactor) 한 번 써보기
tags:
  - 자바
  - 웹플럭스  
  - 리액터
  - 연산자
created_date: 2026-01-12
---

[지난 글](https://bak-libra26.co.kr/posts/%EA%B0%9C%EB%B0%9C/%EC%9E%90%EB%B0%94/%EB%A6%AC%EC%95%A1%ED%8B%B0%EB%B8%8C/%EB%A6%AC%EC%95%A1%ED%8B%B0%EB%B8%8C_%EC%8A%A4%ED%8A%B8%EB%A6%BC%EC%A6%88%EC%99%80_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%A6%AC%EC%95%A1%ED%84%B0) 에서 리액티브 스트림즈에서 명세한 4개의 인터페이스와 각 인터페이스가 어떻게 상호작용하는지 간단하게 알아봤습니다. 

- **Reactive Streams의 4대 인터페이스**
    - \`Publisher\`: 데이터를 발행
    - \`Subscriber\`: 데이터를 소비
    - \`Subscription\`: Publisher와 Subscriber를 연결
    - \`Processor\`: Publisher와 Subscriber를 모두 구현한 중개자

이번 글에서는 Reactor에서 이 인터페이스들을 실제 구현한 클래스들을 활용해 코드를 작성하는 방법을 알아보겠습니다.


--- 

## Publisher: 데이터를 생성하자

Reactor에서는 **\`Publisher\`를 구현한 대표적인 클래스가 \`Mono\` 와 \`Flux\` 입니다.** \`Mono\`는 0 ~ 1 개의 데이터를, \`Flux\`는 0 ~ N 개의 데이터를 **데이터 스트림** 으로 다룹니다.

\`데이터 스트림\` 이란 간단히 말하자면 컬렉션처럼 메모리에 이미 다 올라와 있는 값을 한 번에 처리하는 것이 아니라, **나중에 도착할 수도 있고, 여러 번 나눠서 도착할 수도 있는 데이터 흐름 전체를 하나의 스트림으로 표현한다** 는 의미입니다. 
말이 조금 이해하기 어려울 수 있어서, 아래 예시로 보는 게 더 이해하기 쉽습니다.

- **\`Mono\`:**

    > **상황:** **HTTP 요청 후, 응답 처리**
    > **예시:** 외부 API 호출한 경우, 요청 에 대한 응답이 정상적으로 올 수 있으나 에러가 발생하여 아무 값 없이 끝날 수 있습니다.
    > **결론:** 이렇게 **“언젠가 한 번 올 수도 있고, 안 올 수도 있는 결과”** 를 **\`Mono<Response>\`** 같은 형태로 표현합니다.

- **\`Flux\`:**
    
    > **상황:** **서버에서 계속 푸시되는 이벤트 스트림(SSE, WebSocket)**
    > **예시:** 값이 0개일 수도 있고, 몇 개만 오다가 끝날 수도 있고, 이론상 무한히 계속 들어올 수도 있습니다.
    > **결론:** 이런 **“시간을 두고 0 ~ N 개의 값이 흘러오는 흐름”** 를 **\`Flux<Event>\`** 로 표현합니다.

---

### Publisher: 기본 예제

Mono/Flux 를 생성하는 방법을 알아보겠습니다.

- 예제 코드
\`\`\`java
// Mono
public static <T> Mono<T> just(T data) { ... }a
public static <T> Mono<T> justOrEmpty(@Nullable Optional<? extends T> data) { ... }
public static <T> Mono<T> empty() { ... }

// Flux
public static <T> Flux<T> just(T... data) { ... }
public static <T> Flux<T> justOrEmpty(@Nullable Optional<? extends T> data) { ... }
public static <T> Flux<T> empty() { ... }

/**
 * Mono/Flux 실사용 예시
 */
Mono.just("Hello");
Mono.justOrEmpty(Optional.of("Hello"));
Mono.empty();

Flux.just("Hello", "World");
Flux.justOrEmpty(Optional.of("Hello"));
Flux.empty();
\`\`\`

위 예제처럼 \`Mono\`나 \`Flux\` 인스턴스는 \`just(..)\`, \`justOrEmpty(..)\`, \`empty(..)\` 같은 메서드를 사용해서 가장 단순하게 생성할 수 있습니다. 이렇게 Mono/Flux를 새로 만들어 내는 연산자를 **생성 연산자**라고 부르며, 이 세 가지 외에도 \`fromIterable()\`, \`fromCallable()\`, \`defer()\`처럼 다양한 생성 연산자가 존재합니다.

--- 

### Publisher: 여러가지 생성 연산자

- **\`just(data)\`:** 이미 값이 존재할 때
- **\`justOrEmpty(optional)\`:** 값이 있을 수도, 없을 수도 있을 때.
- **\`empty()\`:** 아무 값도 발행하지 않고 스트림을 끝내고 싶을 때.
- **\`fromIterable(iterable)\`:** 이미 있는 List, Set 같은 컬렉션을 Flux로 바꾸고 싶을 때.
- **\`fromCallable(supplier)\`:** 실행 시점에 동기 함수 하나를 호출해서 그 결과를 Mono로 감싸고 싶을 때.
- **\`defer(supplier)\`:** 구독할 때마다 새로 생성하고 싶을 때.

위 6가지 생성 연산자 이외에도 다양한 생성 연산자가 존재하며, 상황에 맞게 필요한 생성 연산자를 찾아서 사용하면 됩니다.

---

### Publisher: 생성한 후엔 ?

> - **흐름 상기하기**
> \`Publisher.subscribe(Subscriber)\` → \`Subscriber.onSubscribe(Subscription)\` → \`Subscription.request(n)\` → \`Subscriber.onNext(...)\`

위와 같이 여러 가지 생성 연산자가 존재하지만, 이들은 모두 **Mono/Flux 인스턴스를 새로 만들어 내는 생성 연산자**입니다. \`Mono.just(value)\`처럼 어떤 연산자는 이 시점에 이미 값을 Mono/Flux 안에 담아 두기도 하지만, 아직 Subscriber에게 값을 전달하지는 않습니다. 생성된 Mono/Flux는 이후 연산자를 체이닝하고, 마지막으로 \`subscribe()\`가 호출되는 시점에 비로소 내부에 들고 있던 값을 실제로 발행하기 시작합니다.

## Subscriber: 데이터를 소비하자.

\`Mono\`와 \`Flux\`는 생성만 해서는 아무 일도 일어나지 않고, 결국 **subscribe() 메서드를 통해 누군가가 데이터를 소비할 때** 비로소 흐름이 시작됩니다.

- **\`subscribe()\` 사용 예시**
    \`\`\`java
    // Mono.subscribe(Consumer<T> consumer)
    Mono.just("Hello World")
        .subscribe(System.out::println);

    // Flux.subscribe(Consumer<T> consumer)
    Flux.just("Hello", "World")
        .subscribe(System.out::println);
    \`\`\`

그렇다면 \`subscribe()\`는 언제, 어떤 식으로 사용하면 좋을까요? 

- **\`subscribe()\` 언제 호출할까 ?**
    1. 직접 subscribe()를 호출해 스트림을 끝내는 경우
        
        > 예시: 스케줄러, 배치 등

    2. 프레임워크가 내부에서 subscribe()를 대신 호출해주는 경우
    
        > 예시: 컨트롤러/핸들러 메서드가 Mono / Flux를 반환하는 WebFlux 애플리케이션


대부분의 경우 Spring WebFlux 를 사용해 개발하며, 이때는 프레임워크 내부에서 subscribe()를 호출해 주기 때문에 비즈니스 코드에서 직접 subscribe()를 호출할 일은 많지 않습니다. 
다만 스케줄러나 배치/백그라운드 작업처럼 반환값 없이 메서드 내부에서 스트림을 끝내야 하는 경우에는 직접 subscribe()를 호출해야 합니다.

---


## Operator: 데이터를 가공하자.

- **예제 코드**
    \`\`\`java
    Flux.just("Hello", "World")
        .map(String::toUpperCase)
        .filter(s -> s.startsWith("H"))
        .subscribe(System.out::println);
    \`\`\`

[Mono / Flux: 데이터를 생성하자](#Mono/Flux:데이터를생성하자) 와 [Subscriber: 데이터를 소비하자](#Subscriber:데이터를소비하자) 를 통해 위 예제의 1번째 줄(Flux.just…)과 4번째 줄(subscribe…)이 어떤 역할을 하는지는 살펴봤습니다. 그렇다면 2번째 줄과 3번째 줄, 즉 map()과 filter()는 어떤 역할을 하고 있을까요?

---

### Operator: 이해해보기

위 예제의 \`map()\`, \`filter()\` 와 같은 메서드를 리액터에서는 \`연산자(Operator)\` 라고 부릅니다. 자바 \`Stream API\` 에 익숙하시다면, 업스트림에서 들어온 데이터를 처리해서 다음 단계(다운스트림)로 넘겨주는 역할이라는 것도 쉽게 떠올릴 수 있을 것입니다.

\`리액티브 스트림즈\` 관점에서 보면 이 연산자들은 겉으로는 그냥 \`map()\`, \`filter()\` 메서드 호출처럼 보이지만, 실제로는 위에서 값 받아서 처리하고, 다시 아래로 흘려보내는 중간 단계로 동작합니다. \`리액터\` 내부에서는 \`FluxMap\`, \`FluxFilter\` 같은 클래스들이 이 일을 맡고 있는데, 이 친구들이 “위에서 받고 → 가공해서 → 아래로 전달하는” 역할을 합니다.


즉, 연산자는 \`map()\`, \`filter()\`와 같은 메서드를 의미하며, **위쪽에서 올라오는 데이터를 받아 가공한 뒤, 그 결과를 다시 아래쪽으로 전달하는 중간 처리자 역할을 하는 메서드*** 입니다.

---

### Operator: 마블 다이어그램(Marble Diagram)

리액터에는 셀 수 없을 정도로 많은 연산자가 존재합니다. 이러한 연산자를 모두 외우고 사용하려고 하면 결국엔 실용적이지 않습니다. 그렇다면 필요할 때마다 연산자를 찾아서 사용해야 하는데, 이때 가장 큰 도움이 되는 것이 바로 **마블 다이어그램(Marble Diagram)** 입니다.

마블 다이어그램은 각 연산자가 **데이터 스트림을 어떻게 변형시키는지 시간 흐름에 따라 시각적으로 보여주는** 도구입니다. \`IntelliJ IDEA\`, \`VS Code\` 같은 IDE, 또는 공식 문서에서 연산자를 검색해보면, 종종 이 마블 다이어그램이 함께 제공되는 것을 볼 수 있습니다. 

아래는 \`IntelliJ IDEA\` 에서 \`map\` 연산자의 마블 다이어그램입니다.

![map marble diagram](reactor_map_marble_diagram.png)

위의 마블 다이어그램을 보면, 위쪽에는 원 모양의 값이 흘러가고, \`map(● → ■)\` 박스를 거친 뒤에는 아래쪽에서 네모 모양의 값으로 바뀌어 흘러가는 모습으로 표현됩니다. **즉, 입력 값이 어떤 형태로 들어와서, 연산자를 통과한 후 어떤 형태의 값으로 변환되는지를 한눈에 이해할 수 있게 도와주는 시각화** 입니다.

만약 새로운 연산자를 처음 접했을 때는, Javadoc이나 공식 문서에 있는 마블 다이어그램을 한 번 훑어보면서 “어떤 입력이 들어오면 어떤 출력이 나가는지”를 그림으로 먼저 이해하고, 그 다음에 코드 예제를 보면 좀 더 쉽게 새로운 연산자를 이해할 수 있습니다.

---

> - **정리하기**
> \\> \`Mono\` / \`Flux\`로 **데이터 스트림을 만들고**
> \\> 그 사이에 여러 **연산자(Operator)를 체이닝해 값을 가공한 다음**
> \\> 마지막에 \`subscribe()\`가 호출되는 순간 **실제로 데이터가 흘러가며 소비된다**

`,Eb=Object.freeze(Object.defineProperty({__proto__:null,default:Cb},Symbol.toStringTag,{value:"Module"})),Rb=`---
summary: 리액티브 스트림즈(Reactive Streams)와 프로젝트 리액터(Project Reactor)에 대해서 알아보자.
tags:
  - 자바
  - 리액티브 스트림즈
  - 리액터
created_date: 2025-12-31 12:01:23
last_modified_date: 2025-12-31 12:01:23
---

# 리액티브 스트림즈와 프로젝트 리액터(Project Reactor)

**리액티브 스트림즈(Reactive Streams) 는 비동기 스트림을 논블로킹 방식으로 처리하면서, 생산자와 소비자 사이의 속도 차이를 제어하기 위한 표준 사양** 입니다. 

**자바/JVM 생태계에서 서로 다른 라이브러리끼리도 호환되도록 하기 위해 \`Publisher\`, \`Subscriber\`, \`Subscription\`, \`Processor\` 네 가지 인터페이스와 백프레셔(Backpressure) 규약을 정의** 합니다.

---



## 리액티브 스트림즈(Reactive Streams)

기본적으로 리액티브 스트림즈가 제공하는 기본 인터페이스는 아래의 4가지입니다.

- **리액티브 스트림즈 인터페이스**
  - **Publisher**: 데이터를 발행하는 인터페이스
    \`\`\`java
    public interface Publisher<T> {
        public void subscribe(Subscriber<? super T> s);
    }
    \`\`\`
    
  - **Subscriber**: 데이터를 받아 처리하는 인터페이스
    \`\`\`java
    public interface Subscriber<T> {
        public void onSubscribe(Subscription s);
        public void onNext(T t);
        public void onError(Throwable t);
        public void onComplete();
    }
    \`\`\`

  - **Subscription**: Publisher와 Subscriber 사이의 연결 관계를 나타내며, 데이터 전달을 제어하는 인터페이스
    \`\`\`java
    public interface Subscription {
        public void request(long n);
        public void cancel();
    }
    \`\`\`
    
  - **Processor**: Publisher와 Subscriber의 역할을 모두 수행하는 중개자
    \`\`\`java
    public interface Processor<T, R> extends Subscriber<T>, Publisher<R> {
        public void onSubscribe(Subscription s);
        public void onNext(T t);
        public void onError(Throwable t);
        public void onComplete();
    }
    \`\`\`

---

### 리액티브 스트림즈에서 데이터가 흐르는 과정


1. **구독 시작**

   - 예제 코드
     \`\`\`java
     Publisher publisher = ...;
     Subscriber subscriber = ...;
  
     publisher.subscribe(subscriber);
     \`\`\`

     \`Subscriber\` 는 \`Publisher\` 에게 데이터를 전달받아 처리합니다. 이를 위해선 \`Subscriber\` 는 \`Publisher\` 구독를 구독해야합니다.  

2. **구독 연결 수립 (onSubscribe)**

   - 예제 코드
     \`\`\`java
     public void subscribe(Subscriber Subscriber) {
         Subscription subscription = ...;
         subscriber.onSubscribe(subscription);
     }
     \`\`\`

     \`Publisher\` 는 \`Subscriber\` 에게 데이터를 직접 전달해주는 것이 아닌 \`Subscription\` 을 통해 전달해줍니다.   

3. **데이터 요청 (request)**

   - 구독 시점에 데이터 요청하는 케이스 
     \`\`\`java
     public class CustomSubscriber implements Subscriber<T> {
         @Override
         public void onSubscribe (Subscription subscription){
             subscription.request(1);
         }
     }
     \`\`\`
  
   - 특정 이벤트에 데이터를 요청하는 케이스
     \`\`\`java
     public class CustomSubscriber implements Subscriber<T> {
         @Override
         public void onSubscribe (Subscription subscription){
             this.subscription = subscription;
         }
  
         public void onEvent () {
             subscription.request(1);
         }
     }
     \`\`\`
     
4. **데이터 전달 (onNext) 와 완료 (onComplete)**

   - 예제 코드
     \`\`\`java
     public class CustomSubscription implements Subscription {
      
         private final Iterator<String> it = ...; // 원본 데이터
         private Subscriber subscriber = ...;
  
         private long requested = 0;
         private boolean done = false;
      
         public void request(long n) {
             Iterator<String> iterator = it.iterator();
          
             if (done) return;
             if (n <= 0) {
               done = true;
               subscriber.onError(new IllegalArgumentException("n must be > 0"));
               return;
             }
    
             requested += n;
    
             while (requested > 0 && it.hasNext() && !done) {
               requested--;
               String name = it.next();
               subscriber.onNext(name);
             }
    
             if (!it.hasNext() && !done) {
               done = true;
               subscriber.onComplete();
             }
         }
     }
   
     \`\`\`

---

### 데이터 처리 흐름

> 아래 이미지는 \`Gemini\` 를 사용해 생성했습니다

![reactive-streams-flow.png](reactive-streams-flow.png)

--- 

### 데이터는 왜 이렇게 흐를까 ?

\`Subscriber\` 가 데이터 흐름의 주도권을 갖는 이유는 \`Subscriber\` 의 처리 능력에 맞춰 필요한 만큼만 데이터를 요청하기 때문에 **\`Publisher\` 와 \`Subscriber\` 사이 버퍼가 과도하게 쌓이는 것을 방지하고 시스템 성능과 안정성을 높이기 위해서** 입니다.

만약 \`Subscriber\` 가 아닌 \`Publisher\` 가 데이터 흐름의 주도권을 갖는다면, \`Publisher\` 는 실제로 데이터를 처리하는 \`Subscriber\` 의 상태를 모른 채 계속 메세지를 발행할 수 있고, 이로 인해 처리하지 못한 메세지는 큐에 끊없이 쌓여 자원 고갈 또는 지연 증가와 같은 문제가 발생할 수 있습니다.

**이러한 메커니즘을 리액티브 스트림즈에서는 백프레셔(Backpressure)라고 합니다.** 백프레셔는 \`Subscriber\` 가 \`Subscription.request(n)\` 을 통해 자신이 처리할 수 있는 데이터 개수를 명시적으로 알려 주고,
\`Publisher\` 는 이 요청 범위 안에서만 데이터를 발행하도록 함으로써, **빠른 생산자와 느린 소비자 사이의 속도 차이를 흡수하는 흐름 제어 전략** 입니다.


--- 

## 프로젝트 리액터Project Reactor)

> [**Reactor** is a fourth-generation reactive library, based on the **Reactive Streams specification**, for building non-blocking applications on the JVM](https://projectreactor.io/)

**[Project Reactor](https://projectreactor.io/) 는 리액티브 스트림즈 명세를 구현한 대표적인 라이브러리** 입니다. 리액티브 스트림즈 명세를 구현한 다른 라이브러리로는 \`RxJava\`, \`Akka Streams\`, \`Java 9 Flow API\` 가 있지만,
\`Reactor\` 는 **\`Spring WebFlux\` 의 기본 리액티브 엔진이 되는 중요한 라이브러리** 입니다.

\`Reactor\` 는 논블러킹 I/O, 백프레셔를 지원하며, \`Publisher\` 인터페이스를 구현한 **Mono(0~1), Flux(0~N) 라는 두 가지 리액티브 타입을 제공** 한다는 특징이 있습니다.

아래에서는 \`Reactor\` 에서 가장 많이 사용되는 \`Publisher\` 인 **\`Mono\`** 와 **\`Flux\`** 의 특징을 살펴보고 마치도록 하겠습니다. 


---

### Mono (0 ~ 1)

> **Reactor/Mono  : [공식 문서](https://projectreactor.io/docs/core/release/reference/coreFeatures/mono.html)**

- **Mono**는 0개 또는 1개의 데이터만 발행하는 \`Publisher\` 입니다.
- 주로 HTTP 요청의 응답이나 DB의 단건 조회처리와 같이 **"결과가 하나이거나 없는" 경우에 사용** 됩니다.


---


### Flux (0 ~ N)

> **Reactor/Flux  : [공식 문서](https://projectreactor.io/docs/core/release/reference/coreFeatures/flux.html)**

- **Flux**는 0개부터 N개(무한대 포함)의 데이터를 발행하는 \`Publisher\` 입니다.
- 리스트, 스트림 데이터, 이벤트 처리 등 **여러 개의 데이터가 지속적으로 들어오는 경우에 사용** 됩니다.



---
`,Mb=Object.freeze(Object.defineProperty({__proto__:null,default:Rb},Symbol.toStringTag,{value:"Module"})),Ob=`---

summary: 리액티브 프로그래밍에 대해서 알아보자.
tags:
  - 자바
  - 웹플럭스
  - 리액터
created_date: 2025-12-24 14:54:57
last_modified_date: 2025-12-24 14:54:57
---

# 리액티브 시스템Reactive System)과 리액티브 프로그래밍(Reactive Programming)

**리액티브 시스템(Reactive System)** 과 **리액티브 프로그래밍(Reactive Programming)** 을 직역하면 각각 **‘반응성 있는 시스템’**, **‘반응성 있게 프로그래밍하는 방식’** 정도로 이해할 수 있습니다.

**전통적인 Spring Web MVC 기반의 서버**는 **요청 하나당 하나의 스레드를 할당하여 처리하는 방식**이기 때문에 동시 요청 수가 적은 경우에는 빠른 응답 속도를 보이지만 동시 요청 수가 매우 많은 경우에는 응답 시간이 길어질 수 있습니다. 만약 외부 I/O 가 활발히 일어나는 요청의 경우, 응답 시간이 더욱 길어질 수 있겠죠. 

즉 **반응성 있는 시스템(Reactive System)** 이란 *요청을 무조건 빠르게 처리하는 시스템이 아닌, 동시에 많은 요청이 몰리더라도 응답시간을 일정하게 유지하도록 설계한 시스템* 을 의미합니다. 이러한 **반응성 있는 시스템** 을 구현하기 위해 **리액티브 프로그래밍** 이라는 개념이 등장하게 되었습니다.

> \\>\\> [리액티브 시스템 설계 원칙 보러가기](https://www.reactivemanifesto.org/)



## 리액티브 프로그래밍(Reactive Programming)

[위키백과 / 리액티브 프로그래밍](https://en.wikipedia.org/wiki/Reactive_programming) 에서는 리액티브 프로그래밍을 아래와 같이 정의하고 있습니다.

> **Reactive programming** is a **declarative programming paradigm** concerned with **data streams** and **the propagation of change.**

위 정의를 보면 리액티브 프로그래밍이란 **선언형 프로그래밍 패러다임** 으로 **데이터 스트림(Data Stream)**, **변경 전파(The propagation of change)** 를 주로 다루는 프로그래밍 패러다임이라는 것을 알 수 있습니다. 그렇다면 각각이 무엇을 의미하는지 알아보도록 하겠습니다.

---

### 선언형 프로그래밍(Declarative Programming)이란 ?

**선언형 프로그래밍** 이란, 명령형 프로그래밍(Imperative Programming) 방식과는 다르게 **어떻게** 하는 것이 아닌 **어떤 결과**를 얻고자 하는지 **선언**하는 방식을 의미합니다. 이해를 위해 명령형 프로그래밍 방식과 선언형 프로그래밍 방식을 사용해서 1부터 100까지의 숫자 중 짝수를 출력하는 코드를 작성해보겠습니다.

- **1부터 100까지 짝수 출력하기 / 명령형 프로그래밍**
  \`\`\`java
  for (int i = 1; i <= 100; i++) {
      if (i % 2 == 0) {
          System.out.println(i);
      }
  }
  \`\`\`

선언형 프로그래밍 방식은 아래와 같습니다.

- **1부터 100까지 짝수 출력하기 / 선언형 프로그래밍**
  \`\`\`java
  Stream.rangeClosed(1, 100)
      .filter(i -> i % 2 == 0)
      .forEach(System.out::println);
  \`\`\`

예시 코드에서 알 수 있듯이 **명령형 프로그래밍** 에서는 \`for\` 와 \`if\` 를 사용하여 **반복과 분기 흐름을 직접 제어**하면서 1부터 100까지의 숫자를 하나씩 짝수인지 검사하고 출력하는 절차 자체를 상세하게 명시해야합니다. 

반면 **선언형 프로그래밍** 에서는 1부터 100까지의 숫자 중 짝수만 골라서 출력하기 위해 \`rangeClosed\`, \`filter\`, \`forEach\` 와 같은 연산자를 조합해 **"무엇을 할지"만 선언하고, 실제 반복을 어떻게 수행할지는 라이브러리에 위임**합니다.

> 자바 8부터 도입된 람다를 비롯한 함수형 프로그래밍 개념이 아직 낯설게 느껴지신다면, **모던 자바 인 액션(Modern Java in Action)** 을 한 번 읽어보는 것을 추천드립니다.

---

### 데이터 스트림(Data Stream) 이란 ?

리액티브 프로그래밍에서 이야기하는 **데이터 스트림(Data Stream)** 이란, **값 하나를 다루는 것이 아니라 시간에 따라 순서대로 흘러오는 데이터(이벤트)의 연속적인 흐름** 을 의미합니다. 

- **데이터 스트림 예시**
  1. 초당 수백 수천 건씩 발생하는 HTTP 요청들
  2. 메세지 큐(Kafka, RabbitMQ 등)에 전달되는 메세지들

위의 데이터 스트림 예시에서 알 수 있듯, 데이터 스트림은 한 번에 값 하나가 아니라 시간에 따라 순서대로 흘러오는 데이터들의 흐름 전체를 의미하며 이러한 데이터 스트림 위에 \`map\`, \`flatMap\`, \`filter\`, \`collect\` 등의 연산자를 선언적으로 사용하여 **데이터를 처리**하고, **처리된 데이터를 다른 데이터 스트림으로 전달**하는 방식을 **리액티브 프로그래밍** 이라고 합니다.

---

### 변경 전파(The propagation of change) 란 ?

**변경 전파(The propagation of change)** 란, 어떤 값이나 데이터 흐름이 변경되었을 때 그 값에 의존하고 있는 다른 값이나 연산까지 변화가 자동으로 전달·반영되는 것을 의미합니다.. 예를 들어 상위 메서드 체인에서 값을 변환하면, 그 **변환된 값이 그대로 하위 메서드 체인으로 흘러가면서** 다시 처리되는 동작이 변경 전파의 한 형태라고 볼 수 있습니다.

- **변경 전파 예시**
  \`\`\`java
  IntStream.rangeClosed(1, 10)
    .map(i -> Math.pow(i, 2)) // 제곱: 1,4,9,...,100
    .map(i -> "제곱한 값은 " + i + "입니다.") // 위에서 바뀐 값을 문자열로 변환
    .forEach(System.out::println); // 최종 출력
  \`\`\`

위 코드에서 일어나는 일을 단계별로 보면 다음과 같습니다.

1. \`rangeClosed(1, 10)\` 에서 1부터 10까지의 숫자가 순서대로 스트림으로 흘러옵니다.
2. 첫 번째 \`map\` 에서 각 숫자는 제곱되어 \`1, 4, 9, ..., 100\` 으로 **값이 변경**됩니다.
3. 두 번째 \`map\` 은 이 **변경된 값들**을 입력으로 받아 \`"제곱한 값은 4입니다."\` 같은 문자열로 다시 변환합니다.  

위의 예시 코드의 핵심은 앞 단계의 \`map\` 에서 값이 한 번 바뀌면, 그 “바뀐 값”이 자동으로 다음 \`map\` 으로 전달되고, 그 다음 연산들도 모두 이 변경된 값을 기준으로 다시 수행된다는 점으로 이와 같이 **상위 연산에서의 변화가 하위 연산들로 자연스럽게 흘러 내려가며 전체 처리 과정이 갱신되는 것**을 리액티브 프로그래밍에서는 **변경 전파**라고 합니다.

---

### 비동기 · 논블로킹 I/O

**비동기·논블로킹 I/O** 는 I/O 작업을 요청해 놓고 결과를 기다리며 스레드가 멈춰있지 않고, 그 사이에 다른 요청을 계속 처리할 수 있게 해 주는 방식을 말합니다. 기존의 **블로킹 I/O 방식** 은 처리 지연 또는 외부 I/O 응답을 기다리는 동안 스레드가 대기 상태가 되기 때문에 자원을 효율적으로 사용하여 좋은 성능을 내기 어렵지만, **논블로킹 I/O 방식** 은 요청 직후 바로 제어권이 돌아와 동일한 스레드로 여러 I/O 작업을 번갈아 처리할 수 있습니다.

리액티브 프로그래밍은 이러한 논블로킹 I/O 위에서 데이터 흐름을 이벤트 스트림으로 다루면서, 적은 스레드로 많은 동시 요청을 처리하는 것을 목표로 하며, 비동기 · 논블로킹 I/O 와 관련된 자세한 내용은 추후에 따로 알아보도록 하겠습니다.

`,wb=Object.freeze(Object.defineProperty({__proto__:null,default:Ob},Symbol.toStringTag,{value:"Module"})),Db=`---
summary: GitHub Pages로 올린 개인 블로그에 댓글 기능을 붙이기 위해 Utterances, Disqus, Giscus 같은 도구들을 비교해 보고, 그중 Giscus를 선택한 이유와 실제 적용 방법을 정리한 글입니다. 
tags: 
references:
created_date: 2026-03-03T18:09:52.000Z
last_modified_date: 2026-03-03T18:09:52.000Z
visibility: hidden
---

> 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다.


## JWT(JSON Web Token)는 무엇인가

JWT(JSON Web Token)는 토큰 기반 인증에서 인증과 인가 정보를 함께 담아 클라이언트와 서버가 주고받는 토큰으로,
주로 로그인 이후 사용자의 신원과 권한을 증명할 때나 여러 서버나 마이크로서비스 사이에서 공통된 인증 수단으로 사용할 때 사용됩니다.

토큰 안에는 **“사용자가 누구인지, 어떤 권한을 가졌는지”** 같은 내용을 JSON 형태로 담아 두고, 여기에 서명을 붙여 두기 때문에 서버는 매 요청마다 이 토큰이 중간에 위조되었는지만 확인하면 되고, 서명이 유효하다면 토큰 안에 담긴 사용자 정보와 권한을 그대로 신뢰할 수 있습니다.
`,jb=Object.freeze(Object.defineProperty({__proto__:null,default:Db},Symbol.toStringTag,{value:"Module"})),kb=`---
summary: 스프링 시큐리티에서 CORS를 처리하는 세 가지 레이어(Servlet-level, Security-level, MVC-level)의 아키텍처를 완벽히 이해하고, 각 방식의 차이와 올바른 선택 기준을 배우는 실무 가이드.
tags: 
references:
  - https://docs.spring.io/spring-framework/reference/web/webmvc-cors.html
  - https://docs.spring.io/spring-security/reference/servlet/integrations/cors.html
created_date: 2026-03-04T20:09:52.000Z
last_modified_date: 2026-03-04T22:09:52.000Z
---

> 이 글에서는 프리플라이트 요청이 왜 필요한지, Servlet-level·Security-level·MVC-level 세 가지 방식에서 CORS를 처리하는 방법, 그리고 실제 CORS 에러가 났을 때 어디를 확인해야 하는지 정리합니다.


## CORS(Cross-Origin Resource Sharing)란 무엇인가

CORS(Cross-Origin Resource Sharing)는 브라우저의 동일 출처 정책 때문에 기본적으로 차단되는, 다른 출처(도메인·포트·프로토콜)에서 오는 HTTP 요청 전반에 대해 서버가 특정 조건에 한해 접근을 허용할 수 있게 해주는 HTTP 헤더 기반 메커니즘입니다.

브라우저는 이 규약을 바탕으로, 서버가 응답에 어떤 CORS 관련 헤더(예: Access-Control-Allow-Origin, Access-Control-Allow-Methods 등)를 붙였는지를 보고 cross-origin 응답을 자바스크립트에서 읽을 수 있도록 허용할지 결정합니다.

> **(참고) 출처(Origin)는 프로토콜 + 도메인 + 포트 조합을 의미한다.**
> 
> - http://localhost:3000, http://localhost:8080 : 포트가 다르기 때문에 서로 다른 출처이다.
> - http://example.com, https://example.com :  프로토콜이 다르기 때문에 다른 출처로 취급된다.




---

### 브라우저는 CORS 요청을 어떻게 보내는가

- **브라우저의 CORS 요청 흐름**
    ![cors-options-request-diagram](cors-options-request-diagram.png)

    위 이미지는 브라우저가 프리플라이트 요청과 실제 요청을 어떤 순서로 보내고, 서버의 CORS 응답 헤더를 어떻게 사용하는지를 정리한 다이어그램입니다.


---

#### 다른 출처로 HTTP 요청하기 

\`\`\`javascript
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify({ name: 'Alice' }),
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));
\`\`\`

위의 코드처럼 브라우저에서 자바스크립트로 다른 출처로 HTTP 요청을 보낼 때, 이 요청이 CORS 스펙에서 말하는 **단순 요청(simple request)** 조건을 만족하는지에 따라 동작이 달라집니다.

---

#### CORS의 단순 요청(simple request)


> (참고) 단순 요청의 정확한 조건(허용되는 메서드, 헤더, Content-Type 등)은 [MDN 문서](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#simple_requests)에서 확인 가능합니다.

간단하게 말하자면 단순 요청이란 아래 조건을 모두 만족하는 교차 출처 HTTP 요청을 의미합니다.

| 구분      | 단순 요청 조건                                        |
|---------|--------------------------------------------------------|
| **메서드**   | GET, HEAD, POST 중 하나인 경우                         |
| **요청 헤더** | 브라우저가 기본으로 붙이는 단순 헤더만 포함, 커스텀 헤더 없음 (예: Accept, Accept-Language 등) |
| **본문 타입** | POST인 경우 Content-Type이 application/x-www-form-urlencoded, multipart/form-data, text/plain 중 하나인 경우 |

이 조건을 만족하는 단순 요청의 경우에 브라우저는 프리플라이트(OPTIONS) 없이 바로 요청을 보내고, 조건을 만족하지 않으면 프리플라이트(OPTIONS) 요청을 보낸 후, 실제 요청을 전송합니다.

---

#### 프리플라이트(OPTIONS)란?

단순 요청 조건을 만족하지 않는 교차 출처 요청에 대해, 브라우저가 **실제 요청을 보내기 전에 서버에 "이 요청을 보내도 되는지" 미리 묻기 위해 보내는 OPTIONS 요청**입니다.
OPTIONS 요청과 응답 시 주고받는 대표적인 헤더들은 다음과 같습니다.

- **프리플라이트(OPTIONS) 요청/응답에서 주로 사용하는 헤더** 
    <table>
      <thead>
        <tr>
          <th>종류</th>
          <th>헤더 이름</th>
          <th>의미</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="3"><strong>OPTIONS 요청</strong></td>
          <td><strong>Origin</strong></td>
          <td>요청을 보내려는 페이지의 출처</td>
        </tr>
        <tr>
          <td><strong>Access-Control-Request-Method</strong></td>
          <td>실제로 사용할 HTTP 메서드 (예: POST, PUT, DELETE)</td>
        </tr>
        <tr>
          <td><strong>Access-Control-Request-Headers</strong></td>
          <td>실제 요청에서 포함할 커스텀 헤더 목록</td>
        </tr>
        <tr>
          <td rowspan="3"><strong>OPTIONS  응답</strong></td>
          <td><strong>Access-Control-Allow-Origin</strong></td>
          <td>어떤 Origin을 허용할지</td>
        </tr>
        <tr>
          <td><strong>Access-Control-Allow-Methods</strong></td>
          <td>어떤 메서드를 허용할지</td>
        </tr>
        <tr>
          <td><strong>Access-Control-Allow-Headers</strong></td>
          <td>어떤 요청 헤더를 허용할지</td>
        </tr>
      </tbody>
    </table>

    브라우저는 이 OPTIONS 응답을 보고 실제 요청을 전송할지, 그리고 이후 응답을 자바스크립트에서 **읽을 수 있도록 허용할지** 최종적으로 결정합니다.


---


## CORS는 결국 어떻게 해결하나

브라우저에서 자바스크립트로 다른 출처의 서버에 HTTP 요청을 보내는 경우, 
서버가 응답에 \`Access-Control-Allow-Origin\`, \`Access-Control-Allow-Methods\`, \`Access-Control-Allow-Headers\` 같은 CORS 헤더를 어떻게 설정했는지에 따라 브라우저가 **이 응답을 자바스크립트에서 읽을 수 있는지가** 결정됩니다.

이를 위해 서버는 브라우저가 보낸 프리플라이트(OPTIONS) 요청에 대해 적절한 CORS 응답 헤더를 포함해 응답을 내려줘야 합니다.
그렇다면 스프링으로 만든 서버에서는 프리플라이트(OPTIONS) 요청과 실제 요청을 처리할 때 CORS를 어떻게 설정해야 할까요?

---

### 스프링 MVC의 CORS 처리


Spring MVC에서는 아래 3가지 방식으로 CORS를 허용할 수 있지만,
실무에서는 보통 \`WebMvcConfigurer\` 또는 \`CorsFilter\` 중 **하나를 전역 설정의 기준**으로 삼고,
\`@CrossOrigin\`은 예외적인 엔드포인트에만 제한적으로 사용하는 편입니다.



1. **\`@CrossOrigin\`**: 

    특정 컨트롤러/핸들러에만 예외적으로 CORS를 열어야 할 때.

2. **\`WebMvcConfigurer#addCorsMappings\`**: 

    MVC 전역에 공통 정책을 적용할 때 사용하는 기본 방법.

3. **\`CorsFilter\`**: 

    서블릿 필터 체인에서 CORS를 제어해야 하거나, 보다 세밀한 필터 기반 구성이 필요할 때 선택할 수 있는 대안.




---

#### 컨트롤러/메서드 단위로 적용하기

Spring MVC에서 특정 컨트롤러나 핸들러 메서드에만 CORS를 허용하고 싶을 때는 \`@CrossOrigin\` 애노테이션을 사용합니다. 
이는 일부 엔드포인트만 예외적으로 열 때 유용하나 설정이 컨트롤러 곳곳에 흩어져 관리가 어려워질 수 있습니다.

- **컨트롤러 클래스에 @CrossOrigin 붙이는 예시**
  
  \`\`\`java
  // 컨트롤러 전체에 대해 특정 Origin 허용
  @CrossOrigin(origins = "http://localhost:3000")
  @RestController
  @RequestMapping("/api/users")
  public class UserController {
  
      @PostMapping
      public User createUser(@RequestBody CreateUserRequest request) {
          // ...
      }
  
      @GetMapping("/{id}")
      public User getUser(@PathVariable Long id) {
          // ...
      }
  }
  \`\`\`

  ---

- **\`@CrossOrigin\` 어노테이션을 사용한 CORS 허용 예시**

  \`\`\`java
  @RestController
  @RequestMapping("/api/users")
  public class UserController {
  
      @CrossOrigin(origins = "http://localhost:3000")
      @PostMapping
      public User createUser(@RequestBody CreateUserRequest request) {
          // ...
      }
  }
  \`\`\`

---


#### CorsFilter 로 전역 설정하기

\`CorsFilter\`는 스프링이 제공하는 서블릿 필터로, 브라우저가 보내는 프리플라이트(OPTIONS) 요청과 실제 요청을 가로채서 필요한 CORS 헤더를 대신 붙여주는 역할을 합니다.

\`\`\`java
@Configuration
public class CorsFilterConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);

        return new CorsFilter(source);
    }
}
\`\`\`

---


#### WebMvcConfigurer 로 전역 설정하기

CORS 정책을 여러 컨트롤러에 공통으로 적용하고 싶다면 \`WebMvcConfigurer\`의 \`addCorsMappings\`로 전역 설정을 두는 것이 가장 관리하기 쉽습니다. 
아래와 같이 설정해 \`/api/**\`에 매핑된 모든 핸들러에 같은 CORS 정책이 적용할 수 있습니다.

\`\`\`java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // CORS를 허용할 경로 지정
                .allowedOrigins("http://localhost:3000") // 허용할 Origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
\`\`\`

---

### 스프링 시큐리티의 CORS 처리

스프링 시큐리티에서는 \`http.cors()\` 설정을 통해 CORS 처리를 활성화합니다.
이 설정을 켜면 시큐리티는 내부적으로 CORS 전용 필터(\`CorsFilter\`)를 \`SecurityFilterChain\`에 등록하고,  
**시큐리티 필터 체인 단계에서** 브라우저가 보내는 프리플라이트(OPTIONS)와 실제 요청에 CORS 응답 헤더를 추가합니다.


\`\`\`java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http
        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
        // ... 기타 보안 설정
        .build();
}
\`\`\`

---

#### CorsFilter는 요청을 어떻게 분류할까?


- **CorsFilter 내부 코드**

  \`\`\`java
  public class CorsFilter extends GenericFilter {
  
      @Override
      public void doFilter(final ServletRequest servletRequest, final ServletResponse servletResponse,
                           final FilterChain filterChain) throws IOException, ServletException {
  
          HttpServletRequest request = (HttpServletRequest) servletRequest;
          HttpServletResponse response = (HttpServletResponse) servletResponse;
  
          // 이 요청이 어떤 타입의 CORS 요청인지 판별
          CorsFilter.CORSRequestType requestType = checkRequestType(request);
      }
  }
  \`\`\`

- **CorsFilter 의 단순 요청 판단 메서드**
  
  \`\`\`java
  protected CORSRequestType checkRequestType(final HttpServletRequest request) {
    ...
    switch (method) {
      case Method.OPTIONS:
        ...
        return CORSRequestType.ACTUAL;
        
      case Method.GET:
      case Method.HEAD:
        return CORSRequestType.SIMPLE;
        
      case Method.POST:
        String mediaType = MediaType.parseMediaTypeOnly(request.getContentType());
        if (mediaType == null || SIMPLE_HTTP_REQUEST_CONTENT_TYPE_VALUES.contains(mediaType)) {
          return CORSRequestType.SIMPLE;
        }
        break;
    }
    return CORSRequestType.ACTUAL;
  }
  \`\`\`

  \`checkRequestType\`는 요청의 메서드, 헤더, Content-Type 등을 기준으로 이 요청이 단순 요청(SIMPLE)인지, 실제 CORS 요청(ACTUAL)인지, 프리플라이트인지 등을 판별하는 역할만 담당합니다.


---

#### CorsFilter가 요청 타입별로 처리하는 방식

\`CorsFilter\`는 결과적으로 \`checkRequestType\`에서 판별한 결과에 따라  
단순/실제 CORS 요청은 \`handleSimpleCORS\`, 프리플라이트 요청은 \`handlePreflightCORS\`,  
CORS가 아닌 요청은 \`handleNonCORS\`, 스펙을 위반한 요청은 \`handleInvalidCORS\`로 보내는 분기 역할을 수행합니다.

\`\`\`java
public class CorsFilter extends GenericFilter {

    @Override
    public void doFilter(final ServletRequest servletRequest, final ServletResponse servletResponse,
                         final FilterChain filterChain) throws IOException, ServletException {
  
      ...

        switch (requestType) {
            case SIMPLE:
                // Handles a Simple CORS request.
            case ACTUAL:
                // Handles an Actual CORS request.
                this.handleSimpleCORS(request, response, filterChain);
                break;
            case PRE_FLIGHT:
                // Handles a Pre-flight CORS request.
                this.handlePreflightCORS(request, response, filterChain);
                break;
            case NOT_CORS:
                // Handles a Normal request that is not a cross-origin request.
                this.handleNonCORS(request, response, filterChain);
                break;
            default:
                // Handles a CORS request that violates specification.
                this.handleInvalidCORS(request, response, filterChain);
                break;
        }
    }
}
\`\`\`


---

### CORS 설정시 주의하자

![spring-cors-layers-architecture](spring-cors-layers-architecture.png)

---

위 다이어그램에서 보듯이, CORS 설정은 **적용되는 레이어가 서로 다릅니다.**
같은 "CORS"라는 단어지만, 어디에 설정하느냐에 따라 동작 지점과 우선순위가 달라지기 때문에,
CORS 에러가 발생했을 때는 **어느 레이어부터 확인해야 하는지** 알아야 합니다.

---

#### Servlet-level CORS


| 항목 | 내용 |
|------|------|
| **적용 레이어** | Servlet Filter Chain (DispatcherServlet 이전) |
| **범위** | 모든 요청에 적용 (모든 URL) |
| **언제 쓸까** | Spring MVC 외 다른 서블릿 엔드포인트까지 CORS 적용하고 싶을 때 |
| **설정 방식** | \`@Bean CorsFilter\` 또는 \`FilterRegistrationBean\` |



---

#### Security-level CORS


| 항목 | 내용 |
|------|------|
| **적용 레이어** | SecurityFilterChain (Servlet Filter Chain 내부) |
| **범위** | 모든 요청에 적용 (Security 관리 하) |
| **구조 차이** | Servlet-level \`CorsFilter\`는 서블릿 필터 체인에 직접 배치 / Security CORS는 \`DelegatingFilterProxy\` 내부의 \`SecurityFilterChain\`에 격리 |
| **언제 쓸까** | Spring Security를 쓰고 있으면 거의 필수 |
| **설정 방식** | \`http.cors().configurationSource(...)\` |



---

#### MVC-level CORS


| 항목 | 내용 |
|------|------|
| **적용 레이어** | HandlerMapping / HandlerExecutionChain (DispatcherServlet 이후) |
| **범위** | Spring MVC 핸들러만 (컨트롤러 메서드 단위) |
| **언제 쓸까** | 특정 핸들러/경로만 다른 CORS 정책을 원할 때 |
| **설정 방식** | \`WebMvcConfigurer.addCorsMappings()\` 또는 \`@CrossOrigin\` |



---

### CORS 에러 디버깅: 어디를 봐야 할까?

#### 프리플라이트(OPTIONS)가 아예 컨트롤러까지 안 온다면 ?

1. Servlet / Security 필터 체인에서 CORS가 막혔을 가능성  
2. \`CorsFilter\` / \`http.cors()\` 설정을 먼저 확인

---

#### 프리플라이트는 통과하는데 실제 요청에서만 터진다면 ?
   
1. DispatcherServlet 이후, MVC 핸들러 매핑 단계에서 문제  
2. \`WebMvcConfigurer.addCorsMappings\` / \`@CrossOrigin\` 설정 확인

---

#### 컨트롤러에 \`@CrossOrigin\`을 여러 곳에 붙였는데 들쭉날쭉하다면 ?

1. 로컬 설정과 전역 설정이 충돌하거나, 우선순위 규칙을 모를 가능성  
2. 전역 설정 하나로 통일하고, 정말 필요한 핸들러만 \`@CrossOrigin\`으로 예외 처리



---`,Nb=Object.freeze(Object.defineProperty({__proto__:null,default:kb},Symbol.toStringTag,{value:"Module"})),Lb=`---
summary: 스프링 시큐리티에서 CSRF 보호가 왜 필요한지, 세션·쿠키를 전제로 토큰이 언제 생성되고 어떻게 검증되는지, 그리고 REST API·SPA 환경에서 csrf().disable()과 CookieCsrfTokenRepository를 언제 어떻게 써야 하는지를 정리한 글입니다.
tags: 
references: 
created_date: 2026-03-03T20:09:52.000Z
last_modified_date: 2026-03-03T22:09:52.000Z
---

> 이 글에서는 세션·쿠키가 어떻게 동작하는지부터, CSRF가 왜 발생하는지, 그리고 스프링 시큐리티가 CSRF 토큰을 이용해 이를 어떻게 막는지 정리합니다.


## CSRF(Cross-Site Request Forgery)란 무엇인가

CSRF(Cross-Site Request Forgery)는 로그인 후 만들어진 세션과 쿠키를 악용해서 사용자가 의도하지 않은 요청을 대신 보내게 만드는 공격으로, 
웹 애플리케이션이 세션 방식을 사용할 때 브라우저가 해당 도메인의 쿠키를 요청마다 자동으로 전송하는 특성을 악용한 "요청 위조 공격"입니다.

---

### 세션·쿠키는 어떻게 만들어지는가

- **HttpSession 직접 사용**

    \`\`\`java
    @PostMapping
    public ResponseEntity<String> handleLoginRequest(
        HttpServletRequest request
    ) {
        HttpSession session = request.getSession();
        session.setAttribute("username", "SIM JUNGHUN");
    
        return ResponseEntity.ok("ok");
    }
    \`\`\`

    스프링과 같은 서블릿 기반 웹 애플리케이션에서는 HttpServletRequest.getSession()이 호출되는 시점에 서블릿 컨테이너(톰캣)가 세션을 생성하고, 세션 ID(JSESSIONID)를 만들며 이를 Set-Cookie 헤더로 브라우저에 내려보냅니다.

---

- **Spring Security 를 통한 HttpSession 사용** 

    \`\`\`java
    class SecurityContextPersistenceFilter extends GenericFilterBean {
        
        private void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {
            ...
            
            HttpSession session = request.getSession();
            
        }
        
    }
    \`\`\`

    스프링 시큐리티는 이런 작업을 SecurityContextPersistenceFilter.doFilter() 안에서 수행하며, 여기서 request.getSession()으로 세션을 준비하고 그 안에 SPRING_SECURITY_CONTEXT 키로 SecurityContext를 보관합니다.

    톰캣과 같은 서블릿 컨테이너가 생성된 세션의 세션 ID(JSESSIONID)를 Set-Cookie 헤더에 담아 응답으로 내려보내면, 브라우저는 이 값을 해당 도메인의 쿠키로 저장하게 됩니다.


---

### 만들어진 쿠키는 어떻게 전송되는가 

브라우저는 

| 속성         | 전송 규칙 요약                                        |
|------------|-------------------------------------------------|
| **Domain**   | 요청 호스트가 Domain과 domain-match일 때 전송.             |
| **Path**     | 요청 경로가 Path로 시작(하위 경로 포함)할 때 전송.                |
| **Secure**   | HTTPS 같은 보안 채널에서만 전송.                           |
| **SameSite** | same-site / cross-site 여부에 따라 전송 제한, CSRF 완화용.  |

한 번 발급된 JSESSIONID 쿠키를 비롯한 여러 종류의 쿠키는 위 조건을 만족하는 경우에 브라우저가 이후 요청마다 함께 전송됩니다.




---

### 왜 CSRF 보호가 필요한가

CSRF 공격을 위해서 *공격자는 지금까지 본 세션·쿠키, 브라우저 특성을 그대로 활용* 합니다.


1. **사용자의 브라우저에는 이미 \`bank.com\` 의 세션 쿠키(JSESSIONID 등)가 있다.**
2. **브라우저는 \`bank.com\` 으로 향하는 요청에 이 세션 쿠키를 자동으로 붙여 보낸다.**
3. **악성 사이트(devil.com)는 HTML 폼, 이미지 태그, 스크립트(fetch 등)를 이용해 \`https://bank.com/...\`으로 향하는 요청을 만들 수 있다.**


만약 사용자가 bank.com에 로그인한 상태에서 다른 탭으로 devil.com(악성 사이트)에 접속했고
devil.com 페이지에서 아래처럼 \`https://bank.com/transfer\` 로 돈을 보내는 폼을 몰래 만들어 자동으로 전송하게 만든 경우.

\`\`\`html
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="to" value="attacker-account" />
  <input type="hidden" name="amount" value="1000000" />
</form>
<script>
  document.forms
<\/script>
\`\`\`

브라우저 입장에서 보면 “요청 주소가 bank.com이네?” 정도만 확인하고, 앞에서 본 규칙(Domain, Path, Secure, SameSite)에 맞는 bank.com의 쿠키들(JSESSIONID 포함)을 자동으로 Cookie 헤더에 붙여 보내게 됩니다.

서버는 이 요청을 공격자가 보냈는지, 실제 사용자가 보냈는지를 구분할 수 없어, 사용자가 의도하지도 않은 송금·비밀번호 변경·게시글 삭제 같은 민감한 작업도 그대로 처리해 버릴 수 있습니다. 

이 빈틈을 막기 위해, “이 요청이 정말 내가 렌더링한 화면에서 사용자가 직접 보낸 것인지”를 한 번 더 확인해 주는 신호, 즉 CSRF 토큰이 필요합니다.

---

## 스프링 시큐리티의 CSRF 기본 동작

> 이 글에서는 폼 기반 전통적인 MVC 웹 앱(Thymeleaf, JSP)**이고, http.csrf() 기본 설정을 쓰는 경우를 전제로 합니다.

스프링 시큐리티는 CSRF 공격을 막기 위해 서버에서 임의의 CSRF 토큰을 만들고, 렌더링 엔진(Thymeleaf, JSP 등)이 폼(\\<form>)으로 요청을 보낼 때 이 토큰을 함께 보내도록 한 뒤, 서버에서 이 토큰을 검증하는 방식으로 문제를 해결합니다.

---

### CSRF 아키텍처 한눈에 보기

![spring-security-csrf-architecture](spring-security-csrf-architecture.png)

---

기본적으로 http.csrf()로 스프링 시큐리티의 CSRF 보호 기능을 활성화하면, 요청은 위 그림과 같은 흐름으로 처리되며, SecurityFilterChain에 등록된 CsrfFilter는 요청의 HTTP 메서드에 따라 다른 방식으로 동작합니다.


- **Safe/Unsafe 를 판단하는 CSRF RequetsMatcher 구현체**
  \`\`\`java
  private static final class DefaultRequiresCsrfMatcher implements RequestMatcher {
  
          private final HashSet<String> allowedMethods = new HashSet<>(Arrays.asList("GET", "HEAD", "TRACE", "OPTIONS"));
  
          @Override
          public boolean matches(HttpServletRequest request) {
              return !this.allowedMethods.contains(request.getMethod());
          }
  
          @Override
          public String toString() {
              return "CsrfNotRequired " + this.allowedMethods;
          }
  
      }
  }
  \`\`\`
  
---

- **Safe HTTP 메서드 (GET, HEAD, OPTIONS, TRACE, ...)**
    
  서버 상태를 바꾸지 않는다고 가정하고, CSRF 토큰 검사는 건너뜁니다.


- **Unsafe HTTP 메서드 (POST, PUT, PATCH, DELETE, ...)**
  
  서버 상태를 변경할 수 있기 때문에, 요청에 CSRF 토큰이 함께 왔는지, 그리고 그 값이 서버에 저장된 토큰과 일치하는지 확인한 뒤에만 처리를 계속합니다.


  
---

### 언제 CSRF 토큰이 만들어지는가

> Spring Security 5와 6에서 CSRF 토큰을 다루는 방식에 약간 차이가 있으나, 이 글에서는 Spring Security 6 기준으로 설명하며,
> 기본값인 HttpSessionCsrfTokenRepository를 사용해, 서버 세션에 CSRF 토큰을 저장하는 전통적인 MVC 웹 애플리케이션(Thymeleaf, JSP)을 전제로 합니다.

**Spring Security 6**에서는 필요할 때까지 **CSRF 토큰 생성을 미루는(deferred) 방식**을 사용합니다.
여기서 “필요할 때까지 미룬다”는 것은, 뷰 렌더링 과정에서 \`_csrf\` 속성에 실제로 접근하는 시점에 CsrfTokenRepository에서 토큰을 생성·조회한다는 뜻입니다.

사용자가 GET으로 페이지를 처음 요청하면, CsrfFilter는 내부에서 CsrfTokenRepository를 통해 이 세션에서 사용할 CSRF 토큰을 준비하고, 
이를 HttpServletRequest의 \`_csrf\` 속성에 넣어 Thymeleaf 같은 렌더링 엔진이 토큰 값을 꺼내 hidden 필드로 렌더링할 수 있도록 제공합니다.
 

- **\`_csrf\` 사용 예시 (Thymeleaf 기반 송금 폼)**

    \`\`\`html
    <form action="https://bank.com/transfer" method="post">
        <label>
            받는 사람 계좌:
            <input type="text" name="to"/>
        </label>
        <label>
            금액:
            <input type="number" name="amount"/>
        </label>
    
        <input type="hidden"
               name="\${_csrf.parameterName}"
               value="\${_csrf.token}"/>
    
        <input type="submit" value="송금하기"/>
    </form>
    \`\`\`  

    예를 들어, 사용자가 인터넷 뱅킹 화면에서 송금 폼을 제출할 때는 위와 같이 CSRF 토큰이 hidden 필드로 함께 전송됩니다
    
    이 hidden 필드는 사용자가 실제로 bank.com에서 연 화면에서만 올바른 값으로 채워질 수 있기 때문에, 서버는 토큰의 존재 여부와 값 일치를 검사해서 악성 사이트(devil.com)에서 위조한 요청을 쉽게 걸러낼 수 있습니다.

    


---


### 어떻게 CSRF 토큰을 검증하는가

CSRF 토큰 검증은 SecurityFilterChain 안의 \`CsrfFilter\`에서 이루어지며, 기본적으로 아래와 같이 동작합니다. 

1. **CSRF 검사가 필요한 요청인지 확인한다.**
    
    - \`CsrfFilter\`는 먼저 HTTP 메서드를 보고 이 요청이 CSRF 보호 대상인지 확인합니다. 
    - 기본 설정에서는 POST, PUT, PATCH, DELETE 같은 **Unsafe 메서드**만 CSRF 검사를 수행합니다. 

2. **서버에 저장된 CSRF 토큰 로드**

    - 보호 대상 요청이면, \`CsrfFilter\`는 \`CsrfTokenRepository\`에서 이 세션에 저장된 CSRF 토큰을 조회합니다. 
    - 이 글에서는 기본값인 \`HttpSessionCsrfTokenRepository\`를 사용하므로, 서버 세션(HttpSession)에 저장된 토큰 값을 꺼내 온다고 이해하면 됩니다. 
    
    \`\`\`java
    public final class CsrfFilter extends OncePerRequestFilter {
        ...
        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
                throws ServletException, IOException {
            DeferredCsrfToken deferredCsrfToken = this.tokenRepository.loadDeferredToken(request, response);
            ...
            CsrfToken csrfToken = deferredCsrfToken.get(); // 서버에 저장된 토큰 로드     
        }
    }
    \`\`\`


3. **클라이언트가 보낸 CSRF 토큰 추출**

    - 이어서 \`CsrfTokenRequestHandler\`가 HTTP 요청에서 실제로 넘어온 토큰 값을 읽어옵니다. 
    - 이 값은 폼 필드(\`_csrf\` 파라미터)나 헤더(\`X-CSRF-TOKEN\` 등)에 들어 있으며, 앞에서 본 송금 폼의 hidden 필드에 있던 값이 바로 여기로 전달됩니다. 

    \`\`\`java
    public final class CsrfFilter extends OncePerRequestFilter {
        ...
        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
                throws ServletException, IOException {
            ...
            String actualToken = this.requestHandler.resolveCsrfTokenValue(request, csrfToken); // 클라이언트가 전송한 CSRF 토큰 추출 
        }
    }
    \`\`\`

   4. **두 토큰을 비교해 일치 여부 검사**

       - 서버에 저장된 토큰 값과, 클라이언트가 보낸 토큰 값이 모두 존재하고 서로 일치하면 CSRF 검증을 통과하고, 필터 체인이 계속 진행됩니다. 
       - 토큰이 없거나 값이 다르면 \`AccessDeniedException\`이 발생하고, 기본 설정에서는 403 Forbidden 응답을 반환하여 해당 요청을 차단합니다. 

       \`\`\`java
       public final class CsrfFilter extends OncePerRequestFilter {
           ...
           @Override
           protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
                   throws ServletException, IOException {
               ...
               if (!equalsConstantTime(csrfToken.getToken(), actualToken)) {
                
                   // 일치하지 않는 경우, accessDeniedHandler 를 호출해 차단한다.
                   this.accessDeniedHandler.handle(request, response, exception);
                   return;
               }
      
               // 일치하는 경우, 요청을 이후 필터로 넘긴다. 
               filterChain.doFilter(request, response);
           }
       }
       \`\`\`

       Spring Security는 두 토큰을 비교할 때 equalsConstantTime을 사용해, 문자열이 얼마나 일치하는지에 따라 비교 시간이 달라지는 것을 막음으로써 타이밍 공격으로 토큰 값을 유추하는 가능성을 줄입니다.

---

### "devil.com" 폼에서는 왜 이 토큰을 맞출 수 없는가

사용자가 bank.com에 접속해 송금 폼을 열면, 서버는 이 세션만을 위해 생성한 CSRF 토큰을 세션에 저장하고, 동시에 뷰 렌더링 시 \`_csrf\` 속성을 통해 hidden 필드에 심어 둡니다.
bank.com이 렌더링한 HTML 안에서만 이 값을 알 수 있어 자바스크립트로 쿠키에 직접 접근하지 않는 한, 외부 사이트에서는 이 값을 읽어올 수 없습니다.

반면, devil.com은 오직 "사용자가 이미 가진 bank.com 세션 쿠키"에만 의존해서 https://bank.com/transfer로 POST 요청을 보낼 수 있을 뿐, 현재 세션의 CSRF 토큰 값을 알 수 없습니다.
결국 devil.com에서 보낸 위조 요청은 세션 쿠키(JSESSIONID)는 유효하더라도, CSRF 토큰 값이 없거나 틀렸기 때문에 CsrfFilter에서 \`403 Forbidden\`으로 차단됩니다.

> (참고) 최근 브라우저들은 기본 SameSite=Lax 정책으로, 단순 폼 제출과 같은 일부 cross-site 요청에 쿠키 전송 자체를 제한해 CSRF 위험을 어느 정도 줄여 줍니다.
> 다만 SameSite 설정만으로는 모든 케이스에 대해 안전하다고 할 수 없으며, 레거시 브라우저도 고려해야 하기에 Spring Security의 CSRF 토큰 검증은 여전히 중요하게 사용됩니다.

---

## REST API·SPA에서의 CSRF 처리 방법

지금까지 살펴본 동작은 **기본값인 HttpSessionCsrfTokenRepository를 사용하는, 서버 세션 기반(MVC + 폼) CSRF 처리 방식**입니다.

SPA(React, Vue 등)에서는 대부분 JWT 같은 토큰 기반 인증을 사용합니다.
이때 토큰을 Authorization: Bearer ... 헤더처럼 클라이언트 코드가 직접 붙여 보내는 구조라면, 브라우저가 자동으로 자격 증명을 전송하지 않기 때문에 전통적인 CSRF 공격을 상대적으로 덜 의식해도 됩니다.

> Spring Security 공식 문서에서는 완전한 토큰 기반 REST API 의 경우, \`http.csrf().disable()\`을 선택지로 고려할 수 있다고 안내합니다.

하지만 SPA에서 세션 쿠키나 HttpOnly 액세스 토큰 쿠키처럼 브라우저가 자동으로 전송하는 쿠키 기반 인증을 사용하는 경우, 
여전히 CSRF 공격에 노출될 수 있으므로 CookieCsrfTokenRepository를 사용하도록 설정하여 CSRF 토큰을 쿠키(XSRF-TOKEN)로 내려보내고, 
프론트엔드에서 이 값을 읽어 X-XSRF-TOKEN 같은 헤더로 다시 보내도록 구성하는 방식이 많이 사용됩니다.

---

### 쿠키 기반 인증 방식 사용하기

\`\`\`java
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
        );
    return http.build();
}
\`\`\`

CookieCsrfTokenRepository.withHttpOnlyFalse()로 바꾸면, 같은 CsrfFilter 코드 안에서 tokenRepository 구현체만 CookieCsrfTokenRepository로 교체되어, 세션 대신 쿠키(XSRF-TOKEN)에 저장된 토큰 값과 헤더(X-XSRF-TOKEN)로 넘어온 값을 비교하는 쿠키 기반 방식으로 동작하게 됩니다.

결국 **“서버가 기억하고 있는 토큰 값과, 클라이언트가 보낸 토큰 값을 비교해서 일치하면 통과시키고, 다르면 403으로 막는다”** 는 큰 구조 자체는 그대로 유지됩니다.




`,Hb=Object.freeze(Object.defineProperty({__proto__:null,default:Lb},Symbol.toStringTag,{value:"Module"})),Bb=`---
summary: 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다. 
tags: 
references: 
created_date: 2026-03-01T20:09:52.000Z
last_modified_date: 2026-03-01T22:09:52.000Z
visibility: hidden
---


# ㄹㅁㅇㄹㅁㅇ

ㅁㅇㄹㅁㅇㄹ`,Ub=Object.freeze(Object.defineProperty({__proto__:null,default:Bb},Symbol.toStringTag,{value:"Module"})),zb=`---
summary: 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다. 
tags: 
references: 
created_date: 2026-03-05T20:09:52.000Z
last_modified_date: 2026-03-05T22:09:52.000Z
visibility: hidden
---


> 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다.


## 시나리오 설정

이 글에서 다루는 예제는 대략 이런 환경을 기준으로 합니다.

- 프론트엔드: React, Vue 로 만든 SPA
- 백엔드: 스프링 부트 + 스프링 시큐리티 기반 API 서버
- 도메인: SPA 는 https://app.example.com, API 서버는 https://api.example.com
- 통신·인증: JSON 기반 REST API, Authorization: Bearer <액세스 토큰> 헤더 사용

이때 실제로 오가는 HTTP 요청은 아래와 같이 가정합니다.

| 구분           | 메서드 | 엔드포인트      | 요청 바디 예시                                            | 응답 바디 예시                                      |
| -------------- | ------ | --------------- | --------------------------------------------------------- | -------------------------------------------------- |
| 로그인         | POST   | /api/auth/login | { "email": "user@example.com", "password": "pass" }       | { "accessToken": "JWT...", "expiresIn": 3600 }     |
| 현재 사용자 조회 | GET    | /api/users/me   | (바디 없음, Authorization 헤더에 토큰)                    | { "id": 1, "email": "user@example.com", "name": "사용자" } |


## 유저 도메인 설계

### 기본 필드 

###  유저 상태 (활성/비활성, 탈퇴, 잠금 여부 등)

### 권한/역할 구조 (ROLE_USER, ROLE_ADMIN 등)

### UserDetails 구현

## 스프링 시큐리티 기본 설정
### CORS 설정 (SPA 오리진 허용, 메서드·헤더 설정)
### CSRF 전략 (SPA+JWT 환경에서 왜 disable 하는지, 예외 케이스)
### 세션 정책 (STATELESS 사용하는 이유)


## JWT 구성
###  토큰에 무엇을 담을지(클레임 설계: sub, roles, 만료 시간 등)
## JWT Provider/Util 설계
### 토큰 생성
### 토큰 검증 및 파싱
### 만료 시간 설정

## 인증 로직 추가

### AuthenticationProvider 구성
### UserDetailsService
### PasswordEncoder
### 로그인 API (인증 성공 → JWT 발급 응답)


### 요청 검증: JWT 인증 필터
### OncePerRequestFilter 기반 JWT 필터 구현
### Authorization 헤더에서 토큰 꺼내기, 검증, SecurityContext에 저장
### SecurityFilterChain에 필터 등록 위치`,Ib=Object.freeze(Object.defineProperty({__proto__:null,default:zb},Symbol.toStringTag,{value:"Module"})),Pb=`---
summary: 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다. 
tags: 
references: 
created_date: 2026-03-02T18:20:52.000Z
last_modified_date: 2026-03-02T18:20:52.000Z
---


> 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다.


## JWT(JSON Web Token)는 무엇인가

JWT(JSON Web Token)는 토큰 기반 인증에서 인증과 인가 정보를 함께 담아 클라이언트와 서버가 주고받는 토큰으로,
주로 로그인 이후 사용자의 신원과 권한을 증명할 때나 여러 서버나 마이크로서비스 사이에서 공통된 인증 수단으로 사용할 때 사용됩니다.

토큰 안에는 **“사용자가 누구인지, 어떤 권한을 가졌는지”** 같은 내용을 JSON 형태로 담아 두고, 여기에 서명을 붙여 두기 때문에 서버는 매 요청마다 이 토큰이 중간에 위조되었는지만 확인하면 되고, 서명이 유효하다면 토큰 안에 담긴 사용자 정보와 권한을 그대로 신뢰할 수 있습니다.



---

### JWT: 토큰의 구조 

![JWT 구조](jwt-structure-divided-3-part.png)


JWT 토큰은 위와 같이 크게 헤더(\`Header\`) · 페이로드(\`Payload\`) · 시그니처(\`Signature\`) 세 부분으로 나뉩니다. 
각 부분은 JSON 형태의 데이터를 담고 있고, 이를 각각 \`Base64Url\`로 인코딩한 뒤 . 문자로 이어 붙여 최종적으로 **"Header.Payload.Signature" 형태의 문자열** 하나가 됩니다.


---

#### 헤더(Header)


![JWT: 헤더](jwt-header-structure.png)


JWT의 헤더는 **토큰의 타입과 서명 알고리즘 같은 메타데이터를 담는 영역**으로, 
여기에 **토큰 타입(typ = JWT)** 과 **서명 알고리즘(alg = HS256, RS256 등)** 이 들어가며, 서버는 이 정보를 보고 “이 토큰을 어떤 방식으로 검증할지”를 결정합니다.




---

#### 페이로드(Payload)

![JWT: 페이로드](jwt-payload-structure.png)

페이로드는 JWT 안에서 **클라이언트와 서버가 공유하고 싶은 데이터(Claim)을 담는 부분**으로 사용자 ID와 이름, 역할(권한), 토큰의 발급 시간(iat)과 만료 시간(exp) 같은 값이 들어갑니다.

이 부분은 **Base64Url**로 인코딩만 되어 있어 누구나 디코딩해서 내용을 확인할 수 있습니다. 
그래서 비밀번호나 주민등록번호와 같은 중요한 정보는 넣지 않고, 토큰이 유출되더라도 치명적이지 않은 수준의 정보만 담아야 합니다.

---

#### 시그니처(Signature)

![jwt-signature-structure.png](jwt-signature-structure.png)

시그니처는 인코딩된 헤더와 페이로드에 비밀키(또는 개인키)로 서명한 값을 담는 부분입니다. 
이 자리에는 "KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"처럼 의미를 알 수 없는 **Base64Url 문자열**이 들어갑니다.
이렇게 만들어진 시그니처를 서버는 매 요청마다 다시 계산해 토큰에 들어 있는 시그니처와 일치하는지 비교함으로써, 토큰이 중간에 위조되었거나 내용이 바뀌지 않았는지 확인합니다. 

시그니처를 서명할 때 어떤 키를 사용할지는 선택한 알고리즘(예: HS256, RS256)에 따라 달라지며, HS256은 Secret Key 하나로, RS256은 Private/Public Key 쌍으로 서명과 검증을 합니다.

- **서명에 사용하는 키**

    - **HS256(대칭키):** 하나의 Secret Key로 서명과 검증을 모두 수행.
    - **RS256(비대칭키):** Private Key로 서명하고, 대응되는 Public Key로 검증.

---



### JWT: 발급부터 검증까지  

![JWT 발급 및 인증 흐름](jwt-authentication-flow.png)

1. 클라이언트가 ID/비밀번호로 로그인 요청을 보낸다.

2. 서버가 인증에 성공하면 사용자 정보와 권한을 담은 JWT를 발급해 클라이언트에 내려준다.

3. 클라이언트는 이후 요청마다 \`Authorization\` 헤더의 값으로 \`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\`를 넣어 토큰을 함께 보낸다.

    \`\`\`curl
    curl -X GET "https://example.com/api/v1/resources" \\
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \\
    -H "Content-Type: application/json"
    \`\`\`

4. 서버는 토큰의 서명과 만료 시간을 검증해 유효한지 확인한다.

5. 검증이 통과하면 토큰에 담긴 사용자 정보와 권한을 사용해 요청을 처리하고 응답을 반환한다.



---

### JWT: 장단점

JWT는 서버가 세션을 기억하지 않아도 되는 Stateless 토큰이기 때문에 수평 확장을 하더라도 인증 정보 동기화를 고민할 필요가 없고 별도 세션 저장소 없이도 여러 마이크로서비스에서 공통 인증 수단으로 재사용할 수 있습니다.

다만 한 번 발급된 토큰이 유출되면, 만료 전까지 공격자가 해당 토큰으로 계속 요청을 보낼 수 있는데다 서버 입장에서는 “이 토큰을 바로 무효화해라” 와 같이 강제 로그아웃 처리하기 까다롭습니다.
그리고 페이로드 내용은 누구나 디코딩해서 볼 수 있기 때문에 비밀번호나 주민등록번호처럼 민감한 정보는 넣어서는 안 됩니다.

---

- **JWT 장점 한눈에 보기**
    
    | 항목                     | 설명                                          |
    |--------------------------|---------------------------------------------|
    | **서버 확장성 (Stateless)**  | 서버가 세션 상태를 들고 있지 않아 인스턴스를 수평 확장하기 쉽다.       |
    | **세션 저장소 불필요**       | 별도의 세션 DB·Redis 없이 토큰만으로 인증 정보를 주고받을 수 있다.  |
    | **마이크로서비스에 유리**    | 여러 마이크로서비스가 같은 JWT를 검증해서 공통 인증 수단으로 쓸 수 있다. |

- **JWT 단점/주의할 점 한눈에 보기**
    
    | 항목            | 설명                                                         | 대응 방법                                                                               |
    |---------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------|
    | **토큰 탈취 시 위험**  | 토큰이 유출되면 만료 전까지 공격자가 그대로 사용할 수 있다. | 만료 시간을 짧게 두고 HTTPS를 강제하며, 필요하다면 IP·User-Agent를 함께 검증하고 Refresh 토큰과 조합해 사용한다.        |
    | **강제 로그아웃 어려움**   | 이미 발급된 토큰을 서버에서 강제로 무효화하기가 까다롭다.   | 만료 시간이 짧은 Access 토큰과 Refresh 토큰을 함께 사용하며, 로그아웃된 토큰을 블랙리스트 테이블에 저장하여 이후 해당 토큰을 차단한다. |
    | **페이로드 평문 노출 이슈** | 페이로드는 인코딩만 되어 있어 디코딩하면 내용이 그대로 보인다. | 민감정보가 아닌 필요한 정보만 최소한으로 담거나 JWE(암호화된 JWT) 도입을 고려한다.                                  |

---`,Fb=Object.freeze(Object.defineProperty({__proto__:null,default:Pb},Symbol.toStringTag,{value:"Module"})),qb=`---
summary: 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다. 
tags: 
references: 
created_date: 2026-03-01T20:09:52.000Z
last_modified_date: 2026-03-01T22:09:52.000Z
visibility: hidden
---


# ㄹㅁㅇㄹㅁㅇ

ㅁㅇㄹㅁㅇㄹ`,Gb=Object.freeze(Object.defineProperty({__proto__:null,default:qb},Symbol.toStringTag,{value:"Module"})),Yb=`---
summary: 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다. 
tags: 
references: 
created_date: 2026-03-01T20:09:52.000Z
last_modified_date: 2026-03-01T22:09:52.000Z
visibility: hidden
---


## 스프링 시큐리티에서 요청은 어디로 들어오는가

ㅁㅇㄹㅁㅇㄹ
`,Jb=Object.freeze(Object.defineProperty({__proto__:null,default:Yb},Symbol.toStringTag,{value:"Module"})),Kb=`---
summary: 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다. 
tags: 
references: 
created_date: 2026-03-06T20:09:52.000Z
last_modified_date: 2026-03-06T22:09:52.000Z
visibility: hidden
---


# ㄹㅁㅇㄹㅁㅇ

ㅁㅇㄹㅁㅇㄹ`,Qb=Object.freeze(Object.defineProperty({__proto__:null,default:Kb},Symbol.toStringTag,{value:"Module"})),Zb=`---
summary: 스프링 시큐리티가 어떤 보안 프레임워크인지, 그리고 스프링 기반 웹 애플리케이션에서 인증·인가와 각종 웹 보안을 어떤 구조로 처리하는지 필터 체인 관점에서 간단히 정리한 글입니다 
tags: 
references: 
  - https://docs.spring.io/spring-security/reference/servlet/architecture.html#servlet-architecture
created_date: 2026-02-28T22:09:52.000Z
last_modified_date: 2026-02-28T22:09:52.000Z
---


> 이 글에서는 스프링 시큐리티의 역할과 주요 기능, 그리고 스프링 기반 웹 애플리케이션 안에서 어떻게 동작하는지까지 큰 그림 위주로 정리해 보았습니다.

## 스프링 애플리케이션과 보안

스프링으로 웹 서비스를 만들다 보면 로그인, 마이페이지, 관리자 페이지처럼 “누구인지”와 “여길 들어와도 되는지”를 매번 확인해야 하는 기능을 만들곤 합니다. 
이를 위해 세션이나 토큰을 사용해 로그인 상태를 관리하지만, 화면과 API가 늘어날수록 어디는 로그인 없이 열리고, 어디는 권한 체크를 빼먹는 식으로 생각지도 못한 구간에 보안 구멍이 생기기 쉽습니다.

이렇게 사용자를 인증하고 접근 권한을 주는 과정을 하나씩 직접 구현하다 보면, 나도 모르는 새에 애플리케이션 기능이나 보안 쪽에 문제가 생기는 경우가 많습니다. 
이런 문제를 줄이기 위해 스프링 진영에서는 애플리케이션의 인증·인가를 비롯한 여러 보안 기능을 표준화된 방식으로 쉽게 구현할 수 있도록, **스프링 시큐리티**라는 보안 프레임워크를 제공합니다. 

---

## 스프링 시큐리티란 ?

스프링 시큐리티는 스프링 기반 애플리케이션에서 인증·인가와 주요 웹 보안 기능을 맡는 보안 프레임워크입니다. 로그인, 권한 체크, 세션·토큰 관리, CSRF 같은 보안 요소를 직접 매번 구현하기보다는, 한 번 표준화해 두고 재사용할 수 있게 도와주는 역할을 합니다.


### 스프링 시큐리티는 무엇을 해주는가 ?

#### 인증(Authentication)

인증은 “이 사용자가 진짜 누구인지”를 확인하는 과정으로 대표적인 인증 방법으로는 아이디/비밀번호를 활용한 인증 방식과 소셜 로그인 등이 있습니다.

스프링 시큐리티에서 자주 사용하는 인증 방식과, 각 방식이 언제 쓰기 좋은지 간단히 정리해보았습니다.

| **인증 방식**                 | **언제 사용하는가 ?**                                       |
|-----------------------|--------------------------------------------------|
| **HTTP Basic**        | 간단한 내부용 API, 테스트용 환경 등 UI 없이 빠르게 인증만 붙이고 싶을 때.   |
| **폼 로그인(Form Login)** | 일반적인 웹 애플리케이션, 자체 로그인 화면이 있는 서비스.                |
| **세션 기반 인증**          | 서버 렌더링 웹, 전통적인 MVC 구조 서비스.                       |
| **JWT 기반 토큰 인증**      | REST API, SPA·모바일 클라이언트처럼 stateless하게 인증하고 싶을 때. |
| **OAuth2 / 소셜 로그인**   | “구글로 로그인”, “카카오로 로그인” 같은 소셜 로그인이 필요한 서비스.        |
| **Remember-me 인증**    | 자주 방문하는 서비스에서 브라우저를 껐다 켜도 로그인 유지하고 싶을 때.         |

---

#### 인가(Authorization)

인가는 “이 사용자가 어디까지 들어와도 되는지”를 결정하는 단계로, 어떤 URL·API·화면(기능)에 접근할 수 있는지를 정하는 역할을 합니다.

| **인가 방식**     | **어디에 쓰는가**                                             |
| --------- |-----------------------------------------------------|
| **URL 기반 인가** | **"/admin/\\*\\*"**, **"/mypage/\\*\\*"** 처럼 경로별 접근 제한. |
| **메서드 기반 인가** | 서비스·컨트롤러 메서드 단위로 권한을 걸고 싶을 때.                       |


---

#### 공통 보안 공격 방어(CSRF, 세션 고정, 클릭재킹 등)

웹 애플리케이션은 "CSRF"나 "세션 고정", "클릭재킹"과 같은  사용자를 노리는 다양한 공격에도 노출될 수 있습니다.

스프링 시큐리티는 이러한 공격을 CSRF 토큰 검증, 세션 ID 재발급(세션 고정 공격 방지), X-Frame-Options 같은 보안 헤더 설정으로 기본적으로 방어해 줍니다.

| 공격 종류    | 어떤 공격인가                                                                       | 스프링 시큐리티가 막는 방법                                                               |
|----------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **CSRF**   | 로그인된 사용자를 속여 원치 않는 요청을 보내게 하는 공격.                                             | CSRF 토큰을 발급하고, 상태 변경 요청마다 토큰을 함께 보내도록 강제해 토큰이 없는/틀린 요청은 막습니다.                 |
| **세션 고정 공격** | 공격자가 미리 만든 세션 ID를 피해자에게 쓰게 해서, 그 세션으로 로그인하게 만든 뒤 세션을 가로채는 공격.                 | 사용자가 로그인할 때 세션 ID를 새로 발급하거나 변경해, 기존 세션 ID를 악용하기 어렵게 만듭니다.                     |
| **클릭재킹**     | 페이지를 보이지 않는 iframe 안에 넣고, 사용자가 다른 버튼을 클릭한다고 생각하지만 실제로는 우리 사이트 버튼을 누르게 하는 공격.  | 기본적으로 X-Frame-Options 같은 응답 헤더를 설정해, 임의의 사이트에서 우리 페이지를 iframe으로 띄우지 못하게 합니다.  |


---


## 스프링 시큐리티가 어떻게 동작하는가 ?

스프링 시큐리티가 어떻게 동작하는지 알아보기 전에, 먼저 스프링 기반 웹 애플리케이션이 서블릿 컨테이너 위에서 어떻게 요청을 처리하는지부터 알아보겠습니다.

---

### 스프링과 서블릿 기반 아키텍처

![servlet-container-architecture](servlet-container-architecture.png)

클라이언트에서 HTTP 요청이 들어오면 서블릿 컨테이너는 이 요청을 여러 서블릿 필터로 이루어진 필터 체인에 먼저 통과시킵니다. 
이 필터 체인 안에는 스프링이 등록한 DelegatingFilterProxy(위임 필터 프록시)가 있고, 이 프록시를 통해 요청은 스프링이 빈으로 등록해 둔 여러 필터들을 거친 뒤 DispatcherServlet으로 전달됩니다.


---

### 스프링 시큐리티 필터 아키텍처


![spring-security-filter-chain-architecture](spring-security-filter-chain-architecture.png)

스프링 시큐리티에서는 DelegatingFilterProxy가 FilterChainProxy로 요청 처리를 위임합니다. 

FilterChainProxy는 내부에 여러 개의 SecurityFilterChain을 가지고 있고, 현재 요청의 URL 패턴에 맞는 체인을 골라 그 안에 정의된 필터들을 순서대로 실행합니다.
정리하자면, DelegatingFilterProxy가 FilterChainProxy로 요청을 넘기고 FilterChainProxy가 여러 SecurityFilterChain을 통해 인증(로그인), 인가(권한 체크), 세션 관리, CSRF 보호 같은 필터들을 실행하는 구조입니다.

---





`,Vb=Object.freeze(Object.defineProperty({__proto__:null,default:Zb},Symbol.toStringTag,{value:"Module"})),Wb=`---
summary: 이 글에는 JWT가 무엇인지, 어떻게 동작하는지, 그리고 언제 사용하면 좋은지 정리했습니다. 
tags: 
references: 
created_date: 2026-03-01T20:09:52.000Z
last_modified_date: 2026-03-01T22:09:52.000Z
visibility: hidden
---


# ㄹㅁㅇㄹㅁㅇ

ㅁㅇㄹㅁㅇㄹ`,Xb=Object.freeze(Object.defineProperty({__proto__:null,default:Wb},Symbol.toStringTag,{value:"Module"})),$b=`---
summary: 스프링 시큐리티가 HTTP 요청을 필터 체인에서 어떻게 인증하고, Authentication을 SecurityContext(세션·ThreadLocal)에 저장해 컨트롤러에서 재사용하는지 흐름 위주로 정리했습니다.
tags: 
references:
  - https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html
created_date: 2026-03-02T15:09:52.000Z
last_modified_date: 2026-03-02T15:09:52.000Z
---

> 이 글에서는 “서블릿 기반 웹 애플리케이션 + 세션 기반 인증” 환경에서, 폼 로그인 또는 HTTP Basic을 사용하는 가장 전형적인 스프링 시큐리티 구성을 기준으로 설명합니다.


## 스프링 시큐리티: 인증은 어떻게 이루어질까 ?

스프링 시큐리티는 애플리케이션의 인증, 인가, CSRF 방어 같은 보안 작업들을 일관된 추상화로 제공합니다. 

스프링 시큐리티가 제공하는 인증 과정은, 큰 흐름으로 보면 아래와 같이 “요청 → 필터 체인 → Authentication 생성·검증 → SecurityContext 저장” 단계로 추상화할 수 있습니다.

- **인증 흐름 한눈에 보기**
    ![spring-security-authentication-architecture](spring-security-authentication-architecture.png)

위 그림의 단계들을 차례대로 따라가면서, 요청이 필터 체인을 지나 Authentication을 만들고 검증한 뒤 SecurityContext에 저장되기까지의 흐름을 살펴보겠습니다.


---

### 요청과 필터 체인 진입

스프링과 스프링 시큐리티를 사용해 만든 애플리케이션으로 들어오는 모든 요청은 먼저 톰캣과 같은 서블릿 컨테이너의 필터 체인을 거칩니다.

FilterChainProxy는 애플리케이션에 구성된 여러 SecurityFilterChain 중에서 요청 URL과 매칭되는 체인을 고르고, 그 안에서 설정된 인증 방식(httpBasic, formLogin, 커스텀 JWT 필터 등)에 따라 해당 인증 필터가 요청을 가로채 실제 인증 과정을 수행합니다.
어떤 인증 방식을 사용할지는 스프링 시큐리티 설정에 따라 달라지고, 이 설정은 우리가 직접 구성할 수 있습니다.

아래처럼 SecurityFilterChain을 설정하면, 각 메서드 호출이 내부적으로 대응되는 인증 필터를 필터 체인에 추가하게 됩니다.

\`\`\`java
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .httpBasic()          // HTTP Basic 인증
        .and()
        .formLogin();          // 폼 로그인 인증

    return http.build();
}
\`\`\`

---

#### 그렇다면 어떤 필터가 선택될까 ?

어떤 인증 방식을 사용할지는 결국 우리가 어떻게 스프링 시큐리티를 설정했는지에 따라 결정됩니다.
예를 들어 위와 같이 SecurityFilterChain을 설정하면 httpBasic()과 formLogin() 호출에 대응하는 HTTP Basic 인증 필터와 폼 로그인 인증 필터가 필터 체인에 함께 등록됩니다.

HTTP Basic과 폼 로그인 기능은 기본적으로 활성화되며, 각 필터는 아래 표와 같이 요청의 헤더와 URL, HTTP 메서드 정보를 보고 “이 요청을 내가 처리해야 할지” 여부를 먼저 판단하며 "내 요청이다"라고 판단되면, 필터는 해당 인증 방식에 맞게 요청에서 자격 증명을 추출해 Authentication 객체를 생성합니다.


| 필터 클래스                               | 담당 인증 방식   | “내 요청이다”라고 판단하는 기준                                                 |
| ------------------------------------ | ---------- | ------------------------------------------------------------------ |
| BasicAuthenticationFilter            | HTTP Basic | Authorization 헤더가 존재하고 값이 Basic ... 형식인지 확인              |
| UsernamePasswordAuthenticationFilter | Form Login | HTTP 메서드가 POST이고, URL이 loginProcessingUrl(기본 /login)과 일치 |



---


#### Authentication 생성과 인증 위임

스프링 시큐리티의 핵심 인터페이스 중 하나인 Authentication은 **현재 사용자가 누구인지와 그 사용자가 가진 권한 정보를 담는 스프링 시큐리티의 핵심 인터페이스**입니다.
이 객체는 아래와 같이 인증·인가에 쓰이는 핵심 정보를 한 번에 담고 있고, 이후 AuthenticationManager에게 전달되어 인증 과정에 사용됩니다.

| 필드 / 메서드      | 의미                                                          |
| ------------- | ----------------------------------------------------------- |
| principal     | 인증된 사용자 정보(아이디, UserDetails 등)를 담는 주체 객체.         |
| credentials   | 자격 증명 값(비밀번호, 토큰 문자열 등), 보통 인증이 끝나면 지워진다.         |
| authorities   | 사용자가 가진 권한 목록(ROLE_USER, ROLE_ADMIN 등)을 나타내는 컬렉션. |
| authenticated | 현재 Authentication이 인증을 마친 상태인지 여부를 나타내는 플래그.      |
| details       | 원격 IP, 세션 ID 등 부가적인 요청 정보를 담는 필드.                 |


---

### 어떤 방식으로 값을 검증할까 ?

필터가 요청을 가로채 자격 증명으로 Authentication을 만들고, 그 검증을 AuthenticationManager에게 요청하는데,
이 때 AuthenticationManager는 전달받은 Authentication 을 데이터베이스 조회·OAuth2 서버 통신·remember-me 토큰 검증 등 알맞은 방식으로 처리할 수 있는 AuthenticationProvider 를 찾아 값 검증 작업을 위임합니다

---

#### 대표적인 AuthenticationProvider

| 종류                         | 용도 |
|----------------------------|------|
| DaoAuthenticationProvider  | UsernamePasswordAuthenticationToken을 받아 아이디·비밀번호를 검증. |
| AnonymousAuthenticationProvider | AnonymousAuthenticationToken을 처리해 인증되지 않은 사용자를 “익명 사용자”로 취급. |
| RememberMeAuthenticationProvider | remember-me 토큰으로 자동 로그인을 처리. |
| OAuth2LoginAuthenticationProvider | OAuth2/OIDC 로그인 응답을 검증하고 외부 서버 사용자 정보로 Authentication을 생성. |

---


### 어떤 Provider로 검증할까 ?

> 인증 방식이 **HTTP Basic** 또는 **폼 로그인**인 것으로 가정하고 작성하였습니다.

**AuthenticationProvider** 는 기본적으로 **\`username\` 과 일치하는 사용자가 존재하는지와 \`password\` 가 일치하는지를 확인**합니다.
구체적으로는 **\`UserDetailsService\` 로 사용자 정보를 조회**하고, **조회된 사용자 정보의 비밀번호를 \`PasswordEncoder\` 를 통해 입력 값과 비교**합니다.

---

#### 유저 정보 조회하기

DaoAuthenticationProvider는 아이디·비밀번호 기반 로그인을 처리할 때 유저 조회를 위해 UserDetailsService 인터페이스 구현체를 사용하며, 이때 사용할 username 값으로 UsernamePasswordAuthenticationToken의 principal 을 사용합니다. 

\`\`\`java
public interface UserDetailsService {
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
\`\`\`

UserDetailsService 구현체는 전달받은 principal 으로 데이터베이스에서 사용자를 조회하고, 일치하는 사용자가 없으면 예외를 던져 인증을 실패로 처리합니다.
만약 사용자를 찾은 경우, 그 정보를 기반으로 UserDetails와 권한 정보(authorities)를 만들어 반환합니다.

---

- **여러가지 \`UserDetailsService\` 인터페이스 구현체**

    | 구현/패턴                      | 설명                                     |
    | -------------------------- |----------------------------------------|
    | InMemoryUserDetailsManager | 사용자 목록을 메모리에 저장해서 인증에 사용하는 구현체.        |
    | JdbcUserDetailsManager     | JDBC로 데이터베이스에서 사용자 정보를 읽어오는 구현체.       |
    | ReactiveUserDetailsService | WebFlux 환경에서 사용하는 리액티브 버전 인터페이스 |

---

#### 패스워드 일치 여부 판단하기

DaoAuthenticationProvider는 아이디·비밀번호 기반 로그인을 처리할 때 비밀번호 검증을 위해 PasswordEncoder 인터페이스 구현체를 사용합니다.

\`\`\`java
public interface PasswordEncoder {
    String encode(CharSequence rawPassword);
    boolean matches(CharSequence rawPassword, String encodedPassword);
}
\`\`\`

조회된 UserDetails에 저장된 비밀번호와 사용자가 입력한 비밀번호는 matches()로 비교합니다.
값이 일치하지 않는 경우에는 BadCredentialsException을 던져 인증을 실패로 처리합니다.

---

- **여러가지 \`PasswordEncoder\` 인터페이스 구현체**

    | 구현체                       | 특징 / 용도                                                                      |
    | ------------------------- | ---------------------------------------------------------------------------- |
    | NoOpPasswordEncoder       | 암호화 없이 평문을 그대로 저장·비교하는 구현체, 테스트용으로만 사용 권장.                         |
    | BCryptPasswordEncoder     | BCrypt 해시 알고리즘 사용, 기본적으로 가장 많이 권장되는 구현체.                           |
    | Pbkdf2PasswordEncoder     | PBKDF2 기반 해시 사용, 반복 횟수 조절로 연산 비용 튜닝 가능.                            |
    | SCryptPasswordEncoder     | scrypt 알고리즘 사용, 메모리·연산 비용을 높여 공격 난이도 증가.                           |

---


#### 검증에 성공했다면 ?

AuthenticationProvider가 자격 증명을 검증했다면, 인증이 완료된 상태를 나타내기 위해 Authentication 객체의 authenticated 플래그를 true로 설정한 뒤 반환해야 합니다.

- **검증을 마친 뒤 \`Authentication\` 반환하기**
    
    \`\`\`java
    public class AuthenticationProviderImpl implements AuthenticationProvider {
    
        public Authentication authenticate(Authentication authentication) throws AuthenticationException {
            ....
    
            return new UsernamePasswordAuthenticationToken(
                userDetails,
                null,
                userDetails.getAuthorities()
            );
        }
    }
    \`\`\`

- **검증 완료(authenticated = true)된 Authentication 생성하기**
    \`\`\`java
    public UsernamePasswordAuthenticationToken(Object principal, Object credentials,
            Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        this.principal = principal;
        this.credentials = credentials;
        super.setAuthenticated(true); 
    }
    \`\`\`

    위 생성자를 보면, 내부에서 super.setAuthenticated(true)를 호출하여 authenticated 값을 true로 설정하기 때문에, 
    이 코드를 통해 검증이 완료된(\`authenticated\` = \`true\`) UsernamePasswordAuthenticationToken 인스턴스가 생성됩니다.

---

### 인증 정보를 저장하고 사용하자.


#### 인증 정보는 어디에 저장되지 ?

AuthenticationProvider가 인증을 마친 뒤 반환한 Authentication 객체는 SecurityContext에 저장되고, 이후 요청에서도 “이 사용자가 누구인지”를 식별하기 위한 기준 정보로 사용됩니다. 

세션 기반 환경에서는 SecurityContextPersistenceFilter가 응답이 완료되는 시점에 이 SecurityContext를 HTTP 세션에 저장해 두고, 브라우저는 이후 요청마다 JSESSIONID 쿠키를 함께 보내 동일한 세션을 다시 사용할 수 있게 됩니다.

---


#### 사용자의 인증 여부를 어떻게 식별하지 ?

브라우저는 로그인 이후 요청마다 로그인 성공 응답으로 서버로부터 받은 JSESSIONID 쿠키를 함께 보내줍니다. 
이 때 스프링 시큐리티의 SecurityContextPersistenceFilter는 이 JSESSIONID에 해당하는 HTTP 세션에서 SecurityContext를 꺼내 SecurityContextHolder에 넣어 줍니다.

스프링 MVC는 하나의 요청에 하나의 스레드를 할당하는 구조이기 때문에, 스프링 시큐리티는 기본적으로 SecurityContextHolder를 ThreadLocal 기반으로 구현해 “현재 요청을 처리하는 스레드에만 보이는 인증 정보”를 안전하게 유지합니다.


---


#### 인증 정보를 어떻게 재사용하지 ?

- **어노테이션 으로 재사용하기**

   \`\`\`java
   // 컨트롤러 메서드에서 현재 사용자 이름 사용
   @GetMapping("/me")
   public String me(@AuthenticationPrincipal UserDetails user) {
     return "Hello, " + user.getUsername();
   }
  \`\`\`

  
- **직접 꺼내 쓰기**

    \`\`\`java
    @GetMapping("/me")
    public String me() {
        Authentication authentication =
        SecurityContextHolder.getContext().getAuthentication();
        
        UserDetails user = (UserDetails) authentication.getPrincipal();
        return "Hello, " + user.getUsername();
    }
    \`\`\`



---











`,ny=Object.freeze(Object.defineProperty({__proto__:null,default:$b},Symbol.toStringTag,{value:"Module"})),ey=`---
summary: 인증·인가 개념과 인증·인가 방식으로 어떠한 것들이 있는지 간단하게 정리한 글입니다. 
tags: 
references: 
created_date: 2026-03-01T15:09:52.000Z
last_modified_date: 2026-03-01T15:09:52.000Z
---


> 이 글에서는 인증·인가의 기본 개념과 인증·인가를 구현하는 방식으로 어떤 것들이 있는지 간단하게 정리해보았습니다.

## 인증과 인가

- **인증(\`Authentication\`)**: 사용자나 장치의 신원을 확인하는 **'누구인지 증명'하는 과정**

    > **예시:** 아이디/패스워드를 통한 로그인, 신분증·여권을 통한 본인 확인

- **인가(\`Authorization\`)**: 인증된 사용자가 특정 리소스에 접근할 수 있는 **'권한이 있는지 확인'** 하는 절차

    > **예시:** 관리자 페이지 접근, 자신이 작성한 게시글·댓글만 수정 가능


---


## 인증과 인가: 여러가지 구현 방법

### 여러가지 인증 방법


#### 매 요청마다 아이디/패스워드를 입력하는 인증 방식

> 매 요청마다 아이디/패스워드를 통해 사용자 검증하는 방식.

![매 요청마다 아이디/패스워드를 입력하는 인증 방식](authentication-authorization-way-1.png)

- **장점:** 구현이 가장 단순한 방식이다.

- **단점:** 요청마다 아이디/패스워드를 입력해야하여 사용자 경험(UX; User Experience) 이 좋지 않다. 또한 네트워크 통신 시 해당 정보를 탈취당할 위험이 있다.



---

#### 쿠키와 세션을 이용한 인증 방식

> 로그인에 성공한 사용자의 정보를 서버 세션에 저장하고, 세션 식별자(Session ID)를 쿠키로 내려보낸 뒤 이후 요청마다 이 세션 ID를 통해 사용자를 식별하는 방식.

![쿠키와 세션을 이용한 인증 방식](authentication-authorization-way-2.png)

- **장점:** 서버가 세션 정보를 중앙에서 관리하므로, 강제 로그아웃 처리나 세션 만료 관리가 비교적 쉽고, 사용자는 한 번 로그인으로 여러 요청을 편리하게 보낼 수 있다.

- **단점:** 세션 정보를 중앙에서 관리해야 하기 때문에 수평 확장 시 세션 공유를 위한 추가 인프라가 필요해지고, 이로 인해 복잡도가 증가하며 완전한 무상태(\`Stateless\`) 아키텍처를 구성하기 어렵다.


---


#### 토큰을 이용한 인증 방식

> 로그인에 성공한 사용자 정보와 권한 정보를 포함한 토큰(예: JWT)을 발급하고, 이후 요청마다 이 토큰을 함께 보내도록 하여 사용자를 식별하는 방식.

![토큰을 이용한 인증 방식](authentication-authorization-way-3.png)

- **장점:** 서버가 세션 상태를 저장하지 않아도 되어 무상태(Stateless)에 가깝게 운영할 수 있고, 수평 확장과 다양한 클라이언트(모바일, 외부 서비스 등) 지원에 유리합니다.

- **단점:** 한 번 발급된 토큰을 서버에서 즉시 무효화하기 어렵고, 탈취 시 피해 범위가 커질 수 있어 만료 시간·재발급·블랙리스트 같은 추가 설계가 필요합니다.


---


### 여러가지 인가 방법


#### 서블릿 필터 체인 기반 인가 방식

> 서블릿 필터 체인에서 요청이 컨트롤러에 도달하기 이전에, URL·HTTP 메서드 기준으로 권한을 검사하는 방식.


- **사용 방식:** 

  애플리케이션 앞단의 서블릿 필터에서 현재 요청의 URL과 HTTP 메서드(GET, POST 등을 기준으로 접근 허용 여부를 결정합니다.
  
  예를 들어 "/admin/**" URL로 들어온 요청은 필터에서 관리자 여부를 검사한 뒤, 관리자가 아니면 컨트롤러로 넘기지 않고 바로 403을 응답합니다.

- **예시:**
  
  \`\`\`java
  public class AdminCheckFilter implements Filter {
  
      @Override
      public void doFilter(
              ServletRequest req,
              ServletResponse res,
              FilterChain chain) throws IOException, ServletException {
  
          HttpServletRequest httpReq = (HttpServletRequest) req;
          HttpServletResponse httpRes = (HttpServletResponse) res;
  
          String path = httpReq.getRequestURI();
  
          if (path.startsWith("/admin/")) {
              boolean isAdmin = checkIsAdmin(httpReq); 
  
              if (!isAdmin) {
                  httpRes.setStatus(HttpServletResponse.SC_FORBIDDEN); // 403
                  return; // 컨트롤러로 넘기지 않고 바로 응답 종료
              }
          }
  
          chain.doFilter(request, response); // 통과 시 다음 필터/컨트롤러로 진행
      }
  }
  \`\`\`
  
  위처럼 설정하면 "/admin/**" URL로 들어온 요청을 관리자가 아니면 컨트롤러로 넘기지 않고 바로 \`403 Forbidden\` 응답을 내려 보냅니다.

- **특징:** 

  애플리케이션 전역의 공통 인가 정책을 중앙에서 한 번에 적용하기 좋고, 권한이 없는 요청을 컨트롤러·서비스 레이어로 넘기지 않고 선제적으로 차단할 수 있습니다.


---

#### 스프링 시큐리티 설정 기반 인가 방식

> HttpSecurity#authorizeHttpRequests 같은 DSL을 사용해, 설정 코드에서 URL 패턴별·HTTP 메서드별로 필요한 역할·권한을 선언적으로 정의하는 방식.

- **사용 방식:** 

  authorizeHttpRequests 안에서 requestMatchers를 이용해 "/admin/**" 는 \`hasRole("ADMIN")\`, "/user/**" 는 \`hasAnyRole("USER","ADMIN")\`처럼, URL 패턴·HTTP 메서드별로 어떤 권한이 있어야 접근할 수 있는지를 설정합니다.

- **예시:**

  \`\`\`java
  @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
      http.authorizeHttpRequests(auth -> auth
        .requestMatchers(HttpMethod.GET, "/admin/**").hasRole("ADMIN")
        .requestMatchers(HttpMethod.POST, "/posts/**").authenticated()
        .anyRequest().permitAll()
      );
  }
  \`\`\`
  위처럼 설정해 두면 "/admin/**" 로 들어오는 GET 요청은 자동으로 “관리자 전용 URL”로 취급되어 내부적으로 ROLE_ADMIN 보유 여부를 검사하고, 조건을 만족하지 못하면 컨트롤러에 도달하기 전에 403을 반환합니다.

- **특징:**

  보안 규칙을 한 곳(설정 클래스)에서 관리할 수 있어 “어떤 URL이 관리자 전용인지, 어떤 URL이 인증만 필요하거나 아예 모두에게 열려 있는지”를 한눈에 파악하기 쉽고, URL 구조나 권한 정책이 바뀔 때도 설정 코드만 수정하면 되어 유지보수가 수월합니다.

---
`,ty=Object.freeze(Object.defineProperty({__proto__:null,default:ey},Symbol.toStringTag,{value:"Module"})),ay=`---
summary: MSA에서 필요한 서비스 디스커버리, 설정 관리, API 게이트웨이, 메시징 같은 분산 시스템 문제를 Spring Cloud 기반으로 어떻게 풀 수 있는지 정리한 글입니다.
tags:
  - 자바
  - 스프링부트
  - 스프링 클라우드
created_date: 2026-02-28 15:18:21
last_modified_date: 2026-02-28 15:18:21
---

> **이 글에서 모놀리틱 아키텍처(\`Monolithic Architecture\`)와 마이크로 서비스 아키텍처(\`MSA; Micro Service Architecture\`)가 무엇이고 어떠한 특징을 가지는지 정리했습니다.**


## Spring Cloud: 너는 누구니 ?

Spring Cloud는 스프링 애플리케이션에서 분산 시스템(\`Distributed System\`)에 자주 등장하는 구성 관리, 서비스 검색, 마이크로 프록시 등의 기능을 빠르게 구현할 수 있도록 도와주는 솔루션입니다.
특히 MSA 처럼 서비스를 여러 개로 쪼갰을 때 공통적으로 필요해지는 인프라 기능들을 라이브러리 형태로 추상화해 제공합니다.

---

### Spring Cloud: MSA 에서 생기는 문제

모놀리틱 구조의 애플리케이션을 MSA 구조로 분리하면 서비스를 독립적으로 배포·확장할 수 있는 유연성을 얻는 대신, 인프라 레벨에서 새로운 문제들이 아래와 같이 등장합니다.

1. **독립적인 서비스의 동적인 서비스 주소** 

   각 서비스가 독립적으로 동작하고, 계속 생겼다가 사라지는 환경에서 서비스 주소(\`IP:PORT\`)가 고정돼 있지 않아 **어떤 프로세스가 어디에 떠 있는지 찾아주는 서비스 디스커버리와 로드 밸런싱 이 필요** 합니다.

2. **각 서비스의 독립적인 설정 파일**

   모놀리틱 애플리케이션에서는 하나의 설정만 관리하면 되지만, **MSA는 서비스 수만큼 설정 파일이 생겨 관리가 어렵습니다.** 
   
    이를 중앙에서 통합 관리하지 않으면 설정 상태와 버전을 파악하기 어렵고, 환경별 설정이 뒤섞이는 문제가 발생합니다. 

3. **클라이언트의 서비스 접근 지점 분산**

    서비스 주소가 자주 바뀌는 환경에서 클라이언트가 **각 엔드포인트를 직접 바라보면 주소 변경에 취약하고, 인증·인가 같은 공통 기능을 서비스마다 중복 구현**해야 합니다.
    
    그래서 **API 게이트웨이 하나로 진입점을 고정**하고, **내부 라우팅과 서비스 디스커버리를 함께 맡기는 패턴을 많이 사용**합니다.

4. **네트워크 장애와 부분 실패에 대한 대응**

   모놀리틱에서는 메서드 호출로 끝나던 통신이 **MSA에서는 네트워크 호출로 바뀌면서, 일부 서비스 장애가 연쇄 장애로 번지기 쉽습니다.** 

   그래서 **타임아웃·재시도·서킷 브레이커 같은 회복 패턴**과, **분산된 로그·메트릭·트레이스를 한곳에서 모아 보는 관측 체계가 필수**가 됩니다.




---

### Spring Cloud: MSA 아키텍처 구조 미리보기


> 아래 이미지는 Gemini Nano Banana2 로 생성하였습니다.

![스프링 클라우드: MSA 아키텍처 미리보기](spring_cloud_msa_architecture_preview.png)

---


- **API Gateway**

  클라이언트는 여러 **서비스를 직접 호출하지 않고, API Gateway 를 호출**합니다.  
  
  Gateway는 인증·인가, 로깅, 라우팅 같은 공통 기능을 처리한 뒤, 요청 URL·HTTP 메서드·헤더 등의 라우팅 규칙에 따라 적절한 마이크로서비스로 요청을 전달합니다.


- **Service Discovery (Eureka)**

  각 마이크로서비스는 자신의 인스턴스 정보를 Eureka에 등록하고, 다른 서비스는 Eureka를 통해 대상 서비스의 위치를 조회함으로써,
  서비스 주소가 자주 바뀌는 환경에서도, **개별 서비스가 서로의 IP·포트에 직접 의존하지 않기 때문에 서비스 간 결합도를 낮출 수 있습니다.**

- **Config Server**  

  여러 **서비스의 설정을 Git이나 파일 시스템 같은 외부 저장소 한 곳에서 관리**하고, 서비스는 **부팅 시점에 Config Server에서 이를 읽어 적용**합니다.
  
  공통 설정과 서비스별 설정을 분리해 재사용할 수 있고, \`/actuator/refresh\` 같은 기능을 이용하면 코드 배포 없이도 런타임에 설정을 변경·반영할 수 있습니다.


- **Message Broker(Kafka/RabbitMQ)**  

  주문 생성, 결제 완료와 같은 이벤트를 메시지 브로커를 통해 발행·구독하게 하면 **서비스 간 통신 일부를 비동기 이벤트 기반으로 처리**할 수 있습니다.
  
  이 방식은 서비스 간 결합도를 낮추고, 소비 서비스의 처리 속도에 맞춰 메시지를 버퍼링할 수 있어 트래픽 급증이나 일시적인 장애에도 더 유연하게 대응하게 해 줍니다



---

`,ly=Object.freeze(Object.defineProperty({__proto__:null,default:ay},Symbol.toStringTag,{value:"Module"})),iy=`---
summary: 모놀리틱과 MSA의 특징을 비교하고, 언제 어떤 아키텍처를 선택하면 좋을지 정리한 글입니다.
tags:
  - 자바
  - 스프링부트
  - 스프링 클라우드
created_date: 2026-02-27 10:18:21
last_modified_date: 2026-02-27 10:18:21
---

> **이 글에서 모놀리틱 아키텍처(\`Monolithic Architecture\`)와 마이크로 서비스 아키텍처(\`MSA; Micro Service Architecture\`)가 무엇이고 어떠한 특징을 가지는지 정리했습니다.**

## 모놀리틱(\`Monolithic\`): 모든 것이 한 곳에

모놀리틱 아키텍처(\`Monolithic Architecture\`) 는 하나의 코드베이스로 여러 비즈니스 기능을 수행하는 소프트웨어 개발 모델로,
단일 애플리케이션 안에는 웹 레이어, 비즈니스 로직, 데이터 액세스, 배치 작업까지 대부분의 기능이 모두 들어 있습니다.

모놀리틱 아키텍처는 개발·빌드·배포가 하나의 단위로 묶여 있어 새로운 기능을 빠르게 추가하고 MVP를 만들기 좋습니다. 

다만 애플리케이션이 커질수록 모듈 간 의존성이 복잡해져 작은 수정에도 전체를 다시 빌드·배포해야 합니다.
또한 특정 기능에만 트래픽이 몰려도 애플리케이션 전체를 스케일 아웃해야 하므로 인프라 비용과 운영 복잡도가 함께 증가합니다. 

---

### 모놀리틱: 규모가 커질수록 생기는 문제들

- **변경의 영향 범위를 예측하기 어렵다.**
  
  기능 간 결합도가 높아 한 모듈을 수정했을 뿐인데도, 예상치 못한 다른 부분에서 사이드 이펙트가 발생하기 쉽습니다.

- **배포 리스크가 크다.**

  하나의 거대한 배포 단위를 사용하기 때문에, 작은 기능 추가·버그 수정에도 전체 애플리케이션을 다시 빌드하고 배포해야 하며, 장애 발생 시 서비스 전체가 영향을 받을 수 있습니다.


- **필요한 부분만 골라 확장하기 어렵다.**

  특정 기능이나 도메인에만 트래픽이 몰리더라도 해당 부분만 따로 스케일 아웃할 수 없고, 애플리케이션을 통째로 여러 대 띄워야 해서 인프라 자원이 비효율적으로 쓰이고 비용도 함께 증가합니다.

- **팀별로 독립적인 개발·배포가 어렵다.**

  도메인별로 팀을 나누어도 같은 코드를 동시에 수정하게 되고, 팀별로 독립적인 배포 주기를 갖기 어렵습니다.

---

## 마이크로 서비스 아키텍처(\`MSA\`): 여러 개로 분리

마이크로 서비스 아키텍처(\`MSA; Micro Service Architecture\`)는 하나의 거대한 애플리케이션을 도메인 단위로 쪼개 여러 개의 독립적인 서비스로 나누어 개발·배포하는 방식입니다.

각 서비스는 자기만의 코드베이스를 가지고, 상품·주문·결제처럼 기능별로 나뉘어 필요에 따라 각각 따로 배포·확장할 수 있습니다. 
덕분에 주문 서비스만 스케일 아웃하거나 결제 서비스만 롤백하는 식의 운영이 가능하지만, 그만큼 서비스 디스커버리·설정 관리·통신·장애 전파·관측 같은 분산 시스템 특유의 복잡도도 함께 늘어납니다.

---

### MSA: 도입했을 때 얻는 이점

- **서비스 단위로 독립적인 배포·확장이 가능하다.**
  
  트래픽이 몰리는 주문·결제 같은 서비스만 스케일 아웃할 수 있고, 장애 발생 시 해당 서비스만 롤백해 전체 장애를 최소화할 수 있습니다.

- **서비스마다 도메인에 맞는 기술 스택을 선택하기 쉽다.**

  언어·프레임워크·데이터베이스 등을 서비스별로 다르게 가져갈 수 있어, 장기적으로 기술 부채를 줄이고 새로운 기술을 점진적으로 도입하기에 유리합니다.

- **팀별로 독립적인 개발·배포하기 쉽다.**

  서비스 단위로 팀이 나누어 여러 기능을 동시에 개발하기 더 쉽고, 다른 팀의 릴리스 일정에 얽매이지 않고 자기 속도대로 개발하고 배포할 수 있습니다.


---

### MSA: 도입 시, 고려해야 할 비용


- **서비스가 늘어날수록 시스템이 복잡해진다.**

  서비스 간 통신, 서비스 디스커버리, 설정 관리, 로드 밸런싱, 장애 전파 제어, 분산 트랜잭션, 관측(로그·모니터링·트레이싱) 같은 분산 시스템 특유의 문제를 직접 다뤄야 합니다.

- **서비스 간 네트워크 통신으로 인한 비용·복잡도가 증가한다.**

  모든 통신이 네트워크를 거치기 때문에 모놀리틱에 비해 성능·지연 비용이 증가합니다.

- **운영 및 인프라 복잡도가 증가한다.**

  API 게이트웨이·설정 서버·서비스 레지스트리 같은 인프라 구성 요소가 늘어나면서 운영·배포 파이프라인을 설계하고 유지하는 일이 더 복잡해지고, 그만큼 운영·인프라 쪽에서 감수해야 할 부담도 커집니다.


---

## 모놀리틱 vs 마이크로 서비스 아키텍처

모놀리틱과 마이크로 서비스 아키텍처 중 어떠한 구조를 사용하는 것이 좋은지는 상황에 따라 다릅니다. 
일반적으로는 모놀리틱 구조로 먼저 개발하고, 규모가 커지거나 병목 구간이 생길 때 MSA로의 전환을 고려해보는 것이 좋습니다.


| 기준      | 모놀리틱이 어울리는 상황    | MSA가 어울리는 상황       |
| ------- | ---------------- | ------------------ |
| 팀/조직    | 작은 팀, 역할 단순      | 여러 팀, 도메인별로 나뉜 조직  |
| 도메인 복잡도 | 도메인이 단순함         | 도메인이 복잡하고 경계가 뚜렷함  |
| 트래픽 패턴  | 전체가 비슷하게 사용됨     | 일부 기능에 트래픽 집중      |
| 배포/운영   | 배포 빈도 낮음, 리스크 단순 | 서비스별로 자주, 독립 배포 필요 |



---
`,ry=Object.freeze(Object.defineProperty({__proto__:null,default:iy},Symbol.toStringTag,{value:"Module"})),sy=`---
summary: 스프링부트란 ?
tags:
  - springboot
  - WS
  - WAS
references: 
created_date: 2025-08-11T21:54:15.000Z
last_modified_date: 2025-08-11T21:54:15.000Z
---

# 스프링 부트란 무엇일까요 ? 

스프링부트는 스프링 프레임워크를 좀 더 손쉽게 사용할 수 있게 스프링 프레임워크의 불편함을 해소하고 기타 편의 기능을 제공하는 프레임워크이다. 

## 키워드 

### 자동 설정(Auto Configuration)

스프링부트 프로젝트를 생성하면 기본적으로 \`spring-boot-starter\` 의존성이 추가되어 있습니다. 이것을 통해 \`spring-core\` 라이브러리와 \`logging\`, \`yaml\`, \`jarkarta.annotation.api\`  와 같은 여러 라이브러리를 사용할 수 있습니다. 

이러한 기본 라이브러리만으로는 WAS 를 만들 수 없기때문에 \`spring-boot-starter-web\`, ‎\`spring-boot-starter-security\` 과 같은 스타터를 추가하면 WAS 를 만들기 위해 필요한 \`Dispatcher Servlet\`, 내장 톰캣, 포트 설정 등의 여러 설정이 자동으로 적용됩니다. 개발자는 해당 설정을 그대로 사용할 수 있으며 편의에 따라 재정의하여 사용할 수도 있습니다.

### WS(Web Server), WAS(Web Application Server)


- Web Server : 클라이언트에 정적인 파일(HTML, CSS 등)을 제공하는 서버이다.
- Web Application Server : 클라이언트가 전송한 요청을 동적으로 처리한 후, 응답을 주는 서버이다.

스프링부트는 내장 톰캣을 통해 클라이언트가 전송한 요청을 동적으로 처리한 후 응답을 주는 웹 애플리케이션 서버를 쉽게 만들 수 있게 해주는 프레임워크이다.

> 스프링 프레임워크는 *객체 관리, 트랜잭션 관리, 의존성 주입* 등의 다양한 기능을 제공해 **자바로 복잡한 웹 애플리케이션을 만들 수 있게 도와주는 프레임워크**로 외장 톰캣 등 WAS 를 배포해서 사용해야하며 자체적으로 WAS 의 역할을 수행하지는 않는다.


### 독립 실행형 애플리케이션

스프링부트는 내장 톰캣을 지원하므로, 프로젝트를 빌드하면 생성되는 ‎\`.jar\` 파일에 톰캣이 포함되어 있습니다. 이 ‎\`.jar\` 파일을 실행하기만 해도 별도의 서버 설치 없이 웹 애플리케이션 서버(WAS)로 사용할 수 있습니다. 반면, 외부 톰캣과 같은 WAS에 배포하려면 ‎\`.war\` 파일로 빌드해야 하며, 이 경우 내장 톰캣이 아닌 외부 WAS에서 애플리케이션을 실행하게 됩니다.

### \`Properties\` 또는 \`YAML\` 설정

스프링 프레임워크는 환경 설정을 주로 XML 설정 파일을 통해 구성했지만, 스프링부트는 ‎\`.properties\`나 ‎\`.yml\` 파일을 사용하여 보다 간편하게 환경 설정을 구성할 수 있습니다.





`,oy=Object.freeze(Object.defineProperty({__proto__:null,default:sy},Symbol.toStringTag,{value:"Module"})),uy=`---
summary: 스프링부트, 빈(Bean)이란
tags:
  - 빈
  - Bean
references:
created_date: 2025-08-11T22:42:49.000Z
last_modified_date: 2025-08-11T22:43:18.000Z
---
# 빈(Bean)의 정의  
  
빈이란, 스프링의 **어플리케이션 컨텍스트(Application Context)**가 생성하고 등록해서 관리하는 객체를 의미합니다. 즉, 개발자가 직접 객체를 생성하는 대신, 스프링이 객체의 생성과 생명주기 관리를 담당합니다. 이렇게 생성된 객체들은 어플리케이션 컨텍스트에 등록되어 필요할 때마다 사용할 수 있습니다.  
  
## 왜 빈을 사용할까?  
  
스프링에서 빈을 사용하는 가장 큰 이유는 객체 관리와 의존성 설정의 편리함입니다. 스프링 컨테이너가 객체를 대신 생성하고 관리해주기 때문에, 개발자는 복잡한 객체 생성 과정이나 의존성 연결에 신경 쓰지 않아도 됩니다. 이를 통해 코드의 결합도를 낮추고, 유지보수성과 테스트 용이성을 높일 수 있습니다.  
  
## 빈 등록 방법  
  
스프링에서는 여러 가지 방법으로 빈을 등록할 수 있습니다. 대표적으로는 ‎\`@Component\`, ‎\`@Service\`, ‎\`@Repository\`와 같은 어노테이션을 클래스에 붙여 빈으로 등록하거나, 설정 파일을 통해 직접 등록할 수도 있습니다. 그러면 MyBean 이라는 객체를 여러 방법을 사용하여 빈으로 등록해보는 예제 코드를 작성해보겠습니다.

- 예제 클래스
	\`\`\`java
	public class MyBean {  
		public String greet() {  
			return "Hello from MyBean!";  
		}  
	}
	\`\`\`


### \`@Bean\` 사용

- \`@Bean\` 어노테이션을 사용한 예제
	\`\`\`java
	@Configuration
	public class MyConfig {
	
		@Bean
		public MyBean myBean() {
			return new MyBean();
		}
	}
	\`\`\`

\`@Bean\`  어노테이션을 사용할 때는 반드시 \`@Configuration\` 으로 등록한 클래스 안에서만 등록 가능합니다. \`@Configuration\` 어노테이션을 사용한 클래스는 스프링 차원에서 특별하게 처리됩니다. \`@Configuration\` 어노테이션 은 설정 클래스로서 해당 클래스 내부의 \`@Bean\` 을 호출해 빈 객체를 생성하고 어플리케이션 컨텍스트에 등록하는 기능을 수행합니다.

### \`@Component\` 사용

- \`@Component\` 어노테이션을 사용한 예제
	\`\`\`java
	@Component // 클래스 위에 @Component 추가
	public class MyBean {  
		public String greet() {  
			return "Hello from MyBean!";  
		}  
	}
	\`\`\`

내부적으로  \`@Repository\`, \`@Service\`, \`@Configuration\`, \`@Controller\`, \`@RestController\`  어노테이션 모두 \`@Component\` 어노테이션을 사용하기 때문에 각 어노테이션들 모두 \`@Component\` 어노테이션과 동일한 방식으로 빈으로 등록할 수 있습니다.


## 빈 등록 시 주의 사항

### \`@ComponentScan\`

특정 클래스를 빈으로 등록하기 위해서는 \`@ComponentScan\` 
`,cy=Object.freeze(Object.defineProperty({__proto__:null,default:uy},Symbol.toStringTag,{value:"Module"})),dy=`---
summary: 스프링부트, 제어의 역전(Ioc) 와 의존성 주입(DI)
tags:
  - DI
  - IoC
references: 
created_date: 2025-08-11T22:42:49.000Z
last_modified_date: 2025-08-11T22:43:18.000Z
---
# 제어의 역전(IoC)과 의존성 주입(DI)

스프링부트(Spring Boot)를 사용할 때 반드시 이해해야 하는 핵심 개념 중 하나가 바로 **제어의 역전(IoC)**과 **의존성 주입(DI)**입니다.

## 제어의 역전(IoC: Inversion of Control)

IoC란 객체의 생성과 생명주기 관리의 주도권을 개발자가 아닌 프레임워크(스프링)에게 넘기는 것을 의미합니다. 기존에는 개발자가 직접 객체를 생성하고 관리했지만, IoC를 적용하면 스프링 컨테이너가 객체를 대신 생성하고 관리합니다. 이를 통해 코드의 결합도를 낮추고, 더 유연하고 확장성 있는 구조를 만들 수 있습니다.

- 기존 객체 생성 방식 예시:
    
    \`\`\`java
    public class A {
        private B b;
    
        public A(B b) {
            this.b = b;
        }
    }
    
    public class B {}
    
    public class Main {
        public static void main(String[] args) {
            B b = new B();
            A a = new A(b);
        }
    }
    \`\`\`
    

## 의존성 주입(DI: Dependency Injection)

DI는 IoC의 대표적인 구현 방법입니다. 객체가 필요로 하는 의존성(다른 객체)을 직접 생성하지 않고, 외부(스프링 컨테이너)에서 주입받는 방식을 말합니다. 이렇게 하면 객체 간의 관계를 코드 내부가 아니라 설정이나 어노테이션을 통해 정의할 수 있습니다. DI를 적용하면 테스트가 쉬워지고, 코드의 재사용성과 유지보수성이 크게 향상됩니다.

- 의존성 주입 예시:
    
    \`\`\`java
    // 의존성 주입이 없는 경우
    public class UserService {
        private UserRepository userRepository = new UserRepository();
    }
    
    // 의존성 주입이 적용된 경우
    public class UserService {
        private final UserRepository userRepository;
    
        // 생성자 주입 방식
        public UserService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }
    }
    \`\`\`
    

스프링에서는 \`@Autowired\`, \`@Component\`, \`@Service\`와 같은 어노테이션을 활용해 DI를 손쉽게 적용할 수 있습니다.
`,fy=Object.freeze(Object.defineProperty({__proto__:null,default:dy},Symbol.toStringTag,{value:"Module"})),py=`---
summary: 
tags:
  - Java
  - Charset
  - UTF-8
  - EUC-KR
references: 
created_date: 2026-02-06 21:28:56
last_modified_date: 2026-02-06 21:28:56
visibility: hidden
---

> dsfd`,my=Object.freeze(Object.defineProperty({__proto__:null,default:py},Symbol.toStringTag,{value:"Module"})),hy=`---
summary: java.io의 스트림·블로킹 모델 한계를 짚고, java.nio가 버퍼·채널·셀렉터 조합으로 어떻게 다른 I/O 모델을 제공하는지 정리했습니다.
tags:
  - Java
  - JavaNIO
references: 
created_date: 2025-08-23 21:28:56
last_modified_date: 2026-01-25 21:28:56
---


## \`java.nio\`: java.io의 한계를 넘은 새로운 모델

애플리케이션을 개발하다 보면 파일이나 네트워크를 통해 데이터를 읽고 쓰는 작업을 자주 하게 됩니다. 간단한 유틸리티나 소규모 서비스라면 \`java.io\`만으로도 충분하지만, 여러 클라이언트와 동시에 통신해야 하는 서버 애플리케이션이나, 대량의 파일 I/O를 처리해야 하는 시스템을 개발해야 하는 경우에는 \`java.io\`만으로는 한계가 보이기 시작합니다. 이런 상황에서 등장한 것이, \`java.io\`의 스트림/블로킹 방식과는 다른 새로운 I/O 모델인 \`java.nio\` 입니다.

---

### 기존 IO(\`java.io\`) 라이브러리의 한계

\`java.io\`는 \`1.0\` 버전부터 제공되던 전통적인 입출력 라이브러리입니다. 데이터는 \`InputStream\` / \`OutputStream\`을 통해 **스트림 형태로 한 방향으로 흐르고**, 읽기/쓰기 메서드 호출이 완료될 때까지 해당 스레드는 그대로 블로킹됩니다.

이 구조는 코드가 단순한 대신, 동시성이 중요한 서버 환경에서는 다음과 같은 한계를 드러냅니다.

- **스트림(Stream) 기반**: \`InputStream\`, \`OutputStream\`, \`Reader\`, \`Writer\` 같은 타입 위주 설계  
- **블로킹 I/O**: \`read()\`, \`write()\`가 완료될 때까지 스레드가 멈춰 있음  
- **연결 1개당 스레드 1개에 가깝게 설계되는 경우가 많아**, 연결 수가 많아지면 스레드 수와 컨텍스트 스위치 비용이 함께 폭증

작은 프로그램에는 큰 문제가 아니지만, 많은 소켓 연결을 다루는 서버를 만들기에는 구조적인 제약이 있습니다.

---

### \`java.nio\`: 버퍼·채널·셀렉터 기반의 새로운 I/O 모델 

이런 한계를 넘기 위해 \`1.4\` 버전에서 도입된 것이 \`java.nio\`입니다. 핵심 아이디어는 세 가지입니다.

- 데이터를 스트림 대신 **버퍼(Buffer)** 에 담고  
- 입출력 대상은 **채널(Channel)** 을 통해 다루며  
- 여러 채널의 I/O 이벤트를 **셀렉터(Selector)** 를 통해 한 곳에서 모아서 처리한다 

이를 통해, **적은 수의 스레드만으로도 많은 연결을 관리할 수 있는 기반을 마련**하고, **논블로킹 I/O를 자연스럽게 지원**하게 됩니다.

---

#### \`java.nio\`: 채널(Channel)

채널(\`Channel\`)은 기존의 \`InputStream\` / \`OutputStream\`을 대체하는 **양방향 I/O 통로**입니다. 

- 대표 구현: \`FileChannel\`, \`SocketChannel\`, \`ServerSocketChannel\` 등  
- 읽기와 쓰기를 모두 지원  
- \`configureBlocking(false)\`로 논블로킹 모드 설정 가능  

---

#### \`java.nio\`: 버퍼(Buffer)

**버퍼(\`Buffer\`)** 는 실제 데이터를 담아 두는 메모리 블록입니다. 가장 많이 쓰이는 타입은 **\`ByteBuffer\`** 입니다. 

- 주요 속성: \`capacity\`(최대 용량), \`position\`(현재 위치), \`limit\`(읽기/쓰기 한계)  
- 쓰기 모드에서 데이터를 채운 뒤 \`flip()\`을 호출해 읽기 모드로 전환  
- \`clear()\` / \`compact()\` 등으로 다음 I/O를 위한 상태를 조절  

---

#### \`java.nio\`: 셀렉터(Selector)

**셀렉터(\`Selector\`)** 는 여러 채널을 등록해 두고, 그 중에서 **“지금 이벤트가 발생한 채널”만 골라서 처리할 수 있게 해주는 멀티플렉서**입니다. 

- 채널을 \`OP_ACCEPT\`, \`OP_READ\`, \`OP_WRITE\` 같은 관심 이벤트와 함께 등록  
- \`select()\` 호출로 이벤트가 생긴 채널 목록만 가져와 처리  
- **하나의 스레드가 여러 채널의 I/O를 감시·처리**하는 구조를 구현 가능  

***

### \`java.nio\`: 어떻게 사용할까?

\`java.nio\` 의 채널(\`Channel\`), 버퍼(\`Buffer\`), 셀렉터(\`Selector\`)를 사용하면 아래와 같이 논블로킹 방식의 서버를 구현할 수 있습니다.

- **\`java.nio\`를 사용한 서버 구현**
  \`\`\`java
  public class NioServerExample {

      public static void main(String[] args) throws IOException {
          // 1. 서버 채널 열고 논블로킹 모드로 전환
          ServerSocketChannel serverChannel = ServerSocketChannel.open();
          serverChannel.configureBlocking(false);
          serverChannel.bind(new InetSocketAddress(8080));

          // 2. 셀렉터 생성 후 서버 채널 등록 (새 연결 수락 이벤트 관심)
          Selector selector = Selector.open();
          serverChannel.register(selector, SelectionKey.OP_ACCEPT);

          ByteBuffer buffer = ByteBuffer.allocate(1024);

          while (true) {
              // 3. 처리할 이벤트가 생길 때까지 블로킹
              selector.select();

              Set<SelectionKey> keys = selector.selectedKeys();
              Iterator<SelectionKey> it = keys.iterator();

              while (it.hasNext()) {
                  SelectionKey key = it.next();
                  it.remove();

                  if (key.isAcceptable()) {
                      // 4. 새 연결 수락
                      SocketChannel client = serverChannel.accept();
                      client.configureBlocking(false);
                      System.out.println("[ACCEPT] " + client.getRemoteAddress());

                      // 이후에는 이 채널의 READ 이벤트만 감시
                      client.register(selector, SelectionKey.OP_READ);

                  } else if (key.isReadable()) {
                      // 5. 기존 연결에서 데이터 읽기
                      SocketChannel client = (SocketChannel) key.channel();
                      buffer.clear();
                      int read = client.read(buffer);

                      if (read <= 0) {
                          System.out.println("[CLOSE] " + client.getRemoteAddress());
                          key.cancel();
                          client.close();
                          continue;
                      }

                      buffer.flip();
                      byte[] bytes = new byte[buffer.remaining()];
                      buffer.get(bytes);
                      String line = new String(bytes);

                      System.out.println("[RECV] " + line.trim()
                                        + " from " + client.getRemoteAddress());
                  }
              }
          }
      }
  }
  \`\`\`

위 예제는 \`java.nio\`의 채널·버퍼·셀렉터를 조합해 서버를 구현한 코드로, \`java.io\`와 달리 하나의 셀렉터 기반 이벤트 루프가 등록된 채널들 중에서 I/O가 가능한 채널만 골라 순차적으로 조금씩 처리합니다.`,gy=Object.freeze(Object.defineProperty({__proto__:null,default:hy},Symbol.toStringTag,{value:"Module"})),_y=`---
summary: 채널(FileChannel, SocketChannel)을 사용해 파일 I/O와 소켓 I/O를 처리하는 기본 패턴, 스트림 기반 java.io와의 차이를 정리했습니다.
tags:
  - Java
  - JavaNIO
references:
created_date: 2026-02-03 21:28:56
last_modified_date: 2026-02-03 21:28:56
visibility: published
---

> 이 글에서는 JDK 1.4 에 도입된 **java.nio** 의 **채널(\`Channel\`)** 이 무엇인지, 어떻게 사용하는지 간단하게 정리했습니다.

---

# \`java.nio\`: 채널(\`Channel\`)

채널(\`Channel\`)은 파일이나 소켓에서 데이터를 읽고 쓰기 위해 사용하는 입·출력 통로입니다
스트림과 달리 채널은 읽고 쓰는 작업을 모두 지원하며, 바이트 버퍼(\`ByteBuffer\`) 를 통해서만 데이터를 주고받습니다. 

- **스트림(\`Stream\`) 특징**
  - \`java.io\` 에서 데이터가 흐르는 단방향 통로
  - 동기 방식만 지원한다.
- **채널(\`Channel\`) 특징**
  - \`java.nio\` 에서 데이터가 흐르는 양방향 통로
  - 동기/비동기 방식을 모두 지원한다.

---

> 바이트 버퍼 관련해서 정리한 글을 보고싶으시다면 [보러가기](https://bak-libra26.co.kr/posts/%EA%B0%9C%EB%B0%9C/%EC%9E%90%EB%B0%94/NIO/Java_NIO:_%EB%B0%94%EC%9D%B4%ED%8A%B8_%EB%B2%84%ED%8D%BC%EB%A1%9C_%EB%B2%84%ED%8D%BC_%EC%83%81%ED%83%9C_%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0) 를 눌러주세요

---

## \`Channel\`: 여러가지 채널
채널 구현체는 여러 가지가 있는데, 어떤 대상에 I/O 할지에 따라 알맞은 구현체를 선택하면 됩니다. 
파일은 \`FileChannel\`, TCP 서버는 \`ServerSocketChannel\`, TCP 클라이언트는 \`SocketChannel\`, UDP 통신은 \`DatagramChannel\`을 사용합니다.
상황에 맞게 사용할 채널을 고르고, 그 채널과 \`ByteBuffer\`를 어떻게 함께 쓰는지만 익히면 됩니다.
제가 자주 사용하는 채널에 대한 정보를 아래에 표로 정리해봤습니다.

| 채널 종류            | 사용하는 상황              |  설명                                          |
|----------------------|------------------------|---------------------------------------------------|
| FileChannel          | 파일 I/O               | 파일에서 데이터를 읽고 쓸 때 사용하는 채널 |
| SocketChannel        | TCP 클라이언트 소켓    | 서버와 TCP 로 데이터를 주고받는 채널 |
| ServerSocketChannel  | TCP 서버 소켓          | 클라이언트의 TCP 연결을 받아들이는 채널 |


---

### \`FileChannel\`: 파일을 다룰때는 ?

파일을 다룰 때는 \`java.nio.channels.FileChannel\` 을 사용합니다.

--- 

#### \`FileChannel\`: 파일을 읽어보자

- \`FileChannel\`: 파일 읽기 예제
  \`\`\`java
  Path path = Paths.get("example.txt");

  // 1. 채널 열기 (읽기 전용)
  try (FileChannel channel = FileChannel.open(path, StandardOpenOption.READ)) {

      ByteBuffer buffer = ByteBuffer.allocate(1024);

      // 2. 채널 → 버퍼로 읽기
      int readBytes = channel.read(buffer);
      System.out.println("read bytes = " + readBytes);

      // 3. 읽기 모드로 전환
      buffer.flip();

      byte[] bytes = new byte[buffer.remaining()];
      buffer.get(bytes);

      String content = new String(bytes);
      System.out.println(content);
  }
  \`\`\`

  \`FileChannel.open(Path path, OpenOption... options)\` 을 사용해서 경로(\`Path\`) 에 해당하는 파일에 채널을 만듭니다. 
  이후 \`channel.read(ByteBuffer buffer)\` 로 파일 내용을 채널에서 버퍼로 읽어오고, 애플리케이션은 이렇게 채워진 바이트 버퍼를 꺼내서 문자열로 바꾸거나 파싱해서 사용합니다.

  > \`FileChannel.open(Path path, OpenOption... options)\` 에서 \`OpenOption... options\` 는 \`OpenOption\` 을 0개 이상 넘길 수 있는 가변 매개변수를 의미합니다.
  

---

#### \`FileChannel\`: 파일에 데이터를 써보자.

- \`FileChannel\`: 파일에 데이터 쓰기 예제
  \`\`\`java
  Path path = Paths.get("example-write.txt");
  String data = "Hello FileChannel!";

  ByteBuffer buffer = ByteBuffer.wrap(data.getBytes());

  // 1. 채널 열기 (파일 없으면 만들고, 있으면 덮어쓰기)
  try (FileChannel channel = FileChannel.open(
          path,
          StandardOpenOption.CREATE,
          StandardOpenOption.WRITE
  )) {
      // 2. 버퍼 → 채널로 쓰기
      while (buffer.hasRemaining()) {
          channel.write(buffer);
      }
  }
  \`\`\`

  파일에 작성할 문자열을 먼저 \`ByteBuffer\`에 담은 후, \`FileChannel\`을 열고 \`FileChannel.write(ByteBuffer buffer)\` 메서드를 통해 버퍼에 있는 데이터를 파일로 흘려보냅니다. 이 과정을 통해 애플리케이션 → 버퍼 → 채널 → 파일 순서로 데이터가 이동하게됩니다.

---

### \`Files\` 를 통해 이 모든 과정을 손쉽게

개인적으로는 파일을 읽거나 파일에 데이터를 쓰는 간단한 작업은 파일 채널(\`FileChannel\`) 이 아니라 \`Files\` 에 정의된 \`Files.readAllBytes()\`, \`Files.write()\` 과 같은 유틸리티 메서드를 사용합니다. 
\`Files\` 안에 정의되어있는 유틸리티 메서드들은 내부적으로 \`FileChannelImpl\` 을 사용해서 이 과정을 쉽게 처리할 수 있도록 도와줍니다.

---

### \`ServerSocketChannel\`: TCP 서버에는 ?

\`ServerSocketChannel\`은 TCP 서버를 만들 때 사용하는 채널입니다. \`ServerSocketChannel.open()\` 으로 채널을 만들고 \`bind(int port)\` 로 포트를 열어 주면, TCP 서버는 해당 포트로 들어오는 클라이언트 접속을 받을 준비가 됩니다.

별도 설정(\`configureBlocking(boolean block)\`)을 해주지 않는다면 서버는 동기 방식으로 동작하기 때문에 클라이언트가 접속할 때까지 \`accept()\` 라인에서 블로킹되어 기다립니다.

연결이 들어오면 \`accept()\` 가 그 클라이언트와 통신할 \`SocketChannel\` 하나를 만들어 반환하는데 이후 해당 \`SocketChannel\` 을 통해 데이터를 주고받게 됩니다.



- \`ServerSocketChannel\` 사용 예제
  \`\`\`java
  public class ServerSocketChannelDemo {
      public static void main( String[] args ) throws IOException {
        try (ServerSocketChannel serverChannel = ServerSocketChannel.open()) {
            serverChannel.bind(new InetSocketAddress(8081));
            System.out.println("listening on port " + 8081);

            try (SocketChannel socketChannel = serverChannel.accept()) {
                System.out.println("connected from " + socketChannel.getRemoteAddress());

                // 연결 후, 진행될 작업들 ..
            }
        }
      }
  }
  \`\`\`

  만약 \`configureBlocking(false)\` 와 셀렉터(\`Selector\`)를 함께 사용하면 하나의 쓰레드에서 여러 클라이언트 채널을 번갈아가며 처리하는 TCP 서버를 만들 수 있습니다.

---

### \`SocketChannel\`: TCP 클라이언트에는 ?

\`SocketChannel\`은 TCP 클라이언트를 만들 때 쓰는 채널로 \`SocketChannel.open(new InetSocketAddress("localhost", 8081))\` 처럼 서버 주소를 넣어 호출하면 해당 서버로 연결을 시도합니다. 

TCP 서버와 연결된 이후에는 해당 \`SocketChannel\` 을 통해 데이터를 주고받는데, 이 때 바이트 버퍼(\`ByteBuffer\`) 의 \`read(ByteBuffer buffer)\`, \`write(ByteBuffer buffer)\` 메서드를 사용합니다.

- \`SocketChannel\` 사용 예제
  \`\`\`java
  public class SocketChannelClientDemo {
      public static void main(String[] args) throws IOException {
          InetSocketAddress address = new InetSocketAddress("localhost", 8081);

          try (SocketChannel socketChannel = SocketChannel.open(address)) {
              System.out.println("connected to " + address);

              // 서버로 메시지 보내기
              String message = "Hello from client!";
              ByteBuffer writeBuffer = ByteBuffer.wrap(message.getBytes());
              while (writeBuffer.hasRemaining()) {
                  socketChannel.write(writeBuffer);
              }

              // 에코 응답 읽기
              ByteBuffer readBuffer = ByteBuffer.allocate(1024);
              int read = socketChannel.read(readBuffer);
              if (read > 0) {
                  readBuffer.flip();
                  byte[] bytes = new byte[readBuffer.remaining()];
                  readBuffer.get(bytes);
                  System.out.println("echo from server = " + new String(bytes));
              }
          }
      }
  }
  \`\`\`




---
`,by=Object.freeze(Object.defineProperty({__proto__:null,default:_y},Symbol.toStringTag,{value:"Module"})),yy=`---
summary: 바이트 버퍼(ByteBuffer) 의 position/limit/capacity와 flip/clear/compact 동작을 중심으로, 버퍼가 읽기/쓰기 모드를 어떻게 오가며 데이터를 다루는지 정리했습니다.
tags:
  - Java
  - JavaNIO
references: 
created_date: 2026-01-27 21:28:56
last_modified_date: 2026-01-27 21:28:56
visibility: public
---

> 이 글에서는 JDK 1.4 에 도입된 **java.nio** 의 **바이트 버퍼(\`ByteBuffer\`)** 가 무엇인지, 어떻게 사용하는지 간단하게 정리했습니다.

---

# \`java.nio\`: 바이트버퍼(\`ByteBuffer\`)  

바이트 버퍼(\`ByteBuffer\`)는 \`java.nio\` 에서 입출력 데이터를 효율적으로 다루기 위한 메모리 버퍼 클래스입니다. 

---

## \`ByteBuffer\`: 생성 위치에 따른 차이.

바이트 버퍼는 메모리 할당 위치에 따라 \`DirectByteBuffer\` 와 \`HeapByteBuffer\` 로 나눌 수 있 두 가지로 나눌 수 있습니다.
\`DirectByteBuffer\` 는 운영체제의 시스템 메모리에 직접 생성되어 커널 메모리와 직접 데이터를 교환하기 때문에 압도적인 성능적 이점이 존재하나 생성 비용이 높다는 단점이 존재합니다.
반면 \`HeapByteBuffer\` 는 \`JVM(Java Virtual Machine)\` 이 관리하는 힙 메모리에 생성되기 때문에 생성이 빠르나 I/O 작업 시 내부 복사 과정이 발생해 느리다는 단점이 존재합니다.

- **\`DirectByteBuffer\`**: **운영체제 시스템 메모리에 생성**된다.
  1. **\`allocateDirect(int capacity)\` 로 생성**한다.
  2. 운영체제(\`OS; Operating System\`)에 시스템 메모리를 할당받아야 한다. 
  2. 데이터 커널 메모리와 직접 데이터 교환하기 때문에 **대용량 파일 또는 네트워크 I/O 가 빠르다.** 
  
- **\`HeapByteBuffer\`**: **\`JVM\` 의 힙 메모리에 생성**된다.
  1. **\`allocate(int capacity)\` 로 생성**한다.
  2. \`JVM(Java Virtual Machine)\` 가 관리하는 힙 메모리 안 빈공간을 할당받아 생성한다.
  3. 파일 또는 네트워크 I/O 시, **내부 복사 과정이 필요하여 속도가 느리다.**

---
 
## \`ByteBuffer\`: 생성 방법

바이트버퍼를 생성하는 방식은 크게 3가지로 \`allocate(int capacity)\`, \`allocateDirect(int capacity)\`, \`wrap(byte[] array)\` 가 존재합니다.

---


### allocate(int capatiy)

- **\`allocate(int capacity)\` 를 통한 바이트 버퍼 생성 예시**
    \`\`\`java
    ByteBuffer buffer = ByteBuffer.allocate(1024);
    \`\`\`

**\`allocate(int capacity)\` 는 \`JVM\` 의 힙 메모리에 바이트 버퍼를 생성**하는 메서드입니다. 

---

### allocateDirect(int capatiy)

- **\`allocateDirect(int capacity)\` 를 통한 바이트 버퍼 생성 예시**
    \`\`\`java
    ByteBuffer buffer = ByteBuffer.allocateDirect(1024);
    \`\`\`

**\`allocateDirect(int capacity)\` 는 운영체제의 시스템 메모리에 바이트 버퍼를 생성**하는 메서드입니다.

---

### wrap(byte[] array)

- **\`wrap(byte[] array)\` 를 통한 바이트 버퍼 생성 예시**
  \`\`\`java
  byte[] bytes = new byte[16];
  ByteBuffer buffer = ByteBuffer.allocateDirect(bytes);
  \`\`\`

**\`wrap(byte[] array)\` 는 이미 존재하는 바이트 배열(\`byte[]\`) 를 사용하는 바이트 버퍼를 생성**하는 메서드입니다. 
\`allocate(int capacity)\`, \`allocateDirect(int capacity)\` 와는 달리 기존에 사용하는 배열로 바이트 버퍼를 사용할 수 있다는 장점이 있습니다.
다만 **기존 바이트 배열의 값이 바뀌면 버퍼 내용도 함께 바뀌므로 주의**해야합니다.

---

#### \`wrap(byte[] array)\` 주의점

- **\`wrap(byte[] array)\` 주의점 예제**
  \`\`\`java
  public class Demo {
    public static void main(String[] args) {
      byte[] bytes = new byte[8];
      ByteBuffer byteBuffer = ByteBuffer.wrap(bytes);
      System.out.println("(변경 전) 바이트 배열 = " + Arrays.toString(bytes));
      System.out.println("(변경 전) 바이트 버퍼 내부 바이트 배열 = " + Arrays.toString(byteBuffer.array()));
  
      byte[] hello = "hello".getBytes(StandardCharsets.UTF_8);
      for (int i = 0; i < hello.length; i ++) {
        byte val = hello[i];
        bytes[i] = val;
      }
  
      System.out.println("(변경 후) 바이트 배열 = " + Arrays.toString(bytes));
      System.out.println("(변경 후) 바이트 버퍼 내부 바이트 배열 = " + Arrays.toString(byteBuffer.array()));
    }
  }
  \`\`\`
  

- **\`wrap(byte[] array)\` 주의점 예제 로그**
  \`\`\`shell
  (변경 전) 바이트 배열 = [0, 0, 0, 0, 0, 0, 0, 0]
  (변경 전) 바이트 버퍼 내부 바이트 배열 = [0, 0, 0, 0, 0, 0, 0, 0]
  (변경 후) 바이트 배열 = [104, 101, 108, 108, 111, 0, 0, 0]
  (변경 후) 바이트 버퍼 내부 바이트 배열 = [104, 101, 108, 108, 111, 0, 0, 0]
  \`\`\`
  

---

## \`ByteBuffer\`: 다뤄보기

**바이트 버퍼**는 단순히 **바이트 배열을 감싼 객체가 아니라, 버퍼 상태(position/limit/capacity)를 함께 관리하는 채널 기반 I/O를 위한 버퍼 추상화**입니다

---

### \`ByteBuffer\`: \`capacity\`

**\`capacity\`** 는 **바이트 버퍼의 내부 바이트 배열의 최대 크기를 의미**합니다. 바이트 배열(\`byte[]\`) 과 마찬가지로 한 번 정해지면 절대 변하지 않습니다. 
만약 데이터를 더 많이, 더 적게 담고싶다면 새로운 크기의 버퍼를 만들어야합니다.

- **\`capacity\` 속성**
  \`\`\`java
  // 1024바이트(1KB) 크기의 버퍼 생성
  ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
  
  // 생성 시 지정한 크기는 변경할 수 없습니다.
  System.out.println(byteBuffer.capacity()); // 1024
  \`\`\`

---

### \`ByteBuffer\`: \`position\`

**\`position\`** 은 **바이트 버퍼가 다루는 바이트 배열에 데이터를 쓰거나 읽을 위치(인덱스)를 의미**합니다.

---

#### \`position\`: 데이터 쓰기

\`ByteBuffer.put(byte b)\` 는 바이트 버퍼에 데이터를 쓰는 가장 기본적인 메서드입니다. 
이 메서드가 호출되면 버퍼 내부에서는 다음과 같은 일이 일어납니다.

1. **현재 위치(position)에 기록**: 바이트 버퍼는 현재 \`position\`이 가리키는 인덱스에 전달받은 \`byte b\`를 저장합니다.
2. **포지션 자동 이동**: 쓰기 작업을 마친 직후, \`position\` 값을 자동으로 1 증가시킵니다.

이렇게 바이트 버퍼는 쓰기 작업 후, \`position\`이 다음 칸을 가리키게 함으로써, 인덱스를 일일이 계산하지 않아도 연속해서 데이터를 채워 넣을 수 있게 해줍니다.

---

#### \`position\`:  데이터 읽기

\`ByteBuffer.get()\` 는 바이트 버퍼의 현재 포지션에 해당하는 값을 가져오는 메서드입니다.
이 메서드가 호출되면 버퍼 내부에서는 다음과 같은 일이 일어납니다.

1. **현재 위치(position)에 데이터 읽기**: 바이트 버퍼는 현재 \`position\` 이 가리키는 인덱스에 존재하는 값을 읽습니다.
2. **포지션 자동 이동**: 읽기 작업을 마친 후, \`position\` 값을 자동으로 1 증가시킵니다.

이렇게 바이트 버퍼는 읽기 작업 후, \`position\`이 다음 칸을 가리키게 함으로써, 인덱스를 일일이 계산하지 않아도 연속해서 데이터를 읽을 수 있게 해줍니다.

만약 현재 포지션이 아닌 다른 포지션의 값을 읽고싶다면 \`ByteBuffer.get(int position)\` 을 사용하면 됩니다. 
이 메서드는 절대 위치 읽기 방식으로 \`position\` 값을 변경시키지 않고 데이터를 읽어옵니다.


---

### \`ByteBuffer\`: limit

**\`limit\`** 은 **읽고 쓸 수 있는 최대치를 의미**합니다. 
바이트 버퍼를 생성한 직후, 바이트 버퍼의 \`capacity\` 와 \`limit\` 값은 동일합니다. 

- **\`limit\` 속성**
  \`\`\`java
  // 1024바이트(1KB) 크기의 버퍼 생성
  ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
  
  // 생성 시 지정한 크기는 변경할 수 없습니다.
  System.out.println(byteBuffer.limit()); // 1024
  \`\`\`

---

### \`ByteBuffer\`: \`flip()\`

- **데이터를 쓰고난 후, 읽으려면?**
  \`\`\`java
  byte[] bytes = "hello".getBytes(StandardCharsets.UTF_8);
  ByteBuffer byteBuffer = ByteBuffer.allocate(8);
  
  for (int i=0; i < bytes.length; i++) {
      byteBuffer.put(bytes[i]);
  }

  // 이후에는 어떻게 ?
  \`\`\`

위와 같이 문자열 "hello" 를 바이트 버퍼에 쓰고 나서 바로 읽으려고 하면, \`put()\`이 끝난 시점의 \`position\`은 이미 문자열 끝을 가리키고 있는 상태입니다.
\`put()\`과 \`get()\`은 호출될 때마다 \`position\`을 자동으로 증가시키기 때문에, 데이터를 다 써 놓고 “처음부터 다시 읽고 싶다”라고 할 때 그대로 읽기 시작하면 내가 방금 작성한 데이터를 제대로 읽기 어렵습니다.


데이터를 쓰고 난 후에, 처음부터 쓴 데이터만 깔끔하게 읽으려면 어떻게 하는 게 좋을까요?
**지금까지 기록한 구간을 “읽기 범위”로 딱 잘라두고, 읽기는 항상 0부터 시작하면 가장 편할 것**입니다.
바로 **이 작업을 대신 해 주는 메서드가 \`flip()\`** 입니다.

- **\`flip\`: 데이터를 쓰고난 후, 읽어보자.**
  \`\`\`java
  byte[] bytes = "hello".getBytes(StandardCharsets.UTF_8);
  ByteBuffer byteBuffer = ByteBuffer.allocate(8);
  
  for (int i=0; i < bytes.length; i++) {
      byteBuffer.put(bytes[i]);
  }
  
  System.out.println(byteBuffer); // java.nio.HeapByteBuffer[pos=5 lim=8 cap=8]
  
  byteBuffer.flip(); // positi
  System.out.println(byteBuffer); // java.nio.HeapByteBuffer[pos=0 lim=5 cap=8]
  \`\`\`

문자열 "hello"를 다 쓴 상태의 바이트 버퍼가 (position=5, limit=8, capacity=8)이라면, \`flip()\`을 한 번 호출했을 때 버퍼 상태는 (position=0, limit=5, capacity=8)로 바뀝니다.
이제 0부터 \`limit\`까지 \`get()\`으로 읽기만 하면, 방금 쓴 데이터 전체를 처음부터 끝까지 깔끔하게 꺼낼 수 있습니다.

---

### \`ByteBuffer\`: \`clear()\` vs \`compact()\`

\`clear()\`, \`compact()\` 는 모두 “버퍼에서 한 번 읽은 뒤, 다시 그 버퍼에 쓰고 싶을 때” 사용하는 메서드입니다.
이전 데이터를 전부 버릴지, 안 읽은 데이터만 살려둘지에 따라 어떤 메서드를 사용할지 결정하시면 됩니다.

- 이전 내용 전부 필요 없고, 그냥 처음부터 새로 쓰고 싶다 → clear().
- 아직 안 읽은 데이터는 남겨두고, 그 뒤에 이어서 쓰고 싶다 → compact()

---

#### \`clear()\`: 처음부터 다시 써볼까 ?

\`clear()\` 는 메서드 이름 그대로, **“지금 버퍼에 뭐가 있든 다 처리 끝난 걸로 치고, 처음부터 새로 쓸 준비를 하자”** 라는 상황에서 사용하는 메서드입니다.
내부 바이트 배열의 값은 그대로 두고, \`position\`을 0으로, \`limit\`을 \`capacity\`와 같게 바꾸어 전체 구간을 새로 덮어쓸 수 있는 상태로 만들어 줍니다.

- **\`clear()\` 예제**
  \`\`\`java
  byte[] bytes = "hello".getBytes(StandardCharsets.UTF_8);
  ByteBuffer buffer = ByteBuffer.allocate(8);
  
  buffer.put(bytes);   // [h][e][l][l][o][_][_][_]
  buffer.flip();       // 읽기 모드 전환
  
  // 데이터 전부 읽기
  while (buffer.hasRemaining()) {
    System.out.print((char) buffer.get());
  }
  System.out.println();                  // hello
  
  System.out.println(buffer);            // pos=5 lim=5 cap=8 (다 읽은 상태)
  
  // 이전 내용은 더 이상 안 중요, 처음부터 새로 쓰고 싶을 때
  buffer.clear();                        // pos=0 lim=8 cap=8
  
  buffer.put("WORLD".getBytes());
  buffer.flip();
  
  while (buffer.hasRemaining()) {
      System.out.print((char) buffer.get()); // WORLD
  }
  \`\`\`
  
실제로는 \`clear()\`가 배열을 0으로 지우지는 않고, **“여기 있는 값 전부 덮어써도 된다”** 고 상태만 초기화한다고 보면 됩니다.
그래서 **이전 데이터에 전혀 미련 없고, 새 데이터를 받을거야** 하는 상황에 사용하는 것이 좋습니다.

---

#### \`compact()\`: 이어서 써볼까 ?

\`compact()\` 는 일부 데이터를 읽고 난 후, 아직 안 읽은 데이터는 살려두고 그 뒤에 이어서 써보고 싶을 때 사용하는 메서드입니다.
\`position\`부터 \`limit\`까지 남아 있는(안 읽은) 데이터만 버퍼 맨 앞으로 복사하고, 그 바로 뒤에 이어서 \`put()\` 할 수 있도록 \`position\`을 옮긴 뒤 \`limit\`을 \`capacity\`로 변경합니다.

- **\`compact()\` 예제**
  \`\`\`java
  byte[] bytes = "hello".getBytes(StandardCharsets.UTF_8);
  ByteBuffer buffer = ByteBuffer.allocate(8);
  
  buffer.put(bytes);   // [h][e][l][l][o][_][_][_]
  buffer.flip();       // 읽기 모드 전환 (pos=0, lim=5)
  
  // 일부만 읽기
  buffer.get();        // 'h'
  buffer.get();        // 'e'
  // 현재: pos=2, lim=5 (남은 데이터: "llo")
  
  // 안 읽은 데이터는 살려두고 뒤에 이어서 쓰고 싶다
  buffer.compact();    // "llo"를 0~2로 당김 (pos=3, lim=8)
  
  // 뒤에 새 데이터 이어쓰기
  buffer.put("!!".getBytes()); // [l][l][o][!][!][_][_][_]
  buffer.flip();               // 읽기 모드 (pos=0, lim=5)
  
  while (buffer.hasRemaining()) {
    System.out.print((char) buffer.get()); // llo!!
  }
  \`\`\`

\`compact()\`는 배열을 0으로 지우지는 않고, **“앞에서부터 안 읽은 데이터는 살려두고, 그 뒤로는 전부 덮어써도 된다”** 고 버퍼 상태만 재정리한다고 보면 됩니다.
그래서 앞부분은 이미 읽어 처리했고, 남은 데이터에 새 데이터를 이어 붙여서 계속 쓰고 싶은 상황에서 사용하는 것이 좋습니다.

`,vy=Object.freeze(Object.defineProperty({__proto__:null,default:yy},Symbol.toStringTag,{value:"Module"})),Sy=`---
summary: 셀렉터(Selector) 기반 이벤트 루프 구조를 소개하고, OP_ACCEPT/READ/WRITE를 사용해 하나의 스레드로 여러 클라이언트 소켓을 관리하는 방법을 정리했습니다.
tags:
  - Java
  - JavaNIO
references: 
created_date: 2026-02-04 21:28:56
last_modified_date: 2026-02-04 21:28:56
visibility: hidden
---

> 이 글에서는 JDK 1.4 에 도입된 **java.nio** 의 **셀렉터(Selector)** 가 무엇인지, 어떻게 사용하는지 간단하게 정리했습니다.

---

# \`java.nio\`: 셀렉터(\`Selector\`)  

`,Ty=Object.freeze(Object.defineProperty({__proto__:null,default:Sy},Symbol.toStringTag,{value:"Module"})),xy=`---
summary: Ubuntu환경에서 NodeJS 설치하기
tags: 
references: 
created_date: 2025-07-26 22:45:36
last_modified_date: 2025-07-26 22:45:36
---
## 우분투에서 Node.js 설치하기

### 1. NodeSource 저장소 추가

\`\`\`bash
curl -fsSL https://deb.nodesource.com/setup_24.4.1 | sudo -E bash -
\`\`\`

### 2. Node.js 및 npm 설치

\`\`\`bash
sudo apt-get install -y nodejs
\`\`\`

### 3. 설치 확인

\`\`\`bash
node -v
npm -v
\`\`\`

---

> 다른 버전을 설치하려면 \`setup_18.x\` 부분을 \`setup_20.x\` 등으로 변경하면 됩니다.  
> 최신 LTS 버전은 [Node.js 공식 홈페이지](https://nodejs.org/)에서 확인할 수 있습니다.`,Ay=Object.freeze(Object.defineProperty({__proto__:null,default:xy},Symbol.toStringTag,{value:"Module"})),Cy=`---
summary: 자바스크립트 파일 확장자 차이 알아보기
tags:
  - js
  - cjs
  - mjs
references: 
created_date: 2025-08-13T16:37:41.000Z
last_modified_date: 2025-08-13T16:38:57.000Z
---
# \`.js\`, \`.cjs\`, \`.mjs\` 파일 확장자 차이

## .js / JavaScript

- 가장 일반적인 자바스크립트 파일 확장자
- 브라우저, 서버 등 다양한 환경에서 실행 가능
- 모듈 시스템은 환경에 따라 다름 (CommonJS, ESM 등 모두 사용 가능)
    

## .cjs / CommonJS

- Node.js에서 사용하는 CommonJS 모듈 시스템 파일 확장자임
- \`require\`와 \`module.exports\` 문법 사용
- 각 파일이 독립적인 모듈로 취급됨
- 서버 사이드 자바스크립트에서 주로 사용
    

## .mjs / ECMAScript Modules

- ECMAScript Modules(ESM) 표준을 따르는 파일 확장자임
- \`import\`와 \`export\` 문법 사용
- 최신 자바스크립트 모듈 시스템
- Node.js, 브라우저 등에서 공식 지원됨
    

## 요약

- \`.js\`: 범용 자바스크립트 파일, 환경에 따라 모듈 시스템 다름
- \`.cjs\`: CommonJS 모듈 전용, \`require\`/\`module.exports\` 사용
- \`.mjs\`: ESM 모듈 전용, \`import\`/\`export\` 사용

`,Ey=Object.freeze(Object.defineProperty({__proto__:null,default:Cy},Symbol.toStringTag,{value:"Module"})),Ry=`---
summary: 플러터 데스크탑 앱 이름(Window Title, Bundle Name) 지정하기
tags:
  - Flutter
  - Title
references: 
created_date: 2026-01-22T23:09:52.000Z
last_modified_date: 2026-02-02T20:38:52.000Z
---


플러터 프로젝트이름 생성 후, 어플리케이션을 실행하면 프로젝트이름 명이 어플리케이션의 이름으로 표시됩니다. 만약 이를 변경하고 싶은 경우, 아래의 과정을 진행하면 되며, 플랫폼에 맞게 아래의 내용을 참고하면 됩니다.

> 이 글에서는 "project-name" 에서 "프로젝트이름" 으로 변경합니다.



## Mobile Application

모바일 어플리케이션의 경우, Android, iOS 가 존재하며 각각 따로 설정해야 합니다.

---

### Android

🤖 Android
- \`android/app/src/main/AndroidManifest.xml\`: 앱 라벨(이름)
  - \`android:label\`: "project-name" ➡️ "프로젝트이름"

---

### iOS

🍎 iOS
- \`ios/Runner/Info.plist\`: 사용자에게 보이는 앱 이름
  - \`CFBundleDisplayName\`: "project-name" ➡️ "프로젝트이름"

---

## Desktop Application

### MacOS

🍎 macOS
- \`macos/Runner/Configs/AppInfo.xcconfig\`: 내부 제품명
  - \`PRODUCT_NAME\`: "project-name"
- \`macos/Runner/Info.plist\`: 사용자에게 보이는 앱 이름
  - \`CFBundleDisplayName\`: "project-name" ➡️ "프로젝트이름"

---

### Linux

- 앱 실행 시 상단에 표시되는 타이틀을 변경했습니다.

- \`linux/runner/my_application.cc\`
  1. \`gtk_header_bar_set_title\`: "project-name" ➡️ "프로젝트이름"
  2. \`gtk_window_set_title\`: "project-name" ➡️ "프로젝트이름"

---

### Windows

- \`windows/runner/Runner.rc\`: 실행 파일의 속성(메타데이터) 정보
  - \`FileDescription\`: "project-name" ➡️ "프로젝트이름"
  - \`ProductName\`: "project-name" ➡️ "프로젝트이름"
- \`windows/runner/main.cpp\`: 윈도우 창 생성 시 타이틀
  - \`window.Create\`: "project-name" ➡️ "프로젝트이름"

---

`,My=Object.freeze(Object.defineProperty({__proto__:null,default:Ry},Symbol.toStringTag,{value:"Module"})),Oy=`---
summary: 플러터 M1 Mac에 "CodeSign Fail" 빌드 실패
tags: 
references: 
created_date: 2026-01-08T23:09:52.000Z
last_modified_date: 2026-01-08T23:09:52.000Z
---

> 이 글은 M1 Mac 환경에서 Flutter macOS 앱 빌드 중 CodeSign Failed 오류가 발생할 때의 원인 분석과 해결 방법을 정리한 것입니다.

---

## 문제 현상

macOS 환경에서 Flutter 프로젝트를 빌드할 때 다음과 같은 오류가 발생했습니다:

\`\`\`shell
$ flutter run -d macos
Launching lib/main.dart on macOS in debug mode...
/Users/\${username}/Documents/.../\${project_name}.app: resource fork, Finder information, or similar detritus not allowed
Command CodeSign failed with a nonzero exit code
** BUILD FAILED **

Building macOS application...
Error: Build process failed
\`\`\`

반면, \`flutter run -d chrome\` 명령에서는 정상적으로 실행되었습니다.

---

## 원인 분석

이 오류는 **CodeSign 과정에서 macOS의 확장 속성(extended attributes)**이 포함되어 코드 서명이 거부되는 문제로,
macOS에서 **iCloud Drive 동기화가 활성화된 폴더**(\`~/Documents\`, \`~/Desktop\` 등)에 프로젝트가 위치한 경우 발생하는 것으로 보입니다.

1. **iCloud 동기화 과정**에서 파일에 \`com.apple.ResourceFork\`, \`com.apple.metadata:_kMDItemUserTags\` 등의 확장 속성이 자동 추가됨
2. **Flutter 빌드** 중 생성되는 바이너리(.app 파일)에도 해당 속성이 복사됨
3. **CodeSign**이 보안상의 이유로 이러한 메타데이터를 포함한 파일의 서명을 거부

즉, **iCloud 동기화 폴더** 자체가 파일에 불필요한 메타데이터를 자동으로 부여하기 때문에 발생하는 문제입니다.

---

## 해결 방법

저는 프로젝트를 iCloud 동기화할 필요가 없었기 때문에 동기화되지 않는 경로에 프로젝트를 두는 방식으로 문제를 해결하였습니다.

\`\`\`shell
# 예시: 별도 개발용 폴더 생성 후 이동
mkdir -p ~/dev
cd ~/dev

# 프로젝트 생성
flutter create my_app

# macOS 빌드 실행
cd my_app
flutter run -d macos
\`\`\`

- 주의: 피해야 할 폴더
    1. \`~/Documents\` → 동기화 대상
    2. \`~/Desktop\` → 동기화 대상
    3. \`~/Downloads\` → 환경에 따라 동기화 가능 대상

위 경로들은 iCloud와 자동으로 동기화되는 경우가 많으므로, 개발 프로젝트를 두지 않는 것이 좋을 것 같고, Finder에서 파일 옆에 ☁️ 구름 아이콘이 보이면 iCloud 동기화 중이니 주의해야할 것 같습니다.
`,wy=Object.freeze(Object.defineProperty({__proto__:null,default:Oy},Symbol.toStringTag,{value:"Module"})),Dy=`---
summary: CSS 의 인라인, 내부, 외부 스타일이 무엇인지, 어떻게 사용하는지 알아보자.
tags:
  - HTML CSS 적용하기
  - HTML Cascading Style Sheet 적용하기 
references: 
created_date: 2026-02-10T21:09:52.000Z
last_modified_date: 2026-02-10T22:38:52.000Z
---

> 이 글에서는 CSS(Cascading Style Sheet)에서 인라인, 내부, 외부 스타일이 무엇인지와 각각을 어떻게 사용하는지 정리합니다.

---

# CSS: 인라인·내부·외부 스타일

HTML 요소에 스타일을 입히는 방법은 인라인(Inline), 내부(Internal), 외부(External) 방식이 존재합니다.
이 글에서는 각 방식이 무엇인고 언제 어떤 방식을 선택하면 좋은지 정리해보겠습니다.

## CSS: 인라인 스타일

**인라인 스타일(Inline Style)** 은 **"HTML 태그 안에 스타일을 직접 지정하는 방식"** 으로 바로 스타일을 주고 확인할 수 있어서 작은 수정이나 테스트해보기에 좋습니다.

\`\`\`html
<html>
    <head></head>
    <body>
    <div style="width: 100%; background-color: red">
        inline style...
    </div>
    </body>
</html>
\`\`\`

HTML 태그 \`style\` 속성을 사용해서 코드가 금방 지저분해지고, 일일이 복사·수정해야해 재사용이 어렵습니다.
그리고 CSS 의 상속과 우선순위를 제대로 활용하기 어렵고, 스타일 재사용이 거의 불가능하다.

---


## CSS: 내부 스타일

**내부 스타일(Internal Style)** 은 **HTML 파일의 \`<head>\` 태그 안에 \`<style>\` 태그를 두고, 그 안에 CSS 코드를 모아두는 방식**으로,
하나의 HTML 문서 안에서 공통 스타일을 관리할 수 있어서, 인라인 스타일보다 구조가 훨씬 깔끔합니다.

\`\`\`html
<html>
    <head>
        <style>
            .container {
                width: 100%;
                background-color: red;
            }
        </style>
    </head>
    <body>
        <div class="container">
            inline style...
        </div>
    </body>
</html>
\`\`\`

---


## CSS: 외부 스타일

**외부 스타일(External Style)** 은 **별도의 \`.css\` 파일을 만들고, HTML에서 \`<link>\` 태그로 그 파일을 불러오는 방식**으로,
여러 HTML 문서가 하나의 CSS 파일을 공유할 수 있어 유지보수와 확장성 측면에서 가장 좋고 색상, 폰트, 레이아웃 같은 디자인 규칙을 한 곳에서 정의하고 필요할 때마다 여러 페이지에서 재사용할 수 있습니다.

- \`/styles/index.css\`
    \`\`\`css
    .container {
        width: 100%;
        background-color: red;
    }
  
    p {
      color: blue;
    }
    \`\`\`

- \`/index.html\`
    \`\`\`html
    <html>
        <head>
            <link rel="stylesheet" href="./style/index.css"/>
        </head>
        <body>
            <div class="container">
                inline style...
            </div>
  
            <p>paragraph...</p>
        </body>
    </html>
    \`\`\`



---

## HTML: 인라인·내부·외부 스타일 정리

| 방식       | 위치                   | 장점 | 단점                            |
|----------|----------------------| --- |-------------------------------|
| **인라인 스타일** | **태그의 \`style\` 속성**       | 요소 하나만 빠르게 수정 가능 | HTML이 지저분해지고 재사용·유지보수가 어렵다    |
| **내부 스타일** | **\`<head>\` 안 \`<style>\`** | 한 문서 안에서 공통 스타일 관리 | 여러 페이지에서 공유해서 사용하기 어렵다        |
| **외부 스타일** | **별도 \`.css\` 파일**         | 여러 문서에서 공유, 유지보수에 유리 | 상황에 따라 파일 분리가 오히려 번거로울 수 있다 |

`,jy=Object.freeze(Object.defineProperty({__proto__:null,default:Dy},Symbol.toStringTag,{value:"Module"})),ky=`---
summary: CSS의 작성 규칙과 기본 셀렉터에 대해 정리해보았습니다.
tags:
  - CSS 작성 규칙
  - CSS Rules
  - CSS Ruleset
  - CSS 셀렉터
references:
created_date: 2026-02-12T23:09:52.000Z
last_modified_date: 2026-02-12T20:38:52.000Z
---

> 이 글에서는 CSS(Cascading Style Sheet)에서 작성 규칙과 기본 셀렉터에 대해 정리합니다.

---

# CSS: 작성 규칙과 셀렉터

스타일이 인라인, 내부, 외부 어디에 작성되어 있든지 모두 같은 방식으로 작성해야 합니다. 
이번 글에서는 \`CSS\`에서 스타일을 작성할 때 따랴야 하는 규칙들을 먼저 정리하고,
작성한 스타일을 어떤 요소에 적용할지 선택하는 기본 셀렉터에 대해서 정리해보겠습니다.


> 인라인, 내부, 외부 스타일 방식에 대해 [알아보러 가기](https://bak-libra26.co.kr/posts/%EA%B0%9C%EB%B0%9C/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C/CSS/CSS:_%EC%9D%B8%EB%9D%BC%EC%9D%B8%C2%B7%EB%82%B4%EB%B6%80%C2%B7%EC%99%B8%EB%B6%80_%EC%8A%A4%ED%83%80%EC%9D%BC)

## CSS: 스타일 규칙

\`\`\`css
선택자(selector) {
    속성(property): 값(value);
    속성(property): 값(value);
}
\`\`\`

- **선택자(\`Selector\`):** 스타일을 적용할 요소 지정
- **선언 블록(\`Declaration Block\`):** 중괄호(\`{}\`) 안에 들어가는 부분
- **속성(\`Property\`):** \`color\`, \`font-size\` 와 같은 속성, **"무엇을 바꿀지"에 해당**한다.
- **값(\`Value\`):** \`red\`, \`16px\` 와 같은 값, **"어떻게 바꿀지"에 해당**한다.


---

### 스타일 규칙: 한 규칙에 여러 개의 선언하기

\`\`\`css
button {
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
}
\`\`\`

같은 선택자(\`button\`)에 대해 여러 속성을 바꾸고 싶으면, 선언 블록 안의 선언을 여러 개 나열하면 되는데 이 때 세미콜론(\`;\`) 을 추가하는 것이 좋습니다.


---

### 스타일 규칙: 여러 선택자에 같은 스타일 적용하기

\`\`\`css
h1,
h2,
h3 {
  font-family: system-ui, sans-serif;
  font-weight: 600;
}
\`\`\`

여러 요소에 같은 스타일을 적용하고 싶으면, 선택자를 쉼표로 나열해서 한 번에 쓸 수 있습니다.


## CSS: 기본 셀렉터

이제 "어떤 요소에 적용할지"를 고르는 셀렉터(\`Selector\`)를 정리해보겠습니다. 

- **태그 선택자(\`Tag Selector\`):** HTML 태그 이름으로 요소를 선택할 때 사용합니다.
    \`\`\`css
    p {
      line-height: 1.6;
    }
    \`\`\`
- **ID 선택자(\`ID Selector\`):** 특정 하나의 요소를 선택할 때 사용합니다.
    \`\`\`css
    #header {
      background-color: #f5f5f5;
    }
    \`\`\`
- **클래스 선택자(\`Class Selector\`):** 여러 요소에 공통 스타일을 재사용할 때 사용합니다.
    \`\`\`css
    .primary {
      color: white;
      background-color: #007bff;
    }
    \`\`\`
- **속성 선택자(\`Attribute Selector\`):** 요소의 속성(attribute) 값에 따라 대상을 선택할 때 사용합니다.
    \`\`\`css
    input[type="text"] {
      border: 1px solid #ccc;
    }
    \`\`\`
- **전체 선택자(\`Universal Selector\`):** \`*\` 하나로 문서 안의 모든 요소를 선택할 때 사용합니다.
    \`\`\`css
    * {
      box-sizing: border-box;
    }
    \`\`\`


`,Ny=Object.freeze(Object.defineProperty({__proto__:null,default:ky},Symbol.toStringTag,{value:"Module"})),Ly=`---
summary: CSS의 작성 규칙과 기본 셀렉터에 대해 정리해보았습니다.
tags:
  - CSS 작성 규칙
  - CSS Rules
  - CSS Ruleset
  - CSS 셀렉터
references:
created_date: 2026-02-12T23:09:52.000Z
last_modified_date: 2026-02-12T20:38:52.000Z
visibility: hidden
---

> 이 글에서는 CSS(Cascading Style Sheet)의 조합 셀렉터에 대해 정리합니다.

---

# CSS: 조합 셀렉터

셀렉터란 CSS에서 스타일을 적용할 요소를 고르는 `,Hy=Object.freeze(Object.defineProperty({__proto__:null,default:Ly},Symbol.toStringTag,{value:"Module"})),By=`---
summary: 스타일 적용을 위한 개념인 CSS 캐스케이딩 레이어에 대해 정리해보았습니다.
tags:
  - CSS 캐스케이딩 레이어
references:
created_date: 2026-02-12T23:09:52.000Z
last_modified_date: 2026-02-12T20:38:52.000Z
visibility: hidden
---

# CSS: 캐스케이드 레이어
`,Uy=Object.freeze(Object.defineProperty({__proto__:null,default:By},Symbol.toStringTag,{value:"Module"})),zy=`---
summary: 스타일 적용을 위한 개념인 CSS 캐스케이딩 규칙과 우선순위에 대해 정리해보았습니다.
tags:
  - CSS 캐스케이딩 규칙과 우선순위
references: 
created_date: 2026-02-12T23:09:52.000Z
last_modified_date: 2026-02-12T20:38:52.000Z
---

> 이 글에서는 CSS(Cascading Style Sheet)에서 캐스케이딩 규칙과 우선순위에 대해 정리합니다.

---

# CSS: 캐스케이딩 규칙과 우선순위

CSS에서 **캐스케이딩(\`Cascading\`)** 은 **"여러 스타일이 한 요소에 겹쳤을 때, 어떤 것을 적용시킬지를 결정하는 규칙"** 입니다. 
같은 속성에 대한 선언이 여러 개 있어도 정해진 우선순위에 따라 하나의 값만 최종적으로 선택합니다.

## CSS: 캐스케이딩

캐스케이딩(\`Cascading\`)은 '폭포처럼 흐르다'라는 의미를 가지고 있으며 \`CSS\`에서는 위에서 아래로 스타일이 흘러가면서 우선순위에 따라 최종값이 결정되는 과정을 뜻합니다. 
하나의 요소와 하나의 속성에 대해 여러 선언이 겹칠 수 있는데 이때 브라우저는 다음과 같은 단계를 거쳐 어떤 값을 쓸지 결정합니다.

이 요소에 실제로 **적용 가능한 선언만 필터링**한다. (선택자 매칭, media 쿼리 조건 등).

- 해당 속성에 대한 선언이 **있는 경우**

   1. 스타일의 출처(\`origin\`)와 \`!important\` 여부로 "중요도"를 비교한다.
   2. 중요도가 같다면 명시도(\`specificity\`)가 더 높은 쪽을 선택한다.
   3. 명시도까지 같다면 더 나중에 선언된 스타일이 이긴다.

- 해당 속성에 대한 선언이 **전혀 없는 경우**

  1. 값이 없으면 상속(\`inheritance\`)이나 기본값(\`initial\`)로 채운다.

정리하자면 캐스케이딩은 요소에 스타일을 적용시키기 위해, **\`origin\` + \`!important\`** → **\`명시도\`** → **\`선언 순서\`** → **상속(\`inheritance\`)/기본값(\`initial\`)** 순서로 단계적으로 요소에 적용할 스타일을 결정하는 알고리즘이라고 보면 됩니다.

---


### 캐스케이딩: 스타일 출처와 중요도

> 스타일의 출처(\`origin\`) 와 중요도를 기준으로 그룹을 나눈다.
 
**스타일 출처(\`origin\`)** 는 아래와 같이 구분할 수 있습니다.

- **사용자 에이전트 스타일시트(User agent stylesheet):** 브라우저의 기본 CSS
- **사용자 스타일시트(User stylesheet):** 사용자가 추가한 개인 CSS
- **작성자 스타일시트(Author stylesheet):** 개발자가 작성한 CSS

일반적으로 사용자 작성자 > 사용자 > 사용자 에이전트 순으로 우선 적용되며 같은 출처 안에서는 \`!important\` 가 적용된 스타일이 우선 고려됩니다.
이렇게 스타일의 출처와 중요도를 기준으로 큰 우선순위 그룹을 나눈 뒤, 다음 단계에서 명시도와 선언 순서 등의 규칙이 적용됩니다.

---


### 캐스케이딩: 명시도

같은 중요도 그룹 안에서 **"선택자가 구체적인 정도"를 숫자로 환산해서 비교**하는데, 이것을 **명시도(\`specificity\`)** 라고 합니다.
명시도는 보통 네 자리의 숫자로 생각할 수 있고, 대략 아래 순서대로 강해집니다.


- **명시도(\`specifictiy\`) 우선 순위**
  1. **인라인 스타일:** 요소에 직접 \`style\` 속성으로 쓴 경우 (예: \`<p style="color: red">\`) — 가장 강함.
  2. **ID 선택자:** \`#id\` 형태의 선택자.
  3. **클래스/속성/가상 클래스 선택자:** \`.class\`, \`[type="text"]\`, \`:hover\` 등.
  4. **태그/가상 요소 선택자:** \`p\`, \`h1\`, \`::before\` 등.


- **어떤 스타일이 적용될까**
  \`\`\`html {4-12}
  <html>
    <head>
      <style>
        /* p 태그 */
        p {
          color: blue;
        }
        
        /* p 태그 중 intro 라는 클래스를 가진 요소 */
        p.intro {
          color: red;
        }
      <style>
    </head>
    <body>
        <p class="intro">어떤 스타일이 적용될까?</p>
    </body>
  </html>
  \`\`\`

  위 예시에서는 \`<p class="intro">\` 하나에 대해, \`p\`와 \`p.intro\` 두 규칙이 모두 적용될 수 있으나,
  **\`p\`는 "모든 \`p\` 태그"를 넓게 잡는 선택자**이고, **\`p.intro\`는 "\`intro\` 클래스를 가진 \`p\` 태그"를 더 정확하게 딱 집어서 지정한 선택자**입니다.
  이렇게 더 구체적으로 대상 요소를 지정한 선택자의 명시도가 더 높기 때문에 **\`p.intro\` 의 \`color\` 값인 \`red\`가 적용**됩니다.

명시도는 "이 요소에 스타일을 얼마나 정확하게 딱 집어서 적용했는가"를 나타내는 가중치이기 때문에, 선택자를 많이 붙일수록 점수가 계속 올라갑니다. 
그렇기 때문에 필요 이상으로 명시도를 높여 복잡하게 만들기보다는, 필요하다면 컴포넌트 단위로 나누는 등 가능하면 단순한 구조와 선택자를 사용하는 것이 좋습니다.

---

### 캐스케이딩: 소스 순서

중요도와 명시도까지 완전히 같을 때 마지막으로 적용되는 기준이 **소스 순서(\`source order\`)** 입니다.
같은 요소, 같은 속성, 같은 명시도의 규칙이 여러 개라면, CSS에서 더 나중에 선언된 규칙이 이깁니다.

\`\`\`css showLineNumbers
p {
    color: black;
}

p {
    color: green;
}
\`\`\`

두 규칙은 모두 p에 대해 같은 명시도를 가지기 때문에 나중에 등장한 \`color: green;\`이 최종적으로 적용됩니다. 
외부 스타일시트를 여러 개 불러오는 경우에도 같은 명시도라면 더 나중에 로드된 파일의 스타일로 덮어쓰게 되는데
이러한 특성을 활용해서 아래와 같은 순서로 구성하여 “뒤에서 덮어쓰기 전략”을 활용해 전체 스타일 구조를 단순하게 유지할 수 있습니다.

- **스타일 구조를 단순하게 하기 위한 전략**
   1. \`reset/normalize.css\` 같은 초기화 스타일을 먼저 로드한다.
   2. 프로젝트 메인 스타일, 컴포넌트 스타일을 그다음에 로드한다.
   3. 페이지나 상황별 커스텀 스타일이 있다면 가장 마지막에 둔다.


---
`,Iy=Object.freeze(Object.defineProperty({__proto__:null,default:zy},Symbol.toStringTag,{value:"Module"})),Py=`---
summary: HTML 기본 구조와 필수 태그에 대해서 알아보자.
tags:
  - HTML 기본 구조와 필수 태그
references: 
created_date: 2026-02-09T23:09:52.000Z
last_modified_date: 2026-02-09T20:38:52.000Z
---

# HTML: HyperText Markup Language

HTML 은 'HyperText Markup Language' 의 약자로 웹 페이지의 내용과 구조를 정의합니다.
예를들어 '이건 제목이야', '여기에는 이미지가 들어가' 같은 정보를 브라우저한테 알려주는거죠.

## HTML: 기본 구조

\`HTML\` 은 아래와 같은 기본 구조를 따릅니다.

- \`HTML\` 기본 구조
    \`\`\`html
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <title>title</title>
      </head>
      <body>
        <h1>h1 tag</h1>
      </body>
    </html>
    \`\`\`
---  


### HTML: 태그(tag)

HTML 기본 구조의 코드에 \`<html></html>\`, \`<head></head>\`, \`<body></body>\`, \`<h1></h1>\` 같이 꺾쇠(\`<>\`)로 감싸진 것들을 태그(tag)라고 합니다.

태그는 보통 \`<head></head>\`, \`<h1></h1>\` 처럼 여는 태그(\`<...>\`)와 닫는 태그(\`</...>\`) 한 쌍으로 쓰이고, 그 사이에 실제 내용이 들어갑니다.

- 여러가지 태그 
  - \`<h1>제목</h1>\`: 여는 태그와 닫는 태그 안의 텍스트가 제목을 나타낸다.
    - \`<h1>\`: 여는 태그
    - \`</h1>\`: 닫는 태그
  - \`<meta charset="utf-8"/>\`: \`<tag />\` 형태로 스스로 닫는 형태로 표시할 내용이 없고 설정만 전달하는 경우에 사용하고 빈태그(\`empty tag\`)라고 합니다.

---

### HTML: 기본 구조를 구성하는 태그의 의미

- \`<!DOCTYPE html>\`: \`html5\` 규격을 따르는 문서이다.
- \`<html lang="ko">\`: \`HTML\` 문서 전체를 감싸는 태그, \`lang\` 은 문서의 기본 언어를 의미
  - \`<head></head>\`: 화면에는 보이지 않는 웹 페이지에 대한 메타 데이터(인코딩, 제목, 외부 리소스 등 문서 정보) 태그를 안에 정의한다.
      - \`<meta charset="utf-8">\`: 해당 페이지에 대한 문자 인코딩 정보
      - \`<title></title>\`: 브라우저 탭에 표시되는 웹 페이지 제목
  - \`<body></body>\`: 실제 화면에 보이는 모든 내용을 정의한다.
    - \`<h1></h1>\`: 웹 페이지에 대한 제목


---

### HTML: 여러가지 기본 태그

HTML에는 많은 태그가 존재합니다. 가장 많이 사용되는 기본 태그들만 골라서 정리해보겠습니다.

---

#### Header: <h1> ~ <h6>

제목(헤딩)을 나타내는 태그로, 숫자가 작을수록 더 중요한 큰 제목입니다.

\`\`\`xml
<h1>가장 중요한 제목</h1>
<h2>두 번째 수준 제목</h2>
<h3>세 번째 수준 제목</h3>
\`\`\`

---

#### Paragraph: \`<p></p>\`

일반적인 본문 텍스트를 담는 문단 태그입니다.

\`\`\`xml
<p>이 문장은 하나의 문단을 나타냅니다.</p>
\`\`\`

---

#### Hyper Link: \`<a></a>\`

다른 페이지나 주소로 이동하는 하이퍼링크를 만드는 태그입니다. 
\`href\` 속성은 이 링크가 어느 주소(URL)로 이동할지를 나타냅니다.


\`\`\`xml
<a href="https://example.com">예시 사이트로 이동</a>
\`\`\`

---

#### Img: \`<img />\`

화면에 이미지를 표시하는 태그로, \`src\`에 이미지 경로, \`alt\`에 이미지 설명을 적습니다.

\`\`\`xml
<img src="/images/logo.png" alt="사이트 로고" />
\`\`\`

`,Fy=Object.freeze(Object.defineProperty({__proto__:null,default:Py},Symbol.toStringTag,{value:"Module"})),qy=`---
summary: HTML 의 그룹핑 텍스트(Grouping Text)에 대해서 알아보자.
tags:
  - HTML 그룹핑 텍스트(Grouping Text)
references: 
created_date: 2026-02-09T21:09:52.000Z
last_modified_date: 2026-02-09T22:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 에서 그룹핑 텍스트(Grouping Text) 가 무엇이고 어떤 것들이 있는지 정리했습니다.

---

# HTML: 그룹핑 텍스트(Grouping Text)

HTML 에서는 텍스트를 "그룹"으로 묶기 위해 \`<div></div>\` 와 \`<span></<span>\` 이라는 태그를 사용합니다.
이 둘 모두 다른 요소들을 감싸서 구조를 만들거나 스타일/스크립트를 적용하기 위한 용도로 사용됩니다.

## 그룹핑 텍스트: \`<div></div>\`

\`<div></div>\` 는 대표적인 블록 레벨 태그로, 한 줄 전체를 차지하면서 새로운 줄에서 시작하고 안에 여러 개의 태그들을 묶어서 하나의 큰 덩어리로 만들 때 사용합니다.

- \`<div></div>\` 예시
  \`\`\`html
  <div class="card">
    <h2>제목</h2>
    <p>설명 텍스트입니다.</p>
    <a href="#">자세히 보기</a>
  </div>
  \`\`\`

여러 요소를 하나의 큰 덩어리로 묶어 "하나의 레이아웃 상의 구역"으로 만들 때 사용하며 자체로 의미를 가지지 않습니다.
의미를 드러내야 할 때는 \`<header>\`, \`<main>\`, \`<section>\`, \`<article>\` 같은 시맨틱 태그를 우선적으로 고려하고, 애매할 때 \`<div>\` 를 사용합니다.


## 그룹핑 텍스트: \`<span></span>\`

\`<span></span>\` 은 인라인 태그로, 줄바꿈을 만들지 않고 문장 안에서 일부 텍스트만 감싼 후 스타일이나 스크립트를 적용할 때 사용하며 자체로 의미를 가지지 않습니다. 

- \`<span></span>\` 예시
  \`\`\`html
  <p>
    오늘은 <span class="highlight">중요한 발표</span>가 있는 날입니다.
  </p>
  \`\`\`

## 그룹핑 텍스트: 언제, 어떤걸 ?

- 화면에서 한 구역을 통째로 묶고 싶을 때 → \`div\`
- 문장 안 일부 글자만 따로 꾸미거나 제어하고 싶을 때 → \`span\`
`,Gy=Object.freeze(Object.defineProperty({__proto__:null,default:qy},Symbol.toStringTag,{value:"Module"})),Yy=`---
summary: HTML 의 메타 태그(Meta Tag)에 대해서 알아보자.
tags:
  - HTML 메타 태그
  - HTML Meta Tag
references:
created_date: 2026-02-11T21:09:52.000Z
last_modified_date: 2026-02-10T22:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language)에서 메타 태그가 무엇이고, 어떤 것들이 있는지 정리합니다.

---



# HTML: 메타 태그

**메타 태그(\`Meta Tag\`)** 는 HTML 문서의 \`<head>\` 태그 안에 위치하며, **브라우저와 검색 엔진에게 "이 페이지를 어떻게 이해해야 하는지"에 대한 추가 정보(메타데이터)를 제공**합니다.
사용자는 이 정보를 화면에서 직접 보지 못하지만, 검색 결과에서의 노출, 모바일 렌더링, 소셜 공유 미리보기 등 여러 측면에서 중요한 역할을 합니다.

---

## 메타 태그: 주요 속성 


  - **\`charset\`**: 문서의 문자 인코딩을 명시합니다.
  - **\`name\`**: 메타 데이터의 종류를 나타냅니다.
  - **\`http-equiv\`**: HTTP 헤더와 유사한 정보를 메타 태그로 전달할 때 사용합니다.
  - **\`content\`**: \`name\`이나 \`http-equiv\`로 지정한 항목의 실제 값을 적는 곳입니다.

---

## 메타 태그: 여러가지 메타 태그


### 타이틀(\`title\`):

타이틀(\`title\`) 은 \`브라우저의 탭 제목\`과 검색 엔진의 \`검색 결과 제목\`으로 사용되며, 50 ~ 60 자 이내의 길이로 키워드가 자연스럽게 포함되도록 작성하는 것이 좋습니다. 
만약 사이트 이름이 들어가야한다면 "페이지 제목 | 사이트 이름" 형식으로 작성하는게 좋습니다.

- **타이틀(\`title\`) 예시**
    \`\`\`html
    <title>HTML: 메타 태그와 SEO</title>
    \`\`\`


---

### 설명(\`description\`):

설명(\`description\`)은 검색 결과에서 제목 아래에 표시되는 요약 텍스트로 120 ~ 160자 이내의 길이로 작성하는 것이 좋습니다.

- **설명(\`description\`) 예시**
    \`\`\`html
    <meta name="description"
          content="HTML에서 메타 태그와 SEO가 무엇이고, 실제 페이지에 어떻게 적용하는지 정리한 글입니다."/>
    \`\`\` 


---

### 문자 인코딩(\`charset\`):

문자 인코딩(\`charset\`)은 HTML 문서가 작성된 문자 인코딩 방식을 나타내는 메타 태그로 \`UTF-8\`이 권장되고 \`charset\`이 없거나 잘못되면 한글과 특수문자가 깨져보입니다.

- **문자 인코딩(\`charset\`) 예시**
    \`\`\`html
    <meta charset="UTF-8" />
    \`\`\`

---

### 뷰포트(\`viewport\`):

뷰포트(\`viewport\`)는 모바일 기기에서 페이지를 어떻게 표시할지 지정하는 메타 태그로 이 태그가 없으면 모바일에서 데스크톱 화면이 축소되어 보기 불편합니다.


#### **뷰포트(\`viewport\`):** 여러가지 속성 값

| 속성 | 값 | 설명 |
|------|-----|------|
| **width** | \`device-width\` | 페이지 너비를 기기의 실제 화면 너비에 맞춤 |
| **height** | \`device-height\` | 페이지 높이를 기기의 실제 화면 높이에 맞춤 (거의 사용하지 않음) |
| **initial-scale** | \`1.0\` | 페이지 첫 로딩 시 확대/축소 비율 (1.0 = 100%) |
| **minimum-scale** | \`0.5\` | 사용자가 축소할 수 있는 최소 비율 |
| **maximum-scale** | \`2.0\` | 사용자가 확대할 수 있는 최대 비율 |
| **user-scalable** | \`yes\` | 사용자가 확대/축소 가능 (기본값) |


#### **뷰포트(\`viewport\`):** 여러가지 예시

- **반응형 웹처럼**
    \`\`\`html
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    \`\`\`

- **보수적인 설정 (확대 범위 제한)**
    \`\`\`html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    \`\`\`

- **모바일 앱처럼**
    \`\`\`html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    \`\`\`


---

### 로봇(\`robots\`):


로봇(\`robots\`) 는 검색 엔진 크롤러가 이 페이지를 어떻게 처리해야 하는지 지시하는 메타 태그로 크롤러의 인덱싱, 캐싱, 링크 추적 등을 제어할 수 있습니다.


- **로봇(\`robots\`) 예시**
    \`\`\`html
    <meta name="robots" content="index, follow" />
    \`\`\`


#### 로봇(\`robots\`): 여러가지 속성 값

| 값                       | 설명                            |
| ----------------------- | ----------------------------- |
| noarchive               | 검색 엔진이 캐시본을 만들지 않도록 함         |
| nocache                 | noarchive와 동일                 | 
| nosnippet               | 검색 결과에서 페이지 설명(snippet) 표시 금지 |
| noimageindex            | 이 페이지의 이미지를 검색 결과에 표시 금지      |
| max-snippet:-1          | 스니펫 길이 제한 (문자 단위)             | 
| max-image-preview:large | 이미지 미리보기 크기 제한                |
| max-video-preview:-1    | 비디오 미리보기 길이 제한 (초 단위)         |

---

### 캐노니컬(\`canonical\`):

캐노니컬(\`canonical\`) 은 완전히 같은 내용이 여러 URL로 접근 가능할 때, "대표 페이지 URL"을 검색 엔진에 알려주는 메타 태그입니다.

- **캐노니컬(\`canonical\`) 예시**
    \`\`\`html
    <link rel="canonical" href="https://example.com/posts/html-meta-and-seo" />
    \`\`\`

---

## 메타 태그: Open Graph (OG)

\`Open Graph\`는 카카오톡, 페이스북, 링크드인 등 소셜 미디어에서 페이지를 공유할 때 어떤 제목·설명·이미지를 표시할지 제어하는 메타 태그입니다.


### Open Graph: 여러가지 속성

| 속성                 | 값                                         | 설명                                                                          | 
| ------------------ |-------------------------------------------|-----------------------------------------------------------------------------| 
| og:title           | 텍스트(최대 70자)                               | 공유 카드의 제목, 포스트 제목과 동일하게                                                     | 
| og:description     | 텍스트(최대 160자)                              | 공유 카드의 설명, 페이지 요약 설명                                                        | 
| og:type            | article, website, video, music 등          | \`article\`: 블로그 글, 뉴스, \`website\`: 일반 웹사이트, \`video\`: 비디오 콘텐츠, \`music\`: 음악 콘텐츠 |
| og:url             | URL(절대 URL)                               | 공유 카드가 가리키는 현재 페이지의 절대 URL(https://...), \`canonical\`과 동일하게                  | 
| og:image           | 이미지 URL(최소 1200x630px)                    | 공유 카드의 썸네일 이미지                                                              | 
| og:image:width     | 숫자(픽셀)                                    | og:image의 너비(px)                                                            | 
| og:image:height    | 숫자(픽셀)                                    | og:image의 높이(px)                                                            | 
| og:site_name       | 텍스트                                       | 사이트의 이름으로 공유 카드에 표시됨                                                        | 
| og:locale          | 언어 코드(예: ko_KRen_US)                      | 페이지의 언어 및 지역(\`ko_KR\`: 한국어, \`en_US\`: 미국 영어, \`ja_JP\`: 일본어, \`fr_FR\`: 프랑스어)     | 
| og:author          | URL 또는이름                                  | 콘텐츠 작성자- 작성자 이름- 또는 작성자 프로필 URL- 다중 작성자 가능                                  |
| og:published_time  | ISO 8601 날짜/시간(YYYY-MM-DDTHH:MM:SS+00:00) | 콘텐츠 발행 날짜(ISO 8601 형식), \`article\` 타입일 때 권장                                  |
| og:modified_time   | ISO 8601 날짜/시간(YYYY-MM-DDTHH:MM:SS+00:00) | 콘텐츠 마지막 수정 날짜(ISO 8601 형식), \`published_time\`보다 최신                           |
| og:expiration_time | ISO 8601 날짜/시간(YYYY-MM-DDTHH:MM:SS+00:00) | 콘텐츠 만료 시간(ISO 8601 형식), 이벤트, 시간 제한 콘텐츠로 이 날짜 이후로는 유효하지 않음                   |
---

## 메타 태그: Twitter Card

\`Twitter Card\`는 트위터에서 링크를 공유할 때 어떻게 표시할지 제어하는 메타 태그입니다.


### Twitter Card: 여러가지 속성

| 속성(\`name\`)            | 값(\`content\`)                         | 설명                                          |
|---------------------|--------------------------------------|---------------------------------------------|
| twitter:card        | \`summary\`, \`summary_large_image\`, \`player\` | 카드 타입 지정                                 |
| twitter:title       | 텍스트(최대 70자)                          | 카드에 표시될 제목                                  |
| twitter:description | 텍스트(최대 200자)                         | 카드에 표시될 설명                                  |
| twitter:image       | 이미지 URL(최소 506x506px)                | 카드에 표시될 이미지(\`summary\`, \`summary_large_image\`) |
| twitter:creator     | @트위터계정(예: @baklibra26)               | 글 작성자의 트위터 계정                               |
| twitter:site        | @트위터계정(예: @dev_baklibra26)           | 공식 사이트/회사 공식 트위터 계정                     | 

---



## 메타 태그: 검증 도구

- **검증 도구란?** 

  작성한 메타 태그를 점검하는 온라인 도구들입니다.

- **왜 필요할까?**

  메타 태그를 잘못 작성하지는 않았는지, 카카오톡·페이스북·트위터 등 소셜 미디어에서 페이지가 어떻게 미리보기되는지 확인하고, 검색 엔진이 페이지를 제대로 인식하는지 점검하고, \`viewport\` 설정이 모바일에서 정상 작동하는지 검증할 수 있습니다.

---

### 검증 도구: Google Search Console
- **용도:** 페이지 색인 상태, SEO 기본 점검
- **접속:** https://search.google.com/search-console
- **확인 항목:** 색인 여부, 모바일 친화성, \`robots\` 메타 태그 충돌

---

### 검증 도구: Facebook Debugger
- **용도:** Open Graph 메타 태그 검증
- **접속:** https://developers.facebook.com/tools/debug/
- **확인 항목:** \`og:title\`, \`og:description\`, \`og:image\` 정상 인식, 미리보기 표시

---

### 검증 도구: Twitter Card Validator
- **용도:** \`Twitter Card\` 메타 태그 검증
- **접속:** https://cards-dev.twitter.com/validator
- **확인 항목:** 카드 타입, 이미지 크기 (최소 506x506px), 텍스트 길이

---

### 검증 도구: PageSpeed Insights
- **용도:** viewport 설정, 모바일 최적화, 성능 검증
- **접속:** https://pagespeed.web.dev/
- **확인 항목:** 모바일 점수 (75점 이상), 페이지 로딩 속도

---

### 검증 도구: Markup Validator

- **용도:** HTML 문법 및 메타 태그 구문 검증
- **접속:** https://validator.w3.org/
- **확인 항목:** 문법 에러, 중복 속성, 닫히지 않은 태그

---
`,Jy=Object.freeze(Object.defineProperty({__proto__:null,default:Yy},Symbol.toStringTag,{value:"Module"})),Ky='---\nsummary: HTML 의 시멘틱 마크업(Semantic Markup)에 대해서 알아보자.\ntags:\n  - HTML 시멘틱 마크업\n  - HTML Semantic Markup\nreferences: \ncreated_date: 2026-02-10T21:09:52.000Z\nlast_modified_date: 2026-02-10T22:38:52.000Z\n---\n\n> 이 글에서는 HTML(HyperText Markup Language) 에서 시맨틱 마크업(Semantic Markup)이 무엇이고 언제 사용하는지에 대해서 정리했습니다.\n\n---\n\n# HTML: 시맨틱 마크업(`Semantic Markup`)\n\n\n시맨틱 마크업은 웹 페이지를 "보이는 것"을 넘어 사람과 검색 엔진·스크린 리더 같은 프로그램이 모두 이해하기 쉽도록 콘텐츠의 의미에 맞는 HTML 태그를 골라 구조를 표현하는 방식으로 작성하는 것을 말합니다.\n이렇게 하면 하나의 문서 안에서 인간과 기계가 동일한 구조와 의미를 공유할 수 있습니다.\n\n\n## 시맨틱 마크업: 왜 중요할까?\n\n시맨틱 HTML을 사용하면 사람뿐만 아니라 검색 엔진, 스크린 리더 같은 프로그램 또한 웹 페이지를 잘 이해할 수 있습니다.\n예를 들어 단순히 `div` 를 사용하는 것이 아니라 상단(`header`)·본문(`main`)·하단(`footer`) 과 같이 사용하면 구조가 훨씬 명확해집니다.\n\n## 시맨틱 마크업: 여러가지 시맨틱 태그\n\n- **`header`**: 페이지나 섹션의 머리글, 로고·메인 내비게이션 등을 담는다.\n- **`nav`**: 주요 이동 경로를 모아둔 내비게이션 영역을 표현한다.\n- **`main`**: 문서에서 가장 핵심이 되는 본문 콘텐츠를 감쌀 때 사용한다.\n- **`section`**: 주제를 기준으로 문서 안을 여러 덩어리로 나눌 때 사용한다.\n- **`article`**: 블로그 글, 뉴스 기사처럼 독립적으로 재사용 가능한 콘텐츠 블록에 사용한다.\n- **`aside`**: 본문을 보조하는 사이드바, 관련 링크, 광고 영역 등에 사용한다.\n- **`footer`**: 문서나 섹션의 맺음말, 저작권 정보, 연락처 등을 담는다.\n\n위의 시맨틱 태그 등을 적절한 곳에 사용하면 "여기는 헤더, 여기는 내비게이션 또 이쪽은 본문" 과 같이 의미를 명확하게 드러낼 수 있습니다.\n\n\n## 시맨틱 마크업: 언제, 어떻게 ?\n\n시맨틱 태그는 레이아웃을 나누는 모든 곳에 쓰기보다는 의미와 역할이 분명한 곳에 사용해야합니다. \n예를 들어 페이지 상단(`header`)·하단(`footer`), 메인 내비게이션(`nav`), 본문(`main`), 사이드바(`aside`)처럼 기능이 뚜렷한 영역에 사용해서 구조를 드러내는거죠. \n만약 단순히 스타일을 위해서 구역을 나누거나 특정 부분에 색·여백 등을 주려는 목적이라면, 여전히 `div`, `span` 같은 비시맨틱 태그를 사용하는게 좋습니다.\n\n- **`semantic tag`**: 의미와 역할이 분명하게 드러나는 영역에 사용하는 태그 (예: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`).\n- **`div`, `span`**: 별도의 의미를 가지지 않는 일반 컨테이너로, 레이아웃을 나누거나 스타일·스크립트 적용을 위해 사용',Qy=Object.freeze(Object.defineProperty({__proto__:null,default:Ky},Symbol.toStringTag,{value:"Module"})),Zy=`---
summary: HTML 의 목록(List) 에 대해서 알아보자.
tags:
  - HTML 목록
  - HTML List
references: 
  - https://roadmap.sh/html
created_date: 2026-02-10T19:09:52.000Z
last_modified_date: 2026-02-10T20:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 에서 목록(List)을 표현할 때 사용하는 태그들을 정리합니다.

---

# HTML: 목록(List)

웹 페이지에서 메뉴, 글 목차, 댓글 리스트, 사이드바 링크처럼 "비슷한 정보 여러 개를 나열하는 UI" 는 거의 다 목록 구조로 표현할 수 있습니다. 
이때 리스트 태그를 제대로 쓰면, 브라우저와 스크린 리더가 구조를 정확하게 이해해서 접근성과 유지보수성이 좋아집니다.

---

## 순서 없는 목록: \`ul\`, \`li\`

**순서가 중요하지 않은 나열**은 \`ul(unordered list)\`과 \`li(list item)\` 조합으로 표현합니다. 

\`\`\`html
<ul>
  <li>사과</li>
  <li>바나나</li>
  <li>포도</li>
</ul>
\`\`\`

- \`ul\`: "이 안에는 순서 없는 항목들의 묶음이 있다"는 의미. 
- \`li\`: 각각의 항목 하나를 나타내는 태그. 

사이트의 내비게이션 메뉴, 태그 목록, 단순 항목 나열 등에 주로 사용합니다. 



## 순서 있는 목록: \`ol\`, \`li\`

**순서나 단계가 중요한 목록**은 \`ol\`(ordered list)과 \`li\`를 사용합니다. 

\`\`\`html
<ol>
  <li>회원가입</li>
  <li>이메일 인증</li>
  <li>로그인</li>
</ol>
\`\`\`

- \`ol\`: "1, 2, 3..." 처럼 순서가 있는 목록. 
- \`li\`: 각 단계나 순서의 한 항목. 

요리 레시피 순서, 튜토리얼 단계, 우선순위가 있는 리스트에 잘 어울립니다. 


## 설명 목록: \`dl\`, \`dt\`, \`dd\`

어떤 **용어와 그에 대한 설명**을 짝으로 표현하고 싶을 때는 \`dl\`(description list)을 사용합니다. 

\`\`\`html
<dl>
  <dt>HTML</dt>
  <dd>웹 페이지의 구조를 정의하는 마크업 언어.</dd>

  <dt>CSS</dt>
  <dd>웹 페이지의 스타일(색, 크기, 배치 등)을 정의하는 언어.</dd>
</dl>
\`\`\`

- \`dl\`: 전체 설명 목록의 묶음. 
- \`dt\`: 설명 대상(용어, 제목). 
- \`dd\`: 그에 대한 설명 내용. 

FAQ, 용어 정리, 설정 항목 + 설명 텍스트 같은 곳에 사용합니다. 


## 중첩 목록: 목록 안에 또 다른 목록

목록 안에 하위 항목을 넣고 싶으면 \`li\` 안에 또 다른 \`ul\` 혹은 \`ol\`을 중첩해서 사용할 수 있습니다. 

\`\`\`html
<ul>
  <li>
    프론트엔드
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>백엔드</li>
</ul>
\`\`\`

이렇게 하면 "프론트엔드" 아래에 하위 목록이 있는 계층 구조를 정확히 알 수 있습니다. 


## 언제 \`div\` 대신 목록 태그를 쓸까?

목록 UI를 그냥 \`div\` 여러 개로 사용해도 화면에는 비슷하게 보일 수 있으나 다음과 같은 경우에는 목록 태그를 쓰는 게 좋습니다. 

- 항목들이 "비슷한 유형의 데이터"로 반복될 때 (게시글 카드, 댓글, 메뉴 등). 
- 순서가 있거나, 단계/절차를 표현할 때. 
- 용어 + 설명 형태의 구조를 표현할 때. 

위와 같이 **"여러 개의 비슷한 요소가 나열"** 되는 경우, \`ul\`/\`ol\`/\`dl\`을 고려해보는게 좋습니다. `,Vy=Object.freeze(Object.defineProperty({__proto__:null,default:Zy},Symbol.toStringTag,{value:"Module"})),Wy='---\nsummary: HTML 의 인풋(Input)에 대해서 알아보자.\ntags:\n  - HTML 인풋\n  - HTML Input\nreferences: \ncreated_date: 2026-02-10T21:09:52.000Z\nlast_modified_date: 2026-02-10T22:38:52.000Z\n---\n\n> 이 글에서는 HTML(HyperText Markup Language) 에서 사용자로부터 값을 어떻게 입력받을 수 있는 인풋(Input) 태그의 여러가지 속성, 타입에 대해 정리했습니다.\n\n---\n\n# HTML: Input\n\n`input` 태그는 사용자로부터 텍스트, 이메일, 숫자 등의 여러가지 타입의 값을 입력받을 때 사용하는 HTML 태그입니다.\n\n\n## Input: 여러가지 속성\n\n- **`type`**: **어떤 형태의 데이터를 입력받을지를 결정**하는 속성.\n  ```html\n    <input type="email" />\n    <input type="number" />\n    ```\n  \n- **`name`**: 데이터의 고유 이름을 설정하는데 사용하는 속성.\n\n  ```html\n  <input type="text" name="username" />\n  <input type="password" name="password" />\n  ```\n  \n- **`value`**: `input` 태그가 현재 가지고 있는 값을 나타내는 속성. 기본값을 설정할 때도 사용된다.\n  ```html\n  <input type="text" name="nickname" value="baklibra" />\n  ```\n  \n- **`placeholder`**: 예시/힌트 텍스트를 보여주는 속성. 실제 입력값은 아니며 값을 입력하면 사라진다.\n\n  ```html\n  <input\n    type="text"\n    name="username"\n    placeholder="아이디를 입력하세요"\n  />\n  ```\n\n- **`disabled`**: `input` 태그를 비활성화되어 클릭/입력이 불가능하며, 폼 전송 시 값이 전송되지 않는다.\n\n  ```html\n  <button type="submit" disabled>제출하기</button>\n  ```\n  \n- **`required`**: 값 필수 여부를 나타내는 속성으로 값을 입력되지 않으면 브라우저가 기본으로 검증 메세지를 띄워준다. \n\n  ```html\n  <input\n    type="password"\n    name="password"\n    required\n  />\n  ```\n\n\n## Input: 여러가지 타입\n\n`input`의 `type` 값에 따라 텍스트, 비밀번호, 이메일 등 용도에 맞는 전용 입력 필드를 만들 수 있고, 브라우저가 각 타입에 맞는 UI와 기본 검증을 함께 제공해 줍니다.\n\n---\n\n### Input: 텍스트 타입\n\n`text` 는 한줄 텍스트를 입력받을 때 사용하는 타입 속성입니다.\n\n- **`text` 타입 예시**\n  ```html\n  <input type="text" />\n  ```\n\n---\n\n### Input: 패스워드 타입\n\n`password` 는 사용자 계정의 패스워드를 입력받을 때 사용하는 타입 속성으로, 입력 내용이 ●●● 으로 가려집니다. \n\n- **`password` 타입 예시**\n  ```html\n  <input type="password" />\n  ```\n\n---\n\n### Input: 이메일 타입\n\n`email` 은 이메일 정보를 입력받을 때 사용하는 타입 속성으로 이메일 형식 검증을 지원하고, 모바일에서 이메일 입력에 어울리는 키보드를 보여줍니다.\n\n- **`email` 타입 예시**\n  ```html\n  <input type="email" />\n  ```\n\n---\n\n### Input: 넘버 타입\n\n`number` 는 숫자 정보를 입력받을 떄 사용하는 속성으로, 스핀 버튼이 표시되고 숫자가 아닌 값은 기본 검증에서 막히게됩니다.\n\n- **`number` 타입 예시**\n  ```html\n  <input type="number" />\n  ```\n\n---\n\n### Input: 체크박스 타입\n\n`checkbox` 는 여러 값을 **다중 선택**으로 받는 타입으로, 각 체크박스는 체크 여부만 `true`/`false` 로 표현됩니다. \n같은 `name` 을 가진 `checkbox` 들 중 선택된 `checkbox` 의 `value` 가 서버로 **리스트처럼 묶여** 전송되며, \n폼이 `application/x-www-form-urlencoded` 로 전송될 때는 `stack=frontend&stack=backend` 같이 한 줄의 쿼리 스트링으로 인코딩됩니다. \n\n\n- **`checkbox` 예시**\n\n  ```html\n    <input type="checkbox" name="stack" value="frontend" />\n    <input type="checkbox" name="stack" value="backend" />\n    <input type="checkbox" name="stack" value="devops" />\n  ```\n\n---\n### Input: 라디오 타입\n\n`radio` 타입은 **여러 선택지 중에서 딱 하나만 고르게 할 때** 사용하는 타입으로,\n같은 `name`을 가진 라디오 버튼들은 서로 연결되어 한 그룹이 되고, 그 그룹 안에서는 항상 하나 선택 또는 전부 해제 선택하도록 강제됩니다. \n\n- **`radio` 타입 기본 예시**\n  ```html\n  male: <input type="radio" name="gender" value="male" />\n  female: <input type="radio" name="gender" value="female" />\n  other: <input type="radio" name="gender" value="other" />\n  ```\n\n동일한 `name` 값을 가지는 `radio` 타읩의 `input` 은 **하나의 그룹**이 되고 사용자는 해당 그룹의 항목 중 **오직 하나만 선택**할 수 있습니다.  \n\n---\n\n### Input: 날짜/시간 타입\n\n날짜·시간 관련 인풋 타입들은 브라우저가 **전용 피커 UI**를 띄워줍니다.\n덕분에 사용자가 직접 형식을 맞춰 입력하지 않아도 되고, 기본적인 형식 검증도 함께 처리됩니다. \n\n- **`type="date"`: 날짜(년/월/일)를 선택하는 달력 UI.**\n  ```html\n    <input type="date" name="birthday" />\n    <input type="time" name="meeting_time" />\n    <input type="datetime-local" name="event_at" />\n    ```\n- **`type="time"`: 시/분(필요시 초)만 선택하는 시간 피커.**\n  ```html\n    <input type="date" name="birthday" />\n    <input type="time" name="meeting_time" />\n    <input type="datetime-local" name="event_at" />\n    ```\n  \n- **`type="datetime-local"`: 날짜 + 시간까지 한 번에 선택하는 입력 필드.**\n  ```html\n    <input type="date" name="birthday" />\n    <input type="time" name="meeting_time" />\n    <input type="datetime-local" name="event_at" />\n    ```\n\n### Input: 파일 타입\n\n`file` 는 이미지, 동영상과 같은 파일을 입력받을 때 사용하는 타입 속성입니다.\n\n- **`file` 타입 예시**\n  ```html\n  <input type="file" />\n  ```\n\n---\n\n## Input: `Label`과 함께\n\n`input`만 둔다면 사용자가 어떤 값을 써야 하는지 알기 어렵기 때문에, 설명 텍스트를 함께 두는 것이 좋습니다. \n`label`은 **해당 인풋을 설명하는 텍스트**로, "이 칸에 어떤 값을 입력해야 하는지"를 명확하게 알려 줍니다.\n\n- **`label` 사용 시 좋은 점**\n  - `label`을 클릭해도 `input`에 포커스가 가기 때문에 클릭 영역이 넓어져 사용성이 좋아진다. \n  - 스크린 리더는 `input`에 포커스가 갈 때 `label`의 텍스트를 함께 읽어 줘서 접근성이 올라간다. \n  \n---\n\n### `Label`: `Input`을 감싸자\n\n```html\n<label>\n  사용자 이름\n  <input type="text" name="username" />\n</label>\n```\n\n`label` 안에 `input`을 포함시키면 둘이 암묵적으로 연결되어, `label` 전체(텍스트 영역 포함)를 클릭해도 해당 `input`이 활성화됩니다.\n\n---\n\n### `Label`: `for`/`id` 속성과 `Input` 을 함꼐\n\n```html\n<label for="agree-terms">이용약관에 동의합니다</label>\n<input id="agree-terms" type="checkbox" name="agree" />\n```\n\n`for`와 `id` 값을 맞추면, `label`과 `input`이 명시적으로 연결되며 `label`을 클릭해도 해당 `input`이 활성화됩니다.\n\n\n## Input: Best Practice\n\n1. 중요한 인풋에는 **가능하면 항상 `label`을 붙인다.**\n2. 단순 스타일용 `<span>` 대신, 의미를 살릴 수 있도록 `label`로 필드 이름을 표시한다.\n3. 체크박스·라디오는 **반드시 라벨과 함께 사용**해 선택 영역과 접근성을 확보한다. \n4. `placeholder`는 “설명”이 아니라 **예시 텍스트**로만 쓰고, 필드 이름은 `label`로 제공한다.\n5. `for`와 `id`를 쓸 때는 페이지 내에서 **중복되지 않는 고유 `id`** 를 사용한다. \n6. 시멘틱 관점에서 “입력 필드”는 `input`, “필드의 이름/설명”은 `label`로 역할을 분리하는 것이 좋다.',Xy=Object.freeze(Object.defineProperty({__proto__:null,default:Wy},Symbol.toStringTag,{value:"Module"})),$y=`---
summary: HTML 의 임베디드 미디어(Embedded Media) 에 대해서 알아보자.
tags:
  - HTML 임베디드 미디어
  - HTML Embedded Media
references: 
  - https://roadmap.sh/html
created_date: 2026-02-10T19:09:52.000Z
last_modified_date: 2026-02-10T20:38:52.000Z
---

> 이 글에서는 HTML에서 **이미지, 오디오, 비디오 같은 외부 미디어를 페이지 안에 넣는 방법**에 대해서 정리합니다. 

---

# HTML: 임베디드 미디어(Embedded Media)

**임베디드 미디어(Embedded Media)** 는 말 그대로 **“문서 안에 다른 미디어를 집어넣는다(임베드한다)”** 는 뜻입니다. 
텍스트만 있는 페이지가 아니라 그림, 음악, 영상, 외부 서비스 화면 등을 같이 보여주고 싶을 때 임베디드 미디어 태그들을 사용합니다.

- **임베디드 미디어 예시**
  - **이미지**: 사진, 아이콘, 썸네일 등: \`<img>\`
  - **오디오**: 배경 음악, 팟캐스트 플레이어 등: \`<audio>\`
  - **비디오**: 동영상 플레이어: \`<video>\`
  - **외부 페이지/서비스**: 유튜브, 지도, 다른 사이트 일부: \`<iframe>\`

---

## 임베디드 미디어: 이미지(\`img\`)

HTML 문서 안에 이미지를 넣고싶을 떄, \`<img>\` 태그를 사용합니다. 

- \`img\` 사용 예시
    \`\`\`html
    <img src="/images/cat.png" alt="의자 위에 앉아 있는 고양이" />
    \`\`\`

### \`<img>\` 속성

- \`src\`: 실제 이미지 파일 경로
- \`alt\`: 이미지가 깨지거나 스크린 리더를 사용할 때 대신 읽어 줄 설명 텍스트

\`alt\`는 접근성 측면에서 중요하므로 “이 이미지를 글로 설명하면 뭐라고 할지”를 간단히 적어주는 것이 좋습니다. 

---

## 임베디드 미디어: 소리(\`audio\`)

HTML 문서 안에 음악이나 효과음 같은 소리를 넣고싶을 떄, \`<audio>\` 태그를 사용합니다. 

- \`audio\` 사용 예시
    \`\`\`html
    <audio controls>
      <source src="/audio/bgm.mp3" type="audio/mpeg" />
      브라우저가 오디오 태그를 지원하지 않습니다.
    </audio>
    \`\`\`

### \`audio\` 속성

- \`controls\`: 재생/일시정지/볼륨 같은 기본 컨트롤 UI를 보여줌
- \`source\` 태그를 여러 개 두고, 다른 형식(mp3, ogg 등)을 함께 제공할 수도 있습니다. 

필요하면 \`autoplay\`, \`loop\`, \`muted\` 같은 속성으로 자동 재생, 반복 재생 여부도 제어할 수 있습니다. 

---

## 임베디드 미디어: 영상(\`video\`)

HTML 문서 안에 동영상을 직접 호스팅해서 보여주고 싶을 때, \`<video>\` 태그를 사용합니다.

- \`video\` 사용 예시
    \`\`\`html
    <video controls width="640">
      <source src="/video/sample.mp4" type="video/mp4" />
      브라우저가 비디오 태그를 지원하지 않습니다.
    </video>
    \`\`\`

### \`video\` 속성

- \`controls\`: 재생 컨트롤 표시
- \`width\`/\`height\`: 플레이어 크기 지정
- \`poster\`: 영상이 재생되기 전에 보여줄 썸네일 이미지 지정 가능

마찬가지로 \`autoplay\`, \`loop\`, \`muted\` 등을 함께 사용할 수 있지만, 자동 재생은 사용자 경험을 해칠 수 있어 신중하게 사용하는 게 좋습니다. 

---

## 임베디드 미디어: 외부 콘텐츠(\`iframe\`)

유튜브 영상, 지도, 다른 웹 서비스 화면을 그대로 가져와서 보여주고 싶을 때는 \`<iframe>\`을 사용합니다. 

- \`iframe\` 사용 예시
    \`\`\`html
    <iframe
      src="https://www.youtube.com/embed/동영상ID"
      width="560"
      height="315"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    \`\`\`

### \`iframe\` 속성

- \`src\`: 불러올 외부 페이지 주소
- \`allowfullscreen\`: 전체화면 허용
- \`title\`: iframe 안에 어떤 내용이 들어있는지 설명 (접근성용)

\`iframe\` 은 편리하지만 지나치게 사용하는 경우 성능에 좋지 않고 보안 정책(\`CSP\`, \`X-Frame-Options\` 등)에 막히는 경우도 있어서 필요한 곳에만 사용하는 것이 좋습니다. 

---

## 임베디드 미디어: 언제 사용할까?

- 글만으로 설명이 부족할 때, 이미지나 영상으로 이해를 돕고 싶을 때
- 튜토리얼/강의처럼 실제 화면이나 데모를 보여줄 필요가 있을 때
- 음악/팟캐스트/스트리밍 같은 **미디어 자체가 콘텐츠의 핵심**일 때 

만약 단순한 아이콘이나 장식용 요소를 추가애햐한다면 \`CSS / background-image\` 또는 \`아이콘 폰트\`/\`SVG\` 등으로 처리하는 경우도 많습니다. 

---
`,nv=Object.freeze(Object.defineProperty({__proto__:null,default:$y},Symbol.toStringTag,{value:"Module"})),ev=`---
summary: HTML 의 인라인, 내부, 외부 스타일이 무엇인지, 어떻게 사용하는지 알아보자.
tags:
  - HTML CSS 적용하기
  - HTML Cascading Style Sheet 적용하기 
references: 
created_date: 2026-02-10T21:09:52.000Z
last_modified_date: 2026-02-10T22:38:52.000Z
---

> 이 글에서는 HTML에 자바스크립트를 포함하는 세 가지 방식(인라인, 내부, 외부)과 <script> 태그의 위치, defer/async 속성까지 함께 정리합니다

---

# HTML: 자바스크립트 추가하기

HTML과 CSS만으로 만들어진 웹 페이지는 사용자가 보게 되는 내용이 고정된 정적인 페이지지만
자바스크립트(JavaScript)를 추가하면 웹 페이지를 동적인 페이지로 만들 수 있습니다.
이번엔 HTML 안에 자바스크립트를 추가하는 인라인(Inline), 내부(Internal), 외부(Extenal) 방식이 무엇인지 정리해보겠습니다.


---

## HTML: 인라인 자바스크립트

인라인 자바스크립트는 **HTML 태그의 속성 안에 직접 자바스크립트 코드를 작성하는 방식**으로, 
주로 \`onclick\`, \`onchange\` 같은 이벤트 핸들러 속성에 간단하게 코드를 넣을 때 사용합니다. 

\`\`\`html
<button onclick="alert('버튼을 클릭했습니다!')">
  클릭
</button>
\`\`\`

간단하게 코드를 작성해서 동작을 테스트할 때 사용하나 HTML 과 CSS, 자바스크립트가 섞여 코드가 길어지면 읽기도 힘들고 수정 및 확장이 어려워지기 때문에 주의해서 사용해야합니다. 

---

## HTML: 내부 자바스크립트

내부 자바스크립트는 HTML 파일 안에 \`<script>\` 태그를 \`<head>\`나 \`<body>\` 안에 추가하고 안에 **자바스크립트 코드를 작성하는 방식**으로
자바스크립트 코드를 HTML 파일 한 쪽에 모아서 관리할 수 있습니다.

\`\`\`html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>내부 자바스크립트</title>
  </head>
  <body>
    <button id="btn">클릭</button>

    <script>
      const button = document.getElementById("btn");

      button.addEventListener("click", () => {
        alert("버튼을 클릭했습니다!");
      });
    <\/script>
  </body>
</html>
\`\`\`

HTML 파일마다 자바스크립트 코드가 존재할 수 있기 때문에 HTML 파일이 많아지면 관리가 어렵고 코드 재사용하기가 어렵습니다.   

---

## HTML: 외부 자바스크립트

외부 자바스크립트는 자바스크립트 코드를 **별도의 \`.js\` 파일로 분리**하고 HTML에서 \`<script src="...">\`로 불러오는 방식입니다.  

- **\`/scripts/main.js\`:**
    \`\`\`javascript
    const button = document.getElementById("btn");
    const counter = document.getElementById("count");
    
    let count = 0;
    
    button.addEventListener("click", () => {
      count += 1;
      counter.textContent = count;
    });
    \`\`\`

- **\`/index.html\`:**
    \`\`\`html
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <title>외부 자바스크립트</title>
      </head>
      <body>
        <button id="btn">클릭</button>
        <p>클릭 횟수: <span id="count">0</span></p>
    
        <script src="./scripts/main.js"><\/script>
      </body>
    </html>
    \`\`\`

이 방식은 HTML과 스크립트가 분리되어 읽기 쉽고 수정 및 확장에 용이하며 자바스크립트 코드를 재사용하기 쉬우나 파일이 많아지면 번거로울 수 있습니다. 

---

## HTML: \`<script>\` 태그는 어디에 ?

일반적으로 \`<script>\` 태그는 \`<head>\` 에도, \`<body>\` 에도 둘 수 있으나, \`<body>\` 안에 넣을 떄는 \`<body>\` 맨 아래에 넣는 경우가 많습니다. 

---

### HTML: <script> 위치 별 실행 순서

  - **\`<head>\` 안**: HTML 파싱 전, 스크립트를 실행한다. 
  - **\`<body>\` 맨 아래**: DOM 요소들이 모두 생성된 후, 스크립트를 실행한다.

---

### HTML: \`HTML5\` 속성을 활용한 스크립트 로딩 방식 제어

HTML5 의 \`defer\`, \`async\` 와 같이 속성을 통해서 스크립트 로딩 방식을 제어할 수 있으나, **이는 모두 src가 있는 외부 자바스크립트 방식을 사용했을 때만 유효**합니다.  

- **\`defer\`**: HTML 파싱과 스크립트 다운로드를 병렬로 진행한 뒤, 파싱이 끝난 후 문서에 작성된 순서대로 스크립트를 실행한다.
  \`\`\`html
  <script defer src="main.js"><\/script>
  \`\`\`
  
- **\`async\`**: 스크립트를 HTML 파싱과 병렬로 다운로드하고, 다운로드가 끝나는 즉시 실행해서 실행 순서가 보장되지 않는다.
  \`\`\`html
  <script async src="analytics.js"><\/script>
  \`\`\` 

---

## HTML: 언제 어떤 방식을 쓰면 좋을까?

| 방식  | 위치 | 특징                                |
|-----| --- |-----------------------------------| 
| 인라인 | 태그의 이벤트 속성 안 | 가장 단순하지만 HTML과 JS가 섞여 유지보수에 불리하다. | 
| 내부  | \`<script>\` 태그 안 | 파일 하나에서 빠르게 작성·테스트 가능하다.          | 
| 외부  | 별도 \`.js\` 파일 | 재사용성과 유지보수, 성능(캐싱)에 유리하다.         |  

---
`,tv=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),av=`---
summary: HTML 의 전역 속성(Standard Attributes) 에 대해서 알아보자.
tags:
  - HTML 전역 속성
  - HTML Standard Attributes
references: 
  - https://roadmap.sh/html
created_date: 2026-02-09T19:09:52.000Z
last_modified_date: 2026-02-09T20:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 에서 전역 속성(Standard Attributes) 가 무엇이고 어떤 것들이 있는지 정리했습니다.

---

# HTML: 전역 속성(Standard Attributes)

전역 속성은 거의 모든 HTML 태그에서 공통으로 사용할 수 있는 속성들의 집합을 말합니다. 
특정 태그 전용인 \`src\`, \`href\` 같은 속성과는 다르게 전역 속성은 \`div\`, \`span\`, \`button\`, \`input\` 등 대부분의 요소에 공통으로 붙일 수 있습니다.

- **대표적인 전역 속성**
  - **\`id\`**: 요소를 문서 안에서 유일하게 식별할 수 있는 속성
  - **\`class\`**: 역할·그룹을 표현하고 스타일을 공유하는 속성
  - **\`style\`**: 인라인 스타일로 직접 CSS 작성할 떄 사용하는 속성
  - **\`data-*\`**: HTML에 정의되지 않은 커스텀 속성
  - **\`tabindex\`**: 탭(Tab)을 통한 키보드 포커스 이동 순서 제어 속성
  - **\`title\`**: 요소에 대한 툴팁(보조 설명) 제공하는 속성

---


## 전역 속성: \`id\`

**\`id\`** 는 문서 안에서 **해당 요소를 유일하게 식별하기 위한 이름표** 입니다.
\`CSS\`·\`JavaScript\`·\`Anchor\` 링크에서 특정 요소를 정확히 가리키기 위해 사용하기 때문에 하나의 HTML 문서에서 같은 \`id\`를 두 번 쓰지 않아야합니다. 

\`\`\`html
<h1 id="page-title">HTML 전역 속성</h1>
<button id="submit-btn">저장</button>
\`\`\`

- CSS: \`#page-title\`, \`#submit-btn\` 형태의 선택자로 스타일 지정한다.
- JavaScript: \`document.getElementById('submit-btn')\`으로 바로 요소에 접급한다. 


## 전역 속성: \`class\`


\`class\`는 요소가 어떤 **역할/그룹/상태에 속하는지 표현하는 라벨**이다. 여러 요소가 같은 클래스를 공유할 수 있으며 한 요소가 여러 클래스를 가질 수도 있습니다. 

\`\`\`html
<p class="text-muted">부가 설명 텍스트</p>
<button class="btn primary">확인</button>
<button class="btn secondary">취소</button>
\`\`\`

- 공통 스타일: \`.btn\`에 정의한다.
- 변형 스타일: \`.primary\`, \`.secondary\`로 역할에 따라 분리한다. 

스타일 재사용과 JavaScript에서 그룹 단위 선택(예: \`document.querySelectorAll('.btn')\`) 을 위해 가장 많이 쓰이는 전역 속성입니다. 


## 전역 속성: \`style\`

\`style\`은 요소에 **인라인으로 CSS를 직접 작성하는 전역 속성**입니다.

\`\`\`html
<p style="color: #6b7280; font-size: 14px;">
  인라인 스타일 예시입니다.
</p>
\`\`\`

특정 요소에 인라인으로 CSS 를 적용할 수 있기 때문에 빠르게 테스트 할 수 있으나 중복이 생길 수도 있고 유지보수가 어렵습니다. 

## 전역 속성: \`data-*\`

\`data-*\`는 HTML 표준에 정의되지 않은 **커스텀 데이터를 요소에 붙여두기 위한 전역 속성** 으로 이름은 반드시 \`data-\`로 시작해야 합니다. 

\`\`\`html
<li
  class="todo-item"
  data-id="123"
  data-priority="high"
  data-completed="false"
>
  HTML 전역 속성 글 작성하기
</li>
\`\`\`

\`JavaScript\` 로 \`dataset\`으로 읽을 수 있습니다.

\`\`\`js
const item = document.querySelector('.todo-item');

item.dataset.id;        // "123"
item.dataset.priority;  // "high"
item.dataset.completed; // "false"
\`\`\`

\`data-*\` 속성은 요소에 꼭 같이 기억해 두고 싶은 간단한 정보들을 붙여둘 때 쓰면 편하다.


## 전역 속성: \`tabindex\`

\`tabindex\`는 요소의 **키보드 Tab 포커스 이동 순서**를 제어하는 전역 속성입니다. 

- \`양의 정수\`: Tab 이동 순서를 명시적으로 지정한다.
- \`0\`: 기본 흐름에 포함하되, DOM 순서를 따른다.
- \`-1\`: \`Tab\`으로는 이동하지 않지만, JS로 포커스를 줄 수 있다.

\`\`\`html
<button tabindex="1">첫 번째</button>
<button tabindex="3">세 번째</button>
<button tabindex="2">두 번째</button>
\`\`\`

탭으로 요소를 선택할 수 있어 편리하지만 필요한 곳에 최소한으로 사용하는 것이 좋습니다. 


## 전역 속성: \`title\`

\`title\`은 요소에 대한 **보조 설명(툴팁)** 을 제공하는 전역 속성으로 많은 브라우저에서 마우스를 올리면 작은 말풍선 형태로 표시됩니다. 

\`\`\`html
<button title="폼 데이터를 서버로 전송합니다.">
  제출
</button>
\`\`\`

\`title\` 속성은 중요한 정보는 실제 텍스트나 ARIA 속성으로 제공하도록 하고 **이미 화면에 보이는 UI를 보충 설명하는 용도로 사용하는 것이 좋습니다.** 
`,lv=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),iv=`---
summary: HTML 의 테이블(Table) 태그 에 대해서 알아보자.
tags:
  - HTML 테이블 태그
  - HTML Table Tag
references: 
  - https://roadmap.sh/html
created_date: 2026-02-10T19:09:52.000Z
last_modified_date: 2026-02-10T20:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 에서 테이블(Table)을 표현할 때 사용하는 태그들을 정리합니다.

---


# HTML: 테이블

HTML에서 테이블은 **행과 열로 이루어진 표 형식 데이터**를 표현할 때 사용하며
엑셀 표, 통계 데이터, 시간표, 가격표처럼 “격자 형태로 정리된 정보”를 보여주고 싶을 때 테이블을 사용합니다. 

---

## HTML: 테이블의 기본 구조

가장 기본적인 테이블 구조는 아래 네 가지 태그로 이루어집니다. 

- \`table\`: 전체 표를 감싸는 컨테이너
- \`tr\` (table row): 행(row)을 나타내는 태그
- \`td\` (table data): 일반 셀(데이터 셀)
- \`th\` (table header): 헤더 셀(열 제목/행 제목)

\`\`\`html
<table>
  <tr>
    <th>이름</th>
    <th>직무</th>
  </tr>
  <tr>
    <td>홍길동</td>
    <td>백엔드 개발자</td>
  </tr>
  <tr>
    <td>김코딩</td>
    <td>프론트엔드 개발자</td>
  </tr>
</table>
\`\`\`

\`th\`는 기본적으로 **굵게 + 중앙 정렬**이 적용되고, 스크린 리더에서도 “헤더”로 인식되어 어떤 열/행과 연결된 데이터인지 이해하기 쉽습니다. 


## HTML: 테이블 구조 나누기

표가 복잡해지는 경우, 머리글·본문·요약 부분을 나누어 두는게 좋습니다. 이때 사용하는 태그가 \`thead\`, \`tbody\`, \`tfoot\` 입니다. 

- \`thead\`: 헤더 영역(컬럼 제목 등)
- \`tbody\`: 실제 데이터가 들어가는 본문 영역
- \`tfoot\`: 합계, 요약 정보가 들어가는 푸터 영역

\`\`\`html
<table>
  <thead>
    <tr>
      <th>상품명</th>
      <th>수량</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>마우스</td>
      <td>1</td>
      <td>30,000원</td>
    </tr>
    <tr>
      <td>키보드</td>
      <td>1</td>
      <td>70,000원</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">합계</td>
      <td>100,000원</td>
    </tr>
  </tfoot>
</table>
\`\`\`

위와 같이 나누면 \`CSS\`에서 각 부분을 따로 스타일링하기도 쉽고, \`DOM\`을 다룰 때도 구조가 명확해집니다. 


## HTML: 테이블 셀 병합

**하나의 셀을 여러 칸에 걸쳐 합치고 싶은 경우**가 있습니다. 
이때 쓰는 속성이 \`rowspan\`과 \`colspan\` 입니다. 

- \`rowspan\`: 세로 방향(행)으로 몇 줄을 합칠지
- \`colspan\`: 가로 방향(열)으로 몇 칸을 합칠지

\`\`\`html
<table>
  <tr>
    <th rowspan="2">날짜</th>
    <th colspan="2">근무 시간</th>
  </tr>
  <tr>
    <th>입근</th>
    <th>퇴근</th>
  </tr>
  <tr>
    <td>2월 11일</td>
    <td>09:00</td>
    <td>18:00</td>
  </tr>
</table>
\`\`\`

셀 병합을 사용할 때는 행/열 개수가 맞지 않아서 레이아웃이 깨지지 않도록 구조를 잘 맞춰 주는 것이 중요합니다. 


## HTML: \`<table>\`를 남용하면 안 되는 경우

**레이아웃용으로 \`<table>\`을 쓰는 것** 에 주의해야하며,
그리드나 카드 레이아웃은 \`CSS Flexbox\`, \`Grid\`로 해결하고 표 태그는 진짜 "표 데이터"일 때만 쓰는 것이 좋습니다. 

- 레이아웃 → \`div\` + \`CSS(Flex, Grid)\`
- 진짜 표 데이터 → \`table\`, \`tr\`, \`th\`, \`td\`

레이아웃과 표를 만들 떄 위와 같이 역할을 나누면 HTML 구조가 훨씬 더 간결해지고, 유지보수도 쉬워집니다. 
`,rv=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),sv=`---
summary: HTML 의 텍스트 관련 태그(Textual Tag) 에 대해서 알아보자.
tags:
  - HTML 텍스트 관련 태그(Textual Tag)
references: 
created_date: 2026-02-09T19:09:52.000Z
last_modified_date: 2026-02-09T20:38:52.000Z
---

> 이 글에서는 HTML(HyperText Markup Language) 에서 텍스트 관련 태그(h1~h6, title, p, ...) 가 무엇이고 어떤 것들이 있는지 정리했습니다.

# HTML: 텍스트 관련 태그

HTML 은 글자를 보여주는 태그들이 여러 개 존재합니다.
텍스트를 굵게, 기울임, 줄바꿈, 목록처럼 표현 방식과 역할을 적절히 조합하면, 읽기 좋은 문서 구조를 만들 수 있습니다.


## HTML: 블록/인라인 태그란 ?

텍스트 관련 태그는 크게 블록 태그와 인라인 태그로 나눌 수 있습니다.
이 두 태그의 가장 큰 차이는 해당 태그를 사용했을 때 “줄바꿈이 생기느냐” 입니다.

- **블록 태그**: 줄바꿈이 생긴다.
  
  > 요소 하나가 한 줄 전체를 차지하고, 보통 앞뒤에 여백이 생기면서 다른 블록과 구분됩니다.

- **인라인 태그**: 줄바꿈이 생기지 않고, 줄 안에 공간 일부만 차지한다.
  
  > 문장 흐름 안에서 필요한 텍스트 부분만 감싸고, 좌우로 다른 텍스트와 자연스럽게 이어집니다.

다만 블록 · 인라인 태그로의 구분은 해당 태그를 사용했을 때의 “줄바꿈 여부”를 기준으로 나눈 것일 뿐이고, 진짜 중요한 것은 각 태그가 가진 의미입니다.
태그마다 어떠한 의미를 가지는지를 기억해 두고, 나중에 사용할 때 텍스트의 의미에 따라 알맞은 태그를 골라 쓰면 됩니다.

---

## HTML: 블록(Block) 태그

블록 태그는 화면에서 하나의 “덩어리”로 취급되는 태그입니다.
덩어리로 취급되기 때문에 항상 새로운 줄에서 시작하고, 요소 하나가 한 줄 전체를 차지해서 줄바꿈이 일어납니다. 

---

### 제목: \`<h1></h1> ~ <h6></h6>\`

문서의 제목과 소제목을 나타내는 태그로서, 문서 구조를 계층적으로 표현할 때 사용합니다.
\`<h1>\` 에서, \`<h6>\` 로 갈수록 페이지/문서 에서 중요도가 낮은 제목임을 의미합니다.

일반적으로 페이지 하나에 대표 주제를 나타내는 \`<h1>\` 을 한 번만 사용하고, 섹션 제목은 \`<h2>\`, 그 하위는 \`<h3>\` 처럼 숫자를 순서대로 내려가며 사용합니다.

---

### 문단: \`<p></p>\`

일반적인 문단 텍스트를 나타내며, 하나의 \`<p>\` 가 하나의 단락이 되고, 자동으로 위아래 여백이 들어가서 문단 간 구분이 생깁니다.
만약 같은 문단(\`<p>\`) 안에서 줄만 바꾸고 싶을 때는 \`<br>\` 태그를 사용하고, 내용상 다른 문단이라면 새로운 \`<p>\` 태그를 사용하는 것이 좋습니다.


---

### 줄바꿈: \`<br/>\`

문단 안에서 강제로 줄바꿈을 할 때 사용하는 태그입니다. 
\`<p>\` 안에서 문장 흐름은 유지하되 줄만 바꾸고 싶을 때 \`<br>\` 을 넣어 줍니다. 

---

### 수평선: \`<hr/>\`

수평선을 그려서 앞뒤 내용을 시각적으로 나눌 때 사용합니다.

---

### 문단 단위 인용: \`<blockquote></blockquote>\`

문단 단위의 긴 인용문을 나타내며 보통 좌우 여백이 생기기 때문에 본문과 구분되어 보입니다. 
기사나 블로그에서 인용 블록을 만들 때 자주 사용합니다. 

---

### 리스트 목록: \`<ul>\`, \`<ol>\`, \`<li>\`

목록을 구성하는 태그입니다. 
\`<ul>\` 은 순서 없는 목록(불릿), \`<ol>\` 은 순서 있는 목록(번호), \`<li>\` 는 각각의 목록 항목을 의미합니다. 

---

### 의미 목록: \`<dl>\`, \`<dt>\`, \`<dd>\`

\`<dl>\`, \`<dt>\`, \`<dd>\`는 “용어 : 설명” 구조(key: value)를 의미로 표현하는 태그입니다.
\`<dl>\` 이 전체 목록, \`<dt>\` 가 용어, \`<dd>\` 가 설명 역할을 하며, FAQ 나 용어 사전 같은 형태를 만들 때 유용합니다. 

---


## HTML: 인라인(Inline) 태그

인라인 태그는 “텍스트 줄 안에서” 일부만 차지하는 요소들입니다. 
자체로 줄바꿈을 만들지 않고, 앞뒤 텍스트와 한 줄 안에서 자연스럽게 이어지는 것이 특징입니다. 

---

### \`<a></a>\`

\`<a>\` 는 닻(anchor) 의 약자로, 다른 페이지·파일·이메일·같은 페이지 안의 위치 등 어떤 URL로든 이동하는 하이퍼링크를 만드는 태그입니다.


#### \`<a>\` 속성

- \`href\`: 목적지가 되는 URL 로 \`href\` 가 없으면 \`target\`, \`download\`, \`rel\`, \`hreflang\`, \`type\` 등을 사용할 수 없다. 
- \`target\`: 링크를 클릭했을 때 어디에서 열지(탭·창·프레임)를 지정한다.
  - \`_self\`: 기본 값으로 현재 탭 또는 프레임에서 열린다.
  - \`_blank\`: 새 탭, 새 창에서 열린다.
  - \`_parent\`: 현재 문서가 프레임/iframe 안에 있을 때, 부모 프레임에서 열린다.
  - \`_top\`: 여러 단계로 중첩된 프레임 안이라도 최상위 창 전체에서 열리게 한다.
- \`rel\`: 현재 문서와 링크 대상 간의 **관계**를 나타내는 속성이다.
- \`download\`: 클릭 시 이동 대신 파일을 다운로드하고, 값이 있으면 그 값으로, 없으면 원래 파일 이름으로 저장한다. 
- \`hreflang\`: 링크된 문서의 **언어(및 지역)** 코드(\`ko\`, \`en\`, \`en-US\`, \`ja\`, \`fr\`)를 명시한다.  
- \`type\`: 링크 대상 리소스의 **MIME 타입**(\`text/html\`, \`application/pdf\`)을 나타낸다.

---

### 굵게: \`<strong></strong>\`, \`<b></b>\`

- \`<strong></strong>\`
  
  의미상 중요한 텍스트를 나타내며 굵게 보이게합니다. 스크린 리더 등에서 강조해서 읽기 때문에 “진짜 중요한 부분”을 표시할 때 사용합니다.

- \`<b></b>\`

  텍스트를 단순히 굵게 보이게 합니다. 의미적인 강조보다 시각적으로 눈에 띄게 하고 싶을 때 사용합니다.

---

### 기울이기: \`<em></em>\`, \`<i></i>\`

- \`<em></em>\`
  
  텍스트를 기울여 강조하는 태그로, 문장 안에서 특정 단어나 구절을 강조할 때 사용합니다. 

- \`<i></i>\`

  텍스트를 기울이는 태그로 외래어, 생각, 용어, 다른 톤의 텍스트 등을 구분할 때 사용합니다.

  
---

### 하이라이트: \`<mark></mark>\`  

형광펜으로 칠한 것처럼 배경에 하이라이트를 줄 때 사용하며, 검색 결과에서 매칭된 텍스트를 표시하거나 본문 중 중요한 부분을 눈에 띄게 만들고 싶을 때 사용합니다. 

---

### 작게: \`<small></small>\`  

텍스트를 작은 글씨로 표현하여 저작권, 부연 설명, 각주임을 나타냅니다. 

---

### 위/아래 첨자: \`<sup></sup>\`, \`<sub></sub>\`  

위첨자(superscript)와 아래첨자(subscript)와 를 나타내며, 수학식 지수, 화학식, 단위 등을 표현할 때 자주 쓰입니다. 

---

### 취소선: \`<del></del>\`, \`<s></s>\`  

- \`<del></del>\`

  텍스트에 취소선을 표한하여 문서에서 삭제된 내용을 의미적으로 표현합니다.

- \`<s></s>\`

  텍스트에 취소선을 표현하여 더 이상 유효하지 않은 텍스트를 시각적으로만 표시할 때 사용합니다. 

---

### 인라인 래퍼: \`<span></span>\`

텍스트 줄 안에서 일부만 묶어 스타일이나 스크립트를 적용할 때 사용하며 자체적인 의미는 없습니다.


---
 `,ov=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),uv='---\nsummary: HTML 의 폼(Form)에 대해서 알아보자.\ntags:\n  - HTML 폼\n  - HTML Form\nreferences: \ncreated_date: 2026-02-10T21:09:52.000Z\nlast_modified_date: 2026-02-10T22:38:52.000Z\n---\n\n> 이 글에서는 HTML(HyperText Markup Language) 의 폼(`form`)이 무엇인지, 인풋(`input`)과 어떻게 함께 동작해서 서버로 데이터를 전송하는지 정리했습니다.\n\n---\n\n# HTML: 폼(`Form`)\n\nHTML 폼(`form`) 태그는 웹 페이지에서 사용자가 `input`을 통해 입력한 입력 값을 어플리케이션 서버로 전송하는 역할을 수행하며,\n아래와 같이 작성할 수 있습니다.\n\n```html\n<form>\n  <!-- 여기 안에 input, textarea, select 등이 들어갑니다 -->\n</form>\n```\n\n## 폼(`Form`): 여러가지 속성\n\n- **`action`**: 입력 값을 전송할 URL 을 지정할 때 사용하는 속성 \n  ```html\n  <form action="http://localhost:8080/">\n    <!-- input, textarea, select ... -->\n  </form>\n  ```\n- **`method`**: `get`, `post` 등 HTTP 메서드를 지정할 떄 사용하는 속성\n  ```html\n  <form method="post">\n    <!-- input, textarea, select ... -->\n  </form>\n  ```\n- **`enctype`**: 데이터 인코딩 방식 지정할 때 사용하는 속성\n\n  - **`application/x-www-form-urlencoded`**: 기본 값으로 `name=value&name2=value2` 형태로 인코딩되어 전송된다.\n    ```html\n    <form method="post" enctype="application/x-www-form-urlencoded">\n      <!-- input, textarea, select ... -->\n    </form>\n    ```\n\n\n  - **`multipart/form-data`**: 파일 업로드 시 사용\n    ```html\n    <form method="post" enctype="multipart/form-data">\n      <!-- input, textarea, select ... -->\n    </form>\n    ```\n\n---\n\n## 폼(`Form`): 전송이 일어나는 순간\n\n`input`에 값만 채워 두면 아무 일도 일어나지 않고, "제출 동작"이 있어야 서버로 요청을 전송할 수 있습니다. \n폼 안의 `type="submit"` 버튼을 클릭할 때 브라우저가 `action`·`method`·`enctype` 정보를 읽고 서버로 요청을 보냅니다. \n\n- `form` 데이터 전송 예시\n  ```html\n  <form action="http://localhost:8080/" method="post">\n    <input type="text" name="username" />\n    <button type="submit">전송</button>\n  </form>\n  ```\n\n---\n\n### 버튼(`button`): 데이터 전송하기\n\n- **`submit`**: 폼을 전송하는 버튼, `type`을 안 쓰면 기본이 `submit`이라 클릭 시 폼이 제출됩니다.\n  ```html\n  <button type="submit">전송</button>\n  ```\n  \n- **`reset`**: 폼 안 모든 입력값을 처음 상태로 되돌릴 뿐 서버 요청은 보내지 않습니다.\n  ```html\n  <button type="reset">초기화</button>\n  ```\n  \n- **`button`**: 아무 기본 동작이 없는 버튼, 자바스크립트로 클릭 이벤트를 함께 사용해야합니다.\n  ```html\n  <button type="button">그냥 버튼</button>\n  ```\n\n---\n\n## 폼(`Form`): 검증과 제한\n\n> 제출 시점이냐, 입력 시점이냐에 따라 검증과 제한으로 나뉩니다.\n\n- **검증(`Validation`)**: 제출 직전에 값이 규칙에 맞는지 검사해서, 틀리면 브라우저가 경고를 띄우고 제출을 막습니다. \n- **제한(`Limitation`)**: 잘못된 값이 애초에 입력되지 않도록, 입력 가능한 값의 범위와 방식 자체를 제한합니다.\n\n\n---\n\n### 검증과 제한: 예시를 통한 이해\n\n- **`type="number"`, `type="email"`**: 해당 타입 형식인지 검사해 형식이 맞지않으면 제출 시 에러 발생\n- **`required`**: 값을 비워 두면 제출 안 됨\n- **`max`, `min`**: 숫자의 최대·최소 범위를 제한하고, 범위를 벗어나면 제출 시 에러 발생\n- **`maxlength`**, `minlength`: 글자 수를 제한하고, 너무 짧거나 길면 제출 시 에러 발생\n- **`readonly`**: 값은 보이지만 수정은 안 됨\n- **`disabled`:** 완전히 비활성화, 폼 전송 시 이 필드는 아예 전송 안 됨\n- **`step`**: 0, 10, 20처럼 일정 간격 값만 선택·입력하도록 제한\n\n\n\n',cv=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),dv=`---
tags: 
references:
  - https://react.dev/reference/react/StrictMode
created_date: 2025-08-03 18:16:47
last_modified_date: 2025-08-03 18:17:02
---

# React : StrictMode 란

\`<StrictMode>\` 는 리액트 애플리케이션의 잠재적인 문제를 조기에 발견할 수 있도록  도와주는 도구로 \`<StrictMode>\` 는 실제로 UI에 아무런 영향을 주지 않으며, 오직 개발 환경에서만 동작한다.

- 사용 예시
	\`\`\`javascript
	import { StrictMode } from 'react';  
	import { createRoot } from 'react-dom/client';  
	
	const root = createRoot(document.getElementById('root'));  
	root.render(  
		<StrictMode>  
			<App />  
		</StrictMode>  
	);
	\`\`\`


## StrictMode 동작 방식

React의 StrictMode를 사용하면 개발 과정에서 아래와 같은 방식으로 동작하여, 잠재적인 버그를 조기에 발견할 수 있도록 추가적인 검사와 경고를 제공한다.

- **컴포넌트가 한 번 더 렌더링됨:**  
    컴포넌트 함수가 두 번 실행되어, 순수하지 않은 렌더링(부작용이 있는 코드)을 쉽게 찾아낼 수 있다.
- **Effect(예: useEffect)가 한 번 더 실행됨:**  
    Effect의 setup과 cleanup이 한 번 더 반복되어, cleanup이 누락된 경우 메모리 누수나 중복 동작을 조기에 드러낸다.
    
- **ref 콜백이 한 번 더 실행됨:**  
    ref 콜백도 setup → cleanup → setup 순서로 추가 실행되어, 정리 코드가 빠진 부분을 확인할 수 있다.
    
- **Deprecated API 사용 여부 검사:**  
    사용 중인 API가 폐기된 것이라면 경고를 통해 알려준다.
    
이러한 동작은 실제 서비스에는 영향을 주지 않고, 오직 개발 환경에서만 활성화되며 그 결과, 코드의 품질을 높이고 나중에 발생할 수 있는 문제를 미리 예방할 수 있게된다.
`,fv=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),pv=`---
summary: 2026년 이직러의 신년 프로젝트, 프론트엔드 공부 제대로 시작하기
tags:
  - 웹 프론트엔드 시작하기
references: 
created_date: 2026-02-09T23:09:52.000Z
last_modified_date: 2026-02-09T20:38:52.000Z
---

> 2026 조금 늦은 신년 프로젝트, 2월부터 "프론트엔드 로드맵"을 따라 프론트엔드 공부 시작하겠습니다.

---

# 어쩌다가 프론트엔드

‘웹 하나 만들어볼까?’라는 생각이 들 때마다, 
항상 ‘웹 페이지 디자인은?’, ‘디자인은 정했는데 이걸 코드로 어떻게 구현하지?’, ‘지금 해야 하나?’라는 고민만 하다가 미루고 안 하곤 했습니다. 
그러다가 최근에야 조금 여유가 생기면서, “지금 안 하면 정말 평생 안 하겠다”는 확신 같은 게 들었습니다.

## AI 사용하면 되는 거 아닌가?

막상 AI를 사용해서 무언가를 만들더라도, 프로젝트 볼륨이 커질수록 AI를 어떻게 써야 할지 더 막막해지고 손도 더 못 대겠더라구요. 
AI만 믿고 있으면, 나중에 조금 더 큰 걸 만들고 싶을 때 오히려 발목을 잡겠다는 생각이 들었습니다. 
그래서 우선은 프론트엔드의 기초를 직접 이해하고 다루는 쪽을 선택했고, 그 첫걸음으로 CSS를 제대로 공부해보려 합니다.

---

# 프론트엔드 로드맵 따라가기

막상 프론트엔드를 공부해보려고 하니, 정식으로 공부해본 적도 없고 알고 있는 것도 거의 없다 보니 어디서부터 어떻게 시작해야 할지 잘 모르겠네요.
그래서 로드맵을 찾아보고 이를 참고해서 2026년에는 CSS, HTML, React 등 웹 뷰 단을 만드는 데 필요한 프론트엔드 기술들을 하나의 큰 프로젝트처럼 차근차근 공부해보려 합니다.
참고로 저는 [프론트엔드 로드맵](https://roadmap.sh/frontend)을 기준으로 삼아보려고 합니다.

“한 가지를 완벽히 끝내겠다”보다는 “처음 개발 공부할 때처럼, 일단 하나씩 만들어보면서 해보자”라는 마음으로 해보려 합니다.
이 과정에서의 배움과 삽질 기록들을 2026년 한 해 동안 이 블로그에 차곡차곡 정리하겠습니다.

---`,mv=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),hv=`---
summary: M1 Mac 환경에 Homebrew 설치해보기
tags: 
references: 
created_date: 2026-01-08T11:03:06.000Z
last_modified_date: 2026-01-08T11:03:06.000Z
---

# Homebrew 설치하기

> M1 Mac 환경에서 Homebrew를 설치해봅니다.

## Homebrew 설치 명령어 입력

[Homebrew 공식 사이트](https://brew.sh/) 에 들어간 후, 맨 위에 보이는 명령어를 복사하고 터미널에 붙여넣기합니다.

- \`Homebrew\` 설치 명령어 복사/붙여넣기
\`\`\`shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
\`\`\`

만약 \`Checking for 'sudo' access (which may request your password)\` 와 같은 메시지가 뜬다면 맥북 비밀번호를 입력해줍시다.

위 명령어를 입력한 후, 아래와 같이 \`echo\` 명령어를 실행하여 Homebrew 환경 변수를 설정합니다.

- 설치 후에 나온 \`echo\` 명령어 복사/붙여넣기
    \`\`\`shell
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/사용자이름/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
    \`\`\`


## 설치 확인하기

- Homebrew 버전 확인
    \`\`\`shell
    $ brew --version
    Homebrew 5.0.9
    \`\`\`

위와같이 명령어를 입력했을 때, 설치한 Homebrew 의 버전이 출력된다면 정상적으로 설치된 것입니다.



`,gv=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),_v=`---
summary: M1 Mac 에서 NVM 설치해보기
tags:
  - NVM
  - MacOS
references: 
created_date: 2025-08-13T16:35:09.000Z
last_modified_date: 2025-08-13T16:36:13.000Z
---

# NVM 설치 방법

## Homebrew로 NVM 설치하기

> Homebrew가 아직 설치되어 있지 않다면, 우선적으로 설치해야함.

- Homebrew를 이용한 NVM 설치 명령어
    
    \`\`\`shell
    brew install nvm
    nvm -v
    \`\`\`
    
    만약 \`nvm\` 명령어가 인식되지 않는다면, 아래 환경 변수 설정 단계를 따름.
    

## MAC-OS에서 NVM 환경 변수 설정

- MAC-OS에서 NVM 환경 변수 추가 명령어
    
    \`\`\`shell
    mkdir ~/.nvm  # .nvm 폴더 생성
    
    vi ~/.zshrc  # 환경 변수 설정 파일 열기
    
    # .zshrc 파일에 아래 내용 추가
    export PATH="$PATH:$HOME/.rvm/bin"
    export PATH="$PATH:/opt/homebrew/bin"
    # NVM 설정
    export NVM_DIR="$HOME/.nvm"
      [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # nvm 로드
      [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # nvm bash_completion 로드
    \`\`\`
    

## NVM 버전 확인

- NVM 버전 확인 명령어
    
    \`\`\`shell
    $ nvm -v
    0.40.1
    \`\`\`

`,bv=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),yv=`---
summary: JDK 설치해보기
tags: 
references: 
created_date: 2025-07-26T19:50:06.000Z
last_modified_date: 2025-07-26T19:50:06.000Z
---

- 패키지 업데이트
	\`\`\`shell
	sudo apt update
	\`\`\`

- OpenJDK 11 설치
	\`\`\`shell
	sudo apt install -y openjdk-11-jdk
	\`\`\`

- JDK 정상 설치 여부 확인
	\`\`\`shell
	java -version
	\`\`\``,vv=Object.freeze(Object.defineProperty({__proto__:null,default:yv},Symbol.toStringTag,{value:"Module"})),Sv=`---
summary: M1 Mac, 레빗엠큐 설치해보기
tags:
  - RabbitMQ
references: 
created_date: 2025-08-23T10:12:10.000Z
last_modified_date: 2025-08-23T10:12:42.000Z
---
# RabbitMQ 설치 - MacOS


- RabbitMQ 설치
	\`\`\`shell
	brew install rabbitmq
	\`\`\`


- RabbitMQ 시작 및 종료
	\`\`\`shell
	brew services start rabbitmq // 시작
	brew services stop rabbitmq  // 종료
	\`\`\`


- RabbitMQ 상태 확인
	\`\`\`shell
	brew services list // brew service 전체 상태 확인
	brew services list | awk '/rabbitmq/ {print $2}' // rabbitmq 만 확인
	\`\`\`

## RabbitMQ 모니터링 페이지

RabbitMQ의 기본 포트는 5672이며, 모니터링 페이지는 15672 포트에서 동작하며, 기본적으로 다음과 같이 포트가 할당되어 있다.

- **AMQP** **기본** **포트****:** 5672  
    클라이언트 애플리케이션이 메시지를 송수신할 때 사용하는 표준 포트
    >애플리케이션이 AMQP 프로토콜로 RabbitMQ에 연결할 때 사용하는 포트
- **관리****(****모니터링****)** **페이지** **포트****:** 15672  
    RabbitMQ의 웹 기반 관리 콘솔(Management UI)은 15672 포트에서 동작함.
    브라우저에서 ‎\`http://localhost:15672\`로 접속하면 RabbitMQ의 상태, 큐, 익스체인지, 연결 현황 등을 모니터링할 수 있습니다.


**기본** **계정** **정보** 

RabbitMQ를 처음 설치하면 기본적으로 아래 계정이 생성되어 있다.

- **ID:** guest
- **PWD:** guest

이 계정으로 관리 페이지에 로그인할 수 있으며, 보안상 운영 환경에서는 반드시 계정 정보를 변경하거나, guest 계정의 접근을 제한하는 것이 좋다.


### 계정 생성

\`Admin\` -> \`Users\` -> \`Add a User\`


### Virtual Host 생성

\`Admin\` -> \`Virtual Hosts\` -> \`Add a new virtual host\`

`,Tv=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),xv=`---
summary: 몽고 DB 설치해보기
tags:
  - Ubuntu
  - MongoDB
references: 
created_date: 2025-07-26 19:10:26
last_modified_date: 2025-07-26 19:10:26
---

- 필수 패키지 설치
	\`\`\`shell
	sudo apt-get install gnupg curl
	\`\`\`

- **MongoDB GPG** **키** **추가**
	\`\`\`shell
	curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \\
	  sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \\
	  --dearmor
	\`\`\`

- **MongoDB 저장소** 추가
	\`\`\`shell
	%% Ubuntu 20.04 %%
	echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
	\`\`\`


- 패키지 업데이트 및 MongoDB 설치
	\`\`\`shell
	sudo apt-get update
	sudo apt-get install -y mongodb-org
	\`\`\`

- MongoDB 서비스 시작 및 부팅 시 자동 실행
	\`\`\`shell
	sudo systemctl start mongod
	sudo systemctl enable mongod
	\`\`\`

- MongoDB 상태 확인
	\`\`\`shell
	sudo systemctl status mongod
	\`\`\``,Av=Object.freeze(Object.defineProperty({__proto__:null,default:xv},Symbol.toStringTag,{value:"Module"})),Cv=`---
summary: 깃허브 비공개 레포지토리 잔디 보이게 설정하기
tags: 
references: 
created_date: 2026-01-11T11:03:06.000Z
last_modified_date: 2026-01-11T11:03:06.000Z
---

> **본 글에서는 깃허브(Github) 프로필에 비공개(Private) 레포지토리의 커밋 활동(잔디)을 표시하는 방법을 정리합니다.**

---

# 깃허브 비공개 레포지토리 잔디 심기

열심히 깃허브 잔디를 심기위해서 개인 프로젝트에 코드를 작성하고 커밋을 했으나 깃허브 프로필에 잔디가 심어지지 않는 경우가 있습니다. 
이는 깃허브에서 **"공개(Public) 레포지토리" 활동만 기여도 그래프에 반영**하기 때문입니다.

이럴 떄 *'나는 열심히 했는데 왜 잔디가 안보이지'*  하고 억울하기도 한데요. 이렇게 비공개 레포지토리에 커밋 내역도 잔디에 반영 할 수 있는 방법이 있습니다.

---

## 설정 방법

1. **\`Settings\`** -> **\`Profile\`** 접속
2. **\`Contribution Settings\`** 클릭
    ![깃허브_잔디.png](깃허브%20비공개%20레포지토리%20잔디.png)
3. **\`Private Contributions\`** 클릭
    ![깃허브_기여도_설정_변경.png](깃허브%20비공개%20레포지토리%20잔디%20기여%20설정%20변경.png)

---

## 적용 확인

위 설정을 마치면 프로필의 잔디 그래프(Contribution Graph)가 바로 갱신되며, 그동안 비공개 레포지토리에서 작업했던 커밋들이 잔디로 나타납니다.
이제 비공개 레포지토리를 수정하더라도 잔디가 심어지니까 커밋 후에 좀 더 뿌듯하네요

- **참고 사항**
    - 해당 설정을 켜더라도 **소스 코드나 레포지토리 이름**은 공개되지 않습니다.
    - 방문자에게는 \`Created 3 commits in 2 private repositories\`와 같이 익명화된 활동 내역만 표시됩니다.
`,Ev=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),Rv=`---
summary: M1 Mac에 다트/플러터 설치해보기
tags: 
references: 
created_date: 2026-01-08T11:03:06.000Z
last_modified_date: 2026-01-08T11:03:06.000Z
---


> **본 글에서는 M1 Mac 환경에 Homebrew를 사용하여 플러터를 설치해봅니다.**
> **Homebrew 설치 방법은 [Homebrew 설치하기](https://bak-libra26.co.kr/posts/%EA%B0%9C%EB%B0%9C/%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95/Homebrew_%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)를 참고해주세요.**


---

# 플러터 설치하기

- **플러터 설치 명령어**
    \`\`\`shell
    brew install flutter
    \`\`\`

- **플러터 버전 확인**
    \`\`\`shell
    flutter --version
    \`\`\`


- **플러터 개발 환경 진단하기**
    \`\`\`shell
    $ flutter doctor
    [✓] Flutter (Channel stable, 3.38.5, on macOS 26.2 darwin-arm64, locale ko-KR)
    [✓] Android toolchain - develop for Android devices
    [✓] Xcode - develop for iOS and macOS  
    [✓] Chrome - develop for the web
    \`\`\`

    flutter doctor에서 **✓ (체크 표시)**는 해당 항목이 정상임을 의미합니다. Android toolchain, Xcode, Chrome이 모두 ✓라면 해당 플랫폼 개발이 가능합니다

- **상태 표시 해석**
    - ✓: 설치 및 설정 완료 (문제 없음)
    - ✗ (X): 필수 구성 요소 누락 - 즉시 수정 필요
    - ! (경고): 경미한 문제 - 개발 가능하나 권장 해결

\`flutter doctor\` 명령어를 실행했을 때, **✓**가 아닌 경우, 아래와 같이 해결할 수 있습니다.

---

## 다트 개발 환경 설정

### 다트 경로 오류

\`flutter doctor\` 실행 시 다트 경로 경고가 나타날 수 있습니다. 이는 Homebrew로 별도 설치된 Dart SDK가 Flutter 내장 Dart와 충돌하기 때문인데 이는 아래의 명령어를 실행하여 해결할 수 있습니다.

- **Homebrew로 별도 설치된 Dart SDK 제거 명령어**
    \`\`\`shell
    brew uninstall dart
    brew cleanup
    \`\`\`

---

## 안드로이드 개발 환경 설정

### Unable to locate Android SDK.

> 안드로이드 SDK 경로를 찾을 수 없습니다.


- **해결 방법**
    1. **Android Studio 설치**
        \`\`\`shell
        brew install --cask android-studio
        \`\`\`
    2. **Android Studio 실행**
        1. **Preferences(Cmd + ,)** > **System Settigns** > **Android SDK** > **SDK Tools** 
        2. **Android SDK Command-line Tools (latest)** 체크
        3. **Apply**
    3. **Android SDK 라이선스에 동의하기**
        \`\`\`shell
        flutter doctor --android-licenses
        \`\`\`
    
---

## IOS 개발 환경 설정

### Xcode installation is incomplete;

> Xcode가 설치되어 있지 않습니다.

\`\`\`shell
[✗] Xcode - develop for iOS and macOS
    ✗ Xcode installation is incomplete; a full installation is necessary for iOS and macOS development.
        Download at: https://developer.apple.com/xcode/
        Or install Xcode via the App Store.
        Once installed, run:
            sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
            sudo xcodebuild -runFirstLaunch
\`\`\`\`




- **해결 방법**
    1. 앱스토어에서 \`Xcode\` 설치
    2. 명령어 실행
        \`\`\`shell
        sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
        sudo xcodebuild -runFirstLaunch
        \`\`\`

---

### CocoaPods not installed.

> CocoaPods가 설치되어 있지 않습니다.


- **해결 방법**
1. CocoaPods 설치
    \`\`\`shell
    brew install cocoapods
    \`\`\`

---

### Unable to get list of installed Simulator runtimes.

- **해결 방법**
    1. IOS 시뮬레이터 설치
        \`\`\`shell
        xcodebuild -downloadPlatform iOS
        \`\`\``,Mv=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),Ov=`---
summary: 그라파나 설치해보자
created_date: 2025-12-02 01:19:28
last-modified-date: 2025-12-02 02:42:17
---
# Grafana 설치

---

## 1. Grafana 저장소 추가함

Grafana 패키지를 설치하기 위해 공식 YUM 저장소를 등록.

1. 리포지토리 설정 파일 생성함.
	- 파일 경로: \`/etc/yum.repos.d/grafana.repo\`
	- 내용 예시는 다음과 같음.
		\`\`\`shell  
		sudo tee /etc/yum.repos.d/grafana.repo << EOF  
		[grafana] name=grafana  
		baseurl=https://rpm.grafana.com  
		repo_gpgcheck=1  
		enabled=1  
		gpgcheck=1  
		gpgkey=https://rpm.grafana.com/gpg.key  
		EOF  
		\`\`\`
2. 위 설정을 통해 dnf가 Grafana 패키지를 공식 저장소에서 가져올 수 있도록 구성했음.
    

---

## 2. Grafana 패키지 설치함

1. 패키지 설치 명령 실행함.
	- 실행 명령:
	    - \`sudo dnf install grafana -y\`

2. dnf가 의존성 패키지와 함께 Grafana를 시스템에 설치함.
3. 설치 완료 후 \`/usr/sbin/grafana-server\` 바이너리가 배포되고, 서비스 유닛 파일이 함께 등록됨.​
    

---

## 3. Grafana 서비스 활성화 및 기동함

1. 부팅 시 자동 실행 설정함.
	- 실행 명령:
	    - \`sudo systemctl enable grafana-server\`
	- 시스템 부팅 시 grafana-server 서비스가 자동으로 시작되도록 설정됨.​

2. 즉시 서비스 기동함.
	- 실행 명령:
	    - \`sudo systemctl start grafana-server\`
	- Grafana HTTP 서버가 기본 포트 3000에서 대기 상태로 진입함.​
3. 중복된 start 명령은 하나만 있어도 충분하므로, 실제 문서에서는 한 번만 사용하는 것을 권장함.
    

---

## 4. 웹 UI 접속함

1. 서비스 기동 후 브라우저에서 아래 주소로 접속함.
	- URL: \`http://\${GRAFANA_IP}:3000\`
2. 기본 로그인 계정은 guest / guest 이며, 최초 로그인 시 비밀번호 변경을 요구함.​
3. 외부에서 접속할 경우, 방화벽 또는 보안 그룹에서 TCP 3000 포트가 허용되어 있는지 확인해야 함.`,wv=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),Dv=`---
summary: 넥서스 레퍼지토리 유형과 스프링 부트에서의 연동 방법
tags:
  - Nexus
  - springboot
references: 
created_date: 2025-08-13T16:20:22.000Z
last_modified_date: 2025-08-13T16:20:22.000Z
---
# Nexus Repository 유형 및 Spring Boot 연동 가이드

## Repository

- **Repository Type**
    1. **Proxy** : 외부망 연동에 사용
    2. **Hosted** : 내부망 연동에 사용
    3. **Virtual** : 서로 다른 타입간 연결에 사용
    4. **Group** : Repository 간 그룹화를 위해 사용
        
- **Repository Version Policy**
    
    1. **Release**
        - 안정적으로 배포 및 사용되는 프로젝트 버전
        - 버그 수정, 기능 개선 등 소규모 변경 포함
        - 배포 후 artifact는 변경 불가 (수정 시 버전 증가 필요)
            
    2. **Snapshot**
        - 개발 중인, 아직 안정화되지 않은 버전
        - 최신 개발 코드의 빌드로 수시 업데이트됨
        - 버전 하위에 uuid가 붙어 배포, 별도 버전 증가 불필요
            
    3. **Mixed**
        - Release/Snapshot 구분 없이 배포 가능, 단 버전 변경 필요
            

---

## Spring Boot와 Nexus 연동 방법

### 1. Maven Settings.xml 계정 정보 등록

- \`~/.m2/settings.xml\`
    
    \`\`\`xml
	<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
	     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	     xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
	                                                       http://maven.apache.org/xsd/settings-1.0.0.xsd">
	
	     <servers>
		<server>
		  <id>\${RepositoryName}</id>
		  <username>\${Id}</username>
		  <password>\${Password}</password>
		</server>
	  </servers>
	</settings>
    \`\`\`
    
    - 계정 정보를 작성 후, IntelliJ → Maven Settings → 사용자 설정 파일에 해당 경로 지정
        

### 2. pom.xml에 Repository 정보 등록

- \`\${SPRING_BOOT_PROJECTS}/pom.xml\`
\`\`\`xml
<repositories>
          <repository>
                    <id>\${Repository Id}</id>
                    <name>release</name>
                    <url>\${Repository URL}</url>
          </repository>
</repositories>
\`\`\`

### 3. pom.xml에 자동 배포 설정 추가

\`\`\`xml
<distributionManagement>
          <!-- release 버전 배포 저장소 -->
          <repository>
                    <id>[서버 ID (settings.xml과 매칭)]</id>
                    <url>[release 리포지터리 url]</url>
          </repository>

          <!-- snapshot 버전 배포 저장소 -->
          <snapshotRepository>
                    <id>[서버 ID]</id>
                    <url>[snapshot 리포지터리 url]</url>
          </snapshotRepository>
</distributionManagement>
\`\`\`
`,jv=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),kv=`---
summary: 넥서스를 설치해보자.
tags:
  - Nexus
  - Rocky_Linux
references: 
created_date: 2025-08-13 16:08:00
last_modified_date: 2025-08-13 16:09:52
---


# Nexus 설치

## JDK 및 Nexus 설치

- JDK 설치 (OpenJDK 11)
    \`\`\`bash
    sudo yum install java-11-openjdk
    \`\`\`
    
    _Nexus는 JDK 1.8 이상 필요._
    
- 최신 버전의 Nexus 설치

    \`\`\`bash
    wget https://download.sonatype.com/nexus/3/latest-unix.tar.gz
    \`\`\`
    
    _설치일 기준 최신 버전 사용._
    

## Nexus 설정

### Nexus 실행 계정

- \`vi nexus.rc\`
    
    \`\`\`bash
    run_as_user="[실행 사용자]" # 지정한 사용자로 실행
    \`\`\`
    

### Nexus 실행 포트

- \`vi \${NEXUS_HOME}/nexus-3.x.x-xx/etc/nexus-default.properties\`
    
    \`\`\`bash
    ## DO NOT EDIT - CUSTOMIZATIONS BELONG IN $data-dir/etc/nexus.properties
    ##
    # Jetty section
    application-port=40000 # Nexus 실행 포트
    application-host=0.0.0.0
    nexus-args=\${jetty.etc}/jetty.xml,\${jetty.etc}/jetty-http.xml,\${jetty.etc}/jetty-requestlog.xml
    nexus-context-path=/
    
    # Nexus section
    nexus-edition=nexus-pro-edition
    nexus-features=\\
     nexus-pro-feature
    ~
    \`\`\`
    

### Nexus 서비스 관리

- \`/etc/systemd/system/nexus.service\` 작성
    
    \`\`\`bash
    [Unit]
    Description=nexus service
    After=network.target
    
    [Service]
    Type=forking
    LimitNOFILE=65536
    ExecStart=/svc/nexus/nexus-3.x.x-xx/bin/nexus start
    ExecStop=/svc/nexus/nexus-3.x.x-xx/bin/nexus stop
    User=[실행 사용자]
    Restart=on-abort
    
    [Install]
    WantedBy=multi-user.target
    \`\`\`
    
- systemd 데몬 갱신 및 서비스 등록
    
    \`\`\`bash
    systemctl daemon-reload
    systemctl enable nexus.service
    systemctl start nexus.service
    \`\`\`
    

### Nexus 로그 확인

- 로그 위치 : \`\${NEXUS_HOME}/sonatype-work/nexus3/log/nexus.log\`
    

※ 서버 IP, 계정, 비밀번호 등 민감 정보는 반드시 비공개로 관리할 것. 기본 계정 및 비밀번호는 반드시 변경하고, 외부 접근 제어 설정 필수.`,Nv=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),Lv=`---
summary: 넥서스 도메인 적용해보기, Nginx를 이용한 리버스 프록시 구성
tags:
  - Nexus
  - Nginx
  - ReverseProxy
  - HTTPS
references: 
created_date: 2025-08-13T16:07:56.000Z
last_modified_date: 2025-08-13T16:07:56.000Z
id: e6bce62c-b94b-49f1-b46b-9d01b3fcde58
---



## 최신 버전 Maven 사용을 위한 Nexus 도메인 적용

- Maven에서 Nexus 도메인(\`nexus.example.com\` 등)으로 접근해야 최신 라이브러리 사용 가능

> Tips: 도메인 적용하면 의존성 파일 다운로드 안정적, 빌드 환경 일관성 확보

---

## Nginx로 도메인 네임 적용

- Nginx가 HTTPS 요청을 받아 Nexus가 실행 중인 포트로 안전하게 리버스 프록시함

### Nginx 설치

\`\`\`bash
yum install nginx -y
systemctl status nginx   # 상태 확인
systemctl start nginx    # 실행
systemctl stop nginx     # 중지
systemctl restart nginx  # 재시작
\`\`\`

- 로그: \`/var/log/nginx/access.log\`, \`/var/log/nginx/error.log\`
- 80 포트 접속으로 nginx 기본 페이지 확인
    

---

### Nginx 도메인/SSL 설정 (보안 적용)

- 설정파일: \`/etc/nginx/conf.d/default.conf\`
- 발급받은 SSL 인증서는 \`/etc/nginx/ssl\`에 저장
    
- \`/etc/nginx/conf.d/default.conf\`
	\`\`\`nginx
	server {  
		listen 443 ssl http2;  
		server_name nexus.example.com;ssl_certificate /etc/nginx/ssl/certificate.crt;
		
		ssl_certificate_key /etc/nginx/ssl/private.key;
		ssl_protocols TLSv1.2 TLSv1.3;
	
		location / {
		          proxy_pass http://localhost:40000;
		          proxy_set_header Host $host;
		          proxy_set_header X-Real-IP $remote_addr;
		          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		          proxy_set_header X-Forwarded-Proto $scheme;
		}
	}
	\`\`\``,Hv=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),Bv=`---
summary: 젠킨스 SSH Credentials 추가하기
tags:
  - 젠킨스
  - trouble_shooting
  - credentials
references: 
created_date: 2025-08-12T16:27:52.000Z
last_modified_date: 2025-08-13T16:02:25.000Z
---
# Credentials 추가


\`\`\`shell
jenkins.plugins.publish_over.BapPublisherException: Failed to connect and initialize SSH connection. Message: [Failed to connect session for config [\${config-name}]. Message [Auth fail for methods 'publickey,gssapi-keyex,gssapi-with-mic,password']]
\`\`\`

젠킨스에서 SSH Credentials로 배포 자동화 시도를 위해 서버의 \`Credential\` 추가 중 위의 에러 발생

## SSH 키 생성 및 등록

### RSA 방식

- 키 생성  
    \`ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa\`
    
- 공개키 등록  
    \`cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\`  
    \`chmod 600 ~/.ssh/authorized_keys\`
    
- 필요시 PEM 포맷 변환  
    \`ssh-keygen -p -m PEM -f ~/.ssh/id_rsa\`
    

### ECDSA 방식

- 키 생성  
    \`ssh-keygen -t ecdsa -b 521 -f ~/.ssh/id_ecdsa\`
    
- 공개키 등록  
    \`cat ~/.ssh/id_ecdsa.pub >> ~/.ssh/authorized_keys\`  
    \`chmod 600 ~/.ssh/authorized_keys\`
    

## 인증 실패 지속

- 키 정상 생성 및 등록 후에도 인증 실패 에러 계속 발생
- \`ssh -i\`로 직접 접속 시도해도 패스워드 인증으로 넘어감
- 서버의 \`~/.ssh/authorized_keys\` 파일 존재 여부 확인  
    없으면 \`touch ~/.ssh/authorized_keys\`로 생성
- 공개키(\`id_rsa.pub\` 또는 \`id_ecdsa.pub\`)를 \`authorized_keys\`에 추가
- 퍼미션 문제 없는지 재확인 (\`chmod 600 ~/.ssh/authorized_keys\`)
- 젠킨스에서 Test Configuration 재시도, 정상 연결 확인됨
    

## 결론

- SSH 키 생성, 공개키 등록, 퍼미션 설정까지 꼼꼼히 확인 필요
- authorized_keys에 키가 누락되거나 퍼미션 잘못된 경우 인증 실패함
- 젠킨스 SSH Credentials 오류 발생 시 위 단계 순서대로 점검하면 해결 가능`,Uv=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"})),zv=`---
sumamry: 깃허브 웹훅 빌드 트리거링
tags:
  - 젠킨스
  - github_webhook
  - pipeline_설정
references: 
created_date: 2025-08-13T17:49:55.000Z
last_modified_date: 2025-08-14T15:45:34.000Z
---

# GitHub Webhook 자동 빌드 트리거링

젠킨스와 GitHub를 연동하면 코드 변경(push, PR 등) 시 자동으로 파이프라인이 실행되어 CI/CD를 실현할 수 있음.  

이때 \`Webhook\` 을 활용하면 개발자가 직접 젠킨스에서 빌드를 수동으로 실행하지 않아도, GitHub 이벤트가 발생할 때마다 파이프라인이 자동으로 트리거됨.


> - **Webhook**: GitHub에서 특정 이벤트(예: push, PR)가 발생하면 젠킨스에 HTTP POST 요청을 보내는 기능
> - **젠킨스 Multibranch Pipeline**: 다양한 브랜치별로 자동으로 파이프라인 생성 및 관리 가능
> - **자동화**: 코드 변경이 있을 때마다 빌드, 테스트, 배포가 자동으로 실행됨


## Github Webhook 설정

### 방화벽 허용

Github 이벤트를 젠킨스에서 처리하려면 웹훅 IP를 방화벽에 허용해야 합니다.

Github에서 특정 레포지토리나 조직(Organization)에서 발생하는 이벤트를 젠킨스에서 자동으로 처리하려면, Github가 이벤트를 웹훅(Webhook) 형식으로 젠킨스 서버의 URL로 전달한다. 
이때, 젠킨스 서버가 외부에서 오는 Github 웹훅 요청을 정상적으로 수신하려면, Github 웹훅용 IP 대역을 방화벽에서 허용해야 한다.

> - Github의 공식 웹훅 IP 대역은 [https://api.github.com/meta](https://api.github.com/meta)에서 확인할 수 있다.


### 레퍼지토리 웹 훅 허용 

웹 훅은 레퍼지토리와 조직(Organization) 등 여러 곳에 설정할 수 있다. 본 글에서는 레퍼지토리 웹 훅 URL 설정 방법에 대해서만 다루도록 한다.

1. 웹 훅 URL 을 설정할 레퍼지토리
2. \`Settings\` -> \`Webhooks\` -> \`Add webhook\`
3. 웹 훅 관련 설정
	1. \`Payload URL\`: \`\${웹 훅 수신 URL}/github-webhook/\`
	2. \`Content type\`: \`application/json\` 또는 \`application/x-www-form-urlencoded\`
	3. \`Secret\`: 기억할 수 있는 패스워드 값 입력
	4. \`SSL vertification\`:  \`Enable\` 또는 \`Disable\`
	5. 수신받을 이벤트 3 개 중 1 개 선택
		1. Just the push event.
		2. Send me everything.
		3. Let me select individual events.


## 젠킨스 Pipeline 설정

### \\* 젠킨스 필수 플러그인 설치

#### 1. Generic Webhook Trigger

젠킨스가 GitHub Webhook을 수신하여 자동으로 빌드를 실행하려면 **Generic Webhook Trigger** 플러그인을 설치한다.  
설치는 젠킨스의 \`Manage 젠킨스\` → \`Manage Plugins\` → \`Available Plugins\`에서 **Generic Webhook Trigger**를 검색해 설치한다.  
이 플러그인이 없으면 파이프라인에서 웹훅 관련 설정이 보이지 않으므로, 반드시 먼저 설치해야 한다.

> 필수 플러그인: [Generic Webhook Trigger](https://plugins.젠킨스.io/generic-webhook-trigger/) 설치

---

#### 2. Pipeline: GitHub

젠킨스와 GitHub 저장소 연동을 위해 **Pipeline: GitHub** 플러그인을 설치한다.  
이 플러그인만으로도 싱글 파이프라인 Job에서 Webhook Trigger 기능을 사용할 수 있다.  
멀티브랜치 파이프라인 자동 생성 및 관리, PR 자동 감지 및 빌드 등 추가 기능을 사용하려면 **GitHub Branch Source** 플러그인도 함께 설치한다.

> 참고: [GitHub Branch Source 플러그인 공식 페이지](https://plugins.jenkins.io/github-branch-source/)

### Pipeline 생성 및 설정

1. \`젠킨스\` 메인 페이지 -> \`New Item\`
2. \`Item type\` 선택 후 생성
	1. \`Freestyle project\`
	2. \`Pipeline\`
	3. \`Folder\`
	4. \`Multibranch Pipeline\`
	5. \`Organization Folder\`
3. \`Pipeline\` -> \`Configure\` 진입
4. \`Branch Sources\` 의 \`Add source(Github)\`
	1. \`Credentials\` 선택
	2. \`Repository HTTPS URL\`: 깃허브 레퍼지토리 주소
	3. \`Add / Filter by name\`: \`^(main|develop|feature-.*)\` 
	4. \`Build Configuration\`
		1. \`Mode\`: \`by jenkinsfile\`
		2. \`Script Path\`: 레퍼지토리 내 스크립트(jenkinsfile) 경로
	5. \`Apply\` and \`Save\`



### 자동 빌드 테스트

#### 스크립트 작성

- \`jenkinsfile\` 파일
	\`\`\`groovy
	pipeline {  
	    agent any  
	  
	    tools {  
	        jdk 'OpenJDK11'  
	    }  
	    
		stages {  
	        stage('Echo') {  
	            steps {  
	                echo "Building project."
	            }  
	        }  
	    }  
	    
	    stages {  
	        stage('Build') {  
	            steps {  
	                sh 'mvn clean package -DskipTests'  
	                archiveArtifacts artifacts: 'target/*.jar', fingerprint: true  
	            }  
	        }  
	    }  
	}
	\`\`\`


jenkinsfile 을 파이프라인 생성 시 입력한 경로에 위치시키고 \`Commit\` 후 \`Push\` 한다.

#### 스크립트 실행이 안될 때.

GitHub 에 \`Commit\`, \`Push\` 한 이후, 해당 이벤트를 감지하여 스크립트가 실행된다. 만약 내부 작업들이 실행이 안된다면 아래의 사항을 확인한다.

- 확인사항
	1. jenkinsfile 의 문법
	
		문법이 정확하지 않은 경우 에러 로그로 확인이 가능할 것으로 생각됨

	2. jenkinsfile 의 경로
		
		jenkinsfile 정상적으로 읽었는지 여부는 \`\${젠킨스_HOME}/workspace/\${pipeline_name}_\${branch_name}/젠킨스/jenkinsfile\` 이나 로그를 통해 \`젠킨스\` 내부 파일을 확인해본다.

	3. GitHub 방화벽 및 깃허브 정상 연동 여부
		
		만약 GitHub 의 이벤트를 감지하여 빌드가 실행되었다면 연동에는 문제가 없다.
		
	4. [Plugin: Declarative Pipeline](https://plugins.젠킨스.io/pipeline-model-definition) 플러그인의 설치 여부를 확인한다

		\`groovy\` 로 작성한 스크립트는 해당 플러그인이 없는 경우 실행되지 않는 것으로 보인다. 해당 플러그인을 설치한다.





`,Iv=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),Pv=`---
summary: 젠킨스 빌드용 JDK 설치 및 설정
tags:
  - 젠킨스
  - JDK_설치
  - JDK
references: 
created_date: 2025-08-13T15:19:52.000Z
last_modified_date: 2025-08-13T15:27:01.000Z
---
# 젠킨스 JDK

- 젠킨스 빌드용 JDK 필요함
- 로그인 → Manage Jenkins → Tools → JDK installations 이동
- Add JDK 클릭, Name(별칭), JAVA_HOME(설치 경로) 입력

## JDK 설치 및 환경 변수 설정

- OpenJDK 11 설치
	\`\`\`bash
	wget https://download.java.net/openjdk/jdk11/ri/openjdk-11+28_linux-x64_bin.tar.gz
	tar -xvzf openjdk-11+28_linux-x64_bin.tar.gz
	echo 'export JAVA11_HOME="/app/jdk-11"' >> ~/.bashrc
	echo 'export PATH="$PATH:$JAVA11_HOME/bin"' >> ~/.bashrc
	source ~/.bashrc
	\`\`\`

- OpenJDK 17 설치
	\`\`\`bash
	wget https://download.java.net/openjdk/jdk17.0.0.1/ri/openjdk-17.0.0.1+2_linux-x64_bin.tar.gz
	tar -xvzf openjdk-17.0.0.1+2_linux-x64_bin.tar.gz
	echo 'export JAVA17_HOME="/app/jdk-17"' >> ~/.bashrc
	echo 'export PATH="$PATH:$JAVA17_HOME/bin"' >> ~/.bashrc
	source ~/.bashrc
	\`\`\`

## 주의

- JDK 경로 입력해야 함, JRE 경로 입력하면 \`{PATH} doesn’t look like a JDK directory\` 에러남
- 빌드 에러(\`release version 17 not supported\`) 발생 시 JDK 버전 확인 필요
`,Fv=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"})),qv='---\nsummary: 젠킨스 버전 업그레이드해보기\ntags:\n  - 젠킨스\nreferences: \ncreated_date: 2025-08-12T14:03:52.000Z\nlast_modified_date: 2025-08-13T16:01:51.000Z\n---\n\n# 젠킨스(Jenkins) 버전 업그레이드 하기\n\n- `젠킨스` 버전 업그레이드\n	```shell\n	%% yum 을 사용한 젠킨스 버전 업그레이드 %%\n	sudo systemctl stop jenkins\n	sudo yum update jenkins -y \n	```\n\n\n## 젠킨스 포트 수정\n\n1. `젠킨스` 버전 업그레이드 후, 재실행했으나 기존에 실행했던 45000 번 포트로 접속이 되지 않았음.\n2. `lsof -i:45000` 으로 확인했으나 45000 번 포트에 어떠한 프로세스도 실행되고 있지 않았음.\n3. `systemctl status jenkins` 로 확인했으나 `active` 상태인 것을 확인\n4. `systemctl status jenkins` 를 통해 `jenkins` 를 실행하는 서비스 파일의 위치를 확인\n5. `/usr/lib/systemd/system/jenkins.service` 파일 확인\n6. `Environment=JENKINS_PORT=8080` 설정 파일이 기본 설정 파일로 수정\n7. `Environment=JENKINS_PORT=45000` 설정 파일을 수정\n8. `systemctl restart jenkins` 로 `jenkins` 재실행\n9. 45000 포트를 통해 `jenkins` 접속 완료\n\n\n## 젠킨스 JDK 업그레이드\n\n`젠킨스` 가 `Java 17` 지원을 2026년 3월 31일로 종료(EOL, End of Life) 한다는 알림이 와서 `Java 21` 버전으로 업그레이드 진행한다.\n\n1. `vi /usr/lib/systemd/system/jenkins.service` \n2. `Environment="JAVA_HOME${JDK21_HOME}"` 로 수정\n3. `systemctl daemon-reload`\n4. `systemctl restart jenkins`\n\n',Gv=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),Yv=`---
summary: 젠킨스 설치해보기
tags:
  - 젠킨스
  - 젠킨스_설치
references: 
created_date: 2025-08-13T15:19:02.000Z
last_modified_date: 2025-08-13T15:19:02.000Z
---

# 젠킨스(Jenkins) 설치

- 젠킨스 설치 명령어
    \`\`\`bash
    yum install -y jenkins
    \`\`\`

## 젠킨스 기동/정지/재시작

- 상태 확인: \`systemctl status jenkins\`
- 기동: \`systemctl start jenkins\`
- 정지: \`systemctl stop jenkins\`
- 재기동: \`systemctl restart jenkins\`

## 젠킨스 초기 비밀번호

- 초기 비밀번호 확인
    \`\`\`bash
    cat /var/lib/jenkins/secrets/initialAdminPassword
    \`\`\`

## 젠킨스 실행 포트 변경

- 실행 서비스 파일: \`/usr/lib/systemd/system/jenkins.service\`
- 해당 파일에서 포트 설정 가능
    \`\`\`bash
    Environment="JENKINS_PORT=45000" # 원하는 포트로 수정
    \`\`\`

- privileged port(<1024) 사용 시 CAP_NET_BIND_SERVICE 설정 필요`,Jv=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),Kv="---\nsummary: 젠킨스 빌드용 메이븐 설정\ntags:\n  - 젠킨스\n  - Maven\nreferences: \ncreated_date: 2025-08-13T15:49:56.000Z\nlast_modified_date: 2025-08-13T15:50:17.000Z\n---\n# 젠킨스(Jenkins) 메이븐(Maven) 설정\n\n## Maven 설치\n\n`mvn --version` 으로 `Maven` 이 설치되어있는지 확인하고 설치되어 있지 않은 경우 아래의 순서로 `Maven` 을 설치한다.\n\n- `Maven` 설치\n	1. `wget https://archive.apache.org/dist/maven/maven-3/3.9.9/binaries/apache-maven-3.9.9-bin.tar.gz`\n	2. `sudo tar -xvf apache-maven-3.8.6-bin.tar.gz -C /opt`\n	3. `sudo ln -s /opt/apache-maven-3.8.6 /opt/maven`\n	4. `maven.sh` 설정 \n		1. `vi /etc/profile.d/maven.sh`\n		2. `export JAVA_HOME=${JDK 설치 경로}`\n		3. `export M2_HOME=/opt/maven`\n		4. `export MAVEN_HOME=/opt/maven`\n		5. `export PATH=${M2_HOME}/bin:${PATH}`\n	5. `maven.sh` 권한 적용\n		1. `sudo chmod +x /etc/profile.d/maven.sh`\n		2. `source /etc/profile.d/maven.sh`\n	6. `mvn --version` 으로 정상 설치 여부 확인\n\n\n## 젠킨스 - Maven 설정\n\n- `Tools` -> `Maven Configuration`\n- `Use Default Settings` 또는 `Settings file in filesystem` 선택\n	- `Settings file in filesystem`선택시 `File Path` 에 `${MAVEN 설치 경로}/conf/settings.xml` 입력\n",Qv=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),Zv=`---
summary: 젠킨스, 넥서스 설정
tags:
  - 젠킨스
  - nexus
references: 
created_date: 2025-08-13T15:48:07.000Z
last_modified_date: 2025-08-13T16:00:32.000Z
---
# 젠킨스(Jenkins), 넥서스(Nexus) 설정

Nexus에서 라이브러리 받아오려면 Maven에 Nexus 관련 설정 필요함. 설정은 1. 계정 설정, 2. 레포지토리 설정으로 나뉨.

### 계정 설정

Maven이 Nexus에 접근할 때 사용할 계정정보는 \`$MAVEN_HOME/settings.xml\`에 추가해야 함.

- \`settings.xml\` 수정
\`\`\`xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
                         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                         xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                                                                           http://maven.apache.org/xsd/settings-1.0.0.xsd">
     <servers>
          <server>
               <id>레포지토리ID</id>
               <username>계정ID</username>
               <password>계정PW</password>
          </server>
     </servers>
</settings>
\`\`\`

### 레포지토리 설정

빌드시 필요한 라이브러리를 Nexus에서 받으려면 \`pom.xml\`에 레포지토리 정보 추가해야 함.

\`\`\`xml
<repositories>
     <repository>
          <id>레포지토리ID</id>
          <name>레포지토리별칭</name>
          <url>Nexus URL</url>
     </repository>
</repositories>
\`\`\`

- \`<id>\` 값은 \`settings.xml\`의 \`<server><id>\`와 일치해야 함
- 계정이 필요 없는 공개 레포는 \`<server>\` 설정 생략 가능`,Vv=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),Wv=`---
summary: 젠킨스 스크립트에서 JDK 설정하기
tags:
references: 
created_date: 2025-08-14 09:29:12
last_modified_date: 2025-08-14 09:29:23
---

# Pipeline JDK 설정

\`\`\`shell
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.10.1:compile (default-compile) on project $project_name: Fatal error compiling: java.lang.NoSuchFieldError: Class com.sun.tools.javac.tree.JCTree$JCImport does not have member field 'com.sun.tools.javac.tree.JCTree qualid' -> [Help 1]
\`\`\`

- 실패 원인
	1. Jenkins 에이전트가 최신 JDK(예: 21)로 빌드하고 있는데,  
	2. 프로젝트 의존성(특히 Lombok 등)이 오래돼 최신 JDK의 내부 API 변경을 반영하지 못함

## 문제 해결

### 원인 파악

빌드하는 프로젝트가 사용하는 JDK 버전은 17 버전이고, Jenkins 에 11, 17, 21 등 여러 버전의 JDK 를 설정해두었기 때문에 프로젝트를 빌드할 떄 사용해야하는 JDK 와 Jenkins 에서 빌드할 때 사용하는 JDK 버전이 상이한 것으로 판단.

### 문제 해결

1. \`Jenkins\` -> \`Manage\` -> \`JDK Installation\` 에 현재 추가되어있는 JDK 17 의 \`alias\` 를 확인
2. Pipeline 을 실행하는 스크립트에 JDK 버전과 관련한 내용을 추가한다.
	\`\`\`groovy
	pipeline {
		agent any
		tools {  
		    // Jenkins 관리 > Global Tool Configuration에서 등록한 JDK 이름 사용  
		    jdk 'OpenJDK17'  
		}
		
		...
	}
	\`\`\`
	`,Xv=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),$v=`---
summary: 젠킨스 스크립트 작성, pipeline/yaml 
tags:
  - 젠킨스
  - 파이프라인
  - YAML
references:
  - https://github.com/jenkinsci/pipeline-as-yaml-plugin/
created_date: 2025-08-14T09:29:02.000Z
last_modified_date: 2025-08-14T14:54:54.000Z
---
# Pipeline as YAML 설정

젠킨스에서 CI/CD를 위해 작성하는 스크립트는 기본적으로 \`Groovy\`로 작성된다. 하지만 \`Groovy\`에 대한 지식이 부족해 대안을 찾던 중, \`pipeline-as-yaml-plugin\` 플러그인을 통해 \`YAML\`로도 스크립트를 작성할 수 있다는 점을 알게 되었다.

## Pipeline as YAML

1. \`pipeline-as-yaml-plugin\` 플러그인 설치
    
2. Pipeline의 Configure 메뉴로 이동
    
3. Build Configuration
    
    1. Mode: \`by 젠킨스file As Yaml\` 선택
        
    2. Script Path: \`젠킨스.yaml\` 파일 경로 지정
        

### 기본적인 문법 확인

\`YAML\`로 Pipeline 스크립트를 작성하기 위해서는 기본 문법을 이해해야 한다. AI에게 요청할 수도 있지만, 적절한 예시가 제공되지 않는 경우가 있으므로 공식 예시를 참고하는 것이 좋다.

> 기본적인 예시는 [젠킨스 Yaml Pipeline Syntax](https://github.com/jenkinsci/pipeline-as-yaml-plugin/blob/main/src/test/resources/pipeline/pipelineAllinOne.yml)에서 확인할 수 있다.


### \`Yaml\` 파이프라인 작성 예시

- 예시
    
    \`\`\`yaml
    # jenkins/젠킨스file.yaml  
    pipeline:  
      agent:  
        node:  
          label: 'built-in'  
      tools:  
        jdk: 'OpenJDK17'  
      
      environment:  
        SERVICE_NAME: service-name  
        SLACK_CHANNEL: '#이슈'  
        REMOTE_DIR: credentials('HOME_PATH')      # 젠킨스 Credentials 바인딩 필요  
        SERVER_NAME: credentials('DEV_IP')      # SSH 서버명 (Publish Over SSH 플러그인 기준)  
      
      stages:  
        - stage: Build  
          steps:  
            - echo "Hello 젠킨스 YAML"  
      
        - stage: "Stage2"  
          steps:  
            - echo "Test"  
            - echo "$SLACK_CHANNEL"
    \`\`\`
    

## Yaml 사용 후기

- 장점
    
    1. \`Groovy\`보다 \`YAML\`이 더 친숙하다.
        
    2. 가독성이 뛰어나다.
        
    3. 버전 관리가 용이하다.
        
    4. 진입장벽이 낮아 DevOps 경험이 적은 개발자도 쉽게 이해하고 수정할 수 있다.
        
- 단점
    
    1. 공식 Declarative Pipeline에 비해 지원되는 플러그인 종류가 제한적이다.
        
    2. Slack 알림, 외부 서비스 연동 등 확장 기능 구현이 어렵거나 지원이 부족하다.
        
    3. 고급 파이프라인 기능(예: 동적 파라미터, 커스텀 스텝 등) 활용에 제약이 있다.
        
    4. 실무에서는 필요한 플러그인과 기능이 YAML Pipeline에서 정상적으로 작동하는지 사전 검증이 필요하다.
        

> 개인적으로 Slack Notification 플러그인을 활용한 슬랙 알림 기능이 필요했으나, 해당 플러그인이 YAML을 지원하지 않거나 정상적으로 동작하지 않아 결국 Groovy로 스크립트를 작성했다.

---

요약: 젠킨스에서 YAML로 파이프라인을 작성하는 것은 진입장벽이 낮고 가독성이 좋다는 장점이 있지만, 플러그인 호환성과 확장성 측면에서는 아쉬움이 있다. 실무 적용 전 충분한 테스트가 필요하다.`,nS=Object.freeze(Object.defineProperty({__proto__:null,default:$v},Symbol.toStringTag,{value:"Module"})),eS=`---
summary: 젠킨스 Publich Over SSH 플러그인 테스트 접속 실패
tags:
  - 젠킨스
references: 
created_date: 2025-08-26T11:31:12.000Z
last_modified_date: 2025-08-26T11:31:12.000Z
---

# 젠킨스 Publish Over SSH 서버 테스트 접속 실패

젠킨스에서 \`Publish Over SSH\` 플러그인을 사용해 서버를 추가하고, \`Test Configuration\`으로 접속 테스트를 수행할 때 발생할 수 있는 대표 에러 메시지와 해결 방법을 정리합니다.

## 에러 메시지별 해결 방법

### Connection refused

- **원인:** 서버 방화벽, SSH 데몬 미가동, 리스닝 포트 불일치로 인해 연결이 거부되는 경우
- **확인 방법:** \`ping\`, \`traceroute\`로 경로 점검, \`nc -vz <HOST> 22\`로 포트 오픈 여부 확인
- **해결 방법:**
	- 방화벽에서 SSH 포트(기본 22)를 허용
	- 서버에서 sshd 상태/포트 확인: \`sudo systemctl status sshd\`, \`ss -tnlp | grep :22\`
	- 젠킨스의 서버 설정에서 Host/Port 값 재확인

### Connection timed out

- **원인:** 네트워크 경로 차단(방화벽/보안그룹), 라우팅 이슈로 응답이 오지 않는 경우
- **확인 방법:** \`traceroute <HOST>\`, \`nc -vz <HOST> 22\` 실행 시 타임아웃 여부 확인
- **해결 방법:**
	- 네트워크/방화벽 경로 점검 및 중간 구간 차단 해제
	- 대상 서버가 외부에서 접근 가능한지(공인/사설망, VPN 등) 확인

### Permission denied (publickey)

- **원인:** 공개키 미등록, 계정 불일치, 키 형식 불일치, 권한/소유자 문제
- **확인 방법:** 로컬에서 \`ssh -i <PRIVATE_KEY> <USER>@<HOST> -vvv\`로 직접 접속 시도
- **해결 방법:**
1. 배포할 서버의 \`/home/\${user}/.ssh/authorized_keys\`에 젠킨스의 공개키 추가
2. 권한/소유자 설정:
	- \`chmod 600 /home/\${user}/.ssh/authorized_keys\`
	- \`chmod 700 /home/\${user}/.ssh\`
	- \`chown -R \${user}:\${user} /home/\${user}/.ssh\`
3. 젠킨스 설정에서 올바른 Private key(내용/경로)와 로그인 사용자명 사용
`,tS=Object.freeze(Object.defineProperty({__proto__:null,default:eS},Symbol.toStringTag,{value:"Module"})),aS=`---
summary: 젠킨스의 Publish Over SSH 플러그인은 배포 자동화 시 SSH 서버에 파일을 전송할 때 Remote Directory 설정 가이드
tags:
  - Jenkins
created_date: 2025-08-26 11:14:57
last_modified_date: 2025-08-26 11:14:57
---

# Jenkins Publish Over SSH 플러그인 - Remote Directory 설정 주의사항

Jenkins에서 배포 자동화를 위해 \`Publish Over SSH\` 플러그인을 사용하면, ssh를 통해 대상 서버에 접속하여 \`sshPublisher\`로 바이너리 파일 등을 쉽게 배포할 수 있습니다. 하지만 이 과정에서 서버 설정의 \`Remote Directory\` 값을 잘못 지정하면, 의도하지 않은 경로로 파일이 배포되는 문제가 발생할 수 있습니다.

## 상대 경로로 인한 배포 경로 오류

\`Remote Directory\` 설정을 비워두면 기본적으로 접속 유저의 홈 디렉토리가 기준 경로로 잡히는데 예를 들어, userA 계정으로 접속하면 \`/home/userA\`가 기본 경로가 되는식입니다.

만약 \`Remote Directory\`를 \`/deploy/app\`이 아닌 \`deploy/app\`처럼 **상대 경로**로 입력하면, Jenkins는 이 경로를 접속 계정의 홈 디렉토리 기준으로 해석하기 때문에 결국 \`/home/username/deploy/app\`에 파일이 배포되어, 의도했던 \`/deploy/app\`과는 다른 위치에 파일이 복사되는 문제가 발생합니다.

### 예시

- Remote Directory: \`deploy/app\` (상대 경로)
- 실제 배포 경로: \`/home/username/deploy/app\`
- 의도한 경로: \`/deploy/app\`
    

## 해결 방법

\`Remote Directory\`는 \`/deploy/app\` 과 같이 **절대 경로**로 지정하는 것이 좋습니다.

### Jenkins Pipeline 스크립트 예시

\`\`\`groovy
steps {
    sshPublisher(
        publishers: [
            sshPublisherDesc(
                configName: env.SERVER_NAME,
                transfers: [
                    sshTransfer(
                        sourceFiles: 'target/*.jar',
                        remoteDirectory: "\${env.REMOTE_DIR}/lib",
                        removePrefix: 'target',
                        execCommand: """
                            echo 'REMOTE_DIR=\${env.REMOTE_DIR}';
                            ls -l \${env.REMOTE_DIR}/lib
                        """
                    )
                ],
                verbose: true
            )
        ]
    )
}
\`\`\`

- \`\${env.REMOTE_DIR}\` 값이 반드시 절대 경로여야 의도한 위치에 배포됩니다.
    

## 결론

ㅌ
1. Jenkins의 \`Publish Over SSH\` 플러그인과 \`sshPublisher\`를 사용할 때, \`Remote Directory\`를 상대 경로로 설정하면 접속 계정의 홈 디렉토리가 기준이 되어 의도하지 않은 위치에 파일이 배포될 수 있습니다.
    
2. 항상 **절대 경로**를 사용하여 원하는 위치에 정확히 배포되도록 설정하는 것이 중요합니다.
    
3. 만약 Jenkins의 \`Manage Jenkins\` → \`System\` → \`SSH Servers\`에서 서버 추가 시 \`Remote Directory\`를 루트(\`/\`)로 지정해두면, 이후 스크립트에서 상대 경로를 사용해도 기대한 경로에 정상적으로 파일이 배포됩니다.`,lS=Object.freeze(Object.defineProperty({__proto__:null,default:aS},Symbol.toStringTag,{value:"Module"})),iS=`---
summary: 젠킨스, 슬랙 연동 및 알림 설정해보기
tags:
  - 젠킨스
  - slack
references: 
created_date: 2025-08-13T16:27:25.000Z
last_modified_date: 2025-08-13T16:27:25.000Z
---
# 젠킨스 Slack 플러그인 연동 및 알림 설정

## Slack에 젠킨스 CI 플러그인 추가

- Slack에서 \`더보기\` → \`앱\` → \`젠킨스 CI\` 추가
    

## 젠킨스에서 Slack 플러그인 설정값 확인

- Slack 플러그인 추가 후, 설정 지침에서 필요한 값 확인 가능
    
	1. 팀 하위 도메인
	2.  통합 토큰 자격 증명 ID

## 젠킨스에 Slack 설정 추가

- \`Manage 젠킨스\` → \`System\` → \`Slack\` 메뉴로 이동
- Workspace에는 팀 하위 도메인 값 입력
- Credential은 아래 절차 참고해서 추가
    

### Slack Credential 추가

- \`+ ADD\` → \`젠킨스\` → \`Secret text\` 선택
    - Secret: 통합 토큰 자격 증명 ID 입력
    - ID: 원하는 별칭 입력

### Default Channel 설정

- 알림 보낼 채널 이름을 \`#채널명\` 형식으로 입력
    
### 연결 테스트

- Test Connection 시 성공하면 Slack에서 알림 도착함
    

## 젠킨스file에 Slack 알림 스크립트 추가

- \`젠킨스file\`에 빌드 성공/실패에 따라 슬랙 알림 전송 스크립트 추가
    

\`\`\`groovy
pipeline {
	...
	post {  
	    success {  
	        slackSend (
	            channel: '#이슈',
	            color: '#00FF00',
	            message: """Job \${env.JOB_NAME} [\${env.BUILD_NUMBER}] 🔥"""
	        )  
	    }
	    failure {  
	        slackSend (
	            channel: '#이슈',
	            color: '#FF0000',
	            message: "FAIL: Job \${env.JOB_NAME} [\${env.BUILD_NUMBER}]"
	        )  
	    }
	}
}
\`\`\`

- 위처럼 설정하면 빌드 결과에 따라 지정한 채널로 알림 전송됨
`,rS=Object.freeze(Object.defineProperty({__proto__:null,default:iS},Symbol.toStringTag,{value:"Module"})),sS=`---
summary: 젠킨스 빌드 실패, 넥서스 라이브러리 캐시 지우기
tags:
  - 젠킨스
references:
  - https://젠킨스.io/
created_date: 2025-08-26T10:04:25.000Z
last_modified_date: 2025-08-26T10:04:42.000Z
---
# 젠킨스 라이브러리 캐시로 인한 빌드 실패

> 내부에서 개발한 라이브러리의 새로운 개발 버전(예: 1.1.0-SNAPSHOT)을 넥서스에 추가로 배포했음에도, 젠킨스 내부 워크스페이스에 이전 버전의 스냅샷 라이브러리가 캐시되어 있어 최신 메서드를 찾지 못하고 빌드가 실패하는 문제가 발생했다.  


## 빌드 실패 문제 원인 파악

- 젠킨스 빌드 로그
	\`\`\`shell
	[INFO] -------------------------------------------------------------
	[ERROR] COMPILATION ERROR : 
	[INFO] -------------------------------------------------------------
	
	[ERROR] /var/lib/젠킨스/workspace/$workspace_name/src/test/java/kr/co/.../.../.../.../$ClassName.java:[103,30] error: cannot find symbol
	  symbol:   method connect()
	  location: variable connector of type $ClassName
	\`\`\`

테스트 코드에서 \`connect()\` 메서드를 분명히 추가했는데도 빌드 시 “cannot find symbol: method connect()” 에러가 발생하는 것을 보아 빌드 과정에서 **(옛날 구버전) JAR** **파일**을 참조하고 있을 가능성이 매우 높다고 판단했다.

- 원인 추정
	1. 프로젝트 내부 \`pom.xml\` 확인
	
		먼저, 프로젝트의 \`pom.xml\` 파일에서 의존성으로 지정된 라이브러리의 버전을 확인했다. 혹시라도 의도치 않게 구버전이 명시되어 있거나, SNAPSHOT 버전이 적절히 관리되고 있지 않은 경우가 있을 수 있다고 생각했기 때문이다.
	
	2. \`젠킨스\` 빌드 환경의 캐시/워크스페이스 문제
	
		\`젠킨스\` 는 기본적으로 빌드 시 워크스페이스와 캐시를 재사용한다. 만약 빌드 스크립트에서 \`mvn install\` 없이 \`mvn package\`만 실행할 경우, 새로운 JAR이 로컬 저장소에 반영되지 않는다. 이로 인해, 이전 빌드의 산출물이나 구버전 JAR을 계속 참조하게 되어, 소스 코드의 변경 사항이 빌드에 반영되지 않을 수 있다고 생각했기 때문이다.
	




**빌드** **실패** **문제** **해결** **과정** **정리**

젠킨스에서 빌드 실패가 발생했을 때, 캐싱된 구버전 라이브러리로 인한 문제일 가능성을 의심하여 아래 두 가지 작업을 수행했다.

1. **워크스페이스의 pom.xml 확인**  
    \`/var/lib/jenkins/workspace/$workspace_name/pom.xml\` 파일을 점검하여, 프로젝트가 참조하는 의존성 버전이 최신인지 확인했다.
2. **Maven 로컬 저장소 캐시 삭제**  
    \`/var/lib/jenkins/.m2/repository/...\` 경로에서 캐싱된 라이브러리를 직접 삭제하여, 빌드 시 항상 최신 라이브러리를 참조하도록 환경을 정리했다.

이후 젠킨스 Job을 재빌드하니, 더 이상 구버전 라이브러리로 인한 빌드 실패가 발생하지 않고 정상적으로 빌드가 완료되었다.

## 요약

> SNAPSHOT(스냅샷) 버전의 경우 변경 사항이 자주 반영되지만, 젠킨스가 구버전 캐시를 참조할 경우 최신 코드가 빌드에 반영되지 않는 상황이 발생할 수 있다. 
> 
> 빌드 실패 시 워크스페이스와 Maven 로컬 저장소의 캐시를 점검하고 정리한 뒤, 재빌드하면 문제를 효과적으로 해결할 수 있다.



`,oS=Object.freeze(Object.defineProperty({__proto__:null,default:sS},Symbol.toStringTag,{value:"Module"})),uS=`---
summary: 프로메테우스, 노드 익스포터 설치 및 연동해보기
created_date: 2025-12-02 01:19:16
last-modified-date: 2025-12-03 10:34:06
---
# Node Exporter 설치 문서

## 1. Node Exporter 전용 계정 생성함

Node Exporter 프로세스를 일반 계정이 아닌 전용 서비스 계정으로 실행하기 위해 계정을 생성함.

1. node_exporter 사용자 생성함.
    - 실행 명령:
        \`\`\`shell
        sudo useradd -rs /bin/false node_exporter
        \`\`\`
        
    - 로그인 셸을 \`/bin/false\`로 지정해 직접 로그인이 불가능한 시스템 계정으로 생성함.​

---

## 2. Node Exporter 바이너리 다운로드 및 압축 해제함

GitHub 릴리즈에서 Node Exporter 바이너리를 다운로드하고, 압축 해제 후 권한을 설정함.

1. 설치 디렉터리로 이동함.
    - 실행 명령:
        \`\`\`shell
        cd /opt
        \`\`\`
        
2. Node Exporter 압축 파일 다운로드함.
    - 실행 명령:
		\`\`\`shell
		wget https://github.com/prometheus/node_exporter/releases/download/v1.8.2/node_exporter-1.8.2.linux-amd64.tar.gz
		\`\`\`
        
3. 다운로드한 tar.gz 파일 압축 해제함.
    - 실행 명령:
        \`\`\`shell
        tar -xvzf node_exporter-1.8.2.linux-amd64.tar.gz
        \`\`\`
        
    - 위 명령으로 \`/opt/node_exporter-1.8.2.linux-amd64\` 디렉터리가 생성되며, 내부에 \`node_exporter\` 실행 파일이 포함됨.​
    
4. Node Exporter 디렉터리에 소유권을 부여함.
    - 실행 명령:    
        \`\`\`shell
        chown -R node_exporter:node_exporter node_exporter-1.8.2.linux-amd64
        \`\`\`
        
    - node_exporter 사용자/그룹이 해당 디렉터리 및 실행 파일에 대한 권한을 가지도록 설정함.​


---

## 3. Node Exporter systemd 서비스 유닛 생성함

Node Exporter를 백그라운드 서비스로 실행하고, 부팅 시 자동 시작되도록 systemd 유닛 파일을 생성함.

1. 서비스 유닛 파일 생성함.
    - 파일 경로: \`/etc/systemd/system/node_exporter.service\`
    - 내용 예시는 다음과 같음.
		\`\`\`shell
		[Unit] 
		Description=Node 
		Exporter Wants=network-online.target 
		After=network-online.target 
		
		[Service] 
		User=node_exporter 
		Group=node_exporter 
		Type=simple 
		ExecStart=/opt/node_exporter-1.8.2.linux-amd64/node_exporter 
		Restart=on-failure 
		
		[Install] WantedBy=multi-user.target
		\`\`\`
        
1. 위 설정을 통해 네트워크가 활성화된 이후 node_exporter 서비스가 실행되며, node_exporter 전용 계정으로 프로세스가 동작하도록 구성됨.​
2. 기본 설정에서는 9100 포트에서 메트릭 엔드포인트(\`/metrics\`)를 노출함.​


---

## 4. Node Exporter 서비스 등록 및 기동함

1. systemd 데몬 리로드함.
    - 실행 명령:
        \`\`\`shell
        sudo systemctl daemon-reload
        \`\`\`
        
2. 부팅 시 자동 실행 설정함.
    - 실행 명령:
        \`\`\`shell
        sudo systemctl enable node_exporter
        \`\`\`
        
    - 시스템 부팅 시 node_exporter 서비스가 자동으로 시작되도록 설정됨.
        
3. 즉시 Node Exporter 서비스 기동함.
    - 실행 명령:
        \`\`\`shell
        sudo systemctl start node_exporter
        \`\`\`
        
4. 서비스 상태 확인이 필요할 경우 아래 명령을 사용할 수 있음.
    - 실행 명령:
        \`\`\`shell
        sudo systemctl status node_exporter
        \`\`\`
        
5. 브라우저 또는 curl로 \`http://\${PROMETHEUS_IP}:9100/metrics\` 에 접근해 메트릭 노출 여부를 확인할 수 있음.

---

## 5. Prometheus에 Node Exporter 타깃 추가함

Prometheus가 Node Exporter가 제공하는 메트릭을 스크랩할 수 있도록 Prometheus 설정 파일에 타깃을 추가함.

1. Prometheus 설정 파일 편집함.
    - 파일 경로: \`/opt/prometheus/prometheus.yml\`
    - 편집 예시는 다음과 같음.
        \`\`\`shell
        scrape_configs:   
	        - job_name: 'node_exporter'    
	          static_configs:      
	          - targets: ['\${PROMETHEUS_IP:PORT}']
        \`\`\`
        
2. \`\${PROMETHEUS_IP:PORT}\` 부분에 Node Exporter가 동작 중인 서버와 포트를 지정함. 예를 들어 동일 서버에서 기본 포트로 동작 중이면 \`['\${PROMETHEUS_IP:9100']\` 으로 설정함.​
3. 설정 변경 후 Prometheus 서비스를 재시작하거나 설정 리로드를 수행해야 변경 사항이 반영됨.
    - 재시작 예시:
        \`\`\`shell
        sudo systemctl restart prometheus
        \`\`\`
        
4. Prometheus 웹 UI의 Targets 페이지에서 \`job_name: node_exporter\` 항목의 상태가 UP 인지 확인해 메트릭 수집이 정상 동작하는지 검증함.`,cS=Object.freeze(Object.defineProperty({__proto__:null,default:uS},Symbol.toStringTag,{value:"Module"})),dS=`---
summary: 프로메테우스 설치해보기
created_date: 2025-12-02 01:19:28
last-modified-date: 2025-12-02 02:48:36
---
# Prometheus 설치 문서

---

## 1. Prometheus 바이너리 다운로드 및 디렉터리 구성함

Prometheus를 패키지 매니저가 아닌 공식 바이너리로 설치하기 위해, GitHub 릴리즈에서 tar.gz 파일을 다운로드하고 \`/opt/prometheus\` 경로로 정리함.

1. Prometheus 압축 파일 다운로드 및 압축 해제, 디렉터리 이동함.
    - 실행 명령:
        shell
		\`\`\`shell
		wget https://github.com/prometheus/prometheus/releases/download/v2.47.1/prometheus-2.47.1.linux-amd64.tar.gz 
        tar xvfz prometheus-2.47.1.linux-amd64.tar.gz 
        sudo mv prometheus-2.47.1.linux-amd64 /opt/prometheus
		\`\`\`
        
2. 위 명령을 통해 현재 디렉터리에 \`prometheus-2.47.1.linux-amd64\` 디렉터리가 생성되며, 이후 \`/opt/prometheus\` 로 이동됨.​
3. 이동 후 주요 파일은 다음과 같음.
    - \`/opt/prometheus/prometheus\` : Prometheus 서버 실행 바이너리.
    - \`/opt/prometheus/promtool\` : 설정 검증 및 유틸리티 바이너리.
    - \`/opt/prometheus/prometheus.yml\` : 기본 설정 파일.
    - \`/opt/prometheus/consoles/\`, \`/opt/prometheus/console_libraries/\` : 콘솔 템플릿 관련 디렉터리.

※ 필요 시 \`/opt/prometheus/data\` 디렉터리를 생성해 TSDB 데이터를 저장하는 용도로 사용함.

---

## 2. Prometheus systemd 서비스 유닛 파일 생성함

Prometheus를 systemd 서비스로 관리하기 위해 \`/etc/systemd/system/prometheus.service\` 파일을 생성함.
    
1. systemd 서비스 유닛 파일 생성함.
    - 파일 경로: \`/etc/systemd/system/prometheus.service\`
    - 내용 예시는 다음과 같음.
        \`\`\`shell
        [Unit] 
        Description=Prometheus 
        Wants=network-online.target 
        After=network-online.target 
        
        [Service] 
        User=prometheus 
        Group=prometheus 
        Type=simple 
        ExecStart=/opt/prometheus/prometheus --config.file=/opt/prometheus/prometheus.yml --storage.tsdb.path=/opt/prometheus/data 
        ExecReload=/bin/kill -HUP $MAINPID 
        Restart=on-failure 
        
        [Install] 
        WantedBy=multi-user.target
        \`\`\`
        
2. 위 설정을 통해 네트워크가 활성화된 이후 \`Prometheus\` 가 실행되며, 설정 파일과 데이터 경로를 명시적으로 지정하도록 구성함.​

---

## 3. Prometheus 서비스 등록 및 기동함

systemd에 새로운 서비스 유닛을 인식시키고, 부팅 시 자동 실행되도록 설정한 뒤 \`Prometheus\` 를 기동함.​

1. systemd 데몬 리로드함.
    - 실행 명령:
        \`\`\`shell
        sudo systemctl daemon-reload
        \`\`\`
        
2. 부팅 시 자동 실행 설정함.
    - 실행 명령:
        \`\`\`shell
        sudo systemctl enable prometheus
        \`\`\`
    - 시스템 부팅 시 prometheus 서비스가 자동으로 시작되도록 설정됨.
        
3. 즉시 Prometheus 서비스를 기동함.
    - 실행 명령:
        \`\`\`shell
        sudo systemctl start prometheus
        \`\`\`
        
    - Prometheus HTTP 서버가 기본 포트 9090에서 대기 상태로 진입함.
        

---

## 4. Prometheus 웹 UI 및 상태 확인함

1. 서비스 기동 후 브라우저에서 아래 주소로 접속함.
    
    - URL: \`http://\${PROMETHEUS_IP}:9090\`
        
2. Prometheus 메인 페이지에서 현재 타임 시리즈, 설정된 스크랩 타깃, 알림 상태 등을 확인할 수 있음.
    
3. 외부에서 접속할 경우, 방화벽 또는 보안 그룹에서 TCP 9090 포트가 허용되어 있는지 확인해야 함.
`,fS=Object.freeze(Object.defineProperty({__proto__:null,default:dS},Symbol.toStringTag,{value:"Module"})),pS=`---
summary: 프로메테우스, 레빗엠큐 익스포터 설치해보기
created_date: 2025-12-08 01:34:09
last-modified-date: 2025-12-08 09:08:37
---

# RabbitMQ Exporter 설치 및 Prometheus 연동 문서


---

## 1. rabbitmq_prometheus 플러그인 활성화

RabbitMQ 서버에 Prometheus 메트릭 수집 플러그인 활성화

\`\`\`shell
rabbitmq-plugins enable rabbitmq_prometheus 
sudo systemctl restart rabbitmq-server 
sudo systemctl status rabbitmq-server
\`\`\`

- \`rabbitmq_prometheus\` 플러그인이 활성화되면, RabbitMQ 웹 관리자 인터페이스의 \`/metrics\` 경로를 통해 Prometheus 메트릭을 제공합니다.
    

---

## 2. RabbitMQ Exporter 설치

RabbitMQ Exporter는 RabbitMQ의 메트릭을 Prometheus 포맷으로 수집하여 제공합니다.

- 최신 버전의 RabbitMQ Exporter 다운로드 (amd64 아키텍처 기준)


\`\`\`shell
mkdir /opt/rabbitmq_exporter /opt/rabbitmq_exporter/conf 

wget https://github.com/kbudde/rabbitmq_exporter/releases/download/v1.0.0/rabbitmq_exporter_1.0.0_linux_amd64.tar.gz 

tar -xzvf rabbitmq_exporter_1.0.0_linux_amd64.tar.gz -C /opt/rabbitmq_exporter
\`\`\`

- 압축 해제 후, 다음과 같은 파일 구조가 생성된다:
    
    - \`/opt/rabbitmq_exporter/conf\`
    - \`/opt/rabbitmq_exporter/rabbitmq_exporter\`
    - \`/opt/rabbitmq_exporter/README.md\`
    - \`/opt/rabbitmq_exporter/LICENSE\`
        

---

## 3. 설정 파일 작성

RabbitMQ Exporter의 설정 파일(\`/opt/rabbitmq_exporter/conf/rabbitmq.conf\`) 작성한다.

json

\`\`\`json
{   
	"rabbit_url": "http://\${RABBITMQ_IP}:15672",  
	"rabbit_user": "\${USER_NAME}",  
	"rabbit_pass": "\${PASSWORD}" 
}
\`\`\`

- \`\${RABBITMQ_IP}\`: RabbitMQ 서버 IP
- \`\${USER_NAME}\`: RabbitMQ 관리자 계정
- \`\${PASSWORD}\`: RabbitMQ 관리자 비밀번호

---

## 4. systemd 서비스 등록

RabbitMQ Exporter를 systemd 서비스로 등록합니다.

- \`/etc/systemd/system/rabbitmq-exporter.service\` 파일 생성:


\`\`\`shell
[Unit] 
Description=RabbitMQ Exporter 
After=network.target 

[Service] 
Type=simple 
ExecStart=/opt/rabbitmq_exporter/rabbitmq_exporter \\
-config-file=/opt/rabbitmq_exporter/conf/rabbitmq.conf 
Restart=always 

[Install] 
WantedBy=multi-user.target
\`\`\`

- 서비스 등록 및 시작:
	\`\`\`shell
	sudo systemctl daemon-reload 
	sudo systemctl start rabbitmq-exporter 
	sudo systemctl enable rabbitmq-exporter
	\`\`\`

- 서비스 상태 확인:
	\`\`\`shell
	sudo systemctl status rabbitmq-exporter
	\`\`\`

- 기본 포트: 9419 (RabbitMQ Exporter가 메트릭을 제공하는 포트)

---

## 5. Prometheus 설정

Prometheus 서버의 \`prometheus.yml\`에 RabbitMQ Exporter 타깃을 추가합니다.

\`\`\`text
scrape_configs:   
- job_name: 'rabbitmq'    
- scrape_interval: 60s    
- scrape_timeout: 30s    
- static_configs:      
  - targets:        
	- \${SERVER_IP}:\${PORT}
\`\`\`

- 설정 적용 후 Prometheus 재시작:
	\`\`\`shell
	sudo systemctl restart prometheus
	\`\`\`

---

## 6. 트러블슈팅

- **RabbitMQ Exporter가 메트릭을 제공하지 않을 경우**
    
    - RabbitMQ 서버의 \`rabbitmq_prometheus\` 플러그인이 활성화되었는지 확인
    - RabbitMQ Exporter 설정 파일의 IP, 사용자, 비밀번호가 정확한지 확인
    - 네트워크 방화벽이 15672(RabbitMQ 관리자 포트), 9419(RabbitMQ Exporter 메트릭 포트)를 허용하는지 확인
        
- **Prometheus에서 타깃이 UP 상태가 아닐 경우**
    - RabbitMQ Exporter가 정상적으로 실행되고 있는지 확인
    - Prometheus 설정 파일의 \`targets\`가 정확한지 확인
        

---

이 문서를 참고하여 RabbitMQ Exporter 설치 및 Prometheus 연동을 안정적으로 수행할 수 있습니다.

---

## 참고 자료

- RabbitMQ Exporter GitHub: [https://github.com/kbudde/rabbitmq_exporter](https://github.com/kbudde/rabbitmq_exporter)
- Prometheus RabbitMQ Exporter 문서: [https://github.com/kbudde/rabbitmq_exporter](https://github.com/kbudde/rabbitmq_exporter)
    `,mS=Object.freeze(Object.defineProperty({__proto__:null,default:pS},Symbol.toStringTag,{value:"Module"})),hS=`---
summary: 프로메테우스, SNMP 를 통한 스위치 모니터링
created_date: 2025-12-03 10:34:06
last-modified-date: 2025-12-03 03:29:41
---

# Switch Monitoring 문서: SNMP + Prometheus 연동

이 문서는 스위치와 Prometheus 간 SNMP 통신을 위한 설정하는 방법을 설명한다.

---

## SNMP / SNMP_EXPORTER + Prometheus 연동하기
### 1. SNMP 패키지 설치 및 서비스 설정

SNMP 서비스를 설치하고, 부팅 시 자동 실행되도록 설정한다.

\`\`\`shell
sudo yum install -y net-snmp net-snmp-utils 
sudo systemctl enable snmpd
sudo systemctl start snmpd
\`\`\`

---

### 2. SNMP Exporter 설치 및 설정

SNMP Exporter를 다운로드하고 압축을 해제합니다.

\`\`\`shell
cd /opt
wget https://github.com/prometheus/snmp_exporter/releases/download/v0.29.0/snmp_exporter-0.29.0.linux-amd64.tar.gz
tar -xzf snmp_exporter-0.29.0.linux-amd64.tar.gz
\`\`\`

---

### 3. SNMP Exporter systemd 서비스 등록

- \`/etc/systemd/system/snmp_exporter.service\` 파일 수정
	\`\`\`shell
	[Unit] 
	Description=SNMP Exporter  
	After=network.target
	
	[Service] 
	User=root 
	ExecStart=/opt/snmp_exporter-0.29.0.linux-amd64/snmp_exporter \\
	--config.file=/opt/snmp_exporter-0.29.0.linux-amd64/snmp.yml 
	Restart=always 
	
	[Install] 
	WantedBy=multi-user.target
	\`\`\`

---


---

### 4. SNMP Exporter 서비스 등록 및 기동

\`\`\`shell
sudo systemctl daemon-reload 
sudo systemctl start snmp_exporter 
sudo systemctl status snmp_exporter
\`\`\`


---

### 5. Prometheus 설정 파일 수정

\`prometheus.yml\`에 SNMP Exporter 타깃을 추가한다.


\`\`\`shell
scrape_configs:
	...
	
  - job_name: 'snmp'
    scrape_interval: 120s
    scrape_timeout: 90s
    static_configs:
      - targets:
        - \${SERVER_IP}  # 스위치 IP
    metrics_path: /snmp
    params:
      auth: [public_v2]
      module: [if_mib]
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: \${SERVER_IP}:9116  # SNMP Exporter가 실행되는 서버:포트
\`\`\`

설정 적용 후 Prometheus 재시작:

\`\`\`shell
sudo systemctl restart prometheus
\`\`\`

---


# 트러블슈팅
## community 값 불일치로 인한 연결 문제 발생

- 아래 명령어로 테스트:
	\`\`\`shell
	$ snmpwalk -v2c -c public \${SERVER_IP} 1.3.6.1.2.1.1 
	> No Resposne ...
	snmpwalk -v2c -c public \${SERVER_IP} 1.3.6.1.2.1.2
	> No Resposne ...
	\`\`\`

- SNMP Exporter 설정에서 \`auth.public_v2.community\` 값을 \`magma\` 가 아닌 \`public\`  으로 설정하여 스위치로부터 응답을 받지못하는 경우가 발생함
    


`,gS=Object.freeze(Object.defineProperty({__proto__:null,default:hS},Symbol.toStringTag,{value:"Module"})),_S=`---
summary: MSA 환경에서 Gateway가 JWT를 파싱해 x-usr-* 헤더로 전달한 사용자 정보를, 뒷단 서비스의 컨트롤러에서 @CurrentAccount Account 파라미터로 자동 변환하는 HandlerMethodArgumentResolver를 구현한 과정을 정리했습니다.
tags: Spring MVC, HandlerMethodArgumentResolver, MSA, JWT
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 커스텀 ArgumentResolver를 만들어 인증 정보를 자동 주입한 과정을 정리한 글입니다.


## 문제: 모든 컨트롤러에서 헤더를 직접 꺼내야 한다

pinguinz는 API Gateway에서 JWT를 검증하고, 파싱한 사용자 정보를 \`x-usr-id\`, \`x-usr-nickname\`, \`x-usr-role\`, \`x-usr-status\` 헤더로 뒷단 서비스에 전달하는 구조다.

뒷단 서비스의 컨트롤러에서 사용자 정보가 필요하면 이렇게 해야 한다:

\`\`\`java
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @RequestHeader("x-usr-id") Long userId,
        @RequestHeader("x-usr-nickname") String nickname,
        @RequestHeader("x-usr-role") String role,
        @RequestHeader("x-usr-status") String status,
        @RequestParam("nickname") String targetNickname) {

    Account me = Account.builder()
            .id(userId)
            .nickname(nickname)
            .role(AccountRole.valueOf(role))
            .status(AccountStatus.valueOf(status))
            .build();

    // ...
}
\`\`\`

문제:
- **모든 인증 필요 엔드포인트**에서 4개 헤더를 반복해서 선언
- Account 객체 조립 로직이 컨트롤러마다 중복
- 헤더 이름이 문자열이라 오타에 취약
- 새 헤더가 추가되면 모든 컨트롤러를 수정해야 함


## 해결: @CurrentAccount + HandlerMethodArgumentResolver

목표는 이것이다:

\`\`\`java
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @CurrentAccount Account me,
        @RequestParam("nickname") String targetNickname) {
    // me에 id, nickname, role, status가 이미 채워져 있음
}
\`\`\`

Spring MVC의 \`HandlerMethodArgumentResolver\`를 사용하면, 컨트롤러 메서드의 파라미터를 **Spring이 호출하기 전에 자동으로 만들어서 넘겨줄 수 있다.**


## HandlerMethodArgumentResolver 이해하기

Spring MVC가 컨트롤러 메서드를 호출할 때, 각 파라미터를 어떻게 채울지 결정하는 과정이 있다.

\`\`\`
요청 → DispatcherServlet → HandlerAdapter → ArgumentResolver → 컨트롤러 메서드
\`\`\`

\`HandlerMethodArgumentResolver\`는 두 개의 메서드를 구현해야 한다:

\`\`\`java
public interface HandlerMethodArgumentResolver {

    // "이 파라미터를 내가 처리할 수 있는가?"
    boolean supportsParameter(MethodParameter parameter);

    // "이 파라미터의 값을 만들어라"
    Object resolveArgument(MethodParameter parameter, ...);
}
\`\`\`

Spring은 등록된 ArgumentResolver들을 순회하면서, \`supportsParameter()\`가 \`true\`를 반환하는 resolver를 찾아서 \`resolveArgument()\`를 호출한다.

익숙한 \`@RequestParam\`, \`@RequestBody\`, \`@PathVariable\`도 전부 내부적으로 ArgumentResolver로 구현되어 있다.


## 구현

### 1단계: @CurrentAccount 어노테이션

\`\`\`java
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface CurrentAccount {
}
\`\`\`

- \`@Target(PARAMETER)\`: 메서드 파라미터에만 붙일 수 있음
- \`@Retention(RUNTIME)\`: 런타임에 리플렉션으로 읽을 수 있음

이 어노테이션 자체는 아무 로직이 없다. ArgumentResolver가 이걸 보고 "내가 처리할 파라미터"라고 판단하는 마커 역할이다.

### 2단계: CurrentAccountArgumentResolver

\`\`\`java
public class CurrentAccountArgumentResolver implements HandlerMethodArgumentResolver {

    private final CurrentAccountResolverSupport support = new CurrentAccountResolverSupport();

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        boolean hasAnnotation = parameter.hasParameterAnnotation(CurrentAccount.class);
        boolean isAccountType = Account.class.isAssignableFrom(parameter.getParameterType());
        return hasAnnotation && isAccountType;
    }

    @Override
    public Object resolveArgument(
            MethodParameter parameter,
            ModelAndViewContainer mavContainer,
            NativeWebRequest webRequest,
            WebDataBinderFactory binderFactory
    ) {
        HttpServletRequest request = webRequest.getNativeRequest(HttpServletRequest.class);
        if (request == null) {
            throw new IllegalStateException("No HttpServletRequest");
        }

        Map<String, String> headers = Collections.list(request.getHeaderNames()).stream()
                .collect(Collectors.toMap(
                        name -> name,
                        request::getHeader
                ));

        return support.resolveFromHeaders(headers);
    }
}
\`\`\`

\`supportsParameter()\`에서 두 가지를 모두 확인한다:

1. \`@CurrentAccount\` 어노테이션이 있는가
2. 파라미터 타입이 \`Account\`인가

둘 다 만족해야 처리한다. 이렇게 하면 \`@CurrentAccount String name\` 같은 실수를 방지할 수 있다.

\`resolveArgument()\`는 HTTP 요청에서 헤더를 꺼내서 \`CurrentAccountResolverSupport\`에 위임한다.

### 3단계: CurrentAccountResolverSupport — 헤더 → Account 변환

\`\`\`java
public class CurrentAccountResolverSupport {

    public Account resolveFromHeaders(Map<String, String> headers) {
        String id = headers.getOrDefault("x-usr-id", "");
        String nickname = headers.getOrDefault("x-usr-nickname", "");
        String role = headers.getOrDefault("x-usr-role", "");
        String status = headers.getOrDefault("x-usr-status", "");

        if (id.isEmpty() || nickname.isEmpty()) {
            throw new IllegalArgumentException(
                "Required headers missing: x-usr-id, x-usr-nickname");
        }

        Account.AccountBuilder builder = Account.builder()
                .id(Long.valueOf(id))
                .nickname(nickname);

        if (!role.isEmpty()) {
            builder.role(AccountRole.valueOf(role));
        }

        if (!status.isEmpty()) {
            builder.status(AccountStatus.valueOf(status));
        }

        return builder.build();
    }
}
\`\`\`

왜 \`resolveArgument()\`에 직접 넣지 않고 Support 클래스로 분리했을까?

**테스트 용이성** 때문이다. \`CurrentAccountResolverSupport\`는 \`HttpServletRequest\`에 의존하지 않고 \`Map<String, String>\`만 받는다. 단위 테스트에서 Mock 없이 순수 Map만 넘기면 된다.

\`\`\`java
// 테스트
Map<String, String> headers = Map.of(
    "x-usr-id", "123",
    "x-usr-nickname", "testuser",
    "x-usr-role", "USER",
    "x-usr-status", "ENABLED"
);

Account account = support.resolveFromHeaders(headers);
assertEquals(123L, account.getId());
\`\`\`


## 등록

ArgumentResolver를 만들었으면 Spring에 등록해야 한다.

\`\`\`java
public class CoreWebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}
\`\`\`

\`WebMvcConfigurer\`의 \`addArgumentResolvers()\`를 오버라이드해서 등록한다. 이 설정 클래스는 core 모듈의 AutoConfiguration을 통해 자동 등록되는데, 이건 별도 글에서 다룬다.


## 최종 결과

Before:

\`\`\`java
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @RequestHeader("x-usr-id") Long userId,
        @RequestHeader("x-usr-nickname") String nickname,
        @RequestHeader("x-usr-role") String role,
        @RequestHeader("x-usr-status") String status,
        @RequestParam("nickname") String targetNickname) {

    Account me = Account.builder()
            .id(userId)
            .nickname(nickname)
            .role(AccountRole.valueOf(role))
            .status(AccountStatus.valueOf(status))
            .build();
    // ...
}
\`\`\`

After:

\`\`\`java
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @CurrentAccount Account me,
        @RequestParam("nickname") String targetNickname) {
    // me.getId(), me.getNickname(), me.getRole(), me.getStatus() 모두 사용 가능
}
\`\`\`

현재 social 서비스에서 \`@CurrentAccount\`를 사용하는 엔드포인트가 7개다. 각각에서 4개 헤더 + Account 조립 코드가 사라졌다.


## 전체 흐름 정리

\`\`\`
클라이언트
  └─ Authorization: Bearer eyJ...

API Gateway (JwtAuthGatewayFilterFactory)
  └─ JWT 검증 → claims 추출
  └─ x-usr-* 헤더 주입 (기존 헤더 strip 후)
  └─ 뒷단 서비스로 라우팅

뒷단 서비스 (social, chat 등)
  └─ DispatcherServlet → HandlerAdapter
  └─ CurrentAccountArgumentResolver
       └─ supportsParameter: @CurrentAccount + Account 타입 확인
       └─ resolveArgument: x-usr-* 헤더 → Account 객체 조립
  └─ 컨트롤러 메서드에 Account 주입
\`\`\`

**Gateway는 JWT → 헤더, ArgumentResolver는 헤더 → Account.** 각 계층이 자기 책임만 갖는다.


## 면접 포인트

면접에서 "Spring MVC의 요청 처리 과정을 설명해 주세요"라는 질문이 나오면, \`DispatcherServlet → HandlerMapping → HandlerAdapter → ArgumentResolver → 컨트롤러\` 흐름을 설명하고, **ArgumentResolver를 직접 구현해서 커스텀 어노테이션으로 인증 정보를 주입해 봤다**고 하면 Spring MVC 내부 동작을 이해하고 있다는 걸 보여줄 수 있다.

핵심은 \`@RequestParam\`, \`@RequestBody\` 같은 기본 어노테이션도 결국 ArgumentResolver로 구현되어 있다는 사실이다. 커스텀 ArgumentResolver를 만든다는 건 Spring이 제공하는 확장 포인트를 이해하고 활용할 수 있다는 뜻이다.
`,bS=Object.freeze(Object.defineProperty({__proto__:null,default:_S},Symbol.toStringTag,{value:"Module"})),yS=`---
summary: MSA 메신저 프로젝트에서 API Gateway가 JWT를 파싱해 x-usr-* 헤더로 사용자 정보를 전달하는 구조에서, 외부 클라이언트가 헤더를 직접 조작해 다른 사용자로 위장할 수 있는 스푸핑 취약점을 발견하고 수정한 과정을 정리했습니다.
tags: Spring Cloud Gateway, Security, JWT, MSA
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 API Gateway의 헤더 스푸핑 취약점을 발견하고 수정한 과정을 정리한 글입니다.


## 구조 먼저 보기

pinguinz는 Spring Cloud Gateway를 앞단에 두고, 뒷단의 auth, social, chat 서비스로 요청을 라우팅하는 구조다.

인증이 필요한 요청은 이런 흐름으로 처리된다:

\`\`\`
클라이언트 → API Gateway (JWT 검증 → x-usr-* 헤더 주입) → 뒷단 서비스
\`\`\`

Gateway의 \`JwtAuthGatewayFilterFactory\`가 Authorization 헤더에서 JWT를 꺼내고, 검증이 통과하면 토큰의 claims를 \`x-usr-id\`, \`x-usr-nickname\`, \`x-usr-role\`, \`x-usr-status\` 헤더로 변환해서 뒷단 서비스에 전달한다.

뒷단 서비스는 이 헤더를 읽어서 \`Account\` 객체로 변환한다. core 모듈의 \`CurrentAccountArgumentResolver\`가 이 역할을 한다.

\`\`\`java
// 뒷단 서비스의 컨트롤러
@PostMapping("/request")
public ResponseEntity<ApiResponse<Void>> sendFriendRequest(
        @CurrentAccount Account requester,  // ← x-usr-* 헤더에서 자동 변환
        @RequestParam("nickname") String accepterNickname) {
    // ...
}
\`\`\`

문제는 이 구조에서 Gateway가 기존 헤더를 정리하지 않았다는 점이다.


## 취약점: 헤더 스푸핑

수정 전 Gateway 필터 코드:

\`\`\`java
ServerHttpRequest mutatedRequest = request.mutate()
        .header("x-usr-id", xUserId)
        .header("x-usr-nickname", xUserNickname)
        .header("x-usr-role", xUserRole)
        .header("x-usr-status", xUserStatus)
        .build();
\`\`\`

Spring의 \`ServerHttpRequest.mutate().header()\`는 기존 헤더를 **덮어쓰지 않고 추가**한다. 하지만 이건 핵심이 아니다.

진짜 문제는 JwtAuth 필터가 적용되지 않는 라우트에 있었다.

\`\`\`yaml
# application.yaml
routes:
  - id: auth-v1
    uri: lb://auth
    predicates:
      - Path=/api/v1/auth/**
    # filters 없음 — JwtAuth 미적용

  - id: friends-v1
    uri: lb://social
    predicates:
      - Path=/api/v1/friends/**
    filters:
      - JwtAuth  # ← 여기만 적용
\`\`\`

\`/api/v1/auth/**\` 라우트에는 JwtAuth 필터가 없다. 로그인/회원가입은 인증 없이 접근해야 하니까 당연하다. 그런데 이 경우, 클라이언트가 \`x-usr-id: 1\` 같은 헤더를 직접 넣어 보내면 **Gateway를 그대로 통과해서 뒷단까지 전달된다**.

auth 서비스의 컨트롤러가 \`@CurrentAccount\`를 사용하는 엔드포인트가 있다면, 인증 없이 다른 사용자로 위장할 수 있는 셈이다.

JwtAuth 필터가 적용된 라우트에서도 \`.header()\`의 추가 동작 때문에 헤더가 중복될 수 있다. 대부분의 프레임워크가 첫 번째 값을 읽기 때문에 실질적 공격은 어렵지만, 깔끔하지 않다.


## 수정: 기존 헤더를 먼저 제거한다

\`\`\`java
// [#2] 외부에서 주입된 x-usr-* 헤더를 먼저 제거한 뒤, JWT에서 파싱한 값으로 덮어씀.
// 이렇게 하지 않으면 클라이언트가 x-usr-id 등을 직접 세팅하여 다른 사용자로 위장 가능.
ServerHttpRequest mutatedRequest = request.mutate()
        .headers(h -> {
            h.remove("x-usr-id");
            h.remove("x-usr-nickname");
            h.remove("x-usr-role");
            h.remove("x-usr-status");
        })
        .header("x-usr-id", xUserId)
        .header("x-usr-nickname", xUserNickname)
        .header("x-usr-role", xUserRole)
        .header("x-usr-status", xUserStatus)
        .build();
\`\`\`

\`.headers(h -> { h.remove(...) })\`로 기존 헤더를 strip한 뒤, JWT에서 파싱한 값만 새로 세팅한다.

이렇게 하면 JwtAuth 필터를 거치는 라우트에서는 외부 헤더가 무시되고 JWT 값만 전달된다.


## JwtAuth 필터가 없는 라우트는?

\`/api/v1/auth/**\`처럼 인증 없이 접근하는 라우트는 JwtAuth 필터 자체를 안 거치므로, 위 수정만으로는 방어가 안 된다.

이 경우를 대비해서 두 가지 방법이 있다:

### 방법 1: 글로벌 필터로 x-usr-* 헤더를 일괄 strip

\`\`\`java
@Component
public class StripInternalHeadersFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest().mutate()
                .headers(h -> {
                    h.remove("x-usr-id");
                    h.remove("x-usr-nickname");
                    h.remove("x-usr-role");
                    h.remove("x-usr-status");
                })
                .build();

        return chain.filter(exchange.mutate().request(request).build());
    }

    @Override
    public int getOrder() {
        return Ordered.HIGHEST_PRECEDENCE;  // 다른 필터보다 먼저 실행
    }
}
\`\`\`

모든 요청에서 \`x-usr-*\` 헤더를 먼저 제거한다. 이후 JwtAuth 필터가 적용된 라우트에서만 JWT 파싱 후 다시 세팅한다. 가장 확실한 방법이다.

### 방법 2: 뒷단 서비스에서 직접 접근 차단

뒷단 서비스가 Gateway를 통해서만 접근 가능하도록 네트워크 레벨에서 차단하고, Gateway만 신뢰한다. 하지만 개발 환경에서는 직접 접근하는 경우가 많아서 이것만으로는 부족하다.

현재는 JwtAuth 필터 내 strip 처리를 적용했고, 글로벌 필터는 이후 추가를 고려하고 있다.


## 수정 전후 비교

**수정 전:**

\`\`\`
클라이언트: x-usr-id: 999 (조작)
  → Gateway: JWT 검증 후 x-usr-id: 1 추가 (기존 999는 남아있음)
  → 뒷단 서비스: x-usr-id 헤더가 [999, 1] 두 개
\`\`\`

**수정 후:**

\`\`\`
클라이언트: x-usr-id: 999 (조작)
  → Gateway: 기존 x-usr-* 제거 → JWT에서 파싱한 x-usr-id: 1만 세팅
  → 뒷단 서비스: x-usr-id: 1 (신뢰 가능)
\`\`\`


## 정리

내부 서비스 간 통신에 사용하는 헤더는 외부에서 절대로 주입할 수 없어야 한다. Gateway가 JWT를 검증하는 것만으로는 부족하고, **기존 헤더를 strip하는 과정이 반드시 필요하다**. 이건 Spring Cloud Gateway뿐 아니라 Nginx, Envoy 등 어떤 리버스 프록시를 쓰든 동일하게 적용되는 원칙이다.
`,vS=Object.freeze(Object.defineProperty({__proto__:null,default:yS},Symbol.toStringTag,{value:"Module"})),SS=`---
summary: MSA 메신저 프로젝트에서 API 응답 구조를 통일하기 위해 ApiResponse<T>와 ResultCode 인터페이스를 설계한 과정을 정리했습니다. 기존 엔드포인트마다 달랐던 Response 클래스를 하나로 합치고, 클라이언트(Electron/React)에서 일관된 파싱이 가능하도록 만든 결정 과정을 다룹니다.
tags: Spring Boot, MSA, API 설계
references:
created_date: 2026-03-11T00:00:00.000Z
last_modified_date: 2026-03-11T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 API 공통 응답 구조를 설계하면서 고민했던 내용을 정리한 글입니다.


## 문제: 응답 구조가 제각각이었다

기존에는 API마다 별도의 Response 클래스를 만들어 사용했다.

- \`LoginResponse\` — code, message를 String으로 직접 저장, token 필드 추가
- \`SignUpResponse\` — code, message를 String으로 직접 저장
- \`VerificationResponse\` — Status enum을 그대로 보유하고 getter로 위임

같은 패턴인데 구현 방식이 3개 다 달랐다. API가 늘어날수록 Response 클래스도 계속 생겨야 했고, 클라이언트에서도 API마다 다른 응답 형태를 처리해야 하는 문제가 있었다.


## 결정: 공통 응답 래퍼 + 도메인별 Status enum

### 핵심 구조

**ResultCode 인터페이스** — 모든 Status enum이 구현할 계약

\`\`\`java
public interface ResultCode {
    String getCode();
    String getMessage();
}
\`\`\`

**ApiResponse\\<T>** — 모든 API가 사용하는 공통 응답 래퍼

\`\`\`java
public class ApiResponse<T> {
    private final String code;
    private final String message;
    private T data;
}
\`\`\`

### 왜 StatusCode가 아니라 ResultCode인가

처음에는 \`StatusCode\`로 이름을 지었는데, HTTP Status Code와 혼동될 수 있었다. \`ResultCode\`는 "비즈니스 처리 결과 코드"라는 의미가 바로 읽히고, \`LoginStatus\`, \`SignUpStatus\` 같은 enum 이름과도 자연스럽게 어울린다.

### 패키지 위치

\`core/common/api/\` 패키지에 배치했다. 이미 core 모듈이 모든 서비스의 공유 라이브러리 역할을 하고 있고, \`JwtUtil\`, \`MaskingUtil\` 등 cross-cutting 관심사가 여기 있으므로 같은 성격인 \`ApiResponse\`도 여기가 적합하다.

대규모 MSA에서는 API 계약과 JPA 엔티티를 별도 모듈로 분리하는 경우도 있지만, 현재 규모에서는 과분리다.


## data가 null일 때 응답에서 제외하기

\`data\`가 없는 API(회원가입 등)에서 \`"data": null\`이 응답에 포함되는 것이 깔끔하지 않았다. \`@JsonInclude(JsonInclude.Include.NON_NULL)\`을 클래스 레벨에 적용하면, data가 null일 때 필드 자체가 응답에서 빠진다.

\`\`\`json
// 회원가입 성공 — data 없음
{"code": "SIGN_UP_0000", "message": "Account registration completed successfully."}

// 로그인 성공 — data 있음
{"code": "LOGIN_0000", "message": "...", "data": {"tokenType": "Bearer", ...}}
\`\`\`


## data 없는 경우의 제네릭 타입

data가 필요 없는 API에서 \`ResponseEntity<ApiResponse<Void>>\`는 보기 좋지 않았다. 팩토리 메서드 반환 타입에 와일드카드를 사용하면 깔끔해진다.

\`\`\`java
// data 없는 경우
public static ApiResponse<?> of(ResultCode result) { ... }

// data 있는 경우
public static <T> ApiResponse<T> of(ResultCode result, T data) { ... }
\`\`\`

컨트롤러에서:
\`\`\`java
// 로그인
public ResponseEntity<ApiResponse<Token>> login(...) { ... }

// 회원가입
public ResponseEntity<ApiResponse<?>> signUp(...) { ... }
\`\`\`


## ResponseEntity로 감싸는 이유

\`ResponseEntity\`는 HTTP 레벨(상태코드, 헤더), \`ApiResponse\`는 비즈니스 레벨(결과코드, 메시지, 데이터)을 담당한다. 역할이 다르므로 \`ResponseEntity<ApiResponse<T>>\` 형태가 권장된다.

클라이언트 입장에서:
1. HTTP 상태코드로 먼저 성공/실패 분기 (axios interceptor 등)
2. \`code\` 필드로 세부 실패 사유 처리 (UI 메시지 분기)


## 적용 결과

기존 \`LoginResponse\`, \`SignUpResponse\` 등 개별 Response 클래스를 삭제하고, 모든 API가 \`ApiResponse<T>\`를 사용하도록 통일했다. Status enum은 \`implements ResultCode\`만 추가하면 되므로 기존 코드 변경이 최소화되었다.
`,TS=Object.freeze(Object.defineProperty({__proto__:null,default:SS},Symbol.toStringTag,{value:"Module"})),xS=`---
summary: Spring Boot 3의 @AutoConfiguration을 사용해 공유 core 모듈의 GlobalExceptionHandler, ArgumentResolver, WebMvcConfig를 뒷단 서비스에 자동 등록하는 구조를 설계한 과정을 정리했습니다. @ConditionalOnWebApplication으로 Reactive 서비스 충돌을 방지하고, optional 의존성으로 core 모듈의 의존 범위를 최소화한 경험을 다룹니다.
tags: Spring Boot, AutoConfiguration, MSA, Spring Cloud
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 core 모듈의 AutoConfiguration을 설계한 과정을 정리한 글입니다.


## 문제: 서비스마다 같은 설정을 반복한다

MSA 프로젝트에서 여러 서비스가 공통 기능을 공유한다.

\`\`\`
auth 서비스 → GlobalExceptionHandler, @CurrentAccount, JwtUtil
social 서비스 → GlobalExceptionHandler, @CurrentAccount, JwtUtil
chat 서비스 → GlobalExceptionHandler, @CurrentAccount, JwtUtil
\`\`\`

이 기능들을 core 모듈에 모아두고, 각 서비스가 core를 의존하면 코드 중복은 해결된다. 하지만 **설정 등록은 여전히 각 서비스에서 해야 한다.**

\`\`\`java
// auth 서비스의 WebMvcConfig
@Configuration
public class AuthWebConfig implements WebMvcConfigurer {
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}

// social 서비스의 WebMvcConfig — 똑같은 코드
@Configuration
public class SocialWebConfig implements WebMvcConfigurer {
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}
\`\`\`

\`GlobalExceptionHandler\`도 마찬가지다. \`@RestControllerAdvice\`는 해당 패키지를 스캔해야 등록되는데, core 모듈의 패키지를 각 서비스가 \`@ComponentScan\`에 포함해야 한다.

서비스가 2개일 때는 참을 수 있지만, 4개, 8개가 되면 관리가 안 된다. 새로운 공통 기능이 추가될 때마다 모든 서비스를 수정해야 한다.


## 해결: Spring Boot AutoConfiguration

Spring Boot의 AutoConfiguration은 **의존성만 추가하면 설정이 자동으로 적용**되는 메커니즘이다. \`spring-boot-starter-web\`을 추가하면 Tomcat, DispatcherServlet, Jackson이 자동 설정되는 것과 같은 원리다.

core 모듈도 이 방식을 적용하면, 서비스는 \`pinguinz-core\` 의존성만 추가하면 된다.


## 구현

### 1단계: AutoConfiguration 클래스

\`\`\`java
@AutoConfiguration
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
@Import({GlobalExceptionHandler.class, CoreWebMvcConfig.class})
public class CoreAutoConfiguration {
}
\`\`\`

세 줄이 전부다. 하나씩 보자.

**\`@AutoConfiguration\`**: Spring Boot 3에서 도입된 어노테이션. 이 클래스가 자동 설정 후보라는 걸 선언한다. Spring Boot 2에서는 \`@Configuration\`을 쓰고 \`spring.factories\`에 등록했는데, 3부터는 \`@AutoConfiguration\`과 별도 imports 파일을 사용한다.

**\`@ConditionalOnWebApplication(type = SERVLET)\`**: Servlet 기반 웹 애플리케이션에서만 활성화된다. 이게 핵심이다. pinguinz의 API Gateway는 **Spring Cloud Gateway(Reactive/WebFlux)** 기반이다. \`WebMvcConfigurer\`는 Servlet 전용이라 Reactive 환경에서 등록하면 충돌이 발생한다.

\`\`\`
auth (Servlet)    → CoreAutoConfiguration 활성화 ✓
social (Servlet)  → CoreAutoConfiguration 활성화 ✓
api-gateway (Reactive) → CoreAutoConfiguration 비활성화 ✓
\`\`\`

**\`@Import\`**: 지정한 클래스들을 Spring 컨텍스트에 빈으로 등록한다. \`@ComponentScan\` 없이도 특정 클래스를 명시적으로 가져올 수 있다.

### 2단계: imports 파일 등록

\`\`\`
src/main/resources/META-INF/spring/
  org.springframework.boot.autoconfigure.AutoConfiguration.imports
\`\`\`

파일 내용:

\`\`\`
kr.co.baklibra26.pinguinz.core.common.config.CoreAutoConfiguration
\`\`\`

Spring Boot가 시작될 때 이 파일을 읽고, 등록된 클래스를 자동 설정 후보로 인식한다. 이전의 \`spring.factories\`를 대체하는 방식이다.

### 3단계: Import되는 클래스들

**GlobalExceptionHandler** — 전역 예외 처리:

\`\`\`java
@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final ResultCode INVALID_INPUT = new ResultCode() {
        @Override
        public String getCode() { return "COMMON_0001"; }
        @Override
        public String getMessage() { return "One or more fields are invalid."; }
    };

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Void>> handleValidationException(
            MethodArgumentNotValidException ex) {
        return ResponseEntity.badRequest().body(ApiResponse.of(INVALID_INPUT));
    }
}
\`\`\`

\`@Valid\` 검증 실패 시 모든 서비스가 동일한 포맷(\`COMMON_0001\`)으로 응답한다. 각 서비스에서 별도로 처리하지 않아도 된다.

**CoreWebMvcConfig** — ArgumentResolver 등록:

\`\`\`java
public class CoreWebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}
\`\`\`

\`@CurrentAccount\`가 모든 Servlet 서비스에서 동작하게 된다.


## optional 의존성으로 core 모듈 가볍게 유지하기

core 모듈의 \`pom.xml\`을 보면:

\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <optional>true</optional>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
    <optional>true</optional>
</dependency>
\`\`\`

\`<optional>true</optional>\`가 붙어 있다. 이게 뭘 의미하는가?

**core 모듈을 의존하는 서비스에게 이 의존성이 전이되지 않는다.** core 모듈의 \`WebMvcConfigurer\` 구현에는 \`spring-boot-starter-web\`이 필요하지만, core를 사용하는 서비스가 반드시 web 모듈을 사용하는 건 아니다.

\`\`\`
core 모듈
  ├─ spring-boot-starter-web (optional) → 컴파일에만 사용
  ├─ spring-boot-starter-validation (optional)
  ├─ jakarta.persistence-api → 전이됨 (Entity 정의에 필요)
  └─ jjwt → 전이됨 (JWT 처리에 필요)

auth 서비스
  ├─ pinguinz-core
  ├─ spring-boot-starter-web ← 자기가 직접 의존 (core에서 전이 안 됨)
  └─ spring-boot-starter-validation ← 자기가 직접 의존

api-gateway
  ├─ pinguinz-core
  └─ spring-cloud-starter-gateway ← web 대신 Reactive
     (spring-boot-starter-web을 가져오지 않음 → 충돌 없음)
\`\`\`

만약 \`optional\`을 빼면, api-gateway가 core를 의존하는 순간 \`spring-boot-starter-web\`이 전이되어 Servlet과 Reactive가 동시에 올라가는 문제가 생긴다.


## @ConditionalOnWebApplication이 없으면 어떻게 되는가

\`@ConditionalOnWebApplication(type = SERVLET)\`을 빼면 어떤 일이 벌어지는지 보자.

API Gateway는 Spring Cloud Gateway 기반(Reactive)이다. \`CoreAutoConfiguration\`이 활성화되면:

1. \`CoreWebMvcConfig\`(WebMvcConfigurer 구현체)가 등록됨
2. Spring이 WebMvcConfigurer 빈을 감지하고 Servlet MVC 설정을 시작
3. Reactive 환경에서 Servlet MVC 설정이 충돌
4. \`ApplicationContext\` 초기화 실패

\`\`\`
***************************
APPLICATION FAILED TO START
***************************
Description:
Web application could not be started as it was not Servlet-based.
\`\`\`

\`@ConditionalOnWebApplication(type = SERVLET)\`은 이걸 방지한다. Reactive 서비스에서는 \`CoreAutoConfiguration\` 자체가 비활성화되어, \`@Import\`에 나열된 클래스들도 등록되지 않는다.


## AutoConfiguration의 동작 순서

Spring Boot가 시작되면:

\`\`\`
1. @SpringBootApplication 스캔
   └─ 서비스 내부의 @Component, @Configuration 등록

2. AutoConfiguration 로딩
   └─ META-INF/spring/...AutoConfiguration.imports 파일 읽기
   └─ CoreAutoConfiguration 발견

3. 조건 평가
   └─ @ConditionalOnWebApplication(SERVLET) → Servlet 환경? → true/false
   └─ true → CoreAutoConfiguration 활성화
   └─ false → 건너뜀

4. @Import 처리
   └─ GlobalExceptionHandler → 빈 등록
   └─ CoreWebMvcConfig → 빈 등록 → addArgumentResolvers() 호출
\`\`\`

서비스 개발자가 해야 하는 건: **core 의존성 추가**. 끝.

\`\`\`xml
<dependency>
    <groupId>kr.co.baklibra26.pinguinz</groupId>
    <artifactId>pinguinz-core</artifactId>
    <version>\${project.version}</version>
</dependency>
\`\`\`


## 새 공통 기능을 추가할 때

예를 들어, 모든 서비스에 공통 로깅 인터셉터를 추가하고 싶다면:

1. core 모듈에 \`RequestLoggingInterceptor\` 작성
2. \`CoreWebMvcConfig\`에 인터셉터 등록 추가
3. 끝. 모든 Servlet 서비스에 자동 적용

\`\`\`java
public class CoreWebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new RequestLoggingInterceptor());
    }
}
\`\`\`

개별 서비스를 건드리지 않는다.


## 정리

| 구성 요소 | 역할 |
|----------|------|
| \`@AutoConfiguration\` | 자동 설정 후보 선언 (Spring Boot 3) |
| \`@ConditionalOnWebApplication(SERVLET)\` | Reactive 서비스 충돌 방지 |
| \`@Import\` | GlobalExceptionHandler + CoreWebMvcConfig 명시적 등록 |
| \`AutoConfiguration.imports\` 파일 | Spring Boot에 AutoConfiguration 클래스 위치 알림 |
| \`<optional>true</optional>\` | 의존성 전이 차단 → 모듈 간 결합도 최소화 |

면접에서 "AutoConfiguration이 뭔가요?"라는 질문에 "의존성 추가하면 자동으로 설정되는 거요"라고 하면 50점이다. **imports 파일로 후보를 등록하고, \`@Conditional\` 계열로 활성화 조건을 제어하고, \`@Import\`로 빈을 명시적으로 가져온다는 것까지 설명**하면, Spring Boot의 핵심 메커니즘을 이해하고 있다는 걸 보여줄 수 있다. 특히 MSA 환경에서 **Servlet과 Reactive 서비스가 공존할 때 \`@ConditionalOnWebApplication\`이 왜 필요한지**를 실제 경험으로 설명할 수 있다는 건 큰 차별점이다.
`,AS=Object.freeze(Object.defineProperty({__proto__:null,default:xS},Symbol.toStringTag,{value:"Module"})),CS=`---
summary: GitHub Pages로 올린 개인 블로그에 댓글 기능을 붙이기 위해 Utterances, Disqus, Giscus 같은 도구들을 비교해 보고, 그중 Giscus를 선택한 이유와 실제 적용 방법을 정리한 글입니다. 
tags: 
references: 
created_date: 2026-03-01T15:09:52.000Z
last_modified_date: 2026-03-01T15:09:52.000Z
visibility: hidden
---


> 


## 전체 아키텍처 한눈에 보기

### 로그인 플로우 정리 (클라이언트 → 게이트웨이 → Auth)

### 왜 JWT 로 인증을 선택했나

## JWT 구현하기


### Access/Refresh 토큰 설계와 만료 정책

### 토큰 발급/검증 구현 (Auth 서버)

### 클라이언트(Electron + React)에서 토큰 관리 전략

### API 게이트웨이에서 인증/인가 처리

### 채팅 서버에서 사용자 식별하기
`,ES=Object.freeze(Object.defineProperty({__proto__:null,default:CS},Symbol.toStringTag,{value:"Module"})),RS=`---
summary: 이메일 인증 시스템에서 Redis SETEX와 INCR을 사용해 60초 쿨다운 + 일일 3회 제한의 이중 Rate Limiting을 구현한 과정을 정리했습니다. Redis 키 설계, 이메일 해싱, MailType enum을 통한 메타데이터 관리까지 다룹니다.
tags: Redis, Spring Boot, Rate Limiting, Security
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 이메일 인증 요청에 Rate Limiting을 적용한 과정을 정리한 글입니다.


## 왜 Rate Limiting이 필요한가

이메일 인증 API는 아무 인증 없이 호출할 수 있다. 로그인 전이니까 당연하다. 그런데 이걸 아무 제한 없이 열어두면 문제가 생긴다.

- **메일 폭탄**: 공격자가 특정 이메일 주소로 수천 건의 인증 메일을 발송
- **비용 문제**: 메일 발송은 외부 SMTP 서버를 사용하므로 건당 비용이 발생
- **이메일 열거 공격**: 존재하는 이메일인지 응답 차이로 추론 (이건 별도로 방어하지만, 속도를 늦추는 것만으로도 효과적)

필요한 건 두 가지다:

1. **쿨다운**: 같은 요청을 연속으로 보내지 못하게 (60초)
2. **일일 제한**: 하루에 보낼 수 있는 횟수를 제한 (3회)


## Redis 키 설계

먼저 키 구조를 정했다. 이메일 인증과 비밀번호 재설정이 같은 Rate Limiting 로직을 공유하지만, 키는 분리되어야 한다.

\`\`\`java
public class VerificationRedisKeys {

    public static String cooldown(MailType type, String email) {
        return key(type, "cooldown", email);
    }

    public static String dailyCount(MailType type, String email) {
        return key(type, "count", email);
    }

    public static String token(MailType type, String email) {
        return key(type, "token", email);
    }

    private static String key(MailType type, String purpose, String email) {
        return String.join(":", type.prefix, purpose, hash(email));
    }

    private static String hash(String email) {
        return DigestUtils.md5DigestAsHex(email.getBytes(StandardCharsets.UTF_8));
    }
}
\`\`\`

실제로 생성되는 키:

\`\`\`
verify:cooldown:5d41402abc4b2a76b9719d911017c592   ← 이메일 인증 쿨다운
verify:count:5d41402abc4b2a76b9719d911017c592       ← 이메일 인증 일일 카운트
verify:token:5d41402abc4b2a76b9719d911017c592       ← 인증 토큰

reset:cooldown:5d41402abc4b2a76b9719d911017c592     ← 비밀번호 재설정 쿨다운
reset:count:5d41402abc4b2a76b9719d911017c592        ← 비밀번호 재설정 일일 카운트
reset:token:5d41402abc4b2a76b9719d911017c592        ← 재설정 토큰
\`\`\`

### 이메일을 왜 해싱하는가

Redis 키에 이메일 원문을 넣으면 \`KEYS\` 명령이나 모니터링 도구에서 사용자의 이메일이 그대로 노출된다. MD5로 해싱하면 키만 봐서는 누구의 이메일인지 알 수 없다.

보안 해시(SHA-256 등)가 아니라 MD5를 쓴 이유는, 이건 식별용이지 보안용이 아니기 때문이다. 속도가 빠르고 충돌 확률이 극히 낮으면 충분하다.


## MailType enum: 메타데이터를 타입에 담기

이메일 인증과 비밀번호 재설정은 로직이 거의 같지만 세부사항이 다르다.

\`\`\`java
public enum MailType {
    EMAIL_VERIFY("verify", AccountStatus.PENDING, 60L),    // 60분 토큰
    PASSWORD_RESET("reset", AccountStatus.ENABLED, 30L);   // 30분 토큰

    public final String prefix;        // Redis 키 접두사
    public final AccountStatus status; // 대상 계정 상태
    public final long ttl;             // 토큰 만료 시간 (분)
}
\`\`\`

하나의 enum에 세 가지 메타데이터를 담았다:

- \`prefix\`: Redis 키 네임스페이스 분리
- \`status\`: 이메일 인증은 PENDING 계정만, 비밀번호 재설정은 ENABLED 계정만
- \`ttl\`: 인증 토큰의 유효 시간

이렇게 하면 서비스 코드에서 \`if (type == EMAIL_VERIFY)\` 같은 분기가 필요 없다. \`type.status\`로 바로 계정을 조회하고, \`type.ttl\`로 바로 TTL을 설정한다.

\`\`\`java
// MailType에 따라 자동으로 올바른 계정 상태를 조회
Optional<Account> optional = accountRepository
    .findAccountByEmailAndStatus(email, type.status);

// MailType에 따라 자동으로 올바른 TTL 설정
redisTemplate.opsForValue()
    .set(VerificationRedisKeys.token(type, email), token, type.ttl, TimeUnit.MINUTES);
\`\`\`


## Rate Limiting 구현

### 전체 코드

\`\`\`java
private VerificationMailResult checkRateLimit(MailType type, String email) {
    // 1. 쿨다운 체크 (60초)
    Boolean ifAbsent = redisTemplate.opsForValue()
            .setIfAbsent(VerificationRedisKeys.cooldown(type, email), "1", 60, TimeUnit.SECONDS);

    if (Boolean.FALSE.equals(ifAbsent)) {
        return VerificationMailResult.FAILED_BY_COOLDOWN;
    }

    // 2. 일일 카운트 체크 (3회)
    String countKey = VerificationRedisKeys.dailyCount(type, email);
    Long count = redisTemplate.opsForValue().increment(countKey);

    if (count != null && count == 1) {
        redisTemplate.expire(countKey, 1, TimeUnit.DAYS);
    }

    if (count == null || count > DAILY_LIMIT) {
        return VerificationMailResult.FAILED_BY_EXCEED_DAY_LIMIT;
    }

    return VerificationMailResult.SUCCESS;
}
\`\`\`

### 1단계: 쿨다운 — \`SETEX\` + \`NX\`

\`\`\`java
Boolean ifAbsent = redisTemplate.opsForValue()
        .setIfAbsent(cooldownKey, "1", 60, TimeUnit.SECONDS);
\`\`\`

Redis의 \`SET key value EX 60 NX\` 명령에 대응한다.

- \`NX\` (Not eXists): 키가 없을 때만 설정
- \`EX 60\`: 60초 후 자동 만료

동작:
- 키가 없음 → 설정 성공 → \`true\` 반환 → 요청 통과
- 키가 있음 → 설정 실패 → \`false\` 반환 → 쿨다운 중

**이 한 줄이 원자적(atomic)이다.** \`GET\` → 없으면 → \`SET\` 방식으로 하면 두 요청이 동시에 통과할 수 있지만, \`SETNX\`는 Redis가 단일 스레드로 처리하므로 동시성 문제가 없다.

### 2단계: 일일 카운트 — \`INCR\` + \`EXPIRE\`

\`\`\`java
Long count = redisTemplate.opsForValue().increment(countKey);

if (count != null && count == 1) {
    redisTemplate.expire(countKey, 1, TimeUnit.DAYS);
}

if (count == null || count > DAILY_LIMIT) {
    return FAILED_BY_EXCEED_DAY_LIMIT;
}
\`\`\`

Redis의 \`INCR\` 명령에 대응한다.

- \`INCR\`: 키가 없으면 0에서 시작해서 1로 증가. 있으면 기존 값에 +1.
- 카운트가 1일 때(첫 요청)만 \`EXPIRE\`로 TTL을 설정

동작:
- 첫 번째 요청: count=1 → TTL 1일 설정 → 통과
- 두 번째 요청: count=2 → 통과
- 세 번째 요청: count=3 → 통과
- 네 번째 요청: count=4 → \`count > 3\` → 제한 초과
- 다음 날: 키 자동 만료 → 카운트 리셋

### INCR과 EXPIRE의 원자성 문제

여기서 미묘한 문제가 있다. \`INCR\`과 \`EXPIRE\`는 별도의 명령이다. 만약 \`INCR\` 직후 서버가 죽으면 \`EXPIRE\`가 실행되지 않아서 카운트 키가 영원히 남는다.

실무에서 이걸 완벽히 해결하려면 Lua 스크립트를 쓴다:

\`\`\`lua
local count = redis.call('INCR', KEYS[1])
if count == 1 then
    redis.call('EXPIRE', KEYS[1], ARGV[1])
end
return count
\`\`\`

현재 프로젝트에서는 카운트가 무한히 남아도 "일일 제한 초과"로 처리될 뿐 보안 문제는 아니므로, 단순 구현으로 충분하다고 판단했다.


## 전체 흐름

\`\`\`java
public VerificationMailResult requestMail(MailType type, String email) {
    // 1. 계정 존재 확인 (type.status에 맞는 계정만)
    Optional<Account> optional = accountRepository
        .findAccountByEmailAndStatus(email, type.status);
    if (optional.isEmpty()) {
        return FAILED_BY_INVALID_EMAIL;
    }

    // 2. Rate Limit 체크
    VerificationMailResult rateLimitResult = checkRateLimit(type, email);
    if (!rateLimitResult.equals(SUCCESS)) {
        return rateLimitResult;
    }

    // 3. 인증 토큰 생성 및 Redis 저장
    String token = UUID.randomUUID().toString();
    redisTemplate.opsForValue()
        .set(VerificationRedisKeys.token(type, email), token, type.ttl, TimeUnit.MINUTES);

    // 4. 메일 발송
    emailService.sendMail(type, account, token);

    return SUCCESS;
}
\`\`\`

순서가 중요하다:

1. **계정 확인이 먼저**: 존재하지 않는 이메일이면 Redis 연산 자체를 하지 않는다
2. **Rate Limit이 토큰 생성보다 먼저**: 제한 초과 시 토큰을 만들지 않는다
3. **Redis 저장이 메일 발송보다 먼저**: 토큰이 저장된 상태에서 메일이 나가야, 사용자가 링크를 클릭했을 때 검증할 수 있다


## Redis 키 상태 예시

\`user@example.com\`이 이메일 인증을 3번 요청했을 때:

\`\`\`
verify:cooldown:5d414...  →  "1"       TTL: 42초 남음
verify:count:5d414...     →  "3"       TTL: 23시간 남음
verify:token:5d414...     →  "uuid..." TTL: 58분 남음
\`\`\`

4번째 요청이 오면:
- 쿨다운 체크 → 42초 남아서 \`FAILED_BY_COOLDOWN\`
- (쿨다운이 풀린 후) 일일 카운트 체크 → count=4 > 3이므로 \`FAILED_BY_EXCEED_DAY_LIMIT\`


## 정리

| 계층 | Redis 명령 | TTL | 목적 |
|------|-----------|-----|------|
| 쿨다운 | \`SET ... NX EX 60\` | 60초 | 연속 요청 방지 |
| 일일 제한 | \`INCR\` + \`EXPIRE\` | 1일 | 하루 3회 제한 |
| 인증 토큰 | \`SET ... EX\` | 30~60분 (MailType별) | 일회용 인증 링크 |

면접에서 "Rate Limiting을 어떻게 구현하나요?"라는 질문에 Token Bucket이나 Sliding Window 같은 알고리즘 이름만 대는 건 누구나 할 수 있다. **Redis의 원자적 명령(\`SETNX\`, \`INCR\`)을 조합해서 실제로 구현해 보고, 동시성 문제와 장애 시나리오까지 고려해 봤다는 게 차이점이다.**
`,MS=Object.freeze(Object.defineProperty({__proto__:null,default:RS},Symbol.toStringTag,{value:"Module"})),OS=`---
summary: JWT Refresh Token을 안전하게 관리하기 위해 Redis Whitelist + Token Rotation + JTI 기반 탈취 감지를 설계하고 구현한 과정을 정리했습니다. 왜 Stateless RT가 위험한지, 블랙리스트 대신 화이트리스트를 선택한 이유, 그리고 탈취자가 다른 deviceId를 사용하는 경우까지 방어하는 로직을 다룹니다.
tags: JWT, Redis, Spring Boot, Security, Token Rotation
references:
  - https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 Refresh Token 전략을 설계하고 구현한 과정을 정리한 글입니다.


## Access Token만으로는 부족하다

JWT 기반 인증에서 Access Token(이하 AT)은 보통 15분~1시간으로 짧게 설정한다. 짧은 수명 덕분에 탈취되더라도 피해 시간이 제한되지만, 사용자가 15분마다 로그인해야 한다면 UX가 망가진다.

그래서 Refresh Token(이하 RT)이 필요하다. AT가 만료되면 RT로 새 AT를 발급받고, 사용자는 로그인 상태를 유지한다.

문제는 RT의 수명이 보통 7일~30일로 길다는 것이다. **RT가 탈취되면 그 기간 동안 공격자가 마음대로 새 AT를 발급받을 수 있다.**


## 세 가지 선택지

RT를 어떻게 관리할지 크게 세 가지 방식이 있다.

### 1. Stateless (서명만 검증)

\`\`\`
클라이언트 → RT 전달 → 서버: JWT 서명 검증만 → 새 AT 발급
\`\`\`

가장 단순하지만, 서버가 RT를 무효화할 방법이 없다. 탈취된 RT를 막으려면 JWT secret을 바꿔야 하는데, 그러면 모든 사용자의 토큰이 무효화된다.

### 2. 블랙리스트 (차단 목록)

\`\`\`
로그아웃 시 → RT를 Redis 블랙리스트에 등록
refresh 시 → 블랙리스트에 있으면 거부
\`\`\`

로그아웃은 처리할 수 있지만, **탈취 사실을 모르면 블랙리스트에 등록할 수가 없다.** 즉, 탈취 감지 능력이 없다.

### 3. 화이트리스트 (허용 목록) ← 선택

\`\`\`
로그인 시 → RT의 식별자를 Redis에 저장
refresh 시 → Redis에 저장된 값과 일치하는지 검증
\`\`\`

**Redis에 등록된 토큰만 유효하다.** 서버가 언제든 특정 사용자의 RT를 삭제해서 즉시 무효화할 수 있다.

### 왜 화이트리스트인가

| 기준 | Stateless | 블랙리스트 | 화이트리스트 |
|------|-----------|-----------|------------|
| 즉시 무효화 | X | O | O |
| 탈취 감지 | X | X | **O (Token Rotation)** |
| 저장 비용 | 없음 | 차단된 토큰만 | 활성 토큰만 |
| 자동 정리 | - | TTL 필요 | **TTL로 자동 만료** |

pinguinz는 이미 이메일 인증에 Redis를 사용하고 있어서 인프라 추가 비용이 없었고, TTL을 걸면 만료된 토큰이 자동으로 사라지니 배치 정리도 필요 없었다.


## Token Rotation: 탈취를 감지하는 방법

화이트리스트만으로는 "누군가 내 RT를 쓰고 있다"는 사실을 알 수 없다. 여기서 **Token Rotation**이 등장한다.

핵심 아이디어: **RT를 사용할 때마다 새 RT를 발급하고, 기존 RT는 즉시 무효화한다.**

이를 위해 JWT의 표준 클레임인 \`jti\` (JWT ID, [RFC 7519 §4.1.7](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7))를 사용한다. \`jti\`는 JWT의 고유 식별자로, 중복 사용을 방지하기 위한 클레임이다.

### 흐름

\`\`\`
[로그인]
  서버: tokenId = UUID 생성
  서버: Redis에 저장 → rt:123:electron-desktop = "aaa"
  서버: RT 발급 (jti="aaa" 포함)

[refresh 요청]
  서버: RT에서 jti="aaa" 추출
  서버: Redis에서 rt:123:electron-desktop 조회 → "aaa"
  서버: 일치 → 새 tokenId="bbb" 생성
  서버: Redis 덮어쓰기 → rt:123:electron-desktop = "bbb"
  서버: 새 RT 발급 (jti="bbb")
  → 기존 RT(jti="aaa")는 이제 무효
\`\`\`

### 탈취 감지 시나리오

\`\`\`
[정상 사용자]
  RT(jti=aaa)로 사용 중

[탈취자]
  탈취한 RT(jti=aaa)로 /refresh 호출
  → 서버: jti 일치 → 새 jti=bbb 발급, Redis 덮어쓰기
  (탈취자가 새 AT/RT 획득)

[정상 사용자]
  기존 RT(jti=aaa)로 /refresh 호출
  → 서버: Redis의 값은 "bbb"인데 요청은 "aaa" → 불일치!
  → 탈취 의심 → revokeAll(userId) → 모든 세션 무효화
\`\`\`

누가 먼저 refresh하든 **둘 중 하나가 실패**하고, 실패하는 순간 전체 세션이 무효화된다. 탈취자는 지속적으로 접근할 수 없다.


## 멀티 디바이스 세션 관리

메신저는 데스크탑과 모바일을 동시에 사용하는 게 일반적이다. 단일 세션이면 디바이스를 전환할 때마다 다른 기기가 로그아웃된다.

Redis 키에 \`deviceId\`를 포함해서 해결했다.

\`\`\`
rt:{userId}:{deviceId} = tokenId

rt:123:electron-desktop = "aaa"
rt:123:mobile-ios       = "bbb"
\`\`\`

키 구조만 달라지고 로직은 동일하다. 구현 복잡도 차이가 거의 없다.

\`\`\`java
public final class RefreshTokenRedisKeys {

    private RefreshTokenRedisKeys() {}

    private static final String PREFIX = "rt";
    public static final String DEFAULT_DEVICE_ID = "default";

    public static String key(Long userId, String deviceId) {
        return String.join(":", PREFIX, userId.toString(), deviceId);
    }

    public static String pattern(Long userId) {
        return PREFIX + ":" + userId + ":*";
    }
}
\`\`\`


## 구현 코드

### RefreshTokenService

\`\`\`java
@Service
@RequiredArgsConstructor
public class RefreshTokenService {

    private final JwtUtil jwtUtil;
    private final StringRedisTemplate redisTemplate;

    public String issue(Long userId, String deviceId) {
        String tokenId = UUID.randomUUID().toString();
        String key = RefreshTokenRedisKeys.key(userId, deviceId);

        redisTemplate.opsForValue()
            .set(key, tokenId, jwtUtil.getRefreshTtl(), TimeUnit.MILLISECONDS);

        return tokenId;
    }

    public String getStoredTokenId(Long userId, String deviceId) {
        String key = RefreshTokenRedisKeys.key(userId, deviceId);
        return redisTemplate.opsForValue().get(key);
    }

    public void revoke(Long userId, String deviceId) {
        String key = RefreshTokenRedisKeys.key(userId, deviceId);
        redisTemplate.delete(key);
    }

    public void revokeAll(Long userId) {
        String pattern = RefreshTokenRedisKeys.pattern(userId);
        Set<String> keys = redisTemplate.keys(pattern);

        if (keys != null && !keys.isEmpty()) {
            redisTemplate.delete(keys);
        }
    }
}
\`\`\`

\`issue()\`에서 TTL을 RT 만료 시간과 동일하게 설정한다. RT가 만료되면 Redis 키도 자동으로 사라진다.

### 컨트롤러 — refresh 엔드포인트

\`\`\`java
@PostMapping("/api/v1/auth/refresh")
public ResponseEntity<ApiResponse<Token>> refresh(@Valid @RequestBody RefreshRequest request) {
    String deviceId = request.resolveDeviceId();

    // 1. JWT 서명 검증
    Jws<Claims> jws;
    try {
        jws = jwtUtil.validate(request.refreshToken());
    } catch (JwtException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.of(RefreshResult.FAILED_BY_INVALID_TOKEN));
    }

    Claims payload = jws.getPayload();
    Long userId = Long.valueOf(payload.getSubject());
    String jti = payload.getId();

    // 2. Redis에서 저장된 tokenId 조회
    String storedTokenId = refreshTokenService.getStoredTokenId(userId, deviceId);

    if (storedTokenId == null) {
        // 해당 디바이스 세션 없음 → 단순 거부 (revokeAll 안 함)
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.of(RefreshResult.FAILED_BY_INVALID_TOKEN));
    }

    if (!storedTokenId.equals(jti)) {
        // jti 불일치 → 탈취 의심 → 전체 세션 무효화
        refreshTokenService.revokeAll(userId);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.of(RefreshResult.FAILED_BY_TOKEN_MISMATCH));
    }

    // 3. 계정 상태 확인 (ENABLED만 허용)
    Account account = accountService.findByIdAndEnabled(userId).orElse(null);
    if (account == null) {
        refreshTokenService.revoke(userId, deviceId);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ApiResponse.of(RefreshResult.FAILED_BY_INVALID_TOKEN));
    }

    // 4. Token Rotation: 새 토큰 발급
    String newTokenId = refreshTokenService.issue(userId, deviceId);
    String accessToken = jwtUtil.createAccessToken(account);
    String refreshToken = jwtUtil.createRefreshToken(account, newTokenId);

    Token token = new Token("Bearer", accessToken, refreshToken, jwtUtil.getAccessTtl());
    return ResponseEntity.ok().body(ApiResponse.of(RefreshResult.SUCCESS, token));
}
\`\`\`


## 여기서 놓치기 쉬운 두 가지

### 1. "세션 없음"과 "jti 불일치"를 구분해야 한다

처음에는 Redis 조회 + jti 비교를 한 번에 처리했다.

\`\`\`java
// 초기 구현 (문제 있음)
if (!refreshTokenService.validate(userId, deviceId, jti)) {
    refreshTokenService.revokeAll(userId);  // 무조건 전체 무효화
    return FAILED_BY_TOKEN_MISMATCH;
}
\`\`\`

이러면 **탈취자가 아예 다른 deviceId로 요청**했을 때도 revokeAll이 발동된다. 탈취자는 \`attacker-device\`라는 deviceId를 보냈을 뿐인데, 정상 사용자의 \`electron-desktop\` 세션까지 전부 날아간다.

구분이 필요하다:

| 상황 | Redis 상태 | 올바른 처리 |
|------|-----------|------------|
| 해당 디바이스 세션 없음 | 키 자체가 없음 (\`null\`) | 단순 거부, revokeAll **안 함** |
| 같은 디바이스에서 jti 불일치 | 키는 있지만 값이 다름 | 탈취 의심 → **revokeAll** |

그래서 \`validate(boolean)\` 대신 \`getStoredTokenId(String)\`을 반환하게 바꿨다.

\`\`\`java
String storedTokenId = refreshTokenService.getStoredTokenId(userId, deviceId);

if (storedTokenId == null) {
    // 세션 없음 → 단순 거부
    return FAILED_BY_INVALID_TOKEN;
}

if (!storedTokenId.equals(jti)) {
    // jti 불일치 → 탈취 → 전체 무효화
    refreshTokenService.revokeAll(userId);
    return FAILED_BY_TOKEN_MISMATCH;
}
\`\`\`

### 2. refresh 시 계정 상태를 확인해야 한다

관리자가 계정을 LOCKED/DISABLED로 변경해도, RT가 살아있으면 계속 새 AT를 발급받을 수 있다. 최악의 경우 7일(RT 수명) 동안 차단이 무력화된다.

\`\`\`java
// findById → findByIdAndEnabled
Account account = accountService.findByIdAndEnabled(userId).orElse(null);
if (account == null) {
    refreshTokenService.revoke(userId, deviceId);
    return FAILED_BY_INVALID_TOKEN;
}
\`\`\`

\`findByIdAndEnabled\`는 \`WHERE id = ? AND status = 'ENABLED'\`로 조회하므로, 잠긴 계정은 \`null\`이 반환되어 refresh가 거부된다. 이미 \`findById\`를 호출하고 있었으므로 추가 DB 쿼리 비용은 없다.


## revokeAll과 KEYS 명령어

\`revokeAll()\`은 \`rt:123:*\` 패턴으로 해당 사용자의 모든 키를 찾아서 삭제한다.

\`\`\`java
Set<String> keys = redisTemplate.keys(pattern);
\`\`\`

\`KEYS\` 명령은 O(N)으로 전체 키를 스캔하므로 프로덕션에서는 위험하다. Redis가 블로킹되면 다른 요청도 밀린다. 프로덕션에서는 \`SCAN\`으로 교체해야 한다.

\`\`\`java
// 프로덕션 권장
ScanOptions options = ScanOptions.scanOptions().match(pattern).count(100).build();
try (Cursor<String> cursor = redisTemplate.scan(options)) {
    List<String> keys = new ArrayList<>();
    cursor.forEachRemaining(keys::add);
    if (!keys.isEmpty()) {
        redisTemplate.delete(keys);
    }
}
\`\`\`

현재는 개발 단계라 \`KEYS\`를 사용하되, TODO 주석으로 명시해 두었다.


## 정리

| 결정 | 선택 | 이유 |
|------|------|------|
| RT 관리 방식 | Redis 화이트리스트 | 즉시 무효화 + TTL 자동 정리 + 기존 Redis 인프라 활용 |
| 탈취 방어 | Token Rotation (jti) | jti 불일치로 탈취 감지, 감지 시 전체 세션 무효화 |
| 멀티 디바이스 | \`rt:{userId}:{deviceId}\` | 키 구조만 변경, 로직 동일 |
| 세션 없음 vs jti 불일치 | 구분 처리 | 다른 deviceId 공격 시 정상 사용자 보호 |
| refresh 시 계정 상태 | ENABLED만 허용 | 계정 잠금이 즉시 효력 발휘 |

면접에서 "Refresh Token을 어떻게 관리하나요?"라는 질문이 나오면, 단순히 "Redis에 저장합니다"가 아니라 **왜 화이트리스트인지, Token Rotation이 무엇을 해결하는지, 탈취 감지의 구체적인 메커니즘**까지 설명할 수 있어야 한다. 이 프로젝트에서는 그 모든 과정을 직접 설계하고 구현해 봤다.
`,wS=Object.freeze(Object.defineProperty({__proto__:null,default:OS},Symbol.toStringTag,{value:"Module"})),DS=`---
summary: MSA 프로젝트에서 모든 API 응답을 하나의 포맷으로 통일하기 위해 ResultCode 인터페이스 + ApiResponse 제네릭 클래스를 설계한 과정을 정리했습니다. 도메인별 enum이 하나의 인터페이스를 구현하는 다형성 패턴, 예외 없이 결과를 표현하는 방식, 그리고 실제 11개 Result enum에 적용한 경험을 다룹니다.
tags: Spring Boot, API Design, Java, Enum, Generics
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 API 응답 포맷을 통일한 설계를 정리한 글입니다.


## 문제: 응답 포맷이 제각각이다

MSA 프로젝트에서 여러 서비스가 각자 응답 포맷을 만들면 클라이언트가 고생한다.

\`\`\`json
// auth 서비스
{ "success": true, "token": "eyJ..." }

// social 서비스
{ "status": "OK", "result": { "friends": [...] } }

// chat 서비스
{ "code": 200, "data": { "messages": [...] } }
\`\`\`

클라이언트는 서비스마다 다른 파싱 로직을 작성해야 한다. 에러 처리도 서비스마다 다르다. 새 서비스가 추가될 때마다 같은 문제가 반복된다.

필요한 건 **모든 서비스, 모든 엔드포인트가 동일한 포맷으로 응답**하는 것이다.


## 설계: ResultCode 인터페이스

핵심 아이디어는 간단하다. "응답 코드"의 공통 계약을 인터페이스로 정의하고, 각 도메인이 이를 구현한다.

\`\`\`java
public interface ResultCode {
    String getCode();
    String getMessage();
}
\`\`\`

딱 두 개의 메서드. 코드와 메시지.

### ApiResponse: 통일된 응답 래퍼

\`\`\`java
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {

    private final String code;
    private final String message;
    private T data;

    public ApiResponse(ResultCode resultCode) {
        this.code = resultCode.getCode();
        this.message = resultCode.getMessage();
    }

    public ApiResponse(ResultCode resultCode, T data) {
        this.code = resultCode.getCode();
        this.message = resultCode.getMessage();
        this.data = data;
    }

    public static <T> ApiResponse<T> of(ResultCode resultCode) {
        return new ApiResponse<>(resultCode);
    }

    public static <T> ApiResponse<T> of(ResultCode resultCode, T data) {
        return new ApiResponse<>(resultCode, data);
    }
}
\`\`\`

포인트:

- **\`ResultCode\`를 받는다, 구체 타입이 아니라**: \`LoginResult\`든 \`RefreshResult\`든 \`SendFriendRequestResult\`든 상관없다.
- **\`@JsonInclude(NON_NULL)\`**: data가 null이면 JSON에서 아예 빠진다. 실패 응답에서 불필요한 \`"data": null\`이 사라진다.
- **정적 팩토리 메서드 \`of()\`**: 생성자 대신 가독성 좋은 호출을 제공한다.

결과적으로 모든 응답이 이 포맷을 따른다:

\`\`\`json
// 성공 (data 있음)
{ "code": "LOGIN_0000", "message": "Login completed successfully.", "data": { ... } }

// 실패 (data 없음 → 필드 자체가 생략)
{ "code": "LOGIN_0004", "message": "Invalid username or password." }
\`\`\`


## 도메인별 Result enum

각 도메인이 자신의 결과 코드를 enum으로 정의한다.

### LoginResult

\`\`\`java
@AllArgsConstructor
public enum LoginResult implements ResultCode {

    SUCCESS("LOGIN_0000", "Login completed successfully."),
    FAILED_BY_LOCKED_ACCOUNT("LOGIN_0001", "Your account is temporarily locked."),
    FAILED_BY_EXPIRED_ACCOUNT("LOGIN_0002", "Your account has expired."),
    FAILED_BY_DISABLED_ACCOUNT("LOGIN_0003", "Your account has been disabled."),
    FAILED_BY_INVALID_CREDENTIALS("LOGIN_0004", "Invalid username or password."),
    FAILED_BY_NOT_VERIFIED("LOGIN_0005", "Your account is not verified."),
    FAILED_BY_UNKNOWN_ERR("LOGIN_9999", "Login failed.");

    private final String code;
    private final String message;

    @Override
    public String getCode() { return this.code; }

    @Override
    public String getMessage() { return this.message; }
}
\`\`\`

### RefreshResult

\`\`\`java
public enum RefreshResult implements ResultCode {
    SUCCESS("REFRESH_0000", "Token refreshed successfully."),
    FAILED_BY_INVALID_TOKEN("REFRESH_0001", "Invalid or expired refresh token."),
    FAILED_BY_TOKEN_MISMATCH("REFRESH_0002", "Refresh token has been revoked."),
    FAILED_BY_UNKNOWN_ERR("REFRESH_9999", "Token refresh failed.");
    // ...
}
\`\`\`

현재 프로젝트에 11개의 Result enum이 있다:

| 모듈 | enum | 코드 접두사 |
|------|------|-----------|
| auth | LoginResult | \`LOGIN_\` |
| auth | SignUpResult | \`SIGN_UP_\` |
| auth | RefreshResult | \`REFRESH_\` |
| auth | LogoutResult | \`LOGOUT_\` |
| auth | VerificationMailResult | \`MAIL_REQ_\` |
| auth | EmailVerificationResult | \`MAIL_VERIFY_\` |
| auth | ResetPasswordResult | \`RESET_PW_\` |
| social | SendFriendRequestResult | \`FRIEND_REQ_SEND_\` |
| social | AcceptFriendRequestResult | \`FRIEND_REQ_ACCEPT_\` |
| social | RejectFriendRequestResult | \`FRIEND_REQ_REJECT_\` |
| social | CancelFriendRequestResult | \`FRIEND_REQ_CANCEL_\` |

전부 \`ResultCode\`를 구현하고, 전부 \`ApiResponse.of()\`로 감싸진다.


## 컨트롤러에서의 사용

\`\`\`java
// 로그인 성공
return ResponseEntity.ok()
    .body(ApiResponse.of(LoginResult.SUCCESS, token));

// 인증 실패
return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
    .body(ApiResponse.of(LoginResult.FAILED_BY_INVALID_CREDENTIALS));

// 토큰 재발급 성공
return ResponseEntity.ok()
    .body(ApiResponse.of(RefreshResult.SUCCESS, token));

// 친구 요청 실패
return ResponseEntity.ok()
    .body(ApiResponse.of(SendFriendRequestResult.FAILED_BY_ALREADY_SENT));
\`\`\`

모듈이 다르고, 도메인이 다르고, Result enum이 다르지만 **컨트롤러의 응답 패턴은 동일**하다.


## 예외를 던지지 않는 서비스 레이어

이 패턴의 또 다른 특징은 **서비스 메서드가 예외 대신 Result enum을 반환**한다는 것이다.

\`\`\`java
// 예외 방식 (일반적)
public void signup(String email, String password) {
    if (accountRepository.existsByEmail(email)) {
        throw new DuplicateAccountException("이미 존재하는 계정");
    }
    // ...
}

// Result enum 방식 (이 프로젝트)
public SignUpResult signup(String nickname, String email, String password) {
    try {
        // ... 계정 생성
        return SignUpResult.SUCCESS;
    } catch (DataIntegrityViolationException e) {
        return SignUpResult.FAILED_BY_ALREADY_EXISTS_ACCOUNT;
    } catch (Exception ex) {
        return SignUpResult.FAILED_BY_UNKNOWN_ERR;
    }
}
\`\`\`

### 장점

**1. 가능한 결과가 타입으로 명시된다**

\`SignUpResult\`를 보면 이 메서드가 반환할 수 있는 모든 결과를 한눈에 알 수 있다. 예외 방식은 어떤 예외가 던져질지 코드를 다 읽어봐야 안다.

**2. 컨트롤러에서 분기가 명확하다**

\`\`\`java
SignUpResult result = accountService.signup(nickname, email, password);
if (SignUpResult.FAILED_BY_UNKNOWN_ERR.equals(result)) {
    return ResponseEntity.internalServerError().body(ApiResponse.of(result));
}
return ResponseEntity.ok().body(ApiResponse.of(result));
\`\`\`

예외 방식이면 try-catch가 중첩되거나, \`@ExceptionHandler\`가 여기저기 흩어진다.

**3. 테스트가 쉽다**

\`\`\`java
// Result enum 방식: 반환값만 비교
SignUpResult result = accountService.signup("nick", "email@test.com", "pass");
assertEquals(SignUpResult.FAILED_BY_ALREADY_EXISTS_ACCOUNT, result);

// 예외 방식: assertThrows + 예외 타입 확인
assertThrows(DuplicateAccountException.class, () ->
    accountService.signup("nick", "email@test.com", "pass"));
\`\`\`

### LoginResult.resolveLoginStatus: 예외 → Result 변환

Spring Security의 \`AuthenticationProvider\`는 예외를 던지는 방식이라 피할 수 없다. 이 경우 enum에 변환 메서드를 둔다.

\`\`\`java
public enum LoginResult implements ResultCode {
    // ...

    public static LoginResult resolveLoginStatus(Exception ex) {
        if (ex instanceof LockedException) return FAILED_BY_LOCKED_ACCOUNT;
        if (ex instanceof AccountExpiredException) return FAILED_BY_EXPIRED_ACCOUNT;
        if (ex instanceof AccountApprovalPendingException) return FAILED_BY_NOT_VERIFIED;
        if (ex instanceof DisabledException) return FAILED_BY_DISABLED_ACCOUNT;
        return FAILED_BY_UNKNOWN_ERR;
    }
}
\`\`\`

예외를 받아서 Result enum으로 변환하는 책임이 enum 안에 있다. 컨트롤러는 \`LoginResult.resolveLoginStatus(ex)\`만 호출하면 된다.


## 코드 접두사 컨벤션

코드 체계에는 규칙이 있다:

\`\`\`
{도메인}_{번호}

LOGIN_0000    → 로그인 성공
LOGIN_0004    → 인증 실패
LOGIN_9999    → 알 수 없는 오류

REFRESH_0000  → 재발급 성공
REFRESH_0002  → 탈취 감지

COMMON_0001   → @Valid 검증 실패 (전역)
\`\`\`

- \`0000\`은 항상 성공
- \`9999\`는 항상 알 수 없는 오류
- 그 사이 번호는 도메인별 실패 사유

클라이언트는 코드의 접두사만 보고 어떤 도메인의 응답인지 알 수 있고, 번호만 보고 성공/실패를 판단할 수 있다.


## 다형성이 만드는 확장성

새 서비스를 추가할 때:

1. \`XxxResult\` enum을 만들고 \`ResultCode\`를 구현한다
2. 서비스 메서드에서 \`XxxResult\`를 반환한다
3. 컨트롤러에서 \`ApiResponse.of(result)\`로 감싼다

\`ApiResponse\`를 수정할 필요가 없다. \`ResultCode\` 인터페이스를 수정할 필요도 없다. **새 enum을 추가하기만 하면 기존 시스템에 자연스럽게 끼워진다.** 이게 인터페이스 다형성의 힘이다.

\`\`\`java
// core 모듈 (변경 없음)
public static <T> ApiResponse<T> of(ResultCode resultCode) {
    return new ApiResponse<>(resultCode);
}

// auth 모듈의 LoginResult → 잘 들어감
ApiResponse.of(LoginResult.SUCCESS)

// social 모듈의 SendFriendRequestResult → 잘 들어감
ApiResponse.of(SendFriendRequestResult.FAILED_BY_ALREADY_SENT)

// 미래에 추가될 chat 모듈의 SendMessageResult → 수정 없이 잘 들어갈 것
ApiResponse.of(SendMessageResult.SUCCESS)
\`\`\`


## 정리

| 설계 요소 | 역할 |
|----------|------|
| \`ResultCode\` 인터페이스 | 모든 응답 코드의 공통 계약 |
| \`ApiResponse<T>\` | 통일된 응답 래퍼 (code + message + data) |
| 도메인별 Result enum | 비즈니스 결과를 타입으로 표현 |
| \`@JsonInclude(NON_NULL)\` | 실패 시 불필요한 data 필드 제거 |

면접에서 "API 응답을 어떻게 설계하나요?"라는 질문에 \`ResultCode\` 인터페이스 → enum 다형성 → \`ApiResponse\` 제네릭 래퍼 → 서비스가 예외 대신 Result를 반환하는 흐름까지 설명하면, **단순히 DTO를 만드는 수준이 아니라 확장 가능한 응답 체계를 설계할 수 있다는 걸 보여줄 수 있다.**
`,jS=Object.freeze(Object.defineProperty({__proto__:null,default:DS},Symbol.toStringTag,{value:"Module"})),kS=`---
summary: MSA 메신저 프로젝트에서 core 모듈의 공통 빈(GlobalExceptionHandler, ArgumentResolver)을 각 서비스에 자동 등록하기 위해 Spring Boot AutoConfiguration을 적용한 과정을 정리했습니다. ComponentScan 확장 방식과 비교하고, WebFlux 기반 API Gateway와의 충돌을 방지하는 방법까지 다룹니다.
tags: Spring Boot, MSA, AutoConfiguration
references:
created_date: 2026-03-12T00:00:00.000Z
last_modified_date: 2026-03-12T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 core 모듈의 공통 빈을 AutoConfiguration으로 자동 등록하면서 고민했던 내용을 정리한 글입니다.


## 문제: 모듈마다 같은 설정을 반복해야 했다

auth 모듈에서 \`GlobalExceptionHandler\`와 \`CurrentAccountArgumentResolver\`를 만들어 사용하고 있었다. 그런데 chat, social 등 다른 모듈에서도 이 빈들이 필요하다. \`@Valid\` 실패 처리는 모든 API에서 공통이고, \`@CurrentAccount\`로 사용자 정보를 주입받는 것도 모든 서비스에서 동일한 패턴이다.

이걸 모듈마다 복사해서 넣는 건 당연히 안 된다. core 모듈에 넣으면 되는데, 문제는 등록 방식이다.


## 대안 비교

### 1. @ComponentScan 확장

각 모듈의 Application 클래스에서 \`@ComponentScan("kr.co.baklibra26.pinguinz")\`으로 스캔 범위를 넓히는 방식이다.

\`\`\`java
@SpringBootApplication
@ComponentScan("kr.co.baklibra26.pinguinz")
public class AuthApplication { ... }
\`\`\`

간단하지만, 새 모듈을 추가할 때마다 같은 설정을 반복해야 한다. 그리고 의도하지 않은 빈까지 스캔될 수 있다.

### 2. AutoConfiguration

core 모듈에 자동 설정 클래스를 만들고 \`META-INF\`에 등록하면, core를 의존성으로 가진 모든 모듈에서 별도 설정 없이 빈이 자동 등록된다.

새 모듈에서는 \`pom.xml\`에 core 의존성만 추가하면 끝이다.


## 결정: AutoConfiguration

core가 auth, chat, social 등 여러 모듈의 공통 라이브러리 역할이므로 AutoConfiguration이 더 적합하다. 한 번 설정하면 새 모듈에서 별도 설정 없이 core 의존성만 넣으면 된다.


## 구현

### AutoConfiguration 클래스

\`\`\`java
@AutoConfiguration
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
@Import({GlobalExceptionHandler.class, CoreWebMvcConfig.class})
public class CoreAutoConfiguration {
}
\`\`\`

\`@ConditionalOnWebApplication(type = SERVLET)\`이 핵심이다. API Gateway는 Spring Cloud Gateway 기반이라 WebFlux(Reactive)를 사용하는데, \`GlobalExceptionHandler\`의 \`@RestControllerAdvice\`나 \`HandlerMethodArgumentResolver\`는 WebMVC 전용이다. 이 조건을 걸면 WebFlux 환경에서는 이 설정 자체가 등록되지 않는다.

### GlobalExceptionHandler

\`@Valid\` 실패 시 일관된 에러 응답을 반환한다. 모든 WebMVC 모듈에서 공통으로 동작한다.

\`\`\`java
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final ResultCode INVALID_INPUT = new ResultCode() {
        @Override
        public String getCode() { return "COMMON_0001"; }
        @Override
        public String getMessage() { return "One or more fields are invalid."; }
    };

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Void>> handleValidationException(MethodArgumentNotValidException ex) {
        log.warn("[validation] invalid request. errors={}", ex.getBindingResult().getFieldErrors());
        return ResponseEntity.badRequest().body(ApiResponse.of(INVALID_INPUT));
    }
}
\`\`\`

### CoreWebMvcConfig

\`@CurrentAccount\` 어노테이션으로 컨트롤러 파라미터에 사용자 정보를 주입하는 ArgumentResolver를 등록한다.

\`\`\`java
public class CoreWebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new CurrentAccountArgumentResolver());
    }
}
\`\`\`

\`CurrentAccountArgumentResolver\`는 API Gateway가 JWT에서 파싱해 헤더(\`x-usr-id\`, \`x-usr-nickname\`)에 실어준 값을 읽어서 \`Account\` 객체로 변환한다. 이 로직은 모든 뒷단 서비스에서 동일하므로 core에 두는 것이 맞다.

### META-INF 등록

Spring Boot가 자동으로 읽는 파일에 설정 클래스를 등록한다.

\`\`\`
# core/src/main/resources/META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
kr.co.baklibra26.pinguinz.core.common.config.CoreAutoConfiguration
\`\`\`

### core pom.xml 의존성

\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-autoconfigure</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <optional>true</optional>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
    <optional>true</optional>
</dependency>
\`\`\`

\`<optional>true</optional>\`이 중요하다. optional 의존성은 core를 컴파일할 때만 사용되고, core를 가져다 쓰는 모듈로 전이되지 않는다. API Gateway가 core를 의존해도 \`spring-boot-starter-web\`이 딸려오지 않으므로 WebFlux와 충돌하지 않는다.


## API Gateway와의 공존

API Gateway의 의존성 구조:

\`\`\`xml
<!-- api-gateway/pom.xml -->
<dependency>
    <groupId>kr.co.baklibra26.pinguinz</groupId>
    <artifactId>pinguinz-core</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
\`\`\`

여기서 두 가지 안전장치가 동작한다:

1. **optional 의존성** — core의 \`spring-boot-starter-web\`이 전이되지 않으므로 classpath에 WebMVC가 없다
2. **@ConditionalOnWebApplication(type = SERVLET)** — 설령 classpath에 있더라도, 현재 애플리케이션이 SERVLET 타입이 아니면 설정 자체가 무시된다


## 최종 패키지 구조

\`\`\`
core/
├── src/main/java/.../core/
│   └── common/
│       ├── api/
│       │   ├── ApiResponse.java
│       │   └── ResultCode.java
│       ├── annotations/
│       │   └── CurrentAccount.java
│       ├── config/
│       │   ├── CoreAutoConfiguration.java
│       │   ├── CoreWebMvcConfig.java
│       │   └── GlobalExceptionHandler.java
│       ├── supports/
│       │   ├── CurrentAccountArgumentResolver.java
│       │   └── CurrentAccountResolverSupport.java
│       └── util/
│           ├── JwtUtil.java
│           └── MaskingUtil.java
└── src/main/resources/
    └── META-INF/spring/
        └── org.springframework.boot.autoconfigure.AutoConfiguration.imports
\`\`\`

core에 공통 빈을 추가할 때는 \`CoreAutoConfiguration\`에 \`@Import\`만 추가하면 된다. 새 서비스 모듈을 만들 때는 core 의존성만 넣으면 모든 공통 설정이 자동으로 적용된다.
`,NS=Object.freeze(Object.defineProperty({__proto__:null,default:kS},Symbol.toStringTag,{value:"Module"})),LS=`---
summary: 컨트롤러에 Swagger 어노테이션이 비즈니스 로직보다 많아지는 문제를 해결하기 위해, Swagger 전용 인터페이스를 분리하는 패턴을 적용한 과정을 정리했습니다.
tags: Spring Boot, Swagger, SpringDoc
references:
created_date: 2026-03-11T00:00:00.000Z
last_modified_date: 2026-03-11T00:00:00.000Z
visibility: hidden
---


> 이 글은 pinguinz 메신저 프로젝트에서 Swagger 문서화 코드를 컨트롤러에서 분리하면서 고민했던 내용을 정리한 글입니다.


## 문제: Swagger 어노테이션이 코드 가독성을 해친다

\`@Operation\`, \`@ApiResponses\`, \`@ExampleObject\` 등의 Swagger 어노테이션을 컨트롤러에 직접 작성하면, API가 3개만 되어도 어노테이션이 비즈니스 로직을 압도한다. 코드를 읽을 때 실제 로직보다 문서화 코드가 먼저 눈에 들어오게 된다.


## 대안 비교

### 1. 별도 인터페이스로 분리

Swagger 어노테이션만 담은 인터페이스를 만들고, 컨트롤러가 이를 구현하는 패턴이다. 커뮤니티에서 가장 많이 사용되는 방식이다.

### 2. YAML/JSON 설정 파일

어노테이션 대신 \`openapi.yaml\`을 직접 작성하는 방식이다. 코드에서 문서가 완전히 분리되지만, 코드와 문서가 싱크가 안 맞을 위험이 있어 소규모 팀에서는 관리 비용이 늘어난다.

### 3. 컨트롤러에 직접 작성

API가 적고 팀이 작으면 가장 빠르지만, example까지 넣으면 금방 비대해진다.


## 결정: 인터페이스 분리 패턴

### 패키지 위치

\`web/api/\` 패키지를 선택했다. \`swagger\`라는 이름도 고려했지만, Spring 커뮤니티에서 \`api\`라는 이름이 "외부에 노출되는 HTTP 인터페이스 계약"이라는 의미로 주류다. \`swagger\`는 구현 기술에 종속된 이름이라 나중에 문서화 도구가 바뀌면 어색해질 수 있다.

\`\`\`
auth/
└── web/
    ├── api/
    │   └── AuthApi.java        ← Swagger 어노테이션 집중
    ├── controller/
    │   └── AuthController.java ← 비즈니스 로직만
    └── resolver/
        └── CurrentAccountArgumentResolver.java
\`\`\`

### 적용 구조

\`\`\`java
// Swagger 문서 전담
@Tag(name = "Account API", description = "사용자 로그인 및 회원가입 관련 API")
public interface AuthApi {

    @Operation(summary = "로그인", ...)
    @ApiResponses({ ... })
    ResponseEntity<ApiResponse<Token>> login(@RequestBody LoginRequest request);

    @Operation(summary = "회원가입", ...)
    @ApiResponses({ ... })
    ResponseEntity<ApiResponse<Void>> signUp(@RequestBody SignUpRequest request);
}

// 컨트롤러는 로직에 집중
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController implements AuthApi {

    @Override
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<Token>> login(@RequestBody LoginRequest request) {
        // 비즈니스 로직만
    }
}
\`\`\`

### 장점

- 컨트롤러가 깔끔하게 유지된다
- Swagger 문서 수정이 비즈니스 로직 변경과 분리된다
- 다른 모듈(social, chat)에서도 동일한 패턴으로 확장 가능하다
`,HS=Object.freeze(Object.defineProperty({__proto__:null,default:LS},Symbol.toStringTag,{value:"Module"})),BS=`---
summary: GitHub Pages로 올린 개인 블로그에 댓글 기능을 붙이기 위해 Utterances, Disqus, Giscus 같은 도구들을 비교해 보고, 그중 Giscus를 선택한 이유와 실제 적용 방법을 정리한 글입니다. 
tags: 
references: 
created_date: 2026-01-09T15:09:52.000Z
last_modified_date: 2026-01-09T15:09:52.000Z
---

> 깃허브 페이지로 배포한 개인 블로그에 댓글 기능을 추가한 과정을 정리한 문서입니다.

---

2026년 1월, GitHub Pages 로 배포한 개인 블로그에 댓글 기능을 추가하고자 했으나, GitHub Pages 특성상 데이터베이스를 따로 사용할 수 없어 댓글 기능 구현이 까다로웠습니다. 이번 글에서는 GitHub Pages 에 댓글 시스템을 어떻게 추가했는지 정리하였습니다.


## 댓글 솔루션 비교

| 기능 | Utterances | Giscus |
| :--- | :--- | :--- |
| 기반 | GitHub Issue | GitHub Discussion |
| 대댓글 | X (태그 방식) | O (중첩 구조) |
| 리액션 | X | O |
| 테마 지원 | 기본 (github-light 등) | 다중 테마, 다크모드 자동 |
| 언어 | 영어 중심 | 다국어 (한국어 포함) |
| 업데이트 | 상대적으로 느림 | 활발 |
| 장점 | 가볍고 간단, 개발자 친화 (마크다운) | 자연스러운 대화, 알림 편리 |

댓글 솔루션으로는 Utterances와 Giscus 외에 Disqus 같은 서비스도 있지만, **Disqus는 \`무료 플랜에서 광고가 붙는다\`** 는  단점이 있어 고려하지 않았습니다.


### 댓글 솔루션 선택 기준

\`Utterances\`와 \`Giscus\`를 비교해본 결과, **\`Giscus\`가 대댓글 기능을 지원하고 다양한 테마 옵션을 제공하며 지속적으로 업데이트가 이루어지고 있어 최종적으로 선택**하게 되었습니다.

---

## 댓글 솔루션: Giscus

[Giscus 웹사이트](https://giscus.app/ko)는 GitHub Discussions를 기반으로 작동하는 댓글 솔루션입니다.



### Giscus: 장점
- **무료**: GitHub를 사용하므로 별도의 호스팅 비용이 없습니다.
- **광고 없음 & 추적 없음**: Disqus 같은 서비스와 달리 광고나 불필요한 추적이 없습니다.
- **GitHub 연동**: 개발자 블로그에 방문하는 대부분의 독자가 GitHub 계정을 가지고 있어 접근성이 좋습니다.
- **다크 모드 지원**: 다양한 테마를 지원합니다.

---

### Giscus: 스크립트 생성하기

1. **저장소 설정 (Repository Settings)**

    > Giscus 는 댓글을 관리할 레포지토리가 필요합니다. 또한 해당 레포지토리는 **Public**이어야 하고 **Discussions** 기능이 켜져 있어야 합니다.

    1. \`댓글 레포지토리\` -> \`Settings\` > \`General\` > \`Features\` 섹션에서 **Discussions** 체크박스를 활성화
        ![레포지토리 discussion 설정](discussions_checkbox.png)

2. **Giscus 앱 설치**

    1. [Giscus 앱 페이지](https://github.com/apps/giscus)로 이동 후, **Install** 버튼을 클릭
        ![giscus 앱 설치](giscus_site.png)
    2. 댓글 기능을 적용할 저장소를 선택하고 설치를 완료
        ![giscus 레포지토리 설정](giscus_install.png)

3. **Giscus 설정 및 스크립트 생성**

    > [Giscus 공식 홈페이지](https://giscus.app/ko)에 접속하여 설정을 진행합니다.

    1. **저장소(Repository)**: \`username/repo\` 형식으로 입력하여 연결 여부를 확인합니다.
    2. **페이지 - Discussion 연결(Page ↔️ Discussions Mapping)**:
        - 저는 \`pathname\`을 기준으로 설정했습니다. 
        
    3. **Discussion 카테고리(Discussion Category)**:
        - 댓글이 생성될 카테고리를 선택합니다. \`General\`이나 \`Announcements\`를 사용하거나 \`Comments\`라는 카테고리를 새로 만들어 사용하면 됩니다.
    4. **기능(Features)**:
        - \`메인 포스트 위에 댓글 상자 배치\`, \`대댓글(Lazy loading)\` 등 필요한 옵션을 선택합니다.
    5. **테마(Theme)**: 블로그 디자인에 맞는 테마를 선택합니다.

설정을 마치면 아래에 **Enable giscus** 섹션에 \`<script>\` 태그가 생성되는데 이를 복사해서 사용하면 됩니다.


---


### Giscus: 프로젝트에 적용하기

댓글 기능을 추가할 제 블로그는 React로 만들어졌기 때문에, 위에서 생성한 \`<script>\` 태그를 바로 붙여넣기보다는 컴포넌트로 만들어 사용하였습니다.

---

#### 리액트 컴포넌트 생성

> **주의**: 아래 예시 코드의 **\`data-repo\`, \`data-repo-id\`, \`data-category-id\` 등의 값은 Giscus 홈페이지에서 생성된 값으로 대체** 해야합니다.


- \`src/components/Giscus.jsx\` 예시
    \`\`\`javascript
    import { useEffect, useRef } from 'react';

    export default function Giscus() {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || ref.current.hasChildNodes()) return;

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.async = true;
        script.crossOrigin = 'anonymous';

        script.setAttribute('data-repo', 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME');
        script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        script.setAttribute('data-theme', 'preferred_color_scheme');
        script.setAttribute('data-lang', 'ko');

        ref.current.appendChild(script);
    }, []);

    return <section ref={ref} />;
    }
    \`\`\`


---

#### 리액트 컴포넌트 적용하기

이제 댓글이 필요한 페이지(예: \`PostDetail.jsx\`) 하단에 \`<Giscus />\` 컴포넌트를 배치하면 됩니다.

- \`PostDetail.jsx\` 예시
    \`\`\`javascript
    import Giscus from './components/Giscus';

    // ...

    return (
    <article>
        {/* 포스트 내용 */}
        <PostContent content={markdown} />
        
        <hr />
        
        {/* 댓글 영역 */}
        <Giscus />
    </article>
    );
    \`\`\`

---

## 적용 후 모습

![giscus 댓글창](giscus_component.png)

이제 블로그 포스트 하단에 깔끔한 GitHub 스타일의 댓글창이 생성된 것을 확인할 수 있습니다. 댓글을 남기기 위해선 GitHub 계정으로 로그인해야하지만 이렇게 편하게 댓글을 구현할 수 있다니 정말 좋은 것 같습니다.

`,US=Object.freeze(Object.defineProperty({__proto__:null,default:BS},Symbol.toStringTag,{value:"Module"})),zS=`---
summary: 이 글은 \`Vite\`와 \`리액트\`로 만든 개인 블로그를 깃허브 페이지에 정적 사이트로 배포하고 도메인(\`bak-libra26.co.kr\`) 를 연동하는 과정을 정리했습니다.
tags: 
references: 
created_date: 2026-02-18T15:09:52.000Z
last_modified_date: 2026-02-18T15:09:52.000Z
---

> 이 글은 리액트로 구성한 프로젝트를 깃허브 페이지로 배포하는 과정을 정리한 글입니다.

## 블로그: 개발 환경과 스택

제가 만든 블로그는 Vite와 리액트 19 버전을 기반으로 개발했고, 깃허브 페이지(GitHub Pages)를 통해 정적 사이트 형태로 배포했습니다.
깃허브 페이지는 정적 웹 사이트를 무료로 호스팅할 수 있는 서비스라, 별도 서버 없이도 손쉽게 배포 환경을 구성할 수 있었습니다.


| 구분       | 내용                            |
|-----------|-------------------------------|
| 빌드 도구 | Vite                          |
| 프레임워크 | 리액트 19                        |
| 배포 방식 | 깃허브 페이지(GitHub Pages) |

사용하는 기술 스택에 따라 설정 방법이 조금씩 달라질 수 있어 Vite + 리액트 19 를 기준으로 작성된 글임을 참고해 주세요.

---


## 블로그: 깃허브 페이지 배포하기

이제 실제로 이 블로그를 깃허브 페이지에 올리기 위해, 배포에 필요한 스크립트를 먼저 정리하겠습니다.
\`Vite\`로 빌드한 정적 파일을 깃허브 페이지에서 바로 호스팅할 수 있도록, \`package.json\`에 빌드·배포용 명령을 추가해서 배포 작업을 자동화해보겠습니다.




---


### 스크립트 작성하기

배포 자동화를 위해 \`package.json\`의 \`scripts\`에 \`deploy\` 명령을 추가해야합니다.

- 배포를 위한 \`package.json\` 수정
    \`\`\`json {4-6}
    {
      ...
      "scripts": {
        "dev": "vite --host",
        "build": "vite build",
        ...
        "deploy": "gh-pages -d dist -t"
      },
      ...
    }
    \`\`\`

위와 같이 수정하고 \`npm run build\` 명령어를 실행하면 프로젝트 루트에 빌드 결과물에 해당하는 \`dist\` 폴더가 생성됩니다.
이후에 \`npm run deploy\` 를 실행하면 \`gh-pages\` 를 통해 빌드된 정적 파일(\`/dist/*\`)을 깃허브 페이지 전용 브랜치(\`gh-pages\`)에 업로드됩니다.

---

### 배포 확인하기

- **명령어 실행 후 체크리스트**
  1. **\`gh-pages\` 브랜치 생성 여부 확인**
  2. **\`gh-pages\` 브랜치 안에 빌드 결과물(\`dist\`) 정상 배포 여부 확인**

위 두 가지가 확인되었다면 잠시 후에 깃허브 페이지가 제공하는 주소(\`https://{깃허브 계정}.github.io\`)로 접속했을 때 배포된 웹 페이지가 확인됩니다. 


---

### 트러블 슈팅: 404: 페이지를 찾지 못했습니다.


- **배포 후, 404: 페이지를 찾지 못하는 경우.**
![github_pages_deploy_404_routing.png](github_pages_deploy_404_routing.png)

---


- **\`BrowserRouter\` 설정 확인**

    GitHub Pages에서 서브 경로로 배포하는 경우, 라우터의 basename이 실제 서비스 주소와 맞지 않으면 새로고침이나 직접 URL 입력 시 404가 발생할 수 있습니다.
    \`<BrowserRouter base='/'>...</BrowserRouter>\` 로 되어있다면 \`bak-libra26.github.io\`와 같이 \`\${계정}.github.io\` 와 같은 깃허브 페이지 주소로 변경해주어야합니다.
        
    \`\`\`jsx
    const basename = import.meta.env.MODE === 'development' ? '/' : '/bak-libra26.github.io'; // 혹은 실제 배포 경로
    
    <BrowserRouter basename={basename}>
    ...
    </BrowserRouter>
    
    \`\`\`
     

- **\`<a>\` 를 \`<Link>\` 로 변경하기**

  리액트 라우터를 사용하는 \`SPA(Single Page Application)\`에서 내부 페이지 이동에 \`<a>\` 태그를 사용하는 경우, 브라우저가 전체 페이지를 새로 요청하고 깃허브 페이지는 해당 경로에 정적 파일을 직접 찾게되어 404가 발생합니다.
  이를 방지하기 위해서 내부 라우팅에는 \`<a>\` 대신 리액트 라우터에서 제공하는 \`<Link>\` 컴포넌트를 사용해야 합니다.




## 블로그: 깃허브 페이지 도메인 & DNS 설정

### 사용할 도메인 결제

먼저 블로그에 연결할 도메인을 구매해야합니다.
가비아, 닷네임코리아, Cloudflare 등 도메인 구매 사이트를 이용해서 도메인을 구매해주세요.
참고로 저는 [호스팅케이알](https://www.hosting.kr/) 에서 구매했습니다.

---

### 깃허브 페이지 설정

- 깃허브 페이지 설정
    ![github_pages_deploy_github_page_setting.png](github_pages_deploy_github_page_setting.png)

1. 레포지토리의 \`Settings\` > \`Pages\`로 이동합니다.
2. \`Custom domain\`에 연결할 도메인(예: bak-libra26.co.kr)을 적은 후 저장합니다.
3. \`SSL\` 인증서 발급이 완료되면 \`Enforce HTTPS\` 옵션을 체크하여 항상 \`HTTPS\`로 접속되게 설정합니다.

---

### CNAME 추가

깃허브 페이지 설정 화면에서 \`Custom domain\`을 저장하면 레포지토리 루트에 CNAME 파일이 생성되지만, 빌드/배포 과정에서 이 파일이 사라지는 경우가 있습니다.
이걸 대비해서 프로젝트의 루트에 \`public\` 를 만들어 \`CNAME\` 파일을 직접 추가해두겠습니다.

- \`/public/CNAME\` 파일 추가
  \`\`\`text
  bak-libra26.co.kr
  \`\`\`
  

### A 레코드 추가

\`bak-libra26.co.kr\` 과 같은 루트 도메인 바로 접속하고 싶은 경우에 \`DNS\` 설정에서 \`A 레코드\`를 추가하여 \`GitHub Pages IP\`로 향하도록 설정해야 합니다.
도메인을 구매한 업체의 사이트의 \`DNS 설정 페이지\`에서 아래처럼 \`A 레코드\`를 추가해 주세요.

> [깃허브 페이지 | 사용자 지정 도메인 관리](https://docs.github.com/ko/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) 를 참고하셔도 좋아요

\`\`\`text
타입: A
호스트: @
값: 185.199.108.153
값: 185.199.109.153
값: 185.199.110.153
값: 185.199.111.153
\`\`\`

- \`@\`는 루트 도메인(\`bak-libra26.co.kr\`)을 의미합니다.
- \`깃허브 페이지 IP\`는 여러 개를 모두 추가하는 것이 좋습니다.


---`,IS=Object.freeze(Object.defineProperty({__proto__:null,default:zS},Symbol.toStringTag,{value:"Module"})),PS=`---
summary: 마크다운 파일을 이용해 GitHub Pages용 정적 블로그에서 포스트를 저장·파싱·렌더링하는 전체 흐름을 직접 구현하는 방법에 대해 정리했습니다.
tags: 
references: 
created_date: 2026-02-14T15:09:52.000Z
last_modified_date: 2026-02-14T15:09:52.000Z
---

> 이 글을 읽으면 마크다운 파일을 이용해 GitHub Pages용 정적 블로그에서 포스트를 저장·파싱·렌더링하는 전체 흐름을 직접 구현할 수 있습니다.

---

제가 만든 이 블로그는 리액트로 개발했고, GitHub Pages를 통해 정적 웹 사이트 형태로 배포됩니다.
별도의 웹 서버와 데이터베이스 없이 운영되기 때문에, 블로그 글을 어떤 형식으로 저장하고, 어떻게 읽어와서 화면에 보여줄지에 대한 구조를 처음부터 직접 설계해야 했습니다.

평소에 애플 클라우드와 옵시디언으로 마크다운 문서를 관리해온 경험을 살려서 블로그 글도 마크다운 파일로 작성해서 저장해 두고, 웹에서는 이 파일들을 읽어 HTML로 렌더링하는 방식을 선택했습니다.


## 작성·관리 워크플로우 정하기


저는 애플 클라우드와 옵시디언을 함께 사용해 여러 기기에서 마크다운 파일을 편하게 다루고 있었기 때문에, 이 워크플로우를 그대로 블로그에도 가져오기로 했습니다.

- **글을 어디에서 어떻게 작성·관리할까**
  1. 리액트 프로젝트를 애플 클라우드에 저장한다.
  2. \`/public/posts\` 폴더를 옵시디언 저장소로 지정한다.
  3. 옵시디언에서 글을 작성·수정·삭제하면, Git 커밋·푸시 후 GitHub Pages에 자동 반영된다.

이렇게 하면 "글 작성 도구는 옵시디언, 배포는 GitHub Pages"라는 흐름을 유지하면서, 별도의 백엔드 없이도 블로그를 운영할 수 있다고 생각했습니다.

---


- **블로그 포스팅 워크플로우**

    ![img.png](blog_posting_workflow.png)

  
---





## 마크다운 파일 전처리하기


### 글 저장 구조 정하기

마크다운 형식의 글을 모두 \`/public/posts\` 폴더 아래에 저장하고, 글 종류에 따라 하위 폴더를 만들어 카테고리처럼 사용하는 기존 파일 관리 방식을 그대로 사용하기로 했습니다.

---

#### 마크다운 파일 작성 규칙

1. 모든 글은 **\`/public/posts\` 폴더 안에 저장**합니다.
2. 글 종류에 따라 **하위 폴더를 만들어 카테고리처럼 사용**합니다.  
   예시: \`/public/posts/사이드 프로젝트/블로그/블로그: 마크다운 파일로 ... .md\`
3. 각 **\`.md\` 파일의 맨 위에는 프론트매터(frontmatter)를 두고, 그 안에 글의 메타데이터를 정의**합니다.
4. **프론트매터 아래에는 실제 글 본문을 마크다운으로 작성**합니다.

   예시: **\`/public/posts/사이드 프로젝트/블로그/블로그: 마크다운 파일로 블로그 포스팅 기능 구현하기.md\`**
    \`\`\`markdown
    ---
    summary: 카드에 보여줄 글 설명
    tags:
      - 태그1
      - 태그2
    references:
      - 참고 글
    created_date: ISO 형식의 생성 일시
    last_modified_date: ISO 형식의 수정 일시
    ---
    
    글 본문...
    \`\`\`

   이와 같이 구조 정해서, \`/public/posts\` 아래의 파일 경로(\`/사이드 프로젝트/블로그/\`)는 글의 카테고리/슬러그가 되고,
   프론트매터는 목록·태그·날짜와 같은 메타데이터, 그 아래 영역은 실제 콘텐츠로 명확하게 분리해 다룰 수 있습니다.


### 마크다운 파일 읽어오기

\`/public/posts\` 폴더에 있는 모든 마크다운 파일을 한 번에 읽어오기 위해 \`Vite\`의 \`import.meta.glob\` 를 사용하였고,
**\`glob\`** 을 덕분에 **특정 경로 패턴(\`/public/posts/**/*.md\`)에 해당하는 모든 파일** 을 한 번에 가져올 수 있었습니다.


- **\`glob\` 으로 마크다운 파일 가져오기**
    \`\`\`javascript
    const globs = import.meta.glob('/public/posts/**/*.md', {
        eager: true, // 빌드 시점에 바로 import 함
        query: 'raw' // 마크다운을 파싱하지 않고, 원시 문자열 그대로 가져오도록 함
    });
    \`\`\`

    위와 같이 \`import.meta.glob\`으로 읽어온 결과는 다음처럼 **“파일 경로"를 \`key\`** 로, **"원시 마크다운 문자열"을 담은 모듈 객체를 \`value\`** 로 갖는 객체 형태입니다.

- **\`globs\` 에 들어가는 데이터 형식**
    \`\`\`json
    {
      '/public/posts/.../글1.md': {
        default: '---\\nsummary: ...\\n...\\n---\\n\\n글 본문...' // 하나의 긴 문자열
      },
      '/public/posts/.../.../글2.md': {
        default: '---\\nsummary: ...\\n...\\n---\\n\\n글 본문...'
      },
      // ...
    }
    \`\`\`
    \`key\`는 파일 경로, \`value\`는 default 속성에 원시 마크다운 문자열을 가진 객체입니다.

---


### 마크다운 파싱과 도메인 모델

원시 마크다운 문자열에서 메타데이터와 본문을 분리하고, 이를 \`Post\` 도메인 모델로 감싸 관리하기로 했습니다.

- \`MarkdownUtil\`: 메타데이터와 본문 분리
    \`\`\`javascript
    import yaml from 'js-yaml';
    
    const MarkdownUtil = {
        metadata(raw) {
            const text = raw
                .match(/^---[\\s\\S]*?---\\s*/)
                .replace(/^---\\s*/, '')
                .replace(/---\\s*$/, '');
    
            const metadata = yaml.load(text);
            return metadata || {};
        },
    
        content(raw) {
            return raw.replace(/^---[\\s\\S]*?---\\s*/, '');
        },
    };
    
    export default MarkdownUtil;
    \`\`\`

- \`metadata\`는 프론트매터(\`--- ~ ---\`)만 잘라 \`js-yaml\` 로 파싱해 메타데이터 객체로 바꿉니다.
- \`content\`는 프론트매터를 제거한 나머지, 즉 본문만 문자열로 돌려줍니다.

---

- \`Post\`: 포스트 도메인 모델
    \`\`\`javascript
    class Post {
        constructor({absolutePath, metadata, content}) {
            this._path = absolutePath.replace('/public/posts', '').replace(/\\.md$/, '').slice(1);
            this._title = this._path.split('/').pop().replace('.md', '');
            
            this._metadata = metadata;
            this._content = content;
            this._tags = metadata['tags'];
            this._summary = metadata['summary'];
            ...
        }
    
        ...
    
    }
    \`\`\`

- \`PostUtil\`:  포스트 파싱 및 관리를 위한 유틸리티
    \`\`\`javascript
    const _posts = Object.entries(globs)
        .map(([path, obj]) => {
            const raw = obj.default;
    
            const metadata = MarkdownUtil.metadata(raw);
            const content = MarkdownUtil.content(raw);
    
            return new Post({
                absolutePath: path,
                metadata: metadata,
                content: content
            });
        })
        .sort((a, b) => a.createdDate - b.createdDate);
  
    const PostUtil = {
        get posts() {
            return _posts;
        },
        ...
    }
    \`\`\`
  
    이렇게 글의 메타데이터와 본문을 분리해 두고 \`PostUtil\`에서 이 구조를 파싱한 뒤, 내부적으로는 \`Post\` 클래스 인스턴스로 관리하도록 설계했습니다.


---

## 마크다운 포스트로 실제 화면 구성하기

이제까지 준비한 구조를 실제 화면에서 어떻게 사용하는지 간단한 예시를 통해 보겠습니다.

### 글 목록 페이지 예시

가장 단순한 형태의 글 목록 페이지는 \`PostUtil.posts\`를 가져와 제목, 요약, 생성일 등을 반복해서 렌더링하는 식으로 만들 수 있습니다.

- **\`PostUtil.posts\` 를 이용한 글 목록 페이지를 구성 예시**
    \`\`\`jsx
    // src/pages/PostsPage.tsx
    import PostUtil from '../posts/post-util';
    
    const PostsPage = () => {
        return (
            <main>
                {
                    PostUtil.posts
                        .map((post) => (
                            <article key={post.path}>
                                <h2>{post.title}</h2>
                                <p>{post.summary}</p>
                                <p>{post.createdDate.toLocaleDateString()}</p>
                            </article>
                        ))
                }
            </main>
        );
    };
    
    export default PostsPage;
    \`\`\`

---

### 글 상세 페이지 예시


상세 페이지는 라우터에서 현재 \`URL\`을 읽어와 경로에서 포스트의 \`path\` 값을 추출한 뒤, \`PostUtil.findByPath\`로 해당 포스트를 찾는 방식으로 구성했습니다. 

\`\`\`javascript
const PostDetailPage = () => {
    const location = useLocation();

    const pathname = decodeURIComponent(location.pathname);
    const absolutePath = pathname.split('/posts/')[1];

    const post = PostUtil.findByPath({path: absolutePath});
    
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
        </article>
    );
};

export default PostDetailPage;
\`\`\`

이렇게 \`Post\` 모델과 \`PostUtil\` 유틸리티로 메인 페이지의 최신 글 영역, 글 목록, 상세 페이지까지 손쉽게 구성할 수 있습니다.

<br/>
`,FS=Object.freeze(Object.defineProperty({__proto__:null,default:PS},Symbol.toStringTag,{value:"Module"})),qS=`---
summary: 이 글은 마크다운으로 작성한 블로그 글을 \`ReactMarkdown\`과 플러그인을 활용해 HTML로 렌더링한 과정을 정리한 글입니다. 글 상세 페이지에 \`ReactMarkdown\` 을 사용해서 Heading·코드 블록·이미지를 블로그에 맞게 커스터마이징하는 방법을 정리했습니다.
tags: 
references: 
created_date: 2026-02-15T15:09:52.000Z
last_modified_date: 2026-02-15T15:09:52.000Z
---

> 깃허브 페이지 기반 개인 블로그에서, 마크다운으로 작성한 글을 HTML 로 렌더링한 과정을 정리했습니다.


---

## 포스트 데이터 가져오기

글 상세 페이지는 \`/posts/{post.path}\` 형태의 URL로 접근하는데 이 때 인코딩된 URL을 \`decodeURIComponent\`로 디코딩하고 \`/posts/\` 뒤에 오는 문자열을 잘라 글을 조회하는 데 사용했습니다.

\`\`\`jsx
const PostDetailPage() {
    const location = useLocation();

    const pathname = decodeURIComponent(location.pathname);
    const path = pathname.split('/posts/')[1];

    const post = PostUtil.findByPath({path: path});
    
    return (
        ...
    );
}
    
export default PostDetailPage;
\`\`\`


## 마크다운 텍스트를 HTML 로 변환하기

마크다운을 HTML 로 렌더링하면서, 먼저 손봤던 부분은 세 가지입니다.

- **Heading (h1 ~ h4):** 나중에 목차(TOC)를 만들 때 활용할 수 있게 커스터마이징 했습니다.
- **Code 블록:** 글의 특성상 코드 예제가 많아서, 하이라이트 기능과 좀 더 예쁜 코드 블록을 만들기 위해 커스터마이징 했습니다.
- **이미지:** 이미지의 경로를 잘 찾아오기 위해서 경로를 변환해 올바른 URL 로 렌더링되게 커스터마이징 했습니다.

---

### 글 상세 페이지 레이아웃 잡기

마크다운을 HTML 로 렌더링하기 전에, 먼저 글 상세 페이지의 전체 레이아웃을 다음과 같은 형태로 잡았습니다.
글의 본문을 보여주는 부분과 추후 목차(TOC) 를 보여줄 사이드바를 나누고, 본문 영역 안에서 \`ReactMarkdown\` 이 마크다운을 렌더링하는 구조로 설정했습니다.


\`\`\`jsx
import ReactMarkdown from "react-markdown";

const PostDetailPage = () => {
    const post = ...

    return (
        <>
            <article className={\`...\`}>
                
                {/* 글 본문 */}
                <section className={\`...\`}>
                    ...
                    <ReactMarkdown>
                    </ReactMarkdown>
                </section>

                {/* 사이드바 */}
                <aside className={\`...\`}>
                    ...
                </aside>

            </article>
        </>
    )
}
\`\`\`


---


#### ReactMarkdown 을 사용한 이유

글 상세 페이지에서는 마크다운을 HTML 로 직접 변환하기보다 \`ReactMarkdown\` 을 사용하기로 했습니다.

\`ReactMarkdown\` 은 마크다운을 바로 리액트 요소로 변환하고 각 태그를 컴포넌트 단위로 커스터마이징할 수 있어서, Heading·코드·이미지처럼 블로그에 맞게 렌더링하기 좋았습니다.

그리고 \`remark·rehype\` 기반의 플러그인 생태계를 그대로 활용할 수 있어서, GFM 문법 지원, 코드 하이라이트, heading 에 id 붙이기 같은 기능을 플러그인만 추가해서 해결할 수 있다는 것도 좋았습니다.

---


#### ReactMarkdown 플러그인 추가하기

\`ReactMarkdown\` 은 \`remarkPlugins\` 와 \`rehypePlugins\` 옵션을 통해 마크다운 파싱 단계와 HTML 로 변환할 때 플러그인을 추가할 수 있었습니다.



- **\`ReactMarkdown\` 플러그인 추가하기**
    \`\`\`jsx
    const PostDetailPage = () => {
        ...
    
        return (
            ...
            <ReactMarkdown>
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeRaw,
                    rehypeSlug,
                    rehypeHighlight,
                    rehypeHighlightLines,
                ]}
            </ReactMarkdown>
        );
    }
    \`\`\`

- **플러그인별 기능**
  1. **remarkGfm:** 체크박스, 테이블 등 GitHub Flavored Markdown 문법 지원
  2. **rehypeRaw:** 마크다운 안에 포함된 HTML 을 함께 파싱
  3. **rehypeSlug:** heading 태그에 id 를 자동으로 부여
  4. **rehypeHighlight:** 코드 블록에 하이라이트 클래스 추가


---

### Heading 변환하기

\`Heading\`을 변환할 때는 각 태그에 CSS를 적용하기 위한 공통 클래스와 개별 클래스를 부여하고, 추후 목차(\`TOC\`)를 위해서 \`id\` 속성을 추가해야했습니다.
이를 위해 \`rehypeSlug\` 플러그인을 사용했고 \`props.id\` 으로 \`Heading\` 의 \`id\` 값을 설정했습니다.

\`\`\`jsx
const PostDetailPage = () => {
    ...
    
    return (
        ...
        <ReactMarkdown>
            components={{
                h1({node, children, ...props}) {
                    return (<h1 id={props.id} className={\`post-heading post-heading__h1\`}>{children}</h1>);
                },
                h2({node, children, ...props}) {
                    return (<h2 id={props.id} className={\`post-heading post-heading__h2\`}>{children}</h2>);
                },
                h3({node, children, ...props}) {
                    return (<h3 id={props.id} className={\`post-heading post-heading__h3\`}>{children}</h3>);
                },
                h4({node, children, ...props}) {
                    return (<h4 id={props.id} className={\`post-heading post-heading__h4\`}>{children}</h4>);
                },
            }}
        </ReactMarkdown>
    )
}
\`\`\`



---


### Code 변환하기

\`\`\`jsx ~ \`\`\` 처럼 \`fenced code block\`으로 코드를 작성하면, \`ReactMarkdown\`에서 HTML로 변환될 때 보통 \`<pre><code>...</code></pre>\` 구조로 렌더링됩니다.
그래서 \`pre\` 태그를 별도의 컴포넌트(\`<Code></Code>\`)로 분리해서 렌더링하도록 했습니다.

\`\`\`jsx
const PostDetailPage = () => {
    ...
    
    return (
        ...
        <ReactMarkdown>
            ...
            components={{
                ...
                pre({ node, children }) {
                    return <Code node={node}>{children}</Code>
                },
            }}
        </ReactMarkdown>
    )
}
\`\`\`

\`Code\` 컴포넌트에서는 \`rehype-highlight\`가 \`<code>\` 태그에 붙여준 클래스에서 언어 정보를 꺼내와, 코드 블록 상단에 표시하고 하이라이트 스타일을 적용하도록 구현했습니다.
이렇게 하면 마크다운에서 \`\`\`jsx 처럼 언어를 지정해 두기만 해도, 실제 렌더링 시에는 코드 블록 위에 언어 배지가 올라가고, 하이라이트 테마와 함께 좀 더 읽기 좋은 코드 영역을 만들 수 있습니다.

\`\`\`jsx
const Code = ({ node, children }) => {
    const element = node?.children?.[0];
    const classes = element?.properties?.className || [];
    const match = /language-(\\w+)/.exec(classes.join(' '));
    const language = match ? match[1] : 'plaintext';

    return (
        <figure className="...">
            <figcaption className="...">
                <span className="...">
                    {language.toUpperCase()}
                </span>
            </figcaption>
            
            {/* \`rehype-highlight\`가 자동으로 <pre>와 <code>에 하이라이트 클래스 추가 */}
            <pre className="code-block hljs">
                {children}
            </pre>
        </figure>
    )
}
\`\`\`

---


### Img 변환하기

마크다운에서 \`![]()\`로 이미지를 넣으면 \`img\` 태그로 바뀝니다. 다 \`![]()\` 안의 경로를 그대로 쓰면 상세 페이지에서는 이미지가 나오지 않았습니다.
그래서 \`img\` 태그의 \`src\` 값을 블로그에서 사용하는 이미지 경로로 한 번 더 변환해서 사용했습니다.

\`\`\`jsx
const PostDetailPage = () => {
    ...
    
    return (
        ...
        <ReactMarkdown>
            ...
            components={{
                ...
                img({node, children, ...props}) {
                    const path = post.categories.join('/');
                    const baseUrl = '/public/posts';
                    const src = \`\${baseUrl}/\${path}/\${props.src}\`;
                    const alt = props.alt;
        
                    return (<img src={src} alt={alt} loading="lazy"/>);
                }
            }}
        </ReactMarkdown>
    )
}
\`\`\`
`,GS=Object.freeze(Object.defineProperty({__proto__:null,default:qS},Symbol.toStringTag,{value:"Module"})),YS=`---
summary: 리액트로 만든 블로그에 \`<title>\` 을 비롯한 여러가지 메타 태그를 추가·수정하는 과정을 정리했습니다.
tags: 
references: 
created_date: 2026-02-17T15:09:52.000Z
last_modified_date: 2026-02-17T15:09:52.000Z
---

---

> 리액트로 만든 블로그에 \`<title>\` 을 비롯한 여러가지 메타 태그를 추가·수정하는 과정을 정리했습니다.

## 메타 태그: \`react-helmet-async\` 플러그인

리액트로 만든 웹사이트에 메타 태그를 어떻게 추가·수정할지 찾아보니까 \`react-helmet-async\`를 사용하는 방법이 가장 간단해 보였고 이걸 사용하기로 했습니다.

- **\`react-helmet-async\` 설치 명령어**
    \`\`\`bash
    npm install react-helmet-async
    
    \`\`\`
   
    위 명령어를 실행해서 \`react-helmet-async\` 를 설치하려고했지만 아래와 같이 에러가 발생했습니다.


- **\`react-helmet-async\` 설치 에러**
    \`\`\`shell
    npm ERR! code ERESOLVE
    npm ERR! ERESOLVE unable to resolve dependency tree
    
    react-helmet-async 2.0.5
      └── ✕ unmet peer react@"^16.6.0 || ^17.0.0 || ^18.0.0": found 19.0.0
    \`\`\`

  위에 나온 에러 로그를 바탕으로 찾아보니 리액트 19부터는 \`JSX\` 안에서 작성한 \`meta\` 태그를 자동으로 문서의 \`<head>\` 영역으로 올려주는 등 프레임워크 차원에서 메타 태그를 관리할 수 있는 기능이 추가되어, 당장은 \`react-helmet-async\`에서 리액트 19를 별도로 지원하지 않는 것으로 보였습니다.


---

## 메타 태그: 블로그에 맞게 커스텀 구현하기

제 프로젝트의 리액트 버전이 19 라서 \`react-helmet-async\` 를 사용할 수 없을 것 같아서 라이브러리 없이 직접 메타 태그를 관리해보도록 했습니다.

---


### 커스텀 구현: 추가할 메타 태그 정리 

제가 블로그에서 기본으로 관리하는 메타 태그들은 크게 세 종류로 나눌 수 있습니다.

1. **기본 메타 태그**
   - \`title\`: 브라우저 탭과 검색 결과에 표시되는 페이지 제목
   - \`description\`: 페이지 내용을 요약하는 설명
   - \`theme-color\`: 브라우저 UI(주소창 등)에 적용할 대표 색상
   - \`article:published_time\`: 글이 처음 게시된 시각
   - \`article:modified_time\`: 글이 마지막으로 수정된 시각

2. **오픈 그래프(Open Graph) 메타 태그**
   - \`og:type\`: 페이지의 콘텐츠 종류 (예: 블로그 글은 \`article\`, 블로그 메인 페이지는 \`website\`)
   - \`og:title\`: 링크 미리보기 영역에 표시할 제목
   - \`og:description\`: 링크 미리보기용 설명

3. **트위터 카드(Twitter Card) 메타 태그**
   - \`twitter:card\`: 카드 타입 (예: \`summary_large_image\`)
   - \`twitter:title\`: 트위터 카드에 표시할 제목
   - \`twitter:description\`: 트위터 카드에 표시할 설명


---

### 커스텀 구현: 헬퍼 컴포넌트 구현하기

앞에서 정리한 메타 태그들을 페이지마다 일일이 선언하는 대신에 입력 데이터만 넘겨주면 공통 메타 태그를 한 번에 추가해 주는 \`SeoHelper\` 컴포넌트를 아래와 같이 만들었습니다.

- **SEO 기능을 도와줄 Helper 컴포넌트**
  \`\`\`jsx {13-29}
  const SeoHelper = ({
      title,
      description,
      path,
      type='website',
      publishedTime,
      modifiedTime,
  }) => {
      const url = \`https://bak-libra26.co.kr\${path}\`;
  
      return (
          <>
              {/* default */}
              <title>{title}</title>
              <meta name="author" content="bak-libra26"/>
              <meta name="description" content={description}/>
              <meta name="theme-color" content="#ffffff" />
              { publishedTime && ( <meta property="article:published_time" content={publishedTime}/> )}
              { modifiedTime && ( <meta property="article:modified_time" content={modifiedTime}/> )}
  
              {/* OG */}
              <meta property="og:type" content={type}/>
              <meta property="og:title" content={title}/>
              <meta property="og:description" content={description}/>
    
              {/* Twitter */}
              <meta name="twitter:card" content="summary_large_image"/>
              <meta name="twitter:title" content={title}/>
              <meta name="twitter:description" content={description}/>
          </>
      );
  }
  
  export default SeoHelper ;
  \`\`\`


---

### 커스텀 구현: 사용해보기

메타 태그를 관리하기 위한 헬퍼 컴포넌트인 \`SeoHelper\`를 아래와 같이 페이지에 사용해서 각 페이지마다 서로 다른 메타 태그를 설정할 수 있도록 했습니다.  
페이지마다 메타 태그를 직접 지정해 줘야 한다는 점은 다소 아쉽지만 전체 페이지 수가 3개 정도인 비교적 단순한 블로그라서 실제로 사용하면서 큰 불편함은 없었습니다.

- **\`SeoHelper\` 적용 코드**
  \`\`\`jsx {6-11}
  const PostDetailPage = () => {
      const post = ...;
      
      return (
          <>
              <SeoHelper title={\`\${post.title} - bak-libra26\`}
                         description={post.summary}
                         path={\`/posts/\${post.path}\`}
                         type="article"
                         publishedTime={post.createdDate}
                         modifiedTime={post.lastModifiedDate}/>
              ...
          </>
      );
  }
  \`\`\`


`,JS=Object.freeze(Object.defineProperty({__proto__:null,default:YS},Symbol.toStringTag,{value:"Module"})),KS=`---
summary: 블로그 글 상세 페이지에 사이드바 목차(TOC; Table Of Contents) 를 직접 붙인 과정 정리한 글입니다. 마크다운 본문에서 Heading(h2 ~ h4) 를 추출한 후, 목차를 만들어 목차 텍스트를 클릭하면 해당 헤딩 위치로 이동할 수 있도록 했습니다.
tags: 
references: 
created_date: 2026-02-16T15:09:52.000Z
last_modified_date: 2026-02-16T15:09:52.000Z
---

> 이 글은 블로그 글을 읽을 때 상단·사이드에 보이는 목차(TOC) 영역을 직접 구현하는 과정을 정리한 글입니다.


## 목차란 무엇인가?  

소제목(h2 ~ h4)이 많은 긴 글에서는 **목차(TOC)** 가 있느냐 없느냐에 따라 읽기 경험이 상당한 차이가 생기게 됩니다.
목차는 어떤 내용들이 있는지, 지금 내가 글의 어디쯤에 있는지를 한눈에 볼 수 있게하고 원하는 섹션으로 바로 이동했다가 다시 돌아오게 해주기 때문에
글이 더 읽기 편해지고, 블로그 자체도 조금 더 완성된 느낌을 줄 수 있습니다.

---

### 기본 원리

목차를 구현하는 가장 기본적인 방법은 \`a\` 태그의 \`href\` 속성으로 \`h1 ~ h5\` 같은 제목 태그의 \`id\`를 연결하는 것입니다. 
이렇게 연결해 두면 사용자가 링크를 클릭했을 때 브라우저가 자동으로 해당 제목 위치로 스크롤을 이동합니다.


\`\`\`html
<h2 id="intro">intro</h2>
<a href="#intro">intro로 가기</a>
\`\`\`

이 글에서도 목차를 만들 때 같은 원리를 사용하는데 이를 위해서 마크다운에서 제목들을 뽑아 \`id\`를 만들고, 그 \`id\`에 맞춰 \`a\` 태그의 \`href\`를 설정합니다.


---

## 블로그: 상세보기 페이지에 목차 만들기

> 중요! 목차가 제대로 동작하려면, 마크다운을 HTML로 변환할 때 각 \`Heading\`에 고유한 \`id\`를 설정해야 합니다.

이 글에서는 이미 변환된 HTML에 \`id\`가 들어가 있다는 것을 전제로 목차를 구현합니다. 
아직 마크다운을 HTML로 변환하지 않았거나, \`id\` 값을 추가하는 방법을 모르신다면 먼저 [블로그: 마크다운을HTML로 변환하기](https://bak-libra26.co.kr/posts/사이드%20프로젝트/블로그/블로그:%20마크다운을%20HTML로%20변환하기) 글을 보고 와주세요. 

- **\`id\` 속성이 설정된 HTML 파일**
   \`\`\`html
   ...
   <body>
      <h2 id="목차toc란-무엇인가" class="post-heading post-heading__h2">목차(TOC)란 무엇인가?</h2>
      ...
      <h3 id="목차toc-기본-원리" class="post-heading post-heading__h3">목차(TOC) 기본 원리</h3>
       ...
   </body>
   \`\`\`
  
---

### 목차: 컴포넌트 구성하기

이 글에서는 \`<article>\` 안에 본문을 담을 \`<section>\`과 사이드바를 위한 \`<aside>\` 를 분리하고, 사이드바(\`<aside>\`)에 목차를 배치하는 구조로 구현했습니다.

\`\`\`jsx
import ReactMarkdown from "react-markdown";

const PostDetailPage = () => {
    const post = ...

    return (
        <>
            <article className={\`...\`}>
                
                {/* 글 본문 */}
                <section className={\`...\`}>
                    ...
                </section>

                {/* 사이드바: TOC 구현부 */}
                <aside className={\`...\`}>
                    ...
                </aside>

            </article>
        </>
    )
}
\`\`\`

---

### 목차: 데이터 추출하기

목차에는 글 본문에 있는 \`h2 ~ h4\` 헤딩 텍스트가 그대로 들어가게 했습니다. 
그래서 마크다운을 파싱하던 \`MarkdownUtil\`에 \`toc\` 메서드를 하나 추가하고 글을 불러올 때 글 본문의 헤딩 텍스트를 추출했습니다

\`\`\`javascript
import MarkdownUtil from "./markdown-util";

const MarkdownUtil = {
    toc({post}) {
       const content = post.content;
   
       const toc = [];
       
       // 정규식을 통한 Heading 추출
       const matches = content.matchAll(/^(#{2,5})\\s+(.*)$/gm);
   
       for (const match of matches) {
           const hashes = match[1];      // hashes: "###"
           const level = hashes.length;  // level: 3
           const fullText = match[2];    // fullText: "[제목](#anchor)" 또는 "제목"
   
           const linkMatch = fullText.match(/^\\[(.*?)\\]\\(.*?\\)$/);
           const text = linkMatch ? linkMatch[1] : fullText.trim();
   
           // Heading 태그 \`id\` 에 들어갈 값  
           const slug = slugger.slug(text);
   
           toc.push({level, text, slug});
       }
   
       return toc;
   }
}
\`\`\`

\`MarkdownUtil.toc()\`로 글 본문에서 헤딩에 대한 데이터를 \`{ level, text, slug }\` 형태로 추출했습니다.
이후 컴포넌트에서는 데이터를 받아서 \`<a href={#\${slug}}>{text}</a>\` 형태로 목차를 렌더링했습니다.

- **추출 데이터 예시**
   \`\`\`json
   const toc = [
      {
         "level": 3,
         "text": "목차(TOC)란 무엇인가?"
         "slug": "목차toc란-무엇인가"
      },
      {
         "level": 3,
         "text": "목차(toc) 기본 원리"
         "slug": "목차toc-기본-원리"
      },
      ...
   ]
   \`\`\`

---

### 목차: 데이터 활용하기

목차를 만들기위해 \`PostDetailToc\` 라는 컴포넌트를 만들었고 내부에서 \`MarkdownUtil.toc()\`로 \`{ level, text, slug }\` 형태로 만든 데이터를 사용했습니다. 

\`\`\`jsx
const PostDetailToc = ({ post }) => {
   const toc = MarkdownUtil.toc({post: post});
   ...
   
   return (
           <aside className="toc">
              <div className="toc__title">이 글의 목차</div>
              <nav className="toc__nav">
                 <ol className="toc__list">
                    {
                       toc.map((item, index) => {
                          const { level, text, slug } = item;

                          return (
                                  <li key={slug} className={\`toc__item toc__item--h\${level}\`}>
                                     <a href={\`#\${slug}\`} className="toc__link">
                                        {text}
                                     </a>
                                  </li>
                          );
                       })
                    }
                 </ol>
              </nav>
           </aside>
   );
};
\`\`\`

만약 적절한 \`slug\` 값을 \`href\` 에 할당하면, 이걸 클릭 했을 때 해당 \`Heading\`으로 화면이 이동합니다. 
저는 목차를 좀 더 예쁘게 만들기위해서 \`toc__item--h2\`, \`toc__item--h3\`와 같이 레벨별로 다른 클래스명을 부여해줬습니다.

---


### 목차: 마무리

\`\`\`jsx
import ReactMarkdown from "react-markdown";

const PostDetailPage = () => {
    const post = ...

    return (
        <>
            <article className={\`...\`}>
                
                {/* 글 본문 */}
                <section className={\`...\`}>
                    ...
                </section>

                {/* 사이드바: TOC 구현부 */}
                <aside className={\`...\`}>
                    <PostDetailToc post={post} />
                </aside>

            </article>
        </>
    )
}
\`\`\`

이렇게 구성하면 별도의 수작업 없이 자동으로 목차를 생성하고 사이드바에 표시되는 구조를 만들 수 있습니다

---
`,QS=Object.freeze(Object.defineProperty({__proto__:null,default:KS},Symbol.toStringTag,{value:"Module"})),ZS=500,VS=200,sm=/[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g,WS={estimate(a){if(!a)return 1;const r=(a.match(sm)||[]).length,u=a.replace(sm,"").split(/\s+/).filter(d=>d.length>0).length,c=r/ZS+u/VS;return Math.max(1,Math.round(c))}};function om(a){if(!a)return new Date(0);const r=String(a);return/^\d{4}-\d{2}-\d{2}$/.test(r)?new Date(r+"T00:00:00+09:00"):new Date(r)}class XS{constructor({absolutePath:r,metadata:o,content:u}){const c=r.replace("../assets/posts","").replace(/\.md$/,"").slice(1),d=c.lastIndexOf("/");this._path=c,this._title=c.slice(d+1),this._content=u,this._summary=o.summary||"",this._visibility=o.visibility,this._categories=c.slice(0,d).split("/"),this._readingTime=null,this._createdDate=om(o.created_date),this._lastModifiedDate=o.last_modified_date?om(o.last_modified_date):this._createdDate;const p=o.tags;this._tags=Array.isArray(p)?p:typeof p=="string"?p.split(",").map(m=>m.trim()).filter(Boolean):[]}get path(){return this._path}get title(){return this._title}get content(){return this._content}get tags(){return this._tags}get summary(){return this._summary}get categories(){return this._categories}get category(){return this._categories[0]}get subcategory(){return this._categories[1]}get visibility(){return this._visibility}get isHidden(){return this._visibility==="hidden"}get createdDate(){return this._createdDate}get lastModifiedDate(){return this._lastModifiedDate}get readingTime(){return this._readingTime===null&&(this._readingTime=WS.estimate(this._content)),this._readingTime}get seriesKey(){return this._categories.join("/")}}function ah(a){return typeof a>"u"||a===null}function $S(a){return typeof a=="object"&&a!==null}function n1(a){return Array.isArray(a)?a:ah(a)?[]:[a]}function e1(a,r){var o,u,c,d;if(r)for(d=Object.keys(r),o=0,u=d.length;o<u;o+=1)c=d[o],a[c]=r[c];return a}function t1(a,r){var o="",u;for(u=0;u<r;u+=1)o+=a;return o}function a1(a){return a===0&&Number.NEGATIVE_INFINITY===1/a}var l1=ah,i1=$S,r1=n1,s1=t1,o1=a1,u1=e1,Jn={isNothing:l1,isObject:i1,toArray:r1,repeat:s1,isNegativeZero:o1,extend:u1};function lh(a,r){var o="",u=a.reason||"(unknown reason)";return a.mark?(a.mark.name&&(o+='in "'+a.mark.name+'" '),o+="("+(a.mark.line+1)+":"+(a.mark.column+1)+")",!r&&a.mark.snippet&&(o+=`

`+a.mark.snippet),u+" "+o):u}function oi(a,r){Error.call(this),this.name="YAMLException",this.reason=a,this.mark=r,this.message=lh(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}oi.prototype=Object.create(Error.prototype);oi.prototype.constructor=oi;oi.prototype.toString=function(r){return this.name+": "+lh(this,r)};var ie=oi;function _u(a,r,o,u,c){var d="",p="",m=Math.floor(c/2)-1;return u-r>m&&(d=" ... ",r=u-m+d.length),o-u>m&&(p=" ...",o=u+m-p.length),{str:d+a.slice(r,o).replace(/\t/g,"→")+p,pos:u-r+d.length}}function bu(a,r){return Jn.repeat(" ",r-a.length)+a}function c1(a,r){if(r=Object.create(r||null),!a.buffer)return null;r.maxLength||(r.maxLength=79),typeof r.indent!="number"&&(r.indent=1),typeof r.linesBefore!="number"&&(r.linesBefore=3),typeof r.linesAfter!="number"&&(r.linesAfter=2);for(var o=/\r?\n|\r|\0/g,u=[0],c=[],d,p=-1;d=o.exec(a.buffer);)c.push(d.index),u.push(d.index+d[0].length),a.position<=d.index&&p<0&&(p=u.length-2);p<0&&(p=u.length-1);var m="",_,y,S=Math.min(a.line+r.linesAfter,c.length).toString().length,b=r.maxLength-(r.indent+S+3);for(_=1;_<=r.linesBefore&&!(p-_<0);_++)y=_u(a.buffer,u[p-_],c[p-_],a.position-(u[p]-u[p-_]),b),m=Jn.repeat(" ",r.indent)+bu((a.line-_+1).toString(),S)+" | "+y.str+`
`+m;for(y=_u(a.buffer,u[p],c[p],a.position,b),m+=Jn.repeat(" ",r.indent)+bu((a.line+1).toString(),S)+" | "+y.str+`
`,m+=Jn.repeat("-",r.indent+S+3+y.pos)+`^
`,_=1;_<=r.linesAfter&&!(p+_>=c.length);_++)y=_u(a.buffer,u[p+_],c[p+_],a.position-(u[p]-u[p+_]),b),m+=Jn.repeat(" ",r.indent)+bu((a.line+_+1).toString(),S)+" | "+y.str+`
`;return m.replace(/\n$/,"")}var d1=c1,f1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],p1=["scalar","sequence","mapping"];function m1(a){var r={};return a!==null&&Object.keys(a).forEach(function(o){a[o].forEach(function(u){r[String(u)]=o})}),r}function h1(a,r){if(r=r||{},Object.keys(r).forEach(function(o){if(f1.indexOf(o)===-1)throw new ie('Unknown option "'+o+'" is met in definition of "'+a+'" YAML type.')}),this.options=r,this.tag=a,this.kind=r.kind||null,this.resolve=r.resolve||function(){return!0},this.construct=r.construct||function(o){return o},this.instanceOf=r.instanceOf||null,this.predicate=r.predicate||null,this.represent=r.represent||null,this.representName=r.representName||null,this.defaultStyle=r.defaultStyle||null,this.multi=r.multi||!1,this.styleAliases=m1(r.styleAliases||null),p1.indexOf(this.kind)===-1)throw new ie('Unknown kind "'+this.kind+'" is specified for "'+a+'" YAML type.')}var te=h1;function um(a,r){var o=[];return a[r].forEach(function(u){var c=o.length;o.forEach(function(d,p){d.tag===u.tag&&d.kind===u.kind&&d.multi===u.multi&&(c=p)}),o[c]=u}),o}function g1(){var a={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},r,o;function u(c){c.multi?(a.multi[c.kind].push(c),a.multi.fallback.push(c)):a[c.kind][c.tag]=a.fallback[c.tag]=c}for(r=0,o=arguments.length;r<o;r+=1)arguments[r].forEach(u);return a}function wu(a){return this.extend(a)}wu.prototype.extend=function(r){var o=[],u=[];if(r instanceof te)u.push(r);else if(Array.isArray(r))u=u.concat(r);else if(r&&(Array.isArray(r.implicit)||Array.isArray(r.explicit)))r.implicit&&(o=o.concat(r.implicit)),r.explicit&&(u=u.concat(r.explicit));else throw new ie("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(d){if(!(d instanceof te))throw new ie("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(d.loadKind&&d.loadKind!=="scalar")throw new ie("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(d.multi)throw new ie("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),u.forEach(function(d){if(!(d instanceof te))throw new ie("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var c=Object.create(wu.prototype);return c.implicit=(this.implicit||[]).concat(o),c.explicit=(this.explicit||[]).concat(u),c.compiledImplicit=um(c,"implicit"),c.compiledExplicit=um(c,"explicit"),c.compiledTypeMap=g1(c.compiledImplicit,c.compiledExplicit),c};var ih=wu,rh=new te("tag:yaml.org,2002:str",{kind:"scalar",construct:function(a){return a!==null?a:""}}),sh=new te("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(a){return a!==null?a:[]}}),oh=new te("tag:yaml.org,2002:map",{kind:"mapping",construct:function(a){return a!==null?a:{}}}),uh=new ih({explicit:[rh,sh,oh]});function _1(a){if(a===null)return!0;var r=a.length;return r===1&&a==="~"||r===4&&(a==="null"||a==="Null"||a==="NULL")}function b1(){return null}function y1(a){return a===null}var ch=new te("tag:yaml.org,2002:null",{kind:"scalar",resolve:_1,construct:b1,predicate:y1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function v1(a){if(a===null)return!1;var r=a.length;return r===4&&(a==="true"||a==="True"||a==="TRUE")||r===5&&(a==="false"||a==="False"||a==="FALSE")}function S1(a){return a==="true"||a==="True"||a==="TRUE"}function T1(a){return Object.prototype.toString.call(a)==="[object Boolean]"}var dh=new te("tag:yaml.org,2002:bool",{kind:"scalar",resolve:v1,construct:S1,predicate:T1,represent:{lowercase:function(a){return a?"true":"false"},uppercase:function(a){return a?"TRUE":"FALSE"},camelcase:function(a){return a?"True":"False"}},defaultStyle:"lowercase"});function x1(a){return 48<=a&&a<=57||65<=a&&a<=70||97<=a&&a<=102}function A1(a){return 48<=a&&a<=55}function C1(a){return 48<=a&&a<=57}function E1(a){if(a===null)return!1;var r=a.length,o=0,u=!1,c;if(!r)return!1;if(c=a[o],(c==="-"||c==="+")&&(c=a[++o]),c==="0"){if(o+1===r)return!0;if(c=a[++o],c==="b"){for(o++;o<r;o++)if(c=a[o],c!=="_"){if(c!=="0"&&c!=="1")return!1;u=!0}return u&&c!=="_"}if(c==="x"){for(o++;o<r;o++)if(c=a[o],c!=="_"){if(!x1(a.charCodeAt(o)))return!1;u=!0}return u&&c!=="_"}if(c==="o"){for(o++;o<r;o++)if(c=a[o],c!=="_"){if(!A1(a.charCodeAt(o)))return!1;u=!0}return u&&c!=="_"}}if(c==="_")return!1;for(;o<r;o++)if(c=a[o],c!=="_"){if(!C1(a.charCodeAt(o)))return!1;u=!0}return!(!u||c==="_")}function R1(a){var r=a,o=1,u;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),u=r[0],(u==="-"||u==="+")&&(u==="-"&&(o=-1),r=r.slice(1),u=r[0]),r==="0")return 0;if(u==="0"){if(r[1]==="b")return o*parseInt(r.slice(2),2);if(r[1]==="x")return o*parseInt(r.slice(2),16);if(r[1]==="o")return o*parseInt(r.slice(2),8)}return o*parseInt(r,10)}function M1(a){return Object.prototype.toString.call(a)==="[object Number]"&&a%1===0&&!Jn.isNegativeZero(a)}var fh=new te("tag:yaml.org,2002:int",{kind:"scalar",resolve:E1,construct:R1,predicate:M1,represent:{binary:function(a){return a>=0?"0b"+a.toString(2):"-0b"+a.toString(2).slice(1)},octal:function(a){return a>=0?"0o"+a.toString(8):"-0o"+a.toString(8).slice(1)},decimal:function(a){return a.toString(10)},hexadecimal:function(a){return a>=0?"0x"+a.toString(16).toUpperCase():"-0x"+a.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),O1=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function w1(a){return!(a===null||!O1.test(a)||a[a.length-1]==="_")}function D1(a){var r,o;return r=a.replace(/_/g,"").toLowerCase(),o=r[0]==="-"?-1:1,"+-".indexOf(r[0])>=0&&(r=r.slice(1)),r===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:r===".nan"?NaN:o*parseFloat(r,10)}var j1=/^[-+]?[0-9]+e/;function k1(a,r){var o;if(isNaN(a))switch(r){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===a)switch(r){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===a)switch(r){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Jn.isNegativeZero(a))return"-0.0";return o=a.toString(10),j1.test(o)?o.replace("e",".e"):o}function N1(a){return Object.prototype.toString.call(a)==="[object Number]"&&(a%1!==0||Jn.isNegativeZero(a))}var ph=new te("tag:yaml.org,2002:float",{kind:"scalar",resolve:w1,construct:D1,predicate:N1,represent:k1,defaultStyle:"lowercase"}),mh=uh.extend({implicit:[ch,dh,fh,ph]}),hh=mh,gh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_h=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function L1(a){return a===null?!1:gh.exec(a)!==null||_h.exec(a)!==null}function H1(a){var r,o,u,c,d,p,m,_=0,y=null,S,b,D;if(r=gh.exec(a),r===null&&(r=_h.exec(a)),r===null)throw new Error("Date resolve error");if(o=+r[1],u=+r[2]-1,c=+r[3],!r[4])return new Date(Date.UTC(o,u,c));if(d=+r[4],p=+r[5],m=+r[6],r[7]){for(_=r[7].slice(0,3);_.length<3;)_+="0";_=+_}return r[9]&&(S=+r[10],b=+(r[11]||0),y=(S*60+b)*6e4,r[9]==="-"&&(y=-y)),D=new Date(Date.UTC(o,u,c,d,p,m,_)),y&&D.setTime(D.getTime()-y),D}function B1(a){return a.toISOString()}var bh=new te("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:L1,construct:H1,instanceOf:Date,represent:B1});function U1(a){return a==="<<"||a===null}var yh=new te("tag:yaml.org,2002:merge",{kind:"scalar",resolve:U1}),zu=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function z1(a){if(a===null)return!1;var r,o,u=0,c=a.length,d=zu;for(o=0;o<c;o++)if(r=d.indexOf(a.charAt(o)),!(r>64)){if(r<0)return!1;u+=6}return u%8===0}function I1(a){var r,o,u=a.replace(/[\r\n=]/g,""),c=u.length,d=zu,p=0,m=[];for(r=0;r<c;r++)r%4===0&&r&&(m.push(p>>16&255),m.push(p>>8&255),m.push(p&255)),p=p<<6|d.indexOf(u.charAt(r));return o=c%4*6,o===0?(m.push(p>>16&255),m.push(p>>8&255),m.push(p&255)):o===18?(m.push(p>>10&255),m.push(p>>2&255)):o===12&&m.push(p>>4&255),new Uint8Array(m)}function P1(a){var r="",o=0,u,c,d=a.length,p=zu;for(u=0;u<d;u++)u%3===0&&u&&(r+=p[o>>18&63],r+=p[o>>12&63],r+=p[o>>6&63],r+=p[o&63]),o=(o<<8)+a[u];return c=d%3,c===0?(r+=p[o>>18&63],r+=p[o>>12&63],r+=p[o>>6&63],r+=p[o&63]):c===2?(r+=p[o>>10&63],r+=p[o>>4&63],r+=p[o<<2&63],r+=p[64]):c===1&&(r+=p[o>>2&63],r+=p[o<<4&63],r+=p[64],r+=p[64]),r}function F1(a){return Object.prototype.toString.call(a)==="[object Uint8Array]"}var vh=new te("tag:yaml.org,2002:binary",{kind:"scalar",resolve:z1,construct:I1,predicate:F1,represent:P1}),q1=Object.prototype.hasOwnProperty,G1=Object.prototype.toString;function Y1(a){if(a===null)return!0;var r=[],o,u,c,d,p,m=a;for(o=0,u=m.length;o<u;o+=1){if(c=m[o],p=!1,G1.call(c)!=="[object Object]")return!1;for(d in c)if(q1.call(c,d))if(!p)p=!0;else return!1;if(!p)return!1;if(r.indexOf(d)===-1)r.push(d);else return!1}return!0}function J1(a){return a!==null?a:[]}var Sh=new te("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Y1,construct:J1}),K1=Object.prototype.toString;function Q1(a){if(a===null)return!0;var r,o,u,c,d,p=a;for(d=new Array(p.length),r=0,o=p.length;r<o;r+=1){if(u=p[r],K1.call(u)!=="[object Object]"||(c=Object.keys(u),c.length!==1))return!1;d[r]=[c[0],u[c[0]]]}return!0}function Z1(a){if(a===null)return[];var r,o,u,c,d,p=a;for(d=new Array(p.length),r=0,o=p.length;r<o;r+=1)u=p[r],c=Object.keys(u),d[r]=[c[0],u[c[0]]];return d}var Th=new te("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Q1,construct:Z1}),V1=Object.prototype.hasOwnProperty;function W1(a){if(a===null)return!0;var r,o=a;for(r in o)if(V1.call(o,r)&&o[r]!==null)return!1;return!0}function X1(a){return a!==null?a:{}}var xh=new te("tag:yaml.org,2002:set",{kind:"mapping",resolve:W1,construct:X1}),Iu=hh.extend({implicit:[bh,yh],explicit:[vh,Sh,Th,xh]}),Pt=Object.prototype.hasOwnProperty,zr=1,Ah=2,Ch=3,Ir=4,yu=1,$1=2,cm=3,n2=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,e2=/[\x85\u2028\u2029]/,t2=/[,\[\]\{\}]/,Eh=/^(?:!|!!|![a-z\-]+!)$/i,Rh=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function dm(a){return Object.prototype.toString.call(a)}function Ye(a){return a===10||a===13}function ua(a){return a===9||a===32}function pe(a){return a===9||a===32||a===10||a===13}function nl(a){return a===44||a===91||a===93||a===123||a===125}function a2(a){var r;return 48<=a&&a<=57?a-48:(r=a|32,97<=r&&r<=102?r-97+10:-1)}function l2(a){return a===120?2:a===117?4:a===85?8:0}function i2(a){return 48<=a&&a<=57?a-48:-1}function fm(a){return a===48?"\0":a===97?"\x07":a===98?"\b":a===116||a===9?"	":a===110?`
`:a===118?"\v":a===102?"\f":a===114?"\r":a===101?"\x1B":a===32?" ":a===34?'"':a===47?"/":a===92?"\\":a===78?"":a===95?" ":a===76?"\u2028":a===80?"\u2029":""}function r2(a){return a<=65535?String.fromCharCode(a):String.fromCharCode((a-65536>>10)+55296,(a-65536&1023)+56320)}function Mh(a,r,o){r==="__proto__"?Object.defineProperty(a,r,{configurable:!0,enumerable:!0,writable:!0,value:o}):a[r]=o}var Oh=new Array(256),wh=new Array(256);for(var Va=0;Va<256;Va++)Oh[Va]=fm(Va)?1:0,wh[Va]=fm(Va);function s2(a,r){this.input=a,this.filename=r.filename||null,this.schema=r.schema||Iu,this.onWarning=r.onWarning||null,this.legacy=r.legacy||!1,this.json=r.json||!1,this.listener=r.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=a.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Dh(a,r){var o={name:a.filename,buffer:a.input.slice(0,-1),position:a.position,line:a.line,column:a.position-a.lineStart};return o.snippet=d1(o),new ie(r,o)}function sn(a,r){throw Dh(a,r)}function Pr(a,r){a.onWarning&&a.onWarning.call(null,Dh(a,r))}var pm={YAML:function(r,o,u){var c,d,p;r.version!==null&&sn(r,"duplication of %YAML directive"),u.length!==1&&sn(r,"YAML directive accepts exactly one argument"),c=/^([0-9]+)\.([0-9]+)$/.exec(u[0]),c===null&&sn(r,"ill-formed argument of the YAML directive"),d=parseInt(c[1],10),p=parseInt(c[2],10),d!==1&&sn(r,"unacceptable YAML version of the document"),r.version=u[0],r.checkLineBreaks=p<2,p!==1&&p!==2&&Pr(r,"unsupported YAML version of the document")},TAG:function(r,o,u){var c,d;u.length!==2&&sn(r,"TAG directive accepts exactly two arguments"),c=u[0],d=u[1],Eh.test(c)||sn(r,"ill-formed tag handle (first argument) of the TAG directive"),Pt.call(r.tagMap,c)&&sn(r,'there is a previously declared suffix for "'+c+'" tag handle'),Rh.test(d)||sn(r,"ill-formed tag prefix (second argument) of the TAG directive");try{d=decodeURIComponent(d)}catch{sn(r,"tag prefix is malformed: "+d)}r.tagMap[c]=d}};function It(a,r,o,u){var c,d,p,m;if(r<o){if(m=a.input.slice(r,o),u)for(c=0,d=m.length;c<d;c+=1)p=m.charCodeAt(c),p===9||32<=p&&p<=1114111||sn(a,"expected valid JSON character");else n2.test(m)&&sn(a,"the stream contains non-printable characters");a.result+=m}}function mm(a,r,o,u){var c,d,p,m;for(Jn.isObject(o)||sn(a,"cannot merge mappings; the provided source object is unacceptable"),c=Object.keys(o),p=0,m=c.length;p<m;p+=1)d=c[p],Pt.call(r,d)||(Mh(r,d,o[d]),u[d]=!0)}function el(a,r,o,u,c,d,p,m,_){var y,S;if(Array.isArray(c))for(c=Array.prototype.slice.call(c),y=0,S=c.length;y<S;y+=1)Array.isArray(c[y])&&sn(a,"nested arrays are not supported inside keys"),typeof c=="object"&&dm(c[y])==="[object Object]"&&(c[y]="[object Object]");if(typeof c=="object"&&dm(c)==="[object Object]"&&(c="[object Object]"),c=String(c),r===null&&(r={}),u==="tag:yaml.org,2002:merge")if(Array.isArray(d))for(y=0,S=d.length;y<S;y+=1)mm(a,r,d[y],o);else mm(a,r,d,o);else!a.json&&!Pt.call(o,c)&&Pt.call(r,c)&&(a.line=p||a.line,a.lineStart=m||a.lineStart,a.position=_||a.position,sn(a,"duplicated mapping key")),Mh(r,c,d),delete o[c];return r}function Pu(a){var r;r=a.input.charCodeAt(a.position),r===10?a.position++:r===13?(a.position++,a.input.charCodeAt(a.position)===10&&a.position++):sn(a,"a line break is expected"),a.line+=1,a.lineStart=a.position,a.firstTabInLine=-1}function Gn(a,r,o){for(var u=0,c=a.input.charCodeAt(a.position);c!==0;){for(;ua(c);)c===9&&a.firstTabInLine===-1&&(a.firstTabInLine=a.position),c=a.input.charCodeAt(++a.position);if(r&&c===35)do c=a.input.charCodeAt(++a.position);while(c!==10&&c!==13&&c!==0);if(Ye(c))for(Pu(a),c=a.input.charCodeAt(a.position),u++,a.lineIndent=0;c===32;)a.lineIndent++,c=a.input.charCodeAt(++a.position);else break}return o!==-1&&u!==0&&a.lineIndent<o&&Pr(a,"deficient indentation"),u}function Jr(a){var r=a.position,o;return o=a.input.charCodeAt(r),!!((o===45||o===46)&&o===a.input.charCodeAt(r+1)&&o===a.input.charCodeAt(r+2)&&(r+=3,o=a.input.charCodeAt(r),o===0||pe(o)))}function Fu(a,r){r===1?a.result+=" ":r>1&&(a.result+=Jn.repeat(`
`,r-1))}function o2(a,r,o){var u,c,d,p,m,_,y,S,b=a.kind,D=a.result,C;if(C=a.input.charCodeAt(a.position),pe(C)||nl(C)||C===35||C===38||C===42||C===33||C===124||C===62||C===39||C===34||C===37||C===64||C===96||(C===63||C===45)&&(c=a.input.charCodeAt(a.position+1),pe(c)||o&&nl(c)))return!1;for(a.kind="scalar",a.result="",d=p=a.position,m=!1;C!==0;){if(C===58){if(c=a.input.charCodeAt(a.position+1),pe(c)||o&&nl(c))break}else if(C===35){if(u=a.input.charCodeAt(a.position-1),pe(u))break}else{if(a.position===a.lineStart&&Jr(a)||o&&nl(C))break;if(Ye(C))if(_=a.line,y=a.lineStart,S=a.lineIndent,Gn(a,!1,-1),a.lineIndent>=r){m=!0,C=a.input.charCodeAt(a.position);continue}else{a.position=p,a.line=_,a.lineStart=y,a.lineIndent=S;break}}m&&(It(a,d,p,!1),Fu(a,a.line-_),d=p=a.position,m=!1),ua(C)||(p=a.position+1),C=a.input.charCodeAt(++a.position)}return It(a,d,p,!1),a.result?!0:(a.kind=b,a.result=D,!1)}function u2(a,r){var o,u,c;if(o=a.input.charCodeAt(a.position),o!==39)return!1;for(a.kind="scalar",a.result="",a.position++,u=c=a.position;(o=a.input.charCodeAt(a.position))!==0;)if(o===39)if(It(a,u,a.position,!0),o=a.input.charCodeAt(++a.position),o===39)u=a.position,a.position++,c=a.position;else return!0;else Ye(o)?(It(a,u,c,!0),Fu(a,Gn(a,!1,r)),u=c=a.position):a.position===a.lineStart&&Jr(a)?sn(a,"unexpected end of the document within a single quoted scalar"):(a.position++,c=a.position);sn(a,"unexpected end of the stream within a single quoted scalar")}function c2(a,r){var o,u,c,d,p,m;if(m=a.input.charCodeAt(a.position),m!==34)return!1;for(a.kind="scalar",a.result="",a.position++,o=u=a.position;(m=a.input.charCodeAt(a.position))!==0;){if(m===34)return It(a,o,a.position,!0),a.position++,!0;if(m===92){if(It(a,o,a.position,!0),m=a.input.charCodeAt(++a.position),Ye(m))Gn(a,!1,r);else if(m<256&&Oh[m])a.result+=wh[m],a.position++;else if((p=l2(m))>0){for(c=p,d=0;c>0;c--)m=a.input.charCodeAt(++a.position),(p=a2(m))>=0?d=(d<<4)+p:sn(a,"expected hexadecimal character");a.result+=r2(d),a.position++}else sn(a,"unknown escape sequence");o=u=a.position}else Ye(m)?(It(a,o,u,!0),Fu(a,Gn(a,!1,r)),o=u=a.position):a.position===a.lineStart&&Jr(a)?sn(a,"unexpected end of the document within a double quoted scalar"):(a.position++,u=a.position)}sn(a,"unexpected end of the stream within a double quoted scalar")}function d2(a,r){var o=!0,u,c,d,p=a.tag,m,_=a.anchor,y,S,b,D,C,O=Object.create(null),P,E,B,H;if(H=a.input.charCodeAt(a.position),H===91)S=93,C=!1,m=[];else if(H===123)S=125,C=!0,m={};else return!1;for(a.anchor!==null&&(a.anchorMap[a.anchor]=m),H=a.input.charCodeAt(++a.position);H!==0;){if(Gn(a,!0,r),H=a.input.charCodeAt(a.position),H===S)return a.position++,a.tag=p,a.anchor=_,a.kind=C?"mapping":"sequence",a.result=m,!0;o?H===44&&sn(a,"expected the node content, but found ','"):sn(a,"missed comma between flow collection entries"),E=P=B=null,b=D=!1,H===63&&(y=a.input.charCodeAt(a.position+1),pe(y)&&(b=D=!0,a.position++,Gn(a,!0,r))),u=a.line,c=a.lineStart,d=a.position,tl(a,r,zr,!1,!0),E=a.tag,P=a.result,Gn(a,!0,r),H=a.input.charCodeAt(a.position),(D||a.line===u)&&H===58&&(b=!0,H=a.input.charCodeAt(++a.position),Gn(a,!0,r),tl(a,r,zr,!1,!0),B=a.result),C?el(a,m,O,E,P,B,u,c,d):b?m.push(el(a,null,O,E,P,B,u,c,d)):m.push(P),Gn(a,!0,r),H=a.input.charCodeAt(a.position),H===44?(o=!0,H=a.input.charCodeAt(++a.position)):o=!1}sn(a,"unexpected end of the stream within a flow collection")}function f2(a,r){var o,u,c=yu,d=!1,p=!1,m=r,_=0,y=!1,S,b;if(b=a.input.charCodeAt(a.position),b===124)u=!1;else if(b===62)u=!0;else return!1;for(a.kind="scalar",a.result="";b!==0;)if(b=a.input.charCodeAt(++a.position),b===43||b===45)yu===c?c=b===43?cm:$1:sn(a,"repeat of a chomping mode identifier");else if((S=i2(b))>=0)S===0?sn(a,"bad explicit indentation width of a block scalar; it cannot be less than one"):p?sn(a,"repeat of an indentation width identifier"):(m=r+S-1,p=!0);else break;if(ua(b)){do b=a.input.charCodeAt(++a.position);while(ua(b));if(b===35)do b=a.input.charCodeAt(++a.position);while(!Ye(b)&&b!==0)}for(;b!==0;){for(Pu(a),a.lineIndent=0,b=a.input.charCodeAt(a.position);(!p||a.lineIndent<m)&&b===32;)a.lineIndent++,b=a.input.charCodeAt(++a.position);if(!p&&a.lineIndent>m&&(m=a.lineIndent),Ye(b)){_++;continue}if(a.lineIndent<m){c===cm?a.result+=Jn.repeat(`
`,d?1+_:_):c===yu&&d&&(a.result+=`
`);break}for(u?ua(b)?(y=!0,a.result+=Jn.repeat(`
`,d?1+_:_)):y?(y=!1,a.result+=Jn.repeat(`
`,_+1)):_===0?d&&(a.result+=" "):a.result+=Jn.repeat(`
`,_):a.result+=Jn.repeat(`
`,d?1+_:_),d=!0,p=!0,_=0,o=a.position;!Ye(b)&&b!==0;)b=a.input.charCodeAt(++a.position);It(a,o,a.position,!1)}return!0}function hm(a,r){var o,u=a.tag,c=a.anchor,d=[],p,m=!1,_;if(a.firstTabInLine!==-1)return!1;for(a.anchor!==null&&(a.anchorMap[a.anchor]=d),_=a.input.charCodeAt(a.position);_!==0&&(a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,sn(a,"tab characters must not be used in indentation")),!(_!==45||(p=a.input.charCodeAt(a.position+1),!pe(p))));){if(m=!0,a.position++,Gn(a,!0,-1)&&a.lineIndent<=r){d.push(null),_=a.input.charCodeAt(a.position);continue}if(o=a.line,tl(a,r,Ch,!1,!0),d.push(a.result),Gn(a,!0,-1),_=a.input.charCodeAt(a.position),(a.line===o||a.lineIndent>r)&&_!==0)sn(a,"bad indentation of a sequence entry");else if(a.lineIndent<r)break}return m?(a.tag=u,a.anchor=c,a.kind="sequence",a.result=d,!0):!1}function p2(a,r,o){var u,c,d,p,m,_,y=a.tag,S=a.anchor,b={},D=Object.create(null),C=null,O=null,P=null,E=!1,B=!1,H;if(a.firstTabInLine!==-1)return!1;for(a.anchor!==null&&(a.anchorMap[a.anchor]=b),H=a.input.charCodeAt(a.position);H!==0;){if(!E&&a.firstTabInLine!==-1&&(a.position=a.firstTabInLine,sn(a,"tab characters must not be used in indentation")),u=a.input.charCodeAt(a.position+1),d=a.line,(H===63||H===58)&&pe(u))H===63?(E&&(el(a,b,D,C,O,null,p,m,_),C=O=P=null),B=!0,E=!0,c=!0):E?(E=!1,c=!0):sn(a,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),a.position+=1,H=u;else{if(p=a.line,m=a.lineStart,_=a.position,!tl(a,o,Ah,!1,!0))break;if(a.line===d){for(H=a.input.charCodeAt(a.position);ua(H);)H=a.input.charCodeAt(++a.position);if(H===58)H=a.input.charCodeAt(++a.position),pe(H)||sn(a,"a whitespace character is expected after the key-value separator within a block mapping"),E&&(el(a,b,D,C,O,null,p,m,_),C=O=P=null),B=!0,E=!1,c=!1,C=a.tag,O=a.result;else if(B)sn(a,"can not read an implicit mapping pair; a colon is missed");else return a.tag=y,a.anchor=S,!0}else if(B)sn(a,"can not read a block mapping entry; a multiline key may not be an implicit key");else return a.tag=y,a.anchor=S,!0}if((a.line===d||a.lineIndent>r)&&(E&&(p=a.line,m=a.lineStart,_=a.position),tl(a,r,Ir,!0,c)&&(E?O=a.result:P=a.result),E||(el(a,b,D,C,O,P,p,m,_),C=O=P=null),Gn(a,!0,-1),H=a.input.charCodeAt(a.position)),(a.line===d||a.lineIndent>r)&&H!==0)sn(a,"bad indentation of a mapping entry");else if(a.lineIndent<r)break}return E&&el(a,b,D,C,O,null,p,m,_),B&&(a.tag=y,a.anchor=S,a.kind="mapping",a.result=b),B}function m2(a){var r,o=!1,u=!1,c,d,p;if(p=a.input.charCodeAt(a.position),p!==33)return!1;if(a.tag!==null&&sn(a,"duplication of a tag property"),p=a.input.charCodeAt(++a.position),p===60?(o=!0,p=a.input.charCodeAt(++a.position)):p===33?(u=!0,c="!!",p=a.input.charCodeAt(++a.position)):c="!",r=a.position,o){do p=a.input.charCodeAt(++a.position);while(p!==0&&p!==62);a.position<a.length?(d=a.input.slice(r,a.position),p=a.input.charCodeAt(++a.position)):sn(a,"unexpected end of the stream within a verbatim tag")}else{for(;p!==0&&!pe(p);)p===33&&(u?sn(a,"tag suffix cannot contain exclamation marks"):(c=a.input.slice(r-1,a.position+1),Eh.test(c)||sn(a,"named tag handle cannot contain such characters"),u=!0,r=a.position+1)),p=a.input.charCodeAt(++a.position);d=a.input.slice(r,a.position),t2.test(d)&&sn(a,"tag suffix cannot contain flow indicator characters")}d&&!Rh.test(d)&&sn(a,"tag name cannot contain such characters: "+d);try{d=decodeURIComponent(d)}catch{sn(a,"tag name is malformed: "+d)}return o?a.tag=d:Pt.call(a.tagMap,c)?a.tag=a.tagMap[c]+d:c==="!"?a.tag="!"+d:c==="!!"?a.tag="tag:yaml.org,2002:"+d:sn(a,'undeclared tag handle "'+c+'"'),!0}function h2(a){var r,o;if(o=a.input.charCodeAt(a.position),o!==38)return!1;for(a.anchor!==null&&sn(a,"duplication of an anchor property"),o=a.input.charCodeAt(++a.position),r=a.position;o!==0&&!pe(o)&&!nl(o);)o=a.input.charCodeAt(++a.position);return a.position===r&&sn(a,"name of an anchor node must contain at least one character"),a.anchor=a.input.slice(r,a.position),!0}function g2(a){var r,o,u;if(u=a.input.charCodeAt(a.position),u!==42)return!1;for(u=a.input.charCodeAt(++a.position),r=a.position;u!==0&&!pe(u)&&!nl(u);)u=a.input.charCodeAt(++a.position);return a.position===r&&sn(a,"name of an alias node must contain at least one character"),o=a.input.slice(r,a.position),Pt.call(a.anchorMap,o)||sn(a,'unidentified alias "'+o+'"'),a.result=a.anchorMap[o],Gn(a,!0,-1),!0}function tl(a,r,o,u,c){var d,p,m,_=1,y=!1,S=!1,b,D,C,O,P,E;if(a.listener!==null&&a.listener("open",a),a.tag=null,a.anchor=null,a.kind=null,a.result=null,d=p=m=Ir===o||Ch===o,u&&Gn(a,!0,-1)&&(y=!0,a.lineIndent>r?_=1:a.lineIndent===r?_=0:a.lineIndent<r&&(_=-1)),_===1)for(;m2(a)||h2(a);)Gn(a,!0,-1)?(y=!0,m=d,a.lineIndent>r?_=1:a.lineIndent===r?_=0:a.lineIndent<r&&(_=-1)):m=!1;if(m&&(m=y||c),(_===1||Ir===o)&&(zr===o||Ah===o?P=r:P=r+1,E=a.position-a.lineStart,_===1?m&&(hm(a,E)||p2(a,E,P))||d2(a,P)?S=!0:(p&&f2(a,P)||u2(a,P)||c2(a,P)?S=!0:g2(a)?(S=!0,(a.tag!==null||a.anchor!==null)&&sn(a,"alias node should not have any properties")):o2(a,P,zr===o)&&(S=!0,a.tag===null&&(a.tag="?")),a.anchor!==null&&(a.anchorMap[a.anchor]=a.result)):_===0&&(S=m&&hm(a,E))),a.tag===null)a.anchor!==null&&(a.anchorMap[a.anchor]=a.result);else if(a.tag==="?"){for(a.result!==null&&a.kind!=="scalar"&&sn(a,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+a.kind+'"'),b=0,D=a.implicitTypes.length;b<D;b+=1)if(O=a.implicitTypes[b],O.resolve(a.result)){a.result=O.construct(a.result),a.tag=O.tag,a.anchor!==null&&(a.anchorMap[a.anchor]=a.result);break}}else if(a.tag!=="!"){if(Pt.call(a.typeMap[a.kind||"fallback"],a.tag))O=a.typeMap[a.kind||"fallback"][a.tag];else for(O=null,C=a.typeMap.multi[a.kind||"fallback"],b=0,D=C.length;b<D;b+=1)if(a.tag.slice(0,C[b].tag.length)===C[b].tag){O=C[b];break}O||sn(a,"unknown tag !<"+a.tag+">"),a.result!==null&&O.kind!==a.kind&&sn(a,"unacceptable node kind for !<"+a.tag+'> tag; it should be "'+O.kind+'", not "'+a.kind+'"'),O.resolve(a.result,a.tag)?(a.result=O.construct(a.result,a.tag),a.anchor!==null&&(a.anchorMap[a.anchor]=a.result)):sn(a,"cannot resolve a node with !<"+a.tag+"> explicit tag")}return a.listener!==null&&a.listener("close",a),a.tag!==null||a.anchor!==null||S}function _2(a){var r=a.position,o,u,c,d=!1,p;for(a.version=null,a.checkLineBreaks=a.legacy,a.tagMap=Object.create(null),a.anchorMap=Object.create(null);(p=a.input.charCodeAt(a.position))!==0&&(Gn(a,!0,-1),p=a.input.charCodeAt(a.position),!(a.lineIndent>0||p!==37));){for(d=!0,p=a.input.charCodeAt(++a.position),o=a.position;p!==0&&!pe(p);)p=a.input.charCodeAt(++a.position);for(u=a.input.slice(o,a.position),c=[],u.length<1&&sn(a,"directive name must not be less than one character in length");p!==0;){for(;ua(p);)p=a.input.charCodeAt(++a.position);if(p===35){do p=a.input.charCodeAt(++a.position);while(p!==0&&!Ye(p));break}if(Ye(p))break;for(o=a.position;p!==0&&!pe(p);)p=a.input.charCodeAt(++a.position);c.push(a.input.slice(o,a.position))}p!==0&&Pu(a),Pt.call(pm,u)?pm[u](a,u,c):Pr(a,'unknown document directive "'+u+'"')}if(Gn(a,!0,-1),a.lineIndent===0&&a.input.charCodeAt(a.position)===45&&a.input.charCodeAt(a.position+1)===45&&a.input.charCodeAt(a.position+2)===45?(a.position+=3,Gn(a,!0,-1)):d&&sn(a,"directives end mark is expected"),tl(a,a.lineIndent-1,Ir,!1,!0),Gn(a,!0,-1),a.checkLineBreaks&&e2.test(a.input.slice(r,a.position))&&Pr(a,"non-ASCII line breaks are interpreted as content"),a.documents.push(a.result),a.position===a.lineStart&&Jr(a)){a.input.charCodeAt(a.position)===46&&(a.position+=3,Gn(a,!0,-1));return}if(a.position<a.length-1)sn(a,"end of the stream or a document separator is expected");else return}function jh(a,r){a=String(a),r=r||{},a.length!==0&&(a.charCodeAt(a.length-1)!==10&&a.charCodeAt(a.length-1)!==13&&(a+=`
`),a.charCodeAt(0)===65279&&(a=a.slice(1)));var o=new s2(a,r),u=a.indexOf("\0");for(u!==-1&&(o.position=u,sn(o,"null byte is not allowed in input")),o.input+="\0";o.input.charCodeAt(o.position)===32;)o.lineIndent+=1,o.position+=1;for(;o.position<o.length-1;)_2(o);return o.documents}function b2(a,r,o){r!==null&&typeof r=="object"&&typeof o>"u"&&(o=r,r=null);var u=jh(a,o);if(typeof r!="function")return u;for(var c=0,d=u.length;c<d;c+=1)r(u[c])}function y2(a,r){var o=jh(a,r);if(o.length!==0){if(o.length===1)return o[0];throw new ie("expected a single document in the stream, but found more")}}var v2=b2,S2=y2,kh={loadAll:v2,load:S2},Nh=Object.prototype.toString,Lh=Object.prototype.hasOwnProperty,qu=65279,T2=9,ui=10,x2=13,A2=32,C2=33,E2=34,Du=35,R2=37,M2=38,O2=39,w2=42,Hh=44,D2=45,Fr=58,j2=61,k2=62,N2=63,L2=64,Bh=91,Uh=93,H2=96,zh=123,B2=124,Ih=125,ae={};ae[0]="\\0";ae[7]="\\a";ae[8]="\\b";ae[9]="\\t";ae[10]="\\n";ae[11]="\\v";ae[12]="\\f";ae[13]="\\r";ae[27]="\\e";ae[34]='\\"';ae[92]="\\\\";ae[133]="\\N";ae[160]="\\_";ae[8232]="\\L";ae[8233]="\\P";var U2=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],z2=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function I2(a,r){var o,u,c,d,p,m,_;if(r===null)return{};for(o={},u=Object.keys(r),c=0,d=u.length;c<d;c+=1)p=u[c],m=String(r[p]),p.slice(0,2)==="!!"&&(p="tag:yaml.org,2002:"+p.slice(2)),_=a.compiledTypeMap.fallback[p],_&&Lh.call(_.styleAliases,m)&&(m=_.styleAliases[m]),o[p]=m;return o}function P2(a){var r,o,u;if(r=a.toString(16).toUpperCase(),a<=255)o="x",u=2;else if(a<=65535)o="u",u=4;else if(a<=4294967295)o="U",u=8;else throw new ie("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+o+Jn.repeat("0",u-r.length)+r}var F2=1,ci=2;function q2(a){this.schema=a.schema||Iu,this.indent=Math.max(1,a.indent||2),this.noArrayIndent=a.noArrayIndent||!1,this.skipInvalid=a.skipInvalid||!1,this.flowLevel=Jn.isNothing(a.flowLevel)?-1:a.flowLevel,this.styleMap=I2(this.schema,a.styles||null),this.sortKeys=a.sortKeys||!1,this.lineWidth=a.lineWidth||80,this.noRefs=a.noRefs||!1,this.noCompatMode=a.noCompatMode||!1,this.condenseFlow=a.condenseFlow||!1,this.quotingType=a.quotingType==='"'?ci:F2,this.forceQuotes=a.forceQuotes||!1,this.replacer=typeof a.replacer=="function"?a.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function gm(a,r){for(var o=Jn.repeat(" ",r),u=0,c=-1,d="",p,m=a.length;u<m;)c=a.indexOf(`
`,u),c===-1?(p=a.slice(u),u=m):(p=a.slice(u,c+1),u=c+1),p.length&&p!==`
`&&(d+=o),d+=p;return d}function ju(a,r){return`
`+Jn.repeat(" ",a.indent*r)}function G2(a,r){var o,u,c;for(o=0,u=a.implicitTypes.length;o<u;o+=1)if(c=a.implicitTypes[o],c.resolve(r))return!0;return!1}function qr(a){return a===A2||a===T2}function di(a){return 32<=a&&a<=126||161<=a&&a<=55295&&a!==8232&&a!==8233||57344<=a&&a<=65533&&a!==qu||65536<=a&&a<=1114111}function _m(a){return di(a)&&a!==qu&&a!==x2&&a!==ui}function bm(a,r,o){var u=_m(a),c=u&&!qr(a);return(o?u:u&&a!==Hh&&a!==Bh&&a!==Uh&&a!==zh&&a!==Ih)&&a!==Du&&!(r===Fr&&!c)||_m(r)&&!qr(r)&&a===Du||r===Fr&&c}function Y2(a){return di(a)&&a!==qu&&!qr(a)&&a!==D2&&a!==N2&&a!==Fr&&a!==Hh&&a!==Bh&&a!==Uh&&a!==zh&&a!==Ih&&a!==Du&&a!==M2&&a!==w2&&a!==C2&&a!==B2&&a!==j2&&a!==k2&&a!==O2&&a!==E2&&a!==R2&&a!==L2&&a!==H2}function J2(a){return!qr(a)&&a!==Fr}function ri(a,r){var o=a.charCodeAt(r),u;return o>=55296&&o<=56319&&r+1<a.length&&(u=a.charCodeAt(r+1),u>=56320&&u<=57343)?(o-55296)*1024+u-56320+65536:o}function Ph(a){var r=/^\n* /;return r.test(a)}var Fh=1,ku=2,qh=3,Gh=4,$a=5;function K2(a,r,o,u,c,d,p,m){var _,y=0,S=null,b=!1,D=!1,C=u!==-1,O=-1,P=Y2(ri(a,0))&&J2(ri(a,a.length-1));if(r||p)for(_=0;_<a.length;y>=65536?_+=2:_++){if(y=ri(a,_),!di(y))return $a;P=P&&bm(y,S,m),S=y}else{for(_=0;_<a.length;y>=65536?_+=2:_++){if(y=ri(a,_),y===ui)b=!0,C&&(D=D||_-O-1>u&&a[O+1]!==" ",O=_);else if(!di(y))return $a;P=P&&bm(y,S,m),S=y}D=D||C&&_-O-1>u&&a[O+1]!==" "}return!b&&!D?P&&!p&&!c(a)?Fh:d===ci?$a:ku:o>9&&Ph(a)?$a:p?d===ci?$a:ku:D?Gh:qh}function Q2(a,r,o,u,c){a.dump=(function(){if(r.length===0)return a.quotingType===ci?'""':"''";if(!a.noCompatMode&&(U2.indexOf(r)!==-1||z2.test(r)))return a.quotingType===ci?'"'+r+'"':"'"+r+"'";var d=a.indent*Math.max(1,o),p=a.lineWidth===-1?-1:Math.max(Math.min(a.lineWidth,40),a.lineWidth-d),m=u||a.flowLevel>-1&&o>=a.flowLevel;function _(y){return G2(a,y)}switch(K2(r,m,a.indent,p,_,a.quotingType,a.forceQuotes&&!u,c)){case Fh:return r;case ku:return"'"+r.replace(/'/g,"''")+"'";case qh:return"|"+ym(r,a.indent)+vm(gm(r,d));case Gh:return">"+ym(r,a.indent)+vm(gm(Z2(r,p),d));case $a:return'"'+V2(r)+'"';default:throw new ie("impossible error: invalid scalar style")}})()}function ym(a,r){var o=Ph(a)?String(r):"",u=a[a.length-1]===`
`,c=u&&(a[a.length-2]===`
`||a===`
`),d=c?"+":u?"":"-";return o+d+`
`}function vm(a){return a[a.length-1]===`
`?a.slice(0,-1):a}function Z2(a,r){for(var o=/(\n+)([^\n]*)/g,u=(function(){var y=a.indexOf(`
`);return y=y!==-1?y:a.length,o.lastIndex=y,Sm(a.slice(0,y),r)})(),c=a[0]===`
`||a[0]===" ",d,p;p=o.exec(a);){var m=p[1],_=p[2];d=_[0]===" ",u+=m+(!c&&!d&&_!==""?`
`:"")+Sm(_,r),c=d}return u}function Sm(a,r){if(a===""||a[0]===" ")return a;for(var o=/ [^ ]/g,u,c=0,d,p=0,m=0,_="";u=o.exec(a);)m=u.index,m-c>r&&(d=p>c?p:m,_+=`
`+a.slice(c,d),c=d+1),p=m;return _+=`
`,a.length-c>r&&p>c?_+=a.slice(c,p)+`
`+a.slice(p+1):_+=a.slice(c),_.slice(1)}function V2(a){for(var r="",o=0,u,c=0;c<a.length;o>=65536?c+=2:c++)o=ri(a,c),u=ae[o],!u&&di(o)?(r+=a[c],o>=65536&&(r+=a[c+1])):r+=u||P2(o);return r}function W2(a,r,o){var u="",c=a.tag,d,p,m;for(d=0,p=o.length;d<p;d+=1)m=o[d],a.replacer&&(m=a.replacer.call(o,String(d),m)),(pt(a,r,m,!1,!1)||typeof m>"u"&&pt(a,r,null,!1,!1))&&(u!==""&&(u+=","+(a.condenseFlow?"":" ")),u+=a.dump);a.tag=c,a.dump="["+u+"]"}function Tm(a,r,o,u){var c="",d=a.tag,p,m,_;for(p=0,m=o.length;p<m;p+=1)_=o[p],a.replacer&&(_=a.replacer.call(o,String(p),_)),(pt(a,r+1,_,!0,!0,!1,!0)||typeof _>"u"&&pt(a,r+1,null,!0,!0,!1,!0))&&((!u||c!=="")&&(c+=ju(a,r)),a.dump&&ui===a.dump.charCodeAt(0)?c+="-":c+="- ",c+=a.dump);a.tag=d,a.dump=c||"[]"}function X2(a,r,o){var u="",c=a.tag,d=Object.keys(o),p,m,_,y,S;for(p=0,m=d.length;p<m;p+=1)S="",u!==""&&(S+=", "),a.condenseFlow&&(S+='"'),_=d[p],y=o[_],a.replacer&&(y=a.replacer.call(o,_,y)),pt(a,r,_,!1,!1)&&(a.dump.length>1024&&(S+="? "),S+=a.dump+(a.condenseFlow?'"':"")+":"+(a.condenseFlow?"":" "),pt(a,r,y,!1,!1)&&(S+=a.dump,u+=S));a.tag=c,a.dump="{"+u+"}"}function $2(a,r,o,u){var c="",d=a.tag,p=Object.keys(o),m,_,y,S,b,D;if(a.sortKeys===!0)p.sort();else if(typeof a.sortKeys=="function")p.sort(a.sortKeys);else if(a.sortKeys)throw new ie("sortKeys must be a boolean or a function");for(m=0,_=p.length;m<_;m+=1)D="",(!u||c!=="")&&(D+=ju(a,r)),y=p[m],S=o[y],a.replacer&&(S=a.replacer.call(o,y,S)),pt(a,r+1,y,!0,!0,!0)&&(b=a.tag!==null&&a.tag!=="?"||a.dump&&a.dump.length>1024,b&&(a.dump&&ui===a.dump.charCodeAt(0)?D+="?":D+="? "),D+=a.dump,b&&(D+=ju(a,r)),pt(a,r+1,S,!0,b)&&(a.dump&&ui===a.dump.charCodeAt(0)?D+=":":D+=": ",D+=a.dump,c+=D));a.tag=d,a.dump=c||"{}"}function xm(a,r,o){var u,c,d,p,m,_;for(c=o?a.explicitTypes:a.implicitTypes,d=0,p=c.length;d<p;d+=1)if(m=c[d],(m.instanceOf||m.predicate)&&(!m.instanceOf||typeof r=="object"&&r instanceof m.instanceOf)&&(!m.predicate||m.predicate(r))){if(o?m.multi&&m.representName?a.tag=m.representName(r):a.tag=m.tag:a.tag="?",m.represent){if(_=a.styleMap[m.tag]||m.defaultStyle,Nh.call(m.represent)==="[object Function]")u=m.represent(r,_);else if(Lh.call(m.represent,_))u=m.represent[_](r,_);else throw new ie("!<"+m.tag+'> tag resolver accepts not "'+_+'" style');a.dump=u}return!0}return!1}function pt(a,r,o,u,c,d,p){a.tag=null,a.dump=o,xm(a,o,!1)||xm(a,o,!0);var m=Nh.call(a.dump),_=u,y;u&&(u=a.flowLevel<0||a.flowLevel>r);var S=m==="[object Object]"||m==="[object Array]",b,D;if(S&&(b=a.duplicates.indexOf(o),D=b!==-1),(a.tag!==null&&a.tag!=="?"||D||a.indent!==2&&r>0)&&(c=!1),D&&a.usedDuplicates[b])a.dump="*ref_"+b;else{if(S&&D&&!a.usedDuplicates[b]&&(a.usedDuplicates[b]=!0),m==="[object Object]")u&&Object.keys(a.dump).length!==0?($2(a,r,a.dump,c),D&&(a.dump="&ref_"+b+a.dump)):(X2(a,r,a.dump),D&&(a.dump="&ref_"+b+" "+a.dump));else if(m==="[object Array]")u&&a.dump.length!==0?(a.noArrayIndent&&!p&&r>0?Tm(a,r-1,a.dump,c):Tm(a,r,a.dump,c),D&&(a.dump="&ref_"+b+a.dump)):(W2(a,r,a.dump),D&&(a.dump="&ref_"+b+" "+a.dump));else if(m==="[object String]")a.tag!=="?"&&Q2(a,a.dump,r,d,_);else{if(m==="[object Undefined]")return!1;if(a.skipInvalid)return!1;throw new ie("unacceptable kind of an object to dump "+m)}a.tag!==null&&a.tag!=="?"&&(y=encodeURI(a.tag[0]==="!"?a.tag.slice(1):a.tag).replace(/!/g,"%21"),a.tag[0]==="!"?y="!"+y:y.slice(0,18)==="tag:yaml.org,2002:"?y="!!"+y.slice(18):y="!<"+y+">",a.dump=y+" "+a.dump)}return!0}function nT(a,r){var o=[],u=[],c,d;for(Nu(a,o,u),c=0,d=u.length;c<d;c+=1)r.duplicates.push(o[u[c]]);r.usedDuplicates=new Array(d)}function Nu(a,r,o){var u,c,d;if(a!==null&&typeof a=="object")if(c=r.indexOf(a),c!==-1)o.indexOf(c)===-1&&o.push(c);else if(r.push(a),Array.isArray(a))for(c=0,d=a.length;c<d;c+=1)Nu(a[c],r,o);else for(u=Object.keys(a),c=0,d=u.length;c<d;c+=1)Nu(a[u[c]],r,o)}function eT(a,r){r=r||{};var o=new q2(r);o.noRefs||nT(a,o);var u=a;return o.replacer&&(u=o.replacer.call({"":u},"",u)),pt(o,0,u,!0,!0)?o.dump+`
`:""}var tT=eT,aT={dump:tT};function Gu(a,r){return function(){throw new Error("Function yaml."+a+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}var lT=te,iT=ih,rT=uh,sT=mh,oT=hh,uT=Iu,cT=kh.load,dT=kh.loadAll,fT=aT.dump,pT=ie,mT={binary:vh,float:ph,map:oh,null:ch,pairs:Th,set:xh,timestamp:bh,bool:dh,int:fh,merge:yh,omap:Sh,seq:sh,str:rh},hT=Gu("safeLoad","load"),gT=Gu("safeLoadAll","loadAll"),_T=Gu("safeDump","dump"),bT={Type:lT,Schema:iT,FAILSAFE_SCHEMA:rT,JSON_SCHEMA:sT,CORE_SCHEMA:oT,DEFAULT_SCHEMA:uT,load:cT,loadAll:dT,dump:fT,YAMLException:pT,types:mT,safeLoad:hT,safeLoadAll:gT,safeDump:_T};const Am=/^---[\s\S]*?---\s*/,Cm={metadata(a){const r=a.match(Am);if(!r)return{};const o=r[0].replace(/^---\s*/,"").replace(/---\s*$/,"");return bT.load(o)||{}},content(a){return a.replace(Am,"")},toc({post:a}){const r=a.content,o=[],u=r.matchAll(/^(#{2,5})\s+(.*)$/gm);for(const c of u){const d=c[1].length,p=c[2],m=p.match(/^\[(.*?)]\(.*?\)$/),_=m?m[1]:p.trim();o.push({level:d,text:_,slug:__(_)})}return o}},yT=Object.assign({"../assets/posts/개발/데이터베이스/몽고DB/Authentication Failed 에러.md":tb,"../assets/posts/개발/메세지큐/레빗엠큐/고급 큐 기능(DLX, 딜레이 큐, 우선 순위 큐).md":lb,"../assets/posts/개발/메세지큐/레빗엠큐/메시지 신뢰성 보장을 위한 확인 메커니즘(ACK, NACK).md":rb,"../assets/posts/개발/메세지큐/레빗엠큐/메시지 지속성과 생명주기 관리(Durable, Persistent, TTL, Auto-delete).md":ob,"../assets/posts/개발/메세지큐/레빗엠큐/메시징 큐의  개념과 기본 구조.md":cb,"../assets/posts/개발/메세지큐/레빗엠큐/발행 확인 메커니즘(트랜잭션, 게시자확인).md":fb,"../assets/posts/개발/메세지큐/레빗엠큐/여러가지 Exchange 타입과 라우팅 방식.md":mb,"../assets/posts/개발/백엔드/네티/Netty: java.net과 java.nio의 한계를 보완한 비동기 이벤트 기반 네트워크 프레임워크.md":gb,"../assets/posts/개발/백엔드/스프링/리액티브/Hot vs Cold_Publisher: 같은 Flux가 구독자마다 다르게 보이는 이유.md":bb,"../assets/posts/개발/백엔드/스프링/리액티브/Sinks: 리액터 스트림에 직접 값을 밀어 넣는 방법.md":vb,"../assets/posts/개발/백엔드/스프링/리액티브/리액터 스레드와 스케줄러: 언제 publishOn, subscribeOn을 쓸까.md":Tb,"../assets/posts/개발/백엔드/스프링/리액티브/리액터, 백프레셔와 여러가지 전략.md":Ab,"../assets/posts/개발/백엔드/스프링/리액티브/리액티브 스트림즈 구현체, 리액터 한 번 써보기.md":Eb,"../assets/posts/개발/백엔드/스프링/리액티브/리액티브 스트림즈와 프로젝트 리액터.md":Mb,"../assets/posts/개발/백엔드/스프링/리액티브/리액티브 프로그래밍 시작하기.md":wb,"../assets/posts/개발/백엔드/스프링/스프링 JPA/JPA: 무엇이고, 왜 쓰는가.md":jb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: CORS는 왜 필요하고, 어떻게 동작할까.md":Nb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: CSRF 보호는 왜 필요하고, 어떻게 동작할까.md":Hb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: JWT 만료·재발급·로그아웃 전략.md":Ub,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: JWT(JSON Web Token) 인증 구현하기.md":Ib,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: JWT(JSON Web Token)는 무엇이고, 왜 쓰는가.md":Fb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: OAuth2 로그인과 리소스 서버 개념 정리.md":Gb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: SecurityFilterChain은 어떻게 동작할까.md":Jb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: remember-me, 자동 로그인은 어떻게 동작할까.md":Qb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: 스프링 애플리케이션 보안 솔루션.md":Vb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: 역할(Role)과 권한(Authority).md":Xb,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: 인증 흐름과 동작 구조.md":ny,"../assets/posts/개발/백엔드/스프링/스프링 시큐리티/스프링 시큐리티: 인증·인가와 세션 vs 토큰.md":ty,"../assets/posts/개발/백엔드/스프링/스프링 클라우드/Spring Cloud: MSA 아키텍처 구현을 위한 솔루션.md":ly,"../assets/posts/개발/백엔드/스프링/스프링 클라우드/Spring Cloud: 모놀리틱 아키텍처와 MSA 아키텍처.md":ry,"../assets/posts/개발/백엔드/스프링/스프링부트/Spring Boot 란.md":oy,"../assets/posts/개발/백엔드/스프링/스프링부트/빈(Bean) 이란.md":cy,"../assets/posts/개발/백엔드/스프링/스프링부트/제어의 역전(IoC) 과 의존성_주입(DI).md":fy,"../assets/posts/개발/언어/자바/Java: 문자열 인코딩.md":my,"../assets/posts/개발/언어/자바/NIO/Java NIO: java.io의 한계를 넘은 새로운 모델.md":gy,"../assets/posts/개발/언어/자바/NIO/Java NIO: 단방향 스트림 대신 양방향 채널로.md":by,"../assets/posts/개발/언어/자바/NIO/Java NIO: 바이트 버퍼로 버퍼 상태 관리하기.md":vy,"../assets/posts/개발/언어/자바/NIO/Java NIO: 이벤트 루프의 핵심 요소 셀렉터.md":Ty,"../assets/posts/개발/언어/자바스크립트/Ubuntu  환경에서 NodeJS  설치하기.md":Ay,"../assets/posts/개발/언어/자바스크립트/자바스크립트 파일 확장자 차이.md":Ey,"../assets/posts/개발/크로스플랫폼/다트/플러터/어플리케이션 이름 변경 방법.md":My,"../assets/posts/개발/크로스플랫폼/다트/플러터/플러터 MacOS CodeSign 에러.md":wy,"../assets/posts/개발/프론트엔드/CSS/CSS: 인라인·내부·외부 스타일.md":jy,"../assets/posts/개발/프론트엔드/CSS/CSS: 작성 규칙과 기본 셀렉터.md":Ny,"../assets/posts/개발/프론트엔드/CSS/CSS: 조합 셀렉터.md":Hy,"../assets/posts/개발/프론트엔드/CSS/CSS: 캐스케이드 레이어.md":Uy,"../assets/posts/개발/프론트엔드/CSS/CSS: 캐스케이딩 규칙과 우선순위.md":Iy,"../assets/posts/개발/프론트엔드/HTML/HTML: 구조와 필수 태그.md":Fy,"../assets/posts/개발/프론트엔드/HTML/HTML: 그룹핑 텍스트.md":Gy,"../assets/posts/개발/프론트엔드/HTML/HTML: 메타 태그.md":Jy,"../assets/posts/개발/프론트엔드/HTML/HTML: 시맨틱 마크업.md":Qy,"../assets/posts/개발/프론트엔드/HTML/HTML: 여러가지 목록.md":Vy,"../assets/posts/개발/프론트엔드/HTML/HTML: 인풋, 사용자에게 입력을 받자.md":Xy,"../assets/posts/개발/프론트엔드/HTML/HTML: 임베디드 미디어.md":nv,"../assets/posts/개발/프론트엔드/HTML/HTML: 자바스크립트 추가하기.md":tv,"../assets/posts/개발/프론트엔드/HTML/HTML: 전역 속성.md":lv,"../assets/posts/개발/프론트엔드/HTML/HTML: 테이블 태그.md":rv,"../assets/posts/개발/프론트엔드/HTML/HTML: 텍스트 관련 태그.md":ov,"../assets/posts/개발/프론트엔드/HTML/HTML: 폼, 입력 필드를 묶어 서버로 전달하자.md":cv,"../assets/posts/개발/프론트엔드/리액트/StrictMode Definition.md":fv,"../assets/posts/개발/프론트엔드/프론트엔드: 로드맵따라 시작해보기.md":mv,"../assets/posts/개발/환경설정/Homebrew 설치하기.md":gv,"../assets/posts/개발/환경설정/NVM 설치하기.md":bv,"../assets/posts/개발/환경설정/OpenJDK 11 설치하기.md":vv,"../assets/posts/개발/환경설정/RabbitMQ 설치하기.md":Tv,"../assets/posts/개발/환경설정/Ubuntu 환경에 몽고DB 설치.md":Av,"../assets/posts/개발/환경설정/깃허브 비공개 레포지토리 잔디 심기.md":Ev,"../assets/posts/개발/환경설정/플러터 설치하기.md":Mv,"../assets/posts/데브옵스/그라파나/Grafana 설치.md":wv,"../assets/posts/데브옵스/넥서스/Nexus Repository 유형 및 Spring Boot 연동.md":jv,"../assets/posts/데브옵스/넥서스/Nexus 설치하기.md":Nv,"../assets/posts/데브옵스/넥서스/Nginx 를 이용한 Nexus에 대한 리버스 프록시 구성.md":Hv,"../assets/posts/데브옵스/젠킨스/Credentials 추가.md":Uv,"../assets/posts/데브옵스/젠킨스/GitHub Webhook 자동 빌드 트리거링.md":Iv,"../assets/posts/데브옵스/젠킨스/JDK 설치 및 설정.md":Fv,"../assets/posts/데브옵스/젠킨스/Jenkins 버전 업그레이드.md":Gv,"../assets/posts/데브옵스/젠킨스/Jenkins 설치.md":Jv,"../assets/posts/데브옵스/젠킨스/Maven 설정하기.md":Qv,"../assets/posts/데브옵스/젠킨스/Nexus 설정.md":Vv,"../assets/posts/데브옵스/젠킨스/Pipeline JDK 설정.md":Xv,"../assets/posts/데브옵스/젠킨스/Pipeline as YAML.md":nS,"../assets/posts/데브옵스/젠킨스/Publish Over SSH 서버 테스트 접속 실패.md":tS,"../assets/posts/데브옵스/젠킨스/Publish Over SSH 플러그인 Remote Directory 설정 가이드.md":lS,"../assets/posts/데브옵스/젠킨스/Slack 연동 및 알림 설정.md":rS,"../assets/posts/데브옵스/젠킨스/빌드 실패, 원인은 라이브러리 캐시.md":oS,"../assets/posts/데브옵스/프로메테우스/Node Exporter 설치.md":cS,"../assets/posts/데브옵스/프로메테우스/Prometheus 설치.md":fS,"../assets/posts/데브옵스/프로메테우스/Rabbit Exporter 설치.md":mS,"../assets/posts/데브옵스/프로메테우스/SNMP 를 통한 스위치 모니터링.md":gS,"../assets/posts/사이드 프로젝트/메신저/메신저: @CurrentAccount 커스텀 ArgumentResolver로 인증 정보 주입하기.md":bS,"../assets/posts/사이드 프로젝트/메신저/메신저: API Gateway 에서 x-usr 헤더 스푸핑 방어하기.md":vS,"../assets/posts/사이드 프로젝트/메신저/메신저: API 공통 응답 구조 설계하기.md":TS,"../assets/posts/사이드 프로젝트/메신저/메신저: Core 모듈 AutoConfiguration으로 MSA 공통 기능 자동 등록하기.md":AS,"../assets/posts/사이드 프로젝트/메신저/메신저: JWT 로 만드는 메신저 인증 플로우.md":ES,"../assets/posts/사이드 프로젝트/메신저/메신저: Redis로 이메일 인증 Rate Limiting 구현하기 — 쿨다운과 일일 제한.md":MS,"../assets/posts/사이드 프로젝트/메신저/메신저: Refresh Token 전략 — Redis Whitelist와 Token Rotation으로 탈취 감지하기.md":wS,"../assets/posts/사이드 프로젝트/메신저/메신저: ResultCode 인터페이스로 API 응답 통일하기.md":jS,"../assets/posts/사이드 프로젝트/메신저/메신저: Spring Boot AutoConfiguration 으로 공통 모듈 자동 등록하기.md":NS,"../assets/posts/사이드 프로젝트/메신저/메신저: Swagger 문서를 인터페이스로 분리하기.md":HS,"../assets/posts/사이드 프로젝트/블로그/블로그: GISCUS 를 통한 댓글 기능 구현하기.md":US,"../assets/posts/사이드 프로젝트/블로그/블로그: 깃허브 페이지 배포하기.md":IS,"../assets/posts/사이드 프로젝트/블로그/블로그: 마크다운 파일로 블로그 포스팅 기능 구현하기.md":FS,"../assets/posts/사이드 프로젝트/블로그/블로그: 마크다운을 HTML로 변환하기.md":GS,"../assets/posts/사이드 프로젝트/블로그/블로그: 메타 태그 최적화하기.md":JS,"../assets/posts/사이드 프로젝트/블로그/블로그: 목차(TOC) 기능 추가하기.md":QS}),Yu=Object.entries(yT).map(([a,r])=>{const o=r.default,u=Cm.metadata(o),c=Cm.content(o);return new XS({absolutePath:a,metadata:u,content:c})}).sort((a,r)=>r.createdDate-a.createdDate),$l=Yu.filter(a=>!a.isHidden),vT=new Map(Yu.map(a=>[a.path,a])),Kr={get posts(){return $l},get allPosts(){return Yu},get latestPosts(){return $l.slice(0,5)},findBy({category:a,subcategory:r}){return a==="전체"?$l:r==null?$l.filter(o=>o.category===a):$l.filter(o=>o.category===a&&o.subcategory===r)},findByPath({path:a}){return vT.get(a)||null}},Gr="/",Ue="/posts",Yh="/about",Em={[Gr]:"/",[Ue]:"/posts",[Yh]:"/about"},ST=(()=>{const a={};for(const r of Kr.allPosts){const o=r.path.split("/");let u=a;for(let p=0;p<o.length;p++){const m=o[p];if(p===o.length-1){const _=r.isHidden?"."+m+".md":m+".md";u[_]=r.isHidden?"hidden":null}else u[m]||(u[m]={}),u=u[m]}const c=/!\[.*?\]\(([^)]+\.(png|jpe?g|gif|svg|webp))\)/gi;let d;for(;(d=c.exec(r.content))!==null;){const m=d[1].split("/").pop();u[m]="image"}}return{".bashrc":null,".secret":null,"todo.txt":null,"stack.yml":null,"links.txt":null,posts:a,about:{"README.md":null,".easter-egg":null,"synopsis.txt":null,"core.yml":null,"experience.yml":null,"stack.yml":null,"education.yml":null,"links.txt":null},games:{"snake.sh":"script","cmatrix.sh":"script","2048.sh":"script","blocks.sh":"script","pipes.sh":"script","README.md":null}}})(),TT=(()=>{const a={};for(const r of Kr.allPosts){const o=r.path.split("/"),u=o.slice(0,-1).join("/"),c=r.isHidden?"."+o[o.length-1]+".md":o[o.length-1]+".md";a[Ue+"/"+(u?u+"/":"")+c]=r}return a})();class xT{constructor(){this.tree=ST,this.postMap=TT}getNode(r){if(r==="/"||r==="")return this.tree;const o=r.split("/").filter(Boolean);let u=this.tree;for(const c of o){if(u===null||typeof u!="object"||!(c in u))return;u=u[c]}return u}isDir(r){const o=this.getNode(r);return o!=null&&typeof o=="object"}isFile(r){const o=this.getNode(r);return o===null||o==="image"||o==="script"||o==="hidden"}isImage(r){return this.getNode(r)==="image"}isScript(r){return this.getNode(r)==="script"}isHidden(r){return this.getNode(r)==="hidden"}getPost(r){return this.postMap[r]||null}collectFiles(r,o){const u=[];if(typeof r!="object"||r===null)return u;for(const[c,d]of Object.entries(r)){const p=o+"/"+c;d===null||typeof d=="string"?u.push(p):typeof d=="object"&&u.push(...this.collectFiles(d,p))}return u}countFiles(r){if(typeof r!="object"||r===null)return 0;let o=0;for(const u of Object.values(r))u===null||typeof u=="string"?o++:typeof u=="object"&&(o+=this.countFiles(u));return o}}const ni=new xT;function Hr(a,r){let o=r.replace(/\\ /g," ");if(o==="~"||o==="")return Gr;o.startsWith("~/")?o="/"+o.slice(2):o.startsWith("/")||(o=a+"/"+o);const u=o.split("/").filter(Boolean),c=[];for(const d of u)d===".."?c.length>0&&c.pop():d!=="."&&c.push(d);return"/"+c.join("/")}function Rm(a){const r=[];let o="",u=!1,c=!1,d="";for(let p=0;p<a.length;p++){const m=a[p];if(u){o+=m,u=!1;continue}if(m==="\\"){u=!0,o+=m;continue}if(!c&&(m==='"'||m==="'")){c=!0,d=m;continue}if(c&&m===d){c=!1;continue}if(!c&&m===" "){o&&r.push(o),o="";continue}o+=m}return o&&r.push(o),r.map(p=>p.replace(/\\ /g," "))}function AT(a,{boolFlags:r=[],valueFlags:o=[]}={}){const u=new Set(r),c=new Set(o),d={},p=[];for(let m=0;m<a.length;m++)if(c.has(a[m])&&m+1<a.length)d[a[m]]=a[m+1],m++;else if(u.has(a[m]))d[a[m]]=!0;else{if(a[m].startsWith("-"))return{flags:d,path:p.join(" "),error:a[m]};p.push(a[m])}return{flags:d,path:p.join(" "),error:null}}function CT(a,r,o){const u=Hr(a,r);if(o.isFile(u))return u;const c=o.getNode(a);if(c&&typeof c=="object"){const d=Object.keys(c).find(p=>p===r||p.startsWith(r)||p.toLowerCase().includes(r.toLowerCase()));if(d&&(c[d]===null||typeof c[d]=="string"))return a+"/"+d}return null}function Je(a){return a==="/"?"/":a}function ET(a){return Em[a]?Em[a]:a.startsWith(Ue+"/")?a:null}function RT(a,r){if(!a)return Gr;if(a.startsWith("/posts/")){const o=decodeURIComponent(a.slice(7)),u=Ue+"/"+o+".md",c=r.getNode(u);if(c===null||typeof c=="string"){const p=o.lastIndexOf("/"),m=p>=0?Ue+"/"+o.slice(0,p):Ue;return r.isDir(m)?m:Ue}const d=Ue+"/"+o;if(r.isDir(d))return d}return a==="/posts"?Ue:a==="/about"?Yh:Gr}class MT{constructor(r,o){this.outputLines=r,this._cwd=o}prompt(){return`<span class="t-user">simjunghun</span>:<span class="t-path">${tn(Je(this._cwd()))}</span><span class="t-dollar">$</span>`}print(r){this.outputLines.push(r)}printCmd(r){this.print(`${this.prompt()} ${tn(r)}`)}printErr(r,o){this.print(`<span class="t-err">${tn(r)}: ${tn(o)}</span>`)}printHint(r){this.print(`<span class="t-dim">${tn(r)} --help 참고</span>`)}highlightLine(r){if(r.startsWith("#")){const o=r.match(/^(#{1,4})\s+(.*)/);return o?`<span class="t-green">${tn(o[1])} ${tn(o[2])}</span>`:tn(r)}return r.startsWith("```")?`<span class="t-dim">${tn(r)}</span>`:r.trim()===""?"":`<span class="t-out">${tn(r)}</span>`}printCandidates(r){const o=r.items,u=o.map(_=>r.type==="cmd"||r.type==="flag"?_.name:_.name+(_.isDir?"/":"")),d=Math.max(...u.map(_=>_.length))+2,m=Math.max(1,Math.floor(80/d));for(let _=0;_<u.length;_+=m){const S=u.slice(_,_+m).map((b,D)=>{const C=o[_+D],O=b+" ".repeat(Math.max(0,d-b.length));return`<span class="${C.isDir?"t-dir":r.type==="cmd"?"t-cyan":"t-file"}">${tn(O)}</span>`}).join("");this.print(S)}}}const Mm={ls:["사용법: ls [<path>] [-l] [-a]","","옵션:","  -l    제목, 작성일, 카테고리 등 상세 표시","  -a    숨김 파일(.으로 시작) 포함","","예제:","  ls","  ls -la","  ls /posts/개발"],cd:["사용법: cd <dir>","","상대/절대 경로 모두 지원. ~는 루트 디렉터리.","home, posts, about 이동 시 페이지 내비게이션.","","예제:","  cd /             → 홈 페이지로 이동","  cd posts         → 포스트 목록으로 이동","  cd about         → 소개 페이지로 이동","  cd ~             → 루트(/)로 이동","  cd /posts/개발/백엔드","  cd .."],pwd:["사용법: pwd","","현재 작업 디렉터리의 전체 경로를 출력합니다."],tree:["사용법: tree [<path>]","","디렉터리 트리를 ASCII 형태로 출력합니다.","","예제:","  tree","  tree /posts/개발"],cat:["사용법: cat <file>","","포스트 내용을 터미널에서 미리봅니다.","번호를 입력하면 최근 검색 결과에서 선택합니다.","","예제:","  cat spring-security.md","  cat 3          (grep 결과 중 3번)"],open:["사용법: open <file>","","포스트 상세 페이지로 브라우저를 이동합니다.","번호를 입력하면 최근 검색 결과에서 선택합니다.","","예제:","  open spring-security.md","  open 2          (grep 결과 중 2번)"],grep:["사용법: grep [-i] <keyword>","","옵션:","  -i    대소문자 무시","","현재 디렉터리 이하에서 제목/태그에 키워드가 포함된 포스트를 검색합니다.","결과에 번호가 매겨지며, open N / cat N 으로 바로 열 수 있습니다.","","예제:","  grep JWT","  grep -i spring"],find:["사용법: find [<path>] -name <pattern>","","glob 패턴(*, ?)으로 파일을 검색합니다.","결과에 번호가 매겨지며, open N / cat N 으로 바로 열 수 있습니다.","","예제:",'  find . -name "*JWT*"','  find /posts -name "*.md"'],wc:["사용법: wc -l","","직전 grep/find 결과가 있으면 그 개수를,","없으면 현재 디렉터리의 포스트 수를 출력합니다."],wget:["사용법: wget <file> [--format md|html]","","포스트를 파일로 다운로드합니다. 기본 포맷: md","","예제:","  wget spring-security.md","  wget spring-security.md --format html"],vi:["사용법: vi <file>","","파일을 vi 뷰어로 엽니다.","j/k: 위/아래 · g/G: 처음/끝 · :q: 종료","","예제:","  vi .bashrc","  vi todo.txt"],vim:["사용법: vim <file>","","파일을 vi 뷰어로 엽니다. (vi와 동일)","j/k: 위/아래 · g/G: 처음/끝 · :q: 종료"],whoami:["사용법: whoami","","현재 사용자명을 출력합니다."],history:["사용법: history","","입력한 명령어 목록을 번호와 함께 출력합니다."],clear:["사용법: clear","","터미널 출력을 지웁니다. 히스토리와 상태는 유지됩니다."],exit:["사용법: exit","","터미널을 닫고 포커스를 본문으로 돌립니다."],help:["사용법: help","","사용 가능한 모든 명령어를 출력합니다.","<command> --help 로 개별 명령어 도움말을 볼 수 있습니다."]},Om=["ls","cd","pwd","tree","cat","vi","vim","open","grep","find","wc","wget","history","clear","exit","help","whoami","neofetch","fortune","cowsay","sl","bash","sh"],OT=["cd"],wT=["cat","vi","vim","open","wget"],wm={grep:["-i"],ls:["-l","-a","-la","-al"],find:["-name"],wc:["-l"],wget:["--format"]};function ei(a){const r=new Date(a);return Number.isNaN(r.getTime())?new Date(0):r}function Wa(a){return String(a).padStart(2,"0")}const al={formatDate(a){const r=ei(a);return`${r.getFullYear()}년 ${Wa(r.getMonth()+1)}월 ${Wa(r.getDate())}일`},formatShortDate(a){const r=ei(a);return`${r.getFullYear()}. ${Wa(r.getMonth()+1)}. ${Wa(r.getDate())}`},formatISOShort(a){const r=ei(a);return`${r.getFullYear()}-${Wa(r.getMonth()+1)}-${Wa(r.getDate())}`},formatISO(a){return ei(a).toISOString()},formatLs(a){const r=ei(a);return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()]} ${String(r.getDate()).padStart(2," ")}`}},jr={dir:"&#x1F4C1;",md:"&#x1F4C4;",png:"&#x1F5BC;",jpg:"&#x1F5BC;",jpeg:"&#x1F5BC;",gif:"&#x1F5BC;",svg:"&#x1F5BC;",webp:"&#x1F5BC;",sh:"&#x1F4DC;",txt:"&#x1F4DD;",hidden:"&#x1F512;",default:"&#x1F4C3;"};function sa(a,r){if(r)return jr.dir;if(a.startsWith("."))return jr.hidden;const o=a.split(".").pop().toLowerCase();return jr[o]||jr.default}function DT(a,r){const{vfs:o,cwd:u,renderer:c}=a,{flags:d,path:p,error:m}=a.parseArgs(r,{boolFlags:["-l","-a","-la","-al"]});if(m){c.printErr("ls",`지원하지 않는 옵션입니다: ${m}`),c.printHint("ls");return}const _=d["-a"]||d["-la"]||d["-al"],y=d["-l"]||d["-la"]||d["-al"],S=p?a.resolve(p):u,b=o.getNode(S);if(b===void 0){c.printErr("ls",`경로를 찾을 수 없습니다: ${Je(S)}`);return}if(b===null||b==="image"||b==="script"){c.print(`<span class="t-file">${tn(Je(S))}</span>`);return}const D=O=>O!==null&&typeof O=="object",C=Object.entries(b).filter(([O])=>_||!O.startsWith(".")).sort(([,O],[,P])=>D(O)!==D(P)?D(O)?-1:1:0);if(C.length!==0)if(a.setLastResults(o.collectFiles(b,S),"ls"),y){c.print(`<span class="t-dim">합계 ${C.length}</span>`);for(const[O,P]of C)if(D(P)){const E=o.countFiles(P);c.print(`<span class="t-icon">${sa(O,!0)}</span> <span class="t-dim">drwxr-xr-x</span>  <span class="t-dir">${tn(O)}/</span>  <span class="t-dim">${E} posts</span>`)}else if(P==="image")c.print(`<span class="t-icon">${sa(O,!1)}</span> <span class="t-dim">-rw-r--r--</span>  <span class="t-file">${tn(O)}</span>`);else if(P==="hidden"){const E=o.getPost(S+"/"+O),B=E?al.formatShortDate(E.createdDate):"";c.print(`<span class="t-icon">${sa(O,!1)}</span> <span class="t-dim">-rw-------</span>  <span class="t-dim">${tn(O)}</span>`+(B?`  <span class="t-dim">${B}</span>`:"")+'  <span class="t-yellow">[draft]</span>')}else{const E=o.getPost(S+"/"+O);if(E){const B=al.formatShortDate(E.createdDate),H=(E.tags||[]).slice(0,3).join(", ");c.print(`<span class="t-icon">${sa(O,!1)}</span> <span class="t-dim">-rw-r--r--</span>  <span class="t-file">${tn(O)}</span>  <span class="t-dim">${B}</span>  <span class="t-dim">${E.readingTime} min</span>`+(H?`  <span class="t-purple">${tn(H)}</span>`:""))}else c.print(`<span class="t-icon">${sa(O,!1)}</span> <span class="t-dim">-rw-r--r--</span>  <span class="t-file">${tn(O)}</span>`)}}else{const O=C.map(([E,B])=>D(B)?`<span class="t-icon">${sa(E,!0)}</span> <span class="t-dir">${tn(E)}/</span>`:`<span class="t-icon">${sa(E,!1)}</span> <span class="t-file">${tn(E)}</span>`),P=C.length>6?3:C.length>3?2:C.length;for(let E=0;E<O.length;E+=P)c.print(O.slice(E,E+P).join("  "))}}function jT(a,r){const{vfs:o,cwd:u,renderer:c}=a,d=r.join(" "),p=d?a.resolve(d):"/";if(!o.isDir(p)){o.isFile(p)?c.printErr("cd",`디렉터리가 아닙니다: ${d}`):c.printErr("cd",`디렉터리가 없습니다: ${d}`);return}a.setCwd(p);const m=ET(p);if(m&&a.callbacks.onSyncUrl){c.print(`<span class="t-green">→ ${tn(m)}</span>`);try{a.callbacks.onSyncUrl(m)}catch{}}}function kT(a){a.renderer.print(`<span class="t-out">${tn(a.cwd)}</span>`)}function NT(a,r){const{vfs:o,renderer:u}=a,c=r.join(" ")||".",d=a.resolve(c),p=o.getNode(d);if(!p||typeof p!="object"){u.printErr("tree",`경로를 찾을 수 없습니다: ${c}`);return}let m=0,_=0;u.print(`<span class="t-dir">${tn(Je(d))}</span>`);const y=b=>b!==null&&typeof b=="object",S=(b,D,C)=>{if(C>3){u.print(`<span class="t-dim">${tn(D)}...</span>`);return}const O=Object.entries(b).sort(([,P],[,E])=>y(P)!==y(E)?y(P)?-1:1:0);O.forEach(([P,E],B)=>{const H=B===O.length-1,Q=H?"└── ":"├── ",v=H?"    ":"│   ";y(E)?(m++,u.print(`<span class="t-dim">${tn(D+Q)}</span><span class="t-dir">${tn(P)}/</span>`),S(E,D+v,C+1)):(_++,u.print(`<span class="t-dim">${tn(D+Q)}</span><span class="t-file">${tn(P)}</span>`))})};S(p,"",0),u.print(""),u.print(`<span class="t-dim">${m} directories, ${_} files</span>`)}const Lu={"/.bashrc":["# ~/.bashrc - simjunghun","",'export DREAM="백엔드 엔지니어"','export FUEL="커피 ☕ && 음악 🎵"','export STATUS="항상 배우는 중..."',"",'alias work="cd /posts && echo 오늘도 화이팅"','alias coffee="echo ☕ 커피 충전 완료. HP +100"','alias sleep="echo 404: sleep not found"',"","# 사실 이걸 찾은 당신이 진짜 개발자"],"/.secret":["┌─────────────────────────────┐","│  이 파일을 찾다니...        │","│  당신은 진짜 터미널 덕후    │","│                             │","│  🎉 히든 업적 달성!         │",'│  "ls -a 의 달인"            │',"└─────────────────────────────┘"],"/stack.yml":["backend:","  - Java","  - Spring Boot","  - Spring Security","  - Kotlin","  - JPA","  - Netty","","infra:","  - Docker","  - Kubernetes","  - Jenkins","  - RabbitMQ","  - Redis","","frontend:","  - React","  - JavaScript","  - HTML/CSS","  - Flutter"],"/links.txt":["github    github.com/bak-libra26","email     bak-libra26@gmail.com","blog      bak-libra26.co.kr"],"/todo.txt":["[ ] Spring Security 시리즈 완성하기","[ ] 사이드 프로젝트 배포하기","[ ] 알고리즘 하루 1문제","[x] 터미널 블로그 만들기 ← 지금 보고 있는 그것","[ ] 잠 좀 자기 (예상 완료일: 미정)"],"/about/README.md":["# 심정훈 (sim.junghun)","",'> "코드는 글쓰기와 같다. 읽는 사람을 생각하며 쓴다."',"","## Stats","- Coffee consumed: ∞","- Bugs fixed: n + 1 (where n = bugs created)","- Stack Overflow visits: yes","","## Contact","- GitHub: github.com/bak-libra26","- Email: bak-libra26@gmail.com"],"/games/README.md":["# 🎮 Games","","터미널에서 즐기는 미니게임 모음","","## 실행 방법","  cd games","  ./snake.sh      # 스네이크 게임","  ./cmatrix.sh    # Matrix rain","  ./2048.sh       # 2048 퍼즐","  ./blocks.sh     # 블록 쌓기 퍼즐","  ./pipes.sh      # 파이프 스크린세이버","","또는 어디서든:","  bash /games/snake.sh","  bash /games/2048.sh","","+ ls 대신 sl 을 쳐보세요 🚂"],"/games/snake.sh":["#!/bin/bash","# snake.sh — Terminal Snake Game","# 조작: ←↑↓→ / hjkl / wasd","# 종료: q / ESC","",'echo "🐍 Loading snake..."',"exec ./snake --fullscreen"],"/games/cmatrix.sh":["#!/bin/bash","# cmatrix.sh — Matrix Digital Rain","# 종료: q / ESC","",'echo "Loading matrix..."',"exec cmatrix -b -C green"],"/games/2048.sh":["#!/bin/bash","# 2048.sh — 2048 Number Puzzle","# 조작: ←↑↓→ / hjkl / wasd","# 종료: q / ESC","",'echo "🔢 Loading 2048..."',"exec ./2048 --terminal"],"/games/blocks.sh":["#!/bin/bash","# blocks.sh — Block Stacking Puzzle","# 조작: ←→ 이동, ↑ 회전, Space 하드드롭","# 종료: q / ESC","",'echo "🧱 Loading blocks..."',"exec ./blocks --fullscreen"],"/games/pipes.sh":["#!/bin/bash","# pipes.sh — Pipes Screensaver","# 종료: q / ESC / Ctrl+C","","exec pipes -t 0 -p 5 -R"],"/about/synopsis.txt":["SYNOPSIS","","비즈니스 문제를 코드로 풀어내는 백엔드 엔지니어입니다.","","배운 것을 정리하고, 깊이 이해하기 위해 기록합니다.","","Spring 기반의 서버 개발을 주로 하며, 안정적이고 확장 가능한","시스템을 설계하는 것에 관심이 있습니다."],"/about/core.yml":["description: Core Competencies","","competencies:","  - name: Backend Engineering","    detail: Spring 기반의 RESTful API 설계 및 개발.","           비즈니스 로직을 견고하고 확장 가능한 구조로 구현합니다.","","  - name: System Design","    detail: MSA, 메시지 큐, 캐싱 등을 활용하여","           확장 가능한 시스템 아키텍처를 설계합니다.","","  - name: Technical Writing","    detail: 학습한 내용을 체계적으로 정리하고 공유하여","           지식을 확산합니다."],"/about/experience.yml":["experience:","  - company: 스탠다드네트웍스 / 전송개발팀","    period: 2023.08 ~ 2025.12","    role: Backend Engineer","    tasks:","      - Spring Boot·Spring Cloud 기반 MSA 메시지 전송 플랫폼 개발","      - 이통 3사 및 중계사 연동 프로세스 설계·구현","      - 운영 관리 페이지 개발 및 유지보수","      - Jenkins·Nexus 기반 CI/CD 파이프라인 구축","    stack: [Java, Spring Boot, Netty, Spring WebFlux, JPA, MyBatis, MySQL, Redis, RabbitMQ]"],"/about/stack.yml":["backend:","  - Java","  - Spring Boot","  - Spring Security","  - Kotlin","  - JPA","  - Netty","","infra:","  - Docker","  - Kubernetes","  - Jenkins","  - RabbitMQ","  - Redis","","frontend:","  - React","  - JavaScript","  - HTML/CSS","  - Flutter"],"/about/education.yml":["education:","  - institution: 서울사이버대학교","    degree: 컴퓨터공학과","    period: 2025.03 ~","    status: 재학중","","  - institution: 한국산업인력공단","    degree: 정보기기운용기능사","    period: 2025.04","","  - institution: KT DS","    courses:","      - Docker 클라우드 컨테이너 기반 아키텍처 이해와 실습 (2024.10)","      - 자바를 이용한 프로그래밍 실무 (2024.07)","","  - institution: 멀티캠퍼스","    degree: 데이터 사이언스/엔지니어링 전문가 과정","    period: 2021.12 ~ 2022.05","    awards: [최우수상, 우수상]"],"/about/links.txt":["SEE ALSO","","github    github.com/bak-libra26","email     bak-libra26@gmail.com"],"/about/.easter-egg":["🥚 축하합니다!","","cat /about/.easter-egg 를 실행한 당신에게","오늘 하루도 좋은 코드를 작성하시길 바랍니다.","","          (\\__/)","          (•ㅅ•)  < 화이팅!","         / 　 づ"]};function Ju(a,r,o){const u=o.join(" ");if(!u)return a.renderer.print(`<span class="t-err">사용법: ${r} &lt;file&gt;</span>`),a.renderer.printHint(r),null;const c=a.resolveFileArg(u);if(!c)return a.renderer.printErr(r,`파일을 찾을 수 없습니다: ${u}`),null;const d=a.vfs.getNode(c);return d!=null&&d!=="image"&&typeof d=="object"?(a.renderer.printErr(r,"디렉터리입니다"),null):c}const Dm=["🔒 이 글은 아직 작성 중입니다... 커밋하기엔 이른 코드처럼요.","🚧 공사 중 — hard hat required.","📝 draft 브랜치에만 존재하는 글입니다. merge 예정일: 미정","🙈 git stash 된 글입니다. pop 될 때까지 기다려주세요.","⏳ 아직 brew install 중... 잠시만 기다려주세요.","🔐 chmod 000 — 작성자 외 읽기 권한이 없습니다."];function Ku(){return Dm[Math.floor(Math.random()*Dm.length)]}function Jh(a,r){const{vfs:o,renderer:u}=a,c=o.getPost(r),d=r.split("/").pop();if(o.isHidden(r)){u.print(""),u.print(`<span class="t-yellow">${Ku()}</span>`),u.print("");return}if(o.isImage(r)){u.print(`<span class="t-dim">cat: ${tn(d)}: 바이너리 파일입니다</span>`),u.print(`<span class="t-dim">tip: "open ${tn(th(d))}" 으로 미리보기하세요</span>`);return}if(u.print(""),u.print(`<span class="t-green">━━━ ${tn(d.replace(".md",""))} ━━━</span>`),c){const p=al.formatShortDate(c.createdDate),m=c.categories.join(" / "),_=(c.tags||[]).join(", ");u.print(`<span class="t-dim">날짜: ${tn(p)}  ·  카테고리: ${tn(m)}  ·  ${c.readingTime} min read</span>`),_&&u.print(`<span class="t-dim">태그: ${tn(_)}</span>`),u.print("");const y=c.content.split(`
`),S=30;let b=!1;for(let D=0;D<Math.min(y.length,S);D++){const C=y[D];C.startsWith("```")?(b=!b,u.print(`<span class="t-dim">${tn(C)}</span>`)):b?u.print(`<span class="t-cyan">${tn(C)}</span>`):u.print(u.highlightLine(C))}y.length>S&&(u.print(""),u.print(`<span class="t-dim">... (${y.length-S}줄 더 있음 — open 으로 전체 보기)</span>`))}else if(Lu[r])for(const p of Lu[r])u.print(`<span class="t-out">${tn(p)}</span>`);else u.print(`<span class="t-dim">${tn(Je(r))}</span>`);u.print('<span class="t-green">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>')}function LT(a,r){const{vfs:o,renderer:u}=a,c=o.getPost(r),d=r.split("/").pop();if(o.isHidden(r)){u.print(""),u.print(`<span class="t-yellow">${Ku()}</span>`),u.print("");return}if(o.isScript(r)){Kh(a,r);return}if(o.isImage(r)){const m=`/images/posts/${r.startsWith(Ue+"/")?r.slice(Ue.length+1):r.slice(1)}`;if(u.print(`<span class="t-green">→ ${tn(d)}</span>`),a.callbacks.onPreviewImage)try{a.callbacks.onPreviewImage(m,d)}catch{}return}if(!c){Jh(a,r);return}if(u.print(`<span class="t-green">→ ${tn(d.replace(".md",""))}</span>`),u.print(`<span class="t-dim">${tn(Je(r))}</span>`),a.callbacks.onOpenPost)try{a.callbacks.onOpenPost(r)}catch{u.printErr("open","페이지 이동 중 오류 발생")}}function HT(a){const r=a.split(".").pop().toLowerCase(),o={png:[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82],jpg:[255,216,255,224,0,16,74,70,73,70,0,1,1,0,0,1],jpeg:[255,216,255,224,0,16,74,70,73,70,0,1,1,0,0,1],gif:[71,73,70,56,57,97,32,3,88,2,247,0,0,0,0,0],svg:[60,63,120,109,108,32,118,101,114,115,105,111,110,61,34,49],webp:[82,73,70,70,0,0,0,0,87,69,66,80,86,80,56,32]},u=o[r]||o.png,c=24,d=[],p=[];d.push(`"${a}" [noeol][converted] -- binary file --`),p.push(`<span class="t-err">"${tn(a)}" [noeol][converted] -- binary file --</span>`),d.push(""),p.push("");for(let m=0;m<c;m++){const _=m*16,y=[];for(let O=0;O<16;O++)m===0&&O<u.length?y.push(u[O]):y.push(Math.floor(Math.random()*256));const S=y.map(O=>O.toString(16).padStart(2,"0")).join(" "),b=y.map(O=>O>=32&&O<=126?String.fromCharCode(O):".").join(""),D=_.toString(16).padStart(8,"0"),C=`${D}  ${S}  |${b}|`;d.push(C),p.push(`<span class="t-dim">${tn(D)}</span>  <span class="t-cyan">${tn(S)}</span>  <span class="t-dim">|</span><span class="t-out">${tn(b)}</span><span class="t-dim">|</span>`)}return d.push(""),p.push(""),d.push(`-- ${c*16} bytes --`),p.push(`<span class="t-dim">-- ${c*16} bytes --</span>`),{htmlLines:p,textLines:d}}function BT(a,r){const o=Ju(a,"cat",r);o&&Jh(a,o)}function jm(a,r){const o=Ju(a,"vi",r);if(!o)return;const{vfs:u,renderer:c}=a,d=o.split("/").pop();if(u.isHidden(o)){c.print(""),c.print(`<span class="t-yellow">${Ku()}</span>`),c.print("");return}if(u.isImage(o)){const{htmlLines:S,textLines:b}=HT(d);if(c.print(`<span class="t-dim">vi ${tn(d)}</span>`),a.callbacks.onViOpen)try{a.callbacks.onViOpen(S,b,d)}catch{}return}const p=u.getPost(o),m=Lu[o];let _,y;if(p){const S=p.content.split(`
`);y=S,_=S.map(b=>c.highlightLine(b))}else m?(y=m,_=m.map(S=>`<span class="t-out">${tn(S)}</span>`)):(y=[""],_=['<span class="t-dim">(빈 파일)</span>']);if(c.print(`<span class="t-dim">vi ${tn(d)}</span>`),a.callbacks.onViOpen)try{a.callbacks.onViOpen(_,y,d)}catch{}}function UT(a,r){const o=Ju(a,"open",r);o&&LT(a,o)}function zT(a,r){const{vfs:o,renderer:u}=a,{flags:c,path:d,error:p}=a.parseArgs(r,{valueFlags:["--format"]});if(p){u.printErr("wget",`지원하지 않는 옵션입니다: ${p}`),u.printHint("wget");return}if(!d){u.print('<span class="t-err">사용법: wget &lt;file&gt; [--format md|html]</span>'),u.printHint("wget");return}const m=c["--format"]||"md";if(m!=="md"&&m!=="html"){u.printErr("wget",`지원하지 않는 포맷입니다: ${m} (md, html만 지원)`);return}const _=a.resolveFileArg(d);if(!_){u.printErr("wget",`포스트를 찾을 수 없습니다: ${d}`);return}const y=o.getPost(_);if(!y){u.printErr("wget",`포스트 데이터가 없습니다: ${d}`);return}const S=y.title.replace(/[/\\:*?"<>|]/g,"_");if(m==="md"){const b=new Blob([y.content],{type:"text/markdown;charset=utf-8"}),D=URL.createObjectURL(b),C=document.createElement("a");C.href=D,C.download=`${S}.md`,C.click(),setTimeout(()=>URL.revokeObjectURL(D),1e3),u.print(`<span class="t-green">✓ 다운로드: ${tn(S)}.md</span>`)}else{const b=`<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${tn(y.title)}</title>
<style>body{font-family:system-ui;max-width:720px;margin:40px auto;padding:0 20px;line-height:1.7;}
pre{background:#f5f5f5;padding:16px;border-radius:6px;overflow-x:auto;}code{font-family:monospace;}</style>
</head><body>
<h1>${tn(y.title)}</h1>
<p><em>${y.categories.join(" / ")} · ${al.formatShortDate(y.createdDate)}</em></p>
<hr>
${y.content.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}
</body></html>`,D=new Blob([b],{type:"text/html;charset=utf-8"}),C=URL.createObjectURL(D),O=document.createElement("a");O.href=C,O.download=`${S}.html`,O.click(),setTimeout(()=>URL.revokeObjectURL(C),1e3),u.print(`<span class="t-green">✓ 다운로드: ${tn(S)}.html</span>`)}}function Kh(a,r){const{renderer:o}=a,u=r.split("/").pop(),d={"snake.sh":"snake","cmatrix.sh":"cmatrix","2048.sh":"2048","blocks.sh":"blocks","pipes.sh":"pipes"}[u];if(!d){o.printErr(u,"실행할 수 없는 스크립트입니다");return}o.print(`<span class="t-green">$ ./${tn(u)}</span>`),o.print(`<span class="t-dim">loading ${tn(u)}...</span>`),a.callbacks.onAppLaunch&&a.callbacks.onAppLaunch(d)}function IT(a,r){const{vfs:o,cwd:u,renderer:c}=a,{flags:d,path:p,error:m}=a.parseArgs(r,{boolFlags:["-i"]});if(m){c.printErr("grep",`지원하지 않는 옵션입니다: ${m}`),c.printHint("grep");return}if(!p){c.print('<span class="t-err">사용법: grep [-i] &lt;keyword&gt;</span>'),c.printHint("grep");return}const _=!!d["-i"],y=o.getNode(u),S=y?o.collectFiles(y,u):[],b=_?p.toLowerCase():p,D=S.filter(C=>{const O=C.split("/").pop(),P=o.getPost(C);return!!((_?O.toLowerCase():O).includes(b)||P&&P.tags&&(_?P.tags.join(" ").toLowerCase():P.tags.join(" ")).includes(b))});if(a.setLastResults(D,"grep"),D.length===0){c.print('<span class="t-dim">(검색 결과 없음)</span>');return}for(let C=0;C<D.length;C++){const O=D[C],P=O.split("/").pop(),E=Je(O.split("/").slice(0,-1).join("/")),H=(_?P.toLowerCase():P).indexOf(b);let Q;if(H>=0){const W=P.slice(0,H),an=P.slice(H,H+p.length),$=P.slice(H+p.length);Q=`${tn(W)}<span class="t-match">${tn(an)}</span>${tn($)}`}else Q=tn(P);const v=o.getPost(O),N=`<span class="t-yellow">[${C+1}]</span>`,G=v?`  <span class="t-dim">${al.formatShortDate(v.createdDate)}</span>`:"";c.print(`${N} <span class="t-file">${Q}</span>${G}`),c.print(`    <span class="t-dim">${tn(E)}/</span>`)}c.print(""),c.print(`<span class="t-dim">${D.length}개 결과 — open N / cat N 으로 열기</span>`)}function PT(a,r){const{vfs:o,renderer:u}=a,{flags:c,path:d,error:p}=a.parseArgs(r,{valueFlags:["-name"]});if(p){u.printErr("find",`지원하지 않는 옵션입니다: ${p}`),u.printHint("find");return}const m=(c["-name"]||d||"").replace(/['"]/g,""),_=c["-name"]&&d||".",y=a.resolve(_),S=o.getNode(y);if(!S||typeof S!="object"){u.printErr("find",`경로를 찾을 수 없습니다: ${_}`);return}const b=o.collectFiles(S,y),C=m.replace(/[{}()[\]^$+|\\]/g,"\\$&").replace(/\./g,"\\.").replace(/\*/g,".*").replace(/\?/g,".");let O;try{O=new RegExp(C,"i")}catch{u.printErr("find",`잘못된 패턴입니다: ${m}`);return}const P=b.filter(E=>O.test(E.split("/").pop()));if(a.setLastResults(P,"find"),P.length===0){u.print('<span class="t-dim">(검색 결과 없음)</span>');return}for(let E=0;E<P.length;E++){const B=`<span class="t-yellow">[${E+1}]</span>`;u.print(`${B} <span class="t-out">${tn(Je(P[E]))}</span>`)}u.print(""),u.print(`<span class="t-dim">${P.length}개 결과 — open N / cat N 으로 열기</span>`)}function FT(a,r){const{vfs:o,cwd:u,renderer:c}=a,{flags:d}=a.parseArgs(r,{boolFlags:["-l"]});if(!d["-l"]){c.print('<span class="t-err">사용법: wc -l</span>'),c.printHint("wc");return}if(a.lastResults.length>0&&a.lastResultContext)c.print(`<span class="t-out">${a.lastResults.length}</span> <span class="t-dim">(${a.lastResultContext} 결과)</span>`);else{const p=o.getNode(u),m=p?o.collectFiles(p,u):[];c.print(`<span class="t-out">${m.length}</span> <span class="t-dim">${tn(Je(u))}</span>`)}}function qT(a){const r=a.renderer;r.print(""),r.print('<span class="t-green">사용 가능한 명령어:</span>'),r.print(""),r.print('  <span class="t-cyan">ls</span> <span class="t-dim">[-l]</span>              현재 디렉터리 목록'),r.print('  <span class="t-cyan">cd</span> <span class="t-dim">&lt;dir&gt;</span>            디렉터리 이동 (posts/about → 페이지 이동)'),r.print('  <span class="t-cyan">pwd</span>                  현재 경로 출력'),r.print('  <span class="t-cyan">tree</span> <span class="t-dim">[dir]</span>           디렉터리 트리'),r.print('  <span class="t-cyan">cat</span> <span class="t-dim">&lt;file&gt;</span>           포스트 미리보기'),r.print('  <span class="t-cyan">vi</span> <span class="t-dim">&lt;file&gt;</span>            vi 뷰어로 열기 (j/k/:q)'),r.print('  <span class="t-cyan">open</span> <span class="t-dim">&lt;file&gt;</span>          포스트 열기 (브라우저 이동)'),r.print('  <span class="t-cyan">grep</span> <span class="t-dim">[-i] &lt;keyword&gt;</span>  제목/태그 검색'),r.print('  <span class="t-cyan">find</span> <span class="t-dim">&lt;path&gt; -name &lt;pattern&gt;</span>  파일 검색'),r.print('  <span class="t-cyan">wc</span> <span class="t-dim">-l</span>               포스트 수 (컨텍스트 인식)'),r.print('  <span class="t-cyan">wget</span> <span class="t-dim">&lt;file&gt;</span>          포스트 다운로드'),r.print('  <span class="t-cyan">whoami</span>               사용자명'),r.print('  <span class="t-cyan">history</span>              명령어 기록'),r.print('  <span class="t-cyan">clear</span>                화면 지우기'),r.print('  <span class="t-cyan">exit</span>                 터미널 닫기'),r.print(""),r.print('<span class="t-green">extras:</span>'),r.print(""),r.print('  <span class="t-cyan">neofetch</span>             시스템 정보 + ASCII 아트'),r.print('  <span class="t-cyan">fortune</span>              랜덤 명언'),r.print('  <span class="t-cyan">cowsay</span> <span class="t-dim">[text]</span>        소가 말해요'),r.print(""),r.print('<span class="t-green">games:</span>  <span class="t-dim">cd /games 에서 .sh 파일 실행</span>'),r.print(""),r.print('  <span class="t-dim">./snake.sh</span>           스네이크 게임'),r.print('  <span class="t-dim">./cmatrix.sh</span>         Matrix rain'),r.print('  <span class="t-dim">./2048.sh</span>            2048 퍼즐'),r.print('  <span class="t-dim">./blocks.sh</span>          블록 쌓기 퍼즐'),r.print('  <span class="t-dim">./pipes.sh</span>           파이프 스크린세이버'),r.print('  <span class="t-dim">sl</span>                   🚂 (ls 오타 이스터에그)'),r.print(""),r.print('<span class="t-dim">Tab: 자동완성 · Tab×2: 후보 목록 · ↑↓: 히스토리</span>'),r.print('<span class="t-dim">Ctrl+A/E: 줄 처음/끝 · Ctrl+W: 단어 삭제 · Ctrl+U: 줄 삭제</span>'),r.print('<span class="t-dim">Ctrl+K: 뒤 삭제 · Ctrl+L: 클리어 · Ctrl+D: 종료 · &lt;cmd&gt; --help</span>')}function GT(a){const r=a.renderer;if(a.history.length===0){r.print('<span class="t-dim">(비어 있음)</span>');return}a.history.forEach((o,u)=>{r.print(`<span class="t-dim">${String(u+1).padStart(4)}</span>  ${tn(o)}`)})}function YT(a){a.renderer.print('<span class="t-out">simjunghun</span>')}function JT(a){a.renderer.outputLines.length=0}function KT(a){a.callbacks.onClose&&a.callbacks.onClose()}function QT(a){const r=a.renderer,o=Kr.posts,u=new Set,c=new Set;for(const C of o)C.categories&&C.categories.forEach(O=>u.add(O)),C.tags&&C.tags.forEach(O=>c.add(O));const d=navigator.userAgent,p=d.includes("Chrome")?"Chrome":d.includes("Firefox")?"Firefox":d.includes("Safari")?"Safari":"Unknown",m=d.includes("Mac")?"macOS":d.includes("Win")?"Windows":d.includes("Linux")?"Linux":"Unknown",_=new Date,y=`${_.getHours()}h ${_.getMinutes()}m`,S=['        <span class="t-green">  ██████╗ ██╗███╗   ███╗</span>','        <span class="t-green"> ██╔════╝ ██║████╗ ████║</span>','        <span class="t-green"> ╚█████╗  ██║██╔████╔██║</span>','        <span class="t-green">  ╚═══██╗ ██║██║╚██╔╝██║</span>','        <span class="t-green"> ██████╔╝ ██║██║ ╚═╝ ██║</span>','        <span class="t-green"> ╚═════╝  ╚═╝╚═╝     ╚═╝</span>'],b=['<span class="t-green">simjunghun</span><span class="t-dim">@</span><span class="t-green">blog</span>','<span class="t-dim">─────────────────────</span>',`<span class="t-cyan">OS</span>: ${tn(m)}`,`<span class="t-cyan">Browser</span>: ${tn(p)}`,'<span class="t-cyan">Shell</span>: sim-terminal v5.0',`<span class="t-cyan">Uptime</span>: ${y}`,`<span class="t-cyan">Posts</span>: ${o.length}`,`<span class="t-cyan">Categories</span>: ${u.size}`,`<span class="t-cyan">Tags</span>: ${c.size}`,`<span class="t-cyan">Theme</span>: ${document.documentElement.getAttribute("data-theme")||"dark"}`,"",'<span style="background:#f87171;color:#f87171">██</span><span style="background:#fbbf24;color:#fbbf24">██</span><span style="background:#4ade80;color:#4ade80">██</span><span style="background:#60a5fa;color:#60a5fa">██</span><span style="background:#a78bfa;color:#a78bfa">██</span><span style="background:#22d3ee;color:#22d3ee">██</span><span style="background:#fb923c;color:#fb923c">██</span><span style="background:#d4d4dc;color:#d4d4dc">██</span>'];r.print("");const D=Math.max(S.length,b.length);for(let C=0;C<D;C++){const O=S[C]||"                              ",P=b[C]||"";r.print(`${O}  ${P}`)}}function ZT(a){const r=a.renderer,o=[{text:"코드는 글쓰기와 같다. 읽는 사람을 생각하며 쓴다.",author:"Robert C. Martin"},{text:"Talk is cheap. Show me the code.",author:"Linus Torvalds"},{text:"완벽한 코드는 없다. 완벽하게 작동하는 코드만 있을 뿐.",author:"Unknown"},{text:"First, solve the problem. Then, write the code.",author:"John Johnson"},{text:"좋은 코드는 그 자체로 최고의 문서이다.",author:"Steve McConnell"},{text:"프로그래밍은 생각하는 것이지, 타이핑하는 것이 아니다.",author:"Rich Hickey"},{text:"Debugging is twice as hard as writing the code.",author:"Brian Kernighan"},{text:"삭제한 코드에는 버그가 없다.",author:"Jeff Sickel"},{text:"Any fool can write code that a computer can understand.",author:"Martin Fowler"},{text:"오늘의 TODO: 커피 마시기, 코드 짜기, 커피 마시기, 버그 고치기, 커피...",author:"Every Developer"},{text:"It works on my machine. ¯\\_(ツ)_/¯",author:"Anonymous"},{text:"내일의 나에게 미안하지 않은 코드를 작성하자.",author:"Unknown"},{text:"There are only two hard things in CS: cache invalidation and naming things.",author:"Phil Karlton"},{text:"// TODO: 나중에 고치기 (3년째)",author:"Legacy Code"},{text:'git commit -m "fix" 의 실제 의미: 뭔가 바꿨는데 설명하기 귀찮음',author:"Every Developer"}],u=o[Math.floor(Math.random()*o.length)];a.lastFortune=u.text,r.print(""),r.print(`<span class="t-purple"> "${tn(u.text)}"</span>`),r.print(`<span class="t-dim">    — ${tn(u.author)}</span>`)}function VT(a,r){const o=a.renderer,u=r.length>0?r.join(" ").slice(0,200):a.lastFortune||"moo",c=tn(u),d=u.length,p=" "+"_".repeat(d+2),m=" "+"-".repeat(d+2);o.print(""),o.print(`<span class="t-out">${p}</span>`),o.print(`<span class="t-out">&lt; ${c} &gt;</span>`),o.print(`<span class="t-out">${m}</span>`),o.print('<span class="t-out">        \\   ^__^</span>'),o.print('<span class="t-out">         \\  (oo)\\_______</span>'),o.print('<span class="t-out">            (__)\\       )\\/\\</span>'),o.print('<span class="t-out">                ||----w |</span>'),o.print('<span class="t-out">                ||     ||</span>')}function WT(a){a.renderer.print('<span class="t-dim">🚂 choo choo!</span>'),a.callbacks.onAppLaunch&&a.callbacks.onAppLaunch("sl")}const km=new Map([["ls",DT],["cd",jT],["pwd",kT],["tree",NT],["cat",BT],["vi",jm],["vim",jm],["open",UT],["grep",IT],["find",PT],["wc",FT],["wget",zT],["help",qT],["history",GT],["whoami",YT],["clear",JT],["exit",KT],["neofetch",QT],["fortune",ZT],["cowsay",VT],["sl",WT]]);function XT(a,r,o,u,c){let d=null;if(a.startsWith("./")?d=a.slice(2):(a==="bash"||a==="sh")&&r.length===1&&(d=r[0]),d===null)return null;const p=[d,d.endsWith(".sh")?null:d+".sh"].filter(Boolean);for(const m of p){const _=c(o,m);if(u.getNode(_)==="script")return _}return null}class Nm{constructor({onClose:r,onOpenPost:o,onSyncUrl:u,onViOpen:c,onPreviewImage:d,onAppLaunch:p,pathname:m}){this.cwd=RT(m,ni),this.history=[],this.historyIdx=-1,this.tabCount=0,this.outputLines=[],this.lastResults=[],this.lastResultContext=null,this.lastFortune=null,this.callbacks={onClose:r,onOpenPost:o,onSyncUrl:u,onViOpen:c,onPreviewImage:d,onAppLaunch:p},this.renderer=new MT(this.outputLines,()=>this.cwd),this.outputLines.push('<span class="t-dim">sim.junghun terminal v5.0 (bash)</span>'),this.outputLines.push('<span class="t-dim">cd posts | about 으로 페이지 이동. "help"를 입력하세요.</span>'),this.outputLines.push("")}_trimOutput(){this.outputLines.length>1e3&&this.outputLines.splice(0,this.outputLines.length-1e3)}displayPath(r){return Je(r)}printCmd(r){this.renderer.printCmd(r)}_buildCtx(){const r=this;return{vfs:ni,get cwd(){return r.cwd},setCwd:o=>{this.cwd=o},renderer:this.renderer,resolve:o=>Hr(this.cwd,o),resolveFileArg:o=>CT(this.cwd,o,ni),parseArgs:AT,get lastResults(){return r.lastResults},get lastResultContext(){return r.lastResultContext},setLastResults:(o,u)=>{this.lastResults=o,this.lastResultContext=u},history:this.history,callbacks:this.callbacks,get lastFortune(){return r.lastFortune},set lastFortune(o){r.lastFortune=o}}}getCompletions(r){const o=r.trimStart(),u=Rm(o);if(u.length===0)return{prefix:"",items:Om.map(B=>({name:B,isDir:!1})),type:"cmd"};if(u.length===1&&!o.endsWith(" ")&&!u[0].startsWith("./")){const B=u[0],H=Om.filter(Q=>Q.startsWith(B));return{prefix:B,items:H.map(Q=>({name:Q,isDir:!1})),type:"cmd"}}const c=u[0],d=o.endsWith(" ")&&!o.endsWith("\\ ");let p;if(d)p="";else{let B=-1;for(let H=o.length-1;H>=0;H--)if(o[H]===" "&&(H===0||o[H-1]!=="\\")){B=H;break}p=o.slice(B+1)}if(p.startsWith("-")&&wm[c]){const B=wm[c].filter(H=>H.startsWith(p));return{prefix:p,items:B.map(H=>({name:H,display:H,isDir:!1})),type:"flag"}}const m=p.replace(/\\ /g," "),_=m.lastIndexOf("/");let y,S;_>=0?(y=m.slice(0,_)||"/",S=m.slice(_+1)):(y="",S=m);const b=y?Hr(this.cwd,y):this.cwd,D=ni.getNode(b);if(!D||typeof D!="object")return{prefix:p,items:[],type:"path"};const C=y?y+"/":"",O=OT.includes(c),P=wT.includes(c),E=Object.entries(D).filter(([B,H])=>{if(!B.toLowerCase().startsWith(S.toLowerCase()))return!1;const Q=H!==null&&typeof H=="object";return!(O&&!Q||P&&Q)}).sort(([B],[H])=>B.localeCompare(H)).map(([B,H])=>({name:B,display:th(C+B),isDir:H!==null&&typeof H=="object"}));return{prefix:p,items:E,type:"path"}}applyTab(r){this.tabCount++;const o=this.getCompletions(r);if(o.items.length===0)return r;const u=r.slice(0,r.length-o.prefix.length);if(o.items.length===1){const p=o.items[0];let m;return o.type==="cmd"||o.type==="flag"?m=p.name+" ":m=p.display+(p.isDir?"/":" "),this.tabCount=0,u+m}const c=o.items.map(p=>o.type==="cmd"||o.type==="flag"?p.name:p.display);let d=c[0];for(const p of c)for(;d&&!p.startsWith(d);)d=d.slice(0,-1);return this.tabCount===1?d.length>o.prefix.length?u+d:r:(this.renderer.printCmd(r),this.renderer.printCandidates(o),this._trimOutput(),this.tabCount=0,r)}exec(r){const o=r.trim();if(!o)return;if(o.length>1e3){this.renderer.printCmd(o.slice(0,50)+"..."),this.renderer.printErr("bash","입력이 너무 깁니다 (최대 1000자)"),this.renderer.print(""),this._trimOutput();return}this.history.length>=200&&this.history.shift(),this.history.push(o),this.historyIdx=this.history.length,this.renderer.printCmd(o);const u=Rm(o),c=u[0],d=u.slice(1),p=XT(c,d,this.cwd,ni,Hr);if(p){const _=this._buildCtx();Kh(_,p),this.renderer.print(""),this._trimOutput();return}if(c.startsWith("./")){this.renderer.printErr(c,"파일을 찾을 수 없거나 실행 권한이 없습니다"),this.renderer.print(""),this._trimOutput();return}if(d.includes("--help")&&Mm[c]){this.renderer.print("");for(const _ of Mm[c])this.renderer.print(_?`<span class="t-dim">${tn(_)}</span>`:"");this.renderer.print(""),this._trimOutput();return}if((c==="open"||c==="cat")&&d.length===1&&/^\d+$/.test(d[0])){const _=parseInt(d[0])-1;if(this.lastResults.length>0&&_>=0&&_<this.lastResults.length){const y=this.lastResults[_],S=km.get(c);S&&S(this._buildCtx(),[y]),this.renderer.print(""),this._trimOutput();return}}if(c==="bash"||c==="sh"){d.length===0?this.renderer.printErr(c,"사용법: bash <script.sh>"):this.renderer.printErr(c,`${d[0]}: 스크립트를 찾을 수 없습니다`),this.renderer.print(""),this._trimOutput();return}const m=km.get(c);if(m){const _=this._buildCtx();if(m(_,d),c==="clear"||c==="exit")return}else this.renderer.printErr(c,"알 수 없는 명령어입니다"),this.renderer.print('<span class="t-dim">help 를 입력해 도움말을 확인하세요.</span>');this.renderer.print(""),this._trimOutput()}historyUp(){return this.historyIdx>0?(this.historyIdx--,this.history[this.historyIdx]):null}historyDown(){return this.historyIdx<this.history.length-1?(this.historyIdx++,this.history[this.historyIdx]):(this.historyIdx=this.history.length,"")}}const $T=({onClose:a,onOpenPost:r,onSyncUrl:o,onViOpen:u,onPreviewImage:c,onAppLaunch:d})=>{const p=x.useRef(null),m=x.useRef({onClose:a,onOpenPost:r,onSyncUrl:o,onViOpen:u,onPreviewImage:c,onAppLaunch:d});x.useEffect(()=>{m.current={onClose:a,onOpenPost:r,onSyncUrl:o,onViOpen:u,onPreviewImage:c,onAppLaunch:d}}),x.useEffect(()=>{p.current&&(p.current.callbacks=m.current)});const[_,y]=x.useState([]),[S,b]=x.useState("/"),D=x.useCallback(()=>{if(!p.current){const{onClose:E,onOpenPost:B,onSyncUrl:H,onViOpen:Q,onPreviewImage:v,onAppLaunch:N}=m.current;p.current=new Nm({onClose:E,onOpenPost:B,onSyncUrl:H,onViOpen:Q,onPreviewImage:v,onAppLaunch:N,pathname:null}),y([...p.current.outputLines]),b(p.current.displayPath(p.current.cwd))}return p.current},[]),C=x.useCallback(()=>{const E=p.current;E&&(y([...E.outputLines]),b(E.displayPath(E.cwd)))},[]),O=x.useCallback(E=>{const{onClose:B,onOpenPost:H,onSyncUrl:Q,onViOpen:v,onPreviewImage:N,onAppLaunch:G}=m.current;p.current=new Nm({onClose:B,onOpenPost:H,onSyncUrl:Q,onViOpen:v,onPreviewImage:N,onAppLaunch:G,pathname:E}),C()},[C]),P=x.useCallback(E=>{const B=D();if(!(E.isComposing||E.keyCode===229))if(E.key==="Enter")E.preventDefault(),B.exec(E.target.value),E.target.value="",B.tabCount=0,C();else if(E.key==="Tab")E.preventDefault(),E.target.value=B.applyTab(E.target.value),C();else if(E.key==="ArrowUp"){E.preventDefault();const H=B.historyUp();H!==null&&(E.target.value=H)}else if(E.key==="ArrowDown"){E.preventDefault();const H=B.historyDown();H!==null&&(E.target.value=H)}else if(E.key==="l"&&E.ctrlKey)E.preventDefault(),B.outputLines.length=0,C();else if(E.key==="c"&&E.ctrlKey)E.preventDefault(),B.printCmd(E.target.value+"^C"),E.target.value="",C();else if(E.key==="u"&&E.ctrlKey)E.preventDefault(),E.target.value="";else if(E.key==="w"&&E.ctrlKey){E.preventDefault();const Q=E.target.value.trimEnd(),v=Q.lastIndexOf(" ");E.target.value=v>=0?Q.slice(0,v+1):""}else if(E.key==="k"&&E.ctrlKey){E.preventDefault();const H=E.target.selectionStart;E.target.value=E.target.value.slice(0,H)}else if(E.key==="a"&&E.ctrlKey)E.preventDefault(),E.target.setSelectionRange(0,0);else if(E.key==="e"&&E.ctrlKey){E.preventDefault();const H=E.target.value.length;E.target.setSelectionRange(H,H)}else E.key==="d"&&E.ctrlKey?(E.preventDefault(),E.target.value===""&&(B.exec("exit"),C())):["Shift","Control","Alt","Meta"].includes(E.key)||(B.tabCount=0)},[D,C]);return{outputLines:_,cwd:S,handleKeyDown:P,reset:O}},ti={write:["E45: 'readonly' option is set (add ! to override)","E212: Can't open file for writing: Permission denied",'E505: "file" is read-only (sudo 권한이 필요합니다)'],writeQuit:["E45: 'readonly' option is set (add ! to override)","E212: Can't open file for writing"],sudo:["Permission denied. 이 블로그의 관리자가 아닙니다.","sudo: 3 incorrect password attempts","sudo: nice try 😏"],forceWrite:["E505: 정말요? 이건 읽기 전용 블로그입니다 😅","E212: 아무리 !를 붙여도 안 됩니다"]};function ai(a){return a[Math.floor(Math.random()*a.length)]}const nx=({terminalInputRef:a})=>{const[r,o]=x.useState(null),u=x.useRef(null),c=x.useRef(null),[d,p]=x.useState(""),[m,_]=x.useState(!1),[y,S]=x.useState(!1),[b,D]=x.useState(0),[C,O]=x.useState(0),[P,E]=x.useState(null),[B,H]=x.useState(!1),Q=x.useRef(null),v=r?r.textLines.length:0,N=r?(r.textLines[b]||"").length:0,G=r?y?"INSERT":m?"COMMAND":"NORMAL":null,W=x.useCallback((w,k="error")=>{E({text:w,type:k}),clearTimeout(Q.current),Q.current=setTimeout(()=>E(null),3e3)},[]),an=x.useCallback(()=>{o(null),S(!1),_(!1),E(null),H(!1),setTimeout(()=>a.current?.focus(),0)},[a]),$=x.useCallback((w,k)=>{if(!r)return;const V=Math.max(0,Math.min(w,r.textLines.length-1)),X=(r.textLines[V]||"").length;D(V),O(Math.max(0,Math.min(k,X)))},[r]),Cn=x.useCallback((w,k,V)=>{o({htmlLines:w,textLines:k,fileName:V}),D(0),O(0),p(""),_(!1),S(!1),E(null),H(!1)},[]),pn=x.useCallback(()=>{o(null),S(!1),_(!1),E(null),H(!1)},[]),_n=x.useCallback(w=>{const k=w.trim();if(k==="q"||k==="quit"){if(B){W("E37: No write since last change (add ! to override)");return}an();return}if(k==="q!"||k==="qa!"||k==="quit!"){an();return}if(k==="w"||k==="write"){W(ai(ti.write));return}if(k==="w!"||k==="write!"){W(ai(ti.forceWrite));return}if(k==="wq"||k==="x"){W(ai(ti.writeQuit));return}if(k==="wq!"){W(ai(ti.forceWrite));return}if(k.startsWith("!sudo")||k.startsWith("w !sudo")){W(ai(ti.sudo));return}const V=parseInt(k);if(!isNaN(V)&&r){$(V-1,0);return}if(k.startsWith("set")){W(`E518: Unknown option: ${k.slice(4)}`,"info");return}W(`E492: Not an editor command: ${k}`)},[r,B,an,W,$]),Sn=x.useCallback((w,k,V,X)=>{o(nn=>({...nn,textLines:w,htmlLines:k})),D(V),O(X),H(!0)},[]),Y=x.useCallback((w,k,V,X,nn)=>{const Z=[...w];Z[X]=V;const en=[...k];en[X]=`<span class="t-out">${tn(V)}</span>`,Sn(Z,en,X,nn)},[Sn]),L=x.useCallback(w=>{if(w.key==="Escape"){w.preventDefault(),S(!1),E(null);return}if(w.key==="ArrowUp"){w.preventDefault(),$(b-1,C);return}if(w.key==="ArrowDown"){w.preventDefault(),$(b+1,C);return}if(w.key==="ArrowLeft"){w.preventDefault(),$(b,C-1);return}if(w.key==="ArrowRight"){w.preventDefault(),$(b,C+1);return}w.preventDefault();const k=r.textLines,V=r.htmlLines,X=k[b]||"";if(w.key==="Enter"){const nn=X.slice(0,C),Z=X.slice(C),en=[...k];en.splice(b,1,nn,Z);const cn=[...V];cn.splice(b,1,`<span class="t-out">${tn(nn)}</span>`,`<span class="t-out">${tn(Z)}</span>`),Sn(en,cn,b+1,0)}else if(w.key==="Backspace"){if(C>0)Y(k,V,X.slice(0,C-1)+X.slice(C),b,C-1);else if(b>0){const nn=k[b-1]||"",Z=nn+X,en=[...k];en.splice(b-1,2,Z);const cn=[...V];cn.splice(b-1,2,`<span class="t-out">${tn(Z)}</span>`),Sn(en,cn,b-1,nn.length)}}else w.key==="Tab"?Y(k,V,X.slice(0,C)+"  "+X.slice(C),b,C+2):w.key.length===1&&!w.ctrlKey&&!w.metaKey&&!w.altKey&&(Y(k,V,X.slice(0,C)+w.key+X.slice(C),b,C+1),Math.random()<.03&&W("(변경 사항은 저장되지 않습니다 🙃)","info"))},[r,b,C,$,W,Sn,Y]),T=x.useCallback(w=>{switch(w.preventDefault(),E(null),w.key){case":":_(!0),p("");break;case"i":S(!0),W("-- INSERT --","info");break;case"a":$(b,C+1),S(!0),W("-- INSERT --","info");break;case"I":$(b,0),S(!0),W("-- INSERT --","info");break;case"A":$(b,N),S(!0),W("-- INSERT --","info");break;case"o":{o(k=>{const V=[...k.textLines],X=[...k.htmlLines];return V.splice(b+1,0,""),X.splice(b+1,0,'<span class="t-out"></span>'),{...k,textLines:V,htmlLines:X}}),D(b+1),O(0),H(!0),S(!0),W("-- INSERT --","info");break}case"O":{o(k=>{const V=[...k.textLines],X=[...k.htmlLines];return V.splice(b,0,""),X.splice(b,0,'<span class="t-out"></span>'),{...k,textLines:V,htmlLines:X}}),O(0),H(!0),S(!0),W("-- INSERT --","info");break}case"h":case"ArrowLeft":$(b,C-1);break;case"l":case"ArrowRight":$(b,C+1);break;case"j":case"ArrowDown":$(b+1,C);break;case"k":case"ArrowUp":$(b-1,C);break;case"w":{const V=(r.textLines[b]||"").slice(C),X=V.match(/^\S*\s+/);$(b,X?C+X[0].length:C+V.length);break}case"b":{const X=(r.textLines[b]||"").slice(0,C).match(/\s+\S*$/);$(b,X?C-X[0].length:0);break}case"0":case"Home":$(b,0);break;case"$":case"End":$(b,N-1);break;case"g":$(0,0);break;case"G":$(v-1,0);break;case"d":w.ctrlKey&&$(b+15,C);break;case"u":w.ctrlKey&&$(b-15,C);break;case" ":case"PageDown":$(b+20,C);break;case"PageUp":$(b-20,C);break;case"q":if(B){W("E37: No write since last change (add ! to override)");break}an();break;case"Z":W("ZZ? 저장은 안 됩니다 😏");break;case"x":B||H(!0),W("E21: Cannot make changes, 'modifiable' is off");break;case"r":W("E21: Cannot make changes, 'modifiable' is off");break;case"p":W('E353: Nothing in register "');break}},[r,b,C,B,v,N,an,W,$]),M=x.useCallback(w=>{if(r){if(m){w.preventDefault(),w.key==="Enter"?(_n(d),p(""),_(!1)):w.key==="Escape"?(p(""),_(!1)):w.key==="Backspace"?d.length===0?_(!1):p(k=>k.slice(0,-1)):w.key.length===1&&p(k=>k+w.key);return}if(y){L(w);return}T(w)}},[r,d,m,y,_n,L,T]);return x.useEffect(()=>{r&&c.current&&c.current.focus()},[r]),x.useEffect(()=>{if(u.current&&r){const w=u.current.children[b];w&&w.scrollIntoView({block:"nearest"})}},[b,r]),x.useEffect(()=>()=>clearTimeout(Q.current),[]),{active:!!r,mode:r,bodyRef:u,inputRef:c,row:b,col:C,cmd:d,cmdMode:m,insert:y,msg:P,dirty:B,totalLines:v,modeLabel:G,handleKeyDown:M,open:Cn,close:pn}},pi=()=>{const a=x.useContext(Yr);if(!a)throw new Error("useDesktop must be used within DesktopProvider");return a},ex=400,tx=260,ax=768,li=()=>window.innerWidth<=ax,qe=.65,vu=1,lx=.8,ix=.3,Qu=({windowId:a,title:r,titleExtra:o,onClose:u,resizable:c=!0,className:d="",children:p})=>{const m=pi(),_=x.useRef(m);x.useEffect(()=>{_.current=m});const y=x.useRef(null),S=x.useRef(null),b=x.useRef(null),D=x.useRef([]),[C,O]=x.useState(qe),[P,E]=x.useState(!1),B=x.useRef(qe),H=x.useRef(null),[Q,v]=x.useState(()=>window.visualViewport?.height||window.innerHeight);x.useEffect(()=>{const k=window.visualViewport;if(!k)return;const V=()=>v(k.height);return k.addEventListener("resize",V),()=>k.removeEventListener("resize",V)},[]);const N=m.getWindow(a);x.useEffect(()=>()=>{D.current.forEach(k=>k()),D.current=[]},[]);const G=N?.state;x.useEffect(()=>{if(G==="normal"&&li()){const k=requestAnimationFrame(()=>{B.current=qe,O(qe)});return()=>cancelAnimationFrame(k)}},[G]),x.useEffect(()=>{if(!li()||!G)return;const k=G!=="minimized";return document.body.style.overflow=k?"hidden":"",()=>{document.body.style.overflow=""}},[G]),x.useEffect(()=>{if(li())return;const k=_.current,V=k.getWindow(a);if(V&&V.position.x===null&&y.current){const X=y.current.getBoundingClientRect(),nn=k.windows.indexOf(V)*24;k.moveWindow(a,{x:Math.max(0,(window.innerWidth-X.width)/2+nn),y:Math.max(40,(window.innerHeight-X.height)/3+nn)})}},[a]);const W=x.useCallback(()=>{m.activeWindowId!==a&&m.focusWindow(a)},[m,a]),an=x.useCallback(k=>{const V=_.current.getWindow(a);if(!V||V.state==="fullscreen"||li())return;k.preventDefault();const X=y.current?.getBoundingClientRect();if(!X)return;S.current={sx:k.clientX,sy:k.clientY,ox:X.left,oy:X.top};const nn=cn=>{const mn=S.current;mn&&_.current.moveWindow(a,{x:mn.ox+cn.clientX-mn.sx,y:mn.oy+cn.clientY-mn.sy})},Z=()=>{S.current=null,window.removeEventListener("mousemove",nn),window.removeEventListener("mouseup",Z),D.current=D.current.filter(cn=>cn!==en)},en=()=>{window.removeEventListener("mousemove",nn),window.removeEventListener("mouseup",Z)};D.current.push(en),window.addEventListener("mousemove",nn),window.addEventListener("mouseup",Z)},[a]),$=x.useCallback(k=>{const V=_.current.getWindow(a);if(!V||V.state==="fullscreen")return;k.preventDefault(),k.stopPropagation();const X=y.current?.getBoundingClientRect();if(!X)return;b.current={sx:k.clientX,sy:k.clientY,ow:X.width,oh:X.height};const nn=cn=>{const mn=b.current;mn&&_.current.resizeWindow(a,{w:Math.max(ex,mn.ow+cn.clientX-mn.sx),h:Math.max(tx,mn.oh+cn.clientY-mn.sy)})},Z=()=>{b.current=null,window.removeEventListener("mousemove",nn),window.removeEventListener("mouseup",Z),D.current=D.current.filter(cn=>cn!==en)},en=()=>{window.removeEventListener("mousemove",nn),window.removeEventListener("mouseup",Z)};D.current.push(en),window.addEventListener("mousemove",nn),window.addEventListener("mouseup",Z)},[a]),Cn=x.useCallback(k=>{const V=k.touches[0],X=window.visualViewport?.height||window.innerHeight;H.current={startY:V.clientY,startHeight:B.current},E(!0);const nn=cn=>{const mn=H.current;if(!mn)return;const Zn=mn.startY-cn.touches[0].clientY,Ae=Math.min(vu,Math.max(.1,mn.startHeight+Zn/X));B.current=Ae,O(Ae)},Z=()=>{H.current=null,E(!1);const cn=B.current;cn<ix?(B.current=0,O(0),setTimeout(()=>{u(),B.current=qe,O(qe)},250)):cn<lx?(B.current=qe,O(qe)):(B.current=vu,O(vu)),window.removeEventListener("touchmove",nn),window.removeEventListener("touchend",Z),D.current=D.current.filter(mn=>mn!==en)},en=()=>{window.removeEventListener("touchmove",nn),window.removeEventListener("touchend",Z)};D.current.push(en),window.addEventListener("touchmove",nn,{passive:!0}),window.addEventListener("touchend",Z)},[u]),pn=x.useCallback(()=>{B.current=0,O(0),setTimeout(()=>{u(),B.current=qe,O(qe)},250)},[u]);if(!N)return null;const _n=N.state==="minimized",Sn=N.state==="fullscreen",Y=m.activeWindowId===a,L=li(),T=!_n,M=Q;let w;if(_n)w={display:"none"};else if(L){const k=C>=.95;w={position:"fixed",bottom:0,left:0,right:0,top:"auto",width:"100%",height:k?M:Math.round(C*M),zIndex:1e4+N.zIndex,borderRadius:k?"0":"var(--radius-lg) var(--radius-lg) 0 0",transition:P?"none":"height 0.25s ease, border-radius 0.2s ease"}}else Sn?w={}:w={width:N.size.w,height:N.size.h,zIndex:1e4+N.zIndex,...N.position.x!==null?{left:N.position.x,top:N.position.y}:{}};return g.jsxs(g.Fragment,{children:[L&&T&&g.jsx("div",{className:"wsh-backdrop",style:{zIndex:1e4+N.zIndex-1},onClick:pn}),g.jsxs("div",{ref:y,className:`wsh ${Sn&&!L?"wsh-fullscreen":""} ${Y?"wsh-active":""} ${L?"wsh-mobile":""} ${d}`,style:w,onMouseDown:W,children:[L&&g.jsxs("div",{className:"wsh-sheet-header",onTouchStart:Cn,children:[g.jsx("div",{className:"wsh-drag-handle"}),g.jsx("span",{className:"wsh-title",children:r})]}),!L&&g.jsxs("div",{className:"wsh-titlebar",onMouseDown:an,onDoubleClick:()=>m.fullscreenWindow(a),children:[g.jsxs("div",{className:"traffic-lights",children:[g.jsx("span",{className:"dot r",onMouseDown:k=>k.stopPropagation(),onClick:k=>{k.stopPropagation(),u()},title:"닫기"}),g.jsx("span",{className:"dot y",onMouseDown:k=>k.stopPropagation(),onClick:k=>{k.stopPropagation(),m.minimizeWindow(a)},title:"최소화"}),g.jsx("span",{className:"dot g",onMouseDown:k=>k.stopPropagation(),onClick:k=>{k.stopPropagation(),m.fullscreenWindow(a)},title:Sn?"축소":"전체화면"})]}),g.jsx("span",{className:"wsh-title",children:r}),o||null]}),g.jsx("div",{className:"wsh-content",children:p}),!L&&c&&!Sn&&g.jsx("div",{className:"wsh-resize-handle",onMouseDown:$})]})]})},Lm=20,rx=x.memo(({lineNum:a,text:r,html:o,cursorCol:u,isActive:c,isInsert:d})=>{if(!c)return g.jsxs("div",{className:"vi-line",children:[g.jsx("span",{className:"vi-linenum",children:String(a).padStart(3)}),g.jsx("span",{className:"vi-content",dangerouslySetInnerHTML:{__html:o||""}})]});const p=r||"",m=Math.min(u,p.length),_=p.slice(0,m),y=m<p.length?p[m]:" ",S=p.slice(m+1);return g.jsxs("div",{className:"vi-line vi-line-active",children:[g.jsx("span",{className:"vi-linenum",children:String(a).padStart(3)}),g.jsxs("span",{className:"vi-content-cursor",children:[g.jsx("span",{className:"vi-text",children:_}),g.jsx("span",{className:`vi-block-cursor ${d?"vi-bar-cursor":""}`,children:y}),g.jsx("span",{className:"vi-text",children:S})]})]})},(a,r)=>!(a.isActive!==r.isActive||a.html!==r.html||a.text!==r.text||a.lineNum!==r.lineNum||r.isActive&&(a.cursorCol!==r.cursorCol||a.isInsert!==r.isInsert))),sx=({mode:a,cmdMode:r,cmd:o,msg:u,dirty:c,totalLines:d,row:p,col:m})=>g.jsx("div",{className:`vi-statusbar ${u?.type==="error"?"vi-error":""}`,children:r?g.jsxs("span",{className:"vi-cmd-input",children:[":",o,g.jsx("span",{className:"vi-cursor"})]}):u?g.jsx("span",{className:`vi-msg ${u.type}`,children:u.text}):g.jsxs(g.Fragment,{children:[g.jsxs("span",{className:"vi-filename",children:['"',a.fileName,'"',c?" [+]":""," ",d,"L"]}),g.jsxs("span",{className:"vi-pos",children:[p+1,",",m+1,"   ",Math.round((p+1)/d*100),"%"]})]})}),ox=({vi:a})=>{const{mode:r,bodyRef:o,inputRef:u,row:c,col:d,cmdMode:p,cmd:m,insert:_,msg:y,dirty:S,totalLines:b,handleKeyDown:D}=a,C=r.htmlLines.length<Lm?Lm-r.htmlLines.length:0;return g.jsxs("div",{className:"terminal-vi",children:[g.jsxs("div",{className:"vi-body",ref:o,children:[r.htmlLines.map((O,P)=>g.jsx(rx,{lineNum:P+1,text:r.textLines[P],html:O,cursorCol:d,isActive:P===c,isInsert:_},P)),C>0&&Array.from({length:C},(O,P)=>g.jsx("div",{className:"vi-line",children:g.jsx("span",{className:"vi-tilde",children:"~"})},`t${P}`))]}),g.jsx(sx,{mode:r,cmdMode:p,cmd:m,msg:y,dirty:S,totalLines:b,row:c,col:d}),g.jsx("input",{ref:u,className:"vi-hidden-input",onKeyDown:D,onBlur:()=>{setTimeout(()=>{r&&document.activeElement?.tagName!=="INPUT"&&u.current?.focus()},0)},autoFocus:!0})]})},Hm="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",ux=({onExit:a})=>{const r=x.useRef(null),o=x.useRef(null),u=x.useRef(null),c=x.useRef(!0);return x.useEffect(()=>{const d=r.current;if(!d)return;const p=d.getContext("2d");if(!p)return;const m=14;let _,y;const S=()=>{const O=d.parentElement,P=O.clientWidth,E=O.clientHeight;P===0||E===0||(d.width=P,d.height=E,_=Math.floor(d.width/m),y=new Array(_).fill(1))};S();const b=new ResizeObserver(S);b.observe(d.parentElement);const D=()=>{p.fillStyle="rgba(10, 10, 15, 0.05)",p.fillRect(0,0,d.width,d.height),p.fillStyle="#4ADE80",p.font=`${m}px monospace`;for(let O=0;O<y.length;O++){const P=Hm[Math.floor(Math.random()*Hm.length)],E=O*m,B=y[O]*m;p.fillStyle="#4ADE80",p.fillText(P,E,B),Math.random()>.95&&(p.fillStyle="#fff",p.fillText(P,E,B)),B>d.height&&Math.random()>.975&&(y[O]=0),y[O]++}c.current&&(o.current=requestAnimationFrame(D))};u.current=setTimeout(()=>{c.current&&(o.current=requestAnimationFrame(D))},300);const C=O=>{(O.key==="Escape"||O.key==="q"||O.key==="c"&&O.ctrlKey)&&(O.preventDefault(),a())};return window.addEventListener("keydown",C),()=>{c.current=!1,u.current&&clearTimeout(u.current),o.current&&cancelAnimationFrame(o.current),b.disconnect(),window.removeEventListener("keydown",C)}},[a]),g.jsxs("div",{style:{flex:1,overflow:"hidden",background:"#0A0A0F",position:"relative"},children:[g.jsx("canvas",{ref:r,style:{display:"block",width:"100%",height:"100%"}}),g.jsx("div",{style:{position:"absolute",bottom:8,right:12,fontFamily:"var(--font)",fontSize:11,color:"rgba(74,222,128,0.5)"},children:"q / ESC to exit"})]})},ee=16,cx=120,dx={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},w:{x:0,y:-1},s:{x:0,y:1},a:{x:-1,y:0},d:{x:1,y:0},k:{x:0,y:-1},j:{x:0,y:1},h:{x:-1,y:0},l:{x:1,y:0}},fx={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}};function Bm(a,r,o){const u=new Set(o.map(p=>`${p.x},${p.y}`));if(u.size>=a*r)return null;let c,d;do c=Math.floor(Math.random()*a),d=Math.floor(Math.random()*r);while(u.has(`${c},${d}`));return{x:c,y:d}}const px=({onExit:a})=>{const r=x.useRef(null),o=x.useRef(null),u=x.useRef(null),c=x.useRef(0),d=x.useRef(null),p=x.useRef({gameOver:!1}),[m,_]=x.useState(0),[y,S]=x.useState(!1),[b,D]=x.useState(!1);x.useEffect(()=>{p.current={gameOver:y}});const C=x.useCallback(()=>{const E=r.current;if(!E)return;const B=E.parentElement;E.width=B.clientWidth,E.height=B.clientHeight;const H=Math.floor(E.width/ee),Q=Math.floor(E.height/ee),v=Math.floor(H/2),N=Math.floor(Q/2),G=[{x:v,y:N},{x:v-1,y:N},{x:v-2,y:N}];o.current={snake:G,dir:{x:1,y:0},nextDir:{x:1,y:0},food:Bm(H,Q,G),cols:H,rows:Q},_(0),S(!1),D(!0),c.current=0},[]);x.useEffect(()=>{const E=r.current;if(!E)return;const B=E.getContext("2d");if(!B)return;const H=v=>{if(u.current=requestAnimationFrame(H),!o.current||p.current.gameOver){Q(B);return}if(v-c.current<cx)return;c.current=v;const N=o.current;N.dir=N.nextDir;const G={x:N.snake[0].x+N.dir.x,y:N.snake[0].y+N.dir.y};if(G.x<0||G.x>=N.cols||G.y<0||G.y>=N.rows){S(!0);return}if(N.snake.some(W=>W.x===G.x&&W.y===G.y)){S(!0);return}if(N.snake.unshift(G),G.x===N.food.x&&G.y===N.food.y){_(an=>an+10);const W=Bm(N.cols,N.rows,N.snake);if(!W){S(!0);return}N.food=W}else N.snake.pop();Q(B)},Q=v=>{if(!o.current)return;const N=o.current,G=E.width,W=E.height;v.fillStyle="#0A0A0F",v.fillRect(0,0,G,W),v.strokeStyle="rgba(30, 30, 42, 0.5)",v.lineWidth=.5;for(let an=0;an<=N.cols;an++)v.beginPath(),v.moveTo(an*ee,0),v.lineTo(an*ee,N.rows*ee),v.stroke();for(let an=0;an<=N.rows;an++)v.beginPath(),v.moveTo(0,an*ee),v.lineTo(N.cols*ee,an*ee),v.stroke();v.fillStyle="#F87171",v.shadowColor="#F87171",v.shadowBlur=8,v.beginPath(),v.arc(N.food.x*ee+ee/2,N.food.y*ee+ee/2,ee/2-2,0,Math.PI*2),v.fill(),v.shadowBlur=0,N.snake.forEach((an,$)=>{const Cn=1-$/N.snake.length*.6;v.fillStyle=$===0?"#4ADE80":`rgba(74, 222, 128, ${Cn})`,v.fillRect(an.x*ee+1,an.y*ee+1,ee-2,ee-2)})};return requestAnimationFrame(()=>{C(),u.current=requestAnimationFrame(H)}),()=>{u.current&&cancelAnimationFrame(u.current)}},[C]);const O=x.useCallback(E=>{const B=E.touches[0];d.current={x:B.clientX,y:B.clientY}},[]),P=x.useCallback(E=>{if(!d.current||!o.current)return;const B=E.changedTouches[0],H=B.clientX-d.current.x,Q=B.clientY-d.current.y;d.current=null;const v=30;if(Math.abs(H)<v&&Math.abs(Q)<v||p.current.gameOver)return;const N=Math.abs(H)>Math.abs(Q)?H>0?"right":"left":Q>0?"down":"up",G=fx[N],W=o.current.dir;(G.x!==-W.x||G.y!==-W.y)&&(o.current.nextDir=G)},[]);return x.useEffect(()=>{const E=B=>{const{gameOver:H}=p.current;if(B.key==="Escape"||B.key==="q"&&H){B.preventDefault(),a();return}if(H&&(B.key==="r"||B.key==="Enter")){B.preventDefault(),C();return}const Q=dx[B.key];if(Q&&o.current){B.preventDefault();const v=o.current.dir;(Q.x!==-v.x||Q.y!==-v.y)&&(o.current.nextDir=Q)}};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[a,C]),g.jsxs("div",{style:{flex:1,overflow:"hidden",background:"#0A0A0F",position:"relative"},onTouchStart:O,onTouchEnd:P,children:[g.jsx("canvas",{ref:r,style:{display:"block",width:"100%",height:"100%"}}),g.jsxs("div",{style:{position:"absolute",top:8,left:12,fontFamily:"var(--font)",fontSize:12,color:"#4ADE80"},children:["SCORE: ",m]}),g.jsx("div",{style:{position:"absolute",top:8,right:12,fontFamily:"var(--font)",fontSize:11,color:"rgba(74,222,128,0.5)"},children:b&&!y?"ESC to exit · ←↑↓→/hjkl/wasd":""}),y&&g.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(10, 10, 15, 0.8)"},children:[g.jsx("div",{style:{fontFamily:"var(--font)",fontSize:20,color:"#F87171",marginBottom:8},children:"GAME OVER"}),g.jsxs("div",{style:{fontFamily:"var(--font)",fontSize:14,color:"#4ADE80",marginBottom:16},children:["Score: ",m]}),g.jsx("div",{style:{fontFamily:"var(--font)",fontSize:12,color:"var(--text-muted)"},children:"r / Enter: restart · q / ESC: exit"})]})]})},Bn=4,dt=8,Su=6,Um={2:{bg:"#2a2a3e",fg:"#a0a0b0"},4:{bg:"#3a3a50",fg:"#b0b0c0"},8:{bg:"#7a4a1a",fg:"#ffd0a0"},16:{bg:"#a05a10",fg:"#ffe0b0"},32:{bg:"#8a2020",fg:"#ffb0a0"},64:{bg:"#c03030",fg:"#ffe0d0"},128:{bg:"#a0a020",fg:"#ffff90"},256:{bg:"#b08c10",fg:"#ffe070"},512:{bg:"#c0c020",fg:"#ffffb0"},1024:{bg:"#20a0a0",fg:"#b0ffff"},2048:{bg:"#20a040",fg:"#b0ffb0"}};function mx(a){return Um[a]?Um[a]:{bg:"#7030a0",fg:"#e0b0ff"}}function Hu(){return Array.from({length:Bn},()=>Array(Bn).fill(0))}function kr(a){const r=[];for(let c=0;c<Bn;c++)for(let d=0;d<Bn;d++)a[c][d]===0&&r.push([c,d]);if(r.length===0)return!1;const[o,u]=r[Math.floor(Math.random()*r.length)];return a[o][u]=Math.random()<.9?2:4,!0}function hx(a){const r=a.filter(d=>d!==0),o=[];let u=0,c=0;for(;c<r.length;)if(c+1<r.length&&r[c]===r[c+1]){const d=r[c]*2;o.push(d),u+=d,c+=2}else o.push(r[c]),c++;for(;o.length<Bn;)o.push(0);return{result:o,score:u}}function zm(a,r){let o=a;for(let u=0;u<r;u++){const c=Hu();for(let d=0;d<Bn;d++)for(let p=0;p<Bn;p++)c[p][Bn-1-d]=o[d][p];o=c}return o}function Im(a,r){const u={left:0,up:3,right:2,down:1}[r];let c=zm(a,u),d=0,p=!1;for(let m=0;m<Bn;m++){const{result:_,score:y}=hx(c[m]);_.some((S,b)=>S!==c[m][b])&&(p=!0),c[m]=_,d+=y}return c=zm(c,(4-u)%4),{board:c,score:d,moved:p}}function Pm(a){for(let r=0;r<Bn;r++)for(let o=0;o<Bn;o++)if(a[r][o]===0||o+1<Bn&&a[r][o]===a[r][o+1]||r+1<Bn&&a[r][o]===a[r+1][o])return!0;return!1}function Fm(a){for(let r=0;r<Bn;r++)for(let o=0;o<Bn;o++)if(a[r][o]>=2048)return!0;return!1}const gx={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right",k:"up",j:"down",h:"left",l:"right"};function Tu(a,r,o,u,c,d){a.beginPath(),a.moveTo(r+d,o),a.lineTo(r+u-d,o),a.quadraticCurveTo(r+u,o,r+u,o+d),a.lineTo(r+u,o+c-d),a.quadraticCurveTo(r+u,o+c,r+u-d,o+c),a.lineTo(r+d,o+c),a.quadraticCurveTo(r,o+c,r,o+c-d),a.lineTo(r,o+d),a.quadraticCurveTo(r,o,r+d,o),a.closePath()}const Xa=48,_x=({onExit:a})=>{const r=x.useRef(null),o=x.useRef(Hu()),u=x.useRef(0),[c,d]=x.useState(0),[p,m]=x.useState(!1),[_,y]=x.useState(!1),[S,b]=x.useState(!1),D=x.useRef(null),C=x.useRef({gameOver:!1,won:!1,wonDismissed:!1});x.useEffect(()=>{C.current={gameOver:p,won:_,wonDismissed:S}});const O=x.useCallback(()=>{const Q=r.current;if(!Q)return;const v=Q.getContext("2d");if(!v)return;const N=o.current,G=Q.width,W=Q.height,an=G,$=W-Xa,Cn=16,pn=Math.min(an-Cn*2,$-Cn*2),_n=Math.max(120,pn),Sn=dt*(Bn+1),Y=(_n-Sn)/Bn,L=Y*Bn+Sn,T=L,M=(G-L)/2,w=Xa+($-T)/2,k=getComputedStyle(Q).getPropertyValue("--bg").trim()||"#1a1a2e";v.fillStyle=k,v.fillRect(0,0,G,W),v.fillStyle="#b0b0c0",v.font="bold 14px monospace",v.textAlign="right",v.textBaseline="middle",v.fillText(`SCORE: ${u.current}`,G-16,Xa/2);const{gameOver:V,won:X,wonDismissed:nn}=C.current;!V&&!(X&&!nn)&&(v.fillStyle="rgba(160,160,180,0.4)",v.font="11px monospace",v.textAlign="left",v.fillText("ESC/q: exit · ←↑↓→/hjkl",16,Xa/2)),v.strokeStyle="rgba(255,255,255,0.06)",v.lineWidth=1,v.beginPath(),v.moveTo(16,Xa-.5),v.lineTo(G-16,Xa-.5),v.stroke(),v.fillStyle="rgba(255,255,255,0.03)",Tu(v,M,w,L,T,Su+2),v.fill();for(let Z=0;Z<Bn;Z++)for(let en=0;en<Bn;en++){const cn=M+dt+en*(Y+dt),mn=w+dt+Z*(Y+dt);v.fillStyle="rgba(255,255,255,0.04)",Tu(v,cn,mn,Y,Y,Su),v.fill()}for(let Z=0;Z<Bn;Z++)for(let en=0;en<Bn;en++){const cn=N[Z][en];if(cn===0)continue;const mn=M+dt+en*(Y+dt),Zn=w+dt+Z*(Y+dt),{bg:Ae,fg:mt}=mx(cn);v.fillStyle=Ae,Tu(v,mn,Zn,Y,Y,Su),v.fill();const il=cn>=1024?Y*.28:cn>=128?Y*.32:Y*.38;v.fillStyle=mt,v.font=`bold ${il}px monospace`,v.textAlign="center",v.textBaseline="middle",v.fillText(String(cn),mn+Y/2,Zn+Y/2)}},[]),P=x.useCallback(()=>{const Q=Hu();kr(Q),kr(Q),o.current=Q,u.current=0,d(0),m(!1),y(!1),b(!1),requestAnimationFrame(()=>O())},[O]);x.useEffect(()=>{const Q=r.current;if(!Q)return;const v=()=>{const G=Q.parentElement;if(!G)return;const W=G.clientWidth,an=G.clientHeight;Q.width=W,Q.height=an,O()};requestAnimationFrame(()=>{P(),v()});const N=new ResizeObserver(v);return N.observe(Q.parentElement),()=>N.disconnect()},[P,O]);const E=x.useCallback(Q=>{const v=Q.touches[0];D.current={x:v.clientX,y:v.clientY}},[]),B=x.useCallback(Q=>{if(!D.current)return;const v=Q.changedTouches[0],N=v.clientX-D.current.x,G=v.clientY-D.current.y;D.current=null;const W=30;if(Math.abs(N)<W&&Math.abs(G)<W)return;const{gameOver:an,won:$,wonDismissed:Cn}=C.current;if(an||$&&!Cn)return;const pn=Math.abs(N)>Math.abs(G)?N>0?"right":"left":G>0?"down":"up",_n=Im(o.current,pn);_n.moved&&(o.current=_n.board,u.current+=_n.score,d(u.current),kr(o.current),O(),!$&&Fm(o.current)&&y(!0),Pm(o.current)||m(!0))},[O]);x.useEffect(()=>{const Q=v=>{const{gameOver:N,won:G,wonDismissed:W}=C.current;if(v.key==="Escape"||v.key==="q"){v.preventDefault(),a();return}if(G&&!W&&!N&&(v.key==="Enter"||v.key===" ")){v.preventDefault(),b(!0);return}if(N&&(v.key==="r"||v.key==="Enter")){v.preventDefault(),P();return}if(N||G&&!W)return;const an=gx[v.key];if(!an)return;v.preventDefault();const $=Im(o.current,an);$.moved&&(o.current=$.board,u.current+=$.score,d(u.current),kr(o.current),O(),!G&&Fm(o.current)&&y(!0),Pm(o.current)||m(!0))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[a,P,O]);const H=_&&!S&&!p;return g.jsxs("div",{style:{flex:1,overflow:"hidden",position:"relative",width:"100%",height:"100%"},onTouchStart:E,onTouchEnd:B,children:[g.jsx("canvas",{ref:r,style:{display:"block",width:"100%",height:"100%"}}),H&&g.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(26, 26, 46, 0.85)"},children:[g.jsx("div",{style:{fontFamily:"monospace",fontSize:24,color:"#20a040",marginBottom:8},children:"YOU WIN!"}),g.jsxs("div",{style:{fontFamily:"monospace",fontSize:14,color:"#b0ffb0",marginBottom:4},children:["Score: ",c]}),g.jsx("div",{style:{fontFamily:"monospace",fontSize:12,color:"rgba(160,160,180,0.7)",marginTop:12},children:"Enter / Space: keep playing"})]}),p&&g.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(26, 26, 46, 0.85)"},children:[g.jsx("div",{style:{fontFamily:"monospace",fontSize:22,color:"#F87171",marginBottom:8},children:"GAME OVER"}),g.jsxs("div",{style:{fontFamily:"monospace",fontSize:15,color:"#b0b0c0",marginBottom:16},children:["Score: ",c]}),g.jsx("div",{style:{fontFamily:"monospace",fontSize:12,color:"rgba(160,160,180,0.7)"},children:"r / Enter: restart · q / ESC: exit"})]})]})},Ge=10,ft=20,oa=1,Bu={I:{blocks:[[0,0],[1,0],[2,0],[3,0]],color:"#06B6D4"},O:{blocks:[[0,0],[1,0],[0,1],[1,1]],color:"#FACC15"},T:{blocks:[[0,0],[1,0],[2,0],[1,1]],color:"#A855F7"},S:{blocks:[[1,0],[2,0],[0,1],[1,1]],color:"#22C55E"},Z:{blocks:[[0,0],[1,0],[1,1],[2,1]],color:"#EF4444"},L:{blocks:[[0,0],[1,0],[2,0],[0,1]],color:"#F97316"},J:{blocks:[[0,0],[1,0],[2,0],[2,1]],color:"#3B82F6"}},qm=Object.keys(Bu),bx=[0,100,300,500,800];function xu(){const a=qm[Math.floor(Math.random()*qm.length)];return{name:a,blocks:Bu[a].blocks.map(([r,o])=>[r,o]),color:Bu[a].color,x:Math.floor(Ge/2)-2,y:0}}function yx(a){const r=Math.max(...a.map(([d])=>d)),o=Math.max(...a.map(([,d])=>d)),u=r/2,c=o/2;return a.map(([d,p])=>{const m=Math.round(u+(p-c)),_=Math.round(c-(d-u));return[m,_]})}function vx(a){const r=Math.min(...a.map(([u])=>u)),o=Math.min(...a.map(([,u])=>u));return a.map(([u,c])=>[u-r,c-o])}function Br(a,r,o,u){for(const[c,d]of r){const p=o+c,m=u+d;if(p<0||p>=Ge||m>=ft||m>=0&&a[m][p])return!0}return!1}function Sx(){return Array.from({length:ft},()=>Array(Ge).fill(null))}function Tx(a,r){const o=a.map(u=>[...u]);for(const[u,c]of r.blocks){const d=r.x+u,p=r.y+c;p>=0&&p<ft&&d>=0&&d<Ge&&(o[p][d]=r.color)}return o}function xx(a){const r=a.filter(u=>u.some(c=>!c)),o=ft-r.length;for(;r.length<ft;)r.unshift(Array(Ge).fill(null));return{board:r,cleared:o}}function Gm(a,r){let o=r.y;for(;!Br(a,r.blocks,r.x,o+1);)o++;return o}function Ax(a){return Math.max(100,800-(a-1)*60)}const Cx=({onExit:a})=>{const r=x.useRef(null),o=x.useRef(null),u=x.useRef(null),c=x.useRef(0),[d,p]=x.useState(0),[m,_]=x.useState(1),[y,S]=x.useState(0),[b,D]=x.useState(!1),C=x.useCallback(()=>{const v=xu(),N=xu();o.current={board:Sx(),piece:v,next:N,score:0,level:1,lines:0,gameOver:!1},p(0),_(1),S(0),D(!1),c.current=0},[]),O=x.useCallback(()=>{const v=o.current;if(!v)return;const N=v.next;if(N.x=Math.floor(Ge/2)-2,N.y=0,Br(v.board,N.blocks,N.x,N.y)){v.gameOver=!0,D(!0);return}v.piece=N,v.next=xu()},[]),P=x.useCallback(()=>{const v=o.current;if(!v)return;v.board=Tx(v.board,v.piece);const{board:N,cleared:G}=xx(v.board);if(v.board=N,G>0){const W=bx[G]*v.level;v.score+=W,v.lines+=G,v.level=Math.floor(v.lines/10)+1,p(v.score),S(v.lines),_(v.level)}O()},[O]),E=x.useCallback((v,N)=>{const G=o.current;return!G||G.gameOver||Br(G.board,G.piece.blocks,G.piece.x+v,G.piece.y+N)?!1:(G.piece.x+=v,G.piece.y+=N,!0)},[]),B=x.useCallback(()=>{const v=o.current;if(!v||v.gameOver||v.piece.name==="O")return;const N=vx(yx(v.piece.blocks)),G=[0,-1,1,-2,2];for(const W of G)if(!Br(v.board,N,v.piece.x+W,v.piece.y)){v.piece.blocks=N,v.piece.x+=W;return}},[]),H=x.useCallback(()=>{const v=o.current;if(!v||v.gameOver)return;const N=Gm(v.board,v.piece);v.piece.y=N,P(),c.current=performance.now()},[P]),Q=x.useCallback((v,N)=>{const G=o.current;if(!G)return;const W=N.width,an=N.height;v.fillStyle="#1a1a2e",v.fillRect(0,0,W,an);const $=8,Cn=120,pn=Math.min(Math.floor((an-$*2)/ft),Math.floor((W-Cn-$*2)/Ge),28),_n=pn-oa*2,Sn=Ge*pn,Y=ft*pn,L=Sn+Cn,T=Math.floor((W-L)/2),M=Math.floor((an-Y)/2);v.fillStyle="#0f0f23",v.fillRect(T,M,Sn,Y),v.strokeStyle="rgba(255,255,255,0.04)",v.lineWidth=.5;for(let Z=1;Z<Ge;Z++)v.beginPath(),v.moveTo(T+Z*pn,M),v.lineTo(T+Z*pn,M+Y),v.stroke();for(let Z=1;Z<ft;Z++)v.beginPath(),v.moveTo(T,M+Z*pn),v.lineTo(T+Sn,M+Z*pn),v.stroke();v.strokeStyle="rgba(255,255,255,0.2)",v.lineWidth=1,v.strokeRect(T-.5,M-.5,Sn+1,Y+1);for(let Z=0;Z<ft;Z++)for(let en=0;en<Ge;en++)G.board[Z][en]&&Au(v,T+en*pn+oa,M+Z*pn+oa,_n,G.board[Z][en]);if(!G.gameOver){const Z=Gm(G.board,G.piece);for(const[en,cn]of G.piece.blocks){const mn=G.piece.x+en,Zn=Z+cn;Zn>=0&&(v.strokeStyle=G.piece.color,v.globalAlpha=.25,v.lineWidth=1.5,v.strokeRect(T+mn*pn+oa+1,M+Zn*pn+oa+1,_n-2,_n-2),v.globalAlpha=1)}}if(!G.gameOver)for(const[Z,en]of G.piece.blocks){const cn=G.piece.x+Z,mn=G.piece.y+en;mn>=0&&Au(v,T+cn*pn+oa,M+mn*pn+oa,_n,G.piece.color)}const w=T+Sn+20;v.fillStyle="rgba(255,255,255,0.7)",v.font="11px monospace",v.fillText("NEXT",w,M+14);const k=G.next.blocks,V=G.next.color,X=16;for(const[Z,en]of k)Au(v,w+Z*X,M+24+en*X,X-2,V);const nn=M+110;v.fillStyle="rgba(255,255,255,0.5)",v.font="10px monospace",v.fillText("SCORE",w,nn),v.fillStyle="#4ADE80",v.font="16px monospace",v.fillText(String(G.score),w,nn+18),v.fillStyle="rgba(255,255,255,0.5)",v.font="10px monospace",v.fillText("LEVEL",w,nn+46),v.fillStyle="#FACC15",v.font="16px monospace",v.fillText(String(G.level),w,nn+64),v.fillStyle="rgba(255,255,255,0.5)",v.font="10px monospace",v.fillText("LINES",w,nn+92),v.fillStyle="#06B6D4",v.font="16px monospace",v.fillText(String(G.lines),w,nn+110),v.fillStyle="rgba(255,255,255,0.25)",v.font="9px monospace",v.fillText("←→/h l  move",w,nn+155),v.fillText("↑/k/w   rotate",w,nn+168),v.fillText("↓/j/s   soft drop",w,nn+181),v.fillText("SPACE   hard drop",w,nn+194),G.gameOver&&(v.fillStyle="rgba(10, 10, 20, 0.8)",v.fillRect(0,0,W,an),v.fillStyle="#EF4444",v.font="bold 24px monospace",v.textAlign="center",v.fillText("GAME OVER",W/2,an/2-30),v.fillStyle="#4ADE80",v.font="16px monospace",v.fillText(`Score: ${G.score}`,W/2,an/2+4),v.fillStyle="rgba(255,255,255,0.5)",v.font="12px monospace",v.fillText("r / Enter: restart  ·  q / ESC: exit",W/2,an/2+36),v.textAlign="start")},[]);return x.useEffect(()=>{const v=r.current;if(!v)return;const N=v.getContext("2d");if(!N)return;requestAnimationFrame(()=>C());const G=W=>{u.current=requestAnimationFrame(G);const an=o.current;if(!an)return;const $=v.parentElement;if((v.width!==$.clientWidth||v.height!==$.clientHeight)&&(v.width=$.clientWidth,v.height=$.clientHeight),!an.gameOver){const Cn=Ax(an.level);W-c.current>=Cn&&(c.current=W,E(0,1)||P())}Q(N,v)};return u.current=requestAnimationFrame(G),()=>{u.current&&cancelAnimationFrame(u.current)}},[C,E,P,Q]),x.useEffect(()=>{const v=N=>{const G=o.current;if(G){if(N.key==="Escape"){N.preventDefault(),a();return}if(G.gameOver){if(N.key==="q"){N.preventDefault(),N.stopPropagation(),a();return}if(N.key==="r"||N.key==="Enter"){N.preventDefault(),N.stopPropagation(),C();return}return}switch(N.key){case"ArrowLeft":case"h":case"a":N.preventDefault(),N.stopPropagation(),E(-1,0);break;case"ArrowRight":case"l":case"d":N.preventDefault(),N.stopPropagation(),E(1,0);break;case"ArrowDown":case"j":case"s":N.preventDefault(),N.stopPropagation(),E(0,1)||P(),c.current=performance.now();break;case"ArrowUp":case"k":case"w":N.preventDefault(),N.stopPropagation(),B();break;case" ":N.preventDefault(),N.stopPropagation(),H();break}}};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[a,C,E,P,B,H]),g.jsx("div",{style:{width:"100%",height:"100%",overflow:"hidden",background:"#1a1a2e",position:"relative"},children:g.jsx("canvas",{ref:r,style:{display:"block",width:"100%",height:"100%"}})})};function Au(a,r,o,u,c){a.fillStyle=c,a.fillRect(r,o,u,u),a.fillStyle="rgba(255,255,255,0.15)",a.fillRect(r,o,u,2),a.fillRect(r,o,2,u),a.fillStyle="rgba(0,0,0,0.25)",a.fillRect(r,o+u-2,u,2),a.fillRect(r+u-2,o,2,u)}const ii=14,Ex=80,Rx=5,Mx=.25,Ox=.008,Ym=["#4ADE80","#60A5FA","#22D3EE","#A78BFA","#FACC15","#F87171"],wx=[0,1,0,-1],Dx=[-1,0,1,0],jx={"0,0":"│","2,2":"│","1,1":"─","3,3":"─","0,1":"┌","3,2":"┌","0,3":"┐","1,2":"┐","2,1":"└","3,0":"└","2,3":"┘","1,0":"┘"};function kx(a,r){return jx[`${a},${r}`]||"│"}function Nx(a){return(a+2)%4}function Nr(a,r){const o=Math.floor(Math.random()*4);let u,c,d;switch(o){case 0:u=Math.floor(Math.random()*a),c=0,d=2;break;case 1:u=a-1,c=Math.floor(Math.random()*r),d=3;break;case 2:u=Math.floor(Math.random()*a),c=r-1,d=0;break;case 3:u=0,c=Math.floor(Math.random()*r),d=1;break}return{x:u,y:c,dir:d,color:Ym[Math.floor(Math.random()*Ym.length)],alive:!0,steps:0}}const Lx=({onExit:a})=>{const r=x.useRef(null),o=x.useRef(null),u=x.useRef(null),c=x.useRef(!0);return x.useEffect(()=>{const d=r.current;if(!d)return;const p=d.getContext("2d");if(!p)return;let m,_,y=[],S=0;const b=()=>{const B=d.parentElement,H=B.clientWidth,Q=B.clientHeight;H===0||Q===0||(d.width=H,d.height=Q,m=Math.floor(d.width/ii),_=Math.floor(d.height/ii),p.fillStyle="rgba(10, 10, 15, 1)",p.fillRect(0,0,d.width,d.height),y=[Nr(m,_),Nr(m,_)])};b();const D=new ResizeObserver(b);D.observe(d.parentElement);const C=(B,H,Q,v)=>{p.fillStyle=v,p.font=`${ii}px monospace`,p.textBaseline="top",p.fillText(Q,B*ii,H*ii)},O=()=>{for(let B=y.length-1;B>=0;B--){const H=y[B];if(!H.alive)continue;const Q=Nx(H.dir);let v=H.dir;if(Math.random()<Mx){const G=Math.random()<.5?-1:1;v=(H.dir+G+4)%4}const N=kx(Q,v);C(H.x,H.y,N,H.color),H.dir=v,H.x+=wx[v],H.y+=Dx[v],H.steps++,(H.x<0||H.x>=m||H.y<0||H.y>=_)&&(H.alive=!1,y[B]=Nr(m,_))}y.length<Rx&&Math.random()<Ox&&y.push(Nr(m,_))},P=B=>{B-S>=Ex&&(S=B,O()),c.current&&(o.current=requestAnimationFrame(P))};u.current=setTimeout(()=>{c.current&&(o.current=requestAnimationFrame(P))},300);const E=B=>{(B.key==="Escape"||B.key==="q"||B.key==="c"&&B.ctrlKey)&&(B.preventDefault(),a())};return window.addEventListener("keydown",E),()=>{c.current=!1,u.current&&clearTimeout(u.current),o.current&&cancelAnimationFrame(o.current),D.disconnect(),window.removeEventListener("keydown",E)}},[a]),g.jsxs("div",{style:{flex:1,overflow:"hidden",background:"#0A0A0F",position:"relative"},children:[g.jsx("canvas",{ref:r,style:{display:"block",width:"100%",height:"100%"}}),g.jsx("div",{style:{position:"absolute",bottom:8,right:12,fontFamily:"var(--font)",fontSize:11,color:"rgba(255,255,255,0.3)"},children:"q / ESC to exit"})]})},Hx=["                          (@@)  (  )  (@@)  (  )   (@)  (@@)@@)   .","                     (   )","                 (@@@@)","               (    )","             (@@@)","           ====        ________                ___________","       _D _|  |_______/        \\__I_I_____===__|_________|","        |(_)---  |   H\\________/ |   |        =|___ ___|","        /     |  |   H  |  |     |   |         ||_| |_||","       |      |  |   H  |__--------------------| [___] |","       | ________|___H__/__|_____/[][]~\\_______|       |","       |/ |   |-----------I_____I [][] []  D   |=======|","     __/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__","      |/-=|___|=    ||    ||    ||    |_____/~\\___/","       \\_/      \\O=====O=====O=====O_/      \\_/"],Jm=[["                          (@@)  (  )  (@@)  (  )   (@)  (@@)@@)   .","                     (   )","                 (@@@@)","               (    )","             (@@@)"],["                          (  )  (@@)  (  )  (@@)   (@)  (  )@@)   .","                     (@@)","                 (    )","               (@@@@)","             (   )"]],Km=["           ====        ________                ___________","       _D _|  |_______/        \\__I_I_____===__|_________|","        |(_)---  |   H\\________/ |   |        =|___ ___|","        /     |  |   H  |  |     |   |         ||_| |_||","       |      |  |   H  |__--------------------| [___] |","       | ________|___H__/__|_____/[][]~\\_______|       |","       |/ |   |-----------I_____I [][] []  D   |=======|","     __/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__","      |/-=|___|=    ||    ||    ||    |_____/~\\___/","       \\_/      \\O=====O=====O=====O_/      \\_/"],Qm=["       \\_/      \\O=====O=====O=====O_/      \\_/","       \\_/      /O=====O=====O=====O\\_      \\_/"],Bx=({onExit:a})=>{const r=x.useRef(null),o=x.useRef(null);return x.useEffect(()=>{const u=r.current;if(!u)return;const c=u.getContext("2d");if(!c)return;const d=14,p=d+2,m=d*.6,_=()=>{const N=u.parentElement,G=N.clientWidth,W=N.clientHeight;G===0||W===0||(u.width=G,u.height=W)};_();const y=new ResizeObserver(_);y.observe(u.parentElement);const b=Math.max(...Hx.map(N=>N.length))*m;let D=u.width+10,C=u.width;const O=3500;let P=(u.width+b+20)/(O/16.67),E=0,B=!1;const H=()=>getComputedStyle(document.documentElement).getPropertyValue("--green").trim()||"#4ade80",Q=()=>{if(B)return;if(u.width!==C){const pn=1-(D+b)/(C+b+20);C=u.width,P=(u.width+b+20)/(O/16.67),D=(1-pn)*(u.width+b+20)-b}if(E++,D-=P,D+b<-10){B=!0,a();return}c.clearRect(0,0,u.width,u.height);const N=H();c.font=`${d}px monospace`;const G=Jm[Math.floor(E/8)%Jm.length],W=Qm[Math.floor(E/6)%Qm.length],an=[...G,...Km.slice(0,Km.length-1),W],$=an.length*p,Cn=Math.max(0,(u.height-$)/2);for(let pn=0;pn<an.length;pn++){const _n=an[pn],Sn=Cn+pn*p+d;pn<G.length?(c.fillStyle=N,c.globalAlpha=.6):(c.fillStyle=N,c.globalAlpha=1),c.fillText(_n,D,Sn)}c.globalAlpha=1,o.current=requestAnimationFrame(Q)};o.current=requestAnimationFrame(Q);const v=N=>{(N.key==="Escape"||N.key==="q"||N.key==="c"&&N.ctrlKey)&&(N.preventDefault(),B||(B=!0,a()))};return window.addEventListener("keydown",v),()=>{B=!0,o.current&&cancelAnimationFrame(o.current),y.disconnect(),window.removeEventListener("keydown",v)}},[a]),g.jsx("div",{style:{flex:1,overflow:"hidden",background:"#0A0A0F",position:"relative",width:"100%",height:"100%"},children:g.jsx("canvas",{ref:r,style:{display:"block",width:"100%",height:"100%"}})})},Ux=({windowId:a})=>{const r=x.useRef(null),o=x.useRef(null),u=R_(),c=ll(),d=pi(),p=x.useRef(!1),m=nx({terminalInputRef:r}),[_,y]=x.useState(null),S=x.useCallback(()=>{m.close(),y(null),d.minimizeWindow(a)},[m,d,a]),b=x.useCallback(L=>{const T="/posts/";if(L.startsWith(T)){const M=L.slice(T.length).replace(/\.md$/,"");d.openWindow("post",{title:M.split("/").pop(),icon:"📄",meta:{postPath:M},size:{w:760,h:600}}),u(`/posts/${M}`,{replace:!0})}},[u,d]),D=x.useCallback((L,T)=>{d.openWindow("image",{title:`${T} — Preview`,icon:"🖼",meta:{src:L,name:T},size:{w:640,h:480}})},[d]),C=x.useCallback(L=>{u(L,{replace:!0})},[u]),O=x.useCallback(L=>{m.active&&m.close(),y(L)},[m]),P=x.useCallback(()=>{y(null),setTimeout(()=>r.current?.focus(),50)},[]),E=x.useCallback((L,T,M)=>{_&&y(null),m.open(L,T,M)},[_,m]),{outputLines:B,cwd:H,handleKeyDown:Q,reset:v}=$T({onClose:S,onOpenPost:b,onSyncUrl:C,onViOpen:E,onPreviewImage:D,onAppLaunch:O}),N=x.useRef(v);x.useEffect(()=>{N.current=v});const G=x.useRef(c.pathname);x.useEffect(()=>{p.current||(p.current=!0,N.current(G.current))},[]);const W=d.getWindow(a),an=W&&W.state!=="minimized";x.useEffect(()=>{if(d.activeWindowId===a&&an&&!m.active&&!_){const L=requestAnimationFrame(()=>r.current?.focus());return()=>cancelAnimationFrame(L)}},[d.activeWindowId,a,an,m.active,_]),x.useEffect(()=>{o.current&&!m.active&&!_&&(o.current.scrollTop=o.current.scrollHeight)},[B,m.active,_]);const Cn=_?{cmatrix:"cmatrix.sh",snake:"snake.sh",2048:"2048.sh",blocks:"blocks.sh",pipes:"pipes.sh",sl:"sl"}[_]||_:m.active?`vi — ${m.mode.fileName}${m.dirty?" [+]":""}`:"sim.junghun — terminal",pn=_?g.jsx("span",{className:"app-badge",children:_}):m.modeLabel?g.jsx("span",{className:`vi-mode-badge ${m.insert?"insert":""}`,children:m.modeLabel}):g.jsx("span",{className:"close-hint",children:"esc"}),_n={cmatrix:ux,snake:px,2048:_x,blocks:Cx,pipes:Lx,sl:Bx};let Sn;const Y=_?_n[_]:null;return Y?Sn=g.jsx(Y,{onExit:P}):m.active?Sn=g.jsx(ox,{vi:m}):Sn=g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"terminal-body",ref:o,onClick:()=>r.current?.focus(),children:[B.map((L,T)=>g.jsx("div",{className:"tl",dangerouslySetInnerHTML:{__html:L}},T)),g.jsxs("div",{className:"terminal-input-line",children:[g.jsx("span",{className:"prompt-path",children:H}),g.jsx("span",{className:"prompt-symbol",children:"$"}),g.jsx("input",{ref:r,type:"text",placeholder:"Type a command...",onKeyDown:Q,autoFocus:!0,spellCheck:!1,autoComplete:"off",autoCapitalize:"off"})]})]}),g.jsxs("div",{className:"terminal-footer",children:[g.jsx("span",{children:"Tab: autocomplete"}),g.jsx("span",{children:"↑↓: history"}),g.jsx("span",{children:"Ctrl+A/E: start/end"}),g.jsx("span",{children:"Ctrl+W: word"}),g.jsx("span",{children:"Ctrl+U: line"})]})]}),g.jsx(Qu,{windowId:a,title:Cn,titleExtra:pn,onClose:S,className:"terminal-window",children:Sn})},zx=({windowId:a})=>{const r=pi(),o=r.getWindow(a),[u,c]=x.useState(1),[d,p]=x.useState({x:0,y:0}),m=x.useRef(d);x.useEffect(()=>{m.current=d});const _=x.useRef(null),y=x.useRef(null),S=o?.meta?.src,b=o?.meta?.name,D=x.useCallback(()=>{r.closeWindow(a)},[r,a]);x.useEffect(()=>{const H=Q=>{r.activeWindowId===a&&((Q.key==="="||Q.key==="+")&&c(v=>Math.min(3,v+.25)),Q.key==="-"&&c(v=>Math.max(.25,v-.25)),Q.key==="0"&&(c(1),p({x:0,y:0})))};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[r.activeWindowId,a]);const C=x.useRef(null);x.useEffect(()=>{const H=C.current;if(!H)return;const Q=v=>{v.preventDefault(),c(N=>{const G=N+(v.deltaY<0?.15:-.15);return Math.min(3,Math.max(.25,G))})};return H.addEventListener("wheel",Q,{passive:!1}),()=>H.removeEventListener("wheel",Q)},[]);const O=x.useCallback(H=>{H.preventDefault();const Q=m.current;_.current={sx:H.clientX,sy:H.clientY,ox:Q.x,oy:Q.y};const v=G=>{const W=_.current;W&&p({x:W.ox+G.clientX-W.sx,y:W.oy+G.clientY-W.sy})},N=()=>{_.current=null,y.current=null,window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",N)};window.addEventListener("mousemove",v),window.addEventListener("mouseup",N),y.current=()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",N)}},[]);x.useEffect(()=>()=>y.current?.(),[]);const P=x.useRef(S);x.useEffect(()=>{P.current!==S&&(P.current=S,requestAnimationFrame(()=>{c(1),p({x:0,y:0})}))},[S]);const E=x.useCallback(()=>{c(1),p({x:0,y:0})},[]);if(!o||!S)return null;const B=Math.round(u*100);return g.jsxs(Qu,{windowId:a,title:`${b} — Preview`,onClose:D,resizable:!1,className:"preview-window-shell",children:[g.jsxs("div",{className:"preview-toolbar",children:[g.jsx("button",{onClick:()=>c(H=>Math.max(.25,H-.25)),children:"-"}),g.jsxs("span",{className:"preview-zoom-label",children:[B,"%"]}),g.jsx("button",{onClick:()=>c(H=>Math.min(3,H+.25)),children:"+"}),g.jsx("button",{onClick:E,className:"preview-fit",children:"Fit"})]}),g.jsx("div",{className:"preview-body",ref:C,onMouseDown:O,children:g.jsx("img",{src:S,alt:b,className:"preview-image",draggable:!1,style:{transform:`scale(${u}) translate(${d.x/u}px, ${d.y/u}px)`}})}),g.jsxs("div",{className:"preview-statusbar",children:[g.jsx("span",{children:b}),g.jsxs("span",{children:[B,"%"]})]})]})},Ix=1,Px=3,Zm=.2,Fx=({src:a,alt:r,open:o,onClose:u})=>{const[c,d]=x.useState(1),[p,m]=x.useState({x:0,y:0}),[_,y]=x.useState(!1),S=x.useRef({x:0,y:0}),b=x.useRef({x:0,y:0}),D=x.useRef(null),C=x.useCallback(()=>{d(1),m({x:0,y:0})},[]);x.useEffect(()=>{if(!o)return;const N=G=>{G.key==="Escape"&&u()};return window.addEventListener("keydown",N),()=>{window.removeEventListener("keydown",N),C()}},[o,u,C]),x.useEffect(()=>{const N=D.current;if(!o||!N)return;const G=W=>{W.preventDefault(),d(an=>{const $=an+(W.deltaY<0?Zm:-Zm),Cn=Math.min(Px,Math.max(Ix,$));return Cn===1&&m({x:0,y:0}),Cn})};return N.addEventListener("wheel",G,{passive:!1}),()=>N.removeEventListener("wheel",G)},[o]);const O=x.useRef(p);x.useEffect(()=>{O.current=p});const P=x.useCallback(N=>{c<=1||(N.preventDefault(),y(!0),S.current={x:N.clientX,y:N.clientY},b.current={...O.current})},[c]),E=x.useCallback(N=>{_&&m({x:b.current.x+(N.clientX-S.current.x),y:b.current.y+(N.clientY-S.current.y)})},[_]),B=x.useCallback(()=>{y(!1)},[]),H=x.useCallback(N=>{N.target===D.current&&u()},[u]);if(!o)return null;const Q=c>1,v=_?"is-grabbing":Q?"is-zoomed":"";return g.jsxs("div",{ref:D,className:`lightbox-overlay ${v}`,onClick:H,onPointerMove:E,onPointerUp:B,onPointerLeave:B,children:[g.jsx("span",{className:"lightbox-esc",children:"ESC"}),g.jsxs("figure",{className:"lightbox-content",children:[g.jsx("img",{src:a,alt:r||"",className:"lightbox-image",draggable:!1,onPointerDown:P,style:{transform:`scale(${c}) translate(${p.x/c}px, ${p.y/c}px)`}}),r&&g.jsx("figcaption",{className:"lightbox-caption",children:r})]})]})},qx=[x_],Gx=[y_,v_,S_,[T_,{showLineNumbers:!0,keepOuterBlankLine:!0}]],Lr=a=>({children:r,...o})=>g.jsx(a,{id:o.id,className:"post-heading",children:r}),Yx=({windowId:a})=>{const r=pi(),o=r.getWindow(a),[u,c]=x.useState({open:!1,src:"",alt:""}),d=o?.meta?.postPath,p=x.useMemo(()=>d?Kr.findByPath({path:d}):null,[d]),m=x.useCallback(()=>{r.closeWindow(a)},[r,a]),_=x.useCallback(()=>{p&&window.open(`/posts/${p.path}`,"_blank")},[p]),y=x.useCallback((C,O)=>{c({open:!0,src:C,alt:O})},[]),S=x.useCallback(()=>{c(C=>({...C,open:!1}))},[]),b=x.useMemo(()=>p?{h1:Lr("h1"),h2:Lr("h2"),h3:Lr("h3"),h4:Lr("h4"),pre({node:C,children:O}){return g.jsx(Jx,{node:C,children:O})},img({src:C,alt:O}){const P=C.startsWith("http")||C.startsWith("/")?C:`/images/posts/${p.categories.join("/")}/${C}`;return g.jsx("img",{src:P,alt:O,loading:"lazy",style:{cursor:"zoom-in"},onClick:()=>y(P,O)})}}:{},[p,y]);if(!o||!p)return null;const D=g.jsx("button",{className:"post-reader-open-btn",onClick:_,title:"페이지에서 열기",children:"↗"});return g.jsxs(Qu,{windowId:a,title:p.title,titleExtra:D,onClose:m,className:"post-reader-window",children:[g.jsxs("div",{className:"post-reader-content",children:[g.jsxs("header",{className:"post-reader-meta",children:[g.jsx("h1",{children:p.title}),p.tags&&p.tags.length>0&&g.jsx("div",{className:"post-reader-tags",children:p.tags.map((C,O)=>g.jsx("span",{className:`tag${O===0?" primary":""}`,children:C},C))}),g.jsxs("div",{className:"post-reader-info",children:[g.jsx("span",{children:al.formatISO(p.createdDate).slice(0,10)}),g.jsx("span",{children:"·"}),g.jsxs("span",{children:[p.readingTime," min read"]})]})]}),g.jsx("div",{className:"post-reader-body detail-body",children:g.jsx(b_,{remarkPlugins:qx,rehypePlugins:Gx,components:b,children:p.content})})]}),g.jsx(Fx,{src:u.src,alt:u.alt,open:u.open,onClose:S})]})},Jx=({node:a,children:r})=>{const o=a?.children?.[0],u=o?.properties?.className||[],c=/language-(\w+)/.exec(u.join(" ")),d=c?c[1]:"plaintext",[p,m]=x.useState(!1),_=x.useRef(null);x.useEffect(()=>()=>clearTimeout(_.current),[]);const y=()=>{const S=o?.children?.map(b=>b.value||"").join("");if(S)try{navigator.clipboard.writeText(S),m(!0),clearTimeout(_.current),_.current=setTimeout(()=>m(!1),2e3)}catch{}};return g.jsxs("figure",{className:"post-detail__code",children:[g.jsxs("figcaption",{className:"post-detail__code-header",children:[g.jsx("span",{className:"post-detail__code-language",children:d}),g.jsx("button",{className:"post-detail__code-copy",onClick:y,children:p?"copied!":"copy"})]}),g.jsx("pre",{className:"post-detail__code-block hljs",children:r})]})},Kx=()=>{const a=x.useContext(Yr),[r,o]=x.useState(!1),u=x.useCallback(()=>o(!0),[]),c=x.useCallback(()=>o(!1),[]),d=x.useCallback(()=>{if(!a)return;const p=a.findByType("terminal");p&&(p.state==="minimized"?a.restoreWindow(p.id):a.minimizeWindow(p.id))},[a]);return x.useEffect(()=>{const p=m=>{const _=m.target.tagName,y=_==="INPUT"||_==="TEXTAREA"||m.target.isContentEditable;if((m.metaKey||m.ctrlKey)&&m.key==="j"){m.preventDefault(),d();return}if(m.key==="Escape"){if(m.target.classList?.contains("vi-hidden-input"))return;if(r){o(!1);return}if(y)return;if(a&&a.activeWindowId){a.getWindow(a.activeWindowId)?.type==="terminal"?a.minimizeWindow(a.activeWindowId):a.closeWindow(a.activeWindowId);return}return}!y&&m.key==="?"&&!m.metaKey&&!m.ctrlKey&&(m.preventDefault(),o(S=>!S))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[d,r,a]),{shortcutsOpen:r,openShortcuts:u,closeShortcuts:c,toggleTerminal:d}},Qx={terminal:Ux,image:zx,post:Yx},Zx=()=>{const a=pi();return g.jsx(g.Fragment,{children:a.windows.map(r=>{const o=Qx[r.type];return o?g.jsx(o,{windowId:r.id},r.id):null})})},Vx=()=>{const{shortcutsOpen:a,openShortcuts:r,closeShortcuts:o}=Kx();return g.jsxs("div",{id:"wrap",children:[g.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to content"}),g.jsx(F_,{}),g.jsx(G_,{}),g.jsx(Y_,{}),g.jsx(Zx,{}),g.jsx($_,{onOpenShortcuts:r}),g.jsx(eh,{open:a,onClose:o})]})},Wx=()=>g.jsx(W_,{children:g.jsx(Vx,{})});class Xx extends x.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,o){console.error("[ErrorBoundary]",r,o)}componentDidUpdate(r){this.state.hasError&&r.children!==this.props.children&&this.setState({hasError:!1,error:null})}render(){if(!this.state.hasError)return this.props.children;const r=()=>this.setState({hasError:!1,error:null});return g.jsx("div",{className:"not-found",children:g.jsxs("div",{children:[g.jsxs("div",{className:"error-terminal",children:[g.jsxs("div",{className:"error-terminal-bar",children:[g.jsx("span",{className:"dot r"}),g.jsx("span",{className:"dot y"}),g.jsx("span",{className:"dot g"}),g.jsx("span",{className:"title",children:"bash — 500"})]}),g.jsxs("div",{className:"error-terminal-body",children:[g.jsxs("div",{children:[g.jsx("span",{className:"prompt",children:"$"})," curl https://bak-libra26.co.kr",window.location.pathname]}),g.jsxs("div",{children:[g.jsx("span",{className:"err",children:"Error 500:"})," internal server error"]}),g.jsx("div",{children:g.jsx("span",{className:"dim",children:"예상치 못한 오류가 발생했습니다."})}),g.jsx("div",{children:" "}),g.jsxs("div",{children:[g.jsx("span",{className:"prompt",children:"$"})," ",g.jsx("span",{className:"cursor-block"})]})]})]}),g.jsxs("div",{className:"error-actions",children:[g.jsx(si,{to:"/",className:"primary",onClick:r,children:"cd ~/home"}),g.jsx(si,{to:"/posts",className:"secondary",onClick:r,children:"cd ~/posts"})]})]})})}}const $x=({title:a,className:r="",children:o})=>g.jsxs("div",{className:`tf ${r}`,children:[g.jsxs("div",{className:"tf-bar",children:[g.jsx("span",{className:"dot r"}),g.jsx("span",{className:"dot y"}),g.jsx("span",{className:"dot g"}),g.jsx("span",{className:"tf-title",children:a})]}),g.jsx("div",{className:"tf-body",children:o})]}),nA=[{text:'<span class="dim">Reading package lists...</span>',at:8},{text:'<span class="ok">Get:1</span> <span class="pkg">blog-core</span> <span class="dim">(2.0.0)</span>',at:22},{text:'<span class="ok">Get:2</span> <span class="pkg">terminal-vibes</span> <span class="dim">(1.3.7)</span>',at:38},{text:'<span class="dim">Building dependency tree...</span>',at:55},{text:'<span class="dim">Unpacking</span> <span class="pkg">sim.junghun-blog</span> <span class="dim">...</span>',at:72},{text:'<span class="ok">✓</span> <span class="pkg">sim.junghun-blog</span> <span class="dim">installed successfully</span>',at:90}],eA=({onDone:a})=>{const[r,o]=x.useState(0),[u,c]=x.useState(!1),d=x.useRef(null),p=x.useRef(null);x.useEffect(()=>{const S=b=>{p.current||(p.current=b);const D=b-p.current,C=Math.min(1,D/2e3);let O;C<.3?O=C/.3*.45:C<.6?O=.45+(C-.3)/.3*.2:O=.65+(C-.6)/.4*.35;const P=Math.min(100,O*100);o(P),P<100&&(d.current=requestAnimationFrame(S))};return d.current=requestAnimationFrame(S),()=>cancelAnimationFrame(d.current)},[]),x.useEffect(()=>{if(r>=100&&!u){const y=requestAnimationFrame(()=>{c(!0)}),S=setTimeout(()=>a(),300);return()=>{cancelAnimationFrame(y),clearTimeout(S)}}},[r,u,a]);const m=Math.round(r),_=nA.filter(y=>m>=y.at);return g.jsx("div",{className:`loading-overlay${u?" loading-fade-out":""}`,children:g.jsxs($x,{title:"apt-get install blog",className:"loading-terminal",children:[g.jsxs("div",{children:[g.jsx("span",{className:"prompt-dollar",children:"$"})," sudo apt-get install sim.junghun-blog"]}),_.map((y,S)=>g.jsx("div",{className:"step-line",dangerouslySetInnerHTML:{__html:y.text}},S)),g.jsxs("div",{className:"loading-progress-row",children:[g.jsx("div",{className:"loading-progress-bar",children:g.jsx("div",{className:"fill",style:{width:`${m}%`}})}),g.jsxs("span",{className:"loading-progress-pct",children:[m,"%"]})]}),m>=100&&g.jsxs("div",{className:"step-line",children:[g.jsx("span",{className:"ok",children:"Done."})," ",g.jsx("span",{className:"dim",children:"Welcome to sim.junghun-blog"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"prompt-dollar",children:"$"})," ",g.jsx("span",{className:"cursor-block"})]})]})})};var Cu={},Eu={},Ru={},Vm;function tA(){return Vm||(Vm=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=function(){for(var c=arguments.length,d=new Array(c),p=0;p<c;p++)d[p]=arguments[p];if(typeof window<"u"){var m;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(m=window).gtag.apply(m,d)}},o=r;a.default=o})(Ru)),Ru}var Mu={},Wm;function aA(){return Wm||(Wm=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=p;var r=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function o(m){return m.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(_,y,S){return y>0&&y+_.length!==S.length&&_.search(r)>-1&&S.charAt(y-2)!==":"&&(S.charAt(y+_.length)!=="-"||S.charAt(y-1)==="-")&&S.charAt(y-1).search(/[^\s-]/)<0?_.toLowerCase():_.substr(1).search(/[A-Z]|\../)>-1?_:_.charAt(0).toUpperCase()+_.substr(1)})}function u(m){return typeof m=="string"&&m.indexOf("@")!==-1}var c="REDACTED (Potential Email Address)";function d(m){return u(m)?(console.warn("This arg looks like an email address, redacting."),c):m}function p(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,S=m||"";return _&&(S=o(m)),y&&(S=d(S)),S}})(Mu)),Mu}var Xm;function lA(){return Xm||(Xm=1,(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.GA4=void 0;var r=p(tA()),o=p(aA()),u=["eventCategory","eventAction","eventLabel","eventValue","hitType"],c=["title","location"],d=["page","hitType"];function p(Y){return Y&&Y.__esModule?Y:{default:Y}}function m(Y,L){if(Y==null)return{};var T=_(Y,L),M,w;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(Y);for(w=0;w<k.length;w++)M=k[w],!(L.indexOf(M)>=0)&&Object.prototype.propertyIsEnumerable.call(Y,M)&&(T[M]=Y[M])}return T}function _(Y,L){if(Y==null)return{};var T={},M=Object.keys(Y),w,k;for(k=0;k<M.length;k++)w=M[k],!(L.indexOf(w)>=0)&&(T[w]=Y[w]);return T}function y(Y){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},y(Y)}function S(Y){return C(Y)||D(Y)||H(Y)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(Y){if(typeof Symbol<"u"&&Y[Symbol.iterator]!=null||Y["@@iterator"]!=null)return Array.from(Y)}function C(Y){if(Array.isArray(Y))return Q(Y)}function O(Y,L){var T=Object.keys(Y);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(Y);L&&(M=M.filter(function(w){return Object.getOwnPropertyDescriptor(Y,w).enumerable})),T.push.apply(T,M)}return T}function P(Y){for(var L=1;L<arguments.length;L++){var T=arguments[L]!=null?arguments[L]:{};L%2?O(Object(T),!0).forEach(function(M){$(Y,M,T[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Y,Object.getOwnPropertyDescriptors(T)):O(Object(T)).forEach(function(M){Object.defineProperty(Y,M,Object.getOwnPropertyDescriptor(T,M))})}return Y}function E(Y,L){return N(Y)||v(Y,L)||H(Y,L)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(Y,L){if(Y){if(typeof Y=="string")return Q(Y,L);var T=Object.prototype.toString.call(Y).slice(8,-1);if(T==="Object"&&Y.constructor&&(T=Y.constructor.name),T==="Map"||T==="Set")return Array.from(Y);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return Q(Y,L)}}function Q(Y,L){(L==null||L>Y.length)&&(L=Y.length);for(var T=0,M=new Array(L);T<L;T++)M[T]=Y[T];return M}function v(Y,L){var T=Y==null?null:typeof Symbol<"u"&&Y[Symbol.iterator]||Y["@@iterator"];if(T!=null){var M,w,k,V,X=[],nn=!0,Z=!1;try{if(k=(T=T.call(Y)).next,L!==0)for(;!(nn=(M=k.call(T)).done)&&(X.push(M.value),X.length!==L);nn=!0);}catch(en){Z=!0,w=en}finally{try{if(!nn&&T.return!=null&&(V=T.return(),Object(V)!==V))return}finally{if(Z)throw w}}return X}}function N(Y){if(Array.isArray(Y))return Y}function G(Y,L){if(!(Y instanceof L))throw new TypeError("Cannot call a class as a function")}function W(Y,L){for(var T=0;T<L.length;T++){var M=L[T];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(Y,Cn(M.key),M)}}function an(Y,L,T){return L&&W(Y.prototype,L),Object.defineProperty(Y,"prototype",{writable:!1}),Y}function $(Y,L,T){return L=Cn(L),L in Y?Object.defineProperty(Y,L,{value:T,enumerable:!0,configurable:!0,writable:!0}):Y[L]=T,Y}function Cn(Y){var L=pn(Y,"string");return y(L)==="symbol"?L:String(L)}function pn(Y,L){if(y(Y)!=="object"||Y===null)return Y;var T=Y[Symbol.toPrimitive];if(T!==void 0){var M=T.call(Y,L);if(y(M)!=="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return(L==="string"?String:Number)(Y)}var _n=(function(){function Y(){var L=this;G(this,Y),$(this,"reset",function(){L.isInitialized=!1,L._testMode=!1,L._currentMeasurementId,L._hasLoadedGA=!1,L._isQueuing=!1,L._queueGtag=[]}),$(this,"_gtag",function(){for(var T=arguments.length,M=new Array(T),w=0;w<T;w++)M[w]=arguments[w];L._testMode||L._isQueuing?L._queueGtag.push(M):r.default.apply(void 0,M)}),$(this,"_loadGA",function(T,M){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!L._hasLoadedGA){var k=document.createElement("script");k.async=!0,k.src="".concat(w,"?id=").concat(T),M&&k.setAttribute("nonce",M),document.body.appendChild(k),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},L._hasLoadedGA=!0}}),$(this,"_toGtagOptions",function(T){if(T){var M={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},w=Object.entries(T).reduce(function(k,V){var X=E(V,2),nn=X[0],Z=X[1];return M[nn]?k[M[nn]]=Z:k[nn]=Z,k},{});return w}}),$(this,"initialize",function(T){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!T)throw new Error("Require GA_MEASUREMENT_ID");var w=typeof T=="string"?[{trackingId:T}]:T;L._currentMeasurementId=w[0].trackingId;var k=M.gaOptions,V=M.gtagOptions,X=M.nonce,nn=M.testMode,Z=nn===void 0?!1:nn,en=M.gtagUrl;if(L._testMode=Z,Z||L._loadGA(L._currentMeasurementId,X,en),L.isInitialized||(L._gtag("js",new Date),w.forEach(function(Zn){var Ae=P(P(P({},L._toGtagOptions(P(P({},k),Zn.gaOptions))),V),Zn.gtagOptions);Object.keys(Ae).length?L._gtag("config",Zn.trackingId,Ae):L._gtag("config",Zn.trackingId)})),L.isInitialized=!0,!Z){var cn=S(L._queueGtag);for(L._queueGtag=[],L._isQueuing=!1;cn.length;){var mn=cn.shift();L._gtag.apply(L,S(mn)),mn[0]==="get"&&(L._isQueuing=!0)}}}),$(this,"set",function(T){if(!T){console.warn("`fieldsObject` is required in .set()");return}if(y(T)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(T).length===0&&console.warn("empty `fieldsObject` given to .set()"),L._gaCommand("set",T)}),$(this,"_gaCommandSendEvent",function(T,M,w,k,V){L._gtag("event",M,P(P({event_category:T,event_label:w,value:k},V&&{non_interaction:V.nonInteraction}),L._toGtagOptions(V)))}),$(this,"_gaCommandSendEventParameters",function(){for(var T=arguments.length,M=new Array(T),w=0;w<T;w++)M[w]=arguments[w];if(typeof M[0]=="string")L._gaCommandSendEvent.apply(L,S(M.slice(1)));else{var k=M[0],V=k.eventCategory,X=k.eventAction,nn=k.eventLabel,Z=k.eventValue;k.hitType;var en=m(k,u);L._gaCommandSendEvent(V,X,nn,Z,en)}}),$(this,"_gaCommandSendTiming",function(T,M,w,k){L._gtag("event","timing_complete",{name:M,value:w,event_category:T,event_label:k})}),$(this,"_gaCommandSendPageview",function(T,M){if(M&&Object.keys(M).length){var w=L._toGtagOptions(M),k=w.title,V=w.location,X=m(w,c);L._gtag("event","page_view",P(P(P(P({},T&&{page_path:T}),k&&{page_title:k}),V&&{page_location:V}),X))}else T?L._gtag("event","page_view",{page_path:T}):L._gtag("event","page_view")}),$(this,"_gaCommandSendPageviewParameters",function(){for(var T=arguments.length,M=new Array(T),w=0;w<T;w++)M[w]=arguments[w];if(typeof M[0]=="string")L._gaCommandSendPageview.apply(L,S(M.slice(1)));else{var k=M[0],V=k.page;k.hitType;var X=m(k,d);L._gaCommandSendPageview(V,X)}}),$(this,"_gaCommandSend",function(){for(var T=arguments.length,M=new Array(T),w=0;w<T;w++)M[w]=arguments[w];var k=typeof M[0]=="string"?M[0]:M[0].hitType;switch(k){case"event":L._gaCommandSendEventParameters.apply(L,M);break;case"pageview":L._gaCommandSendPageviewParameters.apply(L,M);break;case"timing":L._gaCommandSendTiming.apply(L,S(M.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(k));break;default:console.warn("Send command doesn't exist: ".concat(k))}}),$(this,"_gaCommandSet",function(){for(var T=arguments.length,M=new Array(T),w=0;w<T;w++)M[w]=arguments[w];typeof M[0]=="string"&&(M[0]=$({},M[0],M[1])),L._gtag("set",L._toGtagOptions(M[0]))}),$(this,"_gaCommand",function(T){for(var M=arguments.length,w=new Array(M>1?M-1:0),k=1;k<M;k++)w[k-1]=arguments[k];switch(T){case"send":L._gaCommandSend.apply(L,w);break;case"set":L._gaCommandSet.apply(L,w);break;default:console.warn("Command doesn't exist: ".concat(T))}}),$(this,"ga",function(){for(var T=arguments.length,M=new Array(T),w=0;w<T;w++)M[w]=arguments[w];if(typeof M[0]=="string")L._gaCommand.apply(L,M);else{var k=M[0];L._gtag("get",L._currentMeasurementId,"client_id",function(V){L._isQueuing=!1;var X=L._queueGtag;for(k({get:function(en){return en==="clientId"?V:en==="trackingId"?L._currentMeasurementId:en==="apiVersion"?"1":void 0}});X.length;){var nn=X.shift();L._gtag.apply(L,S(nn))}}),L._isQueuing=!0}return L.ga}),$(this,"event",function(T,M){if(typeof T=="string")L._gtag("event",T,L._toGtagOptions(M));else{var w=T.action,k=T.category,V=T.label,X=T.value,nn=T.nonInteraction,Z=T.transport;if(!k||!w){console.warn("args.category AND args.action are required in event()");return}var en={hitType:"event",eventCategory:(0,o.default)(k),eventAction:(0,o.default)(w)};V&&(en.eventLabel=(0,o.default)(V)),typeof X<"u"&&(typeof X!="number"?console.warn("Expected `args.value` arg to be a Number."):en.eventValue=X),typeof nn<"u"&&(typeof nn!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):en.nonInteraction=nn),typeof Z<"u"&&(typeof Z!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(Z)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),en.transport=Z)),L._gaCommand("send",en)}}),$(this,"send",function(T){L._gaCommand("send",T)}),this.reset()}return an(Y,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),Y})();a.GA4=_n;var Sn=new _n;a.default=Sn})(Eu)),Eu}var $m;function iA(){return $m||($m=1,(function(a){function r(m){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},r(m)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.ReactGAImplementation=void 0;var o=c(lA());function u(m){if(typeof WeakMap!="function")return null;var _=new WeakMap,y=new WeakMap;return(u=function(b){return b?y:_})(m)}function c(m,_){if(m&&m.__esModule)return m;if(m===null||r(m)!=="object"&&typeof m!="function")return{default:m};var y=u(_);if(y&&y.has(m))return y.get(m);var S={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in m)if(D!=="default"&&Object.prototype.hasOwnProperty.call(m,D)){var C=b?Object.getOwnPropertyDescriptor(m,D):null;C&&(C.get||C.set)?Object.defineProperty(S,D,C):S[D]=m[D]}return S.default=m,y&&y.set(m,S),S}var d=o.GA4;a.ReactGAImplementation=d;var p=o.default;a.default=p})(Cu)),Cu}var rA=iA();const Zu=M_(rA),sA="G-82NTHKNYRE";let ca=!1;function oA(){ca||(Zu.initialize(sA),ca=!0)}function uA(a,r){ca&&Zu.send({hitType:a,...r})}function Qr(a,r){ca&&Zu.event(a,r)}const cA=()=>{const a=ll();x.useEffect(()=>{oA()},[]),x.useEffect(()=>{const r=decodeURI(a.pathname+a.search);uA("pageview",{page:r,title:document.title})},[a.pathname,a.search])},dA=()=>{const a=ll(),r=x.useRef(new Set);x.useEffect(()=>{if(!ca)return;r.current.clear();const o=()=>{const u=window.scrollY,c=document.documentElement.scrollHeight-window.innerHeight;if(c<=0)return;const d=Math.round(u/c*100);for(const p of[25,50,75,90])d>=p&&!r.current.has(p)&&(r.current.add(p),Qr("scroll_depth",{percent:p,page:a.pathname}))};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[a.pathname])},TA=a=>{const r=ll(),o=x.useRef(null);x.useEffect(()=>{if(!(!ca||!a))return o.current=Date.now(),()=>{const u=Math.round((Date.now()-o.current)/1e3);u>=10&&Qr("post_read",{post_title:a,read_time_seconds:u,page:r.pathname})}},[a,r.pathname])},fA=()=>{x.useEffect(()=>{if(!ca)return;const a=r=>{const o=r.target.closest("a[href]");if(!o)return;const u=o.getAttribute("href");u&&(u.startsWith("http")||u.startsWith("mailto:"))&&!u.includes(location.hostname)&&Qr("outbound_click",{url:u})};return document.addEventListener("click",a),()=>document.removeEventListener("click",a)},[])},xA=a=>{a?.trim()&&Qr("search",{search_term:a.trim()})},pA=x.lazy(()=>fi(()=>import("./HomePage-hgnyNX4e.js"),__vite__mapDeps([0,1,2,3,4,5]))),mA=x.lazy(()=>fi(()=>import("./PostsPage-IddhmJ9a.js").then(a=>a.b),__vite__mapDeps([6,1,2,4,3,7]))),hA=x.lazy(()=>fi(()=>import("./PostsResolver-DfN2cJgK.js"),__vite__mapDeps([8,1,2,6,4,3,7,9]))),gA=x.lazy(()=>fi(()=>import("./AboutPage-BTIFOQK3.js"),__vite__mapDeps([10,1,2,4,11]))),_A=x.lazy(()=>fi(()=>import("./NotFoundPage-B540nH8O.js"),__vite__mapDeps([12,1,2,4])));function bA(){cA(),dA(),fA();const[a,r]=x.useState(!0),o=x.useCallback(()=>{r(!1)},[]);return g.jsxs(Xx,{children:[a&&g.jsx(eA,{onDone:o}),g.jsx(x.Suspense,{fallback:g.jsx("div",{style:{minHeight:"100dvh",background:"var(--bg)"}}),children:g.jsx(O_,{children:g.jsxs(Za,{element:g.jsx(Wx,{}),children:[g.jsx(Za,{path:"/",element:g.jsx(pA,{})}),g.jsx(Za,{path:"/posts",element:g.jsx(mA,{})}),g.jsx(Za,{path:"/posts/*",element:g.jsx(hA,{})}),g.jsx(Za,{path:"/about",element:g.jsx(gA,{})}),g.jsx(Za,{path:"*",element:g.jsx(_A,{})})]})})})]})}function yA({children:a}){const{pathname:r,search:o}=ll();return x.useEffect(()=>{window.scrollTo(0,0)},[r,o]),a}L_.createRoot(document.getElementById("root")).render(g.jsx(w_,{basename:"/",children:g.jsx(z_,{children:g.jsx(yA,{children:g.jsx(bA,{})})})}));export{q_ as A,al as D,Cm as M,Kr as P,I_ as a,xA as t,TA as u};
