(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-154a73a8","chunk-1f6bbc4a","chunk-6a800616","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{38463:function(e,t,a){},4867:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"表名"}},[a("a-input",{attrs:{placeholder:"请输入表名"},model:{value:e.queryParam.dataTable,callback:function(t){e.$set(e.queryParam,"dataTable",t)},expression:"queryParam.dataTable"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"数据ID"}},[a("a-input",{attrs:{placeholder:"请输入ID"},model:{value:e.queryParam.dataId,callback:function(t){e.$set(e.queryParam,"dataId",t)},expression:"queryParam.dataId"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleCompare()}}},[e._v("数据比较")])],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v("已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项  \n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"dataContent",fn:function(e,t){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:80}})],1)}}])})],1),a("data-log-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=a("b469"),o=a("b65a"),r=a("d579"),l={name:"DataLogList",mixins:[o["a"]],components:{JEllipsis:r["default"],DataLogModal:n["default"]},data:function(){return{description:"数据日志管理页面",columns:[{title:"表名",align:"center",dataIndex:"dataTable"},{title:"数据ID",align:"center",dataIndex:"dataId"},{title:"版本号",align:"center",dataIndex:"dataVersion"},{title:"数据内容",align:"center",dataIndex:"dataContent",width:"120px",scopedSlots:{customRender:"dataContent"}},{title:"创建人",align:"center",dataIndex:"createBy"}],url:{list:"/sys/dataLog/list"}}},methods:{handleCompare:function(){return this.selectionRows&&2==this.selectionRows.length?this.selectionRows[0].dataId!=this.selectionRows[1].dataId?(this.openNotifIcon("请选择相同的数据库表和数据ID进行比较"),!1):(this.$refs.modalForm.addModal(this.selectionRows),void(this.$refs.modalForm.title="数据比较")):(this.openNotifIcon("请选择两条数据"),!1)},openNotifIcon:function(e){this.$notification["warning"]({message:"提示信息",description:e})}}},d=l,c=(a("f7ae"),a("2877")),u=Object(c["a"])(d,s,i,!1,null,"662ab3ca",null);t["default"]=u.exports},"6a47":function(e,t,a){"use strict";var s=a("6cd0"),i=a.n(s);i.a},"6cd0":function(e,t,a){},b469:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{width:e.modalWidth,visible:e.visible,title:"数据对比窗口",confirmLoading:e.confirmLoading,cancelText:"取消"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"数据库表名","label-col":{span:6},"wrapper-col":{span:15}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataTale",{}],expression:"[ 'dataTale', {}]"}],attrs:{placeholder:"请输入数据库表名",disabled:""},on:{blur:e.handleTableBlur}})],1)],1),a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"数据ID","label-col":{span:5},"wrapper-col":{span:15}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataId",{}],expression:"[ 'dataId', {}]"}],attrs:{placeholder:"请输入数据ID",disabled:""},on:{blur:e.handleIdBlur}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"版本号1","label-col":{span:6},"wrapper-col":{span:15}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataVersion1",{}],expression:"[ 'dataVersion1', {}]"}],attrs:{placeholder:"请选择版本号"},on:{change:e.handleChange1}},e._l(e.DataVersionList,(function(t,s){return a("a-select-option",{key:s.toString(),attrs:{value:t.id}},[e._v(e._s(t.dataVersion))])})),1)],1)],1),a("a-col",{attrs:{md:12,sm:8}},[a("a-form-item",{attrs:{label:"版本号2","label-col":{span:5},"wrapper-col":{span:15}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataVersion2",{}],expression:"[ 'dataVersion2', {}]"}],attrs:{placeholder:"请选择版本号"},on:{change:e.handleChange2}},e._l(e.DataVersionList,(function(t,s){return a("a-select-option",{key:s.toString(),attrs:{value:t.id}},[e._v(e._s(t.dataVersion))])})),1)],1)],1)],1)],1)],1),a("data-log-compare-modal",{ref:"modal",on:{ok:e.modalFormOk}})],1)],1)},i=[],n=a("0fea"),o=a("fcbc"),r={name:"DataLogModal",components:{DataLogCompareModal:o["default"]},dataId1:"",dataId2:"",dataTable1:"",dataID3:"",data:function(){return{modalWidth:700,modaltoggleFlag:!0,confirmDirty:!1,title:"操作",visible:!1,model:{},confirmLoading:!1,headers:{},form:this.$form.createForm(this),url:{queryDataVerListUrl:"/sys/dataLog/queryDataVerList"},DataVersionList:[]}},created:function(){},methods:{addModal:function(e){var t=this,a=e[0].dataTable,s=e[0].dataId,i=e[0].dataVersion,n=e[1].dataVersion;this.dataId1=e[0].id,this.dataId2=e[1].id,this.dataTable1=e[0].dataTable,this.dataID3=e[0].dataId,this.initDataVersionList(),this.form.resetFields(),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue({dataTale:a,dataId:s,dataVersion1:i,dataVersion2:n})}))},handleOk:function(){this.close(),this.$refs.modal.compareModal(this.dataId1,this.dataId2),this.$refs.modal.title="数据比较"},handleCancel:function(){this.close()},handleSubmit:function(){},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1},modalFormOk:function(){},initDataVersionList:function(){var e=this,t=this;Object(n["getAction"])(t.url.queryDataVerListUrl,{dataTable:this.dataTable1,dataId:this.dataID3}).then((function(t){t.success?e.DataVersionList=t.result:(e.DataVersionList=[],e.dataId1="",e.dataId2="",console.log(t.message))}))},handleChange1:function(e){this.dataId1=e},handleChange2:function(e){this.dataId2=e},handleTableBlur:function(e){this.dataTable1=e.target.value,this.initDataVersionList()},handleIdBlur:function(e){this.dataID3=e.target.value,this.initDataVersionList()}}},l=r,d=a("2877"),c=Object(d["a"])(l,s,i,!1,null,"e048e92e",null);t["default"]=c.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("8e6e"),a("7f7f");var s=a("bd86"),i=(a("456d"),a("ac6a"),a("ca00")),n=a("0fea"),o=a("9fb0");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={data:function(){return{tokenHeader:{"X-Access-Token":Vue.ls.get(o["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(n["getAction"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(i["h"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(n["deleteAction"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(n["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(n["downFile"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var s=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=s,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(s)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,s=a.message,i=a.result,n=i.msg,o=i.fileUrl,r=i.fileName,l=window._CONFIG["domianURL"]+o;this.$warning({title:s,content:t("div",[t("span",[" ",n," "]),t("br"),t("span",[" 具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:r}},[" 点击下载 "])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},d579:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},i=[],n=(a("c5f6"),{name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}}),o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,"4de15389",null);t["default"]=l.exports},f7ae:function(e,t,a){"use strict";var s=a("38463"),i=a.n(s);i.a},fcbc:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{width:e.modalWidth,visible:e.visible,footer:null,cancelText:"关闭"},on:{cancel:e.handleCancel}},[a("div",{staticClass:"marginCss"},[a("a-table",{ref:"table",attrs:{size:"small",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,rowClassName:e.setdataCss,loading:e.loading,scroll:{y:700},pagination:!1},scopedSlots:e._u([{key:"avatarslot",fn:function(t,s){return[a("div",{staticClass:"anty-img-wrap"},[a("img",{attrs:{src:e.getAvatarView(s)}})])]}}])},[a("span",{attrs:{slot:"dataVersionTitle1"},slot:"dataVersionTitle1"},[a("a-icon",{attrs:{type:"smile-o"}}),e._v("\n        版本:"+e._s(e.dataVersion1Num)+"\n      ")],1),a("span",{attrs:{slot:"dataVersionTitle2"},slot:"dataVersionTitle2"},[a("a-icon",{attrs:{type:"smile-o"}}),e._v("\n        版本:"+e._s(e.dataVersion2Num)+"\n      ")],1)])],1)])},i=[],n=a("0fea"),o={name:"DataLogCompareModal",data:function(){return{modalWidth:1e3,modaltoggleFlag:!0,confirmDirty:!1,title:"操作",visible:!1,model:{},confirmLoading:!1,headers:{},dataVersion1Num:"",dataVersion2Num:"",columns:[{title:"字段名",align:"left",dataIndex:"code",width:"30%"},{align:"left",dataIndex:"dataVersion1",width:"30%",slots:{title:"dataVersionTitle1"}},{title:"",dataIndex:"imgshow",align:"center",scopedSlots:{customRender:"avatarslot"},width:"10%"},{align:"left",dataIndex:"dataVersion2",width:"30%",slots:{title:"dataVersionTitle2"}}],dataSource:[],loading:!1,url:{queryCompareUrl:"/sys/dataLog/queryCompareList"}}},created:function(){},methods:{loadData:function(e,t){var a=this;this.dataSource=[];var s=this;Object(n["getAction"])(s.url.queryCompareUrl,{dataId1:e,dataId2:t}).then((function(e){if(e.success){s.dataVersion1Num=e.result[0].dataVersion,s.dataVersion2Num=e.result[1].dataVersion;var t=JSON.parse(e.result[0].dataContent),i=JSON.parse(e.result[1].dataContent);for(var n in t)for(var o in i)n==o&&a.dataSource.push({code:n,imgshow:"",dataVersion1:t[n],dataVersion2:i[o]})}else console.log(e.message)}))},compareModal:function(e,t){this.visible=!0,this.loadData(e,t)},handleCancel:function(){this.close()},modalFormOk:function(){},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1},setdataCss:function(e){var t="trcolor",a=e.dataVersion1,s=e.dataVersion2;if(a!=s)return t},getAvatarView:function(e){return e.dataVersion1!=e.dataVersion2?"/goright.png":""}}},r=o,l=(a("6a47"),a("2877")),d=Object(l["a"])(r,s,i,!1,null,"cdb92254",null);t["default"]=d.exports}}]);