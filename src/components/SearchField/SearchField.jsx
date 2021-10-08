import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { searchEmoji } from "../../store/actions/index";

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
  const [input, setInput] = useState("");
  const list = useSelector((state) => state.emojis.emoji);
  const last_item = useSelector((state) => state.emojis.itemCount);
  const dispatch = useDispatch();
  const { classes } = props;

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
  };

  // useEffect(() => {
  //   dispatch(searchEmoji(last_item, 25, input, list));
  // }, [input, dispatch, last_item, list]);

  return (
    <ThemeProvider theme={theme}>
      <TextField
        sx={{ width: "100%" }}
        size="small"
        label="Search"
        variant="outlined"
        InputLabelProps={{ className: classes.multilineColor }}
        value={input}
        onChange={handleChange}
      />
    </ThemeProvider>
  );
};

export default withStyles(styles)(SearchField);
