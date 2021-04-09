import { createAction, handleActions } from "redux-actions";

const SET_LIST = "pages/SET_LIST";

export const setList = createAction(SET_LIST, (data) => data);

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
	},
	initialState
);

export default pages;
