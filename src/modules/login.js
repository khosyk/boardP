import { createAction, handleActions } from "redux-actions";

// 1. 회원가입이 되어있는가? ->  2. 회원 확인 3. 로그인 정보 확인 4. 페이지 이동 (다른페이지에서도 유지)

const SET_LOGIN = "login/SET_LOGIN";
const LOGOUT = "login/LOGOUT";

export const setLogin = createAction(SET_LOGIN, (data) => data);
export const logout = createAction(LOGOUT);

export const initialState = {
	user: {
		email: "",
		name: "",
	},
	userActive: false,
};

const login = handleActions(
	{
		[SET_LOGIN]: (state, { payload }) => ({
			...state,
			user: {
				email: payload.email,
				name: payload.name,
			},
			userActive: true,
    }),
		[LOGOUT]: (state) => ({
			...state,
      user: {
        email: '',
        name:''
      },
			userActive: false,
		}),
	},
	initialState
);

export default login;
