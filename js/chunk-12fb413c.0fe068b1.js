(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12fb413c"],{"1b80":function(t,e,n){"use strict";e["a"]={data:function(){return{pagination:{page:1,pageSize:10,total:0,showTotal:function(t,e){return"共 ".concat(t," 条")}}}},computed:{requestData:function(){return{page:this.pagination.page,pageSize:this.pagination.pageSize}}},methods:{init:function(){},pageChange:function(t){this.pagination.page=t,this.requestData.page=t.current,this.init()}}}},"20d6":function(t,e,n){"use strict";var o=n("5ca1"),r=n("0a49")(6),a="findIndex",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),o(o.P+o.F*i,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},"24d2":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return i}));var o=n("22b6");function r(t){return o["a"].post("project/project",t)}function a(t){return o["a"].post("project/project/selfList",t)}function i(t){return o["a"].post("project/project/read",{projectCode:t})}},"3f5e":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return i}));var o=n("22b6");n("2f14");function r(t){return o["a"].post("project/file",t)}function a(t){return o["a"].post("project/file/edit",t)}function i(t){return o["a"].post("project/file/recycle",{fileCode:t})}},5560:function(t,e,n){"use strict";var o=n("fbd1"),r=n.n(o);r.a},"6be7":function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"k",(function(){return s})),n.d(e,"i",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"j",(function(){return p})),n.d(e,"h",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return h}));var o=n("22b6");function r(t){return o["a"].post("project/project",t)}function a(t){return o["a"].post("project/project/selfList",t)}function i(t){var e="project/project/save";return t.projectCode&&(e="project/project/edit"),o["a"].post(e,t)}function c(t){return o["a"].post("project/project/quit",{projectCode:t})}function s(t){return o["a"].post("project/project/recycle",{projectCode:t})}function l(t){return o["a"].post("project/project/recovery",{projectCode:t})}function u(t){return o["a"].post("project/project/archive",{projectCode:t})}function p(t){return o["a"].post("project/project/recoveryArchive",{projectCode:t})}function d(t){return o["a"].post("project/project/read",{projectCode:t})}function f(t){return o["a"].post("project/project/analysis",t)}function m(t){return o["a"].post("project/project/_projectStats",t)}function h(t){return o["a"].post("project/project/_getProjectReport",t)}},7934:function(t,e,n){"use strict";var o=n("d22a"),r=n.n(o);r.a},"81fe":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return i}));n("3b2b"),n("a481");var o=function(t,e){e||(e=moment());var n=moment(e).diff(moment(t),"hours");if(n<=1)return moment(t).fromNow();moment(e).get("date"),moment(t).get("date");var o=moment(t).format("H:mm"),r=moment(t).format("YYYY-MM-DD"),a=moment().weekday(0).format("YYYY-MM-DD"),i=moment().weekday(6).format("YYYY-MM-DD"),c="";return c=r<a?"[上周]dd "+o:r>i?"[下周]dd "+o:"[周]dd "+o,moment(t).calendar(null,{sameDay:"[今天 ]"+moment(t).format("H:mm"),nextDay:"[明天 ]"+o,nextWeek:c,lastDay:"[昨天 ]"+o,lastWeek:c,sameElse:"M月D日 H:mm"})},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=moment(t).format("H:mm");e||(n="");var o=moment(t).format("YYYY-MM-DD"),r=moment().weekday(0).format("YYYY-MM-DD"),a=moment().weekday(6).format("YYYY-MM-DD"),i="";return i=o<r?"[上周]dd "+n:o>a?"[下周]dd "+n:"[周]dd "+n,moment(t).calendar(null,{sameDay:"[今天 ]"+moment(t).format("H:mm"),nextDay:"[明天 ]"+n,nextWeek:i,lastDay:"[昨天 ]"+n,lastWeek:i,sameElse:"M月D日 H:mm"})},a=function(t,e){return!e&&t?r(t)+" 开始":t?r(t)+" - "+r(e):r(e)+" 截止"},i=function(t){var e="";void 0==t&&(t=new Date);var n=t.getHours();return n>=0&&n<=4&&(e="深夜了，注意身体，"),n>=4&&n<7&&(e="清晨好， "),n>=7&&n<12&&(e="早安，"),n>=12&&n<=13&&(e="午饭时间到了，"),n>=13&&n<=17&&(e="下午好，"),n>=17&&n<=18&&(e="进入傍晚了，"),n>=18&&n<=20&&(e="吃过晚饭了吗，"),n>=20&&n<=24&&(e="在加班吗？辛苦了，"),e}},d22a:function(t,e,n){},e55b:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("22b6");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"collect";return o["a"].post("project/project_collect/collect",{type:e,projectCode:t})}},e649:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-space-files",class:t.project.task_board_theme},[n("div",{staticClass:"project-navigation"},[n("div",{staticClass:"project-nav-header"},[n("a-breadcrumb",[n("a-breadcrumb-item",[n("router-link",{attrs:{to:"/home"}},[n("a-icon",{attrs:{type:"home"}}),t._v("首页 ")],1)],1),n("a-breadcrumb-item",[n("project-select",{staticClass:"nav-title",staticStyle:{display:"inline-block"},attrs:{code:t.code}}),n("span",{staticClass:"actions"},[n("a-tooltip",{attrs:{mouseEnterDelay:.3,title:t.project.collected?"取消收藏":"加入收藏"},on:{click:t.collectProject}},[n("a-icon",{directives:[{name:"show",rawName:"v-show",value:!t.project.collected,expression:"!project.collected"}],staticStyle:{color:"grey"},attrs:{type:"star",theme:"filled"}}),n("a-icon",{directives:[{name:"show",rawName:"v-show",value:t.project.collected,expression:"project.collected"}],staticStyle:{color:"#ffaf38"},attrs:{type:"star",theme:"filled"}})],1)],1),0===t.project.private?n("span",{staticClass:"label label-normal"},[n("a-icon",{attrs:{type:"global"}}),t._v("公开\n          ")],1):t._e()],1)],1)],1),n("section",{staticClass:"nav-body"},[n("ul",{staticClass:"nav-wrapper nav nav-underscore pull-left"},[n("li",[n("a",{staticClass:"app",attrs:{"data-app":"tasks"},on:{click:function(e){return t.$router.push("/project/space/task/"+t.code)}}},[t._v("任务")])]),n("li",{staticClass:"actives"},[n("a",{staticClass:"app",attrs:{"data-app":"works"},on:{click:function(e){return t.$router.push("/project/space/files/"+t.code)}}},[t._v("文件")])]),n("li",[n("a",{staticClass:"app",attrs:{"data-app":"build"},on:{click:function(e){return t.$router.push("/project/space/overview/"+t.code)}}},[t._v("概览")])]),n("li",{},[n("a",{staticClass:"app",attrs:{"data-app":"build"},on:{click:function(e){return t.$router.push("/project/space/features/"+t.code)}}},[t._v("版本")])])])])]),n("wrapper-content",{attrs:{showHeader:!1}},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-item log-list"},[n("div",{staticClass:"header"},[n("span",{staticClass:"title"},[t._v("我的文件")]),n("div",{staticClass:"header-actions"},[n("a-button",{attrs:{id:"upload-file",icon:"up-circle",type:"dashed"}},[t._v("上传")])],1)]),n("div",{staticClass:"list-content"},[n("a-list",{attrs:{loading:t.loading}},[n("a-list-item",{staticClass:"list-item-title"},[n("a-list-item-meta",[n("div",{staticClass:"muted",attrs:{slot:"title"},slot:"title"},[t._v("名称")])]),n("div",{staticClass:"other-info muted"},[n("div",{staticClass:"info-item"},[n("span",[t._v("大小")])]),n("div",{staticClass:"info-item"},[n("span",[t._v("创建日期")])]),n("div",{staticClass:"info-item"},[n("span",[t._v("创建人")])])]),t._l(3,(function(e){return n("span",{key:e,attrs:{slot:"actions"},slot:"actions"},[n("span",[t._v("位")])])}))],2),t._l(t.files,(function(e,o){return n("a-list-item",{key:o,staticClass:"list-item"},[n("a-list-item-meta",[n("a-avatar",{attrs:{slot:"avatar",shape:"square",icon:"link",src:e.file_url},slot:"avatar"}),n("div",{attrs:{slot:"title"},slot:"title"},[n("a-tooltip",{attrs:{mouseEnterDelay:.3}},[n("template",{slot:"title"},[n("span",[t._v(t._s(e.fullName))])]),n("a-input",{directives:[{name:"show",rawName:"v-show",value:e.editing,expression:"item.editing"}],ref:"inputTitle"+o,refInFor:!0,attrs:{"auto-focus":!0},on:{pressEnter:function(n){return t.onCellChange(e)},blur:function(n){return t.onCellChange(e)}},model:{value:e.title,callback:function(n){t.$set(e,"title",n)},expression:"item.title"}}),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.editing,expression:"!item.editing"}],staticClass:"text-default",attrs:{target:"_blank",href:t._f("showPreviewUrl")(e)}},[t._v(t._s(e.fullName))])],2)],1)],1),n("div",{staticClass:"other-info muted"},[n("div",{staticClass:"info-item"},[n("span",[t._v(t._s(t.formatSize(e.size)))])]),n("div",{staticClass:"info-item"},[n("a-tooltip",{attrs:{title:e.create_time}},[n("span",[t._v(t._s(t.formatTime(e.create_time)))])])],1),n("div",{staticClass:"info-item"},[n("span",[t._v(t._s(e.creatorName))])])]),n("span",{attrs:{slot:"actions"},slot:"actions"},[n("a-tooltip",{attrs:{title:"下载"}},[n("a",{staticClass:"muted",attrs:{target:"_blank",href:e.file_url}},[n("a-icon",{attrs:{type:"download"}})],1)])],1),n("span",{attrs:{slot:"actions"},on:{click:function(n){return t.editFile(e,o)}},slot:"actions"},[n("a-tooltip",{attrs:{title:"编辑"}},[n("a-icon",{attrs:{type:"edit"}})],1)],1),n("a",{staticClass:"muted",attrs:{slot:"actions"},slot:"actions"},[n("a-dropdown",{attrs:{trigger:["click"],placement:"bottomCenter"}},[n("a-tooltip",{attrs:{mouseEnterDelay:.5}},[n("template",{slot:"title"},[n("span",[t._v("更多操作")])]),n("a",{staticClass:"action-item muted"},[n("a-icon",{attrs:{type:"down"}})],1)],2),n("a-menu",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.file_url,expression:"item.file_url"}],staticClass:"field-right-menu",attrs:{slot:"overlay"},on:{click:function(n){return t.doFile(n,e.code)}},slot:"overlay"},[n("a-menu-item",{key:"copy"},[n("a-icon",{attrs:{type:"link"}}),n("span",[t._v("复制链接")])],1),n("a-menu-item",{key:"delete"},[n("a-icon",{attrs:{type:"delete"}}),n("span",[t._v("移到回收站")])],1)],1)],1)],1)],1)})),t.showLoadingMore?n("div",{style:{textAlign:"center",marginTop:"12px",height:"32px",lineHeight:"32px"},attrs:{slot:"loadMore"},slot:"loadMore"},[t.loadingMore?n("a-spin"):n("a-button",{on:{click:t.onLoadMore}},[t._v("查看更多文件")])],1):t._e()],2)],1)])])])],1)},r=[],a=(n("8e6e"),n("456d"),n("ac6a"),n("7f7f"),n("20d6"),n("bd86")),i=n("5880"),c=n("6be7"),s=n("e55b"),l=n("2f14"),u=n("81fe"),p=n("3f5e"),d=n("1b80"),f=n("97a8"),m=n("f8c7");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j={name:"project-space-files",mixins:[d["a"]],data:function(){return{code:this.$route.params.code,loading:!0,showLoadingMore:!1,loadingMore:!1,project:{task_board_theme:"simple"},currentFileIndex:{},files:[]}},components:{projectSelect:m["default"]},computed:v({},Object(i["mapState"])({uploader:function(t){return t.common.uploader}})),watch:{uploader:{handler:function(t,e){var n=this,o=t.fileList,r=o.findIndex((function(t){return t.projectName==n.project.name}));-1!==r&&this.getFiles()},deep:!0}},created:function(){this.getProject(),this.getFiles()},mounted:function(){var t=this;setTimeout((function(){t.uploader.assignBrowse(document.getElementById("upload-file"))}),500)},methods:{getProject:function(){var t=this;this.loading=!0,Object(c["h"])(this.code).then((function(e){t.loading=!1,t.project=e.data,t.$store.dispatch("setTempData",{projectCode:t.project.code})}))},getFiles:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this;e&&(this.pagination.page=1,this.pagination.pageSize=50,this.showLoadingMore=!1),n.requestData.projectCode=this.code,n.requestData.deleted=0,Object(p["b"])(n.requestData).then((function(o){e&&(t.files=[]),o.data.list.forEach((function(t){t.editing=!1})),n.files=n.files.concat(o.data.list),n.pagination.total=o.data.total,n.showLoadingMore=n.pagination.total>n.files.length,n.loading=!1,n.loadingMore=!1}))},onLoadMore:function(){this.loadingMore=!0,this.pagination.page++,this.getFiles(!1)},collectProject:function(){var t=this,e=this.project.collected?"cancel":"collect";Object(s["a"])(this.project.code,e).then((function(e){Object(l["a"])(e)&&(t.project.collected=!t.project.collected)}))},editFile:function(t,e){var n=this;this.files.forEach((function(t){t.editing=!1})),this.files[e].editing=!0,this.$nextTick((function(){n.$refs["inputTitle".concat(e)][0].focus()})),this.currentFileIndex=e},onCellChange:function(t){var e=this.files[this.currentFileIndex];this.files.forEach((function(t){t.editing=!1}));var n="".concat(t.title,".").concat(t.extension);n!=e.fullName&&Object(p["a"])({title:e.title,fileCode:e.code}).then((function(o){var r=Object(l["a"])(o);if(!r)return!1;e.title=t.title,e.fullName=n,Object(f["b"])({title:"重命名成功"},"notice","success")}))},doFile:function(t,e){var n=this,o=t.key;switch(o){case"delete":this.$confirm({title:"移到回收站",content:"您确定要把该文件移到回收站吗？",okText:"移到回收站",okType:"danger",cancelText:"再想想",onOk:function(){return Object(p["c"])(e).then((function(t){var e=Object(l["a"])(t);if(!e)return!1;n.getFiles()})),Object(f["b"])({title:"成功移到回收站",msg:"可在 菜单－查看回收站－文件 中查看"},"notice","success",5),Promise.resolve()}});break;case"copy":return Object(f["b"])({title:"复制链接成功",msg:"在地址栏粘贴并打开可下载该资源"},"notice","success",5),!0}},formatTime:function(t){return Object(u["c"])(t)},formatSize:function(t){var e="KB";return t/=1024,t>=1024&&(t/=1024,e="MB"),"".concat(t.toFixed(2)," ").concat(e)}}},g=j,b=(n("5560"),n("2877")),y=Object(b["a"])(g,o,r,!1,null,null,null);e["default"]=y.exports},f8c7:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentProject?n("div",{attrs:{id:"project-select"}},[n("a-dropdown",{staticClass:"action-item",attrs:{trigger:["click"],placement:"bottomCenter"},model:{value:t.visibleMenu,callback:function(e){t.visibleMenu=e},expression:"visibleMenu"}},[n("a-tooltip",{attrs:{mouseEnterDelay:.3,title:t.currentProject.name}},[n("a",{staticClass:"project-select",staticStyle:{color:"#333"},on:{click:function(e){t.visibleMenu=!0}}},[n("span",[t._v(t._s(t.currentProject.name))]),n("span",{staticClass:"m-l-xs"},[n("a-icon",{attrs:{type:"down"}})],1)])]),n("div",{staticClass:"middle-menu member-menu project-select-menu",attrs:{slot:"overlay"},slot:"overlay"},[n("div",{staticClass:"search-content"},[n("a-input",{attrs:{size:"large",placeholder:"搜索"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[n("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1)],1),n("div",{staticClass:"member-list"},[n("vue-scroll",[n("div",{staticClass:"list-group"},[n("a-list",{staticClass:"list-content",attrs:{itemLayout:"horizontal",dataSource:t.projectList,locale:{emptyText:t.keyword&&t.keyword.length>1?"没有找到该项目":""}},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{staticClass:"member-list-item",nativeOn:{click:function(n){return t.changeProject(e.code)}}},[n("span",{attrs:{slot:"actions"},slot:"actions"},[n("a-icon",{directives:[{name:"show",rawName:"v-show",value:t.showCheck(e.code),expression:"showCheck(item.code)"}],attrs:{type:"check"}})],1),n("a-list-item-meta",[n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))]),n("a-avatar",{attrs:{slot:"avatar",icon:"user",src:e.cover},slot:"avatar"})],1)],1)}}],null,!1,3141279394)})],1)])],1)])],1)],1):t._e()},r=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("386d"),n("bd86")),i=n("2ef0"),c=n.n(i),s=n("5880"),l=n("24d2"),u=n("1b80");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"ProjectSelect",props:{code:{type:[String],default:function(){return""}}},data:function(){return{visibleMenu:!1,keyword:"",loading:!1,currentProject:null,projectList:[],projectListCopy:[],projectTotal:0}},mixins:[u["a"]],computed:d({},Object(s["mapState"])({currentOrganization:function(t){return t.currentOrganization},organizationList:function(t){return t.organizationList}})),watch:{code:function(){this.init()},keyword:function(){this.search()}},created:function(){this.init()},methods:{init:function(){this.getProject(),this.getProjectList(!0)},getProject:function(){var t=this;Object(l["b"])(this.code).then((function(e){t.currentProject=e.data}))},getProjectList:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading=e,this.requestData.pageSize=50,this.requestData.archive=-1,Object(l["c"])(this.requestData).then((function(e){t.projectList=e.data.list,t.projectListCopy=e.data.list,t.projectTotal=e.data.total,t.loading=!1}))},changeProject:function(t){this.visibleMenu=!1,this.$router.push("/project/space/task/"+t)},showCheck:function(t){if(t==this.code)return!0},search:c.a.debounce((function(){var t=this;if(this.keyword=this.keyword.trim(),this.keyword||(this.projectList=JSON.parse(JSON.stringify(this.projectListCopy))),this.keyword.length<=1)return!1;this.projectList=this.projectList.filter((function(e){return-1!=e.name.indexOf(t.keyword)}))}),500),getPopup:function(){return document.getElementById("project-select")}}},m=f,h=(n("7934"),n("2877")),v=Object(h["a"])(m,o,r,!1,null,null,null);e["default"]=v.exports},fbd1:function(t,e,n){}}]);