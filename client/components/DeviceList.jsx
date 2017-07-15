import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'

class DeviceList extends React.Component {

  componentWillMount () {
    this.props.dispatch(actions.getMyDevices())
  }

  deviceCell (deviceData, index) {
    const { deviceName, deviceType, deviceNotes } = deviceData
    return (
      <div key={index}>
        <div className='deviceRow'>
          <div>
            <h4 className='deviceLabel'>Device Name: </h4><p>{deviceName}</p>
          </div>
          <div>
            <h4 className='deviceLabel'>Device Type: </h4><p>{deviceType}</p>
          </div>
        </div>
        <div>
          <h4 className='deviceLabel'>Device Notes: </h4><p>{deviceNotes}</p>
        </div>
      </div>
    )
  }

  render () {
    if (this.props.isFetching) {
      return (
        <div><h2>LOADING</h2></div>
      )
    } else {
      return (
        <div>
          {
            this.props.myDevices.map((device, index) =>
              this.deviceCell(device, index))
          }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    myDevices: state.devices.myDevices,
    isFetching: state.global.isFetching
  }
}

export default connect(mapStateToProps)(DeviceList)
