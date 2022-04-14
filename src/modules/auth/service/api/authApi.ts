import axiosInstance from "../../../axiosinstance";
import {AUTH_URL, OAUTH2_URL, SIGN_IN_URL, SIGN_UP_URL} from "./url";
import {ISignInDto} from "../../interface/ISignInDto";
import {ISignUpDto} from "../../interface/ISignUpDto";
import {IOAuth2SignInDto} from "../../interface/IOAuth2SignInDto";

const authApi  = {
    signIn: (bodyData: ISignInDto) => axiosInstance.post(`${AUTH_URL}${SIGN_IN_URL}`, bodyData),
    signUp: (bodyData: ISignUpDto) => axiosInstance.post(`${AUTH_URL}${SIGN_UP_URL}`, bodyData),
    // oauth2Test: bodyData => axiosInstance.post(`/api/auth/oauth2/sign-up`, bodyData),
    oauth2SignIn: (bodyData: IOAuth2SignInDto) => axiosInstance.post(`${AUTH_URL}${OAUTH2_URL}${SIGN_IN_URL}`, bodyData),
};

export default authApi;