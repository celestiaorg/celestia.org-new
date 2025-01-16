"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2693],{87276:function(e,t,r){var l=r(57437),n=r(2265),a=r(81419);r(76822);var s=r(43946),c=r(58092);let o=e=>{let{children:t,id:r,toggleAccordion:i,isOpen:d}=e,u=null,x=null;return n.Children.forEach(t,e=>{switch(e.type){case o.Header:u=e;break;case o.Body:x=e}}),(0,l.jsxs)("div",{className:"border-b border-black px-4 ".concat(d?"pt-6 pb-4":"py-6"),id:"accordion-".concat(r),children:[(0,l.jsxs)("button",{"aria-expanded":d,"aria-controls":"accordion-".concat(r,"-body"),onClick:i,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&i()},className:"flex gap-3 items-center w-full py-5 group",children:[u,(0,l.jsx)(s.default,{Icon:(0,l.jsx)(c.Z,{}),hover:!0,HoverIcon:(0,l.jsx)(c.Z,{}),className:"flex-grow-0 shrink-0 mr-0 ml-auto",direction:d?"up":"down",size:"md",border:!1})]}),(0,l.jsx)(a.E.div,{id:"accordion-".concat(r,"-body"),role:"region","aria-labelledby":"accordion-header",initial:!1,animate:{height:d?"auto":0,opacity:d?1:0},transition:{height:{duration:.3},opacity:{duration:.2}},style:{overflow:"hidden"},className:"",children:(0,l.jsx)(a.E.div,{initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.3},children:x})})]})};o.Header=e=>{let{children:t}=e;return(0,l.jsx)(l.Fragment,{children:t})},o.Body=e=>{let{children:t,className:r="pt-4 pr-16"}=e;return(0,l.jsx)("div",{size:"md",className:r,children:t})},t.Z=o},97743:function(e,t,r){var l=r(57437);t.Z=e=>{let{children:t,size:r="lg",padding:n=!0,className:a="",ref:s,id:c}=e;return(0,l.jsx)("div",{id:c,className:"".concat({noMax:"w-full mx-auto",md:"w-full max-w-[1160px] mx-auto",lg:"w-full max-w-[1265px] mx-auto",xl:"w-full max-w-[1408px] mx-auto"}[r]," ").concat(n?"px-4 md:px-10":""," ").concat(a),ref:s,children:t})}},26694:function(e,t,r){var l=r(57437),n=r(97743);r(77334);var a=r(80472),s=r(76822),c=r(49718);t.default=e=>{let{title:t,buttons:r,ctaIndicator:o,blurbTitle:i,blurbCopy:d}=e,{isBannerVisible:u}=(0,c.S)();return(0,l.jsx)("section",{className:"bg-white-weak relative border-b border-black lg:min-h-[550px]",children:(0,l.jsx)(n.Z,{size:"lg",className:"relative z-10",children:(0,l.jsxs)("div",{className:"".concat(u?"pt-64 lg:pt-72":"pt-36 lg:pt-56"," pb-16 lg:pb-20 lg:flex"),children:[(0,l.jsxs)("div",{className:"lg:w-7/12",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(s.sS,{size:"sm",className:"mb-10",children:t})})}),r&&(0,l.jsxs)("div",{className:"flex mb-5",children:[(0,l.jsx)("div",{className:"w-full md:w-2/3 pr-6",children:r.map((e,t)=>(0,l.jsx)(a.Z,{href:e.url,className:"inline-flex clear-both ".concat(r.length>1?"w-full":""),iconDirection:e.iconDirection,children:e.text},t))}),o?(0,l.jsx)("div",{className:"w-1/3",children:(0,l.jsxs)(s.uT,{size:"sm",className:"text-right lg:text-left",children:["[",o,"]"]})}):(0,l.jsx)("div",{className:"lg:w-2/3"})]})]}),(0,l.jsxs)("div",{className:"lg:w-5/12",children:[(0,l.jsx)(s.X6,{tag:"h2",size:"md",className:"mb-2 lg:mb-6",children:i}),d&&(0,l.jsx)(s.uT,{size:"md",children:d})]})]})})})}},49718:function(e,t,r){r.d(t,{BannerProvider:function(){return s},S:function(){return c}});var l=r(57437),n=r(2265);let a=(0,n.createContext)();function s(e){let{children:t}=e,[r,s]=(0,n.useState)(!0),[c,o]=(0,n.useState)(0),i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!i.current)return;let e=new ResizeObserver(e=>{for(let t of e)o(t.borderBoxSize[0].blockSize)});return e.observe(i.current),()=>e.disconnect()},[]),(0,l.jsx)(a.Provider,{value:{isBannerVisible:r,setIsBannerVisible:s,bannerHeight:c,setBannerHeight:o,bannerRef:i},children:t})}function c(){let e=(0,n.useContext)(a);if(!e)throw Error("useBanner must be used within a BannerProvider");return e}},80472:function(e,t,r){var l=r(57437),n=r(77334),a=r(57559),s=r(43946),c=r(58092);t.Z=e=>{let{onClick:t=null,href:r=null,self:o=null,children:i,className:d,iconDirection:u="down-right"}=e,x=(0,a.Y)(r,t),f={anchor:n.default,button:"button",div:"div"}[x];return(0,l.jsxs)(f,{href:r,onClick:t,self:o,className:"flex justify-between items-center group py-3 px-0 group relative overflow-hidden transition-all duration-200 hover:px-4 text-black no-underline border-t border-black ".concat(d),children:[(0,l.jsx)("div",{className:"z-0 absolute w-0 h-[200%] top-full left-1/2 -translate-x-1/2 block rounded-full transition-all duration-200 group-hover:top-0 group-hover:w-full group-hover:scale-125 bg-black"}),(0,l.jsx)("p",{className:"relative z-10 text-xl leading-[1.2] uppercase tracking-wider grow-1 pr-14 group-hover:text-white transition-colors duration-200",children:i}),(0,l.jsx)(s.default,{Icon:(0,l.jsx)(c.Z,{}),hover:!0,HoverIcon:(0,l.jsx)(c.Z,{}),className:"flex-grow-0 shrink-0",direction:u,border:!1,size:"sm",transparentBg:!0})]})}},76822:function(e,t,r){r.d(t,{uT:function(){return n},sS:function(){return a},X6:function(){return s},__:function(){return c},bN:function(){return o}});var l=r(57437),n=e=>{let{children:t,className:r,tag:n="p",size:a="md"}=e;return(0,l.jsx)(n,{className:"text-pretty ".concat({xs:"text-xs leading-[1.2857]",sm:"text-sm leading-[1.2857]",md:"text-[1.0625rem] leading-[1.647]",lg:"text-[1.0625rem] leading-[2rem] lg:text-2xl lg:leading-[2rem]"}[a]," ").concat(r),children:t})},a=e=>{let{children:t,className:r,tag:n="h1",size:a="lg"}=e;return(0,l.jsx)(n,{className:"text-pretty font-youth ".concat({xs:"text-sm leading-[1.714]",sm:"text-[2.3125rem] leading-[1.2] lg:text-6xl leading-[1.066666666666667]",md:"text-[3.125rem] leading-[1.1] tracking-normal lg:text-7xl lg:leading-[1.1111]",lg:"text-[4rem] leading-[1] tracking-normal lg:text-[5.125rem] lg:leading-[1]",xl:"text-[5.125rem] leading-[1.073171] tracking-normal lg:text-5.5rem] lg:leading-[1.0909091]"}[a]," ").concat(r),children:t})},s=e=>{let{children:t,className:r,tag:n="h1",size:a="lg",...s}=e;return(0,l.jsx)(n,{...s,className:"font-youth ".concat({xs:"",sm:"text-xl leading-[1.4] lg:text-2xl lg:leading-[1.333333333333333]",md:"text-[1.75rem] leading-[1.2] lg:text-[2rem] lg:leading-tight",lg:"text-4xl leading-[1.2] lg:text-[2.5rem] lg:leading-tight"}[a]," ").concat(r),children:t})},c=e=>{let{children:t,className:r,tag:n="p",size:a="md"}=e;return(0,l.jsx)(n,{className:"uppercase ".concat({xs:"",sm:"",md:"",lg:"text-xl leading-[1.2]"}[a]," ").concat(r),children:t})},o=e=>{let{children:t,mobileFontSize:r="lg",className:n,tag:a="h1"}=e;return(0,l.jsx)(a,{className:"".concat("lg"==r?"text-scaled-mobile-50":"text-scaled-mobile-40"," leading-[1.1] lg:text-scaled-desktop-82 ").concat(n),children:t})}},43946:function(e,t,r){r.d(t,{default:function(){return s}});var l=r(57437);let n=e=>{switch(e){case"top":case"up":default:return"rotate-0";case"top-right":case"up-right":case"right-up":return"rotate-45";case"right":return"rotate-90";case"bottom-right":case"down-right":case"right-down":return"rotate-[135deg]";case"bottom":case"down":return"rotate-180";case"bottom-left":case"down-left":case"left-down":return"-rotate-[135deg]";case"left":return"-rotate-90";case"top-left":case"up-left":case"left-up":return"-rotate-45"}};var a=r(58092),s=e=>{let{Icon:t=(0,l.jsx)(a.Z,{}),direction:r="up",hover:s=!1,HoverIcon:c=(0,l.jsx)(a.Z,{}),hoverDirection:o="up",className:i,size:d="md",border:u=!0,dark:x=!1,transparentBg:f=!1}=e;return(0,l.jsx)("div",{className:"\n        ".concat(s?"group":""," transition-colors duration-200 relative overflow-hidden rounded-full \n        ").concat({xs:"h-4 w-4",sm:"h-6 w-6",40:"h-10 w-10",md:"h-12 w-12",lg:"h-16 w-16"}[d],"\n        ").concat(u?"border ".concat(x?"border-white ".concat(s?"group-hover:border-white":""):"border-black ".concat(s?"group-hover:border-white":"")):"","\n        ").concat(f?"bg-transparent":x?"bg-black ".concat(s?"group-hover:bg-white":""):"bg-white ".concat(s?"group-hover:bg-black":""),"\n        ").concat(i,"\n        "),children:(0,l.jsx)("div",{className:"absolute top-0 left-0 h-full w-full transition-transform \n            ".concat(n(r)),children:(0,l.jsxs)("div",{className:"absolute top-0 left-0 h-full w-full transition-all duration-300\n            ".concat(s?"group-hover:-top-full":""),children:[(0,l.jsx)("div",{className:"top-0 left-0 absolute h-full w-full flex justify-center items-center",children:t}),s&&(0,l.jsx)("div",{className:"top-full left-0 absolute h-full w-full flex justify-center items-center transition-transform \n                ".concat(n(o)),children:c})]})})})}},77334:function(e,t,r){r.r(t);var l=r(57437),n=r(87138),a=r(32687);t.default=e=>{let{children:t,href:r,self:s=null,...c}=e,o=(0,a.F)(r);return(0,l.jsx)(n.default,{href:r,target:s||o?"_self":"_blank",prefetch:o,scroll:!0,...c,children:t})}},58092:function(e,t,r){var l=r(57437),n=r(40830);t.Z=e=>{let{dark:t=!1,className:r=""}=e,a=(0,n.Z)(),s=t?a.white.DEFAULT:a.black.DEFAULT;return(0,l.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.4893 3.10496L4.29687 9.46964L4.95957 10.2185L11.3208 4.58936L11.3208 21.2959L12.3208 21.2959L12.3208 4.58766L18.6848 10.2039L19.3465 9.45408L12.1515 3.10451C11.9623 2.93752 11.6783 2.93772 11.4893 3.10496Z",fill:s,className:"group-hover:fill-[".concat(t?a.black.DEFAULT:a.white.DEFAULT,"] transition duration-300 ").concat(r)})})}},57559:function(e,t,r){r.d(t,{Y:function(){return l}});let l=(e,t)=>e?"anchor":t?"button":"div"},32687:function(e,t,r){r.d(t,{F:function(){return l}});function l(e){return!!e&&(e.startsWith("/")||!e.startsWith("http"))}},40830:function(e,t,r){r.d(t,{Z:function(){return i}});var l=r(2265),n=r(5481),a=r.n(n),s=r(7722),c=r.n(s);let o={hero:{md:"70vh",lg:"90vh"}};function i(){return(0,l.useMemo)(()=>({...a()(c()).theme.colors,viewportHeights:o}),[])}},7722:function(e,t,r){let l;let n=e=>e/1440*100+"vw",a=e=>e/390*100+"vw";e.exports={content:["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/macros/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}","./src/utils/**/*.{js,ts,jsx,tsx,mdx}"],safelist:["group-hover:fill-[#ffffff], group-hover:fill-[#17141A], line-clamp-1, line-clamp-2, line-clamp-3, line-clamp-4, line-clamp-5, line-clamp-6, line-clamp-7, line-clamp-8, line-clamp-9, line-clamp-10"],theme:{extend:{backgroundImage:{"gradient-radial":"radial-gradient(var(--tw-gradient-stops))","gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"},colors:{black:{DEFAULT:"#17141A",subtle:"#453D51",pure:"#000000"},white:{DEFAULT:"#ffffff",weak:"#F6F6F6",pure:"#ffffff"},purple:{DEFAULT:"#7b2bf9",weak:"#995DF9",dark:"#38167F"},red:{DEFAULT:"#EC5643",error:{DEFAULT:"#ff4949",subtle:"#FFC7C7"}},weak:{DEFAULT:"#D9D9DB"},subtle:{DEFAULT:"#5D5C62"},green:{DEFAULT:"#42D885"}},fontFamily:{untitledSans:['"UntitledSans"',"sans-serif"],youth:['"Youth"',"sans-serif"]},fontSize:(l={},[82,50,40,32,24,20,18,16,14,12,10,8].forEach(e=>{l["scaled-desktop-".concat(e)]=n(e),l["scaled-mobile-".concat(e)]=a(e)}),l),backgroundImage:{"explore-card-gradient":"linear-gradient(161.19deg, #4E4D51 17.03%, #29242A 100.02%)"},width:{"1/10":"10%","2/10":"20%","3/10":"30%","4/10":"40%","5/10":"50%","6/10":"60%","7/10":"70%","8/10":"80%","9/10":"90%"}}},plugins:[r(56243),function(e){let{addUtilities:t}=e;t({".no-scrollbar":{"-ms-overflow-style":"none","scrollbar-width":"none"},".no-scrollbar::-webkit-scrollbar":{display:"none"}})}]}}}]);