(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2094a5da","chunk-2d21e413","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"772b":function(e,t,a){},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("8e6e"),a("7f7f");var r=a("bd86"),s=(a("456d"),a("ac6a"),a("ca00")),i=a("0fea"),o=a("9fb0");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={data:function(){return{tokenHeader:{"X-Access-Token":Vue.ls.get(o["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(i["getAction"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(s["filterObj"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(i["deleteAction"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(i["downFile"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=r,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,s=a.result,i=s.msg,o=s.fileUrl,n=s.fileName,l=window._CONFIG["domianURL"]+o;this.$warning({title:r,content:t("div",[t("span",[" ",i," "]),t("br"),t("span",[" 具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:n}},[" 点击下载 "])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},bf63:function(e,t,a){"use strict";var r=a("772b"),s=a.n(r);s.a},d579:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},s=[],i=(a("c5f6"),{name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}}),o=i,n=a("2877"),l=Object(n["a"])(o,r,s,!1,null,"4de15389",null);t["default"]=l.exports},d57c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",e.validatorRules.name],expression:"['name', validatorRules.name]"}],attrs:{placeholder:"请输入数据源名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",e.validatorRules.code],expression:"['code', validatorRules.code]"}],attrs:{placeholder:"请输入数据源编码",disabled:!!e.model.id}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据库类型"}},[a("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbType",e.validatorRules.dbType],expression:"['dbType', validatorRules.dbType]"}],attrs:{placeholder:"请选择数据库类型","dict-code":"database_type",triggerChange:""},on:{change:e.handleDbTypeChange}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"驱动类"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbDriver",e.validatorRules.dbDriver],expression:"['dbDriver', validatorRules.dbDriver]"}],attrs:{placeholder:"请输入驱动类"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbUrl",e.validatorRules.dbUrl],expression:"['dbUrl', validatorRules.dbUrl]"}],attrs:{placeholder:"请输入数据源地址"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据库名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbName",e.validatorRules.dbName],expression:"['dbName', validatorRules.dbName]"}],attrs:{placeholder:"请输入数据库名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"用户名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbUsername",e.validatorRules.dbUsername],expression:"['dbUsername', validatorRules.dbUsername]"}],attrs:{placeholder:"请输入用户名"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"密码"}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:21}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbPassword",e.validatorRules.dbPassword],expression:"['dbPassword', validatorRules.dbPassword]"}],attrs:{placeholder:"请输入密码"}})],1),a("a-col",{attrs:{span:3}},[a("a-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"small"},on:{click:e.handleTest}},[e._v("测试")])],1)],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{}],expression:"['remark', {}]"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)},s=[],i=a("0fea"),o=a("ca00"),n={name:"SysDataSourceModal",components:{},data:function(){var e=this;return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{code:{validateFirst:!0,rules:[{required:!0,message:"请输入数据源编码!"},{validator:function(t,a,r){var s=/^[a-z|A-Z][a-z|A-Z\d_-]{0,}$/;s.test(a)?Object(o["validateDuplicateValue"])("sys_data_source","code",a,e.model.id,r):r("编码必须以字母开头，可包含数字、下划线、横杠")}}]},name:{rules:[{required:!0,message:"请输入数据源名称!"}]},dbType:{rules:[{required:!0,message:"请选择数据库类型!"}]},dbDriver:{rules:[{required:!0,message:"请输入驱动类!"}]},dbUrl:{rules:[{required:!0,message:"请输入数据源地址!"}]},dbName:{rules:[{required:!0,message:"请输入数据库名称!"}]},dbUsername:{rules:[{required:!0,message:"请输入用户名!"}]},dbPassword:{rules:[{required:!0,message:"请输入密码!"}]}},url:{add:"/sys/dataSource/add",edit:"/sys/dataSource/edit"},dbDriverMap:{1:{dbDriver:"com.mysql.jdbc.Driver"},2:{dbDriver:"oracle.jdbc.OracleDriver"},3:{dbDriver:"com.microsoft.sqlserver.jdbc.SQLServerDriver"}}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(pick(t.model,"code","name","remark","dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(t,a){if(!t){e.confirmLoading=!0;var r=Object.assign(e.model,a),s=e.url.add,o="post";e.model.id&&(s=e.url.edit,o="put",r["code"]=void 0),Object(i["httpAction"])(s,r,o).then((function(t){t.success?(e.$message.success(t.message),e.$emit("ok"),e.close()):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1}))}}))},handleCancel:function(){this.close()},handleTest:function(){var e=this,t=["dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"],a=this.form.getFieldsValue(t),r={};t.forEach((function(e){return r[e]={value:a[e],errors:null}})),this.form.setFields(r),this.$nextTick((function(){e.form.validateFields(t,(function(t,r){if(!t){var s=e.$message.loading("连接中……",0);Object(i["postAction"])("/online/cgreport/api/testConnection",a).then((function(t){if(!t.success)throw new Error(t.message);e.$message.success("连接成功")})).catch((function(t){e.$warning({title:"连接失败",content:t.message||t})})).finally((function(){return s()}))}}))}))},handleDbTypeChange:function(e){var t=this.dbDriverMap[e];t&&this.form.setFieldsValue(t)}}},l=n,d=a("2877"),c=Object(d["a"])(l,r,s,!1,null,"648d1a79",null);t["default"]=c.exports},fad2:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"数据源名称"}},[a("a-input",{attrs:{placeholder:"请输入数据源名称"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"数据库类型"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择数据库类型","dict-code":"database_type"},model:{value:e.queryParam.dbType,callback:function(t){e.$set(e.queryParam,"dbType",t)},expression:"queryParam.dbType"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("多数据源管理")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("a-alert",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"info",showIcon:""}},[a("template",{slot:"message"},[a("span",[e._v("已选择")]),a("a",{staticStyle:{"font-weight":"600",padding:"0 4px"}},[e._v(e._s(e.selectedRowKeys.length))]),a("span",[e._v("项")]),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])])],2),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("sys-data-source-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},s=[],i=a("d579"),o=a("b65a"),n=a("d57c"),l={name:"SysDataSourceList",mixins:[o["a"]],components:{JEllipsis:i["default"],SysDataSourceModal:n["default"]},data:function(){var e=this.$createElement,t=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return e("j-ellipsis",{attrs:{value:t,length:a}})};return{description:"多数据源管理管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return a+1}},{title:"数据源名称",align:"center",dataIndex:"name"},{title:"数据源编码",align:"center",dataIndex:"code"},{title:"备注",align:"center",dataIndex:"remark",customRender:function(e){return t(e)}},{title:"数据库类型",align:"center",dataIndex:"dbType_dictText"},{title:"驱动类",align:"center",dataIndex:"dbDriver",customRender:function(e){return t(e)}},{title:"数据源地址",align:"center",dataIndex:"dbUrl",customRender:function(e){return t(e)}},{title:"数据库名称",align:"center",dataIndex:"dbName"},{title:"用户名",align:"center",dataIndex:"dbUsername"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/dataSource/list",delete:"/sys/dataSource/delete",deleteBatch:"/sys/dataSource/deleteBatch",exportXlsUrl:"sys/dataSource/exportXls",importExcelUrl:"sys/dataSource/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{}},d=l,c=(a("bf63"),a("2877")),u=Object(c["a"])(d,r,s,!1,null,"2ad503fc",null);t["default"]=u.exports}}]);