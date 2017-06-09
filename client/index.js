import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { init } from './actions/index'
import configureStore from './configureStore'

import App from './components/App'
import Login from './components/Login'
import Test from './components/Test'

const customHistory = createBrowserHistory()

const store = configureStore()

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

store.dispatch(init())

// EXACT PATH RENDERS CORRECTLY -- /test ROUTE DOES NOT WORK

// https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url/43212553

// look at doing basic link/router in render above
