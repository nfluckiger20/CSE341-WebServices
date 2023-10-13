const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/location', require('./location'));
router.use('/inventory', require('./inventory'));

module.exports = router;