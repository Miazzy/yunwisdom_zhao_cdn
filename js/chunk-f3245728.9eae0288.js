(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3245728"],{"1f38":function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return o}));var r=function(){return"undefined"!==typeof window?window:n},o=function(){var n=r();return n&&n.tinymce?n.tinymce:null}}).call(this,t("c8ba"))},"2d33":function(n,e,t){t("303c")},"303c":function(n,e){(function(n){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");function t(){e.add("colorpicker",(function(){n.console.warn("Color picker plugin is now built in to the core editor, please remove it from your editor configuration")}))}t()})(window)},3154:function(n,e,t){t("f034")},"5e4c":function(n,e){(function(n){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");function t(){e.add("contextmenu",(function(){n.console.warn("Context menu plugin is now built in to the core editor, please remove it from your editor configuration")}))}t()})(window)},9917:function(n,e,t){"use strict";var r=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],o=function(n){return-1!==r.indexOf(n)},i=function(n,e,t){Object.keys(e).filter(o).forEach((function(r){var o=e[r];"function"===typeof o&&("onInit"===r?o(n,t):t.on(r.substring(2),(function(n){return o(n,t)})))}))},u=function(n,e){var t,r=n.$props.modelEvents?n.$props.modelEvents:null,o=Array.isArray(r)?r.join(" "):r;n.$watch("value",(function(n,r){e&&"string"===typeof n&&n!==t&&n!==r&&(e.setContent(n),t=n)})),e.on(o||"change keyup undo redo",(function(){t=e.getContent(),n.$emit("input",t)}))},c=function(n,e,t){var r=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";t.setContent(r||o),e.$listeners.input&&u(e,t),i(n,e.$listeners,t)},s=0,a=function(n){var e=Date.now(),t=Math.floor(1e9*Math.random());return s++,n+"_"+t+s+String(e)},f=function(n){return null!==n&&"textarea"===n.tagName.toLowerCase()},l=function(n){return"undefined"===typeof n||""===n?[]:Array.isArray(n)?n:n.split(" ")},d=function(n,e){return l(n).concat(l(e))},m=function(n,e,t,r){var o=e.createElement("script");o.type="application/javascript",o.id=n,o.addEventListener("load",r),o.src=t,e.head&&e.head.appendChild(o)},p=function(){return{listeners:[],scriptId:a("tiny-script"),scriptLoaded:!1}},h=function(n,e,t,r){n.scriptLoaded?r():(n.listeners.push(r),e.getElementById(n.scriptId)||m(n.scriptId,e,t,(function(){n.listeners.forEach((function(n){return n()})),n.scriptLoaded=!0})))},v=t("1f38"),g={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},y=function(){return y=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t],e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},y.apply(this,arguments)},w=p(),S=function(n,e,t){return n(t||"div",{attrs:{id:e}})},b=function(n,e){return n("textarea",{attrs:{id:e},style:{visibility:"hidden"}})},O=function(n){return function(){var e=y({},n.$props.init,{readonly:n.$props.disabled,selector:"#"+n.elementId,plugins:d(n.$props.init&&n.$props.init.plugins,n.$props.plugins),toolbar:n.$props.toolbar||n.$props.init&&n.$props.init.toolbar,inline:n.inlineEditor,setup:function(e){n.editor=e,e.on("init",(function(t){return c(t,n,e)})),n.$props.init&&"function"===typeof n.$props.init.setup&&n.$props.init.setup(e)}});f(n.element)&&(n.element.style.visibility=""),Object(v["a"])().init(e)}},E={props:g,created:function(){this.elementId=this.$props.id||a("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(v["a"])())O(this)();else if(this.element&&this.element.ownerDocument){var n=this.element.ownerDocument,e=this.$props.cloudChannel?this.$props.cloudChannel:"5",t=this.$props.apiKey?this.$props.apiKey:"no-api-key";h(w,n,"https://cdn.tiny.cloud/1/"+t+"/tinymce/"+e+"/tinymce.min.js",O(this))}},beforeDestroy:function(){null!==Object(v["a"])()&&Object(v["a"])().remove(this.editor)},render:function(n){return this.inlineEditor?S(n,this.elementId,this.$props.tagName):b(n,this.elementId)}};e["a"]=E},f034:function(n,e){(function(n){"use strict";var e=function(n){var t=n,r=function(){return t},o=function(n){t=n},i=function(){return e(r())};return{get:r,set:o,clone:i}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=function(n){return{isFullscreen:function(){return null!==n.get()}}},o={get:r},i=function(){},u=function(n,e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return n(e.apply(null,t))}},c=function(n){return function(){return n}},s=c(!1),a=c(!0),f=function(){return l},l=function(){var n=function(n){return n.isNone()},e=function(n){return n()},t=function(n){return n},r={fold:function(n,e){return n()},is:s,isSome:s,isNone:a,getOr:t,getOrThunk:e,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(void 0),or:t,orThunk:e,map:f,each:i,bind:f,exists:s,forall:a,filter:f,equals:n,equals_:n,toArray:function(){return[]},toString:c("none()")};return Object.freeze&&Object.freeze(r),r}(),d=function(n){var e=c(n),t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:a,isNone:s,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return d(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?o:l},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(s,(function(e){return t(n,e)}))}};return o},m=function(n){return null===n||void 0===n?l:d(n)},p={some:d,none:f,from:m},h=function(n){var t=e(p.none()),r=function(){t.get().each(n)},o=function(){r(),t.set(p.none())},i=function(n){r(),t.set(p.some(n))},u=function(){return t.get().isSome()};return{clear:o,isSet:u,set:i}},v=function(){return h((function(n){n.unbind()}))},g=function(){var n=e(p.none()),t=function(){n.set(p.none())},r=function(e){n.set(p.some(e))},o=function(e){n.get().each(e)},i=function(){return n.get().isSome()};return{clear:t,set:r,isSet:i,on:o}},y=function(n){if(null===n)return"null";var e=typeof n;return"object"===e&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===e&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":e},w=function(n){return function(e){return y(e)===n}},S=w("string"),b=w("array"),O=w("boolean"),E=w("function"),C=w("number"),N=Array.prototype.slice,x=Array.prototype.push,T=function(n,e){for(var t=n.length,r=new Array(t),o=0;o<t;o++){var i=n[o];r[o]=e(i,o)}return r},D=function(n,e){for(var t=0,r=n.length;t<r;t++){var o=n[t];e(o,t)}},A=function(n,e){for(var t=[],r=0,o=n.length;r<o;r++){var i=n[r];e(i,r)&&t.push(i)}return t},M=function(n,e){for(var t=0,r=n.length;t<r;t++){var o=n[t];if(e(o,t))return p.some(o)}return p.none()},P=function(n){for(var e=[],t=0,r=n.length;t<r;++t){if(!b(n[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+n);x.apply(e,n[t])}return e},k=function(n,e){return P(T(n,e))},I=(E(Array.from)&&Array.from,Object.keys),$=function(n,e){for(var t=I(n),r=0,o=t.length;r<o;r++){var i=t[r],u=n[i];e(u,i)}},F=function(n,e){return-1!==n.indexOf(e)},R=function(n){return void 0!==n.style&&E(n.style.getPropertyValue)},_=function(e,t){var r=t||n.document,o=r.createElement("div");if(o.innerHTML=e,!o.hasChildNodes()||o.childNodes.length>1)throw n.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return j(o.childNodes[0])},L=function(e,t){var r=t||n.document,o=r.createElement(e);return j(o)},B=function(e,t){var r=t||n.document,o=r.createTextNode(e);return j(o)},j=function(n){if(null===n||void 0===n)throw new Error("Node cannot be null or undefined");return{dom:c(n)}},U=function(n,e,t){var r=n.dom();return p.from(r.elementFromPoint(e,t)).map(j)},V={fromHtml:_,fromTag:L,fromText:B,fromDom:j,fromPoint:U},H=(n.Node.ATTRIBUTE_NODE,n.Node.CDATA_SECTION_NODE,n.Node.COMMENT_NODE,n.Node.DOCUMENT_NODE),W=(n.Node.DOCUMENT_TYPE_NODE,n.Node.DOCUMENT_FRAGMENT_NODE,n.Node.ELEMENT_NODE),z=n.Node.TEXT_NODE,K=(n.Node.PROCESSING_INSTRUCTION_NODE,n.Node.ENTITY_REFERENCE_NODE,n.Node.ENTITY_NODE,n.Node.NOTATION_NODE,"undefined"!==typeof n.window?n.window:Function("return this;")(),function(n){return n.dom().nodeType}),q=function(n){return function(e){return K(e)===n}},G=q(z),X=function(n){var e=G(n)?n.dom().parentNode:n.dom();return void 0!==e&&null!==e&&e.ownerDocument.body.contains(e)},Y=function(e,t,r){if(!(S(r)||O(r)||C(r)))throw n.console.error("Invalid call to Attr.set. Key ",t,":: Value ",r,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,r+"")},J=function(n,e,t){Y(n.dom(),e,t)},Q=function(n,e){var t=n.dom().getAttribute(e);return null===t?void 0:t},Z=function(n,e){n.dom().removeAttribute(e)},nn=function(e,t,r){if(!S(r))throw n.console.error("Invalid call to CSS.set. Property ",t,":: Value ",r,":: Element ",e),new Error("CSS value must be a string: "+r);R(e)&&e.style.setProperty(t,r)},en=function(n,e){var t=n.dom();$(e,(function(n,e){nn(t,e,n)}))},tn=function(e,t){var r=e.dom(),o=n.window.getComputedStyle(r),i=o.getPropertyValue(t),u=""!==i||X(e)?i:rn(r,t);return null===u?void 0:u},rn=function(n,e){return R(n)?n.style.getPropertyValue(e):""},on=function(n,e,t,r,o,i,u){return{target:c(n),x:c(e),y:c(t),stop:r,prevent:o,kill:i,raw:c(u)}},un=function(n){var e=V.fromDom(n.target),t=function(){n.stopPropagation()},r=function(){n.preventDefault()},o=u(r,t);return on(e,n.clientX,n.clientY,t,r,o,n)},cn=function(n,e){for(var t=0;t<n.length;t++){var r=n[t];if(r.test(e))return r}},sn=function(n,e){var t=cn(n,e);if(!t)return{major:0,minor:0};var r=function(n){return Number(e.replace(t,"$"+n))};return ln(r(1),r(2))},an=function(n,e){var t=String(e).toLowerCase();return 0===n.length?fn():sn(n,t)},fn=function(){return ln(0,0)},ln=function(n,e){return{major:n,minor:e}},dn={nu:ln,detect:an,unknown:fn},mn="Edge",pn="Chrome",hn="IE",vn="Opera",gn="Firefox",yn="Safari",wn=function(n,e){return function(){return e===n}},Sn=function(){return bn({current:void 0,version:dn.unknown()})},bn=function(n){var e=n.current,t=n.version;return{current:e,version:t,isEdge:wn(mn,e),isChrome:wn(pn,e),isIE:wn(hn,e),isOpera:wn(vn,e),isFirefox:wn(gn,e),isSafari:wn(yn,e)}},On={unknown:Sn,nu:bn,edge:c(mn),chrome:c(pn),ie:c(hn),opera:c(vn),firefox:c(gn),safari:c(yn)},En="Windows",Cn="iOS",Nn="Android",xn="Linux",Tn="OSX",Dn="Solaris",An="FreeBSD",Mn="ChromeOS",Pn=function(n,e){return function(){return e===n}},kn=function(){return In({current:void 0,version:dn.unknown()})},In=function(n){var e=n.current,t=n.version;return{current:e,version:t,isWindows:Pn(En,e),isiOS:Pn(Cn,e),isAndroid:Pn(Nn,e),isOSX:Pn(Tn,e),isLinux:Pn(xn,e),isSolaris:Pn(Dn,e),isFreeBSD:Pn(An,e),isChromeOS:Pn(Mn,e)}},$n={unknown:kn,nu:In,windows:c(En),ios:c(Cn),android:c(Nn),linux:c(xn),osx:c(Tn),solaris:c(Dn),freebsd:c(An),chromeos:c(Mn)},Fn=function(n,e,t,r){var o=n.isiOS()&&!0===/ipad/i.test(t),i=n.isiOS()&&!o,u=n.isiOS()||n.isAndroid(),s=u||r("(pointer:coarse)"),a=o||!i&&u&&r("(min-device-width:768px)"),f=i||u&&!a,l=e.isSafari()&&n.isiOS()&&!1===/safari/i.test(t),d=!f&&!a&&!l;return{isiPad:c(o),isiPhone:c(i),isTablet:c(a),isPhone:c(f),isTouch:c(s),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:c(l),isDesktop:c(d)}},Rn=function(n,e){var t=String(e).toLowerCase();return M(n,(function(n){return n.search(t)}))},_n=function(n,e){return Rn(n,e).map((function(n){var t=dn.detect(n.versionRegexes,e);return{current:n.name,version:t}}))},Ln=function(n,e){return Rn(n,e).map((function(n){var t=dn.detect(n.versionRegexes,e);return{current:n.name,version:t}}))},Bn={detectBrowser:_n,detectOs:Ln},jn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Un=function(n){return function(e){return F(e,n)}},Vn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(n){return F(n,"edge/")&&F(n,"chrome")&&F(n,"safari")&&F(n,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,jn],search:function(n){return F(n,"chrome")&&!F(n,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(n){return F(n,"msie")||F(n,"trident")}},{name:"Opera",versionRegexes:[jn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Un("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Un("firefox")},{name:"Safari",versionRegexes:[jn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(n){return(F(n,"safari")||F(n,"mobile/"))&&F(n,"applewebkit")}}],Hn=[{name:"Windows",search:Un("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(n){return F(n,"iphone")||F(n,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Un("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Un("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Un("linux"),versionRegexes:[]},{name:"Solaris",search:Un("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Un("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:Un("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Wn={browsers:c(Vn),oses:c(Hn)},zn=function(n,e){var t=Wn.browsers(),r=Wn.oses(),o=Bn.detectBrowser(t,n).fold(On.unknown,On.nu),i=Bn.detectOs(r,n).fold($n.unknown,$n.nu),u=Fn(i,o,n,e);return{browser:o,os:i,deviceType:u}},Kn={detect:zn},qn=function(e){return n.window.matchMedia(e).matches},Gn=e(Kn.detect(n.navigator.userAgent,qn)),Xn=function(){return Gn.get()},Yn=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(n.length!==e.length)throw new Error('Wrong number of arguments to struct. Expected "['+n.length+']", got '+e.length+" arguments");var r={};return D(n,(function(n,t){r[n]=c(e[t])})),r}},Jn=function(n,e,t){return 0!==(n.compareDocumentPosition(e)&t)},Qn=function(e,t){return Jn(e,t,n.Node.DOCUMENT_POSITION_PRECEDING)},Zn=function(e,t){return Jn(e,t,n.Node.DOCUMENT_POSITION_CONTAINED_BY)},ne={documentPositionPreceding:Qn,documentPositionContainedBy:Zn},ee=W,te=H,re=function(n,e){var t=n.dom();if(t.nodeType!==ee)return!1;var r=t;if(void 0!==r.matches)return r.matches(e);if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(e);if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")},oe=function(n){return n.nodeType!==ee&&n.nodeType!==te||0===n.childElementCount},ie=function(e,t){var r=void 0===t?n.document:t.dom();return oe(r)?[]:T(r.querySelectorAll(e),V.fromDom)},ue=function(n,e){return n.dom()===e.dom()},ce=function(n,e){var t=n.dom(),r=e.dom();return t!==r&&t.contains(r)},se=function(n,e){return ne.documentPositionContainedBy(n.dom(),e.dom())},ae=Xn().browser,fe=(ae.isIE(),function(n){return p.from(n.dom().parentNode).map(V.fromDom)}),le=function(n,e){var t=E(e)?e:s,r=n.dom(),o=[];while(null!==r.parentNode&&void 0!==r.parentNode){var i=r.parentNode,u=V.fromDom(i);if(o.push(u),!0===t(u))break;r=i}return o},de=function(n){var e=function(e){return A(e,(function(e){return!ue(n,e)}))};return fe(n).map(me).map(e).getOr([])},me=function(n){return T(n.dom().childNodes,V.fromDom)},pe=(Yn("element","offset"),function(n,e){var t=function(t,r){return pe(n+t,e+r)};return{left:c(n),top:c(e),translate:t}}),he=pe,ve=(Xn().browser.isSafari(),function(e){var t=void 0!==e?e.dom():n.document,r=t.body.scrollLeft||t.documentElement.scrollLeft,o=t.body.scrollTop||t.documentElement.scrollTop;return he(r,o)}),ge=function(e){var t=void 0===e?n.window:e;return p.from(t["visualViewport"])},ye=function(n,e,t,r){return{x:c(n),y:c(e),width:c(t),height:c(r),right:c(n+t),bottom:c(e+r)}},we=function(e){var t=void 0===e?n.window:e,r=t.document,o=ve(V.fromDom(r));return ge(t).fold((function(){var n=t.document.documentElement,e=n.clientWidth,r=n.clientHeight;return ye(o.left(),o.top(),e,r)}),(function(n){return ye(Math.max(n.pageLeft,o.left()),Math.max(n.pageTop,o.top()),n.width,n.height)}))},Se=function(n,e,t){return ge(t).map((function(e){var t=function(n){return un(n)};return e.addEventListener(n,t),{unbind:function(){return e.removeEventListener(n,t)}}})).getOrThunk((function(){return{unbind:i}}))},be=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Oe=tinymce.util.Tools.resolve("tinymce.Env"),Ee=tinymce.util.Tools.resolve("tinymce.util.Delay"),Ce=function(n,e){n.fire("FullscreenStateChanged",{state:e})},Ne={fireFullscreenStateChanged:Ce},xe=function(n,e,t){return A(le(n,t),e)},Te=function(n,e){return A(de(n),e)},De=function(n){return ie(n)},Ae=function(n,e,t){return xe(n,(function(n){return re(n,e)}),t)},Me=function(n,e){return Te(n,(function(n){return re(n,e)}))},Pe="data-ephox-mobile-fullscreen-style",ke="display:none!important;",Ie="position:absolute!important;",$e="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",Fe="background-color:rgb(255,255,255)!important;",Re=Oe.os.isAndroid(),_e=function(n){var e=tn(n,"background-color");return void 0!==e&&""!==e?"background-color:"+e+"!important":Fe},Le=function(n,e,t){var r=function(n){return Me(n,"*:not(.tox-silver-sink)")},o=function(e){return function(t){var r=Q(t,"style"),o=void 0===r?"no-styles":r.trim();o!==e&&(J(t,Pe,o),en(t,n.parseStyle(e)))}},i=Ae(e,"*"),u=k(i,r),c=_e(t);D(u,o(ke)),D(i,o(Ie+$e+c));var s=!0===Re?"":Ie;o(s+$e+c)(e)},Be=function(n){var e=De("["+Pe+"]");D(e,(function(e){var t=Q(e,Pe);"no-styles"!==t?en(e,n.parseStyle(t)):Z(e,"style"),Z(e,Pe)}))},je={clobberStyles:Le,restoreStyles:Be},Ue=be.DOM,Ve=function(){var e=we(n.window);return{x:e.x(),y:e.y()}},He=function(e){n.window.scrollTo(e.x,e.y)},We=ge().fold((function(){return{bind:i,unbind:i}}),(function(e){var t=g(),r=v(),o=v(),i=function(){n.document.body.scrollTop=0,n.document.documentElement.scrollTop=0},u=function(){n.window.requestAnimationFrame((function(){t.on((function(n){return en(n,{top:e.offsetTop+"px",left:e.offsetLeft+"px",height:e.height+"px",width:e.width+"px"})}))}))},c=Ee.throttle((function(){i(),u()}),50),s=function(n){t.set(n),c(),r.set(Se("resize")),o.set(Se("scroll"))},a=function(){t.on((function(){r.clear(),o.clear()})),t.clear()};return{bind:s,unbind:a}})),ze=function(e,t){var r,o,i,u,c=n.document.body,s=n.document.documentElement;o=e.getContainer();var a=V.fromDom(o),f=t.get(),l=V.fromDom(e.getBody()),d=Oe.deviceType.isTouch();if(r=o.style,i=e.getContentAreaContainer().firstChild,u=i.style,f)u.width=f.iframeWidth,u.height=f.iframeHeight,r.width=f.containerWidth,r.height=f.containerHeight,r.top=f.containerTop,r.left=f.containerLeft,d&&je.restoreStyles(e.dom),Ue.removeClass(c,"tox-fullscreen"),Ue.removeClass(s,"tox-fullscreen"),Ue.removeClass(o,"tox-fullscreen"),He(f.scrollPos),t.set(null),Ne.fireFullscreenStateChanged(e,!1),We.unbind(),e.off("remove",We.unbind);else{var m={scrollPos:Ve(),containerWidth:r.width,containerHeight:r.height,containerTop:r.top,containerLeft:r.left,iframeWidth:u.width,iframeHeight:u.height};d&&je.clobberStyles(e.dom,a,l),u.width=u.height="100%",r.width=r.height="",Ue.addClass(c,"tox-fullscreen"),Ue.addClass(s,"tox-fullscreen"),Ue.addClass(o,"tox-fullscreen"),We.bind(a),e.on("remove",We.unbind),t.set(m),Ne.fireFullscreenStateChanged(e,!0)}},Ke={toggleFullscreen:ze},qe=function(n,e){n.addCommand("mceFullScreen",(function(){Ke.toggleFullscreen(n,e)}))},Ge={register:qe},Xe=function(n,e){return function(t){t.setActive(null!==e.get());var r=function(n){return t.setActive(n.state)};return n.on("FullscreenStateChanged",r),function(){return n.off("FullscreenStateChanged",r)}}},Ye=function(n,e){n.ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Meta+Shift+F",onAction:function(){return n.execCommand("mceFullScreen")},onSetup:Xe(n,e)}),n.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:function(){return n.execCommand("mceFullScreen")},onSetup:Xe(n,e)})},Je={register:Ye};function Qe(){t.add("fullscreen",(function(n){var t=e(null);return n.settings.inline?o.get(t):(Ge.register(n,t),Je.register(n,t),n.addShortcut("Meta+Shift+F","","mceFullScreen"),o.get(t))}))}Qe()})(window)},f557:function(n,e,t){t("5e4c")}}]);