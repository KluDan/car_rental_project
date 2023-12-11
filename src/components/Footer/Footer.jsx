import React from "react";
import { FaFacebookF, FaViber, FaLinkedinIn } from "react-icons/fa";
import {
  FooterContainer,
  StyledFooter,
  FooterTextBlock,
  FooterInfo,
  FooterIcons,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTextBlock>
          <a href="/">© EasyWheels</a>
          <FooterInfo>
            <a>Site map</a>
            <a>Legal mentions</a>
            <a>Cookies, Security and Privacy policy</a>
          </FooterInfo>
        </FooterTextBlock>
        <FooterIcons>
          <a href="https://www.facebook.com/">
            <FaFacebookF size={22} />
          </a>
          <a href="https://account.viber.com/">
            <FaViber size={22} />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedinIn size={22} />
          </a>
        </FooterIcons>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
