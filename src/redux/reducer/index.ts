import { combineReducers, } from "redux";
import { persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

import { dummy } from "./dummy";
import { auth } from "./auth"

const authConfig = {
    key: 'auth',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, auth)
})

export default rootReducer;