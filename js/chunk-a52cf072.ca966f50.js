(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a52cf072","chunk-a52cf072"],{"24b9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:10,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"部门角色名称"}},[a("a-input",{attrs:{placeholder:"请输入部门角色"},model:{value:e.queryParam.roleName,callback:function(t){e.$set(e.queryParam,"roleName",t)},expression:"queryParam.roleName"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("部门角色录入")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v("\n        "+e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[a("a",[e._v("删除")])])],1),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(s)}}},[e._v("详情")])]),a("a-menu-item",[a("a",{on:{click:function(t){return e.handlePerssion(s)}}},[e._v("授权")])])],1)],1)],1)}}])})],1),a("sys-depart-role-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("dept-role-auth-modal",{ref:"modalDeptRole"})],1)},i=[],r=a("b65a"),n=a("0fea"),l=a("a119"),o=a("dc4b"),c={name:"DeptRoleInfo",components:{DeptRoleAuthModal:o["default"],SysDepartRoleModal:l["default"]},mixins:[r["a"]],data:function(){return{description:"部门角色信息",currentDeptId:"",columns:[{title:"部门角色名称",align:"center",dataIndex:"roleName"},{title:"部门角色编码",align:"center",dataIndex:"roleCode"},{title:"部门",align:"center",dataIndex:"departId_dictText"},{title:"备注",align:"center",dataIndex:"description"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:170}],url:{list:"/sys/sysDepartRole/list",delete:"/sys/sysDepartRole/delete",deleteBatch:"/sys/sysDepartRole/deleteBatch"}}},created:function(){},methods:{searchReset:function(){this.queryParam={},this.currentDeptId="",this.loadData(1),this.$emit("clearSelectedDepartKeys")},loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();a.deptId=this.currentDeptId,Object(n["getAction"])(this.url.list,a).then((function(e){e.success&&e.result&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total)}))}else this.$message.error("请设置url.list属性!")},open:function(e){this.currentDeptId=e.id,this.loadData(1)},clearList:function(){this.currentDeptId="",this.dataSource=[]},hasSelectDept:function(){return""!=this.currentDeptId||(this.$message.error("请选择一个部门!"),!1)},handleEdit:function(e){this.$refs.modalForm.title="编辑",this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.disableSubmit=!1,this.$refs.modalForm.edit(e,e.departId)},handleAdd:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):(this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.add(this.currentDeptId),this.$refs.modalForm.title="新增")},handlePerssion:function(e){this.$refs.modalDeptRole.show(e.id,e.departId)}}},d=c,u=a("2877"),h=Object(u["a"])(d,s,i,!1,null,"d28057ce",null);t["default"]=h.exports},"2da3":function(e,t,a){},"57ed":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:600,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"字典名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dictName",e.validatorRules.dictName],expression:"[ 'dictName', validatorRules.dictName]"}],attrs:{placeholder:"请输入字典名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"字典编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dictCode",e.validatorRules.dictCode],expression:"[ 'dictCode', validatorRules.dictCode]"}],attrs:{placeholder:"请输入字典编码"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"[ 'description']"}]})],1)],1)],1)],1)},i=[],r=a("88bc"),n=a.n(r),l=a("4ec3"),o={name:"DictModal",data:function(){return{value:1,title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{dictName:{rules:[{required:!0,message:"请输入字典名称!"}]},dictCode:{rules:[{required:!0,message:"请输入字典编码!"},{validator:this.validateDictCode}]}}}},created:function(){},methods:{validateDictCode:function(e,t,a){var s={tableName:"sys_dict",fieldName:"dict_code",fieldVal:t,dataId:this.model.id};Object(l["m"])(s).then((function(e){e.success?a():a(e.message)}))},handleChange:function(e){this.model.status=e},add:function(){this.edit({})},edit:function(e){var t=this;e.id?this.visiblekey=!0:this.visiblekey=!1,this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(n()(t.model,"dictName","dictCode","description"))}))},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,s){if(!a){t.confirmLoading=!0,s.dictName=(s.dictName||"").trim(),s.dictCode=(s.dictCode||"").trim(),s.description=(s.description||"").trim();var i,r=Object.assign(e.model,s);console.log(r),i=e.model.id?Object(l["n"])(r):Object(l["a"])(r),i.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},close:function(){this.$emit("close"),this.visible=!1}}},c=o,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=u.exports},5859:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:10,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"用户账号"}},[a("a-input",{attrs:{placeholder:"请输入账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"-15px"},attrs:{md:24,sm:24}},[a("a-button",{staticStyle:{"margin-top":"16px"},attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("用户录入")]),a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAddUserDepart}},[e._v("添加已有用户")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          取消关联\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(s)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定取消与选中部门关联吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[a("a",[e._v("取消关联")])])],1),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDeptRole(s)}}},[e._v("分配部门角色")])])],1)],1)],1)}}])})],1),a("user-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("Select-User-Modal",{ref:"selectUserModal",on:{selectFinished:e.selectOK}}),a("dept-role-user-modal",{ref:"deptRoleUser"})],1)},i=[],r=a("b65a"),n=a("0fea"),l=a("b3c4"),o=a("418f"),c=a("8034"),d={name:"DeptUserInfo",mixins:[r["a"]],components:{DeptRoleUserModal:c["default"],SelectUserModal:l["default"],UserModal:o["default"]},data:function(){return{description:"用户信息",currentDeptId:"",columns:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"性别",align:"center",dataIndex:"sex_dictText"},{title:"电话",align:"center",dataIndex:"phone"},{title:"部门",align:"center",dataIndex:"orgCode"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:170}],url:{list:"/sys/user/departUserList",edit:"/sys/user/editSysDepartWithUser",delete:"/sys/user/deleteUserInDepart",deleteBatch:"/sys/user/deleteUserInDepartBatch"}}},created:function(){},methods:{searchReset:function(){this.queryParam={},this.currentDeptId="",this.loadData(1),this.$emit("clearSelectedDepartKeys")},loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();a.depId=this.currentDeptId,Object(n["getAction"])(this.url.list,a).then((function(e){e.success&&e.result&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total)}))}else this.$message.error("请设置url.list属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.currentDeptId)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;console.log(this.currentDeptId),this.$confirm({title:"确认取消",content:"是否取消用户与选中部门的关联?",onOk:function(){Object(n["deleteAction"])(a.url.deleteBatch,{depId:a.currentDeptId,userIds:e}).then((function(e){e.success?(a.$message.success("删除用户与选中部门关系成功！"),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)}))}})}else this.$message.error("未选中任何部门，无法取消部门与用户的关联!");else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){var t=this;if(this.url.delete)if(this.currentDeptId){var a=this;Object(n["deleteAction"])(a.url.delete,{depId:this.currentDeptId,userId:e}).then((function(s){if(s.success){if(a.$message.success("删除用户与选中部门关系成功！"),t.selectedRowKeys.length>0)for(var i=0;i<t.selectedRowKeys.length;i++)if(t.selectedRowKeys[i]==e){t.selectedRowKeys.splice(i,1);break}a.loadData()}else a.$message.warning(s.message)}))}else this.$message.error("未选中任何部门，无法取消部门与用户的关联!");else this.$message.error("请设置url.delete属性!")},open:function(e){this.currentDeptId=e.id,this.loadData(1)},clearList:function(){this.currentDeptId="",this.dataSource=[]},hasSelectDept:function(){return""!=this.currentDeptId||(this.$message.error("请选择一个部门!"),!1)},handleAddUserDepart:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):this.$refs.selectUserModal.visible=!0},handleEdit:function(e){this.$refs.modalForm.title="编辑",this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.disableSubmit=!1,this.$refs.modalForm.edit(e)},handleAdd:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):(this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.userDepartModel.departIdList=[this.currentDeptId],this.$refs.modalForm.add(),this.$refs.modalForm.title="新增")},selectOK:function(e){var t=this,a={};a.depId=this.currentDeptId,a.userIdList=[];for(var s=0;s<e.length;s++)a.userIdList.push(e[s]);console.log(a),Object(n["postAction"])(this.url.edit,a).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},handleDeptRole:function(e){this.$refs.deptRoleUser.add(e,this.currentDeptId),this.$refs.deptRoleUser.title="部门角色分配"}}},u=d,h=(a("f689"),a("2877")),m=Object(h["a"])(u,s,i,!1,null,"1ce956fe",null);t["default"]=m.exports},"5a4b":function(e,t,a){"use strict";var s=a("87f3"),i=a.n(s);i.a},"798d":function(e,t,a){"use strict";var s=a("9efd"),i=a.n(s);i.a},8034:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"600",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[e.designNameOption.length>0?a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:""}},[a("a-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[a("a-card",{style:{marginTop:"12px",height:"auto"}},[a("a-checkbox-group",{staticStyle:{width:"100%"},on:{change:e.designNameChange},model:{value:e.designNameValue,callback:function(t){e.designNameValue=t},expression:"designNameValue"}},[a("a-row",[e._l(e.designNameOption,(function(t){return[a("a-col",{attrs:{span:6}},[a("a-checkbox",{attrs:{value:t.value}},[e._v(e._s(t.text))])],1)]}))],2)],1)],1)],1)],1)],1):a("div",[a("h3",[e._v("无可配置角色!")])])],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"2",on:{click:e.cancelCheckALL}},[e._v("取消全选")])],1),a("a-button",[e._v("\n        操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存")])],1)],1)},i=[],r=(a("ac4d"),a("8a81"),a("ac6a"),a("0fea")),n=a("d579"),l=(a("89f2"),{name:"DeptRoleUserModal",components:{JEllipsis:n["default"]},data:function(){return{currentDeptId:"",title:"部门角色分配",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/sys/sysDepartRole/deptRoleUserAdd",getDeptRoleList:"/sys/sysDepartRole/getDeptRoleList",getDeptRoleByUserId:"/sys/sysDepartRole/getDeptRoleByUserId"},designNameOption:[],userId:"",newRoleId:"",oldRoleId:"",designNameValue:[],desformList:[]}},created:function(){},methods:{add:function(e,t){this.userId=e.id,this.currentDeptId=t,this.loadDesformList(),this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,Object(r["getAction"])(this.url.getDeptRoleByUserId,{userId:this.userId}).then((function(e){if(e.success){var a=[],s=!0,i=!1,r=void 0;try{for(var n,l=e.result[Symbol.iterator]();!(s=(n=l.next()).done);s=!0){var o=n.value;a.push(o.droleId)}}catch(c){i=!0,r=c}finally{try{s||null==l.return||l.return()}finally{if(i)throw r}}t.oldRoleId=a.join(","),t.designNameValue=a,t.newRoleId=a.join(",")}}))},close:function(){this.$emit("close"),this.visible=!1},handleSubmit:function(){var e=this;e.confirmLoading=!0;var t=this.url.add,a="post",s=Object.assign(this.model,{});s.userId=this.userId,s.newRoleId=this.newRoleId,s.oldRoleId=this.oldRoleId,Object(r["httpAction"])(t,s,a).then((function(t){t.success?(e.$message.success(t.message),e.$emit("reload"),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))},handleCancel:function(){this.designNameOption=[],this.designNameValue=[],this.close()},designNameChange:function(e){this.newRoleId=e.join(",")},checkALL:function(){var e=[],t=!0,a=!1,s=void 0;try{for(var i,r=this.desformList[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var n=i.value;e.push(n.id)}}catch(l){a=!0,s=l}finally{try{t||null==r.return||r.return()}finally{if(a)throw s}}this.designNameValue=e,this.newRoleId=e.join(",")},cancelCheckALL:function(){this.designNameValue=[],this.newRoleId=""},loadDesformList:function(){var e=this;Object(r["getAction"])(this.url.getDeptRoleList,{departId:this.currentDeptId}).then((function(t){if(t.success){e.desformList=t.result;var a=[],s=!0,i=!1,r=void 0;try{for(var n,l=e.desformList[Symbol.iterator]();!(s=(n=l.next()).done);s=!0){var o=n.value;a.push({value:o.id,text:o.roleName})}}catch(c){i=!0,r=c}finally{try{s||null==l.return||l.return()}finally{if(i)throw r}}e.designNameOption=a}}))}}}),o=l,c=(a("798d"),a("2877")),d=Object(c["a"])(o,s,i,!1,null,"3eab4717",null);t["default"]=d.exports},8144:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["itemText",e.validatorRules.itemText],expression:"['itemText', validatorRules.itemText]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据值"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["itemValue",e.validatorRules.itemValue],expression:"['itemValue', validatorRules.itemValue]"}],attrs:{placeholder:"请输入数据值"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}]})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序值"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sortOrder",{initialValue:1}],expression:"['sortOrder',{'initialValue':1}]"}],attrs:{min:1}}),e._v("\n        值越小越靠前，支持小数\n      ")],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"是否启用",hasFeedback:""}},[a("a-switch",{attrs:{checkedChildren:"启用",unCheckedChildren:"禁用"},on:{change:e.onChose},model:{value:e.visibleCheck,callback:function(t){e.visibleCheck=t},expression:"visibleCheck"}})],1)],1)],1)],1)},i=[],r=a("88bc"),n=a.n(r),l=a("4ec3"),o={name:"DictItemModal",data:function(){return{title:"操作",visible:!1,visibleCheck:!0,model:{},dictId:"",status:1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{itemText:{rules:[{required:!0,message:"请输入名称!"}]},itemValue:{rules:[{required:!0,message:"请输入数据值!"}]}}}},created:function(){},methods:{add:function(e){this.dictId=e,this.edit({})},edit:function(e){var t=this;e.id&&(this.dictId=e.dictId,this.visibleCheck=1==e.status),this.form.resetFields(),this.model=Object.assign({},e),this.model.dictId=this.dictId,this.model.status=this.status,this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(n()(t.model,"itemText","itemValue","description","sortOrder"))}))},onChose:function(e){e?(this.status=1,this.visibleCheck=!0):(this.status=0,this.visibleCheck=!1)},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,s){if(!a){t.confirmLoading=!0,s.itemText=(s.itemText||"").trim(),s.itemValue=(s.itemValue||"").trim(),s.description=(s.description||"").trim();var i,r=Object.assign(e.model,s);r.status=e.status,i=e.model.id?Object(l["o"])(r):Object(l["b"])(r),i.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},close:function(){this.$emit("close"),this.visible=!1}}},c=o,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=u.exports},"87f3":function(e,t,a){},"9efd":function(e,t,a){},d456:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,s){return a("a-col",{key:"dr"+s,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},i=[],r=(a("28a5"),a("290c")),n=a("da05"),l=a("0fea"),o={name:"DeptRoleDataruleModal",components:{ACol:n["a"],ARow:r["a"]},data:function(){return{departId:"",functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartRole/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(l["getAction"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId,"/").concat(this.roleId)).then((function(t){if(console.log(t),t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};console.log("保存数据权限",t),Object(l["postAction"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t,a){this.onReset(),this.departId=t,this.functionId=e,this.roleId=a,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=o,d=a("2877"),u=Object(d["a"])(c,s,i,!1,null,"776b339a",null);t["default"]=u.exports},dc4b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"650",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的部门权限"}},[e.treeData.length>0?a("a-tree",{attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var s=t.slotTitle,i=t.ruleFlag;return a("span",{},[e._v("\n          "+e._s(s)),i?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,2869785871)}):a("div",[a("h3",[e._v("无可配置部门权限!")])])],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n        树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{staticStyle:{"margin-right":"0.8rem"},attrs:{type:"primary",loading:e.loading,ghost:""},on:{click:function(t){return e.handleSubmit(!1)}}},[e._v("仅保存")]),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存并关闭")])],1),a("dept-role-datarule-modal",{ref:"datarule"})],1)},i=[],r=(a("ac4d"),a("8a81"),a("ac6a"),a("75fc")),n=a("4ec3"),l=a("2285"),o=a("d456"),c={name:"DeptRoleAuthModal",components:{DeptRoleDataruleModal:o["default"],RoleDataruleModal:l["default"]},data:function(){return{departId:"",roleId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!1,title:"部门角色权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId,this.roleId)},onCheck:function(e,t){var a=t.halfCheckedKeys;this.checkedKeys=e,this.halfCheckedKeys=a},show:function(e,t){this.departId=t,this.roleId=e,this.visible=!0},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(e){var t=this,a=this,s=[].concat(Object(r["a"])(a.checkedKeys),Object(r["a"])(a.halfCheckedKeys)),i=s.join(","),l={roleId:a.roleId,permissionIds:i,lastpermissionIds:a.defaultCheckedKeys.join(",")};a.loading=!0,console.log("请求参数：",l),Object(n["saveDeptRolePermission"])(l).then((function(s){s.success?(a.$message.success(s.message),a.loading=!1,e&&a.close()):(a.$message.error(s.message),a.loading=!1,e&&a.close()),t.loadData()}))},convertTreeListToKeyLeafPairs:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=!0,s=!1,i=void 0;try{for(var r,n=e[Symbol.iterator]();!(a=(r=n.next()).done);a=!0){var l=r.value,o=l.key,c=l.isLeaf,d=l.children;t.push({key:o,isLeaf:c}),d&&d.length>0&&this.convertTreeListToKeyLeafPairs(d,t)}}catch(u){s=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return t},loadData:function(){var e=this;Object(n["queryTreeListForDeptRole"])({departId:this.departId}).then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids;var a=e.convertTreeListToKeyLeafPairs(e.treeData);Object(n["queryDeptRolePermission"])({roleId:e.roleId}).then((function(t){var s=Object(r["a"])(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&t.isLeaf})),i=Object(r["a"])(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&!t.isLeaf}));e.checkedKeys=Object(r["a"])(s),e.halfCheckedKeys=Object(r["a"])(i),e.defaultCheckedKeys=[].concat(Object(r["a"])(i),Object(r["a"])(s)),e.expandedKeysss=e.allTreeKeys}))}))}},watch:{visible:function(){this.visible&&this.loadData()}}},d=c,u=(a("5a4b"),a("2877")),h=Object(u["a"])(d,s,i,!1,null,"3e6ff246",null);t["default"]=h.exports},f689:function(e,t,a){"use strict";var s=a("2da3"),i=a.n(s);i.a}}]);