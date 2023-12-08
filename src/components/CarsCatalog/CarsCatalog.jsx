import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard";
import {
  fetchCars,
  selectCars,
  selectIsLoading,
  selectError,
} from "../../redux/carSlice";

import { StyledCatalogContainer } from "./CarsCatalog.styled";

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <StyledCatalogContainer>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </StyledCatalogContainer>
  );
};

export default CarsCatalog;
