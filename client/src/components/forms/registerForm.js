import React from 'react'
import { useState } from 'react'

function RegisterForm() {
  let [value, setValue] = useState({ email: '', password: '' })
  const hadleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },

        body: JSON.stringify(value),
      })
      const res = await data.json()
      console.log(res)
    } catch (e) {
      throw e
    }
  }
  return (
    <div>
      <form>
        <label htmlFor='email'>email</label>
        <input
          value={value.email}
          onChange={hadleChange}
          type='email'
          name='email'
        />
        <span></span>
        <label htmlFor='password'>password</label>
        <input
          value={value.password}
          onChange={hadleChange}
          type='password'
          name='password'
        />
        <button onClick={handleSubmit}>register</button>
      </form>
    </div>
  )
}

export default RegisterForm
