const express = require('express');
const router = express.Router();

const locationController = require('../controllers/location.js');

router.get('/', locationController.getAll);
router.get('/:id', locationController.getLocation);
router.delete('/', locationController.deleteLocation);
router.put('/:id', locationController.putLocation);
router.post('/', locationController.putLocation);

module.exports = router; 