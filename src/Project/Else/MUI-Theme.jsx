import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c0edfc",
      dark: "#121319",
    },
    background: {
      default: "#121319",
      main: "#c0edfc",
      paper: "#252525",
    },
    text: {
      primary: "#c0edfc",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Macondo", "cursive"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      ss: 450,
      sm: 600,
      md: 900,
      ms: 1050,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
