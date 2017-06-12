import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {}, action) {
  let newState = clone(state)
  switch (action.type) {
    default:
      return newState
  }
}
