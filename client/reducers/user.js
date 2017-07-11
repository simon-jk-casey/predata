import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  isFetching: false,
  isAuthenticating: false,
  isAuthenticated: false,
  loginDetails: {},
  newUser: {},
  profileData: {}
}, action) {
  const { type, payload } = action
  let newState = clone(state)
  switch (type) {
    case types.USER_REGISTRATION:
      const newUser = newState.newUser
      newUser[payload.field] = payload.value
      console.log(newUser)
      return newState
    case types.UPDATE_LOGIN_DETAILS:
      const loginDetails = newState.loginDetails
      loginDetails[payload.field] = payload.value
      console.log(loginDetails)
      return newState
    case types.STORE_USER_DETAILS:
      newState.profileData = payload
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

// SEPERATE REGISTRATION AND USER REDUCERS WITH EXPORT FUNCTION - DO ON OTHERS SO CAN GO DRY ON FORM UPDATE REDUCER CALLS?
