import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const LinkComponent = () => {
  const id = useParams().id
  // let history = useHistory()
  let [link, setLink] = useState('')

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(`/api/dns/link/${id}`)
        const res = await data.json()
        console.log('reeees ', res)
        setLink(res.link)

        return <div>huuuu</div>
      } catch (e) {
        console.log(e)

        setLink(e)
        return <div>something went wrong because of u</div>
      }
    }
    getData()
  }, [])

  if (!link) {
    return <div>no</div>
  } else {
    return (
      <div>
        <div>{link._id}</div>
        <div>{link.name}</div>
        <div>{link.ip}</div>
      </div>
    )
  }
}
