// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    getData: (state) => {
      return state.data;
    },
  },
});

export const { setData, getData } = dataSlice.actions;

export default dataSlice.reducer;

export const selectData = (state) => state.data.data;
