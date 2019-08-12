//reset.cssはこの位置に固定
import './styles/reset.css'

//ここから記述
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import chatReducer from './reducers/chats'
import './styles/index.css'

const store = createStore(
    chatReducer,
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)