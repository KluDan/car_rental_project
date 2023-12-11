import React, { useState } from "react";
import styled from "styled-components";

import { theme } from "../../theme";
import { CarDetails } from "../CarDetails";
import { CarDetailsModal } from "../CarDetailsModal/CarDetailsModal";

import HeartIcon from "../HeartIcon";
import MainButton from "../MainButton";

import {
  StyledCarCard,
  StyledCardMainInfo,
  StyledCardMedia,
  StyledCarTitle,
} from "./CarCard.styled";

const CarCard = ({ car, onHeartClick, isFavorite, onLearnMoreClick }) => {
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
      <CarDetails details={Array.isArray(carDetails) ? carDetails : []} />
      <MainButton
        buttonTitle="Learn more"
        width={"100%"}
        onClick={() => onLearnMoreClick(car)}
      />
      <HeartIcon
        fill={isFavorite ? theme.colors.primaryBlue : "none"}
        stroke={isFavorite ? "none" : theme.colors.bodyMain}
        onClick={handleHeartClick}
      />
    </StyledCarCard>
  );
};

export default CarCard;
