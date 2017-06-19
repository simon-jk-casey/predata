import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import App from './components/App'
import rootReducer from './reducers/index'

const history = createHistory()

const middleware = [routerMiddleware(history), thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
