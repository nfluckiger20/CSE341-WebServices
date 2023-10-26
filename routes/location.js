const express = require('express');
const router = express.Router();

const locationController = require('../controllers/location.js');

router.get('/', locationController.getAll);
router.get('/:id', locationController.getLocation);
router.put('/:id', locationController.putLocation);
router.post('/', locationController.putLocation);
router.delete('/', locationController.deleteLocation);

module.exports = router; 