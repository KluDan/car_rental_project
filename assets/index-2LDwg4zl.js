import{s as p,u as m,a as t,b as g,r as i,i as x,c as l,j as s,d as S}from"./index-ikUV23pT.js";import{s as h,i as j,j as v,k as I}from"./selectors-y6fgfCe2.js";const E=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  margin-bottom: 100px;
`,k=()=>{const r=m(),d=t(h),a=t(j),n=t(v),o=t(g),c=i.useRef(!1);i.useEffect(()=>{if(c.current)r(x());else{c.current=!0;const e=localStorage.getItem("favoriteCarIds");e&&JSON.parse(e).forEach(f=>{r(l(f))})}},[r,n]);const u=e=>{o.includes(e)?r(S(e)):r(l(e))},C=d.filter(e=>o.includes(e.id));return a?s.jsxs("div",{children:["Error: ",a]}):s.jsx(E,{children:C.map(e=>s.jsx(I,{car:e,isFavorite:!0,onHeartClick:()=>u(e.id)},e.id))})},H=()=>s.jsx(s.Fragment,{children:s.jsx(k,{})});export{H as default};
