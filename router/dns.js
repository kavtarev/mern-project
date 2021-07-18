const { Router } = require('express')
const DnsController = require('../controllers/dnsController')
const router = Router()
router.get('/myip', DnsController.getAll)
router.get('/myip/:id', DnsController.getSpecific)
router.post('/new', DnsController.postNew)

module.exports = router
