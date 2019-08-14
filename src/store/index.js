import { 
    createStore as ReduxCreateStore,
    combineReducers,
    applyMiddleware 
} from 'redux'
import logger from 'redux-logger'
import {routerReducer,routerMiddleware} from 'react-router-redux'
import chatReducer from '../reducers/chats'

export const store = ReduxCreateStore(
    chatReducer,
    applyMiddleware(logger)
)