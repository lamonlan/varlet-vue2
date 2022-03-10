import{A as i}from"./AppType.db8276b1.js";import{B as p}from"./index.3e721026.js";import{C as c}from"./index.ba96ea4b.js";import{r as a}from"./index.b82c43fb.js";import{d as n}from"./index.9b1139e6.js";import{u as l,a as o,_ as F,b as m,c as E}from"./en-US.0b8219db.js";import{w as d,a as C,b as h}from"./utils.d774da76.js";import{n as v}from"./index.0a9349fd.js";import"./index.19abdf8c.js";import"./index.dea20df7.js";import"./shared.f8da68a0.js";import"./create.03b31fc7.js";import"./vendor.10bd23ac.js";import"./components.e000a0b0.js";import"./elements.2a324d45.js";var _={basicUsage:"\u57FA\u672C\u4F7F\u7528",title:"\u98CE\u666F",showSubtitle:"\u663E\u793A\u526F\u6807\u9898",subtitle:"\u516C\u56ED\u91CC\u7684\u98CE\u666F",description:"\u516C\u56ED\u7684\u6811\u6797\u4E5F\u5F88\u7F8E\u3002\u5728\u516C\u56ED\u7684\u5C0F\u5C71\u4E0A\u683D\u6EE1\u4E86\u6811\u6728\uFF0C\u68A7\u6850\u6811\u7684\u53F6\u5B50\u968F\u7740\u65F6\u95F4\u7684\u6D41\u901D\u6162\u6162\u53D8\u9EC4\uFF0C\u7EB7\u7EB7\u98D8\u843D\uFF1B\u67AB\u6811\u7684\u53F6\u5B50\u5374\u53D8\u7EA2\u4E86\uFF0C\u516C\u56ED\u7B3C\u7F69\u5728\u7247\u7247\u7EA2\u4E91\u4E2D\uFF0C\u4E5F\u4F7F\u79CB\u5929\u589E\u6DFB\u4E86\u4E00\u5206\u70ED\u60C5\u3002\u800C\u67CF\u6811\u7684\u53F6\u5B50\u4ECD\u662F\u90A3\u4E48\u9752\u7FE0\u6B32\u6EF4\uFF0C\u4EE4\u4F60\u9676\u9189\u6781\u4E86\u3002\u5C71\u4E0A\u6709\u4E00\u7FA4\u5B69\u5B50\u5728\u5FEB\u4E50\u7684\u5B09\u620F\uFF0C\u4E0D\u65F6\u4F20\u6765\u9635\u9635\u6B22\u7B11\u58F0\uFF0C\u77A7\uFF0C\u4ED6\u4EEC\u73A9\u5F97\u591A\u8D77\u52B2\u5440\uFF0C\u7ED9\u6811\u6797\u589E\u6DFB\u4E86\u6D3B\u529B\u3002",showImage:"\u663E\u793A\u56FE\u7247",useSlot:"\u4F7F\u7528\u63D2\u69FD",button:"\u6DFB\u52A0\u6309\u94AE",showRipple:"\u6C34\u6CE2\u6548\u679C"},b={basicUsage:"Basic Usage",title:"Little Prince",showSubtitle:"Show Subtitle",subtitle:"little prince from",description:"It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.",showImage:"Show Image",useSlot:"Use Slot",button:"Use Button",showRipple:"Ripple Effect"};const{add:s,use:k,pack:B,packs:G,merge:H}=l(),f=u=>{E(u),k(u)};o("zh-CN",F);o("en-US",m);s("zh-CN",_);s("en-US",b);var D=function(){var u=this,e=u.$createElement,t=u._self._c||e;return t("div",{staticClass:"var-card-example"},[t("app-type",[u._v(u._s(u.pack.basicUsage))]),t("var-card",{attrs:{title:u.pack.title,description:u.pack.description}}),t("app-type",[u._v(u._s(u.pack.showSubtitle))]),t("var-card",{attrs:{title:u.pack.title,subtitle:u.pack.subtitle,description:u.pack.description}}),t("app-type",[u._v(u._s(u.pack.showImage))]),t("var-card",{attrs:{title:u.pack.title,subtitle:u.pack.subtitle,description:u.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}}),t("app-type",[u._v(u._s(u.pack.useSlot))]),t("var-card",{attrs:{title:u.pack.title,subtitle:u.pack.subtitle,description:u.pack.description,src:"https://varlet.gitee.io/varlet-ui/cat.jpg"},scopedSlots:u._u([{key:"extra",fn:function(){return[t("var-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"}},[u._v(u._s(u.pack.button))]),t("var-button",{attrs:{type:"warning"}},[u._v(u._s(u.pack.button))])]},proxy:!0}])}),t("app-type",[u._v(u._s(u.pack.showRipple))]),t("var-card",{attrs:{title:u.pack.title,subtitle:u.pack.subtitle,description:u.pack.description,ripple:""}})],1)},w=[];const g={name:"CardExample",components:{VarButton:p,VarCard:c,AppType:i},computed:{pack(){return B.value}},created(){d(this,f),C(this,n);const u=a.touchmoveForbid;h(this,e=>{e==="pc"&&(a.touchmoveForbid=!1)}),this.$on("hook:beforeDestroy",()=>{a.touchmoveForbid=u})}},r={};var y=v(g,D,w,!1,A,null,null,null);function A(u){for(let e in r)this[e]=r[e]}var J=function(){return y.exports}();export{J as default};
