(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9981"],{"1Znb":function(e,t,n){"use strict";n.r(t);var r=n("14Xm"),a=n.n(r),i=n("D3Ub"),o=n.n(i),u=n("iCc5"),s=n.n(u),l=n("V7oC"),c=n.n(l),f=n("t6Sf"),d=(n("mRI9"),{filters:{},mixins:[f.a],data:function(){return{objStr:"questionnaire",source:new p}},methods:{}}),p=function(){function e(){s()(this,e),this.defaultObject={question:[],remark:""},this.rules={objectId:[{required:!0,message:"必填",trigger:"blur"}],question:[{required:!0,message:"必填",trigger:"blur"}],remark:[{required:!0,message:"必填",trigger:"blur"}],createdAt:[{required:!0,message:"必填",trigger:"blur"}],updatedAt:[{required:!0,message:"必填",trigger:"blur"}]}}return c()(e,[{key:"all",value:function(){var e=o()(a.a.mark(function e(t){var n,r,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Bmob.Query("questionnaire"),e.next=3,n.count();case 3:return r=e.sent,t.page&&t.pageSize&&(n.skip(t.pageSize*(t.page-1)),n.limit(t.pageSize)),n.order("-createdAt"),e.next=8,n.find();case 8:return i=e.sent,e.abrupt("return",{total:r,data:i});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=o()(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Bmob.Query("questionnaire"),e.next=3,n.get(t.objectId);case 3:return(r=e.sent).set("question",t.question),r.set("remark",t.remark),e.abrupt("return",r.save());case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"add",value:function(){var e=o()(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=Bmob.Query("questionnaire")).set("question",t.question),n.set("remark",t.remark),e.abrupt("return",n.save());case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteObj",value:function(){var e=o()(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Bmob.Query("questionnaire"),e.abrupt("return",n.destroy(t.objectId));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),g=d,m=(n("g61c"),n("KHd+")),b=Object(m.a)(g,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.add}},[e._v("添加")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"对象ID",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.objectId))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"问题",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.question))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"评论",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"创建日期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.createdAt))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"更新日期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.updatedAt))]}}])}),e._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"操作",align:"center",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button-group",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){e.edit(t.row)}}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){e.deleteRow(t.row)}}},[e._v("删除")])],1)]}}])})],1),e._v(" "),e.query.total?n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.query.pageNum,"page-sizes":[5,10,20,30,50],"page-size":e.query.pageSize,total:e.query.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e(),e._v(" "),n("el-dialog",{attrs:{visible:e.addDialogVisible,title:e.dialogTitle},on:{"update:visible":function(t){e.addDialogVisible=t}}},[n("el-form",{staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.row,rules:e.rules,"label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"问题",prop:"question"}},[n("el-input",{attrs:{placeholder:"请输入问题"},model:{value:e.row.question,callback:function(t){e.$set(e.row,"question",t)},expression:"row.question"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"评论",prop:"remark"}},[n("el-input",{attrs:{placeholder:"请输入评论"},model:{value:e.row.remark,callback:function(t){e.$set(e.row,"remark",t)},expression:"row.remark"}})],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},[],!1,null,null,null);b.options.__file="questionnaireManage.vue";t.default=b.exports},"RU/L":function(e,t,n){n("Rqdy");var r=n("WEpk").Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},Rqdy:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SEkw:function(e,t,n){e.exports={default:n("RU/L"),__esModule:!0}},V7oC:function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n("SEkw"));t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r.default)(e,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},cY7Q:function(e,t,n){},g61c:function(e,t,n){"use strict";var r=n("cY7Q");n.n(r).a},iCc5:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},mRI9:function(e,t,n){"use strict";var r=n("4d7F"),a=n.n(r),i=n("iCc5"),o=n.n(i),u=n("V7oC"),s=n.n(u);function l(){return{id:parseInt(10*Math.random()),title:"Title#"+parseInt(1e5*Math.random())}}var c=function(){function e(){o()(this,e)}return s()(e,null,[{key:"all",value:function(){return f([l(),l(),l()])}},{key:"edit",value:function(e){return f("修改结果")}},{key:"add",value:function(e){return f("添加结果")}},{key:"deleteObj",value:function(e){return f("删除结果")}}]),e}();function f(e){return console.log("模拟返回"),new a.a(function(t,n){t(e)})}c.defaultObject={},c.rules={},t.a=c},t6Sf:function(e,t,n){"use strict";var r=n("4d7F"),a=n.n(r),i=n("P2sY"),o=n.n(i),u=n("14Xm"),s=n.n(u),l=n("D3Ub"),c=n.n(l),f=n("mRI9");t.a={computed:{dialogTitle:function(){return(this.isNew?"新增":"修改")+this.objStr}},filters:{},data:function(){return{objStr:"#对象#",list:[],listLoading:!0,query:{total:0,pageSize:5,page:1},addDialogVisible:!1,isNew:!1,row:{},rules:{},source:f.a,datePickOption:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},created:function(){this.queryAll()},methods:{queryAll:function(){var e=this;return c()(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.prev=1,t.next=4,e.source.all(e.query);case 4:(n=t.sent).total?(e.list=n.data,e.query.total=n.total):e.list=n,console.log("查询数据:",e.list),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0),e.notifyError("查询失败","查询数据时发生错误"),e.listLoading=!1;case 14:e.listLoading=!1;case 15:case"end":return t.stop()}},t,e,[[1,9]])}))()},add:function(){var e=this;return c()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.isNew=!0,e.row=o()({},e.source.defaultObject),e.rules=f.a.rules,e.addDialogVisible=!0;case 4:case"end":return t.stop()}},t,e)}))()},edit:function(e){console.log("edit",e),this.isNew=!1,this.row=o()({},e),this.rules=f.a.rules,this.addDialogVisible=!0},submit:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.row;return c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("###submit",t,e.isNew),n.prev=1,!e.isNew){n.next=9;break}return console.log("add"),n.next=6,e.source.add(e.row);case 6:e.notifySuccess("新增成功","成功新增"+e.objStr),n.next=13;break;case 9:return console.log("edit"),n.next=12,e.source.edit(e.row);case 12:e.notifySuccess("修改成功",e.objStr+"修改成功");case 13:n.next=19;break;case 15:n.prev=15,n.t0=n.catch(1),console.error(n.t0),e.notifyError("失败","操作发生错误，数据提交失败.");case 19:return e.addDialogVisible=!1,n.next=22,e.queryAll();case 22:case"end":return n.stop()}},n,e,[[1,15]])}))()},deleteRow:function(e){var t=this;return c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$confirm("删除操作将不能撤销, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"});case 2:return n.next=4,t.source.deleteObj(e);case 4:return t.notifySuccess("删除成功",t.objStr+"已被删除"),n.next=7,t.queryAll();case 7:case"end":return n.stop()}},n,t)}))()},handleSizeChange:function(e){this.query.page=1,this.query.pageSize=e,console.log("handleSizeChange",e),this.queryAll()},handleCurrentChange:function(e){this.query.page=e,console.log("handleCurrentChange",e),this.queryAll()},goback:function(){this.$router.go(-1)},notifyError:function(e,t){this.$notify({title:e,message:t,type:"error",duration:2e3})},notifyWarning:function(e,t){this.$notify({title:e,message:t,type:"warning",duration:2e3})},notifySuccess:function(e,t){this.$notify({title:e,message:t,type:"success",duration:2e3})},needInterface:function(){this.$notify({title:"等待开发",message:"需要后台接口",type:"warning",duration:2e3})},fakePromise:function(){return new a.a(function(e,t){e()})}}}}}]);