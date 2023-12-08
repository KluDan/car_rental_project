import{s as a,R as x,r as h,j as s}from"./index-6VV1OdW7.js";const n={colors:{primaryText:"#121417",secondaryText:"rgba(18, 20, 23, 0.50)",labelText:"#8A8A89",primaryBlue:"#3470FF",secondaryBlue:"#0B44CD",bodyMain:"#fff",secondaryBackground:"#F9F9F9",inputBackground:"#F7F7FB"},transitions:{default:"0.3s ease-in-out"}};a.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke: ${n.colors.bodyMain};
  cursor: pointer;
  transition: ${n.transitions.default};
  &:hover {
    stroke: ${n.colors.primaryBlue};
  }
`;a.button`
  width: 100%;
  color: ${n.colors.bodyMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${n.colors.primaryBlue};
  border: none;
  border-radius: 12px;
  padding-block: ${t=>t.padding||"12px"};
  cursor: pointer;
  transition: ${n.transitions.default};
  &:hover {
    background-color: ${n.colors.secondaryBlue};
  }
`;a.article`
  width: 274px;
  align-items: stretch;

  position: relative;
`;a.div`
  display: flex;
  color: ${n.colors.primaryText};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  white-space: pre;

  span:nth-child(3) {
    margin-left: auto;
  }
`;a.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${n.colors.primaryBlue};
  }
`;a.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`;a.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  list-style: none;
`;a.li`
  color: ${n.colors.secondaryText};
  font-size: 12px;
  line-height: 18px;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
    height: 16px;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
`;var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=x.createContext&&x.createContext(v),p=function(){return p=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++){r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},p.apply(this,arguments)},$=function(t,r){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)r.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(e[o[i]]=t[o[i]]);return e};function j(t){return t&&t.map(function(r,e){return x.createElement(r.tag,p({key:e},r.attr),j(r.child))})}function k(t){return function(r){return x.createElement(B,p({attr:p({},t.attr)},r),j(t.child))}}function B(t){var r=function(e){var o=t.attr,i=t.size,g=t.title,f=$(t,["attr","size","title"]),d=i||e.size||"1em",c;return e.className&&(c=e.className),t.className&&(c=(c?c+" ":"")+t.className),x.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,f,{className:c,style:p(p({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),g&&x.createElement("title",null,g),t.children)};return w!==void 0?x.createElement(w.Consumer,null,function(e){return r(e)}):r(v)}function z(t){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(t)}function E(t){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(t)}const T=a.div`
  width: 224px;
  position: relative;
  display: inline-block;
`,S=a.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${n.colors.inputBackground};
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,_=a.input`
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
`,F=a.button`
  background: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`,y=a.span`
  font-size: 20px;
  color: ${n.colors.primaryText};
`,L=a.ul`
  width: 100%;
  height: 272px;
  overflow: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 14px 8px 14px 18px;
  list-style: none;
  background-color: ${n.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,M=a.li`
  color: ${({selected:t})=>t?n.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${n.colors.inputBackground};
  }
`,N=()=>{const[t,r]=h.useState([]),[e,o]=h.useState(null),[i,g]=h.useState(""),[f,d]=h.useState([]),[c,m]=h.useState(!1);h.useEffect(()=>{(async()=>{try{const b=await(await fetch("/car_rental_project/makes.json")).text(),I=JSON.parse(b);r(I)}catch(u){console.error("Error",u)}})()},[]);const C=l=>{o(l),g(l.charAt(0).toUpperCase()+l.slice(1)),m(!1),d(t)},O=l=>{const u=l.target.value.trim().toLowerCase();g(u),m(!0),d(t.filter(b=>b.toLowerCase().includes(u.toLowerCase()))),d(filtered.length>0?filtered:t)},D=()=>{m(!c),d(t)};return s.jsxs(T,{children:[s.jsxs(S,{children:[s.jsx(_,{value:i,onChange:O,placeholder:"Enter the text"}),s.jsx(F,{onClick:D,children:c?s.jsx(y,{children:s.jsx(E,{})}):s.jsx(y,{children:s.jsx(z,{})})})]}),c&&s.jsx(L,{children:f.map((l,u)=>s.jsx(M,{selected:e===l,onClick:()=>C(l),children:l.charAt(0).toUpperCase()+l.slice(1)},u))})]})},P=()=>s.jsxs("div",{children:[s.jsx("h1",{children:"Home"}),s.jsx(N,{})]});export{P as default};
