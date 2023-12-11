import styled from "styled-components";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  background-color: ${theme.colors.primaryBlue};
  color: ${theme.colors.bodyMain};
`;
export const HeaderContainer = styled.div`
  width: 1213px;
  padding: 15px;
  margin: auto;
  display: flex;
  align-items: center;
`;
export const MainLogo = styled(Link)`
  color: ${theme.colors.bodyMain};
  font-size: 30px;
  font-weight: 600;
  margin-right: 150px;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transitions.default};
  &:hover {
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const MainNavigation = styled.nav`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const NavListItem = styled.li``;

export const NavListItemLink = styled(Link)`
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 4px;
  text-decoration: none;
  color: ${theme.colors.bodyMain};

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
  &:hover {
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
  }
`;
