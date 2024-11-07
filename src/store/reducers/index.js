import { combineReducers } from "redux";
import userSlice from "./user";
import commonSlice from "./common";

export default combineReducers({
    user: userSlice.reducer,
    common: commonSlice.reducer
});