(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/land/index"],{2323:function(e,t,n){"use strict";n.r(t);var r=n("8753"),o=n("c190");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("c2e7");var a,c=n("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"f038d846",null,!1,r["a"],a);t["default"]=u.exports},"7ccf":function(e,t,n){"use strict";(function(e){n("167a");r(n("66fd"));var t=r(n("2323"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},8753:function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.feedback.guideShare=!1},e.e1=function(t){e.feedback.guidePraise=!1},e.e2=function(t){e.feedback.guideSetting=!1},e.e3=function(t){e.feedback.guideSetting=!1})},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))},c190:function(e,t,n){"use strict";n.r(t);var r=n("eaea"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},eaea:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),o=a(n("c33d")),i=n("f856");function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return g(e)||p(e,t)||f(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done);r=!0)if(n.push(a.value),t&&n.length===t)break}catch(u){o=!0,i=u}finally{try{r||null==c["return"]||c["return"]()}finally{if(o)throw i}}return n}}function g(e){if(Array.isArray(e))return e}var b=function(){Promise.all([n.e("common/vendor"),n.e("components/kp-spin/index")]).then(function(){return resolve(n("8bc1"))}.bind(null,n)).catch(n.oe)},m=function(){Promise.all([n.e("common/vendor"),n.e("components/kp-icon/index")]).then(function(){return resolve(n("330f"))}.bind(null,n)).catch(n.oe)},y=function(){Promise.all([n.e("common/vendor"),n.e("components/kp-navbar/index")]).then(function(){return resolve(n("a14c"))}.bind(null,n)).catch(n.oe)},v=function(){Promise.all([n.e("common/vendor"),n.e("components/kp-actionsheet/index")]).then(function(){return resolve(n("450b"))}.bind(null,n)).catch(n.oe)},x=function(e){var t=(0,i.getCurrentDate)(),n=l(t,4),r=n[0];n[1],n[2],n[3];return{width:900,height:1600,pixelRatio:1.5,backgroundColor:"#fff",debug:!1,"hide-loading":!0,images:[{width:900,height:1600,x:0,y:0,url:e.url,zIndex:1}],texts:[{x:600,y:1585,fontSize:28,fontWeight:300,color:"#f6f6f6",text:"浅子影报小程序 • ".concat(r),zIndex:2}]}},S={components:{KpSpin:b,KpIcon:m,KpNavbar:y,KpActionsheet:v},data:function(){return{entry:{loading:!0,list:[]},feedback:{guideShare:!1,guideShareList:[{text:"分享给朋友",opentype:"share"},{text:"生成分享海报",color:"#07C160"}],guidePraise:!1,guidePraiseList:[{text:"鼓励一下",color:"#07C160",opentype:"share"}],guideSetting:!1,guideSettingList:[{text:"去授权",color:"#FA5151",opentype:"openSetting"}]},poster:{config:{}},customShare:{}}},computed:u({},(0,r.mapState)(["app","community"])),onLoad:function(e){if(e.url&&(this.entry=u({},this.entry,{list:Array.of(e.url),current:0})),["number","string"].includes(typeof e.index)){var t=this.$store.state.community.data,n=this.$store.state.app.wallpapers;"wallpapers"===e.type?this.entry=u({},this.entry,{list:n,current:e.index,source:"creator"}):this.entry=u({},this.entry,{list:e.index>10?t.slice(e.index-9,Number(e.index)+1).reverse():t,current:e.index>10?0:e.index})}var r=this.entry,o=r.list,i=r.current;this.poster.config=x({url:o[i]})},onReady:function(){this.entry.loading=!1},onShareAppMessage:function(e){var t=this.$store.state.app,n=this.customShare.path,r=this.entry,o=r.list,i=r.current;return{title:t.shares.title,path:n||"pages/land/index?url=".concat(o[i])}},methods:{handleCommonRoute:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n)return e.switchTab({url:t});e.navigateTo({url:t})},handleSwiperChange:function(e){var t=e.detail.current;this.entry.current=t,this.poster.config=x({url:this.entry.list[t]})},handleToggleRender:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&this.$nextTick((function(){o.default.create(!0,e)}))},onPosterSuccess:function(t){var n=this,r=t.detail;r&&(e.showLoading({title:"壁纸保存中 . . ."}),e.saveImageToPhotosAlbum({filePath:r,success:function(t){e.hideLoading(),e.showToast({title:"壁纸已保存至相册",icon:"success"}),n.feedback.guidePraise=!0,n.customShare.path="pages/home/index"},fail:function(t){e.showToast({title:t.errMsg.includes("cancel")?"下次别忘了保存哦":"壁纸保存失败",icon:"none"}),t.errMsg.includes("auth")&&(n.feedback.guideSetting=!0)}}))},onPosterFail:function(e){},handleOperateAction:function(e){switch(e){case"set":this.handleCommonRoute("/pages/about/index");break;case"download":o.default.create();break;case"share":this.feedback.guideShare=!0;break;case"guidePraise":this.feedback.guidePraise=!1;default:break}},handleSharePoster:function(e){var t=this,n=this.entry,r=n.list,o=n.current,i=n.source;switch(e){case 1:var a=this.$store.state.app.images;this.handleCommonRoute("/pages/poster/index?url=".concat(r[o],"&qrcode=").concat("creator"===i?a.qrcodes.creator:a.qrcodes.home));break;case 0:default:break}setTimeout((function(e){t.feedback.guideShare=!1}),500)}}};t.default=S}).call(this,n("543d")["default"])}},[["7ccf","common/runtime","common/vendor"]]]);