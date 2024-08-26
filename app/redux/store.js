// store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import dataReducer from "./slices/dataSlice";
import filterDataReducer from "./slices/filterDataSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
    filterData: filterDataReducer,
  },
});
