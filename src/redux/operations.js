import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
      const allCars = response.data;

      const localStorageCarIds = localStorage.getItem("favoriteCarIds");
      const selectedCarIds = localStorageCarIds
        ? JSON.parse(localStorageCarIds)
        : [];

      const filteredCars = allCars.filter((car) =>
        selectedCarIds.includes(car.id)
      );

      return filteredCars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCars = createAsyncThunk(
  "cars/fetchCars",
  async (params, thunkAPI) => {
    console.log("Fetching cars with params:", params);
    try {
      const response = await axios.get("/adverts", {
        params: {
          page: params.page,
          limit: params.limit,
          make: params.make,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
