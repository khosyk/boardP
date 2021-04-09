import { combineReducers } from "redux";
import pages from "./pages";
import detail from "./detail";

const rootReducer = combineReducers({
	pages,
	detail,
});

export default rootReducer;
