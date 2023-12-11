import{s as o,u as j,a as m,b as R,r as n,f as M,c as v,j as e,d as P,G as L,t as s,e as B,g as A,h as V,n as G}from"./index-R7VkdSfV.js";import{C as J,a as N}from"./CarDetailsModal-D_0NRbWA.js";import{M as U}from"./MainButton-zNh59rPe.js";const W=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  align-content: start;
  margin-bottom: 100px;
`,_=t=>t.cars.cars,T=t=>t.cars.isLoading,H=t=>t.cars.error,q=t=>t.cars.currentPage,z=t=>t.cars.limit,K=t=>t.cars.totalResults,Q=t=>t.cars.inputValue,X=()=>{const t=j(),a=m(_),d=m(H),u=m(z),l=m(R);m(T);const[p,f]=n.useState(null),[x,g]=n.useState([]),r=n.useRef(!1);n.useEffect(()=>{if(!a.length&&r.current)t(M({page:1,limit:u}));else{r.current=!0;const i=localStorage.getItem("favoriteCarIds");i&&JSON.parse(i).forEach(h=>{t(v(h))})}},[t,a.length,u]);const b=i=>{l.includes(i)?t(P(i)):t(v(i))},w=i=>{f(i)},C=()=>{f(null)},y=a.filter(i=>x.length===0?!0:x.includes(i.make));return d?e.jsxs("div",{children:["Error: ",d]}):e.jsx("div",{children:e.jsxs(W,{children:[y.map(i=>e.jsx(J,{car:i,onHeartClick:()=>b(i.id),isFavorite:l.includes(i.id),onLearnMoreClick:w},i.id)),p&&e.jsx(N,{isOpen:!!p,onClose:C,carDetails:p})]})})};function E(t){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(t)}function F(t){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(t)}const Y=o.div`
  width: 224px;
  position: relative;
  display: inline-block;
