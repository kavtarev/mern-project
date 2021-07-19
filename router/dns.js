const { Router } = require('express')
const DnsController = require('../controllers/dnsController')
const auth = require('../middleware/auth')
const router = Router()
router.get('/links', auth, DnsController.getAll)
router.get('/link/:id', auth, DnsController.getSpecific)
router.post('/new', auth, DnsController.postNew)

module.exports = router
