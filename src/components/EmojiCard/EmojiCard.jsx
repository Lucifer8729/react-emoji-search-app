import React from "react";
import { useDispatch } from "react-redux";
import { copyEmoji } from "../../store/actions";

import { Card, CardHeader, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import "./styles.css";

const EmojiCard = (props) => {
  const [shadow, setShadow] = React.useState(1);
  const dispatch = useDispatch();

  const onMouseOver = () => setShadow(5);
  const onMouseOut = () => setShadow(1);
  const { char, name, group } = props;

  const copyToClipboard = () => {
    dispatch(copyEmoji(char));
  };

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
          <IconButton onClick={copyToClipboard}>
            <ContentCopyIcon sx={{ color: "#67b7f7" }} />
          </IconButton>
        }
        title={name}
        subheader={group}
      />
    </Card>
  );
};

export default EmojiCard;
