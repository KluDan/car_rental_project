import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarsCatalog from "../../components/CarsCatalog/CarsCatalog";
import DropDownMakes from "../../components/DropDownMakes/DropDownMakes";
import FilterSection from "../../components/FilterSection/FilterSection";
import LoadMoreBtn from "../../components/LoadMoreBtn";
import {
  fetchCars,
  selectCars,
  selectCurrentPage,
  selectIsLoading,
  selectPageSize,
  selectTotalResults,
} from "../../redux/carSlice";
import { StyledCatalogContainer } from "./CarCatalog.styled";

const index = () => {
  const dispatch = useDispatch();
  const totalResults = useSelector(selectTotalResults);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const limit = useSelector(selectPageSize);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [totalResults, scrollPosition]);

  const handleLoadMore = async () => {
    setScrollPosition(window.scrollY);

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
