import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    limit: 12,
    totalResults: 0,
  },
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    setPageSize: (state, action) => {
      state.limit = action.payload;
    },
    resetCars: (state) => {
      state.cars = [];
      state.currentPage = 1;
      state.limit = 12; 
      state.totalResults = 0;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...action.payload];
        state.totalResults = action.payload.length;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const {
  nextPage,
  setPageSize,
  resetCars,
} = carSlice.actions;

export default carSlice.reducer;
