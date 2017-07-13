import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { addDevice } from '../api'

class DeviceInput extends React.Component {
  constructor (props) {
    super(props)
    console.log('inputprops', props)
  }

  deviceSelector () {
    const types = [
      {value: 'null disabled', title: 'Select Device Type'},
      {value: 'killTrap', title: 'Kill Trap'},
      {value: 'captureTrap', title: 'Capture Trap'},
      {value: 'poison', title: 'Poison'},
      {value: 'chewCard', title: 'Chew Card'}
    ]
    return (
      <select id='deviceType' defaultValue='null' onChange={(evt) => this.props.inputChange(evt)} name='deviceType'>
        {types.map((type, index) => <option key={index} value={type.value}>{type.title}</option>)}
      </select>
    )
  }

  handleSumbit (evt) {
    evt.preventDefault()
    addDevice(this.props.newDevice)
    this.props.toggleAddDevice(false)
    this.props.clearState('newDevice')
  }

  handleCancel (evt) {
    evt.preventDefault()
    this.props.toggleAddDevice(false)
    this.props.clearState('newDevice')
  }

  render () {
    const { inputChange } = this.props
    return (
      <div>
        <form id='deviceEntry' onSubmit={(evt) => this.handleSumbit(evt)}>
          <div className='addDeviceRow'>
            <div>
              <label htmlFor='devName'><p>Device Name:</p></label>
            </div>
            <div>
              <input id='devName' type='text' onChange={(evt) => inputChange(evt)} name='deviceName' />
            </div>
          </div>
          <div className='addDeviceRow'>
            <div>
              <label htmlFor='devType'><p>Device Type:</p></label>
            </div>
            <div>
              {this.deviceSelector()}
            </div>
          </div>
          <div className='addDeviceRow'>
            <label htmlFor='devNotes'><p>Device Notes:</p></label>
          </div>
          <div>
            <textarea id='devNotes' name='deviceNotes' onChange={(evt) => inputChange(evt)} rows='6' cols='60' wrap='soft' maxLength='240' />
          </div>
        </form>
        <div>
          <button form='deviceEntry' type='submit'>SUBMIT</button>
          <button onClick={(evt) => this.handleCancel(evt)}>CANCEL</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newDevice: state.devices.newDevice,
    showAddDevice: state.devices.showAddDevice
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  inputChange: (evt) => dispatch(actions.updateDeviceInput(evt.target.name, evt.target.value)),
  toggleAddDevice: (bool) => dispatch(actions.toggleAddDevice(bool)),
  clearState: (category) => dispatch(actions.clearState(category))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInput)
