"use strict";(self.webpackChunkGoIT_REACT_HW_05_movies_finder=self.webpackChunkGoIT_REACT_HW_05_movies_finder||[]).push([[893],{9760:function(n,e,t){t(2791);var r=t(184);e.Z=function(n){n.error;return(0,r.jsx)("div",{children:"'Sorry, something went wrong :('"})}},7893:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,o,a,c,s,u,p=t(9439),d=t(2791),l=t(168),f=t(6444),x=f.ZP.div(r||(r=(0,l.Z)(["\n  padding-bottom: 20px;\n  margin-top: 20px;\n  display: flex;\n  gap: 30px;\n  color: white;\n"]))),h=f.ZP.div(i||(i=(0,l.Z)(["\n  border-radius: 6px;\n  outline: 2px solid rgb(255, 49, 49, 0.5);\n  min-width: 400px;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  > img {\n    object-fit: cover;\n  }\n"]))),v=f.ZP.div(o||(o=(0,l.Z)(["\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  overflow: hidden;\n"]))),m=t(3970),g=t(184),w=function(n){var e=n.details,t=e.title,r=e.poster_path,i=e.release_date,o=e.vote_average,a=e.overview,c=e.name,s=e.genres,u=void 0===s?[]:s;return(0,g.jsxs)(x,{children:[(0,g.jsx)(h,{children:(0,g.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500"+r:m,alt:t||c,style:{width:"100%",height:"100%"}})}),(0,g.jsxs)(v,{children:[(0,g.jsxs)("h2",{children:[t||c,i?" (".concat(i.slice(0,4),")"):""]}),(0,g.jsxs)("p",{children:["User Score: ",o?"".concat(Math.round(10*o),"%"):"-"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:a||"no info"}),(0,g.jsx)("h3",{children:"Genres"}),u&&(0,g.jsx)("span",{children:u.map((function(n){return n.name})).join(" | ")})]})]})},Z=t(7689),j=t(273),y=t(9245),b=t(9760),_=t(719),k=t(1087),P=f.ZP.div(a||(a=(0,l.Z)(["\n  margin: 20px 0px;\n  border-bottom: 1px solid white;\n  display: flex;\n  gap: 20px;\n"]))),S=(f.ZP.h3(c||(c=(0,l.Z)(["\n  display: inline-block;\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),(0,f.ZP)(k.OL)(s||(s=(0,l.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  transition: all 250ms ease-in-out, color 250ms ease-in-out;\n  &.active {\n    color: red;\n  }\n  &:hover,\n  &:focus {\n    color: red;\n    transform: scale(1.5);\n    cursor: pointer;\n  }\n"])))),T=(0,f.ZP)(k.rU)(u||(u=(0,l.Z)(["\n  display: inline-flex;\n  gap: 4px;\n  align-items: center;\n  padding: 8px 8px;\n  text-decoration: none;\n  color: white;\n  font-size: 18px;\n  font-weight: 500;\n  :hover {\n    color: red;\n    transform: scale(1.3);\n    cursor: pointer;\n  }\n"]))),C="idle",z="loading",G="resolve",R="error",U=function(){var n,e,t,r,i,o,a=(0,d.useState)(),c=(0,p.Z)(a,2),s=c[0],u=c[1],l=(0,d.useState)(C),f=(0,p.Z)(l,2),x=f[0],h=f[1],v=(0,d.useState)(null),m=(0,p.Z)(v,2),k=m[0],U=m[1],E=(0,Z.UO)().movieId,H=(0,Z.TH)(),I=(0,d.useRef)(null!==(n=null===(e=H.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,d.useEffect)((function(){h(z),(0,j.TP)(E).then((function(n){u(n),h(G)})).catch((function(n){u({}),U(n),h(R)}))}),[E]),(0,g.jsxs)("div",{children:[(0,g.jsxs)(T,{to:I.current,type:"button",children:[(0,g.jsx)(_.YiX,{size:"1.5em"}),"Go back"]}),s&&(0,g.jsx)(w,{details:s}),x===z&&(0,g.jsx)(y.a,{}),x===R&&(0,g.jsx)(b.Z,{children:k}),(0,g.jsxs)(P,{children:[(0,g.jsx)(S,{to:"cast",state:{from:null!==(t=null===H||void 0===H||null===(r=H.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"}),(0,g.jsx)(S,{to:"review",state:{from:null!==(i=null===H||void 0===H||null===(o=H.state)||void 0===o?void 0:o.from)&&void 0!==i?i:"/"},children:"Reviews"})]}),(0,g.jsx)(d.Suspense,{fallback:(0,g.jsx)(y.a,{}),children:(0,g.jsx)(Z.j3,{})})]})}},273:function(n,e,t){t.d(e,{Df:function(){return u},TP:function(){return d},jP:function(){return m},q:function(){return f},zv:function(){return h}});var r=t(5861),i=t(7757),o=t.n(i),a=t(1243),c="https://api.themoviedb.org/3/",s="a661ef86e324b3ea2edd4f22cf9fb615";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"trending/all/day?api_key=").concat(s),n.next=3,a.Z.get(e);case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"search/movie?api_key=").concat(s,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3970:function(n,e,t){n.exports=t.p+"static/media/default-movie-poster.71253f31d01ef6cdd4cc.jpg"}}]);
//# sourceMappingURL=893.f32ef89d.chunk.js.map