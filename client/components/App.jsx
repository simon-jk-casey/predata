import React from 'react'
import { Route } from 'react-router-dom'

import Menu from './Menu'
import Login from './Login'
import Test from './Test'
import Registration from './Registration'
import Profile from './Profile'

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
        <Route exact path='/test' component={Test} />
        <Route exact path='/register' component={Registration} />
        <Route exact path='/profile' component={Profile} />
      </main>
    </div>
  )
}

export default App
