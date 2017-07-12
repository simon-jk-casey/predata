import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { registration } from '../api'
import * as actions from '../actions/index'

class Registration extends React.Component {
  constructor (props) {
    super(props)
    this.fieldPropsArr = [
      {name: 'firstName', placeholder: 'First Name', type: 'text'},
      {name: 'lastName', placeholder: 'Last Name', type: 'text'},
      {name: 'streetAddress', placeholder: 'Street Address', type: 'text'},
      {name: 'suburb', placeholder: 'Suburb', type: 'text'},
      {name: 'city', placeholder: 'City', type: 'text'},
      {name: 'gpsCoords', placeholder: 'GPS Coordinates', type: 'text'},
      {name: 'email', placeholder: 'Email Address', type: 'email'},
      {name: 'password', placeholder: 'Password', type: 'password'}
    ]
  }

  handleSumbit (evt) {
    evt.preventDefault()
    registration(this.props.newUser)
    this.props.changePage()
  }

  regFormField (fieldProps, props, index) {
    const { inputChange } = props
    const { name, placeholder, type } = fieldProps
    return (
      <div key={index}>
        <label htmlFor={name}>{placeholder}:</label>
        <input onChange={(evt) => inputChange(evt)} type={type} name={name} placeholder={placeholder} />
      </div>
    )
  }

  render () {
    const { regFormField, fieldPropsArr, props } = this
    return (
      <div>
        <form id='userRegistration' onSubmit={(evt) => this.handleSumbit(evt)}>
          {fieldPropsArr.map((fieldProps, index) => regFormField(fieldProps, props, index))}
        </form>
        <button form='userRegistration' type='submit'>SUBMIT</button>
        <button>CANCEL</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { newUser: state.user.newUser }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push('/'),
  inputChange: (evt) => dispatch(actions.userRegistration(evt.target.name, evt.target.value))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
