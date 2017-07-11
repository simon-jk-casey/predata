import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    console.log('Profile!', this.props.profileData)
    console.log('props', props)
  }

  componentDidMount () {
    this.props.dispatch(actions.getUserDetails())
  }

  render () {
    const { firstName, lastName, streetAddress, suburb, city, gpsCoords, email } = this.props.profileData
    return (
      <div>
        <div><h3>Welcome back {firstName}!</h3></div>
        <div className='profileWrapper'>
          <div className='profileRow'>
            <div className='profileHeader'><h4>Name:</h4></div>
            <div className='profileData'>{firstName} {lastName}</div>
            <div className='editButton'><button>EDIT</button></div>
          </div>
          <div className='profileRow'>
            <div className='profileHeader'>Address:</div>
            <div className='profileData'>{streetAddress}, {suburb}, {city}</div>
            <div className='editButton'><button>EDIT</button></div>
          </div>
          <div className='profileRow'>
            <div className='profileHeader'>GPS Coordinates:</div>
            <div className='profileData'>{gpsCoords}</div>
            <div className='editButton'><button>EDIT</button></div>
          </div>
          <div className='profileRow'>
            <div className='profileHeader'>Email:</div>
            <div className='profileData'>{email}</div>
            <div className='editButton'><button>EDIT</button></div>
          </div>
          <button>Change Password</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { profileData: state.user.profileData }
}

export default connect(mapStateToProps)(Profile)

// THIS CAN BE REFACTORED METHINKS TO ONE LINE AND SET THE STUFF IN IT AS CLASS PROPERTIES ie <ProfileSection header='dfjskdfs' data={sdfsfd} />
