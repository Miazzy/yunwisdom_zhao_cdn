(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cf5adf0"],{"8ccb":function(t,e,a){},af47:function(t,e,a){"use strict";var i=a("e80f"),s=a.n(i);s.a},bd87:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-setting"},[a("div",{staticClass:"layout-item left"},[a("div",{staticClass:"left-content"},[a("div",{staticClass:"search-type"},[a("a-menu",{attrs:{mode:"inline",selectedKeys:t.keys},on:{click:t.menuClick}},[a("a-menu-item",{key:"base"},[a("span",[t._v("基本设置")])]),a("a-menu-item",{key:"security"},[a("span",[t._v("安全设置")])])],1)],1)])])])},s=[],n={name:"accountSetting",props:{keys:{type:Array,default:function(){return["base"]}}},methods:{menuClick:function(t){var e=t.key,a="";switch(e){case"base":a="/account/setting/base";break;case"security":a="/account/setting/security"}this.$router.push(a)}}},r=n,o=(a("af47"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,null,null);e["default"]=l.exports},d8c9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"account-setting-security"},[i("wrapper-content",{attrs:{showHeader:!1}},[i("div",{staticClass:"setting-content"},[i("account-setting",{attrs:{keys:["security"]}}),i("div",{staticClass:"layout-item right"},[i("div",{staticClass:"setting-info-title"},[i("span",[e._v("安全设置")])]),i("div",{staticClass:"setting-info"},[i("div",{staticClass:"setting-info-content"},[i("div",{staticClass:"ant-list ant-list-split"},[i("div",{staticClass:"ant-spin-nested-loading"},[i("div",{staticClass:"ant-spin-container"},[i("div",{staticClass:"ant-list-item"},[i("div",{staticClass:"ant-list-item-meta"},[i("div",{staticClass:"ant-list-item-meta-content"},[i("h4",{staticClass:"ant-list-item-meta-title"},[i("a",[e._v("账户密码")])]),i("div",{staticClass:"ant-list-item-meta-description"},[i("span",[i("span",{staticClass:"security-list-description"},[e._v("当前密码强度 : 强")])])])])]),i("ul",{staticClass:"ant-list-item-action"},[i("li",{on:{click:e.editPassword}},[i("a",[e._v("修改")])])])]),i("div",{staticClass:"ant-list-item"},[i("div",{staticClass:"ant-list-item-meta"},[i("div",{staticClass:"ant-list-item-meta-content"},[i("h4",{staticClass:"ant-list-item-meta-title"},[i("a",[e._v("手机账号")])]),i("div",{staticClass:"ant-list-item-meta-description"},[i("span",[i("span",{staticClass:"security-list-description"},[e.userInfo.mobile?i("span",[e._v("已绑定手机 : "+e._s(e.userInfo.mobile))]):i("span",[e._v("未绑定手机")])])])])])]),i("ul",{staticClass:"ant-list-item-action"},[i("li",{on:{click:e.editMobile}},[i("a",[e.userInfo.mobile?i("span",[e._v("修改")]):i("span",[e._v("绑定")])])])])]),i("div",{staticClass:"ant-list-item"},[i("div",{staticClass:"ant-list-item-meta"},[i("div",{staticClass:"ant-list-item-meta-content"},[i("h4",{staticClass:"ant-list-item-meta-title"},[i("a",[e._v("邮箱帐号")])]),i("div",{staticClass:"ant-list-item-meta-description"},[i("span",[i("span",{staticClass:"security-list-description"},[e.userInfo.email?i("span",[e._v("已绑定邮箱 : "+e._s(e.userInfo.email))]):i("span",[e._v("未绑定邮箱")])])])])])]),i("ul",{staticClass:"ant-list-item-action"},[i("li",{on:{click:e.editMail}},[i("a",[e.userInfo.email?i("span",[e._v("修改")]):i("span",[e._v("绑定")])])])])]),i("div",{staticClass:"ant-list-item"},[i("div",{staticClass:"ant-list-item-meta"},[i("div",{staticClass:"ant-list-item-meta-content"},[i("h4",{staticClass:"ant-list-item-meta-title"},[i("a",[e._v("钉钉账号")])]),i("div",{staticClass:"ant-list-item-meta-description"},[i("span",[i("span",{staticClass:"security-list-description"},[e.userInfo.dingtalk_unionid?i("span",[e._v("已绑定")]):i("span",[e._v("未绑定钉钉账号")])])])])])]),i("ul",{staticClass:"ant-list-item-action"},[e.userInfo.dingtalk_unionid?i("li",{on:{click:e.unbindDingtalk}},[i("a",[e._v("解除绑定")])]):i("li",{on:{click:e.bindDingtalk}},[i("a",[e._v("绑定")])])])])])])])])])])],1)]),i("a-modal",{attrs:{width:385,title:e.passwordInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:e.passwordInfo.modalStatus,callback:function(t){e.$set(e.passwordInfo,"modalStatus",t)},expression:"passwordInfo.modalStatus"}},[i("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticStyle:{"margin-bottom":"12px"},attrs:{message:e.errorTips,type:"error"}}),i("a-form",{attrs:{layout:"vertical",form:e.form,autoFormCreate:function(e){t.form=e},hideRequiredMark:""},on:{submit:function(t){return t.preventDefault(),e.handlePasswordSubmit(t)}}},[i("a-form-item",{attrs:{label:"原密码"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入原密码"}]}],expression:"[\n            'password',\n            {rules: [{required: true, message: '请输入原密码'}]},\n          ]"}],attrs:{type:"password"}})],1),i("a-form-item",{attrs:{label:"新密码"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["newPassword",{rules:[{required:!0,message:"请输入新密码"}]}],expression:"[\n            'newPassword',\n            {rules: [{required: true, message: '请输入新密码'}]},\n          ]"}],attrs:{type:"password"}})],1),i("a-form-item",{attrs:{label:"确认新密码"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmPassword",{rules:[{required:!0,message:"请确认新密码"}]}],expression:"[\n            'confirmPassword',\n            {rules: [{required: true, message: '请确认新密码'}]},\n          ]"}],attrs:{type:"password"}})],1),i("a-form-item",[i("a-button",{attrs:{type:"primary",htmlType:"submit",block:"",size:"large"}},[e._v("保存")])],1)],1)],1),i("a-modal",{staticClass:"mobile-modal",attrs:{width:385,title:e.mobileInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:e.mobileInfo.modalStatus,callback:function(t){e.$set(e.mobileInfo,"modalStatus",t)},expression:"mobileInfo.modalStatus"}},[i("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticStyle:{"margin-bottom":"12px"},attrs:{message:e.errorTips,type:"error"}}),i("a-form",{attrs:{layout:"vertical",form:e.mobileForm,hideRequiredMark:""},on:{submit:function(t){return t.preventDefault(),e.handleMobileSubmit(t)}}},[i("a-form-item",[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,pattern:/^1[34578]\d{9}$/,message:"请输入正确的手机号"}],validateTrigger:"change"}],expression:"[\n            'mobile',\n            {\n              rules: [\n                {\n                  required: true,\n                  pattern: /^1[34578]\\d{9}$/,\n                  message: '请输入正确的手机号',\n                },\n              ],\n              validateTrigger: 'change',\n            },\n          ]"}],attrs:{size:"large",type:"text",placeholder:"手机号"}},[i("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),i("a-row",{attrs:{gutter:16}},[i("a-col",{staticClass:"gutter-row",attrs:{span:16}},[i("a-form-item",[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"[\n                'captcha',\n                {\n                  rules: [{required: true, message: '请输入验证码'}],\n                  validateTrigger: 'blur',\n                },\n              ]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[i("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),i("a-col",{staticClass:"gutter-row",attrs:{span:8}},[i("a-button",{staticClass:"getCaptcha",attrs:{size:"large",tabindex:"-1",disabled:e.mobileInfo.state.smsSendBtn},domProps:{textContent:e._s(e.mobileInfo.state.smsSendBtn?e.mobileInfo.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),i("a-form-item",[i("a-button",{attrs:{type:"primary",htmlType:"submit",block:"",size:"large",loading:e.mobileInfo.confirmLoading,disabled:e.mobileInfo.confirmLoading}},[e._v("绑定")])],1)],1)],1),i("a-modal",{staticClass:"mail-modal",attrs:{width:385,title:e.mailInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:e.mailInfo.modalStatus,callback:function(t){e.$set(e.mailInfo,"modalStatus",t)},expression:"mailInfo.modalStatus"}},[i("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticStyle:{"margin-bottom":"12px"},attrs:{message:e.errorTips,type:"error"}}),i("a-form",{attrs:{layout:"vertical",form:e.mailForm,hideRequiredMark:""},on:{submit:function(t){return t.preventDefault(),e.handleMailSubmit(t)}}},[i("a-form-item",[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mail",{rules:[{required:!0,pattern:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,message:"请输入正确的邮箱地址"}],validateTrigger:"change"}],expression:"[\n            'mail',\n            {\n              rules: [\n                {\n                  required: true,\n                  pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\\.[a-zA-Z0-9_-]{2,3}){1,2})$/,\n                  message: '请输入正确的邮箱地址',\n                },\n              ],\n              validateTrigger: 'change',\n            },\n          ]"}],attrs:{size:"large",type:"text",placeholder:"邮箱地址"}},[i("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),i("a-form-item",[i("a-button",{attrs:{type:"primary",htmlType:"submit",block:"",size:"large",loading:e.mailInfo.confirmLoading,disabled:e.mailInfo.confirmLoading}},[e._v("保存")])],1)],1)],1)],1)},s=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),r=a("5880"),o=a("bd87"),l=a("2f14"),c=a("0672");a("22b6");function m(){return Object(l["g"])("index/oauth/dingTalkOauth")}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"settingSecurity",components:{AccountSetting:o["default"]},data:function(){return{form:this.$form.createForm(this),mobileForm:this.$form.createForm(this),mailForm:this.$form.createForm(this),errorTips:"",passwordInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"修改密码",okText:"保存",cancelText:"放弃"},mobileInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"修改手机",okText:"保存",cancelText:"放弃",state:{time:60,smsSendBtn:!1}},mailInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"修改邮箱",okText:"保存",cancelText:"放弃",state:{time:60,smsSendBtn:!1}}}},computed:u({},Object(r["mapState"])({userInfo:function(t){return t.userInfo}})),methods:{editPassword:function(){this.passwordInfo.modalStatus=!0},editMobile:function(){this.mobileInfo.modalStatus=!0},editMail:function(){this.mailInfo.modalStatus=!0},bindDingtalk:function(){var t=m()+"?redirectPath="+this.$route.fullPath+"&bindDingtalk=1";location.href=t},unbindDingtalk:function(){var t=this;this.$confirm({title:"确认解绑",content:"解除绑定后将无法使用该帐号进行登录",okText:"确定",okType:"danger",cancelText:"再想想",onOk:function(){return Object(c["i"])().then((function(e){var a=Object(l["a"])(e);if(!a)return!1;t.$store.dispatch("SET_USER",e.data)})),Promise.resolve()}})},handlePasswordSubmit:function(){var t=this,e=this;this.form.validateFields((function(a,i){if(!a){var s=e.form.getFieldsValue();if(s.password.length<6||s.newPassword.length<6||s.confirmPassword.length<6)return t.setErrorTips("密码必须包含6个字符"),!1;if(s.newPassword!=s.confirmPassword)return t.setErrorTips("两次新密码不匹配"),!1;t.setErrorTips(""),s.id=e.userInfo.id,s.password=md5(s.password),s.newPassword=md5(s.newPassword),s.confirmPassword=md5(s.confirmPassword),Object(c["l"])(s).then((function(a){e.loading=!1,Object(l["a"])(a)&&(t.passwordInfo.modalStatus=!1,e.form&&e.form.resetFields())}))}}))},handleMobileSubmit:function(){var t=this,e=this;this.mobileForm.validateFields((function(a,i){if(!a){var s=e.mobileForm.getFieldsValue();t.setErrorTips(""),e.mobileInfo.confirmLoading=!0,Object(c["b"])(s).then((function(a){if(e.mobileInfo.confirmLoading=!1,Object(l["a"])(a)){var i={userInfo:a.data.member,tokenList:a.data.tokenList};e.$store.dispatch("SET_LOGGED",i),t.mobileInfo.modalStatus=!1,e.mobileForm&&e.mobileForm.resetFields()}}))}}))},handleMailSubmit:function(){var t=this,e=this;this.mailForm.validateFields((function(a,i){if(!a){var s=e.mailForm.getFieldsValue();t.setErrorTips(""),e.mailInfo.confirmLoading=!0,Object(c["a"])(s).then((function(a){e.mailInfo.confirmLoading=!1,Object(l["a"])(a)&&(t.mailInfo.modalStatus=!1,e.mailForm&&e.mailForm.resetFields())}))}}))},setErrorTips:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.errorTips=t},getCaptcha:function(t){var e=this;t.preventDefault();var a=this;this.mobileForm.validateFields(["mobile"],{force:!0},(function(t,i){if(!t){e.mobileInfo.state.smsSendBtn=!0;var s=window.setInterval((function(){a.mobileInfo.state.time--<=0&&(a.mobileInfo.state.time=60,a.mobileInfo.state.smsSendBtn=!1,window.clearInterval(s))}),1e3);e.$message.loading("验证码发送中..",0);Object(c["o"])(i.mobile).then((function(t){if(e.$message.destroy(),!Object(l["a"])(t))return!1;var a="验证码获取成功";t.data&&(a+="，您的验证码为："+t.data),e.$notification["success"]({message:"提示",description:a,duration:8,placement:"bottomLeft"})})).catch((function(t){clearInterval(s),a.mobileInfo.state.time=60,a.mobileInfo.state.smsSendBtn=!1,e.requestFailed(t)}))}}))}}},p=f,v=(a("f42a"),a("2877")),b=Object(v["a"])(p,i,s,!1,null,null,null);e["default"]=b.exports},e80f:function(t,e,a){},f42a:function(t,e,a){"use strict";var i=a("8ccb"),s=a.n(i);s.a}}]);