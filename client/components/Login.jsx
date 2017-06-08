import React from 'react'

class Login extends React.Component {
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
          <button form='userAuth' type='submit'>Login</button>
        </div>
      </div>
    )
  }
}

export default Login
