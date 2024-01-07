import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    inputValue: "",
    filterPriceValue: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setFilterPriceValue: (state, action) => {
      state.filterPriceValue = action.payload;
    },
  },
});

export const { setInputValue, setFilterPriceValue } = filterSlice.actions;

export default filterSlice.reducer;


