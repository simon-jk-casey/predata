import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './components/App'
import Login from './components/Login'
import Test from './components/Test'

const customHistory = createBrowserHistory()

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router history={customHistory}>
      <App>
        <Route exact path='/' component={Login} />
        <Route path='/test' component={Test} />
      </App>
    </Router>,
    document.getElementById('app')
  )
})

// EXACT PATH RENDERS CORRECTLY -- /test ROUTE DOES NOT WORK

// https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url/43212553

// look at doing basic link/router in render above
