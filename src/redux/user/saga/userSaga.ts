import { throttle, takeEvery } from "redux-saga/effects";
import {
    GET_USER,
    GET_USERS,
    CREATE_USER,
    DELETE_USER,
    UPDATE_USER,

    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from "../user.module";
import createRequestSaga from "../../helpers/createRequestSaga";
import userApi from "../../../modules/user/service/api/userApi";


const getUsersSaga = createRequestSaga(   GET_USERS, getUsers, userApi.getUsers);
const getUserSaga = createRequestSaga(    GET_USER, getUser, userApi.getUser);
const createUserSaga = createRequestSaga( CREATE_USER, createUser, userApi.createUser);
const updateUserSaga = createRequestSaga( DELETE_USER, updateUser, userApi.updateUser);
const deleteUserSaga = createRequestSaga( UPDATE_USER, deleteUser, userApi.deleteUser);

// const getUsersSaga = createRequestSaga(GET_USERS,userApi.getUsers);
// const getUserSaga = createRequestSaga(GET_USER,userApi.getUser);
// const createUserSaga = createRequestSaga(CREATE_USER,userApi.createUser);
// const updateUserSaga = createRequestSaga(UPDATE_USER,userApi.updateUser);
// const deleteUserSaga = createRequestSaga(DELETE_USER,userApi.removeUser);

export function * userSaga(){
    yield throttle(3000, CREATE_USER, createUserSaga);
    yield takeEvery(GET_USERS, getUsersSaga);
    yield takeEvery(GET_USER, getUserSaga);
    yield throttle(1000, UPDATE_USER, updateUserSaga);
    yield takeEvery(DELETE_USER, deleteUserSaga);
}