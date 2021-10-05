import React from "react";
import emoji from "emoji.json";

import { Box } from "@mui/system";

import EmojiCard from "../EmojiCard/EmojiCard";

const list = [];
for (let i = 0; i < 10; ++i) {
  list.push(emoji[i]);
}

const EmojiList = () => {
  return (
    <Box
      pt={4}
      pl={4}
      style={{
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {list.map((emoji) => (
        <EmojiCard key={emoji.codes} {...emoji} />
      ))}
    </Box>
  );
};

export default EmojiList;
