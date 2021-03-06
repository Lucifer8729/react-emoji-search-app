import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { searchEmoji } from "../../store/actions/index";

import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

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

const CssTextField = styled(TextField)({
  //   ".MuiInputLabel-root": {
  //     color: "red",
  //   },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputBase-root": {
    color: theme.palette.primary.main,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchEmoji(last_item, 25, input, list));
  };

  // useEffect(() => {
  //   dispatch(searchEmoji(last_item, 25, input, list));
  // }, [input, dispatch, last_item, list]);

  return (
    <form onSubmit={handleSubmit}>
      <CssTextField
        sx={{ width: "100%" }}
        size="small"
        label="Search"
        variant="outlined"
        InputLabelProps={{ className: classes.multilineColor }}
        value={input}
        onChange={handleChange}
      />
    </form>
  );
};

export default withStyles(styles)(SearchField);
