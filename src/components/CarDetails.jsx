import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const StyledCarDetailsContainer = styled.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: ${(props) => props.marginBottom || "28px"};
  list-style: none;
`;

const StyledCarDetail = styled.li`
  color: ${theme.colors.secondaryText};
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
`;

export const CarDetails = ({ details, marginBottom }) => {
  return (
    <StyledCarDetailsContainer>
      {details.map((detail, index) => (
        <StyledCarDetail key={index}>
          <p>{detail}</p>
        </StyledCarDetail>
      ))}
    </StyledCarDetailsContainer>
  );
};
