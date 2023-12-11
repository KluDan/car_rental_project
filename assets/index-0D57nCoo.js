import{G as S,r,j as e,s as n,u as y,a as j,b as K,f as F,c as $,d as Y,t as a,e as O,g as Q,h as X,n as Z}from"./index-mQdeu8ZK.js";import{M as ee,a as te,b as ne,c as oe,d as se,C as L,e as re,f as D,R as ie,g as ae,h as le,s as ce,i as de,j as R,k as pe,l as xe,m as ue,n as he,o as ge}from"./selectors-kOZqXQ8G.js";import{M as fe}from"./MainButton-RxtSfQk1.js";function me(t){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(t)}const je=({isOpen:t,onClose:o,carDetails:p})=>{const c=r.useRef(),l=b=>b.replace(/\B(?=(\d{3})+(?!\d))/g,","),{id:x,address:g,img:u,make:h,model:i,rentalPrice:m,year:s,type:k,mileage:w,functionalities:v,accessories:d,description:f,fuelConsumption:C,engineSize:M,rentalConditions:V}=p,I=g.split(", "),N=I[1],W=I[2],G=[N,W,`Id: ${x}`,`Year: ${s}`,`Type: ${k}`,`Fuel Consumption: ${C}`,`Engine Size: ${M}`],J=[...d,...v],U=l(w.toString()),_=[...V.split(`
`)],H=b=>{c.current&&!c.current.contains(b.target)&&o()};return r.useEffect(()=>{const b=q=>{q.key==="Escape"&&o()};return t?(document.body.style.overflow="hidden",document.addEventListener("keydown",b)):document.body.style.overflow="",()=>{document.removeEventListener("keydown",b),document.body.style.overflow=""}},[t,o]),t?e.jsx(ee,{onClick:H,children:e.jsxs(te,{ref:c,children:[e.jsx(ne,{src:u,alt:`${h} ${i}`}),e.jsxs(oe,{children:[e.jsxs(se,{children:[h,e.jsxs("span",{children:[" ",i,","]}),e.jsxs("span",{children:[" ",s]})]}),e.jsx(L,{details:G,marginBottom:"14px"})]}),e.jsx(re,{children:f}),e.jsx(D,{children:"Accessories and functionalities:"}),e.jsx(L,{details:J,marginBottom:"24px"}),e.jsx(D,{children:"Rental Conditions: "}),e.jsx(ie,{details:_,mileage:U,price:m}),e.jsx(ae,{href:"tel:+380730000000",children:"Rental car"}),e.jsx(le,{onClick:o,children:e.jsx(me,{size:24})})]})}):null},be=n.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  align-content: start;
  margin-bottom: 100px;
`,ye=()=>{const t=y(),o=j(ce),p=j(de),c=j(R),l=j(K),[x,g]=r.useState(null),u=r.useRef(!1);r.useEffect(()=>{if(!o.length&&u.current)t(F({page:1,limit:c}));else{u.current=!0;const s=localStorage.getItem("favoriteCarIds");s&&JSON.parse(s).forEach(w=>{t($(w))})}},[t,o.length,c]);const h=s=>{l.includes(s)?t(Y(s)):t($(s))},i=s=>{g(s)},m=()=>{g(null)};return p?e.jsxs("div",{children:["Error: ",p]}):e.jsxs(be,{children:[o.map(s=>e.jsx(pe,{car:s,onHeartClick:()=>h(s.id),isFavorite:l.includes(s.id),onLearnMoreClick:i},s.id)),x&&e.jsx(je,{isOpen:!!x,onClose:m,carDetails:x})]})};function A(t){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(t)}function P(t){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(t)}const we=n.div`
  width: 224px;
  position: relative;
  display: inline-block;
