import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

@connect(state => ({
  loginDetails: state.loginDetails
}))

class Login extends React.Component {
  render () {
    return (
      <div>
        <form id='userAuth'>
          <label htmlFor='email'>Email Address: </label>
          <input type='text' name='email' onChange={(evt) => this.props.dispatch(actions.updateLoginDetails(evt.target.name, evt.target.value))} />
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' onChange={(evt) => this.props.dispatch(actions.updateLoginDetails(evt.target.name, evt.target.value))} />
        </form>
          <button form='userAuth' onClick={() => this.props.changePage()}>Login</button>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push('/profile')
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)
