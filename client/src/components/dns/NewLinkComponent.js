import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

export const NewLinkComponent = () => {
  const id = useParams().id
  let history = useHistory()
  console.log('id: ', id)
  const formHandler = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/dns/new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: '',
    })
    const data = await res.json()
    console.log(data)

    history.push('/link/:hhh')
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <button>send</button>
      </form>
    </div>
  )
}
