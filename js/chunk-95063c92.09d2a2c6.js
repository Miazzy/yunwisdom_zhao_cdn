(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95063c92","chunk-4dc0f622","chunk-41a5783b","chunk-2d0df843"],{4656:function(e,t,r){},"643a":function(e,t,r){},"806e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-row",{attrs:{gutter:10}},[r("a-col",{attrs:{md:8,sm:24}},[r("a-card",{attrs:{bordered:!1}},[r("div",{staticStyle:{background:"#fff","padding-left":"16px",height:"100%","margin-top":"5px"}},[r("a-input-search",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{placeholder:"请输入部门名称"},on:{search:e.onSearch}}),"2"===e.userIdentity&&e.departTree.length>0?[r("a-tree",{attrs:{showLine:"",selectedKeys:e.selectedKeys,checkStrictly:!0,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,autoExpandParent:e.autoExpandParent},on:{select:e.onSelect}})]:"2"===e.userIdentity&&0==e.departTree.length?r("div",{staticStyle:{"margin-top":"24px"}},[r("h3",[r("span",[e._v("您的部门下暂无有效部门信息")])])]):r("div",{staticStyle:{"margin-top":"24px"}},[r("h3",[e._v("普通员工暂此权限")])])],2)])],1),r("a-col",{attrs:{md:16,sm:24}},[r("a-card",{attrs:{bordered:!1}},[r("a-tabs",{attrs:{defaultActiveKey:"2"},on:{change:e.callback}},[r("a-tab-pane",{key:"1",attrs:{tab:"基本信息",forceRender:""}},[r("Dept-Base-Info",{ref:"DeptBaseInfo"})],1),r("a-tab-pane",{key:"2",attrs:{tab:"用户信息"}},[r("Dept-User-Info",{ref:"DeptUserInfo",on:{clearSelectedDepartKeys:e.clearSelectedDepartKeys}})],1),r("a-tab-pane",{key:"3",attrs:{tab:"部门角色",forceRender:""}},[r("dept-role-info",{ref:"DeptRoleInfo",on:{clearSelectedDepartKeys:e.clearSelectedDepartKeys}})],1)],1)],1)],1)],1)},o=[],n=(r("7f7f"),r("e326")),s=r("5859"),l=r("4ec3"),i=r("b65a"),d=r("24b9"),c={name:"DepartUserList",mixins:[i["a"]],components:{DeptRoleInfo:d["default"],DeptBaseInfo:n["default"],DeptUserInfo:s["default"]},data:function(){return{currentDeptId:"",iExpandedKeys:[],loading:!1,autoExpandParent:!0,currFlowId:"",currFlowName:"",disable:!0,treeData:[],visible:!1,departTree:[],rightClickSelectedKey:"",hiding:!0,model:{},dropTrigger:"",depart:{},disableSubmit:!1,checkedKeys:[],selectedKeys:[],autoIncr:1,currSelected:{},form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},graphDatasource:{nodes:[],edges:[]},userIdentity:""}},methods:{callback:function(e){console.log(e)},loadData:function(){this.refresh()},clearSelectedDepartKeys:function(){this.checkedKeys=[],this.selectedKeys=[],this.currentDeptId="",this.$refs.DeptUserInfo.currentDeptId="",this.$refs.DeptRoleInfo.currentDeptId=""},loadTree:function(){var e=this,t=this;t.treeData=[],t.departTree=[],Object(l["queryMyDepartTreeList"])().then((function(r){if(r.success&&r.result){for(var a=0;a<r.result.length;a++){var o=r.result[a];t.treeData.push(o),t.departTree.push(o),t.setThisExpandedKeys(o)}e.loading=!1}t.userIdentity=r.message}))},setThisExpandedKeys:function(e){if(e.children&&e.children.length>0){this.iExpandedKeys.push(e.key);for(var t=0;t<e.children.length;t++)this.setThisExpandedKeys(e.children[t])}},refresh:function(){this.loading=!0,this.loadTree()},onExpand:function(e){this.iExpandedKeys=e,this.autoExpandParent=!1},onSearch:function(e){var t=this;e?Object(l["S"])({keyWord:e}).then((function(e){if(e.success){t.departTree=[];for(var r=0;r<e.result.length;r++){var a=e.result[r];t.departTree.push(a)}}else t.$message.warning(e.message)})):t.loadTree()},onCheck:function(e,t){var r=t.node.dataRef;this.checkedKeys=[],this.currentDeptId=r.id,this.checkedKeys.push(r.id),this.$refs.DeptBaseInfo.open(r),this.$refs.DeptUserInfo.open(r),this.$refs.DeptRoleInfo.open(r),this.hiding=!1},onSelect:function(e,t){this.selectedKeys[0]!==e[0]&&(this.selectedKeys=[e[0]]);var r=t.node.dataRef;this.checkedKeys.push(r.id),this.$refs.DeptBaseInfo.open(r),this.$refs.DeptUserInfo.onClearSelected(),this.$refs.DeptUserInfo.open(r),this.$refs.DeptRoleInfo.onClearSelected(),this.$refs.DeptRoleInfo.open(r)}},created:function(){this.currFlowId=this.$route.params.id,this.currFlowName=this.$route.params.name}},p=c,u=(r("d5d7"),r("2877")),f=Object(u["a"])(p,a,o,!1,null,"44bd9478",null);t["default"]=f.exports},"89f2":function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return i}));r("96cf"),r("28a5"),r("6b54"),r("ac4d"),r("8a81"),r("ac6a");var a=r("3b8d"),o=r("4ec3");r("0fea");function n(e){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","字典Code不能为空!");case 2:return e.next=4,Object(o["f"])(t);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e,t){if(e instanceof Array){var r=!0,a=!1,o=void 0;try{for(var n,s=e[Symbol.iterator]();!(r=(n=s.next()).done);r=!0){var l=n.value;if(t===l.value)return l.text}}catch(i){a=!0,o=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}}return t}function i(e,t){if(0===t||"0"===t){var r=!0,a=!1,o=void 0;try{for(var n,s=e[Symbol.iterator]();!(r=(n=s.next()).done);r=!0){var l=n.value;if(t==l.value)return l.text}}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}}if(!t||!e||0==e.length)return"";var i="";t=t.toString();var d=t.split(",");return e.forEach((function(e){for(var t=0;t<d.length;t++)if(d[t]===e.value){i+=e.text+",";break}})),""==i?t:i.substring(0,i.length-1)}},d5d7:function(e,t,r){"use strict";var a=r("643a"),o=r.n(a);o.a},e13d:function(e,t,r){"use strict";var a=r("4656"),o=r.n(a);o.a},e326:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{visible:e.visible}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["departName",{}],expression:"['departName', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"上级部门"}},[r("a-tree-select",{staticStyle:{width:"100%",border:"none",outline:"none"},attrs:{disabled:"",dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.treeData,placeholder:"无"},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构编码"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCode",{}],expression:"['orgCode', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",{}],expression:"['orgCategory',{}]"}],attrs:{disabled:!0,placeholder:"请选择机构类型"}},[r("a-radio",{attrs:{value:"1"}},[e._v("\n            公司\n          ")]),r("a-radio",{attrs:{value:"2"}},[e._v("\n            部门\n          ")]),r("a-radio",{attrs:{value:"3"}},[e._v("\n            岗位\n          ")])],1)],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["departOrder",{}],expression:"[ 'departOrder',{}]"}],staticStyle:{border:"0px"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"手机号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{}],expression:"['mobile', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{}],expression:"['address', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{}],expression:"['memo', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1)],1)],1)},o=[],n=r("4ec3"),s={name:"DeptBaseInfo",components:{},data:function(){return{departTree:[],id:"",model:{},visible:!1,disable:!0,treeData:[],form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:16}}}},created:function(){this.loadTreeData()},methods:{loadTreeData:function(){var e=this;Object(n["E"])().then((function(t){if(t.success)for(var r=0;r<t.result.length;r++){var a=t.result[r];e.treeData.push(a)}}))},open:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,console.log("record:"),console.log(e),this.$nextTick((function(){t.form.setFieldsValue(pick(e,"orgCategory","departName","parentId","orgCode","departOrder","mobile","fax","address","memo"))}))},clearForm:function(){this.form.resetFields(),this.treeData=[]}}},l=s,i=(r("e13d"),r("2877")),d=Object(i["a"])(l,a,o,!1,null,"537b03c4",null);t["default"]=d.exports}}]);