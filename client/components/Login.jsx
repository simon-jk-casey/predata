import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../api'
import * as actions from '../actions/index'

class Login extends React.Component {

  handleSumbit (evt) {
    evt.preventDefault()
    login(this.props.loginDetails)
    this.props.changePage('/profile')
  }

  render () {
    return (
      <div>
        <form id='userAuth' onSubmit={(evt) => this.handleSumbit(evt)}>
          <label htmlFor='email'>Email Address: </label>
          <input type='text' name='email' onChange={(evt) => this.props.inputChange(evt)} />
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' onChange={(evt) => this.props.inputChange(evt)} />
        </form>
        <button form='userAuth' type='submit'>Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { loginDetails: state.user.loginDetails }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: (route) => push(route),
  inputChange: (evt) => dispatch(actions.updateLoginDetails(evt.target.name, evt.target.value))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
