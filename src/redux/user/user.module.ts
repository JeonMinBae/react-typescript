import {ActionType, AsyncActionCreatorBuilder, createAsyncAction, createReducer, getType} from "typesafe-actions";
import createApiAction from "../helpers/createApiActions";
import {ICreateUserDto} from "../../modules/user/interface/ICreateUserDto";
import getSuccessFailureType from "../helpers/getSuccessFailureType";
import {AxiosError} from "axios";
import {IUpdateUserDto} from "../../modules/user/interface/IUpdateUserDto";
import {ISagaState} from "../ISagaState";
import getRequestSuccessFailure from "../helpers/getRequestSuccessFailure";
import {AnyAction} from "redux";


const initialState : ISagaState = {
    response: {},
    error: {},
    // loading: {},
};

export const GET_USERS = 'user/GET_USERS' as const;
export const GET_USER = 'user/GET_USER' as const;
export const CREATE_USER = 'user/CREATE_USER' as const;
export const UPDATE_USER = 'user/UPDATE_USER' as const;
export const DELETE_USER = 'user/DELETE_USER' as const;


export const getUsers = createAsyncAction(...getSuccessFailureType(GET_USERS))<void, ISagaState, AxiosError>();
export const getUser = createAsyncAction(...getSuccessFailureType(GET_USER))<string | number, ISagaState, AxiosError>();
export const createUser = createAsyncAction(...getSuccessFailureType(CREATE_USER))<ICreateUserDto, ISagaState, AxiosError>();
export const updateUser = createAsyncAction(...getSuccessFailureType(UPDATE_USER))<IUpdateUserDto, ISagaState, AxiosError>();
export const deleteUser = createAsyncAction(...getSuccessFailureType(DELETE_USER))<string | number, ISagaState, AxiosError>();


// const actions = {
//     ...getRequestSuccessFailure(getUsers),
//     ...getRequestSuccessFailure(getUser),
//     ...getRequestSuccessFailure(createUser),
//     ...getRequestSuccessFailure(updateUser),
//     ...getRequestSuccessFailure(deleteUser),
// };

const actions = {
    GET_USERS,
    GET_USER,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,

    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};

type UserAction = ActionType<typeof actions>;


// function createAsyncReducer<AC extends AsyncActionCreatorBuilder<any, any, any>>(
//     asyncActionCreator: AC,
// ) {
//     return (state: ISagaState, action: AnyAction) => {
//         // 각 액션 생성함수의 type 을 추출해줍니다.
//         const [request, success, failure] = getRequestSuccessFailure(asyncActionCreator).map(getType);
//         switch (action.type) {
//             case request:
//                 return {
//                     ...state,
//                 };
//             case success:
//                 return {
//                     ...state,
//                     response: {
//                         ...state.response,
//                         [action.payload.type]: action.payload.response,
//                     },
//                     error: {
//                         ...state.error,
//                         [action.payload.type]: false,
//                     },
//                 };
//             case failure:
//                 return {
//                     ...state,
//                     response: {
//                         ...state.response,
//                         [action.payload.type]: action.payload.response,
//                     },
//                     error: {
//                         ...state.error,
//                         [action.payload.type]: true,
//                     },
//                 };
//             default:
//                 return state;
//         }
//     };
// }
//
//
// const userReducer = createReducer<ISagaState, UserAction>(initialState)
//     .handleAction(
//         getRequestSuccessFailure(getUsers),
//         createAsyncReducer(getUsers),
//     )
// ;



const userReducer = createReducer<ISagaState, UserAction>(
    initialState,
    createApiAction([
            GET_USERS,
            GET_USER,
            CREATE_USER,
            UPDATE_USER,
            DELETE_USER,
        ]
    )
);


export default userReducer;



