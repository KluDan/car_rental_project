import React from "react";
import Header from "./components/HeaderSection/Header";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";

const LayoutMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const LayoutContainer = styled.main`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <LayoutMain>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </LayoutMain>
  );
};

export default Layout;
