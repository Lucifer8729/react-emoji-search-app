import types from "../types";
import * as utils from "./utils";

export const loadEmoji = (...args) => ({
  type: types.LOAD_EMOJI,
  payload: utils.loadMoreEmoji(...args),
});

export const copyEmoji = (emoji) => ({
  type: types.COPY_EMOJI,
  payload: utils.copyEmoji(emoji),
});
