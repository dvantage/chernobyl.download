(function(e){function t(t){for(var i,r,a=t[0],l=t[1],c=t[2],d=0,p=[];d<a.length;d++)r=a[d],n[r]&&p.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],i=!0,a=1;a<o.length;a++){var l=o[a];0!==n[l]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=o[0]))}return e}var i={},n={app:0},s=[];function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},"17be":function(e,t,o){e.exports=o.p+"img/logo.f0508f10.jpg"},"5aea":function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);var i=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"main"}},[o("div",{attrs:{id:"app"}},[e._m(0),o("section",{attrs:{id:"thumbnails"}},e._l(e.videoSourceState,function(t,i){return o("article",{key:i},[o("router-link",{staticClass:"thumbnail",attrs:{to:"/episode"+t.episode,"data-id":t.episode},nativeOn:{click:function(t){return e.actionPlay(t)}}},[o("img",{attrs:{src:t.poster,alt:""}}),o("h3",[e._v("Серия "+e._s(t.episode))])])],1)}),0),e._m(1)]),o("router-view")],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{attrs:{id:"header"}},[i("a",{attrs:{href:"/"}},[i("img",{staticClass:"logo",attrs:{src:o("17be"),alt:""}})])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{attrs:{id:"footer"}},[o("ul",{staticClass:"copyright"},[o("li",[e._v("©")]),o("li",[o("a",{attrs:{href:"https://vladimirdorogov.com",target:"_blank"}},[e._v("Vladimir dorogov")])])])])}],r=o("9ab4");const a=e=>{"loading"!==document.readyState?e():document.addEventListener&&document.addEventListener("DOMContentLoaded",e)};var l=o("60a3");let c=class extends l["c"]{};c=r["a"]([l["a"]],c);var u=new c;let d=function(e){var t={settings:{preload:!1,slideDuration:500,layoutDuration:750,thumbnailsPerRow:2,mainSide:"right"},$window:null,$body:null,$main:null,$thumbnails:null,$viewer:null,$toggle:null,$navNext:null,$navPrevious:null,slides:[],current:null,locked:!1,keys:{27:function(){t.toggle()},38:function(){t.up()},40:function(){t.down()},32:function(){t.next()},39:function(){t.next()},37:function(){t.previous()}},initProperties:function(){t.$window=e(window),t.$body=e("body"),t.$thumbnails=e("#thumbnails"),t.$viewer=e('<div id="viewer"><div class="inner"><div class="toggle"></div></div></div>').appendTo(t.$body),t.$navNext=t.$viewer.find(".nav-next"),t.$navPrevious=t.$viewer.find(".nav-previous"),t.$main=e("#main"),e('<div class="toggle"></div>').appendTo(t.$main),t.$toggle=e(".toggle")},initEvents:function(){var e;a(()=>{t.$body.removeClass("is-preload-0"),window.setTimeout(function(){t.$body.removeClass("is-preload-1")},100),window.setTimeout(function(){t.$body.removeClass("is-preload-2")},100+Math.max(t.settings.layoutDuration-150,0))}),t.$window.on("resize",function(){t.$body.addClass("is-preload-0"),window.clearTimeout(e),e=window.setTimeout(function(){t.$body.removeClass("is-preload-0")},100)}),t.$viewer.on("touchend",function(){breakpoints.active("<=medium")&&t.hide()}),t.$viewer.on("touchstart",function(e){t.$viewer.touchPosX=e.originalEvent.touches[0].pageX,t.$viewer.touchPosY=e.originalEvent.touches[0].pageY}).on("touchmove",function(e){if(null===t.$viewer.touchPosX||null===t.$viewer.touchPosY)return;var o=t.$viewer.touchPosX-e.originalEvent.touches[0].pageX,i=t.$viewer.touchPosY-e.originalEvent.touches[0].pageY;let n=20,s=50;i<n&&i>-1*n&&o>s?t.next():i<n&&i>-1*n&&o<-1*s&&t.previous();var r=t.$viewer.outerHeight(),a=t.$viewer.get(0).scrollHeight-t.$viewer.scrollTop();(t.$viewer.scrollTop()<=0&&i<0||a>r-2&&a<r+2&&i>0)&&(e.preventDefault(),e.stopPropagation())}),t.$main.on("touchstart",function(e){breakpoints.active("<=xsmall")||(t.$main.touchPosX=e.originalEvent.touches[0].pageX,t.$main.touchPosY=e.originalEvent.touches[0].pageY)}).on("touchmove",function(e){if(breakpoints.active("<=xsmall"))return;if(null===t.$main.touchPosX||null===t.$main.touchPosY)return;var o=t.$main.touchPosX-e.originalEvent.touches[0].pageX,i=t.$main.touchPosY-e.originalEvent.touches[0].pageY;let n=20,s=50,r=!1;switch(t.settings.mainSide){case"left":r=i<n&&i>-1*n&&o>s;break;case"right":r=i<n&&i>-1*n&&o<-1*s;break;default:break}r&&t.hide();t.$main.outerHeight(),t.$main.get(0).scrollHeight,t.$main.scrollTop();t.$main.scrollTop()}),t.$toggle.on("click",function(){t.toggle()}),t.$toggle.on("touchend",function(e){e.stopPropagation()}),t.$navNext.on("click",function(){t.next()}),t.$navPrevious.on("click",function(){t.previous()}),t.$body.on("keydown","input,select,textarea",function(e){e.stopPropagation()}),t.$window.on("keydown",function(e){breakpoints.active("<=xsmall")||e.keyCode in t.keys&&(e.stopPropagation(),e.preventDefault(),t.keys[e.keyCode]())})},initViewer:function(){},init:function(){breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]}),t.initProperties(),t.initViewer(),t.initEvents(),breakpoints.on(">xsmall",function(){null===t.current&&t.switchTo(0,!0)})},switchTo:function(e,t){},next:function(){var e,o=t.current,i=t.slides.length;e=o>=i-1?0:o+1,t.switchTo(e)},previous:function(){var e,o=t.current,i=t.slides.length;e=o<=0?i-1:o-1,t.switchTo(e)},up:function(){if(!t.$body.hasClass("fullscreen")){var e,o=t.current,i=t.slides.length,n=t.settings.thumbnailsPerRow;e=o<=n-1?i-(n-1-o)-1:o-n,t.switchTo(e)}},down:function(){if(!t.$body.hasClass("fullscreen")){var e,o=t.current,i=t.slides.length,n=t.settings.thumbnailsPerRow;e=o>=i-n?o-i+n:o+n,t.switchTo(e)}},show:function(){u.$emit("actionClose"),t.$body.hasClass("fullscreen")&&(t.$body.removeClass("fullscreen"),t.$main.focus())},hide:function(){t.$body.hasClass("fullscreen")||(t.$body.addClass("fullscreen"),t.$main.blur())},toggle:function(){t.$body.hasClass("fullscreen")?t.show():t.hide()}};return t}(jQuery);var p=o("4bb5"),v=o("c6c6"),h=o.n(v);o("5aea");const m=new h.a(window.navigator.userAgent);let f=class extends l["c"]{constructor(){super(...arguments),this.endpoint="https://api.chernobyl.download:3000"}async mounted(){if(m.phone()){const e=document.querySelector("body");e.classList.add("mobile")}await this.getVideoSources(this.endpoint),d.init()}actionPlay(){u.$emit("actionPlay")}};r["a"]([Object(p["b"])("videoSources")],f.prototype,"videoSourceState",void 0),r["a"]([Object(p["a"])("getSources")],f.prototype,"getVideoSources",void 0),f=r["a"]([l["a"]],f);var g=f,w=g,y=o("2877"),b=Object(y["a"])(w,n,s,!1,null,null,null),$=b.exports,x=o("8c4f"),S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"viewer"}},[o("div",{staticClass:"inner"},[o("div",{staticClass:"toggle"})]),o("div",{staticClass:"slide active"},[o("video",{attrs:{id:"player"}})])])}];o("78f6");const P=o("4fb8"),k=new h.a(window.navigator.userAgent);let _=class extends l["c"]{constructor(){super(...arguments),this.stream={},this.defaultTitle="Чернобыль",this.isMobileDevice=!1,this.playerControlsDesktop=["play-large","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","download","fullscreen"],this.playerControlsMobile=["play-large","play","progress","current-time","duration","settings","fullscreen"]}mounted(){u.$on("actionPlay",()=>{this.onUrlChange(this.$route)}),u.$on("actionClose",()=>{this.onClose()}),k.phone()&&(this.isMobileDevice=!0),this.$store.subscribe(({type:e})=>{"setSources"===e&&this.playerInit(this.videoSourceState[this.$route.meta])})}onClose(){this.isMobileDevice&&window.innerHeight>window.innerWidth&&this.player.stop()}onUrlChange(e){this.currentStream=this.videoSourceState[e.meta],this.playerChangeSource()}get currentStream(){return this.stream}set currentStream(e){this.stream=e}playerInit(e){let t=this.playerControlsDesktop;!0===this.isMobileDevice&&(t=this.playerControlsMobile),this.player=new P("#player",{title:"Example title",urls:{download:e.download},controls:t}),this.player.source={type:"video",title:"Example title",sources:[{src:e["720"],type:"video/webm",size:720},{src:e["1080"],type:"video/webm",size:1080}],poster:e.poster},document.title=`«${e.title}» - ${this.defaultTitle}`,window.player=this.player}playerChangeSource(){if(this.isMobileDevice){const e=document.querySelector("body");e.classList.add("fullscreen")}this.player.source={type:"video",title:"Example title",sources:[{src:this.stream["480"],type:"video/webm",size:480},{src:this.stream["720"],type:"video/webm",size:720},{src:this.stream["1080"],type:"video/webm",size:1080}],poster:this.stream.poster},this.player.config.urls.download=this.stream.download,document.title=`«${this.stream.title}» - ${this.defaultTitle}`}};r["a"]([Object(l["b"])(Number)],_.prototype,"episode",void 0),r["a"]([Object(p["b"])("videoSources")],_.prototype,"videoSourceState",void 0),_=r["a"]([l["a"]],_);var T=_,E=T,O=Object(y["a"])(E,S,C,!1,null,null,null),j=O.exports;i["a"].use(x["a"]);var D=new x["a"]({mode:"history",linkActiveClass:"active",routes:[{path:"/",redirect:"/episode1"},{path:"/episode1",name:"episode1",component:j,props:{episode:1},meta:"0"},{path:"/episode2",name:"episode2",component:j,props:{episode:2},meta:"1"},{path:"/episode3",name:"episode3",component:j,props:{episode:3},meta:"2"},{path:"/episode4",name:"episode4",component:j,props:{episode:4},meta:"3"},{path:"/episode5",name:"episode5",component:j,props:{episode:5},meta:"4"}]}),M=o("2f62"),X=o("bc3a"),Y=o.n(X);i["a"].use(M["a"]);const z={state:{videoSources:[],server:""},mutations:{setServer(e,t){e.server=t},setSources(e,t){e.videoSources=t}},actions:{async getSources({commit:e},t){const o=await Y.a.get(t);e("setSources",o.data.videoSources),e("setServer",o.data.server)}}};var H=new M["a"].Store(z);i["a"].config.productionTip=!1,window.vueInstance=new i["a"]({router:D,store:H,render:e=>e($)}).$mount("#main")}});
//# sourceMappingURL=app.75c3598d.js.map