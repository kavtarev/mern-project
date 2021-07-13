const User = require('../models/user')
class auth {
  postLogin(req, res) {
    console.log(req.body)
    res.json({ hi: 'fff' })
  }
  async postRegister(req, res) {
    try {
      let user = await User.create(req.body)
      res.send(user)
    } catch (e) {
      res.send(e)
    }
  }
}

module.exports = new auth()
