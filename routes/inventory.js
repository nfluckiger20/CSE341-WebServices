const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventory.js');

router.get('/', inventoryController.getInventory);
router.get('/:id', inventoryController.getInventoryId);
router.post('/', inventoryController.postInventory);
router.put('/:id', inventoryController.putInventory);
router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;