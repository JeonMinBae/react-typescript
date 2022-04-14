import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import ConfigureStore from '../redux/configureStore';
import {setToken} from "../redux/auth/auth.module";
import {ROLE_ADMIN} from "../utils/auth/roles";


// const {store} = ConfigureStore();

const axiosInstance = axios.create({
    baseURL: 'http://localhost:10000',
    timeout: 2000,
});

axiosInstance.interceptors.request.use(
    function (config: AxiosRequestConfig) : AxiosRequestConfig{
        // const headers : AxiosRequestHeaders = {
        //     ...config.headers,
        //     'Content-Type': 'application/json; charset=utf-8',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Credentials': 'true',
        //     'Content-Authorization': store.getState().auth.accessToken,
        // }
        // config.headers = headers;

        return config;
    }
)

axiosInstance.interceptors.response.use(
    function (response: AxiosResponse) : AxiosResponse{
        // if(response.headers["authorization"] &&
        //     response.headers["authorization"].length > 7){
        //     console.log('response.headers["authorization"]', response.headers["authorization"])
        //
        //     store.dispatch(setToken({
        //         accessToken: response.headers["authorization"],
        //         accessTokenExpireDate: 0,
        //         refreshToken: response.headers["authorization"],
        //         refreshTokenExpireDate: 0,
        //         role: ROLE_ADMIN,
        //     }));
        // }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)

export default axiosInstance;