import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledCatalogContainer,
  ErrorMessage,
} from "./FavoriteCarsCatalog.styled";
import CarCard from "../CarCard/CarCard";
import { CarDetailsModal } from "../CarDetailsModal/CarDetailsModal";
import Loader from "../Loader";

import { fetchCarsByIds } from "../../redux/operations";
import {
  selectSelectedCarIds,
  selectSelectedCars,
  addSelectedCarId,
  removeSelectedCarId,
  setSelectedCars,
  selectIsLoading,
  selectError,
  setLoading,
  setError,
} from "../../redux/favoriteSlice";

const FavoriteCatalog = () => {
  const dispatch = useDispatch();
  const selectedCarIds = useSelector(selectSelectedCarIds);
  const selectedCars = useSelector(selectSelectedCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (selectedCarIds.length > 0) {
      dispatch(setLoading(true));
      dispatch(fetchCarsByIds(selectedCarIds))
        .then((result) => {
          dispatch(setSelectedCars(result.payload));
        })
        .catch((error) => {
          console.error("Error fetching cars by id:", error);
          dispatch(setError("Error fetching cars. Please try again later."));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  }, [dispatch, selectedCarIds]);

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

  return (
    <StyledCatalogContainer>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      {!isLoading && !error && selectedCars && selectedCars.length > 0
        ? selectedCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={true}
              onHeartClick={() => handleHeartClick(car.id)}
              onLearnMoreClick={handleLearnMoreClick}
            />
          ))
        : !isLoading &&
          !error && (
            <ErrorMessage>
              The list of favorite cars is currently empty. Feel free to add
              your preferred cars here:
              <Link to="/catalog">Car catalog</Link>
            </ErrorMessage>
          )}
      {selectedCar && (
        <CarDetailsModal
          isOpen={!!selectedCar}
          onClose={handleModalClose}
          carDetails={selectedCar}
        />
      )}
    </StyledCatalogContainer>
  );
};

export default FavoriteCatalog;
