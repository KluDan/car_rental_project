import{s as o,u as j,a as h,b as R,r as s,c as k,f as L,d as S,j as t,e as V,G as B,t as r,g as A,h as G,n as J}from"./index-yJyNpBsS.js";import{C as N,a as U}from"./CarDetailsModal-itX5xn4F.js";import{M as W}from"./MainButton-84Sp-0Lb.js";const _=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  align-content: start;
  margin-bottom: 100px;
`,H=e=>e.cars.cars,T=e=>e.cars.isLoading,q=e=>e.cars.error,K=e=>e.cars.currentPage,z=e=>e.cars.limit,Q=e=>e.cars.totalResults,E=e=>e.filter.inputValue,X=e=>e.filter.filterPriceValue,Y=()=>{const e=j(),i=h(H),l=h(q),g=h(z),n=h(R);h(T);const[p,f]=s.useState(null),u=h(E),x=s.useRef(!1);s.useEffect(()=>{if(e(k("")),!u.length&&!i.length&&x.current)e(L({page:1,limit:g}));else{x.current=!0;const c=localStorage.getItem("favoriteCarIds");c&&JSON.parse(c).forEach(y=>{e(S(y))})}},[e,i.length,g]);const a=c=>{n.includes(c)?e(V(c)):e(S(c))},b=c=>{f(c)},w=()=>{f(null)};return l?t.jsxs("div",{children:["Error: ",l]}):t.jsx("div",{children:t.jsxs(_,{children:[i.map(c=>t.jsx(N,{car:c,onHeartClick:()=>a(c.id),isFavorite:n.includes(c.id),onLearnMoreClick:b},c.id)),p&&t.jsx(U,{isOpen:!!p,onClose:w,carDetails:p})]})})};function F(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(e)}function O(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(e)}const Z=o.div`
  width: 224px;
  position: relative;
  display: inline-block;
