(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55c4a2ee"],{"13d5":function(e,t,s){"use strict";var a=s("23e7"),n=s("d58f").left,i=s("a640"),c=s("ae40"),l=s("2d00"),r=s("605d"),o=i("reduce"),u=c("reduce",{1:0}),h=!r&&l>79&&l<83;a({target:"Array",proto:!0,forced:!o||!u||h},{reduce:function(e){return n(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},a623:function(e,t,s){"use strict";var a=s("23e7"),n=s("b727").every,i=s("a640"),c=s("ae40"),l=i("every"),r=c("every");a({target:"Array",proto:!0,forced:!l||!r},{every:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},a939:function(e,t,s){},c4e3:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"container"},[s("div",{staticClass:"fixed-warp"},[s("div",{staticClass:"slider-warp"},[s("div",{staticClass:"title flex-column-center",staticStyle:{height:"54px"}},[s("div",{staticClass:"flex-row-space-between"},[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[e._v(e._s(e.$t("views.vulnList.filter")))]),s("el-button",{staticClass:"resetAllBtn",staticStyle:{height:"14px"},attrs:{type:"text"},on:{click:e.reset}},[s("span",{staticStyle:{"font-size":"12px"}},[e._v(" "+e._s(e.$t("views.vulnList.resetAll"))+" ")])])],1)]),s("div",{staticClass:"module-title flex-row-space-between",staticStyle:{"margin-top":"14px","margin-bottom":"0px"}},[s("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(e.$t("views.vulnList.project_name")))]),s("div",{staticClass:"reset-btn",on:{click:function(t){return e.projectNameChange("")}}},[s("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(e.$t("views.vulnList.reset")))])])]),s("div",{staticClass:"search-box"},[s("el-autocomplete",{staticClass:"commonInput",staticStyle:{margin:"12px 0 0 0"},attrs:{size:"small",clearable:"",placeholder:e.$t("views.vulnList.searchName"),"fetch-suggestions":e.querySearchAsync},on:{select:e.handleSelect},model:{value:e.kw,callback:function(t){e.kw=t},expression:"kw"}})],1),e._l(e.searchOptionsObj.projects,(function(t){return s("div",{key:t.id,staticClass:"flex-row-space-between module-line",class:e.searchObj.project_id===t.id?"selectedLine":"",style:0===t.count?{cursor:"not-allowed",height:"30px","font-size":"14px"}:{height:"30px"},on:{click:function(s){return e.projectNameChange(t.id,0===t.count)}}},[s("div",{staticClass:"selectOption",attrs:{title:t.project_name}},[s("span",[e._v(" "+e._s(e.projectNameSplit(t.project_name,12))+e._s(t.project_name.length>12?"...":"")+" ")])]),s("div",{staticClass:"num"},[s("span",[e._v(" "+e._s(t.count)+" ")])])])})),s("div",{staticClass:"module-title flex-row-space-between",staticStyle:{"margin-top":"14px","margin-bottom":"0px"}},[s("span",{staticStyle:{"font-size":"14px"}},[e._v(" "+e._s(e.$t("views.vulnList.type"))+" ")]),s("div",{staticClass:"reset-btn",on:{click:function(t){return e.typeChange("")}}},[s("span",{staticStyle:{"font-size":"14px"}},[e._v(" "+e._s(e.$t("views.vulnList.reset"))+" ")])])]),e._l(e.searchOptionsObj.type,(function(t){return s("div",{key:t.type,staticClass:"flex-row-space-between module-line",class:e.searchObj.type===t.type?"selectedLine":"",style:0===t.count?{cursor:"not-allowed",height:"30px","font-size":"14px"}:{height:"30px","font-size":"14px"},on:{click:function(s){return e.typeChange(t.type,0===t.count)}}},[s("div",{staticClass:"selectOption"},[e._v(" "+e._s(t.type)+" ")]),s("div",{staticClass:"num"},[e._v(" "+e._s(t.count)+" ")])])})),s("div",{staticClass:"module-title flex-row-space-between",staticStyle:{"margin-top":"14px","margin-bottom":"0px"}},[s("span",{staticStyle:{"font-size":"14px"}},[e._v(" "+e._s(e.$t("views.vulnList.level"))+" ")]),s("div",{staticClass:"reset-btn",on:{click:function(t){return e.levelChange("")}}},[s("span",{staticStyle:{"font-size":"14px"}},[e._v(" "+e._s(e.$t("views.vulnList.reset"))+" ")])])]),e._l(e.searchOptionsObj.level,(function(t){return s("div",{key:t.level_id,staticClass:"flex-row-space-between module-line",class:e.searchObj.level===t.level_id?"selectedLine":"",style:0===t.count?{cursor:"not-allowed",height:"30px","font-size":"14px"}:{height:"30px","font-size":"14px"},on:{click:function(s){return e.levelChange(t.level_id,0===t.count)}}},[s("div",{staticClass:"selectOption"},[e._v(" "+e._s(t.level)+" ")]),s("div",{staticClass:"num"},[e._v(" "+e._s(t.count)+" ")])])})),s("div",{staticClass:"module-title flex-row-space-between",staticStyle:{"margin-top":"14px","margin-bottom":"0px"}},[s("span",{staticStyle:{"font-size":"14px"}},[e._v(" "+e._s(e.$t("views.vulnList.language"))+" ")]),s("div",{staticClass:"reset-btn",on:{click:function(t){return e.languageChange("")}}},[s("span",{staticStyle:{"font-size":"14px"}},[e._v(" "+e._s(e.$t("views.vulnList.reset"))+" ")])])]),e._l(e.searchOptionsObj.language,(function(t){return s("div",{key:t.language,staticClass:"flex-row-space-between module-line",class:e.searchObj.language===t.language?"selectedLine":"",style:0===t.count?{cursor:"not-allowed",height:"30px","font-size":"14px"}:{height:"30px","font-size":"14px"},on:{click:function(s){return e.languageChange(t.language,0===t.count)}}},[s("div",{staticClass:"selectOption"},[e._v(" "+e._s(t.language)+" ")]),s("div",{staticClass:"num"},[e._v(" "+e._s(t.count)+" ")])])}))],2)]),s("div",{staticClass:"main-warp"},[s("div",{staticClass:"tool-box"},[s("div",{staticClass:"selectForm"},[s("el-select",{staticClass:"commonSelect vulnSelect",staticStyle:{width:"150px","font-size":"14px"},attrs:{size:"small",placeholder:e.$t("views.vulnList.sort"),clearable:""},on:{change:e.newSelectData},model:{value:e.searchObj.order,callback:function(t){e.$set(e.searchObj,"order",t)},expression:"searchObj.order"}},e._l(e.searchOptionsObj.orderOptions,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),null===e.searchObj.sort?s("i",{staticClass:"el-icon-sort sort-btn",on:{click:function(t){return e.sortSelect(!0)}}}):e._e(),!0===e.searchObj.sort?s("i",{staticClass:"el-icon-sort-up sort-btn",on:{click:function(t){return e.sortSelect(!1)}}}):e._e(),!1===e.searchObj.sort?s("i",{staticClass:"el-icon-sort-down sort-btn",on:{click:function(t){return e.sortSelect(null)}}}):e._e(),s("el-select",{staticClass:"commonSelect",staticStyle:{"margin-left":"10px",width:"150px","font-size":"14px"},attrs:{placeholder:e.$t("views.vulnList.developLanguage"),size:"small",clearable:""},on:{change:e.newSelectData},model:{value:e.searchObj.language,callback:function(t){e.$set(e.searchObj,"language",t)},expression:"searchObj.language"}},[s("el-option",{attrs:{label:"JAVA",value:"JAVA"}}),s("el-option",{attrs:{label:"PYTHON",value:"PYTHON"}})],1),s("el-select",{staticClass:"commonSelect",staticStyle:{"margin-left":"10px",width:"160px","font-size":"14px"},attrs:{size:"small",placeholder:e.$t("views.vulnList.vulnStatus"),clearable:""},on:{change:e.newSelectData},model:{value:e.searchObj.status,callback:function(t){e.$set(e.searchObj,"status",t)},expression:"searchObj.status"}},[s("el-option",{attrs:{label:e.$t("views.vulnList.toVeVerified"),value:"待验证"}}),s("el-option",{attrs:{label:e.$t("views.vulnList.verification"),value:"验证中"}}),s("el-option",{attrs:{label:e.$t("views.vulnList.confirmed"),value:"已确认"}}),s("el-option",{attrs:{label:e.$t("views.vulnList.ignored"),value:"已忽略"}}),s("el-option",{attrs:{label:e.$t("views.vulnList.processed"),value:"已处理"}})],1),s("div",{staticClass:"selectInput"},[s("el-input",{staticClass:"commonInput",staticStyle:{width:"370px"},attrs:{size:"small",placeholder:e.$t("views.vulnList.searchExample")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newSelectData(t)}},model:{value:e.searchObj.url,callback:function(t){e.$set(e.searchObj,"url",t)},expression:"searchObj.url"}},[s("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.newSelectData},slot:"suffix"})])],1)],1),s("div",{staticClass:"checked-bar"},[s("el-checkbox",{attrs:{value:e.tableData.length>0&&e.tableData.every((function(e){return e.checked}))},on:{change:e.selectAll}},[e._v(e._s(e.$t("views.vulnList.choose"))+" "),s("span",{staticStyle:{color:"#1a80f2"}},[e._v(e._s(e.tableData.filter((function(e){return e.checked})).length))]),e._v(" "+e._s(e.$t("views.vulnList.strip")))]),s("div",[s("el-button",{staticClass:"checkedAllBtn",on:{click:function(t){return e.recheck("project")}}},[e._v(" "+e._s(e.$t("views.vulnList.verificationBatch"))+" ")]),s("el-button",{staticClass:"checkedAllBtn",on:{click:function(t){return e.recheck("all")}}},[e._v(" "+e._s(e.$t("views.vulnList.verificationAll"))+" ")])],1)],1)]),s("div",{staticClass:"tool-box-placeholder"}),e._l(e.tableData,(function(t){return s("div",{key:t.id,staticClass:"card"},[s("div",{staticClass:"card-title flex-row-space-between",staticStyle:{height:"33px","min-height":"32px"}},[s("span",{staticClass:"title",staticStyle:{"font-size":"14px","font-weight":"bold",height:"32px"}},[s("el-checkbox",{staticStyle:{"margin-right":"12px","margin-top":"2px"},model:{value:t.checked,callback:function(s){e.$set(t,"checked",s)},expression:"item.checked"}}),s("span",{on:{click:function(s){return e.goDetail(t.id)}}},[e._v(" "+e._s(""+t.uri+e.$t("views.vulnList.is")+t.http_method+e.$t("views.vulnList.reqHas")+t.type+e.$t("views.vulnList.vule")+(t.taint_position?"，"+e.$t("views.vulnList.position")+"："+t.taint_position:""))+" ")])],1),s("span",{staticClass:"time flex-column-center",staticStyle:{"font-size":"12px",height:"32px"}},[e._v(" "+e._s(t.first_time)+" ")])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"top-stack"},[s("i",{staticClass:"iconfont iconyuandianzhong"}),s("span",[e._v(" "+e._s(t.top_stack)+" ")])]),s("div",{staticClass:"bottom-stack"},[s("i",{staticClass:"iconfont iconyuandianzhong"}),s("span",[e._v(" "+e._s(t.bottom_stack)+" ")])]),s("div",{staticClass:"infoLine flex-row-space-between"},[s("div",{staticClass:"flex-row-space-between",staticStyle:{width:"60%"}},[s("span",{staticClass:"info"},[s("i",{staticClass:"iconfont iconyingyong",staticStyle:{color:"#a3b0e2"}}),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.project_name,placement:"top-start",disabled:t.project_name.length<=11}},[s("span",{staticClass:"dot",staticStyle:{cursor:"pointer"},on:{click:function(s){return e.$router.push("/project/projectDetail/"+t.project_id)}}},[e._v(" "+e._s(t.project_name))])])],1),s("span",{staticClass:"info",staticStyle:{flex:"1.5"}},[s("i",{staticClass:"iconfont",class:e.switchServerType(t.server_type)}),e._v(" "+e._s(t.server_name)+" ")]),s("span",{staticClass:"info",style:1===t.level_type?{color:"#EA7171"}:2===t.level_type?{color:"#F39D0A"}:3===t.level_type?{color:"#2E8FE9"}:4===t.level_type?{color:"#7BC1AB"}:""},[s("i",{staticClass:"iconfont iconweixian"}),e._v(" "+e._s(t.level)+" ")]),s("span",{staticClass:"info"},[s("i",{staticClass:"iconfont iconshijian-2",staticStyle:{color:"#a2a5ab","font-size":"14px"}}),e._v(" "+e._s(t.latest_time)+" ")])]),s("div",[s("div",{staticClass:"tageIcon",staticStyle:{"margin-left":"20px"}},[s("i",{staticClass:"iconfont iconicon_yingyong_table",staticStyle:{color:"#e7f5e4"}}),s("span",{staticStyle:{background:"#e7f5e4",color:"#63974e"}},[e._v(" "+e._s(t.language)+" ")])]),s("div",{staticClass:"tageIcon",staticStyle:{"margin-left":"20px"}},[s("i",{staticClass:"iconfont iconicon_yingyong_table",staticStyle:{color:"#fce9de"}}),s("span",{staticStyle:{background:"#fce9de",color:"#e07d43"}},[e._v(" "+e._s(t.type)+" ")])]),s("div",{staticClass:"tageIcon",staticStyle:{"margin-left":"20px"}},[s("i",{staticClass:"iconfont iconicon_yingyong_table",staticStyle:{color:"#e5f3f3"}}),s("span",{staticStyle:{background:"#e5f3f3",color:"#3c9aa2"}},[e._v(" "+e._s(t.status)+" ")])])])])])])}))],2)])},n=[],i=(s("99af"),s("a623"),s("4de4"),s("4160"),s("d81d"),s("13d5"),s("b0c0"),s("159b"),s("2909")),c=s("5530"),l=(s("96cf"),s("1da1")),r=s("d4ec"),o=s("bee2"),u=s("262e"),h=s("2caf"),v=s("9ab4"),p=s("60a3"),d=s("73ec"),f=s("8c73"),b=function(e){Object(u["a"])(s,e);var t=Object(h["a"])(s);function s(){var e;return Object(r["a"])(this,s),e=t.apply(this,arguments),e.page=1,e.pageSize=20,e.dataEnd=!1,e.tableData=[],e.searchOptionsObj={language:[],level:[],type:[],projects:[],orderOptions:[{label:e.$t("views.vulnList.orderOptions.type"),value:"type"},{label:e.$t("views.vulnList.orderOptions.level"),value:"level"},{label:e.$t("views.vulnList.orderOptions.url"),value:"url"},{label:e.$t("views.vulnList.orderOptions.latest_time"),value:"latest_time"},{label:e.$t("views.vulnList.orderOptions.first_time"),value:"first_time"}]},e.searchObj={sort:null,language:"",level:"",type:"",project_name:"",url:"",order:"",status:"",project_id:""},e.kw="",e}return Object(o["a"])(s,[{key:"created",value:function(){this.getTableData(),this.vulnSummary()}},{key:"querySearchAsync",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,s){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.services.setting.searchProject({name:t});case 3:a=e.sent,201===a.status&&(n=a.data.map((function(e){return{value:e.name,id:e.id}})),s(n));case 5:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}()},{key:"handleSelect",value:function(e){this.projectNameChange(e.id,!1)}},{key:"sortSelect",value:function(e){this.searchObj.sort=e,this.newSelectData()}},{key:"recheck",value:function(e){var t=this;this.$confirm("".concat(this.$t("views.vulnList.will")).concat("all"===e?this.$t("views.vulnList.all"):this.$t("views.vulnList.batch")).concat(this.$t("views.vulnList.recheckDesc")),this.$t("views.vulnList.recheckInfo"),{confirmButtonText:this.$t("views.vulnList.confirmButtonText"),cancelButtonText:this.$t("views.vulnList.cancelButtonText"),type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a={},"all"!==e){s.next=7;break}return s.next=4,t.services.vuln.vulRecheckAll({type:e});case 4:a=s.sent,s.next=14;break;case 7:if(0!==t.tableData.length){s.next=10;break}return t.$message({type:"warning",message:t.$t("views.vulnList.chooseWarning"),showClose:!0}),s.abrupt("return");case 10:return n=t.tableData.map((function(e){if(e.checked)return e.id})).filter((function(e){return e})),s.next=13,t.services.vuln.vulRecheck({ids:String(n)});case 13:a=s.sent;case 14:if(201===a.status){s.next=18;break}t.$message({type:"error",message:a.msg,showClose:!0}),s.next=21;break;case 18:return t.$message({type:"success",message:a.msg,showClose:!0}),s.next=21,t.newSelectData();case 21:case"end":return s.stop()}}),s)}))))}},{key:"selectAll",value:function(e){var t=this,s=this.tableData.length>0&&this.tableData.every((function(e){return e.checked}));s?this.tableData.forEach((function(e){return t.$set(e,"checked",!1)})):this.tableData.forEach((function(e){return t.$set(e,"checked",!0)})),console.log(e)}},{key:"reset",value:function(){this.searchObj.sort=null,this.searchObj.language="",this.searchObj.level="",this.searchObj.type="",this.searchObj.project_name="",this.searchObj.status="",this.kw="",this.newSelectData()}},{key:"languageChange",value:function(e,t){t||(this.searchObj.language=e,this.newSelectData())}},{key:"levelChange",value:function(e,t){t||(this.searchObj.level=e,this.newSelectData())}},{key:"typeChange",value:function(e,t){t||(this.searchObj.type=e,this.newSelectData())}},{key:"projectNameChange",value:function(e,t){t||(this.searchObj.project_id=e,this.newSelectData())}},{key:"newSelectData",value:function(){this.page=1,this.dataEnd=!1,this.tableData=[],this.vulnSummary(),this.getTableData()}},{key:"mounted",value:function(){window.addEventListener("scroll",this.myScroll)}},{key:"beforeDestroy",value:function(){window.removeEventListener("scroll",this.myScroll)}},{key:"myScroll",value:function(){var e=document.documentElement.scrollTop+window.innerHeight>document.documentElement.offsetHeight-1;e&&(this.dataEnd||(this.page+=1,this.getTableData()))}},{key:"getTableData",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,s,a,n,l,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:this.page,pageSize:this.pageSize,language:this.searchObj.language,level:this.searchObj.level,type:this.searchObj.type,project_name:this.searchObj.project_name,url:this.searchObj.url,order:"".concat(!1===this.searchObj.sort&&this.searchObj.order?"-":"").concat(this.searchObj.order),status:this.searchObj.status,project_id:this.searchObj.project_id},this.loadingStart(),e.next=4,this.services.vuln.vulnList(t);case 4:if(s=e.sent,a=s.status,n=s.data,l=s.msg,this.loadingDone(),201===a){e.next=12;break}return this.$message({type:"error",message:l,showClose:!0}),e.abrupt("return");case 12:r=n.reduce((function(e,t){return e.push(Object(c["a"])(Object(c["a"])({},t),{},{first_time:Object(d["b"])(t.first_time),latest_time:Object(d["c"])(t.latest_time)})),e}),[]),r.length<20&&(this.dataEnd=!0),this.tableData=[].concat(Object(i["a"])(this.tableData),Object(i["a"])(r));case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"vulnSummary",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,s,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={language:this.searchObj.language,level:this.searchObj.level,type:this.searchObj.type,project_name:this.searchObj.project_name,url:this.searchObj.url,order:"".concat(!1===this.searchObj.sort&&this.searchObj.order?"-":"").concat(this.searchObj.order),status:this.searchObj.status,project_id:this.searchObj.project_id},this.loadingStart(),e.next=4,this.services.vuln.vulnSummary(t);case 4:if(s=e.sent,a=s.status,n=s.data,i=s.msg,this.loadingDone(),201===a){e.next=12;break}return this.$message({type:"error",message:i,showClose:!0}),e.abrupt("return");case 12:this.searchOptionsObj.language=n.language,this.searchOptionsObj.level=n.level,this.searchOptionsObj.type=n.type,this.searchOptionsObj.projects=n.projects;case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"goDetail",value:function(e){this.$router.push("/vuln/vulnDetail/".concat(this.page,"/").concat(e,"?status=")+this.searchObj.status)}},{key:"switchServerType",value:function(e){switch(e){case"tomcat":return"icontomcat";case"jetty":return"iconJetty";case"resin":return"iconresin";case"weblogic":return"iconwebLogic";case"websphere":return"iconwebSphere";case"jboss":return"iconJBoss";default:return"iconyingyong"}}},{key:"projectNameSplit",value:function(e,t){return e.length>t?e.substring(0,t):e}}]),s}(f["a"]);b=Object(v["b"])([Object(p["a"])({name:"VulnList"})],b);var g=b,m=g,y=(s("f2ce"),s("2877")),w=Object(y["a"])(m,a,n,!1,null,"7554c093",null);t["default"]=w.exports},d58f:function(e,t,s){var a=s("1c0b"),n=s("7b0b"),i=s("44ad"),c=s("50c4"),l=function(e){return function(t,s,l,r){a(s);var o=n(t),u=i(o),h=c(o.length),v=e?h-1:0,p=e?-1:1;if(l<2)while(1){if(v in u){r=u[v],v+=p;break}if(v+=p,e?v<0:h<=v)throw TypeError("Reduce of empty array with no initial value")}for(;e?v>=0:h>v;v+=p)v in u&&(r=s(r,u[v],v,o));return r}};e.exports={left:l(!1),right:l(!0)}},f2ce:function(e,t,s){"use strict";s("a939")}}]);
//# sourceMappingURL=chunk-55c4a2ee.1c0b182b.js.map