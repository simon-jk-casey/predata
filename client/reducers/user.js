import clone from 'clone'

import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function (state = initialState, action) {
  let newState = clone(state)
  switch (action.type) {
    case types.INIT:
      return newState
    default:
      return newState
  }
}
