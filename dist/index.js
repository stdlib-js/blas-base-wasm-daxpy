"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=y(function(K,x){
var T=require("path").resolve,B=require('@stdlib/fs-read-wasm/dist').sync,V=B(T(__dirname,"..","src","main.wasm"));x.exports=V
});var q=y(function(Q,_){
var g=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),D=m();function o(e){if(!(this instanceof o))return new o(e);if(!g(e))throw new TypeError(z('26XH0',e));return M.call(this,D,e,{env:{memory:e}}),this}j(o,M);w(o.prototype,"main",function(r,s,u,i,a,t){return this._instance.exports.c_daxpy(r,s,u,i,a,t),a});w(o.prototype,"ndarray",function(r,s,u,i,a,t,v,d){return this._instance.exports.c_daxpy_ndarray(r,s,u,i,a,t,v,d),t});_.exports=o
});var A=y(function(U,W){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=require('@stdlib/utils-inherit/dist'),b=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/strided-base-read-dataview/dist').ndarray,k=require('@stdlib/wasm-memory/dist'),C=require('@stdlib/wasm-base-arrays2ptrs/dist'),E=require('@stdlib/wasm-base-strided2object/dist'),f=q();function p(){return this instanceof p?(f.call(this,new k({initial:0})),this):new p}L(p,f);R(p.prototype,"main",function(r,s,u,i,a,t){return this.ndarray(r,s,u,i,b(r,i),a,t,b(r,t))});R(p.prototype,"ndarray",function(r,s,u,i,a,t,v,d){var l,c,n;return l=C(this,[E(r,u,i,a),E(r,t,v,d)]),c=l[0],n=l[1],f.prototype.ndarray.call(this,r,s,c.ptr,c.stride,c.offset,n.ptr,n.stride,n.offset),n.copy&&P(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,t,v,d,!0),t});W.exports=p
});var S=y(function(Z,O){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=A(),H=q(),h=new G;h.initializeSync();F(h,"Module",H.bind(null));O.exports=h
});var I=S();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
