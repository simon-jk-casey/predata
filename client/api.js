import request from 'superagent'

import { push } from 'react-router-redux'

import * as actions from './actions/index'

const baseUrl = 'http://localhost:3000/api/v1/'

// BUILD IN ERROR HANDLING
// ALSO SUCCESS HANDLING ON SUBMITS

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

// using in component
// export function login (loginData) {
//   request
//     .post(baseUrl + 'auth')
//     .send(loginData)
//     .withCredentials()
//     .end((err, res) => {
//       if (res.status === 200) {
//         actions.toggleAuthenticated()
//       } else {
//         console.log(err)
//       }
//     })
// }

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

export function addDevice (newDevice) {
  request
    .post(baseUrl + 'devices')
    .send(newDevice)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
    })
}

export function addCapture (captureData, callback) {
  request
    .post(baseUrl + 'captureData')
}
