import axiosInstance from "../../../axiosinstance";
import {USER_URL} from "./url";
import {ICreateUserDto} from "../../interface/ICreateUserDto";
import {IUpdateUserDto} from "../../interface/IUpdateUserDto";


const userApi = {
    // getUsers: () => axiosInstance.get(`${USER_URL}`),
    getUsers: () => axiosInstance.get(`${USER_URL}/test`),
    getUser: (index : number | string) => axiosInstance.get(`${USER_URL}/${index}`),
    createUser: (bodyData : ICreateUserDto) => axiosInstance.post(`${USER_URL}`, bodyData),
    deleteUser: (index : number | string) => axiosInstance.delete(`${USER_URL}/${index}`),
    updateUser: (bodyData : IUpdateUserDto) => axiosInstance.patch(`${USER_URL}`, bodyData),
}

export default userApi;



