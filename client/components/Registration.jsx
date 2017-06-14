import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class Registration extends React.Component {
  render () {
    return (
      <div>
        <form id='userRegistration'>
          <input onChange={(evt) => this.props.inputChange(evt)} type='text' name='firstName' placeholder='First Name' />
          <input onChange={(evt) => this.props.inputChange(evt)} type='text' name='lastName' placeholder='Last Name' />
          <input onChange={(evt) => this.props.inputChange(evt)} type='text' name='streetAddress' placeholder='Street Address' />
          <input onChange={(evt) => this.props.inputChange(evt)} type='text' name='suburb' placeholder='Suburb' />
          <input onChange={(evt) => this.props.inputChange(evt)} type='text' name='city' placeholder='City' />
          <input onChange={(evt) => this.props.inputChange(evt)} type='text' name='gpsCoords' placeholder='GPS Coordinates' />
          <input onChange={(evt) => this.props.inputChange(evt)} type='email' name='email' placeholder='Email Address' />
          <input onChange={(evt) => this.props.inputChange(evt)} type='password' name='password' placeholder='Password' />
        </form>
        <button form='userRegistration' onClick={() => this.props.changePage()}>REGISTER</button>
        <button>CANCEL</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { newUser: state.user.newUser }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push('/'),
  inputChange: (evt) => dispatch(actions.userRegistration(evt.target.name, evt.target.value))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
