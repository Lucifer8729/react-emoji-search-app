import emoji from "emoji.json";
import { showToast } from "../../components/EmojiList/utils";

export const loadMoreEmoji = (
  curr,
  interval = 25,
  searchKey = "",
  tagList = []
) => {
  // for getting tags

  // const tags = [];
  // for (let j = 0; j < 4589; ++j) {
  //   tags.push(emoji[j].subgroup);
  // }
  // const tag = [...new Set(tags)];
  // console.log(tag);

  let list = [];
  let i = 0;
  if (!searchKey) {
    for (i = curr; i < curr + interval && i < 4589; ++i) {
      list.push(emoji[i]);
    }
  } else {
    for (i = curr; list.length < interval && i < 4589; ++i) {
      // console.log(i);
      if (emoji[i].name.includes(searchKey.toLowerCase())) {
        list.push(emoji[i]);
      }
    }
  }

  // if (tagList.length !== 0) {
  //   list = [];
  //   for (i = curr; list.length < interval && i < 4589; ++i) {
  //     if (tagList.includes(emoji[i].subgroup)) {
  //       list.push(emoji[i]);
  //     }
  //   }
  // }

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

  const n = filteredList.length;
  if (filteredList.length === 0 || filteredList.length === n) {
    const newList = loadMoreEmoji(0, interval, searchKey);
    return { list: newList.list, i: newList.i, searchItem: searchKey };
  }

  return { list: filteredList, i: i, searchItem: searchKey };
};

export const searchByTags = (curr, interval = 25, tagList, curr_list) => {
  const list = [];
  let i = 0;
  const n = curr_list.length;
  for (i = curr; i < curr + interval && i < 4589; ++i) {
    list.push(emoji[i]);
  }

  curr_list.push(...list);
  console.log(curr_list, tagList);

  const filteredList = curr_list.filter((emoji) =>
    tagList.includes(emoji.subgroup)
  );

  if (filteredList.length === n) {
    const newList = loadMoreEmoji(0, interval, "", tagList);
    return { list: newList.list, i: newList.i, tags: true };
  }

  console.log(filteredList);

  return { list: filteredList, i: i, tags: tagList };
};
