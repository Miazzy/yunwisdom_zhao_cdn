(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-513090ce","chunk-4e064c6c"],{"0025":function(e,t,n){},2285:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[n("a-tabs",{attrs:{defaultActiveKey:"1"}},[n("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?n("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[n("a-row",[e._l(e.dataruleList,(function(t,a){return n("a-col",{key:"dr"+a,attrs:{span:24}},[n("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),n("a-col",{attrs:{span:24}},[n("div",{staticStyle:{width:"100%","margin-top":"15px"}},[n("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):n("div",[n("h3",[e._v("无配置信息!")])])],1)],1)],1)},s=[],i=(n("28a5"),n("290c")),c=n("da05"),o=n("0fea"),r={name:"RoleDataruleModal",components:{ACol:c["a"],ARow:i["a"]},data:function(){return{functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/role/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(o["getAction"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.roleId)).then((function(t){if(console.log(t),t.success){e.dataruleList=t.result.datarule;var n=t.result.drChecked;n&&(e.dataruleChecked=n.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};console.log("保存数据权限",t),Object(o["postAction"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.roleId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},l=r,u=n("2877"),d=Object(u["a"])(l,a,s,!1,null,"5fa38486",null);t["default"]=d.exports},"290c":function(e,t,n){"use strict";var a=n("6042"),s=n.n(a),i=n("1098"),c=n.n(i),o=n("41b2"),r=n.n(o),l=n("4d91"),u=n("b488"),d=n("4df5"),h=null;if("undefined"!==typeof window){var f=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||f,h=n("8e95")}var m=l["a"].shape({xs:l["a"].number,sm:l["a"].number,md:l["a"].number,lg:l["a"].number,xl:l["a"].number,xxl:l["a"].number}).loose,y={gutter:l["a"].oneOfType([l["a"].number,m]),type:l["a"].oneOf(["flex"]),align:l["a"].oneOf(["top","middle","bottom"]),justify:l["a"].oneOf(["start","end","center","space-around","space-between"]),prefixCls:l["a"].string},p=["xxl","xl","lg","md","sm","xs"],k={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};t["a"]={name:"ARow",mixins:[u["a"]],props:r()({},y,{gutter:l["a"].oneOfType([l["a"].number,m]).def(0)}),provide:function(){return{rowContext:this}},inject:{configProvider:{default:function(){return d["a"]}}},data:function(){return{screens:{}}},mounted:function(){var e=this;this.$nextTick((function(){Object.keys(k).map((function(t){return h.register(k[t],{match:function(){"object"===c()(e.gutter)&&e.setState((function(e){return{screens:r()({},e.screens,s()({},t,!0))}}))},unmatch:function(){"object"===c()(e.gutter)&&e.setState((function(e){return{screens:r()({},e.screens,s()({},t,!1))}}))},destroy:function(){}})}))}))},beforeDestroy:function(){Object.keys(k).map((function(e){return h.unregister(k[e])}))},methods:{getGutter:function(){var e=this.gutter;if("object"===("undefined"===typeof e?"undefined":c()(e)))for(var t=0;t<p.length;t++){var n=p[t];if(this.screens[n]&&void 0!==e[n])return e[n]}return e}},render:function(){var e,t=arguments[0],n=this.type,a=this.justify,i=this.align,c=this.prefixCls,o=this.$slots,r=this.configProvider.getPrefixCls,l=r("row",c),u=this.getGutter(),d=(e={},s()(e,l,!n),s()(e,l+"-"+n,n),s()(e,l+"-"+n+"-"+a,n&&a),s()(e,l+"-"+n+"-"+i,n&&i),e),h=u>0?{marginLeft:u/-2+"px",marginRight:u/-2+"px"}:{};return t("div",{class:d,style:h},[o["default"]])}}},9410:function(e,t,n){"use strict";var a=n("0025"),s=n.n(a);s.a},ee18:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"650",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[n("a-form",[n("a-form-item",{attrs:{label:"所拥有的权限"}},[n("a-tree",{attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var a=t.slotTitle,s=t.ruleFlag;return n("span",{},[e._v("\n          "+e._s(a)),s?n("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}])})],1)],1),n("div",{staticClass:"drawer-bootom-button"},[n("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),n("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),n("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),n("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),n("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),n("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),n("a-button",[e._v("\n        树操作 "),n("a-icon",{attrs:{type:"up"}})],1)],1),n("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[n("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),n("a-button",{staticStyle:{"margin-right":"0.8rem"},attrs:{type:"primary",loading:e.loading,ghost:""},on:{click:function(t){return e.handleSubmit(!1)}}},[e._v("仅保存")]),n("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存并关闭")])],1),n("role-datarule-modal",{ref:"datarule"})],1)},s=[],i=n("75fc"),c=n("4ec3"),o=n("2285"),r={name:"RoleModal",components:{RoleDataruleModal:o["default"]},data:function(){return{roleId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!0,title:"角色权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.roleId)},onCheck:function(e){this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},show:function(e){this.roleId=e,this.visible=!0},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},handleCancel:function(){this.close()},handleSubmit:function(e){var t=this,n=this,a={roleId:n.roleId,permissionIds:n.checkedKeys.join(","),lastpermissionIds:n.defaultCheckedKeys.join(",")};n.loading=!0,console.log("请求参数：",a),Object(c["R"])(a).then((function(a){a.success?(n.$message.success(a.message),n.loading=!1,e&&n.close()):(n.$message.error(a.message),n.loading=!1,e&&n.close()),t.loadData()}))},loadData:function(){var e=this;Object(c["L"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids,Object(c["I"])({roleId:e.roleId}).then((function(t){e.checkedKeys=Object(i["a"])(t.result),e.defaultCheckedKeys=Object(i["a"])(t.result),e.expandedKeysss=e.allTreeKeys}))}))}},watch:{visible:function(){this.visible&&this.loadData()}}},l=r,u=(n("9410"),n("2877")),d=Object(u["a"])(l,a,s,!1,null,"4f6f2062",null);t["default"]=d.exports}}]);