"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7039],{97743:function(e,t,l){var r=l(57437);t.Z=e=>{let{children:t,size:l="lg",padding:n=!0,className:a="",ref:s,id:c}=e;return(0,r.jsx)("div",{id:c,className:"".concat({noMax:"w-full mx-auto",md:"w-full max-w-[1160px] mx-auto",lg:"w-full max-w-[1265px] mx-auto",xl:"w-full max-w-[1408px] mx-auto"}[l]," ").concat(n?"px-4 md:px-10":""," ").concat(a),ref:s,children:t})}},67039:function(e,t,l){var r=l(57437),n=l(97743),a=l(77334),s=l(80472),c=l(76822),o=l(43946),i=l(58092),d=l(2265);t.default=e=>{let{title:t,subtitle:l,buttons:a,tableOfContents:o,videos:i}=e,m=(0,d.useRef)(null);return(0,d.useEffect)(()=>{m.current&&m.current.play().catch(e=>{console.error("Video failed to play:",e)})},[]),(0,r.jsxs)("section",{className:"bg-white-weak relative md:min-h-[70vh] lg:min-h-[90vh] flex flex-col-reverse md:block border-b border-black",children:[i&&(0,r.jsxs)("video",{ref:m,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:h-full w-full md:object-cover md:z-0",children:[(0,r.jsx)("source",{src:i.src.xl,type:"video/mp4",media:"(min-width: 1024px)"}),(0,r.jsx)("source",{src:i.src.lg,type:"video/mp4",media:"(min-width: 768px)"}),(0,r.jsx)("source",{src:i.src.sm,type:"video/mp4",media:"(max-width: 767px)"}),i.poster.lg&&(0,r.jsx)("img",{src:i.poster.lg,alt:"",media:"(min-width: 768px)"}),i.poster.sm&&(0,r.jsx)("img",{src:i.poster.sm,alt:"",media:"(max-width: 767px)"})]}),(0,r.jsx)(n.Z,{size:"lg",className:"relative z-10",children:(0,r.jsx)("div",{className:"pt-36 lg:pt-56 lg:pb-20 flex flex-col lg:w-3/4 xl:w-2/3",children:(0,r.jsx)("div",{className:"row flex",children:(0,r.jsxs)("div",{className:"w-3/4 lg:w-1/2",children:[(0,r.jsx)(c.sS,{size:"md",className:"".concat(l?"mb-3":"mb-10"),children:t}),l&&(0,r.jsx)(c.uT,{size:"md",className:"mb-10",children:l}),(null==a?void 0:a.length)>0&&a.map((e,t)=>(0,r.jsx)(s.Z,{href:e.url,className:"inline-flex clear-both w-full",iconDirection:e.iconDirection||"down-right",children:e.text},t)),o&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full md:mb-10",children:[(0,r.jsx)(c.__,{tag:"h2",size:"lg",className:"mb-6",children:"Table of Contents"}),(0,r.jsx)("div",{children:Object.entries(o).map((e,t)=>{let[l,n]=e;return(0,r.jsx)(u,{href:n,children:l},t)})})]})})]})})})})]})};let u=e=>{let{children:t,href:l}=e;return(0,r.jsxs)(a.default,{href:l,className:"flex items-center group mb-2",children:[(0,r.jsx)(c.uT,{className:"mr-1",size:"md",children:t}),(0,r.jsx)(o.default,{border:!1,transparentBg:!0,size:"xs",Icon:(0,r.jsx)("div",{className:"block h-4 w-4"}),hover:!0,HoverIcon:(0,r.jsx)(i.Z,{dark:!0}),direction:"down-right"})]})}},80472:function(e,t,l){var r=l(57437),n=l(77334),a=l(57559),s=l(43946),c=l(58092);t.Z=e=>{let{onClick:t=null,href:l=null,self:o=null,children:i,className:d,iconDirection:u="down-right"}=e,m=(0,a.Y)(l,t),x={anchor:n.default,button:"button",div:"div"}[m];return(0,r.jsxs)(x,{href:l,onClick:t,self:o,className:"flex justify-between items-center group py-3 px-0 group relative overflow-hidden transition-all duration-200 hover:px-4 text-black no-underline border-t border-black ".concat(d),children:[(0,r.jsx)("div",{className:"z-0 absolute w-0 h-[200%] top-full left-1/2 -translate-x-1/2 block rounded-full transition-all duration-200 group-hover:top-0 group-hover:w-full group-hover:scale-125 bg-black"}),(0,r.jsx)("p",{className:"relative z-10 text-xl leading-[1.2] uppercase tracking-wider grow-1 pr-14 group-hover:text-white transition-colors duration-200",children:i}),(0,r.jsx)(s.default,{Icon:(0,r.jsx)(c.Z,{}),hover:!0,HoverIcon:(0,r.jsx)(c.Z,{}),className:"flex-grow-0 shrink-0",direction:u,border:!1,size:"sm",transparentBg:!0})]})}},76822:function(e,t,l){l.d(t,{uT:function(){return n},sS:function(){return a},X6:function(){return s},__:function(){return c},bN:function(){return o}});var r=l(57437),n=e=>{let{children:t,className:l,tag:n="p",size:a="md"}=e;return(0,r.jsx)(n,{className:"text-pretty ".concat({xs:"text-xs leading-[1.2857]",sm:"text-sm leading-[1.2857]",md:"text-[1.0625rem] leading-[1.647]",lg:"text-[1.0625rem] leading-[2rem] lg:text-2xl lg:leading-[2rem]"}[a]," ").concat(l),children:t})},a=e=>{let{children:t,className:l,tag:n="h1",size:a="lg"}=e;return(0,r.jsx)(n,{className:"text-pretty font-youth ".concat({xs:"text-sm leading-[1.714]",sm:"text-[2.3125rem] leading-[1.2] lg:text-6xl leading-[1.066666666666667]",md:"text-[3.125rem] leading-[1.1] tracking-normal lg:text-7xl lg:leading-[1.1111]",lg:"text-[4rem] leading-[1] tracking-normal lg:text-[5.125rem] lg:leading-[1]",xl:"text-[5.125rem] leading-[1.073171] tracking-normal lg:text-5.5rem] lg:leading-[1.0909091]"}[a]," ").concat(l),children:t})},s=e=>{let{children:t,className:l,tag:n="h1",size:a="lg",...s}=e;return(0,r.jsx)(n,{...s,className:"font-youth ".concat({xs:"",sm:"text-xl leading-[1.4] lg:text-2xl lg:leading-[1.333333333333333]",md:"text-[1.75rem] leading-[1.2] lg:text-[2rem] lg:leading-tight",lg:"text-4xl leading-[1.2] lg:text-[2.5rem] lg:leading-tight"}[a]," ").concat(l),children:t})},c=e=>{let{children:t,className:l,tag:n="p",size:a="md"}=e;return(0,r.jsx)(n,{className:"uppercase ".concat({xs:"",sm:"",md:"",lg:"text-xl leading-[1.2]"}[a]," ").concat(l),children:t})},o=e=>{let{children:t,mobileFontSize:l="lg",className:n,tag:a="h1"}=e;return(0,r.jsx)(a,{className:"".concat("lg"==l?"text-scaled-mobile-50":"text-scaled-mobile-40"," leading-[1.1] lg:text-scaled-desktop-82 ").concat(n),children:t})}},43946:function(e,t,l){l.r(t),l.d(t,{default:function(){return s}});var r=l(57437);let n=e=>{switch(e){case"top":case"up":default:return"rotate-0";case"top-right":case"up-right":case"right-up":return"rotate-45";case"right":return"rotate-90";case"bottom-right":case"down-right":case"right-down":return"rotate-[135deg]";case"bottom":case"down":return"rotate-180";case"bottom-left":case"down-left":case"left-down":return"-rotate-[135deg]";case"left":return"-rotate-90";case"top-left":case"up-left":case"left-up":return"-rotate-45"}};var a=l(58092),s=e=>{let{Icon:t=(0,r.jsx)(a.Z,{}),direction:l="up",hover:s=!1,HoverIcon:c=(0,r.jsx)(a.Z,{}),hoverDirection:o="up",className:i,size:d="md",border:u=!0,dark:m=!1,transparentBg:x=!1}=e;return(0,r.jsx)("div",{className:"\n        ".concat(s?"group":""," transition-colors duration-200 relative overflow-hidden rounded-full \n        ").concat({xs:"h-4 w-4",sm:"h-6 w-6",40:"h-10 w-10",md:"h-12 w-12",lg:"h-16 w-16"}[d],"\n        ").concat(u?"border ".concat(m?"border-white ".concat(s?"group-hover:border-black":""):"border-black ".concat(s?"group-hover:border-white":"")):"","\n        ").concat(x?"bg-transparent":m?"bg-black ".concat(s?"group-hover:bg-white":""):"bg-white ".concat(s?"group-hover:bg-black":""),"\n        ").concat(i,"\n        "),children:(0,r.jsx)("div",{className:"absolute top-0 left-0 h-full w-full transition-transform \n            ".concat(n(l)),children:(0,r.jsxs)("div",{className:"absolute top-0 left-0 h-full w-full transition-all duration-300\n            ".concat(s?"group-hover:-top-full":""),children:[(0,r.jsx)("div",{className:"top-0 left-0 absolute h-full w-full flex justify-center items-center",children:t}),s&&(0,r.jsx)("div",{className:"top-full left-0 absolute h-full w-full flex justify-center items-center transition-transform \n                ".concat(n(o)),children:c})]})})})}},77334:function(e,t,l){l.r(t);var r=l(57437),n=l(87138),a=l(32687);t.default=e=>{let{children:t,href:l,self:s=null,...c}=e,o=(0,a.F)(l);return(0,r.jsx)(n.default,{href:l,target:s||o?"_self":"_blank",prefetch:o,scroll:!0,...c,children:t})}},58092:function(e,t,l){var r=l(57437),n=l(40830);t.Z=e=>{let{dark:t=!1,className:l=""}=e,a=(0,n.Z)(),s=t?a.white.DEFAULT:a.black.DEFAULT;return(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.4893 3.10496L4.29687 9.46964L4.95957 10.2185L11.3208 4.58936L11.3208 21.2959L12.3208 21.2959L12.3208 4.58766L18.6848 10.2039L19.3465 9.45408L12.1515 3.10451C11.9623 2.93752 11.6783 2.93772 11.4893 3.10496Z",fill:s,className:"group-hover:fill-[".concat(t?a.black.DEFAULT:a.white.DEFAULT,"] transition duration-300 ").concat(l)})})}},57559:function(e,t,l){l.d(t,{Y:function(){return r}});let r=(e,t)=>e?"anchor":t?"button":"div"},32687:function(e,t,l){l.d(t,{F:function(){return r}});function r(e){return!!e&&(e.startsWith("/")||!e.startsWith("http"))}},40830:function(e,t,l){l.d(t,{Z:function(){return o}});var r=l(2265),n=l(5481),a=l.n(n),s=l(7722),c=l.n(s);function o(){return(0,r.useMemo)(()=>a()(c()),[]).theme.colors}},7722:function(e,t,l){let r;let n=e=>e/1440*100+"vw",a=e=>e/390*100+"vw";e.exports={content:["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/macros/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}","./src/utils/**/*.{js,ts,jsx,tsx,mdx}"],safelist:["group-hover:fill-[#ffffff], group-hover:fill-[#17141A], line-clamp-1, line-clamp-2, line-clamp-3, line-clamp-4, line-clamp-5, line-clamp-6, line-clamp-7, line-clamp-8, line-clamp-9, line-clamp-10"],theme:{extend:{backgroundImage:{"gradient-radial":"radial-gradient(var(--tw-gradient-stops))","gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"},colors:{black:{DEFAULT:"#17141A",subtle:"#453D51",pure:"#000000"},white:{DEFAULT:"#ffffff",weak:"#F6F6F6",pure:"#ffffff"},purple:{DEFAULT:"#7b2bf9",weak:"#995DF9",dark:"#38167F"},red:{DEFAULT:"#EC5643",error:{DEFAULT:"#ff4949",subtle:"#FFC7C7"}},weak:{DEFAULT:"#D9D9DB"},subtle:{DEFAULT:"#5D5C62"},green:{DEFAULT:"#42D885"}},fontFamily:{untitledSans:['"UntitledSans"',"sans-serif"],youth:['"Youth"',"sans-serif"]},fontSize:(r={},[82,50,40,32,24,20,18,16,14,12,10,8].forEach(e=>{r["scaled-desktop-".concat(e)]=n(e),r["scaled-mobile-".concat(e)]=a(e)}),r),backgroundImage:{"explore-card-gradient":"linear-gradient(161.19deg, #4E4D51 17.03%, #29242A 100.02%)"},width:{"1/10":"10%","2/10":"20%","3/10":"30%","4/10":"40%","5/10":"50%","6/10":"60%","7/10":"70%","8/10":"80%","9/10":"90%"}}},plugins:[l(56243),function(e){let{addUtilities:t}=e;t({".no-scrollbar":{"-ms-overflow-style":"none","scrollbar-width":"none"},".no-scrollbar::-webkit-scrollbar":{display:"none"}})}]}}}]);