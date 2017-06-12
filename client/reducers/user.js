import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {}, action) {
  const { type, payload } = action
  let newState = clone(state)
  switch (type) {
    case types.USER_REGISTRATION:
      const newUser = newState.newUser
      newUser[payload.field] = payload.value
      return newState
    case types.UPDATE_LOGIN_DETAILS:
      const loginDetails = newState.loginDetails
      loginDetails[payload.field] = payload.value
      console.log(loginDetails)
      return newState
    case types.STORE_USER_DETAILS:
      newState.userDetails = payload
      return newState
    default:
      return newState
  }
}
