import { combineReducers } from "redux";
import pages from "./pages";
import detail from "./detail";
import login from "./login";
import edit from "./edit";

const rootReducer = combineReducers({
	pages,
	detail,
	edit,
	login,
});

export default rootReducer;
