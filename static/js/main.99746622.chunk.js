(this["webpackJsonptest-react-todo"]=this["webpackJsonptest-react-todo"]||[]).push([[0],{100:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"GET_TODOS",(function(){return N})),n.d(c,"CURRENT_TODO",(function(){return A})),n.d(c,"ADD_TODO",(function(){return F})),n.d(c,"DELETE_TODO",(function(){return R})),n.d(c,"SET_ALERT",(function(){return I})),n.d(c,"UPDATE_TODO",(function(){return L})),n.d(c,"SET_LOADING",(function(){return G})),n.d(c,"getTodos",(function(){return H})),n.d(c,"selectTodo",(function(){return z})),n.d(c,"addTodo",(function(){return U})),n.d(c,"deleteTodo",(function(){return P})),n.d(c,"updateTodo",(function(){return q})),n.d(c,"setAlert",(function(){return B})),n.d(c,"isLoading",(function(){return M})),n.d(c,"fetchTodo",(function(){return J})),n.d(c,"getTodoById",(function(){return W})),n.d(c,"postTodo",(function(){return Y})),n.d(c,"deleteTodoById",(function(){return K})),n.d(c,"patchTodo",(function(){return Q}));var a=n(4),r=n(0),o=n.n(r),s=n(10),i=n.n(s),l=n(24),d=n(12),u=n(76),j=n(77),b=(n(100),n(158)),O=n(23),f=n(47),h=n(13),p=n(165),x=n(151),m=n(153),v=n(154),y=n(163),T=n(169),g=n(157),D=n(159),_=n(122),E=n(19),k=n.n(E),w=n(40),S=n(41),C=n.n(S),N="GET_TODOS",A="CURRENT_TODO",F="ADD_TODO",R="DELETE_TODO",I="SET_ALERT",L="UPDATE_TODO",G="SET_LOADING",H=function(e){return{type:N,payload:e}},z=function(e){return{type:A,payload:e}},U=function(e){return{type:F,payload:e}},P=function(e){return{type:R,payload:e}},q=function(e){return{type:L,payload:e}},B=function(e){return{type:I,payload:e}},M=function(e){return{type:G,payload:e}},J=function(){return function(){var e=Object(w.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://todo.eachbase.com/api/RaffiHaycan/todos",t(M(!0)),e.prev=2,e.next=5,C.a.get("https://todo.eachbase.com/api/RaffiHaycan/todos");case 5:return n=e.sent,e.next=8,n.data;case 8:c=e.sent,t(H(c)),t(M(!1)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(w.a)(k.a.mark((function t(n){var c,a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://todo.eachbase.com/api/RaffiHaycan/todos/".concat(e),t.prev=1,t.next=4,C.a.get(c);case 4:return a=t.sent,t.next=7,a.data;case 7:r=t.sent,n(z(r)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},Y=function(e,t){return function(){var n=Object(w.a)(k.a.mark((function n(c){var a,r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://todo.eachbase.com/api/RaffiHaycan/todos",n.prev=1,n.next=4,C.a.post("https://todo.eachbase.com/api/RaffiHaycan/todos",e);case 4:return a=n.sent,n.next=7,a.data;case 7:r=n.sent,c(U(r)),c(B(t)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}()},K=function(e,t){return function(){var n=Object(w.a)(k.a.mark((function n(c){var a;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="https://todo.eachbase.com/api/RaffiHaycan/todos/"+e,c(M(!0)),n.prev=2,n.next=5,C.a.delete(a,{data:e});case 5:c(P(e)),c(B(t)),c(M(!1)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},Q=function(e,t){return function(){var n=Object(w.a)(k.a.mark((function n(c){var a,r,o;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="https://todo.eachbase.com/api/RaffiHaycan/todos/"+e._id,n.prev=1,n.next=4,C.a.patch(a,e);case 4:return r=n.sent,n.next=7,r.data;case 7:o=n.sent,c(q(o)),c(B(t)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}()},V=[{value:"#fbc25d",label:"orange"},{value:"#fb5d5d",label:"fushia"},{value:"#93fb5d",label:"green"},{value:"#5da0fb",label:"blue"},{value:"#dc5dfb",label:"purple"},{value:"#b3c785",label:"beige"}],X={message:"task deleted with success",severity:"info"},Z={message:"Todo list is cleaned up",severity:"info"},$={message:"New task added with success !",severity:"success"},ee={message:"Field is blank, please fill out it",severity:"error"},te={message:" task updated with success !",severity:"success"},ne=n(160),ce=function(e){var t=Object(d.b)(),n=Object(d.c)((function(e){return e.todos.currentTodo})),c=Object(r.useState)(n),s=Object(O.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(e.modeForm),j=Object(O.a)(u,2),E=j[0],k=j[1];o.a.useEffect((function(){l(n),k(e.modeForm)}),[l,n,k,e.modeForm]);var w=function(e){var t=e.target,n=t.value,c=t.name;l(Object(h.a)(Object(h.a)({},i),{},Object(f.a)({},c,n)))};return Object(a.jsx)(p.a,{mt:2,width:"90%",children:Object(a.jsxs)(x.a,{className:"backGroundCard",elevation:4,children:[Object(a.jsxs)(m.a,{children:[Object(a.jsx)(p.a,{children:Object(a.jsxs)(v.a,{variant:"h4",className:"subTitle1",children:[E," your task"]})}),Object(a.jsxs)(p.a,{display:"flex",flexDirection:"column",children:[Object(a.jsx)(y.a,{onChange:w,color:"secondary",margin:"dense",label:"Title",name:"title",value:i.title,required:!0}),Object(a.jsx)(y.a,{onChange:w,color:"secondary",id:"filled-multiline-static",label:"Description",multiline:!0,rows:1,value:i.description,name:"description",variant:"filled",required:!0}),Object(a.jsx)(y.a,{onChange:w,required:!0,id:"standard-select-color",select:!0,label:"Color",name:"color",value:i.color,helperText:"Select a color for your task",children:V.map((function(e){return Object(a.jsx)(T.a,{value:e.value,children:Object(a.jsxs)(p.a,{display:"flex",justifyContent:"space-between",style:{width:"100%"},children:[Object(a.jsx)(v.a,{children:e.label}),Object(a.jsx)(p.a,{className:"colorPrev",style:{backgroundColor:e.value}})]})},e.value)}))})]})]}),Object(a.jsx)(g.a,{children:Object(a.jsxs)(b.a,{container:!0,display:"flex",justify:"space-between",alignItems:"baseline",children:[Object(a.jsxs)(p.a,{children:[Object(a.jsx)(D.a,{onClick:function(){""===i.title||""===i.description||""===i.color?t(B(ee)):(t("Create"===E?Y(i,$):Q(i,te)),e.closeTodoForm(),window.sessionStorage.setItem("open","true"))},size:"small",children:Object(a.jsx)(v.a,{className:"buttonFont",children:"Save"})}),Object(a.jsx)(D.a,{onClick:function(){return l(n)},size:"small",children:Object(a.jsx)(v.a,{className:"buttonFont",children:"Cancel"})})]}),Object(a.jsx)(p.a,{children:Object(a.jsx)(_.a,{onClick:function(){return e.closeTodoForm(!1)},children:Object(a.jsx)(ne.a,{className:"iconStyle",children:"close"})})})]})})]})})},ae=n(121),re=n(167),oe=n(161),se=n(162),ie=n(168),le=n(79),de={todoActions:c},ue={todos:[],currentTodo:{title:"",description:"",color:""},alert:{message:"",severity:""},loading:!1},je=function(e){var t=Object(d.b)(),n=Object(d.c)((function(e){return e.todos.todos})),c=Object(d.c)((function(e){return e.todos.currentTodo})),o=Object(d.c)((function(e){return e.todos.loading})),s=Object(r.useState)(!1),i=Object(O.a)(s,2),l=i[0],u=i[1],j=Object(r.useState)("hidden"),f=Object(O.a)(j,2),h=f[0],x=f[1];setTimeout((function(){x("visible")}),1e3),Object(r.useEffect)((function(){t(J())}),[t]);return Object(a.jsxs)(b.a,{item:!0,md:8,children:[o?null:n.length>=0&&Object(a.jsx)(ae.a,{style:{visibility:h},children:n.map((function(n,r){return Object(a.jsxs)(re.a,{style:{backgroundColor:n.color},expanded:l===r,onChange:(o=r,function(e,t){u(!!t&&o)}),children:[Object(a.jsx)(oe.a,{expandIcon:Object(a.jsx)(ne.a,{children:"expand_more"}),children:Object(a.jsx)(v.a,{children:n.title})}),Object(a.jsx)(se.a,{children:Object(a.jsxs)(b.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(a.jsx)(p.a,{children:Object(a.jsx)(v.a,{component:"p",variant:"body2",children:n.description})}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)(ie.a,{title:"edit your task",children:Object(a.jsx)(_.a,{onClick:function(){return c=n._id,t(W(c)),e.handleModeForm("Edit"),e.openTodoForm(!0),void u(!1);var c},size:"small",children:Object(a.jsx)(ne.a,{className:"iconStyle",children:"edit"})})}),Object(a.jsx)(ie.a,{title:"delete your task",children:Object(a.jsx)(_.a,{size:"small",onClick:function(){return a=n._id,c._id===a&&t(z(ue.currentTodo)),t(K(a,X)),e.openTodoForm(!1),void u(!1);var a},children:Object(a.jsx)(ne.a,{className:"iconStyle",children:"delete_forever"})})})]})]})})]},r);var o}))}),o?null:n.length>0&&Object(a.jsx)(p.a,{display:"flex",justifyContent:"center",style:{visibility:h},children:Object(a.jsx)(D.a,{onClick:function(){n.forEach((function(e){return t(K(e._id,Z))}))},size:"large",startIcon:Object(a.jsx)(ne.a,{className:"iconStyle",children:"delete_outlined"}),children:Object(a.jsx)(v.a,{className:"buttonFont",children:"Clear ToDo List"})})})]})},be=n(166),Oe=function(){var e=Object(d.c)((function(e){return e.todos.alert})),t=Object(d.b)();return Object(a.jsx)("div",{children:""!==e.message?(setTimeout((function(){t(B(ue.alert))}),3e3),Object(a.jsx)(be.a,{variant:"filled",severity:e.severity,children:e.message})):null})},fe=function(){var e=Object(d.b)(),t="Create",n=Object(r.useState)(!1),c=Object(O.a)(n,2),o=c[0],s=c[1],i=Object(r.useState)(t),l=Object(O.a)(i,2),u=l[0],j=l[1],f=function(e){return s(e)},h=function(e){return j(e)};return Object(a.jsxs)(b.a,{container:!0,justify:"flex-end",children:[Object(a.jsxs)(b.a,{item:!0,md:7,children:[Object(a.jsxs)(b.a,{container:!0,justify:"center",direction:"column",alignItems:"center",children:[Object(a.jsx)(p.a,{justify:"center",children:Object(a.jsx)(v.a,{variant:"h2",className:"title",children:"ToDo"})}),Object(a.jsx)(p.a,{justify:"center",children:Object(a.jsx)(v.a,{variant:"h5",className:"subTitle",children:"Your daily task app !"})}),Object(a.jsx)(p.a,{onClick:function(){return n=t,e(z(ue.currentTodo)),h(n),void f(!0);var n},mt:1,children:Object(a.jsx)(D.a,{size:"large",startIcon:Object(a.jsx)(ne.a,{className:"iconStyle",children:"add_circle_outline"}),children:Object(a.jsx)(v.a,{className:"buttonFont",children:"add a new task"})})})]}),Object(a.jsx)(b.a,{container:!0,justify:"center",children:Object(a.jsx)(je,{handleModeForm:h,openTodoForm:f})})]}),Object(a.jsxs)(b.a,{item:!0,md:3,children:[o&&Object(a.jsx)(ce,{modeForm:u,closeTodoForm:f}),Object(a.jsx)(p.a,{mt:7,mr:2,children:Object(a.jsx)(Oe,{})})]})]})};var he=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.todos.todos}));return o.a.useEffect((function(){window.sessionStorage.getItem("open")||t.forEach((function(t){e(K(t._id,ue.alert))}))}),[e,t]),Object(a.jsx)(b.a,{container:!0,className:"backGround",justify:"center",children:Object(a.jsx)(b.a,{item:!0,md:12,children:Object(a.jsx)(b.a,{container:!0,justify:"center",children:Object(a.jsx)(fe,{})})})})},pe=Object(l.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de.todoActions.ADD_TODO:return Object(h.a)(Object(h.a)({},e),{},{todos:[].concat(Object(le.a)(e.todos),[t.payload])});case de.todoActions.GET_TODOS:return Object(h.a)(Object(h.a)({},e),{},{todos:e.todos.concat(t.payload)});case de.todoActions.DELETE_TODO:return Object(h.a)(Object(h.a)({},e),{},{todos:e.todos.filter((function(e){return e._id!==t.payload}))});case de.todoActions.UPDATE_TODO:return Object(h.a)(Object(h.a)({},e),{},{todos:e.todos.map((function(e){return e._id===t.payload._id?t.payload:e}))});case de.todoActions.CURRENT_TODO:return Object(h.a)(Object(h.a)({},e),{},{currentTodo:t.payload});case de.todoActions.SET_ALERT:return Object(h.a)(Object(h.a)({},e),{},{alert:t.payload});case de.todoActions.SET_LOADING:return Object(h.a)(Object(h.a)({},e),{},{loading:t.payload});default:return e}}}),xe=Object(l.createStore)(pe,Object(j.composeWithDevTools)(Object(l.applyMiddleware)(u.a)));i.a.render(Object(a.jsx)(d.a,{store:xe,children:Object(a.jsx)(he,{})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.99746622.chunk.js.map