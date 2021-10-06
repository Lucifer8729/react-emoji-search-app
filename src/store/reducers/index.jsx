import { combineReducers } from "redux";

import emojis from "./emoji_reducer";

const appReducers = combineReducers({ emojis });
export default appReducers;
