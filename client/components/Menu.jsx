import React from 'react'

const Menu = () => {
  return (
    <div className='menuBar'>
      <button className='menuButton'>REGISTER</button>
      <button className='menuButton'>ABOUT</button>
      <button className='menuButton'>CONTACT</button>
    </div>
  )
}

export default Menu

// when redux added:

// if (state.isAuthenticated) {
//   return (
//     <div className='menuBar'>
//       <button className='menuButton'>PROFILE</button>
//       <button className='menuButton'>DEVICES</button>
//       <button className='menuButton'>DATA ENTRY</button>
//       <button className='menuButton'>HISTORY</button>
//       <button className='menuButton'>DATA VIEWS</button>
//       <button className='menuButton'>LOG OUT</button>
//     </div>
//   )
// } else {
//   return (
//     <div className='menuBar'>
//       <button className='menuButton'>REGISTER</button>
//       <button className='menuButton'>ABOUT</button>
//       <button className='menuButton'>CONTACT</button>
//     </div>
//   )
// }
