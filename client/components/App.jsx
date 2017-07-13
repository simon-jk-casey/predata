import React from 'react'
import { Route } from 'react-router-dom'

import Menu from './Menu'
import Login from './Login'
import Test from './Test'
import Registration from './Registration'
import Profile from './Profile'
import PredatorInput from './PredatorInput'
import MyDevices from './MyDevices'
import PredatorSelector from './PredatorSelector'
import PredatorHistory from './PredatorHistory'
import DeviceList from './DeviceList'

const App = () => {
  return (
    <div>
      <header>
        <h1>preData</h1>
        <h2>Data collection for community based predator eradication initiatives</h2>
        <Menu />
      </header>
      <main>
        <Route exact path='/' component={Login} />
        <Route exact path='/test' component={DeviceList} />
        <Route exact path='/register' component={Registration} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/addPredator' component={PredatorInput} />
        <Route exact path='/myDevices' component={MyDevices} />
        <Route exact path='/history' component={PredatorHistory} />
      </main>
    </div>
  )
}

export default App
