const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

router.post('/customers', authController.createCustomer);

router.get('/customers', authController.getUsers);



module.exports = router