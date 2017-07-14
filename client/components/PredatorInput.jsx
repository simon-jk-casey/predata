import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'

import * as actions from '../actions/index'

import PredatorSelector from './PredatorSelector'

class PredatorInput extends React.Component {
  constructor (props) {
    super(props)
    console.log('predInput props', props)
  }

  componentWillMount () {
    this.props.dispatch(actions.getMyDevices())
  }

  selectorOptions (deviceData, index) {
    const { id, deviceName, deviceType } = deviceData
    return (
      <option key={index} value={id}>
        {deviceName} ~ {deviceType}
      </option>
    )
  }

  resetForm (formId, stateCat) {
    document.getElementById(formId).resetForm
    this.props.dispatch(actions.clearState(stateCat))
  }

  handleSubmit (evt) {
    evt.preventDefault()
    request
    .post('http://localhost:3000/api/v1/captureData')
    .send(this.props.newPredator)
    .withCredentials()
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
        this.resetForm('predatorEntry', 'newPredator')
      }
    })
  }

  handleCancel (evt) {
    evt.preventDefault()
    this.resetForm('predatorEntry', 'newPredator')
  }

  render () {
    const { updatePredatorInput } = actions
    return (
      <div>
        <form id='predatorEntry' onSubmit={(evt) => this.handleSubmit(evt)}>
          <div className='deviceSelector'>
            <select
              id='deviceSelect'
              onChange={(evt) => this.props.dispatch(updatePredatorInput('deviceId', evt.target.value))}
              defaultValue='null'>
              <option value='null disabled'>Select Device</option>
              {this.props.myDevices.map((device, index) => this.selectorOptions(device, index))}
            </select>
          </div>
          <div className='errorField'><p id='errorMsg'></p></div>
          <PredatorSelector />
          <div>
            <textarea
              className='predNotes'
              onChange={(evt) => this.props.dispatch(updatePredatorInput('predNotes', evt.target.value))}
              name='predatorNotes'
              rows='6'
              cols='60'
              wrap='soft'
              maxLength='240' />
          </div>
        </form>
        <div className='buttonDiv'>
          <button form='predatorEntry' type='submit'>SUBMIT</button>
          <button onClick={(evt) => this.handleCancel(evt)}>CANCEL</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newPredator: state.predator.newPredator,
    myDevices: state.devices.myDevices
  }
}

export default connect(mapStateToProps)(PredatorInput)
