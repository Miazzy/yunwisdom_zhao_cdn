(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-461ffdf2"],{"73d4":function(t,e,a){},ba6d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"},attrs:{form:t.form},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.nextStep(e)}}},[a("a-form-item",{attrs:{label:"账号名",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-input",{style:{width:"310px"},attrs:{type:"text",autocomplete:"false",value:t.accountName,disabled:""}})],1),a("a-form-item",{attrs:{label:"手机",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{initialValue:t.defaultPhone,rules:t.validatorRules.phone.rule}],expression:"['phone',{initialValue: defaultPhone, rules: validatorRules.phone.rule}]"}],style:{width:"310px"},attrs:{type:"text",autocomplete:"false",placeholder:"请输入手机号"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"phone"},slot:"prefix"})],1)],1),t.show?a("a-form-item",{attrs:{label:"验证码",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-row",{staticStyle:{"margin-left":"2px"},attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:12}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",t.validatorRules.captcha],expression:"['captcha',validatorRules.captcha]"}],attrs:{type:"text",placeholder:"手机短信验证码"}})],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{attrs:{tabindex:"-1",size:"default",disabled:t.state.smsSendBtn},domProps:{textContent:t._s(t.state.smsSendBtn?t.state.time+" s":"获取验证码")},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.getCaptcha(e)}}})],1)],1)],1):t._e(),a("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prevStep}},[t._v("上一步")]),a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("下一步")])],1)],1)],1)},o=[],n=a("0fea"),i={name:"Step2",props:["userList"],data:function(){return{form:this.$form.createForm(this),loading:!1,accountName:this.userList.username,dropList:"0",captcha:"",show:!0,state:{time:60,smsSendBtn:!1},formLogin:{captcha:"",mobile:""},validatorRules:{captcha:{rule:[{required:!0,message:"请输入短信验证码!"},{validator:this.validateCaptcha}]},phone:{rule:[{required:!0,message:"请输入手机号码!"}]}}}},computed:{defaultPhone:function(){return this.userList.isPhone?this.userList.phone:null}},methods:{nextStep:function(){var t=this,e=this;e.loading=!0,this.form.validateFields((function(a,s){if(console.log(s),!a&&"0"==e.dropList)if(void 0==s.captcha)t.cmsFailed("请输入短信验证码!");else{var o={};o.phone=t.userList.phone,o.smscode=s.captcha,Object(n["postAction"])("/sys/user/phoneVerification",o).then((function(a){if(a.success){console.log(a);var s={username:t.userList.username,phone:t.userList.phone,smscode:a.result};setTimeout((function(){e.$emit("nextStep",s)}),0)}else t.cmsFailed(a.message)}))}}))},prevStep:function(){this.$emit("prevStep",this.userList)},getCaptcha:function(t){var e=this;t.preventDefault();var a=this;this.state.smsSendBtn=!0;var s=window.setInterval((function(){a.state.time--<=0&&(a.state.time=60,a.state.smsSendBtn=!1,window.clearInterval(s))}),1e3),o=this.$message.loading("验证码发送中..",0),i={mobile:this.userList.phone,smsmode:"2"};Object(n["postAction"])("/sys/sms",i).then((function(t){t.success||(setTimeout(o,1),e.cmsFailed(t.message)),setTimeout(o,500)}))},cmsFailed:function(t){this.$notification["error"]({message:"验证错误",description:t,duration:4})},handleChangeSelect:function(t){var e=this;console.log(t),0==t?(e.dropList="0",e.show=!0):(e.dropList="1",e.show=!1)}}},r=i,l=(a("f28b"),a("2877")),c=Object(l["a"])(r,s,o,!1,null,"0d38e0f0",null);e["default"]=c.exports},f28b:function(t,e,a){"use strict";var s=a("73d4"),o=a.n(s);o.a}}]);