`,ee=o.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${r.colors.inputBackground};
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,te=o.input`
  width: 80%;
  outline: none;
  background-color: transparent;
  color: ${r.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,oe=o.label`
  color: ${r.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,ne=o.button`
  background: none;
  width: 20%;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,I=o.span`
  font-size: 20px;
  height: 20px;
  color: ${r.colors.primaryText};
`,re=o.ul`
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
  background-color: ${r.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,se=o.li`
  color: ${({selected:e})=>e?r.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${r.colors.inputBackground};
  }
`,ie=()=>{const[e,i]=s.useState([]),[l,g]=s.useState(null),[n,p]=s.useState(""),[f,u]=s.useState([]),[x,a]=s.useState(!1),b=j(),w=s.useRef(null);s.useEffect(()=>{(async()=>{try{const C=await(await fetch("/car_rental_project/makes.json")).text(),P=JSON.parse(C);i(P)}catch(m){console.error("Error",m)}})()},[]),s.useEffect(()=>{const d=m=>{w.current&&!w.current.contains(m.target)&&a(!1)};return x&&document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[x]);const c=d=>{g(d),p(d.charAt(0).toUpperCase()+d.slice(1)),a(!1),u(e),b(k(d))},v=d=>{const m=d.target.value.trim().toLowerCase();p(m),a(!0),u(e.filter(C=>C.toLowerCase().includes(m.toLowerCase()))),console.log(m)},y=()=>{a(!x),u(e)};return t.jsxs(Z,{ref:w,children:[t.jsx(oe,{htmlFor:"carMakes",children:"Car Brand:"}),t.jsxs(ee,{children:[t.jsx(te,{id:"carMakes",value:n,onChange:v,placeholder:"Enter the text"}),t.jsx(ne,{onClick:y,children:x?t.jsx(I,{children:t.jsx(O,{})}):t.jsx(I,{children:t.jsx(F,{})})})]}),x&&t.jsx(re,{children:f.map((d,m)=>t.jsx(se,{selected:l===d,onClick:()=>c(d),children:d.charAt(0).toUpperCase()+d.slice(1)},m))})]})},ae=o.div`
  width: 125px;
  position: relative;
  display: inline-block;
`,le=o.div`
  width: 100%;
  border-radius: 14px;
  background-color: ${r.colors.inputBackground};
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,ce=o.label`
  color: ${r.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,de=o.button`
  background: none;
  width: 20%;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,$=o.span`
  font-size: 20px;
  height: 20px;
  color: ${r.colors.primaryText};
`,pe=o.ul`
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
  background-color: ${r.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,xe=o.li`
  color: ${({selected:e})=>e?r.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${r.colors.inputBackground};
  }
`,ue=()=>{const[e,i]=s.useState(null),[l,g]=s.useState([]),[n,p]=s.useState(!1);j();const f=s.useRef(null);s.useEffect(()=>{const a=Array.from({length:20},(b,w)=>(w+1)*10);g(a)},[]),s.useEffect(()=>{const a=b=>{f.current&&!f.current.contains(b.target)&&p(!1)};return n&&document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[n]);const u=a=>{i(a),p(!1)},x=()=>{p(!n)};return t.jsxs(ae,{ref:f,children:[t.jsx(ce,{children:"Price/ 1hour"}),t.jsxs(le,{children:[t.jsxs("p",{children:["To ",e,"$"]}),t.jsx(de,{onClick:x,children:n?t.jsx($,{children:t.jsx(O,{})}):t.jsx($,{children:t.jsx(F,{})})})]}),n&&t.jsx(pe,{children:l.map((a,b)=>t.jsx(xe,{selected:e===a,onClick:()=>u(a),children:a},b))})]})},ge=o.div`
  display: flex;
  flex-direction: column;
`,he=o.div`
  width: 320px;
  border-radius: 14px;
  background-color: ${r.colors.inputBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,D=o.div`
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
    border-right: 1px solid ${r.colors.additionalGray};
  }

  span {
    display: inline-block;
    margin-right: 4px;
  }
`,M=o.input`
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${r.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,fe=o.label`
  color: ${r.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,me=()=>{const[e,i]=s.useState(""),[l,g]=s.useState(""),n=u=>u.replace(/\B(?=(\d{3})+(?!\d))/g,","),p=u=>{const x=u.target.value.replace(/\D/g,"");i(n(x))},f=u=>{const x=u.target.value.replace(/\D/g,"");g(n(x))};return t.jsxs(ge,{children:[t.jsx(fe,{htmlFor:"mileageFrom",children:"Car mileage / km:"}),t.jsxs(he,{children:[t.jsxs(D,{children:[t.jsx("span",{children:"From"}),t.jsx(M,{id:"mileageFrom",type:"text",value:e,onChange:p})]}),t.jsxs(D,{children:[t.jsx("span",{children:"To"}),t.jsx(M,{type:"text",value:l,onChange:f})]})]})]})},be=o.section`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,we=()=>{const e=j(),i=h(E),l=h(X),g=async()=>{if(i.trim()==="")return;e(A()),e(k(i));const n={page:1,limit:12};(i||l)&&(n.make=i,n.price=l),await e(G(n))};return t.jsxs(be,{children:[t.jsx(ie,{}),t.jsx(ue,{}),t.jsx(me,{}),t.jsx(W,{buttonTitle:"Search",padding:"14px",width:"136px",onClick:g})]})},je=o.button`
  max-width: 100px;
  color: ${r.colors.primaryBlue};
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  background-color: inherit;
  transition: ${r.transitions.default};
  &:hover {
    color: ${r.colors.secondaryBlue};
  }
`,ye=({onLoadMore:e})=>{const i=j(),l=()=>{i(J()),e()};return t.jsx(je,{onClick:l,children:"Load more"})},Ce=o.div`
  max-width: 1213px;
  padding-inline: 15px;
  margin: auto;
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Ie=()=>{const e=j(),i=h(Q),l=h(K),g=h(T),n=h(z),p=async()=>{e(L({page:l+1,limit:n,append:!0}))};return t.jsxs(Ce,{children:[t.jsx(we,{}),t.jsx(Y,{}),i>=n&&!g&&t.jsx(ye,{onLoadMore:p})]})};export{Ie as default};
