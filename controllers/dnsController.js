const Links = require('../models/link')

class DnsController {
  async getAll(req, res) {
    const links = await Links.find({ owner: res.locals.token })

    res.json({ kok: 'kok', links })
  }
  async getSpecific(req, res) {
    const link = await Links.findById({ _id: req.params.id })
    console.log('specific ', req.params.id)
    res.json({ kok: 'kokk', link })
  }
  async postNew(req, res) {
    const link = Links.create({
      name: 'dfsdf',
      ip: 'dsfsdf',
      owner: '60f03a898c90e0140869cfd6',
    })
  }
}

module.exports = new DnsController()
