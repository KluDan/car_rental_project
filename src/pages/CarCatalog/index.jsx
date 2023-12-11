import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CarsCatalog from "../../components/CarsCatalog/CarsCatalog";
import FilterSection from "../../components/FilterSection/FilterSection";
import LoadMoreBtn from "../../components/LoadMoreBtn";

import { StyledCatalogContainer } from "./CarCatalog.styled";

import {
  selectCurrentPage,
  selectIsLoading,
  selectPageSize,
  selectTotalResults,
} from "../../redux/selectors";
import { fetchCars } from "../../redux/operations";

const index = () => {
  const dispatch = useDispatch();
  const totalResults = useSelector(selectTotalResults);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const limit = useSelector(selectPageSize);

  const handleLoadMore = async () => {
    dispatch(fetchCars({ page: currentPage + 1, limit, append: true }));
  };

  return (
    <StyledCatalogContainer>
      <FilterSection />
      <CarsCatalog />
      {totalResults >= limit && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </StyledCatalogContainer>
  );
};

export default index;
