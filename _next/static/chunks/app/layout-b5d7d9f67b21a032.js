(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{5240:function(e,t,l){Promise.resolve().then(l.t.bind(l,65532,23)),Promise.resolve().then(l.t.bind(l,19801,23)),Promise.resolve().then(l.t.bind(l,81461,23)),Promise.resolve().then(l.bind(l,70526)),Promise.resolve().then(l.bind(l,17857)),Promise.resolve().then(l.bind(l,85237)),Promise.resolve().then(l.bind(l,30700)),Promise.resolve().then(l.bind(l,68300))},70526:function(e,t,l){"use strict";l.d(t,{default:function(){return s}});var r=l(57437),n=l(31877);function s(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{defer:!0,"data-domain":"celestia.org",src:"https://plausible.io/js/script.tagged-events.js",strategy:"afterInteractive"}),(0,r.jsx)(n.default,{id:"plausible-setup",strategy:"afterInteractive",children:"\n          window.plausible = window.plausible || function() { \n            (window.plausible.q = window.plausible.q || []).push(arguments) \n          }\n        "})]})}},97743:function(e,t,l){"use strict";var r=l(57437);t.Z=e=>{let{children:t,size:l="lg",padding:n=!0,className:s="",ref:a,id:i}=e;return(0,r.jsx)("div",{id:i,className:"".concat({noMax:"w-full mx-auto",md:"w-full max-w-[1160px] mx-auto",lg:"w-full max-w-[1265px] mx-auto",xl:"w-full max-w-[1408px] mx-auto"}[l]," ").concat(n?"px-4 md:px-10":""," ").concat(s),ref:a,children:t})}},17857:function(e,t,l){"use strict";l.d(t,{default:function(){return w}});var r=l(57437);l(87374);var n=l(76822),s=()=>[{links:[{title:"Build",url:"/build"},{title:"Docs",url:"https://docs.celestia.org/"},{title:"GitHub",url:"https://github.com/celestiaorg"},{title:"FAQ",url:"/faq"}]},{links:[{title:"Glossary",url:"/glossary"},{title:"Blog",url:"https://blog.celestia.org/"},{title:"Podcast",url:"https://podcast.celestia.org/"}]},{links:[{title:"Brand",url:"https://company-223625.frontify.com/d/JoSwaZS4Mjpj/guidelines?#/basics/logos"},{title:"Press",url:"/press"},{title:"Careers",url:"/careers"},{title:"Follow us",url:"/community"}]}],a=l(97743),i=l(47722),o=l(77334),c=l(43946),d=l(58092),u=l(32687),m=l(2265),f=l(21170),x=l(71907);l(7583);var h=l(50727),p=l(63651),g=e=>{let[t,l]=(0,m.useState)(""),[s,a]=(0,m.useState)({"group[57543]":"1"}),[i,o]=(0,m.useState)(!1),[c,d]=(0,m.useState)(null),[u,g]=(0,m.useState)(""),[w,b]=(0,m.useState)(""),v="6LdU-q0pAAAAABAn4_BmKTn7F9IpLU2y7dAc3HKg",[j,y]=(0,m.useState)(null),N=(0,m.useRef)(null),k=async e=>{try{let{data:l}=await f.Z.post(e,{email:t,...s});g(l.msg),"error"===l.result&&l.msg.includes("is already subscribed")?(d("Success"),g("Thank you for subscribing!")):d("success"===l.result?"Success":"Error"),o(!0)}catch(e){d("Error"),g("An error occurred. Please try again later."),o(!0)}},E=async e=>{if(e.preventDefault(),!j){b("Please complete the reCAPTCHA challenge!");return}a({...s,"group[57543][1]":1}),t&&k("https://celestia.us6.list-manage.com/subscribe/post?u=cde2461ba84f5279fff352829&id=8d165e36d3")};return(0,r.jsx)("div",{className:"modal-content-inner",children:(0,r.jsxs)("form",{onSubmit:E,className:"w-full",children:[(0,r.jsxs)(p.X,{className:"flex gap-4 items-center",children:[(0,r.jsxs)("div",{className:"w-full relative",children:[(0,r.jsx)("label",{htmlFor:"email",className:"px-2 py-3 absolute   text-sm leading-[1.2857] transition-all ".concat(t.length>0?"-top-8 -left-2 text-opacity-100":"top-0 left-0 text-opacity-60"),children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",className:"w-full px-2 py-3 text-sm leading-[1.2857] bg-transparent border-b rounded-none ".concat(w?"border-red-error-subtle":"border-white"),onChange:e=>{l(e.target.value)},required:!0})]}),(0,r.jsx)(h.Z,{lightMode:!0,hover:!0,className:"bg-white grow-0 shrink-0",type:"submit",onClick:E,children:"Subscribe"})]}),v&&(0,r.jsx)(p.X,{className:"mt-3",children:(0,r.jsx)(x.Z,{sitekey:v,ref:N,onChange:e=>{y(e),b("")},asyncScriptOnLoad:()=>{console.log("reCAPTCHA script loaded")}})}),w&&(0,r.jsx)(p.X,{className:"mt-2 px-2",children:(0,r.jsx)(n.uT,{size:"sm",className:"text-red-error",children:w})}),"Error"===c&&(0,r.jsx)(p.X,{className:"mt-2 px-2",children:(0,r.jsx)(n.uT,{size:"sm",className:"text-red-error",children:u})}),"Success"===c&&(0,r.jsx)(p.X,{className:"mt-2 px-2",children:(0,r.jsx)(n.uT,{size:"sm",className:"text-green",children:u})})]})})},w=()=>{let e=s(),t=new Date().getFullYear();return(0,r.jsxs)("footer",{id:"footer",className:"bg-black w-full rounded-tl-3xl rounded-tr-3xl py-5 text-white z-30 relative",children:[(0,r.jsx)("div",{className:"px-4",children:(0,r.jsx)("div",{className:"h-[225px] md:h-[400px] block w-full rounded-2xl bg-white overflow-hidden z-0 relative",children:(0,r.jsx)(i.default,{src:"/videos/footer.mp4"})})}),(0,r.jsx)("div",{className:"px-4 mb-8",children:(0,r.jsx)(a.Z,{size:"lg",className:"pt-20 pb-6 px-8 lg:pt-[10.25rem] lg:px-[6.25rem] lg:pb-20 rounded-2xl z-10 relative frosted-container -mt-10 lg:-mt-[100px]",children:(0,r.jsxs)("div",{className:"relative z-10  lg:flex",children:[(0,r.jsxs)("div",{className:"pb-12 lg:pb-0 w-full lg:1/2",children:[(0,r.jsx)(n.X6,{size:"lg",className:"mb-12",children:"Build whatever with Celestia underneath"}),(0,r.jsx)(g,{})]}),(0,r.jsx)("div",{className:"flex flex-wrap lg:flex-nowrap w-full lg:1/2 lg:gap-6 lg:justify-end ml-auto mr-0",children:e.map((t,l)=>(0,r.jsx)("ul",{className:"block w-1/2 lg:w-1/5 ".concat(l===e.length-1?"":"mb-10 lg:mb-0"),children:t.links.map((e,t)=>{let s=(0,u.F)(e.url);return(0,r.jsx)("li",{children:(0,r.jsxs)(o.default,{href:e.url,className:"flex items-center group mb-4",children:[(0,r.jsx)(n.uT,{className:"mr-1",size:"md",children:e.title}),(0,r.jsx)(c.default,{className:"flex-grow-0 flex-shrink-0",border:!1,transparentBg:!0,size:"xs",Icon:(0,r.jsx)("div",{className:"block h-4 w-4"}),hover:!0,HoverIcon:(0,r.jsx)(d.Z,{}),direction:s?"down-right":"up-right"})]},t)},"col-".concat(l,"-link-").concat(t))})},l))})]})})}),(0,r.jsxs)(a.Z,{size:"lg",className:"lg:flex lg:justify-between px-4 lg:mb-3",children:[(0,r.jsxs)("div",{className:"text-center lg:text-left w-full mb-2 ",children:[(0,r.jsx)(o.default,{href:"/privacy",className:"inline-block mr-2",children:(0,r.jsx)(n.uT,{size:"sm",children:"Privacy Policy"})}),"\xb7",(0,r.jsx)(o.default,{href:"/tos",className:"inline-block ml-2",children:(0,r.jsx)(n.uT,{size:"sm",children:"Terms of Service"})})]}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsxs)(n.uT,{size:"sm",className:"text-center lg:text-right",children:["\xa9 ",t," Celestia Labs"]})})]})]})}},85237:function(e,t,l){"use strict";var r=l(57437);t.default=()=>(0,r.jsx)("div",{className:"w-full h-screen flex flex-col content-center justify-center",children:(0,r.jsx)("div",{className:"w-8 h-8 border-4 border-black-subtle border-t-transparent border-solid rounded-full animate-spin mx-auto",children:(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})})})},30700:function(e,t,l){"use strict";l.d(t,{default:function(){return L}});var r=l(57437),n=l(2265),s=l(49805),a=l(81419),i=l(95127),o=()=>(0,r.jsx)("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:block focus:p-4 focus:z-50 focus:ring text-center text-base w-full",children:"Skip to main content"}),c=[{name:"Learn",type:"dropdown",items:[{name:"What is Celestia?",url:"/what-is-celestia/"},{name:"Intro to data availability",url:"/what-is-da/"},{name:"Dive into modular",url:"/learn/"},{name:"Read the whitepaper",url:"https://arxiv.org/abs/1905.09274"}]},{name:"Build",type:"dropdown",items:[{name:"Start with the dev portal",url:"/build/"},{name:"Read the docs",url:"https://docs.celestia.org/"},{name:"View the GitHub repos",url:"https://github.com/celestiaorg"}]},{name:"Run a node",type:"link",url:"/run-a-light-node/"}],d=l(50727),u=l(77334),m=l(68300),f=l(43946),x=l(40830),h=e=>{let{dark:t=!1,className:l=""}=e,n=(0,x.Z)(),s=t?n.white.DEFAULT:n.black.DEFAULT;return(0,r.jsx)("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.9776 5.99969L8.56427 8.58635L11.1509 5.99969C11.4109 5.73969 11.8309 5.73969 12.0909 5.99969C12.3509 6.25969 12.3509 6.67969 12.0909 6.93969L9.03094 9.99969C8.77094 10.2597 8.35094 10.2597 8.09094 9.99969L5.03094 6.93969C4.77094 6.67969 4.77094 6.25969 5.03094 5.99969C5.29094 5.74635 5.7176 5.73969 5.9776 5.99969Z",fill:s,className:"group-hover:fill-[".concat(t?n.black.DEFAULT:n.white.DEFAULT,"] transition duration-300 ").concat(l)})})},p=l(76822),g=()=>{let[e,t]=(0,n.useState)(null),[l,s]=(0,n.useState)(0),o=(0,n.useRef)(null);(0,n.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&t(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,n.useEffect)(()=>{let r=()=>{null!==e&&Math.abs(window.scrollY-l)>50&&t(null)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[e,l]);let m=()=>{t(null)},x=l=>{e===l?t(null):(t(l),s(window.scrollY))};return(0,r.jsx)("nav",{ref:o,className:"hidden lg:flex ml-auto mr-0",children:(0,r.jsx)("ul",{className:"flex gap-2 items-center w-full",children:c.map((t,l)=>(0,r.jsxs)("li",{className:"flex-grow-1 relative",onMouseEnter:()=>{"dropdown"===t.type&&x(l)},onMouseLeave:()=>{"dropdown"===t.type&&x(l)},children:["dropdown"===t.type?(0,r.jsx)(d.Z,{size:"md",className:"bg-transparent !text-black ".concat(e===l?"!bg-white-pure":""),noBorder:!0,onClick:()=>x(l),isActive:e===l,"aria-expanded":e===l,"aria-haspopup":"true","aria-controls":"dropdown-menu-".concat(l),children:(0,r.jsxs)("div",{className:"w-full inline-flex justify-between items-center group gap-2",children:[(0,r.jsx)("span",{children:t.name}),(0,r.jsx)(f.default,{Icon:(0,r.jsx)(h,{}),hover:!0,HoverIcon:(0,r.jsx)(h,{dark:!0}),className:"flex-grow-0 flex-shrink-0",direction:"up",border:!1,size:"xs",transparentBg:!0})]})}):(0,r.jsx)(d.Z,{href:t.url,size:"md",className:"bg-transparent !text-black",noBorder:!0,onClick:m,children:t.name}),(0,r.jsx)(i.M,{children:e===l&&(0,r.jsx)(a.E.div,{initial:{opacity:0,y:30,x:"-50%"},animate:{opacity:1,y:0},exit:{opacity:0,y:30},className:"absolute top-full left-1/2 w-64 translate-y-2.5 -translate-x-1/2 pt-2.5",id:"dropdown-menu-".concat(l),role:"menu",children:(0,r.jsx)("div",{className:"w-full bg-white-pure rounded-[.25rem] border-white-weak shadow-sm",children:(0,r.jsx)("ul",{className:"flex flex-col p-4",children:t.items.map(e=>(0,r.jsx)("li",{role:"menuitem",children:(0,r.jsx)(u.default,{href:e.url||"",className:"text-black block p-2 hover:bg-white-weak focus:bg-white-weak rounded-[.25rem] transition",onClick:m,children:(0,r.jsx)(p.uT,{size:"sm",children:e.name})})},e.name))})})})})]},t.name))})})},w=l(58092);let b={closed:{opacity:0,height:0,transition:{when:"afterChildren"}},open:{opacity:1,height:"auto",transition:{when:"beforeChildren",staggerChildren:.1}}},v={closed:{opacity:0,y:-20},open:{opacity:1,y:0}};function j(){let e=document.body.style;document.body.style.position="static",e.top="0px",e.overflow="visible"}var y=e=>{let{name:t,items:l}=e,[s,o]=(0,n.useState)(!1);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{className:"w-full flex justify-between items-center group",onClick:()=>o(!s),children:[(0,r.jsx)("h2",{className:"text-4xl lg:text-6xl grow-1",children:t}),(0,r.jsx)(f.default,{Icon:(0,r.jsx)(w.Z,{dark:!0}),hover:!0,HoverIcon:(0,r.jsx)(w.Z,{dark:!0}),className:"flex-grow-0",direction:s?"up":"down",border:!0,size:"md",dark:!0})]}),(0,r.jsx)(i.M,{children:s&&(0,r.jsx)(a.E.div,{className:"w-full flex flex-col items-start overflow-hidden pt-4",initial:"closed",animate:"open",exit:"closed",variants:b,children:l.map((e,l)=>(0,r.jsx)(a.E.div,{variants:v,className:"w-full",children:(0,r.jsx)(u.default,{href:e.url,className:"text-xl lg:text-xl block w-full px-4 py-2 group",onClick:j,children:(0,r.jsxs)("span",{className:"relative inline-block",children:[(0,r.jsx)("div",{className:"border-b-[1.5px] border-white z-0 absolute w-0 h-full top-0 left-0 block transition-all duration-200 group-hover:w-full"}),e.name]})})},"".concat(t,"-menu-item-").concat(l)))})})]})},N=l(97743),k=l(66648);let E=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"w-full flex justify-between items-center group shrink-0",children:[(0,r.jsx)("h2",{className:"text-4xl lg:text-6xl grow-1",children:t}),(0,r.jsx)(f.default,{Icon:(0,r.jsx)(w.Z,{dark:!0}),hover:!0,HoverIcon:(0,r.jsx)(w.Z,{dark:!0}),className:"shrink-0 grow-0",direction:"down-right",border:!0,size:"md",dark:!0})]})};var L=()=>{let[e,t]=(0,n.useState)(!1),l=(0,s._)(),{setScrollIsLocked:f,menuIsOpen:x,setMenuIsOpen:h,navHeights:p,primaryNavRef:w}=(0,m.R)();return(0,n.useEffect)(()=>{let r=()=>{window.scrollY>0?e||(t(!0),l.start({backgroundColor:"#F6F6F6"})):e&&(t(!1),l.start({backgroundColor:"rgba(255,255,255,0)"}))};return r(),window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[e,t,l]),(0,n.useEffect)(()=>{f(x)},[x,f]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(a.E.header,{initial:{backgroundColor:"rgba(255,255,255,0)"},animate:l,className:"fixed top-0 left-0 w-full z-50",ref:w,children:(0,r.jsx)(N.Z,{size:"lg",padding:!1,children:(0,r.jsxs)("div",{className:"relative w-full flex justify-between items-center py-6 z-50 filter px-4 md:px-10 ".concat(x?"invert":""," transition-all duration-300"),children:[(0,r.jsx)(u.default,{href:"/",children:(0,r.jsx)(k.default,{src:"/images/celestia-logo.svg",alt:"Celestia logo | Home",width:128,height:32,className:"h-auto max-w-32",priority:!0})}),(0,r.jsx)(d.Z,{onClick:()=>h(!x),lightMode:!0,className:"md:hidden",children:x?(0,r.jsxs)(r.Fragment,{children:["Close ",(0,r.jsx)("span",{className:"sr-only",children:"the main"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"sr-only",children:"Open the main"})," menu"]})}),(0,r.jsx)(g,{})]})})}),(0,r.jsx)(i.M,{children:x&&(0,r.jsx)(a.E.div,{className:"bg-black text-white fixed top-0 left-0 h-screen w-screen z-40 pt-28 lg:pt-48",initial:{opacity:0,scale:1.5,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)",transition:{duration:.25,ease:"easeOut"}},exit:{opacity:0,scale:1.5,filter:"blur(10px)",transition:{duration:.35,ease:"easeOut"}},children:(0,r.jsx)(N.Z,{size:"xl",className:"block md:flex md:gap-10 h-full",children:(0,r.jsx)("div",{className:"w-full sm:w-3/5 md:w-1/2 lg:w-1/3 h-full overflow-y-scroll overflow-x-visible no-scrollbar px-4 md:px-10",children:c.map((e,t)=>(0,r.jsxs)(a.E.div,{initial:{opacity:0,scale:1.1,x:-20,transformOrigin:"center left"},animate:{opacity:1,scale:1,x:0,transition:{duration:.25,delay:.25+.07*t,ease:"easeOut"}},className:"mb-10",children:["dropdown"===e.type&&(0,r.jsx)(y,{name:e.name,items:e.items}),"link"===e.type&&(0,r.jsx)(u.default,{href:e.url,className:"w-full text-white no-underline",children:(0,r.jsx)(E,{children:e.name})})]},"menu-item-".concat(t)))})})})})]})}},47722:function(e,t,l){"use strict";var r=l(57437),n=l(88492),s=l.n(n),a=l(2265);l(47091),t.default=e=>{let{src:t="",autoPlay:l=!0}=e,[n,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{i(!0)},[]),(0,r.jsx)("div",{className:"h-full w-full absolute block top-0 left-0",children:n&&(0,r.jsx)(s(),{playsinline:!0,muted:!0,controls:!1,loop:!0,playing:l,url:t,width:"100%",height:"100%",className:"video-player"})})}},50727:function(e,t,l){"use strict";var r=l(57437),n=l(77334),s=l(57559);t.Z=e=>{let{children:t,className:l,onClick:a=null,href:i=null,self:o=null,lightMode:c=!1,noBorder:d=!1,hover:u=!0,size:m="md",isActive:f=!1}=e,x=(0,s.Y)(i,a),h={anchor:n.default,button:"button",div:"div"}[x];return(0,r.jsxs)(h,{className:"group relative block\n				".concat("leading-none text-center uppercase rounded-full block no-underline transform transition-all duration-150"," \n				").concat({sm:"text-xs px-3 py-2",md:"text-xs px-5 py-3",lg:"text-base px-10 py-5"}[m],"\n				").concat(c?"text-black border-black ".concat(u?"hover:text-white transition-all duration-300":null):"bg-black text-white border-white ".concat(u?"hover:text-black hover:border-black transition-all duration-300":null),"\n				").concat(d?"border-0":"border"," \n				").concat(l,"\n			"),onClick:a,href:i,self:o,children:[(0,r.jsx)("div",{className:"absolute inset-0 overflow-hidden rounded-full",children:u&&(0,r.jsx)("div",{className:"absolute w-1/2 h-full top-full left-1/2 -translate-x-1/2 block rounded-full transition-all duration-200 group-hover:top-0 group-hover:w-full group-hover:scale-125 ".concat(c?"bg-black":"bg-white")})}),(0,r.jsx)("div",{className:"relative z-10",children:t})]})}},76822:function(e,t,l){"use strict";l.d(t,{uT:function(){return n},sS:function(){return s},X6:function(){return a},__:function(){return i},bN:function(){return o}});var r=l(57437),n=e=>{let{children:t,className:l,tag:n="p",size:s="md"}=e;return(0,r.jsx)(n,{className:"text-pretty ".concat({xs:"text-xs leading-[1.2857]",sm:"text-sm leading-[1.2857]",md:"text-[1.0625rem] leading-[1.647]",lg:"text-[1.0625rem] leading-[2rem] lg:text-2xl lg:leading-[2rem]"}[s]," ").concat(l),children:t})},s=e=>{let{children:t,className:l,tag:n="h1",size:s="lg"}=e;return(0,r.jsx)(n,{className:"text-pretty font-youth ".concat({xs:"text-sm leading-[1.714]",sm:"text-[2.3125rem] leading-[1.2] lg:text-6xl leading-[1.066666666666667]",md:"text-[3.125rem] leading-[1.1] tracking-normal lg:text-7xl lg:leading-[1.1111]",lg:"text-[4rem] leading-[1] tracking-normal lg:text-[5.125rem] lg:leading-[1]",xl:"text-[5.125rem] leading-[1.073171] tracking-normal lg:text-5.5rem] lg:leading-[1.0909091]"}[s]," ").concat(l),children:t})},a=e=>{let{children:t,className:l,tag:n="h1",size:s="lg",...a}=e;return(0,r.jsx)(n,{...a,className:"font-youth ".concat({xs:"",sm:"text-xl leading-[1.4] lg:text-2xl lg:leading-[1.333333333333333]",md:"text-[1.75rem] leading-[1.2] lg:text-[2rem] lg:leading-tight",lg:"text-4xl leading-[1.2] lg:text-[2.5rem] lg:leading-tight"}[s]," ").concat(l),children:t})},i=e=>{let{children:t,className:l,tag:n="p",size:s="md"}=e;return(0,r.jsx)(n,{className:"uppercase ".concat({xs:"",sm:"",md:"",lg:"text-xl leading-[1.2]"}[s]," ").concat(l),children:t})},o=e=>{let{children:t,mobileFontSize:l="lg",className:n,tag:s="h1"}=e;return(0,r.jsx)(s,{className:"".concat("lg"==l?"text-scaled-mobile-50":"text-scaled-mobile-40"," leading-[1.1] lg:text-scaled-desktop-82 ").concat(n),children:t})}},63651:function(e,t,l){"use strict";l.d(t,{J:function(){return s},X:function(){return n}});var r=l(57437),n=e=>{let{children:t,reverse:l=!1,className:n="",align:s=!1,...a}=e;return(0,r.jsx)("div",{className:"\n        w-full block lg:flex \n        ".concat(l?"lg:flex-col-reverse":""," \n        ").concat(s?"lg:items-center":"","\n        ").concat(n,"\n      "),...a,children:t})},s=e=>{let{children:t,width:l,className:n=""}=e;return(0,r.jsx)("div",{className:"w-full ".concat({10:"lg:w-1/10",20:"lg:w-2/10",25:"lg:w-1/4",30:"lg:w-3/10",33:"lg:w-1/3",40:"lg:w-4/10",50:"lg:w-1/2",60:"lg:w-6/10",66:"lg:w-2/3",70:"lg:w-7/10",75:"lg:w-3/4",80:"lg:w-8/10",90:"lg:w-9/10",100:"lg:w-full"}[l]||"lg:w-full"," ").concat(n),children:t})}},43946:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return a}});var r=l(57437);let n=e=>{switch(e){case"top":case"up":default:return"rotate-0";case"top-right":case"up-right":case"right-up":return"rotate-45";case"right":return"rotate-90";case"bottom-right":case"down-right":case"right-down":return"rotate-[135deg]";case"bottom":case"down":return"rotate-180";case"bottom-left":case"down-left":case"left-down":return"-rotate-[135deg]";case"left":return"-rotate-90";case"top-left":case"up-left":case"left-up":return"-rotate-45"}};var s=l(58092),a=e=>{let{Icon:t=(0,r.jsx)(s.Z,{}),direction:l="up",hover:a=!1,HoverIcon:i=(0,r.jsx)(s.Z,{}),hoverDirection:o="up",className:c,size:d="md",border:u=!0,dark:m=!1,transparentBg:f=!1}=e;return(0,r.jsx)("div",{className:"\n        ".concat(a?"group":""," transition-colors duration-200 relative overflow-hidden rounded-full \n        ").concat({xs:"h-4 w-4",sm:"h-6 w-6",40:"h-10 w-10",md:"h-12 w-12",lg:"h-16 w-16"}[d],"\n        ").concat(u?"border ".concat(m?"border-white ".concat(a?"group-hover:border-black":""):"border-black ".concat(a?"group-hover:border-white":"")):"","\n        ").concat(f?"bg-transparent":m?"bg-black ".concat(a?"group-hover:bg-white":""):"bg-white ".concat(a?"group-hover:bg-black":""),"\n        ").concat(c,"\n        "),children:(0,r.jsx)("div",{className:"absolute top-0 left-0 h-full w-full transition-transform \n            ".concat(n(l)),children:(0,r.jsxs)("div",{className:"absolute top-0 left-0 h-full w-full transition-all duration-300\n            ".concat(a?"group-hover:-top-full":""),children:[(0,r.jsx)("div",{className:"top-0 left-0 absolute h-full w-full flex justify-center items-center",children:t}),a&&(0,r.jsx)("div",{className:"top-full left-0 absolute h-full w-full flex justify-center items-center transition-transform \n                ".concat(n(o)),children:i})]})})})}},77334:function(e,t,l){"use strict";l.r(t);var r=l(57437),n=l(87138),s=l(32687);t.default=e=>{let{children:t,href:l,self:a=null,...i}=e,o=(0,s.F)(l);return(0,r.jsx)(n.default,{href:l,target:a||o?"_self":"_blank",prefetch:o,scroll:!0,...i,children:t})}},58092:function(e,t,l){"use strict";var r=l(57437),n=l(40830);t.Z=e=>{let{dark:t=!1,className:l=""}=e,s=(0,n.Z)(),a=t?s.white.DEFAULT:s.black.DEFAULT;return(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.4893 3.10496L4.29687 9.46964L4.95957 10.2185L11.3208 4.58936L11.3208 21.2959L12.3208 21.2959L12.3208 4.58766L18.6848 10.2039L19.3465 9.45408L12.1515 3.10451C11.9623 2.93752 11.6783 2.93772 11.4893 3.10496Z",fill:a,className:"group-hover:fill-[".concat(t?s.black.DEFAULT:s.white.DEFAULT,"] transition duration-300 ").concat(l)})})}},57559:function(e,t,l){"use strict";l.d(t,{Y:function(){return r}});let r=(e,t)=>e?"anchor":t?"button":"div"},32687:function(e,t,l){"use strict";function r(e){return!!e&&(e.startsWith("/")||!e.startsWith("http"))}l.d(t,{F:function(){return r}})},68300:function(e,t,l){"use strict";l.d(t,{R:function(){return i}});var r=l(57437),n=l(2265),s=l(16463);let a=(0,n.createContext)(void 0),i=()=>{let e=(0,n.useContext)(a);if(void 0===e)throw Error("useScrollPosition must be used within a ScrollPositionProvider");return e};t.default=e=>{let{children:t}=e,l=(0,s.usePathname)(),i=(0,n.useRef)(0),o=e=>{i.current=e},[c,d]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1),f=(0,n.useRef)(null),x=(0,n.useRef)(null),[h,p]=(0,n.useState)({primary:0,secondary:0,tertiary:0});return(0,n.useEffect)(()=>{let e=()=>{p(e=>{var t;return{...e,primary:(null===(t=f.current)||void 0===t?void 0:t.offsetHeight)||0}})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[f]),(0,n.useEffect)(()=>{let e=()=>{p(e=>{var t;return{...e,secondary:(null===(t=x.current)||void 0===t?void 0:t.offsetHeight)||0}})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[x]),(0,n.useEffect)(()=>{p(()=>{var e,t;return{primary:(null===(e=f.current)||void 0===e?void 0:e.offsetHeight)||0,secondary:(null===(t=x.current)||void 0===t?void 0:t.offsetHeight)||0}})},[l]),(0,n.useEffect)(()=>{let e=e=>{e.preventDefault();let t=e.currentTarget.getAttribute("href");if(t&&t.startsWith("#")){let e=document.querySelector(t);if(e){let t=-(h.primary+h.secondary),l=e.getBoundingClientRect().top+window.pageYOffset+t;window.scrollTo({top:l,behavior:"smooth"})}}},t=document.querySelectorAll('a[href^="#"]');return t.forEach(t=>{t.addEventListener("click",e)}),()=>{t.forEach(t=>{t.removeEventListener("click",e)})}},[h]),(0,n.useEffect)(()=>{window.location.hash&&(()=>{let e=window.location.hash,t=document.querySelector(e);if(t){let e=-(h.primary+h.secondary),l=t.getBoundingClientRect().top+window.pageYOffset+e;setTimeout(()=>{window.scrollTo({top:l,behavior:"smooth"})},100)}})()},[l,h]),(0,n.useEffect)(()=>{if(c){let e=window.scrollY;o(e),document.body.style.cssText+="position: fixed; top: -".concat(e,"px; width: 100%; overflow: hidden;")}else{let e=document.body.style;e.position="",e.top="",e.overflow=""}},[c]),(0,n.useEffect)(()=>{m(!1)},[l]),(0,r.jsx)(a.Provider,{value:{scrollY:i,setScrollY:o,scrollIsLocked:c,setScrollIsLocked:d,menuIsOpen:u,setMenuIsOpen:m,primaryNavRef:f,secondaryNavRef:x,navHeights:h},children:t})}},40830:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var r=l(2265),n=l(5481),s=l.n(n),a=l(7722),i=l.n(a);function o(){return(0,r.useMemo)(()=>s()(i()),[]).theme.colors}},7722:function(e,t,l){"use strict";let r;let n=e=>e/1440*100+"vw",s=e=>e/390*100+"vw";e.exports={content:["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/macros/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}","./src/utils/**/*.{js,ts,jsx,tsx,mdx}"],safelist:["group-hover:fill-[#ffffff], group-hover:fill-[#17141A], line-clamp-1, line-clamp-2, line-clamp-3, line-clamp-4, line-clamp-5, line-clamp-6, line-clamp-7, line-clamp-8, line-clamp-9, line-clamp-10"],theme:{extend:{backgroundImage:{"gradient-radial":"radial-gradient(var(--tw-gradient-stops))","gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"},colors:{black:{DEFAULT:"#17141A",subtle:"#453D51",pure:"#000000"},white:{DEFAULT:"#ffffff",weak:"#F6F6F6",pure:"#ffffff"},purple:{DEFAULT:"#7b2bf9",weak:"#995DF9",dark:"#38167F"},red:{DEFAULT:"#EC5643",error:{DEFAULT:"#ff4949",subtle:"#FFC7C7"}},weak:{DEFAULT:"#D9D9DB"},subtle:{DEFAULT:"#5D5C62"},green:{DEFAULT:"#42D885"}},fontFamily:{untitledSans:['"UntitledSans"',"sans-serif"],youth:['"Youth"',"sans-serif"]},fontSize:(r={},[82,50,40,32,24,20,18,16,14,12,10,8].forEach(e=>{r["scaled-desktop-".concat(e)]=n(e),r["scaled-mobile-".concat(e)]=s(e)}),r),backgroundImage:{"explore-card-gradient":"linear-gradient(161.19deg, #4E4D51 17.03%, #29242A 100.02%)"},width:{"1/10":"10%","2/10":"20%","3/10":"30%","4/10":"40%","5/10":"50%","6/10":"60%","7/10":"70%","8/10":"80%","9/10":"90%"}}},plugins:[l(56243),function(e){let{addUtilities:t}=e;t({".no-scrollbar":{"-ms-overflow-style":"none","scrollbar-width":"none"},".no-scrollbar::-webkit-scrollbar":{display:"none"}})}]}},65532:function(){},19801:function(){},81461:function(){},87374:function(){},47091:function(){}},function(e){e.O(0,[7566,6273,8173,1419,7672,5066,2971,7023,1744],function(){return e(e.s=5240)}),_N_E=e.O()}]);