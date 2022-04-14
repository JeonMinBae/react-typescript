import * as path from './path';
import {ROLE_ADMIN, ROLE_CONSUMER, ROLE_SELLER} from "../utils/auth/roles";
import {
    Home, NotFound,
    Users
} from "./componentSplitting";

// export interface IRoutes {
//     title: string,
//     path: string,
//     component: any,
//     // exact: true,
//     roles: string[],
//     children: IRoutes[],
// }[]


const routes = [
    {
        title: 'Home',
        path: path.HOME_PATH,
        component: <Home/>,
        // exact: true,
        roles: [ROLE_ADMIN, ROLE_CONSUMER, ROLE_SELLER],
        children: [],
    },
    {
        title: 'Users',
        path: path.USERS_PATH,
        component: <Users/>,
        // exact: true,
        roles: [ROLE_CONSUMER],
        children: [],
    },
    {
        title: 'Users detail',
        path: path.USER_DETAIL_PATH(':userId'),
        component: <Home/>,
        // exact: true,
        roles: [ROLE_ADMIN],
        children: [],
    },
    //위의 path에 걸러지지 않은 모든 경로를 Not Found 화면으로 이동
    {
        title: 'Not Found',
        path: path.All_PATH,
        component: <NotFound/>,
        // exact: true,
        roles: [ROLE_ADMIN, ROLE_CONSUMER, ROLE_SELLER],
        children: [],
    }
];

export default routes;