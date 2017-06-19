import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  newPredator: {}
}, action) {
  const { type, payload } = action
  let newState = clone(state)
  switch (type) {
    case types.UPDATE_PREDATOR_INPUT:
      const newPredator = newState.newPredator
      newPredator[payload.field] = payload.value
      console.log('PE', newPredator)
      return newState
    default:
      return newState
  }
}
