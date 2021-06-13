import { createAction, handleActions } from "redux-actions";

const SET_LIST = "pages/SET_LIST";
const SET_PAGE = "pages/SET_PAGE";
const SET_TYPE = 'pages/SET_TYPE';

export const setList = createAction(SET_LIST, (data) => data);
export const setPage = createAction(SET_PAGE, (data) => data);
export const setType = createAction(SET_TYPE, (data) => data);

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
            totalView: "",
            date: "",
        },
    ],
    type:''
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
        [SET_TYPE]: (state, { payload: type }) => ({
            ...state,
            type
        })
	},
	initialState
);

export default pages;
