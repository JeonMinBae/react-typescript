import {UserType} from "../../../utils/enum/UserType";

export interface ICreateUserDto {
    userId: string,
    userPassword: string,
    userName: string,
    userNickName: string,
    userType: UserType,
}