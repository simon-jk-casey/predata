import { combineReducers } from 'redux'
import clone from 'clone'

import * as types from '../actions/actionTypes'
import userReducer from './user'
import predatorDataReducer from './predatorData'
import deviceReducer from './devices'
import { routerReducer } from 'react-router-redux'

function globalReducer (state = {
  isAuthenticated: false,
  isFetching: false
}, action) {
  let newState = clone(state)
  switch (action.type) {
    case types.INIT:
      return newState
    case types.ERROR:
      newState.error = action.payload
      return newState
    case types.TOGGLE_AUTHENTICATED:
      if (!newState.isAuthenticated) {
        newState.isAuthenticated = true
      } else {
        newState.isAuthenticated = false
      }
      return newState
    case types.TOGGLE_FETCHING:
      if (!newState.isFetching) {
        newState.isFetching = true
      } else {
        newState.isFetching = false
      }
      return newState
    default:
      return newState
  }
}

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  predator: predatorDataReducer,
  devices: deviceReducer,
  routing: routerReducer
})

export default rootReducer
