(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f40de64"],{"05ed":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a-card",{attrs:{loading:t.loading,"body-style":{padding:"20px 24px 8px"},bordered:!1}},[e("div",{staticClass:"chart-card-header"},[e("div",{staticClass:"meta"},[e("span",{staticClass:"chart-card-title"},[t._v(t._s(t.title))]),e("span",{staticClass:"chart-card-action"},[t._t("action")],2)]),e("div",{staticClass:"total"},[e("span",[t._v(t._s(t.total))])])]),e("div",{staticClass:"chart-card-content"},[e("div",{staticClass:"content-fix"},[t._t("default")],2)]),e("div",{staticClass:"chart-card-footer"},[e("div",{staticClass:"field"},[t._t("footer")],2)])])},r=[],o={name:"ChartCard",props:{title:{type:String,default:""},total:{type:String,default:""},loading:{type:Boolean,default:!1}}},i=o,s=(e("7227"),e("2877")),c=Object(s["a"])(i,a,r,!1,null,"bc1c776e",null);n["default"]=c.exports},2375:function(t,n,e){},"2f3a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-header-index-wide"},[e("a-row",{attrs:{gutter:24}},[e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"总流程数",total:t.vwflowTotal}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:t.vwflowMonthlyRatio>0?"up":"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("月同比")]),t._v("\n            "+t._s(t.vwflowMonthlyRatio)+"%\n          ")]),e("trend",{attrs:{flag:t.vwflowDailyRatio>0?"up":"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v("\n            "+t._s(t.vwflowDailyRatio)+"%\n          ")])],1),e("template",{slot:"footer"},[e("trend",{staticStyle:{"margin-right":"16px"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("月流程数")]),t._v("\n            "+t._s(t.vwflowMonthTotal)+"\n          ")]),e("trend",{staticStyle:{"margin-left":"16px"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日流程数")]),t._v("\n            "+t._s(t.vwflowDayTotal)+"\n          ")])],1)],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"总用户数",total:t._f("NumberFormat")(t.vuserTotal)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:t.vNewUserTotal-t.vNewUserTotalLast>0?"up":"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("月同比")]),t._v("\n            "+t._s(((t.vNewUserTotal-t.vNewUserTotalLast)/t.vNewUserTotalLast*100).toFixed(2))+"%\n          ")])],1),e("template",{slot:"footer"},[e("trend",{staticStyle:{"margin-right":"16px"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("月新增用户数")]),t._v("\n            "+t._s(t.vNewUserTotal)+"\n          ")]),e("trend",{staticStyle:{"margin-left":"16px"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日均新增用户")]),t._v("\n            "+t._s(t.vNewUserTotalD)+"\n          ")])],1)],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"总访问量",total:t._f("NumberFormat")(t.vtotal)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:t.mtotalRatio>0?"up":"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("月同比")]),t._v("\n            "+t._s(t.mtotalRatio)+"%\n          ")])],1),e("template",{slot:"footer"},[e("trend",{staticStyle:{"margin-right":"16px"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("月访问量")]),t._v("\n            "+t._s(t.mtotal)+"\n          ")]),e("trend",{staticStyle:{"margin-left":"16px"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("日访问量")]),t._v("\n            "+t._s(t.ctotal)+"\n          ")])],1)],2)],1),e("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"总业务数",total:t._f("NumberFormat")(t.vBussinessTotal)}},[e("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[e("a-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("行政业务")]),t._v("\n            "+t._s(35)+"%\n          ")]),e("trend",{attrs:{flag:"up"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("财务业务")]),t._v("\n            "+t._s(15)+"%\n          ")])],1),e("template",{slot:"footer"},[t._v("\n          业务分布\n          "),e("span",{staticStyle:{"margin-left":"5px"}},[t._v("行政、财务、任务、博客、文档")])])],2)],1)],1),e("a-card",{attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[e("div",{staticClass:"salesCard"},[e("a-tabs",{attrs:{size:"large",defaultActiveKey:"1","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}},on:{change:t.getData},model:{value:t.activeKey,callback:function(n){t.activeKey=n},expression:"activeKey"}},[e("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[e("div",{staticClass:"extra-item"},[e("a-tag",{attrs:{color:"cyan"},on:{click:function(n){return t.reloadData()}}},[t._v(" 刷 新 ")])],1)]),e("a-tab-pane",{key:"1",attrs:{loading:"true",tab:"我的待办"}},[[e("div",{staticStyle:{top:"50px"}},[e("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[e("div",{staticClass:"spin-content"})])],1),e("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.columns,dataSource:t.dataWaitList,pagination:!1},scopedSlots:t._u([{key:"type",fn:function(n,a){return e("a",{},[e("a-menu-item",[e("a",{attrs:{"data-info":JSON.stringify(a)},on:{click:function(n){return t.handleDetailWF(a)}}},[e("span",{domProps:{innerHTML:t._s(a.type)}})])])],1)}},{key:"topic",fn:function(n,a){return e("a",{},[e("a-menu-item",[e("a",{staticStyle:{color:"#303030"},attrs:{"data-info":JSON.stringify(a)},on:{click:function(n){return t.handleDetailWF(a)}}},[e("span",{staticStyle:{color:"#303030"},domProps:{innerHTML:t._s(a.topic)}})])])],1)}},{key:"name",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.name,attrs:{color:a.name.length>5?"geekblue":"green"},on:{click:function(n){return t.handleDetailWF(a)}}},[t._v(t._s(a.name.toUpperCase()))])],1)}},{key:"username",fn:function(n){return e("span",{},t._l(n,(function(n){return e("a-tag",{key:n,attrs:{color:"admin"===n?"volcano":n.length>5?"geekblue":"green"}},[t._v(t._s(n))])})),1)}},{key:"proponents",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.proponents,attrs:{color:"volcano"}},[t._v("\n                  "+t._s(a.proponents)+"\n                ")])],1)}},{key:"create_time",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_time,attrs:{color:"red"}},[t._v(t._s(a.create_time))])],1)}}])})]],2),e("a-tab-pane",{key:"2",attrs:{loading:"true",tab:"我的已办"}},[[e("div",{staticStyle:{top:"50px"}},[e("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[e("div",{staticClass:"spin-content"})])],1),e("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.columns,dataSource:t.dataDoneList,pagination:!1},scopedSlots:t._u([{key:"type",fn:function(n,a){return e("a",{},[e("a-menu-item",[e("a",{attrs:{"data-info":JSON.stringify(a)},on:{click:function(n){return t.handleDetailWF(a)}}},[e("span",{domProps:{innerHTML:t._s(a.type)}})])])],1)}},{key:"topic",fn:function(n,a){return e("a",{},[e("a-menu-item",[e("a",{staticStyle:{color:"#303030"},attrs:{"data-info":JSON.stringify(a)},on:{click:function(n){return t.handleDetailWF(a)}}},[e("span",{staticStyle:{color:"#303030"},domProps:{innerHTML:t._s(a.topic)}})])])],1)}},{key:"name",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.name,attrs:{color:a.name.length>5?"geekblue":"green"},on:{click:function(n){return t.handleDetailWF(a)}}},[t._v(t._s(a.name))])],1)}},{key:"username",fn:function(n,a){return e("span",{},t._l(a.username,(function(n){return e("a-tag",{key:n,attrs:{color:"admin"===n?"volcano":n.length>5?"geekblue":"green"}},[t._v(t._s(n))])})),1)}},{key:"proponents",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.proponents,attrs:{color:"volcano"}},[t._v("\n                  "+t._s(a.proponents)+"\n                ")])],1)}},{key:"create_time",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_time,attrs:{color:"blue"}},[t._v(t._s(a.create_time))])],1)}}])})]],2),e("a-tab-pane",{key:"5",attrs:{loading:"true",tab:"行政公告"}},[[e("div",{staticStyle:{top:"50px"}},[e("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[e("div",{staticClass:"spin-content"})])],1),e("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataAnnounceList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.announce_type,attrs:{color:"cyan"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.announce_type))])],1)}},{key:"ctitle",fn:function(n,a){return e("span",{},[e("a",{key:a.title,staticStyle:{color:"#303030"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.title))])])}},{key:"create_by",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_by,attrs:{color:"geekblue"}},[t._v("\n                  "+t._s(a.create_by)+"\n                ")])],1)}},{key:"create_time",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_time,attrs:{color:"pink"}},[t._v("\n                  "+t._s(a.create_time)+"\n                ")])],1)}}])})]],2),e("a-tab-pane",{key:"6",attrs:{loading:"true",tab:"红头文件"}},[[e("div",{staticStyle:{top:"50px"}},[e("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[e("div",{staticClass:"spin-content"})])],1),e("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataHeadList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.announce_type,attrs:{color:"cyan"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.announce_type))])],1)}},{key:"ctitle",fn:function(n,a){return e("span",{},[e("a",{key:a.title,staticStyle:{color:"#303030"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.title))])])}},{key:"create_by",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_by,attrs:{color:"geekblue"}},[t._v("\n                  "+t._s(a.create_by)+"\n                ")])],1)}},{key:"create_time",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_time,attrs:{color:"pink"}},[t._v("\n                  "+t._s(a.create_time)+"\n                ")])],1)}}])})]],2),e("a-tab-pane",{key:"7",attrs:{loading:"true",tab:"新闻资讯"}},[[e("div",{staticStyle:{top:"50px"}},[e("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[e("div",{staticClass:"spin-content"})])],1),e("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataNewsList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.announce_type,attrs:{color:"cyan"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.announce_type))])],1)}},{key:"ctitle",fn:function(n,a){return e("span",{},[e("a",{key:a.title,staticStyle:{color:"#303030"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.title))])])}},{key:"create_by",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_by,attrs:{color:"geekblue"}},[t._v("\n                  "+t._s(a.create_by)+"\n                ")])],1)}},{key:"create_time",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_time,attrs:{color:"pink"}},[t._v("\n                  "+t._s(a.create_time)+"\n                ")])],1)}}])})]],2),e("a-tab-pane",{key:"8",attrs:{loading:"true",tab:"奖罚通报"}},[[e("div",{staticStyle:{top:"50px"}},[e("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[e("div",{staticClass:"spin-content"})])],1),e("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataNoticeList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.announce_type,attrs:{color:"cyan"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.announce_type))])],1)}},{key:"ctitle",fn:function(n,a){return e("span",{},[e("a",{key:a.title,staticStyle:{color:"#303030"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.title))])])}},{key:"create_by",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_by,attrs:{color:"geekblue"}},[t._v("\n                  "+t._s(a.create_by)+"\n                ")])],1)}},{key:"create_time",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_time,attrs:{color:"pink"}},[t._v("\n                  "+t._s(a.create_time)+"\n                ")])],1)}}])})]],2),e("a-tab-pane",{key:"9",attrs:{loading:"true",tab:"市场观察"}},[[e("div",{staticStyle:{top:"50px"}},[e("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:t.spinning}},[e("div",{staticClass:"spin-content"})])],1),e("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:t.announce_columns,dataSource:t.dataViewsList,pagination:!1},scopedSlots:t._u([{key:"announce_type",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.announce_type,attrs:{color:"cyan"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.announce_type))])],1)}},{key:"ctitle",fn:function(n,a){return e("span",{},[e("a",{key:a.title,staticStyle:{color:"#303030"},on:{click:function(n){return t.handleAnnounceInfo(a,a.table_name)}}},[t._v(t._s(a.title))])])}},{key:"create_by",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_by,attrs:{color:"geekblue"}},[t._v("\n                  "+t._s(a.create_by)+"\n                ")])],1)}},{key:"create_time",fn:function(n,a){return e("span",{},[e("a-tag",{key:a.create_time,attrs:{color:"blue"}},[t._v("\n                  "+t._s(a.create_time)+"\n                ")])],1)}}])})]],2)],1)],1)]),e("a-row",[[e("div",[e("a-back-top")],1)]],2)],1)},r=[],o=(e("96cf"),e("3b8d")),i=e("05ed"),s=e("611e"),c=e("4ec3"),l=e("0fea"),u=e("5d2d"),p=e("ca00");window.manageAPI=l,window.storage=u,window.tools=p;var d=[],f=[],y=window.wflow_columns,m=window.announce_columns,_={name:"Analysis",components:{ChartCard:i["default"],Trend:s["a"]},data:function(){var t=this.$createElement;return{loading:!0,vtotal:0,ctotal:0,mtotal:0,mtotalLast:0,mtotalRatio:0,center:null,rankList:d,barData:f,loginfo:{},visitFields:["ip","visit"],visitInfo:[],vuserTotal:"-",vNewUserTotal:"-",vNewUserTotalD:"-",vNewUserTotalLast:"",vwflowTotal:"-",vwflowMonthTotal:"-",vwflowDayTotal:"-",vwflowDailyRatio:"-",vwflowMonthlyRatio:"-",vBussinessTotal:"-",indicator:t("a-icon",{attrs:{type:"loading",spin:!0},style:"font-size: 24px"}),dataWaitList:[],dataDoneList:[],dataAnnounceList:[],dataNoticeList:[],dataHeadList:[],dataNewsList:[],dataViewsList:[],dataNotice:[],columns:y,announce_columns:m,activeKey:"1",loadingMore:!1,showLoadingMore:!0,spinning:!1}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initLogInfo();case 2:return t.next=4,this.getData(1);case 4:this.loading=!this.loading,window.keepAlive(u,l);case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getData();case 2:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.getData(this,n,u,l);case 2:return t.prev=2,t.next=5,window.sendTopic("zhaoziyu","hello world!!! current timestamp : "+(new Date).getTime());case 5:return t.next=7,window.queryTopic("zhaoziyu");case 7:n=t.sent,console.log(n),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,this,[[2,11]])})));function n(n){return t.apply(this,arguments)}return n}(),transUsername:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.transUsername(n,p,u,l);case 2:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),reloadData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.reloadData(this,p,u,l);case 2:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),reloadVisitData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initLogInfo();case 2:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),handleDetailWF:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.handleDetailWF(this,n,u);case 2:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),handleAnnounceInfo:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.handleAnnounceInfo(this,n,e,u);case 2:case"end":return t.stop()}}),t,this)})));function n(n,e){return t.apply(this,arguments)}return n}(),initLogInfo:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.initLogInfo(this,c["t"],c["A"],l);case 2:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},g=_,v=(e("9fd7"),e("2877")),k=Object(v["a"])(g,a,r,!1,null,"3fbcdc8d",null);n["default"]=k.exports},5748:function(t,n,e){},7227:function(t,n,e){"use strict";var a=e("2375"),r=e.n(a);r.a},"9fd7":function(t,n,e){"use strict";var a=e("5748"),r=e.n(a);r.a}}]);