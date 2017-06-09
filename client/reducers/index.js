import { combineReducers } from 'redux'

import userReducer from './user'
import predatorDataReducer from './predatorData'
import deviceReducer from './devices'

const rootReducer = combineReducers({
  userReducer,
  predatorDataReducer,
  deviceReducer
})

export default rootReducer
