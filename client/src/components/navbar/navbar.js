import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <NavLink to='/'>main</NavLink>
      <NavLink to='/login'>login</NavLink>
      <NavLink to='/register'>register</NavLink>
    </div>
  )
}
