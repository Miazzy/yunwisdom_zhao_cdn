(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00cbf0e5","chunk-00cbf0e5"],{"0a51":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forgot",staticStyle:{height:"100%"}},[a("div",{staticClass:"content"},[a("a-spin",{attrs:{spinning:t.loading}})],1)])},n=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("bd86")),s=a("5880"),o=a("2f14"),c=a("efb5"),l=a("c030"),u=a("0672");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={data:function(){return{loading:!1,inviteLink:void 0}},computed:m({},Object(s["mapState"])({userInfo:function(t){return t.userInfo}})),created:function(){this.getInviteInfo()},methods:{getInviteInfo:function(){var t=this;this.loading=!0,Object(c["c"])(this.$route.params.code).then((function(e){t.inviteLink=e.data,t.loading=!1}))},acceptInvite:function(){var t=this,e=this;"project"==this.inviteLink.invite_type?Object(l["a"])(this.$route.params.code).then((function(a){var i=Object(o["a"])(a);if(!i)return!1;t.$store.dispatch("setOrganizationList",a.data.organizationList),t.$store.dispatch("setCurrentOrganization",a.data.currentOrganization),setTimeout((function(){e.$router.replace({name:"task",params:{code:e.inviteLink.source_code}})}),500)})):"organization"==this.inviteLink.invite_type&&Object(u["f"])(this.$route.params.code).then((function(a){t.$store.dispatch("setOrganizationList",a.data.organizationList),t.$store.dispatch("setCurrentOrganization",a.data.currentOrganization),t.$notice({title:"你已成功加入组织",msg:"你可以在右上方切换当前组织"},"notice","success"),setTimeout((function(){e.$router.replace("/")}),500)}))}}},p=f,v=(a("2d67"),a("2877")),b=Object(v["a"])(p,i,n,!1,null,null,null);e["default"]=b.exports},2175:function(t,e,a){},2880:function(t,e,a){},"2d67":function(t,e,a){"use strict";var i=a("2880"),n=a.n(i);n.a},"8a24":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inviteFromLink",staticStyle:{height:"100%"}},[a("div",{staticClass:"content"},[a("a-spin",{attrs:{spinning:t.loading}},[t.inviteLink?a("a-card",{attrs:{title:"来自 "+t.inviteLink.member.name+" 的邀请"}},[a("div",{staticClass:"header"},[a("span",[t._v("\n            "+t._s(t.inviteLink.member.name)+" 邀请你\n            "),"project"==t.inviteLink.invite_type?a("span",[t._v("加入项目「"+t._s(t.inviteLink.sourceDetail.name)+"」")]):t._e(),"organization"==t.inviteLink.invite_type?a("span",[t._v("加入组织「"+t._s(t.inviteLink.sourceDetail.name)+"」")]):t._e()])]),a("div",{staticClass:"member-info"},[a("div",{staticClass:"avatar"},[a("a-avatar",{attrs:{size:"large",src:t.inviteLink.member.avatar}})],1),a("div",{staticClass:"info"},[a("p",[t._v(t._s(t.inviteLink.member.name))]),a("p",{staticClass:"muted"},[t._v(t._s(t.inviteLink.member.email))])])]),a("a-button",{staticClass:"middle-btn",attrs:{type:"primary",block:"",size:"large"},on:{click:t.acceptInvite}},["project"==t.inviteLink.invite_type?a("span",[t._v("加入项目")]):t._e(),"organization"==t.inviteLink.invite_type?a("span",[t._v("加入组织")]):t._e()])],1):t._e()],1)],1)])},n=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("bd86")),s=a("5880"),o=a("2f14"),c=a("efb5"),l=a("c030"),u=a("0672");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={data:function(){return{loading:!1,inviteLink:void 0}},computed:m({},Object(s["mapState"])({userInfo:function(t){return t.userInfo}})),created:function(){this.getInviteInfo()},methods:{getInviteInfo:function(){var t=this;this.loading=!0,Object(c["c"])(this.$route.params.code).then((function(e){t.inviteLink=e.data,t.loading=!1}))},acceptInvite:function(){var t=this,e=this;"project"==this.inviteLink.invite_type?Object(l["a"])(this.$route.params.code).then((function(a){var i=Object(o["a"])(a);if(!i)return!1;t.$store.dispatch("setOrganizationList",a.data.organizationList),t.$store.dispatch("setCurrentOrganization",a.data.currentOrganization),setTimeout((function(){e.$router.replace({name:"task",params:{code:e.inviteLink.source_code}})}),500)})):"organization"==this.inviteLink.invite_type&&Object(u["f"])(this.$route.params.code).then((function(a){Object(o["a"])(a)&&(t.$store.dispatch("setOrganizationList",a.data.organizationList),t.$store.dispatch("setCurrentOrganization",a.data.currentOrganization),t.$notice({title:"你已成功加入组织",msg:"你可以在右上方切换当前组织"},"notice","success"),setTimeout((function(){e.$router.replace("/")}),500))}))}}},p=f,v=(a("8e0d"),a("2877")),b=Object(v["a"])(p,i,n,!1,null,null,null);e["default"]=b.exports},"8e0d":function(t,e,a){"use strict";var i=a("a2e9"),n=a.n(i);n.a},a2e9:function(t,e,a){},a8ef:function(t,e,a){"use strict";var i=a("2175"),n=a.n(i);n.a},becf:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-setting-base"},[a("wrapper-content",{attrs:{showHeader:!1}},[a("div",{staticClass:"setting-content"},[a("account-setting"),a("div",{staticClass:"layout-item right"},[a("div",{staticClass:"setting-info-title"},[a("span",[t._v("基本设置")])]),a("div",{staticClass:"setting-info"},[a("div",{staticClass:"setting-info-content"},[a("a-form",{attrs:{layout:"vertical",form:t.form,hideRequiredMark:""},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("a-form-item",{attrs:{label:"昵称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入您的邮箱"}]}],expression:"[\n                    'name',\n                    {rules: [{required: true, message: '请输入您的邮箱'}]},\n                  ]"}]})],1),a("a-form-item",{attrs:{label:"简介"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}],attrs:{placeholder:"个人简介",rows:4}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary",htmlType:"submit",loading:t.loading}},[t._v("更新基本信息")])],1)],1)],1),a("div",{staticClass:"setting-info-avatar"},[a("span",[t._v("头像")]),a("a-avatar",{staticClass:"avatar",attrs:{size:150,src:t.userInfo.avatar}},[t._v(t._s(t.userInfo.name))]),a("a-upload",{staticClass:"avatar-uploader",attrs:{name:"avatar",showUploadList:!1,data:{code:t.userInfo.code},headers:t.headers,action:t.uploadAction,beforeUpload:t.beforeUpload},on:{change:t.handleChange}},[a("a-button",{staticClass:"upload",attrs:{icon:"upload"}},[t._v("更换头像")])],1)],1)])])],1)])],1)},n=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),s=a("5880"),o=a("bd87"),c=a("2f14"),l=a("0672"),u=(a("68fe"),a("97a8"));function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"settingBase",components:{AccountSetting:o["default"]},data:function(){return{loading:!1,form:this.$form.createForm(this),uploadLoading:!1,uploadAction:Object(c["c"])("project/index/uploadAvatar")}},computed:m({},Object(s["mapState"])({userInfo:function(t){return t.userInfo}}),{headers:function(){return Object(c["d"])()}}),mounted:function(){var t=this;this.$nextTick((function(){t.form.setFieldsValue({email:t.userInfo.email,name:t.userInfo.name,description:t.userInfo.description})}))},methods:{handleSubmit:function(){var t=this;this.form.validateFields((function(e,a){if(!e){var i=t.form.getFieldsValue();i.code=t.userInfo.code,i.avatar=t.userInfo.avatar,Object(l["m"])(i).then((function(e){t.loading=!1,Object(c["a"])(e)&&(t.userInfo.email=i.email,t.userInfo.name=i.name,t.userInfo.name=i.name,t.userInfo.description=i.description,t.$store.dispatch("SET_USER",t.userInfo))}))}}))},handleChange:function(t){var e=this;if("uploading"===t.file.status)return Object(u["b"])("正在上传，请稍后...","message","loading",0),void(this.uploadLoading=!0);"done"===t.file.status&&Object(c["e"])(t.file.originFileObj,(function(a){e.userInfo.avatar=t.file.response.data.url,e.$store.dispatch("SET_USER",e.userInfo),e.uploadLoading=!1,setTimeout((function(){Object(u["a"])()}),500)}))},beforeUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("图片不能超过2MB!"),e}}},p=f,v=(a("a8ef"),a("2877")),b=Object(v["a"])(p,i,n,!1,null,null,null);e["default"]=b.exports},d8c9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"account-setting-security"},[i("wrapper-content",{attrs:{showHeader:!1}},[i("div",{staticClass:"setting-content"},[i("account-setting",{attrs:{keys:["security"]}}),i("div",{staticClass:"layout-item right"},[i("div",{staticClass:"setting-info-title"},[i("span",[e._v("安全设置")])]),i("div",{staticClass:"setting-info"},[i("div",{staticClass:"setting-info-content"},[i("div",{staticClass:"ant-list ant-list-split"},[i("div",{staticClass:"ant-spin-nested-loading"},[i("div",{staticClass:"ant-spin-container"},[i("div",{staticClass:"ant-list-item"},[i("div",{staticClass:"ant-list-item-meta"},[i("div",{staticClass:"ant-list-item-meta-content"},[i("h4",{staticClass:"ant-list-item-meta-title"},[i("a",[e._v("账户密码")])]),i("div",{staticClass:"ant-list-item-meta-description"},[i("span",[i("span",{staticClass:"security-list-description"},[e._v("当前密码强度 : 强")])])])])]),i("ul",{staticClass:"ant-list-item-action"},[i("li",{on:{click:e.editPassword}},[i("a",[e._v("修改")])])])]),i("div",{staticClass:"ant-list-item"},[i("div",{staticClass:"ant-list-item-meta"},[i("div",{staticClass:"ant-list-item-meta-content"},[i("h4",{staticClass:"ant-list-item-meta-title"},[i("a",[e._v("手机账号")])]),i("div",{staticClass:"ant-list-item-meta-description"},[i("span",[i("span",{staticClass:"security-list-description"},[e.userInfo.mobile?i("span",[e._v("已绑定手机 : "+e._s(e.userInfo.mobile))]):i("span",[e._v("未绑定手机")])])])])])]),i("ul",{staticClass:"ant-list-item-action"},[i("li",{on:{click:e.editMobile}},[i("a",[e.userInfo.mobile?i("span",[e._v("修改")]):i("span",[e._v("绑定")])])])])]),i("div",{staticClass:"ant-list-item"},[i("div",{staticClass:"ant-list-item-meta"},[i("div",{staticClass:"ant-list-item-meta-content"},[i("h4",{staticClass:"ant-list-item-meta-title"},[i("a",[e._v("邮箱帐号")])]),i("div",{staticClass:"ant-list-item-meta-description"},[i("span",[i("span",{staticClass:"security-list-description"},[e.userInfo.email?i("span",[e._v("已绑定邮箱 : "+e._s(e.userInfo.email))]):i("span",[e._v("未绑定邮箱")])])])])])]),i("ul",{staticClass:"ant-list-item-action"},[i("li",{on:{click:e.editMail}},[i("a",[e.userInfo.email?i("span",[e._v("修改")]):i("span",[e._v("绑定")])])])])]),i("div",{staticClass:"ant-list-item"},[i("div",{staticClass:"ant-list-item-meta"},[i("div",{staticClass:"ant-list-item-meta-content"},[i("h4",{staticClass:"ant-list-item-meta-title"},[i("a",[e._v("钉钉账号")])]),i("div",{staticClass:"ant-list-item-meta-description"},[i("span",[i("span",{staticClass:"security-list-description"},[e.userInfo.dingtalk_unionid?i("span",[e._v("已绑定")]):i("span",[e._v("未绑定钉钉账号")])])])])])]),i("ul",{staticClass:"ant-list-item-action"},[e.userInfo.dingtalk_unionid?i("li",{on:{click:e.unbindDingtalk}},[i("a",[e._v("解除绑定")])]):i("li",{on:{click:e.bindDingtalk}},[i("a",[e._v("绑定")])])])])])])])])])])],1)]),i("a-modal",{attrs:{width:385,title:e.passwordInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:e.passwordInfo.modalStatus,callback:function(t){e.$set(e.passwordInfo,"modalStatus",t)},expression:"passwordInfo.modalStatus"}},[i("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticStyle:{"margin-bottom":"12px"},attrs:{message:e.errorTips,type:"error"}}),i("a-form",{attrs:{layout:"vertical",form:e.form,autoFormCreate:function(e){t.form=e},hideRequiredMark:""},on:{submit:function(t){return t.preventDefault(),e.handlePasswordSubmit(t)}}},[i("a-form-item",{attrs:{label:"原密码"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入原密码"}]}],expression:"[\n            'password',\n            {rules: [{required: true, message: '请输入原密码'}]},\n          ]"}],attrs:{type:"password"}})],1),i("a-form-item",{attrs:{label:"新密码"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["newPassword",{rules:[{required:!0,message:"请输入新密码"}]}],expression:"[\n            'newPassword',\n            {rules: [{required: true, message: '请输入新密码'}]},\n          ]"}],attrs:{type:"password"}})],1),i("a-form-item",{attrs:{label:"确认新密码"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmPassword",{rules:[{required:!0,message:"请确认新密码"}]}],expression:"[\n            'confirmPassword',\n            {rules: [{required: true, message: '请确认新密码'}]},\n          ]"}],attrs:{type:"password"}})],1),i("a-form-item",[i("a-button",{attrs:{type:"primary",htmlType:"submit",block:"",size:"large"}},[e._v("保存")])],1)],1)],1),i("a-modal",{staticClass:"mobile-modal",attrs:{width:385,title:e.mobileInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:e.mobileInfo.modalStatus,callback:function(t){e.$set(e.mobileInfo,"modalStatus",t)},expression:"mobileInfo.modalStatus"}},[i("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticStyle:{"margin-bottom":"12px"},attrs:{message:e.errorTips,type:"error"}}),i("a-form",{attrs:{layout:"vertical",form:e.mobileForm,hideRequiredMark:""},on:{submit:function(t){return t.preventDefault(),e.handleMobileSubmit(t)}}},[i("a-form-item",[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,pattern:/^1[34578]\d{9}$/,message:"请输入正确的手机号"}],validateTrigger:"change"}],expression:"[\n            'mobile',\n            {\n              rules: [\n                {\n                  required: true,\n                  pattern: /^1[34578]\\d{9}$/,\n                  message: '请输入正确的手机号',\n                },\n              ],\n              validateTrigger: 'change',\n            },\n          ]"}],attrs:{size:"large",type:"text",placeholder:"手机号"}},[i("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),i("a-row",{attrs:{gutter:16}},[i("a-col",{staticClass:"gutter-row",attrs:{span:16}},[i("a-form-item",[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"[\n                'captcha',\n                {\n                  rules: [{required: true, message: '请输入验证码'}],\n                  validateTrigger: 'blur',\n                },\n              ]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[i("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),i("a-col",{staticClass:"gutter-row",attrs:{span:8}},[i("a-button",{staticClass:"getCaptcha",attrs:{size:"large",tabindex:"-1",disabled:e.mobileInfo.state.smsSendBtn},domProps:{textContent:e._s(e.mobileInfo.state.smsSendBtn?e.mobileInfo.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),i("a-form-item",[i("a-button",{attrs:{type:"primary",htmlType:"submit",block:"",size:"large",loading:e.mobileInfo.confirmLoading,disabled:e.mobileInfo.confirmLoading}},[e._v("绑定")])],1)],1)],1),i("a-modal",{staticClass:"mail-modal",attrs:{width:385,title:e.mailInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:e.mailInfo.modalStatus,callback:function(t){e.$set(e.mailInfo,"modalStatus",t)},expression:"mailInfo.modalStatus"}},[i("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.errorTips,expression:"errorTips"}],staticStyle:{"margin-bottom":"12px"},attrs:{message:e.errorTips,type:"error"}}),i("a-form",{attrs:{layout:"vertical",form:e.mailForm,hideRequiredMark:""},on:{submit:function(t){return t.preventDefault(),e.handleMailSubmit(t)}}},[i("a-form-item",[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mail",{rules:[{required:!0,pattern:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,message:"请输入正确的邮箱地址"}],validateTrigger:"change"}],expression:"[\n            'mail',\n            {\n              rules: [\n                {\n                  required: true,\n                  pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\\.[a-zA-Z0-9_-]{2,3}){1,2})$/,\n                  message: '请输入正确的邮箱地址',\n                },\n              ],\n              validateTrigger: 'change',\n            },\n          ]"}],attrs:{size:"large",type:"text",placeholder:"邮箱地址"}},[i("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),i("a-form-item",[i("a-button",{attrs:{type:"primary",htmlType:"submit",block:"",size:"large",loading:e.mailInfo.confirmLoading,disabled:e.mailInfo.confirmLoading}},[e._v("保存")])],1)],1)],1)],1)},n=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("35ae"),o=a.n(s),c=a("5880"),l=a("bd87"),u=a("2f14"),d=a("0672"),m=a("e1b8");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v={name:"settingSecurity",components:{AccountSetting:l["default"]},data:function(){return{form:this.$form.createForm(this),mobileForm:this.$form.createForm(this),mailForm:this.$form.createForm(this),errorTips:"",passwordInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"修改密码",okText:"保存",cancelText:"放弃"},mobileInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"修改手机",okText:"保存",cancelText:"放弃",state:{time:60,smsSendBtn:!1}},mailInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"修改邮箱",okText:"保存",cancelText:"放弃",state:{time:60,smsSendBtn:!1}}}},computed:p({},Object(c["mapState"])({userInfo:function(t){return t.userInfo}})),methods:{editPassword:function(){this.passwordInfo.modalStatus=!0},editMobile:function(){this.mobileInfo.modalStatus=!0},editMail:function(){this.mailInfo.modalStatus=!0},bindDingtalk:function(){var t=Object(m["a"])()+"?redirectPath="+this.$route.fullPath+"&bindDingtalk=1";location.href=t},unbindDingtalk:function(){var t=this;this.$confirm({title:"确认解绑",content:"解除绑定后将无法使用该帐号进行登录",okText:"确定",okType:"danger",cancelText:"再想想",onOk:function(){return Object(d["i"])().then((function(e){var a=Object(u["a"])(e);if(!a)return!1;t.$store.dispatch("SET_USER",e.data)})),Promise.resolve()}})},handlePasswordSubmit:function(){var t=this,e=this;this.form.validateFields((function(a,i){if(!a){var n=e.form.getFieldsValue();if(n.password.length<6||n.newPassword.length<6||n.confirmPassword.length<6)return t.setErrorTips("密码必须包含6个字符"),!1;if(n.newPassword!=n.confirmPassword)return t.setErrorTips("两次新密码不匹配"),!1;t.setErrorTips(""),n.id=e.userInfo.id,n.password=o()(n.password),n.newPassword=o()(n.newPassword),n.confirmPassword=o()(n.confirmPassword),Object(d["l"])(n).then((function(a){e.loading=!1,Object(u["a"])(a)&&(t.passwordInfo.modalStatus=!1,e.form&&e.form.resetFields())}))}}))},handleMobileSubmit:function(){var t=this,e=this;this.mobileForm.validateFields((function(a,i){if(!a){var n=e.mobileForm.getFieldsValue();t.setErrorTips(""),e.mobileInfo.confirmLoading=!0,Object(d["b"])(n).then((function(a){if(e.mobileInfo.confirmLoading=!1,Object(u["a"])(a)){var i={userInfo:a.data.member,tokenList:a.data.tokenList};e.$store.dispatch("SET_LOGGED",i),t.mobileInfo.modalStatus=!1,e.mobileForm&&e.mobileForm.resetFields()}}))}}))},handleMailSubmit:function(){var t=this,e=this;this.mailForm.validateFields((function(a,i){if(!a){var n=e.mailForm.getFieldsValue();t.setErrorTips(""),e.mailInfo.confirmLoading=!0,Object(d["a"])(n).then((function(a){e.mailInfo.confirmLoading=!1,Object(u["a"])(a)&&(t.mailInfo.modalStatus=!1,e.mailForm&&e.mailForm.resetFields())}))}}))},setErrorTips:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.errorTips=t},getCaptcha:function(t){var e=this;t.preventDefault();var a=this;this.mobileForm.validateFields(["mobile"],{force:!0},(function(t,i){if(!t){e.mobileInfo.state.smsSendBtn=!0;var n=window.setInterval((function(){a.mobileInfo.state.time--<=0&&(a.mobileInfo.state.time=60,a.mobileInfo.state.smsSendBtn=!1,window.clearInterval(n))}),1e3);e.$message.loading("验证码发送中..",0);Object(d["o"])(i.mobile).then((function(t){if(e.$message.destroy(),!Object(u["a"])(t))return!1;var a="验证码获取成功";t.data&&(a+="，您的验证码为："+t.data),e.$notification["success"]({message:"提示",description:a,duration:8,placement:"bottomLeft"})})).catch((function(t){clearInterval(n),a.mobileInfo.state.time=60,a.mobileInfo.state.smsSendBtn=!1,e.requestFailed(t)}))}}))}}},b=v,g=(a("f42a"),a("2877")),h=Object(g["a"])(b,i,n,!1,null,null,null);e["default"]=h.exports},f42a:function(t,e,a){"use strict";var i=a("f4b1"),n=a.n(i);n.a},f4b1:function(t,e,a){}}]);