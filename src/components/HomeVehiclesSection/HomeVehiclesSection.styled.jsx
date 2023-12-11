import styled from "styled-components";
import { theme } from "../../theme";

export const StyledSection = styled.section`
  color: ${theme.colors.primaryText};
  padding-block: 50px;
  background-color: ${theme.colors.secondaryBackground};
`;
export const StyledSectionContainer = styled.div`
  max-width: 1213px;
  padding: 15px;
  margin: auto;
`;

export const StyledTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${theme.colors.primaryText};
  margin-bottom: 10px;
`;

export const StyledSubtitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.primaryText};
`;

export const StyledText = styled.p`
  font-size: 18px;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
`;

export const StyledListItem = styled.li`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 0 1 23%;
`;

export const StyledLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.primaryBlue};
  text-decoration: none;
  cursor: pointer;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    display: block;
    width: 100%;
    height: 1px;
    background: ${theme.colors.primaryBlue};
    width: 0;
    transition: ${theme.transitions.default};
  }
  &:hover::after {
    width: 100%;
  }
`;
export const StyledImageBlock = styled.div`
  margin-top: auto;
  max-width: 100%;
  img {
    width: 100%;
  }
`;
