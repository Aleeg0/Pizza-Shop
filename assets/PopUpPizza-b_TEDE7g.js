import{j as s,f as i,g as U,h as S,c as _,u as D,i as o,A as R,a as T}from"./index-DFKkmZO9.js";const $=()=>s.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{x:"0.5",y:"0.5",width:"31",height:"31",rx:"7.5",fill:"white",stroke:"#D3D3D3"}),s.jsx("path",{d:"M20.0798 18.6155L17.631 16.1667L20.0798 13.718C21.024 12.7737 19.5596 11.3093 18.6153 12.2536L16.1666 14.7023L13.7178 12.2535C12.7738 11.3094 11.3094 12.7738 12.2534 13.7178L14.7022 16.1667L12.2535 18.6154C11.3093 19.5596 12.7737 21.024 13.7179 20.0798L16.1667 17.6311L18.6155 20.0799C19.5596 21.024 21.024 19.5597 20.0798 18.6155Z",fill:"#D3D3D3"})]}),A="_popUpPizza_dt73f_1",E="_goBackBtn_dt73f_17",F="_content_dt73f_43",I="_show_dt73f_60",O="_info_dt73f_64",M="_chooseFilters_dt73f_72",V="_description_dt73f_77",c={popUpPizza:A,goBackBtn:E,content:F,show:I,info:O,chooseFilters:M,description:V},q=()=>{const[n,k]=i.useState(0),[a,C]=i.useState(0),[h,u]=i.useState(!1),m=i.useRef(null),f=i.useRef(null),v=U(),{id:N}=S(),r=Number(N),{title:x,imgURL:z,description:w,types:d,sizes:l,price:L,rating:y,category:B}=_(t=>t.pizzas.pizzas.find(e=>e.id===r)),p=_(t=>t.cart.items.find(e=>e.item.id===r&&e.item.size===l[n]&&e.item.type===d[a])),P=D();i.useEffect(()=>{const t=e=>{const g=e.composedPath();g.includes(f.current)&&!g.includes(m.current)&&j()};return h||u(!0),document.body.classList.add("no-scroll"),document.body.addEventListener("click",t),()=>document.body.removeEventListener("click",t)},[]);const j=()=>{u(!1),v("/"),document.body.classList.remove("no-scroll")},b=()=>{P(T({id:r,title:x,imgURL:z,type:d[a],size:l[n],price:L[n],rating:y,category:B}))};return s.jsx(s.Fragment,{children:s.jsx("div",{ref:f,className:c.popUpPizza,children:s.jsxs("div",{ref:m,className:`${c.content}  ${h&&c.show}`,children:[s.jsx("button",{className:c.goBackBtn,onClick:j,children:s.jsx($,{})}),s.jsxs("div",{className:c.info,children:[s.jsx("h2",{children:x}),s.jsx("p",{className:c.chooseFilters,children:`${d[a]} dough, ${l[n]} sm.`}),s.jsx("p",{className:c.description,children:w}),s.jsxs("div",{className:o.filtersContainer,children:[s.jsx("ul",{className:"thickness",children:d.map((t,e)=>s.jsx("li",{className:a===e?o.active:"",onClick:()=>C(e),children:t},e))}),s.jsx("ul",{className:"size",children:l.map((t,e)=>s.jsxs("li",{className:n===e?o.active:"",onClick:()=>k(e),children:[t," sm."]},e))})]}),s.jsxs("button",{type:"button",onClick:b,className:`${o.addToCartBtn} ${p?o.withValueBtn:""}`,children:[s.jsx(R,{}),s.jsx("p",{children:"Add"}),s.jsx("span",{children:s.jsx("p",{children:p&&p.count})})]})]}),s.jsx("img",{src:z,alt:"pizza"})]})})})};export{q as default};
