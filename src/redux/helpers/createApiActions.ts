import {ISagaState} from "../ISagaState";

const createApiAction = (actionTypes: string[]) => {
    const actionType : {
        [propName: string]: any,
    }= {};
    const actionTypeSuccess : {
        [propName: string]: any,
    }= {};
    const actionTypeFailure : {
        [propName: string]: any,
    }= {};

    for (let type of actionTypes) {
        actionType[type] = (state: ISagaState) => ({
            ...state,
        });

        actionTypeSuccess[type + '_SUCCESS'] = (state : ISagaState, {payload}: any) => ({
            ...state,
            response: {
                ...state.response,
                [payload.type]: payload.response,
            },
            error: {
                ...state.error,
                [payload.type]: false,
            },
        });


        actionTypeFailure[type + '_FAILURE'] = (state : ISagaState, {payload}: any) => ({
            ...state,
            response: {
                ...state.response,
                [payload.type]: payload.response,
            },
            error: {
                ...state.error,
                [payload.type]: true,
            },
        });
    }

    return {
        ...actionType,
        ...actionTypeSuccess,
        ...actionTypeFailure,
    }
};

export default createApiAction;