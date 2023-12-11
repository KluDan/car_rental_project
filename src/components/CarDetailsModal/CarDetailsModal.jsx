import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { CarDetails } from "../CarDetails";
import { RentalCondition } from "../RentalCondition";
import {
  ModalCloseButton,
  ModalContainer,
  ModalDescription,
  ModalImage,
  ModalMainInfo,
  ModalOverlay,
  ModalTextListTitle,
  ModalTitle,
  RentalCarButton,
} from "./CarDetailsModal.styled";

export const CarDetailsModal = ({ isOpen, onClose, carDetails }) => {
  const modalRef = useRef();

  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const {
    id,
    address,
    img,
    make,
    model,
    rentalPrice,
    year,
    type,
    mileage,
    functionalities,
    accessories,
    description,
    fuelConsumption,
    engineSize,
    rentalConditions,
  } = carDetails;

  const parts = address.split(", ");
  const city = parts[1];
  const country = parts[2];

  const detailsArray = [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];
  const accessoriesDetails = [...accessories, ...functionalities];

  const changedMileage = formatNumber(mileage.toString());
  const rentalConditionList = [...rentalConditions.split("\n")];

  const handleCloseClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleCloseClick}>
      <ModalContainer ref={modalRef}>
        <ModalImage src={img} alt={`${make} ${model}`} />
        <ModalMainInfo>
          <ModalTitle>
            {make}
            <span> {model},</span>
            <span> {year}</span>
          </ModalTitle>
          <CarDetails details={detailsArray} marginBottom="14px" />
        </ModalMainInfo>

        <ModalDescription>{description}</ModalDescription>
        <ModalTextListTitle>
          Accessories and functionalities:
        </ModalTextListTitle>
        <CarDetails details={accessoriesDetails} marginBottom="24px" />
        <ModalTextListTitle>Rental Conditions: </ModalTextListTitle>
        <RentalCondition
          details={rentalConditionList}
          mileage={changedMileage}
          price={rentalPrice}
        />
        <RentalCarButton href="tel:+380730000000">Rental car</RentalCarButton>
        <ModalCloseButton onClick={onClose}>
          <IoCloseOutline size={24} />
        </ModalCloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};
