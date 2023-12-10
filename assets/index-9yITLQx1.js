import{s as i,j as e,r as c,u as L,a as f,b as R,c as U,d as M,f as O,R as m,n as H,e as W,g as J,h as Y}from"./index-FQugo6jn.js";const a={colors:{primaryText:"#121417",secondaryText:"rgba(18, 20, 23, 0.50)",labelText:"#8A8A89",primaryBlue:"#3470FF",secondaryBlue:"#0B44CD",bodyMain:"#fff",secondaryBackground:"#F9F9F9",inputBackground:"#F7F7FB"},transitions:{default:"0.3s ease-in-out"}},G=i.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: ${a.transitions.default};
  &:hover {
    stroke: ${a.colors.primaryBlue};
  }
`,Z=({stroke:t,fill:o,onClick:n})=>e.jsx(G,{viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",onClick:n,fill:o,stroke:t,children:e.jsx("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),q=i.button`
  width: ${t=>t.width};
  color: ${a.colors.bodyMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${a.colors.primaryBlue};
  border-radius: 12px;
  padding-block: ${t=>t.padding||"12px"};
  transition: ${a.transitions.default};
  &:hover {
    background-color: ${a.colors.secondaryBlue};
  }
`,z=({buttonTitle:t,padding:o,width:n})=>e.jsx(q,{padding:o,width:n,children:t}),K=i.article`
  width: 274px;
  align-items: stretch;

  position: relative;
`,Q=i.div`
  display: flex;
  color: ${a.colors.primaryText};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  white-space: pre;

  span:nth-child(3) {
    margin-left: auto;
  }
`,V=i.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${a.colors.primaryBlue};
  }
`,X=i.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`,tt=i.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  list-style: none;
`,et=i.li`
  color: ${a.colors.secondaryText};
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
`,nt=({details:t})=>e.jsx(tt,{children:t.map((o,n)=>e.jsx(et,{children:e.jsx("p",{children:o})},n))}),ot=({car:t})=>{const{address:o,img:n,make:r,model:s,rentalCompany:d,rentalPrice:g,year:x,type:p,mileage:y,functionalities:w}=t,v=w.reduce((B,I)=>{const E=I.length>30?`${I.substring(0,30)}...`:I;return E.length<B.length?E:B},w[0]),j=o.split(", "),k=j[1],l=j[2],u=[k,l,d,p,s,y,v],[C,S]=c.useState(!1),_=C?"/car_rental_project/defaultCarImage.jpg":n,[b,A]=c.useState(localStorage.getItem("favoriteCarId")===t.id.toString()),N=()=>{A(!b)};return c.useEffect(()=>{b?localStorage.setItem("favoriteCarId",t.id.toString()):localStorage.removeItem("favoriteCarId")},[b,t.id]),e.jsxs(K,{children:[e.jsx(X,{src:_,alt:"Car picture",onError:()=>S(!0)}),e.jsxs(Q,{children:[e.jsxs(V,{children:[r,e.jsxs("span",{children:[" ",s,","]})]}),e.jsxs("span",{children:[" ",x]}),e.jsx("span",{children:g})]}),e.jsx(nt,{details:u}),e.jsx(z,{buttonTitle:"Learn more",width:"100%"}),e.jsx(Z,{fill:b?a.colors.primaryBlue:"none",stroke:b?"none":a.colors.bodyMain,onClick:N})]})},rt=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  margin-bottom: 100px;
`,st=()=>{const t=L(),o=f(R),n=f(U),r=f(M),s=c.useRef(!1);return c.useEffect(()=>{s.current?t(O({page:1,limit:r})):s.current=!0},[t,r]),n?e.jsxs("div",{children:["Error: ",n]}):e.jsx(rt,{children:o.map(d=>e.jsx(ot,{car:d},d.id))})};var T={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$=m.createContext&&m.createContext(T),h=function(){return h=Object.assign||function(t){for(var o,n=1,r=arguments.length;n<r;n++){o=arguments[n];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},h.apply(this,arguments)},at=function(t,o){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)o.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};function F(t){return t&&t.map(function(o,n){return m.createElement(o.tag,h({key:n},o.attr),F(o.child))})}function P(t){return function(o){return m.createElement(it,h({attr:h({},t.attr)},o),F(t.child))}}function it(t){var o=function(n){var r=t.attr,s=t.size,d=t.title,g=at(t,["attr","size","title"]),x=s||n.size||"1em",p;return n.className&&(p=n.className),t.className&&(p=(p?p+" ":"")+t.className),m.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,g,{className:p,style:h(h({color:t.color||n.color},n.style),t.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),d&&m.createElement("title",null,d),t.children)};return $!==void 0?m.createElement($.Consumer,null,function(n){return o(n)}):o(T)}function lt(t){return P({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(t)}function ct(t){return P({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(t)}const dt=i.div`
  width: 224px;
  position: relative;
  display: inline-block;
`,pt=i.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${a.colors.inputBackground};
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ut=i.input`
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
`,xt=i.label`
  color: ${a.colors.labelText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 8px;
`,ht=i.button`
  background: none;
  width: 20px;
  height: 20px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
`,D=i.span`
  font-size: 20px;
  color: ${a.colors.primaryText};
`,gt=i.ul`
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
`,ft=i.li`
  color: ${({selected:t})=>t?a.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${a.colors.inputBackground};
  }
`,mt=()=>{const[t,o]=c.useState([]),[n,r]=c.useState(null),[s,d]=c.useState(""),[g,x]=c.useState([]),[p,y]=c.useState(!1),w=c.useRef(null);c.useEffect(()=>{(async()=>{try{const C=await(await fetch("/car_rental_project/makes.json")).text(),S=JSON.parse(C);o(S)}catch(u){console.error("Error",u)}})()},[]),c.useEffect(()=>{const l=u=>{w.current&&!w.current.contains(u.target)&&y(!1)};return p&&document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[p]);const v=l=>{r(l),d(l.charAt(0).toUpperCase()+l.slice(1)),y(!1),x(t)},j=l=>{const u=l.target.value.trim().toLowerCase();d(u),y(!0),x(t.filter(C=>C.toLowerCase().includes(u.toLowerCase())))},k=()=>{y(!p),x(t)};return e.jsxs(dt,{ref:w,children:[e.jsx(xt,{htmlFor:"carMakes",children:"Car Brand:"}),e.jsxs(pt,{children:[e.jsx(ut,{id:"carMakes",value:s,onChange:j,placeholder:"Enter the text"}),e.jsx(ht,{onClick:k,children:p?e.jsx(D,{children:e.jsx(ct,{})}):e.jsx(D,{children:e.jsx(lt,{})})})]}),p&&e.jsx(gt,{children:g.map((l,u)=>e.jsx(ft,{selected:n===l,onClick:()=>v(l),children:l.charAt(0).toUpperCase()+l.slice(1)},u))})]})},yt=i.section`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-block: 50px;
`,wt=()=>e.jsxs(yt,{children:[e.jsx(mt,{}),e.jsx(z,{buttonTitle:"Search",padding:"14px",width:"136px"})]}),Ct=i.button`
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
`,bt=({onLoadMore:t})=>{const o=L(),n=()=>{o(H()),t()};return e.jsx(Ct,{onClick:n,children:"Load more"})},jt=i.div`
  max-width: 1213px;
  padding-inline: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,kt=()=>{const t=L(),o=f(W),n=f(J),r=f(Y),s=f(M),[d,g]=c.useState(0);c.useEffect(()=>{window.scrollTo(0,d)},[o,d]);const x=async()=>{g(window.scrollY),t(O({page:n+1,limit:s,append:!0}))};return e.jsxs(jt,{children:[e.jsx(wt,{}),e.jsx(st,{}),o>=s&&!r&&e.jsx(bt,{onLoadMore:x})]})};export{kt as default};
