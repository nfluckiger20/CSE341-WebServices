const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/theme');

router.get('/:themeName', inventoryController.getInventory);

module.exports = router;