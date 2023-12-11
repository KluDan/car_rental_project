import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard";

import { selectCars, selectError, selectPageSize } from "../../redux/selectors";
import {
  addSelectedCarId,
  removeSelectedCarId,
  selectSelectedCarIds,
} from "../../redux/favoriteSlice";
import { StyledCatalogContainer } from "./FavoriteCarsCatalog.styled";
import { fetchAllCars } from "../../redux/operations";

const FavoriteCatalog = () => {
  const dispatch = useDispatch();
  const allCars = useSelector(selectCars);
  const error = useSelector(selectError);
  const limit = useSelector(selectPageSize);
  const selectedCarIds = useSelector(selectSelectedCarIds);

  const isMounted = useRef(false);

  useEffect(() => {
    const localStorageCarIds = localStorage.getItem("favoriteCarIds");

    if (localStorageCarIds) {
      const carIds = JSON.parse(localStorageCarIds);

      carIds.forEach((carId) => {
        dispatch(addSelectedCarId(carId));
      });
    }

    dispatch(fetchAllCars());
  }, [dispatch, limit]);

  const handleHeartClick = (carId) => {
    if (selectedCarIds.includes(carId)) {
      dispatch(removeSelectedCarId(carId));
    } else {
      dispatch(addSelectedCarId(carId));
    }
  };

  const filteredCars = allCars.filter((car) => selectedCarIds.includes(car.id));

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledCatalogContainer>
      {filteredCars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          isFavorite={true}
          onHeartClick={() => handleHeartClick(car.id)}
        />
      ))}
    </StyledCatalogContainer>
  );
};

export default FavoriteCatalog;
