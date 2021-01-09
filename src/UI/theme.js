import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#0000ffbd";
const black = "#000000";

export default createMuiTheme({
  palette: {
    common: {
      blue: blue,
      orange: black,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: black,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: blue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: blue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: blue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 800,
      fontFamily: "Raleway",
      color: blue,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: black,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "0.725rem",
      color: black,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: black,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 40,
    },
  },
  overrides: {
    MuiTableCell: {
      alignRight: {
        textAlign: "-webkit-right",
      },
    },
  },
});
