(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b89a7062","chunk-b89a7062"],{"2a3c":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-list-index"},[o("wrapper-content",{attrs:{showHeader:!1}},[o("div",{staticClass:"action"},[o("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.doAction(null,"new")}}},[t._v("创建新项目")])],1),o("a-list",{staticClass:"project-list",attrs:{loading:t.loading,itemLayout:"horizontal",dataSource:t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(e,a){return o("a-list-item",{},[o("span",{attrs:{slot:"actions"},on:{click:function(o){return t.inviteProjectMember(e)}},slot:"actions"},[o("a-tooltip",{attrs:{title:"添加成员"}},[o("a-icon",{attrs:{type:"user-add"}})],1)],1),o("span",{attrs:{slot:"actions"},on:{click:function(o){return t.doAction(e,"del",a)}},slot:"actions"},[o("a-tooltip",{attrs:{title:"移至回收站"}},[o("a-icon",{attrs:{type:"delete"}})],1)],1),o("span",{attrs:{slot:"actions"},on:{click:function(o){return t.doAction(e,"edit",a)}},slot:"actions"},[o("a-tooltip",{attrs:{title:"项目设置"}},[o("a-icon",{attrs:{type:"setting"}})],1)],1),o("span",{attrs:{slot:"actions"},slot:"actions"},[o("a-tooltip",{attrs:{title:e.collected?"取消收藏":"加入收藏"},on:{click:function(o){return t.doAction(e,"collect",a)}}},[o("a-icon",{directives:[{name:"show",rawName:"v-show",value:!e.collected,expression:"!item.collected"}],attrs:{type:"star"}}),o("a-icon",{directives:[{name:"show",rawName:"v-show",value:e.collected,expression:"item.collected"}],staticStyle:{color:"#ffaf38"},attrs:{type:"star",theme:"filled"}})],1)],1),o("a-list-item-meta",{attrs:{description:e.description}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("router-link",{attrs:{to:"/project/space/task/"+e.code}},[t._v("\n              "+t._s(e.name)+"\n            ")]),o("a-tag",{directives:[{name:"show",rawName:"v-show",value:!e.private,expression:"!item.private"}],staticClass:"m-l",attrs:{color:"green"}},[t._v("公开")])],1),o("a-avatar",{attrs:{slot:"avatar",icon:"user",src:e.cover},slot:"avatar"})],1),o("div",{staticClass:"other-info muted"},[o("div",{staticClass:"info-item"},[o("span",[t._v("创建日期")]),o("span",[t._v(t._s(t.moment(e.create_time).format("YYYY-MM-DD")))])]),o("div",{staticClass:"info-item"},[o("span",[t._v("创建人")]),o("span",[t._v(t._s(e.owner_name))])]),o("div",{staticClass:"info-item schedule"},[o("span",[t._v("进度")]),o("a-progress",{attrs:{strokeWidth:5,percent:e.schedule}})],1)])],1)}}])},[t.showLoadingMore?o("div",{style:{textAlign:"center",marginTop:"12px",height:"32px",lineHeight:"32px"},attrs:{slot:"loadMore"},slot:"loadMore"},[t.loadingMore?o("a-spin"):o("a-button",{on:{click:t.onLoadMore}},[t._v("查看更多项目")])],1):t._e()])],1),o("a-modal",{attrs:{destroyOnClose:"",width:360,title:t.actionInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:t.actionInfo.modalStatus,callback:function(e){t.$set(t.actionInfo,"modalStatus",e)},expression:"actionInfo.modalStatus"}},[o("a-form",{attrs:{form:t.form},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("a-form-item",[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入项目名称"}]}],expression:"[\n            'name',\n            {rules: [{required: true, message: '请输入项目名称'}]},\n          ]"}],attrs:{placeholder:"项目名称（必填）"}})],1),o("a-form-item",[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateCode"],expression:"['templateCode']"}],attrs:{placeholder:"项目模板"}},[o("a-select-option",{key:0},[t._v("空白项目")]),t._l(t.templateList,(function(e){return o("a-select-option",{key:e.code},[t._v(t._s(e.name))])}))],2)],1),o("a-form-item",[o("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}],attrs:{placeholder:"项目简介",rows:2}})],1),o("a-form-item",[o("div",{staticClass:"action-btn"},[o("a-button",{staticClass:"middle-btn",attrs:{type:"primary",htmlType:"submit",block:"",size:"large",loading:t.actionInfo.confirmLoading}},[t._v("完成并创建")])],1)])],1)],1),o("a-modal",{staticClass:"project-config-modal",attrs:{destroyOnClose:"",width:800,title:t.projectModal.modalTitle,footer:null},model:{value:t.projectModal.modalStatus,callback:function(e){t.$set(t.projectModal,"modalStatus",e)},expression:"projectModal.modalStatus"}},[o("project-config",{attrs:{code:t.currentProjectCode},on:{update:t.updateProject}})],1),t.showInviteMember?o("invite-project-member",{attrs:{"project-code":t.currentProjectCode},model:{value:t.showInviteMember,callback:function(e){t.showInviteMember=e},expression:"showInviteMember"}}):t._e()],1)},i=[],n=(o("386d"),o("7f7f"),o("d3a1")),r=o("58bf"),s=o("6be7"),c=o("2f14"),l=o("1b80"),d=o("e55b"),u=o("9cdf"),m={components:{inviteProjectMember:n["default"],projectConfig:r["default"]},mixins:[l["a"]],data:function(){return{dataSource:[],loading:!0,showLoadingMore:!1,loadingMore:!1,showInviteMember:!1,currentProject:{},currentProjectCode:0,currentProjectIndex:0,newData:{code:""},form:this.$form.createForm(this),searchForm:{},actionInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"编辑项目"},projectModal:{modalStatus:!1,modalTitle:"项目设置"},templateList:[]}},watch:{$route:function(){this.init()}},created:function(){this.init(),this.projectTemplates()},methods:{moment:moment,init:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this;t&&(this.dataSource=[],this.pagination.page=1,this.pagination.pageSize=1e3,this.showLoadingMore=!1),this.requestData.type=this.$route.params.type,e.loading=!0,Object(s["f"])(e.requestData).then((function(t){e.dataSource=e.dataSource.concat(t.data.list),e.pagination.total=t.data.total,e.showLoadingMore=e.pagination.total>e.dataSource.length,e.loading=!1,e.loadingMore=!1}))},projectTemplates:function(){var t=this;Object(u["a"])({pageSize:100,viewType:-1}).then((function(e){t.templateList=e.data.list}))},onLoadMore:function(){this.loadingMore=!0,this.pagination.page++,this.init(!1)},inviteProjectMember:function(t){this.currentProject=t,this.currentProjectCode=t.code,this.showInviteMember=!0},doAction:function(t,e,o){var a=this;this.currentProject=t,this.currentProjectIndex=o;var i=this;if(i.newData={id:0},"new"==e)setTimeout((function(){i.form&&i.form.resetFields()}),0),i.actionInfo.modalStatus=!0,i.actionInfo.modalTitle="创建项目";else if("edit"==e)i.currentProjectCode=t.code,i.projectModal.modalStatus=!0;else if("del"==e)this.$confirm({title:"确定放入回收站？",content:"一旦将项目「".concat(this.currentProject.name,"」放入回收站，所有与项目有关的信息将会被放入回收站"),okText:"放入回收站",okType:"danger",cancelText:"再想想",onOk:function(){return Object(s["k"])(t.code).then((function(){i.dataSource.splice(o,1)})),Promise.resolve()}});else if("collect"==e){var n=t.collected?"cancel":"collect";Object(d["a"])(t.code,n).then((function(){i.$set(i.dataSource[o],"collected",!t.collected),"collect"==a.requestData.type&&i.dataSource.splice(o,1)}))}},updateProject:function(t){this.dataSource[this.currentProjectIndex]=JSON.parse(JSON.stringify(t))},handleSubmit:function(){var t=this;t.form.validateFields((function(e){e||t.handleOk()}))},handleOk:function(){var t=this;t.actionInfo.confirmLoading=!0;var e=t.form.getFieldsValue();t.newData.code?e.projectCode=t.newData.code:Object.assign(e,t.newData),Object(s["e"])(e).then((function(e){t.actionInfo.confirmLoading=!1,Object(c["a"])(e)&&(t.form.resetFields(),t.newData={id:0},t.actionInfo.modalStatus=!1,t.init())}))},handleSearchSubmit:function(){var t=this;t.searchForm.validateFields((function(e){e||t.search()}))},search:function(){var t=this.searchForm.getFieldsValue();Object.assign(this.requestData,t),this.init()}}},p=m,f=(o("a81a"),o("2877")),h=Object(f["a"])(p,a,i,!1,null,null,null);e["default"]=h.exports},"2e90":function(t,e,o){},"9c43":function(t,e,o){"use strict";var a=o("c0e6"),i=o.n(a);i.a},a12f:function(t,e,o){},a81a:function(t,e,o){"use strict";var a=o("a12f"),i=o.n(a);i.a},bd9d:function(t,e,o){"use strict";var a=o("2e90"),i=o.n(a);i.a},c0e6:function(t,e,o){},c199:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-recycle-index"},[a("wrapper-content",{attrs:{showHeader:!1}},[a("div",{staticStyle:{display:"flex","justify-content":"center"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!t.dataSource.length,expression:"!dataSource.length"}],staticStyle:{height:"250px"},attrs:{src:o("326f"),alt:""}})]),a("a-list",{staticClass:"project-list",attrs:{loading:t.loading,itemLayout:"horizontal",dataSource:t.dataSource,locale:{emptyText:""}},scopedSlots:t._u([{key:"renderItem",fn:function(e,o){return a("a-list-item",{},[a("span",{attrs:{slot:"actions"},slot:"actions"},[a("a-tooltip",{attrs:{title:"恢复项目"},on:{click:function(a){return t.doAction(e,"recovery",o)}}},[a("a-icon",{attrs:{type:"undo"}})],1)],1),a("a-list-item-meta",{attrs:{description:e.description}},[a("router-link",{attrs:{slot:"title",to:"/project/space/task/"+e.code},slot:"title"},[t._v(t._s(e.name))]),a("a-avatar",{attrs:{slot:"avatar",icon:"user",src:e.cover},slot:"avatar"})],1),a("div",{staticClass:"other-info muted"},[a("div",{staticClass:"info-item"},[a("span",[t._v("移动日期")]),a("span",[t._v(t._s(t.moment(e.deleted_time).format("YYYY-MM-DD")))])])])],1)}}])},[t.showLoadingMore?a("div",{style:{textAlign:"center",marginTop:"12px",height:"32px",lineHeight:"32px"},attrs:{slot:"loadMore"},slot:"loadMore"},[t.loadingMore?a("a-spin"):a("a-button",{on:{click:t.onLoadMore}},[t._v("查看更多项目")])],1):t._e()])],1)],1)},i=[],n=(o("7f7f"),o("24d2")),r=(o("2f14"),o("1b80")),s=o("6be7"),c={mixins:[r["a"]],data:function(){return{dataSource:[],loading:!0,showLoadingMore:!1,loadingMore:!1,showInviteMember:!1,currentProject:{},currentProjectId:0,newData:{id:0}}},created:function(){this.init()},methods:{moment:moment,init:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this;t&&(this.dataSource=[],this.pagination.page=1,this.pagination.pageSize=1e3,this.showLoadingMore=!1),this.requestData.recycle=1,this.requestData.type="other",e.loading=!0,Object(n["a"])(e.requestData).then((function(t){e.dataSource=e.dataSource.concat(t.data.list),e.pagination.total=t.data.total,e.showLoadingMore=e.pagination.total>e.dataSource.length,e.loading=!1,e.loadingMore=!1}))},onLoadMore:function(){this.loadingMore=!0,this.pagination.page++,this.init(!1)},inviteProjectMember:function(t){this.currentProject=t,this.currentProjectId=t.id,this.showInviteMember=!0},doAction:function(t,e,o){this.currentProject=t;var a=this;a.newData={id:0},"recovery"==e&&this.$confirm({title:"确定恢复项目？",content:"恢复「".concat(this.currentProject.name,"」后就可以正常使用了"),okText:"恢复项目",okType:"primary",cancelText:"再想想",onOk:function(){return Object(s["i"])(t.code).then((function(){a.dataSource.splice(o,1)})),Promise.resolve()}})}}},l=c,d=(o("bd9d"),o("2877")),u=Object(d["a"])(l,a,i,!1,null,null,null);e["default"]=u.exports},e289:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-list-index"},[o("wrapper-content",{attrs:{showHeader:!1}},[o("div",{staticClass:"action"},[o("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.doAction(null,"new")}}},[t._v("创建新项目")])],1),o("a-list",{staticClass:"project-list",attrs:{loading:t.loading,itemLayout:"horizontal",dataSource:t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(e,a){return o("a-list-item",{},[o("span",{attrs:{slot:"actions"},on:{click:function(o){return t.inviteProjectMember(e)}},slot:"actions"},[o("a-tooltip",{attrs:{title:"添加成员"}},[o("a-icon",{attrs:{type:"user-add"}})],1)],1),o("span",{attrs:{slot:"actions"},on:{click:function(o){return t.doAction(e,"del",a)}},slot:"actions"},[o("a-tooltip",{attrs:{title:"移至回收站"}},[o("a-icon",{attrs:{type:"delete"}})],1)],1),o("span",{attrs:{slot:"actions"},on:{click:function(o){return t.doAction(e,"edit",a)}},slot:"actions"},[o("a-tooltip",{attrs:{title:"项目设置"}},[o("a-icon",{attrs:{type:"setting"}})],1)],1),o("span",{attrs:{slot:"actions"},slot:"actions"},[o("a-tooltip",{attrs:{title:e.collected?"取消收藏":"加入收藏"},on:{click:function(o){return t.doAction(e,"collect",a)}}},[o("a-icon",{directives:[{name:"show",rawName:"v-show",value:!e.collected,expression:"!item.collected"}],attrs:{type:"star"}}),o("a-icon",{directives:[{name:"show",rawName:"v-show",value:e.collected,expression:"item.collected"}],staticStyle:{color:"#ffaf38"},attrs:{type:"star",theme:"filled"}})],1)],1),o("a-list-item-meta",{attrs:{description:e.description}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("router-link",{attrs:{to:"/project/space/task/"+e.code}},[t._v("\n              "+t._s(e.name)+"\n            ")]),o("a-tag",{directives:[{name:"show",rawName:"v-show",value:!e.private,expression:"!item.private"}],staticClass:"m-l",attrs:{color:"green"}},[t._v("公开")])],1),o("a-avatar",{attrs:{slot:"avatar",icon:"user",src:e.cover},slot:"avatar"})],1),o("div",{staticClass:"other-info muted"},[o("div",{staticClass:"info-item"},[o("span",[t._v("创建日期")]),o("span",[t._v(t._s(t.moment(e.create_time).format("YYYY-MM-DD")))])]),o("div",{staticClass:"info-item"},[o("span",[t._v("创建人")]),o("span",[t._v(t._s(e.owner_name))])]),o("div",{staticClass:"info-item schedule"},[o("span",[t._v("进度")]),o("a-progress",{attrs:{strokeWidth:5,percent:e.schedule}})],1)])],1)}}])},[t.showLoadingMore?o("div",{style:{textAlign:"center",marginTop:"12px",height:"32px",lineHeight:"32px"},attrs:{slot:"loadMore"},slot:"loadMore"},[t.loadingMore?o("a-spin"):o("a-button",{on:{click:t.onLoadMore}},[t._v("查看更多项目")])],1):t._e()])],1),o("a-modal",{attrs:{destroyOnClose:"",width:360,title:t.actionInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:t.actionInfo.modalStatus,callback:function(e){t.$set(t.actionInfo,"modalStatus",e)},expression:"actionInfo.modalStatus"}},[o("a-form",{attrs:{form:t.form},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[o("a-form-item",[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入项目名称"}]}],expression:"[\n            'name',\n            {rules: [{required: true, message: '请输入项目名称'}]},\n          ]"}],attrs:{placeholder:"项目名称（必填）"}})],1),o("a-form-item",[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateCode"],expression:"['templateCode']"}],attrs:{placeholder:"项目模板"}},[o("a-select-option",{key:0},[t._v("空白项目")]),t._l(t.templateList,(function(e){return o("a-select-option",{key:e.code},[t._v(t._s(e.name))])}))],2)],1),o("a-form-item",[o("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}],attrs:{placeholder:"项目简介",rows:2}})],1),o("a-form-item",[o("div",{staticClass:"action-btn"},[o("a-button",{staticClass:"middle-btn",attrs:{type:"primary",htmlType:"submit",block:"",size:"large",loading:t.actionInfo.confirmLoading}},[t._v("完成并创建")])],1)])],1)],1),o("a-modal",{staticClass:"project-config-modal",attrs:{destroyOnClose:"",width:800,title:t.projectModal.modalTitle,footer:null},model:{value:t.projectModal.modalStatus,callback:function(e){t.$set(t.projectModal,"modalStatus",e)},expression:"projectModal.modalStatus"}},[o("project-config",{attrs:{code:t.currentProjectCode},on:{update:t.updateProject}})],1),t.showInviteMember?o("invite-project-member",{attrs:{"project-code":t.currentProjectCode},model:{value:t.showInviteMember,callback:function(e){t.showInviteMember=e},expression:"showInviteMember"}}):t._e()],1)},i=[],n=(o("386d"),o("7f7f"),o("d3a1")),r=o("58bf"),s=o("6be7"),c=o("2f14"),l=o("1b80"),d=o("e55b"),u=o("9cdf"),m={components:{inviteProjectMember:n["default"],projectConfig:r["default"]},mixins:[l["a"]],data:function(){return{dataSource:[],loading:!0,showLoadingMore:!1,loadingMore:!1,showInviteMember:!1,currentProject:{},currentProjectCode:0,currentProjectIndex:0,newData:{code:""},form:this.$form.createForm(this),searchForm:{},actionInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"编辑项目"},projectModal:{modalStatus:!1,modalTitle:"项目设置"},templateList:[]}},watch:{$route:function(){this.init()}},created:function(){this.init(),this.projectTemplates()},methods:{moment:moment,init:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this;t&&(this.dataSource=[],this.pagination.page=1,this.pagination.pageSize=1e3,this.showLoadingMore=!1),this.requestData.type=this.$route.params.type,e.loading=!0,Object(s["f"])(e.requestData).then((function(t){e.dataSource=e.dataSource.concat(t.data.list),e.pagination.total=t.data.total,e.showLoadingMore=e.pagination.total>e.dataSource.length,e.loading=!1,e.loadingMore=!1}))},projectTemplates:function(){var t=this;Object(u["a"])({pageSize:100,viewType:-1}).then((function(e){t.templateList=e.data.list}))},onLoadMore:function(){this.loadingMore=!0,this.pagination.page++,this.init(!1)},inviteProjectMember:function(t){this.currentProject=t,this.currentProjectCode=t.code,this.showInviteMember=!0},doAction:function(t,e,o){var a=this;this.currentProject=t,this.currentProjectIndex=o;var i=this;if(i.newData={id:0},"new"==e)setTimeout((function(){i.form&&i.form.resetFields()}),0),i.actionInfo.modalStatus=!0,i.actionInfo.modalTitle="创建项目";else if("edit"==e)i.currentProjectCode=t.code,i.projectModal.modalStatus=!0;else if("del"==e)this.$confirm({title:"确定放入回收站？",content:"一旦将项目「".concat(this.currentProject.name,"」放入回收站，所有与项目有关的信息将会被放入回收站"),okText:"放入回收站",okType:"danger",cancelText:"再想想",onOk:function(){return Object(s["k"])(t.code).then((function(){i.dataSource.splice(o,1)})),Promise.resolve()}});else if("collect"==e){var n=t.collected?"cancel":"collect";Object(d["a"])(t.code,n).then((function(){i.$set(i.dataSource[o],"collected",!t.collected),"collect"==a.requestData.type&&i.dataSource.splice(o,1)}))}},updateProject:function(t){this.dataSource[this.currentProjectIndex]=JSON.parse(JSON.stringify(t))},handleSubmit:function(){var t=this;t.form.validateFields((function(e){e||t.handleOk()}))},handleOk:function(){var t=this;t.actionInfo.confirmLoading=!0;var e=t.form.getFieldsValue();t.newData.code?e.projectCode=t.newData.code:Object.assign(e,t.newData),Object(s["e"])(e).then((function(e){t.actionInfo.confirmLoading=!1,Object(c["a"])(e)&&(t.form.resetFields(),t.newData={id:0},t.actionInfo.modalStatus=!1,t.init())}))},handleSearchSubmit:function(){var t=this;t.searchForm.validateFields((function(e){e||t.search()}))},search:function(){var t=this.searchForm.getFieldsValue();Object.assign(this.requestData,t),this.init()}}},p=m,f=(o("9c43"),o("2877")),h=Object(f["a"])(p,a,i,!1,null,null,null);e["default"]=h.exports}}]);