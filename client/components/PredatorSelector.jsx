import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent'

import * as actions from '../actions/index'

class PredatorSelector extends React.Component {
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

  predatorCell (predator) {
    const { name, imgsrc } = predator
    return (
      <div key={name} id={name} className='predCell' onClick={(evt) => this.toggleSelection(evt)}>
        <img className='predImg' src={imgsrc} />
        <p>{name}</p>
      </div>
    )
  }

  toggleSelection (evt) {
    const selectClass = 'predatorSelected'
    const unselectClass = 'predatorCell'
    document.getElementById(evt.target.parentElement.id).className = unselectClass
    if (this.props.selector.predatorSelected !== evt.target.parentElement.id) {
      document.getElementById(evt.target.parentElement.id).className = unselectClass
    }
    this.props.toggleSelected(evt)
    this.props.inputChange(evt)
  }

  render () {
    return (
      <div className='predatorSelector'>
        {this.predators.map(predator => this.predatorCell(predator))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newPredator: state.predator.newPredator,
    selector: state.predator.selector
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  inputChange: (evt) => dispatch(actions.updatePredatorInput('capturedPredator', evt.target.parentElement.id)),
  toggleSelected: (evt) => dispatch(actions.toggleSelected(evt.target.parentElement.id))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PredatorSelector)
