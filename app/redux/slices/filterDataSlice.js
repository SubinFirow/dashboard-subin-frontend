// filterDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterData: {},
};

const filterDataSlice = createSlice({
  name: "filterData",
  initialState,
  reducers: {
    setFilterData: (state, action) => {
      state.data = action.payload;
    },
    getFilterData: (state) => {
      return state.data;
    },
  },
});

export const { setFilterData, getFilterData } = filterDataSlice.actions;

export default filterDataSlice.reducer;

export const selectFilterData = (state) => state.filterData.data;
