const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventory.js');

router.get('/', inventoryController.getInventory);
router.get('/:id', inventoryController.getInventoryId);

module.exports = router;