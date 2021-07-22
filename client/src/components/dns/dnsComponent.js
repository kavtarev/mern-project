import React, { useEffect, useState } from 'react'
import { Loader } from '../loader/Loader'
import style from './link.module.css'

export const DnsComponent = () => {
  let [links, setLinks] = useState('')
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch('/api/dns/links')
        const res = await data.json()

        setLinks(res.links)

        return <div>huuuu</div>
      } catch (e) {
        console.log(e)

        setLinks(e)
        return <div>something went wrong because of u</div>
      }
    }
    getData()
  }, [])
  if (!links) {
    return (
      <div className={style.wrapper}>
        <Loader />
      </div>
    )
  }
  if (links) {
    return (
      <div className={style.wrapper}>
        {links.map((item, i) => (
          <a className={style.link} key={i} href={`/link/${item._id}`}>
            <div>
              <h3>name: {item.link}</h3>
              <h3>ip: {item.ip}</h3>
            </div>
          </a>
        ))}
      </div>
    )
  }
}
