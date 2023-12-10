import React, { useState } from "react";
import styled from "styled-components";

import { theme } from "../../theme";
import HeartIcon from "../HeartIcon";
import MainButton from "../MainButton";
import {
  StyledCarCard,
  StyledCardMainInfo,
  StyledCardMedia,
  StyledCarTitle,
} from "./CarCard.styled";

const StyledCarDetailsContainer = styled.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  list-style: none;
`;

const StyledCarDetail = styled.li`
  color: ${theme.colors.secondaryText};
  font-size: 12px;
  line-height: 18px;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
    height: 16px;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

const CarDetails = ({ details }) => {
  return (
    <StyledCarDetailsContainer>
      {details.map((detail, index) => (
        <StyledCarDetail key={index}>
          <p>{detail}</p>
        </StyledCarDetail>
      ))}
    </StyledCarDetailsContainer>
  );
};

const CarCard = ({ car, onHeartClick, isFavorite }) => {
  const {
    id,
    address,
    img,
    make,
    model,
    rentalCompany,
    rentalPrice,
    year,
    type,
    mileage,
    functionalities,
  } = car;

  const shortestAccessory = functionalities.reduce((shortest, current) => {
    const truncatedCurrent =
      current.length > 30 ? `${current.substring(0, 30)}...` : current;
    return truncatedCurrent.length < shortest.length
      ? truncatedCurrent
      : shortest;
  }, functionalities[0]);

  const parts = address.split(", ");
  const city = parts[1];
  const country = parts[2];
  const carDetails = [
    city,
    country,
    rentalCompany,
    type,
    model,
    mileage,
    shortestAccessory,
  ];

  const [imageError, setImageError] = useState(false);

  const imageUrl = imageError ? "/car_rental_project/defaultCarImage.jpg" : img;

  const handleHeartClick = () => {
    onHeartClick(id);
  };

  return (
    <StyledCarCard>
      <StyledCardMedia
        src={imageUrl}
        alt="Car picture"
        onError={() => setImageError(true)}
      />
      <StyledCardMainInfo>
        <StyledCarTitle>
          {make}
          <span> {model},</span>
        </StyledCarTitle>
        <span> {year}</span>
        <span>{rentalPrice}</span>
      </StyledCardMainInfo>
      <CarDetails details={carDetails} />
      <MainButton buttonTitle="Learn more" width={"100%"} />
      <HeartIcon
        fill={isFavorite ? theme.colors.primaryBlue : "none"}
        stroke={isFavorite ? "none" : theme.colors.bodyMain}
        onClick={handleHeartClick}
      />
    </StyledCarCard>
  );
};

export default CarCard;
