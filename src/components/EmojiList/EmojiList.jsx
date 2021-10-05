import React from "react";
import emoji from "emoji.json";

import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import EmojiCard from "../EmojiCard/EmojiCard";

const list = [];
for (let i = 0; i < 1000; i += 20) {
  list.push(emoji[i]);
}

const EmojiList = () => {
  return (
    <Box
      pt={4}
      pl={4}
      pr={4}
      sx={{
        height: "100vh",
        overflowY: "auto",
        bgcolor: "#e3f2fd",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {list.map((emoji) => (
          <Grid item key={emoji.codes} xs={12} sm={6} md={4} lg={3}>
            <EmojiCard {...emoji} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EmojiList;
