(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2711"],{"+2Au":function(n,t,e){},"83FQ":function(n,t,e){"use strict";var s=e("Mera");e.n(s).a},Mera:function(n,t,e){},c11S:function(n,t,e){"use strict";var s=e("gTgX");e.n(s).a},gTgX:function(n,t,e){},mqYz:function(n,t,e){"use strict";var s=e("+2Au");e.n(s).a},ntYl:function(n,t,e){"use strict";e.r(t);e("fe1z");var s=e("ETGp"),o={name:"SocialSignin",methods:{wechatHandleClick:function(n){alert("ok")},tencentHandleClick:function(n){alert("ok")}}},i=(e("83FQ"),e("KHd+")),a=Object(i.a)(o,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(t){n.wechatHandleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),n._v(" 微信\n  ")]),n._v(" "),e("div",{staticClass:"sign-btn",on:{click:function(t){n.tencentHandleClick("tencent")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),n._v(" QQ\n  ")])])},[],!1,null,"e89b5c7a",null);a.options.__file="socialsignin.vue";var r=a.exports,l={name:"Login",components:{LangSelect:s.a,SocialSign:r},data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,t,e){e()}}],password:[{required:!0,trigger:"blur",validator:function(n,t,e){t.length<6?e(new Error("The password can not be less than 6 digits")):e()}}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(n){this.redirect=n.query&&n.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("LoginByUsername",n.loginForm).then(function(){console.log("will push"),n.loading=!1,n.$router.push({path:n.redirect||"/"})}).catch(function(t){n.$notify({title:"登录失败",message:"登录操作失败，请检查用户名或密码",type:"error",duration:2e3}),console.error(t,"error"),n.loading=!1})})},afterQRScan:function(){}}},c=(e("c11S"),e("mqYz"),Object(i.a)(l,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[n._v("佰善医疗(眼科普查)管理系统")]),n._v(" "),e("lang-select",{staticClass:"set-language"})],1),n._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),e("el-input",{attrs:{placeholder:n.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),n._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),e("el-input",{attrs:{type:n.passwordType,placeholder:n.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.handleLogin(t):null}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),n._v(" "),e("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),n.handleLogin(t)}}},[n._v(n._s(n.$t("login.logIn")))])],1),n._v(" "),e("el-dialog",{attrs:{title:n.$t("login.thirdparty"),visible:n.showDialog,"append-to-body":""},on:{"update:visible":function(t){n.showDialog=t}}},[n._v("\n    "+n._s(n.$t("login.thirdpartyTips"))+"\n    "),e("br"),n._v(" "),e("br"),n._v(" "),e("br"),n._v(" "),e("social-sign")],1)],1)},[],!1,null,"14d5a583",null));c.options.__file="index.vue";t.default=c.exports}}]);