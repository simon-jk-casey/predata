import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  newDevice: {},
  myDevices: {}
}, action) {
  let newState = clone(state)
  const { type, payload } = action
  switch (type) {
    case types.UPDATE_DEVICE_INPUT:
      const newDevice = newState.newDevice
      newDevice[payload.field] = payload.value
      console.log('deviceinput', newDevice)
      return newState
    case types.STORE_DEVICE_DATA:
      newState.myDevices = payload
      return newState
    default:
      return newState
  }
}
