import{s as o,u as w,a as m,b as O,r,f as D,c as k,j as e,d as R,G as L,t as n,e as M,g as P,h as A,n as V}from"./index-oLWDv1pN.js";import{C as G,a as J}from"./CarCard-WdIQYowy.js";import{M as N}from"./MainButton-T5YUcmw_.js";const U=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  align-content: start;
  margin-bottom: 100px;
`,W=t=>t.cars.cars,_=t=>t.cars.isLoading,H=t=>t.cars.error,q=t=>t.cars.currentPage,B=t=>t.cars.limit,K=t=>t.cars.totalResults,Q=t=>t.cars.inputValue,X=()=>{const t=w(),a=m(W),d=m(H),u=m(B),c=m(O),[p,h]=r.useState(null),x=r.useRef(!1);r.useEffect(()=>{if(!a.length&&x.current)t(D({page:1,limit:u}));else{x.current=!0;const s=localStorage.getItem("favoriteCarIds");s&&JSON.parse(s).forEach(j=>{t(k(j))})}},[t,a.length,u]);const g=s=>{c.includes(s)?t(R(s)):t(k(s))},i=s=>{h(s)},b=()=>{h(null)};return d?e.jsxs("div",{children:["Error: ",d]}):e.jsxs(U,{children:[a.map(s=>e.jsx(G,{car:s,onHeartClick:()=>g(s.id),isFavorite:c.includes(s.id),onLearnMoreClick:i},s.id)),p&&e.jsx(J,{isOpen:!!p,onClose:b,carDetails:p})]})};function T(t){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(t)}function z(t){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(t)}const Y=o.div`
  width: 224px;
  position: relative;
  display: inline-block;
