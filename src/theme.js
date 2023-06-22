import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1877f2",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
