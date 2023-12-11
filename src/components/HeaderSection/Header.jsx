import React from "react";
import { FaCar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useLocation } from "react-router-dom";

import {
  MainLogo,
  MainNavigation,
  NavList,
  NavListItem,
  StyledHeader,
  NavListItemLink,
  HeaderContainer,
  LinkBlock,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <HeaderContainer>
        <MainLogo to="/">EasyWheels</MainLogo>
        <MainNavigation>
          <NavList>
            <NavListItem>
              <NavListItemLink
                to="/catalog"
                $active={location.pathname === "/catalog"}
              >
                <LinkBlock>
                  <FaCar />
                  <span>Car catalog</span>
                </LinkBlock>
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink
                to="/favorites"
                $active={location.pathname === "/favorites"}
              >
                <LinkBlock>
                  <AiOutlineLike />
                  <span>Your favorites</span>
                </LinkBlock>
              </NavListItemLink>
            </NavListItem>
          </NavList>
        </MainNavigation>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
