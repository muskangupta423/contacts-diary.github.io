"use strict";(self.webpackChunkcontacts_diary=self.webpackChunkcontacts_diary||[]).push([[295],{253:function(e,n,t){var a=t(942),r=t(413),s=t(885),i=t(791),c=t(184);n.Z=function(e){var n=(0,i.useState)({name:"",phone:"",type:"",isWhatsApp:!1}),t=(0,s.Z)(n,2),l=t[0],o=t[1];(0,i.useEffect)((function(){e.details&&o((0,r.Z)((0,r.Z)({},l),e.details))}),[e.details]);var u=function(e){var n=e.currentTarget,t=n.id,s=n.value,i=n.type,c=n.checked;o((0,r.Z)((0,r.Z)({},l),{},(0,a.Z)({},t,"checkbox"===i?c:s)))};return(0,c.jsx)("div",{className:"contact-form",children:(0,c.jsxs)("form",{onSubmit:function(n){return e.onSubmit(n,l)},children:[(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name: "}),(0,c.jsx)("input",{type:"text",id:"name",value:l.name,className:"form-control",required:!0,onChange:u})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"phone",className:"form-label",children:"Contact: "}),(0,c.jsx)("input",{type:"number",id:"phone",value:l.phone,className:"form-control",required:!0,onChange:u})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"type",className:"form-label",children:"Type: "}),(0,c.jsxs)("select",{id:"type",value:l.type,className:"form-control",placeholder:"Select...",required:!0,onChange:u,children:[(0,c.jsx)("option",{value:"",children:"Select"}),(0,c.jsx)("option",{value:"personal",children:"Personal"}),(0,c.jsx)("option",{value:"office",children:"Office"})]})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"type",className:"form-label",children:"Whatsapp: "}),(0,c.jsx)("input",{type:"checkbox",id:"isWhatsApp",checked:l.isWhatsApp,onChange:u})]}),(0,c.jsx)("button",{type:"submit",children:e.details?"Update":"Submit"})]})})}},295:function(e,n,t){t.r(n);var a=t(413),r=t(885),s=t(791),i=t(871),c=t(627),l=t(253),o=t(78),u=t(184);n.default=function(){var e=(0,i.UO)().id,n=(0,s.useContext)(c._),t=(0,r.Z)(n,2),d=t[0].contactList,f=t[1],p=(0,s.useState)({}),m=(0,r.Z)(p,2),h=m[0],x=m[1],v=(0,i.s0)();return(0,s.useEffect)((function(){if(e){var n=d.find((function(n){return n.id===e}));x(n)}}),[]),(0,u.jsx)(l.Z,{onSubmit:function(n,t){n.preventDefault(),f(o.mP(e,t)),v("/")},details:(0,a.Z)({},h)})}},78:function(e,n,t){t.d(n,{GK:function(){return r},mP:function(){return s},uK:function(){return i}});var a=t(835),r=function(e){return{type:a.P,id:e}},s=function(e,n){return{type:a.XJ,id:e,details:n}},i=function(e){return{type:a.rq,payload:e}}}}]);
//# sourceMappingURL=295.daa0b067.chunk.js.map