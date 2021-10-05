import React from "react";

import { Box, Container, Typography } from "@mui/material";

import SearchField from "../SearchField/SearchField";
import TagsList from "../TagsList/TagsList";

const SearchPanel = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        bgcolor: "#42a5f5",
      }}
    >
      <Container>
        <Typography variant="h2">EMOJI</Typography>
        <SearchField />
        <TagsList />
      </Container>
    </Box>
  );
};

export default SearchPanel;
