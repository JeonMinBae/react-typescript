import loadable from '@loadable/component';
import Loader from "../components/layout/Loader";

export const Home = loadable(() => import('../pages/Home'), {fallback: <Loader/>});
export const Users = loadable(() => import('../pages/Users'), {fallback: <Loader/>});
export const NotFound = loadable(() => import('../pages/NotFound'), {fallback: <Loader/>});