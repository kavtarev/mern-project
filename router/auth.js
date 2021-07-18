const { Router } = require('express')
const router = Router()
const Auth = require('../controllers/authControllers')

router.post('/register', Auth.postRegister)
router.post('/login', Auth.postLogin)
router.get('/jj', (req, res) => {
  res.send('hui')
})

module.exports = router
