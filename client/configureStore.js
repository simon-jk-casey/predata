import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

export default function configureStore() {
  const middleware = [thunk, logger]
  return createStore (
    rootReducer,
    applyMiddleware(...middleware)
  )
}
