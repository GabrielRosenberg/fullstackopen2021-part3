(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(16),o=t.n(a),i=(t(23),t(18)),s=t(4),u=t(17),j=t.n(u),b=t(0),l=function(e){var n=e.name,t=e.number,c=e.nameHandler,r=e.numberHandler,a=e.add;return Object(b.jsxs)("form",{onSubmit:a,children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:n,onChange:c})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:t,onChange:r})]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.person;return Object(b.jsx)("li",{children:"".concat(n.name," ").concat(n.number)})},h=function(e){var n=e.persons,t=e.newSearch;return Object(b.jsx)("ul",{style:{listStyle:"none"},children:n.map((function(e){if(e.name.includes(t)||""===t)return Object(b.jsx)(d,{person:e},e.name)}))})},O=function(e){var n=e.searchText,t=e.handler;return Object(b.jsxs)("div",{children:["Search: ",Object(b.jsx)("input",{value:n,onChange:t})]})},f=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),o=Object(s.a)(a,2),u=o[0],d=o[1],f=Object(c.useState)(""),m=Object(s.a)(f,2),x=m[0],p=m[1],v=Object(c.useState)(""),g=Object(s.a)(v,2),S=g[0],w=g[1];Object(c.useEffect)((function(){console.log("Effect is run, collecting phonepook from db"),j.a.get("/api/persons").then((function(e){console.log("Promise was fulfilled",e),k(e.data)}))}),[]);var k=function(e){r(e)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(O,{searchText:S,handler:function(e){w(e.target.value)}}),Object(b.jsx)("h2",{children:"Add a new"}),Object(b.jsx)(l,{name:u,number:x,nameHandler:function(e){d(e.target.value)},numberHandler:function(e){p(e.target.value)},add:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(u))window.alert("".concat(u," is already in the phonebook."));else{var n=[].concat(Object(i.a)(t),[{name:u,number:x}]);d(""),p(""),k(n)}}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(h,{persons:t,newSearch:S})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.ab3c4286.chunk.js.map