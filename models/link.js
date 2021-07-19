const { Schema, model, Types } = require('mongoose')

const link = new Schema({
  name: {
    type: String,
    require: [true, 'this must be url'],
    unique: true,
  },
  ip: {
    type: String,
  },
  clicks: { type: Number, default: 0 },
  owner: { type: Types.ObjectId },
})

module.exports = model('Links', link)
