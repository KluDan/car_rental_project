import{G as S,r as s,j as e,s as n,u as b,a as j,b as K,f as F,c as $,d as Y,t as a,e as O,g as Q,h as X,n as Z}from"./index-ikUV23pT.js";import{M as ee,a as te,b as ne,c as oe,d as se,C as L,e as re,f as D,R as ie,g as ae,h as le,s as ce,i as de,j as R,k as pe,l as ue,m as xe,n as he,o as ge,p as fe}from"./selectors-y6fgfCe2.js";function me(t){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(t)}const je=({isOpen:t,onClose:r,carDetails:p})=>{const c=s.useRef(),l=y=>y.replace(/\B(?=(\d{3})+(?!\d))/g,","),{id:u,address:g,img:x,make:h,model:i,rentalPrice:m,year:o,type:k,mileage:w,functionalities:v,accessories:d,description:f,fuelConsumption:C,engineSize:M,rentalConditions:V}=p,I=g.split(", "),N=I[1],W=I[2],G=[N,W,`Id: ${u}`,`Year: ${o}`,`Type: ${k}`,`Fuel Consumption: ${C}`,`Engine Size: ${M}`],J=[...d,...v],U=l(w.toString()),_=[...V.split(`
`)],H=y=>{c.current&&!c.current.contains(y.target)&&r()};return s.useEffect(()=>{const y=q=>{q.key==="Escape"&&r()};return t?(document.body.style.overflow="hidden",document.addEventListener("keydown",y)):document.body.style.overflow="",()=>{document.removeEventListener("keydown",y),document.body.style.overflow=""}},[t,r]),t?e.jsx(ee,{onClick:H,children:e.jsxs(te,{ref:c,children:[e.jsx(ne,{src:x,alt:`${h} ${i}`}),e.jsxs(oe,{children:[e.jsxs(se,{children:[h,e.jsxs("span",{children:[" ",i,","]}),e.jsxs("span",{children:[" ",o]})]}),e.jsx(L,{details:G,marginBottom:"14px"})]}),e.jsx(re,{children:f}),e.jsx(D,{children:"Accessories and functionalities:"}),e.jsx(L,{details:J,marginBottom:"24px"}),e.jsx(D,{children:"Rental Conditions: "}),e.jsx(ie,{details:_,mileage:U,price:m}),e.jsx(ae,{href:"tel:+380730000000",children:"Rental car"}),e.jsx(le,{onClick:r,children:e.jsx(me,{size:24})})]})}):null},ye=n.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  margin-bottom: 100px;
`,be=()=>{const t=b(),r=j(ce),p=j(de),c=j(R),l=j(K),[u,g]=s.useState(null),x=s.useRef(!1);s.useEffect(()=>{if(x.current)t(F({page:1,limit:c}));else{x.current=!0;const o=localStorage.getItem("favoriteCarIds");o&&JSON.parse(o).forEach(w=>{t($(w))})}},[t,c]);const h=o=>{l.includes(o)?t(Y(o)):t($(o))},i=o=>{g(o)},m=()=>{g(null)};return p?e.jsxs("div",{children:["Error: ",p]}):e.jsxs(ye,{children:[r.map(o=>e.jsx(pe,{car:o,onHeartClick:()=>h(o.id),isFavorite:l.includes(o.id),onLearnMoreClick:i},o.id)),u&&e.jsx(je,{isOpen:!!u,onClose:m,carDetails:u})]})};function A(t){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(t)}function P(t){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(t)}const we=n.div`
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
`,$e=()=>{const[t,r]=s.useState([]),[p,c]=s.useState(null),[l,u]=s.useState(""),[g,x]=s.useState([]),[h,i]=s.useState(!1),m=b(),o=s.useRef(null);s.useEffect(()=>{(async()=>{try{const C=await(await fetch("/car_rental_project/makes.json")).text(),M=JSON.parse(C);r(M)}catch(f){console.error("Error",f)}})()},[]),s.useEffect(()=>{const d=f=>{o.current&&!o.current.contains(f.target)&&i(!1)};return h&&document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[h]);const k=d=>{c(d),u(d.charAt(0).toUpperCase()+d.slice(1)),i(!1),x(t),m(O(d))},w=d=>{const f=d.target.value.trim().toLowerCase();u(f),i(!0),x(t.filter(C=>C.toLowerCase().includes(f.toLowerCase()))),console.log(f)},v=()=>{i(!h),x(t)};return e.jsxs(we,{ref:o,children:[e.jsx(ve,{htmlFor:"carMakes",children:"Car Brand:"}),e.jsxs(Ce,{children:[e.jsx(ke,{id:"carMakes",value:l,onChange:w,placeholder:"Enter the text"}),e.jsx(Me,{onClick:v,children:h?e.jsx(B,{children:e.jsx(P,{})}):e.jsx(B,{children:e.jsx(A,{})})})]}),h&&e.jsx(Se,{children:g.map((d,f)=>e.jsx(Ie,{selected:p===d,onClick:()=>k(d),children:d.charAt(0).toUpperCase()+d.slice(1)},f))})]})},Le=n.div`
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
`,Fe=()=>{const[t,r]=s.useState(null),[p,c]=s.useState([]),[l,u]=s.useState(!1);b();const g=s.useRef(null);s.useEffect(()=>{const i=Array.from({length:20},(m,o)=>(o+1)*10);c(i)},[]),s.useEffect(()=>{const i=m=>{g.current&&!g.current.contains(m.target)&&u(!1)};return l&&document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}},[l]);const x=i=>{r(i),u(!1)},h=()=>{u(!l)};return e.jsxs(Le,{ref:g,children:[e.jsx(Be,{children:"Price/ 1hour"}),e.jsxs(De,{children:[e.jsxs("p",{children:["To ",t,"$"]}),e.jsx(Te,{onClick:h,children:l?e.jsx(T,{children:e.jsx(P,{})}):e.jsx(T,{children:e.jsx(A,{})})})]}),l&&e.jsx(Ee,{children:p.map((i,m)=>e.jsx(ze,{selected:t===i,onClick:()=>x(i),children:i},m))})]})},Oe=n.div`
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
`,Pe=()=>{const[t,r]=s.useState(""),[p,c]=s.useState(""),l=x=>x.replace(/\B(?=(\d{3})+(?!\d))/g,","),u=x=>{const h=x.target.value.replace(/\D/g,"");r(l(h))},g=x=>{const h=x.target.value.replace(/\D/g,"");c(l(h))};return e.jsxs(Oe,{children:[e.jsx(Ae,{htmlFor:"mileageFrom",children:"Car mileage / km:"}),e.jsxs(Re,{children:[e.jsxs(E,{children:[e.jsx("span",{children:"From"}),e.jsx(z,{id:"mileageFrom",type:"text",value:t,onChange:u})]}),e.jsxs(E,{children:[e.jsx("span",{children:"To"}),e.jsx(z,{type:"text",value:p,onChange:g})]})]})]})},Ve=n.section`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-block: 50px;
`,Ne=()=>{const t=b(),r=j(ue),p=()=>{t(Q()),t(O(r));const c={page:1,limit:12};r&&(c.make=r),t(X(c))};return e.jsxs(Ve,{children:[e.jsx($e,{}),e.jsx(Fe,{}),e.jsx(Pe,{}),e.jsx(xe,{buttonTitle:"Search",padding:"14px",width:"136px",onClick:p})]})},We=n.button`
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
`,Ge=({onLoadMore:t})=>{const r=b(),p=()=>{r(Z()),t()};return e.jsx(We,{onClick:p,children:"Load more"})},Je=n.div`
  max-width: 1213px;
  padding-inline: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,He=()=>{const t=b(),r=j(he),p=j(ge),c=j(fe),l=j(R),u=async()=>{t(F({page:p+1,limit:l,append:!0}))};return e.jsxs(Je,{children:[e.jsx(Ne,{}),e.jsx(be,{}),r>=l&&!c&&e.jsx(Ge,{onLoadMore:u})]})};export{He as default};
