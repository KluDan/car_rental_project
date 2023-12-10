import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    selectedCarIds: [],
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
    },
  },
});

export const { addSelectedCarId, removeSelectedCarId } = favoriteSlice.actions;
export const selectSelectedCarIds = (state) => state.favorite.selectedCarIds;

export default favoriteSlice.reducer;
