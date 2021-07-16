import React, { useContext } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context'
import './forms.css'
function RegisterForm(props) {
  let [value, setValue] = useState({ email: '', password: '' })
  let [emailError, setEmailError] = useState('')
  let [passwordError, setPasswordError] = useState('')
  const hadleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  let history = useHistory()
  const context = useContext(AuthContext)
  const handleFocus = () => {
    setEmailError('')
    setPasswordError('')
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    context.login('huh')
    history.push('/')
    /* try {
      const data = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },

        body: JSON.stringify(value),
      })
      const res = await data.json()
      if (typeof res.message === 'string') {
        setEmailError(res.message)
      }
      if (res.message.email) {
        setEmailError(res.message.email.message)
      }
      if (res.message.password) {
        setPasswordError(res.message.password.message)
      }
    } catch (e) {
      throw e
    } */
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
        <span>{emailError}</span>
        <label htmlFor='password'>password</label>
        <input
          value={value.password}
          onChange={hadleChange}
          type='password'
          name='password'
          id='password'
        />
        <span>{passwordError}</span>
        <button onClick={handleSubmit}>register</button>
      </form>
    </div>
  )
}

export default RegisterForm
