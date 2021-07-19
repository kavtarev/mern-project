const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
  try {
    const token = jwt.verify(req.cookies['JWT2'], process.env.SECRET)
    res.locals.token = token.id
    console.log(token)
    next()
  } catch (e) {
    console.log('error fdf ', e)
  }
}
;`Error: getaddrinfo ENOTFOUND googlecom
at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:64:26) {
errno: 'ENOTFOUND',
code: 'ENOTFOUND',
syscall: 'getaddrinfo',
hostname: 'googlecom'
}`
