import { createAction, handleActions } from "redux-actions";

const SET_LIST = "pages/SET_LIST";
const SET_PAGE = "pages/SET_PAGE";

export const setList = createAction(SET_LIST, (data) => data);
export const setPage = createAction(SET_PAGE, (data) => data);

const initialState = {
	page: {
		currentPage: 1,
		totalPage: 1,
		listCount: 20,
	},
	contents: [
		{
			id: "",
			title: "",
			reviewTotal: "",
			totalReview: "",
			date: "",
		},
	],
};

const pages = handleActions(
	{
		[SET_LIST]: (state, { payload: contents }) => ({
			...state,
			contents,
		}),
		[SET_PAGE]: (state, { payload: page }) => ({
			...state,
			page,
		}),
	},
	initialState
);

export default pages;
