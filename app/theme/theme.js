// theme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = {
  palette: {
    mode: "light",
    common: {
      // black
      primary: "#f2f2f2",
      // white
      secondary: "#000000",
      // dark gray
      shadow: "#ffffff",
      // gray
      overlay: "#6F6F6F",
      // purple
      focus: "#6279FB",
      // sky
      vibrant: "#61CCFA",
      // green
      tertiary: "#D9FA54",
      // yellow
      quaternary: "#F5FA61",
    },
  },
};

export const getTheme = (mode) => {
  return createTheme(lightTheme);
};
