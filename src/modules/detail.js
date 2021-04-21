import { createAction, handleActions } from "redux-actions";

const SET_DETAIL = "detail/SET_DETAIL";
const ON_LIKE = "detail/LIKE";
const ON_SHARE = "detail/SHARE";
const SET_REPLY = "detail/SET_REPLY";
const CREATE_REPLY = "detail/CREATE_REPLY";
const DELETE_REPLY = "detail/DELETE_REPLY";

export const setDetail = createAction(SET_DETAIL, (data) => data);
export const onLike = createAction(ON_LIKE);
export const onShare = createAction(ON_SHARE);
export const setReply = createAction(SET_REPLY, (data) => data);
export const createReply = createAction(CREATE_REPLY, (data) => data);
export const deleteReply = createAction(DELETE_REPLY, (data) => data);

export const initialState = {
	content: {
		contentId: 1,
		title: "",
		body: "",
		userId: "",
		img: "",
	},
	likeShare: {
		like: 0,
		share: 0,
		likeActive: true,
		shareActive: true,
	},
	replies: [],
};

const detail = handleActions(
	{
		[SET_DETAIL]: (state, { payload: content }) => ({
			...state,
			contentId: content[0].id,
			content: content[0],
		}),
		[ON_LIKE]: (state) => ({
			...state,
			likeShare: {
				...state.likeShare,
				like: state.likeShare.like + 1,
				likeActive: false,
			},
		}),
		[ON_SHARE]: (state) => ({
			...state,
			likeShare: {
				...state.likeShare,
				share: state.likeShare.share + 1,
				shareActive: false,
			},
		}),
		[SET_REPLY]: (state, { payload: replies }) => ({
			...state,
			replies,
		}),
	},
	initialState
);

export default detail;

// 펑션에 이니셜값만 추가해서 오류 메세지 삭제하고, 각 보드 페이지에 데이터 표시
