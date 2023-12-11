import React from "react";
import Header from "./components/HeaderSection/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
