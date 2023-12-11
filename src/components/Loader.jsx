import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { theme } from "../theme";
import styled from "styled-components";

const StyledLoader = styled.div`
  margin: auto;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={theme.colors.primaryBlue}
        ariaLabel="three-dots-loading"
        wrapperStyle={{ marginTop: "20px" }}
        wrapperClassName="custom-wrapper-class"
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;
