import{V as d,F as c}from"./validation.7606bf3f.js";import{I as p}from"./index.7e6c9d9a.js";import{d as h}from"./create.03b31fc7.js";import{b as v}from"./shared.f8da68a0.js";import{c as f}from"./relation.9e421618.js";import{n as m}from"./index.0a9349fd.js";function g(e){return["text","password","number"].includes(e)}const _={value:{type:String},type:{type:String,default:"text",validator:g},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array}};var y=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"var-input var--box",class:[e.disabled?"var-input--disabled":null],on:{click:e.handleClick}},[t("div",{staticClass:"var-input__controller",class:[e.isFocus?"var-input--focus":null,e.errorMessage?"var-input--error":null,e.formDisabled||e.disabled?"var-input--disabled":null],style:{color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}},[t("div",{staticClass:"var-input__icon",class:[e.hint?null:"var-input--non-hint"]},[e._t("prepend-icon")],2),t("div",{staticClass:"var-input__wrap",class:[e.hint?null:"var-input--non-hint"]},[e.type==="password"?t("input",{staticClass:"var-input__autocomplete"}):e._e(),e.textarea?t("textarea",{ref:"el",staticClass:"var-input__input var-input--textarea",class:[e.formDisabled||e.disabled?"var-input--disabled":null,e.errorMessage?"var-input--caret-error":null],style:{color:e.textColor,caretColor:e.errorMessage?null:e.focusColor,resize:e.resize?"vertical":"none"},attrs:{autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,maxlength:e.maxlength,rows:e.rows},domProps:{value:e.value},on:{focus:e.handleFocus,blur:e.handleBlur,input:e.handleInput,change:e.handleChange}}):t("input",{ref:"el",staticClass:"var-input__input",class:[e.formDisabled||e.disabled?"var-input--disabled":null,e.errorMessage?"var-input--caret-error":null],style:{color:e.textColor,caretColor:e.errorMessage?null:e.focusColor},attrs:{autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,maxlength:e.maxlength},domProps:{value:e.value},on:{focus:e.handleFocus,blur:e.handleBlur,input:e.handleInput,change:e.handleChange}}),t("label",{staticClass:"var--ellipsis",class:[e.isFocus?"var-input--focus":null,e.errorMessage?"var-input--error":null,e.textarea?"var-input__textarea-placeholder":"var-input__placeholder",e.computePlaceholderState(),e.hint?null:"var-input--placeholder-non-hint"],style:{color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor},attrs:{for:e.id}},[e._v(" "+e._s(e.placeholder)+" ")])]),t("div",{staticClass:"var-input__icon",class:[e.hint?null:"var-input--non-hint"]},[e._t("append-icon",function(){return[e.clearable&&!e.isEmpty(e.value)?t("var-icon",{staticClass:"var-input__clear-icon",attrs:{"var-input-cover":"",name:"close-circle",size:"14px"},on:{click:e.handleClear}}):e._e()]})],2)]),e.line?t("div",{staticClass:"var-input__line",class:[e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null],style:{background:e.errorMessage?void 0:e.blurColor}},[t("div",{staticClass:"var-input__dot",class:[e.isFocus?"var-input--spread":null,e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null],style:{background:e.errorMessage?void 0:e.focusColor}})]):e._e(),t("var-form-details",{attrs:{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText}})],1)},b=[];const C=h({name:"VarInput",mixins:[d,f("form",{parentKey:"form",childrenKey:"formItems"})],components:{VarIcon:p,VarFormDetails:c},props:_,data(){return{id:`var-input-${this._uid}`,isFocus:!1}},computed:{maxlengthText(){const{maxlength:e,value:r}=this;return e?this.isEmpty(r)?`0 / ${e}`:`${String(r).length} / ${e}`:""},formReadonly(){var e;return(e=this.form)==null?void 0:e.readonly},formDisabled(){var e;return(e=this.form)==null?void 0:e.disabled}},methods:{reset(){var e,r;(r=(e=this.getListeners()).onInput)==null||r.call(e,""),this.resetValidation()},validate(){this._validate(this.rules,this.value)},focus(){this.$refs.el.focus()},blur(){this.$refs.el.blur()},isEmpty:v,validateWithTrigger(e){this.$nextTick(()=>{const{validateTrigger:r,rules:t,value:a}=this;this._validateWithTrigger(r,e,t,a)})},computePlaceholderState(){const{hint:e,value:r}=this;if(!e&&!this.isEmpty(r))return"var-input--placeholder-hidden";if(e&&(!this.isEmpty(r)||this.isFocus))return"var-input--placeholder-hint"},handleFocus(e){var r,t;this.isFocus=!0,(t=(r=this.getListeners()).onFocus)==null||t.call(r,e),this.validateWithTrigger("onFocus")},handleBlur(e){var r,t;this.isFocus=!1,(t=(r=this.getListeners()).onBlur)==null||t.call(r,e),this.validateWithTrigger("onBlur")},handleInput(e){var t,a;const{value:r}=e.target;(a=(t=this.getListeners()).onInput)==null||a.call(t,r),this.validateWithTrigger("onInput")},handleChange(e){var t,a;const{value:r}=e.target;(a=(t=this.getListeners()).onChange)==null||a.call(t,r,e),this.validateWithTrigger("onChange")},handleClear(){var n,o;const{disabled:e,readonly:r,clearable:t,getListeners:a}=this,{onInput:l,onClear:s}=a();((n=this.form)==null?void 0:n.disabled)||((o=this.form)==null?void 0:o.readonly)||e||r||!t||(l==null||l(""),s==null||s(""),this.validateWithTrigger("onClear"))},handleClick(e){var a,l,s;const{disabled:r,getListeners:t}=this;((a=this.form)==null?void 0:a.disabled)||r||((s=(l=t()).onClick)==null||s.call(l,e),this.validateWithTrigger("onClick"))}}}),u={};var x=m(C,y,b,!1,F,null,null,null);function F(e){for(let r in u)this[r]=u[r]}var i=function(){return x.exports}();i.install=function(e){e.component(i.name,i)};export{i as I};
