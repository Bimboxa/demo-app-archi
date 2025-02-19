import {createTheme} from "@mui/material/styles";
import {blue, blueGrey, green} from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
        },
      },
    },
  },
  typography: {fontSize: 11},
  palette: {
    shape: {
      default: blueGrey[500],
      selected: green[500],
    },
  },
});

export default theme;
