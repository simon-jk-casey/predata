import React from 'react'

import Menu from './Menu'

const App = ({ children }) => {
  return (
    <div className='appHeader'>
      <h1>preData</h1>
      <h2>Data collection for community based predator eradication initiatives</h2>
      <Menu />
      { children }
    </div>
  )
}

export default App
