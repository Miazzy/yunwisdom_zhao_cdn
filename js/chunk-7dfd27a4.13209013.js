(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dfd27a4","chunk-2d20fed6","chunk-567b83a8","chunk-2d20fed6","chunk-2d20fed6"],{"5df3":function(e,t,a){"use strict";var r=a("02f4")(!0);a("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=r(t,a),this._i+=e.length,{value:e,done:!1})}))},"95df":function(e,t,a){},b2da:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),a("span",[e._v("已选择")]),a("a",{staticStyle:{"font-weight":"600"}},[e._v("\n        "+e._s(e.selectedRowKeys.length)+"\n      ")]),a("span",[e._v("项")]),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("jeecg-order-modal-for-j-editable-table",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=a("b65a"),o=a("b8ad"),s={name:"JeecgOrderMainListForJEditableTable",mixins:[n["a"]],components:{JeecgOrderModalForJEditableTable:o["default"]},data:function(){return{description:"订单管理页面",url:{list:"/test/jeecgOrderMain/list",delete:"/test/jeecgOrderMain/delete",deleteBatch:"/test/jeecgOrderMain/deleteBatch"},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e){var t="";return"1"===e?t="国内订单":"2"===e&&(t="国际订单"),t}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}]}},methods:{initDictConfig:function(){}}},l=s,c=(a("e31a"),a("2877")),d=Object(c["a"])(l,r,i,!1,null,"1c6adbea",null);t["default"]=d.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("8e6e"),a("7f7f");var r=a("bd86"),i=(a("456d"),a("ac6a"),a("ca00")),n=a("0fea"),o=a("9fb0");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={data:function(){return{tokenHeader:{"X-Access-Token":Vue.ls.get(o["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(n["getAction"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(i["filterObj"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(n["deleteAction"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(n["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(n["downFile"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=r,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,i=a.result,n=i.msg,o=i.fileUrl,s=i.fileName,l=window._CONFIG["domianURL"]+o;this.$warning({title:r,content:t("div",[t("span",[" ",n," "]),t("br"),t("span",[" 具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:s}},[" 点击下载 "])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},b8ad:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{staticClass:"form-row",attrs:{gutter:0}},[a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请选择订单类型"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],staticStyle:{width:"100%"},attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:0}},[a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入订单金额"}})],1)],1),a("a-col",{attrs:{lg:8}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1)],1),a("a-tabs",{on:{change:e.handleChangeTabs},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户信息",forceRender:!0}},[a("j-editable-table",{ref:"editableTable1",attrs:{loading:e.table1.loading,columns:e.table1.columns,dataSource:e.table1.dataSource,maxHeight:300,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:!0}},[a("j-editable-table",{ref:"editableTable2",attrs:{loading:e.table2.loading,columns:e.table2.columns,dataSource:e.table2.dataSource,maxHeight:300,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1)],1)],1)],1)},i=[],n=(a("8e6e"),a("456d"),a("bd86")),o=(a("6b54"),a("ac6a"),a("5df3"),a("7550")),s=a("e2e0"),l=a("0fea"),c=a("2dab");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={name:"JeecgOrderModalForJEditableTable",components:{JDate:c["default"],JEditableTable:o["default"]},data:function(){return{title:"操作",visible:!1,form:this.$form.createForm(this),confirmLoading:!1,model:{},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},activeKey:"1",table1:{loading:!1,dataSource:[],columns:[{title:"客户名",key:"name",width:"24%",type:s["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"性别",key:"sex",width:"18%",type:s["a"].select,options:[{title:"男",value:"1"},{title:"女",value:"2"}],defaultValue:"",placeholder:"请选择${title}"},{title:"身份证号",key:"idcard",width:"24%",type:s["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{pattern:"^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|[xX])$",message:"${title}格式不正确"}]},{title:"手机号",key:"telphone",width:"24%",type:s["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{pattern:"^1(3|4|5|7|8)\\d{9}$",message:"${title}格式不正确"}]}]},table2:{loading:!1,dataSource:[],columns:[{title:"航班号",key:"ticketCode",width:"40%",type:s["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"航班时间",key:"tickectDate",width:"30%",type:s["a"].date,placeholder:"请选择${title}",defaultValue:""}]},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{getAllTable:function(){return Promise.all([Object(s["c"])(this,"editableTable1"),Object(s["c"])(this,"editableTable2")])},add:function(){this.getAllTable().then((function(e){e[0].add(),e[1].add()})),this.edit({})},edit:function(e){var t=this;if(this.visible=!0,this.activeKey="1",this.form.resetFields(),this.model=Object.assign({},e),this.$nextTick((function(){t.form.setFieldsValue(pick(t.model,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.model.orderDate?moment(t.model.orderDate):null})})),this.model.id){var a={id:this.model.id};this.requestTableData(this.url.orderCustomerList,a,this.table1),this.requestTableData(this.url.orderTicketList,a,this.table2)}},close:function(){this.visible=!1,this.getAllTable().then((function(e){e[0].initialize(),e[1].initialize()})),this.$emit("close")},requestTableData:function(e,t,a){a.loading=!0,Object(l["getAction"])(e,t).then((function(e){a.dataSource=e.result||[]})).finally((function(){a.loading=!1}))},handleOk:function(){this.validateFields()},handleCancel:function(){this.close()},handleChangeTabs:function(e){Object(s["c"])(this,"editableTable".concat(e)).then((function(e){e.resetScrollTop()}))},validateFields:function(){var e=this;this.getAllTable().then((function(t){return Object(s["d"])(e.form,t)})).then((function(t){var a=e.classifyIntoFormData(t);return e.requestAddOrEdit(a)})).catch((function(t){t.error===s["b"]?e.activeKey=null==t.index?e.activeKey:(t.index+1).toString():console.error(t)}))},classifyIntoFormData:function(e){var t=Object.assign(this.model,e.formValue);return t.orderDate=t.orderDate?t.orderDate.format("YYYY-MM-DD HH:mm:ss"):null,u({},t,{jeecgOrderCustomerList:e.tablesValue[0].values,jeecgOrderTicketList:e.tablesValue[1].values})},requestAddOrEdit:function(e){var t=this,a=this.url.add,r="post";this.model.id&&(a=this.url.edit,r="put"),this.confirmLoading=!0,Object(l["httpAction"])(a,e,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok"),t.close()):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}},f=m,h=a("2877"),p=Object(h["a"])(f,r,i,!1,null,"3e7aadef",null);t["default"]=p.exports},e31a:function(e,t,a){"use strict";var r=a("95df"),i=a.n(r);i.a}}]);