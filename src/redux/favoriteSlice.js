import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    selectedCarIds: [],
    selectedCars: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addSelectedCarId: (state, action) => {
      const carId = action.payload;
      if (!state.selectedCarIds.includes(carId)) {
        state.selectedCarIds.push(carId);
      }
    },
    removeSelectedCarId: (state, action) => {
      const carId = action.payload;
      state.selectedCarIds = state.selectedCarIds.filter((id) => id !== carId);
      state.selectedCars = state.selectedCars.filter((car) => car.id !== carId);
    },
    setSelectedCars: (state, action) => {
      state.selectedCars = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addSelectedCarId,
  removeSelectedCarId,
  setSelectedCars,
  setLoading,
  setError,
} = favoriteSlice.actions;

export const selectSelectedCarIds = (state) => state.favorite.selectedCarIds;
export const selectSelectedCars = (state) => state.favorite.selectedCars;
export const selectIsLoading = (state) => state.favorite.isLoading;
export const selectError = (state) => state.favorite.error;

export default favoriteSlice.reducer;
