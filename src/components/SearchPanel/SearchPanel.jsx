import React from "react";

import { Box, Typography } from "@mui/material";

import SearchField from "../SearchField/SearchField";
// import TagsList from "../TagsList/TagsList";

const SearchPanel = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        bgcolor: "#42a5f5",
        pl: 2,
        pr: 2,
        pt: 4,
      }}
    >
      <Typography variant="h4" sx={{ color: "white", mb: 2 }}>
        Emojipedia :
      </Typography>
      <SearchField />
      {/* <TagsList /> */}
    </Box>
  );
};

export default SearchPanel;
