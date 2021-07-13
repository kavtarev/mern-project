const { Schema, model } = require('mongoose')

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

module.exports = model('reactUser', user)
