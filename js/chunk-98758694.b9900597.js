(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98758694","chunk-088b4502","chunk-6e44f288","chunk-53991fce","chunk-602730e6","chunk-77f9957a","chunk-2d0cef18","chunk-2d221f96","chunk-2d0e9974","chunk-2d0dde11","chunk-2d221f48","chunk-98758694"],{"0673":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"exception"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.config[e.type].img}})]),a("div",{staticClass:"content"},[a("h1",[e._v(e._s(e.config[e.type].title))]),a("div",{staticClass:"desc"},[e._v(e._s(e.config[e.type].desc))]),a("div",{staticClass:"action"},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleToHome}},[e._v("返回首页")])],1)])])},s=[],n=a("cd0a"),o={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:n["default"]}},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},i=o,l=(a("62d6"),a("2877")),c=Object(l["a"])(i,r,s,!1,null,"48c3c2d3",null);t["default"]=c.exports},"14db":function(e,t,a){"use strict";var r=a("6fdf"),s=a.n(r);s.a},"1db0":function(e,t,a){"use strict";var r=a("95e5"),s=a.n(r);s.a},"2d96":function(e,t,a){"use strict";var r=a("dec5a"),s=a.n(r);s.a},"362d":function(e,t,a){},"53d7":function(e,t,a){"use strict";var r=a("74f3"),s=a.n(r);s.a},6239:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1}},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"标题",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入标题"}]}],expression:"[\n          'name',\n          {rules: [{ required: true, message: '请输入标题' }]}\n        ]"}],attrs:{name:"name",placeholder:"给目标起个名字"}})],1),a("a-form-item",{attrs:{label:"起止日期",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["buildTime",{rules:[{required:!0,message:"请选择起止日期"}]}],expression:"[\n          'buildTime',\n          {rules: [{ required: true, message: '请选择起止日期' }]}\n        ]"}],staticStyle:{width:"100%"},attrs:{name:"buildTime"}})],1),a("a-form-item",{attrs:{label:"目标描述",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:"请输入目标描述"}]}],expression:"[\n          'description',\n          {rules: [{ required: true, message: '请输入目标描述' }]}\n        ]"}],attrs:{rows:"4",placeholder:"请输入你阶段性工作目标"}})],1),a("a-form-item",{attrs:{label:"衡量标准",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请输入衡量标准"}]}],expression:"[\n          'type',\n          {rules: [{ required: true, message: '请输入衡量标准' }]}\n        ]"}],attrs:{rows:"4",placeholder:"请输入衡量标准"}})],1),a("a-form-item",{attrs:{label:"客户",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["customer",{rules:[{required:!0,message:"请描述你服务的客户"}]}],expression:"[\n          'customer',\n          {rules: [{ required: true, message: '请描述你服务的客户' }]}\n        ]"}],attrs:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}})],1),a("a-form-item",{attrs:{label:"邀评人",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1}},[a("a-input",{attrs:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}})],1),a("a-form-item",{attrs:{label:"权重",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1}},[a("a-input-number",{attrs:{min:0,max:100}}),a("span",[e._v(" %")])],1),a("a-form-item",{attrs:{label:"目标公开",labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}},required:!1,help:"客户、邀评人默认被分享"}},[a("a-radio-group",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("a-radio",{attrs:{value:1}},[e._v("公开")]),a("a-radio",{attrs:{value:2}},[e._v("部分公开")]),a("a-radio",{attrs:{value:3}},[e._v("不公开")])],1),a("a-form-item",[2===e.value?a("a-select",{attrs:{mode:"multiple"}},[a("a-select-option",{attrs:{value:"4"}},[e._v("同事一")]),a("a-select-option",{attrs:{value:"5"}},[e._v("同事二")]),a("a-select-option",{attrs:{value:"6"}},[e._v("同事三")])],1):e._e()],1)],1),a("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[a("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")]),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("保存")])],1)],1)],1)},s=[],n={name:"BaseForm",data:function(){return{description:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",value:1,form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))}}},o=n,i=a("2877"),l=Object(i["a"])(o,r,s,!1,null,null,null);t["default"]=l.exports},"62d6":function(e,t,a){"use strict";var r=a("362d"),s=a.n(r);s.a},"6c05":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("exception-page",{attrs:{type:"500"}})},s=[],n=a("0673"),o={components:{ExceptionPage:n["default"]}},i=o,l=a("2877"),c=Object(l["a"])(i,r,s,!1,null,"58acec66",null);t["default"]=c.exports},"6fdf":function(e,t,a){},"70d7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("a-card",{staticClass:"card",attrs:{title:"仓库管理",bordered:!1}},[r("repository-form",{ref:"repository",attrs:{showSubmit:!1}})],1),r("a-card",{staticClass:"card",attrs:{title:"任务管理",bordered:!1}},[r("task-form",{ref:"task",attrs:{showSubmit:!1}})],1),r("a-card",[r("form",{attrs:{autoFormCreate:function(t){return e.form=t}}},[r("a-table",{attrs:{columns:t.columns,dataSource:t.data,pagination:!1},scopedSlots:t._u([t._l(["name","workId","department"],(function(e,a){return{key:e,fn:function(s,n,o){return[n.editable?r("a-input",{key:e,staticStyle:{margin:"-5px 0"},attrs:{value:s,placeholder:t.columns[a].title},on:{change:function(a){return t.handleChange(a.target.value,n.key,e)}}}):[t._v(t._s(s))]]}}})),{key:"operation",fn:function(e,a,s){return[a.editable?[a.isNew?r("span",[r("a",{on:{click:function(e){return t.saveRow(a.key)}}},[t._v("添加")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(e){return t.remove(a.key)}}},[r("a",[t._v("删除")])])],1):r("span",[r("a",{on:{click:function(e){return t.saveRow(a.key)}}},[t._v("保存")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.cancel(a.key)}}},[t._v("取消")])],1)]:r("span",[r("a",{on:{click:function(e){return t.toggle(a.key)}}},[t._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(e){return t.remove(a.key)}}},[r("a",[t._v("删除")])])],1)]}}],null,!0)}),r("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:t.newMember}},[t._v("新增成员")])],1)]),r("footer-tool-bar",[r("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.validate}},[t._v("提交")])],1)],1)},s=[],n=a("75fc"),o=a("cd43"),i=a("8dd6"),l=a("c984"),c={name:"AdvancedForm",components:{FooterToolBar:l["default"],RepositoryForm:o["default"],TaskForm:i["default"]},data:function(){return{description:"高级表单常见于一次性输入和提交大批量数据的场景。",loading:!1,columns:[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"operation"}}],data:[{key:"1",name:"小明",workId:"001",editable:!1,department:"行政部"},{key:"2",name:"李莉",workId:"002",editable:!1,department:"IT部"},{key:"3",name:"王小帅",workId:"003",editable:!1,department:"财务部"}]}},methods:{handleSubmit:function(e){e.preventDefault()},newMember:function(){this.data.push({key:"-1",name:"",workId:"",department:"",editable:!0,isNew:!0})},remove:function(e){var t=this.data.filter((function(t){return t.key!==e}));this.data=t},saveRow:function(e){var t=this.data.filter((function(t){return t.key===e}))[0];t.editable=!1,t.isNew=!1},toggle:function(e){var t=this.data.filter((function(t){return t.key===e}))[0];t.editable=!t.editable},getRowByKey:function(e,t){var a=this.data;return(t||a).filter((function(t){return t.key===e}))[0]},cancel:function(e){var t=this.data.filter((function(t){return t.key===e}))[0];t.editable=!1},handleChange:function(e,t,a){var r=Object(n["a"])(this.data),s=r.filter((function(e){return t===e.key}))[0];s&&(s[a]=e,this.data=r)},validate:function(){var e=this;this.$refs.repository.form.validateFields((function(t,a){t||e.$notification["error"]({message:"Received values of form:",description:a})})),this.$refs.task.form.validateFields((function(t,a){t||e.$notification["error"]({message:"Received values of form:",description:a})}))}}},u=c,p=(a("53d7"),a("2877")),m=Object(p["a"])(u,r,s,!1,null,"856511da",null);t["default"]=m.exports},"74f3":function(e,t,a){},"82ef":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"}},[a("a-form-item",{attrs:{label:"付款账户",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-select",{attrs:{value:"1",placeholder:"ant-design@alipay.com"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("ant-design@alipay.com")])],1)],1),a("a-form-item",{attrs:{label:"收款账户",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-input-group",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{compact:!0}},[a("a-select",{staticStyle:{width:"100px"},attrs:{defaultValue:"alipay"}},[a("a-select-option",{attrs:{value:"alipay"}},[e._v("支付宝")]),a("a-select-option",{attrs:{value:"wexinpay"}},[e._v("微信")])],1),a("a-input",{style:{width:"calc(100% - 100px)"},attrs:{value:"test@example.com"}})],1)],1),a("a-form-item",{attrs:{label:"收款人姓名",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-input",{attrs:{value:"Alex"}})],1),a("a-form-item",{attrs:{label:"转账金额",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-input",{attrs:{prefix:"￥",value:"5000"}})],1),a("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.nextStep}},[e._v("下一步")])],1)],1)],1)},s=[],n={name:"Step1",methods:{nextStep:function(){this.$emit("nextStep")}}},o=n,i=a("2877"),l=Object(i["a"])(o,r,s,!1,null,"1745cd50",null);t["default"]=l.exports},"8dd6":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:"任务名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.name",{rules:[{required:!0,message:"请输入任务名称",whitespace:!0}]}],expression:"[ 'task.name', {rules: [{ required: true, message: '请输入任务名称', whitespace: true}]} ]"}],attrs:{placeholder:"请输入任务名称"}})],1)],1),a("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:"任务描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.description",{rules:[{required:!0,message:"请输入任务描述",whitespace:!0}]}],expression:"[ 'task.description', {rules: [{ required: true, message: '请输入任务描述', whitespace: true}]} ]"}],attrs:{placeholder:"请输入任务描述"}})],1)],1),a("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:"执行人"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.executor",{rules:[{required:!0,message:"请选择执行人"}]}],expression:"[\n            'task.executor',\n            {rules: [{ required: true, message: '请选择执行人'}]}\n          ]"}],attrs:{placeholder:"请选择执行人"}},[a("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),a("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:"责任人"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.manager",{rules:[{required:!0,message:"请选择责任人"}]}],expression:"[\n            'task.manager',\n            {rules: [{ required: true, message: '请选择责任人'}]}\n          ]"}],attrs:{placeholder:"请选择责任人"}},[a("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),a("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),a("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:"提醒时间"}},[a("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.time",{rules:[{required:!0,message:"请选择提醒时间"}]}],expression:"[\n            'task.time',\n            {rules: [{ required: true, message: '请选择提醒时间'}]}\n          ]"}],staticStyle:{width:"100%"}})],1)],1),a("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:"任务类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["task.type",{rules:[{required:!0,message:"请选择任务类型"}]}],expression:"[ 'task.type', {rules: [{ required: true, message: '请选择任务类型'}]} ]"}],attrs:{placeholder:"请选择任务类型"}},[a("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),a("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1),e.showSubmit?a("a-form-item",[a("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},s=[],n={name:"TaskForm",props:{showSubmit:{type:Boolean,default:!1}},data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||t.$notification["error"]({message:"Received values of form:",description:a})}))}}},o=n,i=a("2877"),l=Object(i["a"])(o,r,s,!1,null,"74600c93",null);t["default"]=l.exports},"95e5":function(e,t,a){},a462:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-form",{staticStyle:{margin:"40px auto 0"}},[a("result",{attrs:{title:"操作成功","is-success":!0,description:"预计两小时内到账"}},[a("div",{staticClass:"information"},[a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[e._v("付款账户：")]),a("a-col",{attrs:{sm:16,xs:24}},[e._v("ant-design@alipay.com")])],1),a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[e._v("收款账户：")]),a("a-col",{attrs:{sm:16,xs:24}},[e._v("test@example.com")])],1),a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[e._v("收款人姓名：")]),a("a-col",{attrs:{sm:16,xs:24}},[e._v("辉夜")])],1),a("a-row",[a("a-col",{attrs:{sm:8,xs:24}},[e._v("转账金额：")]),a("a-col",{attrs:{sm:16,xs:24}},[a("span",{staticClass:"money"},[e._v("500")]),e._v(" 元\n          ")])],1)],1),a("div",{attrs:{slot:"action"},slot:"action"},[a("a-button",{attrs:{type:"primary"},on:{click:e.finish}},[e._v("再转一笔")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.toOrderList}},[e._v("查看账单")])],1)])],1)],1)},s=[],n=a("9a3d"),o={name:"Step3",components:{Result:n["default"]},data:function(){return{loading:!1}},methods:{finish:function(){this.$emit("finish")},toOrderList:function(){this.$router.push("/list/query-list")}}},i=o,l=(a("1db0"),a("2877")),c=Object(l["a"])(i,r,s,!1,null,"bc0cef36",null);t["default"]=c.exports},cc89:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("exception-page",{attrs:{type:"404"}})},s=[],n=a("0673"),o={components:{ExceptionPage:n["default"]}},i=o,l=a("2877"),c=Object(l["a"])(i,r,s,!1,null,"ec864426",null);t["default"]=c.exports},cd0a:function(e,t,a){"use strict";a.r(t);var r={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}};t["default"]=r},cd43:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:"仓库名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.name",{rules:[{required:!0,message:"请输入仓库名称",whitespace:!0}]}],expression:"[\n            'repository.name',\n            {rules: [{ required: true, message: '请输入仓库名称', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入仓库名称"}})],1)],1),a("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:"仓库域名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.domain",{rules:[{required:!0,message:"请输入仓库域名",whitespace:!0},{validator:e.validate}]}],expression:"[\n            'repository.domain',\n            {rules: [{ required: true, message: '请输入仓库域名', whitespace: true}, {validator: validate}]}\n          ]"}],attrs:{addonBefore:"http://",addonAfter:".com",placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:"仓库管理员"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.manager",{rules:[{required:!0,message:"请选择管理员"}]}],expression:"[ 'repository.manager', {rules: [{ required: true, message: '请选择管理员'}]} ]"}],attrs:{placeholder:"请选择管理员"}},[a("a-select-option",{attrs:{value:"王同学"}},[e._v("王同学")]),a("a-select-option",{attrs:{value:"李同学"}},[e._v("李同学")]),a("a-select-option",{attrs:{value:"黄同学"}},[e._v("黄同学")])],1)],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:16}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{label:"审批人"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.auditor",{rules:[{required:!0,message:"请选择审批员"}]}],expression:"[ 'repository.auditor', {rules: [{ required: true, message: '请选择审批员'}]} ]"}],attrs:{placeholder:"请选择审批员"}},[a("a-select-option",{attrs:{value:"王晓丽"}},[e._v("王晓丽")]),a("a-select-option",{attrs:{value:"李军"}},[e._v("李军")])],1)],1)],1),a("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[a("a-form-item",{attrs:{label:"生效日期"}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.effectiveDate",{rules:[{required:!0,message:"请选择生效日期"}]}],expression:"[\n            'repository.effectiveDate',\n            {rules: [{ required: true, message: '请选择生效日期'}]}\n          ]"}],staticStyle:{width:"100%"}})],1)],1),a("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[a("a-form-item",{attrs:{label:"仓库类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["repository.type",{rules:[{required:!0,message:"请选择仓库类型"}]}],expression:"[\n            'repository.type',\n            {rules: [{ required: true, message: '请选择仓库类型'}]}\n          ]"}],attrs:{placeholder:"请选择仓库类型"}},[a("a-select-option",{attrs:{value:"公开"}},[e._v("公开")]),a("a-select-option",{attrs:{value:"私密"}},[e._v("私密")])],1)],1)],1)],1),e.showSubmit?a("a-form-item",[a("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},s=[],n={name:"RepositoryForm",props:{showSubmit:{type:Boolean,default:!1}},data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||t.$notification["error"]({message:"Received values of form:",description:a})}))},validate:function(e,t,a){var r=/^user-(.*)$/;r.test(t)||a("需要以 user- 开头"),a()}}},o=n,i=a("2877"),l=Object(i["a"])(o,r,s,!1,null,"cba1edea",null);t["default"]=l.exports},dec5a:function(e,t,a){},e409:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("exception-page",{attrs:{type:"403"}})},s=[],n=a("0673"),o={components:{ExceptionPage:n["default"]}},i=o,l=a("2877"),c=Object(l["a"])(i,r,s,!1,null,"e1fa96e6",null);t["default"]=c.exports},f311:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("a-steps",{staticClass:"steps",attrs:{current:e.currentTab}},[a("a-step",{attrs:{title:"填写转账信息"}}),a("a-step",{attrs:{title:"确认转账信息"}}),a("a-step",{attrs:{title:"完成"}})],1),a("div",{staticClass:"content"},[0===e.currentTab?a("step1",{on:{nextStep:e.nextStep}}):e._e(),1===e.currentTab?a("step2",{on:{nextStep:e.nextStep,prevStep:e.prevStep}}):e._e(),2===e.currentTab?a("step3",{on:{prevStep:e.prevStep,finish:e.finish}}):e._e()],1)],1)},s=[],n=a("82ef"),o=a("f4a3"),i=a("a462"),l={name:"StepForm",components:{Step1:n["default"],Step2:o["default"],Step3:i["default"]},data:function(){return{description:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",currentTab:0,form:null}},methods:{nextStep:function(){this.currentTab<2&&(this.currentTab+=1)},prevStep:function(){this.currentTab>0&&(this.currentTab-=1)},finish:function(){this.currentTab=0}}},c=l,u=(a("2d96"),a("2877")),p=Object(u["a"])(c,r,s,!1,null,"cb3a4db8",null);t["default"]=p.exports},f4a3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"}},[a("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{closable:!0,message:"确认转账后，资金将直接打入对方账户，无法退回。"}}),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"付款账户",labelCol:{span:5},wrapperCol:{span:19}}},[e._v("\n      ant-design@alipay.com\n    ")]),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款账户",labelCol:{span:5},wrapperCol:{span:19}}},[e._v("\n      test@example.com\n    ")]),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款人姓名",labelCol:{span:5},wrapperCol:{span:19}}},[e._v("\n      Alex\n    ")]),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"转账金额",labelCol:{span:5},wrapperCol:{span:19}}},[e._v("\n      ￥ 5,000.00\n    ")]),a("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[a("a-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.nextStep}},[e._v("提交")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.prevStep}},[e._v("上一步")])],1)],1)],1)},s=[],n={name:"Step2",data:function(){return{loading:!1}},methods:{nextStep:function(){var e=this;e.loading=!0,setTimeout((function(){e.$emit("nextStep")}),1500)},prevStep:function(){this.$emit("prevStep")}}},o=n,i=(a("14db"),a("2877")),l=Object(i["a"])(o,r,s,!1,null,"58be0970",null);t["default"]=l.exports}}]);