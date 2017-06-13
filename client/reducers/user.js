import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  loginDetails: {
    email: null,
    password: null
  },
  newUser: {
    firstName: null,
    lastName: null,
    streetAddress: null,
    suburb: null,
    city: null,
    gpsCoords: null,
    email: null,
    password: null
  },
  profileData: {
    firstName: 'Test',
    lastName: 'Ing',
    streetAddress: '224 Mitchell St',
    suburb: 'Brooklyn',
    city: 'Wellington',
    gpsCoords: '0, -1',
    email: 'jesusiwasevil@gmail.com'
  }
}, action) {
  const { type, payload } = action
  let newState = clone(state)
  switch (type) {
    case types.USER_REGISTRATION:
      console.log('firing')
      const newUser = newState.newUser
      newUser[payload.field] = payload.value
      console.log(newUser)
      return newState
    case types.UPDATE_LOGIN_DETAILS:
      const loginDetails = newState.loginDetails
      loginDetails[payload.field] = payload.value
      return newState
    case types.STORE_USER_DETAILS:
      newState.profileData = payload
      return newState
    default:
      return newState
  }
}
