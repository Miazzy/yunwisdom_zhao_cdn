(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd3c6214","chunk-dd3c6214"],{"0429":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"house-index"},[s("wrapper-content",[s("div",{staticClass:"page-search"},[s("a-form",{attrs:{layout:"inline",autoFormCreate:function(e){t.searchForm=e}},on:{submit:function(t){return t.preventDefault(),e.handleSearchSubmit(t)}}},[s("a-form-item",{attrs:{label:"关键字",fieldDecoratorId:"title"}},[s("a-input",{attrs:{placeholder:"请输入关键字"}})],1),s("a-form-item",{attrs:{label:"日期",fieldDecoratorId:"date"}},[s("a-range-picker",{attrs:{placeholder:["开始日期","结束日期"]}})],1),s("a-form-item",[s("a-button",{attrs:{icon:"search",type:"primary",htmlType:"submit",loading:e.searchLoading}},[e._v("搜索")])],1)],1)],1),s("div",{staticClass:"action"},[s("a-button",{staticClass:"m-r-sm",attrs:{icon:"check",disabled:!e.selectedRowKeys.length},on:{click:function(t){return e.listAction({key:"setReadied"})}}},[s("span",[e._v("批量标记已读")])]),s("a-button",{attrs:{icon:"delete",type:"danger",disabled:!e.selectedRowKeys.length},on:{click:function(t){return e.listAction({key:"delete"})}}},[s("span",[e._v("批量删除")])]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedRowKeys.length,expression:"selectedRowKeys.length"}],staticStyle:{"padding-left":"12px"}},[e._v("\n        已选择\n        "),s("span",{staticClass:"text-warning"},[e._v(e._s(e.selectedRowKeys.length))]),e._v(" 项\n      ")])],1),s("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,loading:e.loading,showTotal:e.pagination.showTotal,pagination:e.pagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},rowKey:"id"},on:{change:e.pageChange},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return s("p",{staticStyle:{margin:"0"},domProps:{innerHTML:e._s(t.content)}})}},{key:"action",fn:function(t,a,n){return[s("a",{on:{click:function(t){return e.rowClick(a,"del")}}},[e._v("删除")])]}}])})],1)],1)},n=[],i=(a("386d"),a("7514"),a("ac6a"),a("cd4b")),o=a("2f14"),r=a("1b80"),c=[{title:"公告标题",dataIndex:"title",width:"20%"},{title:"时间",dataIndex:"create_time"},{title:"操作",scopedSlots:{customRender:"action"}}],l={mixins:[r["a"]],data:function(){return{columns:c,dataSource:[],selectedRowKeys:[],loading:!0,searchForm:{},searchLoading:!1}},created:function(){this.init()},methods:{init:function(){var t=this;t.requestData.type="system",t.loading=!0,t.selectedRowKeys=[],Object(i["c"])(t.requestData).then((function(e){t.dataSource=e.data.list,t.pagination.total=e.data.total,t.loading=!1}))},onSelectChange:function(t){this.selectedRowKeys=t},listAction:function(t){var e=this;switch(t.key){case"setReadied":Object(i["d"])(JSON.stringify(e.selectedRowKeys)),e.dataSource.forEach((function(t,a){var s=e.selectedRowKeys.find((function(e){return e==t.id}));s&&(e.dataSource[a].is_read=1)})),e.selectedRowKeys=[],e.$notice("操作成功","message","success");break;case"delete":this.$confirm({title:"确认删除这些公告?",content:"删除后不可恢复",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){return Object(i["a"])(JSON.stringify(e.selectedRowKeys)).then((function(t){Object(o["a"])(t)&&(e.init(),e.notice("操作成功","message","success"),e.selectedRowKeys=[])})),Promise.resolve()}});break}},rowClick:function(t,e){var a=this;"del"==e&&this.$confirm({title:"确认删除此公告?",content:"删除后不可恢复",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){return Object(i["b"])(t.id).then((function(t){a.init()})),Promise.resolve()}})},handleSearchSubmit:function(){var t=this;t.searchForm.validateFields((function(e,a){e||t.search()}))},search:function(){var t=this.searchForm.getFieldsValue();if(t.date&&t.date.length>0){var e=t.date[0].format("YYYY-MM-DD"),a=t.date[1].format("YYYY-MM-DD");t.date=e+"~"+a}Object.assign(this.requestData,t),this.init()}}},d=l,m=a("2877"),u=Object(m["a"])(d,s,n,!1,null,null,null);e["default"]=u.exports},3373:function(t,e,a){"use strict";var s=a("eeee"),n=a.n(s);n.a},4486:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"members-profile"},[a("a-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:">"}},[a("a-breadcrumb-item",[a("router-link",{attrs:{to:"/"}},[a("a-icon",{attrs:{type:"home"}}),t._v("首页\n      ")],1)],1),a("a-breadcrumb-item",[a("router-link",{attrs:{to:"/members"}},[a("a-icon",{attrs:{type:"team"}}),t._v("成员\n      ")],1)],1),a("a-breadcrumb-item",[t._v(t._s(t.member.name))])],1),a("div",{staticClass:"header"},[a("div",{staticClass:"member-info"},[t.member?[a("div",{staticClass:"base"},[a("a-avatar",{staticClass:"m-r",attrs:{size:"large",icon:"user",src:t.member.avatar}}),a("div",{staticClass:"title"},[t._v(t._s(t.member.name))])],1),a("div",{staticClass:"mail muted"},[a("a-icon",{attrs:{type:"mail"}}),t._v("\n          "+t._s(t.member.email)+"\n          "),a("a-tooltip",[a("template",{slot:"title"},[a("span",[t._v("更新基础资料")])]),a("a",{staticClass:"muted m-l-sm",on:{click:t.syncDetail}},[a("a-icon",{attrs:{type:"reload"}})],1)],2)],1)]:t._e()],2)]),a("div",{staticClass:"actions"},[a("a-tabs",{attrs:{animated:!1,defaultActiveKey:"1"},on:{change:t.tabChange},model:{value:t.tabKey,callback:function(e){t.tabKey=e},expression:"tabKey"}},[a("a-tab-pane",{key:"1",staticClass:"info-content base-info",attrs:{tab:"详细资料"}},[a("p",{staticClass:"action-wrapper"},[a("span",{staticClass:"title"},[t._v("详细资料")]),a("a",{staticClass:"muted",on:{click:t.showEditBaseInfo}},[a("a-icon",{attrs:{type:"edit"}}),t._v("编辑\n          ")],1)]),a("a-row",{staticClass:"content-wrapper"},[a("a-col",{attrs:{span:8}},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"muted"},[t._v("姓名")]),a("span",[t._v(t._s(t.member.name))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"muted"},[t._v("手机")]),a("span",[t._v(t._s(t.member.mobile))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"muted"},[t._v("邮箱")]),a("span",[t._v(t._s(t.member.email))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"muted"},[t._v("职位")]),a("span",[t._v(t._s(t.member.position))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"muted"},[t._v("部门")]),a("span",[t._v(t._s(t.member.departments))])])]),a("a-col",{attrs:{span:8}},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"muted"},[t._v("加入时间")]),a("span",[t._v(t._s(t.member.create_time))])])])],1)],1),a("a-tab-pane",{key:"3",staticClass:"info-content",attrs:{tab:"任务安排"}},[a("p",{staticClass:"action-wrapper"},[a("span",{staticClass:"title"},[t._v("\n            任务安排\n            "),a("a-dropdown",{attrs:{trigger:["click"]}},[a("a",{staticClass:"muted m-l-sm",staticStyle:{"font-size":"14px"}},[0==t.task.type[0]?a("span",[t._v("未完成的任务")]):a("span",[t._v("全部")]),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{staticClass:"field-right-menu",attrs:{slot:"overlay",selectable:""},on:{click:t.changeTaskType},slot:"overlay",model:{value:t.task.type,callback:function(e){t.$set(t.task,"type",e)},expression:"task.type"}},[a("a-menu-item",{key:"0"},[a("div",{staticClass:"menu-item-content"},[a("span",[t._v("未完成的任务")])])]),a("a-menu-item",{key:"-1"},[a("div",{staticClass:"menu-item-content"},[a("span",[t._v("全部")])])])],1)],1)],1)]),a("a-list",{staticClass:"content-wrapper list",attrs:{loading:t.task.loading}},t._l(t.task.list,(function(e,s){return a("a-list-item",{key:s},[a("a-list-item-meta",{on:{click:function(a){return t.showTaskDetail(e)}}},[a("div",{attrs:{slot:"title"},slot:"title"},[e.done?t._e():a("a-icon",{attrs:{type:"border"}}),e.done?a("a-icon",{attrs:{type:"check-square"}}):t._e(),a("span",{staticClass:"m-l-sm"},[t._v(t._s(e.name))]),a("span",{staticClass:"muted m-l tips"},[a("a-icon",{attrs:{type:"project"}}),a("router-link",{staticClass:"muted m-l-xs",attrs:{target:"_blank",to:"/project/space/task/"+e.projectInfo.code}},[t._v(t._s(e.projectInfo.name))])],1),e.end_time?a("span",{staticClass:"label m-r-xs pull-right",class:t.showTimeLabel(e.end_time)},[t._v(t._s(t.showTaskTime(e.begin_time,e.end_time)))]):t._e()],1),a("div",{attrs:{slot:"description"},slot:"description"})])],1)})),1)],1),a("a-tab-pane",{key:"4",staticClass:"info-content",attrs:{tab:"Ta的项目"}},[a("p",{staticClass:"action-wrapper"},[a("span",{staticClass:"title"},[t._v("Ta的项目")])]),a("a-list",{staticClass:"content-wrapper list default-list",attrs:{loading:t.project.loading}},t._l(t.project.list,(function(e,s){return a("a-list-item",{key:s},[a("a-list-item-meta",{on:{click:function(a){return t.routerLink("/project/space/task/"+e.code)}}},[a("a-avatar",{attrs:{slot:"avatar",icon:"user",src:e.cover},slot:"avatar"}),a("div",{attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"m-l-sm"},[t._v(t._s(e.name))]),a("a-tag",{directives:[{name:"show",rawName:"v-show",value:!e.private,expression:"!item.private"}],staticClass:"m-l",attrs:{color:"green"}},[t._v("公开")])],1),a("div",{attrs:{slot:"description"},slot:"description"},[a("span",{staticClass:"m-l-sm"},[t._v(t._s(e.description))])])],1)],1)})),1)],1)],1)],1),a("a-modal",{attrs:{width:600,title:t.actionInfo.modalTitle,bodyStyle:{padding:"6px 18px 1px 18px"},footer:null},model:{value:t.actionInfo.modalStatus,callback:function(e){t.$set(t.actionInfo,"modalStatus",e)},expression:"actionInfo.modalStatus"}},[a("a-form",{attrs:{form:t.form},on:{submit:function(e){return e.preventDefault(),t.handleSubmitBaseInfo(e)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"姓名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请填写姓名"}],validateTrigger:"blur"}],expression:"['name',{rules: [{ required: true, message: '请填写姓名' }], validateTrigger: 'blur'}]"}],attrs:{placeholder:"输入姓名",size:"large"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"邮箱"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"请填写电子邮箱地址"}],validateTrigger:"blur"}],expression:"['email',{rules: [{ required: true, message: '请填写电子邮箱地址' }], validateTrigger: 'blur'}]"}],attrs:{placeholder:"输入电子邮箱地址",size:"large"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"手机"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile"],expression:"['mobile']"}],attrs:{placeholder:"输入手机",size:"large"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"职位"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["position"],expression:"['position']"}],attrs:{placeholder:"输入职位",size:"large"}})],1)],1)],1),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}],attrs:{placeholder:"输入描述",size:"large",type:"textarea",rows:3}})],1)],1)],1),a("a-form-item",[a("div",{staticClass:"action-btn",staticStyle:{"text-align":"center"}},[a("a-button",{staticClass:"middle-btn",attrs:{type:"primary",htmlType:"submit",block:"",size:"large",loading:t.actionInfo.confirmLoading}},[t._v("保存")])],1)])],1)],1),a("a-modal",{staticClass:"task-detail-modal",attrs:{width:"min-content",closable:!1,title:"",footer:null},on:{cancel:t.detailClose},model:{value:t.task.modalStatus,callback:function(e){t.$set(t.task,"modalStatus",e)},expression:"task.modalStatus"}},[t.task.currentTask.code?a("task-detail",{attrs:{taskCode:t.task.currentTask.code},on:{close:t.detailClose}}):t._e()],1)],1)},n=[],i=(a("7f7f"),a("c5f6"),a("009f")),o=a("1b80"),r=a("2f14"),c=a("0672"),l=a("ca8d"),d=a("6be7"),m=a("81fe"),u={name:"MemberProfile",components:{taskDetail:i["default"]},mixins:[o["a"]],data:function(){return{code:this.$route.params.code,tabKey:this.$route.query.key?this.$route.query.key:"1",member:{},task:{page:1,pageSize:1e3,loading:!1,modalStatus:!1,currentTask:{},type:["0"],total:0,list:[]},project:{page:1,pageSize:1e3,loading:!1,total:0,list:[]},form:this.$form.createForm(this),actionInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"组织成员信息"}}},computed:{},watch:{},created:function(){this.init()},methods:{init:function(){this.getMember(),this.tabChange(this.tabKey)},tabChange:function(t){switch(t){case"3":this.getTasks();break;case"4":this.getProjectList()}},getMember:function(){var t=this;Object(c["q"])(this.code).then((function(e){t.member=e.data}))},syncDetail:function(){var t=this;Object(c["s"])({code:this.code}).then((function(e){t.getMember()}))},getTasks:function(){var t=this;this.task.loading=!0,Object(l["o"])({memberCode:this.member.member_code,type:Number(this.task.type[0]),page:this.task.page,pageSize:this.task.pageSize}).then((function(e){t.task.loading=!1,t.task.list=e.data.list,t.task.total=e.data.total}))},changeTaskType:function(t){var e=this;this.$nextTick((function(){e.getTasks()}))},showTaskDetail:function(t){this.task.currentTask=JSON.parse(JSON.stringify(t)),this.task.modalStatus=!0},detailClose:function(){var t=this;this.task.modalStatus=!1,setTimeout((function(){t.task.currentTask.code=""}),500)},getProjectList:function(){var t=this;this.task.loading=!0,Object(d["l"])({memberCode:this.member.member_code,page:this.task.page,pageSize:this.task.pageSize}).then((function(e){t.project.loading=!1,t.project.list=e.data.list,t.project.total=e.data.total}))},showEditBaseInfo:function(){var t=this;this.actionInfo.modalStatus=!0,this.$nextTick((function(){t.form.setFieldsValue({name:t.member.name,mobile:t.member.mobile,email:t.member.email,position:t.member.position,description:t.member.description})}))},handleSubmitBaseInfo:function(){var t=this,e=this;e.form.validateFields((function(a,s){a||(s.code=e.member.code,Object(c["k"])(s).then((function(a){var n=Object(r["a"])(a);n&&(t.actionInfo.modalStatus=!1,Object.assign(e.member,s))})))}))},showTaskTime:function(t,e){return Object(m["a"])(t,e)},showTimeLabel:function(t){var e="label-primary";if(null==t)return e;var a=moment(moment(t).format("YYYY-MM-DD")).diff(moment().format("YYYY-MM-DD"),"days");return a<0?e="label-danger":0==a?e="label-warning":a>7&&(e="label-normal"),e}}},p=u,h=(a("3373"),a("2877")),f=Object(h["a"])(p,s,n,!1,null,null,null);e["default"]=f.exports},"5eb6":function(t,e,a){"use strict";var s=a("70af"),n=a.n(s);n.a},"70af":function(t,e,a){},"7ce7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"house-index"},[s("wrapper-content",[s("div",{staticClass:"page-search"},[s("a-form",{attrs:{layout:"inline",autoFormCreate:function(e){t.searchForm=e}},on:{submit:function(t){return t.preventDefault(),e.handleSearchSubmit(t)}}},[s("a-form-item",{attrs:{label:"关键字",fieldDecoratorId:"title"}},[s("a-input",{attrs:{placeholder:"请输入关键字"}})],1),s("a-form-item",{attrs:{label:"日期",fieldDecoratorId:"date"}},[s("a-range-picker",{attrs:{placeholder:["开始日期","结束日期"]}})],1),s("a-form-item",[s("a-button",{attrs:{icon:"search",type:"primary",htmlType:"submit",loading:e.searchLoading}},[e._v("搜索")])],1)],1)],1),s("div",{staticClass:"action"},[s("a-button",{staticClass:"m-r-sm",attrs:{icon:"check",disabled:!e.selectedRowKeys.length},on:{click:function(t){return e.listAction({key:"setReadied"})}}},[s("span",[e._v("批量标记已读")])]),s("a-button",{attrs:{icon:"delete",type:"danger",disabled:!e.selectedRowKeys.length},on:{click:function(t){return e.listAction({key:"delete"})}}},[s("span",[e._v("批量删除")])]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedRowKeys.length,expression:"selectedRowKeys.length"}],staticStyle:{"padding-left":"12px"}},[e._v("\n        已选择\n        "),s("span",{staticClass:"text-warning"},[e._v(e._s(e.selectedRowKeys.length))]),e._v(" 项\n      ")])],1),s("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,loading:e.loading,showTotal:e.pagination.showTotal,pagination:e.pagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},rowKey:"id"},on:{change:e.pageChange},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return s("p",{staticStyle:{margin:"0"},domProps:{innerHTML:e._s(t.content)}})}},{key:"action",fn:function(t,a,n){return[s("a",{on:{click:function(t){return e.rowClick(a,"del")}}},[e._v("删除")])]}}])})],1)],1)},n=[],i=(a("386d"),a("7514"),a("ac6a"),a("64de")),o=a("2f14"),r=a("1b80"),c=[{title:"消息标题",dataIndex:"title",width:"20%"},{title:"时间",dataIndex:"create_time"},{title:"操作",scopedSlots:{customRender:"action"}}],l={mixins:[r["a"]],data:function(){return{columns:c,dataSource:[],selectedRowKeys:[],loading:!0,searchForm:{},searchLoading:!1}},created:function(){this.init()},methods:{init:function(){var t=this;t.requestData.type="notice",t.loading=!0,t.selectedRowKeys=[],Object(i["d"])(t.requestData).then((function(e){t.dataSource=e.data.list,t.pagination.total=e.data.total,t.loading=!1}))},onSelectChange:function(t){this.selectedRowKeys=t},listAction:function(t){var e=this;switch(t.key){case"setReadied":Object(i["f"])(JSON.stringify(e.selectedRowKeys)),e.dataSource.forEach((function(t,a){var s=e.selectedRowKeys.find((function(e){return e==t.id}));s&&(e.dataSource[a].is_read=1)})),e.selectedRowKeys=[],e.$notice("操作成功","message","success");break;case"delete":this.$confirm({title:"确认删除这些消息?",content:"删除后不可恢复",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){return Object(i["b"])(JSON.stringify(e.selectedRowKeys)).then((function(t){Object(o["a"])(t)&&(e.init(),e.notice("操作成功","message","success"),e.selectedRowKeys=[])})),Promise.resolve()}});break}},rowClick:function(t,e){var a=this;"del"==e&&this.$confirm({title:"确认删除此消息?",content:"删除后不可恢复",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){return Object(i["c"])(t.id).then((function(t){a.init()})),Promise.resolve()}})},handleSearchSubmit:function(){var t=this;t.searchForm.validateFields((function(e,a){e||t.search()}))},search:function(){var t=this.searchForm.getFieldsValue();if(t.date&&t.date.length>0){var e=t.date[0].format("YYYY-MM-DD"),a=t.date[1].format("YYYY-MM-DD");t.date=e+"~"+a}Object.assign(this.requestData,t),this.init()}}},d=l,m=a("2877"),u=Object(m["a"])(d,s,n,!1,null,null,null);e["default"]=u.exports},eeee:function(t,e,a){},f0b0:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"members-index"},[a("div",{staticClass:"layout-item left"},[a("div",{staticClass:"left-content"},[a("div",{staticClass:"search-content"},[a("a-input",{ref:"keywordInput",attrs:{size:"large",placeholder:"搜索"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[a("a-icon",{staticClass:"muted",attrs:{slot:"prefix",type:"search"},slot:"prefix"}),t.keyword?a("a-icon",{staticClass:"muted",attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmpty},slot:"suffix"}):t._e()],1)],1),a("div",{staticClass:"content-item muted"},[t._v("成员")]),a("div",{staticClass:"menus"},[a("a-menu",{attrs:{mode:"inline"},on:{click:t.getMembers},model:{value:t.selectedKeys,callback:function(e){t.selectedKeys=e},expression:"selectedKeys"}},t._l(t.menus,(function(e,s){return a("a-menu-item",{key:s.toString()},[a("a-icon",{attrs:{type:e.icon}}),a("span",[t._v(t._s(e.title))])],1)})),1)],1),a("div",{staticClass:"content-item muted"},[t._v("部门")]),a("div",{staticClass:"actions content-item"},[a("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"},model:{value:t.showCreateDepartment,callback:function(e){t.showCreateDepartment=e},expression:"showCreateDepartment"}},[a("a",[a("a-icon",{style:{fontSize:"14px"},attrs:{type:"plus-circle"}}),t._v("创建部门\n          ")],1),a("div",{attrs:{slot:"overlay"},slot:"overlay"},[t.showCreateDepartment?a("create-department",{on:{update:t.createDepartmentSuccess}}):t._e()],1)]),a("a",[a("a-icon",{attrs:{type:"bars"}}),t._v("部门排序*\n        ")],1)],1),a("div",{staticClass:"content-item department"},[a("a-spin",{attrs:{spinning:t.departmentLoading}},[a("a-tree",{attrs:{loadData:t.onLoadData,treeData:t.treeData,showIcon:""},on:{select:t.onSelect},scopedSlots:t._u([{key:"custom",fn:function(t){t.selected;return[a("a-icon",{attrs:{type:"bulb"}})]}}])})],1)],1)])]),a("div",{staticClass:"layout-item right"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.currentMenu.title)+" · "+t._s(t.pagination.total))])]),a("div",{staticClass:"actions"},[a("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[a("a-icon",{attrs:{type:"user-add"}}),t._v("添加成员\n          ")],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.showInviteMember=!0}}},[a("a-icon",{attrs:{type:"user-add"}}),t._v("通过邮箱邀请\n              ")],1)]),a("a-menu-divider"),a("a-menu-item",[a("a",{staticClass:"m-l",attrs:{href:t.downLoadUrl,target:"_blank"}},[a("a-icon",{attrs:{type:"copy"}}),t._v("下载批量导入成员模板\n              ")],1)]),a("a-menu-item",[a("a-upload",{attrs:{name:"file",showUploadList:!1,action:t.uploadAction,beforeUpload:t.beforeUpload,headers:t.headers},on:{change:t.handleChange}},[a("a",{staticClass:"text-default",attrs:{loading:t.uploadLoading,disabled:t.uploadLoading}},[a("a-icon",{directives:[{name:"show",rawName:"v-show",value:!t.uploadLoading,expression:"!uploadLoading"}],attrs:{type:"upload"}}),t._v("上传文件批量导入成员\n                ")],1)])],1)],1)],1),t.currentDepartmentCode?[a("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"},model:{value:t.showCreateChildDepartment,callback:function(e){t.showCreateChildDepartment=e},expression:"showCreateChildDepartment"}},[a("a",[a("a-icon",{style:{fontSize:"14px"},attrs:{type:"plus-circle"}}),t._v("创建子部门\n            ")],1),a("div",{attrs:{slot:"overlay"},slot:"overlay"},[t.showCreateChildDepartment?a("create-department",{attrs:{parentDepartmentCode:t.currentDepartmentCode},on:{update:t.createChildDepartmentSuccess}}):t._e()],1)]),a("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"},model:{value:t.showEditDepartment,callback:function(e){t.showEditDepartment=e},expression:"showEditDepartment"}},[a("a",[a("a-icon",{style:{fontSize:"14px"},attrs:{type:"edit"}}),t._v("编辑部门\n            ")],1),a("div",{attrs:{slot:"overlay"},slot:"overlay"},[t.showEditDepartment?a("create-department",{attrs:{departmentCode:t.currentDepartmentCode},on:{edit:t.editDepartmentSuccess}}):t._e()],1)]),a("a",{on:{click:t.deleteDepartment}},[a("a-icon",{style:{fontSize:"14px"},attrs:{type:"delete"}}),t._v("删除部门\n          ")],1)]:t._e()],2)]),a("div",{staticClass:"members-content"},[a("vue-scroll",{ref:"contentscroll"},[a("a-list",{staticClass:"member-list",attrs:{loading:t.loading}},[t.showLoadingMore?a("div",{style:{textAlign:"center",marginTop:"12px",height:"32px",lineHeight:"32px"},attrs:{slot:"loadMore"},slot:"loadMore"},[a("a-button",{on:{click:t.onLoadMore}},[t._v("加载更多")])],1):t._e(),t._l(t.members,(function(e,s){return a("a-list-item",{key:s},[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"}),a("div",{attrs:{slot:"title"},slot:"title"},[a("router-link",{staticClass:"text-default",attrs:{to:"/members/profile/"+e.code}},[t._v("\n                  "+t._s(e.name)+"\n                ")]),e.is_owner?a("a-tag",{staticClass:"m-l-sm"},[t._v("拥有者")]):t._e()],1),a("div",{attrs:{slot:"description"},slot:"description"},[a("span",[t._v("\n                  "+t._s(e.email)+"\n                  "),e.departments?a("span",[t._v("- "+t._s(e.departments))]):t._e()])])],1),e.is_owner?t._e():[0==e.status?a("a",{staticClass:"muted",attrs:{slot:"actions"},on:{click:function(a){return t.resumeAccount(e,s)}},slot:"actions"},[a("a-tooltip",{attrs:{title:"启用账号"}},[a("a-icon",{attrs:{type:"check-circle"}})],1)],1):t._e(),1==e.status?a("a",{staticClass:"muted",attrs:{slot:"actions"},on:{click:function(a){return t.forbidAccount(e,s)}},slot:"actions"},[a("a-tooltip",{attrs:{title:"停用账号"}},[a("a-icon",{attrs:{type:"stop"}})],1)],1):t._e(),a("a",{staticClass:"muted",attrs:{slot:"actions"},on:{click:function(a){return t.deleteAccount(e,s)}},slot:"actions"},[a("a-tooltip",{attrs:{title:"从"+t.actionTitle+"内移除"}},[a("a-icon",{attrs:{type:"user-delete"}})],1)],1)]],2)}))],2)],1)],1)]),t.showInviteMember?a("invite-department-member",{attrs:{"department-code":t.currentDepartmentCode},on:{update:t.getMembers},model:{value:t.showInviteMember,callback:function(e){t.showInviteMember=e},expression:"showInviteMember"}}):t._e()],1)},n=[],i=a("75fc"),o=(a("6b54"),a("7f7f"),a("ac6a"),a("386d"),a("2ef0")),r=a.n(o),c=a("f044"),l=a("1a75"),d=a("5127"),m=a("0672"),u=a("1b80"),p=a("2f14"),h=a("97a8"),f=a("cff3"),b=a("68fe"),v={name:"Members",components:{inviteDepartmentMember:c["default"],createDepartment:l["default"]},mixins:[u["a"]],data:function(){return{keyword:"",selectedKeys:["0"],menus:[{icon:"team",title:"所有成员"},{icon:"usergroup-add",title:"新加入的成员"},{icon:"user",title:"未分配部门的成员"},{icon:"stop",title:"停用的成员"}],currentMenu:{},currentDepartmentCode:"",currentTreeNode:"",treeData:[],departmentLoading:!1,loading:!1,members:[],showLoadingMore:!1,loadingMore:!1,showInviteMember:!1,showCreateDepartment:!1,showEditDepartment:!1,showCreateChildDepartment:!1,downLoadUrl:Object(p["h"])("project/department_member/_downloadTemplate"),uploadLoading:!1,uploadAction:Object(p["c"])("project/department_member/uploadFile")}},computed:{actionTitle:function(){return this.currentDepartmentCode?"部门":"组织"},headers:function(){var t=Object(p["d"])(),e=Object(b["a"])("currentOrganization",!0);return e&&(t.organizationCode=e.code),t}},watch:{keyword:function(){this.search()}},created:function(){this.currentMenu=this.menus[0],this.getMembers({key:0}),this.getDepartment()},methods:{getDepartment:function(){var t=this;this.departmentLoading=!0,Object(d["b"])({page:1,pageSize:100}).then((function(e){var a=[];e.data.list&&e.data.list.forEach((function(t){a.push({key:t.code,title:t.name,isLeaf:!t.hasNext,scopedSlots:{icon:"custom"}})})),t.treeData=a,t.departmentLoading=!1}))},getMembers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=this;void 0!=e&&(this.currentDepartmentCode="",this.currentMenu=this.menus[e],this.selectedKeys=[e.toString()],this.requestData.searchType=e),s.loading=!0,a&&(this.pagination.page=1),Object(m["p"])(this.requestData).then((function(t){s.members=a?t.data.list:s.members.concat(t.data.list),s.pagination.total=t.data.total,s.showLoadingMore=s.pagination.total>s.members.length,s.loading=!1,s.loadingMore=!1}))},search:r.a.debounce((function(){if(this.keyword||(this.list=[]),this.keyword.length<=1)return!1;this.requestData.keyword=this.keyword,this.getMembers()}),500),onLoadMore:function(){this.loadingMore=!0,this.pagination.page++,this.getMembers({},!1)},onSelect:function(t,e){this.selectedKeys=[],this.currentMenu=e.node.dataRef,this.currentDepartmentCode=e.node.dataRef.key,this.currentTreeNode=e.node;var a=this;this.requestData.searchType=4,this.requestData.departmentCode=e.node.dataRef.key,a.loading=!0,Object(m["p"])(this.requestData).then((function(t){a.members=t.data.list,a.pagination.total=t.data.total,a.showLoadingMore=a.pagination.total>a.members.length,a.loading=!1,a.loadingMore=!1}))},onLoadData:function(t){var e=this;return new Promise((function(a){Object(d["b"])({page:1,pageSize:100,pcode:t.dataRef.key}).then((function(s){var n=[];s.data.list.length&&s.data.list.forEach((function(t){n.push({key:t.code,title:t.name,isLeaf:!t.hasNext,scopedSlots:{icon:"custom"}})})),t.dataRef.isLeaf=!n.length>0,t.dataRef.children=n,e.treeData=Object(i["a"])(e.treeData),a()}))}))},createDepartmentSuccess:function(t){var e=Object(i["a"])(this.treeData);e.push({key:t.code,title:t.name,isLeaf:!0,scopedSlots:{icon:"custom"}}),this.treeData=[],this.treeData=e,this.showCreateDepartment=!1},createChildDepartmentSuccess:function(){this.onLoadData(this.currentTreeNode),this.showCreateChildDepartment=!1},editDepartmentSuccess:function(t){this.currentTreeNode.dataRef.title=t,this.showEditDepartment=!1},deleteDepartment:function(){var t=this;this.$confirm({title:"您确定要删除当前部门吗？",content:"删除部门会同时删除其子部门，部门中的成员不会被移出组织。",okText:"删除",okType:"danger",cancelText:"再想想",onOk:function(){return Object(d["a"])(t.currentDepartmentCode).then((function(e){Object(p["a"])(e)&&(t.currentTreeNode.$parent.dataRef?(t.onLoadData(t.currentTreeNode.$parent),t.onSelect(null,{node:t.currentTreeNode.$parent})):(t.getMembers({key:0}),t.getDepartment()),Object(h["b"])({title:"删除成功"},"notice","success"))})),Promise.resolve()}})},forbidAccount:function(t,e){var a=this;this.$confirm({title:"您确定要停用当前帐号吗？",content:"被停用的帐号将无法访问该".concat(this.actionTitle,"，但帐号信息仍保留，方便工作交接和管理。支持帐号恢复"),okText:"停用",okType:"danger",cancelText:"再想想",onOk:function(){return Object(m["n"])(t.code).then((function(t){Object(p["a"])(t)&&(a.members.splice(e,1),Object(h["b"])({title:"已成功停用账号"},"notice","success"))})),Promise.resolve()}})},resumeAccount:function(t,e){var a=this;this.$confirm({title:"您确定要启用账号吗？",content:"被启用的帐号将重新加入该".concat(this.actionTitle),okText:"启用",okType:"primary",cancelText:"再想想",onOk:function(){return Object(m["r"])(t.code).then((function(t){Object(p["a"])(t)&&(a.members.splice(e,1),Object(h["b"])({title:"已成功启用账号"},"notice","success"))})),Promise.resolve()}})},deleteAccount:function(t,e){var a=this;this.$confirm({title:"确认从".concat(this.actionTitle,"中移除成员吗？"),content:"移除后该账号在".concat(this.actionTitle,"内的相关信息将会被清除"),okText:"移除",okType:"danger",cancelText:"再想想",onOk:function(){return a.currentDepartmentCode?Object(f["b"])(t.code,a.currentDepartmentCode).then((function(t){Object(p["a"])(t)&&(a.members.splice(e,1),Object(h["b"])({title:"移除成功"},"notice","success"))})):Object(m["j"])(t.code).then((function(t){Object(p["a"])(t)&&(a.members.splice(e,1),Object(h["b"])({title:"移除成功"},"notice","success"))})),Promise.resolve()}})},emitEmpty:function(){this.$refs.keywordInput.focus(),this.keyword="",this.requestData.keyword="",this.getMembers()},handleChange:function(t){if("uploading"===t.file.status)return Object(h["b"])("正在导入，请稍后...","message","loading",0),void(this.uploadLoading=!0);if("done"===t.file.status&&(console.log(t),this.uploadLoading=!1,Object(p["a"])(t.file.response,!0))){t.file.response.data;Object(h["b"])("导入成功","message","success"),this.getMembers()}},beforeUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("文件不能超过2MB!"),e}}},g=v,y=(a("5eb6"),a("2877")),k=Object(y["a"])(g,s,n,!1,null,null,null);e["default"]=k.exports}}]);