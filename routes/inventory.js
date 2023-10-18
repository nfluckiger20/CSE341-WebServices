const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventory.js');

router.get('/:themeName', inventoryController.getInventory);

module.exports = router;