import React from "react";
import MainButton from "../MainButton";
import {
  ContentItem,
  PromotionsContent,
  PromotionsTitle,
  StyledImageDiv,
  StyledSection,
} from "./PromotionsSection.styled";

const PromotionsSection = () => {
  return (
    <StyledSection>
      <PromotionsTitle>
        EasyWheels car hire promotions and services
      </PromotionsTitle>
      <PromotionsContent>
        <ContentItem>
          <StyledImageDiv>
            <img
              src="https://orchelatorltd.files.wordpress.com/2011/09/15_percent_discount.jpg"
              alt="discount"
            />
          </StyledImageDiv>

          <h3>Fasten your seatbelt & enjoy the RIDE!</h3>
          <p>Relax and start your journey from your doorstep.</p>
          <MainButton
            buttonTitle="Book ride now"
            padding={"14px"}
            width={"100%"}
          />
        </ContentItem>
        <ContentItem>
          <StyledImageDiv>
            <img
              src="https://cdn.sixt.io/cms/originals/f93ae755-5a26-4f0b-8d4e-bbb02bdaf2e5.jpg"
              alt="Car with men"
            />
          </StyledImageDiv>
          <h3>Rental cars for corporate customers</h3>
          <p>Secure exclusive advantages and up to 15% discount</p>
          <MainButton
            buttonTitle="Sign up now for free"
            padding={"14px"}
            width={"100%"}
          />
        </ContentItem>
        <ContentItem>
          <StyledImageDiv>
            <img
              src="https://cdn.dribbble.com/users/1726280/screenshots/6690894/on-demand-ridesharing-mobile-app.jpg"
              alt="Mobile app"
            />
          </StyledImageDiv>
          <h3>The EasyWheels App</h3>
          <p>All your mobility needs in One App</p>
          <MainButton
            buttonTitle="Download now"
            padding={"14px"}
            width={"100%"}
          />
        </ContentItem>
      </PromotionsContent>
    </StyledSection>
  );
};

export default PromotionsSection;
