import{d as c}from"./create.03b31fc7.js";import{t as _}from"./elements.2a324d45.js";import{t as p}from"./shared.f8da68a0.js";import{n as o}from"./index.0a9349fd.js";import{B as v}from"./index.3e721026.js";import{A as m}from"./AppType.db8276b1.js";import{d as f}from"./index.9b1139e6.js";import{w as g,a as k}from"./utils.d774da76.js";import{u as y,a as i,_ as h,b as C,c as S}from"./en-US.0b8219db.js";import"./vendor.10bd23ac.js";import"./index.19abdf8c.js";import"./index.b82c43fb.js";import"./index.dea20df7.js";import"./components.e000a0b0.js";const w={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}};var x=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"var--box var-skeleton"},[e.loading?e._e():t("div",{staticClass:"var-skeleton__data"},[e._t("default")],2),e.loading&&!e.fullscreen?t("div",{staticClass:"var-skeleton__content"},[e.card?t("div",{staticClass:"var-skeleton__card",style:{height:e.toSizeUnit(e.cardHeight)}},[t("div",{staticClass:"var-skeleton--animation"})]):e._e(),t("div",{staticClass:"var-skeleton__article"},[e.avatar?t("div",{staticClass:"var-skeleton__avatar",style:{width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)}},[t("div",{staticClass:"var-skeleton--animation"})]):e._e(),t("div",{staticClass:"var-skeleton__section"},[e.title?t("div",{staticClass:"var-skeleton__title",style:{width:e.toSizeUnit(e.titleWidth)}},[t("div",{staticClass:"var-skeleton--animation"})]):e._e(),e._l(e.toNumber(e.rows),function(u,d){return t("div",{key:u,staticClass:"var-skeleton__row",style:{width:e.toSizeUnit(e.rowsWidth[d])}},[t("div",{staticClass:"var-skeleton--animation"})])})],2)])]):e._e(),e.loading&&e.fullscreen?t("div",{staticClass:"var-skeleton__fullscreen",style:{zIndex:e.toNumber(e.fullscreenZIndex)}},[t("div",{staticClass:"var-skeleton--animation"})]):e._e()])},A=[];const F=c({name:"VarSkeleton",props:w,methods:{toSizeUnit:_,toNumber:p}}),l={};var b=o(F,x,A,!1,z,null,null,null);function z(e){for(let a in l)this[a]=l[a]}var s=function(){return b.exports}();s.install=function(e){e.component(s.name,s)};var D={basicUsage:"\u57FA\u672C\u4F7F\u7528",displayTitle:"\u663E\u793A\u6807\u9898",customRowsHeight:"\u81EA\u5B9A\u4E49\u6BB5\u843D\u9AD8\u5EA6",displayAvatar:"\u663E\u793A\u5934\u50CF",displayCard:"\u663E\u793A\u5361\u7247",fullscreenMode:"\u5168\u5C4F\u6A21\u5F0F",toggleFullscreenMode:"\u5207\u6362\u5168\u5C4F\u6A21\u5F0F",loadingData:"\u52A0\u8F7D\u7684\u6570\u636E"},U={basicUsage:"Basic Usage",displayTitle:"Display Title",customRowsHeight:"Custom Row Heights",displayAvatar:"Display Avatar",displayCard:"Display Card",fullscreenMode:"Fullscreen Mode",toggleFullscreenMode:"Toggle Fullscreen Mode",loadingData:"Loading Data"};const{add:r,use:N,pack:B,packs:Y,merge:ee}=y(),M=e=>{S(e),N(e)};i("zh-CN",h);i("en-US",C);r("zh-CN",D);r("en-US",U);var E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"var-skeleton-example"},[t("app-type",[e._v(e._s(e.pack.basicUsage))]),t("var-skeleton",{attrs:{loading:e.loading}},[e._v(e._s(e.pack.loadingData))]),t("app-type",[e._v(e._s(e.pack.displayTitle))]),t("var-skeleton",{attrs:{title:"",loading:e.loading}},[e._v(e._s(e.pack.loadingData))]),t("app-type",[e._v(e._s(e.pack.customRowsHeight))]),t("var-skeleton",{attrs:{title:"",rows:3,loading:e.loading,"rows-width":["200px","100px","50px"]}},[e._v(" "+e._s(e.pack.loadingData)+" ")]),t("app-type",[e._v(e._s(e.pack.displayAvatar))]),t("var-skeleton",{attrs:{title:"",avatar:"",rows:3,loading:e.loading}},[e._v(" "+e._s(e.pack.loadingData)+" ")]),t("app-type",[e._v(e._s(e.pack.displayCard))]),t("var-skeleton",{attrs:{title:"",avatar:"",card:"",rows:3,loading:e.loading}},[e._v(" "+e._s(e.pack.loadingData)+" ")]),t("app-type",[e._v(e._s(e.pack.fullscreenMode))]),t("var-button",{staticClass:"button",attrs:{type:"danger"},on:{click:e.fullscreen}},[e._v(" "+e._s(e.pack.toggleFullscreenMode)+" ")]),t("var-skeleton",{attrs:{fullscreen:"",loading:e.fullscreenLoading}})],1)},$=[];const L={name:"SkeletonExample",components:{VarSkeleton:s,VarButton:v,AppType:m},data:()=>({loading:!0,fullscreenLoading:!1}),computed:{pack(){return B.value}},created(){g(this,M),k(this,f)},methods:{fullscreen(){this.fullscreenLoading=!0,setTimeout(()=>{this.fullscreenLoading=!1},2e3)}}},n={};var T=o(L,E,$,!1,H,"043df8c0",null,null);function H(e){for(let a in n)this[a]=n[a]}var te=function(){return T.exports}();export{te as default};
