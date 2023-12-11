import React from "react";

import {
  StyledSection,
  StyledSectionContainer,
  StyledText,
  StyledTitle,
  StyledSubtitle,
  StyledListItem,
  StyledList,
  StyledLink,
  StyledImageBlock,
} from "./HomeVehiclesSection.styled";

const HomeVehiclesSection = () => {
  return (
    <StyledSection>
      <StyledSectionContainer>
        <StyledTitle>Car hire and van hire: wide range of vehicles</StyledTitle>
        <StyledText>
          Whatever your needs may be, we have a vehicle to suit them
        </StyledText>

        <StyledList>
          <StyledListItem>
            <StyledSubtitle>Cars</StyledSubtitle>
            <StyledText>
              Variety of cars available from eco-friendly compact to large
              people carriers
            </StyledText>

            <StyledImageBlock>
              <img
                src="https://images.ctfassets.net/wmdwnw6l5vg5/71jz89dFBIdA9KHrLh8T0h/18cee2b0afad78429b0b9a8741477464/360x240_VW_golf.png"
                alt="Car"
              />
            </StyledImageBlock>
            <StyledLink>See more</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledSubtitle>Electric</StyledSubtitle>
            <StyledText>
              Discover the benefits of electrifying your car hire
            </StyledText>

            <StyledImageBlock>
              <img
                src="https://images.ctfassets.net/wmdwnw6l5vg5/7eSknBlxG6vxlTW1aPj3Ao/14f151b32b466d0b6bdb5a7f867c9af7/360x240_HP_Tesla_model_3.png"
                alt="Car"
              />
            </StyledImageBlock>
            <StyledLink>See more</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledSubtitle>Prestige</StyledSubtitle>
            <StyledText>
              Choose from a range of luxury vehicles made by legendary
              manufacturers
            </StyledText>

            <StyledImageBlock>
              <img
                src="https://images.ctfassets.net/wmdwnw6l5vg5/FKkhunbxg0hIIHkl7tOkM/6db8adf4b1507c403c8a6fb39626f3f9/360x240_HP_GLC_MB.png"
                alt="Car"
              />
            </StyledImageBlock>
            <StyledLink>See more</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledSubtitle>Vans</StyledSubtitle>
            <StyledText>
              Wide range of vans to meet your business or leisure needs
            </StyledText>

            <StyledImageBlock>
              <img
                src="https://images.ctfassets.net/wmdwnw6l5vg5/7MXwlGGHdrV8aNmF2XQLED/4097245de6573791c03f18246ace4787/crafter_260x240.png"
                alt="Car"
              />
            </StyledImageBlock>
            <StyledLink>See more</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledSectionContainer>
    </StyledSection>
  );
};

export default HomeVehiclesSection;
