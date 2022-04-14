import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";

export interface IOAuth2SignInDto {
    provider: string,
    providerId: GoogleLoginResponse | GoogleLoginResponseOffline,
    profileObj: GoogleLoginResponse | GoogleLoginResponseOffline,
    tokenObj: GoogleLoginResponse | GoogleLoginResponseOffline,
};