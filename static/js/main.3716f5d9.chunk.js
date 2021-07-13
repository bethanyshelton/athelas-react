(this["webpackJsonpathelas-react"]=this["webpackJsonpathelas-react"]||[]).push([[0],{27:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(20),s=t.n(r),i=(t(27),t(9)),a=t(2),l=t(0);function o(){return Object(l.jsxs)("nav",{className:"flex items-center py-8 text-pink-500 border-b-2 border-pink-500",children:[Object(l.jsx)("h1",{className:"flex-1 w-6/12 text-center font-sans text-3xl tracking-wide",children:"Athelas"}),Object(l.jsxs)("div",{className:"flex-1 w-6/12 text-center divide-x divide-pink-300",children:[Object(l.jsx)(i.b,{to:"/",className:"px-2 sm:px-6 hover:text-pink-300",children:"Today"}),Object(l.jsx)(i.b,{to:"/add-pill",className:"px-2 sm:px-6 hover:text-pink-300",children:"New Pill"})]})]})}var d=(new Date).getFullYear();function j(){return Object(l.jsx)("div",{className:"flex items-center bg-gray-800 justify-center text-pink-500 fixed bottom-0 inset-x-0 py-2 border-t-2 border-pink-500",children:Object(l.jsxs)("p",{children:["\xa9 ",d," Bethany Shelton "]})})}var b=t(22),u=t(13),x=t(12),p=t(18);function f(e){var n=Object(c.useState)({name:"",dose:"",unit:"",frequency:""}),t=Object(u.a)(n,2),r=t[0],s=t[1];function i(e){var n=e.target,t=n.name,c=n.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(x.a)({},t,c))}))}return Object(l.jsx)("form",{className:"flex justify-center text-white bg-gray-800 pt-4",autoComplete:"off",onSubmit:function(n){e.onAdd(r),n.preventDefault()},children:Object(l.jsxs)("div",{className:"flex flex-col w-full sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12",children:[Object(l.jsx)("div",{className:"m-4",children:Object(l.jsx)("input",{onChange:i,name:"name",value:r.name,placeholder:"Name",type:"text",className:"placeholder-white bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"})}),Object(l.jsxs)("div",{className:"m-4",children:[Object(l.jsx)("input",{onChange:i,name:"dose",value:r.dose,placeholder:"Dose",type:"text",className:"placeholder-white bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-7/12 focus:outline-none focus:ring-2 focus:ring-pink-400"}),Object(l.jsxs)("select",{onChange:i,name:"unit",value:r.unit,className:"bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-5/12 focus:outline-none focus:ring-2 focus:ring-pink-400",children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"Unit"}),Object(l.jsx)("option",{value:"mg",children:"mg"}),Object(l.jsx)("option",{value:"mcg",children:"mcg"}),Object(l.jsx)("option",{value:"g",children:"g"}),Object(l.jsx)("option",{value:"iu",children:"IU"}),Object(l.jsx)("option",{value:"tsp",children:"teaspoon(s)"})]})]}),Object(l.jsx)("div",{className:"m-4",children:Object(l.jsxs)("select",{onChange:i,name:"frequency",value:r.frequency,className:"bg-gray-800 border-0 border-b-2 border-pink-400 p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400",children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"Frequency"}),Object(l.jsx)("option",{value:"wake-up",children:"Wake Up"}),Object(l.jsx)("option",{value:"breakfast",children:"Breakfast"}),Object(l.jsx)("option",{value:"lunch",children:"Lunch"}),Object(l.jsx)("option",{value:"dinner",children:"Dinner"}),Object(l.jsx)("option",{value:"bed-time",children:"Bed Time"})]})}),Object(l.jsx)("div",{className:"m-4",children:Object(l.jsx)("button",{className:"bg-pink-400 text-gray-800 rounded-full px-6 py-2 w-full hover:bg-pink-500",children:"Add"})})]})})}function h(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1];return console.log(t),Object(l.jsx)("div",{children:Object(l.jsx)(f,{onAdd:function(e){r((function(n){return[].concat(Object(b.a)(n),[e])}))}})})}function m(e){var n=h.filter((function(n){return n.frequency===e.frequency}));return Object(l.jsxs)("div",{className:"flex flex-col items-center mt-4 text-white",children:[Object(l.jsx)("h2",{className:"bg-gray-700 z-10 relative text-lg text-center -mb-4 w-6/12 md:w-4/12 lg:w-2/12 xl:w-1/12 rounded-md",children:h.frequency}),Object(l.jsxs)("div",{className:"bg-gray-800 pt-6 pb-2 w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 rounded-md border border-gray-600",children:[Object(l.jsx)("ul",{className:"list-square mx-8 mb-2",children:n.map((function(e,n){return Object(l.jsx)("li",{children:e.name},n)}))}),Object(l.jsx)("span",{className:"flex justify-end -mx-8 -my-6",children:Object(l.jsx)("button",{className:"flex justify-end bg-pink-500 rounded-full px-4 py-2 hover:bg-pink-400",children:"Taken"})})]})]})}function O(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{frequency:"wake-up"}),Object(l.jsx)(m,{frequency:"breakfast"}),Object(l.jsx)(m,{frequency:"lunch"}),Object(l.jsx)(m,{frequency:"dinner"}),Object(l.jsx)(m,{frequency:"bed-time"})]})}function g(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/",exact:!0,component:O}),Object(l.jsx)(a.a,{path:"/add-pill",component:h})]}),Object(l.jsx)(j,{})]})}s.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3716f5d9.chunk.js.map