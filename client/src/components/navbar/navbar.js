import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context'

export const Navbar = () => {
  let context = useContext(AuthContext)
  return (
    <div className='navbar'>
      <NavLink to='/'>main</NavLink>
      <NavLink to='/login'>login</NavLink>
      <NavLink to='/register'>register</NavLink>
      <button onClick={context.logout}>logout</button>
    </div>
  )
}
