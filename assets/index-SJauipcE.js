import{s as e,j as o,r as l,u as w,n as M,a,b as T,c as E,d as z,e as F,f as P,g as D,h as j}from"./index-NGb_m1my.js";const t={colors:{primaryText:"#121417",secondaryText:"rgba(18, 20, 23, 0.50)",labelText:"#8A8A89",primaryBlue:"#3470FF",secondaryBlue:"#0B44CD",bodyMain:"#fff",secondaryBackground:"#F9F9F9",inputBackground:"#F7F7FB"},transitions:{default:"0.3s ease-in-out"}},I=e.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke: ${t.colors.bodyMain};
  cursor: pointer;
  transition: ${t.transitions.default};
  &:hover {
    stroke: ${t.colors.primaryBlue};
  }
`,H=()=>o.jsx(I,{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),R=e.button`
  width: 100%;
  color: ${t.colors.bodyMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${t.colors.primaryBlue};
  border: none;
  border-radius: 12px;
  padding-block: ${r=>r.padding||"12px"};
  cursor: pointer;
  transition: ${t.transitions.default};
  &:hover {
    background-color: ${t.colors.secondaryBlue};
  }
`,A=({buttonTitle:r,padding:n})=>o.jsx(R,{padding:n,children:r}),Y=e.article`
  width: 274px;
  align-items: stretch;

  position: relative;
`,_=e.div`
  display: flex;
  color: ${t.colors.primaryText};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  white-space: pre;

  span:nth-child(3) {
    margin-left: auto;
  }
`,O=e.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${t.colors.primaryBlue};
  }
`,U=e.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`,W=e.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  list-style: none;
`,Z=e.li`
  color: ${t.colors.secondaryText};
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
`,q=({details:r})=>o.jsx(W,{children:r.map((n,s)=>o.jsx(Z,{children:o.jsx("p",{children:n})},s))}),G=({car:r})=>{const{address:n,img:s,make:c,model:d,rentalCompany:i,rentalPrice:g,year:p,type:h,mileage:f,functionalities:x}=r,u=x.reduce((b,m)=>{const C=m.length>30?`${m.substring(0,30)}...`:m;return C.length<b.length?C:b},x[0]),y=n.split(", "),k=y[1],$=y[2],B=[k,$,i,h,d,f,u],[v,L]=l.useState(!1),S=v?"/car_rental_project/defaultCarImage.jpg":s;return o.jsxs(Y,{children:[o.jsx(U,{src:S,alt:"Car picture",onError:()=>L(!0)}),o.jsxs(_,{children:[o.jsxs(O,{children:[c,o.jsxs("span",{children:[" ",d,","]})]}),o.jsxs("span",{children:[" ",p]}),o.jsx("span",{children:g})]}),o.jsx(q,{details:B}),o.jsx(A,{buttonTitle:"Learn more"}),o.jsx(H,{})]})},J=e.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
`,K=e.button`
  color: ${t.colors.primaryBlue};
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`,N=({onLoadMore:r})=>{const n=w(),s=()=>{n(M()),r()};return o.jsx(K,{onClick:s,children:"Load more"})},Q=()=>{const r=w(),n=a(T),s=a(E),c=a(z),d=a(F),i=a(P),g=a(D),p=l.useRef(!1),[h,f]=l.useState(0),x=async()=>{f(window.scrollY),r(j({page:d+1,limit:i,append:!0}))};return l.useEffect(()=>{window.scrollTo(0,h)},[n]),l.useEffect(()=>{p.current?r(j({page:1,limit:i})):p.current=!0},[r,i]),c?o.jsxs("div",{children:["Error: ",c]}):o.jsxs(J,{children:[n.map(u=>o.jsx(G,{car:u},u.id)),g>=i&&!s&&o.jsx(N,{onLoadMore:x})]})};e.div`
  width: 224px;
  position: relative;
  display: inline-block;
`;e.div`
  width: 224px;
  border-radius: 14px;
  background-color: ${t.colors.inputBackground};
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;e.input`
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${t.colors.primaryText};
  border: none;
  cursor: pointer;
  padding: 0 5px 0 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;e.button`
  background: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;e.span`
  font-size: 20px;
  color: ${t.colors.primaryText};
`;e.ul`
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
  background-color: ${t.colors.bodyMain};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
`;e.li`
  color: ${({selected:r})=>r?t.colors.primary:"rgba(18, 20, 23, 0.2)"};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    background-color: ${t.colors.inputBackground};
  }
`;const X=()=>o.jsxs("div",{children:[o.jsx("h1",{children:"Home"}),o.jsx(Q,{})]});export{X as default};
