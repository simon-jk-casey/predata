import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class PredatorHistory extends React.Component {
  constructor (props) {
    super(props)
    console.log('history props', props)
    this.predators = [
      {name: 'Norway Rat', imgsrc: '../../img/norwayRat.jpg'},
      {name: 'Ship Rat', imgsrc: '../../img/shipRat.jpg'},
      {name: 'Mouse', imgsrc: '../../img/mouse.jpg'},
      {name: 'Ferret', imgsrc: '../../img/ferret.jpg'},
      {name: 'Stoat', imgsrc: '../../img/stoat.jpg'},
      {name: 'Weasel', imgsrc: '../../img/weasel.jpg'},
      {name: 'Possum', imgsrc: '../../img/possum.jpg'},
      {name: 'Hedgehog', imgsrc: '../../img/hedgehog.jpg'},
      {name: 'Feral Cat', imgsrc: '../../img/feralCat.jpg'}
    ]
  }

  componentWillMount () {
    this.props.dispatch(actions.getCaptureHistory())
  }
  imagePicker (predCaptured) {
    for (var i = 0; i < this.predators.length; i++) {
      if (this.predators[i].name === predCaptured) {
        return this.predators[i].imgsrc
      }
    }
  }

  correctDate (date) {
    const dateTimeArr = date.split(' ')
    const timeArr = dateTimeArr[1].split(':')
    const dateArr = dateTimeArr[0].split('-')
    const day = dateArr[2]
    const monthVal = parseInt(dateArr[1])
    const year = dateArr[0]
    function month (monthValue) {
      switch (monthValue) {
        case 1:
          return 'January'
        case 2:
          return 'February'
        case 3:
          return 'March'
        case 4:
          return 'April'
        case 5:
          return 'May'
        case 6:
          return 'June'
        case 7:
          return 'July'
        case 8:
          return 'August'
        case 9:
          return 'September'
        case 10:
          return 'October'
        case 11:
          return 'November'
        case 12:
          return 'December'
        default:
          return
      }
    }
    const dateStr = day + ' ' + month(monthVal) + ' ' + year
    return dateStr
  }

  historyCell (histItem) {
    console.log(histItem)
    const { captureId, captureDate, predCaptured, predNotes, deviceName, deviceType } = histItem
    return (
      <div key={captureId} className='historyCell'>
        <div className='histImg'>
          <img src={this.imagePicker(predCaptured)} />
        </div>
        <div className='histInfo'>
          <div>
            <div><p>Date: {this.correctDate(captureDate)}</p></div>
            <div><p>Animal: {predCaptured}</p></div>
          </div>
          <div>
            <div><p>Device Type: {deviceType}</p></div>
            <div><p>Device Name: {deviceName}</p></div>
          </div>
          <div>
            <div><p>Notes: {predNotes}</p></div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <h2>Predator Capture History</h2>
        {this.props.history.map(historyItem => this.historyCell(historyItem))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.predator.history,
    timezone: state.global.userTimezone
  }
}

export default connect(mapStateToProps)(PredatorHistory)
