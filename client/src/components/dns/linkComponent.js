import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../loader/Loader'
import style from './link.module.css'
export const LinkComponent = () => {
  const id = useParams().id
  let [link, setLink] = useState('')

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(`/api/dns/link/${id}`)
        const res = await data.json()
        setLink(res.link)

        return <div>huuuu</div>
      } catch (e) {
        console.log(e)

        setLink(e)
        return <div>something went wrong because of u</div>
      }
    }
    getData()
  }, [id])

  if (!link) {
    return (
      <div className={style.wrapper}>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className={style.wrapper}>
        <h3>{link.link}</h3>
        <h3>{link.ip}</h3>
      </div>
    )
  }
}
