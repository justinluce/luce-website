import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A7E1",
    },
    secondary: {
      main: "#1D3461",
    },
    warning: {
      main: "#FF4242",
    },
    // Add more color configurations if needed
  },
  customColors: {
    accent: "#1F487E",
    tertiary: "#EDD892",
    disabled: {
      primary: "#00A7E1",
      secondary: "#1D3461",
      accent: "#1F487E",
      warning: "#FF4242",
      tertiary: "#EDD892",
    },
    hover: {
      primary: "#048fbf",
      secondary: "#121f3b",
      accent: "#132d4e",
      warning: "#c93434",
      tertiary: "#EDD892",
    },
  },
  // Add typography, spacing, and other configurations if needed
});

export default theme;
