import styled from "styled-components";
import { theme } from "../../theme";

export const StyledFooter = styled.footer`
  height: 80px;
  background-color: ${theme.colors.secondaryBlue};
  display: flex;
  align-items: center;
  margin-top: 10px;
  bottom: 0;
`;
export const FooterContainer = styled.div`
  width: 1213px;
  padding: 15px;
  margin: auto;
  color: ${theme.colors.bodyMain};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FooterTextBlock = styled.div`
  flex: 0 1 60%;
  display: flex;
  gap: 30px;
  a {
    color: ${theme.colors.bodyMain};
    text-decoration: none;
    cursor: pointer;
  }
`;
export const FooterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  a {
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    position: relative;
    padding-right: 10px;
    &:not(:last-of-type) {
      border-right: 1px solid ${theme.colors.bodyMain};
    }

    &::after {
      position: absolute;
      content: "";
      left: 50%;
      transform: translateX(-50%);
      bottom: -2px;
      display: block;
      width: 100%;
      height: 1px;
      background: ${theme.colors.bodyMain};
      width: 0;
      transition: ${theme.transitions.default};
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
export const FooterIcons = styled.div`
  display: flex;
  gap: 15px;
  a {
    color: ${theme.colors.bodyMain};
    cursor: pointer;
  }
`;
