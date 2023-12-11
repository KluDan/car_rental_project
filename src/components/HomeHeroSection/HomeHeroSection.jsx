import React from "react";
import {
  HeroContainer,
  HeroSection,
  HeroText,
  HeroTitle,
} from "./HomeHeroSection.styled";

const HomeHeroSection = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>Welcome to our Rental Service</HeroTitle>
        <HeroText>
          Looking to hire a vehicle? You’ve come to the right place.
        </HeroText>
      </HeroContainer>
    </HeroSection>
  );
};

export default HomeHeroSection;
