import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class PredatorHistory extends React.Component {
  constructor (props) {
    super(props)
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

  imagePicker (predCaptured) {
    for (var i=0; i<this.predators.length; i++) {
      if (this.predators[i].name === predCaptured) {
        return this.predators[i].imgsrc
      }
    }
  }

  historyCell (histItem) {
    const { captureId, captureDate, predCaptured, predNotes, deviceName, deviceType } = histItem
    return (
      <div key={captureId} className='historyCell'>
        <div className='histImg'>
          <img src={this.imagePicker(predCaptured)} />
        </div>
        <div className='histInfo'>
          <div>
            <div><p>Date: {captureDate}</p></div>
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
    history: state.predator.history
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push('/test')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PredatorHistory)
