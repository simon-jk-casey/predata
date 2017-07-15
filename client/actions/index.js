import * as types from './actionTypes'
import request from 'superagent'

const baseUrl = 'http://localhost:3000/api/v1/'

// ------------ //
// USER ACTIONS //
// ------------ //
export function userRegistration (field, value) {
  return {type: types.USER_REGISTRATION, payload: {field: field, value: value}}
}

export function updateLoginDetails (field, value) {
  return {type: types.UPDATE_LOGIN_DETAILS, payload: {field: field, value: value}}
}

export function storeUserDetails (userData) {
  return {type: types.STORE_USER_DETAILS, payload: userData}
}

export function clearStateUser (category) {
  return {type: types.CLEAR_STATE_USER, payload: category}
}

export function getUserDetails () {
  return (dispatch) => {
    dispatch(toggleFetching())
    request
      .get(baseUrl + 'user')
      .withCredentials()
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          dispatch(toggleFetching())
          dispatch(storeUserDetails(res.body[0]))
        }
      })
  }
}

// -------------- //
// DEVICE ACTIONS //
// -------------- //
export function updateDeviceInput (field, value) {
  return {type: types.UPDATE_DEVICE_INPUT, payload: {field: field, value: value}}
}

export function toggleAddDevice (bool) {
  return {type: types.TOGGLE_ADD_DEVICE, payload: bool}
}

export function clearStateDevices (category) {
  return {type: types.CLEAR_STATE_DEVICES, payload: category}
}

export function getMyDevices () {
  return (dispatch) => {
    dispatch(toggleFetching())
    request
      .get(baseUrl + 'myDevices')
      .withCredentials()
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log('devicedata', res.body)
          dispatch(toggleFetching())
          dispatch(storeDeviceData(res.body))
        }
      })
  }
}

export function storeDeviceData (deviceData) {
  return {type: types.STORE_DEVICE_DATA, payload: deviceData}
}

// ---------------- //
// PREDATOR ACTIONS //
// ---------------- //
export function updatePredatorInput (field, value) {
  return {type: types.UPDATE_PREDATOR_INPUT, payload: {field: field, value: value}}
}

export function toggleSelected (element) {
  return {type: types.TOGGLE_SELECTED, payload: element}
}

export function clearStatePredator (category) {
  return {type: types.CLEAR_STATE_PREDATOR, payload: category}
}

export function getCaptureHistory () {
  return (dispatch) => {
    dispatch(toggleFetching())
    request
    .get(baseUrl + 'myCaptureData')
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(toggleFetching())
        dispatch(storeCaptureHistory(res.body))
      }
    })
  }
}

export function storeCaptureHistory (captureHistory) {
  return {type: types.STORE_CAPTURE_HISTORY, payload: captureHistory}
}

// -------------- //
// GLOBAL ACTIONS //
// -------------- //
export function init () {
  return {type: types.INIT}
}

export function toggleFetching () {
  return {type: types.TOGGLE_FETCHING}
}

export function toggleAuthenticated () {
  return {type: types.TOGGLE_AUTHENTICATED}
}

// -------------- //
// UNUSED ACTIONS //
// -------------- //
// export function error (err) {
//   return {type: types.ERROR, payload: err}
// }
