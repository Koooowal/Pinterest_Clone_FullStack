import{r as l,a as p,u as h,j as e,I as x,b as j}from"./index-Bcx3K_Zg.js";function g(){const[s,t]=l.useState(!1),[r,n]=l.useState(""),d=p(),{setCurrentUser:m}=h(),i=async o=>{o.preventDefault();const u=new FormData(o.target),c=Object.fromEntries(u);try{const a=await j.post(`/users/auth/${s?"register":"login"}`,c);m(a.data),d("/")}catch(a){n(a.response.data.message)}};return e.jsx("div",{className:"authPage",children:e.jsxs("div",{className:"authContainer",children:[e.jsx(x,{path:"/general/logo.png",alt:""}),e.jsx("h1",{children:s?"Create an Account":"Login to your account"}),s?e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"formGroup",children:[e.jsx("label",{htmlFor:"username",children:"Username"}),e.jsx("input",{type:"username",placeholder:"Enter your username",name:"username",id:"username",required:!0})]}),e.jsxs("div",{className:"formGroup",children:[e.jsx("label",{htmlFor:"displayName",children:"Name"}),e.jsx("input",{type:"displayName",placeholder:"Enter your name",name:"displayName",id:"displayName",required:!0})]}),e.jsxs("div",{className:"formGroup",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",placeholder:"Enter your email",name:"email",id:"email",required:!0})]}),e.jsxs("div",{className:"formGroup",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{type:"password",placeholder:"Enter your password",name:"password",id:"password",required:!0})]}),e.jsx("button",{type:"submit",children:"Register"}),e.jsxs("p",{onClick:()=>t(!1),children:["Do you have an account ",e.jsx("b",{children:"Login"})]}),r&&e.jsx("p",{className:"error",children:r})]},"registerForm"):e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"formGroup",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",placeholder:"Enter your email",name:"email",id:"email",required:!0})]}),e.jsxs("div",{className:"formGroup",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{type:"password",placeholder:"Enter your password",name:"password",id:"password",required:!0})]}),e.jsx("button",{type:"submit",children:"Login"}),e.jsxs("p",{onClick:()=>t(!0),children:["Don't have an account? ",e.jsx("b",{children:"Register"})]}),r&&e.jsx("p",{className:"error",children:r})]},"loginForm")]})})}export{g as default};
