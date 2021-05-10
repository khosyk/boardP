import { combineReducers } from "redux";
import pages from "./pages";
import detail from "./detail";
import login from "./login";

const rootReducer = combineReducers({
	pages,
	detail,
	login,
});

export default rootReducer;
