import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B0FC51",
      dark: "#181818",
    },
    background: {
      default: "#181818",
      green: "#B0FC51",
      paper: "#252525",
    },
    text: {
      primary: "#B0FC51",
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
