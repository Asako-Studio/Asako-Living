(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-icon/index"],{"0e98":function(t,n,e){"use strict";var c,o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return c}))},"330f":function(t,n,e){"use strict";e.r(n);var c=e("0e98"),o=e("69de");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("1acc");var u,i=e("f0c5"),a=Object(i["a"])(o["default"],c["b"],c["c"],!1,null,"6195e7fd",null,!1,c["a"],u);n["default"]=a.exports},"69de":function(t,n,e){"use strict";e.r(n);var c=e("d7cc"),o=e.n(c);for(var r in c)"default"!==r&&function(t){e.d(n,t,(function(){return c[t]}))}(r);n["default"]=o.a},d7cc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=e("f856"),o={name:"KpIcon",props:{type:String,size:{type:[Number,String],default:28},color:{type:String,default:"#fff"},svg:Boolean},data:function(){return{prefixCls:"m-icon"}},created:function(){this.svg&&(0,c.loadExternalJS)(["https://at.alicdn.com/t/font_1411765_dy1q2y9unph.js"])},computed:{iconName:function(){return"#".concat(this.prefixCls,"-").concat(this.type)}},methods:{onClick:function(){this.$emit("click")}}};n.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-icon/index-create-component',
    {
        'components/kp-icon/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("330f"))
        })
    },
    [['components/kp-icon/index-create-component']]
]);
