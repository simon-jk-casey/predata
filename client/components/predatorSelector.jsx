import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class predatorSelector extends React.Component {
  render () {
    <div className='wrapper'>
      <div className='predSelectRow'>
        <div className='predCell' name='Norway Rat' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/norwayRat.jpg' />
          <h4 className='predTitle'>Norway Rat</h4>
        </div>
        <div className='predCell' name='Ship Rat' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/shipRat.jpg' />
          <h4 className='predTitle'>Ship Rat</h4>
        </div>
        <div className='predCell' name='Mouse' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/mouse.jpg' />
          <h4 className='predTitle'>Mouse</h4>
        </div>
      </div>
      <div className='predSelectRow'>
        <div className='predCell' name='Ferret' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/ferret.jpg' />
          <h4 className='predTitle'>Ferret</h4>
        </div>
        <div className='predCell' name='Stoat' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/stoat.jpg' />
          <h4 className='predTitle'>Stoat</h4>
        </div>
        <div className='predCell' name='Weasel' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/weasel.jpg' />
          <h4 className='predTitle'>Weasel</h4>
        </div>
      </div>
      <div className='predSelectRow'>
        <div className='predCell' name='Possum' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/possum.jpg' />
          <h4 className='predTitle'>Possum</h4>
        </div>
        <div className='predCell' name='Hedgehog' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/hedgehog.jpg' />
          <h4 className='predTitle'>Hedgehog</h4>
        </div>
        <div className='predCell' name='Feral Cat' onClick={toggleSelected}>
          <img className='predImg' src='../../public/img/feralCat.jpg' />
          <h4 className='predTitle'>Feral Cat</h4>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return { newPredator: state.predator.newPredator }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)
