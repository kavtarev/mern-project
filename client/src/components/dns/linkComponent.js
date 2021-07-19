import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const LinkComponent = () => {
  const id = useParams().id
  console.log('id: ', id)
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch('/api/dns/link/60f568a1a96e4c210cdc8098')
        const res = await data.json()
        console.log('link ', res)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  })
  return <div>gg</div>
}
