(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7954],{16463:function(e,t,o){"use strict";var l=o(71169);o.o(l,"usePathname")&&o.d(t,{usePathname:function(){return l.usePathname}}),o.o(l,"useRouter")&&o.d(t,{useRouter:function(){return l.useRouter}})},49344:function(e,t,o){"use strict";var l=o(57437),r=o(48059),a=o.n(r);t.Z=()=>{let e=e=>({top:"".concat(100*Math.random(),"%"),left:"".concat(100*Math.random(),"%"),transform:"translate(-50%, -50%)",animation:"moveAround-".concat(e," ").concat(12*Math.random()+6,"s linear infinite")});return(0,l.jsxs)("div",{style:{animationDuration:"30s"},className:"jsx-6ca43fa0f94deb87 absolute top-0 left-0 h-full w-full block animate-spin z-0",children:[(0,l.jsx)("div",{style:{boxShadow:"0 0 50px 50px #995df9"},className:"jsx-6ca43fa0f94deb87 bg-purple-weak h-[200%] w-[200%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}),["#d4b2ab","#00b4ff","rgba(158, 86, 241, 0.91)","rgba(174, 63, 215, 0.6)"].map((t,o)=>(0,l.jsx)("div",{style:{boxShadow:"0 0 50px 50px ".concat(t),background:t,...e(o)},className:"jsx-6ca43fa0f94deb87 gradient opacity-80"},o)),(0,l.jsx)(a(),{id:"6ca43fa0f94deb87",children:".gradient.jsx-6ca43fa0f94deb87{position:absolute;width:100%;height:80%;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}@-webkit-keyframes moveAround-0{0%{top:0%;left:0%}25%{top:25%;left:75%}50%{top:50%;left:50%}75%{top:75%;left:25%}100%{top:100%;left:100%}}@-moz-keyframes moveAround-0{0%{top:0%;left:0%}25%{top:25%;left:75%}50%{top:50%;left:50%}75%{top:75%;left:25%}100%{top:100%;left:100%}}@-o-keyframes moveAround-0{0%{top:0%;left:0%}25%{top:25%;left:75%}50%{top:50%;left:50%}75%{top:75%;left:25%}100%{top:100%;left:100%}}@keyframes moveAround-0{0%{top:0%;left:0%}25%{top:25%;left:75%}50%{top:50%;left:50%}75%{top:75%;left:25%}100%{top:100%;left:100%}}@-webkit-keyframes moveAround-1{0%{top:0%;left:0%}35%{top:25%;left:75%}50%{top:50%;left:50%}65%{top:75%;left:25%}100%{top:0%;left:0%}}@-moz-keyframes moveAround-1{0%{top:0%;left:0%}35%{top:25%;left:75%}50%{top:50%;left:50%}65%{top:75%;left:25%}100%{top:0%;left:0%}}@-o-keyframes moveAround-1{0%{top:0%;left:0%}35%{top:25%;left:75%}50%{top:50%;left:50%}65%{top:75%;left:25%}100%{top:0%;left:0%}}@keyframes moveAround-1{0%{top:0%;left:0%}35%{top:25%;left:75%}50%{top:50%;left:50%}65%{top:75%;left:25%}100%{top:0%;left:0%}}@-webkit-keyframes moveAround-2{0%{top:50%;left:50%}20%{top:75%;left:25%}40%{top:100%;left:50%}70%{top:25%;left:75%}100%{top:50%;left:50%}}@-moz-keyframes moveAround-2{0%{top:50%;left:50%}20%{top:75%;left:25%}40%{top:100%;left:50%}70%{top:25%;left:75%}100%{top:50%;left:50%}}@-o-keyframes moveAround-2{0%{top:50%;left:50%}20%{top:75%;left:25%}40%{top:100%;left:50%}70%{top:25%;left:75%}100%{top:50%;left:50%}}@keyframes moveAround-2{0%{top:50%;left:50%}20%{top:75%;left:25%}40%{top:100%;left:50%}70%{top:25%;left:75%}100%{top:50%;left:50%}}@-webkit-keyframes moveAround-3{0%{top:100%;left:100%}25%{top:50%;left:80%}60%{top:25%;left:75%}85%{top:0%;left:100%}100%{top:100%;left:100%}}@-moz-keyframes moveAround-3{0%{top:100%;left:100%}25%{top:50%;left:80%}60%{top:25%;left:75%}85%{top:0%;left:100%}100%{top:100%;left:100%}}@-o-keyframes moveAround-3{0%{top:100%;left:100%}25%{top:50%;left:80%}60%{top:25%;left:75%}85%{top:0%;left:100%}100%{top:100%;left:100%}}@keyframes moveAround-3{0%{top:100%;left:100%}25%{top:50%;left:80%}60%{top:25%;left:75%}85%{top:0%;left:100%}100%{top:100%;left:100%}}"})]})}},69614:function(e,t,o){"use strict";var l=o(57437),r=o(76822),a=o(77334),n=o(43946),s=o(58092),i=o(2265),c=o(49344),f=o(95127),d=o(81419);t.default=e=>{let{title:t,titleClamp:o=null,description:p,descriptionClamp:u=null,url:m,dark:h=!1,verticalTitle:x}=e,[b,v]=(0,i.useState)(0),g=(0,i.useRef)(null),[y,j]=(0,i.useState)(!1);(0,i.useEffect)(()=>{g.current&&v(g.current.clientWidth+48)},[g]);let k=m?a.default:"div";return(0,l.jsxs)(k,{href:m,className:"flex min-w-[85%] md:min-w-0 md:w-full rounded-xl  border transition-colors duration-300 delay-0 relative overflow-hidden  ".concat(h?"bg-black text-white border-white":"bg-white text-black border-black","\n      ").concat(m?"group md:hover:border-black md:hover:text-black":"","\n      "),style:{minHeight:b},onMouseEnter:()=>{m&&j(!0)},onMouseLeave:()=>{m&&j(!1)},onFocus:()=>{m&&j(!0)},onBlur:()=>{m&&j(!1)},children:[(0,l.jsx)(f.M,{children:y&&(0,l.jsx)(d.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black opacity-0 md:group-hover:opacity-100 transition-opacity duration-500",children:(0,l.jsx)(c.Z,{})})}),(0,l.jsx)("div",{className:"w-[60px] relative border-r grow-0 shrink-0 flex items-end align-middle transition-all duration-300 md:group-hover:border-black z-10 ".concat(h?"border-white group-hover:border-black":"border-black group-hover:border-black"),children:(0,l.jsx)("div",{ref:g,children:(0,l.jsx)(r.X6,{tag:"h3",size:"sm",className:"block whitespace-nowrap -rotate-90 origin-top-left ml-2.5 -mb-2.5 transition-none md:group-hover:text-black delay-0",children:x})})}),(0,l.jsxs)("div",{className:"py-6 px-10 flex flex-col w-full z-10",children:[m&&(0,l.jsx)(n.default,{Icon:(0,l.jsx)(s.Z,{dark:!0}),hover:!0,dark:!0,HoverIcon:(0,l.jsx)(s.Z,{dark:!1}),className:"flex-grow-0 self-end -mr-4 mb-28 md:group-hover:!bg-black",direction:"top-right",border:!0,size:"lg"}),(0,l.jsxs)("div",{className:"mt-auto mb-0 self-end",children:[t&&(0,l.jsx)(r.X6,{size:"sm",tag:"h4",className:"text-pretty mb-3 ".concat(o?"line-clamp-".concat(o):""),children:t}),p&&(0,l.jsx)(r.uT,{size:"md",className:"text-pretty ".concat(u?"line-clamp-".concat(u):""),children:p})]})]})]})}},99900:function(e,t,o){"use strict";o.d(t,{default:function(){return m}});var l=o(57437),r=o(2265),a=o(77451);let n={some:0,all:1};function s(e,{root:t,margin:o,amount:l,once:s=!1}={}){let[i,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||s&&i)return;let r={root:t&&t.current||void 0,margin:o,amount:l};return function(e,t,{root:o,margin:l,amount:r="some"}={}){let s=(0,a.I)(e),i=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let o=i.get(e.target);if(!!o!==e.isIntersecting){if(e.isIntersecting){let o=t(e);"function"==typeof o?i.set(e.target,o):c.unobserve(e.target)}else o&&(o(e),i.delete(e.target))}})},{root:o,rootMargin:l,threshold:"number"==typeof r?r:n[r]});return s.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(c(!0),s?void 0:()=>c(!1)),r)},[t,e,o,s,l]),i}var i=o(95127),c=e=>{let{children:t,setActiveSection:o,index:a}=e,n=(0,r.useRef)(null),i=s(n,{margin:"-50% 0px -50% 0px"});return(0,r.useEffect)(()=>{o&&i&&o(a)},[i,o]),(0,l.jsx)("div",{ref:n,className:"sticky",children:t})},f=o(81419),d=o(43946),p=o(58092),u=e=>{let{activeSection:t,sectionDetails:o}=e;return(0,l.jsxs)(f.E.div,{className:"fixed top-1/2 -translate-y-1/2 right-10 flex flex-col gap-1.5 z-0",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0,y:-30},transition:{duration:.3},children:[(0,l.jsx)("a",{className:"group ".concat(Object.entries(o)[t-1]?null:"opacity-50 pointer-events-none"),href:Object.entries(o)[t-1]?Object.entries(o)[t-1][1]:null,disabled:0===t,children:(0,l.jsx)(d.default,{Icon:(0,l.jsx)(p.Z,{}),hover:!0,HoverIcon:(0,l.jsx)(p.Z,{}),className:"flex-grow-0",direction:"up",border:!0,size:"md"})}),(0,l.jsx)("a",{className:"group ".concat(Object.entries(o)[t+1]?null:"opacity-50 pointer-events-none"),href:Object.entries(o)[t+1]?Object.entries(o)[t+1][1]:null,disabled:0===t,children:(0,l.jsx)(d.default,{Icon:(0,l.jsx)(p.Z,{}),hover:!0,HoverIcon:(0,l.jsx)(p.Z,{}),className:"flex-grow-0",direction:"down",border:!0,size:"md"})})]})},m=e=>{let{children:t,sectionDetails:o}=e,a=(0,r.useRef)(null),n=s(a,{margin:"-50% 0px -75% 0px"}),[f,d]=(0,r.useState)(0);return(0,l.jsxs)("div",{ref:a,className:"block overflow-visible",children:[r.Children.map(t,(e,t)=>(0,l.jsx)(c,{setActiveSection:d,index:t,children:e},t)),o&&(0,l.jsx)(i.M,{children:n&&(0,l.jsx)(u,{sectionDetails:o,activeSection:f})})]})}},50481:function(e,t,o){"use strict";o.d(t,{default:function(){return p}});var l=o(57437),r=o(16463),a=o(2265),n=o(97743),s=o(43946),i=o(29392),c=o(95127),f=o(81419),d=e=>{let{copy:t,hover:o=!0}=e,[r,n]=(0,a.useState)(!1);return(0,l.jsxs)("div",{className:"relative inline-block",children:[(0,l.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(t).then(()=>{n(!0),setTimeout(()=>{n(!1)},1500)})},className:"group mb-2.5 active:scale-[0.8] transition-transform",children:(0,l.jsx)(s.default,{Icon:(0,l.jsx)(i.Z,{}),dark:!1,hover:o,border:!0,HoverIcon:(0,l.jsx)(i.Z,{dark:!0}),size:"sm"})}),(0,l.jsx)(c.M,{children:r&&(0,l.jsx)(f.E.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2},className:"absolute bottom-full left-1/2 transform mb-1 bg-black-subtle text-white text-xs px-2 py-1 rounded opacity-90",children:"Copied"})})]})},p=e=>{let{index:t,children:o,id:s,canCopyLink:i=!1,...c}=e,f=(0,r.usePathname)(),[p,u]=(0,a.useState)("");return(0,a.useEffect)(()=>{if(i){let e=window.location.origin;u("".concat(e).concat(f,"#").concat(s))}},[f,s]),(0,l.jsx)("section",{id:s,className:"bg-white ".concat(t>0?"border-t border-black":null),...c,children:(0,l.jsxs)(n.Z,{size:"lg",className:"py-12 lg:py-20 ".concat(i?"group":""),children:[i&&(0,l.jsx)("div",{className:"lg:opacity-0 group-hover:opacity-100 transition-opacity",children:(0,l.jsx)(d,{copy:p,hover:!1})}),o]})})}},66555:function(e,t,o){"use strict";var l=o(57437),r=o(2265),a=o(61871),n=o(45282),s=o(80847),i=o(81419),c=o(76822);o(47117);let f=e=>{let{children:t,lightMode:o=!1,id:a}=e,n=null,s=null;return r.Children.forEach(t,e=>{switch(e.type){case f.Desktop:n=e;break;case f.Mobile:s=e}}),(0,l.jsxs)("section",{id:a,className:"py-20 px-4 lg:pt-36 ".concat(o?"lg:pb-16":"lg:pb-36"," overflow-hidden ").concat(o?"bg-white text-black":"bg-black text-white"),children:[s,n]})},d=e=>{let{children:t,index:o}=e,c=(0,r.useRef)(null),{scrollYProgress:f}=(0,a.v)({target:c,offset:["start ".concat(.075*o+.85),"start ".concat(.075*o+.4)]}),[d,p]=(0,r.useState)(0);(0,r.useEffect)(()=>{p(window.innerWidth);let e=()=>{p(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let u=(0,n.c)(0),m=(0,s.H)(f,[0,.5,1],[20,5,0]);(0,r.useEffect)(()=>{let e=m.onChange(e=>{u.set("blur(".concat(e,"px)"))});return()=>e()},[m,u]);let h=(0,s.H)(f,[0,1],[d,0]),x=(0,s.H)(f,[0,1],[-1*d,0]),b=(0,s.H)(f,[0,1],[0,1]);return(0,l.jsx)(i.E.span,{ref:c,className:"block relative",style:{x:o%2==0?h:x,opacity:b,filter:u},children:t})};f.Mobile=e=>{let t,{children:o,gradientText:r=!1,gradientType:a="primary"}=e,n=(t="lg",o.forEach(e=>{e.props.children.split(" ").forEach(e=>{e.length>15&&(t="sm")})}),t);return(0,l.jsx)("div",{className:"w-full block md:hidden",children:o.map((e,t)=>(0,l.jsx)(d,{index:t,children:(0,l.jsx)(c.bN,{mobileFontSize:n,className:"text-center font-youth ".concat(r?"gradient-text-".concat(a):""),children:e},t)},t))})},f.Desktop=e=>{let{children:t,gradientText:o=!1,gradientType:r="primary"}=e;return(0,l.jsx)("div",{className:"w-full hidden md:block",children:t.map((e,t)=>(0,l.jsx)(d,{index:t,children:(0,l.jsx)(c.bN,{className:"text-center font-youth ".concat(o?"gradient-text-".concat(r):""),children:e},t)},t))})},t.Z=f},29392:function(e,t,o){"use strict";var l=o(57437),r=o(40830);t.Z=e=>{let{dark:t=!1,className:o=""}=e,a=(0,r.Z)(),n=t?a.white.DEFAULT:a.black.DEFAULT;return(0,l.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:(0,l.jsx)("path",{d:"M7.07733 10.7179H4.718C3.966 10.7179 3.32511 10.453 2.79533 9.92325C2.26556 9.39347 2.00045 8.75236 2 7.99992C1.99956 7.24747 2.26467 6.60636 2.79533 6.07658C3.326 5.54681 3.96689 5.28169 4.718 5.28125H7.07733V5.94792H4.718C4.15356 5.94792 3.67067 6.14881 3.26933 6.55058C2.86756 6.95281 2.66667 7.43592 2.66667 7.99992C2.66667 8.56392 2.86756 9.04681 3.26933 9.44858C3.67111 9.85036 4.154 10.0512 4.718 10.0512H7.07733V10.7179ZM5.66667 8.33325V7.66658H10.3333V8.33325H5.66667ZM8.92333 10.7179V10.0512H11.282C11.8464 10.0512 12.3293 9.85036 12.7307 9.44858C13.1324 9.04681 13.3333 8.56392 13.3333 7.99992C13.3333 7.43592 13.1324 6.95303 12.7307 6.55125C12.3289 6.14947 11.846 5.94858 11.282 5.94858H8.92333V5.28192H11.282C12.034 5.28192 12.6751 5.54681 13.2053 6.07658C13.7356 6.60636 14.0004 7.24747 14 7.99992C13.9996 8.75236 13.7344 9.39347 13.2047 9.92325C12.6749 10.453 12.034 10.7181 11.282 10.7186L8.92333 10.7179Z",fill:n})})}},47117:function(){}}]);