"use strict";(self.webpackChunkcontacts_diary=self.webpackChunkcontacts_diary||[]).push([[621],{621:function(t,n,e){e.r(n);var c=e(885),i=e(791),r=e(627),o=e(78),a=e(184),s=i.lazy((function(){return e.e(4).then(e.bind(e,4))})),u=i.lazy((function(){return e.e(33).then(e.bind(e,33))})),d={idToBeDeleted:null,contactNameToBeDeleted:""};n.default=function(){var t=(0,i.useContext)(r._),n=(0,c.Z)(t,2),l=n[0].contactList,f=n[1],h=(0,i.useState)(!1),x=(0,c.Z)(h,2),j=x[0],p=x[1],m=(0,i.useState)(d),y=(0,c.Z)(m,2),b=y[0],C=y[1];(0,i.useEffect)((function(){localStorage.setItem("list",JSON.stringify(l))}),[l]);var N=function(t,n){p((function(t){return!t})),C({idToBeDeleted:t,contactNameToBeDeleted:n})};return(0,a.jsxs)(a.Fragment,{children:[l.length>0?(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Contact"}),(0,a.jsx)("th",{children:"Contact Type"}),(0,a.jsx)("th",{children:"Whatsapp"}),(0,a.jsx)("th",{children:"Actions"})]})}),(0,a.jsx)("tbody",{children:l.map((function(t){return(0,a.jsx)(s,{row:t,deleteHandler:N},t.id)}))})]}):(0,a.jsxs)("div",{className:"no-contact",children:[(0,a.jsx)("div",{className:"no-contact-icon",children:(0,a.jsx)("img",{src:e(384)})}),(0,a.jsx)("p",{children:"No Contact Found!"})]}),j&&(0,a.jsx)(u,{deleteInfo:b,onCancel:function(){p((function(t){return!t})),C(d)},onDelete:function(){f(o.GK(b.idToBeDeleted)),p((function(t){return!t})),C(d)}})]})}},78:function(t,n,e){e.d(n,{GK:function(){return i},mP:function(){return r},uK:function(){return o}});var c=e(835),i=function(t){return{type:c.P,id:t}},r=function(t,n){return{type:c.XJ,id:t,details:n}},o=function(t){return{type:c.rq,payload:t}}},384:function(t,n,e){t.exports=e.p+"static/media/no-contact.652b51d343e3471cf276.jpg"}}]);
//# sourceMappingURL=621.7bcd18b7.chunk.js.map