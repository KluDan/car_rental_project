import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard";
import {
  fetchCars,
  selectCars,
  selectIsLoading,
  selectError,
  selectCurrentPage,
  selectPageSize,
  selectTotalResults,
} from "../../redux/carSlice";

import { StyledCatalogContainer } from "./CarsCatalog.styled";
import LoadMoreBtn from "../LoadMoreBtn";

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);
  const limit = useSelector(selectPageSize);
  const totalResults = useSelector(selectTotalResults);

  const isMounted = useRef(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLoadMore = async () => {
    setScrollPosition(window.scrollY);

    dispatch(fetchCars({ page: currentPage + 1, limit, append: true }));
  };

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [cars]);

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
      {totalResults >= limit && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </StyledCatalogContainer>
  );
};

export default CarsCatalog;
