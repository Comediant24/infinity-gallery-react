(this["webpackJsonpstarted-cra"]=this["webpackJsonpstarted-cra"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r,a,o,i,c=n(0),s=n.n(c),d=n(16),p=n.n(d),u=n(13),l=n(3),f=n.n(l),x=n(5),h=n(6),m=n(2),b=n(4),g=n(17),j=n.n(g),w=Object(m.createGlobalStyle)(r||(r=Object(b.a)(["\n\n",";\nbody {\n    font-family: 'Source Code Pro', 'Courier New', monospace;\n    font-style: normal;\n    color: #000000;\n    min-width: 320px;\n  }\n"])),j.a),O=n(1),C=function(){return Object(O.jsx)(v,{children:Object(O.jsx)(y,{href:"/infinity-gallery-react",children:"home"})})},v=m.default.header(a||(a=Object(b.a)([""]))),y=m.default.a(o||(o=Object(b.a)(["\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 38px;\n  text-decoration: none;\n  color: #000000;\n"]))),_=n.p+"static/media/SourceCodePro-Regular.a551956d.woff",I=n.p+"static/media/SourceCodePro-Regular.277a94f3.woff2",k=Object(m.createGlobalStyle)(i||(i=Object(b.a)(["\n    @font-face {\n      font-family: 'Source Code Pro';\n        src: local('Source Code Pro'), local('SourceCodePro'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 400;\n        font-display: swap;\n        font-style: normal;\n    }\n"])),I,_),z=function(e){var t=e.valueInput,n=e.handleInput,r=e.handleSubmitInput,a=e.isErrMsg;return Object(O.jsxs)(S,{children:[Object(O.jsxs)(N,{onSubmit:function(e){e.preventDefault(),r()},children:[Object(O.jsx)(P,{placeholder:"search images",value:t,onChange:function(e){n(e.target.value)}}),Object(O.jsx)(F,{type:"submit","aria-label":"search photos",children:"search"})]}),a&&Object(O.jsx)(E,{children:"you must enter a search query"})]})},S=m.default.div.withConfig({displayName:"SearchForm__Wrapper",componentId:"outapu-0"})([""]),N=m.default.form.withConfig({displayName:"SearchForm__Form",componentId:"outapu-1"})(["position:relative;border:1px solid #000000;border-radius:10px;max-width:745px;display:flex;box-sizing:border-box;padding:4px;"]),P=m.default.input.withConfig({displayName:"SearchForm__Input",componentId:"outapu-2"})(["border:none;box-sizing:border-box;border-radius:10px;height:52px;padding:10px;width:75%;font-size:34px;line-height:43px;color:#000000;::placeholder{font-size:34px;text-align:center;color:#000000;}@media screen and (max-width:500px){font-size:20px;::placeholder{font-size:20px;}}"]),F=m.default.button.withConfig({displayName:"SearchForm__Button",componentId:"outapu-3"})(["color:#ffffff;background:#000000;border-radius:10px;font-size:30px;text-align:center;border:none;padding:4px 8px;box-sizing:border-box;cursor:pointer;margin-left:auto;@media screen and (max-width:500px){font-size:20px;}"]),E=m.default.span.withConfig({displayName:"SearchForm__ErrorMessage",componentId:"outapu-4"})(["color:red;"]),M=n.p+"static/media/like.2c20196c.svg",L=function(e){var t=e.image,n=e.description,r=e.likes,a=e.user,o=e.userImage,i=e.userLink;return Object(O.jsxs)(R,{children:[Object(O.jsx)(q,{alt:n,src:t}),Object(O.jsxs)(B,{children:[Object(O.jsxs)(D,{children:[Object(O.jsx)(W,{alt:"like count",src:M}),Object(O.jsx)(G,{children:r})]}),Object(O.jsxs)(T,{children:[Object(O.jsx)(A,{alt:"user avatar",src:o}),Object(O.jsx)(J,{target:"_blank",href:i,children:a})]})]})]})},R=m.default.li.withConfig({displayName:"Card__Wrapper",componentId:"sc-1cz5vk4-0"})(["list-style:none;display:flex;flex-direction:column;width:100%;"]),q=m.default.img.withConfig({displayName:"Card__ImgCard",componentId:"sc-1cz5vk4-1"})(["width:100%;"]),B=m.default.div.withConfig({displayName:"Card__DescriptionCard",componentId:"sc-1cz5vk4-2"})(["display:flex;justify-content:space-between;border:1px solid #d1d1d1;box-sizing:border-box;padding:20px 16px;@media screen and (max-width:400px){padding:12px 10px;}"]),D=m.default.div.withConfig({displayName:"Card__InfoCardContainer",componentId:"sc-1cz5vk4-3"})(["display:flex;gap:8px;"]),T=Object(m.default)(D).withConfig({displayName:"Card__RightInfoCardContainer",componentId:"sc-1cz5vk4-4"})(["flex-direction:row-reverse;"]),W=m.default.img.withConfig({displayName:"Card__ImgCardContainer",componentId:"sc-1cz5vk4-5"})(["width:32px;height:32px;"]),A=Object(m.default)(W).withConfig({displayName:"Card__UserImgCardContainer",componentId:"sc-1cz5vk4-6"})(["border-radius:100%;"]),G=m.default.p.withConfig({displayName:"Card__TextCardContainer",componentId:"sc-1cz5vk4-7"})(["font-size:24px;line-height:30px;color:#000000;padding:0;margin:0;@media screen and (max-width:400px){font-size:16px;}"]),J=m.default.a.withConfig({displayName:"Card__LinkCardContainer",componentId:"sc-1cz5vk4-8"})(["font-size:24px;line-height:30px;color:#000000;text-decoration:none;text-align:end;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:130px;@media screen and (max-width:1000px){max-width:200px;}@media screen and (max-width:400px){font-size:16px;max-width:180px;}"]),U=n(12),V=n.n(U),X=n(21),Y=(n(34),function(e){var t=e.imagesCards,n=void 0===t?[]:t,r=e.setPage;return Object(O.jsx)(H,{children:Object(O.jsx)(X.a,{dataLength:n.length,next:function(){return r()},hasMore:!0,loader:30===n.length?"":Object(O.jsx)(K,{children:"loading image...\u23f3"}),children:Object(O.jsx)(U.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,1e3:3},children:Object(O.jsx)(V.a,{gutter:"25px",children:n.map((function(e){return Object(O.jsx)(L,{description:e.description,image:e.urls.small,likes:e.likes,user:e.user.first_name,userImage:e.user.profile_image.small,userLink:e.user.links.html},e.id)}))})})})})}),H=m.default.section.withConfig({displayName:"SearchResult__Wrapper",componentId:"sc-1q27cwr-0"})([""]),K=m.default.p.withConfig({displayName:"SearchResult__LoaderText",componentId:"sc-1q27cwr-1"})(["font-size:30px;text-align:center;"]),Q="https://api.unsplash.com",Z="ts8MiXj2OczPOlc6EYMbJG1UVc5rnDI6dtbgay20nFA",$=30,ee=function(){var e=Object(x.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Q,"/search/photos?query=").concat(t,"&page=").concat(n,"&client_id=").concat(Z));case 2:if(!(r=e.sent).ok){e.next=10;break}return e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a.results);case 10:return e.abrupt("return",Promise.reject({error:r.status}));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),te=function(){var e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Q,"/photos/random?content_filter=low&count=").concat($,"&client_id=").concat(Z));case 2:if(!(t=e.sent).ok){e.next=7;break}return e.abrupt("return",t.json());case 7:return e.abrupt("return",Promise.reject({error:t.status}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var ne=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(1),o=Object(h.a)(a,2),i=o[0],s=o[1],d=Object(c.useState)([]),p=Object(h.a)(d,2),l=p[0],m=p[1],b=Object(c.useState)(!1),g=Object(h.a)(b,2),j=g[0],v=g[1],y=Object(c.useState)(!1),_=Object(h.a)(y,2),I=_[0],S=_[1];console.log("isEmptyImages",I),Object(c.useEffect)((function(){N()}),[]),Object(c.useEffect)((function(){i>1&&P(n,i)}),[i]);var N=function(){var e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te();case 3:t=e.sent,m(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(n,i);case 3:if(0!==(t=e.sent).length){e.next=7;break}return S(!0),e.abrupt("return");case 7:if(S(!1),1!==i){e.next=11;break}return m(t),e.abrupt("return");case 11:m([].concat(Object(u.a)(l),Object(u.a)(t))),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(re,{children:[Object(O.jsx)(C,{}),Object(O.jsx)(z,{valueInput:n,handleInput:function(e){r(e)},handleSubmitInput:function(){n?(m((function(){return[]})),P(),v(!1)):v(!0)},isErrMsg:j}),I?Object(O.jsx)(ae,{children:"nothing found \ud83d\ude25"}):Object(O.jsx)(Y,{imagesCards:l,setPage:function(){s(i+1)}}),Object(O.jsx)(w,{}),Object(O.jsx)(k,{})]})},re=m.default.div.withConfig({displayName:"App__Wrapper",componentId:"sc-1a6wp6h-0"})(["max-width:1320px;padding:30px 20px;box-sizing:border-box;margin:0 auto;display:flex;flex-direction:column;gap:25px;"]),ae=m.default.p.withConfig({displayName:"App__EmptyMessage",componentId:"sc-1a6wp6h-1"})(["font-size:30px;text-align:center;"]),oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};p.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(ne,{})}),document.getElementById("root")),oe()}},[[35,1,2]]]);
//# sourceMappingURL=main.07df34d3.chunk.js.map