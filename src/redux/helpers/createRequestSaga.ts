import {call, put} from "redux-saga/effects";
import {AsyncActionCreatorBuilder, PayloadAction} from "typesafe-actions";
import getSuccessFailureType from "./getSuccessFailureType";
import {AxiosError} from "axios";
import {ISagaState} from "../ISagaState";
import {endLoading, START_LOADING, startLoading} from "../loading/loading.module";

export type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
    return action.payload !== undefined;
}

export default function createRequestSaga<T1, P1, T2, P2, T3>(
    type: string,
    // asyncActionCreator: AsyncActionCreatorBuilder<[T1, any], [T2, ISagaState], [T3, AxiosError]>,
    asyncActionCreator: AsyncActionCreatorBuilder<[T1, any], [T2, any], [T3, any]>,
    promiseCreator: PromiseCreatorFunction<P1, P2>,
) {
    // const SUCCESS = `${type}_SUCCESS`;
    // const FAILURE = `${type}_FAILURE`;
    // const [, SUCCESS, FAILURE] = getSuccessFailureType(type);

    return function* (action: ReturnType<typeof asyncActionCreator.request>): any {
        yield put(startLoading(type));

        try {
            const result = isPayloadAction<P1>(action) ? yield call(promiseCreator, action.payload) : yield call(promiseCreator);

            yield put(asyncActionCreator.success({
                type: type,
                response: result,
            }));
            // yield put({
            //     type: type+"_SUCCESS",
            //     payload: {response: result, type: type, error: false},
            // });


        } catch (error) {
            yield put(asyncActionCreator.failure({
                type: type,
                response: error,
            }));
            // yield put({
            //     type: FAILURE,
            //     payload: error,
            // });
        }
        yield put(endLoading(type));
    }

}