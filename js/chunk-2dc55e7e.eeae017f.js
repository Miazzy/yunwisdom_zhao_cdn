(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dc55e7e"],{"03d6":function(t,e,a){},"0923":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rank"},[a("h4",{staticClass:"title"},[t._v(t._s(t.title))]),a("ul",{staticClass:"list",style:{height:t.height?t.height+"px":"auto",overflow:"auto"}},t._l(t.list,(function(e,r){return a("li",{key:r},[a("span",{class:r<3?"active":null},[t._v(t._s(r+1))]),a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.total))])])})),0)])},i=[],n=(a("c5f6"),{name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null},height:{type:Number,default:null}}}),o=n,s=(a("cd1e"),a("2877")),l=Object(s["a"])(o,r,i,!1,null,"83c80048",null);e["default"]=l.exports},"17b8":function(t,e,a){var r=a("3014"),i=r.extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t},defaultOption:{clip:!0,roundCap:!1,showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:null,borderWidth:0,borderType:"solid",borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1}}});t.exports=i},"2cc5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{loading:t.loading,"body-style":{padding:"20px 24px 8px"},bordered:!1}},[a("div",{staticClass:"chart-card-header"},[a("div",{staticClass:"meta"},[a("span",{staticClass:"chart-card-title"},[t._v(t._s(t.title))]),a("span",{staticClass:"chart-card-action"},[t._t("action")],2)]),a("div",{staticClass:"total"},[a("span",[t._v(t._s(t.total))])])]),a("div",{staticClass:"chart-card-content"},[a("div",{staticClass:"content-fix"},[t._t("default")],2)]),a("div",{staticClass:"chart-card-footer"},[a("div",{staticClass:"field"},[t._t("footer")],2)])])},i=[],n={name:"ChartCard",props:{title:{type:String,default:""},total:{type:String,default:""},loading:{type:Boolean,default:!1}}},o=n,s=(a("3ccc"),a("2877")),l=Object(s["a"])(o,r,i,!1,null,"5d7cd69f",null);e["default"]=l.exports},3014:function(t,e,a){var r=a("4f85"),i=a("3301"),n=r.extend({type:"series.__base_bar__",getInitialData:function(t,e){return i(this.getSource(),this,{useEncodeDefaulter:!0})},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var a=e.dataToPoint(e.clampData(t)),r=this.getData(),i=r.getLayout("offset"),n=r.getLayout("size"),o=e.getBaseAxis().isHorizontal()?0:1;return a[o]+=i+n/2,a}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}});t.exports=n},"3c24":function(t,e,a){"use strict";var r=a("5b10"),i=a.n(r);i.a},"3ccc":function(t,e,a){"use strict";var r=a("fff9"),i=a.n(r);i.a},"5b10":function(t,e,a){},"67cc":function(t,e,a){var r=a("4e08"),i=(r.__DEV__,a("3eba")),n=a("6d8b"),o=a("2306"),s=a("e7aa"),l=s.setLabel,c=a("4319"),d=a("b5c7"),u=a("cbe5"),p=a("e1fc"),h=a("88b3"),g=h.throttle,f=a("b0af"),m=f.createClipPath,v=a("c2be"),y=["itemStyle","barBorderWidth"],b=[0,0];function x(t,e){var a=t.getArea&&t.getArea();if("cartesian2d"===t.type){var r=t.getBaseAxis();if("category"!==r.type||!r.onBand){var i=e.getLayout("bandWidth");r.isHorizontal()?(a.x-=i,a.width+=2*i):(a.y-=i,a.height+=2*i)}}return a}n.extend(c.prototype,d);var _=i.extendChartView({type:"bar",render:function(t,e,a){this._updateDrawMode(t);var r=t.get("coordinateSystem");return"cartesian2d"!==r&&"polar"!==r||(this._isLargeDraw?this._renderLarge(t,e,a):this._renderNormal(t,e,a)),this.group},incrementalPrepareRender:function(t,e,a){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,a,r){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,a){var r,i=this.group,n=t.getData(),s=this._data,l=t.coordinateSystem,c=l.getBaseAxis();"cartesian2d"===l.type?r=c.isHorizontal():"polar"===l.type&&(r="angle"===c.dim);var d=t.isAnimationEnabled()?t:null,u=t.get("clip",!0),h=x(l,n);i.removeClipPath();var g=t.get("roundCap",!0),f=t.get("showBackground",!0),m=t.getModel("backgroundStyle"),v=[],y=this._backgroundEls||[];n.diff(s).add((function(e){var a=n.getItemModel(e),o=L[l.type](n,e,a);if(f){var s=R(l,r,o);s.useStyle(m.getBarItemStyle()),v[e]=s}if(n.hasValue(e)){if(u){var c=S[l.type](h,o);if(c)return void i.remove(p)}var p=D[l.type](e,o,r,d,!1,g);n.setItemGraphicEl(e,p),i.add(p),P(p,n,e,a,o,t,r,"polar"===l.type)}})).update((function(e,a){var c=n.getItemModel(e),p=L[l.type](n,e,c);if(f){var b=y[a];b.useStyle(m.getBarItemStyle()),v[e]=b;var x=V(r,p,l);o.updateProps(b,{shape:x},d,e)}var _=s.getItemGraphicEl(a);if(n.hasValue(e)){if(u){var w=S[l.type](h,p);if(w)return void i.remove(_)}_?o.updateProps(_,{shape:p},d,e):_=D[l.type](e,p,r,d,!0,g),n.setItemGraphicEl(e,_),i.add(_),P(_,n,e,c,p,t,r,"polar"===l.type)}else i.remove(_)})).remove((function(t){var e=s.getItemGraphicEl(t);"cartesian2d"===l.type?e&&C(t,d,e):e&&j(t,d,e)})).execute();var b=this._backgroundGroup||(this._backgroundGroup=new p);b.removeAll();for(var _=0;_<v.length;++_)b.add(v[_]);i.add(b),this._backgroundEls=v,this._data=n},_renderLarge:function(t,e,a){this._clear(),I(t,this.group);var r=t.get("clip",!0)?m(t.coordinateSystem,!1,t):null;r?this.group.setClipPath(r):this.group.removeClipPath()},_incrementalRenderLarge:function(t,e){this._removeBackground(),I(e,this.group,!0)},dispose:n.noop,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,a=this._data;t&&t.get("animation")&&a&&!this._isLargeDraw?(this._removeBackground(),this._backgroundEls=[],a.eachItemGraphicEl((function(e){"sector"===e.type?j(e.dataIndex,t,e):C(e.dataIndex,t,e)}))):e.removeAll(),this._data=null},_removeBackground:function(){this.group.remove(this._backgroundGroup),this._backgroundGroup=null}}),w=Math.max,k=Math.min,S={cartesian2d:function(t,e){var a=e.width<0?-1:1,r=e.height<0?-1:1;a<0&&(e.x+=e.width,e.width=-e.width),r<0&&(e.y+=e.height,e.height=-e.height);var i=w(e.x,t.x),n=k(e.x+e.width,t.x+t.width),o=w(e.y,t.y),s=k(e.y+e.height,t.y+t.height);e.x=i,e.y=o,e.width=n-i,e.height=s-o;var l=e.width<0||e.height<0;return a<0&&(e.x+=e.width,e.width=-e.width),r<0&&(e.y+=e.height,e.height=-e.height),l},polar:function(t){return!1}},D={cartesian2d:function(t,e,a,r,i){var s=new o.Rect({shape:n.extend({},e),z2:1});if(s.name="item",r){var l=s.shape,c=a?"height":"width",d={};l[c]=0,d[c]=e[c],o[i?"updateProps":"initProps"](s,{shape:d},r,t)}return s},polar:function(t,e,a,r,i,s){var l=e.startAngle<e.endAngle,c=!a&&s?v:o.Sector,d=new c({shape:n.defaults({clockwise:l},e),z2:1});if(d.name="item",r){var u=d.shape,p=a?"r":"endAngle",h={};u[p]=a?0:e.startAngle,h[p]=e[p],o[i?"updateProps":"initProps"](d,{shape:h},r,t)}return d}};function C(t,e,a){a.style.text=null,o.updateProps(a,{shape:{width:0}},e,t,(function(){a.parent&&a.parent.remove(a)}))}function j(t,e,a){a.style.text=null,o.updateProps(a,{shape:{r:a.shape.r0}},e,t,(function(){a.parent&&a.parent.remove(a)}))}var L={cartesian2d:function(t,e,a){var r=t.getItemLayout(e),i=O(a,r),n=r.width>0?1:-1,o=r.height>0?1:-1;return{x:r.x+n*i/2,y:r.y+o*i/2,width:r.width-n*i,height:r.height-o*i}},polar:function(t,e,a){var r=t.getItemLayout(e);return{cx:r.cx,cy:r.cy,r0:r.r0,r:r.r,startAngle:r.startAngle,endAngle:r.endAngle}}};function A(t){return null!=t.startAngle&&null!=t.endAngle&&t.startAngle===t.endAngle}function P(t,e,a,r,i,s,c,d){var u=e.getItemVisual(a,"color"),p=e.getItemVisual(a,"opacity"),h=e.getVisual("borderColor"),g=r.getModel("itemStyle"),f=r.getModel("emphasis.itemStyle").getBarItemStyle();d||t.setShape("r",g.get("barBorderRadius")||0),t.useStyle(n.defaults({stroke:A(i)?"none":h,fill:A(i)?"none":u,opacity:p},g.getBarItemStyle()));var m=r.getShallow("cursor");m&&t.attr("cursor",m);var v=c?i.height>0?"bottom":"top":i.width>0?"left":"right";d||l(t.style,f,r,u,s,a,v),A(i)&&(f.fill=f.stroke="none"),o.setHoverStyle(t,f)}function O(t,e){var a=t.get(y)||0,r=isNaN(e.width)?Number.MAX_VALUE:Math.abs(e.width),i=isNaN(e.height)?Number.MAX_VALUE:Math.abs(e.height);return Math.min(a,r,i)}var M=u.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var a=e.points,r=this.__startPoint,i=this.__baseDimIdx,n=0;n<a.length;n+=2)r[i]=a[n+i],t.moveTo(r[0],r[1]),t.lineTo(a[n],a[n+1])}});function I(t,e,a){var r=t.getData(),i=[],n=r.getLayout("valueAxisHorizontal")?1:0;i[1-n]=r.getLayout("valueAxisStart");var o=r.getLayout("largeDataIndices"),s=r.getLayout("barWidth"),l=t.getModel("backgroundStyle"),c=t.get("showBackground",!0);if(c){var d=r.getLayout("largeBackgroundPoints"),u=[];u[1-n]=r.getLayout("backgroundStart");var p=new M({shape:{points:d},incremental:!!a,__startPoint:u,__baseDimIdx:n,__largeDataIndices:o,__barWidth:s,silent:!0,z2:0});N(p,l,r),e.add(p)}var h=new M({shape:{points:r.getLayout("largePoints")},incremental:!!a,__startPoint:i,__baseDimIdx:n,__largeDataIndices:o,__barWidth:s});e.add(h),E(h,t,r),h.seriesIndex=t.seriesIndex,t.get("silent")||(h.on("mousedown",T),h.on("mousemove",T))}var T=g((function(t){var e=this,a=B(e,t.offsetX,t.offsetY);e.dataIndex=a>=0?a:null}),30,!1);function B(t,e,a){var r=t.__baseDimIdx,i=1-r,n=t.shape.points,o=t.__largeDataIndices,s=Math.abs(t.__barWidth/2),l=t.__startPoint[i];b[0]=e,b[1]=a;for(var c=b[r],d=b[1-r],u=c-s,p=c+s,h=0,g=n.length/2;h<g;h++){var f=2*h,m=n[f+r],v=n[f+i];if(m>=u&&m<=p&&(l<=v?d>=l&&d<=v:d>=v&&d<=l))return o[h]}return-1}function E(t,e,a){var r=a.getVisual("borderColor")||a.getVisual("color"),i=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(i),t.style.fill=null,t.style.stroke=r,t.style.lineWidth=a.getLayout("barWidth")}function N(t,e,a){var r=e.get("borderColor")||e.get("color"),i=e.getItemStyle(["color","borderColor"]);t.useStyle(i),t.style.fill=null,t.style.stroke=r,t.style.lineWidth=a.getLayout("barWidth")}function V(t,e,a){var r,i="polar"===a.type;return r=i?a.getArea():a.grid.getRect(),i?{cx:r.cx,cy:r.cy,r0:t?r.r0:e.r0,r:t?r.r:e.r,startAngle:t?e.startAngle:0,endAngle:t?e.endAngle:2*Math.PI}:{x:t?e.x:r.x,y:t?r.y:e.y,width:t?e.width:r.width,height:t?r.height:e.height}}function R(t,e,a){var r="polar"===t.type?o.Sector:o.Rect;return new r({shape:V(e,a,t),silent:!0,z2:0})}t.exports=_},7864:function(t,e,a){"use strict";var r=a("03d6"),i=a.n(r);i.a},"94b1":function(t,e,a){var r=a("3eba"),i=a("6d8b"),n=a("9d57"),o=n.layout,s=n.largeLayout;a("5aa9"),a("17b8"),a("67cc"),a("01ed"),r.registerLayout(r.PRIORITY.VISUAL.LAYOUT,i.curry(o,"bar")),r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,s),r.registerVisual({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}})},a97c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"analysis-index"},[a("div",{staticClass:"page-wrapper"},[a("a-row",{attrs:{gutter:24}},[a("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{loading:t.loading,title:"项目总数",total:t._f("NumberFormat")(t.projectData.count)}},[a("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[a("a-icon",{attrs:{type:"info-circle-o"}})],1),a("div",{staticClass:"chart-wrapper"},[a("ve-histogram",{attrs:{data:t.projectData.chartData,settings:t.projectData.chartSettings,extend:t.chartExtend,"legend-visible":!1,height:"55px"}})],1),a("template",{slot:"footer"},[t._v("\n            本月立项\n            "),a("span",[t._v("3")])])],2)],1),a("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{loading:t.loading,title:"任务总数",total:t._f("NumberFormat")(t.taskData.count)}},[a("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[a("a-icon",{attrs:{type:"info-circle-o"}})],1),a("div",[a("div",{staticClass:"chart-wrapper"},[a("ve-line",{attrs:{data:t.taskData.chartData,settings:t.taskData.chartSettings,extend:t.chartExtend,"legend-visible":!1,height:"55px"}})],1)]),a("template",{slot:"footer"},[t._v("\n            今日任务\n            "),a("span",[t._v(t._s(t._f("NumberFormat")("8")))])])],2)],1),a("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{loading:t.loading,title:"逾期任务",total:t._f("NumberFormat")(t.taskData.taskOverdueCount)}},[a("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[a("a-icon",{attrs:{type:"info-circle-o"}})],1),a("div",[a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("周同比")]),t._v("\n              12%\n            ")]),a("trend",{attrs:{flag:"down"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("日同比")]),t._v("\n              11%\n            ")])],1),a("template",{slot:"footer"},[t._v("\n            逾期率\n            "),a("span",[t._v(t._s(t.taskData.taskOverduePercent)+"%")])])],2)],1),a("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[a("chart-card",{attrs:{loading:t.loading,title:"整体进度",total:t.projectData.projectSchedule+"%"}},[a("a-tooltip",{attrs:{slot:"action",title:"指标说明"},slot:"action"},[a("a-icon",{attrs:{type:"info-circle-o"}})],1),a("div",[a("mini-progress",{attrs:{color:"#ffd401",target:80,percentage:t.projectData.projectSchedule,height:"8px"}})],1),a("template",{slot:"footer"},[a("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("周同比")]),t._v("\n              12%\n            ")]),a("trend",{attrs:{flag:"up"}},[a("span",{attrs:{slot:"term"},slot:"term"},[t._v("日环比")]),t._v("\n              80%\n            ")])],1)],2)],1)],1),a("a-card",{attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[a("div",{staticClass:"salesCard"},[a("a-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[a("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[a("div",{staticClass:"extra-item"},[a("a",[t._v("今日")]),a("a",[t._v("本周")]),a("a",[t._v("本月")]),a("a",[t._v("本年")])]),a("a-range-picker",{style:{width:"256px"}})],1),a("a-tab-pane",{key:"1",attrs:{forceRender:"",tab:"项目数"}},[a("a-row",[a("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[a("div",{staticClass:"chart-wrappers-single"},[a("ve-histogram",{attrs:{data:t.projectTotalData.chartData,settings:t.projectTotalData.chartSettings,extend:t.projectTotalData.chartExtend,"legend-visible":!1,height:"300px"}})],1)]),a("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[a("rank-list",{attrs:{title:"项目数排行榜",list:t.rankList}})],1)],1)],1),a("a-tab-pane",{key:"2",attrs:{forceRender:"",tab:"任务数"}},[a("a-row",[a("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[a("div",{staticClass:"chart-wrappers-single"},[a("ve-histogram",{attrs:{data:t.projectTotalData.chartData,settings:t.projectTotalData.chartSettings,extend:t.projectTotalData.chartExtend,"legend-visible":!1,height:"300px"}})],1)]),a("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[a("rank-list",{attrs:{title:"任务数排行榜",list:t.rankList}})],1)],1)],1)],1)],1)]),a("a-row",{attrs:{gutter:12}},[a("a-col",{attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[a("a-card",{style:{marginTop:"24px"},attrs:{loading:t.loading,bordered:!1,title:"我的项目"}},[a("a-dropdown",{attrs:{slot:"extra",trigger:["click"],placement:"bottomLeft"},slot:"extra"},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[a("a-icon",{attrs:{type:"ellipsis"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("操作一")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("操作二")])])],1)],1),t._l(t.projectList,(function(e){return a("p",{key:e.id},[t._v(t._s(e.name))])})),a("a-pagination",{attrs:{total:t.projectTotal,size:"small"},on:{change:t.pageChange},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],2)],1),a("a-col",{attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[a("a-card",{style:{marginTop:"24px"},attrs:{loading:t.loading,bordered:!1,title:"任务优先级分布"}},[a("a-dropdown",{attrs:{slot:"extra",trigger:["click"],placement:"bottomLeft"},slot:"extra"},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[a("a-icon",{attrs:{type:"ellipsis"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("操作一")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("操作二")])])],1)],1),a("p",[t._v("card content")]),a("p",[t._v("card content")]),a("p",[t._v("card content")])],1)],1)],1)],1)])},i=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("5880"),s=a("c3da"),l=a.n(s),c=a("d768"),d=a.n(c),u=a("2cc5"),p=a("611e"),h=a("bf13"),g=a("0923"),f=a("1b80"),m=a("6be7");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}for(var b=[],x=0;x<7;x++)b.push({name:"XX公司 "+(x+1)+" 号员工",total:1234.56-100*x});for(var _=[],w=1;w<20;w++)_.push({"日期":"1月".concat(w,"日"),"任务":(10*Math.random()+1).toFixed(0)});for(var k=[],S=1;S<13;S++)k.push({"日期":"".concat(S,"月"),"数量":(10*Math.random()+1).toFixed(0)});var D={components:{VeLine:l.a,VeHistogram:d.a,ChartCard:u["default"],MiniProgress:h["default"],Trend:p["a"],RankList:g["default"]},mixins:[f["a"]],data:function(){return{loading:!1,rankList:b,chartExtend:{grid:{left:"-25",right:"0",top:"10",bottom:"-15"},series:{barWidth:15},xAxis:{show:!1},yAxis:{show:!1},tooltip:{backgroundColor:"#fff",textStyle:{color:"#333"},borderWidth:1,borderColor:"#e8e8e8"},axisPointer:{lineStyle:{width:0}}},projectData:{count:0,projectSchedule:0,chartData:{columns:["日期","数量"],rows:k},chartSettings:{itemStyle:{color:"#1890ff"}}},taskData:{count:0,taskOverdueCount:0,taskOverduePercent:0,chartData:{columns:["日期","任务"],rows:_},chartSettings:{area:!0,itemStyle:{color:"#b68eec"},areaStyle:{color:"#b68eec"}}},projectTotalData:{chartData:{columns:["日期","数量"],rows:k},chartSettings:{itemStyle:{color:"#1890ff"}},chartExtend:{grid:{left:"30",right:"0",top:"15",bottom:"0"},series:{barWidth:45}}},projectList:[],projectTotal:0,projectLoading:!1}},computed:y({},Object(o["mapState"])({userInfo:function(t){return t.userInfo}})),created:function(){this.init()},methods:{init:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];Object(m["c"])({type:1}).then((function(e){t.projectData.count=e.data.projectCount,t.projectData.projectSchedule=e.data.projectSchedule,t.projectData.chartData.rows=e.data.projectList,t.projectTotalData.chartData.rows=e.data.projectList,t.taskData.count=e.data.taskCount,t.taskData.taskOverdueCount=e.data.taskOverdueCount,t.taskData.taskOverduePercent=e.data.taskOverduePercent,t.taskData.chartData.rows=e.data.taskList})),e&&(this.pagination.page=1,this.pagination.pageSize=10),this.getProjectList(!0)},getProjectList:function(t){var e=this;t&&(this.projectLoading=!0),Object(m["l"])(this.requestData).then((function(t){e.projectList=t.data.list,e.projectTotal=t.data.total,e.projectLoading=!1}))},pageChange:function(t,e){this.pagination.page=t,this.getProjectList(!0)}}},C=D,j=(a("7864"),a("2877")),L=Object(j["a"])(C,r,i,!1,null,null,null);e["default"]=L.exports},b5c7:function(t,e,a){var r=a("282b"),i=r([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),n={getBarItemStyle:function(t){var e=i(this,t);if(this.getBorderLineDash){var a=this.getBorderLineDash();a&&(e.lineDash=a)}return e}};t.exports=n},bf13:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-mini-progress"},[a("div",{staticClass:"target",style:{left:t.target+"%"}},[a("span",{style:{backgroundColor:t.color}}),a("span",{style:{backgroundColor:t.color}})]),a("div",{staticClass:"progress-wrapper"},[a("div",{staticClass:"progress",style:{backgroundColor:t.color,width:t.percentage+"%",height:t.height+"px"}})])])},i=[],n=(a("c5f6"),{name:"MiniProgress",props:{target:{type:Number,default:0},height:{type:Number,default:10},color:{type:String,default:"#13C2C2"},percentage:{type:Number,default:0}}}),o=n,s=(a("3c24"),a("2877")),l=Object(s["a"])(o,r,i,!1,null,"bc81620e",null);e["default"]=l.exports},c2be:function(t,e,a){var r=a("2306"),i=r.extendShape,n=i({type:"sausage",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},buildPath:function(t,e){var a=e.cx,r=e.cy,i=Math.max(e.r0||0,0),n=Math.max(e.r,0),o=.5*(n-i),s=i+o,l=e.startAngle,c=e.endAngle,d=e.clockwise,u=Math.cos(l),p=Math.sin(l),h=Math.cos(c),g=Math.sin(c),f=d?c-l<2*Math.PI:l-c<2*Math.PI;f&&(t.moveTo(u*i+a,p*i+r),t.arc(u*s+a,p*s+r,o,-Math.PI+l,l,!d)),t.arc(a,r,n,l,c,!d),t.moveTo(h*n+a,g*n+r),t.arc(h*s+a,g*s+r,o,c-2*Math.PI,c-Math.PI,!d),0!==i&&(t.arc(a,r,i,c,l,d),t.moveTo(u*i+a,g*i+r)),t.closePath()}});t.exports=n},cc9b:function(t,e,a){},cd1e:function(t,e,a){"use strict";var r=a("cc9b"),i=a.n(r);i.a},d768:function(t,e,a){"use strict";function r(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}var i=a("89d6"),n=a("6f0c"),o=a("4cbb");a("94b1");var s=r(a("6521")),l=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},d=.5;function u(t){var e=t.innerRows,a=t.dimAxisName,r=t.dimension,i=t.axisVisible,n=t.dimAxisType,o=t.dims;return r.map((function(t){return{type:"category",name:a,nameLocation:"middle",nameGap:22,data:"value"===n?p(o):e.map((function(e){return e[t]})),axisLabel:{formatter:function(t){return String(t)}},show:i}}))}function p(t){for(var e=Math.max.apply(null,t),a=Math.min.apply(null,t),r=[],i=a;i<=e;i++)r.push(i);return r}function h(t){for(var e=t.meaAxisName,a=t.meaAxisType,r=t.axisVisible,i=t.digit,o=t.scale,s=t.min,l=t.max,d={type:"value",axisTick:{show:!1},show:r},u=[],p=function(t){a[t]?u[t]=c({},d,{axisLabel:{formatter:function(e){return n.getFormated(e,a[t],i)}}}):u[t]=c({},d),u[t].name=e[t]||"",u[t].scale=o[t]||!1,u[t].min=s[t]||null,u[t].max=l[t]||null},h=0;h<2;h++)p(h);return u}function g(t){var e=t.axisSite,a=t.isHistogram,r=t.meaAxisType,o=t.digit,s=t.labelMap,l=a?e.right||[]:e.top||[];return s&&(l=l.map((function(t){return void 0===s[t]?t:s[t]}))),{trigger:"axis",formatter:function(t){var e=[];return e.push(t[0].name+"<br>"),t.forEach((function(t){var a=t.seriesName,s=~l.indexOf(a)?r[1]:r[0];e.push(i.itemPoint(t.color)),e.push(a+": "),e.push(n.getFormated(t.value,s,o)),e.push("<br>")})),e.join("")}}}function f(t,e){for(var a=Math.max.apply(null,e),r=Math.min.apply(null,e),i=[],n=r;n<=a;n++){var o=e.indexOf(n);~o?i.push(t[o]):i.push(null)}return i}function m(t){var e=t.innerRows,a=t.metrics,r=t.stack,i=t.axisSite,s=t.isHistogram,c=t.labelMap,u=t.itemStyle,p=t.label,h=t.showLine,g=void 0===h?[]:h,m=t.dimAxisType,v=t.barGap,y=t.opacity,b=t.dims,x=[],_={},w=s?i.right||[]:i.top||[],k=s?"yAxisIndex":"xAxisIndex",S=r&&n.getStackMap(r);return a.forEach((function(t){_[t]=[]})),e.forEach((function(t){a.forEach((function(e){_[e].push(t[e])}))})),x=Object.keys(_).map((function(t,e){var a="value"===m?f(_[t],b):_[t],i=l({name:null!=c[t]?c[t]:t,type:~g.indexOf(t)?"line":"bar",data:a},k,~w.indexOf(t)?"1":"0");r&&S[t]&&(i.stack=S[t]),p&&(i.label=p),u&&(i.itemStyle=u);var n=y||o.get(i,"itemStyle.normal.opacity");return"value"===m&&(i.barGap=v,i.barCategoryGap="1%",null==n&&(n=d)),null!=n&&o.set(i,"itemStyle.normal.opacity",n),i})),!!x.length&&x}function v(t){var e=t.metrics,a=t.labelMap,r=t.legendName;if(!r&&!a)return{data:e};var i=a?e.map((function(t){return null==a[t]?t:a[t]})):e;return{data:i,formatter:function(t){return null!=r[t]?r[t]:t}}}function y(t,e){return t.map((function(t){return t[e[0]]}))}var b=function(t,e,a,r){var i=o.cloneDeep(e),n=a.axisSite,s=void 0===n?{}:n,l=a.dimension,c=void 0===l?[t[0]]:l,d=a.stack,p=void 0===d?{}:d,f=a.axisVisible,b=void 0===f||f,x=a.digit,_=void 0===x?2:x,w=a.dataOrder,k=void 0!==w&&w,S=a.scale,D=void 0===S?[!1,!1]:S,C=a.min,j=void 0===C?[null,null]:C,L=a.max,A=void 0===L?[null,null]:L,P=a.labelMap,O=void 0===P?{}:P,M=a.legendName,I=void 0===M?{}:M,T=a.label,B=a.itemStyle,E=a.showLine,N=a.barGap,V=void 0===N?"-100%":N,R=a.opacity;if(k){var W=k.label,G=k.order;W&&G?i.sort((function(t,e){return"desc"===G?t[W]-e[W]:e[W]-t[W]})):console.warn("Need to provide name and order parameters")}var z=r.tooltipVisible,H=r.legendVisible,F=t.slice();s.left&&s.right?F=s.left.concat(s.right):s.left&&!s.right?F=s.left:a.metrics?F=a.metrics:F.splice(t.indexOf(c[0]),1);var X=a.yAxisType||["normal","normal"],Y=a.xAxisType||"category",U=a.yAxisName||[],$=a.xAxisName||"",J=!0,q=y(i,c),K=H&&v({metrics:F,labelMap:O,legendName:I}),Q=u({innerRows:i,dimAxisName:$,dimension:c,axisVisible:b,dimAxisType:Y,dims:q}),Z=h({meaAxisName:U,meaAxisType:X,axisVisible:b,digit:_,scale:D,min:j,max:A}),tt=m({innerRows:i,metrics:F,stack:p,axisSite:s,isHistogram:J,labelMap:O,itemStyle:B,label:T,showLine:E,dimAxisType:Y,dimension:c,barGap:V,opacity:R,dims:q}),et={axisSite:s,isHistogram:J,meaAxisType:X,digit:_,labelMap:O},at=z&&g(et),rt={legend:K,yAxis:Z,series:tt,xAxis:Q,tooltip:at};return rt},x=c({},s,{name:"VeHistogram",data:function(){return this.chartHandler=b,{}}});t.exports=x},e7aa:function(t,e,a){var r=a("2306"),i=a("c775"),n=i.getDefaultLabel;function o(t,e,a,i,o,l,c){var d=a.getModel("label"),u=a.getModel("emphasis.label");r.setLabelStyle(t,e,d,u,{labelFetcher:o,labelDataIndex:l,defaultText:n(o.getData(),l),isRectText:!0,autoColor:i}),s(t),s(e)}function s(t,e){"outside"===t.textPosition&&(t.textPosition=e)}e.setLabel=o},fff9:function(t,e,a){}}]);