"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{7513:function(e,r,t){t.d(r,{_9:function(){return i},gm:function(){return a}});var n=t(2265),o=t(7437),l=n.createContext(void 0),i=e=>{let{dir:r,children:t}=e;return(0,o.jsx)(l.Provider,{value:r,children:t})};function a(e){let r=n.useContext(l);return e||r||"ltr"}},9744:function(e,r,t){t.d(r,{xr:function(){return q},Bl:function(){return Z},fK:function(){return K}});var n=t(6164),o=t(2265),l=t(5171),i=t(1383),a=t(8324),s=t(1584),c=t(5137),d=t(7513),u=t(1336),f=t(8149),p=t(7437),h="ScrollArea",[v,w]=(0,a.b)(h),[m,g]=v(h),b=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,type:n="hover",dir:i,scrollHideDelay:a=600,...c}=e,[u,f]=o.useState(null),[h,v]=o.useState(null),[w,g]=o.useState(null),[b,x]=o.useState(null),[y,S]=o.useState(null),[C,E]=o.useState(0),[T,R]=o.useState(0),[j,N]=o.useState(!1),[P,L]=o.useState(!1),_=(0,s.e)(r,e=>f(e)),D=(0,d.gm)(i);return(0,p.jsx)(m,{scope:t,type:n,dir:D,scrollHideDelay:a,scrollArea:u,viewport:h,onViewportChange:v,content:w,onContentChange:g,scrollbarX:b,onScrollbarXChange:x,scrollbarXEnabled:j,onScrollbarXEnabledChange:N,scrollbarY:y,onScrollbarYChange:S,scrollbarYEnabled:P,onScrollbarYEnabledChange:L,onCornerWidthChange:E,onCornerHeightChange:R,children:(0,p.jsx)(l.WV.div,{dir:D,...c,ref:_,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":T+"px",...e.style}})})});b.displayName=h;var x="ScrollAreaViewport",y=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,children:n,nonce:i,...a}=e,c=g(x,t),d=o.useRef(null),u=(0,s.e)(r,d,c.onViewportChange);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),(0,p.jsx)(l.WV.div,{"data-radix-scroll-area-viewport":"",...a,ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,p.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:n})})]})});y.displayName=x;var S="ScrollAreaScrollbar",C=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,l=g(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,s="horizontal"===e.orientation;return o.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===l.type?(0,p.jsx)(E,{...n,ref:r,forceMount:t}):"scroll"===l.type?(0,p.jsx)(T,{...n,ref:r,forceMount:t}):"auto"===l.type?(0,p.jsx)(R,{...n,ref:r,forceMount:t}):"always"===l.type?(0,p.jsx)(j,{...n,ref:r}):null});C.displayName=S;var E=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,l=g(S,e.__scopeScrollArea),[a,s]=o.useState(!1);return o.useEffect(()=>{let e=l.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),s(!0)},n=()=>{r=window.setTimeout(()=>s(!1),l.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n)}}},[l.scrollArea,l.scrollHideDelay]),(0,p.jsx)(i.z,{present:t||a,children:(0,p.jsx)(R,{"data-state":a?"visible":"hidden",...n,ref:r})})}),T=o.forwardRef((e,r)=>{var t,n;let{forceMount:l,...a}=e,s=g(S,e.__scopeScrollArea),c="horizontal"===e.orientation,d=U(()=>h("SCROLL_END"),100),[u,h]=(t="hidden",n={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},o.useReducer((e,r)=>{let t=n[e][r];return null!=t?t:e},t));return o.useEffect(()=>{if("idle"===u){let e=window.setTimeout(()=>h("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,s.scrollHideDelay,h]),o.useEffect(()=>{let e=s.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],n=()=>{let n=e[r];t!==n&&(h("SCROLL"),d()),t=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[s.viewport,c,h,d]),(0,p.jsx)(i.z,{present:l||"hidden"!==u,children:(0,p.jsx)(j,{"data-state":"hidden"===u?"hidden":"visible",...a,ref:r,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),R=o.forwardRef((e,r)=>{let t=g(S,e.__scopeScrollArea),{forceMount:n,...l}=e,[a,s]=o.useState(!1),c="horizontal"===e.orientation,d=U(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(c?e:r)}},10);return F(t.viewport,d),F(t.content,d),(0,p.jsx)(i.z,{present:n||a,children:(0,p.jsx)(j,{"data-state":a?"visible":"hidden",...l,ref:r})})}),j=o.forwardRef((e,r)=>{let{orientation:t="vertical",...n}=e,l=g(S,e.__scopeScrollArea),i=o.useRef(null),a=o.useRef(0),[s,c]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=O(s.viewport,s.content),u={...n,sizes:s,onSizesChange:c,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function f(e,r){return function(e,r,t){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=Y(t),l=r||o/2,i=t.scrollbar.paddingStart+l,a=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),s=t.content-t.viewport;return X([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,a.current,s,r)}return"horizontal"===t?(0,p.jsx)(N,{...u,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=V(l.viewport.scrollLeft,s,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=f(e,l.dir))}}):"vertical"===t?(0,p.jsx)(P,{...u,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=V(l.viewport.scrollTop,s);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=f(e))}}):null}),N=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:n,...l}=e,i=g(S,e.__scopeScrollArea),[a,c]=o.useState(),d=o.useRef(null),u=(0,s.e)(r,d,i.onScrollbarXChange);return o.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,p.jsx)(D,{"data-orientation":"horizontal",...l,ref:u,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Y(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let n=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&a&&n({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:I(a.paddingLeft),paddingEnd:I(a.paddingRight)}})}})}),P=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:n,...l}=e,i=g(S,e.__scopeScrollArea),[a,c]=o.useState(),d=o.useRef(null),u=(0,s.e)(r,d,i.onScrollbarYChange);return o.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,p.jsx)(D,{"data-orientation":"vertical",...l,ref:u,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Y(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let n=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&a&&n({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:I(a.paddingTop),paddingEnd:I(a.paddingBottom)}})}})}),[L,_]=v(S),D=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,sizes:n,hasThumb:i,onThumbChange:a,onThumbPointerUp:d,onThumbPointerDown:u,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:w,onResize:m,...b}=e,x=g(S,t),[y,C]=o.useState(null),E=(0,s.e)(r,e=>C(e)),T=o.useRef(null),R=o.useRef(""),j=x.viewport,N=n.content-n.viewport,P=(0,c.W)(w),_=(0,c.W)(h),D=U(m,10);function W(e){T.current&&v({x:e.clientX-T.current.left,y:e.clientY-T.current.top})}return o.useEffect(()=>{let e=e=>{let r=e.target;(null==y?void 0:y.contains(r))&&P(e,N)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[j,y,N,P]),o.useEffect(_,[n,_]),F(y,D),F(x.content,D),(0,p.jsx)(L,{scope:t,scrollbar:y,hasThumb:i,onThumbChange:(0,c.W)(a),onThumbPointerUp:(0,c.W)(d),onThumbPositionChange:_,onThumbPointerDown:(0,c.W)(u),children:(0,p.jsx)(l.WV.div,{...b,ref:E,style:{position:"absolute",...b.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),T.current=y.getBoundingClientRect(),R.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",x.viewport&&(x.viewport.style.scrollBehavior="auto"),W(e))}),onPointerMove:(0,f.M)(e.onPointerMove,W),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=R.current,x.viewport&&(x.viewport.style.scrollBehavior=""),T.current=null})})})}),W="ScrollAreaThumb",z=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,o=_(W,e.__scopeScrollArea);return(0,p.jsx)(i.z,{present:t||o.hasThumb,children:(0,p.jsx)(A,{ref:r,...n})})}),A=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,style:n,...i}=e,a=g(W,t),c=_(W,t),{onThumbPositionChange:d}=c,u=(0,s.e)(r,e=>c.onThumbChange(e)),h=o.useRef(),v=U(()=>{h.current&&(h.current(),h.current=void 0)},100);return o.useEffect(()=>{let e=a.viewport;if(e){let r=()=>{if(v(),!h.current){let r=B(e,d);h.current=r,d()}};return d(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[a.viewport,v,d]),(0,p.jsx)(l.WV.div,{"data-state":c.hasThumb?"visible":"hidden",...i,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...n},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let r=e.target.getBoundingClientRect(),t=e.clientX-r.left,n=e.clientY-r.top;c.onThumbPointerDown({x:t,y:n})}),onPointerUp:(0,f.M)(e.onPointerUp,c.onThumbPointerUp)})});z.displayName=W;var k="ScrollAreaCorner",M=o.forwardRef((e,r)=>{let t=g(k,e.__scopeScrollArea),n=!!(t.scrollbarX&&t.scrollbarY);return"scroll"!==t.type&&n?(0,p.jsx)(H,{...e,ref:r}):null});M.displayName=k;var H=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,...n}=e,i=g(k,t),[a,s]=o.useState(0),[c,d]=o.useState(0),u=!!(a&&c);return F(i.scrollbarX,()=>{var e;let r=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(r),d(r)}),F(i.scrollbarY,()=>{var e;let r=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(r),s(r)}),u?(0,p.jsx)(l.WV.div,{...n,ref:r,style:{width:a,height:c,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function I(e){return e?parseInt(e,10):0}function O(e,r){let t=e/r;return isNaN(t)?0:t}function Y(e){let r=O(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-t)*r,18)}function V(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=Y(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,i=r.content-r.viewport,a=function(e,[r,t]){return Math.min(t,Math.max(r,e))}(e,"ltr"===t?[0,i]:[-1*i,0]);return X([0,i],[0,l-n])(a)}function X(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}var B=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},t={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=t.left!==l.left,a=t.top!==l.top;(i||a)&&r(),t=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function U(e,r){let t=(0,c.W)(e),n=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(n.current),[]),o.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,r)},[t,r])}function F(e,r){let t=(0,c.W)(r);(0,u.b)(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}var q=o.forwardRef(({className:e,children:r,...t},o)=>(0,p.jsxs)(b,{ref:o,className:(0,n.m6)("overflow-hidden",e),...t,children:[r,(0,p.jsx)(M,{}),(0,p.jsx)(Z,{orientation:"vertical"})]}));q.displayName=b.displayName;var K=o.forwardRef(({className:e,children:r,...t},o)=>(0,p.jsx)(y,{ref:o,className:(0,n.m6)("size-full rounded-[inherit]",e),...t,children:r}));K.displayName=y.displayName;var Z=o.forwardRef(({className:e,orientation:r="vertical",...t},o)=>(0,p.jsx)(C,{ref:o,orientation:r,className:(0,n.m6)("flex select-none data-[state=hidden]:animate-fd-fade-out","vertical"===r&&"h-full w-1.5","horizontal"===r&&"h-1.5 flex-col",e),...t,children:(0,p.jsx)(z,{className:"relative flex-1 rounded-full bg-fd-border"})}));Z.displayName=C.displayName},8692:function(e,r,t){t.d(r,{v:function(){return o}});var n=t(2265);function o(e){let[r,t]=(0,n.useState)(!1),o=(0,n.useRef)(null),l=(0,n.useCallback)(()=>{o.current&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{t(!1)},1500),e(),t(!0)},[e]);return(0,n.useEffect)(()=>()=>{o.current&&window.clearTimeout(o.current)},[]),[r,l]}},6930:function(e,r,t){t.d(r,{d:function(){return p},S:function(){return f}});var n=t(9744),o=t(8692),l=t(1511),i=t(6164),a=t(8030);let s=(0,a.Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),c=(0,a.Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var d=t(2265),u=t(7437),f=(0,d.forwardRef)(({className:e,...r},t)=>(0,u.jsx)("pre",{ref:t,className:(0,i.m6)("max-h-[400px] p-4",e),...r,children:r.children}));f.displayName="Pre";var p=(0,d.forwardRef)(({title:e,allowCopy:r=!0,keepBackground:t=!1,icon:o,className:l,...a},s)=>{let c=(0,d.useRef)(null),f=(0,d.useCallback)(()=>{let e=c.current?.getElementsByTagName("pre").item(0);if(!e)return;let r=e.cloneNode(!0);r.querySelectorAll(".nd-copy-ignore").forEach(e=>{e.remove()}),navigator.clipboard.writeText(r.textContent??"")},[]);return(0,u.jsxs)("figure",{ref:s,className:(0,i.m6)("not-prose group fd-codeblock relative my-6 overflow-hidden rounded-lg border bg-fd-secondary/50 text-sm",t&&"fd-codeblock-keep-bg",l),...a,children:[e?(0,u.jsxs)("div",{className:"flex flex-row items-center gap-2 border-b bg-fd-muted px-4 py-1.5",children:[o?(0,u.jsx)("div",{className:"text-fd-muted-foreground [&_svg]:size-3.5",..."string"==typeof o?{dangerouslySetInnerHTML:{__html:o}}:{children:o}}):null,(0,u.jsx)("figcaption",{className:"flex-1 truncate text-fd-muted-foreground",children:e}),r?(0,u.jsx)(h,{className:"-me-2",onCopy:f}):null]}):r&&(0,u.jsx)(h,{className:"absolute right-2 top-2 z-[2] backdrop-blur-sm",onCopy:f}),(0,u.jsxs)(n.xr,{ref:c,dir:"ltr",children:[(0,u.jsx)(n.fK,{children:a.children}),(0,u.jsx)(n.Bl,{orientation:"horizontal"})]})]})});function h({className:e,onCopy:r,...t}){let[n,a]=(0,o.v)(r);return(0,u.jsxs)("button",{type:"button",className:(0,i.m6)((0,l.d)({color:"ghost",className:"transition-all group-hover:opacity-100"}),!n&&"opacity-0",e),"aria-label":"Copy Text",onClick:a,...t,children:[(0,u.jsx)(s,{className:(0,i.m6)("size-3.5 transition-transform",!n&&"scale-0")}),(0,u.jsx)(c,{className:(0,i.m6)("absolute size-3.5 transition-transform",n&&"scale-0")})]})}p.displayName="CodeBlock"},8194:function(e,r,t){t.d(r,{G:function(){return s},W:function(){return c}});var n=t(6031),o=t(6463),l=t(2265),i=t(7437),a=(0,l.createContext)(void 0);function s({children:e,tree:r}){let t=(0,o.usePathname)(),s=(0,l.useMemo)(()=>{let e=function e(r,t){for(let o of r)if("folder"===o.type){let r=e(o.children,t);if(r)return r;if(!0===o.root&&(0,n.$M)(o.children,t))return o}}(r.children,t)??r,o=function e(r){return r.flatMap(r=>{if("separator"===r.type)return[];if("folder"===r.type){let t=e(r.children);return!r.root&&r.index&&t.unshift(r.index),t}return r.external?[]:[r]})}(e.children);return{root:e,navigation:o,tree:r}},[t,r]);return(0,i.jsx)(a.Provider,{value:s,children:e})}function c(){let e=(0,l.useContext)(a);if(!e)throw Error("You must wrap this component under <DocsLayout />");return e}},7095:function(e,r,t){t.d(r,{CodeBlock:function(){return n.d}});var n=t(6930);t(9744),t(8692),t(1511),t(894)}}]);