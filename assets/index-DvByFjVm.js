import{s as o,j as t,r as u,u as $,a as l,b as S,c as E,d as F,f as M}from"./index-pAvL9xe5.js";const e={colors:{primaryText:"#121417",secondaryText:"rgba(18, 20, 23, 0.50)",labelText:"#8A8A89",primaryBlue:"#3470FF",secondaryBlue:"#0B44CD",bodyMain:"#fff",secondaryBackground:"#F9F9F9",inputBackground:"#F7F7FB"},transitions:{default:"0.3s ease-in-out"}},T=o.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke: ${e.colors.bodyMain};
  cursor: pointer;
  transition: ${e.transitions.default};
  &:hover {
    stroke: ${e.colors.primaryBlue};
  }
`,D=()=>t.jsx(T,{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),I=o.button`
  width: 100%;
  color: ${e.colors.bodyMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${e.colors.primaryBlue};
  border: none;
  border-radius: 12px;
  padding-block: ${r=>r.padding||"12px"};
  cursor: pointer;
  transition: ${e.transitions.default};
  &:hover {
    background-color: ${e.colors.secondaryBlue};
  }
`,z=({buttonTitle:r,padding:s})=>t.jsx(I,{padding:s,children:r}),H=o.article`
  width: 274px;
  align-items: stretch;

  position: relative;
`,A=o.div`
  display: flex;
  color: ${e.colors.primaryText};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  white-space: pre;

  span:nth-child(3) {
    margin-left: auto;
  }
`,_=o.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${e.colors.primaryBlue};
  }
`,O=o.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`,P=o.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  list-style: none;
`,R=o.li`
  color: ${e.colors.secondaryText};
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
`,U=({details:r})=>t.jsx(P,{children:r.map((s,n)=>t.jsx(R,{children:t.jsx("p",{children:s})},n))}),W=({car:r})=>{const{address:s,img:n,make:a,model:i,rentalCompany:g,rentalPrice:m,year:C,type:f,mileage:y,functionalities:d}=r,j=d.reduce((x,c)=>{const h=c.length>30?`${c.substring(0,30)}...`:c;return h.length<x.length?h:x},d[0]),p=s.split(", "),b=p[1],w=p[2],k=[b,w,g,f,i,y,j],[v,B]=u.useState(!1),L=v?"/car_rental_project/defaultCarImage.jpg":n;return t.jsxs(H,{children:[t.jsx(O,{src:L,alt:"Car picture",onError:()=>B(!0)}),t.jsxs(A,{children:[t.jsxs(_,{children:[a,t.jsxs("span",{children:[" ",i,","]})]}),t.jsxs("span",{children:[" ",C]}),t.jsx("span",{children:m})]}),t.jsx(U,{details:k}),t.jsx(z,{buttonTitle:"Learn more"}),t.jsx(D,{})]})},Y=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
`,Z=()=>{const r=$(),s=l(S),n=l(E),a=l(F);return u.useEffect(()=>{r(M())},[r]),n?t.jsx("div",{children:"Loading..."}):a?t.jsxs("div",{children:["Error: ",a]}):t.jsx(Y,{children:s.map(i=>t.jsx(W,{car:i},i.id))})},G=()=>t.jsxs("div",{children:[t.jsx("h1",{children:"Home"}),t.jsx(Z,{})]});export{G as default};
