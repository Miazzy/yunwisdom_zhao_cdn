(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6520af8"],{2482:function(t,e,n){"use strict";var i=n("dc99"),a=n.n(i);a.a},cd07:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header-index-wide"},[n("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[n("div",{staticClass:"account-settings-info-main",class:t.device,style:"min-height:"+t.mainInfoHeight},[n("div",{staticClass:"account-settings-info-left"},[n("a-menu",{style:{border:"0",width:"mobile"==t.device?"560px":"auto"},attrs:{mode:"mobile"==t.device?"horizontal":"inline",defaultSelectedKeys:t.defaultSelectedKeys,type:"inner"},on:{openChange:t.onOpenChange}},[n("a-menu-item",{key:"/account/settings/base"},[n("router-link",{attrs:{to:{name:"account-settings-base"}}},[t._v("基本设置")])],1),n("a-menu-item",{key:"/account/settings/security"},[n("router-link",{attrs:{to:{name:"account-settings-security"}}},[t._v("安全设置")])],1),n("a-menu-item",{key:"/account/settings/custom"},[n("router-link",{attrs:{to:{name:"account-settings-custom"}}},[t._v("个性化")])],1),n("a-menu-item",{key:"/account/settings/binding"},[n("router-link",{attrs:{to:{name:"account-settings-binding"}}},[t._v("账户绑定")])],1),n("a-menu-item",{key:"/account/settings/notification"},[n("router-link",{attrs:{to:{name:"account-settings-notification"}}},[t._v("新消息通知")])],1)],1)],1),n("div",{staticClass:"account-settings-info-right"},[n("div",{staticClass:"account-settings-info-title"},[n("span",[t._v(t._s(t.$route.meta.title))])]),n("route-view")],1)])])],1)},a=[],o=n("b445"),s=n("501f"),c=n("ac0d"),u={components:{RouteView:s["default"],PageLayout:o["default"]},mixins:[c["b"]],data:function(){return{mode:"inline",mainInfoHeight:"100%",openKeys:[],defaultSelectedKeys:[],preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},pageTitle:""}},computed:{userInfo:function(){return this.$store.getters.userInfo}},created:function(){this.updateMenu()},mounted:function(){this.mainInfoHeight=window.innerHeight-285+"px"},methods:{onOpenChange:function(t){this.openKeys=t},updateMenu:function(){var t=this.$route.matched.concat();this.defaultSelectedKeys=[t.pop().path]}}},r=u,d=(n("2482"),n("2877")),l=Object(d["a"])(r,i,a,!1,null,"8dd60706",null);e["default"]=l.exports},dc99:function(t,e,n){}}]);