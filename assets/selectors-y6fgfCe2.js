import{s as r,t as e,j as o,r as I}from"./index-ikUV23pT.js";const T=r.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: ${t=>t.marginBottom||"28px"};
  list-style: none;
`,D=r.li`
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
`,E=({details:t,marginBottom:s})=>o.jsx(T,{children:t.map((n,i)=>o.jsx(D,{children:o.jsx("p",{children:n})},i))}),R=r.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  list-style: none;
`,c=r.li`
  color: ${e.colors.additionalText};
  background-color: ${e.colors.secondaryBackground};
  border-radius: 35px;
  padding: 7px 14px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
  p {
    span {
      color: ${e.colors.primaryBlue};
    }
  }
`,Z=({details:t,mileage:s,price:n})=>o.jsxs(R,{children:[t.map((i,a)=>o.jsx(c,{children:o.jsx("p",{children:i})},a)),o.jsx(c,{children:o.jsxs("p",{children:["Mileage: ",o.jsx("span",{children:s})]})}),o.jsx(c,{children:o.jsxs("p",{children:["Price: ",o.jsx("span",{children:n})]})})]}),q=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,G=r.div`
  position: relative;
  max-width: 541px;
  max-height: 90vh;
  overflow: auto;
  background: ${e.colors.bodyMain};
  padding: 40px;
  border-radius: 24px;
  width: 100%;
`,J=r.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  background-color: #f0f0f0;
`,K=r.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  span:first-of-type {
    color: ${e.colors.primaryBlue};
  }
`,N=r.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`,Q=r.button`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  cursor: pointer;
`,X=r.div`
  max-width: 277px;
  margin-bottom: 14px;
`,F=r.a`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${e.colors.bodyMain};
  display: flex;
  max-width: 168px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${e.colors.primaryBlue};
  text-decoration: none;
  transition: ${e.transitions.default};
  &:hover {
    background-color: ${e.colors.secondaryBlue};
  }
`,tt=r.p`
  margin-bottom: 8px;
`,P=r.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: ${e.transitions.default};
  &:hover {
    stroke: ${e.colors.primaryBlue};
  }
`,A=({stroke:t,fill:s,onClick:n})=>o.jsx(P,{viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",onClick:n,fill:s,stroke:t,children:o.jsx("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),H=r.button`
  width: ${t=>t.width};
  color: ${e.colors.bodyMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${e.colors.primaryBlue};
  border-radius: 12px;
  padding-block: ${t=>t.padding||"12px"};
  transition: ${e.transitions.default};
  &:hover {
    background-color: ${e.colors.secondaryBlue};
  }
`,O=({buttonTitle:t,padding:s,width:n,onClick:i})=>o.jsx(H,{padding:s,width:n,onClick:i,children:t}),V=r.article`
  width: 274px;
  align-items: stretch;

  position: relative;
`,_=r.div`
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
`,U=r.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${e.colors.primaryBlue};
  }
`,W=r.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`,ot=({car:t,onHeartClick:s,isFavorite:n,onLearnMoreClick:i})=>{const{id:a,address:m,img:f,make:y,model:p,rentalCompany:b,rentalPrice:C,year:j,type:w,mileage:$,functionalities:d}=t,k=d.reduce((g,l)=>{const u=l.length>30?`${l.substring(0,30)}...`:l;return u.length<g.length?u:g},d[0]),x=m.split(", "),M=x[1],v=x[2],h=[M,v,b,w,p,$,k],[B,L]=I.useState(!1),S=B?"/car_rental_project/defaultCarImage.jpg":f,z=()=>{s(a)};return o.jsxs(V,{children:[o.jsx(W,{src:S,alt:"Car picture",onError:()=>L(!0)}),o.jsxs(_,{children:[o.jsxs(U,{children:[y,o.jsxs("span",{children:[" ",p,","]})]}),o.jsxs("span",{children:[" ",j]}),o.jsx("span",{children:C})]}),o.jsx(E,{details:Array.isArray(h)?h:[]}),o.jsx(O,{buttonTitle:"Learn more",width:"100%",onClick:()=>i(t)}),o.jsx(A,{fill:n?e.colors.primaryBlue:"none",stroke:n?"none":e.colors.bodyMain,onClick:z})]})},et=t=>t.cars.cars,rt=t=>t.cars.isLoading,nt=t=>t.cars.error,st=t=>t.cars.currentPage,it=t=>t.cars.limit,at=t=>t.cars.totalResults,lt=t=>t.cars.inputValue;export{E as C,q as M,Z as R,G as a,J as b,X as c,K as d,N as e,tt as f,F as g,Q as h,nt as i,it as j,ot as k,lt as l,O as m,at as n,st as o,rt as p,et as s};
