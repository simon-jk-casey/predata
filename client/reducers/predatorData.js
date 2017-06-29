import clone from 'clone'

import * as types from '../actions/actionTypes'

export default function (state = {
  newPredator: {},
  predatorToggled: {},
  selector: {},
  history: [
    {
      captureId: 1,
      captureDate: '27th Aug 2017',
      predCaptured: 'Mouse',
      predNotes: 'Hairy',
      deviceName: 'Trappy McTrapface',
      deviceType: 'Kill Trap',
      deviceNotes: 'By the long drop'
    },
    {
      captureId: 2,
      captureDate: '29th Aug 2017',
      predCaptured: 'Ferret',
      predNotes: 'Bitey',
      deviceName: 'Trappy McTrapface',
      deviceType: 'Kill Trap',
      deviceNotes: 'By the long drop'
    },
    {
      captureId: 3,
      captureDate: '31st Aug 2017',
      predCaptured: 'Feral Cat',
      predNotes: 'Someones pet?',
      deviceName: 'Trappy McTrapface',
      deviceType: 'Kill Trap',
      deviceNotes: 'By the long drop'
    }
  ]
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
