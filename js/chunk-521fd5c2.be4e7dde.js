(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-521fd5c2","chunk-521fd5c2","chunk-521fd5c2"],{"004c":function(t,e,a){"use strict";a.r(e);var n=a("1a15"),i=(a("7f7f"),a("96cf"),a("3b8d")),c=a("ca00"),o=(a("5880"),a("b445")),s=a("0fea"),r=(a("d91f"),a("7104")),l={name:"Workplace",components:{PageLayout:o["default"]},data:function(){var t=this;return{timeFix:Object(c["r"])(),welcome:Object(c["v"])(),postName:"",departName:"",avatar:"",user:{},welcomeStyle:{},postStyle:{"margin-top":"-5px","margin-left":"-113px",flex:"auto",position:"absolute",left:"92px",transform:"scale(0.8)"},projects:[],loading:!0,radarLoading:!0,activities:[],nodelist:[],teams:[],yundisk:[{name:"全部",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-all.svg",click:function(){}},{name:"文档",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-doc.svg",click:function(){}},{name:"图片",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-pic.svg",click:function(){}},{name:"视频",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-video.svg",click:function(){}},{name:"音乐",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-music.svg",click:function(){}}],video:[{name:"活动视频",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-activiti.svg",click:function(){}},{name:"短视频",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-photo.svg",click:function(){}},{name:"纪录片",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-log.svg",click:function(){}},{name:"电影",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-movie.svg",click:function(){}}],courses:[{name:"全部课程",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-course-01.svg",click:function(){}},{name:"最新课程",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-course-02.svg",click:function(){}},{name:"热门课程",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-course-hot.svg",click:function(){}},{name:"我的课程",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-course-03.svg",click:function(){}}],docs:[{name:"文档中心",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/内容_文档.png",click:function(){t.$router.push({path:"/document/center",fullPath:"/document/center",meta:{title:"文档中心"}})}},{name:"我的文档",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/个人中心.png",click:function(){t.$router.push({path:"/document/mine",fullPath:"/document/mine",meta:{title:"我的文档"}})}},{name:"热门文档",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/地球仪.png",click:function(){t.$router.push({path:"/document/hot",fullPath:"/document/hot",meta:{title:"热门文档"}})}},{name:"规章制度",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/链接.png",click:function(){t.$router.push({path:"/document/rule",fullPath:"/document/rule",meta:{title:"规章制度"}})}}],dochub:[{name:"专业资料",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-file-01.svg",click:function(){}},{name:"实用文档",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-file-02.svg",click:function(){}},{name:"资格考试",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-file-03.svg",click:function(){}},{name:"精品文档",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-file-04.svg",click:function(){}},{name:"个人中心",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-file-center.svg",click:function(){}}],blog:[{name:"热门博客",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-blog-hot.svg",href:"/blog/hot",click:function(){}},{name:"知名博主",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-blog-01.svg",href:"/blog/writer",click:function(){}},{name:"博文排行",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-rank-01.svg",href:"/blog/rank",click:function(){}},{name:"博客中心",avatar:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-center-01.svg",href:"/blog/center",click:function(){t.$router.push({path:"/blog/center",fullPath:"/blog/center",meta:{title:"博客中心"}})}}],radarData:[]}},computed:{userInfo:function(){return this.$store.getters.userInfo}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.user=this.userInfo,console.log("this.avatar :"+this.avatar);try{s["getRoleList"]().then((function(t){console.log("workplace -> call manageAPI.getRoleList()",t)}))}catch(e){console.log(e)}try{s["getServiceList"]().then((function(t){console.log("workplace -> call manageAPI.getServiceList()",t)}))}catch(e){console.log(e)}try{this.handlePostStyle()}catch(e){console.log(e)}return t.prev=5,t.next=8,s["queryUserInfoByView"](this.user.username);case 8:this.v_user=t.sent,this.postName=this.v_user[0]["post"],this.departName=this.v_user[0]["name"],this.address=this.v_user[0]["address"],this.bio=this.v_user[0]["bio"],this.avatar=window._CONFIG["imgDomainURL"]+"/"+this.v_user[0]["avatar"],t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](5),console.log("工作台设置员工岗位信息/部门信息异常："+t.t0);case 19:return t.prev=19,t.next=22,s["queryDynamicByUser"](this.user.username);case 22:this.nodelist=t.sent,t.next=28;break;case 25:t.prev=25,t.t1=t["catch"](19),console.log(t.t1);case 28:console.log("动态信息："+JSON.stringify(this.nodelist));case 29:case"end":return t.stop()}}),t,this,[[5,16],[19,25]])})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){try{this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar(),this.handlePostStyle()}catch(t){console.log(t)}},methods:{getProjects:function(){var t=this;this.$http.get("/api/list/search/projects").then((function(e){t.projects=e.result&&e.result.data,t.loading=!1}))},getActivity:function(){var t=this;this.$http.get("/api/workplace/activity").then((function(e){t.activities=e.result}))},getTeams:function(){var t=this;this.$http.get("/api/workplace/teams").then((function(e){t.teams=e.result}))},handlePostStyle:function(){this.welcome.length>76&&(this.postStyle={display:"none"}),this.welcome.length>200&&(this.welcomeStyle={"font-size":"13px"}),this.welcome.length>250&&(this.welcomeStyle={"font-size":"12px"}),this.welcome.length>270&&(this.welcomeStyle={"font-size":"12px"},this.welcome=this.welcome.substring(0,270)+"...")},handleMyCenter:function(){this.$router.push("/account/center")},handleWait:function(){this.$router.push("/workflow/waiting")},handleDone:function(){this.$router.push("/workflow/done")},handleAnnounce:function(){this.$router.push("/workflow/announce")},handleCollect:function(){this.$router.push("/workflow/collection")},handleMessage:function(){this.$router.push("/account/settings/notification")},handleLeave:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e="/online/cgformList/b0ceb7cfb2b0487a96e03f50c413d762",this.$router.push({path:e,fullPath:e,meta:{title:"请假申请"}});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleRecruitApply:function(){var t="/online/cgformList/5de397c1df3341ee92fbd27e1dcf543f";this.$router.push({path:t,fullPath:t,meta:{title:"招聘申请"}})},handleSignApply:function(){var t="/online/cgformList/24f9d4d1b3b545688af928b3224eab37";this.$router.push({path:t,fullPath:t,meta:{title:"入职申请"}})},handleResignApply:function(){var t="/online/cgformList/fdf189685d2b4f2f8497b5b6148d0e29";this.$router.push({path:t,fullPath:t,meta:{title:"离职申请"}})},handleGoOut:function(){var t="/online/cgformList/933e21cf445440abb8cfdae366082a62";this.$router.push({path:t,fullPath:t,meta:{title:"外出申请"}})},handleOvertime:function(){var t="/online/cgformList/9ed5bc42eb934bbe8dac16ed1a3b103f";this.$router.push({path:t,fullPath:t,meta:{title:"加班申请"}})},handleDepartManage:function(){var t="/isystem/depart";this.$router.push({path:t,fullPath:t,meta:{title:"部门管理"}})},handleRoleSetupManage:function(){var t="/isystem/roleUserList";this.$router.push({path:t,fullPath:t,meta:{title:"角色维护"}})},handleAttendance:function(){var t="/online/cgformList/b0fee76c2ee84baeb9494b196b779e3e";this.$router.push({path:t,fullPath:t,meta:{title:"考勤异常"}})},handleFileBorrow:function(){var t="/online/cgformList/3da23c7955d84465a759d0f1830a0d00";this.$router.push({path:t,fullPath:t,meta:{title:"档案及证照借阅"}})},handleUseSealCon:function(){var t="/online/cgformList/dd78c4c8a59e4ee3bd93ec011a3f6b4c";this.$router.push({path:t,fullPath:t,meta:{title:"用印申请(合同)"}})},handleMireannaApply:function(){var t="/online/cgformList/e7ee0cd851454ed1a17454c31116b012";this.$router.push({path:t,fullPath:t,meta:{title:"物品领用"}})},handleUseSealCom:function(){var t="/online/cgformList/cfd4ee2d60fa48f585c157d524b0a108";this.$router.push({path:t,fullPath:t,meta:{title:"用印申请(非合同)"}})},handleWorkContact:function(){var t="/online/cgformList/9d46d11ac70f45cca223bf2b2880b099";this.$router.push({path:t,fullPath:t,meta:{title:"工作联系单"}})},handleAskReport:function(){var t="/online/cgformList/38f5a6c423df480e860e09032e17f1ae";this.$router.push({path:t,fullPath:t,meta:{title:"请示报告"}})},handleSealDeclare:function(){var t="/online/cgformList/e412b58db17b4cbf8cb9833c118c2d3b";this.$router.push({path:t,fullPath:t,meta:{title:"印章借阅"}})},handleWriteBlog:function(){var t="/blog/center";this.$router.push({path:t,fullPath:t,meta:{title:"博客中心"}})},handleAblityTest:function(){},handleTeamInfo:function(){},handleTravel:function(){var t="/online/cgformList/62f7122c73c244119e5d4ec8aa170a3d";this.$router.push({path:t,fullPath:t,meta:{title:"出差申请"}})},handleTravelSubsidy:function(){var t="/online/cgformList/6bfb3ee6257a4066b1d26f195da83fe0";this.$router.push({path:t,fullPath:t,meta:{title:"车辆补贴申请"}})},handleDailyFeedback:function(){var t="/online/cgformList/688a9ea8187d461e9e921fd5a5829201";this.$router.push({path:t,fullPath:t,meta:{title:"日报管理"}})},handleBaseFeedback:function(){var t="/online/cgformList/5480de4b82db4b40be8af021caeb6d30";this.$router.push({path:t,fullPath:t,meta:{title:"汇报管理"}})},handleWeekFeedback:function(){var t="/online/cgformList/9c4bf0f4951b44648659a34ead5d31cc";this.$router.push({path:t,fullPath:t,meta:{title:"周报管理"}})},handleMonthFeedback:function(){var t="/online/cgformList/6bf6537008514d319a95330459464f3e";this.$router.push({path:t,fullPath:t,meta:{title:"月报管理"}})},handlePlanTask:function(){var t="/online/cgformList/c98940fae2404cacb6ed4bd0aeffbc6d";this.$router.push({path:t,fullPath:t,meta:{title:"我的计划"}})},handlePlanTaskItem:function(){var t="/online/cgformList/a10f38d1c64343f39560061e4124ba44";this.$router.push({path:t,fullPath:t,meta:{title:"我的任务"}})},handleAddressBook:function(){var t="/address/book";this.$router.push({path:t,fullPath:t,meta:{title:"通讯录"}})},handleUserManage:function(){var t="/isystem/user";this.$router.push({path:t,fullPath:t,meta:{title:"用户管理"}})},handleRoleManage:function(){var t="/isystem/role";this.$router.push({path:t,fullPath:t,meta:{title:"角色管理"}})},handlePostManage:function(){var t="/isystem/position";this.$router.push({path:t,fullPath:t,meta:{title:"职务管理"}})},handleYearFeedback:function(){var t="/online/cgformList/878dd1f28f0b4dfdaa74534eec902c0c";this.$router.push({path:t,fullPath:t,meta:{title:"年度汇报"}})},handleQuarterFeedback:function(){var t="/online/cgformList/89237955a75f4d8c8cb15d30592628fd";this.$router.push({path:t,fullPath:t,meta:{title:"年度汇报"}})},handleRegister:function(){var t="/finance/register";this.$router.push({path:t,fullPath:t,meta:{title:"花名册查询"}})},handleRegisterManage:function(){var t="/finance/registerform/02c2e82c486542df992c3860ad6cd25a";this.$router.push({path:t,fullPath:t,meta:{title:"花名册管理"}})},handleWageQuery:function(){var t="/finance/salary";this.$router.push({path:t,fullPath:t,meta:{title:"工资查看"}})},handleReserveApply:function(){var t="/online/cgformList/c990e98e13124c91aabec84ae149e423";this.$router.push({path:t,fullPath:t,meta:{title:"备用金申请"}})},handlePurchaseApply:function(){var t="/online/cgformList/c23f27d4e1b54b48bc88b4c532ab0dea";this.$router.push({path:t,fullPath:t,meta:{title:"采购申请"}})},handlePaymentApply:function(){var t="/online/cgformList/f48cb4862fde439e9a43ca6c9a7102d3";this.$router.push({path:t,fullPath:t,meta:{title:"付款申请"}})},handleOfficialSeal:function(){var t="/online/cgformList/0ed85356f7f04e048bc540b0047c7559";this.$router.push({path:t,fullPath:t,meta:{title:"用章申请"}})},handleCostReim:function(){var t="/online/cgformList/7542962e9a31442eb9e4ddd887891f81";this.$router.push({path:t,fullPath:t,meta:{title:"费用报销"}})},handleWageManage:function(){var t="/finance/salaryform/237fa97d3c974bdbb36090d0dd2f3a39";this.$router.push({path:t,fullPath:t,meta:{title:"工资管理"}})},handleWageBill:function(){var t="/finance/wages";this.$router.push({path:t,fullPath:t,meta:{title:"工资单"}})},handleMenuManage:function(){var t="/isystem/permission";this.$router.push({path:t,fullPath:t,meta:{title:"菜单管理"}})},handleTableManage:function(){var t="/online/cgform";this.$router.push({path:t,fullPath:t,meta:{title:"表单管理"}})},handleDictManage:function(){var t="/isystem/dict";this.$router.push({path:t,fullPath:t,meta:{title:"数据字典"}})},handleQuestion:function(){var t="/qslist?username=".concat(this.userInfo.username);this.$router.push({path:t,fullPath:t,meta:{title:"问卷调查"}})},handleOperateLogManage:function(){var t="/isystem/log";this.$router.push({path:t,fullPath:t,meta:{title:"问卷调查"}})},initRadar:function(){var t=this;this.radarLoading=!0,this.$http.get("/api/workplace/radar").then((function(e){var a=(new r.View).source(e.result);a.transform({type:"fold",fields:["个人","团队","部门"],key:"user",value:"score"}),t.radarData=a.rows,t.radarLoading=!1}))}}},h=l,u=(a("3def"),a("2877")),d=Object(u["a"])(h,n["a"],n["b"],!1,null,"892db928",null);e["default"]=d.exports},"3def":function(t,e,a){"use strict";var n=a("f07b"),i=a.n(n);i.a},f07b:function(t,e,a){}}]);