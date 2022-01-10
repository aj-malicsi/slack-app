(this["webpackJsonpslack-app"]=this["webpackJsonpslack-app"]||[]).push([[0],{39:function(e,s,t){},66:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),n=t(32),r=t.n(n),l=(t(39),t(2)),o=t(8),d=t(6),i=t(5),b=t(9),h=t(3),j=t.n(h),u=t(0);var m=function(e){var s=Object(i.g)(),t=Object(b.a)(),a=t.register,c=t.handleSubmit,n=t.formState.errors;return Object(u.jsxs)("div",{className:"bg-white p-10 rounded shadow-2xl w-1/3",children:[Object(u.jsx)("h2",{className:"text-3xl font-bold mb-10 text-gray-500 ml-28",children:"Member Login"}),Object(u.jsxs)("form",{onSubmit:c((function(t){j.a.post("https://slackapi.avionschool.com/api/v1/auth/sign_in",{email:t.email,password:t.password}).then((function(t){"string"===typeof t.data.data.uid&&(e.setLoggedIn(t.data.data),e.setHeaders(t.headers),s.push("/main-page"))})).catch((function(e){return console.log("Hello",e)}))})),className:"space-y-5",children:[Object(u.jsxs)("div",{className:"flex flex-col mr-48 w-full",children:[Object(u.jsx)("label",{htmlFor:"Email",className:"font-bold mb-2 text-gray-500",children:"Email"}),Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"email",id:"Email"},a("email",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"})),Object(u.jsx)("div",{className:"text-red-600",children:n.email&&"Email is required"})]}),Object(u.jsxs)("div",{className:"flex flex-col mr-48 w-full",children:[Object(u.jsx)("label",{htmlFor:"password",className:"font-bold mb-2 text-gray-500",children:"Password"}),Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"password",id:"password"},a("password",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"})),Object(u.jsx)("div",{className:"text-red-600",children:n.password&&"Password is required"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"block w-full bg-yellow-500 hover:bg-yellow-400 p-4 rounded text-white font-bold",children:"Log In"}),Object(u.jsxs)("div",{className:"flex justify-center mt-5 font-medium",children:[Object(u.jsx)("p",{className:"text-gray-600",children:"Not a member?"}),Object(u.jsx)("p",{className:"ml-3",children:Object(u.jsx)(d.b,{to:"/RegistrationForm",className:"text-blue-800 hover:text-blue-500",children:"Signup now"})})]})]})]})]})};var x=function(e){var s=Object(b.a)(),t=s.register,a=s.handleSubmit,c=s.formState.errors;return Object(u.jsxs)("div",{className:"bg-white p-10 rounded shadow-2xl w-1/3",children:[Object(u.jsx)("h2",{className:"text-3xl font-bold mb-10 text-gray-500 ml-20",children:"Create Your Account"}),Object(u.jsxs)("form",{onSubmit:a((function(e){j.a.post("https://slackapi.avionschool.com/api/v1/auth",{email:e.email,password:e.password,password2:e.password2}).then((function(e){})).catch((function(e){return console.log("this is an error",e)})),e.password!==e.password2&&console.log("Password do not match")})),className:"space-y-5",children:[Object(u.jsxs)("div",{className:"flex flex-col mr-48 w-full ",children:[Object(u.jsx)("label",{htmlFor:"firstName",className:"font-bold mb-2 text-gray-500",children:"First Name"}),Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"text",id:"firstName"},t("firstName",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300 "})),Object(u.jsx)("div",{className:"text-red-600",children:c.firstName&&"First name is required"})]}),Object(u.jsxs)("div",{className:"flex flex-col mr-48 w-full ",children:[Object(u.jsx)("label",{htmlFor:"lastName",className:"font-bold mb-2 text-gray-500",children:"Last Name"}),Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"text",id:"lastName"},t("lastName",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300 "})),Object(u.jsx)("div",{className:"text-red-600",children:c.lastName&&"Last name is required"})]}),Object(u.jsxs)("div",{className:"flex flex-col mr-48 w-full",children:[Object(u.jsx)("label",{htmlFor:"Email",className:"font-bold mb-2 text-gray-500",children:"Email"}),Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"email",id:"Email"},t("email",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"})),Object(u.jsx)("div",{className:"text-red-600",children:c.email&&"Email is required"})]}),Object(u.jsxs)("div",{className:"flex flex-col mr-48 w-full",children:[Object(u.jsx)("label",{htmlFor:"password",className:"font-bold mb-2 text-gray-500",children:"Password"}),Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"password",id:"password"},t("password",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"})),Object(u.jsx)("div",{className:"text-red-600",children:c.password&&"Password is required"})]}),Object(u.jsxs)("div",{className:"flex flex-col mr-48 w-full",children:[Object(u.jsx)("label",{htmlFor:"password2",className:"font-bold mb-2 text-gray-500",children:"Confirm Password"}),Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"password",id:"password2"},t("password2",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"})),Object(u.jsx)("div",{className:"text-red-600",children:c.password2&&"Password is required"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"block w-full bg-yellow-500 hover:bg-yellow-400 p-4 rounded text-white font-bold",children:"Sign up"}),Object(u.jsxs)("div",{className:"flex justify-center mt-5 font-medium",children:[Object(u.jsx)("p",{children:"Already have an account?"}),Object(u.jsx)("p",{className:"ml-3",children:Object(u.jsx)(d.b,{to:"/",className:"text-blue-800 hover:text-blue-500",children:"Log in here"})})]})]})]})]})};var g=function(e){return e.channels,Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"bg-pink-800 w-40 text-white ",children:["Channels",Object(u.jsx)("ul",{className:"text-center",children:e.channels.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{className:"hover:text-green-400",children:Object(u.jsx)(d.b,{to:"/channel/".concat(e.id,"/").concat(e.name),children:e.name})},e.id)})}))})]})})};var O=function(e){var s=localStorage.getItem("loggedIn"),t=Object(i.g)(),c={"access-token":e.headers["access-token"],expiry:e.headers.expiry,client:e.headers.client,uid:e.headers.uid},n=Object(b.a)(),r=n.register,o=n.handleSubmit,h=(n.formState.errors,[e.loggedIn.id]);return Object(a.useEffect)((function(){0===e.users.length&&(console.log("use effect main page check"),j.a.get("https://slackapi.avionschool.com/api/v1/users",{headers:c}).then((function(s){console.log("GET RESPONSE USERS",s.data.data),e.setUsers(s.data.data)})).catch((function(e){return console.log(e.message)})),0===e.channels.length&&j.a.get("https://slackapi.avionschool.com/api/v1/channels",{headers:c}).then((function(s){console.log("GET CHANNEL RESPONSE USE EFFECT",s.data.data);var t=s.data.data;e.setChannels(t)})).catch((function(e){return console.log(e.message)})))}),[]),void 0!==e.loggedIn&&""!==e.loggedIn?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-gray-600",children:[Object(u.jsx)("div",{className:"min-h-screen flex",children:Object(u.jsx)("div",{className:"bg-purple-800 w-64 flex flex-col p-3",children:Object(u.jsx)(g,{channels:e.channels})})}),Object(u.jsxs)("div",{className:"bg-white p-10 rounded shadow-2xl w-1/3",children:[Object(u.jsx)("h2",{className:"text-3xl font-bold mb-10 text-gray-500 ml-28",children:"Create Channel"}),Object(u.jsxs)("form",{onSubmit:o((function(s){console.log(s.addUsers);var a=s.addUsers.split(",");a.push(h.pop()),console.log(a);var n={name:s.newChannel,user_ids:a};j.a.post("https://slackapi.avionschool.com/api/v1/channels",n,{headers:c}).then((function(s){console.log(s.data.errors),void 0===s.data.errors?t.push("/channel"):s.data.errors.length>0&&t.push("/main-page"),j.a.get("https://slackapi.avionschool.com/api/v1/channels",{headers:c}).then((function(s){console.log("get response",s.data.data);var t=s.data.data;e.setChannels(t),t[t.length-1].id&&console.log(t[t.length-1].id)})).catch((function(e){return console.log(e.message)}))})).catch((function(e){console.log(e.message),t.push("/main-page")}))})),className:"space-y-5",children:[Object(u.jsx)("div",{className:"flex flex-col mr-48 w-full",children:Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"newChannel",id:"newChannel",placeholder:"Create New Channel"},r("newChannel",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"}))}),Object(u.jsx)("div",{className:"flex flex-col mr-48 w-full",children:Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"addUsers",id:"addUsers",placeholder:"Add a User ID",minLength:"3"},r("addUsers",{required:!0})),{},{className:"border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"}))}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"block w-full bg-green-500 hover:bg-green-400 p-4 rounded text-white font-bold mt-20",children:"Submit"})}),Object(u.jsx)("button",{className:"block w-full bg-yellow-500 hover:bg-yellow-400 p-4 rounded text-white font-bold mt-20",children:Object(u.jsx)(d.b,{to:"/user-search",className:"text-white-800 hover:text-blue-500",children:"Search User"})})]})]})]})}):""===e.loggedIn||s===e.loggedIn?(console.log("else",s),Object(u.jsx)(i.a,{from:"/main-page",to:"/"})):Object(u.jsx)("div",{children:" wenk wonk "})};var p=function(e){var s=e.messages;return console.log(s),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"display messages here"}),Object(u.jsx)("ul",{className:"text-center w-1/2 border-solid border-2 border-black",children:s.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[e.body," sent by ",e.sender.uid]},e.id)})}))})]})};var f=function(e){var s=Object(a.useState)([]),t=Object(o.a)(s,2),c=t[0],n=t[1];console.log("messages",e.id);var r=Object(b.a)(),d=r.register,i=r.handleSubmit,h=(r.formState.errors,{"access-token":e.headers["access-token"],expiry:e.headers.expiry,client:e.headers.client,uid:e.headers.uid});return e.channels.length,Object(a.useEffect)((function(){j.a.get("https://slackapi.avionschool.com/api/v1/messages?receiver_id=".concat(e.id,"&receiver_class=Channel"),{headers:h}).then((function(e){console.log("GET RESPONSE"),console.log(e.data.data),n(e.data.data)})).catch((function(e){return console.log(e.message)}))}),[e.id]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"channel messages"}),Object(u.jsx)(p,{messages:c}),Object(u.jsxs)("form",{onSubmit:i((function(s){var t={receiver_id:e.id,receiver_class:"Channel",body:s.message};j.a.post("https://slackapi.avionschool.com/api/v1/messages",t,{headers:h}).then((function(s){console.log("POST RESPONSE"),console.log(s),j.a.get("https://slackapi.avionschool.com/api/v1/messages?receiver_id=".concat(e.id,"&receiver_class=Channel"),{headers:h}).then((function(e){console.log("GET RESPONSE"),console.log(e.data.data),n(e.data.data)})).catch((function(e){return console.log(e.message)}))})).catch((function(e){return console.log(e.message)}))})),children:[Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"text",id:"message",placeholder:"say something!"},d("message")),{},{className:"border-solid border-2 border-black"})),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",className:"border-solid border-2 border-red-500",children:"send"})]})]})};var v=function(e){var s=e.channels.length-1,t=Object(b.a)(),a=t.register,c=t.handleSubmit,n=(t.formState.errors,{"access-token":e.headers["access-token"],expiry:e.headers.expiry,client:e.headers.client,uid:e.headers.uid});return 0!==e.channels.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:["Channel Name:",e.channels[s].name," ID:",e.channels[s].id]}),Object(u.jsx)("div",{children:"Channel List"}),Object(u.jsx)("ul",{children:e.channels.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsx)(d.b,{to:"/channel/".concat(e.id,"/").concat(e.name),children:e.name})},e.id)})}))}),Object(u.jsx)(f,{id:e.channels[s].id,headers:e.headers,loggedIn:e.loggedIn,channels:e.channels}),Object(u.jsx)(d.b,{to:"/main-page",className:"text-blue-800 hover:text-blue-500",children:"Create a channel"}),Object(u.jsxs)("form",{onSubmit:c((function(t){var a={id:e.channels[s].id,member_id:t.newUser};j.a.post("https://slackapi.avionschool.com/api/v1/channel/add_member",a,{headers:n}).then((function(e){console.log("ADD USER =>"),console.log("post",e.data),console.log(n)})).catch((function(e){return console.log(e.message)}))})),children:[Object(u.jsx)("input",Object(l.a)({type:"newUser",id:"newUser",placeholder:"Enter User Id Here",minLength:"3"},a("newUser"))),Object(u.jsx)("button",{type:"submit",children:"Add User"})]})]}):Object(u.jsx)("div",{children:"wenk wonk"})};var N=function(e){e.channels.length,console.log(e);var s=e.match.params,t=s.channelName,a=s.channelId;console.log(t,a);var c=Object(b.a)(),n=c.register,r=c.handleSubmit,o=(c.formState.errors,{"access-token":e.headers["access-token"],expiry:e.headers.expiry,client:e.headers.client,uid:e.headers.uid});return 0!==e.channels.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:["Channel Name: ",t," ID: ",a," "]}),Object(u.jsx)(g,{channels:e.channels}),Object(u.jsx)(f,{id:a,headers:e.headers,loggedIn:e.loggedIn,channels:e.channels}),Object(u.jsxs)("form",{onSubmit:r((function(e){var s={id:a,member_id:e.newUser};j.a.post("https://slackapi.avionschool.com/api/v1/channel/add_member",s,{headers:o}).then((function(e){console.log("ADD USER =>"),console.log("post",e.data),console.log(o)})).catch((function(e){return console.log(e.message)}))})),children:[Object(u.jsx)("input",Object(l.a)({type:"newUser",id:"newUser",placeholder:"Enter User Id Here",minLength:"3"},n("newUser"))),Object(u.jsx)("button",{type:"submit",children:"Add User"})]}),Object(u.jsx)(d.b,{to:"/main-page",className:"text-blue-800 hover:text-blue-500",children:"Create a channel"})]}):Object(u.jsx)("div",{children:"wenk wonk"})};var w=function(e){var s=e.user;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsx)(d.b,{to:"/user-messages/".concat(s.id,"/").concat(s.uid),children:s.uid})})})};var y=function(e){var s=Object(a.useState)({}),t=Object(o.a)(s,2),c=t[0],n=t[1],r=Object(b.a)(),i=r.register,h=r.handleSubmit,j=(r.formState.errors,e.users);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"Search for a user"}),Object(u.jsxs)("form",{onSubmit:h((function(e){console.log(e);var s=parseInt(e.searchUser);console.log(s),function(e,s){console.log(e,s);for(var t=0;t<e.length;t++)if(s===e[t].id)return console.log(e[t].id,e[t].uid),n(e[t]),!0;console.log("user couldn't be found")}(j,s)})),children:[Object(u.jsx)("input",Object(l.a)({type:"searchUser",id:"searchUser",placeholder:"Enter User Id"},i("searchUser",{required:!0}))),Object(u.jsx)("button",{type:"submit",children:"Search"}),Object(u.jsx)(w,{user:c}),Object(u.jsx)(d.b,{to:"/main-page",className:"text-blue-800 hover:text-blue-500",children:"Create a channel"})]})]})};var S=function(e){var s=e.messages;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:"user messages display"}),Object(u.jsx)("ul",{className:"border-solid border-2 border-black",children:s.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[e.body," sent by ",e.sender.uid]},e.id)})}))})]})};var k=function(e){var s=Object(a.useState)([]),t=Object(o.a)(s,2),c=t[0],n=t[1],r=Object(b.a)(),i=r.register,h=r.handleSubmit,m=(r.formState.errors,e.match.params),x=m.userId,g=m.userName,O={"access-token":e.headers["access-token"],expiry:e.headers.expiry,client:e.headers.client,uid:e.headers.uid};return Object(a.useEffect)((function(){j.a.get("https://slackapi.avionschool.com/api/v1/messages?receiver_id=".concat(x,"&receiver_class=User"),{headers:O}).then((function(e){console.log("GET RESPONSE"),console.log(e.data.data),n(e.data.data)})).catch((function(e){return console.log(e.message)}))}),[x]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:["messages with ",g,x]}),Object(u.jsx)(S,{messages:c}),Object(u.jsxs)("form",{onSubmit:h((function(e){console.log(e);var s={receiver_id:x,receiver_class:"User",body:e.message};console.log(s),j.a.post("https://slackapi.avionschool.com/api/v1/messages",s,{headers:O}).then((function(e){console.log("POST RESPONSE"),console.log(e),j.a.get("https://slackapi.avionschool.com/api/v1/messages?receiver_id=".concat(x,"&receiver_class=User"),{headers:O}).then((function(e){console.log("GET RESPONSE"),console.log(e.data.data),n(e.data.data)})).catch((function(e){return console.log(e.message)}))})).catch((function(e){return console.log(e.message)}))})),children:[Object(u.jsx)("input",Object(l.a)(Object(l.a)({type:"text",id:"message",placeholder:"say something!"},i("message")),{},{className:"border-solid border-2 border-black"})),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",className:"border-solid border-2 border-red-500",children:"send"})]}),Object(u.jsx)(d.b,{to:"/user-search",className:"text-blue-800 hover:text-blue-500",children:"Find a User"})]})};var E=function(){var e=Object(a.useState)(""),s=Object(o.a)(e,2),t=s[0],c=s[1],n=Object(a.useState)({}),r=Object(o.a)(n,2),b=r[0],h=r[1],j=Object(a.useState)([]),g=Object(o.a)(j,2),p=g[0],f=g[1],w=Object(a.useState)(""),S=Object(o.a)(w,2),E=S[0],U=S[1],I=Object(a.useState)([]),C=Object(o.a)(I,2),F=C[0],_=C[1];return Object(u.jsx)(d.a,{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/",children:Object(u.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-600",children:Object(u.jsx)(m,{loggedIn:t,setLoggedIn:c,headers:b,setHeaders:h,users:F,setUsers:_})})}),Object(u.jsx)(i.b,{path:"/RegistrationForm",children:Object(u.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-600",children:Object(u.jsx)(x,{})})}),Object(u.jsx)(i.b,{exact:!0,path:"/main-page",component:function(){return Object(u.jsx)(O,{loggedIn:t,headers:b,setHeaders:h,channels:p,setChannels:f,users:F,setUsers:_})}}),Object(u.jsx)(i.b,{exact:!0,path:"/channel",component:function(){return Object(u.jsx)(v,{loggedIn:t,headers:b,setHeaders:h,channels:p,selectedChannel:E,setSelectedChannel:U})}}),Object(u.jsx)(i.b,{exact:!0,path:"/user-search",component:function(){return Object(u.jsx)(y,{loggedIn:t,headers:b,setHeaders:h,channels:p,selectedChannel:E,setSelectedChannel:U,users:F,setUsers:_})}}),Object(u.jsx)(i.b,{exact:!0,path:"/channel/:channelId/:channelName",render:function(e){return Object(u.jsx)(N,Object(l.a)(Object(l.a)({},e),{},{loggedIn:t,headers:b,setHeaders:h,channels:p,selectedChannel:E,setSelectedChannel:U}))}}),Object(u.jsx)(i.b,{exact:!0,path:"/user-messages/:userId/:userName",render:function(e){return Object(u.jsx)(k,Object(l.a)(Object(l.a)({},e),{},{loggedIn:t,headers:b}))}})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0d0d09e2.chunk.js.map