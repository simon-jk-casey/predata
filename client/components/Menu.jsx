import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  unauthMenu () {
    return (
      <div className='menuBar'>
        <Link to='/register'>
          <button className='menuButton'>REGISTER</button>
        </Link>
        <button className='menuButton'>ABOUT</button>
        <button className='menuButton'>CONTACT</button>
        <Link to='/history'>
          <button className='menuButton'>TEST</button>
        </Link>
      </div>
    )
  }

  authMenu () {
    return (
      <div className='menuBar'>
        <Link to='/profile'>
          <button className='menuButton'>Profile</button>
        </Link>
        <Link to='/addDevice'>
          <button className='menuButton'>My Devices</button>
        </Link>
        <Link to='/addPredator'>
          <button className='menuButton'>Capture Entry</button>
        </Link>
        <Link to='/history'>
          <button className='menuButton'>Capture History</button>
        </Link>
        <Link to='/test'>
          <button className='menuButton'>Data Views</button>
        </Link>
        <Link to='/'>
          <button className='menuButton'>Log Out</button>
        </Link>
      </div>
    )
  }

  menuPicker () {
    if (!this.props.isAuthenticated) {
      return this.unauthMenu()
    } else {
      return this.authMenu()
    }
  }

  render () {
    return (
      this.menuPicker()
    )
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.global.isAuthenticated }
}

export default connect(mapStateToProps)(Menu)
