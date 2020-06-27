(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-tag/index"],{8926:function(t,e,n){"use strict";n.r(e);var r=n("94a4"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},"94a4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"KpTag",props:{type:{type:String,validator:function(t){return["primary","error","default","success","grey"].includes(t)},default:"primary"},color:String,bgColor:String,size:{type:String,default:""},weight:{type:[Boolean,Number,String],default:400},shape:{type:String,validator:function(t){return["circle","square","fillet"].includes(t)},default:"fillet"},plain:{type:Boolean,default:!1}},data:function(){return{prefixCls:"k-tag"}},computed:{},methods:{handleClick:function(){this.$emit("click")}}};e.default=r},d5d7:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))},e24e:function(t,e,n){"use strict";n.r(e);var r=n("d5d7"),a=n("8926");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("aa67");var i,l=n("f0c5"),c=Object(l["a"])(a["default"],r["b"],r["c"],!1,null,"dd46c694",null,!1,r["a"],i);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-tag/index-create-component',
    {
        'components/kp-tag/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e24e"))
        })
    },
    [['components/kp-tag/index-create-component']]
]);
