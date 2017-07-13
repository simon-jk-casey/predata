import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/index'
import DeviceInput from './DeviceInput'

class DeviceList extends React.Component {
  constructor (props) {
    super(props)
    console.log('DeviceList props:', props)
  }

  componentWillMount () {
    this.props.dispatch(actions.getMyDevices())
  }

  renderComponent () {
    if (this.props.showAddDevice) {
      return (
        <div>
          <div id='devInput'>
            <DeviceInput />
            <h2>device list here</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <button id='showEntry' onClick={(evt) => this.props.dispatch(actions.toggleAddDevice(true))}>Add Device</button>
          <div>
            <h2>device list here</h2>
          </div>
        </div>
      )
    }
  }
  render () {
    return (
      this.renderComponent()
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myDevices: state.devices.myDevices,
    showAddDevice: state.devices.showAddDevice
  }
}

export default connect(mapStateToProps)(DeviceList)
