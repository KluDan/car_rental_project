import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard";
import {
  fetchCars,
  selectCars,
  selectError,
  selectCurrentPage,
  selectPageSize,
} from "../../redux/carSlice";

import { StyledCatalogContainer } from "./CarsCatalog.styled";

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const limit = useSelector(selectPageSize);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(fetchCars({ page: 1, limit }));
    } else {
      isMounted.current = true;
    }
  }, [dispatch, limit]);
  /*   if (isLoading) {
    return <div>Loading...</div>;
  } */
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
