const router = require('express').Router();

const contacts = require("../controllers/contacts")

router.get('/', contacts.main)

module.exports = router;