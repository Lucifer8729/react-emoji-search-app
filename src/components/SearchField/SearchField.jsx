import React from "react";

import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

const styles = (theme) => ({
  multilineColor: {
    color: "white",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
});

const SearchField = (props) => {
  const { classes } = props;

  return (
    <ThemeProvider theme={theme}>
      <TextField
        sx={{ width: "100%" }}
        size="small"
        label="Search..."
        variant="outlined"
        InputLabelProps={{ className: classes.multilineColor }}
      />
    </ThemeProvider>
  );
};

export default withStyles(styles)(SearchField);
