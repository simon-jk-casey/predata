import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/index'

class DeviceList extends React.Component {
  constructor (props) {
    super(props)
    console.log('DeviceList props:', props)
  }

  componentDidMount () {
    this.props.dispatch(actions.getMyDevices())
  }

  render () {
    return (
      <div>
        <h1>devices will go here</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { myDevices: state.devices.myDevices }
}

export default connect(mapStateToProps)(DeviceList)
