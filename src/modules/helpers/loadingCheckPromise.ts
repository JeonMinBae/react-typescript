import {store} from "../../redux/configureStore";
import {ISagaState} from "../../redux/ISagaState";

const loadingCheckPromise = <T>(actionType: string, state: () => ISagaState): Promise<T> => {
    console.log('loadingCheckPromise loading[GET_USERS]', store.getState().loading[actionType])


    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            // console.log('store.getState().loading[actionType]', store.getState().loading[actionType])
            console.log('state.response[actionType]', state().response[actionType])
            console.log('store.getState().loading', store.getState().loading)
            if (!store.getState().loading[actionType]) {
                clearInterval(intervalId);
                if (state().error[actionType]) {
                    reject(state().response[actionType]);
                } else {
                    console.log('state', store.getState().user)
                    resolve(state().response[actionType]);
                }
            }
        }, 100);
    });
}

export default loadingCheckPromise;