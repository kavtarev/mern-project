import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './forms.css'
function LoginForm() {
  let history = useHistory()

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
        history.push('/')
        // localStorage.setItem('auth', JSON.stringify({ token: res.token }))
      }
    } catch (e) {
      throw e
    }
  }
  return (
    <div className='wraper'>
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
        <button onClick={handleSubmit}>login</button>
      </form>
    </div>
  )
}

export default LoginForm
