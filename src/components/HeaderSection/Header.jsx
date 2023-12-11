import React from "react";
import { FaCar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  MainLogo,
  MainNavigation,
  NavList,
  NavListItem,
  StyledHeader,
  NavListItemLink,
  HeaderContainer,
} from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <MainLogo to="/">EasyWheels</MainLogo>
        <MainNavigation>
          <NavList>
            <NavListItem>
              <NavListItemLink to="/catalog">
                <FaCar />
                <span>Car catalog</span>
              </NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink to="/favorites">
                <AiOutlineLike />
                <span>Your favorites</span>
              </NavListItemLink>
            </NavListItem>
          </NavList>
        </MainNavigation>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
