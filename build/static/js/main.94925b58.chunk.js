(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(17),n=a.n(c),r=a(5),l=a(10),i=a(8),o=a(4),d=a.n(o),u=a(1),j=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(s.useState)(""),m=Object(i.a)(j,2),b=m[0],h=m[1];return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("h1",{className:"title",children:"Chat Application"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={"Project-ID":"6b644aa0-ddcf-4c97-8822-845ce8f2de45","User-Name":a,"User-Secret":l};try{d.a.get("https://api.chatengine.io/chats",{headers:t}),localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload()}catch(b){h("Oops, incorrect credentials.")}},children:[Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"username",required:!0}),Object(u.jsx)("input",{type:"text",value:l,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"password",required:!0}),Object(u.jsx)("div",{align:"center",children:Object(u.jsx)("button",{type:"submit",className:"button",children:Object(u.jsx)("span",{children:"Start Chatting"})})}),Object(u.jsx)("h2",{className:"error",children:b})]})]})})},m=(a(91),a(94)),b=a(95),h=function(e){var t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],n=a[1],r=e.chatId,o=e.creds,d=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(l.o)(o,r,{text:t})};return Object(u.jsxs)("form",{className:"message-form",onSubmit:d,children:[Object(u.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(l.l)(e,r)},onSubmit:d}),Object(u.jsx)("label",{htmlFor:"upload-button",children:Object(u.jsx)("span",{className:"image-button",children:Object(u.jsx)(m.a,{className:"picture-icon"})})}),Object(u.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.o)(o,r,{fles:e.target.files,text:""})}}),Object(u.jsx)("button",{tpe:"submit",className:"send-button",children:Object(u.jsx)(b.a,{className:"send-icon"})})]})},g=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(u.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(u.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},p=function(e){var t,a,s=e.lastMessage,c=e.message,n=!s||s.sender.username!==c.sender.username;return Object(u.jsxs)("div",{className:"message-row",children:[n&&Object(u.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(u.jsx)("img",{src:c.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(u.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:c.text})]})},x=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],l=function(e,t){n.people.map((function(a,s){var c;return a.last_read===e.id&&Object(u.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a.person)||void 0===c?void 0:c.avatar,")")}},"read_".concat(s))}))},i=function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],i=s===n.sender.userName;return Object(u.jsxs)("div",{style:{width:"100%"},children:[Object(u.jsx)("div",{className:"message-block",children:i?Object(u.jsx)(g,{message:n}):Object(u.jsx)(p,{message:n,lastMessage:c[r]})}),Object(u.jsx)("div",{className:"read-receipts",style:{marginRight:i?"18px":"0px",marginLeft:i?"0px":"68px"},children:l(n,i)})]},"msg_".concat(a))}))};return i(),n?Object(u.jsxs)("div",{className:"chat-feed",children:[Object(u.jsxs)("div",{className:"chat-title-container",children:[Object(u.jsx)("div",{className:"chat-title",children:n.title}),Object(u.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return" ".concat(e.person.username)}))})]}),i(),";",Object(u.jsx)("div",{style:{height:"100px"}}),Object(u.jsx)("div",{className:"message-form-container",children:Object(u.jsx)(h,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"Loading... "},O=function(){return localStorage.getItem("username")?Object(u.jsx)(l.d,{height:"100vh",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),projectID:"6b644aa0-ddcf-4c97-8822-845ce8f2de45",renderChatFeed:function(e){return Object(u.jsx)(x,Object(r.a)({},e))}}):Object(u.jsx)(j,{})};n.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.94925b58.chunk.js.map