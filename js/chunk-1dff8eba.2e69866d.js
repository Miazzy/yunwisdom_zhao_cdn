(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dff8eba","chunk-1dff8eba"],{"523b":function(t,s,e){"use strict";var i=e("9b30"),a=e.n(i);a.a},"9b30":function(t,s,e){},beeb:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"version-detail"},[e("a-spin",{staticClass:"version-detail-spin",attrs:{spinning:t.loading}},[e("div",{staticClass:"task-header"},[e("span",{staticClass:"head-title"},[e("span",[t._v(t._s(t.version.featureName))])]),e("span",{staticClass:"header-action text-right"},[[e("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"},model:{value:t.visibleTaskMenu,callback:function(s){t.visibleTaskMenu=s},expression:"visibleTaskMenu"}},[e("a-tooltip",{attrs:{mouseEnterDelay:.5}},[e("template",{slot:"title"},[e("span",[t._v("打开菜单")])]),e("a",{staticClass:"action-item muted"},[e("a-icon",{attrs:{type:"ellipsis"}})],1)],2),e("a-menu",{staticClass:"field-right-menu",attrs:{slot:"overlay"},on:{click:t.doVersion},slot:"overlay"},[e("a-menu-item",{key:"delete"},[e("a-icon",{attrs:{type:"delete"}}),e("span",[t._v("删除版本")])],1)],1)],1)],e("a-tooltip",{attrs:{mouseEnterDelay:.5}},[e("template",{slot:"title"},[e("span",[t._v("关闭面板")])]),e("a",{staticClass:"action-item muted",on:{click:t.detailClose}},[e("a-icon",{attrs:{type:"close"}})],1)],2)],2)]),e("div",{staticClass:"task-wrap"},[e("div",{staticClass:"task-content"},[e("div",{staticClass:"content-left"},[e("vue-scroll",{attrs:{ops:t.scrollOps}},[e("div",{staticClass:"task-title",class:{disabled:t.disableEdit}},[e("a-input",{directives:[{name:"show",rawName:"v-show",value:t.showEditName,expression:"showEditName"}],ref:"inputTitle",attrs:{"auto-focus":"",size:"large"},on:{blur:t.doName},model:{value:t.version.name,callback:function(s){t.$set(t.version,"name",s)},expression:"version.name"}}),t.disableEdit?e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showEditName,expression:"!showEditName"}],staticClass:"title-text"},[t._v(t._s(t.version.name))]):e("a-tooltip",{attrs:{mouseEnterDelay:.5}},[e("template",{slot:"title"},[e("span",[t._v("点击即可编辑")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showEditName,expression:"!showEditName"}],staticClass:"title-text",on:{click:t.editTitle}},[t._v(t._s(t.version.name))])],2)],1),e("div",{staticClass:"task-basic-attrs-view muted"},[e("div",{staticClass:"field-list",class:{disabled:t.disableEdit}},[e("div",{staticClass:"component-mount"},[e("div",{staticClass:"field"},[e("div",{staticClass:"field-left"},[e("a-icon",{attrs:{type:"check-square"}}),e("span",{staticClass:"field-name"},[t._v("状态")])],1),e("div",{staticClass:"field-right"},[e("a-dropdown",{class:{disabled:t.task.hasUnDone},attrs:{placement:"bottomCenter",trigger:["click"],disabled:!!t.task.deleted||!!t.task.hasUnDone}},[e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[t.disableEdit?e("span",{staticStyle:{"font-size":"12px"}},[t._v("版本已发布，不能编辑")]):t._e()]),e("span",[e("span",{staticClass:"version-status",class:"status-"+t.version.status},[e("a-icon",{attrs:{type:"schedule"}}),e("span",{staticClass:"m-l-xs"},[t._v("\n                                "+t._s(t.version.statusText)+"\n                              ")])],1)])],2),e("a-menu",{directives:[{name:"show",rawName:"v-show",value:!t.disableEdit,expression:"!disableEdit"}],staticClass:"field-right-menu",attrs:{slot:"overlay",selectable:!1},on:{click:t.changeVersionStatus},slot:"overlay"},[e("a-menu-item",{key:"0"},[e("div",{staticClass:"menu-item-content"},[e("a-tag",[t._v("未开始")]),e("a-icon",{directives:[{name:"show",rawName:"v-show",value:0==t.version.status,expression:"version.status == 0"}],staticClass:"check muted",attrs:{type:"check"}})],1)]),e("a-menu-item",{key:"1"},[e("div",{staticClass:"menu-item-content"},[e("a-tag",{attrs:{color:"blue"}},[t._v("进行中")]),e("a-icon",{directives:[{name:"show",rawName:"v-show",value:1==t.version.status,expression:"version.status == 1"}],staticClass:"check muted",attrs:{type:"check"}})],1)]),e("a-menu-item",{key:"2"},[e("div",{staticClass:"menu-item-content"},[e("a-tag",{attrs:{color:"red"}},[t._v("延期发布")]),e("a-icon",{directives:[{name:"show",rawName:"v-show",value:2==t.version.status,expression:"version.status == 2"}],staticClass:"check muted",attrs:{type:"check"}})],1)]),e("a-menu-item",{key:"3"},[e("div",{staticClass:"menu-item-content"},[e("a-tag",{attrs:{color:"green"}},[t._v("已发布")]),e("a-icon",{directives:[{name:"show",rawName:"v-show",value:3==t.version.status,expression:"version.status == 3"}],staticClass:"check muted",attrs:{type:"check"}})],1)])],1)],1)],1)])]),e("div",{staticClass:"component-mount"},[e("div",{staticClass:"field"},[e("div",{staticClass:"field-left"},[e("a-icon",{attrs:{type:"calendar"}}),e("span",{staticClass:"field-name"},[t._v("开始时间")])],1),e("div",{staticClass:"field-right field-date"},[e("a-dropdown",{attrs:{trigger:["click"],disabled:t.disableEdit},model:{value:t.showStartTime,callback:function(s){t.showStartTime=s},expression:"showStartTime"}},[t.disableEdit?e("div",{staticClass:"field-flex"},[e("a",{staticClass:"muted name",staticStyle:{margin:"0"}},[t.version.setStartTime?[t._v("\n                              "+t._s(t.version.start_time_format)+"\n                            ")]:[t._v("设置开始时间")]],2)]):e("a-tooltip",{attrs:{mouseEnterDelay:.5}},[e("template",{slot:"title"},[e("span",[t._v("点击设置开始时间")])]),e("div",{staticClass:"field-flex"},[e("a",{staticClass:"muted name",staticStyle:{margin:"0"}},[t.version.setStartTime?[t._v("\n                                "+t._s(t.version.start_time_format)+"\n                              ")]:[t._v("设置开始时间")]],2)])],2),e("div",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-date-picker",{attrs:{size:"small",format:"MM月DD日 HH:mm",showTime:"",allowClear:"",showToday:!1,open:t.showStartTime},on:{ok:function(s){return t.doStartTime(!0)}},model:{value:t.version.start_time,callback:function(s){t.$set(t.version,"start_time",s)},expression:"version.start_time"}},[e("template",{slot:"renderExtraFooter"},[e("a",{staticStyle:{position:"absolute"},attrs:{size:"small"},on:{click:function(s){return t.doStartTime(!1)}}},[t._v("清除")])])],2)],1)],1)],1)])]),e("div",{staticClass:"component-mount"},[e("div",{staticClass:"field"},[e("div",{staticClass:"field-left"},[e("a-icon",{attrs:{type:"calendar"}}),e("span",{staticClass:"field-name"},[t._v("发布时间")])],1),e("div",{staticClass:"field-right field-date"},[e("a-dropdown",{attrs:{trigger:["click"],disabled:t.disableEdit},model:{value:t.showPlanPublishTime,callback:function(s){t.showPlanPublishTime=s},expression:"showPlanPublishTime"}},[t.disableEdit?e("div",{staticClass:"field-flex"},[e("a",{staticClass:"muted name",staticStyle:{margin:"0"}},[t.version.setPlanPublishTime?[t._v("\n                              "+t._s(t.version.plan_publish_time_format)+"\n                            ")]:[t._v("设置发布时间")]],2)]):e("a-tooltip",{attrs:{mouseEnterDelay:.5}},[e("template",{slot:"title"},[e("span",[t._v("点击设置发布时间")])]),e("div",{staticClass:"field-flex"},[e("a",{staticClass:"muted name",staticStyle:{margin:"0"}},[t.version.setPlanPublishTime?[t._v("\n                                "+t._s(t.version.plan_publish_time_format)+"\n                              ")]:[t._v("设置发布时间")]],2)])],2),e("div",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-date-picker",{attrs:{size:"small",format:"MM月DD日 HH:mm",showTime:"",allowClear:"",showToday:!1,open:t.showPlanPublishTime},on:{ok:function(s){return t.doPlanPublishTime(!0)}},model:{value:t.version.plan_publish_time,callback:function(s){t.$set(t.version,"plan_publish_time",s)},expression:"version.plan_publish_time"}},[e("template",{slot:"renderExtraFooter"},[e("a",{staticStyle:{position:"absolute"},attrs:{size:"small"},on:{click:function(s){return t.doPlanPublishTime(!1)}}},[t._v("清除")])])],2)],1)],1)],1)])]),e("div",{staticClass:"component-mount"},[e("div",{staticClass:"field"},[e("div",{staticClass:"field-left"},[e("a-icon",{attrs:{type:"fire"}}),e("span",{staticClass:"field-name"},[t._v("完成进度")])],1),e("div",{staticClass:"field-right width-block"},[e("a-tooltip",{attrs:{placement:"top",mouseEnterDelay:.3,title:"系统自动统计当前版本的完成进度"}},[e("a-progress",{attrs:{strokeWidth:4,percent:t.version.schedule}})],1)],1)])]),e("div",{staticClass:"component-mount"},[e("div",{staticClass:"field"},[e("div",{staticClass:"field-left"},[e("a-icon",{attrs:{type:"file-text"}}),e("span",{staticClass:"field-name"},[t._v("备注")])],1),e("div",{staticClass:"field-right width-block"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showVersionDescriptionEdit,expression:"!showVersionDescriptionEdit"}],staticClass:"task-description",class:{disabled:t.disableEdit},on:{click:t.showVersionDesc}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.version.description,expression:"version.description"}],staticClass:"description-txt",domProps:{innerHTML:t._s(t.version.description)}}),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.version.description,expression:"!version.description"}]},[t._v("添加备注")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showVersionDescriptionEdit,expression:"showVersionDescriptionEdit"}]},[e("a-input",{attrs:{type:"textarea"},model:{value:t.version.description,callback:function(s){t.$set(t.version,"description",s)},expression:"version.description"}}),e("div",{staticClass:"action-btn pull-right"},[e("a",{staticClass:"cancel-text muted",attrs:{type:"text"},on:{click:function(s){t.showVersionDescriptionEdit=!1}}},[t._v("取消")]),e("a-button",{staticClass:"middle-btn",attrs:{type:"primary",htmlType:"submit"},on:{click:t.doContent}},[t._v("保存")])],1)],1)])])]),e("div",{staticClass:"component-mount"},[e("div",{staticClass:"field"},[e("div",{staticClass:"field-left"},[e("a-icon",{attrs:{type:"bars"}}),e("span",{staticClass:"field-name"},[t._v("\n                        发布内容\n                        "),e("span",{directives:[{name:"show",rawName:"v-show",value:!1!==t.versionTaskSchedule,expression:"versionTaskSchedule !== false"}]},[t._v("\n                          · "+t._s(t.versionTaskDoneNum)+"/"+t._s(t.versionTaskList.length)+"\n                        ")])])],1),e("div",{staticClass:"field-right width-block"})])]),e("div",{staticClass:"component-mount"},[e("div",{staticClass:"field"},[e("div",{staticClass:"block-field width-block"},[e("div",{staticClass:"task-child"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.versionTaskList.length,expression:"versionTaskList.length"}],staticClass:"task-list"},t._l(t.versionTaskList,(function(s,i){return e("div",{key:s.code},[e("div",{staticClass:"list-item task"},[e("div",{staticClass:"check-box-wrapper task-item",on:{click:function(e){return e.stopPropagation(),t.showTaskDetail(s)}}},[e("a-icon",{staticClass:"check-box disabled",style:{fontSize:"16px"},attrs:{type:s.done?"check-square":"border"}})],1),e("a-tooltip",{attrs:{mouseEnterDelay:.5}},[e("template",{slot:"title"},[s.executor?e("span",[t._v("\n                                    "+t._s(s.executor.name)+"\n                                  ")]):e("span",[t._v("待认领")])]),e("div",{on:{click:function(e){return e.stopPropagation(),t.showTaskDetail(s)}}},[s.executor?e("a-avatar",{staticClass:"task-item",attrs:{size:"small",icon:"user",src:s.executor.avatar}}):e("a-avatar",{staticClass:"task-item",attrs:{size:"small",icon:"user"}})],1)],2),e("div",{staticClass:"task-item task-title",on:{click:function(e){return e.stopPropagation(),t.showTaskDetail(s)}}},[e("div",{staticClass:"title-text"},[t._v(t._s(s.name))])]),e("span",{staticClass:"m-r muted"},[s.done?e("span",{staticClass:"text-success"},[t._v("已完成")]):e("span",[t._v("未完成")])]),e("a",{staticClass:"muted",on:{click:function(e){return e.stopPropagation(),t.removeVersionTask(s)}}},[e("a-icon",{staticClass:"task-item",attrs:{type:"delete"}})],1)],1)])})),0),e("a-tooltip",{attrs:{placement:"top"}},[e("a",{directives:[{name:"show",rawName:"v-show",value:!t.showChildTask,expression:"!showChildTask"}],staticClass:"add-handler",class:{disabled:t.disableEdit},on:{click:t.getTaskStages}},[e("a-icon",{staticStyle:{"margin-right":"6px"},attrs:{type:"plus"}}),t._v("添加发布内容\n                          ")],1)])],1)])])])])])])],1),e("div",{staticClass:"content-right"},[e("div",{staticClass:"log-wrap"},[e("div",{staticClass:"header"},[e("span",{staticClass:"text-default"},[t._v("所有动态")])]),e("vue-scroll",[e("div",{staticClass:"log-list muted"},[e("a",{directives:[{name:"show",rawName:"v-show",value:t.checkShowMoreLog,expression:"checkShowMoreLog"}],staticClass:"show-more muted",on:{click:t.getMoreVersionLog}},[e("a-icon",{attrs:{type:"ellipsis"}}),t._v("\n                  显示较早的 "+t._s(t.versionLogTotal-t.versionLog.length)+" 条动态\n                ")],1),t._l(t.versionLog,(function(s){return e("div",{key:s.code,staticClass:"list-item"},[[e("a-icon",{staticClass:"log-item",attrs:{type:s.icon}}),e("div",{staticClass:"log-item log-txt"},[e("div",[t._v("\n                        "+t._s(s.member.name)+"\n                        "),e("span",{domProps:{innerHTML:t._s(s.remark)}})]),s.content?e("div",{staticClass:"log-content",domProps:{innerHTML:t._s(s.content)}}):t._e()])],e("a-tooltip",{attrs:{mouseEnterDelay:.5}},[e("template",{slot:"title"},[e("span",[t._v(t._s(s.create_time))])]),e("span",{staticClass:"log-item"},[t._v("\n                      "+t._s(t._f("formatLogTime")(s.create_time))+"\n                    ")])],2)],2)}))],2)])],1)])])])]),e("a-modal",{attrs:{destroyOnClose:"",width:360,title:"实际发布时间",bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:t.publishVersion.modalStatus,callback:function(s){t.$set(t.publishVersion,"modalStatus",s)},expression:"publishVersion.modalStatus"}},[e("a-form",{attrs:{form:t.publishVersionForm},on:{submit:function(s){return s.preventDefault(),t.handleSubmitPublishVersion(s)}}},[e("a-form-item",[e("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["publishTime"],expression:"['publishTime']"}],staticStyle:{width:"100%"},attrs:{showTime:"",format:"YYYY年MM月DD日 HH:mm",placeholder:"选择实际发布时间"}})],1),e("a-form-item",[e("div",{staticClass:"action-btn"},[e("a-button",{staticClass:"middle-btn",attrs:{type:"primary",htmlType:"submit",block:"",size:"large",loading:t.publishVersion.confirmLoading}},[t._v("确认发布")])],1)])],1)],1),e("a-modal",{staticClass:"publish-task-modal",attrs:{destroyOnClose:"",width:800,title:"规划发布内容",footer:null},model:{value:t.publishTask.modalStatus,callback:function(s){t.$set(t.publishTask,"modalStatus",s)},expression:"publishTask.modalStatus"}},[e("div",[e("p",{directives:[{name:"show",rawName:"v-show",value:t.publishTask.selectTaskList.length,expression:"publishTask.selectTaskList.length"}]},[t._v("\n        已选择\n        "),e("span",{staticClass:"text-warning"},[t._v("\n          "+t._s(t.publishTask.selectTaskList.length)+"\n        ")]),t._v("\n        项\n      ")]),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.publishTask.selectTaskList.length,expression:"!publishTask.selectTaskList.length"}],staticClass:"muted"},[t._v("请勾选需要发布的内容")])]),e("vue-scroll",[e("div",{staticClass:"publish-task"},[e("a-checkbox-group",{model:{value:t.publishTask.selectTaskList,callback:function(s){t.$set(t.publishTask,"selectTaskList",s)},expression:"publishTask.selectTaskList"}},t._l(t.publishTask.taskStages,(function(s,i){return e("div",{key:i,staticClass:"m-b"},[e("strong",[t._v(t._s(s.name))]),e("a-list",{staticClass:"publish-task-list",attrs:{loading:s.tasksLoading,itemLayout:"horizontal",dataSource:s.tasks},scopedSlots:t._u([{key:"renderItem",fn:function(s,i){return e("a-list-item",{},[e("a-list-item-meta",[e("div",{class:{muted:s.version_code},attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.name))]),e("div",{attrs:{slot:"avatar"},slot:"avatar"},[e("a-checkbox",{attrs:{value:s.code}})],1)])],1)}}],null,!0)})],1)})),0)],1)]),e("div",{staticClass:"footer-item text-right m-t"},[e("a-button",{staticClass:"middle-btn",attrs:{type:"primary",size:"large"},on:{click:t.addVersionTask}},[t._v("保存")])],1)],1),e("a-modal",{staticClass:"task-detail-modal",attrs:{destroyOnClose:"",width:"min-content",closable:!1,title:"",footer:null},on:{cancel:t.taskDetailClose},model:{value:t.showTaskDetailModal,callback:function(s){t.showTaskDetailModal=s},expression:"showTaskDetailModal"}},[e("task-detail",{attrs:{taskCode:t.taskCode},on:{close:t.taskDetailClose}})],1)],1)},a=[],o=(e("8e6e"),e("456d"),e("ac6a"),e("7f7f"),e("bd86")),n=(e("c5f6"),e("5880")),l=e("009f"),r=e("bc5b"),c=e("81fe"),d=e("2f14"),m=e("9f09"),u=e("97a8");function h(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,i)}return e}function v(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?h(Object(e),!0).forEach((function(s){Object(o["a"])(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var p={name:"version-detail",components:{taskDetail:l["default"]},props:{versionCode:{type:[String],default:function(){return""}},width:{type:[String,Number],default:function(){return"1200"}}},data:function(){return{loading:!1,code:this.versionCode,projectCodeCurrent:"",task:{},showTaskDetailModal:!1,taskCode:"",version:{},visibleTaskMenu:!1,versionName:"",showEditName:!1,showStartTime:!1,showPlanPublishTime:!1,showVersionDescriptionEdit:!1,versionTaskList:[],showChildTask:!1,versionLogTotal:0,versionLog:[],publishVersionForm:this.$form.createForm(this),publishVersion:{modalStatus:!1,confirmLoading:!1,status:-1},showMoreTaskLog:0,hasMoreVersionLog:!1,hideShowMore:!1,publishTask:{modalStatus:!1,confirmLoading:!1,loading:!1,selectTaskList:[],taskStages:[]}}},computed:v({},Object(n["mapState"])({userInfo:function(t){return t.userInfo}}),{disableEdit:function(){return 3==this.version.status},versionTaskDoneNum:function(){var t=this.versionTaskList.filter((function(t){return 1==t.done}));return t.length},checkShowMoreLog:function(){return!this.hideShowMore&&this.versionLogTotal>5},versionTaskSchedule:function(){return!!this.versionTaskList.length&&this.versionTaskDoneNum/this.versionTaskList.length*100},scrollOps:function(){return{rail:{background:"#e5e5e5",opacity:1},bar:{keepShow:!0}}}}),watch:{$route:function(t,s){}},created:function(){this.init()},mounted:function(){var t=this,s=arguments;this.changeModalHeight(),window.onresize=function(){return function(){t.changeModalHeight()}()},document.onkeydown=function(e){var i=e||window.event||s.callee.caller.arguments[0];13==i.keyCode&&i.ctrlKey&&t.createComment()}},filters:{formatLogTime:function(t){return Object(c["c"])(t)}},methods:{init:function(){this.loading=!0,this.getVersion(),this.getVersionTask()},detailClose:function(){this.$emit("close",this.version)},getVersion:function(){var t=this;Object(r["h"])({versionCode:this.code}).then((function(s){t.getVersionLog(),t.version=s.data,t.versionName=s.data.name,t.version.start_time?(t.version.setStartTime=!0,t.version.start_time=moment(t.version.start_time)):(t.version.setStartTime=!1,t.version.start_time=moment(moment().format("YYYY-MM-DD")+" 18:00")),t.version.start_time_format=Object(c["b"])(t.version.start_time,!0),t.version.plan_publish_time?(t.version.setPlanPublishTime=!0,t.version.plan_publish_time=moment(t.version.plan_publish_time)):(t.version.setPlanPublishTime=!1,t.version.plan_publish_time=moment(moment().format("YYYY-MM-DD")+" 18:00")),t.version.plan_publish_time_format=Object(c["b"])(t.version.plan_publish_time,!0),t.loading=!1}))},getVersionTask:function(){var t=this;Object(r["f"])({versionCode:this.code}).then((function(s){t.versionTaskList=s.data}))},getVersionLog:function(){var t=this;Object(r["e"])({versionCode:this.code,all:this.showMoreVersionLog,pageSize:5}).then((function(s){t.versionLog=s.data.list,t.versionLogTotal=s.data.total,s.data.total>5&&(t.hasMoreVersionLog=!0)}))},getMoreVersionLog:function(){this.showMoreVersionLog=1,this.hideShowMore=!0,this.getVersionLog()},getTaskStages:function(){var t=this;if(this.disableEdit)return!1;this.publishTask.modalStatus=!0,this.publishTask.loading=!0,Object(m["d"])({projectCode:this.version.projectCode,pageSize:30}).then((function(s){t.publishTask.taskStages=s.data.list,t.publishTask.taskStages&&t.publishTask.taskStages.forEach((function(t){Object(m["g"])({stageCode:t.code}).then((function(s){t.tasksLoading=!1,t.tasks=s.data}))})),t.changeModalHeight(),t.publishTask.loading=!1}))},showTaskDetail:function(t){this.showTaskDetailModal=!0,this.taskCode=t.code},taskDetailClose:function(){this.init(),this.showTaskDetailModal=!1,this.taskCode=""},doVersion:function(t){var s=this,e=t.key;switch(e){case"delete":this.$confirm({title:"删除版本",content:"删除版本后，发布内容的版本字段将被清空，是否确定删除？",okText:"确定",okType:"danger",cancelText:"再想想",onOk:function(){return Object(r["c"])({versionCode:s.code}).then((function(t){var e=Object(d["a"])(t);if(!e)return!1;s.detailClose()})),Promise.resolve()}});break}this.visibleTaskMenu=!1},editTitle:function(){var t=this;this.showEditName=!0,this.$nextTick((function(){t.$refs.inputTitle.focus()}))},deleteTask:function(){var t=this;this.$confirm({title:"彻底删除",content:"彻底删除任务后，该任务及其子任务将会被永久被删除。",okText:"删除",okType:"danger",cancelText:"再想想",onOk:function(){return Object(r["c"])(t.code).then((function(s){t.detailClose()})),Promise.resolve()}})},changeVersionStatus:function(t){var s=this,e=this;if(t.key==this.version.code||3==this.version.status)return!1;3==t.key?this.$confirm({title:"发布提示",content:"请确认当前版本发布内容已全部完成后再发布。",okText:"确认发布",okType:"primary",onOk:function(){return e.publishVersion.status=t.key,e.publishVersion.modalStatus=!0,e.$nextTick((function(){e.publishVersionForm.setFieldsValue({publishTime:moment()})})),Promise.resolve()}}):Object(r["b"])({versionCode:this.version.code,status:t.key}).then((function(t){s.getVersion()}))},handleSubmitPublishVersion:function(){var t=this,s=this;s.publishVersionForm.validateFields((function(e){if(!e){var i=s.publishVersionForm.getFieldsValue();i.publishTime=moment(i.publishTime).format("YYYY-MM-DD HH:mm"),Object(r["b"])({versionCode:t.code,status:t.publishVersion.status,publishTime:i.publishTime}).then((function(t){s.publishVersion.modalStatus=!1,s.getVersion()}))}}))},doStartTime:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.version.setStartTime=t,this.showStartTime=s;var e="";t?(e=moment(this.version.start_time).format("YYYY-MM-DD HH:mm"),this.version.start_time_format=moment(this.version.start_time).format("MM月DD日 HH:mm")):e="",this.editVersion({start_time:e})},doPlanPublishTime:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.version.setPlanPublishTime=t,this.showPlanPublishTime=s;var e="";t?(e=moment(this.version.plan_publish_time).format("YYYY-MM-DD HH:mm"),this.version.plan_publish_time_format=moment(this.version.plan_publish_time).format("MM月DD日 HH:mm")):e="",this.editVersion({plan_publish_time:e})},doName:function(){if(this.showEditName=!1,!this.version.name.trim()||this.version.name==this.versionName)return this.version.name=this.versionName,!1;this.editVersion({name:this.version.name})},editVersion:function(t){var s=this;t.versionCode=this.code,Object(r["d"])(t).then((function(t){var e=Object(d["a"])(t);if(!e)return!1;s.getVersion()}))},showVersionDesc:function(){if(this.disableEdit)return!1;this.showVersionDescriptionEdit=!0},doContent:function(){var t=this.version.description;this.editVersion({description:t}),this.showVersionDescriptionEdit=!1},addVersionTask:function(){var t=this;Object(r["a"])({taskCodeList:JSON.stringify(this.publishTask.selectTaskList),versionCode:this.code}).then((function(s){Object(u["b"])({title:"成功添加 ".concat(s.data.successTotal," 项发布内容到版本")},"notice","success"),t.publishTask.modalStatus=!1,t.publishTask.selectTaskList=[],t.init()}))},removeVersionTask:function(t){var s=this;this.$confirm({title:"移除发布内容",content:"确定移除这个发布内容？",okText:"确定",okType:"danger",cancelText:"再想想",onOk:function(){return Object(r["i"])({taskCode:t.code}).then((function(t){var e=Object(d["a"])(t);if(!e)return!1;s.init()})),Promise.resolve()}})},changeModalHeight:function(){var t=this.width,s=$(window).width()-100,e=$(window).height()-150,i=$(window).height()-200,a=$(window).height()-255;"full-screen"===t||void 0!==this.$route.query["full-screen"]?($(".task-detail-modal").css("width",$(window).width()),$(".version-detail").css("width",$(window).width()),$(".ant-modal").css("top",0),e+=85,i+=85,$(".content-left").css("height",e+"px"),$(".log-wrap").css("height",i+"px")):(s>t&&(s=t),$(".version-detail").css("width",s),$(".content-left").css("height",e+"px"),$(".log-wrap").css("height",i+"px"),$(".publish-task").css("height",a+"px"))}}},f=p,k=(e("523b"),e("2877")),b=Object(k["a"])(f,i,a,!1,null,null,null);s["default"]=b.exports}}]);