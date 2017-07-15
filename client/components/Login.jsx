import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent'

import * as actions from '../actions/index'

class Login extends React.Component {

  handleSumbit (evt) {
    const {
      loginDetails,
      toggleAuthenticated,
      clearState,
      changePage } = this.props
    evt.preventDefault()
    request
      .post('http://localhost:3000/api/v1/auth')
      .send(loginDetails)
      .withCredentials()
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          toggleAuthenticated()
          clearState('loginDetails')
          changePage('/profile')
        }
      })
  }

  render () {
    const { inputChange } = this.props
    return (
      <div>
        <form id='userAuth' onSubmit={(evt) => this.handleSumbit(evt)}>
          <label htmlFor='email'>Email Address: </label>
          <input
            type='text'
            name='email'
            onChange={(evt) => inputChange(evt)} />
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            onChange={(evt) => inputChange(evt)} />
        </form>
        <button form='userAuth' type='submit'>Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginDetails: state.user.loginDetails
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: (route) =>
    push(route),
  inputChange: (evt) =>
    dispatch(actions.updateLoginDetails(evt.target.name, evt.target.value)),
  toggleAuthenticated: () =>
    actions.toggleAuthenticated(),
  clearState: (category) =>
    actions.clearStateUser(category)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
