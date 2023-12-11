import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard";
import { StyledCatalogContainer } from "./CarsCatalog.styled";

import {
  addSelectedCarId,
  removeSelectedCarId,
  selectSelectedCarIds,
} from "../../redux/favoriteSlice";
import {
  selectCars,
  selectError,
  selectIsLoading,
  selectPageSize,
} from "../../redux/selectors";

import { fetchCars } from "../../redux/operations";
import { CarDetailsModal } from "../CarDetailsModal/CarDetailsModal";

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const limit = useSelector(selectPageSize);
  const selectedCarIds = useSelector(selectSelectedCarIds);
  const isLoading = useSelector(selectIsLoading);

  const [selectedCar, setSelectedCar] = useState(null);
  const [filteredMakes, setFilteredMakes] = useState([]);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!cars.length && isMounted.current) {
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
  }, [dispatch, cars.length, limit]);

  const handleHeartClick = (carId) => {
    if (selectedCarIds.includes(carId)) {
      dispatch(removeSelectedCarId(carId));
    } else {
      dispatch(addSelectedCarId(carId));
    }
  };

  const handleLearnMoreClick = (car) => {
    setSelectedCar(car);
  };

  const handleModalClose = () => {
    setSelectedCar(null);
  };

  const filteredCars = cars.filter((car) => {
    if (filteredMakes.length === 0) {
      return true;
    }
    return filteredMakes.includes(car.make);
  });

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <StyledCatalogContainer>
        {filteredCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onHeartClick={() => handleHeartClick(car.id)}
            isFavorite={selectedCarIds.includes(car.id)}
            onLearnMoreClick={handleLearnMoreClick}
          />
        ))}
        {selectedCar && (
          <CarDetailsModal
            isOpen={!!selectedCar}
            onClose={handleModalClose}
            carDetails={selectedCar}
          />
        )}
      </StyledCatalogContainer>
    </div>
  );
};

export default CarsCatalog;
