(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40d3349b"],{"6d78":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{class:{abcdefg:!0},attrs:{bordered:!1}},[r("a-col",{attrs:{md:24,sm:24}},[r("a-descriptions",{attrs:{title:"工资信息",bordered:""}},[e._l(e.registerInfo,(function(t,a){return[r("a-descriptions-item",{attrs:{label:t.key,span:2}},[e._v(e._s(t.value))])]}))],2)],1)],1)},n=[],s=(r("7f7f"),r("96cf"),r("3b8d")),i=r("0fea"),o=r("5d2d"),c=r("ca00"),u={id:"主键",create_by:"创建人",wages_date:"发放日期",username:"账户",name:"姓名",join_time:"入职时间",id_card:"身份证号",work_date:"应出勤天数",salary_date:"计薪天数",job_level:"岗位层级",salary_type:"工资类别",wage_standard:"工资标准",basic_salary:"基本工资",secret_salary:"保密费",perform_salary:"绩效工资",quar_mon_perform_salary:"季度绩效",meal_subsidy:"餐费补贴",commun_subsidy:"通讯补贴",transport_subsidy:"交通补",festival_fee:"节日费",one_child_allowance:"独生补贴",service_year_allowance:"工龄补贴",off_site_allowance:"异地津贴",overtime_allowance:"加班补贴",other_allowance:"其他补贴",post_allowance:"岗位津贴",reward:"奖励",total_subsidy:"补贴合计",reissue_wage:"补发工资",fines:"罚款",attendance_deduction:"考勤扣款",other_deductions:"其它扣款",total_deductions:"扣款合计",payable_salary:"应发工资",old_age_insurance:"养老保险",unemploy_insurance:"失业保险",medicare:"医疗保险",total_social_security:"社保合计",provident_fund:"住房公积金",social_security_provident_fund:"社保公积金合计",taxable_income_in_advance:"提前发放应计税收入",taxable_wages:"计税工资",tax_threshold:"个税起征点",tax:"个人所得税",after_tax_charge:"税后服务费",medicare_fee:"体检费",union_funds:"工会经费",after_tax_deduction:"税后补扣",total_tax_deduction:"扣款合计",after_tax_reissue:"税后补发",paid_wages:"月实付工资",children_education:"子女教育累计(专项扣除)",continuing_education:"继续教育累计(专项扣除)",house_loans:"住房贷款利息累计(专项扣除)",house_rent:"住房租金累计(专项扣除)",elderly_support:"赡养老人累计(专项扣除)",total_special_deductions:"1月至当月专项扣除累计",total_tax_threshold:"1月至当月个税起点累计",total_taxable_wages:"1月至当月计税工资累计",total_personal_tax:"1月至当月应缴个人所得税累计",total_paid_tax:"1月至上月已缴个人所得税累计",bank_no:"银行卡号",phone:"电话号码",comment:"备注",social_security_description:"社保说明",provident_fund_description:"公积金说明",social_security_remarks:"社保备注",provident_fund_remark:"公积金备注",special_deductions_remarks:"专项扣除备注",departure_deduction:"离职还扣"},_={name:"RegisterInfo",components:{},props:{},data:function(){return{previewVisible:!1,previewImage:"",registerInfo:{},spinning:!1}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o["e"]("cur_user"),e.next=3,this.searchQuery();case 3:console.log(t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),searchQuery:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n,s,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=c["n"]("username"),e.next=3,i["queryUserInfoByView"](t);case 3:r=e.sent,a="";try{r=r[0],a=r.realname}catch(d){console.error(d)}return e.prev=6,e.next=9,i["queryWageByUserName"](a,t);case 9:return n=e.sent,delete n.id,e.next=13,i["queryDepartName"](n.depart_name);case 13:for(_ in s=e.sent,n.depart_name=s["name"],n)n[_]={key:u[_],value:n[_]};this.registerInfo=n,e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](6),console.error(e.t0);case 22:return o["g"]("system_register_info_user@".concat(t.username),JSON.stringify(this.registerInfo),3600),e.abrupt("return",this.registerInfo);case 24:case"end":return e.stop()}}),e,this,[[6,19]])})));function t(){return e.apply(this,arguments)}return t}()}},d=_,l=(r("ab32"),r("2877")),p=Object(l["a"])(d,a,n,!1,null,"ef747a32",null);t["default"]=p.exports},ab32:function(e,t,r){"use strict";var a=r("d44e"),n=r.n(a);n.a},d44e:function(e,t,r){}}]);