import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const StyledCardButton = styled.button`
  width: 100%;
  color: ${theme.colors.bodyMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${theme.colors.primaryBlue};
  border: none;
  border-radius: 12px;
  padding-block: ${(props) => props.padding || "12px"};
  cursor: pointer;
  transition: ${theme.transitions.default};
  &:hover {
    background-color: ${theme.colors.secondaryBlue};
  }
`;
const MainButton = ({ buttonTitle, padding }) => {
  return <StyledCardButton padding={padding}>{buttonTitle}</StyledCardButton>;
};

export default MainButton;
