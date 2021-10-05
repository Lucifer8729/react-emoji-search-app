import React from "react";

import { Card, CardHeader, IconButton } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import "./styles.css";

const EmojiCard = (props) => {
  const [shadow, setShadow] = React.useState(1);

  const onMouseOver = () => setShadow(3);
  const onMouseOut = () => setShadow(1);
  const { char, name, group } = props;

  return (
    <Card
      sx={{ m: 1 }}
      elevation={shadow}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <CardHeader
        avatar={<div className="emoji-container">{char}</div>}
        action={
          <IconButton>
            <FileCopyIcon />
          </IconButton>
        }
        title={name}
        subheader={group}
      />
    </Card>
  );
};

export default EmojiCard;
