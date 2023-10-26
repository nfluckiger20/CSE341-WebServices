const express = require('express');
const router = express.Router();

const locationController = require('../controllers/location.js');

router.get('/', locationController.getAll);
router.get('/:id', locationController.getLocation);
router.post('/', locationController.postLocation);
router.put('/:id', locationController.putLocation);
router.delete('/:id', locationController.deleteLocation);

module.exports = router; 