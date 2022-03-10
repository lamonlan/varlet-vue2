import{M as p}from"./index.a43ccd3c.js";import{B as l}from"./index.3e721026.js";import{C as i}from"./index.009f9ccb.js";import{S as s}from"./index.56db1096.js";import{A as f}from"./AppType.db8276b1.js";import{r as a}from"./index.b82c43fb.js";import{u as m,a as u,_ as v,b as _,c as d}from"./en-US.0b8219db.js";import{w as k,a as b,b as y}from"./utils.d774da76.js";import{d as h}from"./index.9b1139e6.js";import{n as C}from"./index.0a9349fd.js";import"./create.03b31fc7.js";import"./vendor.10bd23ac.js";import"./shared.f8da68a0.js";import"./index.5d3634b8.js";import"./Teleport.f02619e5.js";import"./elements.2a324d45.js";import"./zIndex.bcf143f4.js";import"./teleport.cb83deae.js";import"./index.19abdf8c.js";import"./index.dea20df7.js";import"./components.e000a0b0.js";import"./index.7e6c9d9a.js";import"./lock.c245d2f0.js";var g={alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",offsetRight:"\u53F3\u504F\u79FB",offsetLeft:"\u5DE6\u504F\u79FB",offsetBottom:"\u4E0B\u504F\u79FB",offsetTop:"\u4E0A\u504F\u79FB",events:"\u6CE8\u518C\u4E8B\u4EF6"},O={alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",offsetRight:"Offset Right",offsetLeft:"Offset Left",offsetBottom:"Offset Bottom",offsetTop:"Offset Top",events:"Events"};const{add:c,use:F,pack:x,packs:et,merge:ot}=m(),w=t=>{d(t),F(t)};u("zh-CN",v);u("en-US",_);c("zh-CN",g);c("en-US",O);var B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"var-menu-example"},[e("app-type",[t._v(t._s(t.pack.alignmentMethods))]),e("div",{staticClass:"block-1"},[e("var-menu",{attrs:{show:t.top},on:{"update:show":function(o){t.top=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.top=!0}}},[t._v(t._s(t.pack.topAlignment))])],1)],1),e("div",{staticClass:"block"},[e("var-menu",{attrs:{alignment:"bottom",show:t.bottom},on:{"update:show":function(o){t.bottom=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.bottom=!0}}},[t._v(t._s(t.pack.bottomAlignment))])],1)],1),e("app-type",[t._v(t._s(t.pack.offset))]),e("div",{staticClass:"block-1"},[e("var-menu",{attrs:{"offset-x":72,show:t.offsetX},on:{"update:show":function(o){t.offsetX=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.offsetX=!0}}},[t._v(t._s(t.pack.offsetRight))])],1),e("var-menu",{attrs:{"offset-x":-72,show:t.offsetX1},on:{"update:show":function(o){t.offsetX1=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.offsetX1=!0}}},[t._v(t._s(t.pack.offsetLeft))])],1)],1),e("div",{staticClass:"block-2"},[e("var-menu",{attrs:{"offset-y":36,show:t.offsetY},on:{"update:show":function(o){t.offsetY=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.offsetY=!0}}},[t._v(t._s(t.pack.offsetBottom))])],1),e("var-menu",{attrs:{"offset-y":-36,show:t.offsetY1},on:{"update:show":function(o){t.offsetY1=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.offsetY1=!0}}},[t._v(t._s(t.pack.offsetTop))])],1)],1),e("app-type",[t._v(t._s(t.pack.events))]),e("var-menu",{attrs:{show:t.event},on:{"update:show":function(o){t.event=o},open:t.menuOpen,opened:t.menuOpened,close:t.menuClose,closed:t.menuClosed},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.event=!0}}},[t._v(t._s(t.pack.events))])],1),e("div",{staticStyle:{"margin-bottom":"100px"}})],1)},S=[];const A={name:"MenuExample",components:{VarMenu:p,VarButton:l,VarCell:i,AppType:f},data:()=>({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1,bgColor:"#fff",prevTouchmoveForbid:a.touchmoveForbid}),computed:{pack(){return x.value}},created(){k(this,w),b(this,h,t=>{this.bgColor=t==="darkThemes"?"#272727":"#fff"}),y(this,t=>{t==="pc"&&(a.touchmoveForbid=!1)})},beforeDestroy(){a.touchmoveForbid=this.prevTouchmoveForbid},methods:{menuOpen(){s.info("open")},menuOpened(){s.success("opened")},menuClose(){s.warning("close")},menuClosed(){s.error("closed")}}},r={};var E=C(A,B,S,!1,M,"6c3b7ddf",null,null);function M(t){for(let n in r)this[n]=r[n]}var nt=function(){return E.exports}();export{nt as default};
