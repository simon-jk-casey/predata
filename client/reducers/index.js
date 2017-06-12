import { combineReducers } from 'redux'
import clone from 'clone'

import * as types from '../actions/actionTypes'
import userReducer from './user'
import predatorDataReducer from './predatorData'
import deviceReducer from './devices'

function universalReducer (state = {
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
    default:
      return newState
  }
}

const rootReducer = combineReducers({
  universalReducer,
  userReducer,
  predatorDataReducer,
  deviceReducer
})

export default rootReducer
