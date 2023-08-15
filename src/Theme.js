import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#F7FDF0",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#5BC0BE",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#F7FDF0",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      main: "#F7FDF0",
    },
    backgroundSecondary: {
      main: "#5bc08c",
    },
    buttonHover: {
      main: "#3e9f6d",
    },
    textMain: {
      main: "#770324",
    },
    textSecondary: {
      main: "#acd896",
    },
  },
});

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#770324",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#acd896",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#F7FDF0",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      main: "#770324",
    },
    backgroundSecondary: {
      main: "#acd896",
    },
    buttonHover: {
      main: "#53739A",
    },
    textMain: {
      main: "#FEFFFF",
    },
    textSecondary: {
      main: "#6FFFE9",
    },
  },
});
