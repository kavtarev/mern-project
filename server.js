require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')
const router = require('./router/auth')
app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', router)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err)
    app.listen(PORT, () => {
      console.log(`server is up on port ${PORT}`)
    })
  }
)
