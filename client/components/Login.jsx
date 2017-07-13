import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent'

import { login } from '../api'
import * as actions from '../actions/index'

class Login extends React.Component {

  handleSumbit (evt) {
    evt.preventDefault()
    request
      .post('http://localhost:3000/api/v1/auth')
      .send(this.props.loginDetails)
      .withCredentials()
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          this.props.toggleAuthenticated()
          this.props.clearState('loginDetails')
          this.props.changePage('/profile')
        }
      })
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
  return {
    loginDetails: state.user.loginDetails
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: (route) => push(route),
  inputChange: (evt) => dispatch(actions.updateLoginDetails(evt.target.name, evt.target.value)),
  toggleAuthenticated: () => actions.toggleAuthenticated(),
  clearState: (category) => actions.clearState(category)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
