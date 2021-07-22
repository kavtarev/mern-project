import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import style from './link.module.css'

export const NewLinkComponent = () => {
  let [link, setLink] = useState('')
  let [error, setError] = useState('')
  let history = useHistory()

  const inputFocus = () => {
    setError('')
  }
  const inputHandler = (e) => {
    setLink(e.target.value)
  }
  const formHandler = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/dns/new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ link }),
    })
    const data = await res.json()
    if (data.err) {
      setError(data.err)
    } else {
      history.push('/links')
    }
  }

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={formHandler}>
        <label htmlFor='link'>add new link</label>
        <input
          id='link'
          type='text'
          value={link}
          onChange={inputHandler}
          onFocus={inputFocus}
        />
        <span>{error}</span>
        <button className={style.btn}>send</button>
      </form>
    </div>
  )
}
