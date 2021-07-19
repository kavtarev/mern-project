const dns = require('dns')
dns.lookup('googlecom', (err, address, family) => {
  if (err) console.log(err)
  console.log('address: %j family: IPv%s', address, family)
})
/* require('dotenv').config()
const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err)
    console.log('ok')
  }
)
const personSchema = Schema({
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
})

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
})

const Story = mongoose.model('Story', storySchema)
const Person = mongoose.model('Person', personSchema)
const author = new Person({
  name: 'Ian Fleming',
  age: 50,
})

author.save(function (err) {
  if (err) return handleError(err)

  const story1 = new Story({
    title: 'Casino Royale',
    author: author._id, // assign the _id from the person
  })

  story1.save(function (err) {
    if (err) return handleError(err)
    console.log('author ', author)
    console.log('story ', story1)
  })
}) 
Story.findOne({ title: 'Casino Royale' })
  .populate('author')
  .exec(function (err, story) {
    if (err) return handleError(err)
    console.log('The author is %s', story.author.name)
    // prints "The author is Ian Fleming"
  })
 */
