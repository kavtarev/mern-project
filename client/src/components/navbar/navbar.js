import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context'
import style from './navbar.module.css'

export const Navbar = () => {
  let context = useContext(AuthContext)

  {
    return !context.isLogged ? (
      <div className={style.navbar}>
        <NavLink to='/'>main</NavLink>
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/register'>register</NavLink>
      </div>
    ) : (
      <div className={style.navbar}>
        <NavLink to='/new'>new</NavLink>
        <NavLink to='/links'>links</NavLink>
        <button onClick={context.logout}>logout</button>
      </div>
    )
  }
}
