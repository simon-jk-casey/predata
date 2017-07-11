import request from 'superagent'

import { push } from 'react-router-redux'

import * as actions from './actions/index'

const baseUrl = 'http://localhost:3000/api/v1/'

// BUILD IN ERROR HANDLING

export function registration (registrationData) {
  request
    .post(baseUrl + 'register')
    .send(registrationData)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
    })
}

export function login (loginData, dispatch) {
  request
    .post(baseUrl + 'auth')
    .send(loginData)
    .withCredentials()
    .end((err, res) => {
      if (res.status === 200) {
        actions.toggleAuthenticated()
      } else {
        console.log(err)
      }
    })
}

export function getUser (callback) {
  request
    .get(baseUrl + 'user')
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        actions.storeUserDetails(res.body)
      }
    })
}

export function getMyDevices (callback) {
  request
    .get(baseUrl + 'myDevices')
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

export function addDevice (newDevice, callback) {
  request
    .post(baseUrl + 'devices')
    .send(newDevice)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback()
      }
    })
}

export function addCapture (captureData, callback) {
  request
    .post(baseUrl + 'captureData')
}
