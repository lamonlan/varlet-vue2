import{A as k}from"./AppType.db8276b1.js";import{d as m,n as p}from"./create.03b31fc7.js";import{e as n}from"./shared.f8da68a0.js";import{a as x,c as g}from"./relation.9e421618.js";import{n as o}from"./index.0a9349fd.js";import{r as b}from"./elements.2a324d45.js";import{I as C}from"./index.7e6c9d9a.js";import{B as y}from"./index.3e721026.js";import{d as $}from"./index.9b1139e6.js";import{u as w,a as _,_ as I,b as S,c as E}from"./en-US.0b8219db.js";import{w as F,a as B}from"./utils.d774da76.js";import"./vendor.10bd23ac.js";import"./index.19abdf8c.js";import"./index.b82c43fb.js";import"./index.dea20df7.js";import"./components.e000a0b0.js";const M={value:{type:[Array,String,Number]},accordion:{type:Boolean,default:!1},offset:{type:Boolean,default:!0}};var V=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"var-collapse"},[e._t("default")],2)},A=[];const N=m({name:"VarCollapse",mixins:[x("collapse",{childrenKey:"collapseItems"})],props:M,data:()=>({}),computed:{active(){return this.value}},watch:{collapseItems(){p().then(this.resize())},value(){p().then(this.resize())}},methods:{checkValue(){return!this.accordion&&!n(this.value)?(console.error('[Varlet] Collapse: type of prop "value" should be an Array'),!1):this.accordion&&n(this.value)?(console.error('[Varlet] Collapse: type of prop "value" should be a String or Number'),!1):!0},getValue(e,a){return this.checkValue()?a?this.accordion?e:[...this.value,e]:this.accordion?null:this.value.filter(t=>t!==e):null},updateItem(e,a){var s,r,c,u;const t=this.getValue(e,a);(r=(s=this.getListeners()).onInput)==null||r.call(s,t),(u=(c=this.getListeners()).onChange)==null||u.call(c,t)},matchName(){if(this.accordion)return this.collapseItems.find(({name:a})=>this.value===a);const e=this.collapseItems.filter(({name:a})=>a===void 0?!1:this.value.includes(a));return e.length?e:void 0},matchIndex(){return this.accordion?this.collapseItems.find(({index:e,name:a})=>a===void 0?this.value===e:!1):this.collapseItems.filter(({index:e,name:a})=>a===void 0?this.value.includes(e):!1)},resize(){if(!this.checkValue())return;const e=this.matchName()||this.matchIndex();if(this.accordion&&!e||!this.accordion&&!e.length){this.collapseItems.forEach(a=>{a.init(this.accordion,!1)});return}this.collapseItems.forEach(a=>{const t=this.accordion?e===a:e.includes(a);a.init(this.accordion,t)})}}}),d={};var T=o(N,V,A,!1,z,null,null,null);function z(e){for(let a in d)this[a]=d[a]}var l=function(){return T.exports}();l.install=function(e){e.component(l.name,l)};const U={name:{type:[String,Number]},title:{type:String},icon:{type:String,default:"chevron-down"},disabled:{type:Boolean,default:!1}};var D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:{"var-collapse-item":!0,"var-collapse-item__active":e.offset&&e.isShow,"var-collapse-item__disable":e.disabled}},[t("div",{staticClass:"var-collapse-item-header",on:{click:function(s){return e.toggle()}}},[t("div",{staticClass:"var-collapse-item-header__title"},[e._t("title",function(){return[e._v(e._s(e.title))]})],2),t("div",{staticClass:"var-collapse-item-header__icon"},[e._t("icon",function(){return[t("var-icon",{class:{"var-collapse-item-header__icon":!0,"var-collapse-item-header__open":e.isShow&&e.icon==="chevron-down","var-collapse-item-header__disable":e.disabled},attrs:{name:e.icon,transition:250}})]})],2)]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],ref:"contentEl",staticClass:"var-collapse-item-content",on:{transitionend:e.transitionend}},[t("div",{staticClass:"var-collapse-item__wrap"},[e._t("default")],2)])])},P=[];const H=m({name:"VarCollapseItem",mixins:[g("collapse",{parentKey:"collapse",childrenKey:"collapseItems"})],components:{VarIcon:C},props:U,data:()=>({show:!1,isShow:!1}),computed:{offset(){return this.collapse.offset}},watch:{isShow(e){e?this.openPanel():this.closePanel()}},methods:{init(e,a){this.collapse.active===void 0||e&&n(this.collapse.active)||a===this.isShow||(this.isShow=a,this.toggle(!0))},toggle(e){this.disabled||e||this.collapse.updateItem(this.name||this.collapse.index,!this.isShow)},openPanel(){!this.$refs.contentEl||(this.$refs.contentEl.style.height="",this.show=!0,this.$nextTick(()=>{const{offsetHeight:e}=this.$refs.contentEl;this.$refs.contentEl.style.height=0+"px",b(()=>{this.$refs.contentEl.style.height=e+"px"})}))},closePanel(){!this.$refs.contentEl||(this.$refs.contentEl.style.height=0+"px")},transitionend(){this.isShow||(this.show=!1,this.$refs.contentEl.style.height="")}}}),v={};var L=o(H,D,P,!1,j,null,null,null);function j(e){for(let a in v)this[a]=v[a]}var i=function(){return L.exports}();i.install=function(e){e.component(i.name,i)};var K={basicUsage:"\u57FA\u672C\u4F7F\u7528",hideMargin:"\u9690\u85CF\u8FB9\u8DDD",accordionMode:"\u624B\u98CE\u7434\u6A21\u5F0F",disabled:"\u7981\u7528",enable:"\u542F\u7528",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",title:"\u6807\u9898",text:"\u6587\u672C",slotTitle:"\u8FD9\u662F\u6807\u9898",slotContent:"\u8FD9\u662F\u5185\u5BB9"},R={basicUsage:"Basic Usage",hideMargin:"Hide Margin",accordionMode:"Accordion Mode",disabled:"Disabled",enable:"Enable",customContent:"Custom Content",title:"Title",text:"Hello World",slotTitle:"This is a Title",slotContent:"This is a content"};const{add:f,use:q,pack:W,packs:me,merge:_e}=w(),G=e=>{E(e),q(e)};_("zh-CN",I);_("en-US",S);f("zh-CN",K);f("en-US",R);var J=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"var-collapse-example"},[t("div",[t("app-type",[e._v(e._s(e.pack.basicUsage))]),t("var-collapse",{on:{change:e.changeHandle},model:{value:e.value,callback:function(s){e.value=s},expression:"value"}},[t("var-collapse-item",{attrs:{title:e.pack.title,name:"1"}},[e._v(e._s(e.pack.text))]),t("var-collapse-item",{attrs:{title:e.pack.title,name:"2"}},[e._v(e._s(e.pack.text))])],1)],1),t("div",[t("app-type",[e._v(e._s(e.pack.hideMargin))]),t("var-collapse",{attrs:{offset:!1},model:{value:e.value4,callback:function(s){e.value4=s},expression:"value4"}},[t("var-collapse-item",{attrs:{title:e.pack.title,name:"1"}},[e._v(e._s(e.pack.text))]),t("var-collapse-item",{attrs:{title:e.pack.title,name:"2"}},[e._v(e._s(e.pack.text))])],1)],1),t("div",[t("app-type",[e._v(e._s(e.pack.accordionMode))]),t("var-collapse",{attrs:{accordion:"",offset:!1},model:{value:e.value1,callback:function(s){e.value1=s},expression:"value1"}},[t("var-collapse-item",{attrs:{title:e.pack.title,name:"1"}},[e._v(e._s(e.pack.text))]),t("var-collapse-item",{attrs:{title:e.pack.title,name:"2"}},[e._v(e._s(e.pack.text))])],1)],1),t("div",[t("app-type",[e._v(e._s(e.pack.disabled))]),t("var-button",{staticStyle:{"margin-bottom":"8px"},on:{click:function(s){e.disabled=!e.disabled}}},[e._v(" "+e._s(e.disabled?e.pack.enable:e.pack.disabled)+" ")]),t("var-collapse",{model:{value:e.value2,callback:function(s){e.value2=s},expression:"value2"}},[t("var-collapse-item",{attrs:{title:e.pack.title,name:1,disabled:e.disabled}},[e._v(e._s(e.pack.text))]),t("var-collapse-item",{attrs:{title:e.pack.title,name:2,disabled:e.disabled}},[e._v(e._s(e.pack.text))])],1)],1),t("div",[t("app-type",[e._v(e._s(e.pack.customContent))]),t("var-collapse",{model:{value:e.value3,callback:function(s){e.value3=s},expression:"value3"}},[t("var-collapse-item",{attrs:{title:e.pack.slotTitle,name:"1",icon:"account-circle"}},[e._v(e._s(e.pack.text))]),t("var-collapse-item",{attrs:{name:"2"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.pack.slotTitle))]},proxy:!0},{key:"icon",fn:function(){return[e._v("^_^")]},proxy:!0}])},[e._v(" "+e._s(e.pack.slotContent)+" ")])],1)],1)])},O=[];const Q={name:"CollapseExample",components:{VarCollapse:l,VarCollapseItem:i,VarButton:y,AppType:k},data:()=>({disabled:!1,value:["1"],value1:"",value2:[1],value3:["1"],value4:["2"]}),computed:{pack(){return W.value}},created(){F(this,G),B(this,$)},methods:{changeHandle(e){console.log(e)}}},h={};var X=o(Q,J,O,!1,Y,null,null,null);function Y(e){for(let a in h)this[a]=h[a]}var fe=function(){return X.exports}();export{fe as default};
