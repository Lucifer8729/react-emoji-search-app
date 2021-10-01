import React from "react";

import { Grid } from "@mui/material";

import SearchPanel from "./components/SearchPanel/SearchPanel";
import EmojiList from "./components/EmojiList/EmojiList";

function App() {
  return (
    <Grid container>
      <Grid item xs={2}>
        <SearchPanel />
      </Grid>
      <Grid item xs={10}>
        <EmojiList />
      </Grid>
    </Grid>
  );
}

export default App;
