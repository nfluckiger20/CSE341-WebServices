const express = require('express');
const router = express.Router();

const locationController = require('../controllers/location.js');

router.get('/', locationController.getAll);

router.get('/:username', locationController.getLocation);

router.post('/', locationController.create);

module.exports = router; 