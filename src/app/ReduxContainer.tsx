import persistor, {store} from "../redux/configureStore";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import loadable from '@loadable/component';
import Loader from "../components/layout/Loader";


const AppContainer = loadable(() => import('./AppContainer'), {fallback: <Loader/>});

export default () => (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader/>}>
            <AppContainer/>
        </PersistGate>
    </Provider>
);