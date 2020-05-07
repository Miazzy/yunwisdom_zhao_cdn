(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-463ca891"],{"418f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:e.drawerWidth,placement:"right",closable:!0,visible:e.visible},on:{close:e.handleCancel}},[a("template",{slot:"title"},[a("div",{staticStyle:{width:"100%"}},[a("span",[e._v(e._s(e.title))]),a("span",{staticStyle:{display:"inline-block",width:"calc(100% - 51px)","padding-right":"10px","text-align":"right"}},[a("a-button",{staticStyle:{height:"20px",width:"20px",border:"0px"},attrs:{icon:"appstore"},on:{click:e.toggleScreen}})],1)])]),a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"用户账号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",e.validatorRules.username],expression:"[ 'username', validatorRules.username]"}],attrs:{placeholder:"请输入用户账号",readOnly:!!e.model.id}})],1),e.model.id?e._e():[a("a-form-item",{attrs:{label:"登陆密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",e.validatorRules.password],expression:"[ 'password', validatorRules.password]"}],attrs:{type:"password",placeholder:"请输入登陆密码"}})],1),a("a-form-item",{attrs:{label:"确认密码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmpassword",e.validatorRules.confirmpassword],expression:"[ 'confirmpassword', validatorRules.confirmpassword]"}],attrs:{type:"password",placeholder:"请重新输入登陆密码"},on:{blur:e.handleConfirmBlur}})],1)],a("a-form-item",{attrs:{label:"用户姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["realname",e.validatorRules.realname],expression:"[ 'realname', validatorRules.realname]"}],attrs:{placeholder:"请输入用户姓名"}})],1),a("a-form-item",{attrs:{label:"工号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["workNo",e.validatorRules.workNo],expression:"[ 'workNo', validatorRules.workNo]"}],attrs:{placeholder:"请输入工号"}})],1),a("a-form-item",{attrs:{label:"职务",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-select-position",{directives:[{name:"decorator",rawName:"v-decorator",value:["post",{}],expression:"['post', {}]"}],attrs:{placeholder:"请选择职务",multiple:!1}})],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.roleDisabled,expression:"!roleDisabled"}],attrs:{label:"角色分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"请选择用户角色",optionFilterProp:"children"},model:{value:e.selectedRole,callback:function(t){e.selectedRole=t},expression:"selectedRole"}},e._l(e.roleList,(function(t,r){return a("a-select-option",{key:r.toString(),attrs:{value:t.id}},[e._v(e._s(t.roleName))])})),1)],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.departDisabled,expression:"!departDisabled"}],attrs:{label:"部门分配",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-search",{attrs:{placeholder:"点击右侧按钮选择部门",disabled:""},on:{search:e.onSearch},model:{value:e.checkedDepartNameString,callback:function(t){e.checkedDepartNameString=t},expression:"checkedDepartNameString"}},[a("a-button",{attrs:{slot:"enterButton",icon:"search"},slot:"enterButton"},[e._v("选择")])],1)],1),a("a-form-item",{attrs:{label:"身份",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{on:{change:e.identityChange},model:{value:e.identity,callback:function(t){e.identity=t},expression:"identity"}},[a("a-radio",{attrs:{value:"1"}},[e._v("普通用户")]),a("a-radio",{attrs:{value:"2"}},[e._v("上级")])],1)],1),1==e.departIdShow?a("a-form-item",{attrs:{label:"负责部门",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"请选择负责部门",optionFilterProp:"children",getPopupContainer:function(e){return e.parentNode},dropdownStyle:{maxHeight:"200px",overflow:"auto"}},model:{value:e.departIds,callback:function(t){e.departIds=t},expression:"departIds"}},e._l(e.resultDepartOptions,(function(t){return a("a-select-option",{key:t.key,attrs:{value:t.key}},[e._v(e._s(t.title))])})),1)],1):e._e(),a("a-form-item",{attrs:{label:"头像",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-image-upload",{staticClass:"avatar-uploader",attrs:{text:"上传"},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),a("a-form-item",{attrs:{label:"生日",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["birthday",{initialValue:e.model.birthday?e.moment(e.model.birthday,e.dateFormat):null}],expression:"['birthday', {initialValue:!model.birthday?null:moment(model.birthday,dateFormat)}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择生日"}})],1),a("a-form-item",{attrs:{label:"性别",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",{}],expression:"[ 'sex', {}]"}],attrs:{placeholder:"请选择性别"}},[a("a-select-option",{attrs:{value:1}},[e._v("男")]),a("a-select-option",{attrs:{value:2}},[e._v("女")])],1)],1),a("a-form-item",{attrs:{label:"邮箱",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",e.validatorRules.email],expression:"[ 'email', validatorRules.email]"}],attrs:{placeholder:"请输入邮箱"}})],1),a("a-form-item",{attrs:{label:"手机号码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",e.validatorRules.phone],expression:"[ 'phone', validatorRules.phone]"}],attrs:{placeholder:"请输入手机号码",disabled:e.isDisabledAuth("user:form:phone")}})],1),a("a-form-item",{attrs:{label:"座机",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telephone",e.validatorRules.telephone],expression:"[ 'telephone', validatorRules.telephone]"}],attrs:{placeholder:"请输入座机"}})],1),a("a-form-item",{attrs:{label:"工作流引擎",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["activitiSync",{}],expression:"['activitiSync', {}]"}],attrs:{placeholder:"请选择是否同步工作流引擎",type:"radio",triggerChange:!0,dictCode:"activiti_sync"}})],1)],2)],1),a("depart-window",{ref:"departWindow",on:{ok:e.modalFormOk}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.disableSubmit,expression:"!disableSubmit"}],staticClass:"drawer-bootom-button"},[a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.handleCancel}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],2)},i=[],s=(a("3b2b"),a("28a5"),a("c63e")),l=a("61fc"),o=a("9fb0"),n=a("0fea"),d=a("4ec3");a("2fdb"),a("6762"),a("ac4d"),a("8a81"),a("ac6a");function c(e,t){return!!p(e,t)||u(e)}function p(e,t){console.log("页面权限禁用--NODE--开始");var a=[];try{var r=t;if(r){var i=r.permissionList,s=!0,l=!1,o=void 0;try{for(var n,d=i[Symbol.iterator]();!(s=(n=d.next()).done);s=!0){var c=n.value;"2"==c.type&&a.push(c)}}catch(C){l=!0,o=C}finally{try{s||null==d.return||d.return()}finally{if(l)throw o}}}}catch(k){}if(null===a||""===a||void 0===a||a.length<=0)return!1;for(var p=[],u=0,h=a;u<h.length;u++){var m=h[u];"2"==m.type&&p.push(m.action)}if(!p.includes(e))return!1;var f=!0,v=!1,b=void 0;try{for(var g,w=a[Symbol.iterator]();!(f=(g=w.next()).done);f=!0){var y=g.value;if(e===y.action)return console.log("页面权限禁用--NODE--生效"),!0}}catch(C){v=!0,b=C}finally{try{f||null==w.return||w.return()}finally{if(v)throw b}}return!1}function u(e){console.log("页面禁用权限--Global--开始");var t=[],a=[],r=JSON.parse(sessionStorage.getItem(o["USER_AUTH"])||"[]"),i=!0,s=!1,l=void 0;try{for(var n,d=r[Symbol.iterator]();!(i=(n=d.next()).done);i=!0){var c=n.value;"2"==c.type&&t.push(c)}}catch(T){s=!0,l=T}finally{try{i||null==d.return||d.return()}finally{if(s)throw l}}var p=JSON.parse(sessionStorage.getItem(o["SYS_BUTTON_AUTH"])||"[]"),u=!0,h=!1,m=void 0;try{for(var f,v=p[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var b=f.value;"2"==b.type&&a.push(b)}}catch(T){h=!0,m=T}finally{try{u||null==v.return||v.return()}finally{if(h)throw m}}var g=!1,w=!1;if(null!=a&&""!=a&&void 0!=a&&a.length>0){var y=!0,C=!1,k=void 0;try{for(var I,D=a[Symbol.iterator]();!(y=(I=D.next()).done);y=!0){var x=I.value;if(e===x.action){if("0"==x.status){w=!0;break}g=!0;break}}}catch(T){C=!0,k=T}finally{try{y||null==D.return||D.return()}finally{if(C)throw k}}}if(w)return!1;if(null===t||""===t||void 0===t||t.length<=0)return g;for(var L=[],S=0,N=t;S<N.length;S++){var O=N[S];"2"==O.type&&L.push(O.action)}if(L.includes(e)){var _=!0,U=!1,R=void 0;try{for(var F,j=t[Symbol.iterator]();!(_=(F=j.next()).done);_=!0){var $=F.value;e===$.action&&(console.log("页面权限解除禁用--Global--生效"),g=!1)}}catch(T){U=!0,R=T}finally{try{_||null==j.return||j.return()}finally{if(U)throw R}}return g}return g}var h=a("e610"),m={name:"UserModal",components:{JImageUpload:h["default"],departWindow:s["default"],JSelectPosition:l["default"],moment:moment},data:function(){return{departDisabled:!1,roleDisabled:!1,modalWidth:800,drawerWidth:700,modaltoggleFlag:!0,confirmDirty:!1,selectedDepartKeys:[],checkedDepartKeys:[],checkedDepartNames:[],checkedDepartNameString:"",resultDepartOptions:[],userId:"",disableSubmit:!1,userDepartModel:{userId:"",departIdList:[]},dateFormat:"YYYY-MM-DD",validatorRules:{username:{rules:[{required:!0,message:"请输入用户账号!"},{validator:this.validateUsername}]},password:{rules:[{required:!0,pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/,message:"密码由8位数字、大小写字母和特殊符号组成!"},{validator:this.validateToNextPassword}]},confirmpassword:{rules:[{required:!0,message:"请重新输入登陆密码!"},{validator:this.compareToFirstPassword}]},realname:{rules:[{required:!0,message:"请输入用户名称!"}]},phone:{rules:[{validator:this.validatePhone}]},email:{rules:[{validator:this.validateEmail}]},roles:{},workNo:{rules:[{required:!0,message:"请输入工号"},{validator:this.validateWorkNo}]},telephone:{rules:[{pattern:/^0\d{2,3}-[1-9]\d{6,7}$/,message:"请输入正确的座机号码"}]}},departIdShow:!1,departIds:[],title:"操作",visible:!1,model:{},roleList:[],selectedRole:[],labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},uploadLoading:!1,confirmLoading:!1,headers:{},form:this.$form.createForm(this),picUrl:"",url:{fileUpload:window._CONFIG["uploadURL"]+"/sys/common/upload",imgerver:window._CONFIG["staticDomainURL"],userWithDepart:"/sys/user/userDepartList",userId:"/sys/user/generateUserId",syncUserByUserName:"/process/extActProcess/doSyncUserByUserName"},identity:"1",fileList:[]}},created:function(){var e=Vue.ls.get(o["ACCESS_TOKEN"]);this.headers={"X-Access-Token":e}},computed:{uploadAction:function(){return this.url.fileUpload}},methods:{moment:moment,isDisabledAuth:function(e){return c(e)},toggleScreen:function(){this.modaltoggleFlag?this.modalWidth=window.innerWidth:this.modalWidth=800,this.modaltoggleFlag=!this.modaltoggleFlag},initialRoleList:function(){var e=this;Object(d["O"])().then((function(t){t.success?e.roleList=t.result:console.log(t.message)}))},loadUserRoles:function(e){var t=this;Object(d["N"])({userid:e}).then((function(e){e.success?t.selectedRole=e.result:console.log(e.message)}))},refresh:function(){this.selectedDepartKeys=[],this.checkedDepartKeys=[],this.checkedDepartNames=[],this.checkedDepartNameString="",this.userId="",this.resultDepartOptions=[],this.departId=[],this.departIdShow=!1},add:function(){this.picUrl="",this.refresh(),this.edit({activitiSync:"1"})},edit:function(e){var t=this;this.resetScreenSize();var a=this;a.initialRoleList(),a.checkedDepartNameString="",a.form.resetFields(),e.hasOwnProperty("id")&&(a.loadUserRoles(e.id),setTimeout((function(){t.fileList=e.avatar}),5)),a.userId=e.id,a.visible=!0,a.model=Object.assign({},e),a.$nextTick((function(){a.form.setFieldsValue(pick(t.model,"username","sex","realname","email","phone","activitiSync","workNo","telephone","post"))})),"2"==this.model.identity?(this.identity="2",this.departIdShow=!0):(this.identity="1",this.departIdShow=!1),a.checkedDepartKeys=[],a.loadCheckedDeparts()},loadCheckedDeparts:function(){var e=this,t=this;t.userId&&Object(n["getAction"])(t.url.userWithDepart,{userId:t.userId}).then((function(a){if(t.checkedDepartNames=[],a.success){for(var r=[],i=[],s=0;s<a.result.length;s++)t.checkedDepartNames.push(a.result[s].title),e.checkedDepartNameString=e.checkedDepartNames.join(","),t.checkedDepartKeys.push(a.result[s].key),r.push({key:a.result[s].key,title:a.result[s].title}),i.push(a.result[s].key);t.resultDepartOptions=r,e.model.departIds?e.departIds=e.model.departIds.split(","):e.departIds=i,t.userDepartModel.departIdList=t.checkedDepartKeys}else console.log(a.message)}))},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1,this.selectedRole=[],this.userDepartModel={userId:"",departIdList:[]},this.checkedDepartNames=[],this.checkedDepartNameString="",this.checkedDepartKeys=[],this.selectedDepartKeys=[],this.resultDepartOptions=[],this.departIds=[],this.departIdShow=!1,this.identity="1",this.fileList=[]},handleSubmit:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0,r.birthday?r.birthday=r.birthday.format(e.dateFormat):r.birthday="";var i,s=Object.assign(e.model,r);s.avatar=t.fileList,s.selectedroles=e.selectedRole.length>0?e.selectedRole.join(","):"",s.selecteddeparts=e.userDepartModel.departIdList.length>0?e.userDepartModel.departIdList.join(","):"",s.identity=e.identity,"2"===e.identity?s.departIds=e.departIds.join(","):s.departIds="",e.model.id?i=Object(d["r"])(s):(s.id=e.userId,i=Object(d["e"])(s)),i.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.checkedDepartNames=[],t.userDepartModel.departIdList={userId:"",departIdList:[]},t.close()}))}}))},handleCancel:function(){this.close()},validateToNextPassword:function(e,t,a){var r=this.form,i=r.getFieldValue("confirmpassword");t&&i&&t!==i&&a("两次输入的密码不一样！"),t&&this.confirmDirty&&r.validateFields(["confirm"],{force:!0}),a()},compareToFirstPassword:function(e,t,a){var r=this.form;t&&t!==r.getFieldValue("password")?a("两次输入的密码不一样！"):a()},validatePhone:function(e,t,a){if(t)if(new RegExp(/^1[3|4|5|7|8|9][0-9]\d{8}$/).test(t)){var r={tableName:"sys_user",fieldName:"phone",fieldVal:t,dataId:this.userId};Object(d["m"])(r).then((function(e){e.success?a():a("手机号已存在!")}))}else a("请输入正确格式的手机号码!");else a()},validateEmail:function(e,t,a){if(t)if(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(t)){var r={tableName:"sys_user",fieldName:"email",fieldVal:t,dataId:this.userId};Object(d["m"])(r).then((function(e){console.log(e),e.success?a():a("邮箱已存在!")}))}else a("请输入正确格式的邮箱!");else a()},validateUsername:function(e,t,a){var r={tableName:"sys_user",fieldName:"username",fieldVal:t,dataId:this.userId};Object(d["m"])(r).then((function(e){e.success?a():a("用户名已存在!")}))},validateWorkNo:function(e,t,a){var r={tableName:"sys_user",fieldName:"work_no",fieldVal:t,dataId:this.userId};Object(d["m"])(r).then((function(e){e.success?a():a("工号已存在!")}))},handleConfirmBlur:function(e){var t=e.target.value;this.confirmDirty=this.confirmDirty||!!t},normFile:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},handleChange:function(e){if(this.picUrl="","uploading"!==e.file.status){if("done"===e.file.status){var t=e.file.response;this.uploadLoading=!1,console.log(t),t.success?(this.model.avatar=t.message,this.picUrl="Has no pic url yet"):this.$message.warning(t.message)}}else this.uploadLoading=!0},onSearch:function(){this.$refs.departWindow.add(this.checkedDepartKeys,this.userId)},modalFormOk:function(e){this.checkedDepartNames=[],this.selectedDepartKeys=[],this.checkedDepartNameString="",this.userId=e.userId,this.userDepartModel.userId=e.userId,this.departIds=[],this.resultDepartOptions=[];for(var t=[],a=0;a<e.departIdList.length;a++)this.selectedDepartKeys.push(e.departIdList[a].key),this.checkedDepartNames.push(e.departIdList[a].title),this.checkedDepartNameString=this.checkedDepartNames.join(","),t.push({key:e.departIdList[a].key,title:e.departIdList[a].title}),this.departIds.push(e.departIdList[a].key);this.resultDepartOptions=t,this.userDepartModel.departIdList=this.selectedDepartKeys,this.checkedDepartKeys=this.selectedDepartKeys},resetScreenSize:function(){var e=document.body.clientWidth;this.drawerWidth=e<500?e:700},identityChange:function(e){"1"===e.target.value?this.departIdShow=!1:this.departIdShow=!0}}},f=m,v=(a("ca34"),a("2877")),b=Object(v["a"])(f,r,i,!1,null,"9513f602",null);t["default"]=b.exports},"61fc":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-select-biz-component",e._g(e._b({attrs:{width:1e3}},"j-select-biz-component",e.configs,!1),e.$listeners))},i=[],s=a("b296"),l={name:"JSelectPosition",components:{JSelectBizComponent:s["default"]},props:["value"],data:function(){return{settings:{name:"职务",displayKey:"name",returnKeys:["id","code"],listUrl:"/sys/position/list",queryParamCode:"name",queryParamText:"职务名称",columns:[{title:"职务名称",dataIndex:"name",align:"center",width:"30%",widthRight:"70%"},{title:"职务编码",dataIndex:"code",align:"center",width:"35%"},{title:"职级",dataIndex:"rank_dictText",align:"center",width:"25%"}]}}},computed:{configs:function(){return Object.assign({value:this.value},this.settings,this.$attrs)}}},o=l,n=a("2877"),d=Object(n["a"])(o,r,i,!1,null,"09d7ae7b",null);t["default"]=d.exports},"6e05":function(e,t,a){},c63e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{width:e.modalWidth,visible:e.visible,title:"部门搜索",confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"上级部门"}},[a("a-tree",{attrs:{multiple:"",treeCheckable:"tree",checkable:"",checkedKeys:e.checkedKeys,allowClear:"true",checkStrictly:!0,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,placeholder:"请选择上级部门"},on:{check:e.onCheck}})],1)],1)]],2)},i=[],s=a("0fea"),l=a("4ec3"),o=a("418f"),n={name:"DepartWindow",components:{userModal:o["default"]},data:function(){return{checkedKeys:[],userId:"",model:{},userDepartModel:{userId:"",departIdList:[]},departList:[],modalWidth:400,departTree:[],title:"操作",visible:!1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,headers:{},form:this.$form.createForm(this),url:{userId:"/sys/user/generateUserId"}}},methods:{add:function(e,t){this.checkedKeys=e,this.userId=t,this.edit({})},edit:function(e){var t=this;this.departList=[],this.queryDepartTree(),this.form.resetFields(),this.visible=!0,this.model=Object.assign({},e);var a=pick(this.model,"id","userId","departIdList");this.$nextTick((function(){t.form.setFieldsValue(a)}))},close:function(){this.$emit("close"),this.visible=!1,this.departList=[],this.checkedKeys=[]},handleSubmit:function(){var e=this,t=this;this.form.validateFields((function(a){if(!a)if(t.confirmLoading=!0,null==e.userId)Object(s["getAction"])(e.url.userId).then((function(a){if(a.success){var r={userId:a.result,departIdList:e.departList};console.log(r),t.$emit("ok",r)}})).finally((function(){t.departList=[],t.confirmLoading=!1,t.close()}));else{var r={userId:e.userId,departIdList:e.departList};console.log(r),t.departList=[],t.$emit("ok",r),t.confirmLoading=!1,t.close()}}))},handleCancel:function(){this.close()},onCheck:function(e,t){this.departList=[],this.checkedKeys=e.checked;for(var a=t.checkedNodes,r=0;r<a.length;r++){var i=a[r].data.props,s={key:"",value:"",title:""};s.key=i.value,s.value=i.value,s.title=i.title,this.departList.push(s)}console.log("onCheck",e,t)},queryDepartTree:function(){var e=this;Object(l["E"])().then((function(t){t.success&&(e.departTree=t.result)}))},modalFormOk:function(){}}},d=n,c=(a("f21f"),a("2877")),p=Object(c["a"])(d,r,i,!1,null,"5f67ca27",null);t["default"]=p.exports},c8fa:function(e,t,a){},ca34:function(e,t,a){"use strict";var r=a("c8fa"),i=a.n(r);i.a},e610:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-upload",{attrs:{name:"file",listType:"picture-card",multiple:e.isMultiple,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,isMultiple:e.isMultiple,showUploadList:e.isMultiple},on:{change:e.handleChange,preview:e.handlePreview}},[!e.isMultiple&&e.picUrl?a("img",{staticStyle:{height:"104px","max-width":"300px"},attrs:{src:e.getAvatarView()}}):a("div",[a("a-icon",{attrs:{type:e.uploadLoading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:function(t){return e.handleCancel()}}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},i=[],s=(a("7f7f"),a("28a5"),a("a481"),a("3b2b"),a("9fb0")),l=a("0fea"),o=function(){return"-"+parseInt(1e4*Math.random()+1,10)},n=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},d={name:"JImageUpload",data:function(){return{uploadAction:window._CONFIG["uploadURL"]+"/sys/common/upload",urlView:window._CONFIG["staticDomainURL"],uploadLoading:!1,picUrl:!1,headers:{},fileList:[],previewImage:"",previewVisible:!1}},props:{text:{type:String,required:!1,default:"上传"},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},isMultiple:{type:Boolean,required:!1,default:!1}},watch:{value:function(e){e instanceof Array?this.initFileList(e.join(",")):this.initFileList(e)}},created:function(){try{var e=Vue.ls.get(s["ACCESS_TOKEN"]);this.headers={"X-Access-Token":e}}catch(t){console.error(t)}},methods:{initFileList:function(e){if(e&&0!=e.length){this.picUrl=!0;for(var t=[],a=e.split(","),r=0;r<a.length;r++){var i=Object(l["getFileAccessHttpUrl"])(a[r],this.urlView,"http");t.push({uid:o(),name:n(a[r]),status:"done",url:i,response:{status:"history",message:a[r]}})}this.fileList=t}else this.fileList=[]},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},handleChange:function(e){this.picUrl=!1;var t=e.fileList;"done"===e.file.status?e.file.response.success&&(this.picUrl=!0,t=t.map((function(e){return e.response&&(e.url=e.response.message),e}))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=t,"done"!==e.file.status&&"removed"!==e.file.status||this.handlePathChange()},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getAvatarView:function(){if(this.fileList.length>0){var e=this.fileList[0].url;return Object(l["getFileAccessHttpUrl"])(e,this.urlView,"http")}},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");var a=[];if(this.isMultiple)for(var r=0;r<e.length;r++)a.push(e[r].response.message);else a.push(e[e.length-1].response.message);a.length>0&&(t=a.join(",")),this.$emit("change",t)},handleDelete:function(e){console.log(e)},handleCancel:function(){this.close(),this.previewVisible=!1},close:function(){}},model:{prop:"value",event:"change"}},c=d,p=a("2877"),u=Object(p["a"])(c,r,i,!1,null,"46b1a830",null);t["default"]=u.exports},f21f:function(e,t,a){"use strict";var r=a("6e05"),i=a.n(r);i.a}}]);