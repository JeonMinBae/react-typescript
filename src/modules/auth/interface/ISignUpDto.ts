import {UserType} from "../../../utils/enum/UserType";

export interface ISignUpDto {
    userId: string,
    userName: string,
    userNickName: string,
    userType: UserType,
}