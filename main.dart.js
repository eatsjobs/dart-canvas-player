(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.f2(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cv(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={ci:function ci(){},aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dq:function(a){var t,s=H.dp(a)
if(typeof s=="string")return s
t="minified:"+a
return t},
fA:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
d:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bl(a)
if(typeof t!="string")throw H.e(H.cu(a))
return t},
bE:function(a){var t=H.dV(a)
return t},
dV:function(a){var t,s,r
if(a instanceof P.m)return H.q(H.A(a),null)
if(J.bj(a)===C.t||u.B.b(a)){t=C.f(a)
if(H.cI(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.cI(r))return r}}return H.q(H.A(a),null)},
cI:function(a){var t=a!=="Object"&&a!==""
return t},
K:function(a){throw H.e(H.cu(a))},
Z:function(a,b){if(a==null)J.cg(a)
throw H.e(H.eO(a,b))},
eO:function(a,b){var t,s,r="index"
if(!H.d0(b))return new P.B(!0,b,r,null)
t=H.bh(J.cg(a))
if(!(b<0)){if(typeof t!=="number")return H.K(t)
s=b>=t}else s=!0
if(s)return P.cF(b,a,r,null,t)
return P.dW(b,r)},
cu:function(a){return new P.B(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.aT()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.dn})
t.name=""}else t.toString=H.dn
return t},
dn:function(){return J.bl(this.dartException)},
dm:function(a){throw H.e(a)},
f1:function(a){throw H.e(P.bz(a))},
H:function(a){var t,s,r,q,p,o
a=H.f_(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.aC([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cL:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cH:function(a,b){return new H.aS(a,b==null?null:b.method)},
ck:function(a,b){var t=b==null,s=t?null:b.method
return new H.aR(a,s,t?null:b.receiver)},
a8:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.cf(a)
if(a==null)return f
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.u.ab(s,16)&8191)===10)switch(r){case 438:return e.$1(H.ck(H.d(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.cH(H.d(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.ds()
p=$.dt()
o=$.du()
n=$.dv()
m=$.dy()
l=$.dz()
k=$.dx()
$.dw()
j=$.dB()
i=$.dA()
h=q.l(t)
if(h!=null)return e.$1(H.ck(H.X(t),h))
else{h=p.l(t)
if(h!=null){h.method="call"
return e.$1(H.ck(H.X(t),h))}else{h=o.l(t)
if(h==null){h=n.l(t)
if(h==null){h=m.l(t)
if(h==null){h=l.l(t)
if(h==null){h=k.l(t)
if(h==null){h=n.l(t)
if(h==null){h=j.l(t)
if(h==null){h=i.l(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return e.$1(H.cH(H.X(t),h))}}return e.$1(new H.b1(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.al()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.B(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.al()
return a},
Q:function(a){var t
if(a==null)return new H.au(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.au(a)},
eV:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.bh(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.bP("Unsupported number of arguments for wrapped closure"))},
aB:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.eV)
a.$identity=t
return t},
dR:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.aY().constructor.prototype):Object.create(new H.ab(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.G
if(typeof s!=="number")return s.k()
$.G=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.cE(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.dN(d,e,f)
i.$S=q
i[j]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cE(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return t},
dN:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.df,a)
if(typeof a=="string"){if(b)throw H.e("Cannot compute signature for static tearoff.")
t=c?H.dL:H.dK
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.e("Error in functionType of tearoff")},
dO:function(a,b,c,d){var t=H.cC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cE:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.dQ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.dO(s,!q,t,b)
if(s===0){q=$.G
if(typeof q!=="number")return q.k()
$.G=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.ac
return new Function(q+H.d(p==null?$.ac=H.bv("self"):p)+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.G
if(typeof q!=="number")return q.k()
$.G=q+1
n+=q
q="return function("+n+"){return this."
p=$.ac
return new Function(q+H.d(p==null?$.ac=H.bv("self"):p)+"."+H.d(t)+"("+n+");}")()},
dP:function(a,b,c,d){var t=H.cC,s=H.dM
switch(b?-1:a){case 0:throw H.e(H.dZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
dQ:function(a,b){var t,s,r,q,p,o,n,m=$.ac
if(m==null)m=$.ac=H.bv("self")
t=$.cB
if(t==null)t=$.cB=H.bv("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.dP(r,!p,s,b)
if(r===1){m="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+H.d(t)+");"
t=$.G
if(typeof t!=="number")return t.k()
$.G=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+H.d(t)+", "+n+");"
t=$.G
if(typeof t!=="number")return t.k()
$.G=t+1
return new Function(m+t+"}")()},
cv:function(a,b,c,d,e,f,g){return H.dR(a,b,c,d,!!e,!!f,g)},
dK:function(a,b){return H.bf(v.typeUniverse,H.A(a.a),b)},
dL:function(a,b){return H.bf(v.typeUniverse,H.A(a.c),b)},
cC:function(a){return a.a},
dM:function(a){return a.c},
bv:function(a){var t,s,r,q=new H.ab("self","target","receiver","name"),p=J.dT(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
bi:function(a){if(a==null)H.eJ("boolean expression must not be null")
return a},
eJ:function(a){throw H.e(new H.b3(a))},
f2:function(a){throw H.e(new P.aJ(a))},
dZ:function(a){return new H.aW(a)},
dc:function(a){return v.getIsolateTag(a)},
aC:function(a,b){a[v.arrayRti]=b
return a},
dd:function(a){if(a==null)return null
return a.$ti},
fz:function(a,b,c){return H.dl(a["$a"+H.d(c)],H.dd(b))},
dl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
fx:function(a,b,c){return a.apply(b,H.dl(J.bj(b)["$a"+H.d(c)],H.dd(b)))},
fy:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
eX:function(a){var t,s,r,q,p=H.X($.de.$1(a)),o=$.c8[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.cc[p]
if(t!=null)return t
s=v.interceptorsByTag[p]
if(s==null){p=H.X($.d7.$2(a,p))
if(p!=null){o=$.c8[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.cc[p]
if(t!=null)return t
s=v.interceptorsByTag[p]}}if(s==null)return null
t=s.prototype
r=p[0]
if(r==="!"){o=H.ce(t)
$.c8[p]=o
Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(r==="~"){$.cc[p]=t
return t}if(r==="-"){q=H.ce(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}if(r==="+")return H.di(a,t)
if(r==="*")throw H.e(P.cl(p))
if(v.leafTags[p]===true){q=H.ce(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}else return H.di(a,t)},
di:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cx(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ce:function(a){return J.cx(a,!1,null,!!a.$icj)},
eY:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.ce(t)
else return J.cx(t,c,null,null)},
eT:function(){if(!0===$.cw)return
$.cw=!0
H.eU()},
eU:function(){var t,s,r,q,p,o,n,m
$.c8=Object.create(null)
$.cc=Object.create(null)
H.eS()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dk.$1(p)
if(o!=null){n=H.eY(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eS:function(){var t,s,r,q,p,o,n=C.l()
n=H.a7(C.m,H.a7(C.n,H.a7(C.h,H.a7(C.h,H.a7(C.o,H.a7(C.p,H.a7(C.q(C.f),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.de=new H.c9(q)
$.d7=new H.ca(p)
$.dk=new H.cb(o)},
a7:function(a,b){return a(b)||b},
f_:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aI:function aI(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bH:function bH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aS:function aS(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a},
cf:function cf(a){this.a=a},
au:function au(a){this.a=a
this.b=null},
U:function U(){},
b_:function b_(){},
aY:function aY(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aW:function aW(a){this.a=a},
b3:function b3(a){this.a=a},
c9:function c9(a){this.a=a},
ca:function ca(a){this.a=a},
cb:function cb(a){this.a=a},
dY:function(a,b){var t=b.c
return t==null?b.c=H.cp(a,b.z,!0):t},
cJ:function(a,b){var t=b.c
return t==null?b.c=H.aw(a,"af",[b.z]):t},
cK:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cK(a.z)
return t===11||t===12},
dX:function(a){return a.cy},
da:function(a){return H.cq(v.typeUniverse,a,!1)},
P:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.P(a,t,c,a0)
if(s===t)return b
return H.cU(a,s,!0)
case 7:t=b.z
s=H.P(a,t,c,a0)
if(s===t)return b
return H.cp(a,s,!0)
case 8:t=b.z
s=H.P(a,t,c,a0)
if(s===t)return b
return H.cT(a,s,!0)
case 9:r=b.Q
q=H.aA(a,r,c,a0)
if(q===r)return b
return H.aw(a,b.z,q)
case 10:p=b.z
o=H.P(a,p,c,a0)
n=b.Q
m=H.aA(a,n,c,a0)
if(o===p&&m===n)return b
return H.cn(a,o,m)
case 11:l=b.z
k=H.P(a,l,c,a0)
j=b.Q
i=H.eG(a,j,c,a0)
if(k===l&&i===j)return b
return H.cS(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.aA(a,h,c,a0)
p=b.z
o=H.P(a,p,c,a0)
if(g===h&&o===p)return b
return H.co(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.e(P.bt("Attempted to substitute unexpected RTI kind "+d))}},
aA:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.P(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
eH:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.P(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
eG:function(a,b,c,d){var t,s=b.a,r=H.aA(a,s,c,d),q=b.b,p=H.aA(a,q,c,d),o=b.c,n=H.eH(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.b8()
t.a=r
t.b=p
t.c=n
return t},
eN:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.df(t)
return a.$S()}return null},
dg:function(a,b){var t
if(H.cK(b))if(a instanceof H.U){t=H.eN(a)
if(t!=null)return t}return H.A(a)},
A:function(a){var t
if(a instanceof P.m){t=a.$ti
return t!=null?t:H.cs(a)}if(Array.isArray(a))return H.c3(a)
return H.cs(J.bj(a))},
c3:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
et:function(a){var t=a.$ti
return t!=null?t:H.cs(a)},
cs:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.eu(a,t)},
eu:function(a,b){var t=a instanceof H.U?a.__proto__.__proto__.constructor:b,s=H.en(v.typeUniverse,t.name)
b.$ccache=s
return s},
df:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.cq(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
es:function(a){var t=this,s=H.er,r=u.K
if(t===r){s=H.ew
t.a=H.eo}else if(H.S(t)||t===r){s=H.ez
t.a=H.ep}else if(t===u.q)s=H.d0
else if(t===u.i)s=H.d1
else if(t===u.o)s=H.d1
else if(t===u.N)s=H.ex
else if(t===u.y)s=H.cZ
else if(t.y===9){r=t.z
if(t.Q.every(H.eW)){t.r="$i"+r
s=H.ey}}t.b=s
return t.b(a)},
er:function(a){var t=this
return H.l(v.typeUniverse,H.dg(a,t),null,t,null)},
ey:function(a){var t=this,s=t.r
if(a instanceof P.m)return!!a[s]
return!!J.bj(a)[s]},
eq:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.e(H.cR(H.cO(a,H.dg(a,t),H.q(t,null))))},
d9:function(a,b,c,d){var t=null
if(H.l(v.typeUniverse,a,t,b,t))return a
throw H.e(H.cR("The type argument '"+H.d(H.q(a,t))+"' is not a subtype of the type variable bound '"+H.d(H.q(b,t))+"' of type variable '"+c+"' in '"+H.d(d)+"'."))},
cO:function(a,b,c){var t=P.aK(a),s=H.q(b==null?H.A(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
cR:function(a){return new H.av("TypeError: "+a)},
bd:function(a,b){return new H.av("TypeError: "+H.cO(a,null,b))},
ew:function(a){return!0},
eo:function(a){return a},
ez:function(a){return!0},
ep:function(a){return a},
cZ:function(a){return!0===a||!1===a},
fu:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.e(H.bd(a,"bool"))},
fv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.bd(a,"double"))},
d0:function(a){return typeof a=="number"&&Math.floor(a)===a},
bh:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.bd(a,"int"))},
d1:function(a){return typeof a=="number"},
cr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.bd(a,"num"))},
ex:function(a){return typeof a=="string"},
X:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.bd(a,"String"))},
eD:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.k(s,H.q(a[r],b))
return t},
cY:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
if(a3!=null){t=a3.length
if(a2==null){a2=H.aC([],u.s)
s=null}else s=a2.length
r=a2.length
for(q=t;q>0;--q)C.b.m(a2,"T"+(r+q))
for(p=u.K,o="<",n="",q=0;q<t;++q,n=a0){o+=n
m=a2.length
l=m-1-q
if(l<0)return H.Z(a2,l)
o=C.c.k(o,a2[l])
k=a3[q]
if(!(H.S(k)||k===p))m=!(k===p)
else m=!1
if(m)o+=C.c.k(" extends ",H.q(k,a2))}o+=">"}else{o=""
s=null}p=a1.z
j=a1.Q
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=H.q(p,a2)
for(b="",a="",q=0;q<h;++q,a=a0)b+=C.c.k(a,H.q(i[q],a2))
if(f>0){b+=a+"["
for(a="",q=0;q<f;++q,a=a0)b+=C.c.k(a,H.q(g[q],a2))
b+="]"}if(d>0){b+=a+"{"
for(a="",q=0;q<d;q+=2,a=a0)b+=C.c.k(a,H.q(e[q+1],a2))+" "+e[q]
b+="}"}if(s!=null)a2.length=s
return o+"("+b+") => "+H.d(c)},
q:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.q(a.z,b)
return t}if(m===7){s=a.z
t=H.q(s,b)
r=s.y
return J.dD(r===11||r===12?C.c.k("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.d(H.q(a.z,b))+">"
if(m===9){q=H.eI(a.z)
p=a.Q
return p.length!==0?q+("<"+H.eD(p,b)+">"):q}if(m===11)return H.cY(a,b,null)
if(m===12)return H.cY(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.Z(b,o)
return b[o]}return"?"},
eI:function(a){var t,s=H.dp(a)
if(s!=null)return s
t="minified:"+a
return t},
cW:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
en:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.cq(a,b,!1)
else if(typeof n=="number"){t=n
s=H.ax(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.aw(a,b,r)
o[b]=p
return p}else return n},
el:function(a,b){return H.cX(a.tR,b)},
ek:function(a,b){return H.cX(a.eT,b)},
cq:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.cV(a,null,b,c)
s.set(b,t)
return t},
bf:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.cV(a,b,c,!0)
r.set(c,s)
return s},
em:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cn(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
cV:function(a,b,c,d){var t=H.eb(H.e7(a,b,c,d))
if(t!=null)return t
throw H.e(P.cl('_Universe._parseRecipe("'+H.d(c)+'")'))},
O:function(a,b){b.a=H.eq
b.b=H.es
return b},
ax:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.v(null,null)
t.y=b
t.cy=c
s=H.O(a,t)
a.eC.set(c,s)
return s},
cU:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.ei(a,b,s,c)
a.eC.set(s,t)
return t},
ei:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.S(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.v(null,null)
s.y=6
s.z=b
s.cy=c
return H.O(a,s)},
cp:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.eh(a,b,s,c)
a.eC.set(s,t)
return t},
eh:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.S(b))if(!(b===u.P))if(t!==7)s=t===8&&H.cd(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.cd(r.z))return r
else return H.dY(a,b)}}p=new H.v(null,null)
p.y=7
p.z=b
p.cy=c
return H.O(a,p)},
cT:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.ef(a,b,s,c)
a.eC.set(s,t)
return t},
ef:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.S(b)||b===u.K||b===u.K)return b
else if(t===1)return H.aw(a,"af",[b])
else if(b===u.P)return u.G}s=new H.v(null,null)
s.y=8
s.z=b
s.cy=c
return H.O(a,s)},
ej:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.v(null,null)
t.y=13
t.z=b
t.cy=r
s=H.O(a,t)
a.eC.set(r,s)
return s},
be:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
ee:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
aw:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.be(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.v(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.O(a,s)
a.eC.set(q,r)
return r},
cn:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.be(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.v(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.O(a,p)
a.eC.set(r,o)
return o},
cS:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.be(o)
if(l>0)i+=(n>0?",":"")+"["+H.be(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.ee(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.v(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.O(a,r)
a.eC.set(t,q)
return q},
co:function(a,b,c,d){var t,s=b.cy+"<"+H.be(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.eg(a,b,c,s,d)
a.eC.set(s,t)
return t},
eg:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.P(a,b,s,0)
n=H.aA(a,c,s,0)
return H.co(a,o,n,c!==n)}}m=new H.v(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.O(a,m)},
e7:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eb:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.e8(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.cQ(a,s,h,g,!1)
else if(r===46)s=H.cQ(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.N(a.u,a.e,g.pop()))
break
case 94:g.push(H.ej(a.u,g.pop()))
break
case 35:g.push(H.ax(a.u,5,"#"))
break
case 64:g.push(H.ax(a.u,2,"@"))
break
case 126:g.push(H.ax(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.cm(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.aw(q,o,p))
else{n=H.N(q,a.e,o)
switch(n.y){case 11:g.push(H.co(q,n,p,a.n))
break
default:g.push(H.cn(q,n,p))
break}}break
case 38:H.e9(a,g)
break
case 42:m=a.u
g.push(H.cU(m,H.N(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.cp(m,H.N(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.cT(m,H.N(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.b8()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.cm(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.cS(q,H.N(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.cm(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.ec(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.N(a.u,a.e,i)},
e8:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cQ:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.cW(t,p.z)[q]
if(o==null)H.dm('No "'+q+'" in "'+H.dX(p)+'"')
d.push(H.bf(t,p,o))}else d.push(q)
return n},
e9:function(a,b){var t=b.pop()
if(0===t){b.push(H.ax(a.u,1,"0&"))
return}if(1===t){b.push(H.ax(a.u,4,"1&"))
return}throw H.e(P.bt("Unexpected extended operation "+H.d(t)))},
N:function(a,b,c){if(typeof c=="string")return H.aw(a,c,a.sEA)
else if(typeof c=="number")return H.ea(a,b,c)
else return c},
cm:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.N(a,b,c[t])},
ec:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.N(a,b,c[t])},
ea:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.e(P.bt("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.e(P.bt("Bad index "+c+" for "+b.h(0)))},
l:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(H.S(d)||d===u.K)return!0
t=b.y
if(t===4)return!0
if(H.S(b))return!1
if(b===u.P)return!0
s=t===13
if(s)if(H.l(a,c[b.z],c,d,e))return!0
r=d.y
if(t===6)return H.l(a,b.z,c,d,e)
if(r===6){q=d.z
return H.l(a,b,c,q,e)}if(t===8){if(!H.l(a,b.z,c,d,e))return!1
return H.l(a,H.cJ(a,b),c,d,e)}if(t===7){q=H.l(a,b.z,c,d,e)
return q}if(r===8){if(H.l(a,b,c,d.z,e))return!0
return H.l(a,b,c,H.cJ(a,d),e)}if(r===7){q=H.l(a,b,c,d.z,e)
return q}if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(q=u.W,m=0;m<n;++m){l=p[m]
k=o[m]
q.a(l)
q.a(k)
if(!H.l(a,l,c,k,e)||!H.l(a,k,e,l,c))return!1}return H.d_(a,b.z,c,d.z,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return H.d_(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.ev(a,b,c,d,e)}return!1},
d_:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(!H.l(a0,a1.z,a2,a3.z,a4))return!1
t=a1.Q
s=a3.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.l(a0,q[i],a4,h,a2))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.l(a0,q[p+i],a4,h,a2))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.l(a0,l[i],a4,h,a2))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(i=0,c=0;c<d;c+=2){b=f[c]
do{if(i>=e)return!1
a=g[i]
i+=2}while(a<b)
if(b<a)return!1
h=g[i-1]
if(!H.l(a0,f[c+1],a4,h,a2))return!1}return!0},
ev:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.l(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.cW(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.l(a,H.bf(a,b,m[q]),c,s[q],e))return!1
return!0},
cd:function(a){var t,s=a.y
if(!(a===u.P))if(!H.S(a))if(s!==7)if(!(s===6&&H.cd(a.z)))t=s===8&&H.cd(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eW:function(a){return H.S(a)||a===u.K},
S:function(a){var t,s=a.y,r=s
if(r!==2)if(r!==3)if(r!==4)if(r!==5){t=u.K
if(!(a===t))s=s===7&&a.z===t
else s=!0}else s=!0
else s=!0
else s=!0
else s=!0
return s},
cX:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
v:function v(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
b8:function b8(){this.c=this.b=this.a=null},
b6:function b6(){},
av:function av(a){this.a=a},
dp:function(a){return v.mangledGlobalNames[a]},
eZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
cx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bk:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.cw==null){H.eT()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.e(P.cl("Return interceptor for "+H.d(t(a,p))))}r=a.constructor
q=r==null?null:r[$.cy()]
if(q!=null)return q
q=H.eX(a)
if(q!=null)return q
if(typeof a=="function")return C.v
t=Object.getPrototypeOf(a)
if(t==null)return C.k
if(t===Object.prototype)return C.k
if(typeof r=="function"){Object.defineProperty(r,$.cy(),{value:C.e,enumerable:false,writable:true,configurable:true})
return C.e}return C.e},
dT:function(a){a.fixed$length=Array
return a},
bj:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ah.prototype
return J.aP.prototype}if(typeof a=="string")return J.V.prototype
if(a==null)return J.aQ.prototype
if(typeof a=="boolean")return J.aO.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.E.prototype
return a}if(a instanceof P.m)return a
return J.bk(a)},
eP:function(a){if(typeof a=="number")return J.a2.prototype
if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.E.prototype
return a}if(a instanceof P.m)return a
return J.bk(a)},
db:function(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.E.prototype
return a}if(a instanceof P.m)return a
return J.bk(a)},
eQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.E.prototype
return a}if(a instanceof P.m)return a
return J.bk(a)},
eR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.E.prototype
return a}if(a instanceof P.m)return a
return J.bk(a)},
dD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.eP(a).k(a,b)},
dE:function(a,b,c,d){return J.eR(a).a4(a,b,c,d)},
dF:function(a){return J.eQ(a).gE(a)},
cg:function(a){return J.db(a).gj(a)},
bl:function(a){return J.bj(a).h(a)},
u:function u(){},
aO:function aO(){},
aQ:function aQ(){},
M:function M(){},
aU:function aU(){},
an:function an(){},
E:function E(){},
t:function t(a){this.$ti=a},
bC:function bC(a){this.$ti=a},
w:function w(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a2:function a2(){},
ah:function ah(){},
aP:function aP(){},
V:function V(){}},P={
e1:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.eK()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.aB(new P.bL(r),1)).observe(t,{childList:true})
return new P.bK(r,t,s)}else if(self.setImmediate!=null)return P.eL()
return P.eM()},
e2:function(a){self.scheduleImmediate(H.aB(new P.bM(u.M.a(a)),0))},
e3:function(a){self.setImmediate(H.aB(new P.bN(u.M.a(a)),0))},
e4:function(a){u.M.a(a)
P.ed(0,a)},
ed:function(a,b){var t=new P.c1()
t.a3(a,b)
return t},
e6:function(a,b){var t,s,r
b.a=1
try{a.Z(new P.bR(b),new P.bS(b),u.P)}catch(r){t=H.a8(r)
s=H.Q(r)
P.f0(new P.bT(b,t,s))}},
cP:function(a,b){var t,s,r
for(t=u._;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.D()
b.a=a.a
b.c=a.c
P.as(b,r)}else{r=u.x.a(b.c)
b.a=2
b.c=a
a.S(r)}},
as:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d={},c=d.a=a
for(t=u.n,s=u.x,r=u.c;!0;){q={}
p=c.a===8
if(b==null){if(p){o=t.a(c.c)
P.c5(e,e,c.b,o.a,o.b)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.as(d.a,b)}c=d.a
m=c.c
q.a=p
q.b=m
l=!p
if(l){k=b.c
k=(k&1)!==0||(k&15)===8}else k=!0
if(k){k=b.b
j=k.b
if(p){i=c.b===j
i=!(i||i)}else i=!1
if(i){t.a(m)
P.c5(e,e,c.b,m.a,m.b)
return}h=$.k
if(h!==j)$.k=j
else h=e
c=b.c
if((c&15)===8)new P.bX(d,q,b,p).$0()
else if(l){if((c&1)!==0)new P.bW(q,b,m).$0()}else if((c&2)!==0)new P.bV(d,q,b).$0()
if(h!=null)$.k=h
c=q.b
if(r.b(c)){if(c.a>=4){g=s.a(k.c)
k.c=null
b=k.w(g)
k.a=c.a
k.c=c.c
d.a=c
continue}else P.cP(c,k)
return}}f=b.b
g=s.a(f.c)
f.c=null
b=f.w(g)
c=q.a
l=q.b
if(!c){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}d.a=f
c=f}},
eB:function(a,b){var t=u.R
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.e(P.cA(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
eA:function(){var t,s
for(;t=$.a6,t!=null;){$.az=null
s=t.b
$.a6=s
if(s==null)$.ay=null
t.a.$0()}},
eF:function(){$.ct=!0
try{P.eA()}finally{$.az=null
$.ct=!1
if($.a6!=null)$.cz().$1(P.d8())}},
d5:function(a){var t=new P.b4(a)
if($.a6==null){$.a6=$.ay=t
if(!$.ct)$.cz().$1(P.d8())}else $.ay=$.ay.b=t},
eE:function(a){var t,s,r=$.a6
if(r==null){P.d5(a)
$.az=$.ay
return}t=new P.b4(a)
s=$.az
if(s==null){t.b=r
$.a6=$.az=t}else{t.b=s.b
$.az=s.b=t
if(t.b==null)$.ay=t}},
f0:function(a){var t=null,s=$.k
if(C.a===s){P.c7(t,t,C.a,a)
return}P.c7(t,t,s,u.M.a(s.U(a)))},
bu:function(a,b){var t=b==null?P.dJ(a):b
P.dI(a,"error",u.K)
return new P.aa(a,t)},
dJ:function(a){var t
if(u.C.b(a)){t=a.gA()
if(t!=null)return t}return C.r},
c5:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.B(!1,null,"error","Must not be null")
t.b=P.e_()}P.eE(new P.c6(t))},
d3:function(a,b,c,d,e){var t,s=$.k
if(s===c)return d.$0()
$.k=c
t=s
try{s=d.$0()
return s}finally{$.k=t}},
d4:function(a,b,c,d,e,f,g){var t,s=$.k
if(s===c)return d.$1(e)
$.k=c
t=s
try{s=d.$1(e)
return s}finally{$.k=t}},
eC:function(a,b,c,d,e,f,g,h,i){var t,s=$.k
if(s===c)return d.$2(e,f)
$.k=c
t=s
try{s=d.$2(e,f)
return s}finally{$.k=t}},
c7:function(a,b,c,d){var t
u.M.a(d)
t=C.a!==c
if(t)d=!(!t||!1)?c.U(d):c.ad(d,u.H)
P.d5(d)},
bL:function bL(a){this.a=a},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a){this.a=a},
bN:function bN(a){this.a=a},
c1:function c1(){},
c2:function c2(a,b){this.a=a
this.b=b},
ar:function ar(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
z:function z(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.b=b},
bR:function bR(a){this.a=a},
bS:function bS(a){this.a=a},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a){this.a=a},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a
this.b=null},
am:function am(){},
bF:function bF(a,b){this.a=a
this.b=b},
bG:function bG(a,b){this.a=a
this.b=b},
a4:function a4(){},
aa:function aa(a,b){this.a=a
this.b=b},
bg:function bg(){},
c6:function c6(a){this.a=a},
bb:function bb(){},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function(a,b,c){var t,s
if(P.d2(a))return b+"..."+c
t=new P.aZ(b)
C.b.m($.I,a)
try{s=t
s.a=P.e0(s.a,a,", ")}finally{if(0>=$.I.length)return H.Z($.I,-1)
$.I.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
d2:function(a){var t,s
for(t=$.I.length,s=0;s<t;++s)if(a===$.I[s])return!0
return!1},
dU:function(a){var t,s={}
if(P.d2(a))return"{...}"
t=new P.aZ("")
try{C.b.m($.I,a)
t.a+="{"
s.a=!0
a.u(0,new P.bD(s,t))
t.a+="}"}finally{if(0>=$.I.length)return H.Z($.I,-1)
$.I.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
ai:function ai(){},
x:function x(){},
bD:function bD(a,b){this.a=a
this.b=b},
at:function at(){},
dS:function(a){if(a instanceof H.U)return a.h(0)
return"Instance of '"+H.d(H.bE(a))+"'"},
e0:function(a,b,c){var t=J.dF(b)
if(!t.q())return a
if(c.length===0){do a+=H.d(t.gt())
while(t.q())}else{a+=H.d(t.gt())
for(;t.q();)a=a+c+H.d(t.gt())}return a},
e_:function(){var t,s
if(H.bi($.dC()))return H.Q(new Error())
try{throw H.e("")}catch(s){H.a8(s)
t=H.Q(s)
return t}},
aK:function(a){if(typeof a=="number"||H.cZ(a)||null==a)return J.bl(a)
if(typeof a=="string")return JSON.stringify(a)
return P.dS(a)},
bt:function(a){return new P.a9(a)},
cA:function(a,b,c){return new P.B(!0,a,b,c)},
dH:function(a){return new P.B(!1,null,a,"Must not be null")},
dI:function(a,b,c){if(a==null)throw H.e(P.dH(b))
return a},
dW:function(a,b){return new P.aV(null,null,!0,a,b,"Value not in range")},
cF:function(a,b,c,d,e){var t=H.bh(e==null?J.cg(b):e)
return new P.aM(t,!0,a,c,"Index out of range")},
cM:function(a){return new P.b2(a)},
cl:function(a){return new P.b0(a)},
bz:function(a){return new P.aH(a)},
dj:function(a){H.eZ(H.d(a))},
Y:function Y(){},
J:function J(){},
h:function h(){},
a9:function a9(a){this.a=a},
aT:function aT(){},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aM:function aM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b2:function b2(a){this.a=a},
b0:function b0(a){this.a=a},
aH:function aH(a){this.a=a},
al:function al(){},
aJ:function aJ(a){this.a=a},
bP:function bP(a){this.a=a},
R:function R(){},
o:function o(){},
i:function i(){},
r:function r(){},
m:function m(){},
F:function F(){},
bc:function bc(){},
p:function p(){},
aZ:function aZ(a){this.a=a}},W={
W:function(a,b,c,d,e){var t=W.d6(new W.bO(c),u.A),s=t!=null
if(s&&!0){u.U.a(t)
if(s)J.dE(a,b,t,!1)}return new W.b7(a,b,t,!1,e.i("b7<0>"))},
c4:function(a){var t
if(a==null)return null
if("postMessage" in a){t=W.e5(a)
return t}else return u.r.a(a)},
e5:function(a){if(a===window)return u.w.a(a)
else return new W.b5()},
d6:function(a,b){var t=$.k
if(t===C.a)return a
return t.ae(a,b)},
c:function c(){},
aD:function aD(){},
aF:function aF(){},
a_:function a_(){},
C:function C(){},
bA:function bA(){},
bB:function bB(){},
aq:function aq(a,b){this.a=a
this.$ti=b},
a:function a(){},
b:function b(){},
j:function j(){},
aL:function aL(){},
ag:function ag(){},
D:function D(){},
n:function n(){},
f:function f(){},
ak:function ak(){},
aX:function aX(){},
y:function y(){},
a5:function a5(){},
ch:function ch(a,b){this.a=a
this.$ti=b},
ap:function ap(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b7:function b7(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bO:function bO(a){this.a=a},
a1:function a1(){},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
b5:function b5(){},
b9:function b9(){},
ba:function ba(){}},L={
dG:function(){var t=new L.aE(H.aC([],u.j))
t.a2()
return t},
aE:function aE(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null
_.x=a},
br:function br(a){this.a=a},
bs:function bs(){},
bm:function bm(a){this.a=a},
bn:function bn(a){this.a=a},
bo:function bo(a){this.a=a},
bp:function bp(a){this.a=a},
bq:function bq(a){this.a=a}},V={aG:function aG(a,b){var _=this
_.a=null
_.b=a
_.c=b
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=_.x=_.r=_.e=_.d=null},bx:function bx(a){this.a=a},bw:function bw(a){this.a=a}},Y={
by:function(a,b,c,d){var t=new Y.T(a,c,d,b)
t.x=t.r=1
return t},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.x=_.r=null}},S={a3:function a3(a,b){this.a=a
this.b=b}},F={
dh:function(){L.dG().X(window.performance.now())}}
var w=[C,H,J,P,W,L,V,Y,S,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ci.prototype={}
J.u.prototype={
h:function(a){return"Instance of '"+H.d(H.bE(a))+"'"}}
J.aO.prototype={
h:function(a){return String(a)},
$iY:1}
J.aQ.prototype={
h:function(a){return"null"},
$ii:1}
J.M.prototype={
h:function(a){return String(a)}}
J.aU.prototype={}
J.an.prototype={}
J.E.prototype={
h:function(a){var t=a[$.dr()]
if(t==null)return this.a1(a)
return"JavaScript function for "+H.d(J.bl(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ia0:1}
J.t.prototype={
m:function(a,b){H.c3(a).c.a(b)
if(!!a.fixed$length)H.dm(P.cM("add"))
a.push(b)},
u:function(a,b){var t,s
H.c3(a).i("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.e(P.bz(a))}},
h:function(a){return P.cG(a,"[","]")},
gE:function(a){return new J.w(a,a.length,H.c3(a).i("w<1>"))},
gj:function(a){return a.length},
$iL:1,
$io:1}
J.bC.prototype={}
J.w.prototype={
gt:function(){return this.d},
q:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.e(H.f1(r))
t=s.c
if(t>=q){s.sL(null)
return!1}s.sL(r[t]);++s.c
return!0},
sL:function(a){this.d=this.$ti.c.a(a)},
$iaN:1}
J.a2.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
v:function(a,b){var t
if(typeof b!="number")throw H.e(H.cu(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
ab:function(a,b){var t
if(a>0)t=this.aa(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aa:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ir:1}
J.ah.prototype={$iR:1}
J.aP.prototype={}
J.V.prototype={
k:function(a,b){if(typeof b!="string")throw H.e(P.cA(b,null,null))
return a+b},
h:function(a){return a},
gj:function(a){return a.length},
$ip:1}
H.aj.prototype={
gt:function(){return this.d},
q:function(){var t,s=this,r=s.a,q=J.db(r),p=q.gj(r)
if(s.b!==p)throw H.e(P.bz(r))
t=s.c
if(t>=p){s.sH(null)
return!1}s.sH(q.V(r,t));++s.c
return!0},
sH:function(a){this.d=this.$ti.c.a(a)},
$iaN:1}
H.aI.prototype={
h:function(a){return P.dU(this)}}
H.ad.prototype={
gj:function(a){return this.a},
af:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
n:function(a,b){if(!this.af(b))return null
return this.N(b)},
N:function(a){return this.b[H.X(a)]},
u:function(a,b){var t,s,r,q,p=H.et(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.N(q)))}}}
H.bH.prototype={
l:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.aS.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.aR.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.d(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.d(s.a)+")"
return r+q+"' on '"+t+"' ("+H.d(s.a)+")"}}
H.b1.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.cf.prototype={
$1:function(a){if(u.C.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.au.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iF:1}
H.U.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dq(s==null?"unknown":s)+"'"},
$ia0:1,
gap:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.b_.prototype={}
H.aY.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dq(t)+"'"}}
H.ab.prototype={
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bE(t))+"'")}}
H.aW.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.b3.prototype={
h:function(a){return"Assertion failed: "+P.aK(this.a)}}
H.c9.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.ca.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.cb.prototype={
$1:function(a){return this.a(H.X(a))},
$S:10}
H.v.prototype={
i:function(a){return H.bf(v.typeUniverse,this,a)},
p:function(a){return H.em(v.typeUniverse,this,a)}}
H.b8.prototype={}
H.b6.prototype={
h:function(a){return this.a}}
H.av.prototype={}
P.bL.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:6}
P.bK.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:11}
P.bM.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bN.prototype={
$0:function(){this.a.$0()},
$S:0}
P.c1.prototype={
a3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aB(new P.c2(this,b),0),a)
else throw H.e(P.cM("`setTimeout()` not found."))}}
P.c2.prototype={
$0:function(){this.b.$0()},
$S:1}
P.ar.prototype={
aj:function(a){if((this.c&15)!==6)return!0
return this.b.b.G(u.m.a(this.d),a.a,u.y,u.K)},
ai:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.R.b(t))return q.a(p.al(t,a.a,a.b,s,r,u.l))
else return q.a(p.G(u.v.a(t),a.a,s,r))}}
P.z.prototype={
Z:function(a,b,c){var t,s,r,q=this.$ti
q.p(c).i("1/(2)").a(a)
t=$.k
if(t!==C.a){c.i("@<0/>").p(q.c).i("1(2)").a(a)
if(b!=null)b=P.eB(b,t)}s=new P.z($.k,c.i("z<0>"))
r=b==null?1:3
this.I(new P.ar(s,r,a,b,q.i("@<1>").p(c).i("ar<1,2>")))
return s},
ao:function(a,b){return this.Z(a,null,b)},
I:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.x.a(s.c)
s.c=a}else{if(r===2){t=u._.a(s.c)
r=t.a
if(r<4){t.I(a)
return}s.a=r
s.c=t.c}P.c7(null,null,s.b,u.M.a(new P.bQ(s,a)))}},
S:function(a){var t,s,r,q,p,o=this,n={}
n.a=a
if(a==null)return
t=o.a
if(t<=1){s=u.x.a(o.c)
r=o.c=a
if(s!=null){for(;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=u._.a(o.c)
t=p.a
if(t<4){p.S(a)
return}o.a=t
o.c=p.c}n.a=o.w(a)
P.c7(null,null,o.b,u.M.a(new P.bU(n,o)))}},
D:function(){var t=u.x.a(this.c)
this.c=null
return this.w(t)},
w:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
J:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("af<1>").b(a))if(r.b(a))P.cP(a,s)
else P.e6(a,s)
else{t=s.D()
r.c.a(a)
s.a=4
s.c=a
P.as(s,t)}},
K:function(a,b){var t,s,r=this
u.l.a(b)
t=r.D()
s=P.bu(a,b)
r.a=8
r.c=s
P.as(r,t)},
$iaf:1}
P.bQ.prototype={
$0:function(){P.as(this.a,this.b)},
$S:0}
P.bU.prototype={
$0:function(){P.as(this.b,this.a.a)},
$S:0}
P.bR.prototype={
$1:function(a){var t=this.a
t.a=0
t.J(a)},
$S:6}
P.bS.prototype={
$2:function(a,b){u.l.a(b)
this.a.K(a,b)},
$1:function(a){return this.$2(a,null)},
$S:12}
P.bT.prototype={
$0:function(){this.a.K(this.b,this.c)},
$S:0}
P.bX.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.c
m=r.b.b.Y(u.X.a(r.d),u.z)}catch(q){t=H.a8(q)
s=H.Q(q)
if(n.d){r=u.n.a(n.a.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.b
if(r)p.b=u.n.a(n.a.a.c)
else p.b=P.bu(t,s)
p.a=!0
return}if(u.c.b(m)){if(m instanceof P.z&&m.a>=4){if(m.a===8){r=n.b
r.b=u.n.a(m.c)
r.a=!0}return}o=n.a.a
r=n.b
r.b=m.ao(new P.bY(o),u.z)
r.a=!1}},
$S:1}
P.bY.prototype={
$1:function(a){return this.a},
$S:13}
P.bW.prototype={
$0:function(){var t,s,r,q,p,o,n,m=this
try{r=m.b
q=r.$ti
p=q.c
o=p.a(m.c)
m.a.b=r.b.b.G(q.i("2/(1)").a(r.d),o,q.i("2/"),p)}catch(n){t=H.a8(n)
s=H.Q(n)
r=m.a
r.b=P.bu(t,s)
r.a=!0}},
$S:1}
P.bV.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.c
if(H.bi(q.aj(t))&&q.e!=null){p=l.b
p.b=q.ai(t)
p.a=!1}}catch(o){s=H.a8(o)
r=H.Q(o)
q=u.n.a(l.a.a.c)
p=q.a
n=s
m=l.b
if(p==null?n==null:p===n)m.b=q
else m.b=P.bu(s,r)
m.a=!0}},
$S:1}
P.b4.prototype={}
P.am.prototype={
gj:function(a){var t,s,r=this,q={},p=new P.z($.k,u.k)
q.a=0
t=r.$ti
s=t.i("~(1)").a(new P.bF(q,r))
u.M.a(new P.bG(q,p))
W.W(r.a,r.b,s,!1,t.c)
return p}}
P.bF.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("i(1)")}}
P.bG.prototype={
$0:function(){this.b.J(this.a.a)},
$S:0}
P.a4.prototype={}
P.aa.prototype={
h:function(a){return H.d(this.a)},
$ih:1,
gA:function(){return this.b}}
P.bg.prototype={$icN:1}
P.c6.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.e(s.a)
t=H.e(s.a)
t.stack=r.h(0)
throw t},
$S:0}
P.bb.prototype={
am:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.a===$.k){a.$0()
return}P.d3(q,q,this,a,u.H)}catch(r){t=H.a8(r)
s=H.Q(r)
P.c5(q,q,this,t,u.l.a(s))}},
an:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.a===$.k){a.$1(b)
return}P.d4(q,q,this,a,b,u.H,c)}catch(r){t=H.a8(r)
s=H.Q(r)
P.c5(q,q,this,t,u.l.a(s))}},
ad:function(a,b){return new P.c_(this,b.i("0()").a(a),b)},
U:function(a){return new P.bZ(this,u.M.a(a))},
ae:function(a,b){return new P.c0(this,b.i("~(0)").a(a),b)},
Y:function(a,b){b.i("0()").a(a)
if($.k===C.a)return a.$0()
return P.d3(null,null,this,a,b)},
G:function(a,b,c,d){c.i("@<0>").p(d).i("1(2)").a(a)
d.a(b)
if($.k===C.a)return a.$1(b)
return P.d4(null,null,this,a,b,c,d)},
al:function(a,b,c,d,e,f){d.i("@<0>").p(e).p(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.k===C.a)return a.$2(b,c)
return P.eC(null,null,this,a,b,c,d,e,f)}}
P.c_.prototype={
$0:function(){return this.a.Y(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.bZ.prototype={
$0:function(){return this.a.am(this.b)},
$S:1}
P.c0.prototype={
$1:function(a){var t=this.c
return this.a.an(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.ai.prototype={$iL:1,$io:1}
P.x.prototype={
gE:function(a){return new H.aj(a,this.gj(a),H.A(a).i("aj<x.E>"))},
V:function(a,b){return this.n(a,b)},
u:function(a,b){var t,s
H.A(a).i("~(x.E)").a(b)
t=this.gj(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gj(a))throw H.e(P.bz(a))}},
h:function(a){return P.cG(a,"[","]")}}
P.bD.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.d(a)
s.a=t+": "
s.a+=H.d(b)},
$S:14}
P.at.prototype={}
P.Y.prototype={}
P.J.prototype={}
P.h.prototype={
gA:function(){return H.Q(this.$thrownJsError)}}
P.a9.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.aK(t)
return"Assertion failed"}}
P.aT.prototype={
h:function(a){return"Throw of null."}}
P.B.prototype={
gC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gB:function(){return""},
h:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+o
s=p.gC()+n+t
if(!p.a)return s
r=p.gB()
q=P.aK(p.b)
return s+r+": "+q}}
P.aV.prototype={
gC:function(){return"RangeError"},
gB:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.d(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.d(r)
else if(s>r)t=": Not in range "+H.d(r)+".."+H.d(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.d(r)}return t}}
P.aM.prototype={
gC:function(){return"RangeError"},
gB:function(){var t,s=H.bh(this.b)
if(typeof s!=="number")return s.aq()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gj:function(a){return this.f}}
P.b2.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b0.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aH.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aK(t)+"."}}
P.al.prototype={
h:function(a){return"Stack Overflow"},
gA:function(){return null},
$ih:1}
P.aJ.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.bP.prototype={
h:function(a){return"Exception: "+this.a}}
P.R.prototype={}
P.o.prototype={$iL:1}
P.i.prototype={
h:function(a){return"null"}}
P.r.prototype={}
P.m.prototype={constructor:P.m,$im:1,
h:function(a){return"Instance of '"+H.d(H.bE(this))+"'"},
toString:function(){return this.h(this)}}
P.F.prototype={}
P.bc.prototype={
h:function(a){return""},
$iF:1}
P.p.prototype={}
P.aZ.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.aD.prototype={
h:function(a){return String(a)}}
W.aF.prototype={
h:function(a){return String(a)}}
W.a_.prototype={$ia_:1}
W.C.prototype={
gj:function(a){return a.length}}
W.bA.prototype={
h:function(a){return String(a)}}
W.bB.prototype={
gj:function(a){return a.length}}
W.aq.prototype={
gj:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b<0||b>=t.length)return H.Z(t,b)
return this.$ti.c.a(t[b])}}
W.a.prototype={
h:function(a){return a.localName},
$ia:1}
W.b.prototype={$ib:1}
W.j.prototype={
a4:function(a,b,c,d){return a.addEventListener(b,H.aB(u.U.a(c),1),!1)},
$ij:1}
W.aL.prototype={
gj:function(a){return a.length}}
W.ag.prototype={$iag:1}
W.D.prototype={$iD:1,$icD:1}
W.n.prototype={$in:1}
W.f.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.a0(a):t},
$if:1}
W.ak.prototype={
gj:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.cF(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.Z(a,b)
return a[b]},
$icj:1,
$iL:1,
$io:1}
W.aX.prototype={
gj:function(a){return a.length}}
W.y.prototype={}
W.a5.prototype={
F:function(a,b){u.f.a(b)
this.M(a)
return this.a9(a,W.d6(b,u.o))},
a9:function(a,b){return a.requestAnimationFrame(H.aB(u.f.a(b),1))},
M:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibJ:1}
W.ch.prototype={}
W.ap.prototype={}
W.ao.prototype={}
W.b7.prototype={}
W.bO.prototype={
$1:function(a){return this.a.$1(u.A.a(a))},
$S:15}
W.a1.prototype={
gE:function(a){return new W.ae(a,a.length,H.A(a).i("ae<a1.E>"))}}
W.ae.prototype={
q:function(){var t=this,s=t.c+1,r=t.b
if(s<r){r=t.a
if(s<0||s>=r.length)return H.Z(r,s)
t.sP(r[s])
t.c=s
return!0}t.sP(null)
t.c=r
return!1},
gt:function(){return this.d},
sP:function(a){this.d=this.$ti.c.a(a)},
$iaN:1}
W.b5.prototype={$ij:1,$ibJ:1}
W.b9.prototype={}
W.ba.prototype={}
L.aE.prototype={
a2:function(){var t,s,r,q=this,p="querySelectorAll",o=document,n=u.d
q.c=n.a(o.querySelector("#toRecord"))
q.d=n.a(o.querySelector("#playCanvas"))
n=u.S
q.a=n.a(o.querySelector("input#fps"))
q.b=u.T.a(o.querySelector("input#loop"))
t=u.h
H.d9(n,t,"T",p)
q.sah(new W.aq(o.querySelectorAll("input[name=format]"),u.D))
H.d9(t,t,"T",p)
s=o.querySelectorAll("input[name=quality]")
if(0>=s.length)return H.Z(s,0)
q.f=n.a(t.a(s[0]))
s=new V.aG(q.c,q.d)
s.dy=C.j.n(0,"png".toLowerCase())
s.sW(30)
s.y=0.5
r=o.createElement("img")
r.src=""
s.d=r
o=u.E
n=o.i("~(1)")
t=n.a(s.ga7())
u.M.a(null)
o=o.c
W.W(r,"load",t,!1,o)
s.e=s.r=!1
s.ch=s.cx=Date.now()
s.sO(H.aC([],u.s))
q.r=s
s=q.b
s.toString
W.W(s,"change",n.a(new L.br(q)),!1,o)
o=q.x
C.b.m(o,Y.by(q.c,"red",new S.a3(100,100),1))
C.b.m(o,Y.by(q.c,"green",new S.a3(100,100),5))
C.b.m(o,Y.by(q.c,"yellow",new S.a3(100,100),3))
C.b.m(o,Y.by(q.c,"pink",new S.a3(100,100),8))
q.ac()},
ag:function(){this.c.getContext("2d").clearRect(0,0,800,400)
C.b.u(this.x,new L.bs())},
X:function(a){H.cr(a)
C.d.F(window,this.gak())
this.ag()},
a6:function(a){this.r.dy=C.j.n(0,u.S.a(W.c4(a.currentTarget)).value.toLowerCase())},
ac:function(){var t,s,r,q=this,p=q.e
p.u(p,new L.bm(q))
p=q.f
t=u.E
s=t.i("~(1)")
r=s.a(new L.bn(q))
u.M.a(null)
t=t.c
W.W(p,"change",r,!1,t)
r=q.a
r.toString
W.W(r,"change",s.a(new L.bo(q)),!1,t)
t=q.c
t.toString
s=u.Q
r=s.i("~(1)")
s=s.c
W.W(t,"mousedown",r.a(new L.bp(q)),!1,s)
t=q.c
t.toString
W.W(t,"mouseup",r.a(new L.bq(q)),!1,s)},
sah:function(a){this.e=u.Y.a(a)}}
L.br.prototype={
$1:function(a){this.a.r.r=u.S.a(W.c4(a.currentTarget)).checked},
$S:3}
L.bs.prototype={
$1:function(a){var t,s,r,q,p,o,n
u.O.a(a)
t=a.b
s=t.a
r=a.d
q=a.r
s=t.a=s+r*q
p=t.b
o=a.x
r=t.b=p+r*o
p=a.a
n=p.width
if(typeof n!=="number")return H.K(n)
if(s+10>n||s-10<0)a.r=q*-1
s=p.height
if(typeof s!=="number")return H.K(s)
if(r+10>s||r-10<0)a.x=o*-1
s=p.getContext("2d")
s.beginPath()
s.arc(t.a,t.b,10,0,6.283185307179586,!1)
s.fillStyle=a.e
s.fill()
s.closePath()},
$S:16}
L.bm.prototype={
$1:function(a){var t,s
u.S.a(a)
t=u.Q
s=t.i("~(1)").a(this.a.ga5())
u.M.a(null)
return W.W(a,"click",s,!1,t.c)},
$S:17}
L.bn.prototype={
$1:function(a){var t=u.S.a(W.c4(a.currentTarget)).valueAsNumber
P.dj(t)
this.a.r.y=t},
$S:3}
L.bo.prototype={
$1:function(a){this.a.r.sW(H.bh(u.S.a(W.c4(a.currentTarget)).valueAsNumber))},
$S:3}
L.bp.prototype={
$1:function(a){var t,s,r
u.V.a(a)
t=this.a
s=t.r
s.sO(H.aC([],u.s))
r=s.a
s.dx=new J.w(r,r.length,H.A(r).i("w<1>"))
s.e=!0
s.T(window.performance.now())
t.c.classList.add("recording")},
$S:8}
L.bq.prototype={
$1:function(a){var t,s,r,q
u.V.a(a)
t=this.a
t.c.classList.remove("recording")
s=t.r
if(H.bi(s.e)&&s.z!=null){r=window
q=s.z
C.d.M(r)
r.cancelAnimationFrame(q)
s.e=!1
s.z=null
q=s.a
s.dx=new J.w(q,q.length,H.A(q).i("w<1>"))}t.b.checked
s.R(window.performance.now())},
$S:8}
V.aG.prototype={
sW:function(a){this.x=a
if(typeof a!=="number")return H.K(a)
this.db=1000/a},
T:function(a){var t,s,r,q=this
q.z=C.d.F(window,new V.bx(q))
t=Date.now()
q.ch=t
s=q.cx
if(typeof s!=="number")return H.K(s)
s=t-s
q.cy=s
t=q.db
if(typeof t!=="number")return H.K(t)
if(s>t){t=q.b
P.dj(t)
s=q.a;(s&&C.b).m(s,t.toDataURL(q.dy,q.y))
t=q.ch
s=q.cy
r=q.db
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.K(r)
r=C.i.v(s,r)
if(typeof t!=="number")return t.a_()
q.cx=t-r}},
R:function(a){var t,s,r,q=this
if(!H.bi(q.e)&&q.a.length!==0){C.d.F(window,new V.bw(q))
t=Date.now()
q.ch=t
s=q.cx
if(typeof s!=="number")return H.K(s)
s=t-s
q.cy=s
t=q.db
if(typeof t!=="number")return H.K(t)
if(s>t){if(q.dx.q())q.d.src=H.X(q.dx.d)
else if(H.bi(q.r)&&!0){t=q.a
q.dx=new J.w(t,t.length,H.A(t).i("w<1>"))}t=q.ch
s=q.cy
r=q.db
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.K(r)
r=C.i.v(s,r)
if(typeof t!=="number")return t.a_()
q.cx=t-r}}},
a8:function(a){var t=this.c,s=t.getContext("2d")
s.clearRect(0,0,t.width,t.height)
s.drawImage(this.d,0,0)},
sO:function(a){this.a=u.a.a(a)}}
V.bx.prototype={
$1:function(a){return this.a.T(H.cr(a))},
$S:2}
V.bw.prototype={
$1:function(a){return this.a.R(H.cr(a))},
$S:2}
Y.T.prototype={}
S.a3.prototype={};(function aliases(){var t=J.u.prototype
t.a0=t.h
t=J.M.prototype
t.a1=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(P,"eK","e2",4)
t(P,"eL","e3",4)
t(P,"eM","e4",4)
s(P,"d8","eF",1)
var q
r(q=L.aE.prototype,"gak","X",2)
r(q,"ga5","a6",7)
r(V.aG.prototype,"ga7","a8",7)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.m,null)
r(P.m,[H.ci,J.u,J.w,H.aj,H.aI,H.bH,P.h,H.U,H.au,H.v,H.b8,P.c1,P.ar,P.z,P.b4,P.am,P.a4,P.aa,P.bg,P.at,P.x,P.Y,P.r,P.al,P.bP,P.o,P.i,P.F,P.bc,P.p,P.aZ,W.ch,W.a1,W.ae,W.b5,L.aE,V.aG,Y.T,S.a3])
r(J.u,[J.aO,J.aQ,J.M,J.t,J.a2,J.V,W.j,W.bA,W.bB,W.b,W.b9])
r(J.M,[J.aU,J.an,J.E])
s(J.bC,J.t)
r(J.a2,[J.ah,J.aP])
s(H.ad,H.aI)
r(P.h,[H.aS,H.aR,H.b1,H.aW,P.a9,H.b6,P.aT,P.B,P.b2,P.b0,P.aH,P.aJ])
r(H.U,[H.cf,H.b_,H.c9,H.ca,H.cb,P.bL,P.bK,P.bM,P.bN,P.c2,P.bQ,P.bU,P.bR,P.bS,P.bT,P.bX,P.bY,P.bW,P.bV,P.bF,P.bG,P.c6,P.c_,P.bZ,P.c0,P.bD,W.bO,L.br,L.bs,L.bm,L.bn,L.bo,L.bp,L.bq,V.bx,V.bw])
r(H.b_,[H.aY,H.ab])
s(H.b3,P.a9)
s(H.av,H.b6)
s(P.bb,P.bg)
s(P.ai,P.at)
r(P.r,[P.J,P.R])
r(P.B,[P.aV,P.aM])
r(W.j,[W.f,W.a5])
r(W.f,[W.a,W.C])
s(W.c,W.a)
r(W.c,[W.aD,W.aF,W.a_,W.aL,W.ag,W.D,W.aX])
s(W.aq,P.ai)
s(W.y,W.b)
s(W.n,W.y)
s(W.ba,W.b9)
s(W.ak,W.ba)
s(W.ap,P.am)
s(W.ao,W.ap)
s(W.b7,P.a4)
t(P.at,P.x)
t(W.b9,P.x)
t(W.ba,W.a1)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{R:"int",J:"double",r:"num",p:"String",Y:"bool",i:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["i()","~()","~(r)","i(b)","~(~())","@(@)","i(@)","~(b)","i(n)","@(@,p)","@(p)","i(~())","i(@[F])","z<@>(@)","i(@,@)","@(b)","i(T)","a4<n>(D)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.el(v.typeUniverse,JSON.parse('{"aU":"M","an":"M","E":"M","f4":"b","fa":"b","f3":"a","fb":"a","fh":"a","f5":"c","fe":"c","fc":"f","f9":"f","fg":"n","f7":"y","f6":"C","fi":"C","ff":"j","aO":{"Y":[]},"aQ":{"i":[]},"M":{"a0":[]},"t":{"o":["1"],"L":["1"]},"bC":{"t":["1"],"o":["1"],"L":["1"]},"w":{"aN":["1"]},"a2":{"J":[],"r":[]},"ah":{"R":[],"J":[],"r":[]},"aP":{"J":[],"r":[]},"V":{"p":[]},"aj":{"aN":["1"]},"ad":{"aI":["1","2"]},"aS":{"h":[]},"aR":{"h":[]},"b1":{"h":[]},"au":{"F":[]},"U":{"a0":[]},"b_":{"a0":[]},"aY":{"a0":[]},"ab":{"a0":[]},"aW":{"h":[]},"b3":{"h":[]},"b6":{"h":[]},"av":{"h":[]},"z":{"af":["1"]},"aa":{"h":[]},"bg":{"cN":[]},"bb":{"cN":[]},"ai":{"x":["1"],"o":["1"],"L":["1"]},"J":{"r":[]},"a9":{"h":[]},"aT":{"h":[]},"B":{"h":[]},"aV":{"h":[]},"aM":{"h":[]},"b2":{"h":[]},"b0":{"h":[]},"aH":{"h":[]},"al":{"h":[]},"aJ":{"h":[]},"R":{"r":[]},"o":{"L":["1"]},"bc":{"F":[]},"c":{"a":[],"f":[],"j":[]},"aD":{"a":[],"f":[],"j":[]},"aF":{"a":[],"f":[],"j":[]},"a_":{"a":[],"f":[],"j":[]},"C":{"f":[],"j":[]},"aq":{"x":["1"],"o":["1"],"L":["1"],"x.E":"1"},"a":{"f":[],"j":[]},"aL":{"a":[],"f":[],"j":[]},"ag":{"a":[],"f":[],"j":[]},"D":{"cD":[],"a":[],"f":[],"j":[]},"n":{"b":[]},"f":{"j":[]},"ak":{"a1":["f"],"x":["f"],"o":["f"],"cj":["f"],"L":["f"],"x.E":"f","a1.E":"f"},"aX":{"a":[],"f":[],"j":[]},"y":{"b":[]},"a5":{"bJ":[],"j":[]},"ap":{"am":["1"]},"ao":{"ap":["1"],"am":["1"]},"ae":{"aN":["1"]},"b5":{"bJ":[],"j":[]}}'))
H.ek(v.typeUniverse,JSON.parse('{"a4":1,"ai":1,"at":1}'))
var u=(function rtii(){var t=H.da
return{n:t("aa"),d:t("a_"),T:t("cD"),O:t("T"),h:t("a"),C:t("h"),A:t("b"),r:t("j"),Z:t("a0"),G:t("af<i>"),c:t("af<@>"),S:t("D"),j:t("t<T>"),s:t("t<p>"),b:t("t<@>"),g:t("E"),p:t("cj<@>"),Y:t("o<D>"),a:t("o<p>"),V:t("n"),P:t("i"),K:t("m"),W:t("v"),l:t("F"),N:t("p"),B:t("an"),w:t("bJ"),E:t("ao<b>"),Q:t("ao<n>"),D:t("aq<D>"),x:t("ar<@,@>"),_:t("z<@>"),k:t("z<R>"),y:t("Y"),m:t("Y(m)"),i:t("J"),z:t("@"),X:t("@()"),U:t("@(b)"),v:t("@(m)"),R:t("@(m,F)"),q:t("R"),o:t("r"),H:t("~"),M:t("~()"),f:t("~(r)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.t=J.u.prototype
C.b=J.t.prototype
C.u=J.ah.prototype
C.i=J.a2.prototype
C.c=J.V.prototype
C.v=J.E.prototype
C.k=J.aU.prototype
C.e=J.an.prototype
C.d=W.a5.prototype
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.l=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.q=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.m=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.n=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.o=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.h=function(hooks) { return hooks; }

C.a=new P.bb()
C.r=new P.bc()
C.w=H.aC(t(["jpeg","jpg","png"]),u.s)
C.j=new H.ad(3,{jpeg:"image/jpeg",jpg:"image/jpeg",png:"image/png"},C.w,H.da("ad<p,p>"))})();(function staticFields(){$.G=0
$.ac=null
$.cB=null
$.de=null
$.d7=null
$.dk=null
$.c8=null
$.cc=null
$.cw=null
$.a6=null
$.ay=null
$.az=null
$.ct=!1
$.k=C.a
$.I=[]})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"f8","dr",function(){return H.dc("_$dart_dartClosure")})
t($,"fd","cy",function(){return H.dc("_$dart_js")})
t($,"fj","ds",function(){return H.H(H.bI({
toString:function(){return"$receiver$"}}))})
t($,"fk","dt",function(){return H.H(H.bI({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fl","du",function(){return H.H(H.bI(null))})
t($,"fm","dv",function(){return H.H(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fp","dy",function(){return H.H(H.bI(void 0))})
t($,"fq","dz",function(){return H.H(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fo","dx",function(){return H.H(H.cL(null))})
t($,"fn","dw",function(){return H.H(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"fs","dB",function(){return H.H(H.cL(void 0))})
t($,"fr","dA",function(){return H.H(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"ft","cz",function(){return P.e1()})
t($,"fw","dC",function(){return new Error().stack!=void 0})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.u,DOMError:J.u,MediaError:J.u,NavigatorUserMediaError:J.u,OverconstrainedError:J.u,PositionError:J.u,SQLError:J.u,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aD,HTMLAreaElement:W.aF,HTMLCanvasElement:W.a_,CDATASection:W.C,CharacterData:W.C,Comment:W.C,ProcessingInstruction:W.C,Text:W.C,DOMException:W.bA,DOMTokenList:W.bB,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,SubmitEvent:W.b,Performance:W.j,EventTarget:W.j,HTMLFormElement:W.aL,HTMLImageElement:W.ag,HTMLInputElement:W.D,MouseEvent:W.n,DragEvent:W.n,PointerEvent:W.n,WheelEvent:W.n,Document:W.f,DocumentFragment:W.f,HTMLDocument:W.f,ShadowRoot:W.f,XMLDocument:W.f,Attr:W.f,DocumentType:W.f,Node:W.f,NodeList:W.ak,RadioNodeList:W.ak,HTMLSelectElement:W.aX,CompositionEvent:W.y,FocusEvent:W.y,KeyboardEvent:W.y,TextEvent:W.y,TouchEvent:W.y,UIEvent:W.y,Window:W.a5,DOMWindow:W.a5})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMTokenList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Performance:true,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLInputElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.dh,[])
else F.dh([])})})()
//# sourceMappingURL=main.dart.js.map
