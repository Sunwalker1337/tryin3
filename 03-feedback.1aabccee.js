!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,r,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(S,t),s?y(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function S(){var e=p();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function h(e){return f=void 0,v&&i?y(e):(i=r=void 0,a)}function T(){var e=p(),n=O(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(S,t),y(c)}return void 0===f&&(f=setTimeout(S,t)),a}return t=w(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(w(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},T.flush=function(){return void 0===f?a:h(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),O=new FormData(j),S=document.querySelector("input"),h=document.querySelector('[name="message"]'),T={};window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(null!==e){var t=JSON.parse(e);S.value=t.email,h.value=t.message}})),j.addEventListener("input",e(t)((function(){O.set("email","".concat(S.value)),O.set("message","".concat(h.value)),T.email=O.get("email"),T.message=O.get("message"),localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),j.addEventListener("submit",(function(){event.preventDefault(),j.reset()}))}();
//# sourceMappingURL=03-feedback.1aabccee.js.map