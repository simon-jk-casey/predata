import * as types from './actionTypes'
import request from 'superagent'
import { push } from 'react-router-redux'
import { browserHistory } from 'react-router'

const baseUrl = 'http://localhost:3000/api/v1/'


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

export function updateDeviceInput (field, value) {
  return {type: types.UPDATE_DEVICE_INPUT, payload: {field: field, value: value}}
}

export function toggleSelected (element) {
  return {type: types.TOGGLE_SELECTED, payload: element}
}

export function toggleFetching () {
  return {type: types.TOGGLE_FETCHING}
}

export function toggleAuthenticated () {
  return {type: types.TOGGLE_AUTHENTICATED}
}

export function getUserDetails () {
  return (dispatch) => {
    dispatch(toggleFetching())
    request
      .get(baseUrl + 'user')
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
