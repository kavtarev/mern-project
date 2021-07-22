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
            expiresIn: 3600 * 20,
          })
          //res.cookie('token', token, { maxAge: 3600 * 1000 })
          res.status(200).json({ token })
        }
        if (!isLegit) {
          throw new Error('incorrect email or password')
        }
      } else {
        throw new Error('incorrect email or password')
      }
    } catch (e) {
      res.json({ message: e.message })
    }
  }
  async postRegister(req, res) {
    try {
      let { email, password } = req.body

      let user = await User.create({ email, password })
      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: 3600 * 20,
      })
      //res.cookie('token', token, { maxAge: 3600 * 1000 })
      res.status(200).json({ token })
    } catch (e) {
      if (e.code === 11000) res.json({ message: 'email is already taken' })
      else {
        res.json({ message: e.errors })
      }
    }
  }
}

module.exports = new auth()
