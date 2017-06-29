import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  newPredator: {},
  predatorToggled: {},
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
      if (!selector.isToggled || selector.isToggled == null) {
        selector.isToggled = true
      } else {
        selector.isToggled = false
      }
      selector.predatorSelected = payload
      return newState
    default:
      return newState
  }
}
