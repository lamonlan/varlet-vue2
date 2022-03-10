import{d as p}from"./create.03b31fc7.js";import{V as m}from"./validation.7606bf3f.js";import{a as d}from"./relation.9e421618.js";import{n as l}from"./index.0a9349fd.js";import{I as f}from"./index.4f073d7c.js";import{S as v}from"./index.55c40e44.js";import{O as k}from"./index.3e5d8223.js";import{C as g}from"./index.b7a52823.js";import{C as _}from"./index.478f5fe1.js";import{R as b,a as h}from"./index.f0688d67.js";import{B as C}from"./index.3e721026.js";import{S as E}from"./index.5b91504b.js";import{S as y}from"./index.2dd4dc2b.js";import{U as D}from"./index.97fa54c3.js";import{C as F}from"./index.e7e1baf1.js";import{R as x}from"./index.544a1df7.js";import{A as M}from"./AppType.db8276b1.js";import{r as o}from"./index.b82c43fb.js";import{d as $}from"./index.9b1139e6.js";import{b as w,w as B,a as V}from"./utils.d774da76.js";import{u as A,a as c,_ as U,b as S,c as I}from"./en-US.0b8219db.js";import"./vendor.10bd23ac.js";import"./shared.f8da68a0.js";import"./index.7e6c9d9a.js";import"./elements.2a324d45.js";import"./index.a43ccd3c.js";import"./index.5d3634b8.js";import"./Teleport.f02619e5.js";import"./zIndex.bcf143f4.js";import"./teleport.cb83deae.js";import"./index.19abdf8c.js";import"./index.40e83179.js";import"./components.e000a0b0.js";import"./index.dea20df7.js";import"./index.0c749892.js";import"./lock.c245d2f0.js";import"./index.3336b4f6.js";import"./index.cc0c92e1.js";import"./index.8e7d81d0.js";const R={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}};var T=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"var-form"},[e._t("default")],2)},P=[];const z=p({name:"VarForm",mixins:[m,d("form",{childrenKey:"formItems"})],props:R,methods:{async validate(){return(await Promise.all(this.formItems.map(({validate:r})=>r()))).every(r=>r===!0)},reset(){this.formItems.forEach(({reset:e})=>e())},resetValidation(){this.formItems.forEach(({resetValidation:e})=>e())}}}),n={};var N=l(z,T,P,!1,G,null,null,null);function G(e){for(let r in n)this[r]=n[r]}var s=function(){return N.exports}();s.install=function(e){e.component(s.name,s)};var O={example:"\u8868\u5355\u793A\u4F8B",username:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",usernameMessage:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",password:"\u8BF7\u8F93\u5165\u5BC6\u7801",passwordMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801",department:"\u8BF7\u9009\u62E9\u90E8\u95E8",departmentMessage:"\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",departmentUnit:"\u90E8",group:"\u8BF7\u9009\u62E9\u7EC4\u7EC7",groupMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7",groupUnit:"\u7EC4",genderMessage:"\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B",male:"\u7537",female:"\u5973",rateMessage:"\u5FC5\u987B\u5927\u4E8E2",likeMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D",licenseMessage:"\u60A8\u5FC5\u987B\u5F00\u542F",countMessage:"\u5FC5\u987B\u5927\u4E8E10",rangeMessage:"\u5FC5\u987B\u5927\u4E8E10",filesMessage:"\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",controller:"\u8868\u5355\u63A7\u5236",reset:"\u6E05\u7A7A\u8868\u5355",resetValidation:"\u6E05\u7A7A\u9A8C\u8BC1",validate:"\u89E6\u53D1\u9A8C\u8BC1",disabled:"\u8868\u5355\u7981\u7528",readonly:"\u8868\u5355\u53EA\u8BFB"},j={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"};const{add:i,use:L,pack:K,packs:Te,merge:Pe}=A(),Y=e=>{I(e),L(e)};c("zh-CN",U);c("en-US",S);i("zh-CN",O);i("en-US",j);var q=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"example"},[t("app-type",[e._v(e._s(e.pack.example))]),t("var-form",{ref:"form",attrs:{disabled:e.disabled,readonly:e.readonly}},[t("var-input",{staticClass:"mb",attrs:{placeholder:e.pack.username,rules:[function(a){return!!a||e.pack.usernameMessage}]},model:{value:e.formData.username,callback:function(a){e.$set(e.formData,"username",a)},expression:"formData.username"}}),t("var-input",{staticClass:"mb",attrs:{type:"password",placeholder:e.pack.password,rules:[function(a){return!!a||e.pack.passwordMessage}]},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}}),t("var-select",{staticClass:"mb",attrs:{placeholder:e.pack.department,rules:[function(a){return!!a||e.pack.departmentMessage}]},model:{value:e.formData.department,callback:function(a){e.$set(e.formData,"department",a)},expression:"formData.department"}},[t("var-option",{attrs:{label:""+e.pack.eat+e.pack.departmentUnit}}),t("var-option",{attrs:{label:""+e.pack.sleep+e.pack.departmentUnit}}),t("var-option",{attrs:{label:""+e.pack.play+e.pack.departmentUnit}})],1),t("var-select",{staticClass:"mb",attrs:{multiple:"",placeholder:e.pack.group,rules:[function(a){return a.length>=1||e.pack.groupMessage}]},model:{value:e.formData.group,callback:function(a){e.$set(e.formData,"group",a)},expression:"formData.group"}},[t("var-option",{attrs:{label:""+e.pack.eat+e.pack.groupUnit}}),t("var-option",{attrs:{label:""+e.pack.sleep+e.pack.groupUnit}}),t("var-option",{attrs:{label:""+e.pack.play+e.pack.groupUnit}})],1),t("var-radio-group",{staticClass:"mb",attrs:{rules:[function(a){return!!a||e.pack.genderMessage}]},model:{value:e.formData.gender,callback:function(a){e.$set(e.formData,"gender",a)},expression:"formData.gender"}},[t("var-radio",{attrs:{"checked-value":1}},[e._v(e._s(e.pack.male))]),t("var-radio",{attrs:{"checked-value":2}},[e._v(e._s(e.pack.female))])],1),t("var-checkbox-group",{staticClass:"mb",attrs:{rules:[function(a){return a.length>0||e.pack.likeMessage}]},model:{value:e.formData.like,callback:function(a){e.$set(e.formData,"like",a)},expression:"formData.like"}},[t("var-checkbox",{attrs:{"checked-value":1}},[e._v(e._s(e.pack.eat))]),t("var-checkbox",{attrs:{"checked-value":2}},[e._v(e._s(e.pack.sleep))]),t("var-checkbox",{attrs:{"checked-value":3}},[e._v(e._s(e.pack.play))])],1),t("var-rate",{staticClass:"mb",attrs:{rules:[function(a){return a>=3||e.pack.rateMessage}]},model:{value:e.formData.score,callback:function(a){e.$set(e.formData,"score",a)},expression:"formData.score"}}),t("div",{staticClass:"row mb"},[t("var-switch",{attrs:{rules:[function(a){return!!a||e.pack.licenseMessage}]},model:{value:e.formData.license,callback:function(a){e.$set(e.formData,"license",a)},expression:"formData.license"}})],1),t("div",{staticClass:"row mb"},[t("var-counter",{attrs:{rules:[function(a){return a>10||e.pack.countMessage}]},model:{value:e.formData.count,callback:function(a){e.$set(e.formData,"count",a)},expression:"formData.count"}})],1),t("var-slider",{staticClass:"mb",attrs:{rules:[function(a){return a>10||e.pack.rangeMessage}]},model:{value:e.formData.range,callback:function(a){e.$set(e.formData,"range",a)},expression:"formData.range"}}),t("var-uploader",{staticClass:"mb",attrs:{rules:[function(a){return a.length>=1||e.pack.filesMessage}]},model:{value:e.formData.files,callback:function(a){e.$set(e.formData,"files",a)},expression:"formData.files"}})],1),t("app-type",[e._v(e._s(e.pack.controller))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"danger"},on:{click:function(a){return e.$refs.form.reset()}}},[e._v(e._s(e.pack.reset))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"warning"},on:{click:function(a){return e.$refs.form.resetValidation()}}},[e._v(e._s(e.pack.resetValidation))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"success"},on:{click:function(a){return e.$refs.form.validate()}}},[e._v(e._s(e.pack.validate))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"info"},on:{click:function(a){e.disabled=!e.disabled}}},[e._v(e._s(e.pack.disabled))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"primary"},on:{click:function(a){e.readonly=!e.readonly}}},[e._v(e._s(e.pack.readonly))]),t("div",{staticClass:"space"})],1)},H=[];const J={name:"FormExample",components:{VarForm:s,VarInput:f,VarSelect:v,VarCheckboxGroup:g,VarCheckbox:_,VarRadioGroup:b,VarRadio:h,VarOption:k,VarButton:C,VarSlider:y,VarSwitch:E,VarUploader:D,VarCounter:F,VarRate:x,AppType:M},data:()=>({formData:{username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]},disabled:!1,readonly:!1}),computed:{pack(){return K.value}},created(){const e=o.touchmoveForbid;w(this,r=>{r==="pc"&&(o.touchmoveForbid=!1)}),this.$on("hook:beforeDestroy",()=>{o.touchmoveForbid=e}),B(this,r=>{var t;Y(r),(t=this.$refs.form)==null||t.reset()}),V(this,$)}},u={};var Q=l(J,q,H,!1,W,"34c10648",null,null);function W(e){for(let r in u)this[r]=u[r]}var ze=function(){return Q.exports}();export{ze as default};
