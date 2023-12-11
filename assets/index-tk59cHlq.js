import{s as l,u,a,b as x,r as o,c,i as C,j as t,d as g}from"./index-mQdeu8ZK.js";import{s as S,i as h,j,k as v}from"./selectors-kOZqXQ8G.js";import"./MainButton-RxtSfQk1.js";const I=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  margin-bottom: 100px;
`,E=()=>{const s=u(),d=a(S),r=a(h),n=a(j),i=a(x);o.useRef(!1),o.useEffect(()=>{const e=localStorage.getItem("favoriteCarIds");e&&JSON.parse(e).forEach(m=>{s(c(m))}),s(C())},[s,n]);const p=e=>{i.includes(e)?s(g(e)):s(c(e))},f=d.filter(e=>i.includes(e.id));return r?t.jsxs("div",{children:["Error: ",r]}):t.jsx(I,{children:f.map(e=>t.jsx(v,{car:e,isFavorite:!0,onHeartClick:()=>p(e.id)},e.id))})},y=l.section`
  max-width: 1213px;
  padding-inline: 15px;
  margin: auto;
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,H=()=>t.jsx(y,{children:t.jsx(E,{})});export{H as default};
