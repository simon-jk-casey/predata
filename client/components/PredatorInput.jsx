import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class PredatorInput extends React.Component {
  render () {
    return (
      <div>
        <form id='predatorEntry'>
          <div className='deviceSelector'>
            <select id='deviceSelect'>
              <option value='null'>Select Device</option>
              {/* {insert function for device list select options here} */}
            </select>
          </div>
          <div className='errorField'><p id='errorMsg'></p></div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { addPredator: state.predatorData.addPredator }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push('')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PredatorInput)
