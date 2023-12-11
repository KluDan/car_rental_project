import React from "react";
import FavoriteCatalog from "../../components/FavoritesCatalog/FavoriteCarsCatalog";
import { StyledSection } from "./FavoriteCars.styled";

const SavedCars = () => {
  return (
    <StyledSection>
      <FavoriteCatalog />
    </StyledSection>
  );
};

export default SavedCars;
