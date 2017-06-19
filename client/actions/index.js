import * as types from './actionTypes'

// USER actions

// UNIVERSAL actions
export function init () {
  return {type: types.INIT}
}

export function error (err) {
  return {type: types.ERROR, payload: err}
}

export function userRegistration (field, value) {
  return {type: types.USER_REGISTRATION, payload: {field: field, value: value}}
}

export function updateLoginDetails (field, value) {
  return {type: types.UPDATE_LOGIN_DETAILS, payload: {field: field, value: value}}
}

export function storeUserDetails (userData) {
  return {type: types.STORE_USER_DETAILS, payload: userData}
}

export function updatePredatorInput (field, value) {
  return {type: types.UPDATE_PREDATOR_INPUT, payload: {field: field, value: value}}
}
