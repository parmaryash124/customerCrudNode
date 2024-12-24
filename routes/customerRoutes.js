const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/addCustomer', customerController.addCustomer);
router.get('/getCustomers', customerController.getCustomers);
router.get('/:id', customerController.getCustomerById);
router.put('/updateCustomer/:id', customerController.updateCustomer);
router.post('/removeCustomer/:id', customerController.removeCustomer);

module.exports = router;
