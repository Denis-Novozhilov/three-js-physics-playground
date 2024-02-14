(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const id="modulepreload",rd=function(s,t){return new URL(s,t).href},El={},sd=function(t,e,n){if(!e||e.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=rd(r,n),r in El)return;El[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!n)for(let c=i.length-1;c>=0;c--){const u=i[c];if(u.href===r&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":id,a||(h.as="script",h.crossOrigin=""),h.href=r,document.head.appendChild(h),a)return new Promise((c,u)=>{h.addEventListener("load",c),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="158",lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,Ml=1,od=2,mh=1,vh=2,ri=3,Pi=0,on=1,oi=2,Ti=0,Lr=1,Sl=2,wl=3,Tl=4,ld=5,Wi=100,cd=101,hd=102,bl=103,Al=104,ud=200,dd=201,fd=202,pd=203,xo=204,yo=205,md=206,vd=207,gd=208,_d=209,xd=210,yd=211,Ed=212,Md=213,Sd=214,wd=0,Td=1,bd=2,sa=3,Ad=4,Cd=5,Rd=6,Pd=7,gh=0,Ld=1,Dd=2,bi=0,Id=1,Nd=2,Ud=3,Fd=4,Od=5,_h=300,Fr=301,Or=302,Eo=303,Mo=304,_a=306,So=1e3,zn=1001,wo=1002,rn=1003,Cl=1004,Pa=1005,bn=1006,Bd=1007,hs=1008,Ai=1009,zd=1010,Vd=1011,qo=1012,xh=1013,yi=1014,Ei=1015,us=1016,yh=1017,Eh=1018,Yi=1020,kd=1021,Vn=1023,Hd=1024,Gd=1025,$i=1026,Br=1027,Wd=1028,Mh=1029,Xd=1030,Sh=1031,wh=1033,La=33776,Da=33777,Ia=33778,Na=33779,Rl=35840,Pl=35841,Ll=35842,Dl=35843,qd=36196,Il=37492,Nl=37496,Ul=37808,Fl=37809,Ol=37810,Bl=37811,zl=37812,Vl=37813,kl=37814,Hl=37815,Gl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,Ua=36492,jl=36494,Kl=36495,Yd=36283,Zl=36284,Jl=36285,Ql=36286,Th=3e3,ji=3001,$d=3200,jd=3201,bh=0,Kd=1,Cn="",Ge="srgb",ci="srgb-linear",Yo="display-p3",xa="display-p3-linear",aa="linear",Se="srgb",oa="rec709",la="p3",hr=7680,tc=519,Zd=512,Jd=513,Qd=514,tf=515,ef=516,nf=517,rf=518,sf=519,ec=35044,nc="300 es",To=1035,li=2e3,ca=2001;class ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const rs=Math.PI/180,ds=180/Math.PI;function Xr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Ke(s,t,e){return Math.max(t,Math.min(e,s))}function $o(s,t){return(s%t+t)%t}function af(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function of(s,t,e){return s!==t?(e-s)/(t-s):0}function ss(s,t,e){return(1-e)*s+e*t}function lf(s,t,e,n){return ss(s,t,1-Math.exp(-e*n))}function cf(s,t=1){return t-Math.abs($o(s,t*2)-t)}function hf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function uf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function df(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ff(s,t){return s+Math.random()*(t-s)}function pf(s){return s*(.5-Math.random())}function mf(s){s!==void 0&&(ic=s);let t=ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vf(s){return s*rs}function gf(s){return s*ds}function bo(s){return(s&s-1)===0&&s!==0}function _f(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ha(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xf(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),c=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),v=a((n-t)/2);switch(i){case"XYX":s.set(o*c,l*u,l*d,o*h);break;case"YZY":s.set(l*d,o*c,l*u,o*h);break;case"ZXZ":s.set(l*u,l*d,o*c,o*h);break;case"XZX":s.set(o*c,l*v,l*f,o*h);break;case"YXY":s.set(l*f,o*c,l*v,o*h);break;case"ZYZ":s.set(l*v,l*f,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ar(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function en(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yf={DEG2RAD:rs,RAD2DEG:ds,generateUUID:Xr,clamp:Ke,euclideanModulo:$o,mapLinear:af,inverseLerp:of,lerp:ss,damp:lf,pingpong:cf,smoothstep:hf,smootherstep:uf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:vf,radToDeg:gf,isPowerOfTwo:bo,ceilPowerOfTwo:_f,floorPowerOfTwo:ha,setQuaternionFromProperEuler:xf,normalize:en,denormalize:Ar};class oe{constructor(t=0,e=0){oe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,i,r,a,o,l,h){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,h)}set(t,e,n,i,r,a,o,l,h){const c=this.elements;return c[0]=t,c[1]=i,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],v=n[8],g=i[0],m=i[3],p=i[6],_=i[1],x=i[4],y=i[7],E=i[2],b=i[5],A=i[8];return r[0]=a*g+o*_+l*E,r[3]=a*m+o*x+l*b,r[6]=a*p+o*y+l*A,r[1]=h*g+c*_+u*E,r[4]=h*m+c*x+u*b,r[7]=h*p+c*y+u*A,r[2]=d*g+f*_+v*E,r[5]=d*m+f*x+v*b,r[8]=d*p+f*y+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-n*r*c+n*o*l+i*r*h-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*a-o*h,d=o*l-c*r,f=h*r-a*l,v=e*u+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(i*h-c*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(c*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*l-h*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-i*h,i*l,-i*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new he;function Ah(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ef(){const s=fs("canvas");return s.style.display="block",s}const rc={};function as(s){s in rc||(rc[s]=!0,console.warn(s))}const sc=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ac=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[ci]:{transfer:aa,primaries:oa,toReference:s=>s,fromReference:s=>s},[Ge]:{transfer:Se,primaries:oa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xa]:{transfer:aa,primaries:la,toReference:s=>s.applyMatrix3(ac),fromReference:s=>s.applyMatrix3(sc)},[Yo]:{transfer:Se,primaries:la,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ac),fromReference:s=>s.applyMatrix3(sc).convertLinearToSRGB()}},Mf=new Set([ci,xa]),xe={enabled:!0,_workingColorSpace:ci,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Rs[t].toReference,i=Rs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Rs[s].primaries},getTransfer:function(s){return s===Cn?aa:Rs[s].transfer}};function Dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ur;class Ch{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ur===void 0&&(ur=fs("canvas")),ur.width=t.width,ur.height=t.height;const n=ur.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ur}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Dr(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dr(e[n]/255)*255):e[n]=Dr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sf=0;class Rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Xr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ba(i[a].image)):r.push(Ba(i[a]))}else r=Ba(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ba(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wf=0;class ln extends ar{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=zn,i=zn,r=bn,a=hs,o=Vn,l=Ai,h=ln.DEFAULT_ANISOTROPY,c=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Xr(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ji?Ge:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case So:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case So:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ge?ji:Th}set encoding(t){as("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ji?Ge:Cn}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=_h;ln.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,e=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,y=(f+1)/2,E=(p+1)/2,b=(c+d)/4,A=(u+g)/4,R=(v+m)/4;return x>y&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=A/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=R/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=A/r,i=R/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(u-g)/_,this.z=(d-c)/_,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tf extends ar{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(as("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ji?Ge:Cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Tf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ph extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bf extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(u!==g||l!==d||h!==f||c!==v){let m=1-o;const p=l*d+h*f+c*v+u*g,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),b=Math.atan2(E,p*_);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E}const y=o*_;if(l=l*m+d*y,h=h*m+f*y,c=c*m+v*y,u=u*m+g*y,m===1-o){const E=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=E,h*=E,c*=E,u*=E}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],h=n[i+2],c=n[i+3],u=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return t[e]=o*v+c*u+l*f-h*d,t[e+1]=l*v+c*d+h*u-o*f,t[e+2]=h*v+c*f+o*d-l*u,t[e+3]=c*v-o*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),v=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*f*v,this._y=h*f*u-d*c*v,this._z=h*c*v+d*f*u,this._w=h*c*u-d*f*v;break;case"YXZ":this._x=d*c*u+h*f*v,this._y=h*f*u-d*c*v,this._z=h*c*v-d*f*u,this._w=h*c*u+d*f*v;break;case"ZXY":this._x=d*c*u-h*f*v,this._y=h*f*u+d*c*v,this._z=h*c*v+d*f*u,this._w=h*c*u-d*f*v;break;case"ZYX":this._x=d*c*u-h*f*v,this._y=h*f*u+d*c*v,this._z=h*c*v-d*f*u,this._w=h*c*u+d*f*v;break;case"YZX":this._x=d*c*u+h*f*v,this._y=h*f*u+d*c*v,this._z=h*c*v-d*f*u,this._w=h*c*u-d*f*v;break;case"XZY":this._x=d*c*u-h*f*v,this._y=h*f*u-d*c*v,this._z=h*c*v+d*f*u,this._w=h*c*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+a*o+i*h-r*l,this._y=i*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-i*o,this._w=a*c-n*o-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,e=0,n=0){rt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*i-o*n),c=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*h+a*u-o*c,this.y=n+l*c+o*h-r*u,this.z=i+l*u+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new rt,oc=new er;class Ss{constructor(t=new rt(1/0,1/0,1/0),e=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),Ls.subVectors(this.max,Kr),dr.subVectors(t.a,Kr),fr.subVectors(t.b,Kr),pr.subVectors(t.c,Kr),pi.subVectors(fr,dr),mi.subVectors(pr,fr),Fi.subVectors(dr,pr);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Fi.z,Fi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Fi.z,0,-Fi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Fi.y,Fi.x,0];return!Va(e,dr,fr,pr,Ls)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,dr,fr,pr,Ls))?!1:(Ds.crossVectors(pi,mi),e=[Ds.x,Ds.y,Ds.z],Va(e,dr,fr,pr,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Un=new rt,Ps=new Ss,dr=new rt,fr=new rt,pr=new rt,pi=new rt,mi=new rt,Fi=new rt,Kr=new rt,Ls=new rt,Ds=new rt,Oi=new rt;function Va(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Oi.fromArray(s,r);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=t.dot(Oi),h=e.dot(Oi),c=n.dot(Oi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Af=new Ss,Zr=new rt,ka=new rt;class jo{constructor(t=new rt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Af.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);const e=Zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(ka)),this.expandByPoint(Zr.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new rt,Ha=new rt,Is=new rt,vi=new rt,Ga=new rt,Ns=new rt,Wa=new rt;class Lh{constructor(t=new rt,e=new rt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ha.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Ha);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=vi.dot(this.direction),l=-vi.dot(Is),h=vi.lengthSq(),c=Math.abs(1-a*a);let u,d,f,v;if(c>0)if(u=a*l-o,d=a*o-l,v=r*c,u>=0)if(d>=-v)if(d<=v){const g=1/c;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d<=-v?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ha).addScaledVector(Is,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,r){Ga.subVectors(e,t),Ns.subVectors(n,t),Wa.crossVectors(Ga,Ns);let a=this.direction.dot(Wa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,t);const l=o*this.direction.dot(Ns.crossVectors(vi,Ns));if(l<0)return null;const h=o*this.direction.dot(Ga.cross(vi));if(h<0||l+h>a)return null;const c=-o*vi.dot(Wa);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(t,e,n,i,r,a,o,l,h,c,u,d,f,v,g,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,h,c,u,d,f,v,g,m)}set(t,e,n,i,r,a,o,l,h,c,u,d,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/mr.setFromMatrixColumn(t,0).length(),r=1/mr.setFromMatrixColumn(t,1).length(),a=1/mr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*c,f=a*u,v=o*c,g=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+v*h,e[5]=d-g*h,e[9]=-o*l,e[2]=g-d*h,e[6]=v+f*h,e[10]=a*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,v=h*c,g=h*u;e[0]=d+g*o,e[4]=v*o-f,e[8]=a*h,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=f*o-v,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,v=h*c,g=h*u;e[0]=d-g*o,e[4]=-a*u,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*c,e[9]=g-d*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*c,f=a*u,v=o*c,g=o*u;e[0]=l*c,e[4]=v*h-f,e[8]=d*h+g,e[1]=l*u,e[5]=g*h+d,e[9]=f*h-v,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*h,v=o*l,g=o*h;e[0]=l*c,e[4]=g-d*u,e[8]=v*u+f,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=f*u+v,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*h,v=o*l,g=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+g,e[5]=a*c,e[9]=f*u-v,e[2]=v*u-f,e[6]=o*c,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Rf)}lookAt(t,e,n){const i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),gi.crossVectors(n,gn),gi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),gi.crossVectors(n,gn)),gi.normalize(),Us.crossVectors(gn,gi),i[0]=gi.x,i[4]=Us.x,i[8]=gn.x,i[1]=gi.y,i[5]=Us.y,i[9]=gn.y,i[2]=gi.z,i[6]=Us.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],x=n[7],y=n[11],E=n[15],b=i[0],A=i[4],R=i[8],M=i[12],S=i[1],P=i[5],z=i[9],V=i[13],N=i[2],k=i[6],J=i[10],F=i[14],B=i[3],q=i[7],X=i[11],T=i[15];return r[0]=a*b+o*S+l*N+h*B,r[4]=a*A+o*P+l*k+h*q,r[8]=a*R+o*z+l*J+h*X,r[12]=a*M+o*V+l*F+h*T,r[1]=c*b+u*S+d*N+f*B,r[5]=c*A+u*P+d*k+f*q,r[9]=c*R+u*z+d*J+f*X,r[13]=c*M+u*V+d*F+f*T,r[2]=v*b+g*S+m*N+p*B,r[6]=v*A+g*P+m*k+p*q,r[10]=v*R+g*z+m*J+p*X,r[14]=v*M+g*V+m*F+p*T,r[3]=_*b+x*S+y*N+E*B,r[7]=_*A+x*P+y*k+E*q,r[11]=_*R+x*z+y*J+E*X,r[15]=_*M+x*V+y*F+E*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*l*u-i*h*u-r*o*d+n*h*d+i*o*f-n*l*f)+g*(+e*l*f-e*h*d+r*a*d-i*a*f+i*h*c-r*l*c)+m*(+e*h*u-e*o*f-r*a*u+n*a*f+r*o*c-n*h*c)+p*(-i*o*c-e*l*u+e*o*d+i*a*u-n*a*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],_=u*m*h-g*d*h+g*l*f-o*m*f-u*l*p+o*d*p,x=v*d*h-c*m*h-v*l*f+a*m*f+c*l*p-a*d*p,y=c*g*h-v*u*h+v*o*f-a*g*f-c*o*p+a*u*p,E=v*u*l-c*g*l-v*o*d+a*g*d+c*o*m-a*u*m,b=e*_+n*x+i*y+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=_*A,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*A,t[2]=(o*m*r-g*l*r+g*i*h-n*m*h-o*i*p+n*l*p)*A,t[3]=(u*l*r-o*d*r-u*i*h+n*d*h+o*i*f-n*l*f)*A,t[4]=x*A,t[5]=(c*m*r-v*d*r+v*i*f-e*m*f-c*i*p+e*d*p)*A,t[6]=(v*l*r-a*m*r-v*i*h+e*m*h+a*i*p-e*l*p)*A,t[7]=(a*d*r-c*l*r+c*i*h-e*d*h-a*i*f+e*l*f)*A,t[8]=y*A,t[9]=(v*u*r-c*g*r-v*n*f+e*g*f+c*n*p-e*u*p)*A,t[10]=(a*g*r-v*o*r+v*n*h-e*g*h-a*n*p+e*o*p)*A,t[11]=(c*o*r-a*u*r-c*n*h+e*u*h+a*n*f-e*o*f)*A,t[12]=E*A,t[13]=(c*g*i-v*u*i+v*n*d-e*g*d-c*n*m+e*u*m)*A,t[14]=(v*o*i-a*g*i-v*n*l+e*g*l+a*n*m-e*o*m)*A,t[15]=(a*u*i-c*o*i+c*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,c*o+n,c*l-i*a,0,h*l-i*o,c*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,u=o+o,d=r*h,f=r*c,v=r*u,g=a*c,m=a*u,p=o*u,_=l*h,x=l*c,y=l*u,E=n.x,b=n.y,A=n.z;return i[0]=(1-(g+p))*E,i[1]=(f+y)*E,i[2]=(v-x)*E,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+p))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(v+x)*A,i[9]=(m-_)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=mr.set(i[0],i[1],i[2]).length();const a=mr.set(i[4],i[5],i[6]).length(),o=mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Fn.copy(this);const h=1/r,c=1/a,u=1/o;return Fn.elements[0]*=h,Fn.elements[1]*=h,Fn.elements[2]*=h,Fn.elements[4]*=c,Fn.elements[5]*=c,Fn.elements[6]*=c,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=li){const l=this.elements,h=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,v;if(o===li)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ca)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=li){const l=this.elements,h=1/(e-t),c=1/(n-i),u=1/(a-r),d=(e+t)*h,f=(n+i)*c;let v,g;if(o===li)v=(a+r)*u,g=-2*u;else if(o===ca)v=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mr=new rt,Fn=new Be,Cf=new rt(0,0,0),Rf=new rt(1,1,1),gi=new rt,Us=new rt,gn=new rt,lc=new Be,cc=new er;class ya{constructor(t=0,e=0,n=0,i=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],h=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pf=0;const hc=new rt,vr=new er,ei=new Be,Fs=new rt,Jr=new rt,Lf=new rt,Df=new er,uc=new rt(1,0,0),dc=new rt(0,1,0),fc=new rt(0,0,1),If={type:"added"},Nf={type:"removed"};class Je extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new rt,e=new ya,n=new er,i=new rt(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new he}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(dc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(dc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Jr,Fs,this.up):ei.lookAt(Fs,Jr,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),vr.setFromRotationMatrix(ei),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(If)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,Lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Je.DEFAULT_UP=new rt(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new rt,ni=new rt,Xa=new rt,ii=new rt,gr=new rt,_r=new rt,pc=new rt,qa=new rt,Ya=new rt,$a=new rt;let Os=!1;class Bn{constructor(t=new rt,e=new rt,n=new rt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),On.subVectors(t,e),i.cross(On);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){On.subVectors(i,e),ni.subVectors(n,e),Xa.subVectors(t,e);const a=On.dot(On),o=On.dot(ni),l=On.dot(Xa),h=ni.dot(ni),c=ni.dot(Xa),u=a*h-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(h*l-o*c)*d,v=(a*c-o*l)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii),ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(t,e,n,i,r,a,o,l){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ii),l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l}static isFrontFacing(t,e,n,i){return On.subVectors(n,e),ni.subVectors(t,e),On.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),On.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),Bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;gr.subVectors(i,n),_r.subVectors(r,n),qa.subVectors(t,n);const l=gr.dot(qa),h=_r.dot(qa);if(l<=0&&h<=0)return e.copy(n);Ya.subVectors(t,i);const c=gr.dot(Ya),u=_r.dot(Ya);if(c>=0&&u<=c)return e.copy(i);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(n).addScaledVector(gr,a);$a.subVectors(t,r);const f=gr.dot($a),v=_r.dot($a);if(v>=0&&f<=v)return e.copy(r);const g=f*h-l*v;if(g<=0&&h>=0&&v<=0)return o=h/(h-v),e.copy(n).addScaledVector(_r,o);const m=c*v-f*u;if(m<=0&&u-c>=0&&f-v>=0)return pc.subVectors(r,i),o=(u-c)/(u-c+(f-v)),e.copy(i).addScaledVector(pc,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(gr,a).addScaledVector(_r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function ja(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ge{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=$o(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ja(a,r,t+1/3),this.g=ja(a,r,t),this.b=ja(a,r,t-1/3)}return xe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}copyLinearToSRGB(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return xe.fromWorkingColorSpace(je.copy(this),t),Math.round(Ke(je.r*255,0,255))*65536+Math.round(Ke(je.g*255,0,255))*256+Math.round(Ke(je.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(je.copy(this),e);const n=je.r,i=je.g,r=je.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ge){xe.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,i=je.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Bs);const n=ss(_i.h,Bs.h,e),i=ss(_i.s,Bs.s,e),r=ss(_i.l,Bs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new ge;ge.NAMES=Ih;let Uf=0;class ws extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Lr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=yo,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Nh extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new rt,zs=new oe;class Yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ec,this.updateRange={offset:0,count:-1},this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ec&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Uh extends Yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fh extends Yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $n extends Yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ff=0;const wn=new Be,Ka=new Je,xr=new rt,_n=new Ss,Qr=new Ss,He=new rt;class Ii extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?Fh:Uh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $n(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new rt,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(_n.min,Qr.min),_n.expandByPoint(He),He.addVectors(_n.max,Qr.max),_n.expandByPoint(He)):(_n.expandByPoint(Qr.min),_n.expandByPoint(Qr.max))}_n.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)He.fromBufferAttribute(o,h),l&&(xr.fromBufferAttribute(t,h),He.add(xr)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,h=[],c=[];for(let S=0;S<o;S++)h[S]=new rt,c[S]=new rt;const u=new rt,d=new rt,f=new rt,v=new oe,g=new oe,m=new oe,p=new rt,_=new rt;function x(S,P,z){u.fromArray(i,S*3),d.fromArray(i,P*3),f.fromArray(i,z*3),v.fromArray(a,S*2),g.fromArray(a,P*2),m.fromArray(a,z*2),d.sub(u),f.sub(u),g.sub(v),m.sub(v);const V=1/(g.x*m.y-m.x*g.y);isFinite(V)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(V),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(V),h[S].add(p),h[P].add(p),h[z].add(p),c[S].add(_),c[P].add(_),c[z].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,P=y.length;S<P;++S){const z=y[S],V=z.start,N=z.count;for(let k=V,J=V+N;k<J;k+=3)x(n[k+0],n[k+1],n[k+2])}const E=new rt,b=new rt,A=new rt,R=new rt;function M(S){A.fromArray(r,S*3),R.copy(A);const P=h[S];E.copy(P),E.sub(A.multiplyScalar(A.dot(P))).normalize(),b.crossVectors(R,P);const V=b.dot(c[S])<0?-1:1;l[S*4]=E.x,l[S*4+1]=E.y,l[S*4+2]=E.z,l[S*4+3]=V}for(let S=0,P=y.length;S<P;++S){const z=y[S],V=z.start,N=z.count;for(let k=V,J=V+N;k<J;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new rt,r=new rt,a=new rt,o=new rt,l=new rt,h=new rt,c=new rt,u=new rt;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),c.subVectors(a,r),u.subVectors(i,r),c.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),o.add(c),l.add(c),h.add(c),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),u.subVectors(i,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*c;for(let p=0;p<c;p++)d[v++]=h[f++]}return new Yn(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ii,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new Be,Bi=new Lh,Vs=new jo,vc=new rt,yr=new rt,Er=new rt,Mr=new rt,Za=new rt,ks=new rt,Hs=new oe,Gs=new oe,Ws=new oe,gc=new rt,_c=new rt,xc=new rt,Xs=new rt,qs=new rt;class Rn extends Je{constructor(t=new Ii,e=new Nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ks.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],u=r[l];c!==0&&(Za.fromBufferAttribute(u,t),a?ks.addScaledVector(Za,c):ks.addScaledVector(Za.sub(e),c))}e.add(ks)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Vs.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Vs,vc)===null||Bi.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,E=x;y<E;y+=3){const b=o.getX(y),A=o.getX(y+1),R=o.getX(y+2);i=Ys(this,p,t,n,h,c,u,b,A,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=Ys(this,a,t,n,h,c,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,E=x;y<E;y+=3){const b=y,A=y+1,R=y+2;i=Ys(this,p,t,n,h,c,u,b,A,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=m,x=m+1,y=m+2;i=Ys(this,a,t,n,h,c,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Of(s,t,e,n,i,r,a,o){let l;if(t.side===on?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Pi,o),l===null)return null;qs.copy(o),qs.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(qs);return h<e.near||h>e.far?null:{distance:h,point:qs.clone(),object:s}}function Ys(s,t,e,n,i,r,a,o,l,h){s.getVertexPosition(o,yr),s.getVertexPosition(l,Er),s.getVertexPosition(h,Mr);const c=Of(s,t,e,n,yr,Er,Mr,Xs);if(c){i&&(Hs.fromBufferAttribute(i,o),Gs.fromBufferAttribute(i,l),Ws.fromBufferAttribute(i,h),c.uv=Bn.getInterpolation(Xs,yr,Er,Mr,Hs,Gs,Ws,new oe)),r&&(Hs.fromBufferAttribute(r,o),Gs.fromBufferAttribute(r,l),Ws.fromBufferAttribute(r,h),c.uv1=Bn.getInterpolation(Xs,yr,Er,Mr,Hs,Gs,Ws,new oe),c.uv2=c.uv1),a&&(gc.fromBufferAttribute(a,o),_c.fromBufferAttribute(a,l),xc.fromBufferAttribute(a,h),c.normal=Bn.getInterpolation(Xs,yr,Er,Mr,gc,_c,xc,new rt),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new rt,materialIndex:0};Bn.getNormal(yr,Er,Mr,u.normal),c.face=u}return c}class qr extends Ii{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,i,a,2),v("x","z","y",1,-1,t,n,-e,i,a,3),v("x","y","z",1,-1,t,e,n,i,r,4),v("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new $n(h,3)),this.setAttribute("normal",new $n(c,3)),this.setAttribute("uv",new $n(u,2));function v(g,m,p,_,x,y,E,b,A,R,M){const S=y/A,P=E/R,z=y/2,V=E/2,N=b/2,k=A+1,J=R+1;let F=0,B=0;const q=new rt;for(let X=0;X<J;X++){const T=X*P-V;for(let O=0;O<k;O++){const U=O*S-z;q[g]=U*_,q[m]=T*x,q[p]=N,h.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[p]=b>0?1:-1,c.push(q.x,q.y,q.z),u.push(O/A),u.push(1-X/R),F+=1}}for(let X=0;X<R;X++)for(let T=0;T<A;T++){const O=d+T+k*X,U=d+T+k*(X+1),D=d+(T+1)+k*(X+1),L=d+(T+1)+k*X;l.push(O,U,L),l.push(U,D,L),B+=6}o.addGroup(f,B,M),f+=B,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function nn(s){const t={};for(let e=0;e<s.length;e++){const n=zr(s[e]);for(const i in n)t[i]=n[i]}return t}function Bf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Oh(s){return s.getRenderTarget()===null?s.outputColorSpace:xe.workingColorSpace}const zf={clone:zr,merge:nn};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=Bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bh extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends Bh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Sr=-90,wr=1;class Hf extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(Sr,wr,t,e);i.layers=this.layers,this.add(i);const r=new An(Sr,wr,t,e);r.layers=this.layers,this.add(r);const a=new An(Sr,wr,t,e);a.layers=this.layers,this.add(a);const o=new An(Sr,wr,t,e);o.layers=this.layers,this.add(o);const l=new An(Sr,wr,t,e);l.layers=this.layers,this.add(l);const h=new An(Sr,wr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ko extends ln{constructor(t,e,n,i,r,a,o,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Fr,super(t,e,n,i,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gf extends tr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(as("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ji?Ge:Cn),this.texture=new Ko(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qr(5,5,5),r=new nr({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ti});r.uniforms.tEquirect.value=e;const a=new Rn(i,r),o=e.minFilter;return e.minFilter===hs&&(e.minFilter=bn),new Hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Ja=new rt,Wf=new rt,Xf=new he;class xi{constructor(t=new rt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ja.subVectors(n,e).cross(Wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xf.getNormalMatrix(t),i=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new jo,$s=new rt;class Zo{constructor(t=new xi,e=new xi,n=new xi,i=new xi,r=new xi,a=new xi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],h=i[4],c=i[5],u=i[6],d=i[7],f=i[8],v=i[9],g=i[10],m=i[11],p=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-h,m-f,y-p).normalize(),n[1].setComponents(l+r,d+h,m+f,y+p).normalize(),n[2].setComponents(l+a,d+c,m+v,y+_).normalize(),n[3].setComponents(l-a,d-c,m-v,y-_).normalize(),n[4].setComponents(l-o,d-u,m-g,y-x).normalize(),e===li)n[5].setComponents(l+o,d+u,m+g,y+x).normalize();else if(e===ca)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if($s.x=i.normal.x>0?t.max.x:t.min.x,$s.y=i.normal.y>0?t.max.y:t.min.y,$s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function qf(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,c){const u=h.array,d=h.usage,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,u,d),h.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version}}function r(h,c,u){const d=c.array,f=c.updateRange;s.bindBuffer(u,h),f.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);c&&(s.deleteBuffer(c.buffer),n.delete(h))}function l(h,c){if(h.isGLBufferAttribute){const d=n.get(h);(!d||d.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u===void 0?n.set(h,i(h,c)):u.version<h.version&&(r(u.buffer,h,c),u.version=h.version)}return{get:a,remove:o,update:l}}class Ea extends Ii{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),h=o+1,c=l+1,u=t/o,d=e/l,f=[],v=[],g=[],m=[];for(let p=0;p<c;p++){const _=p*d-a;for(let x=0;x<h;x++){const y=x*u-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const x=_+h*p,y=_+h*(p+1),E=_+1+h*(p+1),b=_+1+h*p;f.push(x,y,b),f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new $n(v,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Wp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,am=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:Yf,alphahash_pars_fragment:$f,alphamap_fragment:jf,alphamap_pars_fragment:Kf,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:Qf,aomap_pars_fragment:tp,begin_vertex:ep,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:rp,bumpmap_pars_fragment:sp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:vp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:yp,colorspace_fragment:Ep,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Tp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Bp,envmap_vertex:Ap,fog_vertex:Cp,fog_pars_vertex:Rp,fog_fragment:Pp,fog_pars_fragment:Lp,gradientmap_pars_fragment:Dp,lightmap_fragment:Ip,lightmap_pars_fragment:Np,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Fp,lights_pars_begin:Op,lights_toon_fragment:zp,lights_toon_pars_fragment:Vp,lights_phong_fragment:kp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:tm,map_particle_pars_fragment:em,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphcolor_vertex:rm,morphnormal_vertex:sm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:ym,project_vertex:Em,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Am,shadowmap_vertex:Cm,shadowmask_pars_fragment:Rm,skinbase_vertex:Pm,skinning_pars_vertex:Lm,skinning_vertex:Dm,skinnormal_vertex:Im,specularmap_fragment:Nm,specularmap_pars_fragment:Um,tonemapping_fragment:Fm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:Vm,uv_pars_vertex:km,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:$m,cube_frag:jm,depth_vert:Km,depth_frag:Zm,distanceRGBA_vert:Jm,distanceRGBA_frag:Qm,equirect_vert:tv,equirect_frag:ev,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:rv,meshbasic_frag:sv,meshlambert_vert:av,meshlambert_frag:ov,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:dv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:vv,meshtoon_frag:gv,points_vert:_v,points_frag:xv,shadow_vert:yv,shadow_frag:Ev,sprite_vert:Mv,sprite_frag:Sv},kt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Gn={basic:{uniforms:nn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:nn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ge(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:nn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:nn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:nn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ge(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:nn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:nn([kt.points,kt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:nn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:nn([kt.common,kt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:nn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:nn([kt.sprite,kt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:nn([kt.common,kt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:nn([kt.lights,kt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Gn.physical={uniforms:nn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const js={r:0,b:0,g:0};function wv(s,t,e,n,i,r,a){const o=new ge(0);let l=r===!0?0:1,h,c,u=null,d=0,f=null;function v(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),_=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===_a)?(c===void 0&&(c=new Rn(new qr(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:zr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=xe.getTransfer(x.colorSpace)!==Se,(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Rn(new Ea(2,2),new nr({name:"BackgroundMaterial",uniforms:zr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=xe.getTransfer(x.colorSpace)!==Se,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,p){m.getRGB(js,Oh(s)),n.buffers.color.setClear(js.r,js.g,js.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function Tv(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let h=l,c=!1;function u(N,k,J,F,B){let q=!1;if(a){const X=g(F,J,k);h!==X&&(h=X,f(h.object)),q=p(N,F,J,B),q&&_(N,F,J,B)}else{const X=k.wireframe===!0;(h.geometry!==F.id||h.program!==J.id||h.wireframe!==X)&&(h.geometry=F.id,h.program=J.id,h.wireframe=X,q=!0)}B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(q||c)&&(c=!1,R(N,k,J,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function g(N,k,J){const F=J.wireframe===!0;let B=o[N.id];B===void 0&&(B={},o[N.id]=B);let q=B[k.id];q===void 0&&(q={},B[k.id]=q);let X=q[F];return X===void 0&&(X=m(d()),q[F]=X),X}function m(N){const k=[],J=[],F=[];for(let B=0;B<i;B++)k[B]=0,J[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:F,object:N,attributes:{},index:null}}function p(N,k,J,F){const B=h.attributes,q=k.attributes;let X=0;const T=J.getAttributes();for(const O in T)if(T[O].location>=0){const D=B[O];let L=q[O];if(L===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(L=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(L=N.instanceColor)),D===void 0||D.attribute!==L||L&&D.data!==L.data)return!0;X++}return h.attributesNum!==X||h.index!==F}function _(N,k,J,F){const B={},q=k.attributes;let X=0;const T=J.getAttributes();for(const O in T)if(T[O].location>=0){let D=q[O];D===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(D=N.instanceColor));const L={};L.attribute=D,D&&D.data&&(L.data=D.data),B[O]=L,X++}h.attributes=B,h.attributesNum=X,h.index=F}function x(){const N=h.newAttributes;for(let k=0,J=N.length;k<J;k++)N[k]=0}function y(N){E(N,0)}function E(N,k){const J=h.newAttributes,F=h.enabledAttributes,B=h.attributeDivisors;J[N]=1,F[N]===0&&(s.enableVertexAttribArray(N),F[N]=1),B[N]!==k&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,k),B[N]=k)}function b(){const N=h.newAttributes,k=h.enabledAttributes;for(let J=0,F=k.length;J<F;J++)k[J]!==N[J]&&(s.disableVertexAttribArray(J),k[J]=0)}function A(N,k,J,F,B,q,X){X===!0?s.vertexAttribIPointer(N,k,J,B,q):s.vertexAttribPointer(N,k,J,F,B,q)}function R(N,k,J,F){if(n.isWebGL2===!1&&(N.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const B=F.attributes,q=J.getAttributes(),X=k.defaultAttributeValues;for(const T in q){const O=q[T];if(O.location>=0){let U=B[T];if(U===void 0&&(T==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),T==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),U!==void 0){const D=U.normalized,L=U.itemSize,j=e.get(U);if(j===void 0)continue;const at=j.buffer,et=j.type,K=j.bytesPerElement,ot=n.isWebGL2===!0&&(et===s.INT||et===s.UNSIGNED_INT||U.gpuType===xh);if(U.isInterleavedBufferAttribute){const ht=U.data,Y=ht.stride,Lt=U.offset;if(ht.isInstancedInterleavedBuffer){for(let ft=0;ft<O.locationSize;ft++)E(O.location+ft,ht.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ft=0;ft<O.locationSize;ft++)y(O.location+ft);s.bindBuffer(s.ARRAY_BUFFER,at);for(let ft=0;ft<O.locationSize;ft++)A(O.location+ft,L/O.locationSize,et,D,Y*K,(Lt+L/O.locationSize*ft)*K,ot)}else{if(U.isInstancedBufferAttribute){for(let ht=0;ht<O.locationSize;ht++)E(O.location+ht,U.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ht=0;ht<O.locationSize;ht++)y(O.location+ht);s.bindBuffer(s.ARRAY_BUFFER,at);for(let ht=0;ht<O.locationSize;ht++)A(O.location+ht,L/O.locationSize,et,D,L*K,L/O.locationSize*ht*K,ot)}}else if(X!==void 0){const D=X[T];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(O.location,D);break;case 3:s.vertexAttrib3fv(O.location,D);break;case 4:s.vertexAttrib4fv(O.location,D);break;default:s.vertexAttrib1fv(O.location,D)}}}}b()}function M(){z();for(const N in o){const k=o[N];for(const J in k){const F=k[J];for(const B in F)v(F[B].object),delete F[B];delete k[J]}delete o[N]}}function S(N){if(o[N.id]===void 0)return;const k=o[N.id];for(const J in k){const F=k[J];for(const B in F)v(F[B].object),delete F[B];delete k[J]}delete o[N.id]}function P(N){for(const k in o){const J=o[k];if(J[N.id]===void 0)continue;const F=J[N.id];for(const B in F)v(F[B].object),delete F[B];delete J[N.id]}}function z(){V(),c=!0,h!==l&&(h=l,f(h.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:y,disableUnusedAttributes:b}}function bv(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,c){s.drawArrays(r,h,c),e.update(c,r,1)}function l(h,c,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,h,c,u),e.update(c,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function Av(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const h=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=a||t.has("OES_texture_float"),E=x&&y,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:b}}function Cv(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new xi,o=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||v===null||v.length===0||r&&!m)r?c(null):h();else{const _=r?0:n,x=_*4;let y=p.clippingState||null;l.value=y,y=c(v,d,x,f);for(let E=0;E!==x;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=f+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==g;++x,y+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Rv(s){let t=new WeakMap;function e(a,o){return o===Eo?a.mapping=Fr:o===Mo&&(a.mapping=Or),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Eo||o===Mo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Gf(l.height/2);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Vh extends Bh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Cr=4,yc=[.125,.215,.35,.446,.526,.582],Xi=20,Qa=new Vh,Ec=new ge;let to=null,eo=0,no=0;const Hi=(1+Math.sqrt(5))/2,Tr=1/Hi,Mc=[new rt(1,1,1),new rt(-1,1,1),new rt(1,1,-1),new rt(-1,1,-1),new rt(0,Hi,Tr),new rt(0,Hi,-Tr),new rt(Tr,0,Hi),new rt(-Tr,0,Hi),new rt(Hi,Tr,0),new rt(-Hi,Tr,0)];class Sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(to,eo,no),t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),to=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:us,format:Vn,colorSpace:ci,depthBuffer:!1},i=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(r)),this._blurMaterial=Lv(r,t,e)}return i}_compileMaterial(t){const e=new Rn(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,i){const o=new An(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Ec),c.toneMapping=bi,c.autoClear=!1;const f=new Nh({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new Rn(new qr,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Ec),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));const x=this._cubeSize;Ks(i,_*x,p>2?x:0,x,x),c.setRenderTarget(i),g&&c.render(v,o),c.render(t,o)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fr||t.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Rn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Mc[(i-1)%Mc.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Rn(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),g=r/v,m=isFinite(r)?1+Math.floor(c*g):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const p=[];let _=0;for(let A=0;A<Xi;++A){const R=A/g,M=Math.exp(-R*R/2);p.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const y=this._sizeLods[i],E=3*y*(i>x-Cr?i-x+Cr:0),b=4*(this._cubeSize-y);Ks(e,E,b,3*y,2*y),l.setRenderTarget(e),l.render(u,Qa)}}function Pv(s){const t=[],e=[],n=[];let i=s;const r=s-Cr+1+yc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Cr?l=yc[a-s+Cr-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*f),x=new Float32Array(m*v*f),y=new Float32Array(p*v*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,R=b>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];_.set(M,g*v*b),x.set(d,m*v*b);const S=[b,b,b,b,b,b];y.set(S,p*v*b)}const E=new Ii;E.setAttribute("position",new Yn(_,g)),E.setAttribute("uv",new Yn(x,m)),E.setAttribute("faceIndex",new Yn(y,p)),t.push(E),i>Cr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(s,t,e){const n=new tr(s,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Lv(s,t,e){const n=new Float32Array(Xi),i=new rt(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Tc(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bc(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dv(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Eo||l===Mo,c=l===Fr||l===Or;if(h||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Sc(s)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(h&&u&&u.height>0||c&&u&&i(u)){e===null&&(e=new Sc(s));const d=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Iv(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nv(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)t.update(d[v],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function h(u){const d=[],f=u.index,v=u.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let x=0,y=_.length;x<y;x+=3){const E=_[x+0],b=_[x+1],A=_[x+2];d.push(E,b,b,A,A,E)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const E=x+0,b=x+1,A=x+2;d.push(E,b,b,A,A,E)}}else return;const m=new(Ah(d)?Fh:Uh)(d,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Uv(s,t,e,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function h(d){o=d.type,l=d.bytesPerElement}function c(d,f){s.drawElements(r,f,o,d*l),e.update(f,r,1)}function u(d,f,v){if(v===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,f,o,d*l,v),e.update(f,r,v)}this.setMode=a,this.setIndex=h,this.render=c,this.renderInstances=u}function Fv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ov(s,t){return s[0]-t[0]}function Bv(s,t){return Math.abs(t[1])-Math.abs(s[1])}function zv(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Xe,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,c,u){const d=h.morphTargetInfluences;if(t.isWebGL2===!0){const f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=f!==void 0?f.length:0;let g=r.get(c);if(g===void 0||g.count!==v){let N=function(){z.dispose(),r.delete(c),c.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const _=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let R=0;_===!0&&(R=1),x===!0&&(R=2),y===!0&&(R=3);let M=c.attributes.position.count*R,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const P=new Float32Array(M*S*4*v),z=new Ph(P,M,S,v);z.type=Ei,z.needsUpdate=!0;const V=R*4;for(let k=0;k<v;k++){const J=E[k],F=b[k],B=A[k],q=M*S*4*k;for(let X=0;X<J.count;X++){const T=X*V;_===!0&&(a.fromBufferAttribute(J,X),P[q+T+0]=a.x,P[q+T+1]=a.y,P[q+T+2]=a.z,P[q+T+3]=0),x===!0&&(a.fromBufferAttribute(F,X),P[q+T+4]=a.x,P[q+T+5]=a.y,P[q+T+6]=a.z,P[q+T+7]=0),y===!0&&(a.fromBufferAttribute(B,X),P[q+T+8]=a.x,P[q+T+9]=a.y,P[q+T+10]=a.z,P[q+T+11]=B.itemSize===4?a.w:1)}}g={count:v,texture:z,size:new oe(M,S)},r.set(c,g),c.addEventListener("dispose",N)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const p=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const f=d===void 0?0:d.length;let v=n[c.id];if(v===void 0||v.length!==f){v=[];for(let x=0;x<f;x++)v[x]=[x,0];n[c.id]=v}for(let x=0;x<f;x++){const y=v[x];y[0]=x,y[1]=d[x]}v.sort(Bv);for(let x=0;x<8;x++)x<f&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Ov);const g=c.morphAttributes.position,m=c.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const y=o[x],E=y[0],b=y[1];E!==Number.MAX_SAFE_INTEGER&&b?(g&&c.getAttribute("morphTarget"+x)!==g[E]&&c.setAttribute("morphTarget"+x,g[E]),m&&c.getAttribute("morphNormal"+x)!==m[E]&&c.setAttribute("morphNormal"+x,m[E]),i[x]=b,p+=b):(g&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),m&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const _=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Vv(s,t,e,n){let i=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return u}function a(){i=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const kh=new ln,Hh=new Ph,Gh=new bf,Wh=new Ko,Ac=[],Cc=[],Rc=new Float32Array(16),Pc=new Float32Array(9),Lc=new Float32Array(4);function Yr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ac[i];if(r===void 0&&(r=new Float32Array(i),Ac[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ma(s,t){let e=Cc[t];e===void 0&&(e=new Int32Array(t),Cc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function kv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2fv(this.addr,t),Ve(e,t)}}function Gv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;s.uniform3fv(this.addr,t),Ve(e,t)}}function Wv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4fv(this.addr,t),Ve(e,t)}}function Xv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;Lc.set(n),s.uniformMatrix2fv(this.addr,!1,Lc),Ve(e,n)}}function qv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;Pc.set(n),s.uniformMatrix3fv(this.addr,!1,Pc),Ve(e,n)}}function Yv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;Rc.set(n),s.uniformMatrix4fv(this.addr,!1,Rc),Ve(e,n)}}function $v(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function jv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2iv(this.addr,t),Ve(e,t)}}function Kv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3iv(this.addr,t),Ve(e,t)}}function Zv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4iv(this.addr,t),Ve(e,t)}}function Jv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Qv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2uiv(this.addr,t),Ve(e,t)}}function tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3uiv(this.addr,t),Ve(e,t)}}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4uiv(this.addr,t),Ve(e,t)}}function ng(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||kh,i)}function ig(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gh,i)}function rg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wh,i)}function sg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hh,i)}function ag(s){switch(s){case 5126:return kv;case 35664:return Hv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return $v;case 35667:case 35671:return jv;case 35668:case 35672:return Kv;case 35669:case 35673:return Zv;case 5125:return Jv;case 36294:return Qv;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return sg}}function og(s,t){s.uniform1fv(this.addr,t)}function lg(s,t){const e=Yr(t,this.size,2);s.uniform2fv(this.addr,e)}function cg(s,t){const e=Yr(t,this.size,3);s.uniform3fv(this.addr,e)}function hg(s,t){const e=Yr(t,this.size,4);s.uniform4fv(this.addr,e)}function ug(s,t){const e=Yr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function dg(s,t){const e=Yr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fg(s,t){const e=Yr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function pg(s,t){s.uniform1iv(this.addr,t)}function mg(s,t){s.uniform2iv(this.addr,t)}function vg(s,t){s.uniform3iv(this.addr,t)}function gg(s,t){s.uniform4iv(this.addr,t)}function _g(s,t){s.uniform1uiv(this.addr,t)}function xg(s,t){s.uniform2uiv(this.addr,t)}function yg(s,t){s.uniform3uiv(this.addr,t)}function Eg(s,t){s.uniform4uiv(this.addr,t)}function Mg(s,t,e){const n=this.cache,i=t.length,r=Ma(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||kh,r[a])}function Sg(s,t,e){const n=this.cache,i=t.length,r=Ma(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Gh,r[a])}function wg(s,t,e){const n=this.cache,i=t.length,r=Ma(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wh,r[a])}function Tg(s,t,e){const n=this.cache,i=t.length,r=Ma(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Hh,r[a])}function bg(s){switch(s){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return vg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return yg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=ag(e.type)}}class Cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=bg(e.type)}}class Rg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Dc(s,t){s.seq.push(t),s.map[t.id]=t}function Pg(s,t,e){const n=s.name,i=n.length;for(io.lastIndex=0;;){const r=io.exec(n),a=io.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===i){Dc(e,h===void 0?new Ag(o,s,t):new Cg(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Rg(o),Dc(e,u)),e=u}}}class ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Pg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ic(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Lg=37297;let Dg=0;function Ig(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ng(s){const t=xe.getPrimaries(xe.workingColorSpace),e=xe.getPrimaries(s);let n;switch(t===e?n="":t===la&&e===oa?n="LinearDisplayP3ToLinearSRGB":t===oa&&e===la&&(n="LinearSRGBToLinearDisplayP3"),s){case ci:case xa:return[n,"LinearTransferOETF"];case Ge:case Yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Nc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ig(s.getShaderSource(t),a)}else return i}function Ug(s,t){const e=Ng(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Fg(s,t){let e;switch(t){case Id:e="Linear";break;case Nd:e="Reinhard";break;case Ud:e="OptimizedCineon";break;case Fd:e="ACESFilmic";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Og(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function Bg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function es(s){return s!==""}function Uc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(s){return s.replace(Vg,Hg)}const kg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hg(s,t){let e=le[t];if(e===void 0){const n=kg.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ao(e)}const Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(s){return s.replace(Gg,Wg)}function Wg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function qg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fr:case Or:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Or:t="ENVMAP_MODE_REFRACTION";break}return t}function $g(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ld:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function jg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kg(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Xg(e),h=qg(e),c=Yg(e),u=$g(e),d=jg(e),f=e.isWebGL2?"":Og(e),v=Bg(r),g=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(es).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(es).join(`
`),p.length>0&&(p+=`
`)):(m=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[f,Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?le.tonemapping_pars_fragment:"",e.toneMapping!==bi?Fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),a=Ao(a),a=Uc(a,e),a=Fc(a,e),o=Ao(o),o=Uc(o,e),o=Fc(o,e),a=Oc(a),o=Oc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+m+a,y=_+p+o,E=Ic(i,i.VERTEX_SHADER,x),b=Ic(i,i.FRAGMENT_SHADER,y);i.attachShader(g,E),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(g).trim(),V=i.getShaderInfoLog(E).trim(),N=i.getShaderInfoLog(b).trim();let k=!0,J=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,b);else{const F=Nc(i,E,"vertex"),B=Nc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+F+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||N==="")&&(J=!1);J&&(P.diagnostics={runnable:k,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(E),i.deleteShader(b),R=new ea(i,g),M=zg(i,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,Lg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=b,this}let Zg=0;class Jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qg(t),e.set(t,n)),n}}class Qg{constructor(t){this.id=Zg++,this.code=t,this.usedTimes=0}}function t_(s,t,e,n,i,r,a){const o=new Dh,l=new Jg,h=[],c=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,S,P,z,V){const N=z.fog,k=V.geometry,J=M.isMeshStandardMaterial?z.environment:null,F=(M.isMeshStandardMaterial?e:t).get(M.envMap||J),B=F&&F.mapping===_a?F.image.height:null,q=v[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const X=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,T=X!==void 0?X.length:0;let O=0;k.morphAttributes.position!==void 0&&(O=1),k.morphAttributes.normal!==void 0&&(O=2),k.morphAttributes.color!==void 0&&(O=3);let U,D,L,j;if(q){const ce=Gn[q];U=ce.vertexShader,D=ce.fragmentShader}else U=M.vertexShader,D=M.fragmentShader,l.update(M),L=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);const at=s.getRenderTarget(),et=V.isInstancedMesh===!0,K=!!M.map,ot=!!M.matcap,ht=!!F,Y=!!M.aoMap,Lt=!!M.lightMap,ft=!!M.bumpMap,nt=!!M.normalMap,ct=!!M.displacementMap,Jt=!!M.emissiveMap,bt=!!M.metalnessMap,Gt=!!M.roughnessMap,Et=M.anisotropy>0,ne=M.clearcoat>0,re=M.iridescence>0,I=M.sheen>0,C=M.transmission>0,Q=Et&&!!M.anisotropyMap,vt=ne&&!!M.clearcoatMap,dt=ne&&!!M.clearcoatNormalMap,xt=ne&&!!M.clearcoatRoughnessMap,Ht=re&&!!M.iridescenceMap,Tt=re&&!!M.iridescenceThicknessMap,Nt=I&&!!M.sheenColorMap,G=I&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,pt=!!M.specularColorMap,Qt=!!M.specularIntensityMap,qt=C&&!!M.transmissionMap,Yt=C&&!!M.thicknessMap,Wt=!!M.gradientMap,Ut=!!M.alphaMap,se=M.alphaTest>0,$=!!M.alphaHash,St=!!M.extensions,yt=!!k.attributes.uv1,ut=!!k.attributes.uv2,wt=!!k.attributes.uv3;let jt=bi;return M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(jt=s.toneMapping),{isWebGL2:c,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:U,fragmentShader:D,defines:M.defines,customVertexShaderID:L,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:et,instancingColor:et&&V.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ci,map:K,matcap:ot,envMap:ht,envMapMode:ht&&F.mapping,envMapCubeUVHeight:B,aoMap:Y,lightMap:Lt,bumpMap:ft,normalMap:nt,displacementMap:d&&ct,emissiveMap:Jt,normalMapObjectSpace:nt&&M.normalMapType===Kd,normalMapTangentSpace:nt&&M.normalMapType===bh,metalnessMap:bt,roughnessMap:Gt,anisotropy:Et,anisotropyMap:Q,clearcoat:ne,clearcoatMap:vt,clearcoatNormalMap:dt,clearcoatRoughnessMap:xt,iridescence:re,iridescenceMap:Ht,iridescenceThicknessMap:Tt,sheen:I,sheenColorMap:Nt,sheenRoughnessMap:G,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Qt,transmission:C,transmissionMap:qt,thicknessMap:Yt,gradientMap:Wt,opaque:M.transparent===!1&&M.blending===Lr,alphaMap:Ut,alphaTest:se,alphaHash:$,combine:M.combine,mapUv:K&&g(M.map.channel),aoMapUv:Y&&g(M.aoMap.channel),lightMapUv:Lt&&g(M.lightMap.channel),bumpMapUv:ft&&g(M.bumpMap.channel),normalMapUv:nt&&g(M.normalMap.channel),displacementMapUv:ct&&g(M.displacementMap.channel),emissiveMapUv:Jt&&g(M.emissiveMap.channel),metalnessMapUv:bt&&g(M.metalnessMap.channel),roughnessMapUv:Gt&&g(M.roughnessMap.channel),anisotropyMapUv:Q&&g(M.anisotropyMap.channel),clearcoatMapUv:vt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:G&&g(M.sheenRoughnessMap.channel),specularMapUv:Mt&&g(M.specularMap.channel),specularColorMapUv:pt&&g(M.specularColorMap.channel),specularIntensityMapUv:Qt&&g(M.specularIntensityMap.channel),transmissionMapUv:qt&&g(M.transmissionMap.channel),thicknessMapUv:Yt&&g(M.thicknessMap.channel),alphaMapUv:Ut&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(nt||Et),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:yt,vertexUv2s:ut,vertexUv3s:wt,pointsUvs:V.isPoints===!0&&!!k.attributes.uv&&(K||Ut),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:O,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:K&&M.map.isVideoTexture===!0&&xe.getTransfer(M.map.colorSpace)===Se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:St&&M.extensions.derivatives===!0,extensionFragDepth:St&&M.extensions.fragDepth===!0,extensionDrawBuffers:St&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(_(S,M),x(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const S=v[M.type];let P;if(S){const z=Gn[S];P=zf.clone(z.uniforms)}else P=M.uniforms;return P}function E(M,S){let P;for(let z=0,V=h.length;z<V;z++){const N=h[z];if(N.cacheKey===S){P=N,++P.usedTimes;break}}return P===void 0&&(P=new Kg(s,S,M,r),h.push(P)),P}function b(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:R}}function e_(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function n_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,v,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,v,g,m){const p=a(u,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,v,g,m){const p=a(u,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||n_),n.length>1&&n.sort(d||zc),i.length>1&&i.sort(d||zc)}function c(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:c,sort:h}}function i_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Vc,s.set(n,[a])):i>=r.length?(a=new Vc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function r_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new rt,color:new ge};break;case"SpotLight":e={position:new rt,direction:new rt,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new rt,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new rt,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[t.id]=e,e}}}function s_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let a_=0;function o_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function l_(s,t){const e=new r_,n=s_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new rt);const r=new rt,a=new Be,o=new Be;function l(c,u){let d=0,f=0,v=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,m=0,p=0,_=0,x=0,y=0,E=0,b=0,A=0,R=0,M=0;c.sort(o_);const S=u===!0?Math.PI:1;for(let z=0,V=c.length;z<V;z++){const N=c[z],k=N.color,J=N.intensity,F=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=k.r*J*S,f+=k.g*J*S,v+=k.b*J*S;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],J);M++}else if(N.isDirectionalLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const X=N.shadow,T=n.get(N);T.shadowBias=X.bias,T.shadowNormalBias=X.normalBias,T.shadowRadius=X.radius,T.shadowMapSize=X.mapSize,i.directionalShadow[g]=T,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=N.shadow.matrix,y++}i.directional[g]=q,g++}else if(N.isSpotLight){const q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(k).multiplyScalar(J*S),q.distance=F,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[p]=q;const X=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,X.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[p]=X.matrix,N.castShadow){const T=n.get(N);T.shadowBias=X.bias,T.shadowNormalBias=X.normalBias,T.shadowRadius=X.radius,T.shadowMapSize=X.mapSize,i.spotShadow[p]=T,i.spotShadowMap[p]=B,b++}p++}else if(N.isRectAreaLight){const q=e.get(N);q.color.copy(k).multiplyScalar(J),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=q,_++}else if(N.isPointLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*S),q.distance=N.distance,q.decay=N.decay,N.castShadow){const X=N.shadow,T=n.get(N);T.shadowBias=X.bias,T.shadowNormalBias=X.normalBias,T.shadowRadius=X.radius,T.shadowMapSize=X.mapSize,T.shadowCameraNear=X.camera.near,T.shadowCameraFar=X.camera.far,i.pointShadow[m]=T,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=N.shadow.matrix,E++}i.point[m]=q,m++}else if(N.isHemisphereLight){const q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(J*S),q.groundColor.copy(N.groundColor).multiplyScalar(J*S),i.hemi[x]=q,x++}}_>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=v;const P=i.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==_||P.hemiLength!==x||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==b||P.numSpotMaps!==A||P.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=M,P.directionalLength=g,P.pointLength=m,P.spotLength=p,P.rectAreaLength=_,P.hemiLength=x,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=b,P.numSpotMaps=A,P.numLightProbes=M,i.version=a_++)}function h(c,u){let d=0,f=0,v=0,g=0,m=0;const p=u.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){const y=c[_];if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(y.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),v++}else if(y.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:i}}function kc(s,t){const e=new l_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function h(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function c_(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new kc(s,t),e.set(r,[l])):a>=o.length?(l=new kc(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class h_ extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class u_ extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p_(s,t,e){let n=new Zo;const i=new oe,r=new oe,a=new Xe,o=new h_({depthPacking:jd}),l=new u_,h={},c=e.maxTextureSize,u={[Pi]:on,[on]:Pi,[oi]:oi},d=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:d_,fragmentShader:f_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Ii;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Rn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let p=this.type;this.render=function(E,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const R=s.getRenderTarget(),M=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Ti),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const z=p!==ri&&this.type===ri,V=p===ri&&this.type!==ri;for(let N=0,k=E.length;N<k;N++){const J=E[N],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const B=F.getFrameExtents();if(i.multiply(B),r.copy(F.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/B.x),i.x=r.x*B.x,F.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/B.y),i.y=r.y*B.y,F.mapSize.y=r.y)),F.map===null||z===!0||V===!0){const X=this.type!==ri?{minFilter:rn,magFilter:rn}:{};F.map!==null&&F.map.dispose(),F.map=new tr(i.x,i.y,X),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const q=F.getViewportCount();for(let X=0;X<q;X++){const T=F.getViewport(X);a.set(r.x*T.x,r.y*T.y,r.x*T.z,r.y*T.w),P.viewport(a),F.updateMatrices(J,X),n=F.getFrustum(),y(b,A,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===ri&&_(F,A),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(R,M,S)};function _(E,b){const A=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new tr(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(b,null,A,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(b,null,A,f,g,null)}function x(E,b,A,R){let M=null;const S=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)M=S;else if(M=A.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const P=M.uuid,z=b.uuid;let V=h[P];V===void 0&&(V={},h[P]=V);let N=V[z];N===void 0&&(N=M.clone(),V[z]=N),M=N}if(M.visible=b.visible,M.wireframe=b.wireframe,R===ri?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=s.properties.get(M);P.light=A}return M}function y(E,b,A,R,M){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ri)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const z=t.update(E),V=E.material;if(Array.isArray(V)){const N=z.groups;for(let k=0,J=N.length;k<J;k++){const F=N[k],B=V[F.materialIndex];if(B&&B.visible){const q=x(E,B,R,M);s.renderBufferDirect(A,null,z,q,E,F)}}}else if(V.visible){const N=x(E,V,R,M);s.renderBufferDirect(A,null,z,N,E,null)}}const P=E.children;for(let z=0,V=P.length;z<V;z++)y(P[z],b,A,R,M)}}function m_(s,t,e){const n=e.isWebGL2;function i(){let $=!1;const St=new Xe;let yt=null;const ut=new Xe(0,0,0,0);return{setMask:function(wt){yt!==wt&&!$&&(s.colorMask(wt,wt,wt,wt),yt=wt)},setLocked:function(wt){$=wt},setClear:function(wt,jt,ae,ce,lt){lt===!0&&(wt*=ce,jt*=ce,ae*=ce),St.set(wt,jt,ae,ce),ut.equals(St)===!1&&(s.clearColor(wt,jt,ae,ce),ut.copy(St))},reset:function(){$=!1,yt=null,ut.set(-1,0,0,0)}}}function r(){let $=!1,St=null,yt=null,ut=null;return{setTest:function(wt){wt?K(s.DEPTH_TEST):ot(s.DEPTH_TEST)},setMask:function(wt){St!==wt&&!$&&(s.depthMask(wt),St=wt)},setFunc:function(wt){if(yt!==wt){switch(wt){case wd:s.depthFunc(s.NEVER);break;case Td:s.depthFunc(s.ALWAYS);break;case bd:s.depthFunc(s.LESS);break;case sa:s.depthFunc(s.LEQUAL);break;case Ad:s.depthFunc(s.EQUAL);break;case Cd:s.depthFunc(s.GEQUAL);break;case Rd:s.depthFunc(s.GREATER);break;case Pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=wt}},setLocked:function(wt){$=wt},setClear:function(wt){ut!==wt&&(s.clearDepth(wt),ut=wt)},reset:function(){$=!1,St=null,yt=null,ut=null}}}function a(){let $=!1,St=null,yt=null,ut=null,wt=null,jt=null,ae=null,ce=null,lt=null;return{setTest:function(st){$||(st?K(s.STENCIL_TEST):ot(s.STENCIL_TEST))},setMask:function(st){St!==st&&!$&&(s.stencilMask(st),St=st)},setFunc:function(st,mt,gt){(yt!==st||ut!==mt||wt!==gt)&&(s.stencilFunc(st,mt,gt),yt=st,ut=mt,wt=gt)},setOp:function(st,mt,gt){(jt!==st||ae!==mt||ce!==gt)&&(s.stencilOp(st,mt,gt),jt=st,ae=mt,ce=gt)},setLocked:function(st){$=st},setClear:function(st){lt!==st&&(s.clearStencil(st),lt=st)},reset:function(){$=!1,St=null,yt=null,ut=null,wt=null,jt=null,ae=null,ce=null,lt=null}}}const o=new i,l=new r,h=new a,c=new WeakMap,u=new WeakMap;let d={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,x=null,y=null,E=null,b=null,A=null,R=null,M=new ge(0,0,0),S=0,P=!1,z=null,V=null,N=null,k=null,J=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=q>=2);let T=null,O={};const U=s.getParameter(s.SCISSOR_BOX),D=s.getParameter(s.VIEWPORT),L=new Xe().fromArray(U),j=new Xe().fromArray(D);function at($,St,yt,ut){const wt=new Uint8Array(4),jt=s.createTexture();s.bindTexture($,jt),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<yt;ae++)n&&($===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY)?s.texImage3D(St,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(St+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return jt}const et={};et[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),K(s.DEPTH_TEST),l.setFunc(sa),bt(!1),Gt(Ml),K(s.CULL_FACE),ct(Ti);function K($){d[$]!==!0&&(s.enable($),d[$]=!0)}function ot($){d[$]!==!1&&(s.disable($),d[$]=!1)}function ht($,St){return f[$]!==St?(s.bindFramebuffer($,St),f[$]=St,n&&($===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=St),$===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=St)),!0):!1}function Y($,St){let yt=g,ut=!1;if($)if(yt=v.get(St),yt===void 0&&(yt=[],v.set(St,yt)),$.isWebGLMultipleRenderTargets){const wt=$.texture;if(yt.length!==wt.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,ae=wt.length;jt<ae;jt++)yt[jt]=s.COLOR_ATTACHMENT0+jt;yt.length=wt.length,ut=!0}}else yt[0]!==s.COLOR_ATTACHMENT0&&(yt[0]=s.COLOR_ATTACHMENT0,ut=!0);else yt[0]!==s.BACK&&(yt[0]=s.BACK,ut=!0);ut&&(e.isWebGL2?s.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function Lt($){return m!==$?(s.useProgram($),m=$,!0):!1}const ft={[Wi]:s.FUNC_ADD,[cd]:s.FUNC_SUBTRACT,[hd]:s.FUNC_REVERSE_SUBTRACT};if(n)ft[bl]=s.MIN,ft[Al]=s.MAX;else{const $=t.get("EXT_blend_minmax");$!==null&&(ft[bl]=$.MIN_EXT,ft[Al]=$.MAX_EXT)}const nt={[ud]:s.ZERO,[dd]:s.ONE,[fd]:s.SRC_COLOR,[xo]:s.SRC_ALPHA,[xd]:s.SRC_ALPHA_SATURATE,[gd]:s.DST_COLOR,[md]:s.DST_ALPHA,[pd]:s.ONE_MINUS_SRC_COLOR,[yo]:s.ONE_MINUS_SRC_ALPHA,[_d]:s.ONE_MINUS_DST_COLOR,[vd]:s.ONE_MINUS_DST_ALPHA,[yd]:s.CONSTANT_COLOR,[Ed]:s.ONE_MINUS_CONSTANT_COLOR,[Md]:s.CONSTANT_ALPHA,[Sd]:s.ONE_MINUS_CONSTANT_ALPHA};function ct($,St,yt,ut,wt,jt,ae,ce,lt,st){if($===Ti){p===!0&&(ot(s.BLEND),p=!1);return}if(p===!1&&(K(s.BLEND),p=!0),$!==ld){if($!==_||st!==P){if((x!==Wi||b!==Wi)&&(s.blendEquation(s.FUNC_ADD),x=Wi,b=Wi),st)switch($){case Lr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sl:s.blendFunc(s.ONE,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}y=null,E=null,A=null,R=null,M.set(0,0,0),S=0,_=$,P=st}return}wt=wt||St,jt=jt||yt,ae=ae||ut,(St!==x||wt!==b)&&(s.blendEquationSeparate(ft[St],ft[wt]),x=St,b=wt),(yt!==y||ut!==E||jt!==A||ae!==R)&&(s.blendFuncSeparate(nt[yt],nt[ut],nt[jt],nt[ae]),y=yt,E=ut,A=jt,R=ae),(ce.equals(M)===!1||lt!==S)&&(s.blendColor(ce.r,ce.g,ce.b,lt),M.copy(ce),S=lt),_=$,P=!1}function Jt($,St){$.side===oi?ot(s.CULL_FACE):K(s.CULL_FACE);let yt=$.side===on;St&&(yt=!yt),bt(yt),$.blending===Lr&&$.transparent===!1?ct(Ti):ct($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),l.setFunc($.depthFunc),l.setTest($.depthTest),l.setMask($.depthWrite),o.setMask($.colorWrite);const ut=$.stencilWrite;h.setTest(ut),ut&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ne($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function bt($){z!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),z=$)}function Gt($){$!==ad?(K(s.CULL_FACE),$!==V&&($===Ml?s.cullFace(s.BACK):$===od?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ot(s.CULL_FACE),V=$}function Et($){$!==N&&(B&&s.lineWidth($),N=$)}function ne($,St,yt){$?(K(s.POLYGON_OFFSET_FILL),(k!==St||J!==yt)&&(s.polygonOffset(St,yt),k=St,J=yt)):ot(s.POLYGON_OFFSET_FILL)}function re($){$?K(s.SCISSOR_TEST):ot(s.SCISSOR_TEST)}function I($){$===void 0&&($=s.TEXTURE0+F-1),T!==$&&(s.activeTexture($),T=$)}function C($,St,yt){yt===void 0&&(T===null?yt=s.TEXTURE0+F-1:yt=T);let ut=O[yt];ut===void 0&&(ut={type:void 0,texture:void 0},O[yt]=ut),(ut.type!==$||ut.texture!==St)&&(T!==yt&&(s.activeTexture(yt),T=yt),s.bindTexture($,St||et[$]),ut.type=$,ut.texture=St)}function Q(){const $=O[T];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ht(){try{s.texSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Nt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function G(){try{s.texStorage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Mt(){try{s.texStorage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Qt(){try{s.texImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function qt($){L.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),L.copy($))}function Yt($){j.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),j.copy($))}function Wt($,St){let yt=u.get(St);yt===void 0&&(yt=new WeakMap,u.set(St,yt));let ut=yt.get($);ut===void 0&&(ut=s.getUniformBlockIndex(St,$.name),yt.set($,ut))}function Ut($,St){const ut=u.get(St).get($);c.get(St)!==ut&&(s.uniformBlockBinding(St,ut,$.__bindingPointIndex),c.set(St,ut))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},T=null,O={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,x=null,y=null,E=null,b=null,A=null,R=null,M=new ge(0,0,0),S=0,P=!1,z=null,V=null,N=null,k=null,J=null,L.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:K,disable:ot,bindFramebuffer:ht,drawBuffers:Y,useProgram:Lt,setBlending:ct,setMaterial:Jt,setFlipSided:bt,setCullFace:Gt,setLineWidth:Et,setPolygonOffset:ne,setScissorTest:re,activeTexture:I,bindTexture:C,unbindTexture:Q,compressedTexImage2D:vt,compressedTexImage3D:dt,texImage2D:pt,texImage3D:Qt,updateUBOMapping:Wt,uniformBlockBinding:Ut,texStorage2D:G,texStorage3D:Mt,texSubImage2D:xt,texSubImage3D:Ht,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Nt,scissor:qt,viewport:Yt,reset:se}}function v_(s,t,e,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,c=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,C){return p?new OffscreenCanvas(I,C):fs("canvas")}function x(I,C,Q,vt){let dt=1;if((I.width>vt||I.height>vt)&&(dt=vt/Math.max(I.width,I.height)),dt<1||C===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const xt=C?ha:Math.floor,Ht=xt(dt*I.width),Tt=xt(dt*I.height);g===void 0&&(g=_(Ht,Tt));const Nt=Q?_(Ht,Tt):g;return Nt.width=Ht,Nt.height=Tt,Nt.getContext("2d").drawImage(I,0,0,Ht,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Ht+"x"+Tt+")."),Nt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function y(I){return bo(I.width)&&bo(I.height)}function E(I){return o?!1:I.wrapS!==zn||I.wrapT!==zn||I.minFilter!==rn&&I.minFilter!==bn}function b(I,C){return I.generateMipmaps&&C&&I.minFilter!==rn&&I.minFilter!==bn}function A(I){s.generateMipmap(I)}function R(I,C,Q,vt,dt=!1){if(o===!1)return C;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xt=C;if(C===s.RED&&(Q===s.FLOAT&&(xt=s.R32F),Q===s.HALF_FLOAT&&(xt=s.R16F),Q===s.UNSIGNED_BYTE&&(xt=s.R8)),C===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(xt=s.R8UI),Q===s.UNSIGNED_SHORT&&(xt=s.R16UI),Q===s.UNSIGNED_INT&&(xt=s.R32UI),Q===s.BYTE&&(xt=s.R8I),Q===s.SHORT&&(xt=s.R16I),Q===s.INT&&(xt=s.R32I)),C===s.RG&&(Q===s.FLOAT&&(xt=s.RG32F),Q===s.HALF_FLOAT&&(xt=s.RG16F),Q===s.UNSIGNED_BYTE&&(xt=s.RG8)),C===s.RGBA){const Ht=dt?aa:xe.getTransfer(vt);Q===s.FLOAT&&(xt=s.RGBA32F),Q===s.HALF_FLOAT&&(xt=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(xt=Ht===Se?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(xt=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(xt=s.RGB5_A1)}return(xt===s.R16F||xt===s.R32F||xt===s.RG16F||xt===s.RG32F||xt===s.RGBA16F||xt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function M(I,C,Q){return b(I,Q)===!0||I.isFramebufferTexture&&I.minFilter!==rn&&I.minFilter!==bn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function S(I){return I===rn||I===Cl||I===Pa?s.NEAREST:s.LINEAR}function P(I){const C=I.target;C.removeEventListener("dispose",P),V(C),C.isVideoTexture&&v.delete(C)}function z(I){const C=I.target;C.removeEventListener("dispose",z),k(C)}function V(I){const C=n.get(I);if(C.__webglInit===void 0)return;const Q=I.source,vt=m.get(Q);if(vt){const dt=vt[C.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&N(I),Object.keys(vt).length===0&&m.delete(Q)}n.remove(I)}function N(I){const C=n.get(I);s.deleteTexture(C.__webglTexture);const Q=I.source,vt=m.get(Q);delete vt[C.__cacheKey],a.memory.textures--}function k(I){const C=I.texture,Q=n.get(I),vt=n.get(C);if(vt.__webglTexture!==void 0&&(s.deleteTexture(vt.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(Q.__webglFramebuffer[dt]))for(let xt=0;xt<Q.__webglFramebuffer[dt].length;xt++)s.deleteFramebuffer(Q.__webglFramebuffer[dt][xt]);else s.deleteFramebuffer(Q.__webglFramebuffer[dt]);Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer[dt])}else{if(Array.isArray(Q.__webglFramebuffer))for(let dt=0;dt<Q.__webglFramebuffer.length;dt++)s.deleteFramebuffer(Q.__webglFramebuffer[dt]);else s.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let dt=0;dt<Q.__webglColorRenderbuffer.length;dt++)Q.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(Q.__webglColorRenderbuffer[dt]);Q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let dt=0,xt=C.length;dt<xt;dt++){const Ht=n.get(C[dt]);Ht.__webglTexture&&(s.deleteTexture(Ht.__webglTexture),a.memory.textures--),n.remove(C[dt])}n.remove(C),n.remove(I)}let J=0;function F(){J=0}function B(){const I=J;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),J+=1,I}function q(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function X(I,C){const Q=n.get(I);if(I.isVideoTexture&&ne(I),I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){const vt=I.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,I,C);return}}e.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+C)}function T(I,C){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){K(Q,I,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+C)}function O(I,C){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){K(Q,I,C);return}e.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+C)}function U(I,C){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){ot(Q,I,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+C)}const D={[So]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[wo]:s.MIRRORED_REPEAT},L={[rn]:s.NEAREST,[Cl]:s.NEAREST_MIPMAP_NEAREST,[Pa]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[Bd]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},j={[Zd]:s.NEVER,[sf]:s.ALWAYS,[Jd]:s.LESS,[tf]:s.LEQUAL,[Qd]:s.EQUAL,[rf]:s.GEQUAL,[ef]:s.GREATER,[nf]:s.NOTEQUAL};function at(I,C,Q){if(Q?(s.texParameteri(I,s.TEXTURE_WRAP_S,D[C.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,D[C.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,D[C.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,L[C.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,L[C.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==zn||C.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,S(C.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,S(C.minFilter)),C.minFilter!==rn&&C.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,j[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const vt=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===rn||C.minFilter!==Pa&&C.minFilter!==hs||C.type===Ei&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===us&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(s.texParameterf(I,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function et(I,C){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",P));const vt=C.source;let dt=m.get(vt);dt===void 0&&(dt={},m.set(vt,dt));const xt=q(C);if(xt!==I.__cacheKey){dt[xt]===void 0&&(dt[xt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),dt[xt].usedTimes++;const Ht=dt[I.__cacheKey];Ht!==void 0&&(dt[I.__cacheKey].usedTimes--,Ht.usedTimes===0&&N(C)),I.__cacheKey=xt,I.__webglTexture=dt[xt].texture}return Q}function K(I,C,Q){let vt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(vt=s.TEXTURE_3D);const dt=et(I,C),xt=C.source;e.bindTexture(vt,I.__webglTexture,s.TEXTURE0+Q);const Ht=n.get(xt);if(xt.version!==Ht.__version||dt===!0){e.activeTexture(s.TEXTURE0+Q);const Tt=xe.getPrimaries(xe.workingColorSpace),Nt=C.colorSpace===Cn?null:xe.getPrimaries(C.colorSpace),G=C.colorSpace===Cn||Tt===Nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const Mt=E(C)&&y(C.image)===!1;let pt=x(C.image,Mt,!1,c);pt=re(C,pt);const Qt=y(pt)||o,qt=r.convert(C.format,C.colorSpace);let Yt=r.convert(C.type),Wt=R(C.internalFormat,qt,Yt,C.colorSpace,C.isVideoTexture);at(vt,C,Qt);let Ut;const se=C.mipmaps,$=o&&C.isVideoTexture!==!0,St=Ht.__version===void 0||dt===!0,yt=M(C,pt,Qt);if(C.isDepthTexture)Wt=s.DEPTH_COMPONENT,o?C.type===Ei?Wt=s.DEPTH_COMPONENT32F:C.type===yi?Wt=s.DEPTH_COMPONENT24:C.type===Yi?Wt=s.DEPTH24_STENCIL8:Wt=s.DEPTH_COMPONENT16:C.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===$i&&Wt===s.DEPTH_COMPONENT&&C.type!==qo&&C.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=yi,Yt=r.convert(C.type)),C.format===Br&&Wt===s.DEPTH_COMPONENT&&(Wt=s.DEPTH_STENCIL,C.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Yi,Yt=r.convert(C.type))),St&&($?e.texStorage2D(s.TEXTURE_2D,1,Wt,pt.width,pt.height):e.texImage2D(s.TEXTURE_2D,0,Wt,pt.width,pt.height,0,qt,Yt,null));else if(C.isDataTexture)if(se.length>0&&Qt){$&&St&&e.texStorage2D(s.TEXTURE_2D,yt,Wt,se[0].width,se[0].height);for(let ut=0,wt=se.length;ut<wt;ut++)Ut=se[ut],$?e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Yt,Ut.data):e.texImage2D(s.TEXTURE_2D,ut,Wt,Ut.width,Ut.height,0,qt,Yt,Ut.data);C.generateMipmaps=!1}else $?(St&&e.texStorage2D(s.TEXTURE_2D,yt,Wt,pt.width,pt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt.width,pt.height,qt,Yt,pt.data)):e.texImage2D(s.TEXTURE_2D,0,Wt,pt.width,pt.height,0,qt,Yt,pt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){$&&St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Wt,se[0].width,se[0].height,pt.depth);for(let ut=0,wt=se.length;ut<wt;ut++)Ut=se[ut],C.format!==Vn?qt!==null?$?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,pt.depth,qt,Ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Wt,Ut.width,Ut.height,pt.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,pt.depth,qt,Yt,Ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,Wt,Ut.width,Ut.height,pt.depth,0,qt,Yt,Ut.data)}else{$&&St&&e.texStorage2D(s.TEXTURE_2D,yt,Wt,se[0].width,se[0].height);for(let ut=0,wt=se.length;ut<wt;ut++)Ut=se[ut],C.format!==Vn?qt!==null?$?e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Ut.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,Wt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Yt,Ut.data):e.texImage2D(s.TEXTURE_2D,ut,Wt,Ut.width,Ut.height,0,qt,Yt,Ut.data)}else if(C.isDataArrayTexture)$?(St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Wt,pt.width,pt.height,pt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,qt,Yt,pt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,pt.width,pt.height,pt.depth,0,qt,Yt,pt.data);else if(C.isData3DTexture)$?(St&&e.texStorage3D(s.TEXTURE_3D,yt,Wt,pt.width,pt.height,pt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,qt,Yt,pt.data)):e.texImage3D(s.TEXTURE_3D,0,Wt,pt.width,pt.height,pt.depth,0,qt,Yt,pt.data);else if(C.isFramebufferTexture){if(St)if($)e.texStorage2D(s.TEXTURE_2D,yt,Wt,pt.width,pt.height);else{let ut=pt.width,wt=pt.height;for(let jt=0;jt<yt;jt++)e.texImage2D(s.TEXTURE_2D,jt,Wt,ut,wt,0,qt,Yt,null),ut>>=1,wt>>=1}}else if(se.length>0&&Qt){$&&St&&e.texStorage2D(s.TEXTURE_2D,yt,Wt,se[0].width,se[0].height);for(let ut=0,wt=se.length;ut<wt;ut++)Ut=se[ut],$?e.texSubImage2D(s.TEXTURE_2D,ut,0,0,qt,Yt,Ut):e.texImage2D(s.TEXTURE_2D,ut,Wt,qt,Yt,Ut);C.generateMipmaps=!1}else $?(St&&e.texStorage2D(s.TEXTURE_2D,yt,Wt,pt.width,pt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,qt,Yt,pt)):e.texImage2D(s.TEXTURE_2D,0,Wt,qt,Yt,pt);b(C,Qt)&&A(vt),Ht.__version=xt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ot(I,C,Q){if(C.image.length!==6)return;const vt=et(I,C),dt=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Q);const xt=n.get(dt);if(dt.version!==xt.__version||vt===!0){e.activeTexture(s.TEXTURE0+Q);const Ht=xe.getPrimaries(xe.workingColorSpace),Tt=C.colorSpace===Cn?null:xe.getPrimaries(C.colorSpace),Nt=C.colorSpace===Cn||Ht===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const G=C.isCompressedTexture||C.image[0].isCompressedTexture,Mt=C.image[0]&&C.image[0].isDataTexture,pt=[];for(let ut=0;ut<6;ut++)!G&&!Mt?pt[ut]=x(C.image[ut],!1,!0,h):pt[ut]=Mt?C.image[ut].image:C.image[ut],pt[ut]=re(C,pt[ut]);const Qt=pt[0],qt=y(Qt)||o,Yt=r.convert(C.format,C.colorSpace),Wt=r.convert(C.type),Ut=R(C.internalFormat,Yt,Wt,C.colorSpace),se=o&&C.isVideoTexture!==!0,$=xt.__version===void 0||vt===!0;let St=M(C,Qt,qt);at(s.TEXTURE_CUBE_MAP,C,qt);let yt;if(G){se&&$&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Ut,Qt.width,Qt.height);for(let ut=0;ut<6;ut++){yt=pt[ut].mipmaps;for(let wt=0;wt<yt.length;wt++){const jt=yt[wt];C.format!==Vn?Yt!==null?se?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,jt.width,jt.height,Yt,jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,Ut,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,jt.width,jt.height,Yt,Wt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,Ut,jt.width,jt.height,0,Yt,Wt,jt.data)}}}else{yt=C.mipmaps,se&&$&&(yt.length>0&&St++,e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Ut,pt[0].width,pt[0].height));for(let ut=0;ut<6;ut++)if(Mt){se?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,pt[ut].width,pt[ut].height,Yt,Wt,pt[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ut,pt[ut].width,pt[ut].height,0,Yt,Wt,pt[ut].data);for(let wt=0;wt<yt.length;wt++){const ae=yt[wt].image[ut].image;se?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,ae.width,ae.height,Yt,Wt,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,Ut,ae.width,ae.height,0,Yt,Wt,ae.data)}}else{se?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Yt,Wt,pt[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ut,Yt,Wt,pt[ut]);for(let wt=0;wt<yt.length;wt++){const jt=yt[wt];se?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,Yt,Wt,jt.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,Ut,Yt,Wt,jt.image[ut])}}}b(C,qt)&&A(s.TEXTURE_CUBE_MAP),xt.__version=dt.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ht(I,C,Q,vt,dt,xt){const Ht=r.convert(Q.format,Q.colorSpace),Tt=r.convert(Q.type),Nt=R(Q.internalFormat,Ht,Tt,Q.colorSpace);if(!n.get(C).__hasExternalTextures){const Mt=Math.max(1,C.width>>xt),pt=Math.max(1,C.height>>xt);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?e.texImage3D(dt,xt,Nt,Mt,pt,C.depth,0,Ht,Tt,null):e.texImage2D(dt,xt,Nt,Mt,pt,0,Ht,Tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),Et(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,dt,n.get(Q).__webglTexture,0,Gt(C)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,dt,n.get(Q).__webglTexture,xt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(I,C,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),C.depthBuffer&&!C.stencilBuffer){let vt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Q||Et(C)){const dt=C.depthTexture;dt&&dt.isDepthTexture&&(dt.type===Ei?vt=s.DEPTH_COMPONENT32F:dt.type===yi&&(vt=s.DEPTH_COMPONENT24));const xt=Gt(C);Et(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,vt,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,vt,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,vt,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(C.depthBuffer&&C.stencilBuffer){const vt=Gt(C);Q&&Et(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,s.DEPTH24_STENCIL8,C.width,C.height):Et(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const vt=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let dt=0;dt<vt.length;dt++){const xt=vt[dt],Ht=r.convert(xt.format,xt.colorSpace),Tt=r.convert(xt.type),Nt=R(xt.internalFormat,Ht,Tt,xt.colorSpace),G=Gt(C);Q&&Et(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,G,Nt,C.width,C.height):Et(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G,Nt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Nt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),X(C.depthTexture,0);const vt=n.get(C.depthTexture).__webglTexture,dt=Gt(C);if(C.depthTexture.format===$i)Et(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(C.depthTexture.format===Br)Et(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ft(I){const C=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Lt(C.__webglFramebuffer,I)}else if(Q){C.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[vt]),C.__webglDepthbuffer[vt]=s.createRenderbuffer(),Y(C.__webglDepthbuffer[vt],I,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Y(C.__webglDepthbuffer,I,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(I,C,Q){const vt=n.get(I);C!==void 0&&ht(vt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&ft(I)}function ct(I){const C=I.texture,Q=n.get(I),vt=n.get(C);I.addEventListener("dispose",z),I.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=C.version,a.memory.textures++);const dt=I.isWebGLCubeRenderTarget===!0,xt=I.isWebGLMultipleRenderTargets===!0,Ht=y(I)||o;if(dt){Q.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(o&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[Tt]=[];for(let Nt=0;Nt<C.mipmaps.length;Nt++)Q.__webglFramebuffer[Tt][Nt]=s.createFramebuffer()}else Q.__webglFramebuffer[Tt]=s.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Tt=0;Tt<C.mipmaps.length;Tt++)Q.__webglFramebuffer[Tt]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(xt)if(i.drawBuffers){const Tt=I.texture;for(let Nt=0,G=Tt.length;Nt<G;Nt++){const Mt=n.get(Tt[Nt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&Et(I)===!1){const Tt=xt?C:[C];Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Nt=0;Nt<Tt.length;Nt++){const G=Tt[Nt];Q.__webglColorRenderbuffer[Nt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Nt]);const Mt=r.convert(G.format,G.colorSpace),pt=r.convert(G.type),Qt=R(G.internalFormat,Mt,pt,G.colorSpace,I.isXRRenderTarget===!0),qt=Gt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Qt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Nt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),at(s.TEXTURE_CUBE_MAP,C,Ht);for(let Tt=0;Tt<6;Tt++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let Nt=0;Nt<C.mipmaps.length;Nt++)ht(Q.__webglFramebuffer[Tt][Nt],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Nt);else ht(Q.__webglFramebuffer[Tt],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);b(C,Ht)&&A(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){const Tt=I.texture;for(let Nt=0,G=Tt.length;Nt<G;Nt++){const Mt=Tt[Nt],pt=n.get(Mt);e.bindTexture(s.TEXTURE_2D,pt.__webglTexture),at(s.TEXTURE_2D,Mt,Ht),ht(Q.__webglFramebuffer,I,Mt,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,0),b(Mt,Ht)&&A(s.TEXTURE_2D)}e.unbindTexture()}else{let Tt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?Tt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Tt,vt.__webglTexture),at(Tt,C,Ht),o&&C.mipmaps&&C.mipmaps.length>0)for(let Nt=0;Nt<C.mipmaps.length;Nt++)ht(Q.__webglFramebuffer[Nt],I,C,s.COLOR_ATTACHMENT0,Tt,Nt);else ht(Q.__webglFramebuffer,I,C,s.COLOR_ATTACHMENT0,Tt,0);b(C,Ht)&&A(Tt),e.unbindTexture()}I.depthBuffer&&ft(I)}function Jt(I){const C=y(I)||o,Q=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let vt=0,dt=Q.length;vt<dt;vt++){const xt=Q[vt];if(b(xt,C)){const Ht=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Tt=n.get(xt).__webglTexture;e.bindTexture(Ht,Tt),A(Ht),e.unbindTexture()}}}function bt(I){if(o&&I.samples>0&&Et(I)===!1){const C=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Q=I.width,vt=I.height;let dt=s.COLOR_BUFFER_BIT;const xt=[],Ht=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(I),Nt=I.isWebGLMultipleRenderTargets===!0;if(Nt)for(let G=0;G<C.length;G++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let G=0;G<C.length;G++){xt.push(s.COLOR_ATTACHMENT0+G),I.depthBuffer&&xt.push(Ht);const Mt=Tt.__ignoreDepthValues!==void 0?Tt.__ignoreDepthValues:!1;if(Mt===!1&&(I.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),Nt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[G]),Mt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ht]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ht])),Nt){const pt=n.get(C[G]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,Q,vt,0,0,Q,vt,dt,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Nt)for(let G=0;G<C.length;G++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[G]);const Mt=n.get(C[G]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.TEXTURE_2D,Mt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}}function Gt(I){return Math.min(u,I.samples)}function Et(I){const C=n.get(I);return o&&I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ne(I){const C=a.render.frame;v.get(I)!==C&&(v.set(I,C),I.update())}function re(I,C){const Q=I.colorSpace,vt=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===To||Q!==ci&&Q!==Cn&&(xe.getTransfer(Q)===Se?o===!1?t.has("EXT_sRGB")===!0&&vt===Vn?(I.format=To,I.minFilter=bn,I.generateMipmaps=!1):C=Ch.sRGBToLinear(C):(vt!==Vn||dt!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=T,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=nt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Et}function g_(s,t,e){const n=e.isWebGL2;function i(r,a=Cn){let o;const l=xe.getTransfer(a);if(r===Ai)return s.UNSIGNED_BYTE;if(r===yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Eh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===zd)return s.BYTE;if(r===Vd)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===xh)return s.INT;if(r===yi)return s.UNSIGNED_INT;if(r===Ei)return s.FLOAT;if(r===us)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===kd)return s.ALPHA;if(r===Vn)return s.RGBA;if(r===Hd)return s.LUMINANCE;if(r===Gd)return s.LUMINANCE_ALPHA;if(r===$i)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===To)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Wd)return s.RED;if(r===Mh)return s.RED_INTEGER;if(r===Xd)return s.RG;if(r===Sh)return s.RG_INTEGER;if(r===wh)return s.RGBA_INTEGER;if(r===La||r===Da||r===Ia||r===Na)if(l===Se)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===La)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===La)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Na)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rl||r===Pl||r===Ll||r===Dl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Rl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ll)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Il||r===Nl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Il)return l===Se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Nl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ul||r===Fl||r===Ol||r===Bl||r===zl||r===Vl||r===kl||r===Hl||r===Gl||r===Wl||r===Xl||r===ql||r===Yl||r===$l)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ul)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ol)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ql)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yl)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$l)return l===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ua||r===jl||r===Kl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ua)return l===Se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yd||r===Zl||r===Jl||r===Ql)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ua)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ql)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yi?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class __ extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zs extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,v=.005;h.inputState.pinching&&d>f+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class y_ extends ln{constructor(t,e,n,i,r,a,o,l,h,c){if(c=c!==void 0?c:$i,c!==$i&&c!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===$i&&(n=yi),n===void 0&&c===Br&&(n=Yi),super(null,i,r,a,o,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class E_ extends ar{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,v=null;const g=e.getContextAttributes();let m=null,p=null;const _=[],x=[],y=new An;y.layers.enable(1),y.viewport=new Xe;const E=new An;E.layers.enable(2),E.viewport=new Xe;const b=[y,E],A=new __;A.layers.enable(1),A.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let O=_[T];return O===void 0&&(O=new ro,_[T]=O),O.getTargetRaySpace()},this.getControllerGrip=function(T){let O=_[T];return O===void 0&&(O=new ro,_[T]=O),O.getGripSpace()},this.getHand=function(T){let O=_[T];return O===void 0&&(O=new ro,_[T]=O),O.getHandSpace()};function S(T){const O=x.indexOf(T.inputSource);if(O===-1)return;const U=_[O];U!==void 0&&(U.update(T.inputSource,T.frame,h||a),U.dispatchEvent({type:T.type,data:T.inputSource}))}function P(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",z);for(let T=0;T<_.length;T++){const O=x[T];O!==null&&(x[T]=null,_[T].disconnect(O))}R=null,M=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(T){h=T},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(T){if(i=T,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",P),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:f}),p=new tr(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let O=null,U=null,D=null;g.depth&&(D=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=g.stencil?Br:$i,U=g.stencil?Yi:yi);const L={colorFormat:e.RGBA8,depthFormat:D,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(L),i.updateRenderState({layers:[d]}),p=new tr(d.textureWidth,d.textureHeight,{format:Vn,type:Ai,depthTexture:new y_(d.textureWidth,d.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const j=t.properties.get(p);j.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(o),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function z(T){for(let O=0;O<T.removed.length;O++){const U=T.removed[O],D=x.indexOf(U);D>=0&&(x[D]=null,_[D].disconnect(U))}for(let O=0;O<T.added.length;O++){const U=T.added[O];let D=x.indexOf(U);if(D===-1){for(let j=0;j<_.length;j++)if(j>=x.length){x.push(U),D=j;break}else if(x[j]===null){x[j]=U,D=j;break}if(D===-1)break}const L=_[D];L&&L.connect(U)}}const V=new rt,N=new rt;function k(T,O,U){V.setFromMatrixPosition(O.matrixWorld),N.setFromMatrixPosition(U.matrixWorld);const D=V.distanceTo(N),L=O.projectionMatrix.elements,j=U.projectionMatrix.elements,at=L[14]/(L[10]-1),et=L[14]/(L[10]+1),K=(L[9]+1)/L[5],ot=(L[9]-1)/L[5],ht=(L[8]-1)/L[0],Y=(j[8]+1)/j[0],Lt=at*ht,ft=at*Y,nt=D/(-ht+Y),ct=nt*-ht;O.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ct),T.translateZ(nt),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const Jt=at+nt,bt=et+nt,Gt=Lt-ct,Et=ft+(D-ct),ne=K*et/bt*Jt,re=ot*et/bt*Jt;T.projectionMatrix.makePerspective(Gt,Et,ne,re,Jt,bt),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function J(T,O){O===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(O.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(i===null)return;A.near=E.near=y.near=T.near,A.far=E.far=y.far=T.far,(R!==A.near||M!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,M=A.far);const O=T.parent,U=A.cameras;J(A,O);for(let D=0;D<U.length;D++)J(U[D],O);U.length===2?k(A,y,E):A.projectionMatrix.copy(y.projectionMatrix),F(T,A,O)};function F(T,O,U){U===null?T.matrix.copy(O.matrixWorld):(T.matrix.copy(U.matrixWorld),T.matrix.invert(),T.matrix.multiply(O.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(O.projectionMatrix),T.projectionMatrixInverse.copy(O.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=ds*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(T){l=T,d!==null&&(d.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)};let B=null;function q(T,O){if(c=O.getViewerPose(h||a),v=O,c!==null){const U=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let D=!1;U.length!==A.cameras.length&&(A.cameras.length=0,D=!0);for(let L=0;L<U.length;L++){const j=U[L];let at=null;if(f!==null)at=f.getViewport(j);else{const K=u.getViewSubImage(d,j);at=K.viewport,L===0&&(t.setRenderTargetTextures(p,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(p))}let et=b[L];et===void 0&&(et=new An,et.layers.enable(L),et.viewport=new Xe,b[L]=et),et.matrix.fromArray(j.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(j.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(at.x,at.y,at.width,at.height),L===0&&(A.matrix.copy(et.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),D===!0&&A.cameras.push(et)}}for(let U=0;U<_.length;U++){const D=x[U],L=_[U];D!==null&&L!==void 0&&L.update(D,O,h||a)}B&&B(T,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),v=null}const X=new zh;X.setAnimationLoop(q),this.setAnimationLoop=function(T){B=T},this.dispose=function(){}}}function M_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S_(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function h(_,x){let y=i[_.id];y===void 0&&(v(_),y=c(_),i[_.id]=y,_.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(_,E);const b=t.render.frame;r[_.id]!==b&&(d(_),r[_.id]=b)}function c(_){const x=u();_.__bindingPointIndex=x;const y=s.createBuffer(),E=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=i[_.id],y=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,A=y.length;b<A;b++){const R=y[b];if(f(R,b,E)===!0){const M=R.__offset,S=Array.isArray(R.value)?R.value:[R.value];let P=0;for(let z=0;z<S.length;z++){const V=S[z],N=g(V);typeof V=="number"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,M+P,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=V.elements[0],R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=V.elements[0],R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=V.elements[0]):(V.toArray(R.__data,P),P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,R.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,x,y){const E=_.value;if(y[x]===void 0){if(typeof E=="number")y[x]=E;else{const b=Array.isArray(E)?E:[E],A=[];for(let R=0;R<b.length;R++)A.push(b[R].clone());y[x]=A}return!0}else if(typeof E=="number"){if(y[x]!==E)return y[x]=E,!0}else{const b=Array.isArray(y[x])?y[x]:[y[x]],A=Array.isArray(E)?E:[E];for(let R=0;R<b.length;R++){const M=b[R];if(M.equals(A[R])===!1)return M.copy(A[R]),!0}}return!1}function v(_){const x=_.uniforms;let y=0;const E=16;let b=0;for(let A=0,R=x.length;A<R;A++){const M=x[A],S={boundary:0,storage:0},P=Array.isArray(M.value)?M.value:[M.value];for(let z=0,V=P.length;z<V;z++){const N=P[z],k=g(N);S.boundary+=k.boundary,S.storage+=k.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,A>0){b=y%E;const z=E-b;b!==0&&z-S.boundary<0&&(y+=E-b,M.__offset=y)}y+=S.storage}return b=y%E,b>0&&(y+=E-b),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:h,dispose:p}}class Xh{constructor(t={}){const{canvas:e=Ef(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this._useLegacyLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;const x=this;let y=!1,E=0,b=0,A=null,R=-1,M=null;const S=new Xe,P=new Xe;let z=null;const V=new ge(0);let N=0,k=e.width,J=e.height,F=1,B=null,q=null;const X=new Xe(0,0,k,J),T=new Xe(0,0,k,J);let O=!1;const U=new Zo;let D=!1,L=!1,j=null;const at=new Be,et=new oe,K=new rt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return A===null?F:1}let Y=n;function Lt(w,W){for(let Z=0;Z<w.length;Z++){const H=w[Z],tt=e.getContext(H,W);if(tt!==null)return tt}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",se,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",St,!1),Y===null){const W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),Y=Lt(W,w),Y===null)throw Lt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ft,nt,ct,Jt,bt,Gt,Et,ne,re,I,C,Q,vt,dt,xt,Ht,Tt,Nt,G,Mt,pt,Qt,qt,Yt;function Wt(){ft=new Iv(Y),nt=new Av(Y,ft,t),ft.init(nt),Qt=new g_(Y,ft,nt),ct=new m_(Y,ft,nt),Jt=new Fv(Y),bt=new e_,Gt=new v_(Y,ft,ct,bt,nt,Qt,Jt),Et=new Rv(x),ne=new Dv(x),re=new qf(Y,nt),qt=new Tv(Y,ft,re,nt),I=new Nv(Y,re,Jt,qt),C=new Vv(Y,I,re,Jt),G=new zv(Y,nt,Gt),Ht=new Cv(bt),Q=new t_(x,Et,ne,ft,nt,qt,Ht),vt=new M_(x,bt),dt=new i_,xt=new c_(ft,nt),Nt=new wv(x,Et,ne,ct,C,d,l),Tt=new p_(x,C,nt),Yt=new S_(Y,Jt,nt,ct),Mt=new bv(Y,ft,Jt,nt),pt=new Uv(Y,ft,Jt,nt),Jt.programs=Q.programs,x.capabilities=nt,x.extensions=ft,x.properties=bt,x.renderLists=dt,x.shadowMap=Tt,x.state=ct,x.info=Jt}Wt();const Ut=new E_(x,Y);this.xr=Ut,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(k,J,!1))},this.getSize=function(w){return w.set(k,J)},this.setSize=function(w,W,Z=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,J=W,e.width=Math.floor(w*F),e.height=Math.floor(W*F),Z===!0&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(k*F,J*F).floor()},this.setDrawingBufferSize=function(w,W,Z){k=w,J=W,F=Z,e.width=Math.floor(w*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,W,Z,H){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,W,Z,H),ct.viewport(S.copy(X).multiplyScalar(F).floor())},this.getScissor=function(w){return w.copy(T)},this.setScissor=function(w,W,Z,H){w.isVector4?T.set(w.x,w.y,w.z,w.w):T.set(w,W,Z,H),ct.scissor(P.copy(T).multiplyScalar(F).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(w){ct.setScissorTest(O=w)},this.setOpaqueSort=function(w){B=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(w=!0,W=!0,Z=!0){let H=0;if(w){let tt=!1;if(A!==null){const _t=A.texture.format;tt=_t===wh||_t===Sh||_t===Mh}if(tt){const _t=A.texture.type,zt=_t===Ai||_t===yi||_t===qo||_t===Yi||_t===yh||_t===Eh,Dt=Nt.getClearColor(),Bt=Nt.getClearAlpha(),Rt=Dt.r,te=Dt.g,ee=Dt.b;zt?(f[0]=Rt,f[1]=te,f[2]=ee,f[3]=Bt,Y.clearBufferuiv(Y.COLOR,0,f)):(v[0]=Rt,v[1]=te,v[2]=ee,v[3]=Bt,Y.clearBufferiv(Y.COLOR,0,v))}else H|=Y.COLOR_BUFFER_BIT}W&&(H|=Y.DEPTH_BUFFER_BIT),Z&&(H|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",St,!1),dt.dispose(),xt.dispose(),bt.dispose(),Et.dispose(),ne.dispose(),C.dispose(),qt.dispose(),Yt.dispose(),Q.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",lt),Ut.removeEventListener("sessionend",st),j&&(j.dispose(),j=null),mt.stop()};function se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Jt.autoReset,W=Tt.enabled,Z=Tt.autoUpdate,H=Tt.needsUpdate,tt=Tt.type;Wt(),Jt.autoReset=w,Tt.enabled=W,Tt.autoUpdate=Z,Tt.needsUpdate=H,Tt.type=tt}function St(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function yt(w){const W=w.target;W.removeEventListener("dispose",yt),ut(W)}function ut(w){wt(w),bt.remove(w)}function wt(w){const W=bt.get(w).programs;W!==void 0&&(W.forEach(function(Z){Q.releaseProgram(Z)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Z,H,tt,_t){W===null&&(W=ot);const zt=tt.isMesh&&tt.matrixWorld.determinant()<0,Dt=Xt(w,W,Z,H,tt);ct.setMaterial(H,zt);let Bt=Z.index,Rt=1;if(H.wireframe===!0){if(Bt=I.getWireframeAttribute(Z),Bt===void 0)return;Rt=2}const te=Z.drawRange,ee=Z.attributes.position;let de=te.start*Rt,Ae=(te.start+te.count)*Rt;_t!==null&&(de=Math.max(de,_t.start*Rt),Ae=Math.min(Ae,(_t.start+_t.count)*Rt)),Bt!==null?(de=Math.max(de,0),Ae=Math.min(Ae,Bt.count)):ee!=null&&(de=Math.max(de,0),Ae=Math.min(Ae,ee.count));const me=Ae-de;if(me<0||me===1/0)return;qt.setup(tt,H,Dt,Z,Bt);let ue,ve=Mt;if(Bt!==null&&(ue=re.get(Bt),ve=pt,ve.setIndex(ue)),tt.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*ht()),ve.setMode(Y.LINES)):ve.setMode(Y.TRIANGLES);else if(tt.isLine){let Kt=H.linewidth;Kt===void 0&&(Kt=1),ct.setLineWidth(Kt*ht()),tt.isLineSegments?ve.setMode(Y.LINES):tt.isLineLoop?ve.setMode(Y.LINE_LOOP):ve.setMode(Y.LINE_STRIP)}else tt.isPoints?ve.setMode(Y.POINTS):tt.isSprite&&ve.setMode(Y.TRIANGLES);if(tt.isInstancedMesh)ve.renderInstances(de,me,tt.count);else if(Z.isInstancedBufferGeometry){const Kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,mn=Math.min(Z.instanceCount,Kt);ve.renderInstances(de,me,mn)}else ve.render(de,me)};function jt(w,W,Z){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,it(w,W,Z),w.side=Pi,w.needsUpdate=!0,it(w,W,Z),w.side=oi):it(w,W,Z)}this.compile=function(w,W,Z=null){Z===null&&(Z=w),m=xt.get(Z),m.init(),_.push(m),Z.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),w!==Z&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),m.setupLights(x._useLegacyLights);const H=new Set;return w.traverse(function(tt){const _t=tt.material;if(_t)if(Array.isArray(_t))for(let zt=0;zt<_t.length;zt++){const Dt=_t[zt];jt(Dt,Z,tt),H.add(Dt)}else jt(_t,Z,tt),H.add(_t)}),_.pop(),m=null,H},this.compileAsync=function(w,W,Z=null){const H=this.compile(w,W,Z);return new Promise(tt=>{function _t(){if(H.forEach(function(zt){bt.get(zt).currentProgram.isReady()&&H.delete(zt)}),H.size===0){tt(w);return}setTimeout(_t,10)}ft.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ae=null;function ce(w){ae&&ae(w)}function lt(){mt.stop()}function st(){mt.start()}const mt=new zh;mt.setAnimationLoop(ce),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(w){ae=w,Ut.setAnimationLoop(w),w===null?mt.stop():mt.start()},Ut.addEventListener("sessionstart",lt),Ut.addEventListener("sessionend",st),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(W),W=Ut.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,W,A),m=xt.get(w,_.length),m.init(),_.push(m),at.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),U.setFromProjectionMatrix(at),L=this.localClippingEnabled,D=Ht.init(this.clippingPlanes,L),g=dt.get(w,p.length),g.init(),p.push(g),gt(w,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(B,q),this.info.render.frame++,D===!0&&Ht.beginShadows();const Z=m.state.shadowsArray;if(Tt.render(Z,w,W),D===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Nt.render(g,w),m.setupLights(x._useLegacyLights),W.isArrayCamera){const H=W.cameras;for(let tt=0,_t=H.length;tt<_t;tt++){const zt=H[tt];ie(g,w,zt,zt.viewport)}}else ie(g,w,W);A!==null&&(Gt.updateMultisampleRenderTarget(A),Gt.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,W),qt.resetDefaultState(),R=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function gt(w,W,Z,H){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){H&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(at);const zt=C.update(w),Dt=w.material;Dt.visible&&g.push(w,zt,Dt,Z,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||U.intersectsObject(w))){const zt=C.update(w),Dt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),K.copy(w.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),K.copy(zt.boundingSphere.center)),K.applyMatrix4(w.matrixWorld).applyMatrix4(at)),Array.isArray(Dt)){const Bt=zt.groups;for(let Rt=0,te=Bt.length;Rt<te;Rt++){const ee=Bt[Rt],de=Dt[ee.materialIndex];de&&de.visible&&g.push(w,zt,de,Z,K.z,ee)}}else Dt.visible&&g.push(w,zt,Dt,Z,K.z,null)}}const _t=w.children;for(let zt=0,Dt=_t.length;zt<Dt;zt++)gt(_t[zt],W,Z,H)}function ie(w,W,Z,H){const tt=w.opaque,_t=w.transmissive,zt=w.transparent;m.setupLightsView(Z),D===!0&&Ht.setGlobalState(x.clippingPlanes,Z),_t.length>0&&Vt(tt,_t,W,Z),H&&ct.viewport(S.copy(H)),tt.length>0&&At(tt,W,Z),_t.length>0&&At(_t,W,Z),zt.length>0&&At(zt,W,Z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Vt(w,W,Z,H){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const _t=nt.isWebGL2;j===null&&(j=new tr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?us:Ai,minFilter:hs,samples:_t?4:0})),x.getDrawingBufferSize(et),_t?j.setSize(et.x,et.y):j.setSize(ha(et.x),ha(et.y));const zt=x.getRenderTarget();x.setRenderTarget(j),x.getClearColor(V),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Dt=x.toneMapping;x.toneMapping=bi,At(w,Z,H),Gt.updateMultisampleRenderTarget(j),Gt.updateRenderTargetMipmap(j);let Bt=!1;for(let Rt=0,te=W.length;Rt<te;Rt++){const ee=W[Rt],de=ee.object,Ae=ee.geometry,me=ee.material,ue=ee.group;if(me.side===oi&&de.layers.test(H.layers)){const ve=me.side;me.side=on,me.needsUpdate=!0,Ft(de,Z,H,Ae,me,ue),me.side=ve,me.needsUpdate=!0,Bt=!0}}Bt===!0&&(Gt.updateMultisampleRenderTarget(j),Gt.updateRenderTargetMipmap(j)),x.setRenderTarget(zt),x.setClearColor(V,N),x.toneMapping=Dt}function At(w,W,Z){const H=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,_t=w.length;tt<_t;tt++){const zt=w[tt],Dt=zt.object,Bt=zt.geometry,Rt=H===null?zt.material:H,te=zt.group;Dt.layers.test(Z.layers)&&Ft(Dt,W,Z,Bt,Rt,te)}}function Ft(w,W,Z,H,tt,_t){w.onBeforeRender(x,W,Z,H,tt,_t),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(x,W,Z,H,w,_t),tt.transparent===!0&&tt.side===oi&&tt.forceSinglePass===!1?(tt.side=on,tt.needsUpdate=!0,x.renderBufferDirect(Z,W,H,tt,w,_t),tt.side=Pi,tt.needsUpdate=!0,x.renderBufferDirect(Z,W,H,tt,w,_t),tt.side=oi):x.renderBufferDirect(Z,W,H,tt,w,_t),w.onAfterRender(x,W,Z,H,tt,_t)}function it(w,W,Z){W.isScene!==!0&&(W=ot);const H=bt.get(w),tt=m.state.lights,_t=m.state.shadowsArray,zt=tt.state.version,Dt=Q.getParameters(w,tt.state,_t,W,Z),Bt=Q.getProgramCacheKey(Dt);let Rt=H.programs;H.environment=w.isMeshStandardMaterial?W.environment:null,H.fog=W.fog,H.envMap=(w.isMeshStandardMaterial?ne:Et).get(w.envMap||H.environment),Rt===void 0&&(w.addEventListener("dispose",yt),Rt=new Map,H.programs=Rt);let te=Rt.get(Bt);if(te!==void 0){if(H.currentProgram===te&&H.lightsStateVersion===zt)return Ot(w,Dt),te}else Dt.uniforms=Q.getUniforms(w),w.onBuild(Z,Dt,x),w.onBeforeCompile(Dt,x),te=Q.acquireProgram(Dt,Bt),Rt.set(Bt,te),H.uniforms=Dt.uniforms;const ee=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ee.clippingPlanes=Ht.uniform),Ot(w,Dt),H.needsLights=Ct(w),H.lightsStateVersion=zt,H.needsLights&&(ee.ambientLightColor.value=tt.state.ambient,ee.lightProbe.value=tt.state.probe,ee.directionalLights.value=tt.state.directional,ee.directionalLightShadows.value=tt.state.directionalShadow,ee.spotLights.value=tt.state.spot,ee.spotLightShadows.value=tt.state.spotShadow,ee.rectAreaLights.value=tt.state.rectArea,ee.ltc_1.value=tt.state.rectAreaLTC1,ee.ltc_2.value=tt.state.rectAreaLTC2,ee.pointLights.value=tt.state.point,ee.pointLightShadows.value=tt.state.pointShadow,ee.hemisphereLights.value=tt.state.hemi,ee.directionalShadowMap.value=tt.state.directionalShadowMap,ee.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ee.spotShadowMap.value=tt.state.spotShadowMap,ee.spotLightMatrix.value=tt.state.spotLightMatrix,ee.spotLightMap.value=tt.state.spotLightMap,ee.pointShadowMap.value=tt.state.pointShadowMap,ee.pointShadowMatrix.value=tt.state.pointShadowMatrix),H.currentProgram=te,H.uniformsList=null,te}function Pt(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=ea.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Ot(w,W){const Z=bt.get(w);Z.outputColorSpace=W.outputColorSpace,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Xt(w,W,Z,H,tt){W.isScene!==!0&&(W=ot),Gt.resetTextureUnits();const _t=W.fog,zt=H.isMeshStandardMaterial?W.environment:null,Dt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ci,Bt=(H.isMeshStandardMaterial?ne:Et).get(H.envMap||zt),Rt=H.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,te=!!Z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ee=!!Z.morphAttributes.position,de=!!Z.morphAttributes.normal,Ae=!!Z.morphAttributes.color;let me=bi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=x.toneMapping);const ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=ue!==void 0?ue.length:0,Kt=bt.get(H),mn=m.state.lights;if(D===!0&&(L===!0||w!==M)){const Ie=w===M&&H.id===R;Ht.setState(H,w,Ie)}let fe=!1;H.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==mn.state.version||Kt.outputColorSpace!==Dt||tt.isInstancedMesh&&Kt.instancing===!1||!tt.isInstancedMesh&&Kt.instancing===!0||tt.isSkinnedMesh&&Kt.skinning===!1||!tt.isSkinnedMesh&&Kt.skinning===!0||tt.isInstancedMesh&&Kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Kt.instancingColor===!1&&tt.instanceColor!==null||Kt.envMap!==Bt||H.fog===!0&&Kt.fog!==_t||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ht.numPlanes||Kt.numIntersection!==Ht.numIntersection)||Kt.vertexAlphas!==Rt||Kt.vertexTangents!==te||Kt.morphTargets!==ee||Kt.morphNormals!==de||Kt.morphColors!==Ae||Kt.toneMapping!==me||nt.isWebGL2===!0&&Kt.morphTargetsCount!==ve)&&(fe=!0):(fe=!0,Kt.__version=H.version);let we=Kt.currentProgram;fe===!0&&(we=it(H,W,tt));let Ue=!1,ke=!1,vn=!1;const Zt=we.getUniforms(),De=Kt.uniforms;if(ct.useProgram(we.program)&&(Ue=!0,ke=!0,vn=!0),H.id!==R&&(R=H.id,ke=!0),Ue||M!==w){Zt.setValue(Y,"projectionMatrix",w.projectionMatrix),Zt.setValue(Y,"viewMatrix",w.matrixWorldInverse);const Ie=Zt.map.cameraPosition;Ie!==void 0&&Ie.setValue(Y,K.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Zt.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Zt.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ke=!0,vn=!0)}if(tt.isSkinnedMesh){Zt.setOptional(Y,tt,"bindMatrix"),Zt.setOptional(Y,tt,"bindMatrixInverse");const Ie=tt.skeleton;Ie&&(nt.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),Zt.setValue(Y,"boneTexture",Ie.boneTexture,Gt),Zt.setValue(Y,"boneTextureSize",Ie.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pe=Z.morphAttributes;if((Pe.position!==void 0||Pe.normal!==void 0||Pe.color!==void 0&&nt.isWebGL2===!0)&&G.update(tt,Z,we),(ke||Kt.receiveShadow!==tt.receiveShadow)&&(Kt.receiveShadow=tt.receiveShadow,Zt.setValue(Y,"receiveShadow",tt.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(De.envMap.value=Bt,De.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ke&&(Zt.setValue(Y,"toneMappingExposure",x.toneMappingExposure),Kt.needsLights&&It(De,vn),_t&&H.fog===!0&&vt.refreshFogUniforms(De,_t),vt.refreshMaterialUniforms(De,H,F,J,j),ea.upload(Y,Pt(Kt),De,Gt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ea.upload(Y,Pt(Kt),De,Gt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Zt.setValue(Y,"center",tt.center),Zt.setValue(Y,"modelViewMatrix",tt.modelViewMatrix),Zt.setValue(Y,"normalMatrix",tt.normalMatrix),Zt.setValue(Y,"modelMatrix",tt.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ie=H.uniformsGroups;for(let Nn=0,Ra=Ie.length;Nn<Ra;Nn++)if(nt.isWebGL2){const Cs=Ie[Nn];Yt.update(Cs,we),Yt.bind(Cs,we)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return we}function It(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Ct(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,W,Z){bt.get(w.texture).__webglTexture=W,bt.get(w.depthTexture).__webglTexture=Z;const H=bt.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=Z===void 0,H.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const Z=bt.get(w);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Z=0){A=w,E=W,b=Z;let H=!0,tt=null,_t=!1,zt=!1;if(w){const Bt=bt.get(w);Bt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(Y.FRAMEBUFFER,null),H=!1):Bt.__webglFramebuffer===void 0?Gt.setupRenderTarget(w):Bt.__hasExternalTextures&&Gt.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(zt=!0);const te=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[W])?tt=te[W][Z]:tt=te[W],_t=!0):nt.isWebGL2&&w.samples>0&&Gt.useMultisampledRTT(w)===!1?tt=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?tt=te[Z]:tt=te,S.copy(w.viewport),P.copy(w.scissor),z=w.scissorTest}else S.copy(X).multiplyScalar(F).floor(),P.copy(T).multiplyScalar(F).floor(),z=O;if(ct.bindFramebuffer(Y.FRAMEBUFFER,tt)&&nt.drawBuffers&&H&&ct.drawBuffers(w,tt),ct.viewport(S),ct.scissor(P),ct.setScissorTest(z),_t){const Bt=bt.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,Z)}else if(zt){const Bt=bt.get(w.texture),Rt=W||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Bt.__webglTexture,Z||0,Rt)}R=-1},this.readRenderTargetPixels=function(w,W,Z,H,tt,_t,zt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Dt=Dt[zt]),Dt){ct.bindFramebuffer(Y.FRAMEBUFFER,Dt);try{const Bt=w.texture,Rt=Bt.format,te=Bt.type;if(Rt!==Vn&&Qt.convert(Rt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ee=te===us&&(ft.has("EXT_color_buffer_half_float")||nt.isWebGL2&&ft.has("EXT_color_buffer_float"));if(te!==Ai&&Qt.convert(te)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(te===Ei&&(nt.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-H&&Z>=0&&Z<=w.height-tt&&Y.readPixels(W,Z,H,tt,Qt.convert(Rt),Qt.convert(te),_t)}finally{const Bt=A!==null?bt.get(A).__webglFramebuffer:null;ct.bindFramebuffer(Y.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(w,W,Z=0){const H=Math.pow(2,-Z),tt=Math.floor(W.image.width*H),_t=Math.floor(W.image.height*H);Gt.setTexture2D(W,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Z,0,0,w.x,w.y,tt,_t),ct.unbindTexture()},this.copyTextureToTexture=function(w,W,Z,H=0){const tt=W.image.width,_t=W.image.height,zt=Qt.convert(Z.format),Dt=Qt.convert(Z.type);Gt.setTexture2D(Z,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,H,w.x,w.y,tt,_t,zt,Dt,W.image.data):W.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,H,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,zt,W.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,H,w.x,w.y,zt,Dt,W.image),H===0&&Z.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Z,H,tt=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=w.max.x-w.min.x+1,zt=w.max.y-w.min.y+1,Dt=w.max.z-w.min.z+1,Bt=Qt.convert(H.format),Rt=Qt.convert(H.type);let te;if(H.isData3DTexture)Gt.setTexture3D(H,0),te=Y.TEXTURE_3D;else if(H.isDataArrayTexture)Gt.setTexture2DArray(H,0),te=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,H.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,H.unpackAlignment);const ee=Y.getParameter(Y.UNPACK_ROW_LENGTH),de=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ae=Y.getParameter(Y.UNPACK_SKIP_PIXELS),me=Y.getParameter(Y.UNPACK_SKIP_ROWS),ue=Y.getParameter(Y.UNPACK_SKIP_IMAGES),ve=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ve.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ve.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,w.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,w.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?Y.texSubImage3D(te,tt,W.x,W.y,W.z,_t,zt,Dt,Bt,Rt,ve.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(te,tt,W.x,W.y,W.z,_t,zt,Dt,Bt,ve.data)):Y.texSubImage3D(te,tt,W.x,W.y,W.z,_t,zt,Dt,Bt,Rt,ve),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ee),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,de),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ae),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,me),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ue),tt===0&&H.generateMipmaps&&Y.generateMipmap(te),ct.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Gt.setTextureCube(w,0):w.isData3DTexture?Gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Gt.setTexture2DArray(w,0):Gt.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,ct.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Yo?"display-p3":"srgb",e.unpackColorSpace=xe.workingColorSpace===xa?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ge?ji:Th}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ji?Ge:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class w_ extends Xh{}w_.prototype.isWebGL1Renderer=!0;class T_ extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Qo extends Ii{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const c=[],u=new rt,d=new rt,f=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const _=[],x=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const b=E/e;u.x=-t*Math.cos(i+b*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+b*r)*Math.sin(a+x*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+y,1-x),_.push(h++)}c.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const x=c[p][_+1],y=c[p][_],E=c[p+1][_],b=c[p+1][_+1];(p!==0||a>0)&&f.push(x,y,b),(p!==n-1||l<Math.PI)&&f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new $n(v,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qh extends ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Hc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class b_{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&i.onStart!==void 0&&i.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const f=h[u],v=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return v}return null}}}const A_=new b_;class Sa{constructor(t){this.manager=t!==void 0?t:A_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Yh extends Sa{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Hc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=fs("img");function l(){c(),Hc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){c(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class C_ extends Sa{constructor(t){super(t)}load(t,e,n,i){const r=new Ko;r.colorSpace=Ge;const a=new Yh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(h){a.load(t[h],function(c){r.images[h]=c,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let h=0;h<t.length;++h)l(h);return r}}class R_ extends Sa{constructor(t){super(t)}load(t,e,n,i){const r=new ln,a=new Yh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class $h extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const so=new Be,Gc=new rt,Wc=new rt;class P_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class L_ extends P_{constructor(){super(new Vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class D_ extends $h{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new L_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class I_ extends $h{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class N_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Xc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Xc(){return(typeof performance>"u"?Date:performance).now()}class qc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);const Yc={type:"change"},ao={type:"start"},$c={type:"end"},Js=new Lh,jc=new xi,U_=Math.cos(70*yf.DEG2RAD);class F_ extends ar{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new rt,this.cursor=new rt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",C),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",C),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yc),n.update(),r=i.NONE},this.update=function(){const G=new rt,Mt=new er().setFromUnitVectors(t.up,new rt(0,1,0)),pt=Mt.clone().invert(),Qt=new rt,qt=new er,Yt=new rt,Wt=2*Math.PI;return function(se=null){const $=n.object.position;G.copy($).sub(n.target),G.applyQuaternion(Mt),o.setFromVector3(G),n.autoRotate&&r===i.NONE&&P(M(se)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let St=n.minAzimuthAngle,yt=n.maxAzimuthAngle;isFinite(St)&&isFinite(yt)&&(St<-Math.PI?St+=Wt:St>Math.PI&&(St-=Wt),yt<-Math.PI?yt+=Wt:yt>Math.PI&&(yt-=Wt),St<=yt?o.theta=Math.max(St,Math.min(yt,o.theta)):o.theta=o.theta>(St+yt)/2?Math.max(St,o.theta):Math.min(yt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*h),G.setFromSpherical(o),G.applyQuaternion(pt),$.copy(n.target).add(G),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let ut=!1;if(n.zoomToCursor&&b){let wt=null;if(n.object.isPerspectiveCamera){const jt=G.length();wt=q(jt*h);const ae=jt-wt;n.object.position.addScaledVector(y,ae),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const jt=new rt(E.x,E.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),ut=!0;const ae=new rt(E.x,E.y,0);ae.unproject(n.object),n.object.position.sub(ae).add(jt),n.object.updateMatrixWorld(),wt=G.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;wt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(wt).add(n.object.position):(Js.origin.copy(n.object.position),Js.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Js.direction))<U_?t.lookAt(n.target):(jc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Js.intersectPlane(jc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),ut=!0);return h=1,b=!1,ut||Qt.distanceToSquared(n.object.position)>a||8*(1-qt.dot(n.object.quaternion))>a||Yt.distanceToSquared(n.target)>0?(n.dispatchEvent(Yc),Qt.copy(n.object.position),qt.copy(n.object.quaternion),Yt.copy(n.target),ut=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",dt),n.domElement.removeEventListener("pointerdown",bt),n.domElement.removeEventListener("pointercancel",Et),n.domElement.removeEventListener("wheel",I),n.domElement.removeEventListener("pointermove",Gt),n.domElement.removeEventListener("pointerup",Et),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",C),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new qc,l=new qc;let h=1;const c=new rt,u=new oe,d=new oe,f=new oe,v=new oe,g=new oe,m=new oe,p=new oe,_=new oe,x=new oe,y=new rt,E=new oe;let b=!1;const A=[],R={};function M(G){return G!==null?2*Math.PI/60*n.autoRotateSpeed*G:2*Math.PI/60/60*n.autoRotateSpeed}function S(){return Math.pow(.95,n.zoomSpeed)}function P(G){l.theta-=G}function z(G){l.phi-=G}const V=function(){const G=new rt;return function(pt,Qt){G.setFromMatrixColumn(Qt,0),G.multiplyScalar(-pt),c.add(G)}}(),N=function(){const G=new rt;return function(pt,Qt){n.screenSpacePanning===!0?G.setFromMatrixColumn(Qt,1):(G.setFromMatrixColumn(Qt,0),G.crossVectors(n.object.up,G)),G.multiplyScalar(pt),c.add(G)}}(),k=function(){const G=new rt;return function(pt,Qt){const qt=n.domElement;if(n.object.isPerspectiveCamera){const Yt=n.object.position;G.copy(Yt).sub(n.target);let Wt=G.length();Wt*=Math.tan(n.object.fov/2*Math.PI/180),V(2*pt*Wt/qt.clientHeight,n.object.matrix),N(2*Qt*Wt/qt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(pt*(n.object.right-n.object.left)/n.object.zoom/qt.clientWidth,n.object.matrix),N(Qt*(n.object.top-n.object.bottom)/n.object.zoom/qt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(G){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(G){if(!n.zoomToCursor)return;b=!0;const Mt=n.domElement.getBoundingClientRect(),pt=G.clientX-Mt.left,Qt=G.clientY-Mt.top,qt=Mt.width,Yt=Mt.height;E.x=pt/qt*2-1,E.y=-(Qt/Yt)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(G){return Math.max(n.minDistance,Math.min(n.maxDistance,G))}function X(G){u.set(G.clientX,G.clientY)}function T(G){B(G),p.set(G.clientX,G.clientY)}function O(G){v.set(G.clientX,G.clientY)}function U(G){d.set(G.clientX,G.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const Mt=n.domElement;P(2*Math.PI*f.x/Mt.clientHeight),z(2*Math.PI*f.y/Mt.clientHeight),u.copy(d),n.update()}function D(G){_.set(G.clientX,G.clientY),x.subVectors(_,p),x.y>0?J(S()):x.y<0&&F(S()),p.copy(_),n.update()}function L(G){g.set(G.clientX,G.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),k(m.x,m.y),v.copy(g),n.update()}function j(G){B(G),G.deltaY<0?F(S()):G.deltaY>0&&J(S()),n.update()}function at(G){let Mt=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),Mt=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),Mt=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),Mt=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),Mt=!0;break}Mt&&(G.preventDefault(),n.update())}function et(){if(A.length===1)u.set(A[0].pageX,A[0].pageY);else{const G=.5*(A[0].pageX+A[1].pageX),Mt=.5*(A[0].pageY+A[1].pageY);u.set(G,Mt)}}function K(){if(A.length===1)v.set(A[0].pageX,A[0].pageY);else{const G=.5*(A[0].pageX+A[1].pageX),Mt=.5*(A[0].pageY+A[1].pageY);v.set(G,Mt)}}function ot(){const G=A[0].pageX-A[1].pageX,Mt=A[0].pageY-A[1].pageY,pt=Math.sqrt(G*G+Mt*Mt);p.set(0,pt)}function ht(){n.enableZoom&&ot(),n.enablePan&&K()}function Y(){n.enableZoom&&ot(),n.enableRotate&&et()}function Lt(G){if(A.length==1)d.set(G.pageX,G.pageY);else{const pt=Nt(G),Qt=.5*(G.pageX+pt.x),qt=.5*(G.pageY+pt.y);d.set(Qt,qt)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const Mt=n.domElement;P(2*Math.PI*f.x/Mt.clientHeight),z(2*Math.PI*f.y/Mt.clientHeight),u.copy(d)}function ft(G){if(A.length===1)g.set(G.pageX,G.pageY);else{const Mt=Nt(G),pt=.5*(G.pageX+Mt.x),Qt=.5*(G.pageY+Mt.y);g.set(pt,Qt)}m.subVectors(g,v).multiplyScalar(n.panSpeed),k(m.x,m.y),v.copy(g)}function nt(G){const Mt=Nt(G),pt=G.pageX-Mt.x,Qt=G.pageY-Mt.y,qt=Math.sqrt(pt*pt+Qt*Qt);_.set(0,qt),x.set(0,Math.pow(_.y/p.y,n.zoomSpeed)),J(x.y),p.copy(_)}function ct(G){n.enableZoom&&nt(G),n.enablePan&&ft(G)}function Jt(G){n.enableZoom&&nt(G),n.enableRotate&&Lt(G)}function bt(G){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(G.pointerId),n.domElement.addEventListener("pointermove",Gt),n.domElement.addEventListener("pointerup",Et)),xt(G),G.pointerType==="touch"?Q(G):ne(G))}function Gt(G){n.enabled!==!1&&(G.pointerType==="touch"?vt(G):re(G))}function Et(G){Ht(G),A.length===0&&(n.domElement.releasePointerCapture(G.pointerId),n.domElement.removeEventListener("pointermove",Gt),n.domElement.removeEventListener("pointerup",Et)),n.dispatchEvent($c),r=i.NONE}function ne(G){let Mt;switch(G.button){case 0:Mt=n.mouseButtons.LEFT;break;case 1:Mt=n.mouseButtons.MIDDLE;break;case 2:Mt=n.mouseButtons.RIGHT;break;default:Mt=-1}switch(Mt){case lr.DOLLY:if(n.enableZoom===!1)return;T(G),r=i.DOLLY;break;case lr.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;O(G),r=i.PAN}else{if(n.enableRotate===!1)return;X(G),r=i.ROTATE}break;case lr.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;X(G),r=i.ROTATE}else{if(n.enablePan===!1)return;O(G),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ao)}function re(G){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;U(G);break;case i.DOLLY:if(n.enableZoom===!1)return;D(G);break;case i.PAN:if(n.enablePan===!1)return;L(G);break}}function I(G){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(G.preventDefault(),n.dispatchEvent(ao),j(G),n.dispatchEvent($c))}function C(G){n.enabled===!1||n.enablePan===!1||at(G)}function Q(G){switch(Tt(G),A.length){case 1:switch(n.touches.ONE){case cr.ROTATE:if(n.enableRotate===!1)return;et(),r=i.TOUCH_ROTATE;break;case cr.PAN:if(n.enablePan===!1)return;K(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case cr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(),r=i.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ao)}function vt(G){switch(Tt(G),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(G),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ft(G),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(G),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Jt(G),n.update();break;default:r=i.NONE}}function dt(G){n.enabled!==!1&&G.preventDefault()}function xt(G){A.push(G)}function Ht(G){delete R[G.pointerId];for(let Mt=0;Mt<A.length;Mt++)if(A[Mt].pointerId==G.pointerId){A.splice(Mt,1);return}}function Tt(G){let Mt=R[G.pointerId];Mt===void 0&&(Mt=new oe,R[G.pointerId]=Mt),Mt.set(G.pageX,G.pageY)}function Nt(G){const Mt=G.pointerId===A[0].pointerId?A[1]:A[0];return R[Mt.pointerId]}n.domElement.addEventListener("contextmenu",dt),n.domElement.addEventListener("pointerdown",bt),n.domElement.addEventListener("pointercancel",Et),n.domElement.addEventListener("wheel",I,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.1
 * @author George Michael Brower
 * @license MIT
 */class jn{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),jn.nextNameID=jn.nextNameID||0,this.$name.id=`lil-gui-name-${++jn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class O_ extends jn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Co(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const B_={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Co,toHexString:Co},ps={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},z_={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){const n=ps.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return ps.toHexString(i)}},V_={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=ps.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return ps.toHexString(i)}},k_=[B_,ps,z_,V_];function H_(s){return k_.find(t=>t.match(s))}class G_ extends jn{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=H_(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Co(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class oo extends jn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class W_ extends jn{constructor(t,e,n,i,r,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+_),this.$input.value=this.getValue())},i=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let a=!1,o,l,h,c,u;const d=5,f=_=>{o=_.clientX,l=h=_.clientY,a=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=_=>{if(a){const x=_.clientX-o,y=_.clientY-l;Math.abs(y)>d?(_.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&g()}if(!a){const x=_.clientY-h;u-=x*this._step*this._arrowKeyMultiplier(_),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)}h=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,_,x,y,E)=>(p-_)/(x-_)*(E-y)+y,e=p=>{const _=this.$slider.getBoundingClientRect();let x=t(p,_.left,_.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{e(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,o,l;const h=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),a=!1},c=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,l=p.touches[0].clientY,a=!0):h(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(a){const _=p.touches[0].clientX-o,x=p.touches[0].clientY-l;Math.abs(_)>Math.abs(x)?h(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),v=400;let g;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class X_ extends jn{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.innerHTML=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class q_ extends jn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Y_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function $_(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Kc=!1;class tl{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Kc&&o&&($_(Y_),Kc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(t,e,n,i,r){if(Object(n)===n)return new X_(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new W_(this,t,e,n,i,r);case"boolean":return new O_(this,t,e);case"string":return new q_(this,t,e);case"function":return new oo(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new G_(this,t,e,n)}addFolder(t){const e=new tl({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof oo||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof oo)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const j_=tl;function K_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Qs(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var jh={exports:{}};(function(s,t){(function(e){s.exports=e()})(function(){return function e(n,i,r){function a(h,c){if(!i[h]){if(!n[h]){var u=typeof Qs=="function"&&Qs;if(!c&&u)return u(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(f){var v=n[h][1][f];return a(v||f)},d,d.exports,e,n,i,r)}return i[h].exports}for(var o=typeof Qs=="function"&&Qs,l=0;l<r.length;l++)a(r[l]);return a}({1:[function(e,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,i){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,i){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var o=new r;a.prototype.setFromPoints=function(h,c,u,d){var f=this.lowerBound,v=this.upperBound,g=u;f.copy(h[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<h.length;m++){var p=h[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return c&&(c.vadd(f,f),c.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},a.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(h){var c=h.lowerBound.x;this.lowerBound.x>c&&(this.lowerBound.x=c);var u=h.upperBound.x;this.upperBound.x<u&&(this.upperBound.x=u);var c=h.lowerBound.y;this.lowerBound.y>c&&(this.lowerBound.y=c);var u=h.upperBound.y;this.upperBound.y<u&&(this.upperBound.y=u);var c=h.lowerBound.z;this.lowerBound.z>c&&(this.lowerBound.z=c);var u=h.upperBound.z;this.upperBound.z<u&&(this.upperBound.z=u)},a.prototype.overlaps=function(h){var c=this.lowerBound,u=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=u.x&&u.x<=f.x||c.x<=f.x&&f.x<=u.x)&&(d.y<=u.y&&u.y<=f.y||c.y<=f.y&&f.y<=u.y)&&(d.z<=u.z&&u.z<=f.z||c.z<=f.z&&f.z<=u.z)},a.prototype.contains=function(h){var c=this.lowerBound,u=this.upperBound,d=h.lowerBound,f=h.upperBound;return c.x<=d.x&&u.x>=f.x&&c.y<=d.y&&u.y>=f.y&&c.z<=d.z&&u.z>=f.z},a.prototype.getCorners=function(h,c,u,d,f,v,g,m){var p=this.lowerBound,_=this.upperBound;h.copy(p),c.set(_.x,p.y,p.z),u.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(h,c){var u=l,d=u[0],f=u[1],v=u[2],g=u[3],m=u[4],p=u[5],_=u[6],x=u[7];this.getCorners(d,f,v,g,m,p,_,x);for(var y=0;y!==8;y++){var E=u[y];h.pointToLocal(E,E)}return c.setFromPoints(u)},a.prototype.toWorldFrame=function(h,c){var u=l,d=u[0],f=u[1],v=u[2],g=u[3],m=u[4],p=u[5],_=u[6],x=u[7];this.getCorners(d,f,v,g,m,p,_,x);for(var y=0;y!==8;y++){var E=u[y];h.pointToWorld(E,E)}return c.setFromPoints(u)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var l=o;o=a,a=l}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,l){if(a=a.index,o=o.index,o>a){var h=o;o=a,a=h}this.matrix[(a*(a+1)>>1)+o-1]=l?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,i){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===r.SLEEPING)&&(m.type&h||m.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var c=new a;new a,new o,new a,l.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var x=c;m.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+m.boundingRadius,2),E=x.norm2();E<y&&(p.push(g),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var u={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,m){for(var p=u,_=d,x=f,y=g.length,E=0;E!==y;E++)_[E]=g[E],x[E]=m[E];g.length=0,m.length=0;for(var E=0;E!==y;E++){var b=_[E].id,A=x[E].id,R=b<A?b+","+A:A+","+b;p[R]=E,p.keys.push(R)}for(var E=0;E!==p.keys.length;E++){var R=p.keys.pop(),M=p[R];g.push(_[M]),m.push(x[M]),delete p[R]}},l.prototype.setWorld=function(g){};var v=new a;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,i){n.exports=l;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function l(c,u,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=c||new a(100,100,100),this.aabbMax=u||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new r,l.prototype.constructor=l;var h=new a;new a,l.prototype.collisionPairs=function(c,u,d){var f=c.numObjects(),v=c.bodies,at=this.aabbMax,j=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,x=p,y=1,E=at.x,b=at.y,A=at.z,R=j.x,M=j.y,S=j.z,P=g/(E-R),z=m/(b-M),V=p/(A-S),N=(E-R)/g,k=(b-M)/m,J=(A-S)/p,F=Math.sqrt(N*N+k*k+J*J)*.5,B=o.types,q=B.SPHERE,X=B.PLANE;B.BOX,B.COMPOUND,B.CONVEXPOLYHEDRON;for(var T=this.bins,O=this.binLengths,U=this.bins.length,D=0;D!==U;D++)O[D]=0;var L=Math.ceil,j=Math.min,at=Math.max;function et(Tt,Nt,G,Mt,pt,Qt,qt){var Yt=(Tt-R)*P|0,Wt=(Nt-M)*z|0,Ut=(G-S)*V|0,se=L((Mt-R)*P),$=L((pt-M)*z),St=L((Qt-S)*V);Yt<0?Yt=0:Yt>=g&&(Yt=g-1),Wt<0?Wt=0:Wt>=m&&(Wt=m-1),Ut<0?Ut=0:Ut>=p&&(Ut=p-1),se<0?se=0:se>=g&&(se=g-1),$<0?$=0:$>=m&&($=m-1),St<0?St=0:St>=p&&(St=p-1),Yt*=_,Wt*=x,Ut*=y,se*=_,$*=x,St*=y;for(var yt=Yt;yt<=se;yt+=_)for(var ut=Wt;ut<=$;ut+=x)for(var wt=Ut;wt<=St;wt+=y){var jt=yt+ut+wt;T[jt][O[jt]++]=qt}}for(var D=0;D!==f;D++){var K=v[D],ot=K.shape;switch(ot.type){case q:var ht=K.position.x,Y=K.position.y,Lt=K.position.z,ft=ot.radius;et(ht-ft,Y-ft,Lt-ft,ht+ft,Y+ft,Lt+ft,K);break;case X:ot.worldNormalNeedsUpdate&&ot.computeWorldNormal(K.quaternion);var nt=ot.worldNormal,ct=R+N*.5-K.position.x,Jt=M+k*.5-K.position.y,bt=S+J*.5-K.position.z,Gt=h;Gt.set(ct,Jt,bt);for(var Et=0,ne=0;Et!==g;Et++,ne+=_,Gt.y=Jt,Gt.x+=N)for(var re=0,I=0;re!==m;re++,I+=x,Gt.z=bt,Gt.y+=k)for(var C=0,Q=0;C!==p;C++,Q+=y,Gt.z+=J)if(Gt.dot(nt)<F){var vt=ne+I+Q;T[vt][O[vt]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),et(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var D=0;D!==U;D++){var dt=O[D];if(dt>1)for(var xt=T[D],Et=0;Et!==dt;Et++)for(var K=xt[Et],re=0;re!==Et;re++){var Ht=xt[re];this.needBroadphaseCollision(K,Ht)&&this.intersectionTest(K,Ht,u,d)}}this.makePairsUnique(u,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,i){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,h,c){var u=l.bodies,d=u.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=u[f],m=u[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,h,c)},new a,o.prototype.aabbQuery=function(l,h,c){c=c||[];for(var u=0;u<l.bodies.length;u++){var d=l.bodies[u];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&c.push(d)}return c}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var l=o;o=a,a=l}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,l){if(a=a.id,o=o.id,o>a){var h=o;o=a,a=h}l?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,i){n.exports=u;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),h=e("../shapes/Shape"),c=e("../collision/AABB");function u(U,D){this.from=U?U.clone():new r,this.to=D?D.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=u.ANY,this.result=new l,this.hasHit=!1,this.callback=function(L){}}u.prototype.constructor=u,u.CLOSEST=1,u.ANY=2,u.ALL=4;var d=new c,f=[];u.prototype.intersectWorld=function(U,D){return this.mode=D.mode||u.ANY,this.result=D.result||new l,this.skipBackfaces=!!D.skipBackfaces,this.collisionFilterMask=typeof D.collisionFilterMask<"u"?D.collisionFilterMask:-1,this.collisionFilterGroup=typeof D.collisionFilterGroup<"u"?D.collisionFilterGroup:-1,D.from&&this.from.copy(D.from),D.to&&this.to.copy(D.to),this.callback=D.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,U.broadphase.aabbQuery(U,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;u.pointInTriangle=m;function m(U,D,L,j){j.vsub(D,X),L.vsub(D,v),U.vsub(D,g);var at=X.dot(X),et=X.dot(v),K=X.dot(g),ot=v.dot(v),ht=v.dot(g),Y,Lt;return(Y=ot*K-et*ht)>=0&&(Lt=at*ht-et*K)>=0&&Y+Lt<at*ot-et*et}var p=new r,_=new a;u.prototype.intersectBody=function(U,D){D&&(this.result=D,this._updateDirection());var L=this.checkCollisionResponse;if(!(L&&!U.collisionResponse)&&!(!(this.collisionFilterGroup&U.collisionFilterMask)||!(U.collisionFilterGroup&this.collisionFilterMask)))for(var j=p,at=_,et=0,K=U.shapes.length;et<K;et++){var ot=U.shapes[et];if(!(L&&!ot.collisionResponse)&&(U.quaternion.mult(U.shapeOrientations[et],at),U.quaternion.vmult(U.shapeOffsets[et],j),j.vadd(U.position,j),this.intersectShape(ot,at,j,U),this.result._shouldStop))break}},u.prototype.intersectBodies=function(U,D){D&&(this.result=D,this._updateDirection());for(var L=0,j=U.length;!this.result._shouldStop&&L<j;L++)this.intersectBody(U[L])},u.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},u.prototype.intersectShape=function(U,D,L,j){var at=this.from,et=O(at,this._direction,L);if(!(et>U.boundingSphereRadius)){var K=this[U.type];K&&K.call(this,U,D,L,j)}},new r,new r;var x=new r,y=new r,E=new r,b=new r;new r,new l,u.prototype.intersectBox=function(U,D,L,j){return this.intersectConvex(U.convexPolyhedronRepresentation,D,L,j)},u.prototype[h.types.BOX]=u.prototype.intersectBox,u.prototype.intersectPlane=function(U,D,L,j){var at=this.from,et=this.to,K=this._direction,ot=new r(0,0,1);D.vmult(ot,ot);var ht=new r;at.vsub(L,ht);var Y=ht.dot(ot);et.vsub(L,ht);var Lt=ht.dot(ot);if(!(Y*Lt>0)&&!(at.distanceTo(et)<Y)){var ft=ot.dot(K);if(!(Math.abs(ft)<this.precision)){var nt=new r,ct=new r,Jt=new r;at.vsub(L,nt);var bt=-ot.dot(nt)/ft;K.scale(bt,ct),at.vadd(ct,Jt),this.reportIntersection(ot,Jt,U,j,-1)}}},u.prototype[h.types.PLANE]=u.prototype.intersectPlane,u.prototype.getAABB=function(U){var D=this.to,L=this.from;U.lowerBound.x=Math.min(D.x,L.x),U.lowerBound.y=Math.min(D.y,L.y),U.lowerBound.z=Math.min(D.z,L.z),U.upperBound.x=Math.max(D.x,L.x),U.upperBound.y=Math.max(D.y,L.y),U.upperBound.z=Math.max(D.z,L.z)};var A={faceList:[0]};u.prototype.intersectHeightfield=function(U,D,L,j){U.data,U.elementSize;var at=new r,et=new u(this.from,this.to);o.pointToLocalFrame(L,D,et.from,et.from),o.pointToLocalFrame(L,D,et.to,et.to);var K=[],ot=null,ht=null,Y=null,Lt=null,ft=U.getIndexOfPosition(et.from.x,et.from.y,K,!1);if(ft&&(ot=K[0],ht=K[1],Y=K[0],Lt=K[1]),ft=U.getIndexOfPosition(et.to.x,et.to.y,K,!1),ft&&((ot===null||K[0]<ot)&&(ot=K[0]),(Y===null||K[0]>Y)&&(Y=K[0]),(ht===null||K[1]<ht)&&(ht=K[1]),(Lt===null||K[1]>Lt)&&(Lt=K[1])),ot!==null){var nt=[];U.getRectMinMax(ot,ht,Y,Lt,nt),nt[0],nt[1];for(var ct=ot;ct<=Y;ct++)for(var Jt=ht;Jt<=Lt;Jt++){if(this.result._shouldStop||(U.getConvexTrianglePillar(ct,Jt,!1),o.pointToWorldFrame(L,D,U.pillarOffset,at),this.intersectConvex(U.pillarConvex,D,at,j,A),this.result._shouldStop))return;U.getConvexTrianglePillar(ct,Jt,!0),o.pointToWorldFrame(L,D,U.pillarOffset,at),this.intersectConvex(U.pillarConvex,D,at,j,A)}}},u.prototype[h.types.HEIGHTFIELD]=u.prototype.intersectHeightfield;var R=new r,M=new r;u.prototype.intersectSphere=function(U,D,L,j){var at=this.from,et=this.to,K=U.radius,ot=Math.pow(et.x-at.x,2)+Math.pow(et.y-at.y,2)+Math.pow(et.z-at.z,2),ht=2*((et.x-at.x)*(at.x-L.x)+(et.y-at.y)*(at.y-L.y)+(et.z-at.z)*(at.z-L.z)),Y=Math.pow(at.x-L.x,2)+Math.pow(at.y-L.y,2)+Math.pow(at.z-L.z,2)-Math.pow(K,2),Lt=Math.pow(ht,2)-4*ot*Y,ft=R,nt=M;if(!(Lt<0))if(Lt===0)at.lerp(et,Lt,ft),ft.vsub(L,nt),nt.normalize(),this.reportIntersection(nt,ft,U,j,-1);else{var ct=(-ht-Math.sqrt(Lt))/(2*ot),Jt=(-ht+Math.sqrt(Lt))/(2*ot);if(ct>=0&&ct<=1&&(at.lerp(et,ct,ft),ft.vsub(L,nt),nt.normalize(),this.reportIntersection(nt,ft,U,j,-1)),this.result._shouldStop)return;Jt>=0&&Jt<=1&&(at.lerp(et,Jt,ft),ft.vsub(L,nt),nt.normalize(),this.reportIntersection(nt,ft,U,j,-1))}},u.prototype[h.types.SPHERE]=u.prototype.intersectSphere;var S=new r;new r,new r;var P=new r;u.prototype.intersectConvex=function(D,L,j,at,et){for(var K=S,ot=P,ht=et&&et.faceList||null,Y=D.faces,Lt=D.vertices,ft=D.faceNormals,nt=this._direction,ct=this.from,Jt=this.to,bt=ct.distanceTo(Jt),Gt=ht?ht.length:Y.length,Et=this.result,ne=0;!Et._shouldStop&&ne<Gt;ne++){var re=ht?ht[ne]:ne,I=Y[re],C=ft[re],Q=L,vt=j;ot.copy(Lt[I[0]]),Q.vmult(ot,ot),ot.vadd(vt,ot),ot.vsub(ct,ot),Q.vmult(C,K);var dt=nt.dot(K);if(!(Math.abs(dt)<this.precision)){var xt=K.dot(ot)/dt;if(!(xt<0)){nt.mult(xt,x),x.vadd(ct,x),y.copy(Lt[I[0]]),Q.vmult(y,y),vt.vadd(y,y);for(var Ht=1;!Et._shouldStop&&Ht<I.length-1;Ht++){E.copy(Lt[I[Ht]]),b.copy(Lt[I[Ht+1]]),Q.vmult(E,E),Q.vmult(b,b),vt.vadd(E,E),vt.vadd(b,b);var Tt=x.distanceTo(ct);!(m(x,y,E,b)||m(x,E,y,b))||Tt>bt||this.reportIntersection(K,x,D,at,re)}}}}},u.prototype[h.types.CONVEXPOLYHEDRON]=u.prototype.intersectConvex;var z=new r,V=new r,N=new r,k=new r,J=new r,F=new r;new c;var B=[],q=new o;u.prototype.intersectTrimesh=function(D,L,j,at,et){var K=z,ot=B,ht=q,Y=P,Lt=V,ft=N,nt=k,ct=F,Jt=J;et&&et.faceList;var bt=D.indices;D.vertices,D.faceNormals;var Gt=this.from,Et=this.to,ne=this._direction;ht.position.copy(j),ht.quaternion.copy(L),o.vectorToLocalFrame(j,L,ne,Lt),o.pointToLocalFrame(j,L,Gt,ft),o.pointToLocalFrame(j,L,Et,nt);var re=ft.distanceSquared(nt);D.tree.rayQuery(this,ht,ot);for(var I=0,C=ot.length;!this.result._shouldStop&&I!==C;I++){var Q=ot[I];D.getNormal(Q,K),D.getVertex(bt[Q*3],y),y.vsub(ft,Y);var vt=Lt.dot(K),dt=K.dot(Y)/vt;if(!(dt<0)){Lt.scale(dt,x),x.vadd(ft,x),D.getVertex(bt[Q*3+1],E),D.getVertex(bt[Q*3+2],b);var xt=x.distanceSquared(ft);!(m(x,E,y,b)||m(x,y,E,b))||xt>re||(o.vectorToWorldFrame(L,K,Jt),o.pointToWorldFrame(j,L,x,ct),this.reportIntersection(Jt,ct,D,at,Q))}}ot.length=0},u.prototype[h.types.TRIMESH]=u.prototype.intersectTrimesh,u.prototype.reportIntersection=function(U,D,L,j,at){var et=this.from,K=this.to,ot=et.distanceTo(D),ht=this.result;if(!(this.skipBackfaces&&U.dot(this._direction)>0))switch(ht.hitFaceIndex=typeof at<"u"?at:-1,this.mode){case u.ALL:this.hasHit=!0,ht.set(et,K,U,D,L,j,ot),ht.hasHit=!0,this.callback(ht);break;case u.CLOSEST:(ot<ht.distance||!ht.hasHit)&&(this.hasHit=!0,ht.hasHit=!0,ht.set(et,K,U,D,L,j,ot));break;case u.ANY:this.hasHit=!0,ht.hasHit=!0,ht.set(et,K,U,D,L,j,ot),ht._shouldStop=!0;break}};var X=new r,T=new r;function O(U,D,L){L.vsub(U,X);var j=X.dot(D);D.mult(j,T),T.vadd(U,T);var at=L.distanceTo(T);return at}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,i){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,l,h,c,u,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(c),this.shape=u,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,i){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var c=l.indexOf(h.body);c!==-1&&l.splice(c,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var l=1,h=o.length;l<h;l++){for(var c=o[l],u=l-1;u>=0&&!(o[u].aabb.lowerBound.x<=c.aabb.lowerBound.x);u--)o[u+1]=o[u];o[u+1]=c}return o},a.insertionSortY=function(o){for(var l=1,h=o.length;l<h;l++){for(var c=o[l],u=l-1;u>=0&&!(o[u].aabb.lowerBound.y<=c.aabb.lowerBound.y);u--)o[u+1]=o[u];o[u+1]=c}return o},a.insertionSortZ=function(o){for(var l=1,h=o.length;l<h;l++){for(var c=o[l],u=l-1;u>=0&&!(o[u].aabb.lowerBound.z<=c.aabb.lowerBound.z);u--)o[u+1]=o[u];o[u+1]=c}return o},a.prototype.collisionPairs=function(o,l,h){var c=this.axisList,u=c.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==u;f++){var g=c[f];for(v=f+1;v<u;v++){var m=c[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,h)}}}},a.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,h=o.length,c=0;c!==h;c++){var u=o[c];u.aabbNeedsUpdate&&u.computeAABB()}l===0?a.insertionSortX(o):l===1?a.insertionSortY(o):l===2&&a.insertionSortZ(o)},a.checkBounds=function(o,l,h){var c,u;h===0?(c=o.position.x,u=l.position.x):h===1?(c=o.position.y,u=l.position.y):h===2&&(c=o.position.z,u=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,v=c+d,g=u-f;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,l=0,h=0,c=0,u=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],_=p.position.x;o+=_,l+=_*_;var x=p.position.y;h+=x,c+=x*x;var y=p.position.z;u+=y,d+=y*y}var E=l-o*o*g,b=c-h*h*g,A=d-u*u*g;E>b?E>A?this.axisIndex=0:this.axisIndex=2:b>A?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var c=this.axisIndex,u="x";c===1&&(u="y"),c===2&&(u="z");var d=this.axisList;l.lowerBound[u],l.upperBound[u];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(c,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,c,v,u,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new a(c,u,d),p=this.twistEquation=new o(c,u,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}h.prototype=new r,h.constructor=h,new l,new l,h.prototype.update=function(){var c=this.bodyA,u=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),c.vectorToWorldFrame(this.axisA,d.axisA),u.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),c.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),u.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,i){n.exports=a;var r=e("../utils/Utils");function a(o,l,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=a.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,i){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(l,h,c,u){r.call(this,l,h),typeof c>"u"&&(c=l.position.distanceTo(h.position)),typeof u>"u"&&(u=1e6),this.distance=c;var d=this.distanceEquation=new a(l,h);this.equations.push(d),d.minForce=-u,d.maxForce=u}o.prototype=new r,o.prototype.update=function(){var l=this.bodyA,h=this.bodyB,c=this.distanceEquation,u=this.distance*.5,d=c.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(u,c.ri),d.mult(-u,c.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;r.call(this,d,m,f,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);x.normalize();var y=this.rotationalEquation1=new a(d,f,v),E=this.rotationalEquation2=new a(d,f,v),b=this.motorEquation=new o(d,f,g);b.enabled=!1,this.equations.push(y,E,b)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var c=new l,u=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=c,_=u,x=this.axisA,y=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(x,p),f.quaternion.vmult(y,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,i){n.exports=l,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function l(h,c,u){u=u||{};var d=typeof u.maxForce<"u"?u.maxForce:1e6,f=new o,v=new o,g=new o;h.position.vadd(c.position,g),g.scale(.5,g),c.pointToLocalFrame(g,v),h.pointToLocalFrame(g,f),r.call(this,h,f,c,v,d);var m=this.rotationalEquation1=new a(h,c,u),p=this.rotationalEquation2=new a(h,c,u),_=this.rotationalEquation3=new a(h,c,u);this.equations.push(m,p,_)}l.prototype=new r,l.constructor=l,new o,new o,l.prototype.update=function(){var h=this.bodyA,c=this.bodyB;this.motorEquation;var u=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(o.UNIT_X,u.axisA),c.vectorToWorldFrame(o.UNIT_Y,u.axisB),h.vectorToWorldFrame(o.UNIT_Y,d.axisA),c.vectorToWorldFrame(o.UNIT_Z,d.axisB),h.vectorToWorldFrame(o.UNIT_Z,f.axisA),c.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,i){n.exports=l;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function l(h,c,u,d,f){r.call(this,h,u),f=typeof f<"u"?f:1e6,this.pivotA=c?c.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new a(h,u),g=this.equationY=new a(h,u),m=this.equationZ=new a(h,u);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var h=this.bodyA,c=this.bodyB,u=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,u.ri),c.quaternion.vmult(this.pivotB,u.rj),d.ri.copy(u.ri),d.rj.copy(u.rj),f.ri.copy(u.ri),f.rj.copy(u.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,i){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,c,u,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new a,o.prototype.constructor=o;var l=new r,h=new r;o.prototype.computeB=function(c){var u=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.angle)-f.dot(v),y=this.computeGW(),E=this.computeGiMf(),b=-x*u-y*d-c*E;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,i){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,p,_){_=typeof _<"u"?_:1e6,r.call(this,m,p,0,_),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var l=new a,h=new a,c=new a;o.prototype.computeB=function(m){var p=this.a,_=this.b,x=this.bi,y=this.bj,E=this.ri,b=this.rj,A=l,R=h,M=x.velocity,S=x.angularVelocity;x.force,x.torque;var P=y.velocity,z=y.angularVelocity;y.force,y.torque;var V=c,N=this.jacobianElementA,k=this.jacobianElementB,J=this.ni;E.cross(J,A),b.cross(J,R),J.negate(N.spatial),A.negate(N.rotational),k.spatial.copy(J),k.rotational.copy(R),V.copy(y.position),V.vadd(b,V),V.vsub(x.position,V),V.vsub(E,V);var F=J.dot(V),B=this.restitution+1,q=B*P.dot(J)-B*M.dot(J)+z.dot(R)-S.dot(A),X=this.computeGiMf(),T=-F*p-q*_-m*X;return T};var u=new a,d=new a,f=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=u,p=d,_=f,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(x,p),m.vsub(p,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,i){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,p,_){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var _=m,x=g,y=p;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},o.prototype.computeB=function(g,m,p){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*m-y*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.position,y=_.position;return g.spatial.dot(x)+m.spatial.dot(y)};var l=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.velocity,y=_.velocity,E=p.angularVelocity||l,b=_.angularVelocity||l;return g.multiplyVectors(x,E)+m.multiplyVectors(y,b)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.vlambda,y=_.vlambda,E=p.wlambda||l,b=_.wlambda||l;return g.multiplyVectors(x,E)+m.multiplyVectors(y,b)};var h=new a,c=new a,u=new a,d=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.force,y=p.torque,E=_.force,b=_.torque,A=p.invMassSolve,R=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(y,u):u.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(b,d):d.set(0,0,0),x.mult(A,h),E.mult(R,c),g.multiplyVectors(h,u)+m.multiplyVectors(c,d)};var f=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.invMassSolve,y=_.invMassSolve,E=p.invInertiaWorldSolve,b=_.invInertiaWorldSolve,A=x+y;return E&&(E.vmult(g.rotational,f),A+=f.dot(g.rotational)),b&&(b.vmult(m.rotational,f),A+=f.dot(m.rotational)),A};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,x=this.bj,y=v;m.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),p.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(p.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,i){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(c,u,d){r.call(this,c,u,-d,d),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var l=new a,h=new a;o.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=h,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),E=-x*u-c*y;return E}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,i){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,u,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,c,u,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var l=new r,h=new r;o.prototype.computeB=function(c){var u=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-f.dot(v),y=this.computeGW(),E=this.computeGiMf(),b=-x*u-y*d-c*E;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,i){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(l,h,c){c=typeof c<"u"?c:1e6,a.call(this,l,h,-c,c),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var c=this.axisA,u=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(c),u.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*h-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,i){var r=e("../utils/Utils");n.exports=a;function a(o,l,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,i){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,i){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,i){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},a.prototype.getTrace=function(l){var l=l||new r,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},a.prototype.vmult=function(o,l){l=l||new r;var h=this.elements,c=o.x,u=o.y,d=o.z;return l.x=h[0]*c+h[1]*u+h[2]*d,l.y=h[3]*c+h[4]*u+h[5]*d,l.z=h[6]*c+h[7]*u+h[8]*d,l},a.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},a.prototype.mmult=function(o,l){for(var h=l||new a,c=0;c<3;c++)for(var u=0;u<3;u++){for(var d=0,f=0;f<3;f++)d+=o.elements[c+f*3]*this.elements[f+u*3];h.elements[c+u*3]=d}return h},a.prototype.scale=function(o,l){l=l||new a;for(var h=this.elements,c=l.elements,u=0;u!==3;u++)c[3*u+0]=o.x*h[3*u+0],c[3*u+1]=o.y*h[3*u+1],c[3*u+2]=o.z*h[3*u+2];return l},a.prototype.solve=function(o,l){l=l||new r;for(var h=3,c=4,u=[],d=0;d<h*c;d++)u.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)u[d+c*f]=this.elements[d+3*f];u[3+4*0]=o.x,u[3+4*1]=o.y,u[3+4*2]=o.z;var v=3,g=v,m,p=4,_;do{if(d=g-v,u[d+c*d]===0){for(f=d+1;f<g;f++)if(u[d+c*f]!==0){m=p;do _=p-m,u[_+c*d]+=u[_+c*f];while(--m);break}}if(u[d+c*d]!==0)for(f=d+1;f<g;f++){var x=u[d+c*f]/u[d+c*d];m=p;do _=p-m,u[_+c*f]=_<=d?0:u[_+c*f]-u[_+c*d]*x;while(--m)}}while(--v);if(l.z=u[2*c+3]/u[2*c+2],l.y=(u[1*c+3]-u[1*c+2]*l.z)/u[1*c+1],l.x=(u[0*c+3]-u[0*c+2]*l.z-u[0*c+1]*l.y)/u[0*c+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},a.prototype.e=function(o,l,h){if(h===void 0)return this.elements[l+3*o];this.elements[l+3*o]=h},a.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},a.prototype.toString=function(){for(var o="",l=",",h=0;h<9;h++)o+=this.elements[h]+l;return o},a.prototype.reverse=function(o){o=o||new a;for(var l=3,h=6,c=[],u=0;u<l*h;u++)c.push(0);var u,d;for(u=0;u<3;u++)for(d=0;d<3;d++)c[u+h*d]=this.elements[u+3*d];c[3+6*0]=1,c[3+6*1]=0,c[3+6*2]=0,c[4+6*0]=0,c[4+6*1]=1,c[4+6*2]=0,c[5+6*0]=0,c[5+6*1]=0,c[5+6*2]=1;var f=3,v=f,g,m=h,p;do{if(u=v-f,c[u+h*u]===0){for(d=u+1;d<v;d++)if(c[u+h*d]!==0){g=m;do p=m-g,c[p+h*u]+=c[p+h*d];while(--g);break}}if(c[u+h*u]!==0)for(d=u+1;d<v;d++){var _=c[u+h*d]/c[u+h*u];g=m;do p=m-g,c[p+h*d]=p<=u?0:c[p+h*d]-c[p+h*u]*_;while(--g)}}while(--f);u=2;do{d=u-1;do{var _=c[u+h*d]/c[u+h*u];g=h;do p=h-g,c[p+h*d]=c[p+h*d]-c[p+h*u]*_;while(--g)}while(d--)}while(--u);u=2;do{var _=1/c[u+h*u];g=h;do p=h-g,c[p+h*u]=c[p+h*u]*_;while(--g)}while(u--);u=2;do{d=2;do{if(p=c[l+d+h*u],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(u,d,p)}while(d--)}while(u--);return o},a.prototype.setRotationFromQuaternion=function(o){var l=o.x,h=o.y,c=o.z,u=o.w,d=l+l,f=h+h,v=c+c,g=l*d,m=l*f,p=l*v,_=h*f,x=h*v,y=c*v,E=u*d,b=u*f,A=u*v,R=this.elements;return R[3*0+0]=1-(_+y),R[3*0+1]=m-A,R[3*0+2]=p+b,R[3*1+0]=m+A,R[3*1+1]=1-(g+y),R[3*1+2]=x-E,R[3*2+0]=p-b,R[3*2+1]=x+E,R[3*2+2]=1-(g+_),this},a.prototype.transpose=function(o){o=o||new a;for(var l=o.elements,h=this.elements,c=0;c!==3;c++)for(var u=0;u!==3;u++)l[3*c+u]=h[3*u+c];return o}},{"./Vec3":30}],28:[function(e,n,i){n.exports=a;var r=e("./Vec3");function a(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},a.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new r,l=new r;a.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new r,c=new r,u=new r;a.prototype.mult=function(d,f){f=f||new a;var v=this.w,g=h,m=c,p=u;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},a.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new a,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},a.prototype.conjugate=function(d){return d=d||new a,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},a.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,_=this.y,x=this.z,y=this.w,E=y*v+_*m-x*g,b=y*g+x*v-p*m,A=y*m+p*g-_*v,R=-p*v-_*g-x*m;return f.x=E*y+R*-p+b*-x-A*-_,f.y=b*y+R*-_+A*-p-E*-x,f.z=A*y+R*-x+E*-_-b*-p,f},a.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},a.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,_=this.y,x=this.z,y=this.w;switch(f){case"YZX":var E=p*_+x*y;if(E>.499&&(v=2*Math.atan2(p,y),g=Math.PI/2,m=0),E<-.499&&(v=-2*Math.atan2(p,y),g=-Math.PI/2,m=0),isNaN(v)){var b=p*p,A=_*_,R=x*x;v=Math.atan2(2*_*y-2*p*x,1-2*A-2*R),g=Math.asin(2*E),m=Math.atan2(2*p*y-2*_*x,1-2*b-2*R)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},a.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(v/2),x=Math.sin(d/2),y=Math.sin(f/2),E=Math.sin(v/2);return g==="XYZ"?(this.x=x*p*_+m*y*E,this.y=m*y*_-x*p*E,this.z=m*p*E+x*y*_,this.w=m*p*_-x*y*E):g==="YXZ"?(this.x=x*p*_+m*y*E,this.y=m*y*_-x*p*E,this.z=m*p*E-x*y*_,this.w=m*p*_+x*y*E):g==="ZXY"?(this.x=x*p*_-m*y*E,this.y=m*y*_+x*p*E,this.z=m*p*E+x*y*_,this.w=m*p*_-x*y*E):g==="ZYX"?(this.x=x*p*_-m*y*E,this.y=m*y*_+x*p*E,this.z=m*p*E-x*y*_,this.w=m*p*_+x*y*E):g==="YZX"?(this.x=x*p*_+m*y*E,this.y=m*y*_+x*p*E,this.z=m*p*E-x*y*_,this.w=m*p*_-x*y*E):g==="XZY"&&(this.x=x*p*_-m*y*E,this.y=m*y*_-x*p*E,this.z=m*p*E+x*y*_,this.w=m*p*_+x*y*E),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,i){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new a,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new a;o.pointToLocalFrame=function(h,c,u,f){var f=f||new r;return u.vsub(h,f),c.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(h,c){return o.pointToLocalFrame(this.position,this.quaternion,h,c)},o.pointToWorldFrame=function(h,c,u,f){var f=f||new r;return c.vmult(u,f),f.vadd(h,f),f},o.prototype.pointToWorld=function(h,c){return o.pointToWorldFrame(this.position,this.quaternion,h,c)},o.prototype.vectorToWorldFrame=function(h,u){var u=u||new r;return this.quaternion.vmult(h,u),u},o.vectorToWorldFrame=function(h,c,u){return h.vmult(c,u),u},o.vectorToLocalFrame=function(h,c,u,f){var f=f||new r;return c.w*=-1,c.vmult(u,f),c.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,i){n.exports=a;var r=e("./Mat3");function a(c,u,d){this.x=c||0,this.y=u||0,this.z=d||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(c,u){var d=c.x,f=c.y,v=c.z,g=this.x,m=this.y,p=this.z;return u=u||new a,u.x=m*v-p*f,u.y=p*d-g*v,u.z=g*f-m*d,u},a.prototype.set=function(c,u,d){return this.x=c,this.y=u,this.z=d,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(c,u){if(u)u.x=c.x+this.x,u.y=c.y+this.y,u.z=c.z+this.z;else return new a(this.x+c.x,this.y+c.y,this.z+c.z)},a.prototype.vsub=function(c,u){if(u)u.x=this.x-c.x,u.y=this.y-c.y,u.z=this.z-c.z;else return new a(this.x-c.x,this.y-c.y,this.z-c.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var c=this.x,u=this.y,d=this.z,f=Math.sqrt(c*c+u*u+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},a.prototype.unit=function(c){c=c||new a;var u=this.x,d=this.y,f=this.z,v=Math.sqrt(u*u+d*d+f*f);return v>0?(v=1/v,c.x=u*v,c.y=d*v,c.z=f*v):(c.x=1,c.y=0,c.z=0),c},a.prototype.norm=function(){var c=this.x,u=this.y,d=this.z;return Math.sqrt(c*c+u*u+d*d)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(c){var u=this.x,d=this.y,f=this.z,v=c.x,g=c.y,m=c.z;return Math.sqrt((v-u)*(v-u)+(g-d)*(g-d)+(m-f)*(m-f))},a.prototype.distanceSquared=function(c){var u=this.x,d=this.y,f=this.z,v=c.x,g=c.y,m=c.z;return(v-u)*(v-u)+(g-d)*(g-d)+(m-f)*(m-f)},a.prototype.mult=function(c,u){u=u||new a;var d=this.x,f=this.y,v=this.z;return u.x=c*d,u.y=c*f,u.z=c*v,u},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(c){return this.x*c.x+this.y*c.y+this.z*c.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(c){return c=c||new a,c.x=-this.x,c.y=-this.y,c.z=-this.z,c};var o=new a,l=new a;a.prototype.tangents=function(c,u){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,c)):(g.set(0,1,0),f.cross(g,c)),f.cross(c,u)}else c.set(1,0,0),u.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this},a.prototype.lerp=function(c,u,d){var f=this.x,v=this.y,g=this.z;d.x=f+(c.x-f)*u,d.y=v+(c.y-v)*u,d.z=g+(c.z-g)*u},a.prototype.almostEquals=function(c,u){return u===void 0&&(u=1e-6),!(Math.abs(this.x-c.x)>u||Math.abs(this.y-c.y)>u||Math.abs(this.z-c.z)>u)},a.prototype.almostZero=function(c){return c===void 0&&(c=1e-6),!(Math.abs(this.x)>c||Math.abs(this.y)>c||Math.abs(this.z)>c)};var h=new a;a.prototype.isAntiparallelTo=function(c,u){return this.negate(h),h.almostEquals(c,u)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,i){n.exports=u;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var h=e("../collision/AABB"),c=e("../shapes/Box");function u(P){P=P||{},r.apply(this),this.id=u.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof P.collisionFilterGroup=="number"?P.collisionFilterGroup:1,this.collisionFilterMask=typeof P.collisionFilterMask=="number"?P.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,P.position&&this.position.copy(P.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,P.velocity&&this.velocity.copy(P.velocity),this.initVelocity=new a,this.force=new a;var z=typeof P.mass=="number"?P.mass:0;this.mass=z,this.invMass=z>0?1/z:0,this.material=P.material||null,this.linearDamping=typeof P.linearDamping=="number"?P.linearDamping:.01,this.type=z<=0?u.STATIC:u.DYNAMIC,typeof P.type==typeof u.STATIC&&(this.type=P.type),this.allowSleep=typeof P.allowSleep<"u"?P.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof P.sleepSpeedLimit<"u"?P.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof P.sleepTimeLimit<"u"?P.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new l,P.quaternion&&this.quaternion.copy(P.quaternion),this.initQuaternion=new l,this.angularVelocity=new a,P.angularVelocity&&this.angularVelocity.copy(P.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof P.fixedRotation<"u"?P.fixedRotation:!1,this.angularDamping=typeof P.angularDamping<"u"?P.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new a,P.shape&&this.addShape(P.shape),this.updateMassProperties()}u.prototype=new r,u.prototype.constructor=u,u.DYNAMIC=1,u.STATIC=2,u.KINEMATIC=4,u.AWAKE=0,u.SLEEPY=1,u.SLEEPING=2,u.idCounter=0,u.prototype.wakeUp=function(){var P=this.sleepState;this.sleepState=0,P===u.SLEEPING&&this.dispatchEvent({type:"wakeup"})},u.prototype.sleep=function(){this.sleepState=u.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},u.sleepyEvent={type:"sleepy"},u.sleepEvent={type:"sleep"},u.prototype.sleepTick=function(P){if(this.allowSleep){var z=this.sleepState,V=this.velocity.norm2()+this.angularVelocity.norm2(),N=Math.pow(this.sleepSpeedLimit,2);z===u.AWAKE&&V<N?(this.sleepState=u.SLEEPY,this.timeLastSleepy=P,this.dispatchEvent(u.sleepyEvent)):z===u.SLEEPY&&V>N?this.wakeUp():z===u.SLEEPY&&P-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(u.sleepEvent))}},u.prototype.updateSolveMassProperties=function(){this.sleepState===u.SLEEPING||this.type===u.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},u.prototype.pointToLocalFrame=function(P,V){var V=V||new a;return P.vsub(this.position,V),this.quaternion.conjugate().vmult(V,V),V},u.prototype.vectorToLocalFrame=function(P,V){var V=V||new a;return this.quaternion.conjugate().vmult(P,V),V},u.prototype.pointToWorldFrame=function(P,V){var V=V||new a;return this.quaternion.vmult(P,V),V.vadd(this.position,V),V},u.prototype.vectorToWorldFrame=function(P,V){var V=V||new a;return this.quaternion.vmult(P,V),V};var d=new a,f=new l;u.prototype.addShape=function(P,z,V){var N=new a,k=new l;return z&&N.copy(z),V&&k.copy(V),this.shapes.push(P),this.shapeOffsets.push(N),this.shapeOrientations.push(k),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},u.prototype.updateBoundingRadius=function(){for(var P=this.shapes,z=this.shapeOffsets,V=P.length,N=0,k=0;k!==V;k++){var J=P[k];J.updateBoundingSphereRadius();var F=z[k].norm(),B=J.boundingSphereRadius;F+B>N&&(N=F+B)}this.boundingRadius=N};var v=new h;u.prototype.computeAABB=function(){for(var P=this.shapes,z=this.shapeOffsets,V=this.shapeOrientations,N=P.length,k=d,J=f,F=this.quaternion,B=this.aabb,q=v,X=0;X!==N;X++){var T=P[X];V[X].mult(F,J),J.vmult(z[X],k),k.vadd(this.position,k),T.calculateWorldAABB(k,J,q.lowerBound,q.upperBound),X===0?B.copy(q):B.extend(q)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,u.prototype.updateInertiaWorld=function(P){var z=this.invInertia;if(!(z.x===z.y&&z.y===z.z&&!P)){var V=g,N=m;V.setRotationFromQuaternion(this.quaternion),V.transpose(N),V.scale(z,V),V.mmult(N,this.invInertiaWorld)}};var p=new a,_=new a;u.prototype.applyForce=function(P,z){if(this.type===u.DYNAMIC){var V=p;z.vsub(this.position,V);var N=_;V.cross(P,N),this.force.vadd(P,this.force),this.torque.vadd(N,this.torque)}};var x=new a,y=new a;u.prototype.applyLocalForce=function(P,z){if(this.type===u.DYNAMIC){var V=x,N=y;this.vectorToWorldFrame(P,V),this.pointToWorldFrame(z,N),this.applyForce(V,N)}};var E=new a,b=new a,A=new a;u.prototype.applyImpulse=function(P,z){if(this.type===u.DYNAMIC){var V=E;z.vsub(this.position,V);var N=b;N.copy(P),N.mult(this.invMass,N),this.velocity.vadd(N,this.velocity);var k=A;V.cross(P,k),this.invInertiaWorld.vmult(k,k),this.angularVelocity.vadd(k,this.angularVelocity)}};var R=new a,M=new a;u.prototype.applyLocalImpulse=function(P,z){if(this.type===u.DYNAMIC){var V=R,N=M;this.vectorToWorldFrame(P,V),this.pointToWorldFrame(z,N),this.applyImpulse(V,N)}};var S=new a;u.prototype.updateMassProperties=function(){var P=S;this.invMass=this.mass>0?1/this.mass:0;var z=this.inertia,V=this.fixedRotation;this.computeAABB(),P.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),c.calculateInertia(P,this.mass,z),this.invInertia.set(z.x>0&&!V?1/z.x:0,z.y>0&&!V?1/z.y:0,z.z>0&&!V?1/z.z:0),this.updateInertiaWorld(!0)},u.prototype.getVelocityAtWorldPoint=function(P,z){var V=new a;return P.vsub(this.position,V),this.angularVelocity.cross(V,z),this.velocity.vadd(z,z),z}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,i){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=h;function h(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new r,new r,new r;var c=new r,u=new r,d=new r;new o,h.prototype.addWheel=function(F){F=F||{};var B=new l(F),q=this.wheelInfos.length;return this.wheelInfos.push(B),q},h.prototype.setSteeringValue=function(F,B){var q=this.wheelInfos[B];q.steering=F},new r,h.prototype.applyEngineForce=function(F,B){this.wheelInfos[B].engineForce=F},h.prototype.setBrake=function(F,B){this.wheelInfos[B].brake=F},h.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var B=this;this.preStepCallback=function(){B.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},h.prototype.getVehicleAxisWorld=function(F,B){B.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(B,B)},h.prototype.updateVehicle=function(F){for(var B=this.wheelInfos,q=B.length,X=this.chassisBody,T=0;T<q;T++)this.updateWheelTransform(T);this.currentVehicleSpeedKmHour=3.6*X.velocity.norm();var O=new r;this.getVehicleAxisWorld(this.indexForwardAxis,O),O.dot(X.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var T=0;T<q;T++)this.castRay(B[T]);this.updateSuspension(F);for(var U=new r,D=new r,T=0;T<q;T++){var L=B[T],j=L.suspensionForce;j>L.maxSuspensionForce&&(j=L.maxSuspensionForce),L.raycastResult.hitNormalWorld.scale(j*F,U),L.raycastResult.hitPointWorld.vsub(X.position,D),X.applyImpulse(U,L.raycastResult.hitPointWorld)}this.updateFriction(F);var at=new r,et=new r,K=new r;for(T=0;T<q;T++){var L=B[T];X.getVelocityAtWorldPoint(L.chassisConnectionPointWorld,K);var ot=1;switch(this.indexUpAxis){case 1:ot=-1;break}if(L.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var ht=et.dot(L.raycastResult.hitNormalWorld);L.raycastResult.hitNormalWorld.scale(ht,at),et.vsub(at,et);var Y=et.dot(K);L.deltaRotation=ot*Y*F/L.radius}(L.sliding||!L.isInContact)&&L.engineForce!==0&&L.useCustomSlidingRotationalSpeed&&(L.deltaRotation=(L.engineForce>0?1:-1)*L.customSlidingRotationalSpeed*F),Math.abs(L.brake)>Math.abs(L.engineForce)&&(L.deltaRotation=0),L.rotation+=L.deltaRotation,L.deltaRotation*=.99}},h.prototype.updateSuspension=function(F){for(var B=this.chassisBody,q=B.mass,X=this.wheelInfos,T=X.length,O=0;O<T;O++){var U=X[O];if(U.isInContact){var D,L=U.suspensionRestLength,j=U.suspensionLength,at=L-j;D=U.suspensionStiffness*at*U.clippedInvContactDotSuspension;var et=U.suspensionRelativeVelocity,K;et<0?K=U.dampingCompression:K=U.dampingRelaxation,D-=K*et,U.suspensionForce=D*q,U.suspensionForce<0&&(U.suspensionForce=0)}else U.suspensionForce=0}},h.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;h.prototype.castRay=function(F){var B=f,q=v;this.updateWheelTransformWorld(F);var X=this.chassisBody,T=-1,O=F.suspensionRestLength+F.radius;F.directionWorld.scale(O,B);var U=F.chassisConnectionPointWorld;U.vadd(B,q);var D=F.raycastResult;D.reset();var L=X.collisionResponse;X.collisionResponse=!1,this.world.rayTest(U,q,D),X.collisionResponse=L;var j=D.body;if(F.raycastResult.groundObject=0,j){T=D.distance,F.raycastResult.hitNormalWorld=D.hitNormalWorld,F.isInContact=!0;var at=D.distance;F.suspensionLength=at-F.radius;var et=F.suspensionRestLength-F.maxSuspensionTravel,K=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<et&&(F.suspensionLength=et),F.suspensionLength>K&&(F.suspensionLength=K,F.raycastResult.reset());var ot=F.raycastResult.hitNormalWorld.dot(F.directionWorld),ht=new r;X.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,ht);var Y=F.raycastResult.hitNormalWorld.dot(ht);if(ot>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var Lt=-1/ot;F.suspensionRelativeVelocity=Y*Lt,F.clippedInvContactDotSuspension=Lt}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return T},h.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var B=this.chassisBody;B.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),B.vectorToWorldFrame(F.directionLocal,F.directionWorld),B.vectorToWorldFrame(F.axleLocal,F.axleWorld)},h.prototype.updateWheelTransform=function(F){var B=c,q=u,X=d,T=this.wheelInfos[F];this.updateWheelTransformWorld(T),T.directionLocal.scale(-1,B),q.copy(T.axleLocal),B.cross(q,X),X.normalize(),q.normalize();var O=T.steering,U=new a;U.setFromAxisAngle(B,O);var D=new a;D.setFromAxisAngle(q,T.rotation);var L=T.worldTransform.quaternion;this.chassisBody.quaternion.mult(U,L),L.mult(D,L),L.normalize();var j=T.worldTransform.position;j.copy(T.directionWorld),j.scale(T.suspensionLength,j),j.vadd(T.chassisConnectionPointWorld,j)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new r,p=[],_=[],x=1;h.prototype.updateFriction=function(F){for(var B=m,q=this.wheelInfos,X=q.length,T=this.chassisBody,O=_,U=p,D=0;D<X;D++){var L=q[D],j=L.raycastResult.body;L.sideImpulse=0,L.forwardImpulse=0,O[D]||(O[D]=new r),U[D]||(U[D]=new r)}for(var D=0;D<X;D++){var L=q[D],j=L.raycastResult.body;if(j){var at=U[D],et=this.getWheelTransformWorld(D);et.vectorToWorldFrame(g[this.indexRightAxis],at);var K=L.raycastResult.hitNormalWorld,ot=at.dot(K);K.scale(ot,B),at.vsub(B,at),at.normalize(),K.cross(at,O[D]),O[D].normalize(),L.sideImpulse=J(T,L.raycastResult.hitPointWorld,j,L.raycastResult.hitPointWorld,at),L.sideImpulse*=x}}var ht=1,Y=.5;this.sliding=!1;for(var D=0;D<X;D++){var L=q[D],j=L.raycastResult.body,Lt=0;if(L.slipInfo=1,j){var ft=0,nt=L.brake?L.brake:ft;Lt=A(T,j,L.raycastResult.hitPointWorld,O[D],nt),Lt+=L.engineForce*F;var ct=nt/Lt;L.slipInfo*=ct}if(L.forwardImpulse=0,L.skidInfo=1,j){L.skidInfo=1;var Jt=L.suspensionForce*F*L.frictionSlip,bt=Jt,Gt=Jt*bt;L.forwardImpulse=Lt;var Et=L.forwardImpulse*Y,ne=L.sideImpulse*ht,re=Et*Et+ne*ne;if(L.sliding=!1,re>Gt){this.sliding=!0,L.sliding=!0;var ct=Jt/Math.sqrt(re);L.skidInfo*=ct}}}if(this.sliding)for(var D=0;D<X;D++){var L=q[D];L.sideImpulse!==0&&L.skidInfo<1&&(L.forwardImpulse*=L.skidInfo,L.sideImpulse*=L.skidInfo)}for(var D=0;D<X;D++){var L=q[D],I=new r;if(I.copy(L.raycastResult.hitPointWorld),L.forwardImpulse!==0){var C=new r;O[D].scale(L.forwardImpulse,C),T.applyImpulse(C,I)}if(L.sideImpulse!==0){var j=L.raycastResult.body,Q=new r;Q.copy(L.raycastResult.hitPointWorld);var vt=new r;U[D].scale(L.sideImpulse,vt),T.pointToLocalFrame(I,I),I["xyz"[this.indexUpAxis]]*=L.rollInfluence,T.pointToWorldFrame(I,I),T.applyImpulse(vt,I),vt.scale(-1,vt),j.applyImpulse(vt,Q)}}};var y=new r,E=new r,b=new r;function A(F,B,q,X,T){var O=0,U=q,D=y,L=E,j=b;F.getVelocityAtWorldPoint(U,D),B.getVelocityAtWorldPoint(U,L),D.vsub(L,j);var at=X.dot(j),et=z(F,q,X),K=z(B,q,X),ot=1,ht=ot/(et+K);return O=-at*ht,T<O&&(O=T),O<-T&&(O=-T),O}var R=new r,M=new r,S=new r,P=new r;function z(F,B,q){var X=R,T=M,O=S,U=P;return B.vsub(F.position,X),X.cross(q,T),F.invInertiaWorld.vmult(T,U),U.cross(X,O),F.invMass+q.dot(O)}var V=new r,N=new r,k=new r;function J(F,B,q,X,T,ot){var U=T.norm2();if(U>1.1)return 0;var D=V,L=N,j=k;F.getVelocityAtWorldPoint(B,D),q.getVelocityAtWorldPoint(X,L),D.vsub(L,j);var at=T.dot(j),et=.2,K=1/(F.invMass+q.invMass),ot=-et*at*K;return ot}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,i){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),l=e("../math/Vec3"),h=e("../constraints/HingeConstraint");n.exports=c;function c(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}c.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new h(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},c.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),_=g.x,x=g.y;this.constraints[v].axisA.set(m*_-p*x,p*_+m*x,0)},c.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},c.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var u=new l;c.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},c.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,u),m.vectorToWorldFrame(u,u),p.vadd(u,p)},c.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},c.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},c.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new l;c.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,i){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,x=o,y=0;y!==m;y++){var E=this.particles[y];E.position.vsub(v.position,x),p!==E.id&&x.norm2()<_&&g.push(E)}};var l=new r,h=new r,c=new r,u=new r,d=new r,f=new r;a.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var E=y.length,b=0,A=0;A!==E;A++){x.position.vsub(y[A].position,g);var R=g.norm(),M=this.w(R);b+=y[A].mass*M}this.densities[_]=b,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var S=h,P=c,z=u,V=d,N=f,_=0;_!==v;_++){var k=this.particles[_];S.set(0,0,0),P.set(0,0,0);for(var J,F,y=this.neighbors[_],E=y.length,A=0;A!==E;A++){var B=y[A];k.position.vsub(B.position,V);var q=V.norm();J=-B.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[A]/(this.densities[A]*this.densities[A]+p)),this.gradw(V,z),z.mult(J,z),S.vadd(z,S),B.velocity.vsub(k.velocity,N),N.mult(1/(1e-4+this.densities[_]*this.densities[A])*this.viscosity*B.mass,N),F=this.nablaw(q),N.mult(F,N),P.vadd(N,P)}P.mult(k.mass,P),S.mult(k.mass,S),k.force.vadd(P,k.force),k.force.vadd(S,k.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,i){var r=e("../math/Vec3");n.exports=a;function a(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}a.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},a.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},a.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},a.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,l=new r,h=new r,c=new r,u=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;a.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,E=this.bodyA,b=this.bodyB,A=o,R=l,M=h,S=c,P=p,z=u,V=d,N=f,k=v,J=g,F=m;this.getWorldAnchorA(z),this.getWorldAnchorB(V),z.vsub(E.position,N),V.vsub(b.position,k),V.vsub(z,A);var B=A.norm();R.copy(A),R.normalize(),b.velocity.vsub(E.velocity,M),b.angularVelocity.cross(k,P),M.vadd(P,M),E.angularVelocity.cross(N,P),M.vsub(P,M),R.mult(-_*(B-y)-x*M.dot(R),S),E.force.vsub(S,E.force),b.force.vadd(S,b.force),N.cross(S,J),k.cross(S,F),E.torque.vsub(J,E.torque),b.torque.vadd(F,b.torque)}},{"../math/Vec3":30}],36:[function(e,n,i){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var u=new r,c=new r,u=new r;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,c),d.getVelocityAtWorldPoint(c,u);var g=f.hitNormalWorld.dot(u);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,i){n.exports=l;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function l(u){r.call(this),this.type=r.types.BOX,this.halfExtents=u,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var u=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=a,g=[new v(-u,-d,-f),new v(u,-d,-f),new v(u,d,-f),new v(-u,d,-f),new v(-u,-d,f),new v(u,-d,f),new v(u,d,f),new v(-u,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(u,d){return d=d||new a,l.calculateInertia(this.halfExtents,u,d),d},l.calculateInertia=function(u,d,f){var v=u;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(u,d){var f=u,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new a;new a,l.prototype.forEachWorldCorner=function(u,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)h.set(g[m][0],g[m][1],g[m][2]),d.vmult(h,h),u.vadd(h,h),f(h.x,h.y,h.z)};var c=[new a,new a,new a,new a,new a,new a,new a,new a];l.prototype.calculateWorldAABB=function(u,d,f,v){var g=this.halfExtents;c[0].set(g.x,g.y,g.z),c[1].set(-g.x,g.y,g.z),c[2].set(-g.x,-g.y,g.z),c[3].set(-g.x,-g.y,-g.z),c[4].set(g.x,-g.y,-g.z),c[5].set(g.x,g.y,-g.z),c[6].set(-g.x,g.y,-g.z),c[7].set(g.x,-g.y,g.z);var m=c[0];d.vmult(m,m),u.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=c[p];d.vmult(m,m),u.vadd(m,m);var _=m.x,x=m.y,y=m.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<f.x&&(f.x=_),x<f.y&&(f.y=x),y<f.z&&(f.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,i){n.exports=l;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function l(T,O,U){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=T||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=O||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=U?U.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var h=new a;l.prototype.computeEdges=function(){var T=this.faces,O=this.vertices;O.length;var U=this.uniqueEdges;U.length=0;for(var D=h,L=0;L!==T.length;L++)for(var j=T[L],at=j.length,et=0;et!==at;et++){var K=(et+1)%at;O[j[et]].vsub(O[j[K]],D),D.normalize();for(var ot=!1,ht=0;ht!==U.length;ht++)if(U[ht].almostEquals(D)||U[ht].almostEquals(D)){ot=!0;break}ot||U.push(D.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var T=0;T<this.faces.length;T++){for(var O=0;O<this.faces[T].length;O++)if(!this.vertices[this.faces[T][O]])throw new Error("Vertex "+this.faces[T][O]+" not found!");var U=this.faceNormals[T]||new a;this.getFaceNormal(T,U),U.negate(U),this.faceNormals[T]=U;var D=this.vertices[this.faces[T][0]];if(U.dot(D)<0){console.error(".faceNormals["+T+"] = Vec3("+U.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var O=0;O<this.faces[T].length;O++)console.warn(".vertices["+this.faces[T][O]+"] = Vec3("+this.vertices[this.faces[T][O]].toString()+")")}}};var c=new a,u=new a;l.computeNormal=function(T,O,U,D){O.vsub(T,u),U.vsub(O,c),c.cross(u,D),D.isZero()||D.normalize()},l.prototype.getFaceNormal=function(T,O){var U=this.faces[T],D=this.vertices[U[0]],L=this.vertices[U[1]],j=this.vertices[U[2]];return l.computeNormal(D,L,j,O)};var d=new a;l.prototype.clipAgainstHull=function(T,O,U,D,L,j,at,et,K){for(var ot=d,ht=-1,Y=-Number.MAX_VALUE,Lt=0;Lt<U.faces.length;Lt++){ot.copy(U.faceNormals[Lt]),L.vmult(ot,ot);var ft=ot.dot(j);ft>Y&&(Y=ft,ht=Lt)}for(var nt=[],ct=U.faces[ht],Jt=ct.length,bt=0;bt<Jt;bt++){var Gt=U.vertices[ct[bt]],Et=new a;Et.copy(Gt),L.vmult(Et,Et),D.vadd(Et,Et),nt.push(Et)}ht>=0&&this.clipFaceAgainstHull(j,T,O,nt,at,et,K)};var f=new a,v=new a,g=new a,m=new a,p=new a,_=new a;l.prototype.findSeparatingAxis=function(T,O,U,D,L,j,at,et){var K=f,ot=v,ht=g,Y=m,Lt=p,ft=_,nt=Number.MAX_VALUE,ct=this;if(ct.uniqueAxes)for(var bt=0;bt!==ct.uniqueAxes.length;bt++){U.vmult(ct.uniqueAxes[bt],K);var Et=ct.testSepAxis(K,T,O,U,D,L);if(Et===!1)return!1;Et<nt&&(nt=Et,j.copy(K))}else for(var Jt=at?at.length:ct.faces.length,bt=0;bt<Jt;bt++){var Gt=at?at[bt]:bt;K.copy(ct.faceNormals[Gt]),U.vmult(K,K);var Et=ct.testSepAxis(K,T,O,U,D,L);if(Et===!1)return!1;Et<nt&&(nt=Et,j.copy(K))}if(T.uniqueAxes)for(var bt=0;bt!==T.uniqueAxes.length;bt++){L.vmult(T.uniqueAxes[bt],ot);var Et=ct.testSepAxis(ot,T,O,U,D,L);if(Et===!1)return!1;Et<nt&&(nt=Et,j.copy(ot))}else for(var ne=et?et.length:T.faces.length,bt=0;bt<ne;bt++){var Gt=et?et[bt]:bt;ot.copy(T.faceNormals[Gt]),L.vmult(ot,ot);var Et=ct.testSepAxis(ot,T,O,U,D,L);if(Et===!1)return!1;Et<nt&&(nt=Et,j.copy(ot))}for(var re=0;re!==ct.uniqueEdges.length;re++){U.vmult(ct.uniqueEdges[re],Y);for(var I=0;I!==T.uniqueEdges.length;I++)if(L.vmult(T.uniqueEdges[I],Lt),Y.cross(Lt,ft),!ft.almostZero()){ft.normalize();var C=ct.testSepAxis(ft,T,O,U,D,L);if(C===!1)return!1;C<nt&&(nt=C,j.copy(ft))}}return D.vsub(O,ht),ht.dot(j)>0&&j.negate(j),!0};var x=[],y=[];l.prototype.testSepAxis=function(T,O,U,D,L,j){var at=this;l.project(at,T,U,D,x),l.project(O,T,L,j,y);var et=x[0],K=x[1],ot=y[0],ht=y[1],Y=et-ht,Lt=ot-K,ft=Y<Lt?Y:Lt;return ft};var E=new a,b=new a;l.prototype.calculateLocalInertia=function(T,O){this.computeLocalAABB(E,b);var U=b.x-E.x,D=b.y-E.y,L=b.z-E.z;O.x=1/12*T*(2*D*2*D+2*L*2*L),O.y=1/12*T*(2*U*2*U+2*L*2*L),O.z=1/12*T*(2*D*2*D+2*U*2*U)},l.prototype.getPlaneConstantOfFace=function(T){var O=this.faces[T],U=this.faceNormals[T],D=this.vertices[O[0]],L=-U.dot(D);return L};var A=new a,R=new a,M=new a,S=new a,P=new a,z=new a,V=new a,N=new a;l.prototype.clipFaceAgainstHull=function(T,O,U,D,L,j,at){for(var et=A,K=R,ot=M,ht=S,Y=P,Lt=z,ft=V,nt=N,ct=this,Jt=[],bt=D,Gt=Jt,Et=-1,ne=Number.MAX_VALUE,re=0;re<ct.faces.length;re++){et.copy(ct.faceNormals[re]),U.vmult(et,et);var I=et.dot(T);I<ne&&(ne=I,Et=re)}if(!(Et<0)){var C=ct.faces[Et];C.connectedFaces=[];for(var Q=0;Q<ct.faces.length;Q++)for(var vt=0;vt<ct.faces[Q].length;vt++)C.indexOf(ct.faces[Q][vt])!==-1&&Q!==Et&&C.connectedFaces.indexOf(Q)===-1&&C.connectedFaces.push(Q);bt.length;for(var dt=C.length,xt=0;xt<dt;xt++){var Ht=ct.vertices[C[xt]],Tt=ct.vertices[C[(xt+1)%dt]];Ht.vsub(Tt,K),ot.copy(K),U.vmult(ot,ot),O.vadd(ot,ot),ht.copy(this.faceNormals[Et]),U.vmult(ht,ht),O.vadd(ht,ht),ot.cross(ht,Y),Y.negate(Y),Lt.copy(Ht),U.vmult(Lt,Lt),O.vadd(Lt,Lt),-Lt.dot(Y);var Mt;{var Nt=C.connectedFaces[xt];ft.copy(this.faceNormals[Nt]);var G=this.getPlaneConstantOfFace(Nt);nt.copy(ft),U.vmult(nt,nt);var Mt=G-nt.dot(O)}for(this.clipFaceAgainstPlane(bt,Gt,nt,Mt);bt.length;)bt.shift();for(;Gt.length;)bt.push(Gt.shift())}ft.copy(this.faceNormals[Et]);var G=this.getPlaneConstantOfFace(Et);nt.copy(ft),U.vmult(nt,nt);for(var Mt=G-nt.dot(O),Q=0;Q<bt.length;Q++){var pt=nt.dot(bt[Q])+Mt;if(pt<=L&&(console.log("clamped: depth="+pt+" to minDist="+(L+"")),pt=L),pt<=j){var Qt=bt[Q];if(pt<=0){var qt={point:Qt,normal:nt,depth:pt};at.push(qt)}}}}},l.prototype.clipFaceAgainstPlane=function(T,O,U,D){var L,j,at=T.length;if(at<2)return O;var et=T[T.length-1],K=T[0];L=U.dot(et)+D;for(var ot=0;ot<at;ot++){if(K=T[ot],j=U.dot(K)+D,L<0)if(j<0){var ht=new a;ht.copy(K),O.push(ht)}else{var ht=new a;et.lerp(K,L/(L-j),ht),O.push(ht)}else if(j<0){var ht=new a;et.lerp(K,L/(L-j),ht),O.push(ht),O.push(K)}et=K,L=j}return O},l.prototype.computeWorldVertices=function(T,O){for(var U=this.vertices.length;this.worldVertices.length<U;)this.worldVertices.push(new a);for(var D=this.vertices,L=this.worldVertices,j=0;j!==U;j++)O.vmult(D[j],L[j]),T.vadd(L[j],L[j]);this.worldVerticesNeedsUpdate=!1},new a,l.prototype.computeLocalAABB=function(T,O){var U=this.vertices.length,D=this.vertices;T.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),O.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var L=0;L<U;L++){var j=D[L];j.x<T.x?T.x=j.x:j.x>O.x&&(O.x=j.x),j.y<T.y?T.y=j.y:j.y>O.y&&(O.y=j.y),j.z<T.z?T.z=j.z:j.z>O.z&&(O.z=j.z)}},l.prototype.computeWorldFaceNormals=function(T){for(var O=this.faceNormals.length;this.worldFaceNormals.length<O;)this.worldFaceNormals.push(new a);for(var U=this.faceNormals,D=this.worldFaceNormals,L=0;L!==O;L++)T.vmult(U[L],D[L]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var T=0,O=this.vertices,U=0,D=O.length;U!==D;U++){var L=O[U].norm2();L>T&&(T=L)}this.boundingSphereRadius=Math.sqrt(T)};var k=new a;l.prototype.calculateWorldAABB=function(T,O,U,D){for(var L=this.vertices.length,j=this.vertices,at,et,K,ot,ht,Y,Lt=0;Lt<L;Lt++){k.copy(j[Lt]),O.vmult(k,k),T.vadd(k,k);var ft=k;ft.x<at||at===void 0?at=ft.x:(ft.x>ot||ot===void 0)&&(ot=ft.x),ft.y<et||et===void 0?et=ft.y:(ft.y>ht||ht===void 0)&&(ht=ft.y),ft.z<K||K===void 0?K=ft.z:(ft.z>Y||Y===void 0)&&(Y=ft.z)}U.set(at,et,K),D.set(ot,ht,Y)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(T){T=T||new a;for(var O=this.vertices.length,U=this.vertices,D=0;D<O;D++)T.vadd(U[D],T);return T.mult(1/O,T),T},l.prototype.transformAllPoints=function(T,O){var U=this.vertices.length,D=this.vertices;if(O){for(var L=0;L<U;L++){var j=D[L];O.vmult(j,j)}for(var L=0;L<this.faceNormals.length;L++){var j=this.faceNormals[L];O.vmult(j,j)}}if(T)for(var L=0;L<U;L++){var j=D[L];j.vadd(T,j)}};var J=new a,F=new a,B=new a;l.prototype.pointIsInside=function(T){var O=this.vertices.length,U=this.vertices,D=this.faces,L=this.faceNormals,j=null,at=this.faces.length,et=J;this.getAveragePointLocal(et);for(var K=0;K<at;K++){this.faces[K].length;var O=L[K],ot=U[D[K][0]],ht=F;T.vsub(ot,ht);var Y=O.dot(ht),Lt=B;et.vsub(ot,Lt);var ft=O.dot(Lt);if(Y<0&&ft>0||Y>0&&ft<0)return!1}return j?1:-1},new a;var q=new a,X=new a;l.project=function(T,O,U,D,L){var j=T.vertices.length,at=q,et=0,K=0,ot=X,ht=T.vertices;ot.setZero(),o.vectorToLocalFrame(U,D,O,at),o.pointToLocalFrame(U,D,ot,ot);var Y=ot.dot(at);K=et=ht[0].dot(at);for(var Lt=1;Lt<j;Lt++){var ft=ht[Lt].dot(at);ft>et&&(et=ft),ft<K&&(K=ft)}if(K-=Y,et-=Y,K>et){var nt=K;K=et,et=nt}L[0]=et,L[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,i){n.exports=l;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function l(h,c,u,d){var f=d,v=[],g=[],m=[],p=[],_=[],x=Math.cos,y=Math.sin;v.push(new a(c*x(0),c*y(0),-u*.5)),p.push(0),v.push(new a(h*x(0),h*y(0),u*.5)),_.push(1);for(var E=0;E<f;E++){var b=2*Math.PI/f*(E+1),A=2*Math.PI/f*(E+.5);E<f-1?(v.push(new a(c*x(b),c*y(b),-u*.5)),p.push(2*E+2),v.push(new a(h*x(b),h*y(b),u*.5)),_.push(2*E+3),m.push([2*E+2,2*E+3,2*E+1,2*E])):m.push([0,1,2*E+1,2*E]),(f%2===1||E<f/2)&&g.push(new a(x(A),y(A),0))}m.push(_),g.push(new a(0,0,1));for(var R=[],E=0;E<p.length;E++)R.push(p[p.length-E-1]);m.push(R),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,i){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),l=e("../utils/Utils");n.exports=h;function h(c,u){u=l.defaults(u,{maxValue:null,minValue:null,elementSize:1}),this.data=c,this.maxValue=u.maxValue,this.minValue=u.minValue,this.elementSize=u.elementSize,u.minValue===null&&this.updateMinValue(),u.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var c=this.data,u=c[0][0],d=0;d!==c.length;d++)for(var f=0;f!==c[d].length;f++){var v=c[d][f];v<u&&(u=v)}this.minValue=u},h.prototype.updateMaxValue=function(){for(var c=this.data,u=c[0][0],d=0;d!==c.length;d++)for(var f=0;f!==c[d].length;f++){var v=c[d][f];v>u&&(u=v)}this.maxValue=u},h.prototype.setHeightValueAtIndex=function(c,u,d){var f=this.data;f[c][u]=d,this.clearCachedConvexTrianglePillar(c,u,!1),c>0&&(this.clearCachedConvexTrianglePillar(c-1,u,!0),this.clearCachedConvexTrianglePillar(c-1,u,!1)),u>0&&(this.clearCachedConvexTrianglePillar(c,u-1,!0),this.clearCachedConvexTrianglePillar(c,u-1,!1)),u>0&&c>0&&this.clearCachedConvexTrianglePillar(c-1,u-1,!0)},h.prototype.getRectMinMax=function(c,u,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=c;p<=d;p++)for(var _=u;_<=f;_++){var x=g[p][_];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},h.prototype.getIndexOfPosition=function(c,u,d,f){var v=this.elementSize,g=this.data,m=Math.floor(c/v),p=Math.floor(u/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},h.prototype.getHeightAt=function(c,u,d){var f=[];this.getIndexOfPosition(c,u,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(c,u,d){return c+"_"+u+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(c,u,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,u,d)]},h.prototype.setCachedConvexTrianglePillar=function(c,u,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,u,d)]={convex:f,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(c,u,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,u,d)]},h.prototype.getConvexTrianglePillar=function(c,u,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(c,u,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new a,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new o);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var x=f.vertices,y=(Math.min(g[c][u],g[c+1][u],g[c][u+1],g[c+1][u+1])-this.minValue)/2+this.minValue;d?(v.set((c+.75)*m,(u+.75)*m,y),x[0].set(.25*m,.25*m,g[c+1][u+1]-y),x[1].set(-.75*m,.25*m,g[c][u+1]-y),x[2].set(.25*m,-.75*m,g[c+1][u]-y),x[3].set(.25*m,.25*m,-y-1),x[4].set(-.75*m,.25*m,-y-1),x[5].set(.25*m,-.75*m,-y-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((c+.25)*m,(u+.25)*m,y),x[0].set(-.25*m,-.25*m,g[c][u]-y),x[1].set(.75*m,-.25*m,g[c+1][u]-y),x[2].set(-.25*m,.75*m,g[c][u+1]-y),x[3].set(-.25*m,-.25*m,-y-1),x[4].set(.75*m,-.25*m,-y-1),x[5].set(-.25*m,.75*m,-y-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(c,u,d,f,v)},h.prototype.calculateLocalInertia=function(c,u){return u=u||new o,u.set(0,0,0),u},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(c,u,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var c=this.data,u=this.elementSize;this.boundingSphereRadius=new o(c.length*u,c[0].length*u,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,i){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){return h=h||new a,h.set(0,0,0),h},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,h,c,u){c.copy(l),u.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,i){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(h){var c=this.worldNormal;c.set(0,0,1),h.vmult(c,c),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(h,c){return c=c||new a,c},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new a;o.prototype.calculateWorldAABB=function(h,c,u,d){l.set(0,0,1),c.vmult(l,l);var f=Number.MAX_VALUE;u.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(u.x=h.x),l.y===-1&&(u.y=h.y),l.z===-1&&(u.z=h.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,i){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,i){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){h=h||new a;var c=2*l*this.radius*this.radius/5;return h.x=c,h.y=c,h.z=c,h},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,h,c,u){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];c[g]=l[g]-d,u[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,i){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),l=e("../collision/AABB"),h=e("../utils/Octree");function c(R,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(R),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new l,this.edges=null,this.scale=new a(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}c.prototype=new r,c.prototype.constructor=c;var u=new a;c.prototype.updateTree=function(){var R=this.tree;R.reset(),R.aabb.copy(this.aabb);var M=this.scale;R.aabb.lowerBound.x*=1/M.x,R.aabb.lowerBound.y*=1/M.y,R.aabb.lowerBound.z*=1/M.z,R.aabb.upperBound.x*=1/M.x,R.aabb.upperBound.y*=1/M.y,R.aabb.upperBound.z*=1/M.z;for(var S=new l,P=new a,z=new a,V=new a,N=[P,z,V],k=0;k<this.indices.length/3;k++){var J=k*3;this._getUnscaledVertex(this.indices[J],P),this._getUnscaledVertex(this.indices[J+1],z),this._getUnscaledVertex(this.indices[J+2],V),S.setFromPoints(N),R.insert(S,k)}R.removeEmptyNodes()};var d=new l;c.prototype.getTrianglesInAABB=function(R,M){d.copy(R);var S=this.scale,P=S.x,z=S.y,V=S.z,N=d.lowerBound,k=d.upperBound;return N.x/=P,N.y/=z,N.z/=V,k.x/=P,k.y/=z,k.z/=V,this.tree.aabbQuery(d,M)},c.prototype.setScale=function(R){var M=this.scale.x===this.scale.y===this.scale.z,S=R.x===R.y===R.z;M&&S||this.updateNormals(),this.scale.copy(R),this.updateAABB(),this.updateBoundingSphereRadius()},c.prototype.updateNormals=function(){for(var R=u,M=this.normals,S=0;S<this.indices.length/3;S++){var P=S*3,z=this.indices[P],V=this.indices[P+1],N=this.indices[P+2];this.getVertex(z,p),this.getVertex(V,_),this.getVertex(N,x),c.computeNormal(_,p,x,R),M[P]=R.x,M[P+1]=R.y,M[P+2]=R.z}},c.prototype.updateEdges=function(){for(var R={},M=function(J,F){var B=z<V?z+"_"+V:V+"_"+z;R[B]=!0},S=0;S<this.indices.length/3;S++){var P=S*3,z=this.indices[P],V=this.indices[P+1];this.indices[P+2],M(),M(),M()}var N=Object.keys(R);this.edges=new Int16Array(N.length*2);for(var S=0;S<N.length;S++){var k=N[S].split("_");this.edges[2*S]=parseInt(k[0],10),this.edges[2*S+1]=parseInt(k[1],10)}},c.prototype.getEdgeVertex=function(R,M,S){var P=this.edges[R*2+(M?1:0)];this.getVertex(P,S)};var f=new a,v=new a;c.prototype.getEdgeVector=function(R,M){var S=f,P=v;this.getEdgeVertex(R,0,S),this.getEdgeVertex(R,1,P),P.vsub(S,M)};var g=new a,m=new a;c.computeNormal=function(R,M,S,P){M.vsub(R,m),S.vsub(M,g),g.cross(m,P),P.isZero()||P.normalize()};var p=new a,_=new a,x=new a;c.prototype.getVertex=function(R,M){var S=this.scale;return this._getUnscaledVertex(R,M),M.x*=S.x,M.y*=S.y,M.z*=S.z,M},c.prototype._getUnscaledVertex=function(R,M){var S=R*3,P=this.vertices;return M.set(P[S],P[S+1],P[S+2])},c.prototype.getWorldVertex=function(R,M,S,P){return this.getVertex(R,P),o.pointToWorldFrame(M,S,P,P),P},c.prototype.getTriangleVertices=function(R,M,S,P){var z=R*3;this.getVertex(this.indices[z],M),this.getVertex(this.indices[z+1],S),this.getVertex(this.indices[z+2],P)},c.prototype.getNormal=function(R,M){var S=R*3;return M.set(this.normals[S],this.normals[S+1],this.normals[S+2])};var y=new l;c.prototype.calculateLocalInertia=function(R,M){this.computeLocalAABB(y);var S=y.upperBound.x-y.lowerBound.x,P=y.upperBound.y-y.lowerBound.y,z=y.upperBound.z-y.lowerBound.z;return M.set(1/12*R*(2*P*2*P+2*z*2*z),1/12*R*(2*S*2*S+2*z*2*z),1/12*R*(2*P*2*P+2*S*2*S))};var E=new a;c.prototype.computeLocalAABB=function(R){var M=R.lowerBound,S=R.upperBound,P=this.vertices.length;this.vertices;var z=E;this.getVertex(0,z),M.copy(z),S.copy(z);for(var V=0;V!==P;V++)this.getVertex(V,z),z.x<M.x?M.x=z.x:z.x>S.x&&(S.x=z.x),z.y<M.y?M.y=z.y:z.y>S.y&&(S.y=z.y),z.z<M.z?M.z=z.z:z.z>S.z&&(S.z=z.z)},c.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},c.prototype.updateBoundingSphereRadius=function(){for(var R=0,M=this.vertices,S=new a,P=0,z=M.length/3;P!==z;P++){this.getVertex(P,S);var V=S.norm2();V>R&&(R=V)}this.boundingSphereRadius=Math.sqrt(R)},new a;var b=new o,A=new l;c.prototype.calculateWorldAABB=function(R,M,S,P){var z=b,V=A;z.position=R,z.quaternion=M,this.aabb.toWorldFrame(z,V),S.copy(V.lowerBound),P.copy(V.upperBound)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.createTorus=function(R,M,S,P,z){R=R||1,M=M||.5,S=S||8,P=P||6,z=z||Math.PI*2;for(var V=[],N=[],k=0;k<=S;k++)for(var J=0;J<=P;J++){var F=J/P*z,B=k/S*Math.PI*2,q=(R+M*Math.cos(B))*Math.cos(F),X=(R+M*Math.cos(B))*Math.sin(F),T=M*Math.sin(B);V.push(q,X,T)}for(var k=1;k<=S;k++)for(var J=1;J<=P;J++){var O=(P+1)*k+J-1,U=(P+1)*(k-1)+J-1,D=(P+1)*(k-1)+J,L=(P+1)*k+J;N.push(O,U,L),N.push(U,D,L)}return new c(V,N)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,i){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],l=[],h=[];a.prototype.solve=function(c,u){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=u.bodies,_=p.length,x=c,y,E,b,A,R,M;if(m!==0)for(var S=0;S!==_;S++)p[S].updateSolveMassProperties();var P=l,z=h,V=o;P.length=m,z.length=m,V.length=m;for(var S=0;S!==m;S++){var N=g[S];V[S]=0,z[S]=N.computeB(x),P[S]=1/N.computeC()}if(m!==0){for(var S=0;S!==_;S++){var k=p[S],J=k.vlambda,F=k.wlambda;J.set(0,0,0),F&&F.set(0,0,0)}for(d=0;d!==f;d++){A=0;for(var B=0;B!==m;B++){var N=g[B];y=z[B],E=P[B],M=V[B],R=N.computeGWlambda(),b=E*(y-R-N.eps*M),M+b<N.minForce?b=N.minForce-M:M+b>N.maxForce&&(b=N.maxForce-M),V[B]+=b,A+=b>0?b:-b,N.addToWlambda(b)}if(A*A<v)break}for(var S=0;S!==_;S++){var k=p[S],q=k.velocity,X=k.angularVelocity;q.vadd(k.vlambda,q),X&&X.vadd(k.wlambda,X)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,l=o.indexOf(a);l!==-1&&o.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,i){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var l=[],h=[],c={bodies:[]},u=a.STATIC;function d(p){for(var _=p.length,x=0;x!==_;x++){var y=p[x];if(!y.visited&&!(y.body.type&u))return y}return!1}var f=[];function v(p,_,x,y){for(f.push(p),p.visited=!0,_(p,x,y);f.length;)for(var E=f.pop(),b;b=d(E.children);)b.visited=!0,_(b,x,y),f.push(b)}function g(p,_,x){_.push(p.body);for(var y=p.eqs.length,E=0;E!==y;E++){var b=p.eqs[E];x.indexOf(b)===-1&&x.push(b)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,_){for(var x=l,y=this.nodePool,E=_.bodies,b=this.equations,A=b.length,R=E.length,M=this.subsolver;y.length<R;)y.push(this.createNode());x.length=R;for(var S=0;S<R;S++)x[S]=y[S];for(var S=0;S!==R;S++){var P=x[S];P.body=E[S],P.children.length=0,P.eqs.length=0,P.visited=!1}for(var z=0;z!==A;z++){var V=b[z],S=E.indexOf(V.bi),N=E.indexOf(V.bj),k=x[S],J=x[N];k.children.push(J),k.eqs.push(V),J.children.push(k),J.eqs.push(V)}var F,B=0,q=h;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var X=c;F=d(x);){q.length=0,X.bodies.length=0,v(F,g,X.bodies,q);var T=q.length;q=q.sort(m);for(var S=0;S!==T;S++)M.addEquation(q[S]);M.solve(p,X),M.removeAllEquations(),B++}return B};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[a]===void 0&&(l[a]=[]),l[a].indexOf(o)===-1&&l[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[a]!==void 0&&l[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[a]===void 0)return this;var h=l[a].indexOf(o);return h!==-1&&l[a].splice(h,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,l=o[a.type];if(l!==void 0){a.target=this;for(var h=0,c=l.length;h<c;h++)l[h].call(this,a)}return this}}},{}],50:[function(e,n,i){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=l;function o(u){u=u||{},this.root=u.root||null,this.aabb=u.aabb?u.aabb.clone():new r,this.data=[],this.children=[]}function l(u,d){d=d||{},d.root=null,d.aabb=u,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(u,d){this.children.length=this.data.length=0},o.prototype.insert=function(u,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(u))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(u,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var h=new a;o.prototype.subdivide=function(){var u=this.aabb,d=u.lowerBound,f=u.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(d,_),_.vadd(h,p.aabb.upperBound)}},o.prototype.aabbQuery=function(u,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(u)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var c=new r;o.prototype.rayQuery=function(u,d,f){return u.getAABB(c),c.toLocalFrame(d,c),this.aabbQuery(c,f),f},o.prototype.removeEmptyNodes=function(){for(var u=[this];u.length;){for(var d=u.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(u,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var l=o;o=a,a=l}return this.data[a+"-"+o]},r.prototype.set=function(a,o,l){if(a>o){var h=o;o=a,a=h}var c=a+"-"+o;this.get(a,o)||this.data.keys.push(c),this.data[c]=l},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var l=o.pop();delete a[l]}}},{}],53:[function(e,n,i){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var l in o)l in a||(a[l]=o[l]);return a}},{}],54:[function(e,n,i){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,i){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),l=e("../math/Vec3"),h=e("../math/Transform");e("../shapes/ConvexPolyhedron");var c=e("../math/Quaternion");e("../solver/Solver");var u=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new u,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(lt,st,mt,gt,ie,Vt){var At;this.contactPointPool.length?(At=this.contactPointPool.pop(),At.bi=lt,At.bj=st):At=new d(lt,st),At.enabled=lt.collisionResponse&&st.collisionResponse&&mt.collisionResponse&&gt.collisionResponse;var Ft=this.currentContactMaterial;At.restitution=Ft.restitution,At.setSpookParams(Ft.contactEquationStiffness,Ft.contactEquationRelaxation,this.world.dt);var it=mt.material||lt.material,Pt=gt.material||st.material;return it&&Pt&&it.restitution>=0&&Pt.restitution>=0&&(At.restitution=it.restitution*Pt.restitution),At.si=ie||mt,At.sj=Vt||gt,At},v.prototype.createFrictionEquationsFromContact=function(lt,st){var mt=lt.bi,gt=lt.bj,ie=lt.si,Vt=lt.sj,At=this.world,Ft=this.currentContactMaterial,it=Ft.friction,Pt=ie.material||mt.material,Ot=Vt.material||gt.material;if(Pt&&Ot&&Pt.friction>=0&&Ot.friction>=0&&(it=Pt.friction*Ot.friction),it>0){var Xt=it*At.gravity.length(),It=mt.invMass+gt.invMass;It>0&&(It=1/It);var Ct=this.frictionEquationPool,w=Ct.length?Ct.pop():new f(mt,gt,Xt*It),W=Ct.length?Ct.pop():new f(mt,gt,Xt*It);return w.bi=W.bi=mt,w.bj=W.bj=gt,w.minForce=W.minForce=-Xt*It,w.maxForce=W.maxForce=Xt*It,w.ri.copy(lt.ri),w.rj.copy(lt.rj),W.ri.copy(lt.ri),W.rj.copy(lt.rj),lt.ni.tangents(w.t,W.t),w.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,At.dt),W.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,At.dt),w.enabled=W.enabled=lt.enabled,st.push(w,W),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(lt){var st=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(st,this.frictionResult)||lt===1)){var mt=this.frictionResult[this.frictionResult.length-2],gt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var ie=st.bi;st.bj;for(var Vt=0;Vt!==lt;Vt++)st=this.result[this.result.length-1-Vt],st.bodyA!==ie?(g.vadd(st.ni,g),m.vadd(st.ri,m),p.vadd(st.rj,p)):(g.vsub(st.ni,g),m.vadd(st.rj,m),p.vadd(st.ri,p));var At=1/lt;m.scale(At,mt.ri),p.scale(At,mt.rj),gt.ri.copy(mt.ri),gt.rj.copy(mt.rj),g.normalize(),g.tangents(mt.t,gt.t)}};var _=new l,x=new l,y=new c,E=new c;v.prototype.getContacts=function(lt,st,mt,gt,ie,Vt,At){this.contactPointPool=ie,this.frictionEquationPool=At,this.result=gt,this.frictionResult=Vt;for(var Ft=y,it=E,Pt=_,Ot=x,Xt=0,It=lt.length;Xt!==It;Xt++){var Ct=lt[Xt],w=st[Xt],W=null;Ct.material&&w.material&&(W=mt.getContactMaterial(Ct.material,w.material)||null);for(var Z=0;Z<Ct.shapes.length;Z++){Ct.quaternion.mult(Ct.shapeOrientations[Z],Ft),Ct.quaternion.vmult(Ct.shapeOffsets[Z],Pt),Pt.vadd(Ct.position,Pt);for(var H=Ct.shapes[Z],tt=0;tt<w.shapes.length;tt++){w.quaternion.mult(w.shapeOrientations[tt],it),w.quaternion.vmult(w.shapeOffsets[tt],Ot),Ot.vadd(w.position,Ot);var _t=w.shapes[tt];if(!(Pt.distanceTo(Ot)>H.boundingSphereRadius+_t.boundingSphereRadius)){var zt=null;H.material&&_t.material&&(zt=mt.getContactMaterial(H.material,_t.material)||null),this.currentContactMaterial=zt||W||mt.defaultContactMaterial;var Dt=this[H.type|_t.type];Dt&&(H.type<_t.type?Dt.call(this,H,_t,Pt,Ot,Ft,it,Ct,w,H,_t):Dt.call(this,_t,H,Ot,Pt,it,Ft,w,Ct,H,_t))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(lt,st,mt,gt,ie,Vt,At,Ft){lt.convexPolyhedronRepresentation.material=lt.material,st.convexPolyhedronRepresentation.material=st.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,st.convexPolyhedronRepresentation,mt,gt,ie,Vt,At,Ft,lt,st)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(lt,st,mt,gt,ie,Vt,At,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,st,mt,gt,ie,Vt,At,Ft,lt,st)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(lt,st,mt,gt,ie,Vt,At,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,st,mt,gt,ie,Vt,At,Ft,lt,st)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=this.createContactEquation(At,Ft,lt,st);gt.vsub(mt,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(lt.radius,it.ri),it.rj.mult(-st.radius,it.rj),it.ri.vadd(mt,it.ri),it.ri.vsub(At.position,it.ri),it.rj.vadd(gt,it.rj),it.rj.vsub(Ft.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var b=new l,A=new l,R=new l;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=new l,Pt=b;Pt.set(0,0,1),ie.vmult(Pt,Pt);for(var Ot=0;Ot<st.vertices.length/3;Ot++){st.getVertex(Ot,it);var Xt=new l;Xt.copy(it),h.pointToWorldFrame(gt,Vt,Xt,it);var It=A;it.vsub(mt,It);var Ct=Pt.dot(It);if(Ct<=0){var w=this.createContactEquation(At,Ft,lt,st);w.ni.copy(Pt);var W=R;Pt.scale(It.dot(Pt),W),it.vsub(W,W),w.ri.copy(W),w.ri.vsub(At.position,w.ri),w.rj.copy(it),w.rj.vsub(Ft.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult)}}};var M=new l,S=new l;new l;var P=new l,z=new l,V=new l,N=new l,k=new l,J=new l,F=new l,B=new l,q=new l,X=new l,T=new l,O=new r,U=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=V,Pt=N,Ot=k,Xt=J,It=F,Ct=B,w=O,W=z,Z=S,H=U;h.pointToLocalFrame(gt,Vt,mt,It);var tt=lt.radius;w.lowerBound.set(It.x-tt,It.y-tt,It.z-tt),w.upperBound.set(It.x+tt,It.y+tt,It.z+tt),st.getTrianglesInAABB(w,H);for(var _t=P,zt=lt.radius*lt.radius,Dt=0;Dt<H.length;Dt++)for(var Bt=0;Bt<3;Bt++)if(st.getVertex(st.indices[H[Dt]*3+Bt],_t),_t.vsub(It,Z),Z.norm2()<=zt){W.copy(_t),h.pointToWorldFrame(gt,Vt,W,_t),_t.vsub(mt,Z);var Rt=this.createContactEquation(At,Ft,lt,st);Rt.ni.copy(Z),Rt.ni.normalize(),Rt.ri.copy(Rt.ni),Rt.ri.scale(lt.radius,Rt.ri),Rt.ri.vadd(mt,Rt.ri),Rt.ri.vsub(At.position,Rt.ri),Rt.rj.copy(_t),Rt.rj.vsub(Ft.position,Rt.rj),this.result.push(Rt),this.createFrictionEquationsFromContact(Rt,this.frictionResult)}for(var Dt=0;Dt<H.length;Dt++)for(var Bt=0;Bt<3;Bt++){st.getVertex(st.indices[H[Dt]*3+Bt],it),st.getVertex(st.indices[H[Dt]*3+(Bt+1)%3],Pt),Pt.vsub(it,Ot),It.vsub(Pt,Ct);var te=Ct.dot(Ot);It.vsub(it,Ct);var ee=Ct.dot(Ot);if(ee>0&&te<0){It.vsub(it,Ct),Xt.copy(Ot),Xt.normalize(),ee=Ct.dot(Xt),Xt.scale(ee,Ct),Ct.vadd(it,Ct);var de=Ct.distanceTo(It);if(de<lt.radius){var Rt=this.createContactEquation(At,Ft,lt,st);Ct.vsub(It,Rt.ni),Rt.ni.normalize(),Rt.ni.scale(lt.radius,Rt.ri),h.pointToWorldFrame(gt,Vt,Ct,Ct),Ct.vsub(Ft.position,Rt.rj),h.vectorToWorldFrame(Vt,Rt.ni,Rt.ni),h.vectorToWorldFrame(Vt,Rt.ri,Rt.ri),this.result.push(Rt),this.createFrictionEquationsFromContact(Rt,this.frictionResult)}}}for(var Ae=q,me=X,ue=T,ve=M,Dt=0,Kt=H.length;Dt!==Kt;Dt++){st.getTriangleVertices(H[Dt],Ae,me,ue),st.getNormal(H[Dt],ve),It.vsub(Ae,Ct);var de=Ct.dot(ve);if(ve.scale(de,Ct),It.vsub(Ct,Ct),de=Ct.distanceTo(It),o.pointInTriangle(Ct,Ae,me,ue)&&de<lt.radius){var Rt=this.createContactEquation(At,Ft,lt,st);Ct.vsub(It,Rt.ni),Rt.ni.normalize(),Rt.ni.scale(lt.radius,Rt.ri),h.pointToWorldFrame(gt,Vt,Ct,Ct),Ct.vsub(Ft.position,Rt.rj),h.vectorToWorldFrame(Vt,Rt.ni,Rt.ni),h.vectorToWorldFrame(Vt,Rt.ri,Rt.ri),this.result.push(Rt),this.createFrictionEquationsFromContact(Rt,this.frictionResult)}}H.length=0};var D=new l,L=new l;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=this.createContactEquation(At,Ft,lt,st);if(it.ni.set(0,0,1),Vt.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(lt.radius,it.ri),mt.vsub(gt,D),it.ni.mult(it.ni.dot(D),L),D.vsub(L,it.rj),-D.dot(it.ni)<=lt.radius){var Pt=it.ri,Ot=it.rj;Pt.vadd(mt,Pt),Pt.vsub(At.position,Pt),Ot.vadd(gt,Ot),Ot.vsub(Ft.position,Ot),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var j=new l,at=new l,et=new l;function K(lt,st,mt){for(var gt=null,ie=lt.length,Vt=0;Vt!==ie;Vt++){var At=lt[Vt],Ft=j;lt[(Vt+1)%ie].vsub(At,Ft);var it=at;Ft.cross(st,it);var Pt=et;mt.vsub(At,Pt);var Ot=it.dot(Pt);if(gt===null||Ot>0&&gt===!0||Ot<=0&&gt===!1){gt===null&&(gt=Ot>0);continue}else return!1}return!0}var ot=new l,ht=new l,Y=new l,Lt=new l,ft=[new l,new l,new l,new l,new l,new l],nt=new l,ct=new l,Jt=new l,bt=new l;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=this.v3pool,Pt=ft;mt.vsub(gt,ot),st.getSideNormals(Pt,Vt);for(var Ot=lt.radius,Xt=!1,It=ct,Ct=Jt,w=bt,W=null,Z=0,H=0,tt=0,_t=null,zt=0,Dt=Pt.length;zt!==Dt&&Xt===!1;zt++){var Bt=ht;Bt.copy(Pt[zt]);var Rt=Bt.norm();Bt.normalize();var te=ot.dot(Bt);if(te<Rt+Ot&&te>0){var ee=Y,de=Lt;ee.copy(Pt[(zt+1)%3]),de.copy(Pt[(zt+2)%3]);var Ae=ee.norm(),me=de.norm();ee.normalize(),de.normalize();var ue=ot.dot(ee),ve=ot.dot(de);if(ue<Ae&&ue>-Ae&&ve<me&&ve>-me){var Pe=Math.abs(te-Rt-Ot);(_t===null||Pe<_t)&&(_t=Pe,H=ue,tt=ve,W=Rt,It.copy(Bt),Ct.copy(ee),w.copy(de),Z++)}}}if(Z){Xt=!0;var Zt=this.createContactEquation(At,Ft,lt,st);It.mult(-Ot,Zt.ri),Zt.ni.copy(It),Zt.ni.negate(Zt.ni),It.mult(W,It),Ct.mult(H,Ct),It.vadd(Ct,It),w.mult(tt,w),It.vadd(w,Zt.rj),Zt.ri.vadd(mt,Zt.ri),Zt.ri.vsub(At.position,Zt.ri),Zt.rj.vadd(gt,Zt.rj),Zt.rj.vsub(Ft.position,Zt.rj),this.result.push(Zt),this.createFrictionEquationsFromContact(Zt,this.frictionResult)}for(var Kt=it.get(),mn=nt,fe=0;fe!==2&&!Xt;fe++)for(var we=0;we!==2&&!Xt;we++)for(var Ue=0;Ue!==2&&!Xt;Ue++)if(Kt.set(0,0,0),fe?Kt.vadd(Pt[0],Kt):Kt.vsub(Pt[0],Kt),we?Kt.vadd(Pt[1],Kt):Kt.vsub(Pt[1],Kt),Ue?Kt.vadd(Pt[2],Kt):Kt.vsub(Pt[2],Kt),gt.vadd(Kt,mn),mn.vsub(mt,mn),mn.norm2()<Ot*Ot){Xt=!0;var Zt=this.createContactEquation(At,Ft,lt,st);Zt.ri.copy(mn),Zt.ri.normalize(),Zt.ni.copy(Zt.ri),Zt.ri.mult(Ot,Zt.ri),Zt.rj.copy(Kt),Zt.ri.vadd(mt,Zt.ri),Zt.ri.vsub(At.position,Zt.ri),Zt.rj.vadd(gt,Zt.rj),Zt.rj.vsub(Ft.position,Zt.rj),this.result.push(Zt),this.createFrictionEquationsFromContact(Zt,this.frictionResult)}it.release(Kt),Kt=null;for(var ke=it.get(),vn=it.get(),Zt=it.get(),De=it.get(),Pe=it.get(),Ie=Pt.length,fe=0;fe!==Ie&&!Xt;fe++)for(var we=0;we!==Ie&&!Xt;we++)if(fe%3!==we%3){Pt[we].cross(Pt[fe],ke),ke.normalize(),Pt[fe].vadd(Pt[we],vn),Zt.copy(mt),Zt.vsub(vn,Zt),Zt.vsub(gt,Zt);var Nn=Zt.dot(ke);ke.mult(Nn,De);for(var Ue=0;Ue===fe%3||Ue===we%3;)Ue++;Pe.copy(mt),Pe.vsub(De,Pe),Pe.vsub(vn,Pe),Pe.vsub(gt,Pe);var Ra=Math.abs(Nn),Cs=Pe.norm();if(Ra<Pt[Ue].norm()&&Cs<Ot){Xt=!0;var Te=this.createContactEquation(At,Ft,lt,st);vn.vadd(De,Te.rj),Te.rj.copy(Te.rj),Pe.negate(Te.ni),Te.ni.normalize(),Te.ri.copy(Te.rj),Te.ri.vadd(gt,Te.ri),Te.ri.vsub(mt,Te.ri),Te.ri.normalize(),Te.ri.mult(Ot,Te.ri),Te.ri.vadd(mt,Te.ri),Te.ri.vsub(At.position,Te.ri),Te.rj.vadd(gt,Te.rj),Te.rj.vsub(Ft.position,Te.rj),this.result.push(Te),this.createFrictionEquationsFromContact(Te,this.frictionResult)}}it.release(ke,vn,Zt,De,Pe)};var Gt=new l,Et=new l,ne=new l,re=new l,I=new l,C=new l,Q=new l,vt=new l,dt=new l,xt=new l;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=this.v3pool;mt.vsub(gt,Gt);for(var Pt=st.faceNormals,Ot=st.faces,Xt=st.vertices,It=lt.radius,Ct=0;Ct!==Xt.length;Ct++){var w=Xt[Ct],W=I;Vt.vmult(w,W),gt.vadd(W,W);var Z=re;if(W.vsub(mt,Z),Z.norm2()<It*It){tt=!0;var H=this.createContactEquation(At,Ft,lt,st);H.ri.copy(Z),H.ri.normalize(),H.ni.copy(H.ri),H.ri.mult(It,H.ri),W.vsub(gt,H.rj),H.ri.vadd(mt,H.ri),H.ri.vsub(At.position,H.ri),H.rj.vadd(gt,H.rj),H.rj.vsub(Ft.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);return}}for(var tt=!1,Ct=0,_t=Ot.length;Ct!==_t&&tt===!1;Ct++){var zt=Pt[Ct],Dt=Ot[Ct],Bt=C;Vt.vmult(zt,Bt);var Rt=Q;Vt.vmult(Xt[Dt[0]],Rt),Rt.vadd(gt,Rt);var te=vt;Bt.mult(-It,te),mt.vadd(te,te);var ee=dt;te.vsub(Rt,ee);var de=ee.dot(Bt),Ae=xt;if(mt.vsub(Rt,Ae),de<0&&Ae.dot(Bt)>0){for(var me=[],ue=0,ve=Dt.length;ue!==ve;ue++){var Kt=it.get();Vt.vmult(Xt[Dt[ue]],Kt),gt.vadd(Kt,Kt),me.push(Kt)}if(K(me,Bt,mt)){tt=!0;var H=this.createContactEquation(At,Ft,lt,st);Bt.mult(-It,H.ri),Bt.negate(H.ni);var mn=it.get();Bt.mult(-de,mn);var fe=it.get();Bt.mult(-It,fe),mt.vsub(gt,H.rj),H.rj.vadd(fe,H.rj),H.rj.vadd(mn,H.rj),H.rj.vadd(gt,H.rj),H.rj.vsub(Ft.position,H.rj),H.ri.vadd(mt,H.ri),H.ri.vsub(At.position,H.ri),it.release(mn),it.release(fe),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(var ue=0,we=me.length;ue!==we;ue++)it.release(me[ue]);return}else for(var ue=0;ue!==Dt.length;ue++){var Ue=it.get(),ke=it.get();Vt.vmult(Xt[Dt[(ue+1)%Dt.length]],Ue),Vt.vmult(Xt[Dt[(ue+2)%Dt.length]],ke),gt.vadd(Ue,Ue),gt.vadd(ke,ke);var vn=Et;ke.vsub(Ue,vn);var Zt=ne;vn.unit(Zt);var De=it.get(),Pe=it.get();mt.vsub(Ue,Pe);var Ie=Pe.dot(Zt);Zt.mult(Ie,De),De.vadd(Ue,De);var Nn=it.get();if(De.vsub(mt,Nn),Ie>0&&Ie*Ie<vn.norm2()&&Nn.norm2()<It*It){var H=this.createContactEquation(At,Ft,lt,st);De.vsub(gt,H.rj),De.vsub(mt,H.ni),H.ni.normalize(),H.ni.mult(It,H.ri),H.rj.vadd(gt,H.rj),H.rj.vsub(Ft.position,H.rj),H.ri.vadd(mt,H.ri),H.ri.vsub(At.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(var ue=0,we=me.length;ue!==we;ue++)it.release(me[ue]);it.release(Ue),it.release(ke),it.release(De),it.release(Nn),it.release(Pe);return}it.release(Ue),it.release(ke),it.release(De),it.release(Nn),it.release(Pe)}for(var ue=0,we=me.length;ue!==we;ue++)it.release(me[ue])}}},new l,new l,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(lt,st,mt,gt,ie,Vt,At,Ft){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.planeConvex(lt,st.convexPolyhedronRepresentation,mt,gt,ie,Vt,At,Ft)};var Ht=new l,Tt=new l,Nt=new l,G=new l;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=Ht,Pt=Tt;Pt.set(0,0,1),ie.vmult(Pt,Pt);for(var Ot=0,Xt=Nt,It=0;It!==st.vertices.length;It++){it.copy(st.vertices[It]),Vt.vmult(it,it),gt.vadd(it,it),it.vsub(mt,Xt);var Ct=Pt.dot(Xt);if(Ct<=0){var w=this.createContactEquation(At,Ft,lt,st),W=G;Pt.mult(Pt.dot(Xt),W),it.vsub(W,W),W.vsub(mt,w.ri),w.ni.copy(Pt),it.vsub(gt,w.rj),w.ri.vadd(mt,w.ri),w.ri.vsub(At.position,w.ri),w.rj.vadd(gt,w.rj),w.rj.vsub(Ft.position,w.rj),this.result.push(w),Ot++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}}this.enableFrictionReduction&&Ot&&this.createFrictionFromAverage(Ot)};var Mt=new l,pt=new l;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(lt,st,mt,gt,ie,Vt,At,Ft,it,Pt,Ot,Xt){var It=Mt;if(!(mt.distanceTo(gt)>lt.boundingSphereRadius+st.boundingSphereRadius)&&lt.findSeparatingAxis(st,mt,ie,gt,Vt,It,Ot,Xt)){var Ct=[],w=pt;lt.clipAgainstHull(mt,ie,st,gt,Vt,It,-100,100,Ct);for(var W=0,Z=0;Z!==Ct.length;Z++){var H=this.createContactEquation(At,Ft,lt,st,it,Pt),tt=H.ri,_t=H.rj;It.negate(H.ni),Ct[Z].normal.negate(w),w.mult(Ct[Z].depth,w),Ct[Z].point.vadd(w,tt),_t.copy(Ct[Z].point),tt.vsub(mt,tt),_t.vsub(gt,_t),tt.vadd(mt,tt),tt.vsub(At.position,tt),_t.vadd(gt,_t),_t.vsub(Ft.position,_t),this.result.push(H),W++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(H,this.frictionResult)}this.enableFrictionReduction&&W&&this.createFrictionFromAverage(W)}};var Qt=new l,qt=new l,Yt=new l;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=Qt;it.set(0,0,1),At.quaternion.vmult(it,it);var Pt=qt;gt.vsub(At.position,Pt);var Ot=it.dot(Pt);if(Ot<=0){var Xt=this.createContactEquation(Ft,At,st,lt);Xt.ni.copy(it),Xt.ni.negate(Xt.ni),Xt.ri.set(0,0,0);var It=Yt;it.mult(it.dot(gt),It),gt.vsub(It,It),Xt.rj.copy(It),this.result.push(Xt),this.createFrictionEquationsFromContact(Xt,this.frictionResult)}};var Wt=new l;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=Wt;it.set(0,0,1),gt.vsub(mt,it);var Pt=it.norm2();if(Pt<=lt.radius*lt.radius){var Ot=this.createContactEquation(Ft,At,st,lt);it.normalize(),Ot.rj.copy(it),Ot.rj.mult(lt.radius,Ot.rj),Ot.ni.copy(it),Ot.ni.negate(Ot.ni),Ot.ri.set(0,0,0),this.result.push(Ot),this.createFrictionEquationsFromContact(Ot,this.frictionResult)}};var Ut=new c,se=new l;new l;var $=new l,St=new l,yt=new l;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=-1,Pt=$,Ot=yt,Xt=null,It=se;if(It.copy(gt),It.vsub(mt,It),ie.conjugate(Ut),Ut.vmult(It,It),lt.pointIsInside(It)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(mt,ie),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(ie);for(var Ct=0,w=lt.faces.length;Ct!==w;Ct++){var W=[lt.worldVertices[lt.faces[Ct][0]]],Z=lt.worldFaceNormals[Ct];gt.vsub(W[0],St);var H=-Z.dot(St);(Xt===null||Math.abs(H)<Math.abs(Xt))&&(Xt=H,it=Ct,Pt.copy(Z))}if(it!==-1){var tt=this.createContactEquation(Ft,At,st,lt);Pt.mult(Xt,Ot),Ot.vadd(gt,Ot),Ot.vsub(mt,Ot),tt.rj.copy(Ot),Pt.negate(tt.ni),tt.ri.set(0,0,0);var _t=tt.ri,zt=tt.rj;_t.vadd(gt,_t),_t.vsub(Ft.position,_t),zt.vadd(mt,zt),zt.vsub(At.position,zt),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(lt,st,mt,gt,ie,Vt,At,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,st,mt,gt,ie,Vt,At,Ft)};var ut=new l,wt=new l,jt=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=st.data,Pt=st.elementSize,Ot=lt.boundingSphereRadius,Xt=wt,It=jt,Ct=ut;h.pointToLocalFrame(gt,Vt,mt,Ct);var w=Math.floor((Ct.x-Ot)/Pt)-1,W=Math.ceil((Ct.x+Ot)/Pt)+1,Z=Math.floor((Ct.y-Ot)/Pt)-1,H=Math.ceil((Ct.y+Ot)/Pt)+1;if(!(W<0||H<0||w>it.length||Z>it[0].length)){w<0&&(w=0),W<0&&(W=0),Z<0&&(Z=0),H<0&&(H=0),w>=it.length&&(w=it.length-1),W>=it.length&&(W=it.length-1),H>=it[0].length&&(H=it[0].length-1),Z>=it[0].length&&(Z=it[0].length-1);var tt=[];st.getRectMinMax(w,Z,W,H,tt);var _t=tt[0],zt=tt[1];if(!(Ct.z-Ot>zt||Ct.z+Ot<_t))for(var Dt=w;Dt<W;Dt++)for(var Bt=Z;Bt<H;Bt++)st.getConvexTrianglePillar(Dt,Bt,!1),h.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,st.pillarConvex,mt,Xt,ie,Vt,At,Ft,null,null,It,null),st.getConvexTrianglePillar(Dt,Bt,!0),h.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,st.pillarConvex,mt,Xt,ie,Vt,At,Ft,null,null,It,null)}};var ae=new l,ce=new l;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(lt,st,mt,gt,ie,Vt,At,Ft){var it=st.data,Pt=lt.radius,Ot=st.elementSize,Xt=ce,It=ae;h.pointToLocalFrame(gt,Vt,mt,It);var Ct=Math.floor((It.x-Pt)/Ot)-1,w=Math.ceil((It.x+Pt)/Ot)+1,W=Math.floor((It.y-Pt)/Ot)-1,Z=Math.ceil((It.y+Pt)/Ot)+1;if(!(w<0||Z<0||Ct>it.length||Z>it[0].length)){Ct<0&&(Ct=0),w<0&&(w=0),W<0&&(W=0),Z<0&&(Z=0),Ct>=it.length&&(Ct=it.length-1),w>=it.length&&(w=it.length-1),Z>=it[0].length&&(Z=it[0].length-1),W>=it[0].length&&(W=it[0].length-1);var H=[];st.getRectMinMax(Ct,W,w,Z,H);var tt=H[0],_t=H[1];if(!(It.z-Pt>_t||It.z+Pt<tt))for(var zt=this.result,Dt=Ct;Dt<w;Dt++)for(var Bt=W;Bt<Z;Bt++){var Rt=zt.length;st.getConvexTrianglePillar(Dt,Bt,!1),h.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,st.pillarConvex,mt,Xt,ie,Vt,At,Ft),st.getConvexTrianglePillar(Dt,Bt,!0),h.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,st.pillarConvex,mt,Xt,ie,Vt,At,Ft);var te=zt.length-Rt;if(te>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,i){n.exports=y;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var h=e("./Narrowphase"),c=e("../utils/EventTarget"),u=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){c.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new x,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new u,this.collisionMatrixPrevious=new u,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new c,new p;var E=new _;if(y.prototype.getContactMaterial=function(B,q){return this.contactMaterialTable.get(B.id,q.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var B=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=B,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(B){this.bodies.indexOf(B)===-1&&(B.index=this.bodies.length,this.bodies.push(B),B.world=this,B.initPosition.copy(B.position),B.initVelocity.copy(B.velocity),B.timeLastSleepy=this.time,B instanceof v&&(B.initAngularVelocity.copy(B.angularVelocity),B.initQuaternion.copy(B.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=B,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(B){this.constraints.push(B)},y.prototype.removeConstraint=function(B){var q=this.constraints.indexOf(B);q!==-1&&this.constraints.splice(q,1)},y.prototype.rayTest=function(B,q,X){X instanceof m?this.raycastClosest(B,q,{skipBackfaces:!0},X):this.raycastAll(B,q,{skipBackfaces:!0},X)},y.prototype.raycastAll=function(B,q,X,T){return X.mode=_.ALL,X.from=B,X.to=q,X.callback=T,E.intersectWorld(this,X)},y.prototype.raycastAny=function(B,q,X,T){return X.mode=_.ANY,X.from=B,X.to=q,X.result=T,E.intersectWorld(this,X)},y.prototype.raycastClosest=function(B,q,X,T){return X.mode=_.CLOSEST,X.from=B,X.to=q,X.result=T,E.intersectWorld(this,X)},y.prototype.remove=function(B){B.world=null;var q=this.bodies.length-1,X=this.bodies,T=X.indexOf(B);if(T!==-1){X.splice(T,1);for(var O=0;O!==X.length;O++)X[O].index=O;this.collisionMatrix.setNumObjects(q),this.removeBodyEvent.body=B,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(B){this.materials.push(B)},y.prototype.addContactMaterial=function(B){this.contactmaterials.push(B),this.contactMaterialTable.set(B.materials[0].id,B.materials[1].id,B)},typeof performance>"u"&&(performance={}),!performance.now){var b=Date.now();performance.timing&&performance.timing.navigationStart&&(b=performance.timing.navigationStart),performance.now=function(){return Date.now()-b}}var A=new a;y.prototype.step=function(B,q,X){if(X=X||10,q=q||0,q===0)this.internalStep(B),this.time+=B;else{var T=Math.floor((this.time+q)/B)-Math.floor(this.time/B);T=Math.min(T,X);for(var O=performance.now(),U=0;U!==T&&(this.internalStep(B),!(performance.now()-O>B*1e3));U++);this.time+=q;for(var D=this.time%B,L=D/B,j=A,at=this.bodies,et=0;et!==at.length;et++){var K=at[et];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,j),j.scale(L,j),K.position.vadd(j,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var R={type:"postStep"},M={type:"preStep"},S={type:"collide",body:null,contact:null},P=[],z=[],V=[],N=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var k=new o,J=new o,F=new a;y.prototype.internalStep=function(B){this.dt=B;var q=this.contacts,X=V,T=N,O=this.numObjects(),U=this.bodies,D=this.solver,L=this.gravity,j=this.doProfiling,at=this.profile,et=v.DYNAMIC,K,ot=this.constraints,ht=z;L.norm();var Y=L.x,Lt=L.y,ft=L.z,nt=0;for(j&&(K=performance.now()),nt=0;nt!==O;nt++){var ct=U[nt];if(ct.type&et){var Jt=ct.force,bt=ct.mass;Jt.x+=bt*Y,Jt.y+=bt*Lt,Jt.z+=bt*ft}}for(var nt=0,Gt=this.subsystems.length;nt!==Gt;nt++)this.subsystems[nt].update();j&&(K=performance.now()),X.length=0,T.length=0,this.broadphase.collisionPairs(this,X,T),j&&(at.broadphase=performance.now()-K);var Mt=ot.length;for(nt=0;nt!==Mt;nt++){var Et=ot[nt];if(!Et.collideConnected)for(var ne=X.length-1;ne>=0;ne-=1)(Et.bodyA===X[ne]&&Et.bodyB===T[ne]||Et.bodyB===X[ne]&&Et.bodyA===T[ne])&&(X.splice(ne,1),T.splice(ne,1))}this.collisionMatrixTick(),j&&(K=performance.now());var re=P,I=q.length;for(nt=0;nt!==I;nt++)re.push(q[nt]);q.length=0;var C=this.frictionEquations.length;for(nt=0;nt!==C;nt++)ht.push(this.frictionEquations[nt]);this.frictionEquations.length=0,this.narrowphase.getContacts(X,T,this,q,re,this.frictionEquations,ht),j&&(at.narrowphase=performance.now()-K),j&&(K=performance.now());for(var nt=0;nt<this.frictionEquations.length;nt++)D.addEquation(this.frictionEquations[nt]);for(var Q=q.length,vt=0;vt!==Q;vt++){var Et=q[vt],ct=Et.bi,dt=Et.bj;Et.si,Et.sj;var xt;if(ct.material&&dt.material?xt=this.getContactMaterial(ct.material,dt.material)||this.defaultContactMaterial:xt=this.defaultContactMaterial,xt.friction,ct.material&&dt.material&&(ct.material.friction>=0&&dt.material.friction>=0&&ct.material.friction*dt.material.friction,ct.material.restitution>=0&&dt.material.restitution>=0&&(Et.restitution=ct.material.restitution*dt.material.restitution)),D.addEquation(Et),ct.allowSleep&&ct.type===v.DYNAMIC&&ct.sleepState===v.SLEEPING&&dt.sleepState===v.AWAKE&&dt.type!==v.STATIC){var Ht=dt.velocity.norm2()+dt.angularVelocity.norm2(),Tt=Math.pow(dt.sleepSpeedLimit,2);Ht>=Tt*2&&(ct._wakeUpAfterNarrowphase=!0)}if(dt.allowSleep&&dt.type===v.DYNAMIC&&dt.sleepState===v.SLEEPING&&ct.sleepState===v.AWAKE&&ct.type!==v.STATIC){var Nt=ct.velocity.norm2()+ct.angularVelocity.norm2(),G=Math.pow(ct.sleepSpeedLimit,2);Nt>=G*2&&(dt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ct,dt,!0),this.collisionMatrixPrevious.get(ct,dt)||(S.body=dt,S.contact=Et,ct.dispatchEvent(S),S.body=ct,dt.dispatchEvent(S))}for(j&&(at.makeContactConstraints=performance.now()-K,K=performance.now()),nt=0;nt!==O;nt++){var ct=U[nt];ct._wakeUpAfterNarrowphase&&(ct.wakeUp(),ct._wakeUpAfterNarrowphase=!1)}var Mt=ot.length;for(nt=0;nt!==Mt;nt++){var Et=ot[nt];Et.update();for(var ne=0,pt=Et.equations.length;ne!==pt;ne++){var Qt=Et.equations[ne];D.addEquation(Qt)}}D.solve(B,this),j&&(at.solve=performance.now()-K),D.removeAllEquations();var qt=Math.pow;for(nt=0;nt!==O;nt++){var ct=U[nt];if(ct.type&et){var Yt=qt(1-ct.linearDamping,B),Wt=ct.velocity;Wt.mult(Yt,Wt);var Ut=ct.angularVelocity;if(Ut){var se=qt(1-ct.angularDamping,B);Ut.mult(se,Ut)}}}for(this.dispatchEvent(M),nt=0;nt!==O;nt++){var ct=U[nt];ct.preStep&&ct.preStep.call(ct)}j&&(K=performance.now());var $=k,St=J,yt=this.stepnumber,ut=v.DYNAMIC|v.KINEMATIC,wt=yt%(this.quatNormalizeSkip+1)===0,jt=this.quatNormalizeFast,ae=B*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,nt=0;nt!==O;nt++){var ce=U[nt],lt=ce.force,st=ce.torque;if(ce.type&ut&&ce.sleepState!==v.SLEEPING){var mt=ce.velocity,gt=ce.angularVelocity,ie=ce.position,Vt=ce.quaternion,At=ce.invMass,Ft=ce.invInertiaWorld;mt.x+=lt.x*At*B,mt.y+=lt.y*At*B,mt.z+=lt.z*At*B,ce.angularVelocity&&(Ft.vmult(st,F),F.mult(B,F),F.vadd(gt,gt)),ie.x+=mt.x*B,ie.y+=mt.y*B,ie.z+=mt.z*B,ce.angularVelocity&&($.set(gt.x,gt.y,gt.z,0),$.mult(Vt,St),Vt.x+=ae*St.x,Vt.y+=ae*St.y,Vt.z+=ae*St.z,Vt.w+=ae*St.w,wt&&(jt?Vt.normalizeFast():Vt.normalize())),ce.aabb&&(ce.aabbNeedsUpdate=!0),ce.updateInertiaWorld&&ce.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,j&&(at.integrate=performance.now()-K),this.time+=B,this.stepnumber+=1,this.dispatchEvent(R),nt=0;nt!==O;nt++){var ct=U[nt],it=ct.postStep;it&&it.call(ct)}if(this.allowSleep)for(nt=0;nt!==O;nt++)U[nt].sleepTick(this.time)},y.prototype.clearForces=function(){for(var B=this.bodies,q=B.length,X=0;X!==q;X++){var T=B[X];T.force,T.torque,T.force.set(0,0,0),T.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(jh);var Z_=jh.exports;const an=K_(Z_);function si(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Kh(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vr={duration:.5,overwrite:!1,delay:0},el,Qe,be,Pn=1e8,Ee=1/Pn,Ro=Math.PI*2,J_=Ro/4,Q_=0,Zh=Math.sqrt,t0=Math.cos,e0=Math.sin,qe=function(t){return typeof t=="string"},Le=function(t){return typeof t=="function"},hi=function(t){return typeof t=="number"},nl=function(t){return typeof t>"u"},Zn=function(t){return typeof t=="object"},cn=function(t){return t!==!1},il=function(){return typeof window<"u"},ta=function(t){return Le(t)||qe(t)},Jh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,Po=/(?:-?\.?\d|\.)+/gi,Qh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tu=/[+-]=-?[.\d]+/,eu=/[^,'"\[\]\s]+/gi,n0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,Hn,Lo,rl,Sn={},ua={},nu,iu=function(t){return(ua=ir(t,Sn))&&fn},sl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ms=function(t,e){return!e&&console.warn(t)},ru=function(t,e){return t&&(Sn[t]=e)&&ua&&(ua[t]=e)||Sn},vs=function(){return 0},i0={suppressEvents:!0,isStart:!0,kill:!1},na={suppressEvents:!0,kill:!1},r0={suppressEvents:!0},al={},Ci=[],Do={},su,xn={},co={},Zc=30,ia=[],ol="",ll=function(t){var e=t[0],n,i;if(Zn(e)||Le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ia.length;i--&&!ia[i].targetTest(e););n=ia[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ru(t[i],n)))||t.splice(i,1);return t},Ki=function(t){return t._gsap||ll(Ln(t))[0]._gsap},au=function(t,e,n){return(n=t[e])&&Le(n)?t[e]():nl(n)&&t.getAttribute&&t.getAttribute(e)||n},hn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ne=function(t){return Math.round(t*1e5)/1e5||0},We=function(t){return Math.round(t*1e7)/1e7||0},Ir=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},s0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},da=function(){var t=Ci.length,e=Ci.slice(0),n,i;for(Do={},Ci.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ou=function(t,e,n,i){Ci.length&&!Qe&&da(),t.render(e,n,i||Qe&&e<0&&(t._initted||t._startAt)),Ci.length&&!Qe&&da()},lu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(eu).length<2?e:qe(t)?t.trim():t},cu=function(t){return t},In=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},a0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ir=function(t,e){for(var n in e)t[n]=e[n];return t},Jc=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Zn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},fa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},os=function(t){var e=t.parent||Ce,n=t.keyframes?a0(tn(t.keyframes)):In;if(cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},o0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},hu=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},wa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Li=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Zi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},l0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Io=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(na):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},c0=function s(t){return!t||t._ts&&s(t.parent)},Qc=function(t){return t._repeat?kr(t._tTime,t=t.duration()+t._rDelay)*t:0},kr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},pa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ta=function(t){return t._end=We(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},ba=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=We(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ta(t),n._dirty||Zi(n,t)),t},uu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=pa(t.rawTime(),e),(!e._dur||Ts(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Zi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},Xn=function(t,e,n,i){return e.parent&&Li(e),e._start=We((hi(n)?n:n||t!==Ce?Tn(t,n,e):t._time)+e._delay),e._end=We(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),hu(t,e,"_first","_last",t._sort?"_start":0),No(e)||(t._recent=e),i||uu(t,e),t._ts<0&&ba(t,t._tTime),t},du=function(t,e){return(Sn.ScrollTrigger||sl("scrollTrigger",e))&&Sn.ScrollTrigger.create(e,t)},fu=function(t,e,n,i,r){if(hl(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&su!==yn.frame)return Ci.push(t),t._lazy=[r,i],1},h0=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},No=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},u0=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&h0(t)&&!(!t._initted&&No(t))||(t._ts<0||t._dp._ts<0)&&!No(t))?0:1,o=t._rDelay,l=0,h,c,u;if(o&&t._repeat&&(l=Ts(0,t._tDur,e),c=kr(l,o),t._yoyo&&c&1&&(a=1-a),c!==kr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Qe||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&fu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,h=t._pt;h;)h.r(a,h.d),h=h._next;e<0&&Io(t,e,n,!0),t._onUpdate&&!n&&En(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&En(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Li(t,1),!n&&!Qe&&(En(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},d0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Hr=function(t,e,n,i){var r=t._repeat,a=We(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:We(a*(r+1)+t._rDelay*r):a,o>0&&!i&&ba(t,t._tTime=t._tDur*o),t.parent&&Ta(t),n||Zi(t.parent,t),t},th=function(t){return t instanceof sn?Zi(t):Hr(t,t._dur)},f0={_start:0,endTime:vs,totalDuration:vs},Tn=function s(t,e,n){var i=t.labels,r=t._recent||f0,a=t.duration()>=Pn?r.endTime(!1):t._dur,o,l,h;return qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),h=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),h&&n&&(l=l/100*(tn(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ls=function(t,e,n){var i=hi(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=cn(l.vars.inherit)&&l.parent;a.immediateRender=cn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Oe(e[0],a,e[r+1])},Ni=function(t,e){return t||t===0?e(t):e},Ts=function(t,e,n){return n<t?t:n>e?e:n},Ze=function(t,e){return!qe(t)||!(e=n0.exec(t))?"":e[1]},p0=function(t,e,n){return Ni(n,function(i){return Ts(t,e,i)})},Uo=[].slice,pu=function(t,e){return t&&Zn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Zn(t[0]))&&!t.nodeType&&t!==Hn},m0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return qe(i)&&!e||pu(i,1)?(r=n).push.apply(r,Ln(i)):n.push(i)})||n},Ln=function(t,e,n){return be&&!e&&be.selector?be.selector(t):qe(t)&&!n&&(Lo||!Gr())?Uo.call((e||rl).querySelectorAll(t),0):tn(t)?m0(t,n):pu(t)?Uo.call(t,0):t?[t]:[]},Fo=function(t){return t=Ln(t)[0]||ms("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ln(e,n.querySelectorAll?n:n===t?ms("Invalid scope")||rl.createElement("div"):t)}},mu=function(t){return t.sort(function(){return .5-Math.random()})},vu=function(t){if(Le(t))return t;var e=Zn(t)?t:{each:t},n=Ji(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,h=e.axis,c=i,u=i;return qe(i)?c=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(c=i[0],u=i[1]),function(d,f,v){var g=(v||e).length,m=a[g],p,_,x,y,E,b,A,R,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,Pn])[1],!M){for(A=-Pn;A<(A=v[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=a[g]=[],p=l?Math.min(M,g)*c-.5:i%M,_=M===Pn?0:l?g*u/M-.5:i/M|0,A=0,R=Pn,b=0;b<g;b++)x=b%M-p,y=_-(b/M|0),m[b]=E=h?Math.abs(h==="y"?y:x):Zh(x*x+y*y),E>A&&(A=E),E<R&&(R=E);i==="random"&&mu(m),m.max=A-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:h?h==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ze(e.amount||e.each)||0,n=n&&g<0?bu(n):n}return g=(m[d]-m.min)/m.max||0,We(m.b+(n?n(g):g)*m.v)+m.u}},Oo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=We(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(hi(n)?0:Ze(n))}},gu=function(t,e){var n=tn(t),i,r;return!n&&Zn(t)&&(i=n=t.radius||Pn,t.values?(t=Ln(t.values),(r=!hi(t[0]))&&(i*=i)):t=Oo(t.increment)),Ni(e,n?Le(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),h=Pn,c=0,u=t.length,d,f;u--;)r?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<h&&(h=d,c=u);return c=!i||h<=i?t[c]:a,r||c===a||hi(a)?c:c+Ze(a)}:Oo(t))},_u=function(t,e,n,i){return Ni(tn(t)?!e:n===!0?!!(n=0):!i,function(){return tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},v0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},g0=function(t,e){return function(n){return t(parseFloat(n))+(e||Ze(n))}},_0=function(t,e,n){return yu(t,e,0,1,n)},xu=function(t,e,n){return Ni(n,function(i){return t[~~e(i)]})},x0=function s(t,e,n){var i=e-t;return tn(t)?xu(t,s(0,t.length),e):Ni(n,function(r){return(i+(r-t)%i)%i+t})},y0=function s(t,e,n){var i=e-t,r=i*2;return tn(t)?xu(t,s(0,t.length-1),e):Ni(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},gs=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?eu:Po),n+=t.substr(e,i-e)+_u(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},yu=function(t,e,n,i,r){var a=e-t,o=i-n;return Ni(r,function(l){return n+((l-t)/a*o||0)})},E0=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=qe(t),o={},l,h,c,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(tn(t)&&!tn(e)){for(c=[],u=t.length,d=u-2,h=1;h<u;h++)c.push(s(t[h-1],t[h]));u--,r=function(v){v*=u;var g=Math.min(d,~~v);return c[g](v-g)},n=e}else i||(t=ir(tn(t)?[]:{},t));if(!c){for(l in e)cl.call(o,t,l,"get",e[l]);r=function(v){return fl(v,o)||(a?t.p:t)}}}return Ni(n,r)},eh=function(t,e,n){var i=t.labels,r=Pn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},En=function(t,e,n){var i=t.vars,r=i[e],a=be,o=t._ctx,l,h,c;if(r)return l=i[e+"Params"],h=i.callbackScope||t,n&&Ci.length&&da(),o&&(be=o),c=l?r.apply(h,l):r.call(h),be=a,c},ns=function(t){return Li(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&En(t,"onInterrupt"),t},Pr,Eu=[],Mu=function(t){if(t)if(t=!t.name&&t.default||t,il()||t.headless){var e=t.name,n=Le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:vs,render:fl,add:cl,kill:O0,modifier:F0,rawVars:0},a={targetTest:0,get:0,getSetter:dl,aliases:{},register:0};if(Gr(),t!==i){if(xn[e])return;In(i,In(fa(t,r),a)),ir(i.prototype,ir(r,fa(t,a))),xn[i.prop=e]=i,t.targetTest&&(ia.push(i),al[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ru(e,i),t.register&&t.register(fn,i,un)}else Eu.push(t)},ye=255,is={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},ho=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},Su=function(t,e,n){var i=t?hi(t)?[t>>16,t>>8&ye,t&ye]:0:is.black,r,a,o,l,h,c,u,d,f,v;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),is[t])i=is[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=v=t.match(Po),!e)l=+i[0]%360/360,h=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(h+1):c+h-c*h,r=c*2-a,i.length>3&&(i[3]*=1),i[0]=ho(l+1/3,r,a),i[1]=ho(l,r,a),i[2]=ho(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Qh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Po)||is.transparent;i=i.map(Number)}return e&&!v&&(r=i[0]/ye,a=i[1]/ye,o=i[2]/ye,u=Math.max(r,a,o),d=Math.min(r,a,o),c=(u+d)/2,u===d?l=h=0:(f=u-d,h=c>.5?f/(2-u-d):f/(u+d),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(h*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},wu=function(t){var e=[],n=[],i=-1;return t.split(Ri).forEach(function(r){var a=r.match(Rr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},nh=function(t,e,n){var i="",r=(t+i).match(Ri),a=e?"hsla(":"rgba(",o=0,l,h,c,u;if(!r)return t;if(r=r.map(function(d){return(d=Su(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(c=wu(t),l=n.c,l.join(i)!==c.c.join(i)))for(h=t.replace(Ri,"1").split(Rr),u=h.length-1;o<u;o++)i+=h[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(c.length?c:r.length?r:n).shift());if(!h)for(h=t.split(Ri),u=h.length-1;o<u;o++)i+=h[o]+r[o];return i+h[u]},Ri=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in is)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),M0=/hsl[a]?\(/,Tu=function(t){var e=t.join(" "),n;if(Ri.lastIndex=0,Ri.test(e))return n=M0.test(e),t[1]=nh(t[1],n),t[0]=nh(t[0],n,wu(t[1])),!0},_s,yn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,h,c,u,d,f,v=function g(m){var p=s()-i,_=m===!0,x,y,E,b;if((p>t||p<0)&&(n+=p-e),i+=p,E=i-n,x=E-a,(x>0||_)&&(b=++u.frame,d=E-u.time*1e3,u.time=E=E/1e3,a+=x+(x>=r?4:r-x),y=1),_||(l=h(g)),y)for(f=0;f<o.length;f++)o[f](E,d,b,m)};return u={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){nu&&(!Lo&&il()&&(Hn=Lo=window,rl=Hn.document||{},Sn.gsap=fn,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(fn.version),iu(ua||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),Eu.forEach(Mu)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),h=c||function(m){return setTimeout(m,a-u.time*1e3+1|0)},_s=1,v(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),_s=0,h=vs},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,_){var x=p?function(y,E,b,A){m(y,E,b,A),u.remove(x)}:m;return u.remove(m),o[_?"unshift":"push"](x),Gr(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Gr=function(){return!_s&&yn.wake()},pe={},S0=/^[\d.\-M][\d.\-,\s]/,w0=/["']/g,T0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,h;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,h=l.substr(0,o),e[i]=isNaN(h)?h.replace(w0,"").trim():+h,i=l.substr(o+1).trim();return e},b0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},A0=function(t){var e=(t+"").split("("),n=pe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[T0(e[1])]:b0(t).split(",").map(lu)):pe._CE&&S0.test(t)?pe._CE("",t):n},bu=function(t){return function(e){return 1-t(1-e)}},Au=function s(t,e){for(var n=t._first,i;n;)n instanceof sn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ji=function(t,e){return t&&(Le(t)?t:pe[t]||A0(t))||e},or=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return hn(t,function(o){pe[o]=Sn[o]=r,pe[a=o.toLowerCase()]=n;for(var l in r)pe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pe[o+"."+l]=r[l]}),r},Cu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},uo=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Ro*(Math.asin(1/i)||0),o=function(c){return c===1?1:i*Math.pow(2,-10*c)*e0((c-a)*r)+1},l=t==="out"?o:t==="in"?function(h){return 1-o(1-h)}:Cu(o);return r=Ro/r,l.config=function(h,c){return s(t,h,c)},l},fo=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Cu(n);return i.config=function(r){return s(t,r)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;or(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});pe.Linear.easeNone=pe.none=pe.Linear.easeIn;or("Elastic",uo("in"),uo("out"),uo());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};or("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);or("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});or("Circ",function(s){return-(Zh(1-s*s)-1)});or("Sine",function(s){return s===1?1:-t0(s*J_)+1});or("Back",fo("in"),fo("out"),fo());pe.SteppedEase=pe.steps=Sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Ee;return function(o){return((i*Ts(0,a,o)|0)+r)*n}}};Vr.ease=pe["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ol+=s+","+s+"Params,"});var Ru=function(t,e){this.id=Q_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:au,this.set=e?e.getSetter:dl},xs=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Hr(this,+e.duration,1,1),this.data=e.data,be&&(this._ctx=be,be.data.push(this)),_s||yn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Hr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Gr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ba(this,n),!r._dp||r.parent||uu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ou(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Qc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Qc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?kr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?pa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(Ts(-Math.abs(this._delay),this._tDur,r),i!==!1),Ta(this),l0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=r0);var i=Qe;return Qe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,th(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,th(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Tn(this,n),cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,cn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Le(n)?n:cu,o=function(){var h=i.then;i.then=null,Le(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),r(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){ns(this)},s}();In(xs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var sn=function(s){Kh(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=cn(n.sortChildren),Ce&&Xn(n.parent||Ce,si(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&du(si(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return ls(0,arguments,this),this},e.from=function(i,r,a){return ls(1,arguments,this),this},e.fromTo=function(i,r,a,o){return ls(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,os(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Oe(i,r,Tn(this,a),1),this},e.call=function(i,r,a){return Xn(this,Oe.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,h,c){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=h,a.onCompleteParams=c,a.parent=this,new Oe(i,a,Tn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,h,c){return a.runBackwards=1,os(a).immediateRender=cn(a.immediateRender),this.staggerTo(i,r,a,o,l,h,c)},e.staggerFromTo=function(i,r,a,o,l,h,c,u){return o.startAt=a,os(o).immediateRender=cn(o.immediateRender),this.staggerTo(i,r,o,l,h,c,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,h=this._dur,c=i<=0?0:We(i),u=this._zTime<0!=i<0&&(this._initted||!h),d,f,v,g,m,p,_,x,y,E,b,A;if(this!==Ce&&c>l&&i>=0&&(c=l),c!==this._tTime||a||u){if(o!==this._time&&h&&(c+=this._time-o,i+=this._time-o),d=c,y=this._start,x=this._ts,p=!x,u&&(h||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=h+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(d=We(c%m),c===l?(g=this._repeat,d=h):(g=~~(c/m),g&&g===c/m&&(d=h,g--),d>h&&(d=h)),E=kr(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),b&&g&1&&(d=h-d,A=1),g!==E&&!this._lock){var R=b&&E&1,M=R===(b&&g&1);if(g<E&&(R=!R),o=R?0:c%h?h:c,this._lock=1,this.render(o||(A?0:We(g*m)),r,!h)._lock=0,this._tTime=c,!r&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,l=this._tDur,M&&(this._lock=2,o=R?h:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Au(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=d0(this,We(o),We(d)),_&&(c-=d-(d=_._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&!g&&(En(this,"onStart"),this._tTime!==c))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(v=f._next,(f._act||d>=f._start)&&f._ts&&_!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){_=0,v&&(c+=this._zTime=-Ee);break}}f=v}else{f=this._last;for(var S=i<0?i:d;f;){if(v=f._prev,(f._act||S<=f._end)&&f._ts&&_!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,r,a||Qe&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){_=0,v&&(c+=this._zTime=S?-Ee:Ee);break}}f=v}}if(_&&!r&&(this.pause(),_.render(d>=o?0:-Ee)._zTime=d>=o?1:-1,this._ts))return this._start=y,Ta(this),this.render(i,r,a);this._onUpdate&&!r&&En(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!h)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Li(this,1),!r&&!(i<0&&!o)&&(c||o||!l)&&(En(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(hi(r)||(r=Tn(this,r,i)),!(i instanceof xs)){if(tn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(qe(i))return this.addLabel(i,r);if(Le(i))i=Oe.delayedCall(0,i);else return this}return this!==i?Xn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Pn);for(var l=[],h=this._first;h;)h._start>=o&&(h instanceof Oe?r&&l.push(h):(a&&l.push(h),i&&l.push.apply(l,h.getChildren(!0,r,a)))),h=h._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return qe(i)?this.removeLabel(i):Le(i)?this.killTweensOf(i):(wa(this,i),i===this._recent&&(this._recent=this._last),Zi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=We(yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Tn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Oe.delayedCall(0,r||vs,a);return o.data="isPause",this._hasPause=1,Xn(this,o,Tn(this,i))},e.removePause=function(i){var r=this._first;for(i=Tn(this,i);r;)r._start===i&&r.data==="isPause"&&Li(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Mi!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Ln(i),l=this._first,h=hi(r),c;l;)l instanceof Oe?s0(l._targets,o)&&(h?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(c=l.getTweensOf(o,r)).length&&a.push.apply(a,c),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Tn(a,i),l=r,h=l.startAt,c=l.onStart,u=l.onStartParams,d=l.immediateRender,f,v=Oe.to(a,In({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(h&&"time"in h?h.time:a._time))/a.timeScale())||Ee,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(h&&"time"in h?h.time:a._time))/a.timeScale());v._dur!==m&&Hr(v,m,0,1).render(v._time,!0,!0),f=1}c&&c.apply(v,u||[])}},r));return d?v.render(0):v},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,In({startAt:{time:Tn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),eh(this,Tn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),eh(this,Tn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,h;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(h in l)l[h]>=a&&(l[h]+=i);return Zi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zi(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Pn,h,c,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)h=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xn(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(r-=c,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=h;Hr(a,a===Ce&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ce._ts&&(ou(Ce,pa(i,Ce)),su=yn.frame),yn.frame>=Zc){Zc+=Mn.autoSleep||120;var r=Ce._first;if((!r||!r._ts)&&Mn.autoSleep&&yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||yn.sleep()}}},t}(xs);In(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var C0=function(t,e,n,i,r,a,o){var l=new un(this._pt,t,e,0,1,Uu,null,r),h=0,c=0,u,d,f,v,g,m,p,_;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=gs(i)),a&&(_=[n,i],a(_,t,e),n=_[0],i=_[1]),d=n.match(lo)||[];u=lo.exec(i);)v=u[0],g=i.substring(h,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),v!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:v.charAt(1)==="="?Ir(m,v)-m:parseFloat(v)-m,m:f&&f<4?Math.round:0},h=lo.lastIndex);return l.c=h<i.length?i.substring(h,i.length):"",l.fp=o,(tu.test(i)||p)&&(l.e=0),this._pt=l,l},cl=function(t,e,n,i,r,a,o,l,h,c){Le(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:Le(u)?h?t[e.indexOf("set")||!Le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():u,f=Le(u)?h?I0:Iu:ul,v;if(qe(i)&&(~i.indexOf("random(")&&(i=gs(i)),i.charAt(1)==="="&&(v=Ir(d,i)+(Ze(d)||0),(v||v===0)&&(i=v))),!c||d!==i||Bo)return!isNaN(d*i)&&i!==""?(v=new un(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?U0:Nu,0,f),h&&(v.fp=h),o&&v.modifier(o,this,t),this._pt=v):(!u&&!(e in t)&&sl(e,i),C0.call(this,t,e,d,i,f,l||Mn.stringFilter,h))},R0=function(t,e,n,i,r){if(Le(t)&&(t=cs(t,r,e,n,i)),!Zn(t)||t.style&&t.nodeType||tn(t)||Jh(t))return qe(t)?cs(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=cs(t[o],r,e,n,i);return a},Pu=function(t,e,n,i,r,a){var o,l,h,c;if(xn[t]&&(o=new xn[t]).init(r,o.rawVars?e[t]:R0(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new un(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==Pr))for(h=n._ptLookup[n._targets.indexOf(r)],c=o._props.length;c--;)h[o._props[c]]=l;return o},Mi,Bo,hl=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,h=i.onUpdate,c=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,v=t._dur,g=t._startAt,m=t._targets,p=t.parent,_=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!el,y=t.timeline,E,b,A,R,M,S,P,z,V,N,k,J,F;if(y&&(!d||!r)&&(r="none"),t._ease=Ji(r,Vr.ease),t._yEase=u?bu(Ji(u===!0?r:u,Vr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(z=m[0]?Ki(m[0]).harness:0,J=z&&i[z.prop],E=fa(i,al),g&&(g._zTime<0&&g.progress(1),e<0&&c&&o&&!f?g.render(-1,!0):g.revert(c&&v?na:i0),g._lazy=0),a){if(Li(t._startAt=Oe.set(m,In({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&cn(l),startAt:null,delay:0,onUpdate:h&&function(){return En(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!o&&!f)&&t._startAt.revert(na),o&&v&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(c&&v&&!g){if(e&&(o=!1),A=In({overwrite:!1,data:"isFromStart",lazy:o&&!g&&cn(l),immediateRender:o,stagger:0,parent:p},E),J&&(A[z.prop]=J),Li(t._startAt=Oe.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(na):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=v&&cn(l)||l&&!v,b=0;b<m.length;b++){if(M=m[b],P=M._gsap||ll(m)[b]._gsap,t._ptLookup[b]=N={},Do[P.id]&&Ci.length&&da(),k=_===m?b:_.indexOf(M),z&&(V=new z).init(M,J||E,t,k,_)!==!1&&(t._pt=R=new un(t._pt,M,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(B){N[B]=R}),V.priority&&(S=1)),!z||J)for(A in E)xn[A]&&(V=Pu(A,E,t,k,M,_))?V.priority&&(S=1):N[A]=R=cl.call(t,M,A,"get",E[A],k,_,0,i.stringFilter);t._op&&t._op[b]&&t.kill(M,t._op[b]),x&&t._pt&&(Mi=t,Ce.killTweensOf(M,N,t.globalTime(e)),F=!t.parent,Mi=0),t._pt&&l&&(Do[P.id]=1)}S&&Fu(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!F,d&&e<=0&&y.render(Pn,!0,!0)},P0=function(t,e,n,i,r,a,o,l){var h=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,d,f;if(!h)for(h=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(c=d[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Bo=1,t.vars[e]="+=0",hl(t,o),Bo=0,l?ms(e+" not eligible for reset"):1;h.push(c)}for(f=h.length;f--;)u=h[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Ne(n)+Ze(u.e)),u.b&&(u.b=c.s+Ze(u.b))},L0=function(t,e){var n=t[0]?Ki(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=ir({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},D0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(tn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,h){return o.push({t:h/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},cs=function(t,e,n,i,r){return Le(t)?t.call(e,n,i,r):qe(t)&&~t.indexOf("random(")?gs(t):t},Lu=ol+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Du={};hn(Lu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Du[s]=1});var Oe=function(s){Kh(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:os(i))||this;var l=o.vars,h=l.duration,c=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,_=i.parent||Ce,x=(tn(n)||Jh(n)?hi(n[0]):"length"in i)?[n]:Ln(n),y,E,b,A,R,M,S,P;if(o._targets=x.length?ll(x):ms("GSAP target "+n+" not found. https://gsap.com",!Mn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,v||d||ta(h)||ta(c)){if(i=o.vars,y=o.timeline=new sn({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:x}),y.kill(),y.parent=y._dp=si(o),y._start=0,d||ta(h)||ta(c)){if(A=x.length,S=d&&vu(d),Zn(d))for(R in d)~Lu.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(E=0;E<A;E++)b=fa(i,Du),b.stagger=0,p&&(b.yoyoEase=p),P&&ir(b,P),M=x[E],b.duration=+cs(h,si(o),E,M,x),b.delay=(+cs(c,si(o),E,M,x)||0)-o._delay,!d&&A===1&&b.delay&&(o._delay=c=b.delay,o._start+=c,b.delay=0),y.to(M,b,S?S(E,M,x):0),y._ease=pe.none;y.duration()?h=c=0:o.timeline=0}else if(v){os(In(y.vars.defaults,{ease:"none"})),y._ease=Ji(v.ease||i.ease||"none");var z=0,V,N,k;if(tn(v))v.forEach(function(J){return y.to(x,J,">")}),y.duration();else{b={};for(R in v)R==="ease"||R==="easeEach"||D0(R,v[R],b,v.easeEach);for(R in b)for(V=b[R].sort(function(J,F){return J.t-F.t}),z=0,E=0;E<V.length;E++)N=V[E],k={ease:N.e,duration:(N.t-(E?V[E-1].t:0))/100*h},k[R]=N.v,y.to(x,k,z),z+=k.duration;y.duration()<h&&y.to({},{duration:h-y.duration()})}}h||o.duration(h=y.duration())}else o.timeline=0;return f===!0&&!el&&(Mi=si(o),Ce.killTweensOf(x),Mi=0),Xn(_,si(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!h&&!v&&o._start===We(_._time)&&cn(u)&&c0(si(o))&&_.data!=="nested")&&(o._tTime=-Ee,o.render(Math.max(0,-c)||0)),m&&du(si(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,h=this._dur,c=i<0,u=i>l-Ee&&!c?l:i<Ee?0:i,d,f,v,g,m,p,_,x,y;if(!h)u0(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=u,x=this.timeline,this._repeat){if(g=h+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+i,r,a);if(d=We(u%g),u===l?(v=this._repeat,d=h):(v=~~(u/g),v&&v===We(u/g)&&(d=h,v--),d>h&&(d=h)),p=this._yoyo&&v&1,p&&(y=this._yEase,d=h-d),m=kr(this._tTime,g),d===o&&!a&&this._initted&&v===m)return this._tTime=u,this;v!==m&&(x&&this._yEase&&Au(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(We(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(fu(this,c?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&v!==m))return this;if(h!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(d/h),this._from&&(this.ratio=_=1-_),d&&!o&&!r&&!v&&(En(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(_,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(c&&Io(this,i,r,a),En(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!r&&this.parent&&En(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(c&&!this._onUpdate&&Io(this,i,!0,!0),(i||!h)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Li(this,1),!r&&!(c&&!o)&&(u||o||p)&&(En(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){_s||yn.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||hl(this,h),c=this._ease(h/this._dur),P0(this,i,r,a,o,c,h,l)?this.resetTo(i,r,a,o,1):(ba(this,0),this.parent||hu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ns(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Mi&&Mi.vars.overwrite!==!0)._first||ns(this),this.parent&&a!==this.timeline.totalDuration()&&Hr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ln(i):o,h=this._ptLookup,c=this._pt,u,d,f,v,g,m,p;if((!r||r==="all")&&o0(o,l))return r==="all"&&(this._pt=0),ns(this);for(u=this._op=this._op||[],r!=="all"&&(qe(r)&&(g={},hn(r,function(_){return g[_]=1}),r=g),r=L0(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){d=h[p],r==="all"?(u[p]=r,v=d,f={}):(f=u[p]=u[p]||{},v=r);for(g in v)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&wa(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&c&&ns(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ls(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return ls(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Ce.killTweensOf(i,r,a)},t}(xs);In(Oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(s){Oe[s]=function(){var t=new sn,e=Uo.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ul=function(t,e,n){return t[e]=n},Iu=function(t,e,n){return t[e](n)},I0=function(t,e,n,i){return t[e](i.fp,n)},N0=function(t,e,n){return t.setAttribute(e,n)},dl=function(t,e){return Le(t[e])?Iu:nl(t[e])&&t.setAttribute?N0:ul},Nu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},U0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Uu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},fl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},F0=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},O0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?wa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},B0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Fu=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},un=function(){function s(e,n,i,r,a,o,l,h,c){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Nu,this.d=l||this,this.set=h||ul,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=B0,this.m=n,this.mt=r,this.tween=i},s}();hn(ol+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return al[s]=1});Sn.TweenMax=Sn.TweenLite=Oe;Sn.TimelineLite=Sn.TimelineMax=sn;Ce=new sn({sortChildren:!1,defaults:Vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mn.stringFilter=Tu;var Qi=[],ra={},z0=[],ih=0,V0=0,po=function(t){return(ra[t]||z0).map(function(e){return e()})},zo=function(){var t=Date.now(),e=[];t-ih>2&&(po("matchMediaInit"),Qi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,h;for(o in i)a=Hn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,h=1);h&&(n.revert(),l&&e.push(n))}),po("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ih=t,po("matchMedia"))},Ou=function(){function s(e,n){this.selector=n&&Fo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=V0++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Le(n)&&(r=i,i=n,n=Le);var a=this,o=function(){var h=be,c=a.selector,u;return h&&h!==a&&h.data.push(a),r&&(a.selector=Fo(r)),be=a,u=i.apply(a,arguments),Le(u)&&a._r.push(u),be=h,a.selector=c,a.isReverted=!1,u};return a.last=o,n===Le?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=be;be=null,n(this),be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,h;l--;)h=r.data[l],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,u){return u.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=r.data.length;l--;)h=r.data[l],h instanceof sn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Oe)&&h.revert&&h.revert(n);r._r.forEach(function(c){return c(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Qi.length;a--;)Qi[a].id===this.id&&Qi.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),k0=function(){function s(e){this.contexts=[],this.scope=e,be&&be.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Zn(n)||(n={matches:n});var a=new Ou(0,r||this.scope),o=a.conditions={},l,h,c;be&&!a.selector&&(a.selector=be.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(h in n)h==="all"?c=1:(l=Hn.matchMedia(n[h]),l&&(Qi.indexOf(a)<0&&Qi.push(a),(o[h]=l.matches)&&(c=1),l.addListener?l.addListener(zo):l.addEventListener("change",zo)));return c&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ma={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Mu(i)})},timeline:function(t){return new sn(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){qe(t)&&(t=Ln(t)[0]);var r=Ki(t||{}).get,a=n?cu:lu;return n==="native"&&(n=""),t&&(e?a((xn[e]&&xn[e].get||r)(t,e,n,i)):function(o,l,h){return a((xn[o]&&xn[o].get||r)(t,o,l,h))})},quickSetter:function(t,e,n){if(t=Ln(t),t.length>1){var i=t.map(function(c){return fn.quickSetter(c,e,n)}),r=i.length;return function(c){for(var u=r;u--;)i[u](c)}}t=t[0]||{};var a=xn[e],o=Ki(t),l=o.harness&&(o.harness.aliases||{})[e]||e,h=a?function(c){var u=new a;Pr._pt=0,u.init(t,n?c+n:c,Pr,0,[t]),u.render(1,u),Pr._pt&&fl(1,Pr)}:o.set(t,l);return a?h:function(c){return h(t,l,n?c+n:c,o,1)}},quickTo:function(t,e,n){var i,r=fn.to(t,ir((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,h,c){return r.resetTo(e,l,h,c)};return a.tween=r,a},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ji(t.ease,Vr.ease)),Jc(Vr,t||{})},config:function(t){return Jc(Mn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!xn[o]&&!Sn[o]&&ms(e+" effect requires "+o+" plugin.")}),co[e]=function(o,l,h){return n(Ln(o),In(l||{},r),h)},a&&(sn.prototype[e]=function(o,l,h){return this.add(co[e](o,Zn(l)?l:(h=l)&&{},this),h)})},registerEase:function(t,e){pe[t]=Ji(e)},parseEase:function(t,e){return arguments.length?Ji(t,e):pe},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new sn(t),i,r;for(n.smoothChildTiming=cn(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Oe&&i.vars.onComplete===i._targets[0]))&&Xn(n,i,i._start-i._delay),i=r;return Xn(Ce,n,0),n},context:function(t,e){return t?new Ou(t,e):be},matchMedia:function(t){return new k0(t)},matchMediaRefresh:function(){return Qi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||zo()},addEventListener:function(t,e){var n=ra[t]||(ra[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ra[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:x0,wrapYoyo:y0,distribute:vu,random:_u,snap:gu,normalize:_0,getUnit:Ze,clamp:p0,splitColor:Su,toArray:Ln,selector:Fo,mapRange:yu,pipe:v0,unitize:g0,interpolate:E0,shuffle:mu},install:iu,effects:co,ticker:yn,updateRoot:sn.updateRoot,plugins:xn,globalTimeline:Ce,core:{PropTween:un,globals:ru,Tween:Oe,Timeline:sn,Animation:xs,getCache:Ki,_removeLinkedListItem:wa,reverting:function(){return Qe},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return el=t}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ma[s]=Oe[s]});yn.add(sn.updateRoot);Pr=ma.to({},{duration:0});var H0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},G0=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=H0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},mo=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,h;if(qe(r)&&(l={},hn(r,function(c){return l[c]=1}),r=l),e){l={};for(h in r)l[h]=e(r[h]);r=l}G0(o,r)}}}},fn=ma.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},mo("roundProps",Oo),mo("modifiers"),mo("snap",gu))||ma;Oe.version=sn.version=fn.version="3.12.5";nu=1;il()&&Gr();pe.Power0;pe.Power1;pe.Power2;pe.Power3;pe.Power4;pe.Linear;pe.Quad;pe.Cubic;pe.Quart;pe.Quint;pe.Strong;pe.Elastic;pe.Back;pe.SteppedEase;pe.Bounce;pe.Sine;pe.Expo;pe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rh,Si,Nr,pl,qi,sh,ml,W0=function(){return typeof window<"u"},ui={},Gi=180/Math.PI,Ur=Math.PI/180,br=Math.atan2,ah=1e8,vl=/([A-Z])/g,X0=/(left|right|width|margin|padding|x)/i,q0=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Y0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},j0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Bu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},zu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},K0=function(t,e,n){return t.style[e]=n},Z0=function(t,e,n){return t.style.setProperty(e,n)},J0=function(t,e,n){return t._gsap[e]=n},Q0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},tx=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},ex=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Re="transform",dn=Re+"Origin",nx=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ui&&r){if(this.tfm=this.tfm||{},t!=="transform")t=qn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ai(i,o)}):this.tfm[t]=a.x?a[t]:ai(i,t),t===dn&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Re)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(dn,e,"")),t=Re}(r||e)&&this.props.push(t,e,r[t])},Vu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ix=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(vl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ml(),(!r||!r.isStart)&&!n[Re]&&(Vu(n),i.zOrigin&&n[dn]&&(n[dn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ku=function(t,e){var n={target:t,props:[],revert:ix,save:nx};return t._gsap||fn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Hu,ko=function(t,e){var n=Si.createElementNS?Si.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Si.createElement(t);return n&&n.style?n:Si.createElement(t)},Kn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(vl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Wr(e)||e,1)||""},oh="O,Moz,ms,Ms,Webkit".split(","),Wr=function(t,e,n){var i=e||qi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(oh[a]+t in r););return a<0?null:(a===3?"ms":a>=0?oh[a]:"")+t},Ho=function(){W0()&&window.document&&(rh=window,Si=rh.document,Nr=Si.documentElement,qi=ko("div")||{style:{}},ko("div"),Re=Wr(Re),dn=Re+"Origin",qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hu=!!Wr("perspective"),ml=fn.core.reverting,pl=1)},vo=function s(t){var e=ko("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Nr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Nr.removeChild(e),this.style.cssText=r,a},lh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Gu=function(t){var e;try{e=t.getBBox()}catch{e=vo.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===vo||(e=vo.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+lh(t,["x","cx","x1"])||0,y:+lh(t,["y","cy","y1"])||0,width:0,height:0}:e},Wu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Gu(t))},rr=function(t,e){if(e){var n=t.style,i;e in ui&&e!==dn&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(vl,"-$1").toLowerCase())):n.removeAttribute(e)}},wi=function(t,e,n,i,r,a){var o=new un(t._pt,e,n,0,1,a?zu:Bu);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},ch={deg:1,rad:1,turn:1},rx={grid:1,flex:1},Di=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=qi.style,l=X0.test(e),h=t.tagName.toLowerCase()==="svg",c=(h?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",v,g,m,p;if(i===a||!r||ch[i]||ch[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&Wu(t),(f||a==="%")&&(ui[e]||~e.indexOf("adius")))return v=p?t.getBBox()[l?"width":"height"]:t[c],Ne(f?r/v*u:r/100*v);if(o[l?"width":"height"]=u+(d?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!h?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Si||!g.appendChild)&&(g=Si.body),m=g._gsap,m&&f&&m.width&&l&&m.time===yn.time&&!m.uncache)return Ne(r/m.width*u);if(f&&(e==="height"||e==="width")){var _=t.style[e];t.style[e]=u+i,v=t[c],_?t.style[e]=_:rr(t,e)}else(f||a==="%")&&!rx[Kn(g,"display")]&&(o.position=Kn(t,"position")),g===t&&(o.position="static"),g.appendChild(qi),v=qi[c],g.removeChild(qi),o.position="absolute";return l&&f&&(m=Ki(g),m.time=yn.time,m.width=g[c]),Ne(d?v*r/u:v&&r?u/v*r:0)},ai=function(t,e,n,i){var r;return pl||Ho(),e in qn&&e!=="transform"&&(e=qn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ui[e]&&e!=="transform"?(r=Es(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ga(Kn(t,dn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=va[e]&&va[e](t,e,n)||Kn(t,e)||au(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Di(t,e,r,n)+n:r},sx=function(t,e,n,i){if(!n||n==="none"){var r=Wr(e,t,1),a=r&&Kn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Kn(t,"borderTopColor"))}var o=new un(this._pt,t.style,e,0,1,Uu),l=0,h=0,c,u,d,f,v,g,m,p,_,x,y,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Kn(t,e)||i,g?t.style[e]=g:rr(t,e)),c=[n,i],Tu(c),n=c[0],i=c[1],d=n.match(Rr)||[],E=i.match(Rr)||[],E.length){for(;u=Rr.exec(i);)m=u[0],_=i.substring(l,u.index),v?v=(v+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(v=1),m!==(g=d[h++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=Ir(f,m)+y),p=parseFloat(m),x=m.substr((p+"").length),l=Rr.lastIndex-x.length,x||(x=x||Mn.units[e]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(f=Di(t,e,g,x)||0),o._pt={_next:o._pt,p:_||h===1?_:",",s:f,c:p-f,m:v&&v<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?zu:Bu;return tu.test(i)&&(o.e=0),this._pt=o,o},hh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ax=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=hh[n]||n,e[1]=hh[i]||i,e.join(" ")},ox=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,h;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),h=r.length;--h>-1;)o=r[h],ui[o]&&(l=1,o=o==="transformOrigin"?dn:Re),rr(n,o);l&&(rr(n,Re),a&&(a.svg&&n.removeAttribute("transform"),Es(n,1),a.uncache=1,Vu(i)))}},va={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new un(t._pt,e,n,0,0,ox);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},ys=[1,0,0,1,0,0],Xu={},qu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},uh=function(t){var e=Kn(t,Re);return qu(e)?ys:e.substr(7).match(Qh).map(Ne)},gl=function(t,e){var n=t._gsap||Ki(t),i=t.style,r=uh(t),a,o,l,h;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ys:r):(r===ys&&!t.offsetParent&&t!==Nr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(h=1,o=t.nextElementSibling,Nr.appendChild(t)),r=uh(t),l?i.display=l:rr(t,"display"),h&&(o?a.insertBefore(t,o):a?a.appendChild(t):Nr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Go=function(t,e,n,i,r,a){var o=t._gsap,l=r||gl(t,!0),h=o.xOrigin||0,c=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],v=l[1],g=l[2],m=l[3],p=l[4],_=l[5],x=e.split(" "),y=parseFloat(x[0])||0,E=parseFloat(x[1])||0,b,A,R,M;n?l!==ys&&(A=f*m-v*g)&&(R=y*(m/A)+E*(-g/A)+(g*_-m*p)/A,M=y*(-v/A)+E*(f/A)-(f*_-v*p)/A,y=R,E=M):(b=Gu(t),y=b.x+(~x[0].indexOf("%")?y/100*b.width:y),E=b.y+(~(x[1]||x[0]).indexOf("%")?E/100*b.height:E)),i||i!==!1&&o.smooth?(p=y-h,_=E-c,o.xOffset=u+(p*f+_*g)-p,o.yOffset=d+(p*v+_*m)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[dn]="0px 0px",a&&(wi(a,o,"xOrigin",h,y),wi(a,o,"yOrigin",c,E),wi(a,o,"xOffset",u,o.xOffset),wi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+E)},Es=function(t,e){var n=t._gsap||new Ru(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),h=Kn(t,dn)||"0",c,u,d,f,v,g,m,p,_,x,y,E,b,A,R,M,S,P,z,V,N,k,J,F,B,q,X,T,O,U,D,L;return c=u=d=g=m=p=_=x=y=0,f=v=1,n.svg=!!(t.getCTM&&Wu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Re]!=="none"?l[Re]:"")),i.scale=i.rotate=i.translate="none"),A=gl(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),h=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),Go(t,F||h,!!F||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,b=n.yOrigin||0,A!==ys&&(P=A[0],z=A[1],V=A[2],N=A[3],c=k=A[4],u=J=A[5],A.length===6?(f=Math.sqrt(P*P+z*z),v=Math.sqrt(N*N+V*V),g=P||z?br(z,P)*Gi:0,_=V||N?br(V,N)*Gi+g:0,_&&(v*=Math.abs(Math.cos(_*Ur))),n.svg&&(c-=E-(E*P+b*V),u-=b-(E*z+b*N))):(L=A[6],U=A[7],X=A[8],T=A[9],O=A[10],D=A[11],c=A[12],u=A[13],d=A[14],R=br(L,O),m=R*Gi,R&&(M=Math.cos(-R),S=Math.sin(-R),F=k*M+X*S,B=J*M+T*S,q=L*M+O*S,X=k*-S+X*M,T=J*-S+T*M,O=L*-S+O*M,D=U*-S+D*M,k=F,J=B,L=q),R=br(-V,O),p=R*Gi,R&&(M=Math.cos(-R),S=Math.sin(-R),F=P*M-X*S,B=z*M-T*S,q=V*M-O*S,D=N*S+D*M,P=F,z=B,V=q),R=br(z,P),g=R*Gi,R&&(M=Math.cos(R),S=Math.sin(R),F=P*M+z*S,B=k*M+J*S,z=z*M-P*S,J=J*M-k*S,P=F,k=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ne(Math.sqrt(P*P+z*z+V*V)),v=Ne(Math.sqrt(J*J+L*L)),R=br(k,J),_=Math.abs(R)>2e-4?R*Gi:0,y=D?1/(D<0?-D:D):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!qu(Kn(t,Re)),F&&t.setAttribute("transform",F))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(f*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,_+=_<=0?180:-180)),e=e||n.uncache,n.x=c-((n.xPercent=c&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ne(f),n.scaleY=Ne(v),n.rotation=Ne(g)+o,n.rotationX=Ne(m)+o,n.rotationY=Ne(p)+o,n.skewX=_+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(h.split(" ")[2])||!e&&n.zOrigin||0)&&(i[dn]=ga(h)),n.xOffset=n.yOffset=0,n.force3D=Mn.force3D,n.renderTransform=n.svg?cx:Hu?Yu:lx,n.uncache=0,n},ga=function(t){return(t=t.split(" "))[0]+" "+t[1]},go=function(t,e,n){var i=Ze(e);return Ne(parseFloat(e)+parseFloat(Di(t,"x",n+"px",i)))+i},lx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Yu(t,e)},Vi="0deg",ts="0px",ki=") ",Yu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,h=n.rotation,c=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,_=n.target,x=n.zOrigin,y="",E=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==Vi||c!==Vi)){var b=parseFloat(c)*Ur,A=Math.sin(b),R=Math.cos(b),M;b=parseFloat(u)*Ur,M=Math.cos(b),a=go(_,a,A*M*-x),o=go(_,o,-Math.sin(b)*-x),l=go(_,l,R*M*-x+x)}m!==ts&&(y+="perspective("+m+ki),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(E||a!==ts||o!==ts||l!==ts)&&(y+=l!==ts||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ki),h!==Vi&&(y+="rotate("+h+ki),c!==Vi&&(y+="rotateY("+c+ki),u!==Vi&&(y+="rotateX("+u+ki),(d!==Vi||f!==Vi)&&(y+="skew("+d+", "+f+ki),(v!==1||g!==1)&&(y+="scale("+v+", "+g+ki),_.style[Re]=y||"translate(0, 0)"},cx=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,h=n.skewX,c=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,_=n.forceCSS,x=parseFloat(a),y=parseFloat(o),E,b,A,R,M;l=parseFloat(l),h=parseFloat(h),c=parseFloat(c),c&&(c=parseFloat(c),h+=c,l+=c),l||h?(l*=Ur,h*=Ur,E=Math.cos(l)*u,b=Math.sin(l)*u,A=Math.sin(l-h)*-d,R=Math.cos(l-h)*d,h&&(c*=Ur,M=Math.tan(h-c),M=Math.sqrt(1+M*M),A*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),E*=M,b*=M)),E=Ne(E),b=Ne(b),A=Ne(A),R=Ne(R)):(E=u,R=d,b=A=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Di(f,"x",a,"px"),y=Di(f,"y",o,"px")),(v||g||m||p)&&(x=Ne(x+v-(v*E+g*A)+m),y=Ne(y+g-(v*b+g*R)+p)),(i||r)&&(M=f.getBBox(),x=Ne(x+i/100*M.width),y=Ne(y+r/100*M.height)),M="matrix("+E+","+b+","+A+","+R+","+x+","+y+")",f.setAttribute("transform",M),_&&(f.style[Re]=M)},hx=function(t,e,n,i,r){var a=360,o=qe(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Gi:1),h=l-i,c=i+h+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-a)),u==="cw"&&h<0?h=(h+a*ah)%a-~~(h/a)*a:u==="ccw"&&h>0&&(h=(h-a*ah)%a-~~(h/a)*a)),t._pt=d=new un(t._pt,e,n,i,h,Y0),d.e=c,d.u="deg",t._props.push(n),d},dh=function(t,e){for(var n in e)t[n]=e[n];return t},ux=function(t,e,n){var i=dh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,h,c,u,d,f,v;i.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),a[Re]=e,o=Es(n,1),rr(n,Re),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Re],a[Re]=e,o=Es(n,1),a[Re]=h);for(l in ui)h=i[l],c=o[l],h!==c&&r.indexOf(l)<0&&(f=Ze(h),v=Ze(c),u=f!==v?Di(n,l,h,v):parseFloat(h),d=parseFloat(c),t._pt=new un(t._pt,o,l,u,d-u,Vo),t._pt.u=v||0,t._props.push(l));dh(o,i)};hn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});va[t>1?"border"+s:s]=function(o,l,h,c,u){var d,f;if(arguments.length<4)return d=a.map(function(v){return ai(o,v,h)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(c+"").split(" "),f={},a.forEach(function(v,g){return f[v]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var $u={name:"css",register:Ho,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,h,c,u,d,f,v,g,m,p,_,x,y,E,b,A,R;pl||Ho(),this.styles=this.styles||ku(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(c=e[g],!(xn[g]&&Pu(g,e,n,i,t,r)))){if(f=typeof c,v=va[g],f==="function"&&(c=c.call(n,i,t,r),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=gs(c)),v)v(this,t,g,c,n)&&(A=1);else if(g.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(g)+"").trim(),c+="",Ri.lastIndex=0,Ri.test(h)||(m=Ze(h),p=Ze(c)),p?m!==p&&(h=Di(t,g,h,p)+p):m&&(c+=m),this.add(o,"setProperty",h,c,i,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(h=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],qe(h)&&~h.indexOf("random(")&&(h=gs(h)),Ze(h+"")||h==="auto"||(h+=Mn.units[g]||Ze(ai(t,g))||""),(h+"").charAt(1)==="="&&(h=ai(t,g))):h=ai(t,g),d=parseFloat(h),_=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),u=parseFloat(c),g in qn&&(g==="autoAlpha"&&(d===1&&ai(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),wi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=qn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ui,x){if(this.styles.save(g),y||(E=t._gsap,E.renderTransform&&!e.parseTransform||Es(t,e.parseTransform),b=e.smoothOrigin!==!1&&E.smooth,y=this._pt=new un(this._pt,o,Re,0,1,E.renderTransform,E,0,-1),y.dep=1),g==="scale")this._pt=new un(this._pt,E,"scaleY",E.scaleY,(_?Ir(E.scaleY,_+u):u)-E.scaleY||0,Vo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(dn,0,o[dn]),c=ax(c),E.svg?Go(t,c,0,b,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==E.zOrigin&&wi(this,E,"zOrigin",E.zOrigin,p),wi(this,o,g,ga(h),ga(c)));continue}else if(g==="svgOrigin"){Go(t,c,1,b,0,this);continue}else if(g in Xu){hx(this,E,g,d,_?Ir(d,_+c):c);continue}else if(g==="smoothOrigin"){wi(this,E,"smooth",E.smooth,c);continue}else if(g==="force3D"){E[g]=c;continue}else if(g==="transform"){ux(this,c,t);continue}}else g in o||(g=Wr(g)||g);if(x||(u||u===0)&&(d||d===0)&&!q0.test(c)&&g in o)m=(h+"").substr((d+"").length),u||(u=0),p=Ze(c)||(g in Mn.units?Mn.units[g]:m),m!==p&&(d=Di(t,g,h,p)),this._pt=new un(this._pt,x?E:o,g,d,(_?Ir(d,_+u):u)-d,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?j0:Vo),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=h,this._pt.r=$0);else if(g in o)sx.call(this,t,g,h,_?_+c:c);else if(g in t)this.add(t,g,h||t[g],_?_+c:c,i,r);else if(g!=="parseTransform"){sl(g,c);continue}x||(g in o?R.push(g,0,o[g]):R.push(g,1,h||t[g])),a.push(g)}}A&&Fu(this)},render:function(t,e){if(e.tween._time||!ml())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ai,aliases:qn,getSetter:function(t,e,n){var i=qn[e];return i&&i.indexOf(",")<0&&(e=i),e in ui&&e!==dn&&(t._gsap.x||ai(t,"x"))?n&&sh===n?e==="scale"?Q0:J0:(sh=n||{})&&(e==="scale"?tx:ex):t.style&&!nl(t.style[e])?K0:~e.indexOf("-")?Z0:dl(t,e)},core:{_removeProperty:rr,_getMatrix:gl}};fn.utils.checkPrefix=Wr;fn.core.getStyleSaver=ku;(function(s,t,e,n){var i=hn(s+","+t+","+e,function(r){ui[r]=1});hn(t,function(r){Mn.units[r]="deg",Xu[r]=1}),qn[i[13]]=s+","+t,hn(n,function(r){var a=r.split(":");qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Mn.units[s]="px"});fn.registerPlugin($u);var $r=fn.registerPlugin($u)||fn;$r.core.Tween;const bs=new j_({width:200}),$t={},_l=bs.addFolder("Camera"),ju=bs.addFolder("Scene"),pn=bs.addFolder("Objects"),As=bs.addFolder("World");$t.SCENE_CLEAR_CENTER=()=>{for(let s=0;s<5;s++)Dn.forEach(t=>{if(t.mesh.position.x>=-35&&t.mesh.position.x<=35&&t.mesh.position.y>=-1&&t.mesh.position.y<=400&&t.mesh.position.z>=-35&&t.mesh.position.z<=35){Jn.remove(t.mesh),t.mesh.geometry&&t.mesh.geometry.dispose(),t.mesh.material&&(t.mesh.material.map&&t.mesh.material.map.dispose(),t.mesh.material.dispose()),Ye.remove(t.body);const n=Dn.indexOf(t);n!==-1&&Dn.splice(n,1)}})};$t.SCENE_CLEAR_ALL=()=>{Dn.forEach(s=>{Jn.remove(s.mesh),s.mesh.geometry&&s.mesh.geometry.dispose(),s.mesh.material&&(s.mesh.material.map&&s.mesh.material.map.dispose(),s.mesh.material.dispose()),Ye.remove(s.body)}),Dn.length=0};$t.WORLD_SLEEP_FOR_1SEC=()=>{$t.WORLD_FREEZE(),setTimeout(()=>{Ye.allowSleep=!1},1e3)};$t.WORLD_FREEZE=()=>{Ye.allowSleep=!0,Dn.forEach(({body:s})=>{s.customData||(s.customData={velocity:s.velocity.clone(),angularVelocity:s.angularVelocity.clone(),force:s.force.clone(),torque:s.torque.clone()}),s.sleep()})};$t.WORLD_DENY_SLEEP=()=>{Ye.allowSleep=!1};$t.WORLD_WAKE_UP_CALM=()=>{Ye.allowSleep=!1,Dn.forEach(s=>{s.body.sleepSpeedLimit=.001,s.body.wakeUp()})};$t.WORLD_WAKE_UP_ACTIVE=()=>{Ye.allowSleep=!1,Dn.forEach(({body:s})=>{s.customData&&(s.velocity.copy(s.customData.velocity),s.angularVelocity.copy(s.customData.angularVelocity),s.force.copy(s.customData.force),s.torque.copy(s.customData.torque),s.customData=null),s.sleepSpeedLimit=.001,s.wakeUp()})};$t.CAMERA_STOP_MOVING=()=>{$r.killTweensOf(kn.position)};$t.CAMERA_MOVE_SPIN=()=>{$t.CAMERA_STOP_MOVING(),xl()};$t.CAMERA_MOVE_SPIN_CLOSE=()=>{$t.CAMERA_STOP_MOVING(),xl(2)};$t.SPHERE_VERTICAL_LINE=()=>{for(let s=.5;s<10.5;s++)Ca(.5,{x:0,y:s,z:0})};$t.CUBE_WALL_EXPLOSION_BIG=()=>{let s=0,t=setInterval(()=>{s===8&&clearInterval(t),s+=1;for(let e=-5;e<5;e++)for(let n=1;n<11;n++)fi(1,1,1,{x:e,y:n,z:0})},50)};$t.CUBE_WALL_MEDIUM=()=>{for(let s=-1;s<2;s++)for(let t=-20;t<20;t++)for(let e=.5;e<10.5;e++)fi(1,1,1,{x:t,y:e,z:s})};$t.CUBE_WALL_EXPLOSION_MEDIUM=()=>{let s=0,t=setInterval(()=>{s===4&&clearInterval(t),s+=1;for(let e=-5;e<5;e++)for(let n=1;n<11;n++)fi(1,1,1,{x:e,y:n,z:0})},50);bs.close()};$t.createHugeHighTower=()=>{for(let t=-10/2;t<10/2;t++)for(let e=-10/2;e<10/2;e++)for(let n=0;n<10*3;n++)fi(1,1,1,{x:t,y:n+.5,z:e})};$t.CUBE_TOWER_TO_THE_MOON=()=>{for(let t=-16/16;t<16/16;t++)for(let e=-16/16;e<16/16;e++)for(let n=0;n<16*20;n++)fi(.98,.98,.98,{x:t,y:n+.5,z:e})};$t.CUBE_ROTATED_STACK_BIG=()=>{for(let e=0;e<12*10;e++)ed(5*8,1,5*8,{x:0,y:e*2+.5,z:0})};$t.CUBE_ROTATED_STACK_MEDIUM=()=>{for(let e=0;e<10*10;e++)ed(5*6,2,5*6,{x:0,y:e*2+.5,z:0})};$t.CUBE_LITTLE_TOWER=()=>{for(let s=-2;s<2;s++)for(let t=-2;t<2;t++)for(let e=.5;e<26.5;e++)fi(.98,.98,.98,{x:t,y:e,z:s})};$t.CUBE_BOX_BUILDING=()=>{for(let s=-5;s<5;s++)for(let t=-5;t<5;t++)for(let e=.5;e<6.5;e++)fi(.988,.988,.988,{x:t,y:e,z:s})};$t.CUBE_WALL_SMALL_6x10=()=>{for(let s=-5;s<5;s++)for(let t=.5;t<6.5;t++)fi(.988,.988,.988,{x:s,y:t,z:0})};$t.CUBE_WALL_SMALL_10x10=()=>{for(let s=-5;s<5;s++)for(let t=1;t<11;t++)fi(1,1,1,{x:s,y:t,z:0})};$t.SPHERE_WALL_10x20=()=>{for(let s=-5;s<5;s++)for(let t=.5;t<20.5;t++)Ca(.5,{x:s,y:t,z:0})};$t.SPHERE_ABOVE_CENTER=()=>{Ca(.5,{x:0,y:4,z:0})};$t.SPHERE_RANDOM=()=>{Ca(Math.random()*.5*5+.5,{x:(Math.random()-.5)*10,y:3,z:(Math.random()-.5)*10})};_l.add($t,"CAMERA_STOP_MOVING");_l.add($t,"CAMERA_MOVE_SPIN");_l.add($t,"CAMERA_MOVE_SPIN_CLOSE");pn.add($t,"CUBE_TOWER_TO_THE_MOON");pn.add($t,"CUBE_ROTATED_STACK_BIG");pn.add($t,"CUBE_ROTATED_STACK_MEDIUM");pn.add($t,"CUBE_LITTLE_TOWER");pn.add($t,"CUBE_BOX_BUILDING");pn.add($t,"CUBE_WALL_MEDIUM");pn.add($t,"CUBE_WALL_SMALL_6x10");pn.add($t,"CUBE_WALL_EXPLOSION_MEDIUM");pn.add($t,"CUBE_WALL_EXPLOSION_BIG");pn.add($t,"CUBE_WALL_SMALL_10x10");pn.add($t,"SPHERE_WALL_10x20");pn.add($t,"SPHERE_VERTICAL_LINE");pn.add($t,"SPHERE_ABOVE_CENTER");pn.add($t,"SPHERE_RANDOM");As.add($t,"WORLD_SLEEP_FOR_1SEC");As.add($t,"WORLD_FREEZE");As.add($t,"WORLD_DENY_SLEEP");As.add($t,"WORLD_WAKE_UP_CALM");As.add($t,"WORLD_WAKE_UP_ACTIVE");ju.add($t,"SCENE_CLEAR_CENTER");ju.add($t,"SCENE_CLEAR_ALL");const Ku=document.querySelector("canvas.webgl"),Jn=new T_,Zu=new R_;new C_;const Wo=Zu.load("/assets/ground.jpg");console.log("groundTexture");console.log(Wo);const dx=Zu.load(sd(()=>import("./ground-4d35bfb4.js"),[],import.meta.url));console.log("groundTexture2");console.log(dx);const Ye=new an.World;Ye.broadphase=new an.SAPBroadphase(Ye);Ye.gravity.set(0,-9.82,0);Ye.solver.tolerance=.01;new Audio("/sounds/hit.mp3");const Ms=new an.Material("default"),Ju=new an.ContactMaterial(Ms,Ms,{friction:.3,restitution:.7});Ye.addContactMaterial(Ju);Ye.defaultContactMaterial=Ju;const fx=new an.Plane,Ui=new an.Body;Ui.mass=0;Ui.position=new an.Vec3(0,0,0);Ui.addShape(fx);Ui.quaternion.setFromEuler(Math.PI*.5/-1,0,0);Ye.addBody(Ui);const jr=new Rn(new Ea(70,70),new qh({color:"#777777",metalness:.3,roughness:.4,map:Wo,transparent:!0,alphaMap:Wo,opacity:2}));jr.receiveShadow=!1;jr.rotation.x=-Math.PI*.5;jr.position.copy(Ui.position);jr.quaternion.copy(Ui.quaternion);Jn.add(jr);const px=new I_(16777215,2.1);Jn.add(px);const di=new D_(16777215,.6);di.castShadow=!1;di.shadow.mapSize.set(1024,1024);di.shadow.camera.far=15;di.shadow.camera.left=-7;di.shadow.camera.top=7;di.shadow.camera.right=7;di.shadow.camera.bottom=-7;di.position.set(5,5,5);Jn.add(di);const Wn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Wn.width=window.innerWidth,Wn.height=window.innerHeight,kn.aspect=Wn.width/Wn.height,kn.updateProjectionMatrix(),sr.setSize(Wn.width,Wn.height),sr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const kn=new An(95,Wn.width/Wn.height,.01,2e3);kn.position.set(-5,70,90);Jn.add(kn);const Aa=5;function mx(s){const t=s||1;$r.to(kn.position,{duration:Aa,x:150*3/t,y:-50*3/t,z:200/t,ease:"power1.inOut",onComplete:function(){xl(t)}})}function vx(s){const t=s||1;$r.to(kn.position,{duration:Aa,x:0,y:200*3/t,z:-150*3/t,ease:"power1.inOut",onComplete:function(){mx(t)}})}function gx(s){const t=s||1;$r.to(kn.position,{duration:Aa,x:-100*3/t,y:150*3/t,z:0,ease:"power1.inOut",onComplete:function(){vx(t)}})}function xl(s=0){const t=s||1;$r.to(kn.position,{duration:Aa,x:-3,y:200*3/t,z:150*3/t,ease:"power1.inOut",onComplete:function(){gx(t)}})}const Qu=new F_(kn,Ku);Qu.enableDamping=!0;const sr=new Xh({canvas:Ku});sr.shadowMap.enabled=!0;sr.shadowMap.type=vh;sr.setSize(Wn.width,Wn.height);sr.setPixelRatio(Math.min(window.devicePixelRatio,2));const Dn=[],td=new qr(1,1,1),yl=new qh({metalness:.3,roughness:.4,wireframe:!0}),fi=(s=.8,t=.8,e=.8,n)=>{const i=new Rn(td,yl);i.scale.set(s,t,e),i.castShadow=!1,i.position.copy(n),Jn.add(i);const r=new an.Box(new an.Vec3(s/2,t/2,e/2)),a=new an.Body({mass:1,shape:r,material:Ms});a.position.copy(n),Ye.addBody(a),Dn.push({mesh:i,body:a})};let _o=1;const ed=(s=1,t=1,e=1,n)=>{console.log("rotateYDegree");const i=new Rn(td,yl);i.scale.set(s,t,e),i.castShadow=!1,i.position.copy(n),i.rotation.set(0,_o*(Math.PI/180),0),Jn.add(i);const r=new an.Box(new an.Vec3(s/2,t/2,e/2)),a=new an.Body({mass:1,shape:r,material:Ms});a.position.copy(n),a.quaternion.setFromEuler(0,_o*(Math.PI/180),0),_o+=.5,Ye.addBody(a),Dn.push({mesh:i,body:a})},_x=new Qo(1,20,20),Ca=(s,t)=>{const e=new Rn(_x,yl);e.scale.set(s,s,s),e.castShadow=!1,e.position.copy(t),Jn.add(e);const n=new an.Sphere(s),i=new an.Body({mass:1,shape:n,material:Ms});i.position.copy(t),Ye.addBody(i),Dn.push({mesh:e,body:i})},xx=new N_;let fh=0;const nd=()=>{const s=xx.getElapsedTime(),t=s-fh;fh=s,Ye.step(1/60,t,3);for(const e of Dn)e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion);jr.position.copy(Ui.position),Qu.update(),sr.render(Jn,kn),window.requestAnimationFrame(nd)};nd();const yx=s=>{(s.key==="P"||s.key==="p")&&$t.WORLD_FREEZE(),(s.key==="O"||s.key==="o")&&$t.WORLD_WAKE_UP_ACTIVE(),(s.key==="C"||s.key==="c")&&$t.SCENE_CLEAR_ALL(),(s.key==="L"||s.key==="l")&&$t.WORLD_WAKE_UP_CALM(),(s.key==="M"||s.key==="m")&&$t.CAMERA_MOVE_SPIN(),(s.key==="N"||s.key==="n")&&$t.CAMERA_STOP_MOVING(),(s.key==="B"||s.key==="b")&&$t.CAMERA_MOVE_SPIN_CLOSE(),(s.key==="G"||s.key==="g")&&$t.CUBE_ROTATED_STACK_BIG(),(s.key==="H"||s.key==="h")&&$t.CUBE_ROTATED_STACK_MEDIUM(),(s.key==="J"||s.key==="j")&&$t.CUBE_LITTLE_TOWER(),s.altKey&&s.key==="C"&&$t.SCENE_CLEAR_CENTER(),document.body.focus()};document.body.setAttribute("tabindex","1");window.document.addEventListener("keydown",yx);let ph=window.document.querySelectorAll(".lil-gui .children .controller"),Me=window.document.querySelectorAll(".lil-gui .children .name");for(var _e=0;_e<ph.length;_e++)ph[_e].classList.add("hoverMarkable");document.body.setAttribute("tabindex","1");for(var _e=0;_e<Me.length;_e++)Me[_e].classList.add("addTip"),Me[_e].textContent==="SCENE_CLEAR_CENTER"&&Me[_e].classList.add("addTipAltC"),Me[_e].textContent==="SCENE_CLEAR_ALL"&&Me[_e].classList.add("addTipC"),Me[_e].textContent==="WORLD_FREEZE"&&Me[_e].classList.add("addTipP"),Me[_e].textContent==="WORLD_WAKE_UP_ACTIVE"&&Me[_e].classList.add("addTipO"),Me[_e].textContent==="WORLD_WAKE_UP_CALM"&&Me[_e].classList.add("addTipL"),Me[_e].textContent==="CAMERA_MOVE_SPIN"&&Me[_e].classList.add("addTipM"),Me[_e].textContent==="CAMERA_STOP_MOVING"&&Me[_e].classList.add("addTipN"),Me[_e].textContent==="CAMERA_MOVE_SPIN_CLOSE"&&Me[_e].classList.add("addTipB"),Me[_e].textContent==="CUBE_ROTATED_STACK_BIG"&&Me[_e].classList.add("addTipG"),Me[_e].textContent==="CUBE_ROTATED_STACK_MEDIUM"&&Me[_e].classList.add("addTipH"),Me[_e].textContent==="CUBE_LITTLE_TOWER"&&Me[_e].classList.add("addTipJ"),Me[_e].addEventListener("click",()=>{document.body.focus()});
//# sourceMappingURL=index-bcd36ff9.js.map
