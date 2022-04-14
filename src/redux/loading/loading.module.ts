import {ActionType, createAction, createReducer} from "typesafe-actions";


export interface ILoadingState {
    [propName: string]: boolean,
}

const initialState: ILoadingState = {}

export const START_LOADING = 'loading/START_LOADING' as const;
export const END_LOADING = 'loading/END_LOADING' as const;


export const startLoading = createAction(START_LOADING, (type: string) => type)();
export const endLoading = createAction(END_LOADING, (type: string) => type)();

const actions = {startLoading, endLoading};
type LoadingAction = ActionType<typeof actions>;

const loadingReducer = createReducer<ILoadingState, LoadingAction>(initialState, {
    [START_LOADING]: (state, {payload}) => ({
        ...state,
        [payload]: true,
    }),
    [END_LOADING]: (state, {payload}) => ({
        ...state,
        [payload]: false,
    }),
})

export default loadingReducer;
