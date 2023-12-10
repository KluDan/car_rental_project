import{s as c,j as e,r as u,u as I,a as f,b as U,f as O,c as E,d as J,R as y,n as W}from"./index-ieNqRdkD.js";const i={colors:{primaryText:"#121417",secondaryText:"rgba(18, 20, 23, 0.50)",labelText:"#8A8A89",primaryBlue:"#3470FF",secondaryBlue:"#0B44CD",bodyMain:"#fff",secondaryBackground:"#F9F9F9",inputBackground:"#F7F7FB"},transitions:{default:"0.3s ease-in-out"}},Y=c.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: ${i.transitions.default};
  &:hover {
    stroke: ${i.colors.primaryBlue};
  }
`,G=({stroke:t,fill:r,onClick:n})=>e.jsx(Y,{viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",onClick:n,fill:r,stroke:t,children:e.jsx("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Z=c.button`
  width: ${t=>t.width};
  color: ${i.colors.bodyMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${i.colors.primaryBlue};
  border-radius: 12px;
  padding-block: ${t=>t.padding||"12px"};
  transition: ${i.transitions.default};
  &:hover {
    background-color: ${i.colors.secondaryBlue};
  }
`,M=({buttonTitle:t,padding:r,width:n})=>e.jsx(Z,{padding:r,width:n,children:t}),q=c.article`
  width: 274px;
  align-items: stretch;

  position: relative;
`,K=c.div`
  display: flex;
  color: ${i.colors.primaryText};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  white-space: pre;

  span:nth-child(3) {
    margin-left: auto;
  }
`,Q=c.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${i.colors.primaryBlue};
  }
`,V=c.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`,X=c.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  list-style: none;
`,tt=c.li`
  color: ${i.colors.secondaryText};
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
`,et=({details:t})=>e.jsx(X,{children:t.map((r,n)=>e.jsx(tt,{children:e.jsx("p",{children:r})},n))}),nt=({car:t,onHeartClick:r,isFavorite:n})=>{const{id:o,address:a,img:p,make:h,model:s,rentalCompany:d,rentalPrice:g,year:C,type:j,mileage:v,functionalities:b}=t,l=b.reduce((L,S)=>{const B=S.length>30?`${S.substring(0,30)}...`:S;return B.length<L.length?B:L},b[0]),x=a.split(", "),w=x[1],k=x[2],_=[w,k,d,j,s,v,l],[N,R]=u.useState(!1),A=N?"/car_rental_project/defaultCarImage.jpg":p,H=()=>{r(o)};return e.jsxs(q,{children:[e.jsx(V,{src:A,alt:"Car picture",onError:()=>R(!0)}),e.jsxs(K,{children:[e.jsxs(Q,{children:[h,e.jsxs("span",{children:[" ",s,","]})]}),e.jsxs("span",{children:[" ",C]}),e.jsx("span",{children:g})]}),e.jsx(et,{details:_}),e.jsx(M,{buttonTitle:"Learn more",width:"100%"}),e.jsx(G,{fill:n?i.colors.primaryBlue:"none",stroke:n?"none":i.colors.bodyMain,onClick:H})]})},rt=c.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  margin-bottom: 100px;
`,ot=t=>t.cars.cars,st=t=>t.cars.isLoading,at=t=>t.cars.error,it=t=>t.cars.currentPage,z=t=>t.cars.limit,ct=t=>t.cars.totalResults,lt=()=>{const t=I(),r=f(ot),n=f(at),o=f(z),a=f(U),p=u.useRef(!1);u.useEffect(()=>{if(p.current)t(O({page:1,limit:o}));else{p.current=!0;const s=localStorage.getItem("favoriteCarIds");s&&JSON.parse(s).forEach(g=>{t(E(g))})}},[t,o]);const h=s=>{a.includes(s)?t(J(s)):t(E(s))};return n?e.jsxs("div",{children:["Error: ",n]}):e.jsx(rt,{children:r.map(s=>e.jsx(nt,{car:s,onHeartClick:()=>h(s.id),isFavorite:a.includes(s.id)},s.id))})};var T={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$=y.createContext&&y.createContext(T),m=function(){return m=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},m.apply(this,arguments)},dt=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};function P(t){return t&&t.map(function(r,n){return y.createElement(r.tag,m({key:n},r.attr),P(r.child))})}function F(t){return function(r){return y.createElement(pt,m({attr:m({},t.attr)},r),P(t.child))}}function pt(t){var r=function(n){var o=t.attr,a=t.size,p=t.title,h=dt(t,["attr","size","title"]),s=a||n.size||"1em",d;return n.className&&(d=n.className),t.className&&(d=(d?d+" ":"")+t.className),y.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,h,{className:d,style:m(m({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),p&&y.createElement("title",null,p),t.children)};return $!==void 0?y.createElement($.Consumer,null,function(n){return r(n)}):r(T)}function ut(t){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(t)}function xt(t){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(t)}const ht=c.div`
  width: 224px;
  position: relative;
  display: inline-block;
`,gt=c.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${i.colors.inputBackground};
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ft=c.input`
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${i.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`,mt=c.label`
  color: ${i.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,yt=c.button`
  background: none;
  width: 20px;
  height: 20px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,D=c.span`
  font-size: 20px;
  color: ${i.colors.primaryText};
`,Ct=c.ul`
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
  background-color: ${i.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`,wt=c.li`
  color: ${({selected:t})=>t?i.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${i.colors.inputBackground};
  }
`,bt=()=>{const[t,r]=u.useState([]),[n,o]=u.useState(null),[a,p]=u.useState(""),[h,s]=u.useState([]),[d,g]=u.useState(!1),C=u.useRef(null);u.useEffect(()=>{(async()=>{try{const w=await(await fetch("/car_rental_project/makes.json")).text(),k=JSON.parse(w);r(k)}catch(x){console.error("Error",x)}})()},[]),u.useEffect(()=>{const l=x=>{C.current&&!C.current.contains(x.target)&&g(!1)};return d&&document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[d]);const j=l=>{o(l),p(l.charAt(0).toUpperCase()+l.slice(1)),g(!1),s(t)},v=l=>{const x=l.target.value.trim().toLowerCase();p(x),g(!0),s(t.filter(w=>w.toLowerCase().includes(x.toLowerCase())))},b=()=>{g(!d),s(t)};return e.jsxs(ht,{ref:C,children:[e.jsx(mt,{htmlFor:"carMakes",children:"Car Brand:"}),e.jsxs(gt,{children:[e.jsx(ft,{id:"carMakes",value:a,onChange:v,placeholder:"Enter the text"}),e.jsx(yt,{onClick:b,children:d?e.jsx(D,{children:e.jsx(xt,{})}):e.jsx(D,{children:e.jsx(ut,{})})})]}),d&&e.jsx(Ct,{children:h.map((l,x)=>e.jsx(wt,{selected:n===l,onClick:()=>j(l),children:l.charAt(0).toUpperCase()+l.slice(1)},x))})]})},jt=c.section`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-block: 50px;
`,vt=()=>e.jsxs(jt,{children:[e.jsx(bt,{}),e.jsx(M,{buttonTitle:"Search",padding:"14px",width:"136px"})]}),kt=c.button`
  max-width: 100px;
  color: ${i.colors.primaryBlue};
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  background-color: inherit;
  transition: ${i.transitions.default};
  &:hover {
    color: ${i.colors.secondaryBlue};
  }
`,St=({onLoadMore:t})=>{const r=I(),n=()=>{r(W()),t()};return e.jsx(kt,{onClick:n,children:"Load more"})},It=c.div`
  max-width: 1213px;
  padding-inline: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Bt=()=>{const t=I(),r=f(ct),n=f(it),o=f(st),a=f(z),[p,h]=u.useState(0);u.useEffect(()=>{window.scrollTo(0,p)},[r,p]);const s=async()=>{h(window.scrollY),t(O({page:n+1,limit:a,append:!0}))};return e.jsxs(It,{children:[e.jsx(vt,{}),e.jsx(lt,{}),r>=a&&!o&&e.jsx(St,{onLoadMore:s})]})};export{Bt as default};
