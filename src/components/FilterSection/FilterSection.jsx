import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCars, setInputValue } from "../../redux/carSlice";
import { fetchFilteredCars } from "../../redux/operations";
import { selectInputValue } from "../../redux/selectors";

import DropDownMakes from "../DropDownMakes/DropDownMakes";
import DropDownPrice from "../DropDownPrice/DropDownPrice";
import MainButton from "../MainButton";
import MileageFilter from "../MileageFilter/MileageFilter";

import { StyledFilterSection } from "./FilterSection.styled";

const FilterSection = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue);

  const handleSearchButtonClick = () => {
    dispatch(resetCars());
    dispatch(setInputValue(inputValue));

    const requestParams = { page: 1, limit: 12 };
    if (inputValue) {
      requestParams.make = inputValue;
    }
    dispatch(fetchFilteredCars(requestParams));
  };

  return (
    <StyledFilterSection>
      <DropDownMakes />
      <DropDownPrice />
      <MileageFilter />
      <MainButton
        buttonTitle="Search"
        padding={"14px"}
        width={"136px"}
        onClick={handleSearchButtonClick}
      />
    </StyledFilterSection>
  );
};

export default FilterSection;
