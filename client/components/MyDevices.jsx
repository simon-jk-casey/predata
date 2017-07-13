import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/index'
import DeviceInput from './DeviceInput'
import DeviceList from './DeviceList'

class MyDevices extends React.Component {
  constructor (props) {
    super(props)
    console.log('My Devices props:', props)
  }

  renderComponent () {
    if (this.props.showAddDevice) {
      return (
        <div>
          <div id='devInput'>
            <DeviceInput />
            <DeviceList />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <button id='showEntry' onClick={(evt) => this.props.dispatch(actions.toggleAddDevice(true))}>Add Device</button>
          <div>
            <DeviceList />
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

export default connect(mapStateToProps)(MyDevices)
