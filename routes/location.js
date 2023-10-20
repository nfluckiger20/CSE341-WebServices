const express = require('express');
const router = express.Router();

const locationController = require('../controllers/location.js');

router.get('/', locationController.getAll);
router.get('/:username', locationController.getLocation);
router.delete('/', locationController.deleteLocation);
router.put('/', locationController.putLocation);

module.exports = router; 