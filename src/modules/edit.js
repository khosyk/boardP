import { createAction, handleActions } from "redux-actions";

const SET_EDIT = "edit/SET_EDIT";

export const setEdit = createAction(SET_EDIT, (data) => data);

const initialState = {
	content: {
		title: "",
		body: "",
		image: "",
	},
};

const edit = handleActions(
	{
		[SET_EDIT]: (state, { payload: content }) => ({
			...state,
			title: content.title,
			body: content.body,
		}),
	},
	initialState
);

export default edit;
