"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8415],{18415:function(e,t,r){r.d(t,{default:function(){return y}});var l=r(57437),o=r(63651),n=r(2265),i=r(97743),a=r(76822),s=r(95127),c=r(81419),d=r(50727),u=e=>{let{currentFilter:t,setFilter:r,filterCategories:o,filtersToShow:a}=e,[u,h]=(0,n.useState)(a);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("nav",{className:"w-full py-6 lg:py-0",children:(0,l.jsx)(s.M,{children:o&&o.length>0&&(0,l.jsx)(i.Z,{size:"lg",className:"overflow-visible",padding:!1,children:(0,l.jsxs)("div",{className:"flex overflow-x-scroll w-auto mx-auto gap-2 no-scrollbar lg:flex-wrap lg:overflow-auto lg:w-full",children:[(0,l.jsx)(d.Z,{className:"whitespace-nowrap table shrink-0",hover:t,lightMode:t,onClick:()=>r(null),children:"All"}),o.slice(0,u).map((e,o)=>(0,l.jsx)(c.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3,delay:.05*o},children:(0,l.jsx)(d.Z,{className:"whitespace-nowrap table",hover:t!==e,lightMode:t!==e,onClick:()=>r(e),children:e})},"category-".concat(o))),u<o.length&&(0,l.jsx)("div",{className:"lg:w-full",children:(0,l.jsx)(d.Z,{className:"group table whitespace-nowrap",lightMode:!0,noBorder:!0,size:"md",onClick:()=>h(o.length),children:"Show More"})})]})})})})})},h=r(77334),f=r(43946),w=r(58092),g=r(66648),v=e=>{let{children:t,hover:r=!1}=e;return(0,l.jsx)(a.uT,{size:"xs",className:"whitespace-nowrap bg-white-weak text-black-subtle rounded-full px-3 py-1\n            ".concat(r?"group-hover:bg-black-subtle group-hover:text-white hover:duration-100 group-hover:duration-100 duration-300":"","\n        "),children:t})},x=r(88396),p=e=>{let{title:t,description:r,url:o,dark:n=!1,image:i,categories:s=[]}=e,d=o?h.default:"div";return(0,l.jsx)(c.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},id:(0,x.x)(t),children:(0,l.jsxs)(d,{href:o||"",className:"flex w-full group border-b transition-colors hover:duration-100 group-hover:duration-100 duration-300 delay-0 py-6 px-2 lg:px-6 gap-5 min-h-[100px] ".concat(n?"bg-black text-white border-white hover:border-black hover:bg-white hover:text-black":"bg-white text-black border-black hover:border-white hover:bg-black hover:text-white"),children:[(0,l.jsx)("div",{className:"w-10 relative grow-0 shrink-0 flex items-start content-center transition-all hover:duration-100 group-hover:duration-100 duration-300",children:(0,l.jsx)(g.default,{className:"flex-grow-0 justify-self-center w-full max-w-10 rounded-full overflow-hidden",width:40,height:40,src:i,alt:"".concat(t," logo")})}),(0,l.jsxs)("div",{className:"content-center",children:[(0,l.jsxs)(a.__,{tag:"h3",size:"lg",className:"transition-colors hover:duration-100 group-hover:duration-100 duration-300 flex items-center ".concat(n?"text-white group-hover:text-black":"text-black group-hover:text-white"),children:[t,!o&&(0,l.jsx)(a.uT,{size:"sm",className:"text-pretty",children:"- Coming Soon"})]}),(0,l.jsx)(a.uT,{size:"sm",className:"text-pretty",children:r}),s.length>0&&(0,l.jsx)("div",{className:"flex flex-wrap gap-1 mt-1",children:s.map((e,t)=>(0,l.jsx)(v,{hover:!0,children:e},"category-pill-".concat(t)))})]}),(0,l.jsx)("div",{className:"w-10 relative grow-0 shrink-0 flex items-start content-center transition-all hover:duration-100 group-hover:duration-100 duration-300 mr-0 ml-auto",children:o&&(0,l.jsx)(f.default,{Icon:(0,l.jsx)(w.Z,{dark:n}),hover:!0,HoverIcon:(0,l.jsx)(w.Z,{dark:!n}),className:"flex-grow-0 shrink-0 justify-self-center group-hover:bg-white",direction:"top-right",border:!1,dark:n,transparentBg:!0,size:"40"})})]})})},m=r(16856),b=r(68300),y=e=>{let{id:t,title:r,description:c,filters:d,filterTarget:h,filtersToShow:f=5,items:w,showCategoriesOnCard:g=!1}=e,[v,x]=(0,n.useState)(null),[y,j]=(0,n.useState)([...w].sort((e,t)=>e.title.localeCompare(t.title))),[k,N]=(0,n.useState)(!1),E=(0,n.useRef)(null),{navHeights:z}=(0,b.R)();return(0,n.useEffect)(()=>{null===v?j([...w].sort((e,t)=>e.title.localeCompare(t.title))):j(w.filter(e=>{let t=e[h];return Array.isArray(t)?t.includes(v):t===v}).sort((e,t)=>e.title.localeCompare(t.title)))},[v,h,w]),(0,n.useEffect)(()=>{let e=()=>{window.innerWidth>768?N(!0):N(!1)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("section",{id:t,ref:E,children:(0,l.jsx)(i.Z,{size:"md",className:"",children:(0,l.jsxs)(o.X,{className:" lg:gap-10",children:[(0,l.jsx)(o.J,{width:40,className:"relative",children:(0,l.jsx)(m.Z,{enabled:k,top:z.primary+z.secondary,bottomBoundary:"#sticky-boundary-".concat(t||"bottom"),children:(0,l.jsxs)("div",{className:"pt-10 lg:py-20",children:[(0,l.jsx)(a.sS,{size:"sm",tag:"h2",className:"mb-4",children:r}),(0,l.jsx)(a.uT,{size:"md",className:"lg:mb-10",children:c}),(null==d?void 0:d.length)>0&&h&&(0,l.jsx)(u,{currentFilter:v,setFilter:e=>{window.scrollTo(0,E.current.offsetTop-z.primary-z.secondary),x(e)},filterCategories:d,filtersToShow:f})]})})}),(0,l.jsx)(o.J,{width:60,className:"pb-10 lg:py-20",children:(0,l.jsx)(s.M,{children:y.map((e,t)=>(0,l.jsx)(p,{title:e.title,description:e.description,url:e.url||null,image:e.image,categories:g?e.categories:[]},"project-".concat(t)))})})]})})}),(0,l.jsx)("div",{id:"sticky-boundary-".concat(t||"bottom")})]})}},50727:function(e,t,r){var l=r(57437),o=r(77334),n=r(57559);t.Z=e=>{let{children:t,className:r,onClick:i=null,href:a=null,self:s=null,lightMode:c=!1,noBorder:d=!1,hover:u=!0,size:h="md",isActive:f=!1}=e,w=(0,n.Y)(a,i),g={anchor:o.default,button:"button",div:"div"}[w];return(0,l.jsxs)(g,{className:"group relative block\n				".concat("leading-none text-center uppercase rounded-full block no-underline transform transition-all duration-150"," \n				").concat({sm:"text-xs px-3 py-2",md:"text-xs px-5 py-3",lg:"text-base px-10 py-5"}[h],"\n				").concat(c?"text-black border-black ".concat(u?"hover:text-white transition-all duration-300":null):"bg-black text-white border-white ".concat(u?"hover:text-black hover:border-black transition-all duration-300":null),"\n				").concat(d?"border-0":"border"," \n				").concat(r,"\n			"),onClick:i,href:a,self:s,children:[(0,l.jsx)("div",{className:"absolute inset-0 overflow-hidden rounded-full",children:u&&(0,l.jsx)("div",{className:"absolute w-1/2 h-full top-full left-1/2 -translate-x-1/2 block rounded-full transition-all duration-200 group-hover:top-0 group-hover:w-full group-hover:scale-125 ".concat(c?"bg-black":"bg-white")})}),(0,l.jsx)("div",{className:"relative z-10",children:t})]})}},63651:function(e,t,r){r.d(t,{J:function(){return n},X:function(){return o}});var l=r(57437),o=e=>{let{children:t,reverse:r=!1,className:o="",align:n=!1,...i}=e;return(0,l.jsx)("div",{className:"\n        w-full block lg:flex \n        ".concat(r?"lg:flex-col-reverse":""," \n        ").concat(n?"lg:items-center":"","\n        ").concat(o,"\n      "),...i,children:t})},n=e=>{let{children:t,width:r,className:o=""}=e;return(0,l.jsx)("div",{className:"w-full ".concat({10:"lg:w-1/10",20:"lg:w-2/10",25:"lg:w-1/4",30:"lg:w-3/10",33:"lg:w-1/3",40:"lg:w-4/10",50:"lg:w-1/2",60:"lg:w-6/10",66:"lg:w-2/3",70:"lg:w-7/10",75:"lg:w-3/4",80:"lg:w-8/10",90:"lg:w-9/10",100:"lg:w-full"}[r]||"lg:w-full"," ").concat(o),children:t})}},68300:function(e,t,r){r.d(t,{R:function(){return a}});var l=r(57437),o=r(2265),n=r(16463);let i=(0,o.createContext)(void 0),a=()=>{let e=(0,o.useContext)(i);if(void 0===e)throw Error("useScrollPosition must be used within a ScrollPositionProvider");return e};t.default=e=>{let{children:t}=e,r=(0,n.usePathname)(),a=(0,o.useRef)(0),s=e=>{a.current=e},[c,d]=(0,o.useState)(!1),[u,h]=(0,o.useState)(!1),f=(0,o.useRef)(null),w=(0,o.useRef)(null),[g,v]=(0,o.useState)({primary:0,secondary:0,tertiary:0});return(0,o.useEffect)(()=>{let e=()=>{v(e=>{var t;return{...e,primary:(null===(t=f.current)||void 0===t?void 0:t.offsetHeight)||0}})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[f]),(0,o.useEffect)(()=>{let e=()=>{v(e=>{var t;return{...e,secondary:(null===(t=w.current)||void 0===t?void 0:t.offsetHeight)||0}})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[w]),(0,o.useEffect)(()=>{v(()=>{var e,t;return{primary:(null===(e=f.current)||void 0===e?void 0:e.offsetHeight)||0,secondary:(null===(t=w.current)||void 0===t?void 0:t.offsetHeight)||0}})},[r]),(0,o.useEffect)(()=>{let e=e=>{e.preventDefault();let t=e.currentTarget.getAttribute("href");if(t&&t.startsWith("#")){let e=document.querySelector(t);if(e){let t=-(g.primary+g.secondary),r=e.getBoundingClientRect().top+window.pageYOffset+t;window.scrollTo({top:r,behavior:"smooth"})}}},t=document.querySelectorAll('a[href^="#"]');return t.forEach(t=>{t.addEventListener("click",e)}),()=>{t.forEach(t=>{t.removeEventListener("click",e)})}},[g]),(0,o.useEffect)(()=>{window.location.hash&&(()=>{let e=window.location.hash,t=document.querySelector(e);if(t){let e=-(g.primary+g.secondary),r=t.getBoundingClientRect().top+window.pageYOffset+e;setTimeout(()=>{window.scrollTo({top:r,behavior:"smooth"})},100)}})()},[r,g]),(0,o.useEffect)(()=>{if(c){let e=window.scrollY;s(e),document.body.style.cssText+="position: fixed; top: -".concat(e,"px; width: 100%; overflow: hidden;")}else{let e=document.body.style;e.position="",e.top="",e.overflow=""}},[c]),(0,o.useEffect)(()=>{h(!1)},[r]),(0,l.jsx)(i.Provider,{value:{scrollY:a,setScrollY:s,scrollIsLocked:c,setScrollIsLocked:d,menuIsOpen:u,setMenuIsOpen:h,primaryNavRef:f,secondaryNavRef:w,navHeights:g},children:t})}},88396:function(e,t,r){r.d(t,{x:function(){return l}});let l=e=>e.replace(/\s+/g,"-").toLowerCase()}}]);