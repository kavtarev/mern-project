import React, { useContext } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context'
import style from './forms.module.css'
function LoginForm() {
  let history = useHistory()

  const context = useContext(AuthContext)
  let [value, setValue] = useState({ email: '', password: '' })
  let [error, setError] = useState('')
  const hadleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleFocus = () => {
    setError('')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },

        body: JSON.stringify(value),
      })
      const res = await data.json()
      if (res.message) {
        setError(res.message)
      } else {
        context.login(res.token)
        history.push('/')
      }
    } catch (e) {
      throw e
    }
  }
  return (
    <div className={style.wraper}>
      <form onFocus={handleFocus}>
        <label htmlFor='email'>email</label>
        <input
          value={value.email}
          onChange={hadleChange}
          type='email'
          name='email'
          id='email'
        />

        <label htmlFor='password'>password</label>
        <input
          value={value.password}
          onChange={hadleChange}
          type='password'
          name='password'
          id='password'
        />
        <span>{error}</span>
        <button className={style.btn} onClick={handleSubmit}>
          login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
