import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard";
import { StyledCatalogContainer } from "./CarsCatalog.styled";

import {
  addSelectedCarId,
  removeSelectedCarId,
} from "../../redux/favoriteSlice";
import { selectCars, selectError, selectPageSize } from "../../redux/selectors";
import { selectSelectedCarIds } from "../../redux/favoriteSlice";
import { fetchCars } from "../../redux/operations";

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const limit = useSelector(selectPageSize);
  const selectedCarIds = useSelector(selectSelectedCarIds);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(fetchCars({ page: 1, limit }));
    } else {
      isMounted.current = true;
      const localStorageCarIds = localStorage.getItem("favoriteCarIds");

      if (localStorageCarIds) {
        const carIds = JSON.parse(localStorageCarIds);
        carIds.forEach((carId) => {
          dispatch(addSelectedCarId(carId));
        });
      }
    }
  }, [dispatch, limit]);

  const handleHeartClick = (carId) => {
    if (selectedCarIds.includes(carId)) {
      dispatch(removeSelectedCarId(carId));
    } else {
      dispatch(addSelectedCarId(carId));
    }
  };

  /*   if (isLoading) {
    return <div>Loading...</div>;
  } */
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledCatalogContainer>
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          onHeartClick={() => handleHeartClick(car.id)}
          isFavorite={selectedCarIds.includes(car.id)}
        />
      ))}
    </StyledCatalogContainer>
  );
};

export default CarsCatalog;
