export interface ISagaState {
    response: {[actionType: string]: any,},
    error: {[actionType: string]: boolean,},
    // loading: object,
}