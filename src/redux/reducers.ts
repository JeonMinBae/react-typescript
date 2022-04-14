import {combineReducers} from "redux";
import authReducer from "./auth/auth.module";
import languageReducer from "./language/language.module";
import userReducer from "./user/user.module";
import loadingReducer from "./loading/loading.module";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    language: languageReducer,
    loading: loadingReducer,


});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

