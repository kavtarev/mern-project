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
    try {
      let link = await Links.find({
        owner: res.locals.token,
        link: req.body.link,
      })
      if (link.length !== 0) {
        console.log(link)
        return res.json({ err: 'this email is already in the database' })
      }

      dns.lookup(req.body.link, async (err, address, family) => {
        if (err) return res.json({ err: 'not a valid email' })
        // console.log('address: %j family: IPv%s', address, family)
        let newLink = await Links.create({
          link: req.body.link,
          ip: address,
          owner: res.locals.token,
        })
        return res.json(newLink)
      })
    } catch (e) {
      res.json(e)
    }
  }
}

module.exports = new DnsController()
