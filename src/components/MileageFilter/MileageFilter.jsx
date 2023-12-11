import React, { useState } from "react";
import {
  InputBlock,
  InputMain,
  StyledInput,
  StyledLabel,
  Wrapper,
} from "./MileageFilter.styled";

const MileageFilter = () => {
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const parseNumber = (formattedValue) => {
    return parseFloat(formattedValue.replace(",", ""));
  };

  const handleMileageFromChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    setMileageFrom(formatNumber(inputValue));
  };

  const handleMileageToChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    setMileageTo(formatNumber(inputValue));
  };

  const handleCalculate = () => {
    const mileageFromValue = parseNumber(mileageFrom);
    const mileageToValue = parseNumber(mileageTo);
  };

  return (
    <Wrapper>
      <StyledLabel htmlFor="mileageFrom">Car mileage / km:</StyledLabel>
      <InputMain>
        <InputBlock>
          <span>From</span>
          <StyledInput
            id="mileageFrom"
            type="text"
            value={mileageFrom}
            onChange={handleMileageFromChange}
          />
        </InputBlock>
        <InputBlock>
          <span>To</span>
          <StyledInput
            type="text"
            value={mileageTo}
            onChange={handleMileageToChange}
          />
        </InputBlock>
      </InputMain>
    </Wrapper>
  );
};

export default MileageFilter;
