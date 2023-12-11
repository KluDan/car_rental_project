import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const StyledCardButton = styled.button`
  width: ${(props) => props.width};
  color: ${theme.colors.bodyMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${theme.colors.primaryBlue};
  border-radius: 12px;
  padding-block: ${(props) => props.padding || "12px"};
  transition: ${theme.transitions.default};
  &:hover {
    background-color: ${theme.colors.secondaryBlue};
  }
`;
const MainButton = ({ buttonTitle, padding, width, onClick }) => {
  return (
    <StyledCardButton padding={padding} width={width} onClick={onClick}>
      {buttonTitle}
    </StyledCardButton>
  );
};

export default MainButton;
