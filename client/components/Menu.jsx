import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Menu extends React.Component {

  menuButtons (cats, index) {
    return (
      <Link key={index} to={cats.route}>
        <button>{cats.title}</button>
      </Link>
    )
  }

  unauthMenu () {
    const buttonCats = [
      {route: '/register', title: 'Register'},
      {route: '/test', title: 'About'},
      {route: '/test', title: 'Contact'}
    ]
    return (
      <div className='menuBar'>
        {buttonCats.map((cats, index) => this.menuButtons(cats, index))}
      </div>
    )
  }

  authMenu () {
    const buttonCats = [
      {route: '/profile', title: 'Profile'},
      {route: '/myDevices', title: 'My Devices'},
      {route: '/addPredator', title: 'Capture Entry'},
      {route: '/history', title: 'Capture History'},
      {route: '/test', title: 'Data Views'},
      {route: '/', title: 'Log Out'}
    ]
    return (
      <div className='menuBar'>
        {buttonCats.map((cats, index) => this.menuButtons(cats, index))}
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
