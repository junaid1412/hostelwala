import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import { RunSaga, sagaMiddleware } from "./saga"
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./reducer"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)


export { store, persistor, RunSaga }