import{S as zt,i as Nt,s as qt,e as h,t as ht,a as m,b as It,c as a,n as xt,d as Ft,f as P,g as Ae,h as Gt,j as Kt,l as Dt,k as Lt,m as ke,r as Re,o as Ce,p as xe,q as Pe,u as Te,v as Se,w as Ee}from"./vendor.77f097b5.js";const Ne={},Ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))w(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&w(v)}).observe(document,{childList:!0,subtree:!0});function _(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerpolicy&&(p.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?p.credentials="include":u.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function w(u){if(u.ep)return;u.ep=!0;const p=_(u);fetch(u.href,p)}};Ue();var He=function(){var l=Ne.url;return function(t){t=t||{};var t=typeof t!="undefined"?t:{},_,w;t.ready=new Promise(function(e,n){_=e,w=n});var u={},p;for(p in t)t.hasOwnProperty(p)&&(u[p]=t[p]);var v=!0,x="";function O(e){return t.locateFile?t.locateFile(e,x):x+e}var tt;typeof document!="undefined"&&document.currentScript&&(x=document.currentScript.src),l&&(x=l),x.indexOf("blob:")!==0?x=x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1):x="",t.print||console.log.bind(console);var R=t.printErr||console.warn.bind(console);for(p in u)u.hasOwnProperty(p)&&(t[p]=u[p]);u=null,t.arguments,t.thisProgram,t.quit;var W=0,g=function(e){W=e},$=function(){return W},j;t.wasmBinary&&(j=t.wasmBinary),t.noExitRuntime,typeof WebAssembly!="object"&&G("no native wasm support detected");var E,T=!1;function N(e,n){e||G("Assertion failed: "+n)}function U(e){var n=t["_"+e];return N(n,"Cannot call unknown function "+e+", make sure it is exported"),n}function A(e,n,r,i,s){var c={string:function(L){var ut=0;if(L!=null&&L!==0){var Wt=(L.length<<2)+1;ut=Et(Wt),rt(L,ut,Wt)}return ut},array:function(L){var ut=Et(L.length);return K(L,ut),ut}};function o(L){return n==="string"?F(L):n==="boolean"?Boolean(L):L}var f=U(e),b=[],z=0;if(i)for(var Z=0;Z<i.length;Z++){var at=c[r[Z]];at?(z===0&&(z=V()),b[Z]=at(i[Z])):b[Z]=i[Z]}var dt=f.apply(null,b);function ft(L){return z!==0&&Q(z),o(L)}return dt=ft(dt),dt}function I(e,n,r,i){r=r||[];var s=r.every(function(o){return o==="number"}),c=n!=="string";return c&&s&&!i?U(e):function(){return A(e,n,r,arguments)}}var M=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function D(e,n,r){for(var i=n+r,s=n;e[s]&&!(s>=i);)++s;if(s-n>16&&e.subarray&&M)return M.decode(e.subarray(n,s));for(var c="";n<s;){var o=e[n++];if(!(o&128)){c+=String.fromCharCode(o);continue}var f=e[n++]&63;if((o&224)==192){c+=String.fromCharCode((o&31)<<6|f);continue}var b=e[n++]&63;if((o&240)==224?o=(o&15)<<12|f<<6|b:o=(o&7)<<18|f<<12|b<<6|e[n++]&63,o<65536)c+=String.fromCharCode(o);else{var z=o-65536;c+=String.fromCharCode(55296|z>>10,56320|z&1023)}}return c}function F(e,n){return e?D(k,e,n):""}function q(e,n,r,i){if(!(i>0))return 0;for(var s=r,c=r+i-1,o=0;o<e.length;++o){var f=e.charCodeAt(o);if(f>=55296&&f<=57343){var b=e.charCodeAt(++o);f=65536+((f&1023)<<10)|b&1023}if(f<=127){if(r>=c)break;n[r++]=f}else if(f<=2047){if(r+1>=c)break;n[r++]=192|f>>6,n[r++]=128|f&63}else if(f<=65535){if(r+2>=c)break;n[r++]=224|f>>12,n[r++]=128|f>>6&63,n[r++]=128|f&63}else{if(r+3>=c)break;n[r++]=240|f>>18,n[r++]=128|f>>12&63,n[r++]=128|f>>6&63,n[r++]=128|f&63}}return n[r]=0,r-s}function rt(e,n,r){return q(e,k,n,r)}function K(e,n){Y.set(e,n)}var Y,k,d;function J(e){t.HEAP8=Y=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAP32=d=new Int32Array(e),t.HEAPU8=k=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}t.INITIAL_MEMORY;var S,ot=[],pt=[],ct=[];function yt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)it(t.preRun.shift());Pt(ot)}function _t(){Pt(pt)}function wt(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)mt(t.postRun.shift());Pt(ct)}function it(e){ot.unshift(e)}function bt(e){pt.unshift(e)}function mt(e){ct.unshift(e)}var et=0,nt=null;function gt(e){et++,t.monitorRunDependencies&&t.monitorRunDependencies(et)}function At(e){if(et--,t.monitorRunDependencies&&t.monitorRunDependencies(et),et==0&&nt){var n=nt;nt=null,n()}}t.preloadedImages={},t.preloadedAudios={};function G(e){t.onAbort&&t.onAbort(e),e="Aborted("+e+")",R(e),T=!0,e+=". Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(e);throw w(n),n}var B="data:application/octet-stream;base64,";function y(e){return e.startsWith(B)}var C;t.locateFile?(C="lifehash.wasm",y(C)||(C=O(C))):C=new URL("/lifehash-web/assets/lifehash.57a2179d.wasm",self.location).toString();function H(e){try{if(e==C&&j)return new Uint8Array(j);if(!tt)throw"both async and sync fetching of the wasm failed"}catch(n){G(n)}}function kt(){return!j&&v&&typeof fetch=="function"?fetch(C,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+C+"'";return e.arrayBuffer()}).catch(function(){return H(C)}):Promise.resolve().then(function(){return H(C)})}function Qt(){var e={a:fe};function n(o,f){var b=o.exports;t.asm=b,E=t.asm.x,J(E.buffer),S=t.asm.z,bt(t.asm.y),At()}gt();function r(o){n(o.instance)}function i(o){return kt().then(function(f){return WebAssembly.instantiate(f,e)}).then(function(f){return f}).then(o,function(f){R("failed to asynchronously prepare wasm: "+f),G(f)})}function s(){return!j&&typeof WebAssembly.instantiateStreaming=="function"&&!y(C)&&typeof fetch=="function"?fetch(C,{credentials:"same-origin"}).then(function(o){var f=WebAssembly.instantiateStreaming(o,e);return f.then(r,function(b){return R("wasm streaming compile failed: "+b),R("falling back to ArrayBuffer instantiation"),i(r)})}):i(r)}if(t.instantiateWasm)try{var c=t.instantiateWasm(e,n);return c}catch(o){return R("Module.instantiateWasm callback failed with error: "+o),!1}return s().catch(w),{}}function Pt(e){for(;e.length>0;){var n=e.shift();if(typeof n=="function"){n(t);continue}var r=n.func;typeof r=="number"?n.arg===void 0?S.get(r)():S.get(r)(n.arg):r(n.arg===void 0?null:n.arg)}}function Xt(e,n,r,i){G("Assertion failed: "+F(e)+", at: "+[n?F(n):"unknown filename",r,i?F(i):"unknown function"])}function Zt(e){return St(e+16)+16}function vt(e){this.excPtr=e,this.ptr=e-16,this.set_type=function(n){d[this.ptr+4>>2]=n},this.get_type=function(){return d[this.ptr+4>>2]},this.set_destructor=function(n){d[this.ptr+8>>2]=n},this.get_destructor=function(){return d[this.ptr+8>>2]},this.set_refcount=function(n){d[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,Y[this.ptr+12>>0]=n},this.get_caught=function(){return Y[this.ptr+12>>0]!=0},this.set_rethrown=function(n){n=n?1:0,Y[this.ptr+13>>0]=n},this.get_rethrown=function(){return Y[this.ptr+13>>0]!=0},this.init=function(n,r){this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=d[this.ptr>>2];d[this.ptr>>2]=n+1},this.release_ref=function(){var n=d[this.ptr>>2];return d[this.ptr>>2]=n-1,n===1}}function Rt(e){this.free=function(){Tt(this.ptr),this.ptr=0},this.set_base_ptr=function(n){d[this.ptr>>2]=n},this.get_base_ptr=function(){return d[this.ptr>>2]},this.set_adjusted_ptr=function(n){d[this.ptr+4>>2]=n},this.get_adjusted_ptr_addr=function(){return this.ptr+4},this.get_adjusted_ptr=function(){return d[this.ptr+4>>2]},this.get_exception_ptr=function(){var n=Ot(this.get_exception_info().get_type());if(n)return d[this.get_base_ptr()>>2];var r=this.get_adjusted_ptr();return r!==0?r:this.get_base_ptr()},this.get_exception_info=function(){return new vt(this.get_base_ptr())},e===void 0?(this.ptr=St(8),this.set_adjusted_ptr(0)):this.ptr=e}var jt=[];function $t(e){e.add_ref()}function Mt(e){var n=new Rt(e),r=n.get_exception_info();return r.get_caught()||r.set_caught(!0),r.set_rethrown(!1),jt.push(n),$t(r),n.get_exception_ptr()}var lt=0;function Bt(e){try{return Tt(new vt(e).ptr)}catch{}}function te(e){if(e.release_ref()&&!e.get_rethrown()){var n=e.get_destructor();n&&S.get(n)(e.excPtr),Bt(e.excPtr)}}function ee(){X(0);var e=jt.pop();te(e.get_exception_info()),e.free(),lt=0}function ne(e){var n=new Rt(e),r=n.get_base_ptr();throw lt||(lt=r),n.free(),r}function re(){var e=lt;if(!e)return g(0),0|0;var n=new vt(e),r=n.get_type(),i=new Rt;if(i.set_base_ptr(e),i.set_adjusted_ptr(e),!r)return g(0),i.ptr|0;for(var s=Array.prototype.slice.call(arguments),c=0;c<s.length;c++){var o=s[c];if(o===0||o===r)break;if(Ut(o,r,i.get_adjusted_ptr_addr()))return g(o),i.ptr|0}return g(r),i.ptr|0}function ie(){var e=lt;if(!e)return g(0),0|0;var n=new vt(e),r=n.get_type(),i=new Rt;if(i.set_base_ptr(e),i.set_adjusted_ptr(e),!r)return g(0),i.ptr|0;for(var s=Array.prototype.slice.call(arguments),c=0;c<s.length;c++){var o=s[c];if(o===0||o===r)break;if(Ut(o,r,i.get_adjusted_ptr_addr()))return g(o),i.ptr|0}return g(r),i.ptr|0}function ae(e,n,r){var i=new vt(e);throw i.init(n,r),lt=e,e}function se(){G("")}function oe(e){G("OOM")}function ce(e){k.length,oe()}function le(){return $()}var fe={r:Xt,i:Zt,q:Mt,p:ee,b:re,f:ie,k:Bt,j:ae,c:ne,t:se,s:ce,a:le,n:ve,e:_e,h:me,m:ye,u:be,d:ue,w:ge,g:pe,o:he,l:de,v:we};Qt(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.y).apply(null,arguments)},t._lifehash_image_free=function(){return(t._lifehash_image_free=t.asm.A).apply(null,arguments)};var Tt=t._free=function(){return(Tt=t._free=t.asm.B).apply(null,arguments)},St=t._malloc=function(){return(St=t._malloc=t.asm.C).apply(null,arguments)};t._lifehash_make_from_utf8=function(){return(t._lifehash_make_from_utf8=t.asm.D).apply(null,arguments)},t._lifehash_make_from_data=function(){return(t._lifehash_make_from_data=t.asm.E).apply(null,arguments)},t._lifehash_make_from_digest=function(){return(t._lifehash_make_from_digest=t.asm.F).apply(null,arguments)},t._lifehash_data_to_hex=function(){return(t._lifehash_data_to_hex=t.asm.G).apply(null,arguments)},t._lifehash_hex_to_data=function(){return(t._lifehash_hex_to_data=t.asm.H).apply(null,arguments)},t._lifehash_sha256=function(){return(t._lifehash_sha256=t.asm.I).apply(null,arguments)};var V=t.stackSave=function(){return(V=t.stackSave=t.asm.J).apply(null,arguments)},Q=t.stackRestore=function(){return(Q=t.stackRestore=t.asm.K).apply(null,arguments)},Et=t.stackAlloc=function(){return(Et=t.stackAlloc=t.asm.L).apply(null,arguments)},X=t._setThrew=function(){return(X=t._setThrew=t.asm.M).apply(null,arguments)},Ut=t.___cxa_can_catch=function(){return(Ut=t.___cxa_can_catch=t.asm.N).apply(null,arguments)},Ot=t.___cxa_is_pointer_type=function(){return(Ot=t.___cxa_is_pointer_type=t.asm.O).apply(null,arguments)};function ue(e,n,r){var i=V();try{S.get(e)(n,r)}catch(s){if(Q(i),s!==s+0&&s!=="longjmp")throw s;X(1,0)}}function he(e,n,r,i,s){var c=V();try{S.get(e)(n,r,i,s)}catch(o){if(Q(c),o!==o+0&&o!=="longjmp")throw o;X(1,0)}}function pe(e,n,r,i){var s=V();try{S.get(e)(n,r,i)}catch(c){if(Q(s),c!==c+0&&c!=="longjmp")throw c;X(1,0)}}function _e(e,n,r){var i=V();try{return S.get(e)(n,r)}catch(s){if(Q(i),s!==s+0&&s!=="longjmp")throw s;X(1,0)}}function me(e,n,r,i){var s=V();try{return S.get(e)(n,r,i)}catch(c){if(Q(s),c!==c+0&&c!=="longjmp")throw c;X(1,0)}}function ge(e,n,r,i){var s=V();try{S.get(e)(n,r,i)}catch(c){if(Q(s),c!==c+0&&c!=="longjmp")throw c;X(1,0)}}function ve(e,n){var r=V();try{return S.get(e)(n)}catch(i){if(Q(r),i!==i+0&&i!=="longjmp")throw i;X(1,0)}}function de(e,n,r,i,s,c){var o=V();try{S.get(e)(n,r,i,s,c)}catch(f){if(Q(o),f!==f+0&&f!=="longjmp")throw f;X(1,0)}}function ye(e,n,r,i,s){var c=V();try{return S.get(e)(n,r,i,s)}catch(o){if(Q(c),o!==o+0&&o!=="longjmp")throw o;X(1,0)}}function we(e,n,r,i,s,c,o){var f=V();try{S.get(e)(n,r,i,s,c,o)}catch(b){if(Q(f),b!==b+0&&b!=="longjmp")throw b;X(1,0)}}function be(e){var n=V();try{S.get(e)()}catch(r){if(Q(n),r!==r+0&&r!=="longjmp")throw r;X(1,0)}}var Ct;nt=function e(){Ct||Ht(),Ct||(nt=e)};function Ht(e){if(et>0||(yt(),et>0))return;function n(){Ct||(Ct=!0,t.calledRun=!0,!T&&(_t(),_(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),wt()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),n()},1)):n()}if(t.run=Ht,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return Ht(),t.onRuntimeInitialized=function(){t.allocString=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length+1);return new Uint8Array(k.buffer,r,n.length).set(n),k[r+n.length]=0,r},t.produceImage=function(e,n){const r=new Uint32Array(k.buffer,e,3),i=r[0],s=r[1],c=r[2],o=i*s*4,f=new Uint8Array(k.buffer,c,o),b=new Uint8ClampedArray(new ArrayBuffer(o));b.set(f);const z=document.createElement("canvas"),Z=z.getContext("2d");z.width=i,z.height=s;const at=Z.createImageData(i,s);at.data.set(b),Z.putImageData(at,0,0);const dt=z.toDataURL(),ft=new Image,L=n===2?.5:1;return ft.width=i*L,ft.height=s*L,ft.src=dt,ft},t.makeFromUTF8=function(e,n,r){const i=this.allocString(e),s=A("lifehash_make_from_utf8","number",["number","number","number","boolean"],[i,n,r,!0]),c=this.produceImage(s,n);return this.free(i),this.imageFree(s),c},t.makeFromData=function(e,n,r){},t.makeFromDigest=function(e,n,r){},t.free=I("free",null,["number"]),t.malloc=I("malloc","number",["number"]),t.imageFree=I("lifehash_image_free",null,["number"]),t.sha256=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length);new Uint8Array(k.buffer,r,n.length).set(n);const s=this.malloc(32);A("lifehash_sha256",null,["number","number","number"],[r,n.length,s]);const c=new Uint8Array(new ArrayBuffer(32));return c.set(new Uint8Array(k.buffer,s,32)),this.free(r),this.free(s),c},t.dataToHex=function(e){const n=this.malloc(e.length);new Uint8Array(k.buffer,n,e.length).set(e);const i=A("lifehash_data_to_hex","number",["number","number"],[n,e.length]),s=F(i);return this.free(n),this.free(i),s},t.hexToData=function(e){const n=new TextEncoder().encode(e),r=this.malloc(n.length);new Uint8Array(k.buffer,r,n.length).set(n);const s=this.malloc(4),c=this.malloc(4),o=0,f=A("lifehash_hex_to_data","boolean",["number","number","number","number"],[r,n.length,s,c]);let b=null;if(f){const z=new Uint32Array(k.buffer,c,1)[0],Z=new Uint32Array(k.buffer,s,1)[0],at=new Uint8Array(k.buffer,Z,z);b=new Uint8Array(new ArrayBuffer(z)),b.set(at)}return this.free(r),this.free(c),this.free(o),this.free(s),b}},t.ready}}(),st;(function(l){l[l.version1=0]="version1",l[l.version2=1]="version2",l[l.detailed=2]="detailed",l[l.fiducial=3]="fiducial",l[l.grayscaleFiducial=4]="grayscaleFiducial"})(st||(st={}));function Yt(l,t,_){const w=l.slice();return w[14]=t[_],w}function Jt(l){let t,_=l[14].text+"",w,u,p;return{c(){t=h("option"),w=ht(_),u=m(),t.__value=p=l[14],t.value=t.__value},m(v,x){It(v,t,x),a(t,w),a(t,u)},p:xt,d(v){v&&Ft(t)}}}function Ie(l){let t,_,w,u,p,v,x,O,tt,R,W,g,$,j,E,T,N,U,A,I,M,D,F,q,rt,K=l[0].text+"",Y,k,d=l[0].description+"",J,S,ot,pt,ct,yt,_t,wt,it,bt,mt,et,nt,gt,At,G=l[4],B=[];for(let y=0;y<G.length;y+=1)B[y]=Jt(Yt(l,G,y));return{c(){t=h("main"),_=h("div"),w=h("label"),u=h("strong"),u.textContent="Input string:",p=m(),v=h("input"),x=m(),O=h("p"),O.textContent=`Edit this field to update the LifeHash image below. When using the
      library, the input can be a binary object of any size.`,tt=m(),R=h("div"),W=h("strong"),W.textContent="SHA-256 Digest:",g=m(),$=h("span"),j=ht(l[2]),E=m(),T=h("p"),T.textContent=`This is the unique \u201Cfingerprint\u201D of the input that is used as the seed for
      the LifeHash algorithm. Making even a tiny change to the input object
      above results in a complete change of the digest.`,N=m(),U=h("div"),A=h("label"),I=h("strong"),I.textContent="LifeHash Version:",M=m(),D=h("select");for(let y=0;y<B.length;y+=1)B[y].c();F=m(),q=h("p"),rt=ht("About "),Y=ht(K),k=ht(": "),J=ht(d),S=m(),ot=h("strong"),ot.textContent="LifeHash:",pt=m(),ct=h("div"),yt=m(),_t=h("strong"),_t.textContent="Gallery:",wt=m(),it=h("button"),it.textContent="\u21BB More",bt=m(),mt=h("div"),et=m(),nt=h("p"),nt.textContent="You can click on the strings beneath each icon to set the input field above, reproducing the exact same LifeHash.",P(O,"class","caption svelte-13yiksv"),P($,"class","data svelte-13yiksv"),P(T,"class","caption svelte-13yiksv"),l[0]===void 0&&Ae(()=>l[10].call(D)),P(q,"class","caption svelte-13yiksv"),P(ct,"id","image"),P(it,"class","reload svelte-13yiksv"),P(mt,"id","gallery"),P(nt,"class","caption svelte-13yiksv"),P(t,"class","svelte-13yiksv")},m(y,C){It(y,t,C),a(t,_),a(_,w),a(w,u),a(w,p),a(w,v),Gt(v,l[1]),a(_,x),a(_,O),a(t,tt),a(t,R),a(R,W),a(R,g),a(R,$),a($,j),a(R,E),a(R,T),a(t,N),a(t,U),a(U,A),a(A,I),a(A,M),a(A,D);for(let H=0;H<B.length;H+=1)B[H].m(D,null);Kt(D,l[0]),a(U,F),a(U,q),a(q,rt),a(q,Y),a(q,k),a(q,J),a(t,S),a(t,ot),a(t,pt),a(t,ct),a(t,yt),a(t,_t),a(t,wt),a(t,it),a(t,bt),a(t,mt),a(t,et),a(t,nt),gt||(At=[Dt(v,"input",l[9]),Dt(D,"change",l[10]),Dt(it,"click",l[3])],gt=!0)},p(y,[C]){if(C&2&&v.value!==y[1]&&Gt(v,y[1]),C&4&&Lt(j,y[2]),C&16){G=y[4];let H;for(H=0;H<G.length;H+=1){const kt=Yt(y,G,H);B[H]?B[H].p(kt,C):(B[H]=Jt(kt),B[H].c(),B[H].m(D,null))}for(;H<B.length;H+=1)B[H].d(1);B.length=G.length}C&17&&Kt(D,y[0]),C&1&&K!==(K=y[0].text+"")&&Lt(Y,K),C&1&&d!==(d=y[0].description+"")&&Lt(J,d)},i:xt,o:xt,d(y){y&&Ft(t),ke(B,y),gt=!1,Re(At)}}}function Fe(l){return l[Math.floor(Math.random()*l.length)]}function De(){return Fe("ABCDEFGHIJKLMNOPQRSTUVWXYZ")}function Vt(){let l="";for(let t=0;t<3;t++)l+=De();return l}function Le(){return Vt()+"-"+Vt()}function je(l,t,_){let w,u,p=E=>"",v=(E,T)=>null,x=(E,T)=>{},O=[];function tt(){let E=[];for(let T=0;T<10;T++)E.push(Le());_(8,O=E)}tt();const R=[{version:st.version1,text:"Version 1",description:"DEPRECATED. Uses HSB gamut. Not CMYK-friendly. Has some minor gradient bugs."},{version:st.version2,text:"Version 2",description:"CMYK-friendly gamut. Recommended for most purposes."},{version:st.detailed,text:"Detailed",description:"Double resolution. CMYK-friendly gamut."},{version:st.fiducial,text:"Fiducial",description:"Optimized for generating machine-vision fiducials. High-contrast. CMYK-friendly gamut."},{version:st.grayscaleFiducial,text:"Grayscale Fiducial",description:"Optimized for generating machine-vision fiducials. High-contrast for low-light conditions."}];let W=R[1],g="Hello, world!";(async()=>{u=await He(),_(5,p=E=>u.dataToHex(u.sha256(g))),_(6,v=(E,T)=>{let N=u.makeFromUTF8(E,T,4);N.style.margin="5px";const U=document.getElementById("image"),A=U.firstChild;return A!==null&&U.removeChild(A),U.appendChild(N),N}),_(7,x=(E,T)=>{let N=[];for(const A of T){let I=document.createElement("div"),M=document.createElement("div");M.appendChild(u.makeFromUTF8(A,E,3));let D=document.createElement("div"),F=document.createElement("a");D.appendChild(F),F.innerText=A,F.style.fontFamily="monospace",F.style.fontSize="12pt",F.style.fontWeight="bold",F.onclick=()=>{_(1,g=A)},I.appendChild(M),I.appendChild(D),I.style.display="inline-block",I.style.margin="5px",I.style.textAlign="center",N.push(I)}const U=document.getElementById("gallery");U.textContent="";for(const A of N)U.appendChild(A)})})();function $(){g=this.value,_(1,g)}function j(){W=Ce(this),_(0,W),_(4,R)}return l.$$.update=()=>{l.$$.dirty&34&&_(2,w=p(g)),l.$$.dirty&67&&v(g,W.version),l.$$.dirty&385&&x(W.version,O)},[W,g,w,tt,R,p,v,x,O,$,j]}class Be extends zt{constructor(t){super();Nt(this,t,je,Ie,qt,{})}}function Oe(l){let t,_,w,u,p,v,x,O,tt,R,W,g,$,j,E,T,N,U,A,I,M,D,F,q,rt,K,Y,k,d;return g=new Be({}),{c(){t=h("main"),_=h("h1"),_.textContent="LifeHash",w=m(),u=h("h2"),u.textContent="Beautiful Visual Hashes",p=m(),v=h("h3"),v.innerHTML='from <a href="https://www.blockchaincommons.com/" target="_blank" class="svelte-1wit19e">Blockchain Commons</a>',x=m(),O=h("h3"),O.innerHTML='created by <a href="https://wolfmcnally.com" target="_blank" class="svelte-1wit19e">Wolf McNally</a>',tt=m(),R=h("div"),R.innerHTML=`<p>This page is a live demonstration of the <a href="https://github.com/BlockchainCommons/bc-lifehash" target="_blank" class="svelte-1wit19e">LifeHash</a> visual hash algorithm running in the web browser.
      It uses the reference C++ implementation compiled to <a href="https://webassembly.org/" target="_blank" class="svelte-1wit19e">WebAssembly</a>.</p>`,W=m(),xe(g.$$.fragment),$=m(),j=h("h3"),j.innerHTML='About <strong class="svelte-1wit19e">LifeHash</strong>',E=m(),T=h("p"),T.innerHTML=`LifeHash is a method of <a href="https://en.wikipedia.org/wiki/Identicon" target="_blank" class="svelte-1wit19e">hash visualization</a>
    based on
    <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" class="svelte-1wit19e">Conway\u2019s Game of Life</a> that creates beautiful icons that are deterministic, yet distinct and unique
    given the input data.`,N=m(),U=h("p"),U.innerHTML=`The basic concept is to take a <a href="https://en.wikipedia.org/wiki/SHA-2" target="_blank" class="svelte-1wit19e">SHA-256</a> hash of the input data (which can be any data including another hash) and then
    use the 256-bit digest as a 16x16 pixel &quot;seed&quot; for running the cellular automata
    known as Conway\u2019s Game of Life.`,A=m(),I=h("p"),I.textContent=`After the pattern becomes stable (or begins repeating) the resulting history
    is used to compile a grayscale image of all the states from the first to
    last generation. Using Game of Life provides visual structure to the
    resulting image, even though it was seeded with entropy.`,M=m(),D=h("p"),D.textContent=`Some bits of the initial hash are then used to deterministically apply
    symmetry and color to the icon to add beauty and quick recognizability.`,F=m(),q=h("h3"),q.textContent="Watch the explainer video",rt=m(),K=h("a"),K.innerHTML='<img src="title-card.jpg" alt="Explainer Video" style="width:100%; max-width: 600px"/>',Y=m(),k=h("div"),k.innerHTML=`<h3 class="section svelte-1wit19e">We care about your privacy</h3> 
    <p>This page is self-contained, sets no cookies, and sends no data to the
      cloud.</p>`,P(_,"class","svelte-1wit19e"),P(u,"class","svelte-1wit19e"),P(v,"class","svelte-1wit19e"),P(O,"class","svelte-1wit19e"),P(R,"class","explanation svelte-1wit19e"),P(j,"class","section svelte-1wit19e"),P(q,"class","section svelte-1wit19e"),P(K,"href","https://www.youtube.com/watch?v=cu0K__KLxKo"),P(K,"target","_blank"),P(K,"class","svelte-1wit19e"),P(k,"class","explanation svelte-1wit19e"),P(t,"class","svelte-1wit19e")},m(J,S){It(J,t,S),a(t,_),a(t,w),a(t,u),a(t,p),a(t,v),a(t,x),a(t,O),a(t,tt),a(t,R),a(t,W),Pe(g,t,null),a(t,$),a(t,j),a(t,E),a(t,T),a(t,N),a(t,U),a(t,A),a(t,I),a(t,M),a(t,D),a(t,F),a(t,q),a(t,rt),a(t,K),a(t,Y),a(t,k),d=!0},p:xt,i(J){d||(Te(g.$$.fragment,J),d=!0)},o(J){Se(g.$$.fragment,J),d=!1},d(J){J&&Ft(t),Ee(g)}}}function We(l){return[]}class ze extends zt{constructor(t){super();Nt(this,t,We,Oe,qt,{})}}new ze({target:document.getElementById("app")});
