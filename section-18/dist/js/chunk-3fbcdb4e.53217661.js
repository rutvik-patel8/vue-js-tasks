(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fbcdb4e"],{"591c":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var c=n("7a23"),i=Object(c["i"])("h2",null,"Interested? Reach out now!",-1),r=Object(c["j"])("Contact");function u(t,e,n,u,o,a){var l=Object(c["D"])("base-card"),b=Object(c["D"])("base-button"),s=Object(c["D"])("router-view"),d=Object(c["D"])("base-badge");return Object(c["v"])(),Object(c["h"])("div",null,[Object(c["i"])("section",null,[Object(c["k"])(l,null,{default:Object(c["L"])((function(){return[Object(c["i"])("h2",null,Object(c["G"])(a.fullName),1),Object(c["i"])("h3",null,"$"+Object(c["G"])(a.rate)+"/hour",1)]})),_:1})]),Object(c["i"])("section",null,[Object(c["k"])(l,null,{default:Object(c["L"])((function(){return[Object(c["i"])("header",null,[i,Object(c["k"])(b,{link:"",to:a.contactLink},{default:Object(c["L"])((function(){return[r]})),_:1},8,["to"])]),Object(c["k"])(s)]})),_:1})]),Object(c["i"])("section",null,[Object(c["k"])(l,null,{default:Object(c["L"])((function(){return[(Object(c["v"])(!0),Object(c["h"])(c["a"],null,Object(c["B"])(a.areas,(function(t){return Object(c["v"])(),Object(c["f"])(d,{key:t,type:t,title:t},null,8,["type","title"])})),128)),Object(c["i"])("p",null,Object(c["G"])(a.description),1)]})),_:1})])])}n("7db0"),n("d3b7");var o={props:["id"],data:function(){return{selectedCoach:null}},computed:{fullName:function(){return this.selectedCoach.firstName+" "+this.selectedCoach.lastName},areas:function(){return this.selectedCoach.areas},rate:function(){return this.selectedCoach.hourlyRate},description:function(){return this.selectedCoach.description},contactLink:function(){return this.$route.path+"/"+this.id+"/contact"}},created:function(){var t=this;this.selectedCoach=this.$store.getters["coaches/coaches"].find((function(e){return e.id===t.id}))}},a=n("6b0d"),l=n.n(a);const b=l()(o,[["render",u]]);e["default"]=b},"7db0":function(t,e,n){"use strict";var c=n("23e7"),i=n("b727").find,r=n("44d2"),u="find",o=!0;u in[]&&Array(1)[u]((function(){o=!1})),c({target:"Array",proto:!0,forced:o},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(u)}}]);
//# sourceMappingURL=chunk-3fbcdb4e.53217661.js.map