(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[1],{131:function(t,e,n){"use strict";n.r(e);var r,c,a,o,s,u,i=n(0),b=n.n(i),l=n(28),j=n.n(l),O=(n(81),n(154)),g=n(148),d=n(21),f=function(t){return t.auth.isAuthenticated},h=function(t){return t.auth.user.name},p=n(39),m=n(2),x=Object(g.a)((function(t){return{root:{display:"flex",alignItems:"center",marginLeft:"auto"},menuButton:{marginRight:t.spacing(2)},"& > * + *":{marginLeft:t.spacing(2)},btn:{backgroundColor:"green"},link:{textDecoration:"none",marginRight:20},title:{marginRight:20,fontSize:18}}})),C={logoutUser:p.a.logout},v=Object(d.b)((function(t){return{userName:h(t)}}),C)((function(t){var e=t.userName,n=t.logoutUser,r=x();return Object(m.jsxs)("div",{className:r.root,children:[Object(m.jsxs)("span",{className:r.title,children:["Hi, ",e,"!"]}),Object(m.jsx)(O.a,{type:"button",onClick:n,variant:"contained",color:"secondary",className:r.btn,children:"\u0412\u044b\u0439\u0442\u0438"})]})})),k=n(23),S=Object(g.a)((function(t){return{root:{marginLeft:"auto"},menuButton:{marginRight:t.spacing(2)},"& > * + *":{marginLeft:t.spacing(2)},btn:{backgroundColor:"green"},link:{textDecoration:"none",marginRight:20}}})),y=function(){var t=S();return Object(m.jsxs)("div",{className:t.root,children:[Object(m.jsx)(k.b,{exact:!0,to:"/register",className:t.link,children:Object(m.jsx)(O.a,{variant:"contained",color:"secondary",className:t.btn,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(m.jsx)(k.b,{exact:!0,to:"/login",className:t.link,children:Object(m.jsx)(O.a,{variant:"contained",color:"secondary",className:t.btn,children:"\u041b\u043e\u0433\u0438\u043d"})})]})},U=n(8),A=n(152),R=n(153),E=n(30),w=n(6),N=Object(d.b)((function(t){return{isAuth:f(t)}}))((function(t){var e=t.component,n=t.isAuth,r=Object(w.a)(t,["component","isAuth"]);return Object(m.jsx)(U.b,Object(E.a)(Object(E.a)({},r),{},{render:function(t){return n?Object(m.jsx)(e,Object(E.a)({},t)):Object(m.jsx)(U.a,{to:"/login"})}}))})),q=Object(d.b)((function(t){return{isAuth:f(t)}}))((function(t){var e=t.component,n=t.isAuth,r=t.redirectTo,c=Object(w.a)(t,["component","isAuth","redirectTo"]);return Object(m.jsx)(U.b,Object(E.a)(Object(E.a)({},c),{},{render:function(t){return n&&c.restricted?Object(m.jsx)(U.a,{to:r}):Object(m.jsx)(e,Object(E.a)({},t))}}))})),G=n(67),z=n.n(G),L=Object(g.a)((function(t){return{root:{marginLeft:"auto"},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1},"& > * + *":{marginLeft:t.spacing(2)},home:{backgroundColor:"blue",marginRight:20},loader:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}})),D=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,188))})),B=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,189))})),T=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,190))})),P=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,192))})),F={onGetUser:p.a.getUser},H=Object(d.b)((function(t){return{isAuth:f(t)}}),F)((function(t){var e=t.isAuth,n=t.onGetUser,r=L();return Object(i.useEffect)((function(){n()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A.a,{position:"static",children:Object(m.jsxs)(R.a,{children:[Object(m.jsx)(k.b,{exact:!0,to:"/",className:r.link,children:Object(m.jsx)(O.a,{className:r.home,variant:"contained",color:"secondary",children:"Home"})}),e&&Object(m.jsx)(k.b,{exact:!0,to:"/contacts",className:r.link,children:Object(m.jsx)(O.a,{className:r.home,variant:"contained",color:"secondary",children:"Contacts"})}),e?Object(m.jsx)(v,{}):Object(m.jsx)(y,{})]})}),Object(m.jsx)(i.Suspense,{fallback:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(z.a,{className:r.loader,type:"Rings",color:"red",height:100,width:100})}),children:Object(m.jsxs)(U.d,{children:[Object(m.jsx)(U.b,{exact:!0,path:"/",component:D}),Object(m.jsx)(N,{path:"/contacts",component:P}),Object(m.jsx)(q,{path:"/register",restricted:!0,redirectTo:"/contacts",component:B}),Object(m.jsx)(q,{path:"/login",restricted:!0,redirectTo:"/contacts",component:T})]})})]})})),I=n(22),J=n(4),M=n(3),K=n(10),Q=n(14),V=Object(J.c)([],(r={},Object(M.a)(r,Q.a.addContactsSuccess,(function(t,e){return[].concat(Object(I.a)(t),[e.payload])})),Object(M.a)(r,Q.a.deleteContactsSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),Object(M.a)(r,Q.a.getContactsSuccess,(function(t,e){return e.payload})),r)),W=Object(J.c)(!1,(c={},Object(M.a)(c,Q.a.axiosAddContacts,(function(){return!0})),Object(M.a)(c,Q.a.addContactsSuccess,(function(){return!1})),Object(M.a)(c,Q.a.errorContacts,(function(){return!1})),Object(M.a)(c,Q.a.axiosDeleteContacts,(function(){return!0})),Object(M.a)(c,Q.a.deleteContactsSuccess,(function(){return!1})),Object(M.a)(c,Q.a.errorGetContacts,(function(){return!1})),Object(M.a)(c,Q.a.axiosGetContacts,(function(){return!0})),Object(M.a)(c,Q.a.getContactsSuccess,(function(){return!1})),Object(M.a)(c,Q.a.errorGetContacts,(function(){return!1})),c)),X=Object(J.c)("",Object(M.a)({},Q.a.filterContacts,(function(t,e){return e.payload}))),Y=Object(J.c)({},Object(M.a)({},Q.a.createUser,(function(t,e){return e.payload}))),Z=Object(K.c)({contacts:V,loading:W,filter:X,createUser:Y}),$=n(72),_=n.n($),tt=n(27),et=n(7),nt={name:null,email:null},rt=Object(J.c)(nt,(a={},Object(M.a)(a,et.a.registerSuccess,(function(t,e){return e.payload.user})),Object(M.a)(a,et.a.loginSuccess,(function(t,e){return e.payload.user})),Object(M.a)(a,et.a.logoutSuccess,(function(){return nt})),Object(M.a)(a,et.a.getUserSuccess,(function(t,e){return e.payload})),a)),ct=Object(J.c)(null,(o={},Object(M.a)(o,et.a.registerSuccess,(function(t,e){return e.payload.token})),Object(M.a)(o,et.a.loginSuccess,(function(t,e){return e.payload.token})),Object(M.a)(o,et.a.logoutSuccess,(function(){return null})),o)),at=Object(J.c)(null,(s={},Object(M.a)(s,et.a.registerError,(function(t,e){return e.payload})),Object(M.a)(s,et.a.loginError,(function(t,e){return e.payload})),Object(M.a)(s,et.a.logoutErrors,(function(t,e){return e.payload})),Object(M.a)(s,et.a.getUserError,(function(t,e){return e.payload.user})),s)),ot=Object(J.c)(!1,(u={},Object(M.a)(u,et.a.registerSuccess,(function(){return!0})),Object(M.a)(u,et.a.loginSuccess,(function(){return!0})),Object(M.a)(u,et.a.getUserSuccess,(function(){return!0})),Object(M.a)(u,et.a.registerError,(function(){return!1})),Object(M.a)(u,et.a.loginError,(function(){return!1})),Object(M.a)(u,et.a.getUserError,(function(){return!1})),Object(M.a)(u,et.a.logoutSuccess,(function(){return!1})),u)),st=Object(K.c)({user:rt,token:ct,error:at,isAuthenticated:ot}),ut=Object(I.a)(Object(J.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}})),it={key:"auth",storage:_.a,whitelist:["token"]},bt=Object(J.a)({reducer:{auth:Object(tt.g)(it,st),contacts:Z},middleware:ut,devTools:!1}),lt={store:bt,persistor:Object(tt.h)(bt)},jt=n(73);j.a.render(Object(m.jsx)(b.a.StrictMode,{children:Object(m.jsx)(d.a,{store:lt.store,children:Object(m.jsx)(jt.a,{loading:null,persistor:lt.persistor,children:Object(m.jsx)(k.a,{children:Object(m.jsx)(H,{})})})})}),document.getElementById("root"))},14:function(t,e,n){"use strict";var r=n(4),c={axiosAddContacts:Object(r.b)("contacts/AxiosAddContacts"),addContactsSuccess:Object(r.b)("success/AddContacts"),errorContacts:Object(r.b)("error/AddContacts"),axiosDeleteContacts:Object(r.b)("contacts/AxiosDeleteContacts"),deleteContactsSuccess:Object(r.b)("success/DeleteContacts"),errorDeleteContacts:Object(r.b)("error/AddContacts"),axiosGetContacts:Object(r.b)("contacts/AxiosGetContacts"),getContactsSuccess:Object(r.b)("success/GetContacts"),errorGetContacts:Object(r.b)("error/GetContacts"),filterContacts:Object(r.b)("filter/Contacts"),registerUser:Object(r.b)("user/Register"),loginUser:Object(r.b)("user/Login")};e.a=c},39:function(t,e,n){"use strict";var r=n(26),c=n.n(r),a=n(36),o=n(29),s=n.n(o),u=n(7);s.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var i=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){s.a.defaults.headers.common.Authorization=""};e.a={register:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.registerRequest()),e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:r=e.sent,i(r.data.token),n(u.a.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.a.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},login:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.loginRequest()),console.log(t),e.prev=2,e.next=5,s.a.post("/users/login",t);case 5:r=e.sent,i(r.data.token),n(u.a.loginSuccess(r.data)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n(u.a.loginError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.a.logoutRequest()),t.prev=1,t.next=4,s.a.post("/users/logout");case 4:b(),e(u.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((r=n()).auth.token){t.next=3;break}return t.abrupt("return");case 3:return i(r.auth.token),e(u.a.getUserRequest()),t.prev=5,t.next=8,s.a.get("/users/current");case 8:a=t.sent,console.log(a.data),e(u.a.getUserSuccess(a.data)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(u.a.getUserError(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()}}},7:function(t,e,n){"use strict";var r=n(4),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),s=Object(r.b)("auth/loginRequest"),u=Object(r.b)("auth/loginSuccess"),i=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/getUserRequest"),l=Object(r.b)("auth/getUserSuccess"),j=Object(r.b)("auth/getUserError"),O={registerRequest:c,registerSuccess:a,registerError:o,loginRequest:s,loginSuccess:u,loginError:i,logoutRequest:Object(r.b)("auth/logoutRequest"),logoutSuccess:Object(r.b)("auth/logoutSuccess"),logoutError:Object(r.b)("auth/logoutError"),getUserRequest:b,getUserSuccess:l,getUserError:j};e.a=O},81:function(t,e,n){}},[[131,2,3]]]);
//# sourceMappingURL=main.e8e777dd.chunk.js.map