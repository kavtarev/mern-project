const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const user = new Schema({
  email: {
    type: String,
    require: [true, 'this must be an email'],
    unique: true,
    minLength: [3, 'min length is 3'],
  },
  password: {
    type: String,
    minLength: [4, 'min  password length is 4'],
    require: [true, 'this must be an password'],
  },
})
user.pre('save', async function (next) {
  let salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)

  next()
})
module.exports = model('reactUser', user)
