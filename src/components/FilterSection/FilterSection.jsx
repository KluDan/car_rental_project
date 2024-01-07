import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCars } from "../../redux/carSlice";
import { setInputValue } from "../../redux/filterSlice";
import { fetchFilteredCars } from "../../redux/operations";
import { selectFilterPriceValue, selectInputValue } from "../../redux/selectors";

import DropDownMakes from "../DropDownMakes/DropDownMakes";
import DropDownPrice from "../DropDownPrice/DropDownPrice";
import MainButton from "../MainButton";
import MileageFilter from "../MileageFilter/MileageFilter";

import { StyledFilterSection } from "./FilterSection.styled";

const FilterSection = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue);
  const priceValue = useSelector(selectFilterPriceValue);

  const handleSearchButtonClick = async () => {
    if (inputValue.trim() === '') {
      return; 
    }

    dispatch(resetCars());
    
    dispatch(setInputValue(inputValue));
   
    const requestParams = { page: 1, limit: 12 };
    if (inputValue || priceValue) {
      requestParams.make = inputValue;
      requestParams.price = priceValue;
    }
    await dispatch(fetchFilteredCars(requestParams));
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
