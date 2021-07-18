class DnsController {
  getAll(req, res) {
    console.log(req.cookies)
    res.json({ kok: 'kok' })
  }
  async getSpecific(req, res) {}
  async postNew(req, res) {}
}
module.exports = new DnsController()
