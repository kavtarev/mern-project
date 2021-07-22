const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
  try {
    const token = jwt.verify(req.cookies['JWT2'], process.env.SECRET)
    res.locals.token = token.id
    next()
  } catch (e) {
    console.log('error in auth process ', e)
  }
}
