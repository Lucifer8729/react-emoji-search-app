import types from "../types";

const INITIAL_STATE = {
  emoji: [],
  itemCount: 0,
  copiedEmoji: "",
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

    default:
      return state;
  }
};

export default emojiReducer;
