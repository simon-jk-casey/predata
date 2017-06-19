import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  newPredatorEntry: {}
}, action) {
  const { type, payload } = action
  let newState = clone(state)
  switch (type) {
    case types.UPDATE_PREDATOR_INPUT:
      const newPredatorEntry = newState.newPredatorEntry
      newPredatorEntry[payload.field] = payload.value
      console.log('PE', newPredatorEntry)
      return newState
    default:
      return newState
  }
}
