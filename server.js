require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')
const authRouter = require('./router/auth')
const dnsRouter = require('./router/dns')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', authRouter)
app.use('/api/dns', dnsRouter)

app.get('/', (req, res) => {
  res.json({ hi: 'hi' })
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
;('git branch -M main')
