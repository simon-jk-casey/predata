import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class Login extends React.Component {
  render () {
    return (
      <div>
        <form id='userAuth'>
          <label htmlFor='email'>Email Address: </label>
          <input type='text' name='email' onChange={(evt) => this.props.inputChange(evt)} />
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' onChange={(evt) => this.props.inputChange(evt)} />
        </form>
        <button form='userAuth' onClick={() => this.props.changePage()}>Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { loginDetails: state.user.loginDetails }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push('/addDevice'),
  inputChange: (evt) => dispatch(actions.updateLoginDetails(evt.target.name, evt.target.value))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
