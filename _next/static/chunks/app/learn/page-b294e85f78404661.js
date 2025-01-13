(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9e3],{15164:function(e,t,n){Promise.resolve().then(n.bind(n,69614)),Promise.resolve().then(n.bind(n,43946)),Promise.resolve().then(n.bind(n,77334))},90622:function(){},43398:function(e,t,n){"use strict";var r=n(20357);n(90622);var o=n(2265),s=o&&"object"==typeof o&&"default"in o?o:{default:o},i=void 0!==r&&r.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,s=void 0===o?i:o;c(l(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a="undefined"!=typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!=typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(c(l(e),"`insertRule` accepts only strings"),"undefined"==typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"==typeof window){var n="undefined"!=typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},t.deleteRule=function(e){if("undefined"==typeof window){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!=typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},t.cssRules=function(){var e=this;return"undefined"==typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&c(l(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},d={};function f(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return d[r]||(d[r]="jsx-"+u(e+"-"+n)),d[r]}function h(e,t){"undefined"==typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;return d[n]||(d[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o;this._sheet=r||new a({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"==typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var s=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=s,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var o=f(r,n);return{styleId:o,rules:Array.isArray(t)?t.map(function(e){return h(o,e)}):[h(o,t)]}}return{styleId:f(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=o.createContext(null);m.displayName="StyleSheetContext";var g=s.default.useInsertionEffect||s.default.useLayoutEffect,v="undefined"!=typeof window?new p:void 0;function x(e){var t=v||o.useContext(m);return t&&("undefined"==typeof window?t.add(e):g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}x.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=x},48059:function(e,t,n){"use strict";e.exports=n(43398).style},49344:function(e,t,n){"use strict";var r=n(57437),o=n(48059),s=n.n(o);t.Z=()=>{let e=e=>({top:"".concat(100*Math.random(),"%"),left:"".concat(100*Math.random(),"%"),transform:"translate(-50%, -50%)",animation:"moveAround-".concat(e," ").concat(12*Math.random()+6,"s linear infinite")});return(0,r.jsxs)("div",{style:{animationDuration:"30s"},className:"jsx-6ca43fa0f94deb87 absolute top-0 left-0 h-full w-full block animate-spin z-0",children:[(0,r.jsx)("div",{style:{boxShadow:"0 0 50px 50px #995df9"},className:"jsx-6ca43fa0f94deb87 bg-purple-weak h-[200%] w-[200%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}),["#d4b2ab","#00b4ff","rgba(158, 86, 241, 0.91)","rgba(174, 63, 215, 0.6)"].map((t,n)=>(0,r.jsx)("div",{style:{boxShadow:"0 0 50px 50px ".concat(t),background:t,...e(n)},className:"jsx-6ca43fa0f94deb87 gradient opacity-80"},n)),(0,r.jsx)(s(),{id:"6ca43fa0f94deb87",children:".gradient.jsx-6ca43fa0f94deb87{position:absolute;width:100%;height:80%;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}@-webkit-keyframes moveAround-0{0%{top:0%;left:0%}25%{top:25%;left:75%}50%{top:50%;left:50%}75%{top:75%;left:25%}100%{top:100%;left:100%}}@-moz-keyframes moveAround-0{0%{top:0%;left:0%}25%{top:25%;left:75%}50%{top:50%;left:50%}75%{top:75%;left:25%}100%{top:100%;left:100%}}@-o-keyframes moveAround-0{0%{top:0%;left:0%}25%{top:25%;left:75%}50%{top:50%;left:50%}75%{top:75%;left:25%}100%{top:100%;left:100%}}@keyframes moveAround-0{0%{top:0%;left:0%}25%{top:25%;left:75%}50%{top:50%;left:50%}75%{top:75%;left:25%}100%{top:100%;left:100%}}@-webkit-keyframes moveAround-1{0%{top:0%;left:0%}35%{top:25%;left:75%}50%{top:50%;left:50%}65%{top:75%;left:25%}100%{top:0%;left:0%}}@-moz-keyframes moveAround-1{0%{top:0%;left:0%}35%{top:25%;left:75%}50%{top:50%;left:50%}65%{top:75%;left:25%}100%{top:0%;left:0%}}@-o-keyframes moveAround-1{0%{top:0%;left:0%}35%{top:25%;left:75%}50%{top:50%;left:50%}65%{top:75%;left:25%}100%{top:0%;left:0%}}@keyframes moveAround-1{0%{top:0%;left:0%}35%{top:25%;left:75%}50%{top:50%;left:50%}65%{top:75%;left:25%}100%{top:0%;left:0%}}@-webkit-keyframes moveAround-2{0%{top:50%;left:50%}20%{top:75%;left:25%}40%{top:100%;left:50%}70%{top:25%;left:75%}100%{top:50%;left:50%}}@-moz-keyframes moveAround-2{0%{top:50%;left:50%}20%{top:75%;left:25%}40%{top:100%;left:50%}70%{top:25%;left:75%}100%{top:50%;left:50%}}@-o-keyframes moveAround-2{0%{top:50%;left:50%}20%{top:75%;left:25%}40%{top:100%;left:50%}70%{top:25%;left:75%}100%{top:50%;left:50%}}@keyframes moveAround-2{0%{top:50%;left:50%}20%{top:75%;left:25%}40%{top:100%;left:50%}70%{top:25%;left:75%}100%{top:50%;left:50%}}@-webkit-keyframes moveAround-3{0%{top:100%;left:100%}25%{top:50%;left:80%}60%{top:25%;left:75%}85%{top:0%;left:100%}100%{top:100%;left:100%}}@-moz-keyframes moveAround-3{0%{top:100%;left:100%}25%{top:50%;left:80%}60%{top:25%;left:75%}85%{top:0%;left:100%}100%{top:100%;left:100%}}@-o-keyframes moveAround-3{0%{top:100%;left:100%}25%{top:50%;left:80%}60%{top:25%;left:75%}85%{top:0%;left:100%}100%{top:100%;left:100%}}@keyframes moveAround-3{0%{top:100%;left:100%}25%{top:50%;left:80%}60%{top:25%;left:75%}85%{top:0%;left:100%}100%{top:100%;left:100%}}"})]})}},69614:function(e,t,n){"use strict";var r=n(57437),o=n(76822),s=n(77334),i=n(43946),l=n(58092),a=n(2265),c=n(49344);t.default=e=>{let{title:t,titleClamp:n=null,description:u,descriptionClamp:d=null,url:f,dark:h=!1,verticalTitle:p}=e,[m,g]=(0,a.useState)(0),v=(0,a.useRef)(null),[x,b]=(0,a.useState)(!1);(0,a.useEffect)(()=>{v.current&&g(v.current.clientWidth+48)},[v]);let y=f?s.default:"div";return(0,r.jsxs)(y,{href:f,className:"flex min-w-[85%] md:min-w-0 md:w-full rounded-xl  border transition-colors duration-300 delay-0 relative overflow-hidden  ".concat(h?"bg-black text-white border-white":"bg-white text-black border-black","\n      ").concat(f?"group md:hover:border-black md:hover:text-black":"","\n      "),style:{minHeight:m},onMouseEnter:()=>{f&&b(!0)},onMouseLeave:()=>{f&&b(!1)},onFocus:()=>{f&&b(!0)},onBlur:()=>{f&&b(!1)},children:[(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full transition-opacity duration-300 ".concat(x?"opacity-100":"opacity-0"),children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)("div",{className:"w-[60px] relative border-r grow-0 shrink-0 flex items-end align-middle transition-all duration-300 md:group-hover:border-black z-10 ".concat(h?"border-white group-hover:border-black":"border-black group-hover:border-black"),children:(0,r.jsx)("div",{ref:v,children:(0,r.jsx)(o.X6,{tag:"h3",size:"sm",className:"block whitespace-nowrap -rotate-90 origin-top-left ml-2.5 -mb-2.5 transition-none md:group-hover:text-black delay-0",children:p})})}),(0,r.jsxs)("div",{className:"py-6 px-10 flex flex-col w-full z-10",children:[f&&(0,r.jsx)(i.default,{Icon:(0,r.jsx)(l.Z,{dark:!0}),hover:!0,dark:!0,HoverIcon:(0,r.jsx)(l.Z,{dark:!1}),className:"flex-grow-0 self-end -mr-4 mb-28 md:group-hover:!bg-black",direction:"top-right",border:!0,size:"lg"}),(0,r.jsxs)("div",{className:"mt-auto mb-0 self-end",children:[t&&(0,r.jsx)(o.X6,{size:"sm",tag:"h4",className:"text-pretty mb-3 ".concat(n?"line-clamp-".concat(n):""),children:t}),u&&(0,r.jsx)(o.uT,{size:"md",className:"text-pretty ".concat(d?"line-clamp-".concat(d):""),children:u})]})]})]})}},76822:function(e,t,n){"use strict";n.d(t,{uT:function(){return o},sS:function(){return s},X6:function(){return i},__:function(){return l},bN:function(){return a}});var r=n(57437),o=e=>{let{children:t,className:n,tag:o="p",size:s="md"}=e;return(0,r.jsx)(o,{className:"text-pretty ".concat({xs:"text-xs leading-[1.2857]",sm:"text-sm leading-[1.2857]",md:"text-[1.0625rem] leading-[1.647]",lg:"text-[1.0625rem] leading-[2rem] lg:text-2xl lg:leading-[2rem]"}[s]," ").concat(n),children:t})},s=e=>{let{children:t,className:n,tag:o="h1",size:s="lg"}=e;return(0,r.jsx)(o,{className:"text-pretty font-youth ".concat({xs:"text-sm leading-[1.714]",sm:"text-[2.3125rem] leading-[1.2] lg:text-6xl leading-[1.066666666666667]",md:"text-[3.125rem] leading-[1.1] tracking-normal lg:text-7xl lg:leading-[1.1111]",lg:"text-[4rem] leading-[1] tracking-normal lg:text-[5.125rem] lg:leading-[1]",xl:"text-[5.125rem] leading-[1.073171] tracking-normal lg:text-5.5rem] lg:leading-[1.0909091]"}[s]," ").concat(n),children:t})},i=e=>{let{children:t,className:n,tag:o="h1",size:s="lg",...i}=e;return(0,r.jsx)(o,{...i,className:"font-youth ".concat({xs:"",sm:"text-xl leading-[1.4] lg:text-2xl lg:leading-[1.333333333333333]",md:"text-[1.75rem] leading-[1.2] lg:text-[2rem] lg:leading-tight",lg:"text-4xl leading-[1.2] lg:text-[2.5rem] lg:leading-tight"}[s]," ").concat(n),children:t})},l=e=>{let{children:t,className:n,tag:o="p",size:s="md"}=e;return(0,r.jsx)(o,{className:"uppercase ".concat({xs:"",sm:"",md:"",lg:"text-xl leading-[1.2]"}[s]," ").concat(n),children:t})},a=e=>{let{children:t,mobileFontSize:n="lg",className:o,tag:s="h1"}=e;return(0,r.jsx)(s,{className:"".concat("lg"==n?"text-scaled-mobile-50":"text-scaled-mobile-40"," leading-[1.1] lg:text-scaled-desktop-82 ").concat(o),children:t})}},43946:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(57437);let o=e=>{switch(e){case"top":case"up":default:return"rotate-0";case"top-right":case"up-right":case"right-up":return"rotate-45";case"right":return"rotate-90";case"bottom-right":case"down-right":case"right-down":return"rotate-[135deg]";case"bottom":case"down":return"rotate-180";case"bottom-left":case"down-left":case"left-down":return"-rotate-[135deg]";case"left":return"-rotate-90";case"top-left":case"up-left":case"left-up":return"-rotate-45"}};var s=n(58092),i=e=>{let{Icon:t=(0,r.jsx)(s.Z,{}),direction:n="up",hover:i=!1,HoverIcon:l=(0,r.jsx)(s.Z,{}),hoverDirection:a="up",className:c,size:u="md",border:d=!0,dark:f=!1,transparentBg:h=!1}=e;return(0,r.jsx)("div",{className:"\n        ".concat(i?"group":""," transition-colors duration-200 relative overflow-hidden rounded-full \n        ").concat({xs:"h-4 w-4",sm:"h-6 w-6",40:"h-10 w-10",md:"h-12 w-12",lg:"h-16 w-16"}[u],"\n        ").concat(d?"border ".concat(f?"border-white ".concat(i?"group-hover:border-black":""):"border-black ".concat(i?"group-hover:border-white":"")):"","\n        ").concat(h?"bg-transparent":f?"bg-black ".concat(i?"group-hover:bg-white":""):"bg-white ".concat(i?"group-hover:bg-black":""),"\n        ").concat(c,"\n        "),children:(0,r.jsx)("div",{className:"absolute top-0 left-0 h-full w-full transition-transform \n            ".concat(o(n)),children:(0,r.jsxs)("div",{className:"absolute top-0 left-0 h-full w-full transition-all duration-300\n            ".concat(i?"group-hover:-top-full":""),children:[(0,r.jsx)("div",{className:"top-0 left-0 absolute h-full w-full flex justify-center items-center",children:t}),i&&(0,r.jsx)("div",{className:"top-full left-0 absolute h-full w-full flex justify-center items-center transition-transform \n                ".concat(o(a)),children:l})]})})})}},77334:function(e,t,n){"use strict";n.r(t);var r=n(57437),o=n(87138),s=n(32687);t.default=e=>{let{children:t,href:n,self:i=null,...l}=e,a=(0,s.F)(n);return(0,r.jsx)(o.default,{href:n,target:i||a?"_self":"_blank",prefetch:a,scroll:!0,...l,children:t})}},58092:function(e,t,n){"use strict";var r=n(57437),o=n(40830);t.Z=e=>{let{dark:t=!1,className:n=""}=e,s=(0,o.Z)(),i=t?s.white.DEFAULT:s.black.DEFAULT;return(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.4893 3.10496L4.29687 9.46964L4.95957 10.2185L11.3208 4.58936L11.3208 21.2959L12.3208 21.2959L12.3208 4.58766L18.6848 10.2039L19.3465 9.45408L12.1515 3.10451C11.9623 2.93752 11.6783 2.93772 11.4893 3.10496Z",fill:i,className:"group-hover:fill-[".concat(t?s.black.DEFAULT:s.white.DEFAULT,"] transition duration-300 ").concat(n)})})}},32687:function(e,t,n){"use strict";function r(e){return!!e&&(e.startsWith("/")||!e.startsWith("http"))}n.d(t,{F:function(){return r}})},40830:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2265),o=n(5481),s=n.n(o),i=n(7722),l=n.n(i);function a(){return(0,r.useMemo)(()=>s()(l()),[]).theme.colors}},7722:function(e,t,n){"use strict";let r;let o=e=>e/1440*100+"vw",s=e=>e/390*100+"vw";e.exports={content:["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/macros/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}","./src/utils/**/*.{js,ts,jsx,tsx,mdx}"],safelist:["group-hover:fill-[#ffffff], group-hover:fill-[#17141A], line-clamp-1, line-clamp-2, line-clamp-3, line-clamp-4, line-clamp-5, line-clamp-6, line-clamp-7, line-clamp-8, line-clamp-9, line-clamp-10"],theme:{extend:{backgroundImage:{"gradient-radial":"radial-gradient(var(--tw-gradient-stops))","gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"},colors:{black:{DEFAULT:"#17141A",subtle:"#453D51",pure:"#000000"},white:{DEFAULT:"#ffffff",weak:"#F6F6F6",pure:"#ffffff"},purple:{DEFAULT:"#7b2bf9",weak:"#995DF9",dark:"#38167F"},red:{DEFAULT:"#EC5643",error:{DEFAULT:"#ff4949",subtle:"#FFC7C7"}},weak:{DEFAULT:"#D9D9DB"},subtle:{DEFAULT:"#5D5C62"},green:{DEFAULT:"#42D885"}},fontFamily:{untitledSans:['"UntitledSans"',"sans-serif"],youth:['"Youth"',"sans-serif"]},fontSize:(r={},[82,50,40,32,24,20,18,16,14,12,10,8].forEach(e=>{r["scaled-desktop-".concat(e)]=o(e),r["scaled-mobile-".concat(e)]=s(e)}),r),backgroundImage:{"explore-card-gradient":"linear-gradient(161.19deg, #4E4D51 17.03%, #29242A 100.02%)"},width:{"1/10":"10%","2/10":"20%","3/10":"30%","4/10":"40%","5/10":"50%","6/10":"60%","7/10":"70%","8/10":"80%","9/10":"90%"}}},plugins:[n(56243),function(e){let{addUtilities:t}=e;t({".no-scrollbar":{"-ms-overflow-style":"none","scrollbar-width":"none"},".no-scrollbar::-webkit-scrollbar":{display:"none"}})}]}}},function(e){e.O(0,[6273,2971,7023,1744],function(){return e(e.s=15164)}),_N_E=e.O()}]);