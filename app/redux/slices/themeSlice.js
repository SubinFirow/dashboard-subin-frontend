// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark", // initial theme mode
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode, toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