`,Z=o.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${n.colors.inputBackground};
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ee=o.input`
  width: 80%;
  outline: none;
  background-color: transparent;
  color: ${n.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,te=o.label`
  color: ${n.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,oe=o.button`
  background: none;
  width: 20%;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,v=o.span`
  font-size: 20px;
  height: 20px;
  color: ${n.colors.primaryText};
`,ne=o.ul`
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
  background-color: ${n.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,se=o.li`
  color: ${({selected:t})=>t?n.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${n.colors.inputBackground};
  }
`,re=()=>{const[t,a]=r.useState([]),[d,u]=r.useState(null),[c,p]=r.useState(""),[h,x]=r.useState([]),[g,i]=r.useState(!1),b=w(),s=r.useRef(null);r.useEffect(()=>{(async()=>{try{const C=await(await fetch("/car_rental_project/makes.json")).text(),F=JSON.parse(C);a(F)}catch(f){console.error("Error",f)}})()},[]),r.useEffect(()=>{const l=f=>{s.current&&!s.current.contains(f.target)&&i(!1)};return g&&document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[g]);const y=l=>{u(l),p(l.charAt(0).toUpperCase()+l.slice(1)),i(!1),x(t),b(M(l))},j=l=>{const f=l.target.value.trim().toLowerCase();p(f),i(!0),x(t.filter(C=>C.toLowerCase().includes(f.toLowerCase()))),console.log(f)},E=()=>{i(!g),x(t)};return e.jsxs(Y,{ref:s,children:[e.jsx(te,{htmlFor:"carMakes",children:"Car Brand:"}),e.jsxs(Z,{children:[e.jsx(ee,{id:"carMakes",value:c,onChange:j,placeholder:"Enter the text"}),e.jsx(oe,{onClick:E,children:g?e.jsx(v,{children:e.jsx(z,{})}):e.jsx(v,{children:e.jsx(T,{})})})]}),g&&e.jsx(ne,{children:h.map((l,f)=>e.jsx(se,{selected:d===l,onClick:()=>y(l),children:l.charAt(0).toUpperCase()+l.slice(1)},f))})]})},ae=o.div`
  width: 125px;
  position: relative;
  display: inline-block;
`,ie=o.div`
  width: 100%;
  border-radius: 14px;
  background-color: ${n.colors.inputBackground};
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,ce=o.label`
  color: ${n.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,le=o.button`
  background: none;
  width: 20%;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,S=o.span`
  font-size: 20px;
  height: 20px;
  color: ${n.colors.primaryText};
`,de=o.ul`
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
  background-color: ${n.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,pe=o.li`
  color: ${({selected:t})=>t?n.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${n.colors.inputBackground};
  }
`,xe=()=>{const[t,a]=r.useState(null),[d,u]=r.useState([]),[c,p]=r.useState(!1);w();const h=r.useRef(null);r.useEffect(()=>{const i=Array.from({length:20},(b,s)=>(s+1)*10);u(i)},[]),r.useEffect(()=>{const i=b=>{h.current&&!h.current.contains(b.target)&&p(!1)};return c&&document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}},[c]);const x=i=>{a(i),p(!1)},g=()=>{p(!c)};return e.jsxs(ae,{ref:h,children:[e.jsx(ce,{children:"Price/ 1hour"}),e.jsxs(ie,{children:[e.jsxs("p",{children:["To ",t,"$"]}),e.jsx(le,{onClick:g,children:c?e.jsx(S,{children:e.jsx(z,{})}):e.jsx(S,{children:e.jsx(T,{})})})]}),c&&e.jsx(de,{children:d.map((i,b)=>e.jsx(pe,{selected:t===i,onClick:()=>x(i),children:i},b))})]})},ue=o.div`
  display: flex;
  flex-direction: column;
`,ge=o.div`
  width: 320px;
  border-radius: 14px;
  background-color: ${n.colors.inputBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,I=o.div`
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
    border-right: 1px solid ${n.colors.additionalGray};
  }

  span {
    display: inline-block;
    margin-right: 4px;
  }
`,$=o.input`
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${n.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,he=o.label`
  color: ${n.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,fe=()=>{const[t,a]=r.useState(""),[d,u]=r.useState(""),c=x=>x.replace(/\B(?=(\d{3})+(?!\d))/g,","),p=x=>{const g=x.target.value.replace(/\D/g,"");a(c(g))},h=x=>{const g=x.target.value.replace(/\D/g,"");u(c(g))};return e.jsxs(ue,{children:[e.jsx(he,{htmlFor:"mileageFrom",children:"Car mileage / km:"}),e.jsxs(ge,{children:[e.jsxs(I,{children:[e.jsx("span",{children:"From"}),e.jsx($,{id:"mileageFrom",type:"text",value:t,onChange:p})]}),e.jsxs(I,{children:[e.jsx("span",{children:"To"}),e.jsx($,{type:"text",value:d,onChange:h})]})]})]})},me=o.section`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,be=()=>{const t=w(),a=m(Q),d=()=>{t(P()),t(M(a));const u={page:1,limit:12};a&&(u.make=a),t(A(u))};return e.jsxs(me,{children:[e.jsx(re,{}),e.jsx(xe,{}),e.jsx(fe,{}),e.jsx(N,{buttonTitle:"Search",padding:"14px",width:"136px",onClick:d})]})},we=o.button`
  max-width: 100px;
  color: ${n.colors.primaryBlue};
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  background-color: inherit;
  transition: ${n.transitions.default};
  &:hover {
    color: ${n.colors.secondaryBlue};
  }
`,je=({onLoadMore:t})=>{const a=w(),d=()=>{a(V()),t()};return e.jsx(we,{onClick:d,children:"Load more"})},Ce=o.div`
  max-width: 1213px;
  padding-inline: 15px;
  margin: auto;
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Se=()=>{const t=w(),a=m(K),d=m(q),u=m(_),c=m(B),p=async()=>{t(D({page:d+1,limit:c,append:!0}))};return e.jsxs(Ce,{children:[e.jsx(be,{}),e.jsx(X,{}),a>=c&&!u&&e.jsx(je,{onLoadMore:p})]})};export{Se as default};
