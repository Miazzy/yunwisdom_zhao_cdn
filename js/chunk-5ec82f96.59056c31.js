(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ec82f96"],{"0600":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userInfo?n("div",[n("a-dropdown",{staticClass:"action-item",attrs:{placement:"bottomRight"}},[n("div",{staticClass:"user-info"},[n("a-avatar",{attrs:{src:t.userInfo.avatar,alt:""}},[t._v(t._s(t.userInfo.name))]),n("span",[t._v(t._s(t.userInfo.name))])],1),n("a-menu",{staticClass:"middle-menu",attrs:{slot:"overlay",selectable:!1},on:{click:t.userAction},slot:"overlay"},[n("a-menu-item",{key:"setting"},[n("a",{attrs:{href:"javascript:;"}},[n("a-icon",{attrs:{type:"user"}}),t._v("个人设置\n        ")],1)]),n("a-menu-item",{key:"theme"},[n("a",{attrs:{href:"javascript:;"}},[n("a-icon",{attrs:{type:"swap"}}),t._v("切换主题\n        ")],1)]),n("a-menu-divider"),n("a-menu-item",{key:"logout"},[n("a",{attrs:{href:"javascript:;"}},[n("a-icon",{attrs:{type:"logout"}}),t._v("退出登录\n        ")],1)])],1)],1)],1):t._e()},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("0672");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"HeaderAvatar",data:function(){return{}},computed:c({},Vuex.mapState({userInfo:function(t){return t.userInfo},theme:function(t){return t.theme}})),methods:{userAction:function(t){var e=this;if("logout"==t.key)Object(s["g"])(),e.$store.dispatch("SET_LOGOUT");else if("setting"==t.key)e.$router.push("/account/setting/base");else if("theme"==t.key){var n="dark";this.theme==n&&(n="light"),this.$store.dispatch("SET_THEME",n)}else console.log("other operate")}}},l=u,f=(n("8d0e"),n("2877")),d=Object(f["a"])(l,o,i,!1,null,null,null);e["default"]=d.exports},"0610":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c}));var o=n("22b6"),i=n("2f14");function r(t){return o["a"].post("project/file",t)}function s(){return Object(i["c"])("project/file/uploadFiles")}function a(t){return o["a"].post("project/file/recovery",{fileCode:t})}function c(t){return o["a"].post("project/file/delete",{fileCode:t})}},"096e":function(t,e,n){},"10bd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentOrganization?n("div",[n("a-dropdown",{staticClass:"action-item",attrs:{placement:"bottomCenter"}},[n("div",{staticClass:"organization-select"},[n("span",[t._v(t._s(t.currentOrganization.name))]),n("a-icon",{style:{fontSize:"14px",marginLeft:"2px"},attrs:{type:"down"}})],1),n("a-menu",{staticClass:"middle-menu organization-menu",attrs:{slot:"overlay",selectable:!1},on:{click:t.organizationAction},slot:"overlay"},t._l(t.organizationList,(function(e,o){return n("a-menu-item",{key:o},[n("div",{staticClass:"muted flex ant-row-flex-middle"},[n("span",{staticClass:"text-default",attrs:{href:"javascript:;"}},[t._v(t._s(e.name))]),n("a-icon",{directives:[{name:"show",rawName:"v-show",value:t.currentOrganization.code==e.code,expression:"currentOrganization.code == organization.code"}],staticClass:"muted m-l-lg",attrs:{type:"check"}})],1)])})),1)],1)],1):t._e()},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("bd86")),s=n("c24f"),a=n("2f14");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"HeaderSelect",data:function(){return{}},computed:u({},Vuex.mapState({currentOrganization:function(t){return t.currentOrganization},organizationList:function(t){return t.organizationList}})),methods:{organizationAction:function(t){var e=this;Object(s["d"])(e.organizationList[t.key]).then((function(n){Object(a["a"])(n)&&e.$router.replace("/home/"+e.organizationList[t.key].code),console.log(n)}))}}},f=l,d=n("2877"),p=Object(d["a"])(f,o,i,!1,null,null,null);e["default"]=p.exports},"14f0":function(t,e,n){"use strict";var o=n("e895"),i=n.n(o);i.a},5744:function(t,e,n){t.exports=n.p+"assets/bell.356efdc3.svg"},"64de":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return u}));var o=n("22b6");function i(t){return o["a"].post("project/notify/_clearAll",t)}function r(t){return o["a"].post("project/notify",t)}function s(){return o["a"].post("project/notify/noReads")}function a(t){return o["a"].post("project/notify/delete",{id:t})}function c(t){return o["a"].post("project/notify/batchDel",{ids:t})}function u(t){return o["a"].post("project/notify/setReadied",{ids:t})}},"7e25":function(t,e,n){t.exports=n.p+"assets/laba.9a723c40.svg"},8215:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-uploader",class:{"hidden-files":!t.showFiles,"hidden-uploader":!t.showUploader}},[n("a-card",{attrs:{title:t.uploaderTitle}},[n("div",{staticClass:"actions",attrs:{slot:"extra"},slot:"extra"},[n("a",{staticClass:"muted action-item",on:{click:function(e){t.showFiles=!t.showFiles}}},[n("a-icon",{directives:[{name:"show",rawName:"v-show",value:t.showFiles,expression:"showFiles"}],attrs:{type:"shrink"}}),n("a-icon",{directives:[{name:"show",rawName:"v-show",value:!t.showFiles,expression:"!showFiles"}],attrs:{type:"arrows-alt"}})],1),n("a",{staticClass:"muted action-item",on:{click:t.closeUploader}},[n("a-icon",{attrs:{type:"close"}})],1)]),n("uploader",{ref:"uploader",staticClass:"uploader-workplace",attrs:{options:t.options,autoStart:t.autoStart},on:{"files-submitted":t.filesSubmitted,"file-progress":t.fileProgress,"file-success":t.fileSuccess,"file-error":t.fileError,"file-complete":t.fileComplete,complete:t.complete}},[n("vue-scroll",[n("uploader-list",{scopedSlots:t._u([{key:"default",fn:function(e){return[n("ul",{staticClass:"uploader-wrapper"},t._l(e.fileList,(function(e){return n("uploader-file",{key:e.id,attrs:{file:e,list:!0},scopedSlots:t._u([{key:"default",fn:function(e){return[n("li",{staticClass:"uploader-item"},[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-info"},[n("div",{staticClass:"file-item"},[n("div",{staticClass:"file-icon"},[n("a-avatar",{attrs:{icon:"link",shape:"square",src:e.file.fileUrl}})],1),n("div",{staticClass:"file-info"},[n("div",{staticClass:"file-content"},[n("div",{staticClass:"file-title"},[n("a-tooltip",{attrs:{placement:"top",mouseEnterDelay:.3,title:e.file.name}},[t._v(t._s(e.file.name))])],1),n("div",{staticClass:"file-extra"},[n("span",[t._v(t._s(e.file.projectName?e.file.projectName:t.tempData.projectName))]),"success"==e.status?n("span",[t._v("("+t._s(e.formatedSize)+")")]):n("span",[t._v("("+t._s((Number(e.uploadedSize)/1024e3).toFixed(2))+"MB/"+t._s(e.formatedSize)+")")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"success"!=e.status,expression:"file.status != 'success'"}],staticClass:"uploader-progress"},[n("a-progress",{attrs:{strokeWidth:2,showInfo:!1,percent:100*e.progress}})],1)])])]),n("div",{staticClass:"item-status"},[n("a",{staticClass:"muted",on:{click:function(n){return t.cancelUpload(e)}}},[n("a-icon",{directives:[{name:"show",rawName:"v-show",value:"success"!=e.status,expression:"file.status != 'success'"}],attrs:{type:"close"}})],1),n("a-icon",{directives:[{name:"show",rawName:"v-show",value:"success"==e.status,expression:"file.status == 'success'"}],staticClass:"text-success",attrs:{type:"check"}})],1)])])]}}],null,!0)})})),1)]}}])})],1)],1)],1)],1)},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("2f14"),a=n("68fe"),c=n("97a8"),u=n("0610");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"VUploader",props:{code:{type:[String],default:function(){return""}}},data:function(){return{loading:!1,showFiles:!1,showUploader:!1,progressTotal:0,completeTotal:0,options:{target:u["d"],testChunks:!1,query:function(){return Object(a["a"])("tempData",!0)},headers:function(){var t=Object(a["a"])("currentOrganization",!0),e=Object(s["d"])();return e.organizationcode=t.code,e}},attrs:{accept:"image/*"},autoStart:!0}},computed:f({},Vuex.mapState({uploader:function(t){return t.common.uploader},tempData:function(t){return t.common.tempData}}),{uploaderTitle:function(){if(!this.progressTotal)return"上传完成";var t=this.completeTotal+1;return t>this.progressTotal&&(t=this.progressTotal),"正在上传 ".concat(t,"/").concat(this.progressTotal)}}),watch:{code:function(){this.init()}},created:function(){this.init()},mounted:function(){var t=this;this.$nextTick((function(){window.uploader=t.$refs.uploader.uploader,t.$store.dispatch("setUploader",window.uploader),console.log(window.uploader)}))},methods:{init:function(){},closeUploader:function(){this.showUploader=!1,this.uploader.cancel()},filesSubmitted:function(t){this.showUploader=!0,this.showFiles=!0,this.progressTotal+=t.length,console.log("file submitted",t)},fileProgress:function(t,e,n){this.showUploader=!0,this.showFiles=!0,console.log("file progress",arguments)},fileSuccess:function(t,e,n,o){var i=JSON.parse(n);if(!Object(s["a"])(i))return Object(c["b"])({title:i.msg},"notice","error"),!1;t.projectName=i.data.projectName,t.fileUrl=i.data.url,console.log("file success",t),this.completeTotal++},fileError:function(t,e,n,o){this.completeTotal--;var i=JSON.parse(n);e.cancel(),t.projectName=i.data.projectName,console.log("file error",t),Object(c["b"])({title:i.msg},"notice","error")},fileComplete:function(t){console.log("file complete",t)},complete:function(){var t=this;console.log("complete",arguments),this.progressTotal=this.completeTotal=0,Object(c["b"])({title:"关联文件成功"},"notice","success"),setTimeout((function(){t.showFiles=!1}),3e3)},cancelUpload:function(t){console.log(t),this.progressTotal--,this.completeTotal--,t.file.cancel()},filterList:function(t){return t},testSomeThing:function(){console.log(this.uploader.fileList),this.uploader.fileList[0].resume()}}},p=d,h=(n("f7fb"),n("2877")),m=Object(h["a"])(p,o,i,!1,null,null,null);e["default"]=m.exports},"8d0e":function(t,e,n){"use strict";var o=n("b389"),i=n.n(o);i.a},9527:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"index"},[o("a-spin",{attrs:{spinning:t.windowLoading}},[o("a-layout",{class:t.layoutClass,attrs:{id:"layout"}},[o("a-layout-header",{class:{collapsed:t.collapsed}},[o("div",{staticClass:"logo",on:{click:t.toHome}},[o("img",{staticClass:"logo-img",attrs:{src:n("bae8"),alt:""}}),t.system?o("span",{staticClass:"title"},[t._v("\n            "+t._s(t.system.app_name)+"\n            "),o("span",{staticClass:"version"},[t._v(t._s(t.system.app_version))])]):t._e()]),o("a-menu",{style:{lineHeight:"63px",paddingLeft:"15px"},attrs:{mode:"horizontal"},on:{click:t.menuModelClick,openChange:t.onModelOpenChange},model:{value:t.selectedModelKeys,callback:function(e){t.selectedModelKeys=e},expression:"selectedModelKeys"}},t._l(t.menu,(function(e,n){return o("a-menu-item",{key:e.id.toString(),attrs:{disabled:!e.status}},[e.icon?o("a-icon",{attrs:{type:e.icon}}):t._e(),o("span",[t._v(t._s(e.title))])],1)})),1),o("div",{staticClass:"right-menu"},[t.config.WS_URI?o("div",{staticClass:"m-r-lg"},[o("a-badge",{attrs:{title:"当前在线",count:t.online,showZero:"",numberStyle:{backgroundColor:"#52c41a"},offset:[10,0]}},[o("a-icon",{attrs:{type:"team"}})],1)],1):t._e(),t.organizationList.length>1?o("div",{staticClass:"action action-organization"},[o("header-select")],1):t._e(),o("div",{staticClass:"action"},[o("header-notice")],1),o("div",{staticClass:"action action-avatar"},[o("header-avatar")],1)])],1),o("a-layout",{staticStyle:{"padding-top":"65px"}},[o("a-sider",{attrs:{mode:"inline",breakpoint:"md",collapsible:""},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},t._l(t.menus,(function(e){return o("a-menu",{key:e.id.toString(),attrs:{theme:t.theme,openKeys:t.openKeys,mode:"inline"},on:{click:function(n){return t.menuClick(n,e)},openChange:t.onOpenChange},model:{value:t.selectedKeys,callback:function(e){t.selectedKeys=e},expression:"selectedKeys"}},[e.children||e.is_inner||"#"==e.node?t._e():o("a-menu-item",{key:e.id,attrs:{disabled:!e.status}},[o("a-icon",{attrs:{type:e.icon}}),o("span",[t._v(t._s(e.title))])],1),e.children&&!e.is_inner?o("a-sub-menu",{key:e.id.toString()},[o("span",{attrs:{slot:"title"},slot:"title"},[o("a-icon",{attrs:{type:e.icon}}),o("span",[t._v(t._s(e.title))])],1),t._l(e.children,(function(e,n){return e.is_inner?t._e():o("a-menu-item",{key:e.id.toString(),attrs:{disabled:!e.status}},[t._v(t._s(e.title))])}))],2):t._e()],1)})),1),o("a-layout",{staticClass:"main-content",style:t.collapsed?{paddingLeft:"80px"}:{paddingLeft:"256px"}},[o("a-layout-content",[o("transition",{attrs:{name:"router-fade",mode:"out-in"}},[o("a-spin",{attrs:{spinning:t.pageLoading}},[o("router-view")],1)],1)],1)],1)],1)],1),t.config.WS_URI?o("Socket",{ref:"socket"}):t._e()],1),o("v-uploader")],1)},i=[],r=(n("8e6e"),n("456d"),n("7514"),n("6b54"),n("ac6a"),n("7f7f"),n("bd86")),s=n("6042"),a=n.n(s),c=n("9b57"),u=n.n(c),l=n("41b2"),f=n.n(l),d=n("4d91"),p=n("4d26"),h=n.n(p),m=n("daa3"),g=n("4df5"),b={prefixCls:d["a"].string,hasSider:d["a"].boolean};function v(t,e){return function(n){return{name:e,props:n.props,inject:{configProvider:{default:function(){return g["a"]}}},render:function(){var e=arguments[0],o=t.suffixCls,i=this.$props.prefixCls,r=this.configProvider.getPrefixCls,s=r(o,i),a={props:f()({prefixCls:s},Object(m["i"])(this)),on:this.$listeners};return e(n,a,[this.$slots["default"]])}}}}var y={props:b,render:function(){var t=arguments[0],e=this.prefixCls,n=this.$slots,o=this.$listeners,i={class:e,on:o};return t("div",i,[n["default"]])}},k={props:b,data:function(){return{siders:[]}},provide:function(){var t=this;return{siderHook:{addSider:function(e){t.siders=[].concat(u()(t.siders),[e])},removeSider:function(e){t.siders=t.siders.filter((function(t){return t!==e}))}}}},render:function(){var t=arguments[0],e=this.prefixCls,n=this.$slots,o=this.hasSider,i=this.$listeners,r=h()(e,a()({},e+"-has-sider",o||this.siders.length>0)),s={class:r,on:i};return t("div",s,[n["default"]])}},O=v({suffixCls:"layout"},"ALayout")(k),w=v({suffixCls:"layout-header"},"ALayoutHeader")(y),j=v({suffixCls:"layout-footer"},"ALayoutFooter")(y),C=v({suffixCls:"layout-content"},"ALayoutContent")(y);O.Header=w,O.Footer=j,O.Content=C;var _=O,S=n("1fca"),T=n("db14");_.Sider=S["a"],_.install=function(t){t.use(T["a"]),t.component(_.name,_),t.component(_.Header.name,_.Header),t.component(_.Footer.name,_.Footer),t.component(_.Sider.name,_.Sider),t.component(_.Content.name,_.Content)};var x=_,P=n("e84e"),N=n("0600"),L=n("10bd"),$=n("8215"),E=n("cef1"),z=n("a078"),D=n("97a8"),I=n("22b6"),K=n("4360");function U(t){return I["a"].post("project/organization/_getOrgList",t).then((function(t){return t.data&&K["a"].dispatch("SET_ORGANIZATION_LIST",t.data),Promise.resolve(t)}))}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var F=x.Sider,H=x.Footer,R={name:"Index",components:{HeaderNotice:P["default"],HeaderAvatar:N["default"],HeaderSelect:L["default"],ALayout:x,ASider:F,AFooter:H,Socket:E["default"],VUploader:$["default"]},data:function(){return{menus:[],collapsed:!1,inline:1,openKeys:[],openKeysTemp:[],selectedKeys:[],selectedModelKeys:[],breadCrumbInfo:[],config:z["a"],online:0}},computed:M({},Vuex.mapState({theme:function(t){return t.theme},logged:function(t){return t.logged},menu:function(t){return t.menu.menu},system:function(t){return t.system},pageLoading:function(t){return t.pageLoading},windowLoading:function(t){return t.windowLoading},organizationList:function(t){return t.organizationList},socketAction:function(t){return t.socketAction}}),{layoutClass:function(){var t="layout-"+this.theme;return this.$route.meta.info.show_slider||(t+=" hide"),t}}),created:function(){this.checkLayout(),this.$route.query.logged&&this.$store.dispatch("checkLogin"),this.$route.query.message&&Object(D["b"])({title:this.$route.query.message},"notice"),this.logged&&U()},watch:{$route:function(t,e){this.checkLayout()},collapsed:function(t){t?(this.openKeysTemp=JSON.parse(JSON.stringify(this.openKeys)),this.openKeys=[]):this.openKeys=JSON.parse(JSON.stringify(this.openKeysTemp))},logged:function(t){t||this.$router.push({name:"login"})},socketAction:function(t){"connect"!==t.action&&"onClose"!==t.action||(this.online=t.data.online)}},methods:{footerClick:function(){autoPlay("order");this.$refs.socket;this.$websocket.send(JSON.stringify({uid:this.$store.state.userInfo.id}))},checkLayout:function(){var t=this,e=(this.$route.name,this.$route.path),n=this.$route.meta,o=this.$route.meta.info;t.breadCrumbInfo=[],t.breadCrumbInfo.push({title:o.title,path:"/"+o.fullUrl}),o.is_inner||(t.openKeys=[],t.selectedKeys=[]);var i=null;function r(t,e){t.forEach((function(t){t.id==e&&(i=t),t.children&&r(t.children,e)}))}if(n.model){if(r(t.menu,n.model),!i)return!1;t.breadCrumbInfo.push({title:i.title,path:"/"+i.fullUrl}),i.pid&&r(t.menu,i.pid)}else r(t.menu,n.info.id);return t.breadCrumbInfo.push({title:i.title,path:"/"+i.fullUrl}),this.selectedModelKeys=[i.id.toString()],i.children?(t.menus=i.children,!o.is_inner&&(t.menus.forEach((function(n){n.pid==t.selectedModelKeys&&(n.children?n.children.forEach((function(n){"/"+n.fullUrl==e&&(t.selectedKeys.push(n.id.toString()),t.collapsed?t.openKeysTemp=[n.pid.toString()]:t.openKeys.push(n.pid.toString()))})):t.selectedKeys.push(n.id.toString()))})),void t.$store.dispatch("setBreadCrumbInfo",t.breadCrumbInfo))):(t.menus=[],!1)},menuClick:function(t,e){var n=this,o=[];o=this.openKeys.length?JSON.parse(JSON.stringify(n.openKeys)):[e.id.toString()],n.menus.forEach((function(e){if(e.id==o){var i="/";e.children?e.children.forEach((function(e){e.id==t.key&&(i+=e.fullUrl)})):i+=e.fullUrl,n.$router.push(i)}}))},menuModelClick:function(t){var e=this;e.menu.forEach((function(n,o){if(n.id==t.key){e.menus=n.children;var i="/";if(n.children?n.children[0].children?i+=n.children[0].children[0].fullUrl:i+=n.children[0].fullUrl:i+=n.fullUrl,"/home"==i)return e.toHome(),!1;"/#"!=i&&e.$router.push(i)}}))},onModelOpenChange:function(t){},onOpenChange:function(t){var e=this,n=this,o=t.find((function(t){return-1===e.openKeys.indexOf(t)})),i=!1;this.menus.forEach((function(t,e){t.id==o&&(n.openKeys=o?[o]:[],i=!0)})),i||(n.openKeys=t)}}},W=R,J=n("2877"),B=Object(J["a"])(W,o,i,!1,null,null,null);e["default"]=B.exports},b389:function(t,e,n){},bae8:function(t,e,n){t.exports=n.p+"img/logo.b83ac094.png"},c24f:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"j",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"i",(function(){return p})),n.d(e,"g",(function(){return h})),n.d(e,"k",(function(){return m})),n.d(e,"f",(function(){return g})),n.d(e,"c",(function(){return b})),n.d(e,"e",(function(){return v})),n.d(e,"b",(function(){return y}));n("96cf"),n("ac6a");var o=n("3b8d"),i=n("22b6"),r=n("a18c"),s=n("4360"),a=n("2f14");function c(t){return u.apply(this,arguments)}function u(){return u=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",i["a"].post("project/login",e));case 1:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(t){return i["a"].post("project/login/register",t)}function f(t){return i["a"].post("project/login/getCaptcha",{mobile:t})}function d(t){var e=t.code;return s["a"].dispatch("SET_CURRENT_ORGANIZATION",t),i["a"].post("project/index/changeCurrentOrganization",{organizationCode:e}).then((function(t){if(Object(a["a"])(t))return s["a"].dispatch("SET_MENU",t.data.menuList),s["a"].dispatch("SET_USER",t.data.member),s["a"].dispatch("WINDOW_LOADING",!0),setTimeout((function(){var e=t.data.menuList;if(e){var n=r["a"].options.routes;e.forEach((function(t){n[0].children.push(Object(a["b"])(t)),t.children&&t.children.forEach((function(t){n[0].children.push(Object(a["b"])(t)),t.children&&t.children.forEach((function(t){n[0].children.push(Object(a["b"])(t))}))}))})),r["a"].addRoutes(n),s["a"].dispatch("WINDOW_LOADING",!1)}}),500),Promise.resolve(t)}))}function p(t){return i["a"].post("project/account",t)}function h(t){return i["a"].post("project/account/forbid",{accountCode:t,status:0})}function m(t){return i["a"].post("project/account/resume",{accountCode:t,status:1})}function g(t){var e="project/account/add";return t.code&&(e="project/account/edit"),i["a"].post(e,t)}function b(t,e){return i["a"].post("project/account/auth",{id:t,auth:e})}function v(t){return i["a"].post("project/account/del",{accountCode:t})}function y(t){return i["a"].post("project/login/_checkBindMail",t)}},ca8d:function(t,e,n){"use strict";n.d(e,"j",(function(){return i})),n.d(e,"h",(function(){return r})),n.d(e,"o",(function(){return s})),n.d(e,"t",(function(){return a})),n.d(e,"r",(function(){return c})),n.d(e,"m",(function(){return u})),n.d(e,"u",(function(){return l})),n.d(e,"q",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return p})),n.d(e,"s",(function(){return h})),n.d(e,"p",(function(){return m})),n.d(e,"l",(function(){return g})),n.d(e,"k",(function(){return b})),n.d(e,"e",(function(){return v})),n.d(e,"d",(function(){return y})),n.d(e,"i",(function(){return k})),n.d(e,"a",(function(){return O})),n.d(e,"n",(function(){return w})),n.d(e,"g",(function(){return j})),n.d(e,"f",(function(){return C}));var o=n("22b6");function i(t){return o["a"].post("project/task",t)}function r(t){return o["a"].post("project/task/getListByTaskTag",t)}function s(t){return o["a"].post("project/task/selfList",t)}function a(t){return o["a"].post("project/task/taskSources",t)}function c(t){return o["a"].post("project/task/sort",t)}function u(t){return o["a"].post("project/task/save",t)}function l(t){return o["a"].post("project/task/taskToTags",t)}function f(t){return o["a"].post("project/task/setTag",t)}function d(t){return o["a"].post("project/task/assignTask",t)}function p(t){return o["a"].post("project/task/batchAssignTask",t)}function h(t,e){return o["a"].post("project/task/taskDone",{taskCode:t,done:e})}function m(t,e){return o["a"].post("project/task/setPrivate",{taskCode:t,private:e})}function g(t){return o["a"].post("project/task/recycleBatch",t)}function b(t){return o["a"].post("project/task/recovery",{taskCode:t})}function v(t){return o["a"].post("project/task/delete",{taskCode:t})}function y(t){return o["a"].post("project/task/dateTotalForProject",t)}function k(t){return o["a"].post("project/project/getLogBySelfProject",t)}function O(t){return o["a"].post("project/task/_taskWorkTimeList",t)}function w(t){return o["a"].post("project/task/saveTaskWorkTime",t)}function j(t){return o["a"].post("project/task/editTaskWorkTime",t)}function C(t){return o["a"].post("project/task/delTaskWorkTime",t)}},cef1:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},i=[],r=n("68fe"),s=n("22b6");function a(t,e){return s["a"].post("index/index/bindClientId",{client_id:t,uid:e})}var c=n("a078"),u={data:function(){return{websocket:null}},methods:{threadPoxi:function(){var t={uid:this.$store.state.userInfo.id};if(this.websocket.readyState===this.websocket.OPEN)this.websocketSend(t);else if(this.websocket.readyState===this.websocket.CONNECTING){var e=this;setTimeout((function(){e.websocketSend(t)}),300)}else{this.initWebSocket();var n=this;setTimeout((function(){n.websocketSend(t)}),500)}},initWebSocket:function(){try{var t=c["a"].WS_URI;this.websocket=new WebSocket(t),this.websocket.onmessage=this.websocketOnMessage,this.websocket.onclose=this.websocketClose,Vue.prototype.$websocket=this.websocket}catch(e){console.log(e)}},websocketOnMessage:function(t){var e=JSON.parse(t.data);if("ping"!=e.action&&(console.log(e),this.$store.commit("catchSocketAction",e)),"connect"===e.action&&e.data.client_id&&!this.$store.state.boundClient){Object(r["c"])("client_id",e.data.client_id);var n=Object(r["a"])("userInfo",!0),o=n?n.code:"";o&&(a(e.data.client_id,o),this.$store.dispatch("setBoundClient",!0))}},websocketSend:function(t){console.log("发送消息："),console.log(t),this.websocket.send(t)},websocketClose:function(t){console.log("connection closed ("+t.code+")")}},created:function(){this.initWebSocket()}},l=u,f=n("2877"),d=Object(f["a"])(l,o,i,!1,null,null,null);e["default"]=d.exports},e84e:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-popover",{attrs:{overlayClassName:"header-notice",trigger:"click",placement:"bottomRight"},model:{value:t.showNotice,callback:function(e){t.showNotice=e},expression:"showNotice"}},[o("template",{slot:"content"},[o("a-spin",{attrs:{spinning:t.loading}},[o("a-tabs",{staticClass:"header-notice-content",attrs:{tabBarGutter:25}},[o("a-tab-pane",{key:"1"},[o("span",{attrs:{slot:"tab"},slot:"tab"},[t._v("\n            消息\n            "),t.total&&t.totalSum["message"]?o("span",[t._v("("+t._s(t.totalSum["message"])+")")]):t._e()]),t.total&&t.totalSum["message"]?[o("a-list",[t._l(t.list["message"],(function(e){return[o("a-list-item",{key:e.id},[o("a-list-item-meta",{attrs:{description:e.create_time}},[o("span",{attrs:{slot:"title"},slot:"title"},[o("p",[t._v(t._s(e.title))]),o("p",{staticClass:"ant-list-item-meta-description",domProps:{innerHTML:t._s(e.content)}})]),o("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"})],1)],1)]}))],2),o("div",{staticClass:"footer-action"},[o("a",{staticClass:"item muted",on:{click:function(e){return t.setRead("message")}}},[t._v("清空消息")]),o("a",{staticClass:"item muted",on:{click:function(e){return t.showMore("1")}}},[t._v("查看更多")])])]:[o("div",{staticClass:"notFound"},[o("img",{attrs:{src:n("7e25"),alt:"not found"}}),o("div",[t._v("你已读完所有消息")])])]],2),o("a-tab-pane",{key:"2"},[o("span",{attrs:{slot:"tab"},slot:"tab"},[t._v("\n            通知\n            "),t.total&&t.totalSum["notice"]?o("span",[t._v("("+t._s(t.totalSum["notice"])+")")]):t._e()]),t.total&&t.totalSum["notice"]?[o("a-list",[t._l(t.list["notice"],(function(e){return[o("a-list-item",{key:e.id},[o("a-list-item-meta",{attrs:{description:e.create_time}},[o("span",{attrs:{slot:"title"},slot:"title"},[o("p",{domProps:{innerHTML:t._s(e.title)}}),o("p",{staticClass:"ant-list-item-meta-description",domProps:{innerHTML:t._s(e.content)}})]),o("a-avatar",{staticStyle:{"background-color":"white"},attrs:{slot:"avatar",src:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"},slot:"avatar"})],1)],1)]}))],2),o("div",{staticClass:"footer-action"},[o("a",{staticClass:"item muted",on:{click:function(e){return t.setRead("notice")}}},[t._v("清空通知")]),o("a",{staticClass:"item muted",on:{click:function(){t.$router.push("/notify/notice")}}},[t._v("查看更多")])])]:[o("div",{staticClass:"notFound"},[o("img",{attrs:{src:n("5744"),alt:"not found"}}),o("div",[t._v("你已查看所有通知")])])]],2)],1)],1)],1),o("span",[o("a-badge",{attrs:{count:t.total}},[o("a-icon",{staticClass:"action-item",attrs:{type:"bell"}})],1)],1)],2)},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("64de"),a=n("97a8"),c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o={body:e,icon:n.icon||"http://static.vilson.xyz/preview.jpg",showTime:n.showTime||15e3,onclick:n.onclick,onshow:n.onshow,onerror:n.onerror,onclose:n.onclose},i=window.Notification||window.mozNotification||window.webkitNotification;if(console.log(i.permission),i&&"granted"===i.permission){var r=new i(t,o);r.onclick=function(){"function"===typeof o.onclick&&o.onclick(r)},r.onerror=function(){"function"===typeof o.onerror&&o.onerror(r)},r.onshow=function(){"function"===typeof o.onshow&&o.onshow(r),setTimeout((function(){r.close()}),o.showTime)},r.onclose=function(){"function"===typeof o.onclose&&o.onclose(r)}}else{if(!i||"denied"===i.permission)return!1;i.requestPermission((function(e){if(i.permission!==e&&(i.permission=e),"granted"!==e)return!1;var n=new i(t,o);n.onclick=function(){"function"===typeof o.onclick&&o.onclick(n)},n.onerror=function(){"function"===typeof o.onerror&&o.onerror(n)},n.onshow=function(){"function"===typeof o.onshow&&o.onshow(n),setTimeout((function(){n.close()}),o.showTime)},n.onclose=function(){"function"===typeof o.onclose&&o.onclose(n)}}))}},u=n("ca8d");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"HeaderNotice",data:function(){return{showNotice:!1,loading:!1,total:0,messageTotal:0,totalSum:0,list:[],task:{page:1,pageSize:5,total:0,list:[]}}},computed:f({},Vuex.mapState({socketAction:function(t){return t.socketAction},currentOrganization:function(t){return t.currentOrganization}})),watch:{socketAction:function(t){if("notice"===t.action)this.init();else if("task"===t.action){this.init();var e=c(t.title,t.msg,{icon:t.data.notify.avatar});!1===e&&Object(a["b"])(t,"notice","info",10)}}},created:function(){this.init()},methods:{init:function(){this.fetchNotice()},fetchNotice:function(){var t=this;Object(s["e"])().then((function(e){t.list=e.data.list,t.messageTotal=e.data.total,t.total=t.messageTotal+t.task.total,t.totalSum=e.data.totalSum}))},setRead:function(t){switch(this.total-=this.list[t].length,this.list[t]=[],t){case"message":this.totalSum.message=0,Object(s["a"])()}},showMore:function(t){switch(t){default:this.showNotice=!1,this.$router.push("/notify/notice")}},getTasks:function(){var t=this;Object(u["o"])({page:this.task.page,pageSize:this.task.pageSize}).then((function(e){t.task.list=e.data.list,t.task.total=e.data.total,t.total=t.messageTotal+t.task.total}))},formatTime:function(t){return moment(t).format("YY年MM月DD日 HH:mm")},showDiff:function(t,e){var n=moment(t).diff(moment(e),"days");return n<=0?(n=moment(t).diff(moment(e),"hours"),n+="小时"):n+="天",n}}},p=d,h=(n("14f0"),n("2877")),m=Object(h["a"])(p,o,i,!1,null,null,null);e["default"]=m.exports},e895:function(t,e,n){},f7fb:function(t,e,n){"use strict";var o=n("096e"),i=n.n(o);i.a}}]);