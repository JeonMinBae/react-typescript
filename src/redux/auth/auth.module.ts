import {ActionType, createAction, createReducer} from "typesafe-actions";
import {ROLE_ADMIN} from "../../utils/auth/roles";

const SET_TOKEN = 'auth/SET_TOKEN' as const;


export interface IAuthState {
    accessToken: string,
    refreshToken: string,
    accessTokenExpireDate: number,
    refreshTokenExpireDate: number,
    role: string,
};

const initialState : IAuthState = {
    accessToken: '',
    refreshToken: '',
    accessTokenExpireDate: 0,
    refreshTokenExpireDate: 0,
    role: ROLE_ADMIN,
};

export const setToken = createAction(SET_TOKEN, (token : IAuthState)  => token)();


const actions = {setToken};
type AuthAction = ActionType<typeof actions>;

const authReducer = createReducer<IAuthState, AuthAction>(initialState,{
    [SET_TOKEN]: (state, {payload: token}) => ({
        ...state,
        ...token,
    }),

});


export default authReducer;