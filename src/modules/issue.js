import { createAction, handleAction, handleActions } from "redux-actions";

const SET_LIST = "issue/SET_LIST";

export const setList = createAction(SET_LIST, (data) => data);

const initialState = [
	{
		page: {
			currentPage: 1,
			totalPage: 1,
			listCount: 20,
		},
		contents: [
			{
				id: "",
				title: "",
				content: "",
				img: "",
				contentUserName: "",
				contentDate: "",
				reviewTotal: "",
				reviews: [
					{
						reviewUserName: "",
						reviewId: "",
						reviewContent: "",
						reviewAddress: "",
						reviewPassword: "",
						reviewDate: "",
					},
				],
			},
		],
	},
];

const issue = handleActions(
	{
		[SET_LIST]: (state, { payload }) => ({
			...state,
			payload,
		}),
	},
	initialState
);

export default issue;
