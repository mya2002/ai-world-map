function ab(r,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const u=Object.getOwnPropertyDescriptor(s,o);u&&Object.defineProperty(r,o,u.get?u:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function ob(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Cd={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function lb(){if(O_)return gl;O_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return gl.Fragment=t,gl.jsx=n,gl.jsxs=n,gl}var N_;function ub(){return N_||(N_=1,Cd.exports=lb()),Cd.exports}var it=ub(),Dd={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function cb(){if(M_)return bt;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function I(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,W={};function H(D,X,nt){this.props=D,this.context=X,this.refs=W,this.updater=nt||B}H.prototype.isReactComponent={},H.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},H.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function rt(){}rt.prototype=H.prototype;function at(D,X,nt){this.props=D,this.context=X,this.refs=W,this.updater=nt||B}var lt=at.prototype=new rt;lt.constructor=at,$(lt,H.prototype),lt.isPureReactComponent=!0;var wt=Array.isArray,yt={H:null,A:null,T:null,S:null,V:null},Vt=Object.prototype.hasOwnProperty;function M(D,X,nt,J,ft,Ct){return nt=Ct.ref,{$$typeof:r,type:D,key:X,ref:nt!==void 0?nt:null,props:Ct}}function b(D,X){return M(D.type,X,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(nt){return X[nt]})}var x=/\/+/g;function P(D,X){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):X.toString(36)}function C(){}function Ve(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(C,C):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function re(D,X,nt,J,ft){var Ct=typeof D;(Ct==="undefined"||Ct==="boolean")&&(D=null);var Tt=!1;if(D===null)Tt=!0;else switch(Ct){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(D.$$typeof){case r:case t:Tt=!0;break;case E:return Tt=D._init,re(Tt(D._payload),X,nt,J,ft)}}if(Tt)return ft=ft(D),Tt=J===""?"."+P(D,0):J,wt(ft)?(nt="",Tt!=null&&(nt=Tt.replace(x,"$&/")+"/"),re(ft,X,nt,"",function(Gn){return Gn})):ft!=null&&(R(ft)&&(ft=b(ft,nt+(ft.key==null||D&&D.key===ft.key?"":(""+ft.key).replace(x,"$&/")+"/")+Tt)),X.push(ft)),1;Tt=0;var Ie=J===""?".":J+":";if(wt(D))for(var Wt=0;Wt<D.length;Wt++)J=D[Wt],Ct=Ie+P(J,Wt),Tt+=re(J,X,nt,Ct,ft);else if(Wt=I(D),typeof Wt=="function")for(D=Wt.call(D),Wt=0;!(J=D.next()).done;)J=J.value,Ct=Ie+P(J,Wt++),Tt+=re(J,X,nt,Ct,ft);else if(Ct==="object"){if(typeof D.then=="function")return re(Ve(D),X,nt,J,ft);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function F(D,X,nt){if(D==null)return D;var J=[],ft=0;return re(D,J,"","",function(Ct){return X.call(nt,Ct,ft++)}),J}function et(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(nt){(D._status===0||D._status===-1)&&(D._status=1,D._result=nt)},function(nt){(D._status===0||D._status===-1)&&(D._status=2,D._result=nt)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var ht=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Bt(){}return bt.Children={map:F,forEach:function(D,X,nt){F(D,function(){X.apply(this,arguments)},nt)},count:function(D){var X=0;return F(D,function(){X++}),X},toArray:function(D){return F(D,function(X){return X})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=H,bt.Fragment=n,bt.Profiler=o,bt.PureComponent=at,bt.StrictMode=s,bt.Suspense=g,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=yt,bt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return yt.H.useMemoCache(D)}},bt.cache=function(D){return function(){return D.apply(null,arguments)}},bt.cloneElement=function(D,X,nt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=$({},D.props),ft=D.key,Ct=void 0;if(X!=null)for(Tt in X.ref!==void 0&&(Ct=void 0),X.key!==void 0&&(ft=""+X.key),X)!Vt.call(X,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&X.ref===void 0||(J[Tt]=X[Tt]);var Tt=arguments.length-2;if(Tt===1)J.children=nt;else if(1<Tt){for(var Ie=Array(Tt),Wt=0;Wt<Tt;Wt++)Ie[Wt]=arguments[Wt+2];J.children=Ie}return M(D.type,ft,void 0,void 0,Ct,J)},bt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},bt.createElement=function(D,X,nt){var J,ft={},Ct=null;if(X!=null)for(J in X.key!==void 0&&(Ct=""+X.key),X)Vt.call(X,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ft[J]=X[J]);var Tt=arguments.length-2;if(Tt===1)ft.children=nt;else if(1<Tt){for(var Ie=Array(Tt),Wt=0;Wt<Tt;Wt++)Ie[Wt]=arguments[Wt+2];ft.children=Ie}if(D&&D.defaultProps)for(J in Tt=D.defaultProps,Tt)ft[J]===void 0&&(ft[J]=Tt[J]);return M(D,Ct,void 0,void 0,null,ft)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:m,render:D}},bt.isValidElement=R,bt.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:et}},bt.memo=function(D,X){return{$$typeof:y,type:D,compare:X===void 0?null:X}},bt.startTransition=function(D){var X=yt.T,nt={};yt.T=nt;try{var J=D(),ft=yt.S;ft!==null&&ft(nt,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Bt,ht)}catch(Ct){ht(Ct)}finally{yt.T=X}},bt.unstable_useCacheRefresh=function(){return yt.H.useCacheRefresh()},bt.use=function(D){return yt.H.use(D)},bt.useActionState=function(D,X,nt){return yt.H.useActionState(D,X,nt)},bt.useCallback=function(D,X){return yt.H.useCallback(D,X)},bt.useContext=function(D){return yt.H.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D,X){return yt.H.useDeferredValue(D,X)},bt.useEffect=function(D,X,nt){var J=yt.H;if(typeof nt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,X)},bt.useId=function(){return yt.H.useId()},bt.useImperativeHandle=function(D,X,nt){return yt.H.useImperativeHandle(D,X,nt)},bt.useInsertionEffect=function(D,X){return yt.H.useInsertionEffect(D,X)},bt.useLayoutEffect=function(D,X){return yt.H.useLayoutEffect(D,X)},bt.useMemo=function(D,X){return yt.H.useMemo(D,X)},bt.useOptimistic=function(D,X){return yt.H.useOptimistic(D,X)},bt.useReducer=function(D,X,nt){return yt.H.useReducer(D,X,nt)},bt.useRef=function(D){return yt.H.useRef(D)},bt.useState=function(D){return yt.H.useState(D)},bt.useSyncExternalStore=function(D,X,nt){return yt.H.useSyncExternalStore(D,X,nt)},bt.useTransition=function(){return yt.H.useTransition()},bt.version="19.1.0",bt}var x_;function Am(){return x_||(x_=1,Dd.exports=cb()),Dd.exports}var ot=Am();const hb=ob(ot),fb=ab({__proto__:null,default:hb},[ot]);var Od={exports:{}},yl={},Nd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function db(){return V_||(V_=1,function(r){function t(F,et){var ht=F.length;F.push(et);t:for(;0<ht;){var Bt=ht-1>>>1,D=F[Bt];if(0<o(D,et))F[Bt]=et,F[ht]=D,ht=Bt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var et=F[0],ht=F.pop();if(ht!==et){F[0]=ht;t:for(var Bt=0,D=F.length,X=D>>>1;Bt<X;){var nt=2*(Bt+1)-1,J=F[nt],ft=nt+1,Ct=F[ft];if(0>o(J,ht))ft<D&&0>o(Ct,J)?(F[Bt]=Ct,F[ft]=ht,Bt=ft):(F[Bt]=J,F[nt]=ht,Bt=nt);else if(ft<D&&0>o(Ct,ht))F[Bt]=Ct,F[ft]=ht,Bt=ft;else break t}}return et}function o(F,et){var ht=F.sortIndex-et.sortIndex;return ht!==0?ht:F.id-et.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],y=[],E=1,S=null,I=3,B=!1,$=!1,W=!1,H=!1,rt=typeof setTimeout=="function"?setTimeout:null,at=typeof clearTimeout=="function"?clearTimeout:null,lt=typeof setImmediate<"u"?setImmediate:null;function wt(F){for(var et=n(y);et!==null;){if(et.callback===null)s(y);else if(et.startTime<=F)s(y),et.sortIndex=et.expirationTime,t(g,et);else break;et=n(y)}}function yt(F){if(W=!1,wt(F),!$)if(n(g)!==null)$=!0,Vt||(Vt=!0,P());else{var et=n(y);et!==null&&re(yt,et.startTime-F)}}var Vt=!1,M=-1,b=5,R=-1;function N(){return H?!0:!(r.unstable_now()-R<b)}function x(){if(H=!1,Vt){var F=r.unstable_now();R=F;var et=!0;try{t:{$=!1,W&&(W=!1,at(M),M=-1),B=!0;var ht=I;try{e:{for(wt(F),S=n(g);S!==null&&!(S.expirationTime>F&&N());){var Bt=S.callback;if(typeof Bt=="function"){S.callback=null,I=S.priorityLevel;var D=Bt(S.expirationTime<=F);if(F=r.unstable_now(),typeof D=="function"){S.callback=D,wt(F),et=!0;break e}S===n(g)&&s(g),wt(F)}else s(g);S=n(g)}if(S!==null)et=!0;else{var X=n(y);X!==null&&re(yt,X.startTime-F),et=!1}}break t}finally{S=null,I=ht,B=!1}et=void 0}}finally{et?P():Vt=!1}}}var P;if(typeof lt=="function")P=function(){lt(x)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Ve=C.port2;C.port1.onmessage=x,P=function(){Ve.postMessage(null)}}else P=function(){rt(x,0)};function re(F,et){M=rt(function(){F(r.unstable_now())},et)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_next=function(F){switch(I){case 1:case 2:case 3:var et=3;break;default:et=I}var ht=I;I=et;try{return F()}finally{I=ht}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(F,et){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ht=I;I=F;try{return et()}finally{I=ht}},r.unstable_scheduleCallback=function(F,et,ht){var Bt=r.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?Bt+ht:Bt):ht=Bt,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ht+D,F={id:E++,callback:et,priorityLevel:F,startTime:ht,expirationTime:D,sortIndex:-1},ht>Bt?(F.sortIndex=ht,t(y,F),n(g)===null&&F===n(y)&&(W?(at(M),M=-1):W=!0,re(yt,ht-Bt))):(F.sortIndex=D,t(g,F),$||B||($=!0,Vt||(Vt=!0,P()))),F},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(F){var et=I;return function(){var ht=I;I=et;try{return F.apply(this,arguments)}finally{I=ht}}}}(Md)),Md}var P_;function mb(){return P_||(P_=1,Nd.exports=db()),Nd.exports}var xd={exports:{}},Ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function pb(){if(k_)return Ge;k_=1;var r=Am();function t(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:g,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ge.createPortal=function(g,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(g,y,null,E)},Ge.flushSync=function(g){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=y,s.p=E,s.d.f()}},Ge.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Ge.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Ge.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin),I=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:I,fetchPriority:B}):E==="script"&&s.d.X(g,{crossOrigin:S,integrity:I,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ge.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Ge.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin);s.d.L(g,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ge.preloadModule=function(g,y){if(typeof g=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Ge.requestFormReset=function(g){s.d.r(g)},Ge.unstable_batchedUpdates=function(g,y){return g(y)},Ge.useFormState=function(g,y,E){return f.H.useFormState(g,y,E)},Ge.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ge.version="19.1.0",Ge}var U_;function ME(){if(U_)return xd.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xd.exports=pb(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function gb(){if(L_)return yl;L_=1;var r=mb(),t=Am(),n=ME();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),at=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),Vt=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function Ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case H:return"Profiler";case W:return"StrictMode";case yt:return"Suspense";case Vt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case lt:return(e.displayName||"Context")+".Provider";case at:return(e._context.displayName||"Context")+".Consumer";case wt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:Ve(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return Ve(e(i))}catch{}}return null}var re=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},Bt=[],D=-1;function X(e){return{current:e}}function nt(e){0>D||(e.current=Bt[D],Bt[D]=null,D--)}function J(e,i){D++,Bt[D]=e.current,e.current=i}var ft=X(null),Ct=X(null),Tt=X(null),Ie=X(null);function Wt(e,i){switch(J(Tt,i),J(Ct,e),J(ft,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?r_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=r_(i),e=s_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(ft),J(ft,e)}function Gn(){nt(ft),nt(Ct),nt(Tt)}function Xi(e){e.memoizedState!==null&&J(Ie,e);var i=ft.current,a=s_(i,e.type);i!==a&&(J(Ct,e),J(ft,a))}function gi(e){Ct.current===e&&(nt(ft),nt(Ct)),Ie.current===e&&(nt(Ie),hl._currentValue=ht)}var Fr=Object.prototype.hasOwnProperty,Gr=r.unstable_scheduleCallback,Kr=r.unstable_cancelCallback,oo=r.unstable_shouldYield,$l=r.unstable_requestPaint,yn=r.unstable_now,Ih=r.unstable_getCurrentPriorityLevel,lo=r.unstable_ImmediatePriority,Ks=r.unstable_UserBlockingPriority,Qr=r.unstable_NormalPriority,Ch=r.unstable_LowPriority,Qs=r.unstable_IdlePriority,uo=r.log,Xl=r.unstable_setDisableYieldValue,se=null,Ft=null;function on(e){if(typeof uo=="function"&&Xl(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(se,e)}catch{}}var He=Math.clz32?Math.clz32:Yr,Zl=Math.log,Dh=Math.LN2;function Yr(e){return e>>>=0,e===0?32:31-(Zl(e)/Dh|0)|0}var $r=256,Xr=4194304;function Vn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ys(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Vn(l):(v&=T,v!==0?h=Vn(v):a||(a=T&~e,a!==0&&(h=Vn(a))))):(T=l&~d,T!==0?h=Vn(T):v!==0?h=Vn(v):a||(a=l&~e,a!==0&&(h=Vn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Zr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function co(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ho(){var e=$r;return $r<<=1,($r&4194048)===0&&($r=256),e}function fo(){var e=Xr;return Xr<<=1,(Xr&62914560)===0&&(Xr=4194304),e}function yi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function _i(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-He(a),Q=1<<G;T[G]=0,w[G]=-1;var z=L[G];if(z!==null)for(L[G]=null,G=0;G<z.length;G++){var j=z[G];j!==null&&(j.lane&=-536870913)}a&=~Q}l!==0&&Kn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Kn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-He(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function po(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-He(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Zi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wi(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:b_(e.type))}function Wl(e,i){var a=et.p;try{return et.p=e,i()}finally{et.p=a}}var te=Math.random().toString(36).slice(2),_e="__reactFiber$"+te,de="__reactProps$"+te,_n="__reactContainer$"+te,go="__reactEvents$"+te,Oh="__reactListeners$"+te,Ji="__reactHandles$"+te,Jl="__reactResources$"+te,Wr="__reactMarker$"+te;function tr(e){delete e[_e],delete e[de],delete e[go],delete e[Oh],delete e[Ji]}function vi(e){var i=e[_e];if(i)return i;for(var a=e.parentNode;a;){if(i=a[_n]||a[_e]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[_e])return a;e=u_(e)}return i}e=a,a=e.parentNode}return null}function Qn(e){if(e=e[_e]||e[_n]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Yn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Xe(e){var i=e[Jl];return i||(i=e[Jl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ue(e){e[Wr]=!0}var yo=new Set,Xs={};function Pn(e,i){Ei(e,i),Ei(e+"Capture",i)}function Ei(e,i){for(Xs[e]=i,e=0;e<i.length;e++)yo.add(i[e])}var tu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),eu={},Jr={};function nu(e){return Fr.call(Jr,e)?!0:Fr.call(eu,e)?!1:tu.test(e)?Jr[e]=!0:(eu[e]=!0,!1)}function er(e,i,a){if(nu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function $n(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Pe(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var ts,iu;function Ti(e){if(ts===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ts=i&&i[1]||"",iu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ts+e+iu}var Zs=!1;function Ws(e,i){if(!e||Zs)return"";Zs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(j){var z=j}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(j){z=j}e.call(Q.prototype)}}else{try{throw Error()}catch(j){z=j}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var w=v.split(`
`),L=T.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var G=`
`+w[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{Zs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ti(a):""}function _o(e){switch(e.tag){case 26:case 27:case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 15:return Ws(e.type,!1);case 11:return Ws(e.type.render,!1);case 1:return Ws(e.type,!0);case 31:return Ti("Activity");default:return""}}function Js(e){try{var i="";do i+=_o(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Nh(e){var i=vo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ta(e){e._valueTracker||(e._valueTracker=Nh(e))}function Eo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=vo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mh=/[\n"\\]/g;function me(e){return e.replace(Mh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ln(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ze(i)):e.value!==""+Ze(i)&&(e.value=""+Ze(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?nr(e,v,Ze(i)):a!=null?nr(e,v,Ze(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ze(T):e.removeAttribute("name")}function ns(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Ze(a):"",i=i!=null?""+Ze(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function nr(e,i,a){i==="number"&&es(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ai(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Qt(e,i,a){if(i!=null&&(i=""+Ze(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Ze(a):""}function is(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(re(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Ze(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function vn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var rs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ru(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||rs.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function To(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&ru(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&ru(e,d,i[d])}function Ao(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ea(e){return Vh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Si=null;function En(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,wi=null;function So(e){var i=Qn(e);if(i&&(e=i.stateNode)){var a=e[de]||null;t:switch(e=i.stateNode,i.type){case"input":if(ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[de]||null;if(!h)throw Error(s(90));ln(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Eo(l)}break t;case"textarea":Qt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ai(e,!!a.multiple,i,!1)}}}var Xn=!1;function su(e,i,a){if(Xn)return e(i,a);Xn=!0;try{var l=e(i);return l}finally{if(Xn=!1,(bi!==null||wi!==null)&&(Wu(),bi&&(i=bi,e=wi,wi=bi=null,So(i),e)))for(i=0;i<e.length;i++)So(e[i])}}function ss(e,i){var a=e.stateNode;if(a===null)return null;var l=a[de]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tn=!1;if(kn)try{var as={};Object.defineProperty(as,"passive",{get:function(){Tn=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{Tn=!1}var Zn=null,ir=null,Ri=null;function bo(){if(Ri)return Ri;var e,i=ir,a=i.length,l,h="value"in Zn?Zn.value:Zn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ri=h.slice(e,1<l?1-l:void 0)}function Wn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function wo(){return!1}function Ce(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Jn:wo,this.isPropagationStopped=wo,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Ce(qt),os=E({},qt,{view:0,detail:0}),au=Ce(os),ia,ra,ti,ls=E({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(ia=e.screenX-ti.screenX,ra=e.screenY-ti.screenY):ra=ia=0,ti=e),ia)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),An=Ce(ls),ou=E({},ls,{dataTransfer:0}),Ph=Ce(ou),us=E({},os,{relatedTarget:0}),sa=Ce(us),Ro=E({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),aa=Ce(Ro),lu=E({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oa=Ce(lu),kh=E({},qt,{data:0}),Io=Ce(kh),cs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Co(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=cu[e])?!!i[e]:!1}function hs(){return Co}var hu=E({},os,{key:function(e){if(e.key){var i=cs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),la=Ce(hu),fu=E({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Do=Ce(fu),Ii=E({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),du=Ce(Ii),mu=E({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),pu=Ce(mu),gu=E({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ua=Ce(gu),We=E({},qt,{newState:0,oldState:0}),yu=Ce(We),_u=[9,13,27,32],ei=kn&&"CompositionEvent"in window,c=null;kn&&"documentMode"in document&&(c=document.documentMode);var p=kn&&"TextEvent"in window&&!c,_=kn&&(!ei||c&&8<c&&11>=c),A=" ",k=!1;function q(e,i){switch(e){case"keyup":return _u.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function ve(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(k=!0,A);case"textInput":return e=i.data,e===A&&k?null:e;default:return null}}function kt(e,i){if(Pt)return e==="compositionend"||!ei&&q(e,i)?(e=bo(),Ri=ir=Zn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ee(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!De[e.type]:i==="textarea"}function Ci(e,i,a,l){bi?wi?wi.push(l):wi=[l]:bi=l,i=rc(i,"onChange"),0<i.length&&(a=new na("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var ke=null,ni=null;function Oo(e){Jy(e,0)}function vu(e){var i=Yn(e);if(Eo(i))return e}function Ep(e,i){if(e==="change")return i}var Tp=!1;if(kn){var Uh;if(kn){var Lh="oninput"in document;if(!Lh){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),Lh=typeof Ap.oninput=="function"}Uh=Lh}else Uh=!1;Tp=Uh&&(!document.documentMode||9<document.documentMode)}function Sp(){ke&&(ke.detachEvent("onpropertychange",bp),ni=ke=null)}function bp(e){if(e.propertyName==="value"&&vu(ni)){var i=[];Ci(i,ni,e,En(e)),su(Oo,i)}}function kA(e,i,a){e==="focusin"?(Sp(),ke=i,ni=a,ke.attachEvent("onpropertychange",bp)):e==="focusout"&&Sp()}function UA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vu(ni)}function LA(e,i){if(e==="click")return vu(i)}function zA(e,i){if(e==="input"||e==="change")return vu(i)}function BA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var un=typeof Object.is=="function"?Object.is:BA;function No(e,i){if(un(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Fr.call(i,h)||!un(e[h],i[h]))return!1}return!0}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rp(e,i){var a=wp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=wp(a)}}function Ip(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ip(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=es(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=es(e.document)}return i}function zh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var jA=kn&&"documentMode"in document&&11>=document.documentMode,ca=null,Bh=null,Mo=null,jh=!1;function Dp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jh||ca==null||ca!==es(l)||(l=ca,"selectionStart"in l&&zh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Mo&&No(Mo,l)||(Mo=l,l=rc(Bh,"onSelect"),0<l.length&&(i=new na("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ca)))}function fs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ha={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},qh={},Op={};kn&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function ds(e){if(qh[e])return qh[e];if(!ha[e])return e;var i=ha[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Op)return qh[e]=i[a];return e}var Np=ds("animationend"),Mp=ds("animationiteration"),xp=ds("animationstart"),qA=ds("transitionrun"),HA=ds("transitionstart"),FA=ds("transitioncancel"),Vp=ds("transitionend"),Pp=new Map,Hh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hh.push("scrollEnd");function Un(e,i){Pp.set(e,i),Pn(i,[e])}var kp=new WeakMap;function Sn(e,i){if(typeof e=="object"&&e!==null){var a=kp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Js(i)},kp.set(e,i),i)}return{value:e,source:i,stack:Js(i)}}var bn=[],fa=0,Fh=0;function Eu(){for(var e=fa,i=Fh=fa=0;i<e;){var a=bn[i];bn[i++]=null;var l=bn[i];bn[i++]=null;var h=bn[i];bn[i++]=null;var d=bn[i];if(bn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Up(a,h,d)}}function Tu(e,i,a,l){bn[fa++]=e,bn[fa++]=i,bn[fa++]=a,bn[fa++]=l,Fh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gh(e,i,a,l){return Tu(e,i,a,l),Au(e)}function da(e,i){return Tu(e,null,null,i),Au(e)}function Up(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-He(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Au(e){if(50<il)throw il=0,Wf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ma={};function GA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,i,a,l){return new GA(e,i,a,l)}function Kh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,i){var a=e.alternate;return a===null?(a=cn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Su(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Kh(e)&&(v=1);else if(typeof e=="string")v=QS(e,a,ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=cn(31,a,i,h),e.elementType=R,e.lanes=d,e;case $:return ms(a.children,h,d,i);case W:v=8,h|=24;break;case H:return e=cn(12,a,i,h|2),e.elementType=H,e.lanes=d,e;case yt:return e=cn(13,a,i,h),e.elementType=yt,e.lanes=d,e;case Vt:return e=cn(19,a,i,h),e.elementType=Vt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rt:case lt:v=10;break t;case at:v=9;break t;case wt:v=11;break t;case M:v=14;break t;case b:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=cn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function ms(e,i,a,l){return e=cn(7,e,l,i),e.lanes=a,e}function Qh(e,i,a){return e=cn(6,e,null,i),e.lanes=a,e}function Yh(e,i,a){return i=cn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var pa=[],ga=0,bu=null,wu=0,wn=[],Rn=0,ps=null,Oi=1,Ni="";function gs(e,i){pa[ga++]=wu,pa[ga++]=bu,bu=e,wu=i}function zp(e,i,a){wn[Rn++]=Oi,wn[Rn++]=Ni,wn[Rn++]=ps,ps=e;var l=Oi;e=Ni;var h=32-He(l)-1;l&=~(1<<h),a+=1;var d=32-He(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Oi=1<<32-He(i)+h|a<<h|l,Ni=d+e}else Oi=1<<d|a<<h|l,Ni=e}function $h(e){e.return!==null&&(gs(e,1),zp(e,1,0))}function Xh(e){for(;e===bu;)bu=pa[--ga],pa[ga]=null,wu=pa[--ga],pa[ga]=null;for(;e===ps;)ps=wn[--Rn],wn[Rn]=null,Ni=wn[--Rn],wn[Rn]=null,Oi=wn[--Rn],wn[Rn]=null}var Je=null,ae=null,jt=!1,ys=null,ii=!1,Zh=Error(s(519));function _s(e){var i=Error(s(418,""));throw Po(Sn(i,e)),Zh}function Bp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[_e]=e,i[de]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<sl.length;a++)Nt(sl[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),ns(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ta(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),is(i,l.value,l.defaultValue,l.children),ta(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||i_(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=sc),i=!0):i=!1,i||_s(e)}function jp(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:Je=Je.return}}function xo(e){if(e!==Je)return!1;if(!jt)return jp(e),jt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||md(e.type,e.memoizedProps)),a=!a),a&&ae&&_s(e),jp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ae=zn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ae=null}}else i===27?(i=ae,vr(e.type)?(e=_d,_d=null,ae=e):ae=i):ae=Je?zn(e.stateNode.nextSibling):null;return!0}function Vo(){ae=Je=null,jt=!1}function qp(){var e=ys;return e!==null&&(nn===null?nn=e:nn.push.apply(nn,e),ys=null),e}function Po(e){ys===null?ys=[e]:ys.push(e)}var Wh=X(null),vs=null,Mi=null;function rr(e,i,a){J(Wh,i._currentValue),i._currentValue=a}function xi(e){e._currentValue=Wh.current,nt(Wh)}function Jh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function tf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var w=0;w<i.length;w++)if(T.context===i[w]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Jh(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Jh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function ko(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;un(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===Ie.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(hl):e=[hl])}h=h.return}e!==null&&tf(i,e,a,l),i.flags|=262144}function Ru(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){vs=e,Mi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return Hp(vs,e)}function Iu(e,i){return vs===null&&Es(e),Hp(e,i)}function Hp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Mi===null){if(e===null)throw Error(s(308));Mi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Mi=Mi.next=i;return a}var KA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},QA=r.unstable_scheduleCallback,YA=r.unstable_NormalPriority,Te={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new KA,data:new Map,refCount:0}}function Uo(e){e.refCount--,e.refCount===0&&QA(YA,function(){e.controller.abort()})}var Lo=null,nf=0,ya=0,_a=null;function $A(e,i){if(Lo===null){var a=Lo=[];nf=0,ya=sd(),_a={status:"pending",value:void 0,then:function(l){a.push(l)}}}return nf++,i.then(Fp,Fp),i}function Fp(){if(--nf===0&&Lo!==null){_a!==null&&(_a.status="fulfilled");var e=Lo;Lo=null,ya=0,_a=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function XA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Gp=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&$A(e,i),Gp!==null&&Gp(e,i)};var Ts=X(null);function rf(){var e=Ts.current;return e!==null?e:Jt.pooledCache}function Cu(e,i){i===null?J(Ts,Ts.current):J(Ts,i.pool)}function Kp(){var e=rf();return e===null?null:{parent:Te._currentValue,pool:e}}var zo=Error(s(460)),Qp=Error(s(474)),Du=Error(s(542)),sf={then:function(){}};function Yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ou(){}function $p(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Ou,Ou),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Zp(e),e;default:if(typeof i.status=="string")i.then(Ou,Ou);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Zp(e),e}throw Bo=i,zo}}var Bo=null;function Xp(){if(Bo===null)throw Error(s(459));var e=Bo;return Bo=null,e}function Zp(e){if(e===zo||e===Du)throw Error(s(483))}var sr=!1;function af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ar(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function or(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Au(e),Up(e,null,a),i}return Tu(e,l,i,a),Au(e)}function jo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,po(e,a)}}function lf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var uf=!1;function qo(){if(uf){var e=_a;if(e!==null)throw e}}function Ho(e,i,a,l){uf=!1;var h=e.updateQueue;sr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var w=T,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var G=e.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=L:T.next=L,G.lastBaseUpdate=w))}if(d!==null){var Q=h.baseState;v=0,G=L=w=null,T=d;do{var z=T.lane&-536870913,j=z!==T.lane;if(j?(Ut&z)===z:(l&z)===z){z!==0&&z===ya&&(uf=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var _t=e,dt=T;z=i;var Xt=a;switch(dt.tag){case 1:if(_t=dt.payload,typeof _t=="function"){Q=_t.call(Xt,Q,z);break t}Q=_t;break t;case 3:_t.flags=_t.flags&-65537|128;case 0:if(_t=dt.payload,z=typeof _t=="function"?_t.call(Xt,Q,z):_t,z==null)break t;Q=E({},Q,z);break t;case 2:sr=!0}}z=T.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(L=G=j,w=Q):G=G.next=j,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(w=Q),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),pr|=v,e.lanes=v,e.memoizedState=Q}}function Wp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Jp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wp(a[e],i)}var va=X(null),Nu=X(0);function tg(e,i){e=Bi,J(Nu,e),J(va,i),Bi=e|i.baseLanes}function cf(){J(Nu,Bi),J(va,va.current)}function hf(){Bi=Nu.current,nt(va),nt(Nu)}var lr=0,Rt=null,Yt=null,pe=null,Mu=!1,Ea=!1,As=!1,xu=0,Fo=0,Ta=null,ZA=0;function ce(){throw Error(s(321))}function ff(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!un(e[a],i[a]))return!1;return!0}function df(e,i,a,l,h,d){return lr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Ug:Lg,As=!1,d=a(l,h),As=!1,Ea&&(d=ng(i,a,l,h)),eg(e),d}function eg(e){F.H=zu;var i=Yt!==null&&Yt.next!==null;if(lr=0,pe=Yt=Rt=null,Mu=!1,Fo=0,Ta=null,i)throw Error(s(300));e===null||Oe||(e=e.dependencies,e!==null&&Ru(e)&&(Oe=!0))}function ng(e,i,a,l){Rt=e;var h=0;do{if(Ea&&(Ta=null),Fo=0,Ea=!1,25<=h)throw Error(s(301));if(h+=1,pe=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=rS,d=i(a,l)}while(Ea);return d}function WA(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Go(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function mf(){var e=xu!==0;return xu=0,e}function pf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function gf(e){if(Mu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Mu=!1}lr=0,pe=Yt=Rt=null,Ea=!1,Fo=xu=0,Ta=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?Rt.memoizedState=pe=e:pe=pe.next=e,pe}function ge(){if(Yt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=pe===null?Rt.memoizedState:pe.next;if(i!==null)pe=i,Yt=e;else{if(e===null)throw Rt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},pe===null?Rt.memoizedState=pe=e:pe=pe.next=e}return pe}function yf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(e){var i=Fo;return Fo+=1,Ta===null&&(Ta=[]),e=$p(Ta,e,i),i=Rt,(pe===null?i.memoizedState:pe.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Ug:Lg),e}function Vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Go(e);if(e.$$typeof===lt)return Fe(e)}throw Error(s(438,String(e)))}function _f(e){var i=null,a=Rt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=yf(),Rt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function Vi(e,i){return typeof i=="function"?i(e):i}function Pu(e){var i=ge();return vf(i,Yt,e)}function vf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,w=null,L=i,G=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Ut&Q)===Q:(lr&Q)===Q){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===ya&&(G=!0);else if((lr&z)===z){L=L.next,z===ya&&(G=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(T=w=Q,v=d):w=w.next=Q,Rt.lanes|=z,pr|=z;Q=L.action,As&&a(d,Q),d=L.hasEagerState?L.eagerState:a(d,Q)}else z={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(T=w=z,v=d):w=w.next=z,Rt.lanes|=Q,pr|=Q;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=T,!un(d,e.memoizedState)&&(Oe=!0,G&&(a=_a,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ef(e){var i=ge(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);un(d,i.memoizedState)||(Oe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function ig(e,i,a){var l=Rt,h=ge(),d=jt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!un((Yt||h).memoizedState,a);v&&(h.memoizedState=a,Oe=!0),h=h.queue;var T=ag.bind(null,l,h,e);if(Ko(2048,8,T,[e]),h.getSnapshot!==i||v||pe!==null&&pe.memoizedState.tag&1){if(l.flags|=2048,Aa(9,ku(),sg.bind(null,l,h,a,i),null),Jt===null)throw Error(s(349));d||(lr&124)!==0||rg(l,i,a)}return a}function rg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Rt.updateQueue,i===null?(i=yf(),Rt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function sg(e,i,a,l){i.value=a,i.getSnapshot=l,og(i)&&lg(e)}function ag(e,i,a){return a(function(){og(i)&&lg(e)})}function og(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!un(e,a)}catch{return!0}}function lg(e){var i=da(e,2);i!==null&&pn(i,e,2)}function Tf(e){var i=tn();if(typeof e=="function"){var a=e;if(e=a(),As){on(!0);try{a()}finally{on(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},i}function ug(e,i,a,l){return e.baseState=a,vf(e,Yt,typeof l=="function"?l:Vi)}function JA(e,i,a,l,h){if(Lu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,cg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function cg(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var T=a(h,l),w=F.S;w!==null&&w(v,T),hg(e,i,T)}catch(L){Af(e,i,L)}finally{F.T=d}}else try{d=a(h,l),hg(e,i,d)}catch(L){Af(e,i,L)}}function hg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){fg(e,i,l)},function(l){return Af(e,i,l)}):fg(e,i,a)}function fg(e,i,a){i.status="fulfilled",i.value=a,dg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,cg(e,a)))}function Af(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,dg(i),i=i.next;while(i!==l)}e.action=null}function dg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function mg(e,i){return i}function pg(e,i){if(jt){var a=Jt.formState;if(a!==null){t:{var l=Rt;if(jt){if(ae){e:{for(var h=ae,d=ii;h.nodeType!==8;){if(!d){h=null;break e}if(h=zn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ae=zn(h.nextSibling),l=h.data==="F!";break t}}_s(l)}l=!1}l&&(i=a[0])}}return a=tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mg,lastRenderedState:i},a.queue=l,a=Vg.bind(null,Rt,l),l.dispatch=a,l=Tf(!1),d=If.bind(null,Rt,!1,l.queue),l=tn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=JA.bind(null,Rt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function gg(e){var i=ge();return yg(i,Yt,e)}function yg(e,i,a){if(i=vf(e,i,mg)[0],e=Pu(Vi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Go(i)}catch(v){throw v===zo?Du:v}else l=i;i=ge();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Rt.flags|=2048,Aa(9,ku(),tS.bind(null,h,a),null)),[l,d,e]}function tS(e,i){e.action=i}function _g(e){var i=ge(),a=Yt;if(a!==null)return yg(i,a,e);ge(),i=i.memoizedState,a=ge();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Aa(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=yf(),Rt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function ku(){return{destroy:void 0,resource:void 0}}function vg(){return ge().memoizedState}function Uu(e,i,a,l){var h=tn();l=l===void 0?null:l,Rt.flags|=e,h.memoizedState=Aa(1|i,ku(),a,l)}function Ko(e,i,a,l){var h=ge();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&ff(l,Yt.memoizedState.deps)?h.memoizedState=Aa(i,d,a,l):(Rt.flags|=e,h.memoizedState=Aa(1|i,d,a,l))}function Eg(e,i){Uu(8390656,8,e,i)}function Tg(e,i){Ko(2048,8,e,i)}function Ag(e,i){return Ko(4,2,e,i)}function Sg(e,i){return Ko(4,4,e,i)}function bg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function wg(e,i,a){a=a!=null?a.concat([e]):null,Ko(4,4,bg.bind(null,i,e),a)}function Sf(){}function Rg(e,i){var a=ge();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&ff(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Ig(e,i){var a=ge();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&ff(i,l[1]))return l[0];if(l=e(),As){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l}function bf(e,i,a){return a===void 0||(lr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Oy(),Rt.lanes|=e,pr|=e,a)}function Cg(e,i,a,l){return un(a,i)?a:va.current!==null?(e=bf(e,a,l),un(e,i)||(Oe=!0),e):(lr&42)===0?(Oe=!0,e.memoizedState=a):(e=Oy(),Rt.lanes|=e,pr|=e,i)}function Dg(e,i,a,l,h){var d=et.p;et.p=d!==0&&8>d?d:8;var v=F.T,T={};F.T=T,If(e,!1,i,a);try{var w=h(),L=F.S;if(L!==null&&L(T,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var G=XA(w,l);Qo(e,i,G,mn(e))}else Qo(e,i,l,mn(e))}catch(Q){Qo(e,i,{then:function(){},status:"rejected",reason:Q},mn())}finally{et.p=d,F.T=v}}function eS(){}function wf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Og(e).queue;Dg(e,h,i,ht,a===null?eS:function(){return Ng(e),a(l)})}function Og(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:ht},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ng(e){var i=Og(e).next.queue;Qo(e,i,{},mn())}function Rf(){return Fe(hl)}function Mg(){return ge().memoizedState}function xg(){return ge().memoizedState}function nS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=mn();e=ar(a);var l=or(i,e,a);l!==null&&(pn(l,i,a),jo(l,i,a)),i={cache:ef()},e.payload=i;return}i=i.return}}function iS(e,i,a){var l=mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Lu(e)?Pg(i,a):(a=Gh(e,i,a,l),a!==null&&(pn(a,e,l),kg(a,i,l)))}function Vg(e,i,a){var l=mn();Qo(e,i,a,l)}function Qo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Pg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,un(T,v))return Tu(e,i,h,0),Jt===null&&Eu(),!1}catch{}finally{}if(a=Gh(e,i,h,l),a!==null)return pn(a,e,l),kg(a,i,l),!0}return!1}function If(e,i,a,l){if(l={lane:2,revertLane:sd(),action:l,hasEagerState:!1,eagerState:null,next:null},Lu(e)){if(i)throw Error(s(479))}else i=Gh(e,a,l,2),i!==null&&pn(i,e,2)}function Lu(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function Pg(e,i){Ea=Mu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function kg(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,po(e,a)}}var zu={readContext:Fe,use:Vu,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce},Ug={readContext:Fe,use:Vu,useCallback:function(e,i){return tn().memoizedState=[e,i===void 0?null:i],e},useContext:Fe,useEffect:Eg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Uu(4194308,4,bg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Uu(4194308,4,e,i)},useInsertionEffect:function(e,i){Uu(4,2,e,i)},useMemo:function(e,i){var a=tn();i=i===void 0?null:i;var l=e();if(As){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=tn();if(a!==void 0){var h=a(i);if(As){on(!0);try{a(i)}finally{on(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=iS.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=tn();return e={current:e},i.memoizedState=e},useState:function(e){e=Tf(e);var i=e.queue,a=Vg.bind(null,Rt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(e,i){var a=tn();return bf(a,e,i)},useTransition:function(){var e=Tf(!1);return e=Dg.bind(null,Rt,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Rt,h=tn();if(jt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Jt===null)throw Error(s(349));(Ut&124)!==0||rg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Eg(ag.bind(null,l,d,e),[e]),l.flags|=2048,Aa(9,ku(),sg.bind(null,l,d,a,i),null),a},useId:function(){var e=tn(),i=Jt.identifierPrefix;if(jt){var a=Ni,l=Oi;a=(l&~(1<<32-He(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=xu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=ZA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Rf,useFormState:pg,useActionState:pg,useOptimistic:function(e){var i=tn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=If.bind(null,Rt,!0,a),a.dispatch=i,[e,i]},useMemoCache:_f,useCacheRefresh:function(){return tn().memoizedState=nS.bind(null,Rt)}},Lg={readContext:Fe,use:Vu,useCallback:Rg,useContext:Fe,useEffect:Tg,useImperativeHandle:wg,useInsertionEffect:Ag,useLayoutEffect:Sg,useMemo:Ig,useReducer:Pu,useRef:vg,useState:function(){return Pu(Vi)},useDebugValue:Sf,useDeferredValue:function(e,i){var a=ge();return Cg(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Pu(Vi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Go(e),i]},useSyncExternalStore:ig,useId:Mg,useHostTransitionStatus:Rf,useFormState:gg,useActionState:gg,useOptimistic:function(e,i){var a=ge();return ug(a,Yt,e,i)},useMemoCache:_f,useCacheRefresh:xg},rS={readContext:Fe,use:Vu,useCallback:Rg,useContext:Fe,useEffect:Tg,useImperativeHandle:wg,useInsertionEffect:Ag,useLayoutEffect:Sg,useMemo:Ig,useReducer:Ef,useRef:vg,useState:function(){return Ef(Vi)},useDebugValue:Sf,useDeferredValue:function(e,i){var a=ge();return Yt===null?bf(a,e,i):Cg(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Ef(Vi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Go(e),i]},useSyncExternalStore:ig,useId:Mg,useHostTransitionStatus:Rf,useFormState:_g,useActionState:_g,useOptimistic:function(e,i){var a=ge();return Yt!==null?ug(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:xg},Sa=null,Yo=0;function Bu(e){var i=Yo;return Yo+=1,Sa===null&&(Sa=[]),$p(Sa,e,i)}function $o(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ju(e,i){throw i.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function zg(e){var i=e._init;return i(e._payload)}function Bg(e){function i(V,O){if(e){var U=V.deletions;U===null?(V.deletions=[O],V.flags|=16):U.push(O)}}function a(V,O){if(!e)return null;for(;O!==null;)i(V,O),O=O.sibling;return null}function l(V){for(var O=new Map;V!==null;)V.key!==null?O.set(V.key,V):O.set(V.index,V),V=V.sibling;return O}function h(V,O){return V=Di(V,O),V.index=0,V.sibling=null,V}function d(V,O,U){return V.index=U,e?(U=V.alternate,U!==null?(U=U.index,U<O?(V.flags|=67108866,O):U):(V.flags|=67108866,O)):(V.flags|=1048576,O)}function v(V){return e&&V.alternate===null&&(V.flags|=67108866),V}function T(V,O,U,K){return O===null||O.tag!==6?(O=Qh(U,V.mode,K),O.return=V,O):(O=h(O,U),O.return=V,O)}function w(V,O,U,K){var ut=U.type;return ut===$?G(V,O,U.props.children,K,U.key):O!==null&&(O.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===b&&zg(ut)===O.type)?(O=h(O,U.props),$o(O,U),O.return=V,O):(O=Su(U.type,U.key,U.props,null,V.mode,K),$o(O,U),O.return=V,O)}function L(V,O,U,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Yh(U,V.mode,K),O.return=V,O):(O=h(O,U.children||[]),O.return=V,O)}function G(V,O,U,K,ut){return O===null||O.tag!==7?(O=ms(U,V.mode,K,ut),O.return=V,O):(O=h(O,U),O.return=V,O)}function Q(V,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Qh(""+O,V.mode,U),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case I:return U=Su(O.type,O.key,O.props,null,V.mode,U),$o(U,O),U.return=V,U;case B:return O=Yh(O,V.mode,U),O.return=V,O;case b:var K=O._init;return O=K(O._payload),Q(V,O,U)}if(re(O)||P(O))return O=ms(O,V.mode,U,null),O.return=V,O;if(typeof O.then=="function")return Q(V,Bu(O),U);if(O.$$typeof===lt)return Q(V,Iu(V,O),U);ju(V,O)}return null}function z(V,O,U,K){var ut=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ut!==null?null:T(V,O,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case I:return U.key===ut?w(V,O,U,K):null;case B:return U.key===ut?L(V,O,U,K):null;case b:return ut=U._init,U=ut(U._payload),z(V,O,U,K)}if(re(U)||P(U))return ut!==null?null:G(V,O,U,K,null);if(typeof U.then=="function")return z(V,O,Bu(U),K);if(U.$$typeof===lt)return z(V,O,Iu(V,U),K);ju(V,U)}return null}function j(V,O,U,K,ut){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return V=V.get(U)||null,T(O,V,""+K,ut);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case I:return V=V.get(K.key===null?U:K.key)||null,w(O,V,K,ut);case B:return V=V.get(K.key===null?U:K.key)||null,L(O,V,K,ut);case b:var Dt=K._init;return K=Dt(K._payload),j(V,O,U,K,ut)}if(re(K)||P(K))return V=V.get(U)||null,G(O,V,K,ut,null);if(typeof K.then=="function")return j(V,O,U,Bu(K),ut);if(K.$$typeof===lt)return j(V,O,U,Iu(O,K),ut);ju(O,K)}return null}function _t(V,O,U,K){for(var ut=null,Dt=null,ct=O,gt=O=0,Me=null;ct!==null&&gt<U.length;gt++){ct.index>gt?(Me=ct,ct=null):Me=ct.sibling;var zt=z(V,ct,U[gt],K);if(zt===null){ct===null&&(ct=Me);break}e&&ct&&zt.alternate===null&&i(V,ct),O=d(zt,O,gt),Dt===null?ut=zt:Dt.sibling=zt,Dt=zt,ct=Me}if(gt===U.length)return a(V,ct),jt&&gs(V,gt),ut;if(ct===null){for(;gt<U.length;gt++)ct=Q(V,U[gt],K),ct!==null&&(O=d(ct,O,gt),Dt===null?ut=ct:Dt.sibling=ct,Dt=ct);return jt&&gs(V,gt),ut}for(ct=l(ct);gt<U.length;gt++)Me=j(ct,V,gt,U[gt],K),Me!==null&&(e&&Me.alternate!==null&&ct.delete(Me.key===null?gt:Me.key),O=d(Me,O,gt),Dt===null?ut=Me:Dt.sibling=Me,Dt=Me);return e&&ct.forEach(function(br){return i(V,br)}),jt&&gs(V,gt),ut}function dt(V,O,U,K){if(U==null)throw Error(s(151));for(var ut=null,Dt=null,ct=O,gt=O=0,Me=null,zt=U.next();ct!==null&&!zt.done;gt++,zt=U.next()){ct.index>gt?(Me=ct,ct=null):Me=ct.sibling;var br=z(V,ct,zt.value,K);if(br===null){ct===null&&(ct=Me);break}e&&ct&&br.alternate===null&&i(V,ct),O=d(br,O,gt),Dt===null?ut=br:Dt.sibling=br,Dt=br,ct=Me}if(zt.done)return a(V,ct),jt&&gs(V,gt),ut;if(ct===null){for(;!zt.done;gt++,zt=U.next())zt=Q(V,zt.value,K),zt!==null&&(O=d(zt,O,gt),Dt===null?ut=zt:Dt.sibling=zt,Dt=zt);return jt&&gs(V,gt),ut}for(ct=l(ct);!zt.done;gt++,zt=U.next())zt=j(ct,V,gt,zt.value,K),zt!==null&&(e&&zt.alternate!==null&&ct.delete(zt.key===null?gt:zt.key),O=d(zt,O,gt),Dt===null?ut=zt:Dt.sibling=zt,Dt=zt);return e&&ct.forEach(function(sb){return i(V,sb)}),jt&&gs(V,gt),ut}function Xt(V,O,U,K){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case I:t:{for(var ut=U.key;O!==null;){if(O.key===ut){if(ut=U.type,ut===$){if(O.tag===7){a(V,O.sibling),K=h(O,U.props.children),K.return=V,V=K;break t}}else if(O.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===b&&zg(ut)===O.type){a(V,O.sibling),K=h(O,U.props),$o(K,U),K.return=V,V=K;break t}a(V,O);break}else i(V,O);O=O.sibling}U.type===$?(K=ms(U.props.children,V.mode,K,U.key),K.return=V,V=K):(K=Su(U.type,U.key,U.props,null,V.mode,K),$o(K,U),K.return=V,V=K)}return v(V);case B:t:{for(ut=U.key;O!==null;){if(O.key===ut)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(V,O.sibling),K=h(O,U.children||[]),K.return=V,V=K;break t}else{a(V,O);break}else i(V,O);O=O.sibling}K=Yh(U,V.mode,K),K.return=V,V=K}return v(V);case b:return ut=U._init,U=ut(U._payload),Xt(V,O,U,K)}if(re(U))return _t(V,O,U,K);if(P(U)){if(ut=P(U),typeof ut!="function")throw Error(s(150));return U=ut.call(U),dt(V,O,U,K)}if(typeof U.then=="function")return Xt(V,O,Bu(U),K);if(U.$$typeof===lt)return Xt(V,O,Iu(V,U),K);ju(V,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(V,O.sibling),K=h(O,U),K.return=V,V=K):(a(V,O),K=Qh(U,V.mode,K),K.return=V,V=K),v(V)):a(V,O)}return function(V,O,U,K){try{Yo=0;var ut=Xt(V,O,U,K);return Sa=null,ut}catch(ct){if(ct===zo||ct===Du)throw ct;var Dt=cn(29,ct,null,V.mode);return Dt.lanes=K,Dt.return=V,Dt}finally{}}}var ba=Bg(!0),jg=Bg(!1),In=X(null),ri=null;function ur(e){var i=e.alternate;J(Ae,Ae.current&1),J(In,e),ri===null&&(i===null||va.current!==null||i.memoizedState!==null)&&(ri=e)}function qg(e){if(e.tag===22){if(J(Ae,Ae.current),J(In,e),ri===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ri=e)}}else cr()}function cr(){J(Ae,Ae.current),J(In,In.current)}function Pi(e){nt(In),ri===e&&(ri=null),nt(Ae)}var Ae=X(0);function qu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||yd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Cf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Df={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=mn(),h=ar(l);h.payload=i,a!=null&&(h.callback=a),i=or(e,h,l),i!==null&&(pn(i,e,l),jo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=mn(),h=ar(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=or(e,h,l),i!==null&&(pn(i,e,l),jo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=mn(),l=ar(a);l.tag=2,i!=null&&(l.callback=i),i=or(e,l,a),i!==null&&(pn(i,e,a),jo(i,e,a))}};function Hg(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!No(a,l)||!No(h,d):!0}function Fg(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Df.enqueueReplaceState(i,i.state,null)}function Ss(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Hu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Gg(e){Hu(e)}function Kg(e){console.error(e)}function Qg(e){Hu(e)}function Fu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Yg(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Of(e,i,a){return a=ar(a),a.tag=3,a.payload={element:null},a.callback=function(){Fu(e,i)},a}function $g(e){return e=ar(e),e.tag=3,e}function Xg(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Yg(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Yg(i,a,l),typeof h!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function sS(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&ko(i,a,h,!0),a=In.current,a!==null){switch(a.tag){case 13:return ri===null?td():a.alternate===null&&oe===0&&(oe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===sf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),nd(e,l,h)),!1;case 22:return a.flags|=65536,l===sf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),nd(e,l,h)),!1}throw Error(s(435,a.tag))}return nd(e,l,h),td(),!1}if(jt)return i=In.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Zh&&(e=Error(s(422),{cause:l}),Po(Sn(e,a)))):(l!==Zh&&(i=Error(s(423),{cause:l}),Po(Sn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Sn(l,a),h=Of(e.stateNode,l,h),lf(e,h),oe!==4&&(oe=2)),!1;var d=Error(s(520),{cause:l});if(d=Sn(d,a),nl===null?nl=[d]:nl.push(d),oe!==4&&(oe=2),i===null)return!0;l=Sn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Of(a.stateNode,l,e),lf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gr===null||!gr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=$g(h),Xg(h,e,a,l),lf(a,h),!1}a=a.return}while(a!==null);return!1}var Zg=Error(s(461)),Oe=!1;function Ue(e,i,a,l){i.child=e===null?jg(i,null,a,l):ba(i,e.child,a,l)}function Wg(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Es(i),l=df(e,i,a,v,d,h),T=mf(),e!==null&&!Oe?(pf(e,i,h),ki(e,i,h)):(jt&&T&&$h(i),i.flags|=1,Ue(e,i,l,h),i.child)}function Jg(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Kh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ty(e,i,d,l,h)):(e=Su(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Lf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(v,l)&&e.ref===i.ref)return ki(e,i,h)}return i.flags|=1,e=Di(d,l),e.ref=i.ref,e.return=i,i.child=e}function ty(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(No(d,l)&&e.ref===i.ref)if(Oe=!1,i.pendingProps=l=d,Lf(e,h))(e.flags&131072)!==0&&(Oe=!0);else return i.lanes=e.lanes,ki(e,i,h)}return Nf(e,i,a,l,h)}function ey(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return ny(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cu(i,d!==null?d.cachePool:null),d!==null?tg(i,d):cf(),qg(i);else return i.lanes=i.childLanes=536870912,ny(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Cu(i,d.cachePool),tg(i,d),cr(),i.memoizedState=null):(e!==null&&Cu(i,null),cf(),cr());return Ue(e,i,h,a),i.child}function ny(e,i,a,l){var h=rf();return h=h===null?null:{parent:Te._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Cu(i,null),cf(),qg(i),e!==null&&ko(e,i,l,!0),null}function Gu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Nf(e,i,a,l,h){return Es(i),a=df(e,i,a,l,void 0,h),l=mf(),e!==null&&!Oe?(pf(e,i,h),ki(e,i,h)):(jt&&l&&$h(i),i.flags|=1,Ue(e,i,a,h),i.child)}function iy(e,i,a,l,h,d){return Es(i),i.updateQueue=null,a=ng(i,l,a,h),eg(e),l=mf(),e!==null&&!Oe?(pf(e,i,d),ki(e,i,d)):(jt&&l&&$h(i),i.flags|=1,Ue(e,i,a,d),i.child)}function ry(e,i,a,l,h){if(Es(i),i.stateNode===null){var d=ma,v=a.contextType;typeof v=="object"&&v!==null&&(d=Fe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Df,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},af(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Fe(v):ma,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Cf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Df.enqueueReplaceState(d,d.state,null),Ho(i,l,d,h),qo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,w=Ss(a,T);d.props=w;var L=d.context,G=a.contextType;v=ma,typeof G=="object"&&G!==null&&(v=Fe(G));var Q=a.getDerivedStateFromProps;G=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&Fg(i,d,l,v),sr=!1;var z=i.memoizedState;d.state=z,Ho(i,l,d,h),qo(),L=i.memoizedState,T||z!==L||sr?(typeof Q=="function"&&(Cf(i,a,Q,l),L=i.memoizedState),(w=sr||Hg(i,a,w,l,z,L,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,of(e,i),v=i.memoizedProps,G=Ss(a,v),d.props=G,Q=i.pendingProps,z=d.context,L=a.contextType,w=ma,typeof L=="object"&&L!==null&&(w=Fe(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||z!==w)&&Fg(i,d,l,w),sr=!1,z=i.memoizedState,d.state=z,Ho(i,l,d,h),qo();var j=i.memoizedState;v!==Q||z!==j||sr||e!==null&&e.dependencies!==null&&Ru(e.dependencies)?(typeof T=="function"&&(Cf(i,a,T,l),j=i.memoizedState),(G=sr||Hg(i,a,G,l,z,j,w)||e!==null&&e.dependencies!==null&&Ru(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=w,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Gu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=ba(i,e.child,null,h),i.child=ba(i,null,a,h)):Ue(e,i,a,h),i.memoizedState=d.state,e=i.child):e=ki(e,i,h),e}function sy(e,i,a,l){return Vo(),i.flags|=256,Ue(e,i,a,l),i.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(e){return{baseLanes:e,cachePool:Kp()}}function Vf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Cn),e}function ay(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ae.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(jt){if(h?ur(i):cr(),jt){var T=ae,w;if(w=T){t:{for(w=T,T=ii;w.nodeType!==8;){if(!T){T=null;break t}if(w=zn(w.nextSibling),w===null){T=null;break t}}T=w}T!==null?(i.memoizedState={dehydrated:T,treeContext:ps!==null?{id:Oi,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},w=cn(18,null,null,0),w.stateNode=T,w.return=i,i.child=w,Je=i,ae=null,w=!0):w=!1}w||_s(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return yd(T)?i.lanes=32:i.lanes=536870912,null;Pi(i)}return T=l.children,l=l.fallback,h?(cr(),h=i.mode,T=Ku({mode:"hidden",children:T},h),l=ms(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=xf(a),h.childLanes=Vf(e,v,a),i.memoizedState=Mf,l):(ur(i),Pf(i,T))}if(w=e.memoizedState,w!==null&&(T=w.dehydrated,T!==null)){if(d)i.flags&256?(ur(i),i.flags&=-257,i=kf(e,i,a)):i.memoizedState!==null?(cr(),i.child=e.child,i.flags|=128,i=null):(cr(),h=l.fallback,T=i.mode,l=Ku({mode:"visible",children:l.children},T),h=ms(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,ba(i,e.child,null,a),l=i.child,l.memoizedState=xf(a),l.childLanes=Vf(e,v,a),i.memoizedState=Mf,i=h);else if(ur(i),yd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Po({value:l,source:null,stack:null}),i=kf(e,i,a)}else if(Oe||ko(e,i,a,!1),v=(a&e.childLanes)!==0,Oe||v){if(v=Jt,v!==null&&(l=a&-a,l=(l&42)!==0?1:Zi(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,da(e,l),pn(v,e,l),Zg;T.data==="$?"||td(),i=kf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,ae=zn(T.nextSibling),Je=i,jt=!0,ys=null,ii=!1,e!==null&&(wn[Rn++]=Oi,wn[Rn++]=Ni,wn[Rn++]=ps,Oi=e.id,Ni=e.overflow,ps=i),i=Pf(i,l.children),i.flags|=4096);return i}return h?(cr(),h=l.fallback,T=i.mode,w=e.child,L=w.sibling,l=Di(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=Di(L,h):(h=ms(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=xf(a):(w=T.cachePool,w!==null?(L=Te._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=Kp(),T={baseLanes:T.baseLanes|a,cachePool:w}),h.memoizedState=T,h.childLanes=Vf(e,v,a),i.memoizedState=Mf,l):(ur(i),a=e.child,e=a.sibling,a=Di(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Pf(e,i){return i=Ku({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ku(e,i){return e=cn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function kf(e,i,a){return ba(i,e.child,null,a),e=Pf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function oy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Jh(e.return,i,a)}function Uf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function ly(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ue(e,i,l.children,a),l=Ae.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oy(e,a,i);else if(e.tag===19)oy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(J(Ae,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&qu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Uf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&qu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Uf(i,!0,a,null,d);break;case"together":Uf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ki(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),pr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(ko(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Di(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Di(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Lf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ru(e)))}function aS(e,i,a){switch(i.tag){case 3:Wt(i,i.stateNode.containerInfo),rr(i,Te,e.memoizedState.cache),Vo();break;case 27:case 5:Xi(i);break;case 4:Wt(i,i.stateNode.containerInfo);break;case 10:rr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ur(i),i.flags|=128,null):(a&i.child.childLanes)!==0?ay(e,i,a):(ur(i),e=ki(e,i,a),e!==null?e.sibling:null);ur(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(ko(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return ly(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(Ae,Ae.current),l)break;return null;case 22:case 23:return i.lanes=0,ey(e,i,a);case 24:rr(i,Te,e.memoizedState.cache)}return ki(e,i,a)}function uy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Oe=!0;else{if(!Lf(e,a)&&(i.flags&128)===0)return Oe=!1,aS(e,i,a);Oe=(e.flags&131072)!==0}else Oe=!1,jt&&(i.flags&1048576)!==0&&zp(i,wu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Kh(l)?(e=Ss(l,e),i.tag=1,i=ry(null,i,l,e,a)):(i.tag=0,i=Nf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===wt){i.tag=11,i=Wg(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=Jg(null,i,l,e,a);break t}}throw i=Ve(l)||l,Error(s(306,i,""))}}return i;case 0:return Nf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ss(l,i.pendingProps),ry(e,i,l,h,a);case 3:t:{if(Wt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,of(e,i),Ho(i,l,null,a);var v=i.memoizedState;if(l=v.cache,rr(i,Te,l),l!==d.cache&&tf(i,[Te],a,!0),qo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=sy(e,i,l,a);break t}else if(l!==h){h=Sn(Error(s(424)),i),Po(h),i=sy(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ae=zn(e.firstChild),Je=i,jt=!0,ys=null,ii=!0,a=jg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vo(),l===h){i=ki(e,i,a);break t}Ue(e,i,l,a)}i=i.child}return i;case 26:return Gu(e,i),e===null?(a=d_(i.type,null,i.pendingProps,null))?i.memoizedState=a:jt||(a=i.type,e=i.pendingProps,l=ac(Tt.current).createElement(a),l[_e]=i,l[de]=e,ze(l,a,e),ue(l),i.stateNode=l):i.memoizedState=d_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Xi(i),e===null&&jt&&(l=i.stateNode=c_(i.type,i.pendingProps,Tt.current),Je=i,ii=!0,h=ae,vr(i.type)?(_d=h,ae=zn(l.firstChild)):ae=h),Ue(e,i,i.pendingProps.children,a),Gu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&jt&&((h=l=ae)&&(l=VS(l,i.type,i.pendingProps,ii),l!==null?(i.stateNode=l,Je=i,ae=zn(l.firstChild),ii=!1,h=!0):h=!1),h||_s(i)),Xi(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,md(h,d)?l=null:v!==null&&md(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=df(e,i,WA,null,null,a),hl._currentValue=h),Gu(e,i),Ue(e,i,l,a),i.child;case 6:return e===null&&jt&&((e=a=ae)&&(a=PS(a,i.pendingProps,ii),a!==null?(i.stateNode=a,Je=i,ae=null,e=!0):e=!1),e||_s(i)),null;case 13:return ay(e,i,a);case 4:return Wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ba(i,null,l,a):Ue(e,i,l,a),i.child;case 11:return Wg(e,i,i.type,i.pendingProps,a);case 7:return Ue(e,i,i.pendingProps,a),i.child;case 8:return Ue(e,i,i.pendingProps.children,a),i.child;case 12:return Ue(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,rr(i,i.type,l.value),Ue(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Es(i),h=Fe(h),l=l(h),i.flags|=1,Ue(e,i,l,a),i.child;case 14:return Jg(e,i,i.type,i.pendingProps,a);case 15:return ty(e,i,i.type,i.pendingProps,a);case 19:return ly(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Ku(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Di(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return ey(e,i,a);case 24:return Es(i),l=Fe(Te),e===null?(h=rf(),h===null&&(h=Jt,d=ef(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},af(i),rr(i,Te,h)):((e.lanes&a)!==0&&(of(e,i),Ho(i,null,null,a),qo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),rr(i,Te,l)):(l=d.cache,rr(i,Te,l),l!==h.cache&&tf(i,[Te],a,!0))),Ue(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ui(e){e.flags|=4}function cy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!__(i)){if(i=In.current,i!==null&&((Ut&4194048)===Ut?ri!==null:(Ut&62914560)!==Ut&&(Ut&536870912)===0||i!==ri))throw Bo=sf,Qp;e.flags|=8192}}function Qu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?fo():536870912,e.lanes|=i,Ca|=i)}function Xo(e,i){if(!jt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function oS(e,i,a){var l=i.pendingProps;switch(Xh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(i),null;case 1:return ne(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),xi(Te),Gn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xo(i)?Ui(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qp())),ne(i),null;case 26:return a=i.memoizedState,e===null?(Ui(i),a!==null?(ne(i),cy(i,a)):(ne(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Ui(i),ne(i),cy(i,a)):(ne(i),i.flags&=-16777217):(e.memoizedProps!==l&&Ui(i),ne(i),i.flags&=-16777217),null;case 27:gi(i),a=Tt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ne(i),null}e=ft.current,xo(i)?Bp(i):(e=c_(h,l,a),i.stateNode=e,Ui(i))}return ne(i),null;case 5:if(gi(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ne(i),null}if(e=ft.current,xo(i))Bp(i);else{switch(h=ac(Tt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[_e]=i,e[de]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(ze(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ui(i)}}return ne(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Tt.current,xo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=Je,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||i_(e.nodeValue,a)),e||_s(i)}else e=ac(e).createTextNode(l),e[_e]=i,i.stateNode=e}return ne(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=xo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[_e]=i}else Vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ne(i),h=!1}else h=qp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Pi(i),i):(Pi(i),null)}if(Pi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Qu(i,i.updateQueue),ne(i),null;case 4:return Gn(),e===null&&ud(i.stateNode.containerInfo),ne(i),null;case 10:return xi(i.type),ne(i),null;case 19:if(nt(Ae),h=i.memoizedState,h===null)return ne(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Xo(h,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=qu(e),d!==null){for(i.flags|=128,Xo(h,!1),e=d.updateQueue,i.updateQueue=e,Qu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Lp(a,e),a=a.sibling;return J(Ae,Ae.current&1|2),i.child}e=e.sibling}h.tail!==null&&yn()>Xu&&(i.flags|=128,l=!0,Xo(h,!1),i.lanes=4194304)}else{if(!l)if(e=qu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Qu(i,e),Xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!jt)return ne(i),null}else 2*yn()-h.renderingStartTime>Xu&&a!==536870912&&(i.flags|=128,l=!0,Xo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=yn(),i.sibling=null,e=Ae.current,J(Ae,l?e&1|2:e&1),i):(ne(i),null);case 22:case 23:return Pi(i),hf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ne(i),i.subtreeFlags&6&&(i.flags|=8192)):ne(i),a=i.updateQueue,a!==null&&Qu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&nt(Ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),xi(Te),ne(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function lS(e,i){switch(Xh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return xi(Te),Gn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return gi(i),null;case 13:if(Pi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Vo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(Ae),null;case 4:return Gn(),null;case 10:return xi(i.type),null;case 22:case 23:return Pi(i),hf(),e!==null&&nt(Ts),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return xi(Te),null;case 25:return null;default:return null}}function hy(e,i){switch(Xh(i),i.tag){case 3:xi(Te),Gn();break;case 26:case 27:case 5:gi(i);break;case 4:Gn();break;case 13:Pi(i);break;case 19:nt(Ae);break;case 10:xi(i.type);break;case 22:case 23:Pi(i),hf(),e!==null&&nt(Ts);break;case 24:xi(Te)}}function Zo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Zt(i,i.return,T)}}function hr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var w=a,L=T;try{L()}catch(G){Zt(h,w,G)}}}l=l.next}while(l!==d)}}catch(G){Zt(i,i.return,G)}}function fy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Jp(i,a)}catch(l){Zt(e,e.return,l)}}}function dy(e,i,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Zt(e,i,l)}}function Wo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Zt(e,i,h)}}function si(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Zt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Zt(e,i,h)}else a.current=null}function my(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Zt(e,e.return,h)}}function zf(e,i,a){try{var l=e.stateNode;DS(l,e.type,a,i),l[de]=i}catch(h){Zt(e,e.return,h)}}function py(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vr(e.type)||e.tag===4}function Bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||py(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=sc));else if(l!==4&&(l===27&&vr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(jf(e,i,a),e=e.sibling;e!==null;)jf(e,i,a),e=e.sibling}function Yu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&vr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yu(e,i,a),e=e.sibling;e!==null;)Yu(e,i,a),e=e.sibling}function gy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);ze(i,l,a),i[_e]=e,i[de]=a}catch(d){Zt(e,e.return,d)}}var Li=!1,he=!1,qf=!1,yy=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function uS(e,i){if(e=e.containerInfo,fd=fc,e=Cp(e),zh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,w=-1,L=0,G=0,Q=e,z=null;e:for(;;){for(var j;Q!==a||h!==0&&Q.nodeType!==3||(T=v+h),Q!==d||l!==0&&Q.nodeType!==3||(w=v+l),Q.nodeType===3&&(v+=Q.nodeValue.length),(j=Q.firstChild)!==null;)z=Q,Q=j;for(;;){if(Q===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++G===l&&(w=v),(j=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=j}a=T===-1||w===-1?null:{start:T,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(dd={focusedElem:e,selectionRange:a},fc=!1,Ne=i;Ne!==null;)if(i=Ne,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ne=e;else for(;Ne!==null;){switch(i=Ne,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var _t=Ss(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(_t,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(dt){Zt(a,a.return,dt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)gd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ne=e;break}Ne=i.return}}function _y(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fr(e,a),l&4&&Zo(5,a);break;case 1:if(fr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Zt(a,a.return,v)}else{var h=Ss(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Zt(a,a.return,v)}}l&64&&fy(a),l&512&&Wo(a,a.return);break;case 3:if(fr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Jp(e,i)}catch(v){Zt(a,a.return,v)}}break;case 27:i===null&&l&4&&gy(a);case 26:case 5:fr(e,a),i===null&&l&4&&my(a),l&512&&Wo(a,a.return);break;case 12:fr(e,a);break;case 13:fr(e,a),l&4&&Ty(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_S.bind(null,a),kS(e,a))));break;case 22:if(l=a.memoizedState!==null||Li,!l){i=i!==null&&i.memoizedState!==null||he,h=Li;var d=he;Li=l,(he=i)&&!d?dr(e,a,(a.subtreeFlags&8772)!==0):fr(e,a),Li=h,he=d}break;case 30:break;default:fr(e,a)}}function vy(e){var i=e.alternate;i!==null&&(e.alternate=null,vy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&tr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ee=null,en=!1;function zi(e,i,a){for(a=a.child;a!==null;)Ey(e,i,a),a=a.sibling}function Ey(e,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 26:he||si(a,i),zi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||si(a,i);var l=ee,h=en;vr(a.type)&&(ee=a.stateNode,en=!1),zi(e,i,a),ol(a.stateNode),ee=l,en=h;break;case 5:he||si(a,i);case 6:if(l=ee,h=en,ee=null,zi(e,i,a),ee=l,en=h,ee!==null)if(en)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(a.stateNode)}catch(d){Zt(a,i,d)}else try{ee.removeChild(a.stateNode)}catch(d){Zt(a,i,d)}break;case 18:ee!==null&&(en?(e=ee,l_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pl(e)):l_(ee,a.stateNode));break;case 4:l=ee,h=en,ee=a.stateNode.containerInfo,en=!0,zi(e,i,a),ee=l,en=h;break;case 0:case 11:case 14:case 15:he||hr(2,a,i),he||hr(4,a,i),zi(e,i,a);break;case 1:he||(si(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&dy(a,i,l)),zi(e,i,a);break;case 21:zi(e,i,a);break;case 22:he=(l=he)||a.memoizedState!==null,zi(e,i,a),he=l;break;default:zi(e,i,a)}}function Ty(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(a){Zt(i,i.return,a)}}function cS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new yy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new yy),i;default:throw Error(s(435,e.tag))}}function Hf(e,i){var a=cS(e);i.forEach(function(l){var h=vS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function hn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(vr(T.type)){ee=T.stateNode,en=!1;break t}break;case 5:ee=T.stateNode,en=!1;break t;case 3:case 4:ee=T.stateNode.containerInfo,en=!0;break t}T=T.return}if(ee===null)throw Error(s(160));Ey(d,v,h),ee=null,en=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ay(i,e),i=i.sibling}var Ln=null;function Ay(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(i,e),fn(e),l&4&&(hr(3,e,e.return),Zo(3,e),hr(5,e,e.return));break;case 1:hn(i,e),fn(e),l&512&&(he||a===null||si(a,a.return)),l&64&&Li&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Ln;if(hn(i,e),fn(e),l&512&&(he||a===null||si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Wr]||d[_e]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),ze(d,l,a),d[_e]=e,ue(d),l=d;break t;case"link":var v=g_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;case"meta":if(v=g_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[_e]=e,ue(d),l=d}e.stateNode=l}else y_(h,e.type,e.stateNode);else e.stateNode=p_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?y_(h,e.type,e.stateNode):p_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:hn(i,e),fn(e),l&512&&(he||a===null||si(a,a.return)),a!==null&&l&4&&zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(hn(i,e),fn(e),l&512&&(he||a===null||si(a,a.return)),e.flags&32){h=e.stateNode;try{vn(h,"")}catch(j){Zt(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,zf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(qf=!0);break;case 6:if(hn(i,e),fn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){Zt(e,e.return,j)}}break;case 3:if(uc=null,h=Ln,Ln=oc(i.containerInfo),hn(i,e),Ln=h,fn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(i.containerInfo)}catch(j){Zt(e,e.return,j)}qf&&(qf=!1,Sy(e));break;case 4:l=Ln,Ln=oc(e.stateNode.containerInfo),hn(i,e),fn(e),Ln=l;break;case 12:hn(i,e),fn(e);break;case 13:hn(i,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($f=yn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hf(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=Li,G=he;if(Li=L||h,he=G||w,hn(i,e),he=G,Li=L,fn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Li||he||bs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=w.stateNode;var Q=w.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){Zt(w,w.return,j)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(j){Zt(w,w.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hf(e,a))));break;case 19:hn(i,e),fn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hf(e,l)));break;case 30:break;case 21:break;default:hn(i,e),fn(e)}}function fn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(py(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Bf(e);Yu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(vn(v,""),a.flags&=-33);var T=Bf(e);Yu(e,T,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Bf(e);jf(e,L,w);break;default:throw Error(s(161))}}catch(G){Zt(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Sy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Sy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function fr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)_y(e,i.alternate,i),i=i.sibling}function bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:hr(4,i,i.return),bs(i);break;case 1:si(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&dy(i,i.return,a),bs(i);break;case 27:ol(i.stateNode);case 26:case 5:si(i,i.return),bs(i);break;case 22:i.memoizedState===null&&bs(i);break;case 30:bs(i);break;default:bs(i)}e=e.sibling}}function dr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:dr(h,d,a),Zo(4,d);break;case 1:if(dr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Zt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)Wp(w[h],T)}catch(L){Zt(l,l.return,L)}}a&&v&64&&fy(d),Wo(d,d.return);break;case 27:gy(d);case 26:case 5:dr(h,d,a),a&&l===null&&v&4&&my(d),Wo(d,d.return);break;case 12:dr(h,d,a);break;case 13:dr(h,d,a),a&&v&4&&Ty(h,d);break;case 22:d.memoizedState===null&&dr(h,d,a),Wo(d,d.return);break;case 30:break;default:dr(h,d,a)}i=i.sibling}}function Ff(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Uo(a))}function Gf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Uo(e))}function ai(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)by(e,i,a,l),i=i.sibling}function by(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ai(e,i,a,l),h&2048&&Zo(9,i);break;case 1:ai(e,i,a,l);break;case 3:ai(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Uo(e)));break;case 12:if(h&2048){ai(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Zt(i,i.return,w)}}else ai(e,i,a,l);break;case 13:ai(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ai(e,i,a,l):Jo(e,i):d._visibility&2?ai(e,i,a,l):(d._visibility|=2,wa(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Ff(v,i);break;case 24:ai(e,i,a,l),h&2048&&Gf(i.alternate,i);break;default:ai(e,i,a,l)}}function wa(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:wa(d,v,T,w,h),Zo(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?wa(d,v,T,w,h):Jo(d,v):(G._visibility|=2,wa(d,v,T,w,h)),h&&L&2048&&Ff(v.alternate,v);break;case 24:wa(d,v,T,w,h),h&&L&2048&&Gf(v.alternate,v);break;default:wa(d,v,T,w,h)}i=i.sibling}}function Jo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:Jo(a,l),h&2048&&Ff(l.alternate,l);break;case 24:Jo(a,l),h&2048&&Gf(l.alternate,l);break;default:Jo(a,l)}i=i.sibling}}var tl=8192;function Ra(e){if(e.subtreeFlags&tl)for(e=e.child;e!==null;)wy(e),e=e.sibling}function wy(e){switch(e.tag){case 26:Ra(e),e.flags&tl&&e.memoizedState!==null&&$S(Ln,e.memoizedState,e.memoizedProps);break;case 5:Ra(e);break;case 3:case 4:var i=Ln;Ln=oc(e.stateNode.containerInfo),Ra(e),Ln=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=tl,tl=16777216,Ra(e),tl=i):Ra(e));break;default:Ra(e)}}function Ry(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function el(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,Cy(l,e)}Ry(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Iy(e),e=e.sibling}function Iy(e){switch(e.tag){case 0:case 11:case 15:el(e),e.flags&2048&&hr(9,e,e.return);break;case 3:el(e);break;case 12:el(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,$u(e)):el(e);break;default:el(e)}}function $u(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,Cy(l,e)}Ry(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:hr(8,i,i.return),$u(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,$u(i));break;default:$u(i)}e=e.sibling}}function Cy(e,i){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:hr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ne=l;else t:for(a=e;Ne!==null;){l=Ne;var h=l.sibling,d=l.return;if(vy(l),l===a){Ne=null;break t}if(h!==null){h.return=d,Ne=h;break t}Ne=d}}}var hS={getCacheForType:function(e){var i=Fe(Te),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},fS=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Jt=null,Ot=null,Ut=0,Kt=0,dn=null,mr=!1,Ia=!1,Kf=!1,Bi=0,oe=0,pr=0,ws=0,Qf=0,Cn=0,Ca=0,nl=null,nn=null,Yf=!1,$f=0,Xu=1/0,Zu=null,gr=null,Le=0,yr=null,Da=null,Oa=0,Xf=0,Zf=null,Dy=null,il=0,Wf=null;function mn(){if((Gt&2)!==0&&Ut!==0)return Ut&-Ut;if(F.T!==null){var e=ya;return e!==0?e:sd()}return Wi()}function Oy(){Cn===0&&(Cn=(Ut&536870912)===0||jt?ho():536870912);var e=In.current;return e!==null&&(e.flags|=32),Cn}function pn(e,i,a){(e===Jt&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(Na(e,0),_r(e,Ut,Cn,!1)),_i(e,a),((Gt&2)===0||e!==Jt)&&(e===Jt&&((Gt&2)===0&&(ws|=a),oe===4&&_r(e,Ut,Cn,!1)),oi(e))}function Ny(e,i,a){if((Gt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Zr(e,i),h=l?pS(e,i):ed(e,i,!0),d=l;do{if(h===0){Ia&&!l&&_r(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!dS(a)){h=ed(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=nl;var w=T.current.memoizedState.isDehydrated;if(w&&(Na(T,v).flags|=256),v=ed(T,v,!1),v!==2){if(Kf&&!w){T.errorRecoveryDisabledLanes|=d,ws|=d,h=4;break t}d=nn,nn=h,d!==null&&(nn===null?nn=d:nn.push.apply(nn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Na(e,0),_r(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:_r(l,i,Cn,!mr);break t;case 2:nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=$f+300-yn(),10<h)){if(_r(l,i,Cn,!mr),Ys(l,0,!0)!==0)break t;l.timeoutHandle=a_(My.bind(null,l,a,nn,Zu,Yf,i,Cn,ws,Ca,mr,d,2,-0,0),h);break t}My(l,a,nn,Zu,Yf,i,Cn,ws,Ca,mr,d,0,-0,0)}}break}while(!0);oi(e)}function My(e,i,a,l,h,d,v,T,w,L,G,Q,z,j){if(e.timeoutHandle=-1,Q=i.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(cl={stylesheets:null,count:0,unsuspend:YS},wy(i),Q=XS(),Q!==null)){e.cancelPendingCommit=Q(zy.bind(null,e,i,d,a,l,h,v,T,w,G,1,z,j)),_r(e,d,v,!L);return}zy(e,i,d,a,l,h,v,T,w)}function dS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!un(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(e,i,a,l){i&=~Qf,i&=~ws,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-He(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Kn(e,a,i)}function Wu(){return(Gt&6)===0?(rl(0),!1):!0}function Jf(){if(Ot!==null){if(Kt===0)var e=Ot.return;else e=Ot,Mi=vs=null,gf(e),Sa=null,Yo=0,e=Ot;for(;e!==null;)hy(e.alternate,e),e=e.return;Ot=null}}function Na(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,NS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Jf(),Jt=e,Ot=a=Di(e.current,null),Ut=i,Kt=0,dn=null,mr=!1,Ia=Zr(e,i),Kf=!1,Ca=Cn=Qf=ws=pr=oe=0,nn=nl=null,Yf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-He(l),d=1<<h;i|=e[h],l&=~d}return Bi=i,Eu(),a}function xy(e,i){Rt=null,F.H=zu,i===zo||i===Du?(i=Xp(),Kt=3):i===Qp?(i=Xp(),Kt=4):Kt=i===Zg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,dn=i,Ot===null&&(oe=1,Fu(e,Sn(i,e.current)))}function Vy(){var e=F.H;return F.H=zu,e===null?zu:e}function Py(){var e=F.A;return F.A=hS,e}function td(){oe=4,mr||(Ut&4194048)!==Ut&&In.current!==null||(Ia=!0),(pr&134217727)===0&&(ws&134217727)===0||Jt===null||_r(Jt,Ut,Cn,!1)}function ed(e,i,a){var l=Gt;Gt|=2;var h=Vy(),d=Py();(Jt!==e||Ut!==i)&&(Zu=null,Na(e,i)),i=!1;var v=oe;t:do try{if(Kt!==0&&Ot!==null){var T=Ot,w=dn;switch(Kt){case 8:Jf(),v=6;break t;case 3:case 2:case 9:case 6:In.current===null&&(i=!0);var L=Kt;if(Kt=0,dn=null,Ma(e,T,w,L),a&&Ia){v=0;break t}break;default:L=Kt,Kt=0,dn=null,Ma(e,T,w,L)}}mS(),v=oe;break}catch(G){xy(e,G)}while(!0);return i&&e.shellSuspendCounter++,Mi=vs=null,Gt=l,F.H=h,F.A=d,Ot===null&&(Jt=null,Ut=0,Eu()),v}function mS(){for(;Ot!==null;)ky(Ot)}function pS(e,i){var a=Gt;Gt|=2;var l=Vy(),h=Py();Jt!==e||Ut!==i?(Zu=null,Xu=yn()+500,Na(e,i)):Ia=Zr(e,i);t:do try{if(Kt!==0&&Ot!==null){i=Ot;var d=dn;e:switch(Kt){case 1:Kt=0,dn=null,Ma(e,i,d,1);break;case 2:case 9:if(Yp(d)){Kt=0,dn=null,Uy(i);break}i=function(){Kt!==2&&Kt!==9||Jt!==e||(Kt=7),oi(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:Yp(d)?(Kt=0,dn=null,Uy(i)):(Kt=0,dn=null,Ma(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var T=Ot;if(!v||__(v)){Kt=0,dn=null;var w=T.sibling;if(w!==null)Ot=w;else{var L=T.return;L!==null?(Ot=L,Ju(L)):Ot=null}break e}}Kt=0,dn=null,Ma(e,i,d,5);break;case 6:Kt=0,dn=null,Ma(e,i,d,6);break;case 8:Jf(),oe=6;break t;default:throw Error(s(462))}}gS();break}catch(G){xy(e,G)}while(!0);return Mi=vs=null,F.H=l,F.A=h,Gt=a,Ot!==null?0:(Jt=null,Ut=0,Eu(),oe)}function gS(){for(;Ot!==null&&!oo();)ky(Ot)}function ky(e){var i=uy(e.alternate,e,Bi);e.memoizedProps=e.pendingProps,i===null?Ju(e):Ot=i}function Uy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=iy(a,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=iy(a,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:gf(i);default:hy(a,i),i=Ot=Lp(i,Bi),i=uy(a,i,Bi)}e.memoizedProps=e.pendingProps,i===null?Ju(e):Ot=i}function Ma(e,i,a,l){Mi=vs=null,gf(i),Sa=null,Yo=0;var h=i.return;try{if(sS(e,h,i,a,Ut)){oe=1,Fu(e,Sn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;oe=1,Fu(e,Sn(a,e.current)),Ot=null;return}i.flags&32768?(jt||l===1?e=!0:Ia||(Ut&536870912)!==0?e=!1:(mr=e=!0,(l===2||l===9||l===3||l===6)&&(l=In.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ly(i,e)):Ju(i)}function Ju(e){var i=e;do{if((i.flags&32768)!==0){Ly(i,mr);return}e=i.return;var a=oS(i.alternate,i,Bi);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);oe===0&&(oe=5)}function Ly(e,i){do{var a=lS(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);oe=6,Ot=null}function zy(e,i,a,l,h,d,v,T,w){e.cancelPendingCommit=null;do tc();while(Le!==0);if((Gt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Fh,mo(e,a,d,v,T,w),e===Jt&&(Ot=Jt=null,Ut=0),Da=i,yr=e,Oa=a,Xf=d,Zf=h,Dy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ES(Qr,function(){return Fy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=et.p,et.p=2,v=Gt,Gt|=4;try{uS(e,i,a)}finally{Gt=v,et.p=h,F.T=l}}Le=1,By(),jy(),qy()}}function By(){if(Le===1){Le=0;var e=yr,i=Da,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=et.p;et.p=2;var h=Gt;Gt|=4;try{Ay(i,e);var d=dd,v=Cp(e.containerInfo),T=d.focusedElem,w=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Ip(T.ownerDocument.documentElement,T)){if(w!==null&&zh(T)){var L=w.start,G=w.end;if(G===void 0&&(G=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(G,T.value.length);else{var Q=T.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var j=z.getSelection(),_t=T.textContent.length,dt=Math.min(w.start,_t),Xt=w.end===void 0?dt:Math.min(w.end,_t);!j.extend&&dt>Xt&&(v=Xt,Xt=dt,dt=v);var V=Rp(T,dt),O=Rp(T,Xt);if(V&&O&&(j.rangeCount!==1||j.anchorNode!==V.node||j.anchorOffset!==V.offset||j.focusNode!==O.node||j.focusOffset!==O.offset)){var U=Q.createRange();U.setStart(V.node,V.offset),j.removeAllRanges(),dt>Xt?(j.addRange(U),j.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),j.addRange(U))}}}}for(Q=[],j=T;j=j.parentNode;)j.nodeType===1&&Q.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Q.length;T++){var K=Q[T];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}fc=!!fd,dd=fd=null}finally{Gt=h,et.p=l,F.T=a}}e.current=i,Le=2}}function jy(){if(Le===2){Le=0;var e=yr,i=Da,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=et.p;et.p=2;var h=Gt;Gt|=4;try{_y(e,i.alternate,i)}finally{Gt=h,et.p=l,F.T=a}}Le=3}}function qy(){if(Le===4||Le===3){Le=0,$l();var e=yr,i=Da,a=Oa,l=Dy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Le=5:(Le=0,Da=yr=null,Hy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(gr=null),$s(a),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(se,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=et.p,et.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{F.T=i,et.p=h}}(Oa&3)!==0&&tc(),oi(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Wf?il++:(il=0,Wf=e):il=0,rl(0)}}function Hy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Uo(i)))}function tc(e){return By(),jy(),qy(),Fy()}function Fy(){if(Le!==5)return!1;var e=yr,i=Xf;Xf=0;var a=$s(Oa),l=F.T,h=et.p;try{et.p=32>a?32:a,F.T=null,a=Zf,Zf=null;var d=yr,v=Oa;if(Le=0,Da=yr=null,Oa=0,(Gt&6)!==0)throw Error(s(331));var T=Gt;if(Gt|=4,Iy(d.current),by(d,d.current,v,a),Gt=T,rl(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(se,d)}catch{}return!0}finally{et.p=h,F.T=l,Hy(e,i)}}function Gy(e,i,a){i=Sn(a,i),i=Of(e.stateNode,i,2),e=or(e,i,2),e!==null&&(_i(e,2),oi(e))}function Zt(e,i,a){if(e.tag===3)Gy(e,e,a);else for(;i!==null;){if(i.tag===3){Gy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gr===null||!gr.has(l))){e=Sn(a,e),a=$g(2),l=or(i,a,2),l!==null&&(Xg(a,l,i,e),_i(l,2),oi(l));break}}i=i.return}}function nd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new fS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Kf=!0,h.add(a),e=yS.bind(null,e,i,a),i.then(e,e))}function yS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(Ut&a)===a&&(oe===4||oe===3&&(Ut&62914560)===Ut&&300>yn()-$f?(Gt&2)===0&&Na(e,0):Qf|=a,Ca===Ut&&(Ca=0)),oi(e)}function Ky(e,i){i===0&&(i=fo()),e=da(e,i),e!==null&&(_i(e,i),oi(e))}function _S(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Ky(e,a)}function vS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Ky(e,a)}function ES(e,i){return Gr(e,i)}var ec=null,xa=null,id=!1,nc=!1,rd=!1,Rs=0;function oi(e){e!==xa&&e.next===null&&(xa===null?ec=xa=e:xa=xa.next=e),nc=!0,id||(id=!0,AS())}function rl(e,i){if(!rd&&nc){rd=!0;do for(var a=!1,l=ec;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-He(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Xy(l,d))}else d=Ut,d=Ys(l,l===Jt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Zr(l,d)||(a=!0,Xy(l,d));l=l.next}while(a);rd=!1}}function TS(){Qy()}function Qy(){nc=id=!1;var e=0;Rs!==0&&(OS()&&(e=Rs),Rs=0);for(var i=yn(),a=null,l=ec;l!==null;){var h=l.next,d=Yy(l,i);d===0?(l.next=null,a===null?ec=h:a.next=h,h===null&&(xa=a)):(a=l,(e!==0||(d&3)!==0)&&(nc=!0)),l=h}rl(e)}function Yy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-He(d),T=1<<v,w=h[v];w===-1?((T&a)===0||(T&l)!==0)&&(h[v]=co(T,i)):w<=i&&(e.expiredLanes|=T),d&=~T}if(i=Jt,a=Ut,a=Ys(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Kr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Kr(l),$s(a)){case 2:case 8:a=Ks;break;case 32:a=Qr;break;case 268435456:a=Qs;break;default:a=Qr}return l=$y.bind(null,e),a=Gr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Kr(l),e.callbackPriority=2,e.callbackNode=null,2}function $y(e,i){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var l=Ut;return l=Ys(e,e===Jt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ny(e,l,i),Yy(e,yn()),e.callbackNode!=null&&e.callbackNode===a?$y.bind(null,e):null)}function Xy(e,i){if(tc())return null;Ny(e,i,!0)}function AS(){MS(function(){(Gt&6)!==0?Gr(lo,TS):Qy()})}function sd(){return Rs===0&&(Rs=ho()),Rs}function Zy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ea(""+e)}function Wy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function SS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Zy((h[de]||null).action),v=l.submitter;v&&(i=(i=v[de]||null)?Zy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new na("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Rs!==0){var w=v?Wy(h,v):new FormData(h);wf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(T.preventDefault(),w=v?Wy(h,v):new FormData(h),wf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var ad=0;ad<Hh.length;ad++){var od=Hh[ad],bS=od.toLowerCase(),wS=od[0].toUpperCase()+od.slice(1);Un(bS,"on"+wS)}Un(Np,"onAnimationEnd"),Un(Mp,"onAnimationIteration"),Un(xp,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(qA,"onTransitionRun"),Un(HA,"onTransitionStart"),Un(FA,"onTransitionCancel"),Un(Vp,"onTransitionEnd"),Ei("onMouseEnter",["mouseout","mouseover"]),Ei("onMouseLeave",["mouseout","mouseover"]),Ei("onPointerEnter",["pointerout","pointerover"]),Ei("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function Jy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],w=T.instance,L=T.currentTarget;if(T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){Hu(G)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(T=l[v],w=T.instance,L=T.currentTarget,T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){Hu(G)}h.currentTarget=null,d=w}}}}function Nt(e,i){var a=i[go];a===void 0&&(a=i[go]=new Set);var l=e+"__bubble";a.has(l)||(t_(i,e,2,!1),a.add(l))}function ld(e,i,a){var l=0;i&&(l|=4),t_(a,e,l,i)}var ic="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[ic]){e[ic]=!0,yo.forEach(function(a){a!=="selectionchange"&&(RS.has(a)||ld(a,!1,e),ld(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ic]||(i[ic]=!0,ld("selectionchange",!1,i))}}function t_(e,i,a,l){switch(b_(i)){case 2:var h=JS;break;case 8:h=tb;break;default:h=Sd}a=h.bind(null,i,a,e),h=void 0,!Tn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function cd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=vi(T),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}T=T.parentNode}}l=l.return}su(function(){var L=d,G=En(a),Q=[];t:{var z=Pp.get(e);if(z!==void 0){var j=na,_t=e;switch(e){case"keypress":if(Wn(a)===0)break t;case"keydown":case"keyup":j=la;break;case"focusin":_t="focus",j=sa;break;case"focusout":_t="blur",j=sa;break;case"beforeblur":case"afterblur":j=sa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=An;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=du;break;case Np:case Mp:case xp:j=aa;break;case Vp:j=pu;break;case"scroll":case"scrollend":j=au;break;case"wheel":j=ua;break;case"copy":case"cut":case"paste":j=oa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Do;break;case"toggle":case"beforetoggle":j=yu}var dt=(i&4)!==0,Xt=!dt&&(e==="scroll"||e==="scrollend"),V=dt?z!==null?z+"Capture":null:z;dt=[];for(var O=L,U;O!==null;){var K=O;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||V===null||(K=ss(O,V),K!=null&&dt.push(al(O,K,U))),Xt)break;O=O.return}0<dt.length&&(z=new j(z,_t,null,a,G),Q.push({event:z,listeners:dt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Si&&(_t=a.relatedTarget||a.fromElement)&&(vi(_t)||_t[_n]))break t;if((j||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,j?(_t=a.relatedTarget||a.toElement,j=L,_t=_t?vi(_t):null,_t!==null&&(Xt=u(_t),dt=_t.tag,_t!==Xt||dt!==5&&dt!==27&&dt!==6)&&(_t=null)):(j=null,_t=L),j!==_t)){if(dt=An,K="onMouseLeave",V="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(dt=Do,K="onPointerLeave",V="onPointerEnter",O="pointer"),Xt=j==null?z:Yn(j),U=_t==null?z:Yn(_t),z=new dt(K,O+"leave",j,a,G),z.target=Xt,z.relatedTarget=U,K=null,vi(G)===L&&(dt=new dt(V,O+"enter",_t,a,G),dt.target=U,dt.relatedTarget=Xt,K=dt),Xt=K,j&&_t)e:{for(dt=j,V=_t,O=0,U=dt;U;U=Va(U))O++;for(U=0,K=V;K;K=Va(K))U++;for(;0<O-U;)dt=Va(dt),O--;for(;0<U-O;)V=Va(V),U--;for(;O--;){if(dt===V||V!==null&&dt===V.alternate)break e;dt=Va(dt),V=Va(V)}dt=null}else dt=null;j!==null&&e_(Q,z,j,dt,!1),_t!==null&&Xt!==null&&e_(Q,Xt,_t,dt,!0)}}t:{if(z=L?Yn(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var ut=Ep;else if(Ee(z))if(Tp)ut=zA;else{ut=UA;var Dt=kA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&Ao(L.elementType)&&(ut=Ep):ut=LA;if(ut&&(ut=ut(e,L))){Ci(Q,ut,a,G);break t}Dt&&Dt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&nr(z,"number",z.value)}switch(Dt=L?Yn(L):window,e){case"focusin":(Ee(Dt)||Dt.contentEditable==="true")&&(ca=Dt,Bh=L,Mo=null);break;case"focusout":Mo=Bh=ca=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,Dp(Q,a,G);break;case"selectionchange":if(jA)break;case"keydown":case"keyup":Dp(Q,a,G)}var ct;if(ei)t:{switch(e){case"compositionstart":var gt="onCompositionStart";break t;case"compositionend":gt="onCompositionEnd";break t;case"compositionupdate":gt="onCompositionUpdate";break t}gt=void 0}else Pt?q(e,a)&&(gt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(_&&a.locale!=="ko"&&(Pt||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Pt&&(ct=bo()):(Zn=G,ir="value"in Zn?Zn.value:Zn.textContent,Pt=!0)),Dt=rc(L,gt),0<Dt.length&&(gt=new Io(gt,e,null,a,G),Q.push({event:gt,listeners:Dt}),ct?gt.data=ct:(ct=tt(a),ct!==null&&(gt.data=ct)))),(ct=p?ve(e,a):kt(e,a))&&(gt=rc(L,"onBeforeInput"),0<gt.length&&(Dt=new Io("onBeforeInput","beforeinput",null,a,G),Q.push({event:Dt,listeners:gt}),Dt.data=ct)),SS(Q,e,L,a,G)}Jy(Q,i)})}function al(e,i,a){return{instance:e,listener:i,currentTarget:a}}function rc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ss(e,a),h!=null&&l.unshift(al(e,h,d)),h=ss(e,i),h!=null&&l.push(al(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,w=T.alternate,L=T.stateNode;if(T=T.tag,w!==null&&w===l)break;T!==5&&T!==26&&T!==27||L===null||(w=L,h?(L=ss(a,d),L!=null&&v.unshift(al(a,L,w))):h||(L=ss(a,d),L!=null&&v.push(al(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var IS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function n_(e){return(typeof e=="string"?e:""+e).replace(IS,`
`).replace(CS,"")}function i_(e,i){return i=n_(i),n_(e)===i}function sc(){}function $t(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vn(e,""+l);break;case"className":$n(e,"class",l);break;case"tabIndex":$n(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,l);break;case"style":To(e,l,d);break;case"data":if(i!=="object"){$n(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ea(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&$t(e,i,"name",h.name,h,null),$t(e,i,"formEncType",h.formEncType,h,null),$t(e,i,"formMethod",h.formMethod,h,null),$t(e,i,"formTarget",h.formTarget,h,null)):($t(e,i,"encType",h.encType,h,null),$t(e,i,"method",h.method,h,null),$t(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ea(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=sc);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ea(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),er(e,"popover",l);break;case"xlinkActuate":Pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":er(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xh.get(a)||a,er(e,a,l))}}function hd(e,i,a,l,h,d){switch(a){case"style":To(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?vn(e,l):(typeof l=="number"||typeof l=="bigint")&&vn(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[de]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):er(e,a,l)}}}function ze(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$t(e,i,d,v,a,null)}}h&&$t(e,i,"srcSet",a.srcSet,a,null),l&&$t(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var T=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":w=G;break;case"defaultChecked":L=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:$t(e,i,l,G,a,null)}}ns(e,d,T,w,L,v,h,!1),ta(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:$t(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ai(e,!!l,i,!1):a!=null&&Ai(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:$t(e,i,v,T,a,null)}is(e,l,h,d),ta(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(e,i,w,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<sl.length;l++)Nt(sl[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$t(e,i,L,l,a,null)}return;default:if(Ao(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&hd(e,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&$t(e,i,T,l,a,null))}function DS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,w=null,L=null,G=null;for(j in a){var Q=a[j];if(a.hasOwnProperty(j)&&Q!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=Q;default:l.hasOwnProperty(j)||$t(e,i,j,null,l,Q)}}for(var z in l){var j=l[z];if(Q=a[z],l.hasOwnProperty(z)&&(j!=null||Q!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==Q&&$t(e,i,z,j,l,Q)}}ln(e,v,T,w,L,G,d,h);return;case"select":j=v=T=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(d)||$t(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==w&&$t(e,i,h,d,l,w)}i=T,a=v,l=j,z!=null?Ai(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ai(e,!!a,i,!0):Ai(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:$t(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$t(e,i,v,h,l,d)}Qt(e,z,j);return;case"option":for(var _t in a)if(z=a[_t],a.hasOwnProperty(_t)&&z!=null&&!l.hasOwnProperty(_t))switch(_t){case"selected":e.selected=!1;break;default:$t(e,i,_t,null,l,z)}for(w in l)if(z=l[w],j=a[w],l.hasOwnProperty(w)&&z!==j&&(z!=null||j!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:$t(e,i,w,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)z=a[dt],a.hasOwnProperty(dt)&&z!=null&&!l.hasOwnProperty(dt)&&$t(e,i,dt,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:$t(e,i,L,z,l,j)}return;default:if(Ao(i)){for(var Xt in a)z=a[Xt],a.hasOwnProperty(Xt)&&z!==void 0&&!l.hasOwnProperty(Xt)&&hd(e,i,Xt,void 0,l,z);for(G in l)z=l[G],j=a[G],!l.hasOwnProperty(G)||z===j||z===void 0&&j===void 0||hd(e,i,G,z,l,j);return}}for(var V in a)z=a[V],a.hasOwnProperty(V)&&z!=null&&!l.hasOwnProperty(V)&&$t(e,i,V,null,l,z);for(Q in l)z=l[Q],j=a[Q],!l.hasOwnProperty(Q)||z===j||z==null&&j==null||$t(e,i,Q,z,l,j)}var fd=null,dd=null;function ac(e){return e.nodeType===9?e:e.ownerDocument}function r_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function md(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pd=null;function OS(){var e=window.event;return e&&e.type==="popstate"?e===pd?!1:(pd=e,!0):(pd=null,!1)}var a_=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(xS)}:a_;function xS(e){setTimeout(function(){throw e})}function vr(e){return e==="head"}function l_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&ol(v.documentElement),a&2&&ol(v.body),a&4)for(a=v.head,ol(a),v=a.firstChild;v;){var T=v.nextSibling,w=v.nodeName;v[Wr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),pl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);pl(i)}function gd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gd(a),tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function VS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function PS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zn(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function kS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var _d=null;function u_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function c_(e,i,a){switch(i=ac(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ol(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);tr(e)}var Dn=new Map,h_=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=et.d;et.d={f:US,r:LS,D:zS,C:BS,L:jS,m:qS,X:FS,S:HS,M:GS};function US(){var e=ji.f(),i=Wu();return e||i}function LS(e){var i=Qn(e);i!==null&&i.tag===5&&i.type==="form"?Ng(i):ji.r(e)}var Pa=typeof document>"u"?null:document;function f_(e,i,a){var l=Pa;if(l&&typeof i=="string"&&i){var h=me(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),h_.has(h)||(h_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),ze(i,"link",e),ue(i),l.head.appendChild(i)))}}function zS(e){ji.D(e),f_("dns-prefetch",e,null)}function BS(e,i){ji.C(e,i),f_("preconnect",e,i)}function jS(e,i,a){ji.L(e,i,a);var l=Pa;if(l&&e&&i){var h='link[rel="preload"][as="'+me(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+me(a.imageSizes)+'"]')):h+='[href="'+me(e)+'"]';var d=h;switch(i){case"style":d=ka(e);break;case"script":d=Ua(e)}Dn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Dn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ll(d))||i==="script"&&l.querySelector(ul(d))||(i=l.createElement("link"),ze(i,"link",e),ue(i),l.head.appendChild(i)))}}function qS(e,i){ji.m(e,i);var a=Pa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+me(l)+'"][href="'+me(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ua(e)}if(!Dn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Dn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ul(d)))return}l=a.createElement("link"),ze(l,"link",e),ue(l),a.head.appendChild(l)}}}function HS(e,i,a){ji.S(e,i,a);var l=Pa;if(l&&e){var h=Xe(l).hoistableStyles,d=ka(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(ll(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Dn.get(d))&&vd(e,a);var w=v=l.createElement("link");ue(w),ze(w,"link",e),w._p=new Promise(function(L,G){w.onload=L,w.onerror=G}),w.addEventListener("load",function(){T.loading|=1}),w.addEventListener("error",function(){T.loading|=2}),T.loading|=4,lc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function FS(e,i){ji.X(e,i);var a=Pa;if(a&&e){var l=Xe(a).hoistableScripts,h=Ua(e),d=l.get(h);d||(d=a.querySelector(ul(h)),d||(e=E({src:e,async:!0},i),(i=Dn.get(h))&&Ed(e,i),d=a.createElement("script"),ue(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function GS(e,i){ji.M(e,i);var a=Pa;if(a&&e){var l=Xe(a).hoistableScripts,h=Ua(e),d=l.get(h);d||(d=a.querySelector(ul(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Dn.get(h))&&Ed(e,i),d=a.createElement("script"),ue(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function d_(e,i,a,l){var h=(h=Tt.current)?oc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=ka(a.href),a=Xe(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ka(a.href);var d=Xe(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ll(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Dn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dn.set(e,a),d||KS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ua(a),a=Xe(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ka(e){return'href="'+me(e)+'"'}function ll(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function KS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ze(i,"link",a),ue(i),e.head.appendChild(i))}function Ua(e){return'[src="'+me(e)+'"]'}function ul(e){return"script[async]"+e}function p_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(l)return i.instance=l,ue(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ue(l),ze(l,"style",h),lc(l,a.precedence,e),i.instance=l;case"stylesheet":h=ka(a.href);var d=e.querySelector(ll(h));if(d)return i.state.loading|=4,i.instance=d,ue(d),d;l=m_(a),(h=Dn.get(h))&&vd(l,h),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),ze(d,"link",l),i.state.loading|=4,lc(d,a.precedence,e),i.instance=d;case"script":return d=Ua(a.src),(h=e.querySelector(ul(d)))?(i.instance=h,ue(h),h):(l=a,(h=Dn.get(d))&&(l=E({},a),Ed(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ue(h),ze(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,lc(l,a.precedence,e));return i.instance}function lc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function vd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ed(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var uc=null;function g_(e,i,a){if(uc===null){var l=new Map,h=uc=new Map;h.set(a,l)}else h=uc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[Wr]||d[_e]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function y_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function QS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function __(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var cl=null;function YS(){}function $S(e,i,a){if(cl===null)throw Error(s(475));var l=cl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=ka(a.href),d=e.querySelector(ll(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=cc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ue(d);return}d=e.ownerDocument||e,a=m_(a),(h=Dn.get(h))&&vd(a,h),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),ze(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=cc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function XS(){if(cl===null)throw Error(s(475));var e=cl;return e.stylesheets&&e.count===0&&Td(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Td(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function cc(){if(this.count--,this.count===0){if(this.stylesheets)Td(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function Td(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,i.forEach(ZS,e),hc=null,cc.call(e))}function ZS(e,i){if(!(i.state.loading&4)){var a=hc.get(e);if(a)var l=a.get(null);else{a=new Map,hc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=cc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var hl={$$typeof:lt,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function WS(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function v_(e,i,a,l,h,d,v,T,w,L,G,Q){return e=new WS(e,i,a,v,T,w,L,Q),i=1,d===!0&&(i|=24),d=cn(3,null,null,i),e.current=d,d.stateNode=e,i=ef(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},af(d),e}function E_(e){return e?(e=ma,e):ma}function T_(e,i,a,l,h,d){h=E_(h),l.context===null?l.context=h:l.pendingContext=h,l=ar(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=or(e,l,i),a!==null&&(pn(a,e,i),jo(a,e,i))}function A_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Ad(e,i){A_(e,i),(e=e.alternate)&&A_(e,i)}function S_(e){if(e.tag===13){var i=da(e,67108864);i!==null&&pn(i,e,67108864),Ad(e,67108864)}}var fc=!0;function JS(e,i,a,l){var h=F.T;F.T=null;var d=et.p;try{et.p=2,Sd(e,i,a,l)}finally{et.p=d,F.T=h}}function tb(e,i,a,l){var h=F.T;F.T=null;var d=et.p;try{et.p=8,Sd(e,i,a,l)}finally{et.p=d,F.T=h}}function Sd(e,i,a,l){if(fc){var h=bd(l);if(h===null)cd(e,i,l,dc,a),w_(e,l);else if(nb(h,e,i,a,l))l.stopPropagation();else if(w_(e,l),i&4&&-1<eb.indexOf(e)){for(;h!==null;){var d=Qn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Vn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var w=1<<31-He(v);T.entanglements[1]|=w,v&=~w}oi(d),(Gt&6)===0&&(Xu=yn()+500,rl(0))}}break;case 13:T=da(d,2),T!==null&&pn(T,d,2),Wu(),Ad(d,2)}if(d=bd(l),d===null&&cd(e,i,l,dc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else cd(e,i,l,null,a)}}function bd(e){return e=En(e),wd(e)}var dc=null;function wd(e){if(dc=null,e=vi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return dc=e,null}function b_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ih()){case lo:return 2;case Ks:return 8;case Qr:case Ch:return 32;case Qs:return 268435456;default:return 32}default:return 32}}var Rd=!1,Er=null,Tr=null,Ar=null,fl=new Map,dl=new Map,Sr=[],eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(e,i){switch(e){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":fl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(i.pointerId)}}function ml(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Qn(i),i!==null&&S_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function nb(e,i,a,l,h){switch(i){case"focusin":return Er=ml(Er,e,i,a,l,h),!0;case"dragenter":return Tr=ml(Tr,e,i,a,l,h),!0;case"mouseover":return Ar=ml(Ar,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return fl.set(d,ml(fl.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,dl.set(d,ml(dl.get(d)||null,e,i,a,l,h)),!0}return!1}function R_(e){var i=vi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Wl(e.priority,function(){if(a.tag===13){var l=mn();l=Zi(l);var h=da(a,l);h!==null&&pn(h,a,l),Ad(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=bd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Si=l,a.target.dispatchEvent(l),Si=null}else return i=Qn(a),i!==null&&S_(i),e.blockedOn=a,!1;i.shift()}return!0}function I_(e,i,a){mc(e)&&a.delete(i)}function ib(){Rd=!1,Er!==null&&mc(Er)&&(Er=null),Tr!==null&&mc(Tr)&&(Tr=null),Ar!==null&&mc(Ar)&&(Ar=null),fl.forEach(I_),dl.forEach(I_)}function pc(e,i){e.blockedOn===i&&(e.blockedOn=null,Rd||(Rd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ib)))}var gc=null;function C_(e){gc!==e&&(gc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(wd(l||a)===null)continue;break}var d=Qn(a);d!==null&&(e.splice(i,3),i-=3,wf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function pl(e){function i(w){return pc(w,e)}Er!==null&&pc(Er,e),Tr!==null&&pc(Tr,e),Ar!==null&&pc(Ar,e),fl.forEach(i),dl.forEach(i);for(var a=0;a<Sr.length;a++){var l=Sr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)R_(a),a.blockedOn===null&&Sr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[de]||null;if(typeof d=="function")v||C_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[de]||null)T=v.formAction;else if(wd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),C_(a)}}}function Id(e){this._internalRoot=e}yc.prototype.render=Id.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=mn();T_(a,l,e,i,null,null)},yc.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;T_(e.current,2,null,e,null,null),Wu(),i[_n]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Wi();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,e),a===0&&R_(e)}};var D_=t.version;if(D_!=="19.1.0")throw Error(s(527,D_,"19.1.0"));et.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var rb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{se=_c.inject(rb),Ft=_c}catch{}}return yl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Gg,d=Kg,v=Qg,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=v_(e,1,!1,null,null,a,l,h,d,v,T,null),e[_n]=i.current,ud(e),new Id(i)},yl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Gg,v=Kg,T=Qg,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=v_(e,1,!0,i,a??null,l,h,d,v,T,w,L),i.context=E_(null),a=i.current,l=mn(),l=Zi(l),h=ar(l),h.callback=null,or(a,h,l),a=l,i.current.lanes=a,_i(i,a),oi(i),e[_n]=i.current,ud(e),new yc(i)},yl.version="19.1.0",yl}var z_;function yb(){if(z_)return Od.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Od.exports=gb(),Od.exports}var _b=yb();ME();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Cl.apply(this,arguments)}var Dr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Dr||(Dr={}));const B_="popstate";function vb(r){r===void 0&&(r={});function t(o,u){let{pathname:f="/",search:m="",hash:g=""}=Ls(o.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),$d("",{pathname:f,search:m,hash:g},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function n(o,u){let f=o.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let g=o.location.href,y=g.indexOf("#");m=y===-1?g:g.slice(0,y)}return m+"#"+(typeof u=="string"?u:xE(u))}function s(o,u){Sm(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(u)+")")}return Tb(t,n,s,r)}function be(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Sm(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Eb(){return Math.random().toString(36).substr(2,8)}function j_(r,t){return{usr:r.state,key:r.key,idx:t}}function $d(r,t,n,s){return n===void 0&&(n=null),Cl({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof t=="string"?Ls(t):t,{state:n,key:t&&t.key||s||Eb()})}function xE(r){let{pathname:t="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Ls(r){let t={};if(r){let n=r.indexOf("#");n>=0&&(t.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(t.search=r.substr(s),r=r.substr(0,s)),r&&(t.pathname=r)}return t}function Tb(r,t,n,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m=Dr.Pop,g=null,y=E();y==null&&(y=0,f.replaceState(Cl({},f.state,{idx:y}),""));function E(){return(f.state||{idx:null}).idx}function S(){m=Dr.Pop;let H=E(),rt=H==null?null:H-y;y=H,g&&g({action:m,location:W.location,delta:rt})}function I(H,rt){m=Dr.Push;let at=$d(W.location,H,rt);n&&n(at,H),y=E()+1;let lt=j_(at,y),wt=W.createHref(at);try{f.pushState(lt,"",wt)}catch(yt){if(yt instanceof DOMException&&yt.name==="DataCloneError")throw yt;o.location.assign(wt)}u&&g&&g({action:m,location:W.location,delta:1})}function B(H,rt){m=Dr.Replace;let at=$d(W.location,H,rt);n&&n(at,H),y=E();let lt=j_(at,y),wt=W.createHref(at);f.replaceState(lt,"",wt),u&&g&&g({action:m,location:W.location,delta:0})}function $(H){let rt=o.location.origin!=="null"?o.location.origin:o.location.href,at=typeof H=="string"?H:xE(H);return at=at.replace(/ $/,"%20"),be(rt,"No window.location.(origin|href) available to create URL for href: "+at),new URL(at,rt)}let W={get action(){return m},get location(){return r(o,f)},listen(H){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(B_,S),g=H,()=>{o.removeEventListener(B_,S),g=null}},createHref(H){return t(o,H)},createURL:$,encodeLocation(H){let rt=$(H);return{pathname:rt.pathname,search:rt.search,hash:rt.hash}},push:I,replace:B,go(H){return f.go(H)}};return W}var q_;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(q_||(q_={}));function Ab(r,t,n){return n===void 0&&(n="/"),Sb(r,t,n)}function Sb(r,t,n,s){let o=typeof t=="string"?Ls(t):t,u=kE(o.pathname||"/",n);if(u==null)return null;let f=VE(r);bb(f);let m=null;for(let g=0;m==null&&g<f.length;++g){let y=kb(u);m=xb(f[g],y)}return m}function VE(r,t,n,s){t===void 0&&(t=[]),n===void 0&&(n=[]),s===void 0&&(s="");let o=(u,f,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};g.relativePath.startsWith("/")&&(be(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let y=Ns([s,g.relativePath]),E=n.concat(g);u.children&&u.children.length>0&&(be(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),VE(u.children,t,E,y)),!(u.path==null&&!u.index)&&t.push({path:y,score:Nb(y,u.index),routesMeta:E})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let g of PE(u.path))o(u,f,g)}),t}function PE(r){let t=r.split("/");if(t.length===0)return[];let[n,...s]=t,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=PE(s.join("/")),m=[];return m.push(...f.map(g=>g===""?u:[u,g].join("/"))),o&&m.push(...f),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function bb(r){r.sort((t,n)=>t.score!==n.score?n.score-t.score:Mb(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const wb=/^:[\w-]+$/,Rb=3,Ib=2,Cb=1,Db=10,Ob=-2,H_=r=>r==="*";function Nb(r,t){let n=r.split("/"),s=n.length;return n.some(H_)&&(s+=Ob),t&&(s+=Ib),n.filter(o=>!H_(o)).reduce((o,u)=>o+(wb.test(u)?Rb:u===""?Cb:Db),s)}function Mb(r,t){return r.length===t.length&&r.slice(0,-1).every((s,o)=>s===t[o])?r[r.length-1]-t[t.length-1]:0}function xb(r,t,n){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let g=s[m],y=m===s.length-1,E=u==="/"?t:t.slice(u.length)||"/",S=Vb({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},E),I=g.route;if(!S)return null;Object.assign(o,S.params),f.push({params:o,pathname:Ns([u,S.pathname]),pathnameBase:qb(Ns([u,S.pathnameBase])),route:I}),S.pathnameBase!=="/"&&(u=Ns([u,S.pathnameBase]))}return f}function Vb(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Pb(r.path,r.caseSensitive,r.end),o=t.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,E,S)=>{let{paramName:I,isOptional:B}=E;if(I==="*"){let W=m[S]||"";f=u.slice(0,u.length-W.length).replace(/(.)\/+$/,"$1")}const $=m[S];return B&&!$?y[I]=void 0:y[I]=($||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function Pb(r,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Sm(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,g)=>(s.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),s]}function kb(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Sm(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),r}}function kE(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function Ub(r,t){t===void 0&&(t="/");let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?Ls(r):r;return{pathname:n?n.startsWith("/")?n:Lb(n,t):t,search:Hb(s),hash:Fb(o)}}function Lb(r,t){let n=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vd(r,t,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zb(r){return r.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bb(r,t){let n=zb(r);return t?n.map((s,o)=>o===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function jb(r,t,n,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=Ls(r):(o=Cl({},r),be(!o.pathname||!o.pathname.includes("?"),Vd("?","pathname","search",o)),be(!o.pathname||!o.pathname.includes("#"),Vd("#","pathname","hash",o)),be(!o.search||!o.search.includes("#"),Vd("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let S=t.length-1;if(!s&&f.startsWith("..")){let I=f.split("/");for(;I[0]==="..";)I.shift(),S-=1;o.pathname=I.join("/")}m=S>=0?t[S]:"/"}let g=Ub(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(y||E)&&(g.pathname+="/"),g}const Ns=r=>r.join("/").replace(/\/\/+/g,"/"),qb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Hb=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Fb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Gb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const UE=["post","put","patch","delete"];new Set(UE);const Kb=["get",...UE];new Set(Kb);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Dl.apply(this,arguments)}const bm=ot.createContext(null),Qb=ot.createContext(null),ih=ot.createContext(null),rh=ot.createContext(null),to=ot.createContext({outlet:null,matches:[],isDataRoute:!1}),LE=ot.createContext(null);function sh(){return ot.useContext(rh)!=null}function zE(){return sh()||be(!1),ot.useContext(rh).location}function BE(r){ot.useContext(ih).static||ot.useLayoutEffect(r)}function ah(){let{isDataRoute:r}=ot.useContext(to);return r?a1():Yb()}function Yb(){sh()||be(!1);let r=ot.useContext(bm),{basename:t,future:n,navigator:s}=ot.useContext(ih),{matches:o}=ot.useContext(to),{pathname:u}=zE(),f=JSON.stringify(Bb(o,n.v7_relativeSplatPath)),m=ot.useRef(!1);return BE(()=>{m.current=!0}),ot.useCallback(function(y,E){if(E===void 0&&(E={}),!m.current)return;if(typeof y=="number"){s.go(y);return}let S=jb(y,JSON.parse(f),u,E.relative==="path");r==null&&t!=="/"&&(S.pathname=S.pathname==="/"?t:Ns([t,S.pathname])),(E.replace?s.replace:s.push)(S,E.state,E)},[t,s,f,u,r])}function $b(r,t){return Xb(r,t)}function Xb(r,t,n,s){sh()||be(!1);let{navigator:o,static:u}=ot.useContext(ih),{matches:f}=ot.useContext(to),m=f[f.length-1],g=m?m.params:{};m&&m.pathname;let y=m?m.pathnameBase:"/";m&&m.route;let E=zE(),S;if(t){var I;let rt=typeof t=="string"?Ls(t):t;y==="/"||(I=rt.pathname)!=null&&I.startsWith(y)||be(!1),S=rt}else S=E;let B=S.pathname||"/",$=B;if(y!=="/"){let rt=y.replace(/^\//,"").split("/");$="/"+B.replace(/^\//,"").split("/").slice(rt.length).join("/")}let W=Ab(r,{pathname:$}),H=e1(W&&W.map(rt=>Object.assign({},rt,{params:Object.assign({},g,rt.params),pathname:Ns([y,o.encodeLocation?o.encodeLocation(rt.pathname).pathname:rt.pathname]),pathnameBase:rt.pathnameBase==="/"?y:Ns([y,o.encodeLocation?o.encodeLocation(rt.pathnameBase).pathname:rt.pathnameBase])})),f,n,s);return t&&H?ot.createElement(rh.Provider,{value:{location:Dl({pathname:"/",search:"",hash:"",state:null,key:"default"},S),navigationType:Dr.Pop}},H):H}function Zb(){let r=s1(),t=Gb(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ot.createElement(ot.Fragment,null,ot.createElement("h2",null,"Unexpected Application Error!"),ot.createElement("h3",{style:{fontStyle:"italic"}},t),n?ot.createElement("pre",{style:o},n):null,null)}const Wb=ot.createElement(Zb,null);class Jb extends ot.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?ot.createElement(to.Provider,{value:this.props.routeContext},ot.createElement(LE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t1(r){let{routeContext:t,match:n,children:s}=r,o=ot.useContext(bm);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),ot.createElement(to.Provider,{value:t},s)}function e1(r,t,n,s){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var u;if(!n)return null;if(n.errors)r=n.matches;else if((u=s)!=null&&u.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let f=r,m=(o=n)==null?void 0:o.errors;if(m!=null){let E=f.findIndex(S=>S.route.id&&(m==null?void 0:m[S.route.id])!==void 0);E>=0||be(!1),f=f.slice(0,Math.min(f.length,E+1))}let g=!1,y=-1;if(n&&s&&s.v7_partialHydration)for(let E=0;E<f.length;E++){let S=f[E];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(y=E),S.route.id){let{loaderData:I,errors:B}=n,$=S.route.loader&&I[S.route.id]===void 0&&(!B||B[S.route.id]===void 0);if(S.route.lazy||$){g=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((E,S,I)=>{let B,$=!1,W=null,H=null;n&&(B=m&&S.route.id?m[S.route.id]:void 0,W=S.route.errorElement||Wb,g&&(y<0&&I===0?(o1("route-fallback"),$=!0,H=null):y===I&&($=!0,H=S.route.hydrateFallbackElement||null)));let rt=t.concat(f.slice(0,I+1)),at=()=>{let lt;return B?lt=W:$?lt=H:S.route.Component?lt=ot.createElement(S.route.Component,null):S.route.element?lt=S.route.element:lt=E,ot.createElement(t1,{match:S,routeContext:{outlet:E,matches:rt,isDataRoute:n!=null},children:lt})};return n&&(S.route.ErrorBoundary||S.route.errorElement||I===0)?ot.createElement(Jb,{location:n.location,revalidation:n.revalidation,component:W,error:B,children:at(),routeContext:{outlet:null,matches:rt,isDataRoute:!0}}):at()},null)}var jE=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(jE||{}),qE=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(qE||{});function n1(r){let t=ot.useContext(bm);return t||be(!1),t}function i1(r){let t=ot.useContext(Qb);return t||be(!1),t}function r1(r){let t=ot.useContext(to);return t||be(!1),t}function HE(r){let t=r1(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function s1(){var r;let t=ot.useContext(LE),n=i1(),s=HE();return t!==void 0?t:(r=n.errors)==null?void 0:r[s]}function a1(){let{router:r}=n1(jE.UseNavigateStable),t=HE(qE.UseNavigateStable),n=ot.useRef(!1);return BE(()=>{n.current=!0}),ot.useCallback(function(o,u){u===void 0&&(u={}),n.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,Dl({fromRouteId:t},u)))},[r,t])}const F_={};function o1(r,t,n){F_[r]||(F_[r]=!0)}function l1(r,t){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function La(r){be(!1)}function u1(r){let{basename:t="/",children:n=null,location:s,navigationType:o=Dr.Pop,navigator:u,static:f=!1,future:m}=r;sh()&&be(!1);let g=t.replace(/^\/*/,"/"),y=ot.useMemo(()=>({basename:g,navigator:u,static:f,future:Dl({v7_relativeSplatPath:!1},m)}),[g,m,u,f]);typeof s=="string"&&(s=Ls(s));let{pathname:E="/",search:S="",hash:I="",state:B=null,key:$="default"}=s,W=ot.useMemo(()=>{let H=kE(E,g);return H==null?null:{location:{pathname:H,search:S,hash:I,state:B,key:$},navigationType:o}},[g,E,S,I,B,$,o]);return W==null?null:ot.createElement(ih.Provider,{value:y},ot.createElement(rh.Provider,{children:n,value:W}))}function c1(r){let{children:t,location:n}=r;return $b(Xd(t),n)}new Promise(()=>{});function Xd(r,t){t===void 0&&(t=[]);let n=[];return ot.Children.forEach(r,(s,o)=>{if(!ot.isValidElement(s))return;let u=[...t,o];if(s.type===ot.Fragment){n.push.apply(n,Xd(s.props.children,u));return}s.type!==La&&be(!1),!s.props.index||!s.props.children||be(!1);let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Xd(s.props.children,u)),n.push(f)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const h1="6";try{window.__reactRouterVersion=h1}catch{}const f1="startTransition",G_=fb[f1];function d1(r){let{basename:t,children:n,future:s,window:o}=r,u=ot.useRef();u.current==null&&(u.current=vb({window:o,v5Compat:!0}));let f=u.current,[m,g]=ot.useState({action:f.action,location:f.location}),{v7_startTransition:y}=s||{},E=ot.useCallback(S=>{y&&G_?G_(()=>g(S)):g(S)},[g,y]);return ot.useLayoutEffect(()=>f.listen(E),[f,E]),ot.useEffect(()=>l1(s),[s]),ot.createElement(u1,{basename:t,children:n,location:m.location,navigationType:m.action,navigator:f,future:s})}var K_;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(K_||(K_={}));var Q_;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Q_||(Q_={}));const m1=({onClick:r})=>it.jsx("button",{onClick:r,className:"bg-[#E9D7BD] relative px-16 pt-2 pb-16 mb-0 max-w-full rounded-[999px] w-[516px] max-md:px-5 max-md:mb-2.5 max-md:text-4xl",children:"START"}),p1=()=>{const r=ah(),t=ot.useCallback(()=>{r("/signup")},[r]);return it.jsx("main",{className:"overflow-hidden text-7xl text-center text-white whitespace-nowrap bg-white max-md:text-4xl",children:it.jsxs("section",{className:"flex relative flex-col items-center px-20 pb-40 w-full min-h-[1024px] pt-[732px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl",children:[it.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/fd9478b62be22ea089423fe6dc8fb0dc4c84a468?placeholderIfAbsent=true&apiKey=cd998992b18f4e729a861e5e2f5f957c",alt:"Background",className:"object-cover absolute inset-0 size-full"}),it.jsx(m1,{onClick:t})]})})},g1=()=>{};var Y_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},y1=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},GE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let I=(m&15)<<2|y>>6,B=y&63;g||(B=64,f||(I=64)),s.push(n[E],n[S],n[I],n[B])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(FE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):y1(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||S==null)throw new _1;const I=u<<2|m>>4;if(s.push(I),y!==64){const B=m<<4&240|y>>2;if(s.push(B),S!==64){const $=y<<6&192|S;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const v1=function(r){const t=FE(r);return GE.encodeByteArray(t,!0)},Vc=function(r){return v1(r).replace(/\./g,"")},KE=function(r){try{return GE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=()=>E1().__FIREBASE_DEFAULTS__,A1=()=>{if(typeof process>"u"||typeof Y_>"u")return;const r=Y_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},S1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&KE(r[1]);return t&&JSON.parse(t)},oh=()=>{try{return g1()||T1()||A1()||S1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},QE=r=>{var t,n;return(n=(t=oh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},b1=r=>{const t=QE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},YE=()=>{var r;return(r=oh())===null||r===void 0?void 0:r.config},$E=r=>{var t;return(t=oh())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(r){return r.endsWith(".cloudworkstations.dev")}async function XE(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Vc(JSON.stringify(n)),Vc(JSON.stringify(f)),""].join(".")}const Tl={};function I1(){const r={prod:[],emulator:[]};for(const t of Object.keys(Tl))Tl[t]?r.emulator.push(t):r.prod.push(t);return r}function C1(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let $_=!1;function lh(r,t){if(typeof window>"u"||typeof document>"u"||!Bl(window.location.host)||Tl[r]===t||Tl[r]||$_)return;Tl[r]=t;function n(I){return`__firebase__banner__${I}`}const s="__firebase__banner",u=I1().prod.length>0;function f(){const I=document.getElementById(s);I&&I.remove()}function m(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,B){I.setAttribute("width","24"),I.setAttribute("id",B),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{$_=!0,f()},I}function E(I,B){I.setAttribute("id",B),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function S(){const I=C1(s),B=n("text"),$=document.getElementById(B)||document.createElement("span"),W=n("learnmore"),H=document.getElementById(W)||document.createElement("a"),rt=n("preprendIcon"),at=document.getElementById(rt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const lt=I.element;m(lt),E(H,W);const wt=y();g(at,rt),lt.append(at,$,H,wt),document.body.appendChild(lt)}u?($.innerText="Preview backend disconnected.",at.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(at.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function O1(){var r;const t=(r=oh())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function N1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function M1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x1(){const r=$e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function V1(){return!O1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WE(){try{return typeof indexedDB=="object"}catch{return!1}}function JE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function P1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="FirebaseError";class Fn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=k1,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?U1(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Fn(o,m,s)}}function U1(r,t){return r.replace(L1,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const L1=/\{\$([^}]+)}/g;function z1(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function kr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(X_(u)&&X_(f)){if(!kr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function X_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function B1(r,t){const n=new j1(r,t);return n.subscribe.bind(n)}class j1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");q1(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Pd),o.error===void 0&&(o.error=Pd),o.complete===void 0&&(o.complete=Pd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q1(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Pd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=1e3,F1=2,G1=4*60*60*1e3,K1=.5;function Z_(r,t=H1,n=F1){const s=t*Math.pow(n,r),o=Math.round(K1*s*(Math.random()-.5)*2);return Math.min(G1,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new w1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($1(t))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Is){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Is){return this.instances.has(t)}getOptions(t=Is){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Y1(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Is){return this.component?this.component.multipleInstances?t:Is:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Y1(r){return r===Is?void 0:r}function $1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Q1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const Z1={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},W1=Mt.INFO,J1={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},tw=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=J1[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uh{constructor(t){this.name=t,this._logLevel=W1,this._logHandler=tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Z1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const ew=(r,t)=>t.some(n=>r instanceof n);let W_,J_;function nw(){return W_||(W_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iw(){return J_||(J_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,Zd=new WeakMap,e0=new WeakMap,kd=new WeakMap,wm=new WeakMap;function rw(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Nr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&t0.set(n,r)}).catch(()=>{}),wm.set(t,r),t}function sw(r){if(Zd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Zd.set(r,t)}let Wd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Zd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||e0.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function aw(r){Wd=r(Wd)}function ow(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Ud(this),t,...n);return e0.set(s,t.sort?t.sort():[t]),Nr(s)}:iw().includes(r)?function(...t){return r.apply(Ud(this),t),Nr(t0.get(this))}:function(...t){return Nr(r.apply(Ud(this),t))}}function lw(r){return typeof r=="function"?ow(r):(r instanceof IDBTransaction&&sw(r),ew(r,nw())?new Proxy(r,Wd):r)}function Nr(r){if(r instanceof IDBRequest)return rw(r);if(kd.has(r))return kd.get(r);const t=lw(r);return t!==r&&(kd.set(r,t),wm.set(t,r)),t}const Ud=r=>wm.get(r);function n0(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Nr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Nr(f.result),g.oldVersion,g.newVersion,Nr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const uw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],Ld=new Map;function tv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Ld.get(t))return Ld.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=cw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||uw.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return Ld.set(t,u),u}aw(r=>({...r,get:(t,n,s)=>tv(t,n)||r.get(t,n,s),has:(t,n)=>!!tv(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fw(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jd="@firebase/app",ev="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new uh("@firebase/app"),dw="@firebase/app-compat",mw="@firebase/analytics-compat",pw="@firebase/analytics",gw="@firebase/app-check-compat",yw="@firebase/app-check",_w="@firebase/auth",vw="@firebase/auth-compat",Ew="@firebase/database",Tw="@firebase/data-connect",Aw="@firebase/database-compat",Sw="@firebase/functions",bw="@firebase/functions-compat",ww="@firebase/installations",Rw="@firebase/installations-compat",Iw="@firebase/messaging",Cw="@firebase/messaging-compat",Dw="@firebase/performance",Ow="@firebase/performance-compat",Nw="@firebase/remote-config",Mw="@firebase/remote-config-compat",xw="@firebase/storage",Vw="@firebase/storage-compat",Pw="@firebase/firestore",kw="@firebase/vertexai",Uw="@firebase/firestore-compat",Lw="firebase",zw="11.7.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="[DEFAULT]",Bw={[Jd]:"fire-core",[dw]:"fire-core-compat",[pw]:"fire-analytics",[mw]:"fire-analytics-compat",[yw]:"fire-app-check",[gw]:"fire-app-check-compat",[_w]:"fire-auth",[vw]:"fire-auth-compat",[Ew]:"fire-rtdb",[Tw]:"fire-data-connect",[Aw]:"fire-rtdb-compat",[Sw]:"fire-fn",[bw]:"fire-fn-compat",[ww]:"fire-iid",[Rw]:"fire-iid-compat",[Iw]:"fire-fcm",[Cw]:"fire-fcm-compat",[Dw]:"fire-perf",[Ow]:"fire-perf-compat",[Nw]:"fire-rc",[Mw]:"fire-rc-compat",[xw]:"fire-gcs",[Vw]:"fire-gcs-compat",[Pw]:"fire-fst",[Uw]:"fire-fst-compat",[kw]:"fire-vertex","fire-js":"fire-js",[Lw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map,jw=new Map,em=new Map;function nv(r,t){try{r.container.addComponent(t)}catch(n){Ki.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function fi(r){const t=r.name;if(em.has(t))return Ki.debug(`There were multiple attempts to register component ${t}.`),!1;em.set(t,r);for(const n of Pc.values())nv(n,r);for(const n of jw.values())nv(n,r);return!0}function Bs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function On(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new zs("app","Firebase",qw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=zw;function i0(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:tm,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw Mr.create("bad-app-name",{appName:String(o)});if(n||(n=YE()),!n)throw Mr.create("no-options");const u=Pc.get(o);if(u){if(kr(n,u.options)&&kr(s,u.config))return u;throw Mr.create("duplicate-app",{appName:o})}const f=new X1(o);for(const g of em.values())f.addComponent(g);const m=new Hw(n,s,f);return Pc.set(o,m),m}function Rm(r=tm){const t=Pc.get(r);if(!t&&r===tm&&YE())return i0();if(!t)throw Mr.create("no-app",{appName:r});return t}function Mn(r,t,n){var s;let o=(s=Bw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ki.warn(m.join(" "));return}fi(new Hn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="firebase-heartbeat-database",Gw=1,Ol="firebase-heartbeat-store";let zd=null;function r0(){return zd||(zd=n0(Fw,Gw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Ol)}catch(n){console.warn(n)}}}}).catch(r=>{throw Mr.create("idb-open",{originalErrorMessage:r.message})})),zd}async function Kw(r){try{const n=(await r0()).transaction(Ol),s=await n.objectStore(Ol).get(s0(r));return await n.done,s}catch(t){if(t instanceof Fn)Ki.warn(t.message);else{const n=Mr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ki.warn(n.message)}}}async function iv(r,t){try{const s=(await r0()).transaction(Ol,"readwrite");await s.objectStore(Ol).put(t,s0(r)),await s.done}catch(n){if(n instanceof Fn)Ki.warn(n.message);else{const s=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ki.warn(s.message)}}}function s0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1024,Yw=30;class $w{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=rv();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Yw){const f=Ww(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ki.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rv(),{heartbeatsToSend:s,unsentEntries:o}=Xw(this._heartbeatsCache.heartbeats),u=Vc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Ki.warn(n),""}}}function rv(){return new Date().toISOString().substring(0,10)}function Xw(r,t=Qw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),sv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),sv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Zw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WE()?JE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function sv(r){return Vc(JSON.stringify({version:2,heartbeats:r})).length}function Ww(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(r){fi(new Hn("platform-logger",t=>new hw(t),"PRIVATE")),fi(new Hn("heartbeat",t=>new $w(t),"PRIVATE")),Mn(Jd,ev,r),Mn(Jd,ev,"esm2017"),Mn("fire-js","")}Jw("");function Im(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tR=a0,o0=new zs("auth","Firebase",a0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new uh("@firebase/auth");function eR(r,...t){kc.logLevel<=Mt.WARN&&kc.warn(`Auth (${eo}): ${r}`,...t)}function wc(r,...t){kc.logLevel<=Mt.ERROR&&kc.error(`Auth (${eo}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,...t){throw Dm(r,...t)}function qn(r,...t){return Dm(r,...t)}function Cm(r,t,n){const s=Object.assign(Object.assign({},tR()),{[t]:n});return new zs("auth","Firebase",s).create(t,{appName:r.name})}function xr(r){return Cm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nR(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&di(r,"argument-error"),Cm(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return o0.create(r,...t)}function Et(r,t,...n){if(!r)throw Dm(t,...n)}function Hi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw wc(t),new Error(t)}function Qi(r,t){r||Hi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function iR(){return av()==="http:"||av()==="https:"}function av(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iR()||ZE()||"connection"in navigator)?navigator.onLine:!0}function sR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,n){this.shortDelay=t,this.longDelay=n,Qi(n>t,"Short delay should be less than long delay!"),this.isMobile=D1()||M1()}get(){return rR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(r,t){Qi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lR=new ql(3e4,6e4);function no(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Hr(r,t,n,s,o={}){return u0(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=jl(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:g},u);return N1()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Bl(r.emulatorConfig.host)&&(y.credentials="include"),l0.fetch()(await h0(r,r.config.apiHost,n,m),y)})}async function u0(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},aR),t);try{const o=new cR(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw vc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw vc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw vc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw vc(r,"user-disabled",f);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Cm(r,E,y);di(r,E)}}catch(o){if(o instanceof Fn)throw o;di(r,"network-request-failed",{message:String(o)})}}async function c0(r,t,n,s,o={}){const u=await Hr(r,t,n,s,o);return"mfaPendingCredential"in u&&di(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function h0(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Om(r.config,o):`${r.config.apiScheme}://${o}`;return oR.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function uR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qn(this.auth,"network-request-failed")),lR.get())})}}function vc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=qn(r,t,s);return o.customData._tokenResponse=n,o}function ov(r){return r!==void 0&&r.enterprise!==void 0}class hR{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return uR(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fR(r,t){return Hr(r,"GET","/v2/recaptchaConfig",no(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(r,t){return Hr(r,"POST","/v1/accounts:delete",t)}async function Uc(r,t){return Hr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function mR(r,t=!1){const n=an(r),s=await n.getIdToken(t),o=Nm(s);Et(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Al(Bd(o.auth_time)),issuedAtTime:Al(Bd(o.iat)),expirationTime:Al(Bd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Bd(r){return Number(r)*1e3}function Nm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return wc("JWT malformed, contained fewer than 3 sections"),null;try{const o=KE(n);return o?JSON.parse(o):(wc("Failed to decode base64 JWT payload"),null)}catch(o){return wc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function lv(r){const t=Nm(r);return Et(t,"internal-error"),Et(typeof t.exp<"u","internal-error"),Et(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Fn&&pR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function pR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Al(this.lastLoginAt),this.creationTime=Al(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Nl(r,Uc(n,{idToken:s}));Et(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?f0(u.providerUserInfo):[],m=_R(r.providerData,f),g=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=g?y:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new im(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function yR(r){const t=an(r);await Lc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _R(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function f0(r){return r.map(t=>{var{providerId:n}=t,s=Im(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(r,t){const n=await u0(r,{},async()=>{const s=jl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await h0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",l0.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ER(r,t){return Hr(r,"POST","/v2/accounts:revokeToken",no(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Et(t.idToken,"internal-error"),Et(typeof t.idToken<"u","internal-error"),Et(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):lv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Et(t.length!==0,"internal-error");const n=lv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Et(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await vR(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ha;return s&&(Et(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(Et(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(Et(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return Hi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(r,t){Et(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Bn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Im(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new im(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Nl(this,this.stsTokenManager.getToken(this.auth,t));return Et(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return mR(this,t)}reload(){return yR(this)}_assign(t){this!==t&&(Et(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Et(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(xr(this.auth));const t=await this.getIdToken();return await Nl(this,dR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,g,y,E;const S=(s=n.displayName)!==null&&s!==void 0?s:void 0,I=(o=n.email)!==null&&o!==void 0?o:void 0,B=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,W=(m=n.tenantId)!==null&&m!==void 0?m:void 0,H=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,rt=(y=n.createdAt)!==null&&y!==void 0?y:void 0,at=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:lt,emailVerified:wt,isAnonymous:yt,providerData:Vt,stsTokenManager:M}=n;Et(lt&&M,t,"internal-error");const b=Ha.fromJSON(this.name,M);Et(typeof lt=="string",t,"internal-error"),wr(S,t.name),wr(I,t.name),Et(typeof wt=="boolean",t,"internal-error"),Et(typeof yt=="boolean",t,"internal-error"),wr(B,t.name),wr($,t.name),wr(W,t.name),wr(H,t.name),wr(rt,t.name),wr(at,t.name);const R=new Bn({uid:lt,auth:t,email:I,emailVerified:wt,displayName:S,isAnonymous:yt,photoURL:$,phoneNumber:B,tenantId:W,stsTokenManager:b,createdAt:rt,lastLoginAt:at});return Vt&&Array.isArray(Vt)&&(R.providerData=Vt.map(N=>Object.assign({},N))),H&&(R._redirectEventId=H),R}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ha;o.updateFromServerResponse(n);const u=new Bn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Lc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];Et(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?f0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ha;m.updateFromIdToken(s);const g=new Bn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new im(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new Map;function Fi(r){Qi(r instanceof Function,"Expected a class definition");let t=uv.get(r);return t?(Qi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,uv.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}d0.type="NONE";const cv=d0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(r,t,n){return`firebase:${r}:${t}:${n}`}class Fa{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Rc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Rc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Uc(this.auth,{idToken:t}).catch(()=>{});return n?Bn._fromGetAccountInfoResponse(this.auth,n,t):null}return Bn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Fa(Fi(cv),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Fi(cv);const f=Rc(s,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let S;if(typeof E=="string"){const I=await Uc(t,{idToken:E}).catch(()=>{});if(!I)break;S=await Bn._fromGetAccountInfoResponse(t,I,E)}else S=Bn._fromJSON(t,E);y!==u&&(m=S),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Fa(u,t,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Fa(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(y0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(m0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(v0(t))return"Blackberry";if(E0(t))return"Webos";if(p0(t))return"Safari";if((t.includes("chrome/")||g0(t))&&!t.includes("edge/"))return"Chrome";if(_0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function m0(r=$e()){return/firefox\//i.test(r)}function p0(r=$e()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function g0(r=$e()){return/crios\//i.test(r)}function y0(r=$e()){return/iemobile/i.test(r)}function _0(r=$e()){return/android/i.test(r)}function v0(r=$e()){return/blackberry/i.test(r)}function E0(r=$e()){return/webos/i.test(r)}function Mm(r=$e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function TR(r=$e()){var t;return Mm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function AR(){return x1()&&document.documentMode===10}function T0(r=$e()){return Mm(r)||_0(r)||E0(r)||v0(r)||/windows phone/i.test(r)||y0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(r,t=[]){let n;switch(r){case"Browser":n=hv($e());break;case"Worker":n=`${hv($e())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const g=t(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(r,t={}){return Hr(r,"GET","/v2/passwordPolicy",no(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=6;class RR{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:wR,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fv(this),this.idTokenSubscription=new fv(this),this.beforeStateQueue=new SR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Fi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Fa.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Uc(this,{idToken:t}),s=await Bn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(On(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Et(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Lc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(On(this.app))return Promise.reject(xr(this));const n=t?an(t):null;return n&&Et(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Et(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return On(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bR(this),n=new RR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new zs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ER(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Fi(t)||this._popupRedirectResolver;Et(n,this,"argument-error"),this.redirectPersistenceManager=await Fa.create(this,[Fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Et(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Et(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&eR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function js(r){return an(r)}class fv{constructor(t){this.auth=t,this.observer=null,this.addObserver=B1(n=>this.observer=n)}get next(){return Et(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CR(r){ch=r}function S0(r){return ch.loadJS(r)}function DR(){return ch.recaptchaEnterpriseScript}function OR(){return ch.gapiScript}function NR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class MR{constructor(){this.enterprise=new xR}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class xR{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const VR="recaptcha-enterprise",b0="NO_RECAPTCHA";class PR{constructor(t){this.type=VR,this.auth=js(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{fR(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new hR(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;ov(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(b0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MR().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&ov(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=DR();g.length!==0&&(g+=m),S0(g).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function dv(r,t,n,s=!1,o=!1){const u=new PR(r);let f;if(o)f=b0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},t);return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function kR(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await dv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await dv(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(r,t){const n=Bs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(kr(u,t??{}))return o;di(o,"already-initialized")}return n.initialize({options:t})}function LR(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Fi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function zR(r,t,n){const s=js(r);Et(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=w0(t),{host:f,port:m}=BR(t),g=m===null?"":`:${m}`,y={url:`${u}//${f}${g}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Et(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Et(kr(y,s.config.emulator)&&kr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Bl(f)?(lh("Auth",!0),XE(`${u}//${f}${g}`)):jR()}function w0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function BR(r){const t=w0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:mv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:mv(f)}}}function mv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function jR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Hi("not implemented")}_getIdTokenResponse(t){return Hi("not implemented")}_linkToIdToken(t,n){return Hi("not implemented")}_getReauthenticationResolver(t){return Hi("not implemented")}}async function qR(r,t){return Hr(r,"POST","/v1/accounts:sendOobCode",no(r,t))}async function HR(r,t){return qR(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(r,t){return c0(r,"POST","/v1/accounts:signInWithIdp",no(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR="http://localhost";class Ms extends R0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ms(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):di("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Im(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Ms(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Ga(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ga(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ga(t,n)}buildRequest(){const t={requestUri:FR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=jl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends xm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Hl{constructor(){super("facebook.com")}static credential(t){return Ms._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rr.credentialFromTaggedObject(t)}static credentialFromError(t){return Rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rr.credential(t.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ms._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return qi.credentialFromTaggedObject(t)}static credentialFromError(t){return qi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return qi.credential(n,s)}catch{return null}}}qi.GOOGLE_SIGN_IN_METHOD="google.com";qi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Hl{constructor(){super("github.com")}static credential(t){return Ms._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ir.credential(t.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Hl{constructor(){super("twitter.com")}static credential(t,n){return Ms._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Cr.credentialFromTaggedObject(t)}static credentialFromError(t){return Cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Cr.credential(n,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(r,t){return c0(r,"POST","/v1/accounts:signUp",no(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Bn._fromIdTokenResponse(t,s,o),f=pv(s);return new xs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=pv(s);return new xs({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function pv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Fn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,zc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new zc(t,n,s,o)}}function I0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?zc._fromErrorAndOperation(r,u,t,s):u})}async function KR(r,t,n=!1){const s=await Nl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return xs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(r,t,n=!1){const{auth:s}=r;if(On(s.app))return Promise.reject(xr(s));const o="reauthenticate";try{const u=await Nl(r,I0(s,o,t,r),n);Et(u.idToken,s,"internal-error");const f=Nm(u.idToken);Et(f,s,"internal-error");const{sub:m}=f;return Et(r.uid===m,s,"user-mismatch"),xs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&di(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(r,t,n=!1){if(On(r.app))return Promise.reject(xr(r));const s="signIn",o=await I0(r,s,t),u=await xs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(r){const t=js(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function XR(r,t,n){if(On(r.app))return Promise.reject(xr(r));const s=js(r),f=await kR(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GR).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&$R(r),g}),m=await xs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}async function ZR(r,t){const n=an(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:u}=await HR(n.auth,o);u!==r.email&&await r.reload()}function WR(r,t,n,s){return an(r).onIdTokenChanged(t,n,s)}function JR(r,t,n){return an(r).beforeAuthStateChanged(t,n)}function tI(r,t,n,s){return an(r).onAuthStateChanged(t,n,s)}const Bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bc,"1"),this.storage.removeItem(Bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=1e3,nI=10;class D0 extends C0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);AR()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,nI):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}D0.type="LOCAL";const iI=D0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0 extends C0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}O0.type="SESSION";const N0=O0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new hh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),g=await rI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const y=Vm("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const I=S;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(I.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return window}function aI(r){ui().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(){return typeof ui().WorkerGlobalScope<"u"&&typeof ui().importScripts=="function"}async function oI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function uI(){return M0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="firebaseLocalStorageDb",cI=1,jc="firebaseLocalStorage",V0="fbase_key";class Fl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fh(r,t){return r.transaction([jc],t?"readwrite":"readonly").objectStore(jc)}function hI(){const r=indexedDB.deleteDatabase(x0);return new Fl(r).toPromise()}function rm(){const r=indexedDB.open(x0,cI);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(jc,{keyPath:V0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(jc)?t(s):(s.close(),await hI(),t(await rm()))})})}async function gv(r,t,n){const s=fh(r,!0).put({[V0]:t,value:n});return new Fl(s).toPromise()}async function fI(r,t){const n=fh(r,!1).get(t),s=await new Fl(n).toPromise();return s===void 0?null:s.value}function yv(r,t){const n=fh(r,!0).delete(t);return new Fl(n).toPromise()}const dI=800,mI=3;class P0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>mI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(uI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await oI(),!this.activeServiceWorker)return;this.sender=new sI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||lI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await rm();return await gv(t,Bc,"1"),await yv(t,Bc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>fI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=fh(o,!1).getAll();return new Fl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P0.type="LOCAL";const pI=P0;new ql(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(r,t){return t?Fi(t):(Et(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends R0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ga(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ga(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ga(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function gI(r){return YR(r.auth,new Pm(r),r.bypassAuthState)}function yI(r){const{auth:t,user:n}=r;return Et(n,t,"internal-error"),QR(n,new Pm(r),r.bypassAuthState)}async function _I(r){const{auth:t,user:n}=r;return Et(n,t,"internal-error"),KR(n,new Pm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gI;case"linkViaPopup":case"linkViaRedirect":return _I;case"reauthViaPopup":case"reauthViaRedirect":return yI;default:di(this.auth,"internal-error")}}resolve(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new ql(2e3,1e4);async function EI(r,t,n){if(On(r.app))return Promise.reject(qn(r,"operation-not-supported-in-this-environment"));const s=js(r);nR(r,t,xm);const o=k0(s,n);return new Cs(s,"signInViaPopup",t,o).executeNotNull()}class Cs extends U0{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Et(t,this.auth,"internal-error"),t}async onExecution(){Qi(this.filter.length===1,"Popup operations only handle one event");const t=Vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,vI.get())};t()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="pendingRedirect",Ic=new Map;class AI extends U0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Ic.get(this.auth._key());if(!t){try{const s=await SI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Ic.set(this.auth._key(),t)}return this.bypassAuthState||Ic.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SI(r,t){const n=RI(t),s=wI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function bI(r,t){Ic.set(r._key(),t)}function wI(r){return Fi(r._redirectPersistence)}function RI(r){return Rc(TI,r.config.apiKey,r.name)}async function II(r,t,n=!1){if(On(r.app))return Promise.reject(xr(r));const s=js(r),o=k0(s,t),f=await new AI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=10*60*1e3;class DI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!OI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!L0(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(_v(t))}saveEventToCache(t){this.cachedEventUids.add(_v(t)),this.lastProcessedEventTime=Date.now()}}function _v(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function L0({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function OI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(r,t={}){return Hr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function VI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await NI(r);for(const n of t)try{if(PI(n))return}catch{}di(r,"unauthorized-domain")}function PI(r){const t=nm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!xI.test(n))return!1;if(MI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new ql(3e4,6e4);function vv(){const r=ui().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function UI(r){return new Promise((t,n)=>{var s,o,u;function f(){vv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vv(),n(qn(r,"network-request-failed"))},timeout:kI.get()})}if(!((o=(s=ui().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=ui().gapi)===null||u===void 0)&&u.load)f();else{const m=NR("iframefcb");return ui()[m]=()=>{gapi.load?f():n(qn(r,"network-request-failed"))},S0(`${OR()}?onload=${m}`).catch(g=>n(g))}}).catch(t=>{throw Cc=null,t})}let Cc=null;function LI(r){return Cc=Cc||UI(r),Cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=new ql(5e3,15e3),BI="__/auth/iframe",jI="emulator/auth/iframe",qI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FI(r){const t=r.config;Et(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Om(t,jI):`https://${r.config.authDomain}/${BI}`,s={apiKey:t.apiKey,appName:r.name,v:eo},o=HI.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${jl(s).slice(1)}`}async function GI(r){const t=await LI(r),n=ui().gapi;return Et(n,r,"internal-error"),t.open({where:document.body,url:FI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=qn(r,"network-request-failed"),m=ui().setTimeout(()=>{u(f)},zI.get());function g(){ui().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QI=500,YI=600,$I="_blank",XI="http://localhost";class Ev{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZI(r,t,n,s=QI,o=YI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},KI),{width:s.toString(),height:o.toString(),top:u,left:f}),y=$e().toLowerCase();n&&(m=g0(y)?$I:n),m0(y)&&(t=t||XI,g.scrollbars="yes");const E=Object.entries(g).reduce((I,[B,$])=>`${I}${B}=${$},`,"");if(TR(y)&&m!=="_self")return WI(t||"",m),new Ev(null);const S=window.open(t||"",m,E);Et(S,r,"popup-blocked");try{S.focus()}catch{}return new Ev(S)}function WI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="__/auth/handler",tC="emulator/auth/handler",eC=encodeURIComponent("fac");async function Tv(r,t,n,s,o,u){Et(r.config.authDomain,r,"auth-domain-config-required"),Et(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:eo,eventId:o};if(t instanceof xm){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",z1(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(t instanceof Hl){const E=t.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),y=g?`#${eC}=${encodeURIComponent(g)}`:"";return`${nC(r)}?${jl(m).slice(1)}${y}`}function nC({config:r}){return r.emulator?Om(r,tC):`https://${r.authDomain}/${JI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="webStorageSupport";class iC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N0,this._completeRedirectFn=II,this._overrideRedirectResult=bI}async _openPopup(t,n,s,o){var u;Qi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Tv(t,n,s,nm(),o);return ZI(t,f,Vm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await Tv(t,n,s,nm(),o);return aI(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Qi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await GI(t),s=new DI(t);return n.register("authEvent",o=>(Et(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(jd,{type:jd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[jd];f!==void 0&&n(!!f),di(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return T0()||p0()||Mm()}}const rC=iC;var Av="@firebase/auth",Sv="1.10.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Et(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oC(r){fi(new Hn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Et(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(r)},y=new IR(s,o,u,g);return LR(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),fi(new Hn("auth-internal",t=>{const n=js(t.getProvider("auth").getImmediate());return(s=>new sC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Av,Sv,aC(r)),Mn(Av,Sv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=5*60,uC=$E("authIdTokenMaxAge")||lC;let bv=null;const cC=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>uC)return;const o=n==null?void 0:n.token;bv!==o&&(bv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function hC(r=Rm()){const t=Bs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=UR(r,{popupRedirectResolver:rC,persistence:[pI,iI,N0]}),s=$E("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=cC(u.toString());JR(n,f,()=>f(n.currentUser)),WR(n,m=>f(m))}}const o=QE("auth");return o?zR(n,`http://${o}`):lh("Auth",!1),n}function fC(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}CR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=qn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",fC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oC("Browser");var dC="firebase",mC="11.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(dC,mC,"app");const z0="@firebase/installations",km="0.6.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=1e4,j0=`w:${km}`,q0="FIS_v2",pC="https://firebaseinstallations.googleapis.com/v1",gC=60*60*1e3,yC="installations",_C="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vs=new zs(yC,_C,vC);function H0(r){return r instanceof Fn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0({projectId:r}){return`${pC}/projects/${r}/installations`}function G0(r){return{token:r.token,requestStatus:2,expiresIn:TC(r.expiresIn),creationTime:Date.now()}}async function K0(r,t){const s=(await t.json()).error;return Vs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Q0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function EC(r,{refreshToken:t}){const n=Q0(r);return n.append("Authorization",AC(t)),n}async function Y0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function TC(r){return Number(r.replace("s","000"))}function AC(r){return`${q0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=F0(r),o=Q0(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:q0,appId:r.appId,sdkVersion:j0},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await Y0(()=>fetch(s,m));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:G0(y.authToken)}}else throw await K0("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=/^[cdef][\w-]{21}$/,sm="";function RC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=IC(r);return wC.test(n)?n:sm}catch{return sm}}function IC(r){return bC(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Map;function Z0(r,t){const n=dh(r);W0(n,t),CC(n,t)}function W0(r,t){const n=X0.get(r);if(n)for(const s of n)s(t)}function CC(r,t){const n=DC();n&&n.postMessage({key:r,fid:t}),OC()}let Ds=null;function DC(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=r=>{W0(r.data.key,r.data.fid)}),Ds}function OC(){X0.size===0&&Ds&&(Ds.close(),Ds=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="firebase-installations-database",MC=1,Ps="firebase-installations-store";let qd=null;function Um(){return qd||(qd=n0(NC,MC,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ps)}}})),qd}async function qc(r,t){const n=dh(r),o=(await Um()).transaction(Ps,"readwrite"),u=o.objectStore(Ps),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&Z0(r,t.fid),t}async function J0(r){const t=dh(r),s=(await Um()).transaction(Ps,"readwrite");await s.objectStore(Ps).delete(t),await s.done}async function mh(r,t){const n=dh(r),o=(await Um()).transaction(Ps,"readwrite"),u=o.objectStore(Ps),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&Z0(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(r){let t;const n=await mh(r.appConfig,s=>{const o=xC(s),u=VC(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===sm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function xC(r){const t=r||{fid:RC(),registrationStatus:0};return tT(t)}function VC(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Vs.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=PC(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:kC(r)}:{installationEntry:t}}async function PC(r,t){try{const n=await SC(r,t);return qc(r.appConfig,n)}catch(n){throw H0(n)&&n.customData.serverCode===409?await J0(r.appConfig):await qc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function kC(r){let t=await wv(r.appConfig);for(;t.registrationStatus===1;)await $0(100),t=await wv(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Lm(r);return s||n}return t}function wv(r){return mh(r,t=>{if(!t)throw Vs.create("installation-not-found");return tT(t)})}function tT(r){return UC(r)?{fid:r.fid,registrationStatus:0}:r}function UC(r){return r.registrationStatus===1&&r.registrationTime+B0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC({appConfig:r,heartbeatServiceProvider:t},n){const s=zC(r,n),o=EC(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:j0,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await Y0(()=>fetch(s,m));if(g.ok){const y=await g.json();return G0(y)}else throw await K0("Generate Auth Token",g)}function zC(r,{fid:t}){return`${F0(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(r,t=!1){let n;const s=await mh(r.appConfig,u=>{if(!eT(u))throw Vs.create("not-registered");const f=u.authToken;if(!t&&qC(f))return u;if(f.requestStatus===1)return n=BC(r,t),u;{if(!navigator.onLine)throw Vs.create("app-offline");const m=FC(u);return n=jC(r,m),m}});return n?await n:s.authToken}async function BC(r,t){let n=await Rv(r.appConfig);for(;n.authToken.requestStatus===1;)await $0(100),n=await Rv(r.appConfig);const s=n.authToken;return s.requestStatus===0?zm(r,t):s}function Rv(r){return mh(r,t=>{if(!eT(t))throw Vs.create("not-registered");const n=t.authToken;return GC(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function jC(r,t){try{const n=await LC(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await qc(r.appConfig,s),n}catch(n){if(H0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await J0(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await qc(r.appConfig,s)}throw n}}function eT(r){return r!==void 0&&r.registrationStatus===2}function qC(r){return r.requestStatus===2&&!HC(r)}function HC(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+gC}function FC(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function GC(r){return r.requestStatus===1&&r.requestTime+B0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(r){const t=r,{installationEntry:n,registrationPromise:s}=await Lm(t);return s?s.catch(console.error):zm(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(r,t=!1){const n=r;return await YC(n),(await zm(n,t)).token}async function YC(r){const{registrationPromise:t}=await Lm(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(r){if(!r||!r.options)throw Hd("App Configuration");if(!r.name)throw Hd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Hd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Hd(r){return Vs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="installations",XC="installations-internal",ZC=r=>{const t=r.getProvider("app").getImmediate(),n=$C(t),s=Bs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},WC=r=>{const t=r.getProvider("app").getImmediate(),n=Bs(t,nT).getImmediate();return{getId:()=>KC(n),getToken:o=>QC(n,o)}};function JC(){fi(new Hn(nT,ZC,"PUBLIC")),fi(new Hn(XC,WC,"PRIVATE"))}JC();Mn(z0,km);Mn(z0,km,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="analytics",t2="firebase_id",e2="origin",n2=60*1e3,i2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new uh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new zs("analytics","Analytics",r2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(r){if(!r.startsWith(Bm)){const t=gn.create("invalid-gtag-resource",{gtagURL:r});return sn.warn(t.message),""}return r}function iT(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function a2(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function o2(r,t){const n=a2("firebase-js-sdk-policy",{createScriptURL:s2}),s=document.createElement("script"),o=`${Bm}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function l2(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function u2(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const g=(await iT(n)).find(y=>y.measurementId===o);g&&await t[g.appId]}}catch(m){sn.error(m)}r("config",o,u)}async function c2(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await iT(n);for(const g of f){const y=m.find(S=>S.measurementId===g),E=y&&t[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){sn.error(u)}}function h2(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,g]=f;await c2(r,t,n,m,g)}else if(u==="config"){const[m,g]=f;await u2(r,t,n,s,m,g)}else if(u==="consent"){const[m,g]=f;r("consent",m,g)}else if(u==="get"){const[m,g,y]=f;r("get",m,g,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){sn.error(m)}}return o}function f2(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=h2(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function d2(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Bm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=30,p2=1e3;class g2{constructor(t={},n=p2){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const rT=new g2;function y2(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function _2(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:y2(s)},u=i2.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const g=await f.json();!((t=g.error)===null||t===void 0)&&t.message&&(m=g.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function v2(r,t=rT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw gn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw gn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new A2;return setTimeout(async()=>{m.abort()},n2),sT({appId:s,apiKey:o,measurementId:u},f,m,t)}async function sT(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=rT){var u;const{appId:f,measurementId:m}=r;try{await E2(s,t)}catch(g){if(m)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:m};throw g}try{const g=await _2(r);return o.deleteThrottleMetadata(f),g}catch(g){const y=g;if(!T2(y)){if(o.deleteThrottleMetadata(f),m)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw g}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?Z_(n,o.intervalMillis,m2):Z_(n,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,S),sn.debug(`Calling attemptFetch again in ${E} millis`),sT(r,S,s,o)}}function E2(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(gn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function T2(r){if(!(r instanceof Fn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class A2{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function S2(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(){if(WE())try{await JE()}catch(r){return sn.warn(gn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return sn.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function w2(r,t,n,s,o,u,f){var m;const g=v2(r);g.then(B=>{n[B.measurementId]=B.appId,r.options.measurementId&&B.measurementId!==r.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${B.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(B=>sn.error(B)),t.push(g);const y=b2().then(B=>{if(B)return s.getId()}),[E,S]=await Promise.all([g,y]);d2(u)||o2(u,E.measurementId),o("js",new Date);const I=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return I[e2]="firebase",I.update=!0,S!=null&&(I[t2]=S),o("config",E.measurementId,I),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(t){this.app=t}_delete(){return delete Sl[this.app.options.appId],Promise.resolve()}}let Sl={},Iv=[];const Cv={};let Fd="dataLayer",I2="gtag",Dv,aT,Ov=!1;function C2(){const r=[];if(ZE()&&r.push("This is a browser extension environment."),P1()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=gn.create("invalid-analytics-context",{errorInfo:t});sn.warn(n.message)}}function D2(r,t,n){C2();const s=r.options.appId;if(!s)throw gn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(Sl[s]!=null)throw gn.create("already-exists",{id:s});if(!Ov){l2(Fd);const{wrappedGtag:u,gtagCore:f}=f2(Sl,Iv,Cv,Fd,I2);aT=u,Dv=f,Ov=!0}return Sl[s]=w2(r,Iv,Cv,t,Dv,Fd,n),new R2(r)}function O2(r=Rm()){r=an(r);const t=Bs(r,Hc);return t.isInitialized()?t.getImmediate():N2(r)}function N2(r,t={}){const n=Bs(r,Hc);if(n.isInitialized()){const o=n.getImmediate();if(kr(t,n.getOptions()))return o;throw gn.create("already-initialized")}return n.initialize({options:t})}function M2(r,t,n,s){r=an(r),S2(aT,Sl[r.app.options.appId],t,n,s).catch(o=>sn.error(o))}const Nv="@firebase/analytics",Mv="0.10.15";function x2(){fi(new Hn(Hc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return D2(s,o,n)},"PUBLIC")),fi(new Hn("analytics-internal",r,"PRIVATE")),Mn(Nv,Mv),Mn(Nv,Mv,"esm2017");function r(t){try{const n=t.getProvider(Hc).getImmediate();return{logEvent:(s,o,u)=>M2(n,s,o,u)}}catch(n){throw gn.create("interop-component-reg-failed",{reason:n})}}}x2();var xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,oT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,b){function R(){}R.prototype=b.prototype,M.D=b.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,x,P){for(var C=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)C[Ve-2]=arguments[Ve];return b.prototype[x].apply(N,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,b,R){R||(R=0);var N=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)N[x]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(x=0;16>x;++x)N[x]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=M.g[0],R=M.g[1],x=M.g[2];var P=M.g[3],C=b+(P^R&(x^P))+N[0]+3614090360&4294967295;b=R+(C<<7&4294967295|C>>>25),C=P+(x^b&(R^x))+N[1]+3905402710&4294967295,P=b+(C<<12&4294967295|C>>>20),C=x+(R^P&(b^R))+N[2]+606105819&4294967295,x=P+(C<<17&4294967295|C>>>15),C=R+(b^x&(P^b))+N[3]+3250441966&4294967295,R=x+(C<<22&4294967295|C>>>10),C=b+(P^R&(x^P))+N[4]+4118548399&4294967295,b=R+(C<<7&4294967295|C>>>25),C=P+(x^b&(R^x))+N[5]+1200080426&4294967295,P=b+(C<<12&4294967295|C>>>20),C=x+(R^P&(b^R))+N[6]+2821735955&4294967295,x=P+(C<<17&4294967295|C>>>15),C=R+(b^x&(P^b))+N[7]+4249261313&4294967295,R=x+(C<<22&4294967295|C>>>10),C=b+(P^R&(x^P))+N[8]+1770035416&4294967295,b=R+(C<<7&4294967295|C>>>25),C=P+(x^b&(R^x))+N[9]+2336552879&4294967295,P=b+(C<<12&4294967295|C>>>20),C=x+(R^P&(b^R))+N[10]+4294925233&4294967295,x=P+(C<<17&4294967295|C>>>15),C=R+(b^x&(P^b))+N[11]+2304563134&4294967295,R=x+(C<<22&4294967295|C>>>10),C=b+(P^R&(x^P))+N[12]+1804603682&4294967295,b=R+(C<<7&4294967295|C>>>25),C=P+(x^b&(R^x))+N[13]+4254626195&4294967295,P=b+(C<<12&4294967295|C>>>20),C=x+(R^P&(b^R))+N[14]+2792965006&4294967295,x=P+(C<<17&4294967295|C>>>15),C=R+(b^x&(P^b))+N[15]+1236535329&4294967295,R=x+(C<<22&4294967295|C>>>10),C=b+(x^P&(R^x))+N[1]+4129170786&4294967295,b=R+(C<<5&4294967295|C>>>27),C=P+(R^x&(b^R))+N[6]+3225465664&4294967295,P=b+(C<<9&4294967295|C>>>23),C=x+(b^R&(P^b))+N[11]+643717713&4294967295,x=P+(C<<14&4294967295|C>>>18),C=R+(P^b&(x^P))+N[0]+3921069994&4294967295,R=x+(C<<20&4294967295|C>>>12),C=b+(x^P&(R^x))+N[5]+3593408605&4294967295,b=R+(C<<5&4294967295|C>>>27),C=P+(R^x&(b^R))+N[10]+38016083&4294967295,P=b+(C<<9&4294967295|C>>>23),C=x+(b^R&(P^b))+N[15]+3634488961&4294967295,x=P+(C<<14&4294967295|C>>>18),C=R+(P^b&(x^P))+N[4]+3889429448&4294967295,R=x+(C<<20&4294967295|C>>>12),C=b+(x^P&(R^x))+N[9]+568446438&4294967295,b=R+(C<<5&4294967295|C>>>27),C=P+(R^x&(b^R))+N[14]+3275163606&4294967295,P=b+(C<<9&4294967295|C>>>23),C=x+(b^R&(P^b))+N[3]+4107603335&4294967295,x=P+(C<<14&4294967295|C>>>18),C=R+(P^b&(x^P))+N[8]+1163531501&4294967295,R=x+(C<<20&4294967295|C>>>12),C=b+(x^P&(R^x))+N[13]+2850285829&4294967295,b=R+(C<<5&4294967295|C>>>27),C=P+(R^x&(b^R))+N[2]+4243563512&4294967295,P=b+(C<<9&4294967295|C>>>23),C=x+(b^R&(P^b))+N[7]+1735328473&4294967295,x=P+(C<<14&4294967295|C>>>18),C=R+(P^b&(x^P))+N[12]+2368359562&4294967295,R=x+(C<<20&4294967295|C>>>12),C=b+(R^x^P)+N[5]+4294588738&4294967295,b=R+(C<<4&4294967295|C>>>28),C=P+(b^R^x)+N[8]+2272392833&4294967295,P=b+(C<<11&4294967295|C>>>21),C=x+(P^b^R)+N[11]+1839030562&4294967295,x=P+(C<<16&4294967295|C>>>16),C=R+(x^P^b)+N[14]+4259657740&4294967295,R=x+(C<<23&4294967295|C>>>9),C=b+(R^x^P)+N[1]+2763975236&4294967295,b=R+(C<<4&4294967295|C>>>28),C=P+(b^R^x)+N[4]+1272893353&4294967295,P=b+(C<<11&4294967295|C>>>21),C=x+(P^b^R)+N[7]+4139469664&4294967295,x=P+(C<<16&4294967295|C>>>16),C=R+(x^P^b)+N[10]+3200236656&4294967295,R=x+(C<<23&4294967295|C>>>9),C=b+(R^x^P)+N[13]+681279174&4294967295,b=R+(C<<4&4294967295|C>>>28),C=P+(b^R^x)+N[0]+3936430074&4294967295,P=b+(C<<11&4294967295|C>>>21),C=x+(P^b^R)+N[3]+3572445317&4294967295,x=P+(C<<16&4294967295|C>>>16),C=R+(x^P^b)+N[6]+76029189&4294967295,R=x+(C<<23&4294967295|C>>>9),C=b+(R^x^P)+N[9]+3654602809&4294967295,b=R+(C<<4&4294967295|C>>>28),C=P+(b^R^x)+N[12]+3873151461&4294967295,P=b+(C<<11&4294967295|C>>>21),C=x+(P^b^R)+N[15]+530742520&4294967295,x=P+(C<<16&4294967295|C>>>16),C=R+(x^P^b)+N[2]+3299628645&4294967295,R=x+(C<<23&4294967295|C>>>9),C=b+(x^(R|~P))+N[0]+4096336452&4294967295,b=R+(C<<6&4294967295|C>>>26),C=P+(R^(b|~x))+N[7]+1126891415&4294967295,P=b+(C<<10&4294967295|C>>>22),C=x+(b^(P|~R))+N[14]+2878612391&4294967295,x=P+(C<<15&4294967295|C>>>17),C=R+(P^(x|~b))+N[5]+4237533241&4294967295,R=x+(C<<21&4294967295|C>>>11),C=b+(x^(R|~P))+N[12]+1700485571&4294967295,b=R+(C<<6&4294967295|C>>>26),C=P+(R^(b|~x))+N[3]+2399980690&4294967295,P=b+(C<<10&4294967295|C>>>22),C=x+(b^(P|~R))+N[10]+4293915773&4294967295,x=P+(C<<15&4294967295|C>>>17),C=R+(P^(x|~b))+N[1]+2240044497&4294967295,R=x+(C<<21&4294967295|C>>>11),C=b+(x^(R|~P))+N[8]+1873313359&4294967295,b=R+(C<<6&4294967295|C>>>26),C=P+(R^(b|~x))+N[15]+4264355552&4294967295,P=b+(C<<10&4294967295|C>>>22),C=x+(b^(P|~R))+N[6]+2734768916&4294967295,x=P+(C<<15&4294967295|C>>>17),C=R+(P^(x|~b))+N[13]+1309151649&4294967295,R=x+(C<<21&4294967295|C>>>11),C=b+(x^(R|~P))+N[4]+4149444226&4294967295,b=R+(C<<6&4294967295|C>>>26),C=P+(R^(b|~x))+N[11]+3174756917&4294967295,P=b+(C<<10&4294967295|C>>>22),C=x+(b^(P|~R))+N[2]+718787259&4294967295,x=P+(C<<15&4294967295|C>>>17),C=R+(P^(x|~b))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+b&4294967295,M.g[1]=M.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,M.g[2]=M.g[2]+x&4294967295,M.g[3]=M.g[3]+P&4294967295}s.prototype.u=function(M,b){b===void 0&&(b=M.length);for(var R=b-this.blockSize,N=this.B,x=this.h,P=0;P<b;){if(x==0)for(;P<=R;)o(this,M,P),P+=this.blockSize;if(typeof M=="string"){for(;P<b;)if(N[x++]=M.charCodeAt(P++),x==this.blockSize){o(this,N),x=0;break}}else for(;P<b;)if(N[x++]=M[P++],x==this.blockSize){o(this,N),x=0;break}}this.h=x,this.o+=b},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var b=1;b<M.length-8;++b)M[b]=0;var R=8*this.o;for(b=M.length-8;b<M.length;++b)M[b]=R&255,R/=256;for(this.u(M),M=Array(16),b=R=0;4>b;++b)for(var N=0;32>N;N+=8)M[R++]=this.g[b]>>>N&255;return M};function u(M,b){var R=m;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=b(M)}function f(M,b){this.h=b;for(var R=[],N=!0,x=M.length-1;0<=x;x--){var P=M[x]|0;N&&P==b||(R[x]=P,N=!1)}this.g=R}var m={};function g(M){return-128<=M&&128>M?u(M,function(b){return new f([b|0],0>b?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return S;if(0>M)return H(y(-M));for(var b=[],R=1,N=0;M>=R;N++)b[N]=M/R|0,R*=4294967296;return new f(b,0)}function E(M,b){if(M.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M.charAt(0)=="-")return H(E(M.substring(1),b));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(b,8)),N=S,x=0;x<M.length;x+=8){var P=Math.min(8,M.length-x),C=parseInt(M.substring(x,x+P),b);8>P?(P=y(Math.pow(b,P)),N=N.j(P).add(y(C))):(N=N.j(R),N=N.add(y(C)))}return N}var S=g(0),I=g(1),B=g(16777216);r=f.prototype,r.m=function(){if(W(this))return-H(this).m();for(var M=0,b=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*b,b*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if($(this))return"0";if(W(this))return"-"+H(this).toString(M);for(var b=y(Math.pow(M,6)),R=this,N="";;){var x=wt(R,b).g;R=rt(R,x.j(b));var P=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=x,$(R))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function $(M){if(M.h!=0)return!1;for(var b=0;b<M.g.length;b++)if(M.g[b]!=0)return!1;return!0}function W(M){return M.h==-1}r.l=function(M){return M=rt(this,M),W(M)?-1:$(M)?0:1};function H(M){for(var b=M.g.length,R=[],N=0;N<b;N++)R[N]=~M.g[N];return new f(R,~M.h).add(I)}r.abs=function(){return W(this)?H(this):this},r.add=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],N=0,x=0;x<=b;x++){var P=N+(this.i(x)&65535)+(M.i(x)&65535),C=(P>>>16)+(this.i(x)>>>16)+(M.i(x)>>>16);N=C>>>16,P&=65535,C&=65535,R[x]=C<<16|P}return new f(R,R[R.length-1]&-2147483648?-1:0)};function rt(M,b){return M.add(H(b))}r.j=function(M){if($(this)||$(M))return S;if(W(this))return W(M)?H(this).j(H(M)):H(H(this).j(M));if(W(M))return H(this.j(H(M)));if(0>this.l(B)&&0>M.l(B))return y(this.m()*M.m());for(var b=this.g.length+M.g.length,R=[],N=0;N<2*b;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var x=0;x<M.g.length;x++){var P=this.i(N)>>>16,C=this.i(N)&65535,Ve=M.i(x)>>>16,re=M.i(x)&65535;R[2*N+2*x]+=C*re,at(R,2*N+2*x),R[2*N+2*x+1]+=P*re,at(R,2*N+2*x+1),R[2*N+2*x+1]+=C*Ve,at(R,2*N+2*x+1),R[2*N+2*x+2]+=P*Ve,at(R,2*N+2*x+2)}for(N=0;N<b;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=b;N<2*b;N++)R[N]=0;return new f(R,0)};function at(M,b){for(;(M[b]&65535)!=M[b];)M[b+1]+=M[b]>>>16,M[b]&=65535,b++}function lt(M,b){this.g=M,this.h=b}function wt(M,b){if($(b))throw Error("division by zero");if($(M))return new lt(S,S);if(W(M))return b=wt(H(M),b),new lt(H(b.g),H(b.h));if(W(b))return b=wt(M,H(b)),new lt(H(b.g),b.h);if(30<M.g.length){if(W(M)||W(b))throw Error("slowDivide_ only works with positive integers.");for(var R=I,N=b;0>=N.l(M);)R=yt(R),N=yt(N);var x=Vt(R,1),P=Vt(N,1);for(N=Vt(N,2),R=Vt(R,2);!$(N);){var C=P.add(N);0>=C.l(M)&&(x=x.add(R),P=C),N=Vt(N,1),R=Vt(R,1)}return b=rt(M,x.j(b)),new lt(x,b)}for(x=S;0<=M.l(b);){for(R=Math.max(1,Math.floor(M.m()/b.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=y(R),C=P.j(b);W(C)||0<C.l(M);)R-=N,P=y(R),C=P.j(b);$(P)&&(P=I),x=x.add(P),M=rt(M,C)}return new lt(x,M)}r.A=function(M){return wt(this,M).h},r.and=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)&M.i(N);return new f(R,this.h&M.h)},r.or=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)|M.i(N);return new f(R,this.h|M.h)},r.xor=function(M){for(var b=Math.max(this.g.length,M.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)^M.i(N);return new f(R,this.h^M.h)};function yt(M){for(var b=M.g.length+1,R=[],N=0;N<b;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new f(R,M.h)}function Vt(M,b){var R=b>>5;b%=32;for(var N=M.g.length-R,x=[],P=0;P<N;P++)x[P]=0<b?M.i(P+R)>>>b|M.i(P+R+1)<<32-b:M.i(P+R);return new f(x,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,oT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Vr=f}).apply(typeof xv<"u"?xv:typeof self<"u"?self:typeof window<"u"?window:{});var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lT,_l,uT,Dc,am,cT,hT,fT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,_){return c==Array.prototype||c==Object.prototype||(c[p]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ec=="object"&&Ec];for(var p=0;p<c.length;++p){var _=c[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var k=c[A];if(!(k in _))break t;_=_[k]}c=c[c.length-1],A=_[c],p=p(A),p!=A&&p!=null&&t(_,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var _=0,A=!1,k={next:function(){if(!A&&_<c.length){var q=_++;return{value:p(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function y(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function E(c,p,_){return c.call.apply(c.bind,arguments)}function S(c,p,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,A),c.apply(p,k)}}return function(){return c.apply(p,arguments)}}function I(c,p,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,I.apply(null,arguments)}function B(c,p){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function $(c,p){function _(){}_.prototype=p.prototype,c.aa=p.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,k,q){for(var tt=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)tt[Pt-2]=arguments[Pt];return p.prototype[k].apply(A,tt)}}function W(c){const p=c.length;if(0<p){const _=Array(p);for(let A=0;A<p;A++)_[A]=c[A];return _}return[]}function H(c,p){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(g(A)){const k=c.length||0,q=A.length||0;c.length=k+q;for(let tt=0;tt<q;tt++)c[k+tt]=A[tt]}else c.push(A)}}class rt{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function at(c){return/^[\s\xa0]*$/.test(c)}function lt(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function wt(c){return wt[" "](c),c}wt[" "]=function(){};var yt=lt().indexOf("Gecko")!=-1&&!(lt().toLowerCase().indexOf("webkit")!=-1&&lt().indexOf("Edge")==-1)&&!(lt().indexOf("Trident")!=-1||lt().indexOf("MSIE")!=-1)&&lt().indexOf("Edge")==-1;function Vt(c,p,_){for(const A in c)p.call(_,c[A],A,c)}function M(c,p){for(const _ in c)p.call(void 0,c[_],_,c)}function b(c){const p={};for(const _ in c)p[_]=c[_];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,p){let _,A;for(let k=1;k<arguments.length;k++){A=arguments[k];for(_ in A)c[_]=A[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function x(c){var p=1;c=c.split(":");const _=[];for(;0<p&&c.length;)_.push(c.shift()),p--;return c.length&&_.push(c.join(":")),_}function P(c){m.setTimeout(()=>{throw c},0)}function C(){var c=Bt;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Ve{constructor(){this.h=this.g=null}add(p,_){const A=re.get();A.set(p,_),this.h?this.h.next=A:this.g=A,this.h=A}}var re=new rt(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let et,ht=!1,Bt=new Ve,D=()=>{const c=m.Promise.resolve(void 0);et=()=>{c.then(X)}};var X=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){P(_)}var p=re;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}ht=!1};function nt(){this.s=this.s,this.C=this.C}nt.prototype.s=!1,nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,p),m.removeEventListener("test",_,p)}catch{}return c}();function Ct(c,p){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(yt){t:{try{wt(p.nodeName);var k=!0;break t}catch{}k=!1}k||(p=null)}}else _=="mouseover"?p=c.fromElement:_=="mouseout"&&(p=c.toElement);this.relatedTarget=p,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Tt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ct.aa.h.call(this)}}$(Ct,J);var Tt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function Gn(c,p,_,A,k){this.listener=c,this.proxy=null,this.src=p,this.type=_,this.capture=!!A,this.ha=k,this.key=++Wt,this.da=this.fa=!1}function Xi(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function gi(c){this.src=c,this.g={},this.h=0}gi.prototype.add=function(c,p,_,A,k){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var tt=Gr(c,p,A,k);return-1<tt?(p=c[tt],_||(p.fa=!1)):(p=new Gn(p,this.src,q,!!A,k),p.fa=_,c.push(p)),p};function Fr(c,p){var _=p.type;if(_ in c.g){var A=c.g[_],k=Array.prototype.indexOf.call(A,p,void 0),q;(q=0<=k)&&Array.prototype.splice.call(A,k,1),q&&(Xi(p),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Gr(c,p,_,A){for(var k=0;k<c.length;++k){var q=c[k];if(!q.da&&q.listener==p&&q.capture==!!_&&q.ha==A)return k}return-1}var Kr="closure_lm_"+(1e6*Math.random()|0),oo={};function $l(c,p,_,A,k){if(Array.isArray(p)){for(var q=0;q<p.length;q++)$l(c,p[q],_,A,k);return null}return _=Xl(_),c&&c[Ie]?c.K(p,_,y(A)?!!A.capture:!1,k):yn(c,p,_,!1,A,k)}function yn(c,p,_,A,k,q){if(!p)throw Error("Invalid event type");var tt=y(k)?!!k.capture:!!k,Pt=Qs(c);if(Pt||(c[Kr]=Pt=new gi(c)),_=Pt.add(p,_,A,tt,q),_.proxy)return _;if(A=Ih(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ft||(k=tt),k===void 0&&(k=!1),c.addEventListener(p.toString(),A,k);else if(c.attachEvent)c.attachEvent(Qr(p.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ih(){function c(_){return p.call(c.src,c.listener,_)}const p=Ch;return c}function lo(c,p,_,A,k){if(Array.isArray(p))for(var q=0;q<p.length;q++)lo(c,p[q],_,A,k);else A=y(A)?!!A.capture:!!A,_=Xl(_),c&&c[Ie]?(c=c.i,p=String(p).toString(),p in c.g&&(q=c.g[p],_=Gr(q,_,A,k),-1<_&&(Xi(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[p],c.h--)))):c&&(c=Qs(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Gr(p,_,A,k)),(_=-1<c?p[c]:null)&&Ks(_))}function Ks(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[Ie])Fr(p.i,c);else{var _=c.type,A=c.proxy;p.removeEventListener?p.removeEventListener(_,A,c.capture):p.detachEvent?p.detachEvent(Qr(_),A):p.addListener&&p.removeListener&&p.removeListener(A),(_=Qs(p))?(Fr(_,c),_.h==0&&(_.src=null,p[Kr]=null)):Xi(c)}}}function Qr(c){return c in oo?oo[c]:oo[c]="on"+c}function Ch(c,p){if(c.da)c=!0;else{p=new Ct(p,this);var _=c.listener,A=c.ha||c.src;c.fa&&Ks(c),c=_.call(A,p)}return c}function Qs(c){return c=c[Kr],c instanceof gi?c:null}var uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(c){return typeof c=="function"?c:(c[uo]||(c[uo]=function(p){return c.handleEvent(p)}),c[uo])}function se(){nt.call(this),this.i=new gi(this),this.M=this,this.F=null}$(se,nt),se.prototype[Ie]=!0,se.prototype.removeEventListener=function(c,p,_,A){lo(this,c,p,_,A)};function Ft(c,p){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=p.type||p,typeof p=="string")p=new J(p,c);else if(p instanceof J)p.target=p.target||c;else{var k=p;p=new J(A,c),N(p,k)}if(k=!0,_)for(var q=_.length-1;0<=q;q--){var tt=p.g=_[q];k=on(tt,A,!0,p)&&k}if(tt=p.g=c,k=on(tt,A,!0,p)&&k,k=on(tt,A,!1,p)&&k,_)for(q=0;q<_.length;q++)tt=p.g=_[q],k=on(tt,A,!1,p)&&k}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var _=c.g[p],A=0;A<_.length;A++)Xi(_[A]);delete c.g[p],c.h--}}this.F=null},se.prototype.K=function(c,p,_,A){return this.i.add(String(c),p,!1,_,A)},se.prototype.L=function(c,p,_,A){return this.i.add(String(c),p,!0,_,A)};function on(c,p,_,A){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var k=!0,q=0;q<p.length;++q){var tt=p[q];if(tt&&!tt.da&&tt.capture==_){var Pt=tt.listener,ve=tt.ha||tt.src;tt.fa&&Fr(c.i,tt),k=Pt.call(ve,A)!==!1&&k}}return k&&!A.defaultPrevented}function He(c,p,_){if(typeof c=="function")_&&(c=I(c,_));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function Zl(c){c.g=He(()=>{c.g=null,c.i&&(c.i=!1,Zl(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Dh extends nt{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Zl(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yr(c){nt.call(this),this.h=c,this.g={}}$(Yr,nt);var $r=[];function Xr(c){Vt(c.g,function(p,_){this.g.hasOwnProperty(_)&&Ks(p)},c),c.g={}}Yr.prototype.N=function(){Yr.aa.N.call(this),Xr(this)},Yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vn=m.JSON.stringify,Ys=m.JSON.parse,Zr=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function co(){}co.prototype.h=null;function ho(c){return c.h||(c.h=c.i())}function fo(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _i(){J.call(this,"d")}$(_i,J);function mo(){J.call(this,"c")}$(mo,J);var Kn={},po=null;function Zi(){return po=po||new se}Kn.La="serverreachability";function $s(c){J.call(this,Kn.La,c)}$($s,J);function Wi(c){const p=Zi();Ft(p,new $s(p))}Kn.STAT_EVENT="statevent";function Wl(c,p){J.call(this,Kn.STAT_EVENT,c),this.stat=p}$(Wl,J);function te(c){const p=Zi();Ft(p,new Wl(p,c))}Kn.Ma="timingevent";function _e(c,p){J.call(this,Kn.Ma,c),this.size=p}$(_e,J);function de(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function _n(){this.g=!0}_n.prototype.xa=function(){this.g=!1};function go(c,p,_,A,k,q){c.info(function(){if(c.g)if(q)for(var tt="",Pt=q.split("&"),ve=0;ve<Pt.length;ve++){var kt=Pt[ve].split("=");if(1<kt.length){var De=kt[0];kt=kt[1];var Ee=De.split("_");tt=2<=Ee.length&&Ee[1]=="type"?tt+(De+"="+kt+"&"):tt+(De+"=redacted&")}}else tt=null;else tt=q;return"XMLHTTP REQ ("+A+") [attempt "+k+"]: "+p+`
`+_+`
`+tt})}function Oh(c,p,_,A,k,q,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+k+"]: "+p+`
`+_+`
`+q+" "+tt})}function Ji(c,p,_,A){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Wr(c,_)+(A?" "+A:"")})}function Jl(c,p){c.info(function(){return"TIMEOUT: "+p})}_n.prototype.info=function(){};function Wr(c,p){if(!c.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var k=A[1];if(Array.isArray(k)&&!(1>k.length)){var q=k[0];if(q!="noop"&&q!="stop"&&q!="close")for(var tt=1;tt<k.length;tt++)k[tt]=""}}}}return Vn(_)}catch{return p}}var tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qn;function Yn(){}$(Yn,co),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},Qn=new Yn;function Xe(c,p,_,A){this.j=c,this.i=p,this.l=_,this.R=A||1,this.U=new Yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}var yo={},Xs={};function Pn(c,p,_){c.L=1,c.v=is(ln(p)),c.m=_,c.P=!0,Ei(c,null)}function Ei(c,p){c.F=Date.now(),Jr(c),c.A=ln(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),So(_.i,"t",A),c.C=0,_=c.j.J,c.h=new ue,c.g=pu(c.j,_?p:null,!c.m),0<c.O&&(c.M=new Dh(I(c.Y,c,c.g),c.O)),p=c.U,_=c.g,A=c.ca;var k="readystatechange";Array.isArray(k)||(k&&($r[0]=k.toString()),k=$r);for(var q=0;q<k.length;q++){var tt=$l(_,k[q],A||p.handleEvent,!1,p.h||p);if(!tt)break;p.g[tt.key]=tt}p=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),Wi(),go(c.i,c.u,c.A,c.l,c.R,c.m)}Xe.prototype.ca=function(c){c=c.target;const p=this.M;p&&An(c)==3?p.j():this.Y(c)},Xe.prototype.Y=function(c){try{if(c==this.g)t:{const Ee=An(this.g);var p=this.g.Ba();const Ci=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||ou(this.g)))){this.J||Ee!=4||p==7||(p==8||0>=Ci?Wi(3):Wi(2)),er(this);var _=this.g.Z();this.X=_;e:if(tu(this)){var A=ou(this.g);c="";var k=A.length,q=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pe(this),$n(this);var tt="";break e}this.h.i=new m.TextDecoder}for(p=0;p<k;p++)this.h.h=!0,c+=this.h.i.decode(A[p],{stream:!(q&&p==k-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=_==200,Oh(this.i,this.u,this.A,this.l,this.R,Ee,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,ve=this.g;if((Pt=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!at(Pt)){var kt=Pt;break e}}kt=null}if(_=kt)Ji(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,_);else{this.o=!1,this.s=3,te(12),Pe(this),$n(this);break t}}if(this.P){_=!0;let ke;for(;!this.J&&this.C<tt.length;)if(ke=eu(this,tt),ke==Xs){Ee==4&&(this.s=4,te(14),_=!1),Ji(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==yo){this.s=4,te(15),Ji(this.i,this.l,tt,"[Invalid Chunk]"),_=!1;break}else Ji(this.i,this.l,ke,null),ts(this,ke);if(tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||tt.length!=0||this.h.h||(this.s=1,te(16),_=!1),this.o=this.o&&_,!_)Ji(this.i,this.l,tt,"[Invalid Chunked Response]"),Pe(this),$n(this);else if(0<tt.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),hs(De),De.M=!0,te(11))}}else Ji(this.i,this.l,tt,null),ts(this,tt);Ee==4&&Pe(this),this.o&&!this.J&&(Ee==4?fu(this.j,this):(this.o=!1,Jr(this)))}else Ph(this.g),_==400&&0<tt.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),Pe(this),$n(this)}}}catch{}finally{}};function tu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function eu(c,p){var _=c.C,A=p.indexOf(`
`,_);return A==-1?Xs:(_=Number(p.substring(_,A)),isNaN(_)?yo:(A+=1,A+_>p.length?Xs:(p=p.slice(A,A+_),c.C=A+_,p)))}Xe.prototype.cancel=function(){this.J=!0,Pe(this)};function Jr(c){c.S=Date.now()+c.I,nu(c,c.I)}function nu(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=de(I(c.ba,c),p)}function er(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Xe.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Jl(this.i,this.A),this.L!=2&&(Wi(),te(17)),Pe(this),this.s=2,$n(this)):nu(this,this.S-c)};function $n(c){c.j.G==0||c.J||fu(c.j,c)}function Pe(c){er(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,Xr(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function ts(c,p){try{var _=c.j;if(_.G!=0&&(_.g==c||_o(_.h,c))){if(!c.K&&_o(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(p)}catch{A=null}if(Array.isArray(A)&&A.length==3){var k=A;if(k[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)la(_),aa(_);else break t;Co(_),te(18)}}else _.za=k[1],0<_.za-_.T&&37500>k[2]&&_.F&&_.v==0&&!_.C&&(_.C=de(I(_.Za,_),6e3));if(1>=Ws(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ii(_,11)}else if((c.K||_.g==c)&&la(_),!at(p))for(k=_.Da.g.parse(p),p=0;p<k.length;p++){let kt=k[p];if(_.T=kt[0],kt=kt[1],_.G==2)if(kt[0]=="c"){_.K=kt[1],_.ia=kt[2];const De=kt[3];De!=null&&(_.la=De,_.j.info("VER="+_.la));const Ee=kt[4];Ee!=null&&(_.Aa=Ee,_.j.info("SVER="+_.Aa));const Ci=kt[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(A=1.5*Ci,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const ke=c.g;if(ke){const ni=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var q=A.h;q.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Js(q,q.h),q.h=null))}if(A.D){const Oo=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(A.ya=Oo,Qt(A.I,A.D,Oo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var tt=c;if(A.qa=mu(A,A.J?A.ia:null,A.W),tt.K){Ze(A.h,tt);var Pt=tt,ve=A.L;ve&&(Pt.I=ve),Pt.B&&(er(Pt),Jr(Pt)),A.g=tt}else cu(A);0<_.i.length&&oa(_)}else kt[0]!="stop"&&kt[0]!="close"||Ii(_,7);else _.G==3&&(kt[0]=="stop"||kt[0]=="close"?kt[0]=="stop"?Ii(_,7):Ro(_):kt[0]!="noop"&&_.l&&_.l.ta(kt),_.v=0)}}Wi(4)}catch{}}var iu=class{constructor(c,p){this.g=c,this.map=p}};function Ti(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zs(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ws(c){return c.h?1:c.g?c.g.size:0}function _o(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Js(c,p){c.g?c.g.add(p):c.h=p}function Ze(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Ti.prototype.cancel=function(){if(this.i=vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function vo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const _ of c.g.values())p=p.concat(_.D);return p}return W(c.i)}function Nh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],_=c.length,A=0;A<_;A++)p.push(c[A]);return p}p=[],_=0;for(A in c)p[_++]=c[A];return p}function ta(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var _=0;_<c;_++)p.push(_);return p}p=[],_=0;for(const A in c)p[_++]=A;return p}}}function Eo(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var _=ta(c),A=Nh(c),k=A.length,q=0;q<k;q++)p.call(void 0,A[q],_&&_[q],c)}var es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mh(c,p){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),k=null;if(0<=A){var q=c[_].substring(0,A);k=c[_].substring(A+1)}else q=c[_];p(q,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function me(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof me){this.h=c.h,ns(this,c.j),this.o=c.o,this.g=c.g,nr(this,c.s),this.l=c.l;var p=c.i,_=new Si;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Ai(this,_),this.m=c.m}else c&&(p=String(c).match(es))?(this.h=!1,ns(this,p[1]||"",!0),this.o=vn(p[2]||""),this.g=vn(p[3]||"",!0),nr(this,p[4]),this.l=vn(p[5]||"",!0),Ai(this,p[6]||"",!0),this.m=vn(p[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}me.prototype.toString=function(){var c=[],p=this.j;p&&c.push(rs(p,To,!0),":");var _=this.g;return(_||p=="file")&&(c.push("//"),(p=this.o)&&c.push(rs(p,To,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(rs(_,_.charAt(0)=="/"?xh:Ao,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",rs(_,ea)),c.join("")};function ln(c){return new me(c)}function ns(c,p,_){c.j=_?vn(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function nr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function Ai(c,p,_){p instanceof Si?(c.i=p,su(c.i,c.h)):(_||(p=rs(p,Vh)),c.i=new Si(p,c.h))}function Qt(c,p,_){c.i.set(p,_)}function is(c){return Qt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function vn(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function rs(c,p,_){return typeof c=="string"?(c=encodeURI(c).replace(p,ru),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ru(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var To=/[#\/\?@]/g,Ao=/[#\?:]/g,xh=/[#\?]/g,Vh=/[#\?@]/g,ea=/#/g;function Si(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function En(c){c.g||(c.g=new Map,c.h=0,c.i&&Mh(c.i,function(p,_){c.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}r=Si.prototype,r.add=function(c,p){En(this),this.i=null,c=Xn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(p),this.h+=1,this};function bi(c,p){En(c),p=Xn(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function wi(c,p){return En(c),p=Xn(c,p),c.g.has(p)}r.forEach=function(c,p){En(this),this.g.forEach(function(_,A){_.forEach(function(k){c.call(p,k,A,this)},this)},this)},r.na=function(){En(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let A=0;A<p.length;A++){const k=c[A];for(let q=0;q<k.length;q++)_.push(p[A])}return _},r.V=function(c){En(this);let p=[];if(typeof c=="string")wi(this,c)&&(p=p.concat(this.g.get(Xn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)p=p.concat(c[_])}return p},r.set=function(c,p){return En(this),this.i=null,c=Xn(this,c),wi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function So(c,p,_){bi(c,p),0<_.length&&(c.i=null,c.g.set(Xn(c,p),W(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var A=p[_];const q=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var k=q;tt[A]!==""&&(k+="="+encodeURIComponent(String(tt[A]))),c.push(k)}}return this.i=c.join("&")};function Xn(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function su(c,p){p&&!c.j&&(En(c),c.i=null,c.g.forEach(function(_,A){var k=A.toLowerCase();A!=k&&(bi(this,A),So(this,k,_))},c)),c.j=p}function ss(c,p){const _=new _n;if(m.Image){const A=new Image;A.onload=B(Tn,_,"TestLoadImage: loaded",!0,p,A),A.onerror=B(Tn,_,"TestLoadImage: error",!1,p,A),A.onabort=B(Tn,_,"TestLoadImage: abort",!1,p,A),A.ontimeout=B(Tn,_,"TestLoadImage: timeout",!1,p,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else p(!1)}function kn(c,p){const _=new _n,A=new AbortController,k=setTimeout(()=>{A.abort(),Tn(_,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(k),q.ok?Tn(_,"TestPingServer: ok",!0,p):Tn(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(k),Tn(_,"TestPingServer: error",!1,p)})}function Tn(c,p,_,A,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),A(_)}catch{}}function as(){this.g=new Zr}function Zn(c,p,_){const A=_||"";try{Eo(c,function(k,q){let tt=k;y(k)&&(tt=Vn(k)),p.push(A+q+"="+encodeURIComponent(tt))})}catch(k){throw p.push(A+"type="+encodeURIComponent("_badmap")),k}}function ir(c){this.l=c.Ub||null,this.j=c.eb||!1}$(ir,co),ir.prototype.g=function(){return new Ri(this.l,this.j)},ir.prototype.i=function(c){return function(){return c}}({});function Ri(c,p){se.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ri,se),r=Ri.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,Jn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function bo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Wn(this):Jn(this),this.readyState==3&&bo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Wn(this))},r.Qa=function(c){this.g&&(this.response=c,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Jn(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=p.next();return c.join(`\r
`)};function Jn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function wo(c){let p="";return Vt(c,function(_,A){p+=A,p+=":",p+=_,p+=`\r
`}),p}function Ce(c,p,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=wo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Qt(c,p,_))}function qt(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(qt,se);var na=/^https?$/i,os=["POST","PUT"];r=qt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qn.g(),this.v=this.o?ho(this.o):ho(Qn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(q){au(this,q);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var k in A)_.set(k,A[k]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),k=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(os,p,void 0))||A||k||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,tt]of _)this.g.setRequestHeader(q,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ls(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){au(this,q)}};function au(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,ia(c),ti(c)}function ia(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),ti(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),qt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ra(this):this.bb())},r.bb=function(){ra(this)};function ra(c){if(c.h&&typeof f<"u"&&(!c.v[1]||An(c)!=4||c.Z()!=2)){if(c.u&&An(c)==4)He(c.Ea,0,c);else if(Ft(c,"readystatechange"),An(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var _;if(!(_=p)){var A;if(A=tt===0){var k=String(c.D).match(es)[1]||null;!k&&m.self&&m.self.location&&(k=m.self.location.protocol.slice(0,-1)),A=!na.test(k?k.toLowerCase():"")}_=A}if(_)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var q=2<An(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",ia(c)}}finally{ti(c)}}}}function ti(c,p){if(c.g){ls(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Ft(c,"ready");try{_.onreadystatechange=A}catch{}}}function ls(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function An(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),Ys(p)}};function ou(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ph(c){const p={};c=(c.g&&2<=An(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(at(c[A]))continue;var _=x(c[A]);const k=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=p[k]||[];p[k]=q,q.push(_)}M(p,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(c,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||p}function sa(c){this.Aa=0,this.i=[],this.j=new _n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,c),this.cb=us("retryDelaySeedMs",1e4,c),this.Wa=us("forwardChannelMaxRetries",2,c),this.wa=us("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ti(c&&c.concurrentRequestLimit),this.Da=new as,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=sa.prototype,r.la=8,r.G=1,r.connect=function(c,p,_,A){te(0),this.W=c,this.H=p||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=mu(this,null,this.W),oa(this)};function Ro(c){if(lu(c),c.G==3){var p=c.U++,_=ln(c.I);if(Qt(_,"SID",c.K),Qt(_,"RID",p),Qt(_,"TYPE","terminate"),cs(c,_),p=new Xe(c,c.j,p),p.L=2,p.v=is(ln(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=p.v,_=!0),_||(p.g=pu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Jr(p)}du(c)}function aa(c){c.g&&(hs(c),c.g.cancel(),c.g=null)}function lu(c){aa(c),c.u&&(m.clearTimeout(c.u),c.u=null),la(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function oa(c){if(!Zs(c.h)&&!c.s){c.s=!0;var p=c.Ga;et||D(),ht||(et(),ht=!0),Bt.add(p,c),c.B=0}}function kh(c,p){return Ws(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=de(I(c.Ga,c,p),Do(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const k=new Xe(this,this.j,c);let q=this.o;if(this.S&&(q?(q=b(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(k.H=q,q=null),this.P)t:{for(var p=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(p+=A,4096<p){p=_;break t}if(p===4096||_===this.i.length-1){p=_+1;break t}}p=1e3}else p=1e3;p=uu(this,k,p),_=ln(this.I),Qt(_,"RID",c),Qt(_,"CVER",22),this.D&&Qt(_,"X-HTTP-Session-Id",this.D),cs(this,_),q&&(this.O?p="headers="+encodeURIComponent(String(wo(q)))+"&"+p:this.m&&Ce(_,this.m,q)),Js(this.h,k),this.Ua&&Qt(_,"TYPE","init"),this.P?(Qt(_,"$req",p),Qt(_,"SID","null"),k.T=!0,Pn(k,_,null)):Pn(k,_,p),this.G=2}}else this.G==3&&(c?Io(this,c):this.i.length==0||Zs(this.h)||Io(this))};function Io(c,p){var _;p?_=p.l:_=c.U++;const A=ln(c.I);Qt(A,"SID",c.K),Qt(A,"RID",_),Qt(A,"AID",c.T),cs(c,A),c.m&&c.o&&Ce(A,c.m,c.o),_=new Xe(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),p&&(c.i=p.D.concat(c.i)),p=uu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Js(c.h,_),Pn(_,A,p)}function cs(c,p){c.H&&Vt(c.H,function(_,A){Qt(p,A,_)}),c.l&&Eo({},function(_,A){Qt(p,A,_)})}function uu(c,p,_){_=Math.min(c.i.length,_);var A=c.l?I(c.l.Na,c.l,c):null;t:{var k=c.i;let q=-1;for(;;){const tt=["count="+_];q==-1?0<_?(q=k[0].g,tt.push("ofs="+q)):q=0:tt.push("ofs="+q);let Pt=!0;for(let ve=0;ve<_;ve++){let kt=k[ve].g;const De=k[ve].map;if(kt-=q,0>kt)q=Math.max(0,k[ve].g-100),Pt=!1;else try{Zn(De,tt,"req"+kt+"_")}catch{A&&A(De)}}if(Pt){A=tt.join("&");break t}}}return c=c.i.splice(0,_),p.D=c,A}function cu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;et||D(),ht||(et(),ht=!0),Bt.add(p,c),c.v=0}}function Co(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=de(I(c.Fa,c),Do(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,hu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=de(I(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),aa(this),hu(this))};function hs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function hu(c){c.g=new Xe(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=ln(c.qa);Qt(p,"RID","rpc"),Qt(p,"SID",c.K),Qt(p,"AID",c.T),Qt(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qt(p,"TO",c.ja),Qt(p,"TYPE","xmlhttp"),cs(c,p),c.m&&c.o&&Ce(p,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=is(ln(p)),_.m=null,_.P=!0,Ei(_,c)}r.Za=function(){this.C!=null&&(this.C=null,aa(this),Co(this),te(19))};function la(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function fu(c,p){var _=null;if(c.g==p){la(c),hs(c),c.g=null;var A=2}else if(_o(c.h,p))_=p.D,Ze(c.h,p),A=1;else return;if(c.G!=0){if(p.o)if(A==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var k=c.B;A=Zi(),Ft(A,new _e(A,_)),oa(c)}else cu(c);else if(k=p.s,k==3||k==0&&0<p.X||!(A==1&&kh(c,p)||A==2&&Co(c)))switch(_&&0<_.length&&(p=c.h,p.i=p.i.concat(_)),k){case 1:Ii(c,5);break;case 4:Ii(c,10);break;case 3:Ii(c,6);break;default:Ii(c,2)}}}function Do(c,p){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*p}function Ii(c,p){if(c.j.info("Error code "+p),p==2){var _=I(c.fb,c),A=c.Xa;const k=!A;A=new me(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ns(A,"https"),is(A),k?ss(A.toString(),_):kn(A.toString(),_)}else te(2);c.G=0,c.l&&c.l.sa(p),du(c),lu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function du(c){if(c.G=0,c.ka=[],c.l){const p=vo(c.h);(p.length!=0||c.i.length!=0)&&(H(c.ka,p),H(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function mu(c,p,_){var A=_ instanceof me?ln(_):new me(_);if(A.g!="")p&&(A.g=p+"."+A.g),nr(A,A.s);else{var k=m.location;A=k.protocol,p=p?p+"."+k.hostname:k.hostname,k=+k.port;var q=new me(null);A&&ns(q,A),p&&(q.g=p),k&&nr(q,k),_&&(q.l=_),A=q}return _=c.D,p=c.ya,_&&p&&Qt(A,_,p),Qt(A,"VER",c.la),cs(c,A),A}function pu(c,p,_){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new qt(new ir({eb:_})):new qt(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function gu(){}r=gu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ua(){}ua.prototype.g=function(c,p){return new We(c,p)};function We(c,p){se.call(this),this.g=new sa(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!at(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!at(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new ei(this)}$(We,se),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Ro(this.g)},We.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Vn(c),c=_);p.i.push(new iu(p.Ya++,c)),p.G==3&&oa(p)},We.prototype.N=function(){this.g.l=null,delete this.j,Ro(this.g),delete this.g,We.aa.N.call(this)};function yu(c){_i.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){t:{for(const _ in p){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}$(yu,_i);function _u(){mo.call(this),this.status=1}$(_u,mo);function ei(c){this.g=c}$(ei,gu),ei.prototype.ua=function(){Ft(this.g,"a")},ei.prototype.ta=function(c){Ft(this.g,new yu(c))},ei.prototype.sa=function(c){Ft(this.g,new _u)},ei.prototype.ra=function(){Ft(this.g,"b")},ua.prototype.createWebChannel=ua.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,fT=function(){return new ua},hT=function(){return Zi()},cT=Kn,am={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tr.NO_ERROR=0,tr.TIMEOUT=8,tr.HTTP_ERROR=6,Dc=tr,vi.COMPLETE="complete",uT=vi,fo.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",se.prototype.listen=se.prototype.K,_l=fo,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,lT=qt}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});const Vv="@firebase/firestore",Pv="4.7.14";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="11.7.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new uh("@firebase/firestore");function za(){return ks.logLevel}function st(r,...t){if(ks.logLevel<=Mt.DEBUG){const n=t.map(jm);ks.debug(`Firestore (${io}): ${r}`,...n)}}function Yi(r,...t){if(ks.logLevel<=Mt.ERROR){const n=t.map(jm);ks.error(`Firestore (${io}): ${r}`,...n)}}function Qa(r,...t){if(ks.logLevel<=Mt.WARN){const n=t.map(jm);ks.warn(`Firestore (${io}): ${r}`,...n)}}function jm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,dT(r,s,n)}function dT(r,t,n){let s=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Yi(s),new Error(s)}function Ht(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||dT(t,o,s)}function St(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mt extends Fn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class V2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class P2{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class k2{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ht(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Pr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Pr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ht(typeof s.accessToken=="string",31837,{l:s}),new mT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ht(t===null||typeof t=="string",2055,{h:t}),new Qe(t)}}class U2{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class L2{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new U2(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z2{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,On(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ht(this.o===void 0,3512);const s=u=>{u.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,st("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ht(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new kv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=B2(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function It(r,t){return r<t?-1:r>t?1:0}function om(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return It(s,o);{const u=pT(),f=j2(u.encode(Uv(r,n)),u.encode(Uv(t,n)));return f!==0?f:It(s,o)}}n+=s>65535?2:1}return It(r.length,t.length)}function Uv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function j2(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return It(r[n],t[n]);return It(r.length,t.length)}function Ya(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=-62135596800,zv=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(t){return we.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*zv);return new we(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new mt(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new mt(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Lv)throw new mt(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new mt(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zv}_compareTo(t){return this.seconds===t.seconds?It(this.nanoseconds,t.nanoseconds):It(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Lv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new we(0,0))}static max(){return new At(new we(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="__name__";class li{constructor(t,n,s){n===void 0?n=0:n>t.length&&vt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&vt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return li.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof li?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=li.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return It(t.length,n.length)}static compareSegments(t,n){const s=li.isNumericId(t),o=li.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?li.extractNumericId(t).compare(li.extractNumericId(n)):om(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Vr.fromString(t.substring(4,t.length-2))}}class le extends li{construct(t,n,s){return new le(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new mt(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new le(n)}static emptyPath(){return new le([])}}const q2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends li{construct(t,n,s){return new je(t,n,s)}static isValidIdentifier(t){return q2.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bv}static keyField(){return new je([Bv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new mt(Z.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new mt(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new mt(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new mt(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.path=t}static fromPath(t){return new pt(le.fromString(t))}static fromName(t){return new pt(le.fromString(t).popFirst(5))}static empty(){return new pt(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&le.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return le.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pt(new le(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=-1;function H2(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new Ur(o,pt.empty(),t)}function F2(r){return new Ur(r.readTime,r.key,Ml)}class Ur{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Ur(At.min(),pt.empty(),Ml)}static max(){return new Ur(At.max(),pt.empty(),Ml)}}function G2(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=pt.comparator(r.documentKey,t.documentKey),n!==0?n:It(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==K2)throw r;st("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&vt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.reject(n)}static resolve(t){return new Y((n,s)=>{n(t)})}static reject(t){return new Y((n,s)=>{s(t)})}static waitFor(t){return new Y((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next(o=>o?Y.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new Y((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const y=g;n(t[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(t,n){return new Y((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function Y2(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function so(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}ph.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=-1;function gh(r){return r==null}function Fc(r){return r===0&&1/r==-1/0}function $2(r){return typeof r=="number"&&Number.isInteger(r)&&!Fc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="";function X2(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=jv(t)),t=Z2(r.get(n),t);return jv(t)}function Z2(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case yT:n+="";break;default:n+=u}}return n}function jv(r){return r+yT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function qs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function _T(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,n){this.comparator=t,this.root=n||Be.EMPTY}insert(t,n){return new ie(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(t){return new ie(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Be.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tc(this.root,t,this.comparator,!0)}}class Tc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Be{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??Be.RED,this.left=o??Be.EMPTY,this.right=u??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new Be(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Be.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw vt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw vt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw vt(27949);return t+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw vt(57766)}get value(){throw vt(16141)}get color(){throw vt(16727)}get left(){throw vt(29726)}get right(){throw vt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new Be(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.comparator=t,this.data=new ie(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hv(this.data.getIterator())}getIteratorFrom(t){return new Hv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Re(this.comparator);return n.data=t,n}}class Hv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.fields=t,t.sort(je.comparator)}static empty(){return new jn([])}unionWith(t){let n=new Re(je.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new jn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ya(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new vT("Invalid base64 string: "+u):u}}(t);return new qe(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return It(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const W2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(r){if(Ht(!!r,39018),typeof r=="string"){let t=0;const n=W2.exec(r);if(Ht(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function zr(r){return typeof r=="string"?qe.fromBase64String(r):qe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="server_timestamp",TT="__type__",AT="__previous_value__",ST="__local_write_time__";function Hm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[TT])===null||n===void 0?void 0:n.stringValue)===ET}function yh(r){const t=r.mapValue.fields[AT];return Hm(t)?yh(t):t}function xl(r){const t=Lr(r.mapValue.fields[ST].timestampValue);return new we(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(t,n,s,o,u,f,m,g,y,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E}}const Gc="(default)";class Vl{constructor(t,n){this.projectId=t,this.database=n||Gc}static empty(){return new Vl("","")}get isDefaultDatabase(){return this.database===Gc}isEqual(t){return t instanceof Vl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="__type__",tD="__max__",Ac={mapValue:{}},wT="__vector__",Kc="value";function Br(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Hm(r)?4:nD(r)?9007199254740991:eD(r)?10:11:vt(28295,{value:r})}function mi(r,t){if(r===t)return!0;const n=Br(r);if(n!==Br(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return xl(r).isEqual(xl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Lr(o.timestampValue),m=Lr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return zr(o.bytesValue).isEqual(zr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return fe(o.geoPointValue.latitude)===fe(u.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return fe(o.integerValue)===fe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=fe(o.doubleValue),m=fe(u.doubleValue);return f===m?Fc(f)===Fc(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Ya(r.arrayValue.values||[],t.arrayValue.values||[],mi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(qv(f)!==qv(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!mi(f[g],m[g])))return!1;return!0}(r,t);default:return vt(52216,{left:r})}}function Pl(r,t){return(r.values||[]).find(n=>mi(n,t))!==void 0}function $a(r,t){if(r===t)return 0;const n=Br(r),s=Br(t);if(n!==s)return It(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return It(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=fe(u.integerValue||u.doubleValue),g=fe(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,t);case 3:return Fv(r.timestampValue,t.timestampValue);case 4:return Fv(xl(r),xl(t));case 5:return om(r.stringValue,t.stringValue);case 6:return function(u,f){const m=zr(u),g=zr(f);return m.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let y=0;y<m.length&&y<g.length;y++){const E=It(m[y],g[y]);if(E!==0)return E}return It(m.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=It(fe(u.latitude),fe(f.latitude));return m!==0?m:It(fe(u.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Gv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,g,y,E;const S=u.fields||{},I=f.fields||{},B=(m=S[Kc])===null||m===void 0?void 0:m.arrayValue,$=(g=I[Kc])===null||g===void 0?void 0:g.arrayValue,W=It(((y=B==null?void 0:B.values)===null||y===void 0?void 0:y.length)||0,((E=$==null?void 0:$.values)===null||E===void 0?void 0:E.length)||0);return W!==0?W:Gv(B,$)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===Ac.mapValue&&f===Ac.mapValue)return 0;if(u===Ac.mapValue)return 1;if(f===Ac.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),y=f.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const I=om(g[S],E[S]);if(I!==0)return I;const B=$a(m[g[S]],y[E[S]]);if(B!==0)return B}return It(g.length,E.length)}(r.mapValue,t.mapValue);default:throw vt(23264,{Pe:n})}}function Fv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return It(r,t);const n=Lr(r),s=Lr(t),o=It(n.seconds,s.seconds);return o!==0?o:It(n.nanos,s.nanos)}function Gv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=$a(n[o],s[o]);if(u)return u}return It(n.length,s.length)}function Xa(r){return lm(r)}function lm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Lr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return zr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return pt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=lm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${lm(n.fields[f])}`;return o+"}"}(r.mapValue):vt(61005,{value:r})}function Oc(r){switch(Br(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yh(r);return t?16+Oc(t):16;case 5:return 2*r.stringValue.length;case 6:return zr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Oc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return qs(s.fields,(u,f)=>{o+=u.length+Oc(f)}),o}(r.mapValue);default:throw vt(13486,{value:r})}}function um(r){return!!r&&"integerValue"in r}function Fm(r){return!!r&&"arrayValue"in r}function Kv(r){return!!r&&"nullValue"in r}function Qv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Nc(r){return!!r&&"mapValue"in r}function eD(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[bT])===null||n===void 0?void 0:n.stringValue)===wT}function bl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return qs(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=bl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=bl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function nD(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===tD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.value=t}static empty(){return new Nn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Nc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=bl(n)}setAll(t){let n=je.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=bl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return mi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){qs(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new Nn(bl(this.value))}}function RT(r){const t=[];return qs(r.fields,(n,s)=>{const o=new je([n]);if(Nc(s)){const u=RT(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new jn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Ye(t,0,At.min(),At.min(),At.min(),Nn.empty(),0)}static newFoundDocument(t,n,s,o){return new Ye(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new Ye(t,2,n,At.min(),At.min(),Nn.empty(),0)}static newUnknownDocument(t,n){return new Ye(t,3,n,At.min(),At.min(),Nn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ye&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,n){this.position=t,this.inclusive=n}}function Yv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=pt.comparator(pt.fromName(f.referenceValue),n.key):s=$a(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function $v(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!mi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,n="asc"){this.field=t,this.dir=n}}function iD(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{}class Se extends IT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new sD(t,n,s):n==="array-contains"?new lD(t,s):n==="in"?new uD(t,s):n==="not-in"?new cD(t,s):n==="array-contains-any"?new hD(t,s):new Se(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new aD(t,s):new oD(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($a(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison($a(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return vt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pi extends IT{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new pi(t,n)}matches(t){return CT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function CT(r){return r.op==="and"}function DT(r){return rD(r)&&CT(r)}function rD(r){for(const t of r.filters)if(t instanceof pi)return!1;return!0}function cm(r){if(r instanceof Se)return r.field.canonicalString()+r.op.toString()+Xa(r.value);if(DT(r))return r.filters.map(t=>cm(t)).join(",");{const t=r.filters.map(n=>cm(n)).join(",");return`${r.op}(${t})`}}function OT(r,t){return r instanceof Se?function(s,o){return o instanceof Se&&s.op===o.op&&s.field.isEqual(o.field)&&mi(s.value,o.value)}(r,t):r instanceof pi?function(s,o){return o instanceof pi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&OT(f,o.filters[m]),!0):!1}(r,t):void vt(19439)}function NT(r){return r instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${Xa(n.value)}`}(r):r instanceof pi?function(n){return n.op.toString()+" {"+n.getFilters().map(NT).join(" ,")+"}"}(r):"Filter"}class sD extends Se{constructor(t,n,s){super(t,n,s),this.key=pt.fromName(s.referenceValue)}matches(t){const n=pt.comparator(t.key,this.key);return this.matchesComparison(n)}}class aD extends Se{constructor(t,n){super(t,"in",n),this.keys=MT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class oD extends Se{constructor(t,n){super(t,"not-in",n),this.keys=MT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function MT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>pt.fromName(s.referenceValue))}class lD extends Se{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Fm(n)&&Pl(n.arrayValue,this.value)}}class uD extends Se{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Pl(this.value.arrayValue,n)}}class cD extends Se{constructor(t,n){super(t,"not-in",n)}matches(t){if(Pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Pl(this.value.arrayValue,n)}}class hD extends Se{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Pl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Ie=null}}function Xv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new fD(r,t,n,s,o,u,f)}function Gm(r){const t=St(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>cm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),gh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Xa(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Xa(s)).join(",")),t.Ie=n}return t.Ie}function Km(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!iD(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!OT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!$v(r.startAt,t.startAt)&&$v(r.endAt,t.endAt)}function hm(r){return pt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function dD(r,t,n,s,o,u,f,m){return new _h(r,t,n,s,o,u,f,m)}function Qm(r){return new _h(r)}function Zv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function mD(r){return r.collectionGroup!==null}function wl(r){const t=St(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Re(je.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new Yc(u,s))}),n.has(je.keyField().canonicalString())||t.Ee.push(new Yc(je.keyField(),s))}return t.Ee}function ci(r){const t=St(r);return t.de||(t.de=pD(t,wl(r))),t.de}function pD(r,t){if(r.limitType==="F")return Xv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Yc(o.field,u)});const n=r.endAt?new Qc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Qc(r.startAt.position,r.startAt.inclusive):null;return Xv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function fm(r,t,n){return new _h(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function vh(r,t){return Km(ci(r),ci(t))&&r.limitType===t.limitType}function xT(r){return`${Gm(ci(r))}|lt:${r.limitType}`}function Ba(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>NT(o)).join(", ")}]`),gh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Xa(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Xa(o)).join(",")),`Target(${s})`}(ci(r))}; limitType=${r.limitType})`}function Eh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of wl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,g){const y=Yv(f,m,g);return f.inclusive?y<=0:y<0}(s.startAt,wl(s),o)||s.endAt&&!function(f,m,g){const y=Yv(f,m,g);return f.inclusive?y>=0:y>0}(s.endAt,wl(s),o))}(r,t)}function gD(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function VT(r){return(t,n)=>{let s=!1;for(const o of wl(r)){const u=yD(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function yD(r,t,n){const s=r.field.isKeyField()?pt.comparator(t.key,n.key):function(u,f,m){const g=f.data.field(u),y=m.data.field(u);return g!==null&&y!==null?$a(g,y):vt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return vt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){qs(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return _T(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=new ie(pt.comparator);function $i(){return _D}const PT=new ie(pt.comparator);function vl(...r){let t=PT;for(const n of r)t=t.insert(n.key,n);return t}function kT(r){let t=PT;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Os(){return Rl()}function UT(){return Rl()}function Rl(){return new Hs(r=>r.toString(),(r,t)=>r.isEqual(t))}const vD=new ie(pt.comparator),ED=new Re(pt.comparator);function xt(...r){let t=ED;for(const n of r)t=t.add(n);return t}const TD=new Re(It);function AD(){return TD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fc(t)?"-0":t}}function LT(r){return{integerValue:""+r}}function SD(r,t){return $2(t)?LT(t):Ym(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this._=void 0}}function bD(r,t,n){return r instanceof $c?function(o,u){const f={fields:{[TT]:{stringValue:ET},[ST]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Hm(u)&&(u=yh(u)),u&&(f.fields[AT]=u),{mapValue:f}}(n,t):r instanceof kl?BT(r,t):r instanceof Ul?jT(r,t):function(o,u){const f=zT(o,u),m=Wv(f)+Wv(o.Re);return um(f)&&um(o.Re)?LT(m):Ym(o.serializer,m)}(r,t)}function wD(r,t,n){return r instanceof kl?BT(r,t):r instanceof Ul?jT(r,t):n}function zT(r,t){return r instanceof Xc?function(s){return um(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class $c extends Th{}class kl extends Th{constructor(t){super(),this.elements=t}}function BT(r,t){const n=qT(t);for(const s of r.elements)n.some(o=>mi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Ul extends Th{constructor(t){super(),this.elements=t}}function jT(r,t){let n=qT(t);for(const s of r.elements)n=n.filter(o=>!mi(o,s));return{arrayValue:{values:n}}}class Xc extends Th{constructor(t,n){super(),this.serializer=t,this.Re=n}}function Wv(r){return fe(r.integerValue||r.doubleValue)}function qT(r){return Fm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function RD(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof kl&&o instanceof kl||s instanceof Ul&&o instanceof Ul?Ya(s.elements,o.elements,mi):s instanceof Xc&&o instanceof Xc?mi(s.Re,o.Re):s instanceof $c&&o instanceof $c}(r.transform,t.transform)}class ID{constructor(t,n){this.version=t,this.transformResults=n}}class Gi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Gi}static exists(t){return new Gi(void 0,t)}static updateTime(t){return new Gi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ah{}function HT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new GT(r.key,Gi.none()):new Gl(r.key,r.data,Gi.none());{const n=r.data,s=Nn.empty();let o=new Re(je.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Fs(r.key,s,new jn(o.toArray()),Gi.none())}}function CD(r,t,n){r instanceof Gl?function(o,u,f){const m=o.value.clone(),g=tE(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Fs?function(o,u,f){if(!Mc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=tE(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(FT(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Il(r,t,n,s){return r instanceof Gl?function(u,f,m,g){if(!Mc(u.precondition,f))return m;const y=u.value.clone(),E=eE(u.fieldTransforms,g,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Fs?function(u,f,m,g){if(!Mc(u.precondition,f))return m;const y=eE(u.fieldTransforms,g,f),E=f.data;return E.setAll(FT(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,t,n,s):function(u,f,m){return Mc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function DD(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=zT(s.transform,o||null);u!=null&&(n===null&&(n=Nn.empty()),n.set(s.field,u))}return n||null}function Jv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ya(s,o,(u,f)=>RD(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Gl extends Ah{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fs extends Ah{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function FT(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function tE(r,t,n){const s=new Map;Ht(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,wD(f,m,n[o]))}return s}function eE(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,bD(u,f,t))}return s}class GT extends Ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OD extends Ah{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&CD(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Il(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Il(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=UT();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=HT(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),xt())}isEqual(t){return this.batchId===t.batchId&&Ya(this.mutations,t.mutations,(n,s)=>Jv(n,s))&&Ya(this.baseMutations,t.baseMutations,(n,s)=>Jv(n,s))}}class $m{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ht(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return vD}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new $m(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,Lt;function VD(r){switch(r){case Z.OK:return vt(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return vt(15467,{code:r})}}function KT(r){if(r===void 0)return Yi("GRPC error has no .code"),Z.UNKNOWN;switch(r){case ye.OK:return Z.OK;case ye.CANCELLED:return Z.CANCELLED;case ye.UNKNOWN:return Z.UNKNOWN;case ye.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case ye.INTERNAL:return Z.INTERNAL;case ye.UNAVAILABLE:return Z.UNAVAILABLE;case ye.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case ye.NOT_FOUND:return Z.NOT_FOUND;case ye.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case ye.ABORTED:return Z.ABORTED;case ye.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case ye.DATA_LOSS:return Z.DATA_LOSS;default:return vt(39323,{code:r})}}(Lt=ye||(ye={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=new Vr([4294967295,4294967295],0);function nE(r){const t=pT().encode(r),n=new oT;return n.update(t),new Uint8Array(n.digest())}function iE(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Vr([n,s],0),new Vr([o,u],0)]}class Xm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new El(`Invalid padding: ${n}`);if(s<0)throw new El(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new El(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new El(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Vr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(Vr.fromNumber(s)));return o.compare(PD)===1&&(o=new Vr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=nE(t),[s,o]=iE(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);if(!this.be(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Xm(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.pe===0)return;const n=nE(t),[s,o]=iE(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class El extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Kl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Sh(At.min(),o,new ie(It),$i(),xt())}}class Kl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Kl(s,n,xt(),xt(),xt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class QT{constructor(t,n){this.targetId=t,this.Ce=n}}class YT{constructor(t,n,s=qe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class rE{constructor(){this.Fe=0,this.Me=sE(),this.xe=qe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=xt(),n=xt(),s=xt();return this.Me.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:vt(38017,{changeType:u})}}),new Kl(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=sE()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ht(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class kD{constructor(t){this.ze=t,this.je=new Map,this.He=$i(),this.Je=Sc(),this.Ye=Sc(),this.Ze=new ie(It)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:vt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const u=o.target;if(hm(u))if(s===0){const f=new pt(u.path);this.tt(n,f,Ye.newNoDocument(f,At.min()))}else Ht(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const m=this.ct(t),g=m?this.lt(m,t,f):1;if(g!==0){this.st(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=zr(s).toUint8Array()}catch(g){if(g instanceof vT)return Qa("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Xm(f,o,u)}catch(g){return Qa(g instanceof El?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.pe===0?null:m}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ze.Pt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.tt(n,u,null),o++)}),o}It(t){const n=new Map;this.je.forEach((u,f)=>{const m=this._t(f);if(m){if(u.current&&hm(m.target)){const g=new pt(m.target.path);this.Et(g).has(f)||this.dt(f,g)||this.tt(f,g,Ye.newNoDocument(g,t))}u.Le&&(n.set(f,u.qe()),u.Qe())}});let s=xt();this.Ye.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const y=this._t(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,f)=>f.setReadTime(t));const o=new Sh(t,n,this.Ze,this.He,s);return this.He=$i(),this.Je=Sc(),this.Ye=Sc(),this.Ze=new ie(It),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new rE,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new Re(It),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Re(It),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||st("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new rE),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function Sc(){return new ie(pt.comparator)}function sE(){return new ie(pt.comparator)}const UD={asc:"ASCENDING",desc:"DESCENDING"},LD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zD={and:"AND",or:"OR"};class BD{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function dm(r,t){return r.useProto3Json||gh(t)?t:{value:t}}function Zc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $T(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function jD(r,t){return Zc(r,t.toTimestamp())}function hi(r){return Ht(!!r,49232),At.fromTimestamp(function(n){const s=Lr(n);return new we(s.seconds,s.nanos)}(r))}function Zm(r,t){return mm(r,t).canonicalString()}function mm(r,t){const n=function(o){return new le(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function XT(r){const t=le.fromString(r);return Ht(eA(t),10190,{key:t.toString()}),t}function pm(r,t){return Zm(r.databaseId,t.path)}function Gd(r,t){const n=XT(t);if(n.get(1)!==r.databaseId.projectId)throw new mt(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new mt(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new pt(WT(n))}function ZT(r,t){return Zm(r.databaseId,t)}function qD(r){const t=XT(r);return t.length===4?le.emptyPath():WT(t)}function gm(r){return new le(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function WT(r){return Ht(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function aE(r,t,n){return{name:pm(r,t),fields:n.value.mapValue.fields}}function HD(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:vt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Ht(E===void 0||typeof E=="string",58123),qe.fromBase64String(E||"")):(Ht(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),qe.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const E=y.code===void 0?Z.UNKNOWN:KT(y.code);return new mt(E,y.message||"")}(f);n=new YT(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Gd(r,s.document.name),u=hi(s.document.updateTime),f=s.document.createTime?hi(s.document.createTime):At.min(),m=new Nn({mapValue:{fields:s.document.fields}}),g=Ye.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new xc(y,E,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Gd(r,s.document),u=s.readTime?hi(s.readTime):At.min(),f=Ye.newNoDocument(o,u),m=s.removedTargetIds||[];n=new xc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Gd(r,s.document),u=s.removedTargetIds||[];n=new xc([],u,o,null)}else{if(!("filter"in t))return vt(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new xD(o,u),m=s.targetId;n=new QT(m,f)}}return n}function FD(r,t){let n;if(t instanceof Gl)n={update:aE(r,t.key,t.value)};else if(t instanceof GT)n={delete:pm(r,t.key)};else if(t instanceof Fs)n={update:aE(r,t.key,t.data),updateMask:JD(t.fieldMask)};else{if(!(t instanceof OD))return vt(16599,{ft:t.type});n={verify:pm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof $c)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof kl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ul)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Xc)return{fieldPath:f.field.canonicalString(),increment:m.Re};throw vt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:jD(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:vt(27497)}(r,t.precondition)),n}function GD(r,t){return r&&r.length>0?(Ht(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?hi(o.updateTime):hi(u);return f.isEqual(At.min())&&(f=hi(u)),new ID(f,o.transformResults||[])}(n,t))):[]}function KD(r,t){return{documents:[ZT(r,t.path)]}}function QD(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=ZT(r,o);const u=function(y){if(y.length!==0)return tA(pi.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(I){return{field:ja(I.field),direction:XD(I.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=dm(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function YD(r){let t=qD(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ht(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(S){const I=JT(S);return I instanceof pi&&DT(I)?I.getFilters():[I]}(n.where));let f=[];n.orderBy&&(f=function(S){return S.map(I=>function($){return new Yc(qa($.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(I))}(n.orderBy));let m=null;n.limit&&(m=function(S){let I;return I=typeof S=="object"?S.value:S,gh(I)?null:I}(n.limit));let g=null;n.startAt&&(g=function(S){const I=!!S.before,B=S.values||[];return new Qc(B,I)}(n.startAt));let y=null;return n.endAt&&(y=function(S){const I=!S.before,B=S.values||[];return new Qc(B,I)}(n.endAt)),dD(t,o,f,u,m,"F",g,y)}function $D(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return vt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function JT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=qa(n.unaryFilter.field);return Se.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=qa(n.unaryFilter.field);return Se.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=qa(n.unaryFilter.field);return Se.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=qa(n.unaryFilter.field);return Se.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return vt(61313);default:return vt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Se.create(qa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return vt(58110);default:return vt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return pi.create(n.compositeFilter.filters.map(s=>JT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return vt(1026)}}(n.compositeFilter.op))}(r):vt(30097,{filter:r})}function XD(r){return UD[r]}function ZD(r){return LD[r]}function WD(r){return zD[r]}function ja(r){return{fieldPath:r.canonicalString()}}function qa(r){return je.fromServerFormat(r.fieldPath)}function tA(r){return r instanceof Se?function(n){if(n.op==="=="){if(Qv(n.value))return{unaryFilter:{field:ja(n.field),op:"IS_NAN"}};if(Kv(n.value))return{unaryFilter:{field:ja(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qv(n.value))return{unaryFilter:{field:ja(n.field),op:"IS_NOT_NAN"}};if(Kv(n.value))return{unaryFilter:{field:ja(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ja(n.field),op:ZD(n.op),value:n.value}}}(r):r instanceof pi?function(n){const s=n.getFilters().map(o=>tA(o));return s.length===1?s[0]:{compositeFilter:{op:WD(n.op),filters:s}}}(r):vt(54877,{filter:r})}function JD(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function eA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,n,s,o,u=At.min(),f=At.min(),m=qe.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(t){return new Or(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(t){this.wt=t}}function eO(r){const t=YD({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?fm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){this.yn=new iO}addToCollectionParentIndex(t,n){return this.yn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.yn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(Ur.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(Ur.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class iO{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Re(le.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Re(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nA=41943040;class rn{static withCacheSize(t){return new rn(t,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(nA,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Za(0)}static ir(){return new Za(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="LruGarbageCollector",rO=1048576;function uE([r,t],[n,s]){const o=It(r,n);return o===0?It(t,s):o}class sO{constructor(t){this.cr=t,this.buffer=new Re(uE),this.lr=0}hr(){return++this.lr}Pr(t){const n=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();uE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aO{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){st(lE,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){so(n)?st(lE,"Ignoring IndexedDB error during garbage collection: ",n):await ro(n)}await this.Ir(3e5)})}}class oO{constructor(t,n){this.Er=t,this.params=n}calculateTargetCount(t,n){return this.Er.dr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(ph.le);const s=new sO(n);return this.Er.forEachTarget(t,o=>s.Pr(o.sequenceNumber)).next(()=>this.Er.Ar(t,o=>s.Pr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.Er.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.Er.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(oE)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oE):this.Rr(t,n))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,n){let s,o,u,f,m,g,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(t,s,n))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(S=>(y=Date.now(),za()<=Mt.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function lO(r,t){return new oO(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(){this.changes=new Hs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ye.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Il(s.mutation,o,jn.empty(),we.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,xt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=xt()){const o=Os();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=vl();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Os();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,xt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=$i();const f=Rl(),m=function(){return Rl()}();return n.forEach((g,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Fs)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Il(E.mutation,y,E.mutation.getFieldMask(),we.now())):f.set(y.key,jn.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var S;return m.set(y,new cO(E,(S=f.get(y))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(t,n){const s=Rl();let o=new ie((f,m)=>f-m),u=xt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let E=s.get(g)||jn.empty();E=m.applyToLocalView(y,E),s.set(g,E);const S=(o.get(m.batchId)||xt()).add(g);o=o.insert(m.batchId,S)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,E=g.value,S=UT();E.forEach(I=>{if(!u.has(I)){const B=HT(n.get(I),s.get(I));B!==null&&S.set(I,B),u=u.add(I)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return Y.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return pt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):mD(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):Y.resolve(Os());let m=Ml,g=u;return f.next(y=>Y.forEach(y,(E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?Y.resolve():this.remoteDocumentCache.getEntry(t,E).next(I=>{g=g.insert(E,I)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,g,y,xt())).next(E=>({batchId:m,changes:kT(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pt(n)).next(s=>{let o=vl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=vl();return this.indexManager.getCollectionParents(t,u).next(m=>Y.forEach(m,g=>{const y=function(S,I){return new _h(I,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(E=>{E.forEach((S,I)=>{f=f.insert(S,I)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((g,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Ye.newInvalidDocument(E)))});let m=vl();return f.forEach((g,y)=>{const E=u.get(g);E!==void 0&&Il(E.mutation,y,jn.empty(),we.now()),Eh(n,y)&&(m=m.insert(g,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,n){return Y.resolve(this.Fr.get(n))}saveBundleMetadata(t,n){return this.Fr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:hi(o.createTime)}}(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.Mr.get(n))}saveNamedQuery(t,n){return this.Mr.set(n.name,function(o){return{name:o.name,query:eO(o.bundledQuery),readTime:hi(o.readTime)}}(n)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(){this.overlays=new ie(pt.comparator),this.Or=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Os();return Y.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.St(t,n,u)}),Y.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Or.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Or.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const o=Os(),u=n.length+1,f=new pt(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return Y.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new ie((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Os(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Os(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return Y.resolve(m)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Or.get(o.largestBatchId).delete(s.key);this.Or.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new MD(n,s));let u=this.Or.get(n);u===void 0&&(u=xt(),this.Or.set(n,u)),this.Or.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.Nr=new Re(xe.Br),this.Lr=new Re(xe.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,n){const s=new xe(t,n);this.Nr=this.Nr.add(s),this.Lr=this.Lr.add(s)}qr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Qr(new xe(t,n))}$r(t,n){t.forEach(s=>this.removeReference(s,n))}Ur(t){const n=new pt(new le([])),s=new xe(n,t),o=new xe(n,t+1),u=[];return this.Lr.forEachInRange([s,o],f=>{this.Qr(f),u.push(f.key)}),u}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const n=new pt(new le([])),s=new xe(n,t),o=new xe(n,t+1);let u=xt();return this.Lr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new xe(t,0),s=this.Nr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class xe{constructor(t,n){this.key=t,this.Gr=n}static Br(t,n){return pt.comparator(t.key,n.key)||It(t.Gr,n.Gr)}static kr(t,n){return It(t.Gr,n.Gr)||pt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new Re(xe.Br)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new ND(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.zr=this.zr.add(new xe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Hr(s),u=o<0?0:o;return Y.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?qm:this.Jn-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new xe(n,0),o=new xe(n,Number.POSITIVE_INFINITY),u=[];return this.zr.forEachInRange([s,o],f=>{const m=this.jr(f.Gr);u.push(m)}),Y.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Re(It);return n.forEach(o=>{const u=new xe(o,0),f=new xe(o,Number.POSITIVE_INFINITY);this.zr.forEachInRange([u,f],m=>{s=s.add(m.Gr)})}),Y.resolve(this.Jr(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;pt.isDocumentKey(u)||(u=u.child(""));const f=new xe(new pt(u),0);let m=new Re(It);return this.zr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Gr)),!0)},f),Y.resolve(this.Jr(m))}Jr(t){const n=[];return t.forEach(s=>{const o=this.jr(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ht(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.zr;return Y.forEach(n.mutations,o=>{const u=new xe(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.zr=s})}Xn(t){}containsKey(t,n){const s=new xe(n,0),o=this.zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}Yr(t,n){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const n=this.Hr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(t){this.Zr=t,this.docs=function(){return new ie(pt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.Zr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(t,n){let s=$i();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ye.newInvalidDocument(o))}),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=$i();const f=n.path,m=new pt(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||G2(F2(E),s)<=0||(o.has(E.key)||Eh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Y.resolve(u)}getAllFromCollectionGroup(t,n,s,o){vt(9500)}Xr(t,n){return Y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new yO(this)}getSize(t){return Y.resolve(this.size)}}class yO extends uO{constructor(t){super(),this.vr=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.vr.addEntry(t,o)):this.vr.removeEntry(s)}),Y.waitFor(n)}getFromCache(t,n){return this.vr.getEntry(t,n)}getAllFromCache(t,n){return this.vr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(t){this.persistence=t,this.ei=new Hs(n=>Gm(n),Km),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.ti=0,this.ni=new Wm,this.targetCount=0,this.ri=Za.rr()}forEachTarget(t,n){return this.ei.forEach((s,o)=>n(o)),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ti&&(this.ti=n),Y.resolve()}ar(t){this.ei.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ri=new Za(n),this.highestTargetId=n),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,n){return this.ar(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.ar(n),Y.resolve()}removeTargetData(t,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.ei.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ei.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),Y.waitFor(u).next(()=>o)}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.ei.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this.ni.qr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this.ni.$r(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),Y.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.ni.Ur(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ni.Wr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this.ni.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(t,n){this.ii={},this.overlays={},this.si=new ph(0),this.oi=!1,this.oi=!0,this._i=new mO,this.referenceDelegate=t(this),this.ai=new _O(this),this.indexManager=new nO,this.remoteDocumentCache=function(o){return new gO(o)}(s=>this.referenceDelegate.ui(s)),this.serializer=new tO(n),this.ci=new fO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dO,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ii[t.toKey()];return s||(s=new pO(n,this.referenceDelegate),this.ii[t.toKey()]=s),s}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,n,s){st("MemoryPersistence","Starting transaction:",t);const o=new vO(this.si.next());return this.referenceDelegate.li(),s(o).next(u=>this.referenceDelegate.hi(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Pi(t,n){return Y.or(Object.values(this.ii).map(s=>()=>s.containsKey(t,n)))}}class vO extends Q2{constructor(t){super(),this.currentSequenceNumber=t}}class Jm{constructor(t){this.persistence=t,this.Ti=new Wm,this.Ii=null}static Ei(t){return new Jm(t)}get di(){if(this.Ii)return this.Ii;throw vt(60996)}addReference(t,n,s){return this.Ti.addReference(s,n),this.di.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.Ti.removeReference(s,n),this.di.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),Y.resolve()}removeTarget(t,n){this.Ti.Ur(n.targetId).forEach(o=>this.di.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.di.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}li(){this.Ii=new Set}hi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.di,s=>{const o=pt.fromPath(s);return this.Ai(t,o).next(u=>{u||n.removeEntry(o,At.min())})}).next(()=>(this.Ii=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ai(t,n).next(s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(t){return 0}Ai(t,n){return Y.or([()=>Y.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Pi(t,n)])}}class Wc{constructor(t,n){this.persistence=t,this.Ri=new Hs(s=>X2(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=lO(this,n)}static Ei(t,n){return new Wc(t,n)}li(){}hi(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}Vr(t){let n=0;return this.Ar(t,s=>{n++}).next(()=>n)}Ar(t,n){return Y.forEach(this.Ri,(s,o)=>this.gr(t,s,o).next(u=>u?Y.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Xr(t,f=>this.gr(t,f,n).next(m=>{m||(s++,u.removeEntry(f,At.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.Ri.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.Ri.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.Ri.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.Ri.set(n,t.currentSequenceNumber),Y.resolve()}ui(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Oc(t.data.value)),n}gr(t,n,s){return Y.or([()=>this.persistence.Pi(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.Ri.get(n);return Y.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ls=s,this.hs=o}static Ps(t,n){let s=xt(),o=xt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new tp(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return V1()?8:Y2($e())>0?6:4}()}initialize(t,n){this.As=t,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.Rs(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.Vs(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new EO;return this.fs(t,n,f).next(m=>{if(u.result=m,this.Is)return this.gs(t,n,f,m.size)})}).next(()=>u.result)}gs(t,n,s,o){return s.documentReadCount<this.Es?(za()<=Mt.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",Ba(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),Y.resolve()):(za()<=Mt.DEBUG&&st("QueryEngine","Query:",Ba(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(za()<=Mt.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",Ba(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ci(n))):Y.resolve())}Rs(t,n){if(Zv(n))return Y.resolve(null);let s=ci(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=fm(n,null,"F"),s=ci(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=xt(...u);return this.As.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(g=>{const y=this.ps(n,m);return this.ys(n,y,f,g.readTime)?this.Rs(t,fm(n,null,"F")):this.ws(t,y,n,g)}))})))}Vs(t,n,s,o){return Zv(n)||o.isEqual(At.min())?Y.resolve(null):this.As.getDocuments(t,s).next(u=>{const f=this.ps(n,u);return this.ys(n,f,s,o)?Y.resolve(null):(za()<=Mt.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ba(n)),this.ws(t,f,n,H2(o,Ml)).next(m=>m))})}ps(t,n){let s=new Re(VT(t));return n.forEach((o,u)=>{Eh(t,u)&&(s=s.add(u))}),s}ys(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}fs(t,n,s){return za()<=Mt.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",Ba(n)),this.As.getDocumentsMatchingQuery(t,n,Ur.min(),s)}ws(t,n,s,o){return this.As.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="LocalStore",AO=3e8;class SO{constructor(t,n,s,o){this.persistence=t,this.bs=n,this.serializer=o,this.Ss=new ie(It),this.Ds=new Hs(u=>Gm(u),Km),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(s)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hO(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ss))}}function bO(r,t,n,s){return new SO(r,t,n,s)}async function rA(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Fs(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=xt();for(const y of o){f.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return n.localDocuments.getDocuments(s,g).next(y=>({Ms:y,removedBatchIds:f,addedBatchIds:m}))})})}function wO(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Cs.newChangeBuffer({trackRemovals:!0});return function(m,g,y,E){const S=y.batch,I=S.keys();let B=Y.resolve();return I.forEach($=>{B=B.next(()=>E.getEntry(g,$)).next(W=>{const H=y.docVersions.get($);Ht(H!==null,48541),W.version.compareTo(H)<0&&(S.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),E.addEntry(W)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(g,S))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=xt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function sA(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ai.getLastRemoteSnapshotVersion(n))}function RO(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Cs.newChangeBuffer({trackRemovals:!0});o=n.Ss;const m=[];t.targetChanges.forEach((E,S)=>{const I=o.get(S);if(!I)return;m.push(n.ai.removeMatchingKeys(u,E.removedDocuments,S).next(()=>n.ai.addMatchingKeys(u,E.addedDocuments,S)));let B=I.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(S)!==null?B=B.withResumeToken(qe.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(S,B),function(W,H,rt){return W.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=AO?!0:rt.addedDocuments.size+rt.modifiedDocuments.size+rt.removedDocuments.size>0}(I,B,E)&&m.push(n.ai.updateTargetData(u,B))});let g=$i(),y=xt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(IO(u,f,t.documentUpdates).next(E=>{g=E.xs,y=E.Os})),!s.isEqual(At.min())){const E=n.ai.getLastRemoteSnapshotVersion(u).next(S=>n.ai.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return Y.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,y)).next(()=>g)}).then(u=>(n.Ss=o,u))}function IO(r,t,n){let s=xt(),o=xt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=$i();return n.forEach((m,g)=>{const y=u.get(m);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(At.min())?(t.removeEntry(m,g.readTime),f=f.insert(m,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(g),f=f.insert(m,g)):st(ep,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",g.version)}),{xs:f,Os:o}})}function CO(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=qm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function DO(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.ai.getTargetData(s,t).next(u=>u?(o=u,Y.resolve(o)):n.ai.allocateTargetId(s).next(f=>(o=new Or(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.ai.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ss.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(s.targetId,s),n.Ds.set(t,s.targetId)),s})}async function ym(r,t,n){const s=St(r),o=s.Ss.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!so(f))throw f;st(ep,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ss=s.Ss.remove(t),s.Ds.delete(o.target)}function cE(r,t,n){const s=St(r);let o=At.min(),u=xt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,y,E){const S=St(g),I=S.Ds.get(E);return I!==void 0?Y.resolve(S.Ss.get(I)):S.ai.getTargetData(y,E)}(s,f,ci(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.ai.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.bs.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?u:xt())).next(m=>(OO(s,gD(t),m),{documents:m,Ns:u})))}function OO(r,t,n){let s=r.vs.get(t)||At.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.vs.set(t,s)}class hE{constructor(){this.activeTargetIds=AD()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class NO{constructor(){this.So=new hE,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,n,s){this.Do[t]=n}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new hE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="ConnectivityMonitor";class dE{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){st(fE,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){st(fE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc=null;function _m(){return bc===null?bc=function(){return 268435456+Math.round(2147483648*Math.random())}():bc++,"0x"+bc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="RestConnection",xO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class VO{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+t.host,this.ko=`projects/${s}/databases/${o}`,this.qo=this.databaseId.database===Gc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Qo(t,n,s,o,u){const f=_m(),m=this.$o(t,n.toUriEncodedString());st(Kd,`Sending RPC '${t}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(g,o,u);const{host:y}=new URL(m),E=Bl(y);return this.Ko(t,m,g,s,E).then(S=>(st(Kd,`Received RPC '${t}' ${f}: `,S),S),S=>{throw Qa(Kd,`RPC '${t}' ${f} failed with error: `,S,"url: ",m,"request:",s),S})}Wo(t,n,s,o,u,f){return this.Qo(t,n,s,o,u)}Uo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}$o(t,n){const s=xO[t];return`${this.Lo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class kO extends VO{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,n,s,o,u){const f=_m();return new Promise((m,g)=>{const y=new lT;y.setWithCredentials(!0),y.listenOnce(uT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Dc.NO_ERROR:const S=y.getResponseJson();st(Ke,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),m(S);break;case Dc.TIMEOUT:st(Ke,`RPC '${t}' ${f} timed out`),g(new mt(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const I=y.getStatus();if(st(Ke,`RPC '${t}' ${f} failed with status:`,I,"response text:",y.getResponseText()),I>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const $=B==null?void 0:B.error;if($&&$.status&&$.message){const W=function(rt){const at=rt.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(at)>=0?at:Z.UNKNOWN}($.status);g(new mt(W,$.message))}else g(new mt(Z.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new mt(Z.UNAVAILABLE,"Connection failed."));break;default:vt(9055,{s_:t,streamId:f,o_:y.getLastErrorCode(),__:y.getLastError()})}}finally{st(Ke,`RPC '${t}' ${f} completed.`)}});const E=JSON.stringify(o);st(Ke,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)})}a_(t,n,s){const o=_m(),u=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=fT(),m=hT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Uo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const E=u.join("");st(Ke,`Creating RPC '${t}' stream ${o}: ${E}`,g);const S=f.createWebChannel(E,g);let I=!1,B=!1;const $=new PO({Go:H=>{B?st(Ke,`Not sending because RPC '${t}' stream ${o} is closed:`,H):(I||(st(Ke,`Opening RPC '${t}' stream ${o} transport.`),S.open(),I=!0),st(Ke,`RPC '${t}' stream ${o} sending:`,H),S.send(H))},zo:()=>S.close()}),W=(H,rt,at)=>{H.listen(rt,lt=>{try{at(lt)}catch(wt){setTimeout(()=>{throw wt},0)}})};return W(S,_l.EventType.OPEN,()=>{B||(st(Ke,`RPC '${t}' stream ${o} transport opened.`),$.t_())}),W(S,_l.EventType.CLOSE,()=>{B||(B=!0,st(Ke,`RPC '${t}' stream ${o} transport closed`),$.r_())}),W(S,_l.EventType.ERROR,H=>{B||(B=!0,Qa(Ke,`RPC '${t}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),$.r_(new mt(Z.UNAVAILABLE,"The operation could not be completed")))}),W(S,_l.EventType.MESSAGE,H=>{var rt;if(!B){const at=H.data[0];Ht(!!at,16349);const lt=at,wt=(lt==null?void 0:lt.error)||((rt=lt[0])===null||rt===void 0?void 0:rt.error);if(wt){st(Ke,`RPC '${t}' stream ${o} received error:`,wt);const yt=wt.status;let Vt=function(R){const N=ye[R];if(N!==void 0)return KT(N)}(yt),M=wt.message;Vt===void 0&&(Vt=Z.INTERNAL,M="Unknown error status: "+yt+" with message "+wt.message),B=!0,$.r_(new mt(Vt,M)),S.close()}else st(Ke,`RPC '${t}' stream ${o} received:`,at),$.i_(at)}}),W(m,cT.STAT_EVENT,H=>{H.stat===am.PROXY?st(Ke,`RPC '${t}' stream ${o} detected buffering proxy`):H.stat===am.NOPROXY&&st(Ke,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.n_()},0),$}}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(r){return new BD(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(t,n,s=1e3,o=1.5,u=6e4){this.bi=t,this.timerId=n,this.u_=s,this.c_=o,this.l_=u,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const n=Math.floor(this.h_+this.d_()),s=Math.max(0,Date.now()-this.T_),o=Math.max(0,n-s);o>0&&st("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,o,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="PersistentStream";class oA{constructor(t,n,s,o,u,f,m,g){this.bi=t,this.R_=s,this.V_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new aA(t,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(Yi(n.toString()),Yi("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.m_===n&&this.B_(s,o)},s=>{t(()=>{const o=new mt(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.L_(o)})})}B_(t,n){const s=this.N_(this.m_);this.stream=this.k_(t,n),this.stream.jo(()=>{s(()=>this.listener.jo())}),this.stream.Jo(()=>{s(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(o=>{s(()=>this.L_(o))}),this.stream.onMessage(o=>{s(()=>++this.p_==1?this.q_(o):this.onNext(o))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return st(mE,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return n=>{this.bi.enqueueAndForget(()=>this.m_===t?n():(st(mE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UO extends oA{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}k_(t,n){return this.connection.a_("Listen",t,n)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const n=HD(this.serializer,t),s=function(u){if(!("targetChange"in u))return At.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?hi(f.readTime):At.min()}(t);return this.listener.Q_(n,s)}U_(t){const n={};n.database=gm(this.serializer),n.addTarget=function(u,f){let m;const g=f.target;if(m=hm(g)?{documents:KD(u,g)}:{query:QD(u,g).gt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=$T(u,f.resumeToken);const y=dm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(At.min())>0){m.readTime=Zc(u,f.snapshotVersion.toTimestamp());const y=dm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=$D(this.serializer,t);s&&(n.labels=s),this.F_(n)}K_(t){const n={};n.database=gm(this.serializer),n.removeTarget=t,this.F_(n)}}class LO extends oA{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,n){return this.connection.a_("Write",t,n)}q_(t){return Ht(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ht(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){Ht(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const n=GD(t.writeResults,t.commitTime),s=hi(t.commitTime);return this.listener.j_(s,n)}H_(){const t={};t.database=gm(this.serializer),this.F_(t)}G_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>FD(this.serializer,s))};this.F_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{}class BO extends zO{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.J_=!1}Y_(){if(this.J_)throw new mt(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,n,s,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Qo(t,mm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new mt(Z.UNKNOWN,u.toString())})}Wo(t,n,s,o,u){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Wo(t,mm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new mt(Z.UNKNOWN,f.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class jO{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Yi(n),this.ea=!1):st("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="RemoteStore";class qO{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=u,this.ca.vo(f=>{s.enqueueAndForget(async()=>{Gs(this)&&(st(Us,"Restarting streams for network reachability change."),await async function(g){const y=St(g);y.aa.add(4),await Ql(y),y.la.set("Unknown"),y.aa.delete(4),await wh(y)}(this))})}),this.la=new jO(s,o)}}async function wh(r){if(Gs(r))for(const t of r.ua)await t(!0)}async function Ql(r){for(const t of r.ua)await t(!1)}function lA(r,t){const n=St(r);n._a.has(t.targetId)||(n._a.set(t.targetId,t),sp(n)?rp(n):ao(n).b_()&&ip(n,t))}function np(r,t){const n=St(r),s=ao(n);n._a.delete(t),s.b_()&&uA(n,t),n._a.size===0&&(s.b_()?s.v_():Gs(n)&&n.la.set("Unknown"))}function ip(r,t){if(r.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ao(r).U_(t)}function uA(r,t){r.ha.Ke(t),ao(r).K_(t)}function rp(r){r.ha=new kD({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r._a.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),ao(r).start(),r.la.ta()}function sp(r){return Gs(r)&&!ao(r).w_()&&r._a.size>0}function Gs(r){return St(r).aa.size===0}function cA(r){r.ha=void 0}async function HO(r){r.la.set("Online")}async function FO(r){r._a.forEach((t,n)=>{ip(r,t)})}async function GO(r,t){cA(r),sp(r)?(r.la.ia(t),rp(r)):r.la.set("Unknown")}async function KO(r,t,n){if(r.la.set("Online"),t instanceof YT&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o._a.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o._a.delete(m),o.ha.removeTarget(m))}(r,t)}catch(s){st(Us,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Jc(r,s)}else if(t instanceof xc?r.ha.Xe(t):t instanceof QT?r.ha.ot(t):r.ha.nt(t),!n.isEqual(At.min()))try{const s=await sA(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.ha.It(f);return m.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=u._a.get(y);E&&u._a.set(y,E.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,y)=>{const E=u._a.get(g);if(!E)return;u._a.set(g,E.withResumeToken(qe.EMPTY_BYTE_STRING,E.snapshotVersion)),uA(u,g);const S=new Or(E.target,g,y,E.sequenceNumber);ip(u,S)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){st(Us,"Failed to raise snapshot:",s),await Jc(r,s)}}async function Jc(r,t,n){if(!so(t))throw t;r.aa.add(1),await Ql(r),r.la.set("Offline"),n||(n=()=>sA(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{st(Us,"Retrying IndexedDB access"),await n(),r.aa.delete(1),await wh(r)})}function hA(r,t){return t().catch(n=>Jc(r,n,t))}async function Rh(r){const t=St(r),n=jr(t);let s=t.oa.length>0?t.oa[t.oa.length-1].batchId:qm;for(;QO(t);)try{const o=await CO(t.localStore,s);if(o===null){t.oa.length===0&&n.v_();break}s=o.batchId,YO(t,o)}catch(o){await Jc(t,o)}fA(t)&&dA(t)}function QO(r){return Gs(r)&&r.oa.length<10}function YO(r,t){r.oa.push(t);const n=jr(r);n.b_()&&n.W_&&n.G_(t.mutations)}function fA(r){return Gs(r)&&!jr(r).w_()&&r.oa.length>0}function dA(r){jr(r).start()}async function $O(r){jr(r).H_()}async function XO(r){const t=jr(r);for(const n of r.oa)t.G_(n.mutations)}async function ZO(r,t,n){const s=r.oa.shift(),o=$m.from(s,t,n);await hA(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Rh(r)}async function WO(r,t){t&&jr(r).W_&&await async function(s,o){if(function(f){return VD(f)&&f!==Z.ABORTED}(o.code)){const u=s.oa.shift();jr(s).D_(),await hA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Rh(s)}}(r,t),fA(r)&&dA(r)}async function pE(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),st(Us,"RemoteStore received new credentials");const s=Gs(n);n.aa.add(3),await Ql(n),s&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.aa.delete(3),await wh(n)}async function JO(r,t){const n=St(r);t?(n.aa.delete(2),await wh(n)):t||(n.aa.add(2),await Ql(n),n.la.set("Unknown"))}function ao(r){return r.Pa||(r.Pa=function(n,s,o){const u=St(n);return u.Y_(),new UO(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{jo:HO.bind(null,r),Jo:FO.bind(null,r),Zo:GO.bind(null,r),Q_:KO.bind(null,r)}),r.ua.push(async t=>{t?(r.Pa.D_(),sp(r)?rp(r):r.la.set("Unknown")):(await r.Pa.stop(),cA(r))})),r.Pa}function jr(r){return r.Ta||(r.Ta=function(n,s,o){const u=St(n);return u.Y_(),new LO(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:$O.bind(null,r),Zo:WO.bind(null,r),z_:XO.bind(null,r),j_:ZO.bind(null,r)}),r.ua.push(async t=>{t?(r.Ta.D_(),await Rh(r)):(await r.Ta.stop(),r.oa.length>0&&(st(Us,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new ap(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new mt(Z.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(r,t){if(Yi("AsyncQueue",`${t}: ${r}`),so(r))return new mt(Z.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{static emptySet(t){return new Ka(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||pt.comparator(n.key,s.key):(n,s)=>pt.comparator(n.key,s.key),this.keyedMap=vl(),this.sortedSet=new ie(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ka)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ka;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.Ia=new ie(pt.comparator)}track(t){const n=t.doc.key,s=this.Ia.get(n);s?t.type!==0&&s.type===3?this.Ia=this.Ia.insert(n,t):t.type===3&&s.type!==1?this.Ia=this.Ia.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Ia=this.Ia.remove(n):t.type===1&&s.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:t.doc}):vt(63341,{Vt:t,Ea:s}):this.Ia=this.Ia.insert(n,t)}da(){const t=[];return this.Ia.inorderTraversal((n,s)=>{t.push(s)}),t}}class Wa{constructor(t,n,s,o,u,f,m,g,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new Wa(t,n,Ka.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class eN{constructor(){this.queries=yE(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=yE(),u.forEach((f,m)=>{for(const g of m.Ra)g.onError(s)})})(this,new mt(Z.ABORTED,"Firestore shutting down"))}}function yE(){return new Hs(r=>xT(r),vh)}async function nN(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.Va()&&t.ma()&&(s=2):(u=new tN,s=t.ma()?0:1);try{switch(s){case 0:u.Aa=await n.onListen(o,!0);break;case 1:u.Aa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=op(f,`Initialization of query '${Ba(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.Ra.push(t),t.ga(n.onlineState),u.Aa&&t.pa(u.Aa)&&lp(n)}async function iN(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Ra.indexOf(t);f>=0&&(u.Ra.splice(f,1),u.Ra.length===0?o=t.ma()?0:1:!u.Va()&&t.ma()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function rN(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Ra)m.pa(o)&&(s=!0);f.Aa=o}}s&&lp(n)}function sN(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.Ra)u.onError(n);s.queries.delete(t)}function lp(r){r.fa.forEach(t=>{t.next()})}var vm,_E;(_E=vm||(vm={})).ya="default",_E.Cache="cache";class aN{constructor(t,n,s){this.query=t,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=s||{}}pa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Wa(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ba?this.Da(t)&&(this.wa.next(t),n=!0):this.va(t,this.onlineState)&&(this.Ca(t),n=!0),this.Sa=t,n}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),n=!0),n}va(t,n){if(!t.fromCache||!this.ma())return!0;const s=n!=="Offline";return(!this.options.Fa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(t){t=Wa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==vm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(t){this.key=t}}class pA{constructor(t){this.key=t}}class oN{constructor(t,n){this.query=t,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=xt(),this.mutatedKeys=xt(),this.Ua=VT(t),this.Ka=new Ka(this.Ua)}get Wa(){return this.qa}Ga(t,n){const s=n?n.za:new gE,o=n?n.Ka:this.Ka;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,S)=>{const I=o.get(E),B=Eh(this.query,S)?S:null,$=!!I&&this.mutatedKeys.has(I.key),W=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let H=!1;I&&B?I.data.isEqual(B.data)?$!==W&&(s.track({type:3,doc:B}),H=!0):this.ja(I,B)||(s.track({type:2,doc:B}),H=!0,(g&&this.Ua(B,g)>0||y&&this.Ua(B,y)<0)&&(m=!0)):!I&&B?(s.track({type:0,doc:B}),H=!0):I&&!B&&(s.track({type:1,doc:I}),H=!0,(g||y)&&(m=!0)),H&&(B?(f=f.add(B),u=W?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Ka:f,za:s,ys:m,mutatedKeys:u}}ja(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const f=t.za.da();f.sort((E,S)=>function(B,$){const W=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return vt(20277,{Vt:H})}};return W(B)-W($)}(E.type,S.type)||this.Ua(E.doc,S.doc)),this.Ha(s),o=o!=null&&o;const m=n&&!o?this.Ja():[],g=this.$a.size===0&&this.current&&!o?1:0,y=g!==this.Qa;return this.Qa=g,f.length!==0||y?{snapshot:new Wa(this.query,t.Ka,u,f,t.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ya:m}:{Ya:m}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new gE,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=xt(),this.Ka.forEach(s=>{this.Za(s.key)&&(this.$a=this.$a.add(s.key))});const n=[];return t.forEach(s=>{this.$a.has(s)||n.push(new pA(s))}),this.$a.forEach(s=>{t.has(s)||n.push(new mA(s))}),n}Xa(t){this.qa=t.Ns,this.$a=xt();const n=this.Ga(t.documents);return this.applyChanges(n,!0)}eu(){return Wa.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const up="SyncEngine";class lN{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class uN{constructor(t){this.key=t,this.tu=!1}}class cN{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.nu={},this.ru=new Hs(m=>xT(m),vh),this.iu=new Map,this.su=new Set,this.ou=new ie(pt.comparator),this._u=new Map,this.au=new Wm,this.uu={},this.cu=new Map,this.lu=Za.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function hN(r,t,n=!0){const s=TA(r);let o;const u=s.ru.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.eu()):o=await gA(s,t,n,!0),o}async function fN(r,t){const n=TA(r);await gA(n,t,!0,!1)}async function gA(r,t,n,s){const o=await DO(r.localStore,ci(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await dN(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&lA(r.remoteStore,o),m}async function dN(r,t,n,s,o){r.Pu=(S,I,B)=>async function(W,H,rt,at){let lt=H.view.Ga(rt);lt.ys&&(lt=await cE(W.localStore,H.query,!1).then(({documents:M})=>H.view.Ga(M,lt)));const wt=at&&at.targetChanges.get(H.targetId),yt=at&&at.targetMismatches.get(H.targetId)!=null,Vt=H.view.applyChanges(lt,W.isPrimaryClient,wt,yt);return EE(W,H.targetId,Vt.Ya),Vt.snapshot}(r,S,I,B);const u=await cE(r.localStore,t,!0),f=new oN(t,u.Ns),m=f.Ga(u.documents),g=Kl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,g);EE(r,n,y.Ya);const E=new lN(t,n,f);return r.ru.set(t,E),r.iu.has(n)?r.iu.get(n).push(t):r.iu.set(n,[t]),y.snapshot}async function mN(r,t,n){const s=St(r),o=s.ru.get(t),u=s.iu.get(o.targetId);if(u.length>1)return s.iu.set(o.targetId,u.filter(f=>!vh(f,t))),void s.ru.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ym(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&np(s.remoteStore,o.targetId),Em(s,o.targetId)}).catch(ro)):(Em(s,o.targetId),await ym(s.localStore,o.targetId,!0))}async function pN(r,t){const n=St(r),s=n.ru.get(t),o=n.iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),np(n.remoteStore,s.targetId))}async function gN(r,t,n){const s=SN(r);try{const o=await function(f,m){const g=St(f),y=we.now(),E=m.reduce((B,$)=>B.add($.key),xt());let S,I;return g.persistence.runTransaction("Locally write mutations","readwrite",B=>{let $=$i(),W=xt();return g.Cs.getEntries(B,E).next(H=>{$=H,$.forEach((rt,at)=>{at.isValidDocument()||(W=W.add(rt))})}).next(()=>g.localDocuments.getOverlayedDocuments(B,$)).next(H=>{S=H;const rt=[];for(const at of m){const lt=DD(at,S.get(at.key).overlayedDocument);lt!=null&&rt.push(new Fs(at.key,lt,RT(lt.value.mapValue),Gi.exists(!0)))}return g.mutationQueue.addMutationBatch(B,y,rt,m)}).next(H=>{I=H;const rt=H.applyToLocalDocumentSet(S,W);return g.documentOverlayCache.saveOverlays(B,H.batchId,rt)})}).then(()=>({batchId:I.batchId,changes:kT(S)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,g){let y=f.uu[f.currentUser.toKey()];y||(y=new ie(It)),y=y.insert(m,g),f.uu[f.currentUser.toKey()]=y}(s,o.batchId,n),await Yl(s,o.changes),await Rh(s.remoteStore)}catch(o){const u=op(o,"Failed to persist write");n.reject(u)}}async function yA(r,t){const n=St(r);try{const s=await RO(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n._u.get(u);f&&(Ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.tu=!0:o.modifiedDocuments.size>0?Ht(f.tu,14607):o.removedDocuments.size>0&&(Ht(f.tu,42227),f.tu=!1))}),await Yl(n,s,t)}catch(s){await ro(s)}}function vE(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ru.forEach((u,f)=>{const m=f.view.ga(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=St(f);g.onlineState=m;let y=!1;g.queries.forEach((E,S)=>{for(const I of S.Ra)I.ga(m)&&(y=!0)}),y&&lp(g)}(s.eventManager,t),o.length&&s.nu.Q_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function yN(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s._u.get(t),u=o&&o.key;if(u){let f=new ie(pt.comparator);f=f.insert(u,Ye.newNoDocument(u,At.min()));const m=xt().add(u),g=new Sh(At.min(),new Map,new ie(It),f,m);await yA(s,g),s.ou=s.ou.remove(u),s._u.delete(t),cp(s)}else await ym(s.localStore,t,!1).then(()=>Em(s,t,n)).catch(ro)}async function _N(r,t){const n=St(r),s=t.batch.batchId;try{const o=await wO(n.localStore,t);vA(n,s,null),_A(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Yl(n,o)}catch(o){await ro(o)}}async function vN(r,t,n){const s=St(r);try{const o=await function(f,m){const g=St(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return g.mutationQueue.lookupMutationBatch(y,m).next(S=>(Ht(S!==null,37113),E=S.keys(),g.mutationQueue.removeMutationBatch(y,S))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>g.localDocuments.getDocuments(y,E))})}(s.localStore,t);vA(s,t,n),_A(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Yl(s,o)}catch(o){await ro(o)}}function _A(r,t){(r.cu.get(t)||[]).forEach(n=>{n.resolve()}),r.cu.delete(t)}function vA(r,t,n){const s=St(r);let o=s.uu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.uu[s.currentUser.toKey()]=o}}function Em(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.iu.get(t))r.ru.delete(s),n&&r.nu.Tu(s,n);r.iu.delete(t),r.isPrimaryClient&&r.au.Ur(t).forEach(s=>{r.au.containsKey(s)||EA(r,s)})}function EA(r,t){r.su.delete(t.path.canonicalString());const n=r.ou.get(t);n!==null&&(np(r.remoteStore,n),r.ou=r.ou.remove(t),r._u.delete(n),cp(r))}function EE(r,t,n){for(const s of n)s instanceof mA?(r.au.addReference(s.key,t),EN(r,s)):s instanceof pA?(st(up,"Document no longer in limbo: "+s.key),r.au.removeReference(s.key,t),r.au.containsKey(s.key)||EA(r,s.key)):vt(19791,{Iu:s})}function EN(r,t){const n=t.key,s=n.path.canonicalString();r.ou.get(n)||r.su.has(s)||(st(up,"New document in limbo: "+n),r.su.add(s),cp(r))}function cp(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const t=r.su.values().next().value;r.su.delete(t);const n=new pt(le.fromString(t)),s=r.lu.next();r._u.set(s,new uN(n)),r.ou=r.ou.insert(n,s),lA(r.remoteStore,new Or(ci(Qm(n.path)),s,"TargetPurposeLimboResolution",ph.le))}}async function Yl(r,t,n){const s=St(r),o=[],u=[],f=[];s.ru.isEmpty()||(s.ru.forEach((m,g)=>{f.push(s.Pu(g,t,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){o.push(y);const S=tp.Ps(g.targetId,y);u.push(S)}}))}),await Promise.all(f),s.nu.Q_(o),await async function(g,y){const E=St(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>Y.forEach(y,I=>Y.forEach(I.ls,B=>E.persistence.referenceDelegate.addReference(S,I.targetId,B)).next(()=>Y.forEach(I.hs,B=>E.persistence.referenceDelegate.removeReference(S,I.targetId,B)))))}catch(S){if(!so(S))throw S;st(ep,"Failed to update sequence numbers: "+S)}for(const S of y){const I=S.targetId;if(!S.fromCache){const B=E.Ss.get(I),$=B.snapshotVersion,W=B.withLastLimboFreeSnapshotVersion($);E.Ss=E.Ss.insert(I,W)}}}(s.localStore,u))}async function TN(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){st(up,"User change. New user:",t.toKey());const s=await rA(n.localStore,t);n.currentUser=t,function(u,f){u.cu.forEach(m=>{m.forEach(g=>{g.reject(new mt(Z.CANCELLED,f))})}),u.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Yl(n,s.Ms)}}function AN(r,t){const n=St(r),s=n._u.get(t);if(s&&s.tu)return xt().add(s.key);{let o=xt();const u=n.iu.get(t);if(!u)return o;for(const f of u){const m=n.ru.get(f);o=o.unionWith(m.view.Wa)}return o}}function TA(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=yA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=AN.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yN.bind(null,t),t.nu.Q_=rN.bind(null,t.eventManager),t.nu.Tu=sN.bind(null,t.eventManager),t}function SN(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_N.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vN.bind(null,t),t}class th{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=bh(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,n){return null}fu(t,n){return null}Vu(t){return bO(this.persistence,new TO,t.initialUser,this.serializer)}Ru(t){return new iA(Jm.Ei,this.serializer)}Au(t){return new NO}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}th.provider={build:()=>new th};class bN extends th{constructor(t){super(),this.cacheSizeBytes=t}mu(t,n){Ht(this.persistence.referenceDelegate instanceof Wc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new aO(s,t.asyncQueue,n)}Ru(t){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new iA(s=>Wc.Ei(s,n),this.serializer)}}class Tm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TN.bind(null,this.syncEngine),await JO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new eN}()}createDatastore(t){const n=bh(t.databaseInfo.databaseId),s=function(u){return new kO(u)}(t.databaseInfo);return function(u,f,m,g){return new BO(u,f,m,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new qO(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>vE(this.syncEngine,n,0),function(){return dE.C()?new dE:new MO}())}createSyncEngine(t,n){return function(o,u,f,m,g,y,E){const S=new cN(o,u,f,m,g,y);return E&&(S.hu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=St(o);st(Us,"RemoteStore shutting down."),u.aa.add(5),await Ql(u),u.ca.shutdown(),u.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Tm.provider={build:()=>new Tm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):Yi("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirestoreClient";class RN{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Qe.UNAUTHENTICATED,this.clientId=gT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{st(qr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(st(qr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=op(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Yd(r,t){r.asyncQueue.verifyOperationInProgress(),st(qr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await rA(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function TE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await IN(r);st(qr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>pE(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>pE(t.remoteStore,o)),r._onlineComponents=t}async function IN(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){st(qr,"Using user provided OfflineComponentProvider");try{await Yd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Qa("Error using user provided cache. Falling back to memory cache: "+n),await Yd(r,new th)}}else st(qr,"Using default OfflineComponentProvider"),await Yd(r,new bN(void 0));return r._offlineComponents}async function AA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(st(qr,"Using user provided OnlineComponentProvider"),await TE(r,r._uninitializedComponentsProvider._online)):(st(qr,"Using default OnlineComponentProvider"),await TE(r,new Tm))),r._onlineComponents}function CN(r){return AA(r).then(t=>t.syncEngine)}async function DN(r){const t=await AA(r),n=t.eventManager;return n.onListen=hN.bind(null,t.syncEngine),n.onUnlisten=mN.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=fN.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=pN.bind(null,t.syncEngine),n}function ON(r,t,n={}){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,y){const E=new wN({next:I=>{E.yu(),f.enqueueAndForget(()=>iN(u,S));const B=I.docs.has(m);!B&&I.fromCache?y.reject(new mt(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&I.fromCache&&g&&g.source==="server"?y.reject(new mt(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),S=new aN(Qm(m.path),E,{includeMetadataChanges:!0,Fa:!0});return nN(u,S)}(await DN(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(r,t,n){if(!n)throw new mt(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function MN(r,t,n,s){if(t===!0&&s===!0)throw new mt(Z.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function SE(r){if(!pt.isDocumentKey(r))throw new mt(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function hp(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":vt(12329,{type:typeof r})}function Ll(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new mt(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hp(r);throw new mt(Z.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="firestore.googleapis.com",bE=!0;class wE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new mt(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bA,this.ssl=bE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:bE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=nA;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<rO)throw new mt(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}MN("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SA((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new mt(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new mt(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new mt(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fp{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new mt(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new mt(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new V2;switch(s.type){case"firstParty":return new L2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new mt(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,lh("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=AE.get(n);s&&(st("ComponentProvider","Removing Datastore"),AE.delete(n),s.terminate())}(this),Promise.resolve()}}function xN(r,t,n,s={}){var o;r=Ll(r,fp);const u=Bl(t),f=r._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),g=`${t}:${n}`;f.host!==bA&&f.host!==g&&Qa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:g,ssl:u,emulatorOptions:s});if(!kr(y,m)&&(r._setSettings(y),u&&(XE(`https://${g}`),lh("Firestore",!0)),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Qe.MOCK_USER;else{E=R1(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new mt(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Qe(I)}r._authCredentials=new P2(new mT(E,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new dp(this.firestore,t,this._query)}}class xn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xn(this.firestore,t,this._key)}}class zl extends dp{constructor(t,n,s){super(t,n,Qm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xn(this.firestore,null,new pt(t))}withConverter(t){return new zl(this.firestore,t,this._path)}}function RE(r,t,...n){if(r=an(r),arguments.length===1&&(t=gT.newId()),NN("doc","path",t),r instanceof fp){const s=le.fromString(t,...n);return SE(s),new xn(r,null,new pt(s))}{if(!(r instanceof xn||r instanceof zl))throw new mt(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(le.fromString(t,...n));return SE(s),new xn(r.firestore,r instanceof zl?r.converter:null,new pt(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="AsyncQueue";class CE{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new aA(this,"async_queue_retry"),this.ju=()=>{const s=Qd();s&&st(IE,"Visibility state changed to "+s.visibilityState),this.y_.A_()},this.Hu=t;const n=Qd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Pr;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!so(t))throw t;st(IE,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const n=this.Hu.then(()=>(this.Wu=!0,t().catch(s=>{throw this.Ku=s,this.Wu=!1,Yi("INTERNAL UNHANDLED ERROR: ",DE(s)),s}).then(s=>(this.Wu=!1,s))));return this.Hu=n,n}enqueueAfterDelay(t,n,s){this.Ju(),this.zu.indexOf(t)>-1&&(n=0);const o=ap.createAndSchedule(this,t,n,s,u=>this.Xu(u));return this.Uu.push(o),o}Ju(){this.Ku&&vt(47125,{ec:DE(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const n of this.Uu)if(n.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const n=this.Uu.indexOf(t);this.Uu.splice(n,1)}}function DE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class mp extends fp{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new CE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new CE(t),this._firestoreClient=void 0,await t}}}function VN(r,t){const n=typeof r=="object"?r:Rm(),s=typeof r=="string"?r:Gc,o=Bs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=b1("firestore");u&&xN(o,...u)}return o}function wA(r){if(r._terminated)throw new mt(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||PN(r),r._firestoreClient}function PN(r){var t,n,s;const o=r._freezeSettings(),u=function(m,g,y,E){return new J2(m,g,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,SA(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new RN(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ja(qe.fromBase64String(t))}catch(n){throw new mt(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ja(qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new mt(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new mt(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new mt(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return It(this._lat,t._lat)||It(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=/^__.*__$/;class UN{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Fs(t,this.data,this.fieldMask,n,this.fieldTransforms):new Gl(t,this.data,n,this.fieldTransforms)}}function IA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw vt(40011,{oc:r})}}class _p{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this._c(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new _p(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ac({path:s,cc:!1});return o.lc(t),o}hc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ac({path:s,cc:!1});return o._c(),o}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return eh(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(IA(this.oc)&&kN.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class LN{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||bh(t)}dc(t,n,s,o=!1){return new _p({oc:t,methodName:n,Ec:s,path:je.emptyPath(),cc:!1,Ic:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zN(r){const t=r._freezeSettings(),n=bh(r._databaseId);return new LN(r._databaseId,!!t.ignoreUndefinedProperties,n)}function BN(r,t,n,s,o,u={}){const f=r.dc(u.merge||u.mergeFields?2:0,t,n,o);NA("Data must be an object, but it was:",f,s);const m=DA(s,f);let g,y;if(u.merge)g=new jn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const I=jN(t,S,n);if(!f.contains(I))throw new mt(Z.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);HN(E,I)||E.push(I)}g=new jn(E),y=f.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,y=f.fieldTransforms;return new UN(new Nn(m),g,y)}function CA(r,t){if(OA(r=an(r)))return NA("Unsupported field value:",t,r),DA(r,t);if(r instanceof RA)return function(s,o){if(!IA(o.oc))throw o.Tc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Tc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=CA(m,o.Pc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=an(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return SD(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=we.fromDate(s);return{timestampValue:Zc(o.serializer,u)}}if(s instanceof we){const u=new we(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zc(o.serializer,u)}}if(s instanceof gp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ja)return{bytesValue:$T(o.serializer,s._byteString)};if(s instanceof xn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Tc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yp)return function(f,m){return{mapValue:{fields:{[bT]:{stringValue:wT},[Kc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Tc("VectorValues must only contain numeric values.");return Ym(m.serializer,y)})}}}}}}(s,o);throw o.Tc(`Unsupported field value: ${hp(s)}`)}(r,t)}function DA(r,t){const n={};return _T(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qs(r,(s,o)=>{const u=CA(o,t.uc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function OA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof we||r instanceof gp||r instanceof Ja||r instanceof xn||r instanceof RA||r instanceof yp)}function NA(r,t,n){if(!OA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=hp(n);throw s==="an object"?t.Tc(r+" a custom object"):t.Tc(r+" "+s)}}function jN(r,t,n){if((t=an(t))instanceof pp)return t._internalPath;if(typeof t=="string")return MA(r,t);throw eh("Field path arguments must be of type string or ",r,!1,void 0,n)}const qN=new RegExp("[~\\*/\\[\\]]");function MA(r,t,n){if(t.search(qN)>=0)throw eh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new pp(...t.split("."))._internalPath}catch{throw eh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function eh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new mt(Z.INVALID_ARGUMENT,m+r+g)}function HN(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new FN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(VA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FN extends xA{data(){return super.data()}}function VA(r,t){return typeof t=="string"?MA(r,t):t instanceof pp?t._internalPath:t._delegate._internalPath}class GN{convertValue(t,n="none"){switch(Br(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(zr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw vt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return qs(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[Kc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>fe(f.doubleValue));return new yp(u)}convertGeoPoint(t){return new gp(fe(t.latitude),fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=yh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(xl(t));default:return null}}convertTimestamp(t){const n=Lr(t);return new we(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=le.fromString(t);Ht(eA(s),9688,{name:t});const o=new Vl(s.get(1),s.get(3)),u=new pt(s.popFirst(5));return o.isEqual(n)||Yi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class PA extends xA{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new YN(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(VA("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class YN extends PA{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(r){r=Ll(r,xn);const t=Ll(r.firestore,mp);return ON(wA(t),r._key).then(n=>WN(t,r,n))}class XN extends GN{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ja(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new xn(this.firestore,null,n)}}function OE(r,t,n){r=Ll(r,xn);const s=Ll(r.firestore,mp),o=KN(r.converter,t,n);return ZN(s,[BN(zN(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Gi.none())])}function ZN(r,t){return function(s,o){const u=new Pr;return s.asyncQueue.enqueueAndForget(async()=>gN(await CN(s),o,u)),u.promise}(wA(r),t)}function WN(r,t,n){const s=n.docs.get(t._key),o=new XN(r);return new PA(r,o,t._key,s,new QN(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){io=o})(eo),fi(new Hn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new mp(new k2(s.getProvider("auth-internal")),new z2(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new mt(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vl(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Mn(Vv,Pv,t),Mn(Vv,Pv,"esm2017")})();const JN={apiKey:"AIzaSyAmGMytZcOaMOeagKFbsKcZddIweAr9gCM",authDomain:"backend-5c3a6.firebaseapp.com",projectId:"backend-5c3a6",storageBucket:"backend-5c3a6.firebasestorage.app",messagingSenderId:"273396841919",appId:"1:273396841919:web:ea36b1f6ffbd6c120af50a",measurementId:"G-D5NE081SMC"},vp=i0(JN);O2(vp);const nh=hC(vp),t4=new qi,NE=VN(vp),e4=()=>{const r=ah(),[t,n]=ot.useState(""),s=()=>{r("/register")},o=async()=>{try{const f=(await EI(nh,t4)).user;console.log("登入成功",f),r("/world-map")}catch(u){console.error("Google 登入失敗:",u),alert("Google 登入失敗："+u.message)}};return it.jsxs("div",{className:"w-[522px] bg-[#F9E5C8] rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] p-8 flex flex-col items-center md:w-[450px] sm:w-full",children:[it.jsx("div",{className:"text-[#BD8383] text-center font-metrophobic text-xl py-[18px] px-[10px] mb-4",children:"Log in AI Education Platform"}),it.jsxs("div",{className:"flex w-full max-w-[400px] p-2 px-4 justify-center items-center gap-3 rounded-lg border border-[#E0E0E0] bg-[#FFF6E9] mb-4",children:[it.jsx("div",{className:"text-[#BD8383] text-center font-metrophobic text-xl",children:"還不是會員？"}),it.jsx("button",{onClick:s,className:"text-[#BD8383] text-center font-metrophobic text-xl py-[6px] px-3 rounded-lg bg-[rgba(219,192,102,0.40)]",children:"註冊"})]}),it.jsxs("div",{className:"w-full max-w-[400px] space-y-4",children:[it.jsxs("div",{className:"space-y-1.5",children:[it.jsx("div",{className:"text-[#333] font-metrophobic text-sm",children:"帳號"}),it.jsx("input",{type:"text",className:"w-full h-[30px] bg-[#D9D9D9] rounded"})]}),it.jsxs("div",{className:"space-y-1.5",children:[it.jsx("div",{className:"text-[#333] font-metrophobic text-sm",children:"密碼"}),it.jsx("input",{type:"password",className:"w-full h-[30px] bg-[#D9D9D9] rounded"})]})]}),it.jsxs("div",{className:"w-full max-w-[380px] mt-6",children:[it.jsx("button",{className:"w-full px-8 py-3 rounded-lg bg-[#FFF6E9] text-[#333] font-metrophobic text-xl mb-4 cursor-pointer",onClick:o,children:"Sign up with Google"}),it.jsx("button",{className:"w-[159px] mx-auto px-8 py-3 rounded-lg bg-[#D9D9D9] text-[#333] font-metrophobic text-xl cursor-pointer block",children:"LOG IN"})]})]})},n4=()=>it.jsxs("div",{className:"flex flex-col min-h-screen w-full bg-white relative",children:[it.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/47b6f3610a36f386b81325d34f4c52b50d9d9282",alt:"",className:"w-full h-full absolute top-0 left-0 object-cover"}),it.jsx("div",{className:"flex justify-center items-center min-h-screen relative z-10 px-6",children:it.jsx(e4,{})})]}),i4=()=>{const[r,t]=ot.useState(""),[n,s]=ot.useState(""),[o,u]=ot.useState(""),[f,m]=ot.useState(""),g=ah(),y=async E=>{if(E.preventDefault(),!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){m("請輸入有效的 Email 格式");return}if(o.length<6){m("密碼至少需要 6 個字元");return}try{const B=(await XR(nh,n,o)).user;await ZR(B),m("註冊成功，請至信箱收信驗證後再登入！"),g("/registration-success")}catch(I){m(I.message||"註冊失敗")}};return it.jsxs("div",{className:"register-page",children:[it.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/47b6f3610a36f386b81325d34f4c52b50d9d9282",alt:"",className:"background-image"}),it.jsx("div",{className:"content-wrapper",children:it.jsxs("div",{className:"register-card",children:[it.jsx("h2",{className:"register-title",children:"註冊帳號"}),it.jsxs("form",{className:"space-y-4",onSubmit:y,children:[it.jsxs("div",{children:[it.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"使用者名稱"}),it.jsx("input",{type:"text",className:"w-full mt-1 p-2 border rounded bg-[#D9D9D9]",value:r,onChange:E=>t(E.target.value)})]}),it.jsxs("div",{children:[it.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email"}),it.jsx("input",{type:"email",className:"w-full mt-1 p-2 border rounded bg-[#D9D9D9]",value:n,onChange:E=>s(E.target.value)})]}),it.jsxs("div",{children:[it.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"密碼"}),it.jsx("input",{type:"password",className:"w-full mt-1 p-2 border rounded bg-[#D9D9D9]",value:o,onChange:E=>u(E.target.value)})]}),it.jsx("button",{type:"submit",className:"w-full bg-[#BD8383] text-white py-2 rounded-lg font-semibold",children:"註冊"}),f&&it.jsx("p",{className:"text-sm text-red-600 mt-2",children:f})]})]})})]})},r4=()=>{const r=ah();ot.useEffect(()=>{console.log("成功畫面載入")},[]);const t=()=>{r("/signup")};return it.jsxs("div",{className:"registration-success",children:[it.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/47b6f3610a36f386b81325d34f4c52b50d9d9282",alt:"",className:"background-image"}),it.jsx("div",{className:"content-wrapper",children:it.jsx("div",{className:"success-card",children:it.jsxs("div",{className:"success-content",children:[it.jsx("div",{className:"success-title",children:"Welcome to AI Spot"}),it.jsxs("div",{className:"success-message-container",children:[it.jsx("div",{className:"success-message",children:"註冊成功"}),it.jsx("div",{className:"success-description",children:"感謝您的註冊!您的帳號已成功建立!"})]}),it.jsx("div",{className:"button-container",children:it.jsx("button",{className:"continue-button",onClick:t,children:"返回登入"})})]})})})]})},s4=()=>{const[r,t]=ot.useState(null),[n,s]=ot.useState(!0),[o,u]=ot.useState(null);return ot.useEffect(()=>{const m=tI(nh,async g=>{if(console.log("目前使用者:",g),!g){t({newbie:!0}),s(!1);return}try{const y=RE(NE,"userProgress",g.uid),E=await $N(y);if(E.exists())t(E.data());else{const S={newbie:!0,deepLearning:!1,otherTopics:!1,warehouse:!1,completedLessons:[]};await OE(y,S),t(S)}}catch(y){y.message.includes("offline")?u("請確認網路連線是否正常。"):u(y.message),console.error("Error fetching progress:",y)}finally{s(!1)}});return()=>m()},[]),{progress:r,loading:n,error:o,updateProgress:async(m,g)=>{try{const y=nh.currentUser;if(!y)return!1;const E=RE(NE,"userProgress",y.uid);return await OE(E,{...r,[m]:g},{merge:!0}),t(S=>({...S,[m]:g})),!0}catch(y){return u((y==null?void 0:y.message)||"發生未知錯誤"),!1}}}},a4=()=>{const{progress:r,loading:t,error:n}=s4(),[s,o]=ot.useState(null),u=async f=>{!r||r[f]===!1||o(f)};return t?it.jsx("div",{className:"flex items-center justify-center min-h-screen",children:it.jsx("div",{className:"loading-spinner"})}):n?it.jsxs("div",{className:"flex items-center justify-center min-h-screen text-red-600",children:["Error loading map: ",n]}):it.jsxs("div",{className:"relative w-full min-h-screen bg-white overflow-hidden",children:[it.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/398495613748854ba09709ddbde3be3e2aa7a1e2?placeholderIfAbsent=true",alt:"World Map Background",className:"w-full h-auto aspect-[1.41] object-contain object-center",role:"presentation"}),it.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-4",children:[it.jsx("button",{onClick:()=>u("deepLearning"),className:`rounded-[999px] bg-[#C5D5DB] px-[70px] py-[37px] font-metrophobic text-[50px] text-[#333333] font-normal text-center whitespace-nowrap region-button mb-8 ${!r||r.deepLearning===!1?"region-locked":""} ${s==="deepLearning"?"region-active":""} ${(r==null?void 0:r.deepLearning)==="completed"?"region-completed":""}`,disabled:!r||r.deepLearning===!1,"aria-label":"Deep Learning Island",children:"深度學習島"}),it.jsx("button",{onClick:()=>u("otherTopics"),className:`rounded-[999px] bg-[#C5D5DB] px-[70px] py-[37px] font-metrophobic text-[50px] text-[#333333] font-normal text-center whitespace-nowrap region-button mb-8 ${!r||r.otherTopics===!1?"region-locked":""} ${s==="otherTopics"?"region-active":""} ${(r==null?void 0:r.otherTopics)==="completed"?"region-completed":""}`,disabled:!r||r.otherTopics===!1,"aria-label":"Other Topics Island",children:"其他主題島"}),it.jsx("button",{onClick:()=>u("newbie"),className:`rounded-[999px] bg-[#C5D5DB] px-[70px] py-[37px] font-metrophobic text-[50px] text-[#333333] font-normal text-center whitespace-nowrap region-button mb-8 ${!r||r.newbie===!1?"region-locked":""} ${s==="newbie"?"region-active":""} ${(r==null?void 0:r.newbie)==="completed"?"region-completed":""}`,disabled:!r||r.newbie===!1,"aria-label":"Newbie Village",children:"新手村"}),it.jsx("button",{onClick:()=>u("warehouse"),className:`rounded-[999px] bg-[#C5D5DB] px-[70px] py-[37px] font-metrophobic text-[50px] text-[#333333] font-normal text-center whitespace-nowrap region-button ${!r||r.warehouse===!1?"region-locked":""} ${s==="warehouse"?"region-active":""} ${(r==null?void 0:r.warehouse)==="completed"?"region-completed":""}`,disabled:!r||r.warehouse===!1,"aria-label":"Warehouse",children:"倉庫"})]})]})};function o4(){return it.jsx(d1,{children:it.jsxs(c1,{children:[it.jsx(La,{path:"/",element:it.jsx(p1,{})}),it.jsx(La,{path:"/signup",element:it.jsx(n4,{})}),it.jsx(La,{path:"/register",element:it.jsx(i4,{})}),it.jsx(La,{path:"/registration-success",element:it.jsx(r4,{})}),it.jsx(La,{path:"/world-map",element:it.jsx(a4,{})})]})})}_b.createRoot(document.getElementById("root")).render(it.jsx(ot.StrictMode,{children:it.jsx(o4,{})}));
