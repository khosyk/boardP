import { createAction, handleActions } from "redux-actions";

// 1. 회원가입이 되어있는가? ->  2. 회원 확인 3. 로그인 정보 확인 4. 페이지 이동 (다른페이지에서도 유지)

const SET_LOGIN = 'login/SET_LOGIN';

export const setLogin = createAction(SET_LOGIN, (data) => data);

export const initialState = {
    user: {
        userId: "",
        userActive: false,
    }
};

const login = handleActions(
    {
        [SET_LOGIN]: (state, { payload: userId }) => ({
            ...state,
            user: {
                userId,
                userActive: true,
            }
        })
    },
    initialState
)


export default login;

