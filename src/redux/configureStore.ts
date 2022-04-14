import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import sagas from './sagas';

const persistConfig = {
    key: `persist_store`,
    storage,
    whitelist: [''],
}

const rootReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);
sagaMiddleware.run(sagas);


export default persistor;


// export default () => {
//     const sagaMiddleware = createSagaMiddleware();
//
//     const store = createStore(
//         rootReducer,
//         composeWithDevTools(applyMiddleware(sagaMiddleware)),
//     );
//
//     const persistor = persistStore(store);
//     sagaMiddleware.run(sagas);
//
//     return {persistor, store};
// }