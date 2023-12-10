import React from "react";

import DropDownMakes from "../DropDownMakes/DropDownMakes";
import MainButton from "../MainButton";

import { StyledFilterSection } from "./FilterSection.styled";

const FilterSection = () => {
  return (
    <StyledFilterSection>
      <DropDownMakes />
      <MainButton buttonTitle="Search" padding={"14px"} width={"136px"} />
    </StyledFilterSection>
  );
};

export default FilterSection;
