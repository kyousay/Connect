(window.webpackJsonpconnect=window.webpackJsonpconnect||[]).push([[0],{24:function(t,e,n){t.exports=n.p+"static/media/\u30ab\u30a4\u30b8.3975da28.png"},29:function(t,e,n){t.exports=n(54)},30:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);n(30);var a=n(1),c=n.n(a),r=n(15),o=n.n(r),i=n(5),u=n(20),l=n.n(u),s=n(23),p=n(7),h=n(8),m=n(10),f=n(9),b=n(11),d=(n(40),function(t){function e(t){var n;return Object(p.a)(this,e),(n=Object(m.a)(this,Object(f.a)(e).call(this,t))).state={flg:!0},n}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props.title;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"header_title"},t))}}]),e}(a.Component)),O=(n(41),n(24)),v=n.n(O),y=Object(i.b)(function(t){return{inputChat:t.inputChat}})(function(t){var e=t.inputChat;return c.a.createElement("div",{className:"chatPanel"},c.a.createElement("div",{className:"chatPanel_content"},e.map(function(t,e){return c.a.createElement("div",{className:"chatPanel_message",key:e},c.a.createElement("div",{className:"chatPanel_imgBox"},c.a.createElement("img",{src:v.a,className:"chatPanel_img",alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u5199\u771f"})),c.a.createElement("p",{className:"chatPanel_text"},t.text))})))}),E=(n(42),function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(c)))).handleCancel=function(t){t.preventDefault()},n.validation=function(t,e){if(""===t)return!1;e(t)},n}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.chat,a=e.inputChat,r=e.addChat;return c.a.createElement("div",{className:"chatForm"},c.a.createElement("form",{className:"chatForm_panel",onSubmit:function(e){t.handleCancel(e)}},c.a.createElement("input",{type:"text",placeholder:"chat your message",className:"chatForm_text",value:n,onChange:function(t){a(t.target.value)}}),c.a.createElement("button",{type:"send",className:"chatForm_sendButton",onClick:function(){t.validation(n,r)}},c.a.createElement("i",{className:"fas fa-comments chatForm_icon"}))))}}]),e}(a.Component)),j=Object(i.b)(function(t){return{chat:t.chat}},function(t){return{inputChat:function(e){return t(function(t){return{type:"INPUT_MESSAGE",payload:{chat:t}}}(e))},addChat:function(e){return t(function(t){return{type:"CHAT_MESSAGE",payload:{chat:t,time:(new Date).getHours().toString()+":"+(new Date).getMinutes().toString()}}}(e))}}})(E),g=n(25),C=n.n(g).a.initializeApp({apiKey:"AIzaSyCXT-Kv9En2cLsa08Gzjsw4Xw795d9-T4Y",authDomain:"connect-bb28b.firebaseapp.com",databaseURL:"https://connect-bb28b.firebaseio.com",projectId:"connect-bb28b",storageBucket:"",messagingSenderId:"68923430908",appId:"1:68923430908:web:a74d583c09b897ef"}).database(),w=function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(s.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.equalDatabase,C.ref("rooms").child("room1").child("chat").on("value",function(t){e(Object.values(t.val()))});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{title:"CONNECT"}),c.a.createElement(y,null),c.a.createElement(j,null))}}]),e}(a.Component),A=Object(i.b)(function(t){return{state:t.state}},function(t){return{equalDatabase:function(e){return t(function(t){return{type:"EQUAL_DATABASE",payload:{inputChat:t}}}(e))}}})(w),N=n(13),S=n(27),P=n.n(S),_=n(28);function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(n,!0).forEach(function(e){Object(_.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var x={chat:"",inputChat:[]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INPUT_MESSAGE":return k({},t,{chat:e.payload.chat});case"CHAT_MESSAGE":var n=t.inputChat.slice();return n.unshift({text:e.payload.chat,time:e.payload.time}),k({},t,{chat:"",inputChat:n});case"EQUAL_DATABASE":return k({},t,{inputChat:e.payload.inputChat});default:return t}},I=(n(53),Object(N.c)(T,Object(N.a)(P.a)));o.a.render(c.a.createElement(i.a,{store:I},c.a.createElement(A,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6fcae690.chunk.js.map