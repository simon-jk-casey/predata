import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  newPredator: {},
  selector: {},
  history: []
}, action) {
  const { type, payload } = action
  let newState = clone(state)
  switch (type) {
    case types.UPDATE_PREDATOR_INPUT:
      const newPredator = newState.newPredator
      newPredator[payload.field] = payload.value
      console.log('PE', newPredator)
      return newState
    case types.TOGGLE_SELECTED:
      const selector = newState.selector
      selector.prevPred = selector.predatorSelected
      selector.predatorSelected = payload
      return newState
    case types.CLEAR_STATE_PREDATOR:
      payload === 'history' ? newState[payload] = [] : newState[payload] = {}
      return newState
    default:
      return newState
  }
}
