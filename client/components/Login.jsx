import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <form id='userAuth'>
          <label htmlFor='email'>Email Address: </label>
          <input type='text' name='email' />
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' />
        </form>
        <div>
          <button onClick={() => this.props.changePage()}>Login</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/test')
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)
