import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65706b6a09586eff664156af.mockapi.io/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectCars = (state) => state.cars.cars;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export default carSlice.reducer;
