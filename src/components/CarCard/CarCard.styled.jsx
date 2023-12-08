import styled from "styled-components";
import { theme } from "../../theme";

export const StyledCarCard = styled.article`
  width: 274px;
  align-items: stretch;

  position: relative;
`;

export const StyledCardMainInfo = styled.div`
  display: flex;
  color: ${theme.colors.primaryText};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  white-space: pre;

  span:nth-child(3) {
    margin-left: auto;
  }
`;

export const StyledCarTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${theme.colors.primaryBlue};
  }
`;

export const StyledCardMedia = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  cursor: pointer;
`;
