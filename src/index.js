//reset.cssはこの位置に固定
import './styles/reset.css'

//ここから記述
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import { store } from './store'
import './styles/index.css'

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
)