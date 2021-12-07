import createSagaMiddleware from 'redux-saga'
import RootSaga from "./saga"

export const sagaMiddleware = createSagaMiddleware()

export function RunSaga(){
    sagaMiddleware.run(RootSaga)
}
