// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,c=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var a,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,e)||c.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=a):t[e]=l.value),p="get"in l,b="set"in l,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),b&&i&&i.call(t,e,l.set),t};function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",m=b()?function(t){var e,r,n,o,i;if(null==t)return y.call(t);r=t[_],i=_,e=null!=(o=t)&&s.call(o,i);try{t[_]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[_]=r:delete t[_],n}:function(t){return y.call(t)},d=Number,v=d.prototype.toString,g=b();function j(t){return"object"==typeof t&&(t instanceof d||(g?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function h(t){return f(t)||j(t)}a(h,"isPrimitive",f),a(h,"isObject",j);var O=Number.POSITIVE_INFINITY,S=d.NEGATIVE_INFINITY,w=Math.floor;function T(t){return t<O&&t>S&&w(e=t)===e;var e}function I(t){return f(t)&&T(t)}function P(t){return j(t)&&T(t.valueOf())}function N(t){return I(t)||P(t)}function E(t){return I(t)&&t>=0}function F(t){return P(t)&&t.valueOf()>=0}function V(t){return E(t)||F(t)}return a(N,"isPrimitive",I),a(N,"isObject",P),a(V,"isPrimitive",E),a(V,"isObject",F),function(t){if(!E(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0iF2V",t));return function(){return arguments[t]}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).argumentFunction=e();
//# sourceMappingURL=browser.js.map
