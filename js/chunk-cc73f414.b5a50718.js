(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc73f414"],{"08cc":function(t,e,r){"use strict";var a=r("2e57"),n=r.n(a);n.a},"20a0":function(t,e,r){"use strict";var a=r("e2a6"),n=r.n(a);n.a},"2e57":function(t,e,r){},c24f:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"j",(function(){return l})),r.d(e,"h",(function(){return d})),r.d(e,"d",(function(){return p})),r.d(e,"i",(function(){return f})),r.d(e,"g",(function(){return h})),r.d(e,"k",(function(){return m})),r.d(e,"f",(function(){return g})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return w})),r.d(e,"b",(function(){return b}));r("96cf"),r("ac6a");var a=r("3b8d"),n=r("22b6"),s=r("a18c"),o=r("4360"),i=r("2f14");function c(t){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n["a"].post("project/login",e));case 1:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(t){return n["a"].post("project/login/register",t)}function d(t){return n["a"].post("project/login/getCaptcha",{mobile:t})}function p(t){var e=t.code;return o["a"].dispatch("setCurrentOrganization",t),n["a"].post("project/index/changeCurrentOrganization",{organizationCode:e}).then((function(t){if(Object(i["a"])(t))return o["a"].dispatch("SET_MENU",t.data.menuList),o["a"].dispatch("SET_USER",t.data.member),o["a"].dispatch("windowLoading",!0),setTimeout((function(){var e=t.data.menuList;if(e){var r=s["a"].options.routes;e.forEach((function(t){r[0].children.push(Object(i["b"])(t)),t.children&&t.children.forEach((function(t){r[0].children.push(Object(i["b"])(t)),t.children&&t.children.forEach((function(t){r[0].children.push(Object(i["b"])(t))}))}))})),s["a"].addRoutes(r),o["a"].dispatch("windowLoading",!1)}}),500),Promise.resolve(t)}))}function f(t){return n["a"].post("project/account",t)}function h(t){return n["a"].post("project/account/forbid",{accountCode:t,status:0})}function m(t){return n["a"].post("project/account/resume",{accountCode:t,status:1})}function g(t){var e="project/account/add";return t.code&&(e="project/account/edit"),n["a"].post(e,t)}function v(t,e){return n["a"].post("project/account/auth",{id:t,auth:e})}function w(t){return n["a"].post("project/account/del",{accountCode:t})}function b(t){return n["a"].post("project/login/_checkBindMail",t)}},c6d3:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"main user-layout-register"},[e._m(0),a("a-form",{ref:"formRegister",attrs:{autoFormCreate:function(e){t.form=e},id:"formRegister"}},[a("a-form-item",{attrs:{fieldDecoratorId:"email",fieldDecoratorOptions:{rules:[{required:!0,type:"email",message:"请输入邮箱地址"}],validateTrigger:["change","blur"]}}},[a("a-input",{attrs:{size:"large",type:"text",placeholder:"邮箱"}})],1),a("a-form-item",{attrs:{fieldDecoratorId:"name",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入姓名"}],validateTrigger:["change","blur"]}}},[a("a-input",{attrs:{size:"large",type:"text",placeholder:"姓名"}})],1),a("a-popover",{attrs:{placement:"rightTop",trigger:"click",visible:e.state.passwordLevelChecked}},[a("template",{slot:"content"},[a("div",{style:{width:"240px"}},[a("div",{class:["user-register",e.passwordLevelClass]},[e._v("\n            强度：\n            "),a("span",[e._v(e._s(e.passwordLevelName))])]),a("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),a("a-form-item",{attrs:{fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}}},[a("a-input",{attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"密码须至少6位，且区分大小写"},on:{click:e.handlePasswordInputClick}})],1)],2),a("a-form-item",{attrs:{fieldDecoratorId:"password2",fieldDecoratorOptions:{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}}},[a("a-input",{attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"再次确认您的密码"}})],1),a("a-form-item",{attrs:{fieldDecoratorId:"mobile",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}}},[a("a-input",{attrs:{size:"large",placeholder:"11 位手机号"}},[a("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[a("a-select-option",{attrs:{value:"+86"}},[e._v("+86")])],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",{attrs:{fieldDecoratorId:"captcha",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}}},[a("a-input",{attrs:{size:"large",type:"text",placeholder:"验证码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"safety-certificate"},slot:"prefix"})],1)],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),a("a-form-item",[a("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._v("注册")]),a("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",[r("span",[t._v("注册")])])}],s=r("c24f"),o=r("2f14"),i=r("97a8"),c={0:"低",1:"低",2:"中",3:"强"},u={0:"error",1:"error",2:"warning",3:"success"},l={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},d={name:"Register",components:{},data:function(){return{form:null,state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return u[this.state.passwordLevel]},passwordLevelName:function(){return c[this.state.passwordLevel]},passwordLevelColor:function(){return l[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(t,e,r){var a=0;/[0-9]/.test(e)&&a++,/[a-zA-Z]/.test(e)&&a++,/[^0-9a-zA-Z_]/.test(e)&&a++,this.state.passwordLevel=a,this.state.percent=30*a,a>=2?(a>=3&&(this.state.percent=100),r()):(0===a&&(this.state.percent=10),r(new Error("密码强度不够")))},handlePasswordCheck:function(t,e,r){var a=this.form.getFieldValue("password");void 0===e&&r(new Error("请输入密码")),e&&a&&e.trim()!==a.trim()&&r(new Error("两次密码不一致")),r()},handlePhoneCheck:function(t,e,r){r()},handlePasswordInputClick:function(){this.state.passwordLevelChecked=!0},handleSubmit:function(){var t=this;this.form.validateFields((function(e,r){if(!e){t.registerBtn=!0;var a=t.form.getFieldsValue();a.password=md5(a.password),a.password2=md5(a.password2),Object(s["j"])(a).then((function(e){if(t.registerBtn=!1,!Object(o["a"])(e))return!1;Object(i["b"])({title:"提示",msg:"注册成功，请登陆"},"notification","success"),t.$router.push({name:"login"})}))}}))},getCaptcha:function(t){var e=this;t.preventDefault();var r=this;this.form.validateFields(["mobile"],{force:!0},(function(t,a){if(!t){e.state.smsSendBtn=!0;var n=window.setInterval((function(){r.state.time--<=0&&(r.state.time=60,r.state.smsSendBtn=!1,window.clearInterval(n))}),1e3),i=e.$message.loading("验证码发送中..",0);Object(s["h"])(a.mobile).then((function(t){if(e.$message.destroy(),!Object(o["a"])(t))return!1;var r="验证码获取成功";t.data&&(r+="，您的验证码为："+t.data),e.$notification["success"]({message:"提示",description:r,duration:8,placement:"bottomLeft"})})).catch((function(t){setTimeout(i,1),clearInterval(n),e.state.time=60,e.state.smsSendBtn=!1,e.requestFailed(t)}))}}))},requestFailed:function(t){this.$notification["error"]({message:"错误",description:((t.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(t){}}},p=d,f=(r("20a0"),r("08cc"),r("2877")),h=Object(f["a"])(p,a,n,!1,null,null,null);e["default"]=h.exports},e2a6:function(t,e,r){}}]);