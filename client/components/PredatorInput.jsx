import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

import PredatorSelector from './PredatorSelector'

class PredatorInput extends React.Component {
  render () {
    const { inputChange, changePage } = this.props
    return (
      <div>
        <form id='predatorEntry'>
          <div className='deviceSelector'>
            <select id='deviceSelect' defaultValue='null' onChange={(evt) => inputChange(evt)}>
              <option value='null'>Select Device</option>
              {/* {insert function for device list select options here} */}
            </select>
          </div>
          <div className='errorField'><p id='errorMsg'></p></div>
          <div className='predatorSelector'>
            <PredatorSelector />
          </div>
          <div>
            <textarea className='predNotes' onChange={(evt) => inputChange(evt)} name='Notes' rows='6' cols='60' wrap='soft' maxLength='240' />
          </div>
        </form>
        <div className='buttonDiv'>
          <button form='predatorEntry' onClick='' type='submit'>SUBMIT</button>
          <button onClick=''>CANCEL</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { newPredator: state.predator.newPredator }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push(''),
  inputChange: (evt) => dispatch(actions.updatePredatorInput(evt.target.name, evt.target.value))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PredatorInput)
