(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdf09","chunk-2d0bdf09"],{"2dab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},r=[],o={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(){return document.body}}},data:function(){var e=this.value;return{decorator:"",momVal:e?moment(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?moment(e,this.dateFormat):null}},methods:{moment:moment,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},d=o,l=a("2877"),u=Object(l["a"])(d,n,r,!1,null,null,null);t["default"]=u.exports}}]);