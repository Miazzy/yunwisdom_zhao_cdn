(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0919fa7b"],{"0139":function(t,i,o){"use strict";var e=o("f79d"),n=o.n(e);n.a},"8d90":function(t,i,o){"use strict";o.r(i);var e=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("a-modal",{attrs:{visible:t.visible,title:"修改头像",maskClosable:!1,confirmLoading:t.confirmLoading,width:800}},[o("a-row",[o("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[o("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),o("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[o("div",{staticClass:"avatar-upload-preview"},[o("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),o("template",{slot:"footer"},[o("a-button",{key:"back",on:{click:t.cancelHandel}},[t._v("取消")]),o("a-button",{key:"submit",attrs:{type:"primary",loading:t.confirmLoading},on:{click:t.okHandel}},[t._v("保存")])],1)],2)},n=[],a={components:{},data:function(){return{visible:!1,id:null,confirmLoading:!1,options:{img:"/avatar2.jpg",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(t){this.visible=!0,this.id=t},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},okHandel:function(){var t=this;t.confirmLoading=!0,setTimeout((function(){t.confirmLoading=!1,t.close(),t.$message.success("上传头像成功")}),2e3)},realTime:function(t){this.previews=t}}},s=a,r=(o("0139"),o("2877")),c=Object(r["a"])(s,e,n,!1,null,"6704fd58",null);i["default"]=c.exports},f79d:function(t,i,o){}}]);