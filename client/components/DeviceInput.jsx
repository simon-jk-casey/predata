import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class DeviceInput extends React.Component {
  render () {
    const { inputChange, changePage } = this.props
    return (
      <div>
        <form id='deviceEntry'>
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
              <select id='devType' defaultValue='null' onChange={(evt) => inputChange(evt)} name='deviceType'>
                <option value='null disabled'>Select Device Type</option>
                <option value='killTrap'>Kill Trap</option>
                <option value='captureTrap'>Capture Trap</option>
                <option value='poison'>Poison</option>
                <option value='detectionDevice'>Detection Device</option>
              </select>
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
          <button>SUBMIT</button>
          <button>CANCEL</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { newDevice: state.devices.newDevice }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push(''),
  inputChange: (evt) => dispatch(actions.updateDeviceInput(evt.target.name, evt.target.value))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInput)
