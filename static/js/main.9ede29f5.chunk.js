(this.webpackJsonphomeignat=this.webpackJsonphomeignat||[]).push([[0],{10:function(e,a,t){e.exports={wrapper:"Pages_wrapper__O0Ph5",current__link:"Pages_current__link__1oaKK",button__rigth:"Pages_button__rigth__3hmDh",current__page:"Pages_current__page__hNZyN",wrapper__link:"Pages_wrapper__link__66hdl",added__menu:"Pages_added__menu__4aJq_",added__menu__points:"Pages_added__menu__points__1Jefo",showDiv:"Pages_showDiv__3_rot"}},17:function(e,a,t){e.exports={App:"App_App__3bCGj"}},23:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var r=t(1),s=t.n(r),n=t(16),c=t.n(n),i=(t(23),t(17)),_=t.n(i),l=t(3),o=t(9),j=t(8),d=t(4),u=t.n(d),m=t(0),b=function(e){return Object(m.jsxs)("div",{className:u.a.alt__message__wrapper,children:[Object(m.jsxs)("div",{className:u.a.alt__content__wrapper,children:[Object(m.jsxs)("div",{className:u.a.message,children:[Object(m.jsx)("div",{className:u.a.name__user,children:e.name}),Object(m.jsx)("div",{className:u.a.alt__text__message,children:e.message})]}),Object(m.jsx)("div",{className:u.a.data__message,children:e.time})]}),Object(m.jsx)("img",{src:e.avatar,className:u.a.avatar})]})},f=function(e){Object(r.useEffect)((function(){var e=document.getElementById("window");e&&e.scrollTo(0,e.scrollHeight)}));var a;return Object(m.jsx)("div",{className:u.a.allmessage,children:(a=e.arrayData,a.map((function(e){return"Alexander"===e.name?Object(m.jsx)(p,{avatar:e.avatar,name:e.name,message:e.message,time:e.time}):Object(m.jsx)(b,{avatar:e.avatar,name:e.name,message:e.message,time:e.time})})))})},p=function(e){return Object(m.jsxs)("div",{className:u.a.message__wrapper,children:[Object(m.jsx)("img",{src:e.avatar,className:u.a.avatar}),Object(m.jsxs)("div",{className:u.a.content__wrapper,children:[Object(m.jsxs)("div",{className:u.a.message,children:[Object(m.jsx)("div",{className:u.a.name__user,children:e.name}),Object(m.jsx)("div",{className:u.a.text__message,children:e.message})]}),Object(m.jsx)("div",{className:u.a.data__message,children:e.time})]})]})},O=[{name:"Alexander",avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"},{name:"Guest",avatar:"https://a.d-cd.net/_gAAAgG9DOA-960.jpg"}],g=[{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Alexander",message:"some text",time:"22:00"},{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Alexander",message:"some text",time:"22:00"}],x=function(){var e=Object(r.useState)(O[0]),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(r.useState)(g),c=Object(l.a)(n,2),i=c[0],_=c[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 1",Object(m.jsx)("div",{className:u.a.wrapper,children:Object(m.jsx)("div",{className:u.a.dialog__window,id:"window",children:Object(m.jsx)(f,{arrayData:i,currentUser:t.name})})}),Object(m.jsx)(h,{currentUser:t,sendMessage:function(e){_([].concat(Object(j.a)(i),[e]))},setCurrentUser:function(){"Alexander"===t.name?s(O[1]):s(O[0])}}),Object(m.jsx)("h4",{children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0410\u0432\u0430\u0442\u0430\u0440 \u0447\u0442\u043e\u0431\u044b \u0441\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f (AlternativeMessage)"}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},h=function(e){var a=Object(r.useState)(""),t=Object(l.a)(a,2),s=t[0],n=t[1];return Object(m.jsxs)("form",{onSubmit:function(a){return function(a,t,r,c){if(s.length){var i={message:s,name:e.currentUser.name,avatar:e.currentUser.avatar,time:String((new Date).toLocaleTimeString())};e.sendMessage(i),n("")}a.preventDefault()}(a)},className:u.a.wrapper__form,children:[Object(m.jsx)("div",{onClick:function(){return e.setCurrentUser()},className:u.a.choose__user,children:Object(m.jsx)("img",{src:e.currentUser.avatar})}),Object(m.jsx)("input",{value:s,className:u.a.input__text,type:"text",onChange:function(e){return function(e){n(e.target.value)}(e)}}),Object(m.jsx)("input",{type:"submit"})]})};var v=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(x,{}),"\u0444\u044b\u0432\u0444\u044b\u0432 sdfgggl"]})};var w=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"404"}),Object(m.jsx)("div",{children:"Page not found!"}),Object(m.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},N=t(2),k=t(5),A=t.n(k);var C=function(e){var a,t=e.deleteAffairCallback;return Object(m.jsxs)("div",{className:(a=e.affair.priority,"middle"===a?A.a.elements__affair__yellow:"high"===a?A.a.elements__affair_red:A.a.elements__affair_green),children:["(",e.affair.priority,")",e.affair.name,Object(m.jsxs)("div",{className:"buttons__affairs",children:[Object(m.jsx)("button",{className:A.a.delete__button,onClick:function(){return t(e.affair._id)},children:"X"}),Object(m.jsx)("button",{className:A.a.add__button,onClick:function(){return a=e.affair,e.addCompletedAffairs(a),void e.deleteAffairCallback(e.affair._id);var a},children:"+"})]})]})},S=["all","middle","high","low"];var M=function(e){var a=e.data.map((function(a){return Object(m.jsx)(C,{affair:a,deleteAffairCallback:e.deleteAffairCallback,addCompletedAffairs:e.addCompletedAffairs},a._id)})),t=S.map((function(a){var t=e.filter===a?A.a.pressed:void 0;return Object(m.jsx)("button",{className:t,onClick:function(){return r(a)},children:a})})),r=function(a){e.setFilter(a)};return Object(m.jsxs)("div",{className:A.a.wrapper__content,children:[Object(m.jsx)("div",{className:A.a.wrapper__affairs,children:a}),Object(m.jsx)("div",{className:A.a.buttons,children:t})]})};var W=function(e){var a=e.affairs.map((function(e){return Object(m.jsx)("li",{children:e.name})}));return Object(m.jsxs)("div",{className:A.a.wrapper__completed__affairs,children:[Object(m.jsx)("h6",{children:"Completed affairs"}),Object(m.jsx)("div",{className:A.a.completed__affairs,children:Object(m.jsx)("ul",{children:a})})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var H=function(){var e=Object(r.useState)(y),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(r.useState)("all"),c=Object(l.a)(n,2),i=c[0],_=c[1],o=Object(r.useState)([]),d=Object(l.a)(o,2),u=d[0],b=d[1],f=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,i);return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 2",Object(m.jsx)("div",{className:A.a.wrapper,children:Object(m.jsx)(M,{data:f,setFilter:_,filter:i,deleteAffairCallback:function(e){return s(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},addCompletedAffairs:function(e){b([].concat(Object(j.a)(u),[e]))}})}),Object(m.jsx)("hr",{}),Object(m.jsx)(W,{affairs:u}),Object(m.jsx)("hr",{})]})},P=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(H,{})})},G=t(7),J=t.n(G),U=function(e){var a=e.name,t=e.setNameCallback,r=e.addUser,s=e.error,n=e.totalUsers,c=s?J.a.error:J.a.not_error;return Object(m.jsxs)("div",{className:J.a.wrapper,children:[Object(m.jsxs)("div",{className:J.a.fields__input,children:[Object(m.jsx)("input",{value:a,onChange:function(e){return t(e)},className:c}),Object(m.jsx)("button",{onClick:function(){return r(a)},children:"add"}),Object(m.jsxs)("span",{className:J.a.total__user,children:["Total User: ",n]})]}),s&&Object(m.jsx)("span",{className:J.a.message__error,children:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 0 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]})},E=function(e){var a=e.users,t=e.addUserCallback,s=e.setLog,n=Object(r.useState)(""),c=Object(l.a)(n,2),i=c[0],_=c[1],o=Object(r.useState)(!1),j=Object(l.a)(o,2),d=j[0],u=j[1],b=function(){return(new Date).toLocaleTimeString()},f=a.length;return Object(m.jsx)(U,{name:i,setNameCallback:function(e){u(!1),_(e.target.value)},addUser:function(e){e.length?(t(e),alert("\u041f\u0440\u0438\u0432\u0435\u0442 ".concat(e)),s("(".concat(b(),") \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ").concat(e," \u0443c\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d")),_("")):(s("(".concat(b(),") \u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043f\u0443\u0441\u0442\u043e\u0435 \u0438\u043c\u044f")),u(!0))},error:d,totalUsers:f})},D=t(18);var T=function(e){var a=e.log.map((function(e){return 29===e.length?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("i",{className:J.a.error_log,children:[e,Object(m.jsx)("br",{})]})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("i",{className:J.a.success_log,children:[e,Object(m.jsx)("br",{})]})})}));return Object(m.jsx)("div",{className:J.a.wrapper__log,children:a})};var B=function(){var e=Object(r.useState)([]),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(r.useState)([]),c=Object(l.a)(n,2),i=c[0],_=c[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 3",Object(m.jsx)(E,{users:t,addUserCallback:function(e){s([].concat(Object(j.a)(t),[{_id:Object(D.v4)(),name:e}]))},setLog:function(e){_([].concat(Object(j.a)(i),[e]))}}),Object(m.jsx)("hr",{}),Object(m.jsx)(T,{log:i}),Object(m.jsx)("hr",{})]})},L=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(B,{})})},q="/pre-junior",F="/junior",Y="/junior-plus",Z="ex";var z=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(N.c,{children:[Object(m.jsx)(N.a,{path:"/",element:Object(m.jsx)(v,{})}),Object(m.jsx)(N.a,{path:q,element:Object(m.jsx)(v,{})}),Object(m.jsx)(N.a,{path:F,element:Object(m.jsx)(P,{})}),Object(m.jsx)(N.a,{path:Y,element:Object(m.jsx)(L,{})}),Object(m.jsx)(N.a,{path:Z,element:Object(m.jsx)(w,{})})]})})},X=t(10),I=t.n(X),K=(t(27),[{name:"HW1",link:"as"},{name:"HW2",link:"as"},{name:"HW3",link:"as"},{name:"HW4",link:"as"},{name:"HW5",link:"as"},{name:"HW6",link:"as"}]),R=[{name:"HW7",link:"as"},{name:"HW8",link:"as"},{name:"HW9",link:"as"},{name:"HW10",link:"as"},{name:"HW11",link:"as"}],V=[{name:"HW12",link:"as"},{name:"HW13",link:"as"},{name:"HW14",link:"as"},{name:"HW15",link:"as"},{name:"HW16",link:"as"}];var $=function(){var e,a=Object(r.useState)("PreJunior"),t=Object(l.a)(a,2),s=t[0],n=t[1],c=Object(r.useState)(!0),i=Object(l.a)(c,2),_=i[0],j=i[1],d=Object(r.useState)(K),u=Object(l.a)(d,2),b=u[0],f=u[1],p=function(e){n(e.currentTarget.id)},O=function(e){var a=e.currentTarget.id;f("PreJunior"===a?K:"Junior"===a?R:V),j(!0),console.log(b)},g=function(e){j(!1)};return Object(m.jsxs)("div",{className:I.a.wrapper,children:[Object(m.jsxs)("div",{className:I.a.current__link,children:[Object(m.jsx)("div",{className:I.a.current__page,children:s}),Object(m.jsx)("div",{className:I.a.button__rigth,children:Object(m.jsx)("b",{children:">"})})]}),Object(m.jsxs)("div",{className:I.a.wrapper__link,children:[Object(m.jsx)(o.b,{id:"PreJunior",to:q,onClick:p,onMouseOver:O,onMouseOut:g,children:"PreJunior"}),Object(m.jsx)(o.b,{id:"Junior",to:F,onClick:p,onMouseOver:O,onMouseOut:g,children:"Junior"}),Object(m.jsx)(o.b,{id:"JuniorPlus",to:Y,onClick:p,onMouseOver:O,onMouseOut:g,children:"JuniorPlus"})]}),_&&(e=b,Object(m.jsx)("div",{className:I.a.added__menu,children:e.map((function(e,a){return Object(m.jsx)("a",{className:"added__menu__points"+a,children:e.name})}))}))]})};var Q=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)($,{}),Object(m.jsx)(z,{})]})};var ee=function(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{className:_.a.App,children:[Object(m.jsx)("div",{children:"react homeworks:"}),Object(m.jsx)(Q,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports={wrapper:"Message_wrapper__3-9-w",dialog__window:"Message_dialog__window__3sk9b",allmessage:"Message_allmessage__286p2",message__wrapper:"Message_message__wrapper__2YZi7",alt__message__wrapper:"Message_alt__message__wrapper__3W9yD",content__wrapper:"Message_content__wrapper__1fKXS",avatar:"Message_avatar__3ULno",name__user:"Message_name__user__A5uhR",message:"Message_message__1WM7E",text__message:"Message_text__message__14Gx5",data__message:"Message_data__message__E7N3O",wrapper__form:"Message_wrapper__form__16eIJ",choose__user:"Message_choose__user__n0Nsb",input__text:"Message_input__text__2i8GB",submit:"Message_submit__1rHvV",alt__content__wrapper:"Message_alt__content__wrapper__3o3nW",alt__text__message:"Message_alt__text__message__3xcc6",alt__name__user:"Message_alt__name__user__2PTpf"}},5:function(e,a,t){e.exports={someClass:"Affairs_someClass__2eE1l",wrapper:"Affairs_wrapper__2tJc9",wrapper__content:"Affairs_wrapper__content__2eBl-",wrapper__affairs:"Affairs_wrapper__affairs__1_3qD",elements__affair_green:"Affairs_elements__affair_green__2dZAG",elements__affair__yellow:"Affairs_elements__affair__yellow__34oEu",elements__affair_red:"Affairs_elements__affair_red__gLYJ-",buttons:"Affairs_buttons__2L42G",wrapper__completed__affairs:"Affairs_wrapper__completed__affairs__3LT6z",completed__affairs:"Affairs_completed__affairs__1khYz",delete__button:"Affairs_delete__button__1w1A6",add__button:"Affairs_add__button__2_4gA",pressed:"Affairs_pressed__EIKMz"}},7:function(e,a,t){e.exports={someClass:"Greeting_someClass__1BxRw",error:"Greeting_error__2lJkV",not_error:"Greeting_not_error__1kgtj",fields__input:"Greeting_fields__input__2CNou",wrapper:"Greeting_wrapper__15qV-",message__error:"Greeting_message__error__ciz28",total__user:"Greeting_total__user__ooxq0",error_log:"Greeting_error_log__3g3gz",success_log:"Greeting_success_log__24dyE",wrapper__log:"Greeting_wrapper__log__30P1e"}}},[[28,1,2]]]);
//# sourceMappingURL=main.9ede29f5.chunk.js.map