import{s as e,t as r,j as o,r as z}from"./index-mQdeu8ZK.js";import{M as D}from"./MainButton-RxtSfQk1.js";const R=e.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: ${t=>t.marginBottom||"28px"};
  list-style: none;
`,E=e.li`
  color: ${r.colors.secondaryText};
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
`,P=({details:t,marginBottom:n})=>o.jsx(R,{children:t.map((s,i)=>o.jsx(E,{children:o.jsx("p",{children:s})},i))}),A=e.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  list-style: none;
`,p=e.li`
  color: ${r.colors.additionalText};
  background-color: ${r.colors.secondaryBackground};
  border-radius: 35px;
  padding: 7px 14px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
  p {
    span {
      color: ${r.colors.primaryBlue};
    }
  }
`,q=({details:t,mileage:n,price:s})=>o.jsxs(A,{children:[t.map((i,l)=>o.jsx(p,{children:o.jsx("p",{children:i})},l)),o.jsx(p,{children:o.jsxs("p",{children:["Mileage: ",o.jsx("span",{children:n})]})}),o.jsx(p,{children:o.jsxs("p",{children:["Price: ",o.jsx("span",{children:s})]})})]}),G=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,J=e.div`
  position: relative;
  max-width: 541px;
  max-height: 90vh;
  overflow: auto;
  background: ${r.colors.bodyMain};
  padding: 40px;
  border-radius: 24px;
  width: 100%;
`,K=e.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  background-color: #f0f0f0;
`,N=e.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  span:first-of-type {
    color: ${r.colors.primaryBlue};
  }
`,Q=e.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`,X=e.button`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  cursor: pointer;
`,F=e.div`
  max-width: 277px;
  margin-bottom: 14px;
`,tt=e.a`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${r.colors.bodyMain};
  display: flex;
  max-width: 168px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${r.colors.primaryBlue};
  text-decoration: none;
  transition: ${r.transitions.default};
  &:hover {
    background-color: ${r.colors.secondaryBlue};
  }
`,ot=e.p`
  margin-bottom: 8px;
`,H=e.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: ${r.transitions.default};
  &:hover {
    stroke: ${r.colors.primaryBlue};
  }
`,O=({stroke:t,fill:n,onClick:s})=>o.jsx(H,{viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",onClick:s,fill:n,stroke:t,children:o.jsx("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),V=e.article`
  width: 274px;
  max-height: 100%;
  align-items: stretch;
  position: relative;
  flex-direction: column;
`,_=e.div`
  display: flex;
  flex-wrap: wrap;
  color: ${r.colors.primaryText};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  white-space: pre;

  span:nth-child(3) {
    margin-left: auto;
  }
`,U=e.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${r.colors.primaryBlue};
  }
`,W=e.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`,et=({car:t,onHeartClick:n,isFavorite:s,onLearnMoreClick:i})=>{const{id:l,address:f,img:y,make:C,model:d,rentalCompany:b,rentalPrice:a,year:j,type:w,mileage:$,functionalities:x}=t,k=x.reduce((u,c)=>{const m=c.length>30?`${c.substring(0,30)}...`:c;return m.length<u.length?m:u},x[0]),h=f.split(", "),M=h[1],v=h[2],g=[M,v,b,w,d,$,k],[B,L]=z.useState(!1),S=B?"/car_rental_project/defaultCarImage.jpg":y,I=()=>{n(l)},T=typeof a=="string"&&!a.includes("$")?`$${a}`:a;return o.jsxs(V,{children:[o.jsx(W,{src:S,alt:"Car picture",onError:()=>L(!0)}),o.jsxs(_,{children:[o.jsxs(U,{children:[C,o.jsxs("span",{children:[" ",d,","]})]}),o.jsxs("span",{children:[" ",j]}),o.jsx("span",{children:T})]}),o.jsx(P,{details:Array.isArray(g)?g:[]}),o.jsx(D,{buttonTitle:"Learn more",width:"100%",onClick:()=>i(t)}),o.jsx(O,{fill:s?r.colors.primaryBlue:"none",stroke:s?"none":r.colors.bodyMain,onClick:I})]})},rt=t=>t.cars.cars,st=t=>t.cars.isLoading,nt=t=>t.cars.error,it=t=>t.cars.currentPage,at=t=>t.cars.limit,lt=t=>t.cars.totalResults,ct=t=>t.cars.inputValue;export{P as C,G as M,q as R,J as a,K as b,F as c,N as d,Q as e,ot as f,tt as g,X as h,nt as i,at as j,et as k,ct as l,lt as m,it as n,st as o,rt as s};
