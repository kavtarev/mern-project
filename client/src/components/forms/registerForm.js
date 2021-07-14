import React from 'react'

function RegisterForm() {
  return (
    <div>
      <form>
        <label htmlFor='email'>email</label>
        <input type='email' name='email' />
        <span></span>
        <label htmlFor='password'>password</label>
        <input type='password' name='password' />
      </form>
    </div>
  )
}

export default RegisterForm
