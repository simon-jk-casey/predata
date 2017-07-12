import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'
import DeviceInput from './DeviceInput'

class DeviceList extends React.Component {
  constructor (props) {
    super(props)
    console.log('DeviceList props:', props)
  }

  componentDidMount () {
    this.props.dispatch(actions.getMyDevices())
  }

  addDeviceHandler () {
    document.getElementById('devInput').className = 'devEntry'
    document.getElementById('showEntry').className = 'hidden'
  }

  render () {
    return (
      <div>
        <button id='showEntry' onClick={() => this.addDeviceHandler()}>Add Device</button>
        <div id='devInput' className='hidden'>
          <DeviceInput />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { myDevices: state.devices.myDevices }
}

export default connect(mapStateToProps)(DeviceList)
