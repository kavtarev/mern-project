import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context'
import style from './navbar.module.css'

export const Navbar = () => {
  let context = useContext(AuthContext)
  return (
    <div className={style.navbar}>
      <NavLink to='/'>main</NavLink>
      {!context.isLogged && <NavLink to='/login'>login</NavLink>}
      {!context.isLogged && <NavLink to='/register'>register</NavLink>}
      {context.isLogged && <button onClick={context.logout}>logout</button>}
    </div>
  )
}
