import { combineReducers } from "redux";
import board from "./boards";
import detail from "./detail";

const rootReducer = combineReducers({
	board,
	detail,
});

export default rootReducer;
