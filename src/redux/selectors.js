export const selectCars = (state) => state.cars.cars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectCurrentPage = (state) => state.cars.currentPage;
export const selectPageSize = (state) => state.cars.limit;
export const selectTotalResults = (state) => state.cars.totalResults;
