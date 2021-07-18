import React, { useEffect } from 'react'

export const DnsComponent = () => {
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch('/api/dns/myip')
        const res = await data.json()
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  })
  return <div>gg</div>
}
