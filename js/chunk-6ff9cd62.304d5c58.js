(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ff9cd62"],{"261e":function(e,t,r){"use strict";var a=r("92fa"),n=r.n(a),i=r("6042"),s=r.n(i),o=r("41b2"),u=r.n(o),c=r("4d26"),l=r.n(c),d=r("0464"),m=r("6dd8"),p=r("c973"),f="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",h=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"],y={},g=void 0;function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&y[r])return y[r];var a=window.getComputedStyle(e),n=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),i=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),s=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),o=h.map((function(e){return e+":"+a.getPropertyValue(e)})).join(";"),u={sizingStyle:o,paddingSize:i,borderSize:s,boxSizing:n};return t&&r&&(y[r]=u),u}function v(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;g||(g=document.createElement("textarea"),document.body.appendChild(g)),e.getAttribute("wrap")?g.setAttribute("wrap",e.getAttribute("wrap")):g.removeAttribute("wrap");var n=b(e,t),i=n.paddingSize,s=n.borderSize,o=n.boxSizing,u=n.sizingStyle;g.setAttribute("style",u+";"+f),g.value=e.value||e.placeholder||"";var c=Number.MIN_SAFE_INTEGER,l=Number.MAX_SAFE_INTEGER,d=g.scrollHeight,m=void 0;if("border-box"===o?d+=s:"content-box"===o&&(d-=i),null!==r||null!==a){g.value=" ";var p=g.scrollHeight-i;null!==r&&(c=p*r,"border-box"===o&&(c=c+i+s),d=Math.max(c,d)),null!==a&&(l=p*a,"border-box"===o&&(l=l+i+s),m=d>l?"":"hidden",d=Math.min(l,d))}return a||(m="hidden"),{height:d+"px",minHeight:c+"px",maxHeight:l+"px",overflowY:m}}var x=r("daa3"),w=r("4df5");function k(e){return window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,1)}function S(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e)}function P(e){return"undefined"===typeof e||null===e?"":e}function O(){}t["a"]={name:"ATextarea",model:{prop:"value",event:"change.value"},props:u()({},p["a"],{autosize:[Object,Boolean]}),inject:{configProvider:{default:function(){return w["a"]}}},data:function(){var e=this.$props,t=e.value,r=void 0===t?"":t,a=e.defaultValue,n=void 0===a?"":a;return{stateValue:P(Object(x["b"])(this,"value")?r:n),nextFrameActionId:void 0,textareaStyles:{}}},computed:{},watch:{value:function(e){var t=this;this.$nextTick((function(){t.resizeOnNextFrame()})),this.stateValue=P(e)},autosize:function(e){!e&&this.$refs.textArea&&(this.textareaStyles=Object(d["a"])(this.textareaStyles,["overflowY"]))}},mounted:function(){var e=this;this.$nextTick((function(){e.resizeTextarea(),e.updateResizeObserverHook(),e.autoFocus&&e.focus()}))},updated:function(){this.updateResizeObserverHook()},beforeDestroy:function(){this.resizeObserver&&this.resizeObserver.disconnect()},methods:{resizeOnNextFrame:function(){this.nextFrameActionId&&S(this.nextFrameActionId),this.nextFrameActionId=k(this.resizeTextarea)},updateResizeObserverHook:function(){!this.resizeObserver&&this.$props.autosize?(this.resizeObserver=new m["a"](this.resizeOnNextFrame),this.resizeObserver.observe(this.$refs.textArea)):this.resizeObserver&&!this.$props.autosize&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},handleKeyDown:function(e){13===e.keyCode&&this.$emit("pressEnter",e),this.$emit("keydown",e)},resizeTextarea:function(){var e=this.$props.autosize;if(e&&this.$refs.textArea){var t=e.minRows,r=e.maxRows,a=v(this.$refs.textArea,!1,t,r);this.textareaStyles=a}},handleTextareaChange:function(e){var t=e.target,r=t.value,a=t.composing;a||this.stateValue===r||(Object(x["b"])(this,"value")?this.$forceUpdate():(this.stateValue=r,this.resizeTextarea()),this.$emit("change.value",r),this.$emit("change",e),this.$emit("input",e))},focus:function(){this.$refs.textArea.focus()},blur:function(){this.$refs.textArea.blur()}},render:function(){var e=arguments[0],t=this.stateValue,r=this.handleKeyDown,a=this.handleTextareaChange,i=this.textareaStyles,o=this.$attrs,c=this.$listeners,m=this.prefixCls,p=this.disabled,f=Object(d["a"])(this.$props,["prefixCls","autosize","type","value","defaultValue","lazy"]),h=this.configProvider.getPrefixCls,y=h("input",m),g=l()(y,s()({},y+"-disabled",p)),b={directives:[{name:"ant-input"}],attrs:u()({},f,o),on:u()({},c,{keydown:r,input:a,change:O})};return e("textarea",n()([b,{domProps:{value:t},class:g,style:i,ref:"textArea"}]))}}},"290c":function(e,t,r){"use strict";var a=r("6042"),n=r.n(a),i=r("1098"),s=r.n(i),o=r("41b2"),u=r.n(o),c=r("4d91"),l=r("b488"),d=r("4df5"),m=null;if("undefined"!==typeof window){var p=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||p,m=r("8e95")}var f=c["a"].shape({xs:c["a"].number,sm:c["a"].number,md:c["a"].number,lg:c["a"].number,xl:c["a"].number,xxl:c["a"].number}).loose,h={gutter:c["a"].oneOfType([c["a"].number,f]),type:c["a"].oneOf(["flex"]),align:c["a"].oneOf(["top","middle","bottom"]),justify:c["a"].oneOf(["start","end","center","space-around","space-between"]),prefixCls:c["a"].string},y=["xxl","xl","lg","md","sm","xs"],g={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};t["a"]={name:"ARow",mixins:[l["a"]],props:u()({},h,{gutter:c["a"].oneOfType([c["a"].number,f]).def(0)}),provide:function(){return{rowContext:this}},inject:{configProvider:{default:function(){return d["a"]}}},data:function(){return{screens:{}}},mounted:function(){var e=this;this.$nextTick((function(){Object.keys(g).map((function(t){return m.register(g[t],{match:function(){"object"===s()(e.gutter)&&e.setState((function(e){return{screens:u()({},e.screens,n()({},t,!0))}}))},unmatch:function(){"object"===s()(e.gutter)&&e.setState((function(e){return{screens:u()({},e.screens,n()({},t,!1))}}))},destroy:function(){}})}))}))},beforeDestroy:function(){Object.keys(g).map((function(e){return m.unregister(g[e])}))},methods:{getGutter:function(){var e=this.gutter;if("object"===("undefined"===typeof e?"undefined":s()(e)))for(var t=0;t<y.length;t++){var r=y[t];if(this.screens[r]&&void 0!==e[r])return e[r]}return e}},render:function(){var e,t=arguments[0],r=this.type,a=this.justify,i=this.align,s=this.prefixCls,o=this.$slots,u=this.configProvider.getPrefixCls,c=u("row",s),l=this.getGutter(),d=(e={},n()(e,c,!r),n()(e,c+"-"+r,r),n()(e,c+"-"+r+"-"+a,r&&a),n()(e,c+"-"+r+"-"+i,r&&i),e),m=l>0?{marginLeft:l/-2+"px",marginRight:l/-2+"px"}:{};return t("div",{class:d,style:m},[o["default"]])}}},4695:function(e,t,r){"use strict";var a=r("b283"),n=r.n(a);n.a},9031:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{class:{abcdefg:!0},attrs:{bordered:!1}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:7,sm:7}},[r("a-form-item",{attrs:{label:"事项"}},[r("a-select",{staticStyle:{width:"100%"},model:{value:e.queryParam.type,callback:function(t){e.$set(e.queryParam,"type",t)},expression:"queryParam.type"}},[r("a-select-option",{attrs:{value:"审批"}},[e._v("审批")]),r("a-select-option",{attrs:{value:"知会"}},[e._v("知会")])],1)],1)],1),r("a-col",{attrs:{md:7,sm:7}},[r("a-form-item",{attrs:{label:"业务"}},[r("a-select",{staticStyle:{width:"100%"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}},e._l(e.tableNameList,(function(t){return r("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1)],1),r("a-col",{attrs:{md:7,sm:7}},[r("a-form-item",{attrs:{label:"主题"}},[r("a-input",{attrs:{placeholder:"请输入主题信息"},model:{value:e.queryParam.topic,callback:function(t){e.$set(e.queryParam,"topic",t)},expression:"queryParam.topic"}})],1)],1),r("a-col",{attrs:{md:7,sm:7}},[r("a-form-item",{attrs:{label:"时间"}},[r("a-range-picker",{model:{value:e.queryParam.time,callback:function(t){e.$set(e.queryParam,"time",t)},expression:"queryParam.time"}})],1)],1),r("a-col",{attrs:{md:7,sm:7}},[r("a-form-item",{attrs:{label:"流程发起人"}},[r("a-input",{attrs:{placeholder:"请输入流程发起人"},model:{value:e.queryParam.startman,callback:function(t){e.$set(e.queryParam,"startman",t)},expression:"queryParam.startman"}})],1)],1),r("a-col",{attrs:{md:7,sm:7}},[r("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[r("a-button",{staticStyle:{"margin-left":"0px",float:"left"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px",float:"left"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),r("a-col",{attrs:{md:24,sm:24}},[[r("div",{staticStyle:{top:"50px"}},[r("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:e.spinning}},[r("div",{staticClass:"spin-content"})])],1),r("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:e.columns,dataSource:e.dataDoneList,pagination:!0},scopedSlots:e._u([{key:"type",fn:function(t,a){return r("a",{},[r("a-menu-item",[r("a",{attrs:{"data-info":JSON.stringify(a)},on:{click:function(t){return e.handleDetailWF(a)}}},[r("span",{domProps:{innerHTML:e._s(a.type)}})])])],1)}},{key:"topic",fn:function(t,a){return r("a",{},[r("a-menu-item",[r("a",{staticStyle:{color:"#303030"},attrs:{"data-info":JSON.stringify(a)},on:{click:function(t){return e.handleDetailWF(a)}}},[r("span",{staticStyle:{color:"#303030"},domProps:{innerHTML:e._s(a.topic)}})])])],1)}},{key:"name",fn:function(t,a){return r("span",{},[r("a-tag",{key:a.name,attrs:{color:a.name.length>5?"geekblue":"green"},on:{click:function(t){return e.handleDetailWF(a)}}},[e._v(e._s(a.name))])],1)}},{key:"username",fn:function(t){return r("span",{},e._l(t,(function(t){return r("a-tag",{key:t,staticStyle:{"margin-top":"5px"},attrs:{color:"admin"===t?"volcano":t.length>5?"geekblue":"green"}},[e._v(e._s(t))])})),1)}},{key:"create_time",fn:function(t,a){return r("span",{},[r("a-tag",{key:a.create_time,attrs:{color:"blue"}},[e._v(e._s(a.create_time))])],1)}}])})]],2)],1)},n=[],i=(r("96cf"),r("3b8d")),s=r("da05"),o=r("290c"),u=r("261e"),c=r("0fea"),l=r("5d2d"),d=r("ca00"),m=r("c32d"),p=[{title:"办理事项",dataIndex:"type",key:"type",slots:{title:"type"},width:100,align:"center",scopedSlots:{customRender:"type"}},{title:"业务",width:100,align:"center",key:"name",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"主题",width:400,align:"left",key:"topic",dataIndex:"topic",scopedSlots:{customRender:"topic"}},{title:"操作人员",key:"username",width:150,align:"left",dataIndex:"username",scopedSlots:{customRender:"username"}},{title:"流程发起人",key:"proponents",width:150,align:"left",dataIndex:"proponents",scopedSlots:{customRender:"proponents"}},{title:"创建时间",width:100,align:"center",key:"create_time",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}}],f={components:{ATextarea:u["a"],ARow:o["a"],ACol:s["a"]},name:"Printgzsld",props:{reBizCode:{type:String,default:""}},data:function(){return{columns:p,labelCol:{xs:{span:24},sm:{span:2}},wrapperCol:{xs:{span:24},sm:{span:8}},previewVisible:!1,previewImage:"",fileList:[],url:{loadApplicant:"/sps/register/loadApplicants",loadRegisterFiles:"/sps/register/getRegisterFilesConfig"},activeKey:2,dataWaitList:[],dataDoneList:[],tableNameList:[],queryParam:{},spinning:!1}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=l["getStore"]("cur_user"),e.next=3,c["queryTableAll"]("v_table_name");case 3:if(r=e.sent,this.tableNameList=r,setTimeout((function(){}),100),this.queryParam=l["getStore"]("system_done_list_user@".concat(t.username)),""!=this.queryParam&&null!=this.queryParam&&"{}"!=JSON.stringify(this.queryParam)&&'{"startman":""}'!=JSON.stringify(this.queryParam)){e.next=13;break}return this.queryParam={},e.next=11,this.getDate();case 11:e.next=16;break;case 13:return this.queryParam.time.length>0&&(this.queryParam.time[0]=d["formatDate"](this.queryParam.time[0],"yyyy-MM-dd"),this.queryParam.time[1]=d["formatDate"](this.queryParam.time[1],"yyyy-MM-dd"),this.queryParam.time=[m(this.queryParam.time[0],"YYYY-MM-DD"),m(this.queryParam.time[1],"YYYY-MM-DD")]),e.next=16,this.searchQuery();case 16:console.log("table name list :"+JSON.stringify(r));case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDate:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!=this.activeKey&&2!=this.activeKey){e.next=14;break}if(t=l["getStore"]("cur_user"),r=t["username"],a=t["realname"],1!=this.activeKey){e.next=10;break}return e.next=7,c["queryProcessLogWaitAll"](r,a);case 7:this.dataWaitList=e.sent,e.next=14;break;case 10:if(2!=this.activeKey){e.next=14;break}return e.next=13,c["queryProcessLogDoneAll"](r,a);case 13:this.dataDoneList=e.sent;case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleCancel:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.previewVisible=!1;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handlePreview:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.previewImage=t.url||t.thumbUrl,this.previewVisible=!0;case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleChange:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.fileList,this.fileList=r;case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleDetailWF:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=JSON.parse(JSON.stringify(t)),a=l["getStore"]("cur_user"),n=r["tname"],i="知会"==r["type"]?"notify":"workflow",s="/workflow/view?table_name=".concat(n,"&id=").concat(r.id,"&processLogID=").concat(r.pid,"&user=").concat(a.username,"&type=").concat(i),this.$router.push(s);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),searchQuery:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=l["getStore"]("cur_user"),r=t["username"],e.next=4,c["queryProcessLogDoneByParamAll"](r,this.queryParam);case 4:this.dataDoneList=e.sent,l["setStore"]("system_done_list_user@".concat(t.username),JSON.stringify(this.queryParam),3600),console.log("dataDoneList :"+JSON.stringify(this.dataDoneList));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),searchReset:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.queryParam={};case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},h=f,y=(r("4695"),r("2877")),g=Object(y["a"])(h,a,n,!1,null,"3141b9da",null);t["default"]=g.exports},b283:function(e,t,r){},c973:function(e,t,r){"use strict";var a=r("4d91");t["a"]={prefixCls:a["a"].string,inputPrefixCls:a["a"].string,defaultValue:[String,Number],value:[String,Number],placeholder:[String,Number],type:{default:"text",type:String},name:String,size:{validator:function(e){return["small","large","default"].includes(e)}},disabled:{default:!1,type:Boolean},readOnly:Boolean,addonBefore:a["a"].any,addonAfter:a["a"].any,prefix:a["a"].any,suffix:a["a"].any,spellCheck:Boolean,autoFocus:Boolean,allowClear:Boolean,lazy:{default:!0,type:Boolean}}}}]);