`,Ce=n.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${a.colors.inputBackground};
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ke=n.input`
  width: 80%;
  outline: none;
  background-color: transparent;
  color: ${a.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,ve=n.label`
  color: ${a.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,Me=n.button`
  background: none;
  width: 20%;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,B=n.span`
  font-size: 20px;
  height: 20px;
  color: ${a.colors.primaryText};
`,Se=n.ul`
  width: 100%;
  height: 272px;
  overflow: auto;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 100%;
  left: 0;
  margin-top: 4px;
  margin: 0;
  padding: 14px 8px 14px 18px;
  list-style: none;
  background-color: ${a.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,Ie=n.li`
  color: ${({selected:t})=>t?a.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${a.colors.inputBackground};
  }
`,$e=()=>{const[t,o]=r.useState([]),[p,c]=r.useState(null),[l,x]=r.useState(""),[g,u]=r.useState([]),[h,i]=r.useState(!1),m=y(),s=r.useRef(null);r.useEffect(()=>{(async()=>{try{const C=await(await fetch("/car_rental_project/makes.json")).text(),M=JSON.parse(C);o(M)}catch(f){console.error("Error",f)}})()},[]),r.useEffect(()=>{const d=f=>{s.current&&!s.current.contains(f.target)&&i(!1)};return h&&document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[h]);const k=d=>{c(d),x(d.charAt(0).toUpperCase()+d.slice(1)),i(!1),u(t),m(O(d))},w=d=>{const f=d.target.value.trim().toLowerCase();x(f),i(!0),u(t.filter(C=>C.toLowerCase().includes(f.toLowerCase()))),console.log(f)},v=()=>{i(!h),u(t)};return e.jsxs(we,{ref:s,children:[e.jsx(ve,{htmlFor:"carMakes",children:"Car Brand:"}),e.jsxs(Ce,{children:[e.jsx(ke,{id:"carMakes",value:l,onChange:w,placeholder:"Enter the text"}),e.jsx(Me,{onClick:v,children:h?e.jsx(B,{children:e.jsx(P,{})}):e.jsx(B,{children:e.jsx(A,{})})})]}),h&&e.jsx(Se,{children:g.map((d,f)=>e.jsx(Ie,{selected:p===d,onClick:()=>k(d),children:d.charAt(0).toUpperCase()+d.slice(1)},f))})]})},Le=n.div`
  width: 125px;
  position: relative;
  display: inline-block;
`,De=n.div`
  width: 100%;
  border-radius: 14px;
  background-color: ${a.colors.inputBackground};
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,Be=n.label`
  color: ${a.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,Te=n.button`
  background: none;
  width: 20%;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,T=n.span`
  font-size: 20px;
  height: 20px;
  color: ${a.colors.primaryText};
`,Ee=n.ul`
  width: 100%;
  height: 188px;
  overflow: auto;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 100%;
  left: 0;
  margin-top: 4px;
  margin: 0;
  padding: 14px 8px 14px 18px;
  list-style: none;
  background-color: ${a.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,ze=n.li`
  color: ${({selected:t})=>t?a.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${a.colors.inputBackground};
  }
`,Fe=()=>{const[t,o]=r.useState(null),[p,c]=r.useState([]),[l,x]=r.useState(!1);y();const g=r.useRef(null);r.useEffect(()=>{const i=Array.from({length:20},(m,s)=>(s+1)*10);c(i)},[]),r.useEffect(()=>{const i=m=>{g.current&&!g.current.contains(m.target)&&x(!1)};return l&&document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}},[l]);const u=i=>{o(i),x(!1)},h=()=>{x(!l)};return e.jsxs(Le,{ref:g,children:[e.jsx(Be,{children:"Price/ 1hour"}),e.jsxs(De,{children:[e.jsxs("p",{children:["To ",t,"$"]}),e.jsx(Te,{onClick:h,children:l?e.jsx(T,{children:e.jsx(P,{})}):e.jsx(T,{children:e.jsx(A,{})})})]}),l&&e.jsx(Ee,{children:p.map((i,m)=>e.jsx(ze,{selected:t===i,onClick:()=>u(i),children:i},m))})]})},Oe=n.div`
  display: flex;
  flex-direction: column;
`,Re=n.div`
  width: 320px;
  border-radius: 14px;
  background-color: ${a.colors.inputBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,E=n.div`
  display: flex;
  align-items: center;
  padding-block: 14px;
  padding-left: 24px;
  width: 50%;
  position: relative;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  &:first-of-type {
    border-right: 1px solid ${a.colors.additionalGray};
  }

  span {
    display: inline-block;
    margin-right: 4px;
  }
`,z=n.input`
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${a.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,Ae=n.label`
  color: ${a.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,Pe=()=>{const[t,o]=r.useState(""),[p,c]=r.useState(""),l=u=>u.replace(/\B(?=(\d{3})+(?!\d))/g,","),x=u=>{const h=u.target.value.replace(/\D/g,"");o(l(h))},g=u=>{const h=u.target.value.replace(/\D/g,"");c(l(h))};return e.jsxs(Oe,{children:[e.jsx(Ae,{htmlFor:"mileageFrom",children:"Car mileage / km:"}),e.jsxs(Re,{children:[e.jsxs(E,{children:[e.jsx("span",{children:"From"}),e.jsx(z,{id:"mileageFrom",type:"text",value:t,onChange:x})]}),e.jsxs(E,{children:[e.jsx("span",{children:"To"}),e.jsx(z,{type:"text",value:p,onChange:g})]})]})]})},Ve=n.section`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,Ne=()=>{const t=y(),o=j(xe),p=()=>{t(Q()),t(O(o));const c={page:1,limit:12};o&&(c.make=o),t(X(c))};return e.jsxs(Ve,{children:[e.jsx($e,{}),e.jsx(Fe,{}),e.jsx(Pe,{}),e.jsx(fe,{buttonTitle:"Search",padding:"14px",width:"136px",onClick:p})]})},We=n.button`
  max-width: 100px;
  color: ${a.colors.primaryBlue};
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  background-color: inherit;
  transition: ${a.transitions.default};
  &:hover {
    color: ${a.colors.secondaryBlue};
  }
`,Ge=({onLoadMore:t})=>{const o=y(),p=()=>{o(Z()),t()};return e.jsx(We,{onClick:p,children:"Load more"})},Je=n.div`
  max-width: 1213px;
  padding-inline: 15px;
  margin: auto;
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,qe=()=>{const t=y(),o=j(ue),p=j(he),c=j(ge),l=j(R),x=async()=>{t(F({page:p+1,limit:l,append:!0}))};return e.jsxs(Je,{children:[e.jsx(Ne,{}),e.jsx(ye,{}),o>=l&&!c&&e.jsx(Ge,{onLoadMore:x})]})};export{qe as default};
