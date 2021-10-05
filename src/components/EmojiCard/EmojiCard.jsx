import React from "react";

import { Paper } from "@mui/material";

const EmojiCard = (props) => {
  const { char, name, category } = props;
  return <Paper sx={{ m: 3 }}>{char}</Paper>;
};

export default EmojiCard;
