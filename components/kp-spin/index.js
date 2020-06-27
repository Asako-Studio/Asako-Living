(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-spin/index"],{5633:function(t,e,n){"use strict";n.r(e);var a=n("b970"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=o.a},"8bc1":function(t,e,n){"use strict";n.r(e);var a=n("a615"),o=n("5633");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("0c13");var i,l=n("f0c5"),r=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"ac2c0c8e",null,!1,a["a"],i);e["default"]=r.exports},a615:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))},b970:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="k-spin",o={name:"KpSpin",props:{size:{type:String,default:"default"},center:{type:Boolean,default:!0},fix:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},color:{type:String,default:"#623bff"},height:{type:[String,Number],default:300},loadImage:[String,Boolean],loadImageSize:{type:[String,Number],default:160}},data:function(){return{prefixCls:a}},computed:{spinImage:function(){if(this.loadImage)return"boolean"===typeof this.loadImage?"https://6173-asako-studio-9c2pl-1301657606.tcb.qcloud.la/static/loading_default.svg?sign=119845efd5dde7f3874c62e5b2be11b3&t=1585118875":"string"===typeof this.loadImage&&this.loadImage}},methods:{}};e.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-spin/index-create-component',
    {
        'components/kp-spin/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8bc1"))
        })
    },
    [['components/kp-spin/index-create-component']]
]);
