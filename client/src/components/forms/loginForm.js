import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LoginForm() {
  let history = useHistory()

  function handleClick() {
    history.push('/')
  }
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
        localStorage.setItem('auth', JSON.stringify({ token: res.token }))
      }
    } catch (e) {
      throw e
    }
  }
  return (
    <div>
      <form onFocus={handleFocus}>
        <label htmlFor='email'>email</label>
        <input
          value={value.email}
          onChange={hadleChange}
          type='email'
          name='email'
        />
        <span>{error}</span>
        <label htmlFor='password'>password</label>
        <input
          value={value.password}
          onChange={hadleChange}
          type='password'
          name='password'
        />
        <button onClick={handleSubmit}>login</button>
      </form>
      <button onClick={handleClick}>tryyyyyy</button>
    </div>
  )
}

export default LoginForm
