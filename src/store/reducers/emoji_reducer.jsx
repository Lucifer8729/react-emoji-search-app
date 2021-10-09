import types from "../types";

const INITIAL_STATE = {
  emoji: [],
  itemCount: 0,
  copiedEmoji: "",
  searchItem: "",
};

const emojiReducer = (state = INITIAL_STATE, action) => {
  //   console.log(action);
  switch (action.type) {
    case types.LOAD_EMOJI:
      return {
        ...state,
        emoji: [...state.emoji, ...action.payload.list],
        itemCount: action.payload.i,
      };

    case types.COPY_EMOJI:
      return {
        ...state,
        ...action.payload,
      };

    case types.EMOJI_SEARCH:
      return {
        ...state,
        emoji: [...action.payload.list],
        itemCount: action.payload.i,
        searchItem: action.payload.searchItem,
      };

    case types.FILTER_BY_TAGS:
      return {
        ...state,
        emoji: [...action.payload.list],
        itemCount: action.payload.i,
      };

    default:
      return state;
  }
};

export default emojiReducer;
