const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
class auth {
  async postLogin(req, res) {
    try {
      let user = await User.findOne({ email: req.body.email })
      if (user) {
        let isLegit = await bcrypt.compare(req.body.password, user.password)
        if (isLegit) {
          const token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 3600,
          })
          res.cookie('JWT', token, { httpOnly: true, maxAge: 3600 * 1000 })
          res.status(200).send(user)
        }
        if (!isLegit) {
          res.send('incorrect pass')
        }
      } else {
        throw new Error('no such')
      }
    } catch (e) {
      res.send(e)
    }
  }
  async postRegister(req, res) {
    try {
      let { email, password } = req.body

      let salt = await bcrypt.genSalt()
      password = await bcrypt.hash(password, salt)
      console.log(email, password)
      let user = await User.create({ email, password })
      console.log('user', user)
      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: 3600,
      })
      res.cookie('JWT', token, { httpOnly: true, maxAge: 3600 * 1000 })
      res.status(200).send(user)
    } catch (e) {
      res.send(e)
    }
  }
}

module.exports = new auth()
