import React from "react";

import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

const SearchField = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField size="small" label="Search..." variant="outlined" />
    </ThemeProvider>
  );
};

export default SearchField;
