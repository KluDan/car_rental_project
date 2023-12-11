import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const StyledCarDetailsContainer = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  list-style: none;
`;

const StyledCarDetail = styled.li`
  color: ${theme.colors.additionalText};
  background-color: ${theme.colors.secondaryBackground};
  border-radius: 35px;
  padding: 7px 14px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
  p {
    span {
      color: ${theme.colors.primaryBlue};
    }
  }
`;

export const RentalCondition = ({ details, mileage, price }) => {
  return (
    <StyledCarDetailsContainer>
      {details.map((detail, index) => (
        <StyledCarDetail key={index}>
          <p>{detail}</p>
        </StyledCarDetail>
      ))}
      <StyledCarDetail>
        <p>
          Mileage: <span>{mileage}</span>
        </p>
      </StyledCarDetail>
      <StyledCarDetail>
        <p>
          Price: <span>{price}</span>
        </p>
      </StyledCarDetail>
    </StyledCarDetailsContainer>
  );
};
