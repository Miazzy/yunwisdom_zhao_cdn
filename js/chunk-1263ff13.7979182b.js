(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1263ff13","chunk-1263ff13"],{"017e":function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r("22b6");function o(t,n){return e["a"].post("index/index/bindClientId",{client_id:t,uid:n})}},"0610":function(t,n,r){"use strict";r.d(n,"b",(function(){return u})),r.d(n,"d",(function(){return c})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return a}));var e=r("22b6"),o=r("2f14");function u(t){return e["a"].post("project/file",t)}function c(){return Object(o["c"])("project/file/uploadFiles")}function i(t){return e["a"].post("project/file/recovery",{fileCode:t})}function a(t){return e["a"].post("project/file/delete",{fileCode:t})}},"1b80":function(t,n,r){"use strict";n["a"]={data:function(){return{pagination:{page:1,pageSize:10,total:0,showTotal:function(t,n){return"共 ".concat(t," 条")}}}},computed:{requestData:function(){return{page:this.pagination.page,pageSize:this.pagination.pageSize}}},methods:{init:function(){},pageChange:function(t){this.pagination.page=t,this.requestData.page=t.current,this.init()}}}},"259a":function(t,n,r){"use strict";r.d(n,"b",(function(){return u})),r.d(n,"a",(function(){return c}));var e=r("22b6"),o=r("2f14");function u(){return Object(o["g"])("index/oauth/dingTalkOauth")}function c(t){return e["a"].post("index/oauth/dingTalkLoginByCode",t)}},"28c2":function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r("22b6");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",o="getnode";return"save"===r&&(o="save"),e["a"].post("project/auth/apply",{action:o,id:t,nodes:n})}},5127:function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return u}));var e=r("22b6");function o(t){return e["a"].post("project/department",t)}function u(t){return e["a"].post("project/department/delete",{departmentCode:t})}},"5f8b":function(t,n,r){"use strict";r.d(n,"d",(function(){return o})),r.d(n,"a",(function(){return u})),r.d(n,"e",(function(){return c})),r.d(n,"c",(function(){return i})),r.d(n,"b",(function(){return a}));var e=r("22b6");function o(t){return e["a"].post("project/task_workflow",t)}function u(t){return e["a"].post("project/task_workflow/_getTaskWorkflowRules",t)}function c(t){return e["a"].post("project/task_workflow/save",t)}function i(t){return e["a"].post("project/task_workflow/edit",t)}function a(t){return e["a"].post("project/task_workflow/delete",t)}},"64de":function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"d",(function(){return u})),r.d(n,"e",(function(){return c})),r.d(n,"c",(function(){return i})),r.d(n,"b",(function(){return a})),r.d(n,"f",(function(){return s}));var e=r("22b6");function o(t){return e["a"].post("project/notify/_clearAll",t)}function u(t){return e["a"].post("project/notify",t)}function c(){return e["a"].post("project/notify/noReads")}function i(t){return e["a"].post("project/notify/delete",{id:t})}function a(t){return e["a"].post("project/notify/batchDel",{ids:t})}function s(t){return e["a"].post("project/notify/setReadied",{ids:t})}},"6be7":function(t,n,r){"use strict";r.d(n,"f",(function(){return o})),r.d(n,"l",(function(){return u})),r.d(n,"e",(function(){return c})),r.d(n,"g",(function(){return i})),r.d(n,"k",(function(){return a})),r.d(n,"i",(function(){return s})),r.d(n,"d",(function(){return f})),r.d(n,"j",(function(){return p})),r.d(n,"h",(function(){return d})),r.d(n,"c",(function(){return l})),r.d(n,"b",(function(){return j})),r.d(n,"a",(function(){return v}));var e=r("22b6");function o(t){return e["a"].post("project/project",t)}function u(t){return e["a"].post("project/project/selfList",t)}function c(t){var n="project/project/save";return t.projectCode&&(n="project/project/edit"),e["a"].post(n,t)}function i(t){return e["a"].post("project/project/quit",{projectCode:t})}function a(t){return e["a"].post("project/project/recycle",{projectCode:t})}function s(t){return e["a"].post("project/project/recovery",{projectCode:t})}function f(t){return e["a"].post("project/project/archive",{projectCode:t})}function p(t){return e["a"].post("project/project/recoveryArchive",{projectCode:t})}function d(t){return e["a"].post("project/project/read",{projectCode:t})}function l(t){return e["a"].post("project/project/analysis",t)}function j(t){return e["a"].post("project/project/_projectStats",t)}function v(t){return e["a"].post("project/project/_getProjectReport",t)}},8743:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"b",(function(){return u})),r.d(n,"a",(function(){return c}));var e=r("22b6");function o(t){return e["a"].post("project/project_info",t)}function u(t){var n="project/project_info/save";return t.infoCode&&(n="project/project_info/edit"),e["a"].post(n,t)}function c(t){return e["a"].post("project/project_info/delete",t)}},"9cdf":function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r("22b6");function o(t){return e["a"].post("project/project_template",t)}},"9f09":function(t,n,r){"use strict";r.d(n,"d",(function(){return o})),r.d(n,"a",(function(){return u})),r.d(n,"g",(function(){return c})),r.d(n,"f",(function(){return i})),r.d(n,"e",(function(){return a})),r.d(n,"c",(function(){return s})),r.d(n,"b",(function(){return f}));var e=r("22b6");function o(t){return e["a"].post("project/task_stages",t)}function u(t){return e["a"].post("project/task_stages/_getAll",t)}function c(t){return e["a"].post("project/task_stages/tasks",t)}function i(t,n,r){return e["a"].post("project/task_stages/sort",{preCode:t,nextCode:n,projectCode:r})}function a(t){return e["a"].post("project/task_stages/save",t)}function s(t){return e["a"].post("project/task_stages/edit",t)}function f(t){return e["a"].post("project/task_stages/delete",{code:t})}},b5ef:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));r("f559"),r("ac6a"),r("28a5"),r("a481");var e={data:function(){var t=this;return{fieldHrefSlots:[],hrefComponent:{model:{title:"",width:"100%",visible:!1,destroyOnClose:!0,style:{top:0,left:0,height:"100%",margin:0,padding:0},bodyStyle:{padding:"8px",height:"calc(100vh - 108px)",overflow:"auto",overflowX:"hidden"},cancelButtonProps:{style:{display:"none"}},afterClose:function(){document.body.style.overflow=null}},on:{ok:function(){return t.hrefComponent.model.visible=!1},cancel:function(){return t.hrefComponent.model.visible=!1}},is:null,params:{}}}},methods:{handleClickFieldHref:function(t,n){var r=t.href,e=/(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/,o=/\.vue(\?.*)?$/;"string"===typeof r&&(r=r.trim().replace(/\${([^}]+)?}/g,(function(t,r){return n[r]})),e.test(r)?window.open(r,"_blank"):o.test(r)?this.openHrefCompModal(r):this.$router.push(r))},openHrefCompModal:function(t){var n=t.indexOf("?"),e=t;if(-1!==n){e=t.substring(0,n);var o=t.substring(n+1,t.length),u=o.split("&"),c={};u.forEach((function(t){var n=t.split("=");c[n[0]]=n[1]})),this.hrefComponent.params=c}else this.hrefComponent.params={};this.hrefComponent.model.visible=!0,this.hrefComponent.model.title="@/views/"+e,this.hrefComponent.is=function(){return r("9dac")("./"+(e.startsWith("/")?e.slice(1):e))},setTimeout((function(){document.body.style.overflow="hidden"}),300)}}}},b5f1:function(t,n,r){"use strict"},ba2f:function(t,n,r){"use strict";r.d(n,"a",(function(){return u}));var e=r("22b6"),o=r("4360");function u(t){return e["a"].post("project/organization/_getOrgList",t).then((function(t){return t.data&&o["a"].dispatch("setOrganizationList",t.data),Promise.resolve(t)}))}},bade:function(t,n,r){"use strict";function e(t){try{return JSON.parse(t)}catch(n){console.log("err",n.message)}return[]}r.d(n,"a",(function(){return e}))},bc5b:function(t,n,r){"use strict";r.d(n,"g",(function(){return o})),r.d(n,"f",(function(){return u})),r.d(n,"e",(function(){return c})),r.d(n,"h",(function(){return i})),r.d(n,"j",(function(){return a})),r.d(n,"d",(function(){return s})),r.d(n,"a",(function(){return f})),r.d(n,"i",(function(){return p})),r.d(n,"b",(function(){return d})),r.d(n,"c",(function(){return l}));var e=r("22b6");function o(t){return e["a"].post("project/project_version",t)}function u(t){return e["a"].post("project/project_version/_getVersionTask",t)}function c(t){return e["a"].post("project/project_version/_getVersionLog",t)}function i(t){return e["a"].post("project/project_version/read",t)}function a(t){return e["a"].post("project/project_version/save",t)}function s(t){return e["a"].post("project/project_version/edit",t)}function f(t){return e["a"].post("project/project_version/addVersionTask",t)}function p(t){return e["a"].post("project/project_version/removeVersionTask",t)}function d(t){return e["a"].post("project/project_version/changeStatus",t)}function l(t){return e["a"].post("project/project_version/delete",t)}},c030:function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return u})),r.d(n,"d",(function(){return c})),r.d(n,"c",(function(){return i}));var e=r("22b6");function o(t,n){return e["a"].post("project/project_member/inviteMember",{memberCode:t,projectCode:n})}function u(t){return e["a"].post("project/project_member/_joinByInviteLink",{inviteCode:t})}function c(t,n){return e["a"].post("project/project_member/removeMember",{memberCode:t,projectCode:n})}function i(t){return e["a"].post("project/project_member/index",t)}},c13a:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return u})),r.d(n,"b",(function(){return c})),r.d(n,"a",(function(){return i}));var e=r("22b6");function o(t){return e["a"].post("project/project_features",t)}function u(t){return e["a"].post("project/project_features/save",t)}function c(t){return e["a"].post("project/project_features/edit",t)}function i(t){return e["a"].post("project/project_features/delete",t)}},c82c:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));r("2fdb"),r("6762"),r("ac4d"),r("8a81"),r("ac6a");var e=r("9fb0");function o(t,n){return!!u(t,n)||c(t)}function u(t,n){console.log("页面权限禁用--NODE--开始");var r=[];try{var e=n;if(e){var o=e.permissionList,u=!0,c=!1,i=void 0;try{for(var a,s=o[Symbol.iterator]();!(u=(a=s.next()).done);u=!0){var f=a.value;"2"==f.type&&r.push(f)}}catch(y){c=!0,i=y}finally{try{u||null==s.return||s.return()}finally{if(c)throw i}}}}catch(_){}if(null===r||""===r||void 0===r||r.length<=0)return!1;for(var p=[],d=0,l=r;d<l.length;d++){var j=l[d];"2"==j.type&&p.push(j.action)}if(!p.includes(t))return!1;var v=!0,b=!1,h=void 0;try{for(var g,k=r[Symbol.iterator]();!(v=(g=k.next()).done);v=!0){var m=g.value;if(t===m.action)return console.log("页面权限禁用--NODE--生效"),!0}}catch(y){b=!0,h=y}finally{try{v||null==k.return||k.return()}finally{if(b)throw h}}return!1}function c(t){console.log("页面禁用权限--Global--开始");var n=[],r=[],o=JSON.parse(sessionStorage.getItem(e["n"])||"[]"),u=!0,c=!1,i=void 0;try{for(var a,s=o[Symbol.iterator]();!(u=(a=s.next()).done);u=!0){var f=a.value;"2"==f.type&&n.push(f)}}catch(I){c=!0,i=I}finally{try{u||null==s.return||s.return()}finally{if(c)throw i}}var p=JSON.parse(sessionStorage.getItem(e["m"])||"[]"),d=!0,l=!1,j=void 0;try{for(var v,b=p[Symbol.iterator]();!(d=(v=b.next()).done);d=!0){var h=v.value;"2"==h.type&&r.push(h)}}catch(I){l=!0,j=I}finally{try{d||null==b.return||b.return()}finally{if(l)throw j}}var g=!1,k=!1;if(null!=r&&""!=r&&void 0!=r&&r.length>0){var m=!0,y=!1,_=void 0;try{for(var C,w=r[Symbol.iterator]();!(m=(C=w.next()).done);m=!0){var T=C.value;if(t===T.action){if("0"==T.status){k=!0;break}g=!0;break}}}catch(I){y=!0,_=I}finally{try{m||null==w.return||w.return()}finally{if(y)throw _}}}if(k)return!1;if(null===n||""===n||void 0===n||n.length<=0)return g;for(var S=[],x=0,O=n;x<O.length;x++){var L=O[x];"2"==L.type&&S.push(L.action)}if(S.includes(t)){var z=!0,A=!1,B=void 0;try{for(var D,P=n[Symbol.iterator]();!(z=(D=P.next()).done);z=!0){var W=D.value;t===W.action&&(console.log("页面权限解除禁用--Global--生效"),g=!1)}}catch(I){A=!0,B=I}finally{try{z||null==P.return||P.return()}finally{if(A)throw B}}return g}return g}},c995:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r("22b6");function o(t){return e["a"].post("project/task_member",t)}},ca8d:function(t,n,r){"use strict";r.d(n,"j",(function(){return o})),r.d(n,"h",(function(){return u})),r.d(n,"o",(function(){return c})),r.d(n,"t",(function(){return i})),r.d(n,"r",(function(){return a})),r.d(n,"m",(function(){return s})),r.d(n,"u",(function(){return f})),r.d(n,"q",(function(){return p})),r.d(n,"b",(function(){return d})),r.d(n,"c",(function(){return l})),r.d(n,"s",(function(){return j})),r.d(n,"p",(function(){return v})),r.d(n,"l",(function(){return b})),r.d(n,"k",(function(){return h})),r.d(n,"e",(function(){return g})),r.d(n,"d",(function(){return k})),r.d(n,"i",(function(){return m})),r.d(n,"a",(function(){return y})),r.d(n,"n",(function(){return _})),r.d(n,"g",(function(){return C})),r.d(n,"f",(function(){return w}));var e=r("22b6");function o(t){return e["a"].post("project/task",t)}function u(t){return e["a"].post("project/task/getListByTaskTag",t)}function c(t){return e["a"].post("project/task/selfList",t)}function i(t){return e["a"].post("project/task/taskSources",t)}function a(t){return e["a"].post("project/task/sort",t)}function s(t){return e["a"].post("project/task/save",t)}function f(t){return e["a"].post("project/task/taskToTags",t)}function p(t){return e["a"].post("project/task/setTag",t)}function d(t){return e["a"].post("project/task/assignTask",t)}function l(t){return e["a"].post("project/task/batchAssignTask",t)}function j(t,n){return e["a"].post("project/task/taskDone",{taskCode:t,done:n})}function v(t,n){return e["a"].post("project/task/setPrivate",{taskCode:t,private:n})}function b(t){return e["a"].post("project/task/recycleBatch",t)}function h(t){return e["a"].post("project/task/recovery",{taskCode:t})}function g(t){return e["a"].post("project/task/delete",{taskCode:t})}function k(t){return e["a"].post("project/task/dateTotalForProject",t)}function m(t){return e["a"].post("project/project/getLogBySelfProject",t)}function y(t){return e["a"].post("project/task/_taskWorkTimeList",t)}function _(t){return e["a"].post("project/task/saveTaskWorkTime",t)}function C(t){return e["a"].post("project/task/editTaskWorkTime",t)}function w(t){return e["a"].post("project/task/delTaskWorkTime",t)}},cff3:function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return u}));var e=r("22b6");r("2f14");function o(t,n){return e["a"].post("project/department_member/removeMember",{accountCode:t,departmentCode:n})}function u(t){return e["a"].post("project/department_member/detail",t)}},db9e6:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return u})),r.d(n,"b",(function(){return c})),r.d(n,"a",(function(){return i}));var e=r("22b6");function o(t){return e["a"].post("project/task_tag",t)}function u(t){return e["a"].post("project/task_tag/save",t)}function c(t){return e["a"].post("project/task_tag/edit",t)}function i(t){return e["a"].post("project/task_tag/delete",{tagCode:t})}},e55b:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r("22b6");function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"collect";return e["a"].post("project/project_collect/collect",{type:n,projectCode:t})}},efb5:function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return u})),r.d(n,"c",(function(){return c}));var e=r("22b6");function o(t){return e["a"].post("index/index/install",t)}function u(){return e["a"].post("index/index/checkInstall")}function c(t){return e["a"].post("project/invite_link/_read",{inviteCode:t})}}}]);