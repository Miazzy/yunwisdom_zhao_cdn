(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-362475d4","chunk-611c97e4","chunk-2d0e1b62","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"25f0":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-button",{attrs:{ghost:"",type:"primary",icon:"delete"},on:{click:e.batchDel}},[e._v("批量删除\n    ")]):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v("已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项  \n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{attrs:{columns:e.columns,size:"middle",pagination:!1,dataSource:e.dataSource,loading:e.loading,expandedRowKeys:e.expandedRowKeys,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{expandedRowsChange:e.handleExpandedRowsChange},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(s)}}},[e._v("详情")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleAddSub(s)}}},[e._v("添加子菜单")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDataRule(s)}}},[e._v("数据规则")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}},{key:"url",fn:function(e){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:25}})],1)}},{key:"component",fn:function(e){return a("span",{},[a("j-ellipsis",{attrs:{value:e}})],1)}}])})],1),a("permission-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("permission-data-rule-list",{ref:"PermissionDataRuleList",on:{ok:e.modalFormOk}})],1)},i=[],n=a("b90e"),r=a("4ec3"),o=a("b65a"),l=a("56cd"),u=a("d579"),d=[{title:"菜单名称",dataIndex:"name",key:"name"},{title:"菜单类型",dataIndex:"menuType",key:"menuType",customRender:function(e){return 0==e?"菜单":1==e?"菜单":2==e?"按钮/权限":e}},{title:"icon",dataIndex:"icon",key:"icon"},{title:"组件",dataIndex:"component",key:"component",scopedSlots:{customRender:"component"}},{title:"路径",dataIndex:"url",key:"url",scopedSlots:{customRender:"url"}},{title:"排序",dataIndex:"sortNo",key:"sortNo"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:150}],c={name:"PermissionList",mixins:[o["a"]],components:{PermissionDataRuleList:l["default"],PermissionModal:n["default"],JEllipsis:u["default"]},data:function(){return{description:"这是菜单管理页面",columns:d,loading:!1,expandedRowKeys:[],url:{list:"/sys/permission/list",delete:"/sys/permission/delete",deleteBatch:"/sys/permission/deleteBatch"}}},methods:{loadData:function(){var e=this;this.dataSource=[],Object(r["u"])().then((function(t){t.success&&(console.log(t.result),e.dataSource=t.result)}))},handleDataRule:function(e){this.$refs.PermissionDataRuleList.edit(e)},handleAddSub:function(e){this.$refs.modalForm.title="添加子菜单",this.$refs.modalForm.localMenuType=1,this.$refs.modalForm.disableSubmit=!1,this.$refs.modalForm.edit({status:"1",permsType:"1",route:!0,parentId:e.id})},handleExpandedRowsChange:function(e){this.expandedRowKeys=e}}},m=c,h=(a("27a3"),a("2877")),f=Object(h["a"])(m,s,i,!1,null,"278adfbc",null);t["default"]=f.exports},"27a3":function(e,t,a){"use strict";var s=a("ad77"),i=a.n(s);i.a},"315e":function(e,t,a){"use strict";var s=a("d90d"),i=a.n(s);i.a},"56cd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据权限规则",width:e.drawerWidth,visible:e.visible,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"}},on:{close:e.onClose}},[a("div",{style:{padding:"10px",border:"1px solid #e9e9e9",background:"#fff"}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:12}},[a("a-col",{attrs:{md:8,sm:8}},[a("a-form-item",{attrs:{label:"规则名称",labelCol:{span:8},wrapperCol:{span:14,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入规则名称"},model:{value:e.queryParam.ruleName,callback:function(t){e.$set(e.queryParam,"ruleName",t)},expression:"queryParam.ruleName"}})],1)],1),a("a-col",{attrs:{md:8,sm:8}},[a("a-form-item",{attrs:{label:"规则值",labelCol:{span:8},wrapperCol:{span:14,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入规则值"},model:{value:e.queryParam.ruleValue,callback:function(t){e.$set(e.queryParam,"ruleValue",t)},expression:"queryParam.ruleValue"}})],1)],1),a("a-col",{attrs:{md:7,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1),a("a-row",[a("a-col",{attrs:{md:24,sm:24}},[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"plus"},on:{click:e.addPermissionRule}},[e._v("添加")])],1)],1)],1),a("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",columns:e.columns,dataSource:e.dataSource,loading:e.loading,rowClassName:e.getRowClassname},scopedSlots:e._u([{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(s)}}},[a("a-icon",{attrs:{type:"edit"}}),e._v("编辑\n          ")],1),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[a("a",[e._v("删除")])])],1)}}])})],1)]),a("permission-data-rule-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=a("4ec3"),r=a("b65a"),o=a("7c33"),l=[{title:"规则名称",dataIndex:"ruleName",key:"ruleName"},{title:"规则字段",dataIndex:"ruleColumn",key:"ruleColumn"},{title:"规则值",dataIndex:"ruleValue",key:"ruleValue"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center"}],u={name:"PermissionDataRuleList",mixins:[r["a"]],components:{PermissionDataRuleModal:o["default"]},data:function(){return{queryParam:{},drawerWidth:650,columns:l,permId:"",visible:!1,form:this.$form.createForm(this),loading:!1,url:{list:"/sys/permission/getPermRuleListByPermId",delete:"/sys/permission/deletePermissionRule"}}},created:function(){this.resetScreenSize()},methods:{loadData:function(){if(this.permId){var e=this;this.dataSource=[];var t=this.getQueryParams();Object(n["v"])(t).then((function(t){t.success&&(e.dataSource=t.result)}))}},edit:function(e){e.id&&(this.visible=!0,this.permId=e.id),this.queryParam={},this.queryParam.permissionId=e.id,this.visible=!0,this.loadData(),this.resetScreenSize()},addPermissionRule:function(){this.$refs.modalForm.add(this.permId),this.$refs.modalForm.title="新增"},searchQuery:function(){var e=this,t=this.getQueryParams();t.permissionId=this.permId,Object(n["G"])(t).then((function(t){t.success&&(e.dataSource=t.result)}))},searchReset:function(){this.queryParam={},this.queryParam.permissionId=this.permId,this.loadData(1)},onClose:function(){this.visible=!1},resetScreenSize:function(){var e=document.body.clientWidth;this.drawerWidth=e<500?e:650},getRowClassname:function(e){if(1!=e.status)return"data-rule-invalid"}}},d=u,c=(a("315e"),a("2877")),m=Object(c["a"])(d,s,i,!1,null,null,null);t["default"]=m.exports},"7c33":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleName",e.validatorRules.ruleName],expression:"['ruleName', validatorRules.ruleName]"}],attrs:{placeholder:"请输入规则名称"}})],1),a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showRuleColumn,expression:"showRuleColumn"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则字段"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleColumn",e.validatorRules.ruleColumn],expression:"['ruleColumn', validatorRules.ruleColumn]"}],attrs:{placeholder:"请输入规则字段"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"条件规则"}},[a("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleConditions",e.validatorRules.ruleConditions],expression:"['ruleConditions', validatorRules.ruleConditions]"}],attrs:{placeholder:"请输入条件规则",triggerChange:!0,dictCode:"rule_conditions"},on:{change:e.handleChangeRuleCondition}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则值"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleValue",e.validatorRules.ruleValue],expression:"['ruleValue', validatorRules.ruleValue]"}],attrs:{placeholder:"请输入规则值"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1"}],expression:"['status',{initialValue:'1'}]"}],attrs:{buttonStyle:"solid"}},[a("a-radio-button",{attrs:{value:"1"}},[e._v("有效")]),a("a-radio-button",{attrs:{value:"0"}},[e._v("无效")])],1)],1)],1)],1)],1)},i=[],n=a("0fea"),r={name:"PermissionDataRuleModal",data:function(){return{queryParam:{},title:"操作",visible:!1,model:{},ruleConditionList:[],labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),permissionId:"",validatorRules:{ruleConditions:{rules:[{required:!0,message:"请选择条件!"}]},ruleName:{rules:[{required:!0,message:"请输入规则名称!"}]},ruleValue:{rules:[{required:!0,message:"请输入规则值!"}]},ruleColumn:{rules:[]}},url:{list:"/sys/dictItem/list",add:"/sys/permission/addPermissionRule",edit:"/sys/permission/editPermissionRule"},showRuleColumn:!0}},created:function(){},methods:{add:function(e){this.permissionId=e,this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),e.permissionId?this.model.permissionId=e.permissionId:this.model.permissionId=this.permissionId,this.visible=!0,this.initRuleCondition(),this.$nextTick((function(){t.form.setFieldsValue(pick(t.model,"status","ruleName","ruleColumn","ruleConditions","ruleValue"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,s){if(!a){t.confirmLoading=!0;var i="",r="";e.model.id?(i+=e.url.edit,r="put"):(i+=e.url.add,r="post");var o=Object.assign(e.model,s);o.ruleColumn&&o.ruleColumn.length>0&&(o.ruleColumn=o.ruleColumn.trim()),o.ruleValue&&o.ruleValue.length>0&&(o.ruleValue=o.ruleValue.trim()),Object(n["httpAction"])(i,o,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},initRuleCondition:function(){this.model.ruleConditions&&"USE_SQL_RULES"==this.model.ruleConditions?this.showRuleColumn=!1:this.showRuleColumn=!0},handleChangeRuleCondition:function(e){"USE_SQL_RULES"==e?(this.form.setFieldsValue({ruleColumn:""}),this.showRuleColumn=!1):this.showRuleColumn=!0}}},o=r,l=a("2877"),u=Object(l["a"])(o,s,i,!1,null,"6a4721b8",null);t["default"]=u.exports},ad77:function(e,t,a){},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("8e6e"),a("7f7f");var s=a("bd86"),i=(a("456d"),a("ac6a"),a("ca00")),n=a("0fea"),r=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{tokenHeader:{"X-Access-Token":Vue.ls.get(r["ACCESS_TOKEN"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(n["getAction"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(i["filterObj"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(n["deleteAction"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(n["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(n["downFile"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var s=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=s,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(s)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,s=a.message,i=a.result,n=i.msg,r=i.fileUrl,o=i.fileName,l=window._CONFIG["domianURL"]+r;this.$warning({title:s,content:t("div",[t("span",[" ",n," "]),t("br"),t("span",[" 具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},[" 点击下载 "])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},d579:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},i=[],n=(a("c5f6"),{name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}}),r=n,o=a("2877"),l=Object(o["a"])(r,s,i,!1,null,"4de15389",null);t["default"]=l.exports},d90d:function(e,t,a){}}]);