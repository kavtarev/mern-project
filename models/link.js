const { Schema, model, Types } = require('mongoose')

const link = new Schema({
  link: {
    type: String,
    require: [true, 'this must be url'],
  },
  ip: {
    type: String,
  },
  clicks: { type: Number, default: 0 },
  owner: { type: Types.ObjectId },
})

module.exports = model('Links', link)
