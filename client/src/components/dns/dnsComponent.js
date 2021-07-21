import React, { useEffect, useState } from 'react'

export const DnsComponent = () => {
  let [links, setLinks] = useState('')
  if (links) {
    console.log('liiii ', links)
  }
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch('/api/dns/links')
        const res = await data.json()
        console.log('reeees ', res)
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
    return <div>no thus</div>
  }
  if (links) {
    return (
      <div>
        {links.map((item, i) => (
          <a href={`/link/${item._id}`}>
            <div>
              <div>{i}</div>
              <div>{item.name}</div>
              <div>{item.ip}</div>
            </div>
          </a>
        ))}
      </div>
    )
  }
}
