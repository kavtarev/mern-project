const Links = require('../models/link')
const dns = require('dns')

class DnsController {
  async getAll(req, res) {
    const links = await Links.find({ owner: res.locals.token })

    res.json({ links })
  }
  async getSpecific(req, res) {
    const link = await Links.findById({ _id: req.params.id })
    console.log('specific ', req.params.id)
    res.json({ link })
  }
  async postNew(req, res) {
    dns.lookup('google.com', (err, address, family) => {
      if (err) res.json({ err })
      // console.log('address: %j family: IPv%s', address, family)
      res.json({ address, family })
    })
  }
}

module.exports = new DnsController()
