import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class PredatorSelector extends React.Component {
  constructor (props) {
    super(props)
    console.log('props yo!', this.props)
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
      <div id={name} className='predCell' onClick={(evt) => this.toggleSelection(evt)}>
        <img className='predImg' src={imgsrc} />
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
    // return (
    //   <div className='wrapper'>
    //     <div className='predSelectRow'>
    //       <div className='predCell' name='Norway Rat' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/norwayRat.jpg' />
    //         <h4 className='predTitle'>Norway Rat</h4>
    //       </div>
    //       <div className='predCell' name='Ship Rat' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/shipRat.jpg' />
    //         <h4 className='predTitle'>Ship Rat</h4>
    //       </div>
    //       <div className='predCell' name='Mouse' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/mouse.jpg' />
    //         <h4 className='predTitle'>Mouse</h4>
    //       </div>
    //     </div>
    //     <div className='predSelectRow'>
    //       <div className='predCell' name='Ferret' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/ferret.jpg' />
    //         <h4 className='predTitle'>Ferret</h4>
    //       </div>
    //       <div className='predCell' name='Stoat' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/stoat.jpg' />
    //         <h4 className='predTitle'>Stoat</h4>
    //       </div>
    //       <div className='predCell' name='Weasel' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/weasel.jpg' />
    //         <h4 className='predTitle'>Weasel</h4>
    //       </div>
    //     </div>
    //     <div className='predSelectRow'>
    //       <div className='predCell' name='Possum' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/possum.jpg' />
    //         <h4 className='predTitle'>Possum</h4>
    //       </div>
    //       <div className='predCell' name='Hedgehog' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/hedgehog.jpg' />
    //         <h4 className='predTitle'>Hedgehog</h4>
    //       </div>
    //       <div className='predCell' name='Feral Cat' onClick={toggleSelected}>
    //         <img className='predImg' src='../../public/img/feralCat.jpg' />
    //         <h4 className='predTitle'>Feral Cat</h4>
    //       </div>
    //     </div>
    //   </div>
    // )
  }
}

const mapStateToProps = (state) => {
  return {
    newPredator: state.predator.newPredator,
    selector: state.predator.selector
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  inputChange: (evt) => dispatch(actions.updatePredatorInput('predatorSelected', evt.target.parentElement.id)),
  toggleSelected: (evt) => dispatch(actions.toggleSelected(evt.target.parentElement.id))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PredatorSelector)
