import emoji from "emoji.json";
import { showToast } from "../../components/EmojiList/utils";

export const loadMoreEmoji = (curr, interval = 25) => {
  const list = [];
  let i = 0;
  for (i = curr; i < curr + interval && i < 4589; ++i) {
    list.push(emoji[i]);
  }

  return { list: list, i: i };
};

export const copyEmoji = (emoji) => {
  console.log(emoji);
  navigator.clipboard.writeText(emoji);
  showToast("SUCCESS", `${emoji} copied to clipboard`);

  return { copiedEmoji: emoji };
};
