import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65706b6a09586eff664156af.mockapi.io/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get("/adverts", {
        params: {
          page: params.page,
          limit: params.limit,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

export const { nextPage, setPageSize } = carSlice.actions;
export const selectCars = (state) => state.cars.cars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectCurrentPage = (state) => state.cars.currentPage;
export const selectPageSize = (state) => state.cars.limit;
export const selectTotalResults = (state) => state.cars.totalResults;

export default carSlice.reducer;
