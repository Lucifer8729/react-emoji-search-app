import React, { useEffect } from "react";

import { CircularProgress, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useSelector, useDispatch } from "react-redux";
import { loadEmoji } from "../../store/actions";

import EmojiCard from "../EmojiCard/EmojiCard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmojiList = () => {
  const list = useSelector((state) => state.emojis.emoji);
  const last_item = useSelector((state) => state.emojis.itemCount);
  const searchKey = useSelector((state) => state.emojis.searchItem);

  const dispatch = useDispatch();
  // console.log(list);

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadEmoji(0, 25));
    }, 100);
  }, [dispatch]);

  const handleLoading = () => {
    dispatch(loadEmoji(last_item, 25, searchKey));
  };

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
        {list.length !== 0 ? (
          list.map((emoji) => (
            <Grid item key={emoji.codes} xs={12} sm={6} md={4} lg={3}>
              <EmojiCard {...emoji} />
            </Grid>
          ))
        ) : (
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <CircularProgress />
          </Grid>
        )}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={2}
      >
        {list.length !== 0 && last_item < 4589 ? (
          <IconButton
            sx={{
              bgcolor: "#42a5f5",
              "&: hover": {
                bgcolor: "#67b7f7",
              },
            }}
            onClick={handleLoading}
          >
            <ExpandMoreIcon sx={{ color: "white" }} />
          </IconButton>
        ) : null}
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default EmojiList;
