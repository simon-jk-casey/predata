import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  loginDetails: {},
  newUser: {},
  profileData: {
    // firstName: 'Test',
    // lastName: 'Ing',
    // streetAddress: '224 Mitchell St',
    // suburb: 'Brooklyn',
    // city: 'Wellington',
    // gpsCoords: '0, -1',
    // email: 'jesusiwasevil@gmail.com'
  }
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
    default:
      return newState
  }
}

// SEPERATE REGISTRATION AND USER REDUCERS WITH EXPORT FUNCTION - DO ON OTHERS SO CAN GO DRY ON FORM UPDATE REDUCER CALLS?
