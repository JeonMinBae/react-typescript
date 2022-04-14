import {UserType} from "../../../utils/enum/UserType";

export interface IUpdateUserDto {
    userName: string,
    userNickName: string,
    userType: UserType,
}