import {all} from 'redux-saga/effects';
import {userSaga} from "./user/saga/userSaga";

export default function* rootSaga() {
    yield all([
        userSaga(),
    ]);
};