`,Z=o.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${s.colors.inputBackground};
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ee=o.input`
  width: 80%;
  outline: none;
  background-color: transparent;
  color: ${s.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,te=o.label`
  color: ${s.colors.labelText};
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
`,S=o.span`
  font-size: 20px;
  height: 20px;
  color: ${s.colors.primaryText};
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
  background-color: ${s.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,se=o.li`
  color: ${({selected:t})=>t?s.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${s.colors.inputBackground};
  }
`,re=()=>{const[t,a]=n.useState([]),[d,u]=n.useState(null),[l,p]=n.useState(""),[f,x]=n.useState([]),[g,r]=n.useState(!1),b=j(),w=n.useRef(null);n.useEffect(()=>{(async()=>{try{const k=await(await fetch("/car_rental_project/makes.json")).text(),O=JSON.parse(k);a(O)}catch(h){console.error("Error",h)}})()},[]),n.useEffect(()=>{const c=h=>{w.current&&!w.current.contains(h.target)&&r(!1)};return g&&document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[g]);const C=c=>{u(c),p(c.charAt(0).toUpperCase()+c.slice(1)),r(!1),x(t),b(B(c))},y=c=>{const h=c.target.value.trim().toLowerCase();p(h),r(!0),x(t.filter(k=>k.toLowerCase().includes(h.toLowerCase()))),console.log(h)},i=()=>{r(!g),x(t)};return e.jsxs(Y,{ref:w,children:[e.jsx(te,{htmlFor:"carMakes",children:"Car Brand:"}),e.jsxs(Z,{children:[e.jsx(ee,{id:"carMakes",value:l,onChange:y,placeholder:"Enter the text"}),e.jsx(oe,{onClick:i,children:g?e.jsx(S,{children:e.jsx(F,{})}):e.jsx(S,{children:e.jsx(E,{})})})]}),g&&e.jsx(ne,{children:f.map((c,h)=>e.jsx(se,{selected:d===c,onClick:()=>C(c),children:c.charAt(0).toUpperCase()+c.slice(1)},h))})]})},ae=o.div`
  width: 125px;
  position: relative;
  display: inline-block;
`,ie=o.div`
  width: 100%;
  border-radius: 14px;
  background-color: ${s.colors.inputBackground};
  padding: 9px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,le=o.label`
  color: ${s.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,ce=o.button`
  background: none;
  width: 20%;

  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,I=o.span`
  font-size: 20px;
  height: 20px;
  color: ${s.colors.primaryText};
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
  background-color: ${s.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,pe=o.li`
  color: ${({selected:t})=>t?s.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${s.colors.inputBackground};
  }
`,xe=()=>{const[t,a]=n.useState(null),[d,u]=n.useState([]),[l,p]=n.useState(!1);j();const f=n.useRef(null);n.useEffect(()=>{const r=Array.from({length:20},(b,w)=>(w+1)*10);u(r)},[]),n.useEffect(()=>{const r=b=>{f.current&&!f.current.contains(b.target)&&p(!1)};return l&&document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[l]);const x=r=>{a(r),p(!1)},g=()=>{p(!l)};return e.jsxs(ae,{ref:f,children:[e.jsx(le,{children:"Price/ 1hour"}),e.jsxs(ie,{children:[e.jsxs("p",{children:["To ",t,"$"]}),e.jsx(ce,{onClick:g,children:l?e.jsx(I,{children:e.jsx(F,{})}):e.jsx(I,{children:e.jsx(E,{})})})]}),l&&e.jsx(de,{children:d.map((r,b)=>e.jsx(pe,{selected:t===r,onClick:()=>x(r),children:r},b))})]})},ue=o.div`
  display: flex;
  flex-direction: column;
`,ge=o.div`
  width: 320px;
  border-radius: 14px;
  background-color: ${s.colors.inputBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$=o.div`
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
    border-right: 1px solid ${s.colors.additionalGray};
  }

  span {
    display: inline-block;
    margin-right: 4px;
  }
`,D=o.input`
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${s.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,he=o.label`
  color: ${s.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,fe=()=>{const[t,a]=n.useState(""),[d,u]=n.useState(""),l=x=>x.replace(/\B(?=(\d{3})+(?!\d))/g,","),p=x=>{const g=x.target.value.replace(/\D/g,"");a(l(g))},f=x=>{const g=x.target.value.replace(/\D/g,"");u(l(g))};return e.jsxs(ue,{children:[e.jsx(he,{htmlFor:"mileageFrom",children:"Car mileage / km:"}),e.jsxs(ge,{children:[e.jsxs($,{children:[e.jsx("span",{children:"From"}),e.jsx(D,{id:"mileageFrom",type:"text",value:t,onChange:p})]}),e.jsxs($,{children:[e.jsx("span",{children:"To"}),e.jsx(D,{type:"text",value:d,onChange:f})]})]})]})},me=o.section`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
`,be=()=>{const t=j(),a=m(Q),d=async()=>{t(A()),t(B(a));const u={page:1,limit:12};a&&(u.make=a),await t(V(u))};return e.jsxs(me,{children:[e.jsx(re,{}),e.jsx(xe,{}),e.jsx(fe,{}),e.jsx(U,{buttonTitle:"Search",padding:"14px",width:"136px",onClick:d})]})},we=o.button`
  max-width: 100px;
  color: ${s.colors.primaryBlue};
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  background-color: inherit;
  transition: ${s.transitions.default};
  &:hover {
    color: ${s.colors.secondaryBlue};
  }
`,je=({onLoadMore:t})=>{const a=j(),d=()=>{a(G()),t()};return e.jsx(we,{onClick:d,children:"Load more"})},Ce=o.div`
  max-width: 1213px;
  padding-inline: 15px;
  margin: auto;
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Se=()=>{const t=j(),a=m(K),d=m(q),u=m(T),l=m(z),p=async()=>{t(M({page:d+1,limit:l,append:!0}))};return e.jsxs(Ce,{children:[e.jsx(be,{}),e.jsx(X,{}),a>=l&&!u&&e.jsx(je,{onLoadMore:p})]})};export{Se as default};
