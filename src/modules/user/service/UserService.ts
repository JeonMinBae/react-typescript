import {store} from "../../../redux/configureStore";
import {ICreateUserDto} from "../interface/ICreateUserDto";
import {createUser, GET_USERS, getUser, getUsers} from "../../../redux/user/user.module";
import loadingCheckPromise from "../../helpers/loadingCheckPromise";


const dispatch = store.dispatch;

const UserService = {
    getUsers: () => {
        dispatch(getUsers.request());
        console.log('store.getState().loading[GET_USERS]', store.getState().loading[GET_USERS])

        // return loadingCheckPromise(GET_USERS, store.getState().user);
        return loadingCheckPromise(GET_USERS, () => store.getState().user);

        // return new Promise((resolve, reject) => {
        //     const intervalId = setInterval(() => {
        //         if(!store.getState().loading[GET_USERS]){
        //             clearInterval(intervalId);
        //             if(store.getState().user.error[GET_USERS]){
        //                 reject(store.getState().user.response[GET_USERS]);
        //             }else{
        //                 resolve(store.getState().user.response[GET_USERS]);
        //             }
        //         }
        //     }, 50);
        // });
    },
    getUser: (index : number | string) : void => {
        dispatch(getUser.request(index));
    },
    createUser: (bodyData : ICreateUserDto) => {
        // dispatch(createUser(bodyData));
        dispatch(createUser.request(bodyData));
    },
    deleteUser: (index : number | string) : void => {

    },
    updateUser: (index : number | string) : void => {

    },
};

export default UserService;