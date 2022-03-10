import{A as o}from"./AppType.db8276b1.js";import{S as i}from"./index.2dd4dc2b.js";import{d as n}from"./index.9b1139e6.js";import{u as c,a as t,_ as p,b as d,c as m}from"./en-US.0b8219db.js";import{w as _,a as b}from"./utils.d774da76.js";import{n as f}from"./index.0a9349fd.js";import"./create.03b31fc7.js";import"./vendor.10bd23ac.js";import"./shared.f8da68a0.js";import"./elements.2a324d45.js";import"./validation.7606bf3f.js";import"./relation.9e421618.js";var k={basicUsage:"\u57FA\u672C\u4F7F\u7528",stepSize:"\u6307\u5B9A\u6B65\u957F",dualThumb:"\u53CC\u6ED1\u5757",disable:"\u7981\u7528",readonly:"\u53EA\u8BFB",sliderSize:"\u4E0D\u540C\u5927\u5C0F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",showLabel:"\u663E\u793A\u6807\u7B7E",customBtn:"\u81EA\u5B9A\u4E49\u6309\u94AE",validateValue:"\u503C\u7684\u6821\u9A8C"},h={basicUsage:"Basic Usage",stepSize:"Step Size",dualThumb:"Dual thumb",disable:"Disable",readonly:"Readonly",sliderSize:"Slider Size",customStyle:"Custom Style",showLabel:"Show Label",customBtn:"Custom Button",validateValue:"Validate Value"};const{add:r,use:y,pack:S,packs:j,merge:q}=c(),x=e=>{m(e),y(e)};t("zh-CN",p);t("en-US",d);r("zh-CN",k);r("en-US",h);var C=function(){var e=this,u=e.$createElement,a=e._self._c||u;return a("div",{staticClass:"var-slider-example"},[a("div",[a("app-type",[e._v(e._s(e.pack.basicUsage))]),a("var-slider",{model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.stepSize))]),a("var-slider",{attrs:{step:"10"},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.dualThumb))]),a("var-slider",{attrs:{range:"","label-visible":"always"},on:{change:e.handleChange},model:{value:e.value1,callback:function(l){e.value1=l},expression:"value1"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.disable))]),a("var-slider",{attrs:{disabled:""},model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.readonly))]),a("var-slider",{attrs:{readonly:""},model:{value:e.value3,callback:function(l){e.value3=l},expression:"value3"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.sliderSize))]),a("var-slider",{attrs:{"track-height":"4","thumb-size":"8",range:""},model:{value:e.value10,callback:function(l){e.value10=l},expression:"value10"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.customStyle))]),a("var-slider",{attrs:{"label-color":"purple","active-color":"#e0732c","track-color":"#3a68b4","thumb-color":"#e25241","label-text-color":"#ededed"},model:{value:e.value4,callback:function(l){e.value4=l},expression:"value4"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.customBtn))]),a("var-slider",{attrs:{range:"","active-color":"#52af77"},scopedSlots:e._u([{key:"button",fn:function(l){var v=l.currentValue;return[a("div",{staticClass:"slider-example_block"},[e._v(e._s(v))])]}}]),model:{value:e.value9,callback:function(l){e.value9=l},expression:"value9"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.showLabel))]),a("var-slider",{attrs:{"label-visible":"never"},model:{value:e.value5,callback:function(l){e.value5=l},expression:"value5"}}),a("var-slider",{model:{value:e.value6,callback:function(l){e.value6=l},expression:"value6"}}),a("var-slider",{attrs:{"label-visible":"always"},model:{value:e.value7,callback:function(l){e.value7=l},expression:"value7"}})],1),a("div",[a("app-type",[e._v(e._s(e.pack.validateValue))]),a("var-slider",{attrs:{rules:[function(l){return l>35||"error message"}]},model:{value:e.value8,callback:function(l){e.value8=l},expression:"value8"}})],1)])},g=[];const z={name:"SliderExample",components:{VarSlider:i,AppType:o},data:()=>({value:3,value1:[24,50],value2:25,value3:40,value4:20,value5:20,value6:70,value7:50,value8:20,value9:[5,38],value10:[7,64]}),computed:{pack(){return S.value}},created(){_(this,x),b(this,n)},methods:{handleChange(e){console.log(e)}}},s={};var A=f(z,C,g,!1,B,"174ff405",null,null);function B(e){for(let u in s)this[u]=s[u]}var G=function(){return A.exports}();export{G as default};
