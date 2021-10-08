import emoji from "emoji.json";
import { showToast } from "../../components/EmojiList/utils";

export const loadMoreEmoji = (curr, interval = 25, searchKey = "") => {
  // for getting tags

  // const tags = [];
  // for (let j = 0; j < 4589; ++j) {
  //   tags.push(emoji[j].subgroup);
  // }
  // const tag = [...new Set(tags)];
  // console.log(tag);

  const list = [];
  let i = 0;
  if (!searchKey) {
    for (i = curr; i < curr + interval && i < 4589; ++i) {
      list.push(emoji[i]);
    }
  } else {
    for (i = curr; list.length < interval && i < 4589; ++i) {
      console.log(i);
      if (emoji[i].name.includes(searchKey.toLowerCase())) {
        list.push(emoji[i]);
      }
    }
  }

  return { list: list, i: i };
};

export const copyEmoji = (emoji) => {
  console.log(emoji);
  navigator.clipboard.writeText(emoji);
  showToast("SUCCESS", `${emoji} copied to clipboard`);

  return { copiedEmoji: emoji };
};

export const searchEmoji = (curr, interval = 25, searchKey, curr_list) => {
  const list = [];
  let i = 0;
  for (i = curr; i < curr + interval && i < 4589; ++i) {
    list.push(emoji[i]);
  }
  curr_list.push(...list);

  const filteredList = curr_list.filter((emoji) =>
    emoji.name.includes(searchKey.toLowerCase())
  );

  if (filteredList.length === 0) {
    const newList = loadMoreEmoji(0, interval, searchKey);
    return { list: newList.list, i: newList.i, searchItem: searchKey };
  }

  return { list: filteredList, i: i, searchItem: searchKey };
};
