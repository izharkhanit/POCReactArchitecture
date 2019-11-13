import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import Sagas from './sagas'
import rootReducer from '../../apps/store/modules/reducer'

const isDev = process.env.NODE_ENV !== 'production'

export function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [
        sagaMiddleware,
        ...(isDev ? [createLogger({ collapsed: true })] : [])
    ]
    const args = [applyMiddleware(...middlewares)]
    const store = createStore(rootReducer, compose(...args))

    /**
     * Run the redux saga
     */
    sagaMiddleware.run(Sagas)
    return store;
}
