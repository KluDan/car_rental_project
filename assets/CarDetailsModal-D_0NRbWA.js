import{s as e,t as n,j as t,r as I,G as P}from"./index-R7VkdSfV.js";import{M as H}from"./MainButton-zNh59rPe.js";const G=e.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: ${o=>o.marginBottom||"28px"};
  list-style: none;
`,W=e.li`
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
`,T=({details:o,marginBottom:r})=>t.jsx(G,{children:o.map((i,s)=>t.jsx(W,{children:t.jsx("p",{children:i})},s))}),Y=e.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: ${n.transitions.default};
  &:hover {
    stroke: ${n.colors.primaryBlue};
  }
`,_=({stroke:o,fill:r,onClick:i})=>t.jsx(Y,{viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",onClick:i,fill:r,stroke:o,children:t.jsx("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),K=e.article`
  width: 274px;
  max-height: 100%;
  align-items: stretch;
  position: relative;
  flex-direction: column;
`,N=e.div`
  display: flex;
  flex-wrap: wrap;
  color: ${n.colors.primaryText};
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
    color: ${n.colors.primaryBlue};
  }
`,U=e.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`,st=({car:o,onHeartClick:r,isFavorite:i,onLearnMoreClick:s})=>{const{id:c,address:C,img:b,make:w,model:d,rentalCompany:x,rentalPrice:a,year:h,type:k,mileage:$,functionalities:g}=o,v=g.reduce((y,p)=>{const j=p.length>30?`${p.substring(0,30)}...`:p;return j.length<y.length?j:y},g[0]),u=C.split(", "),M=u[1],B=u[2],m=[M,B,x,k,d,$,v],[f,L]=I.useState(!1),S=f?"/car_rental_project/defaultCarImage.jpg":b,z=()=>{r(c)},D=typeof a=="string"&&!a.includes("$")?`$${a}`:a;return t.jsxs(K,{children:[t.jsx(U,{src:S,alt:"Car picture",onError:()=>L(!0)}),t.jsxs(N,{children:[t.jsxs(O,{children:[w,t.jsxs("span",{children:[" ",d,","]})]}),t.jsxs("span",{children:[" ",h]}),t.jsx("span",{children:D})]}),t.jsx(T,{details:Array.isArray(m)?m:[]}),t.jsx(H,{buttonTitle:"Learn more",width:"100%",onClick:()=>s(o)}),t.jsx(_,{fill:i?n.colors.primaryBlue:"none",stroke:i?"none":n.colors.bodyMain,onClick:z})]})};function Z(o){return P({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368L144 144m224 0L144 368"}}]})(o)}const q=e.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  list-style: none;
`,E=e.li`
  color: ${n.colors.additionalText};
  background-color: ${n.colors.secondaryBackground};
  border-radius: 35px;
  padding: 7px 14px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
  p {
    span {
      color: ${n.colors.primaryBlue};
    }
  }
`,F=({details:o,mileage:r,price:i})=>t.jsxs(q,{children:[o.map((s,c)=>t.jsx(E,{children:t.jsx("p",{children:s})},c)),t.jsx(E,{children:t.jsxs("p",{children:["Mileage: ",t.jsx("span",{children:r})]})}),t.jsx(E,{children:t.jsxs("p",{children:["Price: ",t.jsx("span",{children:i})]})})]}),J=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,Q=e.div`
  position: relative;
  max-width: 541px;
  max-height: 90vh;
  overflow: auto;
  background: ${n.colors.bodyMain};
  padding: 40px;
  border-radius: 24px;
  width: 100%;
`,V=e.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  background-color: #f0f0f0;
`,X=e.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  span:first-of-type {
    color: ${n.colors.primaryBlue};
  }
`,tt=e.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
`,et=e.button`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  cursor: pointer;
`,ot=e.div`
  max-width: 277px;
  margin-bottom: 14px;
`,nt=e.a`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${n.colors.bodyMain};
  display: flex;
  max-width: 168px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${n.colors.primaryBlue};
  text-decoration: none;
  transition: ${n.transitions.default};
  &:hover {
    background-color: ${n.colors.secondaryBlue};
  }
`,R=e.p`
  margin-bottom: 8px;
`,at=({isOpen:o,onClose:r,carDetails:i})=>{const s=I.useRef(),c=l=>l.replace(/\B(?=(\d{3})+(?!\d))/g,","),{id:C,address:b,img:w,make:d,model:x,rentalPrice:a,year:h,type:k,mileage:$,functionalities:g,accessories:v,description:u,fuelConsumption:M,engineSize:B,rentalConditions:m}=i,f=b.split(", "),L=f[1],S=f[2],z=[L,S,`Id: ${C}`,`Year: ${h}`,`Type: ${k}`,`Fuel Consumption: ${M}`,`Engine Size: ${B}`],D=[...v,...g],y=c($.toString()),p=[...m.split(`
`)],j=l=>{s.current&&!s.current.contains(l.target)&&r()};return I.useEffect(()=>{const l=A=>{A.key==="Escape"&&r()};return o?(document.body.style.overflow="hidden",document.addEventListener("keydown",l)):document.body.style.overflow="",()=>{document.removeEventListener("keydown",l),document.body.style.overflow=""}},[o,r]),o?t.jsx(J,{onClick:j,children:t.jsxs(Q,{ref:s,children:[t.jsx(V,{src:w,alt:`${d} ${x}`}),t.jsxs(ot,{children:[t.jsxs(X,{children:[d,t.jsxs("span",{children:[" ",x,","]}),t.jsxs("span",{children:[" ",h]})]}),t.jsx(T,{details:z,marginBottom:"14px"})]}),t.jsx(tt,{children:u}),t.jsx(R,{children:"Accessories and functionalities:"}),t.jsx(T,{details:D,marginBottom:"24px"}),t.jsx(R,{children:"Rental Conditions: "}),t.jsx(F,{details:p,mileage:y,price:a}),t.jsx(nt,{href:"tel:+380730000000",children:"Rental car"}),t.jsx(et,{onClick:r,children:t.jsx(Z,{size:24})})]})}):null};export{st as C,at as a};
