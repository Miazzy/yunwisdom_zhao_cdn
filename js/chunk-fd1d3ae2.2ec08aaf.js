(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd1d3ae2","chunk-40d3349b","chunk-fd1d3ae2"],{"6d78":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{class:{abcdefg:!0},attrs:{bordered:!1}},[n("a-col",{attrs:{md:24,sm:24}},[n("a-descriptions",{attrs:{title:"工资信息",bordered:""}},[e._l(e.registerInfo,(function(t,a){return[n("a-descriptions-item",{attrs:{label:t.key,span:2}},[e._v(e._s(t.value))])]}))],2)],1)],1)},r=[],i=(n("7f7f"),n("96cf"),n("3b8d")),o=n("0fea"),_=n("5d2d"),s=n("ca00"),c={id:"主键",create_by:"创建人",wages_date:"发放日期",username:"账户",name:"姓名",join_time:"入职时间",id_card:"身份证号",work_date:"应出勤天数",salary_date:"计薪天数",job_level:"岗位层级",salary_type:"工资类别",wage_standard:"工资标准",basic_salary:"基本工资",secret_salary:"保密费",perform_salary:"绩效工资",quar_mon_perform_salary:"季度绩效",meal_subsidy:"餐费补贴",commun_subsidy:"通讯补贴",transport_subsidy:"交通补",festival_fee:"节日费",one_child_allowance:"独生补贴",service_year_allowance:"工龄补贴",off_site_allowance:"异地津贴",overtime_allowance:"加班补贴",other_allowance:"其他补贴",post_allowance:"岗位津贴",reward:"奖励",total_subsidy:"补贴合计",reissue_wage:"补发工资",fines:"罚款",attendance_deduction:"考勤扣款",other_deductions:"其它扣款",total_deductions:"扣款合计",payable_salary:"应发工资",old_age_insurance:"养老保险",unemploy_insurance:"失业保险",medicare:"医疗保险",total_social_security:"社保合计",provident_fund:"住房公积金",social_security_provident_fund:"社保公积金合计",taxable_income_in_advance:"提前发放应计税收入",taxable_wages:"计税工资",tax_threshold:"个税起征点",tax:"个人所得税",after_tax_charge:"税后服务费",medicare_fee:"体检费",union_funds:"工会经费",after_tax_deduction:"税后补扣",total_tax_deduction:"扣款合计",after_tax_reissue:"税后补发",paid_wages:"月实付工资",children_education:"子女教育累计(专项扣除)",continuing_education:"继续教育累计(专项扣除)",house_loans:"住房贷款利息累计(专项扣除)",house_rent:"住房租金累计(专项扣除)",elderly_support:"赡养老人累计(专项扣除)",total_special_deductions:"1月至当月专项扣除累计",total_tax_threshold:"1月至当月个税起点累计",total_taxable_wages:"1月至当月计税工资累计",total_personal_tax:"1月至当月应缴个人所得税累计",total_paid_tax:"1月至上月已缴个人所得税累计",bank_no:"银行卡号",phone:"电话号码",comment:"备注",social_security_description:"社保说明",provident_fund_description:"公积金说明",social_security_remarks:"社保备注",provident_fund_remark:"公积金备注",special_deductions_remarks:"专项扣除备注",departure_deduction:"离职还扣"},l={name:"RegisterInfo",components:{},props:{},data:function(){return{previewVisible:!1,previewImage:"",registerInfo:{},spinning:!1}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=_["e"]("cur_user"),e.next=3,this.searchQuery();case 3:console.log(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),searchQuery:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s["n"]("username"),e.next=3,o["queryUserInfoByView"](t);case 3:n=e.sent,a="";try{n=n[0],a=n.realname}catch(u){console.error(u)}return e.prev=6,e.next=9,o["queryWageByUserName"](a,t);case 9:return r=e.sent,delete r.id,e.next=13,o["queryDepartName"](r.depart_name);case 13:for(l in i=e.sent,r.depart_name=i["name"],r)r[l]={key:c[l],value:r[l]};this.registerInfo=r,e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](6),console.error(e.t0);case 22:return _["g"]("system_register_info_user@".concat(t.username),JSON.stringify(this.registerInfo),3600),e.abrupt("return",this.registerInfo);case 24:case"end":return e.stop()}}),e,this,[[6,19]])})));function t(){return e.apply(this,arguments)}return t}()}},u=l,d=(n("ab32"),n("2877")),m=Object(d["a"])(u,a,r,!1,null,"ef747a32",null);t["default"]=m.exports},ab32:function(e,t,n){"use strict";var a=n("d44e"),r=n.n(a);r.a},b43e:function(e,t,n){"use strict";var a=n("f931"),r=n.n(a);r.a},b448:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{staticStyle:{height:"100%"},attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"}},[e.queryInfo&&e.queryInfo.length>0?n("a-row",{attrs:{gutter:24}},[e._l(e.queryInfo,(function(t,a){return["1"===t.hidden?["datetime"==t.view?n("a-col",{directives:[{name:"show",rawName:"v-show",value:e.toggleSearchStatus,expression:"toggleSearchStatus"}],key:"query"+a,attrs:{md:12,sm:16}},[n("online-query-form-item",{attrs:{queryParam:e.queryParam,item:t,dictOptions:e.dictOptions}})],1):n("a-col",{directives:[{name:"show",rawName:"v-show",value:e.toggleSearchStatus,expression:"toggleSearchStatus"}],key:"query"+a,attrs:{md:6,sm:8}},[n("online-query-form-item",{attrs:{queryParam:e.queryParam,item:t,dictOptions:e.dictOptions}})],1)]:["datetime"==t.view?n("a-col",{key:"query"+a,attrs:{md:12,sm:16}},[n("online-query-form-item",{attrs:{queryParam:e.queryParam,item:t,dictOptions:e.dictOptions}})],1):n("a-col",{key:"query"+a,attrs:{md:6,sm:8}},[n("online-query-form-item",{attrs:{queryParam:e.queryParam,item:t,dictOptions:e.dictOptions}})],1)]]})),n("a-col",{attrs:{md:6,sm:8}},[n("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[n("a-button",{staticStyle:{"margin-left":"0px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchByquery}},[e._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),n("a",{staticStyle:{"margin-left":"8px","font-size":"12px",height:"28px",padding:"0 10px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),n("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2):e._e()],1)],1),n("div",{staticClass:"table-operator"},[e.buttonSwitch.add?n("a-button",{staticStyle:{"margin-left":"0px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]):e._e(),n("a-button",{staticStyle:{"margin-left":"6px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{type:"primary",icon:"book"},on:{click:e.handleDetailWF}},[e._v("详情")]),e.buttonSwitch.import?n("a-button",{staticStyle:{"margin-left":"6px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{type:"primary",icon:"upload"},on:{click:e.handleImportXls}},[e._v("导入")]):e._e(),e.buttonSwitch.export?n("a-button",{staticStyle:{"margin-left":"6px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{type:"primary",icon:"download"},on:{click:e.handleExportXls}},[e._v("导出")]):e._e(),e._l(e.cgButtonList,(function(t,a){return e.cgButtonList&&e.cgButtonList.length>0?["js"==t.optType?n("a-button",{key:"cgbtn"+a,staticStyle:{"margin-left":"6px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{type:"primary",icon:t.buttonIcon},on:{click:function(n){return e.cgButtonJsHandler(t.buttonCode)}}},[e._v(e._s(t.buttonName))]):"action"==t.optType?n("a-button",{key:"cgbtn"+a,staticStyle:{"margin-left":"6px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{type:"primary",icon:t.buttonIcon},on:{click:function(n){return e.cgButtonActionHandler(t.buttonCode)}}},[e._v(e._s(t.buttonName))]):e._e()]:e._e()})),e.buttonSwitch.batch_delete?n("a-button",{directives:[{name:"show",rawName:"v-show",value:e.table.selectionRows.length>0,expression:"table.selectionRows.length > 0"}],staticStyle:{"margin-left":"6px","font-size":"12px",height:"28px",padding:"0 10px"},attrs:{ghost:"",type:"primary",icon:"delete"},on:{click:e.handleDelBatch}},[e._v("删除")]):e._e()],2),n("div",[n("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[n("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v("\n      已选择 \n      "),n("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.table.selectedRowKeys.length))]),e._v("项  \n      "),n("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),n("a-table",{ref:"cgformAutoList",staticStyle:{"min-height":"300px"},attrs:{bordered:"",size:"middle",rowKey:"id",columns:e.tableColumns,dataSource:e.table.dataSource,pagination:e.pagination,loading:e.table.loading,rowSelection:{selectedRowKeys:e.table.selectedRowKeys,onChange:e.handleChangeInTableSelect}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"dateSlot",fn:function(t){return[n("span",[e._v(e._s(e.getFormatDate(t)))])]}},{key:"htmlSlot",fn:function(t){return[n("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?n("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:"图片不存在"}}):n("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无此图片")])]}},{key:"fileSlot",fn:function(t){return[t?n("span",[n("a-button",{staticStyle:{transform:"scale(0.65,0.65)","margin-left":"-5px","margin-right":"-5px"},attrs:{type:"primary",size:"small"},on:{click:function(n){return e.uploadFile(t)}}},[e._v("下载")]),n("a-button",{staticStyle:{transform:"scale(0.65,0.65)","margin-left":"-5px","margin-right":"-5px"},attrs:{type:"primary",size:"small"},on:{click:function(n){return e.viewFile(t)}}},[e._v("预览")])],1):n("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无此文件")])]}},{key:"action",fn:function(t,a){return n("span",{},["dae6cc0e7a7f4b7e9dc0fc36757fdc96"!=e.code&&"0b511f234f3847baa50106a14fff6215"!=e.code&&"d11901bc44f24a66b25b37a7a04c611e"!=e.code?[n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[e._v("\n              操作\n              "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e.hasBpmStatus?["1"==a.bpm_status||""==a.bpm_status||null==a.bpm_status?[e.buttonSwitch.update?[n("a-menu-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")])])]:e._e()]:e._e()]:[e.buttonSwitch.update?[n("a-menu-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")])])]:e._e()],e.hasBpmStatus?void 0:[e.buttonSwitch.delete?n("a-menu-item",[n("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDeleteOne(a)}}},[n("a",[e._v("删除")])])],1):e._e()],e._l(e.cgButtonLinkList,(function(t,r){return e.cgButtonLinkList&&e.cgButtonLinkList.length>0?[n("a-menu-item",{key:"cgbtnLink"+r},[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){return e.cgButtonLinkHandler(a,t.buttonCode,t.optType)}}},[t.buttonIcon?n("a-icon",{attrs:{type:t.buttonIcon}}):e._e(),e._v("\n                    "+e._s(t.buttonName)+"\n                  ")],1)])]:e._e()}))],2)],1)]:[e._v("--")]],2)}}])},[n("div",{attrs:{slot:"filterDropdown"},slot:"filterDropdown"},[n("a-card",[n("a-checkbox-group",{attrs:{defaultValue:e.columns},on:{change:e.onColSettingsChange},model:{value:e.columns,callback:function(t){e.columns=t},expression:"columns"}},[n("a-row",[e._l(e.columns,(function(t,a){return["rowIndex"!=t.key&&"action"!=t.dataIndex?[n("a-col",{attrs:{span:12}},[n("a-checkbox",{attrs:{value:t.dataIndex}},[e._v("\n                      "+e._s(t.title)+"\n                    ")])],1)]:e._e()]}))],2)],1)],1)],1),n("a-icon",{style:{fontSize:"16px",color:"#108ee9"},attrs:{slot:"filterIcon",type:"setting"},slot:"filterIcon"})],1),n("a-modal",{attrs:{title:"温馨提示",visible:e.tipVisible,confirmLoading:e.tipConfirmLoading},on:{ok:e.tipHandleOk,cancel:e.tipHandleCancel}},[n("p",[e._v(e._s(e.tipContent))])]),n("OnlCgformAutoModal",{ref:"modal",attrs:{code:e.code},on:{success:e.handleFormSuccess}}),n("j-import-modal",{ref:"importModal",attrs:{url:e.getImportUrl()},on:{ok:e.importOk}})],1)])},r=[],i=n("cd49"),o=i["a"],_=(n("b43e"),n("2877")),s=Object(_["a"])(o,a,r,!1,null,null,null);t["default"]=s.exports},cd49:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("456d"),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2fdb"),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c5f6"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("7514"),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ac4d"),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("8a81"),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("6762"),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__),_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("75fc"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_9__),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__),_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("3b8d"),_components_dict_JDictSelectUtil__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("89f2"),_components_jeecg_JImportModal__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("7c93"),_api_manage__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("0fea"),_utils_storage__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("5d2d"),_utils_util__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("ca00"),_store_mutation_types__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("9fb0"),tableColumns=[{title:"账户",align:"center",dataIndex:"username"},{title:"员工姓名",align:"center",dataIndex:"name"},{title:"发放日期",align:"center",dataIndex:"wages_date"},{title:"工资标准",align:"center",dataIndex:"wage_standard"},{title:"基本工资",align:"center",dataIndex:"basic_salary"},{title:"绩效工资",align:"center",dataIndex:"perform_salary"},{title:"应发工资",align:"center",dataIndex:"payable_salary"},{title:"社保合计",align:"center",dataIndex:"total_social_security"},{title:"住房公积金",align:"center",dataIndex:"provident_fund"},{title:"计税工资",align:"center",dataIndex:"taxable_wages"},{title:"个人所得税",align:"center",dataIndex:"tax"},{title:"月实付工资",align:"center",dataIndex:"paid_wages"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},fixed:"right",align:"center",width:80}];__webpack_exports__["a"]={name:"OnlCgFormAutoList",components:{JImportModal:_components_jeecg_JImportModal__WEBPACK_IMPORTED_MODULE_13__["default"]},data:function(){return{pagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","50","100"],showQuickJumper:!0,showSizeChanger:!1,total:0},code:"",fixedWFlow:"",modelModal:!1,modelWFlowSelection:"",rights:[],description:"在线报表",currentTableName:"",tipContent:"",tipVisible:!1,tipConfirmLoading:!1,url:{getQueryInfo:"".concat(window._CONFIG["domainURL"],"/online/cgform/api/getQueryInfo/"),getColumns:"".concat(window._CONFIG["domainURL"],"/online/cgform/api/getColumns/"),getData:"".concat(window._CONFIG["domainURL"],"/online/cgform/api/getData/"),optPre:"".concat(window._CONFIG["domainURL"],"/online/cgform/api/form/"),exportXls:"".concat(window._CONFIG["domainURL"],"/online/cgform/api/exportXls/"),buttonAction:"".concat(window._CONFIG["domainURL"],"/online/cgform/api/doButton")},flowCodePre:"onl_",isorter:{column:"createTime",order:"desc"},dictOptions:{},cgButtonLinkList:[],cgButtonList:[],queryInfo:[],queryParam:{},cityList:[{value:"beijing",label:"北京"}],toggleSearchStatus:!1,table:{loading:!0,columns:[],settingColumns:[],dataSource:[],selectedRowKeys:[],selectionRows:[],pagination:{current:1,pageSize:1e4,pageSizeOptions:["10000"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0}},tableColumns:tableColumns,actionColumn:{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},fixed:"right",align:"center",width:80},formTemplate:"99",EnhanceJS:"",hideColumns:["content"],buttonSwitch:{add:!0,update:!0,delete:!0,batch_delete:!0,import:!0,export:!0},hasBpmStatus:!1,times:[100,500,1e3,2e3,3e3,5e3]}},created:function(){var e=Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{this.code=window.location.pathname.split("/")[3]}catch(t){console.error(t)}try{this.initAutoList()}catch(t){console.error(t)}try{this.table.selectionRows=[],this.table.selectedRowKeys=[]}catch(t){console.error(t)}return e.prev=3,e.next=6,_api_manage__WEBPACK_IMPORTED_MODULE_14__["queryUserName"]();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),console.error(e.t0);case 11:this.handleColumns();case 12:case"end":return e.stop()}}),e,this,[[3,8]])})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){var e=Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.initAutoList(),this.table.selectionRows=[],this.table.selectedRowKeys=[],this.handleColumns(),e.next=6,_api_manage__WEBPACK_IMPORTED_MODULE_14__["queryUserName"]();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),watch:{$route:function(){var e=Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.initAutoList(),this.table.selectionRows=[],this.table.selectedRowKeys=[],this.handleColumns(),e.next=6,_api_manage__WEBPACK_IMPORTED_MODULE_14__["queryUserName"]();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},methods:{tipHandleOk:function(e){var t=this;this.tipConfirmLoading=!0,setTimeout((function(){t.loadData(1),t.tipVisible=!1,t.tipConfirmLoading=!1}),300)},handleColumns:function(){var e=this;_api_manage__WEBPACK_IMPORTED_MODULE_14__["setTimeouts"].apply(_api_manage__WEBPACK_IMPORTED_MODULE_14__,[function(){var t=window.location.pathname.split("/")[3];"02c2e82c486542df992c3860ad6cd25a"==t?e.tableColumns=JSON.parse('[{"title":"账户","align":"center","dataIndex":"username"},{"title":"姓名","align":"center","dataIndex":"name"},{"title":"性别","align":"center","dataIndex":"sex"},{"title":"人员性质","align":"center","dataIndex":"employee_feature"},{"title":"单位名称","align":"center","dataIndex":"company_name"},{"title":"职级","align":"center","dataIndex":"job_level"},{"title":"入职时间","align":"center","scopedSlots":{"customRender":"dateSlot"},"dataIndex":"join_time"},{"title":"公司司龄","align":"center","dataIndex":"work_year"},{"title":"在职状态","align":"center","dataIndex":"work_status"},{"title":"通讯号码","align":"center","dataIndex":"phone"},{"title":"编制状态","align":"center","dataIndex":"compilation_status"},{"title":"操作","dataIndex":"action","scopedSlots":{"customRender":"action"},"fixed":"right","align":"center","width":80}]'):"237fa97d3c974bdbb36090d0dd2f3a39"==t&&(e.tableColumns=JSON.parse('[{"title":"账户","align":"center","dataIndex":"username"},{"title":"员工姓名","align":"center","dataIndex":"name"},{"title":"发放日期","align":"center","dataIndex":"wages_date"},{"title":"工资标准","align":"center","dataIndex":"wage_standard"},{"title":"基本工资","align":"center","dataIndex":"basic_salary"},{"title":"绩效工资","align":"center","dataIndex":"perform_salary"},{"title":"应发工资","align":"center","dataIndex":"payable_salary"},{"title":"社保合计","align":"center","dataIndex":"total_social_security"},{"title":"住房公积金","align":"center","dataIndex":"provident_fund"},{"title":"计税工资","align":"center","dataIndex":"taxable_wages"},{"title":"个人所得税","align":"center","dataIndex":"tax"},{"title":"月实付工资","align":"center","dataIndex":"paid_wages"},{"title":"操作","dataIndex":"action","scopedSlots":{"customRender":"action"},"fixed":"right","align":"center","width":80}]'))}].concat(Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["a"])(this.times)))},tipHandleCancel:function(){this.loadData(1),this.tipVisible=!1},hasBpmStatusFilter:function(){var e=this.table.columns,t=[],n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var _=i.value;t.push(_.dataIndex)}}catch(s){a=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}t.includes("bpm_status")||t.includes("BPM_STATUS")?this.hasBpmStatus=!0:this.hasBpmStatus=!1},modalOk:function(){var e=this.modelWFlowSelection;this.fixedWFlow=window.__.find(this.rights,(function(t){return t["id"]=e}));var t=JSON.stringify(this.fixedWFlow);console.log(" 获取流程权责配置 ".concat(e," , fixedWFlow : ").concat(t))},deStringNull:function(e){return"undefined"==typeof e||null==e||""==e?"":e},initQueryInfo:function(){var e=this;_api_manage__WEBPACK_IMPORTED_MODULE_14__["getAction"]("".concat(this.url.getQueryInfo).concat(this.code)).then((function(t){console.log("--onlineList-获取查询条件配置",t),t.success?e.queryInfo=t.result:e.$message.warning(t.message)}))},initAutoList:function(){var e=this;this.table.loading=!0,_api_manage__WEBPACK_IMPORTED_MODULE_14__["getAction"]("".concat(this.url.getColumns).concat(this.code)).then((function(t){if(console.log("--onlineList-加载动态列>>",t),t.success){e.dictOptions=t.result.dictOptions,e.formTemplate=t.result.formTemplate,e.description=t.result.description,e.currentTableName=t.result.currentTableName,e.initCgButtonList(t.result.cgButtonList),e.initCgEnhanceJs(t.result.enhanceJs),e.initButtonSwitch(t.result.hideColumns);for(var n=t.result.columns,a=0;a<n.length;a++)n[a].customRender&&function(){var t=n[a].customRender;n[a].customRender=function(n){return Object(_components_dict_JDictSelectUtil__WEBPACK_IMPORTED_MODULE_12__["b"])(e.dictOptions[t],n)}}();n.push(e.actionColumn),e.table.columns=Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["a"])(n),e.table.columns=window.__.filter(e.table.columns,(function(e){return"content"!=e.dataIndex})),e.hasBpmStatusFilter(),e.loadData(),e.initQueryInfo()}else e.$message.warning(t.message)}))},processLog:function(){var e=Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=this,r=_utils_storage__WEBPACK_IMPORTED_MODULE_15__["e"]("processlog_by_bs_data_id@".concat(t)),null!=r&&""!=r){e.next=9;break}return e.next=5,_api_manage__WEBPACK_IMPORTED_MODULE_14__["queryPRLogHistoryByDataID"](t);case 5:i=e.sent,i.forEach((function(e){r+="流程名称：".concat(e.process_name," , 流程节点：").concat(e.process_station," , 处理人： ").concat(e.approve_user," , 审批操作：").concat(e.action," <br/>")})),n.processlog_html_info=r,_utils_storage__WEBPACK_IMPORTED_MODULE_15__["g"]("processlog_by_bs_data_id@".concat(t),n,10);case 9:return a.table.dataSource.forEach((function(e){e.id==t&&(e.processlog_html_info=r)})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),loadData:function(){var e=Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["a"])(regeneratorRuntime.mark((function e(t){var n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:1==t&&(this.table.pagination.current=1),n=this.getQueryParams(),console.log("--onlineList-查询条件--\x3e",n),_api_manage__WEBPACK_IMPORTED_MODULE_14__["getAction"]("".concat(this.url.getData).concat(this.code),n).then(function(){var e=Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,o,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("--onlineList-列表数据",t),t.success)if(n=t.result,r=_utils_storage__WEBPACK_IMPORTED_MODULE_15__["e"]("cur_user"),Number(n.total)>0)for(a.table.pagination.total=Number(t.result.total),t.result.records=window.__.filter(t.result.records,(function(e){return"create_by"in e?e["create_by"]==r["username"]||e["create_by"]==r["realname"]:"employee"in e?e["employee"]==r["username"]||e["employee"]==r["realname"]:!("proposer"in e)||(e["proposer"]==r["username"]||e["proposer"]==r["realname"])})),a.pagination.total=t.result.records.total,a.table.dataSource=t.result.records,i=0;i<t.result.records.length;i++)o=t.result.records[i],_="",o.log_info_html=_,console.log("html info : ".concat(_));else a.table.pagination.total=0,a.table.dataSource=[];else a.$message.warning(t.message);a.table.loading=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return"dae6cc0e7a7f4b7e9dc0fc36757fdc96"!=this.code&&"0b511f234f3847baa50106a14fff6215"!=this.code||(e.column="operate_time"),e.pageNo=this.table.pagination.current,e.pageSize=this.table.pagination.pageSize,_utils_util__WEBPACK_IMPORTED_MODULE_16__["h"](e)},handleChangeInTableSelect:function(e,t){this.table.selectedRowKeys=e,this.table.selectionRows=t},handleTableChange:function(e,t,n){this.pagination=e},handleAdd:function(){this.cgButtonJsHandler("beforeAdd"),this.$refs.modal.add(this.formTemplate)},handleImportXls:function(){this.$refs.importModal.show()},handleDetailWF:function(){var e=Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,1==this.table.selectionRows.length){e.next=4;break}return t.$message.warning("请选择一条记录！"),e.abrupt("return",!1);case 4:return e.next=6,_api_manage__WEBPACK_IMPORTED_MODULE_14__["queryTableName"]();case 6:n=e.sent,a=n["table_name"],r=this.table.selectionRows[0],_utils_storage__WEBPACK_IMPORTED_MODULE_15__["g"]("".concat(a,"@id=").concat(r.id),JSON.stringify(r),6e4),i="/finance/registerinfo?username=".concat(r.username),"237fa97d3c974bdbb36090d0dd2f3a39"==this.code&&(i="/finance/wageinfo?username=".concat(r.username)),this.$router.push(i);case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),importOk:function(){this.loadData(1)},handleExportXls2:function(){var e=this.queryParam;this.table.selectedRowKeys&&this.table.selectedRowKeys.length>0&&(e["selections"]=this.table.selectedRowKeys.join(","));var t=encodeURI(JSON.stringify(e));console.log("paramsStr: "+t);var n=window._CONFIG["domainURL"]+this.url.exportXls+this.code+"?paramsStr="+t;window.location.href=n},handleExportXls:function(){var e=this,t=this.queryParam,n=_utils_storage__WEBPACK_IMPORTED_MODULE_15__["e"]("cur_user");if(this.table.selectionRows.length<=0)return this.$message.warning("请选择需要导出的记录！"),!1;this.table.selectedRowKeys&&this.table.selectedRowKeys.length>0&&(t["selections"]=this.table.selectedRowKeys.join(",")),console.log("导出参数",t);var a=JSON.stringify(_utils_util__WEBPACK_IMPORTED_MODULE_16__["h"](t));_api_manage__WEBPACK_IMPORTED_MODULE_14__["downFile"](this.url.exportXls+this.code,{paramsStr:a}).then((function(t){if(t)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([t]),"".concat(e.description,"_").concat(n.realname,".xls"));else{var a=window.URL.createObjectURL(new Blob([t])),r=document.createElement("a");r.style.display="none",r.href=a,r.setAttribute("download","".concat(e.description,"_").concat(n.realname,".xls")),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}else e.$message.warning("文件下载失败")}))},handleEdit:function(e){this.cgButtonLinkHandler(e,"beforeEdit","js"),this.$refs.modal.edit(this.formTemplate,e.id)},handleDetail:function(e){this.$refs.modal.detail(this.formTemplate,e.id)},handleDeleteOne:function(e){this.cgButtonLinkHandler(e,"beforeDelete","js"),this.handleDelete(e.id)},handleDelete:function(e){var t=this;_api_manage__WEBPACK_IMPORTED_MODULE_14__["deleteAction"](this.url.optPre+this.code+"/"+e).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},handleFormSuccess:function(){this.loadData()},onClearSelected:function(){this.table.selectedRowKeys=[],this.table.selectionRows=[]},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["downloadURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),console.log(e),window.open(window._CONFIG["downloadURL"]+"/"+e)):this.$message.warning("未知的文件")},viewFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t="https://view.officeapps.live.com/op/view.aspx?src=",n=window._CONFIG["downloadURL"]+"/"+e,a=encodeURIComponent(n),r=e.substring(e.lastIndexOf("."),e.length).toLowerCase();n=r.includes("doc")||r.includes("ppt")||r.includes("xls")?t+a:n,r.includes("pdf"),n=n,window.open(n)}else this.$message.warning("未知的文件")},handleDelBatch:function(){if(1!=this.table.selectedRowKeys.length)return this.$message.warning("请选择一条记录！"),!1;var e="",t=this;t.table.selectionRows[0];t.table.selectedRowKeys.forEach((function(t){e+=t+","})),t.$confirm_({title:"确认删除",content:"是否删除选中数据?",onOk:function(){t.handleDelete(e),t.onClearSelected()}})},searchByquery:function(){this.loadData(1)},searchReset:function(){this.queryParam={},this.loadData(1)},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getFormatDate:function(e){if(!e)return"";var t=e;return t.length>10&&(t=t.substring(0,10)),t},getImportUrl:function(){return"/online/cgform/api/importXls/"+this.code},initCgEnhanceJs:function initCgEnhanceJs(enhanceJs){if(enhanceJs){var Obj=eval("("+enhanceJs+")");this.EnhanceJS=new Obj(_api_manage__WEBPACK_IMPORTED_MODULE_14__["getAction"],_api_manage__WEBPACK_IMPORTED_MODULE_14__["postAction"],_api_manage__WEBPACK_IMPORTED_MODULE_14__["deleteAction"]),this.cgButtonJsHandler("created")}else this.EnhanceJS=""},initCgButtonList:function(e){var t=[],n=[];if(e&&e.length>0)for(var a=0;a<e.length;a++){var r=e[a];"button"==r.buttonStyle?n.push(r):"link"==r.buttonStyle&&t.push(r)}this.cgButtonLinkList=[].concat(t),this.cgButtonList=[].concat(n)},cgButtonJsHandler:function(e){this.EnhanceJS[e]&&this.EnhanceJS[e](this)},cgButtonActionHandler:function(e){var t=this;if(!this.table.selectedRowKeys||0==this.table.selectedRowKeys.length)return this.$message.warning("请先选中一条记录"),!1;if(this.table.selectedRowKeys.length>1)return this.$message.warning("请只选中一条记录"),!1;var n={formId:this.code,buttonCode:e,dataId:this.table.selectedRowKeys[0]};console.log("自定义按钮请求后台参数：",n),_api_manage__WEBPACK_IMPORTED_MODULE_14__["postAction"](this.url.buttonAction,n).then((function(e){e.success?(t.loadData(),t.$message.success("处理完成!")):t.$message.warning("处理失败!")}))},cgButtonLinkHandler:function(e,t,n){var a=this;if("js"==n)this.EnhanceJS[t]&&this.EnhanceJS[t](this,e);else if("action"==n){var r={formId:this.code,buttonCode:t,dataId:e.id};console.log("自定义按钮link请求后台参数：",r),_api_manage__WEBPACK_IMPORTED_MODULE_14__["postAction"](this.url.buttonAction,r).then((function(e){e.success?(a.loadData(),a.$message.success("处理完成!")):a.$message.warning("处理失败!")}))}},initButtonSwitch:function(e){var t=this;e&&e.length>0&&Object.keys(this.buttonSwitch).forEach((function(n){e.indexOf(n)>=0&&(t.buttonSwitch[n]=!1)}))}}}},d44e:function(e,t,n){},f931:function(e,t,n){}}]);