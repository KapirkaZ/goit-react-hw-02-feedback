(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={basics:"Statistics_basics__3Uulx"}},12:function(e,t,n){e.exports={basics:"Notification_basics__3b98h"}},20:function(e,t,n){e.exports={basics:"Section_basics__UyYfD"}},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),o=n.n(i),s=n(6),r=n(7),b=n(8),d=n(14),u=n(13),l=n(9),j=n.n(l),_=n(0),h=function(e){var t=e.children;return Object(_.jsx)("div",{className:j.a.container,children:t})},O=n(10),f=n.n(O),p=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(_.jsx)("div",{className:f.a.basics,children:Object(_.jsxs)("ul",{children:[Object(_.jsxs)("li",{children:["Good:",t]}),Object(_.jsxs)("li",{children:["Neutral:",n]}),Object(_.jsxs)("li",{children:["Bad:",a]}),Object(_.jsxs)("li",{children:["Total:",c]}),Object(_.jsxs)("li",{children:["Positive feedback:",i," %"]})]})})},v=(n(20),function(e){var t=e.title,n=e.children;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{children:t}),n]})}),k=n(4),x=n.n(k),g=n(11),F=n.n(g),m=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(_.jsx)("div",{className:x.a.container,children:t.map((function(e){return Object(_.jsx)("button",{className:x.a[e],type:"button",name:e,onClick:n,children:e},F.a.generate())}))})},C=n(12),L=n.n(C),N=function(e){var t=e.message;return Object(_.jsx)("p",{className:L.a.basics,children:t})},P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=100*e.state.good/t;return Math.round(n)},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage(),o=Object.keys(this.state);return Object(_.jsxs)(h,{children:[Object(_.jsx)(v,{title:"Please leave feedback",children:Object(_.jsx)(m,{options:o,onLeaveFeedback:this.onLeaveFeedback})}),0===c?Object(_.jsx)(N,{message:"No feedback given"}):Object(_.jsx)(v,{title:"Statistics",children:Object(_.jsx)(p,{good:t,neutral:n,bad:a,total:c,positivePercentage:i})})]})}}]),n}(a.Component);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(P,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={container:"FeedbackOptions_container__3RVXf",button:"FeedbackOptions_button__1LgeC",good:"FeedbackOptions_good__2_XJ5 FeedbackOptions_button__1LgeC",neutral:"FeedbackOptions_neutral__1EJdJ FeedbackOptions_button__1LgeC",bad:"FeedbackOptions_bad__26Qs1 FeedbackOptions_button__1LgeC"}},9:function(e,t,n){e.exports={container:"Container_container__2CVr6"}}},[[29,1,2]]]);
//# sourceMappingURL=main.dfc54c35.chunk.js.map