(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c596293","chunk-b59a8620","chunk-2d0c45fa","chunk-2d0dd42f","chunk-2d0c93b7","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"37cd":function(e,t,a){},3957:function(e,t,a){"use strict";var i=a("37cd"),s=a.n(i);s.a},"3b0e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{style:e.modalStyle,attrs:{width:e.modalWidth,visible:e.visible,maskClosable:!1},on:{cancel:e.handleCancel}},[a("template",{slot:"footer"},[a("a-button",{on:{click:e.handleCancel}},[e._v("关闭")])],1),a("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",columns:e.columns,loading:e.loading,dataSource:e.dataSource,pagination:!1},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.handleBack(i.id)}}},[a("a-icon",{attrs:{type:"redo"}}),e._v("字典取回")],1),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.handleDelete(i.id)}}},[a("a-icon",{attrs:{type:"scissor"}}),e._v("彻底删除")],1)],1)}}])})],2)},s=[],n=a("0fea"),r={name:"DictDeleteList",data:function(){return{modalWidth:"90%",modalStyle:{top:"20px"},title:"操作",visible:!1,loading:!1,dataSource:[],columns:[{title:"#",dataIndex:"",key:"rowIndex",width:120,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"字典名称",align:"left",dataIndex:"dictName"},{title:"字典编号",align:"left",dataIndex:"dictCode"},{title:"描述",align:"left",dataIndex:"description"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}]}},methods:{handleCancel:function(){this.visible=!1},show:function(){this.visible=!0,this.loadData()},loadData:function(){var e=this;this.loading=!0,Object(n["getAction"])("/sys/dict/deleteList").then((function(t){e.loading=!1,t.success?e.dataSource=t.result:e.$message.warning(t.message)}))},handleBack:function(e){var t=this;Object(n["putAction"])("/sys/dict/back/"+e).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},handleDelete:function(e){var t=this;Object(n["deleteAction"])("/sys/dict/deletePhysic/"+e).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}}},o=r,l=a("2877"),c=Object(l["a"])(o,i,s,!1,null,"610c004e",null);t["default"]=c.exports},"57ed":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:600,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"字典名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dictName",e.validatorRules.dictName],expression:"[ 'dictName', validatorRules.dictName]"}],attrs:{placeholder:"请输入字典名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"字典编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dictCode",e.validatorRules.dictCode],expression:"[ 'dictCode', validatorRules.dictCode]"}],attrs:{placeholder:"请输入字典编码"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"[ 'description']"}]})],1)],1)],1)],1)},s=[],n=a("4ec3"),r={name:"DictModal",data:function(){return{value:1,title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{dictName:{rules:[{required:!0,message:"请输入字典名称!"}]},dictCode:{rules:[{required:!0,message:"请输入字典编码!"},{validator:this.validateDictCode}]}}}},created:function(){},methods:{validateDictCode:function(e,t,a){var i={tableName:"sys_dict",fieldName:"dict_code",fieldVal:t,dataId:this.model.id};Object(n["m"])(i).then((function(e){e.success?a():a(e.message)}))},handleChange:function(e){this.model.status=e},add:function(){this.edit({})},edit:function(e){var t=this;e.id?this.visiblekey=!0:this.visiblekey=!1,this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(pick(t.model,"dictName","dictCode","description"))}))},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,i){if(!a){t.confirmLoading=!0,i.dictName=(i.dictName||"").trim(),i.dictCode=(i.dictCode||"").trim(),i.description=(i.description||"").trim();var s,r=Object.assign(e.model,i);console.log(r),s=e.model.id?Object(n["n"])(r):Object(n["a"])(r),s.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},close:function(){this.$emit("close"),this.visible=!1}}},o=r,l=a("2877"),c=Object(l["a"])(o,i,s,!1,null,null,null);t["default"]=c.exports},"59a0":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("a-drawer",{attrs:{title:"字典列表",width:e.screenWidth,visible:e.visible},on:{close:e.onClose}},[a("div",{style:{padding:"10px",border:"1px solid #e9e9e9",background:"#fff"}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline",form:e.form},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:8,sm:12}},[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{staticStyle:{width:"120px"},attrs:{placeholder:"请输入名称"},model:{value:e.queryParam.itemText,callback:function(t){e.$set(e.queryParam,"itemText",t)},expression:"queryParam.itemText"}})],1)],1),a("a-col",{attrs:{md:9,sm:24}},[a("a-form-item",{staticStyle:{width:"170px"},attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-select",{attrs:{placeholder:"请选择"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"0"}},[e._v("禁用")])],1)],1)],1),a("a-col",{attrs:{md:7,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("搜索")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1),a("a-row",[a("a-col",{attrs:{md:2,sm:24}},[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1)],1),a("div",[a("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(i)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(i.id)}}},[a("a",[e._v("删除")])])],1)}}])})],1)])]),a("dict-item-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},s=[],n=a("ca00"),r=a("8144"),o=a("b65a"),l={name:"DictItemList",mixins:[o["a"]],components:{DictItemModal:r["default"]},data:function(){return{columns:[{title:"名称",align:"center",dataIndex:"itemText"},{title:"数据值",align:"center",dataIndex:"itemValue"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],queryParam:{dictId:"",dictName:"",itemText:"",delFlag:"1",status:[]},title:"操作",visible:!1,screenWidth:800,model:{},dictId:"",status:1,labelCol:{xs:{span:5},sm:{span:5}},wrapperCol:{xs:{span:12},sm:{span:12}},form:this.$form.createForm(this),validatorRules:{itemText:{rules:[{required:!0,message:"请输入名称!"}]},itemValue:{rules:[{required:!0,message:"请输入数据值!"}]}},url:{list:"/sys/dictItem/list",delete:"/sys/dictItem/delete",deleteBatch:"/sys/dictItem/deleteBatch"}}},created:function(){this.resetScreenSize()},methods:{add:function(e){this.dictId=e,this.edit({})},edit:function(e){var t=this;e.id&&(this.dictId=e.id),this.queryParam={},this.form.resetFields(),this.model=Object.assign({},e),this.model.dictId=this.dictId,this.model.status=this.status,this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(pick(t.model,"itemText","itemValue"))})),this.loadData()},getQueryParams:function(){var e=Object.assign({},this.queryParam);return e.dictId=this.dictId,e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(n["filterObj"])(e)},handleAdd:function(){this.$refs.modalForm.add(this.dictId),this.$refs.modalForm.title="新增"},showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1,this.form.resetFields(),this.dataSource=[]},resetScreenSize:function(){var e=document.body.clientWidth;this.screenWidth=e<600?e:600}}},c=l,d=a("2877"),u=Object(d["a"])(c,i,s,!1,null,"09d8cbee",null);t["default"]=u.exports},8144:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["itemText",e.validatorRules.itemText],expression:"['itemText', validatorRules.itemText]"}],attrs:{placeholder:"请输入名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据值"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["itemValue",e.validatorRules.itemValue],expression:"['itemValue', validatorRules.itemValue]"}],attrs:{placeholder:"请输入数据值"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}]})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序值"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sortOrder",{initialValue:1}],expression:"['sortOrder',{'initialValue':1}]"}],attrs:{min:1}}),e._v("\n        值越小越靠前，支持小数\n      ")],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"是否启用",hasFeedback:""}},[a("a-switch",{attrs:{checkedChildren:"启用",unCheckedChildren:"禁用"},on:{change:e.onChose},model:{value:e.visibleCheck,callback:function(t){e.visibleCheck=t},expression:"visibleCheck"}})],1)],1)],1)],1)},s=[],n=a("4ec3"),r={name:"DictItemModal",data:function(){return{title:"操作",visible:!1,visibleCheck:!0,model:{},dictId:"",status:1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{itemText:{rules:[{required:!0,message:"请输入名称!"}]},itemValue:{rules:[{required:!0,message:"请输入数据值!"}]}}}},created:function(){},methods:{add:function(e){this.dictId=e,this.edit({})},edit:function(e){var t=this;e.id&&(this.dictId=e.dictId,this.visibleCheck=1==e.status),this.form.resetFields(),this.model=Object.assign({},e),this.model.dictId=this.dictId,this.model.status=this.status,this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(pick(t.model,"itemText","itemValue","description","sortOrder"))}))},onChose:function(e){e?(this.status=1,this.visibleCheck=!0):(this.status=0,this.visibleCheck=!1)},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,i){if(!a){t.confirmLoading=!0,i.itemText=(i.itemText||"").trim(),i.itemValue=(i.itemValue||"").trim(),i.description=(i.description||"").trim();var s,r=Object.assign(e.model,i);r.status=e.status,s=e.model.id?Object(n["o"])(r):Object(n["b"])(r),s.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},close:function(){this.$emit("close"),this.visible=!1}}},o=r,l=a("2877"),c=Object(l["a"])(o,i,s,!1,null,null,null);t["default"]=c.exports},b4e3:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:12}},[a("a-col",{attrs:{md:7,sm:8}},[a("a-form-item",{attrs:{label:"字典名称",labelCol:{span:6},wrapperCol:{span:14,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入字典名称"},model:{value:e.queryParam.dictName,callback:function(t){e.$set(e.queryParam,"dictName",t)},expression:"queryParam.dictName"}})],1)],1),a("a-col",{attrs:{md:7,sm:8}},[a("a-form-item",{attrs:{label:"字典编号",labelCol:{span:6},wrapperCol:{span:14,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入字典编号"},model:{value:e.queryParam.dictCode,callback:function(t){e.$set(e.queryParam,"dictCode",t)},expression:"queryParam.dictCode"}})],1)],1),a("a-col",{attrs:{md:7,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"border-top":"5px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("添加")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("字典信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("a-button",{attrs:{type:"primary",icon:"sync"},on:{click:function(t){return e.refleshCache()}}},[e._v("刷新缓存")]),a("a-button",{attrs:{type:"primary",icon:"hdd"},on:{click:e.openDeleteList}},[e._v("回收站")])],1),a("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(i)}}},[a("a-icon",{attrs:{type:"edit"}}),e._v("\n          编辑\n        ")],1),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.editDictItem(i)}}},[a("a-icon",{attrs:{type:"setting"}}),e._v(" 字典配置")],1),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(i.id)}}},[a("a",[e._v("删除")])])],1)}}])})],1),a("dict-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("dict-item-list",{ref:"dictItemList"}),a("dict-delete-list",{ref:"dictDeleteList"})],1)},s=[],n=a("ca00"),r=a("b65a"),o=a("57ed"),l=a("59a0"),c=a("3b0e"),d=a("0fea"),u={name:"DictList",mixins:[r["a"]],components:{DictModal:o["default"],DictItemList:l["default"],DictDeleteList:c["default"]},data:function(){return{description:"这是数据字典页面",visible:!1,queryParam:{dictCode:"",dictName:""},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:120,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"字典名称",align:"left",dataIndex:"dictName"},{title:"字典编号",align:"left",dataIndex:"dictCode"},{title:"描述",align:"left",dataIndex:"description"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],dict:"",labelCol:{xs:{span:8},sm:{span:5}},wrapperCol:{xs:{span:16},sm:{span:19}},url:{list:"/sys/dict/list",delete:"/sys/dict/delete",exportXlsUrl:"sys/dict/exportXls",importExcelUrl:"sys/dict/importExcel",refleshCache:"sys/dict/refleshCache"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(n["filterObj"])(e)},cancelDict:function(){this.dict="",this.visible=!1,this.loadData()},editDictItem:function(e){this.$refs.dictItemList.edit(e)},searchReset:function(){var e=this;e.queryParam.dictName="",e.queryParam.dictCode="",e.loadData(this.ipagination.current)},openDeleteList:function(){this.$refs.dictDeleteList.show()},refleshCache:function(){var e=this;Object(d["getAction"])(this.url.refleshCache).then((function(t){t.success&&e.$message.success("刷新缓存完成！")})).catch((function(t){e.$message.warn("刷新缓存失败！"),console.log("刷新失败",t)}))}},watch:{openKeys:function(e){console.log("openKeys",e)}}},m=u,h=(a("3957"),a("2877")),f=Object(h["a"])(m,i,s,!1,null,"1c938094",null);t["default"]=f.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("8e6e"),a("7f7f");var i=a("bd86"),s=(a("456d"),a("ac6a"),a("ca00")),n=a("0fea"),r=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={data:function(){return{tokenHeader:{"X-Access-Token":Vue.ls.get(r["ACCESS_TOKEN"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(n["getAction"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(s["filterObj"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(n["deleteAction"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(n["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(n["downFile"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var i=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=i,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(i)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,i=a.message,s=a.result,n=s.msg,r=s.fileUrl,o=s.fileName,l=window._CONFIG["domianURL"]+r;this.$warning({title:i,content:t("div",[t("span",[" ",n," "]),t("br"),t("span",[" 具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},[" 点击下载 "])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}}}]);