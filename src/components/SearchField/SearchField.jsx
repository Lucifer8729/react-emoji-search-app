import React from "react";

import { TextField, Autocomplete } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
}));

const SearchField = () => {
  const classes = useStyles();
  return (
    <>
      <Autocomplete
        size={"small"}
        id="free-solo-demo"
        sx={{
          inputRoot: {
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          },
        }}
        freeSolo
        options={[{ label: "Hello" }, { label: "world" }]}
        renderInput={(params) => (
          <TextField {...params} color="secondary" label="Search..." />
        )}
      />
    </>
  );
};

export default SearchField;
